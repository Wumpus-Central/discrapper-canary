function n(e) {
    let n = ['bool', 'byte', 'char', 'decimal', 'delegate', 'double', 'dynamic', 'enum', 'float', 'int', 'long', 'nint', 'nuint', 'object', 'sbyte', 'short', 'string', 'ulong', 'uint', 'ushort'],
        r = ['public', 'private', 'protected', 'static', 'internal', 'protected', 'abstract', 'async', 'extern', 'override', 'unsafe', 'virtual', 'new', 'sealed', 'partial'],
        i = ['default', 'false', 'null', 'true'],
        a = {
            keyword: ['abstract', 'as', 'base', 'break', 'case', 'catch', 'class', 'const', 'continue', 'do', 'else', 'event', 'explicit', 'extern', 'finally', 'fixed', 'for', 'foreach', 'goto', 'if', 'implicit', 'in', 'interface', 'internal', 'is', 'lock', 'namespace', 'new', 'operator', 'out', 'override', 'params', 'private', 'protected', 'public', 'readonly', 'record', 'ref', 'return', 'scoped', 'sealed', 'sizeof', 'stackalloc', 'static', 'struct', 'switch', 'this', 'throw', 'try', 'typeof', 'unchecked', 'unsafe', 'using', 'virtual', 'void', 'volatile', 'while'].concat(['add', 'alias', 'and', 'ascending', 'args', 'async', 'await', 'by', 'descending', 'dynamic', 'equals', 'file', 'from', 'get', 'global', 'group', 'init', 'into', 'join', 'let', 'nameof', 'not', 'notnull', 'on', 'or', 'orderby', 'partial', 'record', 'remove', 'required', 'scoped', 'select', 'set', 'unmanaged', 'value|0', 'var', 'when', 'where', 'with', 'yield']),
            built_in: n,
            literal: i
        },
        s = e.inherit(e.TITLE_MODE, { begin: '[a-zA-Z](\\.?\\w)*' }),
        o = {
            className: 'number',
            variants: [{ begin: "\\b(0b[01']+)" }, { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" }, { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }],
            relevance: 0
        },
        l = {
            className: 'string',
            begin: /"""("*)(?!")(.|\n)*?"""\1/,
            relevance: 1
        },
        u = {
            className: 'string',
            begin: '@"',
            end: '"',
            contains: [{ begin: '""' }]
        },
        c = e.inherit(u, { illegal: /\n/ }),
        d = {
            className: 'subst',
            begin: /\{/,
            end: /\}/,
            keywords: a
        },
        f = e.inherit(d, { illegal: /\n/ }),
        _ = {
            className: 'string',
            begin: /\$"/,
            end: '"',
            illegal: /\n/,
            contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, e.BACKSLASH_ESCAPE, f]
        },
        h = {
            className: 'string',
            begin: /\$@"/,
            end: '"',
            contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, d]
        },
        p = e.inherit(h, {
            illegal: /\n/,
            contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, f]
        });
    (d.contains = [h, _, u, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, o, e.C_BLOCK_COMMENT_MODE]), (f.contains = [p, _, c, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, o, e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })]);
    let m = {
            variants: [l, h, _, u, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
        },
        g = {
            begin: '<',
            end: '>',
            contains: [{ beginKeywords: 'in out' }, s]
        },
        E = e.IDENT_RE + '(<' + e.IDENT_RE + '(\\s*,\\s*' + e.IDENT_RE + ')*>)?(\\[\\])?',
        v = {
            begin: '@' + e.IDENT_RE,
            relevance: 0
        };
    return {
        name: 'C#',
        aliases: ['cs', 'c#'],
        keywords: a,
        illegal: /::/,
        contains: [
            e.COMMENT('///', '$', {
                returnBegin: !0,
                contains: [
                    {
                        className: 'doctag',
                        variants: [
                            {
                                begin: '///',
                                relevance: 0
                            },
                            { begin: '<!--|-->' },
                            {
                                begin: '</?',
                                end: '>'
                            }
                        ]
                    }
                ]
            }),
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            {
                className: 'meta',
                begin: '#',
                end: '$',
                keywords: { keyword: 'if else elif endif define undef warning error line region endregion pragma checksum' }
            },
            m,
            o,
            {
                beginKeywords: 'class interface',
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:,]/,
                contains: [{ beginKeywords: 'where class' }, s, g, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            },
            {
                beginKeywords: 'namespace',
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:]/,
                contains: [s, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            },
            {
                beginKeywords: 'record',
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:]/,
                contains: [s, g, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            },
            {
                className: 'meta',
                begin: '^\\s*\\[(?=[\\w])',
                excludeBegin: !0,
                end: '\\]',
                excludeEnd: !0,
                contains: [
                    {
                        className: 'string',
                        begin: /"/,
                        end: /"/
                    }
                ]
            },
            {
                beginKeywords: 'new return throw await else',
                relevance: 0
            },
            {
                className: 'function',
                begin: '(' + E + '\\s+)+' + e.IDENT_RE + '\\s*(<[^=]+>\\s*)?\\(',
                returnBegin: !0,
                end: /\s*[{;=]/,
                excludeEnd: !0,
                keywords: a,
                contains: [
                    {
                        beginKeywords: r.join(' '),
                        relevance: 0
                    },
                    {
                        begin: e.IDENT_RE + '\\s*(<[^=]+>\\s*)?\\(',
                        returnBegin: !0,
                        contains: [e.TITLE_MODE, g],
                        relevance: 0
                    },
                    { match: /\(\)/ },
                    {
                        className: 'params',
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: a,
                        relevance: 0,
                        contains: [m, o, e.C_BLOCK_COMMENT_MODE]
                    },
                    e.C_LINE_COMMENT_MODE,
                    e.C_BLOCK_COMMENT_MODE
                ]
            },
            v
        ]
    };
}
e.exports = n;
