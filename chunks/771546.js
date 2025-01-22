function n(e) {
    let n = '(_?[ui](8|16|32|64|128))?',
        r = '(_?f(32|64))?',
        i = '[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?',
        a = '[A-Za-z_]\\w*(::\\w+)*(\\?|!)?',
        o = {
            $pattern: '[a-zA-Z_]\\w*[!?=]?',
            keyword: 'abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__',
            literal: 'false nil true'
        },
        s = {
            className: 'subst',
            begin: /#\{/,
            end: /\}/,
            keywords: o
        },
        l = {
            className: 'variable',
            begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
        },
        u = {
            className: 'template-variable',
            variants: [
                {
                    begin: '\\{\\{',
                    end: '\\}\\}'
                },
                {
                    begin: '\\{%',
                    end: '%\\}'
                }
            ],
            keywords: o
        };
    function c(e, n) {
        let r = [
            {
                begin: e,
                end: n
            }
        ];
        return (r[0].contains = r), r;
    }
    let d = {
            className: 'string',
            contains: [e.BACKSLASH_ESCAPE, s],
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
                    begin: '%[Qwi]?\\(',
                    end: '\\)',
                    contains: c('\\(', '\\)')
                },
                {
                    begin: '%[Qwi]?\\[',
                    end: '\\]',
                    contains: c('\\[', '\\]')
                },
                {
                    begin: '%[Qwi]?\\{',
                    end: /\}/,
                    contains: c(/\{/, /\}/)
                },
                {
                    begin: '%[Qwi]?<',
                    end: '>',
                    contains: c('<', '>')
                },
                {
                    begin: '%[Qwi]?\\|',
                    end: '\\|'
                },
                {
                    begin: /<<-\w+$/,
                    end: /^\s*\w+$/
                }
            ],
            relevance: 0
        },
        f = {
            className: 'string',
            variants: [
                {
                    begin: '%q\\(',
                    end: '\\)',
                    contains: c('\\(', '\\)')
                },
                {
                    begin: '%q\\[',
                    end: '\\]',
                    contains: c('\\[', '\\]')
                },
                {
                    begin: '%q\\{',
                    end: /\}/,
                    contains: c(/\{/, /\}/)
                },
                {
                    begin: '%q<',
                    end: '>',
                    contains: c('<', '>')
                },
                {
                    begin: '%q\\|',
                    end: '\\|'
                },
                {
                    begin: /<<-'\w+'$/,
                    end: /^\s*\w+$/
                }
            ],
            relevance: 0
        },
        p = {
            begin: '(?!%\\})(' + e.RE_STARTERS_RE + '|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*',
            keywords: 'case if select unless until when while',
            contains: [
                {
                    className: 'regexp',
                    contains: [e.BACKSLASH_ESCAPE, s],
                    variants: [
                        {
                            begin: '//[a-z]*',
                            relevance: 0
                        },
                        {
                            begin: '/(?!\\/)',
                            end: '/[a-z]*'
                        }
                    ]
                }
            ],
            relevance: 0
        },
        h = {
            className: 'regexp',
            contains: [e.BACKSLASH_ESCAPE, s],
            variants: [
                {
                    begin: '%r\\(',
                    end: '\\)',
                    contains: c('\\(', '\\)')
                },
                {
                    begin: '%r\\[',
                    end: '\\]',
                    contains: c('\\[', '\\]')
                },
                {
                    begin: '%r\\{',
                    end: /\}/,
                    contains: c(/\{/, /\}/)
                },
                {
                    begin: '%r<',
                    end: '>',
                    contains: c('<', '>')
                },
                {
                    begin: '%r\\|',
                    end: '\\|'
                }
            ],
            relevance: 0
        },
        _ = [
            u,
            d,
            f,
            h,
            p,
            {
                className: 'meta',
                begin: '@\\[',
                end: '\\]',
                contains: [e.inherit(e.QUOTE_STRING_MODE, { className: 'string' })]
            },
            l,
            e.HASH_COMMENT_MODE,
            {
                className: 'class',
                beginKeywords: 'class module struct',
                end: '$|;',
                illegal: /=/,
                contains: [e.HASH_COMMENT_MODE, e.inherit(e.TITLE_MODE, { begin: a }), { begin: '<' }]
            },
            {
                className: 'class',
                beginKeywords: 'lib enum union',
                end: '$|;',
                illegal: /=/,
                contains: [e.HASH_COMMENT_MODE, e.inherit(e.TITLE_MODE, { begin: a })]
            },
            {
                beginKeywords: 'annotation',
                end: '$|;',
                illegal: /=/,
                contains: [e.HASH_COMMENT_MODE, e.inherit(e.TITLE_MODE, { begin: a })],
                relevance: 2
            },
            {
                className: 'function',
                beginKeywords: 'def',
                end: /\B\b/,
                contains: [
                    e.inherit(e.TITLE_MODE, {
                        begin: i,
                        endsParent: !0
                    })
                ]
            },
            {
                className: 'function',
                beginKeywords: 'fun macro',
                end: /\B\b/,
                contains: [
                    e.inherit(e.TITLE_MODE, {
                        begin: i,
                        endsParent: !0
                    })
                ],
                relevance: 2
            },
            {
                className: 'symbol',
                begin: e.UNDERSCORE_IDENT_RE + '(!|\\?)?:',
                relevance: 0
            },
            {
                className: 'symbol',
                begin: ':',
                contains: [d, { begin: i }],
                relevance: 0
            },
            {
                className: 'number',
                variants: [{ begin: '\\b0b([01_]+)' + n }, { begin: '\\b0o([0-7_]+)' + n }, { begin: '\\b0x([A-Fa-f0-9_]+)' + n }, { begin: '\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_?[-+]?[0-9_]*)?' + r + '(?!_)' }, { begin: '\\b([1-9][0-9_]*|0)' + n }],
                relevance: 0
            }
        ];
    return (
        (s.contains = _),
        (u.contains = _.slice(1)),
        {
            name: 'Crystal',
            aliases: ['cr'],
            keywords: o,
            contains: _
        }
    );
}
e.exports = n;
