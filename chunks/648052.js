n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(485341),
    s = n(819325),
    l = n(184325),
    c = n(671955);
let u = {
    [c.l.POPOUT]: 12,
    [c.l.MODAL]: 26,
    [c.l.MODAL_V2]: 16,
    [c.l.SIDEBAR]: 13,
    [c.l.VIDEO_TILE_BACKGROUND]: 12,
};
function d(e) {
    let {
            displayProfile: t,
            themeType: n,
            pendingLegacyUsernameDisabled: c,
            pendingBadges: d,
            onClose: f,
            shouldOpenBadgeTooltip: p,
            shouldGlowTenureBadge: _,
        } = e,
        m = (0, o.Z)(t, c),
        h = i.useMemo(() => {
            if (null == d) return (0, s.w)(m);
            let e = new Set(m.map((e) => e.id)),
                t = [...m, ...d.filter((t) => !e.has(t.id))];
            return (0, s.w)(t);
        }, [m, d]);
    return 0 === h.length
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: (0, a.chunk)(h, u[n]).map((e) =>
                  (0, r.jsx)(
                      l.Z,
                      {
                          badges: e,
                          displayProfile: t,
                          onClose: f,
                          shouldOpenBadgeTooltip: p,
                          shouldGlowTenureBadge: _,
                      },
                      e[0].id,
                  ),
              ),
          });
}
