n.d(t, { A: () => d }), n(321073);
var i = n(64700),
    a = n(311907),
    l = n(4106),
    r = n(883344),
    s = n(596720);
function o(e, t, n) {
    return t.type === s.Mm.MESSAGE
        ? t.message.id === t.message.channel_id && null != t.threadChannel
            ? {
                  id: e.id,
                  timestamp: Date.now(),
                  channelType: e.data.channel_type,
                  data: { kind: "forumThread", message: t.message, threadChannel: t.threadChannel },
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
              }
        : t.type === s.Mm.ACTIVITY || t.type === s.Mm.CUSTOM_STATUS
          ? {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "contentInventory", content: t.activity },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            }
          : t.type === s.Mm.GUILD_EVENT
            ? {
                  id: e.id,
                  timestamp: Date.now(),
                  data: { kind: "guildEvent", eventId: t.event_id },
                  score: e.score,
                  debugScore: JSON.stringify(e.score_components),
                  unread: n,
              }
            : t.type === s.Mm.RECOMMENDED_GUILDS
              ? {
                    id: e.id,
                    timestamp: Date.now(),
                    data: { kind: "recommendedGuilds" },
                    score: e.score,
                    debugScore: JSON.stringify(e.score_components),
                    unread: n,
                }
              : null;
}
function d() {
    let e = (0, a.bG)([r.A], () => r.A.getUnreadDisplayItems()),
        t = (0, a.bG)([r.A], () => r.A.getReadDisplayItems()),
        n = (0, a.bG)([r.A], () => r.A.getNextIndexToHydrate()),
        d = (0, a.cf)([r.A], () => r.A.getHydratedItems()),
        c = (0, a.bG)([r.A], () => r.A.getMissingItems());
    i.useEffect(() => {
        let e = Date.now() + t.length;
        l.A.ackGravityItems(t.map((t) => ({ id: t.id, timestamp: e-- }), !0));
    }, [t]);
    let u = [],
        A = [],
        h = 0;
    for (let t = 0; t < e.length && !(h >= n); t++) {
        let n = e[t];
        if ((h++, c[n.id])) continue;
        let i = d[n.id];
        if (
            (null == i &&
                n.type === s.Mm.MESSAGE &&
                n.data.message_context?.reference_message_id != null &&
                (i = d[n.data.message_id]),
            null != i)
        ) {
            let e = o(n, i, !0);
            null != e && u.push(e);
        }
    }
    for (let e = 0; e < t.length && !(h >= n); e++) {
        let n = t[e];
        if ((h++, c[n.id])) continue;
        let i = d[n.id];
        if (
            (null == i &&
                n.type === s.Mm.MESSAGE &&
                n.data.message_context?.reference_message_id != null &&
                (i = d[n.data.message_id]),
            null != i)
        ) {
            let e = o(n, i, !1);
            null != e && A.push(e);
        }
    }
    return { unreadItems: u, readItems: A, allUnreadItemsHydrated: n >= e.length };
}
