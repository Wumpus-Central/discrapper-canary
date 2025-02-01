function t(e) {
    let t = '[ \\t\\f]*',
        n = t + '[:=]' + t,
        i = '[ \\t\\f]+',
        r = '([^\\\\:= \\t\\f\\n]|\\\\.)+',
        a = {
            end: '(' + n + '|' + i + ')',
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
                variants: [{ begin: r + n }, { begin: r + i }],
                contains: [
                    {
                        className: 'attr',
                        begin: r,
                        endsParent: !0
                    }
                ],
                starts: a
            },
            {
                className: 'attr',
                begin: r + t + '$'
            }
        ]
    };
}
e.exports = t;
