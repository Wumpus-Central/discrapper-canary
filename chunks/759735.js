n.d(t, { $L: () => L, au: () => O, cr: () => f, d1: () => m, fO: () => g, io: () => C, kL: () => p });
var i = n(602137),
    a = n(970278),
    r = n(152007),
    s = n(802958),
    l = n(456874),
    o = n(734057),
    d = n(31717),
    c = n(576705),
    _ = n(522602),
    E = n(935208),
    u = n(969043),
    A = n(679804),
    I = n(878317),
    T = n(536437),
    h = n(652215),
    S = n(746080),
    N = n(37411);
function f(e) {
    return T.A.getForumChannelSessionId(e);
}
function p(e) {
    switch (e) {
        case i.T.CREATION_DATE:
            return N.az.CREATION_DATE;
        case i.T.LATEST_ACTIVITY:
            return N.az.LATEST_ACTIVITY;
        default:
            throw Error(`Unexpected sort order ${e}`);
    }
}
function m(e) {
    return _.A.getUploads(e, d.C.FirstThreadMessage).length;
}
function O(e) {
    let t = o.A.getChannel(e);
    if (null == t) return [];
    let n = o.A.getChannel(t.parent_id),
        i = n?.availableTags;
    if (null == n || null == i) return [];
    let a = d.A.getThreadSettings(e)?.appliedTags ?? new Set(),
        r = new Set(i.map((e) => e.id));
    return Array.from(a).filter((e) => r.has(e));
}
function C(e, t) {
    return Object.keys(a.A.getThreadsForParent(e, t)).length;
}
function R(e) {
    let { loaded: t, firstMessage: n } = u.A.getMessage(e);
    return t ? n : null;
}
function g(e) {
    let { channelId: t, sessionId: n } = e,
        i = o.A.getChannel(t);
    return null != i && i.isForumLikeChannel()
        ? {
              forum_channel_has_guidelines: null != i.topic && i.topic.trim().length > 0,
              forum_channel_default_emoji_reaction_id: i.defaultReactionEmoji?.emojiId,
              forum_channel_default_emoji_reaction_name: i.defaultReactionEmoji?.emojiName,
              forum_channel_available_tag_ids: i.availableTags?.map((e) => e.id) ?? [],
              forum_channel_tag_required: i.hasFlag(S.lx.REQUIRE_TAG),
              forum_channel_can_create_post: c.A.can(h.xBc.SEND_MESSAGES, i),
              forum_channel_filter_tag_ids: A.A.getFilterTagIdsAnalytics(),
              forum_channel_sort_order: A.A.getSortOrderAnalytics(i.id),
              forum_channel_session_id: n ?? f(i.id),
              forum_channel_layout: A.A.getLayoutAnalytics(i.id),
              forum_channel_default_sort_order: i.defaultSortOrder,
              forum_channel_tag_setting: A.A.getTagSettingAnalytics(i.id),
              forum_channel_default_layout: i.defaultForumLayout,
              forum_channel_is_moderator_report_channel: i.isModeratorReportChannel(),
          }
        : null;
}
function L(e) {
    let t,
        n,
        i,
        { channelId: a, sessionId: d } = e,
        c = o.A.getChannel(a);
    if (null == c || !c.isForumPost()) return null;
    let _ = o.A.getChannel(c.parent_id);
    return null != _ && _.isForumLikeChannel()
        ? {
              ...g({ channelId: _.id, sessionId: d }),
              thread_approximate_member_count: s.A.getMemberCount(a),
              thread_approximate_message_count: l.A.getCount(a),
              thread_archived: c.threadMetadata?.archived === !0,
              thread_locked: c.threadMetadata?.locked ?? !1,
              thread_auto_archive_duration_minutes: c.threadMetadata?.autoArchiveDuration ?? 0,
              thread_approximate_creation_date: E.default.extractTimestamp(a),
              forum_post_id: c.id,
              forum_post_first_message_id: E.default.castChannelIdAsMessageId(c.id),
              forum_post_num_reactions: null == (t = R(c.id)) ? 0 : t.reactions.reduce((e, t) => e + t.count, 0),
              forum_post_num_unique_reactions: null == (n = R(c.id)) ? 0 : n.reactions.length,
              forum_post_applied_tag_ids: (function (e) {
                  let t = o.A.getChannel(e);
                  if (null == t) return [];
                  let n = o.A.getChannel(t.parent_id),
                      i = n?.availableTags;
                  if (null == n || null == i) return [];
                  let a = new Set(i.map((e) => e.id));
                  return t.appliedTags?.filter((e) => a.has(e)) ?? [];
              })(c.id),
              forum_post_is_pinned: c.hasFlag(S.lx.PINNED),
              forum_post_is_new: I.A.getReadStateSnapshotAnalytics(c.id)?.isNew,
              forum_post_is_unread: I.A.getReadStateSnapshotAnalytics(c.id)?.hasUnreads,
              forum_post_is_following: r.A.hasJoined(c.id),
              forum_post_attachment_mimetypes:
                  null == (i = R(c.id)) ? [] : i.attachments.map((e) => e.content_type ?? "unknown"),
          }
        : null;
}
