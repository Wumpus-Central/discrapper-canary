n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(924628),
    o = n(230711),
    c = n(548816),
    d = n(981631),
    u = n(921944),
    h = n(388032),
    m = n(947349);
function p(e) {
    let { className: t, markAsDismissed: n } = e;
    return (0, i.jsxs)(c.Z, {
        className: r()(m.card, t),
        children: [
            (0, i.jsx)(a.X6q, {
                variant: 'heading-md/semibold',
                className: m.header,
                children: h.intl.string(h.t.HcbnMD)
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/normal',
                children: h.intl.format(h.t.NkFrzM, {
                    onPrivacyClick: () => {
                        o.Z.open(d.oAB.DATA_AND_PRIVACY);
                    }
                })
            }),
            (0, i.jsxs)('div', {
                className: m.buttonContainer,
                children: [
                    (0, i.jsx)(a.zxk, {
                        size: a.zxk.Sizes.SMALL,
                        onClick: () => (0, s.g)([d.pjP.PERSONALIZATION], []),
                        children: h.intl.string(h.t.ebojgI)
                    }),
                    (0, i.jsx)(a.zxk, {
                        color: a.zxk.Colors.PRIMARY,
                        size: a.zxk.Sizes.SMALL,
                        onClick: () => n(u.L.DISMISS),
                        look: a.zxk.Looks.LINK,
                        children: h.intl.string(h.t.f3Pet7)
                    })
                ]
            })
        ]
    });
}
