n.d(t, { A: () => g });
var r = n(627968),
    l = n(64700),
    i = n(735438),
    a = n(262),
    s = n(305003);
let o = (e) => e.sort((e, t) => (e.id === s.A.ORB_PROFILE_BADGE ? 1 : t.id === s.A.ORB_PROFILE_BADGE ? -1 : 0));
var d = n(423437),
    u = n(996988);
let c = { [u.d.POPOUT]: 12, [u.d.MODAL]: 26, [u.d.MODAL_V2]: 16, [u.d.SIDEBAR]: 13, [u.d.VIDEO_TILE_BACKGROUND]: 12 };
function g(e) {
    let {
            displayProfile: t,
            themeType: n,
            pendingLegacyUsernameDisabled: s,
            pendingBadges: u,
            onClose: g,
            shouldOpenBadgeTooltip: m,
            shouldGlowTenureBadge: p,
        } = e,
        f = (0, a.A)(t, s),
        _ = l.useMemo(() => {
            if (null == u) return o(f);
            let e = new Set(f.map((e) => e.id));
            return o([...f, ...u.filter((t) => !e.has(t.id))]);
        }, [f, u]);
    return 0 === _.length
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: (0, i.chunk)(_, c[n]).map((e) =>
                  (0, r.jsx)(
                      d.A,
                      { badges: e, displayProfile: t, onClose: g, shouldOpenBadgeTooltip: m, shouldGlowTenureBadge: p },
                      e[0].id,
                  ),
              ),
          });
}
