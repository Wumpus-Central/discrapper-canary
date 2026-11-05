var i = n(477900),
    r = n(582128),
    a = n(331322),
    s = n(582306),
    l = n(201895),
    o = n(566908),
    d = n(792996),
    c = n(177600);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { defaultValue: t, onChange: n, scheduledMessageId: u } = e,
                [_, E] = r.useState(t),
                A = (0, o._O)(),
                f = (0, o.yp)(u);
            function h(e) {
                e.isValid() && E(e);
            }
            return (
                r.useEffect(() => {
                    n?.(_);
                }, [_, n]),
                (0, i.jsxs)(a.B, {
                    direction: "horizontal",
                    gap: 16,
                    className: c.i,
                    children: [
                        (0, i.jsx)("div", {
                            className: c.f,
                            children: (0, i.jsx)(s.J, {
                                required: !0,
                                label: d.intl.string(d.t.pSZKvM),
                                value: _,
                                onSelect: h,
                                minDate: A,
                                maxDate: f,
                                disabled: !1,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: c.f,
                            children: (0, i.jsx)(l.c, {
                                label: d.intl.string(d.t.GOmEb8),
                                required: !0,
                                value: _,
                                onChange: h,
                                hideValue: !1,
                                disabled: !1,
                                errorMessage: (0, o.Vf)(_, u),
                            }),
                        }),
                    ],
                })
            );
        },
    },
);
