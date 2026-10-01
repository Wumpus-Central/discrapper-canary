n.d(t, { kW: () => m, r8: () => v, Dp: () => p });
var r = n(582128),
    i = n(323889),
    s = n(17928),
    l = n(157695),
    u = n(107195),
    a = n(183636),
    o = n(927813),
    c = n(396813),
    d = n(859703);
let C = (0, n(945810).mj)({
        name: "2026-07-ad-recheck-interval-experiment",
        kind: "user",
        defaultConfig: { enableFastAdRecheck: !1 },
        variations: {
            1: { enableFastAdRecheck: !1 },
            2: { enableFastAdRecheck: !0 },
            3: { enableFastAdRecheck: !0 },
            4: { enableFastAdRecheck: !0 },
            5: { enableFastAdRecheck: !0 },
        },
    }),
    f = 588245 != n.j ? C : null;
var A = n(971276),
    E = n(710969);
let _ = 10 * o.A.Millis.MINUTE,
    T = 30 * o.A.Millis.SECOND;
function g(e, t, n) {
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
function m(e) {
    let t = (0, r.useRef)(null),
        n = p(e),
        { enableFastAdRecheck: i } = f.useConfig({ location: "useQuestForAdPlacement" });
    (0, r.useEffect)(() => {
        null != t.current && clearInterval(t.current);
        let r = i ? T : _;
        (g(n, e, "questBar-open"),
            (t.current = setInterval(() => {
                g(l.A.deliveryAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
            }, r)));
        let s = t.current;
        return () => {
            null != s && clearInterval(s);
        };
    }, [n, e, i]);
}
function v(e, t) {
    let n = (0, s.bG)([d.A], () => d.A.getQuestPreviewOverride(t), [t]),
        l = p(e),
        a = (0, u.Yz)(l?.creative),
        o = (0, s.bG)([d.A], () => (null != a ? (d.A.quests.get(a) ?? null) : null), [a]),
        c = null == o || (0, E.Ic)(o) ? null : o,
        C = n ?? c,
        f = (0, u.I4)(l?.creative);
    return (0, r.useMemo)(
        () =>
            null != C
                ? { type: i.p.QUEST, quest: C }
                : null != f
                  ? { type: i.p.BOUNTY, bounty: f }
                  : { type: i.p.NO_FILL },
        [C, f],
    );
}
