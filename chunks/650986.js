e.exports = function (e) {
    let t = e.regex,
        n = {
            begin: /<\/?[A-Za-z_]/,
            end: '>',
            subLanguage: 'xml',
            relevance: 0
        },
        r = {
            begin: '^[-\\*]{3,}',
            end: '$'
        },
        i = {
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
        o = {
            className: 'bullet',
            begin: '^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)',
            end: '\\s+',
            excludeEnd: !0
        },
        a = {
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
        s = /[A-Za-z][A-Za-z0-9+.-]*/,
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
                    begin: t.concat(/\[.+?\]\(/, s, /:\/\/.*?\)/),
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
        u = {
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
        d = e.inherit(c, { contains: [] }),
        f = e.inherit(u, { contains: [] });
    c.contains.push(f), u.contains.push(d);
    let _ = [n, l];
    return (
        [c, u, d, f].forEach((e) => {
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
                            contains: (_ = _.concat(c, u))
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
                o,
                c,
                u,
                {
                    className: 'quote',
                    begin: '^>\\s+',
                    contains: _,
                    end: '$'
                },
                i,
                r,
                l,
                a,
                {
                    scope: 'literal',
                    match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
                }
            ]
        }
    );
};
