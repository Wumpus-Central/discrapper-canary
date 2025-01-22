function n(e) {
    let n = 'true false yes no null',
        r = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
        i = {
            className: 'attr',
            variants: [{ begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ }, { begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/ }, { begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/ }]
        },
        a = {
            className: 'template-variable',
            variants: [
                {
                    begin: /\{\{/,
                    end: /\}\}/
                },
                {
                    begin: /%\{/,
                    end: /\}/
                }
            ]
        },
        o = {
            className: 'string',
            relevance: 0,
            begin: /'/,
            end: /'/,
            contains: [
                {
                    match: /''/,
                    scope: 'char.escape',
                    relevance: 0
                }
            ]
        },
        s = {
            className: 'string',
            relevance: 0,
            variants: [
                {
                    begin: /"/,
                    end: /"/
                },
                { begin: /\S+/ }
            ],
            contains: [e.BACKSLASH_ESCAPE, a]
        },
        l = e.inherit(s, {
            variants: [
                {
                    begin: /'/,
                    end: /'/,
                    contains: [
                        {
                            begin: /''/,
                            relevance: 0
                        }
                    ]
                },
                {
                    begin: /"/,
                    end: /"/
                },
                { begin: /[^\s,{}[\]]+/ }
            ]
        }),
        u = {
            className: 'number',
            begin: '\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b'
        },
        c = {
            end: ',',
            endsWithParent: !0,
            excludeEnd: !0,
            keywords: n,
            relevance: 0
        },
        d = {
            begin: /\{/,
            end: /\}/,
            contains: [c],
            illegal: '\\n',
            relevance: 0
        },
        f = {
            begin: '\\[',
            end: '\\]',
            contains: [c],
            illegal: '\\n',
            relevance: 0
        },
        p = [
            i,
            {
                className: 'meta',
                begin: '^---\\s*$',
                relevance: 10
            },
            {
                className: 'string',
                begin: '[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*'
            },
            {
                begin: '<%[%=-]?',
                end: '[%-]?%>',
                subLanguage: 'ruby',
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0
            },
            {
                className: 'type',
                begin: '!\\w+!' + r
            },
            {
                className: 'type',
                begin: '!<' + r + '>'
            },
            {
                className: 'type',
                begin: '!' + r
            },
            {
                className: 'type',
                begin: '!!' + r
            },
            {
                className: 'meta',
                begin: '&' + e.UNDERSCORE_IDENT_RE + '$'
            },
            {
                className: 'meta',
                begin: '\\*' + e.UNDERSCORE_IDENT_RE + '$'
            },
            {
                className: 'bullet',
                begin: '-(?=[ ]|$)',
                relevance: 0
            },
            e.HASH_COMMENT_MODE,
            {
                beginKeywords: n,
                keywords: { literal: n }
            },
            u,
            {
                className: 'number',
                begin: e.C_NUMBER_RE + '\\b',
                relevance: 0
            },
            d,
            f,
            o,
            s
        ],
        h = [...p];
    return (
        h.pop(),
        h.push(l),
        (c.contains = h),
        {
            name: 'YAML',
            case_insensitive: !0,
            aliases: ['yml'],
            contains: p
        }
    );
}
e.exports = n;
