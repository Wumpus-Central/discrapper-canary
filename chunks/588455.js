"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(158954),
    a = n(206418),
    s = n(679970),
    o = n(985018),
    l = n(967423);
let u = (e) => {
    let { showSubtext: t = !1 } = e;
    return (0, r.jsxs)(a.A, {
        assetComponent: (0, r.jsx)(s.A, { className: l.jc }),
        tooltipWordmarkComponent: (0, r.jsx)(i.DZT, {
            variant: "heading-md/extrabold",
            className: l.RK,
            children: o.intl.string(o.t.ElYQFS),
        }),
        children: [
            (0, r.jsx)(i.DZT, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : l.Qn,
                children: o.intl.string(o.t.lTHkqd),
            }),
            t
                ? (0, r.jsx)(i.EYj, { variant: "text-xs/normal", className: l.lV, children: o.intl.string(o.t.MEV0GI) })
                : void 0,
        ],
    });
};
