n.d(t, { h: () => b });
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
    m = n(30513),
    p = n(200299),
    f = n(388032),
    h = n(160193);
function b(e) {
    let { guild: t, canManageGuild: n } = e,
        b = t.features.has(g.GuildFeatures.INVITE_SPLASH),
        x = n && b,
        { analyticsLocations: j } = (0, a.ZP)(),
        _ = i.useCallback((e) => {
            d.Z.updateGuild({ splash: e });
        }, []),
        v = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, u.E6)({
                        guild: t,
                        analyticsLocations: j,
                        analyticsSection: g.jXE.GUILD_INVITE_BACKGROUND,
                        analyticsObject: g.qAy.UPLOAD_IMAGE,
                        perks: (0, m.o9)(),
                    });
            },
            [j, t],
        ),
        O = (0, r.jsx)(o.Z, {
            image: t.splash,
            makeURL: (e) =>
                null != e
                    ? c.ZP.getGuildSplashURL({
                          id: t.id,
                          splash: e,
                      })
                    : null,
            disabled: !x,
            onChange: _,
            hint: f.intl.string(f.t.uPvxqJ),
            enabled: x,
            maxFileSizeBytes: p.B,
            onFileSizeError: () => (0, s.Z)(p.B),
        });
    return b
        ? O
        : (0, r.jsx)(l.P3F, {
              "aria-hidden": !0,
              tabIndex: -1,
              className: h.upsell,
              onClick: v,
              children: O,
          });
}
