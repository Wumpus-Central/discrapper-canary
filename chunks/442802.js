a.d(l, { A: () => o });
var t = a(627968),
    s = a(64700),
    i = a(106778);
let n = [a(426560)],
    c = ["#FFFFFF"],
    h = 1e3 / 60,
    r = {
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
function o(e) {
    let { className: l, firing: a = !0, wind: o = 2, sprites: d = n, spriteColors: v = c, confettiConfig: g } = e,
        [p, m] = s.useState(null),
        [f, w] = s.useState(null),
        x = (0, i.f9)(f, p),
        u = s.useMemo(() => new i.OH({ wind: o }), [o]),
        A = s.useCallback(() => {
            let e = f?.getCanvas();
            if (null == e) return;
            let l = e.getBoundingClientRect();
            x.createConfetti({
                ...r,
                ...g,
                position: {
                    type: "static-random",
                    minValue: { x: -l.width / 2, y: -6 },
                    maxValue: { x: l.width, y: -6 },
                },
            });
        }, [x, f, g]);
    return (
        s.useEffect(() => {
            let e = a ? setInterval(A, h) : null;
            return () => clearInterval(e);
        }, [a, A]),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(i.Fk, { ref: w, className: l, environment: u }),
                (0, t.jsx)(i.K_, { ref: m, colors: v, sprites: d, spriteWidth: 6, spriteHeight: 6 }),
            ],
        })
    );
}
