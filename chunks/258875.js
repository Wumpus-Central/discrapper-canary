e.exports = function (e) {
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
};
