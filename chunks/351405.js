n.d(t, { P: () => S }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(397927),
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
    b = n(272984),
    T = n(62323);
function v(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: r, activityActionType: s } = e,
        o = Math.max(n, t.length),
        d = (0, g.SJ)({ maxPartySize: l, partySize: o, activityActionType: s }),
        c = [...t];
    for (; c.length < n && c.length < 8; ) c.push(f.mt);
    for (; c.length < l && c.length < 8; ) c.push(null);
    return (0, i.jsxs)("div", {
        className: T.UF,
        children: [
            c.length > 0 &&
                (0, i.jsx)(f.Ay, {
                    guildId: r,
                    users: c,
                    max: l > 0 ? Math.min(l, 8) : 8,
                    size: f.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, i.jsx)(a.Text, { variant: "text-xs/medium", color: "none", children: d }),
        ],
    });
}
function S(e) {
    let { analyticsLocations: t, app: n, channel: a, message: g, hideParty: T, onView: S } = e,
        y = (0, s.b)(n),
        N = (0, r.bG)([c.default], () => c.default.getId()),
        j = (0, r.bG)([m.A], () => {
            if (null == g.application) return m.A.findActivity(g.author.id, (e) => e.type === I.$pd.LISTENING);
            {
                let e = g.author.id;
                return (
                    (0, A.v)(g) && (e = e === N && a.isPrivate() ? a.getRecipientId() : N),
                    m.A.getApplicationActivity(e, g.application.id)
                );
            }
        }, [g, a, N]),
        L = (0, r.bG)([_.A, h.A], () => _.A.getApplicationActivity(y.id) ?? h.A.getApplicationActivity(y.id, !0), [
            y.id,
        ]),
        R = (0, r.yK)([u.A], () => (null == j || null == j.party ? [] : Array.from(u.A.getParty(j.party.id) ?? [])), [
            j,
        ]),
        { partySize: P, maxPartySize: M } = (0, x._)(j),
        w = l.useMemo(
            () =>
                R.map((e) => {
                    let t = p.default.getUser(e);
                    return null != t ? t : f.mt;
                }),
            [R],
        ),
        D = l.useMemo(
            () =>
                (0, i.jsx)(v, {
                    partyMembers: w,
                    partySize: P,
                    maxPartySize: M,
                    guildId: a.guild_id,
                    activityActionType: g.activity?.type,
                }),
            [w, P, M, a.guild_id, g.activity?.type],
        );
    return (0, b.pH)(j?.party?.id) || y.id === d.HT.id
        ? (0, i.jsx)(E.A, {
              application: y,
              currentUserPresenceActivity: L,
              hideParty: T,
              message: g,
              onView: S,
              partyStatusElement: D,
              presenceActivity: j,
              guildId: a.guild_id,
          })
        : g.activity?.type === I.xL.STREAM_REQUEST
          ? (0, i.jsx)(o.A, { analyticsLocations: t, application: y, channel: a, currentUserId: N, message: g })
          : (0, i.jsx)(C.A, {
                analyticsLocations: t,
                application: y,
                channel: a,
                currentUserId: N,
                currentUserPresenceActivity: L,
                hideParty: T,
                message: g,
                onView: S,
                partyStatusElement: D,
                presenceActivity: j,
            });
}
