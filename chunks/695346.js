n.d(t, {
    A2: () => e2,
    AY: () => ei,
    CM: () => el,
    CW: () => eM,
    Cr: () => eE,
    DC: () => ec,
    Eo: () => ez,
    Ex: () => eB,
    Fg: () => ee,
    G6: () => eh,
    H1: () => j,
    I0: () => U,
    JG: () => eV,
    JN: () => ea,
    JT: () => es,
    L1: () => eP,
    NA: () => eS,
    OW: () => ef,
    Ok: () => ey,
    Ou: () => Y,
    P4: () => eb,
    Pe: () => V,
    QK: () => ew,
    QZ: () => R,
    Qq: () => C,
    R$: () => y,
    RS: () => eI,
    R_: () => eZ,
    Rt: () => e0,
    SE: () => ej,
    Sb: () => eR,
    Sh: () => eK,
    T4: () => L,
    UP: () => e_,
    Wp: () => ex,
    Xc: () => F,
    Xk: () => M,
    Xr: () => ep,
    YC: () => e1,
    YT: () => A,
    Yk: () => eD,
    _O: () => x,
    _j: () => eF,
    bh: () => eo,
    bm: () => ed,
    cC: () => I,
    cP: () => H,
    co: () => eg,
    d$: () => Z,
    d4: () => D,
    d8: () => N,
    dN: () => b,
    eR: () => v,
    eo: () => G,
    ev: () => et,
    fq: () => O,
    fv: () => P,
    fz: () => T,
    gR: () => Q,
    gw: () => eQ,
    h2: () => J,
    hg: () => eJ,
    iG: () => X,
    iH: () => eU,
    j7: () => eX,
    jU: () => en,
    kJ: () => q,
    kU: () => er,
    l4: () => e$,
    lk: () => eY,
    mX: () => z,
    nc: () => eT,
    nh: () => eW,
    no: () => eG,
    qF: () => k,
    rN: () => eA,
    tU: () => eO,
    uL: () => B,
    uh: () => eq,
    vF: () => S,
    x4: () => ev,
    xM: () => eu,
    xq: () => $,
    zA: () => K,
    zY: () => eH,
}),
    n(388685);
var r = n(392711),
    i = n(442837),
    a = n(524437),
    o = n(381499),
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
        (e) => o.D5.create({ value: e }),
    ),
    y = (0, f.Zc)(
        "textAndImages",
        "useRichChatInput",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    O = (0, f.Zc)(
        "textAndImages",
        "includeStickersInAutocomplete",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    v = (0, f.Zc)(
        "textAndImages",
        "includeSoundmojiInAutocomplete",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    I = (0, f.Zc)(
        "textAndImages",
        "renderSpoilers",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : m.A2N.ON_CLICK;
        },
        (e) => o.Gm.create({ value: e }),
    ),
    S = (0, f.Zc)(
        "textAndImages",
        "useThreadSidebar",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    );
(0, f.Zc)(
    "notifications",
    "showInAppNotifications",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e }),
);
let T = (0, f.Zc)(
    "notifications",
    "reactionNotifications",
    (e) => (null != e ? e : a.Ns.NOTIFICATIONS_ENABLED),
    (e) => e,
);
(0, f.Zc)(
    "notifications",
    "customStatusPushNotifications",
    (e) => (null != e ? e : a.Oi.STATUS_PUSH_UNSET),
    (e) => e,
);
let A = (0, f.Zc)(
        "notifications",
        "gameActivityNotifications",
        (e) => (null != e ? e : a.Tv.ACTIVITY_NOTIFICATIONS_UNSET),
        (e) => e,
    ),
    C = (0, f.Zc)(
        "notifications",
        "gameActivityExcludeSteamNotifications",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    N = (0, f.Zc)(
        "notifications",
        "enableVoiceActivityNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    R = (0, f.Zc)(
        "notifications",
        "quietMode",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: !!e }),
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
        (e) => o.D5.create({ value: e }),
    ),
    M = (0, f.Zc)(
        "textAndImages",
        "showCommandSuggestions",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    k = (0, f.Zc)(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    U = (0, f.Zc)(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    G = (0, f.Zc)(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
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
        (e) => o.D5.create({ value: e }),
    ),
    V = (0, f.Zc)(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    H = (0, f.Zc)(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    Y = (0, f.Zc)(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
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
        (e) => o.D5.create({ value: e }),
    ),
    q = (0, f.Zc)(
        "privacy",
        "nonSpamRetrainingOptIn",
        (e) => (null == e ? void 0 : e.value),
        (e) => (null == e ? void 0 : o.D5.create({ value: e })),
    );
(0, f.Zc)(
    "privacy",
    "contactSyncEnabled",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => o.D5.create({ value: e }),
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
        (e) => o.D5.create({ value: e }),
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
    (e) => o.yC.create({ value: e }),
);
let $ = (0, f.TG)({
        baseSetting: (0, f.Zc)(
            "privacy",
            "friendSourceFlags",
            (e) => (null == e ? void 0 : e.value),
            (e) => o.yC.create({ value: e }),
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
            (e) => o.D5.create({ value: e }),
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
        (e) => o.D5.create({ value: e }),
    ),
    en = (0, f.Zc)(
        "textAndImages",
        "messageDisplayCompact",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
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
        (e) => o.A8.create({ value: e }),
    ),
    ea = (0, f.Zc)(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    eo = (0, f.Zc)(
        "privacy",
        "dropsOptedOut",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    es = (0, f.Zc)(
        "privacy",
        "quests3PDataOptedOut",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    );
(0, f.Zc)(
    "voiceAndVideo",
    "nativePhoneIntegrationEnabled",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e }),
);
let el = (0, f.TG)({
        baseSetting: (0, f.Zc)(
            "voiceAndVideo",
            "afkTimeout",
            (e) => (null == e ? void 0 : e.value),
            (e) => o.yC.create({ value: e }),
        ),
        isEligible: () => (0, l.mO)("user_settings"),
        useIsEligible: () => (0, l.Mk)("user_settings"),
        ineligibleDefault: 600,
        eligibleDefault: () => (0, l.fD)("user_settings"),
        onUseDefault: () => (0, l.Dl)("user_settings"),
    }),
    ec = (0, f.Zc)(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    eu = (0, f.Zc)(
        "textAndImages",
        "viewNsfwCommands",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    );
(0, f.Zc)(
    "privacy",
    "detectPlatformAccounts",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e }),
);
let ed = (0, f.Zc)(
        "gameLibrary",
        "disableGamesTab",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    ef = (0, f.Zc)(
        "textAndImages",
        "enableTtsCommand",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    e_ = (0, f.Zc)(
        "textAndImages",
        "explicitContentFilter",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : p.TI.NON_FRIENDS;
        },
        (e) => o.yC.create({ value: e }),
    );
(0, f.Zc)(
    "textAndImages",
    "dmSpamFilter",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) ? t : p.fQ.NON_FRIENDS;
    },
    (e) => o.yC.create({ value: e }),
);
let ep = (0, f.Zc)(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => (null != e ? e : a.Xr.DEFAULT_UNSET),
        (e) => e,
    ),
    eh = (0, f.Zc)(
        "status",
        "showCurrentGame",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    );
(0, f.Zc)(
    "privacy",
    "recentGamesEnabled",
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e }),
);
let em = new Set(Object.values(m.Skl)),
    eg = (0, f.Zc)(
        "status",
        "status",
        (e) => (null != e && em.has(e.value) ? e.value : m.Skl.UNKNOWN),
        (e) => o.Gm.create({ value: e }),
    ),
    eE = (0, f.Zc)(
        "status",
        "statusExpiresAtMs",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    eb = (0, f.Zc)(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    ey = (0, f.Zc)(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    eO = (0, f.Zc)(
        "clips",
        "allowVoiceRecording",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    ev = (0, f.KM)(
        (0, f.Zc)(
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
    eI = (0, f.KM)(
        (0, f.Zc)(
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
    eS = (0, f.KM)(
        (0, f.Zc)(
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
    eT = (0, f.KM)(
        (0, f.Zc)(
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
(0, f.KM)(
    (0, f.Zc)(
        "textAndImages",
        "defaultReactionEmoji",
        (e) => {
            let { emojiId: t, emojiName: n, animated: r } = null != e ? e : {};
            return {
                emojiId: null == t ? void 0 : t.value,
                emojiName: null == n ? void 0 : n.value,
                animated: null == r ? void 0 : r.value,
            };
        },
        (e) => {
            let { emojiId: t, emojiName: n, animated: r } = e;
            return {
                emojiId: o.wA.create({ value: t }),
                emojiName: o.Gm.create({ value: n }),
                animated: o.D5.create({ value: r }),
            };
        },
    ),
    "text",
    "defaultReactionEmoji",
);
let eA = (0, f.Zc)(
        "localization",
        "timezoneOffset",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : null;
        },
        (e) => o.T4.create({ value: null != e ? e : 0 }),
    ),
    eC = new Set([g.fx.AUTO, s.l.COZY, s.l.COMPACT]);
(0, f.Zc)(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eC.has(e.value) ? e.value : s.l.COZY),
    (e) => o.Gm.create({ value: e }),
);
let eN = new Set([s.Z.ALL, s.Z.UNREADS, s.Z.NONE]);
(0, f.Zc)(
    "appearance",
    "messagePreviews",
    (e) => (null != e && eN.has(e.value) ? e.value : s.Z.ALL),
    (e) => o.Gm.create({ value: e }),
);
let eR = (0, f.KM)(
        (0, f.Zc)(
            "appearance",
            "developerMode",
            (e) => null != e && e,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    eP = (0, f.Zc)(
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
    ),
    ew = (0, f.R2)(
        (0, f.KM)(
            (0, f.Zc)(
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
            return null == (e = _.Z.getOverride("gifAutoPlay")) ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([_.Z], () => {
                var e;
                return null == (e = _.Z.getOverride("gifAutoPlay")) ? void 0 : e.value;
            }),
    ),
    eD = (0, f.R2)(
        (0, f.KM)(
            (0, f.Zc)(
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
            return null == (e = _.Z.getOverride("animateEmoji")) ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([_.Z], () => {
                var e;
                return null == (e = _.Z.getOverride("animateEmoji")) ? void 0 : e.value;
            }),
    ),
    ex = (0, f.R2)(
        (0, f.KM)(
            (0, f.Zc)(
                "textAndImages",
                "animateStickers",
                (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.value) ? t : E.yr.ALWAYS_ANIMATE;
                },
                (e) => o.yC.create({ value: e }),
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
    eL = [],
    ej = (0, f.Zc)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => (null != e ? e : eL),
        (e) => e,
    ),
    eM = (0, f.Zc)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => (null != e ? e : eL),
        (e) => e,
        h.fy.FREQUENT_USER_ACTION,
    ),
    ek = [],
    eU = (0, f.Zc)(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => (null != e ? e : ek),
        (e) => e,
    );
(0, f.TG)({
    baseSetting: (0, f.Zc)(
        "privacy",
        "defaultGuildsActivityRestricted",
        (e) => e,
        (e) => (null != e ? e : a.E5.OFF),
    ),
    isEligible: () => (0, c.o0)("user_settings"),
    useIsEligible: () => (0, c.Yd)("user_settings"),
    ineligibleDefault: a.E5.OFF,
    eligibleDefault: () => a.E5.ON_FOR_LARGE_GUILDS,
});
let eG = (0, f.TG)({
        baseSetting: (0, f.Zc)(
            "privacy",
            "defaultGuildsActivityRestrictedV2",
            (e) => e,
            (e) => (null != e ? e : a.GI.ACTIVITY_STATUS_OFF),
        ),
        isEligible: () => (0, c.o0)("user_settings"),
        useIsEligible: () => (0, c.Yd)("user_settings"),
        ineligibleDefault: a.GI.ACTIVITY_STATUS_OFF,
        eligibleDefault: () => a.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
    }),
    eB = (0, f.Zc)(
        "privacy",
        "familyCenterEnabledV2",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    eZ = (0, f.Zc)(
        "privacy",
        "hideLegacyUsername",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    eF = (0, f.Zc)(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    eV = (0, f.Zc)(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => (null != e ? e : a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET),
        (e) => e,
    ),
    eH = (0, f.Zc)(
        "ads",
        "alwaysDeliver",
        (e) => null != e && e,
        (e) => e,
    ),
    eY = (e) => {
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
    eW = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = e;
        return {
            explicitContentGuilds: null != t ? t : void 0,
            explicitContentFriendDm: null != n ? n : void 0,
            explicitContentNonFriendDm: null != r ? r : void 0,
        };
    },
    eK = (0, f.Zc)("textAndImages", "explicitContentSettings", eY, eW),
    ez = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = null != e ? e : {};
        return {
            goreContentGuilds: null != t ? t : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentFriendDm: null != n ? n : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentNonFriendDm: null != r ? r : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    eq = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = e;
        return {
            goreContentGuilds: null != t ? t : void 0,
            goreContentFriendDm: null != n ? n : void 0,
            goreContentNonFriendDm: null != r ? r : void 0,
        };
    },
    eX = (0, f.Zc)("textAndImages", "goreContentSettings", ez, eq),
    eQ = (0, f.Zc)(
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
                profanity: o.D5.create({ value: t }),
                sexualContent: o.D5.create({ value: n }),
                slurs: o.D5.create({ value: r }),
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
    (e) => o.D5.create({ value: e }),
),
    (0, f.Zc)(
        "appearance",
        "happeningNowCardsDisabled",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    );
let eJ = (0, f.Zc)(
    "appearance",
    "timestampHourCycle",
    (e) => (null != e ? e : a.hg.AUTO),
    (e) => e,
);
(0, f.Zc)(
    "appearance",
    "launchPadMode",
    (e) => (null != e ? e : a.l1.LAUNCH_PAD_DISABLED),
    (e) => e,
),
    (0, f.Zc)(
        "appearance",
        "swipeRightToLeftMode",
        (e) => (null != e ? e : a.n9.SWIPE_RIGHT_TO_LEFT_UNSET),
        (e) => e,
    );
let e$ = (0, f.Zc)(
        "userContent",
        "lastReceivedChangelogId",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    e0 = (0, f.Zc)(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => null != e && e,
        (e) => e,
    ),
    e1 = (0, f.Zc)(
        "appearance",
        "uiDensity",
        (e) => (e === a.Pi.UNSET_UI_DENSITY ? a.Pi.DEFAULT : null != e ? e : a.Pi.DEFAULT),
        (e) => e,
    ),
    e2 = (0, f.Zc)(
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
        h.fy.AUTOMATED,
    );
