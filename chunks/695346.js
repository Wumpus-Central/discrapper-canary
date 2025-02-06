n.d(t, {
    AY: () => $,
    CM: () => et,
    Cr: () => ed,
    DC: () => en,
    Ex: () => ex,
    Fg: () => q,
    G6: () => el,
    H1: () => D,
    I0: () => P,
    L1: () => eb,
    NA: () => em,
    OW: () => ea,
    Ok: () => ef,
    Ou: () => Z,
    Pe: () => G,
    QK: () => eT,
    QZ: () => S,
    R$: () => g,
    RS: () => eh,
    R_: () => eL,
    Rt: () => eG,
    SE: () => eC,
    Sb: () => eI,
    Sh: () => ew,
    T4: () => O,
    UP: () => es,
    Wp: () => eA,
    Wz: () => eD,
    Xc: () => U,
    Xk: () => x,
    Xr: () => eo,
    YC: () => eB,
    Yk: () => eS,
    _O: () => R,
    _j: () => eP,
    bh: () => ee,
    bm: () => er,
    cC: () => I,
    cP: () => B,
    co: () => ec,
    d$: () => k,
    d4: () => C,
    dN: () => m,
    eR: () => y,
    eo: () => w,
    ev: () => Q,
    fq: () => v,
    fv: () => A,
    fz: () => T,
    gR: () => W,
    gw: () => eM,
    h2: () => K,
    hg: () => ek,
    iG: () => Y,
    iH: () => eO,
    jU: () => X,
    kJ: () => H,
    kU: () => J,
    l4: () => eU,
    mX: () => j,
    nc: () => eg,
    qF: () => L,
    rN: () => eE,
    tU: () => e_,
    uL: () => M,
    up: () => E,
    vF: () => b,
    x4: () => ep,
    xM: () => ei,
    xq: () => z,
    zA: () => V
}),
    n(47120);
var i = n(442837),
    r = n(524437),
    a = n(381499),
    s = n(85746),
    o = n(750832),
    l = n(362352),
    u = n(497060),
    c = n(560997),
    d = n(263937),
    f = n(973005),
    _ = n(981631),
    p = n(969943),
    h = n(611480);
let m = (0, c.Zc)(
        'textAndImages',
        'useLegacyChatInput',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    g = (0, c.Zc)(
        'textAndImages',
        'useRichChatInput',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    E = (0, c.Zc)(
        'textAndImages',
        'expressionSuggestionsEnabled',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    v = (0, c.Zc)(
        'textAndImages',
        'includeStickersInAutocomplete',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    y = (0, c.Zc)(
        'textAndImages',
        'includeSoundmojiInAutocomplete',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    I = (0, c.Zc)(
        'textAndImages',
        'renderSpoilers',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : _.A2N.ON_CLICK;
        },
        (e) => a.Gm.create({ value: e })
    ),
    b = (0, c.Zc)(
        'textAndImages',
        'useThreadSidebar',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    );
(0, c.Zc)(
    'notifications',
    'showInAppNotifications',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => a.D5.create({ value: e })
);
let T = (0, c.Zc)(
        'notifications',
        'reactionNotifications',
        (e) => (null != e ? e : r.Ns.NOTIFICATIONS_ENABLED),
        (e) => e
    ),
    S = (0, c.Zc)(
        'notifications',
        'quietMode',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: !!e })
    ),
    A = (0, c.Zc)(
        'notifications',
        'focusModeExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    N = [],
    C = (0, c.Zc)(
        'textAndImages',
        'emojiPickerCollapsedSections',
        (e) => (null != e ? e : N),
        (e) => e
    ),
    R = (0, c.Zc)(
        'textAndImages',
        'stickerPickerCollapsedSections',
        (e) => (null != e ? e : N),
        (e) => e
    ),
    O = (0, c.Zc)(
        'textAndImages',
        'soundboardPickerCollapsedSections',
        (e) => (null != e ? e : N),
        (e) => e
    ),
    D = (0, c.Zc)(
        'textAndImages',
        'viewImageDescriptions',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    x = (0, c.Zc)(
        'textAndImages',
        'showCommandSuggestions',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    L = (0, c.Zc)(
        'voiceAndVideo',
        'alwaysPreviewVideo',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    P = (0, c.Zc)(
        'voiceAndVideo',
        'disableStreamPreviews',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    w = (0, c.Zc)(
        'notifications',
        'notifyFriendsOnGoLive',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    M = '0',
    k = (0, c.Zc)(
        'notifications',
        'notificationCenterAckedBeforeId',
        (e) => (null != e ? e : M),
        (e) => e
    ),
    U = (0, c.Zc)(
        'gameLibrary',
        'installShortcutDesktop',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    G = (0, c.Zc)(
        'gameLibrary',
        'installShortcutStartMenu',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    B = (0, c.Zc)(
        'privacy',
        'allowActivityPartyPrivacyFriends',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    Z = (0, c.Zc)(
        'privacy',
        'allowActivityPartyPrivacyVoiceChannel',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    F = [],
    V = (0, c.Zc)(
        'privacy',
        'messageRequestRestrictedGuildIds',
        (e) => (null != e ? e : F),
        (e) => e
    ),
    j = (0, c.TG)({
        baseSetting: (0, c.Zc)(
            'privacy',
            'defaultMessageRequestRestricted',
            (e) => (null == e ? void 0 : e.value),
            (e) => a.D5.create({ value: e })
        ),
        isEligible: () => (0, o.Ep)('user_settings'),
        useIsEligible: () => (0, o.F4)('user_settings'),
        eligibleDefault: () => !0,
        ineligibleDefault: !1
    }),
    H = (0, c.Zc)(
        'privacy',
        'nonSpamRetrainingOptIn',
        (e) => (null == e ? void 0 : e.value),
        (e) => (null == e ? void 0 : a.D5.create({ value: e }))
    );
(0, c.Zc)(
    'privacy',
    'contactSyncEnabled',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
    },
    (e) => a.D5.create({ value: e })
);
let Y = (0, c.Zc)(
        'privacy',
        'defaultGuildsRestricted',
        (e) => null != e && e,
        (e) => e
    ),
    W = (0, c.Zc)(
        'privacy',
        'defaultGuildsRestrictedV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    K = (0, c.Zc)(
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
    (e) => a.yC.create({ value: e })
);
let z = (0, c.TG)({
        baseSetting: (0, c.Zc)(
            'privacy',
            'friendSourceFlags',
            (e) => (null == e ? void 0 : e.value),
            (e) => a.yC.create({ value: e })
        ),
        isEligible: () => (0, u.k6)('user_settings'),
        useIsEligible: () => (0, u.kH)('user_settings'),
        ineligibleDefault: _.HGf,
        eligibleDefault: () => _.O8q
    }),
    q = (0, c.Zc)(
        'debug',
        'rtcPanelShowVoiceStates',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    Q = (0, c.Zc)(
        'textAndImages',
        'convertEmoticons',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    X = (0, c.Zc)(
        'textAndImages',
        'messageDisplayCompact',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    J = (0, c.Zc)(
        'voiceAndVideo',
        'soundboardSettings',
        (e) => e,
        (e) => e
    ),
    $ = (0, c.Zc)(
        'voiceAndVideo',
        'soundmojiVolume',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 100;
        },
        (e) => a.A8.create({ value: e })
    );
(0, c.Zc)(
    'voiceAndVideo',
    'streamNotificationsEnabled',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => a.D5.create({ value: e })
);
let ee = (0, c.Zc)(
    'privacy',
    'dropsOptedOut',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
    },
    (e) => a.D5.create({ value: e })
);
(0, c.Zc)(
    'voiceAndVideo',
    'nativePhoneIntegrationEnabled',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => a.D5.create({ value: e })
);
let et = (0, c.Zc)(
        'voiceAndVideo',
        'afkTimeout',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 600;
        },
        (e) => a.yC.create({ value: e })
    ),
    en = (0, c.Zc)(
        'textAndImages',
        'viewNsfwGuilds',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    ei = (0, c.Zc)(
        'textAndImages',
        'viewNsfwCommands',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    );
(0, c.Zc)(
    'privacy',
    'detectPlatformAccounts',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => a.D5.create({ value: e })
);
let er = (0, c.Zc)(
        'gameLibrary',
        'disableGamesTab',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    ea = (0, c.Zc)(
        'textAndImages',
        'enableTtsCommand',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    es = (0, c.Zc)(
        'textAndImages',
        'explicitContentFilter',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : f.TI.NON_FRIENDS;
        },
        (e) => a.yC.create({ value: e })
    );
(0, c.Zc)(
    'textAndImages',
    'dmSpamFilter',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : f.fQ.NON_FRIENDS;
    },
    (e) => a.yC.create({ value: e })
);
let eo = (0, c.Zc)(
        'textAndImages',
        'dmSpamFilterV2',
        (e) => (null != e ? e : r.Xr.DEFAULT_UNSET),
        (e) => e
    ),
    el = (0, c.Zc)(
        'status',
        'showCurrentGame',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    );
(0, c.Zc)(
    'privacy',
    'recentGamesEnabled',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => a.D5.create({ value: e })
);
let eu = new Set(Object.values(_.Skl)),
    ec = (0, c.Zc)(
        'status',
        'status',
        (e) => (null != e && eu.has(e.value) ? e.value : _.Skl.UNKNOWN),
        (e) => a.Gm.create({ value: e })
    ),
    ed = (0, c.Zc)(
        'status',
        'statusExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    ef = (0, c.Zc)(
        'status',
        'customStatus',
        (e) => e,
        (e) => e
    ),
    e_ = (0, c.Zc)(
        'clips',
        'allowVoiceRecording',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    ep = (0, c.KM)(
        (0, c.Zc)(
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
    eh = (0, c.KM)(
        (0, c.Zc)(
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
    em = (0, c.KM)(
        (0, c.Zc)(
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
    eg = (0, c.KM)(
        (0, c.Zc)(
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
    eE = (0, c.Zc)(
        'localization',
        'timezoneOffset',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : null;
        },
        (e) => a.T4.create({ value: null != e ? e : 0 })
    ),
    ev = new Set([p.fx.AUTO, s.l.COZY, s.l.COMPACT]);
(0, c.Zc)(
    'appearance',
    'channelListLayout',
    (e) => (null != e && ev.has(e.value) ? e.value : s.l.COZY),
    (e) => a.Gm.create({ value: e })
);
let ey = new Set([s.Z.ALL, s.Z.UNREADS, s.Z.NONE]);
(0, c.Zc)(
    'appearance',
    'messagePreviews',
    (e) => (null != e && ey.has(e.value) ? e.value : s.Z.ALL),
    (e) => a.Gm.create({ value: e })
);
let eI = (0, c.KM)(
        (0, c.Zc)(
            'appearance',
            'developerMode',
            (e) => null != e && e,
            (e) => e
        ),
        'appearance',
        'developerMode'
    ),
    eb = (0, c.Zc)(
        'appearance',
        'clientThemeSettings',
        (e) => {
            var t;
            return { backgroundGradientPresetId: null == e ? void 0 : null === (t = e.backgroundGradientPresetId) || void 0 === t ? void 0 : t.value };
        },
        (e) => ({ backgroundGradientPresetId: null != e.backgroundGradientPresetId ? a.yC.create({ value: e.backgroundGradientPresetId }) : void 0 })
    ),
    eT = (0, c.R2)(
        (0, c.KM)(
            (0, c.Zc)(
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
            return null === (e = d.Z.getOverride('gifAutoPlay')) || void 0 === e ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([d.Z], () => {
                var e;
                return null === (e = d.Z.getOverride('gifAutoPlay')) || void 0 === e ? void 0 : e.value;
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
                (e) => a.D5.create({ value: e })
            ),
            'text',
            'animateEmoji'
        ),
        'animateEmoji',
        () => {
            var e;
            return null === (e = d.Z.getOverride('animateEmoji')) || void 0 === e ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([d.Z], () => {
                var e;
                return null === (e = d.Z.getOverride('animateEmoji')) || void 0 === e ? void 0 : e.value;
            })
    ),
    eA = (0, c.R2)(
        (0, c.KM)(
            (0, c.Zc)(
                'textAndImages',
                'animateStickers',
                (e) => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : h.yr.ALWAYS_ANIMATE;
                },
                (e) => a.yC.create({ value: e })
            ),
            'text',
            'animateStickers'
        ),
        'animateStickers',
        () => {
            var e;
            return null === (e = d.Z.getOverride('animateStickers')) || void 0 === e ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([d.Z], () => {
                var e;
                return null === (e = d.Z.getOverride('animateStickers')) || void 0 === e ? void 0 : e.value;
            })
    ),
    eN = [],
    eC = (0, c.Zc)(
        'privacy',
        'activityRestrictedGuildIds',
        (e) => (null != e ? e : eN),
        (e) => e
    ),
    eR = [],
    eO = (0, c.Zc)(
        'privacy',
        'activityJoiningRestrictedGuildIds',
        (e) => (null != e ? e : eR),
        (e) => e
    ),
    eD = (0, c.TG)({
        baseSetting: (0, c.Zc)(
            'privacy',
            'defaultGuildsActivityRestricted',
            (e) => e,
            (e) => (null != e ? e : r.E5.OFF)
        ),
        isEligible: () => (0, l.o0)('user_settings'),
        useIsEligible: () => (0, l.Yd)('user_settings'),
        ineligibleDefault: r.E5.OFF,
        eligibleDefault: () => r.E5.ON
    }),
    ex = (0, c.Zc)(
        'privacy',
        'familyCenterEnabledV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    eL = (0, c.Zc)(
        'privacy',
        'hideLegacyUsername',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    eP = (0, c.Zc)(
        'privacy',
        'allowGameFriendDmsInDiscord',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    ew = (0, c.Zc)(
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
    eM = (0, c.Zc)(
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
(0, c.Zc)(
    'appearance',
    'searchResultExactCountEnabled',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
    },
    (e) => a.D5.create({ value: e })
),
    (0, c.Zc)(
        'appearance',
        'happeningNowCardsDisabled',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    );
let ek = (0, c.Zc)(
    'appearance',
    'timestampHourCycle',
    (e) => (null != e ? e : r.hg.AUTO),
    (e) => e
);
(0, c.Zc)(
    'appearance',
    'launchPadMode',
    (e) => (null != e ? e : r.l1.LAUNCH_PAD_DISABLED),
    (e) => e
);
let eU = (0, c.Zc)(
        'userContent',
        'lastReceivedChangelogId',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    eG = (0, c.Zc)(
        'safetySettings',
        'ignoreProfileSpeedbumpDisabled',
        (e) => null != e && e,
        (e) => e
    ),
    eB = (0, c.Zc)(
        'appearance',
        'uiDensity',
        (e) => (e === r.Pi.UNSET_UI_DENSITY ? r.Pi.COMPACT : null != e ? e : r.Pi.COMPACT),
        (e) => e
    );
