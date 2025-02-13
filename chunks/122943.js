n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(692547),
    a = n(481060),
    s = n(201895),
    o = n(933557),
    l = n(788858),
    u = n(170187),
    c = n(388032),
    d = n(694978);
function f(e) {
    let { channel: t, textVariant: n, textClassName: f, hideText: _ = !1, hideTooltip: p = !1 } = e,
        h = (0, a.vjg)(a.Skl.ONLINE),
        m = (0, o.ZP)(t),
        g = t.isDM() || t.isGroupDM(),
        E = () =>
            p || g
                ? (0, i.jsx)(l.Z, {
                      size: 'custom',
                      color: h,
                      channel: t,
                      className: d.icon
                  })
                : (0, i.jsx)(a.ua7, {
                      text: m,
                      'aria-label': (0, s.ZP)({ channel: t }),
                      children: (e) =>
                          (0, i.jsx)(l.Z, {
                              ...e,
                              size: 'custom',
                              color: r.Z.colors.STATUS_POSITIVE,
                              channel: t,
                              className: d.icon
                          })
                  }),
        v = () =>
            g
                ? (0, i.jsx)(u.Z, {
                      variant: n,
                      className: f,
                      children: c.intl.string(c.t.bl1Mz8)
                  })
                : t.isGuildStageVoice()
                  ? (0, i.jsx)(u.Z, {
                        variant: n,
                        className: f,
                        children: c.intl.string(c.t.Q1lNen)
                    })
                  : (0, i.jsx)(u.Z, {
                        variant: n,
                        className: f,
                        children: c.intl.string(c.t.bl1Mz8)
                    });
    return (0, i.jsxs)(i.Fragment, {
        children: [E(), !_ && v()]
    });
}
