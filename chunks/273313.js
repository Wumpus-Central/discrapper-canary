n.d(t, { Z: () => o });
var r = n(54381),
    i = n(481060),
    a = n(438976);
function o(e) {
    let { title: t, className: n, children: o } = e,
        s = (0, a.Z)() ? void 0 : t;
    return (0, r.jsx)("div", {
        className: n,
        children: (0, r.jsxs)(i.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(i.Heading, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: s,
                }),
                o,
            ],
        }),
    });
}
