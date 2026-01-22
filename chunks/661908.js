n.d(t, { A: () => h }), n(638769), n(896048);
var i = n(64700),
    r = n(974690),
    l = n(311907),
    a = n(205184),
    o = n(21119),
    s = n(927813),
    c = n(661191),
    u = n(20805),
    d = n(583846);
let p = s.A.Millis.WEEK;
function h(e) {
    let t = (0, a.s)(e),
        n = (0, l.cf)([o.A], () => o.A.getUserAffinitiesMap());
    return i.useMemo(
        () =>
            null == t
                ? []
                : t
                      .filter(
                          (t) => (0, u.zD)(t) && (0, u.P)(t) && t.extra.application_id === e && c.default.age(t.id) < p,
                      )
                      .sort((e, t) => m(n, t) - m(n, e)),
        [t, e, n],
    );
}
let f = 30 * s.A.Seconds.MINUTE;
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
        l = Math.exp(-((c.default.age(t.id) / 1000 / f) * 0.01)),
        a = t.traits.some((e) => e.type !== r.K.DURATION_SECONDS),
        o = (0, d.I5)(t);
    return i * l * (1 + 0.6 * (a && !o ? 1 : 0));
}
