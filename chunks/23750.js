r.d(n, {
    Hx: function () {
        return E;
    },
    pi: function () {
        return g;
    }
});
var i = r(789020);
var a = r(653041);
var o = r(724458);
var s = r(373793),
    l = r(81825),
    u = r(712057),
    c = r(978003),
    d = r(566006),
    f = r(995774),
    p = r(630388),
    h = r(358085),
    _ = r(981631);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class g extends l.Z {
    hasFlag(e) {
        return (0, p.yE)(this.flags, e);
    }
    constructor(e) {
        var n, r, i, a, o, s, l, u, c, d, f, p, h;
        super(), m(this, 'type', void 0), m(this, 'content', void 0), m(this, 'attachments', void 0), m(this, 'embeds', void 0), m(this, 'timestamp', void 0), m(this, 'editedTimestamp', void 0), m(this, 'flags', void 0), m(this, 'components', void 0), m(this, 'codedLinks', void 0), m(this, 'stickers', void 0), m(this, 'stickerItems', void 0), m(this, 'soundboardSounds', void 0), (this.type = null !== (n = e.type) && void 0 !== n ? n : _.uaV.DEFAULT), (this.content = null !== (r = e.content) && void 0 !== r ? r : ''), (this.attachments = null !== (i = e.attachments) && void 0 !== i ? i : []), (this.embeds = null !== (a = e.embeds) && void 0 !== a ? a : []), (this.timestamp = null !== (o = e.timestamp) && void 0 !== o ? o : new Date()), (this.editedTimestamp = null !== (s = e.editedTimestamp) && void 0 !== s ? s : null), (this.flags = null !== (l = e.flags) && void 0 !== l ? l : 0), (this.components = null !== (u = e.components) && void 0 !== u ? u : []), (this.codedLinks = null !== (c = e.codedLinks) && void 0 !== c ? c : []), (this.stickers = null !== (d = e.stickers) && void 0 !== d ? d : []), (this.stickerItems = null !== (p = null !== (f = e.sticker_items) && void 0 !== f ? f : e.stickerItems) && void 0 !== p ? p : []), (this.soundboardSounds = null !== (h = e.soundboard_sounds) && void 0 !== h ? h : e.soundboardSounds);
    }
}
class E extends l.Z {
    constructor(e) {
        super(), m(this, 'message', void 0), (this.message = new g(e.message));
    }
}
class v extends g {
    isEdited() {
        return null != this.editedTimestamp;
    }
    getChannelId() {
        return this.channel_id;
    }
    getReaction(e) {
        return this.reactions.find((n) => (0, f.ir)(n.emoji, e));
    }
    getContentMessage() {
        if ((0, c.Z)(this)) {
            var e;
            return null === (e = this.messageSnapshots[0]) || void 0 === e ? void 0 : e.message;
        }
        return this;
    }
    userHasReactedWithEmoji(e, n) {
        return this.reactions.some((r) => {
            if ((0, f.ir)(r.emoji, e)) return (n && r.me) || (!n && r.me_burst);
        });
    }
    addReaction(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.O.NORMAL,
            a = -1,
            o = this.reactions.map((o, s) => {
                if ((0, f.ir)(o.emoji, e)) {
                    if (((a = s), i === d.O.BURST)) {
                        if (n && o.me) return o;
                        let e = n && o.me_burst ? o.burst_count : o.burst_count + 1,
                            i = null != o.burst_colors && o.burst_colors.length > 0 ? o.burst_colors : r;
                        o = {
                            ...o,
                            me_burst: !!n || o.me_burst,
                            burst_count: e,
                            count_details: {
                                ...o.count_details,
                                burst: e
                            },
                            burst_colors: i,
                            themedBurstColors: (0, u.u)({
                                colors: i,
                                shouldProcessMobileColors: (0, h.isIOS)()
                            })
                        };
                    } else if (i === d.O.VOTE) {
                        var l, c;
                        let e = null !== (c = null === (l = o.count_details) || void 0 === l ? void 0 : l.vote) && void 0 !== c ? c : 0,
                            r = n && o.me_vote ? e : e + 1;
                        o = {
                            ...o,
                            count_details: {
                                ...o.count_details,
                                vote: r
                            },
                            me_vote: !!n || o.me_vote
                        };
                    } else {
                        if (n && o.me_burst) return o;
                        let e = n && o.me ? o.count : o.count + 1;
                        o = {
                            ...o,
                            count: e,
                            count_details: {
                                ...o.count_details,
                                normal: e
                            },
                            me: !!n || o.me
                        };
                    }
                }
                return o;
            });
        return (
            -1 === a &&
                (i === d.O.BURST
                    ? o.push({
                          emoji: e,
                          me: !1,
                          me_burst: n,
                          count: 0,
                          count_details: {
                              burst: 1,
                              normal: 0
                          },
                          burst_count: 1,
                          burst_colors: r,
                          themedBurstColors: (0, u.u)({
                              colors: null != r ? r : [],
                              shouldProcessMobileColors: (0, h.isIOS)()
                          })
                      })
                    : i === d.O.VOTE
                      ? o.push({
                            emoji: e,
                            me: !1,
                            me_burst: !1,
                            me_vote: n,
                            count: 0,
                            count_details: {
                                burst: 0,
                                normal: 0,
                                vote: 1
                            },
                            burst_count: 0,
                            burst_colors: []
                        })
                      : o.push({
                            emoji: e,
                            me: n,
                            me_burst: !1,
                            count: 1,
                            count_details: {
                                burst: 0,
                                normal: 1
                            },
                            burst_count: 0,
                            burst_colors: []
                        })),
            this.set('reactions', o)
        );
    }
    addReactionBatch(e, n) {
        return e.reduce((e, r) => {
            let { users: i, emoji: a } = r;
            return i.reduce((e, r) => e.addReaction(a, r === n), e);
        }, this);
    }
    removeReaction(e) {
        var n, r, i, a;
        let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.O.NORMAL,
            l = -1,
            u = this.reactions.map((n, r) => {
                if ((0, f.ir)(n.emoji, e)) {
                    if (s === d.O.BURST) {
                        let e = o && !n.me_burst ? n.burst_count : n.burst_count - 1;
                        n = {
                            ...n,
                            burst_count: e,
                            me_burst: !o && n.me_burst,
                            count_details: {
                                ...n.count_details,
                                burst: e
                            }
                        };
                    } else if (s === d.O.VOTE) {
                        var i, a;
                        let e = null !== (a = null === (i = n.count_details) || void 0 === i ? void 0 : i.vote) && void 0 !== a ? a : 0,
                            r = o && !n.me_vote ? e : e - 1;
                        n = {
                            ...n,
                            count_details: {
                                ...n.count_details,
                                vote: r
                            },
                            me_vote: !o && n.me_vote
                        };
                    } else {
                        let e = o && !n.me ? n.count : n.count - 1;
                        n = {
                            ...n,
                            count: e,
                            me: !o && n.me,
                            count_details: {
                                ...n.count_details,
                                normal: e
                            }
                        };
                    }
                    l = r;
                }
                return n;
            }),
            { count: c, burst_count: p, count_details: h } = null !== (n = u[l]) && void 0 !== n ? n : {},
            _ = null !== (r = null == h ? void 0 : h.normal) && void 0 !== r ? r : 0,
            m = null !== (i = null == h ? void 0 : h.burst) && void 0 !== i ? i : 0,
            g = null !== (a = null == h ? void 0 : h.vote) && void 0 !== a ? a : 0;
        return -1 !== l && c <= 0 && p <= 0 && _ <= 0 && m <= 0 && g <= 0 && u.splice(l, 1), this.set('reactions', u);
    }
    removeReactionsForEmoji(e) {
        return this.set(
            'reactions',
            this.reactions.filter((n) => !(0, f.ir)(n.emoji, e))
        );
    }
    isSystemDM() {
        return this.author.isSystemUser();
    }
    isCommandType() {
        return this.type === _.uaV.CHAT_INPUT_COMMAND || this.type === _.uaV.CONTEXT_MENU_COMMAND;
    }
    isPoll() {
        return null != this.poll;
    }
    hasPotions() {
        var e, n;
        return (null !== (n = null === (e = this.potions) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) > 0;
    }
    isUIKitComponents() {
        return (0, p.yE)(this.flags, _.iLy.IS_UIKIT_COMPONENTS);
    }
    isInteractionPlaceholder() {
        return null != this.interaction && this.author.isNonUserBot();
    }
    canDeleteOwnMessage(e) {
        var n, r, i;
        if (this.author.id === e) return !0;
        let a = null !== (i = null === (n = this.interactionMetadata) || void 0 === n ? void 0 : n.authorizing_integration_owners) && void 0 !== i ? i : {};
        return (null === (r = this.interactionMetadata) || void 0 === r ? void 0 : r.user.id) === e && 1 === Object.keys(a).length && s.Y.USER_INSTALL in a;
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
        var n, r;
        super(e), m(this, 'id', void 0), m(this, 'channel_id', void 0), m(this, 'author', void 0), m(this, 'bot', void 0), m(this, 'customRenderedContent', void 0), m(this, 'pinned', void 0), m(this, 'mentions', void 0), m(this, 'mentionRoles', void 0), m(this, 'mentionChannels', void 0), m(this, 'mentionEveryone', void 0), m(this, 'mentioned', void 0), m(this, 'tts', void 0), m(this, 'giftCodes', void 0), m(this, 'state', void 0), m(this, 'nonce', void 0), m(this, 'blocked', void 0), m(this, 'ignored', void 0), m(this, 'call', void 0), m(this, 'webhookId', void 0), m(this, 'reactions', void 0), m(this, 'applicationId', void 0), m(this, 'application', void 0), m(this, 'activity', void 0), m(this, 'activityInstance', void 0), m(this, 'interaction', void 0), m(this, 'interactionData', void 0), m(this, 'interactionMetadata', void 0), m(this, 'interactionError', void 0), m(this, 'messageReference', void 0), m(this, 'isSearchHit', void 0), m(this, 'roleSubscriptionData', void 0), m(this, 'purchaseNotification', void 0), m(this, 'poll', void 0), m(this, 'potions', void 0), m(this, 'loggingName', void 0), m(this, 'referralTrialOfferId', void 0), m(this, 'giftInfo', void 0), m(this, 'giftingPrompt', void 0), m(this, 'messageSnapshots', void 0), m(this, 'isUnsupported', void 0), m(this, 'changelogId', void 0), m(this, 'colorString', void 0), m(this, 'nick', void 0), (this.id = e.id), (this.channel_id = e.channel_id), (this.author = e.author), (this.customRenderedContent = e.customRenderedContent), (this.mentions = e.mentions || []), (this.mentionRoles = e.mentionRoles || []), (this.mentionChannels = e.mentionChannels || []), (this.mentioned = e.mentioned || !1), (this.pinned = e.pinned || !1), (this.mentionEveryone = e.mentionEveryone || !1), (this.tts = e.tts || !1), (this.giftCodes = e.giftCodes || []), (this.state = e.state || _.yb.SENT), (this.nonce = e.nonce || null), (this.blocked = e.blocked || !1), (this.ignored = e.ignored || !1), (this.call = e.call || null), (this.bot = e.bot || !1), (this.webhookId = e.webhookId || null), (this.reactions = e.reactions || []), (this.applicationId = e.application_id || e.applicationId || null), (this.application = e.application || null), (this.activity = e.activity || null), (this.activityInstance = e.activity_instance || e.activityInstance || null), (this.messageReference = e.messageReference || null), (this.isSearchHit = e.hit || e.isSearchHit || !1), (this.loggingName = e.loggingName || null), (this.colorString = e.colorString), (this.nick = e.nick), (this.interaction = e.interaction || null), (this.interactionData = e.interactionData || null), (this.interactionMetadata = e.interactionMetadata || null), (this.interactionError = e.interactionError || null), (this.roleSubscriptionData = e.roleSubscriptionData), (this.purchaseNotification = e.purchaseNotification), (this.poll = e.poll), (this.potions = e.potions), (this.referralTrialOfferId = e.referralTrialOfferId || null), (this.giftInfo = null !== (n = e.gift_info) && void 0 !== n ? n : e.giftInfo), (this.giftingPrompt = e.giftingPrompt || null), (this.messageSnapshots = e.messageSnapshots || []), (this.isUnsupported = e.isUnsupported || !1), (this.changelogId = null !== (r = e.changelog_id) && void 0 !== r ? r : e.changelogId || null);
    }
}
n.ZP = v;
