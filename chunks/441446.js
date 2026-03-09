l.d(t, { Hq: () => u, LB: () => p, MG: () => d, nB: () => o, wn: () => c });
var a = l(627968);
l(64700);
var n = l(503698),
    r = l.n(n),
    i = l(397927),
    s = l(798233);
let o = () => (0, a.jsx)("hr", { className: s.ts }),
    u = (e) => {
        let { label: t, children: l, direction: n = "horizontal", className: u } = e;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(o, {}),
                (0, a.jsx)(i.Text, { variant: "text-md/semibold", className: s.cW, children: t }),
                (0, a.jsx)("div", { className: r()(s.kL, u, { [s.YG]: "vertical" === n }), children: l }),
            ],
        });
    },
    c = (e) => {
        let { children: t } = e;
        return (0, a.jsx)("div", { className: s.uW, children: t });
    },
    d = (e) => (0, a.jsx)("div", { className: s.wO, children: e.children }),
    p = (e) => (0, a.jsx)("fieldset", { className: s.lI, children: e.children });
