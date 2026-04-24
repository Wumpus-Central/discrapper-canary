n.d(t, { Hl: () => d, NR: () => _, Pq: () => h, fC: () => u });
var i = n(627968),
    r = n(64700),
    a = n(284009),
    l = n.n(a),
    o = n(451988),
    s = n(8925);
let c = r.createContext(void 0);
function d(e) {
    let { value: t, children: n } = e;
    return (0, i.jsx)(c.Provider, { value: t, children: n });
}
function u() {
    let [e, t] = r.useState(null),
        [n, i] = r.useState(null),
        [a, l] = r.useState(null),
        [c, d] = r.useState(r.createRef()),
        u = r.useCallback((e) => {
            t(e.interactionType), i(e.interactionSource), l(e.interactionSourceId);
        }, []),
        _ = r.useCallback((e) => {
            d(e);
        }, []),
        h = r.useCallback(() => {
            u({ interactionType: null, interactionSource: null, interactionSourceId: null });
        }, [u]),
        [p, f] = r.useState(!1),
        [m, A] = r.useState(null),
        [g] = r.useState(new o.Ep()),
        b = r.useCallback(
            (e) => {
                A(e), f(!0), null === e ? g.stop() : g.start(s.ME, () => f(!1));
            },
            [g],
        );
    return (
        r.useEffect(() => {
            g.stop();
        }, [g]),
        r.useMemo(
            () => ({
                interactionType: e,
                interactionSource: n,
                interactionSourceId: a,
                onInteraction: u,
                setInteractionToast: b,
                resetInteraction: h,
                showInteractionToast: p,
                interactionTypeSent: m,
                interactionPopoutTargetRef: c,
                onInteractionPopoutTargetRefChange: _,
            }),
            [u, b, n, a, p, e, m, h, c, _],
        )
    );
}
function _() {
    return r.useContext(c);
}
function h() {
    let e = _();
    return (
        l()(null != e, "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider"), e
    );
}
