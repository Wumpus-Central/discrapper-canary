n.d(t, { Z: () => c }), n(49124), n(539854);
var r = n(473749),
    i = n(442837),
    l = n(948053),
    a = n(144725),
    s = n(797394);
function o(e, t, n) {
    if (t.type === s.Ni.MESSAGE)
        return t.message.id === t.message.channel_id && null != t.threadChannel
            ? {
                  id: e.id,
                  timestamp: Date.now(),
                  channelType: e.data.channel_type,
                  data: {
                      kind: "forumThread",
                      message: t.message,
                      threadChannel: t.threadChannel,
                  },
                  score: e.score,
                  debugScore: JSON.stringify(e.score_components),
                  unread: n,
              }
            : {
                  id: e.id,
                  timestamp: Date.now(),
                  channelType: e.data.channel_type,
                  data: {
                      kind: "message",
                      message: t.message,
                      mentioned: e.data.has_mention,
                      messageContext: e.data.message_context,
                  },
                  score: e.score,
                  debugScore: JSON.stringify(e.score_components),
                  unread: n,
              };
    if (t.type === s.Ni.ACTIVITY || t.type === s.Ni.CUSTOM_STATUS)
        return {
            id: e.id,
            timestamp: Date.now(),
            data: {
                kind: "contentInventory",
                content: t.activity,
            },
            score: e.score,
            debugScore: JSON.stringify(e.score_components),
            unread: n,
        };
    if (t.type === s.Ni.GUILD_EVENT)
        return {
            id: e.id,
            timestamp: Date.now(),
            data: {
                kind: "guildEvent",
                eventId: t.event_id,
            },
            score: e.score,
            debugScore: JSON.stringify(e.score_components),
            unread: n,
        };
    if (t.type === s.Ni.RECOMMENDED_GUILDS)
        return {
            id: e.id,
            timestamp: Date.now(),
            data: { kind: "recommendedGuilds" },
            score: e.score,
            debugScore: JSON.stringify(e.score_components),
            unread: n,
        };
    if (t.type === s.Ni.GENERATED_CANDIDATE)
        return {
            id: e.id,
            timestamp: Date.now(),
            data: {
                kind: "generatedCandidate",
                item: t.candidate,
            },
            score: e.score,
            debugScore: JSON.stringify(e.score_components),
            unread: n,
        };
    return null;
}
function c() {
    var e, t;
    let n = (0, i.e7)([a.Z], () => a.Z.getUnreadDisplayItems()),
        c = (0, i.e7)([a.Z], () => a.Z.getReadDisplayItems()),
        u = (0, i.e7)([a.Z], () => a.Z.getNextIndexToHydrate()),
        d = (0, i.cj)([a.Z], () => a.Z.getHydratedItems()),
        p = (0, i.e7)([a.Z], () => a.Z.getMissingItems());
    r.useEffect(() => {
        let e = Date.now() + c.length;
        l.Z.ackGravityItems(
            c.map(
                (t) => ({
                    id: t.id,
                    timestamp: e--,
                }),
                !0,
            ),
        );
    }, [c]);
    let f = [],
        g = [],
        h = 0;
    for (let t = 0; t < n.length && !(h >= u); t++) {
        let r = n[t];
        if ((h++, p[r.id])) continue;
        let i = d[r.id];
        if (
            (null == i &&
                r.type === s.Ni.MESSAGE &&
                (null == (e = r.data.message_context) ? void 0 : e.reference_message_id) != null &&
                (i = d[r.data.message_id]),
            null != i)
        ) {
            let e = o(r, i, !0);
            null != e && f.push(e);
        }
    }
    for (let e = 0; e < c.length && !(h >= u); e++) {
        let n = c[e];
        if ((h++, p[n.id])) continue;
        let r = d[n.id];
        if (
            (null == r &&
                n.type === s.Ni.MESSAGE &&
                (null == (t = n.data.message_context) ? void 0 : t.reference_message_id) != null &&
                (r = d[n.data.message_id]),
            null != r)
        ) {
            let e = o(n, r, !1);
            null != e && g.push(e);
        }
    }
    return {
        unreadItems: f,
        readItems: g,
        allUnreadItemsHydrated: u >= n.length,
    };
}
