a.d(t, { Z: () => l });
var n = a(54381);
a(473749);
var i = a(481060),
    r = a(926375);
let l = function (e) {
    let { label: t, subLabel: a, icon: l } = e;
    return (0, n.jsxs)("div", {
        className: r.valueProp,
        children: [
            (0, n.jsx)("div", {
                className: r.valuePropIconContainer,
                children: (0, n.jsx)(l, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            (0, n.jsxs)("div", {
                className: r.valuePropText,
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: t,
                    }),
                    null != a &&
                        (0, n.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: a,
                        }),
                ],
            }),
        ],
    });
};
