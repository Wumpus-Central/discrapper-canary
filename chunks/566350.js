function t(e, n = {}) {
    return (n.variants = e), n;
}
function n(e) {
    let n = e.regex,
        i = '[A-Za-z0-9_$]+',
        r = t([
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            e.COMMENT('/\\*\\*', '\\*/', {
                relevance: 0,
                contains: [
                    {
                        begin: /\w+@/,
                        relevance: 0
                    },
                    {
                        className: 'doctag',
                        begin: '@[A-Za-z]+'
                    }
                ]
            })
        ]),
        a = {
            className: 'regexp',
            begin: /~?\/[^\/\n]+\//,
            contains: [e.BACKSLASH_ESCAPE]
        },
        s = t([e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]),
        o = t(
            [
                {
                    begin: /"""/,
                    end: /"""/
                },
                {
                    begin: /'''/,
                    end: /'''/
                },
                {
                    begin: '\\$/',
                    end: '/\\$',
                    relevance: 10
                },
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE
            ],
            { className: 'string' }
        ),
        l = {
            match: [/(class|interface|trait|enum|record|extends|implements)/, /\s+/, e.UNDERSCORE_IDENT_RE],
            scope: {
                1: 'keyword',
                3: 'title.class'
            }
        };
    return {
        name: 'Groovy',
        keywords: {
            'variable.language': 'this super',
            literal: 'true false null',
            type: ['byte', 'short', 'char', 'int', 'long', 'boolean', 'float', 'double', 'void'],
            keyword: ['def', 'as', 'in', 'assert', 'trait', 'abstract', 'static', 'volatile', 'transient', 'public', 'private', 'protected', 'synchronized', 'final', 'class', 'interface', 'enum', 'if', 'else', 'for', 'while', 'switch', 'case', 'break', 'default', 'continue', 'throw', 'throws', 'try', 'catch', 'finally', 'implements', 'extends', 'new', 'import', 'package', 'return', 'instanceof', 'var']
        },
        contains: [
            e.SHEBANG({
                binary: 'groovy',
                relevance: 10
            }),
            r,
            o,
            a,
            s,
            l,
            {
                className: 'meta',
                begin: '@[A-Za-z]+',
                relevance: 0
            },
            {
                className: 'attr',
                begin: i + '[ \t]*:',
                relevance: 0
            },
            {
                begin: /\?/,
                end: /:/,
                relevance: 0,
                contains: [r, o, a, s, 'self']
            },
            {
                className: 'symbol',
                begin: '^[ \t]*' + n.lookahead(i + ':'),
                excludeBegin: !0,
                end: i + ':',
                relevance: 0
            }
        ],
        illegal: /#|<\//
    };
}
e.exports = n;
