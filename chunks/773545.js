"use strict";
n.d(t, { A: () => h });
var r = n(64700),
    i = n(311907),
    s = n(183636),
    a = n(927813),
    o = n(829219),
    l = n(859703),
    u = n(302654),
    c = n(971276),
    d = n(710969);
let _ = 10 * a.A.Millis.MINUTE;
function f(e) {
    return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
}
function p(e, t, n) {
    if (!(0, c.s)() || f(e)) return;
    if ("focused" !== s.A.getState()) {
        null != e && (0, o.Fr)(t, e.ttlMillis);
        return;
    }
    if (l.A.isFetchingQuestToDeliverByPlacement(t)) return;
    let { enableNewRequestBehavior: r } = u.A.getConfig({ location: "maybeRefreshAd" });
    r && ((0, o.N1)(), (0, o.r8)(t, n));
}
function h(e) {
    let t = (0, r.useRef)(null),
        n = (0, i.bG)([l.A], () => l.A.questDeliveryOverride),
        s = (0, i.bG)([l.A], () => l.A.questAdDecisionByPlacement.get(e) ?? null),
        a = (0, i.bG)([l.A], () => (s?.questId != null ? (l.A.quests.get(s.questId) ?? null) : null));
    return ((0, r.useEffect)(() => {
        if ((null != t.current && clearInterval(t.current), null != n)) return;
        p(s, e, "questBar-open"),
            (t.current = setInterval(() => {
                p(l.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
            }, _));
        let r = t.current;
        return () => {
            null != r && clearInterval(r);
        };
    }, [s, e, n]),
    null != n)
        ? n
        : null == a || (0, d.Ic)(a)
          ? null
          : a;
}
