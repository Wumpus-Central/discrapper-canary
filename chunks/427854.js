"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(522160),
    l = n(158954),
    u = n(397927),
    c = n(263215),
    d = n(333354),
    _ = n(985018),
    f = n(68388);
function h(e) {
    let { powerup: t } = e;
    return (0, r.jsx)(l.EYj, { tag: "span", variant: "text-md/semibold", className: f.Zt, children: t.title });
}
function p(e) {
    let { guild: t, themeResponsive: n = !0, onButtonClick: a } = e,
        p = (0, c.A)(t.id),
        [g, E] = i.useState(!1),
        [A, I] = (0, u.zhh)(() => ({ scale: 0.8, config: { tension: 500, friction: 10 } }));
    i.useEffect(() => {
        let e = setTimeout(() => {
            I({ scale: 1 }), E(!0);
        }, 300);
        return () => clearTimeout(e);
    }, [I]);
    let T = i.useMemo(() => {
        let e;
        if (null == p || 0 === p.length) return "";
        if (1 === p.length) e = (0, r.jsx)(h, { powerup: p[0] });
        else if (2 === p.length)
            e = _.intl.format(d.default.MNO3sG, {
                perk1: (0, r.jsx)(h, { powerup: p[0] }),
                perk2: (0, r.jsx)(h, { powerup: p[1] }),
            });
        else {
            let t = Array.from(p).reverse();
            e = _.intl.format(d.default.GmN3Vf, {
                perk1: (0, r.jsx)(h, { powerup: t[0] }),
                perk2: (0, r.jsx)(h, { powerup: t[1] }),
            });
        }
        return _.intl.format(d.default["/6GgQq"], { perks: e });
    }, [p]);
    return null == p || 0 === p.length
        ? null
        : (0, r.jsxs)(o.animated.div, {
              className: s()(f.kL, { [f.Vz]: n }),
              style: { ...A, opacity: +!!g },
              children: [
                  (0, r.jsx)(l.EYj, {
                      tag: "span",
                      variant: "text-md/semibold",
                      className: s()(f.h_, { [f.Qq]: !n, [f.sl]: n }),
                      children: T,
                  }),
                  (0, r.jsx)(l.$nd, { variant: "primary", text: _.intl.string(d.default.E5V5KK), onClick: a }),
              ],
          });
}
