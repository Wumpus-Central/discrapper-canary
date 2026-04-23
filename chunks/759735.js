n.d(t, { $L: () => h, au: () => p, cr: () => R, d1: () => C, fO: () => D, io: () => m, kL: () => f });
var i = n(602137),
    r = n(970278),
    a = n(152007),
    s = n(802958),
    _ = n(456874),
    l = n(734057),
    o = n(31717),
    E = n(576705),
    d = n(522602),
    c = n(935208),
    u = n(969043),
    I = n(679804),
    A = n(878317),
    T = n(536437),
    S = n(652215),
    N = n(746080),
    O = n(37411);
function R(e) {
    return T.A.getForumChannelSessionId(e);
}
function f(e) {
    switch (e) {
        case i.T.CREATION_DATE:
            return O.az.CREATION_DATE;
        case i.T.LATEST_ACTIVITY:
            return O.az.LATEST_ACTIVITY;
        default:
            throw Error(`Unexpected sort order ${e}`);
    }
}
function C(e) {
    return d.A.getUploads(e, o.C.FirstThreadMessage).length;
}
function p(e) {
    let t = l.A.getChannel(e);
    if (null == t) return [];
    let n = l.A.getChannel(t.parent_id),
        i = n?.availableTags;
    if (null == n || null == i) return [];
    let r = o.A.getThreadSettings(e)?.appliedTags ?? new Set(),
        a = new Set(i.map((e) => e.id));
    return Array.from(r).filter((e) => a.has(e));
}
function m(e, t) {
    return Object.keys(r.A.getThreadsForParent(e, t)).length;
}
function L(e) {
    let { loaded: t, firstMessage: n } = u.A.getMessage(e);
    return t ? n : null;
}
function D(e) {
    let { channelId: t, sessionId: n } = e,
        i = l.A.getChannel(t);
    return null != i && i.isForumLikeChannel()
        ? {
              forum_channel_has_guidelines: null != i.topic && i.topic.trim().length > 0,
              forum_channel_default_emoji_reaction_id: i.defaultReactionEmoji?.emojiId,
              forum_channel_default_emoji_reaction_name: i.defaultReactionEmoji?.emojiName,
              forum_channel_available_tag_ids: i.availableTags?.map((e) => e.id) ?? [],
              forum_channel_tag_required: i.hasFlag(N.lx.REQUIRE_TAG),
              forum_channel_can_create_post: E.A.can(S.xBc.SEND_MESSAGES, i),
              forum_channel_filter_tag_ids: I.A.getFilterTagIdsAnalytics(),
              forum_channel_sort_order: I.A.getSortOrderAnalytics(i.id),
              forum_channel_session_id: n ?? R(i.id),
              forum_channel_layout: I.A.getLayoutAnalytics(i.id),
              forum_channel_default_sort_order: i.defaultSortOrder,
              forum_channel_tag_setting: I.A.getTagSettingAnalytics(i.id),
              forum_channel_default_layout: i.defaultForumLayout,
              forum_channel_is_moderator_report_channel: i.isModeratorReportChannel(),
          }
        : null;
}
function h(e) {
    let t,
        n,
        i,
        { channelId: r, sessionId: o } = e,
        E = l.A.getChannel(r);
    if (null == E || !E.isForumPost()) return null;
    let d = l.A.getChannel(E.parent_id);
    return null != d && d.isForumLikeChannel()
        ? {
              ...D({ channelId: d.id, sessionId: o }),
              thread_approximate_member_count: s.A.getMemberCount(r),
              thread_approximate_message_count: _.A.getCount(r),
              thread_archived: E.threadMetadata?.archived === !0,
              thread_locked: E.threadMetadata?.locked ?? !1,
              thread_auto_archive_duration_minutes: E.threadMetadata?.autoArchiveDuration ?? 0,
              thread_approximate_creation_date: c.default.extractTimestamp(r),
              forum_post_id: E.id,
              forum_post_first_message_id: c.default.castChannelIdAsMessageId(E.id),
              forum_post_num_reactions: null == (t = L(E.id)) ? 0 : t.reactions.reduce((e, t) => e + t.count, 0),
              forum_post_num_unique_reactions: null == (n = L(E.id)) ? 0 : n.reactions.length,
              forum_post_applied_tag_ids: (function (e) {
                  let t = l.A.getChannel(e);
                  if (null == t) return [];
                  let n = l.A.getChannel(t.parent_id),
                      i = n?.availableTags;
                  if (null == n || null == i) return [];
                  let r = new Set(i.map((e) => e.id));
                  return t.appliedTags?.filter((e) => r.has(e)) ?? [];
              })(E.id),
              forum_post_is_pinned: E.hasFlag(N.lx.PINNED),
              forum_post_is_new: A.A.getReadStateSnapshotAnalytics(E.id)?.isNew,
              forum_post_is_unread: A.A.getReadStateSnapshotAnalytics(E.id)?.hasUnreads,
              forum_post_is_following: a.A.hasJoined(E.id),
              forum_post_attachment_mimetypes:
                  null == (i = L(E.id)) ? [] : i.attachments.map((e) => e.content_type ?? "unknown"),
          }
        : null;
}
