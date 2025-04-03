e.exports = function (e) {
    return {
        name: 'Node REPL',
        contains: [
            {
                className: 'meta.prompt',
                starts: {
                    end: / |$/,
                    starts: {
                        end: '$',
                        subLanguage: 'javascript'
                    }
                },
                variants: [{ begin: /^>(?=[ ]|$)/ }, { begin: /^\.\.\.(?=[ ]|$)/ }]
            }
        ]
    };
};
