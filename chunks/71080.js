i.d(e, {
    EQ: () => G,
    IG: () => D,
    aC: () => I,
    kf: () => d,
    m$: () => a
});
var r,
    n,
    E = i(230711),
    l = i(197062),
    s = i(727866),
    S = i(63063),
    _ = i(981631),
    A = i(388032),
    I = (((r = {})[(r.EMPTY_STATE = 0)] = 'EMPTY_STATE'), (r[(r.ADMINISTRATOR = 1)] = 'ADMINISTRATOR'), (r[(r.ROLE = 2)] = 'ROLE'), (r[(r.OWNER = 3)] = 'OWNER'), (r[(r.MEMBER = 4)] = 'MEMBER'), (r[(r.USER = 5)] = 'USER'), (r[(r.GUILD = 6)] = 'GUILD'), r),
    a = (((n = {})[(n.ROLES = 0)] = 'ROLES'), (n[(n.MEMBERS = 1)] = 'MEMBERS'), (n[(n.USERS = 2)] = 'USERS'), (n[(n.GUILDS = 3)] = 'GUILDS'), n);
let G = 20,
    d = 'channelPermissionSettingsAdvancedModeOn';
function D(t, e, i, r) {
    let n = t.type;
    return {
        [_.Plq.VIEW_CHANNEL.toString()]: {
            title: n === _.d4z.GUILD_CATEGORY ? A.intl.string(A.t.uV83ys) : A.intl.string(A.t['W/A4Qk']),
            description: (() => {
                if (e)
                    switch (n) {
                        case _.d4z.GUILD_CATEGORY:
                            return A.t['o/vBzs'];
                        case _.d4z.GUILD_VOICE:
                        case _.d4z.GUILD_STAGE_VOICE:
                            return A.t.ejL1Wl;
                        default:
                            return A.t['3jG0Bg'];
                    }
                return n === _.d4z.GUILD_CATEGORY ? A.t.SzosGh : A.t.M2iEy8;
            })(),
            flag: _.Plq.VIEW_CHANNEL
        },
        [_.Plq.MANAGE_CHANNELS.toString()]: {
            title: n === _.d4z.GUILD_CATEGORY ? A.intl.string(A.t['9qLtWl']) : A.intl.string(A.t.nAw15O),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.t.KJ2JnJ;
                    case _.d4z.GUILD_VOICE:
                        return A.t['+gl2nZ'];
                    case _.d4z.GUILD_STAGE_VOICE:
                        return A.t['SDX66+'];
                    default:
                        return A.t.ydL28v;
                }
            })(),
            flag: _.Plq.MANAGE_CHANNELS
        },
        [_.Plq.MANAGE_ROLES.toString()]: {
            title: A.intl.string(A.t.ICb6am),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.t.TyyCMD;
                    case _.d4z.GUILD_STAGE_VOICE:
                        return A.t.hcw4m5;
                    default:
                        return A.t.hOMXOj;
                }
            })(),
            flag: _.Plq.MANAGE_ROLES
        },
        [_.Plq.MANAGE_WEBHOOKS.toString()]: {
            title: A.intl.string(A.t['/ADKmJ']),
            description: n === _.d4z.GUILD_CATEGORY ? A.t['K5+ZZ2'] : A.t.CYBZr6,
            flag: _.Plq.MANAGE_WEBHOOKS
        },
        [_.Plq.CREATE_INSTANT_INVITE.toString()]: {
            title: A.intl.string(A.t.zJrgTE),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.t['3YFAAQ'];
                    case _.d4z.GUILD_VOICE:
                    case _.d4z.GUILD_STAGE_VOICE:
                        return A.t.lUCs1t;
                    default:
                        return A.t.q4g2aG;
                }
            })(),
            flag: _.Plq.CREATE_INSTANT_INVITE
        },
        [_.Plq.SEND_MESSAGES.toString()]: {
            title: _.TPd.GUILD_THREADS_ONLY.has(n) ? A.intl.string(A.t.nJwAHR) : i && n === _.d4z.GUILD_CATEGORY ? A.intl.string(A.t.S1VOwc) : A.intl.string(A.t.T32rkJ),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return i ? A.t.IjeLur : A.t.qLnFpa;
                    case _.d4z.GUILD_FORUM:
                        return (null == r ? void 0 : r.createPostsDisabled) && !t.isMediaChannel() ? l.Z.getForumChannelPermissionText() : A.t.LG9VAg;
                    case _.d4z.GUILD_MEDIA:
                        return A.t.LG9VAg;
                    case _.d4z.GUILD_ANNOUNCEMENT:
                        return A.intl.format(A.t.WFwfSE, { articleURL: S.Z.getArticleURL(_.BhN.ANNOUNCEMENT_CHANNELS) });
                    case _.d4z.GUILD_VOICE:
                        return s.Z.getTextInVoiceSendMessageChannelPermissionText(null == r ? void 0 : r.sendMessagesDisabled);
                    default:
                        return A.t.WQ6zpa;
                }
            })(),
            flag: _.Plq.SEND_MESSAGES
        },
        [_.Plq.EMBED_LINKS.toString()]: {
            title: A.intl.string(A.t['969dEB']),
            description: n === _.d4z.GUILD_CATEGORY ? A.t['7zlUa2'] : A.t.XFFhAw,
            flag: _.Plq.EMBED_LINKS
        },
        [_.Plq.ATTACH_FILES.toString()]: {
            title: A.intl.string(A.t['3AS4UF']),
            description: n === _.d4z.GUILD_CATEGORY ? A.t.XREf9v : A.t.WK9r7O,
            flag: _.Plq.ATTACH_FILES
        },
        [_.Plq.ADD_REACTIONS.toString()]: {
            title: A.intl.string(A.t.yEoJAg),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.t.pZT2Zm;
                    case _.d4z.GUILD_VOICE:
                        return A.t.xSSbIi;
                    default:
                        return A.t.PVjR1d;
                }
            })(),
            flag: _.Plq.ADD_REACTIONS
        },
        [_.Plq.USE_EXTERNAL_EMOJIS.toString()]: {
            title: A.intl.string(A.t['+bxf3N']),
            description: n === _.d4z.GUILD_CATEGORY ? A.t.mWAbKy : A.t.Qc5vOj,
            flag: _.Plq.USE_EXTERNAL_EMOJIS
        },
        [_.Plq.USE_EXTERNAL_STICKERS.toString()]: {
            title: A.intl.string(A.t.ERNhYW),
            description: n === _.d4z.GUILD_CATEGORY ? A.t['39whJy'] : A.t.VF4fZW,
            flag: _.Plq.USE_EXTERNAL_STICKERS
        },
        [_.Plq.MENTION_EVERYONE.toString()]: {
            title: n === _.d4z.GUILD_STAGE_VOICE ? A.intl.string(A.t.VDUAHB) : A.intl.string(A.t.Y78KGB),
            description: n === _.d4z.GUILD_CATEGORY ? A.t['HOhg/P'] : n === _.d4z.GUILD_STAGE_VOICE ? A.t.rZn1oK : A.t['6IUSdn'],
            flag: _.Plq.MENTION_EVERYONE
        },
        [_.Plq.MANAGE_MESSAGES.toString()]: {
            title: A.intl.string(A.t['6lU9xM']),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.t['5R9nYm'];
                    case _.d4z.GUILD_ANNOUNCEMENT:
                        return A.intl.format(A.t.XRxOo6, { articleURL: S.Z.getArticleURL(_.BhN.ANNOUNCEMENT_CHANNELS) });
                    default:
                        return A.t['SeA+Gx'];
                }
            })(),
            flag: _.Plq.MANAGE_MESSAGES
        },
        [_.Plq.PIN_MESSAGES.toString()]: {
            title: A.intl.string(A.t.Y5BI39),
            description: n === _.d4z.GUILD_CATEGORY ? A.t['gmbD8/'] : A.t['0l2EjI'],
            flag: _.Plq.PIN_MESSAGES
        },
        [_.Plq.READ_MESSAGE_HISTORY.toString()]: {
            title: _.TPd.GUILD_THREADS_ONLY.has(n) ? A.intl.string(A.t['0RQwtr']) : A.intl.string(A.t.l9ufaW),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.t['cJRv/v'];
                    case _.d4z.GUILD_VOICE:
                        return s.Z.getTextInVoiceReadMessageHistoryChannelPermissionText(null == r ? void 0 : r.readMessageHistoryDisabled);
                    case _.d4z.GUILD_FORUM:
                    case _.d4z.GUILD_MEDIA:
                        return A.t.RqCc7u;
                    default:
                        return A.t.cuMfHx;
                }
            })(),
            flag: _.Plq.READ_MESSAGE_HISTORY
        },
        [_.Plq.SEND_TTS_MESSAGES.toString()]: {
            title: A.intl.string(A.t.mMbwh4),
            description: n === _.d4z.GUILD_CATEGORY ? A.t.b7pc9f : A.t.CpakGx,
            flag: _.Plq.SEND_TTS_MESSAGES
        },
        [_.Plq.USE_APPLICATION_COMMANDS.toString()]: {
            title: A.intl.string(A.t.nkoPOj),
            description: n === _.d4z.GUILD_CATEGORY ? A.t['D+qW0N'] : A.t.ReG3gI,
            flag: _.Plq.USE_APPLICATION_COMMANDS
        },
        [_.Plq.SEND_VOICE_MESSAGES.toString()]: {
            title: A.intl.string(A.t.WlWSBQ),
            description: n === _.d4z.GUILD_CATEGORY ? A.t.gavGfn : A.t.BhEo9f,
            flag: _.Plq.SEND_VOICE_MESSAGES
        },
        [_.Plq.SEND_POLLS.toString()]: {
            title: A.intl.string(A.t.UMQ7W1),
            description: n === _.d4z.GUILD_CATEGORY ? A.t['18Ya7O'] : A.t.ckKKIC,
            flag: _.Plq.SEND_POLLS
        },
        [_.Plq.CONNECT.toString()]: {
            title: A.intl.string(A.t.S0W8Z2),
            description: (() => {
                if (e)
                    switch (n) {
                        case _.d4z.GUILD_CATEGORY:
                            return A.t.XcrieH;
                        case _.d4z.GUILD_STAGE_VOICE:
                            return A.t.SOFNhI;
                        case _.d4z.GUILD_TEXT:
                        case _.d4z.GUILD_FORUM:
                        case _.d4z.GUILD_MEDIA:
                            return A.t.LsS8xc;
                        default:
                            return A.t.j4AyOz;
                    }
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.t.stA0Hh;
                    case _.d4z.GUILD_STAGE_VOICE:
                        return A.t['G9+QiY'];
                    case _.d4z.GUILD_TEXT:
                    case _.d4z.GUILD_FORUM:
                    case _.d4z.GUILD_MEDIA:
                        return A.t['QU/Rw8'];
                    default:
                        return A.t.HvG8ub;
                }
            })(),
            flag: _.Plq.CONNECT
        },
        [_.Plq.SPEAK.toString()]: {
            title: A.intl.string(A.t['8w1tIS']),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.t.iXhS6e;
                    case _.d4z.GUILD_STAGE_VOICE:
                        return A.t['a8n74+'];
                    case _.d4z.GUILD_TEXT:
                    case _.d4z.GUILD_FORUM:
                    case _.d4z.GUILD_MEDIA:
                        return A.t['+VXsJC'];
                    default:
                        return A.t['568E6e'];
                }
            })(),
            flag: _.Plq.SPEAK
        },
        [_.Plq.STREAM.toString()]: {
            title: A.intl.string(A.t.FlNoSU),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.t['ryG0/P'];
                    case _.d4z.GUILD_TEXT:
                    case _.d4z.GUILD_FORUM:
                    case _.d4z.GUILD_MEDIA:
                        return A.t.AuEQEB;
                    case _.d4z.GUILD_STAGE_VOICE:
                        return A.t.swJcNz;
                    default:
                        return A.t.RY8rIS;
                }
            })(),
            flag: _.Plq.STREAM
        },
        [_.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: A.intl.string(A.t.rLSGen),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.t.maNzCA;
                    case _.d4z.GUILD_FORUM:
                    case _.d4z.GUILD_MEDIA:
                        return A.t.RyEwlZ;
                    default:
                        return A.t.qinvMT;
                }
            })(),
            flag: _.Plq.USE_EMBEDDED_ACTIVITIES
        },
        [_.Plq.USE_EXTERNAL_APPS.toString()]: {
            title: A.intl.string(A.t['3TzAk5']),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.t.bgIY3N;
                    case _.d4z.GUILD_FORUM:
                    case _.d4z.GUILD_MEDIA:
                        return A.t.qPUPio;
                    default:
                        return A.t.czqMLi;
                }
            })(),
            flag: _.Plq.USE_EXTERNAL_APPS
        },
        [_.Plq.USE_SOUNDBOARD.toString()]: {
            title: A.intl.string(A.t.Bco7ND),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.intl.format(A.t['0kBp//'], { helpCenterArticle: S.Z.getArticleURL(_.BhN.SOUNDBOARD) });
                    case _.d4z.GUILD_TEXT:
                    case _.d4z.GUILD_FORUM:
                    case _.d4z.GUILD_MEDIA:
                        return A.intl.format(A.t['6eYqU1'], { helpCenterArticle: S.Z.getArticleURL(_.BhN.SOUNDBOARD) });
                    default:
                        return A.intl.format(A.t.GEi6Ym, { helpCenterArticle: S.Z.getArticleURL(_.BhN.SOUNDBOARD) });
                }
            })(),
            flag: _.Plq.USE_SOUNDBOARD
        },
        [_.Plq.USE_EXTERNAL_SOUNDS.toString()]: {
            title: A.intl.string(A.t.pwaVJy),
            description: A.t.qDpPtb,
            flag: _.Plq.USE_EXTERNAL_SOUNDS
        },
        [_.Plq.USE_VAD.toString()]: {
            title: A.intl.string(A.t['08zAV1']),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.t.fUYPl5;
                    case _.d4z.GUILD_STAGE_VOICE:
                        return A.t.BJKqsb;
                    case _.d4z.GUILD_TEXT:
                    case _.d4z.GUILD_FORUM:
                    case _.d4z.GUILD_MEDIA:
                        return A.t['3GJwsb'];
                    default:
                        return A.t.s2eihY;
                }
            })(),
            flag: _.Plq.USE_VAD
        },
        [_.Plq.PRIORITY_SPEAKER.toString()]: {
            title: A.intl.string(A.t.BVK71t),
            description: (() => {
                let t = {
                    keybind: A.intl.string(A.t.DkSwJy),
                    onClick: () => {
                        E.Z.open(_.oAB.KEYBINDS);
                    }
                };
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.intl.format(A.t['8nIfDA'], t);
                    case _.d4z.GUILD_TEXT:
                    case _.d4z.GUILD_FORUM:
                    case _.d4z.GUILD_MEDIA:
                        return A.intl.format(A.t['0t6uSk'], t);
                    default:
                        return A.intl.format(A.t.UvB2KC, t);
                }
            })(),
            flag: _.Plq.PRIORITY_SPEAKER
        },
        [_.Plq.MUTE_MEMBERS.toString()]: {
            title: A.intl.string(A.t['8EI309']),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.t.bcuobG;
                    case _.d4z.GUILD_STAGE_VOICE:
                        return A.t.EbvdHx;
                    case _.d4z.GUILD_TEXT:
                    case _.d4z.GUILD_FORUM:
                    case _.d4z.GUILD_MEDIA:
                        return A.t.KYDG2N;
                    default:
                        return A.t.LW5C9P;
                }
            })(),
            flag: _.Plq.MUTE_MEMBERS
        },
        [_.Plq.DEAFEN_MEMBERS.toString()]: {
            title: A.intl.string(A.t['9L47Fh']),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.t.amZ5vr;
                    case _.d4z.GUILD_TEXT:
                    case _.d4z.GUILD_FORUM:
                    case _.d4z.GUILD_MEDIA:
                        return A.t['d+i1nZ'];
                    default:
                        return A.t.UAdIxs;
                }
            })(),
            flag: _.Plq.DEAFEN_MEMBERS
        },
        [_.Plq.MOVE_MEMBERS.toString()]: {
            title: A.intl.string(A.t.YtjJPT),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return A.t.XmoyRE;
                    case _.d4z.GUILD_STAGE_VOICE:
                        return A.t.bizKz8;
                    case _.d4z.GUILD_TEXT:
                    case _.d4z.GUILD_FORUM:
                    case _.d4z.GUILD_MEDIA:
                        return A.t.cbdQy8;
                    default:
                        return A.t.nSD1am;
                }
            })(),
            flag: _.Plq.MOVE_MEMBERS
        },
        [_.Plq.REQUEST_TO_SPEAK.toString()]: {
            title: A.intl.string(A.t['5kicT0']),
            description: n === _.d4z.GUILD_CATEGORY ? A.t.T1lMSk : A.t.uzlYFB,
            flag: _.Plq.REQUEST_TO_SPEAK
        },
        [_.Plq.MANAGE_THREADS.toString()]: {
            title: _.TPd.GUILD_THREADS_ONLY.has(n) ? A.intl.string(A.t.ossiZG) : i && n === _.d4z.GUILD_CATEGORY ? A.intl.string(A.t.QKe7Q0) : A.intl.string(A.t.kEqgr6),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return i ? A.t.S31soa : A.t.YDIQ8P;
                    case _.d4z.GUILD_FORUM:
                    case _.d4z.GUILD_MEDIA:
                        return A.t['XLi/jI'];
                    default:
                        return A.t.yvan0t;
                }
            })(),
            flag: _.Plq.MANAGE_THREADS
        },
        [_.Plq.CREATE_PUBLIC_THREADS.toString()]: {
            title: A.intl.string(A.t['25rKnZ']),
            description: n === _.d4z.GUILD_CATEGORY ? A.t['+M1yLi'] : A.t['5SDtGB'],
            flag: _.Plq.CREATE_PUBLIC_THREADS
        },
        [_.Plq.CREATE_PRIVATE_THREADS.toString()]: {
            title: A.intl.string(A.t.QwbTSU),
            description: n === _.d4z.GUILD_CATEGORY ? A.t['hBS/zs'] : A.t.Chg2zc,
            flag: _.Plq.CREATE_PRIVATE_THREADS
        },
        [_.Plq.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: _.TPd.GUILD_THREADS_ONLY.has(n) ? A.intl.string(A.t.fqhqWl) : i && n === _.d4z.GUILD_CATEGORY ? A.intl.string(A.t['5QlVGx']) : A.intl.string(A.t.fTE74u),
            description: (() => {
                switch (n) {
                    case _.d4z.GUILD_CATEGORY:
                        return i ? A.t.DlIVcH : A.t.VvrChI;
                    case _.d4z.GUILD_FORUM:
                    case _.d4z.GUILD_MEDIA:
                        return A.t.XTnrPD;
                    default:
                        return A.t.xHO6MT;
                }
            })(),
            flag: _.Plq.SEND_MESSAGES_IN_THREADS
        },
        [_.Plq.MANAGE_EVENTS.toString()]: {
            title: A.intl.string(A.t.HIgA5e),
            description: n === _.d4z.GUILD_CATEGORY ? A.t.CP2sz8 : A.t['4pO/TU'],
            flag: _.Plq.MANAGE_EVENTS
        },
        [_.Plq.CREATE_EVENTS.toString()]: {
            title: A.intl.string(A.t.qyjZub),
            description: n === _.d4z.GUILD_CATEGORY ? A.t.XpibmJ : A.t.sPoBLS,
            flag: _.Plq.CREATE_EVENTS
        },
        [_.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: A.intl.string(A.t.VBwkUV),
            description: A.t.C6BzX1,
            flag: _.Plq.SET_VOICE_CHANNEL_STATUS
        }
    };
}
