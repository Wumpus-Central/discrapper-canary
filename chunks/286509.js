n.d(t, { A: () => h });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(939249),
    o = n(834730),
    u = n(847374),
    c = n(650583),
    d = n(146583);
let h = i.memo(function (e) {
    let { children: t, trailing: n, className: i, icon: s, isCollapsed: h, onClick: m, "aria-label": f } = e;
    return (0, l.jsxs)("div", {
        className: r()(d.iE, i),
        children: [
            (0, l.jsxs)(a.D, {
                onClick: m,
                onKeyDown: (e) => {
                    e.key !== c.dh.ESCAPE && e.stopPropagation();
                },
                className: r()(d.wx, { [d.bG]: null != h }),
                "aria-expanded": null != h ? !h : void 0,
                "aria-label": f,
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
                    null != h
                        ? (0, l.jsx)(u.a, {
                              size: "custom",
                              color: "currentColor",
                              className: r()(d.Cj, { [d.Tu]: h }),
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
