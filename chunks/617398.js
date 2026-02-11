function t(e) {
    return (
        e instanceof Map
            ? (e.clear =
                  e.delete =
                  e.set =
                      function () {
                          throw Error("map is read-only");
                      })
            : e instanceof Set &&
              (e.add =
                  e.clear =
                  e.delete =
                      function () {
                          throw Error("set is read-only");
                      }),
        Object.freeze(e),
        Object.getOwnPropertyNames(e).forEach((n) => {
            let r = e[n],
                i = typeof r;
            ("object" !== i && "function" !== i) || Object.isFrozen(r) || t(r);
        }),
        e
    );
}
class n {
    constructor(e) {
        void 0 === e.data && (e.data = {}), (this.data = e.data), (this.isMatchIgnored = !1);
    }
    ignoreMatch() {
        this.isMatchIgnored = !0;
    }
}
function r(e) {
    return e
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
}
function i(e, ...t) {
    let n = Object.create(null);
    for (let t in e) n[t] = e[t];
    return (
        t.forEach(function (e) {
            for (let t in e) n[t] = e[t];
        }),
        n
    );
}
let a = "</span>",
    s = (e) => !!e.scope,
    o = (e, { prefix: t }) => {
        if (e.startsWith("language:")) return e.replace("language:", "language-");
        if (e.includes(".")) {
            let n = e.split(".");
            return [`${t}${n.shift()}`, ...n.map((e, t) => `${e}${"_".repeat(t + 1)}`)].join(" ");
        }
        return `${t}${e}`;
    };
class l {
    constructor(e, t) {
        (this.buffer = ""), (this.classPrefix = t.classPrefix), e.walk(this);
    }
    addText(e) {
        this.buffer += r(e);
    }
    openNode(e) {
        if (!s(e)) return;
        let t = o(e.scope, { prefix: this.classPrefix });
        this.span(t);
    }
    closeNode(e) {
        s(e) && (this.buffer += a);
    }
    value() {
        return this.buffer;
    }
    span(e) {
        this.buffer += `<span class="${e}">`;
    }
}
let u = (e = {}) => {
    let t = { children: [] };
    return Object.assign(t, e), t;
};
class c {
    constructor() {
        (this.rootNode = u()), (this.stack = [this.rootNode]);
    }
    get top() {
        return this.stack[this.stack.length - 1];
    }
    get root() {
        return this.rootNode;
    }
    add(e) {
        this.top.children.push(e);
    }
    openNode(e) {
        let t = u({ scope: e });
        this.add(t), this.stack.push(t);
    }
    closeNode() {
        if (this.stack.length > 1) return this.stack.pop();
    }
    closeAllNodes() {
        for (; this.closeNode(); );
    }
    toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
    }
    walk(e) {
        return this.constructor._walk(e, this.rootNode);
    }
    static _walk(e, t) {
        return (
            "string" == typeof t
                ? e.addText(t)
                : t.children && (e.openNode(t), t.children.forEach((t) => this._walk(e, t)), e.closeNode(t)),
            e
        );
    }
    static _collapse(e) {
        "string" == typeof e ||
            (e.children &&
                (e.children.every((e) => "string" == typeof e)
                    ? (e.children = [e.children.join("")])
                    : e.children.forEach((e) => {
                          c._collapse(e);
                      })));
    }
}
class d extends c {
    constructor(e) {
        super(), (this.options = e);
    }
    addText(e) {
        "" !== e && this.add(e);
    }
    startScope(e) {
        this.openNode(e);
    }
    endScope() {
        this.closeNode();
    }
    __addSublanguage(e, t) {
        let n = e.root;
        t && (n.scope = `language:${t}`), this.add(n);
    }
    toHTML() {
        return new l(this, this.options).value();
    }
    finalize() {
        return this.closeAllNodes(), !0;
    }
}
function _(e) {
    return e ? ("string" == typeof e ? e : e.source) : null;
}
function f(e) {
    return g("(?=", e, ")");
}
function h(e) {
    return g("(?:", e, ")*");
}
function p(e) {
    return g("(?:", e, ")?");
}
function g(...e) {
    return e.map((e) => _(e)).join("");
}
function E(e) {
    let t = e[e.length - 1];
    return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function A(...e) {
    return "(" + (E(e).capture ? "" : "?:") + e.map((e) => _(e)).join("|") + ")";
}
function I(e) {
    return RegExp(e.toString() + "|").exec("").length - 1;
}
function T(e, t) {
    let n = e && e.exec(t);
    return n && 0 === n.index;
}
let y = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function S(e, { joinWith: t }) {
    let n = 0;
    return e
        .map((e) => {
            let t = (n += 1),
                r = _(e),
                i = "";
            for (; r.length > 0; ) {
                let e = y.exec(r);
                if (!e) {
                    i += r;
                    break;
                }
                (i += r.substring(0, e.index)),
                    (r = r.substring(e.index + e[0].length)),
                    "\\" === e[0][0] && e[1]
                        ? (i += "\\" + String(Number(e[1]) + t))
                        : ((i += e[0]), "(" === e[0] && n++);
            }
            return i;
        })
        .map((e) => `(${e})`)
        .join(t);
}
let v = /\b\B/,
    C = "[a-zA-Z]\\w*",
    b = "[a-zA-Z_]\\w*",
    N = "\\b\\d+(\\.\\d+)?",
    R = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    O = "\\b(0b[01]+)",
    D =
        "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    L = (e = {}) => {
        let t = /^#![ ]*\//;
        return (
            e.binary && (e.begin = g(t, /.*\b/, e.binary, /\b.*/)),
            i(
                {
                    scope: "meta",
                    begin: t,
                    end: /$/,
                    relevance: 0,
                    "on:begin": (e, t) => {
                        0 !== e.index && t.ignoreMatch();
                    },
                },
                e,
            )
        );
    },
    w = { begin: "\\\\[\\s\\S]", relevance: 0 },
    x = { scope: "string", begin: "'", end: "'", illegal: "\\n", contains: [w] },
    P = { scope: "string", begin: '"', end: '"', illegal: "\\n", contains: [w] },
    M = {
        begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
    },
    k = function (e, t, n = {}) {
        let r = i({ scope: "comment", begin: e, end: t, contains: [] }, n);
        r.contains.push({
            scope: "doctag",
            begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
            end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
            excludeBegin: !0,
            relevance: 0,
        });
        let a = A(
            "I",
            "a",
            "is",
            "so",
            "us",
            "to",
            "at",
            "if",
            "in",
            "it",
            "on",
            /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
            /[A-Za-z]+[-][a-z]+/,
            /[A-Za-z][a-z]{2,}/,
        );
        return r.contains.push({ begin: g(/[ ]+/, "(", a, /[.]?[:]?([.][ ]|[ ])/, "){3}") }), r;
    },
    U = k("//", "$"),
    G = k("/\\*", "\\*/"),
    F = k("#", "$"),
    V = {
        scope: "regexp",
        begin: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [w, { begin: /\[/, end: /\]/, relevance: 0, contains: [w] }],
    },
    B = { scope: "title", begin: C, relevance: 0 },
    j = { scope: "title", begin: b, relevance: 0 };
var H = Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: x,
    BACKSLASH_ESCAPE: w,
    BINARY_NUMBER_MODE: { scope: "number", begin: O, relevance: 0 },
    BINARY_NUMBER_RE: O,
    COMMENT: k,
    C_BLOCK_COMMENT_MODE: G,
    C_LINE_COMMENT_MODE: U,
    C_NUMBER_MODE: { scope: "number", begin: R, relevance: 0 },
    C_NUMBER_RE: R,
    END_SAME_AS_BEGIN: function (e) {
        return Object.assign(e, {
            "on:begin": (e, t) => {
                t.data._beginMatch = e[1];
            },
            "on:end": (e, t) => {
                t.data._beginMatch !== e[1] && t.ignoreMatch();
            },
        });
    },
    HASH_COMMENT_MODE: F,
    IDENT_RE: C,
    MATCH_NOTHING_RE: v,
    METHOD_GUARD: { begin: "\\.\\s*" + b, relevance: 0 },
    NUMBER_MODE: { scope: "number", begin: N, relevance: 0 },
    NUMBER_RE: N,
    PHRASAL_WORDS_MODE: M,
    QUOTE_STRING_MODE: P,
    REGEXP_MODE: V,
    RE_STARTERS_RE: D,
    SHEBANG: L,
    TITLE_MODE: B,
    UNDERSCORE_IDENT_RE: b,
    UNDERSCORE_TITLE_MODE: j,
});
function Y(e, t) {
    "." === e.input[e.index - 1] && t.ignoreMatch();
}
function W(e, t) {
    void 0 !== e.className && ((e.scope = e.className), delete e.className);
}
function K(e, t) {
    !t ||
        (e.beginKeywords &&
            ((e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)"),
            (e.__beforeBegin = Y),
            (e.keywords = e.keywords || e.beginKeywords),
            delete e.beginKeywords,
            void 0 === e.relevance && (e.relevance = 0)));
}
function $(e, t) {
    Array.isArray(e.illegal) && (e.illegal = A(...e.illegal));
}
function z(e, t) {
    if (e.match) {
        if (e.begin || e.end) throw Error("begin & end are not supported with match");
        (e.begin = e.match), delete e.match;
    }
}
function q(e, t) {
    void 0 === e.relevance && (e.relevance = 1);
}
let X = (e, t) => {
        if (!e.beforeMatch) return;
        if (e.starts) throw Error("beforeMatch cannot be used with starts");
        let n = Object.assign({}, e);
        Object.keys(e).forEach((t) => {
            delete e[t];
        }),
            (e.keywords = n.keywords),
            (e.begin = g(n.beforeMatch, f(n.begin))),
            (e.starts = { relevance: 0, contains: [Object.assign(n, { endsParent: !0 })] }),
            (e.relevance = 0),
            delete n.beforeMatch;
    },
    Z = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"],
    Q = "keyword";
function J(e, t, n = Q) {
    let r = Object.create(null);
    return (
        "string" == typeof e
            ? i(n, e.split(" "))
            : Array.isArray(e)
              ? i(n, e)
              : Object.keys(e).forEach(function (n) {
                    Object.assign(r, J(e[n], t, n));
                }),
        r
    );
    function i(e, n) {
        t && (n = n.map((e) => e.toLowerCase())),
            n.forEach(function (t) {
                let n = t.split("|");
                r[n[0]] = [e, ee(n[0], n[1])];
            });
    }
}
function ee(e, t) {
    return t ? Number(t) : +!et(e);
}
function et(e) {
    return Z.includes(e.toLowerCase());
}
let en = {},
    er = (e) => {
        console.error(e);
    },
    ei = (e, ...t) => {
        console.log(`WARN: ${e}`, ...t);
    },
    ea = (e, t) => {
        en[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), (en[`${e}/${t}`] = !0));
    },
    es = Error();
function eo(e, t, { key: n }) {
    let r = 0,
        i = e[n],
        a = {},
        s = {};
    for (let e = 1; e <= t.length; e++) (s[e + r] = i[e]), (a[e + r] = !0), (r += I(t[e - 1]));
    (e[n] = s), (e[n]._emit = a), (e[n]._multi = !0);
}
function el(e) {
    if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin)
            throw (er("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), es);
        if ("object" != typeof e.beginScope || null === e.beginScope) throw (er("beginScope must be object"), es);
        eo(e, e.begin, { key: "beginScope" }), (e.begin = S(e.begin, { joinWith: "" }));
    }
}
function eu(e) {
    if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd)
            throw (er("skip, excludeEnd, returnEnd not compatible with endScope: {}"), es);
        if ("object" != typeof e.endScope || null === e.endScope) throw (er("endScope must be object"), es);
        eo(e, e.end, { key: "endScope" }), (e.end = S(e.end, { joinWith: "" }));
    }
}
function ec(e) {
    e.scope && "object" == typeof e.scope && null !== e.scope && ((e.beginScope = e.scope), delete e.scope);
}
function ed(e) {
    ec(e),
        "string" == typeof e.beginScope && (e.beginScope = { _wrap: e.beginScope }),
        "string" == typeof e.endScope && (e.endScope = { _wrap: e.endScope }),
        el(e),
        eu(e);
}
function e_(e) {
    function t(t, n) {
        return RegExp(_(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (n ? "g" : ""));
    }
    class n {
        constructor() {
            (this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0);
        }
        addRule(e, t) {
            (t.position = this.position++),
                (this.matchIndexes[this.matchAt] = t),
                this.regexes.push([t, e]),
                (this.matchAt += I(e) + 1);
        }
        compile() {
            0 === this.regexes.length && (this.exec = () => null);
            let e = this.regexes.map((e) => e[1]);
            (this.matcherRe = t(S(e, { joinWith: "|" }), !0)), (this.lastIndex = 0);
        }
        exec(e) {
            this.matcherRe.lastIndex = this.lastIndex;
            let t = this.matcherRe.exec(e);
            if (!t) return null;
            let n = t.findIndex((e, t) => t > 0 && void 0 !== e),
                r = this.matchIndexes[n];
            return t.splice(0, n), Object.assign(t, r);
        }
    }
    class r {
        constructor() {
            (this.rules = []), (this.multiRegexes = []), (this.count = 0), (this.lastIndex = 0), (this.regexIndex = 0);
        }
        getMatcher(e) {
            if (this.multiRegexes[e]) return this.multiRegexes[e];
            let t = new n();
            return this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)), t.compile(), (this.multiRegexes[e] = t), t;
        }
        resumingScanAtSamePosition() {
            return 0 !== this.regexIndex;
        }
        considerAll() {
            this.regexIndex = 0;
        }
        addRule(e, t) {
            this.rules.push([e, t]), "begin" === t.type && this.count++;
        }
        exec(e) {
            let t = this.getMatcher(this.regexIndex);
            t.lastIndex = this.lastIndex;
            let n = t.exec(e);
            if (this.resumingScanAtSamePosition())
                if (n && n.index === this.lastIndex);
                else {
                    let t = this.getMatcher(0);
                    (t.lastIndex = this.lastIndex + 1), (n = t.exec(e));
                }
            return n && ((this.regexIndex += n.position + 1), this.regexIndex === this.count && this.considerAll()), n;
        }
    }
    function a(e) {
        let t = new r();
        return (
            e.contains.forEach((e) => t.addRule(e.begin, { rule: e, type: "begin" })),
            e.terminatorEnd && t.addRule(e.terminatorEnd, { type: "end" }),
            e.illegal && t.addRule(e.illegal, { type: "illegal" }),
            t
        );
    }
    function s(n, r) {
        let i = n;
        if (n.isCompiled) return i;
        [W, z, ed, X].forEach((e) => e(n, r)),
            e.compilerExtensions.forEach((e) => e(n, r)),
            (n.__beforeBegin = null),
            [K, $, q].forEach((e) => e(n, r)),
            (n.isCompiled = !0);
        let o = null;
        return (
            "object" == typeof n.keywords &&
                n.keywords.$pattern &&
                ((n.keywords = Object.assign({}, n.keywords)), (o = n.keywords.$pattern), delete n.keywords.$pattern),
            (o = o || /\w+/),
            n.keywords && (n.keywords = J(n.keywords, e.case_insensitive)),
            (i.keywordPatternRe = t(o, !0)),
            r &&
                (n.begin || (n.begin = /\B|\b/),
                (i.beginRe = t(i.begin)),
                n.end || n.endsWithParent || (n.end = /\B|\b/),
                n.end && (i.endRe = t(i.end)),
                (i.terminatorEnd = _(i.end) || ""),
                n.endsWithParent && r.terminatorEnd && (i.terminatorEnd += (n.end ? "|" : "") + r.terminatorEnd)),
            n.illegal && (i.illegalRe = t(n.illegal)),
            n.contains || (n.contains = []),
            (n.contains = [].concat(
                ...n.contains.map(function (e) {
                    return eh("self" === e ? n : e);
                }),
            )),
            n.contains.forEach(function (e) {
                s(e, i);
            }),
            n.starts && s(n.starts, r),
            (i.matcher = a(i)),
            i
        );
    }
    if ((e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self")))
        throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return (e.classNameAliases = i(e.classNameAliases || {})), s(e);
}
function ef(e) {
    return !!e && (e.endsWithParent || ef(e.starts));
}
function eh(e) {
    return (e.variants &&
        !e.cachedVariants &&
        (e.cachedVariants = e.variants.map(function (t) {
            return i(e, { variants: null }, t);
        })),
    e.cachedVariants)
        ? e.cachedVariants
        : ef(e)
          ? i(e, { starts: e.starts ? i(e.starts) : null })
          : Object.isFrozen(e)
            ? i(e)
            : e;
}
var ep = "11.11.1";
class em extends Error {
    constructor(e, t) {
        super(e), (this.name = "HTMLInjectionError"), (this.html = t);
    }
}
let eg = r,
    eE = i,
    eA = Symbol("nomatch"),
    eI = 7,
    eT = function (e) {
        let r = Object.create(null),
            i = Object.create(null),
            a = [],
            s = !0,
            o = "Could not find the language '{}', did you forget to load/include a language module?",
            l = { disableAutodetect: !0, name: "Plain text", contains: [] },
            u = {
                ignoreUnescapedHTML: !1,
                throwUnescapedHTML: !1,
                noHighlightRe: /^(no-?highlight)$/i,
                languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                classPrefix: "hljs-",
                cssSelector: "pre code",
                languages: null,
                __emitter: d,
            };
        function c(e) {
            return u.noHighlightRe.test(e);
        }
        function _(e) {
            let t = e.className + " ";
            t += e.parentNode ? e.parentNode.className : "";
            let n = u.languageDetectRe.exec(t);
            if (n) {
                let t = L(n[1]);
                return (
                    t || (ei(o.replace("{}", n[1])), ei("Falling back to no-highlight mode for this block.", e)),
                    t ? n[1] : "no-highlight"
                );
            }
            return t.split(/\s+/).find((e) => c(e) || L(e));
        }
        function E(e, t, n) {
            let r = "",
                i = "";
            "object" == typeof t
                ? ((r = e), (n = t.ignoreIllegals), (i = t.language))
                : (ea("10.7.0", "highlight(lang, code, ...args) has been deprecated."),
                  ea(
                      "10.7.0",
                      "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277",
                  ),
                  (i = e),
                  (r = t)),
                void 0 === n && (n = !0);
            let a = { code: r, language: i };
            M("before:highlight", a);
            let s = a.result ? a.result : I(a.language, a.code, n);
            return (s.code = a.code), M("after:highlight", s), s;
        }
        function I(e, t, i, a) {
            let l = Object.create(null);
            function c(e, t) {
                return e.keywords[t];
            }
            function d() {
                if (!w.keywords) return void P.addText(M);
                let e = 0;
                w.keywordPatternRe.lastIndex = 0;
                let t = w.keywordPatternRe.exec(M),
                    n = "";
                for (; t; ) {
                    n += M.substring(e, t.index);
                    let r = R.case_insensitive ? t[0].toLowerCase() : t[0],
                        i = c(w, r);
                    if (i) {
                        let [e, a] = i;
                        if (
                            (P.addText(n),
                            (n = ""),
                            (l[r] = (l[r] || 0) + 1),
                            l[r] <= eI && (k += a),
                            e.startsWith("_"))
                        )
                            n += t[0];
                        else {
                            let n = R.classNameAliases[e] || e;
                            h(t[0], n);
                        }
                    } else n += t[0];
                    (e = w.keywordPatternRe.lastIndex), (t = w.keywordPatternRe.exec(M));
                }
                (n += M.substring(e)), P.addText(n);
            }
            function _() {
                if ("" === M) return;
                let e = null;
                if ("string" == typeof w.subLanguage) {
                    if (!r[w.subLanguage]) return void P.addText(M);
                    (e = I(w.subLanguage, M, !0, x[w.subLanguage])), (x[w.subLanguage] = e._top);
                } else e = S(M, w.subLanguage.length ? w.subLanguage : null);
                w.relevance > 0 && (k += e.relevance), P.__addSublanguage(e._emitter, e.language);
            }
            function f() {
                null != w.subLanguage ? _() : d(), (M = "");
            }
            function h(e, t) {
                "" !== e && (P.startScope(t), P.addText(e), P.endScope());
            }
            function p(e, t) {
                let n = 1,
                    r = t.length - 1;
                for (; n <= r; ) {
                    if (!e._emit[n]) {
                        n++;
                        continue;
                    }
                    let r = R.classNameAliases[e[n]] || e[n],
                        i = t[n];
                    r ? h(i, r) : ((M = i), d(), (M = "")), n++;
                }
            }
            function g(e, t) {
                return (
                    e.scope && "string" == typeof e.scope && P.openNode(R.classNameAliases[e.scope] || e.scope),
                    e.beginScope &&
                        (e.beginScope._wrap
                            ? (h(M, R.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), (M = ""))
                            : e.beginScope._multi && (p(e.beginScope, t), (M = ""))),
                    (w = Object.create(e, { parent: { value: w } }))
                );
            }
            function E(e, t, r) {
                let i = T(e.endRe, r);
                if (i) {
                    if (e["on:end"]) {
                        let r = new n(e);
                        e["on:end"](t, r), r.isMatchIgnored && (i = !1);
                    }
                    if (i) {
                        for (; e.endsParent && e.parent; ) e = e.parent;
                        return e;
                    }
                }
                if (e.endsWithParent) return E(e.parent, t, r);
            }
            function A(e) {
                return 0 === w.matcher.regexIndex ? ((M += e[0]), 1) : ((F = !0), 0);
            }
            function y(e) {
                let t = e[0],
                    r = e.rule,
                    i = new n(r);
                for (let n of [r.__beforeBegin, r["on:begin"]]) if (n && (n(e, i), i.isMatchIgnored)) return A(t);
                return (
                    r.skip ? (M += t) : (r.excludeBegin && (M += t), f(), r.returnBegin || r.excludeBegin || (M = t)),
                    g(r, e),
                    r.returnBegin ? 0 : t.length
                );
            }
            function v(e) {
                let n = e[0],
                    r = t.substring(e.index),
                    i = E(w, e, r);
                if (!i) return eA;
                let a = w;
                w.endScope && w.endScope._wrap
                    ? (f(), h(n, w.endScope._wrap))
                    : w.endScope && w.endScope._multi
                      ? (f(), p(w.endScope, e))
                      : a.skip
                        ? (M += n)
                        : (a.returnEnd || a.excludeEnd || (M += n), f(), a.excludeEnd && (M = n));
                do w.scope && P.closeNode(), w.skip || w.subLanguage || (k += w.relevance), (w = w.parent);
                while (w !== i.parent);
                return i.starts && g(i.starts, e), a.returnEnd ? 0 : n.length;
            }
            function C() {
                let e = [];
                for (let t = w; t !== R; t = t.parent) t.scope && e.unshift(t.scope);
                e.forEach((e) => P.openNode(e));
            }
            let b = {};
            function N(n, r) {
                let a = r && r[0];
                if (((M += n), null == a)) return f(), 0;
                if ("begin" === b.type && "end" === r.type && b.index === r.index && "" === a) {
                    if (((M += t.slice(r.index, r.index + 1)), !s)) {
                        let t = Error(`0 width match regex (${e})`);
                        throw ((t.languageName = e), (t.badRule = b.rule), t);
                    }
                    return 1;
                }
                if (((b = r), "begin" === r.type)) return y(r);
                if ("illegal" !== r.type || i) {
                    if ("end" === r.type) {
                        let e = v(r);
                        if (e !== eA) return e;
                    }
                } else {
                    let e = Error('Illegal lexeme "' + a + '" for mode "' + (w.scope || "<unnamed>") + '"');
                    throw ((e.mode = w), e);
                }
                if ("illegal" === r.type && "" === a) return (M += "\n"), 1;
                if (G > 1e5 && G > 3 * r.index)
                    throw Error("potential infinite loop, way more iterations than matches");
                return (M += a), a.length;
            }
            let R = L(e);
            if (!R) throw (er(o.replace("{}", e)), Error('Unknown language: "' + e + '"'));
            let O = e_(R),
                D = "",
                w = a || O,
                x = {},
                P = new u.__emitter(u);
            C();
            let M = "",
                k = 0,
                U = 0,
                G = 0,
                F = !1;
            try {
                if (R.__emitTokens) R.__emitTokens(t, P);
                else {
                    for (w.matcher.considerAll(); ; ) {
                        G++, F ? (F = !1) : w.matcher.considerAll(), (w.matcher.lastIndex = U);
                        let e = w.matcher.exec(t);
                        if (!e) break;
                        let n = t.substring(U, e.index),
                            r = N(n, e);
                        U = e.index + r;
                    }
                    N(t.substring(U));
                }
                return (
                    P.finalize(),
                    (D = P.toHTML()),
                    { language: e, value: D, relevance: k, illegal: !1, _emitter: P, _top: w }
                );
            } catch (n) {
                if (n.message && n.message.includes("Illegal"))
                    return {
                        language: e,
                        value: eg(t),
                        illegal: !0,
                        relevance: 0,
                        _illegalBy: {
                            message: n.message,
                            index: U,
                            context: t.slice(U - 100, U + 100),
                            mode: n.mode,
                            resultSoFar: D,
                        },
                        _emitter: P,
                    };
                if (s)
                    return {
                        language: e,
                        value: eg(t),
                        illegal: !1,
                        relevance: 0,
                        errorRaised: n,
                        _emitter: P,
                        _top: w,
                    };
                throw n;
            }
        }
        function y(e) {
            let t = { value: eg(e), illegal: !1, relevance: 0, _top: l, _emitter: new u.__emitter(u) };
            return t._emitter.addText(e), t;
        }
        function S(e, t) {
            t = t || u.languages || Object.keys(r);
            let n = y(e),
                i = t
                    .filter(L)
                    .filter(x)
                    .map((t) => I(t, e, !1));
            i.unshift(n);
            let [a, s] = i.sort((e, t) => {
                    if (e.relevance !== t.relevance) return t.relevance - e.relevance;
                    if (e.language && t.language) {
                        if (L(e.language).supersetOf === t.language) return 1;
                        else if (L(t.language).supersetOf === e.language) return -1;
                    }
                    return 0;
                }),
                o = a;
            return (o.secondBest = s), o;
        }
        function v(e, t, n) {
            let r = (t && i[t]) || n;
            e.classList.add("hljs"), e.classList.add(`language-${r}`);
        }
        function C(e) {
            let t = null,
                n = _(e);
            if (c(n)) return;
            if ((M("before:highlightElement", { el: e, language: n }), e.dataset.highlighted))
                return void console.log(
                    "Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",
                    e,
                );
            if (
                e.children.length > 0 &&
                (u.ignoreUnescapedHTML ||
                    (console.warn(
                        "One of your code blocks includes unescaped HTML. This is a potentially serious security risk.",
                    ),
                    console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
                    console.warn("The element with unescaped HTML:"),
                    console.warn(e)),
                u.throwUnescapedHTML)
            )
                throw new em("One of your code blocks includes unescaped HTML.", e.innerHTML);
            let r = (t = e).textContent,
                i = n ? E(r, { language: n, ignoreIllegals: !0 }) : S(r);
            (e.innerHTML = i.value),
                (e.dataset.highlighted = "yes"),
                v(e, n, i.language),
                (e.result = { language: i.language, re: i.relevance, relevance: i.relevance }),
                i.secondBest && (e.secondBest = { language: i.secondBest.language, relevance: i.secondBest.relevance }),
                M("after:highlightElement", { el: e, result: i, text: r });
        }
        let b = () => {
            O(), ea("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
        };
        function N() {
            O(), ea("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
        }
        let R = !1;
        function O() {
            function e() {
                O();
            }
            if ("loading" === document.readyState) {
                R || window.addEventListener("DOMContentLoaded", e, !1), (R = !0);
                return;
            }
            document.querySelectorAll(u.cssSelector).forEach(C);
        }
        function D(t, n) {
            let i = null;
            try {
                i = n(e);
            } catch (e) {
                if ((er("Language definition for '{}' could not be registered.".replace("{}", t)), s)) er(e);
                else throw e;
                i = l;
            }
            i.name || (i.name = t),
                (r[t] = i),
                (i.rawDefinition = n.bind(null, e)),
                i.aliases && w(i.aliases, { languageName: t });
        }
        function L(e) {
            return r[(e = (e || "").toLowerCase())] || r[i[e]];
        }
        function w(e, { languageName: t }) {
            "string" == typeof e && (e = [e]),
                e.forEach((e) => {
                    i[e.toLowerCase()] = t;
                });
        }
        function x(e) {
            let t = L(e);
            return t && !t.disableAutodetect;
        }
        function P(e) {
            e["before:highlightBlock"] &&
                !e["before:highlightElement"] &&
                (e["before:highlightElement"] = (t) => {
                    e["before:highlightBlock"](Object.assign({ block: t.el }, t));
                }),
                e["after:highlightBlock"] &&
                    !e["after:highlightElement"] &&
                    (e["after:highlightElement"] = (t) => {
                        e["after:highlightBlock"](Object.assign({ block: t.el }, t));
                    });
        }
        function M(e, t) {
            let n = e;
            a.forEach(function (e) {
                e[n] && e[n](t);
            });
        }
        function k(e) {
            return (
                ea("10.7.0", "highlightBlock will be removed entirely in v12.0"),
                ea("10.7.0", "Please use highlightElement now."),
                C(e)
            );
        }
        for (let n in (Object.assign(e, {
            highlight: E,
            highlightAuto: S,
            highlightAll: O,
            highlightElement: C,
            highlightBlock: k,
            configure: function (e) {
                u = eE(u, e);
            },
            initHighlighting: b,
            initHighlightingOnLoad: N,
            registerLanguage: D,
            unregisterLanguage: function (e) {
                for (let t of (delete r[e], Object.keys(i))) i[t] === e && delete i[t];
            },
            listLanguages: function () {
                return Object.keys(r);
            },
            getLanguage: L,
            registerAliases: w,
            autoDetection: x,
            inherit: eE,
            addPlugin: function (e) {
                P(e), a.push(e);
            },
            removePlugin: function (e) {
                let t = a.indexOf(e);
                -1 !== t && a.splice(t, 1);
            },
        }),
        (e.debugMode = function () {
            s = !1;
        }),
        (e.safeMode = function () {
            s = !0;
        }),
        (e.versionString = ep),
        (e.regex = { concat: g, lookahead: f, either: A, optional: p, anyNumberOfTimes: h }),
        H))
            "object" == typeof H[n] && t(H[n]);
        return Object.assign(e, H), e;
    },
    ey = eT({});
(ey.newInstance = () => eT({})), (e.exports = ey), (ey.HighlightJS = ey), (ey.default = ey);
