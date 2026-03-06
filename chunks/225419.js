n.d(i, {
    BK: () => g,
    LZ: () => A,
    Nk: () => p,
    Si: () => x,
    eD: () => o,
    iG: () => N,
    k6: () => B,
    m6: () => _,
    mL: () => a,
    od: () => T,
    qI: () => d,
    x3: () => D,
    xd: () => M,
}),
    n(321073);
var e = n(403362),
    r = n(937161),
    E = n(818348),
    s = n(985018);
function l(t) {
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
function o(t) {
    return {
        [E.xB.VIEW_CHANNEL.toString()]: {
            title: s.intl.string(s.t.uV83yi),
            description: s.t.ybTHLk,
            flag: E.xB.VIEW_CHANNEL,
        },
        [E.xB.MANAGE_CHANNELS.toString()]: {
            title: s.intl.string(s.t["9qLtWs"]),
            description: s.t.qfJnug,
            flag: E.xB.MANAGE_CHANNELS,
        },
        [E.xB.MANAGE_ROLES.toString()]: {
            title: s.intl.string(s.t["C8d+oG"]),
            description: s.t.buo9uw,
            flag: E.xB.MANAGE_ROLES,
        },
        [E.xB.MANAGE_GUILD_EXPRESSIONS.toString()]: {
            title: s.intl.string(s.t.bbuXIn),
            description: s.t["4vb3/6"],
            flag: E.xB.MANAGE_GUILD_EXPRESSIONS,
        },
        [E.xB.CREATE_GUILD_EXPRESSIONS.toString()]: {
            title: s.intl.string(s.t.HarVuP),
            description: s.t.gkdHvH,
            flag: E.xB.CREATE_GUILD_EXPRESSIONS,
        },
        [E.xB.VIEW_AUDIT_LOG.toString()]: {
            title: s.intl.string(s.t.fZgLpA),
            description: s.t["0hx75i"],
            flag: E.xB.VIEW_AUDIT_LOG,
        },
        [E.xB.VIEW_GUILD_ANALYTICS.toString()]: {
            title: s.intl.string(s.t["rQJBE/"]),
            description: s.t.whVKhX,
            flag: E.xB.VIEW_GUILD_ANALYTICS,
        },
        [E.xB.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
            title: s.intl.string(s.t["0lTLTv"]),
            description: s.t.mut6NV,
            flag: E.xB.VIEW_CREATOR_MONETIZATION_ANALYTICS,
        },
        [E.xB.MANAGE_WEBHOOKS.toString()]: {
            title: s.intl.string(s.t["/ADKmM"]),
            description: s.t.LczYqC,
            flag: E.xB.MANAGE_WEBHOOKS,
        },
        [E.xB.MANAGE_GUILD.toString()]: {
            title: s.intl.string(s.t.QZRcfO),
            description: s.t["KoQe/G"],
            flag: E.xB.MANAGE_GUILD,
        },
        [E.xB.CREATE_INSTANT_INVITE.toString()]: {
            title: s.intl.string(s.t.zJrgTG),
            description: s.t.PCFOZa,
            flag: E.xB.CREATE_INSTANT_INVITE,
        },
        [E.xB.CHANGE_NICKNAME.toString()]: {
            title: s.intl.string(s.t.dilOF6),
            description: s.t["b8B++j"],
            flag: E.xB.CHANGE_NICKNAME,
        },
        [E.xB.MANAGE_NICKNAMES.toString()]: {
            title: s.intl.string(s.t["t+Ct5x"]),
            description: s.t.hTnlMb,
            flag: E.xB.MANAGE_NICKNAMES,
        },
        [E.xB.KICK_MEMBERS.toString()]: {
            title: t.showMembershipManualApprovalPermissions ? s.intl.string(s.t["9TxXwb"]) : s.intl.string(s.t.pBNv6i),
            description: t.showMembershipManualApprovalPermissions ? s.t.hGBAnw : s.t.rwdPaE,
            flag: E.xB.KICK_MEMBERS,
        },
        [E.xB.BAN_MEMBERS.toString()]: {
            title: s.intl.string(s.t.oTBA7N),
            description: s.t["OqNY0/"],
            flag: E.xB.BAN_MEMBERS,
        },
        [E.xB.MODERATE_MEMBERS.toString()]: {
            title: s.intl.string(s.t["+RL6pz"]),
            description: s.t.T6bZsX,
            flag: E.xB.MODERATE_MEMBERS,
        },
        [E.xB.SEND_MESSAGES.toString()]: {
            title: s.intl.string(s.t.S1VOwd),
            description: s.t.prvWKm,
            flag: E.xB.SEND_MESSAGES,
        },
        [E.xB.EMBED_LINKS.toString()]: {
            title: s.intl.string(s.t["969dEL"]),
            description: s.t.ChoIiy,
            flag: E.xB.EMBED_LINKS,
        },
        [E.xB.ATTACH_FILES.toString()]: {
            title: s.intl.string(s.t["3AS4UM"]),
            description: s.t["/87mYH"],
            flag: E.xB.ATTACH_FILES,
        },
        [E.xB.ADD_REACTIONS.toString()]: {
            title: s.intl.string(s.t.yEoJAr),
            description: s.t.FEYwX7,
            flag: E.xB.ADD_REACTIONS,
        },
        [E.xB.USE_EXTERNAL_EMOJIS.toString()]: {
            title: s.intl.string(s.t["+bxf3H"]),
            description: s.t.POeVIu,
            flag: E.xB.USE_EXTERNAL_EMOJIS,
        },
        [E.xB.USE_EXTERNAL_STICKERS.toString()]: {
            title: s.intl.string(s.t.ERNhYf),
            description: s.t.AdXVhI,
            flag: E.xB.USE_EXTERNAL_STICKERS,
        },
        [E.xB.MENTION_EVERYONE.toString()]: {
            title: s.intl.string(s.t.Y78KGC),
            description: s.intl.string(s.t.ryj6N5),
            flag: E.xB.MENTION_EVERYONE,
        },
        [E.xB.MANAGE_MESSAGES.toString()]: {
            title: s.intl.string(s.t["6lU9xM"]),
            description: s.t["RXMG/+"],
            flag: E.xB.MANAGE_MESSAGES,
        },
        [E.xB.PIN_MESSAGES.toString()]: {
            title: s.intl.string(s.t.Y5BI39),
            description: s.t["LN/K3x"],
            flag: E.xB.PIN_MESSAGES,
        },
        [E.xB.BYPASS_SLOWMODE.toString()]: {
            title: s.intl.string(s.t.kqcjeV),
            description: s.t.S2ZE5c,
            flag: E.xB.BYPASS_SLOWMODE,
        },
        [E.xB.READ_MESSAGE_HISTORY.toString()]: {
            title: s.intl.string(s.t.l9ufaR),
            description: s.t.rmHPFR,
            flag: E.xB.READ_MESSAGE_HISTORY,
        },
        [E.xB.SEND_TTS_MESSAGES.toString()]: {
            title: s.intl.string(s.t.mMbwh7),
            description: s.t.D6x8Nr,
            flag: E.xB.SEND_TTS_MESSAGES,
        },
        [E.xB.USE_APPLICATION_COMMANDS.toString()]: {
            title: s.intl.string(s.t.nkoPOt),
            description: s.t.pJrJ35,
            flag: E.xB.USE_APPLICATION_COMMANDS,
        },
        [E.xB.USE_EXTERNAL_APPS.toString()]: {
            title: s.intl.string(s.t.TtA5rK),
            description: s.t.mzLoDY,
            flag: E.xB.USE_EXTERNAL_APPS,
        },
        [E.xB.SEND_VOICE_MESSAGES.toString()]: {
            title: s.intl.string(s.t.WlWSBT),
            description: s.t.pDuyi0,
            flag: E.xB.SEND_VOICE_MESSAGES,
        },
        [E.xB.SEND_POLLS.toString()]: {
            title: s.intl.string(s.t.UMQ7Ww),
            description: s.t["Xl6W+F"],
            flag: E.xB.SEND_POLLS,
        },
        [E.xB.CONNECT.toString()]: { title: s.intl.string(s.t.S0W8Z5), description: s.t["3GCm/f"], flag: E.xB.CONNECT },
        [E.xB.SPEAK.toString()]: { title: s.intl.string(s.t["8w1tIR"]), description: s.t.y4MncF, flag: E.xB.SPEAK },
        [E.xB.STREAM.toString()]: { title: s.intl.string(s.t.FlNoSV), description: s.t["6Z0j9v"], flag: E.xB.STREAM },
        [E.xB.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: s.intl.string(s.t.rLSGeh),
            description: s.t.BEqU5H,
            flag: E.xB.USE_EMBEDDED_ACTIVITIES,
        },
        [E.xB.USE_SOUNDBOARD.toString()]: {
            title: s.intl.string(s.t.Bco7NG),
            description: t?.SOUNDBOARD_DESCRIPTION ?? s.t["+8p+fc"],
            flag: E.xB.USE_SOUNDBOARD,
        },
        [E.xB.USE_EXTERNAL_SOUNDS.toString()]: {
            title: s.intl.string(s.t.pwaVJ6),
            description: s.t.qDpPtX,
            flag: E.xB.USE_EXTERNAL_SOUNDS,
        },
        [E.xB.USE_VAD.toString()]: {
            title: s.intl.string(s.t["08zAV7"]),
            description: s.t["7CHjmc"],
            flag: E.xB.USE_VAD,
        },
        [E.xB.PRIORITY_SPEAKER.toString()]: {
            title: s.intl.string(s.t.BVK71i),
            description: t?.PRIORITY_SPEAKER_DESCRIPTION ?? s.t.OJkrro,
            flag: E.xB.PRIORITY_SPEAKER,
        },
        [E.xB.MUTE_MEMBERS.toString()]: {
            title: s.intl.string(s.t["8EI30/"]),
            description: s.t.PIhGA1,
            flag: E.xB.MUTE_MEMBERS,
        },
        [E.xB.DEAFEN_MEMBERS.toString()]: {
            title: s.intl.string(s.t["9L47Fr"]),
            description: s.t["FQr3+t"],
            flag: E.xB.DEAFEN_MEMBERS,
        },
        [E.xB.MOVE_MEMBERS.toString()]: {
            title: s.intl.string(s.t.YtjJPQ),
            description: s.t.SEe0Gp,
            flag: E.xB.MOVE_MEMBERS,
        },
        [E.xB.REQUEST_TO_SPEAK.toString()]: {
            title: s.intl.string(s.t["5kicT2"]),
            description: s.t["yNE+Q5"],
            flag: E.xB.REQUEST_TO_SPEAK,
            isExperimental: !0,
        },
        [E.xB.ADMINISTRATOR.toString()]: {
            title: s.intl.string(s.t.PGvZqX),
            description: "string" == typeof s.t.UJxMrK ? s.t.UJxMrK : s.intl.format(s.t.UJxMrK, {}),
            flag: E.xB.ADMINISTRATOR,
        },
        [E.xB.MANAGE_EVENTS.toString()]: {
            title: s.intl.string(s.t.HIgA5a),
            description: s.t["SL+qgG"],
            flag: E.xB.MANAGE_EVENTS,
        },
        [E.xB.CREATE_EVENTS.toString()]: {
            title: s.intl.string(s.t.qyjZua),
            description: s.t.bQEFJZ,
            flag: E.xB.CREATE_EVENTS,
        },
        [E.xB.MANAGE_THREADS.toString()]: {
            title: s.intl.string(s.t.QKe7Q3),
            description: s.t.QAxIIt,
            flag: E.xB.MANAGE_THREADS,
        },
        [E.xB.CREATE_PUBLIC_THREADS.toString()]: {
            title: s.intl.string(s.t["25rKnX"]),
            description: s.t.ODCYj8,
            flag: E.xB.CREATE_PUBLIC_THREADS,
        },
        [E.xB.CREATE_PRIVATE_THREADS.toString()]: {
            title: s.intl.string(s.t.QwbTSa),
            description: s.t["G/cc3l"],
            flag: E.xB.CREATE_PRIVATE_THREADS,
        },
        [E.xB.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: s.intl.string(s.t["5QlVGy"]),
            description: s.t.C2ZPE3,
            flag: E.xB.SEND_MESSAGES_IN_THREADS,
        },
        [E.xB.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: s.intl.string(s.t.VBwkUf),
            description: s.t.C6BzXx,
            flag: E.xB.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
function A(t) {
    let i,
        n,
        e,
        r,
        A,
        a = o(t),
        _ = [
            ((i = [
                E.xB.VIEW_CHANNEL,
                E.xB.MANAGE_CHANNELS,
                E.xB.MANAGE_ROLES,
                E.xB.CREATE_GUILD_EXPRESSIONS,
                E.xB.MANAGE_GUILD_EXPRESSIONS,
                E.xB.VIEW_AUDIT_LOG,
                E.xB.VIEW_GUILD_ANALYTICS,
            ]),
            t.showCreatorMonetizationAnalyticsPermission && i.push(E.xB.VIEW_CREATOR_MONETIZATION_ANALYTICS),
            i.push(E.xB.MANAGE_WEBHOOKS),
            i.push(E.xB.MANAGE_GUILD),
            l({ title: s.intl.string(s.t["mYck+B"]), permissions: S(i, a) })),
            ((n = [
                E.xB.CREATE_INSTANT_INVITE,
                E.xB.CHANGE_NICKNAME,
                E.xB.MANAGE_NICKNAMES,
                E.xB.KICK_MEMBERS,
                E.xB.BAN_MEMBERS,
                E.xB.MODERATE_MEMBERS,
            ]),
            l({ title: s.intl.string(s.t.Ny49TN), permissions: S(n, a) })),
            ((e = [
                E.xB.SEND_MESSAGES,
                E.xB.SEND_MESSAGES_IN_THREADS,
                E.xB.CREATE_PUBLIC_THREADS,
                E.xB.CREATE_PRIVATE_THREADS,
                E.xB.EMBED_LINKS,
                E.xB.ATTACH_FILES,
                E.xB.ADD_REACTIONS,
                E.xB.USE_EXTERNAL_EMOJIS,
                E.xB.USE_EXTERNAL_STICKERS,
                E.xB.USE_EXTERNAL_SOUNDS,
                E.xB.MENTION_EVERYONE,
                E.xB.MANAGE_MESSAGES,
                E.xB.PIN_MESSAGES,
                E.xB.BYPASS_SLOWMODE,
                E.xB.MANAGE_THREADS,
                E.xB.READ_MESSAGE_HISTORY,
                E.xB.SEND_TTS_MESSAGES,
                E.xB.SEND_VOICE_MESSAGES,
                E.xB.SEND_POLLS,
            ]),
            t.inSoundmojiExperiment || (e = e.filter((t) => t !== E.xB.USE_EXTERNAL_SOUNDS)),
            l({ title: s.intl.string(s.t.cKobO5), permissions: S(e, a) })),
            ((r = [
                E.xB.CONNECT,
                E.xB.SPEAK,
                E.xB.STREAM,
                E.xB.USE_SOUNDBOARD,
                E.xB.USE_EXTERNAL_SOUNDS,
                E.xB.USE_VAD,
                E.xB.PRIORITY_SPEAKER,
                E.xB.MUTE_MEMBERS,
                E.xB.DEAFEN_MEMBERS,
                E.xB.MOVE_MEMBERS,
                E.xB.SET_VOICE_CHANNEL_STATUS,
            ]),
            l({ title: s.intl.string(s.t["46Ra1b"]), permissions: S(r, a) })),
            ((A = [E.xB.USE_APPLICATION_COMMANDS, E.xB.USE_EMBEDDED_ACTIVITIES, E.xB.USE_EXTERNAL_APPS]),
            l({ title: s.intl.string(s.t["rrh/W6"]), permissions: S(A, a) })),
        ];
    return (
        t.showStageChannelPermissions &&
            _.push(
                l({ title: s.intl.string(s.t.yniauk), permissions: S([E.xB.REQUEST_TO_SPEAK], a) }, t.showExperimental),
            ),
        _.push(
            l(
                { title: s.intl.string(s.t.b8lplT), permissions: S([E.xB.CREATE_EVENTS, E.xB.MANAGE_EVENTS], a) },
                t.showExperimental,
            ),
        ),
        _.push(l({ title: s.intl.string(s.t["3uI5CX"]), permissions: S([E.xB.ADMINISTRATOR], a) })),
        _
    );
}
function a(t, i) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showManageWebhooks: !0 };
    return {
        title: i,
        permissions: S(
            n?.showManageWebhooks
                ? [E.xB.VIEW_CHANNEL, E.xB.MANAGE_CHANNELS, E.xB.MANAGE_ROLES, E.xB.MANAGE_WEBHOOKS]
                : [E.xB.VIEW_CHANNEL, E.xB.MANAGE_CHANNELS, E.xB.MANAGE_ROLES],
            t,
        ),
    };
}
function _(t, i) {
    return { title: i, permissions: S([E.xB.CREATE_INSTANT_INVITE], t) };
}
function g(t, i, n) {
    let e = [
        E.xB.SEND_MESSAGES,
        E.xB.SEND_MESSAGES_IN_THREADS,
        E.xB.CREATE_PUBLIC_THREADS,
        E.xB.CREATE_PRIVATE_THREADS,
        E.xB.EMBED_LINKS,
        E.xB.ATTACH_FILES,
        E.xB.ADD_REACTIONS,
        E.xB.USE_EXTERNAL_EMOJIS,
        E.xB.USE_EXTERNAL_STICKERS,
        E.xB.USE_EXTERNAL_SOUNDS,
        E.xB.MENTION_EVERYONE,
        E.xB.MANAGE_MESSAGES,
        E.xB.PIN_MESSAGES,
        E.xB.BYPASS_SLOWMODE,
        E.xB.MANAGE_THREADS,
        E.xB.READ_MESSAGE_HISTORY,
        E.xB.SEND_TTS_MESSAGES,
        E.xB.SEND_VOICE_MESSAGES,
        E.xB.SEND_POLLS,
    ];
    return (
        n.inSoundmojiExperiment || (e = e.filter((t) => t !== E.xB.USE_EXTERNAL_SOUNDS)),
        (n.showPrivateThreads && n.showCreateThreads) || (e = e.filter((t) => t !== E.xB.CREATE_PRIVATE_THREADS)),
        n.showCreateThreads || (e = e.filter((t) => t !== E.xB.CREATE_PUBLIC_THREADS)),
        { title: i, description: n.sectionDescription, permissions: S(e, t) }
    );
}
function N(t, i) {
    return {
        title: i,
        permissions: S(
            [
                E.xB.CONNECT,
                E.xB.SPEAK,
                E.xB.STREAM,
                E.xB.USE_SOUNDBOARD,
                E.xB.USE_EXTERNAL_SOUNDS,
                E.xB.USE_VAD,
                E.xB.PRIORITY_SPEAKER,
                E.xB.MUTE_MEMBERS,
                E.xB.DEAFEN_MEMBERS,
                E.xB.MOVE_MEMBERS,
                E.xB.SET_VOICE_CHANNEL_STATUS,
            ],
            t,
        ),
    };
}
function B(t, i, n) {
    let e = [
        E.xB.SEND_MESSAGES,
        E.xB.EMBED_LINKS,
        E.xB.ATTACH_FILES,
        E.xB.ADD_REACTIONS,
        E.xB.USE_EXTERNAL_EMOJIS,
        E.xB.USE_EXTERNAL_STICKERS,
        E.xB.USE_EXTERNAL_SOUNDS,
        E.xB.MENTION_EVERYONE,
        E.xB.MANAGE_MESSAGES,
        E.xB.BYPASS_SLOWMODE,
        E.xB.READ_MESSAGE_HISTORY,
        E.xB.SEND_TTS_MESSAGES,
        E.xB.SEND_VOICE_MESSAGES,
        E.xB.SEND_POLLS,
    ];
    return (
        n.inSoundmojiExperiment || (e = e.filter((t) => t !== E.xB.USE_EXTERNAL_SOUNDS)),
        { title: i, description: n.sectionDescription, permissions: S(e, t) }
    );
}
function x(t, i) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showActivities: !0 };
    return {
        title: i,
        permissions: S(
            [
                E.xB.USE_APPLICATION_COMMANDS,
                n.showActivities ? E.xB.USE_EMBEDDED_ACTIVITIES : null,
                E.xB.USE_EXTERNAL_APPS,
            ].filter(e.Vq),
            t,
        ),
    };
}
function T(t, i, n) {
    return {
        title: i,
        permissions: S(
            n
                ? [E.xB.CONNECT, E.xB.STREAM, E.xB.MUTE_MEMBERS, E.xB.MOVE_MEMBERS]
                : [E.xB.CONNECT, E.xB.MUTE_MEMBERS, E.xB.MOVE_MEMBERS],
            t,
        ),
    };
}
function d(t, i) {
    return { title: i, permissions: S([E.xB.REQUEST_TO_SPEAK, E.xB.MENTION_EVERYONE], t) };
}
function M(t, i) {
    return { title: i, permissions: S([E.xB.CREATE_EVENTS, E.xB.MANAGE_EVENTS], t) };
}
function p(t) {
    return null == t ? t : "string" == typeof t ? t.trim() : "function" == typeof t ? s.intl.format(t, {}) : t;
}
function D(t, i) {
    return r.A.getCurrentConfig({ guildId: i, location: "getMigrationWarning" }).enabled
        ? t === E.xB.MANAGE_CHANNELS || t === E.xB.MANAGE_THREADS
            ? s.intl.string(s.t.JD3HnA)
            : t === E.xB.MANAGE_MESSAGES
              ? s.intl.string(s.t["62sGhW"])
              : null
        : t === E.xB.MANAGE_CHANNELS || t === E.xB.MANAGE_THREADS
          ? s.intl.string(s.t.Han3PH)
          : t === E.xB.MANAGE_MESSAGES
            ? s.intl.string(s.t.zSc2tb)
            : null;
}
