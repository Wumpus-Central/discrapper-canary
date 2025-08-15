n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(924628),
    s = n(230711),
    c = n(548816),
    u = n(981631),
    d = n(921944),
    p = n(388032),
    f = n(466653);
function h(e) {
    let { className: t, markAsDismissed: n } = e;
    return (0, r.jsxs)(c.Z, {
        className: l()(f.card, t),
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-md/semibold",
                className: f.header,
                children: p.intl.string(p.t.HcbnMD),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: p.intl.format(p.t.NkFrzM, {
                    onPrivacyClick: () => {
                        s.Z.open(u.oAB.DATA_AND_PRIVACY);
                    },
                }),
            }),
            (0, r.jsxs)("div", {
                className: f.buttonContainer,
                children: [
                    (0, r.jsx)(a.zxk, {
                        variant: "primary",
                        size: "sm",
                        fullWidth: !0,
                        text: p.intl.string(p.t.ebojgI),
                        onClick: () => (0, o.g)([u.pjP.PERSONALIZATION], []),
                    }),
                    (0, r.jsx)(a.zxk, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: p.intl.string(p.t.f3Pet7),
                        onClick: () => n(d.L.DISMISS),
                    }),
                ],
            }),
        ],
    });
}
