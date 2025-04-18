n.d(t, { k: () => l });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(925329),
    o = n(388032),
    s = n(361730);
function l(e) {
    let { applications: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/semibold',
                color: 'text-normal',
                className: s.header,
                children: o.NW.string(o.t['Uv/eT0'])
            }),
            (0, r.jsx)('div', {
                className: s.list,
                children: t.map((e) => {
                    if (null != e)
                        return (0, r.jsxs)(
                            'div',
                            {
                                className: s.row,
                                children: [
                                    (0, r.jsx)(a.Z, {
                                        game: e,
                                        size: a.Z.Sizes.XXSMALL
                                    }),
                                    (0, r.jsx)(i.Text, {
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
