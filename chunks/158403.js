n.d(t, { Ay: () => T, Dp: () => g });
var r = n(582128),
    i = n(17928),
    s = n(107195),
    l = n(183636),
    u = n(927813),
    a = n(396813),
    o = n(859703);
let c = (0, n(945810).mj)({
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
    d = 88245 != n.j ? c : null;
var C = n(971276),
    f = n(710969);
let A = 10 * u.A.Millis.MINUTE,
    E = 30 * u.A.Millis.SECOND;
function _(e, t, n) {
    if (!(!(0, C.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now()))) {
        if ("focused" !== l.A.getState()) {
            null != e && (0, a.Fr)(t, e.ttlMillis);
            return;
        }
        o.A.isFetchingQuestToDeliverByPlacement(t) || (o.A.canRefreshAd(t) && ((0, a.N1)(), (0, a.r8)(t, n)));
    }
}
function g(e) {
    return (0, i.bG)([o.A], () => o.A.questAdDecisionByPlacement.get(e) ?? null, [e]);
}
function T(e) {
    !(function (e) {
        let t = (0, r.useRef)(null),
            n = g(e),
            { enableFastAdRecheck: i } = d.useConfig({ location: "useQuestForAdPlacement" });
        (0, r.useEffect)(() => {
            null != t.current && clearInterval(t.current);
            let r = i ? E : A;
            _(n, e, "questBar-open"),
                (t.current = setInterval(() => {
                    _(o.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                }, r));
            let s = t.current;
            return () => {
                null != s && clearInterval(s);
            };
        }, [n, e, i]);
    })(e);
    let t = g(e),
        n = (0, s.Yz)(t?.creative),
        l = (0, i.bG)([o.A], () => (null != n ? (o.A.quests.get(n) ?? null) : null));
    return null == l || (0, f.Ic)(l) ? null : l;
}
