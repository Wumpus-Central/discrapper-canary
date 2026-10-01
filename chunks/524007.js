n.d(t, { A: () => u });
var l = n(477900),
    i = n(582128),
    r = n(435558),
    s = n.n(r),
    a = n(664929),
    o = n(769661);
let u = function (e) {
    let { showImage: t } = e,
        {
            usageWidth: n,
            descriptionWidth: r,
            sourceWidth: u,
        } = i.useMemo(
            () => ({
                usageWidth: s().random(60, 120),
                descriptionWidth: s().random(200, 600),
                sourceWidth: s().random(45, 90),
            }),
            [],
        );
    return (0, l.jsxs)("div", {
        className: o.iE,
        children: [
            t ? (0, l.jsx)("div", { className: o.Sl }) : null,
            (0, l.jsxs)("div", {
                className: o.QR,
                children: [
                    (0, l.jsx)("div", { style: { maxWidth: (0, a.a8)(n) }, className: o.nY }),
                    (0, l.jsx)("div", { style: { maxWidth: (0, a.a8)(r) }, className: o.h_ }),
                ],
            }),
            (0, l.jsx)("div", { style: { width: (0, a.a8)(u) }, className: o.sP }),
        ],
    });
};
