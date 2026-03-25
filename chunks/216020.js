"use strict";
n.d(t, { A: () => a });
var i = n(627968),
    s = n(158954),
    l = n(885794);
function a(e) {
    let { title: t, description: n, onClick: a } = e;
    return (0, i.jsxs)("div", {
        className: l.S,
        children: [
            (0, i.jsx)(s.DUT, {
                onClick: a,
                className: l.H,
                children: (0, i.jsx)(s.EYj, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    lineClamp: 2,
                    children: t,
                }),
            }),
            (0, i.jsx)(s.EYj, { variant: "text-xs/medium", color: "text-default", children: n }),
        ],
    });
}
