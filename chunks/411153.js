n.d(t, {
    Ag: () => u,
    Ay: () => g,
    QO: () => d,
    pq: () => E,
});
var l = n(989349),
    r = n.n(l),
    a = n(315069),
    i = n(728458),
    s = n(661191),
    o = n(652215);
function c(e, t, n) {
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
function u(e) {
    if (e === o.F_X.ALL) return o.GaG.ALL;
    if (e <= o.F_X.GUILD_UPDATE) return o.GaG.GUILD;
    if (e <= o.F_X.CHANNEL_DELETE || e === o.F_X.MESSAGE_BULK_DELETE) return o.GaG.CHANNEL;
    if (e <= o.F_X.CHANNEL_OVERWRITE_DELETE) return o.GaG.CHANNEL_OVERWRITE;
    if (e <= o.F_X.BOT_ADD || e === o.F_X.MESSAGE_DELETE || e === o.F_X.MESSAGE_PIN || e === o.F_X.MESSAGE_UNPIN)
        return o.GaG.USER;
    else if (e <= o.F_X.ROLE_DELETE) return o.GaG.ROLE;
    else if (e <= o.F_X.INVITE_DELETE) return o.GaG.INVITE;
    else if (e <= o.F_X.WEBHOOK_DELETE) return o.GaG.WEBHOOK;
    else if (e <= o.F_X.EMOJI_DELETE) return o.GaG.EMOJI;
    else if (e <= o.F_X.INTEGRATION_DELETE) return o.GaG.INTEGRATION;
    else if (e <= o.F_X.STAGE_INSTANCE_DELETE) return o.GaG.STAGE_INSTANCE;
    else if (e <= o.F_X.STICKER_DELETE) return o.GaG.STICKER;
    else if (e <= o.F_X.GUILD_SCHEDULED_EVENT_DELETE) return o.GaG.GUILD_SCHEDULED_EVENT;
    else if (e <= o.F_X.THREAD_DELETE) return o.GaG.THREAD;
    else if (e === o.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE) return o.GaG.APPLICATION_COMMAND;
    else if (e <= o.F_X.SOUNDBOARD_SOUND_DELETE) return o.GaG.GUILD_SOUNDBOARD;
    else if (e < o.F_X.AUTO_MODERATION_BLOCK_MESSAGE) return o.GaG.AUTO_MODERATION_RULE;
    else if (e === o.F_X.AUTO_MODERATION_BLOCK_MESSAGE) return o.GaG.USER;
    else if (e === o.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL) return o.GaG.USER;
    else if (e === o.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return o.GaG.USER;
    else if (e === o.F_X.AUTO_MODERATION_QUARANTINE_USER) return o.GaG.USER;
    else if (e <= o.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED) return o.GaG.GUILD;
    else if (e <= o.F_X.ONBOARDING_PROMPT_DELETE) return o.GaG.ONBOARDING_PROMPT;
    else if (e <= o.F_X.ONBOARDING_UPDATE) return o.GaG.GUILD_ONBOARDING;
    else if (e <= o.F_X.GUILD_HOME_REMOVE_ITEM) return o.GaG.GUILD_HOME;
    else if (e <= o.F_X.HARMFUL_LINKS_BLOCKED_MESSAGE) return o.GaG.GUILD;
    else if (e <= o.F_X.HOME_SETTINGS_UPDATE) return o.GaG.HOME_SETTINGS;
    else if (e <= o.F_X.VOICE_CHANNEL_STATUS_DELETE) return o.GaG.VOICE_CHANNEL_STATUS;
    else if (e <= o.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return o.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION;
    else if (e <= o.F_X.GUILD_MEMBER_VERIFICATION_UPDATE) return o.GaG.GUILD_MEMBER_VERIFICATION;
    else if (e <= o.F_X.GUILD_PROFILE_UPDATE) return o.GaG.GUILD_PROFILE;
    else if (e <= o.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION) return o.GaG.GUILD;
    return i.A.captureMessage("Unknown target type for: ".concat(e)), o.GaG.UNKNOWN;
}
function E(e) {
    switch (e) {
        case o.F_X.CHANNEL_CREATE:
        case o.F_X.CHANNEL_OVERWRITE_CREATE:
        case o.F_X.MEMBER_BAN_REMOVE:
        case o.F_X.ROLE_CREATE:
        case o.F_X.INVITE_CREATE:
        case o.F_X.WEBHOOK_CREATE:
        case o.F_X.EMOJI_CREATE:
        case o.F_X.STICKER_CREATE:
        case o.F_X.MESSAGE_PIN:
        case o.F_X.BOT_ADD:
        case o.F_X.INTEGRATION_CREATE:
        case o.F_X.STAGE_INSTANCE_CREATE:
        case o.F_X.GUILD_SCHEDULED_EVENT_CREATE:
        case o.F_X.THREAD_CREATE:
        case o.F_X.AUTO_MODERATION_RULE_CREATE:
        case o.F_X.CREATOR_MONETIZATION_REQUEST_CREATED:
        case o.F_X.ONBOARDING_PROMPT_CREATE:
        case o.F_X.ONBOARDING_CREATE:
        case o.F_X.GUILD_HOME_FEATURE_ITEM:
        case o.F_X.SOUNDBOARD_SOUND_CREATE:
        case o.F_X.HOME_SETTINGS_CREATE:
        case o.F_X.VOICE_CHANNEL_STATUS_CREATE:
            return o.RWi.CREATE;
        case o.F_X.CHANNEL_DELETE:
        case o.F_X.CHANNEL_OVERWRITE_DELETE:
        case o.F_X.MEMBER_KICK:
        case o.F_X.MEMBER_PRUNE:
        case o.F_X.MEMBER_BAN_ADD:
        case o.F_X.ROLE_DELETE:
        case o.F_X.INVITE_DELETE:
        case o.F_X.WEBHOOK_DELETE:
        case o.F_X.EMOJI_DELETE:
        case o.F_X.STICKER_DELETE:
        case o.F_X.MESSAGE_DELETE:
        case o.F_X.MESSAGE_BULK_DELETE:
        case o.F_X.MESSAGE_UNPIN:
        case o.F_X.INTEGRATION_DELETE:
        case o.F_X.MEMBER_DISCONNECT:
        case o.F_X.STAGE_INSTANCE_DELETE:
        case o.F_X.GUILD_SCHEDULED_EVENT_DELETE:
        case o.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
        case o.F_X.THREAD_DELETE:
        case o.F_X.AUTO_MODERATION_BLOCK_MESSAGE:
        case o.F_X.AUTO_MODERATION_RULE_DELETE:
        case o.F_X.ONBOARDING_PROMPT_DELETE:
        case o.F_X.GUILD_HOME_REMOVE_ITEM:
        case o.F_X.SOUNDBOARD_SOUND_DELETE:
        case o.F_X.VOICE_CHANNEL_STATUS_DELETE:
            return o.RWi.DELETE;
        case o.F_X.GUILD_UPDATE:
        case o.F_X.CHANNEL_UPDATE:
        case o.F_X.CHANNEL_OVERWRITE_UPDATE:
        case o.F_X.MEMBER_UPDATE:
        case o.F_X.MEMBER_ROLE_UPDATE:
        case o.F_X.ROLE_UPDATE:
        case o.F_X.INVITE_UPDATE:
        case o.F_X.WEBHOOK_UPDATE:
        case o.F_X.EMOJI_UPDATE:
        case o.F_X.STICKER_UPDATE:
        case o.F_X.INTEGRATION_UPDATE:
        case o.F_X.MEMBER_MOVE:
        case o.F_X.STAGE_INSTANCE_UPDATE:
        case o.F_X.GUILD_SCHEDULED_EVENT_UPDATE:
        case o.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case o.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
        case o.F_X.THREAD_UPDATE:
        case o.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE:
        case o.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED:
        case o.F_X.AUTO_MODERATION_RULE_UPDATE:
        case o.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL:
        case o.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
        case o.F_X.AUTO_MODERATION_QUARANTINE_USER:
        case o.F_X.ONBOARDING_PROMPT_UPDATE:
        case o.F_X.ONBOARDING_UPDATE:
        case o.F_X.SOUNDBOARD_SOUND_UPDATE:
        case o.F_X.HOME_SETTINGS_UPDATE:
        case o.F_X.GUILD_MEMBER_VERIFICATION_UPDATE:
        case o.F_X.GUILD_PROFILE_UPDATE:
        case o.F_X.GUILD_MIGRATE_PIN_PERMISSION:
        case o.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
            return o.RWi.UPDATE;
    }
    return o.RWi.ALL;
}
class d {
    constructor(e, t, n) {
        c(this, "key", void 0),
            c(this, "oldValue", void 0),
            c(this, "newValue", void 0),
            c(this, "subtarget", void 0),
            (this.key = e),
            (this.oldValue = t),
            (this.newValue = n);
    }
}
class _ extends a.A {
    constructor(e) {
        var t, n, l, a, i, o;
        super(),
            c(this, "id", void 0),
            c(this, "actionType", void 0),
            c(this, "action", void 0),
            c(this, "targetType", void 0),
            c(this, "targetId", void 0),
            c(this, "target", void 0),
            c(this, "userId", void 0),
            c(this, "changes", void 0),
            c(this, "timestampStart", void 0),
            c(this, "timestampEnd", void 0),
            c(this, "user", void 0),
            c(this, "options", void 0),
            (this.id = e.id),
            (this.action = e.action),
            (this.actionType = E(this.action)),
            (this.targetId = e.targetId),
            (this.timestampStart = null != (t = e.timestampStart) ? t : r()(s.default.extractTimestamp(this.id))),
            (this.timestampEnd = null != (n = e.timestampEnd) ? n : this.timestampStart),
            (this.userId = e.userId),
            (this.changes = null != (l = e.changes) ? l : []),
            (this.targetType = u(this.action)),
            (this.options = null != (a = e.options) ? a : {}),
            (this.target = null != (i = e.target) ? i : e.id),
            (this.user = null != (o = e.user) ? o : null);
    }
}
let g = _;
