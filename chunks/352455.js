n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
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
    g = n(915724);
function h(e) {
    let { className: t, markAsDismissed: n } = e;
    return (0, r.jsxs)(s.Z, {
        className: l()(g.card, t),
        children: [
            (0, r.jsx)(a.Heading, {
                variant: "heading-md/semibold",
                className: g.header,
                children: f.intl.string(f.t.HcbnMM),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: f.intl.format(f.t.NkFrzN, {
                    onPrivacyClick: () => {
                        (0, u.openUserSettings)(c.n.DATA_AND_PRIVACY_PANEL, { section: d.oAB.DATA_AND_PRIVACY });
                    },
                }),
            }),
            (0, r.jsxs)("div", {
                className: g.buttonContainer,
                children: [
                    (0, r.jsx)(a.Button, {
                        variant: "primary",
                        size: "sm",
                        fullWidth: !0,
                        text: f.intl.string(f.t.ebojgD),
                        onClick: () => (0, o.g)([d.pjP.PERSONALIZATION], []),
                    }),
                    (0, r.jsx)(a.Button, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: f.intl.string(f.t.f3Pet9),
                        onClick: () => n(p.L.DISMISS),
                    }),
                ],
            }),
        ],
    });
}
