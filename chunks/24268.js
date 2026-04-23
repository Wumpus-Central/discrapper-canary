a.d(t, { A: () => E });
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
    _ = a(533406),
    f = a(652215),
    j = a(115093),
    A = a(505206),
    y = a(11039);
let C = window.GLOBAL_ENV.RELEASE_CHANNEL === j.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function E() {
    let e = (0, b.i)((e) => e.overrideApplicationId),
        t = (0, b.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        [i, j] = l.useState(C),
        [E, S] = l.useState(f.FYj),
        N = l.useCallback(
            (e) => {
                e ? t(i) : t(null);
            },
            [i, t],
        ),
        k = l.useCallback(
            (e) => {
                j(e), a && t(e);
            },
            [a, t],
        ),
        I = (0, b.i)((e) => e.showSelfActivity),
        D = (0, b.i)((e) => e.setShowSelfActivity),
        T = (0, b.i)((e) => e.recommendationApplicationIds),
        w = (0, b.i)((e) => e.setRecommendationApplicationIds),
        O = l.useCallback(
            (e) => {
                e ? w(E) : w(null);
            },
            [E, w],
        ),
        R = (0, r.bG)([v.A], () => null != v.A.testModeApplicationId),
        L = l.useCallback((e) => {
            e ? (0, o.openModal)((e) => (0, n.jsx)(g.A, { ...e })) : h.cL();
        }, []),
        M = (0, x.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: i,
            source: p.Ob.Embed,
            trackEntryPointImpression: !0,
        }),
        P = l.useCallback(
            (e) => {
                M?.(e);
            },
            [M],
        ),
        U = l.useCallback(() => {
            (0, _.B)();
        }, []);
    return (0, n.jsx)("div", {
        className: s()(A.nd, y.n),
        children: (0, n.jsxs)("div", {
            className: y.k,
            children: [
                (0, n.jsx)(d.k, { label: "Application ID", value: i, onChange: k }),
                (0, n.jsx)(c.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, n.jsx)(u.d, { label: "Override activity application ID", checked: a, onChange: N }),
                (0, n.jsx)(u.d, { label: "Show own voice activity (bypass self check)", checked: I, onChange: D }),
                (0, n.jsx)(u.d, { label: "Enable application test mode", checked: R, onChange: L }),
                (0, n.jsx)(m.$, { text: "Open Game Profile Modal", onClick: P }),
                (0, n.jsx)(m.$, { text: "Open Announcement Modal", onClick: U }),
                (0, n.jsx)(c.D, { variant: "heading-lg/normal", children: "Wishlists" }),
                (0, n.jsx)(d.k, {
                    label: "Recommendation application IDs",
                    value: E,
                    onChange: S,
                    disabled: null == T,
                }),
                (0, n.jsx)(u.d, {
                    label: "Enable recommendation application IDs override",
                    checked: null != T,
                    onChange: O,
                }),
            ],
        }),
    });
}
