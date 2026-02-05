"use strict";
n.d(t, { A: () => h });
var r = n(64700),
    i = n(311907),
    a = n(183636),
    s = n(927813),
    o = n(67486),
    l = n(829219),
    u = n(859703),
    c = n(302654),
    d = n(710969);
let _ = 10 * s.A.Millis.MINUTE;
function f(e) {
    return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
}
function p(e, t, n) {
    if ((0, o.I)() || f(e)) return;
    if ("focused" !== a.A.getState()) {
        null != e && (0, l.Fr)(t, e.ttlMillis);
        return;
    }
    if (u.A.isFetchingQuestToDeliverByPlacement(t)) return;
    let { enableNewRequestBehavior: r } = c.A.getConfig({ location: "maybeRefreshAd" });
    r && ((0, l.N1)(), (0, l.r8)(t, n));
}
function h(e) {
    let t = (0, r.useRef)(null),
        n = (0, i.bG)([u.A], () => u.A.questDeliveryOverride),
        a = (0, i.bG)([u.A], () => u.A.questAdDecisionByPlacement.get(e) ?? null),
        s = (0, i.bG)([u.A], () => (a?.questId != null ? (u.A.quests.get(a.questId) ?? null) : null));
    return ((0, r.useEffect)(() => {
        if ((null != t.current && clearInterval(t.current), null != n)) return;
        p(a, e, "questBar-open"),
            (t.current = setInterval(() => {
                p(u.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
            }, _));
        let r = t.current;
        return () => {
            null != r && clearInterval(r);
        };
    }, [a, e, n]),
    null != n)
        ? n
        : null == s || (0, d.Ic)(s)
          ? null
          : s;
}
