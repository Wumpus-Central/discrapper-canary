n.d(t, { t: () => g });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(555337),
    c = n(658446),
    o = n(946171),
    d = n(716610),
    u = n(985018),
    f = n(840966);
function g(e) {
    let { fetchDiscoveryData: t, settingsView: n, requireTerms: g, rules: b } = e,
        m = (0, l.bG)([a.A], () => a.A.getProps().guild);
    if (
        (i.useEffect(() => {
            null != m && t(m.id);
        }, [t, m]),
        null == m)
    )
        return null;
    switch (n) {
        case d.v.DISQUALIFIED:
            return (0, r.jsx)(c.A, {
                guild: m,
                guildId: m.id,
                headerContent: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: f.w,
                            children: u.intl.format(u.t.n1LDQM, {
                                removedHook: (e, t) =>
                                    (0, r.jsx)(
                                        "strong",
                                        {
                                            className: f.O,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: u.intl.string(u.t.Qgaw3d),
                        }),
                    ],
                }),
            });
        case d.v.ELIGIBLE_DISABLED:
        case d.v.ELIGIBLE_ENABLED:
            return (0, r.jsx)(o.s, {
                requireTerms: g,
                rules: b,
                settingsView: n,
            });
        case d.v.INELIGIBLE:
            return (0, r.jsx)(c.A, {
                guild: m,
                guildId: m.id,
                headerContent: (0, r.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    children: u.intl.format(u.t["+6Hylv"], {
                        doesNotHook: (e, t) =>
                            (0, r.jsx)(
                                "strong",
                                {
                                    className: f.O,
                                    children: e,
                                },
                                t,
                            ),
                    }),
                }),
            });
        default:
            return (0, r.jsx)(s.y$y, {});
    }
}
