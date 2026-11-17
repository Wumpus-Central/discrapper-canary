var a = i(477900),
    s = i(582128),
    e = i(189213),
    r = i(103557),
    l = i(926403),
    o = i(782513);
i(652215);
var c = i(792996);
i.d(
    n,
    {},
    {
        default: function (t) {
            let { guildId: n, userIds: i, transitionState: u, onClose: g } = t,
                [d, h] = s.useState(""),
                [p, k] = s.useState(!1);
            return (0, a.jsx)(e.a, {
                transitionState: u,
                onClose: g,
                title: c.intl.formatToPlainString(c.t["s/+WDQ"], { count: i.length }),
                subtitle: c.intl.string(c.t.kcBqzH),
                input: (0, a.jsx)(r.f, {
                    label: c.intl.string(c.t["+2QEPt"]),
                    maxLength: 512,
                    onChange: h,
                    value: d,
                    rows: 2,
                }),
                actions: [
                    { variant: "secondary", text: c.intl.string(c.t["ETE/oC"]), onClick: g },
                    {
                        variant: "critical-primary",
                        text: c.intl.string(c.t["3glT6Z"]),
                        loading: p,
                        onClick: async function () {
                            (k(!0), await (0, o.cd)((0, l.A)(n, i, d), (0, o.Xh)()), g());
                        },
                    },
                ],
            });
        },
    },
);
