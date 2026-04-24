e.exports = function (e) {
    let t = e.regex,
        a = /\b/;
    function n(e, t) {
        if (0 === e.index) return;
        let a = e.input[e.index - 1];
        (a >= "0" && a <= "9") || ("_" !== a && t.ignoreMatch());
    }
    let r = /[+-]?((\.\d+)|(\d+)(\.\d*)?)/,
        i = /[GM]\s*\d+(\.\d+)?/,
        o = /T\s*\d+/,
        s = /O\s*\d+/,
        l = /O<.+>/,
        c = /[ABCUVWXYZ]\s*/,
        _ = /[FHIJKPQRS]\s*/;
    return {
        name: "G-code (ISO 6983)",
        aliases: ["nc"],
        case_insensitive: !0,
        disableAutodetect: !0,
        keywords: {
            $pattern: /[A-Z]+|%/,
            keyword: [
                "THEN",
                "ELSE",
                "ENDIF",
                "IF",
                "GOTO",
                "DO",
                "WHILE",
                "WH",
                "END",
                "CALL",
                "SUB",
                "ENDSUB",
                "EQ",
                "NE",
                "LT",
                "GT",
                "LE",
                "GE",
                "AND",
                "OR",
                "XOR",
                "%",
            ],
            built_in: [
                "ATAN",
                "ABS",
                "ACOS",
                "ASIN",
                "COS",
                "EXP",
                "FIX",
                "FUP",
                "ROUND",
                "LN",
                "SIN",
                "SQRT",
                "TAN",
                "EXISTS",
            ],
        },
        contains: [
            e.COMMENT(/\(/, /\)/),
            e.COMMENT(/;/, /$/),
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            e.C_NUMBER_MODE,
            {
                scope: "title.function",
                variants: [
                    { match: t.concat(a, i) },
                    { begin: i, "on:begin": n },
                    { match: t.concat(a, o) },
                    { begin: o, "on:begin": n },
                ],
            },
            {
                scope: "symbol",
                variants: [
                    { match: t.concat(a, s) },
                    { begin: s, "on:begin": n },
                    { match: t.concat(a, l) },
                    { begin: l, "on:begin": n },
                    { match: /\*\s*\d+\s*$/ },
                ],
            },
            { scope: "operator", match: /^N\s*\d+/ },
            { scope: "variable", match: /-?#\s*\d+/ },
            { scope: "property", variants: [{ match: t.concat(a, c, r) }, { begin: t.concat(c, r), "on:begin": n }] },
            { scope: "params", variants: [{ match: t.concat(a, _, r) }, { begin: t.concat(_, r), "on:begin": n }] },
        ],
    };
};
