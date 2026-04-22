e.exports = function (e) {
    let t = e.regex,
        a = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u),
        n = { className: "symbol", begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ },
        r = { begin: /\s/, contains: [{ className: "keyword", begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ }] },
        i = e.inherit(r, { begin: /\(/, end: /\)/ }),
        o = e.inherit(e.APOS_STRING_MODE, { className: "string" }),
        s = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
        l = {
            endsWithParent: !0,
            illegal: /</,
            relevance: 0,
            contains: [
                { className: "attr", begin: /[\p{L}0-9._:-]+/u, relevance: 0 },
                {
                    begin: /=\s*/,
                    relevance: 0,
                    contains: [
                        {
                            className: "string",
                            endsParent: !0,
                            variants: [
                                { begin: /"/, end: /"/, contains: [n] },
                                { begin: /'/, end: /'/, contains: [n] },
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
                    r,
                    s,
                    o,
                    i,
                    {
                        begin: /\[/,
                        end: /\]/,
                        contains: [{ className: "meta", begin: /<![a-z]/, end: />/, contains: [r, i, s, o] }],
                    },
                ],
            },
            e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
            { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
            n,
            {
                className: "meta",
                end: /\?>/,
                variants: [{ begin: /<\?xml/, relevance: 10, contains: [s] }, { begin: /<\?[a-z][a-z0-9]+/ }],
            },
            {
                className: "tag",
                begin: /<style(?=\s|>)/,
                end: />/,
                keywords: { name: "style" },
                contains: [l],
                starts: { end: /<\/style>/, returnEnd: !0, subLanguage: ["css", "xml"] },
            },
            {
                className: "tag",
                begin: /<script(?=\s|>)/,
                end: />/,
                keywords: { name: "script" },
                contains: [l],
                starts: { end: /<\/script>/, returnEnd: !0, subLanguage: ["javascript", "handlebars"] },
            },
            { className: "tag", begin: /<>|<\/>/ },
            {
                className: "tag",
                begin: t.concat(/</, t.lookahead(t.concat(a, t.either(/\/>/, />/, /\s/)))),
                end: /\/?>/,
                contains: [{ className: "name", begin: a, relevance: 0, starts: l }],
            },
            {
                className: "tag",
                begin: t.concat(/<\//, t.lookahead(t.concat(a, />/))),
                contains: [
                    { className: "name", begin: a, relevance: 0 },
                    { begin: />/, relevance: 0, endsParent: !0 },
                ],
            },
        ],
    };
};
