function n(e) {
    return {
        name: 'ERB',
        subLanguage: 'xml',
        contains: [
            e.COMMENT('<%#', '%>'),
            {
                begin: '<%[%=-]?',
                end: '[%-]?%>',
                subLanguage: 'ruby',
                excludeBegin: !0,
                excludeEnd: !0
            }
        ]
    };
}
e.exports = n;
