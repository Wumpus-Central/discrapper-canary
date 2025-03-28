n.d(t, {
    $m: () => d,
    NJ: () => u,
    Xo: () => _,
    yi: () => f
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
        [c, u] = i.useState(null),
        d = i.useCallback((e) => {
            t(e.interactionType), r(e.interactionSource), a(e.interactionSourceId);
        }, []),
        f = i.useCallback((e) => {
            u(e);
        }, []),
        _ = i.useCallback(() => {
            d({
                interactionType: null,
                interactionSource: null,
                interactionSourceId: null
            });
        }, [d]),
        [p, h] = i.useState(!1),
        [m, g] = i.useState(null),
        [E] = i.useState(new s.V7()),
        b = i.useCallback(
            (e) => {
                g(e), h(!0), null === e ? E.stop() : E.start(l._1, () => h(!1));
            },
            [E]
        );
    return (
        i.useEffect(() => {
            E.stop();
        }, [E]),
        i.useMemo(
            () => ({
                interactionType: e,
                interactionSource: n,
                interactionSourceId: o,
                onInteraction: d,
                setInteractionToast: b,
                resetInteraction: _,
                showInteractionToast: p,
                interactionTypeSent: m,
                interactionPopoutTargetRef: c,
                onInteractionPopoutTargetRefChange: f
            }),
            [d, b, n, o, p, e, m, _, c, f]
        )
    );
}
function f() {
    return i.useContext(c);
}
function _() {
    let e = f();
    return a()(null != e, 'must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider'), e;
}
