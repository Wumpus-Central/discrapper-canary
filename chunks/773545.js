n.d(t, { A: () => A });
var i = n(64700),
    a = n(17928),
    r = n(183636),
    s = n(927813),
    l = n(829219),
    o = n(859703),
    d = n(302654),
    c = n(971276),
    _ = n(710969);
let E = 10 * s.A.Millis.MINUTE;
function u(e, t, n) {
    if (!(0, c.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now())) return;
    if ("focused" !== r.A.getState()) {
        null != e && (0, l.Fr)(t, e.ttlMillis);
        return;
    }
    if (o.A.isFetchingQuestToDeliverByPlacement(t)) return;
    let { enableNewRequestBehavior: i } = d.A.getConfig({ location: "maybeRefreshAd" });
    i && ((0, l.N1)(), (0, l.r8)(t, n));
}
function A(e) {
    let t = (0, i.useRef)(null),
        n = (0, a.bG)([o.A], () => o.A.questDeliveryOverride),
        r = (0, a.bG)([o.A], () => o.A.questAdDecisionByPlacement.get(e) ?? null),
        s = (0, a.bG)([o.A], () => (r?.questId != null ? (o.A.quests.get(r.questId) ?? null) : null));
    return ((0, i.useEffect)(() => {
        if ((null != t.current && clearInterval(t.current), null != n)) return;
        u(r, e, "questBar-open"),
            (t.current = setInterval(() => {
                u(o.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
            }, E));
        let i = t.current;
        return () => {
            null != i && clearInterval(i);
        };
    }, [r, e, n]),
    null != n)
        ? n
        : null == s || (0, _.Ic)(s)
          ? null
          : s;
}
