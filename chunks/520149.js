"use strict";
n.d(t, { w: () => l });
var i = n(627968);
n(64700);
var r = n(834730),
    s = n(500380),
    a = n(423764),
    o = n(857414);
function l(e) {
    let { countryCode: t, relocationCountryCode: n } = e;
    return (0, i.jsxs)("div", {
        className: o.uL,
        children: [
            (0, i.jsx)("img", { alt: "", className: o.bI, src: (0, s.t)(t) }),
            (0, i.jsx)(r.E, { variant: "text-md/normal", color: "text-subtle", children: (0, a.j7)((0, a.ni)(t)) }),
            (0, i.jsx)(r.E, { variant: "text-md/normal", color: "text-subtle", className: o.B5, children: "\u2192" }),
            (0, i.jsx)("img", { alt: "", className: o.bI, src: (0, s.t)(n) }),
            (0, i.jsx)(r.E, { variant: "text-md/normal", color: "text-subtle", children: (0, a.j7)((0, a.ni)(n)) }),
        ],
    });
}
