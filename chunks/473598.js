"use strict";
n.d(t, { a: () => p });
var r = n(791332);
let { newline: i, paragraph: s, url: a, link: o, strong: l, u, br: c, em: d, image: _, text: f } = r.defaultRules,
    p = {
        newline: i,
        paragraph: s,
        url: a,
        link: {
            ...o,
            parse(e, t, n) {
                let r = o.parse(e, t, n);
                return (r.context = n.context), r;
            },
        },
        strong: l,
        u,
        br: c,
        em: d,
        image: _,
        hook: {
            order: f.order,
            match: (0, r.inlineRegex)(/^\$\[(.*?)\]\((\w+)\)/),
            parse(e, t, n) {
                let { context: r } = n;
                return { render: r[e[2]], content: t(e[1], n) };
            },
            react: (e, t, n) => e.render(t(e.content, n), n.key),
        },
        noparse: {
            order: f.order,
            match: (0, r.inlineRegex)(/^!!(\d+?)!!/),
            parse(e, t, n) {
                let { unsafeContext: r } = n,
                    i = r[e[1]];
                return "string" != typeof i && (i = null != i ? i.toString() : ""), { type: "text", content: i };
            },
            react: (e) => e.content,
        },
        text: f,
    };
