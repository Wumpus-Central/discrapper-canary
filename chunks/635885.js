n.d(t, { V: () => u });
var l = n(64700),
    i = n(17928),
    s = n(290863),
    r = n(240248),
    a = n(832163),
    o = n(533562);
function u(e) {
    var t;
    let n,
        u,
        d =
            ((t = l.useMemo(() => (null != e ? [e] : []), [e])),
            (n = (0, o.W)()),
            (u = (0, i.bG)([a.A], () => a.A.getDetectableIdsToApplicationIds())),
            (0, i.bG)(
                [s.A],
                () =>
                    null != n
                        ? t.reduce((e, t) => ({ ...e, [t]: n }), {})
                        : t.reduce((e, t) => {
                              for (let n of s.A.getActivities(t)) {
                                  let l = n.application_id;
                                  if (null != l && !(0, r.uJ)(u[l])) return { ...e, [t]: u[l] };
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
        l = Object.keys(t);
    return n.length === l.length && n.every((n) => e[n] === t[n]);
}
