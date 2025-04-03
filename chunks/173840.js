function t(e) {
    return (
        e instanceof Map
            ? (e.clear =
                  e.delete =
                  e.set =
                      function () {
                          throw Error('map is read-only');
                      })
            : e instanceof Set &&
              (e.add =
                  e.clear =
                  e.delete =
                      function () {
                          throw Error('set is read-only');
                      }),
        Object.freeze(e),
        Object.getOwnPropertyNames(e).forEach((n) => {
            let r = e[n],
                i = typeof r;
            ('object' !== i && 'function' !== i) || Object.isFrozen(r) || t(r);
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
    return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
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
let o = '</span>',
    a = (e) => !!e.scope,
    s = (e, { prefix: t }) => {
        if (e.startsWith('language:')) return e.replace('language:', 'language-');
        if (e.includes('.')) {
            let n = e.split('.');
            return [`${t}${n.shift()}`, ...n.map((e, t) => `${e}${'_'.repeat(t + 1)}`)].join(' ');
        }
        return `${t}${e}`;
    };
class l {
    constructor(e, t) {
        (this.buffer = ''), (this.classPrefix = t.classPrefix), e.walk(this);
    }
    addText(e) {
        this.buffer += r(e);
    }
    openNode(e) {
        if (!a(e)) return;
        let t = s(e.scope, { prefix: this.classPrefix });
        this.span(t);
    }
    closeNode(e) {
        a(e) && (this.buffer += o);
    }
    value() {
        return this.buffer;
    }
    span(e) {
        this.buffer += `<span class="${e}">`;
    }
}
let c = (e = {}) => {
    let t = { children: [] };
    return Object.assign(t, e), t;
};
class u {
    constructor() {
        (this.rootNode = c()), (this.stack = [this.rootNode]);
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
        let t = c({ scope: e });
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
        return 'string' == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach((t) => this._walk(e, t)), e.closeNode(t)), e;
    }
    static _collapse(e) {
        'string' != typeof e &&
            e.children &&
            (e.children.every((e) => 'string' == typeof e)
                ? (e.children = [e.children.join('')])
                : e.children.forEach((e) => {
                      u._collapse(e);
                  }));
    }
}
class d extends u {
    constructor(e) {
        super(), (this.options = e);
    }
    addText(e) {
        '' !== e && this.add(e);
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
function f(e) {
    return e ? ('string' == typeof e ? e : e.source) : null;
}
function _(e) {
    return m('(?=', e, ')');
}
function p(e) {
    return m('(?:', e, ')*');
}
function h(e) {
    return m('(?:', e, ')?');
}
function m(...e) {
    return e.map((e) => f(e)).join('');
}
function g(e) {
    let t = e[e.length - 1];
    return 'object' == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function E(...e) {
    return '(' + (g(e).capture ? '' : '?:') + e.map((e) => f(e)).join('|') + ')';
}
function b(e) {
    return RegExp(e.toString() + '|').exec('').length - 1;
}
function y(e, t) {
    let n = e && e.exec(t);
    return n && 0 === n.index;
}
let v = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function O(e, { joinWith: t }) {
    let n = 0;
    return e
        .map((e) => {
            let t = (n += 1),
                r = f(e),
                i = '';
            for (; r.length > 0; ) {
                let e = v.exec(r);
                if (!e) {
                    i += r;
                    break;
                }
                (i += r.substring(0, e.index)), (r = r.substring(e.index + e[0].length)), '\\' === e[0][0] && e[1] ? (i += '\\' + String(Number(e[1]) + t)) : ((i += e[0]), '(' === e[0] && n++);
            }
            return i;
        })
        .map((e) => `(${e})`)
        .join(t);
}
let I = /\b\B/,
    S = '[a-zA-Z]\\w*',
    T = '[a-zA-Z_]\\w*',
    N = '\\b\\d+(\\.\\d+)?',
    A = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
    C = '\\b(0b[01]+)',
    R = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
    P = (e = {}) => {
        let t = /^#![ ]*\//;
        return (
            e.binary && (e.begin = m(t, /.*\b/, e.binary, /\b.*/)),
            i(
                {
                    scope: 'meta',
                    begin: t,
                    end: /$/,
                    relevance: 0,
                    'on:begin': (e, t) => {
                        0 !== e.index && t.ignoreMatch();
                    }
                },
                e
            )
        );
    },
    w = {
        begin: '\\\\[\\s\\S]',
        relevance: 0
    },
    D = {
        scope: 'string',
        begin: "'",
        end: "'",
        illegal: '\\n',
        contains: [w]
    },
    L = {
        scope: 'string',
        begin: '"',
        end: '"',
        illegal: '\\n',
        contains: [w]
    },
    x = { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ },
    M = function (e, t, n = {}) {
        let r = i(
            {
                scope: 'comment',
                begin: e,
                end: t,
                contains: []
            },
            n
        );
        r.contains.push({
            scope: 'doctag',
            begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
            end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
            excludeBegin: !0,
            relevance: 0
        });
        let o = E('I', 'a', 'is', 'so', 'us', 'to', 'at', 'if', 'in', 'it', 'on', /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return r.contains.push({ begin: m(/[ ]+/, '(', o, /[.]?[:]?([.][ ]|[ ])/, '){3}') }), r;
    },
    k = M('//', '$'),
    j = M('/\\*', '\\*/'),
    U = M('#', '$'),
    G = {
        scope: 'regexp',
        begin: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [
            w,
            {
                begin: /\[/,
                end: /\]/,
                relevance: 0,
                contains: [w]
            }
        ]
    },
    B = {
        scope: 'title',
        begin: S,
        relevance: 0
    },
    F = {
        scope: 'title',
        begin: T,
        relevance: 0
    };
var V = Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: D,
    BACKSLASH_ESCAPE: w,
    BINARY_NUMBER_MODE: {
        scope: 'number',
        begin: C,
        relevance: 0
    },
    BINARY_NUMBER_RE: C,
    COMMENT: M,
    C_BLOCK_COMMENT_MODE: j,
    C_LINE_COMMENT_MODE: k,
    C_NUMBER_MODE: {
        scope: 'number',
        begin: A,
        relevance: 0
    },
    C_NUMBER_RE: A,
    END_SAME_AS_BEGIN: function (e) {
        return Object.assign(e, {
            'on:begin': (e, t) => {
                t.data._beginMatch = e[1];
            },
            'on:end': (e, t) => {
                t.data._beginMatch !== e[1] && t.ignoreMatch();
            }
        });
    },
    HASH_COMMENT_MODE: U,
    IDENT_RE: S,
    MATCH_NOTHING_RE: I,
    METHOD_GUARD: {
        begin: '\\.\\s*' + T,
        relevance: 0
    },
    NUMBER_MODE: {
        scope: 'number',
        begin: N,
        relevance: 0
    },
    NUMBER_RE: N,
    PHRASAL_WORDS_MODE: x,
    QUOTE_STRING_MODE: L,
    REGEXP_MODE: G,
    RE_STARTERS_RE: R,
    SHEBANG: P,
    TITLE_MODE: B,
    UNDERSCORE_IDENT_RE: T,
    UNDERSCORE_TITLE_MODE: F
});
function Z(e, t) {
    '.' === e.input[e.index - 1] && t.ignoreMatch();
}
function H(e, t) {
    void 0 !== e.className && ((e.scope = e.className), delete e.className);
}
function W(e, t) {
    t && e.beginKeywords && ((e.begin = '\\b(' + e.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'), (e.__beforeBegin = Z), (e.keywords = e.keywords || e.beginKeywords), delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0));
}
function Y(e, t) {
    Array.isArray(e.illegal) && (e.illegal = E(...e.illegal));
}
function K(e, t) {
    if (e.match) {
        if (e.begin || e.end) throw Error('begin & end are not supported with match');
        (e.begin = e.match), delete e.match;
    }
}
function z(e, t) {
    void 0 === e.relevance && (e.relevance = 1);
}
let q = (e, t) => {
        if (!e.beforeMatch) return;
        if (e.starts) throw Error('beforeMatch cannot be used with starts');
        let n = Object.assign({}, e);
        Object.keys(e).forEach((t) => {
            delete e[t];
        }),
            (e.keywords = n.keywords),
            (e.begin = m(n.beforeMatch, _(n.begin))),
            (e.starts = {
                relevance: 0,
                contains: [Object.assign(n, { endsParent: !0 })]
            }),
            (e.relevance = 0),
            delete n.beforeMatch;
    },
    Q = ['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent', 'list', 'value'],
    X = 'keyword';
function J(e, t, n = X) {
    let r = Object.create(null);
    return (
        'string' == typeof e
            ? i(n, e.split(' '))
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
                let n = t.split('|');
                r[n[0]] = [e, $(n[0], n[1])];
            });
    }
}
function $(e, t) {
    return t ? Number(t) : +!ee(e);
}
function ee(e) {
    return Q.includes(e.toLowerCase());
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
    eo = Error();
function ea(e, t, { key: n }) {
    let r = 0,
        i = e[n],
        o = {},
        a = {};
    for (let e = 1; e <= t.length; e++) (a[e + r] = i[e]), (o[e + r] = !0), (r += b(t[e - 1]));
    (e[n] = a), (e[n]._emit = o), (e[n]._multi = !0);
}
function es(e) {
    if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin) throw (en('skip, excludeBegin, returnBegin not compatible with beginScope: {}'), eo);
        if ('object' != typeof e.beginScope || null === e.beginScope) throw (en('beginScope must be object'), eo);
        ea(e, e.begin, { key: 'beginScope' }), (e.begin = O(e.begin, { joinWith: '' }));
    }
}
function el(e) {
    if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd) throw (en('skip, excludeEnd, returnEnd not compatible with endScope: {}'), eo);
        if ('object' != typeof e.endScope || null === e.endScope) throw (en('endScope must be object'), eo);
        ea(e, e.end, { key: 'endScope' }), (e.end = O(e.end, { joinWith: '' }));
    }
}
function ec(e) {
    e.scope && 'object' == typeof e.scope && null !== e.scope && ((e.beginScope = e.scope), delete e.scope);
}
function eu(e) {
    ec(e), 'string' == typeof e.beginScope && (e.beginScope = { _wrap: e.beginScope }), 'string' == typeof e.endScope && (e.endScope = { _wrap: e.endScope }), es(e), el(e);
}
function ed(e) {
    function t(t, n) {
        return RegExp(f(t), 'm' + (e.case_insensitive ? 'i' : '') + (e.unicodeRegex ? 'u' : '') + (n ? 'g' : ''));
    }
    class n {
        constructor() {
            (this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0);
        }
        addRule(e, t) {
            (t.position = this.position++), (this.matchIndexes[this.matchAt] = t), this.regexes.push([t, e]), (this.matchAt += b(e) + 1);
        }
        compile() {
            0 === this.regexes.length && (this.exec = () => null);
            let e = this.regexes.map((e) => e[1]);
            (this.matcherRe = t(O(e, { joinWith: '|' }), !0)), (this.lastIndex = 0);
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
            this.rules.push([e, t]), 'begin' === t.type && this.count++;
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
    function o(e) {
        let t = new r();
        return (
            e.contains.forEach((e) =>
                t.addRule(e.begin, {
                    rule: e,
                    type: 'begin'
                })
            ),
            e.terminatorEnd && t.addRule(e.terminatorEnd, { type: 'end' }),
            e.illegal && t.addRule(e.illegal, { type: 'illegal' }),
            t
        );
    }
    function a(n, r) {
        let i = n;
        if (n.isCompiled) return i;
        [H, K, eu, q].forEach((e) => e(n, r)), e.compilerExtensions.forEach((e) => e(n, r)), (n.__beforeBegin = null), [W, Y, z].forEach((e) => e(n, r)), (n.isCompiled = !0);
        let s = null;
        return (
            'object' == typeof n.keywords && n.keywords.$pattern && ((n.keywords = Object.assign({}, n.keywords)), (s = n.keywords.$pattern), delete n.keywords.$pattern),
            (s = s || /\w+/),
            n.keywords && (n.keywords = J(n.keywords, e.case_insensitive)),
            (i.keywordPatternRe = t(s, !0)),
            r && (n.begin || (n.begin = /\B|\b/), (i.beginRe = t(i.begin)), n.end || n.endsWithParent || (n.end = /\B|\b/), n.end && (i.endRe = t(i.end)), (i.terminatorEnd = f(i.end) || ''), n.endsWithParent && r.terminatorEnd && (i.terminatorEnd += (n.end ? '|' : '') + r.terminatorEnd)),
            n.illegal && (i.illegalRe = t(n.illegal)),
            n.contains || (n.contains = []),
            (n.contains = [].concat(
                ...n.contains.map(function (e) {
                    return e_('self' === e ? n : e);
                })
            )),
            n.contains.forEach(function (e) {
                a(e, i);
            }),
            n.starts && a(n.starts, r),
            (i.matcher = o(i)),
            i
        );
    }
    if ((e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes('self'))) throw Error('ERR: contains `self` is not supported at the top-level of a language.  See documentation.');
    return (e.classNameAliases = i(e.classNameAliases || {})), a(e);
}
function ef(e) {
    return !!e && (e.endsWithParent || ef(e.starts));
}
function e_(e) {
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
var ep = '11.11.1';
class eh extends Error {
    constructor(e, t) {
        super(e), (this.name = 'HTMLInjectionError'), (this.html = t);
    }
}
let em = r,
    eg = i,
    eE = Symbol('nomatch'),
    eb = 7,
    ey = function (e) {
        let r = Object.create(null),
            i = Object.create(null),
            o = [],
            a = !0,
            s = "Could not find the language '{}', did you forget to load/include a language module?",
            l = {
                disableAutodetect: !0,
                name: 'Plain text',
                contains: []
            },
            c = {
                ignoreUnescapedHTML: !1,
                throwUnescapedHTML: !1,
                noHighlightRe: /^(no-?highlight)$/i,
                languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                classPrefix: 'hljs-',
                cssSelector: 'pre code',
                languages: null,
                __emitter: d
            };
        function u(e) {
            return c.noHighlightRe.test(e);
        }
        function f(e) {
            let t = e.className + ' ';
            t += e.parentNode ? e.parentNode.className : '';
            let n = c.languageDetectRe.exec(t);
            if (n) {
                let t = P(n[1]);
                return t || (er(s.replace('{}', n[1])), er('Falling back to no-highlight mode for this block.', e)), t ? n[1] : 'no-highlight';
            }
            return t.split(/\s+/).find((e) => u(e) || P(e));
        }
        function g(e, t, n) {
            let r = '',
                i = '';
            'object' == typeof t ? ((r = e), (n = t.ignoreIllegals), (i = t.language)) : (ei('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'), ei('10.7.0', 'Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277'), (i = e), (r = t)), void 0 === n && (n = !0);
            let o = {
                code: r,
                language: i
            };
            x('before:highlight', o);
            let a = o.result ? o.result : b(o.language, o.code, n);
            return (a.code = o.code), x('after:highlight', a), a;
        }
        function b(e, t, i, o) {
            let l = Object.create(null);
            function u(e, t) {
                return e.keywords[t];
            }
            function d() {
                if (!w.keywords) return void L.addText(x);
                let e = 0;
                w.keywordPatternRe.lastIndex = 0;
                let t = w.keywordPatternRe.exec(x),
                    n = '';
                for (; t; ) {
                    n += x.substring(e, t.index);
                    let r = A.case_insensitive ? t[0].toLowerCase() : t[0],
                        i = u(w, r);
                    if (i) {
                        let [e, o] = i;
                        if ((L.addText(n), (n = ''), (l[r] = (l[r] || 0) + 1), l[r] <= eb && (M += o), e.startsWith('_'))) n += t[0];
                        else {
                            let n = A.classNameAliases[e] || e;
                            p(t[0], n);
                        }
                    } else n += t[0];
                    (e = w.keywordPatternRe.lastIndex), (t = w.keywordPatternRe.exec(x));
                }
                (n += x.substring(e)), L.addText(n);
            }
            function f() {
                if ('' === x) return;
                let e = null;
                if ('string' == typeof w.subLanguage) {
                    if (!r[w.subLanguage]) return void L.addText(x);
                    (e = b(w.subLanguage, x, !0, D[w.subLanguage])), (D[w.subLanguage] = e._top);
                } else e = O(x, w.subLanguage.length ? w.subLanguage : null);
                w.relevance > 0 && (M += e.relevance), L.__addSublanguage(e._emitter, e.language);
            }
            function _() {
                null != w.subLanguage ? f() : d(), (x = '');
            }
            function p(e, t) {
                '' !== e && (L.startScope(t), L.addText(e), L.endScope());
            }
            function h(e, t) {
                let n = 1,
                    r = t.length - 1;
                for (; n <= r; ) {
                    if (!e._emit[n]) {
                        n++;
                        continue;
                    }
                    let r = A.classNameAliases[e[n]] || e[n],
                        i = t[n];
                    r ? p(i, r) : ((x = i), d(), (x = '')), n++;
                }
            }
            function m(e, t) {
                return e.scope && 'string' == typeof e.scope && L.openNode(A.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (p(x, A.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), (x = '')) : e.beginScope._multi && (h(e.beginScope, t), (x = ''))), (w = Object.create(e, { parent: { value: w } }));
            }
            function g(e, t, r) {
                let i = y(e.endRe, r);
                if (i) {
                    if (e['on:end']) {
                        let r = new n(e);
                        e['on:end'](t, r), r.isMatchIgnored && (i = !1);
                    }
                    if (i) {
                        for (; e.endsParent && e.parent; ) e = e.parent;
                        return e;
                    }
                }
                if (e.endsWithParent) return g(e.parent, t, r);
            }
            function E(e) {
                return 0 === w.matcher.regexIndex ? ((x += e[0]), 1) : ((U = !0), 0);
            }
            function v(e) {
                let t = e[0],
                    r = e.rule,
                    i = new n(r);
                for (let n of [r.__beforeBegin, r['on:begin']]) if (n && (n(e, i), i.isMatchIgnored)) return E(t);
                return r.skip ? (x += t) : (r.excludeBegin && (x += t), _(), r.returnBegin || r.excludeBegin || (x = t)), m(r, e), r.returnBegin ? 0 : t.length;
            }
            function I(e) {
                let n = e[0],
                    r = t.substring(e.index),
                    i = g(w, e, r);
                if (!i) return eE;
                let o = w;
                w.endScope && w.endScope._wrap ? (_(), p(n, w.endScope._wrap)) : w.endScope && w.endScope._multi ? (_(), h(w.endScope, e)) : o.skip ? (x += n) : (o.returnEnd || o.excludeEnd || (x += n), _(), o.excludeEnd && (x = n));
                do w.scope && L.closeNode(), w.skip || w.subLanguage || (M += w.relevance), (w = w.parent);
                while (w !== i.parent);
                return i.starts && m(i.starts, e), o.returnEnd ? 0 : n.length;
            }
            function S() {
                let e = [];
                for (let t = w; t !== A; t = t.parent) t.scope && e.unshift(t.scope);
                e.forEach((e) => L.openNode(e));
            }
            let T = {};
            function N(n, r) {
                let o = r && r[0];
                if (((x += n), null == o)) return _(), 0;
                if ('begin' === T.type && 'end' === r.type && T.index === r.index && '' === o) {
                    if (((x += t.slice(r.index, r.index + 1)), !a)) {
                        let t = Error(`0 width match regex (${e})`);
                        throw ((t.languageName = e), (t.badRule = T.rule), t);
                    }
                    return 1;
                }
                if (((T = r), 'begin' === r.type)) return v(r);
                if ('illegal' !== r.type || i) {
                    if ('end' === r.type) {
                        let e = I(r);
                        if (e !== eE) return e;
                    }
                } else {
                    let e = Error('Illegal lexeme "' + o + '" for mode "' + (w.scope || '<unnamed>') + '"');
                    throw ((e.mode = w), e);
                }
                if ('illegal' === r.type && '' === o) return (x += '\n'), 1;
                if (j > 100000 && j > 3 * r.index) throw Error('potential infinite loop, way more iterations than matches');
                return (x += o), o.length;
            }
            let A = P(e);
            if (!A) throw (en(s.replace('{}', e)), Error('Unknown language: "' + e + '"'));
            let C = ed(A),
                R = '',
                w = o || C,
                D = {},
                L = new c.__emitter(c);
            S();
            let x = '',
                M = 0,
                k = 0,
                j = 0,
                U = !1;
            try {
                if (A.__emitTokens) A.__emitTokens(t, L);
                else {
                    for (w.matcher.considerAll(); ; ) {
                        j++, U ? (U = !1) : w.matcher.considerAll(), (w.matcher.lastIndex = k);
                        let e = w.matcher.exec(t);
                        if (!e) break;
                        let n = t.substring(k, e.index),
                            r = N(n, e);
                        k = e.index + r;
                    }
                    N(t.substring(k));
                }
                return (
                    L.finalize(),
                    (R = L.toHTML()),
                    {
                        language: e,
                        value: R,
                        relevance: M,
                        illegal: !1,
                        _emitter: L,
                        _top: w
                    }
                );
            } catch (n) {
                if (n.message && n.message.includes('Illegal'))
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
                            resultSoFar: R
                        },
                        _emitter: L
                    };
                if (a)
                    return {
                        language: e,
                        value: em(t),
                        illegal: !1,
                        relevance: 0,
                        errorRaised: n,
                        _emitter: L,
                        _top: w
                    };
                throw n;
            }
        }
        function v(e) {
            let t = {
                value: em(e),
                illegal: !1,
                relevance: 0,
                _top: l,
                _emitter: new c.__emitter(c)
            };
            return t._emitter.addText(e), t;
        }
        function O(e, t) {
            t = t || c.languages || Object.keys(r);
            let n = v(e),
                i = t
                    .filter(P)
                    .filter(D)
                    .map((t) => b(t, e, !1));
            i.unshift(n);
            let [o, a] = i.sort((e, t) => {
                    if (e.relevance !== t.relevance) return t.relevance - e.relevance;
                    if (e.language && t.language) {
                        if (P(e.language).supersetOf === t.language) return 1;
                        else if (P(t.language).supersetOf === e.language) return -1;
                    }
                    return 0;
                }),
                s = o;
            return (s.secondBest = a), s;
        }
        function I(e, t, n) {
            let r = (t && i[t]) || n;
            e.classList.add('hljs'), e.classList.add(`language-${r}`);
        }
        function S(e) {
            let t = null,
                n = f(e);
            if (u(n)) return;
            if (
                (x('before:highlightElement', {
                    el: e,
                    language: n
                }),
                e.dataset.highlighted)
            )
                return void console.log('Element previously highlighted. To highlight again, first unset `dataset.highlighted`.', e);
            if (e.children.length > 0 && (c.ignoreUnescapedHTML || (console.warn('One of your code blocks includes unescaped HTML. This is a potentially serious security risk.'), console.warn('https://github.com/highlightjs/highlight.js/wiki/security'), console.warn('The element with unescaped HTML:'), console.warn(e)), c.throwUnescapedHTML)) throw new eh('One of your code blocks includes unescaped HTML.', e.innerHTML);
            let r = (t = e).textContent,
                i = n
                    ? g(r, {
                          language: n,
                          ignoreIllegals: !0
                      })
                    : O(r);
            (e.innerHTML = i.value),
                (e.dataset.highlighted = 'yes'),
                I(e, n, i.language),
                (e.result = {
                    language: i.language,
                    re: i.relevance,
                    relevance: i.relevance
                }),
                i.secondBest &&
                    (e.secondBest = {
                        language: i.secondBest.language,
                        relevance: i.secondBest.relevance
                    }),
                x('after:highlightElement', {
                    el: e,
                    result: i,
                    text: r
                });
        }
        let T = () => {
            C(), ei('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.');
        };
        function N() {
            C(), ei('10.6.0', 'initHighlightingOnLoad() deprecated.  Use highlightAll() now.');
        }
        let A = !1;
        function C() {
            function e() {
                C();
            }
            if ('loading' === document.readyState) {
                A || window.addEventListener('DOMContentLoaded', e, !1), (A = !0);
                return;
            }
            document.querySelectorAll(c.cssSelector).forEach(S);
        }
        function R(t, n) {
            let i = null;
            try {
                i = n(e);
            } catch (e) {
                if ((en("Language definition for '{}' could not be registered.".replace('{}', t)), a)) en(e);
                else throw e;
                i = l;
            }
            i.name || (i.name = t), (r[t] = i), (i.rawDefinition = n.bind(null, e)), i.aliases && w(i.aliases, { languageName: t });
        }
        function P(e) {
            return r[(e = (e || '').toLowerCase())] || r[i[e]];
        }
        function w(e, { languageName: t }) {
            'string' == typeof e && (e = [e]),
                e.forEach((e) => {
                    i[e.toLowerCase()] = t;
                });
        }
        function D(e) {
            let t = P(e);
            return t && !t.disableAutodetect;
        }
        function L(e) {
            e['before:highlightBlock'] &&
                !e['before:highlightElement'] &&
                (e['before:highlightElement'] = (t) => {
                    e['before:highlightBlock'](Object.assign({ block: t.el }, t));
                }),
                e['after:highlightBlock'] &&
                    !e['after:highlightElement'] &&
                    (e['after:highlightElement'] = (t) => {
                        e['after:highlightBlock'](Object.assign({ block: t.el }, t));
                    });
        }
        function x(e, t) {
            let n = e;
            o.forEach(function (e) {
                e[n] && e[n](t);
            });
        }
        function M(e) {
            return ei('10.7.0', 'highlightBlock will be removed entirely in v12.0'), ei('10.7.0', 'Please use highlightElement now.'), S(e);
        }
        for (let n in (Object.assign(e, {
            highlight: g,
            highlightAuto: O,
            highlightAll: C,
            highlightElement: S,
            highlightBlock: M,
            configure: function (e) {
                c = eg(c, e);
            },
            initHighlighting: T,
            initHighlightingOnLoad: N,
            registerLanguage: R,
            unregisterLanguage: function (e) {
                for (let t of (delete r[e], Object.keys(i))) i[t] === e && delete i[t];
            },
            listLanguages: function () {
                return Object.keys(r);
            },
            getLanguage: P,
            registerAliases: w,
            autoDetection: D,
            inherit: eg,
            addPlugin: function (e) {
                L(e), o.push(e);
            },
            removePlugin: function (e) {
                let t = o.indexOf(e);
                -1 !== t && o.splice(t, 1);
            }
        }),
        (e.debugMode = function () {
            a = !1;
        }),
        (e.safeMode = function () {
            a = !0;
        }),
        (e.versionString = ep),
        (e.regex = {
            concat: m,
            lookahead: _,
            either: E,
            optional: h,
            anyNumberOfTimes: p
        }),
        V))
            'object' == typeof V[n] && t(V[n]);
        return Object.assign(e, V), e;
    },
    ev = ey({});
(ev.newInstance = () => ey({})), (e.exports = ev), (ev.HighlightJS = ev), (ev.default = ev);
