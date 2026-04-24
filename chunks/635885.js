n.d(t, { V: () => d });
var i = n(64700),
    l = n(17928),
    a = n(290863),
    r = n(240248),
    s = n(832163),
    o = n(533562);
function d(e) {
    var t;
    let n,
        d,
        u =
            ((t = i.useMemo(() => (null != e ? [e] : []), [e])),
            (n = (0, o.W)()),
            (d = (0, l.bG)([s.A], () => s.A.getDetectableIdsToApplicationIds())),
            (0, l.bG)(
                [a.A],
                () =>
                    null != n
                        ? t.reduce((e, t) => ({ ...e, [t]: n }), {})
                        : t.reduce((e, t) => {
                              for (let n of a.A.getActivities(t)) {
                                  let i = n.application_id;
                                  if (null != i && !(0, r.uJ)(d[i])) return { ...e, [t]: d[i] };
                              }
                              return e;
                          }, {}),
                [t, d, n],
                c,
            ));
    return null != e ? (u[e] ?? null) : null;
}
function c(e, t) {
    let n = Object.keys(e),
        i = Object.keys(t);
    return n.length === i.length && n.every((n) => e[n] === t[n]);
}
