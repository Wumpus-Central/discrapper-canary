n.d(t, {
    EQ: () => d,
    IG: () => _,
    aC: () => u,
    kf: () => f,
    m$: () => c
});
var i = n(230711),
    r = n(197062),
    a = n(727866),
    s = n(63063),
    o = n(981631),
    l = n(388032),
    u = (function (e) {
        return (e[(e.EMPTY_STATE = 0)] = 'EMPTY_STATE'), (e[(e.ADMINISTRATOR = 1)] = 'ADMINISTRATOR'), (e[(e.ROLE = 2)] = 'ROLE'), (e[(e.OWNER = 3)] = 'OWNER'), (e[(e.MEMBER = 4)] = 'MEMBER'), (e[(e.USER = 5)] = 'USER'), (e[(e.GUILD = 6)] = 'GUILD'), e;
    })({}),
    c = (function (e) {
        return (e[(e.ROLES = 0)] = 'ROLES'), (e[(e.MEMBERS = 1)] = 'MEMBERS'), (e[(e.USERS = 2)] = 'USERS'), (e[(e.GUILDS = 3)] = 'GUILDS'), e;
    })({});
let d = 20,
    f = 'channelPermissionSettingsAdvancedModeOn';
function _(e, t, n, u) {
    let c = e.type;
    return {
        [o.Plq.VIEW_CHANNEL.toString()]: {
            title: c === o.d4z.GUILD_CATEGORY ? l.intl.string(l.t.uV83ys) : l.intl.string(l.t['W/A4Qk']),
            description: (() => {
                if (t)
                    switch (c) {
                        case o.d4z.GUILD_CATEGORY:
                            return l.t['o/vBzs'];
                        case o.d4z.GUILD_VOICE:
                        case o.d4z.GUILD_STAGE_VOICE:
                            return l.t.ejL1Wl;
                        default:
                            return l.t['3jG0Bg'];
                    }
                return c === o.d4z.GUILD_CATEGORY ? l.t.SzosGh : l.t.M2iEy8;
            })(),
            flag: o.Plq.VIEW_CHANNEL
        },
        [o.Plq.MANAGE_CHANNELS.toString()]: {
            title: c === o.d4z.GUILD_CATEGORY ? l.intl.string(l.t['9qLtWl']) : l.intl.string(l.t.nAw15O),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.t.KJ2JnJ;
                    case o.d4z.GUILD_VOICE:
                        return l.t['+gl2nZ'];
                    case o.d4z.GUILD_STAGE_VOICE:
                        return l.t['SDX66+'];
                    default:
                        return l.t.ydL28v;
                }
            })(),
            flag: o.Plq.MANAGE_CHANNELS
        },
        [o.Plq.MANAGE_ROLES.toString()]: {
            title: l.intl.string(l.t.ICb6am),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.t.TyyCMD;
                    case o.d4z.GUILD_STAGE_VOICE:
                        return l.t.hcw4m5;
                    default:
                        return l.t.hOMXOj;
                }
            })(),
            flag: o.Plq.MANAGE_ROLES
        },
        [o.Plq.MANAGE_WEBHOOKS.toString()]: {
            title: l.intl.string(l.t['/ADKmJ']),
            description: c === o.d4z.GUILD_CATEGORY ? l.t['K5+ZZ2'] : l.t.CYBZr6,
            flag: o.Plq.MANAGE_WEBHOOKS
        },
        [o.Plq.CREATE_INSTANT_INVITE.toString()]: {
            title: l.intl.string(l.t.zJrgTE),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.t['3YFAAQ'];
                    case o.d4z.GUILD_VOICE:
                    case o.d4z.GUILD_STAGE_VOICE:
                        return l.t.lUCs1t;
                    default:
                        return l.t.q4g2aG;
                }
            })(),
            flag: o.Plq.CREATE_INSTANT_INVITE
        },
        [o.Plq.SEND_MESSAGES.toString()]: {
            title: o.TPd.GUILD_THREADS_ONLY.has(c) ? l.intl.string(l.t.nJwAHR) : n && c === o.d4z.GUILD_CATEGORY ? l.intl.string(l.t.S1VOwc) : l.intl.string(l.t.T32rkJ),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return n ? l.t.IjeLur : l.t.qLnFpa;
                    case o.d4z.GUILD_FORUM:
                        return (null == u ? void 0 : u.createPostsDisabled) && !e.isMediaChannel() ? r.Z.getForumChannelPermissionText() : l.t.LG9VAg;
                    case o.d4z.GUILD_MEDIA:
                        return l.t.LG9VAg;
                    case o.d4z.GUILD_ANNOUNCEMENT:
                        return l.intl.format(l.t.WFwfSE, { articleURL: s.Z.getArticleURL(o.BhN.ANNOUNCEMENT_CHANNELS) });
                    case o.d4z.GUILD_VOICE:
                        return a.Z.getTextInVoiceSendMessageChannelPermissionText(null == u ? void 0 : u.sendMessagesDisabled);
                    default:
                        return l.t.WQ6zpa;
                }
            })(),
            flag: o.Plq.SEND_MESSAGES
        },
        [o.Plq.EMBED_LINKS.toString()]: {
            title: l.intl.string(l.t['969dEB']),
            description: c === o.d4z.GUILD_CATEGORY ? l.t['7zlUa2'] : l.t.XFFhAw,
            flag: o.Plq.EMBED_LINKS
        },
        [o.Plq.ATTACH_FILES.toString()]: {
            title: l.intl.string(l.t['3AS4UF']),
            description: c === o.d4z.GUILD_CATEGORY ? l.t.XREf9v : l.t.WK9r7O,
            flag: o.Plq.ATTACH_FILES
        },
        [o.Plq.ADD_REACTIONS.toString()]: {
            title: l.intl.string(l.t.yEoJAg),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.t.pZT2Zm;
                    case o.d4z.GUILD_VOICE:
                        return l.t.xSSbIi;
                    default:
                        return l.t.PVjR1d;
                }
            })(),
            flag: o.Plq.ADD_REACTIONS
        },
        [o.Plq.USE_EXTERNAL_EMOJIS.toString()]: {
            title: l.intl.string(l.t['+bxf3N']),
            description: c === o.d4z.GUILD_CATEGORY ? l.t.mWAbKy : l.t.Qc5vOj,
            flag: o.Plq.USE_EXTERNAL_EMOJIS
        },
        [o.Plq.USE_EXTERNAL_STICKERS.toString()]: {
            title: l.intl.string(l.t.ERNhYW),
            description: c === o.d4z.GUILD_CATEGORY ? l.t['39whJy'] : l.t.VF4fZW,
            flag: o.Plq.USE_EXTERNAL_STICKERS
        },
        [o.Plq.MENTION_EVERYONE.toString()]: {
            title: c === o.d4z.GUILD_STAGE_VOICE ? l.intl.string(l.t.VDUAHB) : l.intl.string(l.t.Y78KGB),
            description: c === o.d4z.GUILD_CATEGORY ? l.t['HOhg/P'] : c === o.d4z.GUILD_STAGE_VOICE ? l.t.rZn1oK : l.t['6IUSdn'],
            flag: o.Plq.MENTION_EVERYONE
        },
        [o.Plq.MANAGE_MESSAGES.toString()]: {
            title: l.intl.string(l.t['6lU9xM']),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.t['5R9nYm'];
                    case o.d4z.GUILD_ANNOUNCEMENT:
                        return l.intl.format(l.t.XRxOo6, { articleURL: s.Z.getArticleURL(o.BhN.ANNOUNCEMENT_CHANNELS) });
                    default:
                        return l.t['SeA+Gx'];
                }
            })(),
            flag: o.Plq.MANAGE_MESSAGES
        },
        [o.Plq.READ_MESSAGE_HISTORY.toString()]: {
            title: o.TPd.GUILD_THREADS_ONLY.has(c) ? l.intl.string(l.t['0RQwtr']) : l.intl.string(l.t.l9ufaW),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.t['cJRv/v'];
                    case o.d4z.GUILD_VOICE:
                        return a.Z.getTextInVoiceReadMessageHistoryChannelPermissionText(null == u ? void 0 : u.readMessageHistoryDisabled);
                    case o.d4z.GUILD_FORUM:
                    case o.d4z.GUILD_MEDIA:
                        return l.t.RqCc7u;
                    default:
                        return l.t.cuMfHx;
                }
            })(),
            flag: o.Plq.READ_MESSAGE_HISTORY
        },
        [o.Plq.SEND_TTS_MESSAGES.toString()]: {
            title: l.intl.string(l.t.mMbwh4),
            description: c === o.d4z.GUILD_CATEGORY ? l.t.b7pc9f : l.t.CpakGx,
            flag: o.Plq.SEND_TTS_MESSAGES
        },
        [o.Plq.USE_APPLICATION_COMMANDS.toString()]: {
            title: l.intl.string(l.t.nkoPOj),
            description: c === o.d4z.GUILD_CATEGORY ? l.t['D+qW0N'] : l.t.ReG3gI,
            flag: o.Plq.USE_APPLICATION_COMMANDS
        },
        [o.Plq.SEND_VOICE_MESSAGES.toString()]: {
            title: l.intl.string(l.t.WlWSBQ),
            description: c === o.d4z.GUILD_CATEGORY ? l.t.gavGfn : l.t.BhEo9f,
            flag: o.Plq.SEND_VOICE_MESSAGES
        },
        [o.Plq.SEND_POLLS.toString()]: {
            title: l.intl.string(l.t.UMQ7W1),
            description: c === o.d4z.GUILD_CATEGORY ? l.t['18Ya7O'] : l.t.ckKKIC,
            flag: o.Plq.SEND_POLLS
        },
        [o.Plq.USE_CLYDE_AI.toString()]: {
            title: l.intl.string(l.t['8eeEZm']),
            description: c === o.d4z.GUILD_CATEGORY ? l.t.Tx5TjI : l.t.d664Fx,
            flag: o.Plq.USE_CLYDE_AI
        },
        [o.Plq.CONNECT.toString()]: {
            title: l.intl.string(l.t.S0W8Z2),
            description: (() => {
                if (t)
                    switch (c) {
                        case o.d4z.GUILD_CATEGORY:
                            return l.t.XcrieH;
                        case o.d4z.GUILD_STAGE_VOICE:
                            return l.t.SOFNhI;
                        case o.d4z.GUILD_TEXT:
                        case o.d4z.GUILD_FORUM:
                        case o.d4z.GUILD_MEDIA:
                            return l.t.LsS8xc;
                        default:
                            return l.t.j4AyOz;
                    }
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.t.stA0Hh;
                    case o.d4z.GUILD_STAGE_VOICE:
                        return l.t['G9+QiY'];
                    case o.d4z.GUILD_TEXT:
                    case o.d4z.GUILD_FORUM:
                    case o.d4z.GUILD_MEDIA:
                        return l.t['QU/Rw8'];
                    default:
                        return l.t.HvG8ub;
                }
            })(),
            flag: o.Plq.CONNECT
        },
        [o.Plq.SPEAK.toString()]: {
            title: l.intl.string(l.t['8w1tIS']),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.t.iXhS6e;
                    case o.d4z.GUILD_STAGE_VOICE:
                        return l.t['a8n74+'];
                    case o.d4z.GUILD_TEXT:
                    case o.d4z.GUILD_FORUM:
                    case o.d4z.GUILD_MEDIA:
                        return l.t['+VXsJC'];
                    default:
                        return l.t['568E6e'];
                }
            })(),
            flag: o.Plq.SPEAK
        },
        [o.Plq.STREAM.toString()]: {
            title: l.intl.string(l.t.FlNoSU),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.t['ryG0/P'];
                    case o.d4z.GUILD_TEXT:
                    case o.d4z.GUILD_FORUM:
                    case o.d4z.GUILD_MEDIA:
                        return l.t.AuEQEB;
                    case o.d4z.GUILD_STAGE_VOICE:
                        return l.t.swJcNz;
                    default:
                        return l.t.RY8rIS;
                }
            })(),
            flag: o.Plq.STREAM
        },
        [o.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: l.intl.string(l.t.rLSGen),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.t.maNzCA;
                    case o.d4z.GUILD_FORUM:
                    case o.d4z.GUILD_MEDIA:
                        return l.t.RyEwlZ;
                    default:
                        return l.t.qinvMT;
                }
            })(),
            flag: o.Plq.USE_EMBEDDED_ACTIVITIES
        },
        [o.Plq.USE_EXTERNAL_APPS.toString()]: {
            title: l.intl.string(l.t['3TzAk5']),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.t.bgIY3N;
                    case o.d4z.GUILD_FORUM:
                    case o.d4z.GUILD_MEDIA:
                        return l.t.qPUPio;
                    default:
                        return l.t.czqMLi;
                }
            })(),
            flag: o.Plq.USE_EXTERNAL_APPS
        },
        [o.Plq.USE_SOUNDBOARD.toString()]: {
            title: l.intl.string(l.t.Bco7ND),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.intl.format(l.t['0kBp//'], { helpCenterArticle: s.Z.getArticleURL(o.BhN.SOUNDBOARD) });
                    case o.d4z.GUILD_TEXT:
                    case o.d4z.GUILD_FORUM:
                    case o.d4z.GUILD_MEDIA:
                        return l.intl.format(l.t['6eYqU1'], { helpCenterArticle: s.Z.getArticleURL(o.BhN.SOUNDBOARD) });
                    default:
                        return l.intl.format(l.t.GEi6Ym, { helpCenterArticle: s.Z.getArticleURL(o.BhN.SOUNDBOARD) });
                }
            })(),
            flag: o.Plq.USE_SOUNDBOARD
        },
        [o.Plq.USE_EXTERNAL_SOUNDS.toString()]: {
            title: l.intl.string(l.t.pwaVJy),
            description: l.t.qDpPtb,
            flag: o.Plq.USE_EXTERNAL_SOUNDS
        },
        [o.Plq.USE_VAD.toString()]: {
            title: l.intl.string(l.t['08zAV1']),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.t.fUYPl5;
                    case o.d4z.GUILD_STAGE_VOICE:
                        return l.t.BJKqsb;
                    case o.d4z.GUILD_TEXT:
                    case o.d4z.GUILD_FORUM:
                    case o.d4z.GUILD_MEDIA:
                        return l.t['3GJwsb'];
                    default:
                        return l.t.s2eihY;
                }
            })(),
            flag: o.Plq.USE_VAD
        },
        [o.Plq.PRIORITY_SPEAKER.toString()]: {
            title: l.intl.string(l.t.BVK71t),
            description: (() => {
                let e = {
                    keybind: l.intl.string(l.t.DkSwJy),
                    onClick: () => {
                        i.Z.open(o.oAB.KEYBINDS);
                    }
                };
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.intl.format(l.t['8nIfDA'], e);
                    case o.d4z.GUILD_TEXT:
                    case o.d4z.GUILD_FORUM:
                    case o.d4z.GUILD_MEDIA:
                        return l.intl.format(l.t['0t6uSk'], e);
                    default:
                        return l.intl.format(l.t.UvB2KC, e);
                }
            })(),
            flag: o.Plq.PRIORITY_SPEAKER
        },
        [o.Plq.MUTE_MEMBERS.toString()]: {
            title: l.intl.string(l.t['8EI309']),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.t.bcuobG;
                    case o.d4z.GUILD_STAGE_VOICE:
                        return l.t.EbvdHx;
                    case o.d4z.GUILD_TEXT:
                    case o.d4z.GUILD_FORUM:
                    case o.d4z.GUILD_MEDIA:
                        return l.t.KYDG2N;
                    default:
                        return l.t.LW5C9P;
                }
            })(),
            flag: o.Plq.MUTE_MEMBERS
        },
        [o.Plq.DEAFEN_MEMBERS.toString()]: {
            title: l.intl.string(l.t['9L47Fh']),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.t.amZ5vr;
                    case o.d4z.GUILD_TEXT:
                    case o.d4z.GUILD_FORUM:
                    case o.d4z.GUILD_MEDIA:
                        return l.t['d+i1nZ'];
                    default:
                        return l.t.UAdIxs;
                }
            })(),
            flag: o.Plq.DEAFEN_MEMBERS
        },
        [o.Plq.MOVE_MEMBERS.toString()]: {
            title: l.intl.string(l.t.YtjJPT),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return l.t.XmoyRE;
                    case o.d4z.GUILD_STAGE_VOICE:
                        return l.t.bizKz8;
                    case o.d4z.GUILD_TEXT:
                    case o.d4z.GUILD_FORUM:
                    case o.d4z.GUILD_MEDIA:
                        return l.t.cbdQy8;
                    default:
                        return l.t.nSD1am;
                }
            })(),
            flag: o.Plq.MOVE_MEMBERS
        },
        [o.Plq.REQUEST_TO_SPEAK.toString()]: {
            title: l.intl.string(l.t['5kicT0']),
            description: c === o.d4z.GUILD_CATEGORY ? l.t.T1lMSk : l.t.uzlYFB,
            flag: o.Plq.REQUEST_TO_SPEAK
        },
        [o.Plq.MANAGE_THREADS.toString()]: {
            title: o.TPd.GUILD_THREADS_ONLY.has(c) ? l.intl.string(l.t.ossiZG) : n && c === o.d4z.GUILD_CATEGORY ? l.intl.string(l.t.QKe7Q0) : l.intl.string(l.t.kEqgr6),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return n ? l.t.S31soa : l.t.YDIQ8P;
                    case o.d4z.GUILD_FORUM:
                    case o.d4z.GUILD_MEDIA:
                        return l.t['XLi/jI'];
                    default:
                        return l.t.yvan0t;
                }
            })(),
            flag: o.Plq.MANAGE_THREADS
        },
        [o.Plq.CREATE_PUBLIC_THREADS.toString()]: {
            title: l.intl.string(l.t['25rKnZ']),
            description: c === o.d4z.GUILD_CATEGORY ? l.t['+M1yLi'] : l.t['5SDtGB'],
            flag: o.Plq.CREATE_PUBLIC_THREADS
        },
        [o.Plq.CREATE_PRIVATE_THREADS.toString()]: {
            title: l.intl.string(l.t.QwbTSU),
            description: c === o.d4z.GUILD_CATEGORY ? l.t['hBS/zs'] : l.t.Chg2zc,
            flag: o.Plq.CREATE_PRIVATE_THREADS
        },
        [o.Plq.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: o.TPd.GUILD_THREADS_ONLY.has(c) ? l.intl.string(l.t.fqhqWl) : n && c === o.d4z.GUILD_CATEGORY ? l.intl.string(l.t['5QlVGx']) : l.intl.string(l.t.fTE74u),
            description: (() => {
                switch (c) {
                    case o.d4z.GUILD_CATEGORY:
                        return n ? l.t.DlIVcH : l.t.VvrChI;
                    case o.d4z.GUILD_FORUM:
                    case o.d4z.GUILD_MEDIA:
                        return l.t.XTnrPD;
                    default:
                        return l.t.xHO6MT;
                }
            })(),
            flag: o.Plq.SEND_MESSAGES_IN_THREADS
        },
        [o.Plq.MANAGE_EVENTS.toString()]: {
            title: l.intl.string(l.t.HIgA5e),
            description: c === o.d4z.GUILD_CATEGORY ? l.t.CP2sz8 : l.t['4pO/TU'],
            flag: o.Plq.MANAGE_EVENTS
        },
        [o.Plq.CREATE_EVENTS.toString()]: {
            title: l.intl.string(l.t.qyjZub),
            description: c === o.d4z.GUILD_CATEGORY ? l.t.XpibmJ : l.t.sPoBLS,
            flag: o.Plq.CREATE_EVENTS
        },
        [o.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: l.intl.string(l.t.VBwkUV),
            description: l.t.C6BzX1,
            flag: o.Plq.SET_VOICE_CHANNEL_STATUS
        }
    };
}
