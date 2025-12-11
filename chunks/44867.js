n.d(t, { c: () => f });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(999382),
    o = n(227380),
    c = n(976288),
    d = n(386885),
    u = n(388032),
    g = n(487840);
function f(e) {
    let { fetchDiscoveryData: t, settingsView: n, requireTerms: f, rules: m } = e,
        b = (0, l.e7)([s.Z], () => s.Z.getProps().guild);
    if (
        (i.useEffect(() => {
            null != b && t(b.id);
        }, [t, b]),
        null == b)
    )
        return null;
    switch (n) {
        case d.U.DISQUALIFIED:
            return (0, r.jsx)(o.Z, {
                guild: b,
                guildId: b.id,
                headerContent: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(a.Heading, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: g.header,
                            children: u.intl.format(u.t.n1LDQM, {
                                removedHook: (e, t) =>
                                    (0, r.jsx)(
                                        "strong",
                                        {
                                            className: g.danger,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: u.intl.string(u.t.Qgaw3d),
                        }),
                    ],
                }),
            });
        case d.U.ELIGIBLE_DISABLED:
        case d.U.ELIGIBLE_ENABLED:
            return (0, r.jsx)(c.d, {
                requireTerms: f,
                rules: m,
                settingsView: n,
            });
        case d.U.INELIGIBLE:
            return (0, r.jsx)(o.Z, {
                guild: b,
                guildId: b.id,
                headerContent: (0, r.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    children: u.intl.format(u.t["+6Hylv"], {
                        doesNotHook: (e, t) =>
                            (0, r.jsx)(
                                "strong",
                                {
                                    className: g.danger,
                                    children: e,
                                },
                                t,
                            ),
                    }),
                }),
            });
        default:
            return (0, r.jsx)(a.$jN, {});
    }
}
