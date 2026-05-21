"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n(262),
    o = n(305003);
let l = (e) => e.sort((e, t) => (e.id === o.A.ORB_PROFILE_BADGE ? 1 : t.id === o.A.ORB_PROFILE_BADGE ? -1 : 0));
var u = n(68085),
    c = n(996988);
let d = { [c.d.POPOUT]: 12, [c.d.MODAL]: 26, [c.d.MODAL_V2]: 16, [c.d.SIDEBAR]: 13, [c.d.VIDEO_TILE_BACKGROUND]: 12 };
function _(e) {
    let {
            displayProfile: t,
            themeType: n,
            pendingLegacyUsernameDisabled: o,
            pendingBadges: c,
            onClose: _,
            shouldOpenBadgeTooltip: f,
            shouldGlowTenureBadge: h,
        } = e,
        p = (0, a.A)(t, o),
        E = r.useMemo(() => {
            if (null == c) return l(p);
            let e = new Set(p.map((e) => e.id));
            return l([...p, ...c.filter((t) => !e.has(t.id))]);
        }, [p, c]);
    return 0 === E.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, s.chunk)(E, d[n]).map((e) =>
                  (0, i.jsx)(
                      u.A,
                      { badges: e, displayProfile: t, onClose: _, shouldOpenBadgeTooltip: f, shouldGlowTenureBadge: h },
                      e[0].id,
                  ),
              ),
          });
}
