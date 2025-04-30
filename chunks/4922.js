e.exports = function (e) {
    let t = e.regex,
        n = {
            className: 'number',
            relevance: 0,
            variants: [{ begin: /([+-]+)?[\d]+_[\d_]+/ }, { begin: e.NUMBER_RE }]
        },
        r = e.COMMENT();
    r.variants = [
        {
            begin: /;/,
            end: /$/
        },
        {
            begin: /#/,
            end: /$/
        }
    ];
    let i = {
            className: 'variable',
            variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, { begin: /\$\{(.*?)\}/ }]
        },
        o = {
            className: 'literal',
            begin: /\bon|off|true|false|yes|no\b/
        },
        a = {
            className: 'string',
            contains: [e.BACKSLASH_ESCAPE],
            variants: [
                {
                    begin: "'''",
                    end: "'''",
                    relevance: 10
                },
                {
                    begin: '"""',
                    end: '"""',
                    relevance: 10
                },
                {
                    begin: '"',
                    end: '"'
                },
                {
                    begin: "'",
                    end: "'"
                }
            ]
        },
        s = {
            begin: /\[/,
            end: /\]/,
            contains: [r, o, i, a, n, 'self'],
            relevance: 0
        },
        l = /[A-Za-z0-9_-]+/,
        c = /"(\\"|[^"])*"/,
        u = /'[^']*'/,
        d = t.either(l, c, u);
    return {
        name: 'TOML, also INI',
        aliases: ['toml'],
        case_insensitive: !0,
        illegal: /\S/,
        contains: [
            r,
            {
                className: 'section',
                begin: /\[+/,
                end: /\]+/
            },
            {
                begin: t.concat(d, '(\\s*\\.\\s*', d, ')*', t.lookahead(/\s*=\s*[^#\s]/)),
                className: 'attr',
                starts: {
                    end: /$/,
                    contains: [r, s, o, i, a, n]
                }
            }
        ]
    };
};
