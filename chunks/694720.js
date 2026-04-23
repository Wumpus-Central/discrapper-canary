"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n(262),
    o = n(305003);
let l = (e) => e.sort((e, t) => (e.id === o.A.ORB_PROFILE_BADGE ? 1 : t.id === o.A.ORB_PROFILE_BADGE ? -1 : 0));
var d = n(177831),
    _ = n(996988);
let u = { [_.d.POPOUT]: 12, [_.d.MODAL]: 26, [_.d.MODAL_V2]: 16, [_.d.SIDEBAR]: 13, [_.d.VIDEO_TILE_BACKGROUND]: 12 };
function c(e) {
    let {
            displayProfile: t,
            themeType: n,
            pendingLegacyUsernameDisabled: o,
            pendingBadges: _,
            onClose: c,
            shouldOpenBadgeTooltip: E,
            shouldGlowTenureBadge: h,
        } = e,
        m = (0, a.A)(t, o),
        f = r.useMemo(() => {
            if (null == _) return l(m);
            let e = new Set(m.map((e) => e.id));
            return l([...m, ..._.filter((t) => !e.has(t.id))]);
        }, [m, _]);
    return 0 === f.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, s.chunk)(f, u[n]).map((e) =>
                  (0, i.jsx)(
                      d.A,
                      { badges: e, displayProfile: t, onClose: c, shouldOpenBadgeTooltip: E, shouldGlowTenureBadge: h },
                      e[0].id,
                  ),
              ),
          });
}
