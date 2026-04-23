"use strict";
n.d(t, { i: () => h });
var r = n(627968),
    i = n(64700),
    s = n(106778),
    a = n(21161),
    o = n(531301),
    l = n(267102),
    u = n(129185),
    c = n(652215);
let d = 1e3 / 60,
    _ = {
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
    f = ["#FFFFFF"],
    p = [n(426560), ...(0, o.A)(["snowflake"])];
function h(e) {
    let { children: t } = e,
        [n, o] = i.useState(!1),
        h = (0, l.Us)(),
        [E, m] = i.useState(null),
        { confettiCanvas: g } = i.useContext(a.x),
        A = (0, s.f9)(g, E),
        I = i.useMemo(() => ({ triggerAnimation: () => o(!0), untriggerAnimation: () => o(!1) }), []),
        T = i.useCallback(() => {
            let e = g?.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            A.createConfetti({
                ..._,
                position: {
                    type: "static-random",
                    minValue: { x: -t.width / 2, y: -24 },
                    maxValue: { x: t.width, y: -24 },
                },
            });
        }, [A, g]);
    return (i.useEffect(() => {
        let e = n ? setInterval(T, d) : null;
        return () => clearInterval(e);
    }, [n, T]),
    h === c.BRT.OVERLAY)
        ? t
        : (0, r.jsxs)(u.wE.Provider, {
              value: I,
              children: [t, (0, r.jsx)(s.K_, { ref: m, colors: f, sprites: p, spriteWidth: 24, spriteHeight: 24 })],
          });
}
