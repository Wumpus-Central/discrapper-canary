"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(926157);
let u = 16,
    c = i.memo(function (e) {
        let { children: t, trailing: n, className: i, icon: a, isCollapsed: c, onClick: d, "aria-label": _ } = e;
        return (0, r.jsxs)("div", {
            className: s()(l.iE, i),
            children: [
                (0, r.jsxs)(o.DUT, {
                    onClick: d,
                    onKeyDown: (e) => e.stopPropagation(),
                    className: s()(l.wx, { [l.bG]: null != c }),
                    "aria-expanded": null != c ? !c : void 0,
                    "aria-label": _,
                    children: [
                        null != a && (0, r.jsx)("div", { "aria-hidden": !0, className: l.nr, children: a }),
                        (0, r.jsx)("span", { className: l.Gp, children: t }),
                        null != c
                            ? (0, r.jsx)(o.abt, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: s()(l.Cj, { [l.Tu]: c }),
                                  height: u,
                                  width: u,
                              })
                            : null,
                    ],
                }),
                n,
            ],
        });
    });
