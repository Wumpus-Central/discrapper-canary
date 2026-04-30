"use strict";
n.d(t, { T6: () => h, oO: () => p, $N: () => E, mW: () => g, t0: () => m });
var i,
    r,
    s = n(627968);
n(64700);
var a = n(834730),
    o = n(695366),
    l = n(375708);
let u = (e, t) =>
        (0, s.jsxs)(
            a.E,
            {
                color: "text-feedback-critical",
                style: { display: "flex", gap: "4px", margin: "8px 0 4px 0", alignItems: "center" },
                variant: "text-sm/normal",
                children: [(0, s.jsx)(o.E, { size: "custom", color: "currentColor", width: 14, height: 14 }), e],
            },
            t,
        ),
    c = (e, t) =>
        (0, s.jsxs)(
            a.E,
            {
                color: "text-feedback-critical",
                style: { display: "flex", gap: "4px", margin: "8px 0 4px 0", alignItems: "center" },
                variant: "text-sm/normal",
                children: [(0, s.jsx)(o.E, { size: "custom", color: "currentColor", width: 14, height: 14 }), e],
            },
            t,
        );
var d = n(780964),
    _ = n(975571),
    f = n(652215),
    h =
        (((i = {})[(i.EMPTY_STATE = 0)] = "EMPTY_STATE"),
        (i[(i.ADMINISTRATOR = 1)] = "ADMINISTRATOR"),
        (i[(i.ROLE = 2)] = "ROLE"),
        (i[(i.OWNER = 3)] = "OWNER"),
        (i[(i.MEMBER = 4)] = "MEMBER"),
        (i[(i.USER = 5)] = "USER"),
        (i[(i.GUILD = 6)] = "GUILD"),
        i),
    p =
        (((r = {})[(r.ROLES = 0)] = "ROLES"),
        (r[(r.MEMBERS = 1)] = "MEMBERS"),
        (r[(r.USERS = 2)] = "USERS"),
        (r[(r.GUILDS = 3)] = "GUILDS"),
        r);
let E = 20,
    m = "channelPermissionSettingsAdvancedModeOn";
function g(e, t, i) {
    let r = e.type;
    return {
        [f.xBc.VIEW_CHANNEL.toString()]: {
            title: r === f.rbe.GUILD_CATEGORY ? l.intl.string(l.t.uV83yi) : l.intl.string(l.t["W/A4Qp"]),
            description: (() => {
                if (t)
                    switch (r) {
                        case f.rbe.GUILD_CATEGORY:
                            return l.t["o/vBzj"];
                        case f.rbe.GUILD_VOICE:
                        case f.rbe.GUILD_STAGE_VOICE:
                            return l.t.ejL1Wo;
                        default:
                            return l.t["3jG0Bo"];
                    }
                return r === f.rbe.GUILD_CATEGORY ? l.t.SzosGs : l.t.M2iEy3;
            })(),
            flag: f.xBc.VIEW_CHANNEL,
        },
        [f.xBc.MANAGE_CHANNELS.toString()]: {
            title: r === f.rbe.GUILD_CATEGORY ? l.intl.string(l.t["9qLtWs"]) : l.intl.string(l.t.nAw15L),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t.KJ2JnG;
                    case f.rbe.GUILD_VOICE:
                        return l.t["+gl2ne"];
                    case f.rbe.GUILD_STAGE_VOICE:
                        return l.t.SDX669;
                    default:
                        return l.t.ydL28i;
                }
            })(),
            flag: f.xBc.MANAGE_CHANNELS,
        },
        [f.xBc.MANAGE_ROLES.toString()]: {
            title: l.intl.string(l.t.ICb6am),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t.TyyCMD;
                    case f.rbe.GUILD_STAGE_VOICE:
                        return l.t.hcw4mx;
                    default:
                        return l.t.hOMXOv;
                }
            })(),
            flag: f.xBc.MANAGE_ROLES,
        },
        [f.xBc.MANAGE_WEBHOOKS.toString()]: {
            title: l.intl.string(l.t["/ADKmM"]),
            description: r === f.rbe.GUILD_CATEGORY ? l.t["K5+ZZ7"] : l.t.CYBZry,
            flag: f.xBc.MANAGE_WEBHOOKS,
        },
        [f.xBc.CREATE_INSTANT_INVITE.toString()]: {
            title: l.intl.string(l.t.zJrgTG),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t["3YFAAX"];
                    case f.rbe.GUILD_VOICE:
                    case f.rbe.GUILD_STAGE_VOICE:
                        return l.t.lUCs1n;
                    default:
                        return l.t.q4g2aI;
                }
            })(),
            flag: f.xBc.CREATE_INSTANT_INVITE,
        },
        [f.xBc.SEND_MESSAGES.toString()]: {
            title: f.kvI.GUILD_THREADS_ONLY.has(r)
                ? l.intl.string(l.t.nJwAHX)
                : r === f.rbe.GUILD_CATEGORY
                  ? l.intl.string(l.t.S1VOwd)
                  : l.intl.string(l.t.T32rkC),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t.IjeLuu;
                    case f.rbe.GUILD_FORUM:
                        return i?.createPostsDisabled && !e.isMediaChannel()
                            ? l.intl.format(l.t.zlXUVY, { warningHook: u })
                            : l.t.LG9VAi;
                    case f.rbe.GUILD_MEDIA:
                        return l.t.LG9VAi;
                    case f.rbe.GUILD_ANNOUNCEMENT:
                        return l.intl.format(l.t.WFwfSD, {
                            articleURL: _.A.getArticleURL(f.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    case f.rbe.GUILD_VOICE:
                        return i?.sendMessagesDisabled
                            ? l.intl.format(l.t.Q1rwpr, { warningHook: c })
                            : l.intl.string(l.t.WQ6zpT);
                    default:
                        return l.t.WQ6zpT;
                }
            })(),
            flag: f.xBc.SEND_MESSAGES,
        },
        [f.xBc.EMBED_LINKS.toString()]: {
            title: l.intl.string(l.t["969dEL"]),
            description: r === f.rbe.GUILD_CATEGORY ? l.t["7zlUay"] : l.t.XFFhA0,
            flag: f.xBc.EMBED_LINKS,
        },
        [f.xBc.ATTACH_FILES.toString()]: {
            title: l.intl.string(l.t["3AS4UM"]),
            description: r === f.rbe.GUILD_CATEGORY ? l.t.XREf9l : l.t.WK9r7F,
            flag: f.xBc.ATTACH_FILES,
        },
        [f.xBc.ADD_REACTIONS.toString()]: {
            title: l.intl.string(l.t.yEoJAr),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t.pZT2Zh;
                    case f.rbe.GUILD_VOICE:
                        return l.t.xSSbIs;
                    default:
                        return l.t.PVjR1Y;
                }
            })(),
            flag: f.xBc.ADD_REACTIONS,
        },
        [f.xBc.USE_EXTERNAL_EMOJIS.toString()]: {
            title: l.intl.string(l.t["+bxf3H"]),
            description: r === f.rbe.GUILD_CATEGORY ? l.t.mWAbK4 : l.t.Qc5vOr,
            flag: f.xBc.USE_EXTERNAL_EMOJIS,
        },
        [f.xBc.USE_EXTERNAL_STICKERS.toString()]: {
            title: l.intl.string(l.t.ERNhYf),
            description: r === f.rbe.GUILD_CATEGORY ? l.t["39whJ4"] : l.t.VF4fZZ,
            flag: f.xBc.USE_EXTERNAL_STICKERS,
        },
        [f.xBc.MENTION_EVERYONE.toString()]: {
            title: r === f.rbe.GUILD_STAGE_VOICE ? l.intl.string(l.t.VDUAHO) : l.intl.string(l.t.Y78KGC),
            description:
                r === f.rbe.GUILD_CATEGORY ? l.t["HOhg/B"] : r === f.rbe.GUILD_STAGE_VOICE ? l.t.rZn1oO : l.t["6IUSdt"],
            flag: f.xBc.MENTION_EVERYONE,
        },
        [f.xBc.MANAGE_MESSAGES.toString()]: {
            title: l.intl.string(l.t["6lU9xM"]),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t["5R9nYh"];
                    case f.rbe.GUILD_ANNOUNCEMENT:
                        return l.intl.format(l.t.XRxOo0, {
                            articleURL: _.A.getArticleURL(f.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    default:
                        return l.t["SeA+G9"];
                }
            })(),
            flag: f.xBc.MANAGE_MESSAGES,
        },
        [f.xBc.PIN_MESSAGES.toString()]: {
            title: l.intl.string(l.t.Y5BI39),
            description: r === f.rbe.GUILD_CATEGORY ? l.t.gmbD87 : l.t["0l2EjL"],
            flag: f.xBc.PIN_MESSAGES,
        },
        [f.xBc.BYPASS_SLOWMODE.toString()]: {
            title: l.intl.string(l.t.kqcjeV),
            description: r === f.rbe.GUILD_CATEGORY ? l.t.C4t1Xu : l.t.Ha1xbw,
            flag: f.xBc.BYPASS_SLOWMODE,
        },
        [f.xBc.MANAGE_OFFICIAL_MESSAGES.toString()]: {
            title: l.intl.string(l.t.Aj9ruN),
            description: r === f.rbe.GUILD_CATEGORY ? l.t["Pf0e/Q"] : l.t.qEbw4W,
            flag: f.xBc.MANAGE_OFFICIAL_MESSAGES,
        },
        [f.xBc.READ_MESSAGE_HISTORY.toString()]: {
            title: f.kvI.GUILD_THREADS_ONLY.has(r) ? l.intl.string(l.t["0RQwtn"]) : l.intl.string(l.t.l9ufaR),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t["cJRv/g"];
                    case f.rbe.GUILD_VOICE:
                        return i?.readMessageHistoryDisabled
                            ? l.intl.format(l.t.Rx4pbJ, { warningHook: c })
                            : l.intl.string(l.t.cuMfH0);
                    case f.rbe.GUILD_FORUM:
                    case f.rbe.GUILD_MEDIA:
                        return l.t.RqCc7i;
                    default:
                        return l.t.cuMfH0;
                }
            })(),
            flag: f.xBc.READ_MESSAGE_HISTORY,
        },
        [f.xBc.SEND_TTS_MESSAGES.toString()]: {
            title: l.intl.string(l.t.mMbwh7),
            description: r === f.rbe.GUILD_CATEGORY ? l.t.b7pc9U : l.t.CpakGz,
            flag: f.xBc.SEND_TTS_MESSAGES,
        },
        [f.xBc.USE_APPLICATION_COMMANDS.toString()]: {
            title: l.intl.string(l.t.nkoPOt),
            description: r === f.rbe.GUILD_CATEGORY ? l.t["D+qW0J"] : l.t.ReG3gG,
            flag: f.xBc.USE_APPLICATION_COMMANDS,
        },
        [f.xBc.SEND_VOICE_MESSAGES.toString()]: {
            title: l.intl.string(l.t.WlWSBT),
            description: r === f.rbe.GUILD_CATEGORY ? l.t.gavGfv : l.t.BhEo9V,
            flag: f.xBc.SEND_VOICE_MESSAGES,
        },
        [f.xBc.SEND_POLLS.toString()]: {
            title: l.intl.string(l.t.UMQ7Ww),
            description: r === f.rbe.GUILD_CATEGORY ? l.t["18Ya7L"] : l.t.ckKKIO,
            flag: f.xBc.SEND_POLLS,
        },
        [f.xBc.CONNECT.toString()]: {
            title: l.intl.string(l.t.S0W8Z5),
            description: (() => {
                if (t)
                    switch (r) {
                        case f.rbe.GUILD_CATEGORY:
                            return l.t.XcrieN;
                        case f.rbe.GUILD_STAGE_VOICE:
                            return l.t.SOFNhP;
                        case f.rbe.GUILD_TEXT:
                        case f.rbe.GUILD_FORUM:
                        case f.rbe.GUILD_MEDIA:
                            return l.t.LsS8xT;
                        default:
                            return l.t.j4AyO8;
                    }
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t.stA0Hl;
                    case f.rbe.GUILD_STAGE_VOICE:
                        return l.t["G9+Qie"];
                    case f.rbe.GUILD_TEXT:
                    case f.rbe.GUILD_FORUM:
                    case f.rbe.GUILD_MEDIA:
                        return l.t["QU/Rw8"];
                    default:
                        return l.t.HvG8uR;
                }
            })(),
            flag: f.xBc.CONNECT,
        },
        [f.xBc.SPEAK.toString()]: {
            title: l.intl.string(l.t["8w1tIR"]),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t.iXhS6R;
                    case f.rbe.GUILD_STAGE_VOICE:
                        return l.t.a8n741;
                    case f.rbe.GUILD_TEXT:
                    case f.rbe.GUILD_FORUM:
                    case f.rbe.GUILD_MEDIA:
                        return l.t["+VXsJI"];
                    default:
                        return l.t["568E6d"];
                }
            })(),
            flag: f.xBc.SPEAK,
        },
        [f.xBc.STREAM.toString()]: {
            title: l.intl.string(l.t.FlNoSV),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t["ryG0/J"];
                    case f.rbe.GUILD_TEXT:
                    case f.rbe.GUILD_FORUM:
                    case f.rbe.GUILD_MEDIA:
                        return l.t.AuEQEC;
                    case f.rbe.GUILD_STAGE_VOICE:
                        return l.t.swJcN6;
                    default:
                        return l.t.RY8rIc;
                }
            })(),
            flag: f.xBc.STREAM,
        },
        [f.xBc.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: l.intl.string(l.t.rLSGeh),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t.maNzCO;
                    case f.rbe.GUILD_FORUM:
                    case f.rbe.GUILD_MEDIA:
                        return l.t.RyEwla;
                    default:
                        return l.t.qinvMU;
                }
            })(),
            flag: f.xBc.USE_EMBEDDED_ACTIVITIES,
        },
        [f.xBc.USE_EXTERNAL_APPS.toString()]: {
            title: l.intl.string(l.t["3TzAk0"]),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t.bgIY3H;
                    case f.rbe.GUILD_FORUM:
                    case f.rbe.GUILD_MEDIA:
                        return l.t.qPUPip;
                    default:
                        return l.t.czqMLp;
                }
            })(),
            flag: f.xBc.USE_EXTERNAL_APPS,
        },
        [f.xBc.USE_SOUNDBOARD.toString()]: {
            title: l.intl.string(l.t.Bco7NG),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.intl.format(l.t["0kBp/0"], { helpCenterArticle: _.A.getArticleURL(f.MVz.SOUNDBOARD) });
                    case f.rbe.GUILD_TEXT:
                    case f.rbe.GUILD_FORUM:
                    case f.rbe.GUILD_MEDIA:
                        return l.intl.format(l.t["6eYqU1"], { helpCenterArticle: _.A.getArticleURL(f.MVz.SOUNDBOARD) });
                    default:
                        return l.intl.format(l.t.GEi6Ym, { helpCenterArticle: _.A.getArticleURL(f.MVz.SOUNDBOARD) });
                }
            })(),
            flag: f.xBc.USE_SOUNDBOARD,
        },
        [f.xBc.USE_EXTERNAL_SOUNDS.toString()]: {
            title: l.intl.string(l.t.pwaVJ6),
            description: l.t.qDpPtX,
            flag: f.xBc.USE_EXTERNAL_SOUNDS,
        },
        [f.xBc.USE_VAD.toString()]: {
            title: l.intl.string(l.t["08zAV7"]),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t.fUYPly;
                    case f.rbe.GUILD_STAGE_VOICE:
                        return l.t.BJKqsW;
                    case f.rbe.GUILD_TEXT:
                    case f.rbe.GUILD_FORUM:
                    case f.rbe.GUILD_MEDIA:
                        return l.t["3GJwsc"];
                    default:
                        return l.t.s2eihY;
                }
            })(),
            flag: f.xBc.USE_VAD,
        },
        [f.xBc.PRIORITY_SPEAKER.toString()]: {
            title: l.intl.string(l.t.BVK71i),
            description: (() => {
                let e = {
                    keybind: l.intl.string(l.t.DkSwJ2),
                    onClick: () => {
                        {
                            let { openUserSettings: e } = n(858897);
                            e(d.X.KEYBINDS_PANEL);
                        }
                    },
                };
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.intl.format(l.t["8nIfDP"], e);
                    case f.rbe.GUILD_TEXT:
                    case f.rbe.GUILD_FORUM:
                    case f.rbe.GUILD_MEDIA:
                        return l.intl.format(l.t["0t6uSv"], e);
                    default:
                        return l.intl.format(l.t.UvB2KP, e);
                }
            })(),
            flag: f.xBc.PRIORITY_SPEAKER,
        },
        [f.xBc.MUTE_MEMBERS.toString()]: {
            title: l.intl.string(l.t["8EI30/"]),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t.bcuobK;
                    case f.rbe.GUILD_STAGE_VOICE:
                        return l.t.EbvdH9;
                    case f.rbe.GUILD_TEXT:
                    case f.rbe.GUILD_FORUM:
                    case f.rbe.GUILD_MEDIA:
                        return l.t.KYDG2K;
                    default:
                        return l.t.LW5C9P;
                }
            })(),
            flag: f.xBc.MUTE_MEMBERS,
        },
        [f.xBc.DEAFEN_MEMBERS.toString()]: {
            title: l.intl.string(l.t["9L47Fr"]),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t.amZ5vn;
                    case f.rbe.GUILD_TEXT:
                    case f.rbe.GUILD_FORUM:
                    case f.rbe.GUILD_MEDIA:
                        return l.t["d+i1nX"];
                    default:
                        return l.t.UAdIxo;
                }
            })(),
            flag: f.xBc.DEAFEN_MEMBERS,
        },
        [f.xBc.MOVE_MEMBERS.toString()]: {
            title: l.intl.string(l.t.YtjJPQ),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t.XmoyRD;
                    case f.rbe.GUILD_STAGE_VOICE:
                        return l.t.bizKz6;
                    case f.rbe.GUILD_TEXT:
                    case f.rbe.GUILD_FORUM:
                    case f.rbe.GUILD_MEDIA:
                        return l.t.cbdQy2;
                    default:
                        return l.t.nSD1ah;
                }
            })(),
            flag: f.xBc.MOVE_MEMBERS,
        },
        [f.xBc.REQUEST_TO_SPEAK.toString()]: {
            title: l.intl.string(l.t["5kicT2"]),
            description: r === f.rbe.GUILD_CATEGORY ? l.t.T1lMSl : l.t.uzlYFE,
            flag: f.xBc.REQUEST_TO_SPEAK,
        },
        [f.xBc.MANAGE_THREADS.toString()]: {
            title: f.kvI.GUILD_THREADS_ONLY.has(r)
                ? l.intl.string(l.t.ossiZD)
                : r === f.rbe.GUILD_CATEGORY
                  ? l.intl.string(l.t.QKe7Q3)
                  : l.intl.string(l.t.kEqgr7),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t.S31soU;
                    case f.rbe.GUILD_FORUM:
                    case f.rbe.GUILD_MEDIA:
                        return l.t["XLi/jG"];
                    default:
                        return l.t.yvan0j;
                }
            })(),
            flag: f.xBc.MANAGE_THREADS,
        },
        [f.xBc.CREATE_PUBLIC_THREADS.toString()]: {
            title: l.intl.string(l.t["25rKnX"]),
            description: r === f.rbe.GUILD_CATEGORY ? l.t["+M1yLj"] : l.t["5SDtGB"],
            flag: f.xBc.CREATE_PUBLIC_THREADS,
        },
        [f.xBc.CREATE_PRIVATE_THREADS.toString()]: {
            title: l.intl.string(l.t.QwbTSa),
            description: r === f.rbe.GUILD_CATEGORY ? l.t["hBS/zn"] : l.t.Chg2zd,
            flag: f.xBc.CREATE_PRIVATE_THREADS,
        },
        [f.xBc.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: f.kvI.GUILD_THREADS_ONLY.has(r)
                ? l.intl.string(l.t.fqhqWm)
                : r === f.rbe.GUILD_CATEGORY
                  ? l.intl.string(l.t["5QlVGy"])
                  : l.intl.string(l.t.fTE74g),
            description: (() => {
                switch (r) {
                    case f.rbe.GUILD_CATEGORY:
                        return l.t.DlIVcN;
                    case f.rbe.GUILD_FORUM:
                    case f.rbe.GUILD_MEDIA:
                        return l.t.XTnrPH;
                    default:
                        return l.t.xHO6Me;
                }
            })(),
            flag: f.xBc.SEND_MESSAGES_IN_THREADS,
        },
        [f.xBc.MANAGE_EVENTS.toString()]: {
            title: l.intl.string(l.t.HIgA5a),
            description: r === f.rbe.GUILD_CATEGORY ? l.t.CP2sz4 : l.t["4pO/TY"],
            flag: f.xBc.MANAGE_EVENTS,
        },
        [f.xBc.CREATE_EVENTS.toString()]: {
            title: l.intl.string(l.t.qyjZua),
            description: r === f.rbe.GUILD_CATEGORY ? l.t.XpibmC : l.t.sPoBLa,
            flag: f.xBc.CREATE_EVENTS,
        },
        [f.xBc.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: l.intl.string(l.t.VBwkUf),
            description: i?.enableHangoutWindow ? l.t.CYcJ6H : l.t.C6BzXx,
            flag: f.xBc.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
