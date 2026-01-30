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
    o = n(397927),
    s = n(798233);
let l = () =>
        (0, r.jsx)("hr", {
            className: s.ts,
        }),
    c = (e) => {
        let { label: t, children: n, direction: i = "horizontal", className: c } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l, {}),
                (0, r.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    className: s.cW,
                    children: t,
                }),
                (0, r.jsx)("div", {
                    className: a()(s.kL, c, {
                        [s.YG]: "vertical" === i,
                    }),
                    children: n,
                }),
            ],
        });
    },
    u = (e) => {
        let { children: t } = e;
        return (0, r.jsx)("div", {
            className: s.uW,
            children: t,
        });
    },
    d = (e) =>
        (0, r.jsx)("div", {
            className: s.wO,
            children: e.children,
        }),
    f = (e) =>
        (0, r.jsx)("fieldset", {
            className: s.lI,
            children: e.children,
        });
