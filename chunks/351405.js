n.d(t, { P: () => S }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(138175),
    o = n(99072),
    d = n(443795),
    c = n(961350),
    u = n(629016),
    m = n(375492),
    _ = n(290863),
    h = n(461213),
    p = n(287809),
    g = n(456060),
    A = n(850670),
    f = n(125017),
    x = n(104171),
    E = n(13403),
    C = n(536189),
    I = n(652215),
    T = n(272984),
    v = n(62323);
function N(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: a, activityActionType: s } = e,
        o = Math.max(n, t.length),
        d = (0, g.SJ)({ maxPartySize: l, partySize: o, activityActionType: s }),
        c = [...t];
    for (; c.length < n && c.length < 8; ) c.push(x.mt);
    for (; c.length < l && c.length < 8; ) c.push(null);
    return (0, i.jsxs)("div", {
        className: v.UF,
        children: [
            c.length > 0 &&
                (0, i.jsx)(x.Ay, {
                    guildId: a,
                    users: c,
                    max: l > 0 ? Math.min(l, 8) : 8,
                    size: x.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, i.jsx)(r.Text, { variant: "text-xs/medium", color: "none", children: d }),
        ],
    });
}
function S(e) {
    let { analyticsLocations: t, app: n, channel: r, message: g, hideParty: v, onView: S } = e,
        b = (0, s.b)(n),
        j = (0, a.bG)([c.default], () => c.default.getId()),
        y = (0, a.bG)([_.A], () => {
            if (null == g.application) return _.A.findActivity(g.author.id, (e) => e.type === I.$pd.LISTENING);
            {
                let e = g.author.id;
                return (
                    (0, A.v)(g) && (e = e === j && r.isPrivate() ? r.getRecipientId() : j),
                    _.A.getApplicationActivity(e, g.application.id)
                );
            }
        }, [g, r, j]),
        R = (0, a.bG)([m.A, h.A], () => m.A.getApplicationActivity(b.id) ?? h.A.getApplicationActivity(b.id, !0), [
            b.id,
        ]),
        L = (0, a.yK)([u.A], () => (null == y || null == y.party ? [] : Array.from(u.A.getParty(y.party.id) ?? [])), [
            y,
        ]),
        { partySize: M, maxPartySize: O } = (0, f._)(y),
        D = l.useMemo(
            () =>
                L.map((e) => {
                    let t = p.default.getUser(e);
                    return null != t ? t : x.mt;
                }),
            [L],
        ),
        P = l.useMemo(
            () =>
                (0, i.jsx)(N, {
                    partyMembers: D,
                    partySize: M,
                    maxPartySize: O,
                    guildId: r.guild_id,
                    activityActionType: g.activity?.type,
                }),
            [D, M, O, r.guild_id, g.activity?.type],
        );
    return (0, T.pH)(y?.party?.id) || b.id === d.HT.id
        ? (0, i.jsx)(C.A, {
              application: b,
              currentUserPresenceActivity: R,
              hideParty: v,
              message: g,
              onView: S,
              partyStatusElement: P,
              presenceActivity: y,
              guildId: r.guild_id,
          })
        : g.activity?.type === I.xL.STREAM_REQUEST
          ? (0, i.jsx)(o.A, { analyticsLocations: t, application: b, channel: r, currentUserId: j, message: g })
          : (0, i.jsx)(E.A, {
                analyticsLocations: t,
                application: b,
                channel: r,
                currentUserId: j,
                currentUserPresenceActivity: R,
                hideParty: v,
                message: g,
                onView: S,
                partyStatusElement: P,
                presenceActivity: y,
            });
}
