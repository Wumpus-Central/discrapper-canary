n.d(t, { O: () => p });
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
    f = n(200299),
    m = n(388032),
    b = n(676157);
function p(e) {
    let { guild: t, canManageGuild: n } = e,
        p = t.features.has(d.GuildFeatures.BANNER),
        h = t.features.has(d.GuildFeatures.ANIMATED_BANNER),
        x = p && n,
        { analyticsLocations: j } = (0, a.ZP)(),
        v = i.useCallback(
            (e, n) => {
                (0, c.f4)(t, j, e, n);
            },
            [j, t],
        ),
        O = i.useCallback(
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
        C = (0, r.jsx)(s.Z, {
            image: t.banner,
            makeURL: (e) =>
                null != e
                    ? o.ZP.getGuildBannerURL(
                          {
                              id: t.id,
                              banner: e,
                          },
                          h,
                      )
                    : null,
            disabled: !x,
            onChange: v,
            hint: m.intl.string(m.t.uPvxqJ),
            onOpenImageSelectModal: () =>
                (0, c.mw)({
                    uploadType: g.pC.GUILD_BANNER,
                    maxFileSizeBytes: f.B,
                    onComplete: (e) => {
                        let { imageUri: t, file: n } = e;
                        return v(t, n);
                    },
                    analyticsLocation: {
                        page: d.ZY5.GUILD_SETTINGS,
                        section: d.jXE.GUILD_BANNER,
                    },
                    analyticsLocations: j,
                }),
            enabled: x,
        });
    return p
        ? C
        : (0, r.jsx)(l.P3F, {
              "aria-hidden": !0,
              tabIndex: -1,
              className: b.upsell,
              onClick: O,
              children: C,
          });
}
