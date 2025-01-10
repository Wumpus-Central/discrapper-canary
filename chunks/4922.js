function n(e) {
    let n = e.regex,
        r = {
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
    let a = {
            className: 'variable',
            variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, { begin: /\$\{(.*?)\}/ }]
        },
        s = {
            className: 'literal',
            begin: /\bon|off|true|false|yes|no\b/
        },
        o = {
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
        l = {
            begin: /\[/,
            end: /\]/,
            contains: [i, s, a, o, r, 'self'],
            relevance: 0
        },
        u = /[A-Za-z0-9_-]+/,
        c = /"(\\"|[^"])*"/,
        d = /'[^']*'/,
        f = n.either(u, c, d);
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
                begin: n.concat(f, '(\\s*\\.\\s*', f, ')*', n.lookahead(/\s*=\s*[^#\s]/)),
                className: 'attr',
                starts: {
                    end: /$/,
                    contains: [i, l, s, a, o, r]
                }
            }
        ]
    };
}
e.exports = n;
