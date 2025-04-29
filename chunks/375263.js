n.d(t, { O: () => f });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    s = n(906732),
    a = n(516129),
    o = n(768581),
    c = n(949640),
    u = n(981631),
    d = n(30513),
    m = n(486324),
    g = n(200299),
    p = n(388032),
    h = n(615511);
function f(e) {
    let { guild: t, canManageGuild: n } = e,
        f = t.hasFeature(u.oNc.BANNER),
        x = t.hasFeature(u.oNc.ANIMATED_BANNER),
        b = f && n,
        { analyticsLocations: j } = (0, s.ZP)(),
        _ = i.useCallback(
            (e, n) => {
                (0, c.f4)(t, j, e, n);
            },
            [j, t]
        ),
        v = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, c.E6)({
                        guild: t,
                        analyticsLocations: j,
                        analyticsSection: u.jXE.GUILD_BANNER,
                        analyticsObject: u.qAy.UPLOAD_IMAGE,
                        perks: (0, d.XO)()
                    });
            },
            [j, t]
        ),
        O = (0, r.jsx)(a.Z, {
            image: t.banner,
            makeURL: (e) =>
                null != e
                    ? o.ZP.getGuildBannerURL(
                          {
                              id: t.id,
                              banner: e
                          },
                          x
                      )
                    : null,
            disabled: !b,
            onChange: _,
            hint: p.intl.string(p.t.uPvxqK),
            onOpenImageSelectModal: () =>
                (0, c.mw)({
                    uploadType: m.pC.GUILD_BANNER,
                    maxFileSizeBytes: g.B,
                    onComplete: (e) => {
                        let { imageUri: t, file: n } = e;
                        return _(t, n);
                    },
                    analyticsLocation: {
                        page: u.ZY5.GUILD_SETTINGS,
                        section: u.jXE.GUILD_BANNER
                    },
                    analyticsLocations: j
                }),
            enabled: b
        });
    return f
        ? O
        : (0, r.jsx)(l.P3F, {
              'aria-hidden': !0,
              tabIndex: -1,
              className: h.upsell,
              onClick: v,
              children: O
          });
}
