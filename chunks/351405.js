n.d(t, { P: () => y }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(397927),
    a = n(138175),
    o = n(99072),
    d = n(443795),
    c = n(961350),
    u = n(629016),
    m = n(375492),
    _ = n(290863),
    h = n(461213),
    p = n(287809),
    g = n(456060),
    A = n(454292),
    x = n(850670),
    f = n(125017),
    C = n(104171),
    E = n(13403),
    I = n(536189),
    v = n(652215),
    b = n(272984),
    T = n(772234);
function N(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: s, activityActionType: a } = e,
        o = Math.max(n, t.length),
        d = (0, g.SJ)({ maxPartySize: l, partySize: o, activityActionType: a }),
        c = [...t];
    for (; c.length < n && c.length < 8; ) c.push(C.mt);
    for (; c.length < l && c.length < 8; ) c.push(null);
    return (0, i.jsxs)("div", {
        className: T.UF,
        children: [
            c.length > 0 &&
                (0, i.jsx)(C.Ay, {
                    guildId: s,
                    users: c,
                    max: l > 0 ? Math.min(l, 8) : 8,
                    size: C.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, i.jsx)(r.Text, { variant: "text-xs/medium", color: "none", children: d }),
        ],
    });
}
function y(e) {
    let { analyticsLocations: t, app: n, channel: r, message: g, hideParty: T, onView: y } = e,
        S = (0, a.b)(n),
        j = (0, s.bG)([c.default], () => c.default.getId()),
        L = (0, s.bG)([_.A], () => {
            if (null == g.application) return _.A.findActivity(g.author.id, (e) => e.type === v.$pd.LISTENING);
            {
                let e = g.author.id;
                return (
                    (0, x.v)(g) && (e = e === j && r.isPrivate() ? r.getRecipientId() : j),
                    _.A.getApplicationActivity(e, g.application.id)
                );
            }
        }, [g, r, j]),
        R = (0, s.bG)([m.A, h.A], () => (0, A.A)(m.A, h.A, S.id), [S.id]),
        P = (0, s.yK)([u.A], () => (null == L || null == L.party ? [] : Array.from(u.A.getParty(L.party.id) ?? [])), [
            L,
        ]),
        { partySize: D, maxPartySize: M } = (0, f._)(L),
        w = l.useMemo(
            () =>
                P.map((e) => {
                    let t = p.default.getUser(e);
                    return null != t ? t : C.mt;
                }),
            [P],
        ),
        O = l.useMemo(
            () =>
                (0, i.jsx)(N, {
                    partyMembers: w,
                    partySize: D,
                    maxPartySize: M,
                    guildId: r.guild_id,
                    activityActionType: g.activity?.type,
                }),
            [w, D, M, r.guild_id, g.activity?.type],
        );
    return (0, b.pH)(L?.party?.id) || S.id === d.HT.id
        ? (0, i.jsx)(I.A, {
              application: S,
              currentUserPresenceActivity: R,
              hideParty: T,
              message: g,
              onView: y,
              partyStatusElement: O,
              presenceActivity: L,
              guildId: r.guild_id,
          })
        : g.activity?.type === v.xL.STREAM_REQUEST
          ? (0, i.jsx)(o.A, { analyticsLocations: t, application: S, channel: r, currentUserId: j, message: g })
          : (0, i.jsx)(E.A, {
                analyticsLocations: t,
                application: S,
                channel: r,
                currentUserId: j,
                currentUserPresenceActivity: R,
                hideParty: T,
                message: g,
                onView: y,
                partyStatusElement: O,
                presenceActivity: L,
            });
}
