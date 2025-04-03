e.exports = function (e) {
    let t = e.regex,
        n = '[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?',
        r = '[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?',
        i = {
            $pattern: n,
            keyword: ['after', 'alias', 'and', 'case', 'catch', 'cond', 'defstruct', 'defguard', 'do', 'else', 'end', 'fn', 'for', 'if', 'import', 'in', 'not', 'or', 'quote', 'raise', 'receive', 'require', 'reraise', 'rescue', 'try', 'unless', 'unquote', 'unquote_splicing', 'use', 'when', 'with|0'],
            literal: ['false', 'nil', 'true']
        },
        o = {
            className: 'subst',
            begin: /#\{/,
            end: /\}/,
            keywords: i
        },
        a = {
            className: 'number',
            begin: '(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[0-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)',
            relevance: 0
        },
        s = {
            match: /\\[\s\S]/,
            scope: 'char.escape',
            relevance: 0
        },
        l = '[/|([{<"\']',
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
        u = (e) => ({
            scope: 'char.escape',
            begin: t.concat(/\\/, e),
            relevance: 0
        }),
        d = {
            className: 'string',
            begin: '~[a-z](?=' + l + ')',
            contains: c.map((t) =>
                e.inherit(t, {
                    contains: [u(t.end), s, o]
                })
            )
        },
        f = {
            className: 'string',
            begin: '~[A-Z](?=' + l + ')',
            contains: c.map((t) => e.inherit(t, { contains: [u(t.end)] }))
        },
        _ = {
            className: 'regex',
            variants: [
                {
                    begin: '~r(?=' + l + ')',
                    contains: c.map((n) =>
                        e.inherit(n, {
                            end: t.concat(n.end, /[uismxfU]{0,7}/),
                            contains: [u(n.end), s, o]
                        })
                    )
                },
                {
                    begin: '~R(?=' + l + ')',
                    contains: c.map((n) =>
                        e.inherit(n, {
                            end: t.concat(n.end, /[uismxfU]{0,7}/),
                            contains: [u(n.end)]
                        })
                    )
                }
            ]
        },
        p = {
            className: 'string',
            contains: [e.BACKSLASH_ESCAPE, o],
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
                contains: [p, { begin: r }],
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
            a,
            {
                className: 'variable',
                begin: '(\\$\\W)|((\\$|@@?)(\\w+))'
            }
        ];
    return (
        (o.contains = g),
        {
            name: 'Elixir',
            aliases: ['ex', 'exs'],
            keywords: i,
            contains: g
        }
    );
};
