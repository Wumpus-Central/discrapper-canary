function t(e) {
    let t = "[a-z'][a-zA-Z0-9_']*",
        n = '(' + t + ':' + t + '|' + t + ')',
        i = {
            keyword: 'after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor maybe else',
            literal: 'false true'
        },
        r = e.COMMENT('%', '$'),
        a = {
            className: 'number',
            begin: '\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)',
            relevance: 0
        },
        s = { begin: 'fun\\s+' + t + '/\\d+' },
        o = {
            begin: n + '\\(',
            end: '\\)',
            returnBegin: !0,
            relevance: 0,
            contains: [
                {
                    begin: n,
                    relevance: 0
                },
                {
                    begin: '\\(',
                    end: '\\)',
                    endsWithParent: !0,
                    returnEnd: !0,
                    relevance: 0
                }
            ]
        },
        l = {
            begin: /\{/,
            end: /\}/,
            relevance: 0
        },
        u = {
            begin: '\\b_([A-Z][A-Za-z0-9_]*)?',
            relevance: 0
        },
        c = {
            begin: '[A-Z][a-zA-Z0-9_]*',
            relevance: 0
        },
        d = {
            begin: '#' + e.UNDERSCORE_IDENT_RE,
            relevance: 0,
            returnBegin: !0,
            contains: [
                {
                    begin: '#' + e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                },
                {
                    begin: /\{/,
                    end: /\}/,
                    relevance: 0
                }
            ]
        },
        f = {
            scope: 'string',
            match: /\$(\\([^0-9]|[0-9]{1,3}|)|.)/
        },
        _ = {
            scope: 'string',
            match: /"""("*)(?!")[\s\S]*?"""\1/
        },
        p = {
            scope: 'string',
            contains: [e.BACKSLASH_ESCAPE],
            variants: [
                { match: /~\w?"""("*)(?!")[\s\S]*?"""\1/ },
                {
                    begin: /~\w?\(/,
                    end: /\)/
                },
                {
                    begin: /~\w?\[/,
                    end: /\]/
                },
                {
                    begin: /~\w?{/,
                    end: /}/
                },
                {
                    begin: /~\w?</,
                    end: />/
                },
                {
                    begin: /~\w?\//,
                    end: /\//
                },
                {
                    begin: /~\w?\|/,
                    end: /\|/
                },
                {
                    begin: /~\w?'/,
                    end: /'/
                },
                {
                    begin: /~\w?"/,
                    end: /"/
                },
                {
                    begin: /~\w?`/,
                    end: /`/
                },
                {
                    begin: /~\w?#/,
                    end: /#/
                }
            ]
        },
        h = {
            beginKeywords: 'fun receive if try case maybe',
            end: 'end',
            keywords: i
        };
    h.contains = [r, s, e.inherit(e.APOS_STRING_MODE, { className: '' }), h, o, p, _, e.QUOTE_STRING_MODE, a, l, u, c, d, f];
    let m = [r, s, h, o, p, _, e.QUOTE_STRING_MODE, a, l, u, c, d, f];
    (o.contains[1].contains = m), (l.contains = m), (d.contains[1].contains = m);
    let g = ['-module', '-record', '-undef', '-export', '-ifdef', '-ifndef', '-author', '-copyright', '-doc', '-moduledoc', '-vsn', '-import', '-include', '-include_lib', '-compile', '-define', '-else', '-endif', '-file', '-behaviour', '-behavior', '-spec', '-on_load', '-nifs'],
        E = {
            className: 'params',
            begin: '\\(',
            end: '\\)',
            contains: m
        };
    return {
        name: 'Erlang',
        aliases: ['erl'],
        keywords: i,
        illegal: '(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))',
        contains: [
            {
                className: 'function',
                begin: '^' + t + '\\s*\\(',
                end: '->',
                returnBegin: !0,
                illegal: '\\(|#|//|/\\*|\\\\|:|;',
                contains: [E, e.inherit(e.TITLE_MODE, { begin: t })],
                starts: {
                    end: ';|\\.',
                    keywords: i,
                    contains: m
                }
            },
            r,
            {
                begin: '^-',
                end: '\\.',
                relevance: 0,
                excludeEnd: !0,
                returnBegin: !0,
                keywords: {
                    $pattern: '-' + e.IDENT_RE,
                    keyword: g.map((e) => `${e}|1.5`).join(' ')
                },
                contains: [E, p, _, e.QUOTE_STRING_MODE]
            },
            a,
            p,
            _,
            e.QUOTE_STRING_MODE,
            d,
            u,
            c,
            l,
            f,
            { begin: /\.$/ }
        ]
    };
}
e.exports = t;
