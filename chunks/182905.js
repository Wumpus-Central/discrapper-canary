var i = n(200651);
n(192379);
var l = n(120356),
    s = n.n(l),
    r = n(692547),
    a = n(481060),
    o = n(600164),
    d = n(307416);
t.Z = (e) => {
    let { className: t, icon: n, noticeText: l, buttonText: c, onClick: u, canSync: h } = e;
    return (0, i.jsx)(a.Card, {
        className: s()(t, d.card),
        children: (0, i.jsxs)(o.Z, {
            justify: o.Z.Justify.BETWEEN,
            align: o.Z.Align.CENTER,
            children: [
                (0, i.jsx)(n, {
                    width: 20,
                    height: 20,
                    size: 'custom',
                    color: r.Z.unsafe_rawColors.YELLOW_300.css
                }),
                (0, i.jsx)('div', {
                    className: d.label,
                    children: (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: l
                    })
                }),
                h &&
                    (0, i.jsx)(a.Button, {
                        size: a.Button.Sizes.SMALL,
                        color: a.Button.Colors.PRIMARY,
                        onClick: u,
                        children: c
                    })
            ]
        })
    });
};
