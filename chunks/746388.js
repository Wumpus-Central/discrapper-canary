"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(664929),
    l = n(378271);
let u = (e) => {
    let { showImage: t } = e,
        {
            usageWidth: n,
            descriptionWidth: a,
            sourceWidth: u,
        } = i.useMemo(
            () => ({
                usageWidth: s().random(60, 120),
                descriptionWidth: s().random(200, 600),
                sourceWidth: s().random(45, 90),
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: l.iE,
        children: [
            t ? (0, r.jsx)("div", { className: l.Sl }) : null,
            (0, r.jsxs)("div", {
                className: l.QR,
                children: [
                    (0, r.jsx)("div", { style: { maxWidth: (0, o.a8)(n) }, className: l.nY }),
                    (0, r.jsx)("div", { style: { maxWidth: (0, o.a8)(a) }, className: l.h_ }),
                ],
            }),
            (0, r.jsx)("div", { style: { width: (0, o.a8)(u) }, className: l.sP }),
        ],
    });
};
