n.d(t, {
    A2: () => eY,
    AY: () => en,
    CM: () => ei,
    Cr: () => ep,
    DC: () => eo,
    Ex: () => ex,
    Fg: () => J,
    G6: () => ed,
    H1: () => L,
    I0: () => M,
    JG: () => ej,
    L1: () => eT,
    NA: () => eb,
    OW: () => el,
    Ok: () => eh,
    Ou: () => Z,
    Pe: () => F,
    QK: () => eA,
    QZ: () => N,
    R$: () => b,
    RS: () => eE,
    R_: () => ek,
    Rt: () => eZ,
    SE: () => eR,
    Sb: () => eS,
    Sh: () => eG,
    T4: () => D,
    UP: () => ec,
    Wp: () => eC,
    Wz: () => eL,
    Xc: () => B,
    Xk: () => x,
    Xr: () => eu,
    YC: () => eH,
    YT: () => A,
    Yk: () => eN,
    _O: () => w,
    _j: () => eM,
    bh: () => er,
    bm: () => es,
    cC: () => I,
    cP: () => V,
    co: () => e_,
    d$: () => G,
    d4: () => R,
    dN: () => E,
    eR: () => v,
    eo: () => j,
    ev: () => $,
    fq: () => O,
    fv: () => C,
    fz: () => T,
    gR: () => q,
    gw: () => eB,
    h2: () => Q,
    hg: () => eF,
    iG: () => z,
    iH: () => eD,
    jU: () => ee,
    kJ: () => K,
    kU: () => et,
    l4: () => eV,
    mX: () => W,
    nc: () => ey,
    qF: () => k,
    rN: () => eO,
    tU: () => em,
    uL: () => U,
    up: () => y,
    vF: () => S,
    x4: () => eg,
    xM: () => ea,
    xq: () => X,
    zA: () => Y,
    zY: () => eU
}),
    n(388685);
var r = n(392711),
    i = n(442837),
    o = n(524437),
    a = n(381499),
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
        (e) => a.D5.create({ value: e })
    ),
    b = (0, d.Zc)(
        'textAndImages',
        'useRichChatInput',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    y = (0, d.Zc)(
        'textAndImages',
        'expressionSuggestionsEnabled',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    O = (0, d.Zc)(
        'textAndImages',
        'includeStickersInAutocomplete',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    v = (0, d.Zc)(
        'textAndImages',
        'includeSoundmojiInAutocomplete',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    I = (0, d.Zc)(
        'textAndImages',
        'renderSpoilers',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : h.A2N.ON_CLICK;
        },
        (e) => a.Gm.create({ value: e })
    ),
    S = (0, d.Zc)(
        'textAndImages',
        'useThreadSidebar',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    );
(0, d.Zc)(
    'notifications',
    'showInAppNotifications',
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => a.D5.create({ value: e })
);
let T = (0, d.Zc)(
    'notifications',
    'reactionNotifications',
    (e) => (null != e ? e : o.Ns.NOTIFICATIONS_ENABLED),
    (e) => e
);
(0, d.Zc)(
    'notifications',
    'customStatusPushNotifications',
    (e) => (null != e ? e : o.Oi.STATUS_PUSH_UNSET),
    (e) => e
);
let A = (0, d.Zc)(
        'notifications',
        'gameActivityNotifications',
        (e) => (null != e ? e : o.Tv.ACTIVITY_NOTIFICATIONS_UNSET),
        (e) => e
    ),
    N = (0, d.Zc)(
        'notifications',
        'quietMode',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: !!e })
    ),
    C = (0, d.Zc)(
        'notifications',
        'focusModeExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    P = [],
    R = (0, d.Zc)(
        'textAndImages',
        'emojiPickerCollapsedSections',
        (e) => (null != e ? e : P),
        (e) => e
    ),
    w = (0, d.Zc)(
        'textAndImages',
        'stickerPickerCollapsedSections',
        (e) => (null != e ? e : P),
        (e) => e
    ),
    D = (0, d.Zc)(
        'textAndImages',
        'soundboardPickerCollapsedSections',
        (e) => (null != e ? e : P),
        (e) => e
    ),
    L = (0, d.Zc)(
        'textAndImages',
        'viewImageDescriptions',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    x = (0, d.Zc)(
        'textAndImages',
        'showCommandSuggestions',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    k = (0, d.Zc)(
        'voiceAndVideo',
        'alwaysPreviewVideo',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    M = (0, d.Zc)(
        'voiceAndVideo',
        'disableStreamPreviews',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    j = (0, d.Zc)(
        'notifications',
        'notifyFriendsOnGoLive',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    U = '0',
    G = (0, d.Zc)(
        'notifications',
        'notificationCenterAckedBeforeId',
        (e) => (null != e ? e : U),
        (e) => e
    ),
    B = (0, d.Zc)(
        'gameLibrary',
        'installShortcutDesktop',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    F = (0, d.Zc)(
        'gameLibrary',
        'installShortcutStartMenu',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    V = (0, d.Zc)(
        'privacy',
        'allowActivityPartyPrivacyFriends',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    Z = (0, d.Zc)(
        'privacy',
        'allowActivityPartyPrivacyVoiceChannel',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    H = [],
    Y = (0, d.Zc)(
        'privacy',
        'messageRequestRestrictedGuildIds',
        (e) => (null != e ? e : H),
        (e) => e
    ),
    W = (0, d.Zc)(
        'privacy',
        'defaultMessageRequestRestricted',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    K = (0, d.Zc)(
        'privacy',
        'nonSpamRetrainingOptIn',
        (e) => (null == e ? void 0 : e.value),
        (e) => (null == e ? void 0 : a.D5.create({ value: e }))
    );
(0, d.Zc)(
    'privacy',
    'contactSyncEnabled',
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => a.D5.create({ value: e })
);
let z = (0, d.Zc)(
        'privacy',
        'defaultGuildsRestricted',
        (e) => null != e && e,
        (e) => e
    ),
    q = (0, d.Zc)(
        'privacy',
        'defaultGuildsRestrictedV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
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
    (e) => a.yC.create({ value: e })
);
let X = (0, d.TG)({
        baseSetting: (0, d.Zc)(
            'privacy',
            'friendSourceFlags',
            (e) => (null == e ? void 0 : e.value),
            (e) => a.yC.create({ value: e })
        ),
        isEligible: () => (0, u.k6)('user_settings'),
        useIsEligible: () => (0, u.kH)('user_settings'),
        ineligibleDefault: h.HGf,
        eligibleDefault: () => h.O8q
    }),
    J = (0, d.Zc)(
        'debug',
        'rtcPanelShowVoiceStates',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    $ = (0, d.Zc)(
        'textAndImages',
        'convertEmoticons',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    ee = (0, d.Zc)(
        'textAndImages',
        'messageDisplayCompact',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    et = (0, d.Zc)(
        'voiceAndVideo',
        'soundboardSettings',
        (e) => e,
        (e) => e
    ),
    en = (0, d.Zc)(
        'voiceAndVideo',
        'soundmojiVolume',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : 100;
        },
        (e) => a.A8.create({ value: e })
    );
(0, d.Zc)(
    'voiceAndVideo',
    'streamNotificationsEnabled',
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => a.D5.create({ value: e })
);
let er = (0, d.Zc)(
    'privacy',
    'dropsOptedOut',
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => a.D5.create({ value: e })
);
(0, d.Zc)(
    'voiceAndVideo',
    'nativePhoneIntegrationEnabled',
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => a.D5.create({ value: e })
);
let ei = (0, d.TG)({
        baseSetting: (0, d.Zc)(
            'voiceAndVideo',
            'afkTimeout',
            (e) => (null == e ? void 0 : e.value),
            (e) => a.yC.create({ value: e })
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
        (e) => a.D5.create({ value: e })
    ),
    ea = (0, d.Zc)(
        'textAndImages',
        'viewNsfwCommands',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    );
(0, d.Zc)(
    'privacy',
    'detectPlatformAccounts',
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => a.D5.create({ value: e })
);
let es = (0, d.Zc)(
        'gameLibrary',
        'disableGamesTab',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    el = (0, d.Zc)(
        'textAndImages',
        'enableTtsCommand',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    ec = (0, d.Zc)(
        'textAndImages',
        'explicitContentFilter',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : _.TI.NON_FRIENDS;
        },
        (e) => a.yC.create({ value: e })
    );
(0, d.Zc)(
    'textAndImages',
    'dmSpamFilter',
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) ? t : _.fQ.NON_FRIENDS;
    },
    (e) => a.yC.create({ value: e })
);
let eu = (0, d.Zc)(
        'textAndImages',
        'dmSpamFilterV2',
        (e) => (null != e ? e : o.Xr.DEFAULT_UNSET),
        (e) => e
    ),
    ed = (0, d.Zc)(
        'status',
        'showCurrentGame',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    );
(0, d.Zc)(
    'privacy',
    'recentGamesEnabled',
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => a.D5.create({ value: e })
);
let ef = new Set(Object.values(h.Skl)),
    e_ = (0, d.Zc)(
        'status',
        'status',
        (e) => (null != e && ef.has(e.value) ? e.value : h.Skl.UNKNOWN),
        (e) => a.Gm.create({ value: e })
    ),
    ep = (0, d.Zc)(
        'status',
        'statusExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    eh = (0, d.Zc)(
        'status',
        'customStatus',
        (e) => e,
        (e) => e
    ),
    em = (0, d.Zc)(
        'clips',
        'allowVoiceRecording',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    eg = (0, d.KM)(
        (0, d.Zc)(
            'textAndImages',
            'inlineAttachmentMedia',
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => a.D5.create({ value: e })
        ),
        'text',
        'inlineAttachmentMedia'
    ),
    eE = (0, d.KM)(
        (0, d.Zc)(
            'textAndImages',
            'inlineEmbedMedia',
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => a.D5.create({ value: e })
        ),
        'text',
        'inlineEmbedMedia'
    ),
    eb = (0, d.KM)(
        (0, d.Zc)(
            'textAndImages',
            'renderEmbeds',
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => a.D5.create({ value: e })
        ),
        'text',
        'renderEmbeds'
    ),
    ey = (0, d.KM)(
        (0, d.Zc)(
            'textAndImages',
            'renderReactions',
            (e) => {
                var t;
                return null == (t = null == e ? void 0 : e.value) || t;
            },
            (e) => a.D5.create({ value: e })
        ),
        'text',
        'renderReactions'
    ),
    eO = (0, d.Zc)(
        'localization',
        'timezoneOffset',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : null;
        },
        (e) => a.T4.create({ value: null != e ? e : 0 })
    ),
    ev = new Set([m.fx.AUTO, s.l.COZY, s.l.COMPACT]);
(0, d.Zc)(
    'appearance',
    'channelListLayout',
    (e) => (null != e && ev.has(e.value) ? e.value : s.l.COZY),
    (e) => a.Gm.create({ value: e })
);
let eI = new Set([s.Z.ALL, s.Z.UNREADS, s.Z.NONE]);
(0, d.Zc)(
    'appearance',
    'messagePreviews',
    (e) => (null != e && eI.has(e.value) ? e.value : s.Z.ALL),
    (e) => a.Gm.create({ value: e })
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
    eT = (0, d.Zc)(
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
            backgroundGradientPresetId: null != e.backgroundGradientPresetId ? a.yC.create({ value: e.backgroundGradientPresetId }) : void 0,
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
    eA = (0, d.R2)(
        (0, d.KM)(
            (0, d.Zc)(
                'textAndImages',
                'gifAutoPlay',
                (e) => {
                    var t;
                    return null == (t = null == e ? void 0 : e.value) || t;
                },
                (e) => a.D5.create({ value: e })
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
    eN = (0, d.R2)(
        (0, d.KM)(
            (0, d.Zc)(
                'textAndImages',
                'animateEmoji',
                (e) => {
                    var t;
                    return null == (t = null == e ? void 0 : e.value) || t;
                },
                (e) => a.D5.create({ value: e })
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
    eC = (0, d.R2)(
        (0, d.KM)(
            (0, d.Zc)(
                'textAndImages',
                'animateStickers',
                (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.value) ? t : g.yr.ALWAYS_ANIMATE;
                },
                (e) => a.yC.create({ value: e })
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
    eR = (0, d.Zc)(
        'privacy',
        'activityRestrictedGuildIds',
        (e) => (null != e ? e : eP),
        (e) => e
    ),
    ew = [],
    eD = (0, d.Zc)(
        'privacy',
        'activityJoiningRestrictedGuildIds',
        (e) => (null != e ? e : ew),
        (e) => e
    ),
    eL = (0, d.TG)({
        baseSetting: (0, d.Zc)(
            'privacy',
            'defaultGuildsActivityRestricted',
            (e) => e,
            (e) => (null != e ? e : o.E5.OFF)
        ),
        isEligible: () => (0, c.o0)('user_settings'),
        useIsEligible: () => (0, c.Yd)('user_settings'),
        ineligibleDefault: o.E5.OFF,
        eligibleDefault: () => o.E5.ON
    }),
    ex = (0, d.Zc)(
        'privacy',
        'familyCenterEnabledV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    ek = (0, d.Zc)(
        'privacy',
        'hideLegacyUsername',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    eM = (0, d.Zc)(
        'privacy',
        'allowGameFriendDmsInDiscord',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    ej = (0, d.Zc)(
        'privacy',
        'slayerSdkReceiveDmsInGame',
        (e) => (null != e ? e : o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET),
        (e) => e
    ),
    eU = (0, d.Zc)(
        'ads',
        'alwaysDeliver',
        (e) => null != e && e,
        (e) => e
    ),
    eG = (0, d.Zc)(
        'textAndImages',
        'explicitContentSettings',
        (e) => {
            let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = null != e ? e : {};
            return {
                explicitContentGuilds: null != t ? t : o.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentFriendDm: null != n ? n : o.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentNonFriendDm: null != r ? r : o.Q4.UNSET_EXPLICIT_CONTENT_REDACTION
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
    eB = (0, d.Zc)(
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
                profanity: a.D5.create({ value: t }),
                sexualContent: a.D5.create({ value: n }),
                slurs: a.D5.create({ value: r })
            };
        }
    );
(0, d.Zc)(
    'appearance',
    'searchResultExactCountEnabled',
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => a.D5.create({ value: e })
),
    (0, d.Zc)(
        'appearance',
        'happeningNowCardsDisabled',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    );
let eF = (0, d.Zc)(
    'appearance',
    'timestampHourCycle',
    (e) => (null != e ? e : o.hg.AUTO),
    (e) => e
);
(0, d.Zc)(
    'appearance',
    'launchPadMode',
    (e) => (null != e ? e : o.l1.LAUNCH_PAD_DISABLED),
    (e) => e
),
    (0, d.Zc)(
        'appearance',
        'swipeRightToLeftMode',
        (e) => (null != e ? e : o.n9.SWIPE_RIGHT_TO_LEFT_UNSET),
        (e) => e
    );
let eV = (0, d.Zc)(
        'userContent',
        'lastReceivedChangelogId',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    eZ = (0, d.Zc)(
        'safetySettings',
        'ignoreProfileSpeedbumpDisabled',
        (e) => null != e && e,
        (e) => e
    ),
    eH = (0, d.Zc)(
        'appearance',
        'uiDensity',
        (e) => (e === o.Pi.UNSET_UI_DENSITY ? o.Pi.DEFAULT : null != e ? e : o.Pi.DEFAULT),
        (e) => e
    ),
    eY = (0, d.Zc)(
        'inAppFeedbackSettings',
        'inAppFeedbackStates',
        (e) => (0, r.mapValues)(null != e ? e : {}, (e) => (0, r.mapValues)(e, (e) => ((null == e ? void 0 : e.value) != null ? Number(e.value) : void 0))),
        (e) => (0, r.mapValues)(e, (e) => (0, r.mapValues)(e, (e) => a.wA.create({ value: null != e ? String(e) : void 0 }))),
        p.fy.AUTOMATED
    );
