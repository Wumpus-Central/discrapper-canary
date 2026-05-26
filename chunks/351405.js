n.d(t, { P0: () => y, em: () => S }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(834730),
    a = n(138175),
    o = n(99072),
    d = n(666176),
    c = n(495544),
    u = n(629016),
    m = n(480595),
    h = n(290863),
    g = n(461213),
    p = n(287809),
    A = n(456060),
    x = n(454292),
    f = n(850670),
    E = n(125017),
    C = n(104171),
    I = n(619405),
    v = n(477403),
    _ = n(652215),
    j = n(272984),
    N = n(193018);
function T(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: s, activityActionType: a } = e,
        o = Math.max(n, t.length),
        d = (0, A.SJ)({ maxPartySize: l, partySize: o, activityActionType: a }),
        c = [...t];
    for (; c.length < n && c.length < 8; ) c.push(C.mt);
    for (; c.length < l && c.length < 8; ) c.push(null);
    return (0, i.jsxs)("div", {
        className: N.UF,
        children: [
            c.length > 0 &&
                (0, i.jsx)(C.Ay, {
                    guildId: s,
                    users: c,
                    max: l > 0 ? Math.min(l, 8) : 8,
                    size: C.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, i.jsx)(r.E, { variant: "text-xs/medium", color: "none", children: d }),
        ],
    });
}
function S(e) {
    let { presenceActivity: t, channel: n, activityActionType: r } = e,
        a = (0, s.yK)([u.A], () => (null == t || null == t.party ? [] : Array.from(u.A.getParty(t.party.id) ?? [])), [
            t,
        ]),
        { partySize: o, maxPartySize: d } = (0, E._)(t),
        c = l.useMemo(
            () =>
                a.map((e) => {
                    let t = p.default.getUser(e);
                    return null != t ? t : C.mt;
                }),
            [a],
        );
    return l.useMemo(
        () =>
            (0, i.jsx)(T, {
                partyMembers: c,
                partySize: o,
                maxPartySize: d,
                guildId: n.guild_id,
                activityActionType: r,
            }),
        [c, o, d, n.guild_id, r],
    );
}
function y(e) {
    let { analyticsLocations: t, app: n, channel: l, message: r, hideParty: u, onView: p } = e,
        A = (0, a.b)(n),
        E = (0, s.bG)([c.default], () => c.default.getId()),
        C = (0, s.bG)([h.A], () => {
            if (null == r.application) return h.A.findActivity(r.author.id, (e) => e.type === _.$pd.LISTENING);
            {
                let e = r.author.id;
                return (
                    (0, f.v)(r) && (e = e === E && l.isPrivate() ? l.getRecipientId() : E),
                    h.A.getApplicationActivity(e, r.application.id)
                );
            }
        }, [r, l, E]),
        N = (0, s.bG)([m.A, g.A], () => (0, x.A)(m.A, g.A, A.id), [A.id]),
        T = S({ presenceActivity: C, channel: l, activityActionType: r.activity?.type });
    return (0, j.pH)(C?.party?.id) || A.id === d.HT.id
        ? (0, i.jsx)(v.A, {
              application: A,
              currentUserPresenceActivity: N,
              hideParty: u,
              message: r,
              onView: p,
              partyStatusElement: T,
              presenceActivity: C,
              guildId: l.guild_id,
          })
        : r.activity?.type === _.xL.STREAM_REQUEST
          ? (0, i.jsx)(o.A, { analyticsLocations: t, application: A, channel: l, currentUserId: E, message: r })
          : (0, i.jsx)(I.A, {
                analyticsLocations: t,
                application: A,
                channel: l,
                currentUserId: E,
                currentUserPresenceActivity: N,
                hideParty: u,
                message: r,
                onView: p,
                partyStatusElement: T,
                presenceActivity: C,
            });
}
