n.d(t, {
    $s: () => ee,
    AB: () => ew,
    Bh: () => I,
    CY: () => ey,
    D_: () => E,
    FA: () => et,
    G2: () => eA,
    H1: () => el,
    HO: () => es,
    HZ: () => ez,
    Hu: () => e5,
    Iv: () => eq,
    JG: () => eU,
    JI: () => eN,
    JV: () => N,
    Jr: () => D,
    Kg: () => ed,
    ML: () => y,
    NF: () => eQ,
    NO: () => P,
    NR: () => T,
    PZ: () => e0,
    Pf: () => W,
    Pw: () => eG,
    Q$: () => ev,
    Q_: () => eD,
    Qe: () => ef,
    Qr: () => R,
    S0: () => eM,
    SI: () => b,
    SY: () => v,
    Sf: () => ej,
    T3: () => w,
    TA: () => eK,
    UM: () => z,
    Vd: () => eZ,
    Vv: () => eX,
    WY: () => Q,
    X6: () => eS,
    Xi: () => e3,
    YX: () => Z,
    Yh: () => eo,
    Yt: () => e6,
    Zk: () => eW,
    Zp: () => S,
    Zr: () => X,
    Zt: () => $,
    _3: () => U,
    _6: () => eO,
    _8: () => e$,
    _Z: () => eB,
    _z: () => k,
    b0: () => M,
    bm: () => G,
    cU: () => eu,
    cj: () => eh,
    dG: () => ea,
    dm: () => eH,
    e: () => K,
    eK: () => O,
    eh: () => ex,
    gs: () => A,
    hD: () => eI,
    hH: () => ei,
    he: () => em,
    iM: () => L,
    j0: () => e2,
    j7: () => er,
    jP: () => eb,
    jW: () => eC,
    kt: () => eL,
    l_: () => ep,
    m$: () => eY,
    n6: () => J,
    ng: () => e4,
    ns: () => H,
    on: () => e_,
    oz: () => C,
    pE: () => eF,
    pK: () => e1,
    qN: () => eJ,
    rs: () => eT,
    tP: () => j,
    tz: () => eg,
    uB: () => Y,
    uh: () => V,
    vL: () => en,
    vf: () => ec,
    wT: () => eP,
    wv: () => F,
    xM: () => B,
}),
    n(896048);
var r = n(735438),
    i = n(311907),
    a = n(873298),
    s = n(406935),
    o = n(52133),
    l = n(461012),
    c = n(527269),
    u = n(809976),
    d = n(646769),
    f = n(397438),
    p = n(656402),
    _ = n(355097),
    h = n(652215),
    m = n(815968),
    g = n(823894);
let E = (0, d.c$)(
        "textAndImages",
        "useLegacyChatInput",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => s._t.create({ value: e }),
    ),
    b = (0, d.c$)(
        "textAndImages",
        "useRichChatInput",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: e }),
    ),
    y = (0, d.c$)(
        "textAndImages",
        "includeStickersInAutocomplete",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => s._t.create({ value: e }),
    ),
    O = (0, d.c$)(
        "textAndImages",
        "includeSoundmojiInAutocomplete",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: e }),
    ),
    A = (0, d.c$)(
        "textAndImages",
        "renderSpoilers",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : h.P6Q.ON_CLICK;
        },
        (e) => s.hU.create({ value: e }),
    ),
    v = (0, d.c$)(
        "textAndImages",
        "useThreadSidebar",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: e }),
    );
(0, d.c$)(
    "notifications",
    "showInAppNotifications",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => s._t.create({ value: e }),
);
let S = (0, d.c$)(
    "notifications",
    "reactionNotifications",
    (e) => (null != e ? e : a.Tz.NOTIFICATIONS_ENABLED),
    (e) => e,
);
(0, d.c$)(
    "notifications",
    "customStatusPushNotifications",
    (e) => (null != e ? e : a.DQ.STATUS_PUSH_UNSET),
    (e) => e,
);
let I = (0, d.c$)(
        "notifications",
        "enableVoiceActivityNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: !!e }),
    ),
    T = (0, d.c$)(
        "notifications",
        "enableFriendOnlineNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: !!e }),
    ),
    C = (0, d.c$)(
        "notifications",
        "enableFriendAnniversaryNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: !!e }),
    ),
    N = (0, d.c$)(
        "notifications",
        "enableGameUpdateNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: !!e }),
    ),
    R = (0, d.c$)(
        "notifications",
        "enableServerTrendingNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: !!e }),
    ),
    w = (0, d.c$)(
        "notifications",
        "enableProfileUpdatesNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: !!e }),
    ),
    P = (0, d.c$)(
        "notifications",
        "quietMode",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => s._t.create({ value: !!e }),
    ),
    D = (0, d.c$)(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    x = [],
    L = (0, d.c$)(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => (null != e ? e : x),
        (e) => e,
    ),
    j = (0, d.c$)(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => (null != e ? e : x),
        (e) => e,
    ),
    M = (0, d.c$)(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => (null != e ? e : x),
        (e) => e,
    ),
    k = (0, d.c$)(
        "textAndImages",
        "viewImageDescriptions",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => s._t.create({ value: e }),
    ),
    U = (0, d.c$)(
        "textAndImages",
        "showCommandSuggestions",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: e }),
    ),
    G = (0, d.c$)(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => s._t.create({ value: e }),
    ),
    V = (0, d.c$)(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => (null == e ? void 0 : e.value),
        (e) => s._t.create({ value: e }),
    ),
    F = (0, d.c$)(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => (null == e ? void 0 : e.value),
        (e) => s._t.create({ value: e }),
    ),
    B = "0",
    H = (0, d.c$)(
        "notifications",
        "notificationCenterAckedBeforeId",
        (e) => (null != e ? e : B),
        (e) => e,
    ),
    Y = (0, d.c$)(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => s._t.create({ value: e }),
    ),
    W = (0, d.c$)(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: e }),
    ),
    K = (0, d.c$)(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: e }),
    ),
    z = (0, d.c$)(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: e }),
    ),
    q = [],
    X = (0, d.c$)(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => (null != e ? e : q),
        (e) => e,
    ),
    Z = (0, d.c$)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => (null == e ? void 0 : e.value),
        (e) => s._t.create({ value: e }),
    ),
    Q = (0, d.c$)(
        "privacy",
        "nonSpamRetrainingOptIn",
        (e) => (null == e ? void 0 : e.value),
        (e) => (null == e ? void 0 : s._t.create({ value: e })),
    );
(0, d.c$)(
    "privacy",
    "contactSyncEnabled",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => s._t.create({ value: e }),
);
let $ = (0, d.c$)(
        "privacy",
        "defaultGuildsRestricted",
        (e) => null != e && e,
        (e) => e,
    ),
    J = (0, d.c$)(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => (null == e ? void 0 : e.value),
        (e) => s._t.create({ value: e }),
    ),
    ee = (0, d.c$)(
        "privacy",
        "restrictedGuildIds",
        (e) => (null != e ? e : []),
        (e) => e,
    );
(0, d.c$)(
    "privacy",
    "friendDiscoveryFlags",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) ? t : 0;
    },
    (e) => s.ZQ.create({ value: e }),
);
let et = (0, d.c$)(
        "privacy",
        "friendSourceFlags",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : h.yKI;
        },
        (e) => s.ZQ.create({ value: e }),
    ),
    en = (0, d.c$)(
        "debug",
        "rtcPanelShowVoiceStates",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => s._t.create({ value: e }),
    ),
    er = (0, d.c$)(
        "textAndImages",
        "convertEmoticons",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: e }),
    ),
    ei = (0, d.c$)(
        "textAndImages",
        "messageDisplayCompact",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => s._t.create({ value: e }),
    ),
    ea = (0, d.c$)(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    es = (0, d.c$)(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : 100;
        },
        (e) => s.uN.create({ value: e }),
    ),
    eo = (0, d.c$)(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: e }),
    ),
    el = (0, d.c$)(
        "privacy",
        "dropsOptedOut",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => s._t.create({ value: e }),
    ),
    ec = (0, d.c$)(
        "privacy",
        "quests3PDataOptedOut",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => s._t.create({ value: e }),
    );
(0, d.c$)(
    "voiceAndVideo",
    "nativePhoneIntegrationEnabled",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => s._t.create({ value: e }),
);
let eu = (0, d.c6)({
        baseSetting: (0, d.c$)(
            "voiceAndVideo",
            "afkTimeout",
            (e) => (null == e ? void 0 : e.value),
            (e) => s.ZQ.create({ value: e }),
        ),
        isEligible: () => (0, c.Do)("user_settings"),
        useIsEligible: () => (0, c.cv)("user_settings"),
        ineligibleDefault: 600,
        eligibleDefault: () => (0, c.MM)("user_settings"),
        onUseDefault: () => (0, c.c9)("user_settings"),
    }),
    ed = (0, d.c$)(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => s._t.create({ value: e }),
    ),
    ef = (0, d.c$)(
        "textAndImages",
        "viewNsfwCommands",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => s._t.create({ value: e }),
    );
(0, d.c$)(
    "privacy",
    "detectPlatformAccounts",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => s._t.create({ value: e }),
);
let ep = (0, d.c$)(
        "gameLibrary",
        "disableGamesTab",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => s._t.create({ value: e }),
    ),
    e_ = (0, d.c$)(
        "textAndImages",
        "enableTtsCommand",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: e }),
    ),
    eh = (0, d.c$)(
        "textAndImages",
        "explicitContentFilter",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : p.Je.NON_FRIENDS;
        },
        (e) => s.ZQ.create({ value: e }),
    );
(0, d.c$)(
    "textAndImages",
    "dmSpamFilter",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) ? t : p.uH.NON_FRIENDS;
    },
    (e) => s.ZQ.create({ value: e }),
);
let em = (0, d.c$)(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => (null != e ? e : a.he.DEFAULT_UNSET),
        (e) => e,
    ),
    eg = (0, d.c$)(
        "status",
        "showCurrentGame",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: e }),
    );
(0, d.c$)(
    "privacy",
    "recentGamesEnabled",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => s._t.create({ value: e }),
);
let eE = new Set(Object.values(h.clD)),
    eb = (0, d.c$)(
        "status",
        "status",
        (e) => (null != e && eE.has(e.value) ? e.value : h.clD.UNKNOWN),
        (e) => s.hU.create({ value: e }),
    ),
    ey = (0, d.c$)(
        "status",
        "statusExpiresAtMs",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    eO = (0, d.c$)(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    eA = (0, d.c$)(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    ev = (0, d.c$)(
        "clips",
        "allowVoiceRecording",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: e }),
    ),
    eS = (0, d.Mt)(
        (0, d.c$)(
            "textAndImages",
            "inlineAttachmentMedia",
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => s._t.create({ value: e }),
        ),
        "text",
        "inlineAttachmentMedia",
    ),
    eI = (0, d.Mt)(
        (0, d.c$)(
            "textAndImages",
            "inlineEmbedMedia",
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => s._t.create({ value: e }),
        ),
        "text",
        "inlineEmbedMedia",
    ),
    eT = (0, d.Mt)(
        (0, d.c$)(
            "textAndImages",
            "renderEmbeds",
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => s._t.create({ value: e }),
        ),
        "text",
        "renderEmbeds",
    ),
    eC = (0, d.Mt)(
        (0, d.c$)(
            "textAndImages",
            "renderReactions",
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => s._t.create({ value: e }),
        ),
        "text",
        "renderReactions",
    );
(0, d.Mt)(
    (0, d.c$)(
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
                emojiId: s.ol.create({ value: t }),
                emojiName: s.hU.create({ value: n }),
                animated: s._t.create({ value: r }),
                disableDoubleTap: s._t.create({ value: i }),
            };
        },
        { comparator: o.A },
    ),
    "text",
    "defaultReactionEmoji",
);
let eN = (0, d.c$)(
        "localization",
        "timezoneOffset",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : null;
        },
        (e) => s.as.create({ value: null != e ? e : 0 }),
    ),
    eR = new Set([m.YP.AUTO, l.b.COZY, l.b.COMPACT]);
(0, d.c$)(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eR.has(e.value) ? e.value : l.b.COZY),
    (e) => s.hU.create({ value: e }),
);
let ew = new Set([l.P.ALL, l.P.UNREADS, l.P.NONE]),
    eP = (0, d.c$)(
        "appearance",
        "messagePreviews",
        (e) => (null != e && ew.has(e.value) ? e.value : l.P.ALL),
        (e) => s.hU.create({ value: e }),
    ),
    eD = (0, d.Mt)(
        (0, d.c$)(
            "appearance",
            "developerMode",
            (e) => null != e && e,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    ex = (0, d.c$)(
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
                null != e.backgroundGradientPresetId ? s.ZQ.create({ value: e.backgroundGradientPresetId }) : void 0,
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
        { comparator: r.isEqual },
    ),
    eL = (0, d.Tg)(
        (0, d.Mt)(
            (0, d.c$)(
                "textAndImages",
                "gifAutoPlay",
                (e) => {
                    var t;
                    return null == (t = null == e ? void 0 : e.value) || t;
                },
                (e) => s._t.create({ value: e }),
            ),
            "text",
            "gifAutoPlay",
        ),
        "gifAutoPlay",
        () => {
            var e;
            return null == (e = f.A.getOverride("gifAutoPlay")) ? void 0 : e.value;
        },
        () =>
            (0, i.bG)([f.A], () => {
                var e;
                return null == (e = f.A.getOverride("gifAutoPlay")) ? void 0 : e.value;
            }),
    ),
    ej = (0, d.Tg)(
        (0, d.Mt)(
            (0, d.c$)(
                "textAndImages",
                "animateEmoji",
                (e) => {
                    var t;
                    return null == (t = null == e ? void 0 : e.value) || t;
                },
                (e) => s._t.create({ value: e }),
            ),
            "text",
            "animateEmoji",
        ),
        "animateEmoji",
        () => {
            var e;
            return null == (e = f.A.getOverride("animateEmoji")) ? void 0 : e.value;
        },
        () =>
            (0, i.bG)([f.A], () => {
                var e;
                return null == (e = f.A.getOverride("animateEmoji")) ? void 0 : e.value;
            }),
    ),
    eM = (0, d.Tg)(
        (0, d.Mt)(
            (0, d.c$)(
                "textAndImages",
                "animateStickers",
                (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.value) ? t : g.BJ.ALWAYS_ANIMATE;
                },
                (e) => s.ZQ.create({ value: e }),
            ),
            "text",
            "animateStickers",
        ),
        "animateStickers",
        () => {
            var e;
            return null == (e = f.A.getOverride("animateStickers")) ? void 0 : e.value;
        },
        () =>
            (0, i.bG)([f.A], () => {
                var e;
                return null == (e = f.A.getOverride("animateStickers")) ? void 0 : e.value;
            }),
    ),
    ek = [],
    eU = (0, d.c$)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => (null != e ? e : ek),
        (e) => e,
    ),
    eG = (0, d.c$)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => (null != e ? e : ek),
        (e) => e,
        { delay: _.Sb.FREQUENT_USER_ACTION },
    ),
    eV = [],
    eF = (0, d.c$)(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => (null != e ? e : eV),
        (e) => e,
    );
(0, d.c6)({
    baseSetting: (0, d.c$)(
        "privacy",
        "defaultGuildsActivityRestricted",
        (e) => e,
        (e) => (null != e ? e : a.AN.OFF),
    ),
    isEligible: () => (0, u.oK)("user_settings"),
    useIsEligible: () => (0, u.ty)("user_settings"),
    ineligibleDefault: a.AN.OFF,
    eligibleDefault: () => a.AN.ON_FOR_LARGE_GUILDS,
});
let eB = (0, d.c6)({
        baseSetting: (0, d.c$)(
            "privacy",
            "defaultGuildsActivityRestrictedV2",
            (e) => (e === a.Qd.ACTIVITY_STATUS_UNSET ? null : e),
            (e) => (null != e ? e : a.Qd.ACTIVITY_STATUS_OFF),
        ),
        isEligible: () => (0, u.oK)("user_settings"),
        useIsEligible: () => (0, u.ty)("user_settings"),
        ineligibleDefault: a.Qd.ACTIVITY_STATUS_OFF,
        eligibleDefault: () => a.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
    }),
    eH = (0, d.c$)(
        "privacy",
        "familyCenterEnabledV2",
        (e) => (null == e ? void 0 : e.value),
        (e) => s._t.create({ value: e }),
    ),
    eY = (0, d.c$)(
        "privacy",
        "hideLegacyUsername",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => s._t.create({ value: e }),
    ),
    eW = (0, d.c$)(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: e }),
    ),
    eK = (0, d.c$)(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => (null != e ? e : a.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET),
        (e) => e,
    ),
    ez = (0, d.c$)(
        "ads",
        "alwaysDeliver",
        (e) => null != e && e,
        (e) => e,
    ),
    eq = (e) => {
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
    eX = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = e;
        return {
            explicitContentGuilds: null != t ? t : void 0,
            explicitContentFriendDm: null != n ? n : void 0,
            explicitContentNonFriendDm: null != r ? r : void 0,
        };
    },
    eZ = (0, d.c$)("textAndImages", "explicitContentSettings", eq, eX),
    eQ = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = null != e ? e : {};
        return {
            goreContentGuilds: null != t ? t : a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentFriendDm: null != n ? n : a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentNonFriendDm: null != r ? r : a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    e$ = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = e;
        return {
            goreContentGuilds: null != t ? t : void 0,
            goreContentFriendDm: null != n ? n : void 0,
            goreContentNonFriendDm: null != r ? r : void 0,
        };
    },
    eJ = (0, d.c$)("textAndImages", "goreContentSettings", eQ, e$);
(0, d.c$)(
    "appearance",
    "searchResultExactCountEnabled",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => s._t.create({ value: e }),
),
    (0, d.c$)(
        "appearance",
        "happeningNowCardsDisabled",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => s._t.create({ value: e }),
    );
let e0 = (0, d.c$)(
    "appearance",
    "timestampHourCycle",
    (e) => (null != e ? e : a.PZ.AUTO),
    (e) => e,
);
(0, d.c$)(
    "appearance",
    "launchPadMode",
    (e) => (null != e ? e : a.Ar.LAUNCH_PAD_DISABLED),
    (e) => e,
),
    (0, d.c$)(
        "appearance",
        "swipeRightToLeftMode",
        (e) => (null != e ? e : a.kW.SWIPE_RIGHT_TO_LEFT_UNSET),
        (e) => e,
    );
let e1 = (0, d.c$)(
        "userContent",
        "lastReceivedChangelogId",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    e2 = (0, d.c$)(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => null != e && e,
        (e) => e,
    ),
    e3 = (0, d.c$)(
        "appearance",
        "uiDensity",
        (e) => (e === a.NS.UNSET_UI_DENSITY ? a.NS.DEFAULT : null != e ? e : a.NS.DEFAULT),
        (e) => e,
    ),
    e6 = (0, d.c$)(
        "inAppFeedbackSettings",
        "inAppFeedbackStates",
        (e) =>
            (0, r.mapValues)(null != e ? e : {}, (e) =>
                (0, r.mapValues)(e, (e) => ((null == e ? void 0 : e.value) != null ? Number(e.value) : void 0)),
            ),
        (e) =>
            (0, r.mapValues)(e, (e) =>
                (0, r.mapValues)(e, (e) => s.ol.create({ value: null != e ? String(e) : void 0 })),
            ),
        { delay: _.Sb.AUTOMATED },
    ),
    e4 = (0, d.c$)(
        "textAndImages",
        "showMentionSuggestions",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => s._t.create({ value: e }),
    ),
    e5 = (0, d.c$)(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => s._t.create({ value: e }),
    );
