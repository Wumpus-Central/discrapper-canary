n.d(t, { A: () => u });
var l = n(477900),
    i = n(582128),
    s = n(435558),
    r = n.n(s),
    a = n(664929),
    o = n(769661);
let u = function (e) {
    let { showImage: t } = e,
        {
            usageWidth: n,
            descriptionWidth: s,
            sourceWidth: u,
        } = i.useMemo(
            () => ({
                usageWidth: r().random(60, 120),
                descriptionWidth: r().random(200, 600),
                sourceWidth: r().random(45, 90),
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
                    (0, l.jsx)("div", { style: { maxWidth: (0, a.a8)(s) }, className: o.h_ }),
                ],
            }),
            (0, l.jsx)("div", { style: { width: (0, a.a8)(u) }, className: o.sP }),
        ],
    });
};
