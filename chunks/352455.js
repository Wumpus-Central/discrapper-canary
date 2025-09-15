n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(924628),
    s = n(548816),
    c = n(313789),
    u = n(518596),
    d = n(981631),
    p = n(921944),
    f = n(388032),
    h = n(466653);
function g(e) {
    let { className: t, markAsDismissed: n } = e;
    return (0, r.jsxs)(s.Z, {
        className: l()(h.card, t),
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-md/semibold",
                className: h.header,
                children: f.intl.string(f.t.HcbnMD),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: f.intl.format(f.t.NkFrzM, {
                    onPrivacyClick: () => {
                        (0, u.openUserSettings)(c.n.DATA_AND_PRIVACY_PANEL, { section: d.oAB.DATA_AND_PRIVACY });
                    },
                }),
            }),
            (0, r.jsxs)("div", {
                className: h.buttonContainer,
                children: [
                    (0, r.jsx)(a.zxk, {
                        variant: "primary",
                        size: "sm",
                        fullWidth: !0,
                        text: f.intl.string(f.t.ebojgI),
                        onClick: () => (0, o.g)([d.pjP.PERSONALIZATION], []),
                    }),
                    (0, r.jsx)(a.zxk, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: f.intl.string(f.t.f3Pet7),
                        onClick: () => n(p.L.DISMISS),
                    }),
                ],
            }),
        ],
    });
}
