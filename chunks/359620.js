let n = '[A-Za-z$_][0-9A-Za-z$_]*',
    r = ['as', 'in', 'of', 'if', 'for', 'while', 'finally', 'var', 'new', 'function', 'do', 'return', 'void', 'else', 'break', 'catch', 'instanceof', 'with', 'throw', 'case', 'default', 'try', 'switch', 'continue', 'typeof', 'delete', 'let', 'yield', 'const', 'class', 'debugger', 'async', 'await', 'static', 'import', 'from', 'export', 'extends', 'using'],
    i = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
    a = ['Object', 'Function', 'Boolean', 'Symbol', 'Math', 'Date', 'Number', 'BigInt', 'String', 'RegExp', 'Array', 'Float32Array', 'Float64Array', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Int32Array', 'Uint16Array', 'Uint32Array', 'BigInt64Array', 'BigUint64Array', 'Set', 'Map', 'WeakSet', 'WeakMap', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'DataView', 'JSON', 'Promise', 'Generator', 'GeneratorFunction', 'AsyncFunction', 'Reflect', 'Proxy', 'Intl', 'WebAssembly'],
    s = ['Error', 'EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError'],
    o = ['setInterval', 'setTimeout', 'clearInterval', 'clearTimeout', 'require', 'exports', 'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'unescape'],
    l = ['arguments', 'this', 'super', 'console', 'window', 'document', 'localStorage', 'sessionStorage', 'module', 'global'],
    u = [].concat(o, a, s);
function c(e) {
    let c = e.regex,
        d = (e, { after: n }) => {
            let r = '</' + e[0].slice(1);
            return -1 !== e.input.indexOf(r, n);
        },
        f = n,
        _ = '<>',
        h = '</>',
        p = /<[A-Za-z0-9\\._:-]+\s*\/>/,
        m = /<[A-Za-z0-9\\._:-]+/,
        g = /\/[A-Za-z0-9\\._:-]+>|\/>/,
        E = (e, n) => {
            let r;
            let i = e[0].length + e.index,
                a = e.input[i];
            if ('<' === a || ',' === a) {
                n.ignoreMatch();
                return;
            }
            '>' === a && !d(e, { after: i }) && n.ignoreMatch();
            let s = e.input.substring(i);
            if ((r = s.match(/^\s*=/)) || ((r = s.match(/^\s+extends\s+/)) && 0 === r.index)) {
                n.ignoreMatch();
                return;
            }
        },
        v = {
            $pattern: n,
            keyword: r,
            literal: i,
            built_in: u,
            'variable.language': l
        },
        I = '[0-9](_?[0-9])*',
        T = `\\.(${I})`,
        b = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
        y = {
            className: 'number',
            variants: [{ begin: `(\\b(${b})((${T})|\\.)?|(${T}))[eE][+-]?(${I})\\b` }, { begin: `\\b(${b})\\b((${T})\\b|\\.)?|(${T})\\b` }, { begin: '\\b(0|[1-9](_?[0-9])*)n\\b' }, { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' }, { begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' }, { begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' }, { begin: '\\b0[0-7]+n?\\b' }],
            relevance: 0
        },
        S = {
            className: 'subst',
            begin: '\\$\\{',
            end: '\\}',
            keywords: v,
            contains: []
        },
        A = {
            begin: '.?html`',
            end: '',
            starts: {
                end: '`',
                returnEnd: !1,
                contains: [e.BACKSLASH_ESCAPE, S],
                subLanguage: 'xml'
            }
        },
        N = {
            begin: '.?css`',
            end: '',
            starts: {
                end: '`',
                returnEnd: !1,
                contains: [e.BACKSLASH_ESCAPE, S],
                subLanguage: 'css'
            }
        },
        C = {
            begin: '.?gql`',
            end: '',
            starts: {
                end: '`',
                returnEnd: !1,
                contains: [e.BACKSLASH_ESCAPE, S],
                subLanguage: 'graphql'
            }
        },
        R = {
            className: 'string',
            begin: '`',
            end: '`',
            contains: [e.BACKSLASH_ESCAPE, S]
        },
        O = {
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
                                    begin: f + '(?=\\s*(-)|$)',
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
        D = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, A, N, C, R, { match: /\$\d+/ }, y];
    S.contains = D.concat({
        begin: /\{/,
        end: /\}/,
        keywords: v,
        contains: ['self'].concat(D)
    });
    let L = [].concat(O, S.contains),
        x = L.concat([
            {
                begin: /(\s*)\(/,
                end: /\)/,
                keywords: v,
                contains: ['self'].concat(L)
            }
        ]),
        w = {
            className: 'params',
            begin: /(\s*)\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: v,
            contains: x
        },
        P = {
            variants: [
                {
                    match: [/class/, /\s+/, f, /\s+/, /extends/, /\s+/, c.concat(f, '(', c.concat(/\./, f), ')*')],
                    scope: {
                        1: 'keyword',
                        3: 'title.class',
                        5: 'keyword',
                        7: 'title.class.inherited'
                    }
                },
                {
                    match: [/class/, /\s+/, f],
                    scope: {
                        1: 'keyword',
                        3: 'title.class'
                    }
                }
            ]
        },
        M = {
            relevance: 0,
            match: c.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
            className: 'title.class',
            keywords: {
                _: [...a, ...s]
            }
        },
        k = {
            label: 'use_strict',
            className: 'meta',
            relevance: 10,
            begin: /^\s*['"]use (strict|asm)['"]/
        },
        U = {
            variants: [
                {
                    match: [/function/, /\s+/, f, /(?=\s*\()/]
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
            contains: [w],
            illegal: /%/
        },
        B = {
            relevance: 0,
            match: /\b[A-Z][A-Z_0-9]+\b/,
            className: 'variable.constant'
        };
    function G(e) {
        return c.concat('(?!', e.join('|'), ')');
    }
    let F = {
            match: c.concat(/\b/, G([...o, 'super', 'import'].map((e) => `${e}\\s*\\(`)), f, c.lookahead(/\s*\(/)),
            className: 'title.function',
            relevance: 0
        },
        Z = {
            begin: c.concat(/\./, c.lookahead(c.concat(f, /(?![0-9A-Za-z$_(])/))),
            end: f,
            excludeBegin: !0,
            keywords: 'prototype',
            className: 'property',
            relevance: 0
        },
        V = {
            match: [/get|set/, /\s+/, f, /(?=\()/],
            className: {
                1: 'keyword',
                3: 'title.function'
            },
            contains: [{ begin: /\(\)/ }, w]
        },
        j = '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' + e.UNDERSCORE_IDENT_RE + ')\\s*=>',
        H = {
            match: [/const|var|let/, /\s+/, f, /\s*/, /=\s*/, /(async\s*)?/, c.lookahead(j)],
            keywords: 'async',
            className: {
                1: 'keyword',
                3: 'title.function'
            },
            contains: [w]
        };
    return {
        name: 'JavaScript',
        aliases: ['js', 'jsx', 'mjs', 'cjs'],
        keywords: v,
        exports: {
            PARAMS_CONTAINS: x,
            CLASS_REFERENCE: M
        },
        illegal: /#(?![$_A-z])/,
        contains: [
            e.SHEBANG({
                label: 'shebang',
                binary: 'node',
                relevance: 5
            }),
            k,
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            A,
            N,
            C,
            R,
            O,
            { match: /\$\d+/ },
            y,
            M,
            {
                scope: 'attr',
                match: f + c.lookahead(':'),
                relevance: 0
            },
            H,
            {
                begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
                keywords: 'return throw case',
                relevance: 0,
                contains: [
                    O,
                    e.REGEXP_MODE,
                    {
                        className: 'function',
                        begin: j,
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
                                        keywords: v,
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
                                begin: _,
                                end: h
                            },
                            { match: p },
                            {
                                begin: m,
                                'on:begin': E,
                                end: g
                            }
                        ],
                        subLanguage: 'xml',
                        contains: [
                            {
                                begin: m,
                                end: g,
                                skip: !0,
                                contains: ['self']
                            }
                        ]
                    }
                ]
            },
            U,
            { beginKeywords: 'while if switch catch for' },
            {
                begin: '\\b(?!function)' + e.UNDERSCORE_IDENT_RE + '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
                returnBegin: !0,
                label: 'func.def',
                contains: [
                    w,
                    e.inherit(e.TITLE_MODE, {
                        begin: f,
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
                match: '\\$' + f,
                relevance: 0
            },
            {
                match: [/\bconstructor(?=\s*\()/],
                className: { 1: 'title.function' },
                contains: [w]
            },
            F,
            B,
            P,
            V,
            { match: /\$[(.]/ }
        ]
    };
}
e.exports = c;
