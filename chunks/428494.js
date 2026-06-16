e.exports = function (e) {
    let t = e.regex,
        n = {
            className: "number",
            relevance: 0,
            variants: [{ begin: /([+-]+)?[\d]+_[\d_]+/ }, { begin: e.NUMBER_RE }],
        },
        i = e.COMMENT();
    i.variants = [
        { begin: /;/, end: /$/ },
        { begin: /#/, end: /$/ },
    ];
    let r = { className: "variable", variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, { begin: /\$\{(.*?)\}/ }] },
        s = { className: "literal", begin: /\bon|off|true|false|yes|no\b/ },
        a = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE],
            variants: [
                { begin: "'''", end: "'''", relevance: 10 },
                { begin: '"""', end: '"""', relevance: 10 },
                { begin: '"', end: '"' },
                { begin: "'", end: "'" },
            ],
        },
        o = t.either(/[A-Za-z0-9_-]{1,149}/, /"(\\"|[^"])*"/, /'[^']*'/);
    return {
        name: "TOML, also INI",
        aliases: ["toml"],
        case_insensitive: !0,
        illegal: /\S/,
        contains: [
            i,
            { className: "section", begin: /\[+/, end: /\]+/ },
            {
                begin: t.concat(o, "(\\s*\\.\\s*", o, ")*", t.lookahead(/\s*=\s*[^#\s]/)),
                className: "attr",
                starts: {
                    end: /$/,
                    contains: [
                        i,
                        { begin: /\[/, end: /\]/, contains: [i, s, r, a, n, "self"], relevance: 0 },
                        s,
                        r,
                        a,
                        n,
                    ],
                },
            },
        ],
    };
};
