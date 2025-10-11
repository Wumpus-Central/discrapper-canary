t.d(a, { Z: () => l });
var r = t(951288);
t(647438);
var n = t(481060),
    s = t(771831);
let l = function (e) {
    let { label: a, subLabel: t, icon: l } = e;
    return (0, r.jsxs)("div", {
        className: s.valueProp,
        children: [
            (0, r.jsx)("div", {
                className: s.valuePropIconContainer,
                children: (0, r.jsx)(l, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            (0, r.jsxs)("div", {
                className: s.valuePropText,
                children: [
                    (0, r.jsx)(n.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: a,
                    }),
                    null != t &&
                        (0, r.jsx)(n.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: t,
                        }),
                ],
            }),
        ],
    });
};
