(E.d(i, {
    FX: () => M,
    Ny: () => _,
    WV: () => N,
    WW: () => A,
    _u: () => O,
    aW: () => T,
    kv: () => I,
    s4: () => s,
    uu: () => R,
    vq: () => o,
    xU: () => g,
    zO: () => P
}),
    E(539854),
    E(781311));
var n = E(823379),
    l = E(231338),
    S = E(388032);
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
function A(t) {
    var i, E;
    return {
        [l.Pl.VIEW_CHANNEL.toString()]: {
            title: S.intl.string(S.t.uV83ys),
            description: S.t.ybTHLi,
            flag: l.Pl.VIEW_CHANNEL
        },
        [l.Pl.MANAGE_CHANNELS.toString()]: {
            title: S.intl.string(S.t['9qLtWl']),
            description: S.t.qfJnur,
            flag: l.Pl.MANAGE_CHANNELS
        },
        [l.Pl.MANAGE_ROLES.toString()]: {
            title: S.intl.string(S.t['C8d+oK']),
            description: S.t.buo9u7,
            flag: l.Pl.MANAGE_ROLES
        },
        [l.Pl.MANAGE_GUILD_EXPRESSIONS.toString()]: {
            title: S.intl.string(S.t.bbuXIi),
            description: S.t['4vb3//'],
            flag: l.Pl.MANAGE_GUILD_EXPRESSIONS
        },
        [l.Pl.CREATE_GUILD_EXPRESSIONS.toString()]: {
            title: S.intl.string(S.t.HarVuL),
            description: S.t.gkdHvL,
            flag: l.Pl.CREATE_GUILD_EXPRESSIONS
        },
        [l.Pl.VIEW_AUDIT_LOG.toString()]: {
            title: S.intl.string(S.t.fZgLpK),
            description: S.t['0hx75u'],
            flag: l.Pl.VIEW_AUDIT_LOG
        },
        [l.Pl.VIEW_GUILD_ANALYTICS.toString()]: {
            title: S.intl.string(S.t.rQJBEx),
            description: S.t.whVKhY,
            flag: l.Pl.VIEW_GUILD_ANALYTICS
        },
        [l.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
            title: S.intl.string(S.t['0lTLTk']),
            description: S.t.mut6NT,
            flag: l.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS
        },
        [l.Pl.MANAGE_WEBHOOKS.toString()]: {
            title: S.intl.string(S.t['/ADKmJ']),
            description: S.t.LczYqK,
            flag: l.Pl.MANAGE_WEBHOOKS
        },
        [l.Pl.MANAGE_GUILD.toString()]: {
            title: S.intl.string(S.t.QZRcfH),
            description: S.t['KoQe/P'],
            flag: l.Pl.MANAGE_GUILD
        },
        [l.Pl.CREATE_INSTANT_INVITE.toString()]: {
            title: S.intl.string(S.t.zJrgTE),
            description: S.t.PCFOZW,
            flag: l.Pl.CREATE_INSTANT_INVITE
        },
        [l.Pl.CHANGE_NICKNAME.toString()]: {
            title: S.intl.string(S.t.dilOFx),
            description: S.t['b8B++v'],
            flag: l.Pl.CHANGE_NICKNAME
        },
        [l.Pl.MANAGE_NICKNAMES.toString()]: {
            title: S.intl.string(S.t['t+Ct5+']),
            description: S.t.hTnlMT,
            flag: l.Pl.MANAGE_NICKNAMES
        },
        [l.Pl.KICK_MEMBERS.toString()]: {
            title: t.showMembershipManualApprovalPermissions ? S.intl.string(S.t['9TxXwc']) : S.intl.string(S.t.pBNv6u),
            description: t.showMembershipManualApprovalPermissions ? S.t.hGBAn5 : S.t.rwdPaG,
            flag: l.Pl.KICK_MEMBERS
        },
        [l.Pl.BAN_MEMBERS.toString()]: {
            title: S.intl.string(S.t.oTBA7O),
            description: S.t.OqNY09,
            flag: l.Pl.BAN_MEMBERS
        },
        [l.Pl.MODERATE_MEMBERS.toString()]: {
            title: S.intl.string(S.t['+RL6p6']),
            description: S.t.T6bZsb,
            flag: l.Pl.MODERATE_MEMBERS
        },
        [l.Pl.SEND_MESSAGES.toString()]: {
            title: S.intl.string(S.t.S1VOwc),
            description: S.t.prvWKi,
            flag: l.Pl.SEND_MESSAGES
        },
        [l.Pl.EMBED_LINKS.toString()]: {
            title: S.intl.string(S.t['969dEB']),
            description: S.t.ChoIi4,
            flag: l.Pl.EMBED_LINKS
        },
        [l.Pl.ATTACH_FILES.toString()]: {
            title: S.intl.string(S.t['3AS4UF']),
            description: S.t['/87mYG'],
            flag: l.Pl.ATTACH_FILES
        },
        [l.Pl.ADD_REACTIONS.toString()]: {
            title: S.intl.string(S.t.yEoJAg),
            description: S.t.FEYwX1,
            flag: l.Pl.ADD_REACTIONS
        },
        [l.Pl.USE_EXTERNAL_EMOJIS.toString()]: {
            title: S.intl.string(S.t['+bxf3N']),
            description: S.t.POeVIi,
            flag: l.Pl.USE_EXTERNAL_EMOJIS
        },
        [l.Pl.USE_EXTERNAL_STICKERS.toString()]: {
            title: S.intl.string(S.t.ERNhYW),
            description: S.t.AdXVhI,
            flag: l.Pl.USE_EXTERNAL_STICKERS
        },
        [l.Pl.MENTION_EVERYONE.toString()]: {
            title: S.intl.string(S.t.Y78KGB),
            description: S.t.ryj6Nz,
            flag: l.Pl.MENTION_EVERYONE
        },
        [l.Pl.MANAGE_MESSAGES.toString()]: {
            title: S.intl.string(S.t['6lU9xM']),
            description: S.t['RXMG//'],
            flag: l.Pl.MANAGE_MESSAGES
        },
        [l.Pl.PIN_MESSAGES.toString()]: {
            title: S.intl.string(S.t.Y5BI39),
            description: S.t['LN/K39'],
            flag: l.Pl.PIN_MESSAGES
        },
        [l.Pl.READ_MESSAGE_HISTORY.toString()]: {
            title: S.intl.string(S.t.l9ufaW),
            description: S.t.rmHPFR,
            flag: l.Pl.READ_MESSAGE_HISTORY
        },
        [l.Pl.SEND_TTS_MESSAGES.toString()]: {
            title: S.intl.string(S.t.mMbwh4),
            description: S.t.D6x8Nj,
            flag: l.Pl.SEND_TTS_MESSAGES
        },
        [l.Pl.USE_APPLICATION_COMMANDS.toString()]: {
            title: S.intl.string(S.t.nkoPOj),
            description: S.t.pJrJ39,
            flag: l.Pl.USE_APPLICATION_COMMANDS
        },
        [l.Pl.USE_EXTERNAL_APPS.toString()]: {
            title: S.intl.string(S.t.TtA5rK),
            description: S.t.mzLoDQ,
            flag: l.Pl.USE_EXTERNAL_APPS
        },
        [l.Pl.SEND_VOICE_MESSAGES.toString()]: {
            title: S.intl.string(S.t.WlWSBQ),
            description: S.t.pDuyi4,
            flag: l.Pl.SEND_VOICE_MESSAGES
        },
        [l.Pl.SEND_POLLS.toString()]: {
            title: S.intl.string(S.t.UMQ7W1),
            description: S.t['Xl6W+P'],
            flag: l.Pl.SEND_POLLS
        },
        [l.Pl.CONNECT.toString()]: {
            title: S.intl.string(S.t.S0W8Z2),
            description: S.t['3GCm/f'],
            flag: l.Pl.CONNECT
        },
        [l.Pl.SPEAK.toString()]: {
            title: S.intl.string(S.t['8w1tIS']),
            description: S.t.y4MncH,
            flag: l.Pl.SPEAK
        },
        [l.Pl.STREAM.toString()]: {
            title: S.intl.string(S.t.FlNoSU),
            description: S.t['6Z0j9v'],
            flag: l.Pl.STREAM
        },
        [l.Pl.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: S.intl.string(S.t.rLSGen),
            description: S.t.BEqU5O,
            flag: l.Pl.USE_EMBEDDED_ACTIVITIES
        },
        [l.Pl.USE_SOUNDBOARD.toString()]: {
            title: S.intl.string(S.t.Bco7ND),
            description: null != (i = null == t ? void 0 : t.SOUNDBOARD_DESCRIPTION) ? i : S.t['+8p+fX'],
            flag: l.Pl.USE_SOUNDBOARD
        },
        [l.Pl.USE_EXTERNAL_SOUNDS.toString()]: {
            title: S.intl.string(S.t.pwaVJy),
            description: S.t.qDpPtb,
            flag: l.Pl.USE_EXTERNAL_SOUNDS
        },
        [l.Pl.USE_VAD.toString()]: {
            title: S.intl.string(S.t['08zAV1']),
            description: S.t['7CHjmZ'],
            flag: l.Pl.USE_VAD
        },
        [l.Pl.PRIORITY_SPEAKER.toString()]: {
            title: S.intl.string(S.t.BVK71t),
            description: null != (E = null == t ? void 0 : t.PRIORITY_SPEAKER_DESCRIPTION) ? E : S.t.OJkrrq,
            flag: l.Pl.PRIORITY_SPEAKER
        },
        [l.Pl.MUTE_MEMBERS.toString()]: {
            title: S.intl.string(S.t['8EI309']),
            description: S.t.PIhGAw,
            flag: l.Pl.MUTE_MEMBERS
        },
        [l.Pl.DEAFEN_MEMBERS.toString()]: {
            title: S.intl.string(S.t['9L47Fh']),
            description: S.t['FQr3+v'],
            flag: l.Pl.DEAFEN_MEMBERS
        },
        [l.Pl.MOVE_MEMBERS.toString()]: {
            title: S.intl.string(S.t.YtjJPT),
            description: S.t.SEe0Gh,
            flag: l.Pl.MOVE_MEMBERS
        },
        [l.Pl.REQUEST_TO_SPEAK.toString()]: {
            title: S.intl.string(S.t['5kicT0']),
            description: S.t['yNE+Q0'],
            flag: l.Pl.REQUEST_TO_SPEAK,
            isExperimental: !0
        },
        [l.Pl.ADMINISTRATOR.toString()]: {
            title: S.intl.string(S.t.PGvZqa),
            description: 'string' == typeof S.t.UJxMrK ? S.t.UJxMrK : S.intl.format(S.t.UJxMrK, {}),
            flag: l.Pl.ADMINISTRATOR
        },
        [l.Pl.MANAGE_EVENTS.toString()]: {
            title: S.intl.string(S.t.HIgA5e),
            description: S.t['SL+qgI'],
            flag: l.Pl.MANAGE_EVENTS
        },
        [l.Pl.CREATE_EVENTS.toString()]: {
            title: S.intl.string(S.t.qyjZub),
            description: S.t.bQEFJS,
            flag: l.Pl.CREATE_EVENTS
        },
        [l.Pl.MANAGE_THREADS.toString()]: {
            title: S.intl.string(S.t.QKe7Q0),
            description: S.t.QAxIIi,
            flag: l.Pl.MANAGE_THREADS
        },
        [l.Pl.CREATE_PUBLIC_THREADS.toString()]: {
            title: S.intl.string(S.t['25rKnZ']),
            description: S.t.ODCYj4,
            flag: l.Pl.CREATE_PUBLIC_THREADS
        },
        [l.Pl.CREATE_PRIVATE_THREADS.toString()]: {
            title: S.intl.string(S.t.QwbTSU),
            description: S.t['G/cc3t'],
            flag: l.Pl.CREATE_PRIVATE_THREADS
        },
        [l.Pl.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: S.intl.string(S.t['5QlVGx']),
            description: S.t.C2ZPEx,
            flag: l.Pl.SEND_MESSAGES_IN_THREADS
        },
        [l.Pl.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: S.intl.string(S.t.VBwkUV),
            description: S.t.C6BzX1,
            flag: l.Pl.SET_VOICE_CHANNEL_STATUS
        }
    };
}
function s(t) {
    let i,
        E = A(t),
        n = [
            (function (t, i) {
                let E = [l.Pl.VIEW_CHANNEL, l.Pl.MANAGE_CHANNELS, l.Pl.MANAGE_ROLES, l.Pl.CREATE_GUILD_EXPRESSIONS, l.Pl.MANAGE_GUILD_EXPRESSIONS, l.Pl.VIEW_AUDIT_LOG, l.Pl.VIEW_GUILD_ANALYTICS];
                return (
                    i.showCreatorMonetizationAnalyticsPermission && E.push(l.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS),
                    E.push(l.Pl.MANAGE_WEBHOOKS),
                    E.push(l.Pl.MANAGE_GUILD),
                    r({
                        title: S.intl.string(S.t['mYck+P']),
                        permissions: e(E, t)
                    })
                );
            })(E, t),
            (function (t) {
                let i = [l.Pl.CREATE_INSTANT_INVITE, l.Pl.CHANGE_NICKNAME, l.Pl.MANAGE_NICKNAMES, l.Pl.KICK_MEMBERS, l.Pl.BAN_MEMBERS, l.Pl.MODERATE_MEMBERS];
                return r({
                    title: S.intl.string(S.t.Ny49TE),
                    permissions: e(i, t)
                });
            })(E),
            ((i = [l.Pl.SEND_MESSAGES, l.Pl.SEND_MESSAGES_IN_THREADS, l.Pl.CREATE_PUBLIC_THREADS, l.Pl.CREATE_PRIVATE_THREADS, l.Pl.EMBED_LINKS, l.Pl.ATTACH_FILES, l.Pl.ADD_REACTIONS, l.Pl.USE_EXTERNAL_EMOJIS, l.Pl.USE_EXTERNAL_STICKERS, l.Pl.USE_EXTERNAL_SOUNDS, l.Pl.MENTION_EVERYONE, l.Pl.MANAGE_MESSAGES, l.Pl.PIN_MESSAGES, l.Pl.MANAGE_THREADS, l.Pl.READ_MESSAGE_HISTORY, l.Pl.SEND_TTS_MESSAGES, l.Pl.SEND_VOICE_MESSAGES, l.Pl.SEND_POLLS]),
            t.inSoundmojiExperiment || (i = i.filter((t) => t !== l.Pl.USE_EXTERNAL_SOUNDS)),
            t.inPinPermissionExperiment || (i = i.filter((t) => t !== l.Pl.PIN_MESSAGES)),
            r({
                title: S.intl.string(S.t.cKobOz),
                permissions: e(i, E)
            })),
            (function (t, i) {
                let E = [l.Pl.CONNECT, l.Pl.SPEAK, l.Pl.STREAM, l.Pl.USE_SOUNDBOARD, l.Pl.USE_EXTERNAL_SOUNDS, l.Pl.USE_VAD, l.Pl.PRIORITY_SPEAKER, l.Pl.MUTE_MEMBERS, l.Pl.DEAFEN_MEMBERS, l.Pl.MOVE_MEMBERS, l.Pl.SET_VOICE_CHANNEL_STATUS];
                return r({
                    title: S.intl.string(S.t['46Ra1d']),
                    permissions: e(E, t)
                });
            })(E, 0),
            (function (t) {
                let i = [l.Pl.USE_APPLICATION_COMMANDS, l.Pl.USE_EMBEDDED_ACTIVITIES, l.Pl.USE_EXTERNAL_APPS];
                return r({
                    title: S.intl.string(S.t['rrh/W1']),
                    permissions: e(i, t)
                });
            })(E)
        ];
    return (
        t.showStageChannelPermissions &&
            n.push(
                r(
                    {
                        title: S.intl.string(S.t.yniaur),
                        permissions: e([l.Pl.REQUEST_TO_SPEAK], E)
                    },
                    t.showExperimental
                )
            ),
        n.push(
            r(
                {
                    title: S.intl.string(S.t.b8lplZ),
                    permissions: e([l.Pl.CREATE_EVENTS, l.Pl.MANAGE_EVENTS], E)
                },
                t.showExperimental
            )
        ),
        n.push(
            r({
                title: S.intl.string(S.t['3uI5CQ']),
                permissions: e([l.Pl.ADMINISTRATOR], E)
            })
        ),
        n
    );
}
function P(t, i) {
    let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showManageWebhooks: !0 };
    return {
        title: i,
        permissions: e((null == E ? void 0 : E.showManageWebhooks) ? [l.Pl.VIEW_CHANNEL, l.Pl.MANAGE_CHANNELS, l.Pl.MANAGE_ROLES, l.Pl.MANAGE_WEBHOOKS] : [l.Pl.VIEW_CHANNEL, l.Pl.MANAGE_CHANNELS, l.Pl.MANAGE_ROLES], t)
    };
}
function _(t, i) {
    return {
        title: i,
        permissions: e([l.Pl.CREATE_INSTANT_INVITE], t)
    };
}
function o(t, i, E) {
    let n = [l.Pl.SEND_MESSAGES, l.Pl.SEND_MESSAGES_IN_THREADS, l.Pl.CREATE_PUBLIC_THREADS, l.Pl.CREATE_PRIVATE_THREADS, l.Pl.EMBED_LINKS, l.Pl.ATTACH_FILES, l.Pl.ADD_REACTIONS, l.Pl.USE_EXTERNAL_EMOJIS, l.Pl.USE_EXTERNAL_STICKERS, l.Pl.USE_EXTERNAL_SOUNDS, l.Pl.MENTION_EVERYONE, l.Pl.MANAGE_MESSAGES, l.Pl.PIN_MESSAGES, l.Pl.MANAGE_THREADS, l.Pl.READ_MESSAGE_HISTORY, l.Pl.SEND_TTS_MESSAGES, l.Pl.SEND_VOICE_MESSAGES, l.Pl.SEND_POLLS];
    return (
        E.inSoundmojiExperiment || (n = n.filter((t) => t !== l.Pl.USE_EXTERNAL_SOUNDS)),
        (E.showPrivateThreads && E.showCreateThreads) || (n = n.filter((t) => t !== l.Pl.CREATE_PRIVATE_THREADS)),
        E.showCreateThreads || (n = n.filter((t) => t !== l.Pl.CREATE_PUBLIC_THREADS)),
        E.inPinPermissionExperiment || (n = n.filter((t) => t !== l.Pl.PIN_MESSAGES)),
        {
            title: i,
            description: E.sectionDescription,
            permissions: e(n, t)
        }
    );
}
function N(t, i) {
    return {
        title: i,
        permissions: e([l.Pl.CONNECT, l.Pl.SPEAK, l.Pl.STREAM, l.Pl.USE_SOUNDBOARD, l.Pl.USE_EXTERNAL_SOUNDS, l.Pl.USE_VAD, l.Pl.PRIORITY_SPEAKER, l.Pl.MUTE_MEMBERS, l.Pl.DEAFEN_MEMBERS, l.Pl.MOVE_MEMBERS, l.Pl.SET_VOICE_CHANNEL_STATUS], t)
    };
}
function T(t, i, E) {
    let n = [l.Pl.SEND_MESSAGES, l.Pl.EMBED_LINKS, l.Pl.ATTACH_FILES, l.Pl.ADD_REACTIONS, l.Pl.USE_EXTERNAL_EMOJIS, l.Pl.USE_EXTERNAL_STICKERS, l.Pl.USE_EXTERNAL_SOUNDS, l.Pl.MENTION_EVERYONE, l.Pl.MANAGE_MESSAGES, l.Pl.READ_MESSAGE_HISTORY, l.Pl.SEND_TTS_MESSAGES, l.Pl.SEND_VOICE_MESSAGES, l.Pl.SEND_POLLS];
    return (
        E.inSoundmojiExperiment || (n = n.filter((t) => t !== l.Pl.USE_EXTERNAL_SOUNDS)),
        {
            title: i,
            description: E.sectionDescription,
            permissions: e(n, t)
        }
    );
}
function g(t, i) {
    let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showActivities: !0 };
    return {
        title: i,
        permissions: e([l.Pl.USE_APPLICATION_COMMANDS, E.showActivities ? l.Pl.USE_EMBEDDED_ACTIVITIES : null, l.Pl.USE_EXTERNAL_APPS].filter(n.lm), t)
    };
}
function M(t, i, E) {
    return {
        title: i,
        permissions: e(E ? [l.Pl.CONNECT, l.Pl.STREAM, l.Pl.MUTE_MEMBERS, l.Pl.MOVE_MEMBERS] : [l.Pl.CONNECT, l.Pl.MUTE_MEMBERS, l.Pl.MOVE_MEMBERS], t)
    };
}
function I(t, i) {
    return {
        title: i,
        permissions: e([l.Pl.REQUEST_TO_SPEAK, l.Pl.MENTION_EVERYONE], t)
    };
}
function R(t, i) {
    return {
        title: i,
        permissions: e([l.Pl.CREATE_EVENTS, l.Pl.MANAGE_EVENTS], t)
    };
}
function O(t) {
    return null == t ? t : 'string' == typeof t ? t.trim() : 'function' == typeof t ? S.intl.format(t, {}) : t;
}
