let t = "[A-Za-z$_][0-9A-Za-z$_]*",
    n = [
        "as",
        "in",
        "of",
        "if",
        "for",
        "while",
        "finally",
        "var",
        "new",
        "function",
        "do",
        "return",
        "void",
        "else",
        "break",
        "catch",
        "instanceof",
        "with",
        "throw",
        "case",
        "default",
        "try",
        "switch",
        "continue",
        "typeof",
        "delete",
        "let",
        "yield",
        "const",
        "class",
        "debugger",
        "async",
        "await",
        "static",
        "import",
        "from",
        "export",
        "extends",
        "using",
    ],
    r = ["true", "false", "null", "undefined", "NaN", "Infinity"],
    i = [
        "Object",
        "Function",
        "Boolean",
        "Symbol",
        "Math",
        "Date",
        "Number",
        "BigInt",
        "String",
        "RegExp",
        "Array",
        "Float32Array",
        "Float64Array",
        "Int8Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "Int16Array",
        "Int32Array",
        "Uint16Array",
        "Uint32Array",
        "BigInt64Array",
        "BigUint64Array",
        "Set",
        "Map",
        "WeakSet",
        "WeakMap",
        "ArrayBuffer",
        "SharedArrayBuffer",
        "Atomics",
        "DataView",
        "JSON",
        "Promise",
        "Generator",
        "GeneratorFunction",
        "AsyncFunction",
        "Reflect",
        "Proxy",
        "Intl",
        "WebAssembly",
    ],
    a = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
    s = [
        "setInterval",
        "setTimeout",
        "clearInterval",
        "clearTimeout",
        "require",
        "exports",
        "eval",
        "isFinite",
        "isNaN",
        "parseFloat",
        "parseInt",
        "decodeURI",
        "decodeURIComponent",
        "encodeURI",
        "encodeURIComponent",
        "escape",
        "unescape",
    ],
    o = [
        "arguments",
        "this",
        "super",
        "console",
        "window",
        "document",
        "localStorage",
        "sessionStorage",
        "module",
        "global",
    ],
    l = [].concat(s, i, a);
e.exports = function (e) {
    let c = e.regex,
        u = (e, { after: t }) => {
            let n = "</" + e[0].slice(1);
            return -1 !== e.input.indexOf(n, t);
        },
        d = t,
        f = "<>",
        p = "</>",
        _ = /<[A-Za-z0-9\\._:-]+\s*\/>/,
        h = /<[A-Za-z0-9\\._:-]+/,
        m = /\/[A-Za-z0-9\\._:-]+>|\/>/,
        g = (e, t) => {
            let n,
                r = e[0].length + e.index,
                i = e.input[r];
            if ("<" === i || "," === i) return void t.ignoreMatch();
            ">" !== i ||
                u(e, {
                    after: r,
                }) ||
                t.ignoreMatch();
            let a = e.input.substring(r);
            if ((n = a.match(/^\s*=/)) || ((n = a.match(/^\s+extends\s+/)) && 0 === n.index))
                return void t.ignoreMatch();
        },
        E = {
            $pattern: t,
            keyword: n,
            literal: r,
            built_in: l,
            "variable.language": o,
        },
        b = "[0-9](_?[0-9])*",
        y = `\\.(${b})`,
        O = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        A = {
            className: "number",
            variants: [
                {
                    begin: `(\\b(${O})((${y})|\\.)?|(${y}))[eE][+-]?(${b})\\b`,
                },
                {
                    begin: `\\b(${O})\\b((${y})\\b|\\.)?|(${y})\\b`,
                },
                {
                    begin: "\\b(0|[1-9](_?[0-9])*)n\\b",
                },
                {
                    begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b",
                },
                {
                    begin: "\\b0[bB][0-1](_?[0-1])*n?\\b",
                },
                {
                    begin: "\\b0[oO][0-7](_?[0-7])*n?\\b",
                },
                {
                    begin: "\\b0[0-7]+n?\\b",
                },
            ],
            relevance: 0,
        },
        v = {
            className: "subst",
            begin: "\\$\\{",
            end: "\\}",
            keywords: E,
            contains: [],
        },
        S = {
            begin: ".?html`",
            end: "",
            starts: {
                end: "`",
                returnEnd: !1,
                contains: [e.BACKSLASH_ESCAPE, v],
                subLanguage: "xml",
            },
        },
        I = {
            begin: ".?css`",
            end: "",
            starts: {
                end: "`",
                returnEnd: !1,
                contains: [e.BACKSLASH_ESCAPE, v],
                subLanguage: "css",
            },
        },
        T = {
            begin: ".?gql`",
            end: "",
            starts: {
                end: "`",
                returnEnd: !1,
                contains: [e.BACKSLASH_ESCAPE, v],
                subLanguage: "graphql",
            },
        },
        C = {
            className: "string",
            begin: "`",
            end: "`",
            contains: [e.BACKSLASH_ESCAPE, v],
        },
        N = {
            className: "comment",
            variants: [
                e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                    relevance: 0,
                    contains: [
                        {
                            begin: "(?=@[A-Za-z]+)",
                            relevance: 0,
                            contains: [
                                {
                                    className: "doctag",
                                    begin: "@[A-Za-z]+",
                                },
                                {
                                    className: "type",
                                    begin: "\\{",
                                    end: "\\}",
                                    excludeEnd: !0,
                                    excludeBegin: !0,
                                    relevance: 0,
                                },
                                {
                                    className: "variable",
                                    begin: d + "(?=\\s*(-)|$)",
                                    endsParent: !0,
                                    relevance: 0,
                                },
                                {
                                    begin: /(?=[^\n])\s/,
                                    relevance: 0,
                                },
                            ],
                        },
                    ],
                }),
                e.C_BLOCK_COMMENT_MODE,
                e.C_LINE_COMMENT_MODE,
            ],
        },
        R = [
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            S,
            I,
            T,
            C,
            {
                match: /\$\d+/,
            },
            A,
        ];
    v.contains = R.concat({
        begin: /\{/,
        end: /\}/,
        keywords: E,
        contains: ["self"].concat(R),
    });
    let w = [].concat(N, v.contains),
        P = w.concat([
            {
                begin: /(\s*)\(/,
                end: /\)/,
                keywords: E,
                contains: ["self"].concat(w),
            },
        ]),
        D = {
            className: "params",
            begin: /(\s*)\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: E,
            contains: P,
        },
        x = {
            variants: [
                {
                    match: [/class/, /\s+/, d, /\s+/, /extends/, /\s+/, c.concat(d, "(", c.concat(/\./, d), ")*")],
                    scope: {
                        1: "keyword",
                        3: "title.class",
                        5: "keyword",
                        7: "title.class.inherited",
                    },
                },
                {
                    match: [/class/, /\s+/, d],
                    scope: {
                        1: "keyword",
                        3: "title.class",
                    },
                },
            ],
        },
        L = {
            relevance: 0,
            match: c.either(
                /\bJSON/,
                /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
                /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
                /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
            ),
            className: "title.class",
            keywords: {
                _: [...i, ...a],
            },
        },
        j = {
            label: "use_strict",
            className: "meta",
            relevance: 10,
            begin: /^\s*['"]use (strict|asm)['"]/,
        },
        M = {
            variants: [
                {
                    match: [/function/, /\s+/, d, /(?=\s*\()/],
                },
                {
                    match: [/function/, /\s*(?=\()/],
                },
            ],
            className: {
                1: "keyword",
                3: "title.function",
            },
            label: "func.def",
            contains: [D],
            illegal: /%/,
        },
        k = {
            relevance: 0,
            match: /\b[A-Z][A-Z_0-9]+\b/,
            className: "variable.constant",
        };

    function U(e) {
        return c.concat("(?!", e.join("|"), ")");
    }
    let G = {
            match: c.concat(/\b/, U([...s, "super", "import"].map((e) => `${e}\\s*\\(`)), d, c.lookahead(/\s*\(/)),
            className: "title.function",
            relevance: 0,
        },
        V = {
            begin: c.concat(/\./, c.lookahead(c.concat(d, /(?![0-9A-Za-z$_(])/))),
            end: d,
            excludeBegin: !0,
            keywords: "prototype",
            className: "property",
            relevance: 0,
        },
        F = {
            match: [/get|set/, /\s+/, d, /(?=\()/],
            className: {
                1: "keyword",
                3: "title.function",
            },
            contains: [
                {
                    begin: /\(\)/,
                },
                D,
            ],
        },
        B = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>",
        H = {
            match: [/const|var|let/, /\s+/, d, /\s*/, /=\s*/, /(async\s*)?/, c.lookahead(B)],
            keywords: "async",
            className: {
                1: "keyword",
                3: "title.function",
            },
            contains: [D],
        };
    return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: E,
        exports: {
            PARAMS_CONTAINS: P,
            CLASS_REFERENCE: L,
        },
        illegal: /#(?![$_A-z])/,
        contains: [
            e.SHEBANG({
                label: "shebang",
                binary: "node",
                relevance: 5,
            }),
            j,
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            S,
            I,
            T,
            C,
            N,
            {
                match: /\$\d+/,
            },
            A,
            L,
            {
                scope: "attr",
                match: d + c.lookahead(":"),
                relevance: 0,
            },
            H,
            {
                begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                relevance: 0,
                contains: [
                    N,
                    e.REGEXP_MODE,
                    {
                        className: "function",
                        begin: B,
                        returnBegin: !0,
                        end: "\\s*=>",
                        contains: [
                            {
                                className: "params",
                                variants: [
                                    {
                                        begin: e.UNDERSCORE_IDENT_RE,
                                        relevance: 0,
                                    },
                                    {
                                        className: null,
                                        begin: /\(\s*\)/,
                                        skip: !0,
                                    },
                                    {
                                        begin: /(\s*)\(/,
                                        end: /\)/,
                                        excludeBegin: !0,
                                        excludeEnd: !0,
                                        keywords: E,
                                        contains: P,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        begin: /,/,
                        relevance: 0,
                    },
                    {
                        match: /\s+/,
                        relevance: 0,
                    },
                    {
                        variants: [
                            {
                                begin: f,
                                end: p,
                            },
                            {
                                match: _,
                            },
                            {
                                begin: h,
                                "on:begin": g,
                                end: m,
                            },
                        ],
                        subLanguage: "xml",
                        contains: [
                            {
                                begin: h,
                                end: m,
                                skip: !0,
                                contains: ["self"],
                            },
                        ],
                    },
                ],
            },
            M,
            {
                beginKeywords: "while if switch catch for",
            },
            {
                begin:
                    "\\b(?!function)" +
                    e.UNDERSCORE_IDENT_RE +
                    "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                returnBegin: !0,
                label: "func.def",
                contains: [
                    D,
                    e.inherit(e.TITLE_MODE, {
                        begin: d,
                        className: "title.function",
                    }),
                ],
            },
            {
                match: /\.\.\./,
                relevance: 0,
            },
            V,
            {
                match: "\\$" + d,
                relevance: 0,
            },
            {
                match: [/\bconstructor(?=\s*\()/],
                className: {
                    1: "title.function",
                },
                contains: [D],
            },
            G,
            k,
            x,
            F,
            {
                match: /\$[(.]/,
            },
        ],
    };
};
