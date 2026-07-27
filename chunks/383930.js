class t {
    constructor(e) {
        void 0 === e.data && (e.data = {}), (this.data = e.data), (this.isMatchIgnored = !1);
    }
    ignoreMatch() {
        this.isMatchIgnored = !0;
    }
}
function a(e) {
    return e
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
}
function n(e, ...t) {
    let a = Object.create(null);
    for (let t in e) a[t] = e[t];
    return (
        t.forEach(function (e) {
            for (let t in e) a[t] = e[t];
        }),
        a
    );
}
class r {
    constructor(e, t) {
        (this.buffer = ""), (this.classPrefix = t.classPrefix), e.walk(this);
    }
    addText(e) {
        this.buffer += a(e);
    }
    openNode(e) {
        if (!e.scope) return;
        let t = ((e, { prefix: t }) => {
            if (e.startsWith("language:")) return e.replace("language:", "language-");
            if (e.includes(".")) {
                let a = e.split(".");
                return [`${t}${a.shift()}`, ...a.map((e, t) => `${e}${"_".repeat(t + 1)}`)].join(" ");
            }
            return `${t}${e}`;
        })(e.scope, { prefix: this.classPrefix });
        this.span(t);
    }
    closeNode(e) {
        e.scope && (this.buffer += "</span>");
    }
    value() {
        return this.buffer;
    }
    span(e) {
        this.buffer += `<span class="${e}">`;
    }
}
let i = (e = {}) => {
    let t = { children: [] };
    return Object.assign(t, e), t;
};
class o {
    constructor() {
        (this.rootNode = i()), (this.stack = [this.rootNode]);
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
        let t = i({ scope: e });
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
                          o._collapse(e);
                      })));
    }
}
class s extends o {
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
        let a = e.root;
        t && (a.scope = `language:${t}`), this.add(a);
    }
    toHTML() {
        return new r(this, this.options).value();
    }
    finalize() {
        return this.closeAllNodes(), !0;
    }
}
function l(e) {
    return e ? ("string" == typeof e ? e : e.source) : null;
}
function c(e) {
    return m("(?=", e, ")");
}
function _(e) {
    return m("(?:", e, ")*");
}
function d(e) {
    return m("(?:", e, ")?");
}
function m(...e) {
    return e.map((e) => l(e)).join("");
}
function p(...e) {
    let t;
    return (
        "(" +
        (("object" == typeof (t = e[e.length - 1]) && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {})
            .capture
            ? ""
            : "?:") +
        e.map((e) => l(e)).join("|") +
        ")"
    );
}
function u(e) {
    return RegExp(e.toString() + "|").exec("").length - 1;
}
let g = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function E(e, { joinWith: t }) {
    let a = 0;
    return e
        .map((e) => {
            let t = (a += 1),
                n = l(e),
                r = "";
            for (; n.length > 0; ) {
                let e = g.exec(n);
                if (!e) {
                    r += n;
                    break;
                }
                (r += n.substring(0, e.index)),
                    (n = n.substring(e.index + e[0].length)),
                    "\\" === e[0][0] && e[1]
                        ? (r += "\\" + String(Number(e[1]) + t))
                        : ((r += e[0]), "(" === e[0] && a++);
            }
            return r;
        })
        .map((e) => `(${e})`)
        .join(t);
}
let S = "[a-zA-Z]\\w{0,149}",
    b = "[a-zA-Z_]\\w{0,149}",
    T = "\\b\\d+(\\.\\d+)?",
    f = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    C = "\\b(0b[01]+)",
    R = { begin: "\\\\[\\s\\S]", relevance: 0 },
    N = function (e, t, a = {}) {
        let r = n({ scope: "comment", begin: e, end: t, contains: [] }, a);
        r.contains.push({
            scope: "doctag",
            begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
            end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
            excludeBegin: !0,
            relevance: 0,
        });
        let i = p(
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
        return r.contains.push({ begin: m(/[ ]+/, "(", i, /[.]?[:]?([.][ ]|[ ])/, "){3}") }), r;
    },
    h = N("//", "$"),
    O = N("/\\*", "\\*/"),
    v = N("#", "$");
var y = Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: { scope: "string", begin: "'", end: "'", illegal: "\\n", contains: [R] },
    BACKSLASH_ESCAPE: R,
    BINARY_NUMBER_MODE: { scope: "number", begin: C, relevance: 0 },
    BINARY_NUMBER_RE: C,
    COMMENT: N,
    C_BLOCK_COMMENT_MODE: O,
    C_LINE_COMMENT_MODE: h,
    C_NUMBER_MODE: { scope: "number", begin: f, relevance: 0 },
    C_NUMBER_RE: f,
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
    HASH_COMMENT_MODE: v,
    IDENT_RE: S,
    MATCH_NOTHING_RE: /\b\B/,
    METHOD_GUARD: { begin: "\\.\\s*" + b, relevance: 0 },
    NUMBER_MODE: { scope: "number", begin: T, relevance: 0 },
    NUMBER_RE: T,
    PHRASAL_WORDS_MODE: {
        begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
    },
    QUOTE_STRING_MODE: { scope: "string", begin: '"', end: '"', illegal: "\\n", contains: [R] },
    REGEXP_MODE: {
        scope: "regexp",
        begin: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [R, { begin: /\[/, end: /\]/, relevance: 0, contains: [R] }],
    },
    RE_STARTERS_RE:
        "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    SHEBANG: (e = {}) => {
        let t = /^#![ ]*\//;
        return (
            e.binary && (e.begin = m(t, /.*\b/, e.binary, /\b.*/)),
            n(
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
    TITLE_MODE: { scope: "title", begin: S, relevance: 0 },
    UNDERSCORE_IDENT_RE: b,
    UNDERSCORE_TITLE_MODE: { scope: "title", begin: b, relevance: 0 },
});
function A(e, t) {
    "." === e.input[e.index - 1] && t.ignoreMatch();
}
function I(e, t) {
    void 0 !== e.className && ((e.scope = e.className), delete e.className);
}
function D(e, t) {
    !t ||
        (e.beginKeywords &&
            ((e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)"),
            (e.__beforeBegin = A),
            (e.keywords = e.keywords || e.beginKeywords),
            delete e.beginKeywords,
            void 0 === e.relevance && (e.relevance = 0)));
}
function x(e, t) {
    Array.isArray(e.illegal) && (e.illegal = p(...e.illegal));
}
function M(e, t) {
    if (e.match) {
        if (e.begin || e.end) throw Error("begin & end are not supported with match");
        (e.begin = e.match), delete e.match;
    }
}
function L(e, t) {
    void 0 === e.relevance && (e.relevance = 1);
}
let w = (e, t) => {
        if (!e.beforeMatch) return;
        if (e.starts) throw Error("beforeMatch cannot be used with starts");
        let a = Object.assign({}, e);
        Object.keys(e).forEach((t) => {
            delete e[t];
        }),
            (e.keywords = a.keywords),
            (e.begin = m(a.beforeMatch, c(a.begin))),
            (e.starts = { relevance: 0, contains: [Object.assign(a, { endsParent: !0 })] }),
            (e.relevance = 0),
            delete a.beforeMatch;
    },
    P = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"],
    k = {},
    F = (e) => {
        console.error(e);
    },
    U = (e, ...t) => {
        console.log(`WARN: ${e}`, ...t);
    },
    B = (e, t) => {
        k[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), (k[`${e}/${t}`] = !0));
    },
    G = Error();
function Y(e, t, { key: a }) {
    let n = 0,
        r = e[a],
        i = {},
        o = {};
    for (let e = 1; e <= t.length; e++) (o[e + n] = r[e]), (i[e + n] = !0), (n += u(t[e - 1]));
    (e[a] = o), (e[a]._emit = i), (e[a]._multi = !0);
}
function V(e) {
    if (
        (e.scope && "object" == typeof e.scope && null !== e.scope && ((e.beginScope = e.scope), delete e.scope),
        "string" == typeof e.beginScope && (e.beginScope = { _wrap: e.beginScope }),
        "string" == typeof e.endScope && (e.endScope = { _wrap: e.endScope }),
        Array.isArray(e.begin))
    ) {
        if (e.skip || e.excludeBegin || e.returnBegin)
            throw (F("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), G);
        if ("object" != typeof e.beginScope || null === e.beginScope) throw (F("beginScope must be object"), G);
        Y(e, e.begin, { key: "beginScope" }), (e.begin = E(e.begin, { joinWith: "" }));
    }
    if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd)
            throw (F("skip, excludeEnd, returnEnd not compatible with endScope: {}"), G);
        if ("object" != typeof e.endScope || null === e.endScope) throw (F("endScope must be object"), G);
        Y(e, e.end, { key: "endScope" }), (e.end = E(e.end, { joinWith: "" }));
    }
}
class H extends Error {
    constructor(e, t) {
        super(e), (this.name = "HTMLInjectionError"), (this.html = t);
    }
}
let q = Symbol("nomatch"),
    z = function (e) {
        let r = Object.create(null),
            i = Object.create(null),
            o = [],
            g = !0,
            S = "Could not find the language '{}', did you forget to load/include a language module?",
            b = { disableAutodetect: !0, name: "Plain text", contains: [] },
            T = {
                ignoreUnescapedHTML: !1,
                throwUnescapedHTML: !1,
                noHighlightRe: /^(no-?highlight)$/i,
                languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                classPrefix: "hljs-",
                cssSelector: "pre code",
                languages: null,
                __emitter: s,
            };
        function f(e) {
            return T.noHighlightRe.test(e);
        }
        function C(e, t, a) {
            let n = "",
                r = "";
            "object" == typeof t
                ? ((n = e), (a = t.ignoreIllegals), (r = t.language))
                : (B("10.7.0", "highlight(lang, code, ...args) has been deprecated."),
                  B(
                      "10.7.0",
                      "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277",
                  ),
                  (r = e),
                  (n = t)),
                void 0 === a && (a = !0);
            let i = { code: n, language: r };
            Y("before:highlight", i);
            let o = i.result ? i.result : R(i.language, i.code, a);
            return (o.code = i.code), Y("after:highlight", o), o;
        }
        function R(e, i, o, s) {
            let c = Object.create(null);
            function _() {
                if (!y.keywords) return void U.addText(G);
                let e = 0;
                y.keywordPatternRe.lastIndex = 0;
                let t = y.keywordPatternRe.exec(G),
                    a = "";
                for (; t; ) {
                    a += G.substring(e, t.index);
                    let n = h.case_insensitive ? t[0].toLowerCase() : t[0],
                        r = y.keywords[n];
                    if (r) {
                        let [e, i] = r;
                        if (
                            (U.addText(a), (a = ""), (c[n] = (c[n] || 0) + 1), c[n] <= 7 && (Y += i), e.startsWith("_"))
                        )
                            a += t[0];
                        else {
                            let a = h.classNameAliases[e] || e;
                            m(t[0], a);
                        }
                    } else a += t[0];
                    (e = y.keywordPatternRe.lastIndex), (t = y.keywordPatternRe.exec(G));
                }
                (a += G.substring(e)), U.addText(a);
            }
            function d() {
                null != y.subLanguage
                    ? (function () {
                          if ("" === G) return;
                          let e = null;
                          if ("string" == typeof y.subLanguage) {
                              if (!r[y.subLanguage]) return U.addText(G);
                              (e = R(y.subLanguage, G, !0, k[y.subLanguage])), (k[y.subLanguage] = e._top);
                          } else e = N(G, y.subLanguage.length ? y.subLanguage : null);
                          y.relevance > 0 && (Y += e.relevance), U.__addSublanguage(e._emitter, e.language);
                      })()
                    : _(),
                    (G = "");
            }
            function m(e, t) {
                "" !== e && (U.startScope(t), U.addText(e), U.endScope());
            }
            function p(e, t) {
                let a = 1,
                    n = t.length - 1;
                for (; a <= n; ) {
                    if (!e._emit[a]) {
                        a++;
                        continue;
                    }
                    let n = h.classNameAliases[e[a]] || e[a],
                        r = t[a];
                    n ? m(r, n) : ((G = r), _(), (G = "")), a++;
                }
            }
            function b(e, t) {
                return (
                    e.scope && "string" == typeof e.scope && U.openNode(h.classNameAliases[e.scope] || e.scope),
                    e.beginScope &&
                        (e.beginScope._wrap
                            ? (m(G, h.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), (G = ""))
                            : e.beginScope._multi && (p(e.beginScope, t), (G = ""))),
                    (y = Object.create(e, { parent: { value: y } }))
                );
            }
            let f = {};
            function C(a, n) {
                let r = n && n[0];
                if (((G += a), null == r)) return d(), 0;
                if ("begin" === f.type && "end" === n.type && f.index === n.index && "" === r) {
                    if (((G += i.slice(n.index, n.index + 1)), !g)) {
                        let t = Error(`0 width match regex (${e})`);
                        throw ((t.languageName = e), (t.badRule = f.rule), t);
                    }
                    return 1;
                }
                if (((f = n), "begin" === n.type)) {
                    let e = n[0],
                        a = n.rule,
                        r = new t(a);
                    for (let t of [a.__beforeBegin, a["on:begin"]])
                        if (t && (t(n, r), r.isMatchIgnored))
                            return 0 === y.matcher.regexIndex ? ((G += e[0]), 1) : (($ = !0), 0);
                    return (
                        a.skip
                            ? (G += e)
                            : (a.excludeBegin && (G += e), d(), a.returnBegin || a.excludeBegin || (G = e)),
                        b(a, n),
                        a.returnBegin ? 0 : e.length
                    );
                }
                if ("illegal" !== n.type || o) {
                    if ("end" === n.type) {
                        let e = (function (e) {
                            let a = e[0],
                                n = i.substring(e.index),
                                r = (function e(a, n, r) {
                                    var i;
                                    let o,
                                        s = ((i = a.endRe), (o = i && i.exec(r)) && 0 === o.index);
                                    if (s) {
                                        if (a["on:end"]) {
                                            let e = new t(a);
                                            a["on:end"](n, e), e.isMatchIgnored && (s = !1);
                                        }
                                        if (s) {
                                            for (; a.endsParent && a.parent; ) a = a.parent;
                                            return a;
                                        }
                                    }
                                    if (a.endsWithParent) return e(a.parent, n, r);
                                })(y, e, n);
                            if (!r) return q;
                            let o = y;
                            y.endScope && y.endScope._wrap
                                ? (d(), m(a, y.endScope._wrap))
                                : y.endScope && y.endScope._multi
                                  ? (d(), p(y.endScope, e))
                                  : o.skip
                                    ? (G += a)
                                    : (o.returnEnd || o.excludeEnd || (G += a), d(), o.excludeEnd && (G = a));
                            do y.scope && U.closeNode(), y.skip || y.subLanguage || (Y += y.relevance), (y = y.parent);
                            while (y !== r.parent);
                            return r.starts && b(r.starts, e), o.returnEnd ? 0 : a.length;
                        })(n);
                        if (e !== q) return e;
                    }
                } else {
                    let e = Error('Illegal lexeme "' + r + '" for mode "' + (y.scope || "<unnamed>") + '"');
                    throw ((e.mode = y), e);
                }
                if ("illegal" === n.type && "" === r) return (G += "\n"), 1;
                if (z > 1e5 && z > 3 * n.index)
                    throw Error("potential infinite loop, way more iterations than matches");
                return (G += r), r.length;
            }
            let h = A(e);
            if (!h) throw (F(S.replace("{}", e)), Error('Unknown language: "' + e + '"'));
            let O = (function (e) {
                    function t(t, a) {
                        return RegExp(
                            l(t),
                            "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (a ? "g" : ""),
                        );
                    }
                    class a {
                        constructor() {
                            (this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0);
                        }
                        addRule(e, t) {
                            (t.position = this.position++),
                                (this.matchIndexes[this.matchAt] = t),
                                this.regexes.push([t, e]),
                                (this.matchAt += u(e) + 1);
                        }
                        compile() {
                            0 === this.regexes.length && (this.exec = () => null);
                            let e = this.regexes.map((e) => e[1]);
                            (this.matcherRe = t(E(e, { joinWith: "|" }), !0)), (this.lastIndex = 0);
                        }
                        exec(e) {
                            this.matcherRe.lastIndex = this.lastIndex;
                            let t = this.matcherRe.exec(e);
                            if (!t) return null;
                            let a = t.findIndex((e, t) => t > 0 && void 0 !== e),
                                n = this.matchIndexes[a];
                            return t.splice(0, a), Object.assign(t, n);
                        }
                    }
                    class r {
                        constructor() {
                            (this.rules = []),
                                (this.multiRegexes = []),
                                (this.count = 0),
                                (this.lastIndex = 0),
                                (this.regexIndex = 0);
                        }
                        getMatcher(e) {
                            if (this.multiRegexes[e]) return this.multiRegexes[e];
                            let t = new a();
                            return (
                                this.rules.slice(e).forEach(([e, a]) => t.addRule(e, a)),
                                t.compile(),
                                (this.multiRegexes[e] = t),
                                t
                            );
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
                            let a = t.exec(e);
                            if (this.resumingScanAtSamePosition())
                                if (a && a.index === this.lastIndex);
                                else {
                                    let t = this.getMatcher(0);
                                    (t.lastIndex = this.lastIndex + 1), (a = t.exec(e));
                                }
                            return (
                                a &&
                                    ((this.regexIndex += a.position + 1),
                                    this.regexIndex === this.count && this.considerAll()),
                                a
                            );
                        }
                    }
                    if (
                        (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self"))
                    )
                        throw Error(
                            "ERR: contains `self` is not supported at the top-level of a language.  See documentation.",
                        );
                    return (
                        (e.classNameAliases = n(e.classNameAliases || {})),
                        (function a(i, o) {
                            let s;
                            if (i.isCompiled) return i;
                            [I, M, V, w].forEach((e) => e(i, o)),
                                e.compilerExtensions.forEach((e) => e(i, o)),
                                (i.__beforeBegin = null),
                                [D, x, L].forEach((e) => e(i, o)),
                                (i.isCompiled = !0);
                            let c = null;
                            return (
                                "object" == typeof i.keywords &&
                                    i.keywords.$pattern &&
                                    ((i.keywords = Object.assign({}, i.keywords)),
                                    (c = i.keywords.$pattern),
                                    delete i.keywords.$pattern),
                                (c = c || /\w+/),
                                i.keywords &&
                                    (i.keywords = (function e(t, a, n = "keyword") {
                                        let r = Object.create(null);
                                        return (
                                            "string" == typeof t
                                                ? i(n, t.split(" "))
                                                : Array.isArray(t)
                                                  ? i(n, t)
                                                  : Object.keys(t).forEach(function (n) {
                                                        Object.assign(r, e(t[n], a, n));
                                                    }),
                                            r
                                        );
                                        function i(e, t) {
                                            a && (t = t.map((e) => e.toLowerCase())),
                                                t.forEach(function (t) {
                                                    var a, n, i;
                                                    let o = t.split("|");
                                                    r[o[0]] = [
                                                        e,
                                                        ((a = o[0]),
                                                        (n = o[1])
                                                            ? Number(n)
                                                            : +((i = a), !P.includes(i.toLowerCase()))),
                                                    ];
                                                });
                                        }
                                    })(i.keywords, e.case_insensitive)),
                                (i.keywordPatternRe = t(c, !0)),
                                o &&
                                    (i.begin || (i.begin = /\B|\b/),
                                    (i.beginRe = t(i.begin)),
                                    i.end || i.endsWithParent || (i.end = /\B|\b/),
                                    i.end && (i.endRe = t(i.end)),
                                    (i.terminatorEnd = l(i.end) || ""),
                                    i.endsWithParent &&
                                        o.terminatorEnd &&
                                        (i.terminatorEnd += (i.end ? "|" : "") + o.terminatorEnd)),
                                i.illegal && (i.illegalRe = t(i.illegal)),
                                i.contains || (i.contains = []),
                                (i.contains = [].concat(
                                    ...i.contains.map(function (e) {
                                        var t;
                                        return ((t = "self" === e ? i : e).variants &&
                                            !t.cachedVariants &&
                                            (t.cachedVariants = t.variants.map(function (e) {
                                                return n(t, { variants: null }, e);
                                            })),
                                        t.cachedVariants)
                                            ? t.cachedVariants
                                            : !(function e(t) {
                                                    return !!t && (t.endsWithParent || e(t.starts));
                                                })(t)
                                              ? Object.isFrozen(t)
                                                  ? n(t)
                                                  : t
                                              : n(t, { starts: t.starts ? n(t.starts) : null });
                                    }),
                                )),
                                i.contains.forEach(function (e) {
                                    a(e, i);
                                }),
                                i.starts && a(i.starts, o),
                                (s = new r()),
                                i.contains.forEach((e) => s.addRule(e.begin, { rule: e, type: "begin" })),
                                i.terminatorEnd && s.addRule(i.terminatorEnd, { type: "end" }),
                                i.illegal && s.addRule(i.illegal, { type: "illegal" }),
                                (i.matcher = s),
                                i
                            );
                        })(e)
                    );
                })(h),
                v = "",
                y = s || O,
                k = {},
                U = new T.__emitter(T),
                B = [];
            for (let e = y; e !== h; e = e.parent) e.scope && B.unshift(e.scope);
            B.forEach((e) => U.openNode(e));
            let G = "",
                Y = 0,
                H = 0,
                z = 0,
                $ = !1;
            try {
                if (h.__emitTokens) h.__emitTokens(i, U);
                else {
                    for (y.matcher.considerAll(); ; ) {
                        z++, $ ? ($ = !1) : y.matcher.considerAll(), (y.matcher.lastIndex = H);
                        let e = y.matcher.exec(i);
                        if (!e) break;
                        let t = i.substring(H, e.index),
                            a = C(t, e);
                        H = e.index + a;
                    }
                    C(i.substring(H));
                }
                return (
                    U.finalize(),
                    (v = U.toHTML()),
                    { language: e, value: v, relevance: Y, illegal: !1, _emitter: U, _top: y }
                );
            } catch (t) {
                if (t.message && t.message.includes("Illegal"))
                    return {
                        language: e,
                        value: a(i),
                        illegal: !0,
                        relevance: 0,
                        _illegalBy: {
                            message: t.message,
                            index: H,
                            context: i.slice(H - 100, H + 100),
                            mode: t.mode,
                            resultSoFar: v,
                        },
                        _emitter: U,
                    };
                if (g)
                    return {
                        language: e,
                        value: a(i),
                        illegal: !1,
                        relevance: 0,
                        errorRaised: t,
                        _emitter: U,
                        _top: y,
                    };
                throw t;
            }
        }
        function N(e, t) {
            let n;
            t = t || T.languages || Object.keys(r);
            let i =
                    ((n = {
                        value: a(e),
                        illegal: !1,
                        relevance: 0,
                        _top: b,
                        _emitter: new T.__emitter(T),
                    })._emitter.addText(e),
                    n),
                o = t
                    .filter(A)
                    .filter(G)
                    .map((t) => R(t, e, !1));
            o.unshift(i);
            let [s, l] = o.sort((e, t) => {
                if (e.relevance !== t.relevance) return t.relevance - e.relevance;
                if (e.language && t.language) {
                    if (A(e.language).supersetOf === t.language) return 1;
                    else if (A(t.language).supersetOf === e.language) return -1;
                }
                return 0;
            });
            return (s.secondBest = l), s;
        }
        function h(e) {
            var t;
            let a,
                n = (function (e) {
                    let t = e.className + " ";
                    t += e.parentNode ? e.parentNode.className : "";
                    let a = T.languageDetectRe.exec(t);
                    if (a) {
                        let t = A(a[1]);
                        return (
                            t || (U(S.replace("{}", a[1])), U("Falling back to no-highlight mode for this block.", e)),
                            t ? a[1] : "no-highlight"
                        );
                    }
                    return t.split(/\s+/).find((e) => f(e) || A(e));
                })(e);
            if (f(n)) return;
            if ((Y("before:highlightElement", { el: e, language: n }), e.dataset.highlighted))
                return void console.log(
                    "Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",
                    e,
                );
            if (
                e.children.length > 0 &&
                (T.ignoreUnescapedHTML ||
                    (console.warn(
                        "One of your code blocks includes unescaped HTML. This is a potentially serious security risk.",
                    ),
                    console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
                    console.warn("The element with unescaped HTML:"),
                    console.warn(e)),
                T.throwUnescapedHTML)
            )
                throw new H("One of your code blocks includes unescaped HTML.", e.innerHTML);
            let r = e.textContent,
                o = n ? C(r, { language: n, ignoreIllegals: !0 }) : N(r);
            (e.innerHTML = o.value),
                (e.dataset.highlighted = "yes"),
                (t = o.language),
                (a = (n && i[n]) || t),
                e.classList.add("hljs"),
                e.classList.add(`language-${a}`),
                (e.result = { language: o.language, re: o.relevance, relevance: o.relevance }),
                o.secondBest && (e.secondBest = { language: o.secondBest.language, relevance: o.secondBest.relevance }),
                Y("after:highlightElement", { el: e, result: o, text: r });
        }
        let O = !1;
        function v() {
            if ("loading" === document.readyState) {
                O ||
                    window.addEventListener(
                        "DOMContentLoaded",
                        function () {
                            v();
                        },
                        !1,
                    ),
                    (O = !0);
                return;
            }
            document.querySelectorAll(T.cssSelector).forEach(h);
        }
        function A(e) {
            return r[(e = (e || "").toLowerCase())] || r[i[e]];
        }
        function k(e, { languageName: t }) {
            "string" == typeof e && (e = [e]),
                e.forEach((e) => {
                    i[e.toLowerCase()] = t;
                });
        }
        function G(e) {
            let t = A(e);
            return t && !t.disableAutodetect;
        }
        function Y(e, t) {
            o.forEach(function (a) {
                a[e] && a[e](t);
            });
        }
        for (let t in (Object.assign(e, {
            highlight: C,
            highlightAuto: N,
            highlightAll: v,
            highlightElement: h,
            highlightBlock: function (e) {
                return (
                    B("10.7.0", "highlightBlock will be removed entirely in v12.0"),
                    B("10.7.0", "Please use highlightElement now."),
                    h(e)
                );
            },
            configure: function (e) {
                T = n(T, e);
            },
            initHighlighting: () => {
                v(), B("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
            },
            initHighlightingOnLoad: function () {
                v(), B("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
            },
            registerLanguage: function (t, a) {
                let n = null;
                try {
                    n = a(e);
                } catch (e) {
                    if ((F("Language definition for '{}' could not be registered.".replace("{}", t)), g)) F(e);
                    else throw e;
                    n = b;
                }
                n.name || (n.name = t),
                    (r[t] = n),
                    (n.rawDefinition = a.bind(null, e)),
                    n.aliases && k(n.aliases, { languageName: t });
            },
            unregisterLanguage: function (e) {
                for (let t of (delete r[e], Object.keys(i))) i[t] === e && delete i[t];
            },
            listLanguages: function () {
                return Object.keys(r);
            },
            getLanguage: A,
            registerAliases: k,
            autoDetection: G,
            inherit: n,
            addPlugin: function (e) {
                var t;
                (t = e)["before:highlightBlock"] &&
                    !t["before:highlightElement"] &&
                    (t["before:highlightElement"] = (e) => {
                        t["before:highlightBlock"](Object.assign({ block: e.el }, e));
                    }),
                    t["after:highlightBlock"] &&
                        !t["after:highlightElement"] &&
                        (t["after:highlightElement"] = (e) => {
                            t["after:highlightBlock"](Object.assign({ block: e.el }, e));
                        }),
                    o.push(e);
            },
            removePlugin: function (e) {
                let t = o.indexOf(e);
                -1 !== t && o.splice(t, 1);
            },
        }),
        (e.debugMode = function () {
            g = !1;
        }),
        (e.safeMode = function () {
            g = !0;
        }),
        (e.versionString = "11.11.1"),
        (e.regex = { concat: m, lookahead: c, either: p, optional: d, anyNumberOfTimes: _ }),
        y))
            "object" == typeof y[t] &&
                (function e(t) {
                    return (
                        t instanceof Map
                            ? (t.clear =
                                  t.delete =
                                  t.set =
                                      function () {
                                          throw Error("map is read-only");
                                      })
                            : t instanceof Set &&
                              (t.add =
                                  t.clear =
                                  t.delete =
                                      function () {
                                          throw Error("set is read-only");
                                      }),
                        Object.freeze(t),
                        Object.getOwnPropertyNames(t).forEach((a) => {
                            let n = t[a],
                                r = typeof n;
                            ("object" !== r && "function" !== r) || Object.isFrozen(n) || e(n);
                        }),
                        t
                    );
                })(y[t]);
        return Object.assign(e, y), e;
    },
    $ = z({});
($.newInstance = () => z({})), (e.exports = $), ($.HighlightJS = $), ($.default = $);
