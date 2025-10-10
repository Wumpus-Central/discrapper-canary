n.d(t, { h: () => x });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    s = n(906732),
    a = n(884858),
    o = n(516129),
    c = n(768581),
    d = n(434404),
    u = n(821458),
    g = n(981631),
    m = n(30513),
    p = n(200299),
    f = n(388032),
    h = n(308212);
function x(e) {
    let { guild: t, canManageGuild: n } = e,
        x = t.features.has(g.oNc.INVITE_SPLASH),
        b = n && x,
        { analyticsLocations: j } = (0, s.ZP)(),
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
        C = (0, r.jsx)(o.Z, {
            image: t.splash,
            makeURL: (e) =>
                null != e
                    ? c.ZP.getGuildSplashURL({
                          id: t.id,
                          splash: e,
                      })
                    : null,
            disabled: !b,
            onChange: _,
            hint: f.intl.string(f.t.uPvxqK),
            enabled: b,
            maxFileSizeBytes: p.B,
            onFileSizeError: () => (0, a.Z)(p.B),
        });
    return x
        ? C
        : (0, r.jsx)(l.P3F, {
              "aria-hidden": !0,
              tabIndex: -1,
              className: h.upsell,
              onClick: v,
              children: C,
          });
}
