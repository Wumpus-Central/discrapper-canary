n.d(t, { A: () => o }), n(321073);
var a = n(64700),
    i = n(311907),
    s = n(4106),
    l = n(883344),
    r = n(596720);
function d(e, t, n) {
    return t.type === r.Mm.MESSAGE
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
        : t.type === r.Mm.ACTIVITY || t.type === r.Mm.CUSTOM_STATUS
          ? {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "contentInventory", content: t.activity },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            }
          : t.type === r.Mm.GUILD_EVENT
            ? {
                  id: e.id,
                  timestamp: Date.now(),
                  data: { kind: "guildEvent", eventId: t.event_id },
                  score: e.score,
                  debugScore: JSON.stringify(e.score_components),
                  unread: n,
              }
            : t.type === r.Mm.RECOMMENDED_GUILDS
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
function o() {
    let e = (0, i.bG)([l.A], () => l.A.getUnreadDisplayItems()),
        t = (0, i.bG)([l.A], () => l.A.getReadDisplayItems()),
        n = (0, i.bG)([l.A], () => l.A.getNextIndexToHydrate()),
        o = (0, i.cf)([l.A], () => l.A.getHydratedItems()),
        c = (0, i.bG)([l.A], () => l.A.getMissingItems());
    a.useEffect(() => {
        let e = Date.now() + t.length;
        s.A.ackGravityItems(t.map((t) => ({ id: t.id, timestamp: e-- }), !0));
    }, [t]);
    let u = [],
        m = [],
        h = 0;
    for (let t = 0; t < e.length && !(h >= n); t++) {
        let n = e[t];
        if ((h++, c[n.id])) continue;
        let a = o[n.id];
        if (
            (null == a &&
                n.type === r.Mm.MESSAGE &&
                n.data.message_context?.reference_message_id != null &&
                (a = o[n.data.message_id]),
            null != a)
        ) {
            let e = d(n, a, !0);
            null != e && u.push(e);
        }
    }
    for (let e = 0; e < t.length && !(h >= n); e++) {
        let n = t[e];
        if ((h++, c[n.id])) continue;
        let a = o[n.id];
        if (
            (null == a &&
                n.type === r.Mm.MESSAGE &&
                n.data.message_context?.reference_message_id != null &&
                (a = o[n.data.message_id]),
            null != a)
        ) {
            let e = d(n, a, !1);
            null != e && m.push(e);
        }
    }
    return { unreadItems: u, readItems: m, allUnreadItemsHydrated: n >= e.length };
}
