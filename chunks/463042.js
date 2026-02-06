n.d(t, { A: () => d });
var i = n(627968),
    s = n(417597),
    a = n(775602),
    l = n(608416),
    r = n(307973),
    o = n(446668),
    c = n(180894);
let d = () => {
    let e = (0, s.bG)([a.A], () => a.A.useReducedMotion);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: o.BI,
                children: (0, i.jsx)(l.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: l.$G },
                    yAxisAnimationData: { range: 20, duration: l.Mp, path: l.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, i.jsx)("img", { src: c.A, alt: "", className: o.Q }),
                }),
            }),
            (0, i.jsx)(r.A, {
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
