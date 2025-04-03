n.d(t, { h: () => b });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(906732),
    l = n(884858),
    o = n(516129),
    c = n(768581),
    d = n(434404),
    u = n(949640),
    m = n(981631),
    g = n(30513),
    p = n(200299),
    h = n(388032),
    f = n(722733);
function b(e) {
    let { guild: t, canManageGuild: n } = e,
        b = t.hasFeature(m.oNc.INVITE_SPLASH),
        x = n && b,
        { analyticsLocations: j } = (0, a.ZP)(),
        N = i.useCallback((e) => {
            d.Z.updateGuild({ splash: e });
        }, []),
        _ = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, u.E6)({
                        guild: t,
                        analyticsLocations: j,
                        analyticsSection: m.jXE.GUILD_INVITE_BACKGROUND,
                        analyticsObject: m.qAy.UPLOAD_IMAGE,
                        perks: (0, g.o9)()
                    });
            },
            [j, t]
        ),
        v = (0, r.jsx)(o.Z, {
            image: t.splash,
            makeURL: (e) =>
                null != e
                    ? c.ZP.getGuildSplashURL({
                          id: t.id,
                          splash: e
                      })
                    : null,
            disabled: !x,
            onChange: N,
            hint: h.NW.string(h.t.uPvxqK),
            enabled: x,
            maxFileSizeBytes: p.B,
            onFileSizeError: () => (0, l.Z)(p.B)
        });
    return b
        ? v
        : (0, r.jsx)(s.P3F, {
              'aria-hidden': !0,
              tabIndex: -1,
              className: f.upsell,
              onClick: _,
              children: v
          });
}
