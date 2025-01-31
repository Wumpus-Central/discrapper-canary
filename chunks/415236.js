n.d(t, { Z: () => r });
var i = n(200651);
n(192379);
var l = n(481060),
    s = n(600164),
    a = n(72524);
function r(e) {
    let { description: t, icon: n, id: r, label: o, onChange: d, value: c } = e;
    return (0, i.jsxs)('div', {
        className: a.cardContent,
        children: [
            (0, i.jsxs)(s.Z, {
                justify: s.Z.Justify.BETWEEN,
                align: s.Z.Align.CENTER,
                children: [
                    n,
                    (0, i.jsx)(s.Z.Child, {
                        grow: 1,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-md/semibold',
                            children: o
                        })
                    }),
                    null != d &&
                        null != c &&
                        (0, i.jsx)(l.rsf, {
                            id: r,
                            checked: c,
                            onChange: d
                        })
                ]
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: a.cardDescription,
                children: t
            })
        ]
    });
}
