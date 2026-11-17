var l = n(477900);
n(582128);
var o = n(503698),
    a = n.n(o),
    r = n(821609),
    i = n(534514),
    d = n(403581),
    s = n(43990),
    u = n(939249),
    p = n(789645),
    c = n(818348),
    b = n(792996),
    m = n(698833);
n.d(
    t,
    {},
    {
        In: function (e) {
            let { children: t } = e;
            return (0, l.jsx)(i.D, {
                variant: "heading-xs/medium",
                color: "text-strong",
                className: m.ut,
                children: t,
            });
        },
        T0: function (e) {
            let { className: t, ref: n, children: o, onClick: r } = e;
            return (0, l.jsx)(s.N, {
                theme: c.NJ.DARK,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        ref: n,
                        className: a()(m.lm, e, t),
                        children: [
                            (0, l.jsx)("div", { className: m.qZ, children: o }),
                            (0, l.jsx)(u.D, {
                                focusProps: { offset: 6 },
                                className: m.b,
                                onClick: r,
                                "aria-label": b.intl.string(b.t.WAI6xu),
                                children: (0, l.jsx)(p.XSmallIcon, { size: "sm" }),
                            }),
                        ],
                    }),
            });
        },
        fY: function (e) {
            let { text: t, onClick: n, icon: o = d.NitroWheelIcon, iconPosition: a } = e;
            return (0, l.jsx)(r.$, {
                onClick: n,
                text: t,
                size: "sm",
                icon: o,
                iconPosition: a,
                variant: "overlay-primary",
            });
        },
    },
);
