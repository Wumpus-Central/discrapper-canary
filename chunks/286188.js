"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    a = n(522160),
    s = n(158954),
    o = n(311907),
    l = n(397927),
    u = n(736653),
    c = n(775602),
    d = n(263215),
    _ = n(985018),
    f = n(333354),
    h = n(159118);
function p(e) {
    let { powerup: t } = e;
    return (0, r.jsx)(s.EYj, { tag: "span", variant: "text-md/semibold", className: h.Zt, children: t.title });
}
function g(e) {
    let { guildId: t, onButtonClick: n } = e,
        g = (0, d.A)(t),
        E = (0, u.Ay)(),
        A = (0, l.qB1)(E),
        I = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        [T, y] = i.useState(I),
        [S, v] = (0, l.zhh)(() => ({ scale: I ? 1 : 0.8, config: { tension: 500, friction: 10 } }));
    i.useEffect(() => {
        if (I) return;
        let e = setTimeout(() => {
            v({ scale: 1 }), y(!0);
        }, 300);
        return () => clearTimeout(e);
    }, [v, I]);
    let C = i.useMemo(() => {
        let e;
        if (null == g || 0 === g.length) return "";
        if (1 === g.length) e = (0, r.jsx)(p, { powerup: g[0] });
        else if (2 === g.length)
            e = _.intl.format(f.default.MNO3sG, {
                perk1: (0, r.jsx)(p, { powerup: g[0] }),
                perk2: (0, r.jsx)(p, { powerup: g[1] }),
            });
        else {
            let t = Array.from(g).reverse();
            e = _.intl.format(f.default.GmN3Vf, {
                perk1: (0, r.jsx)(p, { powerup: t[0] }),
                perk2: (0, r.jsx)(p, { powerup: t[1] }),
            });
        }
        return _.intl.format(f.default["/6GgQq"], { perks: e });
    }, [g]);
    return null == g || 0 === g.length
        ? null
        : (0, r.jsxs)(a.animated.div, {
              className: h.kL,
              style: { ...S, opacity: +!!T },
              children: [
                  (0, r.jsx)(s.EYj, { tag: "span", variant: "text-md/semibold", className: h.h_, children: C }),
                  (0, r.jsx)(s.$nd, {
                      variant: A ? "primary" : "overlay-primary",
                      size: "sm",
                      text: _.intl.string(f.default.E5V5KK),
                      onClick: n,
                  }),
              ],
          });
}
