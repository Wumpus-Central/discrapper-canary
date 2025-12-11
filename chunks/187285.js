n.d(t, {
    ZP: () => d,
    y3: () => c,
});
var a = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    l = n(481060);
n(373370), n(115179), n(388032);
var s = n(950418);
function o(e) {
    let { children: t, isComplete: n, hasNextStep: r } = e;
    return (0, a.jsxs)("li", {
        className: i()(s.stepWrapper, { [s.stepWrapperComplete]: n }, { [s.stepWrapperWithNextStep]: r }),
        children: [
            (0, a.jsxs)("div", {
                className: s.stepIndicator,
                children: [
                    (0, a.jsx)("div", {
                        className: s.stepIconWrapper,
                        children:
                            n &&
                            (0, a.jsx)(l.sV5, {
                                className: s.stepIcon,
                                color: l.TVs.colors.WHITE,
                            }),
                    }),
                    r && (0, a.jsx)("div", { className: s.stepConnector }),
                ],
            }),
            (0, a.jsx)("div", {
                className: s.stepContent,
                children: t,
            }),
        ],
    });
}
function c(e) {
    let { children: t } = e;
    return (0, a.jsx)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: t,
    });
}
let d = function (e) {
    let { children: t, heading: n, steps: r } = e;
    return (0, a.jsxs)("div", {
        className: s.wrapper,
        children: [
            (0, a.jsx)("div", {
                className: s.headingWrapper,
                children: (0, a.jsx)(l.Heading, {
                    className: s.heading,
                    color: "text-strong",
                    variant: "text-xs/semibold",
                    children: n,
                }),
            }),
            (0, a.jsx)("div", {
                className: s.stepsWrapper,
                children: (0, a.jsx)("ul", {
                    children: r.map((e, t) =>
                        (0, a.jsx)(
                            o,
                            {
                                isComplete: e.isComplete,
                                hasNextStep: t < r.length - 1,
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
