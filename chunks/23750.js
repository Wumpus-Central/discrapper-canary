n.d(t, {
    Hx: () => p,
    ZP: () => m,
    pi: () => _
}),
    n(789020),
    n(653041),
    n(724458);
var i = n(373793),
    r = n(81825),
    a = n(712057),
    s = n(978003),
    o = n(566006),
    l = n(995774),
    u = n(630388),
    c = n(358085),
    d = n(981631);
function f(e, t, n) {
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
class _ extends r.Z {
    hasFlag(e) {
        return (0, u.yE)(this.flags, e);
    }
    constructor(e) {
        var t, n, i, r, a, s, o, l, u, c, _, p, h;
        super(), f(this, 'type', void 0), f(this, 'content', void 0), f(this, 'attachments', void 0), f(this, 'embeds', void 0), f(this, 'timestamp', void 0), f(this, 'editedTimestamp', void 0), f(this, 'flags', void 0), f(this, 'components', void 0), f(this, 'codedLinks', void 0), f(this, 'stickers', void 0), f(this, 'stickerItems', void 0), f(this, 'soundboardSounds', void 0), (this.type = null !== (t = e.type) && void 0 !== t ? t : d.uaV.DEFAULT), (this.content = null !== (n = e.content) && void 0 !== n ? n : ''), (this.attachments = null !== (i = e.attachments) && void 0 !== i ? i : []), (this.embeds = null !== (r = e.embeds) && void 0 !== r ? r : []), (this.timestamp = null !== (a = e.timestamp) && void 0 !== a ? a : new Date()), (this.editedTimestamp = null !== (s = e.editedTimestamp) && void 0 !== s ? s : null), (this.flags = null !== (o = e.flags) && void 0 !== o ? o : 0), (this.components = null !== (l = e.components) && void 0 !== l ? l : []), (this.codedLinks = null !== (u = e.codedLinks) && void 0 !== u ? u : []), (this.stickers = null !== (c = e.stickers) && void 0 !== c ? c : []), (this.stickerItems = null !== (p = null !== (_ = e.sticker_items) && void 0 !== _ ? _ : e.stickerItems) && void 0 !== p ? p : []), (this.soundboardSounds = null !== (h = e.soundboard_sounds) && void 0 !== h ? h : e.soundboardSounds);
    }
}
class p extends r.Z {
    constructor(e) {
        super(), f(this, 'message', void 0), (this.message = new _(e.message));
    }
}
class h extends _ {
    isEdited() {
        return null != this.editedTimestamp;
    }
    getChannelId() {
        return this.channel_id;
    }
    getReaction(e) {
        return this.reactions.find((t) => (0, l.ir)(t.emoji, e));
    }
    getContentMessage() {
        if ((0, s.Z)(this)) {
            var e;
            return null === (e = this.messageSnapshots[0]) || void 0 === e ? void 0 : e.message;
        }
        return this;
    }
    userHasReactedWithEmoji(e, t) {
        return this.reactions.some((n) => {
            if ((0, l.ir)(n.emoji, e)) return (t && n.me) || (!t && n.me_burst);
        });
    }
    addReaction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.O.NORMAL,
            r = -1,
            s = this.reactions.map((s, u) => {
                if ((0, l.ir)(s.emoji, e)) {
                    if (((r = u), i === o.O.BURST)) {
                        if (t && s.me) return s;
                        let e = t && s.me_burst ? s.burst_count : s.burst_count + 1,
                            i = null != s.burst_colors && s.burst_colors.length > 0 ? s.burst_colors : n;
                        s = {
                            ...s,
                            me_burst: !!t || s.me_burst,
                            burst_count: e,
                            count_details: {
                                ...s.count_details,
                                burst: e
                            },
                            burst_colors: i,
                            themedBurstColors: (0, a.u)({
                                colors: i,
                                shouldProcessMobileColors: (0, c.isIOS)()
                            })
                        };
                    } else if (i === o.O.VOTE) {
                        var d, f;
                        let e = null !== (f = null === (d = s.count_details) || void 0 === d ? void 0 : d.vote) && void 0 !== f ? f : 0,
                            n = t && s.me_vote ? e : e + 1;
                        s = {
                            ...s,
                            count_details: {
                                ...s.count_details,
                                vote: n
                            },
                            me_vote: !!t || s.me_vote
                        };
                    } else {
                        if (t && s.me_burst) return s;
                        let e = t && s.me ? s.count : s.count + 1;
                        s = {
                            ...s,
                            count: e,
                            count_details: {
                                ...s.count_details,
                                normal: e
                            },
                            me: !!t || s.me
                        };
                    }
                }
                return s;
            });
        return (
            -1 === r &&
                (i === o.O.BURST
                    ? s.push({
                          emoji: e,
                          me: !1,
                          me_burst: t,
                          count: 0,
                          count_details: {
                              burst: 1,
                              normal: 0
                          },
                          burst_count: 1,
                          burst_colors: n,
                          themedBurstColors: (0, a.u)({
                              colors: null != n ? n : [],
                              shouldProcessMobileColors: (0, c.isIOS)()
                          })
                      })
                    : i === o.O.VOTE
                      ? s.push({
                            emoji: e,
                            me: !1,
                            me_burst: !1,
                            me_vote: t,
                            count: 0,
                            count_details: {
                                burst: 0,
                                normal: 0,
                                vote: 1
                            },
                            burst_count: 0,
                            burst_colors: []
                        })
                      : s.push({
                            emoji: e,
                            me: t,
                            me_burst: !1,
                            count: 1,
                            count_details: {
                                burst: 0,
                                normal: 1
                            },
                            burst_count: 0,
                            burst_colors: []
                        })),
            this.set('reactions', s)
        );
    }
    addReactionBatch(e, t) {
        return e.reduce((e, n) => {
            let { users: i, emoji: r } = n;
            return i.reduce((e, n) => e.addReaction(r, n === t), e);
        }, this);
    }
    removeReaction(e) {
        var t, n, i, r;
        let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.O.NORMAL,
            u = -1,
            c = this.reactions.map((t, n) => {
                if ((0, l.ir)(t.emoji, e)) {
                    if (s === o.O.BURST) {
                        let e = a && !t.me_burst ? t.burst_count : t.burst_count - 1;
                        t = {
                            ...t,
                            burst_count: e,
                            me_burst: !a && t.me_burst,
                            count_details: {
                                ...t.count_details,
                                burst: e
                            }
                        };
                    } else if (s === o.O.VOTE) {
                        var i, r;
                        let e = null !== (r = null === (i = t.count_details) || void 0 === i ? void 0 : i.vote) && void 0 !== r ? r : 0,
                            n = a && !t.me_vote ? e : e - 1;
                        t = {
                            ...t,
                            count_details: {
                                ...t.count_details,
                                vote: n
                            },
                            me_vote: !a && t.me_vote
                        };
                    } else {
                        let e = a && !t.me ? t.count : t.count - 1;
                        t = {
                            ...t,
                            count: e,
                            me: !a && t.me,
                            count_details: {
                                ...t.count_details,
                                normal: e
                            }
                        };
                    }
                    u = n;
                }
                return t;
            }),
            { count: d, burst_count: f, count_details: _ } = null !== (t = c[u]) && void 0 !== t ? t : {},
            p = null !== (n = null == _ ? void 0 : _.normal) && void 0 !== n ? n : 0,
            h = null !== (i = null == _ ? void 0 : _.burst) && void 0 !== i ? i : 0,
            m = null !== (r = null == _ ? void 0 : _.vote) && void 0 !== r ? r : 0;
        return -1 !== u && d <= 0 && f <= 0 && p <= 0 && h <= 0 && m <= 0 && c.splice(u, 1), this.set('reactions', c);
    }
    removeReactionsForEmoji(e) {
        return this.set(
            'reactions',
            this.reactions.filter((t) => !(0, l.ir)(t.emoji, e))
        );
    }
    isSystemDM() {
        return this.author.isSystemUser();
    }
    isCommandType() {
        return this.type === d.uaV.CHAT_INPUT_COMMAND || this.type === d.uaV.CONTEXT_MENU_COMMAND;
    }
    isPoll() {
        return null != this.poll;
    }
    hasPotions() {
        var e, t;
        return (null !== (t = null === (e = this.potions) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0) > 0;
    }
    isComponentsV2() {
        return (0, u.yE)(this.flags, d.iLy.IS_COMPONENTS_V2);
    }
    isInteractionPlaceholder() {
        return null != this.interaction && this.author.isNonUserBot();
    }
    canDeleteOwnMessage(e) {
        var t, n, r;
        if (this.author.id === e) return !0;
        let a = null !== (r = null === (t = this.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners) && void 0 !== r ? r : {};
        return (null === (n = this.interactionMetadata) || void 0 === n ? void 0 : n.user.id) === e && 1 === Object.keys(a).length && i.Y.USER_INSTALL in a;
    }
    toJS() {
        return {
            ...this,
            webkhook_id: this.webhookId,
            edited_timestamp: this.editedTimestamp,
            mention_everyone: this.mentionEveryone
        };
    }
    isFirstMessageInForumPost(e) {
        return this.id === this.channel_id && e.isForumPost();
    }
    constructor(e) {
        var t, n;
        super(e), f(this, 'id', void 0), f(this, 'channel_id', void 0), f(this, 'author', void 0), f(this, 'bot', void 0), f(this, 'customRenderedContent', void 0), f(this, 'pinned', void 0), f(this, 'mentions', void 0), f(this, 'mentionRoles', void 0), f(this, 'mentionChannels', void 0), f(this, 'mentionEveryone', void 0), f(this, 'mentioned', void 0), f(this, 'tts', void 0), f(this, 'giftCodes', void 0), f(this, 'state', void 0), f(this, 'nonce', void 0), f(this, 'blocked', void 0), f(this, 'ignored', void 0), f(this, 'call', void 0), f(this, 'webhookId', void 0), f(this, 'reactions', void 0), f(this, 'applicationId', void 0), f(this, 'application', void 0), f(this, 'activity', void 0), f(this, 'activityInstance', void 0), f(this, 'interaction', void 0), f(this, 'interactionData', void 0), f(this, 'interactionMetadata', void 0), f(this, 'interactionError', void 0), f(this, 'messageReference', void 0), f(this, 'isSearchHit', void 0), f(this, 'roleSubscriptionData', void 0), f(this, 'purchaseNotification', void 0), f(this, 'poll', void 0), f(this, 'potions', void 0), f(this, 'loggingName', void 0), f(this, 'referralTrialOfferId', void 0), f(this, 'giftInfo', void 0), f(this, 'giftingPrompt', void 0), f(this, 'messageSnapshots', void 0), f(this, 'isUnsupported', void 0), f(this, 'changelogId', void 0), f(this, 'colorString', void 0), f(this, 'nick', void 0), (this.id = e.id), (this.channel_id = e.channel_id), (this.author = e.author), (this.customRenderedContent = e.customRenderedContent), (this.mentions = e.mentions || []), (this.mentionRoles = e.mentionRoles || []), (this.mentionChannels = e.mentionChannels || []), (this.mentioned = e.mentioned || !1), (this.pinned = e.pinned || !1), (this.mentionEveryone = e.mentionEveryone || !1), (this.tts = e.tts || !1), (this.giftCodes = e.giftCodes || []), (this.state = e.state || d.yb.SENT), (this.nonce = e.nonce || null), (this.blocked = e.blocked || !1), (this.ignored = e.ignored || !1), (this.call = e.call || null), (this.bot = e.bot || !1), (this.webhookId = e.webhookId || null), (this.reactions = e.reactions || []), (this.applicationId = e.application_id || e.applicationId || null), (this.application = e.application || null), (this.activity = e.activity || null), (this.activityInstance = e.activity_instance || e.activityInstance || null), (this.messageReference = e.messageReference || null), (this.isSearchHit = e.hit || e.isSearchHit || !1), (this.loggingName = e.loggingName || null), (this.colorString = e.colorString), (this.nick = e.nick), (this.interaction = e.interaction || null), (this.interactionData = e.interactionData || null), (this.interactionMetadata = e.interactionMetadata || null), (this.interactionError = e.interactionError || null), (this.roleSubscriptionData = e.roleSubscriptionData), (this.purchaseNotification = e.purchaseNotification), (this.poll = e.poll), (this.potions = e.potions), (this.referralTrialOfferId = e.referralTrialOfferId || null), (this.giftInfo = null !== (t = e.gift_info) && void 0 !== t ? t : e.giftInfo), (this.giftingPrompt = e.giftingPrompt || null), (this.messageSnapshots = e.messageSnapshots || []), (this.isUnsupported = e.isUnsupported || !1), (this.changelogId = null !== (n = e.changelog_id) && void 0 !== n ? n : e.changelogId || null);
    }
}
let m = h;
