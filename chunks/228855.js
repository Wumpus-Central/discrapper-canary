var e = n(477900),
    s = n(582128),
    r = n(731738),
    a = n(855986),
    l = n(189213),
    c = n(858899),
    d = n(331322),
    o = n(834730),
    u = n(682163),
    m = n(913379),
    D = n(253932),
    h = n(71393),
    x = n(115063),
    S = n(959702),
    p = n(386936),
    A = n(792996),
    b = n(368549);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { transitionState: i, guildId: n, onClose: f } = t,
                v = (0, a.bG)([h.A], () => h.A.getGuild(n));
            if (
                (s.useEffect(() => {
                    ((0, S.Q)(n), (0, p.$)(p.s.MODAL_VIEWED, n), m.A.increment({ name: r.K.DM_SETTINGS_UPSELL_VIEW }));
                }, [n]),
                null == v)
            )
                return null;
            function g(t) {
                t.preventDefault();
                let i = (0, x.Tb)();
                (i.add(n),
                    D.$s
                        .updateSetting(Array.from(i))
                        .then(() => (0, c.P0)({ text: A.intl.string(A.t.rlYD1W), variant: "success" })),
                    f(),
                    (0, p.$)(p.s.MODAL_DISABLED_DMS, n));
            }
            return (0, e.jsx)("form", {
                onSubmit: g,
                children: (0, e.jsx)(l.a, {
                    transitionState: i,
                    onClose: f,
                    title: A.intl.string(A.t.w2BvnL),
                    subtitle: A.intl.format(A.t.Depjkv, { guild_name: v.name }),
                    actions: [
                        {
                            text: A.intl.string(A.t.PsWbcp),
                            onClick: function () {
                                (f(), (0, p.$)(p.s.MODAL_DISMISSED, n));
                            },
                            variant: "secondary",
                        },
                        { text: A.intl.string(A.t.TD7iUx), onClick: g },
                    ],
                    children: (0, e.jsxs)(d.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, e.jsx)(o.E, {
                                variant: "body-md/medium",
                                color: "text-muted",
                                children: A.intl.string(A.t.KPB2iw),
                            }),
                            (0, e.jsx)("div", {
                                className: b.bo,
                                children: (0, e.jsxs)("div", {
                                    className: b.OA,
                                    children: [
                                        (0, e.jsx)(u.Ay, { guild: v, size: u.Ay.Sizes.SMALL }),
                                        (0, e.jsx)(o.E, {
                                            className: b.J5,
                                            variant: "body-md/semibold",
                                            children: v.name,
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
            });
        },
    },
);
