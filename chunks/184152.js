function n(e) {
    let n = e.regex,
        r = n.concat(/[\p{L}_]/u, n.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u),
        i = /[\p{L}0-9._:-]+/u,
        a = {
            className: 'symbol',
            begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
        },
        s = {
            begin: /\s/,
            contains: [
                {
                    className: 'keyword',
                    begin: /#?[a-z_][a-z1-9_-]+/,
                    illegal: /\n/
                }
            ]
        },
        o = e.inherit(s, {
            begin: /\(/,
            end: /\)/
        }),
        l = e.inherit(e.APOS_STRING_MODE, { className: 'string' }),
        u = e.inherit(e.QUOTE_STRING_MODE, { className: 'string' }),
        c = {
            endsWithParent: !0,
            illegal: /</,
            relevance: 0,
            contains: [
                {
                    className: 'attr',
                    begin: i,
                    relevance: 0
                },
                {
                    begin: /=\s*/,
                    relevance: 0,
                    contains: [
                        {
                            className: 'string',
                            endsParent: !0,
                            variants: [
                                {
                                    begin: /"/,
                                    end: /"/,
                                    contains: [a]
                                },
                                {
                                    begin: /'/,
                                    end: /'/,
                                    contains: [a]
                                },
                                { begin: /[^\s"'=<>`]+/ }
                            ]
                        }
                    ]
                }
            ]
        };
    return {
        name: 'HTML, XML',
        aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],
        case_insensitive: !0,
        unicodeRegex: !0,
        contains: [
            {
                className: 'meta',
                begin: /<![a-z]/,
                end: />/,
                relevance: 10,
                contains: [
                    s,
                    u,
                    l,
                    o,
                    {
                        begin: /\[/,
                        end: /\]/,
                        contains: [
                            {
                                className: 'meta',
                                begin: /<![a-z]/,
                                end: />/,
                                contains: [s, o, u, l]
                            }
                        ]
                    }
                ]
            },
            e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
            {
                begin: /<!\[CDATA\[/,
                end: /\]\]>/,
                relevance: 10
            },
            a,
            {
                className: 'meta',
                end: /\?>/,
                variants: [
                    {
                        begin: /<\?xml/,
                        relevance: 10,
                        contains: [u]
                    },
                    { begin: /<\?[a-z][a-z0-9]+/ }
                ]
            },
            {
                className: 'tag',
                begin: /<style(?=\s|>)/,
                end: />/,
                keywords: { name: 'style' },
                contains: [c],
                starts: {
                    end: /<\/style>/,
                    returnEnd: !0,
                    subLanguage: ['css', 'xml']
                }
            },
            {
                className: 'tag',
                begin: /<script(?=\s|>)/,
                end: />/,
                keywords: { name: 'script' },
                contains: [c],
                starts: {
                    end: /<\/script>/,
                    returnEnd: !0,
                    subLanguage: ['javascript', 'handlebars', 'xml']
                }
            },
            {
                className: 'tag',
                begin: /<>|<\/>/
            },
            {
                className: 'tag',
                begin: n.concat(/</, n.lookahead(n.concat(r, n.either(/\/>/, />/, /\s/)))),
                end: /\/?>/,
                contains: [
                    {
                        className: 'name',
                        begin: r,
                        relevance: 0,
                        starts: c
                    }
                ]
            },
            {
                className: 'tag',
                begin: n.concat(/<\//, n.lookahead(n.concat(r, />/))),
                contains: [
                    {
                        className: 'name',
                        begin: r,
                        relevance: 0
                    },
                    {
                        begin: />/,
                        relevance: 0,
                        endsParent: !0
                    }
                ]
            }
        ]
    };
}
e.exports = n;
