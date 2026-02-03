n.d(t, {
    A: () => b,
}),
    n(896048),
    n(264879),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(92674),
    o = n(158954),
    s = n(311907),
    l = n(397927),
    c = n(736653),
    u = n(775602),
    d = n(263215),
    f = n(985018),
    p = n(333354),
    _ = n(159118);

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

function y(e) {
    let { powerup: t } = e;
    return (0, r.jsx)(o.EYj, {
        tag: "span",
        variant: "text-md/semibold",
        className: _.Zt,
        children: t.title,
    });
}

function b(e) {
    let { guildId: t, onButtonClick: n } = e,
        h = (0, d.A)(t),
        g = (0, c.Ay)(),
        b = (0, l.qB1)(g),
        O = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        [v, A] = i.useState(O),
        [I, S] = (0, l.zhh)(() => ({
            scale: O ? 1 : 0.8,
            config: {
                tension: 500,
                friction: 10,
            },
        }));
    i.useEffect(() => {
        if (O) return;
        let e = setTimeout(() => {
            S({
                scale: 1,
            }),
                A(!0);
        }, 300);
        return () => clearTimeout(e);
    }, [S, O]);
    let T = i.useMemo(() => {
        let e;
        if (null == h || 0 === h.length) return "";
        if (1 === h.length)
            e = (0, r.jsx)(y, {
                powerup: h[0],
            });
        else if (2 === h.length)
            e = f.intl.format(p.default.MNO3sG, {
                perk1: (0, r.jsx)(y, {
                    powerup: h[0],
                }),
                perk2: (0, r.jsx)(y, {
                    powerup: h[1],
                }),
            });
        else {
            let t = Array.from(h).reverse();
            e = f.intl.format(p.default.GmN3Vf, {
                perk1: (0, r.jsx)(y, {
                    powerup: t[0],
                }),
                perk2: (0, r.jsx)(y, {
                    powerup: t[1],
                }),
            });
        }
        return f.intl.format(p.default["/6GgQq"], {
            perks: e,
        });
    }, [h]);
    return null == h || 0 === h.length
        ? null
        : (0, r.jsxs)(a.animated.div, {
              className: _.kL,
              style: E(m({}, I), {
                  opacity: +!!v,
              }),
              children: [
                  (0, r.jsx)(o.EYj, {
                      tag: "span",
                      variant: "text-md/semibold",
                      className: _.h_,
                      children: T,
                  }),
                  (0, r.jsx)(o.$nd, {
                      variant: b ? "primary" : "overlay-primary",
                      size: "sm",
                      text: f.intl.string(p.default.E5V5KK),
                      onClick: n,
                  }),
              ],
          });
}
