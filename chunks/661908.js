i.d(e, { A: () => f });
var n = i(64700),
    l = i(974690),
    a = i(311907),
    r = i(205184),
    s = i(21119),
    o = i(927813),
    u = i(661191),
    c = i(20805),
    d = i(583846);
let A = o.A.Millis.WEEK;
function f(t) {
    let e = (0, r.s)(t),
        i = (0, a.cf)([s.A], () => s.A.getUserAffinitiesMap());
    return n.useMemo(
        () =>
            null == e
                ? []
                : e
                      .filter(
                          (e) => (0, c.zD)(e) && (0, c.P)(e) && e.extra.application_id === t && u.default.age(e.id) < A,
                      )
                      .sort((t, e) => p(i, e) - p(i, t)),
        [e, t, i],
    );
}
let y = 30 * o.A.Seconds.MINUTE;
function p(t, e) {
    let i = e.participants;
    if (0 === i.length) return 0;
    let n = Math.max(
            ...i.map((e) => {
                let i = t.get(e);
                return (i?.communicationProbability ?? 0) + 1e-4;
            }),
        ),
        a = Math.exp(-((u.default.age(e.id) / 1e3 / y) * 0.01)),
        r = e.traits.some((t) => t.type !== l.K.DURATION_SECONDS),
        s = (0, d.I5)(e);
    return n * a * (1 + 0.6 * (r && !s ? 1 : 0));
}
