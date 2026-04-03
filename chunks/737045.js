r.d(e, { $N: () => a, T6: () => l, mW: () => D, oO: () => I, t0: () => G });
var i,
    E,
    n = r(718574),
    c = r(926983),
    s = r(780964),
    S = r(975571),
    A = r(652215),
    _ = r(985018),
    l =
        (((i = {})[(i.EMPTY_STATE = 0)] = "EMPTY_STATE"),
        (i[(i.ADMINISTRATOR = 1)] = "ADMINISTRATOR"),
        (i[(i.ROLE = 2)] = "ROLE"),
        (i[(i.OWNER = 3)] = "OWNER"),
        (i[(i.MEMBER = 4)] = "MEMBER"),
        (i[(i.USER = 5)] = "USER"),
        (i[(i.GUILD = 6)] = "GUILD"),
        i),
    I =
        (((E = {})[(E.ROLES = 0)] = "ROLES"),
        (E[(E.MEMBERS = 1)] = "MEMBERS"),
        (E[(E.USERS = 2)] = "USERS"),
        (E[(E.GUILDS = 3)] = "GUILDS"),
        E);
let a = 20,
    G = "channelPermissionSettingsAdvancedModeOn";
function D(t, e, i) {
    let E = t.type;
    return {
        [A.xBc.VIEW_CHANNEL.toString()]: {
            title: E === A.rbe.GUILD_CATEGORY ? _.intl.string(_.t.uV83yi) : _.intl.string(_.t["W/A4Qp"]),
            description: (() => {
                if (e)
                    switch (E) {
                        case A.rbe.GUILD_CATEGORY:
                            return _.t["o/vBzj"];
                        case A.rbe.GUILD_VOICE:
                        case A.rbe.GUILD_STAGE_VOICE:
                            return _.t.ejL1Wo;
                        default:
                            return _.t["3jG0Bo"];
                    }
                return E === A.rbe.GUILD_CATEGORY ? _.t.SzosGs : _.t.M2iEy3;
            })(),
            flag: A.xBc.VIEW_CHANNEL,
        },
        [A.xBc.MANAGE_CHANNELS.toString()]: {
            title: E === A.rbe.GUILD_CATEGORY ? _.intl.string(_.t["9qLtWs"]) : _.intl.string(_.t.nAw15L),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t.KJ2JnG;
                    case A.rbe.GUILD_VOICE:
                        return _.t["+gl2ne"];
                    case A.rbe.GUILD_STAGE_VOICE:
                        return _.t.SDX669;
                    default:
                        return _.t.ydL28i;
                }
            })(),
            flag: A.xBc.MANAGE_CHANNELS,
        },
        [A.xBc.MANAGE_ROLES.toString()]: {
            title: _.intl.string(_.t.ICb6am),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t.TyyCMD;
                    case A.rbe.GUILD_STAGE_VOICE:
                        return _.t.hcw4mx;
                    default:
                        return _.t.hOMXOv;
                }
            })(),
            flag: A.xBc.MANAGE_ROLES,
        },
        [A.xBc.MANAGE_WEBHOOKS.toString()]: {
            title: _.intl.string(_.t["/ADKmM"]),
            description: E === A.rbe.GUILD_CATEGORY ? _.t["K5+ZZ7"] : _.t.CYBZry,
            flag: A.xBc.MANAGE_WEBHOOKS,
        },
        [A.xBc.CREATE_INSTANT_INVITE.toString()]: {
            title: _.intl.string(_.t.zJrgTG),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t["3YFAAX"];
                    case A.rbe.GUILD_VOICE:
                    case A.rbe.GUILD_STAGE_VOICE:
                        return _.t.lUCs1n;
                    default:
                        return _.t.q4g2aI;
                }
            })(),
            flag: A.xBc.CREATE_INSTANT_INVITE,
        },
        [A.xBc.SEND_MESSAGES.toString()]: {
            title: A.kvI.GUILD_THREADS_ONLY.has(E)
                ? _.intl.string(_.t.nJwAHX)
                : E === A.rbe.GUILD_CATEGORY
                  ? _.intl.string(_.t.S1VOwd)
                  : _.intl.string(_.t.T32rkC),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t.IjeLuu;
                    case A.rbe.GUILD_FORUM:
                        return i?.createPostsDisabled && !t.isMediaChannel()
                            ? n.A.getForumChannelPermissionText()
                            : _.t.LG9VAi;
                    case A.rbe.GUILD_MEDIA:
                        return _.t.LG9VAi;
                    case A.rbe.GUILD_ANNOUNCEMENT:
                        return _.intl.format(_.t.WFwfSD, {
                            articleURL: S.A.getArticleURL(A.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    case A.rbe.GUILD_VOICE:
                        return c.A.getTextInVoiceSendMessageChannelPermissionText(i?.sendMessagesDisabled);
                    default:
                        return _.t.WQ6zpT;
                }
            })(),
            flag: A.xBc.SEND_MESSAGES,
        },
        [A.xBc.EMBED_LINKS.toString()]: {
            title: _.intl.string(_.t["969dEL"]),
            description: E === A.rbe.GUILD_CATEGORY ? _.t["7zlUay"] : _.t.XFFhA0,
            flag: A.xBc.EMBED_LINKS,
        },
        [A.xBc.ATTACH_FILES.toString()]: {
            title: _.intl.string(_.t["3AS4UM"]),
            description: E === A.rbe.GUILD_CATEGORY ? _.t.XREf9l : _.t.WK9r7F,
            flag: A.xBc.ATTACH_FILES,
        },
        [A.xBc.ADD_REACTIONS.toString()]: {
            title: _.intl.string(_.t.yEoJAr),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t.pZT2Zh;
                    case A.rbe.GUILD_VOICE:
                        return _.t.xSSbIs;
                    default:
                        return _.t.PVjR1Y;
                }
            })(),
            flag: A.xBc.ADD_REACTIONS,
        },
        [A.xBc.USE_EXTERNAL_EMOJIS.toString()]: {
            title: _.intl.string(_.t["+bxf3H"]),
            description: E === A.rbe.GUILD_CATEGORY ? _.t.mWAbK4 : _.t.Qc5vOr,
            flag: A.xBc.USE_EXTERNAL_EMOJIS,
        },
        [A.xBc.USE_EXTERNAL_STICKERS.toString()]: {
            title: _.intl.string(_.t.ERNhYf),
            description: E === A.rbe.GUILD_CATEGORY ? _.t["39whJ4"] : _.t.VF4fZZ,
            flag: A.xBc.USE_EXTERNAL_STICKERS,
        },
        [A.xBc.MENTION_EVERYONE.toString()]: {
            title: E === A.rbe.GUILD_STAGE_VOICE ? _.intl.string(_.t.VDUAHO) : _.intl.string(_.t.Y78KGC),
            description:
                E === A.rbe.GUILD_CATEGORY ? _.t["HOhg/B"] : E === A.rbe.GUILD_STAGE_VOICE ? _.t.rZn1oO : _.t["6IUSdt"],
            flag: A.xBc.MENTION_EVERYONE,
        },
        [A.xBc.MANAGE_MESSAGES.toString()]: {
            title: _.intl.string(_.t["6lU9xM"]),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t["5R9nYh"];
                    case A.rbe.GUILD_ANNOUNCEMENT:
                        return _.intl.format(_.t.XRxOo0, {
                            articleURL: S.A.getArticleURL(A.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    default:
                        return _.t["SeA+G9"];
                }
            })(),
            flag: A.xBc.MANAGE_MESSAGES,
        },
        [A.xBc.PIN_MESSAGES.toString()]: {
            title: _.intl.string(_.t.Y5BI39),
            description: E === A.rbe.GUILD_CATEGORY ? _.t.gmbD87 : _.t["0l2EjL"],
            flag: A.xBc.PIN_MESSAGES,
        },
        [A.xBc.BYPASS_SLOWMODE.toString()]: {
            title: _.intl.string(_.t.kqcjeV),
            description: E === A.rbe.GUILD_CATEGORY ? _.t.C4t1Xu : _.t.Ha1xbw,
            flag: A.xBc.BYPASS_SLOWMODE,
        },
        [A.xBc.MANAGE_OFFICIAL_MESSAGES.toString()]: {
            title: _.intl.string(_.t.Aj9ruN),
            description: E === A.rbe.GUILD_CATEGORY ? _.t["Pf0e/Q"] : _.t.qEbw4W,
            flag: A.xBc.MANAGE_OFFICIAL_MESSAGES,
        },
        [A.xBc.READ_MESSAGE_HISTORY.toString()]: {
            title: A.kvI.GUILD_THREADS_ONLY.has(E) ? _.intl.string(_.t["0RQwtn"]) : _.intl.string(_.t.l9ufaR),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t["cJRv/g"];
                    case A.rbe.GUILD_VOICE:
                        return c.A.getTextInVoiceReadMessageHistoryChannelPermissionText(i?.readMessageHistoryDisabled);
                    case A.rbe.GUILD_FORUM:
                    case A.rbe.GUILD_MEDIA:
                        return _.t.RqCc7i;
                    default:
                        return _.t.cuMfH0;
                }
            })(),
            flag: A.xBc.READ_MESSAGE_HISTORY,
        },
        [A.xBc.SEND_TTS_MESSAGES.toString()]: {
            title: _.intl.string(_.t.mMbwh7),
            description: E === A.rbe.GUILD_CATEGORY ? _.t.b7pc9U : _.t.CpakGz,
            flag: A.xBc.SEND_TTS_MESSAGES,
        },
        [A.xBc.USE_APPLICATION_COMMANDS.toString()]: {
            title: _.intl.string(_.t.nkoPOt),
            description: E === A.rbe.GUILD_CATEGORY ? _.t["D+qW0J"] : _.t.ReG3gG,
            flag: A.xBc.USE_APPLICATION_COMMANDS,
        },
        [A.xBc.SEND_VOICE_MESSAGES.toString()]: {
            title: _.intl.string(_.t.WlWSBT),
            description: E === A.rbe.GUILD_CATEGORY ? _.t.gavGfv : _.t.BhEo9V,
            flag: A.xBc.SEND_VOICE_MESSAGES,
        },
        [A.xBc.SEND_POLLS.toString()]: {
            title: _.intl.string(_.t.UMQ7Ww),
            description: E === A.rbe.GUILD_CATEGORY ? _.t["18Ya7L"] : _.t.ckKKIO,
            flag: A.xBc.SEND_POLLS,
        },
        [A.xBc.CONNECT.toString()]: {
            title: _.intl.string(_.t.S0W8Z5),
            description: (() => {
                if (e)
                    switch (E) {
                        case A.rbe.GUILD_CATEGORY:
                            return _.t.XcrieN;
                        case A.rbe.GUILD_STAGE_VOICE:
                            return _.t.SOFNhP;
                        case A.rbe.GUILD_TEXT:
                        case A.rbe.GUILD_FORUM:
                        case A.rbe.GUILD_MEDIA:
                            return _.t.LsS8xT;
                        default:
                            return _.t.j4AyO8;
                    }
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t.stA0Hl;
                    case A.rbe.GUILD_STAGE_VOICE:
                        return _.t["G9+Qie"];
                    case A.rbe.GUILD_TEXT:
                    case A.rbe.GUILD_FORUM:
                    case A.rbe.GUILD_MEDIA:
                        return _.t["QU/Rw8"];
                    default:
                        return _.t.HvG8uR;
                }
            })(),
            flag: A.xBc.CONNECT,
        },
        [A.xBc.SPEAK.toString()]: {
            title: _.intl.string(_.t["8w1tIR"]),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t.iXhS6R;
                    case A.rbe.GUILD_STAGE_VOICE:
                        return _.t.a8n741;
                    case A.rbe.GUILD_TEXT:
                    case A.rbe.GUILD_FORUM:
                    case A.rbe.GUILD_MEDIA:
                        return _.t["+VXsJI"];
                    default:
                        return _.t["568E6d"];
                }
            })(),
            flag: A.xBc.SPEAK,
        },
        [A.xBc.STREAM.toString()]: {
            title: _.intl.string(_.t.FlNoSV),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t["ryG0/J"];
                    case A.rbe.GUILD_TEXT:
                    case A.rbe.GUILD_FORUM:
                    case A.rbe.GUILD_MEDIA:
                        return _.t.AuEQEC;
                    case A.rbe.GUILD_STAGE_VOICE:
                        return _.t.swJcN6;
                    default:
                        return _.t.RY8rIc;
                }
            })(),
            flag: A.xBc.STREAM,
        },
        [A.xBc.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: _.intl.string(_.t.rLSGeh),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t.maNzCO;
                    case A.rbe.GUILD_FORUM:
                    case A.rbe.GUILD_MEDIA:
                        return _.t.RyEwla;
                    default:
                        return _.t.qinvMU;
                }
            })(),
            flag: A.xBc.USE_EMBEDDED_ACTIVITIES,
        },
        [A.xBc.USE_EXTERNAL_APPS.toString()]: {
            title: _.intl.string(_.t["3TzAk0"]),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t.bgIY3H;
                    case A.rbe.GUILD_FORUM:
                    case A.rbe.GUILD_MEDIA:
                        return _.t.qPUPip;
                    default:
                        return _.t.czqMLp;
                }
            })(),
            flag: A.xBc.USE_EXTERNAL_APPS,
        },
        [A.xBc.USE_SOUNDBOARD.toString()]: {
            title: _.intl.string(_.t.Bco7NG),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.intl.format(_.t["0kBp/0"], { helpCenterArticle: S.A.getArticleURL(A.MVz.SOUNDBOARD) });
                    case A.rbe.GUILD_TEXT:
                    case A.rbe.GUILD_FORUM:
                    case A.rbe.GUILD_MEDIA:
                        return _.intl.format(_.t["6eYqU1"], { helpCenterArticle: S.A.getArticleURL(A.MVz.SOUNDBOARD) });
                    default:
                        return _.intl.format(_.t.GEi6Ym, { helpCenterArticle: S.A.getArticleURL(A.MVz.SOUNDBOARD) });
                }
            })(),
            flag: A.xBc.USE_SOUNDBOARD,
        },
        [A.xBc.USE_EXTERNAL_SOUNDS.toString()]: {
            title: _.intl.string(_.t.pwaVJ6),
            description: _.t.qDpPtX,
            flag: A.xBc.USE_EXTERNAL_SOUNDS,
        },
        [A.xBc.USE_VAD.toString()]: {
            title: _.intl.string(_.t["08zAV7"]),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t.fUYPly;
                    case A.rbe.GUILD_STAGE_VOICE:
                        return _.t.BJKqsW;
                    case A.rbe.GUILD_TEXT:
                    case A.rbe.GUILD_FORUM:
                    case A.rbe.GUILD_MEDIA:
                        return _.t["3GJwsc"];
                    default:
                        return _.t.s2eihY;
                }
            })(),
            flag: A.xBc.USE_VAD,
        },
        [A.xBc.PRIORITY_SPEAKER.toString()]: {
            title: _.intl.string(_.t.BVK71i),
            description: (() => {
                let t = {
                    keybind: _.intl.string(_.t.DkSwJ2),
                    onClick: () => {
                        {
                            let { openUserSettings: t } = r(858897);
                            t(s.X.KEYBINDS_PANEL);
                        }
                    },
                };
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.intl.format(_.t["8nIfDP"], t);
                    case A.rbe.GUILD_TEXT:
                    case A.rbe.GUILD_FORUM:
                    case A.rbe.GUILD_MEDIA:
                        return _.intl.format(_.t["0t6uSv"], t);
                    default:
                        return _.intl.format(_.t.UvB2KP, t);
                }
            })(),
            flag: A.xBc.PRIORITY_SPEAKER,
        },
        [A.xBc.MUTE_MEMBERS.toString()]: {
            title: _.intl.string(_.t["8EI30/"]),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t.bcuobK;
                    case A.rbe.GUILD_STAGE_VOICE:
                        return _.t.EbvdH9;
                    case A.rbe.GUILD_TEXT:
                    case A.rbe.GUILD_FORUM:
                    case A.rbe.GUILD_MEDIA:
                        return _.t.KYDG2K;
                    default:
                        return _.t.LW5C9P;
                }
            })(),
            flag: A.xBc.MUTE_MEMBERS,
        },
        [A.xBc.DEAFEN_MEMBERS.toString()]: {
            title: _.intl.string(_.t["9L47Fr"]),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t.amZ5vn;
                    case A.rbe.GUILD_TEXT:
                    case A.rbe.GUILD_FORUM:
                    case A.rbe.GUILD_MEDIA:
                        return _.t["d+i1nX"];
                    default:
                        return _.t.UAdIxo;
                }
            })(),
            flag: A.xBc.DEAFEN_MEMBERS,
        },
        [A.xBc.MOVE_MEMBERS.toString()]: {
            title: _.intl.string(_.t.YtjJPQ),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t.XmoyRD;
                    case A.rbe.GUILD_STAGE_VOICE:
                        return _.t.bizKz6;
                    case A.rbe.GUILD_TEXT:
                    case A.rbe.GUILD_FORUM:
                    case A.rbe.GUILD_MEDIA:
                        return _.t.cbdQy2;
                    default:
                        return _.t.nSD1ah;
                }
            })(),
            flag: A.xBc.MOVE_MEMBERS,
        },
        [A.xBc.REQUEST_TO_SPEAK.toString()]: {
            title: _.intl.string(_.t["5kicT2"]),
            description: E === A.rbe.GUILD_CATEGORY ? _.t.T1lMSl : _.t.uzlYFE,
            flag: A.xBc.REQUEST_TO_SPEAK,
        },
        [A.xBc.MANAGE_THREADS.toString()]: {
            title: A.kvI.GUILD_THREADS_ONLY.has(E)
                ? _.intl.string(_.t.ossiZD)
                : E === A.rbe.GUILD_CATEGORY
                  ? _.intl.string(_.t.QKe7Q3)
                  : _.intl.string(_.t.kEqgr7),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t.S31soU;
                    case A.rbe.GUILD_FORUM:
                    case A.rbe.GUILD_MEDIA:
                        return _.t["XLi/jG"];
                    default:
                        return _.t.yvan0j;
                }
            })(),
            flag: A.xBc.MANAGE_THREADS,
        },
        [A.xBc.CREATE_PUBLIC_THREADS.toString()]: {
            title: _.intl.string(_.t["25rKnX"]),
            description: E === A.rbe.GUILD_CATEGORY ? _.t["+M1yLj"] : _.t["5SDtGB"],
            flag: A.xBc.CREATE_PUBLIC_THREADS,
        },
        [A.xBc.CREATE_PRIVATE_THREADS.toString()]: {
            title: _.intl.string(_.t.QwbTSa),
            description: E === A.rbe.GUILD_CATEGORY ? _.t["hBS/zn"] : _.t.Chg2zd,
            flag: A.xBc.CREATE_PRIVATE_THREADS,
        },
        [A.xBc.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: A.kvI.GUILD_THREADS_ONLY.has(E)
                ? _.intl.string(_.t.fqhqWm)
                : E === A.rbe.GUILD_CATEGORY
                  ? _.intl.string(_.t["5QlVGy"])
                  : _.intl.string(_.t.fTE74g),
            description: (() => {
                switch (E) {
                    case A.rbe.GUILD_CATEGORY:
                        return _.t.DlIVcN;
                    case A.rbe.GUILD_FORUM:
                    case A.rbe.GUILD_MEDIA:
                        return _.t.XTnrPH;
                    default:
                        return _.t.xHO6Me;
                }
            })(),
            flag: A.xBc.SEND_MESSAGES_IN_THREADS,
        },
        [A.xBc.MANAGE_EVENTS.toString()]: {
            title: _.intl.string(_.t.HIgA5a),
            description: E === A.rbe.GUILD_CATEGORY ? _.t.CP2sz4 : _.t["4pO/TY"],
            flag: A.xBc.MANAGE_EVENTS,
        },
        [A.xBc.CREATE_EVENTS.toString()]: {
            title: _.intl.string(_.t.qyjZua),
            description: E === A.rbe.GUILD_CATEGORY ? _.t.XpibmC : _.t.sPoBLa,
            flag: A.xBc.CREATE_EVENTS,
        },
        [A.xBc.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: _.intl.string(_.t.VBwkUf),
            description: _.t.C6BzXx,
            flag: A.xBc.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
