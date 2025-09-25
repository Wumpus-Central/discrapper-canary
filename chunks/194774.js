n.d(t, { h: () => b });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    s = n(906732),
    a = n(884858),
    o = n(516129),
    c = n(768581),
    d = n(434404),
    u = n(821458),
    m = n(981631),
    g = n(30513),
    p = n(200299),
    f = n(388032),
    h = n(160193);
function b(e) {
    let { guild: t, canManageGuild: n } = e,
        b = t.features.has(m.oNc.INVITE_SPLASH),
        x = n && b,
        { analyticsLocations: j } = (0, s.ZP)(),
        v = i.useCallback((e) => {
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
                        perks: (0, g.o9)(),
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
            onChange: v,
            hint: f.intl.string(f.t.uPvxqK),
            enabled: x,
            maxFileSizeBytes: p.B,
            onFileSizeError: () => (0, a.Z)(p.B),
        });
    return b
        ? O
        : (0, r.jsx)(l.P3F, {
              "aria-hidden": !0,
              tabIndex: -1,
              className: h.upsell,
              onClick: _,
              children: O,
          });
}
