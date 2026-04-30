n.d(t, {
    $s: () => et,
    CY: () => em,
    D_: () => S,
    FA: () => en,
    G2: () => eC,
    H1: () => ed,
    HO: () => el,
    HZ: () => eZ,
    Hu: () => e6,
    Iv: () => eq,
    JG: () => eB,
    JI: () => eM,
    JV: () => D,
    Jr: () => v,
    KP: () => eN,
    Kg: () => eE,
    LJ: () => e8,
    ML: () => f,
    NF: () => eX,
    NO: () => U,
    NR: () => g,
    PZ: () => e1,
    Pf: () => K,
    Pw: () => eF,
    Q$: () => eR,
    Q_: () => ev,
    Qe: () => eu,
    Qr: () => b,
    S0: () => ex,
    SI: () => N,
    SY: () => O,
    Sf: () => ew,
    T3: () => M,
    TA: () => e$,
    UM: () => Z,
    Vd: () => ez,
    Vv: () => eQ,
    WY: () => X,
    X6: () => eg,
    Xi: () => e4,
    YX: () => z,
    Yh: () => eo,
    Yt: () => e5,
    Zk: () => eK,
    Zp: () => C,
    Zr: () => Q,
    Zt: () => J,
    _3: () => B,
    _6: () => eO,
    _8: () => eJ,
    _Z: () => ej,
    _z: () => V,
    b0: () => x,
    bm: () => F,
    c3: () => R,
    cU: () => e_,
    cj: () => eT,
    dG: () => es,
    dm: () => eY,
    e: () => $,
    eK: () => p,
    eh: () => ey,
    gs: () => m,
    hD: () => eL,
    hH: () => er,
    he: () => eh,
    iM: () => G,
    j0: () => e3,
    j7: () => ea,
    jP: () => ep,
    jW: () => eb,
    kt: () => eG,
    l_: () => eA,
    m$: () => eW,
    n6: () => ee,
    ns: () => Y,
    on: () => eI,
    oz: () => L,
    pE: () => eH,
    pK: () => e2,
    qN: () => e0,
    rs: () => eD,
    tP: () => w,
    tz: () => eS,
    uB: () => W,
    uh: () => k,
    vL: () => ei,
    vf: () => ec,
    wv: () => H,
    xM: () => j,
    zS: () => P,
});
var i = n(735438),
    a = n(923457),
    r = n(17928),
    s = n(873298),
    l = n(406935),
    o = n(52133),
    d = n(461012),
    c = n(207560),
    _ = n(646769),
    E = n(397438),
    u = n(617617),
    A = n(656402),
    I = n(355097),
    T = n(652215),
    h = n(823894);
let S = (0, _.c$)(
        "textAndImages",
        "useLegacyChatInput",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    N = (0, _.c$)(
        "textAndImages",
        "useRichChatInput",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    f = (0, _.c$)(
        "textAndImages",
        "includeStickersInAutocomplete",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    p = (0, _.c$)(
        "textAndImages",
        "includeSoundmojiInAutocomplete",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    m = (0, _.c$)(
        "textAndImages",
        "renderSpoilers",
        (e) => e?.value ?? T.P6Q.ON_CLICK,
        (e) => l.hU.create({ value: e }),
    ),
    O = (0, _.c$)(
        "textAndImages",
        "useThreadSidebar",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    );
(0, _.c$)(
    "notifications",
    "showInAppNotifications",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: e }),
);
let C = (0, _.c$)(
        "notifications",
        "reactionNotifications",
        (e) => e ?? s.Tz.NOTIFICATIONS_ENABLED,
        (e) => e,
    ),
    R = (0, _.c$)(
        "notifications",
        "enableGdmAllReactionNotifications",
        (e) =>
            null != e && void 0 !== e.value
                ? e.value
                : u.A.settings?.notifications?.reactionNotifications !== s.Tz.NOTIFICATIONS_DISABLED,
        (e) => l._t.create({ value: !!e }),
    );
(0, _.c$)(
    "notifications",
    "customStatusPushNotifications",
    (e) => e ?? s.DQ.STATUS_PUSH_UNSET,
    (e) => e,
),
    (0, _.c$)(
        "notifications",
        "enableSummaryReminderNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    (0, _.c$)(
        "notifications",
        "enableVoiceActivityNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    );
let g = (0, _.c$)(
        "notifications",
        "enableFriendOnlineNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    L = (0, _.c$)(
        "notifications",
        "enableFriendAnniversaryNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    D = (0, _.c$)(
        "notifications",
        "enableGameUpdateNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    b = (0, _.c$)(
        "notifications",
        "enableServerTrendingNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    M = (0, _.c$)(
        "notifications",
        "enableProfileUpdatesNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    );
(0, _.c$)(
    "notifications",
    "enableFriendGamingActivityNotifications",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: !!e }),
);
let P = (0, _.c$)(
        "notifications",
        "enableUpcomingServerEventNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    U = (0, _.c$)(
        "notifications",
        "quietMode",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: !!e }),
    ),
    v = (0, _.c$)(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    y = [],
    G = (0, _.c$)(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => e ?? y,
        (e) => e,
    ),
    w = (0, _.c$)(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => e ?? y,
        (e) => e,
    ),
    x = (0, _.c$)(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => e ?? y,
        (e) => e,
    ),
    V = (0, _.c$)(
        "textAndImages",
        "viewImageDescriptions",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    B = (0, _.c$)(
        "textAndImages",
        "showCommandSuggestions",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    F = (0, _.c$)(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    k = (0, _.c$)(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    H = (0, _.c$)(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    j = "0",
    Y = (0, _.c$)(
        "notifications",
        "notificationCenterAckedBeforeId",
        (e) => e ?? j,
        (e) => e,
    ),
    W = (0, _.c$)(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    K = (0, _.c$)(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    $ = (0, _.c$)(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    Z = (0, _.c$)(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    q = [],
    Q = (0, _.c$)(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => e ?? q,
        (e) => e,
    ),
    z = (0, _.c$)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    X = (0, _.c$)(
        "privacy",
        "nonSpamRetrainingOptIn",
        (e) => e?.value,
        (e) => (null == e ? void 0 : l._t.create({ value: e })),
    );
(0, _.c$)(
    "privacy",
    "contactSyncEnabled",
    (e) => e?.value ?? !1,
    (e) => l._t.create({ value: e }),
);
let J = (0, _.c$)(
        "privacy",
        "defaultGuildsRestricted",
        (e) => e ?? !1,
        (e) => e,
    ),
    ee = (0, _.c$)(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    et = (0, _.c$)(
        "privacy",
        "restrictedGuildIds",
        (e) => e ?? [],
        (e) => e,
    );
(0, _.c$)(
    "privacy",
    "friendDiscoveryFlags",
    (e) => e?.value ?? 0,
    (e) => l.ZQ.create({ value: e }),
);
let en = (0, _.c$)(
        "privacy",
        "friendSourceFlags",
        (e) => e?.value ?? T.yKI,
        (e) => l.ZQ.create({ value: e }),
    ),
    ei = (0, _.c$)(
        "debug",
        "rtcPanelShowVoiceStates",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    ea = (0, _.c$)(
        "textAndImages",
        "convertEmoticons",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    er = (0, _.c$)(
        "textAndImages",
        "messageDisplayCompact",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    es = (0, _.c$)(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    el = (0, _.c$)(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => e?.value ?? 100,
        (e) => l.uN.create({ value: e }),
    ),
    eo = (0, _.c$)(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    ed = (0, _.c$)(
        "privacy",
        "dropsOptedOut",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    ec = (0, _.c$)(
        "privacy",
        "quests3PDataOptedOut",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    );
(0, _.c$)(
    "voiceAndVideo",
    "nativePhoneIntegrationEnabled",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: e }),
);
let e_ = (0, _.c$)(
        "voiceAndVideo",
        "afkTimeout",
        (e) => e?.value ?? 60,
        (e) => l.ZQ.create({ value: e }),
    ),
    eE = (0, _.c$)(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eu = (0, _.c$)(
        "textAndImages",
        "viewNsfwCommands",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    );
(0, _.c$)(
    "privacy",
    "detectPlatformAccounts",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: e }),
);
let eA = (0, _.c$)(
        "gameLibrary",
        "disableGamesTab",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eI = (0, _.c$)(
        "textAndImages",
        "enableTtsCommand",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    eT = (0, _.c$)(
        "textAndImages",
        "explicitContentFilter",
        (e) => e?.value ?? A.Je.NON_FRIENDS,
        (e) => l.ZQ.create({ value: e }),
    );
(0, _.c$)(
    "textAndImages",
    "dmSpamFilter",
    (e) => e?.value ?? A.uH.NON_FRIENDS,
    (e) => l.ZQ.create({ value: e }),
);
let eh = (0, _.c$)(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => e ?? s.he.DEFAULT_UNSET,
        (e) => e,
    ),
    eS = (0, _.c$)(
        "status",
        "showCurrentGame",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    );
(0, _.c$)(
    "privacy",
    "recentGamesEnabled",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: e }),
);
let eN = (0, _.c$)(
        "privacy",
        "profileVisibility",
        (e) => (null == e || e === s.KP.UNSET ? s.KP.FRIENDS_AND_ALL_GUILDS : e),
        (e) => e,
    ),
    ef = new Set(Object.values(T.clD)),
    ep = (0, _.c$)(
        "status",
        "status",
        (e) => (null != e && ef.has(e.value) ? e.value : T.clD.UNKNOWN),
        (e) => l.hU.create({ value: e }),
    ),
    em = (0, _.c$)(
        "status",
        "statusExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    eO = (0, _.c$)(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    eC = (0, _.c$)(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    eR = (0, _.c$)(
        "clips",
        "allowVoiceRecording",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    eg = (0, _.Mt)(
        (0, _.c$)(
            "textAndImages",
            "inlineAttachmentMedia",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "inlineAttachmentMedia",
    ),
    eL = (0, _.Mt)(
        (0, _.c$)(
            "textAndImages",
            "inlineEmbedMedia",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "inlineEmbedMedia",
    ),
    eD = (0, _.Mt)(
        (0, _.c$)(
            "textAndImages",
            "renderEmbeds",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "renderEmbeds",
    ),
    eb = (0, _.Mt)(
        (0, _.c$)(
            "textAndImages",
            "renderReactions",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "renderReactions",
    );
(0, _.Mt)(
    (0, _.c$)(
        "textAndImages",
        "defaultReactionEmoji",
        (e) => {
            let { emojiId: t, emojiName: n, animated: i } = e ?? {};
            return {
                emojiId: t?.value,
                emojiName: n?.value,
                animated: i?.value,
                disableDoubleTap: e?.disableDoubleTap?.value ?? !1,
            };
        },
        (e) => {
            let { emojiId: t, emojiName: n, animated: i, disableDoubleTap: a } = e;
            return {
                emojiId: l.ol.create({ value: t }),
                emojiName: l.hU.create({ value: n }),
                animated: l._t.create({ value: i }),
                disableDoubleTap: l._t.create({ value: a }),
            };
        },
        { comparator: o.A },
    ),
    "text",
    "defaultReactionEmoji",
);
let eM = (0, _.c$)(
        "localization",
        "timezoneOffset",
        (e) => e?.value ?? null,
        (e) => l.as.create({ value: e ?? 0 }),
    ),
    eP = new Set([I.YP.AUTO, d.b.COZY, d.b.COMPACT]);
(0, _.c$)(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eP.has(e.value) ? e.value : d.b.COZY),
    (e) => l.hU.create({ value: e }),
);
let eU = new Set([d.P.ALL, d.P.UNREADS, d.P.NONE]);
(0, _.c$)(
    "appearance",
    "messagePreviews",
    (e) => (null != e && eU.has(e.value) ? e.value : d.P.ALL),
    (e) => l.hU.create({ value: e }),
);
let ev = (0, _.Mt)(
        (0, _.c$)(
            "appearance",
            "developerMode",
            (e) => e ?? !1,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    ey = (0, _.c$)(
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
                null != e.backgroundGradientPresetId ? l.ZQ.create({ value: e.backgroundGradientPresetId }) : void 0,
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
        { comparator: i.isEqual },
    ),
    eG = (0, _.Tg)(
        (0, _.Mt)(
            (0, _.c$)(
                "textAndImages",
                "gifAutoPlay",
                (e) => e?.value ?? !0,
                (e) => l._t.create({ value: e }),
            ),
            "text",
            "gifAutoPlay",
        ),
        "gifAutoPlay",
        () => E.A.getOverride("gifAutoPlay")?.value,
        () => (0, r.bG)([E.A], () => E.A.getOverride("gifAutoPlay")?.value),
    ),
    ew = (0, _.Tg)(
        (0, _.Mt)(
            (0, _.c$)(
                "textAndImages",
                "animateEmoji",
                (e) => e?.value ?? !0,
                (e) => l._t.create({ value: e }),
            ),
            "text",
            "animateEmoji",
        ),
        "animateEmoji",
        () => E.A.getOverride("animateEmoji")?.value,
        () => (0, r.bG)([E.A], () => E.A.getOverride("animateEmoji")?.value),
    ),
    ex = (0, _.Tg)(
        (0, _.Mt)(
            (0, _.c$)(
                "textAndImages",
                "animateStickers",
                (e) => e?.value ?? h.BJ.ALWAYS_ANIMATE,
                (e) => l.ZQ.create({ value: e }),
            ),
            "text",
            "animateStickers",
        ),
        "animateStickers",
        () => E.A.getOverride("animateStickers")?.value,
        () => (0, r.bG)([E.A], () => E.A.getOverride("animateStickers")?.value),
    ),
    eV = [],
    eB = (0, _.c$)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eV,
        (e) => e,
    ),
    eF = (0, _.c$)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eV,
        (e) => e,
        { delay: I.Sb.FREQUENT_USER_ACTION },
    ),
    ek = [],
    eH = (0, _.c$)(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => e ?? ek,
        (e) => e,
    );
(0, _.c6)({
    baseSetting: (0, _.c$)(
        "privacy",
        "defaultGuildsActivityRestricted",
        (e) => e,
        (e) => e ?? s.AN.OFF,
    ),
    isEligible: () => (0, c.To)(a.p.GUILD_ACTIVITY_STATUS),
    useIsEligible: () => (0, c.yv)(a.p.GUILD_ACTIVITY_STATUS),
    ineligibleDefault: s.AN.OFF,
    eligibleDefault: () => s.AN.ON_FOR_LARGE_GUILDS,
});
let ej = (0, _.c6)({
        baseSetting: (0, _.c$)(
            "privacy",
            "defaultGuildsActivityRestrictedV2",
            (e) => (e === s.Qd.ACTIVITY_STATUS_UNSET ? null : e),
            (e) => e ?? s.Qd.ACTIVITY_STATUS_OFF,
        ),
        isEligible: () => (0, c.To)(a.p.GUILD_ACTIVITY_STATUS),
        useIsEligible: () => (0, c.yv)(a.p.GUILD_ACTIVITY_STATUS),
        ineligibleDefault: s.Qd.ACTIVITY_STATUS_OFF,
        eligibleDefault: () => s.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
    }),
    eY = (0, _.c$)(
        "privacy",
        "familyCenterEnabledV2",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    eW = (0, _.c$)(
        "privacy",
        "hideLegacyUsername",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eK = (0, _.c$)(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    e$ = (0, _.c$)(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => e ?? s.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
        (e) => e,
    ),
    eZ = (0, _.c$)(
        "ads",
        "alwaysDeliver",
        (e) => e ?? !1,
        (e) => e,
    ),
    eq = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e ?? {};
        return {
            explicitContentGuilds: t ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentFriendDm: n ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentNonFriendDm: i ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    eQ = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e;
        return {
            explicitContentGuilds: t ?? void 0,
            explicitContentFriendDm: n ?? void 0,
            explicitContentNonFriendDm: i ?? void 0,
        };
    },
    ez = (0, _.c$)("textAndImages", "explicitContentSettings", eq, eQ),
    eX = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e ?? {};
        return {
            goreContentGuilds: t ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentFriendDm: n ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentNonFriendDm: i ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    eJ = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e;
        return {
            goreContentGuilds: t ?? void 0,
            goreContentFriendDm: n ?? void 0,
            goreContentNonFriendDm: i ?? void 0,
        };
    },
    e0 = (0, _.c$)("textAndImages", "goreContentSettings", eX, eJ);
(0, _.c$)(
    "appearance",
    "searchResultExactCountEnabled",
    (e) => e?.value ?? !1,
    (e) => l._t.create({ value: e }),
),
    (0, _.c$)(
        "appearance",
        "happeningNowCardsDisabled",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    );
let e1 = (0, _.c$)(
    "appearance",
    "timestampHourCycle",
    (e) => e ?? s.PZ.AUTO,
    (e) => e,
);
(0, _.c$)(
    "appearance",
    "launchPadMode",
    (e) => e ?? s.Ar.LAUNCH_PAD_DISABLED,
    (e) => e,
),
    (0, _.c$)(
        "appearance",
        "swipeRightToLeftMode",
        (e) => e ?? s.kW.SWIPE_RIGHT_TO_LEFT_UNSET,
        (e) => e,
    );
let e2 = (0, _.c$)(
        "userContent",
        "lastReceivedChangelogId",
        (e) => e ?? "0",
        (e) => e,
    ),
    e3 = (0, _.c$)(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => e ?? !1,
        (e) => e,
    ),
    e4 = (0, _.c$)(
        "appearance",
        "uiDensity",
        (e) => (e === s.NS.UNSET_UI_DENSITY ? s.NS.DEFAULT : (e ?? s.NS.DEFAULT)),
        (e) => e,
    ),
    e5 = (0, _.c$)(
        "inAppFeedbackSettings",
        "inAppFeedbackStates",
        (e) =>
            (0, i.mapValues)(e ?? {}, (e) => (0, i.mapValues)(e, (e) => (e?.value != null ? Number(e.value) : void 0))),
        (e) =>
            (0, i.mapValues)(e, (e) =>
                (0, i.mapValues)(e, (e) => l.ol.create({ value: null != e ? String(e) : void 0 })),
            ),
        { delay: I.Sb.AUTOMATED },
    ),
    e6 = (0, _.c$)(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    e8 = (0, _.c$)(
        "notifications",
        "enableDmReplyNudgeReminders",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    );
