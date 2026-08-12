"use strict";
n.d(t, { Ay: () => I, Dp: () => h });
var i = n(582128),
    r = n(17928),
    a = n(183636),
    s = n(927813),
    l = n(352774),
    o = n(859703);
let d = (0, n(945810).mj)({
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
});
var c = n(971276),
    u = n(710969);
let _ = 10 * s.A.Millis.MINUTE,
    E = 30 * s.A.Millis.SECOND;
function A(e, t, n) {
    if (!(!(0, c.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now()))) {
        if ("focused" !== a.A.getState()) {
            null != e && (0, l.Fr)(t, e.ttlMillis);
            return;
        }
        o.A.isFetchingQuestToDeliverByPlacement(t) || (o.A.canRefreshAd(t) && ((0, l.N1)(), (0, l.r8)(t, n)));
    }
}
function h(e) {
    return (0, r.bG)([o.A], () => o.A.questAdDecisionByPlacement.get(e) ?? null, [e]);
}
function I(e) {
    !(function (e) {
        let t = (0, i.useRef)(null),
            n = h(e),
            { enableFastAdRecheck: r } = d.useConfig({ location: "useQuestForAdPlacement" });
        (0, i.useEffect)(() => {
            null != t.current && clearInterval(t.current);
            let i = r ? E : _;
            A(n, e, "questBar-open"),
                (t.current = setInterval(() => {
                    A(o.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                }, i));
            let a = t.current;
            return () => {
                null != a && clearInterval(a);
            };
        }, [n, e, r]);
    })(e);
    let t = h(e),
        n = (0, r.bG)([o.A], () => (t?.questId != null ? (o.A.quests.get(t.questId) ?? null) : null));
    return null == n || (0, u.Ic)(n) ? null : n;
}
