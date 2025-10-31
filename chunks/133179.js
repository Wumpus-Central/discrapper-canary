n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(600164),
    a = n(336606);
function c(e) {
    let { source: t, selectedSource: n } = e,
        { id: i, name: c, url: d } = t,
        u = (null == n ? void 0 : n.id) === i;
    return (0, r.jsxs)(s.Z, {
        direction: s.Z.Direction.VERTICAL,
        justify: s.Z.Justify.CENTER,
        align: s.Z.Align.CENTER,
        children: [
            (0, r.jsx)(s.Z, {
                justify: s.Z.Justify.CENTER,
                align: s.Z.Align.CENTER,
                children: (0, r.jsx)("div", {
                    style: { backgroundImage: "url(".concat(d, ")") },
                    className: l()(a.sourceThumbnail, { [a.selected]: u }),
                }),
            }),
            (0, r.jsx)(o.Text, {
                className: l()(a.sourceName, { [a.selected]: u }),
                variant: "text-sm/normal",
                children: c,
            }),
        ],
    });
}
