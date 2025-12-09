n.d(t, {
    $N: () => er,
    AW: () => I,
    CG: () => ed,
    Ec: () => V,
    Em: () => K,
    Gz: () => ef,
    Km: () => P,
    Lr: () => w,
    Q5: () => Y,
    Qm: () => U,
    Sf: () => eh,
    TK: () => X,
    Ti: () => C,
    Um: () => en,
    X_: () => ee,
    Y0: () => Q,
    _H: () => eG,
    bc: () => M,
    bw: () => D,
    createChannelRecord: () => eZ,
    dF: () => q,
    dy: () => eL,
    hv: () => L,
    iR: () => ei,
    jD: () => ek,
    mn: () => eD,
    nl: () => eg,
    oj: () => N,
    ov: () => J,
    q_: () => eM,
    r8: () => S,
    sR: () => k,
    tx: () => R,
    uC: () => H,
    vc: () => F,
    vd: () => Z,
    vg: () => et,
    xL: () => $,
    zS: () => z,
    zi: () => A,
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
    d = n(95015),
    f = n(283693),
    p = n(146085),
    _ = n(427679),
    m = n(709054),
    h = n(981631),
    g = n(176505);
function E(e, t, n) {
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
function b(e) {
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
function O(e, t) {
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
let v = new Set([
    h.d4z.GUILD_TEXT,
    h.d4z.GUILD_ANNOUNCEMENT,
    h.d4z.GUILD_STORE,
    h.d4z.ANNOUNCEMENT_THREAD,
    h.d4z.PUBLIC_THREAD,
    h.d4z.PRIVATE_THREAD,
    h.d4z.GUILD_DIRECTORY,
    h.d4z.GUILD_FORUM,
    h.d4z.GUILD_MEDIA,
    h.d4z.DM,
    h.d4z.GROUP_DM,
]);
function S(e) {
    return v.has(e);
}
let I = new Set([
        h.d4z.DM,
        h.d4z.GROUP_DM,
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_VOICE,
        h.d4z.GUILD_STAGE_VOICE,
        h.d4z.GUILD_CATEGORY,
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_STORE,
        h.d4z.ANNOUNCEMENT_THREAD,
        h.d4z.PUBLIC_THREAD,
        h.d4z.PRIVATE_THREAD,
        h.d4z.GUILD_DIRECTORY,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA,
    ]),
    T = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.ANNOUNCEMENT_THREAD,
        h.d4z.PUBLIC_THREAD,
        h.d4z.PRIVATE_THREAD,
    ]);
function A(e) {
    return T.has(e);
}
let C = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA,
        h.d4z.GUILD_VOICE,
        h.d4z.GUILD_STAGE_VOICE,
    ]),
    N = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_VOICE,
        h.d4z.GUILD_STAGE_VOICE,
        h.d4z.GUILD_CATEGORY,
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_STORE,
        h.d4z.ANNOUNCEMENT_THREAD,
        h.d4z.PUBLIC_THREAD,
        h.d4z.PRIVATE_THREAD,
        h.d4z.GUILD_DIRECTORY,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA,
    ]);
function P(e) {
    return N.has(e);
}
h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA;
let R = new Set([h.d4z.GUILD_VOICE, h.d4z.GUILD_STAGE_VOICE]);
function D(e) {
    return "SELECTABLE" !== e && R.has(e);
}
let w = new Set([h.d4z.GUILD_STAGE_VOICE]),
    x = new Set([h.d4z.DM, h.d4z.GROUP_DM]);
function L(e) {
    return x.has(e);
}
let j = new Set([h.d4z.GROUP_DM]);
function M(e) {
    return j.has(e);
}
let k = new Set([
    h.d4z.DM,
    h.d4z.GROUP_DM,
    h.d4z.GUILD_TEXT,
    h.d4z.GUILD_ANNOUNCEMENT,
    h.d4z.ANNOUNCEMENT_THREAD,
    h.d4z.PUBLIC_THREAD,
    h.d4z.PRIVATE_THREAD,
]);
function U(e) {
    return k.has(e);
}
let G = new Set([
    h.d4z.DM,
    h.d4z.GROUP_DM,
    h.d4z.GUILD_VOICE,
    h.d4z.GUILD_STAGE_VOICE,
    h.d4z.PUBLIC_THREAD,
    h.d4z.PRIVATE_THREAD,
]);
function Z(e) {
    return G.has(e);
}
let B = new Set([
    h.d4z.GUILD_TEXT,
    h.d4z.GUILD_ANNOUNCEMENT,
    h.d4z.ANNOUNCEMENT_THREAD,
    h.d4z.PUBLIC_THREAD,
    h.d4z.PRIVATE_THREAD,
    h.d4z.GUILD_DIRECTORY,
    h.d4z.GUILD_FORUM,
    h.d4z.GUILD_MEDIA,
    h.d4z.DM,
    h.d4z.GROUP_DM,
]);
function F(e) {
    return B.has(e);
}
let V = new Set([h.d4z.ANNOUNCEMENT_THREAD, h.d4z.PUBLIC_THREAD, h.d4z.PRIVATE_THREAD]),
    H = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA]);
function Y(e) {
    return V.has(e);
}
let W = new Set([
    h.d4z.DM,
    h.d4z.GROUP_DM,
    h.d4z.GUILD_TEXT,
    h.d4z.GUILD_ANNOUNCEMENT,
    h.d4z.ANNOUNCEMENT_THREAD,
    h.d4z.PUBLIC_THREAD,
    h.d4z.PRIVATE_THREAD,
    h.d4z.GUILD_FORUM,
    h.d4z.GUILD_MEDIA,
    h.d4z.GUILD_DIRECTORY,
    h.d4z.GUILD_VOICE,
    h.d4z.GUILD_STAGE_VOICE,
]);
function K(e) {
    return W.has(e);
}
let z = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_STORE,
        h.d4z.GUILD_VOICE,
        h.d4z.GUILD_STAGE_VOICE,
        h.d4z.ANNOUNCEMENT_THREAD,
        h.d4z.PUBLIC_THREAD,
        h.d4z.PRIVATE_THREAD,
        h.d4z.GUILD_DIRECTORY,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA,
    ]),
    q = new Set([
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_CATEGORY,
        h.d4z.GUILD_STORE,
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_VOICE,
        h.d4z.GUILD_STAGE_VOICE,
        h.d4z.GUILD_DIRECTORY,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA,
    ]),
    Q = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT]),
    X = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA]),
    J = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA,
        h.d4z.GUILD_VOICE,
        h.d4z.GUILD_STAGE_VOICE,
    ]),
    $ = new Set([
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA,
        h.d4z.ANNOUNCEMENT_THREAD,
    ]),
    ee = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA,
        h.d4z.ANNOUNCEMENT_THREAD,
        h.d4z.PUBLIC_THREAD,
        h.d4z.PRIVATE_THREAD,
        h.d4z.GUILD_VOICE,
        h.d4z.GUILD_STAGE_VOICE,
    ]),
    et = new Set([h.d4z.PUBLIC_THREAD, h.d4z.PRIVATE_THREAD, h.d4z.GUILD_VOICE, h.d4z.GUILD_STAGE_VOICE]),
    en = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA]),
    er = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_CATEGORY, h.d4z.GUILD_FORUM, h.d4z.GUILD_ANNOUNCEMENT]),
    ei = new Set([h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_FORUM, h.d4z.GUILD_VOICE]);
function ea(e) {
    let t = {};
    return (
        null == e ||
            e.forEach((e) => {
                t[e.id] = {
                    id: e.id,
                    type: e.type,
                    allow: u.vB(e.allow),
                    deny: u.vB(e.deny),
                };
            }),
        t
    );
}
function eo(e) {
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
              moderated: e.moderated,
              color: e.color,
          }));
}
function el(e) {
    return null != e
        ? {
              id: e.id,
              name: e.name,
          }
        : void 0;
}
let ec = u.$e(h.Plq.CONNECT, h.Plq.VIEW_CHANNEL),
    eu = h.S7T.CONNECT | h.S7T.VIEW_CHANNEL;
function ed(e) {
    return D(e) ? ec : h.Plq.VIEW_CHANNEL;
}
function ef(e) {
    return D(e) ? eu : h.S7T.VIEW_CHANNEL;
}
class ep {
    constructor(e) {
        var t, n, r;
        E(this, "id", void 0),
            E(this, "type", void 0),
            E(this, "name", void 0),
            E(this, "guild_id", void 0),
            E(this, "topic_", void 0),
            E(this, "position_", void 0),
            E(this, "permissionOverwrites_", void 0),
            E(this, "bitrate_", void 0),
            E(this, "rtcRegion", void 0),
            E(this, "videoQualityMode", void 0),
            E(this, "userLimit_", void 0),
            E(this, "recipients", void 0),
            E(this, "rawRecipients", void 0),
            E(this, "ownerId", void 0),
            E(this, "icon", void 0),
            E(this, "application_id", void 0),
            E(this, "nicks", void 0),
            E(this, "nsfw_", void 0),
            E(this, "parent_id", void 0),
            E(this, "memberListId", void 0),
            E(this, "rateLimitPerUser_", void 0),
            E(this, "defaultThreadRateLimitPerUser", void 0),
            E(this, "defaultAutoArchiveDuration", void 0),
            E(this, "flags_", void 0),
            E(this, "originChannelId", void 0),
            E(this, "lastMessageId", void 0),
            E(this, "lastPinTimestamp", void 0),
            E(this, "availableTags", void 0),
            E(this, "appliedTags", void 0),
            E(this, "messageCount", void 0),
            E(this, "memberCount", void 0),
            E(this, "threadMetadata", void 0),
            E(this, "memberIdsPreview", void 0),
            E(this, "member", void 0),
            E(this, "parentChannelThreadType", void 0),
            E(this, "template", void 0),
            E(this, "defaultReactionEmoji", void 0),
            E(this, "isMessageRequest", void 0),
            E(this, "isMessageRequestTimestamp", void 0),
            E(this, "isSpam", void 0),
            E(this, "totalMessageSent", void 0),
            E(this, "defaultSortOrder", void 0),
            E(this, "version", void 0),
            E(this, "defaultForumLayout", void 0),
            E(this, "defaultTagSetting", void 0),
            E(this, "iconEmoji", void 0),
            E(this, "themeColor", void 0),
            E(this, "safetyWarnings", void 0),
            E(this, "blockedUserWarningDismissed", void 0),
            E(this, "recipientFlags", void 0),
            E(this, "linkedLobby", void 0),
            E(this, "hdStreamingUntil", void 0),
            E(this, "hdStreamingBuyerId", void 0),
            (this.id = e.id),
            (this.type = null != (t = e.type) ? t : h.d4z.GUILD_TEXT),
            (this.name = null != (n = e.name) ? n : ""),
            (this.guild_id = null != (r = e.guild_id) ? r : null);
    }
}
function e_(e) {
    let t = e;
    return (
        "topic" in e && ((t.topic_ = e.topic), delete e.topic),
        "position" in e && ((t.position_ = e.position), delete e.position),
        "permissionOverwrites" in e &&
            ((t.permissionOverwrites_ = e.permissionOverwrites), delete e.permissionOverwrites),
        "bitrate" in e && ((t.bitrate_ = e.bitrate), delete e.bitrate),
        "userLimit" in e && ((t.userLimit_ = e.userLimit), delete e.userLimit),
        "nsfw" in e && ((t.nsfw_ = e.nsfw), delete e.nsfw),
        "rateLimitPerUser" in e && ((t.rateLimitPerUser_ = e.rateLimitPerUser), delete e.rateLimitPerUser),
        "flags" in e && ((t.flags_ = e.flags), delete e.flags),
        t
    );
}
let em = Object.freeze({});
class eh extends ep {
    get permissionOverwrites() {
        var e;
        return null != (e = this.permissionOverwrites_) ? e : em;
    }
    get topic() {
        var e;
        return null != (e = this.topic_) ? e : "";
    }
    get position() {
        var e;
        return null != (e = this.position_) ? e : 0;
    }
    get bitrate() {
        var e;
        return null != (e = this.bitrate_) ? e : h.epw;
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
        return this.merge(e_({ [e]: t }));
    }
    merge(e) {
        let t = null,
            n = e_(e);
        for (let e in n) n.hasOwnProperty(e) && this[e] !== n[e] && (null == t && (t = this.toJS()), (t[e] = n[e]));
        return null != t ? new this.constructor(t) : this;
    }
    computeLurkerPermissionsAllowList() {
        if (this.isGuildStageVoice() && _.Z.isPublic(this.id)) return p.L_;
    }
    isNSFW() {
        return this.nsfw;
    }
    isManaged() {
        return null != this.application_id;
    }
    isPrivate() {
        return L(this.type);
    }
    isGroupDM() {
        return this.type === h.d4z.GROUP_DM;
    }
    isMultiUserDM() {
        return M(this.type);
    }
    isDM() {
        return this.type === h.d4z.DM;
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
        return (
            V.has(this.type) &&
            (null == (e = this.threadMetadata) ? void 0 : e.archived) === !0 &&
            (null == (t = this.threadMetadata) ? void 0 : t.locked) === !0
        );
    }
    isForumPost() {
        return (
            this.type === h.d4z.PUBLIC_THREAD &&
            null != this.parentChannelThreadType &&
            h.TPd.GUILD_THREADS_ONLY.has(this.parentChannelThreadType)
        );
    }
    isRingable() {
        return h.TPd.CALLABLE.has(this.type) || this.type === h.d4z.GUILD_VOICE;
    }
    isCategory() {
        return this.type === h.d4z.GUILD_CATEGORY;
    }
    isVocal() {
        return Z(this.type);
    }
    isGuildVocal() {
        return D(this.type);
    }
    isGuildVocalOrThread() {
        return this.isGuildVocal() || this.isVocalThread();
    }
    isGuildVoice() {
        return this.type === h.d4z.GUILD_VOICE;
    }
    isGuildVoiceOrThread() {
        return this.isGuildVoice() || this.isVocalThread();
    }
    isGuildStageVoice() {
        return this.type === h.d4z.GUILD_STAGE_VOICE;
    }
    isListenModeCapable() {
        return this.isGuildStageVoice();
    }
    isThread() {
        return Y(this.type);
    }
    isAnnouncementThread() {
        return this.type === h.d4z.ANNOUNCEMENT_THREAD;
    }
    isVocalThread() {
        return this.type === h.d4z.PUBLIC_THREAD || this.type === h.d4z.PRIVATE_THREAD;
    }
    isActiveThread() {
        var e;
        return this.isThread() && (null == (e = this.threadMetadata) ? void 0 : e.archived) !== !0;
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
        return null != (e = this.defaultSortOrder) ? e : c.z.LATEST_ACTIVITY;
    }
    getDefaultLayout() {
        return this.isMediaChannel()
            ? s.X.GRID
            : null == this.defaultForumLayout || this.defaultForumLayout === s.X.DEFAULT
              ? s.X.LIST
              : this.defaultForumLayout;
    }
    getDefaultTagSetting() {
        var e;
        return null != (e = this.defaultTagSetting) ? e : l.z.MATCH_SOME;
    }
    isModeratorReportChannel() {
        return this.hasFlag(g.zZ.IS_MODERATOR_REPORT_CHANNEL);
    }
    get accessPermissions() {
        return ed(this.type);
    }
    hasFlag(e) {
        return (0, d.yE)(this.flags, e);
    }
    get isHDStreamSplashed() {
        return null != this.hdStreamingUntil && new Date(this.hdStreamingUntil) > new Date();
    }
}
class eg extends eh {
    static fromServer(e, t) {
        var n, r, i;
        let a = {
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
                          emojiName: e.default_reaction_emoji.emoji_name,
                      }
                    : void 0,
            defaultSortOrder: e.default_sort_order,
            defaultTagSetting: e.default_tag_setting,
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
                          joinTimestamp: e.member.join_timestamp,
                      }
                    : void 0,
            memberCount: e.member_count,
            memberIdsPreview: e.member_ids_preview,
            memberListId: e.member_list_id,
            messageCount: e.message_count,
            name: null != (r = e.name) ? r : "",
            nicks: eo(e.nicks),
            nsfw_: e.nsfw,
            originChannelId: e.origin_channel_id,
            ownerId: e.owner_id,
            parent_id: e.parent_id,
            parentChannelThreadType: void 0,
            permissionOverwrites_: ea(e.permission_overwrites),
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
                          invitable: null == (i = e.thread_metadata.invitable) || i,
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
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
        };
        return (0, f.gh)(a, eg);
    }
    constructor(e) {
        super(e),
            (this.application_id = e.application_id),
            (this.appliedTags = e.appliedTags),
            (this.availableTags = e.availableTags),
            (this.bitrate_ = e.bitrate_),
            (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration),
            (this.defaultForumLayout = e.defaultForumLayout),
            (this.defaultReactionEmoji = e.defaultReactionEmoji),
            (this.defaultSortOrder = e.defaultSortOrder),
            (this.defaultTagSetting = e.defaultTagSetting),
            (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser),
            (this.flags_ = e.flags_),
            (this.icon = e.icon),
            (this.iconEmoji = e.iconEmoji),
            (this.isMessageRequest = e.isMessageRequest),
            (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp),
            (this.isSpam = e.isSpam),
            (this.lastMessageId = e.lastMessageId),
            (this.lastPinTimestamp = e.lastPinTimestamp),
            (this.member = e.member),
            (this.memberCount = e.memberCount),
            (this.memberIdsPreview = e.memberIdsPreview),
            (this.memberListId = e.memberListId),
            (this.messageCount = e.messageCount),
            (this.nicks = e.nicks),
            (this.nsfw_ = e.nsfw_),
            (this.originChannelId = e.originChannelId),
            (this.ownerId = e.ownerId),
            (this.parent_id = e.parent_id),
            (this.parentChannelThreadType = e.parentChannelThreadType),
            (this.permissionOverwrites_ = e.permissionOverwrites_),
            (this.position_ = e.position_),
            (this.rateLimitPerUser_ = e.rateLimitPerUser_),
            (this.rawRecipients = e.rawRecipients),
            (this.recipients = e.recipients),
            (this.recipientFlags = e.recipientFlags),
            (this.rtcRegion = e.rtcRegion),
            (this.safetyWarnings = e.safetyWarnings),
            (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed),
            (this.template = e.template),
            (this.themeColor = e.themeColor),
            (this.threadMetadata = e.threadMetadata),
            (this.topic_ = e.topic_),
            (this.userLimit_ = e.userLimit_),
            (this.version = e.version),
            (this.videoQualityMode = e.videoQualityMode),
            (this.linkedLobby = e.linkedLobby),
            (this.hdStreamingUntil = e.hdStreamingUntil),
            (this.hdStreamingBuyerId = e.hdStreamingBuyerId);
    }
}
class eE extends eh {
    static fromServer(e, t) {
        var n, r, i, a;
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
            name: null != (r = e.name) ? r : "",
            nsfw_: null != (i = e.nsfw) && i,
            originChannelId: e.origin_channel_id,
            parent_id: e.parent_id,
            permissionOverwrites_: ea(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null != (a = e.rate_limit_per_user) ? a : 0,
            rtcRegion: e.rtc_region,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : h.d4z.GUILD_VOICE,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
        });
    }
    constructor(e) {
        var t;
        super(e),
            (this.application_id = e.application_id),
            (this.bitrate_ = e.bitrate_),
            (this.flags_ = e.flags_),
            (this.iconEmoji = e.iconEmoji),
            (this.lastMessageId = e.lastMessageId),
            (this.lastPinTimestamp = e.lastPinTimestamp),
            (this.memberListId = e.memberListId),
            (this.nsfw_ = e.nsfw_),
            (this.originChannelId = e.originChannelId),
            (this.parent_id = e.parent_id),
            (this.permissionOverwrites_ = null != (t = e.permissionOverwrites_) ? t : {}),
            (this.position_ = e.position_),
            (this.rateLimitPerUser_ = e.rateLimitPerUser_),
            (this.rtcRegion = e.rtcRegion),
            (this.themeColor = e.themeColor),
            (this.topic_ = e.topic_),
            (this.userLimit_ = e.userLimit_),
            (this.version = e.version),
            (this.videoQualityMode = e.videoQualityMode),
            (this.hdStreamingUntil = e.hdStreamingUntil),
            (this.hdStreamingBuyerId = e.hdStreamingBuyerId);
    }
}
class eb extends eh {
    static fromServer(e, t) {
        var n, r, i, a;
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
            name: null != (r = e.name) ? r : "",
            nsfw_: null != (i = e.nsfw) && i,
            parent_id: e.parent_id,
            permissionOverwrites_: ea(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null != (a = e.rate_limit_per_user) ? a : 0,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : h.d4z.GUILD_TEXT,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            version: e.version,
        });
    }
    constructor(e) {
        var t;
        super(e),
            (this.application_id = e.application_id),
            (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration),
            (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser),
            (this.flags_ = e.flags_),
            (this.iconEmoji = e.iconEmoji),
            (this.lastMessageId = e.lastMessageId),
            (this.lastPinTimestamp = e.lastPinTimestamp),
            (this.memberListId = e.memberListId),
            (this.nsfw_ = e.nsfw_),
            (this.parent_id = e.parent_id),
            (this.permissionOverwrites_ = null != (t = e.permissionOverwrites_) ? t : {}),
            (this.position_ = e.position_),
            (this.rateLimitPerUser_ = e.rateLimitPerUser_),
            (this.themeColor = e.themeColor),
            (this.topic_ = e.topic_),
            (this.version = e.version),
            (this.linkedLobby = e.linkedLobby),
            (this.hdStreamingBuyerId = e.hdStreamingBuyerId),
            (this.hdStreamingUntil = e.hdStreamingUntil);
    }
}
class ey extends eb {}
class eO extends eb {}
class ev extends eb {}
class eS extends eE {}
class eI extends eb {}
class eT extends eb {}
class eA extends eE {}
class eC extends eh {
    static fromServer(e, t) {
        var n, r, i, a;
        let o = {
            availableTags: null != e.available_tags ? es(e.available_tags) : [],
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultForumLayout: e.default_forum_layout,
            defaultReactionEmoji:
                null != e.default_reaction_emoji
                    ? {
                          emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
                          emojiName: e.default_reaction_emoji.emoji_name,
                      }
                    : void 0,
            defaultSortOrder: e.default_sort_order,
            defaultTagSetting: e.default_tag_setting,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: null != (n = null != t ? t : e.guild_id) ? n : null,
            iconEmoji: el(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null != (r = e.name) ? r : "",
            nsfw_: null != (i = e.nsfw) && i,
            parent_id: e.parent_id,
            permissionOverwrites_: ea(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null != (a = e.rate_limit_per_user) ? a : 0,
            template: e.template,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : h.d4z.GUILD_TEXT,
            version: e.version,
        };
        return (0, f.gh)(o, eC);
    }
    constructor(e) {
        var t, n;
        super(e),
            (this.availableTags = null != (t = e.availableTags) ? t : []),
            (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration),
            (this.defaultForumLayout = e.defaultForumLayout),
            (this.defaultReactionEmoji = e.defaultReactionEmoji),
            (this.defaultSortOrder = e.defaultSortOrder),
            (this.defaultTagSetting = e.defaultTagSetting),
            (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser),
            (this.flags_ = e.flags_),
            (this.iconEmoji = e.iconEmoji),
            (this.lastMessageId = e.lastMessageId),
            (this.lastPinTimestamp = e.lastPinTimestamp),
            (this.memberListId = e.memberListId),
            (this.nsfw_ = e.nsfw_),
            (this.parent_id = e.parent_id),
            (this.permissionOverwrites_ = null != (n = e.permissionOverwrites_) ? n : {}),
            (this.position_ = e.position_),
            (this.rateLimitPerUser_ = e.rateLimitPerUser_),
            (this.template = e.template),
            (this.themeColor = e.themeColor),
            (this.topic_ = e.topic_),
            (this.version = e.version);
    }
}
class eN {
    getOrCompute(e) {
        let t = this.cache.get(e);
        if (null != t) return t;
        {
            let t = parseInt(e, 10);
            return this.cache.set(e, t), t;
        }
    }
    constructor(e = 100) {
        E(this, "cache", void 0), (this.cache = new (o())(e));
    }
}
let eP = new eN(),
    eR = new eN();
class eD extends eh {
    static sortRecipients(e, t) {
        let n = eP.getOrCompute(t);
        return [...(null != e ? e : [])].sort((e, t) => (eR.getOrCompute(e.id) ^ n) - (eR.getOrCompute(t.id) ^ n));
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
                name: null != (n = e.name) ? n : "",
                nicks: eo(e.nicks),
                ownerId: e.owner_id,
                rawRecipients: r,
                recipients: r.map((e) => e.id),
                recipientFlags: e.recipient_flags,
                safetyWarnings: e.safety_warnings,
                blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
                type: null != e.type ? e.type : h.d4z.DM,
            };
        return (0, f.gh)(i, eD);
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
            var r;
            let n = this.set(
                "recipients",
                i()
                    .uniq([...(null != (r = this.recipients) ? r : []), e])
                    .sort(m.default.compare),
            );
            return null == t ? n : n.set("nicks", O(b({}, n.nicks), { [e]: t }));
        }
    }
    removeRecipient(e) {
        return this.set("recipients", i().without(this.recipients, e));
    }
    constructor(e) {
        var t, n;
        super(e),
            (this.application_id = e.application_id),
            (this.flags_ = e.flags_),
            (this.icon = e.icon),
            (this.isMessageRequest = e.isMessageRequest),
            (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp),
            (this.isSpam = e.isSpam),
            (this.lastMessageId = e.lastMessageId),
            (this.lastPinTimestamp = e.lastPinTimestamp),
            (this.nicks = e.nicks),
            (this.ownerId = e.ownerId),
            (this.rawRecipients = eD.sortRecipients(e.rawRecipients, this.id)),
            (this.recipients = [...(null != (t = e.recipients) ? t : [])].sort(m.default.compare)),
            (this.recipientFlags = e.recipientFlags),
            (this.safetyWarnings = null != (n = e.safetyWarnings) ? n : []),
            (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed);
    }
}
class ew extends eD {}
class ex extends eD {}
class eL extends eh {
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
                          joinTimestamp: e.member.join_timestamp,
                      }
                    : void 0,
            memberCount: e.member_count,
            memberIdsPreview: e.member_ids_preview,
            messageCount: e.message_count,
            name: null != (i = e.name) ? i : "",
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
                          invitable: null == (o = e.thread_metadata.invitable) || o,
                      }
                    : void 0,
            totalMessageSent: e.total_message_sent,
            type: null != e.type ? e.type : h.d4z.PUBLIC_THREAD,
            userLimit_: e.user_limit,
            videoQualityMode: e.video_quality_mode,
        };
        return (0, f.gh)(s, eL);
    }
    constructor(e) {
        var t;
        super(e),
            (this.appliedTags = null != (t = e.appliedTags) ? t : []),
            (this.bitrate_ = e.bitrate_),
            (this.flags_ = e.flags_),
            (this.lastMessageId = e.lastMessageId),
            (this.lastPinTimestamp = e.lastPinTimestamp),
            (this.member = e.member),
            (this.memberCount = e.memberCount),
            (this.memberIdsPreview = e.memberIdsPreview),
            (this.messageCount = e.messageCount),
            (this.nsfw_ = e.nsfw_),
            (this.ownerId = e.ownerId),
            (this.parent_id = e.parent_id),
            (this.parentChannelThreadType = e.parentChannelThreadType),
            (this.rateLimitPerUser_ = e.rateLimitPerUser_),
            (this.rtcRegion = e.rtcRegion),
            (this.threadMetadata = e.threadMetadata),
            (this.userLimit_ = e.userLimit_),
            (this.videoQualityMode = e.videoQualityMode);
    }
}
let ej = {
    [h.d4z.DM]: eD.fromServer,
    [h.d4z.GROUP_DM]: eD.fromServer,
    [h.d4z.GUILD_TEXT]: eb.fromServer,
    [h.d4z.GUILD_VOICE]: eE.fromServer,
    [h.d4z.GUILD_STAGE_VOICE]: eE.fromServer,
    [h.d4z.GUILD_CATEGORY]: eb.fromServer,
    [h.d4z.GUILD_ANNOUNCEMENT]: eb.fromServer,
    [h.d4z.GUILD_STORE]: eb.fromServer,
    [h.d4z.ANNOUNCEMENT_THREAD]: eL.fromServer,
    [h.d4z.PUBLIC_THREAD]: eL.fromServer,
    [h.d4z.PRIVATE_THREAD]: eL.fromServer,
    [h.d4z.GUILD_DIRECTORY]: eb.fromServer,
    [h.d4z.GUILD_FORUM]: eC.fromServer,
    [h.d4z.GUILD_MEDIA]: eC.fromServer,
};
function eM(e, t) {
    var n, r;
    return (null != (r = ej[null != (n = e.type) ? n : h.d4z.GUILD_TEXT]) ? r : eg.fromServer)(e, t);
}
function ek(e) {
    return eZ(e);
}
let eU = {
    [h.d4z.DM]: ew,
    [h.d4z.GROUP_DM]: ex,
    [h.d4z.GUILD_TEXT]: eT,
    [h.d4z.GUILD_VOICE]: eA,
    [h.d4z.GUILD_STAGE_VOICE]: eS,
    [h.d4z.GUILD_CATEGORY]: eO,
    [h.d4z.GUILD_ANNOUNCEMENT]: ey,
    [h.d4z.GUILD_STORE]: eI,
    [h.d4z.ANNOUNCEMENT_THREAD]: eL,
    [h.d4z.PUBLIC_THREAD]: eL,
    [h.d4z.PRIVATE_THREAD]: eL,
    [h.d4z.GUILD_DIRECTORY]: ev,
    [h.d4z.GUILD_FORUM]: eC,
    [h.d4z.GUILD_MEDIA]: eC,
};
function eG(e) {
    var t, n;
    let r = null != (n = eU[null != (t = e.type) ? t : h.d4z.GUILD_TEXT]) ? n : eg;
    return (0, f.gh)(e, r);
}
function eZ(e) {
    var t, n;
    return new (null != (n = eU[null != (t = e.type) ? t : h.d4z.GUILD_TEXT]) ? n : eg)(e_(e));
}
