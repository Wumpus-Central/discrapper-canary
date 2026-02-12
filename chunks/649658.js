"use strict";
n.d(t, { y: () => p });
var r = n(627968),
    i = n(64700),
    a = n(40153),
    s = n(397927),
    o = n(480504),
    l = n(652215),
    u = n(613568);
let c = 200,
    d = { from: { opacity: 1 }, enter: { opacity: 1 }, leave: { opacity: 0 }, config: { duration: 200 } },
    _ = { ...d, config: { duration: 50 } },
    f = { ...d, config: (e, t) => (t ? { duration: 800 } : { duration: 200 }) };
function h(e) {
    let { readyState: t, placeholderImg: n, placeholderStyle: o } = e,
        f = t === l.Rv1.LOADING,
        [h] = i.useState(() => Date.now()),
        p = t === l.Rv1.READY && Date.now() - h < c,
        g = (0, s.pnh)(f && null != n, p ? _ : d);
    return (0, r.jsx)(r.Fragment, {
        children: g(
            (e, t) => t && (0, r.jsx)(a.animated.img, { style: { ...o, ...e }, className: u.bc, src: n, alt: "" }),
        ),
    });
}
function p(e) {
    let { readyState: t, aspectRatio: n, placeholder: c, placeholderVersion: d, placeholderStyle: _, children: p } = e,
        g = t === l.Rv1.LOADING,
        [E] = i.useState(g),
        [A, I] = i.useState(!1),
        T = (0, o._)(c, d, E);
    i.useEffect(() => {
        let e = setTimeout(() => {
            I(!0);
        }, 2e3);
        return () => {
            clearTimeout(e);
        };
    }, [E]);
    let y = (0, s.pnh)(g && A, f);
    return (0, r.jsxs)("div", {
        className: u.bX,
        style: { aspectRatio: n },
        children: [
            p,
            null != T && (0, r.jsx)(h, { readyState: t, placeholderImg: T, placeholderStyle: _ }),
            y(
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
