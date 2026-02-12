"use strict";
n.d(t, { Hq: () => u, LB: () => _, MG: () => d, nB: () => l, wn: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(798233);
let l = () => (0, r.jsx)("hr", { className: o.ts }),
    u = (e) => {
        let { label: t, children: n, direction: i = "horizontal", className: u } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l, {}),
                (0, r.jsx)(s.Text, { variant: "text-md/semibold", className: o.cW, children: t }),
                (0, r.jsx)("div", { className: a()(o.kL, u, { [o.YG]: "vertical" === i }), children: n }),
            ],
        });
    },
    c = (e) => {
        let { children: t } = e;
        return (0, r.jsx)("div", { className: o.uW, children: t });
    },
    d = (e) => (0, r.jsx)("div", { className: o.wO, children: e.children }),
    _ = (e) => (0, r.jsx)("fieldset", { className: o.lI, children: e.children });
