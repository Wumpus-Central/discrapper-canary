function t(e) {
    return {
        name: 'Clojure REPL',
        contains: [
            {
                className: 'meta.prompt',
                begin: /^([\w.-]+|\s*#_)?=>/,
                starts: {
                    end: /$/,
                    subLanguage: 'clojure'
                }
            }
        ]
    };
}
e.exports = t;
