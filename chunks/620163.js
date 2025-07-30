(n.d(t, { i: () => e8 }), n(539854), n(388685));
var i = n(255367);
n(73800);
var r = n(990547),
    s = n(704215),
    a = n(692547),
    l = n(481060),
    o = n(570140),
    c = n(893776),
    d = n(37234),
    u = n(809206),
    m = n(230711),
    p = n(493544),
    g = n(579806),
    h = n(782568),
    f = n(758182),
    b = n(49226),
    x = n(163379),
    _ = n(498646),
    j = n(489968),
    E = n(803038),
    O = n(703288),
    C = n(574755),
    v = n(994714),
    S = n(377171),
    T = n(621628),
    N = n(243778),
    I = n(890022),
    y = n(18438),
    A = n(778825),
    P = n(665166),
    R = n(158947),
    D = n(351780),
    Z = n(231765),
    w = n(813732),
    k = n(398140),
    L = n(564344),
    B = n(977156),
    M = n(14676),
    U = n(652380),
    V = n(373230),
    G = n(145158),
    F = n(462354),
    H = n(906467),
    W = n(857192),
    z = n(131951),
    Y = n(25990),
    K = n(626135),
    q = n(572004),
    X = n(49012),
    J = n(358085),
    Q = n(998502),
    $ = n(695346),
    ee = n(604227),
    et = n(38915),
    en = n(321614),
    ei = n(498639),
    er = n(748717),
    es = n(419636),
    ea = n(799071),
    el = n(154022),
    eo = n(393681),
    ec = n(309739),
    ed = n(64914),
    eu = n(501348),
    em = n(795594),
    ep = n(443702),
    eg = n(327192),
    eh = n(949493),
    ef = n(675047),
    eb = n(177508),
    ex = n(956699),
    e_ = n(54942),
    ej = n(293389),
    eE = n(88624),
    eO = n(387747),
    eC = n(389650),
    ev = n(649157),
    eS = n(593648),
    eT = n(327885),
    eN = n(595242),
    eI = n(463153),
    ey = n(36192),
    eA = n(889029),
    eP = n(400287),
    eR = n(554042),
    eD = n(936982),
    eZ = n(200645),
    ew = n(287490),
    ek = n(706060),
    eL = n(168308),
    eB = n(277329),
    eM = n(273927),
    eU = n(604224),
    eV = n(43434),
    eG = n(333576),
    eF = n(345655),
    eH = n(726985),
    eW = n(583139),
    ez = n(981631),
    eY = n(46140),
    eK = n(65154),
    eq = n(388032),
    eX = n(603571),
    eJ = n(916723),
    eQ = n(539452);
let e$ = () => {
        let e = [s.z.CLIENT_THEMES_SETTINGS_BADGE, s.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
        return (E.M.getCurrentConfig({ location: 'getAppearanceDCs' }).enabled && e.push(s.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE), e);
    },
    e0 = () => {
        let e = e$(),
            [t] = (0, N.US)(e);
        return t === s.z.CLIENT_THEMES_SETTINGS_BADGE || t === s.z.DEKSTOP_CUSTOM_APP_ICON_BADGE ? (0, i.jsx)(l.lBU, { text: eq.intl.string(eq.t.y2b7CA) }) : t === s.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ? (0, i.jsx)(l.IGR, { text: eq.intl.string(eq.t.y2b7CA) }) : null;
    },
    e1 = () => {
        let e = [];
        return (V.c.getCurrentConfig({ location: 'SettingsRendererConfig' }).enabled && e.push(s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE), e.push(s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE), e);
    },
    e3 = () => {
        let e = e1(),
            [t] = (0, N.US)(e);
        return t === s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE ? (0, i.jsx)(R.Z, {}) : t === s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE ? (0, i.jsx)(l.IGR, { text: eq.intl.string(eq.t.y2b7CA) }) : null;
    },
    e6 = eZ.Z,
    e8 = (e) => {
        let { unseenGiftCount: t, showPrepaidPaymentPastDueWarning: E, impressionSource: N, numOfPendingFamilyRequests: R, isOverlaySupported: V, isClipsBetaTagShowing: e8 = !1, shouldMergeGameSettings: e2, isKeywordFilteringEnabled: e5, isStaff: e7, isInappropriateConversationWarningEnabled: e4, isInapproprateConversationsDefaultOn: e9, paymentsBlocked: te, isEligibleForQuests: tt, isStricterMessageRequestsEnabled: tn, hasLibraryApplication: ti, hasTOTPEnabled: tr, developerMode: ts, isAdultUser: ta, hasSecureFramesVerifiedUserIds: tl, hypeSquadRemoved: to, hasIgnoredUsers: tc, hasBlockedUsers: td, useRefreshedVoiceAndVideo: tu, isEligibleForSensitiveContentDefaults: tm, inputMode: tp, activeInputProfile: tg, isInputProfileCustom: th, isGoreContentFilteringEnabled: tf } = e;
        return Object.freeze({
            [eH.s6.SEARCH_NO_RESULTS]: {
                section: p.ID.CUSTOM,
                element: eI.Z
            },
            [eH.s6.ACCOUNT_SECURITY_TAB]: {
                section: ez.oAB.ACCOUNT,
                searchableTitles: [eq.intl.string(eq.t.Am9YHh)],
                label: eq.intl.string(eq.t.Am9YHh)
            },
            [eH.s6.ACCOUNT]: {
                section: ez.oAB.ACCOUNT,
                searchableTitles: [eq.intl.string(eq.t['JAIM/v'])],
                label: eq.intl.string(eq.t['JAIM/v']),
                ariaLabel: eq.intl.string(eq.t['JAIM/v']),
                element: eo.Z,
                url: ez.Z5c.SETTINGS('account')
            },
            [eH.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eq.intl.string(eq.t.LYju5O)],
                parent: eH.s6.ACCOUNT,
                section: ez.oAB.ACCOUNT
            },
            [eH.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eq.intl.string(eq.t['9AjdkJ'])],
                section: ez.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_PROFILE
            },
            [eH.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eq.intl.string(eq.t.Ulqq6O)],
                section: ez.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_PROFILE
            },
            [eH.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [eq.intl.string(eq.t['/52UY2']), eq.intl.string(eq.t.sK0dmJ), eq.intl.string(eq.t.XxRj7e), eq.intl.string(eq.t.yNGjyM), eq.intl.string(eq.t.KPGVWl)],
                section: ez.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_PROFILE,
                predicate: () => tm
            },
            [eH.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eq.intl.string(eq.t['+JkHPz'])],
                section: ez.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_PROFILE
            },
            [eH.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eq.intl.string(eq.t.oP5zGB)],
                section: ez.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_PROFILE
            },
            [eH.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eq.intl.string(eq.t.pKSjEh)],
                section: ez.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT
            },
            [eH.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eq.intl.string(eq.t['FRep5+'])],
                section: ez.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eH.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eq.intl.string(eq.t['7qKDrK'])],
                section: ez.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eH.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eq.intl.string(eq.t.m0FidH)],
                section: ez.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eH.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eq.intl.string(eq.t.cDgKtb)],
                section: ez.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !tr
            },
            [eH.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eq.intl.string(eq.t['D+aE7u'])],
                section: ez.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => tr
            },
            [eH.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eq.intl.string(eq.t.fZSi1N)],
                section: ez.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eH.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eq.intl.string(eq.t.uHAJ5u)],
                section: ez.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eH.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eq.intl.string(eq.t.vrOCCg)],
                section: ez.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eH.s6.ACCOUNT_REMOVAL]: {
                section: ez.oAB.ACCOUNT,
                searchableTitles: [eq.intl.string(eq.t.ZKsIkp)],
                parent: eH.s6.ACCOUNT
            },
            [eH.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: ez.oAB.ACCOUNT,
                searchableTitles: [eq.intl.string(eq.t.jf5GGR)],
                parent: eH.s6.ACCOUNT_REMOVAL
            },
            [eH.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: ez.oAB.ACCOUNT,
                searchableTitles: [eq.intl.string(eq.t['8lQ2ra'])],
                parent: eH.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [eH.s6.GAMES]: {
                section: ez.oAB.GAMES,
                searchableTitles: [eq.intl.string(eq.t.URyqtL)],
                label: eq.intl.string(eq.t.URyqtL),
                ariaLabel: eq.intl.string(eq.t.URyqtL),
                element: eB.Z,
                predicate: () => e2
            },
            [eH.s6.GAMES_MY_GAMES]: {
                section: ez.oAB.GAMES,
                searchableTitles: [eq.intl.string(eq.t['5DMgp6'])],
                parent: eH.s6.GAMES
            },
            [eH.s6.GAMES_CLIPS]: {
                section: ez.oAB.GAMES,
                searchableTitles: [eq.intl.string(eq.t.z2jK6e)],
                parent: eH.s6.GAMES
            },
            [eH.s6.GAMES_OVERLAY]: {
                section: ez.oAB.GAMES,
                searchableTitles: [eq.intl.string(eq.t['9cb1U1'])],
                parent: eH.s6.GAMES
            },
            [eH.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: ez.oAB.GAMES,
                searchableTitles: [eq.intl.string(eq.t.Cq98yM)],
                parent: eH.s6.GAMES
            },
            [eH.s6.PROFILE_CUSTOMIZATION]: {
                section: ez.oAB.PROFILE_CUSTOMIZATION,
                type: p.bT.WIDE,
                searchableTitles: [eq.intl.string(eq.t['vi7f+v'])],
                label: eq.intl.string(eq.t['vi7f+v']),
                ariaLabel: eq.intl.string(eq.t['vi7f+v']),
                element: L.Z,
                newIndicator: (0, i.jsx)(e3, {}),
                newIndicatorDismissibleContentTypes: [...e1()],
                notice: {
                    stores: [Y.Z, A.Z],
                    element: k.Z
                },
                onSettingsClose: () => {
                    o.Z.wait(() => {
                        ((0, y.It)(), (0, u.P6)(), m.Z.clearSubsection(ez.oAB.PROFILE_CUSTOMIZATION));
                    });
                },
                url: ez.Z5c.SETTINGS('profile-customization')
            },
            [eH.s6.PROFILE_DISPLAY_NAME]: {
                section: ez.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eq.intl.string(eq.t['9AjdkJ'])],
                parent: eH.s6.PROFILE_CUSTOMIZATION
            },
            [eH.s6.PROFILE_USER_PROFILE]: {
                section: ez.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eq.intl.string(eq.t['2p07FR']), eq.intl.string(eq.t['7vhiqq'])],
                parent: eH.s6.PROFILE_CUSTOMIZATION
            },
            [eH.s6.PROFILE_SERVER_PROFILES]: {
                section: ez.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eq.intl.string(eq.t.kPHroa)],
                parent: eH.s6.PROFILE_CUSTOMIZATION
            },
            [eH.s6.CONTENT_SOCIAL]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                label: eq.intl.string(eq.t['+o1pDQ']),
                searchableTitles: [eq.intl.string(eq.t['+o1pDQ'])],
                ariaLabel: eq.intl.string(eq.t['+o1pDQ']),
                element: eh.Z,
                url: ez.Z5c.SETTINGS('content-and-social')
            },
            [eH.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t['+o1pDQ']), eq.intl.string(eq.t['/7xJCA'])],
                parent: eH.s6.CONTENT_SOCIAL
            },
            [eH.s6.CONTENT_SOCIAL_DISCORD]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t['+o1pDQ']), eq.intl.string(eq.t['/7xJCA'])],
                parent: eH.s6.CONTENT_SOCIAL_DISCORD_TAB
            },
            [eH.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.h1hqj4)],
                parent: eH.s6.CONTENT_SOCIAL
            },
            [eH.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                label: eq.intl.string(eq.t.h1hqj4),
                searchableTitles: [eq.intl.string(eq.t.h1hqj4)],
                ariaLabel: eq.intl.string(eq.t.h1hqj4),
                parent: eH.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: ez.Z5c.SETTINGS(ez.oAB.CONTENT_AND_SOCIAL, eW.C)
            },
            [eH.s6.DATA_PRIVACY]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                label: eq.intl.string(eq.t.OAuOHB),
                searchableTitles: [eq.intl.string(eq.t.OAuOHB)],
                ariaLabel: eq.intl.string(eq.t.OAuOHB),
                element: ef.Z,
                url: ez.Z5c.SETTINGS('data-and-privacy')
            },
            [eH.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: ez.oAB.ACCOUNT,
                searchableTitles: [eq.intl.string(eq.t['Vov/9v'])],
                parent: eH.s6.ACCOUNT
            },
            [eH.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.WWaFn5)],
                parent: eH.s6.DATA_PRIVACY,
                predicate: () => (0, J.isDesktop)()
            },
            [eH.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t['opi/XF'])],
                parent: eH.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY
            },
            [eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.xVRG4O)],
                parent: eH.s6.CONTENT_SOCIAL_DISCORD
            },
            [eH.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.fyA119)],
                parent: eH.s6.CONTENT_SOCIAL_DISCORD
            },
            [eH.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.fyA119)],
                parent: eH.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY
            },
            [eH.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t['/U8Iwc'])],
                parent: eH.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            },
            [eH.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t['ms+TmZ'])],
                parent: eH.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            },
            [eH.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t['y62Z/f'])],
                parent: eH.s6.CONTENT_SOCIAL
            },
            [eH.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.SRZyHh)],
                parent: eH.s6.DATA_PRIVACY
            },
            [eH.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.uEz8JC), eq.intl.string(eq.t['N/oRIy']), eq.intl.string(eq.t.QVdYsL), eq.intl.string(eq.t['aWD+tr']), eq.intl.string(eq.t['5mnTa2'])],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eH.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t['Hj/Bur']), eq.intl.string(eq.t['N/oRIy']), eq.intl.string(eq.t.QVdYsL), eq.intl.string(eq.t['aWD+tr']), eq.intl.string(eq.t['5mnTa2']), eq.intl.string(eq.t.K0OWPz)],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => tf
            },
            [eH.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t['Hj/Bur']), eq.intl.string(eq.t['N/oRIy']), eq.intl.string(eq.t.QVdYsL), eq.intl.string(eq.t['aWD+tr']), eq.intl.string(eq.t['5mnTa2'])],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => tf
            },
            [eH.s6.GORE_MEDIA_REDACTION]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t['Hj/Bur']), eq.intl.string(eq.t['N/oRIy']), eq.intl.string(eq.t.QVdYsL), eq.intl.string(eq.t['aWD+tr']), eq.intl.string(eq.t.K0OWPz)],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => tf
            },
            [eH.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.JzaP4u), eq.intl.string(eq.t.H9XOl5), eq.intl.string(eq.t.k4W40N)],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eH.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t['L+yTsb'])],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eH.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.XahVjo)],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eH.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                parent: eH.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY
            },
            [eH.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.RAQUSE), eq.intl.string(eq.t.wbYDfX)],
                parent: eH.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eH.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t['3o2ojo'])],
                parent: eH.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !tn
            },
            [eH.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.OLwZDQ)],
                parent: eH.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eH.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.wBkwu7)],
                parent: eH.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eH.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.XuADY2)],
                parent: eH.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eH.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.MNKzys)],
                parent: eH.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eH.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.VkS7YW)],
                parent: eH.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eH.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eH.CF],
                parent: eH.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eH.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.dmBSKi)],
                parent: eH.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY
            },
            [eH.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t['1UaUy8']), eq.intl.string(eq.t['xIk/iI'])],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e5
            },
            [eH.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.qFsx5u)],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e4 && !ta && !e9
            },
            [eH.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t['5b3FND'])],
                parent: eH.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => tl
            },
            [eH.s6.PRIVACY_FAMILY_CENTER]: {
                section: ez.oAB.FAMILY_CENTER,
                searchableTitles: [eq.intl.string(eJ.default.gntCQU)],
                label: eq.intl.string(eJ.default.gntCQU),
                ariaLabel: eq.intl.string(eJ.default.gntCQU),
                element: e_.Z,
                badgeCount: R,
                newIndicator: (0, i.jsx)(l.IGR, {
                    text: eq.intl.string(eq.t.y2b7CA),
                    color: S.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [s.z.FAMILY_CENTER_NEW_BADGE],
                url: ez.Z5c.SETTINGS('family-center')
            },
            [eH.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.BG7Qsb)],
                parent: eH.s6.DATA_PRIVACY
            },
            [eH.s6.AUTHORIZED_APPS]: {
                section: ez.oAB.AUTHORIZED_APPS,
                searchableTitles: [eq.intl.string(eq.t['f6kk+v'])],
                label: eq.intl.string(eq.t['f6kk+v']),
                element: em.Z,
                url: ez.Z5c.SETTINGS('authorized-apps')
            },
            [eH.s6.SESSIONS]: {
                section: ez.oAB.SESSIONS,
                searchableTitles: [eq.intl.string(eq.t['+1h0k5'])],
                label: eq.intl.string(eq.t['+1h0k5']),
                ariaLabel: eq.intl.string(eq.t['+1h0k5']),
                element: ey.Z,
                newIndicatorDismissibleContentTypes: [s.z.AUTH_SESSIONS_NEW],
                impressionName: r.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: N }
            },
            [eH.s6.CONNECTIONS]: {
                section: ez.oAB.CONNECTIONS,
                searchableTitles: [eq.intl.string(eq.t['3fe7U1'])],
                label: eq.intl.string(eq.t['3fe7U1']),
                ariaLabel: eq.intl.string(eq.t['3fe7U1']),
                element: eg.Z,
                impressionName: r.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: N },
                newIndicatorDismissibleContentTypes: [s.z.NEW_CRUNCHYROLL_CONNECTION],
                url: ez.Z5c.SETTINGS('connections')
            },
            [eH.s6.THIRD_PARTY_ACCESS]: {
                section: ez.oAB.CONNECTIONS,
                searchableTitles: [eq.intl.string(eq.t['Ig/XFR']), eq.intl.string(eq.t['3fe7U1']), eq.intl.string(eq.t['f6kk+v'])],
                label: eq.intl.string(eq.t['Ig/XFR']),
                parent: eH.s6.CONNECTIONS,
                element: eD.Z
            },
            [eH.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: ez.oAB.CONNECTIONS,
                searchableTitles: [eq.intl.string(eq.t['+/hZMz'])],
                parent: eH.s6.CONNECTIONS,
                element: eg.Z
            },
            [eH.s6.CLIPS]: {
                section: ez.oAB.CLIPS,
                searchableTitles: [eq.intl.string(eq.t.z2jK6e)],
                label: eq.intl.string(eq.t.z2jK6e),
                ariaLabel: eq.intl.string(eq.t.z2jK6e),
                icon: e8 ? (0, i.jsx)(O.Z, {}) : void 0,
                element: C.Z,
                predicate: () => !e2,
                url: ez.Z5c.SETTINGS('clips')
            },
            [eH.s6.RESTRICTED_USERS]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                parent: eH.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eq.intl.string(eq.t['3wRorq']),
                element: eM.ZP,
                predicate: () => tc || td
            },
            [eH.s6.BLOCKED_USERS]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                parent: eH.s6.RESTRICTED_USERS,
                label: eq.intl.string(eq.t.PFOUKS),
                searchableTitles: [eq.intl.string(eq.t.PFOUKS)],
                element: eM.GF,
                predicate: () => td
            },
            [eH.s6.IGNORED_USERS]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                parent: eH.s6.RESTRICTED_USERS,
                searchableTitles: [eq.intl.string(eq.t['93ZDWF'])],
                label: eq.intl.string(eq.t['93ZDWF']),
                element: eM.yo,
                predicate: () => tc
            },
            [eH.s6.PREMIUM]: {
                section: ez.oAB.PREMIUM,
                ariaLabel: eq.intl.string(eq.t.Ipxkoq),
                searchableTitles: [eq.intl.string(eq.t.Ipxkoq)],
                label: eq.intl.string(eq.t.Ipxkoq),
                element: er.Z,
                className: eQ.premiumTab
            },
            [eH.s6.GUILD_BOOSTING]: {
                section: ez.oAB.GUILD_BOOSTING,
                searchableTitles: [eq.intl.string(eq.t['+CbP2t'])],
                label: eq.intl.string(eq.t['+CbP2t']),
                element: eN.Z
            },
            [eH.s6.SUBSCRIPTIONS]: {
                section: ez.oAB.SUBSCRIPTIONS,
                ariaLabel: eq.intl.string(eq.t.trSpHR),
                searchableTitles: [eq.intl.string(eq.t.trSpHR)],
                label: eq.intl.string(eq.t.trSpHR),
                element: w.Z,
                icon: E
                    ? (0, i.jsx)(l.Mgn, {
                          size: 'xs',
                          color: a.Z.unsafe_rawColors.YELLOW_300.css
                      })
                    : null
            },
            [eH.s6.SUBSCRIPTIONS_CREDITS]: {
                section: ez.oAB.SUBSCRIPTIONS,
                searchableTitles: [eq.intl.string(eq.t['2GKrvr'])],
                parent: eH.s6.SUBSCRIPTIONS
            },
            [eH.s6.GIFT_INVENTORY]: {
                section: ez.oAB.INVENTORY,
                searchableTitles: [eq.intl.string(eq.t['jcSP+v'])],
                label: eq.intl.string(eq.t['jcSP+v']),
                element: eO.Z,
                ariaLabel: eq.intl.string(eq.t['jcSP+v']),
                badgeCount: t
            },
            [eH.s6.GIFT_CODE_REDEMPTION]: {
                section: ez.oAB.INVENTORY,
                searchableTitles: [eq.intl.string(eq.t['il+VCg'])],
                parent: eH.s6.GIFT_INVENTORY,
                predicate: () => !te
            },
            [eH.s6.GIFT_INVENTORY_QUESTS]: {
                section: ez.oAB.INVENTORY,
                searchableTitles: [eq.intl.string(eq.t.JALI2N)],
                parent: eH.s6.GIFT_INVENTORY,
                predicate: () => tt
            },
            [eH.s6.GIFT_INVENTORY_LIST]: {
                section: ez.oAB.INVENTORY,
                searchableTitles: [eq.intl.string(eq.t['9KeUbW'])],
                parent: eH.s6.GIFT_INVENTORY,
                predicate: () => !te
            },
            [eH.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: ez.oAB.INVENTORY,
                searchableTitles: [eq.intl.string(eq.t.vwMEHR)],
                parent: eH.s6.GIFT_INVENTORY,
                predicate: () => te
            },
            [eH.s6.BILLING]: {
                section: ez.oAB.BILLING,
                searchableTitles: [eq.intl.string(eq.t.oeUm2t)],
                label: eq.intl.string(eq.t.oeUm2t),
                ariaLabel: eq.intl.string(eq.t.oeUm2t),
                element: ep.Z
            },
            [eH.s6.BILLING_PAYMENT_METHODS]: {
                section: ez.oAB.BILLING,
                searchableTitles: [eq.intl.string(eq.t.W26xGR)],
                parent: eH.s6.BILLING
            },
            [eH.s6.BILLING_TRANSACTION_HISTORY]: {
                section: ez.oAB.BILLING,
                searchableTitles: [eq.intl.string(eq.t.obLrcH)],
                parent: eH.s6.BILLING
            },
            [eH.s6.APPEARANCE]: {
                section: ez.oAB.APPEARANCE,
                searchableTitles: [eq.intl.string(eq.t['iHH+k5'])],
                label: eq.intl.string(eq.t['iHH+k5']),
                ariaLabel: eq.intl.string(eq.t['iHH+k5']),
                element: eu.Z,
                newIndicator: (0, i.jsx)(e0, {}),
                newIndicatorDismissibleContentTypes: e$(),
                url: ez.Z5c.SETTINGS('appearance')
            },
            [eH.s6.APPEARANCE_THEME]: {
                section: ez.oAB.APPEARANCE,
                searchableTitles: [eq.intl.string(eq.t.Ksh3io)],
                parent: eH.s6.APPEARANCE
            },
            [eH.s6.APPEARANCE_COLOR]: {
                section: ez.oAB.APPEARANCE,
                searchableTitles: [eq.intl.string(eq.t.OCOOiI)],
                parent: eH.s6.APPEARANCE_THEME
            },
            [eH.s6.APPEARANCE_ICON]: {
                section: ez.oAB.APPEARANCE,
                searchableTitles: [eq.intl.string(eq.t.RPh2oq)],
                parent: eH.s6.APPEARANCE_THEME
            },
            [eH.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: ez.oAB.APPEARANCE,
                searchableTitles: [eq.intl.string(eq.t.ZEoGMT)],
                parent: eH.s6.APPEARANCE
            },
            [eH.s6.APPEARANCE_LIST_SPACING]: {
                section: ez.oAB.APPEARANCE,
                searchableTitles: ['List Spacing'],
                parent: eH.s6.APPEARANCE,
                newIndicator: (0, i.jsx)(l.IGR, {
                    text: eq.intl.string(eq.t.y2b7CA),
                    color: S.Z.BG_BRAND
                })
            },
            [eH.s6.APPEARANCE_SCALING_SPACING]: {
                section: ez.oAB.APPEARANCE,
                searchableTitles: [eq.intl.string(eq.t.qPOqoK)],
                parent: eH.s6.APPEARANCE
            },
            [eH.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: ez.oAB.APPEARANCE,
                searchableTitles: [eq.intl.string(eq.t.dyamEB), eq.intl.string(eq.t.p8NOws), eq.intl.string(eq.t['+o/sOj'])],
                parent: eH.s6.APPEARANCE,
                predicate: () => G.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable24HourPref
            },
            [eH.s6.ACCESSIBILITY]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.G0neg4)],
                label: eq.intl.string(eq.t.G0neg4),
                ariaLabel: eq.intl.string(eq.t.G0neg4),
                element: el.Z,
                url: ez.Z5c.SETTINGS('accessibility')
            },
            [eH.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: ['High Contrast Mode'],
                parent: eH.s6.ACCESSIBILITY
            },
            [eH.s6.ACCESSIBILITY_SATURATION]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t['5PWWCQ'])],
                parent: eH.s6.ACCESSIBILITY
            },
            [eH.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.bQCodH)],
                parent: eH.s6.ACCESSIBILITY_SATURATION
            },
            [eH.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.OLZFBw)],
                parent: eH.s6.ACCESSIBILITY
            },
            [eH.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.uSOPWl)],
                parent: eH.s6.ACCESSIBILITY
            },
            [eH.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.BT8Bmp)],
                parent: eH.s6.ACCESSIBILITY
            },
            [eH.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t['sSY+mJ'])],
                parent: eH.s6.ACCESSIBILITY_PROFILE_COLORS
            },
            [eH.s6.ACCESSIBILITY_CONTRAST]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.TYyfOz)],
                parent: eH.s6.ACCESSIBILITY
            },
            [eH.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.cguieX)],
                parent: eH.s6.ACCESSIBILITY_CONTRAST
            },
            [eH.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.e3TR1d)],
                parent: eH.s6.ACCESSIBILITY
            },
            [eH.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.b3XBzs)],
                parent: eH.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eH.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.Iayoh4)],
                parent: eH.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eH.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.iIaOlZ)],
                parent: eH.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eH.s6.ACCESSIBILITY_STICKERS]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t['6NtAuL'])],
                parent: eH.s6.ACCESSIBILITY
            },
            [eH.s6.ACCESSIBILITY_MESSAGES]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.onqU6u)],
                parent: eH.s6.ACCESSIBILITY
            },
            [eH.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t['3Fztn5'])],
                parent: eH.s6.ACCESSIBILITY_MESSAGES
            },
            [eH.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.TZ2hZG)],
                parent: eH.s6.ACCESSIBILITY_MESSAGES
            },
            [eH.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.VpSKeH)],
                parent: eH.s6.ACCESSIBILITY
            },
            [eH.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.qvTIwc)],
                parent: eH.s6.ACCESSIBILITY_TEXT_TO_SPEECH
            },
            [eH.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.lsW5Eh)],
                parent: eH.s6.ACCESSIBILITY
            },
            [eH.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eH.CF],
                parent: eH.s6.ACCESSIBILITY
            },
            [eH.s6.VOICE_AND_VIDEO]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.B1fFpa)],
                label: eq.intl.string(eq.t.B1fFpa),
                ariaLabel: eq.intl.string(eq.t.B1fFpa),
                element: eU.Z,
                predicate: () => z.Z.isSupported(),
                url: ez.Z5c.SETTINGS('voice')
            },
            [eH.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.K3lovL), eq.intl.string(eq.t.NiTd0d)],
                parent: eH.s6.VOICE_AND_VIDEO,
                predicate: () => tu
            },
            [eH.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.FlNoSU)],
                parent: eH.s6.VOICE_AND_VIDEO,
                predicate: () => tu
            },
            [eH.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.ABjMWF)],
                parent: eH.s6.VOICE_AND_VIDEO,
                predicate: () => tu
            },
            [eH.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.OFpL3d)],
                parent: eH.s6.VOICE_AND_VIDEO,
                predicate: () => tu
            },
            [eH.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.KDdjoq), eq.intl.string(eq.t.FeUKeH)],
                parent: eH.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tu
            },
            [eH.s6.VOICE_AND_VIDEO_VOICE]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.K3lovL), eq.intl.string(eq.t.NiTd0d)],
                parent: tu ? eH.s6.VOICE_AND_VIDEO_VOICE_TAB : eH.s6.VOICE_AND_VIDEO
            },
            [eH.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.hHMYbW), eq.intl.string(eq.t.dl18zc), eq.intl.string(eq.t.nuFtHB), eq.intl.string(eq.t['3182VF']), eq.intl.string(eq.t['DGq/PT'])],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE
            },
            [eH.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.OX2Bnp), eq.intl.string(eq.t.eATD2N), eq.intl.string(eq.t.nuFtHB), eq.intl.string(eq.t['3182VF']), eq.intl.string(eq.t['DGq/PT'])],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE
            },
            [eH.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.gyljWF), eq.intl.string(eq.t.nuFtHB)],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE
            },
            [eH.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.LM3U3t), eq.intl.string(eq.t.nuFtHB), eq.intl.string(eq.t.VZPR0d), eq.intl.string(eq.t.cjPbpa)],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, en.R)({
                        location: 'SettingsRendererConfig',
                        autoTrackExposure: !1
                    });
                    return e.length > 0;
                }
            },
            [eH.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t['pS+K2N']), eq.intl.string(eq.t.nuFtHB)],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tg !== eF._.STUDIO
            },
            [eH.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t['sqUm+v']), eq.intl.string(eq.t.nuFtHB)],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tp === eK.pM.VOICE_ACTIVITY && th
            },
            [eH.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.e7LIiY)],
                parent: tu ? eH.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eH.s6.VOICE_AND_VIDEO
            },
            [eH.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.nzUc3N)],
                parent: tu ? eH.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB : eH.s6.VOICE_AND_VIDEO
            },
            [eH.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.ABjMWF)],
                parent: eH.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eH.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.nzUc3N)],
                parent: eH.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eH.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.LKzQSE)],
                parent: tu ? eH.s6.VOICE_AND_VIDEO_VIDEO_TAB : eH.s6.VOICE_AND_VIDEO
            },
            [eH.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.F122Gx)],
                parent: eH.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => z.Z.supports(eK.AN.VIDEO)
            },
            [eH.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t['3Ppr1t'])],
                parent: eH.s6.VOICE_AND_VIDEO_VIDEO_CAMERA
            },
            [eH.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.lZTUPj)],
                parent: eH.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => z.Z.supports(eK.AN.VIDEO)
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t['8/udY2'])],
                parent: eH.s6.VOICE_AND_VIDEO
            },
            [eH.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t['8/udY2'])],
                parent: eH.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tu
            },
            [eH.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t['8/udY2'])],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE_TAB,
                predicate: () => tu
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.DSGme3)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => !tu
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.Tceiq6)],
                parent: tu ? eH.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED : eH.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t['71Ve19'])],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => z.Z.supports(eK.AN.OPEN_H264)
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.Sln58f)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.AxnPm5)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== Q.ZP.releaseChannel && z.Z.isExperimentalEncodersSupported()
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t['6I6GUl'])],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => th
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.iWTwu7)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t['/jwMtr'])],
                parent: tu ? eH.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eH.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.OBwCXF)],
                parent: tu ? eH.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.t8QhiY), eq.intl.string(eq.t.hmfkCg)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => z.Z.isNoiseSuppressionSupported()
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.BbESsr)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => z.Z.isAdvancedVoiceActivitySupported()
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.cUMdHx)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => z.Z.isAutomaticGainControlSupported()
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.DFPXIC)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => z.Z.showBypassSystemInputProcessing()
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.uancuL)],
                parent: tu ? eH.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eH.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => z.Z.supports(eK.AN.QOS)
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.oSdBvb)],
                parent: tu ? eH.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eH.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => z.Z.supports(eK.AN.ATTENUATION)
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.wVBHr6)],
                parent: tu ? eH.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eH.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => z.Z.shouldOfferManualSubsystemSelection()
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.KDdjoq), eq.intl.string(eq.t.NMCIf3), eq.intl.string(eq.t.FeUKeH)],
                parent: tu ? eH.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eH.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => z.Z.supportsVideoHook() || z.Z.supportsExperimentalSoundshare() || (z.Z.supportsSystemScreensharePicker() && (0, J.isMac)())
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.GmWk2N), eq.intl.string(eq.t['Fj/xn5'])],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => z.Z.supportsVideoHook()
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t['4I0qzc'])],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => z.Z.supportsExperimentalSoundshare()
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.ie1mgY)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => z.Z.supportsSystemScreensharePicker() && (0, J.isMac)()
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t['aP1N/v'])],
                parent: tu ? eH.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eH.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => J.isPlatformEmbedded
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.OFpL3d)],
                parent: tu ? eH.s6.VOICE_AND_VIDEO_DEBUG_TAB : eH.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t['0CEP6e'])],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => $.Sb.getSetting()
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t['r6K+TE'])],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => z.Z.isAecDumpSupported()
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.U4FgFB)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === Q.ZP.releaseChannel || 'development' === Q.ZP.releaseChannel) && e7 && z.Z.supports(eK.AN.CONNECTION_REPLAY)
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t['726JHB'])],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => J.isPlatformEmbedded && z.Z.supports(eK.AN.DEBUG_LOGGING) && null != g.Z.fileManager.readLogFiles
            },
            [eH.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t['/RXu6+'])],
                parent: tu ? eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING : eH.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eH.s6.CLICKER_GAME]: {
                url: ez.Z5c.SETTINGS('clicker-game'),
                section: ez.oAB.CLICKER_GAME,
                searchableTitles: [eq.intl.string(eX.default['7qZdOz'])],
                label: eq.intl.string(eX.default['7qZdOz']),
                ariaLabel: eq.intl.string(eX.default['7qZdOz']),
                element: j.Z,
                predicate: () => _.C.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enableGame,
                icon: (0, i.jsx)('img', {
                    alt: '',
                    src: n(186542),
                    className: eQ.clickerGameIcon
                })
            },
            [eH.s6.POGGERMODE]: {
                section: ez.oAB.POGGERMODE,
                searchableTitles: [eq.intl.string(eq.t.AtCukJ)],
                label: eq.intl.string(eq.t.AtCukJ),
                ariaLabel: eq.intl.string(eq.t.AtCukJ),
                element: Z.Z,
                predicate: () => D.Z.settingsVisible,
                icon: (0, i.jsx)('img', {
                    alt: '',
                    src: n(348621),
                    className: eQ.poggermodeIcon
                })
            },
            [eH.s6.CHAT]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t['/VQax8'])],
                label: eq.intl.string(eq.t['/VQax8']),
                ariaLabel: eq.intl.string(eq.t['/VQax8']),
                element: eP.Z,
                url: ez.Z5c.SETTINGS('chat')
            },
            [eH.s6.CHAT_INLINE_MEDIA]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.U68Dgo)],
                parent: eH.s6.CHAT
            },
            [eH.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.U47N1t)],
                parent: eH.s6.CHAT_INLINE_MEDIA
            },
            [eH.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.VP11Nj)],
                parent: eH.s6.CHAT_INLINE_MEDIA
            },
            [eH.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t['5S2AKy'])],
                parent: eH.s6.CHAT_INLINE_MEDIA
            },
            [eH.s6.CHAT_EMBEDS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.PWZOn5)],
                parent: eH.s6.CHAT
            },
            [eH.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.xX0ZTE)],
                parent: eH.s6.CHAT_EMBEDS
            },
            [eH.s6.CHAT_EMOJI]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.sMOuub)],
                parent: eH.s6.CHAT
            },
            [eH.s6.CHAT_EMOJI_REACTIONS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.Iv24sr)],
                parent: eH.s6.CHAT_EMOJI
            },
            [eH.s6.CHAT_EMOJI_EMOTICONS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t['79qal5'])],
                parent: eH.s6.CHAT_EMOJI
            },
            [eH.s6.CHAT_STICKERS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t['6NtAuL'])],
                parent: eH.s6.CHAT
            },
            [eH.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t['29xPVV'])],
                parent: eH.s6.CHAT_STICKERS
            },
            [eH.s6.CHAT_SOUNDMOJI]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.EHlAMT)],
                parent: eH.s6.CHAT
            },
            [eH.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t['CtYr+f'])],
                parent: eH.s6.CHAT_SOUNDMOJI
            },
            [eH.s6.CHAT_TEXT_BOX]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.afR0pK)],
                parent: eH.s6.CHAT
            },
            [eH.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.AqGrEB)],
                parent: eH.s6.CHAT_TEXT_BOX
            },
            [eH.s6.CHAT_THREADS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.B2panJ)],
                parent: eH.s6.CHAT
            },
            [eH.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.AInv5u)],
                parent: eH.s6.CHAT_THREADS
            },
            [eH.s6.CHAT_SPOILERS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.QgwmV1)],
                parent: eH.s6.CHAT
            },
            [eH.s6.NOTIFICATIONS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.HcoRu7)],
                label: eq.intl.string(eq.t.HcoRu7),
                ariaLabel: eq.intl.string(eq.t.HcoRu7),
                element: eS.Z,
                url: ez.Z5c.SETTINGS('notifications')
            },
            [eH.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t['/0WClp'])],
                parent: eH.s6.NOTIFICATIONS
            },
            [eH.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: eH.s6.NOTIFICATIONS
            },
            [eH.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.VH8AIC)],
                parent: eH.s6.NOTIFICATIONS
            },
            [eH.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.xSmFQE)],
                parent: eH.s6.NOTIFICATIONS,
                predicate: () => (0, J.isWindows)()
            },
            [eH.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.z21l8P)],
                parent: eH.s6.NOTIFICATIONS
            },
            [eH.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: ['New Notification Settings (Advanced, Staff Only)'],
                parent: eH.s6.NOTIFICATIONS,
                predicate: () => !1
            },
            [eH.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: ['Restore most recent snapshot'],
                parent: eH.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eH.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: ['Launch Migration'],
                parent: eH.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eH.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: ['Toggle new system on/off'],
                parent: eH.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eH.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.TTvjd3)],
                parent: eH.s6.NOTIFICATIONS
            },
            [eH.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.VpSKeH)],
                parent: eH.s6.NOTIFICATIONS
            },
            [eH.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.D9yVAA)],
                parent: eH.s6.NOTIFICATIONS
            },
            [eH.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.u6dc5O)],
                parent: eH.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eH.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.P8MG6u)],
                parent: eH.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eH.s6.NOTIFICATIONS_SOUNDS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.MKWyKS)],
                parent: eH.s6.NOTIFICATIONS
            },
            [eH.s6.NOTIFICATIONS_EMAILS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.TPchzM)],
                parent: eH.s6.NOTIFICATIONS
            },
            [eH.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t['B75+xc'])],
                parent: eH.s6.NOTIFICATIONS_EMAILS
            },
            [eH.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.sxn7lZ)],
                parent: eH.s6.NOTIFICATIONS_EMAILS
            },
            [eH.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.EkxXhY)],
                parent: eH.s6.NOTIFICATIONS_EMAILS
            },
            [eH.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.jNrkrK)],
                parent: eH.s6.NOTIFICATIONS_EMAILS
            },
            [eH.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.E8g1l5)],
                parent: eH.s6.NOTIFICATIONS_EMAILS
            },
            [eH.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.Ra9Pws)],
                parent: eH.s6.NOTIFICATIONS_EMAILS
            },
            [eH.s6.NOTIFICATIONS_REACTIONS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.Rq0NFh)],
                parent: eH.s6.NOTIFICATIONS
            },
            [eH.s6.NOTIFICATIONS_GAME_ACTIVITY]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.omtoJy), eq.intl.string(eq.t.SZue3N)],
                parent: eH.s6.NOTIFICATIONS,
                predicate: () => (0, I.uw)('SettingsRendererConfig')
            },
            [eH.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.wtk08f)],
                parent: eH.s6.NOTIFICATIONS,
                predicate: () => (0, F.JN)('SettingsRendererConfig')
            },
            [eH.s6.KEYBINDS]: {
                section: ez.oAB.KEYBINDS,
                searchableTitles: [eq.intl.string(eq.t.T9DA2N)],
                label: eq.intl.string(eq.t.T9DA2N),
                element: eC.Z,
                url: ez.Z5c.SETTINGS('keybinds')
            },
            [eH.s6.LANGUAGE]: {
                section: ez.oAB.LOCALE,
                searchableTitles: [eq.intl.string(eq.t.IHMsPj)],
                label: eq.intl.string(eq.t.IHMsPj),
                element: ev.Z,
                url: ez.Z5c.SETTINGS('language')
            },
            [eH.s6.WINDOW_SETTINGS]: {
                section: ez.oAB.WINDOWS,
                searchableTitles: [eq.intl.string(eq.t.ZkDZoq)],
                label: eq.intl.string(eq.t.ZkDZoq),
                element: eZ.Z,
                predicate: () => J.isPlatformEmbedded && (0, J.isWindows)()
            },
            [eH.s6.LINUX_SETTINGS]: {
                section: ez.oAB.LINUX,
                searchableTitles: [eq.intl.string(eq.t['7pPjTU'])],
                label: eq.intl.string(eq.t['7pPjTU']),
                element: e6,
                predicate: () => J.isPlatformEmbedded && (0, J.isLinux)()
            },
            [eH.s6.STREAMER_MODE]: {
                section: ez.oAB.STREAMER_MODE,
                searchableTitles: [eq.intl.string(eq.t.S5GfOT)],
                label: eq.intl.string(eq.t.S5GfOT),
                ariaLabel: eq.intl.string(eq.t.S5GfOT),
                element: eA.Z,
                url: ez.Z5c.SETTINGS('streamer-mode')
            },
            [eH.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: ez.oAB.STREAMER_MODE,
                searchableTitles: [eq.intl.string(eq.t.bxGbHB)],
                parent: eH.s6.STREAMER_MODE
            },
            [eH.s6.STREAMER_MODE_ENABLE]: {
                section: ez.oAB.STREAMER_MODE,
                searchableTitles: [eq.intl.string(eq.t.p9ZAJS)],
                parent: eH.s6.STREAMER_MODE
            },
            [eH.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: ez.oAB.STREAMER_MODE,
                searchableTitles: [eq.intl.string(eq.t.UpQziI)],
                parent: eH.s6.STREAMER_MODE
            },
            [eH.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: ez.oAB.STREAMER_MODE,
                searchableTitles: [eq.intl.string(eq.t.q7WNGh)],
                parent: eH.s6.STREAMER_MODE
            },
            [eH.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: ez.oAB.STREAMER_MODE,
                searchableTitles: [eq.intl.string(eq.t['1CWknJ'])],
                parent: eH.s6.STREAMER_MODE
            },
            [eH.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: ez.oAB.STREAMER_MODE,
                searchableTitles: [eq.intl.string(eq.t.qmYiYW)],
                parent: eH.s6.STREAMER_MODE
            },
            [eH.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: ez.oAB.STREAMER_MODE,
                searchableTitles: [eq.intl.string(eq.t['iA81+f'])],
                parent: eH.s6.STREAMER_MODE,
                predicate: () => {
                    var e, t, n;
                    return null != (n = null === g.Z || void 0 === g.Z || null == (t = g.Z.window) || null == (e = t.supportsContentProtection) ? void 0 : e.call(t)) && n;
                }
            },
            [eH.s6.SETTINGS_ADVANCED]: {
                section: ez.oAB.ADVANCED,
                searchableTitles: [eq.intl.string(eq.t['8/udY2'])],
                label: eq.intl.string(eq.t['8/udY2']),
                ariaLabel: eq.intl.string(eq.t['8/udY2']),
                element: ed.Z
            },
            [eH.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: ez.oAB.ADVANCED,
                searchableTitles: [eq.intl.string(eq.t.ObIb1d)],
                parent: eH.s6.SETTINGS_ADVANCED,
                predicate: () => q.wS
            },
            [eH.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: ez.oAB.ADVANCED,
                searchableTitles: [eq.intl.string(eq.t['eOC/Fx'])],
                parent: eH.s6.SETTINGS_ADVANCED,
                predicate: () => J.isPlatformEmbedded
            },
            [eH.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: ez.oAB.ADVANCED,
                searchableTitles: [eq.intl.string(eq.t.fi3UQE)],
                parent: eH.s6.SETTINGS_ADVANCED,
                predicate: () => ti
            },
            [eH.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: ez.oAB.ADVANCED,
                searchableTitles: [eq.intl.string(eq.t.erOqlp)],
                parent: eH.s6.SETTINGS_ADVANCED,
                predicate: () => ts
            },
            [eH.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: ez.oAB.ADVANCED,
                searchableTitles: [eq.intl.string(eq.t.qDZryM)],
                parent: eH.s6.SETTINGS_ADVANCED
            },
            [eH.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: ez.oAB.ADVANCED,
                searchableTitles: ['CF WARP', 'CloudFlare WARP'],
                parent: eH.s6.SETTINGS_ADVANCED,
                predicate: () => b.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable
            },
            [eH.s6.ACTIVITY_PRIVACY]: {
                section: ez.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.Cq98yM)],
                label: eq.intl.string(eq.t.Cq98yM),
                ariaLabel: eq.intl.string(eq.t.Cq98yM),
                element: ec.Z,
                predicate: () => !e2,
                url: ez.Z5c.SETTINGS('activity-privacy')
            },
            [eH.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: e2 ? ez.oAB.GAMES : ez.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t['8ka8lp'])],
                parent: e2 ? eH.s6.GAMES_ACTIVITY_PRIVACY : eH.s6.ACTIVITY_PRIVACY
            },
            [eH.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: e2 ? ez.oAB.GAMES : ez.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.VOszPD)],
                parent: e2 ? eH.s6.GAMES_ACTIVITY_PRIVACY : eH.s6.ACTIVITY_PRIVACY
            },
            [eH.s6.ACTIVITY_PRIVACY_TOS]: {
                section: e2 ? ez.oAB.GAMES : ez.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eH.CF],
                parent: e2 ? eH.s6.GAMES_ACTIVITY_PRIVACY : eH.s6.ACTIVITY_PRIVACY
            },
            [eH.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: ez.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t['4F2KoK'])],
                parent: eH.s6.ACTIVITY_PRIVACY
            },
            [eH.s6.REGISTERED_GAMES]: {
                section: ez.oAB.REGISTERED_GAMES,
                searchableTitles: [eq.intl.string(eq.t.AVDyEh)],
                label: eq.intl.string(eq.t.AVDyEh),
                element: ej.Z,
                predicate: () => !e2 && (0, eL.Jw)()
            },
            [eH.s6.OVERLAY]: {
                section: ez.oAB.OVERLAY,
                searchableTitles: [eq.intl.string(eq.t['9cb1U1']), eq.intl.string(eq.t.HcoRu7)],
                label: eq.intl.string(eq.t['9cb1U1']),
                element: eT.Z,
                predicate: () => !e2 && V
            },
            [eH.s6.CHANGELOG]: {
                section: 'changelog',
                onClick: () => (0, x.Z)(!0),
                searchableTitles: [eq.intl.string(eq.t.LRmNAg)],
                label: eq.intl.string(eq.t.LRmNAg)
            },
            [eH.s6.MERCHANDISE]: {
                section: 'merchandise',
                onClick: () => {
                    let e = 'https://discordmerch.com/Dsktopprm';
                    (K.default.track(ez.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, X.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                (K.default.track(ez.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, h.Z)(e));
                            }
                        }));
                },
                searchableTitles: [eq.intl.string(eq.t.sMEktb)],
                label: eq.intl.string(eq.t.sMEktb),
                ariaLabel: eq.intl.string(eq.t.sMEktb)
            },
            [eH.s6.HYPESQUAD]: {
                section: ez.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eq.intl.string(eq.t['k0R+4e'])],
                label: eq.intl.string(eq.t['k0R+4e']),
                element: eE.Z,
                predicate: () => !to
            },
            [eH.s6.TOWNHALL]: {
                section: ez.oAB.TOWNHALL,
                searchableTitles: [eq.intl.string(eq.t.dnZNER)],
                label: eq.intl.string(eq.t.dnZNER),
                predicate: () => to,
                onClick: () => {
                    ((0, h.Z)('https://discord.gg/discord-townhall'), (0, d.xf)());
                }
            },
            [eH.s6.EXPERIMENTS]: {
                section: ez.oAB.EXPERIMENTS,
                searchableTitles: ['Experiments'],
                label: 'Experiments',
                element: ew.Z,
                predicate: () => H.Z.isDeveloper,
                url: ez.Z5c.SETTINGS('experiments')
            },
            [eH.s6.DEVELOPER_OPTIONS]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: ex.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Overrides'],
                parent: eH.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: eH.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Logging'],
                parent: eH.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Manual Triggers'],
                parent: eH.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Design Tools'],
                parent: eH.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Log Keyboard Mismatches'],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: eH.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: eH.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: eH.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Always deliver ads'],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e7 && H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: eH.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e7 && H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Accessibility Auditing'],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1
            },
            [eH.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['CSS Debugging'],
                parent: eH.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e7 && H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eH.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e7 && H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eH.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e7 && H.Z.isDeveloper && W.default.layoutDebuggingEnabled
            },
            [eH.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e7 && H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Disable App Collections Cache'],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e7 && H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: eH.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: eH.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: eH.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: eH.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: eH.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => f.q && H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: eH.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: eH.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: eH.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: eH.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Prevent Popouts From Closing Automatically'],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Disable Align Chat Input'],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.HOTSPOT_OPTIONS]: {
                section: ez.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: et.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: ez.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: T.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.PAYMENT_FLOW_MODALS]: {
                section: ez.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: ei.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.REVENUE_STORYBOOK]: {
                section: ez.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Revenue Storybook', 'Payment Components', 'Orb Components', 'Virtual Currency'],
                label: 'Revenue Storybook',
                element: eV.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: ez.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ['Virtual Currency', 'Orb', 'Config'],
                label: 'Virtual Currency Config',
                element: eG.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.PAYMENT_COMPONENTS]: {
                section: ez.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Payment Components'],
                label: 'Payment Components',
                element: eV.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.ORB_COMPONENTS]: {
                section: ez.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Orb Components'],
                label: 'Orb Components',
                element: eV.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.TEXT_PLAYGROUND]: {
                section: ez.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: eR.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DESIGN_SYSTEMS]: {
                section: ez.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: eb.Z,
                predicate: () => H.Z.isDeveloper,
                url: ez.Z5c.SETTINGS('design-systems')
            },
            [eH.s6.DESIGN_SYSTEMS_COLORS]: {
                section: ez.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Colors'],
                label: 'Colors',
                element: eb.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.ANIMATION_TESTING]: {
                section: ez.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Animation Testing'],
                label: 'Animation Testing',
                element: eb.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: ez.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Components'],
                label: 'Components',
                element: eb.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.TEXT_COMPONENTS]: {
                section: ez.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: ea.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.INTL_TESTING]: {
                section: ez.oAB.INTL_TESTING,
                searchableTitles: ['Intl Testing', 'i18n'],
                label: 'Intl Testing',
                element: P.Z,
                predicate: () => e7 || H.Z.isDeveloper
            },
            [eH.s6.SHOP_KEEPER]: {
                section: ez.oAB.SHOP_KEEPER,
                searchableTitles: ['Shop Keeper'],
                label: 'Shop Keeper',
                element: v.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.QUEST_PREVIEW_TOOL]: {
                section: ez.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: U.Z,
                predicate: () => (0, B.X7)({ location: eY.dr.QUEST_PREVIEW_TOOL })
            },
            [eH.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG]: {
                section: ez.oAB.QUEST_MINOR_REWARD_CAPPING_CONFIG,
                searchableTitles: ['Minor Reward Capping Config'],
                label: 'Minor Reward Capping Config',
                element: M.Z,
                predicate: () => e7
            },
            [eH.s6.WEB_SETTING_TREE_TOOL]: {
                section: ez.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ['Web Setting Tree Tool'],
                label: 'Web Setting Tree Tool',
                element: ek.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eH.s6.LOGOUT]: {
                section: 'logout',
                onClick: () => {
                    (0, l.h7j)((e) => {
                        var t, n;
                        return (0, i.jsx)(
                            l.ConfirmModal,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            ((i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i));
                                        }));
                                }
                                return e;
                            })(
                                {
                                    header: eq.intl.string(eq.t['2jxGen']),
                                    confirmText: eq.intl.string(eq.t['2jxGen']),
                                    cancelText: eq.intl.string(eq.t['ETE/oK']),
                                    onCancel: e.onClose,
                                    onConfirm: () => c.Z.logout('settings')
                                },
                                e
                            )),
                            (n = n =
                                {
                                    children: (0, i.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        children: eq.intl.string(eq.t.SUnWBA)
                                    })
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t)
                        );
                    });
                },
                label: eq.intl.string(eq.t['2jxGen']),
                ariaLabel: eq.intl.string(eq.t['2jxGen']),
                icon: (0, i.jsx)(l.PBZ, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                variant: 'destructive'
            },
            [eH.s6.SOCIAL_LINKS]: {
                section: p.ID.CUSTOM,
                element: es.Z
            },
            [eH.s6.CLIENT_DEBUG_INFO]: {
                section: p.ID.CUSTOM,
                element: ee.Z
            }
        });
    };
