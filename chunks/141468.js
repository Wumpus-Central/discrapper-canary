"use strict";
n.d(t, { IU: () => O, SP: () => N, ec: () => w, ei: () => L, rh: () => y }), n(938796);
var r = n(989349),
    i = n.n(r),
    s = n(833291),
    a = n(814890),
    o = n(143838),
    l = n(378058),
    u = n(399144),
    d = n(383233),
    c = n(427157),
    _ = n(961350),
    f = n(994500),
    E = n(287809),
    h = n(659674),
    p = n(45938),
    m = n(661191),
    g = n(451919);
n(763754);
var A = n(381941),
    I = n(652215);
let T = new c.A({ id: "???", username: "???" });
function S(e) {
    return new d.go({
        ...e,
        timestamp: new Date(e.timestamp),
        editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
        attachments: R(e),
        embeds: C(e),
        components: (0, a.ZV)(e.components ?? []),
        codedLinks: I.MRS.NON_PARSED.has(e.type) ? [] : (0, s.Ay)(e.content),
    });
}
function y(e) {
    let t,
        n,
        { reactions: r, interactionData: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        s = S(e),
        a = e.mentions?.map((e) => e.id) ?? [],
        l = e.mention_roles ?? [],
        h = e.mention_channels ?? [],
        A = e.message_reference,
        y =
            null == e.author
                ? T
                : null != e.webhook_id
                  ? new c.A(e.author)
                  : (E.default.getUser(e.author.id) ?? new c.A(e.author)),
        N = e?.gift_info,
        O = e.gifting_prompt,
        R = null != e.interaction ? u.A.createFromServer(e.interaction) : null,
        C = e.type === I.lAJ.THREAD_STARTER_MESSAGE ? e.referenced_message?.author?.id : void 0,
        L = e.content;
    return (
        e.type === I.lAJ.PREMIUM_REFERRAL &&
            ((t = m.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (L = "")),
        e.type === I.lAJ.PREMIUM_GROUP_INVITE &&
            ((n = m.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (L = "")),
        new d.Ay({
            ...e,
            ...null,
            ...s.toJS(),
            author: y,
            webhookId: e.webhook_id,
            blocked: f.A.isBlockedForMessage(e) || (null != C && f.A.isBlocked(C)),
            ignored: f.A.isIgnoredForMessage(e) || (null != C && f.A.isIgnored(C)),
            mentionEveryone: e.mention_everyone,
            mentions: a,
            mentionRoles: l,
            mentionChannels: h,
            messageReference: A,
            mentioned: (0, g.Uj)({
                userId: _.default.getId(),
                channelId: e.channel_id,
                mentionEveryone: e.mention_everyone ?? !1,
                mentionUsers: a,
                mentionRoles: l,
            }),
            giftCodes: (0, p.pF)(e) ? (0, p.e7)(e?.embeds[0].url) : (0, p.e7)(e.content),
            content: L,
            referralTrialOfferId: t,
            premiumGroupInviteId: n,
            call: v(e.call, s.timestamp),
            messageSnapshots: D(e),
            reactions: b(r ?? e.reactions, e.poll),
            interaction: R,
            interactionData: i ?? e.interaction_data,
            interactionMetadata: e.interaction_metadata,
            roleSubscriptionData: e.role_subscription_data,
            purchaseNotification: e.purchase_notification,
            poll: null == e.poll ? void 0 : (0, o.A)(e.poll),
            sharedClientTheme: e.shared_client_theme,
            giftInfo: null == N ? void 0 : N,
            giftingPrompt: O,
            boostingPrompt: e.boosting_prompt,
        })
    );
}
function N(e, t) {
    return null != t.edited_timestamp
        ? { ...t, reactions: e.reactions, interaction_data: e.interaction_data }
        : { ...e, ...t };
}
function O(e, t) {
    if (null != t.edited_timestamp) return y(t, { reactions: e.reactions, interactionData: e.interactionData });
    let n = e,
        r = !1;
    return (
        null != t.call && (n = n.set("call", v(t.call, e.timestamp))),
        null != t.attachments && (n = n.set("attachments", R(t))),
        null != t.application && (n = n.set("application", t.application)),
        null != t.activity && (n = n.set("activity", t.activity)),
        null != t.content && "" !== t.content && (n = n.set("content", t.content)),
        null != t.embeds && (n = n.set("embeds", C(t))),
        null != t.message_snapshots && (n = n.set("messageSnapshots", D(t))),
        t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)),
        null != n.webhookId && null != t.author && (n = n.set("author", new c.A(t.author))),
        null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)),
        null != t.components && (n = n.set("components", (0, a.ZV)(t.components))),
        null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)),
        null != t.reactions && (n = n.set("reactions", b(e.reactions ?? t.reactions))),
        null != t.poll && (n = n.set("poll", (0, o.A)(t.poll))),
        null != t.mentions &&
            ((n = n.set(
                "mentions",
                t.mentions.map((e) => e.id),
            )),
            (r = !0)),
        null != t.mention_everyone && ((n = n.set("mentionEveryone", t.mention_everyone)), (r = !0)),
        null != t.mention_roles && ((n = n.set("mentionRoles", t.mention_roles)), (r = !0)),
        r && (n = n.set("mentioned", (0, g.Ay)({ message: n, userId: _.default.getId() }))),
        n
    );
}
function R(e) {
    return null == e.attachments ? [] : e.attachments.map((e) => ({ ...e, spoiler: e.filename.startsWith(A._W) }));
}
function v(e, t) {
    if (null != e) {
        let n = null != e.ended_timestamp ? i()(new Date(e.ended_timestamp)) : null,
            r = null != n ? i().duration(n.diff(t)) : null;
        return { participants: e.participants, endedTimestamp: n, duration: r };
    }
    return null;
}
function C(e) {
    if (null == e.embeds) return [];
    let t = e.embeds.map((t) => (0, h.fK)(e.channel_id, e.id, t));
    return (0, h.nh)(t);
}
function b(e, t) {
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
function D(e) {
    return null == e.message_snapshots
        ? []
        : e.message_snapshots.map((e) => {
              let { message: t, moderator_report: n } = e;
              return new d.vF({ message: S(t), moderator_report: n });
          });
}
let L = (e) => 0 === (0, l.o6)(e).length || "" !== e.content;
function w(e) {
    return e.hasFlag(I.pr7.EPHEMERAL) && e.type !== I.lAJ.IN_GAME_MESSAGE_NUX;
}
