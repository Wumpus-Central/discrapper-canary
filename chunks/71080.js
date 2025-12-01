n.d(t, {
    EQ: () => d,
    IG: () => p,
    aC: () => c,
    kf: () => f,
    m$: () => u,
});
var r = n(197062),
    i = n(727866),
    a = n(313789),
    o = n(63063),
    s = n(981631),
    l = n(388032),
    c = (function (e) {
        return (
            (e[(e.EMPTY_STATE = 0)] = "EMPTY_STATE"),
            (e[(e.ADMINISTRATOR = 1)] = "ADMINISTRATOR"),
            (e[(e.ROLE = 2)] = "ROLE"),
            (e[(e.OWNER = 3)] = "OWNER"),
            (e[(e.MEMBER = 4)] = "MEMBER"),
            (e[(e.USER = 5)] = "USER"),
            (e[(e.GUILD = 6)] = "GUILD"),
            e
        );
    })({}),
    u = (function (e) {
        return (
            (e[(e.ROLES = 0)] = "ROLES"),
            (e[(e.MEMBERS = 1)] = "MEMBERS"),
            (e[(e.USERS = 2)] = "USERS"),
            (e[(e.GUILDS = 3)] = "GUILDS"),
            e
        );
    })({});
let d = 20,
    f = "channelPermissionSettingsAdvancedModeOn";
function p(e, t, c) {
    let u = e.type;
    return {
        [s.Plq.VIEW_CHANNEL.toString()]: {
            title: u === s.d4z.GUILD_CATEGORY ? l.intl.string(l.t.uV83yi) : l.intl.string(l.t["W/A4Qp"]),
            description: (() => {
                if (t)
                    switch (u) {
                        case s.d4z.GUILD_CATEGORY:
                            return l.t["o/vBzj"];
                        case s.d4z.GUILD_VOICE:
                        case s.d4z.GUILD_STAGE_VOICE:
                            return l.t.ejL1Wo;
                        default:
                            return l.t["3jG0Bo"];
                    }
                return u === s.d4z.GUILD_CATEGORY ? l.t.SzosGs : l.t.M2iEy3;
            })(),
            flag: s.Plq.VIEW_CHANNEL,
        },
        [s.Plq.MANAGE_CHANNELS.toString()]: {
            title: u === s.d4z.GUILD_CATEGORY ? l.intl.string(l.t["9qLtWs"]) : l.intl.string(l.t.nAw15L),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.KJ2JnG;
                    case s.d4z.GUILD_VOICE:
                        return l.t["+gl2ne"];
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t.SDX669;
                    default:
                        return l.t.ydL28i;
                }
            })(),
            flag: s.Plq.MANAGE_CHANNELS,
        },
        [s.Plq.MANAGE_ROLES.toString()]: {
            title: l.intl.string(l.t.ICb6am),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.TyyCMD;
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t.hcw4mx;
                    default:
                        return l.t.hOMXOv;
                }
            })(),
            flag: s.Plq.MANAGE_ROLES,
        },
        [s.Plq.MANAGE_WEBHOOKS.toString()]: {
            title: l.intl.string(l.t["/ADKmM"]),
            description: u === s.d4z.GUILD_CATEGORY ? l.t["K5+ZZ7"] : l.t.CYBZry,
            flag: s.Plq.MANAGE_WEBHOOKS,
        },
        [s.Plq.CREATE_INSTANT_INVITE.toString()]: {
            title: l.intl.string(l.t.zJrgTG),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t["3YFAAX"];
                    case s.d4z.GUILD_VOICE:
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t.lUCs1n;
                    default:
                        return l.t.q4g2aI;
                }
            })(),
            flag: s.Plq.CREATE_INSTANT_INVITE,
        },
        [s.Plq.SEND_MESSAGES.toString()]: {
            title: s.TPd.GUILD_THREADS_ONLY.has(u)
                ? l.intl.string(l.t.nJwAHX)
                : u === s.d4z.GUILD_CATEGORY
                  ? l.intl.string(l.t.S1VOwd)
                  : l.intl.string(l.t.T32rkC),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.IjeLuu;
                    case s.d4z.GUILD_FORUM:
                        return (null == c ? void 0 : c.createPostsDisabled) && !e.isMediaChannel()
                            ? r.Z.getForumChannelPermissionText()
                            : l.t.LG9VAi;
                    case s.d4z.GUILD_MEDIA:
                        return l.t.LG9VAi;
                    case s.d4z.GUILD_ANNOUNCEMENT:
                        return l.intl.format(l.t.WFwfSD, {
                            articleURL: o.Z.getArticleURL(s.BhN.ANNOUNCEMENT_CHANNELS),
                        });
                    case s.d4z.GUILD_VOICE:
                        return i.Z.getTextInVoiceSendMessageChannelPermissionText(
                            null == c ? void 0 : c.sendMessagesDisabled,
                        );
                    default:
                        return l.t.WQ6zpT;
                }
            })(),
            flag: s.Plq.SEND_MESSAGES,
        },
        [s.Plq.EMBED_LINKS.toString()]: {
            title: l.intl.string(l.t["969dEL"]),
            description: u === s.d4z.GUILD_CATEGORY ? l.t["7zlUay"] : l.t.XFFhA0,
            flag: s.Plq.EMBED_LINKS,
        },
        [s.Plq.ATTACH_FILES.toString()]: {
            title: l.intl.string(l.t["3AS4UM"]),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.XREf9l : l.t.WK9r7F,
            flag: s.Plq.ATTACH_FILES,
        },
        [s.Plq.ADD_REACTIONS.toString()]: {
            title: l.intl.string(l.t.yEoJAr),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.pZT2Zh;
                    case s.d4z.GUILD_VOICE:
                        return l.t.xSSbIs;
                    default:
                        return l.t.PVjR1Y;
                }
            })(),
            flag: s.Plq.ADD_REACTIONS,
        },
        [s.Plq.USE_EXTERNAL_EMOJIS.toString()]: {
            title: l.intl.string(l.t["+bxf3H"]),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.mWAbK4 : l.t.Qc5vOr,
            flag: s.Plq.USE_EXTERNAL_EMOJIS,
        },
        [s.Plq.USE_EXTERNAL_STICKERS.toString()]: {
            title: l.intl.string(l.t.ERNhYf),
            description: u === s.d4z.GUILD_CATEGORY ? l.t["39whJ4"] : l.t.VF4fZZ,
            flag: s.Plq.USE_EXTERNAL_STICKERS,
        },
        [s.Plq.MENTION_EVERYONE.toString()]: {
            title:
                u === s.d4z.GUILD_STAGE_VOICE
                    ? l.intl.string(l.t.VDUAHO)
                    : (null == c ? void 0 : c.inGameMentionsExperiment)
                      ? l.intl.string(l.t.lEO7Wr)
                      : l.intl.string(l.t.Y78KGC),
            description:
                u === s.d4z.GUILD_CATEGORY
                    ? l.t["HOhg/B"]
                    : u === s.d4z.GUILD_STAGE_VOICE
                      ? l.t.rZn1oO
                      : (null == c ? void 0 : c.inGameMentionsExperiment)
                        ? l.t.wdHpIC
                        : l.t["6IUSdt"],
            flag: s.Plq.MENTION_EVERYONE,
        },
        [s.Plq.MANAGE_MESSAGES.toString()]: {
            title: l.intl.string(l.t["6lU9xM"]),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t["5R9nYh"];
                    case s.d4z.GUILD_ANNOUNCEMENT:
                        return l.intl.format(l.t.XRxOo0, {
                            articleURL: o.Z.getArticleURL(s.BhN.ANNOUNCEMENT_CHANNELS),
                        });
                    default:
                        return l.t["SeA+G9"];
                }
            })(),
            flag: s.Plq.MANAGE_MESSAGES,
        },
        [s.Plq.PIN_MESSAGES.toString()]: {
            title: l.intl.string(l.t.Y5BI39),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.gmbD87 : l.t["0l2EjL"],
            flag: s.Plq.PIN_MESSAGES,
        },
        [s.Plq.BYPASS_SLOWMODE.toString()]: {
            title: l.intl.string(l.t.kqcjeV),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.C4t1Xu : l.t.Ha1xbw,
            flag: s.Plq.BYPASS_SLOWMODE,
        },
        [s.Plq.READ_MESSAGE_HISTORY.toString()]: {
            title: s.TPd.GUILD_THREADS_ONLY.has(u) ? l.intl.string(l.t["0RQwtn"]) : l.intl.string(l.t.l9ufaR),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t["cJRv/g"];
                    case s.d4z.GUILD_VOICE:
                        return i.Z.getTextInVoiceReadMessageHistoryChannelPermissionText(
                            null == c ? void 0 : c.readMessageHistoryDisabled,
                        );
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t.RqCc7i;
                    default:
                        return l.t.cuMfH0;
                }
            })(),
            flag: s.Plq.READ_MESSAGE_HISTORY,
        },
        [s.Plq.SEND_TTS_MESSAGES.toString()]: {
            title: l.intl.string(l.t.mMbwh7),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.b7pc9U : l.t.CpakGz,
            flag: s.Plq.SEND_TTS_MESSAGES,
        },
        [s.Plq.USE_APPLICATION_COMMANDS.toString()]: {
            title: l.intl.string(l.t.nkoPOt),
            description: u === s.d4z.GUILD_CATEGORY ? l.t["D+qW0J"] : l.t.ReG3gG,
            flag: s.Plq.USE_APPLICATION_COMMANDS,
        },
        [s.Plq.SEND_VOICE_MESSAGES.toString()]: {
            title: l.intl.string(l.t.WlWSBT),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.gavGfv : l.t.BhEo9V,
            flag: s.Plq.SEND_VOICE_MESSAGES,
        },
        [s.Plq.SEND_POLLS.toString()]: {
            title: l.intl.string(l.t.UMQ7Ww),
            description: u === s.d4z.GUILD_CATEGORY ? l.t["18Ya7L"] : l.t.ckKKIO,
            flag: s.Plq.SEND_POLLS,
        },
        [s.Plq.CONNECT.toString()]: {
            title: l.intl.string(l.t.S0W8Z5),
            description: (() => {
                if (t)
                    switch (u) {
                        case s.d4z.GUILD_CATEGORY:
                            return l.t.XcrieN;
                        case s.d4z.GUILD_STAGE_VOICE:
                            return l.t.SOFNhP;
                        case s.d4z.GUILD_TEXT:
                        case s.d4z.GUILD_FORUM:
                        case s.d4z.GUILD_MEDIA:
                            return l.t.LsS8xT;
                        default:
                            return l.t.j4AyO8;
                    }
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.stA0Hl;
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t["G9+Qie"];
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t["QU/Rw8"];
                    default:
                        return l.t.HvG8uR;
                }
            })(),
            flag: s.Plq.CONNECT,
        },
        [s.Plq.SPEAK.toString()]: {
            title: l.intl.string(l.t["8w1tIR"]),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.iXhS6R;
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t.a8n741;
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t["+VXsJI"];
                    default:
                        return l.t["568E6d"];
                }
            })(),
            flag: s.Plq.SPEAK,
        },
        [s.Plq.STREAM.toString()]: {
            title: l.intl.string(l.t.FlNoSV),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t["ryG0/J"];
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t.AuEQEC;
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t.swJcN6;
                    default:
                        return l.t.RY8rIc;
                }
            })(),
            flag: s.Plq.STREAM,
        },
        [s.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: l.intl.string(l.t.rLSGeh),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.maNzCO;
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t.RyEwla;
                    default:
                        return l.t.qinvMU;
                }
            })(),
            flag: s.Plq.USE_EMBEDDED_ACTIVITIES,
        },
        [s.Plq.USE_EXTERNAL_APPS.toString()]: {
            title: l.intl.string(l.t["3TzAk0"]),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.bgIY3H;
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t.qPUPip;
                    default:
                        return l.t.czqMLp;
                }
            })(),
            flag: s.Plq.USE_EXTERNAL_APPS,
        },
        [s.Plq.USE_SOUNDBOARD.toString()]: {
            title: l.intl.string(l.t.Bco7NG),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.intl.format(l.t["0kBp/0"], { helpCenterArticle: o.Z.getArticleURL(s.BhN.SOUNDBOARD) });
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.intl.format(l.t["6eYqU1"], { helpCenterArticle: o.Z.getArticleURL(s.BhN.SOUNDBOARD) });
                    default:
                        return l.intl.format(l.t.GEi6Ym, { helpCenterArticle: o.Z.getArticleURL(s.BhN.SOUNDBOARD) });
                }
            })(),
            flag: s.Plq.USE_SOUNDBOARD,
        },
        [s.Plq.USE_EXTERNAL_SOUNDS.toString()]: {
            title: l.intl.string(l.t.pwaVJ6),
            description: l.t.qDpPtX,
            flag: s.Plq.USE_EXTERNAL_SOUNDS,
        },
        [s.Plq.USE_VAD.toString()]: {
            title: l.intl.string(l.t["08zAV7"]),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.fUYPly;
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t.BJKqsW;
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t["3GJwsc"];
                    default:
                        return l.t.s2eihY;
                }
            })(),
            flag: s.Plq.USE_VAD,
        },
        [s.Plq.PRIORITY_SPEAKER.toString()]: {
            title: l.intl.string(l.t.BVK71i),
            description: (() => {
                let e = {
                    keybind: l.intl.string(l.t.DkSwJ2),
                    onClick: () => {
                        {
                            let { openUserSettings: e } = n(518596);
                            e(a.n.KEYBINDS_PANEL, { section: s.oAB.KEYBINDS });
                        }
                    },
                };
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.intl.format(l.t["8nIfDP"], e);
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.intl.format(l.t["0t6uSv"], e);
                    default:
                        return l.intl.format(l.t.UvB2KP, e);
                }
            })(),
            flag: s.Plq.PRIORITY_SPEAKER,
        },
        [s.Plq.MUTE_MEMBERS.toString()]: {
            title: l.intl.string(l.t["8EI30/"]),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.bcuobK;
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t.EbvdH9;
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t.KYDG2K;
                    default:
                        return l.t.LW5C9P;
                }
            })(),
            flag: s.Plq.MUTE_MEMBERS,
        },
        [s.Plq.DEAFEN_MEMBERS.toString()]: {
            title: l.intl.string(l.t["9L47Fr"]),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.amZ5vn;
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t["d+i1nX"];
                    default:
                        return l.t.UAdIxo;
                }
            })(),
            flag: s.Plq.DEAFEN_MEMBERS,
        },
        [s.Plq.MOVE_MEMBERS.toString()]: {
            title: l.intl.string(l.t.YtjJPQ),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.XmoyRD;
                    case s.d4z.GUILD_STAGE_VOICE:
                        return l.t.bizKz6;
                    case s.d4z.GUILD_TEXT:
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t.cbdQy2;
                    default:
                        return l.t.nSD1ah;
                }
            })(),
            flag: s.Plq.MOVE_MEMBERS,
        },
        [s.Plq.REQUEST_TO_SPEAK.toString()]: {
            title: l.intl.string(l.t["5kicT2"]),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.T1lMSl : l.t.uzlYFE,
            flag: s.Plq.REQUEST_TO_SPEAK,
        },
        [s.Plq.MANAGE_THREADS.toString()]: {
            title: s.TPd.GUILD_THREADS_ONLY.has(u)
                ? l.intl.string(l.t.ossiZD)
                : u === s.d4z.GUILD_CATEGORY
                  ? l.intl.string(l.t.QKe7Q3)
                  : l.intl.string(l.t.kEqgr7),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.S31soU;
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t["XLi/jG"];
                    default:
                        return l.t.yvan0j;
                }
            })(),
            flag: s.Plq.MANAGE_THREADS,
        },
        [s.Plq.CREATE_PUBLIC_THREADS.toString()]: {
            title: l.intl.string(l.t["25rKnX"]),
            description: u === s.d4z.GUILD_CATEGORY ? l.t["+M1yLj"] : l.t["5SDtGB"],
            flag: s.Plq.CREATE_PUBLIC_THREADS,
        },
        [s.Plq.CREATE_PRIVATE_THREADS.toString()]: {
            title: l.intl.string(l.t.QwbTSa),
            description: u === s.d4z.GUILD_CATEGORY ? l.t["hBS/zn"] : l.t.Chg2zd,
            flag: s.Plq.CREATE_PRIVATE_THREADS,
        },
        [s.Plq.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: s.TPd.GUILD_THREADS_ONLY.has(u)
                ? l.intl.string(l.t.fqhqWm)
                : u === s.d4z.GUILD_CATEGORY
                  ? l.intl.string(l.t["5QlVGy"])
                  : l.intl.string(l.t.fTE74g),
            description: (() => {
                switch (u) {
                    case s.d4z.GUILD_CATEGORY:
                        return l.t.DlIVcN;
                    case s.d4z.GUILD_FORUM:
                    case s.d4z.GUILD_MEDIA:
                        return l.t.XTnrPH;
                    default:
                        return l.t.xHO6Me;
                }
            })(),
            flag: s.Plq.SEND_MESSAGES_IN_THREADS,
        },
        [s.Plq.MANAGE_EVENTS.toString()]: {
            title: l.intl.string(l.t.HIgA5a),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.CP2sz4 : l.t["4pO/TY"],
            flag: s.Plq.MANAGE_EVENTS,
        },
        [s.Plq.CREATE_EVENTS.toString()]: {
            title: l.intl.string(l.t.qyjZua),
            description: u === s.d4z.GUILD_CATEGORY ? l.t.XpibmC : l.t.sPoBLa,
            flag: s.Plq.CREATE_EVENTS,
        },
        [s.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: l.intl.string(l.t.VBwkUf),
            description: l.t.C6BzXx,
            flag: s.Plq.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
