n.d(t, {
    A2: () => e2,
    AY: () => eo,
    CM: () => eu,
    CW: () => eU,
    Cr: () => ey,
    DC: () => ed,
    Eo: () => eQ,
    Ex: () => eB,
    Fg: () => en,
    G6: () => eg,
    H1: () => k,
    HV: () => e4,
    I0: () => Z,
    JG: () => eY,
    JN: () => es,
    JT: () => ec,
    JY: () => A,
    L1: () => eD,
    NA: () => eC,
    OW: () => e_,
    Ok: () => ev,
    Ou: () => K,
    P4: () => eO,
    Pe: () => Y,
    QK: () => ex,
    QZ: () => w,
    R$: () => y,
    RS: () => eT,
    R_: () => eV,
    Rt: () => e1,
    SE: () => ek,
    Sb: () => ew,
    Sh: () => eq,
    T4: () => M,
    UP: () => em,
    Wp: () => ej,
    Xc: () => H,
    Xk: () => U,
    Xr: () => eh,
    YC: () => e3,
    Yk: () => eL,
    _O: () => j,
    _j: () => eH,
    a7: () => R,
    bh: () => el,
    bm: () => ep,
    cC: () => S,
    cP: () => W,
    co: () => eb,
    d$: () => V,
    d4: () => L,
    d8: () => C,
    dN: () => b,
    eR: () => v,
    eo: () => F,
    ev: () => er,
    fq: () => O,
    fv: () => D,
    fz: () => T,
    gR: () => $,
    h2: () => ee,
    hg: () => e$,
    iG: () => J,
    iH: () => eZ,
    j7: () => eJ,
    jU: () => ei,
    kJ: () => X,
    kU: () => ea,
    l4: () => e0,
    lk: () => eK,
    mX: () => Q,
    nc: () => eA,
    nh: () => ez,
    no: () => eF,
    p1: () => P,
    qF: () => G,
    rN: () => eN,
    rR: () => e5,
    tU: () => eS,
    uL: () => B,
    uh: () => eX,
    vF: () => I,
    vc: () => N,
    x4: () => eI,
    xM: () => ef,
    xq: () => et,
    zA: () => q,
    zY: () => eW,
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
    d = n(262572),
    f = n(560997),
    p = n(263937),
    _ = n(973005),
    m = n(526761),
    h = n(981631),
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
    S = (0, f.Zc)(
        "textAndImages",
        "renderSpoilers",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : h.A2N.ON_CLICK;
        },
        (e) => o.Gm.create({ value: e }),
    ),
    I = (0, f.Zc)(
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
let C = (0, f.Zc)(
        "notifications",
        "enableVoiceActivityNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    A = (0, f.Zc)(
        "notifications",
        "enableFriendOnlineNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    N = (0, f.Zc)(
        "notifications",
        "enableFriendAnniversaryNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    P = (0, f.Zc)(
        "notifications",
        "enableGameUpdateNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    R = (0, f.Zc)(
        "notifications",
        "enableProfileUpdatesNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    w = (0, f.Zc)(
        "notifications",
        "quietMode",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    D = (0, f.Zc)(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    x = [],
    L = (0, f.Zc)(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => (null != e ? e : x),
        (e) => e,
    ),
    j = (0, f.Zc)(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => (null != e ? e : x),
        (e) => e,
    ),
    M = (0, f.Zc)(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => (null != e ? e : x),
        (e) => e,
    ),
    k = (0, f.Zc)(
        "textAndImages",
        "viewImageDescriptions",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    U = (0, f.Zc)(
        "textAndImages",
        "showCommandSuggestions",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    G = (0, f.Zc)(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    Z = (0, f.Zc)(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    F = (0, f.Zc)(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    B = "0",
    V = (0, f.Zc)(
        "notifications",
        "notificationCenterAckedBeforeId",
        (e) => (null != e ? e : B),
        (e) => e,
    ),
    H = (0, f.Zc)(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    Y = (0, f.Zc)(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    W = (0, f.Zc)(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    K = (0, f.Zc)(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    z = [],
    q = (0, f.Zc)(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => (null != e ? e : z),
        (e) => e,
    ),
    Q = (0, f.Zc)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    X = (0, f.Zc)(
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
let J = (0, f.Zc)(
        "privacy",
        "defaultGuildsRestricted",
        (e) => null != e && e,
        (e) => e,
    ),
    $ = (0, f.Zc)(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    ee = (0, f.Zc)(
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
let et = (0, f.Zc)(
        "privacy",
        "friendSourceFlags",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : h.HGf;
        },
        (e) => o.yC.create({ value: e }),
    ),
    en = (0, f.TG)({
        baseSetting: (0, f.Zc)(
            "debug",
            "rtcPanelShowVoiceStates",
            (e) => (null == e ? void 0 : e.value),
            (e) => o.D5.create({ value: e }),
        ),
        isEligible: () =>
            (0, d.d)({
                location: "UserSettings",
                autoTrackExposure: !1,
            }).enableRTCPanelVoiceStatesByDefault,
        useIsEligible: () =>
            (0, d.t)({
                location: "UserSettings",
                autoTrackExposure: !1,
            }).enableRTCPanelVoiceStatesByDefault,
        ineligibleDefault: !1,
        eligibleDefault: () => !0,
        onUseDefault: () => {
            (0, d.d)({ location: "UserSettings" });
        },
    }),
    er = (0, f.Zc)(
        "textAndImages",
        "convertEmoticons",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    ei = (0, f.Zc)(
        "textAndImages",
        "messageDisplayCompact",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    ea = (0, f.Zc)(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    eo = (0, f.Zc)(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : 100;
        },
        (e) => o.A8.create({ value: e }),
    ),
    es = (0, f.Zc)(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    el = (0, f.Zc)(
        "privacy",
        "dropsOptedOut",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    ec = (0, f.Zc)(
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
let eu = (0, f.TG)({
        baseSetting: (0, f.Zc)(
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
    ed = (0, f.Zc)(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    ef = (0, f.Zc)(
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
let ep = (0, f.Zc)(
        "gameLibrary",
        "disableGamesTab",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    e_ = (0, f.Zc)(
        "textAndImages",
        "enableTtsCommand",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    em = (0, f.Zc)(
        "textAndImages",
        "explicitContentFilter",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : _.TI.NON_FRIENDS;
        },
        (e) => o.yC.create({ value: e }),
    );
(0, f.Zc)(
    "textAndImages",
    "dmSpamFilter",
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) ? t : _.fQ.NON_FRIENDS;
    },
    (e) => o.yC.create({ value: e }),
);
let eh = (0, f.Zc)(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => (null != e ? e : a.Xr.DEFAULT_UNSET),
        (e) => e,
    ),
    eg = (0, f.Zc)(
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
let eE = new Set(Object.values(h.Skl)),
    eb = (0, f.Zc)(
        "status",
        "status",
        (e) => (null != e && eE.has(e.value) ? e.value : h.Skl.UNKNOWN),
        (e) => o.Gm.create({ value: e }),
    ),
    ey = (0, f.Zc)(
        "status",
        "statusExpiresAtMs",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    eO = (0, f.Zc)(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    ev = (0, f.Zc)(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    eS = (0, f.Zc)(
        "clips",
        "allowVoiceRecording",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    eI = (0, f.KM)(
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
    eT = (0, f.KM)(
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
    eC = (0, f.KM)(
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
    eA = (0, f.KM)(
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
let eN = (0, f.Zc)(
        "localization",
        "timezoneOffset",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : null;
        },
        (e) => o.T4.create({ value: null != e ? e : 0 }),
    ),
    eP = new Set([g.fx.AUTO, l.l.COZY, l.l.COMPACT]);
(0, f.Zc)(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eP.has(e.value) ? e.value : l.l.COZY),
    (e) => o.Gm.create({ value: e }),
);
let eR = new Set([l.Z.ALL, l.Z.UNREADS, l.Z.NONE]);
(0, f.Zc)(
    "appearance",
    "messagePreviews",
    (e) => (null != e && eR.has(e.value) ? e.value : l.Z.ALL),
    (e) => o.Gm.create({ value: e }),
);
let ew = (0, f.KM)(
        (0, f.Zc)(
            "appearance",
            "developerMode",
            (e) => null != e && e,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    eD = (0, f.Zc)(
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
    ex = (0, f.R2)(
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
            return null == (e = p.Z.getOverride("gifAutoPlay")) ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([p.Z], () => {
                var e;
                return null == (e = p.Z.getOverride("gifAutoPlay")) ? void 0 : e.value;
            }),
    ),
    eL = (0, f.R2)(
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
            return null == (e = p.Z.getOverride("animateEmoji")) ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([p.Z], () => {
                var e;
                return null == (e = p.Z.getOverride("animateEmoji")) ? void 0 : e.value;
            }),
    ),
    ej = (0, f.R2)(
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
            return null == (e = p.Z.getOverride("animateStickers")) ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([p.Z], () => {
                var e;
                return null == (e = p.Z.getOverride("animateStickers")) ? void 0 : e.value;
            }),
    ),
    eM = [],
    ek = (0, f.Zc)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => (null != e ? e : eM),
        (e) => e,
    ),
    eU = (0, f.Zc)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => (null != e ? e : eM),
        (e) => e,
        { delay: m.fy.FREQUENT_USER_ACTION },
    ),
    eG = [],
    eZ = (0, f.Zc)(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => (null != e ? e : eG),
        (e) => e,
    );
(0, f.TG)({
    baseSetting: (0, f.Zc)(
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
let eF = (0, f.TG)({
        baseSetting: (0, f.Zc)(
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
    eB = (0, f.Zc)(
        "privacy",
        "familyCenterEnabledV2",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    eV = (0, f.Zc)(
        "privacy",
        "hideLegacyUsername",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    eH = (0, f.Zc)(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    eY = (0, f.Zc)(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => (null != e ? e : a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET),
        (e) => e,
    ),
    eW = (0, f.Zc)(
        "ads",
        "alwaysDeliver",
        (e) => null != e && e,
        (e) => e,
    ),
    eK = (e) => {
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
    ez = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = e;
        return {
            explicitContentGuilds: null != t ? t : void 0,
            explicitContentFriendDm: null != n ? n : void 0,
            explicitContentNonFriendDm: null != r ? r : void 0,
        };
    },
    eq = (0, f.Zc)("textAndImages", "explicitContentSettings", eK, ez),
    eQ = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = null != e ? e : {};
        return {
            goreContentGuilds: null != t ? t : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentFriendDm: null != n ? n : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentNonFriendDm: null != r ? r : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    eX = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = e;
        return {
            goreContentGuilds: null != t ? t : void 0,
            goreContentFriendDm: null != n ? n : void 0,
            goreContentNonFriendDm: null != r ? r : void 0,
        };
    },
    eJ = (0, f.Zc)("textAndImages", "goreContentSettings", eQ, eX);
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
let e$ = (0, f.Zc)(
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
let e0 = (0, f.Zc)(
        "userContent",
        "lastReceivedChangelogId",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    e1 = (0, f.Zc)(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => null != e && e,
        (e) => e,
    ),
    e3 = (0, f.Zc)(
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
        { delay: m.fy.AUTOMATED },
    ),
    e4 = (0, f.Zc)(
        "textAndImages",
        "showMentionSuggestions",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    e5 = (0, f.Zc)(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    );
