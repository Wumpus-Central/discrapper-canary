E.d(i, {
    BK: () => o,
    LZ: () => _,
    Nk: () => R,
    Si: () => x,
    eD: () => s,
    iG: () => N,
    k6: () => g,
    m6: () => B,
    mL: () => l,
    od: () => T,
    qI: () => I,
    xd: () => M,
}),
    E(321073);
var n = E(403362),
    S = E(818348),
    r = E(985018);
function A(t) {
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
    return {
        [S.xB.VIEW_CHANNEL.toString()]: {
            title: r.intl.string(r.t.uV83yi),
            description: r.t.ybTHLk,
            flag: S.xB.VIEW_CHANNEL,
        },
        [S.xB.MANAGE_CHANNELS.toString()]: {
            title: r.intl.string(r.t["9qLtWs"]),
            description: r.t.qfJnug,
            flag: S.xB.MANAGE_CHANNELS,
        },
        [S.xB.MANAGE_ROLES.toString()]: {
            title: r.intl.string(r.t["C8d+oG"]),
            description: r.t.buo9uw,
            flag: S.xB.MANAGE_ROLES,
        },
        [S.xB.MANAGE_GUILD_EXPRESSIONS.toString()]: {
            title: r.intl.string(r.t.bbuXIn),
            description: r.t["4vb3/6"],
            flag: S.xB.MANAGE_GUILD_EXPRESSIONS,
        },
        [S.xB.CREATE_GUILD_EXPRESSIONS.toString()]: {
            title: r.intl.string(r.t.HarVuP),
            description: r.t.gkdHvH,
            flag: S.xB.CREATE_GUILD_EXPRESSIONS,
        },
        [S.xB.VIEW_AUDIT_LOG.toString()]: {
            title: r.intl.string(r.t.fZgLpA),
            description: r.t["0hx75i"],
            flag: S.xB.VIEW_AUDIT_LOG,
        },
        [S.xB.VIEW_GUILD_ANALYTICS.toString()]: {
            title: r.intl.string(r.t["rQJBE/"]),
            description: r.t.whVKhX,
            flag: S.xB.VIEW_GUILD_ANALYTICS,
        },
        [S.xB.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
            title: r.intl.string(r.t["0lTLTv"]),
            description: r.t.mut6NV,
            flag: S.xB.VIEW_CREATOR_MONETIZATION_ANALYTICS,
        },
        [S.xB.MANAGE_WEBHOOKS.toString()]: {
            title: r.intl.string(r.t["/ADKmM"]),
            description: r.t.LczYqC,
            flag: S.xB.MANAGE_WEBHOOKS,
        },
        [S.xB.MANAGE_GUILD.toString()]: {
            title: r.intl.string(r.t.QZRcfO),
            description: r.t["KoQe/G"],
            flag: S.xB.MANAGE_GUILD,
        },
        [S.xB.CREATE_INSTANT_INVITE.toString()]: {
            title: r.intl.string(r.t.zJrgTG),
            description: r.t.PCFOZa,
            flag: S.xB.CREATE_INSTANT_INVITE,
        },
        [S.xB.CHANGE_NICKNAME.toString()]: {
            title: r.intl.string(r.t.dilOF6),
            description: r.t["b8B++j"],
            flag: S.xB.CHANGE_NICKNAME,
        },
        [S.xB.MANAGE_NICKNAMES.toString()]: {
            title: r.intl.string(r.t["t+Ct5x"]),
            description: r.t.hTnlMb,
            flag: S.xB.MANAGE_NICKNAMES,
        },
        [S.xB.KICK_MEMBERS.toString()]: {
            title: t.showMembershipManualApprovalPermissions ? r.intl.string(r.t["9TxXwb"]) : r.intl.string(r.t.pBNv6i),
            description: t.showMembershipManualApprovalPermissions ? r.t.hGBAnw : r.t.rwdPaE,
            flag: S.xB.KICK_MEMBERS,
        },
        [S.xB.BAN_MEMBERS.toString()]: {
            title: r.intl.string(r.t.oTBA7N),
            description: r.t["OqNY0/"],
            flag: S.xB.BAN_MEMBERS,
        },
        [S.xB.MODERATE_MEMBERS.toString()]: {
            title: r.intl.string(r.t["+RL6pz"]),
            description: r.t.T6bZsX,
            flag: S.xB.MODERATE_MEMBERS,
        },
        [S.xB.SEND_MESSAGES.toString()]: {
            title: r.intl.string(r.t.S1VOwd),
            description: r.t.prvWKm,
            flag: S.xB.SEND_MESSAGES,
        },
        [S.xB.EMBED_LINKS.toString()]: {
            title: r.intl.string(r.t["969dEL"]),
            description: r.t.ChoIiy,
            flag: S.xB.EMBED_LINKS,
        },
        [S.xB.ATTACH_FILES.toString()]: {
            title: r.intl.string(r.t["3AS4UM"]),
            description: r.t["/87mYH"],
            flag: S.xB.ATTACH_FILES,
        },
        [S.xB.ADD_REACTIONS.toString()]: {
            title: r.intl.string(r.t.yEoJAr),
            description: r.t.FEYwX7,
            flag: S.xB.ADD_REACTIONS,
        },
        [S.xB.USE_EXTERNAL_EMOJIS.toString()]: {
            title: r.intl.string(r.t["+bxf3H"]),
            description: r.t.POeVIu,
            flag: S.xB.USE_EXTERNAL_EMOJIS,
        },
        [S.xB.USE_EXTERNAL_STICKERS.toString()]: {
            title: r.intl.string(r.t.ERNhYf),
            description: r.t.AdXVhI,
            flag: S.xB.USE_EXTERNAL_STICKERS,
        },
        [S.xB.MENTION_EVERYONE.toString()]: {
            title: r.intl.string(r.t.Y78KGC),
            description: r.intl.string(r.t.ryj6N5),
            flag: S.xB.MENTION_EVERYONE,
        },
        [S.xB.MANAGE_MESSAGES.toString()]: {
            title: r.intl.string(r.t["6lU9xM"]),
            description: r.t["RXMG/+"],
            flag: S.xB.MANAGE_MESSAGES,
        },
        [S.xB.PIN_MESSAGES.toString()]: {
            title: r.intl.string(r.t.Y5BI39),
            description: r.t["LN/K3x"],
            flag: S.xB.PIN_MESSAGES,
        },
        [S.xB.BYPASS_SLOWMODE.toString()]: {
            title: r.intl.string(r.t.kqcjeV),
            description: r.t.S2ZE5c,
            flag: S.xB.BYPASS_SLOWMODE,
        },
        [S.xB.MANAGE_OFFICIAL_MESSAGES.toString()]: {
            title: r.intl.string(r.t.Aj9ruN),
            description: r.t.pfEgBm,
            flag: S.xB.MANAGE_OFFICIAL_MESSAGES,
        },
        [S.xB.READ_MESSAGE_HISTORY.toString()]: {
            title: r.intl.string(r.t.l9ufaR),
            description: r.t.rmHPFR,
            flag: S.xB.READ_MESSAGE_HISTORY,
        },
        [S.xB.SEND_TTS_MESSAGES.toString()]: {
            title: r.intl.string(r.t.mMbwh7),
            description: r.t.D6x8Nr,
            flag: S.xB.SEND_TTS_MESSAGES,
        },
        [S.xB.USE_APPLICATION_COMMANDS.toString()]: {
            title: r.intl.string(r.t.nkoPOt),
            description: r.t.pJrJ35,
            flag: S.xB.USE_APPLICATION_COMMANDS,
        },
        [S.xB.USE_EXTERNAL_APPS.toString()]: {
            title: r.intl.string(r.t.TtA5rK),
            description: r.t.mzLoDY,
            flag: S.xB.USE_EXTERNAL_APPS,
        },
        [S.xB.SEND_VOICE_MESSAGES.toString()]: {
            title: r.intl.string(r.t.WlWSBT),
            description: r.t.pDuyi0,
            flag: S.xB.SEND_VOICE_MESSAGES,
        },
        [S.xB.SEND_POLLS.toString()]: {
            title: r.intl.string(r.t.UMQ7Ww),
            description: r.t["Xl6W+F"],
            flag: S.xB.SEND_POLLS,
        },
        [S.xB.CONNECT.toString()]: { title: r.intl.string(r.t.S0W8Z5), description: r.t["3GCm/f"], flag: S.xB.CONNECT },
        [S.xB.SPEAK.toString()]: { title: r.intl.string(r.t["8w1tIR"]), description: r.t.y4MncF, flag: S.xB.SPEAK },
        [S.xB.STREAM.toString()]: { title: r.intl.string(r.t.FlNoSV), description: r.t["6Z0j9v"], flag: S.xB.STREAM },
        [S.xB.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: r.intl.string(r.t.rLSGeh),
            description: r.t.BEqU5H,
            flag: S.xB.USE_EMBEDDED_ACTIVITIES,
        },
        [S.xB.USE_SOUNDBOARD.toString()]: {
            title: r.intl.string(r.t.Bco7NG),
            description: t?.SOUNDBOARD_DESCRIPTION ?? r.t["+8p+fc"],
            flag: S.xB.USE_SOUNDBOARD,
        },
        [S.xB.USE_EXTERNAL_SOUNDS.toString()]: {
            title: r.intl.string(r.t.pwaVJ6),
            description: r.t.qDpPtX,
            flag: S.xB.USE_EXTERNAL_SOUNDS,
        },
        [S.xB.USE_VAD.toString()]: {
            title: r.intl.string(r.t["08zAV7"]),
            description: r.t["7CHjmc"],
            flag: S.xB.USE_VAD,
        },
        [S.xB.PRIORITY_SPEAKER.toString()]: {
            title: r.intl.string(r.t.BVK71i),
            description: t?.PRIORITY_SPEAKER_DESCRIPTION ?? r.t.OJkrro,
            flag: S.xB.PRIORITY_SPEAKER,
        },
        [S.xB.MUTE_MEMBERS.toString()]: {
            title: r.intl.string(r.t["8EI30/"]),
            description: r.t.PIhGA1,
            flag: S.xB.MUTE_MEMBERS,
        },
        [S.xB.DEAFEN_MEMBERS.toString()]: {
            title: r.intl.string(r.t["9L47Fr"]),
            description: r.t["FQr3+t"],
            flag: S.xB.DEAFEN_MEMBERS,
        },
        [S.xB.MOVE_MEMBERS.toString()]: {
            title: r.intl.string(r.t.YtjJPQ),
            description: r.t.SEe0Gp,
            flag: S.xB.MOVE_MEMBERS,
        },
        [S.xB.REQUEST_TO_SPEAK.toString()]: {
            title: r.intl.string(r.t["5kicT2"]),
            description: r.t["yNE+Q5"],
            flag: S.xB.REQUEST_TO_SPEAK,
            isExperimental: !0,
        },
        [S.xB.ADMINISTRATOR.toString()]: {
            title: r.intl.string(r.t.PGvZqX),
            description: "string" == typeof r.t.UJxMrK ? r.t.UJxMrK : r.intl.format(r.t.UJxMrK, {}),
            flag: S.xB.ADMINISTRATOR,
        },
        [S.xB.MANAGE_EVENTS.toString()]: {
            title: r.intl.string(r.t.HIgA5a),
            description: r.t["SL+qgG"],
            flag: S.xB.MANAGE_EVENTS,
        },
        [S.xB.CREATE_EVENTS.toString()]: {
            title: r.intl.string(r.t.qyjZua),
            description: r.t.bQEFJZ,
            flag: S.xB.CREATE_EVENTS,
        },
        [S.xB.MANAGE_THREADS.toString()]: {
            title: r.intl.string(r.t.QKe7Q3),
            description: r.t.QAxIIt,
            flag: S.xB.MANAGE_THREADS,
        },
        [S.xB.CREATE_PUBLIC_THREADS.toString()]: {
            title: r.intl.string(r.t["25rKnX"]),
            description: r.t.ODCYj8,
            flag: S.xB.CREATE_PUBLIC_THREADS,
        },
        [S.xB.CREATE_PRIVATE_THREADS.toString()]: {
            title: r.intl.string(r.t.QwbTSa),
            description: r.t["G/cc3l"],
            flag: S.xB.CREATE_PRIVATE_THREADS,
        },
        [S.xB.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: r.intl.string(r.t["5QlVGy"]),
            description: r.t.C2ZPE3,
            flag: S.xB.SEND_MESSAGES_IN_THREADS,
        },
        [S.xB.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: r.intl.string(r.t.VBwkUf),
            description: t.enableHangoutWindow ? r.t.CYcJ6H : r.t.C6BzXx,
            flag: S.xB.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
function _(t) {
    let i,
        E,
        n,
        _,
        l,
        B = s(t),
        o = [
            ((i = [
                S.xB.VIEW_CHANNEL,
                S.xB.MANAGE_CHANNELS,
                S.xB.MANAGE_ROLES,
                S.xB.CREATE_GUILD_EXPRESSIONS,
                S.xB.MANAGE_GUILD_EXPRESSIONS,
                S.xB.VIEW_AUDIT_LOG,
                S.xB.VIEW_GUILD_ANALYTICS,
            ]),
            t.showCreatorMonetizationAnalyticsPermission && i.push(S.xB.VIEW_CREATOR_MONETIZATION_ANALYTICS),
            i.push(S.xB.MANAGE_WEBHOOKS),
            i.push(S.xB.MANAGE_GUILD),
            A({ title: r.intl.string(r.t["mYck+B"]), permissions: e(i, B) })),
            ((E = [
                S.xB.CREATE_INSTANT_INVITE,
                S.xB.CHANGE_NICKNAME,
                S.xB.MANAGE_NICKNAMES,
                S.xB.KICK_MEMBERS,
                S.xB.BAN_MEMBERS,
                S.xB.MODERATE_MEMBERS,
            ]),
            A({ title: r.intl.string(r.t.Ny49TN), permissions: e(E, B) })),
            ((n = [
                S.xB.SEND_MESSAGES,
                S.xB.SEND_MESSAGES_IN_THREADS,
                S.xB.CREATE_PUBLIC_THREADS,
                S.xB.CREATE_PRIVATE_THREADS,
                S.xB.EMBED_LINKS,
                S.xB.ATTACH_FILES,
                S.xB.ADD_REACTIONS,
                S.xB.USE_EXTERNAL_EMOJIS,
                S.xB.USE_EXTERNAL_STICKERS,
                S.xB.USE_EXTERNAL_SOUNDS,
                S.xB.MENTION_EVERYONE,
                S.xB.MANAGE_MESSAGES,
                S.xB.PIN_MESSAGES,
                S.xB.MANAGE_OFFICIAL_MESSAGES,
                S.xB.BYPASS_SLOWMODE,
                S.xB.MANAGE_THREADS,
                S.xB.READ_MESSAGE_HISTORY,
                S.xB.SEND_TTS_MESSAGES,
                S.xB.SEND_VOICE_MESSAGES,
                S.xB.SEND_POLLS,
            ]),
            t.inSoundmojiExperiment || (n = n.filter((t) => t !== S.xB.USE_EXTERNAL_SOUNDS)),
            A({ title: r.intl.string(r.t.cKobO5), permissions: e(n, B) })),
            ((_ = [
                S.xB.CONNECT,
                S.xB.SPEAK,
                S.xB.STREAM,
                S.xB.USE_SOUNDBOARD,
                S.xB.USE_EXTERNAL_SOUNDS,
                S.xB.USE_VAD,
                S.xB.PRIORITY_SPEAKER,
                S.xB.MUTE_MEMBERS,
                S.xB.DEAFEN_MEMBERS,
                S.xB.MOVE_MEMBERS,
                S.xB.SET_VOICE_CHANNEL_STATUS,
            ]),
            A({ title: r.intl.string(r.t["46Ra1b"]), permissions: e(_, B) })),
            ((l = [S.xB.USE_APPLICATION_COMMANDS, S.xB.USE_EMBEDDED_ACTIVITIES, S.xB.USE_EXTERNAL_APPS]),
            A({ title: r.intl.string(r.t["rrh/W6"]), permissions: e(l, B) })),
        ];
    return (
        t.showStageChannelPermissions &&
            o.push(
                A({ title: r.intl.string(r.t.yniauk), permissions: e([S.xB.REQUEST_TO_SPEAK], B) }, t.showExperimental),
            ),
        o.push(
            A(
                { title: r.intl.string(r.t.b8lplT), permissions: e([S.xB.CREATE_EVENTS, S.xB.MANAGE_EVENTS], B) },
                t.showExperimental,
            ),
        ),
        o.push(A({ title: r.intl.string(r.t["3uI5CX"]), permissions: e([S.xB.ADMINISTRATOR], B) })),
        o
    );
}
function l(t, i) {
    let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showManageWebhooks: !0 };
    return {
        title: i,
        permissions: e(
            E?.showManageWebhooks
                ? [S.xB.VIEW_CHANNEL, S.xB.MANAGE_CHANNELS, S.xB.MANAGE_ROLES, S.xB.MANAGE_WEBHOOKS]
                : [S.xB.VIEW_CHANNEL, S.xB.MANAGE_CHANNELS, S.xB.MANAGE_ROLES],
            t,
        ),
    };
}
function B(t, i) {
    return { title: i, permissions: e([S.xB.CREATE_INSTANT_INVITE], t) };
}
function o(t, i, E) {
    let n = [
        S.xB.SEND_MESSAGES,
        S.xB.SEND_MESSAGES_IN_THREADS,
        S.xB.CREATE_PUBLIC_THREADS,
        S.xB.CREATE_PRIVATE_THREADS,
        S.xB.EMBED_LINKS,
        S.xB.ATTACH_FILES,
        S.xB.ADD_REACTIONS,
        S.xB.USE_EXTERNAL_EMOJIS,
        S.xB.USE_EXTERNAL_STICKERS,
        S.xB.USE_EXTERNAL_SOUNDS,
        S.xB.MENTION_EVERYONE,
        S.xB.MANAGE_MESSAGES,
        S.xB.PIN_MESSAGES,
        S.xB.MANAGE_OFFICIAL_MESSAGES,
        S.xB.BYPASS_SLOWMODE,
        S.xB.MANAGE_THREADS,
        S.xB.READ_MESSAGE_HISTORY,
        S.xB.SEND_TTS_MESSAGES,
        S.xB.SEND_VOICE_MESSAGES,
        S.xB.SEND_POLLS,
    ];
    return (
        E.inSoundmojiExperiment || (n = n.filter((t) => t !== S.xB.USE_EXTERNAL_SOUNDS)),
        (E.showPrivateThreads && E.showCreateThreads) || (n = n.filter((t) => t !== S.xB.CREATE_PRIVATE_THREADS)),
        E.showCreateThreads || (n = n.filter((t) => t !== S.xB.CREATE_PUBLIC_THREADS)),
        { title: i, description: E.sectionDescription, permissions: e(n, t) }
    );
}
function N(t, i) {
    return {
        title: i,
        permissions: e(
            [
                S.xB.CONNECT,
                S.xB.SPEAK,
                S.xB.STREAM,
                S.xB.USE_SOUNDBOARD,
                S.xB.USE_EXTERNAL_SOUNDS,
                S.xB.USE_VAD,
                S.xB.PRIORITY_SPEAKER,
                S.xB.MUTE_MEMBERS,
                S.xB.DEAFEN_MEMBERS,
                S.xB.MOVE_MEMBERS,
                S.xB.SET_VOICE_CHANNEL_STATUS,
            ],
            t,
        ),
    };
}
function g(t, i, E) {
    let n = [
        S.xB.SEND_MESSAGES,
        S.xB.EMBED_LINKS,
        S.xB.ATTACH_FILES,
        S.xB.ADD_REACTIONS,
        S.xB.USE_EXTERNAL_EMOJIS,
        S.xB.USE_EXTERNAL_STICKERS,
        S.xB.USE_EXTERNAL_SOUNDS,
        S.xB.MENTION_EVERYONE,
        S.xB.MANAGE_MESSAGES,
        S.xB.BYPASS_SLOWMODE,
        S.xB.READ_MESSAGE_HISTORY,
        S.xB.SEND_TTS_MESSAGES,
        S.xB.SEND_VOICE_MESSAGES,
        S.xB.SEND_POLLS,
    ];
    return (
        E.inSoundmojiExperiment || (n = n.filter((t) => t !== S.xB.USE_EXTERNAL_SOUNDS)),
        { title: i, description: E.sectionDescription, permissions: e(n, t) }
    );
}
function x(t, i) {
    let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showActivities: !0 };
    return {
        title: i,
        permissions: e(
            [
                S.xB.USE_APPLICATION_COMMANDS,
                E.showActivities ? S.xB.USE_EMBEDDED_ACTIVITIES : null,
                S.xB.USE_EXTERNAL_APPS,
            ].filter(n.Vq),
            t,
        ),
    };
}
function T(t, i, E) {
    return {
        title: i,
        permissions: e(
            E
                ? [S.xB.CONNECT, S.xB.STREAM, S.xB.MUTE_MEMBERS, S.xB.MOVE_MEMBERS]
                : [S.xB.CONNECT, S.xB.MUTE_MEMBERS, S.xB.MOVE_MEMBERS],
            t,
        ),
    };
}
function I(t, i) {
    return { title: i, permissions: e([S.xB.REQUEST_TO_SPEAK, S.xB.MENTION_EVERYONE], t) };
}
function M(t, i) {
    return { title: i, permissions: e([S.xB.CREATE_EVENTS, S.xB.MANAGE_EVENTS], t) };
}
function R(t) {
    return null == t ? t : "string" == typeof t ? t.trim() : "function" == typeof t ? r.intl.format(t, {}) : t;
}
