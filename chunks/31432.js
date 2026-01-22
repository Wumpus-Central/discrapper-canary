n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(262),
    o = n(916858),
    l = n(542535),
    c = n(996988);
let u = {
    [c.d.POPOUT]: 12,
    [c.d.MODAL]: 26,
    [c.d.MODAL_V2]: 16,
    [c.d.SIDEBAR]: 13,
    [c.d.VIDEO_TILE_BACKGROUND]: 12,
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
        h = (0, s.A)(t, c),
        m = i.useMemo(() => {
            if (null == d) return (0, o.b)(h);
            let e = new Set(h.map((e) => e.id)),
                t = [...h, ...d.filter((t) => !e.has(t.id))];
            return (0, o.b)(t);
        }, [h, d]);
    return 0 === m.length
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: (0, a.chunk)(m, u[n]).map((e) =>
                  (0, r.jsx)(
                      l.A,
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
