n.d(e, { Z: () => o });
var i = n(54381);
n(473749);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(980450);
function o(t) {
    let { tips: e, className: n, headerText: s } = t;
    return (0, i.jsxs)("div", {
        className: r()(a.tipsSection, n),
        children: [
            (0, i.jsx)("div", {
                className: a.tipsHeader,
                children: (0, i.jsx)(l.Heading, {
                    variant: "heading-lg/bold",
                    className: a.headerText,
                    children: s,
                }),
            }),
            (0, i.jsx)("ul", {
                className: a.tipsList,
                children: e.map((t, e) =>
                    (0, i.jsxs)(
                        "li",
                        {
                            className: a.tipRow,
                            children: [
                                (0, i.jsx)(l.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "text-brand",
                                    className: a.tipNumber,
                                    children: e + 1,
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: "text-sm/medium",
                                    children: t,
                                }),
                            ],
                        },
                        "safety-tips-".concat(e),
                    ),
                ),
            }),
        ],
    });
}
