n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    s = n(924628),
    o = n(230711),
    c = n(548816),
    d = n(981631),
    u = n(921944),
    h = n(388032),
    m = n(271249);
function p(e) {
    let { className: t, markAsDismissed: n } = e;
    return (0, i.jsxs)(c.Z, {
        className: l()(m.card, t),
        children: [
            (0, i.jsx)(a.Heading, {
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
                    (0, i.jsx)(a.Button, {
                        size: a.Button.Sizes.SMALL,
                        onClick: () => (0, s.g)([d.pjP.PERSONALIZATION], []),
                        children: h.intl.string(h.t.ebojgI)
                    }),
                    (0, i.jsx)(a.Button, {
                        color: a.Button.Colors.PRIMARY,
                        size: a.Button.Sizes.SMALL,
                        onClick: () => n(u.L.DISMISS),
                        look: a.Button.Looks.LINK,
                        children: h.intl.string(h.t.f3Pet7)
                    })
                ]
            })
        ]
    });
}
