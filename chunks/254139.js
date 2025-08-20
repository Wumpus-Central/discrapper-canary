n.d(t, { Z: () => u });
var r = n(951288),
    i = n(399606),
    a = n(607070),
    o = n(526167),
    s = n(761006),
    l = n(518707),
    c = n(672624);
let u = (e) => {
    let { containerVisibilityPercentage: t } = e,
        n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        u = (0, o.rO)();
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
                boltTrinketClassName: c.bolt,
                carTrinketClassName: c.car,
                hammerTrinketClassName: c.hammer,
                keyTrinketClassName: c.key,
                starTrinketClassName: c.star,
            }),
        ],
    });
};
