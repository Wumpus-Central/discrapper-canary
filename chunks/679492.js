n.d(e, { Hl: () => c, NR: () => S, Pq: () => A, fC: () => d });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(451988),
    u = n(8925);
let o = l.createContext(void 0);
function c(t) {
    let { value: e, children: n } = t;
    return (0, i.jsx)(o.Provider, { value: e, children: n });
}
function d() {
    let [t, e] = l.useState(null),
        [n, i] = l.useState(null),
        [a, r] = l.useState(null),
        [o, c] = l.useState(l.createRef()),
        d = l.useCallback((t) => {
            e(t.interactionType), i(t.interactionSource), r(t.interactionSourceId);
        }, []),
        S = l.useCallback((t) => {
            c(t);
        }, []),
        A = l.useCallback(() => {
            d({ interactionType: null, interactionSource: null, interactionSourceId: null });
        }, [d]),
        [T, C] = l.useState(!1),
        [f, g] = l.useState(null),
        [R] = l.useState(new s.Ep()),
        h = l.useCallback(
            (t) => {
                g(t), C(!0), null === t ? R.stop() : R.start(u.ME, () => C(!1));
            },
            [R],
        );
    return (
        l.useEffect(() => {
            R.stop();
        }, [R]),
        l.useMemo(
            () => ({
                interactionType: t,
                interactionSource: n,
                interactionSourceId: a,
                onInteraction: d,
                setInteractionToast: h,
                resetInteraction: A,
                showInteractionToast: T,
                interactionTypeSent: f,
                interactionPopoutTargetRef: o,
                onInteractionPopoutTargetRefChange: S,
            }),
            [d, h, n, a, T, t, f, A, o, S],
        )
    );
}
function S() {
    return l.useContext(o);
}
function A() {
    let t = S();
    return (
        r()(null != t, "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider"), t
    );
}
