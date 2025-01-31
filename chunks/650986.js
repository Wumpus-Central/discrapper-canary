function t(e) {
    let t = e.regex,
        n = {
            begin: /<\/?[A-Za-z_]/,
            end: '>',
            subLanguage: 'xml',
            relevance: 0
        },
        i = {
            begin: '^[-\\*]{3,}',
            end: '$'
        },
        r = {
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
        a = {
            className: 'bullet',
            begin: '^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)',
            end: '\\s+',
            excludeEnd: !0
        },
        s = {
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
        o = /[A-Za-z][A-Za-z0-9+.-]*/,
        l = {
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
                    begin: t.concat(/\[.+?\]\(/, o, /:\/\/.*?\)/),
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
        u = {
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
        c = {
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
        d = e.inherit(u, { contains: [] }),
        f = e.inherit(c, { contains: [] });
    u.contains.push(f), c.contains.push(d);
    let _ = [n, l];
    return (
        [u, c, d, f].forEach((e) => {
            e.contains = e.contains.concat(_);
        }),
        {
            name: 'Markdown',
            aliases: ['md', 'mkdown', 'mkd'],
            contains: [
                {
                    className: 'section',
                    variants: [
                        {
                            begin: '^#{1,6}',
                            end: '$',
                            contains: (_ = _.concat(u, c))
                        },
                        {
                            begin: '(?=^.+?\\n[=-]{2,}$)',
                            contains: [
                                { begin: '^[=-]*$' },
                                {
                                    begin: '^',
                                    end: '\\n',
                                    contains: _
                                }
                            ]
                        }
                    ]
                },
                n,
                a,
                u,
                c,
                {
                    className: 'quote',
                    begin: '^>\\s+',
                    contains: _,
                    end: '$'
                },
                r,
                i,
                l,
                s,
                {
                    scope: 'literal',
                    match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
                }
            ]
        }
    );
}
e.exports = t;
