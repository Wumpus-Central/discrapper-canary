n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(400641),
    s = n(140536);
let o = (e) => {
    let { header: t, displayType: n } = e,
        o = (0, a.Gn)(n) > 0 ? "text-brand" : "text-muted",
        l = (0, a.Ju)(n);
    return (0, r.jsxs)("div", {
        className: s.hJ,
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-xxl/medium",
                color: o,
                children: (0, r.jsx)(i.Fmo, {
                    children: l,
                }),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/semibold",
                className: s.io,
                children: t,
            }),
        ],
    });
};
