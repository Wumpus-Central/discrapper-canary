n.d(t, {
    A2: () => e4,
    AY: () => eo,
    CM: () => eu,
    CW: () => eG,
    Cr: () => ey,
    DC: () => ed,
    Eo: () => eX,
    Ex: () => eV,
    Fg: () => en,
    G6: () => eg,
    Gp: () => eR,
    H1: () => k,
    HV: () => e5,
    I0: () => Z,
    JG: () => eW,
    JN: () => es,
    JT: () => ec,
    JY: () => C,
    L1: () => ex,
    NA: () => eC,
    OW: () => e_,
    Ok: () => ev,
    Ou: () => K,
    P4: () => eO,
    Pe: () => Y,
    QK: () => eL,
    QZ: () => R,
    R$: () => b,
    RS: () => eT,
    R_: () => eH,
    Rt: () => e3,
    SE: () => eU,
    Sb: () => eD,
    Sh: () => eQ,
    T4: () => M,
    UP: () => eh,
    Wp: () => eM,
    Xc: () => H,
    Xk: () => U,
    Xr: () => em,
    YC: () => e2,
    Yk: () => ej,
    _O: () => j,
    _j: () => eY,
    a7: () => w,
    bh: () => el,
    bm: () => ep,
    cC: () => v,
    cP: () => W,
    co: () => eb,
    d$: () => V,
    d4: () => L,
    d8: () => T,
    dN: () => E,
    eR: () => O,
    eo: () => F,
    ev: () => er,
    fq: () => y,
    fv: () => D,
    fz: () => I,
    gR: () => $,
    h2: () => ee,
    hg: () => e0,
    iG: () => J,
    iH: () => eF,
    j7: () => e$,
    jU: () => ei,
    kJ: () => X,
    kU: () => ea,
    l4: () => e1,
    lL: () => ew,
    lk: () => ez,
    mX: () => Q,
    nc: () => eA,
    nh: () => eq,
    no: () => eB,
    p1: () => N,
    qF: () => G,
    rN: () => eN,
    rR: () => e8,
    tT: () => P,
    tU: () => eS,
    uL: () => B,
    uh: () => eJ,
    vF: () => S,
    vc: () => A,
    x4: () => eI,
    xM: () => ef,
    xq: () => et,
    zA: () => q,
    zY: () => eK,
}),
    n(388685);
var r = n(392711),
    i = n(442837),
    a = n(524437),
    o = n(381499),
    s = n(902704),
    l = n(85746),
    c = n(291741),
    u = n(362352),
    d = n(560997),
    f = n(263937),
    p = n(973005),
    _ = n(526761),
    h = n(981631),
    m = n(969943),
    g = n(611480);
let E = (0, d.Zc)(
        "textAndImages",
        "useLegacyChatInput",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    b = (0, d.Zc)(
        "textAndImages",
        "useRichChatInput",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    y = (0, d.Zc)(
        "textAndImages",
        "includeStickersInAutocomplete",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    O = (0, d.Zc)(
        "textAndImages",
        "includeSoundmojiInAutocomplete",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    v = (0, d.Zc)(
        "textAndImages",
        "renderSpoilers",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : h.A2N.ON_CLICK;
        },
        (e) => o.Gm.create({ value: e }),
    ),
    S = (0, d.Zc)(
        "textAndImages",
        "useThreadSidebar",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    );
(0, d.Zc)(
    "notifications",
    "showInAppNotifications",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e }),
);
let I = (0, d.Zc)(
    "notifications",
    "reactionNotifications",
    (e) => (null != e ? e : a.Ns.NOTIFICATIONS_ENABLED),
    (e) => e,
);
(0, d.Zc)(
    "notifications",
    "customStatusPushNotifications",
    (e) => (null != e ? e : a.Oi.STATUS_PUSH_UNSET),
    (e) => e,
);
let T = (0, d.Zc)(
        "notifications",
        "enableVoiceActivityNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    C = (0, d.Zc)(
        "notifications",
        "enableFriendOnlineNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    A = (0, d.Zc)(
        "notifications",
        "enableFriendAnniversaryNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    N = (0, d.Zc)(
        "notifications",
        "enableGameUpdateNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    P = (0, d.Zc)(
        "notifications",
        "enableServerTrendingNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    w = (0, d.Zc)(
        "notifications",
        "enableProfileUpdatesNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    R = (0, d.Zc)(
        "notifications",
        "quietMode",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    D = (0, d.Zc)(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    x = [],
    L = (0, d.Zc)(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => (null != e ? e : x),
        (e) => e,
    ),
    j = (0, d.Zc)(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => (null != e ? e : x),
        (e) => e,
    ),
    M = (0, d.Zc)(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => (null != e ? e : x),
        (e) => e,
    ),
    k = (0, d.Zc)(
        "textAndImages",
        "viewImageDescriptions",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    U = (0, d.Zc)(
        "textAndImages",
        "showCommandSuggestions",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    G = (0, d.Zc)(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    Z = (0, d.Zc)(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    F = (0, d.Zc)(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    B = "0",
    V = (0, d.Zc)(
        "notifications",
        "notificationCenterAckedBeforeId",
        (e) => (null != e ? e : B),
        (e) => e,
    ),
    H = (0, d.Zc)(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    Y = (0, d.Zc)(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    W = (0, d.Zc)(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    K = (0, d.Zc)(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    z = [],
    q = (0, d.Zc)(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => (null != e ? e : z),
        (e) => e,
    ),
    Q = (0, d.Zc)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    X = (0, d.Zc)(
        "privacy",
        "nonSpamRetrainingOptIn",
        (e) => (null == e ? void 0 : e.value),
        (e) => (null == e ? void 0 : o.D5.create({ value: e })),
    );
(0, d.Zc)(
    "privacy",
    "contactSyncEnabled",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => o.D5.create({ value: e }),
);
let J = (0, d.Zc)(
        "privacy",
        "defaultGuildsRestricted",
        (e) => null != e && e,
        (e) => e,
    ),
    $ = (0, d.Zc)(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    ee = (0, d.Zc)(
        "privacy",
        "restrictedGuildIds",
        (e) => (null != e ? e : []),
        (e) => e,
    );
(0, d.Zc)(
    "privacy",
    "friendDiscoveryFlags",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) ? t : 0;
    },
    (e) => o.yC.create({ value: e }),
);
let et = (0, d.Zc)(
        "privacy",
        "friendSourceFlags",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : h.HGf;
        },
        (e) => o.yC.create({ value: e }),
    ),
    en = (0, d.Zc)(
        "debug",
        "rtcPanelShowVoiceStates",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    er = (0, d.Zc)(
        "textAndImages",
        "convertEmoticons",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    ei = (0, d.Zc)(
        "textAndImages",
        "messageDisplayCompact",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    ea = (0, d.Zc)(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    eo = (0, d.Zc)(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : 100;
        },
        (e) => o.A8.create({ value: e }),
    ),
    es = (0, d.Zc)(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    el = (0, d.Zc)(
        "privacy",
        "dropsOptedOut",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    ec = (0, d.Zc)(
        "privacy",
        "quests3PDataOptedOut",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    );
(0, d.Zc)(
    "voiceAndVideo",
    "nativePhoneIntegrationEnabled",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e }),
);
let eu = (0, d.TG)({
        baseSetting: (0, d.Zc)(
            "voiceAndVideo",
            "afkTimeout",
            (e) => (null == e ? void 0 : e.value),
            (e) => o.yC.create({ value: e }),
        ),
        isEligible: () => (0, c.mO)("user_settings"),
        useIsEligible: () => (0, c.Mk)("user_settings"),
        ineligibleDefault: 600,
        eligibleDefault: () => (0, c.fD)("user_settings"),
        onUseDefault: () => (0, c.Dl)("user_settings"),
    }),
    ed = (0, d.Zc)(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    ef = (0, d.Zc)(
        "textAndImages",
        "viewNsfwCommands",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    );
(0, d.Zc)(
    "privacy",
    "detectPlatformAccounts",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e }),
);
let ep = (0, d.Zc)(
        "gameLibrary",
        "disableGamesTab",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    e_ = (0, d.Zc)(
        "textAndImages",
        "enableTtsCommand",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    eh = (0, d.Zc)(
        "textAndImages",
        "explicitContentFilter",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : p.TI.NON_FRIENDS;
        },
        (e) => o.yC.create({ value: e }),
    );
(0, d.Zc)(
    "textAndImages",
    "dmSpamFilter",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) ? t : p.fQ.NON_FRIENDS;
    },
    (e) => o.yC.create({ value: e }),
);
let em = (0, d.Zc)(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => (null != e ? e : a.Xr.DEFAULT_UNSET),
        (e) => e,
    ),
    eg = (0, d.Zc)(
        "status",
        "showCurrentGame",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    );
(0, d.Zc)(
    "privacy",
    "recentGamesEnabled",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e }),
);
let eE = new Set(Object.values(h.Skl)),
    eb = (0, d.Zc)(
        "status",
        "status",
        (e) => (null != e && eE.has(e.value) ? e.value : h.Skl.UNKNOWN),
        (e) => o.Gm.create({ value: e }),
    ),
    ey = (0, d.Zc)(
        "status",
        "statusExpiresAtMs",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    eO = (0, d.Zc)(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    ev = (0, d.Zc)(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    eS = (0, d.Zc)(
        "clips",
        "allowVoiceRecording",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    eI = (0, d.KM)(
        (0, d.Zc)(
            "textAndImages",
            "inlineAttachmentMedia",
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => o.D5.create({ value: e }),
        ),
        "text",
        "inlineAttachmentMedia",
    ),
    eT = (0, d.KM)(
        (0, d.Zc)(
            "textAndImages",
            "inlineEmbedMedia",
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => o.D5.create({ value: e }),
        ),
        "text",
        "inlineEmbedMedia",
    ),
    eC = (0, d.KM)(
        (0, d.Zc)(
            "textAndImages",
            "renderEmbeds",
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => o.D5.create({ value: e }),
        ),
        "text",
        "renderEmbeds",
    ),
    eA = (0, d.KM)(
        (0, d.Zc)(
            "textAndImages",
            "renderReactions",
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => o.D5.create({ value: e }),
        ),
        "text",
        "renderReactions",
    );
(0, d.KM)(
    (0, d.Zc)(
        "textAndImages",
        "defaultReactionEmoji",
        (e) => {
            var t, n;
            let { emojiId: r, emojiName: i, animated: a } = null != e ? e : {};
            return {
                emojiId: null == r ? void 0 : r.value,
                emojiName: null == i ? void 0 : i.value,
                animated: null == a ? void 0 : a.value,
                disableDoubleTap: null != (n = null == e || null == (t = e.disableDoubleTap) ? void 0 : t.value) && n,
            };
        },
        (e) => {
            let { emojiId: t, emojiName: n, animated: r, disableDoubleTap: i } = e;
            return {
                emojiId: o.wA.create({ value: t }),
                emojiName: o.Gm.create({ value: n }),
                animated: o.D5.create({ value: r }),
                disableDoubleTap: o.D5.create({ value: i }),
            };
        },
        { comparator: s.Z },
    ),
    "text",
    "defaultReactionEmoji",
);
let eN = (0, d.Zc)(
        "localization",
        "timezoneOffset",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : null;
        },
        (e) => o.T4.create({ value: null != e ? e : 0 }),
    ),
    eP = new Set([m.fx.AUTO, l.l.COZY, l.l.COMPACT]);
(0, d.Zc)(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eP.has(e.value) ? e.value : l.l.COZY),
    (e) => o.Gm.create({ value: e }),
);
let ew = new Set([l.Z.ALL, l.Z.UNREADS, l.Z.NONE]),
    eR = (0, d.Zc)(
        "appearance",
        "messagePreviews",
        (e) => (null != e && ew.has(e.value) ? e.value : l.Z.ALL),
        (e) => o.Gm.create({ value: e }),
    ),
    eD = (0, d.KM)(
        (0, d.Zc)(
            "appearance",
            "developerMode",
            (e) => null != e && e,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    ex = (0, d.Zc)(
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
                null != e.backgroundGradientPresetId ? o.yC.create({ value: e.backgroundGradientPresetId }) : void 0,
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
    eL = (0, d.R2)(
        (0, d.KM)(
            (0, d.Zc)(
                "textAndImages",
                "gifAutoPlay",
                (e) => {
                    var t;
                    return null == (t = null == e ? void 0 : e.value) || t;
                },
                (e) => o.D5.create({ value: e }),
            ),
            "text",
            "gifAutoPlay",
        ),
        "gifAutoPlay",
        () => {
            var e;
            return null == (e = f.Z.getOverride("gifAutoPlay")) ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([f.Z], () => {
                var e;
                return null == (e = f.Z.getOverride("gifAutoPlay")) ? void 0 : e.value;
            }),
    ),
    ej = (0, d.R2)(
        (0, d.KM)(
            (0, d.Zc)(
                "textAndImages",
                "animateEmoji",
                (e) => {
                    var t;
                    return null == (t = null == e ? void 0 : e.value) || t;
                },
                (e) => o.D5.create({ value: e }),
            ),
            "text",
            "animateEmoji",
        ),
        "animateEmoji",
        () => {
            var e;
            return null == (e = f.Z.getOverride("animateEmoji")) ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([f.Z], () => {
                var e;
                return null == (e = f.Z.getOverride("animateEmoji")) ? void 0 : e.value;
            }),
    ),
    eM = (0, d.R2)(
        (0, d.KM)(
            (0, d.Zc)(
                "textAndImages",
                "animateStickers",
                (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.value) ? t : g.yr.ALWAYS_ANIMATE;
                },
                (e) => o.yC.create({ value: e }),
            ),
            "text",
            "animateStickers",
        ),
        "animateStickers",
        () => {
            var e;
            return null == (e = f.Z.getOverride("animateStickers")) ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([f.Z], () => {
                var e;
                return null == (e = f.Z.getOverride("animateStickers")) ? void 0 : e.value;
            }),
    ),
    ek = [],
    eU = (0, d.Zc)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => (null != e ? e : ek),
        (e) => e,
    ),
    eG = (0, d.Zc)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => (null != e ? e : ek),
        (e) => e,
        { delay: _.fy.FREQUENT_USER_ACTION },
    ),
    eZ = [],
    eF = (0, d.Zc)(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => (null != e ? e : eZ),
        (e) => e,
    );
(0, d.TG)({
    baseSetting: (0, d.Zc)(
        "privacy",
        "defaultGuildsActivityRestricted",
        (e) => e,
        (e) => (null != e ? e : a.E5.OFF),
    ),
    isEligible: () => (0, u.o0)("user_settings"),
    useIsEligible: () => (0, u.Yd)("user_settings"),
    ineligibleDefault: a.E5.OFF,
    eligibleDefault: () => a.E5.ON_FOR_LARGE_GUILDS,
});
let eB = (0, d.TG)({
        baseSetting: (0, d.Zc)(
            "privacy",
            "defaultGuildsActivityRestrictedV2",
            (e) => (e === a.GI.ACTIVITY_STATUS_UNSET ? null : e),
            (e) => (null != e ? e : a.GI.ACTIVITY_STATUS_OFF),
        ),
        isEligible: () => (0, u.o0)("user_settings"),
        useIsEligible: () => (0, u.Yd)("user_settings"),
        ineligibleDefault: a.GI.ACTIVITY_STATUS_OFF,
        eligibleDefault: () => a.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
    }),
    eV = (0, d.Zc)(
        "privacy",
        "familyCenterEnabledV2",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    eH = (0, d.Zc)(
        "privacy",
        "hideLegacyUsername",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    eY = (0, d.Zc)(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    eW = (0, d.Zc)(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => (null != e ? e : a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET),
        (e) => e,
    ),
    eK = (0, d.Zc)(
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
            explicitContentGuilds: null != t ? t : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentFriendDm: null != n ? n : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentNonFriendDm: null != r ? r : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
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
    eQ = (0, d.Zc)("textAndImages", "explicitContentSettings", ez, eq),
    eX = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = null != e ? e : {};
        return {
            goreContentGuilds: null != t ? t : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentFriendDm: null != n ? n : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentNonFriendDm: null != r ? r : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    eJ = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = e;
        return {
            goreContentGuilds: null != t ? t : void 0,
            goreContentFriendDm: null != n ? n : void 0,
            goreContentNonFriendDm: null != r ? r : void 0,
        };
    },
    e$ = (0, d.Zc)("textAndImages", "goreContentSettings", eX, eJ);
(0, d.Zc)(
    "appearance",
    "searchResultExactCountEnabled",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => o.D5.create({ value: e }),
),
    (0, d.Zc)(
        "appearance",
        "happeningNowCardsDisabled",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    );
let e0 = (0, d.Zc)(
    "appearance",
    "timestampHourCycle",
    (e) => (null != e ? e : a.hg.AUTO),
    (e) => e,
);
(0, d.Zc)(
    "appearance",
    "launchPadMode",
    (e) => (null != e ? e : a.l1.LAUNCH_PAD_DISABLED),
    (e) => e,
),
    (0, d.Zc)(
        "appearance",
        "swipeRightToLeftMode",
        (e) => (null != e ? e : a.n9.SWIPE_RIGHT_TO_LEFT_UNSET),
        (e) => e,
    );
let e1 = (0, d.Zc)(
        "userContent",
        "lastReceivedChangelogId",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    e3 = (0, d.Zc)(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => null != e && e,
        (e) => e,
    ),
    e2 = (0, d.Zc)(
        "appearance",
        "uiDensity",
        (e) => (e === a.Pi.UNSET_UI_DENSITY ? a.Pi.DEFAULT : null != e ? e : a.Pi.DEFAULT),
        (e) => e,
    ),
    e4 = (0, d.Zc)(
        "inAppFeedbackSettings",
        "inAppFeedbackStates",
        (e) =>
            (0, r.mapValues)(null != e ? e : {}, (e) =>
                (0, r.mapValues)(e, (e) => ((null == e ? void 0 : e.value) != null ? Number(e.value) : void 0)),
            ),
        (e) =>
            (0, r.mapValues)(e, (e) =>
                (0, r.mapValues)(e, (e) => o.wA.create({ value: null != e ? String(e) : void 0 })),
            ),
        { delay: _.fy.AUTOMATED },
    ),
    e5 = (0, d.Zc)(
        "textAndImages",
        "showMentionSuggestions",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    e8 = (0, d.Zc)(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    );
