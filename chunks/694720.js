t.d(n, { A: () => m });
var l = t(627968),
    r = t(64700),
    i = t(735438),
    a = t(262),
    s = t(305003);
let o = (e) => e.sort((e, n) => (e.id === s.A.ORB_PROFILE_BADGE ? 1 : n.id === s.A.ORB_PROFILE_BADGE ? -1 : 0));
var d = t(68085),
    u = t(996988);
let c = { [u.d.POPOUT]: 12, [u.d.MODAL]: 26, [u.d.MODAL_V2]: 16, [u.d.SIDEBAR]: 13, [u.d.VIDEO_TILE_BACKGROUND]: 12 };
function m(e) {
    let {
            displayProfile: n,
            themeType: t,
            pendingLegacyUsernameDisabled: s,
            pendingBadges: u,
            onClose: m,
            shouldOpenBadgeTooltip: f,
            shouldGlowTenureBadge: p,
        } = e,
        g = (0, a.A)(n, s),
        h = r.useMemo(() => {
            if (null == u) return o(g);
            let e = new Set(g.map((e) => e.id));
            return o([...g, ...u.filter((n) => !e.has(n.id))]);
        }, [g, u]);
    return 0 === h.length
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: (0, i.chunk)(h, c[t]).map((e) =>
                  (0, l.jsx)(
                      d.A,
                      { badges: e, displayProfile: n, onClose: m, shouldOpenBadgeTooltip: f, shouldGlowTenureBadge: p },
                      e[0].id,
                  ),
              ),
          });
}
