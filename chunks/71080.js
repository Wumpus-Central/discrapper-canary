r.d(n, {
    EQ: function () {
        return h;
    },
    IG: function () {
        return m;
    },
    aC: function () {
        return i;
    },
    kf: function () {
        return _;
    },
    m$: function () {
        return a;
    }
});
var i,
    a,
    o,
    s,
    l = r(230711),
    u = r(197062),
    c = r(727866),
    d = r(63063),
    f = r(981631),
    p = r(388032);
!(function (e) {
    (e[(e.EMPTY_STATE = 0)] = 'EMPTY_STATE'), (e[(e.ADMINISTRATOR = 1)] = 'ADMINISTRATOR'), (e[(e.ROLE = 2)] = 'ROLE'), (e[(e.OWNER = 3)] = 'OWNER'), (e[(e.MEMBER = 4)] = 'MEMBER'), (e[(e.USER = 5)] = 'USER'), (e[(e.GUILD = 6)] = 'GUILD');
})(i || (i = {})),
    !(function (e) {
        (e[(e.ROLES = 0)] = 'ROLES'), (e[(e.MEMBERS = 1)] = 'MEMBERS'), (e[(e.USERS = 2)] = 'USERS'), (e[(e.GUILDS = 3)] = 'GUILDS');
    })(a || (a = {}));
let h = 20,
    _ = 'channelPermissionSettingsAdvancedModeOn';
function m(e, n, r, i) {
    let a = e.type;
    return {
        [f.Plq.VIEW_CHANNEL.toString()]: {
            title: a === f.d4z.GUILD_CATEGORY ? p.intl.string(p.t.uV83ys) : p.intl.string(p.t['W/A4Qk']),
            description: (() => {
                if (n)
                    switch (a) {
                        case f.d4z.GUILD_CATEGORY:
                            return p.t['o/vBzs'];
                        case f.d4z.GUILD_VOICE:
                        case f.d4z.GUILD_STAGE_VOICE:
                            return p.t.ejL1Wl;
                        default:
                            return p.t['3jG0Bg'];
                    }
                return a === f.d4z.GUILD_CATEGORY ? p.t.SzosGh : p.t.M2iEy8;
            })(),
            flag: f.Plq.VIEW_CHANNEL
        },
        [f.Plq.MANAGE_CHANNELS.toString()]: {
            title: a === f.d4z.GUILD_CATEGORY ? p.intl.string(p.t['9qLtWl']) : p.intl.string(p.t.nAw15O),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.t.KJ2JnJ;
                    case f.d4z.GUILD_VOICE:
                        return p.t['+gl2nZ'];
                    case f.d4z.GUILD_STAGE_VOICE:
                        return p.t['SDX66+'];
                    default:
                        return p.t.ydL28v;
                }
            })(),
            flag: f.Plq.MANAGE_CHANNELS
        },
        [f.Plq.MANAGE_ROLES.toString()]: {
            title: p.intl.string(p.t.ICb6am),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.t.TyyCMD;
                    case f.d4z.GUILD_STAGE_VOICE:
                        return p.t.hcw4m5;
                    default:
                        return p.t.hOMXOj;
                }
            })(),
            flag: f.Plq.MANAGE_ROLES
        },
        [f.Plq.MANAGE_WEBHOOKS.toString()]: {
            title: p.intl.string(p.t['/ADKmJ']),
            description: a === f.d4z.GUILD_CATEGORY ? p.t['K5+ZZ2'] : p.t.CYBZr6,
            flag: f.Plq.MANAGE_WEBHOOKS
        },
        [f.Plq.CREATE_INSTANT_INVITE.toString()]: {
            title: p.intl.string(p.t.zJrgTE),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.t['3YFAAQ'];
                    case f.d4z.GUILD_VOICE:
                    case f.d4z.GUILD_STAGE_VOICE:
                        return p.t.lUCs1t;
                    default:
                        return p.t.q4g2aG;
                }
            })(),
            flag: f.Plq.CREATE_INSTANT_INVITE
        },
        [f.Plq.SEND_MESSAGES.toString()]: {
            title: f.TPd.GUILD_THREADS_ONLY.has(a) ? p.intl.string(p.t.nJwAHR) : r && a === f.d4z.GUILD_CATEGORY ? p.intl.string(p.t.S1VOwc) : p.intl.string(p.t.T32rkJ),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return r ? p.t.IjeLur : p.t.qLnFpa;
                    case f.d4z.GUILD_FORUM:
                        return (null == i ? void 0 : i.createPostsDisabled) && !e.isMediaChannel() ? u.Z.getForumChannelPermissionText() : p.t.LG9VAg;
                    case f.d4z.GUILD_MEDIA:
                        return p.t.LG9VAg;
                    case f.d4z.GUILD_ANNOUNCEMENT:
                        return p.intl.format(p.t.WFwfSE, { articleURL: d.Z.getArticleURL(f.BhN.ANNOUNCEMENT_CHANNELS) });
                    case f.d4z.GUILD_VOICE:
                        return c.Z.getTextInVoiceSendMessageChannelPermissionText(null == i ? void 0 : i.sendMessagesDisabled);
                    default:
                        return p.t.WQ6zpa;
                }
            })(),
            flag: f.Plq.SEND_MESSAGES
        },
        [f.Plq.EMBED_LINKS.toString()]: {
            title: p.intl.string(p.t['969dEB']),
            description: a === f.d4z.GUILD_CATEGORY ? p.t['7zlUa2'] : p.t.XFFhAw,
            flag: f.Plq.EMBED_LINKS
        },
        [f.Plq.ATTACH_FILES.toString()]: {
            title: p.intl.string(p.t['3AS4UF']),
            description: a === f.d4z.GUILD_CATEGORY ? p.t.XREf9v : p.t.WK9r7O,
            flag: f.Plq.ATTACH_FILES
        },
        [f.Plq.ADD_REACTIONS.toString()]: {
            title: p.intl.string(p.t.yEoJAg),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.t.pZT2Zm;
                    case f.d4z.GUILD_VOICE:
                        return p.t.xSSbIi;
                    default:
                        return p.t.PVjR1d;
                }
            })(),
            flag: f.Plq.ADD_REACTIONS
        },
        [f.Plq.USE_EXTERNAL_EMOJIS.toString()]: {
            title: p.intl.string(p.t['+bxf3N']),
            description: a === f.d4z.GUILD_CATEGORY ? p.t.mWAbKy : p.t.Qc5vOj,
            flag: f.Plq.USE_EXTERNAL_EMOJIS
        },
        [f.Plq.USE_EXTERNAL_STICKERS.toString()]: {
            title: p.intl.string(p.t.ERNhYW),
            description: a === f.d4z.GUILD_CATEGORY ? p.t['39whJy'] : p.t.VF4fZW,
            flag: f.Plq.USE_EXTERNAL_STICKERS
        },
        [f.Plq.MENTION_EVERYONE.toString()]: {
            title: a === f.d4z.GUILD_STAGE_VOICE ? p.intl.string(p.t.VDUAHB) : p.intl.string(p.t.Y78KGB),
            description: a === f.d4z.GUILD_CATEGORY ? p.t['HOhg/P'] : a === f.d4z.GUILD_STAGE_VOICE ? p.t.rZn1oK : p.t['6IUSdn'],
            flag: f.Plq.MENTION_EVERYONE
        },
        [f.Plq.MANAGE_MESSAGES.toString()]: {
            title: p.intl.string(p.t['6lU9xM']),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.t['5R9nYm'];
                    case f.d4z.GUILD_ANNOUNCEMENT:
                        return p.intl.format(p.t.XRxOo6, { articleURL: d.Z.getArticleURL(f.BhN.ANNOUNCEMENT_CHANNELS) });
                    default:
                        return p.t['SeA+Gx'];
                }
            })(),
            flag: f.Plq.MANAGE_MESSAGES
        },
        [f.Plq.READ_MESSAGE_HISTORY.toString()]: {
            title: f.TPd.GUILD_THREADS_ONLY.has(a) ? p.intl.string(p.t['0RQwtr']) : p.intl.string(p.t.l9ufaW),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.t['cJRv/v'];
                    case f.d4z.GUILD_VOICE:
                        return c.Z.getTextInVoiceReadMessageHistoryChannelPermissionText(null == i ? void 0 : i.readMessageHistoryDisabled);
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return p.t.RqCc7u;
                    default:
                        return p.t.cuMfHx;
                }
            })(),
            flag: f.Plq.READ_MESSAGE_HISTORY
        },
        [f.Plq.SEND_TTS_MESSAGES.toString()]: {
            title: p.intl.string(p.t.mMbwh4),
            description: a === f.d4z.GUILD_CATEGORY ? p.t.b7pc9f : p.t.CpakGx,
            flag: f.Plq.SEND_TTS_MESSAGES
        },
        [f.Plq.USE_APPLICATION_COMMANDS.toString()]: {
            title: p.intl.string(p.t.nkoPOj),
            description: a === f.d4z.GUILD_CATEGORY ? p.t['D+qW0N'] : p.t.ReG3gI,
            flag: f.Plq.USE_APPLICATION_COMMANDS
        },
        [f.Plq.SEND_VOICE_MESSAGES.toString()]: {
            title: p.intl.string(p.t.WlWSBQ),
            description: a === f.d4z.GUILD_CATEGORY ? p.t.gavGfn : p.t.BhEo9f,
            flag: f.Plq.SEND_VOICE_MESSAGES
        },
        [f.Plq.SEND_POLLS.toString()]: {
            title: p.intl.string(p.t.UMQ7W1),
            description: a === f.d4z.GUILD_CATEGORY ? p.t['18Ya7O'] : p.t.ckKKIC,
            flag: f.Plq.SEND_POLLS
        },
        [f.Plq.USE_CLYDE_AI.toString()]: {
            title: p.intl.string(p.t['8eeEZm']),
            description: a === f.d4z.GUILD_CATEGORY ? p.t.Tx5TjI : p.t.d664Fx,
            flag: f.Plq.USE_CLYDE_AI
        },
        [f.Plq.CONNECT.toString()]: {
            title: p.intl.string(p.t.S0W8Z2),
            description: (() => {
                if (n)
                    switch (a) {
                        case f.d4z.GUILD_CATEGORY:
                            return p.t.XcrieH;
                        case f.d4z.GUILD_STAGE_VOICE:
                            return p.t.SOFNhI;
                        case f.d4z.GUILD_TEXT:
                        case f.d4z.GUILD_FORUM:
                        case f.d4z.GUILD_MEDIA:
                            return p.t.LsS8xc;
                        default:
                            return p.t.j4AyOz;
                    }
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.t.stA0Hh;
                    case f.d4z.GUILD_STAGE_VOICE:
                        return p.t['G9+QiY'];
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return p.t['QU/Rw8'];
                    default:
                        return p.t.HvG8ub;
                }
            })(),
            flag: f.Plq.CONNECT
        },
        [f.Plq.SPEAK.toString()]: {
            title: p.intl.string(p.t['8w1tIS']),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.t.iXhS6e;
                    case f.d4z.GUILD_STAGE_VOICE:
                        return p.t['a8n74+'];
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return p.t['+VXsJC'];
                    default:
                        return p.t['568E6e'];
                }
            })(),
            flag: f.Plq.SPEAK
        },
        [f.Plq.STREAM.toString()]: {
            title: p.intl.string(p.t.FlNoSU),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.t['ryG0/P'];
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return p.t.AuEQEB;
                    case f.d4z.GUILD_STAGE_VOICE:
                        return p.t.swJcNz;
                    default:
                        return p.t.RY8rIS;
                }
            })(),
            flag: f.Plq.STREAM
        },
        [f.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: p.intl.string(p.t.rLSGen),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.t.maNzCA;
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return p.t.RyEwlZ;
                    default:
                        return p.t.qinvMT;
                }
            })(),
            flag: f.Plq.USE_EMBEDDED_ACTIVITIES
        },
        [f.Plq.USE_EXTERNAL_APPS.toString()]: {
            title: p.intl.string(p.t['3TzAk5']),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.t.bgIY3N;
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return p.t.qPUPio;
                    default:
                        return p.t.czqMLi;
                }
            })(),
            flag: f.Plq.USE_EXTERNAL_APPS
        },
        [f.Plq.USE_SOUNDBOARD.toString()]: {
            title: p.intl.string(p.t.Bco7ND),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.intl.format(p.t['0kBp//'], { helpCenterArticle: d.Z.getArticleURL(f.BhN.SOUNDBOARD) });
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return p.intl.format(p.t['6eYqU1'], { helpCenterArticle: d.Z.getArticleURL(f.BhN.SOUNDBOARD) });
                    default:
                        return p.intl.format(p.t.GEi6Ym, { helpCenterArticle: d.Z.getArticleURL(f.BhN.SOUNDBOARD) });
                }
            })(),
            flag: f.Plq.USE_SOUNDBOARD
        },
        [f.Plq.USE_EXTERNAL_SOUNDS.toString()]: {
            title: p.intl.string(p.t.pwaVJy),
            description: p.t.qDpPtb,
            flag: f.Plq.USE_EXTERNAL_SOUNDS
        },
        [f.Plq.USE_VAD.toString()]: {
            title: p.intl.string(p.t['08zAV1']),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.t.fUYPl5;
                    case f.d4z.GUILD_STAGE_VOICE:
                        return p.t.BJKqsb;
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return p.t['3GJwsb'];
                    default:
                        return p.t.s2eihY;
                }
            })(),
            flag: f.Plq.USE_VAD
        },
        [f.Plq.PRIORITY_SPEAKER.toString()]: {
            title: p.intl.string(p.t.BVK71t),
            description: (() => {
                let e = {
                    keybind: p.intl.string(p.t.DkSwJy),
                    onClick: () => {
                        l.Z.open(f.oAB.KEYBINDS);
                    }
                };
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.intl.format(p.t['8nIfDA'], e);
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return p.intl.format(p.t['0t6uSk'], e);
                    default:
                        return p.intl.format(p.t.UvB2KC, e);
                }
            })(),
            flag: f.Plq.PRIORITY_SPEAKER
        },
        [f.Plq.MUTE_MEMBERS.toString()]: {
            title: p.intl.string(p.t['8EI309']),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.t.bcuobG;
                    case f.d4z.GUILD_STAGE_VOICE:
                        return p.t.EbvdHx;
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return p.t.KYDG2N;
                    default:
                        return p.t.LW5C9P;
                }
            })(),
            flag: f.Plq.MUTE_MEMBERS
        },
        [f.Plq.DEAFEN_MEMBERS.toString()]: {
            title: p.intl.string(p.t['9L47Fh']),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.t.amZ5vr;
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return p.t['d+i1nZ'];
                    default:
                        return p.t.UAdIxs;
                }
            })(),
            flag: f.Plq.DEAFEN_MEMBERS
        },
        [f.Plq.MOVE_MEMBERS.toString()]: {
            title: p.intl.string(p.t.YtjJPT),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return p.t.XmoyRE;
                    case f.d4z.GUILD_STAGE_VOICE:
                        return p.t.bizKz8;
                    case f.d4z.GUILD_TEXT:
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return p.t.cbdQy8;
                    default:
                        return p.t.nSD1am;
                }
            })(),
            flag: f.Plq.MOVE_MEMBERS
        },
        [f.Plq.REQUEST_TO_SPEAK.toString()]: {
            title: p.intl.string(p.t['5kicT0']),
            description: a === f.d4z.GUILD_CATEGORY ? p.t.T1lMSk : p.t.uzlYFB,
            flag: f.Plq.REQUEST_TO_SPEAK
        },
        [f.Plq.MANAGE_THREADS.toString()]: {
            title: f.TPd.GUILD_THREADS_ONLY.has(a) ? p.intl.string(p.t.ossiZG) : r && a === f.d4z.GUILD_CATEGORY ? p.intl.string(p.t.QKe7Q0) : p.intl.string(p.t.kEqgr6),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return r ? p.t.S31soa : p.t.YDIQ8P;
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return p.t['XLi/jI'];
                    default:
                        return p.t.yvan0t;
                }
            })(),
            flag: f.Plq.MANAGE_THREADS
        },
        [f.Plq.CREATE_PUBLIC_THREADS.toString()]: {
            title: p.intl.string(p.t['25rKnZ']),
            description: a === f.d4z.GUILD_CATEGORY ? p.t['+M1yLi'] : p.t['5SDtGB'],
            flag: f.Plq.CREATE_PUBLIC_THREADS
        },
        [f.Plq.CREATE_PRIVATE_THREADS.toString()]: {
            title: p.intl.string(p.t.QwbTSU),
            description: a === f.d4z.GUILD_CATEGORY ? p.t['hBS/zs'] : p.t.Chg2zc,
            flag: f.Plq.CREATE_PRIVATE_THREADS
        },
        [f.Plq.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: f.TPd.GUILD_THREADS_ONLY.has(a) ? p.intl.string(p.t.fqhqWl) : r && a === f.d4z.GUILD_CATEGORY ? p.intl.string(p.t['5QlVGx']) : p.intl.string(p.t.fTE74u),
            description: (() => {
                switch (a) {
                    case f.d4z.GUILD_CATEGORY:
                        return r ? p.t.DlIVcH : p.t.VvrChI;
                    case f.d4z.GUILD_FORUM:
                    case f.d4z.GUILD_MEDIA:
                        return p.t.XTnrPD;
                    default:
                        return p.t.xHO6MT;
                }
            })(),
            flag: f.Plq.SEND_MESSAGES_IN_THREADS
        },
        [f.Plq.MANAGE_EVENTS.toString()]: {
            title: p.intl.string(p.t.HIgA5e),
            description: a === f.d4z.GUILD_CATEGORY ? p.t.CP2sz8 : p.t['4pO/TU'],
            flag: f.Plq.MANAGE_EVENTS
        },
        [f.Plq.CREATE_EVENTS.toString()]: {
            title: p.intl.string(p.t.qyjZub),
            description: a === f.d4z.GUILD_CATEGORY ? p.t.XpibmJ : p.t.sPoBLS,
            flag: f.Plq.CREATE_EVENTS
        },
        [f.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: p.intl.string(p.t.VBwkUV),
            description: p.t.C6BzX1,
            flag: f.Plq.SET_VOICE_CHANNEL_STATUS
        }
    };
}
!(function (e) {
    (e.SETTINGS_PAGE = 'settings-page'), (e.MEMBERS_LIST = 'members-list'), (e.EMPTY_STATE = 'empty-state'), (e.CREATE_CHANNEL = 'create-channel');
})(o || (o = {})),
    !(function (e) {
        (e.BASIC = 'basic'), (e.ADVANCED = 'advanced');
    })(s || (s = {}));
