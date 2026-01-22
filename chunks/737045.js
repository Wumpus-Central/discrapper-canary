n.d(t, {
    $N: () => d,
    T6: () => c,
    mW: () => p,
    oO: () => u,
    t0: () => f,
});
var r = n(718574),
    i = n(926983),
    a = n(780964),
    s = n(975571),
    o = n(652215),
    l = n(985018),
    c = (function (e) {
        return (
            (e[(e.EMPTY_STATE = 0)] = "EMPTY_STATE"),
            (e[(e.ADMINISTRATOR = 1)] = "ADMINISTRATOR"),
            (e[(e.ROLE = 2)] = "ROLE"),
            (e[(e.OWNER = 3)] = "OWNER"),
            (e[(e.MEMBER = 4)] = "MEMBER"),
            (e[(e.USER = 5)] = "USER"),
            (e[(e.GUILD = 6)] = "GUILD"),
            e
        );
    })({}),
    u = (function (e) {
        return (
            (e[(e.ROLES = 0)] = "ROLES"),
            (e[(e.MEMBERS = 1)] = "MEMBERS"),
            (e[(e.USERS = 2)] = "USERS"),
            (e[(e.GUILDS = 3)] = "GUILDS"),
            e
        );
    })({});
let d = 20,
    f = "channelPermissionSettingsAdvancedModeOn";
function p(e, t, c) {
    let u = e.type;
    return {
        [o.xBc.VIEW_CHANNEL.toString()]: {
            title: u === o.rbe.GUILD_CATEGORY ? l.intl.string(l.t.uV83yi) : l.intl.string(l.t["W/A4Qp"]),
            description: (() => {
                if (t)
                    switch (u) {
                        case o.rbe.GUILD_CATEGORY:
                            return l.t["o/vBzj"];
                        case o.rbe.GUILD_VOICE:
                        case o.rbe.GUILD_STAGE_VOICE:
                            return l.t.ejL1Wo;
                        default:
                            return l.t["3jG0Bo"];
                    }
                return u === o.rbe.GUILD_CATEGORY ? l.t.SzosGs : l.t.M2iEy3;
            })(),
            flag: o.xBc.VIEW_CHANNEL,
        },
        [o.xBc.MANAGE_CHANNELS.toString()]: {
            title: u === o.rbe.GUILD_CATEGORY ? l.intl.string(l.t["9qLtWs"]) : l.intl.string(l.t.nAw15L),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t.KJ2JnG;
                    case o.rbe.GUILD_VOICE:
                        return l.t["+gl2ne"];
                    case o.rbe.GUILD_STAGE_VOICE:
                        return l.t.SDX669;
                    default:
                        return l.t.ydL28i;
                }
            })(),
            flag: o.xBc.MANAGE_CHANNELS,
        },
        [o.xBc.MANAGE_ROLES.toString()]: {
            title: l.intl.string(l.t.ICb6am),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t.TyyCMD;
                    case o.rbe.GUILD_STAGE_VOICE:
                        return l.t.hcw4mx;
                    default:
                        return l.t.hOMXOv;
                }
            })(),
            flag: o.xBc.MANAGE_ROLES,
        },
        [o.xBc.MANAGE_WEBHOOKS.toString()]: {
            title: l.intl.string(l.t["/ADKmM"]),
            description: u === o.rbe.GUILD_CATEGORY ? l.t["K5+ZZ7"] : l.t.CYBZry,
            flag: o.xBc.MANAGE_WEBHOOKS,
        },
        [o.xBc.CREATE_INSTANT_INVITE.toString()]: {
            title: l.intl.string(l.t.zJrgTG),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t["3YFAAX"];
                    case o.rbe.GUILD_VOICE:
                    case o.rbe.GUILD_STAGE_VOICE:
                        return l.t.lUCs1n;
                    default:
                        return l.t.q4g2aI;
                }
            })(),
            flag: o.xBc.CREATE_INSTANT_INVITE,
        },
        [o.xBc.SEND_MESSAGES.toString()]: {
            title: o.kvI.GUILD_THREADS_ONLY.has(u)
                ? l.intl.string(l.t.nJwAHX)
                : u === o.rbe.GUILD_CATEGORY
                  ? l.intl.string(l.t.S1VOwd)
                  : l.intl.string(l.t.T32rkC),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t.IjeLuu;
                    case o.rbe.GUILD_FORUM:
                        return (null == c ? void 0 : c.createPostsDisabled) && !e.isMediaChannel()
                            ? r.A.getForumChannelPermissionText()
                            : l.t.LG9VAi;
                    case o.rbe.GUILD_MEDIA:
                        return l.t.LG9VAi;
                    case o.rbe.GUILD_ANNOUNCEMENT:
                        return l.intl.format(l.t.WFwfSD, {
                            articleURL: s.A.getArticleURL(o.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    case o.rbe.GUILD_VOICE:
                        return i.A.getTextInVoiceSendMessageChannelPermissionText(
                            null == c ? void 0 : c.sendMessagesDisabled,
                        );
                    default:
                        return l.t.WQ6zpT;
                }
            })(),
            flag: o.xBc.SEND_MESSAGES,
        },
        [o.xBc.EMBED_LINKS.toString()]: {
            title: l.intl.string(l.t["969dEL"]),
            description: u === o.rbe.GUILD_CATEGORY ? l.t["7zlUay"] : l.t.XFFhA0,
            flag: o.xBc.EMBED_LINKS,
        },
        [o.xBc.ATTACH_FILES.toString()]: {
            title: l.intl.string(l.t["3AS4UM"]),
            description: u === o.rbe.GUILD_CATEGORY ? l.t.XREf9l : l.t.WK9r7F,
            flag: o.xBc.ATTACH_FILES,
        },
        [o.xBc.ADD_REACTIONS.toString()]: {
            title: l.intl.string(l.t.yEoJAr),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t.pZT2Zh;
                    case o.rbe.GUILD_VOICE:
                        return l.t.xSSbIs;
                    default:
                        return l.t.PVjR1Y;
                }
            })(),
            flag: o.xBc.ADD_REACTIONS,
        },
        [o.xBc.USE_EXTERNAL_EMOJIS.toString()]: {
            title: l.intl.string(l.t["+bxf3H"]),
            description: u === o.rbe.GUILD_CATEGORY ? l.t.mWAbK4 : l.t.Qc5vOr,
            flag: o.xBc.USE_EXTERNAL_EMOJIS,
        },
        [o.xBc.USE_EXTERNAL_STICKERS.toString()]: {
            title: l.intl.string(l.t.ERNhYf),
            description: u === o.rbe.GUILD_CATEGORY ? l.t["39whJ4"] : l.t.VF4fZZ,
            flag: o.xBc.USE_EXTERNAL_STICKERS,
        },
        [o.xBc.MENTION_EVERYONE.toString()]: {
            title:
                u === o.rbe.GUILD_STAGE_VOICE
                    ? l.intl.string(l.t.VDUAHO)
                    : (null == c ? void 0 : c.inGameMentionsExperiment)
                      ? l.intl.string(l.t.lEO7Wr)
                      : l.intl.string(l.t.Y78KGC),
            description:
                u === o.rbe.GUILD_CATEGORY
                    ? l.t["HOhg/B"]
                    : u === o.rbe.GUILD_STAGE_VOICE
                      ? l.t.rZn1oO
                      : (null == c ? void 0 : c.inGameMentionsExperiment)
                        ? l.t.wdHpIC
                        : l.t["6IUSdt"],
            flag: o.xBc.MENTION_EVERYONE,
        },
        [o.xBc.MANAGE_MESSAGES.toString()]: {
            title: l.intl.string(l.t["6lU9xM"]),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t["5R9nYh"];
                    case o.rbe.GUILD_ANNOUNCEMENT:
                        return l.intl.format(l.t.XRxOo0, {
                            articleURL: s.A.getArticleURL(o.MVz.ANNOUNCEMENT_CHANNELS),
                        });
                    default:
                        return l.t["SeA+G9"];
                }
            })(),
            flag: o.xBc.MANAGE_MESSAGES,
        },
        [o.xBc.PIN_MESSAGES.toString()]: {
            title: l.intl.string(l.t.Y5BI39),
            description: u === o.rbe.GUILD_CATEGORY ? l.t.gmbD87 : l.t["0l2EjL"],
            flag: o.xBc.PIN_MESSAGES,
        },
        [o.xBc.BYPASS_SLOWMODE.toString()]: {
            title: l.intl.string(l.t.kqcjeV),
            description: u === o.rbe.GUILD_CATEGORY ? l.t.C4t1Xu : l.t.Ha1xbw,
            flag: o.xBc.BYPASS_SLOWMODE,
        },
        [o.xBc.READ_MESSAGE_HISTORY.toString()]: {
            title: o.kvI.GUILD_THREADS_ONLY.has(u) ? l.intl.string(l.t["0RQwtn"]) : l.intl.string(l.t.l9ufaR),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t["cJRv/g"];
                    case o.rbe.GUILD_VOICE:
                        return i.A.getTextInVoiceReadMessageHistoryChannelPermissionText(
                            null == c ? void 0 : c.readMessageHistoryDisabled,
                        );
                    case o.rbe.GUILD_FORUM:
                    case o.rbe.GUILD_MEDIA:
                        return l.t.RqCc7i;
                    default:
                        return l.t.cuMfH0;
                }
            })(),
            flag: o.xBc.READ_MESSAGE_HISTORY,
        },
        [o.xBc.SEND_TTS_MESSAGES.toString()]: {
            title: l.intl.string(l.t.mMbwh7),
            description: u === o.rbe.GUILD_CATEGORY ? l.t.b7pc9U : l.t.CpakGz,
            flag: o.xBc.SEND_TTS_MESSAGES,
        },
        [o.xBc.USE_APPLICATION_COMMANDS.toString()]: {
            title: l.intl.string(l.t.nkoPOt),
            description: u === o.rbe.GUILD_CATEGORY ? l.t["D+qW0J"] : l.t.ReG3gG,
            flag: o.xBc.USE_APPLICATION_COMMANDS,
        },
        [o.xBc.SEND_VOICE_MESSAGES.toString()]: {
            title: l.intl.string(l.t.WlWSBT),
            description: u === o.rbe.GUILD_CATEGORY ? l.t.gavGfv : l.t.BhEo9V,
            flag: o.xBc.SEND_VOICE_MESSAGES,
        },
        [o.xBc.SEND_POLLS.toString()]: {
            title: l.intl.string(l.t.UMQ7Ww),
            description: u === o.rbe.GUILD_CATEGORY ? l.t["18Ya7L"] : l.t.ckKKIO,
            flag: o.xBc.SEND_POLLS,
        },
        [o.xBc.CONNECT.toString()]: {
            title: l.intl.string(l.t.S0W8Z5),
            description: (() => {
                if (t)
                    switch (u) {
                        case o.rbe.GUILD_CATEGORY:
                            return l.t.XcrieN;
                        case o.rbe.GUILD_STAGE_VOICE:
                            return l.t.SOFNhP;
                        case o.rbe.GUILD_TEXT:
                        case o.rbe.GUILD_FORUM:
                        case o.rbe.GUILD_MEDIA:
                            return l.t.LsS8xT;
                        default:
                            return l.t.j4AyO8;
                    }
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t.stA0Hl;
                    case o.rbe.GUILD_STAGE_VOICE:
                        return l.t["G9+Qie"];
                    case o.rbe.GUILD_TEXT:
                    case o.rbe.GUILD_FORUM:
                    case o.rbe.GUILD_MEDIA:
                        return l.t["QU/Rw8"];
                    default:
                        return l.t.HvG8uR;
                }
            })(),
            flag: o.xBc.CONNECT,
        },
        [o.xBc.SPEAK.toString()]: {
            title: l.intl.string(l.t["8w1tIR"]),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t.iXhS6R;
                    case o.rbe.GUILD_STAGE_VOICE:
                        return l.t.a8n741;
                    case o.rbe.GUILD_TEXT:
                    case o.rbe.GUILD_FORUM:
                    case o.rbe.GUILD_MEDIA:
                        return l.t["+VXsJI"];
                    default:
                        return l.t["568E6d"];
                }
            })(),
            flag: o.xBc.SPEAK,
        },
        [o.xBc.STREAM.toString()]: {
            title: l.intl.string(l.t.FlNoSV),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t["ryG0/J"];
                    case o.rbe.GUILD_TEXT:
                    case o.rbe.GUILD_FORUM:
                    case o.rbe.GUILD_MEDIA:
                        return l.t.AuEQEC;
                    case o.rbe.GUILD_STAGE_VOICE:
                        return l.t.swJcN6;
                    default:
                        return l.t.RY8rIc;
                }
            })(),
            flag: o.xBc.STREAM,
        },
        [o.xBc.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: l.intl.string(l.t.rLSGeh),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t.maNzCO;
                    case o.rbe.GUILD_FORUM:
                    case o.rbe.GUILD_MEDIA:
                        return l.t.RyEwla;
                    default:
                        return l.t.qinvMU;
                }
            })(),
            flag: o.xBc.USE_EMBEDDED_ACTIVITIES,
        },
        [o.xBc.USE_EXTERNAL_APPS.toString()]: {
            title: l.intl.string(l.t["3TzAk0"]),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t.bgIY3H;
                    case o.rbe.GUILD_FORUM:
                    case o.rbe.GUILD_MEDIA:
                        return l.t.qPUPip;
                    default:
                        return l.t.czqMLp;
                }
            })(),
            flag: o.xBc.USE_EXTERNAL_APPS,
        },
        [o.xBc.USE_SOUNDBOARD.toString()]: {
            title: l.intl.string(l.t.Bco7NG),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.intl.format(l.t["0kBp/0"], { helpCenterArticle: s.A.getArticleURL(o.MVz.SOUNDBOARD) });
                    case o.rbe.GUILD_TEXT:
                    case o.rbe.GUILD_FORUM:
                    case o.rbe.GUILD_MEDIA:
                        return l.intl.format(l.t["6eYqU1"], { helpCenterArticle: s.A.getArticleURL(o.MVz.SOUNDBOARD) });
                    default:
                        return l.intl.format(l.t.GEi6Ym, { helpCenterArticle: s.A.getArticleURL(o.MVz.SOUNDBOARD) });
                }
            })(),
            flag: o.xBc.USE_SOUNDBOARD,
        },
        [o.xBc.USE_EXTERNAL_SOUNDS.toString()]: {
            title: l.intl.string(l.t.pwaVJ6),
            description: l.t.qDpPtX,
            flag: o.xBc.USE_EXTERNAL_SOUNDS,
        },
        [o.xBc.USE_VAD.toString()]: {
            title: l.intl.string(l.t["08zAV7"]),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t.fUYPly;
                    case o.rbe.GUILD_STAGE_VOICE:
                        return l.t.BJKqsW;
                    case o.rbe.GUILD_TEXT:
                    case o.rbe.GUILD_FORUM:
                    case o.rbe.GUILD_MEDIA:
                        return l.t["3GJwsc"];
                    default:
                        return l.t.s2eihY;
                }
            })(),
            flag: o.xBc.USE_VAD,
        },
        [o.xBc.PRIORITY_SPEAKER.toString()]: {
            title: l.intl.string(l.t.BVK71i),
            description: (() => {
                let e = {
                    keybind: l.intl.string(l.t.DkSwJ2),
                    onClick: () => {
                        {
                            let { openUserSettings: e } = n(840065);
                            e(a.X.KEYBINDS_PANEL, { section: o.nc_.KEYBINDS });
                        }
                    },
                };
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.intl.format(l.t["8nIfDP"], e);
                    case o.rbe.GUILD_TEXT:
                    case o.rbe.GUILD_FORUM:
                    case o.rbe.GUILD_MEDIA:
                        return l.intl.format(l.t["0t6uSv"], e);
                    default:
                        return l.intl.format(l.t.UvB2KP, e);
                }
            })(),
            flag: o.xBc.PRIORITY_SPEAKER,
        },
        [o.xBc.MUTE_MEMBERS.toString()]: {
            title: l.intl.string(l.t["8EI30/"]),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t.bcuobK;
                    case o.rbe.GUILD_STAGE_VOICE:
                        return l.t.EbvdH9;
                    case o.rbe.GUILD_TEXT:
                    case o.rbe.GUILD_FORUM:
                    case o.rbe.GUILD_MEDIA:
                        return l.t.KYDG2K;
                    default:
                        return l.t.LW5C9P;
                }
            })(),
            flag: o.xBc.MUTE_MEMBERS,
        },
        [o.xBc.DEAFEN_MEMBERS.toString()]: {
            title: l.intl.string(l.t["9L47Fr"]),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t.amZ5vn;
                    case o.rbe.GUILD_TEXT:
                    case o.rbe.GUILD_FORUM:
                    case o.rbe.GUILD_MEDIA:
                        return l.t["d+i1nX"];
                    default:
                        return l.t.UAdIxo;
                }
            })(),
            flag: o.xBc.DEAFEN_MEMBERS,
        },
        [o.xBc.MOVE_MEMBERS.toString()]: {
            title: l.intl.string(l.t.YtjJPQ),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t.XmoyRD;
                    case o.rbe.GUILD_STAGE_VOICE:
                        return l.t.bizKz6;
                    case o.rbe.GUILD_TEXT:
                    case o.rbe.GUILD_FORUM:
                    case o.rbe.GUILD_MEDIA:
                        return l.t.cbdQy2;
                    default:
                        return l.t.nSD1ah;
                }
            })(),
            flag: o.xBc.MOVE_MEMBERS,
        },
        [o.xBc.REQUEST_TO_SPEAK.toString()]: {
            title: l.intl.string(l.t["5kicT2"]),
            description: u === o.rbe.GUILD_CATEGORY ? l.t.T1lMSl : l.t.uzlYFE,
            flag: o.xBc.REQUEST_TO_SPEAK,
        },
        [o.xBc.MANAGE_THREADS.toString()]: {
            title: o.kvI.GUILD_THREADS_ONLY.has(u)
                ? l.intl.string(l.t.ossiZD)
                : u === o.rbe.GUILD_CATEGORY
                  ? l.intl.string(l.t.QKe7Q3)
                  : l.intl.string(l.t.kEqgr7),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t.S31soU;
                    case o.rbe.GUILD_FORUM:
                    case o.rbe.GUILD_MEDIA:
                        return l.t["XLi/jG"];
                    default:
                        return l.t.yvan0j;
                }
            })(),
            flag: o.xBc.MANAGE_THREADS,
        },
        [o.xBc.CREATE_PUBLIC_THREADS.toString()]: {
            title: l.intl.string(l.t["25rKnX"]),
            description: u === o.rbe.GUILD_CATEGORY ? l.t["+M1yLj"] : l.t["5SDtGB"],
            flag: o.xBc.CREATE_PUBLIC_THREADS,
        },
        [o.xBc.CREATE_PRIVATE_THREADS.toString()]: {
            title: l.intl.string(l.t.QwbTSa),
            description: u === o.rbe.GUILD_CATEGORY ? l.t["hBS/zn"] : l.t.Chg2zd,
            flag: o.xBc.CREATE_PRIVATE_THREADS,
        },
        [o.xBc.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: o.kvI.GUILD_THREADS_ONLY.has(u)
                ? l.intl.string(l.t.fqhqWm)
                : u === o.rbe.GUILD_CATEGORY
                  ? l.intl.string(l.t["5QlVGy"])
                  : l.intl.string(l.t.fTE74g),
            description: (() => {
                switch (u) {
                    case o.rbe.GUILD_CATEGORY:
                        return l.t.DlIVcN;
                    case o.rbe.GUILD_FORUM:
                    case o.rbe.GUILD_MEDIA:
                        return l.t.XTnrPH;
                    default:
                        return l.t.xHO6Me;
                }
            })(),
            flag: o.xBc.SEND_MESSAGES_IN_THREADS,
        },
        [o.xBc.MANAGE_EVENTS.toString()]: {
            title: l.intl.string(l.t.HIgA5a),
            description: u === o.rbe.GUILD_CATEGORY ? l.t.CP2sz4 : l.t["4pO/TY"],
            flag: o.xBc.MANAGE_EVENTS,
        },
        [o.xBc.CREATE_EVENTS.toString()]: {
            title: l.intl.string(l.t.qyjZua),
            description: u === o.rbe.GUILD_CATEGORY ? l.t.XpibmC : l.t.sPoBLa,
            flag: o.xBc.CREATE_EVENTS,
        },
        [o.xBc.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: l.intl.string(l.t.VBwkUf),
            description: l.t.C6BzXx,
            flag: o.xBc.SET_VOICE_CHANNEL_STATUS,
        },
    };
}
