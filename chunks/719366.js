r.d(e, { T6: () => I, oO: () => G, $N: () => o, mW: () => u, t0: () => D });
var i,
    n,
    E = r(477900);
r(582128);
var c = r(834730),
    l = r(695366),
    s = r(375708);
function a(t, e) {
    return (0, E.jsxs)(
        c.E,
        {
            color: "text-feedback-critical",
            style: { display: "flex", gap: "4px", margin: "8px 0 4px 0", alignItems: "center" },
            variant: "text-sm/normal",
            children: [(0, E.jsx)(l.E, { size: "custom", color: "currentColor", width: 14, height: 14 }), t],
        },
        e,
    );
}
function _(t, e) {
    return (0, E.jsxs)(
        c.E,
        {
            color: "text-feedback-critical",
            style: { display: "flex", gap: "4px", margin: "8px 0 4px 0", alignItems: "center" },
            variant: "text-sm/normal",
            children: [(0, E.jsx)(l.E, { size: "custom", color: "currentColor", width: 14, height: 14 }), t],
        },
        e,
    );
}
var A = r(780964),
    S = r(975571),
    T = r(652215),
    I =
        (((i = {})[(i.EMPTY_STATE = 0)] = "EMPTY_STATE"),
        (i[(i.ADMINISTRATOR = 1)] = "ADMINISTRATOR"),
        (i[(i.ROLE = 2)] = "ROLE"),
        (i[(i.OWNER = 3)] = "OWNER"),
        (i[(i.MEMBER = 4)] = "MEMBER"),
        (i[(i.USER = 5)] = "USER"),
        (i[(i.GUILD = 6)] = "GUILD"),
        i),
    G =
        (((n = {})[(n.ROLES = 0)] = "ROLES"),
        (n[(n.MEMBERS = 1)] = "MEMBERS"),
        (n[(n.USERS = 2)] = "USERS"),
        (n[(n.GUILDS = 3)] = "GUILDS"),
        n);
let o = 20,
    D = "channelPermissionSettingsAdvancedModeOn";
function u(t, e, i) {
    let n = t.type;
    return {
        [T.xBc.VIEW_CHANNEL.toString()]: {
            title: n === T.rbe.GUILD_CATEGORY ? s.intl.string(s.t.uV83yi) : s.intl.string(s.t["W/A4Qp"]),
            description: (() => {
                if (e)
                    switch (n) {
                        case T.rbe.GUILD_CATEGORY:
                            return s.t["o/vBzj"];
                        case T.rbe.GUILD_VOICE:
                        case T.rbe.GUILD_STAGE_VOICE:
                            return s.t.ejL1Wo;
                        default:
                            return s.t["3jG0Bo"];
                    }
                return n === T.rbe.GUILD_CATEGORY ? s.t.SzosGs : s.t.M2iEy3;
            })(),
            flag: T.xBc.VIEW_CHANNEL,
        },
        [T.xBc.MANAGE_CHANNELS.toString()]: {
            title: n === T.rbe.GUILD_CATEGORY ? s.intl.string(s.t["9qLtWs"]) : s.intl.string(s.t.nAw15L),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t.KJ2JnG;
                    case T.rbe.GUILD_VOICE:
                        return s.t["+gl2ne"];
                    case T.rbe.GUILD_STAGE_VOICE:
                        return s.t.SDX669;
                    default:
                        return s.t.ydL28i;
                }
            })(),
            flag: T.xBc.MANAGE_CHANNELS,
        },
        [T.xBc.MANAGE_ROLES.toString()]: {
            title: s.intl.string(s.t.ICb6am),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t.TyyCMD;
                    case T.rbe.GUILD_STAGE_VOICE:
                        return s.t.hcw4mx;
                    default:
                        return s.t.hOMXOv;
                }
            })(),
            flag: T.xBc.MANAGE_ROLES,
        },
        [T.xBc.MANAGE_WEBHOOKS.toString()]: {
            title: s.intl.string(s.t["/ADKmM"]),
            description: n === T.rbe.GUILD_CATEGORY ? s.t["K5+ZZ7"] : s.t.CYBZry,
            flag: T.xBc.MANAGE_WEBHOOKS,
        },
        [T.xBc.CREATE_INSTANT_INVITE.toString()]: {
            title: s.intl.string(s.t.zJrgTG),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t["3YFAAX"];
                    case T.rbe.GUILD_VOICE:
                    case T.rbe.GUILD_STAGE_VOICE:
                        return s.t.lUCs1n;
                    default:
                        return s.t.q4g2aI;
                }
            })(),
            flag: T.xBc.CREATE_INSTANT_INVITE,
        },
        [T.xBc.SEND_MESSAGES.toString()]: {
            title: T.kvI.GUILD_THREADS_ONLY.has(n)
                ? s.intl.string(s.t.nJwAHX)
                : n === T.rbe.GUILD_CATEGORY
                  ? s.intl.string(s.t.S1VOwd)
                  : s.intl.string(s.t.T32rkC),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t.IjeLuu;
                    case T.rbe.GUILD_FORUM:
                        return i?.createPostsDisabled && !t.isMediaChannel()
                            ? s.intl.format(s.t.zlXUVY, { warningHook: a })
                            : s.t.LG9VAi;
                    case T.rbe.GUILD_MEDIA:
                        return s.t.LG9VAi;
                    case T.rbe.GUILD_ANNOUNCEMENT:
                        return s.intl.format(s.t.WFwfSD, {
                            articleURL: S.A.getArticleURL(T.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    case T.rbe.GUILD_VOICE:
                        return i?.sendMessagesDisabled
                            ? s.intl.format(s.t.Q1rwpr, { warningHook: _ })
                            : s.intl.string(s.t.WQ6zpT);
                    default:
                        return s.t.WQ6zpT;
                }
            })(),
            flag: T.xBc.SEND_MESSAGES,
        },
        [T.xBc.EMBED_LINKS.toString()]: {
            title: s.intl.string(s.t["969dEL"]),
            description: n === T.rbe.GUILD_CATEGORY ? s.t["7zlUay"] : s.t.XFFhA0,
            flag: T.xBc.EMBED_LINKS,
        },
        [T.xBc.ATTACH_FILES.toString()]: {
            title: s.intl.string(s.t["3AS4UM"]),
            description: n === T.rbe.GUILD_CATEGORY ? s.t.XREf9l : s.t.WK9r7F,
            flag: T.xBc.ATTACH_FILES,
        },
        [T.xBc.ADD_REACTIONS.toString()]: {
            title: s.intl.string(s.t.yEoJAr),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t.pZT2Zh;
                    case T.rbe.GUILD_VOICE:
                        return s.t.xSSbIs;
                    default:
                        return s.t.PVjR1Y;
                }
            })(),
            flag: T.xBc.ADD_REACTIONS,
        },
        [T.xBc.USE_EXTERNAL_EMOJIS.toString()]: {
            title: s.intl.string(s.t["+bxf3H"]),
            description: n === T.rbe.GUILD_CATEGORY ? s.t.mWAbK4 : s.t.Qc5vOr,
            flag: T.xBc.USE_EXTERNAL_EMOJIS,
        },
        [T.xBc.USE_EXTERNAL_STICKERS.toString()]: {
            title: s.intl.string(s.t.ERNhYf),
            description: n === T.rbe.GUILD_CATEGORY ? s.t["39whJ4"] : s.t.VF4fZZ,
            flag: T.xBc.USE_EXTERNAL_STICKERS,
        },
        [T.xBc.MENTION_EVERYONE.toString()]: {
            title: n === T.rbe.GUILD_STAGE_VOICE ? s.intl.string(s.t.VDUAHO) : s.intl.string(s.t.Y78KGC),
            description:
                n === T.rbe.GUILD_CATEGORY ? s.t["HOhg/B"] : n === T.rbe.GUILD_STAGE_VOICE ? s.t.rZn1oO : s.t["6IUSdt"],
            flag: T.xBc.MENTION_EVERYONE,
        },
        [T.xBc.MANAGE_MESSAGES.toString()]: {
            title: s.intl.string(s.t["6lU9xM"]),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t["5R9nYh"];
                    case T.rbe.GUILD_ANNOUNCEMENT:
                        return s.intl.format(s.t.XRxOo0, {
                            articleURL: S.A.getArticleURL(T.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    default:
                        return s.t["SeA+G9"];
                }
            })(),
            flag: T.xBc.MANAGE_MESSAGES,
        },
        [T.xBc.PIN_MESSAGES.toString()]: {
            title: s.intl.string(s.t.Y5BI39),
            description: n === T.rbe.GUILD_CATEGORY ? s.t.gmbD87 : s.t["0l2EjL"],
            flag: T.xBc.PIN_MESSAGES,
        },
        [T.xBc.BYPASS_SLOWMODE.toString()]: {
            title: s.intl.string(s.t.kqcjeV),
            description: n === T.rbe.GUILD_CATEGORY ? s.t.C4t1Xu : s.t.Ha1xbw,
            flag: T.xBc.BYPASS_SLOWMODE,
        },
        [T.xBc.MANAGE_OFFICIAL_MESSAGES.toString()]: {
            title: s.intl.string(s.t.Aj9ruN),
            description: n === T.rbe.GUILD_CATEGORY ? s.t["Pf0e/Q"] : s.t.qEbw4W,
            flag: T.xBc.MANAGE_OFFICIAL_MESSAGES,
        },
        [T.xBc.READ_MESSAGE_HISTORY.toString()]: {
            title: T.kvI.GUILD_THREADS_ONLY.has(n) ? s.intl.string(s.t["0RQwtn"]) : s.intl.string(s.t.l9ufaR),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t["cJRv/g"];
                    case T.rbe.GUILD_VOICE:
                        return i?.readMessageHistoryDisabled
                            ? s.intl.format(s.t.Rx4pbJ, { warningHook: _ })
                            : s.intl.string(s.t.cuMfH0);
                    case T.rbe.GUILD_FORUM:
                    case T.rbe.GUILD_MEDIA:
                        return s.t.RqCc7i;
                    default:
                        return s.t.cuMfH0;
                }
            })(),
            flag: T.xBc.READ_MESSAGE_HISTORY,
        },
        [T.xBc.SEND_TTS_MESSAGES.toString()]: {
            title: s.intl.string(s.t.mMbwh7),
            description: n === T.rbe.GUILD_CATEGORY ? s.t.b7pc9U : s.t.CpakGz,
            flag: T.xBc.SEND_TTS_MESSAGES,
        },
        [T.xBc.USE_APPLICATION_COMMANDS.toString()]: {
            title: s.intl.string(s.t.nkoPOt),
            description: n === T.rbe.GUILD_CATEGORY ? s.t["D+qW0J"] : s.t.ReG3gG,
            flag: T.xBc.USE_APPLICATION_COMMANDS,
        },
        [T.xBc.SEND_VOICE_MESSAGES.toString()]: {
            title: s.intl.string(s.t.WlWSBT),
            description: n === T.rbe.GUILD_CATEGORY ? s.t.gavGfv : s.t.BhEo9V,
            flag: T.xBc.SEND_VOICE_MESSAGES,
        },
        [T.xBc.SEND_POLLS.toString()]: {
            title: s.intl.string(s.t.UMQ7Ww),
            description: n === T.rbe.GUILD_CATEGORY ? s.t["18Ya7L"] : s.t.ckKKIO,
            flag: T.xBc.SEND_POLLS,
        },
        [T.xBc.CONNECT.toString()]: {
            title: s.intl.string(s.t.S0W8Z5),
            description: (() => {
                if (e)
                    switch (n) {
                        case T.rbe.GUILD_CATEGORY:
                            return s.t.XcrieN;
                        case T.rbe.GUILD_STAGE_VOICE:
                            return s.t.SOFNhP;
                        case T.rbe.GUILD_TEXT:
                        case T.rbe.GUILD_FORUM:
                        case T.rbe.GUILD_MEDIA:
                            return s.t.LsS8xT;
                        default:
                            return s.t.j4AyO8;
                    }
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t.stA0Hl;
                    case T.rbe.GUILD_STAGE_VOICE:
                        return s.t["G9+Qie"];
                    case T.rbe.GUILD_TEXT:
                    case T.rbe.GUILD_FORUM:
                    case T.rbe.GUILD_MEDIA:
                        return s.t["QU/Rw8"];
                    default:
                        return s.t.HvG8uR;
                }
            })(),
            flag: T.xBc.CONNECT,
        },
        [T.xBc.SPEAK.toString()]: {
            title: s.intl.string(s.t["8w1tIR"]),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t.iXhS6R;
                    case T.rbe.GUILD_STAGE_VOICE:
                        return s.t.a8n741;
                    case T.rbe.GUILD_TEXT:
                    case T.rbe.GUILD_FORUM:
                    case T.rbe.GUILD_MEDIA:
                        return s.t["+VXsJI"];
                    default:
                        return s.t["568E6d"];
                }
            })(),
            flag: T.xBc.SPEAK,
        },
        [T.xBc.STREAM.toString()]: {
            title: s.intl.string(s.t.FlNoSV),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t["ryG0/J"];
                    case T.rbe.GUILD_TEXT:
                    case T.rbe.GUILD_FORUM:
                    case T.rbe.GUILD_MEDIA:
                        return s.t.AuEQEC;
                    case T.rbe.GUILD_STAGE_VOICE:
                        return s.t.swJcN6;
                    default:
                        return s.t.RY8rIc;
                }
            })(),
            flag: T.xBc.STREAM,
        },
        [T.xBc.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: s.intl.string(s.t.rLSGeh),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t.maNzCO;
                    case T.rbe.GUILD_FORUM:
                    case T.rbe.GUILD_MEDIA:
                        return s.t.RyEwla;
                    default:
                        return s.t.qinvMU;
                }
            })(),
            flag: T.xBc.USE_EMBEDDED_ACTIVITIES,
        },
        [T.xBc.USE_EXTERNAL_APPS.toString()]: {
            title: s.intl.string(s.t["3TzAk0"]),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t.bgIY3H;
                    case T.rbe.GUILD_FORUM:
                    case T.rbe.GUILD_MEDIA:
                        return s.t.qPUPip;
                    default:
                        return s.t.czqMLp;
                }
            })(),
            flag: T.xBc.USE_EXTERNAL_APPS,
        },
        [T.xBc.USE_SOUNDBOARD.toString()]: {
            title: s.intl.string(s.t.Bco7NG),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.intl.format(s.t["0kBp/0"], { helpCenterArticle: S.A.getArticleURL(T.MVz.SOUNDBOARD) });
                    case T.rbe.GUILD_TEXT:
                    case T.rbe.GUILD_FORUM:
                    case T.rbe.GUILD_MEDIA:
                        return s.intl.format(s.t["6eYqU1"], { helpCenterArticle: S.A.getArticleURL(T.MVz.SOUNDBOARD) });
                    default:
                        return s.intl.format(s.t.GEi6Ym, { helpCenterArticle: S.A.getArticleURL(T.MVz.SOUNDBOARD) });
                }
            })(),
            flag: T.xBc.USE_SOUNDBOARD,
        },
        [T.xBc.USE_EXTERNAL_SOUNDS.toString()]: {
            title: s.intl.string(s.t.pwaVJ6),
            description: s.t.qDpPtX,
            flag: T.xBc.USE_EXTERNAL_SOUNDS,
        },
        [T.xBc.USE_VAD.toString()]: {
            title: s.intl.string(s.t["08zAV7"]),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t.fUYPly;
                    case T.rbe.GUILD_STAGE_VOICE:
                        return s.t.BJKqsW;
                    case T.rbe.GUILD_TEXT:
                    case T.rbe.GUILD_FORUM:
                    case T.rbe.GUILD_MEDIA:
                        return s.t["3GJwsc"];
                    default:
                        return s.t.s2eihY;
                }
            })(),
            flag: T.xBc.USE_VAD,
        },
        [T.xBc.PRIORITY_SPEAKER.toString()]: {
            title: s.intl.string(s.t.BVK71i),
            description: (() => {
                let t = {
                    keybind: s.intl.string(s.t.DkSwJ2),
                    onClick: () => {
                        {
                            let { openUserSettings: t } = r(766075);
                            t(A.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY);
                        }
                    },
                };
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.intl.format(s.t["8nIfDP"], t);
                    case T.rbe.GUILD_TEXT:
                    case T.rbe.GUILD_FORUM:
                    case T.rbe.GUILD_MEDIA:
                        return s.intl.format(s.t["0t6uSv"], t);
                    default:
                        return s.intl.format(s.t.UvB2KP, t);
                }
            })(),
            flag: T.xBc.PRIORITY_SPEAKER,
        },
        [T.xBc.MUTE_MEMBERS.toString()]: {
            title: s.intl.string(s.t["8EI30/"]),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t.bcuobK;
                    case T.rbe.GUILD_STAGE_VOICE:
                        return s.t.EbvdH9;
                    case T.rbe.GUILD_TEXT:
                    case T.rbe.GUILD_FORUM:
                    case T.rbe.GUILD_MEDIA:
                        return s.t.KYDG2K;
                    default:
                        return s.t.LW5C9P;
                }
            })(),
            flag: T.xBc.MUTE_MEMBERS,
        },
        [T.xBc.DEAFEN_MEMBERS.toString()]: {
            title: s.intl.string(s.t["9L47Fr"]),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t.amZ5vn;
                    case T.rbe.GUILD_TEXT:
                    case T.rbe.GUILD_FORUM:
                    case T.rbe.GUILD_MEDIA:
                        return s.t["d+i1nX"];
                    default:
                        return s.t.UAdIxo;
                }
            })(),
            flag: T.xBc.DEAFEN_MEMBERS,
        },
        [T.xBc.MOVE_MEMBERS.toString()]: {
            title: s.intl.string(s.t.YtjJPQ),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t.XmoyRD;
                    case T.rbe.GUILD_STAGE_VOICE:
                        return s.t.bizKz6;
                    case T.rbe.GUILD_TEXT:
                    case T.rbe.GUILD_FORUM:
                    case T.rbe.GUILD_MEDIA:
                        return s.t.cbdQy2;
                    default:
                        return s.t.nSD1ah;
                }
            })(),
            flag: T.xBc.MOVE_MEMBERS,
        },
        [T.xBc.REQUEST_TO_SPEAK.toString()]: {
            title: s.intl.string(s.t["5kicT2"]),
            description: n === T.rbe.GUILD_CATEGORY ? s.t.T1lMSl : s.t.uzlYFE,
            flag: T.xBc.REQUEST_TO_SPEAK,
        },
        [T.xBc.MANAGE_THREADS.toString()]: {
            title: T.kvI.GUILD_THREADS_ONLY.has(n)
                ? s.intl.string(s.t.ossiZD)
                : n === T.rbe.GUILD_CATEGORY
                  ? s.intl.string(s.t.QKe7Q3)
                  : s.intl.string(s.t.kEqgr7),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t.S31soU;
                    case T.rbe.GUILD_FORUM:
                    case T.rbe.GUILD_MEDIA:
                        return s.t["XLi/jG"];
                    default:
                        return s.t.yvan0j;
                }
            })(),
            flag: T.xBc.MANAGE_THREADS,
        },
        [T.xBc.CREATE_PUBLIC_THREADS.toString()]: {
            title: s.intl.string(s.t["25rKnX"]),
            description: n === T.rbe.GUILD_CATEGORY ? s.t["+M1yLj"] : s.t["5SDtGB"],
            flag: T.xBc.CREATE_PUBLIC_THREADS,
        },
        [T.xBc.CREATE_PRIVATE_THREADS.toString()]: {
            title: s.intl.string(s.t.QwbTSa),
            description: n === T.rbe.GUILD_CATEGORY ? s.t["hBS/zn"] : s.t.Chg2zd,
            flag: T.xBc.CREATE_PRIVATE_THREADS,
        },
        [T.xBc.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: T.kvI.GUILD_THREADS_ONLY.has(n)
                ? s.intl.string(s.t.fqhqWm)
                : n === T.rbe.GUILD_CATEGORY
                  ? s.intl.string(s.t["5QlVGy"])
                  : s.intl.string(s.t.fTE74g),
            description: (() => {
                switch (n) {
                    case T.rbe.GUILD_CATEGORY:
                        return s.t.DlIVcN;
                    case T.rbe.GUILD_FORUM:
                    case T.rbe.GUILD_MEDIA:
                        return s.t.XTnrPH;
                    default:
                        return s.t.xHO6Me;
                }
            })(),
            flag: T.xBc.SEND_MESSAGES_IN_THREADS,
        },
        [T.xBc.MANAGE_EVENTS.toString()]: {
            title: s.intl.string(s.t.HIgA5a),
            description: n === T.rbe.GUILD_CATEGORY ? s.t.CP2sz4 : s.t["4pO/TY"],
            flag: T.xBc.MANAGE_EVENTS,
        },
        [T.xBc.CREATE_EVENTS.toString()]: {
            title: s.intl.string(s.t.qyjZua),
            description: n === T.rbe.GUILD_CATEGORY ? s.t.XpibmC : s.t.sPoBLa,
            flag: T.xBc.CREATE_EVENTS,
        },
        [T.xBc.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: s.intl.string(s.t.VBwkUf),
            description: i?.enableHangoutWindow ? s.t.CYcJ6H : s.t.C6BzXx,
            flag: T.xBc.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
