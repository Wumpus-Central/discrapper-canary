n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(237140),
    a = n(505679),
    s = n(521754),
    r = n(834730),
    o = n(750506),
    c = n(375708),
    d = n(957818);
function u(e) {
    let { name: t, status: n, shouldShow: u = !0, children: h } = e,
        {
            tooltipId: p,
            isVisible: m,
            targetElementRef: A,
            trigger: x,
        } = (0, s.D)({ children: h, shouldShow: u, asContainer: !0, containerTag: "div", delay: 500 }),
        g = (0, a.j)({ shouldShow: m }),
        f = n?.icon,
        C = (0, i.jsxs)("div", {
            className: d.Qs,
            children: [
                (0, i.jsx)(r.E, { variant: "text-md/medium", color: "text-strong", lineClamp: 1, children: t }),
                null != n &&
                    null != f &&
                    (0, i.jsxs)("div", {
                        className: d.h5,
                        children: [
                            (0, i.jsx)(f, { size: "xxs", className: d.I8 }),
                            (0, i.jsx)(r.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                className: d.Rh,
                                children: c.intl.string(n.label),
                            }),
                        ],
                    }),
            ],
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            x,
            g((e, t) =>
                t
                    ? (0, i.jsx)(l.R, {
                          isVisible: m,
                          targetElementRef: A,
                          id: p,
                          content: C,
                          position: "top",
                          animationStyle: e,
                          layerContext: o.uY,
                      })
                    : null,
            ),
        ],
    });
}
