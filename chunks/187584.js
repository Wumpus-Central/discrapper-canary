n.d(t, { i: () => f });
var i = n(627968),
    s = n(64700),
    r = n(106778),
    a = n(21161),
    l = n(531301),
    o = n(267102),
    u = n(129185),
    d = n(652215);
let c = 1e3 / 60,
    m = {
        velocity: { type: "static-random", minValue: { x: 8, y: 0 }, maxValue: { x: 50, y: 0 } },
        rotation: {
            type: "linear-random",
            minValue: { x: 0, y: 0, z: 0 },
            maxValue: { x: 0, y: 0, z: 360 },
            minAddValue: { x: 0, y: 0, z: -5 },
            maxAddValue: { x: 0, y: 0, z: 5 },
        },
        size: { type: "static-random", minValue: 2, maxValue: 24, uniformVectorValues: !0 },
        dragCoefficient: { type: "static", value: 0.8 },
        opacity: { type: "static-random", minValue: 0.7, maxValue: 0.5 },
    },
    h = ["#FFFFFF"],
    p = [n(426560), ...(0, l.A)(["snowflake"])];
function f(e) {
    let { children: t } = e,
        [n, l] = s.useState(!1),
        f = (0, o.Us)(),
        [g, C] = s.useState(null),
        { confettiCanvas: y } = s.useContext(a.x),
        b = (0, r.f9)(y, g),
        v = s.useMemo(() => ({ triggerAnimation: () => l(!0), untriggerAnimation: () => l(!1) }), []),
        x = s.useCallback(() => {
            let e = y?.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            b.createConfetti({
                ...m,
                position: {
                    type: "static-random",
                    minValue: { x: -t.width / 2, y: -24 },
                    maxValue: { x: t.width, y: -24 },
                },
            });
        }, [b, y]);
    return (s.useEffect(() => {
        let e = n ? setInterval(x, c) : null;
        return () => clearInterval(e);
    }, [n, x]),
    f === d.BRT.OVERLAY)
        ? t
        : (0, i.jsxs)(u.wE.Provider, {
              value: v,
              children: [t, (0, i.jsx)(r.K_, { ref: C, colors: h, sprites: p, spriteWidth: 24, spriteHeight: 24 })],
          });
}
