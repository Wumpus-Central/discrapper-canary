n.d(t, { Z: () => a }), n(266796);
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(600164),
    s = n(332067);
function a(e) {
    let { description: t, icon: n, id: a, label: o, onChange: c, value: d } = e;
    return (0, r.jsxs)('div', {
        className: s.cardContent,
        children: [
            (0, r.jsxs)(l.Z, {
                justify: l.Z.Justify.BETWEEN,
                align: l.Z.Align.CENTER,
                children: [
                    n,
                    (0, r.jsx)(l.Z.Child, {
                        grow: 1,
                        children: (0, r.jsx)(i.Text, {
                            variant: 'text-md/semibold',
                            children: o
                        })
                    }),
                    null != c &&
                        null != d &&
                        (0, r.jsx)(i.rsf, {
                            id: a,
                            checked: d,
                            onChange: c
                        })
                ]
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: s.cardDescription,
                children: t
            })
        ]
    });
}
