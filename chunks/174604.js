n.d(t, { Z: () => y }), n(47120), n(978209), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(793030),
    c = n(481060),
    u = n(50101),
    d = n(111360),
    f = n(535396),
    _ = n(730621),
    p = n(388032),
    h = n(752593);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function v(e) {
    let { powerup: t } = e;
    return (0, r.jsx)(l.xv, {
        tag: 'span',
        variant: 'text-md/semibold',
        className: h.highlight,
        children: t.title
    });
}
function y(e) {
    var t;
    let { guild: n, themeResponsive: o = !0, onButtonClick: m } = e,
        E = (0, u.Ek)(n, 'GuildBoostingMarketing'),
        y = null === (t = (0, d.Z)(n.id)) || void 0 === t ? void 0 : t.get(f.Us.PERK),
        [O, I] = i.useState(!1),
        [S, T] = (0, c.q_F)(() => ({
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
    let N = i.useCallback(() => {
            m();
        }, [m]),
        A = i.useMemo(() => {
            let e;
            if (null == y || 0 === y.length) return '';
            if (1 === y.length) e = (0, r.jsx)(v, { powerup: y[0] });
            else if (2 === y.length)
                e = p.NW.format(_.Z.MNO3sL, {
                    perk1: (0, r.jsx)(v, { powerup: y[0] }),
                    perk2: (0, r.jsx)(v, { powerup: y[1] })
                });
            else {
                let t = y.reverse();
                e = p.NW.format(_.Z.GmN3VV, {
                    perk1: (0, r.jsx)(v, { powerup: t[0] }),
                    perk2: (0, r.jsx)(v, { powerup: t[1] })
                });
            }
            return p.NW.format(_.Z['/6GgQk'], { perks: e });
        }, [y]);
    return E && null != y && 0 !== y.length
        ? (0, r.jsxs)(s.animated.div, {
              className: a()(h.container, { [h.themeResponsiveContainer]: o }),
              style: b(g({}, S), { opacity: +!!O }),
              children: [
                  (0, r.jsx)(l.xv, {
                      tag: 'span',
                      variant: 'text-md/semibold',
                      className: a()(h.description, {
                          [h.text]: !o,
                          [h.responsiveText]: o
                      }),
                      children: A
                  }),
                  (0, r.jsx)(c.zxk, {
                      className: h.button,
                      onClick: N,
                      children: p.NW.string(_.Z.E5V5KC)
                  })
              ]
          })
        : null;
}
