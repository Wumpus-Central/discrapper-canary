function n(e) {
    let n = e.regex,
        r = /\b/;
    function i(e, n) {
        if (0 === e.index) return;
        let r = e.input[e.index - 1];
        if ((!(r >= '0') || !(r <= '9')) && '_' !== r) n.ignoreMatch();
    }
    let a = /[+-]?((\.\d+)|(\d+)(\.\d*)?)/,
        o = /[GM]\s*\d+(\.\d+)?/,
        s = /T\s*\d+/,
        l = /O\s*\d+/,
        u = /O<.+>/,
        c = /[ABCUVWXYZ]\s*/,
        d = /[FHIJKPQRS]\s*/;
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
                    { match: n.concat(r, o) },
                    {
                        begin: o,
                        'on:begin': i
                    },
                    { match: n.concat(r, s) },
                    {
                        begin: s,
                        'on:begin': i
                    }
                ]
            },
            {
                scope: 'symbol',
                variants: [
                    { match: n.concat(r, l) },
                    {
                        begin: l,
                        'on:begin': i
                    },
                    { match: n.concat(r, u) },
                    {
                        begin: u,
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
                    { match: n.concat(r, c, a) },
                    {
                        begin: n.concat(c, a),
                        'on:begin': i
                    }
                ]
            },
            {
                scope: 'params',
                variants: [
                    { match: n.concat(r, d, a) },
                    {
                        begin: n.concat(d, a),
                        'on:begin': i
                    }
                ]
            }
        ]
    };
}
e.exports = n;
