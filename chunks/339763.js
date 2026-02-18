l.d(t, { Ay: () => h });
var a = l(627968),
    n = l(64700),
    r = l(475922),
    i = l(534149),
    s = l(582754),
    o = l(736653),
    u = l(796688);
let c = { width: 60, height: 60 },
    d = (e) => {
        let { currentAnimationType: t, animationTypeRef: l, onSetAnimationDurationMS: a, play: r, getDuration: i } = e,
            s = i(),
            o = null != s ? 1e3 * s : 3e3;
        (0, n.useEffect)(() => {
            null !== t && t !== l.current && ((l.current = t), r());
        }, [t, r, l]),
            (0, n.useEffect)(() => {
                a(o);
            }, [a, o]);
    },
    p = (e) => {
        let { currentAnimationType: t, ...l } = e,
            { Component: n, ...r } = (0, i.N)(t ?? "earn");
        return (
            d({ currentAnimationType: t, ...l, ...r }),
            (0, a.jsx)(n, { ...c, size: "custom", className: u.E$, useLottieDefaultColors: !0 })
        );
    },
    m = (e) => {
        let { currentAnimationType: t, ...l } = e,
            { Component: n, ...i } = (0, r.q)(t ?? "earn");
        return (
            d({ currentAnimationType: t, ...l, ...i }),
            (0, a.jsx)(n, { ...c, size: "custom", className: u.E$, useLottieDefaultColors: !0 })
        );
    },
    h = (e) => {
        let t = (0, o.Ay)();
        return (0, s.qB)(t) ? (0, a.jsx)(m, { ...e }) : (0, a.jsx)(p, { ...e });
    };
