"use strict";
n.d(t, { Ay: () => h });
var r = n(627968),
    i = n(64700),
    a = n(475922),
    s = n(534149),
    o = n(582754),
    l = n(736653),
    u = n(796688);
let c = { width: 60, height: 60 },
    d = 3e3,
    _ = (e) => {
        let { currentAnimationType: t, animationTypeRef: n, onSetAnimationDurationMS: r, play: a, getDuration: s } = e,
            o = s(),
            l = null != o ? 1e3 * o : d;
        (0, i.useEffect)(() => {
            null !== t && t !== n.current && ((n.current = t), a());
        }, [t, a, n]),
            (0, i.useEffect)(() => {
                r(l);
            }, [r, l]);
    },
    f = (e) => {
        let { currentAnimationType: t, ...n } = e,
            { Component: i, ...a } = (0, s.N)(t ?? "earn");
        return (
            _({ currentAnimationType: t, ...n, ...a }),
            (0, r.jsx)(i, { ...c, size: "custom", className: u.E$, useLottieDefaultColors: !0 })
        );
    },
    p = (e) => {
        let { currentAnimationType: t, ...n } = e,
            { Component: i, ...s } = (0, a.q)(t ?? "earn");
        return (
            _({ currentAnimationType: t, ...n, ...s }),
            (0, r.jsx)(i, { ...c, size: "custom", className: u.E$, useLottieDefaultColors: !0 })
        );
    },
    h = (e) => {
        let t = (0, l.Ay)();
        return (0, o.qB)(t) ? (0, r.jsx)(p, { ...e }) : (0, r.jsx)(f, { ...e });
    };
