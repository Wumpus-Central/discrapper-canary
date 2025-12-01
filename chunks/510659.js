n.d(t, {
    $m: () => d,
    NJ: () => u,
    Xo: () => p,
    yi: () => f,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(846519),
    l = n(810097);
let c = i.createContext(void 0);
function u(e) {
    let { value: t, children: n } = e;
    return (0, r.jsx)(c.Provider, {
        value: t,
        children: n,
    });
}
function d() {
    let [e, t] = i.useState(null),
        [n, r] = i.useState(null),
        [a, o] = i.useState(null),
        [c, u] = i.useState(i.createRef()),
        d = i.useCallback((e) => {
            t(e.interactionType), r(e.interactionSource), o(e.interactionSourceId);
        }, []),
        f = i.useCallback((e) => {
            u(e);
        }, []),
        p = i.useCallback(() => {
            d({
                interactionType: null,
                interactionSource: null,
                interactionSourceId: null,
            });
        }, [d]),
        [_, m] = i.useState(!1),
        [h, g] = i.useState(null),
        [E] = i.useState(new s.V7()),
        b = i.useCallback(
            (e) => {
                g(e), m(!0), null === e ? E.stop() : E.start(l._1, () => m(!1));
            },
            [E],
        );
    return (
        i.useEffect(() => {
            E.stop();
        }, [E]),
        i.useMemo(
            () => ({
                interactionType: e,
                interactionSource: n,
                interactionSourceId: a,
                onInteraction: d,
                setInteractionToast: b,
                resetInteraction: p,
                showInteractionToast: _,
                interactionTypeSent: h,
                interactionPopoutTargetRef: c,
                onInteractionPopoutTargetRefChange: f,
            }),
            [d, b, n, a, _, e, h, p, c, f],
        )
    );
}
function f() {
    return i.useContext(c);
}
function p() {
    let e = f();
    return (
        o()(null != e, "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider"), e
    );
}
