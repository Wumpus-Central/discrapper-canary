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
};
function d(e) {
    let {
            displayProfile: t,
            themeType: n,
            pendingLegacyUsernameDisabled: c,
            pendingBadges: d,
            onClose: f,
            shouldOpenBadgeTooltip: _,
            shouldGlowTenureBadge: p,
        } = e,
        h = (0, o.Z)(t, c),
        m = i.useMemo(() => {
            if (null == d) return (0, s.w)(h);
            let e = new Set(h.map((e) => e.id)),
                t = [...h, ...d.filter((t) => !e.has(t.id))];
            return (0, s.w)(t);
        }, [h, d]);
    return 0 === m.length
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: (0, a.chunk)(m, u[n]).map((e) =>
                  (0, r.jsx)(
                      l.Z,
                      {
                          badges: e,
                          displayProfile: t,
                          onClose: f,
                          shouldOpenBadgeTooltip: _,
                          shouldGlowTenureBadge: p,
                      },
                      e[0].id,
                  ),
              ),
          });
}
