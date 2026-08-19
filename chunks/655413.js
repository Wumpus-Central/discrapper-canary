n.d(t, { A: () => c });
var i = n(477900);
n(582128);
var l = n(194981),
    a = n(280336),
    s = n(834730),
    r = n(255434),
    o = n(362834);
function c(e) {
    let { name: t, shouldShow: n = !0, delay: c, children: d } = e,
        {
            tooltipId: u,
            isVisible: h,
            targetElementRef: p,
            trigger: m,
        } = (0, l.D)({ children: d, shouldShow: n, asContainer: !0, containerTag: "div", delay: c }),
        f = (0, a.j)({ shouldShow: h }),
        A = (0, i.jsx)("div", {
            className: o.Qs,
            children: (0, i.jsx)(s.E, { variant: "text-md/medium", color: "text-strong", lineClamp: 1, children: t }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            m,
            f((e, t) =>
                t
                    ? (0, i.jsx)(r.R, {
                          isVisible: h,
                          targetElementRef: p,
                          id: u,
                          content: A,
                          position: "top",
                          animationStyle: e,
                      })
                    : null,
            ),
        ],
    });
}
