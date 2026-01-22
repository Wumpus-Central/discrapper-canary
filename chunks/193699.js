n.d(t, {
    A: () => A,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(397927),
    s = n(290595),
    o = n(755395),
    c = n(780964),
    u = n(840065),
    d = n(652215),
    p = n(49999),
    f = n(985018),
    h = n(786983);

function A(e) {
    let { className: t, markAsDismissed: n } = e;
    return (0, r.jsxs)(o.A, {
        className: l()(h.Nr, t),
        children: [
            (0, r.jsx)(a.Heading, {
                variant: "heading-md/semibold",
                className: h.wx,
                children: f.intl.string(f.t.HcbnMM),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: f.intl.format(f.t.NkFrzN, {
                    onPrivacyClick: () => {
                        (0, u.openUserSettings)(c.X.DATA_AND_PRIVACY_PANEL, {
                            section: d.nc_.DATA_AND_PRIVACY,
                        });
                    },
                }),
            }),
            (0, r.jsxs)("div", {
                className: h.UD,
                children: [
                    (0, r.jsx)(a.Button, {
                        variant: "primary",
                        size: "sm",
                        fullWidth: !0,
                        text: f.intl.string(f.t.ebojgD),
                        onClick: () => (0, s.U)([d.YAq.PERSONALIZATION], []),
                    }),
                    (0, r.jsx)(a.Button, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: f.intl.string(f.t.f3Pet9),
                        onClick: () => n(p.i.DISMISS),
                    }),
                ],
            }),
        ],
    });
}
