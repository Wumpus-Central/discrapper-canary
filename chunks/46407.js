function n(e) {
    let n = "[a-z'][a-zA-Z0-9_']*",
        r = '(' + n + ':' + n + '|' + n + ')',
        i = {
            keyword: 'after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor maybe else',
            literal: 'false true'
        },
        a = e.COMMENT('%', '$'),
        s = {
            className: 'number',
            begin: '\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)',
            relevance: 0
        },
        o = { begin: 'fun\\s+' + n + '/\\d+' },
        l = {
            begin: r + '\\(',
            end: '\\)',
            returnBegin: !0,
            relevance: 0,
            contains: [
                {
                    begin: r,
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
        u = {
            begin: /\{/,
            end: /\}/,
            relevance: 0
        },
        c = {
            begin: '\\b_([A-Z][A-Za-z0-9_]*)?',
            relevance: 0
        },
        d = {
            begin: '[A-Z][a-zA-Z0-9_]*',
            relevance: 0
        },
        f = {
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
        _ = {
            scope: 'string',
            match: /\$(\\([^0-9]|[0-9]{1,3}|)|.)/
        },
        h = {
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
        m = {
            beginKeywords: 'fun receive if try case maybe',
            end: 'end',
            keywords: i
        };
    m.contains = [a, o, e.inherit(e.APOS_STRING_MODE, { className: '' }), m, l, p, h, e.QUOTE_STRING_MODE, s, u, c, d, f, _];
    let g = [a, o, m, l, p, h, e.QUOTE_STRING_MODE, s, u, c, d, f, _];
    (l.contains[1].contains = g), (u.contains = g), (f.contains[1].contains = g);
    let E = ['-module', '-record', '-undef', '-export', '-ifdef', '-ifndef', '-author', '-copyright', '-doc', '-moduledoc', '-vsn', '-import', '-include', '-include_lib', '-compile', '-define', '-else', '-endif', '-file', '-behaviour', '-behavior', '-spec', '-on_load', '-nifs'],
        v = {
            className: 'params',
            begin: '\\(',
            end: '\\)',
            contains: g
        };
    return {
        name: 'Erlang',
        aliases: ['erl'],
        keywords: i,
        illegal: '(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))',
        contains: [
            {
                className: 'function',
                begin: '^' + n + '\\s*\\(',
                end: '->',
                returnBegin: !0,
                illegal: '\\(|#|//|/\\*|\\\\|:|;',
                contains: [v, e.inherit(e.TITLE_MODE, { begin: n })],
                starts: {
                    end: ';|\\.',
                    keywords: i,
                    contains: g
                }
            },
            a,
            {
                begin: '^-',
                end: '\\.',
                relevance: 0,
                excludeEnd: !0,
                returnBegin: !0,
                keywords: {
                    $pattern: '-' + e.IDENT_RE,
                    keyword: E.map((e) => `${e}|1.5`).join(' ')
                },
                contains: [v, p, h, e.QUOTE_STRING_MODE]
            },
            s,
            p,
            h,
            e.QUOTE_STRING_MODE,
            f,
            c,
            d,
            u,
            _,
            { begin: /\.$/ }
        ]
    };
}
e.exports = n;
