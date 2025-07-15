(n.d(t, { Z: () => v }), n(388685), n(583741), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(108542),
    l = n(793030),
    c = n(442837),
    u = n(755721),
    d = n(481060),
    f = n(905128),
    _ = n(535396),
    p = n(93841),
    h = n(388032),
    m = n(698323);
function g(e, t, n) {
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
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            }));
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { powerup: t } = e;
    return (0, r.jsx)(l.xv, {
        tag: 'span',
        variant: 'text-md/semibold',
        className: m.highlight,
        children: t.title
    });
}
function v(e) {
    let { guild: t, themeResponsive: n = !0, onButtonClick: a } = e,
        g = (0, c.e7)([f.Z], () => {
            var e, n;
            return null == (n = f.Z.getStateForGuild(t.id)) || null == (e = n.powerupCatalog) ? void 0 : e[_.Us.PERK];
        }),
        [b, v] = i.useState(!1),
        [I, T] = (0, d.q_F)(() => ({
            scale: 0.8,
            config: {
                tension: 500,
                friction: 10
            }
        }));
    i.useEffect(() => {
        let e = setTimeout(() => {
            (T({ scale: 1 }), v(!0));
        }, 300);
        return () => clearTimeout(e);
    }, [T]);
    let S = i.useMemo(() => {
        let e;
        if (null == g || 0 === g.length) return '';
        if (1 === g.length) e = (0, r.jsx)(O, { powerup: g[0] });
        else if (2 === g.length)
            e = h.intl.format(p.default.MNO3sL, {
                perk1: (0, r.jsx)(O, { powerup: g[0] }),
                perk2: (0, r.jsx)(O, { powerup: g[1] })
            });
        else {
            let t = g.reverse();
            e = h.intl.format(p.default.GmN3VV, {
                perk1: (0, r.jsx)(O, { powerup: t[0] }),
                perk2: (0, r.jsx)(O, { powerup: t[1] })
            });
        }
        return h.intl.format(p.default['/6GgQk'], { perks: e });
    }, [g]);
    return null == g || 0 === g.length
        ? null
        : (0, r.jsxs)(s.animated.div, {
              className: o()(m.container, { [m.themeResponsiveContainer]: n }),
              style: y(E({}, I), { opacity: +!!b }),
              children: [
                  (0, r.jsx)(l.xv, {
                      tag: 'span',
                      variant: 'text-md/semibold',
                      className: o()(m.description, {
                          [m.text]: !n,
                          [m.responsiveText]: n
                      }),
                      children: S
                  }),
                  (0, r.jsx)(u.zx, {
                      className: m.button,
                      onClick: a,
                      children: h.intl.string(p.default.E5V5KC)
                  })
              ]
          });
}
