n.d(t, {
    i: () => d,
});
var l = n(945810),
    r = n(71393),
    i = n(222823),
    a = n(287809),
    s = n(954571),
    o = n(661191),
    c = n(652215);
let u = (0, l.mj)({
    name: "2026-01-red-dot-navigate-to-mentions",
    kind: "user",
    defaultConfig: {
        enableTracking: !1,
        enableNavigation: !1,
    },
    variations: {
        1: {
            enableTracking: !0,
            enableNavigation: !1,
        },
        2: {
            enableTracking: !0,
            enableNavigation: !0,
        },
    },
});

function d(e, t) {
    if (!c.kvI.GUILD_TEXTUAL.has(e.type) || !t.ready) return null;
    let n = a.default.getCurrentUser();
    if (null == n) return null;
    let l = i.Ay.getMentionCount(e.id);
    if (l <= 0) return null;
    let { enableTracking: d, enableNavigation: h } = u.getConfig({
        location: "trackMentionsOnInitialUnreadChannelLoad",
    });
    if (!d && !h) return null;
    let p = i.Ay.ackMessageId(e.id),
        f = null != p;
    if (null == p) {
        let t = r.A.getGuild(e.guild_id);
        null != t && null != t.joinedAt && (p = o.default.fromTimestamp(t.joinedAt.getTime()));
    }
    let m = 0,
        g = null;
    return (
        t.forAll((e) => {
            o.default.compare(e.id, p) > 0 &&
                (0, i.Wm)(e, n) &&
                (m++, h && (null == g || 0 > o.default.compare(e.id, g)) && (g = e.id));
        }),
        d &&
            s.default.track(c.HAw.CHANNEL_WITH_UNREAD_MENTIONS_LOADED, {
                channel_id: e.id,
                channel_type: e.type,
                total_badge_count: l,
                loaded_mention_count: m,
                has_previous_ack: f,
            }),
        g
    );
}
