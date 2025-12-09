i.d(n, { W: () => o });
var e = i(54381),
    a = i(481060),
    r = i(988158),
    l = i(20883);
function o(t) {
    let { url: n } = t,
        { protocol: i, hostname: o, theRestOfTheUrl: s } = (0, r.h)(n);
    return (0, e.jsxs)(a.Ttm, {
        className: l.linkCalloutContainer,
        children: [
            (0, e.jsxs)(a.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "text-muted",
                children: [i, "//"],
            }),
            (0, e.jsx)(a.Text, {
                tag: "span",
                variant: "text-md/semibold",
                color: "text-default",
                children: o,
            }),
            (0, e.jsx)(a.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "text-muted",
                children: s,
            }),
        ],
    });
}
