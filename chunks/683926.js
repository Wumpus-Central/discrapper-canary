"use strict";
n.d(t, { A: () => l });
var r = n(627968),
    i = n(773690),
    s = n(158954),
    a = n(816758),
    o = n(949877);
function l(e) {
    let { text: t, visible: n } = e;
    return (0, s.pnh)(n, {
        from: { opacity: 0, transform: "translateY(20px)" },
        enter: { opacity: 1, transform: "translateY(0px)" },
        leave: { opacity: 0, transform: "translateY(20px)" },
        delay: 200,
    })(
        (e, n) =>
            n &&
            (0, r.jsx)(i.animated.div, {
                style: e,
                className: o.YL,
                children: (0, r.jsx)(a.A, {
                    className: o.yn,
                    children: (0, r.jsx)("div", { className: o.Qq, children: t }),
                }),
            }),
    );
}
