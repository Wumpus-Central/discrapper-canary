(n.d(t, { Z: () => O }), n(388685), n(583741), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(264738),
    l = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(905128),
    f = n(535396),
    _ = n(93841),
    p = n(388032),
    h = n(698323);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { powerup: t } = e;
    return (0, r.jsx)(l.xv, {
        tag: 'span',
        variant: 'text-md/semibold',
        className: h.highlight,
        children: t.title
    });
}
function O(e) {
    let { guild: t, themeResponsive: n = !0, onButtonClick: a } = e,
        m = (0, c.e7)([d.Z], () => {
            var e, n;
            return null == (n = d.Z.getStateForGuild(t.id)) || null == (e = n.powerupCatalog) ? void 0 : e[f.Us.PERK];
        }),
        [E, O] = i.useState(!1),
        [v, I] = (0, u.q_F)(() => ({
            scale: 0.8,
            config: {
                tension: 500,
                friction: 10
            }
        }));
    i.useEffect(() => {
        let e = setTimeout(() => {
            (I({ scale: 1 }), O(!0));
        }, 300);
        return () => clearTimeout(e);
    }, [I]);
    let T = i.useMemo(() => {
        let e;
        if (null == m || 0 === m.length) return '';
        if (1 === m.length) e = (0, r.jsx)(y, { powerup: m[0] });
        else if (2 === m.length)
            e = p.intl.format(_.default.MNO3sL, {
                perk1: (0, r.jsx)(y, { powerup: m[0] }),
                perk2: (0, r.jsx)(y, { powerup: m[1] })
            });
        else {
            let t = m.reverse();
            e = p.intl.format(_.default.GmN3VV, {
                perk1: (0, r.jsx)(y, { powerup: t[0] }),
                perk2: (0, r.jsx)(y, { powerup: t[1] })
            });
        }
        return p.intl.format(_.default['/6GgQk'], { perks: e });
    }, [m]);
    return null == m || 0 === m.length
        ? null
        : (0, r.jsxs)(s.animated.div, {
              className: o()(h.container, { [h.themeResponsiveContainer]: n }),
              style: b(g({}, v), { opacity: +!!E }),
              children: [
                  (0, r.jsx)(l.xv, {
                      tag: 'span',
                      variant: 'text-md/semibold',
                      className: o()(h.description, {
                          [h.text]: !n,
                          [h.responsiveText]: n
                      }),
                      children: T
                  }),
                  (0, r.jsx)(u.zxk, {
                      className: h.button,
                      onClick: a,
                      children: p.intl.string(_.default.E5V5KC)
                  })
              ]
          });
}
