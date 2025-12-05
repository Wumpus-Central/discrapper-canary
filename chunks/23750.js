n.d(t, {
    Hx: () => m,
    ZP: () => E,
    hv: () => g,
    pi: () => _,
}),
    n(997841),
    n(539854);
var r = n(373793),
    i = n(95015),
    a = n(81825),
    o = n(978003),
    s = n(566006),
    l = n(995774),
    c = n(981631);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class _ extends a.Z {
    hasFlag(e) {
        return (0, i.yE)(this.flags, e);
    }
    constructor(e) {
        var t, n, r, i, a, o, s, l, d, f, p, _, m;
        super(),
            u(this, "type", void 0),
            u(this, "content", void 0),
            u(this, "attachments", void 0),
            u(this, "embeds", void 0),
            u(this, "timestamp", void 0),
            u(this, "editedTimestamp", void 0),
            u(this, "flags", void 0),
            u(this, "components", void 0),
            u(this, "codedLinks", void 0),
            u(this, "stickers", void 0),
            u(this, "stickerItems", void 0),
            u(this, "soundboardSounds", void 0),
            (this.type = null != (t = e.type) ? t : c.uaV.DEFAULT),
            (this.content = null != (n = e.content) ? n : ""),
            (this.attachments = null != (r = e.attachments) ? r : []),
            (this.embeds = null != (i = e.embeds) ? i : []),
            (this.timestamp = null != (a = e.timestamp) ? a : new Date()),
            (this.editedTimestamp = null != (o = e.editedTimestamp) ? o : null),
            (this.flags = null != (s = e.flags) ? s : 0),
            (this.components = null != (l = e.components) ? l : []),
            (this.codedLinks = null != (d = e.codedLinks) ? d : []),
            (this.stickers = null != (f = e.stickers) ? f : []),
            (this.stickerItems = null != (_ = null != (p = e.sticker_items) ? p : e.stickerItems) ? _ : []),
            (this.soundboardSounds = null != (m = e.soundboard_sounds) ? m : e.soundboardSounds);
    }
}
class m extends a.Z {
    constructor(e) {
        var t;
        super(),
            u(this, "message", void 0),
            u(this, "moderatorReport", void 0),
            (this.message = new _(e.message)),
            (this.moderatorReport = null != (t = e.moderator_report) ? t : null);
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
        return (0, o.Z)(this) ? this.messageSnapshots[0].message : this;
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
            a = this.reactions.map((a, o) => {
                if ((0, l.ir)(a.emoji, e))
                    if (((i = o), r === s.O.BURST)) {
                        if (t && a.me) return a;
                        let e = t && a.me_burst ? a.burst_count : a.burst_count + 1,
                            r = null != a.burst_colors && a.burst_colors.length > 0 ? a.burst_colors : n;
                        a = p(d({}, a), {
                            me_burst: !!t || a.me_burst,
                            burst_count: e,
                            count_details: p(d({}, a.count_details), { burst: e }),
                            burst_colors: r,
                        });
                    } else if (r === s.O.VOTE) {
                        var c, u;
                        let e = null != (u = null == (c = a.count_details) ? void 0 : c.vote) ? u : 0,
                            n = t && a.me_vote ? e : e + 1;
                        a = p(d({}, a), {
                            count_details: p(d({}, a.count_details), { vote: n }),
                            me_vote: !!t || a.me_vote,
                        });
                    } else {
                        if (t && a.me_burst) return a;
                        let e = t && a.me ? a.count : a.count + 1;
                        a = p(d({}, a), {
                            count: e,
                            count_details: p(d({}, a.count_details), { normal: e }),
                            me: !!t || a.me,
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
                              normal: 0,
                          },
                          burst_count: 1,
                          burst_colors: n,
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
                                vote: 1,
                            },
                            burst_count: 0,
                            burst_colors: [],
                        })
                      : a.push({
                            emoji: e,
                            me: t,
                            me_burst: !1,
                            count: 1,
                            count_details: {
                                burst: 0,
                                normal: 1,
                            },
                            burst_count: 0,
                            burst_colors: [],
                        })),
            this.set("reactions", a)
        );
    }
    addReactionBatch(e, t) {
        return e.reduce((e, n) => {
            let { users: r, emoji: i, reactionType: a } = n;
            return r.reduce((e, n) => e.addReaction(i, n === t, [], a), e);
        }, this);
    }
    removeReaction(e) {
        var t, n, r, i;
        let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.O.NORMAL,
            c = -1,
            u = this.reactions.map((t, n) => {
                if ((0, l.ir)(t.emoji, e)) {
                    if (o === s.O.BURST) {
                        let e = a && !t.me_burst ? t.burst_count : t.burst_count - 1;
                        t = p(d({}, t), {
                            burst_count: e,
                            me_burst: !a && t.me_burst,
                            count_details: p(d({}, t.count_details), { burst: e }),
                        });
                    } else if (o === s.O.VOTE) {
                        var r, i;
                        let e = null != (i = null == (r = t.count_details) ? void 0 : r.vote) ? i : 0,
                            n = a && !t.me_vote ? e : e - 1;
                        t = p(d({}, t), {
                            count_details: p(d({}, t.count_details), { vote: n }),
                            me_vote: !a && t.me_vote,
                        });
                    } else {
                        let e = a && !t.me ? t.count : t.count - 1;
                        t = p(d({}, t), {
                            count: e,
                            me: !a && t.me,
                            count_details: p(d({}, t.count_details), { normal: e }),
                        });
                    }
                    c = n;
                }
                return t;
            }),
            { count: f, burst_count: _, count_details: m } = null != (t = u[c]) ? t : {},
            h = null != (n = null == m ? void 0 : m.normal) ? n : 0,
            g = null != (r = null == m ? void 0 : m.burst) ? r : 0,
            E = null != (i = null == m ? void 0 : m.vote) ? i : 0;
        return -1 !== c && f <= 0 && _ <= 0 && h <= 0 && g <= 0 && E <= 0 && u.splice(c, 1), this.set("reactions", u);
    }
    removeReactionsForEmoji(e) {
        return this.set(
            "reactions",
            this.reactions.filter((t) => !(0, l.ir)(t.emoji, e)),
        );
    }
    isSystemDM() {
        return this.author.isSystemUser();
    }
    isCommandType() {
        return this.type === c.uaV.CHAT_INPUT_COMMAND || this.type === c.uaV.CONTEXT_MENU_COMMAND;
    }
    isPoll() {
        return null != this.poll;
    }
    hasPotions() {
        var e, t;
        return (null != (t = null == (e = this.potions) ? void 0 : e.length) ? t : 0) > 0;
    }
    isInteractionPlaceholder() {
        return null != this.interaction && this.author.isNonUserBot();
    }
    canDeleteOwnMessage(e) {
        var t, n, i;
        if (this.author.id === e) return !0;
        let a =
            null != (i = null == (t = this.interactionMetadata) ? void 0 : t.authorizing_integration_owners) ? i : {};
        return (
            (null == (n = this.interactionMetadata) ? void 0 : n.user.id) === e &&
            1 === Object.keys(a).length &&
            r.Y.USER_INSTALL in a
        );
    }
    toJS() {
        return p(d({}, this), {
            webkhook_id: this.webhookId,
            edited_timestamp: this.editedTimestamp,
            mention_everyone: this.mentionEveryone,
        });
    }
    isFirstMessageInForumPost(e) {
        return this.id === this.channel_id && e.isForumPost();
    }
    constructor(e) {
        var t, n, r;
        super(e),
            u(this, "id", void 0),
            u(this, "channel_id", void 0),
            u(this, "author", void 0),
            u(this, "bot", void 0),
            u(this, "customRenderedContent", void 0),
            u(this, "pinned", void 0),
            u(this, "mentions", void 0),
            u(this, "mentionRoles", void 0),
            u(this, "mentionChannels", void 0),
            u(this, "mentionGames", void 0),
            u(this, "mentionEveryone", void 0),
            u(this, "mentioned", void 0),
            u(this, "tts", void 0),
            u(this, "giftCodes", void 0),
            u(this, "state", void 0),
            u(this, "nonce", void 0),
            u(this, "blocked", void 0),
            u(this, "ignored", void 0),
            u(this, "call", void 0),
            u(this, "webhookId", void 0),
            u(this, "reactions", void 0),
            u(this, "applicationId", void 0),
            u(this, "application", void 0),
            u(this, "activity", void 0),
            u(this, "activityInstance", void 0),
            u(this, "interaction", void 0),
            u(this, "interactionData", void 0),
            u(this, "interactionMetadata", void 0),
            u(this, "interactionError", void 0),
            u(this, "messageReference", void 0),
            u(this, "isSearchHit", void 0),
            u(this, "roleSubscriptionData", void 0),
            u(this, "purchaseNotification", void 0),
            u(this, "poll", void 0),
            u(this, "sharedClientTheme", void 0),
            u(this, "potions", void 0),
            u(this, "loggingName", void 0),
            u(this, "referralTrialOfferId", void 0),
            u(this, "premiumGroupInviteId", void 0),
            u(this, "giftInfo", void 0),
            u(this, "giftingPrompt", void 0),
            u(this, "messageSnapshots", void 0),
            u(this, "isUnsupported", void 0),
            u(this, "changelogId", void 0),
            u(this, "colorString", void 0),
            u(this, "nick", void 0),
            (this.id = e.id),
            (this.channel_id = e.channel_id),
            (this.author = e.author),
            (this.customRenderedContent = e.customRenderedContent),
            (this.mentions = e.mentions || []),
            (this.mentionRoles = e.mentionRoles || []),
            (this.mentionChannels = e.mentionChannels || []),
            (this.mentionGames = e.mentionGames || []),
            (this.mentioned = e.mentioned || !1),
            (this.pinned = e.pinned || !1),
            (this.mentionEveryone = e.mentionEveryone || !1),
            (this.tts = e.tts || !1),
            (this.giftCodes = e.giftCodes || []),
            (this.state = e.state || c.yb.SENT),
            (this.nonce = null != (t = e.nonce) ? t : void 0),
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
            (this.potions = e.potions),
            (this.referralTrialOfferId = e.referralTrialOfferId || null),
            (this.premiumGroupInviteId = e.premiumGroupInviteId || null),
            (this.giftInfo = null != (n = e.gift_info) ? n : e.giftInfo),
            (this.giftingPrompt = e.giftingPrompt || null),
            (this.messageSnapshots = e.messageSnapshots || []),
            (this.isUnsupported = e.isUnsupported || !1),
            (this.changelogId = null != (r = e.changelog_id) ? r : e.changelogId || null);
    }
}
function g(e) {
    return (0, i.yE)(e.flags, c.iLy.IS_COMPONENTS_V2);
}
let E = h;
