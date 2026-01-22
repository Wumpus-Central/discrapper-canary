n.d(t, {
    A: () => c,
}),
    n(457529),
    n(321073);
var r = n(64700),
    i = n(311907),
    l = n(4106),
    a = n(883344),
    s = n(596720);

function o(e, t, n) {
    if (t.type === s.Mm.MESSAGE)
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
    if (t.type === s.Mm.ACTIVITY || t.type === s.Mm.CUSTOM_STATUS)
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
    if (t.type === s.Mm.GUILD_EVENT)
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
    if (t.type === s.Mm.RECOMMENDED_GUILDS)
        return {
            id: e.id,
            timestamp: Date.now(),
            data: {
                kind: "recommendedGuilds",
            },
            score: e.score,
            debugScore: JSON.stringify(e.score_components),
            unread: n,
        };
    if (t.type === s.Mm.GENERATED_CANDIDATE)
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
    let n = (0, i.bG)([a.A], () => a.A.getUnreadDisplayItems()),
        c = (0, i.bG)([a.A], () => a.A.getReadDisplayItems()),
        u = (0, i.bG)([a.A], () => a.A.getNextIndexToHydrate()),
        d = (0, i.cf)([a.A], () => a.A.getHydratedItems()),
        p = (0, i.bG)([a.A], () => a.A.getMissingItems());
    r.useEffect(() => {
        let e = Date.now() + c.length;
        l.A.ackGravityItems(
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
        h = [],
        A = 0;
    for (let t = 0; t < n.length && !(A >= u); t++) {
        let r = n[t];
        if ((A++, p[r.id])) continue;
        let i = d[r.id];
        if (
            (null == i &&
                r.type === s.Mm.MESSAGE &&
                (null == (e = r.data.message_context) ? void 0 : e.reference_message_id) != null &&
                (i = d[r.data.message_id]),
            null != i)
        ) {
            let e = o(r, i, !0);
            null != e && f.push(e);
        }
    }
    for (let e = 0; e < c.length && !(A >= u); e++) {
        let n = c[e];
        if ((A++, p[n.id])) continue;
        let r = d[n.id];
        if (
            (null == r &&
                n.type === s.Mm.MESSAGE &&
                (null == (t = n.data.message_context) ? void 0 : t.reference_message_id) != null &&
                (r = d[n.data.message_id]),
            null != r)
        ) {
            let e = o(n, r, !1);
            null != e && h.push(e);
        }
    }
    return {
        unreadItems: f,
        readItems: h,
        allUnreadItemsHydrated: u >= n.length,
    };
}
