n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(924628),
    s = n(230711),
    c = n(548816),
    u = n(981631),
    d = n(921944),
    p = n(388032),
    h = n(696186);
function f(e) {
    let { className: t, markAsDismissed: n } = e;
    return (0, r.jsxs)(c.Z, {
        className: l()(h.card, t),
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-md/semibold',
                className: h.header,
                children: p.NW.string(p.t.HcbnMD)
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-sm/normal',
                children: p.NW.format(p.t.NkFrzM, {
                    onPrivacyClick: () => {
                        s.Z.open(u.oAB.DATA_AND_PRIVACY);
                    }
                })
            }),
            (0, r.jsxs)('div', {
                className: h.buttonContainer,
                children: [
                    (0, r.jsx)(a.zxk, {
                        size: a.zxk.Sizes.SMALL,
                        onClick: () => (0, o.g)([u.pjP.PERSONALIZATION], []),
                        children: p.NW.string(p.t.ebojgI)
                    }),
                    (0, r.jsx)(a.zxk, {
                        color: a.zxk.Colors.PRIMARY,
                        size: a.zxk.Sizes.SMALL,
                        onClick: () => n(d.L.DISMISS),
                        look: a.zxk.Looks.LINK,
                        children: p.NW.string(p.t.f3Pet7)
                    })
                ]
            })
        ]
    });
}
