n.d(t, {
    EQ: () => d,
    IG: () => _,
    aC: () => c,
    kf: () => f,
    m$: () => u
});
var r = n(230711),
    i = n(197062),
    o = n(727866),
    a = n(63063),
    s = n(981631),
    l = n(388032),
    c = (function (e) {
        return (e[(e.EMPTY_STATE = 0)] = 'EMPTY_STATE'), (e[(e.ADMINISTRATOR = 1)] = 'ADMINISTRATOR'), (e[(e.ROLE = 2)] = 'ROLE'), (e[(e.OWNER = 3)] = 'OWNER'), (e[(e.MEMBER = 4)] = 'MEMBER'), (e[(e.USER = 5)] = 'USER'), (e[(e.GUILD = 6)] = 'GUILD'), e;
    })({}),
    u = (function (e) {
        return (e[(e.ROLES = 0)] = 'ROLES'), (e[(e.MEMBERS = 1)] = 'MEMBERS'), (e[(e.USERS = 2)] = 'USERS'), (e[(e.GUILDS = 3)] = 'GUILDS'), e;
    })({});
let d = 20,
    f = 'channelPermissionSettingsAdvancedModeOn';
function _(e, t, n, c) {
    let u = e.type;
    return {
        [s.Plq.VIEW_CHANNEL.toString()]: {
            title: u === s.d4z.GUILD_CATEGORY ? l.NW.string(l.t.uV83ys) : l.NW.string(l.t['W/A4Qk']),
            description: (() => {
                if (t)
                    switch (u) {
                        case s.d4z.GUILD_CATEGORY:
                            return l.t['o/vBzs'];
                        case s.d4z.GUILD_VOICE:
                        case s.d4z.GUILD_STAGE_VOICE:
                            return l.t.ejL1Wl;
                        default:
                            return l.t['3jG0Bg'];
                    }
                return u === s.d4z.GUILD_CATEGORY ? l.t.SzosGh : l.t.M2iEy8;
            })(),
            flag: s.Plq.VIEW_CHANNEL
        },
        [s.Plq.MANAGE_CHANNELS.toString()]: {
            title: u === s.d4z.GUILD_CATEGORY ? l.NW.string(l.t['9qLtWl']) : l.NW.string(l.t.nAw15O),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.KJ2JnJ;
                    case s.d4z.GUILD_VOICE:
                        return l.t['+gl2nZ'];
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t['SDX66+'];
                    default:
                        return l.t.ydL28v;
                }
            })(),
            flag: s.Plq.MANAGE_CHANNELS
        },
        [s.Plq.MANAGE_ROLES.toString()]: {
            title: l.NW.string(l.t.ICb6am),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.TyyCMD;
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t.hcw4m5;
                    default:
                        return l.t.hOMXOj;
                }
            })(),
            flag: s.Plq.MANAGE_ROLES
        },
        [s.Plq.MANAGE_WEBHOOKS.toString()]: {
            title: l.NW.string(l.t['/ADKmJ']),
            description: u === s.d4z.GUILD_CATEGORY ? l.t['K5+ZZ2'] : l.t.CYBZr6,
            flag: s.Plq.MANAGE_WEBHOOKS
        },
        [s.Plq.CREATE_INSTANT_INVITE.toString()]: {
            title: l.NW.string(l.t.zJrgTE),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t['3YFAAQ'];
                    case s.d4z.GUILD_VOICE:
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t.lUCs1t;
                    default:
                        return l.t.q4g2aG;
                }
            })(),
            flag: s.Plq.CREATE_INSTANT_INVITE
        },
        [s.Plq.SEND_MESSAGES.toString()]: {
            title: s.TPd.GUILD_THREADS_ONLY.has(u) ? l.NW.string(l.t.nJwAHR) : n && u === s.d4z.GUILD_CATEGORY ? l.NW.string(l.t.S1VOwc) : l.NW.string(l.t.T32rkJ),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return n ? l.t.IjeLur : l.t.qLnFpa;
                    case s.d4z.GUILD_FORUM:
                        return (null == c ? void 0 : c.createPostsDisabled) && !e.isMediaChannel() ? i.Z.getForumChannelPermissionText() : l.t.LG9VAg;
                    case s.d4z.GUILD_MEDIA:
                        return l.t.LG9VAg;
                    case s.d4z.GUILD_ANNOUNCEMENT:
                        return l.NW.format(l.t.WFwfSE, { articleURL: a.Z.getArticleURL(s.BhN.ANNOUNCEMENT_CHANNELS) });
                    case s.d4z.GUILD_VOICE:
                        return o.Z.getTextInVoiceSendMessageChannelPermissionText(null == c ? void 0 : c.sendMessagesDisabled);
                    default:
                        return l.t.WQ6zpa;
                }
            })(),
            flag: s.Plq.SEND_MESSAGES
        },
        [s.Plq.EMBED_LINKS.toString()]: {
            title: l.NW.string(l.t['969dEB']),
            description: u === s.d4z.GUILD_CATEGORY ? l.t['7zlUa2'] : l.t.XFFhAw,
            flag: s.Plq.EMBED_LINKS
        },
        [s.Plq.ATTACH_FILES.toString()]: {
            title: l.NW.string(l.t['3AS4UF']),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.XREf9v : l.t.WK9r7O,
            flag: s.Plq.ATTACH_FILES
        },
        [s.Plq.ADD_REACTIONS.toString()]: {
            title: l.NW.string(l.t.yEoJAg),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.pZT2Zm;
                    case s.d4z.GUILD_VOICE:
                        return l.t.xSSbIi;
                    default:
                        return l.t.PVjR1d;
                }
            })(),
            flag: s.Plq.ADD_REACTIONS
        },
        [s.Plq.USE_EXTERNAL_EMOJIS.toString()]: {
            title: l.NW.string(l.t['+bxf3N']),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.mWAbKy : l.t.Qc5vOj,
            flag: s.Plq.USE_EXTERNAL_EMOJIS
        },
        [s.Plq.USE_EXTERNAL_STICKERS.toString()]: {
            title: l.NW.string(l.t.ERNhYW),
            description: u === s.d4z.GUILD_CATEGORY ? l.t['39whJy'] : l.t.VF4fZW,
            flag: s.Plq.USE_EXTERNAL_STICKERS
        },
        [s.Plq.MENTION_EVERYONE.toString()]: {
            title: u === s.d4z.GUILD_STAGE_VOICE ? l.NW.string(l.t.VDUAHB) : l.NW.string(l.t.Y78KGB),
            description: u === s.d4z.GUILD_CATEGORY ? l.t['HOhg/P'] : u === s.d4z.GUILD_STAGE_VOICE ? l.t.rZn1oK : l.t['6IUSdn'],
            flag: s.Plq.MENTION_EVERYONE
        },
        [s.Plq.MANAGE_MESSAGES.toString()]: {
            title: l.NW.string(l.t['6lU9xM']),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t['5R9nYm'];
                    case s.d4z.GUILD_ANNOUNCEMENT:
                        return l.NW.format(l.t.XRxOo6, { articleURL: a.Z.getArticleURL(s.BhN.ANNOUNCEMENT_CHANNELS) });
                    default:
                        return l.t['SeA+Gx'];
                }
            })(),
            flag: s.Plq.MANAGE_MESSAGES
        },
        [s.Plq.READ_MESSAGE_HISTORY.toString()]: {
            title: s.TPd.GUILD_THREADS_ONLY.has(u) ? l.NW.string(l.t['0RQwtr']) : l.NW.string(l.t.l9ufaW),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t['cJRv/v'];
                    case s.d4z.GUILD_VOICE:
                        return o.Z.getTextInVoiceReadMessageHistoryChannelPermissionText(null == c ? void 0 : c.readMessageHistoryDisabled);
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t.RqCc7u;
                    default:
                        return l.t.cuMfHx;
                }
            })(),
            flag: s.Plq.READ_MESSAGE_HISTORY
        },
        [s.Plq.SEND_TTS_MESSAGES.toString()]: {
            title: l.NW.string(l.t.mMbwh4),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.b7pc9f : l.t.CpakGx,
            flag: s.Plq.SEND_TTS_MESSAGES
        },
        [s.Plq.USE_APPLICATION_COMMANDS.toString()]: {
            title: l.NW.string(l.t.nkoPOj),
            description: u === s.d4z.GUILD_CATEGORY ? l.t['D+qW0N'] : l.t.ReG3gI,
            flag: s.Plq.USE_APPLICATION_COMMANDS
        },
        [s.Plq.SEND_VOICE_MESSAGES.toString()]: {
            title: l.NW.string(l.t.WlWSBQ),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.gavGfn : l.t.BhEo9f,
            flag: s.Plq.SEND_VOICE_MESSAGES
        },
        [s.Plq.SEND_POLLS.toString()]: {
            title: l.NW.string(l.t.UMQ7W1),
            description: u === s.d4z.GUILD_CATEGORY ? l.t['18Ya7O'] : l.t.ckKKIC,
            flag: s.Plq.SEND_POLLS
        },
        [s.Plq.USE_CLYDE_AI.toString()]: {
            title: l.NW.string(l.t['8eeEZm']),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.Tx5TjI : l.t.d664Fx,
            flag: s.Plq.USE_CLYDE_AI
        },
        [s.Plq.CONNECT.toString()]: {
            title: l.NW.string(l.t.S0W8Z2),
            description: (() => {
                if (t)
                    switch (u) {
                        case s.d4z.GUILD_CATEGORY:
                            return l.t.XcrieH;
                        case s.d4z.GUILD_STAGE_VOICE:
                            return l.t.SOFNhI;
                        case s.d4z.GUILD_TEXT:
                        case s.d4z.GUILD_FORUM:
                        case s.d4z.GUILD_MEDIA:
                            return l.t.LsS8xc;
                        default:
                            return l.t.j4AyOz;
                    }
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.stA0Hh;
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t['G9+QiY'];
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t['QU/Rw8'];
                    default:
                        return l.t.HvG8ub;
                }
            })(),
            flag: s.Plq.CONNECT
        },
        [s.Plq.SPEAK.toString()]: {
            title: l.NW.string(l.t['8w1tIS']),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.iXhS6e;
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t['a8n74+'];
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t['+VXsJC'];
                    default:
                        return l.t['568E6e'];
                }
            })(),
            flag: s.Plq.SPEAK
        },
        [s.Plq.STREAM.toString()]: {
            title: l.NW.string(l.t.FlNoSU),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t['ryG0/P'];
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t.AuEQEB;
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t.swJcNz;
                    default:
                        return l.t.RY8rIS;
                }
            })(),
            flag: s.Plq.STREAM
        },
        [s.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: l.NW.string(l.t.rLSGen),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.maNzCA;
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t.RyEwlZ;
                    default:
                        return l.t.qinvMT;
                }
            })(),
            flag: s.Plq.USE_EMBEDDED_ACTIVITIES
        },
        [s.Plq.USE_EXTERNAL_APPS.toString()]: {
            title: l.NW.string(l.t['3TzAk5']),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.bgIY3N;
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t.qPUPio;
                    default:
                        return l.t.czqMLi;
                }
            })(),
            flag: s.Plq.USE_EXTERNAL_APPS
        },
        [s.Plq.USE_SOUNDBOARD.toString()]: {
            title: l.NW.string(l.t.Bco7ND),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.NW.format(l.t['0kBp//'], { helpCenterArticle: a.Z.getArticleURL(s.BhN.SOUNDBOARD) });
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.NW.format(l.t['6eYqU1'], { helpCenterArticle: a.Z.getArticleURL(s.BhN.SOUNDBOARD) });
                    default:
                        return l.NW.format(l.t.GEi6Ym, { helpCenterArticle: a.Z.getArticleURL(s.BhN.SOUNDBOARD) });
                }
            })(),
            flag: s.Plq.USE_SOUNDBOARD
        },
        [s.Plq.USE_EXTERNAL_SOUNDS.toString()]: {
            title: l.NW.string(l.t.pwaVJy),
            description: l.t.qDpPtb,
            flag: s.Plq.USE_EXTERNAL_SOUNDS
        },
        [s.Plq.USE_VAD.toString()]: {
            title: l.NW.string(l.t['08zAV1']),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.fUYPl5;
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t.BJKqsb;
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t['3GJwsb'];
                    default:
                        return l.t.s2eihY;
                }
            })(),
            flag: s.Plq.USE_VAD
        },
        [s.Plq.PRIORITY_SPEAKER.toString()]: {
            title: l.NW.string(l.t.BVK71t),
            description: (() => {
                let e = {
                    keybind: l.NW.string(l.t.DkSwJy),
                    onClick: () => {
                        r.Z.open(s.oAB.KEYBINDS);
                    }
                };
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.NW.format(l.t['8nIfDA'], e);
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.NW.format(l.t['0t6uSk'], e);
                    default:
                        return l.NW.format(l.t.UvB2KC, e);
                }
            })(),
            flag: s.Plq.PRIORITY_SPEAKER
        },
        [s.Plq.MUTE_MEMBERS.toString()]: {
            title: l.NW.string(l.t['8EI309']),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.bcuobG;
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t.EbvdHx;
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t.KYDG2N;
                    default:
                        return l.t.LW5C9P;
                }
            })(),
            flag: s.Plq.MUTE_MEMBERS
        },
        [s.Plq.DEAFEN_MEMBERS.toString()]: {
            title: l.NW.string(l.t['9L47Fh']),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.amZ5vr;
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t['d+i1nZ'];
                    default:
                        return l.t.UAdIxs;
                }
            })(),
            flag: s.Plq.DEAFEN_MEMBERS
        },
        [s.Plq.MOVE_MEMBERS.toString()]: {
            title: l.NW.string(l.t.YtjJPT),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.XmoyRE;
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t.bizKz8;
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t.cbdQy8;
                    default:
                        return l.t.nSD1am;
                }
            })(),
            flag: s.Plq.MOVE_MEMBERS
        },
        [s.Plq.REQUEST_TO_SPEAK.toString()]: {
            title: l.NW.string(l.t['5kicT0']),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.T1lMSk : l.t.uzlYFB,
            flag: s.Plq.REQUEST_TO_SPEAK
        },
        [s.Plq.MANAGE_THREADS.toString()]: {
            title: s.TPd.GUILD_THREADS_ONLY.has(u) ? l.NW.string(l.t.ossiZG) : n && u === s.d4z.GUILD_CATEGORY ? l.NW.string(l.t.QKe7Q0) : l.NW.string(l.t.kEqgr6),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return n ? l.t.S31soa : l.t.YDIQ8P;
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t['XLi/jI'];
                    default:
                        return l.t.yvan0t;
                }
            })(),
            flag: s.Plq.MANAGE_THREADS
        },
        [s.Plq.CREATE_PUBLIC_THREADS.toString()]: {
            title: l.NW.string(l.t['25rKnZ']),
            description: u === s.d4z.GUILD_CATEGORY ? l.t['+M1yLi'] : l.t['5SDtGB'],
            flag: s.Plq.CREATE_PUBLIC_THREADS
        },
        [s.Plq.CREATE_PRIVATE_THREADS.toString()]: {
            title: l.NW.string(l.t.QwbTSU),
            description: u === s.d4z.GUILD_CATEGORY ? l.t['hBS/zs'] : l.t.Chg2zc,
            flag: s.Plq.CREATE_PRIVATE_THREADS
        },
        [s.Plq.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: s.TPd.GUILD_THREADS_ONLY.has(u) ? l.NW.string(l.t.fqhqWl) : n && u === s.d4z.GUILD_CATEGORY ? l.NW.string(l.t['5QlVGx']) : l.NW.string(l.t.fTE74u),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return n ? l.t.DlIVcH : l.t.VvrChI;
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t.XTnrPD;
                    default:
                        return l.t.xHO6MT;
                }
            })(),
            flag: s.Plq.SEND_MESSAGES_IN_THREADS
        },
        [s.Plq.MANAGE_EVENTS.toString()]: {
            title: l.NW.string(l.t.HIgA5e),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.CP2sz8 : l.t['4pO/TU'],
            flag: s.Plq.MANAGE_EVENTS
        },
        [s.Plq.CREATE_EVENTS.toString()]: {
            title: l.NW.string(l.t.qyjZub),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.XpibmJ : l.t.sPoBLS,
            flag: s.Plq.CREATE_EVENTS
        },
        [s.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: l.NW.string(l.t.VBwkUV),
            description: l.t.C6BzX1,
            flag: s.Plq.SET_VOICE_CHANNEL_STATUS
        }
    };
}
