"use strict";
n.d(t, { IU: () => R, SP: () => N, ec: () => M, ei: () => P, rh: () => b }), n(938796);
var r = n(989349),
    i = n.n(r),
    a = n(833291),
    s = n(814890),
    o = n(921457),
    l = n(378058),
    u = n(399144),
    c = n(383233),
    d = n(427157),
    _ = n(961350),
    f = n(994500),
    h = n(287809),
    p = n(659674),
    g = n(45938),
    E = n(661191),
    A = n(451919);
n(763754);
var I = n(381941),
    T = n(652215);
let y = new d.A({ id: "???", username: "???" });
function S(e) {
    return null == e.author
        ? y
        : null != e.webhook_id
          ? new d.A(e.author)
          : (h.default.getUser(e.author.id) ?? new d.A(e.author));
}
function v(e) {
    return !1;
}
function C(e) {
    return new c.go({
        ...e,
        timestamp: new Date(e.timestamp),
        editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
        attachments: O(e),
        embeds: L(e),
        components: (0, s.ZV)(e.components ?? []),
        codedLinks: T.MRS.NON_PARSED.has(e.type) ? [] : (0, a.Ay)(e.content),
    });
}
function b(e) {
    let t,
        n,
        { reactions: r, interactionData: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = C(e),
        s = e.mentions?.map((e) => e.id) ?? [],
        l = e.mention_roles ?? [],
        d = e.mention_channels ?? [],
        h = e.mention_games ?? [],
        p = e.message_reference,
        I = S(e),
        y = null,
        b = e?.gift_info,
        N = e.gifting_prompt,
        R = null != e.interaction ? u.A.createFromServer(e.interaction) : null,
        O = e.type === T.lAJ.THREAD_STARTER_MESSAGE ? e.referenced_message?.author?.id : void 0,
        L = e.content;
    return new c.Ay(
        (e.type === T.lAJ.PREMIUM_REFERRAL &&
            ((t = E.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (L = "")),
        e.type === T.lAJ.PREMIUM_GROUP_INVITE &&
            ((n = E.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (L = "")),
        v(e))
            ? {
                  ...y,
                  id: e.id,
                  channel_id: e.channel_id,
                  type: T.lAJ.DEFAULT,
                  author: I,
                  timestamp: a.timestamp,
                  isUnsupported: !0,
              }
            : {
                  ...e,
                  ...y,
                  ...a.toJS(),
                  author: I,
                  webhookId: e.webhook_id,
                  blocked: f.A.isBlockedForMessage(e) || (null != O && f.A.isBlocked(O)),
                  ignored: f.A.isIgnoredForMessage(e) || (null != O && f.A.isIgnored(O)),
                  mentionEveryone: e.mention_everyone,
                  mentions: s,
                  mentionRoles: l,
                  mentionChannels: d,
                  mentionGames: h,
                  messageReference: p,
                  mentioned: (0, A.Uj)({
                      userId: _.default.getId(),
                      channelId: e.channel_id,
                      mentionEveryone: e.mention_everyone ?? !1,
                      mentionUsers: s,
                      mentionRoles: l,
                      mentionGames: h.map((e) => e.id),
                  }),
                  giftCodes: (0, g.pF)(e) ? (0, g.e7)(e?.embeds[0].url) : (0, g.e7)(e.content),
                  content: L,
                  referralTrialOfferId: t,
                  premiumGroupInviteId: n,
                  call: D(e.call, a.timestamp),
                  messageSnapshots: x(e),
                  reactions: w(r ?? e.reactions, e.poll),
                  interaction: R,
                  interactionData: i ?? e.interaction_data,
                  interactionMetadata: e.interaction_metadata,
                  roleSubscriptionData: e.role_subscription_data,
                  purchaseNotification: e.purchase_notification,
                  poll: null == e.poll ? void 0 : (0, o.A)(e.poll),
                  sharedClientTheme: e.shared_client_theme,
                  giftInfo: null == b ? void 0 : b,
                  giftingPrompt: N,
                  boostingPrompt: e.boosting_prompt,
              },
    );
}
function N(e, t) {
    return null != t.edited_timestamp
        ? { ...t, reactions: e.reactions, interaction_data: e.interaction_data }
        : { ...e, ...t };
}
function R(e, t) {
    if (null != t.edited_timestamp) return b(t, { reactions: e.reactions, interactionData: e.interactionData });
    let n = e,
        r = !1;
    return (
        null != t.call && (n = n.set("call", D(t.call, e.timestamp))),
        null != t.attachments && (n = n.set("attachments", O(t))),
        null != t.application && (n = n.set("application", t.application)),
        null != t.activity && (n = n.set("activity", t.activity)),
        null != t.content && "" !== t.content && (n = n.set("content", t.content)),
        null != t.embeds && (n = n.set("embeds", L(t))),
        null != t.message_snapshots && (n = n.set("messageSnapshots", x(t))),
        t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)),
        null != n.webhookId && null != t.author && (n = n.set("author", new d.A(t.author))),
        null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)),
        null != t.components && (n = n.set("components", (0, s.ZV)(t.components))),
        null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)),
        null != t.reactions && (n = n.set("reactions", w(e.reactions ?? t.reactions))),
        null != t.poll && (n = n.set("poll", (0, o.A)(t.poll))),
        null != t.mentions &&
            ((n = n.set(
                "mentions",
                t.mentions.map((e) => e.id),
            )),
            (r = !0)),
        null != t.mention_games && ((n = n.set("mentionGames", t.mention_games)), (r = !0)),
        null != t.mention_everyone && ((n = n.set("mentionEveryone", t.mention_everyone)), (r = !0)),
        null != t.mention_roles && ((n = n.set("mentionRoles", t.mention_roles)), (r = !0)),
        r && (n = n.set("mentioned", (0, A.Ay)({ message: n, userId: _.default.getId() }))),
        n
    );
}
function O(e) {
    return null == e.attachments ? [] : e.attachments.map((e) => ({ ...e, spoiler: e.filename.startsWith(I._W) }));
}
function D(e, t) {
    if (null != e) {
        let n = null != e.ended_timestamp ? i()(new Date(e.ended_timestamp)) : null,
            r = null != n ? i().duration(n.diff(t)) : null;
        return { participants: e.participants, endedTimestamp: n, duration: r };
    }
    return null;
}
function L(e) {
    if (null == e.embeds) return [];
    let t = e.embeds.map((t) => (0, p.fK)(e.channel_id, e.id, t));
    return (0, p.nh)(t);
}
function w(e, t) {
    return null == e && t?.results == null
        ? []
        : [
              ...(e ?? []),
              ...(t?.results?.answer_counts.map((e) => ({
                  count_details: { vote: e.count },
                  me_vote: e.me_voted,
                  emoji: { id: e.id.toString(), name: "", animated: !1 },
                  me: !1,
                  me_burst: !1,
                  count: e.count,
                  burst_count: 0,
              })) ?? []),
          ].map((e) => {
              let t = { ...e };
              return (
                  t?.count_details != null &&
                      ((t.burst_count = t.count_details.burst ?? 0), (t.count = t.count_details.normal ?? 0)),
                  t.count < 0 && (t.count = 0),
                  t.burst_count < 0 && (t.burst_count = 0),
                  t
              );
          });
}
function x(e) {
    return null == e.message_snapshots
        ? []
        : e.message_snapshots.map((e) => {
              let { message: t, moderator_report: n } = e;
              return new c.vF({ message: C(t), moderator_report: n });
          });
}
let P = (e) => 0 === (0, l.o6)(e).length || "" !== e.content;
function M(e) {
    return e.hasFlag(T.pr7.EPHEMERAL) && e.type !== T.lAJ.IN_GAME_MESSAGE_NUX;
}
