n.d(t, {
    $m: () => d,
    NJ: () => c,
    Xo: () => f
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(846519),
    l = n(810097);
let u = r.createContext(void 0);
function c(e) {
    let { value: t, children: n } = e;
    return (0, i.jsx)(u.Provider, {
        value: t,
        children: n
    });
}
function d() {
    let [e, t] = r.useState(null),
        [n, i] = r.useState(null),
        [a, s] = r.useState(null),
        u = r.useCallback((e) => {
            t(e.interactionType), i(e.interactionSource), s(e.interactionSourceId);
        }, []),
        c = r.useCallback(() => {
            u({
                interactionType: null,
                interactionSource: null,
                interactionSourceId: null
            });
        }, [u]),
        [d, f] = r.useState(!1),
        [_, p] = r.useState(null),
        [h] = r.useState(new o.V7()),
        m = r.useCallback(
            (e) => {
                p(e), f(!0), null === e ? h.stop() : h.start(l._1, () => f(!1));
            },
            [h]
        );
    return (
        r.useEffect(() => {
            h.stop();
        }, [h]),
        r.useMemo(
            () => ({
                interactionType: e,
                interactionSource: n,
                interactionSourceId: a,
                onInteraction: u,
                setInteractionToast: m,
                resetInteraction: c,
                showInteractionToast: d,
                interactionTypeSent: _
            }),
            [u, m, n, a, d, e, _, c]
        )
    );
}
function f() {
    let e = r.useContext(u);
    return s()(null != e, 'must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider'), e;
}
