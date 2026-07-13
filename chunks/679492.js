"use strict";
n.d(t, { Hl: () => c, NR: () => _, Pq: () => E, fC: () => u });
var i = n(627968),
    r = n(64700),
    a = n(284009),
    s = n.n(a),
    l = n(451988),
    o = n(8925);
let d = r.createContext(void 0);
function c(e) {
    let { value: t, children: n } = e;
    return (0, i.jsx)(d.Provider, { value: t, children: n });
}
function u() {
    let [e, t] = r.useState(null),
        [n, i] = r.useState(null),
        [a, s] = r.useState(null),
        [d, c] = r.useState(r.createRef()),
        u = r.useCallback((e) => {
            t(e.interactionType), i(e.interactionSource), s(e.interactionSourceId);
        }, []),
        _ = r.useCallback((e) => {
            c(e);
        }, []),
        E = r.useCallback(() => {
            u({ interactionType: null, interactionSource: null, interactionSourceId: null });
        }, [u]),
        [A, h] = r.useState(!1),
        [I, f] = r.useState(null),
        [p] = r.useState(new l.Ep()),
        T = r.useCallback(
            (e) => {
                f(e), h(!0), null === e ? p.stop() : p.start(o.ME, () => h(!1));
            },
            [p],
        );
    return (
        r.useEffect(() => {
            p.stop();
        }, [p]),
        r.useMemo(
            () => ({
                interactionType: e,
                interactionSource: n,
                interactionSourceId: a,
                onInteraction: u,
                setInteractionToast: T,
                resetInteraction: E,
                showInteractionToast: A,
                interactionTypeSent: I,
                interactionPopoutTargetRef: d,
                onInteractionPopoutTargetRefChange: _,
            }),
            [u, T, n, a, A, e, I, E, d, _],
        )
    );
}
function _() {
    return r.useContext(d);
}
function E() {
    let e = _();
    return (
        s()(null != e, "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider"), e
    );
}
