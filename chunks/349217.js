function n(e) {
    let n = e.regex;
    return {
        name: 'Diff',
        aliases: ['patch'],
        contains: [
            {
                className: 'meta',
                relevance: 10,
                match: n.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/, /^\*\*\* +\d+,\d+ +\*\*\*\*$/, /^--- +\d+,\d+ +----$/)
            },
            {
                className: 'comment',
                variants: [
                    {
                        begin: n.either(/Index: /, /^index/, /={3,}/, /^-{3}/, /^\*{3} /, /^\+{3}/, /^diff --git/),
                        end: /$/
                    },
                    { match: /^\*{15}$/ }
                ]
            },
            {
                className: 'addition',
                begin: /^\+/,
                end: /$/
            },
            {
                className: 'deletion',
                begin: /^-/,
                end: /$/
            },
            {
                className: 'addition',
                begin: /^!/,
                end: /$/
            }
        ]
    };
}
e.exports = n;
