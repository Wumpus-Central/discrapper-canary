"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(939249),
    o = n(847374),
    c = n(602624);
let u = l.memo(function (e) {
    let { children: t, trailing: n, className: l, icon: s, isCollapsed: u, onClick: d, "aria-label": h } = e;
    return (0, i.jsxs)("div", {
        className: r()(c.iE, l),
        children: [
            (0, i.jsxs)(a.D, {
                onClick: d,
                onKeyDown: (e) => e.stopPropagation(),
                className: r()(c.wx, { [c.bG]: null != u }),
                "aria-expanded": null != u ? !u : void 0,
                "aria-label": h,
                children: [
                    null != s && (0, i.jsx)("div", { "aria-hidden": !0, className: c.nr, children: s }),
                    (0, i.jsx)("span", { className: c.Gp, children: t }),
                    null != u
                        ? (0, i.jsx)(o.a, {
                              size: "custom",
                              color: "currentColor",
                              className: r()(c.Cj, { [c.Tu]: u }),
                              height: 16,
                              width: 16,
                          })
                        : null,
                ],
            }),
            n,
        ],
    });
});
