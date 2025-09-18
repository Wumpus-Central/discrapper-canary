n.d(i, {
    FX: () => a,
    Ny: () => A,
    WV: () => N,
    WW: () => s,
    _u: () => O,
    aW: () => g,
    kv: () => M,
    s4: () => o,
    uu: () => I,
    vq: () => _,
    xU: () => T,
    zO: () => P,
}),
    n(539854),
    n(781311);
var l = n(823379),
    E = n(231338),
    e = n(388032);
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
function s(t) {
    var i, n;
    return {
        [E.Pl.VIEW_CHANNEL.toString()]: {
            title: e.intl.string(e.t.uV83ys),
            description: e.t.ybTHLi,
            flag: E.Pl.VIEW_CHANNEL,
        },
        [E.Pl.MANAGE_CHANNELS.toString()]: {
            title: e.intl.string(e.t["9qLtWl"]),
            description: e.t.qfJnur,
            flag: E.Pl.MANAGE_CHANNELS,
        },
        [E.Pl.MANAGE_ROLES.toString()]: {
            title: e.intl.string(e.t["C8d+oK"]),
            description: e.t.buo9u7,
            flag: E.Pl.MANAGE_ROLES,
        },
        [E.Pl.MANAGE_GUILD_EXPRESSIONS.toString()]: {
            title: e.intl.string(e.t.bbuXIi),
            description: e.t["4vb3//"],
            flag: E.Pl.MANAGE_GUILD_EXPRESSIONS,
        },
        [E.Pl.CREATE_GUILD_EXPRESSIONS.toString()]: {
            title: e.intl.string(e.t.HarVuL),
            description: e.t.gkdHvL,
            flag: E.Pl.CREATE_GUILD_EXPRESSIONS,
        },
        [E.Pl.VIEW_AUDIT_LOG.toString()]: {
            title: e.intl.string(e.t.fZgLpK),
            description: e.t["0hx75u"],
            flag: E.Pl.VIEW_AUDIT_LOG,
        },
        [E.Pl.VIEW_GUILD_ANALYTICS.toString()]: {
            title: e.intl.string(e.t.rQJBEx),
            description: e.t.whVKhY,
            flag: E.Pl.VIEW_GUILD_ANALYTICS,
        },
        [E.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
            title: e.intl.string(e.t["0lTLTk"]),
            description: e.t.mut6NT,
            flag: E.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS,
        },
        [E.Pl.MANAGE_WEBHOOKS.toString()]: {
            title: e.intl.string(e.t["/ADKmJ"]),
            description: e.t.LczYqK,
            flag: E.Pl.MANAGE_WEBHOOKS,
        },
        [E.Pl.MANAGE_GUILD.toString()]: {
            title: e.intl.string(e.t.QZRcfH),
            description: e.t["KoQe/P"],
            flag: E.Pl.MANAGE_GUILD,
        },
        [E.Pl.CREATE_INSTANT_INVITE.toString()]: {
            title: e.intl.string(e.t.zJrgTE),
            description: e.t.PCFOZW,
            flag: E.Pl.CREATE_INSTANT_INVITE,
        },
        [E.Pl.CHANGE_NICKNAME.toString()]: {
            title: e.intl.string(e.t.dilOFx),
            description: e.t["b8B++v"],
            flag: E.Pl.CHANGE_NICKNAME,
        },
        [E.Pl.MANAGE_NICKNAMES.toString()]: {
            title: e.intl.string(e.t["t+Ct5+"]),
            description: e.t.hTnlMT,
            flag: E.Pl.MANAGE_NICKNAMES,
        },
        [E.Pl.KICK_MEMBERS.toString()]: {
            title: t.showMembershipManualApprovalPermissions ? e.intl.string(e.t["9TxXwc"]) : e.intl.string(e.t.pBNv6u),
            description: t.showMembershipManualApprovalPermissions ? e.t.hGBAn5 : e.t.rwdPaG,
            flag: E.Pl.KICK_MEMBERS,
        },
        [E.Pl.BAN_MEMBERS.toString()]: {
            title: e.intl.string(e.t.oTBA7O),
            description: e.t.OqNY09,
            flag: E.Pl.BAN_MEMBERS,
        },
        [E.Pl.MODERATE_MEMBERS.toString()]: {
            title: e.intl.string(e.t["+RL6p6"]),
            description: e.t.T6bZsb,
            flag: E.Pl.MODERATE_MEMBERS,
        },
        [E.Pl.SEND_MESSAGES.toString()]: {
            title: e.intl.string(e.t.S1VOwc),
            description: e.t.prvWKi,
            flag: E.Pl.SEND_MESSAGES,
        },
        [E.Pl.EMBED_LINKS.toString()]: {
            title: e.intl.string(e.t["969dEB"]),
            description: e.t.ChoIi4,
            flag: E.Pl.EMBED_LINKS,
        },
        [E.Pl.ATTACH_FILES.toString()]: {
            title: e.intl.string(e.t["3AS4UF"]),
            description: e.t["/87mYG"],
            flag: E.Pl.ATTACH_FILES,
        },
        [E.Pl.ADD_REACTIONS.toString()]: {
            title: e.intl.string(e.t.yEoJAg),
            description: e.t.FEYwX1,
            flag: E.Pl.ADD_REACTIONS,
        },
        [E.Pl.USE_EXTERNAL_EMOJIS.toString()]: {
            title: e.intl.string(e.t["+bxf3N"]),
            description: e.t.POeVIi,
            flag: E.Pl.USE_EXTERNAL_EMOJIS,
        },
        [E.Pl.USE_EXTERNAL_STICKERS.toString()]: {
            title: e.intl.string(e.t.ERNhYW),
            description: e.t.AdXVhI,
            flag: E.Pl.USE_EXTERNAL_STICKERS,
        },
        [E.Pl.MENTION_EVERYONE.toString()]: {
            title: t.inGameMentionsExperiment ? e.intl.string(e.t.lEO7Wl) : e.intl.string(e.t.Y78KGB),
            description: t.inGameMentionsExperiment ? e.intl.string(e.t.wdHpIC) : e.intl.string(e.t.ryj6Nz),
            flag: E.Pl.MENTION_EVERYONE,
        },
        [E.Pl.MANAGE_MESSAGES.toString()]: {
            title: e.intl.string(e.t["6lU9xM"]),
            description: e.t["RXMG//"],
            flag: E.Pl.MANAGE_MESSAGES,
        },
        [E.Pl.PIN_MESSAGES.toString()]: {
            title: e.intl.string(e.t.Y5BI39),
            description: e.t["LN/K39"],
            flag: E.Pl.PIN_MESSAGES,
        },
        [E.Pl.BYPASS_SLOWMODE.toString()]: {
            title: e.intl.string(e.t.kqcjeX),
            description: e.t.S2ZE5e,
            flag: E.Pl.BYPASS_SLOWMODE,
        },
        [E.Pl.READ_MESSAGE_HISTORY.toString()]: {
            title: e.intl.string(e.t.l9ufaW),
            description: e.t.rmHPFR,
            flag: E.Pl.READ_MESSAGE_HISTORY,
        },
        [E.Pl.SEND_TTS_MESSAGES.toString()]: {
            title: e.intl.string(e.t.mMbwh4),
            description: e.t.D6x8Nj,
            flag: E.Pl.SEND_TTS_MESSAGES,
        },
        [E.Pl.USE_APPLICATION_COMMANDS.toString()]: {
            title: e.intl.string(e.t.nkoPOj),
            description: e.t.pJrJ39,
            flag: E.Pl.USE_APPLICATION_COMMANDS,
        },
        [E.Pl.USE_EXTERNAL_APPS.toString()]: {
            title: e.intl.string(e.t.TtA5rK),
            description: e.t.mzLoDQ,
            flag: E.Pl.USE_EXTERNAL_APPS,
        },
        [E.Pl.SEND_VOICE_MESSAGES.toString()]: {
            title: e.intl.string(e.t.WlWSBQ),
            description: e.t.pDuyi4,
            flag: E.Pl.SEND_VOICE_MESSAGES,
        },
        [E.Pl.SEND_POLLS.toString()]: {
            title: e.intl.string(e.t.UMQ7W1),
            description: e.t["Xl6W+P"],
            flag: E.Pl.SEND_POLLS,
        },
        [E.Pl.CONNECT.toString()]: {
            title: e.intl.string(e.t.S0W8Z2),
            description: e.t["3GCm/f"],
            flag: E.Pl.CONNECT,
        },
        [E.Pl.SPEAK.toString()]: {
            title: e.intl.string(e.t["8w1tIS"]),
            description: e.t.y4MncH,
            flag: E.Pl.SPEAK,
        },
        [E.Pl.STREAM.toString()]: {
            title: e.intl.string(e.t.FlNoSU),
            description: e.t["6Z0j9v"],
            flag: E.Pl.STREAM,
        },
        [E.Pl.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: e.intl.string(e.t.rLSGen),
            description: e.t.BEqU5O,
            flag: E.Pl.USE_EMBEDDED_ACTIVITIES,
        },
        [E.Pl.USE_SOUNDBOARD.toString()]: {
            title: e.intl.string(e.t.Bco7ND),
            description: null != (i = null == t ? void 0 : t.SOUNDBOARD_DESCRIPTION) ? i : e.t["+8p+fX"],
            flag: E.Pl.USE_SOUNDBOARD,
        },
        [E.Pl.USE_EXTERNAL_SOUNDS.toString()]: {
            title: e.intl.string(e.t.pwaVJy),
            description: e.t.qDpPtb,
            flag: E.Pl.USE_EXTERNAL_SOUNDS,
        },
        [E.Pl.USE_VAD.toString()]: {
            title: e.intl.string(e.t["08zAV1"]),
            description: e.t["7CHjmZ"],
            flag: E.Pl.USE_VAD,
        },
        [E.Pl.PRIORITY_SPEAKER.toString()]: {
            title: e.intl.string(e.t.BVK71t),
            description: null != (n = null == t ? void 0 : t.PRIORITY_SPEAKER_DESCRIPTION) ? n : e.t.OJkrrq,
            flag: E.Pl.PRIORITY_SPEAKER,
        },
        [E.Pl.MUTE_MEMBERS.toString()]: {
            title: e.intl.string(e.t["8EI309"]),
            description: e.t.PIhGAw,
            flag: E.Pl.MUTE_MEMBERS,
        },
        [E.Pl.DEAFEN_MEMBERS.toString()]: {
            title: e.intl.string(e.t["9L47Fh"]),
            description: e.t["FQr3+v"],
            flag: E.Pl.DEAFEN_MEMBERS,
        },
        [E.Pl.MOVE_MEMBERS.toString()]: {
            title: e.intl.string(e.t.YtjJPT),
            description: e.t.SEe0Gh,
            flag: E.Pl.MOVE_MEMBERS,
        },
        [E.Pl.REQUEST_TO_SPEAK.toString()]: {
            title: e.intl.string(e.t["5kicT0"]),
            description: e.t["yNE+Q0"],
            flag: E.Pl.REQUEST_TO_SPEAK,
            isExperimental: !0,
        },
        [E.Pl.ADMINISTRATOR.toString()]: {
            title: e.intl.string(e.t.PGvZqa),
            description: "string" == typeof e.t.UJxMrK ? e.t.UJxMrK : e.intl.format(e.t.UJxMrK, {}),
            flag: E.Pl.ADMINISTRATOR,
        },
        [E.Pl.MANAGE_EVENTS.toString()]: {
            title: e.intl.string(e.t.HIgA5e),
            description: e.t["SL+qgI"],
            flag: E.Pl.MANAGE_EVENTS,
        },
        [E.Pl.CREATE_EVENTS.toString()]: {
            title: e.intl.string(e.t.qyjZub),
            description: e.t.bQEFJS,
            flag: E.Pl.CREATE_EVENTS,
        },
        [E.Pl.MANAGE_THREADS.toString()]: {
            title: e.intl.string(e.t.QKe7Q0),
            description: e.t.QAxIIi,
            flag: E.Pl.MANAGE_THREADS,
        },
        [E.Pl.CREATE_PUBLIC_THREADS.toString()]: {
            title: e.intl.string(e.t["25rKnZ"]),
            description: e.t.ODCYj4,
            flag: E.Pl.CREATE_PUBLIC_THREADS,
        },
        [E.Pl.CREATE_PRIVATE_THREADS.toString()]: {
            title: e.intl.string(e.t.QwbTSU),
            description: e.t["G/cc3t"],
            flag: E.Pl.CREATE_PRIVATE_THREADS,
        },
        [E.Pl.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: e.intl.string(e.t["5QlVGx"]),
            description: e.t.C2ZPEx,
            flag: E.Pl.SEND_MESSAGES_IN_THREADS,
        },
        [E.Pl.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: e.intl.string(e.t.VBwkUV),
            description: e.t.C6BzX1,
            flag: E.Pl.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
function o(t) {
    let i,
        n = s(t),
        l = [
            (function (t, i) {
                let n = [
                    E.Pl.VIEW_CHANNEL,
                    E.Pl.MANAGE_CHANNELS,
                    E.Pl.MANAGE_ROLES,
                    E.Pl.CREATE_GUILD_EXPRESSIONS,
                    E.Pl.MANAGE_GUILD_EXPRESSIONS,
                    E.Pl.VIEW_AUDIT_LOG,
                    E.Pl.VIEW_GUILD_ANALYTICS,
                ];
                return (
                    i.showCreatorMonetizationAnalyticsPermission && n.push(E.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS),
                    n.push(E.Pl.MANAGE_WEBHOOKS),
                    n.push(E.Pl.MANAGE_GUILD),
                    r({
                        title: e.intl.string(e.t["mYck+P"]),
                        permissions: S(n, t),
                    })
                );
            })(n, t),
            (function (t) {
                let i = [
                    E.Pl.CREATE_INSTANT_INVITE,
                    E.Pl.CHANGE_NICKNAME,
                    E.Pl.MANAGE_NICKNAMES,
                    E.Pl.KICK_MEMBERS,
                    E.Pl.BAN_MEMBERS,
                    E.Pl.MODERATE_MEMBERS,
                ];
                return r({
                    title: e.intl.string(e.t.Ny49TE),
                    permissions: S(i, t),
                });
            })(n),
            ((i = [
                E.Pl.SEND_MESSAGES,
                E.Pl.SEND_MESSAGES_IN_THREADS,
                E.Pl.CREATE_PUBLIC_THREADS,
                E.Pl.CREATE_PRIVATE_THREADS,
                E.Pl.EMBED_LINKS,
                E.Pl.ATTACH_FILES,
                E.Pl.ADD_REACTIONS,
                E.Pl.USE_EXTERNAL_EMOJIS,
                E.Pl.USE_EXTERNAL_STICKERS,
                E.Pl.USE_EXTERNAL_SOUNDS,
                E.Pl.MENTION_EVERYONE,
                E.Pl.MANAGE_MESSAGES,
                E.Pl.PIN_MESSAGES,
                E.Pl.BYPASS_SLOWMODE,
                E.Pl.MANAGE_THREADS,
                E.Pl.READ_MESSAGE_HISTORY,
                E.Pl.SEND_TTS_MESSAGES,
                E.Pl.SEND_VOICE_MESSAGES,
                E.Pl.SEND_POLLS,
            ]),
            t.inSoundmojiExperiment || (i = i.filter((t) => t !== E.Pl.USE_EXTERNAL_SOUNDS)),
            t.inPinPermissionExperiment || (i = i.filter((t) => t !== E.Pl.PIN_MESSAGES)),
            t.inBypassSlowmodePermissionExperiment || (i = i.filter((t) => t !== E.Pl.BYPASS_SLOWMODE)),
            r({
                title: e.intl.string(e.t.cKobOz),
                permissions: S(i, n),
            })),
            (function (t, i) {
                let n = [
                    E.Pl.CONNECT,
                    E.Pl.SPEAK,
                    E.Pl.STREAM,
                    E.Pl.USE_SOUNDBOARD,
                    E.Pl.USE_EXTERNAL_SOUNDS,
                    E.Pl.USE_VAD,
                    E.Pl.PRIORITY_SPEAKER,
                    E.Pl.MUTE_MEMBERS,
                    E.Pl.DEAFEN_MEMBERS,
                    E.Pl.MOVE_MEMBERS,
                    E.Pl.SET_VOICE_CHANNEL_STATUS,
                ];
                return r({
                    title: e.intl.string(e.t["46Ra1d"]),
                    permissions: S(n, t),
                });
            })(n, 0),
            (function (t) {
                let i = [E.Pl.USE_APPLICATION_COMMANDS, E.Pl.USE_EMBEDDED_ACTIVITIES, E.Pl.USE_EXTERNAL_APPS];
                return r({
                    title: e.intl.string(e.t["rrh/W1"]),
                    permissions: S(i, t),
                });
            })(n),
        ];
    return (
        t.showStageChannelPermissions &&
            l.push(
                r(
                    {
                        title: e.intl.string(e.t.yniaur),
                        permissions: S([E.Pl.REQUEST_TO_SPEAK], n),
                    },
                    t.showExperimental,
                ),
            ),
        l.push(
            r(
                {
                    title: e.intl.string(e.t.b8lplZ),
                    permissions: S([E.Pl.CREATE_EVENTS, E.Pl.MANAGE_EVENTS], n),
                },
                t.showExperimental,
            ),
        ),
        l.push(
            r({
                title: e.intl.string(e.t["3uI5CQ"]),
                permissions: S([E.Pl.ADMINISTRATOR], n),
            }),
        ),
        l
    );
}
function P(t, i) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showManageWebhooks: !0 };
    return {
        title: i,
        permissions: S(
            (null == n ? void 0 : n.showManageWebhooks)
                ? [E.Pl.VIEW_CHANNEL, E.Pl.MANAGE_CHANNELS, E.Pl.MANAGE_ROLES, E.Pl.MANAGE_WEBHOOKS]
                : [E.Pl.VIEW_CHANNEL, E.Pl.MANAGE_CHANNELS, E.Pl.MANAGE_ROLES],
            t,
        ),
    };
}
function A(t, i) {
    return {
        title: i,
        permissions: S([E.Pl.CREATE_INSTANT_INVITE], t),
    };
}
function _(t, i, n) {
    let l = [
        E.Pl.SEND_MESSAGES,
        E.Pl.SEND_MESSAGES_IN_THREADS,
        E.Pl.CREATE_PUBLIC_THREADS,
        E.Pl.CREATE_PRIVATE_THREADS,
        E.Pl.EMBED_LINKS,
        E.Pl.ATTACH_FILES,
        E.Pl.ADD_REACTIONS,
        E.Pl.USE_EXTERNAL_EMOJIS,
        E.Pl.USE_EXTERNAL_STICKERS,
        E.Pl.USE_EXTERNAL_SOUNDS,
        E.Pl.MENTION_EVERYONE,
        E.Pl.MANAGE_MESSAGES,
        E.Pl.PIN_MESSAGES,
        E.Pl.BYPASS_SLOWMODE,
        E.Pl.MANAGE_THREADS,
        E.Pl.READ_MESSAGE_HISTORY,
        E.Pl.SEND_TTS_MESSAGES,
        E.Pl.SEND_VOICE_MESSAGES,
        E.Pl.SEND_POLLS,
    ];
    return (
        n.inSoundmojiExperiment || (l = l.filter((t) => t !== E.Pl.USE_EXTERNAL_SOUNDS)),
        (n.showPrivateThreads && n.showCreateThreads) || (l = l.filter((t) => t !== E.Pl.CREATE_PRIVATE_THREADS)),
        n.showCreateThreads || (l = l.filter((t) => t !== E.Pl.CREATE_PUBLIC_THREADS)),
        n.inPinPermissionExperiment || (l = l.filter((t) => t !== E.Pl.PIN_MESSAGES)),
        n.inBypassSlowmodePermissionExperiment || (l = l.filter((t) => t !== E.Pl.BYPASS_SLOWMODE)),
        {
            title: i,
            description: n.sectionDescription,
            permissions: S(l, t),
        }
    );
}
function N(t, i) {
    return {
        title: i,
        permissions: S(
            [
                E.Pl.CONNECT,
                E.Pl.SPEAK,
                E.Pl.STREAM,
                E.Pl.USE_SOUNDBOARD,
                E.Pl.USE_EXTERNAL_SOUNDS,
                E.Pl.USE_VAD,
                E.Pl.PRIORITY_SPEAKER,
                E.Pl.MUTE_MEMBERS,
                E.Pl.DEAFEN_MEMBERS,
                E.Pl.MOVE_MEMBERS,
                E.Pl.SET_VOICE_CHANNEL_STATUS,
            ],
            t,
        ),
    };
}
function g(t, i, n) {
    let l = [
        E.Pl.SEND_MESSAGES,
        E.Pl.EMBED_LINKS,
        E.Pl.ATTACH_FILES,
        E.Pl.ADD_REACTIONS,
        E.Pl.USE_EXTERNAL_EMOJIS,
        E.Pl.USE_EXTERNAL_STICKERS,
        E.Pl.USE_EXTERNAL_SOUNDS,
        E.Pl.MENTION_EVERYONE,
        E.Pl.MANAGE_MESSAGES,
        E.Pl.BYPASS_SLOWMODE,
        E.Pl.READ_MESSAGE_HISTORY,
        E.Pl.SEND_TTS_MESSAGES,
        E.Pl.SEND_VOICE_MESSAGES,
        E.Pl.SEND_POLLS,
    ];
    return (
        n.inSoundmojiExperiment || (l = l.filter((t) => t !== E.Pl.USE_EXTERNAL_SOUNDS)),
        n.inBypassSlowmodePermissionExperiment || (l = l.filter((t) => t !== E.Pl.BYPASS_SLOWMODE)),
        {
            title: i,
            description: n.sectionDescription,
            permissions: S(l, t),
        }
    );
}
function T(t, i) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showActivities: !0 };
    return {
        title: i,
        permissions: S(
            [
                E.Pl.USE_APPLICATION_COMMANDS,
                n.showActivities ? E.Pl.USE_EMBEDDED_ACTIVITIES : null,
                E.Pl.USE_EXTERNAL_APPS,
            ].filter(l.lm),
            t,
        ),
    };
}
function a(t, i, n) {
    return {
        title: i,
        permissions: S(
            n
                ? [E.Pl.CONNECT, E.Pl.STREAM, E.Pl.MUTE_MEMBERS, E.Pl.MOVE_MEMBERS]
                : [E.Pl.CONNECT, E.Pl.MUTE_MEMBERS, E.Pl.MOVE_MEMBERS],
            t,
        ),
    };
}
function M(t, i) {
    return {
        title: i,
        permissions: S([E.Pl.REQUEST_TO_SPEAK, E.Pl.MENTION_EVERYONE], t),
    };
}
function I(t, i) {
    return {
        title: i,
        permissions: S([E.Pl.CREATE_EVENTS, E.Pl.MANAGE_EVENTS], t),
    };
}
function O(t) {
    return null == t ? t : "string" == typeof t ? t.trim() : "function" == typeof t ? e.intl.format(t, {}) : t;
}
