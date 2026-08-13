"use strict";
n.d(t, { Ay: () => f, Dp: () => I });
var i = n(582128),
    r = n(17928),
    a = n(107195),
    s = n(183636),
    l = n(927813),
    o = n(396813),
    d = n(859703);
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
});
var u = n(971276),
    _ = n(710969);
let E = 10 * l.A.Millis.MINUTE,
    A = 30 * l.A.Millis.SECOND;
function h(e, t, n) {
    if (!(!(0, u.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now()))) {
        if ("focused" !== s.A.getState()) {
            null != e && (0, o.Fr)(t, e.ttlMillis);
            return;
        }
        d.A.isFetchingQuestToDeliverByPlacement(t) || (d.A.canRefreshAd(t) && ((0, o.N1)(), (0, o.r8)(t, n)));
    }
}
function I(e) {
    return (0, r.bG)([d.A], () => d.A.questAdDecisionByPlacement.get(e) ?? null, [e]);
}
function f(e) {
    !(function (e) {
        let t = (0, i.useRef)(null),
            n = I(e),
            { enableFastAdRecheck: r } = c.useConfig({ location: "useQuestForAdPlacement" });
        (0, i.useEffect)(() => {
            null != t.current && clearInterval(t.current);
            let i = r ? A : E;
            h(n, e, "questBar-open"),
                (t.current = setInterval(() => {
                    h(d.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                }, i));
            let a = t.current;
            return () => {
                null != a && clearInterval(a);
            };
        }, [n, e, r]);
    })(e);
    let t = I(e),
        n = (0, a.Yz)(t?.creative),
        s = (0, r.bG)([d.A], () => (null != n ? (d.A.quests.get(n) ?? null) : null));
    return null == s || (0, _.Ic)(s) ? null : s;
}
