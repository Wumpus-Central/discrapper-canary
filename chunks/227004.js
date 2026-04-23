n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(177953),
    o = n(777666),
    d = n(533550),
    c = n(624458),
    u = n(844944),
    h = n(513461),
    A = n(663997),
    _ = n(652793),
    m = n(576705),
    g = n(221950),
    p = n(652215),
    f = n(985018);
function E(e) {
    let { guild: t, selected: n } = e,
        E = (0, s.bG)([m.A], () => m.A.can(p.xBc.KICK_MEMBERS, t)),
        x = (0, s.bG)([u.A], () => u.A.getSubmittedGuildJoinRequestTotal(t.id)),
        I = E ? (x ?? 0) : 0;
    l.useEffect(() => {
        E &&
            t.features.has(p.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(p.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            c.A.fetchGuildJoinRequests({ guildId: t.id, status: h.B5.SUBMITTED, limit: A.L });
    }, [E, t]);
    let C = l.useCallback(() => {
            (0, g.aZ)(t.id);
        }, [t.id]),
        b = (0, d.q8)(t.id, a.M.MEMBERS_LAUNCH_UPSELL);
    return (0, i.jsx)("div", {
        ref: b,
        children: (0, i.jsx)(_.G, {
            id: `members-${t.id}`,
            renderIcon: (e) => (0, i.jsx)(r.n, { size: "md", color: "currentColor", className: e }),
            text: f.intl.string(f.t.oclz3Z),
            selected: n,
            onClick: C,
            trailing: I > 0 ? (0, i.jsx)(o.hV, { count: I }) : null,
        }),
    });
}
