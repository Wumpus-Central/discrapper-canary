"use strict";
n.d(t, { A: () => u });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(939249),
    o = n(847374),
    c = n(602624);
let u = i.memo(function (e) {
    let { children: t, trailing: n, className: i, icon: s, isCollapsed: u, onClick: d, "aria-label": h } = e;
    return (0, l.jsxs)("div", {
        className: a()(c.iE, i),
        children: [
            (0, l.jsxs)(r.D, {
                onClick: d,
                onKeyDown: (e) => e.stopPropagation(),
                className: a()(c.wx, { [c.bG]: null != u }),
                "aria-expanded": null != u ? !u : void 0,
                "aria-label": h,
                children: [
                    null != s && (0, l.jsx)("div", { "aria-hidden": !0, className: c.nr, children: s }),
                    (0, l.jsx)("span", { className: c.Gp, children: t }),
                    null != u
                        ? (0, l.jsx)(o.a, {
                              size: "custom",
                              color: "currentColor",
                              className: a()(c.Cj, { [c.Tu]: u }),
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
