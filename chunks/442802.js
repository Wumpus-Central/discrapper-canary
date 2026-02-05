n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    a = n(106778);
let l = [n(426560)],
    s = ["#FFFFFF"],
    o = 1e3 / 60,
    d = {
        velocity: { type: "static-random", minValue: { x: 0, y: 1 }, maxValue: { x: 3, y: 3 } },
        rotation: {
            type: "linear-random",
            minValue: { x: 0, y: 0, z: 0 },
            maxValue: { x: 0, y: 0, z: 360 },
            minAddValue: { x: 0, y: 0, z: -5 },
            maxAddValue: { x: 0, y: 0, z: 5 },
        },
        size: { type: "static-random", minValue: 2, maxValue: 6 },
        dragCoefficient: { type: "static", value: 830 },
        opacity: { type: "static", value: 0.3 },
    };
function c(e) {
    let { className: t, firing: n = !0, wind: c = 2, sprites: u = l, spriteColors: A = s, confettiConfig: h } = e,
        [_, m] = r.useState(null),
        [p, g] = r.useState(null),
        E = (0, a.f9)(p, _),
        f = r.useMemo(() => new a.OH({ wind: c }), [c]),
        I = r.useCallback(() => {
            let e = p?.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            E.createConfetti({
                ...d,
                ...h,
                position: {
                    type: "static-random",
                    minValue: { x: -t.width / 2, y: -6 },
                    maxValue: { x: t.width, y: -6 },
                },
            });
        }, [E, p, h]);
    return (
        r.useEffect(() => {
            let e = n ? setInterval(I, o) : null;
            return () => clearInterval(e);
        }, [n, I]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.Fk, { ref: g, className: t, environment: f }),
                (0, i.jsx)(a.K_, { ref: m, colors: A, sprites: u, spriteWidth: 6, spriteHeight: 6 }),
            ],
        })
    );
}
