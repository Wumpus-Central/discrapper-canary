n.d(t, { Z: () => h }), n(642613), n(388685);
var i = n(73800),
    r = n(884439),
    o = n(442837),
    l = n(567409),
    a = n(740589),
    s = n(752048),
    c = n(70956),
    u = n(709054),
    d = n(26033),
    p = n(561308);
let f = c.Z.Millis.WEEK;
function h(e, t) {
    let n = (0, l.N)(e),
        r = (0, o.cj)([s.Z], () => s.Z.getUserAffinitiesMap()),
        { treatmentType: c } = (0, a.ZB)(t);
    return i.useMemo(() => {
        if (null == c || null == n) return [];
        let t = n.filter((t) => (0, d.dX)(t) && (0, d.m9)(t) && t.extra.application_id === e && u.default.age(t.id) < f);
        return 'recency' === c ? t.sort((e, t) => u.default.compare(t.id, e.id)) : 'art' === c ? t.sort((e, t) => g(r, t) - g(r, e)) : t;
    }, [n, e, c, r]);
}
let m = 30 * c.Z.Seconds.MINUTE;
function g(e, t) {
    let n = t.participants;
    if (0 === n.length) return 0;
    let i = Math.max(
            ...n.map((t) => {
                var n;
                let i = e.get(t);
                return (null != (n = null == i ? void 0 : i.communicationProbability) ? n : 0) + 0.0001;
            })
        ),
        o = Math.exp(-((u.default.age(t.id) / 1000 / m) * 0.01)),
        l = t.traits.some((e) => e.type !== r.N.DURATION_SECONDS),
        a = (0, p.n2)(t);
    return i * o * (1 + 0.6 * (l && !a ? 1 : 0));
}
