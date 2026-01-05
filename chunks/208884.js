E.d(i, {
    FX: () => I,
    Ny: () => _,
    WV: () => g,
    WW: () => s,
    _u: () => R,
    aW: () => T,
    ih: () => D,
    kv: () => O,
    s4: () => P,
    uu: () => a,
    vq: () => N,
    xU: () => M,
    zO: () => o,
}),
    E(539854),
    E(781311);
var n = E(823379),
    l = E(110259),
    S = E(231338),
    r = E(388032);
function e(t) {
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
function A(t, i) {
    return t.map((t) => i[t.toString()]);
}
function s(t) {
    var i, E;
    return {
        [S.Pl.VIEW_CHANNEL.toString()]: {
            title: r.intl.string(r.t.uV83yi),
            description: r.t.ybTHLk,
            flag: S.Pl.VIEW_CHANNEL,
        },
        [S.Pl.MANAGE_CHANNELS.toString()]: {
            title: r.intl.string(r.t["9qLtWs"]),
            description: r.t.qfJnug,
            flag: S.Pl.MANAGE_CHANNELS,
        },
        [S.Pl.MANAGE_ROLES.toString()]: {
            title: r.intl.string(r.t["C8d+oG"]),
            description: r.t.buo9uw,
            flag: S.Pl.MANAGE_ROLES,
        },
        [S.Pl.MANAGE_GUILD_EXPRESSIONS.toString()]: {
            title: r.intl.string(r.t.bbuXIn),
            description: r.t["4vb3/6"],
            flag: S.Pl.MANAGE_GUILD_EXPRESSIONS,
        },
        [S.Pl.CREATE_GUILD_EXPRESSIONS.toString()]: {
            title: r.intl.string(r.t.HarVuP),
            description: r.t.gkdHvH,
            flag: S.Pl.CREATE_GUILD_EXPRESSIONS,
        },
        [S.Pl.VIEW_AUDIT_LOG.toString()]: {
            title: r.intl.string(r.t.fZgLpA),
            description: r.t["0hx75i"],
            flag: S.Pl.VIEW_AUDIT_LOG,
        },
        [S.Pl.VIEW_GUILD_ANALYTICS.toString()]: {
            title: r.intl.string(r.t["rQJBE/"]),
            description: r.t.whVKhX,
            flag: S.Pl.VIEW_GUILD_ANALYTICS,
        },
        [S.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
            title: r.intl.string(r.t["0lTLTv"]),
            description: r.t.mut6NV,
            flag: S.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS,
        },
        [S.Pl.MANAGE_WEBHOOKS.toString()]: {
            title: r.intl.string(r.t["/ADKmM"]),
            description: r.t.LczYqC,
            flag: S.Pl.MANAGE_WEBHOOKS,
        },
        [S.Pl.MANAGE_GUILD.toString()]: {
            title: r.intl.string(r.t.QZRcfO),
            description: r.t["KoQe/G"],
            flag: S.Pl.MANAGE_GUILD,
        },
        [S.Pl.CREATE_INSTANT_INVITE.toString()]: {
            title: r.intl.string(r.t.zJrgTG),
            description: r.t.PCFOZa,
            flag: S.Pl.CREATE_INSTANT_INVITE,
        },
        [S.Pl.CHANGE_NICKNAME.toString()]: {
            title: r.intl.string(r.t.dilOF6),
            description: r.t["b8B++j"],
            flag: S.Pl.CHANGE_NICKNAME,
        },
        [S.Pl.MANAGE_NICKNAMES.toString()]: {
            title: r.intl.string(r.t["t+Ct5x"]),
            description: r.t.hTnlMb,
            flag: S.Pl.MANAGE_NICKNAMES,
        },
        [S.Pl.KICK_MEMBERS.toString()]: {
            title: t.showMembershipManualApprovalPermissions ? r.intl.string(r.t["9TxXwb"]) : r.intl.string(r.t.pBNv6i),
            description: t.showMembershipManualApprovalPermissions ? r.t.hGBAnw : r.t.rwdPaE,
            flag: S.Pl.KICK_MEMBERS,
        },
        [S.Pl.BAN_MEMBERS.toString()]: {
            title: r.intl.string(r.t.oTBA7N),
            description: r.t["OqNY0/"],
            flag: S.Pl.BAN_MEMBERS,
        },
        [S.Pl.MODERATE_MEMBERS.toString()]: {
            title: r.intl.string(r.t["+RL6pz"]),
            description: r.t.T6bZsX,
            flag: S.Pl.MODERATE_MEMBERS,
        },
        [S.Pl.SEND_MESSAGES.toString()]: {
            title: r.intl.string(r.t.S1VOwd),
            description: r.t.prvWKm,
            flag: S.Pl.SEND_MESSAGES,
        },
        [S.Pl.EMBED_LINKS.toString()]: {
            title: r.intl.string(r.t["969dEL"]),
            description: r.t.ChoIiy,
            flag: S.Pl.EMBED_LINKS,
        },
        [S.Pl.ATTACH_FILES.toString()]: {
            title: r.intl.string(r.t["3AS4UM"]),
            description: r.t["/87mYH"],
            flag: S.Pl.ATTACH_FILES,
        },
        [S.Pl.ADD_REACTIONS.toString()]: {
            title: r.intl.string(r.t.yEoJAr),
            description: r.t.FEYwX7,
            flag: S.Pl.ADD_REACTIONS,
        },
        [S.Pl.USE_EXTERNAL_EMOJIS.toString()]: {
            title: r.intl.string(r.t["+bxf3H"]),
            description: r.t.POeVIu,
            flag: S.Pl.USE_EXTERNAL_EMOJIS,
        },
        [S.Pl.USE_EXTERNAL_STICKERS.toString()]: {
            title: r.intl.string(r.t.ERNhYf),
            description: r.t.AdXVhI,
            flag: S.Pl.USE_EXTERNAL_STICKERS,
        },
        [S.Pl.MENTION_EVERYONE.toString()]: {
            title: t.inGameMentionsExperiment ? r.intl.string(r.t.lEO7Wr) : r.intl.string(r.t.Y78KGC),
            description: t.inGameMentionsExperiment ? r.intl.string(r.t.wdHpIC) : r.intl.string(r.t.ryj6N5),
            flag: S.Pl.MENTION_EVERYONE,
        },
        [S.Pl.MANAGE_MESSAGES.toString()]: {
            title: r.intl.string(r.t["6lU9xM"]),
            description: r.t["RXMG/+"],
            flag: S.Pl.MANAGE_MESSAGES,
        },
        [S.Pl.PIN_MESSAGES.toString()]: {
            title: r.intl.string(r.t.Y5BI39),
            description: r.t["LN/K3x"],
            flag: S.Pl.PIN_MESSAGES,
        },
        [S.Pl.BYPASS_SLOWMODE.toString()]: {
            title: r.intl.string(r.t.kqcjeV),
            description: r.t.S2ZE5c,
            flag: S.Pl.BYPASS_SLOWMODE,
        },
        [S.Pl.READ_MESSAGE_HISTORY.toString()]: {
            title: r.intl.string(r.t.l9ufaR),
            description: r.t.rmHPFR,
            flag: S.Pl.READ_MESSAGE_HISTORY,
        },
        [S.Pl.SEND_TTS_MESSAGES.toString()]: {
            title: r.intl.string(r.t.mMbwh7),
            description: r.t.D6x8Nr,
            flag: S.Pl.SEND_TTS_MESSAGES,
        },
        [S.Pl.USE_APPLICATION_COMMANDS.toString()]: {
            title: r.intl.string(r.t.nkoPOt),
            description: r.t.pJrJ35,
            flag: S.Pl.USE_APPLICATION_COMMANDS,
        },
        [S.Pl.USE_EXTERNAL_APPS.toString()]: {
            title: r.intl.string(r.t.TtA5rK),
            description: r.t.mzLoDY,
            flag: S.Pl.USE_EXTERNAL_APPS,
        },
        [S.Pl.SEND_VOICE_MESSAGES.toString()]: {
            title: r.intl.string(r.t.WlWSBT),
            description: r.t.pDuyi0,
            flag: S.Pl.SEND_VOICE_MESSAGES,
        },
        [S.Pl.SEND_POLLS.toString()]: {
            title: r.intl.string(r.t.UMQ7Ww),
            description: r.t["Xl6W+F"],
            flag: S.Pl.SEND_POLLS,
        },
        [S.Pl.CONNECT.toString()]: {
            title: r.intl.string(r.t.S0W8Z5),
            description: r.t["3GCm/f"],
            flag: S.Pl.CONNECT,
        },
        [S.Pl.SPEAK.toString()]: {
            title: r.intl.string(r.t["8w1tIR"]),
            description: r.t.y4MncF,
            flag: S.Pl.SPEAK,
        },
        [S.Pl.STREAM.toString()]: {
            title: r.intl.string(r.t.FlNoSV),
            description: r.t["6Z0j9v"],
            flag: S.Pl.STREAM,
        },
        [S.Pl.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: r.intl.string(r.t.rLSGeh),
            description: r.t.BEqU5H,
            flag: S.Pl.USE_EMBEDDED_ACTIVITIES,
        },
        [S.Pl.USE_SOUNDBOARD.toString()]: {
            title: r.intl.string(r.t.Bco7NG),
            description: null != (i = null == t ? void 0 : t.SOUNDBOARD_DESCRIPTION) ? i : r.t["+8p+fc"],
            flag: S.Pl.USE_SOUNDBOARD,
        },
        [S.Pl.USE_EXTERNAL_SOUNDS.toString()]: {
            title: r.intl.string(r.t.pwaVJ6),
            description: r.t.qDpPtX,
            flag: S.Pl.USE_EXTERNAL_SOUNDS,
        },
        [S.Pl.USE_VAD.toString()]: {
            title: r.intl.string(r.t["08zAV7"]),
            description: r.t["7CHjmc"],
            flag: S.Pl.USE_VAD,
        },
        [S.Pl.PRIORITY_SPEAKER.toString()]: {
            title: r.intl.string(r.t.BVK71i),
            description: null != (E = null == t ? void 0 : t.PRIORITY_SPEAKER_DESCRIPTION) ? E : r.t.OJkrro,
            flag: S.Pl.PRIORITY_SPEAKER,
        },
        [S.Pl.MUTE_MEMBERS.toString()]: {
            title: r.intl.string(r.t["8EI30/"]),
            description: r.t.PIhGA1,
            flag: S.Pl.MUTE_MEMBERS,
        },
        [S.Pl.DEAFEN_MEMBERS.toString()]: {
            title: r.intl.string(r.t["9L47Fr"]),
            description: r.t["FQr3+t"],
            flag: S.Pl.DEAFEN_MEMBERS,
        },
        [S.Pl.MOVE_MEMBERS.toString()]: {
            title: r.intl.string(r.t.YtjJPQ),
            description: r.t.SEe0Gp,
            flag: S.Pl.MOVE_MEMBERS,
        },
        [S.Pl.REQUEST_TO_SPEAK.toString()]: {
            title: r.intl.string(r.t["5kicT2"]),
            description: r.t["yNE+Q5"],
            flag: S.Pl.REQUEST_TO_SPEAK,
            isExperimental: !0,
        },
        [S.Pl.ADMINISTRATOR.toString()]: {
            title: r.intl.string(r.t.PGvZqX),
            description: "string" == typeof r.t.UJxMrK ? r.t.UJxMrK : r.intl.format(r.t.UJxMrK, {}),
            flag: S.Pl.ADMINISTRATOR,
        },
        [S.Pl.MANAGE_EVENTS.toString()]: {
            title: r.intl.string(r.t.HIgA5a),
            description: r.t["SL+qgG"],
            flag: S.Pl.MANAGE_EVENTS,
        },
        [S.Pl.CREATE_EVENTS.toString()]: {
            title: r.intl.string(r.t.qyjZua),
            description: r.t.bQEFJZ,
            flag: S.Pl.CREATE_EVENTS,
        },
        [S.Pl.MANAGE_THREADS.toString()]: {
            title: r.intl.string(r.t.QKe7Q3),
            description: r.t.QAxIIt,
            flag: S.Pl.MANAGE_THREADS,
        },
        [S.Pl.CREATE_PUBLIC_THREADS.toString()]: {
            title: r.intl.string(r.t["25rKnX"]),
            description: r.t.ODCYj8,
            flag: S.Pl.CREATE_PUBLIC_THREADS,
        },
        [S.Pl.CREATE_PRIVATE_THREADS.toString()]: {
            title: r.intl.string(r.t.QwbTSa),
            description: r.t["G/cc3l"],
            flag: S.Pl.CREATE_PRIVATE_THREADS,
        },
        [S.Pl.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: r.intl.string(r.t["5QlVGy"]),
            description: r.t.C2ZPE3,
            flag: S.Pl.SEND_MESSAGES_IN_THREADS,
        },
        [S.Pl.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: r.intl.string(r.t.VBwkUf),
            description: r.t.C6BzXx,
            flag: S.Pl.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
function P(t) {
    let i,
        E = s(t),
        n = [
            (function (t, i) {
                let E = [
                    S.Pl.VIEW_CHANNEL,
                    S.Pl.MANAGE_CHANNELS,
                    S.Pl.MANAGE_ROLES,
                    S.Pl.CREATE_GUILD_EXPRESSIONS,
                    S.Pl.MANAGE_GUILD_EXPRESSIONS,
                    S.Pl.VIEW_AUDIT_LOG,
                    S.Pl.VIEW_GUILD_ANALYTICS,
                ];
                return (
                    i.showCreatorMonetizationAnalyticsPermission && E.push(S.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS),
                    E.push(S.Pl.MANAGE_WEBHOOKS),
                    E.push(S.Pl.MANAGE_GUILD),
                    e({
                        title: r.intl.string(r.t["mYck+B"]),
                        permissions: A(E, t),
                    })
                );
            })(E, t),
            (function (t) {
                let i = [
                    S.Pl.CREATE_INSTANT_INVITE,
                    S.Pl.CHANGE_NICKNAME,
                    S.Pl.MANAGE_NICKNAMES,
                    S.Pl.KICK_MEMBERS,
                    S.Pl.BAN_MEMBERS,
                    S.Pl.MODERATE_MEMBERS,
                ];
                return e({
                    title: r.intl.string(r.t.Ny49TN),
                    permissions: A(i, t),
                });
            })(E),
            ((i = [
                S.Pl.SEND_MESSAGES,
                S.Pl.SEND_MESSAGES_IN_THREADS,
                S.Pl.CREATE_PUBLIC_THREADS,
                S.Pl.CREATE_PRIVATE_THREADS,
                S.Pl.EMBED_LINKS,
                S.Pl.ATTACH_FILES,
                S.Pl.ADD_REACTIONS,
                S.Pl.USE_EXTERNAL_EMOJIS,
                S.Pl.USE_EXTERNAL_STICKERS,
                S.Pl.USE_EXTERNAL_SOUNDS,
                S.Pl.MENTION_EVERYONE,
                S.Pl.MANAGE_MESSAGES,
                S.Pl.PIN_MESSAGES,
                S.Pl.BYPASS_SLOWMODE,
                S.Pl.MANAGE_THREADS,
                S.Pl.READ_MESSAGE_HISTORY,
                S.Pl.SEND_TTS_MESSAGES,
                S.Pl.SEND_VOICE_MESSAGES,
                S.Pl.SEND_POLLS,
            ]),
            t.inSoundmojiExperiment || (i = i.filter((t) => t !== S.Pl.USE_EXTERNAL_SOUNDS)),
            t.inBypassSlowmodePermissionExperiment || (i = i.filter((t) => t !== S.Pl.BYPASS_SLOWMODE)),
            e({
                title: r.intl.string(r.t.cKobO5),
                permissions: A(i, E),
            })),
            (function (t, i) {
                let E = [
                    S.Pl.CONNECT,
                    S.Pl.SPEAK,
                    S.Pl.STREAM,
                    S.Pl.USE_SOUNDBOARD,
                    S.Pl.USE_EXTERNAL_SOUNDS,
                    S.Pl.USE_VAD,
                    S.Pl.PRIORITY_SPEAKER,
                    S.Pl.MUTE_MEMBERS,
                    S.Pl.DEAFEN_MEMBERS,
                    S.Pl.MOVE_MEMBERS,
                    S.Pl.SET_VOICE_CHANNEL_STATUS,
                ];
                return e({
                    title: r.intl.string(r.t["46Ra1b"]),
                    permissions: A(E, t),
                });
            })(E, 0),
            (function (t) {
                let i = [S.Pl.USE_APPLICATION_COMMANDS, S.Pl.USE_EMBEDDED_ACTIVITIES, S.Pl.USE_EXTERNAL_APPS];
                return e({
                    title: r.intl.string(r.t["rrh/W6"]),
                    permissions: A(i, t),
                });
            })(E),
        ];
    return (
        t.showStageChannelPermissions &&
            n.push(
                e(
                    {
                        title: r.intl.string(r.t.yniauk),
                        permissions: A([S.Pl.REQUEST_TO_SPEAK], E),
                    },
                    t.showExperimental,
                ),
            ),
        n.push(
            e(
                {
                    title: r.intl.string(r.t.b8lplT),
                    permissions: A([S.Pl.CREATE_EVENTS, S.Pl.MANAGE_EVENTS], E),
                },
                t.showExperimental,
            ),
        ),
        n.push(
            e({
                title: r.intl.string(r.t["3uI5CX"]),
                permissions: A([S.Pl.ADMINISTRATOR], E),
            }),
        ),
        n
    );
}
function o(t, i) {
    let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showManageWebhooks: !0 };
    return {
        title: i,
        permissions: A(
            (null == E ? void 0 : E.showManageWebhooks)
                ? [S.Pl.VIEW_CHANNEL, S.Pl.MANAGE_CHANNELS, S.Pl.MANAGE_ROLES, S.Pl.MANAGE_WEBHOOKS]
                : [S.Pl.VIEW_CHANNEL, S.Pl.MANAGE_CHANNELS, S.Pl.MANAGE_ROLES],
            t,
        ),
    };
}
function _(t, i) {
    return {
        title: i,
        permissions: A([S.Pl.CREATE_INSTANT_INVITE], t),
    };
}
function N(t, i, E) {
    let n = [
        S.Pl.SEND_MESSAGES,
        S.Pl.SEND_MESSAGES_IN_THREADS,
        S.Pl.CREATE_PUBLIC_THREADS,
        S.Pl.CREATE_PRIVATE_THREADS,
        S.Pl.EMBED_LINKS,
        S.Pl.ATTACH_FILES,
        S.Pl.ADD_REACTIONS,
        S.Pl.USE_EXTERNAL_EMOJIS,
        S.Pl.USE_EXTERNAL_STICKERS,
        S.Pl.USE_EXTERNAL_SOUNDS,
        S.Pl.MENTION_EVERYONE,
        S.Pl.MANAGE_MESSAGES,
        S.Pl.PIN_MESSAGES,
        S.Pl.BYPASS_SLOWMODE,
        S.Pl.MANAGE_THREADS,
        S.Pl.READ_MESSAGE_HISTORY,
        S.Pl.SEND_TTS_MESSAGES,
        S.Pl.SEND_VOICE_MESSAGES,
        S.Pl.SEND_POLLS,
    ];
    return (
        E.inSoundmojiExperiment || (n = n.filter((t) => t !== S.Pl.USE_EXTERNAL_SOUNDS)),
        (E.showPrivateThreads && E.showCreateThreads) || (n = n.filter((t) => t !== S.Pl.CREATE_PRIVATE_THREADS)),
        E.showCreateThreads || (n = n.filter((t) => t !== S.Pl.CREATE_PUBLIC_THREADS)),
        E.inBypassSlowmodePermissionExperiment || (n = n.filter((t) => t !== S.Pl.BYPASS_SLOWMODE)),
        {
            title: i,
            description: E.sectionDescription,
            permissions: A(n, t),
        }
    );
}
function g(t, i) {
    return {
        title: i,
        permissions: A(
            [
                S.Pl.CONNECT,
                S.Pl.SPEAK,
                S.Pl.STREAM,
                S.Pl.USE_SOUNDBOARD,
                S.Pl.USE_EXTERNAL_SOUNDS,
                S.Pl.USE_VAD,
                S.Pl.PRIORITY_SPEAKER,
                S.Pl.MUTE_MEMBERS,
                S.Pl.DEAFEN_MEMBERS,
                S.Pl.MOVE_MEMBERS,
                S.Pl.SET_VOICE_CHANNEL_STATUS,
            ],
            t,
        ),
    };
}
function T(t, i, E) {
    let n = [
        S.Pl.SEND_MESSAGES,
        S.Pl.EMBED_LINKS,
        S.Pl.ATTACH_FILES,
        S.Pl.ADD_REACTIONS,
        S.Pl.USE_EXTERNAL_EMOJIS,
        S.Pl.USE_EXTERNAL_STICKERS,
        S.Pl.USE_EXTERNAL_SOUNDS,
        S.Pl.MENTION_EVERYONE,
        S.Pl.MANAGE_MESSAGES,
        S.Pl.BYPASS_SLOWMODE,
        S.Pl.READ_MESSAGE_HISTORY,
        S.Pl.SEND_TTS_MESSAGES,
        S.Pl.SEND_VOICE_MESSAGES,
        S.Pl.SEND_POLLS,
    ];
    return (
        E.inSoundmojiExperiment || (n = n.filter((t) => t !== S.Pl.USE_EXTERNAL_SOUNDS)),
        E.inBypassSlowmodePermissionExperiment || (n = n.filter((t) => t !== S.Pl.BYPASS_SLOWMODE)),
        {
            title: i,
            description: E.sectionDescription,
            permissions: A(n, t),
        }
    );
}
function M(t, i) {
    let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showActivities: !0 };
    return {
        title: i,
        permissions: A(
            [
                S.Pl.USE_APPLICATION_COMMANDS,
                E.showActivities ? S.Pl.USE_EMBEDDED_ACTIVITIES : null,
                S.Pl.USE_EXTERNAL_APPS,
            ].filter(n.lm),
            t,
        ),
    };
}
function I(t, i, E) {
    return {
        title: i,
        permissions: A(
            E
                ? [S.Pl.CONNECT, S.Pl.STREAM, S.Pl.MUTE_MEMBERS, S.Pl.MOVE_MEMBERS]
                : [S.Pl.CONNECT, S.Pl.MUTE_MEMBERS, S.Pl.MOVE_MEMBERS],
            t,
        ),
    };
}
function O(t, i) {
    return {
        title: i,
        permissions: A([S.Pl.REQUEST_TO_SPEAK, S.Pl.MENTION_EVERYONE], t),
    };
}
function a(t, i) {
    return {
        title: i,
        permissions: A([S.Pl.CREATE_EVENTS, S.Pl.MANAGE_EVENTS], t),
    };
}
function R(t) {
    return null == t ? t : "string" == typeof t ? t.trim() : "function" == typeof t ? r.intl.format(t, {}) : t;
}
function D(t, i, E) {
    if (
        l.Z.getCurrentConfig({
            guildId: E,
            location: "getMigrationWarning",
        }).enabled
    )
        return i
            ? t === S.Pl.MANAGE_CHANNELS || t === S.Pl.MANAGE_THREADS
                ? r.intl.string(r.t.JD3HnA)
                : t === S.Pl.MANAGE_MESSAGES
                  ? r.intl.string(r.t["62sGhW"])
                  : null
            : t === S.Pl.MANAGE_MESSAGES
              ? r.intl.string(r.t.bU1J1V)
              : null;
    return i
        ? t === S.Pl.MANAGE_CHANNELS || t === S.Pl.MANAGE_THREADS
            ? r.intl.string(r.t.Han3PH)
            : t === S.Pl.MANAGE_MESSAGES
              ? r.intl.string(r.t.zSc2tb)
              : null
        : t === S.Pl.MANAGE_MESSAGES
          ? r.intl.string(r.t["2XIdPp"])
          : null;
}
