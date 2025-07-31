n.d(t, { Y: () => d });
var i = n(255367),
    r = n(120356),
    s = n.n(r),
    a = n(756715),
    l = n(446673),
    o = n(481060),
    c = n(669546);
function d(e) {
    var t;
    let { title: n, body: r, badge: d, className: u, textLink: m, hasBottomMargin: p = !1 } = e,
        g = null == (t = null == m ? void 0 : m.external) || t;
    return (0, i.jsxs)('div', {
        className: s()(c.header, u, { [c.hasActions]: p }),
        children: [
            (0, i.jsxs)('div', {
                children: [
                    null != d &&
                        (0, i.jsx)('div', {
                            className: c.badgeContainer,
                            children: (0, i.jsx)(l.C, { badge: d })
                        }),
                    (0, i.jsx)(o.X6q, {
                        variant: 'heading-md/semibold',
                        className: c.title,
                        children: n
                    })
                ]
            }),
            null != r &&
                '' !== r &&
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    className: c.headerBody,
                    children: r
                }),
            null != m &&
                (0, i.jsx)(a.Anchor, {
                    href: m.link,
                    target: g ? '_blank' : void 0,
                    rel: g ? 'noopener noreferrer' : void 0,
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        className: c.footerLink,
                        children: m.text
                    })
                })
        ]
    });
}
