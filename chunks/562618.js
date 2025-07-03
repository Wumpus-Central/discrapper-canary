n.d(t, { Y: () => u });
var i = n(255367),
    r = n(120356),
    s = n.n(r),
    l = n(756715),
    a = n(481060),
    o = n(388032),
    c = n(669546);
let d = (e) => {
    switch (e) {
        case 'new':
            return o.intl.string(o.t.y2b7CA);
        case 'beta':
            return o.intl.string(o.t.oW0eUV);
        case 'early_access':
            return o.intl.string(o.t.EYxi0t);
    }
};
function u(e) {
    var t;
    let { title: n, body: r, badge: o, className: u, footerLink: m } = e,
        p = null == (t = null == m ? void 0 : m.external) || t;
    return (0, i.jsxs)('div', {
        className: s()(c.header, u),
        children: [
            (0, i.jsxs)('div', {
                children: [
                    null != o &&
                        (0, i.jsx)(a.Text, {
                            variant: 'text-xs/bold',
                            className: s()(
                                c.badge,
                                ((e) => {
                                    switch (e) {
                                        case 'new':
                                            return c.badgeNew;
                                        case 'beta':
                                            return c.badgeBeta;
                                        case 'early_access':
                                            return c.badgeEarlyAccess;
                                        default:
                                            return '';
                                    }
                                })(o)
                            ),
                            children: d(o).toUpperCase()
                        }),
                    (0, i.jsx)(a.X6q, {
                        variant: 'heading-md/semibold',
                        className: c.title,
                        children: n
                    })
                ]
            }),
            null != r &&
                '' !== r &&
                (0, i.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    className: c.headerBody,
                    children: r
                }),
            null != m &&
                (0, i.jsx)(l.Anchor, {
                    href: m.link,
                    target: p ? '_blank' : void 0,
                    rel: p ? 'noopener noreferrer' : void 0,
                    children: (0, i.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        className: c.footerLink,
                        children: m.text
                    })
                })
        ]
    });
}
