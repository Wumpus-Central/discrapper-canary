n.d(t, { Z: () => _ });
var r = n(473749),
    i = n(442837),
    a = n(15624),
    o = n(70956),
    s = n(22095),
    l = n(616022),
    c = n(704161),
    u = n(862657);
let d = 10 * o.Z.Millis.MINUTE;
function f(e) {
    return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
}
function p(e, t, n) {
    if ("focused" !== a.Z.getState() || f(e) || l.Z.isFetchingQuestToDeliverByPlacement(t)) return;
    let { enableNewRequestBehavior: r } = c.Z.getConfig({ location: "maybeRefreshAd" });
    r && ((0, s.xw)(), (0, s.w)(t, n));
}
function _(e) {
    let t = (0, r.useRef)(null),
        n = (0, i.e7)([l.Z], () => l.Z.questDeliveryOverride),
        a = (0, i.e7)([l.Z], () => {
            var t;
            return null != (t = l.Z.questAdDecisionByPlacement.get(e)) ? t : null;
        }),
        o = (0, i.e7)([l.Z], () => {
            var e;
            return (null == a ? void 0 : a.questId) != null && null != (e = l.Z.quests.get(a.questId)) ? e : null;
        });
    return ((0, r.useEffect)(() => {
        if ((null != t.current && clearInterval(t.current), null != n)) return;
        p(a, e, "questBar-open"),
            (t.current = setInterval(() => {
                var t;
                p(null != (t = l.Z.questAdDecisionByPlacement.get(e)) ? t : null, e, "questBar-interval");
            }, d));
        let r = t.current;
        return () => {
            null != r && clearInterval(r);
        };
    }, [a, e, n]),
    null != n)
        ? n
        : null == o || (0, u.zi)(o)
          ? null
          : o;
}
