n.d(e, { Hl: () => d, NR: () => S, Pq: () => A, fC: () => c });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    s = n.n(a),
    r = n(451988),
    u = n(8925);
let o = l.createContext(void 0);
function d(t) {
    let { value: e, children: n } = t;
    return (0, i.jsx)(o.Provider, { value: e, children: n });
}
function c() {
    let [t, e] = l.useState(null),
        [n, i] = l.useState(null),
        [a, s] = l.useState(null),
        [o, d] = l.useState(l.createRef()),
        c = l.useCallback((t) => {
            e(t.interactionType), i(t.interactionSource), s(t.interactionSourceId);
        }, []),
        S = l.useCallback((t) => {
            d(t);
        }, []),
        A = l.useCallback(() => {
            c({ interactionType: null, interactionSource: null, interactionSourceId: null });
        }, [c]),
        [T, g] = l.useState(!1),
        [h, C] = l.useState(null),
        [f] = l.useState(new r.Ep()),
        x = l.useCallback(
            (t) => {
                C(t), g(!0), null === t ? f.stop() : f.start(u.ME, () => g(!1));
            },
            [f],
        );
    return (
        l.useEffect(() => {
            f.stop();
        }, [f]),
        l.useMemo(
            () => ({
                interactionType: t,
                interactionSource: n,
                interactionSourceId: a,
                onInteraction: c,
                setInteractionToast: x,
                resetInteraction: A,
                showInteractionToast: T,
                interactionTypeSent: h,
                interactionPopoutTargetRef: o,
                onInteractionPopoutTargetRefChange: S,
            }),
            [c, x, n, a, T, t, h, A, o, S],
        )
    );
}
function S() {
    return l.useContext(o);
}
function A() {
    let t = S();
    return (
        s()(null != t, "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider"), t
    );
}
