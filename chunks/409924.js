let t = '[A-Za-z$_][0-9A-Za-z$_]*',
    n = ['as', 'in', 'of', 'if', 'for', 'while', 'finally', 'var', 'new', 'function', 'do', 'return', 'void', 'else', 'break', 'catch', 'instanceof', 'with', 'throw', 'case', 'default', 'try', 'switch', 'continue', 'typeof', 'delete', 'let', 'yield', 'const', 'class', 'debugger', 'async', 'await', 'static', 'import', 'from', 'export', 'extends', 'using'],
    i = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
    r = ['Object', 'Function', 'Boolean', 'Symbol', 'Math', 'Date', 'Number', 'BigInt', 'String', 'RegExp', 'Array', 'Float32Array', 'Float64Array', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Int32Array', 'Uint16Array', 'Uint32Array', 'BigInt64Array', 'BigUint64Array', 'Set', 'Map', 'WeakSet', 'WeakMap', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'DataView', 'JSON', 'Promise', 'Generator', 'GeneratorFunction', 'AsyncFunction', 'Reflect', 'Proxy', 'Intl', 'WebAssembly'],
    a = ['Error', 'EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError'],
    s = ['setInterval', 'setTimeout', 'clearInterval', 'clearTimeout', 'require', 'exports', 'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'unescape'],
    o = ['arguments', 'this', 'super', 'console', 'window', 'document', 'localStorage', 'sessionStorage', 'module', 'global'],
    l = [].concat(s, r, a);
function u(e) {
    let u = e.regex,
        c = (e, { after: t }) => {
            let n = '</' + e[0].slice(1);
            return -1 !== e.input.indexOf(n, t);
        },
        d = t,
        f = '<>',
        _ = '</>',
        p = /<[A-Za-z0-9\\._:-]+\s*\/>/,
        h = /<[A-Za-z0-9\\._:-]+/,
        m = /\/[A-Za-z0-9\\._:-]+>|\/>/,
        g = (e, t) => {
            let n;
            let i = e[0].length + e.index,
                r = e.input[i];
            if ('<' === r || ',' === r) {
                t.ignoreMatch();
                return;
            }
            '>' !== r || c(e, { after: i }) || t.ignoreMatch();
            let a = e.input.substring(i);
            if ((n = a.match(/^\s*=/)) || ((n = a.match(/^\s+extends\s+/)) && 0 === n.index)) {
                t.ignoreMatch();
                return;
            }
        },
        E = {
            $pattern: t,
            keyword: n,
            literal: i,
            built_in: l,
            'variable.language': o
        },
        v = '[0-9](_?[0-9])*',
        y = `\\.(${v})`,
        I = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
        b = {
            className: 'number',
            variants: [{ begin: `(\\b(${I})((${y})|\\.)?|(${y}))[eE][+-]?(${v})\\b` }, { begin: `\\b(${I})\\b((${y})\\b|\\.)?|(${y})\\b` }, { begin: '\\b(0|[1-9](_?[0-9])*)n\\b' }, { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' }, { begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' }, { begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' }, { begin: '\\b0[0-7]+n?\\b' }],
            relevance: 0
        },
        T = {
            className: 'subst',
            begin: '\\$\\{',
            end: '\\}',
            keywords: E,
            contains: []
        },
        S = {
            begin: '.?html`',
            end: '',
            starts: {
                end: '`',
                returnEnd: !1,
                contains: [e.BACKSLASH_ESCAPE, T],
                subLanguage: 'xml'
            }
        },
        A = {
            begin: '.?css`',
            end: '',
            starts: {
                end: '`',
                returnEnd: !1,
                contains: [e.BACKSLASH_ESCAPE, T],
                subLanguage: 'css'
            }
        },
        N = {
            begin: '.?gql`',
            end: '',
            starts: {
                end: '`',
                returnEnd: !1,
                contains: [e.BACKSLASH_ESCAPE, T],
                subLanguage: 'graphql'
            }
        },
        C = {
            className: 'string',
            begin: '`',
            end: '`',
            contains: [e.BACKSLASH_ESCAPE, T]
        },
        R = {
            className: 'comment',
            variants: [
                e.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
                    relevance: 0,
                    contains: [
                        {
                            begin: '(?=@[A-Za-z]+)',
                            relevance: 0,
                            contains: [
                                {
                                    className: 'doctag',
                                    begin: '@[A-Za-z]+'
                                },
                                {
                                    className: 'type',
                                    begin: '\\{',
                                    end: '\\}',
                                    excludeEnd: !0,
                                    excludeBegin: !0,
                                    relevance: 0
                                },
                                {
                                    className: 'variable',
                                    begin: d + '(?=\\s*(-)|$)',
                                    endsParent: !0,
                                    relevance: 0
                                },
                                {
                                    begin: /(?=[^\n])\s/,
                                    relevance: 0
                                }
                            ]
                        }
                    ]
                }),
                e.C_BLOCK_COMMENT_MODE,
                e.C_LINE_COMMENT_MODE
            ]
        },
        O = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, S, A, N, C, { match: /\$\d+/ }, b];
    T.contains = O.concat({
        begin: /\{/,
        end: /\}/,
        keywords: E,
        contains: ['self'].concat(O)
    });
    let D = [].concat(R, T.contains),
        x = D.concat([
            {
                begin: /(\s*)\(/,
                end: /\)/,
                keywords: E,
                contains: ['self'].concat(D)
            }
        ]),
        L = {
            className: 'params',
            begin: /(\s*)\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: E,
            contains: x
        },
        P = {
            variants: [
                {
                    match: [/class/, /\s+/, d, /\s+/, /extends/, /\s+/, u.concat(d, '(', u.concat(/\./, d), ')*')],
                    scope: {
                        1: 'keyword',
                        3: 'title.class',
                        5: 'keyword',
                        7: 'title.class.inherited'
                    }
                },
                {
                    match: [/class/, /\s+/, d],
                    scope: {
                        1: 'keyword',
                        3: 'title.class'
                    }
                }
            ]
        },
        w = {
            relevance: 0,
            match: u.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
            className: 'title.class',
            keywords: {
                _: [...r, ...a]
            }
        },
        M = {
            label: 'use_strict',
            className: 'meta',
            relevance: 10,
            begin: /^\s*['"]use (strict|asm)['"]/
        },
        k = {
            variants: [
                {
                    match: [/function/, /\s+/, d, /(?=\s*\()/]
                },
                {
                    match: [/function/, /\s*(?=\()/]
                }
            ],
            className: {
                1: 'keyword',
                3: 'title.function'
            },
            label: 'func.def',
            contains: [L],
            illegal: /%/
        },
        U = {
            relevance: 0,
            match: /\b[A-Z][A-Z_0-9]+\b/,
            className: 'variable.constant'
        };
    function G(e) {
        return u.concat('(?!', e.join('|'), ')');
    }
    let B = {
            match: u.concat(/\b/, G([...s, 'super', 'import'].map((e) => `${e}\\s*\\(`)), d, u.lookahead(/\s*\(/)),
            className: 'title.function',
            relevance: 0
        },
        Z = {
            begin: u.concat(/\./, u.lookahead(u.concat(d, /(?![0-9A-Za-z$_(])/))),
            end: d,
            excludeBegin: !0,
            keywords: 'prototype',
            className: 'property',
            relevance: 0
        },
        F = {
            match: [/get|set/, /\s+/, d, /(?=\()/],
            className: {
                1: 'keyword',
                3: 'title.function'
            },
            contains: [{ begin: /\(\)/ }, L]
        },
        V = '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' + e.UNDERSCORE_IDENT_RE + ')\\s*=>',
        j = {
            match: [/const|var|let/, /\s+/, d, /\s*/, /=\s*/, /(async\s*)?/, u.lookahead(V)],
            keywords: 'async',
            className: {
                1: 'keyword',
                3: 'title.function'
            },
            contains: [L]
        };
    return {
        name: 'JavaScript',
        aliases: ['js', 'jsx', 'mjs', 'cjs'],
        keywords: E,
        exports: {
            PARAMS_CONTAINS: x,
            CLASS_REFERENCE: w
        },
        illegal: /#(?![$_A-z])/,
        contains: [
            e.SHEBANG({
                label: 'shebang',
                binary: 'node',
                relevance: 5
            }),
            M,
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            S,
            A,
            N,
            C,
            R,
            { match: /\$\d+/ },
            b,
            w,
            {
                scope: 'attr',
                match: d + u.lookahead(':'),
                relevance: 0
            },
            j,
            {
                begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
                keywords: 'return throw case',
                relevance: 0,
                contains: [
                    R,
                    e.REGEXP_MODE,
                    {
                        className: 'function',
                        begin: V,
                        returnBegin: !0,
                        end: '\\s*=>',
                        contains: [
                            {
                                className: 'params',
                                variants: [
                                    {
                                        begin: e.UNDERSCORE_IDENT_RE,
                                        relevance: 0
                                    },
                                    {
                                        className: null,
                                        begin: /\(\s*\)/,
                                        skip: !0
                                    },
                                    {
                                        begin: /(\s*)\(/,
                                        end: /\)/,
                                        excludeBegin: !0,
                                        excludeEnd: !0,
                                        keywords: E,
                                        contains: x
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        begin: /,/,
                        relevance: 0
                    },
                    {
                        match: /\s+/,
                        relevance: 0
                    },
                    {
                        variants: [
                            {
                                begin: f,
                                end: _
                            },
                            { match: p },
                            {
                                begin: h,
                                'on:begin': g,
                                end: m
                            }
                        ],
                        subLanguage: 'xml',
                        contains: [
                            {
                                begin: h,
                                end: m,
                                skip: !0,
                                contains: ['self']
                            }
                        ]
                    }
                ]
            },
            k,
            { beginKeywords: 'while if switch catch for' },
            {
                begin: '\\b(?!function)' + e.UNDERSCORE_IDENT_RE + '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
                returnBegin: !0,
                label: 'func.def',
                contains: [
                    L,
                    e.inherit(e.TITLE_MODE, {
                        begin: d,
                        className: 'title.function'
                    })
                ]
            },
            {
                match: /\.\.\./,
                relevance: 0
            },
            Z,
            {
                match: '\\$' + d,
                relevance: 0
            },
            {
                match: [/\bconstructor(?=\s*\()/],
                className: { 1: 'title.function' },
                contains: [L]
            },
            B,
            U,
            P,
            F,
            { match: /\$[(.]/ }
        ]
    };
}
function c(e) {
    let r = e.regex,
        a = u(e),
        s = t,
        c = ['any', 'void', 'number', 'boolean', 'string', 'object', 'never', 'symbol', 'bigint', 'unknown'],
        d = {
            begin: [/namespace/, /\s+/, e.IDENT_RE],
            beginScope: {
                1: 'keyword',
                3: 'title.class'
            }
        },
        f = {
            beginKeywords: 'interface',
            end: /\{/,
            excludeEnd: !0,
            keywords: {
                keyword: 'interface extends',
                built_in: c
            },
            contains: [a.exports.CLASS_REFERENCE]
        },
        _ = {
            className: 'meta',
            relevance: 10
        },
        p = ['type', 'interface', 'public', 'private', 'protected', 'implements', 'declare', 'abstract', 'readonly', 'enum', 'override', 'satisfies'],
        h = {
            $pattern: t,
            keyword: n.concat(p),
            literal: i,
            built_in: l.concat(c),
            'variable.language': o
        },
        m = {
            className: 'meta',
            begin: '@' + s
        },
        g = (e, t, n) => {
            let i = e.contains.findIndex((e) => e.label === t);
            if (-1 === i) throw Error('can not find mode to replace');
            e.contains.splice(i, 1, n);
        };
    Object.assign(a.keywords, h), a.exports.PARAMS_CONTAINS.push(m);
    let E = a.contains.find((e) => 'attr' === e.scope),
        v = Object.assign({}, E, { match: r.concat(s, r.lookahead(/\s*\?:/)) });
    return (
        a.exports.PARAMS_CONTAINS.push([a.exports.CLASS_REFERENCE, E, v]),
        (a.contains = a.contains.concat([m, d, f, v])),
        g(a, 'shebang', e.SHEBANG()),
        g(a, 'use_strict', _),
        (a.contains.find((e) => 'func.def' === e.label).relevance = 0),
        Object.assign(a, {
            name: 'TypeScript',
            aliases: ['ts', 'tsx', 'mts', 'cts']
        }),
        a
    );
}
e.exports = c;
