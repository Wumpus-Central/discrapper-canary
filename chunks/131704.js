r.d(n, {
    $N: function () {
        return er;
    },
    AW: function () {
        return S;
    },
    CG: function () {
        return ed;
    },
    Ec: function () {
        return j;
    },
    Em: function () {
        return K;
    },
    Gz: function () {
        return ef;
    },
    Km: function () {
        return O;
    },
    Lr: function () {
        return x;
    },
    Q5: function () {
        return Y;
    },
    Qm: function () {
        return B;
    },
    Sf: function () {
        return em;
    },
    TK: function () {
        return X;
    },
    Ti: function () {
        return C;
    },
    Um: function () {
        return en;
    },
    X_: function () {
        return ee;
    },
    Y0: function () {
        return Q;
    },
    _H: function () {
        return eG;
    },
    bc: function () {
        return k;
    },
    bw: function () {
        return L;
    },
    dF: function () {
        return q;
    },
    hv: function () {
        return P;
    },
    iR: function () {
        return ei;
    },
    jD: function () {
        return eU;
    },
    kt: function () {
        return eZ;
    },
    mn: function () {
        return eL;
    },
    nl: function () {
        return eg;
    },
    oj: function () {
        return R;
    },
    ov: function () {
        return J;
    },
    q_: function () {
        return ek;
    },
    r8: function () {
        return y;
    },
    sR: function () {
        return U;
    },
    tx: function () {
        return D;
    },
    uC: function () {
        return H;
    },
    vc: function () {
        return V;
    },
    vd: function () {
        return Z;
    },
    vg: function () {
        return et;
    },
    xL: function () {
        return $;
    },
    zS: function () {
        return z;
    },
    zi: function () {
        return N;
    }
});
var i = r(47120);
var a = r(724458);
var s = r(789020);
var o = r(392711),
    l = r.n(o),
    u = r(31775),
    c = r.n(u),
    d = r(313361),
    f = r(683860),
    _ = r(149765),
    h = r(283693),
    p = r(146085),
    m = r(427679),
    g = r(630388),
    E = r(709054),
    v = r(981631),
    I = r(176505);
function T(e, n, r) {
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
let b = new Set([v.d4z.GUILD_TEXT, v.d4z.GUILD_ANNOUNCEMENT, v.d4z.GUILD_STORE, v.d4z.ANNOUNCEMENT_THREAD, v.d4z.PUBLIC_THREAD, v.d4z.PRIVATE_THREAD, v.d4z.GUILD_DIRECTORY, v.d4z.GUILD_FORUM, v.d4z.GUILD_MEDIA, v.d4z.DM, v.d4z.GROUP_DM]);
function y(e) {
    return b.has(e);
}
let S = new Set([v.d4z.DM, v.d4z.GROUP_DM, v.d4z.GUILD_TEXT, v.d4z.GUILD_VOICE, v.d4z.GUILD_STAGE_VOICE, v.d4z.GUILD_CATEGORY, v.d4z.GUILD_ANNOUNCEMENT, v.d4z.GUILD_STORE, v.d4z.ANNOUNCEMENT_THREAD, v.d4z.PUBLIC_THREAD, v.d4z.PRIVATE_THREAD, v.d4z.GUILD_DIRECTORY, v.d4z.GUILD_FORUM, v.d4z.GUILD_MEDIA]),
    A = new Set([v.d4z.GUILD_TEXT, v.d4z.GUILD_ANNOUNCEMENT, v.d4z.ANNOUNCEMENT_THREAD, v.d4z.PUBLIC_THREAD, v.d4z.PRIVATE_THREAD]);
function N(e) {
    return A.has(e);
}
let C = new Set([v.d4z.GUILD_TEXT, v.d4z.GUILD_ANNOUNCEMENT, v.d4z.GUILD_FORUM, v.d4z.GUILD_MEDIA, v.d4z.GUILD_VOICE, v.d4z.GUILD_STAGE_VOICE]),
    R = new Set([v.d4z.GUILD_TEXT, v.d4z.GUILD_VOICE, v.d4z.GUILD_STAGE_VOICE, v.d4z.GUILD_CATEGORY, v.d4z.GUILD_ANNOUNCEMENT, v.d4z.GUILD_STORE, v.d4z.ANNOUNCEMENT_THREAD, v.d4z.PUBLIC_THREAD, v.d4z.PRIVATE_THREAD, v.d4z.GUILD_DIRECTORY, v.d4z.GUILD_FORUM, v.d4z.GUILD_MEDIA]);
function O(e) {
    return R.has(e);
}
v.d4z.GUILD_TEXT, v.d4z.GUILD_ANNOUNCEMENT, v.d4z.GUILD_FORUM, v.d4z.GUILD_MEDIA;
let D = new Set([v.d4z.GUILD_VOICE, v.d4z.GUILD_STAGE_VOICE]);
function L(e) {
    return 'SELECTABLE' !== e && D.has(e);
}
let x = new Set([v.d4z.GUILD_STAGE_VOICE]),
    w = new Set([v.d4z.DM, v.d4z.GROUP_DM]);
function P(e) {
    return w.has(e);
}
let M = new Set([v.d4z.GROUP_DM]);
function k(e) {
    return M.has(e);
}
let U = new Set([v.d4z.DM, v.d4z.GROUP_DM, v.d4z.GUILD_TEXT, v.d4z.GUILD_ANNOUNCEMENT, v.d4z.ANNOUNCEMENT_THREAD, v.d4z.PUBLIC_THREAD, v.d4z.PRIVATE_THREAD]);
function B(e) {
    return U.has(e);
}
let G = new Set([v.d4z.DM, v.d4z.GROUP_DM, v.d4z.GUILD_VOICE, v.d4z.GUILD_STAGE_VOICE, v.d4z.PUBLIC_THREAD, v.d4z.PRIVATE_THREAD]);
function Z(e) {
    return G.has(e);
}
let F = new Set([v.d4z.GUILD_TEXT, v.d4z.GUILD_ANNOUNCEMENT, v.d4z.ANNOUNCEMENT_THREAD, v.d4z.PUBLIC_THREAD, v.d4z.PRIVATE_THREAD, v.d4z.GUILD_DIRECTORY, v.d4z.GUILD_FORUM, v.d4z.GUILD_MEDIA, v.d4z.DM, v.d4z.GROUP_DM]);
function V(e) {
    return F.has(e);
}
let j = new Set([v.d4z.ANNOUNCEMENT_THREAD, v.d4z.PUBLIC_THREAD, v.d4z.PRIVATE_THREAD]),
    H = new Set([v.d4z.GUILD_TEXT, v.d4z.GUILD_ANNOUNCEMENT, v.d4z.GUILD_FORUM, v.d4z.GUILD_MEDIA]);
function Y(e) {
    return j.has(e);
}
let W = new Set([v.d4z.DM, v.d4z.GROUP_DM, v.d4z.GUILD_TEXT, v.d4z.GUILD_ANNOUNCEMENT, v.d4z.ANNOUNCEMENT_THREAD, v.d4z.PUBLIC_THREAD, v.d4z.PRIVATE_THREAD, v.d4z.GUILD_FORUM, v.d4z.GUILD_MEDIA, v.d4z.GUILD_DIRECTORY, v.d4z.GUILD_VOICE, v.d4z.GUILD_STAGE_VOICE]);
function K(e) {
    return W.has(e);
}
let z = new Set([v.d4z.GUILD_TEXT, v.d4z.GUILD_ANNOUNCEMENT, v.d4z.GUILD_STORE, v.d4z.GUILD_VOICE, v.d4z.GUILD_STAGE_VOICE, v.d4z.ANNOUNCEMENT_THREAD, v.d4z.PUBLIC_THREAD, v.d4z.PRIVATE_THREAD, v.d4z.GUILD_DIRECTORY, v.d4z.GUILD_FORUM, v.d4z.GUILD_MEDIA]),
    q = new Set([v.d4z.GUILD_ANNOUNCEMENT, v.d4z.GUILD_CATEGORY, v.d4z.GUILD_STORE, v.d4z.GUILD_TEXT, v.d4z.GUILD_VOICE, v.d4z.GUILD_STAGE_VOICE, v.d4z.GUILD_DIRECTORY, v.d4z.GUILD_FORUM, v.d4z.GUILD_MEDIA]),
    Q = new Set([v.d4z.GUILD_TEXT, v.d4z.GUILD_ANNOUNCEMENT]),
    X = new Set([v.d4z.GUILD_TEXT, v.d4z.GUILD_ANNOUNCEMENT, v.d4z.GUILD_FORUM, v.d4z.GUILD_MEDIA]),
    J = new Set([v.d4z.GUILD_TEXT, v.d4z.GUILD_ANNOUNCEMENT, v.d4z.GUILD_FORUM, v.d4z.GUILD_MEDIA, v.d4z.GUILD_VOICE, v.d4z.GUILD_STAGE_VOICE]),
    $ = new Set([v.d4z.GUILD_ANNOUNCEMENT, v.d4z.GUILD_TEXT, v.d4z.GUILD_FORUM, v.d4z.GUILD_MEDIA, v.d4z.ANNOUNCEMENT_THREAD]),
    ee = new Set([v.d4z.GUILD_TEXT, v.d4z.GUILD_FORUM, v.d4z.GUILD_MEDIA, v.d4z.ANNOUNCEMENT_THREAD, v.d4z.PUBLIC_THREAD, v.d4z.PRIVATE_THREAD, v.d4z.GUILD_VOICE, v.d4z.GUILD_STAGE_VOICE]),
    et = new Set([v.d4z.PUBLIC_THREAD, v.d4z.PRIVATE_THREAD, v.d4z.GUILD_VOICE, v.d4z.GUILD_STAGE_VOICE]),
    en = new Set([v.d4z.GUILD_TEXT, v.d4z.GUILD_FORUM, v.d4z.GUILD_MEDIA]),
    er = new Set([v.d4z.GUILD_TEXT, v.d4z.GUILD_CATEGORY, v.d4z.GUILD_FORUM, v.d4z.GUILD_ANNOUNCEMENT]),
    ei = new Set([v.d4z.GUILD_TEXT, v.d4z.GUILD_ANNOUNCEMENT, v.d4z.GUILD_FORUM, v.d4z.GUILD_VOICE]);
function ea(e) {
    let n = {};
    return (
        null == e ||
            e.forEach((e) => {
                n[e.id] = {
                    id: e.id,
                    type: e.type,
                    allow: _.vB(e.allow),
                    deny: _.vB(e.deny)
                };
            }),
        n
    );
}
function es(e) {
    return null == e ? {} : l().reduce(e, (e, n) => ((e[n.id] = n.nick), e), {});
}
function eo(e) {
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
let eu = _.$e(v.Plq.CONNECT, v.Plq.VIEW_CHANNEL),
    ec = v.S7T.CONNECT | v.S7T.VIEW_CHANNEL;
function ed(e) {
    return L(e) ? eu : v.Plq.VIEW_CHANNEL;
}
function ef(e) {
    return L(e) ? ec : v.S7T.VIEW_CHANNEL;
}
class e_ {
    constructor(e) {
        var n, r, i;
        T(this, 'id', void 0), T(this, 'type', void 0), T(this, 'name', void 0), T(this, 'guild_id', void 0), T(this, 'topic_', void 0), T(this, 'position_', void 0), T(this, 'permissionOverwrites_', void 0), T(this, 'bitrate_', void 0), T(this, 'rtcRegion', void 0), T(this, 'videoQualityMode', void 0), T(this, 'userLimit_', void 0), T(this, 'recipients', void 0), T(this, 'rawRecipients', void 0), T(this, 'ownerId', void 0), T(this, 'icon', void 0), T(this, 'application_id', void 0), T(this, 'nicks', void 0), T(this, 'nsfw_', void 0), T(this, 'parent_id', void 0), T(this, 'memberListId', void 0), T(this, 'rateLimitPerUser_', void 0), T(this, 'defaultThreadRateLimitPerUser', void 0), T(this, 'defaultAutoArchiveDuration', void 0), T(this, 'flags_', void 0), T(this, 'originChannelId', void 0), T(this, 'lastMessageId', void 0), T(this, 'lastPinTimestamp', void 0), T(this, 'availableTags', void 0), T(this, 'appliedTags', void 0), T(this, 'messageCount', void 0), T(this, 'memberCount', void 0), T(this, 'threadMetadata', void 0), T(this, 'memberIdsPreview', void 0), T(this, 'member', void 0), T(this, 'parentChannelThreadType', void 0), T(this, 'template', void 0), T(this, 'defaultReactionEmoji', void 0), T(this, 'isMessageRequest', void 0), T(this, 'isMessageRequestTimestamp', void 0), T(this, 'isSpam', void 0), T(this, 'totalMessageSent', void 0), T(this, 'defaultSortOrder', void 0), T(this, 'version', void 0), T(this, 'defaultForumLayout', void 0), T(this, 'iconEmoji', void 0), T(this, 'themeColor', void 0), T(this, 'safetyWarnings', void 0), T(this, 'blockedUserWarningDismissed', void 0), T(this, 'recipientFlags', void 0), T(this, 'linkedLobby', void 0), T(this, 'hdStreamingUntil', void 0), T(this, 'hdStreamingBuyerId', void 0), (this.id = e.id), (this.type = null !== (n = e.type) && void 0 !== n ? n : v.d4z.GUILD_TEXT), (this.name = null !== (r = e.name) && void 0 !== r ? r : ''), (this.guild_id = null !== (i = e.guild_id) && void 0 !== i ? i : null);
    }
}
function eh(e) {
    let n = e;
    return 'topic' in e && ((n.topic_ = e.topic), delete e.topic), 'position' in e && ((n.position_ = e.position), delete e.position), 'permissionOverwrites' in e && ((n.permissionOverwrites_ = e.permissionOverwrites), delete e.permissionOverwrites), 'bitrate' in e && ((n.bitrate_ = e.bitrate), delete e.bitrate), 'userLimit' in e && ((n.userLimit_ = e.userLimit), delete e.userLimit), 'nsfw' in e && ((n.nsfw_ = e.nsfw), delete e.nsfw), 'rateLimitPerUser' in e && ((n.rateLimitPerUser_ = e.rateLimitPerUser), delete e.rateLimitPerUser), 'flags' in e && ((n.flags_ = e.flags), delete e.flags), n;
}
let ep = Object.freeze({});
class em extends e_ {
    get permissionOverwrites() {
        var e;
        return null !== (e = this.permissionOverwrites_) && void 0 !== e ? e : ep;
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
        return null !== (e = this.bitrate_) && void 0 !== e ? e : v.epw;
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
    set(e, n) {
        return this.merge(eh({ [e]: n }));
    }
    merge(e) {
        let n = null,
            r = eh(e);
        for (let e in r) {
            if (!!r.hasOwnProperty(e)) this[e] !== r[e] && (null == n && (n = this.toJS()), (n[e] = r[e]));
        }
        return null != n ? new this.constructor(n) : this;
    }
    computeLurkerPermissionsAllowList() {
        if (this.isGuildStageVoice() && m.Z.isPublic(this.id)) return p.L_;
    }
    isNSFW() {
        return this.nsfw;
    }
    isManaged() {
        return null != this.application_id;
    }
    isPrivate() {
        return P(this.type);
    }
    isGroupDM() {
        return this.type === v.d4z.GROUP_DM;
    }
    isMultiUserDM() {
        return k(this.type);
    }
    isDM() {
        return this.type === v.d4z.DM;
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
        return this.hasFlag(I.zZ.IS_SCHEDULED_FOR_DELETION);
    }
    isArchivedLockedThread() {
        var e, n;
        return j.has(this.type) && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0 && (null === (n = this.threadMetadata) || void 0 === n ? void 0 : n.locked) === !0;
    }
    isForumPost() {
        return this.type === v.d4z.PUBLIC_THREAD && null != this.parentChannelThreadType && v.TPd.GUILD_THREADS_ONLY.has(this.parentChannelThreadType);
    }
    isCategory() {
        return this.type === v.d4z.GUILD_CATEGORY;
    }
    isVocal() {
        return Z(this.type);
    }
    isGuildVocal() {
        return L(this.type);
    }
    isGuildVocalOrThread() {
        return this.isGuildVocal() || this.isVocalThread();
    }
    isGuildVoice() {
        return this.type === v.d4z.GUILD_VOICE;
    }
    isGuildStageVoice() {
        return this.type === v.d4z.GUILD_STAGE_VOICE;
    }
    isListenModeCapable() {
        return this.isGuildStageVoice();
    }
    isThread() {
        return Y(this.type);
    }
    isAnnouncementThread() {
        return this.type === v.d4z.ANNOUNCEMENT_THREAD;
    }
    isVocalThread() {
        return this.type === v.d4z.PUBLIC_THREAD || this.type === v.d4z.PRIVATE_THREAD;
    }
    isActiveThread() {
        var e;
        return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) !== !0;
    }
    isDirectory() {
        return this.type === v.d4z.GUILD_DIRECTORY;
    }
    isForumLikeChannel() {
        return this.isForumChannel() || this.isMediaChannel();
    }
    isForumChannel() {
        return this.type === v.d4z.GUILD_FORUM;
    }
    isMediaChannel() {
        return this.type === v.d4z.GUILD_MEDIA;
    }
    isMediaPost() {
        return this.type === v.d4z.PUBLIC_THREAD && this.parentChannelThreadType === v.d4z.GUILD_MEDIA;
    }
    isRoleSubscriptionTemplatePreviewChannel() {
        return this.hasFlag(I.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
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
        return null !== (e = this.defaultSortOrder) && void 0 !== e ? e : f.z.LATEST_ACTIVITY;
    }
    getDefaultLayout() {
        return this.isMediaChannel() ? d.X.GRID : null == this.defaultForumLayout || this.defaultForumLayout === d.X.DEFAULT ? d.X.LIST : this.defaultForumLayout;
    }
    get accessPermissions() {
        return ed(this.type);
    }
    hasFlag(e) {
        return (0, g.yE)(this.flags, e);
    }
    get isHDStreamSplashed() {
        return null != this.hdStreamingUntil && new Date(this.hdStreamingUntil) > new Date();
    }
}
class eg extends em {
    static fromServer(e, n) {
        var r, i, a;
        let s = {
            application_id: e.application_id,
            appliedTags: e.applied_tags,
            availableTags: null != e.available_tags ? eo(e.available_tags) : void 0,
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
            guild_id: null !== (r = null != n ? n : e.guild_id) && void 0 !== r ? r : null,
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
            name: null !== (i = e.name) && void 0 !== i ? i : '',
            nicks: es(e.nicks),
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
                          invitable: null === (a = e.thread_metadata.invitable) || void 0 === a || a
                      }
                    : void 0,
            topic_: e.topic,
            totalMessageSent: e.total_message_sent,
            type: null != e.type ? e.type : v.d4z.UNKNOWN,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id
        };
        return (0, h.gh)(s, eg);
    }
    constructor(e) {
        super(e), (this.application_id = e.application_id), (this.appliedTags = e.appliedTags), (this.availableTags = e.availableTags), (this.bitrate_ = e.bitrate_), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultForumLayout = e.defaultForumLayout), (this.defaultReactionEmoji = e.defaultReactionEmoji), (this.defaultSortOrder = e.defaultSortOrder), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.icon = e.icon), (this.iconEmoji = e.iconEmoji), (this.isMessageRequest = e.isMessageRequest), (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp), (this.isSpam = e.isSpam), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.member = e.member), (this.memberCount = e.memberCount), (this.memberIdsPreview = e.memberIdsPreview), (this.memberListId = e.memberListId), (this.messageCount = e.messageCount), (this.nicks = e.nicks), (this.nsfw_ = e.nsfw_), (this.originChannelId = e.originChannelId), (this.ownerId = e.ownerId), (this.parent_id = e.parent_id), (this.parentChannelThreadType = e.parentChannelThreadType), (this.permissionOverwrites_ = e.permissionOverwrites_), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rawRecipients = e.rawRecipients), (this.recipients = e.recipients), (this.recipientFlags = e.recipientFlags), (this.rtcRegion = e.rtcRegion), (this.safetyWarnings = e.safetyWarnings), (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed), (this.template = e.template), (this.themeColor = e.themeColor), (this.threadMetadata = e.threadMetadata), (this.topic_ = e.topic_), (this.userLimit_ = e.userLimit_), (this.version = e.version), (this.videoQualityMode = e.videoQualityMode), (this.linkedLobby = e.linkedLobby), (this.hdStreamingUntil = e.hdStreamingUntil), (this.hdStreamingBuyerId = e.hdStreamingBuyerId);
    }
}
class eE extends em {
    static fromServer(e, n) {
        var r, i, a, s;
        return eG({
            application_id: e.application_id,
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: null !== (r = null != n ? n : e.guild_id) && void 0 !== r ? r : null,
            iconEmoji: el(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null !== (i = e.name) && void 0 !== i ? i : '',
            nsfw_: null !== (a = e.nsfw) && void 0 !== a && a,
            originChannelId: e.origin_channel_id,
            parent_id: e.parent_id,
            permissionOverwrites_: ea(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null !== (s = e.rate_limit_per_user) && void 0 !== s ? s : 0,
            rtcRegion: e.rtc_region,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : v.d4z.GUILD_VOICE,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id
        });
    }
    constructor(e) {
        var n;
        super(e), (this.application_id = e.application_id), (this.bitrate_ = e.bitrate_), (this.flags_ = e.flags_), (this.iconEmoji = e.iconEmoji), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.memberListId = e.memberListId), (this.nsfw_ = e.nsfw_), (this.originChannelId = e.originChannelId), (this.parent_id = e.parent_id), (this.permissionOverwrites_ = null !== (n = e.permissionOverwrites_) && void 0 !== n ? n : {}), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rtcRegion = e.rtcRegion), (this.themeColor = e.themeColor), (this.topic_ = e.topic_), (this.userLimit_ = e.userLimit_), (this.version = e.version), (this.videoQualityMode = e.videoQualityMode), (this.hdStreamingUntil = e.hdStreamingUntil), (this.hdStreamingBuyerId = e.hdStreamingBuyerId);
    }
}
class ev extends em {
    static fromServer(e, n) {
        var r, i, a, s;
        return eG({
            application_id: e.application_id,
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: null !== (r = null != n ? n : e.guild_id) && void 0 !== r ? r : null,
            iconEmoji: el(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null !== (i = e.name) && void 0 !== i ? i : '',
            nsfw_: null !== (a = e.nsfw) && void 0 !== a && a,
            parent_id: e.parent_id,
            permissionOverwrites_: ea(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null !== (s = e.rate_limit_per_user) && void 0 !== s ? s : 0,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : v.d4z.GUILD_TEXT,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            version: e.version
        });
    }
    constructor(e) {
        var n;
        super(e), (this.application_id = e.application_id), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.iconEmoji = e.iconEmoji), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.memberListId = e.memberListId), (this.nsfw_ = e.nsfw_), (this.parent_id = e.parent_id), (this.permissionOverwrites_ = null !== (n = e.permissionOverwrites_) && void 0 !== n ? n : {}), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.themeColor = e.themeColor), (this.topic_ = e.topic_), (this.version = e.version), (this.linkedLobby = e.linkedLobby), (this.hdStreamingBuyerId = e.hdStreamingBuyerId), (this.hdStreamingUntil = e.hdStreamingUntil);
    }
}
class eI extends ev {}
class eT extends ev {}
class eb extends ev {}
class ey extends eE {}
class eS extends ev {}
class eA extends ev {}
class eN extends eE {}
class eC extends em {
    static fromServer(e, n) {
        var r, i, a, s;
        let o = {
            availableTags: null != e.available_tags ? eo(e.available_tags) : [],
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
            guild_id: null !== (r = null != n ? n : e.guild_id) && void 0 !== r ? r : null,
            iconEmoji: el(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null !== (i = e.name) && void 0 !== i ? i : '',
            nsfw_: null !== (a = e.nsfw) && void 0 !== a && a,
            parent_id: e.parent_id,
            permissionOverwrites_: ea(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null !== (s = e.rate_limit_per_user) && void 0 !== s ? s : 0,
            template: e.template,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : v.d4z.GUILD_TEXT,
            version: e.version
        };
        return (0, h.gh)(o, eC);
    }
    constructor(e) {
        var n, r;
        super(e), (this.availableTags = null !== (n = e.availableTags) && void 0 !== n ? n : []), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultForumLayout = e.defaultForumLayout), (this.defaultReactionEmoji = e.defaultReactionEmoji), (this.defaultSortOrder = e.defaultSortOrder), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.iconEmoji = e.iconEmoji), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.memberListId = e.memberListId), (this.nsfw_ = e.nsfw_), (this.parent_id = e.parent_id), (this.permissionOverwrites_ = null !== (r = e.permissionOverwrites_) && void 0 !== r ? r : {}), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.template = e.template), (this.themeColor = e.themeColor), (this.topic_ = e.topic_), (this.version = e.version);
    }
}
class eR {
    getOrCompute(e) {
        let n = this.cache.get(e);
        if (null != n) return n;
        {
            let n = parseInt(e, 10);
            return this.cache.set(e, n), n;
        }
    }
    constructor(e = 100) {
        T(this, 'cache', void 0), (this.cache = new (c())(e));
    }
}
let eO = new eR(),
    eD = new eR();
class eL extends em {
    static sortRecipients(e, n) {
        let r = eO.getOrCompute(n);
        return [...(null != e ? e : [])].sort((e, n) => {
            let i = eD.getOrCompute(e.id);
            return (i ^ r) - (eD.getOrCompute(n.id) ^ r);
        });
    }
    static fromServer(e) {
        var n, r;
        let i = eL.sortRecipients(e.recipients, e.id),
            a = {
                application_id: e.application_id,
                flags_: e.flags,
                guild_id: null,
                icon: e.icon,
                id: e.id,
                isMessageRequest: e.is_message_request,
                isMessageRequestTimestamp: e.is_message_request_timestamp,
                isSpam: null !== (n = e.is_spam) && void 0 !== n && n,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                name: null !== (r = e.name) && void 0 !== r ? r : '',
                nicks: es(e.nicks),
                ownerId: e.owner_id,
                rawRecipients: i,
                recipients: i.map((e) => e.id),
                recipientFlags: e.recipient_flags,
                safetyWarnings: e.safety_warnings,
                blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
                type: null != e.type ? e.type : v.d4z.DM
            };
        return (0, h.gh)(a, eL);
    }
    isSystemDM() {
        let e = this.rawRecipients[0];
        return this.type === v.d4z.DM && null != e && !0 === e.system;
    }
    getRecipientId() {
        return this.recipients[0];
    }
    addRecipient(e, n, r) {
        if (e === r) return this;
        {
            var i;
            let r = this.set(
                'recipients',
                l()
                    .uniq([...(null !== (i = this.recipients) && void 0 !== i ? i : []), e])
                    .sort(E.default.compare)
            );
            return null == n
                ? r
                : r.set('nicks', {
                      ...r.nicks,
                      [e]: n
                  });
        }
    }
    removeRecipient(e) {
        return this.set('recipients', l().without(this.recipients, e));
    }
    constructor(e) {
        var n, r;
        super(e), (this.application_id = e.application_id), (this.flags_ = e.flags_), (this.icon = e.icon), (this.isMessageRequest = e.isMessageRequest), (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp), (this.isSpam = e.isSpam), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.nicks = e.nicks), (this.ownerId = e.ownerId), (this.rawRecipients = eL.sortRecipients(e.rawRecipients, this.id)), (this.recipients = [...(null !== (n = e.recipients) && void 0 !== n ? n : [])].sort(E.default.compare)), (this.recipientFlags = e.recipientFlags), (this.safetyWarnings = null !== (r = e.safetyWarnings) && void 0 !== r ? r : []), (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed);
    }
}
class ex extends eL {}
class ew extends eL {}
class eP extends em {
    static fromServer(e, n) {
        var r, i, a, s, o;
        let l = {
            appliedTags: null !== (r = e.applied_tags) && void 0 !== r ? r : [],
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: null !== (i = null != n ? n : e.guild_id) && void 0 !== i ? i : null,
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
            name: null !== (a = e.name) && void 0 !== a ? a : '',
            nsfw_: null !== (s = e.nsfw) && void 0 !== s && s,
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
                          invitable: null === (o = e.thread_metadata.invitable) || void 0 === o || o
                      }
                    : void 0,
            totalMessageSent: e.total_message_sent,
            type: null != e.type ? e.type : v.d4z.PUBLIC_THREAD,
            userLimit_: e.user_limit,
            videoQualityMode: e.video_quality_mode
        };
        return (0, h.gh)(l, eP);
    }
    constructor(e) {
        var n;
        super(e), (this.appliedTags = null !== (n = e.appliedTags) && void 0 !== n ? n : []), (this.bitrate_ = e.bitrate_), (this.flags_ = e.flags_), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.member = e.member), (this.memberCount = e.memberCount), (this.memberIdsPreview = e.memberIdsPreview), (this.messageCount = e.messageCount), (this.nsfw_ = e.nsfw_), (this.ownerId = e.ownerId), (this.parent_id = e.parent_id), (this.parentChannelThreadType = e.parentChannelThreadType), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rtcRegion = e.rtcRegion), (this.threadMetadata = e.threadMetadata), (this.userLimit_ = e.userLimit_), (this.videoQualityMode = e.videoQualityMode);
    }
}
let eM = {
    [v.d4z.DM]: eL.fromServer,
    [v.d4z.GROUP_DM]: eL.fromServer,
    [v.d4z.GUILD_TEXT]: ev.fromServer,
    [v.d4z.GUILD_VOICE]: eE.fromServer,
    [v.d4z.GUILD_STAGE_VOICE]: eE.fromServer,
    [v.d4z.GUILD_CATEGORY]: ev.fromServer,
    [v.d4z.GUILD_ANNOUNCEMENT]: ev.fromServer,
    [v.d4z.GUILD_STORE]: ev.fromServer,
    [v.d4z.ANNOUNCEMENT_THREAD]: eP.fromServer,
    [v.d4z.PUBLIC_THREAD]: eP.fromServer,
    [v.d4z.PRIVATE_THREAD]: eP.fromServer,
    [v.d4z.GUILD_DIRECTORY]: ev.fromServer,
    [v.d4z.GUILD_FORUM]: eC.fromServer,
    [v.d4z.GUILD_MEDIA]: eC.fromServer
};
function ek(e, n) {
    var r, i;
    return (null !== (i = eM[null !== (r = e.type) && void 0 !== r ? r : v.d4z.GUILD_TEXT]) && void 0 !== i ? i : eg.fromServer)(e, n);
}
function eU(e) {
    return eZ(e);
}
let eB = {
    [v.d4z.DM]: ex,
    [v.d4z.GROUP_DM]: ew,
    [v.d4z.GUILD_TEXT]: eA,
    [v.d4z.GUILD_VOICE]: eN,
    [v.d4z.GUILD_STAGE_VOICE]: ey,
    [v.d4z.GUILD_CATEGORY]: eT,
    [v.d4z.GUILD_ANNOUNCEMENT]: eI,
    [v.d4z.GUILD_STORE]: eS,
    [v.d4z.ANNOUNCEMENT_THREAD]: eP,
    [v.d4z.PUBLIC_THREAD]: eP,
    [v.d4z.PRIVATE_THREAD]: eP,
    [v.d4z.GUILD_DIRECTORY]: eb,
    [v.d4z.GUILD_FORUM]: eC,
    [v.d4z.GUILD_MEDIA]: eC
};
function eG(e) {
    var n, r;
    let i = null !== (r = eB[null !== (n = e.type) && void 0 !== n ? n : v.d4z.GUILD_TEXT]) && void 0 !== r ? r : eg;
    return (0, h.gh)(e, i);
}
function eZ(e) {
    var n, r;
    return new (null !== (r = eB[null !== (n = e.type) && void 0 !== n ? n : v.d4z.GUILD_TEXT]) && void 0 !== r ? r : eg)(eh(e));
}
