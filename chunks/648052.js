n.d(t, { Z: () => d }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(392711),
    a = n(485341),
    s = n(819325),
    l = n(184325),
    c = n(228168);
let u = {
    [c.y0.BITE_SIZE]: 12,
    [c.y0.FULL_SIZE]: 26,
    [c.y0.PANEL]: 13
};
function d(e) {
    let { displayProfile: t, profileType: n, onClose: c, pendingBadges: d, shouldOpenBadgeTooltip: f } = e,
        _ = (0, a.Z)(t),
        p = i.useMemo(() => {
            if (null == d) return (0, s.w)(_);
            let e = new Set(_.map((e) => e.id)),
                t = [..._, ...d.filter((t) => !e.has(t.id))];
            return (0, s.w)(t);
        }, [_, d]);
    return 0 === p.length
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: (0, o.chunk)(p, u[n]).map((e) =>
                  (0, r.jsx)(
                      l.Z,
                      {
                          badges: e,
                          displayProfile: t,
                          onClose: c,
                          shouldOpenBadgeTooltip: f
                      },
                      e[0].id
                  )
              )
          });
}
