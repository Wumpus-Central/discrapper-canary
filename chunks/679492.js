n.d(t, { Hl: () => c, NR: () => S, Pq: () => A, fC: () => d });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(451988),
    u = n(8925);
let o = l.createContext(void 0);
function c(e) {
    let { value: t, children: n } = e;
    return (0, i.jsx)(o.Provider, { value: t, children: n });
}
function d() {
    let [e, t] = l.useState(null),
        [n, i] = l.useState(null),
        [a, r] = l.useState(null),
        [o, c] = l.useState(l.createRef()),
        d = l.useCallback((e) => {
            t(e.interactionType), i(e.interactionSource), r(e.interactionSourceId);
        }, []),
        S = l.useCallback((e) => {
            c(e);
        }, []),
        A = l.useCallback(() => {
            d({ interactionType: null, interactionSource: null, interactionSourceId: null });
        }, [d]),
        [T, C] = l.useState(!1),
        [g, f] = l.useState(null),
        [R] = l.useState(new s.Ep()),
        h = l.useCallback(
            (e) => {
                f(e), C(!0), null === e ? R.stop() : R.start(u.ME, () => C(!1));
            },
            [R],
        );
    return (
        l.useEffect(() => {
            R.stop();
        }, [R]),
        l.useMemo(
            () => ({
                interactionType: e,
                interactionSource: n,
                interactionSourceId: a,
                onInteraction: d,
                setInteractionToast: h,
                resetInteraction: A,
                showInteractionToast: T,
                interactionTypeSent: g,
                interactionPopoutTargetRef: o,
                onInteractionPopoutTargetRefChange: S,
            }),
            [d, h, n, a, T, e, g, A, o, S],
        )
    );
}
function S() {
    return l.useContext(o);
}
function A() {
    let e = S();
    return (
        r()(null != e, "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider"), e
    );
}
