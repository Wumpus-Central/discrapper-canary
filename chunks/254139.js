n.d(t, { Z: () => u });
var r = n(54381),
    i = n(399606),
    o = n(607070),
    a = n(526167),
    s = n(761006),
    l = n(518707),
    c = n(672624);
let u = (e) => {
    let { containerVisibilityPercentage: t } = e,
        n = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        u = (0, a.rO)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Z, {
                supportHEVCAlpha: u,
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                containerClassName: c.flyingWumpusContainer,
                assetClassName: c.flyingWumpusAsset,
            }),
            (0, r.jsx)(s.Z, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                boltContainerClassName: c.boltContainer,
                carContainerClassName: c.carContainer,
                hammerContainerClassName: c.hammerContainer,
                keyContainerClassName: c.keyContainer,
                starContainerClassName: c.starContainer,
                boltAssetClassName: c.boltTrinket,
                carAssetClassName: c.carTrinket,
                hammerAssetClassName: c.hammerTrinket,
                keyAssetClassName: c.keyTrinket,
                starAssetClassName: c.starTrinket,
            }),
        ],
    });
};
