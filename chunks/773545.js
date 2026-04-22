n.d(t, { A: () => h });
var r = n(64700),
    l = n(311907),
    i = n(183636),
    a = n(927813),
    s = n(829219),
    o = n(859703),
    u = n(302654),
    c = n(971276),
    d = n(710969);
let _ = 10 * a.A.Millis.MINUTE;
function p(e, t, n) {
    if (!(0, c.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now())) return;
    if ("focused" !== i.A.getState()) {
        null != e && (0, s.Fr)(t, e.ttlMillis);
        return;
    }
    if (o.A.isFetchingQuestToDeliverByPlacement(t)) return;
    let { enableNewRequestBehavior: r } = u.A.getConfig({ location: "maybeRefreshAd" });
    r && ((0, s.N1)(), (0, s.r8)(t, n));
}
function h(e) {
    let t = (0, r.useRef)(null),
        n = (0, l.bG)([o.A], () => o.A.questDeliveryOverride),
        i = (0, l.bG)([o.A], () => o.A.questAdDecisionByPlacement.get(e) ?? null),
        a = (0, l.bG)([o.A], () => (i?.questId != null ? (o.A.quests.get(i.questId) ?? null) : null));
    return ((0, r.useEffect)(() => {
        if ((null != t.current && clearInterval(t.current), null != n)) return;
        p(i, e, "questBar-open"),
            (t.current = setInterval(() => {
                p(o.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
            }, _));
        let r = t.current;
        return () => {
            null != r && clearInterval(r);
        };
    }, [i, e, n]),
    null != n)
        ? n
        : null == a || (0, d.Ic)(a)
          ? null
          : a;
}
