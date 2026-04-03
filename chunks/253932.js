"use strict";
n.d(t, {
    $s: () => et,
    CY: () => eS,
    D_: () => g,
    FA: () => en,
    G2: () => ev,
    H1: () => eu,
    HO: () => eo,
    HZ: () => ez,
    Hu: () => e5,
    Iv: () => eq,
    JG: () => eF,
    JI: () => eD,
    JV: () => O,
    Jr: () => M,
    KP: () => eA,
    Kg: () => e_,
    LJ: () => e7,
    ML: () => I,
    NF: () => eQ,
    NO: () => w,
    NR: () => C,
    PZ: () => e1,
    Pf: () => K,
    Pw: () => eV,
    Q$: () => eN,
    Q_: () => eM,
    Qe: () => ef,
    Qr: () => b,
    S0: () => eU,
    SI: () => A,
    SY: () => y,
    Sf: () => ek,
    T3: () => D,
    TA: () => e$,
    UM: () => z,
    Vd: () => eX,
    Vv: () => eZ,
    WY: () => Q,
    X6: () => eC,
    Xi: () => e6,
    YX: () => X,
    Yh: () => el,
    Yt: () => e4,
    Zk: () => eK,
    Zp: () => v,
    Zr: () => Z,
    Zt: () => J,
    _3: () => F,
    _6: () => ey,
    _8: () => eJ,
    _Z: () => ej,
    _z: () => G,
    b0: () => U,
    bm: () => V,
    c3: () => N,
    cU: () => ed,
    cj: () => em,
    dG: () => ea,
    dm: () => eY,
    e: () => $,
    eK: () => T,
    eh: () => ex,
    gs: () => S,
    hD: () => eR,
    hH: () => es,
    he: () => eE,
    iM: () => P,
    j0: () => e3,
    j7: () => ei,
    jP: () => eT,
    jW: () => eb,
    kt: () => eP,
    l_: () => ep,
    m$: () => eW,
    n6: () => ee,
    ns: () => Y,
    on: () => eh,
    oz: () => R,
    pE: () => eH,
    pK: () => e2,
    qN: () => e0,
    rs: () => eO,
    tP: () => k,
    tz: () => eg,
    uB: () => W,
    uh: () => B,
    vL: () => er,
    vf: () => ec,
    wv: () => H,
    xM: () => j,
    zS: () => L,
});
var r = n(735438),
    i = n(923457),
    s = n(311907),
    a = n(873298),
    o = n(406935),
    l = n(52133),
    u = n(461012),
    c = n(207560),
    d = n(646769),
    _ = n(397438),
    f = n(617617),
    p = n(656402),
    h = n(355097),
    m = n(652215),
    E = n(823894);
let g = (0, d.c$)(
        "textAndImages",
        "useLegacyChatInput",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    A = (0, d.c$)(
        "textAndImages",
        "useRichChatInput",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    I = (0, d.c$)(
        "textAndImages",
        "includeStickersInAutocomplete",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    T = (0, d.c$)(
        "textAndImages",
        "includeSoundmojiInAutocomplete",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    S = (0, d.c$)(
        "textAndImages",
        "renderSpoilers",
        (e) => e?.value ?? m.P6Q.ON_CLICK,
        (e) => o.hU.create({ value: e }),
    ),
    y = (0, d.c$)(
        "textAndImages",
        "useThreadSidebar",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    );
(0, d.c$)(
    "notifications",
    "showInAppNotifications",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: e }),
);
let v = (0, d.c$)(
        "notifications",
        "reactionNotifications",
        (e) => e ?? a.Tz.NOTIFICATIONS_ENABLED,
        (e) => e,
    ),
    N = (0, d.c$)(
        "notifications",
        "enableGdmAllReactionNotifications",
        (e) =>
            null != e && void 0 !== e.value
                ? e.value
                : f.A.settings?.notifications?.reactionNotifications !== a.Tz.NOTIFICATIONS_DISABLED,
        (e) => o._t.create({ value: !!e }),
    );
(0, d.c$)(
    "notifications",
    "customStatusPushNotifications",
    (e) => e ?? a.DQ.STATUS_PUSH_UNSET,
    (e) => e,
),
    (0, d.c$)(
        "notifications",
        "enableSummaryReminderNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    );
let C = (0, d.c$)(
        "notifications",
        "enableFriendOnlineNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    R = (0, d.c$)(
        "notifications",
        "enableFriendAnniversaryNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    O = (0, d.c$)(
        "notifications",
        "enableGameUpdateNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    b = (0, d.c$)(
        "notifications",
        "enableServerTrendingNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    D = (0, d.c$)(
        "notifications",
        "enableProfileUpdatesNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    );
(0, d.c$)(
    "notifications",
    "enableFriendGamingActivityNotifications",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: !!e }),
);
let L = (0, d.c$)(
        "notifications",
        "enableUpcomingServerEventNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    w = (0, d.c$)(
        "notifications",
        "quietMode",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: !!e }),
    ),
    M = (0, d.c$)(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    x = [],
    P = (0, d.c$)(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => e ?? x,
        (e) => e,
    ),
    k = (0, d.c$)(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => e ?? x,
        (e) => e,
    ),
    U = (0, d.c$)(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => e ?? x,
        (e) => e,
    ),
    G = (0, d.c$)(
        "textAndImages",
        "viewImageDescriptions",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    F = (0, d.c$)(
        "textAndImages",
        "showCommandSuggestions",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    V = (0, d.c$)(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    B = (0, d.c$)(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    H = (0, d.c$)(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    j = "0",
    Y = (0, d.c$)(
        "notifications",
        "notificationCenterAckedBeforeId",
        (e) => e ?? j,
        (e) => e,
    ),
    W = (0, d.c$)(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    K = (0, d.c$)(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    $ = (0, d.c$)(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    z = (0, d.c$)(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    q = [],
    Z = (0, d.c$)(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => e ?? q,
        (e) => e,
    ),
    X = (0, d.c$)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    Q = (0, d.c$)(
        "privacy",
        "nonSpamRetrainingOptIn",
        (e) => e?.value,
        (e) => (null == e ? void 0 : o._t.create({ value: e })),
    );
(0, d.c$)(
    "privacy",
    "contactSyncEnabled",
    (e) => e?.value ?? !1,
    (e) => o._t.create({ value: e }),
);
let J = (0, d.c$)(
        "privacy",
        "defaultGuildsRestricted",
        (e) => e ?? !1,
        (e) => e,
    ),
    ee = (0, d.c$)(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    et = (0, d.c$)(
        "privacy",
        "restrictedGuildIds",
        (e) => e ?? [],
        (e) => e,
    );
(0, d.c$)(
    "privacy",
    "friendDiscoveryFlags",
    (e) => e?.value ?? 0,
    (e) => o.ZQ.create({ value: e }),
);
let en = (0, d.c$)(
        "privacy",
        "friendSourceFlags",
        (e) => e?.value ?? m.yKI,
        (e) => o.ZQ.create({ value: e }),
    ),
    er = (0, d.c$)(
        "debug",
        "rtcPanelShowVoiceStates",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    ei = (0, d.c$)(
        "textAndImages",
        "convertEmoticons",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    es = (0, d.c$)(
        "textAndImages",
        "messageDisplayCompact",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    ea = (0, d.c$)(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    eo = (0, d.c$)(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => e?.value ?? 100,
        (e) => o.uN.create({ value: e }),
    ),
    el = (0, d.c$)(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    eu = (0, d.c$)(
        "privacy",
        "dropsOptedOut",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    ec = (0, d.c$)(
        "privacy",
        "quests3PDataOptedOut",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    );
(0, d.c$)(
    "voiceAndVideo",
    "nativePhoneIntegrationEnabled",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: e }),
);
let ed = (0, d.c$)(
        "voiceAndVideo",
        "afkTimeout",
        (e) => e?.value ?? 60,
        (e) => o.ZQ.create({ value: e }),
    ),
    e_ = (0, d.c$)(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    ef = (0, d.c$)(
        "textAndImages",
        "viewNsfwCommands",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    );
(0, d.c$)(
    "privacy",
    "detectPlatformAccounts",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: e }),
);
let ep = (0, d.c$)(
        "gameLibrary",
        "disableGamesTab",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    eh = (0, d.c$)(
        "textAndImages",
        "enableTtsCommand",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    em = (0, d.c$)(
        "textAndImages",
        "explicitContentFilter",
        (e) => e?.value ?? p.Je.NON_FRIENDS,
        (e) => o.ZQ.create({ value: e }),
    );
(0, d.c$)(
    "textAndImages",
    "dmSpamFilter",
    (e) => e?.value ?? p.uH.NON_FRIENDS,
    (e) => o.ZQ.create({ value: e }),
);
let eE = (0, d.c$)(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => e ?? a.he.DEFAULT_UNSET,
        (e) => e,
    ),
    eg = (0, d.c$)(
        "status",
        "showCurrentGame",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    );
(0, d.c$)(
    "privacy",
    "recentGamesEnabled",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: e }),
);
let eA = (0, d.c$)(
        "privacy",
        "profileVisibility",
        (e) => (null == e || e === a.KP.UNSET ? a.KP.FRIENDS_AND_ALL_GUILDS : e),
        (e) => e,
    ),
    eI = new Set(Object.values(m.clD)),
    eT = (0, d.c$)(
        "status",
        "status",
        (e) => (null != e && eI.has(e.value) ? e.value : m.clD.UNKNOWN),
        (e) => o.hU.create({ value: e }),
    ),
    eS = (0, d.c$)(
        "status",
        "statusExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    ey = (0, d.c$)(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    ev = (0, d.c$)(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    eN = (0, d.c$)(
        "clips",
        "allowVoiceRecording",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    eC = (0, d.Mt)(
        (0, d.c$)(
            "textAndImages",
            "inlineAttachmentMedia",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "inlineAttachmentMedia",
    ),
    eR = (0, d.Mt)(
        (0, d.c$)(
            "textAndImages",
            "inlineEmbedMedia",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "inlineEmbedMedia",
    ),
    eO = (0, d.Mt)(
        (0, d.c$)(
            "textAndImages",
            "renderEmbeds",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "renderEmbeds",
    ),
    eb = (0, d.Mt)(
        (0, d.c$)(
            "textAndImages",
            "renderReactions",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "renderReactions",
    );
(0, d.Mt)(
    (0, d.c$)(
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
                emojiId: o.ol.create({ value: t }),
                emojiName: o.hU.create({ value: n }),
                animated: o._t.create({ value: r }),
                disableDoubleTap: o._t.create({ value: i }),
            };
        },
        { comparator: l.A },
    ),
    "text",
    "defaultReactionEmoji",
);
let eD = (0, d.c$)(
        "localization",
        "timezoneOffset",
        (e) => e?.value ?? null,
        (e) => o.as.create({ value: e ?? 0 }),
    ),
    eL = new Set([h.YP.AUTO, u.b.COZY, u.b.COMPACT]);
(0, d.c$)(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eL.has(e.value) ? e.value : u.b.COZY),
    (e) => o.hU.create({ value: e }),
);
let ew = new Set([u.P.ALL, u.P.UNREADS, u.P.NONE]);
(0, d.c$)(
    "appearance",
    "messagePreviews",
    (e) => (null != e && ew.has(e.value) ? e.value : u.P.ALL),
    (e) => o.hU.create({ value: e }),
);
let eM = (0, d.Mt)(
        (0, d.c$)(
            "appearance",
            "developerMode",
            (e) => e ?? !1,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    ex = (0, d.c$)(
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
                null != e.backgroundGradientPresetId ? o.ZQ.create({ value: e.backgroundGradientPresetId }) : void 0,
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
    eP = (0, d.Tg)(
        (0, d.Mt)(
            (0, d.c$)(
                "textAndImages",
                "gifAutoPlay",
                (e) => e?.value ?? !0,
                (e) => o._t.create({ value: e }),
            ),
            "text",
            "gifAutoPlay",
        ),
        "gifAutoPlay",
        () => _.A.getOverride("gifAutoPlay")?.value,
        () => (0, s.bG)([_.A], () => _.A.getOverride("gifAutoPlay")?.value),
    ),
    ek = (0, d.Tg)(
        (0, d.Mt)(
            (0, d.c$)(
                "textAndImages",
                "animateEmoji",
                (e) => e?.value ?? !0,
                (e) => o._t.create({ value: e }),
            ),
            "text",
            "animateEmoji",
        ),
        "animateEmoji",
        () => _.A.getOverride("animateEmoji")?.value,
        () => (0, s.bG)([_.A], () => _.A.getOverride("animateEmoji")?.value),
    ),
    eU = (0, d.Tg)(
        (0, d.Mt)(
            (0, d.c$)(
                "textAndImages",
                "animateStickers",
                (e) => e?.value ?? E.BJ.ALWAYS_ANIMATE,
                (e) => o.ZQ.create({ value: e }),
            ),
            "text",
            "animateStickers",
        ),
        "animateStickers",
        () => _.A.getOverride("animateStickers")?.value,
        () => (0, s.bG)([_.A], () => _.A.getOverride("animateStickers")?.value),
    ),
    eG = [],
    eF = (0, d.c$)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eG,
        (e) => e,
    ),
    eV = (0, d.c$)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eG,
        (e) => e,
        { delay: h.Sb.FREQUENT_USER_ACTION },
    ),
    eB = [],
    eH = (0, d.c$)(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => e ?? eB,
        (e) => e,
    );
(0, d.c6)({
    baseSetting: (0, d.c$)(
        "privacy",
        "defaultGuildsActivityRestricted",
        (e) => e,
        (e) => e ?? a.AN.OFF,
    ),
    isEligible: () => (0, c.To)(i.p.GUILD_ACTIVITY_STATUS),
    useIsEligible: () => (0, c.yv)(i.p.GUILD_ACTIVITY_STATUS),
    ineligibleDefault: a.AN.OFF,
    eligibleDefault: () => a.AN.ON_FOR_LARGE_GUILDS,
});
let ej = (0, d.c6)({
        baseSetting: (0, d.c$)(
            "privacy",
            "defaultGuildsActivityRestrictedV2",
            (e) => (e === a.Qd.ACTIVITY_STATUS_UNSET ? null : e),
            (e) => e ?? a.Qd.ACTIVITY_STATUS_OFF,
        ),
        isEligible: () => (0, c.To)(i.p.GUILD_ACTIVITY_STATUS),
        useIsEligible: () => (0, c.yv)(i.p.GUILD_ACTIVITY_STATUS),
        ineligibleDefault: a.Qd.ACTIVITY_STATUS_OFF,
        eligibleDefault: () => a.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
    }),
    eY = (0, d.c$)(
        "privacy",
        "familyCenterEnabledV2",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    eW = (0, d.c$)(
        "privacy",
        "hideLegacyUsername",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    eK = (0, d.c$)(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    e$ = (0, d.c$)(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => e ?? a.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
        (e) => e,
    ),
    ez = (0, d.c$)(
        "ads",
        "alwaysDeliver",
        (e) => e ?? !1,
        (e) => e,
    ),
    eq = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = e ?? {};
        return {
            explicitContentGuilds: t ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentFriendDm: n ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentNonFriendDm: r ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    eZ = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = e;
        return {
            explicitContentGuilds: t ?? void 0,
            explicitContentFriendDm: n ?? void 0,
            explicitContentNonFriendDm: r ?? void 0,
        };
    },
    eX = (0, d.c$)("textAndImages", "explicitContentSettings", eq, eZ),
    eQ = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = e ?? {};
        return {
            goreContentGuilds: t ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentFriendDm: n ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentNonFriendDm: r ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    eJ = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = e;
        return {
            goreContentGuilds: t ?? void 0,
            goreContentFriendDm: n ?? void 0,
            goreContentNonFriendDm: r ?? void 0,
        };
    },
    e0 = (0, d.c$)("textAndImages", "goreContentSettings", eQ, eJ);
(0, d.c$)(
    "appearance",
    "searchResultExactCountEnabled",
    (e) => e?.value ?? !1,
    (e) => o._t.create({ value: e }),
),
    (0, d.c$)(
        "appearance",
        "happeningNowCardsDisabled",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    );
let e1 = (0, d.c$)(
    "appearance",
    "timestampHourCycle",
    (e) => e ?? a.PZ.AUTO,
    (e) => e,
);
(0, d.c$)(
    "appearance",
    "launchPadMode",
    (e) => e ?? a.Ar.LAUNCH_PAD_DISABLED,
    (e) => e,
),
    (0, d.c$)(
        "appearance",
        "swipeRightToLeftMode",
        (e) => e ?? a.kW.SWIPE_RIGHT_TO_LEFT_UNSET,
        (e) => e,
    );
let e2 = (0, d.c$)(
        "userContent",
        "lastReceivedChangelogId",
        (e) => e ?? "0",
        (e) => e,
    ),
    e3 = (0, d.c$)(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => e ?? !1,
        (e) => e,
    ),
    e6 = (0, d.c$)(
        "appearance",
        "uiDensity",
        (e) => (e === a.NS.UNSET_UI_DENSITY ? a.NS.DEFAULT : (e ?? a.NS.DEFAULT)),
        (e) => e,
    ),
    e4 = (0, d.c$)(
        "inAppFeedbackSettings",
        "inAppFeedbackStates",
        (e) =>
            (0, r.mapValues)(e ?? {}, (e) => (0, r.mapValues)(e, (e) => (e?.value != null ? Number(e.value) : void 0))),
        (e) =>
            (0, r.mapValues)(e, (e) =>
                (0, r.mapValues)(e, (e) => o.ol.create({ value: null != e ? String(e) : void 0 })),
            ),
        { delay: h.Sb.AUTOMATED },
    ),
    e5 = (0, d.c$)(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    e7 = (0, d.c$)(
        "notifications",
        "enableDmReplyNudgeReminders",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    );
