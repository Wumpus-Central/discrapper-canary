n.d(t, { Z: () => p });
var r = n(473749),
    i = n(442837),
    a = n(70956),
    o = n(22095),
    s = n(616022),
    l = n(704161),
    c = n(862657);
let u = 10 * a.Z.Millis.MINUTE;
function d(e) {
    return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
}
function f(e, t, n) {
    if (d(e) || s.Z.isFetchingQuestToDeliverByPlacement(t)) return;
    let { enableNewRequestBehavior: r } = l.Z.getConfig({ location: "maybeRefreshAd" });
    r && ((0, o.xw)(), (0, o.w)(t, n));
}
function p(e) {
    let t = (0, r.useRef)(null),
        n = (0, i.e7)([s.Z], () => s.Z.questDeliveryOverride),
        a = (0, i.e7)([s.Z], () => {
            var t;
            return null != (t = s.Z.questAdDecisionByPlacement.get(e)) ? t : null;
        }),
        o = (0, i.e7)([s.Z], () => {
            var e;
            return (null == a ? void 0 : a.questId) != null && null != (e = s.Z.quests.get(a.questId)) ? e : null;
        });
    return ((0, r.useEffect)(() => {
        if ((null != t.current && clearInterval(t.current), null != n)) return;
        f(a, e, "questBar-open"),
            (t.current = setInterval(() => {
                var t;
                f(null != (t = s.Z.questAdDecisionByPlacement.get(e)) ? t : null, e, "questBar-interval");
            }, u));
        let r = t.current;
        return () => {
            null != r && clearInterval(r);
        };
    }, [a, e, n]),
    null != n)
        ? n
        : null == o || (0, c.zi)(o)
          ? null
          : o;
}
