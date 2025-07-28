n.d(t, { F: () => p });
var r = n(255367),
    i = n(73800),
    l = n(755721),
    a = n(906732),
    s = n(70086),
    o = n(949640),
    c = n(981631),
    d = n(30513),
    u = n(486324),
    m = n(200299),
    g = n(388032);
function p(e) {
    let { guild: t, canManageGuild: n, buttonClassName: p } = e,
        { analyticsLocations: h } = (0, a.ZP)(),
        f = t.features.has(c.oNc.BANNER),
        x = i.useCallback(
            (e) => {
                let { imageUri: n, file: r } = e;
                (0, o.f4)(t, h, n, r);
            },
            [h, t]
        ),
        b = i.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    (0, o.E6)({
                        guild: t,
                        analyticsLocations: h,
                        analyticsSection: c.jXE.GUILD_BANNER,
                        analyticsObject: c.qAy.BUTTON_CTA,
                        perks: (0, d.XO)()
                    }));
            },
            [h, t]
        );
    return f
        ? (0, r.jsx)(l.zx, {
              disabled: !(f && n),
              color: l.zx.Colors.BRAND,
              className: p,
              onClick: () =>
                  (0, o.mw)({
                      uploadType: u.pC.GUILD_BANNER,
                      maxFileSizeBytes: m.B,
                      onComplete: x,
                      analyticsLocation: {
                          page: c.ZY5.GUILD_SETTINGS,
                          section: c.jXE.GUILD_BANNER
                      },
                      analyticsLocations: h
                  }),
              children: g.intl.string(g.t.yG2pUl)
          })
        : (0, r.jsx)(s.P, {
              className: p,
              onClick: b
          });
}
