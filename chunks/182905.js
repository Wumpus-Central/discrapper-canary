n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(692547),
    a = n(481060),
    o = n(600164),
    c = n(427256);
let d = (e) => {
    let { className: t, icon: n, noticeText: i, buttonText: d, onClick: u, canSync: h } = e;
    return (0, r.jsx)(a.Zbd, {
        className: l()(t, c.card),
        children: (0, r.jsxs)(o.Z, {
            justify: o.Z.Justify.BETWEEN,
            align: o.Z.Align.CENTER,
            children: [
                (0, r.jsx)(n, {
                    width: 20,
                    height: 20,
                    size: 'custom',
                    color: s.Z.unsafe_rawColors.YELLOW_300.css
                }),
                (0, r.jsx)('div', {
                    className: c.label,
                    children: (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: i
                    })
                }),
                h &&
                    (0, r.jsx)(a.zxk, {
                        size: a.zxk.Sizes.SMALL,
                        color: a.zxk.Colors.PRIMARY,
                        onClick: u,
                        children: d
                    })
            ]
        })
    });
};
