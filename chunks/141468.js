"use strict";
n.d(t, { IU: () => N, SP: () => b, ec: () => P, ei: () => x, rh: () => C }), n(938796);
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
    p = n(287809),
    h = n(659674),
    m = n(45938),
    g = n(661191),
    E = n(451919);
n(763754);
var A = n(381941),
    I = n(652215);
let T = new d.A({ id: "???", username: "???" });
function y(e) {
    return null == e.author
        ? T
        : null != e.webhook_id
          ? new d.A(e.author)
          : (p.default.getUser(e.author.id) ?? new d.A(e.author));
}
function S(e) {
    return !1;
}
function v(e) {
    return new c.go({
        ...e,
        timestamp: new Date(e.timestamp),
        editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
        attachments: R(e),
        embeds: D(e),
        components: (0, s.ZV)(e.components ?? []),
        codedLinks: I.MRS.NON_PARSED.has(e.type) ? [] : (0, a.Ay)(e.content),
    });
}
function C(e) {
    let t,
        n,
        { reactions: r, interactionData: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = v(e),
        s = e.mentions?.map((e) => e.id) ?? [],
        l = e.mention_roles ?? [],
        d = e.mention_channels ?? [],
        p = e.mention_games ?? [],
        h = e.message_reference,
        A = y(e),
        T = null,
        C = e?.gift_info,
        b = e.gifting_prompt,
        N = null != e.interaction ? u.A.createFromServer(e.interaction) : null,
        R = e.type === I.lAJ.THREAD_STARTER_MESSAGE ? e.referenced_message?.author?.id : void 0,
        D = e.content;
    return new c.Ay(
        (e.type === I.lAJ.PREMIUM_REFERRAL &&
            ((t = g.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (D = "")),
        e.type === I.lAJ.PREMIUM_GROUP_INVITE &&
            ((n = g.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (D = "")),
        S(e))
            ? {
                  ...T,
                  id: e.id,
                  channel_id: e.channel_id,
                  type: I.lAJ.DEFAULT,
                  author: A,
                  timestamp: a.timestamp,
                  isUnsupported: !0,
              }
            : {
                  ...e,
                  ...T,
                  ...a.toJS(),
                  author: A,
                  webhookId: e.webhook_id,
                  blocked: f.A.isBlockedForMessage(e) || (null != R && f.A.isBlocked(R)),
                  ignored: f.A.isIgnoredForMessage(e) || (null != R && f.A.isIgnored(R)),
                  mentionEveryone: e.mention_everyone,
                  mentions: s,
                  mentionRoles: l,
                  mentionChannels: d,
                  mentionGames: p,
                  messageReference: h,
                  mentioned: (0, E.Uj)({
                      userId: _.default.getId(),
                      channelId: e.channel_id,
                      mentionEveryone: e.mention_everyone ?? !1,
                      mentionUsers: s,
                      mentionRoles: l,
                      mentionGames: p.map((e) => e.id),
                  }),
                  giftCodes: (0, m.pF)(e) ? (0, m.e7)(e?.embeds[0].url) : (0, m.e7)(e.content),
                  content: D,
                  referralTrialOfferId: t,
                  premiumGroupInviteId: n,
                  call: O(e.call, a.timestamp),
                  messageSnapshots: w(e),
                  reactions: L(r ?? e.reactions, e.poll),
                  interaction: N,
                  interactionData: i ?? e.interaction_data,
                  interactionMetadata: e.interaction_metadata,
                  roleSubscriptionData: e.role_subscription_data,
                  purchaseNotification: e.purchase_notification,
                  poll: null == e.poll ? void 0 : (0, o.A)(e.poll),
                  sharedClientTheme: e.shared_client_theme,
                  giftInfo: null == C ? void 0 : C,
                  giftingPrompt: b,
              },
    );
}
function b(e, t) {
    return null != t.edited_timestamp
        ? { ...t, reactions: e.reactions, interaction_data: e.interaction_data }
        : { ...e, ...t };
}
function N(e, t) {
    if (null != t.edited_timestamp) return C(t, { reactions: e.reactions, interactionData: e.interactionData });
    let n = e,
        r = !1;
    return (
        null != t.call && (n = n.set("call", O(t.call, e.timestamp))),
        null != t.attachments && (n = n.set("attachments", R(t))),
        null != t.application && (n = n.set("application", t.application)),
        null != t.activity && (n = n.set("activity", t.activity)),
        null != t.content && "" !== t.content && (n = n.set("content", t.content)),
        null != t.embeds && (n = n.set("embeds", D(t))),
        null != t.message_snapshots && (n = n.set("messageSnapshots", w(t))),
        t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)),
        null != n.webhookId && null != t.author && (n = n.set("author", new d.A(t.author))),
        null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)),
        null != t.components && (n = n.set("components", (0, s.ZV)(t.components))),
        null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)),
        null != t.reactions && (n = n.set("reactions", L(e.reactions ?? t.reactions))),
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
        r && (n = n.set("mentioned", (0, E.Ay)({ message: n, userId: _.default.getId() }))),
        n
    );
}
function R(e) {
    return null == e.attachments ? [] : e.attachments.map((e) => ({ ...e, spoiler: e.filename.startsWith(A._W) }));
}
function O(e, t) {
    if (null != e) {
        let n = null != e.ended_timestamp ? i()(new Date(e.ended_timestamp)) : null,
            r = null != n ? i().duration(n.diff(t)) : null;
        return { participants: e.participants, endedTimestamp: n, duration: r };
    }
    return null;
}
function D(e) {
    if (null == e.embeds) return [];
    let t = e.embeds.map((t) => (0, h.fK)(e.channel_id, e.id, t));
    return (0, h.nh)(t);
}
function L(e, t) {
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
function w(e) {
    return null == e.message_snapshots
        ? []
        : e.message_snapshots.map((e) => {
              let { message: t, moderator_report: n } = e;
              return new c.vF({ message: v(t), moderator_report: n });
          });
}
let x = (e) => 0 === (0, l.o6)(e).length || "" !== e.content;
function P(e) {
    return e.hasFlag(I.pr7.EPHEMERAL) && e.type !== I.lAJ.IN_GAME_MESSAGE_NUX;
}
