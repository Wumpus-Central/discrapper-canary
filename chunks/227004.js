n.d(t, {
    A: () => A,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(554146),
    s = n(397927),
    o = n(533550),
    c = n(624458),
    u = n(844944),
    d = n(513461),
    f = n(663997),
    p = n(652793),
    h = n(576705),
    b = n(221950),
    g = n(652215),
    m = n(985018);

function A(e) {
    let { guild: t, selected: n } = e,
        A = (0, i.bG)([h.A], () => h.A.can(g.xBc.KICK_MEMBERS, t)),
        y = (0, i.bG)([u.A], () => u.A.getSubmittedGuildJoinRequestTotal(t.id)),
        O = A && null != y ? y : 0;
    l.useEffect(() => {
        A &&
            t.features.has(g.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(g.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            c.A.fetchGuildJoinRequests({
                guildId: t.id,
                status: d.B5.SUBMITTED,
                limit: f.L,
            });
    }, [A, t]);
    let j = l.useCallback(() => {
            (0, b.aZ)(t.id);
        }, [t.id]),
        v = (0, o.q8)(t.id, a.M.MEMBERS_LAUNCH_UPSELL);
    return (0, r.jsx)("div", {
        ref: v,
        children: (0, r.jsx)(p.G, {
            id: "members-".concat(t.id),
            renderIcon: (e) =>
                (0, r.jsx)(s.nFg, {
                    size: "md",
                    color: "currentColor",
                    className: e,
                }),
            text: m.intl.string(m.t.oclz3Z),
            selected: n,
            onClick: j,
            trailing:
                O > 0
                    ? (0, r.jsx)(s.hVq, {
                          count: O,
                      })
                    : null,
        }),
    });
}
