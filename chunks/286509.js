n.d(t, { A: () => m });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(939249),
    o = n(834730),
    u = n(847374),
    c = n(650583),
    d = n(146583);
let m = i.memo(function (e) {
    let { children: t, trailing: n, className: i, icon: s, isCollapsed: m, onClick: h, "aria-label": p } = e;
    return (0, l.jsxs)("div", {
        className: r()(d.iE, i),
        children: [
            (0, l.jsxs)(a.D, {
                onClick: h,
                onKeyDown: (e) => {
                    e.key !== c.dh.ESCAPE && e.stopPropagation();
                },
                className: r()(d.wx, { [d.bG]: null != m }),
                "aria-expanded": null != m ? !m : void 0,
                "aria-label": p,
                children: [
                    null != s && (0, l.jsx)("div", { "aria-hidden": !0, className: d.nr, children: s }),
                    (0, l.jsx)(o.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "none",
                        lineClamp: 1,
                        className: d.Gp,
                        children: t,
                    }),
                    null != m
                        ? (0, l.jsx)(u.a, {
                              size: "custom",
                              color: "currentColor",
                              className: r()(d.Cj, { [d.Tu]: m }),
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
