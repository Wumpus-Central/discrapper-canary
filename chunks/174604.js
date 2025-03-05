n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(642128),
    a = n(793030),
    s = n(481060),
    l = n(50101),
    c = n(730621),
    u = n(388032),
    d = n(752593);
function f(e) {
    let { guild: t } = e,
        n = (0, l.Ek)(t, 'GuildBoostingMarketing'),
        [f, _] = (0, s.q_F)(() => ({
            scale: 0.8,
            opacity: 0,
            config: {
                tension: 500,
                friction: 10
            }
        }));
    return (i.useEffect(() => {
        let e = setTimeout(() => {
            _({
                scale: 1,
                opacity: 1
            });
        }, 300);
        return () => clearTimeout(e);
    }, [_]),
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
