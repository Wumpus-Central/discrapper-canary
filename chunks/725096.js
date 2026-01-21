n.d(t, { Z: () => h });
var r = n(473749),
    i = n(442837),
    a = n(15624),
    o = n(70956),
    s = n(455971),
    l = n(22095),
    c = n(616022),
    u = n(704161),
    d = n(862657);
let f = 10 * o.Z.Millis.MINUTE;
function p(e) {
    return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
}
function _(e, t, n) {
    if ((0, s.C)() || p(e)) return;
    if ("focused" !== a.Z.getState()) {
        null != e && (0, l.jo)(t, e.ttlMillis);
        return;
    }
    if (c.Z.isFetchingQuestToDeliverByPlacement(t)) return;
    let { enableNewRequestBehavior: r } = u.Z.getConfig({ location: "maybeRefreshAd" });
    r && ((0, l.xw)(), (0, l.w)(t, n));
}
function h(e) {
    let t = (0, r.useRef)(null),
        n = (0, i.e7)([c.Z], () => c.Z.questDeliveryOverride),
        a = (0, i.e7)([c.Z], () => {
            var t;
            return null != (t = c.Z.questAdDecisionByPlacement.get(e)) ? t : null;
        }),
        o = (0, i.e7)([c.Z], () => {
            var e;
            return (null == a ? void 0 : a.questId) != null && null != (e = c.Z.quests.get(a.questId)) ? e : null;
        });
    return ((0, r.useEffect)(() => {
        if ((null != t.current && clearInterval(t.current), null != n)) return;
        _(a, e, "questBar-open"),
            (t.current = setInterval(() => {
                var t;
                _(null != (t = c.Z.questAdDecisionByPlacement.get(e)) ? t : null, e, "questBar-interval");
            }, f));
        let r = t.current;
        return () => {
            null != r && clearInterval(r);
        };
    }, [a, e, n]),
    null != n)
        ? n
        : null == o || (0, d.zi)(o)
          ? null
          : o;
}
