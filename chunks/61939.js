n.d(t, { x: () => d });
var r = n(945810),
    l = n(71393),
    i = n(222823),
    a = n(287809),
    s = n(954571),
    o = n(661191),
    c = n(652215);
let u = (0, r.mj)({
    name: "2026-01-red-dot-navigate-to-mentions",
    kind: "user",
    defaultConfig: { enableTracking: !1 },
    variations: { 1: { enableTracking: !0 } },
});
function d(e, t) {
    if (!c.kvI.GUILD_TEXTUAL.has(e.type) || !t.ready) return;
    let n = a.default.getCurrentUser();
    if (null == n) return;
    let r = i.Ay.getMentionCount(e.id);
    if (r <= 0) return;
    let { enableTracking: d } = u.getConfig({ location: "trackMentionsOnInitialUnreadChannelLoad" });
    if (!d) return;
    let f = i.Ay.ackMessageId(e.id),
        p = null != f;
    if (null == f) {
        let t = l.A.getGuild(e.guild_id);
        null != t && null != t.joinedAt && (f = o.default.fromTimestamp(t.joinedAt.getTime()));
    }
    let h = 0;
    t.forAll((e) => {
        o.default.compare(e.id, f) > 0 && (0, i.Wm)(e, n) && h++;
    }),
        s.default.track(c.HAw.CHANNEL_WITH_UNREAD_MENTIONS_LOADED, {
            channel_id: e.id,
            channel_type: e.type,
            total_badge_count: r,
            loaded_mention_count: h,
            has_previous_ack: p,
        });
}
