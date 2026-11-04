i(321073);
var s = i(477900),
    n = i(582128),
    e = i(189213),
    r = i(834730),
    l = i(49999),
    c = i(792996),
    d = i(796635);
i.d(
    t,
    {},
    {
        default: function (a) {
            let { modalConfig: t, markAsDismissed: i, onClose: o, ...h } = a,
                p = n.useCallback(
                    (a) => {
                        (t.onPrimaryClick?.(a), i(l.i.TAKE_ACTION), o?.());
                    },
                    [t, i, o],
                ),
                u = [];
            return (
                t.hasCancelButton && u.push({ variant: "secondary", text: c.intl.string(c.t["ETE/oC"]), onClick: o }),
                null != t.primaryButtonText && u.push({ variant: "primary", text: t.primaryButtonText, onClick: p }),
                (0, s.jsx)(e.a, {
                    ...h,
                    onClose: o,
                    title: t.header,
                    actions: u,
                    size: "md",
                    children: (0, s.jsx)("div", {
                        className: d.kL,
                        children: (0, s.jsx)("div", {
                            className: d.hQ,
                            children: t.bodies.map((a, t) =>
                                (0, s.jsx)(
                                    r.E,
                                    { tag: "span", className: d.h_, variant: "body-sm/normal", children: a },
                                    t,
                                ),
                            ),
                        }),
                    }),
                })
            );
        },
    },
);
