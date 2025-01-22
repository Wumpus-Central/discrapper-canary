function n(e) {
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
        Object.getOwnPropertyNames(e).forEach((r) => {
            let i = e[r],
                a = typeof i;
            ('object' === a || 'function' === a) && !Object.isFrozen(i) && n(i);
        }),
        e
    );
}
class r {
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
function a(e, ...n) {
    let r = Object.create(null);
    for (let n in e) r[n] = e[n];
    return (
        n.forEach(function (e) {
            for (let n in e) r[n] = e[n];
        }),
        r
    );
}
let o = '</span>',
    s = (e) => !!e.scope,
    l = (e, { prefix: n }) => {
        if (e.startsWith('language:')) return e.replace('language:', 'language-');
        if (e.includes('.')) {
            let r = e.split('.');
            return [`${n}${r.shift()}`, ...r.map((e, n) => `${e}${'_'.repeat(n + 1)}`)].join(' ');
        }
        return `${n}${e}`;
    };
class u {
    constructor(e, n) {
        (this.buffer = ''), (this.classPrefix = n.classPrefix), e.walk(this);
    }
    addText(e) {
        this.buffer += i(e);
    }
    openNode(e) {
        if (!s(e)) return;
        let n = l(e.scope, { prefix: this.classPrefix });
        this.span(n);
    }
    closeNode(e) {
        s(e) && (this.buffer += o);
    }
    value() {
        return this.buffer;
    }
    span(e) {
        this.buffer += `<span class="${e}">`;
    }
}
let c = (e = {}) => {
    let n = { children: [] };
    return Object.assign(n, e), n;
};
class d {
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
        let n = c({ scope: e });
        this.add(n), this.stack.push(n);
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
    static _walk(e, n) {
        return 'string' == typeof n ? e.addText(n) : n.children && (e.openNode(n), n.children.forEach((n) => this._walk(e, n)), e.closeNode(n)), e;
    }
    static _collapse(e) {
        if ('string' != typeof e)
            e.children &&
                (e.children.every((e) => 'string' == typeof e)
                    ? (e.children = [e.children.join('')])
                    : e.children.forEach((e) => {
                          d._collapse(e);
                      }));
    }
}
class f extends d {
    constructor(e) {
        super(), (this.options = e);
    }
    addText(e) {
        if ('' !== e) this.add(e);
    }
    startScope(e) {
        this.openNode(e);
    }
    endScope() {
        this.closeNode();
    }
    __addSublanguage(e, n) {
        let r = e.root;
        n && (r.scope = `language:${n}`), this.add(r);
    }
    toHTML() {
        return new u(this, this.options).value();
    }
    finalize() {
        return this.closeAllNodes(), !0;
    }
}
function p(e) {
    return e ? ('string' == typeof e ? e : e.source) : null;
}
function h(e) {
    return g('(?=', e, ')');
}
function _(e) {
    return g('(?:', e, ')*');
}
function m(e) {
    return g('(?:', e, ')?');
}
function g(...e) {
    return e.map((e) => p(e)).join('');
}
function E(e) {
    let n = e[e.length - 1];
    return 'object' == typeof n && n.constructor === Object ? (e.splice(e.length - 1, 1), n) : {};
}
function v(...e) {
    return '(' + (E(e).capture ? '' : '?:') + e.map((e) => p(e)).join('|') + ')';
}
function y(e) {
    return RegExp(e.toString() + '|').exec('').length - 1;
}
function b(e, n) {
    let r = e && e.exec(n);
    return r && 0 === r.index;
}
let I = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function T(e, { joinWith: n }) {
    let r = 0;
    return e
        .map((e) => {
            let n = (r += 1),
                i = p(e),
                a = '';
            for (; i.length > 0; ) {
                let e = I.exec(i);
                if (!e) {
                    a += i;
                    break;
                }
                (a += i.substring(0, e.index)), (i = i.substring(e.index + e[0].length)), '\\' === e[0][0] && e[1] ? (a += '\\' + String(Number(e[1]) + n)) : ((a += e[0]), '(' === e[0] && r++);
            }
            return a;
        })
        .map((e) => `(${e})`)
        .join(n);
}
let S = /\b\B/,
    A = '[a-zA-Z]\\w*',
    C = '[a-zA-Z_]\\w*',
    N = '\\b\\d+(\\.\\d+)?',
    R = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
    O = '\\b(0b[01]+)',
    D = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
    x = (e = {}) => {
        let n = /^#![ ]*\//;
        return (
            e.binary && (e.begin = g(n, /.*\b/, e.binary, /\b.*/)),
            a(
                {
                    scope: 'meta',
                    begin: n,
                    end: /$/,
                    relevance: 0,
                    'on:begin': (e, n) => {
                        0 !== e.index && n.ignoreMatch();
                    }
                },
                e
            )
        );
    },
    L = {
        begin: '\\\\[\\s\\S]',
        relevance: 0
    },
    w = {
        scope: 'string',
        begin: "'",
        end: "'",
        illegal: '\\n',
        contains: [L]
    },
    P = {
        scope: 'string',
        begin: '"',
        end: '"',
        illegal: '\\n',
        contains: [L]
    },
    M = { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ },
    k = function (e, n, r = {}) {
        let i = a(
            {
                scope: 'comment',
                begin: e,
                end: n,
                contains: []
            },
            r
        );
        i.contains.push({
            scope: 'doctag',
            begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
            end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
            excludeBegin: !0,
            relevance: 0
        });
        let o = v('I', 'a', 'is', 'so', 'us', 'to', 'at', 'if', 'in', 'it', 'on', /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return i.contains.push({ begin: g(/[ ]+/, '(', o, /[.]?[:]?([.][ ]|[ ])/, '){3}') }), i;
    },
    U = k('//', '$'),
    B = k('/\\*', '\\*/'),
    G = k('#', '$'),
    Z = {
        scope: 'regexp',
        begin: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [
            L,
            {
                begin: /\[/,
                end: /\]/,
                relevance: 0,
                contains: [L]
            }
        ]
    },
    F = {
        scope: 'title',
        begin: A,
        relevance: 0
    },
    V = {
        scope: 'title',
        begin: C,
        relevance: 0
    };
var j = Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: w,
    BACKSLASH_ESCAPE: L,
    BINARY_NUMBER_MODE: {
        scope: 'number',
        begin: O,
        relevance: 0
    },
    BINARY_NUMBER_RE: O,
    COMMENT: k,
    C_BLOCK_COMMENT_MODE: B,
    C_LINE_COMMENT_MODE: U,
    C_NUMBER_MODE: {
        scope: 'number',
        begin: R,
        relevance: 0
    },
    C_NUMBER_RE: R,
    END_SAME_AS_BEGIN: function (e) {
        return Object.assign(e, {
            'on:begin': (e, n) => {
                n.data._beginMatch = e[1];
            },
            'on:end': (e, n) => {
                n.data._beginMatch !== e[1] && n.ignoreMatch();
            }
        });
    },
    HASH_COMMENT_MODE: G,
    IDENT_RE: A,
    MATCH_NOTHING_RE: S,
    METHOD_GUARD: {
        begin: '\\.\\s*' + C,
        relevance: 0
    },
    NUMBER_MODE: {
        scope: 'number',
        begin: N,
        relevance: 0
    },
    NUMBER_RE: N,
    PHRASAL_WORDS_MODE: M,
    QUOTE_STRING_MODE: P,
    REGEXP_MODE: Z,
    RE_STARTERS_RE: D,
    SHEBANG: x,
    TITLE_MODE: F,
    UNDERSCORE_IDENT_RE: C,
    UNDERSCORE_TITLE_MODE: V
});
function H(e, n) {
    '.' === e.input[e.index - 1] && n.ignoreMatch();
}
function Y(e, n) {
    void 0 !== e.className && ((e.scope = e.className), delete e.className);
}
function W(e, n) {
    if (!!n) e.beginKeywords && ((e.begin = '\\b(' + e.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'), (e.__beforeBegin = H), (e.keywords = e.keywords || e.beginKeywords), delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0));
}
function K(e, n) {
    Array.isArray(e.illegal) && (e.illegal = v(...e.illegal));
}
function z(e, n) {
    if (e.match) {
        if (e.begin || e.end) throw Error('begin & end are not supported with match');
        (e.begin = e.match), delete e.match;
    }
}
function q(e, n) {
    void 0 === e.relevance && (e.relevance = 1);
}
let Q = (e, n) => {
        if (!e.beforeMatch) return;
        if (e.starts) throw Error('beforeMatch cannot be used with starts');
        let r = Object.assign({}, e);
        Object.keys(e).forEach((n) => {
            delete e[n];
        }),
            (e.keywords = r.keywords),
            (e.begin = g(r.beforeMatch, h(r.begin))),
            (e.starts = {
                relevance: 0,
                contains: [Object.assign(r, { endsParent: !0 })]
            }),
            (e.relevance = 0),
            delete r.beforeMatch;
    },
    X = ['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent', 'list', 'value'],
    J = 'keyword';
function $(e, n, r = J) {
    let i = Object.create(null);
    return (
        'string' == typeof e
            ? a(r, e.split(' '))
            : Array.isArray(e)
              ? a(r, e)
              : Object.keys(e).forEach(function (r) {
                    Object.assign(i, $(e[r], n, r));
                }),
        i
    );
    function a(e, r) {
        n && (r = r.map((e) => e.toLowerCase())),
            r.forEach(function (n) {
                let r = n.split('|');
                i[r[0]] = [e, ee(r[0], r[1])];
            });
    }
}
function ee(e, n) {
    return n ? Number(n) : et(e) ? 0 : 1;
}
function et(e) {
    return X.includes(e.toLowerCase());
}
let en = {},
    er = (e) => {
        console.error(e);
    },
    ei = (e, ...n) => {
        console.log(`WARN: ${e}`, ...n);
    },
    ea = (e, n) => {
        !en[`${e}/${n}`] && (console.log(`Deprecated as of ${e}. ${n}`), (en[`${e}/${n}`] = !0));
    },
    eo = Error();
function es(e, n, { key: r }) {
    let i = 0,
        a = e[r],
        o = {},
        s = {};
    for (let e = 1; e <= n.length; e++) (s[e + i] = a[e]), (o[e + i] = !0), (i += y(n[e - 1]));
    (e[r] = s), (e[r]._emit = o), (e[r]._multi = !0);
}
function el(e) {
    if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin) throw (er('skip, excludeBegin, returnBegin not compatible with beginScope: {}'), eo);
        if ('object' != typeof e.beginScope || null === e.beginScope) throw (er('beginScope must be object'), eo);
        es(e, e.begin, { key: 'beginScope' }), (e.begin = T(e.begin, { joinWith: '' }));
    }
}
function eu(e) {
    if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd) throw (er('skip, excludeEnd, returnEnd not compatible with endScope: {}'), eo);
        if ('object' != typeof e.endScope || null === e.endScope) throw (er('endScope must be object'), eo);
        es(e, e.end, { key: 'endScope' }), (e.end = T(e.end, { joinWith: '' }));
    }
}
function ec(e) {
    e.scope && 'object' == typeof e.scope && null !== e.scope && ((e.beginScope = e.scope), delete e.scope);
}
function ed(e) {
    ec(e), 'string' == typeof e.beginScope && (e.beginScope = { _wrap: e.beginScope }), 'string' == typeof e.endScope && (e.endScope = { _wrap: e.endScope }), el(e), eu(e);
}
function ef(e) {
    function n(n, r) {
        return RegExp(p(n), 'm' + (e.case_insensitive ? 'i' : '') + (e.unicodeRegex ? 'u' : '') + (r ? 'g' : ''));
    }
    class r {
        constructor() {
            (this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0);
        }
        addRule(e, n) {
            (n.position = this.position++), (this.matchIndexes[this.matchAt] = n), this.regexes.push([n, e]), (this.matchAt += y(e) + 1);
        }
        compile() {
            0 === this.regexes.length && (this.exec = () => null);
            let e = this.regexes.map((e) => e[1]);
            (this.matcherRe = n(T(e, { joinWith: '|' }), !0)), (this.lastIndex = 0);
        }
        exec(e) {
            this.matcherRe.lastIndex = this.lastIndex;
            let n = this.matcherRe.exec(e);
            if (!n) return null;
            let r = n.findIndex((e, n) => n > 0 && void 0 !== e),
                i = this.matchIndexes[r];
            return n.splice(0, r), Object.assign(n, i);
        }
    }
    class i {
        constructor() {
            (this.rules = []), (this.multiRegexes = []), (this.count = 0), (this.lastIndex = 0), (this.regexIndex = 0);
        }
        getMatcher(e) {
            if (this.multiRegexes[e]) return this.multiRegexes[e];
            let n = new r();
            return this.rules.slice(e).forEach(([e, r]) => n.addRule(e, r)), n.compile(), (this.multiRegexes[e] = n), n;
        }
        resumingScanAtSamePosition() {
            return 0 !== this.regexIndex;
        }
        considerAll() {
            this.regexIndex = 0;
        }
        addRule(e, n) {
            this.rules.push([e, n]), 'begin' === n.type && this.count++;
        }
        exec(e) {
            let n = this.getMatcher(this.regexIndex);
            n.lastIndex = this.lastIndex;
            let r = n.exec(e);
            if (this.resumingScanAtSamePosition()) {
                if (r && r.index === this.lastIndex);
                else {
                    let n = this.getMatcher(0);
                    (n.lastIndex = this.lastIndex + 1), (r = n.exec(e));
                }
            }
            return r && ((this.regexIndex += r.position + 1), this.regexIndex === this.count && this.considerAll()), r;
        }
    }
    function o(e) {
        let n = new i();
        return (
            e.contains.forEach((e) =>
                n.addRule(e.begin, {
                    rule: e,
                    type: 'begin'
                })
            ),
            e.terminatorEnd && n.addRule(e.terminatorEnd, { type: 'end' }),
            e.illegal && n.addRule(e.illegal, { type: 'illegal' }),
            n
        );
    }
    function s(r, i) {
        let a = r;
        if (r.isCompiled) return a;
        [Y, z, ed, Q].forEach((e) => e(r, i)), e.compilerExtensions.forEach((e) => e(r, i)), (r.__beforeBegin = null), [W, K, q].forEach((e) => e(r, i)), (r.isCompiled = !0);
        let l = null;
        return (
            'object' == typeof r.keywords && r.keywords.$pattern && ((r.keywords = Object.assign({}, r.keywords)), (l = r.keywords.$pattern), delete r.keywords.$pattern),
            (l = l || /\w+/),
            r.keywords && (r.keywords = $(r.keywords, e.case_insensitive)),
            (a.keywordPatternRe = n(l, !0)),
            i && (!r.begin && (r.begin = /\B|\b/), (a.beginRe = n(a.begin)), !r.end && !r.endsWithParent && (r.end = /\B|\b/), r.end && (a.endRe = n(a.end)), (a.terminatorEnd = p(a.end) || ''), r.endsWithParent && i.terminatorEnd && (a.terminatorEnd += (r.end ? '|' : '') + i.terminatorEnd)),
            r.illegal && (a.illegalRe = n(r.illegal)),
            !r.contains && (r.contains = []),
            (r.contains = [].concat(
                ...r.contains.map(function (e) {
                    return eh('self' === e ? r : e);
                })
            )),
            r.contains.forEach(function (e) {
                s(e, a);
            }),
            r.starts && s(r.starts, i),
            (a.matcher = o(a)),
            a
        );
    }
    if ((!e.compilerExtensions && (e.compilerExtensions = []), e.contains && e.contains.includes('self'))) throw Error('ERR: contains `self` is not supported at the top-level of a language.  See documentation.');
    return (e.classNameAliases = a(e.classNameAliases || {})), s(e);
}
function ep(e) {
    return !!e && (e.endsWithParent || ep(e.starts));
}
function eh(e) {
    return (e.variants &&
        !e.cachedVariants &&
        (e.cachedVariants = e.variants.map(function (n) {
            return a(e, { variants: null }, n);
        })),
    e.cachedVariants)
        ? e.cachedVariants
        : ep(e)
          ? a(e, { starts: e.starts ? a(e.starts) : null })
          : Object.isFrozen(e)
            ? a(e)
            : e;
}
var e_ = '11.11.1';
class em extends Error {
    constructor(e, n) {
        super(e), (this.name = 'HTMLInjectionError'), (this.html = n);
    }
}
let eg = i,
    eE = a,
    ev = Symbol('nomatch'),
    ey = 7,
    eb = function (e) {
        let i = Object.create(null),
            a = Object.create(null),
            o = [],
            s = !0,
            l = "Could not find the language '{}', did you forget to load/include a language module?",
            u = {
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
                __emitter: f
            };
        function d(e) {
            return c.noHighlightRe.test(e);
        }
        function p(e) {
            let n = e.className + ' ';
            n += e.parentNode ? e.parentNode.className : '';
            let r = c.languageDetectRe.exec(n);
            if (r) {
                let n = x(r[1]);
                return !n && (ei(l.replace('{}', r[1])), ei('Falling back to no-highlight mode for this block.', e)), n ? r[1] : 'no-highlight';
            }
            return n.split(/\s+/).find((e) => d(e) || x(e));
        }
        function E(e, n, r) {
            let i = '',
                a = '';
            'object' == typeof n ? ((i = e), (r = n.ignoreIllegals), (a = n.language)) : (ea('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'), ea('10.7.0', 'Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277'), (a = e), (i = n)), void 0 === r && (r = !0);
            let o = {
                code: i,
                language: a
            };
            M('before:highlight', o);
            let s = o.result ? o.result : y(o.language, o.code, r);
            return (s.code = o.code), M('after:highlight', s), s;
        }
        function y(e, n, a, o) {
            let u = Object.create(null);
            function d(e, n) {
                return e.keywords[n];
            }
            function f() {
                if (!L.keywords) {
                    P.addText(M);
                    return;
                }
                let e = 0;
                L.keywordPatternRe.lastIndex = 0;
                let n = L.keywordPatternRe.exec(M),
                    r = '';
                for (; n; ) {
                    r += M.substring(e, n.index);
                    let i = R.case_insensitive ? n[0].toLowerCase() : n[0],
                        a = d(L, i);
                    if (a) {
                        let [e, o] = a;
                        if ((P.addText(r), (r = ''), (u[i] = (u[i] || 0) + 1), u[i] <= ey && (k += o), e.startsWith('_'))) r += n[0];
                        else {
                            let r = R.classNameAliases[e] || e;
                            _(n[0], r);
                        }
                    } else r += n[0];
                    (e = L.keywordPatternRe.lastIndex), (n = L.keywordPatternRe.exec(M));
                }
                (r += M.substring(e)), P.addText(r);
            }
            function p() {
                if ('' === M) return;
                let e = null;
                if ('string' == typeof L.subLanguage) {
                    if (!i[L.subLanguage]) {
                        P.addText(M);
                        return;
                    }
                    (e = y(L.subLanguage, M, !0, w[L.subLanguage])), (w[L.subLanguage] = e._top);
                } else e = T(M, L.subLanguage.length ? L.subLanguage : null);
                L.relevance > 0 && (k += e.relevance), P.__addSublanguage(e._emitter, e.language);
            }
            function h() {
                null != L.subLanguage ? p() : f(), (M = '');
            }
            function _(e, n) {
                '' !== e && (P.startScope(n), P.addText(e), P.endScope());
            }
            function m(e, n) {
                let r = 1,
                    i = n.length - 1;
                for (; r <= i; ) {
                    if (!e._emit[r]) {
                        r++;
                        continue;
                    }
                    let i = R.classNameAliases[e[r]] || e[r],
                        a = n[r];
                    i ? _(a, i) : ((M = a), f(), (M = '')), r++;
                }
            }
            function g(e, n) {
                return e.scope && 'string' == typeof e.scope && P.openNode(R.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (_(M, R.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), (M = '')) : e.beginScope._multi && (m(e.beginScope, n), (M = ''))), (L = Object.create(e, { parent: { value: L } }));
            }
            function E(e, n, i) {
                let a = b(e.endRe, i);
                if (a) {
                    if (e['on:end']) {
                        let i = new r(e);
                        e['on:end'](n, i), i.isMatchIgnored && (a = !1);
                    }
                    if (a) {
                        for (; e.endsParent && e.parent; ) e = e.parent;
                        return e;
                    }
                }
                if (e.endsWithParent) return E(e.parent, n, i);
            }
            function v(e) {
                return 0 === L.matcher.regexIndex ? ((M += e[0]), 1) : ((G = !0), 0);
            }
            function I(e) {
                let n = e[0],
                    i = e.rule,
                    a = new r(i);
                for (let r of [i.__beforeBegin, i['on:begin']]) if (r && (r(e, a), a.isMatchIgnored)) return v(n);
                return i.skip ? (M += n) : (i.excludeBegin && (M += n), h(), !i.returnBegin && !i.excludeBegin && (M = n)), g(i, e), i.returnBegin ? 0 : n.length;
            }
            function S(e) {
                let r = e[0],
                    i = n.substring(e.index),
                    a = E(L, e, i);
                if (!a) return ev;
                let o = L;
                L.endScope && L.endScope._wrap ? (h(), _(r, L.endScope._wrap)) : L.endScope && L.endScope._multi ? (h(), m(L.endScope, e)) : o.skip ? (M += r) : (!(o.returnEnd || o.excludeEnd) && (M += r), h(), o.excludeEnd && (M = r));
                do L.scope && P.closeNode(), !L.skip && !L.subLanguage && (k += L.relevance), (L = L.parent);
                while (L !== a.parent);
                return a.starts && g(a.starts, e), o.returnEnd ? 0 : r.length;
            }
            function A() {
                let e = [];
                for (let n = L; n !== R; n = n.parent) n.scope && e.unshift(n.scope);
                e.forEach((e) => P.openNode(e));
            }
            let C = {};
            function N(r, i) {
                let o = i && i[0];
                if (((M += r), null == o)) return h(), 0;
                if ('begin' === C.type && 'end' === i.type && C.index === i.index && '' === o) {
                    if (((M += n.slice(i.index, i.index + 1)), !s)) {
                        let n = Error(`0 width match regex (${e})`);
                        throw ((n.languageName = e), (n.badRule = C.rule), n);
                    }
                    return 1;
                }
                if (((C = i), 'begin' === i.type)) return I(i);
                if ('illegal' !== i.type || a) {
                    if ('end' === i.type) {
                        let e = S(i);
                        if (e !== ev) return e;
                    }
                } else {
                    let e = Error('Illegal lexeme "' + o + '" for mode "' + (L.scope || '<unnamed>') + '"');
                    throw ((e.mode = L), e);
                }
                if ('illegal' === i.type && '' === o) return (M += '\n'), 1;
                if (B > 100000 && B > 3 * i.index) throw Error('potential infinite loop, way more iterations than matches');
                return (M += o), o.length;
            }
            let R = x(e);
            if (!R) throw (er(l.replace('{}', e)), Error('Unknown language: "' + e + '"'));
            let O = ef(R),
                D = '',
                L = o || O,
                w = {},
                P = new c.__emitter(c);
            A();
            let M = '',
                k = 0,
                U = 0,
                B = 0,
                G = !1;
            try {
                if (R.__emitTokens) R.__emitTokens(n, P);
                else {
                    for (L.matcher.considerAll(); ; ) {
                        B++, G ? (G = !1) : L.matcher.considerAll(), (L.matcher.lastIndex = U);
                        let e = L.matcher.exec(n);
                        if (!e) break;
                        let r = n.substring(U, e.index),
                            i = N(r, e);
                        U = e.index + i;
                    }
                    N(n.substring(U));
                }
                return (
                    P.finalize(),
                    (D = P.toHTML()),
                    {
                        language: e,
                        value: D,
                        relevance: k,
                        illegal: !1,
                        _emitter: P,
                        _top: L
                    }
                );
            } catch (r) {
                if (r.message && r.message.includes('Illegal'))
                    return {
                        language: e,
                        value: eg(n),
                        illegal: !0,
                        relevance: 0,
                        _illegalBy: {
                            message: r.message,
                            index: U,
                            context: n.slice(U - 100, U + 100),
                            mode: r.mode,
                            resultSoFar: D
                        },
                        _emitter: P
                    };
                if (s)
                    return {
                        language: e,
                        value: eg(n),
                        illegal: !1,
                        relevance: 0,
                        errorRaised: r,
                        _emitter: P,
                        _top: L
                    };
                else throw r;
            }
        }
        function I(e) {
            let n = {
                value: eg(e),
                illegal: !1,
                relevance: 0,
                _top: u,
                _emitter: new c.__emitter(c)
            };
            return n._emitter.addText(e), n;
        }
        function T(e, n) {
            n = n || c.languages || Object.keys(i);
            let r = I(e),
                a = n
                    .filter(x)
                    .filter(w)
                    .map((n) => y(n, e, !1));
            a.unshift(r);
            let [o, s] = a.sort((e, n) => {
                    if (e.relevance !== n.relevance) return n.relevance - e.relevance;
                    if (e.language && n.language) {
                        if (x(e.language).supersetOf === n.language) return 1;
                        if (x(n.language).supersetOf === e.language) return -1;
                    }
                    return 0;
                }),
                l = o;
            return (l.secondBest = s), l;
        }
        function S(e, n, r) {
            let i = (n && a[n]) || r;
            e.classList.add('hljs'), e.classList.add(`language-${i}`);
        }
        function A(e) {
            let n = null,
                r = p(e);
            if (d(r)) return;
            if (
                (M('before:highlightElement', {
                    el: e,
                    language: r
                }),
                e.dataset.highlighted)
            ) {
                console.log('Element previously highlighted. To highlight again, first unset `dataset.highlighted`.', e);
                return;
            }
            if (e.children.length > 0 && (!c.ignoreUnescapedHTML && (console.warn('One of your code blocks includes unescaped HTML. This is a potentially serious security risk.'), console.warn('https://github.com/highlightjs/highlight.js/wiki/security'), console.warn('The element with unescaped HTML:'), console.warn(e)), c.throwUnescapedHTML)) throw new em('One of your code blocks includes unescaped HTML.', e.innerHTML);
            let i = (n = e).textContent,
                a = r
                    ? E(i, {
                          language: r,
                          ignoreIllegals: !0
                      })
                    : T(i);
            (e.innerHTML = a.value),
                (e.dataset.highlighted = 'yes'),
                S(e, r, a.language),
                (e.result = {
                    language: a.language,
                    re: a.relevance,
                    relevance: a.relevance
                }),
                a.secondBest &&
                    (e.secondBest = {
                        language: a.secondBest.language,
                        relevance: a.secondBest.relevance
                    }),
                M('after:highlightElement', {
                    el: e,
                    result: a,
                    text: i
                });
        }
        let C = () => {
            O(), ea('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.');
        };
        function N() {
            O(), ea('10.6.0', 'initHighlightingOnLoad() deprecated.  Use highlightAll() now.');
        }
        let R = !1;
        function O() {
            function e() {
                O();
            }
            if ('loading' === document.readyState) {
                !R && window.addEventListener('DOMContentLoaded', e, !1), (R = !0);
                return;
            }
            document.querySelectorAll(c.cssSelector).forEach(A);
        }
        function D(n, r) {
            let a = null;
            try {
                a = r(e);
            } catch (e) {
                if ((er("Language definition for '{}' could not be registered.".replace('{}', n)), s)) er(e);
                else throw e;
                a = u;
            }
            !a.name && (a.name = n), (i[n] = a), (a.rawDefinition = r.bind(null, e)), a.aliases && L(a.aliases, { languageName: n });
        }
        function x(e) {
            return i[(e = (e || '').toLowerCase())] || i[a[e]];
        }
        function L(e, { languageName: n }) {
            'string' == typeof e && (e = [e]),
                e.forEach((e) => {
                    a[e.toLowerCase()] = n;
                });
        }
        function w(e) {
            let n = x(e);
            return n && !n.disableAutodetect;
        }
        function P(e) {
            e['before:highlightBlock'] &&
                !e['before:highlightElement'] &&
                (e['before:highlightElement'] = (n) => {
                    e['before:highlightBlock'](Object.assign({ block: n.el }, n));
                }),
                e['after:highlightBlock'] &&
                    !e['after:highlightElement'] &&
                    (e['after:highlightElement'] = (n) => {
                        e['after:highlightBlock'](Object.assign({ block: n.el }, n));
                    });
        }
        function M(e, n) {
            let r = e;
            o.forEach(function (e) {
                e[r] && e[r](n);
            });
        }
        function k(e) {
            return ea('10.7.0', 'highlightBlock will be removed entirely in v12.0'), ea('10.7.0', 'Please use highlightElement now.'), A(e);
        }
        for (let r in (Object.assign(e, {
            highlight: E,
            highlightAuto: T,
            highlightAll: O,
            highlightElement: A,
            highlightBlock: k,
            configure: function e(e) {
                c = eE(c, e);
            },
            initHighlighting: C,
            initHighlightingOnLoad: N,
            registerLanguage: D,
            unregisterLanguage: function e(e) {
                for (let n of (delete i[e], Object.keys(a))) a[n] === e && delete a[n];
            },
            listLanguages: function e() {
                return Object.keys(i);
            },
            getLanguage: x,
            registerAliases: L,
            autoDetection: w,
            inherit: eE,
            addPlugin: function e(e) {
                P(e), o.push(e);
            },
            removePlugin: function e(e) {
                let n = o.indexOf(e);
                -1 !== n && o.splice(n, 1);
            }
        }),
        (e.debugMode = function () {
            s = !1;
        }),
        (e.safeMode = function () {
            s = !0;
        }),
        (e.versionString = e_),
        (e.regex = {
            concat: g,
            lookahead: h,
            either: v,
            optional: m,
            anyNumberOfTimes: _
        }),
        j))
            'object' == typeof j[r] && n(j[r]);
        return Object.assign(e, j), e;
    },
    eI = eb({});
(eI.newInstance = () => eb({})), (e.exports = eI), (eI.HighlightJS = eI), (eI.default = eI);
