n.d(t, {
    Hl: () => u,
    NR: () => f,
    Pq: () => p,
    fC: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(451988),
    l = n(8925);
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
        [a, s] = i.useState(null),
        [c, u] = i.useState(i.createRef()),
        d = i.useCallback((e) => {
            t(e.interactionType), r(e.interactionSource), s(e.interactionSourceId);
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
        [_, h] = i.useState(!1),
        [m, g] = i.useState(null),
        [E] = i.useState(new o.Ep()),
        b = i.useCallback(
            (e) => {
                g(e), h(!0), null === e ? E.stop() : E.start(l.ME, () => h(!1));
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
                interactionTypeSent: m,
                interactionPopoutTargetRef: c,
                onInteractionPopoutTargetRefChange: f,
            }),
            [d, b, n, a, _, e, m, p, c, f],
        )
    );
}
function f() {
    return i.useContext(c);
}
function p() {
    let e = f();
    return (
        s()(null != e, "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider"), e
    );
}
