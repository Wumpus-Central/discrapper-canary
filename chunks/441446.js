n.d(t, {
    Hq: () => c,
    LB: () => f,
    MG: () => d,
    nB: () => l,
    wn: () => u,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(798233);
let l = () => (0, r.jsx)("hr", { className: o.ts }),
    c = (e) => {
        let { label: t, children: n, direction: i = "horizontal", className: c } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l, {}),
                (0, r.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    className: o.cW,
                    children: t,
                }),
                (0, r.jsx)("div", {
                    className: a()(o.kL, c, { [o.YG]: "vertical" === i }),
                    children: n,
                }),
            ],
        });
    },
    u = (e) => {
        let { children: t } = e;
        return (0, r.jsx)("div", {
            className: o.uW,
            children: t,
        });
    },
    d = (e) =>
        (0, r.jsx)("div", {
            className: o.wO,
            children: e.children,
        }),
    f = (e) =>
        (0, r.jsx)("fieldset", {
            className: o.lI,
            children: e.children,
        });
