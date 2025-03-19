n.d(t, {
    L7: () => _,
    r4: () => p
}),
    n(266796);
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    a = n(793030),
    s = n(499997),
    l = n(483444),
    c = n(787528),
    u = n(388032),
    d = n(607558);
let f = (e) => {
        let { assetComponent: t, tooltipWordmarkComponent: n, children: i } = e;
        return (0, r.jsxs)('div', {
            className: d.tooltipContainer,
            children: [
                t,
                (0, r.jsx)('div', {
                    className: d.tooltipWordmarkContainer,
                    children: n
                }),
                i
            ]
        });
    },
    _ = (e) => {
        let { profileBadge: t, tenureBadge: n } = e;
        return (0, r.jsxs)(f, {
            assetComponent: (0, r.jsx)('img', {
                src: (0, c.J)(n.id),
                alt: ''
            }),
            tooltipWordmarkComponent: (0, r.jsx)(l.Z, {
                width: 56,
                className: d.tooltipWordmark
            }),
            children: [
                (0, r.jsx)(a.X6, {
                    variant: 'heading-xl/extrabold',
                    children: u.NW.string(n.nameUnformatted)
                }),
                (0, r.jsx)(a.xv, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: d.tooltipDescription,
                    children: t.description
                })
            ]
        });
    },
    p = (e) => {
        let { showSubtext: t = !1 } = e;
        return (0, r.jsxs)(f, {
            assetComponent: (0, r.jsx)(s.Z, { className: d.orbBadgeAsset }),
            tooltipWordmarkComponent: (0, r.jsx)(a.X6, {
                variant: 'heading-md/extrabold',
                className: o()(d.tooltipWordmark, d.orbBadge),
                children: u.NW.string(u.t.ElYQFR)
            }),
            children: [
                (0, r.jsx)(a.X6, {
                    variant: 'heading-xl/extrabold',
                    className: t ? void 0 : d.orbHeaderWithSpacing,
                    children: u.NW.string(u.t.lTHkqa)
                }),
                t
                    ? (0, r.jsx)(a.xv, {
                          variant: 'text-xs/normal',
                          className: d.orbSubtext,
                          children: u.NW.string(u.t.MEV0GB)
                      })
                    : void 0
            ]
        });
    };
