var i = n(435558),
    r = n(923457),
    a = n(855986),
    s = n(873298),
    l = n(406935),
    o = n(52133),
    d = n(461012),
    c = n(207560),
    u = n(350503),
    _ = n(646769),
    E = n(397438),
    A = n(355097),
    f = n(750714),
    h = n(652215),
    I = n(823894);
let p = (0, _.c$)(
        "textAndImages",
        "useLegacyChatInput",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    m = (0, _.c$)(
        "textAndImages",
        "useRichChatInput",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    T = (0, _.c$)(
        "textAndImages",
        "includeStickersInAutocomplete",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    g = (0, _.c$)(
        "textAndImages",
        "includeSoundmojiInAutocomplete",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    S = (0, _.c$)(
        "textAndImages",
        "includeGameMentionsInAutocomplete",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    );
(0, _.c$)(
    "textAndImages",
    "inlineEmojiSuggestionsEnabled",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: e }),
);
let N = (0, _.c$)(
        "textAndImages",
        "renderSpoilers",
        (e) => e?.value ?? h.P6Q.ON_CLICK,
        (e) => l.hU.create({ value: e }),
    ),
    C = (0, _.c$)(
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
let O = (0, _.c$)(
    "notifications",
    "reactionNotifications",
    (e) => e ?? s.Tz.NOTIFICATIONS_ENABLED,
    (e) => e,
);
((0, _.c$)(
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
    ));
let R = (0, _.c$)(
    "notifications",
    "enableScreenDowntimeScheduleNotifications",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: !!e }),
);
(0, _.c$)(
    "notifications",
    "enableVoiceActivityNotifications",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: !!e }),
);
let L = (0, _.c$)(
        "notifications",
        "enableFriendOnlineNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    y = (0, _.c$)(
        "notifications",
        "enableFriendAnniversaryNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    D = (0, _.c$)(
        "notifications",
        "enableServerTrendingNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    b = (0, _.c$)(
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
let v = (0, _.c$)(
        "notifications",
        "enableUpcomingServerEventNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    P = (0, _.c$)(
        "notifications",
        "quietMode",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: !!e }),
    ),
    M = (0, _.c$)(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    U = [],
    w = (0, _.c$)(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => e ?? U,
        (e) => e,
    ),
    G = (0, _.c$)(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => e ?? U,
        (e) => e,
    ),
    x = (0, _.c$)(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => e ?? U,
        (e) => e,
    ),
    k = (0, _.c$)(
        "textAndImages",
        "viewImageDescriptions",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    F = (0, _.c$)(
        "textAndImages",
        "showCommandSuggestions",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    B = (0, _.c$)(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    V = (0, _.c$)(
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
    j = (0, _.c$)(
        "notifications",
        "notifyFriendsOnComeOnline",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    W = (0, _.c$)(
        "notifications",
        "notifyServerMembersOnGoLive",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    Y = (0, _.c$)(
        "notifications",
        "notifyFriendsOnProfileUpdate",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    K = (0, _.c$)(
        "notifications",
        "notifyFriendsOnCustomStatusUpdate",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    );
(0, _.c$)(
    "notifications",
    "notificationCenterAckedBeforeId",
    (e) => e ?? "0",
    (e) => e,
);
let $ = (0, _.c$)(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    X = (0, _.c$)(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    z = (0, _.c$)(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    q = (0, _.c$)(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    Q = [],
    J = (0, _.c$)(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => e ?? Q,
        (e) => e,
    ),
    Z = (0, _.c$)(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    ee = (0, _.c$)(
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
let et = (0, _.c$)(
        "privacy",
        "defaultGuildsRestricted",
        (e) => e ?? !1,
        (e) => e,
    ),
    en = (0, _.c$)(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    ei = (0, _.c$)(
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
let er = (0, _.c$)(
        "privacy",
        "friendSourceFlags",
        (e) => e?.value ?? 14,
        (e) => l.ZQ.create({ value: e }),
    ),
    ea = (0, _.c$)(
        "debug",
        "rtcPanelShowVoiceStates",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    es = (0, _.c$)(
        "textAndImages",
        "convertEmoticons",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    el = (0, _.c$)(
        "textAndImages",
        "messageDisplayCompact",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eo = (0, _.c$)(
        "textAndImages",
        "displayCompactAvatars",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    ed = (0, _.c$)(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    ec = (0, _.c$)(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => e?.value ?? 100,
        (e) => l.uN.create({ value: e }),
    ),
    eu = (0, _.c$)(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    e_ = (0, _.c$)(
        "privacy",
        "dropsOptedOut",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eE = (0, _.c$)(
        "privacy",
        "quests3PDataOptedOut",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eA = [],
    ef = (0, _.c$)(
        "privacy",
        "adTopicOptOuts",
        (e) => e ?? eA,
        (e) => e,
    );
(0, _.c$)(
    "voiceAndVideo",
    "nativePhoneIntegrationEnabled",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: e }),
);
let eh = (0, _.c$)(
        "voiceAndVideo",
        "afkTimeout",
        (e) => e?.value ?? 60,
        (e) => l.ZQ.create({ value: e }),
    ),
    eI = (0, _.c$)(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    ep = (0, _.c$)(
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
let em = (0, _.c$)(
        "gameLibrary",
        "disableGamesTab",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eT = (0, _.c$)(
        "textAndImages",
        "enableTtsCommand",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    eg = (0, _.c$)(
        "textAndImages",
        "explicitContentFilter",
        (e) => e?.value ?? f.Je.NON_FRIENDS,
        (e) => l.ZQ.create({ value: e }),
    );
(0, _.c$)(
    "textAndImages",
    "dmSpamFilter",
    (e) => e?.value ?? f.uH.NON_FRIENDS,
    (e) => l.ZQ.create({ value: e }),
);
let eS = (0, _.c$)(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => e ?? s.he.DEFAULT_UNSET,
        (e) => e,
    ),
    eN = (0, _.c$)(
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
let eC = (0, _.c$)(
        "privacy",
        "profileVisibility",
        (e) => (null == e || e === s.KP.UNSET ? s.KP.FRIENDS_AND_ALL_GUILDS : e),
        (e) => e,
    ),
    eO = new Set(Object.values(h.clD)),
    eR = (0, _.c$)(
        "status",
        "status",
        (e) => (null != e && eO.has(e.value) ? e.value : h.clD.UNKNOWN),
        (e) => l.hU.create({ value: e }),
    ),
    eL = (0, _.c$)(
        "status",
        "statusExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    ey = (0, _.c$)(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    eD = (0, _.c$)(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    eb = (0, _.c$)(
        "clips",
        "allowVoiceRecording",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    ev = (0, _.Mt)(
        (0, _.c$)(
            "textAndImages",
            "inlineAttachmentMedia",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "inlineAttachmentMedia",
    ),
    eP = (0, _.Mt)(
        (0, _.c$)(
            "textAndImages",
            "inlineEmbedMedia",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "inlineEmbedMedia",
    ),
    eM = (0, _.Mt)(
        (0, _.c$)(
            "textAndImages",
            "renderEmbeds",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "renderEmbeds",
    ),
    eU = (0, _.Mt)(
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
            let { emojiId: t, emojiName: n, animated: i, disableDoubleTap: r } = e;
            return {
                emojiId: l.ol.create({ value: t }),
                emojiName: l.hU.create({ value: n }),
                animated: l._t.create({ value: i }),
                disableDoubleTap: l._t.create({ value: r }),
            };
        },
        { comparator: o.A },
    ),
    "text",
    "defaultReactionEmoji",
);
let ew = (0, _.c$)(
        "localization",
        "timezoneOffset",
        (e) => e?.value ?? null,
        (e) => l.as.create({ value: e ?? 0 }),
    ),
    eG = new Set([A.YP.AUTO, d.b.COZY, d.b.COMPACT]);
(0, _.c$)(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eG.has(e.value) ? e.value : d.b.COZY),
    (e) => l.hU.create({ value: e }),
);
let ex = new Set([d.P.ALL, d.P.UNREADS, d.P.NONE]);
(0, _.c$)(
    "appearance",
    "messagePreviews",
    (e) => (null != e && ex.has(e.value) ? e.value : d.P.ALL),
    (e) => l.hU.create({ value: e }),
);
let ek = (0, _.Mt)(
        (0, _.c$)(
            "appearance",
            "developerMode",
            (e) => e ?? !1,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    eF = (0, _.c$)(
        "appearance",
        "darkSidebar",
        (e) => e ?? !1,
        (e) => e,
    ),
    eB = (0, _.Mt)(
        (0, _.c$)(
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
                    null != e.backgroundGradientPresetId
                        ? l.ZQ.create({ value: e.backgroundGradientPresetId })
                        : void 0,
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
        "appearance",
        "clientThemeSettings",
    ),
    eV = (0, _.Tg)(
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
        () => (0, a.bG)([E.A], () => E.A.getOverride("gifAutoPlay")?.value),
    ),
    eH = (0, _.Tg)(
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
        () => (0, a.bG)([E.A], () => E.A.getOverride("animateEmoji")?.value),
    ),
    ej = (0, _.Tg)(
        (0, _.Mt)(
            (0, _.c$)(
                "textAndImages",
                "animateStickers",
                (e) => e?.value ?? I.BJ.ALWAYS_ANIMATE,
                (e) => l.ZQ.create({ value: e }),
            ),
            "text",
            "animateStickers",
        ),
        "animateStickers",
        () => E.A.getOverride("animateStickers")?.value,
        () => (0, a.bG)([E.A], () => E.A.getOverride("animateStickers")?.value),
    ),
    eW = [],
    eY = (0, _.c$)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eW,
        (e) => e,
    ),
    eK = (0, _.c$)(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eW,
        (e) => e,
        { delay: A.Sb.FREQUENT_USER_ACTION },
    ),
    e$ = [],
    eX = (0, _.c$)(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => e ?? e$,
        (e) => e,
    );
(0, _.c6)({
    baseSetting: (0, _.c$)(
        "privacy",
        "defaultGuildsActivityRestricted",
        (e) => e,
        (e) => e ?? s.AN.OFF,
    ),
    isEligible: () => (0, c.To)(r.p.GUILD_ACTIVITY_STATUS),
    useIsEligible: () => (0, c.yv)(r.p.GUILD_ACTIVITY_STATUS),
    ineligibleDefault: s.AN.OFF,
    eligibleDefault: () => s.AN.ON_FOR_LARGE_GUILDS,
});
let ez = (0, _.c6)({
        baseSetting: (0, _.c$)(
            "privacy",
            "defaultGuildsActivityRestrictedV2",
            (e) => (e === s.Qd.ACTIVITY_STATUS_UNSET ? null : e),
            (e) => e ?? s.Qd.ACTIVITY_STATUS_OFF,
        ),
        isEligible: () => (0, c.To)(r.p.GUILD_ACTIVITY_STATUS),
        useIsEligible: () => (0, c.yv)(r.p.GUILD_ACTIVITY_STATUS),
        ineligibleDefault: s.Qd.ACTIVITY_STATUS_OFF,
        eligibleDefault: () => s.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
    }),
    eq = (0, _.c$)(
        "privacy",
        "familyCenterEnabledV2",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    eQ = (0, _.c$)(
        "privacy",
        "hideLegacyUsername",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eJ = (0, _.c$)(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    eZ = (0, _.c$)(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => e ?? s.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
        (e) => e,
    ),
    e0 = (0, _.c$)(
        "ads",
        "alwaysDeliver",
        (e) => e ?? !1,
        (e) => e,
    );
function e1(e) {
    let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e ?? {};
    return {
        explicitContentGuilds: t ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        explicitContentFriendDm: n ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        explicitContentNonFriendDm: i ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    };
}
function e2(e) {
    let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e;
    return {
        explicitContentGuilds: t ?? void 0,
        explicitContentFriendDm: n ?? void 0,
        explicitContentNonFriendDm: i ?? void 0,
    };
}
let e3 = (0, _.c$)("textAndImages", "explicitContentSettings", e1, e2);
function e6(e) {
    let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e ?? {};
    return {
        goreContentGuilds: t ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        goreContentFriendDm: n ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        goreContentNonFriendDm: i ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    };
}
function e5(e) {
    let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e;
    return { goreContentGuilds: t ?? void 0, goreContentFriendDm: n ?? void 0, goreContentNonFriendDm: i ?? void 0 };
}
let e7 = (0, _.c$)("textAndImages", "goreContentSettings", e6, e5);
((0, _.c$)(
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
    ));
let e4 = (0, _.c$)(
        "appearance",
        "timestampHourCycle",
        (e) => e ?? s.PZ.AUTO,
        (e) => e,
    ),
    e8 = (0, _.c$)("appearance", "defaultGuildThemePreference", u.v, (e) => e);
((0, _.c$)(
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
    ));
let e9 = (0, _.c$)(
        "userContent",
        "lastReceivedChangelogId",
        (e) => e ?? "0",
        (e) => e,
    ),
    te = (0, _.c$)(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => e ?? !1,
        (e) => e,
    ),
    tt = (0, _.c$)(
        "appearance",
        "uiDensity",
        (e) => (e === s.NS.UNSET_UI_DENSITY ? s.NS.DEFAULT : (e ?? s.NS.DEFAULT)),
        (e) => e,
    ),
    tn = (0, _.c$)(
        "inAppFeedbackSettings",
        "inAppFeedbackStates",
        (e) =>
            (0, i.mapValues)(e ?? {}, (e) => (0, i.mapValues)(e, (e) => (e?.value != null ? Number(e.value) : void 0))),
        (e) =>
            (0, i.mapValues)(e, (e) =>
                (0, i.mapValues)(e, (e) => l.ol.create({ value: null != e ? String(e) : void 0 })),
            ),
        { delay: A.Sb.AUTOMATED },
    ),
    ti = (0, _.c$)(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    tr = (0, _.c$)(
        "privacy",
        "hideFriendRequestNotes",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    );
n.d(
    t,
    {},
    {
        $s: ei,
        BQ: S,
        CY: eL,
        D_: p,
        Eb: K,
        FA: er,
        G2: eD,
        H1: e_,
        HO: ec,
        HZ: e0,
        Hu: ti,
        Iv: e1,
        JG: eY,
        JI: ew,
        Jr: M,
        KP: eC,
        Kg: eI,
        ML: T,
        NF: e6,
        NO: P,
        NR: L,
        PZ: e4,
        Pf: X,
        Pw: eK,
        Q$: eb,
        Q_: ek,
        Qe: ep,
        Qr: D,
        S0: ej,
        SI: m,
        SY: C,
        Sf: eH,
        Sy: Y,
        T3: b,
        TA: eZ,
        UM: q,
        Vd: e3,
        Vv: e2,
        WY: ee,
        X6: ev,
        XZ: ef,
        Xi: tt,
        YX: Z,
        Yh: eu,
        Yt: tn,
        Zd: tr,
        Zk: eJ,
        Zp: O,
        Zr: J,
        Zt: et,
        _3: F,
        _6: ey,
        _8: e5,
        _Z: ez,
        _z: k,
        aM: eo,
        b0: x,
        bm: B,
        cU: eh,
        cj: eg,
        dG: ed,
        dm: eq,
        e: z,
        eK: g,
        eh: eB,
        gY: R,
        gs: N,
        hD: eP,
        hH: el,
        hV: j,
        he: eS,
        iM: w,
        j0: te,
        j7: es,
        jP: eR,
        jW: eU,
        kt: eV,
        l$: eF,
        l_: em,
        m$: eQ,
        n6: en,
        on: eT,
        oz: y,
        pE: eX,
        pK: e9,
        pR: W,
        qN: e7,
        rs: eM,
        tP: G,
        tz: eN,
        uB: $,
        uh: V,
        vL: ea,
        vf: eE,
        wv: H,
        zS: v,
        zY: e8,
    },
);
