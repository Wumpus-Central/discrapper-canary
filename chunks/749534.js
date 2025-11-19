n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(388032),
    a = n(609507);
function s(e) {
    let { children: t, title: n } = e;
    return (0, r.jsxs)("div", {
        className: a.container,
        children: [
            (0, r.jsx)(i.Heading, {
                className: a.header,
                variant: "text-sm/semibold",
                children: null != n ? n : l.intl.string(l.t["k+QA9N"]),
            }),
            (0, r.jsx)("div", {
                className: a.upsellsContainer,
                children: t,
            }),
        ],
    });
}
