i.d(t, { RQ: () => g, WQ: () => c, YW: () => u, nh: () => o });
var n = i(477900),
    l = i(582128),
    s = i(461797),
    r = i(23722);
let a = l.createContext(null);
function o(e) {
    let { children: t } = e,
        [i, o] = l.useState(!1),
        [d] = l.useState(s.B$),
        u = l.useRef(d),
        c = (0, r.A)(() => o(!0)),
        g = l.useCallback(() => o(!1), []),
        m = l.useCallback(() => u.current, []),
        x = l.useCallback((e) => {
            u.current = e;
        }, []),
        f = l.useMemo(
            () => ({
                isPremiumTryItOutView: i,
                goToPremiumTryItOut: c,
                goBack: g,
                getCurrentPreset: m,
                cachePreset: x,
            }),
            [i, c, g, m, x],
        );
    return (0, n.jsx)(a.Provider, { value: f, children: t });
}
function d() {
    let e = l.useContext(a);
    if (null == e)
        throw Error(
            "useUserProfileModalV2PremiumTryItOutContext must be used within UserProfileModalV2PremiumTryItOutContextProvider",
        );
    return e;
}
function u() {
    return d().isPremiumTryItOutView;
}
function c() {
    let { goToPremiumTryItOut: e, goBack: t } = d();
    return { goToPremiumTryItOut: e, goBack: t };
}
function g() {
    let { getCurrentPreset: e, cachePreset: t } = d(),
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
