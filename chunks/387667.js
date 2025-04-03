n.d(t, {
    Pw: () => u,
    ZP: () => A,
    ms: () => _,
    p5: () => c
});
var r = n(913527),
    l = n.n(r),
    a = n(81825),
    s = n(960048),
    i = n(709054),
    o = n(981631);
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
    if (e === o.rsA.ALL) return o.KFR.ALL;
    if (e <= o.rsA.GUILD_UPDATE) return o.KFR.GUILD;
    if (e <= o.rsA.CHANNEL_DELETE || e === o.rsA.MESSAGE_BULK_DELETE) return o.KFR.CHANNEL;
    if (e <= o.rsA.CHANNEL_OVERWRITE_DELETE) return o.KFR.CHANNEL_OVERWRITE;
    if (e <= o.rsA.BOT_ADD || e === o.rsA.MESSAGE_DELETE || e === o.rsA.MESSAGE_PIN || e === o.rsA.MESSAGE_UNPIN) return o.KFR.USER;
    else if (e <= o.rsA.ROLE_DELETE) return o.KFR.ROLE;
    else if (e <= o.rsA.INVITE_DELETE) return o.KFR.INVITE;
    else if (e <= o.rsA.WEBHOOK_DELETE) return o.KFR.WEBHOOK;
    else if (e <= o.rsA.EMOJI_DELETE) return o.KFR.EMOJI;
    else if (e <= o.rsA.INTEGRATION_DELETE) return o.KFR.INTEGRATION;
    else if (e <= o.rsA.STAGE_INSTANCE_DELETE) return o.KFR.STAGE_INSTANCE;
    else if (e <= o.rsA.STICKER_DELETE) return o.KFR.STICKER;
    else if (e <= o.rsA.GUILD_SCHEDULED_EVENT_DELETE) return o.KFR.GUILD_SCHEDULED_EVENT;
    else if (e <= o.rsA.THREAD_DELETE) return o.KFR.THREAD;
    else if (e === o.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) return o.KFR.APPLICATION_COMMAND;
    else if (e <= o.rsA.SOUNDBOARD_SOUND_DELETE) return o.KFR.GUILD_SOUNDBOARD;
    else if (e < o.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return o.KFR.AUTO_MODERATION_RULE;
    else if (e === o.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return o.KFR.USER;
    else if (e === o.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL) return o.KFR.USER;
    else if (e === o.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return o.KFR.USER;
    else if (e === o.rsA.AUTO_MODERATION_QUARANTINE_USER) return o.KFR.USER;
    else if (e <= o.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED) return o.KFR.GUILD;
    else if (e <= o.rsA.ONBOARDING_PROMPT_DELETE) return o.KFR.ONBOARDING_PROMPT;
    else if (e <= o.rsA.ONBOARDING_UPDATE) return o.KFR.GUILD_ONBOARDING;
    else if (e <= o.rsA.GUILD_HOME_REMOVE_ITEM) return o.KFR.GUILD_HOME;
    else if (e <= o.rsA.HARMFUL_LINKS_BLOCKED_MESSAGE) return o.KFR.GUILD;
    else if (e <= o.rsA.HOME_SETTINGS_UPDATE) return o.KFR.HOME_SETTINGS;
    else if (e <= o.rsA.VOICE_CHANNEL_STATUS_DELETE) return o.KFR.VOICE_CHANNEL_STATUS;
    else if (e <= o.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return o.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION;
    else if (e <= o.rsA.GUILD_MEMBER_VERIFICATION_UPDATE) return o.KFR.GUILD_MEMBER_VERIFICATION;
    else if (e <= o.rsA.GUILD_PROFILE_UPDATE) return o.KFR.GUILD_PROFILE;
    return s.Z.captureMessage('Unknown target type for: '.concat(e)), o.KFR.UNKNOWN;
}
function u(e) {
    switch (e) {
        case o.rsA.CHANNEL_CREATE:
        case o.rsA.CHANNEL_OVERWRITE_CREATE:
        case o.rsA.MEMBER_BAN_REMOVE:
        case o.rsA.ROLE_CREATE:
        case o.rsA.INVITE_CREATE:
        case o.rsA.WEBHOOK_CREATE:
        case o.rsA.EMOJI_CREATE:
        case o.rsA.STICKER_CREATE:
        case o.rsA.MESSAGE_PIN:
        case o.rsA.BOT_ADD:
        case o.rsA.INTEGRATION_CREATE:
        case o.rsA.STAGE_INSTANCE_CREATE:
        case o.rsA.GUILD_SCHEDULED_EVENT_CREATE:
        case o.rsA.THREAD_CREATE:
        case o.rsA.AUTO_MODERATION_RULE_CREATE:
        case o.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
        case o.rsA.ONBOARDING_PROMPT_CREATE:
        case o.rsA.ONBOARDING_CREATE:
        case o.rsA.GUILD_HOME_FEATURE_ITEM:
        case o.rsA.SOUNDBOARD_SOUND_CREATE:
        case o.rsA.HOME_SETTINGS_CREATE:
        case o.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return o.vB8.CREATE;
        case o.rsA.CHANNEL_DELETE:
        case o.rsA.CHANNEL_OVERWRITE_DELETE:
        case o.rsA.MEMBER_KICK:
        case o.rsA.MEMBER_PRUNE:
        case o.rsA.MEMBER_BAN_ADD:
        case o.rsA.ROLE_DELETE:
        case o.rsA.INVITE_DELETE:
        case o.rsA.WEBHOOK_DELETE:
        case o.rsA.EMOJI_DELETE:
        case o.rsA.STICKER_DELETE:
        case o.rsA.MESSAGE_DELETE:
        case o.rsA.MESSAGE_BULK_DELETE:
        case o.rsA.MESSAGE_UNPIN:
        case o.rsA.INTEGRATION_DELETE:
        case o.rsA.MEMBER_DISCONNECT:
        case o.rsA.STAGE_INSTANCE_DELETE:
        case o.rsA.GUILD_SCHEDULED_EVENT_DELETE:
        case o.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
        case o.rsA.THREAD_DELETE:
        case o.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
        case o.rsA.AUTO_MODERATION_RULE_DELETE:
        case o.rsA.ONBOARDING_PROMPT_DELETE:
        case o.rsA.GUILD_HOME_REMOVE_ITEM:
        case o.rsA.SOUNDBOARD_SOUND_DELETE:
        case o.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return o.vB8.DELETE;
        case o.rsA.GUILD_UPDATE:
        case o.rsA.CHANNEL_UPDATE:
        case o.rsA.CHANNEL_OVERWRITE_UPDATE:
        case o.rsA.MEMBER_UPDATE:
        case o.rsA.MEMBER_ROLE_UPDATE:
        case o.rsA.ROLE_UPDATE:
        case o.rsA.INVITE_UPDATE:
        case o.rsA.WEBHOOK_UPDATE:
        case o.rsA.EMOJI_UPDATE:
        case o.rsA.STICKER_UPDATE:
        case o.rsA.INTEGRATION_UPDATE:
        case o.rsA.MEMBER_MOVE:
        case o.rsA.STAGE_INSTANCE_UPDATE:
        case o.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
        case o.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case o.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
        case o.rsA.THREAD_UPDATE:
        case o.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
        case o.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
        case o.rsA.AUTO_MODERATION_RULE_UPDATE:
        case o.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
        case o.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
        case o.rsA.AUTO_MODERATION_QUARANTINE_USER:
        case o.rsA.ONBOARDING_PROMPT_UPDATE:
        case o.rsA.ONBOARDING_UPDATE:
        case o.rsA.SOUNDBOARD_SOUND_UPDATE:
        case o.rsA.HOME_SETTINGS_UPDATE:
        case o.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
        case o.rsA.GUILD_PROFILE_UPDATE:
            return o.vB8.UPDATE;
    }
    return o.vB8.ALL;
}
class _ {
    constructor(e, t, n) {
        E(this, 'key', void 0), E(this, 'oldValue', void 0), E(this, 'newValue', void 0), E(this, 'subtarget', void 0), (this.key = e), (this.oldValue = t), (this.newValue = n);
    }
}
class d extends a.Z {
    constructor(e) {
        var t, n, r, a, s, o;
        super(), E(this, 'id', void 0), E(this, 'actionType', void 0), E(this, 'action', void 0), E(this, 'targetType', void 0), E(this, 'targetId', void 0), E(this, 'target', void 0), E(this, 'userId', void 0), E(this, 'changes', void 0), E(this, 'timestampStart', void 0), E(this, 'timestampEnd', void 0), E(this, 'user', void 0), E(this, 'options', void 0), (this.id = e.id), (this.action = e.action), (this.actionType = u(this.action)), (this.targetId = e.targetId), (this.timestampStart = null != (t = e.timestampStart) ? t : l()(i.default.extractTimestamp(this.id))), (this.timestampEnd = null != (n = e.timestampEnd) ? n : this.timestampStart), (this.userId = e.userId), (this.changes = null != (r = e.changes) ? r : []), (this.targetType = c(this.action)), (this.options = null != (a = e.options) ? a : {}), (this.target = null != (s = e.target) ? s : e.id), (this.user = null != (o = e.user) ? o : null);
    }
}
let A = d;
