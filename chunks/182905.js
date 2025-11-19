n.d(t, { Z: () => u });
var i = n(54381);
n(473749);
var l = n(120356),
    r = n.n(l),
    s = n(692547),
    a = n(755721),
    o = n(481060),
    c = n(600164),
    d = n(69165);
let u = (e) => {
    let { className: t, icon: n, noticeText: l, buttonText: u, onClick: h, canSync: g } = e;
    return (0, i.jsx)(o.Zbd, {
        className: r()(t, d.card),
        children: (0, i.jsxs)(c.Z, {
            justify: c.Z.Justify.BETWEEN,
            align: c.Z.Align.CENTER,
            children: [
                (0, i.jsx)(n, {
                    width: 20,
                    height: 20,
                    size: "custom",
                    color: s.Z.unsafe_rawColors.YELLOW_300.css,
                }),
                (0, i.jsx)("div", {
                    className: d.label,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: l,
                    }),
                }),
                g &&
                    (0, i.jsx)(a.zx, {
                        size: a.zx.Sizes.SMALL,
                        color: a.zx.Colors.PRIMARY,
                        onClick: h,
                        children: u,
                    }),
            ],
        }),
    });
};
