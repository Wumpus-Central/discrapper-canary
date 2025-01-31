E.d(i, {
    FX: () => g,
    Ny: () => _,
    WV: () => P,
    WW: () => e,
    _u: () => R,
    aW: () => N,
    kv: () => I,
    s4: () => s,
    uu: () => M,
    vq: () => o,
    xU: () => T,
    zO: () => A
}),
    E(653041);
var l = E(231338),
    n = E(388032);
function r(t) {
    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (
        i ||
            (t.permissions = t.permissions.filter((t) => {
                let { isExperimental: i } = t;
                return !i;
            })),
        t
    );
}
function S(t, i) {
    return t.map((t) => i[t.toString()]);
}
function e(t) {
    var i, E;
    return {
        [l.Pl.VIEW_CHANNEL.toString()]: {
            title: n.intl.string(n.t.uV83ys),
            description: n.t.ybTHLi,
            flag: l.Pl.VIEW_CHANNEL
        },
        [l.Pl.MANAGE_CHANNELS.toString()]: {
            title: n.intl.string(n.t['9qLtWl']),
            description: n.t.qfJnur,
            flag: l.Pl.MANAGE_CHANNELS
        },
        [l.Pl.MANAGE_ROLES.toString()]: {
            title: n.intl.string(n.t['C8d+oK']),
            description: n.t.buo9u7,
            flag: l.Pl.MANAGE_ROLES
        },
        [l.Pl.MANAGE_GUILD_EXPRESSIONS.toString()]: {
            title: n.intl.string(n.t.bbuXIi),
            description: n.t['4vb3//'],
            flag: l.Pl.MANAGE_GUILD_EXPRESSIONS
        },
        [l.Pl.CREATE_GUILD_EXPRESSIONS.toString()]: {
            title: n.intl.string(n.t.HarVuL),
            description: n.t.gkdHvL,
            flag: l.Pl.CREATE_GUILD_EXPRESSIONS
        },
        [l.Pl.VIEW_AUDIT_LOG.toString()]: {
            title: n.intl.string(n.t.fZgLpK),
            description: n.t['0hx75u'],
            flag: l.Pl.VIEW_AUDIT_LOG
        },
        [l.Pl.VIEW_GUILD_ANALYTICS.toString()]: {
            title: n.intl.string(n.t.rQJBEx),
            description: n.t.whVKhY,
            flag: l.Pl.VIEW_GUILD_ANALYTICS
        },
        [l.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
            title: n.intl.string(n.t['0lTLTk']),
            description: n.t.mut6NT,
            flag: l.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS
        },
        [l.Pl.MANAGE_WEBHOOKS.toString()]: {
            title: n.intl.string(n.t['/ADKmJ']),
            description: n.t.LczYqK,
            flag: l.Pl.MANAGE_WEBHOOKS
        },
        [l.Pl.MANAGE_GUILD.toString()]: {
            title: n.intl.string(n.t.QZRcfH),
            description: n.t['KoQe/P'],
            flag: l.Pl.MANAGE_GUILD
        },
        [l.Pl.CREATE_INSTANT_INVITE.toString()]: {
            title: n.intl.string(n.t.zJrgTE),
            description: n.t.PCFOZW,
            flag: l.Pl.CREATE_INSTANT_INVITE
        },
        [l.Pl.CHANGE_NICKNAME.toString()]: {
            title: n.intl.string(n.t.dilOFx),
            description: n.t['b8B++v'],
            flag: l.Pl.CHANGE_NICKNAME
        },
        [l.Pl.MANAGE_NICKNAMES.toString()]: {
            title: n.intl.string(n.t['t+Ct5+']),
            description: n.t.hTnlMT,
            flag: l.Pl.MANAGE_NICKNAMES
        },
        [l.Pl.KICK_MEMBERS.toString()]: {
            title: t.showMembershipManualApprovalPermissions ? n.intl.string(n.t['9TxXwc']) : n.intl.string(n.t.pBNv6u),
            description: t.showMembershipManualApprovalPermissions ? n.t.hGBAn5 : n.t.rwdPaG,
            flag: l.Pl.KICK_MEMBERS
        },
        [l.Pl.BAN_MEMBERS.toString()]: {
            title: n.intl.string(n.t.oTBA7O),
            description: n.t.OqNY09,
            flag: l.Pl.BAN_MEMBERS
        },
        [l.Pl.MODERATE_MEMBERS.toString()]: {
            title: n.intl.string(n.t['+RL6p6']),
            description: n.t.T6bZsb,
            flag: l.Pl.MODERATE_MEMBERS
        },
        [l.Pl.SEND_MESSAGES.toString()]: {
            title: t.showForumPermissions ? n.intl.string(n.t.S1VOwc) : n.intl.string(n.t.T32rkJ),
            description: t.showForumPermissions ? n.t.prvWKi : n.t.qry4PT,
            flag: l.Pl.SEND_MESSAGES
        },
        [l.Pl.EMBED_LINKS.toString()]: {
            title: n.intl.string(n.t['969dEB']),
            description: n.t.ChoIi4,
            flag: l.Pl.EMBED_LINKS
        },
        [l.Pl.ATTACH_FILES.toString()]: {
            title: n.intl.string(n.t['3AS4UF']),
            description: n.t['/87mYG'],
            flag: l.Pl.ATTACH_FILES
        },
        [l.Pl.ADD_REACTIONS.toString()]: {
            title: n.intl.string(n.t.yEoJAg),
            description: n.t.FEYwX1,
            flag: l.Pl.ADD_REACTIONS
        },
        [l.Pl.USE_EXTERNAL_EMOJIS.toString()]: {
            title: n.intl.string(n.t['+bxf3N']),
            description: n.t.POeVIi,
            flag: l.Pl.USE_EXTERNAL_EMOJIS
        },
        [l.Pl.USE_EXTERNAL_STICKERS.toString()]: {
            title: n.intl.string(n.t.ERNhYW),
            description: n.t.AdXVhI,
            flag: l.Pl.USE_EXTERNAL_STICKERS
        },
        [l.Pl.MENTION_EVERYONE.toString()]: {
            title: n.intl.string(n.t.Y78KGB),
            description: n.t.ryj6Nz,
            flag: l.Pl.MENTION_EVERYONE
        },
        [l.Pl.MANAGE_MESSAGES.toString()]: {
            title: n.intl.string(n.t['6lU9xM']),
            description: n.t['RXMG//'],
            flag: l.Pl.MANAGE_MESSAGES
        },
        [l.Pl.READ_MESSAGE_HISTORY.toString()]: {
            title: n.intl.string(n.t.l9ufaW),
            description: n.t.rmHPFR,
            flag: l.Pl.READ_MESSAGE_HISTORY
        },
        [l.Pl.SEND_TTS_MESSAGES.toString()]: {
            title: n.intl.string(n.t.mMbwh4),
            description: n.t.D6x8Nj,
            flag: l.Pl.SEND_TTS_MESSAGES
        },
        [l.Pl.USE_APPLICATION_COMMANDS.toString()]: {
            title: n.intl.string(n.t.nkoPOj),
            description: n.t.pJrJ39,
            flag: l.Pl.USE_APPLICATION_COMMANDS
        },
        [l.Pl.USE_EXTERNAL_APPS.toString()]: {
            title: n.intl.string(n.t.TtA5rK),
            description: n.t.mzLoDQ,
            flag: l.Pl.USE_EXTERNAL_APPS
        },
        [l.Pl.SEND_VOICE_MESSAGES.toString()]: {
            title: n.intl.string(n.t.WlWSBQ),
            description: n.t.pDuyi4,
            flag: l.Pl.SEND_VOICE_MESSAGES
        },
        [l.Pl.USE_CLYDE_AI.toString()]: {
            title: n.intl.string(n.t['8eeEZm']),
            description: n.t.Tx5TjI,
            flag: l.Pl.USE_CLYDE_AI
        },
        [l.Pl.SEND_POLLS.toString()]: {
            title: n.intl.string(n.t.UMQ7W1),
            description: n.t['Xl6W+P'],
            flag: l.Pl.SEND_POLLS
        },
        [l.Pl.CONNECT.toString()]: {
            title: n.intl.string(n.t.S0W8Z2),
            description: n.t['3GCm/f'],
            flag: l.Pl.CONNECT
        },
        [l.Pl.SPEAK.toString()]: {
            title: n.intl.string(n.t['8w1tIS']),
            description: n.t.y4MncH,
            flag: l.Pl.SPEAK
        },
        [l.Pl.STREAM.toString()]: {
            title: n.intl.string(n.t.FlNoSU),
            description: n.t['6Z0j9v'],
            flag: l.Pl.STREAM
        },
        [l.Pl.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: n.intl.string(n.t.rLSGen),
            description: n.t.BEqU5O,
            flag: l.Pl.USE_EMBEDDED_ACTIVITIES
        },
        [l.Pl.USE_SOUNDBOARD.toString()]: {
            title: n.intl.string(n.t.Bco7ND),
            description: null !== (i = null == t ? void 0 : t.SOUNDBOARD_DESCRIPTION) && void 0 !== i ? i : n.t['+8p+fX'],
            flag: l.Pl.USE_SOUNDBOARD
        },
        [l.Pl.USE_EXTERNAL_SOUNDS.toString()]: {
            title: n.intl.string(n.t.pwaVJy),
            description: n.t.qDpPtb,
            flag: l.Pl.USE_EXTERNAL_SOUNDS
        },
        [l.Pl.USE_VAD.toString()]: {
            title: n.intl.string(n.t['08zAV1']),
            description: n.t['7CHjmZ'],
            flag: l.Pl.USE_VAD
        },
        [l.Pl.PRIORITY_SPEAKER.toString()]: {
            title: n.intl.string(n.t.BVK71t),
            description: null !== (E = null == t ? void 0 : t.PRIORITY_SPEAKER_DESCRIPTION) && void 0 !== E ? E : n.t.OJkrrq,
            flag: l.Pl.PRIORITY_SPEAKER
        },
        [l.Pl.MUTE_MEMBERS.toString()]: {
            title: n.intl.string(n.t['8EI309']),
            description: n.t.PIhGAw,
            flag: l.Pl.MUTE_MEMBERS
        },
        [l.Pl.DEAFEN_MEMBERS.toString()]: {
            title: n.intl.string(n.t['9L47Fh']),
            description: n.t['FQr3+v'],
            flag: l.Pl.DEAFEN_MEMBERS
        },
        [l.Pl.MOVE_MEMBERS.toString()]: {
            title: n.intl.string(n.t.YtjJPT),
            description: n.t.SEe0Gh,
            flag: l.Pl.MOVE_MEMBERS
        },
        [l.Pl.REQUEST_TO_SPEAK.toString()]: {
            title: n.intl.string(n.t['5kicT0']),
            description: n.t['yNE+Q0'],
            flag: l.Pl.REQUEST_TO_SPEAK,
            isExperimental: !0
        },
        [l.Pl.ADMINISTRATOR.toString()]: {
            title: n.intl.string(n.t.PGvZqa),
            description: 'string' == typeof n.t.UJxMrK ? n.t.UJxMrK : n.intl.format(n.t.UJxMrK, {}),
            flag: l.Pl.ADMINISTRATOR
        },
        [l.Pl.MANAGE_EVENTS.toString()]: {
            title: n.intl.string(n.t.HIgA5e),
            description: n.t['SL+qgI'],
            flag: l.Pl.MANAGE_EVENTS
        },
        [l.Pl.CREATE_EVENTS.toString()]: {
            title: n.intl.string(n.t.qyjZub),
            description: n.t.bQEFJS,
            flag: l.Pl.CREATE_EVENTS
        },
        [l.Pl.MANAGE_THREADS.toString()]: {
            title: t.showForumPermissions ? n.intl.string(n.t.QKe7Q0) : n.intl.string(n.t.kEqgr6),
            description: t.showForumPermissions ? n.t.QAxIIi : n.t.AKdc4O,
            flag: l.Pl.MANAGE_THREADS
        },
        [l.Pl.CREATE_PUBLIC_THREADS.toString()]: {
            title: n.intl.string(n.t['25rKnZ']),
            description: n.t.ODCYj4,
            flag: l.Pl.CREATE_PUBLIC_THREADS
        },
        [l.Pl.CREATE_PRIVATE_THREADS.toString()]: {
            title: n.intl.string(n.t.QwbTSU),
            description: n.t['G/cc3t'],
            flag: l.Pl.CREATE_PRIVATE_THREADS
        },
        [l.Pl.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: t.showForumPermissions ? n.intl.string(n.t['5QlVGx']) : n.intl.string(n.t.fTE74u),
            description: t.showForumPermissions ? n.t.C2ZPEx : n.t['6pyXvr'],
            flag: l.Pl.SEND_MESSAGES_IN_THREADS
        },
        [l.Pl.USE_CLYDE_AI.toString()]: {
            title: n.intl.string(n.t['8eeEZm']),
            description: n.t.Tx5TjI,
            flag: l.Pl.USE_CLYDE_AI
        },
        [l.Pl.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: n.intl.string(n.t.VBwkUV),
            description: n.t.C6BzX1,
            flag: l.Pl.SET_VOICE_CHANNEL_STATUS
        }
    };
}
function s(t) {
    let i;
    let E = e(t),
        s = [
            (function (t, i) {
                let E = [l.Pl.VIEW_CHANNEL, l.Pl.MANAGE_CHANNELS, l.Pl.MANAGE_ROLES, l.Pl.CREATE_GUILD_EXPRESSIONS, l.Pl.MANAGE_GUILD_EXPRESSIONS, l.Pl.VIEW_AUDIT_LOG, l.Pl.VIEW_GUILD_ANALYTICS];
                return (
                    i.showCreatorMonetizationAnalyticsPermission && E.push(l.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS),
                    E.push(l.Pl.MANAGE_WEBHOOKS),
                    E.push(l.Pl.MANAGE_GUILD),
                    r({
                        title: n.intl.string(n.t['mYck+P']),
                        permissions: S(E, t)
                    })
                );
            })(E, t),
            (function (t) {
                let i = [l.Pl.CREATE_INSTANT_INVITE, l.Pl.CHANGE_NICKNAME, l.Pl.MANAGE_NICKNAMES, l.Pl.KICK_MEMBERS, l.Pl.BAN_MEMBERS, l.Pl.MODERATE_MEMBERS];
                return r({
                    title: n.intl.string(n.t.Ny49TE),
                    permissions: S(i, t)
                });
            })(E),
            ((i = [l.Pl.SEND_MESSAGES, l.Pl.SEND_MESSAGES_IN_THREADS, l.Pl.CREATE_PUBLIC_THREADS, l.Pl.CREATE_PRIVATE_THREADS, l.Pl.EMBED_LINKS, l.Pl.ATTACH_FILES, l.Pl.ADD_REACTIONS, l.Pl.USE_EXTERNAL_EMOJIS, l.Pl.USE_EXTERNAL_STICKERS, l.Pl.USE_EXTERNAL_SOUNDS, l.Pl.MENTION_EVERYONE, l.Pl.MANAGE_MESSAGES, l.Pl.MANAGE_THREADS, l.Pl.READ_MESSAGE_HISTORY, l.Pl.SEND_TTS_MESSAGES, l.Pl.SEND_VOICE_MESSAGES, l.Pl.USE_CLYDE_AI, l.Pl.SEND_POLLS]),
            t.inSoundmojiExperiment || (i = i.filter((t) => t !== l.Pl.USE_EXTERNAL_SOUNDS)),
            t.showClydeAIPermissions || (i = i.filter((t) => t !== l.Pl.USE_CLYDE_AI)),
            r({
                title: n.intl.string(n.t.cKobOz),
                permissions: S(i, E)
            })),
            (function (t, i) {
                let E = [l.Pl.CONNECT, l.Pl.SPEAK, l.Pl.STREAM, l.Pl.USE_SOUNDBOARD, l.Pl.USE_EXTERNAL_SOUNDS, l.Pl.USE_VAD, l.Pl.PRIORITY_SPEAKER, l.Pl.MUTE_MEMBERS, l.Pl.DEAFEN_MEMBERS, l.Pl.MOVE_MEMBERS, l.Pl.SET_VOICE_CHANNEL_STATUS];
                return r({
                    title: n.intl.string(n.t['46Ra1d']),
                    permissions: S(E, t)
                });
            })(E, 0),
            (function (t) {
                let i = [l.Pl.USE_APPLICATION_COMMANDS, l.Pl.USE_EMBEDDED_ACTIVITIES, l.Pl.USE_EXTERNAL_APPS];
                return r({
                    title: n.intl.string(n.t['rrh/W1']),
                    permissions: S(i, t)
                });
            })(E)
        ];
    return (
        t.showStageChannelPermissions &&
            s.push(
                r(
                    {
                        title: n.intl.string(n.t.yniaur),
                        permissions: S([l.Pl.REQUEST_TO_SPEAK], E)
                    },
                    t.showExperimental
                )
            ),
        s.push(
            r(
                {
                    title: n.intl.string(n.t.b8lplZ),
                    permissions: S([l.Pl.CREATE_EVENTS, l.Pl.MANAGE_EVENTS], E)
                },
                t.showExperimental
            )
        ),
        s.push(
            r({
                title: n.intl.string(n.t['3uI5CQ']),
                permissions: S([l.Pl.ADMINISTRATOR], E)
            })
        ),
        s
    );
}
function A(t, i) {
    let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showManageWebhooks: !0 };
    return {
        title: i,
        permissions: S((null == E ? void 0 : E.showManageWebhooks) ? [l.Pl.VIEW_CHANNEL, l.Pl.MANAGE_CHANNELS, l.Pl.MANAGE_ROLES, l.Pl.MANAGE_WEBHOOKS] : [l.Pl.VIEW_CHANNEL, l.Pl.MANAGE_CHANNELS, l.Pl.MANAGE_ROLES], t)
    };
}
function _(t, i) {
    return {
        title: i,
        permissions: S([l.Pl.CREATE_INSTANT_INVITE], t)
    };
}
function o(t, i, E) {
    let n = [l.Pl.SEND_MESSAGES, l.Pl.SEND_MESSAGES_IN_THREADS, l.Pl.CREATE_PUBLIC_THREADS, l.Pl.CREATE_PRIVATE_THREADS, l.Pl.EMBED_LINKS, l.Pl.ATTACH_FILES, l.Pl.ADD_REACTIONS, l.Pl.USE_EXTERNAL_EMOJIS, l.Pl.USE_EXTERNAL_STICKERS, l.Pl.USE_EXTERNAL_SOUNDS, l.Pl.MENTION_EVERYONE, l.Pl.MANAGE_MESSAGES, l.Pl.MANAGE_THREADS, l.Pl.READ_MESSAGE_HISTORY, l.Pl.SEND_TTS_MESSAGES, l.Pl.SEND_VOICE_MESSAGES, l.Pl.USE_CLYDE_AI, l.Pl.SEND_POLLS];
    return (
        E.inSoundmojiExperiment || (n = n.filter((t) => t !== l.Pl.USE_EXTERNAL_SOUNDS)),
        (E.showPrivateThreads && E.showCreateThreads) || (n = n.filter((t) => t !== l.Pl.CREATE_PRIVATE_THREADS)),
        E.showCreateThreads || (n = n.filter((t) => t !== l.Pl.CREATE_PUBLIC_THREADS)),
        E.showClydeAIPermissions || (n = n.filter((t) => t !== l.Pl.USE_CLYDE_AI)),
        {
            title: i,
            description: E.sectionDescription,
            permissions: S(n, t)
        }
    );
}
function P(t, i) {
    return {
        title: i,
        permissions: S([l.Pl.CONNECT, l.Pl.SPEAK, l.Pl.STREAM, l.Pl.USE_SOUNDBOARD, l.Pl.USE_EXTERNAL_SOUNDS, l.Pl.USE_VAD, l.Pl.PRIORITY_SPEAKER, l.Pl.MUTE_MEMBERS, l.Pl.DEAFEN_MEMBERS, l.Pl.MOVE_MEMBERS, l.Pl.SET_VOICE_CHANNEL_STATUS], t)
    };
}
function N(t, i, E) {
    let n = [l.Pl.SEND_MESSAGES, l.Pl.EMBED_LINKS, l.Pl.ATTACH_FILES, l.Pl.ADD_REACTIONS, l.Pl.USE_EXTERNAL_EMOJIS, l.Pl.USE_EXTERNAL_STICKERS, l.Pl.USE_EXTERNAL_SOUNDS, l.Pl.MENTION_EVERYONE, l.Pl.MANAGE_MESSAGES, l.Pl.READ_MESSAGE_HISTORY, l.Pl.SEND_TTS_MESSAGES, l.Pl.USE_APPLICATION_COMMANDS, l.Pl.SEND_VOICE_MESSAGES, l.Pl.SEND_POLLS];
    return (
        E.inSoundmojiExperiment || (n = n.filter((t) => t !== l.Pl.USE_EXTERNAL_SOUNDS)),
        {
            title: i,
            description: E.sectionDescription,
            permissions: S(n, t)
        }
    );
}
function T(t, i) {
    return {
        title: i,
        permissions: S([l.Pl.USE_APPLICATION_COMMANDS, l.Pl.USE_EMBEDDED_ACTIVITIES, l.Pl.USE_EXTERNAL_APPS], t)
    };
}
function g(t, i, E) {
    return {
        title: i,
        permissions: S(E ? [l.Pl.CONNECT, l.Pl.STREAM, l.Pl.MUTE_MEMBERS, l.Pl.MOVE_MEMBERS] : [l.Pl.CONNECT, l.Pl.MUTE_MEMBERS, l.Pl.MOVE_MEMBERS], t)
    };
}
function I(t, i) {
    return {
        title: i,
        permissions: S([l.Pl.REQUEST_TO_SPEAK, l.Pl.MENTION_EVERYONE], t)
    };
}
function M(t, i) {
    return {
        title: i,
        permissions: S([l.Pl.CREATE_EVENTS, l.Pl.MANAGE_EVENTS], t)
    };
}
function R(t) {
    return null == t ? t : 'string' == typeof t ? t.trim() : 'function' == typeof t ? n.intl.format(t, {}) : t;
}
