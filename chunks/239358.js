a.d(t, { Z: () => r });
var l = a(54381);
a(473749);
var n = a(481060),
    s = a(926375);
let r = function (e) {
    let { label: t, subLabel: a, icon: r } = e;
    return (0, l.jsxs)("div", {
        className: s.valueProp,
        children: [
            (0, l.jsx)("div", {
                className: s.valuePropIconContainer,
                children: (0, l.jsx)(r, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            (0, l.jsxs)("div", {
                className: s.valuePropText,
                children: [
                    (0, l.jsx)(n.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: t,
                    }),
                    null != a &&
                        (0, l.jsx)(n.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: a,
                        }),
                ],
            }),
        ],
    });
};
