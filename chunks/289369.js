function n(e) {
    let n = '[ \\t\\f]*',
        r = n + '[:=]' + n,
        i = '[ \\t\\f]+',
        a = '([^\\\\:= \\t\\f\\n]|\\\\.)+',
        s = {
            end: '(' + r + '|' + i + ')',
            relevance: 0,
            starts: {
                className: 'string',
                end: /$/,
                relevance: 0,
                contains: [{ begin: '\\\\\\\\' }, { begin: '\\\\\\n' }]
            }
        };
    return {
        name: '.properties',
        disableAutodetect: !0,
        case_insensitive: !0,
        illegal: /\S/,
        contains: [
            e.COMMENT('^\\s*[!#]', '$'),
            {
                returnBegin: !0,
                variants: [{ begin: a + r }, { begin: a + i }],
                contains: [
                    {
                        className: 'attr',
                        begin: a,
                        endsParent: !0
                    }
                ],
                starts: s
            },
            {
                className: 'attr',
                begin: a + n + '$'
            }
        ]
    };
}
e.exports = n;
