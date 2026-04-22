"use strict";
n.d(t, { Ay: () => f, _c: () => _, go: () => d, vF: () => c }), n(938796), n(321073);
var r = n(485845),
    i = n(665260),
    s = n(315069),
    a = n(427930),
    o = n(505527),
    l = n(815807),
    u = n(652215);
class d extends s.A {
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
            (this.type = e.type ?? u.lAJ.DEFAULT),
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
        return (0, i.Lt)(this.flags, e);
    }
}
class c extends s.A {
    message;
    moderatorReport;
    constructor(e) {
        super(), (this.message = new d(e.message)), (this.moderatorReport = e.moderator_report ?? null);
    }
}
function _(e) {
    return (0, i.Lt)(e.flags, u.pr7.IS_COMPONENTS_V2);
}
let f = class extends d {
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
            (this.state = e.state || u.cmJ.SENT),
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
            (this.changelogId = e.changelog_id ?? (e.changelogId || null));
    }
    isEdited() {
        return null != this.editedTimestamp;
    }
    getChannelId() {
        return this.channel_id;
    }
    getReaction(e) {
        return this.reactions.find((t) => (0, l.i6)(t.emoji, e));
    }
    getContentMessage() {
        return (0, a.A)(this) ? this.messageSnapshots[0].message : this;
    }
    userHasReactedWithEmoji(e, t) {
        return this.reactions.some((n) => {
            if ((0, l.i6)(n.emoji, e)) return (t && n.me) || (!t && n.me_burst);
        });
    }
    addReaction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.v.NORMAL,
            i = -1,
            s = this.reactions.map((s, a) => {
                if ((0, l.i6)(s.emoji, e))
                    if (((i = a), r === o.v.BURST)) {
                        if (t && s.me_burst) return s;
                        let e = s.burst_count + 1,
                            r = null != s.burst_colors && s.burst_colors.length > 0 ? s.burst_colors : n;
                        s = {
                            ...s,
                            me_burst: !!t || s.me_burst,
                            burst_count: e,
                            count_details: { ...s.count_details, burst: e },
                            burst_colors: r,
                        };
                    } else if (r === o.v.VOTE) {
                        let e = s.count_details?.vote ?? 0,
                            n = t && s.me_vote ? e : e + 1;
                        s = { ...s, count_details: { ...s.count_details, vote: n }, me_vote: !!t || s.me_vote };
                    } else {
                        if (t && s.me) return s;
                        let e = s.count + 1;
                        s = { ...s, count: e, count_details: { ...s.count_details, normal: e }, me: !!t || s.me };
                    }
                return s;
            });
        return (
            -1 === i &&
                (r === o.v.BURST
                    ? s.push({
                          emoji: e,
                          me: !1,
                          me_burst: t,
                          count: 0,
                          count_details: { burst: 1, normal: 0 },
                          burst_count: 1,
                          burst_colors: n,
                      })
                    : r === o.v.VOTE
                      ? s.push({
                            emoji: e,
                            me: !1,
                            me_burst: !1,
                            me_vote: t,
                            count: 0,
                            count_details: { burst: 0, normal: 0, vote: 1 },
                            burst_count: 0,
                            burst_colors: [],
                        })
                      : s.push({
                            emoji: e,
                            me: t,
                            me_burst: !1,
                            count: 1,
                            count_details: { burst: 0, normal: 1 },
                            burst_count: 0,
                            burst_colors: [],
                        })),
            this.set("reactions", s)
        );
    }
    addReactionBatch(e, t) {
        return e.reduce((e, n) => {
            let { users: r, emoji: i, reactionType: s } = n;
            return r.reduce((e, n) => e.addReaction(i, n === t, [], s), e);
        }, this);
    }
    removeReaction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.v.NORMAL,
            r = -1,
            i = this.reactions.map((i, s) => {
                if ((0, l.i6)(i.emoji, e)) {
                    if (n === o.v.BURST) {
                        let e = t && !i.me_burst ? i.burst_count : i.burst_count - 1;
                        i = {
                            ...i,
                            burst_count: e,
                            me_burst: !t && i.me_burst,
                            count_details: { ...i.count_details, burst: e },
                        };
                    } else if (n === o.v.VOTE) {
                        let e = i.count_details?.vote ?? 0,
                            n = t && !i.me_vote ? e : e - 1;
                        i = { ...i, count_details: { ...i.count_details, vote: n }, me_vote: !t && i.me_vote };
                    } else {
                        let e = t && !i.me ? i.count : i.count - 1;
                        i = { ...i, count: e, me: !t && i.me, count_details: { ...i.count_details, normal: e } };
                    }
                    r = s;
                }
                return i;
            }),
            { count: s, burst_count: a, count_details: u } = i[r] ?? {},
            d = u?.normal ?? 0,
            c = u?.burst ?? 0,
            _ = u?.vote ?? 0;
        return -1 !== r && s <= 0 && a <= 0 && d <= 0 && c <= 0 && _ <= 0 && i.splice(r, 1), this.set("reactions", i);
    }
    removeReactionsForEmoji(e) {
        return this.set(
            "reactions",
            this.reactions.filter((t) => !(0, l.i6)(t.emoji, e)),
        );
    }
    isSystemDM() {
        return this.author.isSystemUser();
    }
    isCommandType() {
        return this.type === u.lAJ.CHAT_INPUT_COMMAND || this.type === u.lAJ.CONTEXT_MENU_COMMAND;
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
        return this.interactionMetadata?.user.id === e && 1 === Object.keys(t).length && r.b.USER_INSTALL in t;
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
