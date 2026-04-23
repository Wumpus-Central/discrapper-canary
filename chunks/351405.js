n.d(t, { P: () => y }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(834730),
    r = n(138175),
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
    f = n(850670),
    x = n(125017),
    C = n(104171),
    E = n(13403),
    I = n(536189),
    v = n(652215),
    b = n(272984),
    T = n(193018);
function S(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: a, activityActionType: r } = e,
        o = Math.max(n, t.length),
        d = (0, g.SJ)({ maxPartySize: l, partySize: o, activityActionType: r }),
        c = [...t];
    for (; c.length < n && c.length < 8; ) c.push(C.mt);
    for (; c.length < l && c.length < 8; ) c.push(null);
    return (0, i.jsxs)("div", {
        className: T.UF,
        children: [
            c.length > 0 &&
                (0, i.jsx)(C.Ay, {
                    guildId: a,
                    users: c,
                    max: l > 0 ? Math.min(l, 8) : 8,
                    size: C.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, i.jsx)(s.E, { variant: "text-xs/medium", color: "none", children: d }),
        ],
    });
}
function y(e) {
    let { analyticsLocations: t, app: n, channel: s, message: g, hideParty: T, onView: y } = e,
        N = (0, r.b)(n),
        j = (0, a.bG)([c.default], () => c.default.getId()),
        L = (0, a.bG)([_.A], () => {
            if (null == g.application) return _.A.findActivity(g.author.id, (e) => e.type === v.$pd.LISTENING);
            {
                let e = g.author.id;
                return (
                    (0, f.v)(g) && (e = e === j && s.isPrivate() ? s.getRecipientId() : j),
                    _.A.getApplicationActivity(e, g.application.id)
                );
            }
        }, [g, s, j]),
        R = (0, a.bG)([m.A, h.A], () => (0, A.A)(m.A, h.A, N.id), [N.id]),
        P = (0, a.yK)([u.A], () => (null == L || null == L.party ? [] : Array.from(u.A.getParty(L.party.id) ?? [])), [
            L,
        ]),
        { partySize: w, maxPartySize: D } = (0, x._)(L),
        k = l.useMemo(
            () =>
                P.map((e) => {
                    let t = p.default.getUser(e);
                    return null != t ? t : C.mt;
                }),
            [P],
        ),
        O = l.useMemo(
            () =>
                (0, i.jsx)(S, {
                    partyMembers: k,
                    partySize: w,
                    maxPartySize: D,
                    guildId: s.guild_id,
                    activityActionType: g.activity?.type,
                }),
            [k, w, D, s.guild_id, g.activity?.type],
        );
    return (0, b.pH)(L?.party?.id) || N.id === d.HT.id
        ? (0, i.jsx)(I.A, {
              application: N,
              currentUserPresenceActivity: R,
              hideParty: T,
              message: g,
              onView: y,
              partyStatusElement: O,
              presenceActivity: L,
              guildId: s.guild_id,
          })
        : g.activity?.type === v.xL.STREAM_REQUEST
          ? (0, i.jsx)(o.A, { analyticsLocations: t, application: N, channel: s, currentUserId: j, message: g })
          : (0, i.jsx)(E.A, {
                analyticsLocations: t,
                application: N,
                channel: s,
                currentUserId: j,
                currentUserPresenceActivity: R,
                hideParty: T,
                message: g,
                onView: y,
                partyStatusElement: O,
                presenceActivity: L,
            });
}
