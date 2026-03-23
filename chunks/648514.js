n.d(t, { A: () => c });
var a = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(562465),
    r = n(240248),
    o = n(797952);
function d() {
    let [e, t] = i.useState(!1),
        [n, o] = i.useState(null),
        [d, c] = i.useState(null),
        u = i.useCallback(async () => {
            try {
                t(!0), o(null), c(null);
                let e = await s.Bo.put({
                    url: "/users/@me/developer-portal/onboarding",
                    body: { completed: !1 },
                    rejectWithError: !0,
                });
                o(`${e.status}: ${e.text}`);
            } catch (e) {
                c(e instanceof Error ? e.message : String(e));
            } finally {
                t(!1);
            }
        }, []);
    return (0, a.jsxs)(l.BJc, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, a.jsx)(l.$nd, { variant: "primary", onClick: u, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, r.uJ)(n) && (0, a.jsx)(l.EYj, { variant: "text-md/normal", color: "status-positive", children: n }),
            !(0, r.uJ)(d) && (0, a.jsx)(l.EYj, { variant: "text-md/normal", color: "status-danger", children: d }),
        ],
    });
}
function c() {
    return (0, a.jsx)("div", {
        className: o.n,
        children: (0, a.jsx)(l.BJc, { direction: "vertical", gap: 16, children: (0, a.jsx)(d, {}) }),
    });
}
