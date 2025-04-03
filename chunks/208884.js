i.d(E, {
    FX: () => g,
    Ny: () => o,
    WV: () => P,
    WW: () => S,
    _u: () => M,
    aW: () => _,
    kv: () => I,
    s4: () => s,
    uu: () => a,
    vq: () => A,
    xU: () => T,
    zO: () => N
}),
    i(653041),
    i(566702);
var r = i(231338),
    n = i(388032);
function l(t) {
    let E = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (
        E ||
            (t.permissions = t.permissions.filter((t) => {
                let { isExperimental: E } = t;
                return !E;
            })),
        t
    );
}
function e(t, E) {
    return t.map((t) => E[t.toString()]);
}
function S(t) {
    var E, i;
    return {
        [r.Pl.VIEW_CHANNEL.toString()]: {
            title: n.NW.string(n.t.uV83ys),
            description: n.t.ybTHLi,
            flag: r.Pl.VIEW_CHANNEL
        },
        [r.Pl.MANAGE_CHANNELS.toString()]: {
            title: n.NW.string(n.t['9qLtWl']),
            description: n.t.qfJnur,
            flag: r.Pl.MANAGE_CHANNELS
        },
        [r.Pl.MANAGE_ROLES.toString()]: {
            title: n.NW.string(n.t['C8d+oK']),
            description: n.t.buo9u7,
            flag: r.Pl.MANAGE_ROLES
        },
        [r.Pl.MANAGE_GUILD_EXPRESSIONS.toString()]: {
            title: n.NW.string(n.t.bbuXIi),
            description: n.t['4vb3//'],
            flag: r.Pl.MANAGE_GUILD_EXPRESSIONS
        },
        [r.Pl.CREATE_GUILD_EXPRESSIONS.toString()]: {
            title: n.NW.string(n.t.HarVuL),
            description: n.t.gkdHvL,
            flag: r.Pl.CREATE_GUILD_EXPRESSIONS
        },
        [r.Pl.VIEW_AUDIT_LOG.toString()]: {
            title: n.NW.string(n.t.fZgLpK),
            description: n.t['0hx75u'],
            flag: r.Pl.VIEW_AUDIT_LOG
        },
        [r.Pl.VIEW_GUILD_ANALYTICS.toString()]: {
            title: n.NW.string(n.t.rQJBEx),
            description: n.t.whVKhY,
            flag: r.Pl.VIEW_GUILD_ANALYTICS
        },
        [r.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
            title: n.NW.string(n.t['0lTLTk']),
            description: n.t.mut6NT,
            flag: r.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS
        },
        [r.Pl.MANAGE_WEBHOOKS.toString()]: {
            title: n.NW.string(n.t['/ADKmJ']),
            description: n.t.LczYqK,
            flag: r.Pl.MANAGE_WEBHOOKS
        },
        [r.Pl.MANAGE_GUILD.toString()]: {
            title: n.NW.string(n.t.QZRcfH),
            description: n.t['KoQe/P'],
            flag: r.Pl.MANAGE_GUILD
        },
        [r.Pl.CREATE_INSTANT_INVITE.toString()]: {
            title: n.NW.string(n.t.zJrgTE),
            description: n.t.PCFOZW,
            flag: r.Pl.CREATE_INSTANT_INVITE
        },
        [r.Pl.CHANGE_NICKNAME.toString()]: {
            title: n.NW.string(n.t.dilOFx),
            description: n.t['b8B++v'],
            flag: r.Pl.CHANGE_NICKNAME
        },
        [r.Pl.MANAGE_NICKNAMES.toString()]: {
            title: n.NW.string(n.t['t+Ct5+']),
            description: n.t.hTnlMT,
            flag: r.Pl.MANAGE_NICKNAMES
        },
        [r.Pl.KICK_MEMBERS.toString()]: {
            title: t.showMembershipManualApprovalPermissions ? n.NW.string(n.t['9TxXwc']) : n.NW.string(n.t.pBNv6u),
            description: t.showMembershipManualApprovalPermissions ? n.t.hGBAn5 : n.t.rwdPaG,
            flag: r.Pl.KICK_MEMBERS
        },
        [r.Pl.BAN_MEMBERS.toString()]: {
            title: n.NW.string(n.t.oTBA7O),
            description: n.t.OqNY09,
            flag: r.Pl.BAN_MEMBERS
        },
        [r.Pl.MODERATE_MEMBERS.toString()]: {
            title: n.NW.string(n.t['+RL6p6']),
            description: n.t.T6bZsb,
            flag: r.Pl.MODERATE_MEMBERS
        },
        [r.Pl.SEND_MESSAGES.toString()]: {
            title: t.showForumPermissions ? n.NW.string(n.t.S1VOwc) : n.NW.string(n.t.T32rkJ),
            description: t.showForumPermissions ? n.t.prvWKi : n.t.qry4PT,
            flag: r.Pl.SEND_MESSAGES
        },
        [r.Pl.EMBED_LINKS.toString()]: {
            title: n.NW.string(n.t['969dEB']),
            description: n.t.ChoIi4,
            flag: r.Pl.EMBED_LINKS
        },
        [r.Pl.ATTACH_FILES.toString()]: {
            title: n.NW.string(n.t['3AS4UF']),
            description: n.t['/87mYG'],
            flag: r.Pl.ATTACH_FILES
        },
        [r.Pl.ADD_REACTIONS.toString()]: {
            title: n.NW.string(n.t.yEoJAg),
            description: n.t.FEYwX1,
            flag: r.Pl.ADD_REACTIONS
        },
        [r.Pl.USE_EXTERNAL_EMOJIS.toString()]: {
            title: n.NW.string(n.t['+bxf3N']),
            description: n.t.POeVIi,
            flag: r.Pl.USE_EXTERNAL_EMOJIS
        },
        [r.Pl.USE_EXTERNAL_STICKERS.toString()]: {
            title: n.NW.string(n.t.ERNhYW),
            description: n.t.AdXVhI,
            flag: r.Pl.USE_EXTERNAL_STICKERS
        },
        [r.Pl.MENTION_EVERYONE.toString()]: {
            title: n.NW.string(n.t.Y78KGB),
            description: n.t.ryj6Nz,
            flag: r.Pl.MENTION_EVERYONE
        },
        [r.Pl.MANAGE_MESSAGES.toString()]: {
            title: n.NW.string(n.t['6lU9xM']),
            description: n.t['RXMG//'],
            flag: r.Pl.MANAGE_MESSAGES
        },
        [r.Pl.READ_MESSAGE_HISTORY.toString()]: {
            title: n.NW.string(n.t.l9ufaW),
            description: n.t.rmHPFR,
            flag: r.Pl.READ_MESSAGE_HISTORY
        },
        [r.Pl.SEND_TTS_MESSAGES.toString()]: {
            title: n.NW.string(n.t.mMbwh4),
            description: n.t.D6x8Nj,
            flag: r.Pl.SEND_TTS_MESSAGES
        },
        [r.Pl.USE_APPLICATION_COMMANDS.toString()]: {
            title: n.NW.string(n.t.nkoPOj),
            description: n.t.pJrJ39,
            flag: r.Pl.USE_APPLICATION_COMMANDS
        },
        [r.Pl.USE_EXTERNAL_APPS.toString()]: {
            title: n.NW.string(n.t.TtA5rK),
            description: n.t.mzLoDQ,
            flag: r.Pl.USE_EXTERNAL_APPS
        },
        [r.Pl.SEND_VOICE_MESSAGES.toString()]: {
            title: n.NW.string(n.t.WlWSBQ),
            description: n.t.pDuyi4,
            flag: r.Pl.SEND_VOICE_MESSAGES
        },
        [r.Pl.USE_CLYDE_AI.toString()]: {
            title: n.NW.string(n.t['8eeEZm']),
            description: n.t.Tx5TjI,
            flag: r.Pl.USE_CLYDE_AI
        },
        [r.Pl.SEND_POLLS.toString()]: {
            title: n.NW.string(n.t.UMQ7W1),
            description: n.t['Xl6W+P'],
            flag: r.Pl.SEND_POLLS
        },
        [r.Pl.CONNECT.toString()]: {
            title: n.NW.string(n.t.S0W8Z2),
            description: n.t['3GCm/f'],
            flag: r.Pl.CONNECT
        },
        [r.Pl.SPEAK.toString()]: {
            title: n.NW.string(n.t['8w1tIS']),
            description: n.t.y4MncH,
            flag: r.Pl.SPEAK
        },
        [r.Pl.STREAM.toString()]: {
            title: n.NW.string(n.t.FlNoSU),
            description: n.t['6Z0j9v'],
            flag: r.Pl.STREAM
        },
        [r.Pl.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: n.NW.string(n.t.rLSGen),
            description: n.t.BEqU5O,
            flag: r.Pl.USE_EMBEDDED_ACTIVITIES
        },
        [r.Pl.USE_SOUNDBOARD.toString()]: {
            title: n.NW.string(n.t.Bco7ND),
            description: null != (E = null == t ? void 0 : t.SOUNDBOARD_DESCRIPTION) ? E : n.t['+8p+fX'],
            flag: r.Pl.USE_SOUNDBOARD
        },
        [r.Pl.USE_EXTERNAL_SOUNDS.toString()]: {
            title: n.NW.string(n.t.pwaVJy),
            description: n.t.qDpPtb,
            flag: r.Pl.USE_EXTERNAL_SOUNDS
        },
        [r.Pl.USE_VAD.toString()]: {
            title: n.NW.string(n.t['08zAV1']),
            description: n.t['7CHjmZ'],
            flag: r.Pl.USE_VAD
        },
        [r.Pl.PRIORITY_SPEAKER.toString()]: {
            title: n.NW.string(n.t.BVK71t),
            description: null != (i = null == t ? void 0 : t.PRIORITY_SPEAKER_DESCRIPTION) ? i : n.t.OJkrrq,
            flag: r.Pl.PRIORITY_SPEAKER
        },
        [r.Pl.MUTE_MEMBERS.toString()]: {
            title: n.NW.string(n.t['8EI309']),
            description: n.t.PIhGAw,
            flag: r.Pl.MUTE_MEMBERS
        },
        [r.Pl.DEAFEN_MEMBERS.toString()]: {
            title: n.NW.string(n.t['9L47Fh']),
            description: n.t['FQr3+v'],
            flag: r.Pl.DEAFEN_MEMBERS
        },
        [r.Pl.MOVE_MEMBERS.toString()]: {
            title: n.NW.string(n.t.YtjJPT),
            description: n.t.SEe0Gh,
            flag: r.Pl.MOVE_MEMBERS
        },
        [r.Pl.REQUEST_TO_SPEAK.toString()]: {
            title: n.NW.string(n.t['5kicT0']),
            description: n.t['yNE+Q0'],
            flag: r.Pl.REQUEST_TO_SPEAK,
            isExperimental: !0
        },
        [r.Pl.ADMINISTRATOR.toString()]: {
            title: n.NW.string(n.t.PGvZqa),
            description: 'string' == typeof n.t.UJxMrK ? n.t.UJxMrK : n.NW.format(n.t.UJxMrK, {}),
            flag: r.Pl.ADMINISTRATOR
        },
        [r.Pl.MANAGE_EVENTS.toString()]: {
            title: n.NW.string(n.t.HIgA5e),
            description: n.t['SL+qgI'],
            flag: r.Pl.MANAGE_EVENTS
        },
        [r.Pl.CREATE_EVENTS.toString()]: {
            title: n.NW.string(n.t.qyjZub),
            description: n.t.bQEFJS,
            flag: r.Pl.CREATE_EVENTS
        },
        [r.Pl.MANAGE_THREADS.toString()]: {
            title: t.showForumPermissions ? n.NW.string(n.t.QKe7Q0) : n.NW.string(n.t.kEqgr6),
            description: t.showForumPermissions ? n.t.QAxIIi : n.t.AKdc4O,
            flag: r.Pl.MANAGE_THREADS
        },
        [r.Pl.CREATE_PUBLIC_THREADS.toString()]: {
            title: n.NW.string(n.t['25rKnZ']),
            description: n.t.ODCYj4,
            flag: r.Pl.CREATE_PUBLIC_THREADS
        },
        [r.Pl.CREATE_PRIVATE_THREADS.toString()]: {
            title: n.NW.string(n.t.QwbTSU),
            description: n.t['G/cc3t'],
            flag: r.Pl.CREATE_PRIVATE_THREADS
        },
        [r.Pl.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: t.showForumPermissions ? n.NW.string(n.t['5QlVGx']) : n.NW.string(n.t.fTE74u),
            description: t.showForumPermissions ? n.t.C2ZPEx : n.t['6pyXvr'],
            flag: r.Pl.SEND_MESSAGES_IN_THREADS
        },
        [r.Pl.USE_CLYDE_AI.toString()]: {
            title: n.NW.string(n.t['8eeEZm']),
            description: n.t.Tx5TjI,
            flag: r.Pl.USE_CLYDE_AI
        },
        [r.Pl.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: n.NW.string(n.t.VBwkUV),
            description: n.t.C6BzX1,
            flag: r.Pl.SET_VOICE_CHANNEL_STATUS
        }
    };
}
function s(t) {
    let E,
        i = S(t),
        s = [
            (function (t, E) {
                let i = [r.Pl.VIEW_CHANNEL, r.Pl.MANAGE_CHANNELS, r.Pl.MANAGE_ROLES, r.Pl.CREATE_GUILD_EXPRESSIONS, r.Pl.MANAGE_GUILD_EXPRESSIONS, r.Pl.VIEW_AUDIT_LOG, r.Pl.VIEW_GUILD_ANALYTICS];
                return (
                    E.showCreatorMonetizationAnalyticsPermission && i.push(r.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS),
                    i.push(r.Pl.MANAGE_WEBHOOKS),
                    i.push(r.Pl.MANAGE_GUILD),
                    l({
                        title: n.NW.string(n.t['mYck+P']),
                        permissions: e(i, t)
                    })
                );
            })(i, t),
            (function (t) {
                let E = [r.Pl.CREATE_INSTANT_INVITE, r.Pl.CHANGE_NICKNAME, r.Pl.MANAGE_NICKNAMES, r.Pl.KICK_MEMBERS, r.Pl.BAN_MEMBERS, r.Pl.MODERATE_MEMBERS];
                return l({
                    title: n.NW.string(n.t.Ny49TE),
                    permissions: e(E, t)
                });
            })(i),
            ((E = [r.Pl.SEND_MESSAGES, r.Pl.SEND_MESSAGES_IN_THREADS, r.Pl.CREATE_PUBLIC_THREADS, r.Pl.CREATE_PRIVATE_THREADS, r.Pl.EMBED_LINKS, r.Pl.ATTACH_FILES, r.Pl.ADD_REACTIONS, r.Pl.USE_EXTERNAL_EMOJIS, r.Pl.USE_EXTERNAL_STICKERS, r.Pl.USE_EXTERNAL_SOUNDS, r.Pl.MENTION_EVERYONE, r.Pl.MANAGE_MESSAGES, r.Pl.MANAGE_THREADS, r.Pl.READ_MESSAGE_HISTORY, r.Pl.SEND_TTS_MESSAGES, r.Pl.SEND_VOICE_MESSAGES, r.Pl.USE_CLYDE_AI, r.Pl.SEND_POLLS]),
            t.inSoundmojiExperiment || (E = E.filter((t) => t !== r.Pl.USE_EXTERNAL_SOUNDS)),
            t.showClydeAIPermissions || (E = E.filter((t) => t !== r.Pl.USE_CLYDE_AI)),
            l({
                title: n.NW.string(n.t.cKobOz),
                permissions: e(E, i)
            })),
            (function (t, E) {
                let i = [r.Pl.CONNECT, r.Pl.SPEAK, r.Pl.STREAM, r.Pl.USE_SOUNDBOARD, r.Pl.USE_EXTERNAL_SOUNDS, r.Pl.USE_VAD, r.Pl.PRIORITY_SPEAKER, r.Pl.MUTE_MEMBERS, r.Pl.DEAFEN_MEMBERS, r.Pl.MOVE_MEMBERS, r.Pl.SET_VOICE_CHANNEL_STATUS];
                return l({
                    title: n.NW.string(n.t['46Ra1d']),
                    permissions: e(i, t)
                });
            })(i, 0),
            (function (t) {
                let E = [r.Pl.USE_APPLICATION_COMMANDS, r.Pl.USE_EMBEDDED_ACTIVITIES, r.Pl.USE_EXTERNAL_APPS];
                return l({
                    title: n.NW.string(n.t['rrh/W1']),
                    permissions: e(E, t)
                });
            })(i)
        ];
    return (
        t.showStageChannelPermissions &&
            s.push(
                l(
                    {
                        title: n.NW.string(n.t.yniaur),
                        permissions: e([r.Pl.REQUEST_TO_SPEAK], i)
                    },
                    t.showExperimental
                )
            ),
        s.push(
            l(
                {
                    title: n.NW.string(n.t.b8lplZ),
                    permissions: e([r.Pl.CREATE_EVENTS, r.Pl.MANAGE_EVENTS], i)
                },
                t.showExperimental
            )
        ),
        s.push(
            l({
                title: n.NW.string(n.t['3uI5CQ']),
                permissions: e([r.Pl.ADMINISTRATOR], i)
            })
        ),
        s
    );
}
function N(t, E) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showManageWebhooks: !0 };
    return {
        title: E,
        permissions: e((null == i ? void 0 : i.showManageWebhooks) ? [r.Pl.VIEW_CHANNEL, r.Pl.MANAGE_CHANNELS, r.Pl.MANAGE_ROLES, r.Pl.MANAGE_WEBHOOKS] : [r.Pl.VIEW_CHANNEL, r.Pl.MANAGE_CHANNELS, r.Pl.MANAGE_ROLES], t)
    };
}
function o(t, E) {
    return {
        title: E,
        permissions: e([r.Pl.CREATE_INSTANT_INVITE], t)
    };
}
function A(t, E, i) {
    let n = [r.Pl.SEND_MESSAGES, r.Pl.SEND_MESSAGES_IN_THREADS, r.Pl.CREATE_PUBLIC_THREADS, r.Pl.CREATE_PRIVATE_THREADS, r.Pl.EMBED_LINKS, r.Pl.ATTACH_FILES, r.Pl.ADD_REACTIONS, r.Pl.USE_EXTERNAL_EMOJIS, r.Pl.USE_EXTERNAL_STICKERS, r.Pl.USE_EXTERNAL_SOUNDS, r.Pl.MENTION_EVERYONE, r.Pl.MANAGE_MESSAGES, r.Pl.MANAGE_THREADS, r.Pl.READ_MESSAGE_HISTORY, r.Pl.SEND_TTS_MESSAGES, r.Pl.SEND_VOICE_MESSAGES, r.Pl.USE_CLYDE_AI, r.Pl.SEND_POLLS];
    return (
        i.inSoundmojiExperiment || (n = n.filter((t) => t !== r.Pl.USE_EXTERNAL_SOUNDS)),
        (i.showPrivateThreads && i.showCreateThreads) || (n = n.filter((t) => t !== r.Pl.CREATE_PRIVATE_THREADS)),
        i.showCreateThreads || (n = n.filter((t) => t !== r.Pl.CREATE_PUBLIC_THREADS)),
        i.showClydeAIPermissions || (n = n.filter((t) => t !== r.Pl.USE_CLYDE_AI)),
        {
            title: E,
            description: i.sectionDescription,
            permissions: e(n, t)
        }
    );
}
function P(t, E) {
    return {
        title: E,
        permissions: e([r.Pl.CONNECT, r.Pl.SPEAK, r.Pl.STREAM, r.Pl.USE_SOUNDBOARD, r.Pl.USE_EXTERNAL_SOUNDS, r.Pl.USE_VAD, r.Pl.PRIORITY_SPEAKER, r.Pl.MUTE_MEMBERS, r.Pl.DEAFEN_MEMBERS, r.Pl.MOVE_MEMBERS, r.Pl.SET_VOICE_CHANNEL_STATUS], t)
    };
}
function _(t, E, i) {
    let n = [r.Pl.SEND_MESSAGES, r.Pl.EMBED_LINKS, r.Pl.ATTACH_FILES, r.Pl.ADD_REACTIONS, r.Pl.USE_EXTERNAL_EMOJIS, r.Pl.USE_EXTERNAL_STICKERS, r.Pl.USE_EXTERNAL_SOUNDS, r.Pl.MENTION_EVERYONE, r.Pl.MANAGE_MESSAGES, r.Pl.READ_MESSAGE_HISTORY, r.Pl.SEND_TTS_MESSAGES, r.Pl.USE_APPLICATION_COMMANDS, r.Pl.SEND_VOICE_MESSAGES, r.Pl.SEND_POLLS];
    return (
        i.inSoundmojiExperiment || (n = n.filter((t) => t !== r.Pl.USE_EXTERNAL_SOUNDS)),
        {
            title: E,
            description: i.sectionDescription,
            permissions: e(n, t)
        }
    );
}
function T(t, E) {
    return {
        title: E,
        permissions: e([r.Pl.USE_APPLICATION_COMMANDS, r.Pl.USE_EMBEDDED_ACTIVITIES, r.Pl.USE_EXTERNAL_APPS], t)
    };
}
function g(t, E, i) {
    return {
        title: E,
        permissions: e(i ? [r.Pl.CONNECT, r.Pl.STREAM, r.Pl.MUTE_MEMBERS, r.Pl.MOVE_MEMBERS] : [r.Pl.CONNECT, r.Pl.MUTE_MEMBERS, r.Pl.MOVE_MEMBERS], t)
    };
}
function I(t, E) {
    return {
        title: E,
        permissions: e([r.Pl.REQUEST_TO_SPEAK, r.Pl.MENTION_EVERYONE], t)
    };
}
function a(t, E) {
    return {
        title: E,
        permissions: e([r.Pl.CREATE_EVENTS, r.Pl.MANAGE_EVENTS], t)
    };
}
function M(t) {
    return null == t ? t : 'string' == typeof t ? t.trim() : 'function' == typeof t ? n.NW.format(t, {}) : t;
}
