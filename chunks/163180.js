e.exports = function (e) {
    let t = '[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*',
        n = '\\|[^]*?\\|',
        r = '(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?',
        i = {
            className: 'literal',
            begin: '\\b(t{1}|nil)\\b'
        },
        a = {
            className: 'number',
            variants: [
                {
                    begin: r,
                    relevance: 0
                },
                { begin: '#(b|B)[0-1]+(/[0-1]+)?' },
                { begin: '#(o|O)[0-7]+(/[0-7]+)?' },
                { begin: '#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?' },
                {
                    begin: '#(c|C)\\(' + r + ' +' + r,
                    end: '\\)'
                }
            ]
        },
        o = e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
        s = e.COMMENT(';', '$', { relevance: 0 }),
        l = {
            begin: '\\*',
            end: '\\*'
        },
        c = {
            className: 'symbol',
            begin: '[:&]' + t
        },
        u = {
            begin: t,
            relevance: 0
        },
        d = { begin: n },
        f = {
            begin: '\\(',
            end: '\\)',
            contains: ['self', i, o, a, u]
        },
        _ = {
            contains: [a, o, l, c, f, u],
            variants: [
                {
                    begin: "['`]\\(",
                    end: '\\)'
                },
                {
                    begin: '\\(quote ',
                    end: '\\)',
                    keywords: { name: 'quote' }
                },
                { begin: "'" + n }
            ]
        },
        p = {
            variants: [{ begin: "'" + t }, { begin: "#'" + t + '(::' + t + ')*' }]
        },
        h = {
            begin: '\\(\\s*',
            end: '\\)'
        },
        m = {
            endsWithParent: !0,
            relevance: 0
        };
    return (
        (h.contains = [
            {
                className: 'name',
                variants: [
                    {
                        begin: t,
                        relevance: 0
                    },
                    { begin: n }
                ]
            },
            m
        ]),
        (m.contains = [_, p, h, i, a, o, s, l, c, d, u]),
        {
            name: 'Lisp',
            illegal: /\S/,
            contains: [a, e.SHEBANG(), i, o, s, _, p, h, u]
        }
    );
};
