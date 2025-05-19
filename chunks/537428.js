n.d(t, { Z: () => u });
var i = n(255367),
    r = n(73800),
    s = n(704215),
    l = n(243778),
    a = n(848572),
    o = n(765018),
    c = n(101966);
let d = r.lazy(() => n.e('22274').then(n.bind(n, 269792)));
function u() {
    let e = (0, a.kG)();
    return (0, c.Z)({ location: 'TenureLevelUpModal' }) && null != e
        ? (0, i.jsx)(l.Xf, {
              contentType: s.z.NITRO_TENURE_BADGE_LEVEL_UP,
              latestVersion: (0, o.q)(e),
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (null != t)
                      return (0, i.jsx)(r.Suspense, {
                          fallback: null,
                          children: (0, i.jsx)(d, { markAsDismissed: n })
                      });
              }
          })
        : null;
}
