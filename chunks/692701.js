n.d(t, { Z: () => p }), n(642613), n(388685);
var i = n(473749),
    r = n(884439),
    l = n(442837),
    a = n(567409),
    o = n(752048),
    s = n(70956),
    u = n(709054),
    c = n(26033),
    d = n(561308);
let h = s.Z.Millis.WEEK;
function p(e) {
    let t = (0, a.N)(e),
        n = (0, l.cj)([o.Z], () => o.Z.getUserAffinitiesMap());
    return i.useMemo(
        () =>
            null == t
                ? []
                : t
                      .filter(
                          (t) =>
                              (0, c.dX)(t) && (0, c.m9)(t) && t.extra.application_id === e && u.default.age(t.id) < h,
                      )
                      .sort((e, t) => m(n, t) - m(n, e)),
        [t, e, n],
    );
}
let f = 30 * s.Z.Seconds.MINUTE;
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
        l = Math.exp(-((u.default.age(t.id) / 1000 / f) * 0.01)),
        a = t.traits.some((e) => e.type !== r.N.DURATION_SECONDS),
        o = (0, d.n2)(t);
    return i * l * (1 + 0.6 * (a && !o ? 1 : 0));
}
