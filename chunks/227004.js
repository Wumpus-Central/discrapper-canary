n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(397927),
    o = n(533550),
    c = n(624458),
    d = n(844944),
    u = n(513461),
    h = n(663997),
    A = n(652793),
    _ = n(576705),
    m = n(221950),
    g = n(652215),
    p = n(985018);
function f(e) {
    let { guild: t, selected: n } = e,
        f = (0, s.bG)([_.A], () => _.A.can(g.xBc.KICK_MEMBERS, t)),
        x = (0, s.bG)([d.A], () => d.A.getSubmittedGuildJoinRequestTotal(t.id)),
        E = f ? (x ?? 0) : 0;
    l.useEffect(() => {
        f &&
            t.features.has(g.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(g.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            c.A.fetchGuildJoinRequests({ guildId: t.id, status: u.B5.SUBMITTED, limit: h.L });
    }, [f, t]);
    let I = l.useCallback(() => {
            (0, m.aZ)(t.id);
        }, [t.id]),
        C = (0, o.q8)(t.id, a.M.MEMBERS_LAUNCH_UPSELL);
    return (0, i.jsx)("div", {
        ref: C,
        children: (0, i.jsx)(A.G, {
            id: `members-${t.id}`,
            renderIcon: (e) => (0, i.jsx)(r.nFg, { size: "md", color: "currentColor", className: e }),
            text: p.intl.string(p.t.oclz3Z),
            selected: n,
            onClick: I,
            trailing: E > 0 ? (0, i.jsx)(r.hVq, { count: E }) : null,
        }),
    });
}
