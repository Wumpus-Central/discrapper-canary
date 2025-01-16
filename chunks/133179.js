i.d(t, {
    Z: function () {
        return o;
    }
});
var l = i(200651);
i(192379);
var r = i(120356),
    n = i.n(r),
    s = i(481060),
    a = i(600164),
    c = i(545477);
function o(e) {
    let { source: t, selectedSource: i } = e,
        { id: r, name: o, url: d } = t,
        f = (null == i ? void 0 : i.id) === r;
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsxs)(a.Z, {
            direction: a.Z.Direction.VERTICAL,
            justify: a.Z.Justify.CENTER,
            align: a.Z.Align.CENTER,
            children: [
                (0, l.jsx)(a.Z, {
                    justify: a.Z.Justify.CENTER,
                    align: a.Z.Align.CENTER,
                    children: (0, l.jsx)('div', {
                        style: { backgroundImage: 'url('.concat(d, ')') },
                        className: n()(c.sourceThumbnail, { [c.selected]: f })
                    })
                }),
                (0, l.jsx)(s.Text, {
                    className: n()(c.sourceName, { [c.selected]: f }),
                    variant: 'text-sm/normal',
                    children: o
                })
            ]
        })
    });
}
