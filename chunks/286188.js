"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(92674),
    s = n(158954),
    o = n(311907),
    l = n(397927),
    u = n(736653),
    c = n(775602),
    d = n(263215),
    _ = n(985018),
    f = n(333354),
    p = n(159118);
function h(e) {
    let { powerup: t } = e;
    return (0, r.jsx)(s.EYj, { tag: "span", variant: "text-md/semibold", className: p.Zt, children: t.title });
}
function m(e) {
    let { guildId: t, onButtonClick: n } = e,
        m = (0, d.A)(t),
        g = (0, u.Ay)(),
        E = (0, l.qB1)(g),
        A = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        [I, T] = i.useState(A),
        [y, S] = (0, l.zhh)(() => ({ scale: A ? 1 : 0.8, config: { tension: 500, friction: 10 } }));
    i.useEffect(() => {
        if (A) return;
        let e = setTimeout(() => {
            S({ scale: 1 }), T(!0);
        }, 300);
        return () => clearTimeout(e);
    }, [S, A]);
    let v = i.useMemo(() => {
        let e;
        if (null == m || 0 === m.length) return "";
        if (1 === m.length) e = (0, r.jsx)(h, { powerup: m[0] });
        else if (2 === m.length)
            e = _.intl.format(f.default.MNO3sG, {
                perk1: (0, r.jsx)(h, { powerup: m[0] }),
                perk2: (0, r.jsx)(h, { powerup: m[1] }),
            });
        else {
            let t = Array.from(m).reverse();
            e = _.intl.format(f.default.GmN3Vf, {
                perk1: (0, r.jsx)(h, { powerup: t[0] }),
                perk2: (0, r.jsx)(h, { powerup: t[1] }),
            });
        }
        return _.intl.format(f.default["/6GgQq"], { perks: e });
    }, [m]);
    return null == m || 0 === m.length
        ? null
        : (0, r.jsxs)(a.animated.div, {
              className: p.kL,
              style: { ...y, opacity: +!!I },
              children: [
                  (0, r.jsx)(s.EYj, { tag: "span", variant: "text-md/semibold", className: p.h_, children: v }),
                  (0, r.jsx)(s.$nd, {
                      variant: E ? "primary" : "overlay-primary",
                      size: "sm",
                      text: _.intl.string(f.default.E5V5KK),
                      onClick: n,
                  }),
              ],
          });
}
