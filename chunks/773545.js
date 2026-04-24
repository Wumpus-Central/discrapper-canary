n.d(t, { A: () => f });
var r = n(64700),
    i = n(17928),
    l = n(183636),
    a = n(927813),
    s = n(829219),
    u = n(859703),
    o = n(302654),
    d = n(971276),
    c = n(710969);
let p = 10 * a.A.Millis.MINUTE;
function A(e, t, n) {
    if (!(0, d.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now())) return;
    if ("focused" !== l.A.getState()) {
        null != e && (0, s.Fr)(t, e.ttlMillis);
        return;
    }
    if (u.A.isFetchingQuestToDeliverByPlacement(t)) return;
    let { enableNewRequestBehavior: r } = o.A.getConfig({ location: "maybeRefreshAd" });
    r && ((0, s.N1)(), (0, s.r8)(t, n));
}
function f(e) {
    let t = (0, r.useRef)(null),
        n = (0, i.bG)([u.A], () => u.A.questDeliveryOverride),
        l = (0, i.bG)([u.A], () => u.A.questAdDecisionByPlacement.get(e) ?? null),
        a = (0, i.bG)([u.A], () => (l?.questId != null ? (u.A.quests.get(l.questId) ?? null) : null));
    return ((0, r.useEffect)(() => {
        if ((null != t.current && clearInterval(t.current), null != n)) return;
        A(l, e, "questBar-open"),
            (t.current = setInterval(() => {
                A(u.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
            }, p));
        let r = t.current;
        return () => {
            null != r && clearInterval(r);
        };
    }, [l, e, n]),
    null != n)
        ? n
        : null == a || (0, c.Ic)(a)
          ? null
          : a;
}
