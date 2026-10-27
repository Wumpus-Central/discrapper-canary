e.d(r, { T6: () => a, oO: () => D, $N: () => U, mW: () => L, t0: () => T });
var i,
    E,
    n = e(477900);
e(582128);
var c = e(834730),
    s = e(695366),
    S = e(105292);
function A(t, r) {
    return (0, n.jsxs)(
        c.E,
        {
            color: "text-feedback-critical",
            style: { display: "flex", gap: "4px", margin: "8px 0 4px 0", alignItems: "center" },
            variant: "text-sm/normal",
            children: [(0, n.jsx)(s.E, { size: "custom", color: "currentColor", width: 14, height: 14 }), t],
        },
        r,
    );
}
function _(t, r) {
    return (0, n.jsxs)(
        c.E,
        {
            color: "text-feedback-critical",
            style: { display: "flex", gap: "4px", margin: "8px 0 4px 0", alignItems: "center" },
            variant: "text-sm/normal",
            children: [(0, n.jsx)(s.E, { size: "custom", color: "currentColor", width: 14, height: 14 }), t],
        },
        r,
    );
}
var l = e(780964),
    I = e(975571),
    G = e(652215),
    a =
        (((i = {})[(i.EMPTY_STATE = 0)] = "EMPTY_STATE"),
        (i[(i.ADMINISTRATOR = 1)] = "ADMINISTRATOR"),
        (i[(i.ROLE = 2)] = "ROLE"),
        (i[(i.OWNER = 3)] = "OWNER"),
        (i[(i.MEMBER = 4)] = "MEMBER"),
        (i[(i.USER = 5)] = "USER"),
        (i[(i.GUILD = 6)] = "GUILD"),
        (i[(i.APP_CHANNEL_APP = 7)] = "APP_CHANNEL_APP"),
        i),
    D =
        (((E = {})[(E.ROLES = 0)] = "ROLES"),
        (E[(E.MEMBERS = 1)] = "MEMBERS"),
        (E[(E.USERS = 2)] = "USERS"),
        (E[(E.GUILDS = 3)] = "GUILDS"),
        E);
let U = 20,
    T = "channelPermissionSettingsAdvancedModeOn";
function L(t, r, i) {
    let E = t.type;
    return {
        [G.xBc.VIEW_CHANNEL.toString()]: {
            title: E === G.rbe.GUILD_CATEGORY ? S.intl.string(S.t.uV83yi) : S.intl.string(S.t["W/A4Qp"]),
            description: (() => {
                if (r)
                    switch (E) {
                        case G.rbe.GUILD_CATEGORY:
                            return S.t["o/vBzj"];
                        case G.rbe.GUILD_VOICE:
                        case G.rbe.GUILD_STAGE_VOICE:
                            return S.t.ejL1Wo;
                        default:
                            return S.t["3jG0Bo"];
                    }
                return E === G.rbe.GUILD_CATEGORY ? S.t.SzosGs : S.t.M2iEy3;
            })(),
            flag: G.xBc.VIEW_CHANNEL,
        },
        [G.xBc.MANAGE_CHANNELS.toString()]: {
            title: E === G.rbe.GUILD_CATEGORY ? S.intl.string(S.t["9qLtWs"]) : S.intl.string(S.t.nAw15L),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t.KJ2JnG;
                    case G.rbe.GUILD_VOICE:
                        return S.t["+gl2ne"];
                    case G.rbe.GUILD_STAGE_VOICE:
                        return S.t.SDX669;
                    default:
                        return S.t.ydL28i;
                }
            })(),
            flag: G.xBc.MANAGE_CHANNELS,
        },
        [G.xBc.MANAGE_ROLES.toString()]: {
            title: S.intl.string(S.t.ICb6am),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t.TyyCMD;
                    case G.rbe.GUILD_STAGE_VOICE:
                        return S.t.hcw4mx;
                    default:
                        return S.t.hOMXOv;
                }
            })(),
            flag: G.xBc.MANAGE_ROLES,
        },
        [G.xBc.MANAGE_WEBHOOKS.toString()]: {
            title: S.intl.string(S.t["/ADKmM"]),
            description: E === G.rbe.GUILD_CATEGORY ? S.t["K5+ZZ7"] : S.t.CYBZry,
            flag: G.xBc.MANAGE_WEBHOOKS,
        },
        [G.xBc.CREATE_INSTANT_INVITE.toString()]: {
            title: S.intl.string(S.t.zJrgTG),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t["3YFAAX"];
                    case G.rbe.GUILD_VOICE:
                    case G.rbe.GUILD_STAGE_VOICE:
                        return S.t.lUCs1n;
                    default:
                        return S.t.q4g2aI;
                }
            })(),
            flag: G.xBc.CREATE_INSTANT_INVITE,
        },
        [G.xBc.SEND_MESSAGES.toString()]: {
            title: G.kvI.GUILD_THREADS_ONLY.has(E)
                ? S.intl.string(S.t.nJwAHX)
                : E === G.rbe.GUILD_CATEGORY
                  ? S.intl.string(S.t.S1VOwd)
                  : S.intl.string(S.t.T32rkC),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t.IjeLuu;
                    case G.rbe.GUILD_FORUM:
                        return i?.createPostsDisabled && !t.isMediaChannel()
                            ? S.intl.format(S.t.zlXUVY, { warningHook: A })
                            : S.t.LG9VAi;
                    case G.rbe.GUILD_MEDIA:
                        return S.t.LG9VAi;
                    case G.rbe.GUILD_ANNOUNCEMENT:
                        return S.intl.format(S.t.WFwfSD, {
                            articleURL: I.A.getArticleURL(G.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    case G.rbe.GUILD_VOICE:
                        return i?.sendMessagesDisabled
                            ? S.intl.format(S.t.Q1rwpr, { warningHook: _ })
                            : S.intl.string(S.t.WQ6zpT);
                    default:
                        return S.t.WQ6zpT;
                }
            })(),
            flag: G.xBc.SEND_MESSAGES,
        },
        [G.xBc.EMBED_LINKS.toString()]: {
            title: S.intl.string(S.t["969dEL"]),
            description: E === G.rbe.GUILD_CATEGORY ? S.t["7zlUay"] : S.t.XFFhA0,
            flag: G.xBc.EMBED_LINKS,
        },
        [G.xBc.ATTACH_FILES.toString()]: {
            title: S.intl.string(S.t["3AS4UM"]),
            description: E === G.rbe.GUILD_CATEGORY ? S.t.XREf9l : S.t.WK9r7F,
            flag: G.xBc.ATTACH_FILES,
        },
        [G.xBc.ADD_REACTIONS.toString()]: {
            title: S.intl.string(S.t.yEoJAr),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t.pZT2Zh;
                    case G.rbe.GUILD_VOICE:
                        return S.t.xSSbIs;
                    default:
                        return S.t.PVjR1Y;
                }
            })(),
            flag: G.xBc.ADD_REACTIONS,
        },
        [G.xBc.USE_EXTERNAL_EMOJIS.toString()]: {
            title: S.intl.string(S.t["+bxf3H"]),
            description: E === G.rbe.GUILD_CATEGORY ? S.t.mWAbK4 : S.t.Qc5vOr,
            flag: G.xBc.USE_EXTERNAL_EMOJIS,
        },
        [G.xBc.USE_EXTERNAL_STICKERS.toString()]: {
            title: S.intl.string(S.t.ERNhYf),
            description: E === G.rbe.GUILD_CATEGORY ? S.t["39whJ4"] : S.t.VF4fZZ,
            flag: G.xBc.USE_EXTERNAL_STICKERS,
        },
        [G.xBc.MENTION_EVERYONE.toString()]: {
            title: E === G.rbe.GUILD_STAGE_VOICE ? S.intl.string(S.t.VDUAHO) : S.intl.string(S.t.Y78KGC),
            description:
                E === G.rbe.GUILD_CATEGORY ? S.t["HOhg/B"] : E === G.rbe.GUILD_STAGE_VOICE ? S.t.rZn1oO : S.t["6IUSdt"],
            flag: G.xBc.MENTION_EVERYONE,
        },
        [G.xBc.MANAGE_MESSAGES.toString()]: {
            title: S.intl.string(S.t["6lU9xM"]),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t["5R9nYh"];
                    case G.rbe.GUILD_ANNOUNCEMENT:
                        return S.intl.format(S.t.XRxOo0, {
                            articleURL: I.A.getArticleURL(G.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    default:
                        return S.t["SeA+G9"];
                }
            })(),
            flag: G.xBc.MANAGE_MESSAGES,
        },
        [G.xBc.PIN_MESSAGES.toString()]: {
            title: S.intl.string(S.t.Y5BI39),
            description: E === G.rbe.GUILD_CATEGORY ? S.t.gmbD87 : S.t["0l2EjL"],
            flag: G.xBc.PIN_MESSAGES,
        },
        [G.xBc.BYPASS_SLOWMODE.toString()]: {
            title: S.intl.string(S.t.kqcjeV),
            description: E === G.rbe.GUILD_CATEGORY ? S.t.C4t1Xu : S.t.Ha1xbw,
            flag: G.xBc.BYPASS_SLOWMODE,
        },
        [G.xBc.MANAGE_OFFICIAL_MESSAGES.toString()]: {
            title: S.intl.string(S.t.Aj9ruN),
            description: E === G.rbe.GUILD_CATEGORY ? S.t["Pf0e/Q"] : S.t.qEbw4W,
            flag: G.xBc.MANAGE_OFFICIAL_MESSAGES,
        },
        [G.xBc.READ_MESSAGE_HISTORY.toString()]: {
            title: G.kvI.GUILD_THREADS_ONLY.has(E) ? S.intl.string(S.t["0RQwtn"]) : S.intl.string(S.t.l9ufaR),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t["cJRv/g"];
                    case G.rbe.GUILD_VOICE:
                        return i?.readMessageHistoryDisabled
                            ? S.intl.format(S.t.Rx4pbJ, { warningHook: _ })
                            : S.intl.string(S.t.cuMfH0);
                    case G.rbe.GUILD_FORUM:
                    case G.rbe.GUILD_MEDIA:
                        return S.t.RqCc7i;
                    default:
                        return S.t.cuMfH0;
                }
            })(),
            flag: G.xBc.READ_MESSAGE_HISTORY,
        },
        [G.xBc.SEND_TTS_MESSAGES.toString()]: {
            title: S.intl.string(S.t.mMbwh7),
            description: E === G.rbe.GUILD_CATEGORY ? S.t.b7pc9U : S.t.CpakGz,
            flag: G.xBc.SEND_TTS_MESSAGES,
        },
        [G.xBc.USE_APPLICATION_COMMANDS.toString()]: {
            title: S.intl.string(S.t.nkoPOt),
            description: E === G.rbe.GUILD_CATEGORY ? S.t["D+qW0J"] : S.t.ReG3gG,
            flag: G.xBc.USE_APPLICATION_COMMANDS,
        },
        [G.xBc.SEND_VOICE_MESSAGES.toString()]: {
            title: S.intl.string(S.t.WlWSBT),
            description: E === G.rbe.GUILD_CATEGORY ? S.t.gavGfv : S.t.BhEo9V,
            flag: G.xBc.SEND_VOICE_MESSAGES,
        },
        [G.xBc.SEND_POLLS.toString()]: {
            title: S.intl.string(S.t.UMQ7Ww),
            description: E === G.rbe.GUILD_CATEGORY ? S.t["18Ya7L"] : S.t.ckKKIO,
            flag: G.xBc.SEND_POLLS,
        },
        [G.xBc.CONNECT.toString()]: {
            title: S.intl.string(S.t.S0W8Z5),
            description: (() => {
                if (r)
                    switch (E) {
                        case G.rbe.GUILD_CATEGORY:
                            return S.t.XcrieN;
                        case G.rbe.GUILD_STAGE_VOICE:
                            return S.t.SOFNhP;
                        case G.rbe.GUILD_TEXT:
                        case G.rbe.GUILD_FORUM:
                        case G.rbe.GUILD_MEDIA:
                            return S.t.LsS8xT;
                        default:
                            return S.t.j4AyO8;
                    }
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t.stA0Hl;
                    case G.rbe.GUILD_STAGE_VOICE:
                        return S.t["G9+Qie"];
                    case G.rbe.GUILD_TEXT:
                    case G.rbe.GUILD_FORUM:
                    case G.rbe.GUILD_MEDIA:
                        return S.t["QU/Rw8"];
                    default:
                        return S.t.HvG8uR;
                }
            })(),
            flag: G.xBc.CONNECT,
        },
        [G.xBc.SPEAK.toString()]: {
            title: S.intl.string(S.t["8w1tIR"]),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t.iXhS6R;
                    case G.rbe.GUILD_STAGE_VOICE:
                        return S.t.a8n741;
                    case G.rbe.GUILD_TEXT:
                    case G.rbe.GUILD_FORUM:
                    case G.rbe.GUILD_MEDIA:
                        return S.t["+VXsJI"];
                    default:
                        return S.t["568E6d"];
                }
            })(),
            flag: G.xBc.SPEAK,
        },
        [G.xBc.STREAM.toString()]: {
            title: S.intl.string(S.t.FlNoSV),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t["ryG0/J"];
                    case G.rbe.GUILD_TEXT:
                    case G.rbe.GUILD_FORUM:
                    case G.rbe.GUILD_MEDIA:
                        return S.t.AuEQEC;
                    case G.rbe.GUILD_STAGE_VOICE:
                        return S.t.swJcN6;
                    default:
                        return S.t.RY8rIc;
                }
            })(),
            flag: G.xBc.STREAM,
        },
        [G.xBc.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: S.intl.string(S.t.rLSGeh),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t.maNzCO;
                    case G.rbe.GUILD_FORUM:
                    case G.rbe.GUILD_MEDIA:
                        return S.t.RyEwla;
                    default:
                        return S.t.qinvMU;
                }
            })(),
            flag: G.xBc.USE_EMBEDDED_ACTIVITIES,
        },
        [G.xBc.USE_EXTERNAL_APPS.toString()]: {
            title: S.intl.string(S.t["3TzAk0"]),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t.bgIY3H;
                    case G.rbe.GUILD_FORUM:
                    case G.rbe.GUILD_MEDIA:
                        return S.t.qPUPip;
                    default:
                        return S.t.czqMLp;
                }
            })(),
            flag: G.xBc.USE_EXTERNAL_APPS,
        },
        [G.xBc.USE_SOUNDBOARD.toString()]: {
            title: S.intl.string(S.t.Bco7NG),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.intl.format(S.t["0kBp/0"], { helpCenterArticle: I.A.getArticleURL(G.MVz.SOUNDBOARD) });
                    case G.rbe.GUILD_TEXT:
                    case G.rbe.GUILD_FORUM:
                    case G.rbe.GUILD_MEDIA:
                        return S.intl.format(S.t["6eYqU1"], { helpCenterArticle: I.A.getArticleURL(G.MVz.SOUNDBOARD) });
                    default:
                        return S.intl.format(S.t.GEi6Ym, { helpCenterArticle: I.A.getArticleURL(G.MVz.SOUNDBOARD) });
                }
            })(),
            flag: G.xBc.USE_SOUNDBOARD,
        },
        [G.xBc.USE_EXTERNAL_SOUNDS.toString()]: {
            title: S.intl.string(S.t.pwaVJ6),
            description: S.t.qDpPtX,
            flag: G.xBc.USE_EXTERNAL_SOUNDS,
        },
        [G.xBc.USE_VAD.toString()]: {
            title: S.intl.string(S.t["08zAV7"]),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t.fUYPly;
                    case G.rbe.GUILD_STAGE_VOICE:
                        return S.t.BJKqsW;
                    case G.rbe.GUILD_TEXT:
                    case G.rbe.GUILD_FORUM:
                    case G.rbe.GUILD_MEDIA:
                        return S.t["3GJwsc"];
                    default:
                        return S.t.s2eihY;
                }
            })(),
            flag: G.xBc.USE_VAD,
        },
        [G.xBc.PRIORITY_SPEAKER.toString()]: {
            title: S.intl.string(S.t.BVK71i),
            description: (() => {
                let t = {
                    keybind: S.intl.string(S.t.DkSwJ2),
                    onClick: () => {
                        {
                            let { openUserSettings: t } = e(766075);
                            t(l.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY);
                        }
                    },
                };
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.intl.format(S.t["8nIfDP"], t);
                    case G.rbe.GUILD_TEXT:
                    case G.rbe.GUILD_FORUM:
                    case G.rbe.GUILD_MEDIA:
                        return S.intl.format(S.t["0t6uSv"], t);
                    default:
                        return S.intl.format(S.t.UvB2KP, t);
                }
            })(),
            flag: G.xBc.PRIORITY_SPEAKER,
        },
        [G.xBc.MUTE_MEMBERS.toString()]: {
            title: S.intl.string(S.t["8EI30/"]),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t.bcuobK;
                    case G.rbe.GUILD_STAGE_VOICE:
                        return S.t.EbvdH9;
                    case G.rbe.GUILD_TEXT:
                    case G.rbe.GUILD_FORUM:
                    case G.rbe.GUILD_MEDIA:
                        return S.t.KYDG2K;
                    default:
                        return S.t.LW5C9P;
                }
            })(),
            flag: G.xBc.MUTE_MEMBERS,
        },
        [G.xBc.DEAFEN_MEMBERS.toString()]: {
            title: S.intl.string(S.t["9L47Fr"]),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t.amZ5vn;
                    case G.rbe.GUILD_TEXT:
                    case G.rbe.GUILD_FORUM:
                    case G.rbe.GUILD_MEDIA:
                        return S.t["d+i1nX"];
                    default:
                        return S.t.UAdIxo;
                }
            })(),
            flag: G.xBc.DEAFEN_MEMBERS,
        },
        [G.xBc.MOVE_MEMBERS.toString()]: {
            title: S.intl.string(S.t.YtjJPQ),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t.XmoyRD;
                    case G.rbe.GUILD_STAGE_VOICE:
                        return S.t.bizKz6;
                    case G.rbe.GUILD_TEXT:
                    case G.rbe.GUILD_FORUM:
                    case G.rbe.GUILD_MEDIA:
                        return S.t.cbdQy2;
                    default:
                        return S.t.nSD1ah;
                }
            })(),
            flag: G.xBc.MOVE_MEMBERS,
        },
        [G.xBc.REQUEST_TO_SPEAK.toString()]: {
            title: S.intl.string(S.t["5kicT2"]),
            description: E === G.rbe.GUILD_CATEGORY ? S.t.T1lMSl : S.t.uzlYFE,
            flag: G.xBc.REQUEST_TO_SPEAK,
        },
        [G.xBc.MANAGE_THREADS.toString()]: {
            title: G.kvI.GUILD_THREADS_ONLY.has(E)
                ? S.intl.string(S.t.ossiZD)
                : E === G.rbe.GUILD_CATEGORY
                  ? S.intl.string(S.t.QKe7Q3)
                  : S.intl.string(S.t.kEqgr7),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t.S31soU;
                    case G.rbe.GUILD_FORUM:
                    case G.rbe.GUILD_MEDIA:
                        return S.t["XLi/jG"];
                    default:
                        return S.t.yvan0j;
                }
            })(),
            flag: G.xBc.MANAGE_THREADS,
        },
        [G.xBc.CREATE_PUBLIC_THREADS.toString()]: {
            title: S.intl.string(S.t["25rKnX"]),
            description: E === G.rbe.GUILD_CATEGORY ? S.t["+M1yLj"] : S.t["5SDtGB"],
            flag: G.xBc.CREATE_PUBLIC_THREADS,
        },
        [G.xBc.CREATE_PRIVATE_THREADS.toString()]: {
            title: S.intl.string(S.t.QwbTSa),
            description: E === G.rbe.GUILD_CATEGORY ? S.t["hBS/zn"] : S.t.Chg2zd,
            flag: G.xBc.CREATE_PRIVATE_THREADS,
        },
        [G.xBc.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: G.kvI.GUILD_THREADS_ONLY.has(E)
                ? S.intl.string(S.t.fqhqWm)
                : E === G.rbe.GUILD_CATEGORY
                  ? S.intl.string(S.t["5QlVGy"])
                  : S.intl.string(S.t.fTE74g),
            description: (() => {
                switch (E) {
                    case G.rbe.GUILD_CATEGORY:
                        return S.t.DlIVcN;
                    case G.rbe.GUILD_FORUM:
                    case G.rbe.GUILD_MEDIA:
                        return S.t.XTnrPH;
                    default:
                        return S.t.xHO6Me;
                }
            })(),
            flag: G.xBc.SEND_MESSAGES_IN_THREADS,
        },
        [G.xBc.MANAGE_EVENTS.toString()]: {
            title: S.intl.string(S.t.HIgA5a),
            description: E === G.rbe.GUILD_CATEGORY ? S.t.CP2sz4 : S.t["4pO/TY"],
            flag: G.xBc.MANAGE_EVENTS,
        },
        [G.xBc.CREATE_EVENTS.toString()]: {
            title: S.intl.string(S.t.qyjZua),
            description: E === G.rbe.GUILD_CATEGORY ? S.t.XpibmC : S.t.sPoBLa,
            flag: G.xBc.CREATE_EVENTS,
        },
        [G.xBc.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: S.intl.string(S.t.VBwkUf),
            description: i?.enableHangoutWindow ? S.t.CYcJ6H : S.t.C6BzXx,
            flag: G.xBc.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
