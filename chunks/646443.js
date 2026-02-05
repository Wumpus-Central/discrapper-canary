"use strict";
n.d(t, { l: () => u });
var r = n(627968),
    i = n(934551),
    a = n(732955),
    s = n(397927),
    o = n(957565),
    l = n(184339);
let u = (e) => {
    let { label: t, value: n } = e;
    return (0, r.jsxs)("div", {
        className: l.I,
        children: [
            (0, r.jsxs)(s.Text, { variant: "text-sm/medium", children: [t, ":"] }),
            (0, r.jsx)(s.Text, { variant: "text-sm/normal", children: n }),
            (0, r.jsx)(a.K0, {
                size: "sm",
                "aria-label": "Copy Link",
                variant: "icon-only",
                icon: i.CopyIcon,
                onClick: () => (0, o.C)(n),
            }),
        ],
    });
};
