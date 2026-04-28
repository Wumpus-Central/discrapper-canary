"use strict";
n.d(t, { A: () => c });
var l = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(649671),
    o = n(707712);
let c = (e) => {
    let { showImage: t } = e,
        {
            usageWidth: n,
            descriptionWidth: s,
            sourceWidth: c,
        } = i.useMemo(
            () => ({
                usageWidth: a().random(60, 120),
                descriptionWidth: a().random(200, 600),
                sourceWidth: a().random(45, 90),
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
                    (0, l.jsx)("div", { style: { maxWidth: (0, r.a8)(n) }, className: o.nY }),
                    (0, l.jsx)("div", { style: { maxWidth: (0, r.a8)(s) }, className: o.h_ }),
                ],
            }),
            (0, l.jsx)("div", { style: { width: (0, r.a8)(c) }, className: o.sP }),
        ],
    });
};
