"use strict";
n.d(t, { A: () => f });
var r = n(64700),
    i = n(974690),
    s = n(311907),
    a = n(205184),
    o = n(21119),
    l = n(927813),
    u = n(661191),
    c = n(20805),
    d = n(583846);
let _ = l.A.Millis.WEEK;
function f(e) {
    let t = (0, a.s)(e),
        n = (0, s.cf)([o.A], () => o.A.getUserAffinitiesMap());
    return r.useMemo(
        () =>
            null == t
                ? []
                : t
                      .filter(
                          (t) => (0, c.zD)(t) && (0, c.P)(t) && t.extra.application_id === e && u.default.age(t.id) < _,
                      )
                      .sort((e, t) => g(n, t) - g(n, e)),
        [t, e, n],
    );
}
let p = 1e-4,
    h = 30 * l.A.Seconds.MINUTE,
    m = -0.01,
    E = 0.6;
function g(e, t) {
    let n = t.participants;
    if (0 === n.length) return 0;
    let r = Math.max(
            ...n.map((t) => {
                let n = e.get(t);
                return (n?.communicationProbability ?? 0) + p;
            }),
        ),
        s = Math.exp((u.default.age(t.id) / 1e3 / h) * m),
        a = t.traits.some((e) => e.type !== i.K.DURATION_SECONDS),
        o = (0, d.I5)(t);
    return r * s * (1 + E * (a && !o ? 1 : 0));
}
