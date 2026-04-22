"use strict";
a.d(t, { Hq: () => d, LB: () => h, MG: () => u, nB: () => o, wn: () => c });
var r = a(627968);
a(64700);
var l = a(503698),
    n = a.n(l),
    i = a(834730),
    s = a(723680);
let o = () => (0, r.jsx)("hr", { className: s.ts }),
    d = (e) => {
        let { label: t, children: a, direction: l = "horizontal", className: d } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o, {}),
                (0, r.jsx)(i.E, { variant: "text-md/semibold", className: s.cW, children: t }),
                (0, r.jsx)("div", { className: n()(s.kL, d, { [s.YG]: "vertical" === l }), children: a }),
            ],
        });
    },
    c = (e) => {
        let { children: t } = e;
        return (0, r.jsx)("div", { className: s.uW, children: t });
    },
    u = (e) => (0, r.jsx)("div", { className: s.wO, children: e.children }),
    h = (e) => (0, r.jsx)("fieldset", { className: s.lI, children: e.children });
