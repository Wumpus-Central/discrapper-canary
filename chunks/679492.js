n.d(t, { Hl: () => l, NR: () => d, Pq: () => f, fC: () => c });
var r = n(477900),
    u = n(582128),
    o = n(284009),
    i = n.n(o),
    a = n(451988);
let s = u.createContext(void 0);
function l(e) {
    let { value: t, children: n } = e;
    return (0, r.jsx)(s.Provider, { value: t, children: n });
}
function c() {
    let [e, t] = u.useState(null),
        [n, r] = u.useState(null),
        [o, i] = u.useState(null),
        [s, l] = u.useState(u.createRef()),
        c = u.useCallback((e) => {
            (t(e.interactionType), r(e.interactionSource), i(e.interactionSourceId));
        }, []),
        d = u.useCallback((e) => {
            l(e);
        }, []),
        f = u.useCallback(() => {
            c({ interactionType: null, interactionSource: null, interactionSourceId: null });
        }, [c]),
        [p, C] = u.useState(!1),
        [S, k] = u.useState(null),
        [v] = u.useState(new a.Ep()),
        y = u.useCallback(
            (e) => {
                (k(e), C(!0), null === e ? v.stop() : v.start(2700, () => C(!1)));
            },
            [v],
        );
    return (
        u.useEffect(() => {
            v.stop();
        }, [v]),
        u.useMemo(
            () => ({
                interactionType: e,
                interactionSource: n,
                interactionSourceId: o,
                onInteraction: c,
                setInteractionToast: y,
                resetInteraction: f,
                showInteractionToast: p,
                interactionTypeSent: S,
                interactionPopoutTargetRef: s,
                onInteractionPopoutTargetRefChange: d,
            }),
            [c, y, n, o, p, e, S, f, s, d],
        )
    );
}
function d() {
    return u.useContext(s);
}
function f() {
    let e = d();
    return (
        i()(null != e, "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider"), e
    );
}
