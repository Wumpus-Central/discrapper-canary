n.d(t, { F: () => p });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    s = n(906732),
    a = n(70086),
    o = n(949640),
    c = n(981631),
    u = n(30513),
    d = n(486324),
    m = n(200299),
    g = n(388032);
function p(e) {
    let { guild: t, canManageGuild: n, buttonClassName: p } = e,
        { analyticsLocations: f } = (0, s.ZP)(),
        h = t.hasFeature(c.oNc.BANNER),
        x = i.useCallback(
            (e) => {
                let { imageUri: n, file: r } = e;
                (0, o.f4)(t, f, n, r);
            },
            [f, t]
        ),
        b = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, o.E6)({
                        guild: t,
                        analyticsLocations: f,
                        analyticsSection: c.jXE.GUILD_BANNER,
                        analyticsObject: c.qAy.BUTTON_CTA,
                        perks: (0, u.XO)()
                    });
            },
            [f, t]
        );
    return h
        ? (0, r.jsx)(l.zxk, {
              disabled: !(h && n),
              color: l.zxk.Colors.BRAND,
              className: p,
              onClick: () =>
                  (0, o.mw)({
                      uploadType: d.pC.GUILD_BANNER,
                      maxFileSizeBytes: m.B,
                      onComplete: x,
                      analyticsLocation: {
                          page: c.ZY5.GUILD_SETTINGS,
                          section: c.jXE.GUILD_BANNER
                      },
                      analyticsLocations: f
                  }),
              children: g.intl.string(g.t.yG2pUl)
          })
        : (0, r.jsx)(a.P, {
              className: p,
              onClick: b
          });
}
