function n(e) {
    let n = '[a-z][a-zA-Z0-9_]*',
        r = {
            className: 'string',
            begin: '\\$.{1}'
        },
        i = {
            className: 'symbol',
            begin: '#' + e.UNDERSCORE_IDENT_RE
        };
    return {
        name: 'Smalltalk',
        aliases: ['st'],
        keywords: ['self', 'super', 'nil', 'true', 'false', 'thisContext'],
        contains: [
            e.COMMENT('"', '"'),
            e.APOS_STRING_MODE,
            {
                className: 'type',
                begin: '\\b[A-Z][A-Za-z0-9_]*',
                relevance: 0
            },
            {
                begin: n + ':',
                relevance: 0
            },
            e.C_NUMBER_MODE,
            i,
            r,
            {
                begin: '\\|[ ]*' + n + '([ ]+' + n + ')*[ ]*\\|',
                returnBegin: !0,
                end: /\|/,
                illegal: /\S/,
                contains: [{ begin: '(\\|[ ]*)?' + n }]
            },
            {
                begin: '#\\(',
                end: '\\)',
                contains: [e.APOS_STRING_MODE, r, e.C_NUMBER_MODE, i]
            }
        ]
    };
}
e.exports = n;
