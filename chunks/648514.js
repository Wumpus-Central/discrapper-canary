a.d(t, { A: () => m });
var n = a(627968),
    l = a(64700),
    i = a(331322),
    s = a(821609),
    r = a(834730),
    o = a(562465),
    d = a(240248),
    c = a(769195);
function u() {
    let [e, t] = l.useState(!1),
        [a, c] = l.useState(null),
        [u, m] = l.useState(null),
        h = l.useCallback(async () => {
            try {
                t(!0), c(null), m(null);
                let e = await o.Bo.put({
                    url: "/users/@me/developer-portal/onboarding",
                    body: { completed: !1 },
                    rejectWithError: !0,
                });
                c(`${e.status}: ${e.text}`);
            } catch (e) {
                m(e instanceof Error ? e.message : String(e));
            } finally {
                t(!1);
            }
        }, []);
    return (0, n.jsxs)(i.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, n.jsx)(s.$, { variant: "primary", onClick: h, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, d.uJ)(a) && (0, n.jsx)(r.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, d.uJ)(u) && (0, n.jsx)(r.E, { variant: "text-md/normal", color: "status-danger", children: u }),
        ],
    });
}
function m() {
    return (0, n.jsx)("div", {
        className: c.n,
        children: (0, n.jsx)(i.B, { direction: "vertical", gap: 16, children: (0, n.jsx)(u, {}) }),
    });
}
