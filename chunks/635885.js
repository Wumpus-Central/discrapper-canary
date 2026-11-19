var l = n(582128),
    i = n(855986),
    r = n(290863),
    s = n(240248),
    a = n(832163),
    o = n(533562);
function u(e, t) {
    let n = Object.keys(e),
        l = Object.keys(t);
    return n.length === l.length && n.every((n) => e[n] === t[n]);
}
n.d(
    t,
    {},
    {
        V: function (e) {
            var t;
            let n,
                c,
                d =
                    ((t = l.useMemo(() => (null != e ? [e] : []), [e])),
                    (n = (0, o.W)()),
                    (c = (0, i.bG)([a.A], () => a.A.getDetectableIdsToApplicationIds())),
                    (0, i.bG)(
                        [r.A],
                        () =>
                            null != n
                                ? t.reduce((e, t) => ({ ...e, [t]: n }), {})
                                : t.reduce((e, t) => {
                                      for (let n of r.A.getActivities(t)) {
                                          let l = n.application_id;
                                          if (null != l && !(0, s.uJ)(c[l])) return { ...e, [t]: c[l] };
                                      }
                                      return e;
                                  }, {}),
                        [t, c, n],
                        u,
                    ));
            return null != e ? (d[e] ?? null) : null;
        },
    },
);
