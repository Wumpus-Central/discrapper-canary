n.d(t, { Z: () => m }), n(642613), n(388685);
var i = n(73800),
    r = n(884439),
    o = n(442837),
    l = n(740589),
    a = n(752048),
    s = n(70956),
    c = n(709054),
    u = n(26033),
    d = n(897674),
    p = n(561308),
    h = n(206583);
let f = s.Z.Millis.WEEK;
function m(e, t) {
    let n = (0, d.Z)({
            id: h.YN.GLOBAL_FEED,
            unrankedEntries: !0
        }),
        r = (0, o.cj)([a.Z], () => a.Z.getUserAffinitiesMap()),
        { treatmentType: s } = (0, l.ZB)(t);
    return i.useMemo(() => {
        if (null == s || null == n) return [];
        let t = n.filter((t) => (0, u.dX)(t) && (0, u.m9)(t) && t.extra.application_id === e && c.default.age(t.id) < f);
        return 'recency' === s ? t.sort((e, t) => c.default.compare(t.id, e.id)) : 'art' === s ? t.sort((e, t) => y(r, t) - y(r, e)) : t;
    }, [n, e, s, r]);
}
let g = 30 * s.Z.Seconds.MINUTE;
function y(e, t) {
    let n = t.participants;
    if (0 === n.length) return 0;
    let i = Math.max(
            ...n.map((t) => {
                var n;
                let i = e.get(t);
                return (null != (n = null == i ? void 0 : i.communicationProbability) ? n : 0) + 0.0001;
            })
        ),
        o = Math.exp(-((c.default.age(t.id) / 1000 / g) * 0.01)),
        l = t.traits.some((e) => e.type !== r.N.DURATION_SECONDS),
        a = (0, p.n2)(t);
    return i * o * (1 + 0.6 * (l && !a ? 1 : 0));
}
