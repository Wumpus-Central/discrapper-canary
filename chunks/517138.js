function n(e) {
    let n = e.regex,
        r = '([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)',
        i = n.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/),
        a = n.concat(i, /(::\w+)*/),
        o = {
            'variable.constant': ['__FILE__', '__LINE__', '__ENCODING__'],
            'variable.language': ['self', 'super'],
            keyword: ['alias', 'and', 'begin', 'BEGIN', 'break', 'case', 'class', 'defined', 'do', 'else', 'elsif', 'end', 'END', 'ensure', 'for', 'if', 'in', 'module', 'next', 'not', 'or', 'redo', 'require', 'rescue', 'retry', 'return', 'then', 'undef', 'unless', 'until', 'when', 'while', 'yield', 'include', 'extend', 'prepend', 'public', 'private', 'protected', 'raise', 'throw'],
            built_in: ['proc', 'lambda', 'attr_accessor', 'attr_reader', 'attr_writer', 'define_method', 'private_constant', 'module_function'],
            literal: ['true', 'false', 'nil']
        },
        s = {
            className: 'doctag',
            begin: '@[A-Za-z]+'
        },
        l = {
            begin: '#<',
            end: '>'
        },
        u = [
            e.COMMENT('#', '$', { contains: [s] }),
            e.COMMENT('^=begin', '^=end', {
                contains: [s],
                relevance: 10
            }),
            e.COMMENT('^__END__', e.MATCH_NOTHING_RE)
        ],
        c = {
            className: 'subst',
            begin: /#\{/,
            end: /\}/,
            keywords: o
        },
        d = {
            className: 'string',
            contains: [e.BACKSLASH_ESCAPE, c],
            variants: [
                {
                    begin: /'/,
                    end: /'/
                },
                {
                    begin: /"/,
                    end: /"/
                },
                {
                    begin: /`/,
                    end: /`/
                },
                {
                    begin: /%[qQwWx]?\(/,
                    end: /\)/
                },
                {
                    begin: /%[qQwWx]?\[/,
                    end: /\]/
                },
                {
                    begin: /%[qQwWx]?\{/,
                    end: /\}/
                },
                {
                    begin: /%[qQwWx]?</,
                    end: />/
                },
                {
                    begin: /%[qQwWx]?\//,
                    end: /\//
                },
                {
                    begin: /%[qQwWx]?%/,
                    end: /%/
                },
                {
                    begin: /%[qQwWx]?-/,
                    end: /-/
                },
                {
                    begin: /%[qQwWx]?\|/,
                    end: /\|/
                },
                { begin: /\B\?(\\\d{1,3})/ },
                { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
                { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
                { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
                { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
                { begin: /\B\?\\?\S/ },
                {
                    begin: n.concat(/<<[-~]?'?/, n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
                    contains: [
                        e.END_SAME_AS_BEGIN({
                            begin: /(\w+)/,
                            end: /(\w+)/,
                            contains: [e.BACKSLASH_ESCAPE, c]
                        })
                    ]
                }
            ]
        },
        f = '[1-9](_?[0-9])*|0',
        p = '[0-9](_?[0-9])*',
        h = {
            className: 'number',
            relevance: 0,
            variants: [{ begin: `\\b(${f})(\\.(${p}))?([eE][+-]?(${p})|r)?i?\\b` }, { begin: '\\b0[dD][0-9](_?[0-9])*r?i?\\b' }, { begin: '\\b0[bB][0-1](_?[0-1])*r?i?\\b' }, { begin: '\\b0[oO][0-7](_?[0-7])*r?i?\\b' }, { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b' }, { begin: '\\b0(_?[0-7])+r?i?\\b' }]
        },
        _ = {
            variants: [
                { match: /\(\)/ },
                {
                    className: 'params',
                    begin: /\(/,
                    end: /(?=\))/,
                    excludeBegin: !0,
                    endsParent: !0,
                    keywords: o
                }
            ]
        },
        m = {
            match: [/(include|extend)\s+/, a],
            scope: { 2: 'title.class' },
            keywords: o
        },
        g = [
            d,
            {
                variants: [
                    {
                        match: [/class\s+/, a, /\s+<\s+/, a]
                    },
                    {
                        match: [/\b(class|module)\s+/, a]
                    }
                ],
                scope: {
                    2: 'title.class',
                    4: 'title.class.inherited'
                },
                keywords: o
            },
            m,
            {
                relevance: 0,
                match: [a, /\.new[. (]/],
                scope: { 1: 'title.class' }
            },
            {
                relevance: 0,
                match: /\b[A-Z][A-Z_0-9]+\b/,
                className: 'variable.constant'
            },
            {
                relevance: 0,
                match: i,
                scope: 'title.class'
            },
            {
                match: [/def/, /\s+/, r],
                scope: {
                    1: 'keyword',
                    3: 'title.function'
                },
                contains: [_]
            },
            { begin: e.IDENT_RE + '::' },
            {
                className: 'symbol',
                begin: e.UNDERSCORE_IDENT_RE + '(!|\\?)?:',
                relevance: 0
            },
            {
                className: 'symbol',
                begin: ':(?!\\s)',
                contains: [d, { begin: r }],
                relevance: 0
            },
            h,
            {
                className: 'variable',
                begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
            },
            {
                className: 'params',
                begin: /\|(?!=)/,
                end: /\|/,
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0,
                keywords: o
            },
            {
                begin: '(' + e.RE_STARTERS_RE + '|unless)\\s*',
                keywords: 'unless',
                contains: [
                    {
                        className: 'regexp',
                        contains: [e.BACKSLASH_ESCAPE, c],
                        illegal: /\n/,
                        variants: [
                            {
                                begin: '/',
                                end: '/[a-z]*'
                            },
                            {
                                begin: /%r\{/,
                                end: /\}[a-z]*/
                            },
                            {
                                begin: '%r\\(',
                                end: '\\)[a-z]*'
                            },
                            {
                                begin: '%r!',
                                end: '![a-z]*'
                            },
                            {
                                begin: '%r\\[',
                                end: '\\][a-z]*'
                            }
                        ]
                    }
                ].concat(l, u),
                relevance: 0
            }
        ].concat(l, u);
    (c.contains = g), (_.contains = g);
    let E = [
        {
            begin: /^\s*=>/,
            starts: {
                end: '$',
                contains: g
            }
        },
        {
            className: 'meta.prompt',
            begin: '^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])',
            starts: {
                end: '$',
                keywords: o,
                contains: g
            }
        }
    ];
    return (
        u.unshift(l),
        {
            name: 'Ruby',
            aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'],
            keywords: o,
            illegal: /\/\*/,
            contains: [e.SHEBANG({ binary: 'ruby' })].concat(E).concat(u).concat(g)
        }
    );
}
e.exports = n;
