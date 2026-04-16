n.d(t, { A: () => c });
var i = n(627968),
    s = n(417597),
    l = n(775602),
    r = n(608416),
    a = n(307973),
    o = n(80933),
    d = n(180894);
let c = () => {
    let e = (0, s.bG)([l.A], () => l.A.useReducedMotion);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: o.BI,
                children: (0, i.jsx)(r.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: r.$G },
                    yAxisAnimationData: { range: 20, duration: r.Mp, path: r.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, i.jsx)("img", { src: d.A, alt: "", className: o.Q }),
                }),
            }),
            (0, i.jsx)(a.A, {
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
