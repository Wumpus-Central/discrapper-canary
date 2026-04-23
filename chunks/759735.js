"use strict";
n.d(t, { $L: () => O, au: () => y, cr: () => I, d1: () => S, fO: () => C, io: () => N, kL: () => T });
var r = n(602137),
    i = n(970278),
    s = n(152007),
    a = n(802958),
    o = n(456874),
    l = n(734057),
    u = n(31717),
    c = n(576705),
    d = n(522602),
    _ = n(661191),
    f = n(969043),
    p = n(679804),
    h = n(878317),
    E = n(536437),
    m = n(652215),
    g = n(746080),
    A = n(37411);
function I(e) {
    return E.A.getForumChannelSessionId(e);
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
    return d.A.getUploads(e, u.C.FirstThreadMessage).length;
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
function v(e) {
    let { loaded: t, firstMessage: n } = f.A.getMessage(e);
    return t ? n : null;
}
function C(e) {
    let { channelId: t, sessionId: n } = e,
        r = l.A.getChannel(t);
    return null != r && r.isForumLikeChannel()
        ? {
              forum_channel_has_guidelines: null != r.topic && r.topic.trim().length > 0,
              forum_channel_default_emoji_reaction_id: r.defaultReactionEmoji?.emojiId,
              forum_channel_default_emoji_reaction_name: r.defaultReactionEmoji?.emojiName,
              forum_channel_available_tag_ids: r.availableTags?.map((e) => e.id) ?? [],
              forum_channel_tag_required: r.hasFlag(g.lx.REQUIRE_TAG),
              forum_channel_can_create_post: c.A.can(m.xBc.SEND_MESSAGES, r),
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
function O(e) {
    let t,
        n,
        r,
        { channelId: i, sessionId: u } = e,
        c = l.A.getChannel(i);
    if (null == c || !c.isForumPost()) return null;
    let d = l.A.getChannel(c.parent_id);
    return null != d && d.isForumLikeChannel()
        ? {
              ...C({ channelId: d.id, sessionId: u }),
              thread_approximate_member_count: a.A.getMemberCount(i),
              thread_approximate_message_count: o.A.getCount(i),
              thread_archived: c.threadMetadata?.archived === !0,
              thread_locked: c.threadMetadata?.locked ?? !1,
              thread_auto_archive_duration_minutes: c.threadMetadata?.autoArchiveDuration ?? 0,
              thread_approximate_creation_date: _.default.extractTimestamp(i),
              forum_post_id: c.id,
              forum_post_first_message_id: _.default.castChannelIdAsMessageId(c.id),
              forum_post_num_reactions: null == (t = v(c.id)) ? 0 : t.reactions.reduce((e, t) => e + t.count, 0),
              forum_post_num_unique_reactions: null == (n = v(c.id)) ? 0 : n.reactions.length,
              forum_post_applied_tag_ids: (function (e) {
                  let t = l.A.getChannel(e);
                  if (null == t) return [];
                  let n = l.A.getChannel(t.parent_id),
                      r = n?.availableTags;
                  if (null == n || null == r) return [];
                  let i = new Set(r.map((e) => e.id));
                  return t.appliedTags?.filter((e) => i.has(e)) ?? [];
              })(c.id),
              forum_post_is_pinned: c.hasFlag(g.lx.PINNED),
              forum_post_is_new: h.A.getReadStateSnapshotAnalytics(c.id)?.isNew,
              forum_post_is_unread: h.A.getReadStateSnapshotAnalytics(c.id)?.hasUnreads,
              forum_post_is_following: s.A.hasJoined(c.id),
              forum_post_attachment_mimetypes:
                  null == (r = v(c.id)) ? [] : r.attachments.map((e) => e.content_type ?? "unknown"),
          }
        : null;
}
