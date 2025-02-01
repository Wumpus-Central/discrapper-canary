function t(e) {
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
e.exports = t;
