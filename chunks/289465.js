n.d(t, { Z: () => s });
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(910154);
function s(e) {
    let { bar: t, children: n, className: r, inModal: s, title: c } = e;
    return (0, i.jsxs)(a.Zbd, {
        editable: !0,
        className: l()(o.card, r, { [o.inModal]: s }),
        children: [
            (0, i.jsxs)("div", {
                className: l()(o.cardHeader, { [o.inModal]: s }),
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        children: c,
                    }),
                    (0, i.jsx)("div", { children: t }),
                ],
            }),
            s ? (0, i.jsx)(a.izJ, {}) : null,
            n,
        ],
    });
}
