var a = n(477900),
    e = n(582128),
    s = n(189213),
    r = n(27192),
    l = n(493540),
    o = n(980406),
    c = n(792996);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { guildId: i, transitionState: n, onClose: d } = t,
                [u, h] = e.useState(!1),
                [p, C] = e.useState(!1),
                b = c.intl.string(c.t["22itmo"]);
            return (0, a.jsx)(s.a, {
                size: "md",
                transitionState: n,
                onClose: d,
                "aria-label": b,
                title: b,
                subtitle: c.intl.string(c.t.kdbm9C),
                actions: [
                    { variant: "secondary", onClick: d, text: c.intl.string(c.t["ETE/oC"]) },
                    {
                        variant: "primary",
                        text: c.intl.string(c.t["cY+Oob"]),
                        disabled: !p,
                        onClick: async function () {
                            h(!0);
                            try {
                                (await (0, l.Bo)(i), d());
                            } finally {
                                h(!1);
                            }
                        },
                        loading: u,
                    },
                ],
                children: (0, a.jsx)(r.Kj, {
                    onChange: function () {
                        C((t) => !t);
                    },
                    value: p,
                    children: (0, o.r)(),
                }),
            });
        },
    },
);
