"use strict";
n.d(t, {
    $s: () => ee,
    Bh: () => C,
    CY: () => eI,
    D_: () => E,
    FA: () => et,
    G2: () => eS,
    H1: () => el,
    HO: () => es,
    HZ: () => eK,
    Hu: () => e4,
    Iv: () => ez,
    JG: () => eU,
    JI: () => eR,
    JV: () => R,
    Jr: () => w,
    Kg: () => ed,
    LJ: () => e5,
    ML: () => I,
    NF: () => eX,
    NO: () => L,
    NR: () => N,
    PZ: () => eJ,
    Pf: () => W,
    Pw: () => eG,
    Q$: () => ey,
    Q_: () => eL,
    Qe: () => e_,
    Qr: () => O,
    S0: () => eP,
    SI: () => A,
    SY: () => y,
    Sf: () => eM,
    T3: () => D,
    TA: () => eW,
    UM: () => z,
    Vd: () => eq,
    Vv: () => e$,
    WY: () => Z,
    X6: () => ev,
    Xi: () => e2,
    YX: () => X,
    Yh: () => eo,
    Yt: () => e3,
    Zk: () => eY,
    Zp: () => v,
    Zr: () => q,
    Zt: () => Q,
    _3: () => G,
    _6: () => eT,
    _8: () => eZ,
    _Z: () => eB,
    _z: () => U,
    b0: () => k,
    bm: () => F,
    cU: () => ec,
    cj: () => eh,
    dG: () => ea,
    dm: () => ej,
    e: () => K,
    eK: () => T,
    eh: () => ew,
    gs: () => S,
    hD: () => eC,
    hH: () => ei,
    he: () => em,
    iM: () => M,
    j0: () => e1,
    j7: () => er,
    jP: () => eA,
    jW: () => eb,
    kt: () => ex,
    l_: () => ef,
    m$: () => eH,
    n6: () => J,
    ng: () => e6,
    ns: () => H,
    on: () => ep,
    oz: () => b,
    pE: () => eV,
    pK: () => e0,
    qN: () => eQ,
    rs: () => eN,
    tP: () => P,
    tz: () => eg,
    uB: () => Y,
    uh: () => V,
    vL: () => en,
    vf: () => eu,
    wv: () => B,
    xM: () => j,
});
var r = n(735438),
    i = n(923457),
    a = n(311907),
    s = n(873298),
    o = n(406935),
    l = n(52133),
    u = n(461012),
    c = n(207560),
    d = n(646769),
    _ = n(397438),
    f = n(656402),
    p = n(355097),
    h = n(652215),
    m = n(815968),
    g = n(823894);
let E = (0, d.c$)(
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
        (e) => e?.value ?? h.P6Q.ON_CLICK,
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
    (e) => e ?? s.Tz.NOTIFICATIONS_ENABLED,
    (e) => e,
);
(0, d.c$)(
    "notifications",
    "customStatusPushNotifications",
    (e) => e ?? s.DQ.STATUS_PUSH_UNSET,
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
        "enableVoiceActivityNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    N = (0, d.c$)(
        "notifications",
        "enableFriendOnlineNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    b = (0, d.c$)(
        "notifications",
        "enableFriendAnniversaryNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    R = (0, d.c$)(
        "notifications",
        "enableGameUpdateNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    O = (0, d.c$)(
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
    ),
    L = (0, d.c$)(
        "notifications",
        "quietMode",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: !!e }),
    ),
    w = (0, d.c$)(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    x = [],
    M = (0, d.c$)(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => e ?? x,
        (e) => e,
    ),
    P = (0, d.c$)(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => e ?? x,
        (e) => e,
    ),
    k = (0, d.c$)(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => e ?? x,
        (e) => e,
    ),
    U = (0, d.c$)(
        "textAndImages",
        "viewImageDescriptions",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    G = (0, d.c$)(
        "textAndImages",
        "showCommandSuggestions",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    F = (0, d.c$)(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    V = (0, d.c$)(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    B = (0, d.c$)(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    j = "0",
    H = (0, d.c$)(
        "notifications",
        "notificationCenterAckedBeforeId",
        (e) => e ?? j,
        (e) => e,
    ),
    Y = (0, d.c$)(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    W = (0, d.c$)(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    K = (0, d.c$)(
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
    $ = [],
    q = (0, d.c$)(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => e ?? $,
        (e) => e,
    ),
    X = (0, d.c$)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    Z = (0, d.c$)(
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
let Q = (0, d.c$)(
        "privacy",
        "defaultGuildsRestricted",
        (e) => e ?? !1,
        (e) => e,
    ),
    J = (0, d.c$)(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    ee = (0, d.c$)(
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
let et = (0, d.c$)(
        "privacy",
        "friendSourceFlags",
        (e) => e?.value ?? h.yKI,
        (e) => o.ZQ.create({ value: e }),
    ),
    en = (0, d.c$)(
        "debug",
        "rtcPanelShowVoiceStates",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    er = (0, d.c$)(
        "textAndImages",
        "convertEmoticons",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    ei = (0, d.c$)(
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
    es = (0, d.c$)(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => e?.value ?? 100,
        (e) => o.uN.create({ value: e }),
    ),
    eo = (0, d.c$)(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    el = (0, d.c$)(
        "privacy",
        "dropsOptedOut",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    eu = (0, d.c$)(
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
let ec = (0, d.c$)(
        "voiceAndVideo",
        "afkTimeout",
        (e) => e?.value ?? 60,
        (e) => o.ZQ.create({ value: e }),
    ),
    ed = (0, d.c$)(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    e_ = (0, d.c$)(
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
let ef = (0, d.c$)(
        "gameLibrary",
        "disableGamesTab",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    ep = (0, d.c$)(
        "textAndImages",
        "enableTtsCommand",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    eh = (0, d.c$)(
        "textAndImages",
        "explicitContentFilter",
        (e) => e?.value ?? f.Je.NON_FRIENDS,
        (e) => o.ZQ.create({ value: e }),
    );
(0, d.c$)(
    "textAndImages",
    "dmSpamFilter",
    (e) => e?.value ?? f.uH.NON_FRIENDS,
    (e) => o.ZQ.create({ value: e }),
);
let em = (0, d.c$)(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => e ?? s.he.DEFAULT_UNSET,
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
let eE = new Set(Object.values(h.clD)),
    eA = (0, d.c$)(
        "status",
        "status",
        (e) => (null != e && eE.has(e.value) ? e.value : h.clD.UNKNOWN),
        (e) => o.hU.create({ value: e }),
    ),
    eI = (0, d.c$)(
        "status",
        "statusExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    eT = (0, d.c$)(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    eS = (0, d.c$)(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    ey = (0, d.c$)(
        "clips",
        "allowVoiceRecording",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    ev = (0, d.Mt)(
        (0, d.c$)(
            "textAndImages",
            "inlineAttachmentMedia",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "inlineAttachmentMedia",
    ),
    eC = (0, d.Mt)(
        (0, d.c$)(
            "textAndImages",
            "inlineEmbedMedia",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "inlineEmbedMedia",
    ),
    eN = (0, d.Mt)(
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
let eR = (0, d.c$)(
        "localization",
        "timezoneOffset",
        (e) => e?.value ?? null,
        (e) => o.as.create({ value: e ?? 0 }),
    ),
    eO = new Set([m.YP.AUTO, u.b.COZY, u.b.COMPACT]);
(0, d.c$)(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eO.has(e.value) ? e.value : u.b.COZY),
    (e) => o.hU.create({ value: e }),
);
let eD = new Set([u.P.ALL, u.P.UNREADS, u.P.NONE]);
(0, d.c$)(
    "appearance",
    "messagePreviews",
    (e) => (null != e && eD.has(e.value) ? e.value : u.P.ALL),
    (e) => o.hU.create({ value: e }),
);
let eL = (0, d.Mt)(
        (0, d.c$)(
            "appearance",
            "developerMode",
            (e) => e ?? !1,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    ew = (0, d.c$)(
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
    ex = (0, d.Tg)(
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
        () => (0, a.bG)([_.A], () => _.A.getOverride("gifAutoPlay")?.value),
    ),
    eM = (0, d.Tg)(
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
        () => (0, a.bG)([_.A], () => _.A.getOverride("animateEmoji")?.value),
    ),
    eP = (0, d.Tg)(
        (0, d.Mt)(
            (0, d.c$)(
                "textAndImages",
                "animateStickers",
                (e) => e?.value ?? g.BJ.ALWAYS_ANIMATE,
                (e) => o.ZQ.create({ value: e }),
            ),
            "text",
            "animateStickers",
        ),
        "animateStickers",
        () => _.A.getOverride("animateStickers")?.value,
        () => (0, a.bG)([_.A], () => _.A.getOverride("animateStickers")?.value),
    ),
    ek = [],
    eU = (0, d.c$)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? ek,
        (e) => e,
    ),
    eG = (0, d.c$)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? ek,
        (e) => e,
        { delay: p.Sb.FREQUENT_USER_ACTION },
    ),
    eF = [],
    eV = (0, d.c$)(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => e ?? eF,
        (e) => e,
    );
(0, d.c6)({
    baseSetting: (0, d.c$)(
        "privacy",
        "defaultGuildsActivityRestricted",
        (e) => e,
        (e) => e ?? s.AN.OFF,
    ),
    isEligible: () => (0, c.To)(i.p.GUILD_ACTIVITY_STATUS),
    useIsEligible: () => (0, c.yv)(i.p.GUILD_ACTIVITY_STATUS),
    ineligibleDefault: s.AN.OFF,
    eligibleDefault: () => s.AN.ON_FOR_LARGE_GUILDS,
});
let eB = (0, d.c6)({
        baseSetting: (0, d.c$)(
            "privacy",
            "defaultGuildsActivityRestrictedV2",
            (e) => (e === s.Qd.ACTIVITY_STATUS_UNSET ? null : e),
            (e) => e ?? s.Qd.ACTIVITY_STATUS_OFF,
        ),
        isEligible: () => (0, c.To)(i.p.GUILD_ACTIVITY_STATUS),
        useIsEligible: () => (0, c.yv)(i.p.GUILD_ACTIVITY_STATUS),
        ineligibleDefault: s.Qd.ACTIVITY_STATUS_OFF,
        eligibleDefault: () => s.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
    }),
    ej = (0, d.c$)(
        "privacy",
        "familyCenterEnabledV2",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    eH = (0, d.c$)(
        "privacy",
        "hideLegacyUsername",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    eY = (0, d.c$)(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    eW = (0, d.c$)(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => e ?? s.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
        (e) => e,
    ),
    eK = (0, d.c$)(
        "ads",
        "alwaysDeliver",
        (e) => e ?? !1,
        (e) => e,
    ),
    ez = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = e ?? {};
        return {
            explicitContentGuilds: t ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentFriendDm: n ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentNonFriendDm: r ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    e$ = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = e;
        return {
            explicitContentGuilds: t ?? void 0,
            explicitContentFriendDm: n ?? void 0,
            explicitContentNonFriendDm: r ?? void 0,
        };
    },
    eq = (0, d.c$)("textAndImages", "explicitContentSettings", ez, e$),
    eX = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = e ?? {};
        return {
            goreContentGuilds: t ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentFriendDm: n ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentNonFriendDm: r ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    eZ = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = e;
        return {
            goreContentGuilds: t ?? void 0,
            goreContentFriendDm: n ?? void 0,
            goreContentNonFriendDm: r ?? void 0,
        };
    },
    eQ = (0, d.c$)("textAndImages", "goreContentSettings", eX, eZ);
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
let eJ = (0, d.c$)(
    "appearance",
    "timestampHourCycle",
    (e) => e ?? s.PZ.AUTO,
    (e) => e,
);
(0, d.c$)(
    "appearance",
    "launchPadMode",
    (e) => e ?? s.Ar.LAUNCH_PAD_DISABLED,
    (e) => e,
),
    (0, d.c$)(
        "appearance",
        "swipeRightToLeftMode",
        (e) => e ?? s.kW.SWIPE_RIGHT_TO_LEFT_UNSET,
        (e) => e,
    );
let e0 = (0, d.c$)(
        "userContent",
        "lastReceivedChangelogId",
        (e) => e ?? "0",
        (e) => e,
    ),
    e1 = (0, d.c$)(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => e ?? !1,
        (e) => e,
    ),
    e2 = (0, d.c$)(
        "appearance",
        "uiDensity",
        (e) => (e === s.NS.UNSET_UI_DENSITY ? s.NS.DEFAULT : (e ?? s.NS.DEFAULT)),
        (e) => e,
    ),
    e3 = (0, d.c$)(
        "inAppFeedbackSettings",
        "inAppFeedbackStates",
        (e) =>
            (0, r.mapValues)(e ?? {}, (e) => (0, r.mapValues)(e, (e) => (e?.value != null ? Number(e.value) : void 0))),
        (e) =>
            (0, r.mapValues)(e, (e) =>
                (0, r.mapValues)(e, (e) => o.ol.create({ value: null != e ? String(e) : void 0 })),
            ),
        { delay: p.Sb.AUTOMATED },
    ),
    e6 = (0, d.c$)(
        "textAndImages",
        "showMentionSuggestions",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    e4 = (0, d.c$)(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    e5 = (0, d.c$)(
        "notifications",
        "enableDmReplyNudgeReminders",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    );
