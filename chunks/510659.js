n.d(t, {
    $m: () => d,
    NJ: () => u,
    Xo: () => f
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(512722),
    a = n.n(o),
    s = n(846519),
    l = n(810097);
let c = i.createContext(void 0);
function u(e) {
    let { value: t, children: n } = e;
    return (0, r.jsx)(c.Provider, {
        value: t,
        children: n
    });
}
function d() {
    let [e, t] = i.useState(null),
        [n, r] = i.useState(null),
        [o, a] = i.useState(null),
        c = i.useCallback((e) => {
            t(e.interactionType), r(e.interactionSource), a(e.interactionSourceId);
        }, []),
        u = i.useCallback(() => {
            c({
                interactionType: null,
                interactionSource: null,
                interactionSourceId: null
            });
        }, [c]),
        [d, f] = i.useState(!1),
        [p, _] = i.useState(null),
        [h] = i.useState(new s.V7()),
        m = i.useCallback(
            (e) => {
                _(e), f(!0), null === e ? h.stop() : h.start(l._1, () => f(!1));
            },
            [h]
        );
    return (
        i.useEffect(() => {
            h.stop();
        }, [h]),
        i.useMemo(
            () => ({
                interactionType: e,
                interactionSource: n,
                interactionSourceId: o,
                onInteraction: c,
                setInteractionToast: m,
                resetInteraction: u,
                showInteractionToast: d,
                interactionTypeSent: p
            }),
            [c, m, n, o, d, e, p, u]
        )
    );
}
function f() {
    let e = i.useContext(c);
    return a()(null != e, 'must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider'), e;
}
