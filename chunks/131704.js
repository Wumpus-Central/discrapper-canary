n.d(t, {
    $N: () => $,
    AW: () => y,
    CG: () => eo,
    Ec: () => B,
    Em: () => j,
    Gz: () => el,
    Km: () => A,
    Lr: () => R,
    Q5: () => F,
    Qm: () => w,
    Sf: () => ef,
    TK: () => K,
    Ti: () => b,
    Um: () => J,
    X_: () => Q,
    Y0: () => W,
    _H: () => eM,
    bc: () => L,
    bw: () => C,
    dF: () => Y,
    hv: () => D,
    iR: () => ee,
    jD: () => eP,
    kt: () => ek,
    mn: () => eC,
    nl: () => e_,
    oj: () => S,
    ov: () => z,
    q_: () => eL,
    r8: () => v,
    sR: () => P,
    tx: () => N,
    uC: () => Z,
    vc: () => G,
    vd: () => k,
    vg: () => X,
    xL: () => q,
    zS: () => H,
    zi: () => T
}),
    n(47120),
    n(724458),
    n(789020);
var i = n(392711),
    r = n.n(i),
    a = n(31775),
    s = n.n(a),
    o = n(313361),
    l = n(683860),
    u = n(149765),
    c = n(283693),
    d = n(146085),
    f = n(427679),
    _ = n(630388),
    p = n(709054),
    h = n(981631),
    m = n(176505);
function g(e, t, n) {
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
let E = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_STORE, h.d4z.ANNOUNCEMENT_THREAD, h.d4z.PUBLIC_THREAD, h.d4z.PRIVATE_THREAD, h.d4z.GUILD_DIRECTORY, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA, h.d4z.DM, h.d4z.GROUP_DM]);
function v(e) {
    return E.has(e);
}
let y = new Set([h.d4z.DM, h.d4z.GROUP_DM, h.d4z.GUILD_TEXT, h.d4z.GUILD_VOICE, h.d4z.GUILD_STAGE_VOICE, h.d4z.GUILD_CATEGORY, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_STORE, h.d4z.ANNOUNCEMENT_THREAD, h.d4z.PUBLIC_THREAD, h.d4z.PRIVATE_THREAD, h.d4z.GUILD_DIRECTORY, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA]),
    I = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.ANNOUNCEMENT_THREAD, h.d4z.PUBLIC_THREAD, h.d4z.PRIVATE_THREAD]);
function T(e) {
    return I.has(e);
}
let b = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA, h.d4z.GUILD_VOICE, h.d4z.GUILD_STAGE_VOICE]),
    S = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_VOICE, h.d4z.GUILD_STAGE_VOICE, h.d4z.GUILD_CATEGORY, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_STORE, h.d4z.ANNOUNCEMENT_THREAD, h.d4z.PUBLIC_THREAD, h.d4z.PRIVATE_THREAD, h.d4z.GUILD_DIRECTORY, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA]);
function A(e) {
    return S.has(e);
}
h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA;
let N = new Set([h.d4z.GUILD_VOICE, h.d4z.GUILD_STAGE_VOICE]);
function C(e) {
    return 'SELECTABLE' !== e && N.has(e);
}
let R = new Set([h.d4z.GUILD_STAGE_VOICE]),
    O = new Set([h.d4z.DM, h.d4z.GROUP_DM]);
function D(e) {
    return O.has(e);
}
let x = new Set([h.d4z.GROUP_DM]);
function L(e) {
    return x.has(e);
}
let P = new Set([h.d4z.DM, h.d4z.GROUP_DM, h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.ANNOUNCEMENT_THREAD, h.d4z.PUBLIC_THREAD, h.d4z.PRIVATE_THREAD]);
function w(e) {
    return P.has(e);
}
let M = new Set([h.d4z.DM, h.d4z.GROUP_DM, h.d4z.GUILD_VOICE, h.d4z.GUILD_STAGE_VOICE, h.d4z.PUBLIC_THREAD, h.d4z.PRIVATE_THREAD]);
function k(e) {
    return M.has(e);
}
let U = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.ANNOUNCEMENT_THREAD, h.d4z.PUBLIC_THREAD, h.d4z.PRIVATE_THREAD, h.d4z.GUILD_DIRECTORY, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA, h.d4z.DM, h.d4z.GROUP_DM]);
function G(e) {
    return U.has(e);
}
let B = new Set([h.d4z.ANNOUNCEMENT_THREAD, h.d4z.PUBLIC_THREAD, h.d4z.PRIVATE_THREAD]),
    Z = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA]);
function F(e) {
    return B.has(e);
}
let V = new Set([h.d4z.DM, h.d4z.GROUP_DM, h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.ANNOUNCEMENT_THREAD, h.d4z.PUBLIC_THREAD, h.d4z.PRIVATE_THREAD, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA, h.d4z.GUILD_DIRECTORY, h.d4z.GUILD_VOICE, h.d4z.GUILD_STAGE_VOICE]);
function j(e) {
    return V.has(e);
}
let H = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_STORE, h.d4z.GUILD_VOICE, h.d4z.GUILD_STAGE_VOICE, h.d4z.ANNOUNCEMENT_THREAD, h.d4z.PUBLIC_THREAD, h.d4z.PRIVATE_THREAD, h.d4z.GUILD_DIRECTORY, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA]),
    Y = new Set([h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_CATEGORY, h.d4z.GUILD_STORE, h.d4z.GUILD_TEXT, h.d4z.GUILD_VOICE, h.d4z.GUILD_STAGE_VOICE, h.d4z.GUILD_DIRECTORY, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA]),
    W = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT]),
    K = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA]),
    z = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA, h.d4z.GUILD_VOICE, h.d4z.GUILD_STAGE_VOICE]),
    q = new Set([h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_TEXT, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA, h.d4z.ANNOUNCEMENT_THREAD]),
    Q = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA, h.d4z.ANNOUNCEMENT_THREAD, h.d4z.PUBLIC_THREAD, h.d4z.PRIVATE_THREAD, h.d4z.GUILD_VOICE, h.d4z.GUILD_STAGE_VOICE]),
    X = new Set([h.d4z.PUBLIC_THREAD, h.d4z.PRIVATE_THREAD, h.d4z.GUILD_VOICE, h.d4z.GUILD_STAGE_VOICE]),
    J = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA]),
    $ = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_CATEGORY, h.d4z.GUILD_FORUM, h.d4z.GUILD_ANNOUNCEMENT]),
    ee = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_FORUM, h.d4z.GUILD_VOICE]);
function et(e) {
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
function en(e) {
    return null == e ? {} : r().reduce(e, (e, t) => ((e[t.id] = t.nick), e), {});
}
function ei(e) {
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
function er(e) {
    return null != e
        ? {
              id: e.id,
              name: e.name
          }
        : void 0;
}
let ea = u.$e(h.Plq.CONNECT, h.Plq.VIEW_CHANNEL),
    es = h.S7T.CONNECT | h.S7T.VIEW_CHANNEL;
function eo(e) {
    return C(e) ? ea : h.Plq.VIEW_CHANNEL;
}
function el(e) {
    return C(e) ? es : h.S7T.VIEW_CHANNEL;
}
class eu {
    constructor(e) {
        var t, n, i;
        g(this, 'id', void 0), g(this, 'type', void 0), g(this, 'name', void 0), g(this, 'guild_id', void 0), g(this, 'topic_', void 0), g(this, 'position_', void 0), g(this, 'permissionOverwrites_', void 0), g(this, 'bitrate_', void 0), g(this, 'rtcRegion', void 0), g(this, 'videoQualityMode', void 0), g(this, 'userLimit_', void 0), g(this, 'recipients', void 0), g(this, 'rawRecipients', void 0), g(this, 'ownerId', void 0), g(this, 'icon', void 0), g(this, 'application_id', void 0), g(this, 'nicks', void 0), g(this, 'nsfw_', void 0), g(this, 'parent_id', void 0), g(this, 'memberListId', void 0), g(this, 'rateLimitPerUser_', void 0), g(this, 'defaultThreadRateLimitPerUser', void 0), g(this, 'defaultAutoArchiveDuration', void 0), g(this, 'flags_', void 0), g(this, 'originChannelId', void 0), g(this, 'lastMessageId', void 0), g(this, 'lastPinTimestamp', void 0), g(this, 'availableTags', void 0), g(this, 'appliedTags', void 0), g(this, 'messageCount', void 0), g(this, 'memberCount', void 0), g(this, 'threadMetadata', void 0), g(this, 'memberIdsPreview', void 0), g(this, 'member', void 0), g(this, 'parentChannelThreadType', void 0), g(this, 'template', void 0), g(this, 'defaultReactionEmoji', void 0), g(this, 'isMessageRequest', void 0), g(this, 'isMessageRequestTimestamp', void 0), g(this, 'isSpam', void 0), g(this, 'totalMessageSent', void 0), g(this, 'defaultSortOrder', void 0), g(this, 'version', void 0), g(this, 'defaultForumLayout', void 0), g(this, 'iconEmoji', void 0), g(this, 'themeColor', void 0), g(this, 'safetyWarnings', void 0), g(this, 'blockedUserWarningDismissed', void 0), g(this, 'recipientFlags', void 0), g(this, 'linkedLobby', void 0), g(this, 'hdStreamingUntil', void 0), g(this, 'hdStreamingBuyerId', void 0), (this.id = e.id), (this.type = null !== (t = e.type) && void 0 !== t ? t : h.d4z.GUILD_TEXT), (this.name = null !== (n = e.name) && void 0 !== n ? n : ''), (this.guild_id = null !== (i = e.guild_id) && void 0 !== i ? i : null);
    }
}
function ec(e) {
    let t = e;
    return 'topic' in e && ((t.topic_ = e.topic), delete e.topic), 'position' in e && ((t.position_ = e.position), delete e.position), 'permissionOverwrites' in e && ((t.permissionOverwrites_ = e.permissionOverwrites), delete e.permissionOverwrites), 'bitrate' in e && ((t.bitrate_ = e.bitrate), delete e.bitrate), 'userLimit' in e && ((t.userLimit_ = e.userLimit), delete e.userLimit), 'nsfw' in e && ((t.nsfw_ = e.nsfw), delete e.nsfw), 'rateLimitPerUser' in e && ((t.rateLimitPerUser_ = e.rateLimitPerUser), delete e.rateLimitPerUser), 'flags' in e && ((t.flags_ = e.flags), delete e.flags), t;
}
let ed = Object.freeze({});
class ef extends eu {
    get permissionOverwrites() {
        var e;
        return null !== (e = this.permissionOverwrites_) && void 0 !== e ? e : ed;
    }
    get topic() {
        var e;
        return null !== (e = this.topic_) && void 0 !== e ? e : '';
    }
    get position() {
        var e;
        return null !== (e = this.position_) && void 0 !== e ? e : 0;
    }
    get bitrate() {
        var e;
        return null !== (e = this.bitrate_) && void 0 !== e ? e : h.epw;
    }
    get userLimit() {
        var e;
        return null !== (e = this.userLimit_) && void 0 !== e ? e : 0;
    }
    get nsfw() {
        var e;
        return null !== (e = this.nsfw_) && void 0 !== e && e;
    }
    get rateLimitPerUser() {
        var e;
        return null !== (e = this.rateLimitPerUser_) && void 0 !== e ? e : 0;
    }
    get flags() {
        var e;
        return null !== (e = this.flags_) && void 0 !== e ? e : 0;
    }
    toJS() {
        return { ...this };
    }
    set(e, t) {
        return this.merge(ec({ [e]: t }));
    }
    merge(e) {
        let t = null,
            n = ec(e);
        for (let e in n) n.hasOwnProperty(e) && this[e] !== n[e] && (null == t && (t = this.toJS()), (t[e] = n[e]));
        return null != t ? new this.constructor(t) : this;
    }
    computeLurkerPermissionsAllowList() {
        if (this.isGuildStageVoice() && f.Z.isPublic(this.id)) return d.L_;
    }
    isNSFW() {
        return this.nsfw;
    }
    isManaged() {
        return null != this.application_id;
    }
    isPrivate() {
        return D(this.type);
    }
    isGroupDM() {
        return this.type === h.d4z.GROUP_DM;
    }
    isMultiUserDM() {
        return L(this.type);
    }
    isDM() {
        return this.type === h.d4z.DM;
    }
    isSystemDM() {
        return !1;
    }
    isArchivedThread() {
        var e;
        return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0;
    }
    isLockedThread() {
        var e;
        return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.locked) === !0;
    }
    isScheduledForDeletion() {
        return this.hasFlag(m.zZ.IS_SCHEDULED_FOR_DELETION);
    }
    isArchivedLockedThread() {
        var e, t;
        return B.has(this.type) && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0 && (null === (t = this.threadMetadata) || void 0 === t ? void 0 : t.locked) === !0;
    }
    isForumPost() {
        return this.type === h.d4z.PUBLIC_THREAD && null != this.parentChannelThreadType && h.TPd.GUILD_THREADS_ONLY.has(this.parentChannelThreadType);
    }
    isRingable() {
        return h.TPd.CALLABLE.has(this.type) || this.type === h.d4z.GUILD_VOICE;
    }
    isCategory() {
        return this.type === h.d4z.GUILD_CATEGORY;
    }
    isVocal() {
        return k(this.type);
    }
    isGuildVocal() {
        return C(this.type);
    }
    isGuildVocalOrThread() {
        return this.isGuildVocal() || this.isVocalThread();
    }
    isGuildVoice() {
        return this.type === h.d4z.GUILD_VOICE;
    }
    isGuildStageVoice() {
        return this.type === h.d4z.GUILD_STAGE_VOICE;
    }
    isListenModeCapable() {
        return this.isGuildStageVoice();
    }
    isThread() {
        return F(this.type);
    }
    isAnnouncementThread() {
        return this.type === h.d4z.ANNOUNCEMENT_THREAD;
    }
    isVocalThread() {
        return this.type === h.d4z.PUBLIC_THREAD || this.type === h.d4z.PRIVATE_THREAD;
    }
    isActiveThread() {
        var e;
        return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) !== !0;
    }
    isDirectory() {
        return this.type === h.d4z.GUILD_DIRECTORY;
    }
    isForumLikeChannel() {
        return this.isForumChannel() || this.isMediaChannel();
    }
    isForumChannel() {
        return this.type === h.d4z.GUILD_FORUM;
    }
    isMediaChannel() {
        return this.type === h.d4z.GUILD_MEDIA;
    }
    isMediaPost() {
        return this.type === h.d4z.PUBLIC_THREAD && this.parentChannelThreadType === h.d4z.GUILD_MEDIA;
    }
    isRoleSubscriptionTemplatePreviewChannel() {
        return this.hasFlag(m.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
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
        return null !== (e = this.defaultSortOrder) && void 0 !== e ? e : l.z.LATEST_ACTIVITY;
    }
    getDefaultLayout() {
        return this.isMediaChannel() ? o.X.GRID : null == this.defaultForumLayout || this.defaultForumLayout === o.X.DEFAULT ? o.X.LIST : this.defaultForumLayout;
    }
    get accessPermissions() {
        return eo(this.type);
    }
    hasFlag(e) {
        return (0, _.yE)(this.flags, e);
    }
    get isHDStreamSplashed() {
        return null != this.hdStreamingUntil && new Date(this.hdStreamingUntil) > new Date();
    }
}
class e_ extends ef {
    static fromServer(e, t) {
        var n, i, r;
        let a = {
            application_id: e.application_id,
            appliedTags: e.applied_tags,
            availableTags: null != e.available_tags ? ei(e.available_tags) : void 0,
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
            guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
            icon: e.icon,
            iconEmoji: er(e.icon_emoji),
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
            name: null !== (i = e.name) && void 0 !== i ? i : '',
            nicks: en(e.nicks),
            nsfw_: e.nsfw,
            originChannelId: e.origin_channel_id,
            ownerId: e.owner_id,
            parent_id: e.parent_id,
            parentChannelThreadType: void 0,
            permissionOverwrites_: et(e.permission_overwrites),
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
                          invitable: null === (r = e.thread_metadata.invitable) || void 0 === r || r
                      }
                    : void 0,
            topic_: e.topic,
            totalMessageSent: e.total_message_sent,
            type: null != e.type ? e.type : h.d4z.UNKNOWN,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id
        };
        return (0, c.gh)(a, e_);
    }
    constructor(e) {
        super(e), (this.application_id = e.application_id), (this.appliedTags = e.appliedTags), (this.availableTags = e.availableTags), (this.bitrate_ = e.bitrate_), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultForumLayout = e.defaultForumLayout), (this.defaultReactionEmoji = e.defaultReactionEmoji), (this.defaultSortOrder = e.defaultSortOrder), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.icon = e.icon), (this.iconEmoji = e.iconEmoji), (this.isMessageRequest = e.isMessageRequest), (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp), (this.isSpam = e.isSpam), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.member = e.member), (this.memberCount = e.memberCount), (this.memberIdsPreview = e.memberIdsPreview), (this.memberListId = e.memberListId), (this.messageCount = e.messageCount), (this.nicks = e.nicks), (this.nsfw_ = e.nsfw_), (this.originChannelId = e.originChannelId), (this.ownerId = e.ownerId), (this.parent_id = e.parent_id), (this.parentChannelThreadType = e.parentChannelThreadType), (this.permissionOverwrites_ = e.permissionOverwrites_), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rawRecipients = e.rawRecipients), (this.recipients = e.recipients), (this.recipientFlags = e.recipientFlags), (this.rtcRegion = e.rtcRegion), (this.safetyWarnings = e.safetyWarnings), (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed), (this.template = e.template), (this.themeColor = e.themeColor), (this.threadMetadata = e.threadMetadata), (this.topic_ = e.topic_), (this.userLimit_ = e.userLimit_), (this.version = e.version), (this.videoQualityMode = e.videoQualityMode), (this.linkedLobby = e.linkedLobby), (this.hdStreamingUntil = e.hdStreamingUntil), (this.hdStreamingBuyerId = e.hdStreamingBuyerId);
    }
}
class ep extends ef {
    static fromServer(e, t) {
        var n, i, r, a;
        return eM({
            application_id: e.application_id,
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
            iconEmoji: er(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null !== (i = e.name) && void 0 !== i ? i : '',
            nsfw_: null !== (r = e.nsfw) && void 0 !== r && r,
            originChannelId: e.origin_channel_id,
            parent_id: e.parent_id,
            permissionOverwrites_: et(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null !== (a = e.rate_limit_per_user) && void 0 !== a ? a : 0,
            rtcRegion: e.rtc_region,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : h.d4z.GUILD_VOICE,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id
        });
    }
    constructor(e) {
        var t;
        super(e), (this.application_id = e.application_id), (this.bitrate_ = e.bitrate_), (this.flags_ = e.flags_), (this.iconEmoji = e.iconEmoji), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.memberListId = e.memberListId), (this.nsfw_ = e.nsfw_), (this.originChannelId = e.originChannelId), (this.parent_id = e.parent_id), (this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rtcRegion = e.rtcRegion), (this.themeColor = e.themeColor), (this.topic_ = e.topic_), (this.userLimit_ = e.userLimit_), (this.version = e.version), (this.videoQualityMode = e.videoQualityMode), (this.hdStreamingUntil = e.hdStreamingUntil), (this.hdStreamingBuyerId = e.hdStreamingBuyerId);
    }
}
class eh extends ef {
    static fromServer(e, t) {
        var n, i, r, a;
        return eM({
            application_id: e.application_id,
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
            iconEmoji: er(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null !== (i = e.name) && void 0 !== i ? i : '',
            nsfw_: null !== (r = e.nsfw) && void 0 !== r && r,
            parent_id: e.parent_id,
            permissionOverwrites_: et(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null !== (a = e.rate_limit_per_user) && void 0 !== a ? a : 0,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : h.d4z.GUILD_TEXT,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            version: e.version
        });
    }
    constructor(e) {
        var t;
        super(e), (this.application_id = e.application_id), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.iconEmoji = e.iconEmoji), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.memberListId = e.memberListId), (this.nsfw_ = e.nsfw_), (this.parent_id = e.parent_id), (this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.themeColor = e.themeColor), (this.topic_ = e.topic_), (this.version = e.version), (this.linkedLobby = e.linkedLobby), (this.hdStreamingBuyerId = e.hdStreamingBuyerId), (this.hdStreamingUntil = e.hdStreamingUntil);
    }
}
class em extends eh {}
class eg extends eh {}
class eE extends eh {}
class ev extends ep {}
class ey extends eh {}
class eI extends eh {}
class eT extends ep {}
class eb extends ef {
    static fromServer(e, t) {
        var n, i, r, a;
        let s = {
            availableTags: null != e.available_tags ? ei(e.available_tags) : [],
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
            guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
            iconEmoji: er(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null !== (i = e.name) && void 0 !== i ? i : '',
            nsfw_: null !== (r = e.nsfw) && void 0 !== r && r,
            parent_id: e.parent_id,
            permissionOverwrites_: et(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null !== (a = e.rate_limit_per_user) && void 0 !== a ? a : 0,
            template: e.template,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : h.d4z.GUILD_TEXT,
            version: e.version
        };
        return (0, c.gh)(s, eb);
    }
    constructor(e) {
        var t, n;
        super(e), (this.availableTags = null !== (t = e.availableTags) && void 0 !== t ? t : []), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultForumLayout = e.defaultForumLayout), (this.defaultReactionEmoji = e.defaultReactionEmoji), (this.defaultSortOrder = e.defaultSortOrder), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.iconEmoji = e.iconEmoji), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.memberListId = e.memberListId), (this.nsfw_ = e.nsfw_), (this.parent_id = e.parent_id), (this.permissionOverwrites_ = null !== (n = e.permissionOverwrites_) && void 0 !== n ? n : {}), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.template = e.template), (this.themeColor = e.themeColor), (this.topic_ = e.topic_), (this.version = e.version);
    }
}
class eS {
    getOrCompute(e) {
        let t = this.cache.get(e);
        if (null != t) return t;
        {
            let t = parseInt(e, 10);
            return this.cache.set(e, t), t;
        }
    }
    constructor(e = 100) {
        g(this, 'cache', void 0), (this.cache = new (s())(e));
    }
}
let eA = new eS(),
    eN = new eS();
class eC extends ef {
    static sortRecipients(e, t) {
        let n = eA.getOrCompute(t);
        return [...(null != e ? e : [])].sort((e, t) => (eN.getOrCompute(e.id) ^ n) - (eN.getOrCompute(t.id) ^ n));
    }
    static fromServer(e) {
        var t, n;
        let i = eC.sortRecipients(e.recipients, e.id),
            r = {
                application_id: e.application_id,
                flags_: e.flags,
                guild_id: null,
                icon: e.icon,
                id: e.id,
                isMessageRequest: e.is_message_request,
                isMessageRequestTimestamp: e.is_message_request_timestamp,
                isSpam: null !== (t = e.is_spam) && void 0 !== t && t,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                name: null !== (n = e.name) && void 0 !== n ? n : '',
                nicks: en(e.nicks),
                ownerId: e.owner_id,
                rawRecipients: i,
                recipients: i.map((e) => e.id),
                recipientFlags: e.recipient_flags,
                safetyWarnings: e.safety_warnings,
                blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
                type: null != e.type ? e.type : h.d4z.DM
            };
        return (0, c.gh)(r, eC);
    }
    isSystemDM() {
        let e = this.rawRecipients[0];
        return this.type === h.d4z.DM && null != e && !0 === e.system;
    }
    getRecipientId() {
        return this.recipients[0];
    }
    addRecipient(e, t, n) {
        if (e === n) return this;
        {
            var i;
            let n = this.set(
                'recipients',
                r()
                    .uniq([...(null !== (i = this.recipients) && void 0 !== i ? i : []), e])
                    .sort(p.default.compare)
            );
            return null == t
                ? n
                : n.set('nicks', {
                      ...n.nicks,
                      [e]: t
                  });
        }
    }
    removeRecipient(e) {
        return this.set('recipients', r().without(this.recipients, e));
    }
    constructor(e) {
        var t, n;
        super(e), (this.application_id = e.application_id), (this.flags_ = e.flags_), (this.icon = e.icon), (this.isMessageRequest = e.isMessageRequest), (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp), (this.isSpam = e.isSpam), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.nicks = e.nicks), (this.ownerId = e.ownerId), (this.rawRecipients = eC.sortRecipients(e.rawRecipients, this.id)), (this.recipients = [...(null !== (t = e.recipients) && void 0 !== t ? t : [])].sort(p.default.compare)), (this.recipientFlags = e.recipientFlags), (this.safetyWarnings = null !== (n = e.safetyWarnings) && void 0 !== n ? n : []), (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed);
    }
}
class eR extends eC {}
class eO extends eC {}
class eD extends ef {
    static fromServer(e, t) {
        var n, i, r, a, s;
        let o = {
            appliedTags: null !== (n = e.applied_tags) && void 0 !== n ? n : [],
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: null !== (i = null != t ? t : e.guild_id) && void 0 !== i ? i : null,
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
            name: null !== (r = e.name) && void 0 !== r ? r : '',
            nsfw_: null !== (a = e.nsfw) && void 0 !== a && a,
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
                          invitable: null === (s = e.thread_metadata.invitable) || void 0 === s || s
                      }
                    : void 0,
            totalMessageSent: e.total_message_sent,
            type: null != e.type ? e.type : h.d4z.PUBLIC_THREAD,
            userLimit_: e.user_limit,
            videoQualityMode: e.video_quality_mode
        };
        return (0, c.gh)(o, eD);
    }
    constructor(e) {
        var t;
        super(e), (this.appliedTags = null !== (t = e.appliedTags) && void 0 !== t ? t : []), (this.bitrate_ = e.bitrate_), (this.flags_ = e.flags_), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.member = e.member), (this.memberCount = e.memberCount), (this.memberIdsPreview = e.memberIdsPreview), (this.messageCount = e.messageCount), (this.nsfw_ = e.nsfw_), (this.ownerId = e.ownerId), (this.parent_id = e.parent_id), (this.parentChannelThreadType = e.parentChannelThreadType), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rtcRegion = e.rtcRegion), (this.threadMetadata = e.threadMetadata), (this.userLimit_ = e.userLimit_), (this.videoQualityMode = e.videoQualityMode);
    }
}
let ex = {
    [h.d4z.DM]: eC.fromServer,
    [h.d4z.GROUP_DM]: eC.fromServer,
    [h.d4z.GUILD_TEXT]: eh.fromServer,
    [h.d4z.GUILD_VOICE]: ep.fromServer,
    [h.d4z.GUILD_STAGE_VOICE]: ep.fromServer,
    [h.d4z.GUILD_CATEGORY]: eh.fromServer,
    [h.d4z.GUILD_ANNOUNCEMENT]: eh.fromServer,
    [h.d4z.GUILD_STORE]: eh.fromServer,
    [h.d4z.ANNOUNCEMENT_THREAD]: eD.fromServer,
    [h.d4z.PUBLIC_THREAD]: eD.fromServer,
    [h.d4z.PRIVATE_THREAD]: eD.fromServer,
    [h.d4z.GUILD_DIRECTORY]: eh.fromServer,
    [h.d4z.GUILD_FORUM]: eb.fromServer,
    [h.d4z.GUILD_MEDIA]: eb.fromServer
};
function eL(e, t) {
    var n, i;
    return (null !== (i = ex[null !== (n = e.type) && void 0 !== n ? n : h.d4z.GUILD_TEXT]) && void 0 !== i ? i : e_.fromServer)(e, t);
}
function eP(e) {
    return ek(e);
}
let ew = {
    [h.d4z.DM]: eR,
    [h.d4z.GROUP_DM]: eO,
    [h.d4z.GUILD_TEXT]: eI,
    [h.d4z.GUILD_VOICE]: eT,
    [h.d4z.GUILD_STAGE_VOICE]: ev,
    [h.d4z.GUILD_CATEGORY]: eg,
    [h.d4z.GUILD_ANNOUNCEMENT]: em,
    [h.d4z.GUILD_STORE]: ey,
    [h.d4z.ANNOUNCEMENT_THREAD]: eD,
    [h.d4z.PUBLIC_THREAD]: eD,
    [h.d4z.PRIVATE_THREAD]: eD,
    [h.d4z.GUILD_DIRECTORY]: eE,
    [h.d4z.GUILD_FORUM]: eb,
    [h.d4z.GUILD_MEDIA]: eb
};
function eM(e) {
    var t, n;
    let i = null !== (n = ew[null !== (t = e.type) && void 0 !== t ? t : h.d4z.GUILD_TEXT]) && void 0 !== n ? n : e_;
    return (0, c.gh)(e, i);
}
function ek(e) {
    var t, n;
    return new (null !== (n = ew[null !== (t = e.type) && void 0 !== t ? t : h.d4z.GUILD_TEXT]) && void 0 !== n ? n : e_)(ec(e));
}
