n.d(t, { c: () => h });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    s = n(906732),
    a = n(884858),
    o = n(813197),
    c = n(434404),
    u = n(70086),
    d = n(949640),
    m = n(981631),
    g = n(30513),
    p = n(200299),
    f = n(388032);
function h(e) {
    let { guild: t, canManageGuild: n, buttonClassName: h } = e,
        { analyticsLocations: x } = (0, s.ZP)(),
        b = t.hasFeature(m.oNc.INVITE_SPLASH),
        j = n && b,
        _ = i.useCallback((e) => {
            c.Z.updateGuild({ splash: e });
        }, []),
        v = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, d.E6)({
                        guild: t,
                        analyticsLocations: x,
                        analyticsSection: m.jXE.GUILD_INVITE_BACKGROUND,
                        analyticsObject: m.qAy.BUTTON_CTA,
                        perks: (0, g.o9)()
                    });
            },
            [x, t]
        );
    return b
        ? (0, r.jsxs)(l.zxk, {
              disabled: !j,
              color: l.Ttl.BRAND,
              className: h,
              children: [
                  f.intl.string(f.t.yG2pUl),
                  (0, r.jsx)(o.ZP, {
                      disabled: !j,
                      onChange: _,
                      maxFileSizeBytes: p.B,
                      onFileSizeError: () => (0, a.Z)(p.B)
                  })
              ]
          })
        : (0, r.jsx)(u.P, {
              className: h,
              onClick: v
          });
}
