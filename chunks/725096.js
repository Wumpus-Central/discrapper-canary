n.d(t, { Z: () => _ });
var r = n(647438),
    i = n(442837),
    a = n(70956),
    o = n(22095),
    s = n(509212),
    l = n(569984),
    c = n(704161);
let u = 10 * a.Z.Millis.MINUTE;
function d(e) {
    return null != e && e.fetchedAt + e.ttlMillis >= Date.now();
}
function f(e, t, n) {
    if (d(e) || l.Z.isFetchingQuestToDeliverByPlacement(t)) return;
    let { enableNewRequestBehavior: r } = c.Z.getConfig({ location: "maybeRefreshAd" });
    r && ((0, o.xw)(), (0, o.w)(t, n));
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
        f(a, e, "questBar-open"),
            (t.current = setInterval(() => {
                var t;
                f(null != (t = l.Z.questAdDecisionByPlacement.get(e)) ? t : null, e, "questBar-interval");
            }, u));
        let r = t.current;
        return () => {
            null != r && clearInterval(r);
        };
    }, [a, e, n]),
    null != n)
        ? n
        : null == o || (0, s.zi)(o)
          ? null
          : o;
}
