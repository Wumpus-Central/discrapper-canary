n.d(t, { A: () => A });
var i = n(64700),
    l = n(974690),
    a = n(311907),
    s = n(205184),
    r = n(21119),
    o = n(927813),
    d = n(661191),
    u = n(20805),
    c = n(583846);
let h = o.A.Millis.WEEK;
function A(e) {
    let t = (0, s.s)(e),
        n = (0, a.cf)([r.A], () => r.A.getUserAffinitiesMap());
    return i.useMemo(
        () =>
            null == t
                ? []
                : t
                      .filter(
                          (t) => (0, u.zD)(t) && (0, u.P)(t) && t.extra.application_id === e && d.default.age(t.id) < h,
                      )
                      .sort((e, t) => g(n, t) - g(n, e)),
        [t, e, n],
    );
}
let m = 30 * o.A.Seconds.MINUTE;
function g(e, t) {
    let n = t.participants;
    if (0 === n.length) return 0;
    let i = Math.max(
            ...n.map((t) => {
                let n = e.get(t);
                return (n?.communicationProbability ?? 0) + 1e-4;
            }),
        ),
        a = Math.exp(-((d.default.age(t.id) / 1e3 / m) * 0.01)),
        s = t.traits.some((e) => e.type !== l.K.DURATION_SECONDS),
        r = (0, c.I5)(t);
    return i * a * (1 + 0.6 * (s && !r ? 1 : 0));
}
