n.d(t, { i: () => u });
var i = n(945810),
    l = n(71393),
    a = n(222823),
    s = n(287809),
    r = n(954571),
    o = n(661191),
    c = n(652215);
let d = (0, i.mj)({
    name: "2026-01-red-dot-navigate-to-mentions",
    kind: "user",
    defaultConfig: { enableTracking: !1, enableNavigation: !1 },
    variations: { 1: { enableTracking: !0, enableNavigation: !1 }, 2: { enableTracking: !0, enableNavigation: !0 } },
});
function u(e, t) {
    if (!c.kvI.GUILD_TEXTUAL.has(e.type) || !t.ready) return null;
    let n = s.default.getCurrentUser();
    if (null == n) return null;
    let i = a.Ay.getMentionCount(e.id);
    if (i <= 0) return null;
    let { enableTracking: u, enableNavigation: h } = d.getConfig({
        location: "trackMentionsOnInitialUnreadChannelLoad",
    });
    if (!u && !h) return null;
    let m = a.Ay.ackMessageId(e.id),
        A = null != m;
    if (null == m) {
        let t = l.A.getGuild(e.guild_id);
        null != t && null != t.joinedAt && (m = o.default.fromTimestamp(t.joinedAt.getTime()));
    }
    let p = 0,
        g = null;
    return (
        t.forAll((e) => {
            o.default.compare(e.id, m) > 0 &&
                (0, a.Wm)(e, n) &&
                (p++, h && (null == g || 0 > o.default.compare(e.id, g)) && (g = e.id));
        }),
        u &&
            r.default.track(c.HAw.CHANNEL_WITH_UNREAD_MENTIONS_LOADED, {
                channel_id: e.id,
                channel_type: e.type,
                total_badge_count: i,
                loaded_mention_count: p,
                has_previous_ack: A,
            }),
        g
    );
}
