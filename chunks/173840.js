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
            let i = e[n],
                r = typeof i;
            ('object' !== r && 'function' !== r) || Object.isFrozen(i) || t(i);
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
function i(e) {
    return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
}
function r(e, ...t) {
    let n = Object.create(null);
    for (let t in e) n[t] = e[t];
    return (
        t.forEach(function (e) {
            for (let t in e) n[t] = e[t];
        }),
        n
    );
}
let a = '</span>',
    s = (e) => !!e.scope,
    o = (e, { prefix: t }) => {
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
        this.buffer += i(e);
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
        return 'string' == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach((t) => this._walk(e, t)), e.closeNode(t)), e;
    }
    static _collapse(e) {
        'string' != typeof e &&
            e.children &&
            (e.children.every((e) => 'string' == typeof e)
                ? (e.children = [e.children.join('')])
                : e.children.forEach((e) => {
                      c._collapse(e);
                  }));
    }
}
class d extends c {
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
function v(e) {
    return RegExp(e.toString() + '|').exec('').length - 1;
}
function y(e, t) {
    let n = e && e.exec(t);
    return n && 0 === n.index;
}
let I = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function T(e, { joinWith: t }) {
    let n = 0;
    return e
        .map((e) => {
            let t = (n += 1),
                i = f(e),
                r = '';
            for (; i.length > 0; ) {
                let e = I.exec(i);
                if (!e) {
                    r += i;
                    break;
                }
                (r += i.substring(0, e.index)), (i = i.substring(e.index + e[0].length)), '\\' === e[0][0] && e[1] ? (r += '\\' + String(Number(e[1]) + t)) : ((r += e[0]), '(' === e[0] && n++);
            }
            return r;
        })
        .map((e) => `(${e})`)
        .join(t);
}
let b = /\b\B/,
    S = '[a-zA-Z]\\w*',
    A = '[a-zA-Z_]\\w*',
    N = '\\b\\d+(\\.\\d+)?',
    C = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
    R = '\\b(0b[01]+)',
    O = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
    D = (e = {}) => {
        let t = /^#![ ]*\//;
        return (
            e.binary && (e.begin = m(t, /.*\b/, e.binary, /\b.*/)),
            r(
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
    x = {
        begin: '\\\\[\\s\\S]',
        relevance: 0
    },
    L = {
        scope: 'string',
        begin: "'",
        end: "'",
        illegal: '\\n',
        contains: [x]
    },
    P = {
        scope: 'string',
        begin: '"',
        end: '"',
        illegal: '\\n',
        contains: [x]
    },
    w = { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ },
    M = function (e, t, n = {}) {
        let i = r(
            {
                scope: 'comment',
                begin: e,
                end: t,
                contains: []
            },
            n
        );
        i.contains.push({
            scope: 'doctag',
            begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
            end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
            excludeBegin: !0,
            relevance: 0
        });
        let a = E('I', 'a', 'is', 'so', 'us', 'to', 'at', 'if', 'in', 'it', 'on', /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return i.contains.push({ begin: m(/[ ]+/, '(', a, /[.]?[:]?([.][ ]|[ ])/, '){3}') }), i;
    },
    k = M('//', '$'),
    U = M('/\\*', '\\*/'),
    G = M('#', '$'),
    B = {
        scope: 'regexp',
        begin: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [
            x,
            {
                begin: /\[/,
                end: /\]/,
                relevance: 0,
                contains: [x]
            }
        ]
    },
    Z = {
        scope: 'title',
        begin: S,
        relevance: 0
    },
    F = {
        scope: 'title',
        begin: A,
        relevance: 0
    };
var V = Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: L,
    BACKSLASH_ESCAPE: x,
    BINARY_NUMBER_MODE: {
        scope: 'number',
        begin: R,
        relevance: 0
    },
    BINARY_NUMBER_RE: R,
    COMMENT: M,
    C_BLOCK_COMMENT_MODE: U,
    C_LINE_COMMENT_MODE: k,
    C_NUMBER_MODE: {
        scope: 'number',
        begin: C,
        relevance: 0
    },
    C_NUMBER_RE: C,
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
    HASH_COMMENT_MODE: G,
    IDENT_RE: S,
    MATCH_NOTHING_RE: b,
    METHOD_GUARD: {
        begin: '\\.\\s*' + A,
        relevance: 0
    },
    NUMBER_MODE: {
        scope: 'number',
        begin: N,
        relevance: 0
    },
    NUMBER_RE: N,
    PHRASAL_WORDS_MODE: w,
    QUOTE_STRING_MODE: P,
    REGEXP_MODE: B,
    RE_STARTERS_RE: O,
    SHEBANG: D,
    TITLE_MODE: Z,
    UNDERSCORE_IDENT_RE: A,
    UNDERSCORE_TITLE_MODE: F
});
function j(e, t) {
    '.' === e.input[e.index - 1] && t.ignoreMatch();
}
function H(e, t) {
    void 0 !== e.className && ((e.scope = e.className), delete e.className);
}
function Y(e, t) {
    t && e.beginKeywords && ((e.begin = '\\b(' + e.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'), (e.__beforeBegin = j), (e.keywords = e.keywords || e.beginKeywords), delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0));
}
function W(e, t) {
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
    let i = Object.create(null);
    return (
        'string' == typeof e
            ? r(n, e.split(' '))
            : Array.isArray(e)
              ? r(n, e)
              : Object.keys(e).forEach(function (n) {
                    Object.assign(i, J(e[n], t, n));
                }),
        i
    );
    function r(e, n) {
        t && (n = n.map((e) => e.toLowerCase())),
            n.forEach(function (t) {
                let n = t.split('|');
                i[n[0]] = [e, $(n[0], n[1])];
            });
    }
}
function $(e, t) {
    return t ? Number(t) : ee(e) ? 0 : 1;
}
function ee(e) {
    return Q.includes(e.toLowerCase());
}
let et = {},
    en = (e) => {
        console.error(e);
    },
    ei = (e, ...t) => {
        console.log(`WARN: ${e}`, ...t);
    },
    er = (e, t) => {
        et[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), (et[`${e}/${t}`] = !0));
    },
    ea = Error();
function es(e, t, { key: n }) {
    let i = 0,
        r = e[n],
        a = {},
        s = {};
    for (let e = 1; e <= t.length; e++) (s[e + i] = r[e]), (a[e + i] = !0), (i += v(t[e - 1]));
    (e[n] = s), (e[n]._emit = a), (e[n]._multi = !0);
}
function eo(e) {
    if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin) throw (en('skip, excludeBegin, returnBegin not compatible with beginScope: {}'), ea);
        if ('object' != typeof e.beginScope || null === e.beginScope) throw (en('beginScope must be object'), ea);
        es(e, e.begin, { key: 'beginScope' }), (e.begin = T(e.begin, { joinWith: '' }));
    }
}
function el(e) {
    if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd) throw (en('skip, excludeEnd, returnEnd not compatible with endScope: {}'), ea);
        if ('object' != typeof e.endScope || null === e.endScope) throw (en('endScope must be object'), ea);
        es(e, e.end, { key: 'endScope' }), (e.end = T(e.end, { joinWith: '' }));
    }
}
function eu(e) {
    e.scope && 'object' == typeof e.scope && null !== e.scope && ((e.beginScope = e.scope), delete e.scope);
}
function ec(e) {
    eu(e), 'string' == typeof e.beginScope && (e.beginScope = { _wrap: e.beginScope }), 'string' == typeof e.endScope && (e.endScope = { _wrap: e.endScope }), eo(e), el(e);
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
            (t.position = this.position++), (this.matchIndexes[this.matchAt] = t), this.regexes.push([t, e]), (this.matchAt += v(e) + 1);
        }
        compile() {
            0 === this.regexes.length && (this.exec = () => null);
            let e = this.regexes.map((e) => e[1]);
            (this.matcherRe = t(T(e, { joinWith: '|' }), !0)), (this.lastIndex = 0);
        }
        exec(e) {
            this.matcherRe.lastIndex = this.lastIndex;
            let t = this.matcherRe.exec(e);
            if (!t) return null;
            let n = t.findIndex((e, t) => t > 0 && void 0 !== e),
                i = this.matchIndexes[n];
            return t.splice(0, n), Object.assign(t, i);
        }
    }
    class i {
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
            if (this.resumingScanAtSamePosition()) {
                if (n && n.index === this.lastIndex);
                else {
                    let t = this.getMatcher(0);
                    (t.lastIndex = this.lastIndex + 1), (n = t.exec(e));
                }
            }
            return n && ((this.regexIndex += n.position + 1), this.regexIndex === this.count && this.considerAll()), n;
        }
    }
    function a(e) {
        let t = new i();
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
    function s(n, i) {
        let r = n;
        if (n.isCompiled) return r;
        [H, K, ec, q].forEach((e) => e(n, i)), e.compilerExtensions.forEach((e) => e(n, i)), (n.__beforeBegin = null), [Y, W, z].forEach((e) => e(n, i)), (n.isCompiled = !0);
        let o = null;
        return (
            'object' == typeof n.keywords && n.keywords.$pattern && ((n.keywords = Object.assign({}, n.keywords)), (o = n.keywords.$pattern), delete n.keywords.$pattern),
            (o = o || /\w+/),
            n.keywords && (n.keywords = J(n.keywords, e.case_insensitive)),
            (r.keywordPatternRe = t(o, !0)),
            i && (n.begin || (n.begin = /\B|\b/), (r.beginRe = t(r.begin)), n.end || n.endsWithParent || (n.end = /\B|\b/), n.end && (r.endRe = t(r.end)), (r.terminatorEnd = f(r.end) || ''), n.endsWithParent && i.terminatorEnd && (r.terminatorEnd += (n.end ? '|' : '') + i.terminatorEnd)),
            n.illegal && (r.illegalRe = t(n.illegal)),
            n.contains || (n.contains = []),
            (n.contains = [].concat(
                ...n.contains.map(function (e) {
                    return e_('self' === e ? n : e);
                })
            )),
            n.contains.forEach(function (e) {
                s(e, r);
            }),
            n.starts && s(n.starts, i),
            (r.matcher = a(r)),
            r
        );
    }
    if ((e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes('self'))) throw Error('ERR: contains `self` is not supported at the top-level of a language.  See documentation.');
    return (e.classNameAliases = r(e.classNameAliases || {})), s(e);
}
function ef(e) {
    return !!e && (e.endsWithParent || ef(e.starts));
}
function e_(e) {
    return (e.variants &&
        !e.cachedVariants &&
        (e.cachedVariants = e.variants.map(function (t) {
            return r(e, { variants: null }, t);
        })),
    e.cachedVariants)
        ? e.cachedVariants
        : ef(e)
          ? r(e, { starts: e.starts ? r(e.starts) : null })
          : Object.isFrozen(e)
            ? r(e)
            : e;
}
var ep = '11.11.1';
class eh extends Error {
    constructor(e, t) {
        super(e), (this.name = 'HTMLInjectionError'), (this.html = t);
    }
}
let em = i,
    eg = r,
    eE = Symbol('nomatch'),
    ev = 7,
    ey = function (e) {
        let i = Object.create(null),
            r = Object.create(null),
            a = [],
            s = !0,
            o = "Could not find the language '{}', did you forget to load/include a language module?",
            l = {
                disableAutodetect: !0,
                name: 'Plain text',
                contains: []
            },
            u = {
                ignoreUnescapedHTML: !1,
                throwUnescapedHTML: !1,
                noHighlightRe: /^(no-?highlight)$/i,
                languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                classPrefix: 'hljs-',
                cssSelector: 'pre code',
                languages: null,
                __emitter: d
            };
        function c(e) {
            return u.noHighlightRe.test(e);
        }
        function f(e) {
            let t = e.className + ' ';
            t += e.parentNode ? e.parentNode.className : '';
            let n = u.languageDetectRe.exec(t);
            if (n) {
                let t = D(n[1]);
                return t || (ei(o.replace('{}', n[1])), ei('Falling back to no-highlight mode for this block.', e)), t ? n[1] : 'no-highlight';
            }
            return t.split(/\s+/).find((e) => c(e) || D(e));
        }
        function g(e, t, n) {
            let i = '',
                r = '';
            'object' == typeof t ? ((i = e), (n = t.ignoreIllegals), (r = t.language)) : (er('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'), er('10.7.0', 'Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277'), (r = e), (i = t)), void 0 === n && (n = !0);
            let a = {
                code: i,
                language: r
            };
            w('before:highlight', a);
            let s = a.result ? a.result : v(a.language, a.code, n);
            return (s.code = a.code), w('after:highlight', s), s;
        }
        function v(e, t, r, a) {
            let l = Object.create(null);
            function c(e, t) {
                return e.keywords[t];
            }
            function d() {
                if (!x.keywords) {
                    P.addText(w);
                    return;
                }
                let e = 0;
                x.keywordPatternRe.lastIndex = 0;
                let t = x.keywordPatternRe.exec(w),
                    n = '';
                for (; t; ) {
                    n += w.substring(e, t.index);
                    let i = C.case_insensitive ? t[0].toLowerCase() : t[0],
                        r = c(x, i);
                    if (r) {
                        let [e, a] = r;
                        if ((P.addText(n), (n = ''), (l[i] = (l[i] || 0) + 1), l[i] <= ev && (M += a), e.startsWith('_'))) n += t[0];
                        else {
                            let n = C.classNameAliases[e] || e;
                            p(t[0], n);
                        }
                    } else n += t[0];
                    (e = x.keywordPatternRe.lastIndex), (t = x.keywordPatternRe.exec(w));
                }
                (n += w.substring(e)), P.addText(n);
            }
            function f() {
                if ('' === w) return;
                let e = null;
                if ('string' == typeof x.subLanguage) {
                    if (!i[x.subLanguage]) {
                        P.addText(w);
                        return;
                    }
                    (e = v(x.subLanguage, w, !0, L[x.subLanguage])), (L[x.subLanguage] = e._top);
                } else e = T(w, x.subLanguage.length ? x.subLanguage : null);
                x.relevance > 0 && (M += e.relevance), P.__addSublanguage(e._emitter, e.language);
            }
            function _() {
                null != x.subLanguage ? f() : d(), (w = '');
            }
            function p(e, t) {
                '' !== e && (P.startScope(t), P.addText(e), P.endScope());
            }
            function h(e, t) {
                let n = 1,
                    i = t.length - 1;
                for (; n <= i; ) {
                    if (!e._emit[n]) {
                        n++;
                        continue;
                    }
                    let i = C.classNameAliases[e[n]] || e[n],
                        r = t[n];
                    i ? p(r, i) : ((w = r), d(), (w = '')), n++;
                }
            }
            function m(e, t) {
                return e.scope && 'string' == typeof e.scope && P.openNode(C.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (p(w, C.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), (w = '')) : e.beginScope._multi && (h(e.beginScope, t), (w = ''))), (x = Object.create(e, { parent: { value: x } }));
            }
            function g(e, t, i) {
                let r = y(e.endRe, i);
                if (r) {
                    if (e['on:end']) {
                        let i = new n(e);
                        e['on:end'](t, i), i.isMatchIgnored && (r = !1);
                    }
                    if (r) {
                        for (; e.endsParent && e.parent; ) e = e.parent;
                        return e;
                    }
                }
                if (e.endsWithParent) return g(e.parent, t, i);
            }
            function E(e) {
                return 0 === x.matcher.regexIndex ? ((w += e[0]), 1) : ((G = !0), 0);
            }
            function I(e) {
                let t = e[0],
                    i = e.rule,
                    r = new n(i);
                for (let n of [i.__beforeBegin, i['on:begin']]) if (n && (n(e, r), r.isMatchIgnored)) return E(t);
                return i.skip ? (w += t) : (i.excludeBegin && (w += t), _(), i.returnBegin || i.excludeBegin || (w = t)), m(i, e), i.returnBegin ? 0 : t.length;
            }
            function b(e) {
                let n = e[0],
                    i = t.substring(e.index),
                    r = g(x, e, i);
                if (!r) return eE;
                let a = x;
                x.endScope && x.endScope._wrap ? (_(), p(n, x.endScope._wrap)) : x.endScope && x.endScope._multi ? (_(), h(x.endScope, e)) : a.skip ? (w += n) : (a.returnEnd || a.excludeEnd || (w += n), _(), a.excludeEnd && (w = n));
                do x.scope && P.closeNode(), x.skip || x.subLanguage || (M += x.relevance), (x = x.parent);
                while (x !== r.parent);
                return r.starts && m(r.starts, e), a.returnEnd ? 0 : n.length;
            }
            function S() {
                let e = [];
                for (let t = x; t !== C; t = t.parent) t.scope && e.unshift(t.scope);
                e.forEach((e) => P.openNode(e));
            }
            let A = {};
            function N(n, i) {
                let a = i && i[0];
                if (((w += n), null == a)) return _(), 0;
                if ('begin' === A.type && 'end' === i.type && A.index === i.index && '' === a) {
                    if (((w += t.slice(i.index, i.index + 1)), !s)) {
                        let t = Error(`0 width match regex (${e})`);
                        throw ((t.languageName = e), (t.badRule = A.rule), t);
                    }
                    return 1;
                }
                if (((A = i), 'begin' === i.type)) return I(i);
                if ('illegal' !== i.type || r) {
                    if ('end' === i.type) {
                        let e = b(i);
                        if (e !== eE) return e;
                    }
                } else {
                    let e = Error('Illegal lexeme "' + a + '" for mode "' + (x.scope || '<unnamed>') + '"');
                    throw ((e.mode = x), e);
                }
                if ('illegal' === i.type && '' === a) return (w += '\n'), 1;
                if (U > 100000 && U > 3 * i.index) throw Error('potential infinite loop, way more iterations than matches');
                return (w += a), a.length;
            }
            let C = D(e);
            if (!C) throw (en(o.replace('{}', e)), Error('Unknown language: "' + e + '"'));
            let R = ed(C),
                O = '',
                x = a || R,
                L = {},
                P = new u.__emitter(u);
            S();
            let w = '',
                M = 0,
                k = 0,
                U = 0,
                G = !1;
            try {
                if (C.__emitTokens) C.__emitTokens(t, P);
                else {
                    for (x.matcher.considerAll(); ; ) {
                        U++, G ? (G = !1) : x.matcher.considerAll(), (x.matcher.lastIndex = k);
                        let e = x.matcher.exec(t);
                        if (!e) break;
                        let n = t.substring(k, e.index),
                            i = N(n, e);
                        k = e.index + i;
                    }
                    N(t.substring(k));
                }
                return (
                    P.finalize(),
                    (O = P.toHTML()),
                    {
                        language: e,
                        value: O,
                        relevance: M,
                        illegal: !1,
                        _emitter: P,
                        _top: x
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
                            resultSoFar: O
                        },
                        _emitter: P
                    };
                if (s)
                    return {
                        language: e,
                        value: em(t),
                        illegal: !1,
                        relevance: 0,
                        errorRaised: n,
                        _emitter: P,
                        _top: x
                    };
                throw n;
            }
        }
        function I(e) {
            let t = {
                value: em(e),
                illegal: !1,
                relevance: 0,
                _top: l,
                _emitter: new u.__emitter(u)
            };
            return t._emitter.addText(e), t;
        }
        function T(e, t) {
            t = t || u.languages || Object.keys(i);
            let n = I(e),
                r = t
                    .filter(D)
                    .filter(L)
                    .map((t) => v(t, e, !1));
            r.unshift(n);
            let [a, s] = r.sort((e, t) => {
                    if (e.relevance !== t.relevance) return t.relevance - e.relevance;
                    if (e.language && t.language) {
                        if (D(e.language).supersetOf === t.language) return 1;
                        if (D(t.language).supersetOf === e.language) return -1;
                    }
                    return 0;
                }),
                o = a;
            return (o.secondBest = s), o;
        }
        function b(e, t, n) {
            let i = (t && r[t]) || n;
            e.classList.add('hljs'), e.classList.add(`language-${i}`);
        }
        function S(e) {
            let t = null,
                n = f(e);
            if (c(n)) return;
            if (
                (w('before:highlightElement', {
                    el: e,
                    language: n
                }),
                e.dataset.highlighted)
            ) {
                console.log('Element previously highlighted. To highlight again, first unset `dataset.highlighted`.', e);
                return;
            }
            if (e.children.length > 0 && (u.ignoreUnescapedHTML || (console.warn('One of your code blocks includes unescaped HTML. This is a potentially serious security risk.'), console.warn('https://github.com/highlightjs/highlight.js/wiki/security'), console.warn('The element with unescaped HTML:'), console.warn(e)), u.throwUnescapedHTML)) throw new eh('One of your code blocks includes unescaped HTML.', e.innerHTML);
            let i = (t = e).textContent,
                r = n
                    ? g(i, {
                          language: n,
                          ignoreIllegals: !0
                      })
                    : T(i);
            (e.innerHTML = r.value),
                (e.dataset.highlighted = 'yes'),
                b(e, n, r.language),
                (e.result = {
                    language: r.language,
                    re: r.relevance,
                    relevance: r.relevance
                }),
                r.secondBest &&
                    (e.secondBest = {
                        language: r.secondBest.language,
                        relevance: r.secondBest.relevance
                    }),
                w('after:highlightElement', {
                    el: e,
                    result: r,
                    text: i
                });
        }
        let A = () => {
            R(), er('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.');
        };
        function N() {
            R(), er('10.6.0', 'initHighlightingOnLoad() deprecated.  Use highlightAll() now.');
        }
        let C = !1;
        function R() {
            function e() {
                R();
            }
            if ('loading' === document.readyState) {
                C || window.addEventListener('DOMContentLoaded', e, !1), (C = !0);
                return;
            }
            document.querySelectorAll(u.cssSelector).forEach(S);
        }
        function O(t, n) {
            let r = null;
            try {
                r = n(e);
            } catch (e) {
                if ((en("Language definition for '{}' could not be registered.".replace('{}', t)), s)) en(e);
                else throw e;
                r = l;
            }
            r.name || (r.name = t), (i[t] = r), (r.rawDefinition = n.bind(null, e)), r.aliases && x(r.aliases, { languageName: t });
        }
        function D(e) {
            return i[(e = (e || '').toLowerCase())] || i[r[e]];
        }
        function x(e, { languageName: t }) {
            'string' == typeof e && (e = [e]),
                e.forEach((e) => {
                    r[e.toLowerCase()] = t;
                });
        }
        function L(e) {
            let t = D(e);
            return t && !t.disableAutodetect;
        }
        function P(e) {
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
        function w(e, t) {
            let n = e;
            a.forEach(function (e) {
                e[n] && e[n](t);
            });
        }
        function M(e) {
            return er('10.7.0', 'highlightBlock will be removed entirely in v12.0'), er('10.7.0', 'Please use highlightElement now.'), S(e);
        }
        for (let n in (Object.assign(e, {
            highlight: g,
            highlightAuto: T,
            highlightAll: R,
            highlightElement: S,
            highlightBlock: M,
            configure: function (e) {
                u = eg(u, e);
            },
            initHighlighting: A,
            initHighlightingOnLoad: N,
            registerLanguage: O,
            unregisterLanguage: function (e) {
                for (let t of (delete i[e], Object.keys(r))) r[t] === e && delete r[t];
            },
            listLanguages: function () {
                return Object.keys(i);
            },
            getLanguage: D,
            registerAliases: x,
            autoDetection: L,
            inherit: eg,
            addPlugin: function (e) {
                P(e), a.push(e);
            },
            removePlugin: function (e) {
                let t = a.indexOf(e);
                -1 !== t && a.splice(t, 1);
            }
        }),
        (e.debugMode = function () {
            s = !1;
        }),
        (e.safeMode = function () {
            s = !0;
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
    eI = ey({});
(eI.newInstance = () => ey({})), (e.exports = eI), (eI.HighlightJS = eI), (eI.default = eI);
