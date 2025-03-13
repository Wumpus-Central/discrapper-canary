n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(392711),
    a = n(485341),
    s = n(184325),
    l = n(228168);
let c = {
    [l.y0.BITE_SIZE]: 12,
    [l.y0.FULL_SIZE]: 26,
    [l.y0.PANEL]: 13
};
function u(e) {
    let { displayProfile: t, profileType: n, onClose: l, pendingBadges: u, shouldOpenBadgeTooltip: d } = e,
        f = (0, a.Z)(t),
        _ = i.useMemo(() => {
            if (null == u) return f;
            let e = new Set(f.map((e) => e.id));
            return [...f, ...u.filter((t) => !e.has(t.id))];
        }, [f, u]);
    return 0 === _.length
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: (0, o.chunk)(_, c[n]).map((e) =>
                  (0, r.jsx)(
                      s.Z,
                      {
                          badges: e,
                          displayProfile: t,
                          onClose: l,
                          shouldOpenBadgeTooltip: d
                      },
                      e[0].id
                  )
              )
          });
}
