n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(692547),
    a = n(481060),
    o = n(600164),
    c = n(427256);
let d = (e) => {
    let { className: t, icon: n, noticeText: l, buttonText: d, onClick: u, canSync: h } = e;
    return (0, i.jsx)(a.Zbd, {
        className: r()(t, c.card),
        children: (0, i.jsxs)(o.Z, {
            justify: o.Z.Justify.BETWEEN,
            align: o.Z.Align.CENTER,
            children: [
                (0, i.jsx)(n, {
                    width: 20,
                    height: 20,
                    size: 'custom',
                    color: s.Z.unsafe_rawColors.YELLOW_300.css
                }),
                (0, i.jsx)('div', {
                    className: c.label,
                    children: (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: l
                    })
                }),
                h &&
                    (0, i.jsx)(a.zxk, {
                        size: a.zxk.Sizes.SMALL,
                        color: a.zxk.Colors.PRIMARY,
                        onClick: u,
                        children: d
                    })
            ]
        })
    });
};
