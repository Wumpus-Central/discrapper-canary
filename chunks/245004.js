n.d(t, {
    Q: () => m,
    Z: () => g
}),
    n(266796);
var r = n(200651);
n(192379);
var i = n(399606),
    o = n(481060),
    a = n(607070),
    s = n(413335),
    l = n(50101),
    c = n(388032),
    u = n(783684),
    d = n(785157),
    f = n(567949),
    p = n(552781),
    _ = n(952567),
    h = n(807159);
function m(e) {
    let { description: t, heading: n, imgSrc: i, label: a, isNewPerk: l } = e;
    return (0, r.jsxs)('div', {
        className: d.topPerksCard,
        children: [
            (0, r.jsx)('img', {
                className: d.topPerksCardImage,
                src: i,
                alt: ''
            }),
            (0, r.jsx)(o.X6q, {
                className: d.topPerksCardHeading,
                variant: 'heading-lg/extrabold',
                children: n
            }),
            (0, r.jsx)(o.Text, {
                className: d.topPerksCardDescription,
                variant: 'text-sm/normal',
                children: t
            }),
            null != a &&
                (0, r.jsxs)('div', {
                    className: d.topPerksCardLabelContainer,
                    children: [
                        (0, r.jsx)(s.Z, {}),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/semibold',
                            children: a
                        })
                    ]
                }),
            l &&
                (0, r.jsx)(o.IGR, {
                    className: d.topPerksCardNew,
                    text: c.NW.string(c.t.y2b7CA)
                })
        ]
    });
}
let g = function (e) {
    let { guild: t } = e,
        n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        s = (0, l.Ek)(t, 'GuildBoostingMarketingTopPerksCards');
    return (0, r.jsxs)('div', {
        className: d.wrapper,
        children: [
            (0, r.jsx)(o.X6q, {
                className: d.heading,
                variant: 'heading-xxl/extrabold',
                children: c.NW.string(c.t.aGdB3N)
            }),
            (0, r.jsxs)('div', {
                className: d.topPerksCards,
                children: [
                    (0, r.jsx)(m, {
                        description: c.NW.string(c.t.HTvLGh),
                        heading: c.NW.string(c.t.IpRQw8),
                        imgSrc: _,
                        label: s ? c.NW.string(u.Z.na6fmJ) : void 0
                    }),
                    (0, r.jsx)(m, {
                        description: c.NW.string(c.t.wOYbTk),
                        heading: c.NW.string(c.t.G6jZo6),
                        imgSrc: n ? p : f,
                        label: s ? c.NW.string(u.Z.dyNT9v) : void 0
                    }),
                    (0, r.jsx)(m, {
                        description: c.NW.string(c.t.yCjoUF),
                        heading: c.NW.string(c.t['/bX4Ji']),
                        imgSrc: h,
                        label: s ? c.NW.string(u.Z['8AEGEx']) : void 0
                    })
                ]
            })
        ]
    });
};
