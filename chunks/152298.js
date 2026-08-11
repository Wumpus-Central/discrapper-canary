i.d(t, { RQ: () => c, nh: () => a, qh: () => d });
var n = i(477900),
    l = i(582128),
    s = i(461797);
let r = l.createContext(null);
function a(e) {
    let { children: t } = e,
        [i, a] = l.useState(!1),
        [o] = l.useState(s.B$),
        d = l.useRef(o),
        c = l.useCallback(() => a(!0), []),
        u = l.useCallback(() => a(!1), []),
        g = l.useCallback(() => d.current, []),
        m = l.useCallback((e) => {
            d.current = e;
        }, []),
        x = l.useMemo(
            () => ({
                isPremiumTryItOutView: i,
                goToPremiumTryItOut: c,
                goBack: u,
                getCurrentPreset: g,
                cachePreset: m,
            }),
            [i, c, u, g, m],
        );
    return (0, n.jsx)(r.Provider, { value: x, children: t });
}
function o() {
    let e = l.useContext(r);
    if (null == e)
        throw Error(
            "useUserProfileModalV2PremiumTryItOutContext must be used within UserProfileModalV2PremiumTryItOutContextProvider",
        );
    return e;
}
function d() {
    let { isPremiumTryItOutView: e, goToPremiumTryItOut: t, goBack: i } = o();
    return { isPremiumTryItOutView: e, goToPremiumTryItOut: t, goBack: i };
}
function c() {
    let { getCurrentPreset: e, cachePreset: t } = o(),
        [i, n] = l.useState(e);
    return {
        preset: i,
        setPreset: l.useCallback(
            (e) => {
                t(e), n(e);
            },
            [t],
        ),
    };
}
