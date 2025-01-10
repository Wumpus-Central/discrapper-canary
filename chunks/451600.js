function n(e) {
    let n = e.COMMENT(/\(\*/, /\*\)/),
        r = {
            className: 'attribute',
            begin: /^[ ]*[a-zA-Z]+([\s_-]+[a-zA-Z]+)*/
        },
        i = {
            begin: /=/,
            end: /[.;]/,
            contains: [
                n,
                {
                    className: 'meta',
                    begin: /\?.*\?/
                },
                {
                    className: 'string',
                    variants: [
                        e.APOS_STRING_MODE,
                        e.QUOTE_STRING_MODE,
                        {
                            begin: '`',
                            end: '`'
                        }
                    ]
                }
            ]
        };
    return {
        name: 'Extended Backus-Naur Form',
        illegal: /\S/,
        contains: [n, r, i]
    };
}
e.exports = n;
