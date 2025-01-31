n.d(t, { k: () => l });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(925329),
    s = n(388032),
    o = n(140194);
function l(e) {
    let { applications: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.Text, {
                variant: 'text-xs/semibold',
                color: 'text-normal',
                className: o.header,
                children: s.intl.string(s.t['Uv/eT0'])
            }),
            (0, i.jsx)('div', {
                className: o.list,
                children: t.map((e) => {
                    if (null != e)
                        return (0, i.jsxs)(
                            'div',
                            {
                                className: o.row,
                                children: [
                                    (0, i.jsx)(a.Z, {
                                        game: e,
                                        size: a.Z.Sizes.XXSMALL
                                    }),
                                    (0, i.jsx)(r.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: e.name
                                    })
                                ]
                            },
                            e.id
                        );
                })
            })
        ]
    });
}
