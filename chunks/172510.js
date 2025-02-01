function t(e) {
    let t = e.regex,
        n = /\b/;
    function i(e, t) {
        if (0 === e.index) return;
        let n = e.input[e.index - 1];
        (!(n >= '0') || !(n <= '9')) && '_' !== n && t.ignoreMatch();
    }
    let r = /[+-]?((\.\d+)|(\d+)(\.\d*)?)/,
        a = /[GM]\s*\d+(\.\d+)?/,
        s = /T\s*\d+/,
        o = /O\s*\d+/,
        l = /O<.+>/,
        u = /[ABCUVWXYZ]\s*/,
        c = /[FHIJKPQRS]\s*/;
    return {
        name: 'G-code (ISO 6983)',
        aliases: ['nc'],
        case_insensitive: !0,
        disableAutodetect: !0,
        keywords: {
            $pattern: /[A-Z]+|%/,
            keyword: ['THEN', 'ELSE', 'ENDIF', 'IF', 'GOTO', 'DO', 'WHILE', 'WH', 'END', 'CALL', 'SUB', 'ENDSUB', 'EQ', 'NE', 'LT', 'GT', 'LE', 'GE', 'AND', 'OR', 'XOR', '%'],
            built_in: ['ATAN', 'ABS', 'ACOS', 'ASIN', 'COS', 'EXP', 'FIX', 'FUP', 'ROUND', 'LN', 'SIN', 'SQRT', 'TAN', 'EXISTS']
        },
        contains: [
            e.COMMENT(/\(/, /\)/),
            e.COMMENT(/;/, /$/),
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            e.C_NUMBER_MODE,
            {
                scope: 'title.function',
                variants: [
                    { match: t.concat(n, a) },
                    {
                        begin: a,
                        'on:begin': i
                    },
                    { match: t.concat(n, s) },
                    {
                        begin: s,
                        'on:begin': i
                    }
                ]
            },
            {
                scope: 'symbol',
                variants: [
                    { match: t.concat(n, o) },
                    {
                        begin: o,
                        'on:begin': i
                    },
                    { match: t.concat(n, l) },
                    {
                        begin: l,
                        'on:begin': i
                    },
                    { match: /\*\s*\d+\s*$/ }
                ]
            },
            {
                scope: 'operator',
                match: /^N\s*\d+/
            },
            {
                scope: 'variable',
                match: /-?#\s*\d+/
            },
            {
                scope: 'property',
                variants: [
                    { match: t.concat(n, u, r) },
                    {
                        begin: t.concat(u, r),
                        'on:begin': i
                    }
                ]
            },
            {
                scope: 'params',
                variants: [
                    { match: t.concat(n, c, r) },
                    {
                        begin: t.concat(c, r),
                        'on:begin': i
                    }
                ]
            }
        ]
    };
}
e.exports = t;
