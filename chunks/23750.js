n.d(t, {
    Hx: () => E,
    ZP: () => y,
    pi: () => g
}),
    n(789020),
    n(653041);
var r = n(373793),
    i = n(81825),
    o = n(712057),
    a = n(978003),
    s = n(566006),
    l = n(995774),
    c = n(592125),
    u = n(630388),
    d = n(358085),
    f = n(981631);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class g extends i.Z {
    hasFlag(e) {
        return (0, u.yE)(this.flags, e);
    }
    constructor(e) {
        var t, n, r, i, o, a, s, l, c, u, d, p, h;
        super(), _(this, 'type', void 0), _(this, 'content', void 0), _(this, 'attachments', void 0), _(this, 'embeds', void 0), _(this, 'timestamp', void 0), _(this, 'editedTimestamp', void 0), _(this, 'flags', void 0), _(this, 'components', void 0), _(this, 'codedLinks', void 0), _(this, 'stickers', void 0), _(this, 'stickerItems', void 0), _(this, 'soundboardSounds', void 0), (this.type = null != (t = e.type) ? t : f.uaV.DEFAULT), (this.content = null != (n = e.content) ? n : ''), (this.attachments = null != (r = e.attachments) ? r : []), (this.embeds = null != (i = e.embeds) ? i : []), (this.timestamp = null != (o = e.timestamp) ? o : new Date()), (this.editedTimestamp = null != (a = e.editedTimestamp) ? a : null), (this.flags = null != (s = e.flags) ? s : 0), (this.components = null != (l = e.components) ? l : []), (this.codedLinks = null != (c = e.codedLinks) ? c : []), (this.stickers = null != (u = e.stickers) ? u : []), (this.stickerItems = null != (p = null != (d = e.sticker_items) ? d : e.stickerItems) ? p : []), (this.soundboardSounds = null != (h = e.soundboard_sounds) ? h : e.soundboardSounds);
    }
}
class E extends i.Z {
    constructor(e) {
        super(), _(this, 'message', void 0), (this.message = new g(e.message));
    }
}
class b extends g {
    isEdited() {
        return null != this.editedTimestamp;
    }
    getChannelId() {
        return this.channel_id;
    }
    getGuildId() {
        let e = c.Z.getChannel(this.channel_id);
        return null == e ? void 0 : e.getGuildId();
    }
    getReaction(e) {
        return this.reactions.find((t) => (0, l.ir)(t.emoji, e));
    }
    getContentMessage() {
        if ((0, a.Z)(this)) {
            var e;
            return null == (e = this.messageSnapshots[0]) ? void 0 : e.message;
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
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.O.NORMAL,
            i = -1,
            a = this.reactions.map((a, c) => {
                if ((0, l.ir)(a.emoji, e))
                    if (((i = c), r === s.O.BURST)) {
                        if (t && a.me) return a;
                        let e = t && a.me_burst ? a.burst_count : a.burst_count + 1,
                            r = null != a.burst_colors && a.burst_colors.length > 0 ? a.burst_colors : n;
                        a = m(p({}, a), {
                            me_burst: !!t || a.me_burst,
                            burst_count: e,
                            count_details: m(p({}, a.count_details), { burst: e }),
                            burst_colors: r,
                            themedBurstColors: (0, o.u)({
                                colors: r,
                                shouldProcessMobileColors: (0, d.isIOS)()
                            })
                        });
                    } else if (r === s.O.VOTE) {
                        var u, f;
                        let e = null != (f = null == (u = a.count_details) ? void 0 : u.vote) ? f : 0,
                            n = t && a.me_vote ? e : e + 1;
                        a = m(p({}, a), {
                            count_details: m(p({}, a.count_details), { vote: n }),
                            me_vote: !!t || a.me_vote
                        });
                    } else {
                        if (t && a.me_burst) return a;
                        let e = t && a.me ? a.count : a.count + 1;
                        a = m(p({}, a), {
                            count: e,
                            count_details: m(p({}, a.count_details), { normal: e }),
                            me: !!t || a.me
                        });
                    }
                return a;
            });
        return (
            -1 === i &&
                (r === s.O.BURST
                    ? a.push({
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
                          themedBurstColors: (0, o.u)({
                              colors: null != n ? n : [],
                              shouldProcessMobileColors: (0, d.isIOS)()
                          })
                      })
                    : r === s.O.VOTE
                      ? a.push({
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
                      : a.push({
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
            this.set('reactions', a)
        );
    }
    addReactionBatch(e, t) {
        return e.reduce((e, n) => {
            let { users: r, emoji: i } = n;
            return r.reduce((e, n) => e.addReaction(i, n === t), e);
        }, this);
    }
    removeReaction(e) {
        var t, n, r, i;
        let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.O.NORMAL,
            c = -1,
            u = this.reactions.map((t, n) => {
                if ((0, l.ir)(t.emoji, e)) {
                    if (a === s.O.BURST) {
                        let e = o && !t.me_burst ? t.burst_count : t.burst_count - 1;
                        t = m(p({}, t), {
                            burst_count: e,
                            me_burst: !o && t.me_burst,
                            count_details: m(p({}, t.count_details), { burst: e })
                        });
                    } else if (a === s.O.VOTE) {
                        var r, i;
                        let e = null != (i = null == (r = t.count_details) ? void 0 : r.vote) ? i : 0,
                            n = o && !t.me_vote ? e : e - 1;
                        t = m(p({}, t), {
                            count_details: m(p({}, t.count_details), { vote: n }),
                            me_vote: !o && t.me_vote
                        });
                    } else {
                        let e = o && !t.me ? t.count : t.count - 1;
                        t = m(p({}, t), {
                            count: e,
                            me: !o && t.me,
                            count_details: m(p({}, t.count_details), { normal: e })
                        });
                    }
                    c = n;
                }
                return t;
            }),
            { count: d, burst_count: f, count_details: _ } = null != (t = u[c]) ? t : {},
            h = null != (n = null == _ ? void 0 : _.normal) ? n : 0,
            g = null != (r = null == _ ? void 0 : _.burst) ? r : 0,
            E = null != (i = null == _ ? void 0 : _.vote) ? i : 0;
        return -1 !== c && d <= 0 && f <= 0 && h <= 0 && g <= 0 && E <= 0 && u.splice(c, 1), this.set('reactions', u);
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
        return this.type === f.uaV.CHAT_INPUT_COMMAND || this.type === f.uaV.CONTEXT_MENU_COMMAND;
    }
    isPoll() {
        return null != this.poll;
    }
    hasPotions() {
        var e, t;
        return (null != (t = null == (e = this.potions) ? void 0 : e.length) ? t : 0) > 0;
    }
    isComponentsV2() {
        return (0, u.yE)(this.flags, f.iLy.IS_COMPONENTS_V2);
    }
    isInteractionPlaceholder() {
        return null != this.interaction && this.author.isNonUserBot();
    }
    canDeleteOwnMessage(e) {
        var t, n, i;
        if (this.author.id === e) return !0;
        let o = null != (i = null == (t = this.interactionMetadata) ? void 0 : t.authorizing_integration_owners) ? i : {};
        return (null == (n = this.interactionMetadata) ? void 0 : n.user.id) === e && 1 === Object.keys(o).length && r.Y.USER_INSTALL in o;
    }
    toJS() {
        return m(p({}, this), {
            webkhook_id: this.webhookId,
            edited_timestamp: this.editedTimestamp,
            mention_everyone: this.mentionEveryone
        });
    }
    isFirstMessageInForumPost(e) {
        return this.id === this.channel_id && e.isForumPost();
    }
    constructor(e) {
        var t, n;
        super(e), _(this, 'id', void 0), _(this, 'channel_id', void 0), _(this, 'author', void 0), _(this, 'bot', void 0), _(this, 'customRenderedContent', void 0), _(this, 'pinned', void 0), _(this, 'mentions', void 0), _(this, 'mentionRoles', void 0), _(this, 'mentionChannels', void 0), _(this, 'mentionEveryone', void 0), _(this, 'mentioned', void 0), _(this, 'tts', void 0), _(this, 'giftCodes', void 0), _(this, 'state', void 0), _(this, 'nonce', void 0), _(this, 'blocked', void 0), _(this, 'ignored', void 0), _(this, 'call', void 0), _(this, 'webhookId', void 0), _(this, 'reactions', void 0), _(this, 'applicationId', void 0), _(this, 'application', void 0), _(this, 'activity', void 0), _(this, 'activityInstance', void 0), _(this, 'interaction', void 0), _(this, 'interactionData', void 0), _(this, 'interactionMetadata', void 0), _(this, 'interactionError', void 0), _(this, 'messageReference', void 0), _(this, 'isSearchHit', void 0), _(this, 'roleSubscriptionData', void 0), _(this, 'purchaseNotification', void 0), _(this, 'poll', void 0), _(this, 'potions', void 0), _(this, 'loggingName', void 0), _(this, 'referralTrialOfferId', void 0), _(this, 'giftInfo', void 0), _(this, 'giftingPrompt', void 0), _(this, 'messageSnapshots', void 0), _(this, 'isUnsupported', void 0), _(this, 'changelogId', void 0), _(this, 'chatWallpaperInfo', void 0), _(this, 'colorString', void 0), _(this, 'nick', void 0), (this.id = e.id), (this.channel_id = e.channel_id), (this.author = e.author), (this.customRenderedContent = e.customRenderedContent), (this.mentions = e.mentions || []), (this.mentionRoles = e.mentionRoles || []), (this.mentionChannels = e.mentionChannels || []), (this.mentioned = e.mentioned || !1), (this.pinned = e.pinned || !1), (this.mentionEveryone = e.mentionEveryone || !1), (this.tts = e.tts || !1), (this.giftCodes = e.giftCodes || []), (this.state = e.state || f.yb.SENT), (this.nonce = e.nonce || null), (this.blocked = e.blocked || !1), (this.ignored = e.ignored || !1), (this.call = e.call || null), (this.bot = e.bot || !1), (this.webhookId = e.webhookId || null), (this.reactions = e.reactions || []), (this.applicationId = e.application_id || e.applicationId || null), (this.application = e.application || null), (this.activity = e.activity || null), (this.activityInstance = e.activity_instance || e.activityInstance || null), (this.messageReference = e.messageReference || null), (this.isSearchHit = e.hit || e.isSearchHit || !1), (this.loggingName = e.loggingName || null), (this.colorString = e.colorString), (this.nick = e.nick), (this.interaction = e.interaction || null), (this.interactionData = e.interactionData || null), (this.interactionMetadata = e.interactionMetadata || null), (this.interactionError = e.interactionError || null), (this.roleSubscriptionData = e.roleSubscriptionData), (this.purchaseNotification = e.purchaseNotification), (this.poll = e.poll), (this.potions = e.potions), (this.referralTrialOfferId = e.referralTrialOfferId || null), (this.giftInfo = null != (t = e.gift_info) ? t : e.giftInfo), (this.giftingPrompt = e.giftingPrompt || null), (this.messageSnapshots = e.messageSnapshots || []), (this.isUnsupported = e.isUnsupported || !1), (this.changelogId = null != (n = e.changelog_id) ? n : e.changelogId || null), (this.chatWallpaperInfo = e.chatWallpaperInfo || null);
    }
}
let y = b;
