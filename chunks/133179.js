n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    s = n(481060),
    o = n(600164),
    a = n(873270);
function c(e) {
    let { source: t, selectedSource: n } = e,
        { id: l, name: c, url: d } = t,
        u = (null == n ? void 0 : n.id) === l;
    return (0, r.jsxs)(o.Z, {
        direction: o.Z.Direction.VERTICAL,
        justify: o.Z.Justify.CENTER,
        align: o.Z.Align.CENTER,
        children: [
            (0, r.jsx)(o.Z, {
                justify: o.Z.Justify.CENTER,
                align: o.Z.Align.CENTER,
                children: (0, r.jsx)('div', {
                    style: { backgroundImage: 'url('.concat(d, ')') },
                    className: i()(a.sourceThumbnail, { [a.selected]: u })
                })
            }),
            (0, r.jsx)(s.Text, {
                className: i()(a.sourceName, { [a.selected]: u }),
                variant: 'text-sm/normal',
                children: c
            })
        ]
    });
}
