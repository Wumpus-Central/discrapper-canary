var e = i(477900),
    a = i(582128),
    s = i(189213),
    r = i(103557);
i(890634);
var l = i(792996);
i.d(
    n,
    {},
    {
        default: function (t) {
            let { initialCustomMessage: n, onSubmit: i, onClose: o, transitionState: c } = t,
                [u, d] = a.useState(n);
            return (0, e.jsx)(s.a, {
                onClose: o,
                transitionState: c,
                title: l.intl.string(l.t.Df4aUN),
                subtitle: l.intl.string(l.t.eOWEmL),
                actions: [
                    {
                        text: l.intl.string(l.t["ETE/oC"]),
                        onClick: function () {
                            o();
                        },
                        variant: "secondary",
                    },
                    {
                        text: l.intl.string(l.t.bt75uw),
                        onClick: function () {
                            i(u);
                        },
                    },
                ],
                children: (0, e.jsx)(r.f, {
                    placeholder: l.intl.string(l.t.gDZw7A),
                    value: u,
                    onChange: d,
                    maxLength: 300,
                }),
            });
        },
    },
);
