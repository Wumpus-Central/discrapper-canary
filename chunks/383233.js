"use strict";
n.d(t, { Ay: () => E, _c: () => _, go: () => c, vF: () => u }), n(938796), n(321073);
var i = n(485845),
    r = n(665260),
    a = n(315069),
    s = n(427930),
    l = n(505527),
    o = n(815807),
    d = n(652215);
class c extends a.A {
    type;
    content;
    attachments;
    embeds;
    timestamp;
    editedTimestamp;
    flags;
    components;
    codedLinks;
    stickers;
    stickerItems;
    soundboardSounds;
    constructor(e) {
        super(),
            (this.type = e.type ?? d.lAJ.DEFAULT),
            (this.content = e.content ?? ""),
            (this.attachments = e.attachments ?? []),
            (this.embeds = e.embeds ?? []),
            (this.timestamp = e.timestamp ?? new Date()),
            (this.editedTimestamp = e.editedTimestamp ?? null),
            (this.flags = e.flags ?? 0),
            (this.components = e.components ?? []),
            (this.codedLinks = e.codedLinks ?? []),
            (this.stickers = e.stickers ?? []),
            (this.stickerItems = e.sticker_items ?? e.stickerItems ?? []),
            (this.soundboardSounds = e.soundboard_sounds ?? e.soundboardSounds);
    }
    hasFlag(e) {
        return (0, r.Lt)(this.flags, e);
    }
}
class u extends a.A {
    message;
    moderatorReport;
    constructor(e) {
        super(), (this.message = new c(e.message)), (this.moderatorReport = e.moderator_report ?? null);
    }
}
function _(e) {
    return (0, r.Lt)(e.flags, d.pr7.IS_COMPONENTS_V2);
}
let E = class extends c {
    id;
    channel_id;
    author;
    bot;
    customRenderedContent;
    pinned;
    mentions;
    mentionRoles;
    mentionChannels;
    mentionEveryone;
    mentioned;
    tts;
    giftCodes;
    state;
    nonce;
    blocked;
    ignored;
    call;
    webhookId;
    reactions;
    applicationId;
    application;
    activity;
    activityInstance;
    interaction;
    interactionData;
    interactionMetadata;
    interactionError;
    messageReference;
    isSearchHit;
    roleSubscriptionData;
    purchaseNotification;
    poll;
    sharedClientTheme;
    loggingName;
    referralTrialOfferId;
    premiumGroupInviteId;
    giftInfo;
    giftingPrompt;
    boostingPrompt;
    messageSnapshots;
    isUnsupported;
    changelogId;
    mediaMention;
    additionalName;
    colorString;
    nick;
    constructor(e) {
        super(e),
            (this.id = e.id),
            (this.channel_id = e.channel_id),
            (this.author = e.author),
            (this.customRenderedContent = e.customRenderedContent),
            (this.mentions = e.mentions || []),
            (this.mentionRoles = e.mentionRoles || []),
            (this.mentionChannels = e.mentionChannels || []),
            (this.mentioned = e.mentioned || !1),
            (this.pinned = e.pinned || !1),
            (this.mentionEveryone = e.mentionEveryone || !1),
            (this.tts = e.tts || !1),
            (this.giftCodes = e.giftCodes || []),
            (this.state = e.state || d.cmJ.SENT),
            (this.nonce = e.nonce ?? void 0),
            (this.blocked = e.blocked || !1),
            (this.ignored = e.ignored || !1),
            (this.call = e.call || null),
            (this.bot = e.bot || !1),
            (this.webhookId = e.webhookId || null),
            (this.reactions = e.reactions || []),
            (this.applicationId = e.application_id || e.applicationId || null),
            (this.application = e.application || null),
            (this.activity = e.activity || null),
            (this.activityInstance = e.activity_instance || e.activityInstance || null),
            (this.messageReference = e.messageReference || null),
            (this.isSearchHit = e.hit || e.isSearchHit || !1),
            (this.loggingName = e.loggingName || null),
            (this.colorString = e.colorString),
            (this.nick = e.nick),
            (this.interaction = e.interaction || null),
            (this.interactionData = e.interactionData || null),
            (this.interactionMetadata = e.interactionMetadata || null),
            (this.interactionError = e.interactionError || null),
            (this.roleSubscriptionData = e.roleSubscriptionData),
            (this.purchaseNotification = e.purchaseNotification),
            (this.poll = e.poll),
            (this.sharedClientTheme = e.shared_client_theme || e.sharedClientTheme),
            (this.referralTrialOfferId = e.referralTrialOfferId || null),
            (this.premiumGroupInviteId = e.premiumGroupInviteId || null),
            (this.giftInfo = e.gift_info ?? e.giftInfo),
            (this.giftingPrompt = e.giftingPrompt || null),
            (this.boostingPrompt = e.boostingPrompt || null),
            (this.messageSnapshots = e.messageSnapshots || []),
            (this.isUnsupported = e.isUnsupported || !1),
            (this.changelogId = e.changelog_id ?? (e.changelogId || null)),
            (this.mediaMention = e.media_mention ?? e.mediaMention ?? null),
            (this.additionalName = e.lobby_member?.additional_name ?? e.additionalName ?? null);
    }
    isEdited() {
        return null != this.editedTimestamp;
    }
    getChannelId() {
        return this.channel_id;
    }
    getReaction(e) {
        return this.reactions.find((t) => (0, o.i6)(t.emoji, e));
    }
    getContentMessage() {
        return (0, s.A)(this) ? this.messageSnapshots[0].message : this;
    }
    userHasReactedWithEmoji(e, t) {
        return this.reactions.some((n) => {
            if ((0, o.i6)(n.emoji, e)) return (t && n.me) || (!t && n.me_burst);
        });
    }
    addReaction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { colors: i = [], reactionType: r = l.v.NORMAL, isDMChannel: a = !1 } = n,
            s = -1,
            d = this.reactions.map((n, d) => {
                if ((0, o.i6)(n.emoji, e)) {
                    if (((s = d), a && !t)) {
                        let e = n.count - !!n.me >= 1,
                            t = n.burst_count - !!n.me_burst >= 1,
                            i = (n.count_details?.vote ?? 0) - !!n.me_vote >= 1;
                        if ((r === l.v.NORMAL && e) || (r === l.v.BURST && t) || (r === l.v.VOTE && i)) return n;
                    }
                    if (r === l.v.BURST) {
                        if (t && n.me_burst) return n;
                        let e = n.burst_count + 1,
                            r = null != n.burst_colors && n.burst_colors.length > 0 ? n.burst_colors : i;
                        n = {
                            ...n,
                            me_burst: !!t || n.me_burst,
                            burst_count: e,
                            count_details: { ...n.count_details, burst: e },
                            burst_colors: r,
                        };
                    } else if (r === l.v.VOTE) {
                        let e = n.count_details?.vote ?? 0,
                            i = t && n.me_vote ? e : e + 1;
                        n = { ...n, count_details: { ...n.count_details, vote: i }, me_vote: !!t || n.me_vote };
                    } else {
                        if (t && n.me) return n;
                        let e = n.count + 1;
                        n = { ...n, count: e, count_details: { ...n.count_details, normal: e }, me: !!t || n.me };
                    }
                }
                return n;
            });
        return (
            -1 === s &&
                (r === l.v.BURST
                    ? d.push({
                          emoji: e,
                          me: !1,
                          me_burst: t,
                          count: 0,
                          count_details: { burst: 1, normal: 0 },
                          burst_count: 1,
                          burst_colors: i,
                      })
                    : r === l.v.VOTE
                      ? d.push({
                            emoji: e,
                            me: !1,
                            me_burst: !1,
                            me_vote: t,
                            count: 0,
                            count_details: { burst: 0, normal: 0, vote: 1 },
                            burst_count: 0,
                            burst_colors: [],
                        })
                      : d.push({
                            emoji: e,
                            me: t,
                            me_burst: !1,
                            count: 1,
                            count_details: { burst: 0, normal: 1 },
                            burst_count: 0,
                            burst_colors: [],
                        })),
            this.set("reactions", d)
        );
    }
    addReactionBatch(e, t) {
        return e.reduce((e, n) => {
            let { users: i, emoji: r, reactionType: a } = n;
            return i.reduce((e, n) => e.addReaction(r, n === t, { reactionType: a }), e);
        }, this);
    }
    removeReaction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.v.NORMAL,
            i = -1,
            r = this.reactions.map((r, a) => {
                if ((0, o.i6)(r.emoji, e)) {
                    if (n === l.v.BURST) {
                        let e = t && !r.me_burst ? r.burst_count : r.burst_count - 1;
                        r = {
                            ...r,
                            burst_count: e,
                            me_burst: !t && r.me_burst,
                            count_details: { ...r.count_details, burst: e },
                        };
                    } else if (n === l.v.VOTE) {
                        let e = r.count_details?.vote ?? 0,
                            n = t && !r.me_vote ? e : e - 1;
                        r = { ...r, count_details: { ...r.count_details, vote: n }, me_vote: !t && r.me_vote };
                    } else {
                        let e = t && !r.me ? r.count : r.count - 1;
                        r = { ...r, count: e, me: !t && r.me, count_details: { ...r.count_details, normal: e } };
                    }
                    i = a;
                }
                return r;
            }),
            { count: a, burst_count: s, count_details: d } = r[i] ?? {},
            c = d?.normal ?? 0,
            u = d?.burst ?? 0,
            _ = d?.vote ?? 0;
        return -1 !== i && a <= 0 && s <= 0 && c <= 0 && u <= 0 && _ <= 0 && r.splice(i, 1), this.set("reactions", r);
    }
    removeReactionsForEmoji(e) {
        return this.set(
            "reactions",
            this.reactions.filter((t) => !(0, o.i6)(t.emoji, e)),
        );
    }
    isSystemDM() {
        return this.author.isSystemUser();
    }
    isCommandType() {
        return this.type === d.lAJ.CHAT_INPUT_COMMAND || this.type === d.lAJ.CONTEXT_MENU_COMMAND;
    }
    isPoll() {
        return null != this.poll;
    }
    isInteractionPlaceholder() {
        return null != this.interaction && this.author.isNonUserBot();
    }
    canDeleteOwnMessage(e) {
        if (this.author.id === e) return !0;
        let t = this.interactionMetadata?.authorizing_integration_owners ?? {};
        return this.interactionMetadata?.user.id === e && 1 === Object.keys(t).length && i.b.USER_INSTALL in t;
    }
    toJS() {
        return {
            ...this,
            webkhook_id: this.webhookId,
            edited_timestamp: this.editedTimestamp,
            mention_everyone: this.mentionEveryone,
        };
    }
    isFirstMessageInForumPost(e) {
        return this.id === this.channel_id && e.isForumPost();
    }
};
