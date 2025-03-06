n.d(t, { Z: () => E }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(793030),
    c = n(481060),
    u = n(37234),
    d = n(703656),
    f = n(50101),
    _ = n(981631),
    p = n(176505),
    h = n(730621),
    g = n(388032),
    m = n(752593);
function E(e) {
    let { guild: t, themeResponsive: n = !0 } = e,
        o = (0, f.Ek)(t, 'GuildBoostingMarketing'),
        [E, v] = (0, c.q_F)(() => ({
            scale: 0.8,
            opacity: 0,
            config: {
                tension: 500,
                friction: 10
            }
        }));
    i.useEffect(() => {
        let e = setTimeout(() => {
            v({
                scale: 1,
                opacity: 1
            });
        }, 300);
        return () => clearTimeout(e);
    }, [v]);
    let b = i.useCallback(() => {
        (0, u.xf)(), (0, d.uL)(_.Z5c.CHANNEL(t.id, p.oC.GUILD_BOOSTS));
    }, [t.id]);
    return o
        ? (0, r.jsxs)(s.animated.div, {
              className: a()(m.container, { [m.themeResponsiveContainer]: n }),
              style: E,
              children: [
                  (0, r.jsxs)('div', {
                      className: m.description,
                      children: [
                          (0, r.jsx)(l.xv, {
                              variant: 'text-md/semibold',
                              className: a()({
                                  [m.text]: !n,
                                  [m.responsiveText]: n
                              }),
                              children: g.NW.string(h.Z.XBP9VV)
                          }),
                          (0, r.jsx)(l.xv, {
                              variant: 'text-md/semibold',
                              className: m.highlight,
                              children: g.NW.string(h.Z['l/4T7u'])
                          }),
                          (0, r.jsx)(l.xv, {
                              variant: 'text-md/semibold',
                              className: a()({
                                  [m.text]: !n,
                                  [m.responsiveText]: n
                              }),
                              children: g.NW.string(h.Z.wS3GDA)
                          }),
                          (0, r.jsx)(l.xv, {
                              variant: 'text-md/semibold',
                              className: m.highlight,
                              children: g.NW.string(h.Z['uFH+vL'])
                          })
                      ]
                  }),
                  (0, r.jsx)(c.zxk, {
                      className: m.button,
                      onClick: b,
                      children: g.NW.string(h.Z.E5V5KC)
                  })
              ]
          })
        : null;
}
