"use strict";
n.d(t, { IU: () => O, SP: () => R, ec: () => P, rh: () => C, ei: () => w }), n(938796);
var i = n(989349),
    r = n.n(i),
    s = n(833291),
    a = n(814890);
function o(e) {
    return { ...e, expiry: r()(e.expiry) };
}
var l = n(68935),
    d = n(315069),
    _ = n(889227);
class u extends d.A {
    id;
    name;
    type;
    user;
    displayName;
    static createFromServer(e) {
        return new u({ ...e, user: new _.A(e.user) });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.name = e.name),
            (this.type = e.type),
            (this.user = e.user),
            (this.displayName = e.name_localized ?? e.name);
    }
}
var c = n(383233),
    E = n(495544),
    h = n(994500),
    m = n(287809),
    f = n(659674),
    g = n(45938),
    p = n(935208),
    A = n(451919);
n(763754);
var I = n(381941),
    T = n(652215);
let S = new _.A({ id: "???", username: "???" });
function N(e) {
    return new c.go({
        ...e,
        timestamp: new Date(e.timestamp),
        editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
        attachments: y(e),
        embeds: D(e),
        components: (0, a.ZV)(e.components ?? []),
        codedLinks: T.MRS.NON_PARSED.has(e.type) ? [] : (0, s.Ay)(e.content),
    });
}
function C(e) {
    let t,
        n,
        { reactions: i, interactionData: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        s = N(e),
        a = e.mentions?.map((e) => e.id) ?? [],
        l = e.mention_roles ?? [],
        d = e.mention_channels ?? [],
        f = e.message_reference,
        I =
            null == e.author
                ? S
                : null != e.webhook_id
                  ? new _.A(e.author)
                  : (m.default.getUser(e.author.id) ?? new _.A(e.author)),
        C = e?.gift_info,
        R = e.gifting_prompt,
        O = null != e.interaction ? u.createFromServer(e.interaction) : null,
        y = e.type === T.lAJ.THREAD_STARTER_MESSAGE ? e.referenced_message?.author?.id : void 0,
        D = e.content;
    return (
        e.type === T.lAJ.PREMIUM_REFERRAL &&
            ((t = p.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (D = "")),
        e.type === T.lAJ.PREMIUM_GROUP_INVITE &&
            ((n = p.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (D = "")),
        new c.Ay({
            ...e,
            ...null,
            ...s.toJS(),
            author: I,
            webhookId: e.webhook_id,
            blocked: h.A.isBlockedForMessage(e) || (null != y && h.A.isBlocked(y)),
            ignored: h.A.isIgnoredForMessage(e) || (null != y && h.A.isIgnored(y)),
            mentionEveryone: e.mention_everyone,
            mentions: a,
            mentionRoles: l,
            mentionChannels: d,
            messageReference: f,
            mentioned: (0, A.Uj)({
                userId: E.default.getId(),
                channelId: e.channel_id,
                mentionEveryone: e.mention_everyone ?? !1,
                mentionUsers: a,
                mentionRoles: l,
            }),
            giftCodes: (0, g.pF)(e) ? (0, g.e7)(e?.embeds[0].url) : (0, g.e7)(e.content),
            content: D,
            referralTrialOfferId: t,
            premiumGroupInviteId: n,
            call: v(e.call, s.timestamp),
            messageSnapshots: b(e),
            reactions: L(i ?? e.reactions, e.poll),
            interaction: O,
            interactionData: r ?? e.interaction_data,
            interactionMetadata: e.interaction_metadata,
            roleSubscriptionData: e.role_subscription_data,
            purchaseNotification: e.purchase_notification,
            poll: null == e.poll ? void 0 : o(e.poll),
            sharedClientTheme: e.shared_client_theme,
            giftInfo: null == C ? void 0 : C,
            giftingPrompt: R,
            boostingPrompt: e.boosting_prompt,
        })
    );
}
function R(e, t) {
    return null != t.edited_timestamp
        ? { ...t, reactions: e.reactions, interaction_data: e.interaction_data }
        : { ...e, ...t };
}
function O(e, t) {
    if (null != t.edited_timestamp) return C(t, { reactions: e.reactions, interactionData: e.interactionData });
    let n = e,
        i = !1;
    return (
        null != t.call && (n = n.set("call", v(t.call, e.timestamp))),
        null != t.attachments && (n = n.set("attachments", y(t))),
        null != t.application && (n = n.set("application", t.application)),
        null != t.activity && (n = n.set("activity", t.activity)),
        null != t.content && "" !== t.content && (n = n.set("content", t.content)),
        null != t.embeds && (n = n.set("embeds", D(t))),
        null != t.message_snapshots && (n = n.set("messageSnapshots", b(t))),
        t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)),
        null != n.webhookId && null != t.author && (n = n.set("author", new _.A(t.author))),
        null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)),
        null != t.components && (n = n.set("components", (0, a.ZV)(t.components))),
        null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)),
        null != t.reactions && (n = n.set("reactions", L(e.reactions ?? t.reactions))),
        null != t.poll && (n = n.set("poll", o(t.poll))),
        null != t.mentions &&
            ((n = n.set(
                "mentions",
                t.mentions.map((e) => e.id),
            )),
            (i = !0)),
        null != t.mention_everyone && ((n = n.set("mentionEveryone", t.mention_everyone)), (i = !0)),
        null != t.mention_roles && ((n = n.set("mentionRoles", t.mention_roles)), (i = !0)),
        i && (n = n.set("mentioned", (0, A.Ay)({ message: n, userId: E.default.getId() }))),
        n
    );
}
function y(e) {
    return null == e.attachments ? [] : e.attachments.map((e) => ({ ...e, spoiler: e.filename.startsWith(I._W) }));
}
function v(e, t) {
    if (null != e) {
        let n = null != e.ended_timestamp ? r()(new Date(e.ended_timestamp)) : null,
            i = null != n ? r().duration(n.diff(t)) : null;
        return { participants: e.participants, endedTimestamp: n, duration: i };
    }
    return null;
}
function D(e) {
    if (null == e.embeds) return [];
    let t = e.embeds.map((t) => (0, f.fK)(e.channel_id, e.id, t));
    return (0, f.nh)(t);
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
function b(e) {
    return null == e.message_snapshots
        ? []
        : e.message_snapshots.map((e) => {
              let { message: t, moderator_report: n } = e;
              return new c.vF({ message: N(t), moderator_report: n });
          });
}
let w = (e) => 0 === (0, l.o6)(e).length || "" !== e.content;
function P(e) {
    return e.hasFlag(T.pr7.EPHEMERAL) && e.type !== T.lAJ.IN_GAME_MESSAGE_NUX;
}
