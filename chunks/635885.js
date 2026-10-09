n.d(t, { V: () => u });
var i = n(582128),
    l = n(17928),
    s = n(290863),
    r = n(240248),
    a = n(832163),
    o = n(533562);
function u(e) {
    var t;
    let n,
        u,
        d =
            ((t = i.useMemo(() => (null != e ? [e] : []), [e])),
            (n = (0, o.W)()),
            (u = (0, l.bG)([a.A], () => a.A.getDetectableIdsToApplicationIds())),
            (0, l.bG)(
                [s.A],
                () =>
                    null != n
                        ? t.reduce((e, t) => ({ ...e, [t]: n }), {})
                        : t.reduce((e, t) => {
                              for (let n of s.A.getActivities(t)) {
                                  let i = n.application_id;
                                  if (null != i && !(0, r.uJ)(u[i])) return { ...e, [t]: u[i] };
                              }
                              return e;
                          }, {}),
                [t, u, n],
                c,
            ));
    return null != e ? (d[e] ?? null) : null;
}
function c(e, t) {
    let n = Object.keys(e),
        i = Object.keys(t);
    return n.length === i.length && n.every((n) => e[n] === t[n]);
}
