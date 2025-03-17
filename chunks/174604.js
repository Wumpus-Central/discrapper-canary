n.d(t, { Z: () => T }), n(47120), n(978209), n(266796);
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
    _ = n(111360),
    p = n(535396),
    h = n(981631),
    m = n(176505),
    g = n(730621),
    E = n(388032),
    b = n(752593);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { powerup: t } = e;
    return (0, r.jsx)(l.xv, {
        tag: 'span',
        variant: 'text-md/semibold',
        className: b.highlight,
        children: t.title
    });
}
function T(e) {
    var t;
    let { guild: n, themeResponsive: o = !0 } = e,
        v = (0, f.Ek)(n, 'GuildBoostingMarketing'),
        O = null === (t = (0, _.Z)(n.id)) || void 0 === t ? void 0 : t.get(p.Us.PERK),
        [T, N] = i.useState(!1),
        [A, C] = (0, c.q_F)(() => ({
            scale: 0.8,
            config: {
                tension: 500,
                friction: 10
            }
        }));
    i.useEffect(() => {
        let e = setTimeout(() => {
            C({ scale: 1 }), N(!0);
        }, 300);
        return () => clearTimeout(e);
    }, [C]);
    let R = i.useCallback(() => {
            (0, u.xf)(), (0, d.uL)(h.Z5c.CHANNEL(n.id, m.oC.GUILD_BOOSTS));
        }, [n.id]),
        P = i.useMemo(() => {
            let e;
            if (null == O || 0 === O.length) return '';
            if (1 === O.length) e = (0, r.jsx)(S, { powerup: O[0] });
            else if (2 === O.length)
                e = E.NW.format(g.Z.MNO3sL, {
                    perk1: (0, r.jsx)(S, { powerup: O[0] }),
                    perk2: (0, r.jsx)(S, { powerup: O[1] })
                });
            else {
                let t = O.reverse();
                e = E.NW.format(g.Z.GmN3VV, {
                    perk1: (0, r.jsx)(S, { powerup: t[0] }),
                    perk2: (0, r.jsx)(S, { powerup: t[1] })
                });
            }
            return E.NW.format(g.Z['/6GgQk'], { perks: e });
        }, [O]);
    return v && null != O && 0 !== O.length
        ? (0, r.jsxs)(s.animated.div, {
              className: a()(b.container, { [b.themeResponsiveContainer]: o }),
              style: I(y({}, A), { opacity: +!!T }),
              children: [
                  (0, r.jsx)(l.xv, {
                      tag: 'span',
                      variant: 'text-md/semibold',
                      className: a()(b.description, {
                          [b.text]: !o,
                          [b.responsiveText]: o
                      }),
                      children: P
                  }),
                  (0, r.jsx)(c.zxk, {
                      className: b.button,
                      onClick: R,
                      children: E.NW.string(g.Z.E5V5KC)
                  })
              ]
          })
        : null;
}
