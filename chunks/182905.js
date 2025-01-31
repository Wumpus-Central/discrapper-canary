n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(120356),
    s = n.n(l),
    a = n(692547),
    r = n(481060),
    o = n(600164),
    d = n(283877);
let c = (e) => {
    let { className: t, icon: n, noticeText: l, buttonText: c, onClick: u, canSync: h } = e;
    return (0, i.jsx)(r.Zbd, {
        className: s()(t, d.card),
        children: (0, i.jsxs)(o.Z, {
            justify: o.Z.Justify.BETWEEN,
            align: o.Z.Align.CENTER,
            children: [
                (0, i.jsx)(n, {
                    width: 20,
                    height: 20,
                    size: 'custom',
                    color: a.Z.unsafe_rawColors.YELLOW_300.css
                }),
                (0, i.jsx)('div', {
                    className: d.label,
                    children: (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: l
                    })
                }),
                h &&
                    (0, i.jsx)(r.zxk, {
                        size: r.zxk.Sizes.SMALL,
                        color: r.zxk.Colors.PRIMARY,
                        onClick: u,
                        children: c
                    })
            ]
        })
    });
};
