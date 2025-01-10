function n(e) {
    let n = e.regex,
        r = /[a-zA-Z]\w*/,
        i = ['as', 'break', 'class', 'construct', 'continue', 'else', 'for', 'foreign', 'if', 'import', 'in', 'is', 'return', 'static', 'var', 'while'],
        a = ['true', 'false', 'null'],
        s = ['this', 'super'],
        o = ['Bool', 'Class', 'Fiber', 'Fn', 'List', 'Map', 'Null', 'Num', 'Object', 'Range', 'Sequence', 'String', 'System'],
        l = ['-', '~', /\*/, '%', /\.\.\./, /\.\./, /\+/, '<<', '>>', '>=', '<=', '<', '>', /\^/, /!=/, /!/, /\bis\b/, '==', '&&', '&', /\|\|/, /\|/, /\?:/, '='],
        u = {
            relevance: 0,
            match: n.concat(/\b(?!(if|while|for|else|super)\b)/, r, /(?=\s*[({])/),
            className: 'title.function'
        },
        c = {
            match: n.concat(n.either(n.concat(/\b(?!(if|while|for|else|super)\b)/, r), n.either(...l)), /(?=\s*\([^)]+\)\s*\{)/),
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
                                match: r
                            }
                        ]
                    }
                ]
            }
        },
        d = {
            variants: [
                {
                    match: [/class\s+/, r, /\s+is\s+/, r]
                },
                {
                    match: [/class\s+/, r]
                }
            ],
            scope: {
                2: 'title.class',
                4: 'title.class.inherited'
            },
            keywords: i
        },
        f = {
            relevance: 0,
            match: n.either(...l),
            className: 'operator'
        },
        _ = {
            className: 'string',
            begin: /"""/,
            end: /"""/
        },
        h = {
            className: 'property',
            begin: n.concat(/\./, n.lookahead(r)),
            end: r,
            excludeBegin: !0,
            relevance: 0
        },
        p = {
            relevance: 0,
            match: n.concat(/\b_/, r),
            scope: 'variable'
        },
        m = {
            relevance: 0,
            match: /\b[A-Z]+[a-z]+([A-Z]+[a-z]+)*/,
            scope: 'title.class',
            keywords: { _: o }
        },
        g = e.C_NUMBER_MODE,
        E = {
            match: [r, /\s*/, /=/, /\s*/, /\(/, r, /\)\s*\{/],
            scope: {
                1: 'title.function',
                3: 'operator',
                6: 'params'
            }
        },
        v = e.COMMENT(/\/\*\*/, /\*\//, {
            contains: [
                {
                    match: /@[a-z]+/,
                    scope: 'doctag'
                },
                'self'
            ]
        }),
        I = {
            scope: 'subst',
            begin: /%\(/,
            end: /\)/,
            contains: [g, m, u, p, f]
        },
        T = {
            scope: 'string',
            begin: /"/,
            end: /"/,
            contains: [
                I,
                {
                    scope: 'char.escape',
                    variants: [{ match: /\\\\|\\["0%abefnrtv]/ }, { match: /\\x[0-9A-F]{2}/ }, { match: /\\u[0-9A-F]{4}/ }, { match: /\\U[0-9A-F]{8}/ }]
                }
            ]
        };
    I.contains.push(T);
    let b = [...i, ...s, ...a],
        y = {
            relevance: 0,
            match: n.concat('\\b(?!', b.join('|'), '\\b)', /[a-zA-Z_]\w*(?:[?!]|\b)/),
            className: 'variable'
        },
        S = {
            scope: 'comment',
            variants: [
                {
                    begin: [/#!?/, /[A-Za-z_]+(?=\()/],
                    beginScope: {},
                    keywords: { literal: a },
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
            'variable.language': s,
            literal: a
        },
        contains: [S, g, T, _, v, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, m, d, E, c, u, f, p, h, y]
    };
}
e.exports = n;
