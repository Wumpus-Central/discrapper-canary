n.d(t, { Dp: () => p, kW: () => E, r8: () => g });
var r = n(582128),
    i = n(323889),
    s = n(17928),
    l = n(157695),
    u = n(107195),
    a = n(183636),
    o = n(927813),
    c = n(427495),
    d = n(859703),
    A = n(971276),
    f = n(977416);
let C = 30 * o.A.Millis.SECOND;
function T(e, t, n) {
    if (!(!(0, A.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now()))) {
        if ("focused" !== a.A.getState()) {
            null != e && (0, c.Fr)(t, e.ttlMillis);
            return;
        }
        l.A.isFetchingAdToDeliverByPlacement(t) || (l.A.canRefreshAd(t) && ((0, c.N1)(), (0, c.r8)(t, n)));
    }
}
function p(e) {
    return (0, s.bG)([l.A], () => l.A.deliveryAdDecisionByPlacement.get(e) ?? null, [e]);
}
function E(e) {
    let t = (0, r.useRef)(null),
        n = p(e);
    (0, r.useEffect)(() => {
        (null != t.current && clearInterval(t.current),
            T(n, e, "questBar-open"),
            (t.current = setInterval(() => {
                T(l.A.deliveryAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
            }, C)));
        let r = t.current;
        return () => {
            null != r && clearInterval(r);
        };
    }, [n, e]);
}
function g(e, t) {
    let n = (0, s.bG)([d.A], () => d.A.getQuestPreviewOverride(t), [t]),
        l = p(e),
        a = (0, u.Yz)(l?.creative),
        o = (0, s.bG)([d.A], () => (null != a ? (d.A.quests.get(a) ?? null) : null), [a]),
        c = null == o || (0, f.Ic)(o) ? null : o,
        A = n ?? c,
        C = (0, u.I4)(l?.creative),
        T = (0, u.Hc)(l?.creative);
    return (0, r.useMemo)(
        () =>
            null != A
                ? { type: i.p.QUEST, quest: A }
                : null != C
                  ? { type: i.p.BOUNTY, bounty: C }
                  : null != T
                    ? { type: i.p.PLAYABLE, playable: T }
                    : { type: i.p.NO_FILL },
        [A, C, T],
    );
}
