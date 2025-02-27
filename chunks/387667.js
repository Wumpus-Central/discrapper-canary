n.d(t, {
    Pw: () => u,
    ZP: () => A,
    ms: () => _,
    p5: () => c
});
var r = n(913527),
    l = n.n(r),
    a = n(81825),
    i = n(960048),
    o = n(709054),
    s = n(981631);
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
    if (e === s.rsA.ALL) return s.KFR.ALL;
    if (e <= s.rsA.GUILD_UPDATE) return s.KFR.GUILD;
    if (e <= s.rsA.CHANNEL_DELETE || e === s.rsA.MESSAGE_BULK_DELETE) return s.KFR.CHANNEL;
    if (e <= s.rsA.CHANNEL_OVERWRITE_DELETE) return s.KFR.CHANNEL_OVERWRITE;
    if (e <= s.rsA.BOT_ADD || e === s.rsA.MESSAGE_DELETE || e === s.rsA.MESSAGE_PIN || e === s.rsA.MESSAGE_UNPIN) return s.KFR.USER;
    else if (e <= s.rsA.ROLE_DELETE) return s.KFR.ROLE;
    else if (e <= s.rsA.INVITE_DELETE) return s.KFR.INVITE;
    else if (e <= s.rsA.WEBHOOK_DELETE) return s.KFR.WEBHOOK;
    else if (e <= s.rsA.EMOJI_DELETE) return s.KFR.EMOJI;
    else if (e <= s.rsA.INTEGRATION_DELETE) return s.KFR.INTEGRATION;
    else if (e <= s.rsA.STAGE_INSTANCE_DELETE) return s.KFR.STAGE_INSTANCE;
    else if (e <= s.rsA.STICKER_DELETE) return s.KFR.STICKER;
    else if (e <= s.rsA.GUILD_SCHEDULED_EVENT_DELETE) return s.KFR.GUILD_SCHEDULED_EVENT;
    else if (e <= s.rsA.THREAD_DELETE) return s.KFR.THREAD;
    else if (e === s.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) return s.KFR.APPLICATION_COMMAND;
    else if (e <= s.rsA.SOUNDBOARD_SOUND_DELETE) return s.KFR.GUILD_SOUNDBOARD;
    else if (e < s.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return s.KFR.AUTO_MODERATION_RULE;
    else if (e === s.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return s.KFR.USER;
    else if (e === s.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL) return s.KFR.USER;
    else if (e === s.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return s.KFR.USER;
    else if (e === s.rsA.AUTO_MODERATION_QUARANTINE_USER) return s.KFR.USER;
    else if (e <= s.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED) return s.KFR.GUILD;
    else if (e <= s.rsA.ONBOARDING_PROMPT_DELETE) return s.KFR.ONBOARDING_PROMPT;
    else if (e <= s.rsA.ONBOARDING_UPDATE) return s.KFR.GUILD_ONBOARDING;
    else if (e <= s.rsA.GUILD_HOME_REMOVE_ITEM) return s.KFR.GUILD_HOME;
    else if (e <= s.rsA.HARMFUL_LINKS_BLOCKED_MESSAGE) return s.KFR.GUILD;
    else if (e <= s.rsA.HOME_SETTINGS_UPDATE) return s.KFR.HOME_SETTINGS;
    else if (e <= s.rsA.VOICE_CHANNEL_STATUS_DELETE) return s.KFR.VOICE_CHANNEL_STATUS;
    else if (e <= s.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return s.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION;
    else if (e <= s.rsA.GUILD_MEMBER_VERIFICATION_UPDATE) return s.KFR.GUILD_MEMBER_VERIFICATION;
    else if (e <= s.rsA.GUILD_PROFILE_UPDATE) return s.KFR.GUILD_PROFILE;
    return i.Z.captureMessage('Unknown target type for: '.concat(e)), s.KFR.UNKNOWN;
}
function u(e) {
    switch (e) {
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
            return s.vB8.UPDATE;
    }
    return s.vB8.ALL;
}
class _ {
    constructor(e, t, n) {
        E(this, 'key', void 0), E(this, 'oldValue', void 0), E(this, 'newValue', void 0), E(this, 'subtarget', void 0), (this.key = e), (this.oldValue = t), (this.newValue = n);
    }
}
class d extends a.Z {
    constructor(e) {
        var t, n, r, a, i, s;
        super(), E(this, 'id', void 0), E(this, 'actionType', void 0), E(this, 'action', void 0), E(this, 'targetType', void 0), E(this, 'targetId', void 0), E(this, 'target', void 0), E(this, 'userId', void 0), E(this, 'changes', void 0), E(this, 'timestampStart', void 0), E(this, 'timestampEnd', void 0), E(this, 'user', void 0), E(this, 'options', void 0), (this.id = e.id), (this.action = e.action), (this.actionType = u(this.action)), (this.targetId = e.targetId), (this.timestampStart = null !== (t = e.timestampStart) && void 0 !== t ? t : l()(o.default.extractTimestamp(this.id))), (this.timestampEnd = null !== (n = e.timestampEnd) && void 0 !== n ? n : this.timestampStart), (this.userId = e.userId), (this.changes = null !== (r = e.changes) && void 0 !== r ? r : []), (this.targetType = c(this.action)), (this.options = null !== (a = e.options) && void 0 !== a ? a : {}), (this.target = null !== (i = e.target) && void 0 !== i ? i : e.id), (this.user = null !== (s = e.user) && void 0 !== s ? s : null);
    }
}
let A = d;
