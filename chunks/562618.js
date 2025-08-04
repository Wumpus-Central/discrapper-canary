n.d(t, { Y: () => u });
var r = n(255367),
    i = n(120356),
    a = n.n(i),
    o = n(756715),
    s = n(446673),
    l = n(481060),
    c = n(669546);
function u(e) {
    var t;
    let { title: n, body: i, badge: u, className: d, textLink: f, hasBottomMargin: _ = !1 } = e,
        p = null == (t = null == f ? void 0 : f.external) || t;
    return (0, r.jsxs)('div', {
        className: a()(c.header, d, { [c.hasActions]: _ }),
        children: [
            (0, r.jsxs)('div', {
                children: [
                    null != u &&
                        (0, r.jsx)('div', {
                            className: c.badgeContainer,
                            children: (0, r.jsx)(s.C, { badge: u })
                        }),
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-md/semibold',
                        className: c.title,
                        children: n
                    })
                ]
            }),
            null != i &&
                '' !== i &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    className: c.headerBody,
                    children: i
                }),
            null != f &&
                (0, r.jsx)(o.Anchor, {
                    href: f.link,
                    target: p ? '_blank' : void 0,
                    rel: p ? 'noopener noreferrer' : void 0,
                    children: (0, r.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        className: c.footerLink,
                        children: f.text
                    })
                })
        ]
    });
}
