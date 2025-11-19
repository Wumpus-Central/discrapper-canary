n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    a = n(374874),
    s = n(927506);
let o = (e) => {
    let { skipPulseAnimation: t = !1 } = e;
    return (0, r.jsx)("div", {
        className: i()(a.productCardContainer, s.productSkeletonCardContainer, { [s.pulseAnimation]: !t }),
        children: (0, r.jsxs)("div", {
            className: i()(a.productCardContentContainer, s.productSkeletonContent),
            children: [
                (0, r.jsx)("div", { className: s.productSkeletonTitle }),
                (0, r.jsx)("div", { className: s.productSkeletonDescription }),
            ],
        }),
    });
};
