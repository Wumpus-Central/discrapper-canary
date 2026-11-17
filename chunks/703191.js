var a = i(477900),
    e = i(582128),
    o = i(189213),
    l = i(103557),
    s = i(797472),
    r = i(926403),
    c = i(782513),
    u = i(200700),
    d = i(792996);
i.d(
    n,
    {},
    {
        default: function (t) {
            let { guildId: n, userIds: i, transitionState: h, onClose: g } = t,
                [p, C] = e.useState(u.DisableCommunicationDuration.DURATION_60_SEC),
                [k, f] = e.useState(""),
                [S, w] = e.useState(!1);
            return (0, a.jsx)(o.a, {
                transitionState: h,
                onClose: g,
                title: d.intl.formatToPlainString(d.t.zofkaV, { count: i.length }),
                subtitle: d.intl.format(d.t.Ns83GT, { helpdeskArticle: u.MO }),
                input: (0, a.jsx)(s.$, { duration: p, onChange: C }),
                actions: [
                    { variant: "secondary", text: d.intl.string(d.t["ETE/oC"]), onClick: g },
                    {
                        variant: "primary",
                        text: d.intl.string(d.t.MlPTIi),
                        loading: S,
                        onClick: async function () {
                            w(!0);
                            let t = new Date(Date.now() + 1e3 * p).toISOString();
                            (await (0, c.cd)((0, r.f)(n, i, t, k), (0, c.MC)()), g());
                        },
                    },
                ],
                children: (0, a.jsx)(l.f, {
                    label: d.intl.string(d.t.ewHW15),
                    placeholder: d.intl.string(d.t.GakiH1),
                    maxLength: 512,
                    onChange: f,
                    value: k,
                    rows: 4,
                }),
            });
        },
    },
);
