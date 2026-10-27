n.d(e, { Dp: () => T, kW: () => g, r8: () => _ });
var r = n(582128),
    i = n(323889),
    s = n(17928),
    l = n(157695),
    u = n(107195),
    a = n(183636),
    o = n(927813),
    c = n(427495),
    d = n(859703),
    f = n(971276),
    A = n(977416);
let C = 30 * o.A.Millis.SECOND;
function E(t, e, n) {
    if (!(!(0, f.s)() || (null != t && t.fetchedAt + t.ttlMillis >= Date.now()))) {
        if ("focused" !== a.A.getState()) {
            null != t && (0, c.Fr)(e, t.ttlMillis);
            return;
        }
        l.A.isFetchingAdToDeliverByPlacement(e) || (l.A.canRefreshAd(e) && ((0, c.N1)(), (0, c.r8)(e, n)));
    }
}
function T(t) {
    return (0, s.bG)([l.A], () => l.A.deliveryAdDecisionByPlacement.get(t) ?? null, [t]);
}
function g(t) {
    let e = (0, r.useRef)(null),
        n = T(t);
    (0, r.useEffect)(() => {
        (null != e.current && clearInterval(e.current),
            E(n, t, "questBar-open"),
            (e.current = setInterval(() => {
                E(l.A.deliveryAdDecisionByPlacement.get(t) ?? null, t, "questBar-interval");
            }, C)));
        let r = e.current;
        return () => {
            null != r && clearInterval(r);
        };
    }, [n, t]);
}
function _(t, e) {
    let n = (0, s.bG)([d.A], () => d.A.getQuestPreviewOverride(e), [e]),
        l = T(t),
        a = (0, u.Yz)(l?.creative),
        o = (0, s.bG)([d.A], () => (null != a ? (d.A.quests.get(a) ?? null) : null), [a]),
        c = null == o || (0, A.Ic)(o) ? null : o,
        f = n ?? c,
        C = (0, u.I4)(l?.creative),
        E = (0, u.Hc)(l?.creative);
    return (0, r.useMemo)(
        () =>
            null != f
                ? { type: i.p.QUEST, quest: f }
                : null != C
                  ? { type: i.p.BOUNTY, bounty: C }
                  : null != E
                    ? { type: i.p.PLAYABLE, playable: E }
                    : { type: i.p.NO_FILL },
        [f, C, E],
    );
}
