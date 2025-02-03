function t(e) {
    let t = e.regex,
        n = /[a-zA-Z]\w*/,
        i = ['as', 'break', 'class', 'construct', 'continue', 'else', 'for', 'foreign', 'if', 'import', 'in', 'is', 'return', 'static', 'var', 'while'],
        r = ['true', 'false', 'null'],
        a = ['this', 'super'],
        s = ['Bool', 'Class', 'Fiber', 'Fn', 'List', 'Map', 'Null', 'Num', 'Object', 'Range', 'Sequence', 'String', 'System'],
        o = ['-', '~', /\*/, '%', /\.\.\./, /\.\./, /\+/, '<<', '>>', '>=', '<=', '<', '>', /\^/, /!=/, /!/, /\bis\b/, '==', '&&', '&', /\|\|/, /\|/, /\?:/, '='],
        l = {
            relevance: 0,
            match: t.concat(/\b(?!(if|while|for|else|super)\b)/, n, /(?=\s*[({])/),
            className: 'title.function'
        },
        u = {
            match: t.concat(t.either(t.concat(/\b(?!(if|while|for|else|super)\b)/, n), t.either(...o)), /(?=\s*\([^)]+\)\s*\{)/),
            className: 'title.function',
            starts: {
                contains: [
                    {
                        begin: /\(/,
                        end: /\)/,
                        contains: [
                            {
                                relevance: 0,
                                scope: 'params',
                                match: n
                            }
                        ]
                    }
                ]
            }
        },
        c = {
            variants: [
                {
                    match: [/class\s+/, n, /\s+is\s+/, n]
                },
                {
                    match: [/class\s+/, n]
                }
            ],
            scope: {
                2: 'title.class',
                4: 'title.class.inherited'
            },
            keywords: i
        },
        d = {
            relevance: 0,
            match: t.either(...o),
            className: 'operator'
        },
        f = {
            className: 'string',
            begin: /"""/,
            end: /"""/
        },
        _ = {
            className: 'property',
            begin: t.concat(/\./, t.lookahead(n)),
            end: n,
            excludeBegin: !0,
            relevance: 0
        },
        p = {
            relevance: 0,
            match: t.concat(/\b_/, n),
            scope: 'variable'
        },
        h = {
            relevance: 0,
            match: /\b[A-Z]+[a-z]+([A-Z]+[a-z]+)*/,
            scope: 'title.class',
            keywords: { _: s }
        },
        m = e.C_NUMBER_MODE,
        g = {
            match: [n, /\s*/, /=/, /\s*/, /\(/, n, /\)\s*\{/],
            scope: {
                1: 'title.function',
                3: 'operator',
                6: 'params'
            }
        },
        E = e.COMMENT(/\/\*\*/, /\*\//, {
            contains: [
                {
                    match: /@[a-z]+/,
                    scope: 'doctag'
                },
                'self'
            ]
        }),
        v = {
            scope: 'subst',
            begin: /%\(/,
            end: /\)/,
            contains: [m, h, l, p, d]
        },
        y = {
            scope: 'string',
            begin: /"/,
            end: /"/,
            contains: [
                v,
                {
                    scope: 'char.escape',
                    variants: [{ match: /\\\\|\\["0%abefnrtv]/ }, { match: /\\x[0-9A-F]{2}/ }, { match: /\\u[0-9A-F]{4}/ }, { match: /\\U[0-9A-F]{8}/ }]
                }
            ]
        };
    v.contains.push(y);
    let I = [...i, ...a, ...r],
        b = {
            relevance: 0,
            match: t.concat('\\b(?!', I.join('|'), '\\b)', /[a-zA-Z_]\w*(?:[?!]|\b)/),
            className: 'variable'
        },
        T = {
            scope: 'comment',
            variants: [
                {
                    begin: [/#!?/, /[A-Za-z_]+(?=\()/],
                    beginScope: {},
                    keywords: { literal: r },
                    contains: [],
                    end: /\)/
                },
                {
                    begin: [/#!?/, /[A-Za-z_]+/],
                    beginScope: {},
                    end: /$/
                }
            ]
        };
    return {
        name: 'Wren',
        keywords: {
            keyword: i,
            'variable.language': a,
            literal: r
        },
        contains: [T, m, y, f, E, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, h, c, g, u, l, d, p, _, b]
    };
}
e.exports = t;
