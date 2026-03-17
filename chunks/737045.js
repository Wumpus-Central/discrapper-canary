r.d(e, { $N: () => I, T6: () => l, mW: () => D, oO: () => a, t0: () => G });
var i,
    n,
    E = r(718574),
    c = r(926983),
    s = r(780964),
    S = r(975571),
    _ = r(652215),
    A = r(985018),
    l =
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
        [_.xBc.VIEW_CHANNEL.toString()]: {
            title: n === _.rbe.GUILD_CATEGORY ? A.intl.string(A.t.uV83yi) : A.intl.string(A.t["W/A4Qp"]),
            description: (() => {
                if (e)
                    switch (n) {
                        case _.rbe.GUILD_CATEGORY:
                            return A.t["o/vBzj"];
                        case _.rbe.GUILD_VOICE:
                        case _.rbe.GUILD_STAGE_VOICE:
                            return A.t.ejL1Wo;
                        default:
                            return A.t["3jG0Bo"];
                    }
                return n === _.rbe.GUILD_CATEGORY ? A.t.SzosGs : A.t.M2iEy3;
            })(),
            flag: _.xBc.VIEW_CHANNEL,
        },
        [_.xBc.MANAGE_CHANNELS.toString()]: {
            title: n === _.rbe.GUILD_CATEGORY ? A.intl.string(A.t["9qLtWs"]) : A.intl.string(A.t.nAw15L),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t.KJ2JnG;
                    case _.rbe.GUILD_VOICE:
                        return A.t["+gl2ne"];
                    case _.rbe.GUILD_STAGE_VOICE:
                        return A.t.SDX669;
                    default:
                        return A.t.ydL28i;
                }
            })(),
            flag: _.xBc.MANAGE_CHANNELS,
        },
        [_.xBc.MANAGE_ROLES.toString()]: {
            title: A.intl.string(A.t.ICb6am),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t.TyyCMD;
                    case _.rbe.GUILD_STAGE_VOICE:
                        return A.t.hcw4mx;
                    default:
                        return A.t.hOMXOv;
                }
            })(),
            flag: _.xBc.MANAGE_ROLES,
        },
        [_.xBc.MANAGE_WEBHOOKS.toString()]: {
            title: A.intl.string(A.t["/ADKmM"]),
            description: n === _.rbe.GUILD_CATEGORY ? A.t["K5+ZZ7"] : A.t.CYBZry,
            flag: _.xBc.MANAGE_WEBHOOKS,
        },
        [_.xBc.CREATE_INSTANT_INVITE.toString()]: {
            title: A.intl.string(A.t.zJrgTG),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t["3YFAAX"];
                    case _.rbe.GUILD_VOICE:
                    case _.rbe.GUILD_STAGE_VOICE:
                        return A.t.lUCs1n;
                    default:
                        return A.t.q4g2aI;
                }
            })(),
            flag: _.xBc.CREATE_INSTANT_INVITE,
        },
        [_.xBc.SEND_MESSAGES.toString()]: {
            title: _.kvI.GUILD_THREADS_ONLY.has(n)
                ? A.intl.string(A.t.nJwAHX)
                : n === _.rbe.GUILD_CATEGORY
                  ? A.intl.string(A.t.S1VOwd)
                  : A.intl.string(A.t.T32rkC),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t.IjeLuu;
                    case _.rbe.GUILD_FORUM:
                        return i?.createPostsDisabled && !t.isMediaChannel()
                            ? E.A.getForumChannelPermissionText()
                            : A.t.LG9VAi;
                    case _.rbe.GUILD_MEDIA:
                        return A.t.LG9VAi;
                    case _.rbe.GUILD_ANNOUNCEMENT:
                        return A.intl.format(A.t.WFwfSD, {
                            articleURL: S.A.getArticleURL(_.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    case _.rbe.GUILD_VOICE:
                        return c.A.getTextInVoiceSendMessageChannelPermissionText(i?.sendMessagesDisabled);
                    default:
                        return A.t.WQ6zpT;
                }
            })(),
            flag: _.xBc.SEND_MESSAGES,
        },
        [_.xBc.EMBED_LINKS.toString()]: {
            title: A.intl.string(A.t["969dEL"]),
            description: n === _.rbe.GUILD_CATEGORY ? A.t["7zlUay"] : A.t.XFFhA0,
            flag: _.xBc.EMBED_LINKS,
        },
        [_.xBc.ATTACH_FILES.toString()]: {
            title: A.intl.string(A.t["3AS4UM"]),
            description: n === _.rbe.GUILD_CATEGORY ? A.t.XREf9l : A.t.WK9r7F,
            flag: _.xBc.ATTACH_FILES,
        },
        [_.xBc.ADD_REACTIONS.toString()]: {
            title: A.intl.string(A.t.yEoJAr),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t.pZT2Zh;
                    case _.rbe.GUILD_VOICE:
                        return A.t.xSSbIs;
                    default:
                        return A.t.PVjR1Y;
                }
            })(),
            flag: _.xBc.ADD_REACTIONS,
        },
        [_.xBc.USE_EXTERNAL_EMOJIS.toString()]: {
            title: A.intl.string(A.t["+bxf3H"]),
            description: n === _.rbe.GUILD_CATEGORY ? A.t.mWAbK4 : A.t.Qc5vOr,
            flag: _.xBc.USE_EXTERNAL_EMOJIS,
        },
        [_.xBc.USE_EXTERNAL_STICKERS.toString()]: {
            title: A.intl.string(A.t.ERNhYf),
            description: n === _.rbe.GUILD_CATEGORY ? A.t["39whJ4"] : A.t.VF4fZZ,
            flag: _.xBc.USE_EXTERNAL_STICKERS,
        },
        [_.xBc.MENTION_EVERYONE.toString()]: {
            title: n === _.rbe.GUILD_STAGE_VOICE ? A.intl.string(A.t.VDUAHO) : A.intl.string(A.t.Y78KGC),
            description:
                n === _.rbe.GUILD_CATEGORY ? A.t["HOhg/B"] : n === _.rbe.GUILD_STAGE_VOICE ? A.t.rZn1oO : A.t["6IUSdt"],
            flag: _.xBc.MENTION_EVERYONE,
        },
        [_.xBc.MANAGE_MESSAGES.toString()]: {
            title: A.intl.string(A.t["6lU9xM"]),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t["5R9nYh"];
                    case _.rbe.GUILD_ANNOUNCEMENT:
                        return A.intl.format(A.t.XRxOo0, {
                            articleURL: S.A.getArticleURL(_.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    default:
                        return A.t["SeA+G9"];
                }
            })(),
            flag: _.xBc.MANAGE_MESSAGES,
        },
        [_.xBc.PIN_MESSAGES.toString()]: {
            title: A.intl.string(A.t.Y5BI39),
            description: n === _.rbe.GUILD_CATEGORY ? A.t.gmbD87 : A.t["0l2EjL"],
            flag: _.xBc.PIN_MESSAGES,
        },
        [_.xBc.BYPASS_SLOWMODE.toString()]: {
            title: A.intl.string(A.t.kqcjeV),
            description: n === _.rbe.GUILD_CATEGORY ? A.t.C4t1Xu : A.t.Ha1xbw,
            flag: _.xBc.BYPASS_SLOWMODE,
        },
        [_.xBc.READ_MESSAGE_HISTORY.toString()]: {
            title: _.kvI.GUILD_THREADS_ONLY.has(n) ? A.intl.string(A.t["0RQwtn"]) : A.intl.string(A.t.l9ufaR),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t["cJRv/g"];
                    case _.rbe.GUILD_VOICE:
                        return c.A.getTextInVoiceReadMessageHistoryChannelPermissionText(i?.readMessageHistoryDisabled);
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return A.t.RqCc7i;
                    default:
                        return A.t.cuMfH0;
                }
            })(),
            flag: _.xBc.READ_MESSAGE_HISTORY,
        },
        [_.xBc.SEND_TTS_MESSAGES.toString()]: {
            title: A.intl.string(A.t.mMbwh7),
            description: n === _.rbe.GUILD_CATEGORY ? A.t.b7pc9U : A.t.CpakGz,
            flag: _.xBc.SEND_TTS_MESSAGES,
        },
        [_.xBc.USE_APPLICATION_COMMANDS.toString()]: {
            title: A.intl.string(A.t.nkoPOt),
            description: n === _.rbe.GUILD_CATEGORY ? A.t["D+qW0J"] : A.t.ReG3gG,
            flag: _.xBc.USE_APPLICATION_COMMANDS,
        },
        [_.xBc.SEND_VOICE_MESSAGES.toString()]: {
            title: A.intl.string(A.t.WlWSBT),
            description: n === _.rbe.GUILD_CATEGORY ? A.t.gavGfv : A.t.BhEo9V,
            flag: _.xBc.SEND_VOICE_MESSAGES,
        },
        [_.xBc.SEND_POLLS.toString()]: {
            title: A.intl.string(A.t.UMQ7Ww),
            description: n === _.rbe.GUILD_CATEGORY ? A.t["18Ya7L"] : A.t.ckKKIO,
            flag: _.xBc.SEND_POLLS,
        },
        [_.xBc.CONNECT.toString()]: {
            title: A.intl.string(A.t.S0W8Z5),
            description: (() => {
                if (e)
                    switch (n) {
                        case _.rbe.GUILD_CATEGORY:
                            return A.t.XcrieN;
                        case _.rbe.GUILD_STAGE_VOICE:
                            return A.t.SOFNhP;
                        case _.rbe.GUILD_TEXT:
                        case _.rbe.GUILD_FORUM:
                        case _.rbe.GUILD_MEDIA:
                            return A.t.LsS8xT;
                        default:
                            return A.t.j4AyO8;
                    }
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t.stA0Hl;
                    case _.rbe.GUILD_STAGE_VOICE:
                        return A.t["G9+Qie"];
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return A.t["QU/Rw8"];
                    default:
                        return A.t.HvG8uR;
                }
            })(),
            flag: _.xBc.CONNECT,
        },
        [_.xBc.SPEAK.toString()]: {
            title: A.intl.string(A.t["8w1tIR"]),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t.iXhS6R;
                    case _.rbe.GUILD_STAGE_VOICE:
                        return A.t.a8n741;
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return A.t["+VXsJI"];
                    default:
                        return A.t["568E6d"];
                }
            })(),
            flag: _.xBc.SPEAK,
        },
        [_.xBc.STREAM.toString()]: {
            title: A.intl.string(A.t.FlNoSV),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t["ryG0/J"];
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return A.t.AuEQEC;
                    case _.rbe.GUILD_STAGE_VOICE:
                        return A.t.swJcN6;
                    default:
                        return A.t.RY8rIc;
                }
            })(),
            flag: _.xBc.STREAM,
        },
        [_.xBc.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: A.intl.string(A.t.rLSGeh),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t.maNzCO;
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return A.t.RyEwla;
                    default:
                        return A.t.qinvMU;
                }
            })(),
            flag: _.xBc.USE_EMBEDDED_ACTIVITIES,
        },
        [_.xBc.USE_EXTERNAL_APPS.toString()]: {
            title: A.intl.string(A.t["3TzAk0"]),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t.bgIY3H;
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return A.t.qPUPip;
                    default:
                        return A.t.czqMLp;
                }
            })(),
            flag: _.xBc.USE_EXTERNAL_APPS,
        },
        [_.xBc.USE_SOUNDBOARD.toString()]: {
            title: A.intl.string(A.t.Bco7NG),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.intl.format(A.t["0kBp/0"], { helpCenterArticle: S.A.getArticleURL(_.MVz.SOUNDBOARD) });
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return A.intl.format(A.t["6eYqU1"], { helpCenterArticle: S.A.getArticleURL(_.MVz.SOUNDBOARD) });
                    default:
                        return A.intl.format(A.t.GEi6Ym, { helpCenterArticle: S.A.getArticleURL(_.MVz.SOUNDBOARD) });
                }
            })(),
            flag: _.xBc.USE_SOUNDBOARD,
        },
        [_.xBc.USE_EXTERNAL_SOUNDS.toString()]: {
            title: A.intl.string(A.t.pwaVJ6),
            description: A.t.qDpPtX,
            flag: _.xBc.USE_EXTERNAL_SOUNDS,
        },
        [_.xBc.USE_VAD.toString()]: {
            title: A.intl.string(A.t["08zAV7"]),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t.fUYPly;
                    case _.rbe.GUILD_STAGE_VOICE:
                        return A.t.BJKqsW;
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return A.t["3GJwsc"];
                    default:
                        return A.t.s2eihY;
                }
            })(),
            flag: _.xBc.USE_VAD,
        },
        [_.xBc.PRIORITY_SPEAKER.toString()]: {
            title: A.intl.string(A.t.BVK71i),
            description: (() => {
                let t = {
                    keybind: A.intl.string(A.t.DkSwJ2),
                    onClick: () => {
                        {
                            let { openUserSettings: t } = r(840065);
                            t(s.X.KEYBINDS_PANEL);
                        }
                    },
                };
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.intl.format(A.t["8nIfDP"], t);
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return A.intl.format(A.t["0t6uSv"], t);
                    default:
                        return A.intl.format(A.t.UvB2KP, t);
                }
            })(),
            flag: _.xBc.PRIORITY_SPEAKER,
        },
        [_.xBc.MUTE_MEMBERS.toString()]: {
            title: A.intl.string(A.t["8EI30/"]),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t.bcuobK;
                    case _.rbe.GUILD_STAGE_VOICE:
                        return A.t.EbvdH9;
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return A.t.KYDG2K;
                    default:
                        return A.t.LW5C9P;
                }
            })(),
            flag: _.xBc.MUTE_MEMBERS,
        },
        [_.xBc.DEAFEN_MEMBERS.toString()]: {
            title: A.intl.string(A.t["9L47Fr"]),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t.amZ5vn;
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return A.t["d+i1nX"];
                    default:
                        return A.t.UAdIxo;
                }
            })(),
            flag: _.xBc.DEAFEN_MEMBERS,
        },
        [_.xBc.MOVE_MEMBERS.toString()]: {
            title: A.intl.string(A.t.YtjJPQ),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t.XmoyRD;
                    case _.rbe.GUILD_STAGE_VOICE:
                        return A.t.bizKz6;
                    case _.rbe.GUILD_TEXT:
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return A.t.cbdQy2;
                    default:
                        return A.t.nSD1ah;
                }
            })(),
            flag: _.xBc.MOVE_MEMBERS,
        },
        [_.xBc.REQUEST_TO_SPEAK.toString()]: {
            title: A.intl.string(A.t["5kicT2"]),
            description: n === _.rbe.GUILD_CATEGORY ? A.t.T1lMSl : A.t.uzlYFE,
            flag: _.xBc.REQUEST_TO_SPEAK,
        },
        [_.xBc.MANAGE_THREADS.toString()]: {
            title: _.kvI.GUILD_THREADS_ONLY.has(n)
                ? A.intl.string(A.t.ossiZD)
                : n === _.rbe.GUILD_CATEGORY
                  ? A.intl.string(A.t.QKe7Q3)
                  : A.intl.string(A.t.kEqgr7),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t.S31soU;
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return A.t["XLi/jG"];
                    default:
                        return A.t.yvan0j;
                }
            })(),
            flag: _.xBc.MANAGE_THREADS,
        },
        [_.xBc.CREATE_PUBLIC_THREADS.toString()]: {
            title: A.intl.string(A.t["25rKnX"]),
            description: n === _.rbe.GUILD_CATEGORY ? A.t["+M1yLj"] : A.t["5SDtGB"],
            flag: _.xBc.CREATE_PUBLIC_THREADS,
        },
        [_.xBc.CREATE_PRIVATE_THREADS.toString()]: {
            title: A.intl.string(A.t.QwbTSa),
            description: n === _.rbe.GUILD_CATEGORY ? A.t["hBS/zn"] : A.t.Chg2zd,
            flag: _.xBc.CREATE_PRIVATE_THREADS,
        },
        [_.xBc.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: _.kvI.GUILD_THREADS_ONLY.has(n)
                ? A.intl.string(A.t.fqhqWm)
                : n === _.rbe.GUILD_CATEGORY
                  ? A.intl.string(A.t["5QlVGy"])
                  : A.intl.string(A.t.fTE74g),
            description: (() => {
                switch (n) {
                    case _.rbe.GUILD_CATEGORY:
                        return A.t.DlIVcN;
                    case _.rbe.GUILD_FORUM:
                    case _.rbe.GUILD_MEDIA:
                        return A.t.XTnrPH;
                    default:
                        return A.t.xHO6Me;
                }
            })(),
            flag: _.xBc.SEND_MESSAGES_IN_THREADS,
        },
        [_.xBc.MANAGE_EVENTS.toString()]: {
            title: A.intl.string(A.t.HIgA5a),
            description: n === _.rbe.GUILD_CATEGORY ? A.t.CP2sz4 : A.t["4pO/TY"],
            flag: _.xBc.MANAGE_EVENTS,
        },
        [_.xBc.CREATE_EVENTS.toString()]: {
            title: A.intl.string(A.t.qyjZua),
            description: n === _.rbe.GUILD_CATEGORY ? A.t.XpibmC : A.t.sPoBLa,
            flag: _.xBc.CREATE_EVENTS,
        },
        [_.xBc.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: A.intl.string(A.t.VBwkUf),
            description: A.t.C6BzXx,
            flag: _.xBc.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
