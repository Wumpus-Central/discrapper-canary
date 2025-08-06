let t = ['as', 'in', 'of', 'if', 'for', 'while', 'finally', 'var', 'new', 'function', 'do', 'return', 'void', 'else', 'break', 'catch', 'instanceof', 'with', 'throw', 'case', 'default', 'try', 'switch', 'continue', 'typeof', 'delete', 'let', 'yield', 'const', 'class', 'debugger', 'async', 'await', 'static', 'import', 'from', 'export', 'extends', 'using'],
    n = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
    r = [].concat(['setInterval', 'setTimeout', 'clearInterval', 'clearTimeout', 'require', 'exports', 'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'unescape'], ['Object', 'Function', 'Boolean', 'Symbol', 'Math', 'Date', 'Number', 'BigInt', 'String', 'RegExp', 'Array', 'Float32Array', 'Float64Array', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Int32Array', 'Uint16Array', 'Uint32Array', 'BigInt64Array', 'BigUint64Array', 'Set', 'Map', 'WeakSet', 'WeakMap', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'DataView', 'JSON', 'Promise', 'Generator', 'GeneratorFunction', 'AsyncFunction', 'Reflect', 'Proxy', 'Intl', 'WebAssembly'], ['Error', 'EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError']);
e.exports = function (e) {
    let i = ['npm', 'print'],
        o = ['yes', 'no', 'on', 'off'],
        a = ['then', 'unless', 'until', 'loop', 'by', 'when', 'and', 'or', 'is', 'isnt', 'not'],
        s = ['var', 'const', 'let', 'function', 'static'],
        l = (e) => (t) => !e.includes(t),
        c = {
            keyword: t.concat(a).filter(l(s)),
            literal: n.concat(o),
            built_in: r.concat(i)
        },
        u = '[A-Za-z$_][0-9A-Za-z$_]*',
        d = {
            className: 'subst',
            begin: /#\{/,
            end: /\}/,
            keywords: c
        },
        f = [
            e.BINARY_NUMBER_MODE,
            e.inherit(e.C_NUMBER_MODE, {
                starts: {
                    end: '(\\s*/)?',
                    relevance: 0
                }
            }),
            {
                className: 'string',
                variants: [
                    {
                        begin: /'''/,
                        end: /'''/,
                        contains: [e.BACKSLASH_ESCAPE]
                    },
                    {
                        begin: /'/,
                        end: /'/,
                        contains: [e.BACKSLASH_ESCAPE]
                    },
                    {
                        begin: /"""/,
                        end: /"""/,
                        contains: [e.BACKSLASH_ESCAPE, d]
                    },
                    {
                        begin: /"/,
                        end: /"/,
                        contains: [e.BACKSLASH_ESCAPE, d]
                    }
                ]
            },
            {
                className: 'regexp',
                variants: [
                    {
                        begin: '///',
                        end: '///',
                        contains: [d, e.HASH_COMMENT_MODE]
                    },
                    {
                        begin: '//[gim]{0,3}(?=\\W)',
                        relevance: 0
                    },
                    { begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/ }
                ]
            },
            { begin: '@' + u },
            {
                subLanguage: 'javascript',
                excludeBegin: !0,
                excludeEnd: !0,
                variants: [
                    {
                        begin: '```',
                        end: '```'
                    },
                    {
                        begin: '`',
                        end: '`'
                    }
                ]
            }
        ];
    d.contains = f;
    let _ = e.inherit(e.TITLE_MODE, { begin: u }),
        p = '(\\(.*\\)\\s*)?\\B[-=]>',
        h = {
            className: 'params',
            begin: '\\([^\\(]',
            returnBegin: !0,
            contains: [
                {
                    begin: /\(/,
                    end: /\)/,
                    keywords: c,
                    contains: ['self'].concat(f)
                }
            ]
        },
        m = {
            variants: [
                {
                    match: [/class\s+/, u, /\s+extends\s+/, u]
                },
                {
                    match: [/class\s+/, u]
                }
            ],
            scope: {
                2: 'title.class',
                4: 'title.class.inherited'
            },
            keywords: c
        };
    return {
        name: 'CoffeeScript',
        aliases: ['coffee', 'cson', 'iced'],
        keywords: c,
        illegal: /\/\*/,
        contains: [
            ...f,
            e.COMMENT('###', '###'),
            e.HASH_COMMENT_MODE,
            {
                className: 'function',
                begin: '^\\s*' + u + '\\s*=\\s*' + p,
                end: '[-=]>',
                returnBegin: !0,
                contains: [_, h]
            },
            {
                begin: /[:\(,=]\s*/,
                relevance: 0,
                contains: [
                    {
                        className: 'function',
                        begin: p,
                        end: '[-=]>',
                        returnBegin: !0,
                        contains: [h]
                    }
                ]
            },
            m,
            {
                begin: u + ':',
                end: ':',
                returnBegin: !0,
                returnEnd: !0,
                relevance: 0
            }
        ]
    };
};
