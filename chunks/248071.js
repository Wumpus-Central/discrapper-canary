e.exports = function (e) {
    let t = e.regex,
        n = /[a-zA-Z]\w*/,
        r = [
            "as",
            "break",
            "class",
            "construct",
            "continue",
            "else",
            "for",
            "foreign",
            "if",
            "import",
            "in",
            "is",
            "return",
            "static",
            "var",
            "while",
        ],
        i = ["true", "false", "null"],
        a = ["this", "super"],
        s = [
            "Bool",
            "Class",
            "Fiber",
            "Fn",
            "List",
            "Map",
            "Null",
            "Num",
            "Object",
            "Range",
            "Sequence",
            "String",
            "System",
        ],
        o = [
            "-",
            "~",
            /\*/,
            "%",
            /\.\.\./,
            /\.\./,
            /\+/,
            "<<",
            ">>",
            ">=",
            "<=",
            "<",
            ">",
            /\^/,
            /!=/,
            /!/,
            /\bis\b/,
            "==",
            "&&",
            "&",
            /\|\|/,
            /\|/,
            /\?:/,
            "=",
        ],
        l = {
            relevance: 0,
            match: t.concat(/\b(?!(if|while|for|else|super)\b)/, n, /(?=\s*[({])/),
            className: "title.function",
        },
        c = {
            match: t.concat(
                t.either(t.concat(/\b(?!(if|while|for|else|super)\b)/, n), t.either(...o)),
                /(?=\s*\([^)]+\)\s*\{)/,
            ),
            className: "title.function",
            starts: {
                contains: [
                    {
                        begin: /\(/,
                        end: /\)/,
                        contains: [
                            {
                                relevance: 0,
                                scope: "params",
                                match: n,
                            },
                        ],
                    },
                ],
            },
        },
        u = {
            variants: [
                {
                    match: [/class\s+/, n, /\s+is\s+/, n],
                },
                {
                    match: [/class\s+/, n],
                },
            ],
            scope: {
                2: "title.class",
                4: "title.class.inherited",
            },
            keywords: r,
        },
        d = {
            relevance: 0,
            match: t.either(...o),
            className: "operator",
        },
        f = {
            className: "string",
            begin: /"""/,
            end: /"""/,
        },
        p = {
            className: "property",
            begin: t.concat(/\./, t.lookahead(n)),
            end: n,
            excludeBegin: !0,
            relevance: 0,
        },
        _ = {
            relevance: 0,
            match: t.concat(/\b_/, n),
            scope: "variable",
        },
        h = {
            relevance: 0,
            match: /\b[A-Z]+[a-z]+([A-Z]+[a-z]+)*/,
            scope: "title.class",
            keywords: { _: s },
        },
        m = e.C_NUMBER_MODE,
        g = {
            match: [n, /\s*/, /=/, /\s*/, /\(/, n, /\)\s*\{/],
            scope: {
                1: "title.function",
                3: "operator",
                6: "params",
            },
        },
        E = e.COMMENT(/\/\*\*/, /\*\//, {
            contains: [
                {
                    match: /@[a-z]+/,
                    scope: "doctag",
                },
                "self",
            ],
        }),
        b = {
            scope: "subst",
            begin: /%\(/,
            end: /\)/,
            contains: [m, h, l, _, d],
        },
        y = {
            scope: "string",
            begin: /"/,
            end: /"/,
            contains: [
                b,
                {
                    scope: "char.escape",
                    variants: [
                        { match: /\\\\|\\["0%abefnrtv]/ },
                        { match: /\\x[0-9A-F]{2}/ },
                        { match: /\\u[0-9A-F]{4}/ },
                        { match: /\\U[0-9A-F]{8}/ },
                    ],
                },
            ],
        };
    b.contains.push(y);
    let O = [...r, ...a, ...i],
        A = {
            relevance: 0,
            match: t.concat("\\b(?!", O.join("|"), "\\b)", /[a-zA-Z_]\w*(?:[?!]|\b)/),
            className: "variable",
        },
        v = {
            scope: "comment",
            variants: [
                {
                    begin: [/#!?/, /[A-Za-z_]+(?=\()/],
                    beginScope: {},
                    keywords: { literal: i },
                    contains: [],
                    end: /\)/,
                },
                {
                    begin: [/#!?/, /[A-Za-z_]+/],
                    beginScope: {},
                    end: /$/,
                },
            ],
        };
    return {
        name: "Wren",
        keywords: {
            keyword: r,
            "variable.language": a,
            literal: i,
        },
        contains: [v, m, y, f, E, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, h, u, g, c, l, d, _, p, A],
    };
};
