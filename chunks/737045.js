r.d(e, {
    $N: () => I,
    T6: () => A,
    mW: () => D,
    oO: () => a,
    t0: () => G,
});
var i,
    n,
    E = r(718574),
    c = r(926983),
    s = r(780964),
    l = r(975571),
    S = r(652215),
    _ = r(985018),
    A =
        (((i = {})[(i.EMPTY_STATE = 0)] = "EMPTY_STATE"),
        (i[(i.ADMINISTRATOR = 1)] = "ADMINISTRATOR"),
        (i[(i.ROLE = 2)] = "ROLE"),
        (i[(i.OWNER = 3)] = "OWNER"),
        (i[(i.MEMBER = 4)] = "MEMBER"),
        (i[(i.USER = 5)] = "USER"),
        (i[(i.GUILD = 6)] = "GUILD"),
        i),
    a =
        (((n = {})[(n.ROLES = 0)] = "ROLES"),
        (n[(n.MEMBERS = 1)] = "MEMBERS"),
        (n[(n.USERS = 2)] = "USERS"),
        (n[(n.GUILDS = 3)] = "GUILDS"),
        n);
let I = 20,
    G = "channelPermissionSettingsAdvancedModeOn";

function D(t, e, i) {
    let n = t.type;
    return {
        [S.xBc.VIEW_CHANNEL.toString()]: {
            title: n === S.rbe.GUILD_CATEGORY ? _.intl.string(_.t.uV83yi) : _.intl.string(_.t["W/A4Qp"]),
            description: (() => {
                if (e)
                    switch (n) {
                        case S.rbe.GUILD_CATEGORY:
                            return _.t["o/vBzj"];
                        case S.rbe.GUILD_VOICE:
                        case S.rbe.GUILD_STAGE_VOICE:
                            return _.t.ejL1Wo;
                        default:
                            return _.t["3jG0Bo"];
                    }
                return n === S.rbe.GUILD_CATEGORY ? _.t.SzosGs : _.t.M2iEy3;
            })(),
            flag: S.xBc.VIEW_CHANNEL,
        },
        [S.xBc.MANAGE_CHANNELS.toString()]: {
            title: n === S.rbe.GUILD_CATEGORY ? _.intl.string(_.t["9qLtWs"]) : _.intl.string(_.t.nAw15L),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t.KJ2JnG;
                    case S.rbe.GUILD_VOICE:
                        return _.t["+gl2ne"];
                    case S.rbe.GUILD_STAGE_VOICE:
                        return _.t.SDX669;
                    default:
                        return _.t.ydL28i;
                }
            })(),
            flag: S.xBc.MANAGE_CHANNELS,
        },
        [S.xBc.MANAGE_ROLES.toString()]: {
            title: _.intl.string(_.t.ICb6am),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t.TyyCMD;
                    case S.rbe.GUILD_STAGE_VOICE:
                        return _.t.hcw4mx;
                    default:
                        return _.t.hOMXOv;
                }
            })(),
            flag: S.xBc.MANAGE_ROLES,
        },
        [S.xBc.MANAGE_WEBHOOKS.toString()]: {
            title: _.intl.string(_.t["/ADKmM"]),
            description: n === S.rbe.GUILD_CATEGORY ? _.t["K5+ZZ7"] : _.t.CYBZry,
            flag: S.xBc.MANAGE_WEBHOOKS,
        },
        [S.xBc.CREATE_INSTANT_INVITE.toString()]: {
            title: _.intl.string(_.t.zJrgTG),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t["3YFAAX"];
                    case S.rbe.GUILD_VOICE:
                    case S.rbe.GUILD_STAGE_VOICE:
                        return _.t.lUCs1n;
                    default:
                        return _.t.q4g2aI;
                }
            })(),
            flag: S.xBc.CREATE_INSTANT_INVITE,
        },
        [S.xBc.SEND_MESSAGES.toString()]: {
            title: S.kvI.GUILD_THREADS_ONLY.has(n)
                ? _.intl.string(_.t.nJwAHX)
                : n === S.rbe.GUILD_CATEGORY
                  ? _.intl.string(_.t.S1VOwd)
                  : _.intl.string(_.t.T32rkC),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t.IjeLuu;
                    case S.rbe.GUILD_FORUM:
                        return (null == i ? void 0 : i.createPostsDisabled) && !t.isMediaChannel()
                            ? E.A.getForumChannelPermissionText()
                            : _.t.LG9VAi;
                    case S.rbe.GUILD_MEDIA:
                        return _.t.LG9VAi;
                    case S.rbe.GUILD_ANNOUNCEMENT:
                        return _.intl.format(_.t.WFwfSD, {
                            articleURL: l.A.getArticleURL(S.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    case S.rbe.GUILD_VOICE:
                        return c.A.getTextInVoiceSendMessageChannelPermissionText(
                            null == i ? void 0 : i.sendMessagesDisabled,
                        );
                    default:
                        return _.t.WQ6zpT;
                }
            })(),
            flag: S.xBc.SEND_MESSAGES,
        },
        [S.xBc.EMBED_LINKS.toString()]: {
            title: _.intl.string(_.t["969dEL"]),
            description: n === S.rbe.GUILD_CATEGORY ? _.t["7zlUay"] : _.t.XFFhA0,
            flag: S.xBc.EMBED_LINKS,
        },
        [S.xBc.ATTACH_FILES.toString()]: {
            title: _.intl.string(_.t["3AS4UM"]),
            description: n === S.rbe.GUILD_CATEGORY ? _.t.XREf9l : _.t.WK9r7F,
            flag: S.xBc.ATTACH_FILES,
        },
        [S.xBc.ADD_REACTIONS.toString()]: {
            title: _.intl.string(_.t.yEoJAr),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t.pZT2Zh;
                    case S.rbe.GUILD_VOICE:
                        return _.t.xSSbIs;
                    default:
                        return _.t.PVjR1Y;
                }
            })(),
            flag: S.xBc.ADD_REACTIONS,
        },
        [S.xBc.USE_EXTERNAL_EMOJIS.toString()]: {
            title: _.intl.string(_.t["+bxf3H"]),
            description: n === S.rbe.GUILD_CATEGORY ? _.t.mWAbK4 : _.t.Qc5vOr,
            flag: S.xBc.USE_EXTERNAL_EMOJIS,
        },
        [S.xBc.USE_EXTERNAL_STICKERS.toString()]: {
            title: _.intl.string(_.t.ERNhYf),
            description: n === S.rbe.GUILD_CATEGORY ? _.t["39whJ4"] : _.t.VF4fZZ,
            flag: S.xBc.USE_EXTERNAL_STICKERS,
        },
        [S.xBc.MENTION_EVERYONE.toString()]: {
            title:
                n === S.rbe.GUILD_STAGE_VOICE
                    ? _.intl.string(_.t.VDUAHO)
                    : (null == i ? void 0 : i.inGameMentionsExperiment)
                      ? _.intl.string(_.t.lEO7Wr)
                      : _.intl.string(_.t.Y78KGC),
            description:
                n === S.rbe.GUILD_CATEGORY
                    ? _.t["HOhg/B"]
                    : n === S.rbe.GUILD_STAGE_VOICE
                      ? _.t.rZn1oO
                      : (null == i ? void 0 : i.inGameMentionsExperiment)
                        ? _.t.wdHpIC
                        : _.t["6IUSdt"],
            flag: S.xBc.MENTION_EVERYONE,
        },
        [S.xBc.MANAGE_MESSAGES.toString()]: {
            title: _.intl.string(_.t["6lU9xM"]),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t["5R9nYh"];
                    case S.rbe.GUILD_ANNOUNCEMENT:
                        return _.intl.format(_.t.XRxOo0, {
                            articleURL: l.A.getArticleURL(S.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    default:
                        return _.t["SeA+G9"];
                }
            })(),
            flag: S.xBc.MANAGE_MESSAGES,
        },
        [S.xBc.PIN_MESSAGES.toString()]: {
            title: _.intl.string(_.t.Y5BI39),
            description: n === S.rbe.GUILD_CATEGORY ? _.t.gmbD87 : _.t["0l2EjL"],
            flag: S.xBc.PIN_MESSAGES,
        },
        [S.xBc.BYPASS_SLOWMODE.toString()]: {
            title: _.intl.string(_.t.kqcjeV),
            description: n === S.rbe.GUILD_CATEGORY ? _.t.C4t1Xu : _.t.Ha1xbw,
            flag: S.xBc.BYPASS_SLOWMODE,
        },
        [S.xBc.READ_MESSAGE_HISTORY.toString()]: {
            title: S.kvI.GUILD_THREADS_ONLY.has(n) ? _.intl.string(_.t["0RQwtn"]) : _.intl.string(_.t.l9ufaR),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t["cJRv/g"];
                    case S.rbe.GUILD_VOICE:
                        return c.A.getTextInVoiceReadMessageHistoryChannelPermissionText(
                            null == i ? void 0 : i.readMessageHistoryDisabled,
                        );
                    case S.rbe.GUILD_FORUM:
                    case S.rbe.GUILD_MEDIA:
                        return _.t.RqCc7i;
                    default:
                        return _.t.cuMfH0;
                }
            })(),
            flag: S.xBc.READ_MESSAGE_HISTORY,
        },
        [S.xBc.SEND_TTS_MESSAGES.toString()]: {
            title: _.intl.string(_.t.mMbwh7),
            description: n === S.rbe.GUILD_CATEGORY ? _.t.b7pc9U : _.t.CpakGz,
            flag: S.xBc.SEND_TTS_MESSAGES,
        },
        [S.xBc.USE_APPLICATION_COMMANDS.toString()]: {
            title: _.intl.string(_.t.nkoPOt),
            description: n === S.rbe.GUILD_CATEGORY ? _.t["D+qW0J"] : _.t.ReG3gG,
            flag: S.xBc.USE_APPLICATION_COMMANDS,
        },
        [S.xBc.SEND_VOICE_MESSAGES.toString()]: {
            title: _.intl.string(_.t.WlWSBT),
            description: n === S.rbe.GUILD_CATEGORY ? _.t.gavGfv : _.t.BhEo9V,
            flag: S.xBc.SEND_VOICE_MESSAGES,
        },
        [S.xBc.SEND_POLLS.toString()]: {
            title: _.intl.string(_.t.UMQ7Ww),
            description: n === S.rbe.GUILD_CATEGORY ? _.t["18Ya7L"] : _.t.ckKKIO,
            flag: S.xBc.SEND_POLLS,
        },
        [S.xBc.CONNECT.toString()]: {
            title: _.intl.string(_.t.S0W8Z5),
            description: (() => {
                if (e)
                    switch (n) {
                        case S.rbe.GUILD_CATEGORY:
                            return _.t.XcrieN;
                        case S.rbe.GUILD_STAGE_VOICE:
                            return _.t.SOFNhP;
                        case S.rbe.GUILD_TEXT:
                        case S.rbe.GUILD_FORUM:
                        case S.rbe.GUILD_MEDIA:
                            return _.t.LsS8xT;
                        default:
                            return _.t.j4AyO8;
                    }
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t.stA0Hl;
                    case S.rbe.GUILD_STAGE_VOICE:
                        return _.t["G9+Qie"];
                    case S.rbe.GUILD_TEXT:
                    case S.rbe.GUILD_FORUM:
                    case S.rbe.GUILD_MEDIA:
                        return _.t["QU/Rw8"];
                    default:
                        return _.t.HvG8uR;
                }
            })(),
            flag: S.xBc.CONNECT,
        },
        [S.xBc.SPEAK.toString()]: {
            title: _.intl.string(_.t["8w1tIR"]),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t.iXhS6R;
                    case S.rbe.GUILD_STAGE_VOICE:
                        return _.t.a8n741;
                    case S.rbe.GUILD_TEXT:
                    case S.rbe.GUILD_FORUM:
                    case S.rbe.GUILD_MEDIA:
                        return _.t["+VXsJI"];
                    default:
                        return _.t["568E6d"];
                }
            })(),
            flag: S.xBc.SPEAK,
        },
        [S.xBc.STREAM.toString()]: {
            title: _.intl.string(_.t.FlNoSV),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t["ryG0/J"];
                    case S.rbe.GUILD_TEXT:
                    case S.rbe.GUILD_FORUM:
                    case S.rbe.GUILD_MEDIA:
                        return _.t.AuEQEC;
                    case S.rbe.GUILD_STAGE_VOICE:
                        return _.t.swJcN6;
                    default:
                        return _.t.RY8rIc;
                }
            })(),
            flag: S.xBc.STREAM,
        },
        [S.xBc.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: _.intl.string(_.t.rLSGeh),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t.maNzCO;
                    case S.rbe.GUILD_FORUM:
                    case S.rbe.GUILD_MEDIA:
                        return _.t.RyEwla;
                    default:
                        return _.t.qinvMU;
                }
            })(),
            flag: S.xBc.USE_EMBEDDED_ACTIVITIES,
        },
        [S.xBc.USE_EXTERNAL_APPS.toString()]: {
            title: _.intl.string(_.t["3TzAk0"]),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t.bgIY3H;
                    case S.rbe.GUILD_FORUM:
                    case S.rbe.GUILD_MEDIA:
                        return _.t.qPUPip;
                    default:
                        return _.t.czqMLp;
                }
            })(),
            flag: S.xBc.USE_EXTERNAL_APPS,
        },
        [S.xBc.USE_SOUNDBOARD.toString()]: {
            title: _.intl.string(_.t.Bco7NG),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.intl.format(_.t["0kBp/0"], {
                            helpCenterArticle: l.A.getArticleURL(S.MVz.SOUNDBOARD),
                        });
                    case S.rbe.GUILD_TEXT:
                    case S.rbe.GUILD_FORUM:
                    case S.rbe.GUILD_MEDIA:
                        return _.intl.format(_.t["6eYqU1"], {
                            helpCenterArticle: l.A.getArticleURL(S.MVz.SOUNDBOARD),
                        });
                    default:
                        return _.intl.format(_.t.GEi6Ym, {
                            helpCenterArticle: l.A.getArticleURL(S.MVz.SOUNDBOARD),
                        });
                }
            })(),
            flag: S.xBc.USE_SOUNDBOARD,
        },
        [S.xBc.USE_EXTERNAL_SOUNDS.toString()]: {
            title: _.intl.string(_.t.pwaVJ6),
            description: _.t.qDpPtX,
            flag: S.xBc.USE_EXTERNAL_SOUNDS,
        },
        [S.xBc.USE_VAD.toString()]: {
            title: _.intl.string(_.t["08zAV7"]),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t.fUYPly;
                    case S.rbe.GUILD_STAGE_VOICE:
                        return _.t.BJKqsW;
                    case S.rbe.GUILD_TEXT:
                    case S.rbe.GUILD_FORUM:
                    case S.rbe.GUILD_MEDIA:
                        return _.t["3GJwsc"];
                    default:
                        return _.t.s2eihY;
                }
            })(),
            flag: S.xBc.USE_VAD,
        },
        [S.xBc.PRIORITY_SPEAKER.toString()]: {
            title: _.intl.string(_.t.BVK71i),
            description: (() => {
                let t = {
                    keybind: _.intl.string(_.t.DkSwJ2),
                    onClick: () => {
                        {
                            let { openUserSettings: t } = r(840065);
                            t(s.X.KEYBINDS_PANEL, {
                                section: S.nc_.KEYBINDS,
                            });
                        }
                    },
                };
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.intl.format(_.t["8nIfDP"], t);
                    case S.rbe.GUILD_TEXT:
                    case S.rbe.GUILD_FORUM:
                    case S.rbe.GUILD_MEDIA:
                        return _.intl.format(_.t["0t6uSv"], t);
                    default:
                        return _.intl.format(_.t.UvB2KP, t);
                }
            })(),
            flag: S.xBc.PRIORITY_SPEAKER,
        },
        [S.xBc.MUTE_MEMBERS.toString()]: {
            title: _.intl.string(_.t["8EI30/"]),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t.bcuobK;
                    case S.rbe.GUILD_STAGE_VOICE:
                        return _.t.EbvdH9;
                    case S.rbe.GUILD_TEXT:
                    case S.rbe.GUILD_FORUM:
                    case S.rbe.GUILD_MEDIA:
                        return _.t.KYDG2K;
                    default:
                        return _.t.LW5C9P;
                }
            })(),
            flag: S.xBc.MUTE_MEMBERS,
        },
        [S.xBc.DEAFEN_MEMBERS.toString()]: {
            title: _.intl.string(_.t["9L47Fr"]),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t.amZ5vn;
                    case S.rbe.GUILD_TEXT:
                    case S.rbe.GUILD_FORUM:
                    case S.rbe.GUILD_MEDIA:
                        return _.t["d+i1nX"];
                    default:
                        return _.t.UAdIxo;
                }
            })(),
            flag: S.xBc.DEAFEN_MEMBERS,
        },
        [S.xBc.MOVE_MEMBERS.toString()]: {
            title: _.intl.string(_.t.YtjJPQ),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t.XmoyRD;
                    case S.rbe.GUILD_STAGE_VOICE:
                        return _.t.bizKz6;
                    case S.rbe.GUILD_TEXT:
                    case S.rbe.GUILD_FORUM:
                    case S.rbe.GUILD_MEDIA:
                        return _.t.cbdQy2;
                    default:
                        return _.t.nSD1ah;
                }
            })(),
            flag: S.xBc.MOVE_MEMBERS,
        },
        [S.xBc.REQUEST_TO_SPEAK.toString()]: {
            title: _.intl.string(_.t["5kicT2"]),
            description: n === S.rbe.GUILD_CATEGORY ? _.t.T1lMSl : _.t.uzlYFE,
            flag: S.xBc.REQUEST_TO_SPEAK,
        },
        [S.xBc.MANAGE_THREADS.toString()]: {
            title: S.kvI.GUILD_THREADS_ONLY.has(n)
                ? _.intl.string(_.t.ossiZD)
                : n === S.rbe.GUILD_CATEGORY
                  ? _.intl.string(_.t.QKe7Q3)
                  : _.intl.string(_.t.kEqgr7),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t.S31soU;
                    case S.rbe.GUILD_FORUM:
                    case S.rbe.GUILD_MEDIA:
                        return _.t["XLi/jG"];
                    default:
                        return _.t.yvan0j;
                }
            })(),
            flag: S.xBc.MANAGE_THREADS,
        },
        [S.xBc.CREATE_PUBLIC_THREADS.toString()]: {
            title: _.intl.string(_.t["25rKnX"]),
            description: n === S.rbe.GUILD_CATEGORY ? _.t["+M1yLj"] : _.t["5SDtGB"],
            flag: S.xBc.CREATE_PUBLIC_THREADS,
        },
        [S.xBc.CREATE_PRIVATE_THREADS.toString()]: {
            title: _.intl.string(_.t.QwbTSa),
            description: n === S.rbe.GUILD_CATEGORY ? _.t["hBS/zn"] : _.t.Chg2zd,
            flag: S.xBc.CREATE_PRIVATE_THREADS,
        },
        [S.xBc.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: S.kvI.GUILD_THREADS_ONLY.has(n)
                ? _.intl.string(_.t.fqhqWm)
                : n === S.rbe.GUILD_CATEGORY
                  ? _.intl.string(_.t["5QlVGy"])
                  : _.intl.string(_.t.fTE74g),
            description: (() => {
                switch (n) {
                    case S.rbe.GUILD_CATEGORY:
                        return _.t.DlIVcN;
                    case S.rbe.GUILD_FORUM:
                    case S.rbe.GUILD_MEDIA:
                        return _.t.XTnrPH;
                    default:
                        return _.t.xHO6Me;
                }
            })(),
            flag: S.xBc.SEND_MESSAGES_IN_THREADS,
        },
        [S.xBc.MANAGE_EVENTS.toString()]: {
            title: _.intl.string(_.t.HIgA5a),
            description: n === S.rbe.GUILD_CATEGORY ? _.t.CP2sz4 : _.t["4pO/TY"],
            flag: S.xBc.MANAGE_EVENTS,
        },
        [S.xBc.CREATE_EVENTS.toString()]: {
            title: _.intl.string(_.t.qyjZua),
            description: n === S.rbe.GUILD_CATEGORY ? _.t.XpibmC : _.t.sPoBLa,
            flag: S.xBc.CREATE_EVENTS,
        },
        [S.xBc.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: _.intl.string(_.t.VBwkUf),
            description: _.t.C6BzXx,
            flag: S.xBc.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
