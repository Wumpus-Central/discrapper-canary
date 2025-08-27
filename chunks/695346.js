n.d(t, {
    A2: () => e$,
    AY: () => ei,
    CM: () => ea,
    CW: () => ex,
    Cr: () => em,
    DC: () => es,
    Ex: () => ek,
    Fg: () => ee,
    G6: () => e_,
    H1: () => j,
    I0: () => U,
    JG: () => eB,
    L1: () => eC,
    NA: () => eO,
    OW: () => eu,
    Ok: () => eg,
    Ou: () => Y,
    Pe: () => V,
    QK: () => eN,
    QZ: () => R,
    Qq: () => C,
    R$: () => y,
    RS: () => ey,
    R_: () => eU,
    Rt: () => eQ,
    SE: () => eD,
    Sb: () => eA,
    Sh: () => eH,
    T4: () => L,
    UP: () => ed,
    Wp: () => eP,
    Xc: () => F,
    Xk: () => M,
    Xr: () => ef,
    YC: () => eJ,
    YT: () => A,
    Yk: () => eR,
    _O: () => x,
    _j: () => eG,
    bh: () => eo,
    bm: () => ec,
    cC: () => I,
    cP: () => H,
    co: () => eh,
    d$: () => Z,
    d4: () => D,
    d8: () => N,
    dN: () => b,
    eR: () => v,
    eo: () => G,
    ev: () => et,
    fq: () => O,
    fv: () => P,
    fz: () => S,
    gR: () => Q,
    gw: () => ez,
    h2: () => J,
    hg: () => eq,
    iG: () => X,
    iH: () => ej,
    j7: () => eK,
    jU: () => en,
    kJ: () => q,
    kU: () => er,
    l4: () => eX,
    mX: () => z,
    nc: () => ev,
    no: () => eM,
    qF: () => k,
    rN: () => eI,
    tU: () => eE,
    uL: () => B,
    vF: () => T,
    x4: () => eb,
    xM: () => el,
    xq: () => $,
    zA: () => K,
    zY: () => eZ,
}),
    n(388685);
var r = n(392711),
    i = n(442837),
    o = n(524437),
    a = n(381499),
    s = n(85746),
    l = n(291741),
    c = n(362352),
    u = n(262572),
    d = n(497060),
    f = n(560997),
    _ = n(263937),
    p = n(973005),
    h = n(526761),
    m = n(981631),
    g = n(969943),
    E = n(611480);
let b = (0, f.Zc)(
        "textAndImages",
        "useLegacyChatInput",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    y = (0, f.Zc)(
        "textAndImages",
        "useRichChatInput",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    O = (0, f.Zc)(
        "textAndImages",
        "includeStickersInAutocomplete",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    v = (0, f.Zc)(
        "textAndImages",
        "includeSoundmojiInAutocomplete",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    I = (0, f.Zc)(
        "textAndImages",
        "renderSpoilers",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : m.A2N.ON_CLICK;
        },
        (e) => a.Gm.create({ value: e }),
    ),
    T = (0, f.Zc)(
        "textAndImages",
        "useThreadSidebar",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e }),
    );
(0, f.Zc)(
    "notifications",
    "showInAppNotifications",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => a.D5.create({ value: e }),
);
let S = (0, f.Zc)(
    "notifications",
    "reactionNotifications",
    (e) => (null != e ? e : o.Ns.NOTIFICATIONS_ENABLED),
    (e) => e,
);
(0, f.Zc)(
    "notifications",
    "customStatusPushNotifications",
    (e) => (null != e ? e : o.Oi.STATUS_PUSH_UNSET),
    (e) => e,
);
let A = (0, f.Zc)(
        "notifications",
        "gameActivityNotifications",
        (e) => (null != e ? e : o.Tv.ACTIVITY_NOTIFICATIONS_UNSET),
        (e) => e,
    ),
    C = (0, f.Zc)(
        "notifications",
        "gameActivityExcludeSteamNotifications",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: !!e }),
    ),
    N = (0, f.Zc)(
        "notifications",
        "enableVoiceActivityNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: !!e }),
    ),
    R = (0, f.Zc)(
        "notifications",
        "quietMode",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: !!e }),
    ),
    P = (0, f.Zc)(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    w = [],
    D = (0, f.Zc)(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => (null != e ? e : w),
        (e) => e,
    ),
    x = (0, f.Zc)(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => (null != e ? e : w),
        (e) => e,
    ),
    L = (0, f.Zc)(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => (null != e ? e : w),
        (e) => e,
    ),
    j = (0, f.Zc)(
        "textAndImages",
        "viewImageDescriptions",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    M = (0, f.Zc)(
        "textAndImages",
        "showCommandSuggestions",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    k = (0, f.Zc)(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    U = (0, f.Zc)(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e }),
    ),
    G = (0, f.Zc)(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e }),
    ),
    B = "0",
    Z = (0, f.Zc)(
        "notifications",
        "notificationCenterAckedBeforeId",
        (e) => (null != e ? e : B),
        (e) => e,
    ),
    F = (0, f.Zc)(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    V = (0, f.Zc)(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    H = (0, f.Zc)(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    Y = (0, f.Zc)(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    W = [],
    K = (0, f.Zc)(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => (null != e ? e : W),
        (e) => e,
    ),
    z = (0, f.Zc)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e }),
    ),
    q = (0, f.Zc)(
        "privacy",
        "nonSpamRetrainingOptIn",
        (e) => (null == e ? void 0 : e.value),
        (e) => (null == e ? void 0 : a.D5.create({ value: e })),
    );
(0, f.Zc)(
    "privacy",
    "contactSyncEnabled",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => a.D5.create({ value: e }),
);
let X = (0, f.Zc)(
        "privacy",
        "defaultGuildsRestricted",
        (e) => null != e && e,
        (e) => e,
    ),
    Q = (0, f.Zc)(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e }),
    ),
    J = (0, f.Zc)(
        "privacy",
        "restrictedGuildIds",
        (e) => (null != e ? e : []),
        (e) => e,
    );
(0, f.Zc)(
    "privacy",
    "friendDiscoveryFlags",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) ? t : 0;
    },
    (e) => a.yC.create({ value: e }),
);
let $ = (0, f.TG)({
        baseSetting: (0, f.Zc)(
            "privacy",
            "friendSourceFlags",
            (e) => (null == e ? void 0 : e.value),
            (e) => a.yC.create({ value: e }),
        ),
        isEligible: () => (0, d.k6)("user_settings"),
        useIsEligible: () => (0, d.kH)("user_settings"),
        ineligibleDefault: m.HGf,
        eligibleDefault: () => m.O8q,
    }),
    ee = (0, f.TG)({
        baseSetting: (0, f.Zc)(
            "debug",
            "rtcPanelShowVoiceStates",
            (e) => (null == e ? void 0 : e.value),
            (e) => a.D5.create({ value: e }),
        ),
        isEligible: () =>
            (0, u.d)({
                location: "UserSettings",
                autoTrackExposure: !1,
            }).enableRTCPanelVoiceStatesByDefault,
        useIsEligible: () =>
            (0, u.t)({
                location: "UserSettings",
                autoTrackExposure: !1,
            }).enableRTCPanelVoiceStatesByDefault,
        ineligibleDefault: !1,
        eligibleDefault: () => !0,
        onUseDefault: () => {
            (0, u.d)({ location: "UserSettings" });
        },
    }),
    et = (0, f.Zc)(
        "textAndImages",
        "convertEmoticons",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    en = (0, f.Zc)(
        "textAndImages",
        "messageDisplayCompact",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    er = (0, f.Zc)(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    ei = (0, f.Zc)(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : 100;
        },
        (e) => a.A8.create({ value: e }),
    );
(0, f.Zc)(
    "voiceAndVideo",
    "streamNotificationsEnabled",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => a.D5.create({ value: e }),
);
let eo = (0, f.Zc)(
    "privacy",
    "dropsOptedOut",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => a.D5.create({ value: e }),
);
(0, f.Zc)(
    "privacy",
    "quests3PDataOptedOut",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => a.D5.create({ value: e }),
),
    (0, f.Zc)(
        "voiceAndVideo",
        "nativePhoneIntegrationEnabled",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e }),
    );
let ea = (0, f.TG)({
        baseSetting: (0, f.Zc)(
            "voiceAndVideo",
            "afkTimeout",
            (e) => (null == e ? void 0 : e.value),
            (e) => a.yC.create({ value: e }),
        ),
        isEligible: () => (0, l.mO)("user_settings"),
        useIsEligible: () => (0, l.Mk)("user_settings"),
        ineligibleDefault: 600,
        eligibleDefault: () => (0, l.fD)("user_settings"),
        onUseDefault: () => (0, l.Dl)("user_settings"),
    }),
    es = (0, f.Zc)(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    el = (0, f.Zc)(
        "textAndImages",
        "viewNsfwCommands",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e }),
    );
(0, f.Zc)(
    "privacy",
    "detectPlatformAccounts",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => a.D5.create({ value: e }),
);
let ec = (0, f.Zc)(
        "gameLibrary",
        "disableGamesTab",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    eu = (0, f.Zc)(
        "textAndImages",
        "enableTtsCommand",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    ed = (0, f.Zc)(
        "textAndImages",
        "explicitContentFilter",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : p.TI.NON_FRIENDS;
        },
        (e) => a.yC.create({ value: e }),
    );
(0, f.Zc)(
    "textAndImages",
    "dmSpamFilter",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) ? t : p.fQ.NON_FRIENDS;
    },
    (e) => a.yC.create({ value: e }),
);
let ef = (0, f.Zc)(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => (null != e ? e : o.Xr.DEFAULT_UNSET),
        (e) => e,
    ),
    e_ = (0, f.Zc)(
        "status",
        "showCurrentGame",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e }),
    );
(0, f.Zc)(
    "privacy",
    "recentGamesEnabled",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => a.D5.create({ value: e }),
);
let ep = new Set(Object.values(m.Skl)),
    eh = (0, f.Zc)(
        "status",
        "status",
        (e) => (null != e && ep.has(e.value) ? e.value : m.Skl.UNKNOWN),
        (e) => a.Gm.create({ value: e }),
    ),
    em = (0, f.Zc)(
        "status",
        "statusExpiresAtMs",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    eg = (0, f.Zc)(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    eE = (0, f.Zc)(
        "clips",
        "allowVoiceRecording",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    eb = (0, f.KM)(
        (0, f.Zc)(
            "textAndImages",
            "inlineAttachmentMedia",
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => a.D5.create({ value: e }),
        ),
        "text",
        "inlineAttachmentMedia",
    ),
    ey = (0, f.KM)(
        (0, f.Zc)(
            "textAndImages",
            "inlineEmbedMedia",
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => a.D5.create({ value: e }),
        ),
        "text",
        "inlineEmbedMedia",
    ),
    eO = (0, f.KM)(
        (0, f.Zc)(
            "textAndImages",
            "renderEmbeds",
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => a.D5.create({ value: e }),
        ),
        "text",
        "renderEmbeds",
    ),
    ev = (0, f.KM)(
        (0, f.Zc)(
            "textAndImages",
            "renderReactions",
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => a.D5.create({ value: e }),
        ),
        "text",
        "renderReactions",
    );
(0, f.KM)(
    (0, f.Zc)(
        "textAndImages",
        "defaultReactionEmoji",
        (e) => {
            let { emojiId: t, emojiName: n } = null != e ? e : {};
            return {
                emojiId: null == t ? void 0 : t.value,
                emojiName: null == n ? void 0 : n.value,
            };
        },
        (e) => {
            let { emojiId: t, emojiName: n } = e;
            return {
                emojiId: a.wA.create({ value: t }),
                emojiName: a.Gm.create({ value: n }),
            };
        },
    ),
    "text",
    "defaultReactionEmoji",
);
let eI = (0, f.Zc)(
        "localization",
        "timezoneOffset",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : null;
        },
        (e) => a.T4.create({ value: null != e ? e : 0 }),
    ),
    eT = new Set([g.fx.AUTO, s.l.COZY, s.l.COMPACT]);
(0, f.Zc)(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eT.has(e.value) ? e.value : s.l.COZY),
    (e) => a.Gm.create({ value: e }),
);
let eS = new Set([s.Z.ALL, s.Z.UNREADS, s.Z.NONE]);
(0, f.Zc)(
    "appearance",
    "messagePreviews",
    (e) => (null != e && eS.has(e.value) ? e.value : s.Z.ALL),
    (e) => a.Gm.create({ value: e }),
);
let eA = (0, f.KM)(
        (0, f.Zc)(
            "appearance",
            "developerMode",
            (e) => null != e && e,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    eC = (0, f.Zc)(
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
                null != e.backgroundGradientPresetId ? a.yC.create({ value: e.backgroundGradientPresetId }) : void 0,
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
    ),
    eN = (0, f.R2)(
        (0, f.KM)(
            (0, f.Zc)(
                "textAndImages",
                "gifAutoPlay",
                (e) => {
                    var t;
                    return null == (t = null == e ? void 0 : e.value) || t;
                },
                (e) => a.D5.create({ value: e }),
            ),
            "text",
            "gifAutoPlay",
        ),
        "gifAutoPlay",
        () => {
            var e;
            return null == (e = _.Z.getOverride("gifAutoPlay")) ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([_.Z], () => {
                var e;
                return null == (e = _.Z.getOverride("gifAutoPlay")) ? void 0 : e.value;
            }),
    ),
    eR = (0, f.R2)(
        (0, f.KM)(
            (0, f.Zc)(
                "textAndImages",
                "animateEmoji",
                (e) => {
                    var t;
                    return null == (t = null == e ? void 0 : e.value) || t;
                },
                (e) => a.D5.create({ value: e }),
            ),
            "text",
            "animateEmoji",
        ),
        "animateEmoji",
        () => {
            var e;
            return null == (e = _.Z.getOverride("animateEmoji")) ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([_.Z], () => {
                var e;
                return null == (e = _.Z.getOverride("animateEmoji")) ? void 0 : e.value;
            }),
    ),
    eP = (0, f.R2)(
        (0, f.KM)(
            (0, f.Zc)(
                "textAndImages",
                "animateStickers",
                (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.value) ? t : E.yr.ALWAYS_ANIMATE;
                },
                (e) => a.yC.create({ value: e }),
            ),
            "text",
            "animateStickers",
        ),
        "animateStickers",
        () => {
            var e;
            return null == (e = _.Z.getOverride("animateStickers")) ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([_.Z], () => {
                var e;
                return null == (e = _.Z.getOverride("animateStickers")) ? void 0 : e.value;
            }),
    ),
    ew = [],
    eD = (0, f.Zc)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => (null != e ? e : ew),
        (e) => e,
    ),
    ex = (0, f.Zc)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => (null != e ? e : ew),
        (e) => e,
        h.fy.FREQUENT_USER_ACTION,
    ),
    eL = [],
    ej = (0, f.Zc)(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => (null != e ? e : eL),
        (e) => e,
    );
(0, f.TG)({
    baseSetting: (0, f.Zc)(
        "privacy",
        "defaultGuildsActivityRestricted",
        (e) => e,
        (e) => (null != e ? e : o.E5.OFF),
    ),
    isEligible: () => (0, c.o0)("user_settings"),
    useIsEligible: () => (0, c.Yd)("user_settings"),
    ineligibleDefault: o.E5.OFF,
    eligibleDefault: () => o.E5.ON_FOR_LARGE_GUILDS,
});
let eM = (0, f.TG)({
        baseSetting: (0, f.Zc)(
            "privacy",
            "defaultGuildsActivityRestrictedV2",
            (e) => e,
            (e) => (null != e ? e : o.GI.ACTIVITY_STATUS_OFF),
        ),
        isEligible: () => (0, c.o0)("user_settings"),
        useIsEligible: () => (0, c.Yd)("user_settings"),
        ineligibleDefault: o.GI.ACTIVITY_STATUS_OFF,
        eligibleDefault: () => o.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
    }),
    ek = (0, f.Zc)(
        "privacy",
        "familyCenterEnabledV2",
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e }),
    ),
    eU = (0, f.Zc)(
        "privacy",
        "hideLegacyUsername",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    eG = (0, f.Zc)(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e }),
    ),
    eB = (0, f.Zc)(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => (null != e ? e : o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET),
        (e) => e,
    ),
    eZ = (0, f.Zc)(
        "ads",
        "alwaysDeliver",
        (e) => null != e && e,
        (e) => e,
    ),
    eF = (e) => {
        let {
            explicitContentGuilds: t,
            explicitContentFriendDm: n,
            explicitContentNonFriendDm: r,
        } = null != e ? e : {};
        return {
            explicitContentGuilds: null != t ? t : o.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentFriendDm: null != n ? n : o.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentNonFriendDm: null != r ? r : o.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    eV = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = e;
        return {
            explicitContentGuilds: null != t ? t : void 0,
            explicitContentFriendDm: null != n ? n : void 0,
            explicitContentNonFriendDm: null != r ? r : void 0,
        };
    },
    eH = (0, f.Zc)("textAndImages", "explicitContentSettings", eF, eV),
    eY = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = null != e ? e : {};
        return {
            goreContentGuilds: null != t ? t : o.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentFriendDm: null != n ? n : o.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentNonFriendDm: null != r ? r : o.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    eW = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = e;
        return {
            goreContentGuilds: null != t ? t : void 0,
            goreContentFriendDm: null != n ? n : void 0,
            goreContentNonFriendDm: null != r ? r : void 0,
        };
    },
    eK = (0, f.Zc)("textAndImages", "goreContentSettings", eY, eW),
    ez = (0, f.Zc)(
        "textAndImages",
        "keywordFilterSettings",
        (e) => {
            let { profanity: t, sexualContent: n, slurs: r } = null != e ? e : {};
            return {
                profanity: null == t ? void 0 : t.value,
                sexualContent: null == n ? void 0 : n.value,
                slurs: null == r ? void 0 : r.value,
            };
        },
        (e) => {
            let { profanity: t, sexualContent: n, slurs: r } = e;
            return {
                profanity: a.D5.create({ value: t }),
                sexualContent: a.D5.create({ value: n }),
                slurs: a.D5.create({ value: r }),
            };
        },
    );
(0, f.Zc)(
    "appearance",
    "searchResultExactCountEnabled",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => a.D5.create({ value: e }),
),
    (0, f.Zc)(
        "appearance",
        "happeningNowCardsDisabled",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e }),
    );
let eq = (0, f.Zc)(
    "appearance",
    "timestampHourCycle",
    (e) => (null != e ? e : o.hg.AUTO),
    (e) => e,
);
(0, f.Zc)(
    "appearance",
    "launchPadMode",
    (e) => (null != e ? e : o.l1.LAUNCH_PAD_DISABLED),
    (e) => e,
),
    (0, f.Zc)(
        "appearance",
        "swipeRightToLeftMode",
        (e) => (null != e ? e : o.n9.SWIPE_RIGHT_TO_LEFT_UNSET),
        (e) => e,
    );
let eX = (0, f.Zc)(
        "userContent",
        "lastReceivedChangelogId",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    eQ = (0, f.Zc)(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => null != e && e,
        (e) => e,
    ),
    eJ = (0, f.Zc)(
        "appearance",
        "uiDensity",
        (e) => (e === o.Pi.UNSET_UI_DENSITY ? o.Pi.DEFAULT : null != e ? e : o.Pi.DEFAULT),
        (e) => e,
    ),
    e$ = (0, f.Zc)(
        "inAppFeedbackSettings",
        "inAppFeedbackStates",
        (e) =>
            (0, r.mapValues)(null != e ? e : {}, (e) =>
                (0, r.mapValues)(e, (e) => ((null == e ? void 0 : e.value) != null ? Number(e.value) : void 0)),
            ),
        (e) =>
            (0, r.mapValues)(e, (e) =>
                (0, r.mapValues)(e, (e) => a.wA.create({ value: null != e ? String(e) : void 0 })),
            ),
        h.fy.AUTOMATED,
    );
