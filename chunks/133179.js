n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    s = n(481060),
    a = n(600164),
    o = n(873270);
function c(e) {
    let { source: t, selectedSource: n } = e,
        { id: l, name: c, url: d } = t,
        u = (null == n ? void 0 : n.id) === l;
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
                    className: i()(o.sourceThumbnail, { [o.selected]: u })
                })
            }),
            (0, r.jsx)(s.Text, {
                className: i()(o.sourceName, { [o.selected]: u }),
                variant: 'text-sm/normal',
                children: c
            })
        ]
    });
}
