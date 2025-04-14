n.d(t, {
    Pw: () => u,
    ZP: () => A,
    ms: () => _,
    p5: () => c
});
var r = n(913527),
    l = n.n(r),
    s = n(81825),
    a = n(960048),
    o = n(709054),
    i = n(981631);
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
function c(e) {
    if (e === i.rsA.ALL) return i.KFR.ALL;
    if (e <= i.rsA.GUILD_UPDATE) return i.KFR.GUILD;
    if (e <= i.rsA.CHANNEL_DELETE || e === i.rsA.MESSAGE_BULK_DELETE) return i.KFR.CHANNEL;
    if (e <= i.rsA.CHANNEL_OVERWRITE_DELETE) return i.KFR.CHANNEL_OVERWRITE;
    if (e <= i.rsA.BOT_ADD || e === i.rsA.MESSAGE_DELETE || e === i.rsA.MESSAGE_PIN || e === i.rsA.MESSAGE_UNPIN) return i.KFR.USER;
    else if (e <= i.rsA.ROLE_DELETE) return i.KFR.ROLE;
    else if (e <= i.rsA.INVITE_DELETE) return i.KFR.INVITE;
    else if (e <= i.rsA.WEBHOOK_DELETE) return i.KFR.WEBHOOK;
    else if (e <= i.rsA.EMOJI_DELETE) return i.KFR.EMOJI;
    else if (e <= i.rsA.INTEGRATION_DELETE) return i.KFR.INTEGRATION;
    else if (e <= i.rsA.STAGE_INSTANCE_DELETE) return i.KFR.STAGE_INSTANCE;
    else if (e <= i.rsA.STICKER_DELETE) return i.KFR.STICKER;
    else if (e <= i.rsA.GUILD_SCHEDULED_EVENT_DELETE) return i.KFR.GUILD_SCHEDULED_EVENT;
    else if (e <= i.rsA.THREAD_DELETE) return i.KFR.THREAD;
    else if (e === i.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) return i.KFR.APPLICATION_COMMAND;
    else if (e <= i.rsA.SOUNDBOARD_SOUND_DELETE) return i.KFR.GUILD_SOUNDBOARD;
    else if (e < i.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return i.KFR.AUTO_MODERATION_RULE;
    else if (e === i.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return i.KFR.USER;
    else if (e === i.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL) return i.KFR.USER;
    else if (e === i.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return i.KFR.USER;
    else if (e === i.rsA.AUTO_MODERATION_QUARANTINE_USER) return i.KFR.USER;
    else if (e <= i.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED) return i.KFR.GUILD;
    else if (e <= i.rsA.ONBOARDING_PROMPT_DELETE) return i.KFR.ONBOARDING_PROMPT;
    else if (e <= i.rsA.ONBOARDING_UPDATE) return i.KFR.GUILD_ONBOARDING;
    else if (e <= i.rsA.GUILD_HOME_REMOVE_ITEM) return i.KFR.GUILD_HOME;
    else if (e <= i.rsA.HARMFUL_LINKS_BLOCKED_MESSAGE) return i.KFR.GUILD;
    else if (e <= i.rsA.HOME_SETTINGS_UPDATE) return i.KFR.HOME_SETTINGS;
    else if (e <= i.rsA.VOICE_CHANNEL_STATUS_DELETE) return i.KFR.VOICE_CHANNEL_STATUS;
    else if (e <= i.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return i.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION;
    else if (e <= i.rsA.GUILD_MEMBER_VERIFICATION_UPDATE) return i.KFR.GUILD_MEMBER_VERIFICATION;
    else if (e <= i.rsA.GUILD_PROFILE_UPDATE) return i.KFR.GUILD_PROFILE;
    return a.Z.captureMessage('Unknown target type for: '.concat(e)), i.KFR.UNKNOWN;
}
function u(e) {
    switch (e) {
        case i.rsA.CHANNEL_CREATE:
        case i.rsA.CHANNEL_OVERWRITE_CREATE:
        case i.rsA.MEMBER_BAN_REMOVE:
        case i.rsA.ROLE_CREATE:
        case i.rsA.INVITE_CREATE:
        case i.rsA.WEBHOOK_CREATE:
        case i.rsA.EMOJI_CREATE:
        case i.rsA.STICKER_CREATE:
        case i.rsA.MESSAGE_PIN:
        case i.rsA.BOT_ADD:
        case i.rsA.INTEGRATION_CREATE:
        case i.rsA.STAGE_INSTANCE_CREATE:
        case i.rsA.GUILD_SCHEDULED_EVENT_CREATE:
        case i.rsA.THREAD_CREATE:
        case i.rsA.AUTO_MODERATION_RULE_CREATE:
        case i.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
        case i.rsA.ONBOARDING_PROMPT_CREATE:
        case i.rsA.ONBOARDING_CREATE:
        case i.rsA.GUILD_HOME_FEATURE_ITEM:
        case i.rsA.SOUNDBOARD_SOUND_CREATE:
        case i.rsA.HOME_SETTINGS_CREATE:
        case i.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return i.vB8.CREATE;
        case i.rsA.CHANNEL_DELETE:
        case i.rsA.CHANNEL_OVERWRITE_DELETE:
        case i.rsA.MEMBER_KICK:
        case i.rsA.MEMBER_PRUNE:
        case i.rsA.MEMBER_BAN_ADD:
        case i.rsA.ROLE_DELETE:
        case i.rsA.INVITE_DELETE:
        case i.rsA.WEBHOOK_DELETE:
        case i.rsA.EMOJI_DELETE:
        case i.rsA.STICKER_DELETE:
        case i.rsA.MESSAGE_DELETE:
        case i.rsA.MESSAGE_BULK_DELETE:
        case i.rsA.MESSAGE_UNPIN:
        case i.rsA.INTEGRATION_DELETE:
        case i.rsA.MEMBER_DISCONNECT:
        case i.rsA.STAGE_INSTANCE_DELETE:
        case i.rsA.GUILD_SCHEDULED_EVENT_DELETE:
        case i.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
        case i.rsA.THREAD_DELETE:
        case i.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
        case i.rsA.AUTO_MODERATION_RULE_DELETE:
        case i.rsA.ONBOARDING_PROMPT_DELETE:
        case i.rsA.GUILD_HOME_REMOVE_ITEM:
        case i.rsA.SOUNDBOARD_SOUND_DELETE:
        case i.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return i.vB8.DELETE;
        case i.rsA.GUILD_UPDATE:
        case i.rsA.CHANNEL_UPDATE:
        case i.rsA.CHANNEL_OVERWRITE_UPDATE:
        case i.rsA.MEMBER_UPDATE:
        case i.rsA.MEMBER_ROLE_UPDATE:
        case i.rsA.ROLE_UPDATE:
        case i.rsA.INVITE_UPDATE:
        case i.rsA.WEBHOOK_UPDATE:
        case i.rsA.EMOJI_UPDATE:
        case i.rsA.STICKER_UPDATE:
        case i.rsA.INTEGRATION_UPDATE:
        case i.rsA.MEMBER_MOVE:
        case i.rsA.STAGE_INSTANCE_UPDATE:
        case i.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
        case i.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case i.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
        case i.rsA.THREAD_UPDATE:
        case i.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
        case i.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
        case i.rsA.AUTO_MODERATION_RULE_UPDATE:
        case i.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
        case i.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
        case i.rsA.AUTO_MODERATION_QUARANTINE_USER:
        case i.rsA.ONBOARDING_PROMPT_UPDATE:
        case i.rsA.ONBOARDING_UPDATE:
        case i.rsA.SOUNDBOARD_SOUND_UPDATE:
        case i.rsA.HOME_SETTINGS_UPDATE:
        case i.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
        case i.rsA.GUILD_PROFILE_UPDATE:
            return i.vB8.UPDATE;
    }
    return i.vB8.ALL;
}
class _ {
    constructor(e, t, n) {
        E(this, 'key', void 0), E(this, 'oldValue', void 0), E(this, 'newValue', void 0), E(this, 'subtarget', void 0), (this.key = e), (this.oldValue = t), (this.newValue = n);
    }
}
class d extends s.Z {
    constructor(e) {
        var t, n, r, s, a, i;
        super(), E(this, 'id', void 0), E(this, 'actionType', void 0), E(this, 'action', void 0), E(this, 'targetType', void 0), E(this, 'targetId', void 0), E(this, 'target', void 0), E(this, 'userId', void 0), E(this, 'changes', void 0), E(this, 'timestampStart', void 0), E(this, 'timestampEnd', void 0), E(this, 'user', void 0), E(this, 'options', void 0), (this.id = e.id), (this.action = e.action), (this.actionType = u(this.action)), (this.targetId = e.targetId), (this.timestampStart = null != (t = e.timestampStart) ? t : l()(o.default.extractTimestamp(this.id))), (this.timestampEnd = null != (n = e.timestampEnd) ? n : this.timestampStart), (this.userId = e.userId), (this.changes = null != (r = e.changes) ? r : []), (this.targetType = c(this.action)), (this.options = null != (s = e.options) ? s : {}), (this.target = null != (a = e.target) ? a : e.id), (this.user = null != (i = e.user) ? i : null);
    }
}
let A = d;
