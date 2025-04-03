n.d(t, { c: () => f });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(906732),
    l = n(884858),
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
        { analyticsLocations: b } = (0, a.ZP)(),
        x = t.hasFeature(m.oNc.INVITE_SPLASH),
        j = n && x,
        N = i.useCallback((e) => {
            c.Z.updateGuild({ splash: e });
        }, []),
        _ = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, u.E6)({
                        guild: t,
                        analyticsLocations: b,
                        analyticsSection: m.jXE.GUILD_INVITE_BACKGROUND,
                        analyticsObject: m.qAy.BUTTON_CTA,
                        perks: (0, g.o9)()
                    });
            },
            [b, t]
        );
    return x
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
                      onFileSizeError: () => (0, l.Z)(p.B)
                  })
              ]
          })
        : (0, r.jsx)(d.P, {
              className: f,
              onClick: _
          });
}
