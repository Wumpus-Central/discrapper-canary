n.d(t, { Z: () => a });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(298392);
function a(e) {
    let { title: t, settings: n } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                color: "header-primary",
                className: l.header,
                children: t,
            }),
            n.map((e) => e.renderComponent()),
        ],
    });
}
