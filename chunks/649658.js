"use strict";
n.d(t, { y: () => h });
var r = n(627968),
    i = n(64700),
    a = n(92674),
    s = n(397927),
    o = n(480504),
    l = n(652215),
    u = n(613568);
let c = 200,
    d = { from: { opacity: 1 }, enter: { opacity: 1 }, leave: { opacity: 0 }, config: { duration: 200 } },
    _ = { ...d, config: { duration: 50 } },
    f = { ...d, config: (e, t) => (t ? { duration: 800 } : { duration: 200 }) };
function p(e) {
    let { readyState: t, placeholderImg: n, placeholderStyle: o } = e,
        f = t === l.Rv1.LOADING,
        [p] = i.useState(() => Date.now()),
        h = t === l.Rv1.READY && Date.now() - p < c,
        m = (0, s.pnh)(f && null != n, h ? _ : d);
    return (0, r.jsx)(r.Fragment, {
        children: m(
            (e, t) => t && (0, r.jsx)(a.animated.img, { style: { ...o, ...e }, className: u.bc, src: n, alt: "" }),
        ),
    });
}
function h(e) {
    let { readyState: t, aspectRatio: n, placeholder: c, placeholderVersion: d, placeholderStyle: _, children: h } = e,
        m = t === l.Rv1.LOADING,
        [g] = i.useState(m),
        [E, A] = i.useState(!1),
        I = (0, o._)(c, d, g);
    i.useEffect(() => {
        let e = setTimeout(() => {
            A(!0);
        }, 2e3);
        return () => {
            clearTimeout(e);
        };
    }, [g]);
    let T = (0, s.pnh)(m && E, f);
    return (0, r.jsxs)("div", {
        className: u.bX,
        style: { aspectRatio: n },
        children: [
            h,
            null != I && (0, r.jsx)(p, { readyState: t, placeholderImg: I, placeholderStyle: _ }),
            T(
                (e, t) =>
                    t &&
                    (0, r.jsx)(a.animated.div, {
                        style: e,
                        className: u.oM,
                        children: (0, r.jsx)(s.y$y, { type: s.tVU.SPINNING_CIRCLE_SIMPLE, className: u.Xd }),
                    }),
            ),
        ],
    });
}
