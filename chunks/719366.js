r.d(e, { T6: () => G, oO: () => T, $N: () => D, mW: () => U, t0: () => o });
var i,
    n,
    E = r(627968);
r(64700);
var c = r(834730),
    l = r(695366),
    s = r(985018);
let _ = (t, e) =>
        (0, E.jsxs)(
            c.E,
            {
                color: "text-feedback-critical",
                style: { display: "flex", gap: "4px", margin: "8px 0 4px 0", alignItems: "center" },
                variant: "text-sm/normal",
                children: [(0, E.jsx)(l.E, { size: "custom", color: "currentColor", width: 14, height: 14 }), t],
            },
            e,
        ),
    a = (t, e) =>
        (0, E.jsxs)(
            c.E,
            {
                color: "text-feedback-critical",
                style: { display: "flex", gap: "4px", margin: "8px 0 4px 0", alignItems: "center" },
                variant: "text-sm/normal",
                children: [(0, E.jsx)(l.E, { size: "custom", color: "currentColor", width: 14, height: 14 }), t],
            },
            e,
        );
var A = r(780964),
    S = r(975571),
    I = r(652215),
    G =
        (((i = {})[(i.EMPTY_STATE = 0)] = "EMPTY_STATE"),
        (i[(i.ADMINISTRATOR = 1)] = "ADMINISTRATOR"),
        (i[(i.ROLE = 2)] = "ROLE"),
        (i[(i.OWNER = 3)] = "OWNER"),
        (i[(i.MEMBER = 4)] = "MEMBER"),
        (i[(i.USER = 5)] = "USER"),
        (i[(i.GUILD = 6)] = "GUILD"),
        i),
    T =
        (((n = {})[(n.ROLES = 0)] = "ROLES"),
        (n[(n.MEMBERS = 1)] = "MEMBERS"),
        (n[(n.USERS = 2)] = "USERS"),
        (n[(n.GUILDS = 3)] = "GUILDS"),
        n);
let D = 20,
    o = "channelPermissionSettingsAdvancedModeOn";
function U(t, e, i) {
    let n = t.type;
    return {
        [I.xBc.VIEW_CHANNEL.toString()]: {
            title: n === I.rbe.GUILD_CATEGORY ? s.intl.string(s.t.uV83yi) : s.intl.string(s.t["W/A4Qp"]),
            description: (() => {
                if (e)
                    switch (n) {
                        case I.rbe.GUILD_CATEGORY:
                            return s.t["o/vBzj"];
                        case I.rbe.GUILD_VOICE:
                        case I.rbe.GUILD_STAGE_VOICE:
                            return s.t.ejL1Wo;
                        default:
                            return s.t["3jG0Bo"];
                    }
                return n === I.rbe.GUILD_CATEGORY ? s.t.SzosGs : s.t.M2iEy3;
            })(),
            flag: I.xBc.VIEW_CHANNEL,
        },
        [I.xBc.MANAGE_CHANNELS.toString()]: {
            title: n === I.rbe.GUILD_CATEGORY ? s.intl.string(s.t["9qLtWs"]) : s.intl.string(s.t.nAw15L),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t.KJ2JnG;
                    case I.rbe.GUILD_VOICE:
                        return s.t["+gl2ne"];
                    case I.rbe.GUILD_STAGE_VOICE:
                        return s.t.SDX669;
                    default:
                        return s.t.ydL28i;
                }
            })(),
            flag: I.xBc.MANAGE_CHANNELS,
        },
        [I.xBc.MANAGE_ROLES.toString()]: {
            title: s.intl.string(s.t.ICb6am),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t.TyyCMD;
                    case I.rbe.GUILD_STAGE_VOICE:
                        return s.t.hcw4mx;
                    default:
                        return s.t.hOMXOv;
                }
            })(),
            flag: I.xBc.MANAGE_ROLES,
        },
        [I.xBc.MANAGE_WEBHOOKS.toString()]: {
            title: s.intl.string(s.t["/ADKmM"]),
            description: n === I.rbe.GUILD_CATEGORY ? s.t["K5+ZZ7"] : s.t.CYBZry,
            flag: I.xBc.MANAGE_WEBHOOKS,
        },
        [I.xBc.CREATE_INSTANT_INVITE.toString()]: {
            title: s.intl.string(s.t.zJrgTG),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t["3YFAAX"];
                    case I.rbe.GUILD_VOICE:
                    case I.rbe.GUILD_STAGE_VOICE:
                        return s.t.lUCs1n;
                    default:
                        return s.t.q4g2aI;
                }
            })(),
            flag: I.xBc.CREATE_INSTANT_INVITE,
        },
        [I.xBc.SEND_MESSAGES.toString()]: {
            title: I.kvI.GUILD_THREADS_ONLY.has(n)
                ? s.intl.string(s.t.nJwAHX)
                : n === I.rbe.GUILD_CATEGORY
                  ? s.intl.string(s.t.S1VOwd)
                  : s.intl.string(s.t.T32rkC),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t.IjeLuu;
                    case I.rbe.GUILD_FORUM:
                        return i?.createPostsDisabled && !t.isMediaChannel()
                            ? s.intl.format(s.t.zlXUVY, { warningHook: _ })
                            : s.t.LG9VAi;
                    case I.rbe.GUILD_MEDIA:
                        return s.t.LG9VAi;
                    case I.rbe.GUILD_ANNOUNCEMENT:
                        return s.intl.format(s.t.WFwfSD, {
                            articleURL: S.A.getArticleURL(I.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    case I.rbe.GUILD_VOICE:
                        return i?.sendMessagesDisabled
                            ? s.intl.format(s.t.Q1rwpr, { warningHook: a })
                            : s.intl.string(s.t.WQ6zpT);
                    default:
                        return s.t.WQ6zpT;
                }
            })(),
            flag: I.xBc.SEND_MESSAGES,
        },
        [I.xBc.EMBED_LINKS.toString()]: {
            title: s.intl.string(s.t["969dEL"]),
            description: n === I.rbe.GUILD_CATEGORY ? s.t["7zlUay"] : s.t.XFFhA0,
            flag: I.xBc.EMBED_LINKS,
        },
        [I.xBc.ATTACH_FILES.toString()]: {
            title: s.intl.string(s.t["3AS4UM"]),
            description: n === I.rbe.GUILD_CATEGORY ? s.t.XREf9l : s.t.WK9r7F,
            flag: I.xBc.ATTACH_FILES,
        },
        [I.xBc.ADD_REACTIONS.toString()]: {
            title: s.intl.string(s.t.yEoJAr),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t.pZT2Zh;
                    case I.rbe.GUILD_VOICE:
                        return s.t.xSSbIs;
                    default:
                        return s.t.PVjR1Y;
                }
            })(),
            flag: I.xBc.ADD_REACTIONS,
        },
        [I.xBc.USE_EXTERNAL_EMOJIS.toString()]: {
            title: s.intl.string(s.t["+bxf3H"]),
            description: n === I.rbe.GUILD_CATEGORY ? s.t.mWAbK4 : s.t.Qc5vOr,
            flag: I.xBc.USE_EXTERNAL_EMOJIS,
        },
        [I.xBc.USE_EXTERNAL_STICKERS.toString()]: {
            title: s.intl.string(s.t.ERNhYf),
            description: n === I.rbe.GUILD_CATEGORY ? s.t["39whJ4"] : s.t.VF4fZZ,
            flag: I.xBc.USE_EXTERNAL_STICKERS,
        },
        [I.xBc.MENTION_EVERYONE.toString()]: {
            title: n === I.rbe.GUILD_STAGE_VOICE ? s.intl.string(s.t.VDUAHO) : s.intl.string(s.t.Y78KGC),
            description:
                n === I.rbe.GUILD_CATEGORY ? s.t["HOhg/B"] : n === I.rbe.GUILD_STAGE_VOICE ? s.t.rZn1oO : s.t["6IUSdt"],
            flag: I.xBc.MENTION_EVERYONE,
        },
        [I.xBc.MANAGE_MESSAGES.toString()]: {
            title: s.intl.string(s.t["6lU9xM"]),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t["5R9nYh"];
                    case I.rbe.GUILD_ANNOUNCEMENT:
                        return s.intl.format(s.t.XRxOo0, {
                            articleURL: S.A.getArticleURL(I.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    default:
                        return s.t["SeA+G9"];
                }
            })(),
            flag: I.xBc.MANAGE_MESSAGES,
        },
        [I.xBc.PIN_MESSAGES.toString()]: {
            title: s.intl.string(s.t.Y5BI39),
            description: n === I.rbe.GUILD_CATEGORY ? s.t.gmbD87 : s.t["0l2EjL"],
            flag: I.xBc.PIN_MESSAGES,
        },
        [I.xBc.BYPASS_SLOWMODE.toString()]: {
            title: s.intl.string(s.t.kqcjeV),
            description: n === I.rbe.GUILD_CATEGORY ? s.t.C4t1Xu : s.t.Ha1xbw,
            flag: I.xBc.BYPASS_SLOWMODE,
        },
        [I.xBc.MANAGE_OFFICIAL_MESSAGES.toString()]: {
            title: s.intl.string(s.t.Aj9ruN),
            description: n === I.rbe.GUILD_CATEGORY ? s.t["Pf0e/Q"] : s.t.qEbw4W,
            flag: I.xBc.MANAGE_OFFICIAL_MESSAGES,
        },
        [I.xBc.READ_MESSAGE_HISTORY.toString()]: {
            title: I.kvI.GUILD_THREADS_ONLY.has(n) ? s.intl.string(s.t["0RQwtn"]) : s.intl.string(s.t.l9ufaR),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t["cJRv/g"];
                    case I.rbe.GUILD_VOICE:
                        return i?.readMessageHistoryDisabled
                            ? s.intl.format(s.t.Rx4pbJ, { warningHook: a })
                            : s.intl.string(s.t.cuMfH0);
                    case I.rbe.GUILD_FORUM:
                    case I.rbe.GUILD_MEDIA:
                        return s.t.RqCc7i;
                    default:
                        return s.t.cuMfH0;
                }
            })(),
            flag: I.xBc.READ_MESSAGE_HISTORY,
        },
        [I.xBc.SEND_TTS_MESSAGES.toString()]: {
            title: s.intl.string(s.t.mMbwh7),
            description: n === I.rbe.GUILD_CATEGORY ? s.t.b7pc9U : s.t.CpakGz,
            flag: I.xBc.SEND_TTS_MESSAGES,
        },
        [I.xBc.USE_APPLICATION_COMMANDS.toString()]: {
            title: s.intl.string(s.t.nkoPOt),
            description: n === I.rbe.GUILD_CATEGORY ? s.t["D+qW0J"] : s.t.ReG3gG,
            flag: I.xBc.USE_APPLICATION_COMMANDS,
        },
        [I.xBc.SEND_VOICE_MESSAGES.toString()]: {
            title: s.intl.string(s.t.WlWSBT),
            description: n === I.rbe.GUILD_CATEGORY ? s.t.gavGfv : s.t.BhEo9V,
            flag: I.xBc.SEND_VOICE_MESSAGES,
        },
        [I.xBc.SEND_POLLS.toString()]: {
            title: s.intl.string(s.t.UMQ7Ww),
            description: n === I.rbe.GUILD_CATEGORY ? s.t["18Ya7L"] : s.t.ckKKIO,
            flag: I.xBc.SEND_POLLS,
        },
        [I.xBc.CONNECT.toString()]: {
            title: s.intl.string(s.t.S0W8Z5),
            description: (() => {
                if (e)
                    switch (n) {
                        case I.rbe.GUILD_CATEGORY:
                            return s.t.XcrieN;
                        case I.rbe.GUILD_STAGE_VOICE:
                            return s.t.SOFNhP;
                        case I.rbe.GUILD_TEXT:
                        case I.rbe.GUILD_FORUM:
                        case I.rbe.GUILD_MEDIA:
                            return s.t.LsS8xT;
                        default:
                            return s.t.j4AyO8;
                    }
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t.stA0Hl;
                    case I.rbe.GUILD_STAGE_VOICE:
                        return s.t["G9+Qie"];
                    case I.rbe.GUILD_TEXT:
                    case I.rbe.GUILD_FORUM:
                    case I.rbe.GUILD_MEDIA:
                        return s.t["QU/Rw8"];
                    default:
                        return s.t.HvG8uR;
                }
            })(),
            flag: I.xBc.CONNECT,
        },
        [I.xBc.SPEAK.toString()]: {
            title: s.intl.string(s.t["8w1tIR"]),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t.iXhS6R;
                    case I.rbe.GUILD_STAGE_VOICE:
                        return s.t.a8n741;
                    case I.rbe.GUILD_TEXT:
                    case I.rbe.GUILD_FORUM:
                    case I.rbe.GUILD_MEDIA:
                        return s.t["+VXsJI"];
                    default:
                        return s.t["568E6d"];
                }
            })(),
            flag: I.xBc.SPEAK,
        },
        [I.xBc.STREAM.toString()]: {
            title: s.intl.string(s.t.FlNoSV),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t["ryG0/J"];
                    case I.rbe.GUILD_TEXT:
                    case I.rbe.GUILD_FORUM:
                    case I.rbe.GUILD_MEDIA:
                        return s.t.AuEQEC;
                    case I.rbe.GUILD_STAGE_VOICE:
                        return s.t.swJcN6;
                    default:
                        return s.t.RY8rIc;
                }
            })(),
            flag: I.xBc.STREAM,
        },
        [I.xBc.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: s.intl.string(s.t.rLSGeh),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t.maNzCO;
                    case I.rbe.GUILD_FORUM:
                    case I.rbe.GUILD_MEDIA:
                        return s.t.RyEwla;
                    default:
                        return s.t.qinvMU;
                }
            })(),
            flag: I.xBc.USE_EMBEDDED_ACTIVITIES,
        },
        [I.xBc.USE_EXTERNAL_APPS.toString()]: {
            title: s.intl.string(s.t["3TzAk0"]),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t.bgIY3H;
                    case I.rbe.GUILD_FORUM:
                    case I.rbe.GUILD_MEDIA:
                        return s.t.qPUPip;
                    default:
                        return s.t.czqMLp;
                }
            })(),
            flag: I.xBc.USE_EXTERNAL_APPS,
        },
        [I.xBc.USE_SOUNDBOARD.toString()]: {
            title: s.intl.string(s.t.Bco7NG),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.intl.format(s.t["0kBp/0"], { helpCenterArticle: S.A.getArticleURL(I.MVz.SOUNDBOARD) });
                    case I.rbe.GUILD_TEXT:
                    case I.rbe.GUILD_FORUM:
                    case I.rbe.GUILD_MEDIA:
                        return s.intl.format(s.t["6eYqU1"], { helpCenterArticle: S.A.getArticleURL(I.MVz.SOUNDBOARD) });
                    default:
                        return s.intl.format(s.t.GEi6Ym, { helpCenterArticle: S.A.getArticleURL(I.MVz.SOUNDBOARD) });
                }
            })(),
            flag: I.xBc.USE_SOUNDBOARD,
        },
        [I.xBc.USE_EXTERNAL_SOUNDS.toString()]: {
            title: s.intl.string(s.t.pwaVJ6),
            description: s.t.qDpPtX,
            flag: I.xBc.USE_EXTERNAL_SOUNDS,
        },
        [I.xBc.USE_VAD.toString()]: {
            title: s.intl.string(s.t["08zAV7"]),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t.fUYPly;
                    case I.rbe.GUILD_STAGE_VOICE:
                        return s.t.BJKqsW;
                    case I.rbe.GUILD_TEXT:
                    case I.rbe.GUILD_FORUM:
                    case I.rbe.GUILD_MEDIA:
                        return s.t["3GJwsc"];
                    default:
                        return s.t.s2eihY;
                }
            })(),
            flag: I.xBc.USE_VAD,
        },
        [I.xBc.PRIORITY_SPEAKER.toString()]: {
            title: s.intl.string(s.t.BVK71i),
            description: (() => {
                let t = {
                    keybind: s.intl.string(s.t.DkSwJ2),
                    onClick: () => {
                        {
                            let { openUserSettings: t } = r(858897);
                            t(A.X.KEYBINDS_PANEL);
                        }
                    },
                };
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.intl.format(s.t["8nIfDP"], t);
                    case I.rbe.GUILD_TEXT:
                    case I.rbe.GUILD_FORUM:
                    case I.rbe.GUILD_MEDIA:
                        return s.intl.format(s.t["0t6uSv"], t);
                    default:
                        return s.intl.format(s.t.UvB2KP, t);
                }
            })(),
            flag: I.xBc.PRIORITY_SPEAKER,
        },
        [I.xBc.MUTE_MEMBERS.toString()]: {
            title: s.intl.string(s.t["8EI30/"]),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t.bcuobK;
                    case I.rbe.GUILD_STAGE_VOICE:
                        return s.t.EbvdH9;
                    case I.rbe.GUILD_TEXT:
                    case I.rbe.GUILD_FORUM:
                    case I.rbe.GUILD_MEDIA:
                        return s.t.KYDG2K;
                    default:
                        return s.t.LW5C9P;
                }
            })(),
            flag: I.xBc.MUTE_MEMBERS,
        },
        [I.xBc.DEAFEN_MEMBERS.toString()]: {
            title: s.intl.string(s.t["9L47Fr"]),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t.amZ5vn;
                    case I.rbe.GUILD_TEXT:
                    case I.rbe.GUILD_FORUM:
                    case I.rbe.GUILD_MEDIA:
                        return s.t["d+i1nX"];
                    default:
                        return s.t.UAdIxo;
                }
            })(),
            flag: I.xBc.DEAFEN_MEMBERS,
        },
        [I.xBc.MOVE_MEMBERS.toString()]: {
            title: s.intl.string(s.t.YtjJPQ),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t.XmoyRD;
                    case I.rbe.GUILD_STAGE_VOICE:
                        return s.t.bizKz6;
                    case I.rbe.GUILD_TEXT:
                    case I.rbe.GUILD_FORUM:
                    case I.rbe.GUILD_MEDIA:
                        return s.t.cbdQy2;
                    default:
                        return s.t.nSD1ah;
                }
            })(),
            flag: I.xBc.MOVE_MEMBERS,
        },
        [I.xBc.REQUEST_TO_SPEAK.toString()]: {
            title: s.intl.string(s.t["5kicT2"]),
            description: n === I.rbe.GUILD_CATEGORY ? s.t.T1lMSl : s.t.uzlYFE,
            flag: I.xBc.REQUEST_TO_SPEAK,
        },
        [I.xBc.MANAGE_THREADS.toString()]: {
            title: I.kvI.GUILD_THREADS_ONLY.has(n)
                ? s.intl.string(s.t.ossiZD)
                : n === I.rbe.GUILD_CATEGORY
                  ? s.intl.string(s.t.QKe7Q3)
                  : s.intl.string(s.t.kEqgr7),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t.S31soU;
                    case I.rbe.GUILD_FORUM:
                    case I.rbe.GUILD_MEDIA:
                        return s.t["XLi/jG"];
                    default:
                        return s.t.yvan0j;
                }
            })(),
            flag: I.xBc.MANAGE_THREADS,
        },
        [I.xBc.CREATE_PUBLIC_THREADS.toString()]: {
            title: s.intl.string(s.t["25rKnX"]),
            description: n === I.rbe.GUILD_CATEGORY ? s.t["+M1yLj"] : s.t["5SDtGB"],
            flag: I.xBc.CREATE_PUBLIC_THREADS,
        },
        [I.xBc.CREATE_PRIVATE_THREADS.toString()]: {
            title: s.intl.string(s.t.QwbTSa),
            description: n === I.rbe.GUILD_CATEGORY ? s.t["hBS/zn"] : s.t.Chg2zd,
            flag: I.xBc.CREATE_PRIVATE_THREADS,
        },
        [I.xBc.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: I.kvI.GUILD_THREADS_ONLY.has(n)
                ? s.intl.string(s.t.fqhqWm)
                : n === I.rbe.GUILD_CATEGORY
                  ? s.intl.string(s.t["5QlVGy"])
                  : s.intl.string(s.t.fTE74g),
            description: (() => {
                switch (n) {
                    case I.rbe.GUILD_CATEGORY:
                        return s.t.DlIVcN;
                    case I.rbe.GUILD_FORUM:
                    case I.rbe.GUILD_MEDIA:
                        return s.t.XTnrPH;
                    default:
                        return s.t.xHO6Me;
                }
            })(),
            flag: I.xBc.SEND_MESSAGES_IN_THREADS,
        },
        [I.xBc.MANAGE_EVENTS.toString()]: {
            title: s.intl.string(s.t.HIgA5a),
            description: n === I.rbe.GUILD_CATEGORY ? s.t.CP2sz4 : s.t["4pO/TY"],
            flag: I.xBc.MANAGE_EVENTS,
        },
        [I.xBc.CREATE_EVENTS.toString()]: {
            title: s.intl.string(s.t.qyjZua),
            description: n === I.rbe.GUILD_CATEGORY ? s.t.XpibmC : s.t.sPoBLa,
            flag: I.xBc.CREATE_EVENTS,
        },
        [I.xBc.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: s.intl.string(s.t.VBwkUf),
            description: i?.enableHangoutWindow ? s.t.CYcJ6H : s.t.C6BzXx,
            flag: I.xBc.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
