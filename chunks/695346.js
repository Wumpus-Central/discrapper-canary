r.d(n, {
    AY: function () {
        return Q;
    },
    CM: function () {
        return J;
    },
    Cr: function () {
        return el;
    },
    DC: function () {
        return $;
    },
    Ex: function () {
        return eO;
    },
    Fg: function () {
        return W;
    },
    G6: function () {
        return ea;
    },
    H1: function () {
        return R;
    },
    I0: function () {
        return L;
    },
    L1: function () {
        return eI;
    },
    N5: function () {
        return eg;
    },
    NA: function () {
        return e_;
    },
    OW: function () {
        return en;
    },
    Ok: function () {
        return eu;
    },
    Ou: function () {
        return B;
    },
    Pe: function () {
        return k;
    },
    QK: function () {
        return eT;
    },
    QZ: function () {
        return b;
    },
    R$: function () {
        return p;
    },
    RS: function () {
        return ef;
    },
    R_: function () {
        return eD;
    },
    Rt: function () {
        return eM;
    },
    SE: function () {
        return eA;
    },
    Sb: function () {
        return ev;
    },
    Sh: function () {
        return eL;
    },
    T4: function () {
        return C;
    },
    UP: function () {
        return er;
    },
    Wp: function () {
        return ey;
    },
    Wz: function () {
        return eR;
    },
    Xc: function () {
        return M;
    },
    Xk: function () {
        return O;
    },
    Xr: function () {
        return ei;
    },
    Yk: function () {
        return eb;
    },
    _O: function () {
        return N;
    },
    bh: function () {
        return X;
    },
    bm: function () {
        return et;
    },
    cC: function () {
        return v;
    },
    cP: function () {
        return U;
    },
    co: function () {
        return eo;
    },
    d$: function () {
        return P;
    },
    d4: function () {
        return A;
    },
    dN: function () {
        return h;
    },
    eR: function () {
        return E;
    },
    eo: function () {
        return x;
    },
    ev: function () {
        return K;
    },
    fq: function () {
        return g;
    },
    fv: function () {
        return y;
    },
    fz: function () {
        return T;
    },
    gw: function () {
        return ex;
    },
    h2: function () {
        return H;
    },
    hg: function () {
        return ew;
    },
    iG: function () {
        return j;
    },
    iH: function () {
        return eC;
    },
    jU: function () {
        return z;
    },
    kJ: function () {
        return V;
    },
    kU: function () {
        return q;
    },
    l4: function () {
        return eP;
    },
    mX: function () {
        return F;
    },
    nc: function () {
        return eh;
    },
    qF: function () {
        return D;
    },
    rN: function () {
        return ep;
    },
    tU: function () {
        return ec;
    },
    uL: function () {
        return w;
    },
    up: function () {
        return m;
    },
    vF: function () {
        return I;
    },
    x4: function () {
        return ed;
    },
    xM: function () {
        return ee;
    },
    xq: function () {
        return Y;
    },
    zA: function () {
        return Z;
    }
});
var i = r(47120);
var a = r(442837),
    s = r(524437),
    o = r(381499),
    l = r(85746),
    u = r(560997),
    c = r(263937),
    d = r(973005),
    f = r(981631),
    _ = r(611480);
let h = (0, u.Zc)(
        'textAndImages',
        'useLegacyChatInput',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    p = (0, u.Zc)(
        'textAndImages',
        'useRichChatInput',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    m = (0, u.Zc)(
        'textAndImages',
        'expressionSuggestionsEnabled',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    g = (0, u.Zc)(
        'textAndImages',
        'includeStickersInAutocomplete',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    E = (0, u.Zc)(
        'textAndImages',
        'includeSoundmojiInAutocomplete',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    v = (0, u.Zc)(
        'textAndImages',
        'renderSpoilers',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : f.A2N.ON_CLICK;
        },
        (e) => o.Gm.create({ value: e })
    ),
    I = (0, u.Zc)(
        'textAndImages',
        'useThreadSidebar',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    );
(0, u.Zc)(
    'notifications',
    'showInAppNotifications',
    (e) => {
        var n;
        return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
    },
    (e) => o.D5.create({ value: e })
);
let T = (0, u.Zc)(
        'notifications',
        'reactionNotifications',
        (e) => (null != e ? e : s.Ns.NOTIFICATIONS_ENABLED),
        (e) => e
    ),
    b = (0, u.Zc)(
        'notifications',
        'quietMode',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: !!e })
    ),
    y = (0, u.Zc)(
        'notifications',
        'focusModeExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    S = [],
    A = (0, u.Zc)(
        'textAndImages',
        'emojiPickerCollapsedSections',
        (e) => (null != e ? e : S),
        (e) => e
    ),
    N = (0, u.Zc)(
        'textAndImages',
        'stickerPickerCollapsedSections',
        (e) => (null != e ? e : S),
        (e) => e
    ),
    C = (0, u.Zc)(
        'textAndImages',
        'soundboardPickerCollapsedSections',
        (e) => (null != e ? e : S),
        (e) => e
    ),
    R = (0, u.Zc)(
        'textAndImages',
        'viewImageDescriptions',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    O = (0, u.Zc)(
        'textAndImages',
        'showCommandSuggestions',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    D = (0, u.Zc)(
        'voiceAndVideo',
        'alwaysPreviewVideo',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
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
    w = '0',
    P = (0, u.Zc)(
        'notifications',
        'notificationCenterAckedBeforeId',
        (e) => (null != e ? e : w),
        (e) => e
    ),
    M = (0, u.Zc)(
        'gameLibrary',
        'installShortcutDesktop',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    k = (0, u.Zc)(
        'gameLibrary',
        'installShortcutStartMenu',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    U = (0, u.Zc)(
        'privacy',
        'allowActivityPartyPrivacyFriends',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    B = (0, u.Zc)(
        'privacy',
        'allowActivityPartyPrivacyVoiceChannel',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    G = [],
    Z = (0, u.Zc)(
        'privacy',
        'messageRequestRestrictedGuildIds',
        (e) => (null != e ? e : G),
        (e) => e
    ),
    F = (0, u.Zc)(
        'privacy',
        'defaultMessageRequestRestricted',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    V = (0, u.Zc)(
        'privacy',
        'nonSpamRetrainingOptIn',
        (e) => (null == e ? void 0 : e.value),
        (e) => (null == e ? void 0 : o.D5.create({ value: e }))
    );
(0, u.Zc)(
    'privacy',
    'contactSyncEnabled',
    (e) => {
        var n;
        return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
    },
    (e) => o.D5.create({ value: e })
);
let j = (0, u.Zc)(
        'privacy',
        'defaultGuildsRestricted',
        (e) => null != e && e,
        (e) => e
    ),
    H = (0, u.Zc)(
        'privacy',
        'restrictedGuildIds',
        (e) => (null != e ? e : []),
        (e) => e
    );
(0, u.Zc)(
    'privacy',
    'friendDiscoveryFlags',
    (e) => {
        var n;
        return null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : 0;
    },
    (e) => o.yC.create({ value: e })
);
let Y = (0, u.Zc)(
        'privacy',
        'friendSourceFlags',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : f.HGf;
        },
        (e) => o.yC.create({ value: e })
    ),
    W = (0, u.Zc)(
        'debug',
        'rtcPanelShowVoiceStates',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    K = (0, u.Zc)(
        'textAndImages',
        'convertEmoticons',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    z = (0, u.Zc)(
        'textAndImages',
        'messageDisplayCompact',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    q = (0, u.Zc)(
        'voiceAndVideo',
        'soundboardSettings',
        (e) => e,
        (e) => e
    ),
    Q = (0, u.Zc)(
        'voiceAndVideo',
        'soundmojiVolume',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : 100;
        },
        (e) => o.A8.create({ value: e })
    );
(0, u.Zc)(
    'voiceAndVideo',
    'streamNotificationsEnabled',
    (e) => {
        var n;
        return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
    },
    (e) => o.D5.create({ value: e })
);
let X = (0, u.Zc)(
    'privacy',
    'dropsOptedOut',
    (e) => {
        var n;
        return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
    },
    (e) => o.D5.create({ value: e })
);
(0, u.Zc)(
    'voiceAndVideo',
    'nativePhoneIntegrationEnabled',
    (e) => {
        var n;
        return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
    },
    (e) => o.D5.create({ value: e })
);
let J = (0, u.Zc)(
        'voiceAndVideo',
        'afkTimeout',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : 600;
        },
        (e) => o.yC.create({ value: e })
    ),
    $ = (0, u.Zc)(
        'textAndImages',
        'viewNsfwGuilds',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    ee = (0, u.Zc)(
        'textAndImages',
        'viewNsfwCommands',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    );
(0, u.Zc)(
    'privacy',
    'detectPlatformAccounts',
    (e) => {
        var n;
        return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
    },
    (e) => o.D5.create({ value: e })
);
let et = (0, u.Zc)(
        'gameLibrary',
        'disableGamesTab',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    en = (0, u.Zc)(
        'textAndImages',
        'enableTtsCommand',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    er = (0, u.Zc)(
        'textAndImages',
        'explicitContentFilter',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : d.TI.NON_FRIENDS;
        },
        (e) => o.yC.create({ value: e })
    );
(0, u.Zc)(
    'textAndImages',
    'dmSpamFilter',
    (e) => {
        var n;
        return null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : d.fQ.NON_FRIENDS;
    },
    (e) => o.yC.create({ value: e })
);
let ei = (0, u.Zc)(
        'textAndImages',
        'dmSpamFilterV2',
        (e) => (null != e ? e : s.Xr.DEFAULT_UNSET),
        (e) => e
    ),
    ea = (0, u.Zc)(
        'status',
        'showCurrentGame',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    );
(0, u.Zc)(
    'privacy',
    'recentGamesEnabled',
    (e) => {
        var n;
        return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
    },
    (e) => o.D5.create({ value: e })
);
let es = new Set(Object.values(f.Skl)),
    eo = (0, u.Zc)(
        'status',
        'status',
        (e) => (null != e && es.has(e.value) ? e.value : f.Skl.UNKNOWN),
        (e) => o.Gm.create({ value: e })
    ),
    el = (0, u.Zc)(
        'status',
        'statusExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    eu = (0, u.Zc)(
        'status',
        'customStatus',
        (e) => e,
        (e) => e
    ),
    ec = (0, u.Zc)(
        'clips',
        'allowVoiceRecording',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    ed = (0, u.KM)(
        (0, u.Zc)(
            'textAndImages',
            'inlineAttachmentMedia',
            (e) => {
                var n;
                return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
            },
            (e) => o.D5.create({ value: e })
        ),
        'text',
        'inlineAttachmentMedia'
    ),
    ef = (0, u.KM)(
        (0, u.Zc)(
            'textAndImages',
            'inlineEmbedMedia',
            (e) => {
                var n;
                return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
            },
            (e) => o.D5.create({ value: e })
        ),
        'text',
        'inlineEmbedMedia'
    ),
    e_ = (0, u.KM)(
        (0, u.Zc)(
            'textAndImages',
            'renderEmbeds',
            (e) => {
                var n;
                return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
            },
            (e) => o.D5.create({ value: e })
        ),
        'text',
        'renderEmbeds'
    ),
    eh = (0, u.KM)(
        (0, u.Zc)(
            'textAndImages',
            'renderReactions',
            (e) => {
                var n;
                return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
            },
            (e) => o.D5.create({ value: e })
        ),
        'text',
        'renderReactions'
    ),
    ep = (0, u.Zc)(
        'localization',
        'timezoneOffset',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : null;
        },
        (e) => o.T4.create({ value: null != e ? e : 0 })
    ),
    em = new Set([l.l.COZY, l.l.COMPACT]),
    eg = (0, u.Zc)(
        'appearance',
        'channelListLayout',
        (e) => (null != e && em.has(e.value) ? e.value : l.l.COZY),
        (e) => o.Gm.create({ value: e })
    ),
    eE = new Set([l.Z.ALL, l.Z.UNREADS, l.Z.NONE]);
(0, u.Zc)(
    'appearance',
    'messagePreviews',
    (e) => (null != e && eE.has(e.value) ? e.value : l.Z.ALL),
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
    eI = (0, u.Zc)(
        'appearance',
        'clientThemeSettings',
        (e) => {
            var n;
            return { backgroundGradientPresetId: null == e ? void 0 : null === (n = e.backgroundGradientPresetId) || void 0 === n ? void 0 : n.value };
        },
        (e) => ({ backgroundGradientPresetId: null != e.backgroundGradientPresetId ? o.yC.create({ value: e.backgroundGradientPresetId }) : void 0 })
    ),
    eT = (0, u.R2)(
        (0, u.KM)(
            (0, u.Zc)(
                'textAndImages',
                'gifAutoPlay',
                (e) => {
                    var n;
                    return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
                },
                (e) => o.D5.create({ value: e })
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
            (0, a.e7)([c.Z], () => {
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
                    var n;
                    return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
                },
                (e) => o.D5.create({ value: e })
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
            (0, a.e7)([c.Z], () => {
                var e;
                return null === (e = c.Z.getOverride('animateEmoji')) || void 0 === e ? void 0 : e.value;
            })
    ),
    ey = (0, u.R2)(
        (0, u.KM)(
            (0, u.Zc)(
                'textAndImages',
                'animateStickers',
                (e) => {
                    var n;
                    return null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : _.yr.ALWAYS_ANIMATE;
                },
                (e) => o.yC.create({ value: e })
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
            (0, a.e7)([c.Z], () => {
                var e;
                return null === (e = c.Z.getOverride('animateStickers')) || void 0 === e ? void 0 : e.value;
            })
    ),
    eS = [],
    eA = (0, u.Zc)(
        'privacy',
        'activityRestrictedGuildIds',
        (e) => (null != e ? e : eS),
        (e) => e
    ),
    eN = [],
    eC = (0, u.Zc)(
        'privacy',
        'activityJoiningRestrictedGuildIds',
        (e) => (null != e ? e : eN),
        (e) => e
    ),
    eR = (0, u.Zc)(
        'privacy',
        'defaultGuildsActivityRestricted',
        (e) => e === s.E5.ON_FOR_LARGE_GUILDS,
        (e) => (!0 === e ? s.E5.ON_FOR_LARGE_GUILDS : s.E5.OFF)
    ),
    eO = (0, u.Zc)(
        'privacy',
        'familyCenterEnabledV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    eD = (0, u.Zc)(
        'privacy',
        'hideLegacyUsername',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    eL = (0, u.Zc)(
        'textAndImages',
        'explicitContentSettings',
        (e) => {
            let { explicitContentGuilds: n, explicitContentFriendDm: r, explicitContentNonFriendDm: i } = null != e ? e : {};
            return {
                explicitContentGuilds: null != n ? n : s.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentFriendDm: null != r ? r : s.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentNonFriendDm: null != i ? i : s.Q4.UNSET_EXPLICIT_CONTENT_REDACTION
            };
        },
        (e) => {
            let { explicitContentGuilds: n, explicitContentFriendDm: r, explicitContentNonFriendDm: i } = e;
            return {
                explicitContentGuilds: null != n ? n : void 0,
                explicitContentFriendDm: null != r ? r : void 0,
                explicitContentNonFriendDm: null != i ? i : void 0
            };
        }
    ),
    ex = (0, u.Zc)(
        'textAndImages',
        'keywordFilterSettings',
        (e) => {
            let { profanity: n, sexualContent: r, slurs: i } = null != e ? e : {};
            return {
                profanity: null == n ? void 0 : n.value,
                sexualContent: null == r ? void 0 : r.value,
                slurs: null == i ? void 0 : i.value
            };
        },
        (e) => {
            let { profanity: n, sexualContent: r, slurs: i } = e;
            return {
                profanity: o.D5.create({ value: n }),
                sexualContent: o.D5.create({ value: r }),
                slurs: o.D5.create({ value: i })
            };
        }
    );
(0, u.Zc)(
    'appearance',
    'searchResultExactCountEnabled',
    (e) => {
        var n;
        return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
    },
    (e) => o.D5.create({ value: e })
),
    (0, u.Zc)(
        'appearance',
        'happeningNowCardsDisabled',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    );
let ew = (0, u.Zc)(
    'appearance',
    'timestampHourCycle',
    (e) => (null != e ? e : s.hg.AUTO),
    (e) => e
);
(0, u.Zc)(
    'appearance',
    'launchPadMode',
    (e) => (null != e ? e : s.l1.LAUNCH_PAD_DISABLED),
    (e) => e
);
let eP = (0, u.Zc)(
        'userContent',
        'lastReceivedChangelogId',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    eM = (0, u.Zc)(
        'safetySettings',
        'ignoreProfileSpeedbumpDisabled',
        (e) => null != e && e,
        (e) => e
    );
