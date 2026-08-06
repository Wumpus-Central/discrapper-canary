"use strict";
n.d(t, { A: () => u });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(939249),
    o = n(847374),
    d = n(650583),
    c = n(709160);
let u = r.memo(function (e) {
    let { children: t, trailing: n, className: r, icon: a, isCollapsed: u, onClick: _, "aria-label": E } = e;
    return (0, i.jsxs)("div", {
        className: s()(c.iE, r),
        children: [
            (0, i.jsxs)(l.D, {
                onClick: _,
                onKeyDown: (e) => {
                    e.key !== d.dh.ESCAPE && e.stopPropagation();
                },
                className: s()(c.wx, { [c.bG]: null != u }),
                "aria-expanded": null != u ? !u : void 0,
                "aria-label": E,
                children: [
                    null != a && (0, i.jsx)("div", { "aria-hidden": !0, className: c.nr, children: a }),
                    (0, i.jsx)("span", { className: c.Gp, children: t }),
                    null != u
                        ? (0, i.jsx)(o.a, {
                              size: "custom",
                              color: "currentColor",
                              className: s()(c.Cj, { [c.Tu]: u }),
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
