(n.d(t, { IU: () => R, SP: () => O, ec: () => M, rh: () => C, ei: () => b }), n(938796));
var i = n(536637),
    r = n.n(i),
    a = n(721779),
    s = n(437517);
function l(e) {
    return { ...e, expiry: r()(e.expiry) };
}
var o = n(378058),
    d = n(315069),
    c = n(889227);
class u extends d.A {
    id;
    name;
    type;
    user;
    displayName;
    static createFromServer(e) {
        return new u({ ...e, user: new c.A(e.user) });
    }
    constructor(e) {
        (super(),
            (this.id = e.id),
            (this.name = e.name),
            (this.type = e.type),
            (this.user = e.user),
            (this.displayName = e.name_localized ?? e.name));
    }
}
var _ = n(383233),
    E = n(280450),
    A = n(994500),
    h = n(287809),
    f = n(659674),
    I = n(45938),
    p = n(935208),
    T = n(451919);
n(763754);
var m = n(652215);
let g = new c.A({ id: "???", username: "???" });
function S(e) {
    return h.default.getUser(e.id) ?? new c.A(e);
}
function N(e) {
    return new _.go({
        ...e,
        timestamp: new Date(e.timestamp),
        editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
        attachments: e.attachments ?? [],
        embeds: y(e),
        components: (0, s.ZV)(e.components ?? []),
        codedLinks: m.MRS.NON_PARSED.has(e.type) ? [] : (0, a.Ay)(e.content),
    });
}
function C(e) {
    let t,
        n,
        { reactions: i, interactionData: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = N(e),
        s = e.mentions?.map((e) => e.id) ?? [],
        o = e.mention_roles ?? [],
        d = e.mention_channels ?? [],
        h = e.message_reference,
        f = null == e.author ? g : null != e.webhook_id ? new c.A(e.author) : S(e.author),
        C = e?.gift_info,
        O = e.gifting_prompt,
        R = null != e.interaction ? u.createFromServer(e.interaction) : null,
        y = e.type === m.lAJ.THREAD_STARTER_MESSAGE ? e.referenced_message?.author?.id : void 0,
        b = e.content;
    return (
        e.type === m.lAJ.PREMIUM_REFERRAL &&
            ((t = p.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (b = "")),
        e.type === m.lAJ.PREMIUM_GROUP_INVITE &&
            ((n = p.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (b = "")),
        new _.Ay({
            ...e,
            ...null,
            ...a.toJS(),
            author: f,
            actor: null != e.actor ? S(e.actor) : null,
            webhookId: e.webhook_id,
            blocked: A.A.isBlockedForMessage(e) || (null != y && A.A.isBlocked(y)),
            ignored: A.A.isIgnoredForMessage(e) || (null != y && A.A.isIgnored(y)),
            mentionEveryone: e.mention_everyone,
            mentions: s,
            mentionRoles: o,
            mentionChannels: d,
            messageReference: h,
            mentioned: (0, T.Uj)({
                userId: E.default.getId(),
                channelId: e.channel_id,
                mentionEveryone: e.mention_everyone ?? !1,
                mentionUsers: s,
                mentionRoles: o,
            }),
            giftCodes: (0, I.pF)(e) ? (0, I.e7)(e?.embeds[0].url) : (0, I.e7)(e.content),
            content: b,
            referralTrialOfferId: t,
            premiumGroupInviteId: n,
            call: L(e.call, a.timestamp),
            messageSnapshots: v(e),
            reactions: D(i ?? e.reactions, e.poll),
            interaction: R,
            interactionData: r ?? e.interaction_data,
            interactionMetadata: e.interaction_metadata,
            roleSubscriptionData: e.role_subscription_data,
            purchaseNotification: e.purchase_notification,
            poll: null == e.poll ? void 0 : l(e.poll),
            sharedClientTheme: e.shared_client_theme,
            giftInfo: null == C ? void 0 : C,
            giftingPrompt: O,
            boostingPrompt: e.boosting_prompt,
            guildSpaceData: e.guild_space_data,
        })
    );
}
function O(e, t) {
    return null != t.edited_timestamp
        ? { ...t, reactions: e.reactions, interaction_data: e.interaction_data }
        : { ...e, ...t };
}
function R(e, t) {
    if (null != t.edited_timestamp) return C(t, { reactions: e.reactions, interactionData: e.interactionData });
    let n = e,
        i = !1;
    return (
        null != t.call && (n = n.set("call", L(t.call, e.timestamp))),
        null != t.attachments && (n = n.set("attachments", t.attachments)),
        null != t.application && (n = n.set("application", t.application)),
        null != t.activity && (n = n.set("activity", t.activity)),
        null != t.content && "" !== t.content && (n = n.set("content", t.content)),
        null != t.embeds && (n = n.set("embeds", y(t))),
        null != t.message_snapshots && (n = n.set("messageSnapshots", v(t))),
        t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)),
        null != n.webhookId && null != t.author && (n = n.set("author", new c.A(t.author))),
        null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)),
        null != t.components && (n = n.set("components", (0, s.ZV)(t.components))),
        null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)),
        null != t.reactions && (n = n.set("reactions", D(e.reactions ?? t.reactions))),
        null != t.poll && (n = n.set("poll", l(t.poll))),
        null != t.mentions &&
            ((n = n.set(
                "mentions",
                t.mentions.map((e) => e.id),
            )),
            (i = !0)),
        null != t.mention_everyone && ((n = n.set("mentionEveryone", t.mention_everyone)), (i = !0)),
        null != t.mention_roles && ((n = n.set("mentionRoles", t.mention_roles)), (i = !0)),
        i && (n = n.set("mentioned", (0, T.Ay)({ message: n, userId: E.default.getId() }))),
        n
    );
}
function L(e, t) {
    if (null != e) {
        let n = null != e.ended_timestamp ? r()(new Date(e.ended_timestamp)) : null,
            i = null != n ? r().duration(n.diff(t)) : null;
        return { participants: e.participants, endedTimestamp: n, duration: i };
    }
    return null;
}
function y(e) {
    if (null == e.embeds) return [];
    let t = e.embeds.map((t) => (0, f.fK)(e.channel_id, e.id, t));
    return (0, f.nh)(t);
}
function D(e, t) {
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
function v(e) {
    return null == e.message_snapshots
        ? []
        : e.message_snapshots.map((e) => {
              let { message: t, moderator_report: n } = e;
              return new _.vF({ message: N(t), moderator_report: n });
          });
}
function b(e) {
    return 0 === (0, o.o6)(e).length || "" !== e.content;
}
function M(e) {
    return e.hasFlag(m.pr7.EPHEMERAL) && e.type !== m.lAJ.IN_GAME_MESSAGE_NUX;
}
