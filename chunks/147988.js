n.d(t, { t: () => x });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(534514),
    a = n(834730),
    o = n(289873),
    d = n(555337),
    c = n(658446),
    u = n(946171),
    m = n(716610),
    g = n(985018),
    h = n(710021);
function x(e) {
    let { fetchDiscoveryData: t, settingsView: n, requireTerms: x, rules: _ } = e,
        p = (0, s.bG)([d.A], () => d.A.getProps().guild);
    if (
        (l.useEffect(() => {
            null != p && t(p.id);
        }, [t, p]),
        null == p)
    )
        return null;
    switch (n) {
        case m.v.DISQUALIFIED:
            return (0, i.jsx)(c.A, {
                guild: p,
                guildId: p.id,
                headerContent: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(r.D, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: h.w,
                            children: g.intl.format(g.t.n1LDQM, {
                                removedHook: (e, t) => (0, i.jsx)("strong", { className: h.O, children: e }, t),
                            }),
                        }),
                        (0, i.jsx)(a.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: g.intl.string(g.t.Qgaw3d),
                        }),
                    ],
                }),
            });
        case m.v.ELIGIBLE_DISABLED:
        case m.v.ELIGIBLE_ENABLED:
            return (0, i.jsx)(u.s, { requireTerms: x, rules: _, settingsView: n });
        case m.v.INELIGIBLE:
            return (0, i.jsx)(c.A, {
                guild: p,
                guildId: p.id,
                headerContent: (0, i.jsx)(r.D, {
                    variant: "heading-md/semibold",
                    children: g.intl.format(g.t["+6Hylv"], {
                        doesNotHook: (e, t) => (0, i.jsx)("strong", { className: h.O, children: e }, t),
                    }),
                }),
            });
        default:
            return (0, i.jsx)(o.y, {});
    }
}
