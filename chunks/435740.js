function n(e) {
    let n = /([A-Za-z_][A-Za-z_0-9]*)?/,
        r = {
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
        i = {
            match: [n, /(?=\()/],
            scope: { 1: 'keyword' },
            contains: [r]
        };
    return (
        r.contains.unshift(i),
        {
            name: 'Leaf',
            contains: [
                {
                    match: [/#+/, n, /(?=\()/],
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
                    contains: [r]
                },
                {
                    match: [/#+/, n, /:?/],
                    scope: {
                        1: 'punctuation',
                        2: 'keyword',
                        3: 'punctuation'
                    }
                }
            ]
        }
    );
}
e.exports = n;
