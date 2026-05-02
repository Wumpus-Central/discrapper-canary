"use strict";
n.d(t, { Hl: () => c, NR: () => _, Pq: () => f, fC: () => d });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(451988),
    l = n(8925);
let u = r.createContext(void 0);
function c(e) {
    let { value: t, children: n } = e;
    return (0, i.jsx)(u.Provider, { value: t, children: n });
}
function d() {
    let [e, t] = r.useState(null),
        [n, i] = r.useState(null),
        [s, a] = r.useState(null),
        [u, c] = r.useState(r.createRef()),
        d = r.useCallback((e) => {
            t(e.interactionType), i(e.interactionSource), a(e.interactionSourceId);
        }, []),
        _ = r.useCallback((e) => {
            c(e);
        }, []),
        f = r.useCallback(() => {
            d({ interactionType: null, interactionSource: null, interactionSourceId: null });
        }, [d]),
        [h, p] = r.useState(!1),
        [E, m] = r.useState(null),
        [g] = r.useState(new o.Ep()),
        A = r.useCallback(
            (e) => {
                m(e), p(!0), null === e ? g.stop() : g.start(l.ME, () => p(!1));
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
                interactionSourceId: s,
                onInteraction: d,
                setInteractionToast: A,
                resetInteraction: f,
                showInteractionToast: h,
                interactionTypeSent: E,
                interactionPopoutTargetRef: u,
                onInteractionPopoutTargetRefChange: _,
            }),
            [d, A, n, s, h, e, E, f, u, _],
        )
    );
}
function _() {
    return r.useContext(u);
}
function f() {
    let e = _();
    return (
        a()(null != e, "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider"), e
    );
}
