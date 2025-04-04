n.d(t, {
    RR: () => N,
    WW: () => S,
    bE: () => C,
    n4: () => M,
    q8: () => A,
    t$: () => T,
    xl: () => x
}),
    n(411104),
    n(47120),
    n(566702);
var r = n(683860),
    i = n(344185),
    o = n(569471),
    a = n(260483),
    s = n(144140),
    l = n(592125),
    c = n(703558),
    u = n(496675),
    d = n(117530),
    f = n(709054),
    _ = n(660189),
    p = n(559241),
    h = n(474387),
    m = n(702225),
    g = n(981631),
    E = n(176505),
    b = n(124368);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    return m.Z.getForumChannelSessionId(e);
}
function T(e) {
    switch (e) {
        case r.z.CREATION_DATE:
            return b.SX.CREATION_DATE;
        case r.z.LATEST_ACTIVITY:
            return b.SX.LATEST_ACTIVITY;
        default:
            throw Error('Unexpected sort order '.concat(e));
    }
}
function N(e) {
    return d.Z.getUploads(e, c.d.FirstThreadMessage).length;
}
function A(e) {
    var t, n;
    let r = l.Z.getChannel(e);
    if (null == r) return [];
    let i = l.Z.getChannel(r.parent_id),
        o = null == i ? void 0 : i.availableTags;
    if (null == i || null == o) return [];
    let a = null != (n = null == (t = c.Z.getThreadSettings(e)) ? void 0 : t.appliedTags) ? n : new Set(),
        s = new Set(o.map((e) => e.id));
    return Array.from(a).filter((e) => s.has(e));
}
function C(e, t) {
    return Object.keys(i.Z.getThreadsForParent(e, t)).length;
}
function R(e) {
    let { loaded: t, firstMessage: n } = _.Z.getMessage(e);
    return t ? n : null;
}
function P(e) {
    let t = R(e);
    return null == t ? 0 : t.reactions.length;
}
function w(e) {
    let t = R(e);
    return null == t ? 0 : t.reactions.reduce((e, t) => e + t.count, 0);
}
function D(e) {
    var t, n;
    let r = l.Z.getChannel(e);
    if (null == r) return [];
    let i = l.Z.getChannel(r.parent_id),
        o = null == i ? void 0 : i.availableTags;
    if (null == i || null == o) return [];
    let a = new Set(o.map((e) => e.id));
    return null != (n = null == (t = r.appliedTags) ? void 0 : t.filter((e) => a.has(e))) ? n : [];
}
function L(e) {
    let t = R(e);
    return null == t
        ? []
        : t.attachments.map((e) => {
              var t;
              return null != (t = e.content_type) ? t : 'unknown';
          });
}
function x(e) {
    var t, n, r, i;
    let { channelId: o, sessionId: a } = e,
        s = l.Z.getChannel(o);
    return null != s && s.isForumLikeChannel()
        ? {
              forum_channel_has_guidelines: null != s.topic && s.topic.trim().length > 0,
              forum_channel_default_emoji_reaction_id: null == (t = s.defaultReactionEmoji) ? void 0 : t.emojiId,
              forum_channel_default_emoji_reaction_name: null == (n = s.defaultReactionEmoji) ? void 0 : n.emojiName,
              forum_channel_available_tag_ids: null != (i = null == (r = s.availableTags) ? void 0 : r.map((e) => e.id)) ? i : [],
              forum_channel_tag_required: s.hasFlag(E.zZ.REQUIRE_TAG),
              forum_channel_can_create_post: u.Z.can(g.Plq.SEND_MESSAGES, s),
              forum_channel_filter_tag_ids: p.Z.getFilterTagIdsAnalytics(),
              forum_channel_sort_order: p.Z.getSortOrderAnalytics(s.id),
              forum_channel_session_id: null != a ? a : S(s.id),
              forum_channel_layout: p.Z.getLayoutAnalytics(s.id),
              forum_channel_default_sort_order: s.defaultSortOrder,
              forum_channel_default_layout: s.defaultForumLayout
          }
        : null;
}
function M(e) {
    var t, n, r, i, c, u, d;
    let { channelId: _, sessionId: p } = e,
        m = l.Z.getChannel(_);
    if (null == m || !m.isForumPost()) return null;
    let g = l.Z.getChannel(m.parent_id);
    return null != g && g.isForumLikeChannel()
        ? I(
              v(
                  {},
                  x({
                      channelId: g.id,
                      sessionId: p
                  })
              ),
              {
                  thread_approximate_member_count: a.Z.getMemberCount(_),
                  thread_approximate_message_count: s.Z.getCount(_),
                  thread_archived: (null == (t = m.threadMetadata) ? void 0 : t.archived) === !0,
                  thread_locked: null != (u = null == (n = m.threadMetadata) ? void 0 : n.locked) && u,
                  thread_auto_archive_duration_minutes: null != (d = null == (r = m.threadMetadata) ? void 0 : r.autoArchiveDuration) ? d : 0,
                  thread_approximate_creation_date: f.default.extractTimestamp(_),
                  forum_post_id: m.id,
                  forum_post_first_message_id: f.default.castChannelIdAsMessageId(m.id),
                  forum_post_num_reactions: w(m.id),
                  forum_post_num_unique_reactions: P(m.id),
                  forum_post_applied_tag_ids: D(m.id),
                  forum_post_is_pinned: m.hasFlag(E.zZ.PINNED),
                  forum_post_is_new: null == (i = h.Z.getReadStateSnapshotAnalytics(m.id)) ? void 0 : i.isNew,
                  forum_post_is_unread: null == (c = h.Z.getReadStateSnapshotAnalytics(m.id)) ? void 0 : c.hasUnreads,
                  forum_post_is_following: o.Z.hasJoined(m.id),
                  forum_post_attachment_mimetypes: L(m.id)
              }
          )
        : null;
}
