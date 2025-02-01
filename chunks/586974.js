function t(e) {
    let t = e.regex,
        n = '[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?',
        i = '[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?',
        r = {
            $pattern: n,
            keyword: ['after', 'alias', 'and', 'case', 'catch', 'cond', 'defstruct', 'defguard', 'do', 'else', 'end', 'fn', 'for', 'if', 'import', 'in', 'not', 'or', 'quote', 'raise', 'receive', 'require', 'reraise', 'rescue', 'try', 'unless', 'unquote', 'unquote_splicing', 'use', 'when', 'with|0'],
            literal: ['false', 'nil', 'true']
        },
        a = {
            className: 'subst',
            begin: /#\{/,
            end: /\}/,
            keywords: r
        },
        s = {
            className: 'number',
            begin: '(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[0-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)',
            relevance: 0
        },
        o = {
            match: /\\[\s\S]/,
            scope: 'char.escape',
            relevance: 0
        },
        l = '[/|([{<"\']',
        u = [
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
        c = (e) => ({
            scope: 'char.escape',
            begin: t.concat(/\\/, e),
            relevance: 0
        }),
        d = {
            className: 'string',
            begin: '~[a-z](?=' + l + ')',
            contains: u.map((t) =>
                e.inherit(t, {
                    contains: [c(t.end), o, a]
                })
            )
        },
        f = {
            className: 'string',
            begin: '~[A-Z](?=' + l + ')',
            contains: u.map((t) => e.inherit(t, { contains: [c(t.end)] }))
        },
        _ = {
            className: 'regex',
            variants: [
                {
                    begin: '~r(?=' + l + ')',
                    contains: u.map((n) =>
                        e.inherit(n, {
                            end: t.concat(n.end, /[uismxfU]{0,7}/),
                            contains: [c(n.end), o, a]
                        })
                    )
                },
                {
                    begin: '~R(?=' + l + ')',
                    contains: u.map((n) =>
                        e.inherit(n, {
                            end: t.concat(n.end, /[uismxfU]{0,7}/),
                            contains: [c(n.end)]
                        })
                    )
                }
            ]
        },
        p = {
            className: 'string',
            contains: [e.BACKSLASH_ESCAPE, a],
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
        h = {
            className: 'function',
            beginKeywords: 'def defp defmacro defmacrop',
            end: /\B\b/,
            contains: [
                e.inherit(e.TITLE_MODE, {
                    begin: n,
                    endsParent: !0
                })
            ]
        },
        m = e.inherit(h, {
            className: 'class',
            beginKeywords: 'defimpl defmodule defprotocol defrecord',
            end: /\bdo\b|$|;/
        }),
        g = [
            p,
            _,
            f,
            d,
            e.HASH_COMMENT_MODE,
            m,
            h,
            { begin: '::' },
            {
                className: 'symbol',
                begin: ':(?![\\s:])',
                contains: [p, { begin: i }],
                relevance: 0
            },
            {
                className: 'symbol',
                begin: n + ':(?!:)',
                relevance: 0
            },
            {
                className: 'title.class',
                begin: /(\b[A-Z][a-zA-Z0-9_]+)/,
                relevance: 0
            },
            s,
            {
                className: 'variable',
                begin: '(\\$\\W)|((\\$|@@?)(\\w+))'
            }
        ];
    return (
        (a.contains = g),
        {
            name: 'Elixir',
            aliases: ['ex', 'exs'],
            keywords: r,
            contains: g
        }
    );
}
e.exports = t;
