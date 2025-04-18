n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(600164),
    o = n(873270);
function c(e) {
    let { source: t, selectedSource: n } = e,
        { id: i, name: c, url: d } = t,
        u = (null == n ? void 0 : n.id) === i;
    return (0, r.jsxs)(a.Z, {
        direction: a.Z.Direction.VERTICAL,
        justify: a.Z.Justify.CENTER,
        align: a.Z.Align.CENTER,
        children: [
            (0, r.jsx)(a.Z, {
                justify: a.Z.Justify.CENTER,
                align: a.Z.Align.CENTER,
                children: (0, r.jsx)('div', {
                    style: { backgroundImage: 'url('.concat(d, ')') },
                    className: l()(o.sourceThumbnail, { [o.selected]: u })
                })
            }),
            (0, r.jsx)(s.Text, {
                className: l()(o.sourceName, { [o.selected]: u }),
                variant: 'text-sm/normal',
                children: c
            })
        ]
    });
}
