n.d(e, { Dp: () => E, kW: () => g, r8: () => _ });
var r = n(582128),
    i = n(323889),
    s = n(17928),
    l = n(157695),
    u = n(107195),
    a = n(183636),
    o = n(927813),
    c = n(396813),
    d = n(859703),
    f = n(971276),
    C = n(977416);
let A = 30 * o.A.Millis.SECOND;
function T(t, e, n) {
    if (!(!(0, f.s)() || (null != t && t.fetchedAt + t.ttlMillis >= Date.now()))) {
        if ("focused" !== a.A.getState()) {
            null != t && (0, c.Fr)(e, t.ttlMillis);
            return;
        }
        l.A.isFetchingAdToDeliverByPlacement(e) || (l.A.canRefreshAd(e) && ((0, c.N1)(), (0, c.r8)(e, n)));
    }
}
function E(t) {
    return (0, s.bG)([l.A], () => l.A.deliveryAdDecisionByPlacement.get(t) ?? null, [t]);
}
function g(t) {
    let e = (0, r.useRef)(null),
        n = E(t);
    (0, r.useEffect)(() => {
        (null != e.current && clearInterval(e.current),
            T(n, t, "questBar-open"),
            (e.current = setInterval(() => {
                T(l.A.deliveryAdDecisionByPlacement.get(t) ?? null, t, "questBar-interval");
            }, A)));
        let r = e.current;
        return () => {
            null != r && clearInterval(r);
        };
    }, [n, t]);
}
function _(t, e) {
    let n = (0, s.bG)([d.A], () => d.A.getQuestPreviewOverride(e), [e]),
        l = E(t),
        a = (0, u.Yz)(l?.creative),
        o = (0, s.bG)([d.A], () => (null != a ? (d.A.quests.get(a) ?? null) : null), [a]),
        c = null == o || (0, C.Ic)(o) ? null : o,
        f = n ?? c,
        A = (0, u.I4)(l?.creative);
    return (0, r.useMemo)(
        () =>
            null != f
                ? { type: i.p.QUEST, quest: f }
                : null != A
                  ? { type: i.p.BOUNTY, bounty: A }
                  : { type: i.p.NO_FILL },
        [f, A],
    );
}
