n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(924628),
    s = n(230711),
    c = n(548816),
    u = n(981631),
    d = n(921944),
    p = n(388032),
    h = n(894204);
function g(e) {
    let { className: t, markAsDismissed: n } = e;
    return (0, r.jsxs)(c.Z, {
        className: l()(h.card, t),
        children: [
            (0, r.jsx)(o.X6q, {
                variant: 'heading-md/semibold',
                className: h.header,
                children: p.NW.string(p.t.HcbnMD)
            }),
            (0, r.jsx)(o.Text, {
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
                    (0, r.jsx)(o.zxk, {
                        size: o.zxk.Sizes.SMALL,
                        onClick: () => (0, a.g)([u.pjP.PERSONALIZATION], []),
                        children: p.NW.string(p.t.ebojgI)
                    }),
                    (0, r.jsx)(o.zxk, {
                        color: o.zxk.Colors.PRIMARY,
                        size: o.zxk.Sizes.SMALL,
                        onClick: () => n(d.L.DISMISS),
                        look: o.zxk.Looks.LINK,
                        children: p.NW.string(p.t.f3Pet7)
                    })
                ]
            })
        ]
    });
}
