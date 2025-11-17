t.d(a, { Z: () => l });
var n = t(54381);
t(473749);
var r = t(481060),
    s = t(771831);
let l = function (e) {
    let { label: a, subLabel: t, icon: l } = e;
    return (0, n.jsxs)("div", {
        className: s.valueProp,
        children: [
            (0, n.jsx)("div", {
                className: s.valuePropIconContainer,
                children: (0, n.jsx)(l, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            (0, n.jsxs)("div", {
                className: s.valuePropText,
                children: [
                    (0, n.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: a,
                    }),
                    null != t &&
                        (0, n.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: t,
                        }),
                ],
            }),
        ],
    });
};
