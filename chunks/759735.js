"use strict";
n.d(t, { $L: () => v, au: () => y, cr: () => I, d1: () => S, fO: () => R, io: () => N, kL: () => T });
var r = n(602137),
    i = n(970278),
    s = n(152007),
    a = n(802958),
    o = n(456874),
    l = n(734057),
    u = n(31717),
    d = n(576705),
    c = n(522602),
    _ = n(661191),
    f = n(969043),
    E = n(679804),
    h = n(878317),
    p = n(536437),
    m = n(652215),
    g = n(746080),
    A = n(37411);
function I(e) {
    return p.A.getForumChannelSessionId(e);
}
function T(e) {
    switch (e) {
        case r.T.CREATION_DATE:
            return A.az.CREATION_DATE;
        case r.T.LATEST_ACTIVITY:
            return A.az.LATEST_ACTIVITY;
        default:
            throw Error(`Unexpected sort order ${e}`);
    }
}
function S(e) {
    return c.A.getUploads(e, u.C.FirstThreadMessage).length;
}
function y(e) {
    let t = l.A.getChannel(e);
    if (null == t) return [];
    let n = l.A.getChannel(t.parent_id),
        r = n?.availableTags;
    if (null == n || null == r) return [];
    let i = u.A.getThreadSettings(e)?.appliedTags ?? new Set(),
        s = new Set(r.map((e) => e.id));
    return Array.from(i).filter((e) => s.has(e));
}
function N(e, t) {
    return Object.keys(i.A.getThreadsForParent(e, t)).length;
}
function O(e) {
    let { loaded: t, firstMessage: n } = f.A.getMessage(e);
    return t ? n : null;
}
function R(e) {
    let { channelId: t, sessionId: n } = e,
        r = l.A.getChannel(t);
    return null != r && r.isForumLikeChannel()
        ? {
              forum_channel_has_guidelines: null != r.topic && r.topic.trim().length > 0,
              forum_channel_default_emoji_reaction_id: r.defaultReactionEmoji?.emojiId,
              forum_channel_default_emoji_reaction_name: r.defaultReactionEmoji?.emojiName,
              forum_channel_available_tag_ids: r.availableTags?.map((e) => e.id) ?? [],
              forum_channel_tag_required: r.hasFlag(g.lx.REQUIRE_TAG),
              forum_channel_can_create_post: d.A.can(m.xBc.SEND_MESSAGES, r),
              forum_channel_filter_tag_ids: E.A.getFilterTagIdsAnalytics(),
              forum_channel_sort_order: E.A.getSortOrderAnalytics(r.id),
              forum_channel_session_id: n ?? I(r.id),
              forum_channel_layout: E.A.getLayoutAnalytics(r.id),
              forum_channel_default_sort_order: r.defaultSortOrder,
              forum_channel_tag_setting: E.A.getTagSettingAnalytics(r.id),
              forum_channel_default_layout: r.defaultForumLayout,
              forum_channel_is_moderator_report_channel: r.isModeratorReportChannel(),
          }
        : null;
}
function v(e) {
    let t,
        n,
        r,
        { channelId: i, sessionId: u } = e,
        d = l.A.getChannel(i);
    if (null == d || !d.isForumPost()) return null;
    let c = l.A.getChannel(d.parent_id);
    return null != c && c.isForumLikeChannel()
        ? {
              ...R({ channelId: c.id, sessionId: u }),
              thread_approximate_member_count: a.A.getMemberCount(i),
              thread_approximate_message_count: o.A.getCount(i),
              thread_archived: d.threadMetadata?.archived === !0,
              thread_locked: d.threadMetadata?.locked ?? !1,
              thread_auto_archive_duration_minutes: d.threadMetadata?.autoArchiveDuration ?? 0,
              thread_approximate_creation_date: _.default.extractTimestamp(i),
              forum_post_id: d.id,
              forum_post_first_message_id: _.default.castChannelIdAsMessageId(d.id),
              forum_post_num_reactions: null == (t = O(d.id)) ? 0 : t.reactions.reduce((e, t) => e + t.count, 0),
              forum_post_num_unique_reactions: null == (n = O(d.id)) ? 0 : n.reactions.length,
              forum_post_applied_tag_ids: (function (e) {
                  let t = l.A.getChannel(e);
                  if (null == t) return [];
                  let n = l.A.getChannel(t.parent_id),
                      r = n?.availableTags;
                  if (null == n || null == r) return [];
                  let i = new Set(r.map((e) => e.id));
                  return t.appliedTags?.filter((e) => i.has(e)) ?? [];
              })(d.id),
              forum_post_is_pinned: d.hasFlag(g.lx.PINNED),
              forum_post_is_new: h.A.getReadStateSnapshotAnalytics(d.id)?.isNew,
              forum_post_is_unread: h.A.getReadStateSnapshotAnalytics(d.id)?.hasUnreads,
              forum_post_is_following: s.A.hasJoined(d.id),
              forum_post_attachment_mimetypes:
                  null == (r = O(d.id)) ? [] : r.attachments.map((e) => e.content_type ?? "unknown"),
          }
        : null;
}
