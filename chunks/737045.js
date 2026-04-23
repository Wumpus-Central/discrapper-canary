r.d(e, { $N: () => I, T6: () => A, mW: () => G, oO: () => S, t0: () => T });
var i,
    n,
    E = r(718574),
    c = r(926983),
    s = r(780964),
    l = r(975571),
    _ = r(652215),
    a = r(985018),
    A =
        (((i = {})[(i.EMPTY_STATE = 0)] = "EMPTY_STATE"),
        (i[(i.ADMINISTRATOR = 1)] = "ADMINISTRATOR"),
        (i[(i.ROLE = 2)] = "ROLE"),
        (i[(i.OWNER = 3)] = "OWNER"),
        (i[(i.MEMBER = 4)] = "MEMBER"),
        (i[(i.USER = 5)] = "USER"),
        (i[(i.GUILD = 6)] = "GUILD"),
        i),
    S =
        (((n = {})[(n.ROLES = 0)] = "ROLES"),
        (n[(n.MEMBERS = 1)] = "MEMBERS"),
        (n[(n.USERS = 2)] = "USERS"),
        (n[(n.GUILDS = 3)] = "GUILDS"),
        n);
let I = 20,
    T = "channelPermissionSettingsAdvancedModeOn";
function G(t, e, i) {
    let n = t.type;
    return {
        [_.xBc.VIEW_CHANNEL.toString()]: {
            title: n === _.rbe.GUILD_CATEGORY ? a.intl.string(a.t.uV83yi) : a.intl.string(a.t["W/A4Qp"]),
            description: (() => {
                if (e)
                    switch (n) {
                        case _.rbe.GUILD_CATEGORY:
                            return a.t["o/vBzj"];
                        case _.rbe.GUILD_VOICE:
                        case _.rbe.GUILD_STAGE_VOICE:
                            return a.t.ejL1Wo;
                        default:
                            return a.t["3jG0Bo"];
                    }
                return n === _.rbe.GUILD_CATEGORY ? a.t.SzosGs : a.t.M2iEy3;
            })(),
            flag: _.xBc.VIEW_CHANNEL,
        },
        [_.xBc.MANAGE_CHANNELS.toString()]: {
            title: n === _.rbe.GUILD_CATEGORY ? a.intl.string(a.t["9qLtWs"]) : a.intl.string(a.t.nAw15L),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t.KJ2JnG;
                    case _.rbe.GUILD_VOICE:
                        return a.t["+gl2ne"];
                    case _.rbe.GUILD_STAGE_VOICE:
                        return a.t.SDX669;
                    default:
                        return a.t.ydL28i;
                }
            })(),
            flag: _.xBc.MANAGE_CHANNELS,
        },
        [_.xBc.MANAGE_ROLES.toString()]: {
            title: a.intl.string(a.t.ICb6am),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t.TyyCMD;
                    case _.rbe.GUILD_STAGE_VOICE:
                        return a.t.hcw4mx;
                    default:
                        return a.t.hOMXOv;
                }
            })(),
            flag: _.xBc.MANAGE_ROLES,
        },
        [_.xBc.MANAGE_WEBHOOKS.toString()]: {
            title: a.intl.string(a.t["/ADKmM"]),
            description: n === _.rbe.GUILD_CATEGORY ? a.t["K5+ZZ7"] : a.t.CYBZry,
            flag: _.xBc.MANAGE_WEBHOOKS,
        },
        [_.xBc.CREATE_INSTANT_INVITE.toString()]: {
            title: a.intl.string(a.t.zJrgTG),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t["3YFAAX"];
                    case _.rbe.GUILD_VOICE:
                    case _.rbe.GUILD_STAGE_VOICE:
                        return a.t.lUCs1n;
                    default:
                        return a.t.q4g2aI;
                }
            })(),
            flag: _.xBc.CREATE_INSTANT_INVITE,
        },
        [_.xBc.SEND_MESSAGES.toString()]: {
            title: _.kvI.GUILD_THREADS_ONLY.has(n)
                ? a.intl.string(a.t.nJwAHX)
                : n === _.rbe.GUILD_CATEGORY
                  ? a.intl.string(a.t.S1VOwd)
                  : a.intl.string(a.t.T32rkC),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t.IjeLuu;
                    case _.rbe.GUILD_FORUM:
                        return i?.createPostsDisabled && !t.isMediaChannel()
                            ? E.A.getForumChannelPermissionText()
                            : a.t.LG9VAi;
                    case _.rbe.GUILD_MEDIA:
                        return a.t.LG9VAi;
                    case _.rbe.GUILD_ANNOUNCEMENT:
                        return a.intl.format(a.t.WFwfSD, {
                            articleURL: l.A.getArticleURL(_.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    case _.rbe.GUILD_VOICE:
                        return c.A.getTextInVoiceSendMessageChannelPermissionText(i?.sendMessagesDisabled);
                    default:
                        return a.t.WQ6zpT;
                }
            })(),
            flag: _.xBc.SEND_MESSAGES,
        },
        [_.xBc.EMBED_LINKS.toString()]: {
            title: a.intl.string(a.t["969dEL"]),
            description: n === _.rbe.GUILD_CATEGORY ? a.t["7zlUay"] : a.t.XFFhA0,
            flag: _.xBc.EMBED_LINKS,
        },
        [_.xBc.ATTACH_FILES.toString()]: {
            title: a.intl.string(a.t["3AS4UM"]),
            description: n === _.rbe.GUILD_CATEGORY ? a.t.XREf9l : a.t.WK9r7F,
            flag: _.xBc.ATTACH_FILES,
        },
        [_.xBc.ADD_REACTIONS.toString()]: {
            title: a.intl.string(a.t.yEoJAr),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t.pZT2Zh;
                    case _.rbe.GUILD_VOICE:
                        return a.t.xSSbIs;
                    default:
                        return a.t.PVjR1Y;
                }
            })(),
            flag: _.xBc.ADD_REACTIONS,
        },
        [_.xBc.USE_EXTERNAL_EMOJIS.toString()]: {
            title: a.intl.string(a.t["+bxf3H"]),
            description: n === _.rbe.GUILD_CATEGORY ? a.t.mWAbK4 : a.t.Qc5vOr,
            flag: _.xBc.USE_EXTERNAL_EMOJIS,
        },
        [_.xBc.USE_EXTERNAL_STICKERS.toString()]: {
            title: a.intl.string(a.t.ERNhYf),
            description: n === _.rbe.GUILD_CATEGORY ? a.t["39whJ4"] : a.t.VF4fZZ,
            flag: _.xBc.USE_EXTERNAL_STICKERS,
        },
        [_.xBc.MENTION_EVERYONE.toString()]: {
            title: n === _.rbe.GUILD_STAGE_VOICE ? a.intl.string(a.t.VDUAHO) : a.intl.string(a.t.Y78KGC),
            description:
                n === _.rbe.GUILD_CATEGORY ? a.t["HOhg/B"] : n === _.rbe.GUILD_STAGE_VOICE ? a.t.rZn1oO : a.t["6IUSdt"],
            flag: _.xBc.MENTION_EVERYONE,
        },
        [_.xBc.MANAGE_MESSAGES.toString()]: {
            title: a.intl.string(a.t["6lU9xM"]),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t["5R9nYh"];
                    case _.rbe.GUILD_ANNOUNCEMENT:
                        return a.intl.format(a.t.XRxOo0, {
                            articleURL: l.A.getArticleURL(_.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    default:
                        return a.t["SeA+G9"];
                }
            })(),
            flag: _.xBc.MANAGE_MESSAGES,
        },
        [_.xBc.PIN_MESSAGES.toString()]: {
            title: a.intl.string(a.t.Y5BI39),
            description: n === _.rbe.GUILD_CATEGORY ? a.t.gmbD87 : a.t["0l2EjL"],
            flag: _.xBc.PIN_MESSAGES,
        },
        [_.xBc.BYPASS_SLOWMODE.toString()]: {
            title: a.intl.string(a.t.kqcjeV),
            description: n === _.rbe.GUILD_CATEGORY ? a.t.C4t1Xu : a.t.Ha1xbw,
            flag: _.xBc.BYPASS_SLOWMODE,
        },
        [_.xBc.MANAGE_OFFICIAL_MESSAGES.toString()]: {
            title: a.intl.string(a.t.Aj9ruN),
            description: n === _.rbe.GUILD_CATEGORY ? a.t["Pf0e/Q"] : a.t.qEbw4W,
            flag: _.xBc.MANAGE_OFFICIAL_MESSAGES,
        },
        [_.xBc.READ_MESSAGE_HISTORY.toString()]: {
            title: _.kvI.GUILD_THREADS_ONLY.has(n) ? a.intl.string(a.t["0RQwtn"]) : a.intl.string(a.t.l9ufaR),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t["cJRv/g"];
                    case _.rbe.GUILD_VOICE:
                        return c.A.getTextInVoiceReadMessageHistoryChannelPermissionText(i?.readMessageHistoryDisabled);
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return a.t.RqCc7i;
                    default:
                        return a.t.cuMfH0;
                }
            })(),
            flag: _.xBc.READ_MESSAGE_HISTORY,
        },
        [_.xBc.SEND_TTS_MESSAGES.toString()]: {
            title: a.intl.string(a.t.mMbwh7),
            description: n === _.rbe.GUILD_CATEGORY ? a.t.b7pc9U : a.t.CpakGz,
            flag: _.xBc.SEND_TTS_MESSAGES,
        },
        [_.xBc.USE_APPLICATION_COMMANDS.toString()]: {
            title: a.intl.string(a.t.nkoPOt),
            description: n === _.rbe.GUILD_CATEGORY ? a.t["D+qW0J"] : a.t.ReG3gG,
            flag: _.xBc.USE_APPLICATION_COMMANDS,
        },
        [_.xBc.SEND_VOICE_MESSAGES.toString()]: {
            title: a.intl.string(a.t.WlWSBT),
            description: n === _.rbe.GUILD_CATEGORY ? a.t.gavGfv : a.t.BhEo9V,
            flag: _.xBc.SEND_VOICE_MESSAGES,
        },
        [_.xBc.SEND_POLLS.toString()]: {
            title: a.intl.string(a.t.UMQ7Ww),
            description: n === _.rbe.GUILD_CATEGORY ? a.t["18Ya7L"] : a.t.ckKKIO,
            flag: _.xBc.SEND_POLLS,
        },
        [_.xBc.CONNECT.toString()]: {
            title: a.intl.string(a.t.S0W8Z5),
            description: (() => {
                if (e)
                    switch (n) {
                        case _.rbe.GUILD_CATEGORY:
                            return a.t.XcrieN;
                        case _.rbe.GUILD_STAGE_VOICE:
                            return a.t.SOFNhP;
                        case _.rbe.GUILD_TEXT:
                        case _.rbe.GUILD_FORUM:
                        case _.rbe.GUILD_MEDIA:
                            return a.t.LsS8xT;
                        default:
                            return a.t.j4AyO8;
                    }
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t.stA0Hl;
                    case _.rbe.GUILD_STAGE_VOICE:
                        return a.t["G9+Qie"];
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return a.t["QU/Rw8"];
                    default:
                        return a.t.HvG8uR;
                }
            })(),
            flag: _.xBc.CONNECT,
        },
        [_.xBc.SPEAK.toString()]: {
            title: a.intl.string(a.t["8w1tIR"]),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t.iXhS6R;
                    case _.rbe.GUILD_STAGE_VOICE:
                        return a.t.a8n741;
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return a.t["+VXsJI"];
                    default:
                        return a.t["568E6d"];
                }
            })(),
            flag: _.xBc.SPEAK,
        },
        [_.xBc.STREAM.toString()]: {
            title: a.intl.string(a.t.FlNoSV),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t["ryG0/J"];
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return a.t.AuEQEC;
                    case _.rbe.GUILD_STAGE_VOICE:
                        return a.t.swJcN6;
                    default:
                        return a.t.RY8rIc;
                }
            })(),
            flag: _.xBc.STREAM,
        },
        [_.xBc.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: a.intl.string(a.t.rLSGeh),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t.maNzCO;
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return a.t.RyEwla;
                    default:
                        return a.t.qinvMU;
                }
            })(),
            flag: _.xBc.USE_EMBEDDED_ACTIVITIES,
        },
        [_.xBc.USE_EXTERNAL_APPS.toString()]: {
            title: a.intl.string(a.t["3TzAk0"]),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t.bgIY3H;
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return a.t.qPUPip;
                    default:
                        return a.t.czqMLp;
                }
            })(),
            flag: _.xBc.USE_EXTERNAL_APPS,
        },
        [_.xBc.USE_SOUNDBOARD.toString()]: {
            title: a.intl.string(a.t.Bco7NG),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.intl.format(a.t["0kBp/0"], { helpCenterArticle: l.A.getArticleURL(_.MVz.SOUNDBOARD) });
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return a.intl.format(a.t["6eYqU1"], { helpCenterArticle: l.A.getArticleURL(_.MVz.SOUNDBOARD) });
                    default:
                        return a.intl.format(a.t.GEi6Ym, { helpCenterArticle: l.A.getArticleURL(_.MVz.SOUNDBOARD) });
                }
            })(),
            flag: _.xBc.USE_SOUNDBOARD,
        },
        [_.xBc.USE_EXTERNAL_SOUNDS.toString()]: {
            title: a.intl.string(a.t.pwaVJ6),
            description: a.t.qDpPtX,
            flag: _.xBc.USE_EXTERNAL_SOUNDS,
        },
        [_.xBc.USE_VAD.toString()]: {
            title: a.intl.string(a.t["08zAV7"]),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t.fUYPly;
                    case _.rbe.GUILD_STAGE_VOICE:
                        return a.t.BJKqsW;
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return a.t["3GJwsc"];
                    default:
                        return a.t.s2eihY;
                }
            })(),
            flag: _.xBc.USE_VAD,
        },
        [_.xBc.PRIORITY_SPEAKER.toString()]: {
            title: a.intl.string(a.t.BVK71i),
            description: (() => {
                let t = {
                    keybind: a.intl.string(a.t.DkSwJ2),
                    onClick: () => {
                        {
                            let { openUserSettings: t } = r(858897);
                            t(s.X.KEYBINDS_PANEL);
                        }
                    },
                };
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.intl.format(a.t["8nIfDP"], t);
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return a.intl.format(a.t["0t6uSv"], t);
                    default:
                        return a.intl.format(a.t.UvB2KP, t);
                }
            })(),
            flag: _.xBc.PRIORITY_SPEAKER,
        },
        [_.xBc.MUTE_MEMBERS.toString()]: {
            title: a.intl.string(a.t["8EI30/"]),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t.bcuobK;
                    case _.rbe.GUILD_STAGE_VOICE:
                        return a.t.EbvdH9;
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return a.t.KYDG2K;
                    default:
                        return a.t.LW5C9P;
                }
            })(),
            flag: _.xBc.MUTE_MEMBERS,
        },
        [_.xBc.DEAFEN_MEMBERS.toString()]: {
            title: a.intl.string(a.t["9L47Fr"]),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t.amZ5vn;
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return a.t["d+i1nX"];
                    default:
                        return a.t.UAdIxo;
                }
            })(),
            flag: _.xBc.DEAFEN_MEMBERS,
        },
        [_.xBc.MOVE_MEMBERS.toString()]: {
            title: a.intl.string(a.t.YtjJPQ),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t.XmoyRD;
                    case _.rbe.GUILD_STAGE_VOICE:
                        return a.t.bizKz6;
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return a.t.cbdQy2;
                    default:
                        return a.t.nSD1ah;
                }
            })(),
            flag: _.xBc.MOVE_MEMBERS,
        },
        [_.xBc.REQUEST_TO_SPEAK.toString()]: {
            title: a.intl.string(a.t["5kicT2"]),
            description: n === _.rbe.GUILD_CATEGORY ? a.t.T1lMSl : a.t.uzlYFE,
            flag: _.xBc.REQUEST_TO_SPEAK,
        },
        [_.xBc.MANAGE_THREADS.toString()]: {
            title: _.kvI.GUILD_THREADS_ONLY.has(n)
                ? a.intl.string(a.t.ossiZD)
                : n === _.rbe.GUILD_CATEGORY
                  ? a.intl.string(a.t.QKe7Q3)
                  : a.intl.string(a.t.kEqgr7),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t.S31soU;
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return a.t["XLi/jG"];
                    default:
                        return a.t.yvan0j;
                }
            })(),
            flag: _.xBc.MANAGE_THREADS,
        },
        [_.xBc.CREATE_PUBLIC_THREADS.toString()]: {
            title: a.intl.string(a.t["25rKnX"]),
            description: n === _.rbe.GUILD_CATEGORY ? a.t["+M1yLj"] : a.t["5SDtGB"],
            flag: _.xBc.CREATE_PUBLIC_THREADS,
        },
        [_.xBc.CREATE_PRIVATE_THREADS.toString()]: {
            title: a.intl.string(a.t.QwbTSa),
            description: n === _.rbe.GUILD_CATEGORY ? a.t["hBS/zn"] : a.t.Chg2zd,
            flag: _.xBc.CREATE_PRIVATE_THREADS,
        },
        [_.xBc.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: _.kvI.GUILD_THREADS_ONLY.has(n)
                ? a.intl.string(a.t.fqhqWm)
                : n === _.rbe.GUILD_CATEGORY
                  ? a.intl.string(a.t["5QlVGy"])
                  : a.intl.string(a.t.fTE74g),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return a.t.DlIVcN;
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return a.t.XTnrPH;
                    default:
                        return a.t.xHO6Me;
                }
            })(),
            flag: _.xBc.SEND_MESSAGES_IN_THREADS,
        },
        [_.xBc.MANAGE_EVENTS.toString()]: {
            title: a.intl.string(a.t.HIgA5a),
            description: n === _.rbe.GUILD_CATEGORY ? a.t.CP2sz4 : a.t["4pO/TY"],
            flag: _.xBc.MANAGE_EVENTS,
        },
        [_.xBc.CREATE_EVENTS.toString()]: {
            title: a.intl.string(a.t.qyjZua),
            description: n === _.rbe.GUILD_CATEGORY ? a.t.XpibmC : a.t.sPoBLa,
            flag: _.xBc.CREATE_EVENTS,
        },
        [_.xBc.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: a.intl.string(a.t.VBwkUf),
            description: a.t.C6BzXx,
            flag: _.xBc.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
