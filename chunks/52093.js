n.d(t, { Ay: () => c, L5: () => d });
var a = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    l = n(397927);
n(714510), n(92246), n(985018);
var r = n(718493);
function o(e) {
    let { children: t, isComplete: n, hasNextStep: s } = e;
    return (0, a.jsxs)("li", {
        className: i()(r.gY, { [r.HP]: n }, { [r.h4]: s }),
        children: [
            (0, a.jsxs)("div", {
                className: r.cJ,
                children: [
                    (0, a.jsx)("div", {
                        className: r.$P,
                        children: n && (0, a.jsx)(l.rOg, { className: r.ap, color: l.LU0.colors.WHITE }),
                    }),
                    s && (0, a.jsx)("div", { className: r.UK }),
                ],
            }),
            (0, a.jsx)("div", { className: r.M7, children: t }),
        ],
    });
}
function d(e) {
    let { children: t } = e;
    return (0, a.jsx)(l.Text, { color: "text-muted", variant: "text-xs/medium", children: t });
}
let c = function (e) {
    let { children: t, heading: n, steps: s } = e;
    return (0, a.jsxs)("div", {
        className: r.iE,
        children: [
            (0, a.jsx)("div", {
                className: r.Mj,
                children: (0, a.jsx)(l.Heading, {
                    className: r.R_,
                    color: "text-strong",
                    variant: "text-xs/semibold",
                    children: n,
                }),
            }),
            (0, a.jsx)("div", {
                className: r.lp,
                children: (0, a.jsx)("ul", {
                    children: s.map((e, t) =>
                        (0, a.jsx)(
                            o,
                            { isComplete: e.isComplete, hasNextStep: t < s.length - 1, children: e.renderContent() },
                            t,
                        ),
                    ),
                }),
            }),
            t,
        ],
    });
};
