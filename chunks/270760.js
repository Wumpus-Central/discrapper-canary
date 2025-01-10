function n(e) {
    return {
        name: 'VBScript in HTML',
        subLanguage: 'xml',
        contains: [
            {
                begin: '<%',
                end: '%>',
                subLanguage: 'vbscript'
            }
        ]
    };
}
e.exports = n;
