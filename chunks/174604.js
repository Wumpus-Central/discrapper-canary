n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(642128),
    a = n(793030),
    s = n(481060),
    l = n(50101),
    c = n(783684),
    u = n(388032),
    d = n(120421);
function f(e) {
    let { guild: t } = e,
        n = (0, l.Ek)(t, 'GuildBoostingMarketing'),
        [f, p] = (0, s.q_F)(() => ({
            scale: 0.8,
            config: {
                tension: 500,
                friction: 10
            }
        }));
    return (i.useEffect(() => {
        p({ scale: 1 });
    }, [p]),
    n)
        ? (0, r.jsxs)(o.animated.div, {
              className: d.container,
              style: f,
              children: [
                  (0, r.jsx)(a.xv, {
                      variant: 'text-sm/semibold',
                      children: u.NW.string(c.Z['vkCs5+'])
                  }),
                  (0, r.jsx)(s.zxk, {
                      className: d.button,
                      children: u.NW.string(c.Z.E5V5KC)
                  })
              ]
          })
        : null;
}
