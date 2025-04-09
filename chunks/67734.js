n.d(t, { F: () => p });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(906732),
    l = n(70086),
    o = n(949640),
    c = n(981631),
    d = n(30513),
    u = n(486324),
    m = n(200299),
    g = n(388032);
function p(e) {
    let { guild: t, canManageGuild: n, buttonClassName: p } = e,
        { analyticsLocations: f } = (0, a.ZP)(),
        h = t.hasFeature(c.oNc.BANNER),
        b = i.useCallback(
            (e) => {
                let { imageUri: n, file: r } = e;
                (0, o.f4)(t, f, n, r);
            },
            [f, t]
        ),
        x = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, o.E6)({
                        guild: t,
                        analyticsLocations: f,
                        analyticsSection: c.jXE.GUILD_BANNER,
                        analyticsObject: c.qAy.BUTTON_CTA,
                        perks: (0, d.XO)()
                    });
            },
            [f, t]
        );
    return h
        ? (0, r.jsx)(s.zxk, {
              disabled: !(h && n),
              color: s.zxk.Colors.BRAND,
              className: p,
              onClick: () =>
                  (0, o.mw)({
                      uploadType: u.pC.GUILD_BANNER,
                      maxFileSizeBytes: m.B,
                      onComplete: b,
                      analyticsLocation: {
                          page: c.ZY5.GUILD_SETTINGS,
                          section: c.jXE.GUILD_BANNER
                      },
                      analyticsLocations: f
                  }),
              children: g.NW.string(g.t.yG2pUl)
          })
        : (0, r.jsx)(l.P, {
              className: p,
              onClick: x
          });
}
