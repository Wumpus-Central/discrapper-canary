e.exports = function (e) {
    let t = /([A-Za-z_][A-Za-z_0-9]*)?/,
        n = {
            scope: 'params',
            begin: /\(/,
            end: /\)(?=\:?)/,
            endsParent: !0,
            relevance: 7,
            contains: [
                {
                    scope: 'string',
                    begin: '"',
                    end: '"'
                },
                {
                    scope: 'keyword',
                    match: 'true|false|in'
                },
                {
                    scope: 'variable',
                    match: /[A-Za-z_][A-Za-z_0-9]*/
                },
                {
                    scope: 'operator',
                    match: /\+|\-|\*|\/|\%|\=\=|\=|\!|\>|\<|\&\&|\|\|/
                }
            ]
        },
        r = {
            match: [t, /(?=\()/],
            scope: { 1: 'keyword' },
            contains: [n]
        };
    return (
        n.contains.unshift(r),
        {
            name: 'Leaf',
            contains: [
                {
                    match: [/#+/, t, /(?=\()/],
                    scope: {
                        1: 'punctuation',
                        2: 'keyword'
                    },
                    starts: {
                        contains: [
                            {
                                match: /\:/,
                                scope: 'punctuation'
                            }
                        ]
                    },
                    contains: [n]
                },
                {
                    match: [/#+/, t, /:?/],
                    scope: {
                        1: 'punctuation',
                        2: 'keyword',
                        3: 'punctuation'
                    }
                }
            ]
        }
    );
};
