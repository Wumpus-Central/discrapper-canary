"use strict";
n.d(t, { Hl: () => c, NR: () => _, Pq: () => f, fC: () => d });
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(451988),
    l = n(8925);
let u = i.createContext(void 0);
function c(e) {
    let { value: t, children: n } = e;
    return (0, r.jsx)(u.Provider, { value: t, children: n });
}
function d() {
    let [e, t] = i.useState(null),
        [n, r] = i.useState(null),
        [a, s] = i.useState(null),
        [u, c] = i.useState(i.createRef()),
        d = i.useCallback((e) => {
            t(e.interactionType), r(e.interactionSource), s(e.interactionSourceId);
        }, []),
        _ = i.useCallback((e) => {
            c(e);
        }, []),
        f = i.useCallback(() => {
            d({ interactionType: null, interactionSource: null, interactionSourceId: null });
        }, [d]),
        [p, h] = i.useState(!1),
        [m, g] = i.useState(null),
        [E] = i.useState(new o.Ep()),
        A = i.useCallback(
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
                setInteractionToast: A,
                resetInteraction: f,
                showInteractionToast: p,
                interactionTypeSent: m,
                interactionPopoutTargetRef: u,
                onInteractionPopoutTargetRefChange: _,
            }),
            [d, A, n, a, p, e, m, f, u, _],
        )
    );
}
function _() {
    return i.useContext(u);
}
function f() {
    let e = _();
    return (
        s()(null != e, "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider"), e
    );
}
