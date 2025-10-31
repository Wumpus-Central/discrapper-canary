n.d(t, { Z: () => o });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    s = n(213301),
    a = n(586312);
let o = (e) => {
    let { skipPulseAnimation: t = !1 } = e;
    return (0, r.jsx)("div", {
        className: i()(s.productCardContainer, a.productSkeletonCardContainer, { [a.pulseAnimation]: !t }),
        children: (0, r.jsxs)("div", {
            className: i()(s.productCardContentContainer, a.productSkeletonContent),
            children: [
                (0, r.jsx)("div", { className: a.productSkeletonTitle }),
                (0, r.jsx)("div", { className: a.productSkeletonDescription }),
            ],
        }),
    });
};
