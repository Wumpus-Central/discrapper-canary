n.d(t, { Z: () => O }), n(47120), n(978209), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(905128),
    f = n(50101),
    _ = n(535396),
    p = n(680278),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function v(e) {
    let { powerup: t } = e;
    return (0, r.jsx)(l.xv, {
        tag: 'span',
        variant: 'text-md/semibold',
        className: m.highlight,
        children: t.title
    });
}
function O(e) {
    let { guild: t, themeResponsive: n = !0, onButtonClick: o } = e,
        g = (0, f.Ek)(t.id, 'GuildBoostingMarketing'),
        b = (0, c.e7)([d.Z], () => {
            var e, n;
            return null == (n = d.Z.getStateForGuild(t.id)) || null == (e = n.catalog) ? void 0 : e.get(_.Us.PERK);
        }),
        [O, I] = i.useState(!1),
        [S, T] = (0, u.q_F)(() => ({
            scale: 0.8,
            config: {
                tension: 500,
                friction: 10
            }
        }));
    i.useEffect(() => {
        let e = setTimeout(() => {
            T({ scale: 1 }), I(!0);
        }, 300);
        return () => clearTimeout(e);
    }, [T]);
    let N = i.useMemo(() => {
        let e;
        if (null == b || 0 === b.length) return '';
        if (1 === b.length) e = (0, r.jsx)(v, { powerup: b[0] });
        else if (2 === b.length)
            e = h.NW.format(p.Z.MNO3sL, {
                perk1: (0, r.jsx)(v, { powerup: b[0] }),
                perk2: (0, r.jsx)(v, { powerup: b[1] })
            });
        else {
            let t = b.reverse();
            e = h.NW.format(p.Z.GmN3VV, {
                perk1: (0, r.jsx)(v, { powerup: t[0] }),
                perk2: (0, r.jsx)(v, { powerup: t[1] })
            });
        }
        return h.NW.format(p.Z['/6GgQk'], { perks: e });
    }, [b]);
    return g && null != b && 0 !== b.length
        ? (0, r.jsxs)(s.animated.div, {
              className: a()(m.container, { [m.themeResponsiveContainer]: n }),
              style: y(E({}, S), { opacity: +!!O }),
              children: [
                  (0, r.jsx)(l.xv, {
                      tag: 'span',
                      variant: 'text-md/semibold',
                      className: a()(m.description, {
                          [m.text]: !n,
                          [m.responsiveText]: n
                      }),
                      children: N
                  }),
                  (0, r.jsx)(u.zxk, {
                      className: m.button,
                      onClick: o,
                      children: h.NW.string(p.Z.E5V5KC)
                  })
              ]
          })
        : null;
}
