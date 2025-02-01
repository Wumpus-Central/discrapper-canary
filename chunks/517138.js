function t(e) {
    let t = e.regex,
        n = '([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)',
        i = t.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/),
        r = t.concat(i, /(::\w+)*/),
        a = {
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
        o = {
            begin: '#<',
            end: '>'
        },
        l = [
            e.COMMENT('#', '$', { contains: [s] }),
            e.COMMENT('^=begin', '^=end', {
                contains: [s],
                relevance: 10
            }),
            e.COMMENT('^__END__', e.MATCH_NOTHING_RE)
        ],
        u = {
            className: 'subst',
            begin: /#\{/,
            end: /\}/,
            keywords: a
        },
        c = {
            className: 'string',
            contains: [e.BACKSLASH_ESCAPE, u],
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
                    begin: t.concat(/<<[-~]?'?/, t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
                    contains: [
                        e.END_SAME_AS_BEGIN({
                            begin: /(\w+)/,
                            end: /(\w+)/,
                            contains: [e.BACKSLASH_ESCAPE, u]
                        })
                    ]
                }
            ]
        },
        d = '[1-9](_?[0-9])*|0',
        f = '[0-9](_?[0-9])*',
        _ = {
            className: 'number',
            relevance: 0,
            variants: [{ begin: `\\b(${d})(\\.(${f}))?([eE][+-]?(${f})|r)?i?\\b` }, { begin: '\\b0[dD][0-9](_?[0-9])*r?i?\\b' }, { begin: '\\b0[bB][0-1](_?[0-1])*r?i?\\b' }, { begin: '\\b0[oO][0-7](_?[0-7])*r?i?\\b' }, { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b' }, { begin: '\\b0(_?[0-7])+r?i?\\b' }]
        },
        p = {
            variants: [
                { match: /\(\)/ },
                {
                    className: 'params',
                    begin: /\(/,
                    end: /(?=\))/,
                    excludeBegin: !0,
                    endsParent: !0,
                    keywords: a
                }
            ]
        },
        h = {
            match: [/(include|extend)\s+/, r],
            scope: { 2: 'title.class' },
            keywords: a
        },
        m = [
            c,
            {
                variants: [
                    {
                        match: [/class\s+/, r, /\s+<\s+/, r]
                    },
                    {
                        match: [/\b(class|module)\s+/, r]
                    }
                ],
                scope: {
                    2: 'title.class',
                    4: 'title.class.inherited'
                },
                keywords: a
            },
            h,
            {
                relevance: 0,
                match: [r, /\.new[. (]/],
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
                match: [/def/, /\s+/, n],
                scope: {
                    1: 'keyword',
                    3: 'title.function'
                },
                contains: [p]
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
                contains: [c, { begin: n }],
                relevance: 0
            },
            _,
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
                keywords: a
            },
            {
                begin: '(' + e.RE_STARTERS_RE + '|unless)\\s*',
                keywords: 'unless',
                contains: [
                    {
                        className: 'regexp',
                        contains: [e.BACKSLASH_ESCAPE, u],
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
                ].concat(o, l),
                relevance: 0
            }
        ].concat(o, l);
    (u.contains = m), (p.contains = m);
    let g = [
        {
            begin: /^\s*=>/,
            starts: {
                end: '$',
                contains: m
            }
        },
        {
            className: 'meta.prompt',
            begin: '^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])',
            starts: {
                end: '$',
                keywords: a,
                contains: m
            }
        }
    ];
    return (
        l.unshift(o),
        {
            name: 'Ruby',
            aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'],
            keywords: a,
            illegal: /\/\*/,
            contains: [e.SHEBANG({ binary: 'ruby' })].concat(g).concat(l).concat(m)
        }
    );
}
e.exports = t;
