l.d(t, { Z: () => o });
var i = l(200651);
l(192379);
var s = l(120356),
    r = l.n(s),
    n = l(481060),
    a = l(600164),
    c = l(949);
function o(e) {
    let { source: t, selectedSource: l } = e,
        { id: s, name: o, url: d } = t,
        f = (null == l ? void 0 : l.id) === s;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)(a.Z, {
            direction: a.Z.Direction.VERTICAL,
            justify: a.Z.Justify.CENTER,
            align: a.Z.Align.CENTER,
            children: [
                (0, i.jsx)(a.Z, {
                    justify: a.Z.Justify.CENTER,
                    align: a.Z.Align.CENTER,
                    children: (0, i.jsx)('div', {
                        style: { backgroundImage: 'url('.concat(d, ')') },
                        className: r()(c.sourceThumbnail, { [c.selected]: f })
                    })
                }),
                (0, i.jsx)(n.Text, {
                    className: r()(c.sourceName, { [c.selected]: f }),
                    variant: 'text-sm/normal',
                    children: o
                })
            ]
        })
    });
}
