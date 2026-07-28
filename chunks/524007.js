"use strict";
n.d(t, { A: () => d });
var i = n(477900),
    r = n(582128),
    a = n(435558),
    s = n.n(a),
    l = n(649671),
    o = n(451160);
let d = function (e) {
    let { showImage: t } = e,
        {
            usageWidth: n,
            descriptionWidth: a,
            sourceWidth: d,
        } = r.useMemo(
            () => ({
                usageWidth: s().random(60, 120),
                descriptionWidth: s().random(200, 600),
                sourceWidth: s().random(45, 90),
            }),
            [],
        );
    return (0, i.jsxs)("div", {
        className: o.iE,
        children: [
            t ? (0, i.jsx)("div", { className: o.Sl }) : null,
            (0, i.jsxs)("div", {
                className: o.QR,
                children: [
                    (0, i.jsx)("div", { style: { maxWidth: (0, l.a8)(n) }, className: o.nY }),
                    (0, i.jsx)("div", { style: { maxWidth: (0, l.a8)(a) }, className: o.h_ }),
                ],
            }),
            (0, i.jsx)("div", { style: { width: (0, l.a8)(d) }, className: o.sP }),
        ],
    });
};
