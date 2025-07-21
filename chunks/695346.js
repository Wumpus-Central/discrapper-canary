(n.d(t, {
    A2: () => ez,
    AY: () => er,
    CM: () => ea,
    CW: () => eD,
    Cr: () => eh,
    DC: () => eo,
    Ex: () => ek,
    Fg: () => $,
    G6: () => ef,
    H1: () => x,
    I0: () => j,
    JG: () => eG,
    L1: () => eA,
    NA: () => ey,
    OW: () => ec,
    Ok: () => em,
    Ou: () => H,
    Pe: () => F,
    QK: () => eN,
    QZ: () => C,
    Qq: () => A,
    R$: () => b,
    RS: () => eb,
    R_: () => ej,
    Rt: () => eW,
    SE: () => ew,
    Sb: () => eS,
    Sh: () => eV,
    T4: () => L,
    UP: () => eu,
    Wp: () => eR,
    Wz: () => eM,
    Xc: () => V,
    Xk: () => M,
    Xr: () => ed,
    YC: () => eK,
    YT: () => S,
    Yk: () => eC,
    _O: () => D,
    _j: () => eU,
    bh: () => ei,
    bm: () => el,
    cC: () => v,
    cP: () => Z,
    co: () => ep,
    d$: () => B,
    d4: () => w,
    d8: () => N,
    dN: () => E,
    eR: () => O,
    eo: () => U,
    ev: () => ee,
    fq: () => y,
    fv: () => R,
    fz: () => T,
    gR: () => X,
    gw: () => eZ,
    h2: () => Q,
    hg: () => eH,
    iG: () => q,
    iH: () => ex,
    j7: () => eF,
    jU: () => et,
    kJ: () => z,
    kU: () => en,
    l4: () => eY,
    mX: () => K,
    nc: () => eO,
    qF: () => k,
    rN: () => ev,
    tU: () => eg,
    uL: () => G,
    vF: () => I,
    x4: () => eE,
    xM: () => es,
    xq: () => J,
    zA: () => W,
    zY: () => eB
}),
    n(388685));
var r = n(392711),
    i = n(442837),
    a = n(524437),
    o = n(381499),
    s = n(85746),
    l = n(291741),
    c = n(362352),
    u = n(497060),
    d = n(560997),
    f = n(263937),
    _ = n(973005),
    p = n(526761),
    h = n(981631),
    m = n(969943),
    g = n(611480);
let E = (0, d.Zc)(
        'textAndImages',
        'useLegacyChatInput',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    b = (0, d.Zc)(
        'textAndImages',
        'useRichChatInput',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    y = (0, d.Zc)(
        'textAndImages',
        'includeStickersInAutocomplete',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    O = (0, d.Zc)(
        'textAndImages',
        'includeSoundmojiInAutocomplete',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    v = (0, d.Zc)(
        'textAndImages',
        'renderSpoilers',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : h.A2N.ON_CLICK;
        },
        (e) => o.Gm.create({ value: e })
    ),
    I = (0, d.Zc)(
        'textAndImages',
        'useThreadSidebar',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    );
(0, d.Zc)(
    'notifications',
    'showInAppNotifications',
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e })
);
let T = (0, d.Zc)(
    'notifications',
    'reactionNotifications',
    (e) => (null != e ? e : a.Ns.NOTIFICATIONS_ENABLED),
    (e) => e
);
(0, d.Zc)(
    'notifications',
    'customStatusPushNotifications',
    (e) => (null != e ? e : a.Oi.STATUS_PUSH_UNSET),
    (e) => e
);
let S = (0, d.Zc)(
        'notifications',
        'gameActivityNotifications',
        (e) => (null != e ? e : a.Tv.ACTIVITY_NOTIFICATIONS_UNSET),
        (e) => e
    ),
    A = (0, d.Zc)(
        'notifications',
        'gameActivityExcludeSteamNotifications',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: !!e })
    ),
    N = (0, d.Zc)(
        'notifications',
        'enableVoiceActivityNotifications',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: !!e })
    ),
    C = (0, d.Zc)(
        'notifications',
        'quietMode',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: !!e })
    ),
    R = (0, d.Zc)(
        'notifications',
        'focusModeExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    P = [],
    w = (0, d.Zc)(
        'textAndImages',
        'emojiPickerCollapsedSections',
        (e) => (null != e ? e : P),
        (e) => e
    ),
    D = (0, d.Zc)(
        'textAndImages',
        'stickerPickerCollapsedSections',
        (e) => (null != e ? e : P),
        (e) => e
    ),
    L = (0, d.Zc)(
        'textAndImages',
        'soundboardPickerCollapsedSections',
        (e) => (null != e ? e : P),
        (e) => e
    ),
    x = (0, d.Zc)(
        'textAndImages',
        'viewImageDescriptions',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    M = (0, d.Zc)(
        'textAndImages',
        'showCommandSuggestions',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    k = (0, d.Zc)(
        'voiceAndVideo',
        'alwaysPreviewVideo',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    j = (0, d.Zc)(
        'voiceAndVideo',
        'disableStreamPreviews',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    U = (0, d.Zc)(
        'notifications',
        'notifyFriendsOnGoLive',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    G = '0',
    B = (0, d.Zc)(
        'notifications',
        'notificationCenterAckedBeforeId',
        (e) => (null != e ? e : G),
        (e) => e
    ),
    V = (0, d.Zc)(
        'gameLibrary',
        'installShortcutDesktop',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    F = (0, d.Zc)(
        'gameLibrary',
        'installShortcutStartMenu',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    Z = (0, d.Zc)(
        'privacy',
        'allowActivityPartyPrivacyFriends',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    H = (0, d.Zc)(
        'privacy',
        'allowActivityPartyPrivacyVoiceChannel',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    Y = [],
    W = (0, d.Zc)(
        'privacy',
        'messageRequestRestrictedGuildIds',
        (e) => (null != e ? e : Y),
        (e) => e
    ),
    K = (0, d.Zc)(
        'privacy',
        'defaultMessageRequestRestricted',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    z = (0, d.Zc)(
        'privacy',
        'nonSpamRetrainingOptIn',
        (e) => (null == e ? void 0 : e.value),
        (e) => (null == e ? void 0 : o.D5.create({ value: e }))
    );
(0, d.Zc)(
    'privacy',
    'contactSyncEnabled',
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => o.D5.create({ value: e })
);
let q = (0, d.Zc)(
        'privacy',
        'defaultGuildsRestricted',
        (e) => null != e && e,
        (e) => e
    ),
    X = (0, d.Zc)(
        'privacy',
        'defaultGuildsRestrictedV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    Q = (0, d.Zc)(
        'privacy',
        'restrictedGuildIds',
        (e) => (null != e ? e : []),
        (e) => e
    );
(0, d.Zc)(
    'privacy',
    'friendDiscoveryFlags',
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) ? t : 0;
    },
    (e) => o.yC.create({ value: e })
);
let J = (0, d.TG)({
        baseSetting: (0, d.Zc)(
            'privacy',
            'friendSourceFlags',
            (e) => (null == e ? void 0 : e.value),
            (e) => o.yC.create({ value: e })
        ),
        isEligible: () => (0, u.k6)('user_settings'),
        useIsEligible: () => (0, u.kH)('user_settings'),
        ineligibleDefault: h.HGf,
        eligibleDefault: () => h.O8q
    }),
    $ = (0, d.Zc)(
        'debug',
        'rtcPanelShowVoiceStates',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    ee = (0, d.Zc)(
        'textAndImages',
        'convertEmoticons',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    et = (0, d.Zc)(
        'textAndImages',
        'messageDisplayCompact',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    en = (0, d.Zc)(
        'voiceAndVideo',
        'soundboardSettings',
        (e) => e,
        (e) => e
    ),
    er = (0, d.Zc)(
        'voiceAndVideo',
        'soundmojiVolume',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : 100;
        },
        (e) => o.A8.create({ value: e })
    );
(0, d.Zc)(
    'voiceAndVideo',
    'streamNotificationsEnabled',
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e })
);
let ei = (0, d.Zc)(
    'privacy',
    'dropsOptedOut',
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => o.D5.create({ value: e })
);
(0, d.Zc)(
    'voiceAndVideo',
    'nativePhoneIntegrationEnabled',
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e })
);
let ea = (0, d.TG)({
        baseSetting: (0, d.Zc)(
            'voiceAndVideo',
            'afkTimeout',
            (e) => (null == e ? void 0 : e.value),
            (e) => o.yC.create({ value: e })
        ),
        isEligible: () => (0, l.mO)('user_settings'),
        useIsEligible: () => (0, l.Mk)('user_settings'),
        ineligibleDefault: 600,
        eligibleDefault: () => (0, l.fD)('user_settings'),
        onUseDefault: () => (0, l.Dl)('user_settings')
    }),
    eo = (0, d.Zc)(
        'textAndImages',
        'viewNsfwGuilds',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    es = (0, d.Zc)(
        'textAndImages',
        'viewNsfwCommands',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    );
(0, d.Zc)(
    'privacy',
    'detectPlatformAccounts',
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e })
);
let el = (0, d.Zc)(
        'gameLibrary',
        'disableGamesTab',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    ec = (0, d.Zc)(
        'textAndImages',
        'enableTtsCommand',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    eu = (0, d.Zc)(
        'textAndImages',
        'explicitContentFilter',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : _.TI.NON_FRIENDS;
        },
        (e) => o.yC.create({ value: e })
    );
(0, d.Zc)(
    'textAndImages',
    'dmSpamFilter',
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) ? t : _.fQ.NON_FRIENDS;
    },
    (e) => o.yC.create({ value: e })
);
let ed = (0, d.Zc)(
        'textAndImages',
        'dmSpamFilterV2',
        (e) => (null != e ? e : a.Xr.DEFAULT_UNSET),
        (e) => e
    ),
    ef = (0, d.Zc)(
        'status',
        'showCurrentGame',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    );
(0, d.Zc)(
    'privacy',
    'recentGamesEnabled',
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e })
);
let e_ = new Set(Object.values(h.Skl)),
    ep = (0, d.Zc)(
        'status',
        'status',
        (e) => (null != e && e_.has(e.value) ? e.value : h.Skl.UNKNOWN),
        (e) => o.Gm.create({ value: e })
    ),
    eh = (0, d.Zc)(
        'status',
        'statusExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    em = (0, d.Zc)(
        'status',
        'customStatus',
        (e) => e,
        (e) => e
    ),
    eg = (0, d.Zc)(
        'clips',
        'allowVoiceRecording',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    eE = (0, d.KM)(
        (0, d.Zc)(
            'textAndImages',
            'inlineAttachmentMedia',
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => o.D5.create({ value: e })
        ),
        'text',
        'inlineAttachmentMedia'
    ),
    eb = (0, d.KM)(
        (0, d.Zc)(
            'textAndImages',
            'inlineEmbedMedia',
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => o.D5.create({ value: e })
        ),
        'text',
        'inlineEmbedMedia'
    ),
    ey = (0, d.KM)(
        (0, d.Zc)(
            'textAndImages',
            'renderEmbeds',
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => o.D5.create({ value: e })
        ),
        'text',
        'renderEmbeds'
    ),
    eO = (0, d.KM)(
        (0, d.Zc)(
            'textAndImages',
            'renderReactions',
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => o.D5.create({ value: e })
        ),
        'text',
        'renderReactions'
    ),
    ev = (0, d.Zc)(
        'localization',
        'timezoneOffset',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : null;
        },
        (e) => o.T4.create({ value: null != e ? e : 0 })
    ),
    eI = new Set([m.fx.AUTO, s.l.COZY, s.l.COMPACT]);
(0, d.Zc)(
    'appearance',
    'channelListLayout',
    (e) => (null != e && eI.has(e.value) ? e.value : s.l.COZY),
    (e) => o.Gm.create({ value: e })
);
let eT = new Set([s.Z.ALL, s.Z.UNREADS, s.Z.NONE]);
(0, d.Zc)(
    'appearance',
    'messagePreviews',
    (e) => (null != e && eT.has(e.value) ? e.value : s.Z.ALL),
    (e) => o.Gm.create({ value: e })
);
let eS = (0, d.KM)(
        (0, d.Zc)(
            'appearance',
            'developerMode',
            (e) => null != e && e,
            (e) => e
        ),
        'appearance',
        'developerMode'
    ),
    eA = (0, d.Zc)(
        'appearance',
        'clientThemeSettings',
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
                              baseMix: e.customUserThemeSettings.baseMix
                          }
                        : void 0
            };
        },
        (e) => ({
            backgroundGradientPresetId: null != e.backgroundGradientPresetId ? o.yC.create({ value: e.backgroundGradientPresetId }) : void 0,
            customUserThemeSettings:
                null != e.customUserThemeSettings
                    ? {
                          colors: e.customUserThemeSettings.colors,
                          gradientColorStops: e.customUserThemeSettings.gradientColorStops,
                          gradientAngle: e.customUserThemeSettings.gradientAngle,
                          baseMix: e.customUserThemeSettings.baseMix
                      }
                    : void 0
        })
    ),
    eN = (0, d.R2)(
        (0, d.KM)(
            (0, d.Zc)(
                'textAndImages',
                'gifAutoPlay',
                (e) => {
                    var t;
                    return null == (t = null == e ? void 0 : e.value) || t;
                },
                (e) => o.D5.create({ value: e })
            ),
            'text',
            'gifAutoPlay'
        ),
        'gifAutoPlay',
        () => {
            var e;
            return null == (e = f.Z.getOverride('gifAutoPlay')) ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([f.Z], () => {
                var e;
                return null == (e = f.Z.getOverride('gifAutoPlay')) ? void 0 : e.value;
            })
    ),
    eC = (0, d.R2)(
        (0, d.KM)(
            (0, d.Zc)(
                'textAndImages',
                'animateEmoji',
                (e) => {
                    var t;
                    return null == (t = null == e ? void 0 : e.value) || t;
                },
                (e) => o.D5.create({ value: e })
            ),
            'text',
            'animateEmoji'
        ),
        'animateEmoji',
        () => {
            var e;
            return null == (e = f.Z.getOverride('animateEmoji')) ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([f.Z], () => {
                var e;
                return null == (e = f.Z.getOverride('animateEmoji')) ? void 0 : e.value;
            })
    ),
    eR = (0, d.R2)(
        (0, d.KM)(
            (0, d.Zc)(
                'textAndImages',
                'animateStickers',
                (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.value) ? t : g.yr.ALWAYS_ANIMATE;
                },
                (e) => o.yC.create({ value: e })
            ),
            'text',
            'animateStickers'
        ),
        'animateStickers',
        () => {
            var e;
            return null == (e = f.Z.getOverride('animateStickers')) ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([f.Z], () => {
                var e;
                return null == (e = f.Z.getOverride('animateStickers')) ? void 0 : e.value;
            })
    ),
    eP = [],
    ew = (0, d.Zc)(
        'privacy',
        'activityRestrictedGuildIds',
        (e) => (null != e ? e : eP),
        (e) => e
    ),
    eD = (0, d.Zc)(
        'privacy',
        'activityRestrictedGuildIds',
        (e) => (null != e ? e : eP),
        (e) => e,
        p.fy.FREQUENT_USER_ACTION
    ),
    eL = [],
    ex = (0, d.Zc)(
        'privacy',
        'activityJoiningRestrictedGuildIds',
        (e) => (null != e ? e : eL),
        (e) => e
    ),
    eM = (0, d.TG)({
        baseSetting: (0, d.Zc)(
            'privacy',
            'defaultGuildsActivityRestricted',
            (e) => e,
            (e) => (null != e ? e : a.E5.OFF)
        ),
        isEligible: () => (0, c.o0)('user_settings'),
        useIsEligible: () => (0, c.Yd)('user_settings'),
        ineligibleDefault: a.E5.OFF,
        eligibleDefault: () => a.E5.ON_FOR_LARGE_GUILDS
    }),
    ek = (0, d.Zc)(
        'privacy',
        'familyCenterEnabledV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    ej = (0, d.Zc)(
        'privacy',
        'hideLegacyUsername',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    eU = (0, d.Zc)(
        'privacy',
        'allowGameFriendDmsInDiscord',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    eG = (0, d.Zc)(
        'privacy',
        'slayerSdkReceiveDmsInGame',
        (e) => (null != e ? e : a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET),
        (e) => e
    ),
    eB = (0, d.Zc)(
        'ads',
        'alwaysDeliver',
        (e) => null != e && e,
        (e) => e
    ),
    eV = (0, d.Zc)(
        'textAndImages',
        'explicitContentSettings',
        (e) => {
            let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = null != e ? e : {};
            return {
                explicitContentGuilds: null != t ? t : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentFriendDm: null != n ? n : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentNonFriendDm: null != r ? r : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION
            };
        },
        (e) => {
            let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = e;
            return {
                explicitContentGuilds: null != t ? t : void 0,
                explicitContentFriendDm: null != n ? n : void 0,
                explicitContentNonFriendDm: null != r ? r : void 0
            };
        }
    ),
    eF = (0, d.Zc)(
        'textAndImages',
        'goreContentSettings',
        (e) => {
            let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = null != e ? e : {};
            return {
                goreContentGuilds: null != t ? t : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
                goreContentFriendDm: null != n ? n : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
                goreContentNonFriendDm: null != r ? r : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION
            };
        },
        (e) => {
            let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: r } = e;
            return {
                goreContentGuilds: null != t ? t : void 0,
                goreContentFriendDm: null != n ? n : void 0,
                goreContentNonFriendDm: null != r ? r : void 0
            };
        }
    ),
    eZ = (0, d.Zc)(
        'textAndImages',
        'keywordFilterSettings',
        (e) => {
            let { profanity: t, sexualContent: n, slurs: r } = null != e ? e : {};
            return {
                profanity: null == t ? void 0 : t.value,
                sexualContent: null == n ? void 0 : n.value,
                slurs: null == r ? void 0 : r.value
            };
        },
        (e) => {
            let { profanity: t, sexualContent: n, slurs: r } = e;
            return {
                profanity: o.D5.create({ value: t }),
                sexualContent: o.D5.create({ value: n }),
                slurs: o.D5.create({ value: r })
            };
        }
    );
((0, d.Zc)(
    'appearance',
    'searchResultExactCountEnabled',
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => o.D5.create({ value: e })
),
    (0, d.Zc)(
        'appearance',
        'happeningNowCardsDisabled',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ));
let eH = (0, d.Zc)(
    'appearance',
    'timestampHourCycle',
    (e) => (null != e ? e : a.hg.AUTO),
    (e) => e
);
((0, d.Zc)(
    'appearance',
    'launchPadMode',
    (e) => (null != e ? e : a.l1.LAUNCH_PAD_DISABLED),
    (e) => e
),
    (0, d.Zc)(
        'appearance',
        'swipeRightToLeftMode',
        (e) => (null != e ? e : a.n9.SWIPE_RIGHT_TO_LEFT_UNSET),
        (e) => e
    ));
let eY = (0, d.Zc)(
        'userContent',
        'lastReceivedChangelogId',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    eW = (0, d.Zc)(
        'safetySettings',
        'ignoreProfileSpeedbumpDisabled',
        (e) => null != e && e,
        (e) => e
    ),
    eK = (0, d.Zc)(
        'appearance',
        'uiDensity',
        (e) => (e === a.Pi.UNSET_UI_DENSITY ? a.Pi.DEFAULT : null != e ? e : a.Pi.DEFAULT),
        (e) => e
    ),
    ez = (0, d.Zc)(
        'inAppFeedbackSettings',
        'inAppFeedbackStates',
        (e) => (0, r.mapValues)(null != e ? e : {}, (e) => (0, r.mapValues)(e, (e) => ((null == e ? void 0 : e.value) != null ? Number(e.value) : void 0))),
        (e) => (0, r.mapValues)(e, (e) => (0, r.mapValues)(e, (e) => o.wA.create({ value: null != e ? String(e) : void 0 }))),
        p.fy.AUTOMATED
    );
