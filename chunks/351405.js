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
    _ = n(375492),
    m = n(290863),
    h = n(461213),
    p = n(287809),
    g = n(456060),
    A = n(850670),
    x = n(125017),
    f = n(104171),
    C = n(13403),
    E = n(536189),
    I = n(652215),
    v = n(272984),
    b = n(772234);
function T(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: s, activityActionType: a } = e,
        o = Math.max(n, t.length),
        d = (0, g.SJ)({ maxPartySize: l, partySize: o, activityActionType: a }),
        c = [...t];
    for (; c.length < n && c.length < 8; ) c.push(f.mt);
    for (; c.length < l && c.length < 8; ) c.push(null);
    return (0, i.jsxs)("div", {
        className: b.UF,
        children: [
            c.length > 0 &&
                (0, i.jsx)(f.Ay, {
                    guildId: s,
                    users: c,
                    max: l > 0 ? Math.min(l, 8) : 8,
                    size: f.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, i.jsx)(r.Text, { variant: "text-xs/medium", color: "none", children: d }),
        ],
    });
}
function y(e) {
    let { analyticsLocations: t, app: n, channel: r, message: g, hideParty: b, onView: y } = e,
        N = (0, a.b)(n),
        S = (0, s.bG)([c.default], () => c.default.getId()),
        j = (0, s.bG)([m.A], () => {
            if (null == g.application) return m.A.findActivity(g.author.id, (e) => e.type === I.$pd.LISTENING);
            {
                let e = g.author.id;
                return (
                    (0, A.v)(g) && (e = e === S && r.isPrivate() ? r.getRecipientId() : S),
                    m.A.getApplicationActivity(e, g.application.id)
                );
            }
        }, [g, r, S]),
        L = (0, s.bG)([_.A, h.A], () => _.A.getApplicationActivity(N.id) ?? h.A.getApplicationActivity(N.id, !0), [
            N.id,
        ]),
        R = (0, s.yK)([u.A], () => (null == j || null == j.party ? [] : Array.from(u.A.getParty(j.party.id) ?? [])), [
            j,
        ]),
        { partySize: P, maxPartySize: D } = (0, x._)(j),
        M = l.useMemo(
            () =>
                R.map((e) => {
                    let t = p.default.getUser(e);
                    return null != t ? t : f.mt;
                }),
            [R],
        ),
        w = l.useMemo(
            () =>
                (0, i.jsx)(T, {
                    partyMembers: M,
                    partySize: P,
                    maxPartySize: D,
                    guildId: r.guild_id,
                    activityActionType: g.activity?.type,
                }),
            [M, P, D, r.guild_id, g.activity?.type],
        );
    return (0, v.pH)(j?.party?.id) || N.id === d.HT.id
        ? (0, i.jsx)(E.A, {
              application: N,
              currentUserPresenceActivity: L,
              hideParty: b,
              message: g,
              onView: y,
              partyStatusElement: w,
              presenceActivity: j,
              guildId: r.guild_id,
          })
        : g.activity?.type === I.xL.STREAM_REQUEST
          ? (0, i.jsx)(o.A, { analyticsLocations: t, application: N, channel: r, currentUserId: S, message: g })
          : (0, i.jsx)(C.A, {
                analyticsLocations: t,
                application: N,
                channel: r,
                currentUserId: S,
                currentUserPresenceActivity: L,
                hideParty: b,
                message: g,
                onView: y,
                partyStatusElement: w,
                presenceActivity: j,
            });
}
