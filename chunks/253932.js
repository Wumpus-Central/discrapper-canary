n.d(t, {
    $s: () => $,
    AB: () => ew,
    Bh: () => I,
    CY: () => ey,
    D_: () => g,
    FA: () => ee,
    G2: () => eO,
    H1: () => eo,
    HO: () => ea,
    HZ: () => eK,
    Hu: () => e4,
    Iv: () => ez,
    JG: () => ek,
    JI: () => eC,
    JV: () => C,
    Jr: () => P,
    Kg: () => eu,
    ML: () => y,
    NF: () => eX,
    NO: () => R,
    NR: () => S,
    PZ: () => e$,
    Pf: () => Y,
    Pw: () => eU,
    Q$: () => ev,
    Q_: () => eP,
    Qe: () => ed,
    Qr: () => N,
    S0: () => ej,
    SI: () => E,
    SY: () => v,
    Sf: () => eL,
    T3: () => w,
    TA: () => eW,
    UM: () => K,
    Vd: () => eZ,
    Vv: () => eq,
    WY: () => X,
    X6: () => eA,
    Xi: () => e2,
    YX: () => Z,
    Yh: () => es,
    Yt: () => e3,
    Zk: () => eY,
    Zp: () => A,
    Zr: () => q,
    Zt: () => Q,
    _3: () => k,
    _6: () => eb,
    _8: () => eQ,
    _Z: () => eF,
    _z: () => M,
    b0: () => j,
    bm: () => U,
    cU: () => ec,
    cj: () => e_,
    dG: () => ei,
    dm: () => eB,
    e: () => W,
    eK: () => b,
    eh: () => eD,
    gs: () => O,
    hD: () => eI,
    hH: () => er,
    he: () => eh,
    iM: () => x,
    j0: () => e1,
    j7: () => en,
    jP: () => eE,
    jW: () => eT,
    kt: () => ex,
    l_: () => ef,
    m$: () => eH,
    n6: () => J,
    ng: () => e6,
    ns: () => B,
    on: () => ep,
    oz: () => T,
    pE: () => eV,
    pK: () => e0,
    qN: () => eJ,
    rs: () => eS,
    tP: () => L,
    tz: () => em,
    uB: () => H,
    uh: () => G,
    vL: () => et,
    vf: () => el,
    wT: () => eR,
    wv: () => V,
    xM: () => F,
}),
    n(896048);
var r = n(735438),
    i = n(311907),
    a = n(873298),
    s = n(406935),
    o = n(52133),
    l = n(461012),
    c = n(809976),
    u = n(646769),
    d = n(397438),
    f = n(656402),
    p = n(355097),
    _ = n(652215),
    h = n(815968),
    m = n(823894);
let g = (0, u.c$)(
        "textAndImages",
        "useLegacyChatInput",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    E = (0, u.c$)(
        "textAndImages",
        "useRichChatInput",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    y = (0, u.c$)(
        "textAndImages",
        "includeStickersInAutocomplete",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    b = (0, u.c$)(
        "textAndImages",
        "includeSoundmojiInAutocomplete",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    O = (0, u.c$)(
        "textAndImages",
        "renderSpoilers",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : _.P6Q.ON_CLICK;
        },
        (e) =>
            s.hU.create({
                value: e,
            }),
    ),
    v = (0, u.c$)(
        "textAndImages",
        "useThreadSidebar",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    );
(0, u.c$)(
    "notifications",
    "showInAppNotifications",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) =>
        s._t.create({
            value: e,
        }),
);
let A = (0, u.c$)(
    "notifications",
    "reactionNotifications",
    (e) => (null != e ? e : a.Tz.NOTIFICATIONS_ENABLED),
    (e) => e,
);
(0, u.c$)(
    "notifications",
    "customStatusPushNotifications",
    (e) => (null != e ? e : a.DQ.STATUS_PUSH_UNSET),
    (e) => e,
);
let I = (0, u.c$)(
        "notifications",
        "enableVoiceActivityNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: !!e,
            }),
    ),
    S = (0, u.c$)(
        "notifications",
        "enableFriendOnlineNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: !!e,
            }),
    ),
    T = (0, u.c$)(
        "notifications",
        "enableFriendAnniversaryNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: !!e,
            }),
    ),
    C = (0, u.c$)(
        "notifications",
        "enableGameUpdateNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: !!e,
            }),
    ),
    N = (0, u.c$)(
        "notifications",
        "enableServerTrendingNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: !!e,
            }),
    ),
    w = (0, u.c$)(
        "notifications",
        "enableProfileUpdatesNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: !!e,
            }),
    ),
    R = (0, u.c$)(
        "notifications",
        "quietMode",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) =>
            s._t.create({
                value: !!e,
            }),
    ),
    P = (0, u.c$)(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    D = [],
    x = (0, u.c$)(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => (null != e ? e : D),
        (e) => e,
    ),
    L = (0, u.c$)(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => (null != e ? e : D),
        (e) => e,
    ),
    j = (0, u.c$)(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => (null != e ? e : D),
        (e) => e,
    ),
    M = (0, u.c$)(
        "textAndImages",
        "viewImageDescriptions",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    k = (0, u.c$)(
        "textAndImages",
        "showCommandSuggestions",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    U = (0, u.c$)(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    G = (0, u.c$)(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => (null == e ? void 0 : e.value),
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    V = (0, u.c$)(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => (null == e ? void 0 : e.value),
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    F = "0",
    B = (0, u.c$)(
        "notifications",
        "notificationCenterAckedBeforeId",
        (e) => (null != e ? e : F),
        (e) => e,
    ),
    H = (0, u.c$)(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    Y = (0, u.c$)(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    W = (0, u.c$)(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    K = (0, u.c$)(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    z = [],
    q = (0, u.c$)(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => (null != e ? e : z),
        (e) => e,
    ),
    Z = (0, u.c$)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => (null == e ? void 0 : e.value),
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    X = (0, u.c$)(
        "privacy",
        "nonSpamRetrainingOptIn",
        (e) => (null == e ? void 0 : e.value),
        (e) =>
            null == e
                ? void 0
                : s._t.create({
                      value: e,
                  }),
    );
(0, u.c$)(
    "privacy",
    "contactSyncEnabled",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) =>
        s._t.create({
            value: e,
        }),
);
let Q = (0, u.c$)(
        "privacy",
        "defaultGuildsRestricted",
        (e) => null != e && e,
        (e) => e,
    ),
    J = (0, u.c$)(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => (null == e ? void 0 : e.value),
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    $ = (0, u.c$)(
        "privacy",
        "restrictedGuildIds",
        (e) => (null != e ? e : []),
        (e) => e,
    );
(0, u.c$)(
    "privacy",
    "friendDiscoveryFlags",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) ? t : 0;
    },
    (e) =>
        s.ZQ.create({
            value: e,
        }),
);
let ee = (0, u.c$)(
        "privacy",
        "friendSourceFlags",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : _.yKI;
        },
        (e) =>
            s.ZQ.create({
                value: e,
            }),
    ),
    et = (0, u.c$)(
        "debug",
        "rtcPanelShowVoiceStates",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    en = (0, u.c$)(
        "textAndImages",
        "convertEmoticons",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    er = (0, u.c$)(
        "textAndImages",
        "messageDisplayCompact",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    ei = (0, u.c$)(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    ea = (0, u.c$)(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : 100;
        },
        (e) =>
            s.uN.create({
                value: e,
            }),
    ),
    es = (0, u.c$)(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    eo = (0, u.c$)(
        "privacy",
        "dropsOptedOut",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    el = (0, u.c$)(
        "privacy",
        "quests3PDataOptedOut",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    );
(0, u.c$)(
    "voiceAndVideo",
    "nativePhoneIntegrationEnabled",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) =>
        s._t.create({
            value: e,
        }),
);
let ec = (0, u.c$)(
        "voiceAndVideo",
        "afkTimeout",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : 60;
        },
        (e) =>
            s.ZQ.create({
                value: e,
            }),
    ),
    eu = (0, u.c$)(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    ed = (0, u.c$)(
        "textAndImages",
        "viewNsfwCommands",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    );
(0, u.c$)(
    "privacy",
    "detectPlatformAccounts",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) =>
        s._t.create({
            value: e,
        }),
);
let ef = (0, u.c$)(
        "gameLibrary",
        "disableGamesTab",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    ep = (0, u.c$)(
        "textAndImages",
        "enableTtsCommand",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    e_ = (0, u.c$)(
        "textAndImages",
        "explicitContentFilter",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : f.Je.NON_FRIENDS;
        },
        (e) =>
            s.ZQ.create({
                value: e,
            }),
    );
(0, u.c$)(
    "textAndImages",
    "dmSpamFilter",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) ? t : f.uH.NON_FRIENDS;
    },
    (e) =>
        s.ZQ.create({
            value: e,
        }),
);
let eh = (0, u.c$)(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => (null != e ? e : a.he.DEFAULT_UNSET),
        (e) => e,
    ),
    em = (0, u.c$)(
        "status",
        "showCurrentGame",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    );
(0, u.c$)(
    "privacy",
    "recentGamesEnabled",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) =>
        s._t.create({
            value: e,
        }),
);
let eg = new Set(Object.values(_.clD)),
    eE = (0, u.c$)(
        "status",
        "status",
        (e) => (null != e && eg.has(e.value) ? e.value : _.clD.UNKNOWN),
        (e) =>
            s.hU.create({
                value: e,
            }),
    ),
    ey = (0, u.c$)(
        "status",
        "statusExpiresAtMs",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    eb = (0, u.c$)(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    eO = (0, u.c$)(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    ev = (0, u.c$)(
        "clips",
        "allowVoiceRecording",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    eA = (0, u.Mt)(
        (0, u.c$)(
            "textAndImages",
            "inlineAttachmentMedia",
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) =>
                s._t.create({
                    value: e,
                }),
        ),
        "text",
        "inlineAttachmentMedia",
    ),
    eI = (0, u.Mt)(
        (0, u.c$)(
            "textAndImages",
            "inlineEmbedMedia",
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) =>
                s._t.create({
                    value: e,
                }),
        ),
        "text",
        "inlineEmbedMedia",
    ),
    eS = (0, u.Mt)(
        (0, u.c$)(
            "textAndImages",
            "renderEmbeds",
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) =>
                s._t.create({
                    value: e,
                }),
        ),
        "text",
        "renderEmbeds",
    ),
    eT = (0, u.Mt)(
        (0, u.c$)(
            "textAndImages",
            "renderReactions",
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) =>
                s._t.create({
                    value: e,
                }),
        ),
        "text",
        "renderReactions",
    );
(0, u.Mt)(
    (0, u.c$)(
        "textAndImages",
        "defaultReactionEmoji",
        (e) => {
            var t, n;
            let { emojiId: r, emojiName: i, animated: a } = null != e ? e : {};
            return {
                emojiId: null == r ? void 0 : r.value,
                emojiName: null == i ? void 0 : i.value,
                animated: null == a ? void 0 : a.value,
                disableDoubleTap: null != (t = null == e || null == (n = e.disableDoubleTap) ? void 0 : n.value) && t,
            };
        },
        (e) => {
            let { emojiId: t, emojiName: n, animated: r, disableDoubleTap: i } = e;
            return {
                emojiId: s.ol.create({
                    value: t,
                }),
                emojiName: s.hU.create({
                    value: n,
                }),
                animated: s._t.create({
                    value: r,
                }),
                disableDoubleTap: s._t.create({
                    value: i,
                }),
            };
        },
        {
            comparator: o.A,
        },
    ),
    "text",
    "defaultReactionEmoji",
);
let eC = (0, u.c$)(
        "localization",
        "timezoneOffset",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : null;
        },
        (e) =>
            s.as.create({
                value: null != e ? e : 0,
            }),
    ),
    eN = new Set([h.YP.AUTO, l.b.COZY, l.b.COMPACT]);
(0, u.c$)(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eN.has(e.value) ? e.value : l.b.COZY),
    (e) =>
        s.hU.create({
            value: e,
        }),
);
let ew = new Set([l.P.ALL, l.P.UNREADS, l.P.NONE]),
    eR = (0, u.c$)(
        "appearance",
        "messagePreviews",
        (e) => (null != e && ew.has(e.value) ? e.value : l.P.ALL),
        (e) =>
            s.hU.create({
                value: e,
            }),
    ),
    eP = (0, u.Mt)(
        (0, u.c$)(
            "appearance",
            "developerMode",
            (e) => null != e && e,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    eD = (0, u.c$)(
        "appearance",
        "clientThemeSettings",
        (e) => {
            var t;
            return {
                backgroundGradientPresetId: null == e || null == (t = e.backgroundGradientPresetId) ? void 0 : t.value,
                customUserThemeSettings:
                    (null == e ? void 0 : e.customUserThemeSettings) != null
                        ? {
                              colors: e.customUserThemeSettings.colors,
                              gradientColorStops: e.customUserThemeSettings.gradientColorStops,
                              gradientAngle: e.customUserThemeSettings.gradientAngle,
                              baseMix: e.customUserThemeSettings.baseMix,
                          }
                        : void 0,
            };
        },
        (e) => ({
            backgroundGradientPresetId:
                null != e.backgroundGradientPresetId
                    ? s.ZQ.create({
                          value: e.backgroundGradientPresetId,
                      })
                    : void 0,
            customUserThemeSettings:
                null != e.customUserThemeSettings
                    ? {
                          colors: e.customUserThemeSettings.colors,
                          gradientColorStops: e.customUserThemeSettings.gradientColorStops,
                          gradientAngle: e.customUserThemeSettings.gradientAngle,
                          baseMix: e.customUserThemeSettings.baseMix,
                      }
                    : void 0,
        }),
        {
            comparator: r.isEqual,
        },
    ),
    ex = (0, u.Tg)(
        (0, u.Mt)(
            (0, u.c$)(
                "textAndImages",
                "gifAutoPlay",
                (e) => {
                    var t;
                    return null == (t = null == e ? void 0 : e.value) || t;
                },
                (e) =>
                    s._t.create({
                        value: e,
                    }),
            ),
            "text",
            "gifAutoPlay",
        ),
        "gifAutoPlay",
        () => {
            var e;
            return null == (e = d.A.getOverride("gifAutoPlay")) ? void 0 : e.value;
        },
        () =>
            (0, i.bG)([d.A], () => {
                var e;
                return null == (e = d.A.getOverride("gifAutoPlay")) ? void 0 : e.value;
            }),
    ),
    eL = (0, u.Tg)(
        (0, u.Mt)(
            (0, u.c$)(
                "textAndImages",
                "animateEmoji",
                (e) => {
                    var t;
                    return null == (t = null == e ? void 0 : e.value) || t;
                },
                (e) =>
                    s._t.create({
                        value: e,
                    }),
            ),
            "text",
            "animateEmoji",
        ),
        "animateEmoji",
        () => {
            var e;
            return null == (e = d.A.getOverride("animateEmoji")) ? void 0 : e.value;
        },
        () =>
            (0, i.bG)([d.A], () => {
                var e;
                return null == (e = d.A.getOverride("animateEmoji")) ? void 0 : e.value;
            }),
    ),
    ej = (0, u.Tg)(
        (0, u.Mt)(
            (0, u.c$)(
                "textAndImages",
                "animateStickers",
                (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.value) ? t : m.BJ.ALWAYS_ANIMATE;
                },
                (e) =>
                    s.ZQ.create({
                        value: e,
                    }),
            ),
            "text",
            "animateStickers",
        ),
        "animateStickers",
        () => {
            var e;
            return null == (e = d.A.getOverride("animateStickers")) ? void 0 : e.value;
        },
        () =>
            (0, i.bG)([d.A], () => {
                var e;
                return null == (e = d.A.getOverride("animateStickers")) ? void 0 : e.value;
            }),
    ),
    eM = [],
    ek = (0, u.c$)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => (null != e ? e : eM),
        (e) => e,
    ),
    eU = (0, u.c$)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => (null != e ? e : eM),
        (e) => e,
        {
            delay: p.Sb.FREQUENT_USER_ACTION,
        },
    ),
    eG = [],
    eV = (0, u.c$)(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => (null != e ? e : eG),
        (e) => e,
    );
(0, u.c6)({
    baseSetting: (0, u.c$)(
        "privacy",
        "defaultGuildsActivityRestricted",
        (e) => e,
        (e) => (null != e ? e : a.AN.OFF),
    ),
    isEligible: () => (0, c.oK)("user_settings"),
    useIsEligible: () => (0, c.ty)("user_settings"),
    ineligibleDefault: a.AN.OFF,
    eligibleDefault: () => a.AN.ON_FOR_LARGE_GUILDS,
});
let eF = (0, u.c6)({
        baseSetting: (0, u.c$)(
            "privacy",
            "defaultGuildsActivityRestrictedV2",
            (e) => (e === a.Qd.ACTIVITY_STATUS_UNSET ? null : e),
            (e) => (null != e ? e : a.Qd.ACTIVITY_STATUS_OFF),
        ),
        isEligible: () => (0, c.oK)("user_settings"),
        useIsEligible: () => (0, c.ty)("user_settings"),
        ineligibleDefault: a.Qd.ACTIVITY_STATUS_OFF,
        eligibleDefault: () => a.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
    }),
    eB = (0, u.c$)(
        "privacy",
        "familyCenterEnabledV2",
        (e) => (null == e ? void 0 : e.value),
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    eH = (0, u.c$)(
        "privacy",
        "hideLegacyUsername",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    eY = (0, u.c$)(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    eW = (0, u.c$)(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => (null != e ? e : a.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET),
        (e) => e,
    ),
    eK = (0, u.c$)(
        "ads",
        "alwaysDeliver",
        (e) => null != e && e,
        (e) => e,
    ),
    ez = (e) => {
        let {
            explicitContentGuilds: t,
            explicitContentFriendDm: n,
            explicitContentNonFriendDm: r,
        } = null != e ? e : {};
        return {
            explicitContentGuilds: null != t ? t : a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentFriendDm: null != n ? n : a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentNonFriendDm: null != r ? r : a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    eq = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = e;
        return {
            explicitContentGuilds: null != t ? t : void 0,
            explicitContentFriendDm: null != n ? n : void 0,
            explicitContentNonFriendDm: null != r ? r : void 0,
        };
    },
    eZ = (0, u.c$)("textAndImages", "explicitContentSettings", ez, eq),
    eX = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = null != e ? e : {};
        return {
            goreContentGuilds: null != t ? t : a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentFriendDm: null != n ? n : a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentNonFriendDm: null != r ? r : a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    eQ = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = e;
        return {
            goreContentGuilds: null != t ? t : void 0,
            goreContentFriendDm: null != n ? n : void 0,
            goreContentNonFriendDm: null != r ? r : void 0,
        };
    },
    eJ = (0, u.c$)("textAndImages", "goreContentSettings", eX, eQ);
(0, u.c$)(
    "appearance",
    "searchResultExactCountEnabled",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) =>
        s._t.create({
            value: e,
        }),
),
    (0, u.c$)(
        "appearance",
        "happeningNowCardsDisabled",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    );
let e$ = (0, u.c$)(
    "appearance",
    "timestampHourCycle",
    (e) => (null != e ? e : a.PZ.AUTO),
    (e) => e,
);
(0, u.c$)(
    "appearance",
    "launchPadMode",
    (e) => (null != e ? e : a.Ar.LAUNCH_PAD_DISABLED),
    (e) => e,
),
    (0, u.c$)(
        "appearance",
        "swipeRightToLeftMode",
        (e) => (null != e ? e : a.kW.SWIPE_RIGHT_TO_LEFT_UNSET),
        (e) => e,
    );
let e0 = (0, u.c$)(
        "userContent",
        "lastReceivedChangelogId",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    e1 = (0, u.c$)(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => null != e && e,
        (e) => e,
    ),
    e2 = (0, u.c$)(
        "appearance",
        "uiDensity",
        (e) => (e === a.NS.UNSET_UI_DENSITY ? a.NS.DEFAULT : null != e ? e : a.NS.DEFAULT),
        (e) => e,
    ),
    e3 = (0, u.c$)(
        "inAppFeedbackSettings",
        "inAppFeedbackStates",
        (e) =>
            (0, r.mapValues)(null != e ? e : {}, (e) =>
                (0, r.mapValues)(e, (e) => ((null == e ? void 0 : e.value) != null ? Number(e.value) : void 0)),
            ),
        (e) =>
            (0, r.mapValues)(e, (e) =>
                (0, r.mapValues)(e, (e) =>
                    s.ol.create({
                        value: null != e ? String(e) : void 0,
                    }),
                ),
            ),
        {
            delay: p.Sb.AUTOMATED,
        },
    ),
    e6 = (0, u.c$)(
        "textAndImages",
        "showMentionSuggestions",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    ),
    e4 = (0, u.c$)(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) =>
            s._t.create({
                value: e,
            }),
    );
