n.d(t, { A: () => m });
var i = n(477900),
    s = n(582128),
    r = n(503698),
    l = n.n(r),
    a = n(939249),
    o = n(834730),
    c = n(847374),
    u = n(650583),
    d = n(146583);
let m = s.memo(function (e) {
    let { children: t, trailing: n, className: s, icon: r, isCollapsed: m, onClick: f, "aria-label": E } = e;
    return (0, i.jsxs)("div", {
        className: l()(d.iE, s),
        children: [
            (0, i.jsxs)(a.D, {
                onClick: f,
                onKeyDown: (e) => {
                    e.key !== u.dh.ESCAPE && e.stopPropagation();
                },
                className: l()(d.wx, { [d.bG]: null != m }),
                "aria-expanded": null != m ? !m : void 0,
                "aria-label": E,
                children: [
                    null != r && (0, i.jsx)("div", { "aria-hidden": !0, className: d.nr, children: r }),
                    (0, i.jsx)(o.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "none",
                        lineClamp: 1,
                        className: d.Gp,
                        children: t,
                    }),
                    null != m
                        ? (0, i.jsx)(c.a, {
                              size: "custom",
                              color: "currentColor",
                              className: l()(d.Cj, { [d.Tu]: m }),
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
