e.exports = function (e) {
    let t = '[ \\t\\f]*',
        n = t + '[:=]' + t,
        r = '[ \\t\\f]+',
        i = '([^\\\\:= \\t\\f\\n]|\\\\.)+',
        o = {
            end: '(' + n + '|' + r + ')',
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
                variants: [{ begin: i + n }, { begin: i + r }],
                contains: [
                    {
                        className: 'attr',
                        begin: i,
                        endsParent: !0
                    }
                ],
                starts: o
            },
            {
                className: 'attr',
                begin: i + t + '$'
            }
        ]
    };
};
