s.d(t, { A: () => d });
var r = s(627968),
    a = s(417597),
    i = s(775602),
    n = s(608416),
    l = s(307973),
    o = s(999461),
    c = s(180894);
let d = () => {
    let e = (0, a.bG)([i.A], () => i.A.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: o.BI,
                children: (0, r.jsx)(n.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: n.$G },
                    yAxisAnimationData: { range: 20, duration: n.Mp, path: n.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, r.jsx)("img", { src: c.A, alt: "", className: o.Q }),
                }),
            }),
            (0, r.jsx)(l.A, {
                isMotionReduced: e,
                boltContainerClassName: o.nJ,
                carContainerClassName: o.IN,
                hammerContainerClassName: o.Gj,
                keyContainerClassName: o.FV,
                starContainerClassName: o.E1,
                boltAssetClassName: o.j7,
                carAssetClassName: o.or,
                hammerAssetClassName: o.Wv,
                keyAssetClassName: o.rs,
                starAssetClassName: o.OY,
            }),
        ],
    });
};
