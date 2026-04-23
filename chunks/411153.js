n.d(t, { Ag: () => _, Ay: () => d, QO: () => u, pq: () => o });
var l = n(989349),
    a = n.n(l),
    r = n(315069),
    i = n(38405),
    s = n(935208),
    E = n(652215);
function _(e) {
    if (e === E.F_X.ALL) return E.GaG.ALL;
    if (e <= E.F_X.GUILD_UPDATE) return E.GaG.GUILD;
    if (e <= E.F_X.CHANNEL_DELETE || e === E.F_X.MESSAGE_BULK_DELETE) return E.GaG.CHANNEL;
    if (e <= E.F_X.CHANNEL_OVERWRITE_DELETE) return E.GaG.CHANNEL_OVERWRITE;
    if (e <= E.F_X.BOT_ADD || e === E.F_X.MESSAGE_DELETE || e === E.F_X.MESSAGE_PIN || e === E.F_X.MESSAGE_UNPIN)
        return E.GaG.USER;
    else if (e <= E.F_X.ROLE_DELETE) return E.GaG.ROLE;
    else if (e <= E.F_X.INVITE_DELETE) return E.GaG.INVITE;
    else if (e <= E.F_X.WEBHOOK_DELETE) return E.GaG.WEBHOOK;
    else if (e <= E.F_X.EMOJI_DELETE) return E.GaG.EMOJI;
    else if (e <= E.F_X.INTEGRATION_DELETE) return E.GaG.INTEGRATION;
    else if (e <= E.F_X.STAGE_INSTANCE_DELETE) return E.GaG.STAGE_INSTANCE;
    else if (e <= E.F_X.STICKER_DELETE) return E.GaG.STICKER;
    else if (e <= E.F_X.GUILD_SCHEDULED_EVENT_DELETE) return E.GaG.GUILD_SCHEDULED_EVENT;
    else if (e <= E.F_X.THREAD_DELETE) return E.GaG.THREAD;
    else if (e === E.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE) return E.GaG.APPLICATION_COMMAND;
    else if (e <= E.F_X.SOUNDBOARD_SOUND_DELETE) return E.GaG.GUILD_SOUNDBOARD;
    else if (e < E.F_X.AUTO_MODERATION_BLOCK_MESSAGE) return E.GaG.AUTO_MODERATION_RULE;
    else if (e === E.F_X.AUTO_MODERATION_BLOCK_MESSAGE) return E.GaG.USER;
    else if (e === E.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL) return E.GaG.USER;
    else if (e === E.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return E.GaG.USER;
    else if (e === E.F_X.AUTO_MODERATION_QUARANTINE_USER) return E.GaG.USER;
    else if (e <= E.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED) return E.GaG.GUILD;
    else if (e <= E.F_X.ONBOARDING_PROMPT_DELETE) return E.GaG.ONBOARDING_PROMPT;
    else if (e <= E.F_X.ONBOARDING_UPDATE) return E.GaG.GUILD_ONBOARDING;
    else if (e <= E.F_X.GUILD_HOME_REMOVE_ITEM) return E.GaG.GUILD_HOME;
    else if (e <= E.F_X.HARMFUL_LINKS_BLOCKED_MESSAGE) return E.GaG.GUILD;
    else if (e <= E.F_X.HOME_SETTINGS_UPDATE) return E.GaG.HOME_SETTINGS;
    else if (e <= E.F_X.VOICE_CHANNEL_STATUS_DELETE) return E.GaG.VOICE_CHANNEL_STATUS;
    else if (e <= E.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return E.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION;
    else if (e <= E.F_X.GUILD_MEMBER_VERIFICATION_UPDATE) return E.GaG.GUILD_MEMBER_VERIFICATION;
    else if (e <= E.F_X.GUILD_PROFILE_UPDATE) return E.GaG.GUILD_PROFILE;
    else if (e <= E.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION) return E.GaG.GUILD;
    return i.A.captureMessage(`Unknown target type for: ${e}`), E.GaG.UNKNOWN;
}
function o(e) {
    switch (e) {
        case E.F_X.CHANNEL_CREATE:
        case E.F_X.CHANNEL_OVERWRITE_CREATE:
        case E.F_X.MEMBER_BAN_REMOVE:
        case E.F_X.ROLE_CREATE:
        case E.F_X.INVITE_CREATE:
        case E.F_X.WEBHOOK_CREATE:
        case E.F_X.EMOJI_CREATE:
        case E.F_X.STICKER_CREATE:
        case E.F_X.MESSAGE_PIN:
        case E.F_X.BOT_ADD:
        case E.F_X.INTEGRATION_CREATE:
        case E.F_X.STAGE_INSTANCE_CREATE:
        case E.F_X.GUILD_SCHEDULED_EVENT_CREATE:
        case E.F_X.THREAD_CREATE:
        case E.F_X.AUTO_MODERATION_RULE_CREATE:
        case E.F_X.CREATOR_MONETIZATION_REQUEST_CREATED:
        case E.F_X.ONBOARDING_PROMPT_CREATE:
        case E.F_X.ONBOARDING_CREATE:
        case E.F_X.GUILD_HOME_FEATURE_ITEM:
        case E.F_X.SOUNDBOARD_SOUND_CREATE:
        case E.F_X.HOME_SETTINGS_CREATE:
        case E.F_X.VOICE_CHANNEL_STATUS_CREATE:
            return E.RWi.CREATE;
        case E.F_X.CHANNEL_DELETE:
        case E.F_X.CHANNEL_OVERWRITE_DELETE:
        case E.F_X.MEMBER_KICK:
        case E.F_X.MEMBER_PRUNE:
        case E.F_X.MEMBER_BAN_ADD:
        case E.F_X.ROLE_DELETE:
        case E.F_X.INVITE_DELETE:
        case E.F_X.WEBHOOK_DELETE:
        case E.F_X.EMOJI_DELETE:
        case E.F_X.STICKER_DELETE:
        case E.F_X.MESSAGE_DELETE:
        case E.F_X.MESSAGE_BULK_DELETE:
        case E.F_X.MESSAGE_UNPIN:
        case E.F_X.INTEGRATION_DELETE:
        case E.F_X.MEMBER_DISCONNECT:
        case E.F_X.STAGE_INSTANCE_DELETE:
        case E.F_X.GUILD_SCHEDULED_EVENT_DELETE:
        case E.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
        case E.F_X.THREAD_DELETE:
        case E.F_X.AUTO_MODERATION_BLOCK_MESSAGE:
        case E.F_X.AUTO_MODERATION_RULE_DELETE:
        case E.F_X.ONBOARDING_PROMPT_DELETE:
        case E.F_X.GUILD_HOME_REMOVE_ITEM:
        case E.F_X.SOUNDBOARD_SOUND_DELETE:
        case E.F_X.VOICE_CHANNEL_STATUS_DELETE:
            return E.RWi.DELETE;
        case E.F_X.GUILD_UPDATE:
        case E.F_X.CHANNEL_UPDATE:
        case E.F_X.CHANNEL_OVERWRITE_UPDATE:
        case E.F_X.MEMBER_UPDATE:
        case E.F_X.MEMBER_ROLE_UPDATE:
        case E.F_X.ROLE_UPDATE:
        case E.F_X.INVITE_UPDATE:
        case E.F_X.WEBHOOK_UPDATE:
        case E.F_X.EMOJI_UPDATE:
        case E.F_X.STICKER_UPDATE:
        case E.F_X.INTEGRATION_UPDATE:
        case E.F_X.MEMBER_MOVE:
        case E.F_X.STAGE_INSTANCE_UPDATE:
        case E.F_X.GUILD_SCHEDULED_EVENT_UPDATE:
        case E.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case E.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
        case E.F_X.THREAD_UPDATE:
        case E.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE:
        case E.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED:
        case E.F_X.AUTO_MODERATION_RULE_UPDATE:
        case E.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL:
        case E.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
        case E.F_X.AUTO_MODERATION_QUARANTINE_USER:
        case E.F_X.ONBOARDING_PROMPT_UPDATE:
        case E.F_X.ONBOARDING_UPDATE:
        case E.F_X.SOUNDBOARD_SOUND_UPDATE:
        case E.F_X.HOME_SETTINGS_UPDATE:
        case E.F_X.GUILD_MEMBER_VERIFICATION_UPDATE:
        case E.F_X.GUILD_PROFILE_UPDATE:
        case E.F_X.GUILD_MIGRATE_PIN_PERMISSION:
        case E.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
            return E.RWi.UPDATE;
    }
    return E.RWi.ALL;
}
class u {
    key;
    oldValue;
    newValue;
    subtarget;
    constructor(e, t, n) {
        (this.key = e), (this.oldValue = t), (this.newValue = n);
    }
}
class c extends r.A {
    id;
    actionType;
    action;
    targetType;
    targetId;
    target;
    userId;
    changes;
    timestampStart;
    timestampEnd;
    user;
    options;
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.action = e.action),
            (this.actionType = o(this.action)),
            (this.targetId = e.targetId),
            (this.timestampStart = e.timestampStart ?? a()(s.default.extractTimestamp(this.id))),
            (this.timestampEnd = e.timestampEnd ?? this.timestampStart),
            (this.userId = e.userId),
            (this.changes = e.changes ?? []),
            (this.targetType = _(this.action)),
            (this.options = e.options ?? {}),
            (this.target = e.target ?? e.id),
            (this.user = e.user ?? null);
    }
}
let d = c;
