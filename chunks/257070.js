n.d(t, { K: () => d });
var r = n(427164),
    i = n(430824),
    l = n(306680),
    a = n(594174),
    o = n(626135),
    s = n(709054),
    c = n(981631);
let u = (0, r.le)({
    name: "2026-01-red-dot-navigate-to-mentions",
    kind: "user",
    defaultConfig: { enableTracking: !1 },
    variations: { 1: { enableTracking: !0 } },
});
function d(e, t) {
    if (!c.TPd.GUILD_TEXTUAL.has(e.type) || !t.ready) return;
    let n = a.default.getCurrentUser();
    if (null == n) return;
    let r = l.ZP.getMentionCount(e.id);
    if (r <= 0) return;
    let { enableTracking: d } = u.getConfig({ location: "trackMentionsOnInitialUnreadChannelLoad" });
    if (!d) return;
    let p = l.ZP.ackMessageId(e.id),
        f = null != p;
    if (null == p) {
        let t = i.Z.getGuild(e.guild_id);
        null != t && null != t.joinedAt && (p = s.default.fromTimestamp(t.joinedAt.getTime()));
    }
    let h = 0;
    t.forAll((e) => {
        s.default.compare(e.id, p) > 0 && (0, l.Ex)(e, n) && h++;
    }),
        o.default.track(c.rMx.CHANNEL_WITH_UNREAD_MENTIONS_LOADED, {
            channel_id: e.id,
            channel_type: e.type,
            total_badge_count: r,
            loaded_mention_count: h,
            has_previous_ack: f,
        });
}
