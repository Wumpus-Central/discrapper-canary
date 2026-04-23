"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n(262),
    o = n(916858),
    l = n(542535),
    u = n(996988);
let c = { [u.d.POPOUT]: 12, [u.d.MODAL]: 26, [u.d.MODAL_V2]: 16, [u.d.SIDEBAR]: 13, [u.d.VIDEO_TILE_BACKGROUND]: 12 };
function d(e) {
    let {
            displayProfile: t,
            themeType: n,
            pendingLegacyUsernameDisabled: u,
            pendingBadges: d,
            onClose: _,
            shouldOpenBadgeTooltip: f,
            shouldGlowTenureBadge: p,
        } = e,
        h = (0, a.A)(t, u),
        E = i.useMemo(() => {
            if (null == d) return (0, o.b)(h);
            let e = new Set(h.map((e) => e.id)),
                t = [...h, ...d.filter((t) => !e.has(t.id))];
            return (0, o.b)(t);
        }, [h, d]);
    return 0 === E.length
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: (0, s.chunk)(E, c[n]).map((e) =>
                  (0, r.jsx)(
                      l.A,
                      { badges: e, displayProfile: t, onClose: _, shouldOpenBadgeTooltip: f, shouldGlowTenureBadge: p },
                      e[0].id,
                  ),
              ),
          });
}
