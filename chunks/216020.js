"use strict";
n.d(t, { A: () => a });
var i = n(627968),
    s = n(158954),
    l = n(985018),
    r = n(553248);
function a(e) {
    let { title: t, description: n, onClick: a } = e;
    return (0, i.jsxs)("div", {
        className: r.S,
        children: [
            (0, i.jsx)(s.DUT, {
                onClick: a,
                className: r.H,
                "aria-label": l.intl.string(l.t.pLPjsb),
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
