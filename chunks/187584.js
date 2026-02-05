"use strict";
n.d(t, { i: () => m });
var r = n(627968),
    i = n(64700),
    a = n(106778),
    s = n(21161),
    o = n(531301),
    l = n(267102),
    u = n(129185),
    c = n(652215);
let d = 1e3 / 60,
    _ = 24,
    f = {
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
    p = ["#FFFFFF"],
    h = [n(426560), ...(0, o.A)(["snowflake"])];
function m(e) {
    let { children: t } = e,
        [n, o] = i.useState(!1),
        m = (0, l.Us)(),
        [g, E] = i.useState(null),
        { confettiCanvas: A } = i.useContext(s.x),
        I = (0, a.f9)(A, g),
        T = i.useMemo(() => ({ triggerAnimation: () => o(!0), untriggerAnimation: () => o(!1) }), []),
        y = i.useCallback(() => {
            let e = A?.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            I.createConfetti({
                ...f,
                position: {
                    type: "static-random",
                    minValue: { x: -t.width / 2, y: -_ },
                    maxValue: { x: t.width, y: -_ },
                },
            });
        }, [I, A]);
    return (i.useEffect(() => {
        let e = n ? setInterval(y, d) : null;
        return () => clearInterval(e);
    }, [n, y]),
    m === c.BRT.OVERLAY)
        ? t
        : (0, r.jsxs)(u.wE.Provider, {
              value: T,
              children: [t, (0, r.jsx)(a.K_, { ref: E, colors: p, sprites: h, spriteWidth: _, spriteHeight: _ })],
          });
}
