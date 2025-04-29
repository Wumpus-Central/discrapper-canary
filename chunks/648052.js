n.d(t, { Z: () => d }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(392711),
    a = n(485341),
    s = n(819325),
    l = n(184325),
    c = n(228168);
let u = {
    [c.lY.POPOUT]: 12,
    [c.lY.MODAL]: 26,
    [c.lY.MODAL_V2]: 16,
    [c.lY.SIDEBAR]: 13
};
function d(e) {
    let { displayProfile: t, themeType: n, onClose: c, pendingBadges: d, shouldOpenBadgeTooltip: f } = e,
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
