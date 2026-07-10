"use strict";
n.d(t, { T6: () => A, oO: () => h, $N: () => I, mW: () => p, t0: () => f });
var i,
    r,
    a = n(627968);
n(64700);
var s = n(834730),
    l = n(695366),
    o = n(375708);
function d(e, t) {
    return (0, a.jsxs)(
        s.E,
        {
            color: "text-feedback-critical",
            style: { display: "flex", gap: "4px", margin: "8px 0 4px 0", alignItems: "center" },
            variant: "text-sm/normal",
            children: [(0, a.jsx)(l.E, { size: "custom", color: "currentColor", width: 14, height: 14 }), e],
        },
        t,
    );
}
function c(e, t) {
    return (0, a.jsxs)(
        s.E,
        {
            color: "text-feedback-critical",
            style: { display: "flex", gap: "4px", margin: "8px 0 4px 0", alignItems: "center" },
            variant: "text-sm/normal",
            children: [(0, a.jsx)(l.E, { size: "custom", color: "currentColor", width: 14, height: 14 }), e],
        },
        t,
    );
}
var u = n(780964),
    _ = n(975571),
    E = n(652215),
    A =
        (((i = {})[(i.EMPTY_STATE = 0)] = "EMPTY_STATE"),
        (i[(i.ADMINISTRATOR = 1)] = "ADMINISTRATOR"),
        (i[(i.ROLE = 2)] = "ROLE"),
        (i[(i.OWNER = 3)] = "OWNER"),
        (i[(i.MEMBER = 4)] = "MEMBER"),
        (i[(i.USER = 5)] = "USER"),
        (i[(i.GUILD = 6)] = "GUILD"),
        i),
    h =
        (((r = {})[(r.ROLES = 0)] = "ROLES"),
        (r[(r.MEMBERS = 1)] = "MEMBERS"),
        (r[(r.USERS = 2)] = "USERS"),
        (r[(r.GUILDS = 3)] = "GUILDS"),
        r);
let I = 20,
    f = "channelPermissionSettingsAdvancedModeOn";
function p(e, t, i) {
    let r = e.type;
    return {
        [E.xBc.VIEW_CHANNEL.toString()]: {
            title: r === E.rbe.GUILD_CATEGORY ? o.intl.string(o.t.uV83yi) : o.intl.string(o.t["W/A4Qp"]),
            description: (() => {
                if (t)
                    switch (r) {
                        case E.rbe.GUILD_CATEGORY:
                            return o.t["o/vBzj"];
                        case E.rbe.GUILD_VOICE:
                        case E.rbe.GUILD_STAGE_VOICE:
                            return o.t.ejL1Wo;
                        default:
                            return o.t["3jG0Bo"];
                    }
                return r === E.rbe.GUILD_CATEGORY ? o.t.SzosGs : o.t.M2iEy3;
            })(),
            flag: E.xBc.VIEW_CHANNEL,
        },
        [E.xBc.MANAGE_CHANNELS.toString()]: {
            title: r === E.rbe.GUILD_CATEGORY ? o.intl.string(o.t["9qLtWs"]) : o.intl.string(o.t.nAw15L),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t.KJ2JnG;
                    case E.rbe.GUILD_VOICE:
                        return o.t["+gl2ne"];
                    case E.rbe.GUILD_STAGE_VOICE:
                        return o.t.SDX669;
                    default:
                        return o.t.ydL28i;
                }
            })(),
            flag: E.xBc.MANAGE_CHANNELS,
        },
        [E.xBc.MANAGE_ROLES.toString()]: {
            title: o.intl.string(o.t.ICb6am),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t.TyyCMD;
                    case E.rbe.GUILD_STAGE_VOICE:
                        return o.t.hcw4mx;
                    default:
                        return o.t.hOMXOv;
                }
            })(),
            flag: E.xBc.MANAGE_ROLES,
        },
        [E.xBc.MANAGE_WEBHOOKS.toString()]: {
            title: o.intl.string(o.t["/ADKmM"]),
            description: r === E.rbe.GUILD_CATEGORY ? o.t["K5+ZZ7"] : o.t.CYBZry,
            flag: E.xBc.MANAGE_WEBHOOKS,
        },
        [E.xBc.CREATE_INSTANT_INVITE.toString()]: {
            title: o.intl.string(o.t.zJrgTG),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t["3YFAAX"];
                    case E.rbe.GUILD_VOICE:
                    case E.rbe.GUILD_STAGE_VOICE:
                        return o.t.lUCs1n;
                    default:
                        return o.t.q4g2aI;
                }
            })(),
            flag: E.xBc.CREATE_INSTANT_INVITE,
        },
        [E.xBc.SEND_MESSAGES.toString()]: {
            title: E.kvI.GUILD_THREADS_ONLY.has(r)
                ? o.intl.string(o.t.nJwAHX)
                : r === E.rbe.GUILD_CATEGORY
                  ? o.intl.string(o.t.S1VOwd)
                  : o.intl.string(o.t.T32rkC),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t.IjeLuu;
                    case E.rbe.GUILD_FORUM:
                        return i?.createPostsDisabled && !e.isMediaChannel()
                            ? o.intl.format(o.t.zlXUVY, { warningHook: d })
                            : o.t.LG9VAi;
                    case E.rbe.GUILD_MEDIA:
                        return o.t.LG9VAi;
                    case E.rbe.GUILD_ANNOUNCEMENT:
                        return o.intl.format(o.t.WFwfSD, {
                            articleURL: _.A.getArticleURL(E.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    case E.rbe.GUILD_VOICE:
                        return i?.sendMessagesDisabled
                            ? o.intl.format(o.t.Q1rwpr, { warningHook: c })
                            : o.intl.string(o.t.WQ6zpT);
                    default:
                        return o.t.WQ6zpT;
                }
            })(),
            flag: E.xBc.SEND_MESSAGES,
        },
        [E.xBc.EMBED_LINKS.toString()]: {
            title: o.intl.string(o.t["969dEL"]),
            description: r === E.rbe.GUILD_CATEGORY ? o.t["7zlUay"] : o.t.XFFhA0,
            flag: E.xBc.EMBED_LINKS,
        },
        [E.xBc.ATTACH_FILES.toString()]: {
            title: o.intl.string(o.t["3AS4UM"]),
            description: r === E.rbe.GUILD_CATEGORY ? o.t.XREf9l : o.t.WK9r7F,
            flag: E.xBc.ATTACH_FILES,
        },
        [E.xBc.ADD_REACTIONS.toString()]: {
            title: o.intl.string(o.t.yEoJAr),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t.pZT2Zh;
                    case E.rbe.GUILD_VOICE:
                        return o.t.xSSbIs;
                    default:
                        return o.t.PVjR1Y;
                }
            })(),
            flag: E.xBc.ADD_REACTIONS,
        },
        [E.xBc.USE_EXTERNAL_EMOJIS.toString()]: {
            title: o.intl.string(o.t["+bxf3H"]),
            description: r === E.rbe.GUILD_CATEGORY ? o.t.mWAbK4 : o.t.Qc5vOr,
            flag: E.xBc.USE_EXTERNAL_EMOJIS,
        },
        [E.xBc.USE_EXTERNAL_STICKERS.toString()]: {
            title: o.intl.string(o.t.ERNhYf),
            description: r === E.rbe.GUILD_CATEGORY ? o.t["39whJ4"] : o.t.VF4fZZ,
            flag: E.xBc.USE_EXTERNAL_STICKERS,
        },
        [E.xBc.MENTION_EVERYONE.toString()]: {
            title: r === E.rbe.GUILD_STAGE_VOICE ? o.intl.string(o.t.VDUAHO) : o.intl.string(o.t.Y78KGC),
            description:
                r === E.rbe.GUILD_CATEGORY ? o.t["HOhg/B"] : r === E.rbe.GUILD_STAGE_VOICE ? o.t.rZn1oO : o.t["6IUSdt"],
            flag: E.xBc.MENTION_EVERYONE,
        },
        [E.xBc.MANAGE_MESSAGES.toString()]: {
            title: o.intl.string(o.t["6lU9xM"]),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t["5R9nYh"];
                    case E.rbe.GUILD_ANNOUNCEMENT:
                        return o.intl.format(o.t.XRxOo0, {
                            articleURL: _.A.getArticleURL(E.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    default:
                        return o.t["SeA+G9"];
                }
            })(),
            flag: E.xBc.MANAGE_MESSAGES,
        },
        [E.xBc.PIN_MESSAGES.toString()]: {
            title: o.intl.string(o.t.Y5BI39),
            description: r === E.rbe.GUILD_CATEGORY ? o.t.gmbD87 : o.t["0l2EjL"],
            flag: E.xBc.PIN_MESSAGES,
        },
        [E.xBc.BYPASS_SLOWMODE.toString()]: {
            title: o.intl.string(o.t.kqcjeV),
            description: r === E.rbe.GUILD_CATEGORY ? o.t.C4t1Xu : o.t.Ha1xbw,
            flag: E.xBc.BYPASS_SLOWMODE,
        },
        [E.xBc.MANAGE_OFFICIAL_MESSAGES.toString()]: {
            title: o.intl.string(o.t.Aj9ruN),
            description: r === E.rbe.GUILD_CATEGORY ? o.t["Pf0e/Q"] : o.t.qEbw4W,
            flag: E.xBc.MANAGE_OFFICIAL_MESSAGES,
        },
        [E.xBc.READ_MESSAGE_HISTORY.toString()]: {
            title: E.kvI.GUILD_THREADS_ONLY.has(r) ? o.intl.string(o.t["0RQwtn"]) : o.intl.string(o.t.l9ufaR),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t["cJRv/g"];
                    case E.rbe.GUILD_VOICE:
                        return i?.readMessageHistoryDisabled
                            ? o.intl.format(o.t.Rx4pbJ, { warningHook: c })
                            : o.intl.string(o.t.cuMfH0);
                    case E.rbe.GUILD_FORUM:
                    case E.rbe.GUILD_MEDIA:
                        return o.t.RqCc7i;
                    default:
                        return o.t.cuMfH0;
                }
            })(),
            flag: E.xBc.READ_MESSAGE_HISTORY,
        },
        [E.xBc.SEND_TTS_MESSAGES.toString()]: {
            title: o.intl.string(o.t.mMbwh7),
            description: r === E.rbe.GUILD_CATEGORY ? o.t.b7pc9U : o.t.CpakGz,
            flag: E.xBc.SEND_TTS_MESSAGES,
        },
        [E.xBc.USE_APPLICATION_COMMANDS.toString()]: {
            title: o.intl.string(o.t.nkoPOt),
            description: r === E.rbe.GUILD_CATEGORY ? o.t["D+qW0J"] : o.t.ReG3gG,
            flag: E.xBc.USE_APPLICATION_COMMANDS,
        },
        [E.xBc.SEND_VOICE_MESSAGES.toString()]: {
            title: o.intl.string(o.t.WlWSBT),
            description: r === E.rbe.GUILD_CATEGORY ? o.t.gavGfv : o.t.BhEo9V,
            flag: E.xBc.SEND_VOICE_MESSAGES,
        },
        [E.xBc.SEND_POLLS.toString()]: {
            title: o.intl.string(o.t.UMQ7Ww),
            description: r === E.rbe.GUILD_CATEGORY ? o.t["18Ya7L"] : o.t.ckKKIO,
            flag: E.xBc.SEND_POLLS,
        },
        [E.xBc.CONNECT.toString()]: {
            title: o.intl.string(o.t.S0W8Z5),
            description: (() => {
                if (t)
                    switch (r) {
                        case E.rbe.GUILD_CATEGORY:
                            return o.t.XcrieN;
                        case E.rbe.GUILD_STAGE_VOICE:
                            return o.t.SOFNhP;
                        case E.rbe.GUILD_TEXT:
                        case E.rbe.GUILD_FORUM:
                        case E.rbe.GUILD_MEDIA:
                            return o.t.LsS8xT;
                        default:
                            return o.t.j4AyO8;
                    }
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t.stA0Hl;
                    case E.rbe.GUILD_STAGE_VOICE:
                        return o.t["G9+Qie"];
                    case E.rbe.GUILD_TEXT:
                    case E.rbe.GUILD_FORUM:
                    case E.rbe.GUILD_MEDIA:
                        return o.t["QU/Rw8"];
                    default:
                        return o.t.HvG8uR;
                }
            })(),
            flag: E.xBc.CONNECT,
        },
        [E.xBc.SPEAK.toString()]: {
            title: o.intl.string(o.t["8w1tIR"]),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t.iXhS6R;
                    case E.rbe.GUILD_STAGE_VOICE:
                        return o.t.a8n741;
                    case E.rbe.GUILD_TEXT:
                    case E.rbe.GUILD_FORUM:
                    case E.rbe.GUILD_MEDIA:
                        return o.t["+VXsJI"];
                    default:
                        return o.t["568E6d"];
                }
            })(),
            flag: E.xBc.SPEAK,
        },
        [E.xBc.STREAM.toString()]: {
            title: o.intl.string(o.t.FlNoSV),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t["ryG0/J"];
                    case E.rbe.GUILD_TEXT:
                    case E.rbe.GUILD_FORUM:
                    case E.rbe.GUILD_MEDIA:
                        return o.t.AuEQEC;
                    case E.rbe.GUILD_STAGE_VOICE:
                        return o.t.swJcN6;
                    default:
                        return o.t.RY8rIc;
                }
            })(),
            flag: E.xBc.STREAM,
        },
        [E.xBc.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: o.intl.string(o.t.rLSGeh),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t.maNzCO;
                    case E.rbe.GUILD_FORUM:
                    case E.rbe.GUILD_MEDIA:
                        return o.t.RyEwla;
                    default:
                        return o.t.qinvMU;
                }
            })(),
            flag: E.xBc.USE_EMBEDDED_ACTIVITIES,
        },
        [E.xBc.USE_EXTERNAL_APPS.toString()]: {
            title: o.intl.string(o.t["3TzAk0"]),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t.bgIY3H;
                    case E.rbe.GUILD_FORUM:
                    case E.rbe.GUILD_MEDIA:
                        return o.t.qPUPip;
                    default:
                        return o.t.czqMLp;
                }
            })(),
            flag: E.xBc.USE_EXTERNAL_APPS,
        },
        [E.xBc.USE_SOUNDBOARD.toString()]: {
            title: o.intl.string(o.t.Bco7NG),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.intl.format(o.t["0kBp/0"], { helpCenterArticle: _.A.getArticleURL(E.MVz.SOUNDBOARD) });
                    case E.rbe.GUILD_TEXT:
                    case E.rbe.GUILD_FORUM:
                    case E.rbe.GUILD_MEDIA:
                        return o.intl.format(o.t["6eYqU1"], { helpCenterArticle: _.A.getArticleURL(E.MVz.SOUNDBOARD) });
                    default:
                        return o.intl.format(o.t.GEi6Ym, { helpCenterArticle: _.A.getArticleURL(E.MVz.SOUNDBOARD) });
                }
            })(),
            flag: E.xBc.USE_SOUNDBOARD,
        },
        [E.xBc.USE_EXTERNAL_SOUNDS.toString()]: {
            title: o.intl.string(o.t.pwaVJ6),
            description: o.t.qDpPtX,
            flag: E.xBc.USE_EXTERNAL_SOUNDS,
        },
        [E.xBc.USE_VAD.toString()]: {
            title: o.intl.string(o.t["08zAV7"]),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t.fUYPly;
                    case E.rbe.GUILD_STAGE_VOICE:
                        return o.t.BJKqsW;
                    case E.rbe.GUILD_TEXT:
                    case E.rbe.GUILD_FORUM:
                    case E.rbe.GUILD_MEDIA:
                        return o.t["3GJwsc"];
                    default:
                        return o.t.s2eihY;
                }
            })(),
            flag: E.xBc.USE_VAD,
        },
        [E.xBc.PRIORITY_SPEAKER.toString()]: {
            title: o.intl.string(o.t.BVK71i),
            description: (() => {
                let e = {
                    keybind: o.intl.string(o.t.DkSwJ2),
                    onClick: () => {
                        {
                            let { openUserSettings: e } = n(766075);
                            e(u.X.KEYBINDS_PANEL);
                        }
                    },
                };
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.intl.format(o.t["8nIfDP"], e);
                    case E.rbe.GUILD_TEXT:
                    case E.rbe.GUILD_FORUM:
                    case E.rbe.GUILD_MEDIA:
                        return o.intl.format(o.t["0t6uSv"], e);
                    default:
                        return o.intl.format(o.t.UvB2KP, e);
                }
            })(),
            flag: E.xBc.PRIORITY_SPEAKER,
        },
        [E.xBc.MUTE_MEMBERS.toString()]: {
            title: o.intl.string(o.t["8EI30/"]),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t.bcuobK;
                    case E.rbe.GUILD_STAGE_VOICE:
                        return o.t.EbvdH9;
                    case E.rbe.GUILD_TEXT:
                    case E.rbe.GUILD_FORUM:
                    case E.rbe.GUILD_MEDIA:
                        return o.t.KYDG2K;
                    default:
                        return o.t.LW5C9P;
                }
            })(),
            flag: E.xBc.MUTE_MEMBERS,
        },
        [E.xBc.DEAFEN_MEMBERS.toString()]: {
            title: o.intl.string(o.t["9L47Fr"]),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t.amZ5vn;
                    case E.rbe.GUILD_TEXT:
                    case E.rbe.GUILD_FORUM:
                    case E.rbe.GUILD_MEDIA:
                        return o.t["d+i1nX"];
                    default:
                        return o.t.UAdIxo;
                }
            })(),
            flag: E.xBc.DEAFEN_MEMBERS,
        },
        [E.xBc.MOVE_MEMBERS.toString()]: {
            title: o.intl.string(o.t.YtjJPQ),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t.XmoyRD;
                    case E.rbe.GUILD_STAGE_VOICE:
                        return o.t.bizKz6;
                    case E.rbe.GUILD_TEXT:
                    case E.rbe.GUILD_FORUM:
                    case E.rbe.GUILD_MEDIA:
                        return o.t.cbdQy2;
                    default:
                        return o.t.nSD1ah;
                }
            })(),
            flag: E.xBc.MOVE_MEMBERS,
        },
        [E.xBc.REQUEST_TO_SPEAK.toString()]: {
            title: o.intl.string(o.t["5kicT2"]),
            description: r === E.rbe.GUILD_CATEGORY ? o.t.T1lMSl : o.t.uzlYFE,
            flag: E.xBc.REQUEST_TO_SPEAK,
        },
        [E.xBc.MANAGE_THREADS.toString()]: {
            title: E.kvI.GUILD_THREADS_ONLY.has(r)
                ? o.intl.string(o.t.ossiZD)
                : r === E.rbe.GUILD_CATEGORY
                  ? o.intl.string(o.t.QKe7Q3)
                  : o.intl.string(o.t.kEqgr7),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t.S31soU;
                    case E.rbe.GUILD_FORUM:
                    case E.rbe.GUILD_MEDIA:
                        return o.t["XLi/jG"];
                    default:
                        return o.t.yvan0j;
                }
            })(),
            flag: E.xBc.MANAGE_THREADS,
        },
        [E.xBc.CREATE_PUBLIC_THREADS.toString()]: {
            title: o.intl.string(o.t["25rKnX"]),
            description: r === E.rbe.GUILD_CATEGORY ? o.t["+M1yLj"] : o.t["5SDtGB"],
            flag: E.xBc.CREATE_PUBLIC_THREADS,
        },
        [E.xBc.CREATE_PRIVATE_THREADS.toString()]: {
            title: o.intl.string(o.t.QwbTSa),
            description: r === E.rbe.GUILD_CATEGORY ? o.t["hBS/zn"] : o.t.Chg2zd,
            flag: E.xBc.CREATE_PRIVATE_THREADS,
        },
        [E.xBc.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: E.kvI.GUILD_THREADS_ONLY.has(r)
                ? o.intl.string(o.t.fqhqWm)
                : r === E.rbe.GUILD_CATEGORY
                  ? o.intl.string(o.t["5QlVGy"])
                  : o.intl.string(o.t.fTE74g),
            description: (() => {
                switch (r) {
                    case E.rbe.GUILD_CATEGORY:
                        return o.t.DlIVcN;
                    case E.rbe.GUILD_FORUM:
                    case E.rbe.GUILD_MEDIA:
                        return o.t.XTnrPH;
                    default:
                        return o.t.xHO6Me;
                }
            })(),
            flag: E.xBc.SEND_MESSAGES_IN_THREADS,
        },
        [E.xBc.MANAGE_EVENTS.toString()]: {
            title: o.intl.string(o.t.HIgA5a),
            description: r === E.rbe.GUILD_CATEGORY ? o.t.CP2sz4 : o.t["4pO/TY"],
            flag: E.xBc.MANAGE_EVENTS,
        },
        [E.xBc.CREATE_EVENTS.toString()]: {
            title: o.intl.string(o.t.qyjZua),
            description: r === E.rbe.GUILD_CATEGORY ? o.t.XpibmC : o.t.sPoBLa,
            flag: E.xBc.CREATE_EVENTS,
        },
        [E.xBc.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: o.intl.string(o.t.VBwkUf),
            description: i?.enableHangoutWindow ? o.t.CYcJ6H : o.t.C6BzXx,
            flag: E.xBc.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
