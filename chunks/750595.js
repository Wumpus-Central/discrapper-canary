function n(e) {
    let n = {
            match: [/^\s*(?=\S)/, /[^:]+/, /:\s*/, /$/],
            className: {
                2: 'attribute',
                3: 'punctuation'
            }
        },
        r = {
            match: [/^\s*(?=\S)/, /[^:]*[^: ]/, /[ ]*:/, /[ ]/, /.*$/],
            className: {
                2: 'attribute',
                3: 'punctuation',
                5: 'string'
            }
        },
        i = {
            match: [/^\s*/, />/, /[ ]/, /.*$/],
            className: {
                2: 'punctuation',
                4: 'string'
            }
        },
        a = {
            variants: [
                {
                    match: [/^\s*/, /-/, /[ ]/, /.*$/]
                },
                {
                    match: [/^\s*/, /-$/]
                }
            ],
            className: {
                2: 'bullet',
                4: 'string'
            }
        };
    return {
        name: 'Nested Text',
        aliases: ['nt'],
        contains: [
            e.inherit(e.HASH_COMMENT_MODE, {
                begin: /^\s*(?=#)/,
                excludeBegin: !0
            }),
            a,
            i,
            n,
            r
        ]
    };
}
e.exports = n;
