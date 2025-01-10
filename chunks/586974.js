function n(e) {
    let n = e.regex,
        r = '[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?',
        i = '[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?',
        a = {
            $pattern: r,
            keyword: ['after', 'alias', 'and', 'case', 'catch', 'cond', 'defstruct', 'defguard', 'do', 'else', 'end', 'fn', 'for', 'if', 'import', 'in', 'not', 'or', 'quote', 'raise', 'receive', 'require', 'reraise', 'rescue', 'try', 'unless', 'unquote', 'unquote_splicing', 'use', 'when', 'with|0'],
            literal: ['false', 'nil', 'true']
        },
        s = {
            className: 'subst',
            begin: /#\{/,
            end: /\}/,
            keywords: a
        },
        o = {
            className: 'number',
            begin: '(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[0-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)',
            relevance: 0
        },
        l = {
            match: /\\[\s\S]/,
            scope: 'char.escape',
            relevance: 0
        },
        u = '[/|([{<"\']',
        c = [
            {
                begin: /"/,
                end: /"/
            },
            {
                begin: /'/,
                end: /'/
            },
            {
                begin: /\//,
                end: /\//
            },
            {
                begin: /\|/,
                end: /\|/
            },
            {
                begin: /\(/,
                end: /\)/
            },
            {
                begin: /\[/,
                end: /\]/
            },
            {
                begin: /\{/,
                end: /\}/
            },
            {
                begin: /</,
                end: />/
            }
        ],
        d = (e) => ({
            scope: 'char.escape',
            begin: n.concat(/\\/, e),
            relevance: 0
        }),
        f = {
            className: 'string',
            begin: '~[a-z](?=' + u + ')',
            contains: c.map((n) =>
                e.inherit(n, {
                    contains: [d(n.end), l, s]
                })
            )
        },
        _ = {
            className: 'string',
            begin: '~[A-Z](?=' + u + ')',
            contains: c.map((n) => e.inherit(n, { contains: [d(n.end)] }))
        },
        h = {
            className: 'regex',
            variants: [
                {
                    begin: '~r(?=' + u + ')',
                    contains: c.map((r) =>
                        e.inherit(r, {
                            end: n.concat(r.end, /[uismxfU]{0,7}/),
                            contains: [d(r.end), l, s]
                        })
                    )
                },
                {
                    begin: '~R(?=' + u + ')',
                    contains: c.map((r) =>
                        e.inherit(r, {
                            end: n.concat(r.end, /[uismxfU]{0,7}/),
                            contains: [d(r.end)]
                        })
                    )
                }
            ]
        },
        p = {
            className: 'string',
            contains: [e.BACKSLASH_ESCAPE, s],
            variants: [
                {
                    begin: /"""/,
                    end: /"""/
                },
                {
                    begin: /'''/,
                    end: /'''/
                },
                {
                    begin: /~S"""/,
                    end: /"""/,
                    contains: []
                },
                {
                    begin: /~S"/,
                    end: /"/,
                    contains: []
                },
                {
                    begin: /~S'''/,
                    end: /'''/,
                    contains: []
                },
                {
                    begin: /~S'/,
                    end: /'/,
                    contains: []
                },
                {
                    begin: /'/,
                    end: /'/
                },
                {
                    begin: /"/,
                    end: /"/
                }
            ]
        },
        m = {
            className: 'function',
            beginKeywords: 'def defp defmacro defmacrop',
            end: /\B\b/,
            contains: [
                e.inherit(e.TITLE_MODE, {
                    begin: r,
                    endsParent: !0
                })
            ]
        },
        g = e.inherit(m, {
            className: 'class',
            beginKeywords: 'defimpl defmodule defprotocol defrecord',
            end: /\bdo\b|$|;/
        }),
        E = [
            p,
            h,
            _,
            f,
            e.HASH_COMMENT_MODE,
            g,
            m,
            { begin: '::' },
            {
                className: 'symbol',
                begin: ':(?![\\s:])',
                contains: [p, { begin: i }],
                relevance: 0
            },
            {
                className: 'symbol',
                begin: r + ':(?!:)',
                relevance: 0
            },
            {
                className: 'title.class',
                begin: /(\b[A-Z][a-zA-Z0-9_]+)/,
                relevance: 0
            },
            o,
            {
                className: 'variable',
                begin: '(\\$\\W)|((\\$|@@?)(\\w+))'
            }
        ];
    return (
        (s.contains = E),
        {
            name: 'Elixir',
            aliases: ['ex', 'exs'],
            keywords: a,
            contains: E
        }
    );
}
e.exports = n;
