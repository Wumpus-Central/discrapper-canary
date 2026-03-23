n.d(t, { P: () => y }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(397927),
    s = n(138175),
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
    b = n(609653);
function T(e) {
    let { partyMembers: t, partySize: n, maxPartySize: r, guildId: a, activityActionType: s } = e,
        o = Math.max(n, t.length),
        d = (0, g.SJ)({ maxPartySize: r, partySize: o, activityActionType: s }),
        c = [...t];
    for (; c.length < n && c.length < 8; ) c.push(f.mt);
    for (; c.length < r && c.length < 8; ) c.push(null);
    return (0, i.jsxs)("div", {
        className: b.UF,
        children: [
            c.length > 0 &&
                (0, i.jsx)(f.Ay, {
                    guildId: a,
                    users: c,
                    max: r > 0 ? Math.min(r, 8) : 8,
                    size: f.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, i.jsx)(l.Text, { variant: "text-xs/medium", color: "none", children: d }),
        ],
    });
}
function y(e) {
    let { analyticsLocations: t, app: n, channel: l, message: g, hideParty: b, onView: y } = e,
        S = (0, s.b)(n),
        N = (0, a.bG)([c.default], () => c.default.getId()),
        j = (0, a.bG)([m.A], () => {
            if (null == g.application) return m.A.findActivity(g.author.id, (e) => e.type === I.$pd.LISTENING);
            {
                let e = g.author.id;
                return (
                    (0, A.v)(g) && (e = e === N && l.isPrivate() ? l.getRecipientId() : N),
                    m.A.getApplicationActivity(e, g.application.id)
                );
            }
        }, [g, l, N]),
        L = (0, a.bG)([_.A, h.A], () => _.A.getApplicationActivity(S.id) ?? h.A.getApplicationActivity(S.id, !0), [
            S.id,
        ]),
        R = (0, a.yK)([u.A], () => (null == j || null == j.party ? [] : Array.from(u.A.getParty(j.party.id) ?? [])), [
            j,
        ]),
        { partySize: P, maxPartySize: M } = (0, x._)(j),
        w = r.useMemo(
            () =>
                R.map((e) => {
                    let t = p.default.getUser(e);
                    return null != t ? t : f.mt;
                }),
            [R],
        ),
        D = r.useMemo(
            () =>
                (0, i.jsx)(T, {
                    partyMembers: w,
                    partySize: P,
                    maxPartySize: M,
                    guildId: l.guild_id,
                    activityActionType: g.activity?.type,
                }),
            [w, P, M, l.guild_id, g.activity?.type],
        );
    return (0, v.pH)(j?.party?.id) || S.id === d.HT.id
        ? (0, i.jsx)(E.A, {
              application: S,
              currentUserPresenceActivity: L,
              hideParty: b,
              message: g,
              onView: y,
              partyStatusElement: D,
              presenceActivity: j,
              guildId: l.guild_id,
          })
        : g.activity?.type === I.xL.STREAM_REQUEST
          ? (0, i.jsx)(o.A, { analyticsLocations: t, application: S, channel: l, currentUserId: N, message: g })
          : (0, i.jsx)(C.A, {
                analyticsLocations: t,
                application: S,
                channel: l,
                currentUserId: N,
                currentUserPresenceActivity: L,
                hideParty: b,
                message: g,
                onView: y,
                partyStatusElement: D,
                presenceActivity: j,
            });
}
