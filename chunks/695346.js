n.d(t, {
    AY: () => $,
    CM: () => et,
    Cr: () => ed,
    DC: () => en,
    Ex: () => ew,
    Fg: () => q,
    G6: () => el,
    H1: () => P,
    I0: () => L,
    JG: () => ex,
    L1: () => eO,
    NA: () => em,
    OW: () => eo,
    Ok: () => ef,
    Ou: () => B,
    Pe: () => U,
    QK: () => eI,
    QZ: () => S,
    R$: () => g,
    RS: () => eh,
    R_: () => eD,
    Rt: () => eG,
    SE: () => eA,
    Sb: () => ev,
    Sh: () => eM,
    T4: () => R,
    UP: () => ea,
    Wp: () => eT,
    Wz: () => eP,
    Xc: () => j,
    Xk: () => w,
    Xr: () => es,
    YC: () => eB,
    Yk: () => eS,
    _O: () => C,
    _j: () => eL,
    bh: () => ee,
    bm: () => ei,
    cC: () => v,
    cP: () => G,
    co: () => eu,
    d$: () => k,
    d4: () => A,
    dN: () => m,
    eR: () => y,
    eo: () => x,
    ev: () => Q,
    fq: () => b,
    fv: () => T,
    fz: () => I,
    gR: () => Y,
    gw: () => ek,
    h2: () => K,
    hg: () => ej,
    iG: () => W,
    iH: () => eR,
    jU: () => X,
    kJ: () => H,
    kU: () => J,
    l4: () => eU,
    mX: () => Z,
    nc: () => eg,
    qF: () => D,
    rN: () => eE,
    tU: () => e_,
    uL: () => M,
    up: () => E,
    vF: () => O,
    x4: () => ep,
    xM: () => er,
    xq: () => z,
    zA: () => V
}),
    n(47120);
var r = n(442837),
    i = n(524437),
    o = n(381499),
    a = n(85746),
    s = n(291741),
    l = n(362352),
    c = n(497060),
    u = n(560997),
    d = n(263937),
    f = n(973005),
    _ = n(981631),
    p = n(969943),
    h = n(611480);
let m = (0, u.Zc)(
        'textAndImages',
        'useLegacyChatInput',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    g = (0, u.Zc)(
        'textAndImages',
        'useRichChatInput',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    E = (0, u.Zc)(
        'textAndImages',
        'expressionSuggestionsEnabled',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    b = (0, u.Zc)(
        'textAndImages',
        'includeStickersInAutocomplete',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    y = (0, u.Zc)(
        'textAndImages',
        'includeSoundmojiInAutocomplete',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    v = (0, u.Zc)(
        'textAndImages',
        'renderSpoilers',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : _.A2N.ON_CLICK;
        },
        (e) => o.Gm.create({ value: e })
    ),
    O = (0, u.Zc)(
        'textAndImages',
        'useThreadSidebar',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    );
(0, u.Zc)(
    'notifications',
    'showInAppNotifications',
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e })
);
let I = (0, u.Zc)(
        'notifications',
        'reactionNotifications',
        (e) => (null != e ? e : i.Ns.NOTIFICATIONS_ENABLED),
        (e) => e
    ),
    S = (0, u.Zc)(
        'notifications',
        'quietMode',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: !!e })
    ),
    T = (0, u.Zc)(
        'notifications',
        'focusModeExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    N = [],
    A = (0, u.Zc)(
        'textAndImages',
        'emojiPickerCollapsedSections',
        (e) => (null != e ? e : N),
        (e) => e
    ),
    C = (0, u.Zc)(
        'textAndImages',
        'stickerPickerCollapsedSections',
        (e) => (null != e ? e : N),
        (e) => e
    ),
    R = (0, u.Zc)(
        'textAndImages',
        'soundboardPickerCollapsedSections',
        (e) => (null != e ? e : N),
        (e) => e
    ),
    P = (0, u.Zc)(
        'textAndImages',
        'viewImageDescriptions',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    w = (0, u.Zc)(
        'textAndImages',
        'showCommandSuggestions',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    D = (0, u.Zc)(
        'voiceAndVideo',
        'alwaysPreviewVideo',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    L = (0, u.Zc)(
        'voiceAndVideo',
        'disableStreamPreviews',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    x = (0, u.Zc)(
        'notifications',
        'notifyFriendsOnGoLive',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    M = '0',
    k = (0, u.Zc)(
        'notifications',
        'notificationCenterAckedBeforeId',
        (e) => (null != e ? e : M),
        (e) => e
    ),
    j = (0, u.Zc)(
        'gameLibrary',
        'installShortcutDesktop',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    U = (0, u.Zc)(
        'gameLibrary',
        'installShortcutStartMenu',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    G = (0, u.Zc)(
        'privacy',
        'allowActivityPartyPrivacyFriends',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    B = (0, u.Zc)(
        'privacy',
        'allowActivityPartyPrivacyVoiceChannel',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    F = [],
    V = (0, u.Zc)(
        'privacy',
        'messageRequestRestrictedGuildIds',
        (e) => (null != e ? e : F),
        (e) => e
    ),
    Z = (0, u.Zc)(
        'privacy',
        'defaultMessageRequestRestricted',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    H = (0, u.Zc)(
        'privacy',
        'nonSpamRetrainingOptIn',
        (e) => (null == e ? void 0 : e.value),
        (e) => (null == e ? void 0 : o.D5.create({ value: e }))
    );
(0, u.Zc)(
    'privacy',
    'contactSyncEnabled',
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => o.D5.create({ value: e })
);
let W = (0, u.Zc)(
        'privacy',
        'defaultGuildsRestricted',
        (e) => null != e && e,
        (e) => e
    ),
    Y = (0, u.Zc)(
        'privacy',
        'defaultGuildsRestrictedV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    K = (0, u.Zc)(
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
        return null != (t = null == e ? void 0 : e.value) ? t : 0;
    },
    (e) => o.yC.create({ value: e })
);
let z = (0, u.TG)({
        baseSetting: (0, u.Zc)(
            'privacy',
            'friendSourceFlags',
            (e) => (null == e ? void 0 : e.value),
            (e) => o.yC.create({ value: e })
        ),
        isEligible: () => (0, c.k6)('user_settings'),
        useIsEligible: () => (0, c.kH)('user_settings'),
        ineligibleDefault: _.HGf,
        eligibleDefault: () => _.O8q
    }),
    q = (0, u.Zc)(
        'debug',
        'rtcPanelShowVoiceStates',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    Q = (0, u.Zc)(
        'textAndImages',
        'convertEmoticons',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    X = (0, u.Zc)(
        'textAndImages',
        'messageDisplayCompact',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    J = (0, u.Zc)(
        'voiceAndVideo',
        'soundboardSettings',
        (e) => e,
        (e) => e
    ),
    $ = (0, u.Zc)(
        'voiceAndVideo',
        'soundmojiVolume',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : 100;
        },
        (e) => o.A8.create({ value: e })
    );
(0, u.Zc)(
    'voiceAndVideo',
    'streamNotificationsEnabled',
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e })
);
let ee = (0, u.Zc)(
    'privacy',
    'dropsOptedOut',
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => o.D5.create({ value: e })
);
(0, u.Zc)(
    'voiceAndVideo',
    'nativePhoneIntegrationEnabled',
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e })
);
let et = (0, u.TG)({
        baseSetting: (0, u.Zc)(
            'voiceAndVideo',
            'afkTimeout',
            (e) => (null == e ? void 0 : e.value),
            (e) => o.yC.create({ value: e })
        ),
        isEligible: () => (0, s.mO)('user_settings'),
        useIsEligible: () => (0, s.Mk)('user_settings'),
        ineligibleDefault: 600,
        eligibleDefault: () => (0, s.fD)('user_settings'),
        onUseDefault: () => (0, s.Dl)('user_settings')
    }),
    en = (0, u.Zc)(
        'textAndImages',
        'viewNsfwGuilds',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    er = (0, u.Zc)(
        'textAndImages',
        'viewNsfwCommands',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    );
(0, u.Zc)(
    'privacy',
    'detectPlatformAccounts',
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e })
);
let ei = (0, u.Zc)(
        'gameLibrary',
        'disableGamesTab',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    eo = (0, u.Zc)(
        'textAndImages',
        'enableTtsCommand',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    ea = (0, u.Zc)(
        'textAndImages',
        'explicitContentFilter',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : f.TI.NON_FRIENDS;
        },
        (e) => o.yC.create({ value: e })
    );
(0, u.Zc)(
    'textAndImages',
    'dmSpamFilter',
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) ? t : f.fQ.NON_FRIENDS;
    },
    (e) => o.yC.create({ value: e })
);
let es = (0, u.Zc)(
        'textAndImages',
        'dmSpamFilterV2',
        (e) => (null != e ? e : i.Xr.DEFAULT_UNSET),
        (e) => e
    ),
    el = (0, u.Zc)(
        'status',
        'showCurrentGame',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    );
(0, u.Zc)(
    'privacy',
    'recentGamesEnabled',
    (e) => {
        var t;
        return null == (t = null == e ? void 0 : e.value) || t;
    },
    (e) => o.D5.create({ value: e })
);
let ec = new Set(Object.values(_.Skl)),
    eu = (0, u.Zc)(
        'status',
        'status',
        (e) => (null != e && ec.has(e.value) ? e.value : _.Skl.UNKNOWN),
        (e) => o.Gm.create({ value: e })
    ),
    ed = (0, u.Zc)(
        'status',
        'statusExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    ef = (0, u.Zc)(
        'status',
        'customStatus',
        (e) => e,
        (e) => e
    ),
    e_ = (0, u.Zc)(
        'clips',
        'allowVoiceRecording',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    ep = (0, u.KM)(
        (0, u.Zc)(
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
    eh = (0, u.KM)(
        (0, u.Zc)(
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
    em = (0, u.KM)(
        (0, u.Zc)(
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
    eg = (0, u.KM)(
        (0, u.Zc)(
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
    eE = (0, u.Zc)(
        'localization',
        'timezoneOffset',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) ? t : null;
        },
        (e) => o.T4.create({ value: null != e ? e : 0 })
    ),
    eb = new Set([p.fx.AUTO, a.l.COZY, a.l.COMPACT]);
(0, u.Zc)(
    'appearance',
    'channelListLayout',
    (e) => (null != e && eb.has(e.value) ? e.value : a.l.COZY),
    (e) => o.Gm.create({ value: e })
);
let ey = new Set([a.Z.ALL, a.Z.UNREADS, a.Z.NONE]);
(0, u.Zc)(
    'appearance',
    'messagePreviews',
    (e) => (null != e && ey.has(e.value) ? e.value : a.Z.ALL),
    (e) => o.Gm.create({ value: e })
);
let ev = (0, u.KM)(
        (0, u.Zc)(
            'appearance',
            'developerMode',
            (e) => null != e && e,
            (e) => e
        ),
        'appearance',
        'developerMode'
    ),
    eO = (0, u.Zc)(
        'appearance',
        'clientThemeSettings',
        (e) => {
            var t;
            return { backgroundGradientPresetId: null == e || null == (t = e.backgroundGradientPresetId) ? void 0 : t.value };
        },
        (e) => ({ backgroundGradientPresetId: null != e.backgroundGradientPresetId ? o.yC.create({ value: e.backgroundGradientPresetId }) : void 0 })
    ),
    eI = (0, u.R2)(
        (0, u.KM)(
            (0, u.Zc)(
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
            return null == (e = d.Z.getOverride('gifAutoPlay')) ? void 0 : e.value;
        },
        () =>
            (0, r.e7)([d.Z], () => {
                var e;
                return null == (e = d.Z.getOverride('gifAutoPlay')) ? void 0 : e.value;
            })
    ),
    eS = (0, u.R2)(
        (0, u.KM)(
            (0, u.Zc)(
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
            return null == (e = d.Z.getOverride('animateEmoji')) ? void 0 : e.value;
        },
        () =>
            (0, r.e7)([d.Z], () => {
                var e;
                return null == (e = d.Z.getOverride('animateEmoji')) ? void 0 : e.value;
            })
    ),
    eT = (0, u.R2)(
        (0, u.KM)(
            (0, u.Zc)(
                'textAndImages',
                'animateStickers',
                (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.value) ? t : h.yr.ALWAYS_ANIMATE;
                },
                (e) => o.yC.create({ value: e })
            ),
            'text',
            'animateStickers'
        ),
        'animateStickers',
        () => {
            var e;
            return null == (e = d.Z.getOverride('animateStickers')) ? void 0 : e.value;
        },
        () =>
            (0, r.e7)([d.Z], () => {
                var e;
                return null == (e = d.Z.getOverride('animateStickers')) ? void 0 : e.value;
            })
    ),
    eN = [],
    eA = (0, u.Zc)(
        'privacy',
        'activityRestrictedGuildIds',
        (e) => (null != e ? e : eN),
        (e) => e
    ),
    eC = [],
    eR = (0, u.Zc)(
        'privacy',
        'activityJoiningRestrictedGuildIds',
        (e) => (null != e ? e : eC),
        (e) => e
    ),
    eP = (0, u.TG)({
        baseSetting: (0, u.Zc)(
            'privacy',
            'defaultGuildsActivityRestricted',
            (e) => e,
            (e) => (null != e ? e : i.E5.OFF)
        ),
        isEligible: () => (0, l.o0)('user_settings'),
        useIsEligible: () => (0, l.Yd)('user_settings'),
        ineligibleDefault: i.E5.OFF,
        eligibleDefault: () => i.E5.ON
    }),
    ew = (0, u.Zc)(
        'privacy',
        'familyCenterEnabledV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    eD = (0, u.Zc)(
        'privacy',
        'hideLegacyUsername',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    eL = (0, u.Zc)(
        'privacy',
        'allowGameFriendDmsInDiscord',
        (e) => {
            var t;
            return null == (t = null == e ? void 0 : e.value) || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    ex = (0, u.Zc)(
        'privacy',
        'slayerSdkReceiveDmsInGame',
        (e) => (null != e ? e : i.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET),
        (e) => e
    ),
    eM = (0, u.Zc)(
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
    ek = (0, u.Zc)(
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
(0, u.Zc)(
    'appearance',
    'searchResultExactCountEnabled',
    (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.value) && t;
    },
    (e) => o.D5.create({ value: e })
),
    (0, u.Zc)(
        'appearance',
        'happeningNowCardsDisabled',
        (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.value) && t;
        },
        (e) => o.D5.create({ value: e })
    );
let ej = (0, u.Zc)(
    'appearance',
    'timestampHourCycle',
    (e) => (null != e ? e : i.hg.AUTO),
    (e) => e
);
(0, u.Zc)(
    'appearance',
    'launchPadMode',
    (e) => (null != e ? e : i.l1.LAUNCH_PAD_DISABLED),
    (e) => e
),
    (0, u.Zc)(
        'appearance',
        'swipeRightToLeftMode',
        (e) => (null != e ? e : i.n9.SWIPE_RIGHT_TO_LEFT_UNSET),
        (e) => e
    );
let eU = (0, u.Zc)(
        'userContent',
        'lastReceivedChangelogId',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    eG = (0, u.Zc)(
        'safetySettings',
        'ignoreProfileSpeedbumpDisabled',
        (e) => null != e && e,
        (e) => e
    ),
    eB = (0, u.Zc)(
        'appearance',
        'uiDensity',
        (e) => (e === i.Pi.UNSET_UI_DENSITY ? i.Pi.DEFAULT : null != e ? e : i.Pi.DEFAULT),
        (e) => e
    );
