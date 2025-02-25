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
    l = n(483444),
    c = n(787528),
    u = n(981631),
    d = n(215023),
    f = n(388032),
    p = n(108337),
    _ = n(232474);
let h = (e) => {
        let { profileBadge: t, imageSrc: n, imageClassName: i, headerComponent: o, tooltipWordmarkComponent: a, customDescriptionComponent: l } = e;
        return (0, r.jsxs)('div', {
            className: p.tooltipContainer,
            children: [
                (0, r.jsx)('img', {
                    src: n,
                    className: i,
                    alt: ''
                }),
                (0, r.jsx)('div', {
                    className: p.tooltipWordmarkContainer,
                    children: a
                }),
                o,
                null != l
                    ? l
                    : (0, r.jsx)(s.xv, {
                          variant: 'text-xs/normal',
                          color: 'text-muted',
                          className: p.tooltipDescription,
                          children: t.description
                      })
            ]
        });
    },
    m = (e) => {
        let { profileBadge: t, tenureBadge: n } = e;
        return (0, r.jsx)(h, {
            profileBadge: t,
            headerComponent: (0, r.jsx)(s.X6, {
                variant: 'heading-xl/extrabold',
                children: f.NW.string(n.nameUnformatted)
            }),
            tooltipWordmarkComponent: (0, r.jsx)(l.Z, {
                width: 56,
                className: p.tooltipWordmark
            }),
            imageSrc: (0, c.J)(n.id)
        });
    },
    g = (e) => {
        let { profileBadge: t, viewerOwnsBadge: n = !1 } = e;
        return (0, r.jsx)(h, {
            profileBadge: t,
            headerComponent: (0, r.jsx)(s.X6, {
                variant: 'heading-xl/extrabold',
                children: 'Apprentice'
            }),
            tooltipWordmarkComponent: (0, r.jsx)(s.X6, {
                variant: 'heading-md/extrabold',
                className: o()(p.tooltipWordmark, p.orbBadge),
                children: f.NW.string(f.t.ElYQFR)
            }),
            imageSrc: _.Z,
            imageClassName: p.orbBadgeImage,
            customDescriptionComponent: n
                ? void 0
                : (0, r.jsx)(a.rU, {
                      to: { pathname: u.Z5c.COLLECTIBLES_SHOP_WITH_TAB(d.AW.ORBS) },
                      className: p.orbLink,
                      children: f.NW.string(f.t['o/NCfn'])
                  })
        });
    };
