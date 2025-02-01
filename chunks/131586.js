function t(e) {
    let t = ['bool', 'byte', 'char', 'decimal', 'delegate', 'double', 'dynamic', 'enum', 'float', 'int', 'long', 'nint', 'nuint', 'object', 'sbyte', 'short', 'string', 'ulong', 'uint', 'ushort'],
        n = ['public', 'private', 'protected', 'static', 'internal', 'protected', 'abstract', 'async', 'extern', 'override', 'unsafe', 'virtual', 'new', 'sealed', 'partial'],
        i = ['default', 'false', 'null', 'true'],
        r = {
            keyword: ['abstract', 'as', 'base', 'break', 'case', 'catch', 'class', 'const', 'continue', 'do', 'else', 'event', 'explicit', 'extern', 'finally', 'fixed', 'for', 'foreach', 'goto', 'if', 'implicit', 'in', 'interface', 'internal', 'is', 'lock', 'namespace', 'new', 'operator', 'out', 'override', 'params', 'private', 'protected', 'public', 'readonly', 'record', 'ref', 'return', 'scoped', 'sealed', 'sizeof', 'stackalloc', 'static', 'struct', 'switch', 'this', 'throw', 'try', 'typeof', 'unchecked', 'unsafe', 'using', 'virtual', 'void', 'volatile', 'while'].concat(['add', 'alias', 'and', 'ascending', 'args', 'async', 'await', 'by', 'descending', 'dynamic', 'equals', 'file', 'from', 'get', 'global', 'group', 'init', 'into', 'join', 'let', 'nameof', 'not', 'notnull', 'on', 'or', 'orderby', 'partial', 'record', 'remove', 'required', 'scoped', 'select', 'set', 'unmanaged', 'value|0', 'var', 'when', 'where', 'with', 'yield']),
            built_in: t,
            literal: i
        },
        a = e.inherit(e.TITLE_MODE, { begin: '[a-zA-Z](\\.?\\w)*' }),
        s = {
            className: 'number',
            variants: [{ begin: "\\b(0b[01']+)" }, { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" }, { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }],
            relevance: 0
        },
        o = {
            className: 'string',
            begin: /"""("*)(?!")(.|\n)*?"""\1/,
            relevance: 1
        },
        l = {
            className: 'string',
            begin: '@"',
            end: '"',
            contains: [{ begin: '""' }]
        },
        u = e.inherit(l, { illegal: /\n/ }),
        c = {
            className: 'subst',
            begin: /\{/,
            end: /\}/,
            keywords: r
        },
        d = e.inherit(c, { illegal: /\n/ }),
        f = {
            className: 'string',
            begin: /\$"/,
            end: '"',
            illegal: /\n/,
            contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, e.BACKSLASH_ESCAPE, d]
        },
        _ = {
            className: 'string',
            begin: /\$@"/,
            end: '"',
            contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, c]
        },
        p = e.inherit(_, {
            illegal: /\n/,
            contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, d]
        });
    (c.contains = [_, f, l, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, s, e.C_BLOCK_COMMENT_MODE]), (d.contains = [p, f, u, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, s, e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })]);
    let h = {
            variants: [o, _, f, l, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
        },
        m = {
            begin: '<',
            end: '>',
            contains: [{ beginKeywords: 'in out' }, a]
        },
        g = e.IDENT_RE + '(<' + e.IDENT_RE + '(\\s*,\\s*' + e.IDENT_RE + ')*>)?(\\[\\])?',
        E = {
            begin: '@' + e.IDENT_RE,
            relevance: 0
        };
    return {
        name: 'C#',
        aliases: ['cs', 'c#'],
        keywords: r,
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
            h,
            s,
            {
                beginKeywords: 'class interface',
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:,]/,
                contains: [{ beginKeywords: 'where class' }, a, m, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            },
            {
                beginKeywords: 'namespace',
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:]/,
                contains: [a, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            },
            {
                beginKeywords: 'record',
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:]/,
                contains: [a, m, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
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
                begin: '(' + g + '\\s+)+' + e.IDENT_RE + '\\s*(<[^=]+>\\s*)?\\(',
                returnBegin: !0,
                end: /\s*[{;=]/,
                excludeEnd: !0,
                keywords: r,
                contains: [
                    {
                        beginKeywords: n.join(' '),
                        relevance: 0
                    },
                    {
                        begin: e.IDENT_RE + '\\s*(<[^=]+>\\s*)?\\(',
                        returnBegin: !0,
                        contains: [e.TITLE_MODE, m],
                        relevance: 0
                    },
                    { match: /\(\)/ },
                    {
                        className: 'params',
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: r,
                        relevance: 0,
                        contains: [h, s, e.C_BLOCK_COMMENT_MODE]
                    },
                    e.C_LINE_COMMENT_MODE,
                    e.C_BLOCK_COMMENT_MODE
                ]
            },
            E
        ]
    };
}
e.exports = t;
