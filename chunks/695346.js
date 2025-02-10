n.d(t, {
    AY: () => J,
    CM: () => ee,
    Cr: () => ec,
    DC: () => et,
    Ex: () => eD,
    Fg: () => z,
    G6: () => eo,
    H1: () => O,
    I0: () => x,
    L1: () => eI,
    NA: () => eh,
    OW: () => er,
    Ok: () => ed,
    Ou: () => B,
    Pe: () => U,
    QK: () => eT,
    QZ: () => b,
    R$: () => m,
    RS: () => ep,
    R_: () => eL,
    Rt: () => eU,
    SE: () => eN,
    Sb: () => ey,
    Sh: () => eP,
    T4: () => R,
    UP: () => ea,
    Wp: () => eS,
    Wz: () => eO,
    Xc: () => k,
    Xk: () => D,
    Xr: () => es,
    YC: () => eG,
    Yk: () => eb,
    _O: () => C,
    _j: () => ex,
    bh: () => $,
    bm: () => ei,
    cC: () => y,
    cP: () => G,
    co: () => eu,
    d$: () => M,
    d4: () => N,
    dN: () => h,
    eR: () => v,
    eo: () => P,
    ev: () => q,
    fq: () => E,
    fv: () => S,
    fz: () => T,
    gR: () => Y,
    gw: () => ew,
    h2: () => W,
    hg: () => eM,
    iG: () => H,
    iH: () => eR,
    jU: () => Q,
    kJ: () => j,
    kU: () => X,
    l4: () => ek,
    mX: () => V,
    nc: () => em,
    qF: () => L,
    rN: () => eg,
    tU: () => ef,
    uL: () => w,
    up: () => g,
    vF: () => I,
    x4: () => e_,
    xM: () => en,
    xq: () => K,
    zA: () => F
}),
    n(47120);
var i = n(442837),
    r = n(524437),
    a = n(381499),
    s = n(85746),
    o = n(362352),
    l = n(497060),
    u = n(560997),
    c = n(263937),
    d = n(973005),
    f = n(981631),
    _ = n(969943),
    p = n(611480);
let h = (0, u.Zc)(
        'textAndImages',
        'useLegacyChatInput',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    m = (0, u.Zc)(
        'textAndImages',
        'useRichChatInput',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    g = (0, u.Zc)(
        'textAndImages',
        'expressionSuggestionsEnabled',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    E = (0, u.Zc)(
        'textAndImages',
        'includeStickersInAutocomplete',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    v = (0, u.Zc)(
        'textAndImages',
        'includeSoundmojiInAutocomplete',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    y = (0, u.Zc)(
        'textAndImages',
        'renderSpoilers',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : f.A2N.ON_CLICK;
        },
        (e) => a.Gm.create({ value: e })
    ),
    I = (0, u.Zc)(
        'textAndImages',
        'useThreadSidebar',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    );
(0, u.Zc)(
    'notifications',
    'showInAppNotifications',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => a.D5.create({ value: e })
);
let T = (0, u.Zc)(
        'notifications',
        'reactionNotifications',
        (e) => (null != e ? e : r.Ns.NOTIFICATIONS_ENABLED),
        (e) => e
    ),
    b = (0, u.Zc)(
        'notifications',
        'quietMode',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: !!e })
    ),
    S = (0, u.Zc)(
        'notifications',
        'focusModeExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    A = [],
    N = (0, u.Zc)(
        'textAndImages',
        'emojiPickerCollapsedSections',
        (e) => (null != e ? e : A),
        (e) => e
    ),
    C = (0, u.Zc)(
        'textAndImages',
        'stickerPickerCollapsedSections',
        (e) => (null != e ? e : A),
        (e) => e
    ),
    R = (0, u.Zc)(
        'textAndImages',
        'soundboardPickerCollapsedSections',
        (e) => (null != e ? e : A),
        (e) => e
    ),
    O = (0, u.Zc)(
        'textAndImages',
        'viewImageDescriptions',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    D = (0, u.Zc)(
        'textAndImages',
        'showCommandSuggestions',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    L = (0, u.Zc)(
        'voiceAndVideo',
        'alwaysPreviewVideo',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    x = (0, u.Zc)(
        'voiceAndVideo',
        'disableStreamPreviews',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    P = (0, u.Zc)(
        'notifications',
        'notifyFriendsOnGoLive',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    w = '0',
    M = (0, u.Zc)(
        'notifications',
        'notificationCenterAckedBeforeId',
        (e) => (null != e ? e : w),
        (e) => e
    ),
    k = (0, u.Zc)(
        'gameLibrary',
        'installShortcutDesktop',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    U = (0, u.Zc)(
        'gameLibrary',
        'installShortcutStartMenu',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    G = (0, u.Zc)(
        'privacy',
        'allowActivityPartyPrivacyFriends',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    B = (0, u.Zc)(
        'privacy',
        'allowActivityPartyPrivacyVoiceChannel',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    Z = [],
    F = (0, u.Zc)(
        'privacy',
        'messageRequestRestrictedGuildIds',
        (e) => (null != e ? e : Z),
        (e) => e
    ),
    V = (0, u.Zc)(
        'privacy',
        'defaultMessageRequestRestricted',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    j = (0, u.Zc)(
        'privacy',
        'nonSpamRetrainingOptIn',
        (e) => (null == e ? void 0 : e.value),
        (e) => (null == e ? void 0 : a.D5.create({ value: e }))
    );
(0, u.Zc)(
    'privacy',
    'contactSyncEnabled',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
    },
    (e) => a.D5.create({ value: e })
);
let H = (0, u.Zc)(
        'privacy',
        'defaultGuildsRestricted',
        (e) => null != e && e,
        (e) => e
    ),
    Y = (0, u.Zc)(
        'privacy',
        'defaultGuildsRestrictedV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    W = (0, u.Zc)(
        'privacy',
        'restrictedGuildIds',
        (e) => (null != e ? e : []),
        (e) => e
    );
(0, u.Zc)(
    'privacy',
    'friendDiscoveryFlags',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 0;
    },
    (e) => a.yC.create({ value: e })
);
let K = (0, u.TG)({
        baseSetting: (0, u.Zc)(
            'privacy',
            'friendSourceFlags',
            (e) => (null == e ? void 0 : e.value),
            (e) => a.yC.create({ value: e })
        ),
        isEligible: () => (0, l.k6)('user_settings'),
        useIsEligible: () => (0, l.kH)('user_settings'),
        ineligibleDefault: f.HGf,
        eligibleDefault: () => f.O8q
    }),
    z = (0, u.Zc)(
        'debug',
        'rtcPanelShowVoiceStates',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    q = (0, u.Zc)(
        'textAndImages',
        'convertEmoticons',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    Q = (0, u.Zc)(
        'textAndImages',
        'messageDisplayCompact',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    X = (0, u.Zc)(
        'voiceAndVideo',
        'soundboardSettings',
        (e) => e,
        (e) => e
    ),
    J = (0, u.Zc)(
        'voiceAndVideo',
        'soundmojiVolume',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 100;
        },
        (e) => a.A8.create({ value: e })
    );
(0, u.Zc)(
    'voiceAndVideo',
    'streamNotificationsEnabled',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => a.D5.create({ value: e })
);
let $ = (0, u.Zc)(
    'privacy',
    'dropsOptedOut',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
    },
    (e) => a.D5.create({ value: e })
);
(0, u.Zc)(
    'voiceAndVideo',
    'nativePhoneIntegrationEnabled',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => a.D5.create({ value: e })
);
let ee = (0, u.Zc)(
        'voiceAndVideo',
        'afkTimeout',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 600;
        },
        (e) => a.yC.create({ value: e })
    ),
    et = (0, u.Zc)(
        'textAndImages',
        'viewNsfwGuilds',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    en = (0, u.Zc)(
        'textAndImages',
        'viewNsfwCommands',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    );
(0, u.Zc)(
    'privacy',
    'detectPlatformAccounts',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => a.D5.create({ value: e })
);
let ei = (0, u.Zc)(
        'gameLibrary',
        'disableGamesTab',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    er = (0, u.Zc)(
        'textAndImages',
        'enableTtsCommand',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    ea = (0, u.Zc)(
        'textAndImages',
        'explicitContentFilter',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : d.TI.NON_FRIENDS;
        },
        (e) => a.yC.create({ value: e })
    );
(0, u.Zc)(
    'textAndImages',
    'dmSpamFilter',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : d.fQ.NON_FRIENDS;
    },
    (e) => a.yC.create({ value: e })
);
let es = (0, u.Zc)(
        'textAndImages',
        'dmSpamFilterV2',
        (e) => (null != e ? e : r.Xr.DEFAULT_UNSET),
        (e) => e
    ),
    eo = (0, u.Zc)(
        'status',
        'showCurrentGame',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    );
(0, u.Zc)(
    'privacy',
    'recentGamesEnabled',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => a.D5.create({ value: e })
);
let el = new Set(Object.values(f.Skl)),
    eu = (0, u.Zc)(
        'status',
        'status',
        (e) => (null != e && el.has(e.value) ? e.value : f.Skl.UNKNOWN),
        (e) => a.Gm.create({ value: e })
    ),
    ec = (0, u.Zc)(
        'status',
        'statusExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    ed = (0, u.Zc)(
        'status',
        'customStatus',
        (e) => e,
        (e) => e
    ),
    ef = (0, u.Zc)(
        'clips',
        'allowVoiceRecording',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    e_ = (0, u.KM)(
        (0, u.Zc)(
            'textAndImages',
            'inlineAttachmentMedia',
            (e) => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
            },
            (e) => a.D5.create({ value: e })
        ),
        'text',
        'inlineAttachmentMedia'
    ),
    ep = (0, u.KM)(
        (0, u.Zc)(
            'textAndImages',
            'inlineEmbedMedia',
            (e) => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
            },
            (e) => a.D5.create({ value: e })
        ),
        'text',
        'inlineEmbedMedia'
    ),
    eh = (0, u.KM)(
        (0, u.Zc)(
            'textAndImages',
            'renderEmbeds',
            (e) => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
            },
            (e) => a.D5.create({ value: e })
        ),
        'text',
        'renderEmbeds'
    ),
    em = (0, u.KM)(
        (0, u.Zc)(
            'textAndImages',
            'renderReactions',
            (e) => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
            },
            (e) => a.D5.create({ value: e })
        ),
        'text',
        'renderReactions'
    ),
    eg = (0, u.Zc)(
        'localization',
        'timezoneOffset',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : null;
        },
        (e) => a.T4.create({ value: null != e ? e : 0 })
    ),
    eE = new Set([_.fx.AUTO, s.l.COZY, s.l.COMPACT]);
(0, u.Zc)(
    'appearance',
    'channelListLayout',
    (e) => (null != e && eE.has(e.value) ? e.value : s.l.COZY),
    (e) => a.Gm.create({ value: e })
);
let ev = new Set([s.Z.ALL, s.Z.UNREADS, s.Z.NONE]);
(0, u.Zc)(
    'appearance',
    'messagePreviews',
    (e) => (null != e && ev.has(e.value) ? e.value : s.Z.ALL),
    (e) => a.Gm.create({ value: e })
);
let ey = (0, u.KM)(
        (0, u.Zc)(
            'appearance',
            'developerMode',
            (e) => null != e && e,
            (e) => e
        ),
        'appearance',
        'developerMode'
    ),
    eI = (0, u.Zc)(
        'appearance',
        'clientThemeSettings',
        (e) => {
            var t;
            return { backgroundGradientPresetId: null == e ? void 0 : null === (t = e.backgroundGradientPresetId) || void 0 === t ? void 0 : t.value };
        },
        (e) => ({ backgroundGradientPresetId: null != e.backgroundGradientPresetId ? a.yC.create({ value: e.backgroundGradientPresetId }) : void 0 })
    ),
    eT = (0, u.R2)(
        (0, u.KM)(
            (0, u.Zc)(
                'textAndImages',
                'gifAutoPlay',
                (e) => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
                },
                (e) => a.D5.create({ value: e })
            ),
            'text',
            'gifAutoPlay'
        ),
        'gifAutoPlay',
        () => {
            var e;
            return null === (e = c.Z.getOverride('gifAutoPlay')) || void 0 === e ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([c.Z], () => {
                var e;
                return null === (e = c.Z.getOverride('gifAutoPlay')) || void 0 === e ? void 0 : e.value;
            })
    ),
    eb = (0, u.R2)(
        (0, u.KM)(
            (0, u.Zc)(
                'textAndImages',
                'animateEmoji',
                (e) => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
                },
                (e) => a.D5.create({ value: e })
            ),
            'text',
            'animateEmoji'
        ),
        'animateEmoji',
        () => {
            var e;
            return null === (e = c.Z.getOverride('animateEmoji')) || void 0 === e ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([c.Z], () => {
                var e;
                return null === (e = c.Z.getOverride('animateEmoji')) || void 0 === e ? void 0 : e.value;
            })
    ),
    eS = (0, u.R2)(
        (0, u.KM)(
            (0, u.Zc)(
                'textAndImages',
                'animateStickers',
                (e) => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : p.yr.ALWAYS_ANIMATE;
                },
                (e) => a.yC.create({ value: e })
            ),
            'text',
            'animateStickers'
        ),
        'animateStickers',
        () => {
            var e;
            return null === (e = c.Z.getOverride('animateStickers')) || void 0 === e ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([c.Z], () => {
                var e;
                return null === (e = c.Z.getOverride('animateStickers')) || void 0 === e ? void 0 : e.value;
            })
    ),
    eA = [],
    eN = (0, u.Zc)(
        'privacy',
        'activityRestrictedGuildIds',
        (e) => (null != e ? e : eA),
        (e) => e
    ),
    eC = [],
    eR = (0, u.Zc)(
        'privacy',
        'activityJoiningRestrictedGuildIds',
        (e) => (null != e ? e : eC),
        (e) => e
    ),
    eO = (0, u.TG)({
        baseSetting: (0, u.Zc)(
            'privacy',
            'defaultGuildsActivityRestricted',
            (e) => e,
            (e) => (null != e ? e : r.E5.OFF)
        ),
        isEligible: () => (0, o.o0)('user_settings'),
        useIsEligible: () => (0, o.Yd)('user_settings'),
        ineligibleDefault: r.E5.OFF,
        eligibleDefault: () => r.E5.ON
    }),
    eD = (0, u.Zc)(
        'privacy',
        'familyCenterEnabledV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    eL = (0, u.Zc)(
        'privacy',
        'hideLegacyUsername',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    ex = (0, u.Zc)(
        'privacy',
        'allowGameFriendDmsInDiscord',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    eP = (0, u.Zc)(
        'textAndImages',
        'explicitContentSettings',
        (e) => {
            let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = null != e ? e : {};
            return {
                explicitContentGuilds: null != t ? t : r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentFriendDm: null != n ? n : r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentNonFriendDm: null != i ? i : r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION
            };
        },
        (e) => {
            let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e;
            return {
                explicitContentGuilds: null != t ? t : void 0,
                explicitContentFriendDm: null != n ? n : void 0,
                explicitContentNonFriendDm: null != i ? i : void 0
            };
        }
    ),
    ew = (0, u.Zc)(
        'textAndImages',
        'keywordFilterSettings',
        (e) => {
            let { profanity: t, sexualContent: n, slurs: i } = null != e ? e : {};
            return {
                profanity: null == t ? void 0 : t.value,
                sexualContent: null == n ? void 0 : n.value,
                slurs: null == i ? void 0 : i.value
            };
        },
        (e) => {
            let { profanity: t, sexualContent: n, slurs: i } = e;
            return {
                profanity: a.D5.create({ value: t }),
                sexualContent: a.D5.create({ value: n }),
                slurs: a.D5.create({ value: i })
            };
        }
    );
(0, u.Zc)(
    'appearance',
    'searchResultExactCountEnabled',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
    },
    (e) => a.D5.create({ value: e })
),
    (0, u.Zc)(
        'appearance',
        'happeningNowCardsDisabled',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    );
let eM = (0, u.Zc)(
    'appearance',
    'timestampHourCycle',
    (e) => (null != e ? e : r.hg.AUTO),
    (e) => e
);
(0, u.Zc)(
    'appearance',
    'launchPadMode',
    (e) => (null != e ? e : r.l1.LAUNCH_PAD_DISABLED),
    (e) => e
);
let ek = (0, u.Zc)(
        'userContent',
        'lastReceivedChangelogId',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    eU = (0, u.Zc)(
        'safetySettings',
        'ignoreProfileSpeedbumpDisabled',
        (e) => null != e && e,
        (e) => e
    ),
    eG = (0, u.Zc)(
        'appearance',
        'uiDensity',
        (e) => (e === r.Pi.UNSET_UI_DENSITY ? r.Pi.COMPACT : null != e ? e : r.Pi.COMPACT),
        (e) => e
    );
