n.d(e, { Hl: () => S, NR: () => d, Pq: () => A, fC: () => u });
var i = n(627968),
    a = n(64700),
    l = n(284009),
    s = n.n(l),
    r = n(451988),
    o = n(8925);
let c = a.createContext(void 0);
function S(t) {
    let { value: e, children: n } = t;
    return (0, i.jsx)(c.Provider, { value: e, children: n });
}
function u() {
    let [t, e] = a.useState(null),
        [n, i] = a.useState(null),
        [l, s] = a.useState(null),
        [c, S] = a.useState(a.createRef()),
        u = a.useCallback((t) => {
            e(t.interactionType), i(t.interactionSource), s(t.interactionSourceId);
        }, []),
        d = a.useCallback((t) => {
            S(t);
        }, []),
        A = a.useCallback(() => {
            u({ interactionType: null, interactionSource: null, interactionSourceId: null });
        }, [u]),
        [T, C] = a.useState(!1),
        [R, x] = a.useState(null),
        [h] = a.useState(new r.Ep()),
        p = a.useCallback(
            (t) => {
                x(t), C(!0), null === t ? h.stop() : h.start(o.ME, () => C(!1));
            },
            [h],
        );
    return (
        a.useEffect(() => {
            h.stop();
        }, [h]),
        a.useMemo(
            () => ({
                interactionType: t,
                interactionSource: n,
                interactionSourceId: l,
                onInteraction: u,
                setInteractionToast: p,
                resetInteraction: A,
                showInteractionToast: T,
                interactionTypeSent: R,
                interactionPopoutTargetRef: c,
                onInteractionPopoutTargetRefChange: d,
            }),
            [u, p, n, l, T, t, R, A, c, d],
        )
    );
}
function d() {
    return a.useContext(c);
}
function A() {
    let t = d();
    return (
        s()(null != t, "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider"), t
    );
}
