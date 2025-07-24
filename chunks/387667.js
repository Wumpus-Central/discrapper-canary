t.d(e, {
    Pw: () => f,
    ZP: () => h,
    ms: () => v,
    p5: () => g
});
var n = t(913527),
    r = t.n(n),
    l = t(81825),
    i = t(960048),
    s = t(709054),
    a = t(981631);
function o(A, e, t) {
    return (
        e in A
            ? Object.defineProperty(A, e, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (A[e] = t),
        A
    );
}
function g(A) {
    if (A === a.rsA.ALL) return a.KFR.ALL;
    if (A <= a.rsA.GUILD_UPDATE) return a.KFR.GUILD;
    if (A <= a.rsA.CHANNEL_DELETE || A === a.rsA.MESSAGE_BULK_DELETE) return a.KFR.CHANNEL;
    if (A <= a.rsA.CHANNEL_OVERWRITE_DELETE) return a.KFR.CHANNEL_OVERWRITE;
    if (A <= a.rsA.BOT_ADD || A === a.rsA.MESSAGE_DELETE || A === a.rsA.MESSAGE_PIN || A === a.rsA.MESSAGE_UNPIN) return a.KFR.USER;
    else if (A <= a.rsA.ROLE_DELETE) return a.KFR.ROLE;
    else if (A <= a.rsA.INVITE_DELETE) return a.KFR.INVITE;
    else if (A <= a.rsA.WEBHOOK_DELETE) return a.KFR.WEBHOOK;
    else if (A <= a.rsA.EMOJI_DELETE) return a.KFR.EMOJI;
    else if (A <= a.rsA.INTEGRATION_DELETE) return a.KFR.INTEGRATION;
    else if (A <= a.rsA.STAGE_INSTANCE_DELETE) return a.KFR.STAGE_INSTANCE;
    else if (A <= a.rsA.STICKER_DELETE) return a.KFR.STICKER;
    else if (A <= a.rsA.GUILD_SCHEDULED_EVENT_DELETE) return a.KFR.GUILD_SCHEDULED_EVENT;
    else if (A <= a.rsA.THREAD_DELETE) return a.KFR.THREAD;
    else if (A === a.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) return a.KFR.APPLICATION_COMMAND;
    else if (A <= a.rsA.SOUNDBOARD_SOUND_DELETE) return a.KFR.GUILD_SOUNDBOARD;
    else if (A < a.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return a.KFR.AUTO_MODERATION_RULE;
    else if (A === a.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return a.KFR.USER;
    else if (A === a.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL) return a.KFR.USER;
    else if (A === a.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return a.KFR.USER;
    else if (A === a.rsA.AUTO_MODERATION_QUARANTINE_USER) return a.KFR.USER;
    else if (A <= a.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED) return a.KFR.GUILD;
    else if (A <= a.rsA.ONBOARDING_PROMPT_DELETE) return a.KFR.ONBOARDING_PROMPT;
    else if (A <= a.rsA.ONBOARDING_UPDATE) return a.KFR.GUILD_ONBOARDING;
    else if (A <= a.rsA.GUILD_HOME_REMOVE_ITEM) return a.KFR.GUILD_HOME;
    else if (A <= a.rsA.HARMFUL_LINKS_BLOCKED_MESSAGE) return a.KFR.GUILD;
    else if (A <= a.rsA.HOME_SETTINGS_UPDATE) return a.KFR.HOME_SETTINGS;
    else if (A <= a.rsA.VOICE_CHANNEL_STATUS_DELETE) return a.KFR.VOICE_CHANNEL_STATUS;
    else if (A <= a.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return a.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION;
    else if (A <= a.rsA.GUILD_MEMBER_VERIFICATION_UPDATE) return a.KFR.GUILD_MEMBER_VERIFICATION;
    else if (A <= a.rsA.GUILD_PROFILE_UPDATE) return a.KFR.GUILD_PROFILE;
    else if (A <= a.rsA.GUILD_MIGRATE_PIN_PERMISSION) return a.KFR.GUILD;
    return (i.Z.captureMessage('Unknown target type for: '.concat(A)), a.KFR.UNKNOWN);
}
function f(A) {
    switch (A) {
        case a.rsA.CHANNEL_CREATE:
        case a.rsA.CHANNEL_OVERWRITE_CREATE:
        case a.rsA.MEMBER_BAN_REMOVE:
        case a.rsA.ROLE_CREATE:
        case a.rsA.INVITE_CREATE:
        case a.rsA.WEBHOOK_CREATE:
        case a.rsA.EMOJI_CREATE:
        case a.rsA.STICKER_CREATE:
        case a.rsA.MESSAGE_PIN:
        case a.rsA.BOT_ADD:
        case a.rsA.INTEGRATION_CREATE:
        case a.rsA.STAGE_INSTANCE_CREATE:
        case a.rsA.GUILD_SCHEDULED_EVENT_CREATE:
        case a.rsA.THREAD_CREATE:
        case a.rsA.AUTO_MODERATION_RULE_CREATE:
        case a.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
        case a.rsA.ONBOARDING_PROMPT_CREATE:
        case a.rsA.ONBOARDING_CREATE:
        case a.rsA.GUILD_HOME_FEATURE_ITEM:
        case a.rsA.SOUNDBOARD_SOUND_CREATE:
        case a.rsA.HOME_SETTINGS_CREATE:
        case a.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return a.vB8.CREATE;
        case a.rsA.CHANNEL_DELETE:
        case a.rsA.CHANNEL_OVERWRITE_DELETE:
        case a.rsA.MEMBER_KICK:
        case a.rsA.MEMBER_PRUNE:
        case a.rsA.MEMBER_BAN_ADD:
        case a.rsA.ROLE_DELETE:
        case a.rsA.INVITE_DELETE:
        case a.rsA.WEBHOOK_DELETE:
        case a.rsA.EMOJI_DELETE:
        case a.rsA.STICKER_DELETE:
        case a.rsA.MESSAGE_DELETE:
        case a.rsA.MESSAGE_BULK_DELETE:
        case a.rsA.MESSAGE_UNPIN:
        case a.rsA.INTEGRATION_DELETE:
        case a.rsA.MEMBER_DISCONNECT:
        case a.rsA.STAGE_INSTANCE_DELETE:
        case a.rsA.GUILD_SCHEDULED_EVENT_DELETE:
        case a.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
        case a.rsA.THREAD_DELETE:
        case a.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
        case a.rsA.AUTO_MODERATION_RULE_DELETE:
        case a.rsA.ONBOARDING_PROMPT_DELETE:
        case a.rsA.GUILD_HOME_REMOVE_ITEM:
        case a.rsA.SOUNDBOARD_SOUND_DELETE:
        case a.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return a.vB8.DELETE;
        case a.rsA.GUILD_UPDATE:
        case a.rsA.CHANNEL_UPDATE:
        case a.rsA.CHANNEL_OVERWRITE_UPDATE:
        case a.rsA.MEMBER_UPDATE:
        case a.rsA.MEMBER_ROLE_UPDATE:
        case a.rsA.ROLE_UPDATE:
        case a.rsA.INVITE_UPDATE:
        case a.rsA.WEBHOOK_UPDATE:
        case a.rsA.EMOJI_UPDATE:
        case a.rsA.STICKER_UPDATE:
        case a.rsA.INTEGRATION_UPDATE:
        case a.rsA.MEMBER_MOVE:
        case a.rsA.STAGE_INSTANCE_UPDATE:
        case a.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
        case a.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case a.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
        case a.rsA.THREAD_UPDATE:
        case a.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
        case a.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
        case a.rsA.AUTO_MODERATION_RULE_UPDATE:
        case a.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
        case a.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
        case a.rsA.AUTO_MODERATION_QUARANTINE_USER:
        case a.rsA.ONBOARDING_PROMPT_UPDATE:
        case a.rsA.ONBOARDING_UPDATE:
        case a.rsA.SOUNDBOARD_SOUND_UPDATE:
        case a.rsA.HOME_SETTINGS_UPDATE:
        case a.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
        case a.rsA.GUILD_PROFILE_UPDATE:
        case a.rsA.GUILD_MIGRATE_PIN_PERMISSION:
            return a.vB8.UPDATE;
    }
    return a.vB8.ALL;
}
class v {
    constructor(A, e, t) {
        (o(this, 'key', void 0), o(this, 'oldValue', void 0), o(this, 'newValue', void 0), o(this, 'subtarget', void 0), (this.key = A), (this.oldValue = e), (this.newValue = t));
    }
}
class c extends l.Z {
    constructor(A) {
        var e, t, n, l, i, a;
        (super(), o(this, 'id', void 0), o(this, 'actionType', void 0), o(this, 'action', void 0), o(this, 'targetType', void 0), o(this, 'targetId', void 0), o(this, 'target', void 0), o(this, 'userId', void 0), o(this, 'changes', void 0), o(this, 'timestampStart', void 0), o(this, 'timestampEnd', void 0), o(this, 'user', void 0), o(this, 'options', void 0), (this.id = A.id), (this.action = A.action), (this.actionType = f(this.action)), (this.targetId = A.targetId), (this.timestampStart = null != (e = A.timestampStart) ? e : r()(s.default.extractTimestamp(this.id))), (this.timestampEnd = null != (t = A.timestampEnd) ? t : this.timestampStart), (this.userId = A.userId), (this.changes = null != (n = A.changes) ? n : []), (this.targetType = g(this.action)), (this.options = null != (l = A.options) ? l : {}), (this.target = null != (i = A.target) ? i : A.id), (this.user = null != (a = A.user) ? a : null));
    }
}
let h = c;
