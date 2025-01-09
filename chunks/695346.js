r.d(n, {
    AY: function () {
        return X;
    },
    CM: function () {
        return $;
    },
    Cr: function () {
        return eu;
    },
    DC: function () {
        return ee;
    },
    Ex: function () {
        return eD;
    },
    Fg: function () {
        return K;
    },
    G6: function () {
        return es;
    },
    H1: function () {
        return O;
    },
    I0: function () {
        return x;
    },
    L1: function () {
        return eT;
    },
    N5: function () {
        return eE;
    },
    NA: function () {
        return eh;
    },
    OW: function () {
        return er;
    },
    Ok: function () {
        return ec;
    },
    Ou: function () {
        return G;
    },
    Pe: function () {
        return U;
    },
    QK: function () {
        return eb;
    },
    QZ: function () {
        return y;
    },
    R$: function () {
        return m;
    },
    RS: function () {
        return e_;
    },
    R_: function () {
        return eL;
    },
    Rt: function () {
        return ek;
    },
    SE: function () {
        return eN;
    },
    Sb: function () {
        return eI;
    },
    Sh: function () {
        return ex;
    },
    T4: function () {
        return R;
    },
    UP: function () {
        return ei;
    },
    Wp: function () {
        return eS;
    },
    Wz: function () {
        return eO;
    },
    Xc: function () {
        return k;
    },
    Xk: function () {
        return D;
    },
    Xr: function () {
        return ea;
    },
    Yk: function () {
        return ey;
    },
    _O: function () {
        return C;
    },
    bh: function () {
        return J;
    },
    bm: function () {
        return en;
    },
    cC: function () {
        return I;
    },
    cP: function () {
        return B;
    },
    co: function () {
        return el;
    },
    d$: function () {
        return M;
    },
    d4: function () {
        return N;
    },
    dN: function () {
        return p;
    },
    eR: function () {
        return v;
    },
    eo: function () {
        return w;
    },
    ev: function () {
        return z;
    },
    fq: function () {
        return E;
    },
    fv: function () {
        return S;
    },
    fz: function () {
        return b;
    },
    gw: function () {
        return ew;
    },
    h2: function () {
        return Y;
    },
    hg: function () {
        return eP;
    },
    iG: function () {
        return H;
    },
    iH: function () {
        return eR;
    },
    jU: function () {
        return q;
    },
    kJ: function () {
        return j;
    },
    kU: function () {
        return Q;
    },
    l4: function () {
        return eM;
    },
    mX: function () {
        return V;
    },
    nc: function () {
        return ep;
    },
    qF: function () {
        return L;
    },
    rN: function () {
        return em;
    },
    tU: function () {
        return ed;
    },
    uL: function () {
        return P;
    },
    up: function () {
        return g;
    },
    vF: function () {
        return T;
    },
    x4: function () {
        return ef;
    },
    xM: function () {
        return et;
    },
    xq: function () {
        return W;
    },
    zA: function () {
        return F;
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
    _ = r(969943),
    h = r(611480);
let p = (0, u.Zc)(
        'textAndImages',
        'useLegacyChatInput',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    m = (0, u.Zc)(
        'textAndImages',
        'useRichChatInput',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    g = (0, u.Zc)(
        'textAndImages',
        'expressionSuggestionsEnabled',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    E = (0, u.Zc)(
        'textAndImages',
        'includeStickersInAutocomplete',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    v = (0, u.Zc)(
        'textAndImages',
        'includeSoundmojiInAutocomplete',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    I = (0, u.Zc)(
        'textAndImages',
        'renderSpoilers',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : f.A2N.ON_CLICK;
        },
        (e) => o.Gm.create({ value: e })
    ),
    T = (0, u.Zc)(
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
let b = (0, u.Zc)(
        'notifications',
        'reactionNotifications',
        (e) => (null != e ? e : s.Ns.NOTIFICATIONS_ENABLED),
        (e) => e
    ),
    y = (0, u.Zc)(
        'notifications',
        'quietMode',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: !!e })
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
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    D = (0, u.Zc)(
        'textAndImages',
        'showCommandSuggestions',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    L = (0, u.Zc)(
        'voiceAndVideo',
        'alwaysPreviewVideo',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    x = (0, u.Zc)(
        'voiceAndVideo',
        'disableStreamPreviews',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    w = (0, u.Zc)(
        'notifications',
        'notifyFriendsOnGoLive',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    P = '0',
    M = (0, u.Zc)(
        'notifications',
        'notificationCenterAckedBeforeId',
        (e) => (null != e ? e : P),
        (e) => e
    ),
    k = (0, u.Zc)(
        'gameLibrary',
        'installShortcutDesktop',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    U = (0, u.Zc)(
        'gameLibrary',
        'installShortcutStartMenu',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    B = (0, u.Zc)(
        'privacy',
        'allowActivityPartyPrivacyFriends',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    G = (0, u.Zc)(
        'privacy',
        'allowActivityPartyPrivacyVoiceChannel',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
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
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    j = (0, u.Zc)(
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
let H = (0, u.Zc)(
        'privacy',
        'defaultGuildsRestricted',
        (e) => null != e && e,
        (e) => e
    ),
    Y = (0, u.Zc)(
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
let W = (0, u.Zc)(
        'privacy',
        'friendSourceFlags',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : f.HGf;
        },
        (e) => o.yC.create({ value: e })
    ),
    K = (0, u.Zc)(
        'debug',
        'rtcPanelShowVoiceStates',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    z = (0, u.Zc)(
        'textAndImages',
        'convertEmoticons',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    q = (0, u.Zc)(
        'textAndImages',
        'messageDisplayCompact',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    Q = (0, u.Zc)(
        'voiceAndVideo',
        'soundboardSettings',
        (e) => e,
        (e) => e
    ),
    X = (0, u.Zc)(
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
let J = (0, u.Zc)(
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
let $ = (0, u.Zc)(
        'voiceAndVideo',
        'afkTimeout',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : 600;
        },
        (e) => o.yC.create({ value: e })
    ),
    ee = (0, u.Zc)(
        'textAndImages',
        'viewNsfwGuilds',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    et = (0, u.Zc)(
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
let en = (0, u.Zc)(
        'gameLibrary',
        'disableGamesTab',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    er = (0, u.Zc)(
        'textAndImages',
        'enableTtsCommand',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    ei = (0, u.Zc)(
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
let ea = (0, u.Zc)(
        'textAndImages',
        'dmSpamFilterV2',
        (e) => (null != e ? e : s.Xr.DEFAULT_UNSET),
        (e) => e
    ),
    es = (0, u.Zc)(
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
let eo = new Set(Object.values(f.Skl)),
    el = (0, u.Zc)(
        'status',
        'status',
        (e) => (null != e && eo.has(e.value) ? e.value : f.Skl.UNKNOWN),
        (e) => o.Gm.create({ value: e })
    ),
    eu = (0, u.Zc)(
        'status',
        'statusExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    ec = (0, u.Zc)(
        'status',
        'customStatus',
        (e) => e,
        (e) => e
    ),
    ed = (0, u.Zc)(
        'clips',
        'allowVoiceRecording',
        (e) => {
            var n;
            return null === (n = null == e ? void 0 : e.value) || void 0 === n || n;
        },
        (e) => o.D5.create({ value: e })
    ),
    ef = (0, u.KM)(
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
    e_ = (0, u.KM)(
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
    eh = (0, u.KM)(
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
    ep = (0, u.KM)(
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
    em = (0, u.Zc)(
        'localization',
        'timezoneOffset',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : null;
        },
        (e) => o.T4.create({ value: null != e ? e : 0 })
    ),
    eg = new Set([_.fx.AUTO, l.l.COZY, l.l.COMPACT]),
    eE = (0, u.Zc)(
        'appearance',
        'channelListLayout',
        (e) => (null != e && eg.has(e.value) ? e.value : l.l.COZY),
        (e) => o.Gm.create({ value: e })
    ),
    ev = new Set([l.Z.ALL, l.Z.UNREADS, l.Z.NONE]);
(0, u.Zc)(
    'appearance',
    'messagePreviews',
    (e) => (null != e && ev.has(e.value) ? e.value : l.Z.ALL),
    (e) => o.Gm.create({ value: e })
);
let eI = (0, u.KM)(
        (0, u.Zc)(
            'appearance',
            'developerMode',
            (e) => null != e && e,
            (e) => e
        ),
        'appearance',
        'developerMode'
    ),
    eT = (0, u.Zc)(
        'appearance',
        'clientThemeSettings',
        (e) => {
            var n;
            return { backgroundGradientPresetId: null == e ? void 0 : null === (n = e.backgroundGradientPresetId) || void 0 === n ? void 0 : n.value };
        },
        (e) => ({ backgroundGradientPresetId: null != e.backgroundGradientPresetId ? o.yC.create({ value: e.backgroundGradientPresetId }) : void 0 })
    ),
    eb = (0, u.R2)(
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
    ey = (0, u.R2)(
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
    eS = (0, u.R2)(
        (0, u.KM)(
            (0, u.Zc)(
                'textAndImages',
                'animateStickers',
                (e) => {
                    var n;
                    return null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : h.yr.ALWAYS_ANIMATE;
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
    eO = (0, u.Zc)(
        'privacy',
        'defaultGuildsActivityRestricted',
        (e) => e === s.E5.ON_FOR_LARGE_GUILDS,
        (e) => (!0 === e ? s.E5.ON_FOR_LARGE_GUILDS : s.E5.OFF)
    ),
    eD = (0, u.Zc)(
        'privacy',
        'familyCenterEnabledV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    eL = (0, u.Zc)(
        'privacy',
        'hideLegacyUsername',
        (e) => {
            var n;
            return null !== (n = null == e ? void 0 : e.value) && void 0 !== n && n;
        },
        (e) => o.D5.create({ value: e })
    ),
    ex = (0, u.Zc)(
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
    ew = (0, u.Zc)(
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
let eP = (0, u.Zc)(
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
let eM = (0, u.Zc)(
        'userContent',
        'lastReceivedChangelogId',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    ek = (0, u.Zc)(
        'safetySettings',
        'ignoreProfileSpeedbumpDisabled',
        (e) => null != e && e,
        (e) => e
    );
