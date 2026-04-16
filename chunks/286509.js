"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(602624);
let u = 16,
    c = i.memo(function (e) {
        let { children: t, trailing: n, className: i, icon: s, isCollapsed: c, onClick: d, "aria-label": _ } = e;
        return (0, r.jsxs)("div", {
            className: a()(l.iE, i),
            children: [
                (0, r.jsxs)(o.DUT, {
                    onClick: d,
                    onKeyDown: (e) => e.stopPropagation(),
                    className: a()(l.wx, { [l.bG]: null != c }),
                    "aria-expanded": null != c ? !c : void 0,
                    "aria-label": _,
                    children: [
                        null != s && (0, r.jsx)("div", { "aria-hidden": !0, className: l.nr, children: s }),
                        (0, r.jsx)("span", { className: l.Gp, children: t }),
                        null != c
                            ? (0, r.jsx)(o.abt, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: a()(l.Cj, { [l.Tu]: c }),
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
