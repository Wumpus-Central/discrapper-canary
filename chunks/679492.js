n.d(t, { Hl: () => s, NR: () => p, Pq: () => d, fC: () => c });
var u = n(477900),
    r = n(582128),
    l = n(284009),
    a = n.n(l),
    i = n(451988);
let o = r.createContext(void 0);
function s(e) {
    let { value: t, children: n } = e;
    return (0, u.jsx)(o.Provider, { value: t, children: n });
}
function c() {
    let [e, t] = r.useState(null),
        [n, u] = r.useState(null),
        [l, a] = r.useState(null),
        [o, s] = r.useState(r.createRef()),
        c = r.useCallback((e) => {
            (t(e.interactionType), u(e.interactionSource), a(e.interactionSourceId));
        }, []),
        p = r.useCallback((e) => {
            s(e);
        }, []),
        d = r.useCallback(() => {
            c({ interactionType: null, interactionSource: null, interactionSourceId: null });
        }, [c]),
        [C, S] = r.useState(!1),
        [f, k] = r.useState(null),
        [h] = r.useState(new i.Ep()),
        b = r.useCallback(
            (e) => {
                (k(e), S(!0), null === e ? h.stop() : h.start(2700, () => S(!1)));
            },
            [h],
        );
    return (
        r.useEffect(() => {
            h.stop();
        }, [h]),
        r.useMemo(
            () => ({
                interactionType: e,
                interactionSource: n,
                interactionSourceId: l,
                onInteraction: c,
                setInteractionToast: b,
                resetInteraction: d,
                showInteractionToast: C,
                interactionTypeSent: f,
                interactionPopoutTargetRef: o,
                onInteractionPopoutTargetRefChange: p,
            }),
            [c, b, n, l, C, e, f, d, o, p],
        )
    );
}
function p() {
    return r.useContext(o);
}
function d() {
    let e = p();
    return (
        a()(null != e, "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider"), e
    );
}
