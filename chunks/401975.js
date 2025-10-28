n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    o = n(213301),
    s = n(586312);
let a = (e) => {
    let { skipPulseAnimation: t = !1 } = e;
    return (0, r.jsx)("div", {
        className: i()(o.productCardContainer, s.productSkeletonCardContainer, { [s.pulseAnimation]: !t }),
        children: (0, r.jsxs)("div", {
            className: i()(o.productCardContentContainer, s.productSkeletonContent),
            children: [
                (0, r.jsx)("div", { className: s.productSkeletonTitle }),
                (0, r.jsx)("div", { className: s.productSkeletonDescription }),
            ],
        }),
    });
};
