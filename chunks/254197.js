r.d(n, {
    k: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(925329),
    s = r(388032),
    l = r(140194);
function u(e) {
    let { applications: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/semibold',
                color: 'text-normal',
                className: l.header,
                children: s.intl.string(s.t['Uv/eT0'])
            }),
            (0, i.jsx)('div', {
                className: l.list,
                children: n.map((e) => {
                    if (null != e)
                        return (0, i.jsxs)(
                            'div',
                            {
                                className: l.row,
                                children: [
                                    (0, i.jsx)(o.Z, {
                                        game: e,
                                        size: o.Z.Sizes.XXSMALL
                                    }),
                                    (0, i.jsx)(a.Text, {
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
