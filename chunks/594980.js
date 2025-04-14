n.d(t, { c: () => f });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    l = n(906732),
    a = n(884858),
    o = n(813197),
    c = n(434404),
    d = n(70086),
    u = n(949640),
    m = n(981631),
    g = n(30513),
    p = n(200299),
    h = n(388032);
function f(e) {
    let { guild: t, canManageGuild: n, buttonClassName: f } = e,
        { analyticsLocations: x } = (0, l.ZP)(),
        b = t.hasFeature(m.oNc.INVITE_SPLASH),
        j = n && b,
        N = i.useCallback((e) => {
            c.Z.updateGuild({ splash: e });
        }, []),
        _ = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, u.E6)({
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
        ? (0, r.jsxs)(s.zxk, {
              disabled: !j,
              color: s.Ttl.BRAND,
              className: f,
              children: [
                  h.NW.string(h.t.yG2pUl),
                  (0, r.jsx)(o.ZP, {
                      disabled: !j,
                      onChange: N,
                      maxFileSizeBytes: p.B,
                      onFileSizeError: () => (0, a.Z)(p.B)
                  })
              ]
          })
        : (0, r.jsx)(d.P, {
              className: f,
              onClick: _
          });
}
