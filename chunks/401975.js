n.d(t, { Z: () => a });
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    s = n(213301),
    o = n(586312);
let a = (e) => {
    let { skipPulseAnimation: t = !1 } = e;
    return (0, r.jsx)("div", {
        className: i()(s.productCardContainer, o.productSkeletonCardContainer, { [o.pulseAnimation]: !t }),
        children: (0, r.jsxs)("div", {
            className: i()(s.productCardContentContainer, o.productSkeletonContent),
            children: [
                (0, r.jsx)("div", { className: o.productSkeletonTitle }),
                (0, r.jsx)("div", { className: o.productSkeletonDescription }),
            ],
        }),
    });
};
