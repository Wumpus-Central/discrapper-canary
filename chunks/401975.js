n.d(t, { Z: () => i });
var r = n(54381);
n(473749);
var l = n(120356),
    a = n.n(l),
    s = n(595868),
    o = n(853637);
let i = (e) => {
    let { skipPulseAnimation: t = !1 } = e;
    return (0, r.jsx)("div", {
        className: a()(s.productCardContainer, o.productSkeletonCardContainer, { [o.pulseAnimation]: !t }),
        children: (0, r.jsxs)("div", {
            className: a()(s.productCardContentContainer, o.productSkeletonContent),
            children: [
                (0, r.jsx)("div", { className: o.productSkeletonTitle }),
                (0, r.jsx)("div", { className: o.productSkeletonDescription }),
            ],
        }),
    });
};
