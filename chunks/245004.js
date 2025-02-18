n.d(t, {
    Q: () => m,
    Z: () => g
});
var i = n(200651);
n(192379);
var r = n(399606),
    a = n(481060),
    s = n(607070),
    o = n(413335),
    l = n(50101),
    u = n(388032),
    c = n(947494),
    d = n(389980),
    f = n(567949),
    _ = n(552781),
    p = n(952567),
    h = n(807159);
function m(e) {
    let { description: t, heading: n, imgSrc: r, label: s, isNewPerk: l } = e;
    return (0, i.jsxs)('div', {
        className: d.topPerksCard,
        children: [
            (0, i.jsx)('img', {
                className: d.topPerksCardImage,
                src: r,
                alt: ''
            }),
            (0, i.jsx)(a.X6q, {
                className: d.topPerksCardHeading,
                variant: 'heading-lg/extrabold',
                children: n
            }),
            (0, i.jsx)(a.Text, {
                className: d.topPerksCardDescription,
                variant: 'text-sm/normal',
                children: t
            }),
            null != s &&
                (0, i.jsxs)('div', {
                    className: d.topPerksCardLabelContainer,
                    children: [
                        (0, i.jsx)(o.Z, {}),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            children: s
                        })
                    ]
                }),
            l &&
                (0, i.jsx)(a.IGR, {
                    className: d.topPerksCardNew,
                    text: u.intl.string(u.t.y2b7CA)
                })
        ]
    });
}
let g = function (e) {
    let { guild: t } = e,
        n = (0, r.e7)([s.Z], () => s.Z.useReducedMotion),
        o = (0, l.Ek)(t, 'GuildBoostingMarketingTopPerksCards');
    return (0, i.jsxs)('div', {
        className: d.wrapper,
        children: [
            (0, i.jsx)(a.X6q, {
                className: d.heading,
                variant: 'heading-xxl/extrabold',
                children: u.intl.string(u.t.aGdB3N)
            }),
            (0, i.jsxs)('div', {
                className: d.topPerksCards,
                children: [
                    (0, i.jsx)(m, {
                        description: u.intl.string(u.t.HTvLGh),
                        heading: u.intl.string(u.t.IpRQw8),
                        imgSrc: p,
                        label: o ? u.intl.string(c.Z.na6fmJ) : void 0
                    }),
                    (0, i.jsx)(m, {
                        description: u.intl.string(u.t.wOYbTk),
                        heading: u.intl.string(u.t.G6jZo6),
                        imgSrc: n ? _ : f,
                        label: o ? u.intl.string(c.Z.dyNT9v) : void 0
                    }),
                    (0, i.jsx)(m, {
                        description: u.intl.string(u.t.yCjoUF),
                        heading: u.intl.string(u.t['/bX4Ji']),
                        imgSrc: h,
                        label: o ? u.intl.string(c.Z['8AEGEx']) : void 0
                    })
                ]
            })
        ]
    });
};
