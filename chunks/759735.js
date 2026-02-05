"use strict";
n.d(t, { $L: () => L, au: () => S, cr: () => I, d1: () => y, fO: () => D, io: () => v, kL: () => T });
var r = n(602137),
    i = n(970278),
    a = n(152007),
    s = n(802958),
    o = n(456874),
    l = n(734057),
    u = n(31717),
    c = n(576705),
    d = n(522602),
    _ = n(661191),
    f = n(969043),
    p = n(679804),
    h = n(878317),
    m = n(536437),
    g = n(652215),
    E = n(746080),
    A = n(37411);
function I(e) {
    return m.A.getForumChannelSessionId(e);
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
function y(e) {
    return d.A.getUploads(e, u.C.FirstThreadMessage).length;
}
function S(e) {
    let t = l.A.getChannel(e);
    if (null == t) return [];
    let n = l.A.getChannel(t.parent_id),
        r = n?.availableTags;
    if (null == n || null == r) return [];
    let i = u.A.getThreadSettings(e)?.appliedTags ?? new Set(),
        a = new Set(r.map((e) => e.id));
    return Array.from(i).filter((e) => a.has(e));
}
function v(e, t) {
    return Object.keys(i.A.getThreadsForParent(e, t)).length;
}
function C(e) {
    let { loaded: t, firstMessage: n } = f.A.getMessage(e);
    return t ? n : null;
}
function b(e) {
    let t = C(e);
    return null == t ? 0 : t.reactions.length;
}
function N(e) {
    let t = C(e);
    return null == t ? 0 : t.reactions.reduce((e, t) => e + t.count, 0);
}
function R(e) {
    let t = l.A.getChannel(e);
    if (null == t) return [];
    let n = l.A.getChannel(t.parent_id),
        r = n?.availableTags;
    if (null == n || null == r) return [];
    let i = new Set(r.map((e) => e.id));
    return t.appliedTags?.filter((e) => i.has(e)) ?? [];
}
function O(e) {
    let t = C(e);
    return null == t ? [] : t.attachments.map((e) => e.content_type ?? "unknown");
}
function D(e) {
    let { channelId: t, sessionId: n } = e,
        r = l.A.getChannel(t);
    return null != r && r.isForumLikeChannel()
        ? {
              forum_channel_has_guidelines: null != r.topic && r.topic.trim().length > 0,
              forum_channel_default_emoji_reaction_id: r.defaultReactionEmoji?.emojiId,
              forum_channel_default_emoji_reaction_name: r.defaultReactionEmoji?.emojiName,
              forum_channel_available_tag_ids: r.availableTags?.map((e) => e.id) ?? [],
              forum_channel_tag_required: r.hasFlag(E.lx.REQUIRE_TAG),
              forum_channel_can_create_post: c.A.can(g.xBc.SEND_MESSAGES, r),
              forum_channel_filter_tag_ids: p.A.getFilterTagIdsAnalytics(),
              forum_channel_sort_order: p.A.getSortOrderAnalytics(r.id),
              forum_channel_session_id: n ?? I(r.id),
              forum_channel_layout: p.A.getLayoutAnalytics(r.id),
              forum_channel_default_sort_order: r.defaultSortOrder,
              forum_channel_tag_setting: p.A.getTagSettingAnalytics(r.id),
              forum_channel_default_layout: r.defaultForumLayout,
              forum_channel_is_moderator_report_channel: r.isModeratorReportChannel(),
          }
        : null;
}
function L(e) {
    let { channelId: t, sessionId: n } = e,
        r = l.A.getChannel(t);
    if (null == r || !r.isForumPost()) return null;
    let i = l.A.getChannel(r.parent_id);
    return null != i && i.isForumLikeChannel()
        ? {
              ...D({ channelId: i.id, sessionId: n }),
              thread_approximate_member_count: s.A.getMemberCount(t),
              thread_approximate_message_count: o.A.getCount(t),
              thread_archived: r.threadMetadata?.archived === !0,
              thread_locked: r.threadMetadata?.locked ?? !1,
              thread_auto_archive_duration_minutes: r.threadMetadata?.autoArchiveDuration ?? 0,
              thread_approximate_creation_date: _.default.extractTimestamp(t),
              forum_post_id: r.id,
              forum_post_first_message_id: _.default.castChannelIdAsMessageId(r.id),
              forum_post_num_reactions: N(r.id),
              forum_post_num_unique_reactions: b(r.id),
              forum_post_applied_tag_ids: R(r.id),
              forum_post_is_pinned: r.hasFlag(E.lx.PINNED),
              forum_post_is_new: h.A.getReadStateSnapshotAnalytics(r.id)?.isNew,
              forum_post_is_unread: h.A.getReadStateSnapshotAnalytics(r.id)?.hasUnreads,
              forum_post_is_following: a.A.hasJoined(r.id),
              forum_post_attachment_mimetypes: O(r.id),
          }
        : null;
}
