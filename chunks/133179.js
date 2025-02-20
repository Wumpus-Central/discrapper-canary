l.d(t, { Z: () => o });
var s = l(200651);
l(192379);
var r = l(120356),
    i = l.n(r),
    n = l(481060),
    a = l(600164),
    c = l(242891);
function o(e) {
    let { source: t, selectedSource: l } = e,
        { id: r, name: o, url: d } = t,
        f = (null == l ? void 0 : l.id) === r;
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)(a.Z, {
            direction: a.Z.Direction.VERTICAL,
            justify: a.Z.Justify.CENTER,
            align: a.Z.Align.CENTER,
            children: [
                (0, s.jsx)(a.Z, {
                    justify: a.Z.Justify.CENTER,
                    align: a.Z.Align.CENTER,
                    children: (0, s.jsx)('div', {
                        style: { backgroundImage: 'url('.concat(d, ')') },
                        className: i()(c.sourceThumbnail, { [c.selected]: f })
                    })
                }),
                (0, s.jsx)(n.Text, {
                    className: i()(c.sourceName, { [c.selected]: f }),
                    variant: 'text-sm/normal',
                    children: o
                })
            ]
        })
    });
}
