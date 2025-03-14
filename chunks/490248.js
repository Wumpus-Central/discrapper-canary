n.d(t, {
    L7: () => m,
    r4: () => g
}),
    n(266796);
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    a = n(568611),
    s = n(793030),
    l = n(499997),
    c = n(483444),
    u = n(787528),
    d = n(981631),
    f = n(215023),
    _ = n(388032),
    p = n(607558);
let h = (e) => {
        let { assetComponent: t, tooltipWordmarkComponent: n, children: i } = e;
        return (0, r.jsxs)('div', {
            className: p.tooltipContainer,
            children: [
                t,
                (0, r.jsx)('div', {
                    className: p.tooltipWordmarkContainer,
                    children: n
                }),
                i
            ]
        });
    },
    m = (e) => {
        let { profileBadge: t, tenureBadge: n } = e;
        return (0, r.jsxs)(h, {
            assetComponent: (0, r.jsx)('img', {
                src: (0, u.J)(n.id),
                alt: ''
            }),
            tooltipWordmarkComponent: (0, r.jsx)(c.Z, {
                width: 56,
                className: p.tooltipWordmark
            }),
            children: [
                (0, r.jsx)(s.X6, {
                    variant: 'heading-xl/extrabold',
                    children: _.NW.string(n.nameUnformatted)
                }),
                (0, r.jsx)(s.xv, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: p.tooltipDescription,
                    children: t.description
                })
            ]
        });
    },
    g = (e) => {
        let { showLinkCta: t = !1 } = e;
        return (0, r.jsxs)(h, {
            assetComponent: (0, r.jsx)(l.Z, { className: p.orbBadgeAsset }),
            tooltipWordmarkComponent: (0, r.jsx)(s.X6, {
                variant: 'heading-md/extrabold',
                className: o()(p.tooltipWordmark, p.orbBadge),
                children: _.NW.string(_.t.ElYQFR)
            }),
            children: [
                (0, r.jsx)(s.X6, {
                    variant: 'heading-xl/extrabold',
                    className: t ? void 0 : p.orbHeaderWithSpacing,
                    children: _.NW.string(_.t.lTHkqa)
                }),
                t
                    ? (0, r.jsx)(a.rU, {
                          to: { pathname: d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(f.AW.ORBS) },
                          className: p.orbLink,
                          children: _.NW.string(_.t['o/NCfn'])
                      })
                    : void 0
            ]
        });
    };
