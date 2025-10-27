n.d(t, { Z: () => f }), n(642613), n(388685);
var i = n(647438),
    r = n(884439),
    l = n(442837),
    o = n(567409),
    a = n(740589),
    s = n(752048),
    u = n(70956),
    c = n(709054),
    d = n(26033),
    p = n(561308);
let h = u.Z.Millis.WEEK;
function f(e, t) {
    let n = (0, o.N)(e),
        r = (0, l.cj)([s.Z], () => s.Z.getUserAffinitiesMap()),
        { treatmentType: u } = (0, a.ZB)(t);
    return i.useMemo(() => {
        if (null == u || null == n) return [];
        let t = n.filter(
            (t) => (0, d.dX)(t) && (0, d.m9)(t) && t.extra.application_id === e && c.default.age(t.id) < h,
        );
        return "recency" === u
            ? t.sort((e, t) => c.default.compare(t.id, e.id))
            : "art" === u
              ? t.sort((e, t) => g(r, t) - g(r, e))
              : t;
    }, [n, e, u, r]);
}
let m = 30 * u.Z.Seconds.MINUTE;
function g(e, t) {
    let n = t.participants;
    if (0 === n.length) return 0;
    let i = Math.max(
            ...n.map((t) => {
                var n;
                let i = e.get(t);
                return (null != (n = null == i ? void 0 : i.communicationProbability) ? n : 0) + 0.0001;
            }),
        ),
        l = Math.exp(-((c.default.age(t.id) / 1000 / m) * 0.01)),
        o = t.traits.some((e) => e.type !== r.N.DURATION_SECONDS),
        a = (0, p.n2)(t);
    return i * l * (1 + 0.6 * (o && !a ? 1 : 0));
}
