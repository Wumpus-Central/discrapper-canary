r.d(n, {
    VY: function () {
        return l;
    },
    _$: function () {
        return u;
    },
    wt: function () {
        return d;
    }
});
var i = r(411104);
var a = r(149765),
    o = r(981631),
    s = r(388032);
let l = [o.Plq.ADMINISTRATOR, o.Plq.MANAGE_GUILD, o.Plq.MANAGE_ROLES, o.Plq.MANAGE_CHANNELS, o.Plq.KICK_MEMBERS, o.Plq.BAN_MEMBERS, o.Plq.CREATE_INSTANT_INVITE, o.Plq.MANAGE_NICKNAMES, o.Plq.CHANGE_NICKNAME, o.Plq.MANAGE_GUILD_EXPRESSIONS, o.Plq.CREATE_GUILD_EXPRESSIONS, o.Plq.MANAGE_WEBHOOKS, o.Plq.VIEW_AUDIT_LOG, o.Plq.VIEW_CHANNEL, o.Plq.MANAGE_EVENTS, o.Plq.CREATE_EVENTS, o.Plq.MODERATE_MEMBERS, o.Plq.VIEW_GUILD_ANALYTICS, o.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS, o.Plq.USE_EXTERNAL_APPS, o.Plq.SEND_MESSAGES, o.Plq.SEND_MESSAGES_IN_THREADS, o.Plq.CREATE_PUBLIC_THREADS, o.Plq.CREATE_PRIVATE_THREADS, o.Plq.SEND_TTS_MESSAGES, o.Plq.MANAGE_MESSAGES, o.Plq.MANAGE_THREADS, o.Plq.EMBED_LINKS, o.Plq.ATTACH_FILES, o.Plq.READ_MESSAGE_HISTORY, o.Plq.MENTION_EVERYONE, o.Plq.ADD_REACTIONS, o.Plq.USE_EXTERNAL_EMOJIS, o.Plq.USE_EXTERNAL_STICKERS, o.Plq.USE_APPLICATION_COMMANDS, o.Plq.SEND_VOICE_MESSAGES, o.Plq.USE_CLYDE_AI, o.Plq.SEND_POLLS, o.Plq.CONNECT, o.Plq.SPEAK, o.Plq.MUTE_MEMBERS, o.Plq.DEAFEN_MEMBERS, o.Plq.MOVE_MEMBERS, o.Plq.USE_VAD, o.Plq.PRIORITY_SPEAKER, o.Plq.REQUEST_TO_SPEAK, o.Plq.STREAM, o.Plq.USE_EMBEDDED_ACTIVITIES, o.Plq.USE_SOUNDBOARD, o.Plq.USE_EXTERNAL_SOUNDS, o.Plq.SET_VOICE_CHANNEL_STATUS];
function u(e) {
    return Object.values(o.Plq).some((n) => a.e$(e, n) && !l.includes(n));
}
let c = {
    [o.Plq.ADMINISTRATOR.toString()]: () => s.intl.string(s.t.PGvZqa),
    [o.Plq.MANAGE_GUILD.toString()]: () => s.intl.string(s.t.QZRcfH),
    [o.Plq.MANAGE_ROLES.toString()]: () => s.intl.string(s.t['C8d+oK']),
    [o.Plq.MANAGE_CHANNELS.toString()]: () => s.intl.string(s.t['9qLtWl']),
    [o.Plq.KICK_MEMBERS.toString()]: () => s.intl.string(s.t.pBNv6u),
    [o.Plq.BAN_MEMBERS.toString()]: () => s.intl.string(s.t.oTBA7O),
    [o.Plq.CREATE_INSTANT_INVITE.toString()]: () => s.intl.string(s.t.zJrgTE),
    [o.Plq.MANAGE_NICKNAMES.toString()]: () => s.intl.string(s.t['t+Ct5+']),
    [o.Plq.CHANGE_NICKNAME.toString()]: () => s.intl.string(s.t.dilOFx),
    [o.Plq.MANAGE_GUILD_EXPRESSIONS.toString()]: () => s.intl.string(s.t.bbuXIi),
    [o.Plq.CREATE_GUILD_EXPRESSIONS.toString()]: () => s.intl.string(s.t.HarVuL),
    [o.Plq.MANAGE_WEBHOOKS.toString()]: () => s.intl.string(s.t['/ADKmJ']),
    [o.Plq.VIEW_AUDIT_LOG.toString()]: () => s.intl.string(s.t.fZgLpK),
    [o.Plq.VIEW_CHANNEL.toString()]: () => s.intl.string(s.t.uV83ys),
    [o.Plq.SEND_MESSAGES.toString()]: () => s.intl.string(s.t.T32rkJ),
    [o.Plq.SEND_TTS_MESSAGES.toString()]: () => s.intl.string(s.t.Mg7bkp),
    [o.Plq.MANAGE_MESSAGES.toString()]: () => s.intl.string(s.t['6lU9xM']),
    [o.Plq.EMBED_LINKS.toString()]: () => s.intl.string(s.t['969dEB']),
    [o.Plq.ATTACH_FILES.toString()]: () => s.intl.string(s.t['3AS4UF']),
    [o.Plq.READ_MESSAGE_HISTORY.toString()]: () => s.intl.string(s.t.l9ufaW),
    [o.Plq.MENTION_EVERYONE.toString()]: () => s.intl.string(s.t.Y78KGB),
    [o.Plq.ADD_REACTIONS.toString()]: () => s.intl.string(s.t.yEoJAg),
    [o.Plq.USE_EXTERNAL_EMOJIS.toString()]: () => s.intl.string(s.t.BpBGZW),
    [o.Plq.USE_EXTERNAL_STICKERS.toString()]: () => s.intl.string(s.t['UeRs+f']),
    [o.Plq.USE_APPLICATION_COMMANDS.toString()]: () => s.intl.string(s.t.shbR1d),
    [o.Plq.SEND_VOICE_MESSAGES.toString()]: () => s.intl.string(s.t['+8GStb']),
    [o.Plq.CONNECT.toString()]: () => s.intl.string(s.t.S0W8Z2),
    [o.Plq.SPEAK.toString()]: () => s.intl.string(s.t['8w1tIS']),
    [o.Plq.MUTE_MEMBERS.toString()]: () => s.intl.string(s.t['8EI309']),
    [o.Plq.DEAFEN_MEMBERS.toString()]: () => s.intl.string(s.t['9L47Fh']),
    [o.Plq.MOVE_MEMBERS.toString()]: () => s.intl.string(s.t.YtjJPT),
    [o.Plq.USE_VAD.toString()]: () => s.intl.string(s.t['08zAV1']),
    [o.Plq.PRIORITY_SPEAKER.toString()]: () => s.intl.string(s.t.BVK71t),
    [o.Plq.CREATE_PUBLIC_THREADS.toString()]: () => s.intl.string(s.t['25rKnZ']),
    [o.Plq.CREATE_PRIVATE_THREADS.toString()]: () => s.intl.string(s.t.QwbTSU),
    [o.Plq.SEND_MESSAGES_IN_THREADS.toString()]: () => s.intl.string(s.t.fTE74u),
    [o.Plq.MANAGE_THREADS.toString()]: () => s.intl.string(s.t.kEqgr6),
    [o.Plq.MANAGE_EVENTS.toString()]: () => s.intl.string(s.t.HIgA5e),
    [o.Plq.CREATE_EVENTS.toString()]: () => s.intl.string(s.t.qyjZub),
    [o.Plq.MODERATE_MEMBERS.toString()]: () => s.intl.string(s.t['7DgVBg']),
    [o.Plq.REQUEST_TO_SPEAK.toString()]: () => s.intl.string(s.t['5kicT0']),
    [o.Plq.VIEW_GUILD_ANALYTICS.toString()]: () => s.intl.string(s.t.rQJBEx),
    [o.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => s.intl.string(s.t['0lTLTk']),
    [o.Plq.STREAM.toString()]: () => s.intl.string(s.t.FlNoSU),
    [o.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: () => s.intl.string(s.t.rLSGen),
    [o.Plq.USE_SOUNDBOARD.toString()]: () => s.intl.string(s.t.Bco7ND),
    [o.Plq.USE_EXTERNAL_SOUNDS.toString()]: () => s.intl.string(s.t.pwaVJy),
    [o.Plq.USE_CLYDE_AI.toString()]: () => s.intl.string(s.t['8eeEZm']),
    [o.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: () => s.intl.string(s.t.VBwkUV),
    [o.Plq.SEND_POLLS.toString()]: () => s.intl.string(s.t.UMQ7W1),
    [o.Plq.USE_EXTERNAL_APPS.toString()]: () => s.intl.string(s.t.TtA5rK)
};
function d(e) {
    let n = c[e.toString()];
    if (null == n) throw Error('Unknown permission. Did you provide a _single_ bit flag? Perm: '.concat(e));
    return n();
}
