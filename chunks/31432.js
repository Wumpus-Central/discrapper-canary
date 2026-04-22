t.d(n, { A: () => c });
var l = t(627968),
    r = t(64700),
    i = t(735438),
    a = t(262),
    s = t(916858),
    o = t(542535),
    d = t(996988);
let u = { [d.d.POPOUT]: 12, [d.d.MODAL]: 26, [d.d.MODAL_V2]: 16, [d.d.SIDEBAR]: 13, [d.d.VIDEO_TILE_BACKGROUND]: 12 };
function c(e) {
    let {
            displayProfile: n,
            themeType: t,
            pendingLegacyUsernameDisabled: d,
            pendingBadges: c,
            onClose: m,
            shouldOpenBadgeTooltip: p,
            shouldGlowTenureBadge: f,
        } = e,
        g = (0, a.A)(n, d),
        h = r.useMemo(() => {
            if (null == c) return (0, s.b)(g);
            let e = new Set(g.map((e) => e.id)),
                n = [...g, ...c.filter((n) => !e.has(n.id))];
            return (0, s.b)(n);
        }, [g, c]);
    return 0 === h.length
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: (0, i.chunk)(h, u[t]).map((e) =>
                  (0, l.jsx)(
                      o.A,
                      { badges: e, displayProfile: n, onClose: m, shouldOpenBadgeTooltip: p, shouldGlowTenureBadge: f },
                      e[0].id,
                  ),
              ),
          });
}
