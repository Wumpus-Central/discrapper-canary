l.d(t, { Hq: () => u, LB: () => p, MG: () => d, nB: () => s, wn: () => c });
var a = l(627968);
l(64700);
var n = l(503698),
    r = l.n(n),
    i = l(397927),
    o = l(14503);
let s = () => (0, a.jsx)("hr", { className: o.ts }),
    u = (e) => {
        let { label: t, children: l, direction: n = "horizontal", className: u } = e;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(s, {}),
                (0, a.jsx)(i.Text, { variant: "text-md/semibold", className: o.cW, children: t }),
                (0, a.jsx)("div", { className: r()(o.kL, u, { [o.YG]: "vertical" === n }), children: l }),
            ],
        });
    },
    c = (e) => {
        let { children: t } = e;
        return (0, a.jsx)("div", { className: o.uW, children: t });
    },
    d = (e) => (0, a.jsx)("div", { className: o.wO, children: e.children }),
    p = (e) => (0, a.jsx)("fieldset", { className: o.lI, children: e.children });
