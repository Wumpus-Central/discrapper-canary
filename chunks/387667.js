t.d(e, {
    Pw: () => c,
    ZP: () => u,
    ms: () => f,
    p5: () => g,
});
var n = t(913527),
    r = t.n(n),
    l = t(81825),
    i = t(960048),
    a = t(709054),
    s = t(981631);
function o(A, e, t) {
    return (
        e in A
            ? Object.defineProperty(A, e, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (A[e] = t),
        A
    );
}
function g(A) {
    if (A === s.rsA.ALL) return s.KFR.ALL;
    if (A <= s.rsA.GUILD_UPDATE) return s.KFR.GUILD;
    if (A <= s.rsA.CHANNEL_DELETE || A === s.rsA.MESSAGE_BULK_DELETE) return s.KFR.CHANNEL;
    if (A <= s.rsA.CHANNEL_OVERWRITE_DELETE) return s.KFR.CHANNEL_OVERWRITE;
    if (A <= s.rsA.BOT_ADD || A === s.rsA.MESSAGE_DELETE || A === s.rsA.MESSAGE_PIN || A === s.rsA.MESSAGE_UNPIN)
        return s.KFR.USER;
    else if (A <= s.rsA.ROLE_DELETE) return s.KFR.ROLE;
    else if (A <= s.rsA.INVITE_DELETE) return s.KFR.INVITE;
    else if (A <= s.rsA.WEBHOOK_DELETE) return s.KFR.WEBHOOK;
    else if (A <= s.rsA.EMOJI_DELETE) return s.KFR.EMOJI;
    else if (A <= s.rsA.INTEGRATION_DELETE) return s.KFR.INTEGRATION;
    else if (A <= s.rsA.STAGE_INSTANCE_DELETE) return s.KFR.STAGE_INSTANCE;
    else if (A <= s.rsA.STICKER_DELETE) return s.KFR.STICKER;
    else if (A <= s.rsA.GUILD_SCHEDULED_EVENT_DELETE) return s.KFR.GUILD_SCHEDULED_EVENT;
    else if (A <= s.rsA.THREAD_DELETE) return s.KFR.THREAD;
    else if (A === s.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) return s.KFR.APPLICATION_COMMAND;
    else if (A <= s.rsA.SOUNDBOARD_SOUND_DELETE) return s.KFR.GUILD_SOUNDBOARD;
    else if (A < s.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return s.KFR.AUTO_MODERATION_RULE;
    else if (A === s.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return s.KFR.USER;
    else if (A === s.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL) return s.KFR.USER;
    else if (A === s.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return s.KFR.USER;
    else if (A === s.rsA.AUTO_MODERATION_QUARANTINE_USER) return s.KFR.USER;
    else if (A <= s.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED) return s.KFR.GUILD;
    else if (A <= s.rsA.ONBOARDING_PROMPT_DELETE) return s.KFR.ONBOARDING_PROMPT;
    else if (A <= s.rsA.ONBOARDING_UPDATE) return s.KFR.GUILD_ONBOARDING;
    else if (A <= s.rsA.GUILD_HOME_REMOVE_ITEM) return s.KFR.GUILD_HOME;
    else if (A <= s.rsA.HARMFUL_LINKS_BLOCKED_MESSAGE) return s.KFR.GUILD;
    else if (A <= s.rsA.HOME_SETTINGS_UPDATE) return s.KFR.HOME_SETTINGS;
    else if (A <= s.rsA.VOICE_CHANNEL_STATUS_DELETE) return s.KFR.VOICE_CHANNEL_STATUS;
    else if (A <= s.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return s.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION;
    else if (A <= s.rsA.GUILD_MEMBER_VERIFICATION_UPDATE) return s.KFR.GUILD_MEMBER_VERIFICATION;
    else if (A <= s.rsA.GUILD_PROFILE_UPDATE) return s.KFR.GUILD_PROFILE;
    else if (A <= s.rsA.GUILD_MIGRATE_PIN_PERMISSION) return s.KFR.GUILD;
    return i.Z.captureMessage("Unknown target type for: ".concat(A)), s.KFR.UNKNOWN;
}
function c(A) {
    switch (A) {
        case s.rsA.CHANNEL_CREATE:
        case s.rsA.CHANNEL_OVERWRITE_CREATE:
        case s.rsA.MEMBER_BAN_REMOVE:
        case s.rsA.ROLE_CREATE:
        case s.rsA.INVITE_CREATE:
        case s.rsA.WEBHOOK_CREATE:
        case s.rsA.EMOJI_CREATE:
        case s.rsA.STICKER_CREATE:
        case s.rsA.MESSAGE_PIN:
        case s.rsA.BOT_ADD:
        case s.rsA.INTEGRATION_CREATE:
        case s.rsA.STAGE_INSTANCE_CREATE:
        case s.rsA.GUILD_SCHEDULED_EVENT_CREATE:
        case s.rsA.THREAD_CREATE:
        case s.rsA.AUTO_MODERATION_RULE_CREATE:
        case s.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
        case s.rsA.ONBOARDING_PROMPT_CREATE:
        case s.rsA.ONBOARDING_CREATE:
        case s.rsA.GUILD_HOME_FEATURE_ITEM:
        case s.rsA.SOUNDBOARD_SOUND_CREATE:
        case s.rsA.HOME_SETTINGS_CREATE:
        case s.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return s.vB8.CREATE;
        case s.rsA.CHANNEL_DELETE:
        case s.rsA.CHANNEL_OVERWRITE_DELETE:
        case s.rsA.MEMBER_KICK:
        case s.rsA.MEMBER_PRUNE:
        case s.rsA.MEMBER_BAN_ADD:
        case s.rsA.ROLE_DELETE:
        case s.rsA.INVITE_DELETE:
        case s.rsA.WEBHOOK_DELETE:
        case s.rsA.EMOJI_DELETE:
        case s.rsA.STICKER_DELETE:
        case s.rsA.MESSAGE_DELETE:
        case s.rsA.MESSAGE_BULK_DELETE:
        case s.rsA.MESSAGE_UNPIN:
        case s.rsA.INTEGRATION_DELETE:
        case s.rsA.MEMBER_DISCONNECT:
        case s.rsA.STAGE_INSTANCE_DELETE:
        case s.rsA.GUILD_SCHEDULED_EVENT_DELETE:
        case s.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
        case s.rsA.THREAD_DELETE:
        case s.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
        case s.rsA.AUTO_MODERATION_RULE_DELETE:
        case s.rsA.ONBOARDING_PROMPT_DELETE:
        case s.rsA.GUILD_HOME_REMOVE_ITEM:
        case s.rsA.SOUNDBOARD_SOUND_DELETE:
        case s.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return s.vB8.DELETE;
        case s.rsA.GUILD_UPDATE:
        case s.rsA.CHANNEL_UPDATE:
        case s.rsA.CHANNEL_OVERWRITE_UPDATE:
        case s.rsA.MEMBER_UPDATE:
        case s.rsA.MEMBER_ROLE_UPDATE:
        case s.rsA.ROLE_UPDATE:
        case s.rsA.INVITE_UPDATE:
        case s.rsA.WEBHOOK_UPDATE:
        case s.rsA.EMOJI_UPDATE:
        case s.rsA.STICKER_UPDATE:
        case s.rsA.INTEGRATION_UPDATE:
        case s.rsA.MEMBER_MOVE:
        case s.rsA.STAGE_INSTANCE_UPDATE:
        case s.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
        case s.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case s.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
        case s.rsA.THREAD_UPDATE:
        case s.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
        case s.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
        case s.rsA.AUTO_MODERATION_RULE_UPDATE:
        case s.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
        case s.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
        case s.rsA.AUTO_MODERATION_QUARANTINE_USER:
        case s.rsA.ONBOARDING_PROMPT_UPDATE:
        case s.rsA.ONBOARDING_UPDATE:
        case s.rsA.SOUNDBOARD_SOUND_UPDATE:
        case s.rsA.HOME_SETTINGS_UPDATE:
        case s.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
        case s.rsA.GUILD_PROFILE_UPDATE:
        case s.rsA.GUILD_MIGRATE_PIN_PERMISSION:
            return s.vB8.UPDATE;
    }
    return s.vB8.ALL;
}
class f {
    constructor(A, e, t) {
        o(this, "key", void 0),
            o(this, "oldValue", void 0),
            o(this, "newValue", void 0),
            o(this, "subtarget", void 0),
            (this.key = A),
            (this.oldValue = e),
            (this.newValue = t);
    }
}
class v extends l.Z {
    constructor(A) {
        var e, t, n, l, i, s;
        super(),
            o(this, "id", void 0),
            o(this, "actionType", void 0),
            o(this, "action", void 0),
            o(this, "targetType", void 0),
            o(this, "targetId", void 0),
            o(this, "target", void 0),
            o(this, "userId", void 0),
            o(this, "changes", void 0),
            o(this, "timestampStart", void 0),
            o(this, "timestampEnd", void 0),
            o(this, "user", void 0),
            o(this, "options", void 0),
            (this.id = A.id),
            (this.action = A.action),
            (this.actionType = c(this.action)),
            (this.targetId = A.targetId),
            (this.timestampStart = null != (e = A.timestampStart) ? e : r()(a.default.extractTimestamp(this.id))),
            (this.timestampEnd = null != (t = A.timestampEnd) ? t : this.timestampStart),
            (this.userId = A.userId),
            (this.changes = null != (n = A.changes) ? n : []),
            (this.targetType = g(this.action)),
            (this.options = null != (l = A.options) ? l : {}),
            (this.target = null != (i = A.target) ? i : A.id),
            (this.user = null != (s = A.user) ? s : null);
    }
}
let u = v;
