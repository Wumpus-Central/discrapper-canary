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
let s = "</span>",
    a = (e) => !!e.scope,
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
        if (!a(e)) return;
        let t = o(e.scope, { prefix: this.classPrefix });
        this.span(t);
    }
    closeNode(e) {
        a(e) && (this.buffer += s);
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
    return m("(?=", e, ")");
}
function p(e) {
    return m("(?:", e, ")*");
}
function h(e) {
    return m("(?:", e, ")?");
}
function m(...e) {
    return e.map((e) => _(e)).join("");
}
function E(e) {
    let t = e[e.length - 1];
    return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function g(...e) {
    return "(" + (E(e).capture ? "" : "?:") + e.map((e) => _(e)).join("|") + ")";
}
function A(e) {
    return RegExp(e.toString() + "|").exec("").length - 1;
}
function I(e, t) {
    let n = e && e.exec(t);
    return n && 0 === n.index;
}
let T = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function S(e, { joinWith: t }) {
    let n = 0;
    return e
        .map((e) => {
            let t = (n += 1),
                r = _(e),
                i = "";
            for (; r.length > 0; ) {
                let e = T.exec(r);
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
let y = /\b\B/,
    v = "[a-zA-Z]\\w*",
    N = "[a-zA-Z_]\\w*",
    C = "\\b\\d+(\\.\\d+)?",
    b = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    R = "\\b(0b[01]+)",
    O =
        "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    D = (e = {}) => {
        let t = /^#![ ]*\//;
        return (
            e.binary && (e.begin = m(t, /.*\b/, e.binary, /\b.*/)),
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
    L = { begin: "\\\\[\\s\\S]", relevance: 0 },
    w = { scope: "string", begin: "'", end: "'", illegal: "\\n", contains: [L] },
    x = { scope: "string", begin: '"', end: '"', illegal: "\\n", contains: [L] },
    M = {
        begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
    },
    P = function (e, t, n = {}) {
        let r = i({ scope: "comment", begin: e, end: t, contains: [] }, n);
        r.contains.push({
            scope: "doctag",
            begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
            end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
            excludeBegin: !0,
            relevance: 0,
        });
        let s = g(
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
        return r.contains.push({ begin: m(/[ ]+/, "(", s, /[.]?[:]?([.][ ]|[ ])/, "){3}") }), r;
    },
    k = P("//", "$"),
    U = P("/\\*", "\\*/"),
    G = P("#", "$"),
    F = {
        scope: "regexp",
        begin: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [L, { begin: /\[/, end: /\]/, relevance: 0, contains: [L] }],
    },
    V = { scope: "title", begin: v, relevance: 0 },
    B = { scope: "title", begin: N, relevance: 0 };
var H = Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: w,
    BACKSLASH_ESCAPE: L,
    BINARY_NUMBER_MODE: { scope: "number", begin: R, relevance: 0 },
    BINARY_NUMBER_RE: R,
    COMMENT: P,
    C_BLOCK_COMMENT_MODE: U,
    C_LINE_COMMENT_MODE: k,
    C_NUMBER_MODE: { scope: "number", begin: b, relevance: 0 },
    C_NUMBER_RE: b,
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
    HASH_COMMENT_MODE: G,
    IDENT_RE: v,
    MATCH_NOTHING_RE: y,
    METHOD_GUARD: { begin: "\\.\\s*" + N, relevance: 0 },
    NUMBER_MODE: { scope: "number", begin: C, relevance: 0 },
    NUMBER_RE: C,
    PHRASAL_WORDS_MODE: M,
    QUOTE_STRING_MODE: x,
    REGEXP_MODE: F,
    RE_STARTERS_RE: O,
    SHEBANG: D,
    TITLE_MODE: V,
    UNDERSCORE_IDENT_RE: N,
    UNDERSCORE_TITLE_MODE: B,
});
function j(e, t) {
    "." === e.input[e.index - 1] && t.ignoreMatch();
}
function Y(e, t) {
    void 0 !== e.className && ((e.scope = e.className), delete e.className);
}
function W(e, t) {
    !t ||
        (e.beginKeywords &&
            ((e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)"),
            (e.__beforeBegin = j),
            (e.keywords = e.keywords || e.beginKeywords),
            delete e.beginKeywords,
            void 0 === e.relevance && (e.relevance = 0)));
}
function K(e, t) {
    Array.isArray(e.illegal) && (e.illegal = g(...e.illegal));
}
function z(e, t) {
    if (e.match) {
        if (e.begin || e.end) throw Error("begin & end are not supported with match");
        (e.begin = e.match), delete e.match;
    }
}
function $(e, t) {
    void 0 === e.relevance && (e.relevance = 1);
}
let q = (e, t) => {
        if (!e.beforeMatch) return;
        if (e.starts) throw Error("beforeMatch cannot be used with starts");
        let n = Object.assign({}, e);
        Object.keys(e).forEach((t) => {
            delete e[t];
        }),
            (e.keywords = n.keywords),
            (e.begin = m(n.beforeMatch, f(n.begin))),
            (e.starts = { relevance: 0, contains: [Object.assign(n, { endsParent: !0 })] }),
            (e.relevance = 0),
            delete n.beforeMatch;
    },
    Z = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"],
    X = "keyword";
function Q(e, t, n = X) {
    let r = Object.create(null);
    return (
        "string" == typeof e
            ? i(n, e.split(" "))
            : Array.isArray(e)
              ? i(n, e)
              : Object.keys(e).forEach(function (n) {
                    Object.assign(r, Q(e[n], t, n));
                }),
        r
    );
    function i(e, n) {
        t && (n = n.map((e) => e.toLowerCase())),
            n.forEach(function (t) {
                let n = t.split("|");
                r[n[0]] = [e, J(n[0], n[1])];
            });
    }
}
function J(e, t) {
    return t ? Number(t) : +!ee(e);
}
function ee(e) {
    return Z.includes(e.toLowerCase());
}
let et = {},
    en = (e) => {
        console.error(e);
    },
    er = (e, ...t) => {
        console.log(`WARN: ${e}`, ...t);
    },
    ei = (e, t) => {
        et[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), (et[`${e}/${t}`] = !0));
    },
    es = Error();
function ea(e, t, { key: n }) {
    let r = 0,
        i = e[n],
        s = {},
        a = {};
    for (let e = 1; e <= t.length; e++) (a[e + r] = i[e]), (s[e + r] = !0), (r += A(t[e - 1]));
    (e[n] = a), (e[n]._emit = s), (e[n]._multi = !0);
}
function eo(e) {
    if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin)
            throw (en("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), es);
        if ("object" != typeof e.beginScope || null === e.beginScope) throw (en("beginScope must be object"), es);
        ea(e, e.begin, { key: "beginScope" }), (e.begin = S(e.begin, { joinWith: "" }));
    }
}
function el(e) {
    if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd)
            throw (en("skip, excludeEnd, returnEnd not compatible with endScope: {}"), es);
        if ("object" != typeof e.endScope || null === e.endScope) throw (en("endScope must be object"), es);
        ea(e, e.end, { key: "endScope" }), (e.end = S(e.end, { joinWith: "" }));
    }
}
function eu(e) {
    e.scope && "object" == typeof e.scope && null !== e.scope && ((e.beginScope = e.scope), delete e.scope);
}
function ec(e) {
    eu(e),
        "string" == typeof e.beginScope && (e.beginScope = { _wrap: e.beginScope }),
        "string" == typeof e.endScope && (e.endScope = { _wrap: e.endScope }),
        eo(e),
        el(e);
}
function ed(e) {
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
                (this.matchAt += A(e) + 1);
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
    function s(e) {
        let t = new r();
        return (
            e.contains.forEach((e) => t.addRule(e.begin, { rule: e, type: "begin" })),
            e.terminatorEnd && t.addRule(e.terminatorEnd, { type: "end" }),
            e.illegal && t.addRule(e.illegal, { type: "illegal" }),
            t
        );
    }
    function a(n, r) {
        let i = n;
        if (n.isCompiled) return i;
        [Y, z, ec, q].forEach((e) => e(n, r)),
            e.compilerExtensions.forEach((e) => e(n, r)),
            (n.__beforeBegin = null),
            [W, K, $].forEach((e) => e(n, r)),
            (n.isCompiled = !0);
        let o = null;
        return (
            "object" == typeof n.keywords &&
                n.keywords.$pattern &&
                ((n.keywords = Object.assign({}, n.keywords)), (o = n.keywords.$pattern), delete n.keywords.$pattern),
            (o = o || /\w+/),
            n.keywords && (n.keywords = Q(n.keywords, e.case_insensitive)),
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
                    return ef("self" === e ? n : e);
                }),
            )),
            n.contains.forEach(function (e) {
                a(e, i);
            }),
            n.starts && a(n.starts, r),
            (i.matcher = s(i)),
            i
        );
    }
    if ((e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self")))
        throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return (e.classNameAliases = i(e.classNameAliases || {})), a(e);
}
function e_(e) {
    return !!e && (e.endsWithParent || e_(e.starts));
}
function ef(e) {
    return (e.variants &&
        !e.cachedVariants &&
        (e.cachedVariants = e.variants.map(function (t) {
            return i(e, { variants: null }, t);
        })),
    e.cachedVariants)
        ? e.cachedVariants
        : e_(e)
          ? i(e, { starts: e.starts ? i(e.starts) : null })
          : Object.isFrozen(e)
            ? i(e)
            : e;
}
var ep = "11.11.1";
class eh extends Error {
    constructor(e, t) {
        super(e), (this.name = "HTMLInjectionError"), (this.html = t);
    }
}
let em = r,
    eE = i,
    eg = Symbol("nomatch"),
    eA = 7,
    eI = function (e) {
        let r = Object.create(null),
            i = Object.create(null),
            s = [],
            a = !0,
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
                let t = D(n[1]);
                return (
                    t || (er(o.replace("{}", n[1])), er("Falling back to no-highlight mode for this block.", e)),
                    t ? n[1] : "no-highlight"
                );
            }
            return t.split(/\s+/).find((e) => c(e) || D(e));
        }
        function E(e, t, n) {
            let r = "",
                i = "";
            "object" == typeof t
                ? ((r = e), (n = t.ignoreIllegals), (i = t.language))
                : (ei("10.7.0", "highlight(lang, code, ...args) has been deprecated."),
                  ei(
                      "10.7.0",
                      "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277",
                  ),
                  (i = e),
                  (r = t)),
                void 0 === n && (n = !0);
            let s = { code: r, language: i };
            M("before:highlight", s);
            let a = s.result ? s.result : A(s.language, s.code, n);
            return (a.code = s.code), M("after:highlight", a), a;
        }
        function A(e, t, i, s) {
            let l = Object.create(null);
            function c(e, t) {
                return e.keywords[t];
            }
            function d() {
                if (!L.keywords) return void x.addText(M);
                let e = 0;
                L.keywordPatternRe.lastIndex = 0;
                let t = L.keywordPatternRe.exec(M),
                    n = "";
                for (; t; ) {
                    n += M.substring(e, t.index);
                    let r = b.case_insensitive ? t[0].toLowerCase() : t[0],
                        i = c(L, r);
                    if (i) {
                        let [e, s] = i;
                        if (
                            (x.addText(n),
                            (n = ""),
                            (l[r] = (l[r] || 0) + 1),
                            l[r] <= eA && (P += s),
                            e.startsWith("_"))
                        )
                            n += t[0];
                        else {
                            let n = b.classNameAliases[e] || e;
                            p(t[0], n);
                        }
                    } else n += t[0];
                    (e = L.keywordPatternRe.lastIndex), (t = L.keywordPatternRe.exec(M));
                }
                (n += M.substring(e)), x.addText(n);
            }
            function _() {
                if ("" === M) return;
                let e = null;
                if ("string" == typeof L.subLanguage) {
                    if (!r[L.subLanguage]) return void x.addText(M);
                    (e = A(L.subLanguage, M, !0, w[L.subLanguage])), (w[L.subLanguage] = e._top);
                } else e = S(M, L.subLanguage.length ? L.subLanguage : null);
                L.relevance > 0 && (P += e.relevance), x.__addSublanguage(e._emitter, e.language);
            }
            function f() {
                null != L.subLanguage ? _() : d(), (M = "");
            }
            function p(e, t) {
                "" !== e && (x.startScope(t), x.addText(e), x.endScope());
            }
            function h(e, t) {
                let n = 1,
                    r = t.length - 1;
                for (; n <= r; ) {
                    if (!e._emit[n]) {
                        n++;
                        continue;
                    }
                    let r = b.classNameAliases[e[n]] || e[n],
                        i = t[n];
                    r ? p(i, r) : ((M = i), d(), (M = "")), n++;
                }
            }
            function m(e, t) {
                return (
                    e.scope && "string" == typeof e.scope && x.openNode(b.classNameAliases[e.scope] || e.scope),
                    e.beginScope &&
                        (e.beginScope._wrap
                            ? (p(M, b.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), (M = ""))
                            : e.beginScope._multi && (h(e.beginScope, t), (M = ""))),
                    (L = Object.create(e, { parent: { value: L } }))
                );
            }
            function E(e, t, r) {
                let i = I(e.endRe, r);
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
            function g(e) {
                return 0 === L.matcher.regexIndex ? ((M += e[0]), 1) : ((G = !0), 0);
            }
            function T(e) {
                let t = e[0],
                    r = e.rule,
                    i = new n(r);
                for (let n of [r.__beforeBegin, r["on:begin"]]) if (n && (n(e, i), i.isMatchIgnored)) return g(t);
                return (
                    r.skip ? (M += t) : (r.excludeBegin && (M += t), f(), r.returnBegin || r.excludeBegin || (M = t)),
                    m(r, e),
                    r.returnBegin ? 0 : t.length
                );
            }
            function y(e) {
                let n = e[0],
                    r = t.substring(e.index),
                    i = E(L, e, r);
                if (!i) return eg;
                let s = L;
                L.endScope && L.endScope._wrap
                    ? (f(), p(n, L.endScope._wrap))
                    : L.endScope && L.endScope._multi
                      ? (f(), h(L.endScope, e))
                      : s.skip
                        ? (M += n)
                        : (s.returnEnd || s.excludeEnd || (M += n), f(), s.excludeEnd && (M = n));
                do L.scope && x.closeNode(), L.skip || L.subLanguage || (P += L.relevance), (L = L.parent);
                while (L !== i.parent);
                return i.starts && m(i.starts, e), s.returnEnd ? 0 : n.length;
            }
            function v() {
                let e = [];
                for (let t = L; t !== b; t = t.parent) t.scope && e.unshift(t.scope);
                e.forEach((e) => x.openNode(e));
            }
            let N = {};
            function C(n, r) {
                let s = r && r[0];
                if (((M += n), null == s)) return f(), 0;
                if ("begin" === N.type && "end" === r.type && N.index === r.index && "" === s) {
                    if (((M += t.slice(r.index, r.index + 1)), !a)) {
                        let t = Error(`0 width match regex (${e})`);
                        throw ((t.languageName = e), (t.badRule = N.rule), t);
                    }
                    return 1;
                }
                if (((N = r), "begin" === r.type)) return T(r);
                if ("illegal" !== r.type || i) {
                    if ("end" === r.type) {
                        let e = y(r);
                        if (e !== eg) return e;
                    }
                } else {
                    let e = Error('Illegal lexeme "' + s + '" for mode "' + (L.scope || "<unnamed>") + '"');
                    throw ((e.mode = L), e);
                }
                if ("illegal" === r.type && "" === s) return (M += "\n"), 1;
                if (U > 1e5 && U > 3 * r.index)
                    throw Error("potential infinite loop, way more iterations than matches");
                return (M += s), s.length;
            }
            let b = D(e);
            if (!b) throw (en(o.replace("{}", e)), Error('Unknown language: "' + e + '"'));
            let R = ed(b),
                O = "",
                L = s || R,
                w = {},
                x = new u.__emitter(u);
            v();
            let M = "",
                P = 0,
                k = 0,
                U = 0,
                G = !1;
            try {
                if (b.__emitTokens) b.__emitTokens(t, x);
                else {
                    for (L.matcher.considerAll(); ; ) {
                        U++, G ? (G = !1) : L.matcher.considerAll(), (L.matcher.lastIndex = k);
                        let e = L.matcher.exec(t);
                        if (!e) break;
                        let n = t.substring(k, e.index),
                            r = C(n, e);
                        k = e.index + r;
                    }
                    C(t.substring(k));
                }
                return (
                    x.finalize(),
                    (O = x.toHTML()),
                    { language: e, value: O, relevance: P, illegal: !1, _emitter: x, _top: L }
                );
            } catch (n) {
                if (n.message && n.message.includes("Illegal"))
                    return {
                        language: e,
                        value: em(t),
                        illegal: !0,
                        relevance: 0,
                        _illegalBy: {
                            message: n.message,
                            index: k,
                            context: t.slice(k - 100, k + 100),
                            mode: n.mode,
                            resultSoFar: O,
                        },
                        _emitter: x,
                    };
                if (a)
                    return {
                        language: e,
                        value: em(t),
                        illegal: !1,
                        relevance: 0,
                        errorRaised: n,
                        _emitter: x,
                        _top: L,
                    };
                throw n;
            }
        }
        function T(e) {
            let t = { value: em(e), illegal: !1, relevance: 0, _top: l, _emitter: new u.__emitter(u) };
            return t._emitter.addText(e), t;
        }
        function S(e, t) {
            t = t || u.languages || Object.keys(r);
            let n = T(e),
                i = t
                    .filter(D)
                    .filter(w)
                    .map((t) => A(t, e, !1));
            i.unshift(n);
            let [s, a] = i.sort((e, t) => {
                    if (e.relevance !== t.relevance) return t.relevance - e.relevance;
                    if (e.language && t.language) {
                        if (D(e.language).supersetOf === t.language) return 1;
                        else if (D(t.language).supersetOf === e.language) return -1;
                    }
                    return 0;
                }),
                o = s;
            return (o.secondBest = a), o;
        }
        function y(e, t, n) {
            let r = (t && i[t]) || n;
            e.classList.add("hljs"), e.classList.add(`language-${r}`);
        }
        function v(e) {
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
                throw new eh("One of your code blocks includes unescaped HTML.", e.innerHTML);
            let r = (t = e).textContent,
                i = n ? E(r, { language: n, ignoreIllegals: !0 }) : S(r);
            (e.innerHTML = i.value),
                (e.dataset.highlighted = "yes"),
                y(e, n, i.language),
                (e.result = { language: i.language, re: i.relevance, relevance: i.relevance }),
                i.secondBest && (e.secondBest = { language: i.secondBest.language, relevance: i.secondBest.relevance }),
                M("after:highlightElement", { el: e, result: i, text: r });
        }
        let N = () => {
            R(), ei("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
        };
        function C() {
            R(), ei("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
        }
        let b = !1;
        function R() {
            function e() {
                R();
            }
            if ("loading" === document.readyState) {
                b || window.addEventListener("DOMContentLoaded", e, !1), (b = !0);
                return;
            }
            document.querySelectorAll(u.cssSelector).forEach(v);
        }
        function O(t, n) {
            let i = null;
            try {
                i = n(e);
            } catch (e) {
                if ((en("Language definition for '{}' could not be registered.".replace("{}", t)), a)) en(e);
                else throw e;
                i = l;
            }
            i.name || (i.name = t),
                (r[t] = i),
                (i.rawDefinition = n.bind(null, e)),
                i.aliases && L(i.aliases, { languageName: t });
        }
        function D(e) {
            return r[(e = (e || "").toLowerCase())] || r[i[e]];
        }
        function L(e, { languageName: t }) {
            "string" == typeof e && (e = [e]),
                e.forEach((e) => {
                    i[e.toLowerCase()] = t;
                });
        }
        function w(e) {
            let t = D(e);
            return t && !t.disableAutodetect;
        }
        function x(e) {
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
            s.forEach(function (e) {
                e[n] && e[n](t);
            });
        }
        function P(e) {
            return (
                ei("10.7.0", "highlightBlock will be removed entirely in v12.0"),
                ei("10.7.0", "Please use highlightElement now."),
                v(e)
            );
        }
        for (let n in (Object.assign(e, {
            highlight: E,
            highlightAuto: S,
            highlightAll: R,
            highlightElement: v,
            highlightBlock: P,
            configure: function (e) {
                u = eE(u, e);
            },
            initHighlighting: N,
            initHighlightingOnLoad: C,
            registerLanguage: O,
            unregisterLanguage: function (e) {
                for (let t of (delete r[e], Object.keys(i))) i[t] === e && delete i[t];
            },
            listLanguages: function () {
                return Object.keys(r);
            },
            getLanguage: D,
            registerAliases: L,
            autoDetection: w,
            inherit: eE,
            addPlugin: function (e) {
                x(e), s.push(e);
            },
            removePlugin: function (e) {
                let t = s.indexOf(e);
                -1 !== t && s.splice(t, 1);
            },
        }),
        (e.debugMode = function () {
            a = !1;
        }),
        (e.safeMode = function () {
            a = !0;
        }),
        (e.versionString = ep),
        (e.regex = { concat: m, lookahead: f, either: g, optional: h, anyNumberOfTimes: p }),
        H))
            "object" == typeof H[n] && t(H[n]);
        return Object.assign(e, H), e;
    },
    eT = eI({});
(eT.newInstance = () => eI({})), (e.exports = eT), (eT.HighlightJS = eT), (eT.default = eT);
