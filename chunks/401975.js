n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    a = n(213301),
    o = n(586312);
let s = (e) => {
    let { skipPulseAnimation: t = !1 } = e;
    return (0, r.jsx)("div", {
        className: i()(a.productCardContainer, o.productSkeletonCardContainer, { [o.pulseAnimation]: !t }),
        children: (0, r.jsxs)("div", {
            className: i()(a.productCardContentContainer, o.productSkeletonContent),
            children: [
                (0, r.jsx)("div", { className: o.productSkeletonTitle }),
                (0, r.jsx)("div", { className: o.productSkeletonDescription }),
            ],
        }),
    });
};
