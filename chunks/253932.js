n.d(t, {
    $s: () => et,
    CY: () => eC,
    D_: () => N,
    FA: () => en,
    G2: () => em,
    H1: () => eo,
    HO: () => e_,
    HZ: () => eQ,
    Hu: () => e8,
    Iv: () => eq,
    JG: () => eV,
    JI: () => eU,
    JV: () => g,
    Jr: () => y,
    KP: () => eO,
    Kg: () => ec,
    LJ: () => e4,
    ML: () => R,
    NF: () => eJ,
    NO: () => M,
    NR: () => D,
    PZ: () => e1,
    Pf: () => K,
    Pw: () => eH,
    Q$: () => eL,
    Q_: () => ey,
    Qe: () => eu,
    Qr: () => b,
    S0: () => ew,
    SI: () => O,
    SY: () => p,
    Sf: () => eB,
    T3: () => U,
    TA: () => e$,
    UM: () => Q,
    Vd: () => ez,
    Vv: () => eX,
    WY: () => J,
    X6: () => eD,
    Xi: () => e6,
    YX: () => z,
    Yh: () => el,
    Yt: () => e5,
    Zk: () => eK,
    Zp: () => m,
    Zr: () => X,
    Zt: () => Z,
    _3: () => V,
    _6: () => ep,
    _8: () => eZ,
    _Z: () => eW,
    _z: () => F,
    b0: () => w,
    bm: () => H,
    c3: () => L,
    cU: () => ed,
    cj: () => eT,
    dG: () => es,
    dm: () => eY,
    e: () => $,
    eK: () => f,
    eh: () => eG,
    gs: () => C,
    hD: () => eh,
    hH: () => ea,
    he: () => eS,
    iM: () => v,
    j0: () => e3,
    j7: () => er,
    jP: () => ef,
    jW: () => eb,
    kt: () => ev,
    l_: () => eI,
    m$: () => ej,
    n6: () => ee,
    ns: () => Y,
    on: () => eA,
    oz: () => h,
    pE: () => ex,
    pK: () => e2,
    qN: () => e0,
    rs: () => eg,
    tP: () => B,
    tz: () => eN,
    uB: () => j,
    uh: () => k,
    vL: () => ei,
    vf: () => eE,
    wv: () => x,
    xM: () => W,
    zS: () => P,
});
var i = n(735438),
    r = n(923457),
    a = n(17928),
    s = n(873298),
    _ = n(406935),
    l = n(52133),
    o = n(461012),
    E = n(207560),
    d = n(646769),
    c = n(397438),
    u = n(617617),
    I = n(656402),
    A = n(355097),
    T = n(652215),
    S = n(823894);
let N = (0, d.c$)(
        "textAndImages",
        "useLegacyChatInput",
        (e) => e?.value ?? !1,
        (e) => _._t.create({ value: e }),
    ),
    O = (0, d.c$)(
        "textAndImages",
        "useRichChatInput",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: e }),
    ),
    R = (0, d.c$)(
        "textAndImages",
        "includeStickersInAutocomplete",
        (e) => e?.value ?? !1,
        (e) => _._t.create({ value: e }),
    ),
    f = (0, d.c$)(
        "textAndImages",
        "includeSoundmojiInAutocomplete",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: e }),
    ),
    C = (0, d.c$)(
        "textAndImages",
        "renderSpoilers",
        (e) => e?.value ?? T.P6Q.ON_CLICK,
        (e) => _.hU.create({ value: e }),
    ),
    p = (0, d.c$)(
        "textAndImages",
        "useThreadSidebar",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: e }),
    );
(0, d.c$)(
    "notifications",
    "showInAppNotifications",
    (e) => e?.value ?? !0,
    (e) => _._t.create({ value: e }),
);
let m = (0, d.c$)(
        "notifications",
        "reactionNotifications",
        (e) => e ?? s.Tz.NOTIFICATIONS_ENABLED,
        (e) => e,
    ),
    L = (0, d.c$)(
        "notifications",
        "enableGdmAllReactionNotifications",
        (e) =>
            null != e && void 0 !== e.value
                ? e.value
                : u.A.settings?.notifications?.reactionNotifications !== s.Tz.NOTIFICATIONS_DISABLED,
        (e) => _._t.create({ value: !!e }),
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
        (e) => _._t.create({ value: !!e }),
    ),
    (0, d.c$)(
        "notifications",
        "enableVoiceActivityNotifications",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: !!e }),
    );
let D = (0, d.c$)(
        "notifications",
        "enableFriendOnlineNotifications",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: !!e }),
    ),
    h = (0, d.c$)(
        "notifications",
        "enableFriendAnniversaryNotifications",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: !!e }),
    ),
    g = (0, d.c$)(
        "notifications",
        "enableGameUpdateNotifications",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: !!e }),
    ),
    b = (0, d.c$)(
        "notifications",
        "enableServerTrendingNotifications",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: !!e }),
    ),
    U = (0, d.c$)(
        "notifications",
        "enableProfileUpdatesNotifications",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: !!e }),
    );
(0, d.c$)(
    "notifications",
    "enableFriendGamingActivityNotifications",
    (e) => e?.value ?? !0,
    (e) => _._t.create({ value: !!e }),
);
let P = (0, d.c$)(
        "notifications",
        "enableUpcomingServerEventNotifications",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: !!e }),
    ),
    M = (0, d.c$)(
        "notifications",
        "quietMode",
        (e) => e?.value ?? !1,
        (e) => _._t.create({ value: !!e }),
    ),
    y = (0, d.c$)(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    G = [],
    v = (0, d.c$)(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => e ?? G,
        (e) => e,
    ),
    B = (0, d.c$)(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => e ?? G,
        (e) => e,
    ),
    w = (0, d.c$)(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => e ?? G,
        (e) => e,
    ),
    F = (0, d.c$)(
        "textAndImages",
        "viewImageDescriptions",
        (e) => e?.value ?? !1,
        (e) => _._t.create({ value: e }),
    ),
    V = (0, d.c$)(
        "textAndImages",
        "showCommandSuggestions",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: e }),
    ),
    H = (0, d.c$)(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => e?.value ?? !1,
        (e) => _._t.create({ value: e }),
    ),
    k = (0, d.c$)(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => e?.value,
        (e) => _._t.create({ value: e }),
    ),
    x = (0, d.c$)(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => e?.value,
        (e) => _._t.create({ value: e }),
    ),
    W = "0",
    Y = (0, d.c$)(
        "notifications",
        "notificationCenterAckedBeforeId",
        (e) => e ?? W,
        (e) => e,
    ),
    j = (0, d.c$)(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => e?.value ?? !1,
        (e) => _._t.create({ value: e }),
    ),
    K = (0, d.c$)(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: e }),
    ),
    $ = (0, d.c$)(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: e }),
    ),
    Q = (0, d.c$)(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: e }),
    ),
    q = [],
    X = (0, d.c$)(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => e ?? q,
        (e) => e,
    ),
    z = (0, d.c$)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => e?.value,
        (e) => _._t.create({ value: e }),
    ),
    J = (0, d.c$)(
        "privacy",
        "nonSpamRetrainingOptIn",
        (e) => e?.value,
        (e) => (null == e ? void 0 : _._t.create({ value: e })),
    );
(0, d.c$)(
    "privacy",
    "contactSyncEnabled",
    (e) => e?.value ?? !1,
    (e) => _._t.create({ value: e }),
);
let Z = (0, d.c$)(
        "privacy",
        "defaultGuildsRestricted",
        (e) => e ?? !1,
        (e) => e,
    ),
    ee = (0, d.c$)(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => e?.value,
        (e) => _._t.create({ value: e }),
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
    (e) => _.ZQ.create({ value: e }),
);
let en = (0, d.c$)(
        "privacy",
        "friendSourceFlags",
        (e) => e?.value ?? T.yKI,
        (e) => _.ZQ.create({ value: e }),
    ),
    ei = (0, d.c$)(
        "debug",
        "rtcPanelShowVoiceStates",
        (e) => e?.value ?? !1,
        (e) => _._t.create({ value: e }),
    ),
    er = (0, d.c$)(
        "textAndImages",
        "convertEmoticons",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: e }),
    ),
    ea = (0, d.c$)(
        "textAndImages",
        "messageDisplayCompact",
        (e) => e?.value ?? !1,
        (e) => _._t.create({ value: e }),
    ),
    es = (0, d.c$)(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    e_ = (0, d.c$)(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => e?.value ?? 100,
        (e) => _.uN.create({ value: e }),
    ),
    el = (0, d.c$)(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: e }),
    ),
    eo = (0, d.c$)(
        "privacy",
        "dropsOptedOut",
        (e) => e?.value ?? !1,
        (e) => _._t.create({ value: e }),
    ),
    eE = (0, d.c$)(
        "privacy",
        "quests3PDataOptedOut",
        (e) => e?.value ?? !1,
        (e) => _._t.create({ value: e }),
    );
(0, d.c$)(
    "voiceAndVideo",
    "nativePhoneIntegrationEnabled",
    (e) => e?.value ?? !0,
    (e) => _._t.create({ value: e }),
);
let ed = (0, d.c$)(
        "voiceAndVideo",
        "afkTimeout",
        (e) => e?.value ?? 60,
        (e) => _.ZQ.create({ value: e }),
    ),
    ec = (0, d.c$)(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => e?.value ?? !1,
        (e) => _._t.create({ value: e }),
    ),
    eu = (0, d.c$)(
        "textAndImages",
        "viewNsfwCommands",
        (e) => e?.value ?? !1,
        (e) => _._t.create({ value: e }),
    );
(0, d.c$)(
    "privacy",
    "detectPlatformAccounts",
    (e) => e?.value ?? !0,
    (e) => _._t.create({ value: e }),
);
let eI = (0, d.c$)(
        "gameLibrary",
        "disableGamesTab",
        (e) => e?.value ?? !1,
        (e) => _._t.create({ value: e }),
    ),
    eA = (0, d.c$)(
        "textAndImages",
        "enableTtsCommand",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: e }),
    ),
    eT = (0, d.c$)(
        "textAndImages",
        "explicitContentFilter",
        (e) => e?.value ?? I.Je.NON_FRIENDS,
        (e) => _.ZQ.create({ value: e }),
    );
(0, d.c$)(
    "textAndImages",
    "dmSpamFilter",
    (e) => e?.value ?? I.uH.NON_FRIENDS,
    (e) => _.ZQ.create({ value: e }),
);
let eS = (0, d.c$)(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => e ?? s.he.DEFAULT_UNSET,
        (e) => e,
    ),
    eN = (0, d.c$)(
        "status",
        "showCurrentGame",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: e }),
    );
(0, d.c$)(
    "privacy",
    "recentGamesEnabled",
    (e) => e?.value ?? !0,
    (e) => _._t.create({ value: e }),
);
let eO = (0, d.c$)(
        "privacy",
        "profileVisibility",
        (e) => (null == e || e === s.KP.UNSET ? s.KP.FRIENDS_AND_ALL_GUILDS : e),
        (e) => e,
    ),
    eR = new Set(Object.values(T.clD)),
    ef = (0, d.c$)(
        "status",
        "status",
        (e) => (null != e && eR.has(e.value) ? e.value : T.clD.UNKNOWN),
        (e) => _.hU.create({ value: e }),
    ),
    eC = (0, d.c$)(
        "status",
        "statusExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    ep = (0, d.c$)(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    em = (0, d.c$)(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    eL = (0, d.c$)(
        "clips",
        "allowVoiceRecording",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: e }),
    ),
    eD = (0, d.Mt)(
        (0, d.c$)(
            "textAndImages",
            "inlineAttachmentMedia",
            (e) => e?.value ?? !0,
            (e) => _._t.create({ value: e }),
        ),
        "text",
        "inlineAttachmentMedia",
    ),
    eh = (0, d.Mt)(
        (0, d.c$)(
            "textAndImages",
            "inlineEmbedMedia",
            (e) => e?.value ?? !0,
            (e) => _._t.create({ value: e }),
        ),
        "text",
        "inlineEmbedMedia",
    ),
    eg = (0, d.Mt)(
        (0, d.c$)(
            "textAndImages",
            "renderEmbeds",
            (e) => e?.value ?? !0,
            (e) => _._t.create({ value: e }),
        ),
        "text",
        "renderEmbeds",
    ),
    eb = (0, d.Mt)(
        (0, d.c$)(
            "textAndImages",
            "renderReactions",
            (e) => e?.value ?? !0,
            (e) => _._t.create({ value: e }),
        ),
        "text",
        "renderReactions",
    );
(0, d.Mt)(
    (0, d.c$)(
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
            let { emojiId: t, emojiName: n, animated: i, disableDoubleTap: r } = e;
            return {
                emojiId: _.ol.create({ value: t }),
                emojiName: _.hU.create({ value: n }),
                animated: _._t.create({ value: i }),
                disableDoubleTap: _._t.create({ value: r }),
            };
        },
        { comparator: l.A },
    ),
    "text",
    "defaultReactionEmoji",
);
let eU = (0, d.c$)(
        "localization",
        "timezoneOffset",
        (e) => e?.value ?? null,
        (e) => _.as.create({ value: e ?? 0 }),
    ),
    eP = new Set([A.YP.AUTO, o.b.COZY, o.b.COMPACT]);
(0, d.c$)(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eP.has(e.value) ? e.value : o.b.COZY),
    (e) => _.hU.create({ value: e }),
);
let eM = new Set([o.P.ALL, o.P.UNREADS, o.P.NONE]);
(0, d.c$)(
    "appearance",
    "messagePreviews",
    (e) => (null != e && eM.has(e.value) ? e.value : o.P.ALL),
    (e) => _.hU.create({ value: e }),
);
let ey = (0, d.Mt)(
        (0, d.c$)(
            "appearance",
            "developerMode",
            (e) => e ?? !1,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    eG = (0, d.c$)(
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
                null != e.backgroundGradientPresetId ? _.ZQ.create({ value: e.backgroundGradientPresetId }) : void 0,
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
    ev = (0, d.Tg)(
        (0, d.Mt)(
            (0, d.c$)(
                "textAndImages",
                "gifAutoPlay",
                (e) => e?.value ?? !0,
                (e) => _._t.create({ value: e }),
            ),
            "text",
            "gifAutoPlay",
        ),
        "gifAutoPlay",
        () => c.A.getOverride("gifAutoPlay")?.value,
        () => (0, a.bG)([c.A], () => c.A.getOverride("gifAutoPlay")?.value),
    ),
    eB = (0, d.Tg)(
        (0, d.Mt)(
            (0, d.c$)(
                "textAndImages",
                "animateEmoji",
                (e) => e?.value ?? !0,
                (e) => _._t.create({ value: e }),
            ),
            "text",
            "animateEmoji",
        ),
        "animateEmoji",
        () => c.A.getOverride("animateEmoji")?.value,
        () => (0, a.bG)([c.A], () => c.A.getOverride("animateEmoji")?.value),
    ),
    ew = (0, d.Tg)(
        (0, d.Mt)(
            (0, d.c$)(
                "textAndImages",
                "animateStickers",
                (e) => e?.value ?? S.BJ.ALWAYS_ANIMATE,
                (e) => _.ZQ.create({ value: e }),
            ),
            "text",
            "animateStickers",
        ),
        "animateStickers",
        () => c.A.getOverride("animateStickers")?.value,
        () => (0, a.bG)([c.A], () => c.A.getOverride("animateStickers")?.value),
    ),
    eF = [],
    eV = (0, d.c$)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eF,
        (e) => e,
    ),
    eH = (0, d.c$)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eF,
        (e) => e,
        { delay: A.Sb.FREQUENT_USER_ACTION },
    ),
    ek = [],
    ex = (0, d.c$)(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => e ?? ek,
        (e) => e,
    );
(0, d.c6)({
    baseSetting: (0, d.c$)(
        "privacy",
        "defaultGuildsActivityRestricted",
        (e) => e,
        (e) => e ?? s.AN.OFF,
    ),
    isEligible: () => (0, E.To)(r.p.GUILD_ACTIVITY_STATUS),
    useIsEligible: () => (0, E.yv)(r.p.GUILD_ACTIVITY_STATUS),
    ineligibleDefault: s.AN.OFF,
    eligibleDefault: () => s.AN.ON_FOR_LARGE_GUILDS,
});
let eW = (0, d.c6)({
        baseSetting: (0, d.c$)(
            "privacy",
            "defaultGuildsActivityRestrictedV2",
            (e) => (e === s.Qd.ACTIVITY_STATUS_UNSET ? null : e),
            (e) => e ?? s.Qd.ACTIVITY_STATUS_OFF,
        ),
        isEligible: () => (0, E.To)(r.p.GUILD_ACTIVITY_STATUS),
        useIsEligible: () => (0, E.yv)(r.p.GUILD_ACTIVITY_STATUS),
        ineligibleDefault: s.Qd.ACTIVITY_STATUS_OFF,
        eligibleDefault: () => s.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
    }),
    eY = (0, d.c$)(
        "privacy",
        "familyCenterEnabledV2",
        (e) => e?.value,
        (e) => _._t.create({ value: e }),
    ),
    ej = (0, d.c$)(
        "privacy",
        "hideLegacyUsername",
        (e) => e?.value ?? !1,
        (e) => _._t.create({ value: e }),
    ),
    eK = (0, d.c$)(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: e }),
    ),
    e$ = (0, d.c$)(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => e ?? s.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
        (e) => e,
    ),
    eQ = (0, d.c$)(
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
    eX = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e;
        return {
            explicitContentGuilds: t ?? void 0,
            explicitContentFriendDm: n ?? void 0,
            explicitContentNonFriendDm: i ?? void 0,
        };
    },
    ez = (0, d.c$)("textAndImages", "explicitContentSettings", eq, eX),
    eJ = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e ?? {};
        return {
            goreContentGuilds: t ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentFriendDm: n ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentNonFriendDm: i ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    eZ = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e;
        return {
            goreContentGuilds: t ?? void 0,
            goreContentFriendDm: n ?? void 0,
            goreContentNonFriendDm: i ?? void 0,
        };
    },
    e0 = (0, d.c$)("textAndImages", "goreContentSettings", eJ, eZ);
(0, d.c$)(
    "appearance",
    "searchResultExactCountEnabled",
    (e) => e?.value ?? !1,
    (e) => _._t.create({ value: e }),
),
    (0, d.c$)(
        "appearance",
        "happeningNowCardsDisabled",
        (e) => e?.value ?? !1,
        (e) => _._t.create({ value: e }),
    );
let e1 = (0, d.c$)(
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
        (e) => (e === s.NS.UNSET_UI_DENSITY ? s.NS.DEFAULT : (e ?? s.NS.DEFAULT)),
        (e) => e,
    ),
    e5 = (0, d.c$)(
        "inAppFeedbackSettings",
        "inAppFeedbackStates",
        (e) =>
            (0, i.mapValues)(e ?? {}, (e) => (0, i.mapValues)(e, (e) => (e?.value != null ? Number(e.value) : void 0))),
        (e) =>
            (0, i.mapValues)(e, (e) =>
                (0, i.mapValues)(e, (e) => _.ol.create({ value: null != e ? String(e) : void 0 })),
            ),
        { delay: A.Sb.AUTOMATED },
    ),
    e8 = (0, d.c$)(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => e?.value ?? !1,
        (e) => _._t.create({ value: e }),
    ),
    e4 = (0, d.c$)(
        "notifications",
        "enableDmReplyNudgeReminders",
        (e) => e?.value ?? !0,
        (e) => _._t.create({ value: e }),
    );
