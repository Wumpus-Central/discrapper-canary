n.d(t, {
    RR: () => T,
    WW: () => y,
    bE: () => S,
    n4: () => x,
    q8: () => b,
    t$: () => I,
    xl: () => D
}),
    n(411104),
    n(47120),
    n(724458);
var i = n(683860),
    r = n(344185),
    a = n(569471),
    s = n(260483),
    o = n(144140),
    l = n(592125),
    u = n(703558),
    c = n(496675),
    d = n(117530),
    f = n(709054),
    _ = n(660189),
    p = n(559241),
    h = n(474387),
    m = n(702225),
    g = n(981631),
    E = n(176505),
    v = n(124368);
function y(e) {
    return m.Z.getForumChannelSessionId(e);
}
function I(e) {
    switch (e) {
        case i.z.CREATION_DATE:
            return v.SX.CREATION_DATE;
        case i.z.LATEST_ACTIVITY:
            return v.SX.LATEST_ACTIVITY;
        default:
            throw Error('Unexpected sort order '.concat(e));
    }
}
function T(e) {
    return d.Z.getUploads(e, u.d.FirstThreadMessage).length;
}
function b(e) {
    var t, n;
    let i = l.Z.getChannel(e);
    if (null == i) return [];
    let r = l.Z.getChannel(i.parent_id),
        a = null == r ? void 0 : r.availableTags;
    if (null == r || null == a) return [];
    let s = null !== (n = null === (t = u.Z.getThreadSettings(e)) || void 0 === t ? void 0 : t.appliedTags) && void 0 !== n ? n : new Set(),
        o = new Set(a.map((e) => e.id));
    return Array.from(s).filter((e) => o.has(e));
}
function S(e, t) {
    return Object.keys(r.Z.getThreadsForParent(e, t)).length;
}
function A(e) {
    let { loaded: t, firstMessage: n } = _.Z.getMessage(e);
    return t ? n : null;
}
function N(e) {
    let t = A(e);
    return null == t ? 0 : t.reactions.length;
}
function C(e) {
    let t = A(e);
    return null == t ? 0 : t.reactions.reduce((e, t) => e + t.count, 0);
}
function R(e) {
    var t, n;
    let i = l.Z.getChannel(e);
    if (null == i) return [];
    let r = l.Z.getChannel(i.parent_id),
        a = null == r ? void 0 : r.availableTags;
    if (null == r || null == a) return [];
    let s = new Set(a.map((e) => e.id));
    return null !== (n = null === (t = i.appliedTags) || void 0 === t ? void 0 : t.filter((e) => s.has(e))) && void 0 !== n ? n : [];
}
function O(e) {
    let t = A(e);
    return null == t
        ? []
        : t.attachments.map((e) => {
              var t;
              return null !== (t = e.content_type) && void 0 !== t ? t : 'unknown';
          });
}
function D(e) {
    var t, n, i, r;
    let { channelId: a, sessionId: s } = e,
        o = l.Z.getChannel(a);
    return null != o && o.isForumLikeChannel()
        ? {
              forum_channel_has_guidelines: null != o.topic && o.topic.trim().length > 0,
              forum_channel_default_emoji_reaction_id: null === (t = o.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiId,
              forum_channel_default_emoji_reaction_name: null === (n = o.defaultReactionEmoji) || void 0 === n ? void 0 : n.emojiName,
              forum_channel_available_tag_ids: null !== (r = null === (i = o.availableTags) || void 0 === i ? void 0 : i.map((e) => e.id)) && void 0 !== r ? r : [],
              forum_channel_tag_required: o.hasFlag(E.zZ.REQUIRE_TAG),
              forum_channel_can_create_post: c.Z.can(g.Plq.SEND_MESSAGES, o),
              forum_channel_filter_tag_ids: p.Z.getFilterTagIdsAnalytics(),
              forum_channel_sort_order: p.Z.getSortOrderAnalytics(o.id),
              forum_channel_session_id: null != s ? s : y(o.id),
              forum_channel_layout: p.Z.getLayoutAnalytics(o.id),
              forum_channel_default_sort_order: o.defaultSortOrder,
              forum_channel_default_layout: o.defaultForumLayout
          }
        : null;
}
function x(e) {
    var t, n, i, r, u, c, d;
    let { channelId: _, sessionId: p } = e,
        m = l.Z.getChannel(_);
    if (null == m || !m.isForumPost()) return null;
    let g = l.Z.getChannel(m.parent_id);
    return null != g && g.isForumLikeChannel()
        ? {
              ...D({
                  channelId: g.id,
                  sessionId: p
              }),
              thread_approximate_member_count: s.Z.getMemberCount(_),
              thread_approximate_message_count: o.Z.getCount(_),
              thread_archived: (null === (t = m.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
              thread_locked: null !== (c = null === (n = m.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== c && c,
              thread_auto_archive_duration_minutes: null !== (d = null === (i = m.threadMetadata) || void 0 === i ? void 0 : i.autoArchiveDuration) && void 0 !== d ? d : 0,
              thread_approximate_creation_date: f.default.extractTimestamp(_),
              forum_post_id: m.id,
              forum_post_first_message_id: f.default.castChannelIdAsMessageId(m.id),
              forum_post_num_reactions: C(m.id),
              forum_post_num_unique_reactions: N(m.id),
              forum_post_applied_tag_ids: R(m.id),
              forum_post_is_pinned: m.hasFlag(E.zZ.PINNED),
              forum_post_is_new: null === (r = h.Z.getReadStateSnapshotAnalytics(m.id)) || void 0 === r ? void 0 : r.isNew,
              forum_post_is_unread: null === (u = h.Z.getReadStateSnapshotAnalytics(m.id)) || void 0 === u ? void 0 : u.hasUnreads,
              forum_post_is_following: a.Z.hasJoined(m.id),
              forum_post_attachment_mimetypes: O(m.id)
          }
        : null;
}
