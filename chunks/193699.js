n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(534514),
    r = n(834730),
    o = n(821609),
    c = n(290595),
    d = n(755395),
    u = n(780964),
    m = n(858897),
    A = n(652215),
    h = n(49999),
    x = n(985018),
    p = n(362288);
function g(e) {
    let { className: t, markAsDismissed: n } = e;
    return (0, i.jsxs)(d.A, {
        className: l()(p.Nr, t),
        children: [
            (0, i.jsx)(a.D, { variant: "heading-md/semibold", className: p.wx, children: x.intl.string(x.t.HcbnMM) }),
            (0, i.jsx)(r.E, {
                variant: "text-sm/normal",
                children: x.intl.format(x.t.NkFrzN, {
                    onPrivacyClick: () => {
                        (0, m.openUserSettings)(u.X.DATA_AND_PRIVACY_PANEL);
                    },
                }),
            }),
            (0, i.jsxs)("div", {
                className: p.UD,
                children: [
                    (0, i.jsx)(o.$, {
                        variant: "primary",
                        size: "sm",
                        fullWidth: !0,
                        text: x.intl.string(x.t.ebojgD),
                        onClick: () => (0, c.U)([A.YAq.PERSONALIZATION], []),
                    }),
                    (0, i.jsx)(o.$, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: x.intl.string(x.t.f3Pet9),
                        onClick: () => n(h.i.DISMISS),
                    }),
                ],
            }),
        ],
    });
}
