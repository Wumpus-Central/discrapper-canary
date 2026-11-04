var i = n(477900);
n(582128);
var l = n(402883),
    a = n(280336),
    s = n(834730),
    r = n(160733),
    o = n(732079);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { name: t, shouldShow: n = !0, delay: d, children: c } = e,
                {
                    tooltipId: u,
                    isVisible: h,
                    targetElementRef: p,
                    trigger: m,
                } = (0, l.D)({ children: c, shouldShow: n, asContainer: !0, containerTag: "div", delay: d }),
                A = (0, a.j)({ shouldShow: h }),
                f = (0, i.jsx)("div", {
                    className: o.Qs,
                    children: (0, i.jsx)(s.E, {
                        variant: "body-md/medium",
                        color: "text-strong",
                        lineClamp: 1,
                        children: t,
                    }),
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    m,
                    A((e, t) =>
                        t
                            ? (0, i.jsx)(r.R, {
                                  isVisible: h,
                                  targetElementRef: p,
                                  id: u,
                                  content: f,
                                  position: "top",
                                  animationStyle: e,
                              })
                            : null,
                    ),
                ],
            });
        },
    },
);
