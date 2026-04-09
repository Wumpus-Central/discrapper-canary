n.d(t, { V: () => c });
var i = n(64700),
    l = n(311907),
    s = n(290863),
    a = n(240248),
    r = n(832163),
    o = n(533562);
function c(e) {
    var t;
    let n,
        c,
        u =
            ((t = i.useMemo(() => (null != e ? [e] : []), [e])),
            (n = (0, o.W)()),
            (c = (0, l.bG)([r.A], () => r.A.getDetectableIdsToApplicationIds())),
            (0, l.bG)(
                [s.A],
                () =>
                    null != n
                        ? t.reduce((e, t) => ({ ...e, [t]: n }), {})
                        : t.reduce((e, t) => {
                              for (let n of s.A.getActivities(t)) {
                                  let i = n.application_id;
                                  if (null != i && !(0, a.uJ)(c[i])) return { ...e, [t]: c[i] };
                              }
                              return e;
                          }, {}),
                [t, c, n],
                d,
            ));
    return null != e ? (u[e] ?? null) : null;
}
function d(e, t) {
    let n = Object.keys(e),
        i = Object.keys(t);
    return n.length === i.length && n.every((n) => e[n] === t[n]);
}
