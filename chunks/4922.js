function t(e) {
    let t = e.regex,
        n = {
            className: 'number',
            relevance: 0,
            variants: [{ begin: /([+-]+)?[\d]+_[\d_]+/ }, { begin: e.NUMBER_RE }]
        },
        i = e.COMMENT();
    i.variants = [
        {
            begin: /;/,
            end: /$/
        },
        {
            begin: /#/,
            end: /$/
        }
    ];
    let r = {
            className: 'variable',
            variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, { begin: /\$\{(.*?)\}/ }]
        },
        a = {
            className: 'literal',
            begin: /\bon|off|true|false|yes|no\b/
        },
        s = {
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
        o = {
            begin: /\[/,
            end: /\]/,
            contains: [i, a, r, s, n, 'self'],
            relevance: 0
        },
        l = /[A-Za-z0-9_-]+/,
        u = /"(\\"|[^"])*"/,
        c = /'[^']*'/,
        d = t.either(l, u, c);
    return {
        name: 'TOML, also INI',
        aliases: ['toml'],
        case_insensitive: !0,
        illegal: /\S/,
        contains: [
            i,
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
                    contains: [i, o, a, r, s, n]
                }
            }
        ]
    };
}
e.exports = t;
