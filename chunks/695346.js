n.d(t, {
    A2: () => eH,
    AY: () => et,
    CM: () => er,
    Cr: () => e_,
    DC: () => ei,
    Ex: () => eL,
    Fg: () => X,
    G6: () => eu,
    H1: () => D,
    I0: () => k,
    JG: () => eM,
    L1: () => eS,
    NA: () => eE,
    OW: () => es,
    Ok: () => ep,
    Ou: () => V,
    Pe: () => B,
    QK: () => eT,
    QZ: () => A,
    R$: () => E,
    RS: () => eg,
    R_: () => ex,
    Rt: () => eV,
    SE: () => eP,
    Sb: () => eI,
    Sh: () => eU,
    T4: () => w,
    UP: () => el,
    Wp: () => eN,
    Wz: () => eD,
    Xc: () => G,
    Xk: () => L,
    Xr: () => ec,
    YC: () => eZ,
    YT: () => T,
    Yk: () => eA,
    _O: () => R,
    _j: () => ek,
    bh: () => en,
    bm: () => ea,
    cC: () => v,
    cP: () => F,
    co: () => ef,
    d$: () => U,
    d4: () => P,
    dN: () => g,
    eR: () => O,
    eo: () => M,
    ev: () => J,
    fq: () => y,
    fv: () => N,
    fz: () => S,
    gR: () => z,
    gw: () => eG,
    h2: () => q,
    hg: () => eB,
    iG: () => K,
    iH: () => ew,
    jU: () => $,
    kJ: () => W,
    kU: () => ee,
    l4: () => eF,
    mX: () => Y,
    nc: () => eb,
    qF: () => x,
    rN: () => ey,
    tU: () => eh,
    uL: () => j,
    up: () => b,
    vF: () => I,
    x4: () => em,
    xM: () => eo,
    xq: () => Q,
    zA: () => H,
    zY: () => ej
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
    p = n(981631),
    h = n(969943),
    m = n(611480);
let g = (0, d.Zc)(
        'textAndImages',
        'useLegacyChatInput',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    E = (0, d.Zc)(
        'textAndImages',
        'useRichChatInput',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    b = (0, d.Zc)(
        'textAndImages',
        'expressionSuggestionsEnabled',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    y = (0, d.Zc)(
        'textAndImages',
        'includeStickersInAutocomplete',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    O = (0, d.Zc)(
        'textAndImages',
        'includeSoundmojiInAutocomplete',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    v = (0, d.Zc)(
        'textAndImages',
        'renderSpoilers',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : p.A2N.ON_CLICK;
        },
        (e) => a.Gm.create({ value: e })
    ),
    I = (0, d.Zc)(
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
let S = (0, d.Zc)(
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
let T = (0, d.Zc)(
        'notifications',
        'gameActivityNotifications',
        (e) => (null != e ? e : o.Tv.ACTIVITY_NOTIFICATIONS_UNSET),
        (e) => e
    ),
    A = (0, d.Zc)(
        'notifications',
        'quietMode',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: !!e })
    ),
    N = (0, d.Zc)(
        'notifications',
        'focusModeExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    C = [],
    P = (0, d.Zc)(
        'textAndImages',
        'emojiPickerCollapsedSections',
        (e) => (null != e ? e : C),
        (e) => e
    ),
    R = (0, d.Zc)(
        'textAndImages',
        'stickerPickerCollapsedSections',
        (e) => (null != e ? e : C),
        (e) => e
    ),
    w = (0, d.Zc)(
        'textAndImages',
        'soundboardPickerCollapsedSections',
        (e) => (null != e ? e : C),
        (e) => e
    ),
    D = (0, d.Zc)(
        'textAndImages',
        'viewImageDescriptions',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    L = (0, d.Zc)(
        'textAndImages',
        'showCommandSuggestions',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    x = (0, d.Zc)(
        'voiceAndVideo',
        'alwaysPreviewVideo',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    k = (0, d.Zc)(
        'voiceAndVideo',
        'disableStreamPreviews',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    M = (0, d.Zc)(
        'notifications',
        'notifyFriendsOnGoLive',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    j = '0',
    U = (0, d.Zc)(
        'notifications',
        'notificationCenterAckedBeforeId',
        (e) => (null != e ? e : j),
        (e) => e
    ),
    G = (0, d.Zc)(
        'gameLibrary',
        'installShortcutDesktop',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    B = (0, d.Zc)(
        'gameLibrary',
        'installShortcutStartMenu',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    F = (0, d.Zc)(
        'privacy',
        'allowActivityPartyPrivacyFriends',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    V = (0, d.Zc)(
        'privacy',
        'allowActivityPartyPrivacyVoiceChannel',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    Z = [],
    H = (0, d.Zc)(
        'privacy',
        'messageRequestRestrictedGuildIds',
        (e) => (null != e ? e : Z),
        (e) => e
    ),
    Y = (0, d.Zc)(
        'privacy',
        'defaultMessageRequestRestricted',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    W = (0, d.Zc)(
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
let K = (0, d.Zc)(
        'privacy',
        'defaultGuildsRestricted',
        (e) => null != e && e,
        (e) => e
    ),
    z = (0, d.Zc)(
        'privacy',
        'defaultGuildsRestrictedV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    q = (0, d.Zc)(
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
let Q = (0, d.TG)({
        baseSetting: (0, d.Zc)(
            'privacy',
            'friendSourceFlags',
            (e) => (null == e ? void 0 : e.value),
            (e) => a.yC.create({ value: e })
        ),
        isEligible: () => (0, u.k6)('user_settings'),
        useIsEligible: () => (0, u.kH)('user_settings'),
        ineligibleDefault: p.HGf,
        eligibleDefault: () => p.O8q
    }),
    X = (0, d.Zc)(
        'debug',
        'rtcPanelShowVoiceStates',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    J = (0, d.Zc)(
        'textAndImages',
        'convertEmoticons',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    $ = (0, d.Zc)(
        'textAndImages',
        'messageDisplayCompact',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    ee = (0, d.Zc)(
        'voiceAndVideo',
        'soundboardSettings',
        (e) => e,
        (e) => e
    ),
    et = (0, d.Zc)(
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
let en = (0, d.Zc)(
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
let er = (0, d.TG)({
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
    ei = (0, d.Zc)(
        'textAndImages',
        'viewNsfwGuilds',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    eo = (0, d.Zc)(
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
let ea = (0, d.Zc)(
        'gameLibrary',
        'disableGamesTab',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    es = (0, d.Zc)(
        'textAndImages',
        'enableTtsCommand',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    el = (0, d.Zc)(
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
let ec = (0, d.Zc)(
        'textAndImages',
        'dmSpamFilterV2',
        (e) => (null != e ? e : o.Xr.DEFAULT_UNSET),
        (e) => e
    ),
    eu = (0, d.Zc)(
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
let ed = new Set(Object.values(p.Skl)),
    ef = (0, d.Zc)(
        'status',
        'status',
        (e) => (null != e && ed.has(e.value) ? e.value : p.Skl.UNKNOWN),
        (e) => a.Gm.create({ value: e })
    ),
    e_ = (0, d.Zc)(
        'status',
        'statusExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    ep = (0, d.Zc)(
        'status',
        'customStatus',
        (e) => e,
        (e) => e
    ),
    eh = (0, d.Zc)(
        'clips',
        'allowVoiceRecording',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    em = (0, d.KM)(
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
    eg = (0, d.KM)(
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
    eE = (0, d.KM)(
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
    eb = (0, d.KM)(
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
    ey = (0, d.Zc)(
        'localization',
        'timezoneOffset',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : null;
        },
        (e) => a.T4.create({ value: null != e ? e : 0 })
    ),
    eO = new Set([h.fx.AUTO, s.l.COZY, s.l.COMPACT]);
(0, d.Zc)(
    'appearance',
    'channelListLayout',
    (e) => (null != e && eO.has(e.value) ? e.value : s.l.COZY),
    (e) => a.Gm.create({ value: e })
);
let ev = new Set([s.Z.ALL, s.Z.UNREADS, s.Z.NONE]);
(0, d.Zc)(
    'appearance',
    'messagePreviews',
    (e) => (null != e && ev.has(e.value) ? e.value : s.Z.ALL),
    (e) => a.Gm.create({ value: e })
);
let eI = (0, d.KM)(
        (0, d.Zc)(
            'appearance',
            'developerMode',
            (e) => null != e && e,
            (e) => e
        ),
        'appearance',
        'developerMode'
    ),
    eS = (0, d.Zc)(
        'appearance',
        'clientThemeSettings',
        (e) => {
            var t;
            return { backgroundGradientPresetId: null == e || null == (t = e.backgroundGradientPresetId) ? void 0 : t.value };
        },
        (e) => ({ backgroundGradientPresetId: null != e.backgroundGradientPresetId ? a.yC.create({ value: e.backgroundGradientPresetId }) : void 0 })
    ),
    eT = (0, d.R2)(
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
    eA = (0, d.R2)(
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
    eN = (0, d.R2)(
        (0, d.KM)(
            (0, d.Zc)(
                'textAndImages',
                'animateStickers',
                (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.value) ? t : m.yr.ALWAYS_ANIMATE;
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
    eC = [],
    eP = (0, d.Zc)(
        'privacy',
        'activityRestrictedGuildIds',
        (e) => (null != e ? e : eC),
        (e) => e
    ),
    eR = [],
    ew = (0, d.Zc)(
        'privacy',
        'activityJoiningRestrictedGuildIds',
        (e) => (null != e ? e : eR),
        (e) => e
    ),
    eD = (0, d.TG)({
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
    eL = (0, d.Zc)(
        'privacy',
        'familyCenterEnabledV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    ex = (0, d.Zc)(
        'privacy',
        'hideLegacyUsername',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    ek = (0, d.Zc)(
        'privacy',
        'allowGameFriendDmsInDiscord',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    eM = (0, d.Zc)(
        'privacy',
        'slayerSdkReceiveDmsInGame',
        (e) => (null != e ? e : o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET),
        (e) => e
    ),
    ej = (0, d.Zc)(
        'ads',
        'alwaysDeliver',
        (e) => null != e && e,
        (e) => e
    ),
    eU = (0, d.Zc)(
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
    eG = (0, d.Zc)(
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
let eB = (0, d.Zc)(
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
let eF = (0, d.Zc)(
        'userContent',
        'lastReceivedChangelogId',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    eV = (0, d.Zc)(
        'safetySettings',
        'ignoreProfileSpeedbumpDisabled',
        (e) => null != e && e,
        (e) => e
    ),
    eZ = (0, d.Zc)(
        'appearance',
        'uiDensity',
        (e) => (e === o.Pi.UNSET_UI_DENSITY ? o.Pi.DEFAULT : null != e ? e : o.Pi.DEFAULT),
        (e) => e
    ),
    eH = (0, d.Zc)(
        'inAppFeedbackSettings',
        'inAppFeedbackStates',
        (e) => (0, r.mapValues)(null != e ? e : {}, (e) => (0, r.mapValues)(e, (e) => ((null == e ? void 0 : e.value) != null ? Number(e.value) : void 0))),
        (e) => (0, r.mapValues)(e, (e) => (0, r.mapValues)(e, (e) => a.wA.create({ value: null != e ? String(e) : void 0 })))
    );
