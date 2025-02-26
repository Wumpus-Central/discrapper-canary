n.d(t, {
    AY: () => J,
    CM: () => ee,
    Cr: () => eu,
    DC: () => et,
    Ex: () => eP,
    Fg: () => z,
    G6: () => es,
    H1: () => R,
    I0: () => w,
    JG: () => eL,
    L1: () => ey,
    NA: () => eh,
    OW: () => ei,
    Ok: () => ed,
    Ou: () => G,
    Pe: () => j,
    QK: () => eO,
    QZ: () => S,
    R$: () => g,
    RS: () => ep,
    R_: () => eD,
    Rt: () => eU,
    SE: () => eN,
    Sb: () => eb,
    Sh: () => ex,
    T4: () => C,
    UP: () => eo,
    Wp: () => eI,
    Wz: () => eR,
    Xc: () => k,
    Xk: () => P,
    Xr: () => ea,
    YC: () => eG,
    Yk: () => eS,
    _O: () => A,
    _j: () => ew,
    bh: () => $,
    bm: () => er,
    cC: () => b,
    cP: () => U,
    co: () => ec,
    d$: () => M,
    d4: () => N,
    dN: () => h,
    eR: () => v,
    eo: () => L,
    ev: () => q,
    fq: () => E,
    fv: () => I,
    fz: () => O,
    gR: () => W,
    gw: () => eM,
    h2: () => Y,
    hg: () => ek,
    iG: () => H,
    iH: () => eC,
    jU: () => Q,
    kJ: () => Z,
    kU: () => X,
    l4: () => ej,
    mX: () => F,
    nc: () => eg,
    qF: () => D,
    rN: () => em,
    tU: () => ef,
    uL: () => x,
    up: () => m,
    vF: () => y,
    x4: () => e_,
    xM: () => en,
    xq: () => K,
    zA: () => V
}),
    n(47120);
var r = n(442837),
    i = n(524437),
    o = n(381499),
    a = n(85746),
    s = n(362352),
    l = n(497060),
    c = n(560997),
    u = n(263937),
    d = n(973005),
    f = n(981631),
    _ = n(969943),
    p = n(611480);
let h = (0, c.Zc)(
        'textAndImages',
        'useLegacyChatInput',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    g = (0, c.Zc)(
        'textAndImages',
        'useRichChatInput',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    m = (0, c.Zc)(
        'textAndImages',
        'expressionSuggestionsEnabled',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    E = (0, c.Zc)(
        'textAndImages',
        'includeStickersInAutocomplete',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    v = (0, c.Zc)(
        'textAndImages',
        'includeSoundmojiInAutocomplete',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    b = (0, c.Zc)(
        'textAndImages',
        'renderSpoilers',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : f.A2N.ON_CLICK;
        },
        (e) => o.Gm.create({ value: e })
    ),
    y = (0, c.Zc)(
        'textAndImages',
        'useThreadSidebar',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    );
(0, c.Zc)(
    'notifications',
    'showInAppNotifications',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => o.D5.create({ value: e })
);
let O = (0, c.Zc)(
        'notifications',
        'reactionNotifications',
        (e) => (null != e ? e : i.Ns.NOTIFICATIONS_ENABLED),
        (e) => e
    ),
    S = (0, c.Zc)(
        'notifications',
        'quietMode',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: !!e })
    ),
    I = (0, c.Zc)(
        'notifications',
        'focusModeExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    T = [],
    N = (0, c.Zc)(
        'textAndImages',
        'emojiPickerCollapsedSections',
        (e) => (null != e ? e : T),
        (e) => e
    ),
    A = (0, c.Zc)(
        'textAndImages',
        'stickerPickerCollapsedSections',
        (e) => (null != e ? e : T),
        (e) => e
    ),
    C = (0, c.Zc)(
        'textAndImages',
        'soundboardPickerCollapsedSections',
        (e) => (null != e ? e : T),
        (e) => e
    ),
    R = (0, c.Zc)(
        'textAndImages',
        'viewImageDescriptions',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    P = (0, c.Zc)(
        'textAndImages',
        'showCommandSuggestions',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    D = (0, c.Zc)(
        'voiceAndVideo',
        'alwaysPreviewVideo',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    w = (0, c.Zc)(
        'voiceAndVideo',
        'disableStreamPreviews',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    L = (0, c.Zc)(
        'notifications',
        'notifyFriendsOnGoLive',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    x = '0',
    M = (0, c.Zc)(
        'notifications',
        'notificationCenterAckedBeforeId',
        (e) => (null != e ? e : x),
        (e) => e
    ),
    k = (0, c.Zc)(
        'gameLibrary',
        'installShortcutDesktop',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    j = (0, c.Zc)(
        'gameLibrary',
        'installShortcutStartMenu',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    U = (0, c.Zc)(
        'privacy',
        'allowActivityPartyPrivacyFriends',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    G = (0, c.Zc)(
        'privacy',
        'allowActivityPartyPrivacyVoiceChannel',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    B = [],
    V = (0, c.Zc)(
        'privacy',
        'messageRequestRestrictedGuildIds',
        (e) => (null != e ? e : B),
        (e) => e
    ),
    F = (0, c.Zc)(
        'privacy',
        'defaultMessageRequestRestricted',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    Z = (0, c.Zc)(
        'privacy',
        'nonSpamRetrainingOptIn',
        (e) => (null == e ? void 0 : e.value),
        (e) => (null == e ? void 0 : o.D5.create({ value: e }))
    );
(0, c.Zc)(
    'privacy',
    'contactSyncEnabled',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
    },
    (e) => o.D5.create({ value: e })
);
let H = (0, c.Zc)(
        'privacy',
        'defaultGuildsRestricted',
        (e) => null != e && e,
        (e) => e
    ),
    W = (0, c.Zc)(
        'privacy',
        'defaultGuildsRestrictedV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    Y = (0, c.Zc)(
        'privacy',
        'restrictedGuildIds',
        (e) => (null != e ? e : []),
        (e) => e
    );
(0, c.Zc)(
    'privacy',
    'friendDiscoveryFlags',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 0;
    },
    (e) => o.yC.create({ value: e })
);
let K = (0, c.TG)({
        baseSetting: (0, c.Zc)(
            'privacy',
            'friendSourceFlags',
            (e) => (null == e ? void 0 : e.value),
            (e) => o.yC.create({ value: e })
        ),
        isEligible: () => (0, l.k6)('user_settings'),
        useIsEligible: () => (0, l.kH)('user_settings'),
        ineligibleDefault: f.HGf,
        eligibleDefault: () => f.O8q
    }),
    z = (0, c.Zc)(
        'debug',
        'rtcPanelShowVoiceStates',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    q = (0, c.Zc)(
        'textAndImages',
        'convertEmoticons',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    Q = (0, c.Zc)(
        'textAndImages',
        'messageDisplayCompact',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    X = (0, c.Zc)(
        'voiceAndVideo',
        'soundboardSettings',
        (e) => e,
        (e) => e
    ),
    J = (0, c.Zc)(
        'voiceAndVideo',
        'soundmojiVolume',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 100;
        },
        (e) => o.A8.create({ value: e })
    );
(0, c.Zc)(
    'voiceAndVideo',
    'streamNotificationsEnabled',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => o.D5.create({ value: e })
);
let $ = (0, c.Zc)(
    'privacy',
    'dropsOptedOut',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
    },
    (e) => o.D5.create({ value: e })
);
(0, c.Zc)(
    'voiceAndVideo',
    'nativePhoneIntegrationEnabled',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => o.D5.create({ value: e })
);
let ee = (0, c.Zc)(
        'voiceAndVideo',
        'afkTimeout',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 600;
        },
        (e) => o.yC.create({ value: e })
    ),
    et = (0, c.Zc)(
        'textAndImages',
        'viewNsfwGuilds',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    en = (0, c.Zc)(
        'textAndImages',
        'viewNsfwCommands',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    );
(0, c.Zc)(
    'privacy',
    'detectPlatformAccounts',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => o.D5.create({ value: e })
);
let er = (0, c.Zc)(
        'gameLibrary',
        'disableGamesTab',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    ei = (0, c.Zc)(
        'textAndImages',
        'enableTtsCommand',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    eo = (0, c.Zc)(
        'textAndImages',
        'explicitContentFilter',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : d.TI.NON_FRIENDS;
        },
        (e) => o.yC.create({ value: e })
    );
(0, c.Zc)(
    'textAndImages',
    'dmSpamFilter',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : d.fQ.NON_FRIENDS;
    },
    (e) => o.yC.create({ value: e })
);
let ea = (0, c.Zc)(
        'textAndImages',
        'dmSpamFilterV2',
        (e) => (null != e ? e : i.Xr.DEFAULT_UNSET),
        (e) => e
    ),
    es = (0, c.Zc)(
        'status',
        'showCurrentGame',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    );
(0, c.Zc)(
    'privacy',
    'recentGamesEnabled',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => o.D5.create({ value: e })
);
let el = new Set(Object.values(f.Skl)),
    ec = (0, c.Zc)(
        'status',
        'status',
        (e) => (null != e && el.has(e.value) ? e.value : f.Skl.UNKNOWN),
        (e) => o.Gm.create({ value: e })
    ),
    eu = (0, c.Zc)(
        'status',
        'statusExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    ed = (0, c.Zc)(
        'status',
        'customStatus',
        (e) => e,
        (e) => e
    ),
    ef = (0, c.Zc)(
        'clips',
        'allowVoiceRecording',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    e_ = (0, c.KM)(
        (0, c.Zc)(
            'textAndImages',
            'inlineAttachmentMedia',
            (e) => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
            },
            (e) => o.D5.create({ value: e })
        ),
        'text',
        'inlineAttachmentMedia'
    ),
    ep = (0, c.KM)(
        (0, c.Zc)(
            'textAndImages',
            'inlineEmbedMedia',
            (e) => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
            },
            (e) => o.D5.create({ value: e })
        ),
        'text',
        'inlineEmbedMedia'
    ),
    eh = (0, c.KM)(
        (0, c.Zc)(
            'textAndImages',
            'renderEmbeds',
            (e) => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
            },
            (e) => o.D5.create({ value: e })
        ),
        'text',
        'renderEmbeds'
    ),
    eg = (0, c.KM)(
        (0, c.Zc)(
            'textAndImages',
            'renderReactions',
            (e) => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
            },
            (e) => o.D5.create({ value: e })
        ),
        'text',
        'renderReactions'
    ),
    em = (0, c.Zc)(
        'localization',
        'timezoneOffset',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : null;
        },
        (e) => o.T4.create({ value: null != e ? e : 0 })
    ),
    eE = new Set([_.fx.AUTO, a.l.COZY, a.l.COMPACT]);
(0, c.Zc)(
    'appearance',
    'channelListLayout',
    (e) => (null != e && eE.has(e.value) ? e.value : a.l.COZY),
    (e) => o.Gm.create({ value: e })
);
let ev = new Set([a.Z.ALL, a.Z.UNREADS, a.Z.NONE]);
(0, c.Zc)(
    'appearance',
    'messagePreviews',
    (e) => (null != e && ev.has(e.value) ? e.value : a.Z.ALL),
    (e) => o.Gm.create({ value: e })
);
let eb = (0, c.KM)(
        (0, c.Zc)(
            'appearance',
            'developerMode',
            (e) => null != e && e,
            (e) => e
        ),
        'appearance',
        'developerMode'
    ),
    ey = (0, c.Zc)(
        'appearance',
        'clientThemeSettings',
        (e) => {
            var t;
            return { backgroundGradientPresetId: null == e ? void 0 : null === (t = e.backgroundGradientPresetId) || void 0 === t ? void 0 : t.value };
        },
        (e) => ({ backgroundGradientPresetId: null != e.backgroundGradientPresetId ? o.yC.create({ value: e.backgroundGradientPresetId }) : void 0 })
    ),
    eO = (0, c.R2)(
        (0, c.KM)(
            (0, c.Zc)(
                'textAndImages',
                'gifAutoPlay',
                (e) => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
                },
                (e) => o.D5.create({ value: e })
            ),
            'text',
            'gifAutoPlay'
        ),
        'gifAutoPlay',
        () => {
            var e;
            return null === (e = u.Z.getOverride('gifAutoPlay')) || void 0 === e ? void 0 : e.value;
        },
        () =>
            (0, r.e7)([u.Z], () => {
                var e;
                return null === (e = u.Z.getOverride('gifAutoPlay')) || void 0 === e ? void 0 : e.value;
            })
    ),
    eS = (0, c.R2)(
        (0, c.KM)(
            (0, c.Zc)(
                'textAndImages',
                'animateEmoji',
                (e) => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
                },
                (e) => o.D5.create({ value: e })
            ),
            'text',
            'animateEmoji'
        ),
        'animateEmoji',
        () => {
            var e;
            return null === (e = u.Z.getOverride('animateEmoji')) || void 0 === e ? void 0 : e.value;
        },
        () =>
            (0, r.e7)([u.Z], () => {
                var e;
                return null === (e = u.Z.getOverride('animateEmoji')) || void 0 === e ? void 0 : e.value;
            })
    ),
    eI = (0, c.R2)(
        (0, c.KM)(
            (0, c.Zc)(
                'textAndImages',
                'animateStickers',
                (e) => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : p.yr.ALWAYS_ANIMATE;
                },
                (e) => o.yC.create({ value: e })
            ),
            'text',
            'animateStickers'
        ),
        'animateStickers',
        () => {
            var e;
            return null === (e = u.Z.getOverride('animateStickers')) || void 0 === e ? void 0 : e.value;
        },
        () =>
            (0, r.e7)([u.Z], () => {
                var e;
                return null === (e = u.Z.getOverride('animateStickers')) || void 0 === e ? void 0 : e.value;
            })
    ),
    eT = [],
    eN = (0, c.Zc)(
        'privacy',
        'activityRestrictedGuildIds',
        (e) => (null != e ? e : eT),
        (e) => e
    ),
    eA = [],
    eC = (0, c.Zc)(
        'privacy',
        'activityJoiningRestrictedGuildIds',
        (e) => (null != e ? e : eA),
        (e) => e
    ),
    eR = (0, c.TG)({
        baseSetting: (0, c.Zc)(
            'privacy',
            'defaultGuildsActivityRestricted',
            (e) => e,
            (e) => (null != e ? e : i.E5.OFF)
        ),
        isEligible: () => (0, s.o0)('user_settings'),
        useIsEligible: () => (0, s.Yd)('user_settings'),
        ineligibleDefault: i.E5.OFF,
        eligibleDefault: () => i.E5.ON
    }),
    eP = (0, c.Zc)(
        'privacy',
        'familyCenterEnabledV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    eD = (0, c.Zc)(
        'privacy',
        'hideLegacyUsername',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    ew = (0, c.Zc)(
        'privacy',
        'allowGameFriendDmsInDiscord',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    eL = (0, c.Zc)(
        'privacy',
        'slayerSdkReceiveDmsInGame',
        (e) => (null != e ? e : i.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET),
        (e) => e
    ),
    ex = (0, c.Zc)(
        'textAndImages',
        'explicitContentSettings',
        (e) => {
            let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = null != e ? e : {};
            return {
                explicitContentGuilds: null != t ? t : i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentFriendDm: null != n ? n : i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentNonFriendDm: null != r ? r : i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION
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
    eM = (0, c.Zc)(
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
(0, c.Zc)(
    'appearance',
    'searchResultExactCountEnabled',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
    },
    (e) => o.D5.create({ value: e })
),
    (0, c.Zc)(
        'appearance',
        'happeningNowCardsDisabled',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    );
let ek = (0, c.Zc)(
    'appearance',
    'timestampHourCycle',
    (e) => (null != e ? e : i.hg.AUTO),
    (e) => e
);
(0, c.Zc)(
    'appearance',
    'launchPadMode',
    (e) => (null != e ? e : i.l1.LAUNCH_PAD_DISABLED),
    (e) => e
),
    (0, c.Zc)(
        'appearance',
        'swipeRightToLeftMode',
        (e) => (null != e ? e : i.n9.SWIPE_RIGHT_TO_LEFT_UNSET),
        (e) => e
    );
let ej = (0, c.Zc)(
        'userContent',
        'lastReceivedChangelogId',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    eU = (0, c.Zc)(
        'safetySettings',
        'ignoreProfileSpeedbumpDisabled',
        (e) => null != e && e,
        (e) => e
    ),
    eG = (0, c.Zc)(
        'appearance',
        'uiDensity',
        (e) => (e === i.Pi.UNSET_UI_DENSITY ? i.Pi.COMPACT : null != e ? e : i.Pi.COMPACT),
        (e) => e
    );
