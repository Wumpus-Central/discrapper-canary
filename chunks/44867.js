n.d(t, { c: () => m });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(999382),
    o = n(227380),
    c = n(976288),
    u = n(386885),
    d = n(388032),
    g = n(366869);
function m(e) {
    let { fetchDiscoveryData: t, settingsView: n, requireTerms: m, rules: p } = e,
        f = (0, l.e7)([s.Z], () => s.Z.getProps().guild);
    if (
        (i.useEffect(() => {
            null != f && t(f.id);
        }, [t, f]),
        null == f)
    )
        return null;
    switch (n) {
        case u.U.DISQUALIFIED:
            return (0, r.jsx)(o.Z, {
                guild: f,
                guildId: f.id,
                headerContent: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(a.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            className: g.header,
                            children: d.intl.format(d.t.n1LDQM, {
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
                            children: d.intl.string(d.t.Qgaw3d),
                        }),
                    ],
                }),
            });
        case u.U.ELIGIBLE_DISABLED:
        case u.U.ELIGIBLE_ENABLED:
            return (0, r.jsx)(c.d, {
                requireTerms: m,
                rules: p,
                settingsView: n,
            });
        case u.U.INELIGIBLE:
            return (0, r.jsx)(o.Z, {
                guild: f,
                guildId: f.id,
                headerContent: (0, r.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    children: d.intl.format(d.t["+6Hylv"], {
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
