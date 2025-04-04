n.d(t, {
    $N: () => er,
    AW: () => S,
    CG: () => ed,
    Ec: () => Z,
    Em: () => K,
    Gz: () => ef,
    Km: () => R,
    Lr: () => D,
    Q5: () => W,
    Qm: () => U,
    Sf: () => em,
    TK: () => X,
    Ti: () => A,
    Um: () => en,
    X_: () => ee,
    Y0: () => Q,
    _H: () => eG,
    bc: () => k,
    bw: () => w,
    dF: () => q,
    hv: () => x,
    iR: () => ei,
    jD: () => ej,
    kt: () => eB,
    mn: () => ew,
    nl: () => eg,
    oj: () => C,
    ov: () => J,
    q_: () => ek,
    r8: () => I,
    sR: () => j,
    tx: () => P,
    uC: () => H,
    vc: () => V,
    vd: () => B,
    vg: () => et,
    xL: () => $,
    zS: () => z,
    zi: () => N
}),
    n(47120),
    n(789020),
    n(230036);
var r = n(392711),
    i = n.n(r),
    o = n(31775),
    a = n.n(o),
    s = n(313361),
    l = n(683860),
    c = n(149765),
    u = n(283693),
    d = n(860987),
    f = n(146085),
    _ = n(427679),
    p = n(630388),
    h = n(709054),
    m = n(981631),
    g = n(176505);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = new Set([m.d4z.GUILD_TEXT, m.d4z.GUILD_ANNOUNCEMENT, m.d4z.GUILD_STORE, m.d4z.ANNOUNCEMENT_THREAD, m.d4z.PUBLIC_THREAD, m.d4z.PRIVATE_THREAD, m.d4z.GUILD_DIRECTORY, m.d4z.GUILD_FORUM, m.d4z.GUILD_MEDIA, m.d4z.DM, m.d4z.GROUP_DM]);
function I(e) {
    return O.has(e);
}
let S = new Set([m.d4z.DM, m.d4z.GROUP_DM, m.d4z.GUILD_TEXT, m.d4z.GUILD_VOICE, m.d4z.GUILD_STAGE_VOICE, m.d4z.GUILD_CATEGORY, m.d4z.GUILD_ANNOUNCEMENT, m.d4z.GUILD_STORE, m.d4z.ANNOUNCEMENT_THREAD, m.d4z.PUBLIC_THREAD, m.d4z.PRIVATE_THREAD, m.d4z.GUILD_DIRECTORY, m.d4z.GUILD_FORUM, m.d4z.GUILD_MEDIA]),
    T = new Set([m.d4z.GUILD_TEXT, m.d4z.GUILD_ANNOUNCEMENT, m.d4z.ANNOUNCEMENT_THREAD, m.d4z.PUBLIC_THREAD, m.d4z.PRIVATE_THREAD]);
function N(e) {
    return T.has(e);
}
let A = new Set([m.d4z.GUILD_TEXT, m.d4z.GUILD_ANNOUNCEMENT, m.d4z.GUILD_FORUM, m.d4z.GUILD_MEDIA, m.d4z.GUILD_VOICE, m.d4z.GUILD_STAGE_VOICE]),
    C = new Set([m.d4z.GUILD_TEXT, m.d4z.GUILD_VOICE, m.d4z.GUILD_STAGE_VOICE, m.d4z.GUILD_CATEGORY, m.d4z.GUILD_ANNOUNCEMENT, m.d4z.GUILD_STORE, m.d4z.ANNOUNCEMENT_THREAD, m.d4z.PUBLIC_THREAD, m.d4z.PRIVATE_THREAD, m.d4z.GUILD_DIRECTORY, m.d4z.GUILD_FORUM, m.d4z.GUILD_MEDIA]);
function R(e) {
    return C.has(e);
}
m.d4z.GUILD_TEXT, m.d4z.GUILD_ANNOUNCEMENT, m.d4z.GUILD_FORUM, m.d4z.GUILD_MEDIA;
let P = new Set([m.d4z.GUILD_VOICE, m.d4z.GUILD_STAGE_VOICE]);
function w(e) {
    return 'SELECTABLE' !== e && P.has(e);
}
let D = new Set([m.d4z.GUILD_STAGE_VOICE]),
    L = new Set([m.d4z.DM, m.d4z.GROUP_DM]);
function x(e) {
    return L.has(e);
}
let M = new Set([m.d4z.GROUP_DM]);
function k(e) {
    return M.has(e);
}
let j = new Set([m.d4z.DM, m.d4z.GROUP_DM, m.d4z.GUILD_TEXT, m.d4z.GUILD_ANNOUNCEMENT, m.d4z.ANNOUNCEMENT_THREAD, m.d4z.PUBLIC_THREAD, m.d4z.PRIVATE_THREAD]);
function U(e) {
    return j.has(e);
}
let G = new Set([m.d4z.DM, m.d4z.GROUP_DM, m.d4z.GUILD_VOICE, m.d4z.GUILD_STAGE_VOICE, m.d4z.PUBLIC_THREAD, m.d4z.PRIVATE_THREAD]);
function B(e) {
    return G.has(e);
}
let F = new Set([m.d4z.GUILD_TEXT, m.d4z.GUILD_ANNOUNCEMENT, m.d4z.ANNOUNCEMENT_THREAD, m.d4z.PUBLIC_THREAD, m.d4z.PRIVATE_THREAD, m.d4z.GUILD_DIRECTORY, m.d4z.GUILD_FORUM, m.d4z.GUILD_MEDIA, m.d4z.DM, m.d4z.GROUP_DM]);
function V(e) {
    return F.has(e);
}
let Z = new Set([m.d4z.ANNOUNCEMENT_THREAD, m.d4z.PUBLIC_THREAD, m.d4z.PRIVATE_THREAD]),
    H = new Set([m.d4z.GUILD_TEXT, m.d4z.GUILD_ANNOUNCEMENT, m.d4z.GUILD_FORUM, m.d4z.GUILD_MEDIA]);
function W(e) {
    return Z.has(e);
}
let Y = new Set([m.d4z.DM, m.d4z.GROUP_DM, m.d4z.GUILD_TEXT, m.d4z.GUILD_ANNOUNCEMENT, m.d4z.ANNOUNCEMENT_THREAD, m.d4z.PUBLIC_THREAD, m.d4z.PRIVATE_THREAD, m.d4z.GUILD_FORUM, m.d4z.GUILD_MEDIA, m.d4z.GUILD_DIRECTORY, m.d4z.GUILD_VOICE, m.d4z.GUILD_STAGE_VOICE]);
function K(e) {
    return Y.has(e);
}
let z = new Set([m.d4z.GUILD_TEXT, m.d4z.GUILD_ANNOUNCEMENT, m.d4z.GUILD_STORE, m.d4z.GUILD_VOICE, m.d4z.GUILD_STAGE_VOICE, m.d4z.ANNOUNCEMENT_THREAD, m.d4z.PUBLIC_THREAD, m.d4z.PRIVATE_THREAD, m.d4z.GUILD_DIRECTORY, m.d4z.GUILD_FORUM, m.d4z.GUILD_MEDIA]),
    q = new Set([m.d4z.GUILD_ANNOUNCEMENT, m.d4z.GUILD_CATEGORY, m.d4z.GUILD_STORE, m.d4z.GUILD_TEXT, m.d4z.GUILD_VOICE, m.d4z.GUILD_STAGE_VOICE, m.d4z.GUILD_DIRECTORY, m.d4z.GUILD_FORUM, m.d4z.GUILD_MEDIA]),
    Q = new Set([m.d4z.GUILD_TEXT, m.d4z.GUILD_ANNOUNCEMENT]),
    X = new Set([m.d4z.GUILD_TEXT, m.d4z.GUILD_ANNOUNCEMENT, m.d4z.GUILD_FORUM, m.d4z.GUILD_MEDIA]),
    J = new Set([m.d4z.GUILD_TEXT, m.d4z.GUILD_ANNOUNCEMENT, m.d4z.GUILD_FORUM, m.d4z.GUILD_MEDIA, m.d4z.GUILD_VOICE, m.d4z.GUILD_STAGE_VOICE]),
    $ = new Set([m.d4z.GUILD_ANNOUNCEMENT, m.d4z.GUILD_TEXT, m.d4z.GUILD_FORUM, m.d4z.GUILD_MEDIA, m.d4z.ANNOUNCEMENT_THREAD]),
    ee = new Set([m.d4z.GUILD_TEXT, m.d4z.GUILD_FORUM, m.d4z.GUILD_MEDIA, m.d4z.ANNOUNCEMENT_THREAD, m.d4z.PUBLIC_THREAD, m.d4z.PRIVATE_THREAD, m.d4z.GUILD_VOICE, m.d4z.GUILD_STAGE_VOICE]),
    et = new Set([m.d4z.PUBLIC_THREAD, m.d4z.PRIVATE_THREAD, m.d4z.GUILD_VOICE, m.d4z.GUILD_STAGE_VOICE]),
    en = new Set([m.d4z.GUILD_TEXT, m.d4z.GUILD_FORUM, m.d4z.GUILD_MEDIA]),
    er = new Set([m.d4z.GUILD_TEXT, m.d4z.GUILD_CATEGORY, m.d4z.GUILD_FORUM, m.d4z.GUILD_ANNOUNCEMENT]),
    ei = new Set([m.d4z.GUILD_TEXT, m.d4z.GUILD_ANNOUNCEMENT, m.d4z.GUILD_FORUM, m.d4z.GUILD_VOICE]);
function eo(e) {
    let t = {};
    return (
        null == e ||
            e.forEach((e) => {
                t[e.id] = {
                    id: e.id,
                    type: e.type,
                    allow: c.vB(e.allow),
                    deny: c.vB(e.deny)
                };
            }),
        t
    );
}
function ea(e) {
    return null == e ? {} : i().reduce(e, (e, t) => ((e[t.id] = t.nick), e), {});
}
function es(e) {
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
function el(e) {
    return null != e
        ? {
              id: e.id,
              name: e.name
          }
        : void 0;
}
let ec = c.$e(m.Plq.CONNECT, m.Plq.VIEW_CHANNEL),
    eu = m.S7T.CONNECT | m.S7T.VIEW_CHANNEL;
function ed(e) {
    return w(e) ? ec : m.Plq.VIEW_CHANNEL;
}
function ef(e) {
    return w(e) ? eu : m.S7T.VIEW_CHANNEL;
}
class e_ {
    constructor(e) {
        var t, n, r;
        E(this, 'id', void 0), E(this, 'type', void 0), E(this, 'name', void 0), E(this, 'guild_id', void 0), E(this, 'topic_', void 0), E(this, 'position_', void 0), E(this, 'permissionOverwrites_', void 0), E(this, 'bitrate_', void 0), E(this, 'rtcRegion', void 0), E(this, 'videoQualityMode', void 0), E(this, 'userLimit_', void 0), E(this, 'recipients', void 0), E(this, 'rawRecipients', void 0), E(this, 'ownerId', void 0), E(this, 'icon', void 0), E(this, 'application_id', void 0), E(this, 'nicks', void 0), E(this, 'nsfw_', void 0), E(this, 'parent_id', void 0), E(this, 'memberListId', void 0), E(this, 'rateLimitPerUser_', void 0), E(this, 'defaultThreadRateLimitPerUser', void 0), E(this, 'defaultAutoArchiveDuration', void 0), E(this, 'flags_', void 0), E(this, 'originChannelId', void 0), E(this, 'lastMessageId', void 0), E(this, 'lastPinTimestamp', void 0), E(this, 'availableTags', void 0), E(this, 'appliedTags', void 0), E(this, 'messageCount', void 0), E(this, 'memberCount', void 0), E(this, 'threadMetadata', void 0), E(this, 'memberIdsPreview', void 0), E(this, 'member', void 0), E(this, 'parentChannelThreadType', void 0), E(this, 'template', void 0), E(this, 'defaultReactionEmoji', void 0), E(this, 'isMessageRequest', void 0), E(this, 'isMessageRequestTimestamp', void 0), E(this, 'isSpam', void 0), E(this, 'totalMessageSent', void 0), E(this, 'defaultSortOrder', void 0), E(this, 'version', void 0), E(this, 'defaultForumLayout', void 0), E(this, 'iconEmoji', void 0), E(this, 'themeColor', void 0), E(this, 'safetyWarnings', void 0), E(this, 'blockedUserWarningDismissed', void 0), E(this, 'recipientFlags', void 0), E(this, 'linkedLobby', void 0), E(this, 'hdStreamingUntil', void 0), E(this, 'hdStreamingBuyerId', void 0), E(this, 'wallpaper', void 0), (this.id = e.id), (this.type = null != (t = e.type) ? t : m.d4z.GUILD_TEXT), (this.name = null != (n = e.name) ? n : ''), (this.guild_id = null != (r = e.guild_id) ? r : null);
    }
}
function ep(e) {
    let t = e;
    return 'topic' in e && ((t.topic_ = e.topic), delete e.topic), 'position' in e && ((t.position_ = e.position), delete e.position), 'permissionOverwrites' in e && ((t.permissionOverwrites_ = e.permissionOverwrites), delete e.permissionOverwrites), 'bitrate' in e && ((t.bitrate_ = e.bitrate), delete e.bitrate), 'userLimit' in e && ((t.userLimit_ = e.userLimit), delete e.userLimit), 'nsfw' in e && ((t.nsfw_ = e.nsfw), delete e.nsfw), 'rateLimitPerUser' in e && ((t.rateLimitPerUser_ = e.rateLimitPerUser), delete e.rateLimitPerUser), 'flags' in e && ((t.flags_ = e.flags), delete e.flags), t;
}
let eh = Object.freeze({});
class em extends e_ {
    get permissionOverwrites() {
        var e;
        return null != (e = this.permissionOverwrites_) ? e : eh;
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
        return null != (e = this.bitrate_) ? e : m.epw;
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
        return b({}, this);
    }
    set(e, t) {
        return this.merge(ep({ [e]: t }));
    }
    merge(e) {
        let t = null,
            n = ep(e);
        for (let e in n) n.hasOwnProperty(e) && this[e] !== n[e] && (null == t && (t = this.toJS()), (t[e] = n[e]));
        return null != t ? new this.constructor(t) : this;
    }
    computeLurkerPermissionsAllowList() {
        if (this.isGuildStageVoice() && _.Z.isPublic(this.id)) return f.L_;
    }
    isNSFW() {
        return this.nsfw;
    }
    isManaged() {
        return null != this.application_id;
    }
    isPrivate() {
        return x(this.type);
    }
    isGroupDM() {
        return this.type === m.d4z.GROUP_DM;
    }
    isMultiUserDM() {
        return k(this.type);
    }
    isDM() {
        return this.type === m.d4z.DM;
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
        return this.hasFlag(g.zZ.IS_SCHEDULED_FOR_DELETION);
    }
    isArchivedLockedThread() {
        var e, t;
        return Z.has(this.type) && (null == (e = this.threadMetadata) ? void 0 : e.archived) === !0 && (null == (t = this.threadMetadata) ? void 0 : t.locked) === !0;
    }
    isForumPost() {
        return this.type === m.d4z.PUBLIC_THREAD && null != this.parentChannelThreadType && m.TPd.GUILD_THREADS_ONLY.has(this.parentChannelThreadType);
    }
    isRingable() {
        return m.TPd.CALLABLE.has(this.type) || this.type === m.d4z.GUILD_VOICE;
    }
    isCategory() {
        return this.type === m.d4z.GUILD_CATEGORY;
    }
    isVocal() {
        return B(this.type);
    }
    isGuildVocal() {
        return w(this.type);
    }
    isGuildVocalOrThread() {
        return this.isGuildVocal() || this.isVocalThread();
    }
    isGuildVoice() {
        return this.type === m.d4z.GUILD_VOICE;
    }
    isGuildStageVoice() {
        return this.type === m.d4z.GUILD_STAGE_VOICE;
    }
    isListenModeCapable() {
        return this.isGuildStageVoice();
    }
    isThread() {
        return W(this.type);
    }
    isAnnouncementThread() {
        return this.type === m.d4z.ANNOUNCEMENT_THREAD;
    }
    isVocalThread() {
        return this.type === m.d4z.PUBLIC_THREAD || this.type === m.d4z.PRIVATE_THREAD;
    }
    isActiveThread() {
        var e;
        return this.isThread() && (null == (e = this.threadMetadata) ? void 0 : e.archived) !== !0;
    }
    isDirectory() {
        return this.type === m.d4z.GUILD_DIRECTORY;
    }
    isForumLikeChannel() {
        return this.isForumChannel() || this.isMediaChannel();
    }
    isForumChannel() {
        return this.type === m.d4z.GUILD_FORUM;
    }
    isMediaChannel() {
        return this.type === m.d4z.GUILD_MEDIA;
    }
    isMediaPost() {
        return this.type === m.d4z.PUBLIC_THREAD && this.parentChannelThreadType === m.d4z.GUILD_MEDIA;
    }
    isRoleSubscriptionTemplatePreviewChannel() {
        return this.hasFlag(g.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
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
        return null != (e = this.defaultSortOrder) ? e : l.z.LATEST_ACTIVITY;
    }
    getDefaultLayout() {
        return this.isMediaChannel() ? s.X.GRID : null == this.defaultForumLayout || this.defaultForumLayout === s.X.DEFAULT ? s.X.LIST : this.defaultForumLayout;
    }
    get accessPermissions() {
        return ed(this.type);
    }
    hasFlag(e) {
        return (0, p.yE)(this.flags, e);
    }
    get isHDStreamSplashed() {
        return null != this.hdStreamingUntil && new Date(this.hdStreamingUntil) > new Date();
    }
    get isChatWallpaperEnabled() {
        return this.isDM() || this.isMultiUserDM() || this.isGroupDM();
    }
}
class eg extends em {
    static fromServer(e, t) {
        var n, r, i;
        let o = {
            application_id: e.application_id,
            appliedTags: e.applied_tags,
            availableTags: null != e.available_tags ? es(e.available_tags) : void 0,
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
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: null != (n = null != t ? t : e.guild_id) ? n : null,
            icon: e.icon,
            iconEmoji: el(e.icon_emoji),
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
            nicks: ea(e.nicks),
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
            type: null != e.type ? e.type : m.d4z.UNKNOWN,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            wallpaper: (0, d.L)(e.wallpaper)
        };
        return (0, u.gh)(o, eg);
    }
    constructor(e) {
        super(e), (this.application_id = e.application_id), (this.appliedTags = e.appliedTags), (this.availableTags = e.availableTags), (this.bitrate_ = e.bitrate_), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultForumLayout = e.defaultForumLayout), (this.defaultReactionEmoji = e.defaultReactionEmoji), (this.defaultSortOrder = e.defaultSortOrder), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.icon = e.icon), (this.iconEmoji = e.iconEmoji), (this.isMessageRequest = e.isMessageRequest), (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp), (this.isSpam = e.isSpam), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.member = e.member), (this.memberCount = e.memberCount), (this.memberIdsPreview = e.memberIdsPreview), (this.memberListId = e.memberListId), (this.messageCount = e.messageCount), (this.nicks = e.nicks), (this.nsfw_ = e.nsfw_), (this.originChannelId = e.originChannelId), (this.ownerId = e.ownerId), (this.parent_id = e.parent_id), (this.parentChannelThreadType = e.parentChannelThreadType), (this.permissionOverwrites_ = e.permissionOverwrites_), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rawRecipients = e.rawRecipients), (this.recipients = e.recipients), (this.recipientFlags = e.recipientFlags), (this.rtcRegion = e.rtcRegion), (this.safetyWarnings = e.safetyWarnings), (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed), (this.template = e.template), (this.themeColor = e.themeColor), (this.threadMetadata = e.threadMetadata), (this.topic_ = e.topic_), (this.userLimit_ = e.userLimit_), (this.version = e.version), (this.videoQualityMode = e.videoQualityMode), (this.linkedLobby = e.linkedLobby), (this.hdStreamingUntil = e.hdStreamingUntil), (this.hdStreamingBuyerId = e.hdStreamingBuyerId), (this.wallpaper = e.wallpaper);
    }
}
class eE extends em {
    static fromServer(e, t) {
        var n, r, i, o;
        return eG({
            application_id: e.application_id,
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: null != (n = null != t ? t : e.guild_id) ? n : null,
            iconEmoji: el(e.icon_emoji),
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
            rateLimitPerUser_: null != (o = e.rate_limit_per_user) ? o : 0,
            rtcRegion: e.rtc_region,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : m.d4z.GUILD_VOICE,
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
class eb extends em {
    static fromServer(e, t) {
        var n, r, i, o;
        return eG({
            application_id: e.application_id,
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: null != (n = null != t ? t : e.guild_id) ? n : null,
            iconEmoji: el(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null != (r = e.name) ? r : '',
            nsfw_: null != (i = e.nsfw) && i,
            parent_id: e.parent_id,
            permissionOverwrites_: eo(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null != (o = e.rate_limit_per_user) ? o : 0,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : m.d4z.GUILD_TEXT,
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
class ey extends eb {}
class ev extends eb {}
class eO extends eb {}
class eI extends eE {}
class eS extends eb {}
class eT extends eb {}
class eN extends eE {}
class eA extends em {
    static fromServer(e, t) {
        var n, r, i, o;
        let a = {
            availableTags: null != e.available_tags ? es(e.available_tags) : [],
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
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: null != (n = null != t ? t : e.guild_id) ? n : null,
            iconEmoji: el(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null != (r = e.name) ? r : '',
            nsfw_: null != (i = e.nsfw) && i,
            parent_id: e.parent_id,
            permissionOverwrites_: eo(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null != (o = e.rate_limit_per_user) ? o : 0,
            template: e.template,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : m.d4z.GUILD_TEXT,
            version: e.version
        };
        return (0, u.gh)(a, eA);
    }
    constructor(e) {
        var t, n;
        super(e), (this.availableTags = null != (t = e.availableTags) ? t : []), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultForumLayout = e.defaultForumLayout), (this.defaultReactionEmoji = e.defaultReactionEmoji), (this.defaultSortOrder = e.defaultSortOrder), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.iconEmoji = e.iconEmoji), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.memberListId = e.memberListId), (this.nsfw_ = e.nsfw_), (this.parent_id = e.parent_id), (this.permissionOverwrites_ = null != (n = e.permissionOverwrites_) ? n : {}), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.template = e.template), (this.themeColor = e.themeColor), (this.topic_ = e.topic_), (this.version = e.version);
    }
}
class eC {
    getOrCompute(e) {
        let t = this.cache.get(e);
        if (null != t) return t;
        {
            let t = parseInt(e, 10);
            return this.cache.set(e, t), t;
        }
    }
    constructor(e = 100) {
        E(this, 'cache', void 0), (this.cache = new (a())(e));
    }
}
let eR = new eC(),
    eP = new eC();
class ew extends em {
    static sortRecipients(e, t) {
        let n = eR.getOrCompute(t);
        return [...(null != e ? e : [])].sort((e, t) => (eP.getOrCompute(e.id) ^ n) - (eP.getOrCompute(t.id) ^ n));
    }
    static fromServer(e) {
        var t, n;
        let r = ew.sortRecipients(e.recipients, e.id),
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
                nicks: ea(e.nicks),
                ownerId: e.owner_id,
                rawRecipients: r,
                recipients: r.map((e) => e.id),
                recipientFlags: e.recipient_flags,
                safetyWarnings: e.safety_warnings,
                blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
                type: null != e.type ? e.type : m.d4z.DM,
                wallpaper: (0, d.L)(e.wallpaper)
            };
        return (0, u.gh)(i, ew);
    }
    isSystemDM() {
        let e = this.rawRecipients[0];
        return this.type === m.d4z.DM && null != e && !0 === e.system;
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
                    .sort(h.default.compare)
            );
            return null == t ? n : n.set('nicks', v(b({}, n.nicks), { [e]: t }));
        }
    }
    removeRecipient(e) {
        return this.set('recipients', i().without(this.recipients, e));
    }
    constructor(e) {
        var t, n;
        super(e), (this.application_id = e.application_id), (this.flags_ = e.flags_), (this.icon = e.icon), (this.isMessageRequest = e.isMessageRequest), (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp), (this.isSpam = e.isSpam), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.nicks = e.nicks), (this.ownerId = e.ownerId), (this.rawRecipients = ew.sortRecipients(e.rawRecipients, this.id)), (this.recipients = [...(null != (t = e.recipients) ? t : [])].sort(h.default.compare)), (this.recipientFlags = e.recipientFlags), (this.safetyWarnings = null != (n = e.safetyWarnings) ? n : []), (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed), (this.wallpaper = e.wallpaper);
    }
}
class eD extends ew {}
class eL extends ew {}
class ex extends em {
    static fromServer(e, t) {
        var n, r, i, o, a;
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
            nsfw_: null != (o = e.nsfw) && o,
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
                          invitable: null == (a = e.thread_metadata.invitable) || a
                      }
                    : void 0,
            totalMessageSent: e.total_message_sent,
            type: null != e.type ? e.type : m.d4z.PUBLIC_THREAD,
            userLimit_: e.user_limit,
            videoQualityMode: e.video_quality_mode
        };
        return (0, u.gh)(s, ex);
    }
    constructor(e) {
        var t;
        super(e), (this.appliedTags = null != (t = e.appliedTags) ? t : []), (this.bitrate_ = e.bitrate_), (this.flags_ = e.flags_), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.member = e.member), (this.memberCount = e.memberCount), (this.memberIdsPreview = e.memberIdsPreview), (this.messageCount = e.messageCount), (this.nsfw_ = e.nsfw_), (this.ownerId = e.ownerId), (this.parent_id = e.parent_id), (this.parentChannelThreadType = e.parentChannelThreadType), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rtcRegion = e.rtcRegion), (this.threadMetadata = e.threadMetadata), (this.userLimit_ = e.userLimit_), (this.videoQualityMode = e.videoQualityMode);
    }
}
let eM = {
    [m.d4z.DM]: ew.fromServer,
    [m.d4z.GROUP_DM]: ew.fromServer,
    [m.d4z.GUILD_TEXT]: eb.fromServer,
    [m.d4z.GUILD_VOICE]: eE.fromServer,
    [m.d4z.GUILD_STAGE_VOICE]: eE.fromServer,
    [m.d4z.GUILD_CATEGORY]: eb.fromServer,
    [m.d4z.GUILD_ANNOUNCEMENT]: eb.fromServer,
    [m.d4z.GUILD_STORE]: eb.fromServer,
    [m.d4z.ANNOUNCEMENT_THREAD]: ex.fromServer,
    [m.d4z.PUBLIC_THREAD]: ex.fromServer,
    [m.d4z.PRIVATE_THREAD]: ex.fromServer,
    [m.d4z.GUILD_DIRECTORY]: eb.fromServer,
    [m.d4z.GUILD_FORUM]: eA.fromServer,
    [m.d4z.GUILD_MEDIA]: eA.fromServer
};
function ek(e, t) {
    var n, r;
    return (null != (r = eM[null != (n = e.type) ? n : m.d4z.GUILD_TEXT]) ? r : eg.fromServer)(e, t);
}
function ej(e) {
    return eB(e);
}
let eU = {
    [m.d4z.DM]: eD,
    [m.d4z.GROUP_DM]: eL,
    [m.d4z.GUILD_TEXT]: eT,
    [m.d4z.GUILD_VOICE]: eN,
    [m.d4z.GUILD_STAGE_VOICE]: eI,
    [m.d4z.GUILD_CATEGORY]: ev,
    [m.d4z.GUILD_ANNOUNCEMENT]: ey,
    [m.d4z.GUILD_STORE]: eS,
    [m.d4z.ANNOUNCEMENT_THREAD]: ex,
    [m.d4z.PUBLIC_THREAD]: ex,
    [m.d4z.PRIVATE_THREAD]: ex,
    [m.d4z.GUILD_DIRECTORY]: eO,
    [m.d4z.GUILD_FORUM]: eA,
    [m.d4z.GUILD_MEDIA]: eA
};
function eG(e) {
    var t, n;
    let r = null != (n = eU[null != (t = e.type) ? t : m.d4z.GUILD_TEXT]) ? n : eg;
    return (0, u.gh)(e, r);
}
function eB(e) {
    var t, n;
    return new (null != (n = eU[null != (t = e.type) ? t : m.d4z.GUILD_TEXT]) ? n : eg)(ep(e));
}
