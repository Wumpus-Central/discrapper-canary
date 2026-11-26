var n = l(477900),
    a = l(582128),
    r = l(646514),
    i = l(194261),
    s = l(534514),
    u = l(834730),
    o = l(191850),
    d = l(792996),
    c = l(211514);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { title: t, children: l } = e,
                f = a.useId();
            return (0, n.jsxs)("section", {
                className: c.nd,
                "aria-labelledby": f,
                children: [
                    (0, n.jsxs)("div", {
                        className: c.wx,
                        children: [
                            (0, n.jsx)("span", {
                                className: c.oL,
                                children: (0, n.jsx)(i.LockIcon, {
                                    size: "sm",
                                    color: r.A.colors.ICON_SUBTLE,
                                    "aria-hidden": !0,
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: c.YC,
                                children: [
                                    (0, n.jsx)(s.D, { variant: "heading-sm/semibold", id: f, children: t }),
                                    (0, n.jsx)(u.E, {
                                        variant: "body-xs/normal",
                                        color: "text-muted",
                                        selectable: !0,
                                        children: d.intl.string(o.default.jgDBJZ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    l,
                ],
            });
        },
    },
);
