n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(194981),
    a = n(280336),
    s = n(834730),
    r = n(255434),
    o = n(375708),
    c = n(957818);
function d(e) {
    let { name: t, status: n, shouldShow: d = !0, children: u } = e,
        {
            tooltipId: h,
            isVisible: p,
            targetElementRef: m,
            trigger: A,
        } = (0, l.D)({ children: u, shouldShow: d, asContainer: !0, containerTag: "div", delay: 500 }),
        x = (0, a.j)({ shouldShow: p }),
        g = n?.icon,
        f = (0, i.jsxs)("div", {
            className: c.Qs,
            children: [
                (0, i.jsx)(s.E, { variant: "text-md/medium", color: "text-strong", lineClamp: 1, children: t }),
                null != n &&
                    null != g &&
                    (0, i.jsxs)("div", {
                        className: c.h5,
                        children: [
                            (0, i.jsx)(g, { size: "xxs", className: c.I8 }),
                            (0, i.jsx)(s.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                className: c.Rh,
                                children: o.intl.string(n.label),
                            }),
                        ],
                    }),
            ],
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            A,
            x((e, t) =>
                t
                    ? (0, i.jsx)(r.R, {
                          isVisible: p,
                          targetElementRef: m,
                          id: h,
                          content: f,
                          position: "top",
                          animationStyle: e,
                      })
                    : null,
            ),
        ],
    });
}
