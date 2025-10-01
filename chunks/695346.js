n.d(t, {
    A2: () => e0,
    AY: () => en,
    CM: () => eo,
    CW: () => ex,
    Cr: () => em,
    DC: () => es,
    Eo: () => eW,
    Ex: () => eU,
    Fg: () => J,
    G6: () => e_,
    H1: () => L,
    HV: () => e1,
    I0: () => M,
    JG: () => eZ,
    JN: () => er,
    JT: () => ea,
    L1: () => eN,
    NA: () => ev,
    OW: () => eu,
    Ok: () => eE,
    Ou: () => V,
    P4: () => eg,
    Pe: () => Z,
    QK: () => eR,
    QZ: () => C,
    R$: () => y,
    RS: () => eO,
    R_: () => eG,
    Rt: () => eJ,
    SE: () => eL,
    Sb: () => eC,
    Sh: () => eY,
    T4: () => D,
    UP: () => ed,
    Wp: () => ew,
    Xc: () => B,
    Xk: () => x,
    Xr: () => ef,
    YC: () => e$,
    Yk: () => eP,
    _O: () => w,
    _j: () => eB,
    bh: () => ei,
    bm: () => ec,
    cC: () => I,
    cP: () => F,
    co: () => eh,
    d$: () => G,
    d4: () => P,
    d8: () => A,
    dN: () => b,
    eR: () => v,
    eo: () => k,
    ev: () => $,
    fq: () => O,
    fv: () => N,
    fz: () => S,
    gR: () => q,
    gw: () => eq,
    h2: () => X,
    hg: () => eX,
    iG: () => z,
    iH: () => eM,
    j7: () => ez,
    jU: () => ee,
    kJ: () => K,
    kU: () => et,
    l4: () => eQ,
    lk: () => eV,
    mX: () => W,
    nc: () => eI,
    nh: () => eH,
    no: () => ek,
    qF: () => j,
    rN: () => eT,
    tU: () => eb,
    uL: () => U,
    uh: () => eK,
    vF: () => T,
    x4: () => ey,
    xM: () => el,
    xq: () => Q,
    zA: () => Y,
    zY: () => eF,
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
    T = (0, f.Zc)(
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
let S = (0, f.Zc)(
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
        "enableVoiceActivityNotifications",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    C = (0, f.Zc)(
        "notifications",
        "quietMode",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: !!e }),
    ),
    N = (0, f.Zc)(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    R = [],
    P = (0, f.Zc)(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => (null != e ? e : R),
        (e) => e,
    ),
    w = (0, f.Zc)(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => (null != e ? e : R),
        (e) => e,
    ),
    D = (0, f.Zc)(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => (null != e ? e : R),
        (e) => e,
    ),
    L = (0, f.Zc)(
        "textAndImages",
        "viewImageDescriptions",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    x = (0, f.Zc)(
        "textAndImages",
        "showCommandSuggestions",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    j = (0, f.Zc)(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    M = (0, f.Zc)(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    k = (0, f.Zc)(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    U = "0",
    G = (0, f.Zc)(
        "notifications",
        "notificationCenterAckedBeforeId",
        (e) => (null != e ? e : U),
        (e) => e,
    ),
    B = (0, f.Zc)(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    Z = (0, f.Zc)(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    F = (0, f.Zc)(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    V = (0, f.Zc)(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    H = [],
    Y = (0, f.Zc)(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => (null != e ? e : H),
        (e) => e,
    ),
    W = (0, f.Zc)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    K = (0, f.Zc)(
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
let z = (0, f.Zc)(
        "privacy",
        "defaultGuildsRestricted",
        (e) => null != e && e,
        (e) => e,
    ),
    q = (0, f.Zc)(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    X = (0, f.Zc)(
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
let Q = (0, f.Zc)(
        "privacy",
        "friendSourceFlags",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : m.HGf;
        },
        (e) => o.yC.create({ value: e }),
    ),
    J = (0, f.TG)({
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
    $ = (0, f.Zc)(
        "textAndImages",
        "convertEmoticons",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    ee = (0, f.Zc)(
        "textAndImages",
        "messageDisplayCompact",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    et = (0, f.Zc)(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    en = (0, f.Zc)(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : 100;
        },
        (e) => o.A8.create({ value: e }),
    ),
    er = (0, f.Zc)(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    ei = (0, f.Zc)(
        "privacy",
        "dropsOptedOut",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    ea = (0, f.Zc)(
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
let eo = (0, f.TG)({
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
    es = (0, f.Zc)(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    el = (0, f.Zc)(
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
let ec = (0, f.Zc)(
        "gameLibrary",
        "disableGamesTab",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    eu = (0, f.Zc)(
        "textAndImages",
        "enableTtsCommand",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    ed = (0, f.Zc)(
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
let ef = (0, f.Zc)(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => (null != e ? e : a.Xr.DEFAULT_UNSET),
        (e) => e,
    ),
    e_ = (0, f.Zc)(
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
let ep = new Set(Object.values(m.Skl)),
    eh = (0, f.Zc)(
        "status",
        "status",
        (e) => (null != e && ep.has(e.value) ? e.value : m.Skl.UNKNOWN),
        (e) => o.Gm.create({ value: e }),
    ),
    em = (0, f.Zc)(
        "status",
        "statusExpiresAtMs",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    eg = (0, f.Zc)(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    eE = (0, f.Zc)(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    eb = (0, f.Zc)(
        "clips",
        "allowVoiceRecording",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    ey = (0, f.KM)(
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
    eO = (0, f.KM)(
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
    ev = (0, f.KM)(
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
    eI = (0, f.KM)(
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
        { comparator: s.Z },
    ),
    "text",
    "defaultReactionEmoji",
);
let eT = (0, f.Zc)(
        "localization",
        "timezoneOffset",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : null;
        },
        (e) => o.T4.create({ value: null != e ? e : 0 }),
    ),
    eS = new Set([g.fx.AUTO, l.l.COZY, l.l.COMPACT]);
(0, f.Zc)(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eS.has(e.value) ? e.value : l.l.COZY),
    (e) => o.Gm.create({ value: e }),
);
let eA = new Set([l.Z.ALL, l.Z.UNREADS, l.Z.NONE]);
(0, f.Zc)(
    "appearance",
    "messagePreviews",
    (e) => (null != e && eA.has(e.value) ? e.value : l.Z.ALL),
    (e) => o.Gm.create({ value: e }),
);
let eC = (0, f.KM)(
        (0, f.Zc)(
            "appearance",
            "developerMode",
            (e) => null != e && e,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    eN = (0, f.Zc)(
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
        { comparator: s.Z },
    ),
    eR = (0, f.R2)(
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
    eP = (0, f.R2)(
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
    ew = (0, f.R2)(
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
    eD = [],
    eL = (0, f.Zc)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => (null != e ? e : eD),
        (e) => e,
    ),
    ex = (0, f.Zc)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => (null != e ? e : eD),
        (e) => e,
        { delay: h.fy.FREQUENT_USER_ACTION },
    ),
    ej = [],
    eM = (0, f.Zc)(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => (null != e ? e : ej),
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
let ek = (0, f.TG)({
        baseSetting: (0, f.Zc)(
            "privacy",
            "defaultGuildsActivityRestrictedV2",
            (e) => e,
            (e) => (null != e ? e : a.GI.ACTIVITY_STATUS_OFF),
        ),
        isEligible: () => (0, u.o0)("user_settings"),
        useIsEligible: () => (0, u.Yd)("user_settings"),
        ineligibleDefault: a.GI.ACTIVITY_STATUS_OFF,
        eligibleDefault: () => a.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
    }),
    eU = (0, f.Zc)(
        "privacy",
        "familyCenterEnabledV2",
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e }),
    ),
    eG = (0, f.Zc)(
        "privacy",
        "hideLegacyUsername",
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    eB = (0, f.Zc)(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    ),
    eZ = (0, f.Zc)(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => (null != e ? e : a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET),
        (e) => e,
    ),
    eF = (0, f.Zc)(
        "ads",
        "alwaysDeliver",
        (e) => null != e && e,
        (e) => e,
    ),
    eV = (e) => {
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
    eH = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = e;
        return {
            explicitContentGuilds: null != t ? t : void 0,
            explicitContentFriendDm: null != n ? n : void 0,
            explicitContentNonFriendDm: null != r ? r : void 0,
        };
    },
    eY = (0, f.Zc)("textAndImages", "explicitContentSettings", eV, eH),
    eW = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = null != e ? e : {};
        return {
            goreContentGuilds: null != t ? t : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentFriendDm: null != n ? n : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentNonFriendDm: null != r ? r : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    eK = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = e;
        return {
            goreContentGuilds: null != t ? t : void 0,
            goreContentFriendDm: null != n ? n : void 0,
            goreContentNonFriendDm: null != r ? r : void 0,
        };
    },
    ez = (0, f.Zc)("textAndImages", "goreContentSettings", eW, eK),
    eq = (0, f.Zc)(
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
let eX = (0, f.Zc)(
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
let eQ = (0, f.Zc)(
        "userContent",
        "lastReceivedChangelogId",
        (e) => (null != e ? e : "0"),
        (e) => e,
    ),
    eJ = (0, f.Zc)(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => null != e && e,
        (e) => e,
    ),
    e$ = (0, f.Zc)(
        "appearance",
        "uiDensity",
        (e) => (e === a.Pi.UNSET_UI_DENSITY ? a.Pi.DEFAULT : null != e ? e : a.Pi.DEFAULT),
        (e) => e,
    ),
    e0 = (0, f.Zc)(
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
        { delay: h.fy.AUTOMATED },
    ),
    e1 = (0, f.Zc)(
        "textAndImages",
        "showMentionSuggestions",
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e }),
    );
