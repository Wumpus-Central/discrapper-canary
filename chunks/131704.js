n.d(t, {
    $N: () => ei,
    AW: () => T,
    CG: () => ef,
    Ec: () => H,
    Em: () => z,
    Gz: () => e_,
    Km: () => P,
    Lr: () => L,
    Q5: () => Y,
    Qm: () => G,
    Sf: () => eg,
    TK: () => J,
    Ti: () => C,
    Um: () => er,
    X_: () => et,
    Y0: () => X,
    _H: () => eB,
    bc: () => j,
    bw: () => D,
    dF: () => Q,
    hv: () => M,
    iR: () => ea,
    jD: () => eU,
    kt: () => eF,
    mn: () => eD,
    nl: () => eE,
    oj: () => R,
    ov: () => $,
    q_: () => ej,
    r8: () => S,
    sR: () => U,
    tx: () => w,
    uC: () => W,
    vc: () => Z,
    vd: () => F,
    vg: () => en,
    xL: () => ee,
    zS: () => q,
    zi: () => A
}),
    n(388685),
    n(997841),
    n(642613);
var r = n(392711),
    i = n.n(r),
    a = n(31775),
    o = n.n(a),
    s = n(313361),
    l = n(697988),
    c = n(683860),
    u = n(149765),
    d = n(283693),
    f = n(860987),
    _ = n(146085),
    p = n(427679),
    h = n(630388),
    m = n(709054),
    g = n(981631),
    E = n(176505);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = new Set([g.d4z.GUILD_TEXT, g.d4z.GUILD_ANNOUNCEMENT, g.d4z.GUILD_STORE, g.d4z.ANNOUNCEMENT_THREAD, g.d4z.PUBLIC_THREAD, g.d4z.PRIVATE_THREAD, g.d4z.GUILD_DIRECTORY, g.d4z.GUILD_FORUM, g.d4z.GUILD_MEDIA, g.d4z.DM, g.d4z.GROUP_DM]);
function S(e) {
    return I.has(e);
}
let T = new Set([g.d4z.DM, g.d4z.GROUP_DM, g.d4z.GUILD_TEXT, g.d4z.GUILD_VOICE, g.d4z.GUILD_STAGE_VOICE, g.d4z.GUILD_CATEGORY, g.d4z.GUILD_ANNOUNCEMENT, g.d4z.GUILD_STORE, g.d4z.ANNOUNCEMENT_THREAD, g.d4z.PUBLIC_THREAD, g.d4z.PRIVATE_THREAD, g.d4z.GUILD_DIRECTORY, g.d4z.GUILD_FORUM, g.d4z.GUILD_MEDIA]),
    N = new Set([g.d4z.GUILD_TEXT, g.d4z.GUILD_ANNOUNCEMENT, g.d4z.ANNOUNCEMENT_THREAD, g.d4z.PUBLIC_THREAD, g.d4z.PRIVATE_THREAD]);
function A(e) {
    return N.has(e);
}
let C = new Set([g.d4z.GUILD_TEXT, g.d4z.GUILD_ANNOUNCEMENT, g.d4z.GUILD_FORUM, g.d4z.GUILD_MEDIA, g.d4z.GUILD_VOICE, g.d4z.GUILD_STAGE_VOICE]),
    R = new Set([g.d4z.GUILD_TEXT, g.d4z.GUILD_VOICE, g.d4z.GUILD_STAGE_VOICE, g.d4z.GUILD_CATEGORY, g.d4z.GUILD_ANNOUNCEMENT, g.d4z.GUILD_STORE, g.d4z.ANNOUNCEMENT_THREAD, g.d4z.PUBLIC_THREAD, g.d4z.PRIVATE_THREAD, g.d4z.GUILD_DIRECTORY, g.d4z.GUILD_FORUM, g.d4z.GUILD_MEDIA]);
function P(e) {
    return R.has(e);
}
g.d4z.GUILD_TEXT, g.d4z.GUILD_ANNOUNCEMENT, g.d4z.GUILD_FORUM, g.d4z.GUILD_MEDIA;
let w = new Set([g.d4z.GUILD_VOICE, g.d4z.GUILD_STAGE_VOICE]);
function D(e) {
    return 'SELECTABLE' !== e && w.has(e);
}
let L = new Set([g.d4z.GUILD_STAGE_VOICE]),
    x = new Set([g.d4z.DM, g.d4z.GROUP_DM]);
function M(e) {
    return x.has(e);
}
let k = new Set([g.d4z.GROUP_DM]);
function j(e) {
    return k.has(e);
}
let U = new Set([g.d4z.DM, g.d4z.GROUP_DM, g.d4z.GUILD_TEXT, g.d4z.GUILD_ANNOUNCEMENT, g.d4z.ANNOUNCEMENT_THREAD, g.d4z.PUBLIC_THREAD, g.d4z.PRIVATE_THREAD]);
function G(e) {
    return U.has(e);
}
let B = new Set([g.d4z.DM, g.d4z.GROUP_DM, g.d4z.GUILD_VOICE, g.d4z.GUILD_STAGE_VOICE, g.d4z.PUBLIC_THREAD, g.d4z.PRIVATE_THREAD]);
function F(e) {
    return B.has(e);
}
let V = new Set([g.d4z.GUILD_TEXT, g.d4z.GUILD_ANNOUNCEMENT, g.d4z.ANNOUNCEMENT_THREAD, g.d4z.PUBLIC_THREAD, g.d4z.PRIVATE_THREAD, g.d4z.GUILD_DIRECTORY, g.d4z.GUILD_FORUM, g.d4z.GUILD_MEDIA, g.d4z.DM, g.d4z.GROUP_DM]);
function Z(e) {
    return V.has(e);
}
let H = new Set([g.d4z.ANNOUNCEMENT_THREAD, g.d4z.PUBLIC_THREAD, g.d4z.PRIVATE_THREAD]),
    W = new Set([g.d4z.GUILD_TEXT, g.d4z.GUILD_ANNOUNCEMENT, g.d4z.GUILD_FORUM, g.d4z.GUILD_MEDIA]);
function Y(e) {
    return H.has(e);
}
let K = new Set([g.d4z.DM, g.d4z.GROUP_DM, g.d4z.GUILD_TEXT, g.d4z.GUILD_ANNOUNCEMENT, g.d4z.ANNOUNCEMENT_THREAD, g.d4z.PUBLIC_THREAD, g.d4z.PRIVATE_THREAD, g.d4z.GUILD_FORUM, g.d4z.GUILD_MEDIA, g.d4z.GUILD_DIRECTORY, g.d4z.GUILD_VOICE, g.d4z.GUILD_STAGE_VOICE]);
function z(e) {
    return K.has(e);
}
let q = new Set([g.d4z.GUILD_TEXT, g.d4z.GUILD_ANNOUNCEMENT, g.d4z.GUILD_STORE, g.d4z.GUILD_VOICE, g.d4z.GUILD_STAGE_VOICE, g.d4z.ANNOUNCEMENT_THREAD, g.d4z.PUBLIC_THREAD, g.d4z.PRIVATE_THREAD, g.d4z.GUILD_DIRECTORY, g.d4z.GUILD_FORUM, g.d4z.GUILD_MEDIA]),
    Q = new Set([g.d4z.GUILD_ANNOUNCEMENT, g.d4z.GUILD_CATEGORY, g.d4z.GUILD_STORE, g.d4z.GUILD_TEXT, g.d4z.GUILD_VOICE, g.d4z.GUILD_STAGE_VOICE, g.d4z.GUILD_DIRECTORY, g.d4z.GUILD_FORUM, g.d4z.GUILD_MEDIA]),
    X = new Set([g.d4z.GUILD_TEXT, g.d4z.GUILD_ANNOUNCEMENT]),
    J = new Set([g.d4z.GUILD_TEXT, g.d4z.GUILD_ANNOUNCEMENT, g.d4z.GUILD_FORUM, g.d4z.GUILD_MEDIA]),
    $ = new Set([g.d4z.GUILD_TEXT, g.d4z.GUILD_ANNOUNCEMENT, g.d4z.GUILD_FORUM, g.d4z.GUILD_MEDIA, g.d4z.GUILD_VOICE, g.d4z.GUILD_STAGE_VOICE]),
    ee = new Set([g.d4z.GUILD_ANNOUNCEMENT, g.d4z.GUILD_TEXT, g.d4z.GUILD_FORUM, g.d4z.GUILD_MEDIA, g.d4z.ANNOUNCEMENT_THREAD]),
    et = new Set([g.d4z.GUILD_TEXT, g.d4z.GUILD_FORUM, g.d4z.GUILD_MEDIA, g.d4z.ANNOUNCEMENT_THREAD, g.d4z.PUBLIC_THREAD, g.d4z.PRIVATE_THREAD, g.d4z.GUILD_VOICE, g.d4z.GUILD_STAGE_VOICE]),
    en = new Set([g.d4z.PUBLIC_THREAD, g.d4z.PRIVATE_THREAD, g.d4z.GUILD_VOICE, g.d4z.GUILD_STAGE_VOICE]),
    er = new Set([g.d4z.GUILD_TEXT, g.d4z.GUILD_FORUM, g.d4z.GUILD_MEDIA]),
    ei = new Set([g.d4z.GUILD_TEXT, g.d4z.GUILD_CATEGORY, g.d4z.GUILD_FORUM, g.d4z.GUILD_ANNOUNCEMENT]),
    ea = new Set([g.d4z.GUILD_TEXT, g.d4z.GUILD_ANNOUNCEMENT, g.d4z.GUILD_FORUM, g.d4z.GUILD_VOICE]);
function eo(e) {
    let t = {};
    return (
        null == e ||
            e.forEach((e) => {
                t[e.id] = {
                    id: e.id,
                    type: e.type,
                    allow: u.vB(e.allow),
                    deny: u.vB(e.deny)
                };
            }),
        t
    );
}
function es(e) {
    return null == e ? {} : i().reduce(e, (e, t) => ((e[t.id] = t.nick), e), {});
}
function el(e) {
    return null == e
        ? []
        : e.map((e) => ({
              id: e.id,
              name: e.name,
              emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
              emojiName: e.emoji_name,
              moderated: e.moderated
          }));
}
function ec(e) {
    return null != e
        ? {
              id: e.id,
              name: e.name
          }
        : void 0;
}
let eu = u.$e(g.Plq.CONNECT, g.Plq.VIEW_CHANNEL),
    ed = g.S7T.CONNECT | g.S7T.VIEW_CHANNEL;
function ef(e) {
    return D(e) ? eu : g.Plq.VIEW_CHANNEL;
}
function e_(e) {
    return D(e) ? ed : g.S7T.VIEW_CHANNEL;
}
class ep {
    constructor(e) {
        var t, n, r;
        b(this, 'id', void 0), b(this, 'type', void 0), b(this, 'name', void 0), b(this, 'guild_id', void 0), b(this, 'topic_', void 0), b(this, 'position_', void 0), b(this, 'permissionOverwrites_', void 0), b(this, 'bitrate_', void 0), b(this, 'rtcRegion', void 0), b(this, 'videoQualityMode', void 0), b(this, 'userLimit_', void 0), b(this, 'recipients', void 0), b(this, 'rawRecipients', void 0), b(this, 'ownerId', void 0), b(this, 'icon', void 0), b(this, 'application_id', void 0), b(this, 'nicks', void 0), b(this, 'nsfw_', void 0), b(this, 'parent_id', void 0), b(this, 'memberListId', void 0), b(this, 'rateLimitPerUser_', void 0), b(this, 'defaultThreadRateLimitPerUser', void 0), b(this, 'defaultAutoArchiveDuration', void 0), b(this, 'flags_', void 0), b(this, 'originChannelId', void 0), b(this, 'lastMessageId', void 0), b(this, 'lastPinTimestamp', void 0), b(this, 'availableTags', void 0), b(this, 'appliedTags', void 0), b(this, 'messageCount', void 0), b(this, 'memberCount', void 0), b(this, 'threadMetadata', void 0), b(this, 'memberIdsPreview', void 0), b(this, 'member', void 0), b(this, 'parentChannelThreadType', void 0), b(this, 'template', void 0), b(this, 'defaultReactionEmoji', void 0), b(this, 'isMessageRequest', void 0), b(this, 'isMessageRequestTimestamp', void 0), b(this, 'isSpam', void 0), b(this, 'totalMessageSent', void 0), b(this, 'defaultSortOrder', void 0), b(this, 'version', void 0), b(this, 'defaultForumLayout', void 0), b(this, 'defaultTagSetting', void 0), b(this, 'iconEmoji', void 0), b(this, 'themeColor', void 0), b(this, 'safetyWarnings', void 0), b(this, 'blockedUserWarningDismissed', void 0), b(this, 'recipientFlags', void 0), b(this, 'linkedLobby', void 0), b(this, 'hdStreamingUntil', void 0), b(this, 'hdStreamingBuyerId', void 0), b(this, 'wallpaper', void 0), (this.id = e.id), (this.type = null != (t = e.type) ? t : g.d4z.GUILD_TEXT), (this.name = null != (n = e.name) ? n : ''), (this.guild_id = null != (r = e.guild_id) ? r : null);
    }
}
function eh(e) {
    let t = e;
    return 'topic' in e && ((t.topic_ = e.topic), delete e.topic), 'position' in e && ((t.position_ = e.position), delete e.position), 'permissionOverwrites' in e && ((t.permissionOverwrites_ = e.permissionOverwrites), delete e.permissionOverwrites), 'bitrate' in e && ((t.bitrate_ = e.bitrate), delete e.bitrate), 'userLimit' in e && ((t.userLimit_ = e.userLimit), delete e.userLimit), 'nsfw' in e && ((t.nsfw_ = e.nsfw), delete e.nsfw), 'rateLimitPerUser' in e && ((t.rateLimitPerUser_ = e.rateLimitPerUser), delete e.rateLimitPerUser), 'flags' in e && ((t.flags_ = e.flags), delete e.flags), t;
}
let em = Object.freeze({});
class eg extends ep {
    get permissionOverwrites() {
        var e;
        return null != (e = this.permissionOverwrites_) ? e : em;
    }
    get topic() {
        var e;
        return null != (e = this.topic_) ? e : '';
    }
    get position() {
        var e;
        return null != (e = this.position_) ? e : 0;
    }
    get bitrate() {
        var e;
        return null != (e = this.bitrate_) ? e : g.epw;
    }
    get userLimit() {
        var e;
        return null != (e = this.userLimit_) ? e : 0;
    }
    get nsfw() {
        var e;
        return null != (e = this.nsfw_) && e;
    }
    get rateLimitPerUser() {
        var e;
        return null != (e = this.rateLimitPerUser_) ? e : 0;
    }
    get flags() {
        var e;
        return null != (e = this.flags_) ? e : 0;
    }
    toJS() {
        return y({}, this);
    }
    set(e, t) {
        return this.merge(eh({ [e]: t }));
    }
    merge(e) {
        let t = null,
            n = eh(e);
        for (let e in n) n.hasOwnProperty(e) && this[e] !== n[e] && (null == t && (t = this.toJS()), (t[e] = n[e]));
        return null != t ? new this.constructor(t) : this;
    }
    computeLurkerPermissionsAllowList() {
        if (this.isGuildStageVoice() && p.Z.isPublic(this.id)) return _.L_;
    }
    isNSFW() {
        return this.nsfw;
    }
    isManaged() {
        return null != this.application_id;
    }
    isPrivate() {
        return M(this.type);
    }
    isGroupDM() {
        return this.type === g.d4z.GROUP_DM;
    }
    isMultiUserDM() {
        return j(this.type);
    }
    isDM() {
        return this.type === g.d4z.DM;
    }
    isSystemDM() {
        return !1;
    }
    isArchivedThread() {
        var e;
        return this.isThread() && (null == (e = this.threadMetadata) ? void 0 : e.archived) === !0;
    }
    isLockedThread() {
        var e;
        return this.isThread() && (null == (e = this.threadMetadata) ? void 0 : e.locked) === !0;
    }
    isScheduledForDeletion() {
        return this.hasFlag(E.zZ.IS_SCHEDULED_FOR_DELETION);
    }
    isArchivedLockedThread() {
        var e, t;
        return H.has(this.type) && (null == (e = this.threadMetadata) ? void 0 : e.archived) === !0 && (null == (t = this.threadMetadata) ? void 0 : t.locked) === !0;
    }
    isForumPost() {
        return this.type === g.d4z.PUBLIC_THREAD && null != this.parentChannelThreadType && g.TPd.GUILD_THREADS_ONLY.has(this.parentChannelThreadType);
    }
    isRingable() {
        return g.TPd.CALLABLE.has(this.type) || this.type === g.d4z.GUILD_VOICE;
    }
    isCategory() {
        return this.type === g.d4z.GUILD_CATEGORY;
    }
    isVocal() {
        return F(this.type);
    }
    isGuildVocal() {
        return D(this.type);
    }
    isGuildVocalOrThread() {
        return this.isGuildVocal() || this.isVocalThread();
    }
    isGuildVoice() {
        return this.type === g.d4z.GUILD_VOICE;
    }
    isGuildStageVoice() {
        return this.type === g.d4z.GUILD_STAGE_VOICE;
    }
    isListenModeCapable() {
        return this.isGuildStageVoice();
    }
    isThread() {
        return Y(this.type);
    }
    isAnnouncementThread() {
        return this.type === g.d4z.ANNOUNCEMENT_THREAD;
    }
    isVocalThread() {
        return this.type === g.d4z.PUBLIC_THREAD || this.type === g.d4z.PRIVATE_THREAD;
    }
    isActiveThread() {
        var e;
        return this.isThread() && (null == (e = this.threadMetadata) ? void 0 : e.archived) !== !0;
    }
    isDirectory() {
        return this.type === g.d4z.GUILD_DIRECTORY;
    }
    isForumLikeChannel() {
        return this.isForumChannel() || this.isMediaChannel();
    }
    isForumChannel() {
        return this.type === g.d4z.GUILD_FORUM;
    }
    isMediaChannel() {
        return this.type === g.d4z.GUILD_MEDIA;
    }
    isMediaPost() {
        return this.type === g.d4z.PUBLIC_THREAD && this.parentChannelThreadType === g.d4z.GUILD_MEDIA;
    }
    isRoleSubscriptionTemplatePreviewChannel() {
        return this.hasFlag(E.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    }
    isOwner(e) {
        return this.ownerId === e;
    }
    getGuildId() {
        return this.guild_id;
    }
    getApplicationId() {
        return this.application_id;
    }
    getDefaultSortOrder() {
        var e;
        return null != (e = this.defaultSortOrder) ? e : c.z.LATEST_ACTIVITY;
    }
    getDefaultLayout() {
        return this.isMediaChannel() ? s.X.GRID : null == this.defaultForumLayout || this.defaultForumLayout === s.X.DEFAULT ? s.X.LIST : this.defaultForumLayout;
    }
    getDefaultTagSetting() {
        var e;
        return null != (e = this.defaultTagSetting) ? e : l.z.MATCH_SOME;
    }
    get accessPermissions() {
        return ef(this.type);
    }
    hasFlag(e) {
        return (0, h.yE)(this.flags, e);
    }
    get isHDStreamSplashed() {
        return null != this.hdStreamingUntil && new Date(this.hdStreamingUntil) > new Date();
    }
    get isChatWallpaperEnabled() {
        return this.isDM() || this.isMultiUserDM() || this.isGroupDM();
    }
}
class eE extends eg {
    static fromServer(e, t) {
        var n, r, i;
        let a = {
            application_id: e.application_id,
            appliedTags: e.applied_tags,
            availableTags: null != e.available_tags ? el(e.available_tags) : void 0,
            bitrate_: e.bitrate,
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultForumLayout: e.default_forum_layout,
            defaultReactionEmoji:
                null != e.default_reaction_emoji
                    ? {
                          emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
                          emojiName: e.default_reaction_emoji.emoji_name
                      }
                    : void 0,
            defaultSortOrder: e.default_sort_order,
            defaultTagSetting: e.default_tag_setting,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: null != (n = null != t ? t : e.guild_id) ? n : null,
            icon: e.icon,
            iconEmoji: ec(e.icon_emoji),
            id: e.id,
            isMessageRequest: e.is_message_request,
            isMessageRequestTimestamp: e.is_message_request_timestamp,
            isSpam: e.is_spam,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            member:
                null != e.member
                    ? {
                          flags: e.member.flags,
                          muted: e.member.muted,
                          muteConfig: e.member.mute_config,
                          joinTimestamp: e.member.join_timestamp
                      }
                    : void 0,
            memberCount: e.member_count,
            memberIdsPreview: e.member_ids_preview,
            memberListId: e.member_list_id,
            messageCount: e.message_count,
            name: null != (r = e.name) ? r : '',
            nicks: es(e.nicks),
            nsfw_: e.nsfw,
            originChannelId: e.origin_channel_id,
            ownerId: e.owner_id,
            parent_id: e.parent_id,
            parentChannelThreadType: void 0,
            permissionOverwrites_: eo(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user,
            rawRecipients: null != e.recipients ? e.recipients : [],
            recipients: null != e.recipients ? e.recipients.map((e) => e.id) : [],
            recipientFlags: e.recipient_flags,
            rtcRegion: e.rtc_region,
            safetyWarnings: e.safety_warnings,
            blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
            template: e.template,
            themeColor: e.theme_color,
            threadMetadata:
                null != e.thread_metadata
                    ? {
                          archived: e.thread_metadata.archived,
                          autoArchiveDuration: e.thread_metadata.auto_archive_duration,
                          archiveTimestamp: e.thread_metadata.archive_timestamp,
                          createTimestamp: e.thread_metadata.create_timestamp,
                          locked: e.thread_metadata.locked,
                          invitable: null == (i = e.thread_metadata.invitable) || i
                      }
                    : void 0,
            topic_: e.topic,
            totalMessageSent: e.total_message_sent,
            type: null != e.type ? e.type : g.d4z.UNKNOWN,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            wallpaper: (0, f.L)(e.wallpaper)
        };
        return (0, d.gh)(a, eE);
    }
    constructor(e) {
        super(e), (this.application_id = e.application_id), (this.appliedTags = e.appliedTags), (this.availableTags = e.availableTags), (this.bitrate_ = e.bitrate_), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultForumLayout = e.defaultForumLayout), (this.defaultReactionEmoji = e.defaultReactionEmoji), (this.defaultSortOrder = e.defaultSortOrder), (this.defaultTagSetting = e.defaultTagSetting), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.icon = e.icon), (this.iconEmoji = e.iconEmoji), (this.isMessageRequest = e.isMessageRequest), (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp), (this.isSpam = e.isSpam), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.member = e.member), (this.memberCount = e.memberCount), (this.memberIdsPreview = e.memberIdsPreview), (this.memberListId = e.memberListId), (this.messageCount = e.messageCount), (this.nicks = e.nicks), (this.nsfw_ = e.nsfw_), (this.originChannelId = e.originChannelId), (this.ownerId = e.ownerId), (this.parent_id = e.parent_id), (this.parentChannelThreadType = e.parentChannelThreadType), (this.permissionOverwrites_ = e.permissionOverwrites_), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rawRecipients = e.rawRecipients), (this.recipients = e.recipients), (this.recipientFlags = e.recipientFlags), (this.rtcRegion = e.rtcRegion), (this.safetyWarnings = e.safetyWarnings), (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed), (this.template = e.template), (this.themeColor = e.themeColor), (this.threadMetadata = e.threadMetadata), (this.topic_ = e.topic_), (this.userLimit_ = e.userLimit_), (this.version = e.version), (this.videoQualityMode = e.videoQualityMode), (this.linkedLobby = e.linkedLobby), (this.hdStreamingUntil = e.hdStreamingUntil), (this.hdStreamingBuyerId = e.hdStreamingBuyerId), (this.wallpaper = e.wallpaper);
    }
}
class eb extends eg {
    static fromServer(e, t) {
        var n, r, i, a;
        return eB({
            application_id: e.application_id,
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: null != (n = null != t ? t : e.guild_id) ? n : null,
            iconEmoji: ec(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null != (r = e.name) ? r : '',
            nsfw_: null != (i = e.nsfw) && i,
            originChannelId: e.origin_channel_id,
            parent_id: e.parent_id,
            permissionOverwrites_: eo(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null != (a = e.rate_limit_per_user) ? a : 0,
            rtcRegion: e.rtc_region,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : g.d4z.GUILD_VOICE,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id
        });
    }
    constructor(e) {
        var t;
        super(e), (this.application_id = e.application_id), (this.bitrate_ = e.bitrate_), (this.flags_ = e.flags_), (this.iconEmoji = e.iconEmoji), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.memberListId = e.memberListId), (this.nsfw_ = e.nsfw_), (this.originChannelId = e.originChannelId), (this.parent_id = e.parent_id), (this.permissionOverwrites_ = null != (t = e.permissionOverwrites_) ? t : {}), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rtcRegion = e.rtcRegion), (this.themeColor = e.themeColor), (this.topic_ = e.topic_), (this.userLimit_ = e.userLimit_), (this.version = e.version), (this.videoQualityMode = e.videoQualityMode), (this.hdStreamingUntil = e.hdStreamingUntil), (this.hdStreamingBuyerId = e.hdStreamingBuyerId);
    }
}
class ey extends eg {
    static fromServer(e, t) {
        var n, r, i, a;
        return eB({
            application_id: e.application_id,
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: null != (n = null != t ? t : e.guild_id) ? n : null,
            iconEmoji: ec(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null != (r = e.name) ? r : '',
            nsfw_: null != (i = e.nsfw) && i,
            parent_id: e.parent_id,
            permissionOverwrites_: eo(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null != (a = e.rate_limit_per_user) ? a : 0,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : g.d4z.GUILD_TEXT,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            version: e.version
        });
    }
    constructor(e) {
        var t;
        super(e), (this.application_id = e.application_id), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.iconEmoji = e.iconEmoji), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.memberListId = e.memberListId), (this.nsfw_ = e.nsfw_), (this.parent_id = e.parent_id), (this.permissionOverwrites_ = null != (t = e.permissionOverwrites_) ? t : {}), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.themeColor = e.themeColor), (this.topic_ = e.topic_), (this.version = e.version), (this.linkedLobby = e.linkedLobby), (this.hdStreamingBuyerId = e.hdStreamingBuyerId), (this.hdStreamingUntil = e.hdStreamingUntil);
    }
}
class ev extends ey {}
class eO extends ey {}
class eI extends ey {}
class eS extends eb {}
class eT extends ey {}
class eN extends ey {}
class eA extends eb {}
class eC extends eg {
    static fromServer(e, t) {
        var n, r, i, a;
        let o = {
            availableTags: null != e.available_tags ? el(e.available_tags) : [],
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultForumLayout: e.default_forum_layout,
            defaultReactionEmoji:
                null != e.default_reaction_emoji
                    ? {
                          emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
                          emojiName: e.default_reaction_emoji.emoji_name
                      }
                    : void 0,
            defaultSortOrder: e.default_sort_order,
            defaultTagSetting: e.default_tag_setting,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: null != (n = null != t ? t : e.guild_id) ? n : null,
            iconEmoji: ec(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null != (r = e.name) ? r : '',
            nsfw_: null != (i = e.nsfw) && i,
            parent_id: e.parent_id,
            permissionOverwrites_: eo(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null != (a = e.rate_limit_per_user) ? a : 0,
            template: e.template,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : g.d4z.GUILD_TEXT,
            version: e.version
        };
        return (0, d.gh)(o, eC);
    }
    constructor(e) {
        var t, n;
        super(e), (this.availableTags = null != (t = e.availableTags) ? t : []), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultForumLayout = e.defaultForumLayout), (this.defaultReactionEmoji = e.defaultReactionEmoji), (this.defaultSortOrder = e.defaultSortOrder), (this.defaultTagSetting = e.defaultTagSetting), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.iconEmoji = e.iconEmoji), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.memberListId = e.memberListId), (this.nsfw_ = e.nsfw_), (this.parent_id = e.parent_id), (this.permissionOverwrites_ = null != (n = e.permissionOverwrites_) ? n : {}), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.template = e.template), (this.themeColor = e.themeColor), (this.topic_ = e.topic_), (this.version = e.version);
    }
}
class eR {
    getOrCompute(e) {
        let t = this.cache.get(e);
        if (null != t) return t;
        {
            let t = parseInt(e, 10);
            return this.cache.set(e, t), t;
        }
    }
    constructor(e = 100) {
        b(this, 'cache', void 0), (this.cache = new (o())(e));
    }
}
let eP = new eR(),
    ew = new eR();
class eD extends eg {
    static sortRecipients(e, t) {
        let n = eP.getOrCompute(t);
        return [...(null != e ? e : [])].sort((e, t) => (ew.getOrCompute(e.id) ^ n) - (ew.getOrCompute(t.id) ^ n));
    }
    static fromServer(e) {
        var t, n;
        let r = eD.sortRecipients(e.recipients, e.id),
            i = {
                application_id: e.application_id,
                flags_: e.flags,
                guild_id: null,
                icon: e.icon,
                id: e.id,
                isMessageRequest: e.is_message_request,
                isMessageRequestTimestamp: e.is_message_request_timestamp,
                isSpam: null != (t = e.is_spam) && t,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                name: null != (n = e.name) ? n : '',
                nicks: es(e.nicks),
                ownerId: e.owner_id,
                rawRecipients: r,
                recipients: r.map((e) => e.id),
                recipientFlags: e.recipient_flags,
                safetyWarnings: e.safety_warnings,
                blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
                type: null != e.type ? e.type : g.d4z.DM,
                wallpaper: (0, f.L)(e.wallpaper)
            };
        return (0, d.gh)(i, eD);
    }
    isSystemDM() {
        let e = this.rawRecipients[0];
        return this.type === g.d4z.DM && null != e && !0 === e.system;
    }
    getRecipientId() {
        return this.recipients[0];
    }
    addRecipient(e, t, n) {
        if (e === n) return this;
        {
            var r;
            let n = this.set(
                'recipients',
                i()
                    .uniq([...(null != (r = this.recipients) ? r : []), e])
                    .sort(m.default.compare)
            );
            return null == t ? n : n.set('nicks', O(y({}, n.nicks), { [e]: t }));
        }
    }
    removeRecipient(e) {
        return this.set('recipients', i().without(this.recipients, e));
    }
    constructor(e) {
        var t, n;
        super(e), (this.application_id = e.application_id), (this.flags_ = e.flags_), (this.icon = e.icon), (this.isMessageRequest = e.isMessageRequest), (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp), (this.isSpam = e.isSpam), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.nicks = e.nicks), (this.ownerId = e.ownerId), (this.rawRecipients = eD.sortRecipients(e.rawRecipients, this.id)), (this.recipients = [...(null != (t = e.recipients) ? t : [])].sort(m.default.compare)), (this.recipientFlags = e.recipientFlags), (this.safetyWarnings = null != (n = e.safetyWarnings) ? n : []), (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed), (this.wallpaper = e.wallpaper);
    }
}
class eL extends eD {}
class ex extends eD {}
class eM extends eg {
    static fromServer(e, t) {
        var n, r, i, a, o;
        let s = {
            appliedTags: null != (n = e.applied_tags) ? n : [],
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: null != (r = null != t ? t : e.guild_id) ? r : null,
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            member:
                null != e.member
                    ? {
                          flags: e.member.flags,
                          muted: e.member.muted,
                          muteConfig: e.member.mute_config,
                          joinTimestamp: e.member.join_timestamp
                      }
                    : void 0,
            memberCount: e.member_count,
            memberIdsPreview: e.member_ids_preview,
            messageCount: e.message_count,
            name: null != (i = e.name) ? i : '',
            nsfw_: null != (a = e.nsfw) && a,
            ownerId: e.owner_id,
            parent_id: e.parent_id,
            parentChannelThreadType: e.parentChannelThreadType,
            rateLimitPerUser_: e.rate_limit_per_user,
            rtcRegion: e.rtc_region,
            threadMetadata:
                null != e.thread_metadata
                    ? {
                          archived: e.thread_metadata.archived,
                          autoArchiveDuration: e.thread_metadata.auto_archive_duration,
                          archiveTimestamp: e.thread_metadata.archive_timestamp,
                          createTimestamp: e.thread_metadata.create_timestamp,
                          locked: e.thread_metadata.locked,
                          invitable: null == (o = e.thread_metadata.invitable) || o
                      }
                    : void 0,
            totalMessageSent: e.total_message_sent,
            type: null != e.type ? e.type : g.d4z.PUBLIC_THREAD,
            userLimit_: e.user_limit,
            videoQualityMode: e.video_quality_mode
        };
        return (0, d.gh)(s, eM);
    }
    constructor(e) {
        var t;
        super(e), (this.appliedTags = null != (t = e.appliedTags) ? t : []), (this.bitrate_ = e.bitrate_), (this.flags_ = e.flags_), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.member = e.member), (this.memberCount = e.memberCount), (this.memberIdsPreview = e.memberIdsPreview), (this.messageCount = e.messageCount), (this.nsfw_ = e.nsfw_), (this.ownerId = e.ownerId), (this.parent_id = e.parent_id), (this.parentChannelThreadType = e.parentChannelThreadType), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rtcRegion = e.rtcRegion), (this.threadMetadata = e.threadMetadata), (this.userLimit_ = e.userLimit_), (this.videoQualityMode = e.videoQualityMode);
    }
}
let ek = {
    [g.d4z.DM]: eD.fromServer,
    [g.d4z.GROUP_DM]: eD.fromServer,
    [g.d4z.GUILD_TEXT]: ey.fromServer,
    [g.d4z.GUILD_VOICE]: eb.fromServer,
    [g.d4z.GUILD_STAGE_VOICE]: eb.fromServer,
    [g.d4z.GUILD_CATEGORY]: ey.fromServer,
    [g.d4z.GUILD_ANNOUNCEMENT]: ey.fromServer,
    [g.d4z.GUILD_STORE]: ey.fromServer,
    [g.d4z.ANNOUNCEMENT_THREAD]: eM.fromServer,
    [g.d4z.PUBLIC_THREAD]: eM.fromServer,
    [g.d4z.PRIVATE_THREAD]: eM.fromServer,
    [g.d4z.GUILD_DIRECTORY]: ey.fromServer,
    [g.d4z.GUILD_FORUM]: eC.fromServer,
    [g.d4z.GUILD_MEDIA]: eC.fromServer
};
function ej(e, t) {
    var n, r;
    return (null != (r = ek[null != (n = e.type) ? n : g.d4z.GUILD_TEXT]) ? r : eE.fromServer)(e, t);
}
function eU(e) {
    return eF(e);
}
let eG = {
    [g.d4z.DM]: eL,
    [g.d4z.GROUP_DM]: ex,
    [g.d4z.GUILD_TEXT]: eN,
    [g.d4z.GUILD_VOICE]: eA,
    [g.d4z.GUILD_STAGE_VOICE]: eS,
    [g.d4z.GUILD_CATEGORY]: eO,
    [g.d4z.GUILD_ANNOUNCEMENT]: ev,
    [g.d4z.GUILD_STORE]: eT,
    [g.d4z.ANNOUNCEMENT_THREAD]: eM,
    [g.d4z.PUBLIC_THREAD]: eM,
    [g.d4z.PRIVATE_THREAD]: eM,
    [g.d4z.GUILD_DIRECTORY]: eI,
    [g.d4z.GUILD_FORUM]: eC,
    [g.d4z.GUILD_MEDIA]: eC
};
function eB(e) {
    var t, n;
    let r = null != (n = eG[null != (t = e.type) ? t : g.d4z.GUILD_TEXT]) ? n : eE;
    return (0, d.gh)(e, r);
}
function eF(e) {
    var t, n;
    return new (null != (n = eG[null != (t = e.type) ? t : g.d4z.GUILD_TEXT]) ? n : eE)(eh(e));
}
