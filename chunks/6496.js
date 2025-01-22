r.d(n, {
    RR: function () {
        return C;
    },
    WW: function () {
        return S;
    },
    bE: function () {
        return R;
    },
    n4: function () {
        return M;
    },
    q8: function () {
        return N;
    },
    t$: function () {
        return A;
    },
    xl: function () {
        return P;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(724458);
var s = r(683860),
    l = r(344185),
    u = r(569471),
    c = r(260483),
    d = r(144140),
    f = r(592125),
    p = r(703558),
    h = r(496675),
    _ = r(117530),
    m = r(709054),
    g = r(660189),
    E = r(559241),
    v = r(474387),
    y = r(702225),
    b = r(981631),
    I = r(176505),
    T = r(124368);
function S(e) {
    return y.Z.getForumChannelSessionId(e);
}
function A(e) {
    switch (e) {
        case s.z.CREATION_DATE:
            return T.SX.CREATION_DATE;
        case s.z.LATEST_ACTIVITY:
            return T.SX.LATEST_ACTIVITY;
        default:
            throw Error('Unexpected sort order '.concat(e));
    }
}
function C(e) {
    return _.Z.getUploads(e, p.d.FirstThreadMessage).length;
}
function N(e) {
    var n, r;
    let i = f.Z.getChannel(e);
    if (null == i) return [];
    let a = f.Z.getChannel(i.parent_id),
        o = null == a ? void 0 : a.availableTags;
    if (null == a || null == o) return [];
    let s = null !== (r = null === (n = p.Z.getThreadSettings(e)) || void 0 === n ? void 0 : n.appliedTags) && void 0 !== r ? r : new Set(),
        l = new Set(o.map((e) => e.id));
    return Array.from(s).filter((e) => l.has(e));
}
function R(e, n) {
    return Object.keys(l.Z.getThreadsForParent(e, n)).length;
}
function O(e) {
    let { loaded: n, firstMessage: r } = g.Z.getMessage(e);
    return n ? r : null;
}
function D(e) {
    let n = O(e);
    return null == n ? 0 : n.reactions.length;
}
function x(e) {
    let n = O(e);
    return null == n ? 0 : n.reactions.reduce((e, n) => e + n.count, 0);
}
function L(e) {
    var n, r;
    let i = f.Z.getChannel(e);
    if (null == i) return [];
    let a = f.Z.getChannel(i.parent_id),
        o = null == a ? void 0 : a.availableTags;
    if (null == a || null == o) return [];
    let s = new Set(o.map((e) => e.id));
    return null !== (r = null === (n = i.appliedTags) || void 0 === n ? void 0 : n.filter((e) => s.has(e))) && void 0 !== r ? r : [];
}
function w(e) {
    let n = O(e);
    return null == n
        ? []
        : n.attachments.map((e) => {
              var n;
              return null !== (n = e.content_type) && void 0 !== n ? n : 'unknown';
          });
}
function P(e) {
    var n, r, i, a;
    let { channelId: o, sessionId: s } = e,
        l = f.Z.getChannel(o);
    return null != l && l.isForumLikeChannel()
        ? {
              forum_channel_has_guidelines: null != l.topic && l.topic.trim().length > 0,
              forum_channel_default_emoji_reaction_id: null === (n = l.defaultReactionEmoji) || void 0 === n ? void 0 : n.emojiId,
              forum_channel_default_emoji_reaction_name: null === (r = l.defaultReactionEmoji) || void 0 === r ? void 0 : r.emojiName,
              forum_channel_available_tag_ids: null !== (a = null === (i = l.availableTags) || void 0 === i ? void 0 : i.map((e) => e.id)) && void 0 !== a ? a : [],
              forum_channel_tag_required: l.hasFlag(I.zZ.REQUIRE_TAG),
              forum_channel_can_create_post: h.Z.can(b.Plq.SEND_MESSAGES, l),
              forum_channel_filter_tag_ids: E.Z.getFilterTagIdsAnalytics(),
              forum_channel_sort_order: E.Z.getSortOrderAnalytics(l.id),
              forum_channel_session_id: null != s ? s : S(l.id),
              forum_channel_layout: E.Z.getLayoutAnalytics(l.id),
              forum_channel_default_sort_order: l.defaultSortOrder,
              forum_channel_default_layout: l.defaultForumLayout
          }
        : null;
}
function M(e) {
    var n, r, i, a, o, s, l;
    let { channelId: p, sessionId: h } = e,
        _ = f.Z.getChannel(p);
    if (null == _ || !_.isForumPost()) return null;
    let g = f.Z.getChannel(_.parent_id);
    return null != g && g.isForumLikeChannel()
        ? {
              ...P({
                  channelId: g.id,
                  sessionId: h
              }),
              thread_approximate_member_count: c.Z.getMemberCount(p),
              thread_approximate_message_count: d.Z.getCount(p),
              thread_archived: (null === (n = _.threadMetadata) || void 0 === n ? void 0 : n.archived) === !0,
              thread_locked: null !== (s = null === (r = _.threadMetadata) || void 0 === r ? void 0 : r.locked) && void 0 !== s && s,
              thread_auto_archive_duration_minutes: null !== (l = null === (i = _.threadMetadata) || void 0 === i ? void 0 : i.autoArchiveDuration) && void 0 !== l ? l : 0,
              thread_approximate_creation_date: m.default.extractTimestamp(p),
              forum_post_id: _.id,
              forum_post_first_message_id: m.default.castChannelIdAsMessageId(_.id),
              forum_post_num_reactions: x(_.id),
              forum_post_num_unique_reactions: D(_.id),
              forum_post_applied_tag_ids: L(_.id),
              forum_post_is_pinned: _.hasFlag(I.zZ.PINNED),
              forum_post_is_new: null === (a = v.Z.getReadStateSnapshotAnalytics(_.id)) || void 0 === a ? void 0 : a.isNew,
              forum_post_is_unread: null === (o = v.Z.getReadStateSnapshotAnalytics(_.id)) || void 0 === o ? void 0 : o.hasUnreads,
              forum_post_is_following: u.Z.hasJoined(_.id),
              forum_post_attachment_mimetypes: w(_.id)
          }
        : null;
}
