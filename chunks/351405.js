n.d(t, { P: () => S }), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(311907),
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
    I = n(536189),
    E = n(652215),
    v = n(272984),
    b = n(71747);
function T(e) {
    let { partyMembers: t, partySize: n, maxPartySize: a, guildId: r, activityActionType: s } = e,
        o = Math.max(n, t.length),
        d = (0, g.SJ)({ maxPartySize: a, partySize: o, activityActionType: s }),
        c = [...t];
    for (; c.length < n && c.length < 8; ) c.push(f.mt);
    for (; c.length < a && c.length < 8; ) c.push(null);
    return (0, i.jsxs)("div", {
        className: b.UF,
        children: [
            c.length > 0 &&
                (0, i.jsx)(f.Ay, {
                    guildId: r,
                    users: c,
                    max: a > 0 ? Math.min(a, 8) : 8,
                    size: f.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, i.jsx)(l.Text, { variant: "text-xs/medium", color: "none", children: d }),
        ],
    });
}
function S(e) {
    let { analyticsLocations: t, app: n, channel: l, message: g, hideParty: b, onView: S } = e,
        y = (0, s.b)(n),
        N = (0, r.bG)([c.default], () => c.default.getId()),
        j = (0, r.bG)([m.A], () => {
            if (null == g.application) return m.A.findActivity(g.author.id, (e) => e.type === E.$pd.LISTENING);
            {
                let e = g.author.id;
                return (
                    (0, A.v)(g) && (e = e === N && l.isPrivate() ? l.getRecipientId() : N),
                    m.A.getApplicationActivity(e, g.application.id)
                );
            }
        }, [g, l, N]),
        L = (0, r.bG)([_.A, h.A], () => _.A.getApplicationActivity(y.id) ?? h.A.getApplicationActivity(y.id, !0), [
            y.id,
        ]),
        R = (0, r.yK)([u.A], () => (null == j || null == j.party ? [] : Array.from(u.A.getParty(j.party.id) ?? [])), [
            j,
        ]),
        { partySize: P, maxPartySize: w } = (0, x._)(j),
        D = a.useMemo(
            () =>
                R.map((e) => {
                    let t = p.default.getUser(e);
                    return null != t ? t : f.mt;
                }),
            [R],
        ),
        M = a.useMemo(
            () =>
                (0, i.jsx)(T, {
                    partyMembers: D,
                    partySize: P,
                    maxPartySize: w,
                    guildId: l.guild_id,
                    activityActionType: g.activity?.type,
                }),
            [D, P, w, l.guild_id, g.activity?.type],
        );
    return (0, v.pH)(j?.party?.id) || y.id === d.HT.id
        ? (0, i.jsx)(I.A, {
              application: y,
              currentUserPresenceActivity: L,
              hideParty: b,
              message: g,
              onView: S,
              partyStatusElement: M,
              presenceActivity: j,
              guildId: l.guild_id,
          })
        : g.activity?.type === E.xL.STREAM_REQUEST
          ? (0, i.jsx)(o.A, { analyticsLocations: t, application: y, channel: l, currentUserId: N, message: g })
          : (0, i.jsx)(C.A, {
                analyticsLocations: t,
                application: y,
                channel: l,
                currentUserId: N,
                currentUserPresenceActivity: L,
                hideParty: b,
                message: g,
                onView: S,
                partyStatusElement: M,
                presenceActivity: j,
            });
}
