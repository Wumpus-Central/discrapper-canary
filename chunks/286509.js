"use strict";
n.d(t, { A: () => c });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(939249),
    o = n(847374),
    d = n(709160);
let c = r.memo(function (e) {
    let { children: t, trailing: n, className: r, icon: a, isCollapsed: c, onClick: u, "aria-label": _ } = e;
    return (0, i.jsxs)("div", {
        className: s()(d.iE, r),
        children: [
            (0, i.jsxs)(l.D, {
                onClick: u,
                onKeyDown: (e) => e.stopPropagation(),
                className: s()(d.wx, { [d.bG]: null != c }),
                "aria-expanded": null != c ? !c : void 0,
                "aria-label": _,
                children: [
                    null != a && (0, i.jsx)("div", { "aria-hidden": !0, className: d.nr, children: a }),
                    (0, i.jsx)("span", { className: d.Gp, children: t }),
                    null != c
                        ? (0, i.jsx)(o.a, {
                              size: "custom",
                              color: "currentColor",
                              className: s()(d.Cj, { [d.Tu]: c }),
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
