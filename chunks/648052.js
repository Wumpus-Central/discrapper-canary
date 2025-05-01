n.d(t, { Z: () => d }), n(388685);
var r = n(200651),
    i = n(192379),
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
    let { displayProfile: t, themeType: n, pendingLegacyUsernameDisabled: c, pendingBadges: d, onClose: f, shouldOpenBadgeTooltip: _ } = e,
        p = (0, a.Z)(t, c),
        h = i.useMemo(() => {
            if (null == d) return (0, s.w)(p);
            let e = new Set(p.map((e) => e.id)),
                t = [...p, ...d.filter((t) => !e.has(t.id))];
            return (0, s.w)(t);
        }, [p, d]);
    return 0 === h.length
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: (0, o.chunk)(h, u[n]).map((e) =>
                  (0, r.jsx)(
                      l.Z,
                      {
                          badges: e,
                          displayProfile: t,
                          onClose: f,
                          shouldOpenBadgeTooltip: _
                      },
                      e[0].id
                  )
              )
          });
}
