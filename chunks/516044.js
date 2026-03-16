e.d(i, { default: () => u });
var r = e(627968),
    a = e(158954),
    n = e(975807),
    l = e(88001),
    s = e(519412),
    o = e(985018);
let u = function (t) {
    return (0, r.jsx)(a.Modal, {
        ...t,
        size: "md",
        title: o.intl.formatToPlainString(s.default.BcZLdW, { premiumGroupProductName: (0, l.DP)() }),
        subtitle: o.intl.string(s.default.EjhBrs),
        actions: [
            {
                text: o.intl.string(s.default["IO+nlU"]),
                variant: "secondary",
                onClick: () => {
                    (0, n.A)(l.TE);
                },
            },
        ],
    });
};
