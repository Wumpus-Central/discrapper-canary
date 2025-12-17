n.d(t, { h: () => h });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(906732),
    s = n(884858),
    o = n(516129),
    c = n(768581),
    d = n(434404),
    u = n(821458),
    g = n(981631),
    f = n(30513),
    m = n(200299),
    b = n(388032),
    p = n(823847);
function h(e) {
    let { guild: t, canManageGuild: n } = e,
        h = t.features.has(g.GuildFeatures.INVITE_SPLASH),
        x = n && h,
        { analyticsLocations: j } = (0, a.ZP)(),
        v = i.useCallback((e) => {
            d.Z.updateGuild({ splash: e });
        }, []),
        O = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, u.E6)({
                        guild: t,
                        analyticsLocations: j,
                        analyticsSection: g.jXE.GUILD_INVITE_BACKGROUND,
                        analyticsObject: g.qAy.UPLOAD_IMAGE,
                        perks: (0, f.o9)(),
                    });
            },
            [j, t],
        ),
        C = (0, r.jsx)(o.Z, {
            image: t.splash,
            makeURL: (e) =>
                null != e
                    ? c.ZP.getGuildSplashURL({
                          id: t.id,
                          splash: e,
                      })
                    : null,
            disabled: !x,
            onChange: v,
            hint: b.intl.string(b.t.uPvxqJ),
            enabled: x,
            maxFileSizeBytes: m.B,
            onFileSizeError: () => (0, s.Z)(m.B),
        });
    return h
        ? C
        : (0, r.jsx)(l.P3F, {
              "aria-hidden": !0,
              tabIndex: -1,
              className: p.upsell,
              onClick: O,
              children: C,
          });
}
