"use strict";
n.d(t, { T6: () => f, oO: () => E, $N: () => p, mW: () => g, t0: () => m });
var i,
    r,
    s = n(627968);
n(64700);
var a = n(834730),
    o = n(695366),
    l = n(375708);
function u(e, t) {
    return (0, s.jsxs)(
        a.E,
        {
            color: "text-feedback-critical",
            style: { display: "flex", gap: "4px", margin: "8px 0 4px 0", alignItems: "center" },
            variant: "text-sm/normal",
            children: [(0, s.jsx)(o.E, { size: "custom", color: "currentColor", width: 14, height: 14 }), e],
        },
        t,
    );
}
function c(e, t) {
    return (0, s.jsxs)(
        a.E,
        {
            color: "text-feedback-critical",
            style: { display: "flex", gap: "4px", margin: "8px 0 4px 0", alignItems: "center" },
            variant: "text-sm/normal",
            children: [(0, s.jsx)(o.E, { size: "custom", color: "currentColor", width: 14, height: 14 }), e],
        },
        t,
    );
}
var d = n(780964),
    _ = n(975571),
    h = n(652215),
    f =
        (((i = {})[(i.EMPTY_STATE = 0)] = "EMPTY_STATE"),
        (i[(i.ADMINISTRATOR = 1)] = "ADMINISTRATOR"),
        (i[(i.ROLE = 2)] = "ROLE"),
        (i[(i.OWNER = 3)] = "OWNER"),
        (i[(i.MEMBER = 4)] = "MEMBER"),
        (i[(i.USER = 5)] = "USER"),
        (i[(i.GUILD = 6)] = "GUILD"),
        i),
    E =
        (((r = {})[(r.ROLES = 0)] = "ROLES"),
        (r[(r.MEMBERS = 1)] = "MEMBERS"),
        (r[(r.USERS = 2)] = "USERS"),
        (r[(r.GUILDS = 3)] = "GUILDS"),
        r);
let p = 20,
    m = "channelPermissionSettingsAdvancedModeOn";
function g(e, t, i) {
    let r = e.type;
    return {
        [h.xBc.VIEW_CHANNEL.toString()]: {
            title: r === h.rbe.GUILD_CATEGORY ? l.intl.string(l.t.uV83yi) : l.intl.string(l.t["W/A4Qp"]),
            description: (() => {
                if (t)
                    switch (r) {
                        case h.rbe.GUILD_CATEGORY:
                            return l.t["o/vBzj"];
                        case h.rbe.GUILD_VOICE:
                        case h.rbe.GUILD_STAGE_VOICE:
                            return l.t.ejL1Wo;
                        default:
                            return l.t["3jG0Bo"];
                    }
                return r === h.rbe.GUILD_CATEGORY ? l.t.SzosGs : l.t.M2iEy3;
            })(),
            flag: h.xBc.VIEW_CHANNEL,
        },
        [h.xBc.MANAGE_CHANNELS.toString()]: {
            title: r === h.rbe.GUILD_CATEGORY ? l.intl.string(l.t["9qLtWs"]) : l.intl.string(l.t.nAw15L),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t.KJ2JnG;
                    case h.rbe.GUILD_VOICE:
                        return l.t["+gl2ne"];
                    case h.rbe.GUILD_STAGE_VOICE:
                        return l.t.SDX669;
                    default:
                        return l.t.ydL28i;
                }
            })(),
            flag: h.xBc.MANAGE_CHANNELS,
        },
        [h.xBc.MANAGE_ROLES.toString()]: {
            title: l.intl.string(l.t.ICb6am),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t.TyyCMD;
                    case h.rbe.GUILD_STAGE_VOICE:
                        return l.t.hcw4mx;
                    default:
                        return l.t.hOMXOv;
                }
            })(),
            flag: h.xBc.MANAGE_ROLES,
        },
        [h.xBc.MANAGE_WEBHOOKS.toString()]: {
            title: l.intl.string(l.t["/ADKmM"]),
            description: r === h.rbe.GUILD_CATEGORY ? l.t["K5+ZZ7"] : l.t.CYBZry,
            flag: h.xBc.MANAGE_WEBHOOKS,
        },
        [h.xBc.CREATE_INSTANT_INVITE.toString()]: {
            title: l.intl.string(l.t.zJrgTG),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t["3YFAAX"];
                    case h.rbe.GUILD_VOICE:
                    case h.rbe.GUILD_STAGE_VOICE:
                        return l.t.lUCs1n;
                    default:
                        return l.t.q4g2aI;
                }
            })(),
            flag: h.xBc.CREATE_INSTANT_INVITE,
        },
        [h.xBc.SEND_MESSAGES.toString()]: {
            title: h.kvI.GUILD_THREADS_ONLY.has(r)
                ? l.intl.string(l.t.nJwAHX)
                : r === h.rbe.GUILD_CATEGORY
                  ? l.intl.string(l.t.S1VOwd)
                  : l.intl.string(l.t.T32rkC),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t.IjeLuu;
                    case h.rbe.GUILD_FORUM:
                        return i?.createPostsDisabled && !e.isMediaChannel()
                            ? l.intl.format(l.t.zlXUVY, { warningHook: u })
                            : l.t.LG9VAi;
                    case h.rbe.GUILD_MEDIA:
                        return l.t.LG9VAi;
                    case h.rbe.GUILD_ANNOUNCEMENT:
                        return l.intl.format(l.t.WFwfSD, {
                            articleURL: _.A.getArticleURL(h.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    case h.rbe.GUILD_VOICE:
                        return i?.sendMessagesDisabled
                            ? l.intl.format(l.t.Q1rwpr, { warningHook: c })
                            : l.intl.string(l.t.WQ6zpT);
                    default:
                        return l.t.WQ6zpT;
                }
            })(),
            flag: h.xBc.SEND_MESSAGES,
        },
        [h.xBc.EMBED_LINKS.toString()]: {
            title: l.intl.string(l.t["969dEL"]),
            description: r === h.rbe.GUILD_CATEGORY ? l.t["7zlUay"] : l.t.XFFhA0,
            flag: h.xBc.EMBED_LINKS,
        },
        [h.xBc.ATTACH_FILES.toString()]: {
            title: l.intl.string(l.t["3AS4UM"]),
            description: r === h.rbe.GUILD_CATEGORY ? l.t.XREf9l : l.t.WK9r7F,
            flag: h.xBc.ATTACH_FILES,
        },
        [h.xBc.ADD_REACTIONS.toString()]: {
            title: l.intl.string(l.t.yEoJAr),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t.pZT2Zh;
                    case h.rbe.GUILD_VOICE:
                        return l.t.xSSbIs;
                    default:
                        return l.t.PVjR1Y;
                }
            })(),
            flag: h.xBc.ADD_REACTIONS,
        },
        [h.xBc.USE_EXTERNAL_EMOJIS.toString()]: {
            title: l.intl.string(l.t["+bxf3H"]),
            description: r === h.rbe.GUILD_CATEGORY ? l.t.mWAbK4 : l.t.Qc5vOr,
            flag: h.xBc.USE_EXTERNAL_EMOJIS,
        },
        [h.xBc.USE_EXTERNAL_STICKERS.toString()]: {
            title: l.intl.string(l.t.ERNhYf),
            description: r === h.rbe.GUILD_CATEGORY ? l.t["39whJ4"] : l.t.VF4fZZ,
            flag: h.xBc.USE_EXTERNAL_STICKERS,
        },
        [h.xBc.MENTION_EVERYONE.toString()]: {
            title: r === h.rbe.GUILD_STAGE_VOICE ? l.intl.string(l.t.VDUAHO) : l.intl.string(l.t.Y78KGC),
            description:
                r === h.rbe.GUILD_CATEGORY ? l.t["HOhg/B"] : r === h.rbe.GUILD_STAGE_VOICE ? l.t.rZn1oO : l.t["6IUSdt"],
            flag: h.xBc.MENTION_EVERYONE,
        },
        [h.xBc.MANAGE_MESSAGES.toString()]: {
            title: l.intl.string(l.t["6lU9xM"]),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t["5R9nYh"];
                    case h.rbe.GUILD_ANNOUNCEMENT:
                        return l.intl.format(l.t.XRxOo0, {
                            articleURL: _.A.getArticleURL(h.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    default:
                        return l.t["SeA+G9"];
                }
            })(),
            flag: h.xBc.MANAGE_MESSAGES,
        },
        [h.xBc.PIN_MESSAGES.toString()]: {
            title: l.intl.string(l.t.Y5BI39),
            description: r === h.rbe.GUILD_CATEGORY ? l.t.gmbD87 : l.t["0l2EjL"],
            flag: h.xBc.PIN_MESSAGES,
        },
        [h.xBc.BYPASS_SLOWMODE.toString()]: {
            title: l.intl.string(l.t.kqcjeV),
            description: r === h.rbe.GUILD_CATEGORY ? l.t.C4t1Xu : l.t.Ha1xbw,
            flag: h.xBc.BYPASS_SLOWMODE,
        },
        [h.xBc.MANAGE_OFFICIAL_MESSAGES.toString()]: {
            title: l.intl.string(l.t.Aj9ruN),
            description: r === h.rbe.GUILD_CATEGORY ? l.t["Pf0e/Q"] : l.t.qEbw4W,
            flag: h.xBc.MANAGE_OFFICIAL_MESSAGES,
        },
        [h.xBc.READ_MESSAGE_HISTORY.toString()]: {
            title: h.kvI.GUILD_THREADS_ONLY.has(r) ? l.intl.string(l.t["0RQwtn"]) : l.intl.string(l.t.l9ufaR),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t["cJRv/g"];
                    case h.rbe.GUILD_VOICE:
                        return i?.readMessageHistoryDisabled
                            ? l.intl.format(l.t.Rx4pbJ, { warningHook: c })
                            : l.intl.string(l.t.cuMfH0);
                    case h.rbe.GUILD_FORUM:
                    case h.rbe.GUILD_MEDIA:
                        return l.t.RqCc7i;
                    default:
                        return l.t.cuMfH0;
                }
            })(),
            flag: h.xBc.READ_MESSAGE_HISTORY,
        },
        [h.xBc.SEND_TTS_MESSAGES.toString()]: {
            title: l.intl.string(l.t.mMbwh7),
            description: r === h.rbe.GUILD_CATEGORY ? l.t.b7pc9U : l.t.CpakGz,
            flag: h.xBc.SEND_TTS_MESSAGES,
        },
        [h.xBc.USE_APPLICATION_COMMANDS.toString()]: {
            title: l.intl.string(l.t.nkoPOt),
            description: r === h.rbe.GUILD_CATEGORY ? l.t["D+qW0J"] : l.t.ReG3gG,
            flag: h.xBc.USE_APPLICATION_COMMANDS,
        },
        [h.xBc.SEND_VOICE_MESSAGES.toString()]: {
            title: l.intl.string(l.t.WlWSBT),
            description: r === h.rbe.GUILD_CATEGORY ? l.t.gavGfv : l.t.BhEo9V,
            flag: h.xBc.SEND_VOICE_MESSAGES,
        },
        [h.xBc.SEND_POLLS.toString()]: {
            title: l.intl.string(l.t.UMQ7Ww),
            description: r === h.rbe.GUILD_CATEGORY ? l.t["18Ya7L"] : l.t.ckKKIO,
            flag: h.xBc.SEND_POLLS,
        },
        [h.xBc.CONNECT.toString()]: {
            title: l.intl.string(l.t.S0W8Z5),
            description: (() => {
                if (t)
                    switch (r) {
                        case h.rbe.GUILD_CATEGORY:
                            return l.t.XcrieN;
                        case h.rbe.GUILD_STAGE_VOICE:
                            return l.t.SOFNhP;
                        case h.rbe.GUILD_TEXT:
                        case h.rbe.GUILD_FORUM:
                        case h.rbe.GUILD_MEDIA:
                            return l.t.LsS8xT;
                        default:
                            return l.t.j4AyO8;
                    }
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t.stA0Hl;
                    case h.rbe.GUILD_STAGE_VOICE:
                        return l.t["G9+Qie"];
                    case h.rbe.GUILD_TEXT:
                    case h.rbe.GUILD_FORUM:
                    case h.rbe.GUILD_MEDIA:
                        return l.t["QU/Rw8"];
                    default:
                        return l.t.HvG8uR;
                }
            })(),
            flag: h.xBc.CONNECT,
        },
        [h.xBc.SPEAK.toString()]: {
            title: l.intl.string(l.t["8w1tIR"]),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t.iXhS6R;
                    case h.rbe.GUILD_STAGE_VOICE:
                        return l.t.a8n741;
                    case h.rbe.GUILD_TEXT:
                    case h.rbe.GUILD_FORUM:
                    case h.rbe.GUILD_MEDIA:
                        return l.t["+VXsJI"];
                    default:
                        return l.t["568E6d"];
                }
            })(),
            flag: h.xBc.SPEAK,
        },
        [h.xBc.STREAM.toString()]: {
            title: l.intl.string(l.t.FlNoSV),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t["ryG0/J"];
                    case h.rbe.GUILD_TEXT:
                    case h.rbe.GUILD_FORUM:
                    case h.rbe.GUILD_MEDIA:
                        return l.t.AuEQEC;
                    case h.rbe.GUILD_STAGE_VOICE:
                        return l.t.swJcN6;
                    default:
                        return l.t.RY8rIc;
                }
            })(),
            flag: h.xBc.STREAM,
        },
        [h.xBc.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: l.intl.string(l.t.rLSGeh),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t.maNzCO;
                    case h.rbe.GUILD_FORUM:
                    case h.rbe.GUILD_MEDIA:
                        return l.t.RyEwla;
                    default:
                        return l.t.qinvMU;
                }
            })(),
            flag: h.xBc.USE_EMBEDDED_ACTIVITIES,
        },
        [h.xBc.USE_EXTERNAL_APPS.toString()]: {
            title: l.intl.string(l.t["3TzAk0"]),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t.bgIY3H;
                    case h.rbe.GUILD_FORUM:
                    case h.rbe.GUILD_MEDIA:
                        return l.t.qPUPip;
                    default:
                        return l.t.czqMLp;
                }
            })(),
            flag: h.xBc.USE_EXTERNAL_APPS,
        },
        [h.xBc.USE_SOUNDBOARD.toString()]: {
            title: l.intl.string(l.t.Bco7NG),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.intl.format(l.t["0kBp/0"], { helpCenterArticle: _.A.getArticleURL(h.MVz.SOUNDBOARD) });
                    case h.rbe.GUILD_TEXT:
                    case h.rbe.GUILD_FORUM:
                    case h.rbe.GUILD_MEDIA:
                        return l.intl.format(l.t["6eYqU1"], { helpCenterArticle: _.A.getArticleURL(h.MVz.SOUNDBOARD) });
                    default:
                        return l.intl.format(l.t.GEi6Ym, { helpCenterArticle: _.A.getArticleURL(h.MVz.SOUNDBOARD) });
                }
            })(),
            flag: h.xBc.USE_SOUNDBOARD,
        },
        [h.xBc.USE_EXTERNAL_SOUNDS.toString()]: {
            title: l.intl.string(l.t.pwaVJ6),
            description: l.t.qDpPtX,
            flag: h.xBc.USE_EXTERNAL_SOUNDS,
        },
        [h.xBc.USE_VAD.toString()]: {
            title: l.intl.string(l.t["08zAV7"]),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t.fUYPly;
                    case h.rbe.GUILD_STAGE_VOICE:
                        return l.t.BJKqsW;
                    case h.rbe.GUILD_TEXT:
                    case h.rbe.GUILD_FORUM:
                    case h.rbe.GUILD_MEDIA:
                        return l.t["3GJwsc"];
                    default:
                        return l.t.s2eihY;
                }
            })(),
            flag: h.xBc.USE_VAD,
        },
        [h.xBc.PRIORITY_SPEAKER.toString()]: {
            title: l.intl.string(l.t.BVK71i),
            description: (() => {
                let e = {
                    keybind: l.intl.string(l.t.DkSwJ2),
                    onClick: () => {
                        {
                            let { openUserSettings: e } = n(766075);
                            e(d.X.KEYBINDS_PANEL);
                        }
                    },
                };
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.intl.format(l.t["8nIfDP"], e);
                    case h.rbe.GUILD_TEXT:
                    case h.rbe.GUILD_FORUM:
                    case h.rbe.GUILD_MEDIA:
                        return l.intl.format(l.t["0t6uSv"], e);
                    default:
                        return l.intl.format(l.t.UvB2KP, e);
                }
            })(),
            flag: h.xBc.PRIORITY_SPEAKER,
        },
        [h.xBc.MUTE_MEMBERS.toString()]: {
            title: l.intl.string(l.t["8EI30/"]),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t.bcuobK;
                    case h.rbe.GUILD_STAGE_VOICE:
                        return l.t.EbvdH9;
                    case h.rbe.GUILD_TEXT:
                    case h.rbe.GUILD_FORUM:
                    case h.rbe.GUILD_MEDIA:
                        return l.t.KYDG2K;
                    default:
                        return l.t.LW5C9P;
                }
            })(),
            flag: h.xBc.MUTE_MEMBERS,
        },
        [h.xBc.DEAFEN_MEMBERS.toString()]: {
            title: l.intl.string(l.t["9L47Fr"]),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t.amZ5vn;
                    case h.rbe.GUILD_TEXT:
                    case h.rbe.GUILD_FORUM:
                    case h.rbe.GUILD_MEDIA:
                        return l.t["d+i1nX"];
                    default:
                        return l.t.UAdIxo;
                }
            })(),
            flag: h.xBc.DEAFEN_MEMBERS,
        },
        [h.xBc.MOVE_MEMBERS.toString()]: {
            title: l.intl.string(l.t.YtjJPQ),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t.XmoyRD;
                    case h.rbe.GUILD_STAGE_VOICE:
                        return l.t.bizKz6;
                    case h.rbe.GUILD_TEXT:
                    case h.rbe.GUILD_FORUM:
                    case h.rbe.GUILD_MEDIA:
                        return l.t.cbdQy2;
                    default:
                        return l.t.nSD1ah;
                }
            })(),
            flag: h.xBc.MOVE_MEMBERS,
        },
        [h.xBc.REQUEST_TO_SPEAK.toString()]: {
            title: l.intl.string(l.t["5kicT2"]),
            description: r === h.rbe.GUILD_CATEGORY ? l.t.T1lMSl : l.t.uzlYFE,
            flag: h.xBc.REQUEST_TO_SPEAK,
        },
        [h.xBc.MANAGE_THREADS.toString()]: {
            title: h.kvI.GUILD_THREADS_ONLY.has(r)
                ? l.intl.string(l.t.ossiZD)
                : r === h.rbe.GUILD_CATEGORY
                  ? l.intl.string(l.t.QKe7Q3)
                  : l.intl.string(l.t.kEqgr7),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t.S31soU;
                    case h.rbe.GUILD_FORUM:
                    case h.rbe.GUILD_MEDIA:
                        return l.t["XLi/jG"];
                    default:
                        return l.t.yvan0j;
                }
            })(),
            flag: h.xBc.MANAGE_THREADS,
        },
        [h.xBc.CREATE_PUBLIC_THREADS.toString()]: {
            title: l.intl.string(l.t["25rKnX"]),
            description: r === h.rbe.GUILD_CATEGORY ? l.t["+M1yLj"] : l.t["5SDtGB"],
            flag: h.xBc.CREATE_PUBLIC_THREADS,
        },
        [h.xBc.CREATE_PRIVATE_THREADS.toString()]: {
            title: l.intl.string(l.t.QwbTSa),
            description: r === h.rbe.GUILD_CATEGORY ? l.t["hBS/zn"] : l.t.Chg2zd,
            flag: h.xBc.CREATE_PRIVATE_THREADS,
        },
        [h.xBc.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: h.kvI.GUILD_THREADS_ONLY.has(r)
                ? l.intl.string(l.t.fqhqWm)
                : r === h.rbe.GUILD_CATEGORY
                  ? l.intl.string(l.t["5QlVGy"])
                  : l.intl.string(l.t.fTE74g),
            description: (() => {
                switch (r) {
                    case h.rbe.GUILD_CATEGORY:
                        return l.t.DlIVcN;
                    case h.rbe.GUILD_FORUM:
                    case h.rbe.GUILD_MEDIA:
                        return l.t.XTnrPH;
                    default:
                        return l.t.xHO6Me;
                }
            })(),
            flag: h.xBc.SEND_MESSAGES_IN_THREADS,
        },
        [h.xBc.MANAGE_EVENTS.toString()]: {
            title: l.intl.string(l.t.HIgA5a),
            description: r === h.rbe.GUILD_CATEGORY ? l.t.CP2sz4 : l.t["4pO/TY"],
            flag: h.xBc.MANAGE_EVENTS,
        },
        [h.xBc.CREATE_EVENTS.toString()]: {
            title: l.intl.string(l.t.qyjZua),
            description: r === h.rbe.GUILD_CATEGORY ? l.t.XpibmC : l.t.sPoBLa,
            flag: h.xBc.CREATE_EVENTS,
        },
        [h.xBc.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: l.intl.string(l.t.VBwkUf),
            description: i?.enableHangoutWindow ? l.t.CYcJ6H : l.t.C6BzXx,
            flag: h.xBc.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
