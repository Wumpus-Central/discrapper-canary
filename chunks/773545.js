n.d(t, {
    A: () => h,
});
var r = n(64700),
    i = n(311907),
    a = n(183636),
    s = n(927813),
    o = n(67486),
    l = n(829219),
    c = n(859703),
    u = n(302654),
    d = n(710969);
let f = 10 * s.A.Millis.MINUTE;

function p(e) {
    return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
}

function _(e, t, n) {
    if ((0, o.I)() || p(e)) return;
    if ("focused" !== a.A.getState()) {
        null != e && (0, l.Fr)(t, e.ttlMillis);
        return;
    }
    if (c.A.isFetchingQuestToDeliverByPlacement(t)) return;
    let { enableNewRequestBehavior: r } = u.A.getConfig({
        location: "maybeRefreshAd",
    });
    r && ((0, l.N1)(), (0, l.r8)(t, n));
}

function h(e) {
    let t = (0, r.useRef)(null),
        n = (0, i.bG)([c.A], () => c.A.questDeliveryOverride),
        a = (0, i.bG)([c.A], () => {
            var t;
            return null != (t = c.A.questAdDecisionByPlacement.get(e)) ? t : null;
        }),
        s = (0, i.bG)([c.A], () => {
            var e;
            return (null == a ? void 0 : a.questId) != null && null != (e = c.A.quests.get(a.questId)) ? e : null;
        });
    return ((0, r.useEffect)(() => {
        if ((null != t.current && clearInterval(t.current), null != n)) return;
        _(a, e, "questBar-open"),
            (t.current = setInterval(() => {
                var t;
                _(null != (t = c.A.questAdDecisionByPlacement.get(e)) ? t : null, e, "questBar-interval");
            }, f));
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
