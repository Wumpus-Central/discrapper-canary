n.d(t, { A: () => E });
var l = n(627968),
    r = n(64700),
    i = n(735438),
    a = n(262),
    s = n(305003);
let o = (e) => e.sort((e, t) => (e.id === s.A.ORB_PROFILE_BADGE ? 1 : t.id === s.A.ORB_PROFILE_BADGE ? -1 : 0));
var d = n(68085),
    u = n(996988);
let c = { [u.d.POPOUT]: 12, [u.d.MODAL]: 26, [u.d.MODAL_V2]: 16, [u.d.SIDEBAR]: 13, [u.d.VIDEO_TILE_BACKGROUND]: 12 };
function E(e) {
    let {
            displayProfile: t,
            themeType: n,
            pendingLegacyUsernameDisabled: s,
            pendingBadges: u,
            onClose: E,
            shouldOpenBadgeTooltip: _,
            shouldGlowTenureBadge: m,
        } = e,
        g = (0, a.A)(t, s),
        p = r.useMemo(() => {
            if (null == u) return o(g);
            let e = new Set(g.map((e) => e.id));
            return o([...g, ...u.filter((t) => !e.has(t.id))]);
        }, [g, u]);
    return 0 === p.length
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: (0, i.chunk)(p, c[n]).map((e) =>
                  (0, l.jsx)(
                      d.A,
                      { badges: e, displayProfile: t, onClose: E, shouldOpenBadgeTooltip: _, shouldGlowTenureBadge: m },
                      e[0].id,
                  ),
              ),
          });
}
