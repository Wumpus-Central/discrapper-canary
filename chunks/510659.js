n.d(t, {
    $m: () => d,
    NJ: () => u,
    Xo: () => _,
    yi: () => f
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(512722),
    o = n.n(a),
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
        [a, o] = i.useState(null),
        [c, u] = i.useState(null),
        d = i.useCallback((e) => {
            t(e.interactionType), r(e.interactionSource), o(e.interactionSourceId);
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
                interactionSourceId: a,
                onInteraction: d,
                setInteractionToast: b,
                resetInteraction: _,
                showInteractionToast: p,
                interactionTypeSent: m,
                interactionPopoutTargetRef: c,
                onInteractionPopoutTargetRefChange: f
            }),
            [d, b, n, a, p, e, m, _, c, f]
        )
    );
}
function f() {
    return i.useContext(c);
}
function _() {
    let e = f();
    return o()(null != e, 'must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider'), e;
}
