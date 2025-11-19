n.d(t, { O: () => h });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(906732),
    s = n(516129),
    o = n(768581),
    c = n(821458),
    d = n(981631),
    u = n(30513),
    g = n(486324),
    m = n(200299),
    p = n(388032),
    f = n(903102);
function h(e) {
    let { guild: t, canManageGuild: n } = e,
        h = t.features.has(d.GuildFeatures.BANNER),
        b = t.features.has(d.GuildFeatures.ANIMATED_BANNER),
        x = h && n,
        { analyticsLocations: j } = (0, a.ZP)(),
        _ = i.useCallback(
            (e, n) => {
                (0, c.f4)(t, j, e, n);
            },
            [j, t],
        ),
        v = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, c.E6)({
                        guild: t,
                        analyticsLocations: j,
                        analyticsSection: d.jXE.GUILD_BANNER,
                        analyticsObject: d.qAy.UPLOAD_IMAGE,
                        perks: (0, u.XO)(),
                    });
            },
            [j, t],
        ),
        O = (0, r.jsx)(s.Z, {
            image: t.banner,
            makeURL: (e) =>
                null != e
                    ? o.ZP.getGuildBannerURL(
                          {
                              id: t.id,
                              banner: e,
                          },
                          b,
                      )
                    : null,
            disabled: !x,
            onChange: _,
            hint: p.intl.string(p.t.uPvxqJ),
            onOpenImageSelectModal: () =>
                (0, c.mw)({
                    uploadType: g.pC.GUILD_BANNER,
                    maxFileSizeBytes: m.B,
                    onComplete: (e) => {
                        let { imageUri: t, file: n } = e;
                        return _(t, n);
                    },
                    analyticsLocation: {
                        page: d.ZY5.GUILD_SETTINGS,
                        section: d.jXE.GUILD_BANNER,
                    },
                    analyticsLocations: j,
                }),
            enabled: x,
        });
    return h
        ? O
        : (0, r.jsx)(l.P3F, {
              "aria-hidden": !0,
              tabIndex: -1,
              className: f.upsell,
              onClick: v,
              children: O,
          });
}
