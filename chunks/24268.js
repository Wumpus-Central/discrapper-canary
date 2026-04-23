a.d(t, { A: () => C });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(311907),
    o = a(192308),
    d = a(292666),
    c = a(534514),
    u = a(243721),
    m = a(821609),
    h = a(271866),
    p = a(409626),
    x = a(692969),
    g = a(867099),
    v = a(147964),
    b = a(760716),
    _ = a(652215),
    f = a(115093),
    j = a(505206),
    A = a(11039);
let y = window.GLOBAL_ENV.RELEASE_CHANNEL === f.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function C() {
    let e = (0, b.i)((e) => e.overrideApplicationId),
        t = (0, b.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        [i, f] = l.useState(y),
        [C, E] = l.useState(_.FYj),
        S = l.useCallback(
            (e) => {
                e ? t(i) : t(null);
            },
            [i, t],
        ),
        N = l.useCallback(
            (e) => {
                f(e), a && t(e);
            },
            [a, t],
        ),
        k = (0, b.i)((e) => e.showSelfActivity),
        I = (0, b.i)((e) => e.setShowSelfActivity),
        D = (0, b.i)((e) => e.recommendationApplicationIds),
        T = (0, b.i)((e) => e.setRecommendationApplicationIds),
        w = l.useCallback(
            (e) => {
                e ? T(C) : T(null);
            },
            [C, T],
        ),
        O = (0, r.bG)([v.A], () => null != v.A.testModeApplicationId),
        R = l.useCallback((e) => {
            e ? (0, o.openModal)((e) => (0, n.jsx)(g.A, { ...e })) : h.cL();
        }, []),
        L = (0, x.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: i,
            source: p.Ob.Embed,
            trackEntryPointImpression: !0,
        }),
        M = l.useCallback(
            (e) => {
                L?.(e);
            },
            [L],
        );
    return (0, n.jsx)("div", {
        className: s()(j.nd, A.n),
        children: (0, n.jsxs)("div", {
            className: A.k,
            children: [
                (0, n.jsx)(d.k, { label: "Application ID", value: i, onChange: N }),
                (0, n.jsx)(c.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, n.jsx)(u.d, { label: "Override activity application ID", checked: a, onChange: S }),
                (0, n.jsx)(u.d, { label: "Show own voice activity (bypass self check)", checked: k, onChange: I }),
                (0, n.jsx)(u.d, { label: "Enable application test mode", checked: O, onChange: R }),
                (0, n.jsx)(m.$, { text: "Open Game Profile Modal", onClick: M }),
                (0, n.jsx)(c.D, { variant: "heading-lg/normal", children: "Wishlists" }),
                (0, n.jsx)(d.k, {
                    label: "Recommendation application IDs",
                    value: C,
                    onChange: E,
                    disabled: null == D,
                }),
                (0, n.jsx)(u.d, {
                    label: "Enable recommendation application IDs override",
                    checked: null != D,
                    onChange: w,
                }),
            ],
        }),
    });
}
