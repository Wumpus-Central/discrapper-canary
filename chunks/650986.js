function n(e) {
    let n = e.regex,
        r = {
            begin: /<\/?[A-Za-z_]/,
            end: '>',
            subLanguage: 'xml',
            relevance: 0
        },
        i = {
            begin: '^[-\\*]{3,}',
            end: '$'
        },
        a = {
            className: 'code',
            variants: [
                { begin: '(`{3,})[^`](.|\\n)*?\\1`*[ ]*' },
                { begin: '(~{3,})[^~](.|\\n)*?\\1~*[ ]*' },
                {
                    begin: '```',
                    end: '```+[ ]*$'
                },
                {
                    begin: '~~~',
                    end: '~~~+[ ]*$'
                },
                { begin: '`.+?`' },
                {
                    begin: '(?=^( {4}|\\t))',
                    contains: [
                        {
                            begin: '^( {4}|\\t)',
                            end: '(\\n)$'
                        }
                    ],
                    relevance: 0
                }
            ]
        },
        s = {
            className: 'bullet',
            begin: '^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)',
            end: '\\s+',
            excludeEnd: !0
        },
        o = {
            begin: /^\[[^\n]+\]:/,
            returnBegin: !0,
            contains: [
                {
                    className: 'symbol',
                    begin: /\[/,
                    end: /\]/,
                    excludeBegin: !0,
                    excludeEnd: !0
                },
                {
                    className: 'link',
                    begin: /:\s*/,
                    end: /$/,
                    excludeBegin: !0
                }
            ]
        },
        l = /[A-Za-z][A-Za-z0-9+.-]*/,
        u = {
            variants: [
                {
                    begin: /\[.+?\]\[.*?\]/,
                    relevance: 0
                },
                {
                    begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                    relevance: 2
                },
                {
                    begin: n.concat(/\[.+?\]\(/, l, /:\/\/.*?\)/),
                    relevance: 2
                },
                {
                    begin: /\[.+?\]\([./?&#].*?\)/,
                    relevance: 1
                },
                {
                    begin: /\[.*?\]\(.*?\)/,
                    relevance: 0
                }
            ],
            returnBegin: !0,
            contains: [
                { match: /\[(?=\])/ },
                {
                    className: 'string',
                    relevance: 0,
                    begin: '\\[',
                    end: '\\]',
                    excludeBegin: !0,
                    returnEnd: !0
                },
                {
                    className: 'link',
                    relevance: 0,
                    begin: '\\]\\(',
                    end: '\\)',
                    excludeBegin: !0,
                    excludeEnd: !0
                },
                {
                    className: 'symbol',
                    relevance: 0,
                    begin: '\\]\\[',
                    end: '\\]',
                    excludeBegin: !0,
                    excludeEnd: !0
                }
            ]
        },
        c = {
            className: 'strong',
            contains: [],
            variants: [
                {
                    begin: /_{2}(?!\s)/,
                    end: /_{2}/
                },
                {
                    begin: /\*{2}(?!\s)/,
                    end: /\*{2}/
                }
            ]
        },
        d = {
            className: 'emphasis',
            contains: [],
            variants: [
                {
                    begin: /\*(?![*\s])/,
                    end: /\*/
                },
                {
                    begin: /_(?![_\s])/,
                    end: /_/,
                    relevance: 0
                }
            ]
        },
        f = e.inherit(c, { contains: [] }),
        _ = e.inherit(d, { contains: [] });
    c.contains.push(_), d.contains.push(f);
    let h = [r, u];
    [c, d, f, _].forEach((e) => {
        e.contains = e.contains.concat(h);
    });
    let p = {
        className: 'section',
        variants: [
            {
                begin: '^#{1,6}',
                end: '$',
                contains: (h = h.concat(c, d))
            },
            {
                begin: '(?=^.+?\\n[=-]{2,}$)',
                contains: [
                    { begin: '^[=-]*$' },
                    {
                        begin: '^',
                        end: '\\n',
                        contains: h
                    }
                ]
            }
        ]
    };
    return {
        name: 'Markdown',
        aliases: ['md', 'mkdown', 'mkd'],
        contains: [
            p,
            r,
            s,
            c,
            d,
            {
                className: 'quote',
                begin: '^>\\s+',
                contains: h,
                end: '$'
            },
            a,
            i,
            u,
            o,
            {
                scope: 'literal',
                match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
            }
        ]
    };
}
e.exports = n;
