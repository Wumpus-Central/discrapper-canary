n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(397927),
    s = n(290595),
    o = n(755395),
    d = n(780964),
    c = n(840065),
    u = n(652215),
    A = n(49999),
    h = n(985018),
    _ = n(786983);
function m(e) {
    let { className: t, markAsDismissed: n } = e;
    return (0, i.jsxs)(o.A, {
        className: r()(_.Nr, t),
        children: [
            (0, i.jsx)(l.Heading, {
                variant: "heading-md/semibold",
                className: _.wx,
                children: h.intl.string(h.t.HcbnMM),
            }),
            (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                children: h.intl.format(h.t.NkFrzN, {
                    onPrivacyClick: () => {
                        (0, c.openUserSettings)(d.X.DATA_AND_PRIVACY_PANEL);
                    },
                }),
            }),
            (0, i.jsxs)("div", {
                className: _.UD,
                children: [
                    (0, i.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        fullWidth: !0,
                        text: h.intl.string(h.t.ebojgD),
                        onClick: () => (0, s.U)([u.YAq.PERSONALIZATION], []),
                    }),
                    (0, i.jsx)(l.Button, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: h.intl.string(h.t.f3Pet9),
                        onClick: () => n(A.i.DISMISS),
                    }),
                ],
            }),
        ],
    });
}
