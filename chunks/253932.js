"use strict";
n.d(t, {
    $s: () => J,
    Bh: () => v,
    CY: () => eA,
    D_: () => g,
    FA: () => ee,
    G2: () => eT,
    H1: () => eo,
    HO: () => ea,
    HZ: () => eW,
    Hu: () => e6,
    Iv: () => eK,
    JG: () => ek,
    JI: () => eb,
    JV: () => b,
    Jr: () => L,
    Kg: () => ec,
    LJ: () => e4,
    ML: () => A,
    NF: () => eq,
    NO: () => D,
    NR: () => C,
    PZ: () => eQ,
    Pf: () => Y,
    Pw: () => eU,
    Q$: () => eS,
    Q_: () => eD,
    Qe: () => ed,
    Qr: () => R,
    S0: () => eM,
    SI: () => E,
    SY: () => S,
    Sf: () => ex,
    T3: () => O,
    TA: () => eY,
    UM: () => K,
    Vd: () => e$,
    Vv: () => ez,
    WY: () => X,
    X6: () => ey,
    Xi: () => e1,
    YX: () => q,
    Yh: () => es,
    Yt: () => e2,
    Zk: () => eH,
    Zp: () => y,
    Zr: () => $,
    Zt: () => Z,
    _3: () => U,
    _6: () => eI,
    _8: () => eX,
    _Z: () => eV,
    _z: () => k,
    b0: () => P,
    bm: () => G,
    cU: () => eu,
    cj: () => ep,
    dG: () => ei,
    dm: () => eB,
    e: () => W,
    eK: () => I,
    eh: () => eL,
    gs: () => T,
    hD: () => ev,
    hH: () => er,
    he: () => eh,
    iM: () => x,
    j0: () => e0,
    j7: () => en,
    jP: () => eE,
    jW: () => eN,
    kt: () => ew,
    l_: () => e_,
    m$: () => ej,
    n6: () => Q,
    ng: () => e3,
    ns: () => j,
    on: () => ef,
    oz: () => N,
    pE: () => eF,
    pK: () => eJ,
    qN: () => eZ,
    rs: () => eC,
    tP: () => M,
    tz: () => em,
    uB: () => H,
    uh: () => F,
    vL: () => et,
    vf: () => el,
    wv: () => V,
    xM: () => B,
});
var r = n(735438),
    i = n(311907),
    a = n(873298),
    s = n(406935),
    o = n(52133),
    l = n(461012),
    u = n(809976),
    c = n(646769),
    d = n(397438),
    _ = n(656402),
    f = n(355097),
    p = n(652215),
    h = n(815968),
    m = n(823894);
let g = (0, c.c$)(
        "textAndImages",
        "useLegacyChatInput",
        (e) => e?.value ?? !1,
        (e) => s._t.create({ value: e }),
    ),
    E = (0, c.c$)(
        "textAndImages",
        "useRichChatInput",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: e }),
    ),
    A = (0, c.c$)(
        "textAndImages",
        "includeStickersInAutocomplete",
        (e) => e?.value ?? !1,
        (e) => s._t.create({ value: e }),
    ),
    I = (0, c.c$)(
        "textAndImages",
        "includeSoundmojiInAutocomplete",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: e }),
    ),
    T = (0, c.c$)(
        "textAndImages",
        "renderSpoilers",
        (e) => e?.value ?? p.P6Q.ON_CLICK,
        (e) => s.hU.create({ value: e }),
    ),
    S = (0, c.c$)(
        "textAndImages",
        "useThreadSidebar",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: e }),
    );
(0, c.c$)(
    "notifications",
    "showInAppNotifications",
    (e) => e?.value ?? !0,
    (e) => s._t.create({ value: e }),
);
let y = (0, c.c$)(
    "notifications",
    "reactionNotifications",
    (e) => e ?? a.Tz.NOTIFICATIONS_ENABLED,
    (e) => e,
);
(0, c.c$)(
    "notifications",
    "customStatusPushNotifications",
    (e) => e ?? a.DQ.STATUS_PUSH_UNSET,
    (e) => e,
),
    (0, c.c$)(
        "notifications",
        "enableSummaryReminderNotifications",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: !!e }),
    );
let v = (0, c.c$)(
        "notifications",
        "enableVoiceActivityNotifications",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: !!e }),
    ),
    C = (0, c.c$)(
        "notifications",
        "enableFriendOnlineNotifications",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: !!e }),
    ),
    N = (0, c.c$)(
        "notifications",
        "enableFriendAnniversaryNotifications",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: !!e }),
    ),
    b = (0, c.c$)(
        "notifications",
        "enableGameUpdateNotifications",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: !!e }),
    ),
    R = (0, c.c$)(
        "notifications",
        "enableServerTrendingNotifications",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: !!e }),
    ),
    O = (0, c.c$)(
        "notifications",
        "enableProfileUpdatesNotifications",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: !!e }),
    ),
    D = (0, c.c$)(
        "notifications",
        "quietMode",
        (e) => e?.value ?? !1,
        (e) => s._t.create({ value: !!e }),
    ),
    L = (0, c.c$)(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    w = [],
    x = (0, c.c$)(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => e ?? w,
        (e) => e,
    ),
    M = (0, c.c$)(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => e ?? w,
        (e) => e,
    ),
    P = (0, c.c$)(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => e ?? w,
        (e) => e,
    ),
    k = (0, c.c$)(
        "textAndImages",
        "viewImageDescriptions",
        (e) => e?.value ?? !1,
        (e) => s._t.create({ value: e }),
    ),
    U = (0, c.c$)(
        "textAndImages",
        "showCommandSuggestions",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: e }),
    ),
    G = (0, c.c$)(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => e?.value ?? !1,
        (e) => s._t.create({ value: e }),
    ),
    F = (0, c.c$)(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => e?.value,
        (e) => s._t.create({ value: e }),
    ),
    V = (0, c.c$)(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => e?.value,
        (e) => s._t.create({ value: e }),
    ),
    B = "0",
    j = (0, c.c$)(
        "notifications",
        "notificationCenterAckedBeforeId",
        (e) => e ?? B,
        (e) => e,
    ),
    H = (0, c.c$)(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => e?.value ?? !1,
        (e) => s._t.create({ value: e }),
    ),
    Y = (0, c.c$)(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: e }),
    ),
    W = (0, c.c$)(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: e }),
    ),
    K = (0, c.c$)(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: e }),
    ),
    z = [],
    $ = (0, c.c$)(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => e ?? z,
        (e) => e,
    ),
    q = (0, c.c$)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => e?.value,
        (e) => s._t.create({ value: e }),
    ),
    X = (0, c.c$)(
        "privacy",
        "nonSpamRetrainingOptIn",
        (e) => e?.value,
        (e) => (null == e ? void 0 : s._t.create({ value: e })),
    );
(0, c.c$)(
    "privacy",
    "contactSyncEnabled",
    (e) => e?.value ?? !1,
    (e) => s._t.create({ value: e }),
);
let Z = (0, c.c$)(
        "privacy",
        "defaultGuildsRestricted",
        (e) => e ?? !1,
        (e) => e,
    ),
    Q = (0, c.c$)(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => e?.value,
        (e) => s._t.create({ value: e }),
    ),
    J = (0, c.c$)(
        "privacy",
        "restrictedGuildIds",
        (e) => e ?? [],
        (e) => e,
    );
(0, c.c$)(
    "privacy",
    "friendDiscoveryFlags",
    (e) => e?.value ?? 0,
    (e) => s.ZQ.create({ value: e }),
);
let ee = (0, c.c$)(
        "privacy",
        "friendSourceFlags",
        (e) => e?.value ?? p.yKI,
        (e) => s.ZQ.create({ value: e }),
    ),
    et = (0, c.c$)(
        "debug",
        "rtcPanelShowVoiceStates",
        (e) => e?.value ?? !1,
        (e) => s._t.create({ value: e }),
    ),
    en = (0, c.c$)(
        "textAndImages",
        "convertEmoticons",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: e }),
    ),
    er = (0, c.c$)(
        "textAndImages",
        "messageDisplayCompact",
        (e) => e?.value ?? !1,
        (e) => s._t.create({ value: e }),
    ),
    ei = (0, c.c$)(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    ea = (0, c.c$)(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => e?.value ?? 100,
        (e) => s.uN.create({ value: e }),
    ),
    es = (0, c.c$)(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: e }),
    ),
    eo = (0, c.c$)(
        "privacy",
        "dropsOptedOut",
        (e) => e?.value ?? !1,
        (e) => s._t.create({ value: e }),
    ),
    el = (0, c.c$)(
        "privacy",
        "quests3PDataOptedOut",
        (e) => e?.value ?? !1,
        (e) => s._t.create({ value: e }),
    );
(0, c.c$)(
    "voiceAndVideo",
    "nativePhoneIntegrationEnabled",
    (e) => e?.value ?? !0,
    (e) => s._t.create({ value: e }),
);
let eu = (0, c.c$)(
        "voiceAndVideo",
        "afkTimeout",
        (e) => e?.value ?? 60,
        (e) => s.ZQ.create({ value: e }),
    ),
    ec = (0, c.c$)(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => e?.value ?? !1,
        (e) => s._t.create({ value: e }),
    ),
    ed = (0, c.c$)(
        "textAndImages",
        "viewNsfwCommands",
        (e) => e?.value ?? !1,
        (e) => s._t.create({ value: e }),
    );
(0, c.c$)(
    "privacy",
    "detectPlatformAccounts",
    (e) => e?.value ?? !0,
    (e) => s._t.create({ value: e }),
);
let e_ = (0, c.c$)(
        "gameLibrary",
        "disableGamesTab",
        (e) => e?.value ?? !1,
        (e) => s._t.create({ value: e }),
    ),
    ef = (0, c.c$)(
        "textAndImages",
        "enableTtsCommand",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: e }),
    ),
    ep = (0, c.c$)(
        "textAndImages",
        "explicitContentFilter",
        (e) => e?.value ?? _.Je.NON_FRIENDS,
        (e) => s.ZQ.create({ value: e }),
    );
(0, c.c$)(
    "textAndImages",
    "dmSpamFilter",
    (e) => e?.value ?? _.uH.NON_FRIENDS,
    (e) => s.ZQ.create({ value: e }),
);
let eh = (0, c.c$)(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => e ?? a.he.DEFAULT_UNSET,
        (e) => e,
    ),
    em = (0, c.c$)(
        "status",
        "showCurrentGame",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: e }),
    );
(0, c.c$)(
    "privacy",
    "recentGamesEnabled",
    (e) => e?.value ?? !0,
    (e) => s._t.create({ value: e }),
);
let eg = new Set(Object.values(p.clD)),
    eE = (0, c.c$)(
        "status",
        "status",
        (e) => (null != e && eg.has(e.value) ? e.value : p.clD.UNKNOWN),
        (e) => s.hU.create({ value: e }),
    ),
    eA = (0, c.c$)(
        "status",
        "statusExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    eI = (0, c.c$)(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    eT = (0, c.c$)(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    eS = (0, c.c$)(
        "clips",
        "allowVoiceRecording",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: e }),
    ),
    ey = (0, c.Mt)(
        (0, c.c$)(
            "textAndImages",
            "inlineAttachmentMedia",
            (e) => e?.value ?? !0,
            (e) => s._t.create({ value: e }),
        ),
        "text",
        "inlineAttachmentMedia",
    ),
    ev = (0, c.Mt)(
        (0, c.c$)(
            "textAndImages",
            "inlineEmbedMedia",
            (e) => e?.value ?? !0,
            (e) => s._t.create({ value: e }),
        ),
        "text",
        "inlineEmbedMedia",
    ),
    eC = (0, c.Mt)(
        (0, c.c$)(
            "textAndImages",
            "renderEmbeds",
            (e) => e?.value ?? !0,
            (e) => s._t.create({ value: e }),
        ),
        "text",
        "renderEmbeds",
    ),
    eN = (0, c.Mt)(
        (0, c.c$)(
            "textAndImages",
            "renderReactions",
            (e) => e?.value ?? !0,
            (e) => s._t.create({ value: e }),
        ),
        "text",
        "renderReactions",
    );
(0, c.Mt)(
    (0, c.c$)(
        "textAndImages",
        "defaultReactionEmoji",
        (e) => {
            let { emojiId: t, emojiName: n, animated: r } = e ?? {};
            return {
                emojiId: t?.value,
                emojiName: n?.value,
                animated: r?.value,
                disableDoubleTap: e?.disableDoubleTap?.value ?? !1,
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
let eb = (0, c.c$)(
        "localization",
        "timezoneOffset",
        (e) => e?.value ?? null,
        (e) => s.as.create({ value: e ?? 0 }),
    ),
    eR = new Set([h.YP.AUTO, l.b.COZY, l.b.COMPACT]);
(0, c.c$)(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eR.has(e.value) ? e.value : l.b.COZY),
    (e) => s.hU.create({ value: e }),
);
let eO = new Set([l.P.ALL, l.P.UNREADS, l.P.NONE]);
(0, c.c$)(
    "appearance",
    "messagePreviews",
    (e) => (null != e && eO.has(e.value) ? e.value : l.P.ALL),
    (e) => s.hU.create({ value: e }),
);
let eD = (0, c.Mt)(
        (0, c.c$)(
            "appearance",
            "developerMode",
            (e) => e ?? !1,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    eL = (0, c.c$)(
        "appearance",
        "clientThemeSettings",
        (e) => ({
            backgroundGradientPresetId: e?.backgroundGradientPresetId?.value,
            customUserThemeSettings:
                e?.customUserThemeSettings != null
                    ? {
                          colors: e.customUserThemeSettings.colors,
                          gradientColorStops: e.customUserThemeSettings.gradientColorStops,
                          gradientAngle: e.customUserThemeSettings.gradientAngle,
                          baseMix: e.customUserThemeSettings.baseMix,
                      }
                    : void 0,
        }),
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
    ew = (0, c.Tg)(
        (0, c.Mt)(
            (0, c.c$)(
                "textAndImages",
                "gifAutoPlay",
                (e) => e?.value ?? !0,
                (e) => s._t.create({ value: e }),
            ),
            "text",
            "gifAutoPlay",
        ),
        "gifAutoPlay",
        () => d.A.getOverride("gifAutoPlay")?.value,
        () => (0, i.bG)([d.A], () => d.A.getOverride("gifAutoPlay")?.value),
    ),
    ex = (0, c.Tg)(
        (0, c.Mt)(
            (0, c.c$)(
                "textAndImages",
                "animateEmoji",
                (e) => e?.value ?? !0,
                (e) => s._t.create({ value: e }),
            ),
            "text",
            "animateEmoji",
        ),
        "animateEmoji",
        () => d.A.getOverride("animateEmoji")?.value,
        () => (0, i.bG)([d.A], () => d.A.getOverride("animateEmoji")?.value),
    ),
    eM = (0, c.Tg)(
        (0, c.Mt)(
            (0, c.c$)(
                "textAndImages",
                "animateStickers",
                (e) => e?.value ?? m.BJ.ALWAYS_ANIMATE,
                (e) => s.ZQ.create({ value: e }),
            ),
            "text",
            "animateStickers",
        ),
        "animateStickers",
        () => d.A.getOverride("animateStickers")?.value,
        () => (0, i.bG)([d.A], () => d.A.getOverride("animateStickers")?.value),
    ),
    eP = [],
    ek = (0, c.c$)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eP,
        (e) => e,
    ),
    eU = (0, c.c$)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eP,
        (e) => e,
        { delay: f.Sb.FREQUENT_USER_ACTION },
    ),
    eG = [],
    eF = (0, c.c$)(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => e ?? eG,
        (e) => e,
    );
(0, c.c6)({
    baseSetting: (0, c.c$)(
        "privacy",
        "defaultGuildsActivityRestricted",
        (e) => e,
        (e) => e ?? a.AN.OFF,
    ),
    isEligible: () => (0, u.oK)("user_settings"),
    useIsEligible: () => (0, u.ty)("user_settings"),
    ineligibleDefault: a.AN.OFF,
    eligibleDefault: () => a.AN.ON_FOR_LARGE_GUILDS,
});
let eV = (0, c.c6)({
        baseSetting: (0, c.c$)(
            "privacy",
            "defaultGuildsActivityRestrictedV2",
            (e) => (e === a.Qd.ACTIVITY_STATUS_UNSET ? null : e),
            (e) => e ?? a.Qd.ACTIVITY_STATUS_OFF,
        ),
        isEligible: () => (0, u.oK)("user_settings"),
        useIsEligible: () => (0, u.ty)("user_settings"),
        ineligibleDefault: a.Qd.ACTIVITY_STATUS_OFF,
        eligibleDefault: () => a.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
    }),
    eB = (0, c.c$)(
        "privacy",
        "familyCenterEnabledV2",
        (e) => e?.value,
        (e) => s._t.create({ value: e }),
    ),
    ej = (0, c.c$)(
        "privacy",
        "hideLegacyUsername",
        (e) => e?.value ?? !1,
        (e) => s._t.create({ value: e }),
    ),
    eH = (0, c.c$)(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: e }),
    ),
    eY = (0, c.c$)(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => e ?? a.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
        (e) => e,
    ),
    eW = (0, c.c$)(
        "ads",
        "alwaysDeliver",
        (e) => e ?? !1,
        (e) => e,
    ),
    eK = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = e ?? {};
        return {
            explicitContentGuilds: t ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentFriendDm: n ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentNonFriendDm: r ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    ez = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = e;
        return {
            explicitContentGuilds: t ?? void 0,
            explicitContentFriendDm: n ?? void 0,
            explicitContentNonFriendDm: r ?? void 0,
        };
    },
    e$ = (0, c.c$)("textAndImages", "explicitContentSettings", eK, ez),
    eq = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = e ?? {};
        return {
            goreContentGuilds: t ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentFriendDm: n ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentNonFriendDm: r ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    eX = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = e;
        return {
            goreContentGuilds: t ?? void 0,
            goreContentFriendDm: n ?? void 0,
            goreContentNonFriendDm: r ?? void 0,
        };
    },
    eZ = (0, c.c$)("textAndImages", "goreContentSettings", eq, eX);
(0, c.c$)(
    "appearance",
    "searchResultExactCountEnabled",
    (e) => e?.value ?? !1,
    (e) => s._t.create({ value: e }),
),
    (0, c.c$)(
        "appearance",
        "happeningNowCardsDisabled",
        (e) => e?.value ?? !1,
        (e) => s._t.create({ value: e }),
    );
let eQ = (0, c.c$)(
    "appearance",
    "timestampHourCycle",
    (e) => e ?? a.PZ.AUTO,
    (e) => e,
);
(0, c.c$)(
    "appearance",
    "launchPadMode",
    (e) => e ?? a.Ar.LAUNCH_PAD_DISABLED,
    (e) => e,
),
    (0, c.c$)(
        "appearance",
        "swipeRightToLeftMode",
        (e) => e ?? a.kW.SWIPE_RIGHT_TO_LEFT_UNSET,
        (e) => e,
    );
let eJ = (0, c.c$)(
        "userContent",
        "lastReceivedChangelogId",
        (e) => e ?? "0",
        (e) => e,
    ),
    e0 = (0, c.c$)(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => e ?? !1,
        (e) => e,
    ),
    e1 = (0, c.c$)(
        "appearance",
        "uiDensity",
        (e) => (e === a.NS.UNSET_UI_DENSITY ? a.NS.DEFAULT : (e ?? a.NS.DEFAULT)),
        (e) => e,
    ),
    e2 = (0, c.c$)(
        "inAppFeedbackSettings",
        "inAppFeedbackStates",
        (e) =>
            (0, r.mapValues)(e ?? {}, (e) => (0, r.mapValues)(e, (e) => (e?.value != null ? Number(e.value) : void 0))),
        (e) =>
            (0, r.mapValues)(e, (e) =>
                (0, r.mapValues)(e, (e) => s.ol.create({ value: null != e ? String(e) : void 0 })),
            ),
        { delay: f.Sb.AUTOMATED },
    ),
    e3 = (0, c.c$)(
        "textAndImages",
        "showMentionSuggestions",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: e }),
    ),
    e6 = (0, c.c$)(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => e?.value ?? !1,
        (e) => s._t.create({ value: e }),
    ),
    e4 = (0, c.c$)(
        "notifications",
        "enableDmReplyNudgeReminders",
        (e) => e?.value ?? !0,
        (e) => s._t.create({ value: e }),
    );
