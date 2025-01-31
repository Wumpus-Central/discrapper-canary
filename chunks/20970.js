n.d(t, { j: () => p });
var i = n(477660);
let { newline: r, paragraph: a, url: s, link: o, strong: l, u, br: c, em: d, image: f, text: _ } = i.defaultRules,
    p = {
        newline: r,
        paragraph: a,
        url: s,
        link: {
            ...o,
            parse(e, t, n) {
                let i = o.parse(e, t, n);
                return (i.context = n.context), i;
            }
        },
        strong: l,
        u,
        br: c,
        em: d,
        image: f,
        hook: {
            order: _.order,
            match: (0, i.inlineRegex)(/^\$\[(.*?)\]\((\w+)\)/),
            parse(e, t, n) {
                let { context: i } = n;
                return {
                    render: i[e[2]],
                    content: t(e[1], n)
                };
            },
            react: (e, t, n) => e.render(t(e.content, n), n.key)
        },
        noparse: {
            order: _.order,
            match: (0, i.inlineRegex)(/^!!(\d+?)!!/),
            parse(e, t, n) {
                let { unsafeContext: i } = n,
                    r = i[e[1]];
                return (
                    'string' != typeof r && (r = null != r ? r.toString() : ''),
                    {
                        type: 'text',
                        content: r
                    }
                );
            },
            react: (e) => e.content
        },
        text: _
    };
