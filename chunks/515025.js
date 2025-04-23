n.d(t, { h: () => x });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    s = n(906732),
    a = n(884858),
    o = n(516129),
    c = n(768581),
    u = n(434404),
    d = n(949640),
    m = n(981631),
    g = n(30513),
    p = n(200299),
    f = n(388032),
    h = n(722733);
function x(e) {
    let { guild: t, canManageGuild: n } = e,
        x = t.hasFeature(m.oNc.INVITE_SPLASH),
        b = n && x,
        { analyticsLocations: j } = (0, s.ZP)(),
        _ = i.useCallback((e) => {
            u.Z.updateGuild({ splash: e });
        }, []),
        v = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, d.E6)({
                        guild: t,
                        analyticsLocations: j,
                        analyticsSection: m.jXE.GUILD_INVITE_BACKGROUND,
                        analyticsObject: m.qAy.UPLOAD_IMAGE,
                        perks: (0, g.o9)()
                    });
            },
            [j, t]
        ),
        O = (0, r.jsx)(o.Z, {
            image: t.splash,
            makeURL: (e) =>
                null != e
                    ? c.ZP.getGuildSplashURL({
                          id: t.id,
                          splash: e
                      })
                    : null,
            disabled: !b,
            onChange: _,
            hint: f.intl.string(f.t.uPvxqK),
            enabled: b,
            maxFileSizeBytes: p.B,
            onFileSizeError: () => (0, a.Z)(p.B)
        });
    return x
        ? O
        : (0, r.jsx)(l.P3F, {
              'aria-hidden': !0,
              tabIndex: -1,
              className: h.upsell,
              onClick: v,
              children: O
          });
}
