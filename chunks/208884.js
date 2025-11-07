E.d(i, {
    FX: () => M,
    Ny: () => o,
    WV: () => N,
    WW: () => s,
    _u: () => R,
    aW: () => g,
    ih: () => a,
    kv: () => I,
    s4: () => A,
    uu: () => O,
    vq: () => _,
    xU: () => T,
    zO: () => P,
}),
    E(539854),
    E(781311);
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
function s(t) {
    var i, E;
    return {
        [l.Pl.VIEW_CHANNEL.toString()]: {
            title: S.intl.string(S.t.uV83yi),
            description: S.t.ybTHLk,
            flag: l.Pl.VIEW_CHANNEL,
        },
        [l.Pl.MANAGE_CHANNELS.toString()]: {
            title: S.intl.string(S.t["9qLtWs"]),
            description: S.t.qfJnug,
            flag: l.Pl.MANAGE_CHANNELS,
        },
        [l.Pl.MANAGE_ROLES.toString()]: {
            title: S.intl.string(S.t["C8d+oG"]),
            description: S.t.buo9uw,
            flag: l.Pl.MANAGE_ROLES,
        },
        [l.Pl.MANAGE_GUILD_EXPRESSIONS.toString()]: {
            title: S.intl.string(S.t.bbuXIn),
            description: S.t["4vb3/6"],
            flag: l.Pl.MANAGE_GUILD_EXPRESSIONS,
        },
        [l.Pl.CREATE_GUILD_EXPRESSIONS.toString()]: {
            title: S.intl.string(S.t.HarVuP),
            description: S.t.gkdHvH,
            flag: l.Pl.CREATE_GUILD_EXPRESSIONS,
        },
        [l.Pl.VIEW_AUDIT_LOG.toString()]: {
            title: S.intl.string(S.t.fZgLpA),
            description: S.t["0hx75i"],
            flag: l.Pl.VIEW_AUDIT_LOG,
        },
        [l.Pl.VIEW_GUILD_ANALYTICS.toString()]: {
            title: S.intl.string(S.t["rQJBE/"]),
            description: S.t.whVKhX,
            flag: l.Pl.VIEW_GUILD_ANALYTICS,
        },
        [l.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
            title: S.intl.string(S.t["0lTLTv"]),
            description: S.t.mut6NV,
            flag: l.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS,
        },
        [l.Pl.MANAGE_WEBHOOKS.toString()]: {
            title: S.intl.string(S.t["/ADKmM"]),
            description: S.t.LczYqC,
            flag: l.Pl.MANAGE_WEBHOOKS,
        },
        [l.Pl.MANAGE_GUILD.toString()]: {
            title: S.intl.string(S.t.QZRcfO),
            description: S.t["KoQe/G"],
            flag: l.Pl.MANAGE_GUILD,
        },
        [l.Pl.CREATE_INSTANT_INVITE.toString()]: {
            title: S.intl.string(S.t.zJrgTG),
            description: S.t.PCFOZa,
            flag: l.Pl.CREATE_INSTANT_INVITE,
        },
        [l.Pl.CHANGE_NICKNAME.toString()]: {
            title: S.intl.string(S.t.dilOF6),
            description: S.t["b8B++j"],
            flag: l.Pl.CHANGE_NICKNAME,
        },
        [l.Pl.MANAGE_NICKNAMES.toString()]: {
            title: S.intl.string(S.t["t+Ct5x"]),
            description: S.t.hTnlMb,
            flag: l.Pl.MANAGE_NICKNAMES,
        },
        [l.Pl.KICK_MEMBERS.toString()]: {
            title: t.showMembershipManualApprovalPermissions ? S.intl.string(S.t["9TxXwb"]) : S.intl.string(S.t.pBNv6i),
            description: t.showMembershipManualApprovalPermissions ? S.t.hGBAnw : S.t.rwdPaE,
            flag: l.Pl.KICK_MEMBERS,
        },
        [l.Pl.BAN_MEMBERS.toString()]: {
            title: S.intl.string(S.t.oTBA7N),
            description: S.t["OqNY0/"],
            flag: l.Pl.BAN_MEMBERS,
        },
        [l.Pl.MODERATE_MEMBERS.toString()]: {
            title: S.intl.string(S.t["+RL6pz"]),
            description: S.t.T6bZsX,
            flag: l.Pl.MODERATE_MEMBERS,
        },
        [l.Pl.SEND_MESSAGES.toString()]: {
            title: S.intl.string(S.t.S1VOwd),
            description: S.t.prvWKm,
            flag: l.Pl.SEND_MESSAGES,
        },
        [l.Pl.EMBED_LINKS.toString()]: {
            title: S.intl.string(S.t["969dEL"]),
            description: S.t.ChoIiy,
            flag: l.Pl.EMBED_LINKS,
        },
        [l.Pl.ATTACH_FILES.toString()]: {
            title: S.intl.string(S.t["3AS4UM"]),
            description: S.t["/87mYH"],
            flag: l.Pl.ATTACH_FILES,
        },
        [l.Pl.ADD_REACTIONS.toString()]: {
            title: S.intl.string(S.t.yEoJAr),
            description: S.t.FEYwX7,
            flag: l.Pl.ADD_REACTIONS,
        },
        [l.Pl.USE_EXTERNAL_EMOJIS.toString()]: {
            title: S.intl.string(S.t["+bxf3H"]),
            description: S.t.POeVIu,
            flag: l.Pl.USE_EXTERNAL_EMOJIS,
        },
        [l.Pl.USE_EXTERNAL_STICKERS.toString()]: {
            title: S.intl.string(S.t.ERNhYf),
            description: S.t.AdXVhI,
            flag: l.Pl.USE_EXTERNAL_STICKERS,
        },
        [l.Pl.MENTION_EVERYONE.toString()]: {
            title: t.inGameMentionsExperiment ? S.intl.string(S.t.lEO7Wr) : S.intl.string(S.t.Y78KGC),
            description: t.inGameMentionsExperiment ? S.intl.string(S.t.wdHpIC) : S.intl.string(S.t.ryj6N5),
            flag: l.Pl.MENTION_EVERYONE,
        },
        [l.Pl.MANAGE_MESSAGES.toString()]: {
            title: S.intl.string(S.t["6lU9xM"]),
            description: S.t["RXMG/+"],
            flag: l.Pl.MANAGE_MESSAGES,
        },
        [l.Pl.PIN_MESSAGES.toString()]: {
            title: S.intl.string(S.t.Y5BI39),
            description: S.t["LN/K3x"],
            flag: l.Pl.PIN_MESSAGES,
        },
        [l.Pl.BYPASS_SLOWMODE.toString()]: {
            title: S.intl.string(S.t.kqcjeV),
            description: S.t.S2ZE5c,
            flag: l.Pl.BYPASS_SLOWMODE,
        },
        [l.Pl.READ_MESSAGE_HISTORY.toString()]: {
            title: S.intl.string(S.t.l9ufaR),
            description: S.t.rmHPFR,
            flag: l.Pl.READ_MESSAGE_HISTORY,
        },
        [l.Pl.SEND_TTS_MESSAGES.toString()]: {
            title: S.intl.string(S.t.mMbwh7),
            description: S.t.D6x8Nr,
            flag: l.Pl.SEND_TTS_MESSAGES,
        },
        [l.Pl.USE_APPLICATION_COMMANDS.toString()]: {
            title: S.intl.string(S.t.nkoPOt),
            description: S.t.pJrJ35,
            flag: l.Pl.USE_APPLICATION_COMMANDS,
        },
        [l.Pl.USE_EXTERNAL_APPS.toString()]: {
            title: S.intl.string(S.t.TtA5rK),
            description: S.t.mzLoDY,
            flag: l.Pl.USE_EXTERNAL_APPS,
        },
        [l.Pl.SEND_VOICE_MESSAGES.toString()]: {
            title: S.intl.string(S.t.WlWSBT),
            description: S.t.pDuyi0,
            flag: l.Pl.SEND_VOICE_MESSAGES,
        },
        [l.Pl.SEND_POLLS.toString()]: {
            title: S.intl.string(S.t.UMQ7Ww),
            description: S.t["Xl6W+F"],
            flag: l.Pl.SEND_POLLS,
        },
        [l.Pl.CONNECT.toString()]: {
            title: S.intl.string(S.t.S0W8Z5),
            description: S.t["3GCm/f"],
            flag: l.Pl.CONNECT,
        },
        [l.Pl.SPEAK.toString()]: {
            title: S.intl.string(S.t["8w1tIR"]),
            description: S.t.y4MncF,
            flag: l.Pl.SPEAK,
        },
        [l.Pl.STREAM.toString()]: {
            title: S.intl.string(S.t.FlNoSV),
            description: S.t["6Z0j9v"],
            flag: l.Pl.STREAM,
        },
        [l.Pl.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: S.intl.string(S.t.rLSGeh),
            description: S.t.BEqU5H,
            flag: l.Pl.USE_EMBEDDED_ACTIVITIES,
        },
        [l.Pl.USE_SOUNDBOARD.toString()]: {
            title: S.intl.string(S.t.Bco7NG),
            description: null != (i = null == t ? void 0 : t.SOUNDBOARD_DESCRIPTION) ? i : S.t["+8p+fc"],
            flag: l.Pl.USE_SOUNDBOARD,
        },
        [l.Pl.USE_EXTERNAL_SOUNDS.toString()]: {
            title: S.intl.string(S.t.pwaVJ6),
            description: S.t.qDpPtX,
            flag: l.Pl.USE_EXTERNAL_SOUNDS,
        },
        [l.Pl.USE_VAD.toString()]: {
            title: S.intl.string(S.t["08zAV7"]),
            description: S.t["7CHjmc"],
            flag: l.Pl.USE_VAD,
        },
        [l.Pl.PRIORITY_SPEAKER.toString()]: {
            title: S.intl.string(S.t.BVK71i),
            description: null != (E = null == t ? void 0 : t.PRIORITY_SPEAKER_DESCRIPTION) ? E : S.t.OJkrro,
            flag: l.Pl.PRIORITY_SPEAKER,
        },
        [l.Pl.MUTE_MEMBERS.toString()]: {
            title: S.intl.string(S.t["8EI30/"]),
            description: S.t.PIhGA1,
            flag: l.Pl.MUTE_MEMBERS,
        },
        [l.Pl.DEAFEN_MEMBERS.toString()]: {
            title: S.intl.string(S.t["9L47Fr"]),
            description: S.t["FQr3+t"],
            flag: l.Pl.DEAFEN_MEMBERS,
        },
        [l.Pl.MOVE_MEMBERS.toString()]: {
            title: S.intl.string(S.t.YtjJPQ),
            description: S.t.SEe0Gp,
            flag: l.Pl.MOVE_MEMBERS,
        },
        [l.Pl.REQUEST_TO_SPEAK.toString()]: {
            title: S.intl.string(S.t["5kicT2"]),
            description: S.t["yNE+Q5"],
            flag: l.Pl.REQUEST_TO_SPEAK,
            isExperimental: !0,
        },
        [l.Pl.ADMINISTRATOR.toString()]: {
            title: S.intl.string(S.t.PGvZqX),
            description: "string" == typeof S.t.UJxMrK ? S.t.UJxMrK : S.intl.format(S.t.UJxMrK, {}),
            flag: l.Pl.ADMINISTRATOR,
        },
        [l.Pl.MANAGE_EVENTS.toString()]: {
            title: S.intl.string(S.t.HIgA5a),
            description: S.t["SL+qgG"],
            flag: l.Pl.MANAGE_EVENTS,
        },
        [l.Pl.CREATE_EVENTS.toString()]: {
            title: S.intl.string(S.t.qyjZua),
            description: S.t.bQEFJZ,
            flag: l.Pl.CREATE_EVENTS,
        },
        [l.Pl.MANAGE_THREADS.toString()]: {
            title: S.intl.string(S.t.QKe7Q3),
            description: S.t.QAxIIt,
            flag: l.Pl.MANAGE_THREADS,
        },
        [l.Pl.CREATE_PUBLIC_THREADS.toString()]: {
            title: S.intl.string(S.t["25rKnX"]),
            description: S.t.ODCYj8,
            flag: l.Pl.CREATE_PUBLIC_THREADS,
        },
        [l.Pl.CREATE_PRIVATE_THREADS.toString()]: {
            title: S.intl.string(S.t.QwbTSa),
            description: S.t["G/cc3l"],
            flag: l.Pl.CREATE_PRIVATE_THREADS,
        },
        [l.Pl.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: S.intl.string(S.t["5QlVGy"]),
            description: S.t.C2ZPE3,
            flag: l.Pl.SEND_MESSAGES_IN_THREADS,
        },
        [l.Pl.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: S.intl.string(S.t.VBwkUf),
            description: S.t.C6BzXx,
            flag: l.Pl.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
function A(t) {
    let i,
        E = s(t),
        n = [
            (function (t, i) {
                let E = [
                    l.Pl.VIEW_CHANNEL,
                    l.Pl.MANAGE_CHANNELS,
                    l.Pl.MANAGE_ROLES,
                    l.Pl.CREATE_GUILD_EXPRESSIONS,
                    l.Pl.MANAGE_GUILD_EXPRESSIONS,
                    l.Pl.VIEW_AUDIT_LOG,
                    l.Pl.VIEW_GUILD_ANALYTICS,
                ];
                return (
                    i.showCreatorMonetizationAnalyticsPermission && E.push(l.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS),
                    E.push(l.Pl.MANAGE_WEBHOOKS),
                    E.push(l.Pl.MANAGE_GUILD),
                    r({
                        title: S.intl.string(S.t["mYck+B"]),
                        permissions: e(E, t),
                    })
                );
            })(E, t),
            (function (t) {
                let i = [
                    l.Pl.CREATE_INSTANT_INVITE,
                    l.Pl.CHANGE_NICKNAME,
                    l.Pl.MANAGE_NICKNAMES,
                    l.Pl.KICK_MEMBERS,
                    l.Pl.BAN_MEMBERS,
                    l.Pl.MODERATE_MEMBERS,
                ];
                return r({
                    title: S.intl.string(S.t.Ny49TN),
                    permissions: e(i, t),
                });
            })(E),
            ((i = [
                l.Pl.SEND_MESSAGES,
                l.Pl.SEND_MESSAGES_IN_THREADS,
                l.Pl.CREATE_PUBLIC_THREADS,
                l.Pl.CREATE_PRIVATE_THREADS,
                l.Pl.EMBED_LINKS,
                l.Pl.ATTACH_FILES,
                l.Pl.ADD_REACTIONS,
                l.Pl.USE_EXTERNAL_EMOJIS,
                l.Pl.USE_EXTERNAL_STICKERS,
                l.Pl.USE_EXTERNAL_SOUNDS,
                l.Pl.MENTION_EVERYONE,
                l.Pl.MANAGE_MESSAGES,
                l.Pl.PIN_MESSAGES,
                l.Pl.BYPASS_SLOWMODE,
                l.Pl.MANAGE_THREADS,
                l.Pl.READ_MESSAGE_HISTORY,
                l.Pl.SEND_TTS_MESSAGES,
                l.Pl.SEND_VOICE_MESSAGES,
                l.Pl.SEND_POLLS,
            ]),
            t.inSoundmojiExperiment || (i = i.filter((t) => t !== l.Pl.USE_EXTERNAL_SOUNDS)),
            t.inBypassSlowmodePermissionExperiment || (i = i.filter((t) => t !== l.Pl.BYPASS_SLOWMODE)),
            r({
                title: S.intl.string(S.t.cKobO5),
                permissions: e(i, E),
            })),
            (function (t, i) {
                let E = [
                    l.Pl.CONNECT,
                    l.Pl.SPEAK,
                    l.Pl.STREAM,
                    l.Pl.USE_SOUNDBOARD,
                    l.Pl.USE_EXTERNAL_SOUNDS,
                    l.Pl.USE_VAD,
                    l.Pl.PRIORITY_SPEAKER,
                    l.Pl.MUTE_MEMBERS,
                    l.Pl.DEAFEN_MEMBERS,
                    l.Pl.MOVE_MEMBERS,
                    l.Pl.SET_VOICE_CHANNEL_STATUS,
                ];
                return r({
                    title: S.intl.string(S.t["46Ra1b"]),
                    permissions: e(E, t),
                });
            })(E, 0),
            (function (t) {
                let i = [l.Pl.USE_APPLICATION_COMMANDS, l.Pl.USE_EMBEDDED_ACTIVITIES, l.Pl.USE_EXTERNAL_APPS];
                return r({
                    title: S.intl.string(S.t["rrh/W6"]),
                    permissions: e(i, t),
                });
            })(E),
        ];
    return (
        t.showStageChannelPermissions &&
            n.push(
                r(
                    {
                        title: S.intl.string(S.t.yniauk),
                        permissions: e([l.Pl.REQUEST_TO_SPEAK], E),
                    },
                    t.showExperimental,
                ),
            ),
        n.push(
            r(
                {
                    title: S.intl.string(S.t.b8lplT),
                    permissions: e([l.Pl.CREATE_EVENTS, l.Pl.MANAGE_EVENTS], E),
                },
                t.showExperimental,
            ),
        ),
        n.push(
            r({
                title: S.intl.string(S.t["3uI5CX"]),
                permissions: e([l.Pl.ADMINISTRATOR], E),
            }),
        ),
        n
    );
}
function P(t, i) {
    let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showManageWebhooks: !0 };
    return {
        title: i,
        permissions: e(
            (null == E ? void 0 : E.showManageWebhooks)
                ? [l.Pl.VIEW_CHANNEL, l.Pl.MANAGE_CHANNELS, l.Pl.MANAGE_ROLES, l.Pl.MANAGE_WEBHOOKS]
                : [l.Pl.VIEW_CHANNEL, l.Pl.MANAGE_CHANNELS, l.Pl.MANAGE_ROLES],
            t,
        ),
    };
}
function o(t, i) {
    return {
        title: i,
        permissions: e([l.Pl.CREATE_INSTANT_INVITE], t),
    };
}
function _(t, i, E) {
    let n = [
        l.Pl.SEND_MESSAGES,
        l.Pl.SEND_MESSAGES_IN_THREADS,
        l.Pl.CREATE_PUBLIC_THREADS,
        l.Pl.CREATE_PRIVATE_THREADS,
        l.Pl.EMBED_LINKS,
        l.Pl.ATTACH_FILES,
        l.Pl.ADD_REACTIONS,
        l.Pl.USE_EXTERNAL_EMOJIS,
        l.Pl.USE_EXTERNAL_STICKERS,
        l.Pl.USE_EXTERNAL_SOUNDS,
        l.Pl.MENTION_EVERYONE,
        l.Pl.MANAGE_MESSAGES,
        l.Pl.PIN_MESSAGES,
        l.Pl.BYPASS_SLOWMODE,
        l.Pl.MANAGE_THREADS,
        l.Pl.READ_MESSAGE_HISTORY,
        l.Pl.SEND_TTS_MESSAGES,
        l.Pl.SEND_VOICE_MESSAGES,
        l.Pl.SEND_POLLS,
    ];
    return (
        E.inSoundmojiExperiment || (n = n.filter((t) => t !== l.Pl.USE_EXTERNAL_SOUNDS)),
        (E.showPrivateThreads && E.showCreateThreads) || (n = n.filter((t) => t !== l.Pl.CREATE_PRIVATE_THREADS)),
        E.showCreateThreads || (n = n.filter((t) => t !== l.Pl.CREATE_PUBLIC_THREADS)),
        E.inBypassSlowmodePermissionExperiment || (n = n.filter((t) => t !== l.Pl.BYPASS_SLOWMODE)),
        {
            title: i,
            description: E.sectionDescription,
            permissions: e(n, t),
        }
    );
}
function N(t, i) {
    return {
        title: i,
        permissions: e(
            [
                l.Pl.CONNECT,
                l.Pl.SPEAK,
                l.Pl.STREAM,
                l.Pl.USE_SOUNDBOARD,
                l.Pl.USE_EXTERNAL_SOUNDS,
                l.Pl.USE_VAD,
                l.Pl.PRIORITY_SPEAKER,
                l.Pl.MUTE_MEMBERS,
                l.Pl.DEAFEN_MEMBERS,
                l.Pl.MOVE_MEMBERS,
                l.Pl.SET_VOICE_CHANNEL_STATUS,
            ],
            t,
        ),
    };
}
function g(t, i, E) {
    let n = [
        l.Pl.SEND_MESSAGES,
        l.Pl.EMBED_LINKS,
        l.Pl.ATTACH_FILES,
        l.Pl.ADD_REACTIONS,
        l.Pl.USE_EXTERNAL_EMOJIS,
        l.Pl.USE_EXTERNAL_STICKERS,
        l.Pl.USE_EXTERNAL_SOUNDS,
        l.Pl.MENTION_EVERYONE,
        l.Pl.MANAGE_MESSAGES,
        l.Pl.BYPASS_SLOWMODE,
        l.Pl.READ_MESSAGE_HISTORY,
        l.Pl.SEND_TTS_MESSAGES,
        l.Pl.SEND_VOICE_MESSAGES,
        l.Pl.SEND_POLLS,
    ];
    return (
        E.inSoundmojiExperiment || (n = n.filter((t) => t !== l.Pl.USE_EXTERNAL_SOUNDS)),
        E.inBypassSlowmodePermissionExperiment || (n = n.filter((t) => t !== l.Pl.BYPASS_SLOWMODE)),
        {
            title: i,
            description: E.sectionDescription,
            permissions: e(n, t),
        }
    );
}
function T(t, i) {
    let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showActivities: !0 };
    return {
        title: i,
        permissions: e(
            [
                l.Pl.USE_APPLICATION_COMMANDS,
                E.showActivities ? l.Pl.USE_EMBEDDED_ACTIVITIES : null,
                l.Pl.USE_EXTERNAL_APPS,
            ].filter(n.lm),
            t,
        ),
    };
}
function M(t, i, E) {
    return {
        title: i,
        permissions: e(
            E
                ? [l.Pl.CONNECT, l.Pl.STREAM, l.Pl.MUTE_MEMBERS, l.Pl.MOVE_MEMBERS]
                : [l.Pl.CONNECT, l.Pl.MUTE_MEMBERS, l.Pl.MOVE_MEMBERS],
            t,
        ),
    };
}
function I(t, i) {
    return {
        title: i,
        permissions: e([l.Pl.REQUEST_TO_SPEAK, l.Pl.MENTION_EVERYONE], t),
    };
}
function O(t, i) {
    return {
        title: i,
        permissions: e([l.Pl.CREATE_EVENTS, l.Pl.MANAGE_EVENTS], t),
    };
}
function R(t) {
    return null == t ? t : "string" == typeof t ? t.trim() : "function" == typeof t ? S.intl.format(t, {}) : t;
}
function a(t, i) {
    return i
        ? t === l.Pl.MANAGE_CHANNELS || t === l.Pl.MANAGE_THREADS
            ? S.intl.string(S.t.Han3PH)
            : t === l.Pl.MANAGE_MESSAGES
              ? S.intl.string(S.t.zSc2tb)
              : null
        : t === l.Pl.MANAGE_MESSAGES
          ? S.intl.string(S.t["2XIdPp"])
          : null;
}
