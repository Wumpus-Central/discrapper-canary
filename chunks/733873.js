e.exports = function (e) {
    let t = e.regex,
        n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u),
        r = /[\p{L}0-9._:-]+/u,
        i = { className: "symbol", begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ },
        s = { begin: /\s/, contains: [{ className: "keyword", begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ }] },
        a = e.inherit(s, { begin: /\(/, end: /\)/ }),
        o = e.inherit(e.APOS_STRING_MODE, { className: "string" }),
        l = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
        u = {
            endsWithParent: !0,
            illegal: /</,
            relevance: 0,
            contains: [
                { className: "attr", begin: r, relevance: 0 },
                {
                    begin: /=\s*/,
                    relevance: 0,
                    contains: [
                        {
                            className: "string",
                            endsParent: !0,
                            variants: [
                                { begin: /"/, end: /"/, contains: [i] },
                                { begin: /'/, end: /'/, contains: [i] },
                                { begin: /[^\s"'=<>`]+/ },
                            ],
                        },
                    ],
                },
            ],
        };
    return {
        name: "HTML, XML",
        aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
        case_insensitive: !0,
        unicodeRegex: !0,
        contains: [
            {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                relevance: 10,
                contains: [
                    s,
                    l,
                    o,
                    a,
                    {
                        begin: /\[/,
                        end: /\]/,
                        contains: [{ className: "meta", begin: /<![a-z]/, end: />/, contains: [s, a, l, o] }],
                    },
                ],
            },
            e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
            { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
            i,
            {
                className: "meta",
                end: /\?>/,
                variants: [{ begin: /<\?xml/, relevance: 10, contains: [l] }, { begin: /<\?[a-z][a-z0-9]+/ }],
            },
            {
                className: "tag",
                begin: /<style(?=\s|>)/,
                end: />/,
                keywords: { name: "style" },
                contains: [u],
                starts: { end: /<\/style>/, returnEnd: !0, subLanguage: ["css", "xml"] },
            },
            {
                className: "tag",
                begin: /<script(?=\s|>)/,
                end: />/,
                keywords: { name: "script" },
                contains: [u],
                starts: { end: /<\/script>/, returnEnd: !0, subLanguage: ["javascript", "handlebars"] },
            },
            { className: "tag", begin: /<>|<\/>/ },
            {
                className: "tag",
                begin: t.concat(/</, t.lookahead(t.concat(n, t.either(/\/>/, />/, /\s/)))),
                end: /\/?>/,
                contains: [{ className: "name", begin: n, relevance: 0, starts: u }],
            },
            {
                className: "tag",
                begin: t.concat(/<\//, t.lookahead(t.concat(n, />/))),
                contains: [
                    { className: "name", begin: n, relevance: 0 },
                    { begin: />/, relevance: 0, endsParent: !0 },
                ],
            },
        ],
    };
};
