n.d(t, {
    Ay: () => d,
    L5: () => c,
});
var a = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    r = n(397927);
n(714510), n(92246), n(985018);
var s = n(718493);
function o(e) {
    let { children: t, isComplete: n, hasNextStep: l } = e;
    return (0, a.jsxs)("li", {
        className: i()(s.gY, { [s.HP]: n }, { [s.h4]: l }),
        children: [
            (0, a.jsxs)("div", {
                className: s.cJ,
                children: [
                    (0, a.jsx)("div", {
                        className: s.$P,
                        children:
                            n &&
                            (0, a.jsx)(r.rOg, {
                                className: s.ap,
                                color: r.LU0.colors.WHITE,
                            }),
                    }),
                    l && (0, a.jsx)("div", { className: s.UK }),
                ],
            }),
            (0, a.jsx)("div", {
                className: s.M7,
                children: t,
            }),
        ],
    });
}
function c(e) {
    let { children: t } = e;
    return (0, a.jsx)(r.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: t,
    });
}
let d = function (e) {
    let { children: t, heading: n, steps: l } = e;
    return (0, a.jsxs)("div", {
        className: s.iE,
        children: [
            (0, a.jsx)("div", {
                className: s.Mj,
                children: (0, a.jsx)(r.Heading, {
                    className: s.R_,
                    color: "text-strong",
                    variant: "text-xs/semibold",
                    children: n,
                }),
            }),
            (0, a.jsx)("div", {
                className: s.lp,
                children: (0, a.jsx)("ul", {
                    children: l.map((e, t) =>
                        (0, a.jsx)(
                            o,
                            {
                                isComplete: e.isComplete,
                                hasNextStep: t < l.length - 1,
                                children: e.renderContent(),
                            },
                            t,
                        ),
                    ),
                }),
            }),
            t,
        ],
    });
};
