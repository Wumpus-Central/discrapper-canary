n.d(t, { A: () => v });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(271866),
    c = n(409626),
    u = n(692969),
    m = n(912615),
    h = n(147964),
    p = n(760716),
    x = n(188275),
    g = n(652215),
    _ = n(930821),
    f = n(265296);
function v() {
    let e = (0, p.i)((e) => e.overrideApplicationId),
        t = (0, p.i)((e) => e.setOverrideApplicationId),
        n = null != e,
        [l, v] = i.useState(x.XR),
        [b, j] = i.useState(g.FYj),
        A = i.useCallback(
            (e) => {
                e ? t(l) : t(null);
            },
            [l, t],
        ),
        C = i.useCallback(
            (e) => {
                v(e), n && t(e);
            },
            [n, t],
        ),
        y = (0, p.i)((e) => e.showSelfActivity),
        T = (0, p.i)((e) => e.setShowSelfActivity),
        S = (0, p.i)((e) => e.recommendationApplicationIds),
        E = (0, p.i)((e) => e.setRecommendationApplicationIds),
        N = i.useCallback(
            (e) => {
                e ? E(b) : E(null);
            },
            [b, E],
        ),
        I = (0, r.bG)([h.A], () => null != h.A.testModeApplicationId),
        k = i.useCallback((e) => {
            e ? (0, o.qfG)((e) => (0, a.jsx)(m.A, { ...e })) : d.cL();
        }, []),
        R = (0, u.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: l,
            source: c.Ob.Embed,
            trackEntryPointImpression: !0,
        }),
        O = i.useCallback(
            (e) => {
                R?.(e);
            },
            [R],
        );
    return (0, a.jsx)("div", {
        className: s()(_.nd, f.n),
        children: (0, a.jsxs)("div", {
            className: f.k,
            children: [
                (0, a.jsx)(o.ksK, { label: "Application ID", value: l, onChange: C }),
                (0, a.jsx)(o.Heading, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, a.jsx)(o.dOG, { label: "Override activity application ID", checked: n, onChange: A }),
                (0, a.jsx)(o.dOG, { label: "Show own voice activity (bypass self check)", checked: y, onChange: T }),
                (0, a.jsx)(o.dOG, { label: "Enable application test mode", checked: I, onChange: k }),
                (0, a.jsx)(o.Button, { text: "Open Game Profile Modal", onClick: O }),
                (0, a.jsx)(o.Heading, { variant: "heading-lg/normal", children: "Wishlists" }),
                (0, a.jsx)(o.ksK, {
                    label: "Recommendation application IDs",
                    value: b,
                    onChange: j,
                    disabled: null == S,
                }),
                (0, a.jsx)(o.dOG, {
                    label: "Enable recommendation application IDs override",
                    checked: null != S,
                    onChange: N,
                }),
            ],
        }),
    });
}
