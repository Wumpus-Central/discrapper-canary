e.d(i, {
    BK: () => _,
    LZ: () => o,
    Nk: () => M,
    Si: () => N,
    eD: () => S,
    iG: () => g,
    k6: () => B,
    m6: () => a,
    mL: () => A,
    od: () => x,
    qI: () => T,
    xd: () => d,
}),
    e(321073);
var n = e(403362),
    r = e(818348),
    E = e(985018);
function s(t) {
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
function l(t, i) {
    return t.map((t) => i[t.toString()]);
}
function S(t) {
    return {
        [r.xB.VIEW_CHANNEL.toString()]: {
            title: E.intl.string(E.t.uV83yi),
            description: E.t.ybTHLk,
            flag: r.xB.VIEW_CHANNEL,
        },
        [r.xB.MANAGE_CHANNELS.toString()]: {
            title: E.intl.string(E.t["9qLtWs"]),
            description: E.t.qfJnug,
            flag: r.xB.MANAGE_CHANNELS,
        },
        [r.xB.MANAGE_ROLES.toString()]: {
            title: E.intl.string(E.t["C8d+oG"]),
            description: E.t.buo9uw,
            flag: r.xB.MANAGE_ROLES,
        },
        [r.xB.MANAGE_GUILD_EXPRESSIONS.toString()]: {
            title: E.intl.string(E.t.bbuXIn),
            description: E.t["4vb3/6"],
            flag: r.xB.MANAGE_GUILD_EXPRESSIONS,
        },
        [r.xB.CREATE_GUILD_EXPRESSIONS.toString()]: {
            title: E.intl.string(E.t.HarVuP),
            description: E.t.gkdHvH,
            flag: r.xB.CREATE_GUILD_EXPRESSIONS,
        },
        [r.xB.VIEW_AUDIT_LOG.toString()]: {
            title: E.intl.string(E.t.fZgLpA),
            description: E.t["0hx75i"],
            flag: r.xB.VIEW_AUDIT_LOG,
        },
        [r.xB.VIEW_GUILD_ANALYTICS.toString()]: {
            title: E.intl.string(E.t["rQJBE/"]),
            description: E.t.whVKhX,
            flag: r.xB.VIEW_GUILD_ANALYTICS,
        },
        [r.xB.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
            title: E.intl.string(E.t["0lTLTv"]),
            description: E.t.mut6NV,
            flag: r.xB.VIEW_CREATOR_MONETIZATION_ANALYTICS,
        },
        [r.xB.MANAGE_WEBHOOKS.toString()]: {
            title: E.intl.string(E.t["/ADKmM"]),
            description: E.t.LczYqC,
            flag: r.xB.MANAGE_WEBHOOKS,
        },
        [r.xB.MANAGE_GUILD.toString()]: {
            title: E.intl.string(E.t.QZRcfO),
            description: E.t["KoQe/G"],
            flag: r.xB.MANAGE_GUILD,
        },
        [r.xB.CREATE_INSTANT_INVITE.toString()]: {
            title: E.intl.string(E.t.zJrgTG),
            description: E.t.PCFOZa,
            flag: r.xB.CREATE_INSTANT_INVITE,
        },
        [r.xB.CHANGE_NICKNAME.toString()]: {
            title: E.intl.string(E.t.dilOF6),
            description: E.t["b8B++j"],
            flag: r.xB.CHANGE_NICKNAME,
        },
        [r.xB.MANAGE_NICKNAMES.toString()]: {
            title: E.intl.string(E.t["t+Ct5x"]),
            description: E.t.hTnlMb,
            flag: r.xB.MANAGE_NICKNAMES,
        },
        [r.xB.KICK_MEMBERS.toString()]: {
            title: t.showMembershipManualApprovalPermissions ? E.intl.string(E.t["9TxXwb"]) : E.intl.string(E.t.pBNv6i),
            description: t.showMembershipManualApprovalPermissions ? E.t.hGBAnw : E.t.rwdPaE,
            flag: r.xB.KICK_MEMBERS,
        },
        [r.xB.BAN_MEMBERS.toString()]: {
            title: E.intl.string(E.t.oTBA7N),
            description: E.t["OqNY0/"],
            flag: r.xB.BAN_MEMBERS,
        },
        [r.xB.MODERATE_MEMBERS.toString()]: {
            title: E.intl.string(E.t["+RL6pz"]),
            description: E.t.T6bZsX,
            flag: r.xB.MODERATE_MEMBERS,
        },
        [r.xB.SEND_MESSAGES.toString()]: {
            title: E.intl.string(E.t.S1VOwd),
            description: E.t.prvWKm,
            flag: r.xB.SEND_MESSAGES,
        },
        [r.xB.EMBED_LINKS.toString()]: {
            title: E.intl.string(E.t["969dEL"]),
            description: E.t.ChoIiy,
            flag: r.xB.EMBED_LINKS,
        },
        [r.xB.ATTACH_FILES.toString()]: {
            title: E.intl.string(E.t["3AS4UM"]),
            description: E.t["/87mYH"],
            flag: r.xB.ATTACH_FILES,
        },
        [r.xB.ADD_REACTIONS.toString()]: {
            title: E.intl.string(E.t.yEoJAr),
            description: E.t.FEYwX7,
            flag: r.xB.ADD_REACTIONS,
        },
        [r.xB.USE_EXTERNAL_EMOJIS.toString()]: {
            title: E.intl.string(E.t["+bxf3H"]),
            description: E.t.POeVIu,
            flag: r.xB.USE_EXTERNAL_EMOJIS,
        },
        [r.xB.USE_EXTERNAL_STICKERS.toString()]: {
            title: E.intl.string(E.t.ERNhYf),
            description: E.t.AdXVhI,
            flag: r.xB.USE_EXTERNAL_STICKERS,
        },
        [r.xB.MENTION_EVERYONE.toString()]: {
            title: E.intl.string(E.t.Y78KGC),
            description: E.intl.string(E.t.ryj6N5),
            flag: r.xB.MENTION_EVERYONE,
        },
        [r.xB.MANAGE_MESSAGES.toString()]: {
            title: E.intl.string(E.t["6lU9xM"]),
            description: E.t["RXMG/+"],
            flag: r.xB.MANAGE_MESSAGES,
        },
        [r.xB.PIN_MESSAGES.toString()]: {
            title: E.intl.string(E.t.Y5BI39),
            description: E.t["LN/K3x"],
            flag: r.xB.PIN_MESSAGES,
        },
        [r.xB.BYPASS_SLOWMODE.toString()]: {
            title: E.intl.string(E.t.kqcjeV),
            description: E.t.S2ZE5c,
            flag: r.xB.BYPASS_SLOWMODE,
        },
        [r.xB.MANAGE_OFFICIAL_MESSAGES.toString()]: {
            title: E.intl.string(E.t.Aj9ruN),
            description: E.t.pfEgBm,
            flag: r.xB.MANAGE_OFFICIAL_MESSAGES,
        },
        [r.xB.READ_MESSAGE_HISTORY.toString()]: {
            title: E.intl.string(E.t.l9ufaR),
            description: E.t.rmHPFR,
            flag: r.xB.READ_MESSAGE_HISTORY,
        },
        [r.xB.SEND_TTS_MESSAGES.toString()]: {
            title: E.intl.string(E.t.mMbwh7),
            description: E.t.D6x8Nr,
            flag: r.xB.SEND_TTS_MESSAGES,
        },
        [r.xB.USE_APPLICATION_COMMANDS.toString()]: {
            title: E.intl.string(E.t.nkoPOt),
            description: E.t.pJrJ35,
            flag: r.xB.USE_APPLICATION_COMMANDS,
        },
        [r.xB.USE_EXTERNAL_APPS.toString()]: {
            title: E.intl.string(E.t.TtA5rK),
            description: E.t.mzLoDY,
            flag: r.xB.USE_EXTERNAL_APPS,
        },
        [r.xB.SEND_VOICE_MESSAGES.toString()]: {
            title: E.intl.string(E.t.WlWSBT),
            description: E.t.pDuyi0,
            flag: r.xB.SEND_VOICE_MESSAGES,
        },
        [r.xB.SEND_POLLS.toString()]: {
            title: E.intl.string(E.t.UMQ7Ww),
            description: E.t["Xl6W+F"],
            flag: r.xB.SEND_POLLS,
        },
        [r.xB.CONNECT.toString()]: { title: E.intl.string(E.t.S0W8Z5), description: E.t["3GCm/f"], flag: r.xB.CONNECT },
        [r.xB.SPEAK.toString()]: { title: E.intl.string(E.t["8w1tIR"]), description: E.t.y4MncF, flag: r.xB.SPEAK },
        [r.xB.STREAM.toString()]: { title: E.intl.string(E.t.FlNoSV), description: E.t["6Z0j9v"], flag: r.xB.STREAM },
        [r.xB.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: E.intl.string(E.t.rLSGeh),
            description: E.t.BEqU5H,
            flag: r.xB.USE_EMBEDDED_ACTIVITIES,
        },
        [r.xB.USE_SOUNDBOARD.toString()]: {
            title: E.intl.string(E.t.Bco7NG),
            description: t?.SOUNDBOARD_DESCRIPTION ?? E.t["+8p+fc"],
            flag: r.xB.USE_SOUNDBOARD,
        },
        [r.xB.USE_EXTERNAL_SOUNDS.toString()]: {
            title: E.intl.string(E.t.pwaVJ6),
            description: E.t.qDpPtX,
            flag: r.xB.USE_EXTERNAL_SOUNDS,
        },
        [r.xB.USE_VAD.toString()]: {
            title: E.intl.string(E.t["08zAV7"]),
            description: E.t["7CHjmc"],
            flag: r.xB.USE_VAD,
        },
        [r.xB.PRIORITY_SPEAKER.toString()]: {
            title: E.intl.string(E.t.BVK71i),
            description: t?.PRIORITY_SPEAKER_DESCRIPTION ?? E.t.OJkrro,
            flag: r.xB.PRIORITY_SPEAKER,
        },
        [r.xB.MUTE_MEMBERS.toString()]: {
            title: E.intl.string(E.t["8EI30/"]),
            description: E.t.PIhGA1,
            flag: r.xB.MUTE_MEMBERS,
        },
        [r.xB.DEAFEN_MEMBERS.toString()]: {
            title: E.intl.string(E.t["9L47Fr"]),
            description: E.t["FQr3+t"],
            flag: r.xB.DEAFEN_MEMBERS,
        },
        [r.xB.MOVE_MEMBERS.toString()]: {
            title: E.intl.string(E.t.YtjJPQ),
            description: E.t.SEe0Gp,
            flag: r.xB.MOVE_MEMBERS,
        },
        [r.xB.REQUEST_TO_SPEAK.toString()]: {
            title: E.intl.string(E.t["5kicT2"]),
            description: E.t["yNE+Q5"],
            flag: r.xB.REQUEST_TO_SPEAK,
            isExperimental: !0,
        },
        [r.xB.ADMINISTRATOR.toString()]: {
            title: E.intl.string(E.t.PGvZqX),
            description: "string" == typeof E.t.UJxMrK ? E.t.UJxMrK : E.intl.format(E.t.UJxMrK, {}),
            flag: r.xB.ADMINISTRATOR,
        },
        [r.xB.MANAGE_EVENTS.toString()]: {
            title: E.intl.string(E.t.HIgA5a),
            description: E.t["SL+qgG"],
            flag: r.xB.MANAGE_EVENTS,
        },
        [r.xB.CREATE_EVENTS.toString()]: {
            title: E.intl.string(E.t.qyjZua),
            description: E.t.bQEFJZ,
            flag: r.xB.CREATE_EVENTS,
        },
        [r.xB.MANAGE_THREADS.toString()]: {
            title: E.intl.string(E.t.QKe7Q3),
            description: E.t.QAxIIt,
            flag: r.xB.MANAGE_THREADS,
        },
        [r.xB.CREATE_PUBLIC_THREADS.toString()]: {
            title: E.intl.string(E.t["25rKnX"]),
            description: E.t.ODCYj8,
            flag: r.xB.CREATE_PUBLIC_THREADS,
        },
        [r.xB.CREATE_PRIVATE_THREADS.toString()]: {
            title: E.intl.string(E.t.QwbTSa),
            description: E.t["G/cc3l"],
            flag: r.xB.CREATE_PRIVATE_THREADS,
        },
        [r.xB.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: E.intl.string(E.t["5QlVGy"]),
            description: E.t.C2ZPE3,
            flag: r.xB.SEND_MESSAGES_IN_THREADS,
        },
        [r.xB.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: E.intl.string(E.t.VBwkUf),
            description: E.t.C6BzXx,
            flag: r.xB.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
function o(t) {
    let i,
        e,
        n,
        o,
        A,
        a = S(t),
        _ = [
            ((i = [
                r.xB.VIEW_CHANNEL,
                r.xB.MANAGE_CHANNELS,
                r.xB.MANAGE_ROLES,
                r.xB.CREATE_GUILD_EXPRESSIONS,
                r.xB.MANAGE_GUILD_EXPRESSIONS,
                r.xB.VIEW_AUDIT_LOG,
                r.xB.VIEW_GUILD_ANALYTICS,
            ]),
            t.showCreatorMonetizationAnalyticsPermission && i.push(r.xB.VIEW_CREATOR_MONETIZATION_ANALYTICS),
            i.push(r.xB.MANAGE_WEBHOOKS),
            i.push(r.xB.MANAGE_GUILD),
            s({ title: E.intl.string(E.t["mYck+B"]), permissions: l(i, a) })),
            ((e = [
                r.xB.CREATE_INSTANT_INVITE,
                r.xB.CHANGE_NICKNAME,
                r.xB.MANAGE_NICKNAMES,
                r.xB.KICK_MEMBERS,
                r.xB.BAN_MEMBERS,
                r.xB.MODERATE_MEMBERS,
            ]),
            s({ title: E.intl.string(E.t.Ny49TN), permissions: l(e, a) })),
            ((n = [
                r.xB.SEND_MESSAGES,
                r.xB.SEND_MESSAGES_IN_THREADS,
                r.xB.CREATE_PUBLIC_THREADS,
                r.xB.CREATE_PRIVATE_THREADS,
                r.xB.EMBED_LINKS,
                r.xB.ATTACH_FILES,
                r.xB.ADD_REACTIONS,
                r.xB.USE_EXTERNAL_EMOJIS,
                r.xB.USE_EXTERNAL_STICKERS,
                r.xB.USE_EXTERNAL_SOUNDS,
                r.xB.MENTION_EVERYONE,
                r.xB.MANAGE_MESSAGES,
                r.xB.PIN_MESSAGES,
                r.xB.MANAGE_OFFICIAL_MESSAGES,
                r.xB.BYPASS_SLOWMODE,
                r.xB.MANAGE_THREADS,
                r.xB.READ_MESSAGE_HISTORY,
                r.xB.SEND_TTS_MESSAGES,
                r.xB.SEND_VOICE_MESSAGES,
                r.xB.SEND_POLLS,
            ]),
            t.inSoundmojiExperiment || (n = n.filter((t) => t !== r.xB.USE_EXTERNAL_SOUNDS)),
            s({ title: E.intl.string(E.t.cKobO5), permissions: l(n, a) })),
            ((o = [
                r.xB.CONNECT,
                r.xB.SPEAK,
                r.xB.STREAM,
                r.xB.USE_SOUNDBOARD,
                r.xB.USE_EXTERNAL_SOUNDS,
                r.xB.USE_VAD,
                r.xB.PRIORITY_SPEAKER,
                r.xB.MUTE_MEMBERS,
                r.xB.DEAFEN_MEMBERS,
                r.xB.MOVE_MEMBERS,
                r.xB.SET_VOICE_CHANNEL_STATUS,
            ]),
            s({ title: E.intl.string(E.t["46Ra1b"]), permissions: l(o, a) })),
            ((A = [r.xB.USE_APPLICATION_COMMANDS, r.xB.USE_EMBEDDED_ACTIVITIES, r.xB.USE_EXTERNAL_APPS]),
            s({ title: E.intl.string(E.t["rrh/W6"]), permissions: l(A, a) })),
        ];
    return (
        t.showStageChannelPermissions &&
            _.push(
                s({ title: E.intl.string(E.t.yniauk), permissions: l([r.xB.REQUEST_TO_SPEAK], a) }, t.showExperimental),
            ),
        _.push(
            s(
                { title: E.intl.string(E.t.b8lplT), permissions: l([r.xB.CREATE_EVENTS, r.xB.MANAGE_EVENTS], a) },
                t.showExperimental,
            ),
        ),
        _.push(s({ title: E.intl.string(E.t["3uI5CX"]), permissions: l([r.xB.ADMINISTRATOR], a) })),
        _
    );
}
function A(t, i) {
    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showManageWebhooks: !0 };
    return {
        title: i,
        permissions: l(
            e?.showManageWebhooks
                ? [r.xB.VIEW_CHANNEL, r.xB.MANAGE_CHANNELS, r.xB.MANAGE_ROLES, r.xB.MANAGE_WEBHOOKS]
                : [r.xB.VIEW_CHANNEL, r.xB.MANAGE_CHANNELS, r.xB.MANAGE_ROLES],
            t,
        ),
    };
}
function a(t, i) {
    return { title: i, permissions: l([r.xB.CREATE_INSTANT_INVITE], t) };
}
function _(t, i, e) {
    let n = [
        r.xB.SEND_MESSAGES,
        r.xB.SEND_MESSAGES_IN_THREADS,
        r.xB.CREATE_PUBLIC_THREADS,
        r.xB.CREATE_PRIVATE_THREADS,
        r.xB.EMBED_LINKS,
        r.xB.ATTACH_FILES,
        r.xB.ADD_REACTIONS,
        r.xB.USE_EXTERNAL_EMOJIS,
        r.xB.USE_EXTERNAL_STICKERS,
        r.xB.USE_EXTERNAL_SOUNDS,
        r.xB.MENTION_EVERYONE,
        r.xB.MANAGE_MESSAGES,
        r.xB.PIN_MESSAGES,
        r.xB.MANAGE_OFFICIAL_MESSAGES,
        r.xB.BYPASS_SLOWMODE,
        r.xB.MANAGE_THREADS,
        r.xB.READ_MESSAGE_HISTORY,
        r.xB.SEND_TTS_MESSAGES,
        r.xB.SEND_VOICE_MESSAGES,
        r.xB.SEND_POLLS,
    ];
    return (
        e.inSoundmojiExperiment || (n = n.filter((t) => t !== r.xB.USE_EXTERNAL_SOUNDS)),
        (e.showPrivateThreads && e.showCreateThreads) || (n = n.filter((t) => t !== r.xB.CREATE_PRIVATE_THREADS)),
        e.showCreateThreads || (n = n.filter((t) => t !== r.xB.CREATE_PUBLIC_THREADS)),
        { title: i, description: e.sectionDescription, permissions: l(n, t) }
    );
}
function g(t, i) {
    return {
        title: i,
        permissions: l(
            [
                r.xB.CONNECT,
                r.xB.SPEAK,
                r.xB.STREAM,
                r.xB.USE_SOUNDBOARD,
                r.xB.USE_EXTERNAL_SOUNDS,
                r.xB.USE_VAD,
                r.xB.PRIORITY_SPEAKER,
                r.xB.MUTE_MEMBERS,
                r.xB.DEAFEN_MEMBERS,
                r.xB.MOVE_MEMBERS,
                r.xB.SET_VOICE_CHANNEL_STATUS,
            ],
            t,
        ),
    };
}
function B(t, i, e) {
    let n = [
        r.xB.SEND_MESSAGES,
        r.xB.EMBED_LINKS,
        r.xB.ATTACH_FILES,
        r.xB.ADD_REACTIONS,
        r.xB.USE_EXTERNAL_EMOJIS,
        r.xB.USE_EXTERNAL_STICKERS,
        r.xB.USE_EXTERNAL_SOUNDS,
        r.xB.MENTION_EVERYONE,
        r.xB.MANAGE_MESSAGES,
        r.xB.BYPASS_SLOWMODE,
        r.xB.READ_MESSAGE_HISTORY,
        r.xB.SEND_TTS_MESSAGES,
        r.xB.SEND_VOICE_MESSAGES,
        r.xB.SEND_POLLS,
    ];
    return (
        e.inSoundmojiExperiment || (n = n.filter((t) => t !== r.xB.USE_EXTERNAL_SOUNDS)),
        { title: i, description: e.sectionDescription, permissions: l(n, t) }
    );
}
function N(t, i) {
    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showActivities: !0 };
    return {
        title: i,
        permissions: l(
            [
                r.xB.USE_APPLICATION_COMMANDS,
                e.showActivities ? r.xB.USE_EMBEDDED_ACTIVITIES : null,
                r.xB.USE_EXTERNAL_APPS,
            ].filter(n.Vq),
            t,
        ),
    };
}
function x(t, i, e) {
    return {
        title: i,
        permissions: l(
            e
                ? [r.xB.CONNECT, r.xB.STREAM, r.xB.MUTE_MEMBERS, r.xB.MOVE_MEMBERS]
                : [r.xB.CONNECT, r.xB.MUTE_MEMBERS, r.xB.MOVE_MEMBERS],
            t,
        ),
    };
}
function T(t, i) {
    return { title: i, permissions: l([r.xB.REQUEST_TO_SPEAK, r.xB.MENTION_EVERYONE], t) };
}
function d(t, i) {
    return { title: i, permissions: l([r.xB.CREATE_EVENTS, r.xB.MANAGE_EVENTS], t) };
}
function M(t) {
    return null == t ? t : "string" == typeof t ? t.trim() : "function" == typeof t ? E.intl.format(t, {}) : t;
}
