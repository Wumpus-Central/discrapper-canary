n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(397927),
    o = n(533550),
    d = n(624458),
    c = n(844944),
    u = n(513461),
    h = n(663997),
    A = n(652793),
    g = n(576705),
    m = n(221950),
    p = n(652215),
    _ = n(985018);
function x(e) {
    let { guild: t, selected: n } = e,
        x = (0, s.bG)([g.A], () => g.A.can(p.xBc.KICK_MEMBERS, t)),
        f = (0, s.bG)([c.A], () => c.A.getSubmittedGuildJoinRequestTotal(t.id)),
        E = x ? (f ?? 0) : 0;
    l.useEffect(() => {
        x &&
            t.features.has(p.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(p.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            d.A.fetchGuildJoinRequests({ guildId: t.id, status: u.B5.SUBMITTED, limit: h.L });
    }, [x, t]);
    let C = l.useCallback(() => {
            (0, m.aZ)(t.id);
        }, [t.id]),
        I = (0, o.q8)(t.id, a.M.MEMBERS_LAUNCH_UPSELL);
    return (0, i.jsx)("div", {
        ref: I,
        children: (0, i.jsx)(A.G, {
            id: `members-${t.id}`,
            renderIcon: (e) => (0, i.jsx)(r.nFg, { size: "md", color: "currentColor", className: e }),
            text: _.intl.string(_.t.oclz3Z),
            selected: n,
            onClick: C,
            trailing: E > 0 ? (0, i.jsx)(r.hVq, { count: E }) : null,
        }),
    });
}
