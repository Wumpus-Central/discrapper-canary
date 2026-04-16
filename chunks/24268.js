n.d(t, { A: () => b });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(271866),
    c = n(409626),
    u = n(692969),
    m = n(867099),
    h = n(147964),
    x = n(760716),
    p = n(652215),
    g = n(115093),
    f = n(505206),
    v = n(11039);
let _ = window.GLOBAL_ENV.RELEASE_CHANNEL === g.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function b() {
    let e = (0, x.i)((e) => e.overrideApplicationId),
        t = (0, x.i)((e) => e.setOverrideApplicationId),
        n = null != e,
        [s, g] = i.useState(_),
        [b, j] = i.useState(p.FYj),
        A = i.useCallback(
            (e) => {
                e ? t(s) : t(null);
            },
            [s, t],
        ),
        C = i.useCallback(
            (e) => {
                g(e), n && t(e);
            },
            [n, t],
        ),
        y = (0, x.i)((e) => e.showSelfActivity),
        S = (0, x.i)((e) => e.setShowSelfActivity),
        E = (0, x.i)((e) => e.recommendationApplicationIds),
        T = (0, x.i)((e) => e.setRecommendationApplicationIds),
        N = i.useCallback(
            (e) => {
                e ? T(b) : T(null);
            },
            [b, T],
        ),
        I = (0, r.bG)([h.A], () => null != h.A.testModeApplicationId),
        k = i.useCallback((e) => {
            e ? (0, o.qfG)((e) => (0, a.jsx)(m.A, { ...e })) : d.cL();
        }, []),
        O = (0, u.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: s,
            source: c.Ob.Embed,
            trackEntryPointImpression: !0,
        }),
        R = i.useCallback(
            (e) => {
                O?.(e);
            },
            [O],
        );
    return (0, a.jsx)("div", {
        className: l()(f.nd, v.n),
        children: (0, a.jsxs)("div", {
            className: v.k,
            children: [
                (0, a.jsx)(o.ksK, { label: "Application ID", value: s, onChange: C }),
                (0, a.jsx)(o.Heading, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, a.jsx)(o.dOG, { label: "Override activity application ID", checked: n, onChange: A }),
                (0, a.jsx)(o.dOG, { label: "Show own voice activity (bypass self check)", checked: y, onChange: S }),
                (0, a.jsx)(o.dOG, { label: "Enable application test mode", checked: I, onChange: k }),
                (0, a.jsx)(o.Button, { text: "Open Game Profile Modal", onClick: R }),
                (0, a.jsx)(o.Heading, { variant: "heading-lg/normal", children: "Wishlists" }),
                (0, a.jsx)(o.ksK, {
                    label: "Recommendation application IDs",
                    value: b,
                    onChange: j,
                    disabled: null == E,
                }),
                (0, a.jsx)(o.dOG, {
                    label: "Enable recommendation application IDs override",
                    checked: null != E,
                    onChange: N,
                }),
            ],
        }),
    });
}
