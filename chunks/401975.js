n.d(t, { Z: () => o });
var r = n(951288);
n(647438);
var l = n(120356),
    a = n.n(l),
    s = n(217726),
    i = n(586312);
let o = (e) => {
    let { skipPulseAnimation: t = !1 } = e;
    return (0, r.jsx)("div", {
        className: a()(s.baseProductCardContainer, i.productSkeletonCardContainer, { [i.pulseAnimation]: !t }),
        children: (0, r.jsxs)("div", {
            className: a()(s.baseProductCardContentContainer, i.productSkeletonContent),
            children: [
                (0, r.jsx)("div", { className: i.productSkeletonTitle }),
                (0, r.jsx)("div", { className: i.productSkeletonDescription }),
            ],
        }),
    });
};
