"use strict";
n.d(t, { A: () => d });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(939249),
    o = n(847374),
    u = n(650583),
    c = n(709160);
let d = i.memo(function (e) {
    let { children: t, trailing: n, className: i, icon: s, isCollapsed: d, onClick: h, "aria-label": m } = e;
    return (0, l.jsxs)("div", {
        className: r()(c.iE, i),
        children: [
            (0, l.jsxs)(a.D, {
                onClick: h,
                onKeyDown: (e) => {
                    e.key !== u.dh.ESCAPE && e.stopPropagation();
                },
                className: r()(c.wx, { [c.bG]: null != d }),
                "aria-expanded": null != d ? !d : void 0,
                "aria-label": m,
                children: [
                    null != s && (0, l.jsx)("div", { "aria-hidden": !0, className: c.nr, children: s }),
                    (0, l.jsx)("span", { className: c.Gp, children: t }),
                    null != d
                        ? (0, l.jsx)(o.a, {
                              size: "custom",
                              color: "currentColor",
                              className: r()(c.Cj, { [c.Tu]: d }),
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
