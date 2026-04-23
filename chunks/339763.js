n.d(t, { Ay: () => x });
var l = n(627968),
    a = n(64700),
    r = n(475922),
    s = n(534149),
    i = n(462887),
    u = n(736653),
    c = n(743383);
let o = { width: 60, height: 60 },
    d = (e) => {
        let { currentAnimationType: t, animationTypeRef: n, onSetAnimationDurationMS: l, play: r, getDuration: s } = e,
            i = s(),
            u = null != i ? 1e3 * i : 3e3;
        (0, a.useEffect)(() => {
            null !== t && t !== n.current && ((n.current = t), r());
        }, [t, r, n]),
            (0, a.useEffect)(() => {
                l(u);
            }, [l, u]);
    },
    m = (e) => {
        let { currentAnimationType: t, ...n } = e,
            { Component: a, ...r } = (0, s.N)(t ?? "earn");
        return (
            d({ currentAnimationType: t, ...n, ...r }),
            (0, l.jsx)(a, { ...o, size: "custom", className: c.E$, useLottieDefaultColors: !0 })
        );
    },
    f = (e) => {
        let { currentAnimationType: t, ...n } = e,
            { Component: a, ...s } = (0, r.q)(t ?? "earn");
        return (
            d({ currentAnimationType: t, ...n, ...s }),
            (0, l.jsx)(a, { ...o, size: "custom", className: c.E$, useLottieDefaultColors: !0 })
        );
    },
    x = (e) => {
        let t = (0, u.Ay)();
        return (0, i.q)(t) ? (0, l.jsx)(f, { ...e }) : (0, l.jsx)(m, { ...e });
    };
