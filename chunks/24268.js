n.d(t, { A: () => m });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(397927),
    o = n(760716),
    d = n(188275),
    c = n(661251),
    u = n(508474);
function m() {
    let e = (0, o.i)((e) => e.overrideApplicationId),
        t = (0, o.i)((e) => e.setOverrideApplicationId),
        n = null != e,
        [s, m] = i.useState(d.XR),
        h = i.useCallback(
            (e) => {
                e ? t(s) : t(null);
            },
            [s, t],
        ),
        x = i.useCallback(
            (e) => {
                m(e), n && t(e);
            },
            [n, t],
        ),
        p = (0, o.i)((e) => e.showSelfActivity),
        g = (0, o.i)((e) => e.setShowSelfActivity);
    return (0, a.jsx)("div", {
        className: l()(c.nd, u.n),
        children: (0, a.jsxs)("div", {
            className: u.k,
            children: [
                (0, a.jsx)(r.Heading, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, a.jsx)(r.dOG, { label: "Override activity application ID", checked: n, onChange: h }),
                (0, a.jsx)(r.ksK, { label: "Application ID", value: s, onChange: x, disabled: !n }),
                (0, a.jsx)(r.dOG, { label: "Show own voice activity (bypass self check)", checked: p, onChange: g }),
            ],
        }),
    });
}
