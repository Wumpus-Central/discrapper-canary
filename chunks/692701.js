n.d(t, { Z: () => h }), n(642613), n(388685);
var i = n(473749),
    r = n(884439),
    a = n(442837),
    l = n(567409),
    o = n(752048),
    s = n(70956),
    c = n(709054),
    u = n(26033),
    d = n(561308);
let f = s.Z.Millis.WEEK;
function h(e) {
    let t = (0, l.N)(e),
        n = (0, a.cj)([o.Z], () => o.Z.getUserAffinitiesMap());
    return i.useMemo(
        () =>
            null == t
                ? []
                : t
                      .filter(
                          (t) =>
                              (0, u.dX)(t) && (0, u.m9)(t) && t.extra.application_id === e && c.default.age(t.id) < f,
                      )
                      .sort((e, t) => m(n, t) - m(n, e)),
        [t, e, n],
    );
}
let p = 30 * s.Z.Seconds.MINUTE;
function m(e, t) {
    let n = t.participants;
    if (0 === n.length) return 0;
    let i = Math.max(
            ...n.map((t) => {
                var n;
                let i = e.get(t);
                return (null != (n = null == i ? void 0 : i.communicationProbability) ? n : 0) + 0.0001;
            }),
        ),
        a = Math.exp(-((c.default.age(t.id) / 1000 / p) * 0.01)),
        l = t.traits.some((e) => e.type !== r.N.DURATION_SECONDS),
        o = (0, d.n2)(t);
    return i * a * (1 + 0.6 * (l && !o ? 1 : 0));
}
