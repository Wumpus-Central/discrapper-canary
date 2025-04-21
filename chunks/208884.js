n.d(i, {
    FX: () => g,
    Ny: () => A,
    WV: () => _,
    WW: () => S,
    _u: () => M,
    aW: () => N,
    kv: () => I,
    s4: () => s,
    uu: () => a,
    vq: () => P,
    xU: () => T,
    zO: () => o
}),
    n(539854),
    n(781311);
var E = n(231338),
    l = n(388032);
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
function e(t, i) {
    return t.map((t) => i[t.toString()]);
}
function S(t) {
    var i, n;
    return {
        [E.Pl.VIEW_CHANNEL.toString()]: {
            title: l.intl.string(l.t.uV83ys),
            description: l.t.ybTHLi,
            flag: E.Pl.VIEW_CHANNEL
        },
        [E.Pl.MANAGE_CHANNELS.toString()]: {
            title: l.intl.string(l.t['9qLtWl']),
            description: l.t.qfJnur,
            flag: E.Pl.MANAGE_CHANNELS
        },
        [E.Pl.MANAGE_ROLES.toString()]: {
            title: l.intl.string(l.t['C8d+oK']),
            description: l.t.buo9u7,
            flag: E.Pl.MANAGE_ROLES
        },
        [E.Pl.MANAGE_GUILD_EXPRESSIONS.toString()]: {
            title: l.intl.string(l.t.bbuXIi),
            description: l.t['4vb3//'],
            flag: E.Pl.MANAGE_GUILD_EXPRESSIONS
        },
        [E.Pl.CREATE_GUILD_EXPRESSIONS.toString()]: {
            title: l.intl.string(l.t.HarVuL),
            description: l.t.gkdHvL,
            flag: E.Pl.CREATE_GUILD_EXPRESSIONS
        },
        [E.Pl.VIEW_AUDIT_LOG.toString()]: {
            title: l.intl.string(l.t.fZgLpK),
            description: l.t['0hx75u'],
            flag: E.Pl.VIEW_AUDIT_LOG
        },
        [E.Pl.VIEW_GUILD_ANALYTICS.toString()]: {
            title: l.intl.string(l.t.rQJBEx),
            description: l.t.whVKhY,
            flag: E.Pl.VIEW_GUILD_ANALYTICS
        },
        [E.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
            title: l.intl.string(l.t['0lTLTk']),
            description: l.t.mut6NT,
            flag: E.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS
        },
        [E.Pl.MANAGE_WEBHOOKS.toString()]: {
            title: l.intl.string(l.t['/ADKmJ']),
            description: l.t.LczYqK,
            flag: E.Pl.MANAGE_WEBHOOKS
        },
        [E.Pl.MANAGE_GUILD.toString()]: {
            title: l.intl.string(l.t.QZRcfH),
            description: l.t['KoQe/P'],
            flag: E.Pl.MANAGE_GUILD
        },
        [E.Pl.CREATE_INSTANT_INVITE.toString()]: {
            title: l.intl.string(l.t.zJrgTE),
            description: l.t.PCFOZW,
            flag: E.Pl.CREATE_INSTANT_INVITE
        },
        [E.Pl.CHANGE_NICKNAME.toString()]: {
            title: l.intl.string(l.t.dilOFx),
            description: l.t['b8B++v'],
            flag: E.Pl.CHANGE_NICKNAME
        },
        [E.Pl.MANAGE_NICKNAMES.toString()]: {
            title: l.intl.string(l.t['t+Ct5+']),
            description: l.t.hTnlMT,
            flag: E.Pl.MANAGE_NICKNAMES
        },
        [E.Pl.KICK_MEMBERS.toString()]: {
            title: t.showMembershipManualApprovalPermissions ? l.intl.string(l.t['9TxXwc']) : l.intl.string(l.t.pBNv6u),
            description: t.showMembershipManualApprovalPermissions ? l.t.hGBAn5 : l.t.rwdPaG,
            flag: E.Pl.KICK_MEMBERS
        },
        [E.Pl.BAN_MEMBERS.toString()]: {
            title: l.intl.string(l.t.oTBA7O),
            description: l.t.OqNY09,
            flag: E.Pl.BAN_MEMBERS
        },
        [E.Pl.MODERATE_MEMBERS.toString()]: {
            title: l.intl.string(l.t['+RL6p6']),
            description: l.t.T6bZsb,
            flag: E.Pl.MODERATE_MEMBERS
        },
        [E.Pl.SEND_MESSAGES.toString()]: {
            title: t.showForumPermissions ? l.intl.string(l.t.S1VOwc) : l.intl.string(l.t.T32rkJ),
            description: t.showForumPermissions ? l.t.prvWKi : l.t.qry4PT,
            flag: E.Pl.SEND_MESSAGES
        },
        [E.Pl.EMBED_LINKS.toString()]: {
            title: l.intl.string(l.t['969dEB']),
            description: l.t.ChoIi4,
            flag: E.Pl.EMBED_LINKS
        },
        [E.Pl.ATTACH_FILES.toString()]: {
            title: l.intl.string(l.t['3AS4UF']),
            description: l.t['/87mYG'],
            flag: E.Pl.ATTACH_FILES
        },
        [E.Pl.ADD_REACTIONS.toString()]: {
            title: l.intl.string(l.t.yEoJAg),
            description: l.t.FEYwX1,
            flag: E.Pl.ADD_REACTIONS
        },
        [E.Pl.USE_EXTERNAL_EMOJIS.toString()]: {
            title: l.intl.string(l.t['+bxf3N']),
            description: l.t.POeVIi,
            flag: E.Pl.USE_EXTERNAL_EMOJIS
        },
        [E.Pl.USE_EXTERNAL_STICKERS.toString()]: {
            title: l.intl.string(l.t.ERNhYW),
            description: l.t.AdXVhI,
            flag: E.Pl.USE_EXTERNAL_STICKERS
        },
        [E.Pl.MENTION_EVERYONE.toString()]: {
            title: l.intl.string(l.t.Y78KGB),
            description: l.t.ryj6Nz,
            flag: E.Pl.MENTION_EVERYONE
        },
        [E.Pl.MANAGE_MESSAGES.toString()]: {
            title: l.intl.string(l.t['6lU9xM']),
            description: l.t['RXMG//'],
            flag: E.Pl.MANAGE_MESSAGES
        },
        [E.Pl.READ_MESSAGE_HISTORY.toString()]: {
            title: l.intl.string(l.t.l9ufaW),
            description: l.t.rmHPFR,
            flag: E.Pl.READ_MESSAGE_HISTORY
        },
        [E.Pl.SEND_TTS_MESSAGES.toString()]: {
            title: l.intl.string(l.t.mMbwh4),
            description: l.t.D6x8Nj,
            flag: E.Pl.SEND_TTS_MESSAGES
        },
        [E.Pl.USE_APPLICATION_COMMANDS.toString()]: {
            title: l.intl.string(l.t.nkoPOj),
            description: l.t.pJrJ39,
            flag: E.Pl.USE_APPLICATION_COMMANDS
        },
        [E.Pl.USE_EXTERNAL_APPS.toString()]: {
            title: l.intl.string(l.t.TtA5rK),
            description: l.t.mzLoDQ,
            flag: E.Pl.USE_EXTERNAL_APPS
        },
        [E.Pl.SEND_VOICE_MESSAGES.toString()]: {
            title: l.intl.string(l.t.WlWSBQ),
            description: l.t.pDuyi4,
            flag: E.Pl.SEND_VOICE_MESSAGES
        },
        [E.Pl.USE_CLYDE_AI.toString()]: {
            title: l.intl.string(l.t['8eeEZm']),
            description: l.t.Tx5TjI,
            flag: E.Pl.USE_CLYDE_AI
        },
        [E.Pl.SEND_POLLS.toString()]: {
            title: l.intl.string(l.t.UMQ7W1),
            description: l.t['Xl6W+P'],
            flag: E.Pl.SEND_POLLS
        },
        [E.Pl.CONNECT.toString()]: {
            title: l.intl.string(l.t.S0W8Z2),
            description: l.t['3GCm/f'],
            flag: E.Pl.CONNECT
        },
        [E.Pl.SPEAK.toString()]: {
            title: l.intl.string(l.t['8w1tIS']),
            description: l.t.y4MncH,
            flag: E.Pl.SPEAK
        },
        [E.Pl.STREAM.toString()]: {
            title: l.intl.string(l.t.FlNoSU),
            description: l.t['6Z0j9v'],
            flag: E.Pl.STREAM
        },
        [E.Pl.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: l.intl.string(l.t.rLSGen),
            description: l.t.BEqU5O,
            flag: E.Pl.USE_EMBEDDED_ACTIVITIES
        },
        [E.Pl.USE_SOUNDBOARD.toString()]: {
            title: l.intl.string(l.t.Bco7ND),
            description: null != (i = null == t ? void 0 : t.SOUNDBOARD_DESCRIPTION) ? i : l.t['+8p+fX'],
            flag: E.Pl.USE_SOUNDBOARD
        },
        [E.Pl.USE_EXTERNAL_SOUNDS.toString()]: {
            title: l.intl.string(l.t.pwaVJy),
            description: l.t.qDpPtb,
            flag: E.Pl.USE_EXTERNAL_SOUNDS
        },
        [E.Pl.USE_VAD.toString()]: {
            title: l.intl.string(l.t['08zAV1']),
            description: l.t['7CHjmZ'],
            flag: E.Pl.USE_VAD
        },
        [E.Pl.PRIORITY_SPEAKER.toString()]: {
            title: l.intl.string(l.t.BVK71t),
            description: null != (n = null == t ? void 0 : t.PRIORITY_SPEAKER_DESCRIPTION) ? n : l.t.OJkrrq,
            flag: E.Pl.PRIORITY_SPEAKER
        },
        [E.Pl.MUTE_MEMBERS.toString()]: {
            title: l.intl.string(l.t['8EI309']),
            description: l.t.PIhGAw,
            flag: E.Pl.MUTE_MEMBERS
        },
        [E.Pl.DEAFEN_MEMBERS.toString()]: {
            title: l.intl.string(l.t['9L47Fh']),
            description: l.t['FQr3+v'],
            flag: E.Pl.DEAFEN_MEMBERS
        },
        [E.Pl.MOVE_MEMBERS.toString()]: {
            title: l.intl.string(l.t.YtjJPT),
            description: l.t.SEe0Gh,
            flag: E.Pl.MOVE_MEMBERS
        },
        [E.Pl.REQUEST_TO_SPEAK.toString()]: {
            title: l.intl.string(l.t['5kicT0']),
            description: l.t['yNE+Q0'],
            flag: E.Pl.REQUEST_TO_SPEAK,
            isExperimental: !0
        },
        [E.Pl.ADMINISTRATOR.toString()]: {
            title: l.intl.string(l.t.PGvZqa),
            description: 'string' == typeof l.t.UJxMrK ? l.t.UJxMrK : l.intl.format(l.t.UJxMrK, {}),
            flag: E.Pl.ADMINISTRATOR
        },
        [E.Pl.MANAGE_EVENTS.toString()]: {
            title: l.intl.string(l.t.HIgA5e),
            description: l.t['SL+qgI'],
            flag: E.Pl.MANAGE_EVENTS
        },
        [E.Pl.CREATE_EVENTS.toString()]: {
            title: l.intl.string(l.t.qyjZub),
            description: l.t.bQEFJS,
            flag: E.Pl.CREATE_EVENTS
        },
        [E.Pl.MANAGE_THREADS.toString()]: {
            title: t.showForumPermissions ? l.intl.string(l.t.QKe7Q0) : l.intl.string(l.t.kEqgr6),
            description: t.showForumPermissions ? l.t.QAxIIi : l.t.AKdc4O,
            flag: E.Pl.MANAGE_THREADS
        },
        [E.Pl.CREATE_PUBLIC_THREADS.toString()]: {
            title: l.intl.string(l.t['25rKnZ']),
            description: l.t.ODCYj4,
            flag: E.Pl.CREATE_PUBLIC_THREADS
        },
        [E.Pl.CREATE_PRIVATE_THREADS.toString()]: {
            title: l.intl.string(l.t.QwbTSU),
            description: l.t['G/cc3t'],
            flag: E.Pl.CREATE_PRIVATE_THREADS
        },
        [E.Pl.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: t.showForumPermissions ? l.intl.string(l.t['5QlVGx']) : l.intl.string(l.t.fTE74u),
            description: t.showForumPermissions ? l.t.C2ZPEx : l.t['6pyXvr'],
            flag: E.Pl.SEND_MESSAGES_IN_THREADS
        },
        [E.Pl.USE_CLYDE_AI.toString()]: {
            title: l.intl.string(l.t['8eeEZm']),
            description: l.t.Tx5TjI,
            flag: E.Pl.USE_CLYDE_AI
        },
        [E.Pl.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: l.intl.string(l.t.VBwkUV),
            description: l.t.C6BzX1,
            flag: E.Pl.SET_VOICE_CHANNEL_STATUS
        }
    };
}
function s(t) {
    let i,
        n = S(t),
        s = [
            (function (t, i) {
                let n = [E.Pl.VIEW_CHANNEL, E.Pl.MANAGE_CHANNELS, E.Pl.MANAGE_ROLES, E.Pl.CREATE_GUILD_EXPRESSIONS, E.Pl.MANAGE_GUILD_EXPRESSIONS, E.Pl.VIEW_AUDIT_LOG, E.Pl.VIEW_GUILD_ANALYTICS];
                return (
                    i.showCreatorMonetizationAnalyticsPermission && n.push(E.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS),
                    n.push(E.Pl.MANAGE_WEBHOOKS),
                    n.push(E.Pl.MANAGE_GUILD),
                    r({
                        title: l.intl.string(l.t['mYck+P']),
                        permissions: e(n, t)
                    })
                );
            })(n, t),
            (function (t) {
                let i = [E.Pl.CREATE_INSTANT_INVITE, E.Pl.CHANGE_NICKNAME, E.Pl.MANAGE_NICKNAMES, E.Pl.KICK_MEMBERS, E.Pl.BAN_MEMBERS, E.Pl.MODERATE_MEMBERS];
                return r({
                    title: l.intl.string(l.t.Ny49TE),
                    permissions: e(i, t)
                });
            })(n),
            ((i = [E.Pl.SEND_MESSAGES, E.Pl.SEND_MESSAGES_IN_THREADS, E.Pl.CREATE_PUBLIC_THREADS, E.Pl.CREATE_PRIVATE_THREADS, E.Pl.EMBED_LINKS, E.Pl.ATTACH_FILES, E.Pl.ADD_REACTIONS, E.Pl.USE_EXTERNAL_EMOJIS, E.Pl.USE_EXTERNAL_STICKERS, E.Pl.USE_EXTERNAL_SOUNDS, E.Pl.MENTION_EVERYONE, E.Pl.MANAGE_MESSAGES, E.Pl.MANAGE_THREADS, E.Pl.READ_MESSAGE_HISTORY, E.Pl.SEND_TTS_MESSAGES, E.Pl.SEND_VOICE_MESSAGES, E.Pl.USE_CLYDE_AI, E.Pl.SEND_POLLS]),
            t.inSoundmojiExperiment || (i = i.filter((t) => t !== E.Pl.USE_EXTERNAL_SOUNDS)),
            t.showClydeAIPermissions || (i = i.filter((t) => t !== E.Pl.USE_CLYDE_AI)),
            r({
                title: l.intl.string(l.t.cKobOz),
                permissions: e(i, n)
            })),
            (function (t, i) {
                let n = [E.Pl.CONNECT, E.Pl.SPEAK, E.Pl.STREAM, E.Pl.USE_SOUNDBOARD, E.Pl.USE_EXTERNAL_SOUNDS, E.Pl.USE_VAD, E.Pl.PRIORITY_SPEAKER, E.Pl.MUTE_MEMBERS, E.Pl.DEAFEN_MEMBERS, E.Pl.MOVE_MEMBERS, E.Pl.SET_VOICE_CHANNEL_STATUS];
                return r({
                    title: l.intl.string(l.t['46Ra1d']),
                    permissions: e(n, t)
                });
            })(n, 0),
            (function (t) {
                let i = [E.Pl.USE_APPLICATION_COMMANDS, E.Pl.USE_EMBEDDED_ACTIVITIES, E.Pl.USE_EXTERNAL_APPS];
                return r({
                    title: l.intl.string(l.t['rrh/W1']),
                    permissions: e(i, t)
                });
            })(n)
        ];
    return (
        t.showStageChannelPermissions &&
            s.push(
                r(
                    {
                        title: l.intl.string(l.t.yniaur),
                        permissions: e([E.Pl.REQUEST_TO_SPEAK], n)
                    },
                    t.showExperimental
                )
            ),
        s.push(
            r(
                {
                    title: l.intl.string(l.t.b8lplZ),
                    permissions: e([E.Pl.CREATE_EVENTS, E.Pl.MANAGE_EVENTS], n)
                },
                t.showExperimental
            )
        ),
        s.push(
            r({
                title: l.intl.string(l.t['3uI5CQ']),
                permissions: e([E.Pl.ADMINISTRATOR], n)
            })
        ),
        s
    );
}
function o(t, i) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showManageWebhooks: !0 };
    return {
        title: i,
        permissions: e((null == n ? void 0 : n.showManageWebhooks) ? [E.Pl.VIEW_CHANNEL, E.Pl.MANAGE_CHANNELS, E.Pl.MANAGE_ROLES, E.Pl.MANAGE_WEBHOOKS] : [E.Pl.VIEW_CHANNEL, E.Pl.MANAGE_CHANNELS, E.Pl.MANAGE_ROLES], t)
    };
}
function A(t, i) {
    return {
        title: i,
        permissions: e([E.Pl.CREATE_INSTANT_INVITE], t)
    };
}
function P(t, i, n) {
    let l = [E.Pl.SEND_MESSAGES, E.Pl.SEND_MESSAGES_IN_THREADS, E.Pl.CREATE_PUBLIC_THREADS, E.Pl.CREATE_PRIVATE_THREADS, E.Pl.EMBED_LINKS, E.Pl.ATTACH_FILES, E.Pl.ADD_REACTIONS, E.Pl.USE_EXTERNAL_EMOJIS, E.Pl.USE_EXTERNAL_STICKERS, E.Pl.USE_EXTERNAL_SOUNDS, E.Pl.MENTION_EVERYONE, E.Pl.MANAGE_MESSAGES, E.Pl.MANAGE_THREADS, E.Pl.READ_MESSAGE_HISTORY, E.Pl.SEND_TTS_MESSAGES, E.Pl.SEND_VOICE_MESSAGES, E.Pl.USE_CLYDE_AI, E.Pl.SEND_POLLS];
    return (
        n.inSoundmojiExperiment || (l = l.filter((t) => t !== E.Pl.USE_EXTERNAL_SOUNDS)),
        (n.showPrivateThreads && n.showCreateThreads) || (l = l.filter((t) => t !== E.Pl.CREATE_PRIVATE_THREADS)),
        n.showCreateThreads || (l = l.filter((t) => t !== E.Pl.CREATE_PUBLIC_THREADS)),
        n.showClydeAIPermissions || (l = l.filter((t) => t !== E.Pl.USE_CLYDE_AI)),
        {
            title: i,
            description: n.sectionDescription,
            permissions: e(l, t)
        }
    );
}
function _(t, i) {
    return {
        title: i,
        permissions: e([E.Pl.CONNECT, E.Pl.SPEAK, E.Pl.STREAM, E.Pl.USE_SOUNDBOARD, E.Pl.USE_EXTERNAL_SOUNDS, E.Pl.USE_VAD, E.Pl.PRIORITY_SPEAKER, E.Pl.MUTE_MEMBERS, E.Pl.DEAFEN_MEMBERS, E.Pl.MOVE_MEMBERS, E.Pl.SET_VOICE_CHANNEL_STATUS], t)
    };
}
function N(t, i, n) {
    let l = [E.Pl.SEND_MESSAGES, E.Pl.EMBED_LINKS, E.Pl.ATTACH_FILES, E.Pl.ADD_REACTIONS, E.Pl.USE_EXTERNAL_EMOJIS, E.Pl.USE_EXTERNAL_STICKERS, E.Pl.USE_EXTERNAL_SOUNDS, E.Pl.MENTION_EVERYONE, E.Pl.MANAGE_MESSAGES, E.Pl.READ_MESSAGE_HISTORY, E.Pl.SEND_TTS_MESSAGES, E.Pl.USE_APPLICATION_COMMANDS, E.Pl.SEND_VOICE_MESSAGES, E.Pl.SEND_POLLS];
    return (
        n.inSoundmojiExperiment || (l = l.filter((t) => t !== E.Pl.USE_EXTERNAL_SOUNDS)),
        {
            title: i,
            description: n.sectionDescription,
            permissions: e(l, t)
        }
    );
}
function T(t, i) {
    return {
        title: i,
        permissions: e([E.Pl.USE_APPLICATION_COMMANDS, E.Pl.USE_EMBEDDED_ACTIVITIES, E.Pl.USE_EXTERNAL_APPS], t)
    };
}
function g(t, i, n) {
    return {
        title: i,
        permissions: e(n ? [E.Pl.CONNECT, E.Pl.STREAM, E.Pl.MUTE_MEMBERS, E.Pl.MOVE_MEMBERS] : [E.Pl.CONNECT, E.Pl.MUTE_MEMBERS, E.Pl.MOVE_MEMBERS], t)
    };
}
function I(t, i) {
    return {
        title: i,
        permissions: e([E.Pl.REQUEST_TO_SPEAK, E.Pl.MENTION_EVERYONE], t)
    };
}
function a(t, i) {
    return {
        title: i,
        permissions: e([E.Pl.CREATE_EVENTS, E.Pl.MANAGE_EVENTS], t)
    };
}
function M(t) {
    return null == t ? t : 'string' == typeof t ? t.trim() : 'function' == typeof t ? l.intl.format(t, {}) : t;
}
