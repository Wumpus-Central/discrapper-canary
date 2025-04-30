n.d(t, { Z: () => a }), n(953529);
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(600164),
    s = n(332067);
function a(e) {
    let { description: t, icon: n, id: a, label: o, onChange: c, value: d } = e;
    return (0, i.jsxs)('div', {
        className: s.cardContent,
        children: [
            (0, i.jsxs)(r.Z, {
                justify: r.Z.Justify.BETWEEN,
                align: r.Z.Align.CENTER,
                children: [
                    n,
                    (0, i.jsx)(r.Z.Child, {
                        grow: 1,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-md/semibold',
                            children: o
                        })
                    }),
                    null != c &&
                        null != d &&
                        (0, i.jsx)(l.rsf, {
                            id: a,
                            checked: d,
                            onChange: c
                        })
                ]
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: s.cardDescription,
                children: t
            })
        ]
    });
}
