n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(926157);
let c = 16,
    u = i.memo(function (e) {
        let { children: t, trailing: n, className: i, icon: a, isCollapsed: u, onClick: d, "aria-label": f } = e;
        return (0, r.jsxs)("div", {
            className: s()(l.iE, i),
            children: [
                (0, r.jsxs)(o.DUT, {
                    onClick: d,
                    onKeyDown: (e) => e.stopPropagation(),
                    className: s()(l.wx, { [l.bG]: null != u }),
                    "aria-expanded": null != u ? !u : void 0,
                    "aria-label": f,
                    children: [
                        null != a &&
                            (0, r.jsx)("div", {
                                "aria-hidden": !0,
                                className: l.nr,
                                children: a,
                            }),
                        (0, r.jsx)("span", {
                            className: l.Gp,
                            children: t,
                        }),
                        null != u
                            ? (0, r.jsx)(o.abt, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: s()(l.Cj, { [l.Tu]: u }),
                                  height: c,
                                  width: c,
                              })
                            : null,
                    ],
                }),
                n,
            ],
        });
    });
