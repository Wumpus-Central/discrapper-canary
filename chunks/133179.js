n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    o = n(600164),
    a = n(336606);
function c(e) {
    let { source: t, selectedSource: n } = e,
        { id: i, name: c, url: d } = t,
        u = (null == n ? void 0 : n.id) === i;
    return (0, r.jsxs)(o.Z, {
        direction: o.Z.Direction.VERTICAL,
        justify: o.Z.Justify.CENTER,
        align: o.Z.Align.CENTER,
        children: [
            (0, r.jsx)(o.Z, {
                justify: o.Z.Justify.CENTER,
                align: o.Z.Align.CENTER,
                children: (0, r.jsx)("div", {
                    style: { backgroundImage: "url(".concat(d, ")") },
                    className: l()(a.sourceThumbnail, { [a.selected]: u }),
                }),
            }),
            (0, r.jsx)(s.Text, {
                className: l()(a.sourceName, { [a.selected]: u }),
                variant: "text-sm/normal",
                children: c,
            }),
        ],
    });
}
