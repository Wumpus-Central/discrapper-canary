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
    p = n(30513),
    g = n(200299),
    h = n(388032),
    f = n(553221);
function b(e) {
    let { guild: t, canManageGuild: n } = e,
        b = t.hasFeature(m.oNc.INVITE_SPLASH),
        x = n && b,
        { analyticsLocations: j } = (0, a.ZP)(),
        N = i.useCallback((e) => {
            d.Z.updateGuild({ splash: e });
        }, []),
        v = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), (0, u.E6)(t, j, m.jXE.GUILD_INVITE_BACKGROUND, m.qAy.UPLOAD_IMAGE, (0, p.o9)());
            },
            [j, t]
        ),
        _ = (0, r.jsx)(o.Z, {
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
            maxFileSizeBytes: g.B,
            onFileSizeError: () => (0, l.Z)(g.B)
        });
    return b
        ? _
        : (0, r.jsx)(s.P3F, {
              'aria-hidden': !0,
              tabIndex: -1,
              className: f.upsell,
              onClick: v,
              children: _
          });
}
