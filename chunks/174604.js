n.d(t, { Z: () => y }), n(388685), n(583741), n(953529);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(717976),
    l = n(793030),
    c = n(755721),
    u = n(481060),
    d = n(70300),
    f = n(989308),
    _ = n(388032),
    p = n(240656);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { powerup: t } = e;
    return (0, r.jsx)(l.xv, {
        tag: "span",
        variant: "text-md/semibold",
        className: p.highlight,
        children: t.title,
    });
}
function y(e) {
    let { guild: t, themeResponsive: n = !0, onButtonClick: a } = e,
        h = (0, d.Z)(t.id),
        [g, y] = i.useState(!1),
        [O, v] = (0, u.q_F)(() => ({
            scale: 0.8,
            config: {
                tension: 500,
                friction: 10,
            },
        }));
    i.useEffect(() => {
        let e = setTimeout(() => {
            v({ scale: 1 }), y(!0);
        }, 300);
        return () => clearTimeout(e);
    }, [v]);
    let I = i.useMemo(() => {
        let e;
        if (null == h || 0 === h.length) return "";
        if (1 === h.length) e = (0, r.jsx)(b, { powerup: h[0] });
        else if (2 === h.length)
            e = _.intl.format(f.default.MNO3sL, {
                perk1: (0, r.jsx)(b, { powerup: h[0] }),
                perk2: (0, r.jsx)(b, { powerup: h[1] }),
            });
        else {
            let t = Array.from(h).reverse();
            e = _.intl.format(f.default.GmN3VV, {
                perk1: (0, r.jsx)(b, { powerup: t[0] }),
                perk2: (0, r.jsx)(b, { powerup: t[1] }),
            });
        }
        return _.intl.format(f.default["/6GgQk"], { perks: e });
    }, [h]);
    return null == h || 0 === h.length
        ? null
        : (0, r.jsxs)(s.animated.div, {
              className: o()(p.container, { [p.themeResponsiveContainer]: n }),
              style: E(m({}, O), { opacity: +!!g }),
              children: [
                  (0, r.jsx)(l.xv, {
                      tag: "span",
                      variant: "text-md/semibold",
                      className: o()(p.description, {
                          [p.text]: !n,
                          [p.responsiveText]: n,
                      }),
                      children: I,
                  }),
                  (0, r.jsx)(c.zx, {
                      className: p.button,
                      onClick: a,
                      children: _.intl.string(f.default.E5V5KC),
                  }),
              ],
          });
}
