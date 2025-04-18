n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(692547),
    a = n(481060),
    o = n(600164),
    c = n(475258);
let d = (e) => {
    let { className: t, icon: n, noticeText: r, buttonText: d, onClick: u, canSync: h } = e;
    return (0, i.jsx)(a.Zbd, {
        className: l()(t, c.card),
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
                        children: r
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
