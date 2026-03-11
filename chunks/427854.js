"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(490249),
    l = n(158954),
    u = n(397927),
    c = n(263215),
    d = n(136708),
    _ = n(985018),
    f = n(939614);
function p(e) {
    let { powerup: t } = e;
    return (0, r.jsx)(l.EYj, { tag: "span", variant: "text-md/semibold", className: f.Zt, children: t.title });
}
function h(e) {
    let { guild: t, themeResponsive: n = !0, onButtonClick: s } = e,
        h = (0, c.A)(t.id),
        [m, E] = i.useState(!1),
        [g, A] = (0, u.zhh)(() => ({ scale: 0.8, config: { tension: 500, friction: 10 } }));
    i.useEffect(() => {
        let e = setTimeout(() => {
            A({ scale: 1 }), E(!0);
        }, 300);
        return () => clearTimeout(e);
    }, [A]);
    let I = i.useMemo(() => {
        let e;
        if (null == h || 0 === h.length) return "";
        if (1 === h.length) e = (0, r.jsx)(p, { powerup: h[0] });
        else if (2 === h.length)
            e = _.intl.format(d.default.MNO3sG, {
                perk1: (0, r.jsx)(p, { powerup: h[0] }),
                perk2: (0, r.jsx)(p, { powerup: h[1] }),
            });
        else {
            let t = Array.from(h).reverse();
            e = _.intl.format(d.default.GmN3Vf, {
                perk1: (0, r.jsx)(p, { powerup: t[0] }),
                perk2: (0, r.jsx)(p, { powerup: t[1] }),
            });
        }
        return _.intl.format(d.default["/6GgQq"], { perks: e });
    }, [h]);
    return null == h || 0 === h.length
        ? null
        : (0, r.jsxs)(o.animated.div, {
              className: a()(f.kL, { [f.Vz]: n }),
              style: { ...g, opacity: +!!m },
              children: [
                  (0, r.jsx)(l.EYj, {
                      tag: "span",
                      variant: "text-md/semibold",
                      className: a()(f.h_, { [f.Qq]: !n, [f.sl]: n }),
                      children: I,
                  }),
                  (0, r.jsx)(l.$nd, { variant: "primary", text: _.intl.string(d.default.E5V5KK), onClick: s }),
              ],
          });
}
