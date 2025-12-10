e.d(n, { W: () => i });
var a = e(54381),
    l = e(481060),
    r = e(988158),
    o = e(20883);
function i(t) {
    let { url: n } = t,
        { protocol: e, hostname: i, theRestOfTheUrl: c } = (0, r.h)(n);
    return (0, a.jsxs)(l.Ttm, {
        className: o.linkCalloutContainer,
        children: [
            (0, a.jsxs)(l.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "text-muted",
                children: [e, "//"],
            }),
            (0, a.jsx)(l.Text, {
                tag: "span",
                variant: "text-md/semibold",
                color: "text-default",
                children: i,
            }),
            (0, a.jsx)(l.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "text-muted",
                children: c,
            }),
        ],
    });
}
