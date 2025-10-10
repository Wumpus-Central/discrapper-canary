n.d(t, { Z: () => o });
var r = n(951288);
n(647438);
var l = n(120356),
    s = n.n(l),
    a = n(213301),
    i = n(586312);
let o = (e) => {
    let { skipPulseAnimation: t = !1 } = e;
    return (0, r.jsx)("div", {
        className: s()(a.baseProductCardContainer, i.productSkeletonCardContainer, { [i.pulseAnimation]: !t }),
        children: (0, r.jsxs)("div", {
            className: s()(a.baseProductCardContentContainer, i.productSkeletonContent),
            children: [
                (0, r.jsx)("div", { className: i.productSkeletonTitle }),
                (0, r.jsx)("div", { className: i.productSkeletonDescription }),
            ],
        }),
    });
};
