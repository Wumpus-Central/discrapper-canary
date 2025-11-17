n.d(t, { Z: () => o });
var r = n(54381),
    i = n(761006),
    a = n(314042);
let o = (e) => {
    let { isMotionReduced: t, containerVisibilityPercentage: n } = e;
    return (0, r.jsx)(i.Z, {
        isMotionReduced: t,
        containerVisibilityPercentage: n,
        hammerContainerClassName: a.hammerContainer,
        keyContainerClassName: a.keyContainer,
        hammerAssetClassName: a.hammerTrinket,
        keyAssetClassName: a.keyTrinket,
        animationSpeedScale: 2,
    });
};
