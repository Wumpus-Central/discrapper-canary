n.d(t, { i: () => e1 }), n(539854), n(388685);
var i = n(200651);
n(192379);
var r = n(990547),
    s = n(704215),
    l = n(692547),
    a = n(481060),
    o = n(570140),
    c = n(893776),
    d = n(37234),
    u = n(809206),
    m = n(230711),
    g = n(493544),
    p = n(579806),
    h = n(782568),
    f = n(758182),
    b = n(49226),
    _ = n(163379),
    x = n(498646),
    E = n(489968),
    j = n(703288),
    C = n(574755),
    O = n(377171),
    S = n(540059),
    v = n(621628),
    T = n(243778),
    I = n(18438),
    N = n(778825),
    y = n(665166),
    A = n(442933),
    P = n(715495),
    R = n(158947),
    D = n(351780),
    Z = n(231765),
    w = n(813732),
    k = n(398140),
    L = n(564344),
    B = n(538645),
    M = n(977156),
    U = n(652380),
    V = n(373230),
    G = n(145158),
    F = n(906467),
    H = n(857192),
    z = n(131951),
    Y = n(25990),
    W = n(626135),
    K = n(572004),
    q = n(49012),
    X = n(358085),
    Q = n(998502),
    J = n(695346),
    $ = n(604227),
    ee = n(38915),
    et = n(498639),
    en = n(748717),
    ei = n(419636),
    er = n(799071),
    es = n(601433),
    el = n(154022),
    ea = n(393681),
    eo = n(309739),
    ec = n(64914),
    ed = n(501348),
    eu = n(795594),
    em = n(443702),
    eg = n(327192),
    ep = n(949493),
    eh = n(675047),
    ef = n(177508),
    eb = n(956699),
    e_ = n(54942),
    ex = n(293389),
    eE = n(88624),
    ej = n(387747),
    eC = n(389650),
    eO = n(649157),
    eS = n(593648),
    ev = n(327885),
    eT = n(595242),
    eI = n(463153),
    eN = n(36192),
    ey = n(889029),
    eA = n(400287),
    eP = n(554042),
    eR = n(936982),
    eD = n(200645),
    eZ = n(287490),
    ew = n(706060),
    ek = n(168308),
    eL = n(277329),
    eB = n(273927),
    eM = n(604224),
    eU = n(43434),
    eV = n(333576),
    eG = n(726985),
    eF = n(583139),
    eH = n(981631),
    ez = n(46140),
    eY = n(65154),
    eW = n(388032),
    eK = n(622802),
    eq = n(332495),
    eX = n(539452);
let eQ = () => [s.z.CLIENT_THEMES_SETTINGS_BADGE, s.z.DEKSTOP_CUSTOM_APP_ICON_BADGE],
    eJ = () => {
        let e = [];
        return V.c.getCurrentConfig({ location: 'SettingsRendererConfig' }).enabled && e.push(s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE), A.e.getCurrentConfig({ location: 'SettingsRendererConfig' }).canPurchase && e.push(s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE), e;
    },
    e$ = () => {
        let e = eJ(),
            [t] = (0, T.US)(e);
        return t === s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE ? (0, i.jsx)(R.Z, {}) : t === s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE ? (0, i.jsx)(a.IGR, { text: eW.intl.string(eW.t.y2b7CA) }) : null;
    },
    e0 = eD.Z,
    e1 = (e) => {
        let { unseenGiftCount: t, showPrepaidPaymentPastDueWarning: T, impressionSource: A, numOfPendingFamilyRequests: R, isOverlaySupported: V, isClipsBetaTagShowing: e1 = !1, shouldMergeGameSettings: e2, isKeywordFilteringEnabled: e3, isStaff: e6, isInappropriateConversationWarningEnabled: e8, isInapproprateConversationsDefaultOn: e9, paymentsBlocked: e4, isEligibleForQuests: e5, showGiftNitro: e7, isStricterMessageRequestsEnabled: te, hasLibraryApplication: tt, hasTOTPEnabled: tn, developerMode: ti, isAdultUser: tr, hasSecureFramesVerifiedUserIds: ts, hypeSquadRemoved: tl, hasIgnoredUsers: ta, hasBlockedUsers: to, useRefreshedVoiceAndVideo: tc, isEligibleForSensitiveContentDefaults: td } = e;
        return Object.freeze({
            [eG.s6.SEARCH_NO_RESULTS]: {
                section: g.ID.CUSTOM,
                element: eI.Z
            },
            [eG.s6.ACCOUNT_SECURITY_TAB]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eW.intl.string(eW.t.Am9YHh)],
                label: eW.intl.string(eW.t.Am9YHh)
            },
            [eG.s6.ACCOUNT]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eW.intl.string(eW.t['JAIM/v'])],
                label: eW.intl.string(eW.t['JAIM/v']),
                ariaLabel: eW.intl.string(eW.t['JAIM/v']),
                element: ea.Z,
                url: eH.Z5c.SETTINGS('account')
            },
            [eG.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eW.intl.string(eW.t.LYju5O)],
                parent: eG.s6.ACCOUNT,
                section: eH.oAB.ACCOUNT
            },
            [eG.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eW.intl.string(eW.t['9AjdkJ'])],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE
            },
            [eG.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eW.intl.string(eW.t.Ulqq6O)],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE
            },
            [eG.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [eW.intl.string(eW.t['2UzQiY']), eW.intl.string(eW.t.dJOmCw), eW.intl.string(eW.t['Y0A/1N']), eW.intl.string(eW.t.wRpUfX), eW.intl.string(eW.t['+2/AhI'])],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE,
                predicate: () => td
            },
            [eG.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eW.intl.string(eW.t['+JkHPz'])],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE
            },
            [eG.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eW.intl.string(eW.t.oP5zGB)],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE
            },
            [eG.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eW.intl.string(eW.t.pKSjEh)],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT
            },
            [eG.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eW.intl.string(eW.t['FRep5+'])],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eW.intl.string(eW.t['7qKDrK'])],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eW.intl.string(eW.t.m0FidH)],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eW.intl.string(eW.t.cDgKtb)],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !tn
            },
            [eG.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eW.intl.string(eW.t['D+aE7u'])],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => tn
            },
            [eG.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eW.intl.string(eW.t.fZSi1N)],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eW.intl.string(eW.t.uHAJ5u)],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eW.intl.string(eW.t.vrOCCg)],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_REMOVAL]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eW.intl.string(eW.t.ZKsIkp)],
                parent: eG.s6.ACCOUNT
            },
            [eG.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eW.intl.string(eW.t.jf5GGR)],
                parent: eG.s6.ACCOUNT_REMOVAL
            },
            [eG.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eW.intl.string(eW.t['8lQ2ra'])],
                parent: eG.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [eG.s6.GAMES]: {
                section: eH.oAB.GAMES,
                searchableTitles: [eW.intl.string(eW.t.URyqtL)],
                label: eW.intl.string(eW.t.URyqtL),
                ariaLabel: eW.intl.string(eW.t.URyqtL),
                element: eL.Z,
                predicate: () => e2
            },
            [eG.s6.GAMES_MY_GAMES]: {
                section: eH.oAB.GAMES,
                searchableTitles: [eW.intl.string(eW.t['5DMgp6'])],
                parent: eG.s6.GAMES
            },
            [eG.s6.GAMES_CLIPS]: {
                section: eH.oAB.GAMES,
                searchableTitles: [eW.intl.string(eW.t.z2jK6e)],
                parent: eG.s6.GAMES
            },
            [eG.s6.GAMES_OVERLAY]: {
                section: eH.oAB.GAMES,
                searchableTitles: [eW.intl.string(eW.t['9cb1U1'])],
                parent: eG.s6.GAMES
            },
            [eG.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eH.oAB.GAMES,
                searchableTitles: [eW.intl.string(eW.t.Cq98yM)],
                parent: eG.s6.GAMES
            },
            [eG.s6.PROFILE_CUSTOMIZATION]: {
                section: eH.oAB.PROFILE_CUSTOMIZATION,
                type: g.bT.WIDE,
                searchableTitles: [eW.intl.string(eW.t['vi7f+v'])],
                label: eW.intl.string(eW.t['vi7f+v']),
                ariaLabel: eW.intl.string(eW.t['vi7f+v']),
                element: L.Z,
                newIndicator: (0, i.jsx)(e$, {}),
                newIndicatorDismissibleContentTypes: [...eJ()],
                notice: {
                    stores: [Y.Z, N.Z],
                    element: k.Z
                },
                onSettingsClose: () => {
                    o.Z.wait(() => {
                        (0, I.It)(), (0, u.P6)(), m.Z.clearSubsection(eH.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eH.Z5c.SETTINGS('profile-customization')
            },
            [eG.s6.PROFILE_DISPLAY_NAME]: {
                section: eH.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eW.intl.string(eW.t['9AjdkJ'])],
                parent: eG.s6.PROFILE_CUSTOMIZATION
            },
            [eG.s6.PROFILE_USER_PROFILE]: {
                section: eH.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eW.intl.string(eW.t['2p07FR']), eW.intl.string(eW.t['7vhiqq'])],
                parent: eG.s6.PROFILE_CUSTOMIZATION
            },
            [eG.s6.PROFILE_SERVER_PROFILES]: {
                section: eH.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eW.intl.string(eW.t.kPHroa)],
                parent: eG.s6.PROFILE_CUSTOMIZATION
            },
            [eG.s6.CONTENT_SOCIAL]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                label: eW.intl.string(eW.t['+o1pDQ']),
                searchableTitles: [eW.intl.string(eW.t['+o1pDQ'])],
                ariaLabel: eW.intl.string(eW.t['+o1pDQ']),
                element: ep.Z,
                url: eH.Z5c.SETTINGS('content-and-social')
            },
            [eG.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t['+o1pDQ']), eW.intl.string(eW.t['/7xJCA'])],
                parent: eG.s6.CONTENT_SOCIAL
            },
            [eG.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t['+o1pDQ']), eW.intl.string(eW.t['/7xJCA'])],
                parent: eG.s6.CONTENT_SOCIAL_DISCORD_TAB
            },
            [eG.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.h1hqj4)],
                parent: eG.s6.CONTENT_SOCIAL
            },
            [eG.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                label: eW.intl.string(eW.t.h1hqj4),
                searchableTitles: [eW.intl.string(eW.t.h1hqj4)],
                ariaLabel: eW.intl.string(eW.t.h1hqj4),
                parent: eG.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eH.Z5c.SETTINGS(eH.oAB.CONTENT_AND_SOCIAL, eF.C)
            },
            [eG.s6.DATA_PRIVACY]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                label: eW.intl.string(eW.t.OAuOHB),
                searchableTitles: [eW.intl.string(eW.t.OAuOHB)],
                ariaLabel: eW.intl.string(eW.t.OAuOHB),
                element: eh.Z,
                url: eH.Z5c.SETTINGS('data-and-privacy')
            },
            [eG.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eW.intl.string(eW.t['Vov/9v'])],
                parent: eG.s6.ACCOUNT
            },
            [eG.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.WWaFn5)],
                parent: eG.s6.DATA_PRIVACY,
                predicate: () => (0, X.isDesktop)()
            },
            [eG.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t['opi/XF'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY
            },
            [eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.xVRG4O)],
                parent: eG.s6.CONTENT_SOCIAL_DISCORD
            },
            [eG.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.fyA119)],
                parent: eG.s6.CONTENT_SOCIAL_DISCORD
            },
            [eG.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.fyA119)],
                parent: eG.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY
            },
            [eG.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t['/U8Iwc'])],
                parent: eG.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            },
            [eG.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t['ms+TmZ'])],
                parent: eG.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            },
            [eG.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t['y62Z/f'])],
                parent: eG.s6.CONTENT_SOCIAL
            },
            [eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.SRZyHh)],
                parent: eG.s6.DATA_PRIVACY
            },
            [eG.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.uEz8JC), eW.intl.string(eW.t['N/oRIy']), eW.intl.string(eW.t.QVdYsL), eW.intl.string(eW.t['aWD+tr']), eW.intl.string(eW.t['5mnTa2'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eG.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.JzaP4u), eW.intl.string(eW.t.H9XOl5), eW.intl.string(eW.t.k4W40N)],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eG.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t['L+yTsb'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eG.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.XahVjo)],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                parent: eG.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY
            },
            [eG.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.RAQUSE), eW.intl.string(eW.t.wbYDfX)],
                parent: eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eG.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t['3o2ojo'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !te
            },
            [eG.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.OLwZDQ)],
                parent: eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eG.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.wBkwu7)],
                parent: eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eG.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.XuADY2)],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eG.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.MNKzys)],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eG.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.VkS7YW)],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eG.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eG.CF],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eG.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.dmBSKi)],
                parent: eG.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY
            },
            [eG.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t['1UaUy8']), eW.intl.string(eW.t['xIk/iI'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e3
            },
            [eG.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.qFsx5u)],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e8 && !tr && !e9
            },
            [eG.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t['5b3FND'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => ts
            },
            [eG.s6.PRIVACY_FAMILY_CENTER]: {
                section: eH.oAB.FAMILY_CENTER,
                searchableTitles: [eW.intl.string(eq.default.gntCQU)],
                label: eW.intl.string(eq.default.gntCQU),
                ariaLabel: eW.intl.string(eq.default.gntCQU),
                element: e_.Z,
                badgeCount: R,
                newIndicator: (0, i.jsx)(a.IGR, {
                    text: eW.intl.string(eW.t.y2b7CA),
                    color: O.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [s.z.FAMILY_CENTER_NEW_BADGE],
                url: eH.Z5c.SETTINGS('family-center')
            },
            [eG.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.BG7Qsb)],
                parent: eG.s6.DATA_PRIVACY
            },
            [eG.s6.AUTHORIZED_APPS]: {
                section: eH.oAB.AUTHORIZED_APPS,
                searchableTitles: [eW.intl.string(eW.t['f6kk+v'])],
                label: eW.intl.string(eW.t['f6kk+v']),
                element: eu.Z,
                url: eH.Z5c.SETTINGS('authorized-apps')
            },
            [eG.s6.SESSIONS]: {
                section: eH.oAB.SESSIONS,
                searchableTitles: [eW.intl.string(eW.t['+1h0k5'])],
                label: eW.intl.string(eW.t['+1h0k5']),
                ariaLabel: eW.intl.string(eW.t['+1h0k5']),
                element: eN.Z,
                newIndicatorDismissibleContentTypes: [s.z.AUTH_SESSIONS_NEW],
                impressionName: r.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: A }
            },
            [eG.s6.CONNECTIONS]: {
                section: eH.oAB.CONNECTIONS,
                searchableTitles: [eW.intl.string(eW.t['3fe7U1'])],
                label: eW.intl.string(eW.t['3fe7U1']),
                ariaLabel: eW.intl.string(eW.t['3fe7U1']),
                element: eg.Z,
                impressionName: r.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: A },
                newIndicatorDismissibleContentTypes: [s.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eH.Z5c.SETTINGS('connections')
            },
            [eG.s6.THIRD_PARTY_ACCESS]: {
                section: eH.oAB.CONNECTIONS,
                searchableTitles: [eW.intl.string(eW.t['Ig/XFR']), eW.intl.string(eW.t['3fe7U1']), eW.intl.string(eW.t['f6kk+v'])],
                label: eW.intl.string(eW.t['Ig/XFR']),
                parent: eG.s6.CONNECTIONS,
                element: eR.Z
            },
            [eG.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eH.oAB.CONNECTIONS,
                searchableTitles: [eW.intl.string(eW.t['+/hZMz'])],
                parent: eG.s6.CONNECTIONS,
                element: eg.Z
            },
            [eG.s6.CLIPS]: {
                section: eH.oAB.CLIPS,
                searchableTitles: [eW.intl.string(eW.t.z2jK6e)],
                label: eW.intl.string(eW.t.z2jK6e),
                ariaLabel: eW.intl.string(eW.t.z2jK6e),
                icon: e1 ? (0, i.jsx)(j.Z, {}) : void 0,
                element: C.Z,
                predicate: () => !e2,
                url: eH.Z5c.SETTINGS('clips')
            },
            [eG.s6.RESTRICTED_USERS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                parent: eG.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eW.intl.string(eW.t['3wRorq']),
                element: eB.ZP,
                predicate: () => ta || to
            },
            [eG.s6.BLOCKED_USERS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                parent: eG.s6.RESTRICTED_USERS,
                label: eW.intl.string(eW.t.PFOUKS),
                searchableTitles: [eW.intl.string(eW.t.PFOUKS)],
                element: eB.GF,
                predicate: () => to
            },
            [eG.s6.IGNORED_USERS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                parent: eG.s6.RESTRICTED_USERS,
                searchableTitles: [eW.intl.string(eW.t['93ZDWF'])],
                label: eW.intl.string(eW.t['93ZDWF']),
                element: eB.yo,
                predicate: () => ta
            },
            [eG.s6.PREMIUM]: {
                section: eH.oAB.PREMIUM,
                ariaLabel: eW.intl.string(eW.t.Ipxkoq),
                searchableTitles: [eW.intl.string(eW.t.Ipxkoq)],
                label: eW.intl.string(eW.t.Ipxkoq),
                element: en.Z,
                className: eX.premiumTab
            },
            [eG.s6.GUILD_BOOSTING]: {
                section: eH.oAB.GUILD_BOOSTING,
                searchableTitles: [eW.intl.string(eW.t['+CbP2t'])],
                label: eW.intl.string(eW.t['+CbP2t']),
                element: eT.Z
            },
            [eG.s6.SUBSCRIPTIONS]: {
                section: eH.oAB.SUBSCRIPTIONS,
                ariaLabel: eW.intl.string(eW.t.trSpHR),
                searchableTitles: [eW.intl.string(eW.t.trSpHR)],
                label: eW.intl.string(eW.t.trSpHR),
                element: w.Z,
                icon: T
                    ? (0, i.jsx)(a.P4T, {
                          size: 'xs',
                          color: l.Z.unsafe_rawColors.YELLOW_300.css
                      })
                    : null
            },
            [eG.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eH.oAB.SUBSCRIPTIONS,
                searchableTitles: [eW.intl.string(eW.t['2GKrvr'])],
                parent: eG.s6.SUBSCRIPTIONS
            },
            [eG.s6.GIFT_INVENTORY]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eW.intl.string(eW.t['jcSP+v'])],
                label: eW.intl.string(eW.t['jcSP+v']),
                element: ej.Z,
                ariaLabel: eW.intl.string(eW.t['jcSP+v']),
                badgeCount: t
            },
            [eG.s6.GIFT_NITRO]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eW.intl.string(eW.t.Ve9Ge3)],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => !e4 && e7
            },
            [eG.s6.GIFT_CODE_REDEMPTION]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eW.intl.string(eW.t['il+VCg'])],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => !e4
            },
            [eG.s6.GIFT_INVENTORY_QUESTS]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eW.intl.string(eW.t.JALI2N)],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => e5
            },
            [eG.s6.GIFT_INVENTORY_LIST]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eW.intl.string(eW.t['9KeUbW'])],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => !e4
            },
            [eG.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eW.intl.string(eW.t.vwMEHR)],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => e4
            },
            [eG.s6.BILLING]: {
                section: eH.oAB.BILLING,
                searchableTitles: [eW.intl.string(eW.t.oeUm2t)],
                label: eW.intl.string(eW.t.oeUm2t),
                ariaLabel: eW.intl.string(eW.t.oeUm2t),
                element: em.Z
            },
            [eG.s6.BILLING_PAYMENT_METHODS]: {
                section: eH.oAB.BILLING,
                searchableTitles: [eW.intl.string(eW.t.W26xGR)],
                parent: eG.s6.BILLING
            },
            [eG.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eH.oAB.BILLING,
                searchableTitles: [eW.intl.string(eW.t.obLrcH)],
                parent: eG.s6.BILLING
            },
            [eG.s6.APPEARANCE]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eW.intl.string(eW.t['iHH+k5'])],
                label: eW.intl.string(eW.t['iHH+k5']),
                ariaLabel: eW.intl.string(eW.t['iHH+k5']),
                element: ed.Z,
                newIndicator: (0, i.jsx)(a.lBU, { text: eW.intl.string(eW.t.y2b7CA) }),
                newIndicatorDismissibleContentTypes: eQ(),
                url: eH.Z5c.SETTINGS('appearance')
            },
            [eG.s6.APPEARANCE_THEME]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eW.intl.string(eW.t.Ksh3io)],
                parent: eG.s6.APPEARANCE
            },
            [eG.s6.APPEARANCE_COLOR]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eW.intl.string(eW.t.OCOOiI)],
                parent: eG.s6.APPEARANCE_THEME
            },
            [eG.s6.APPEARANCE_ICON]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eW.intl.string(eW.t.RPh2oq)],
                parent: eG.s6.APPEARANCE_THEME
            },
            [eG.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eW.intl.string(eW.t.ZEoGMT)],
                parent: eG.s6.APPEARANCE
            },
            [eG.s6.APPEARANCE_LIST_SPACING]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: ['List Spacing'],
                parent: eG.s6.APPEARANCE,
                newIndicator: (0, i.jsx)(a.IGR, {
                    text: eW.intl.string(eW.t.y2b7CA),
                    color: O.Z.BG_BRAND
                }),
                predicate: () => (0, S.i9)('SettingsRendererConfig')
            },
            [eG.s6.APPEARANCE_SCALING_SPACING]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eW.intl.string(eW.t.qPOqoK)],
                parent: eG.s6.APPEARANCE
            },
            [eG.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eW.intl.string(eW.t.dyamEB), eW.intl.string(eW.t.p8NOws), eW.intl.string(eW.t['+o/sOj'])],
                parent: eG.s6.APPEARANCE,
                predicate: () => G.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable24HourPref
            },
            [eG.s6.ACCESSIBILITY]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.G0neg4)],
                label: eW.intl.string(eW.t.G0neg4),
                ariaLabel: eW.intl.string(eW.t.G0neg4),
                element: el.Z,
                url: eH.Z5c.SETTINGS('accessibility')
            },
            [eG.s6.ACCESSIBILITY_SATURATION]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t['5PWWCQ'])],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.bQCodH)],
                parent: eG.s6.ACCESSIBILITY_SATURATION
            },
            [eG.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.OLZFBw)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.uSOPWl)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_TAGS]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.UQt6dX)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_TAGS_NAMES]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.UPwh1N)],
                parent: eG.s6.ACCESSIBILITY_TAGS
            },
            [eG.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.BT8Bmp)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t['sSY+mJ'])],
                parent: eG.s6.ACCESSIBILITY_PROFILE_COLORS
            },
            [eG.s6.ACCESSIBILITY_CONTRAST]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.TYyfOz)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.cguieX)],
                parent: eG.s6.ACCESSIBILITY_CONTRAST
            },
            [eG.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.e3TR1d)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.b3XBzs)],
                parent: eG.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eG.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.Iayoh4)],
                parent: eG.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eG.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.iIaOlZ)],
                parent: eG.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eG.s6.ACCESSIBILITY_STICKERS]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t['6NtAuL'])],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_MESSAGES]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.onqU6u)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t['3Fztn5'])],
                parent: eG.s6.ACCESSIBILITY_MESSAGES
            },
            [eG.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.TZ2hZG)],
                parent: eG.s6.ACCESSIBILITY_MESSAGES
            },
            [eG.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.VpSKeH)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.qvTIwc)],
                parent: eG.s6.ACCESSIBILITY_TEXT_TO_SPEECH
            },
            [eG.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.lsW5Eh)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eG.CF],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.VOICE_AND_VIDEO]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.B1fFpa)],
                label: eW.intl.string(eW.t.B1fFpa),
                ariaLabel: eW.intl.string(eW.t.B1fFpa),
                element: eM.Z,
                predicate: () => z.Z.isSupported(),
                url: eH.Z5c.SETTINGS('voice')
            },
            [eG.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.K3lovL), eW.intl.string(eW.t.NiTd0d)],
                parent: eG.s6.VOICE_AND_VIDEO,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.FlNoSU)],
                parent: eG.s6.VOICE_AND_VIDEO,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.ABjMWF)],
                parent: eG.s6.VOICE_AND_VIDEO,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.OFpL3d)],
                parent: eG.s6.VOICE_AND_VIDEO,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.KDdjoq), eW.intl.string(eW.t.FeUKeH)],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.K3lovL), eW.intl.string(eW.t.NiTd0d)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_TAB : eG.s6.VOICE_AND_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.hHMYbW), eW.intl.string(eW.t.dl18zc), eW.intl.string(eW.t.nuFtHB), eW.intl.string(eW.t['3182VF']), eW.intl.string(eW.t['DGq/PT'])],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE
            },
            [eG.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.OX2Bnp), eW.intl.string(eW.t.eATD2N), eW.intl.string(eW.t.nuFtHB), eW.intl.string(eW.t['3182VF']), eW.intl.string(eW.t['DGq/PT'])],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE
            },
            [eG.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.gyljWF), eW.intl.string(eW.t.nuFtHB)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE
            },
            [eG.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t['pS+K2N']), eW.intl.string(eW.t.nuFtHB)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE
            },
            [eG.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t['sqUm+v']), eW.intl.string(eW.t.nuFtHB)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => z.Z.getMode() === eY.pM.VOICE_ACTIVITY
            },
            [eG.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.e7LIiY)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eG.s6.VOICE_AND_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.nzUc3N)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB : eG.s6.VOICE_AND_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.ABjMWF)],
                parent: eG.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eG.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.nzUc3N)],
                parent: eG.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.LKzQSE)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VIDEO_TAB : eG.s6.VOICE_AND_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.F122Gx)],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => z.Z.supports(eY.AN.VIDEO)
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t['3Ppr1t'])],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_CAMERA
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.lZTUPj)],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => z.Z.supports(eY.AN.VIDEO)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t['8/udY2'])],
                parent: eG.s6.VOICE_AND_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t['8/udY2'])],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t['8/udY2'])],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE_TAB,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.DSGme3)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => !tc
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.Tceiq6)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED : eG.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t['71Ve19'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => z.Z.supports(eY.AN.OPEN_H264)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.Sln58f)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.AxnPm5)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== Q.ZP.releaseChannel && z.Z.isExperimentalEncodersSupported()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t['6I6GUl'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.iWTwu7)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t['/jwMtr'])],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eG.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.OBwCXF)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.t8QhiY), eW.intl.string(eW.t.hmfkCg)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => z.Z.isNoiseSuppressionSupported()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.BbESsr)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => z.Z.isAdvancedVoiceActivitySupported()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.cUMdHx)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => z.Z.isAutomaticGainControlSupported()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.uancuL)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => z.Z.supports(eY.AN.QOS)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.oSdBvb)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => z.Z.supports(eY.AN.ATTENUATION)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.wVBHr6)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => z.Z.supports(eY.AN.LEGACY_AUDIO_SUBSYSTEM) || z.Z.supports(eY.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.KDdjoq), eW.intl.string(eW.t.NMCIf3), eW.intl.string(eW.t.FeUKeH)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => z.Z.supportsVideoHook() || z.Z.supportsExperimentalSoundshare() || (z.Z.supportsSystemScreensharePicker() && (0, X.isMac)())
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.GmWk2N), eW.intl.string(eW.t['Fj/xn5'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => z.Z.supportsVideoHook()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t['4I0qzc'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => z.Z.supportsExperimentalSoundshare()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.ie1mgY)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => z.Z.supportsSystemScreensharePicker() && (0, X.isMac)()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t['aP1N/v'])],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => X.isPlatformEmbedded
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.OFpL3d)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_DEBUG_TAB : eG.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t['0CEP6e'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => J.Sb.getSetting()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t['r6K+TE'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => z.Z.isAecDumpSupported()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.U4FgFB)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === Q.ZP.releaseChannel || 'development' === Q.ZP.releaseChannel) && e6 && z.Z.supports(eY.AN.CONNECTION_REPLAY)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t['726JHB'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => X.isPlatformEmbedded && z.Z.supports(eY.AN.DEBUG_LOGGING) && null != p.Z.fileManager.readLogFiles
            },
            [eG.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t['/RXu6+'])],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING : eG.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eG.s6.CLICKER_GAME]: {
                url: eH.Z5c.SETTINGS('clicker-game'),
                section: eH.oAB.CLICKER_GAME,
                searchableTitles: [eW.intl.string(eK.default['7qZdOz'])],
                label: eW.intl.string(eK.default['7qZdOz']),
                ariaLabel: eW.intl.string(eK.default['7qZdOz']),
                element: E.Z,
                predicate: () => x.C.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enableGame,
                icon: (0, i.jsx)('img', {
                    alt: '',
                    src: n(186542),
                    className: eX.clickerGameIcon
                })
            },
            [eG.s6.POGGERMODE]: {
                section: eH.oAB.POGGERMODE,
                searchableTitles: [eW.intl.string(eW.t.AtCukJ)],
                label: eW.intl.string(eW.t.AtCukJ),
                ariaLabel: eW.intl.string(eW.t.AtCukJ),
                element: Z.Z,
                predicate: () => D.Z.settingsVisible,
                icon: (0, i.jsx)('img', {
                    alt: '',
                    src: n(348621),
                    className: eX.poggermodeIcon
                })
            },
            [eG.s6.CHAT]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t['/VQax8'])],
                label: eW.intl.string(eW.t['/VQax8']),
                ariaLabel: eW.intl.string(eW.t['/VQax8']),
                element: eA.Z,
                url: eH.Z5c.SETTINGS('chat')
            },
            [eG.s6.CHAT_INLINE_MEDIA]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.U68Dgo)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.U47N1t)],
                parent: eG.s6.CHAT_INLINE_MEDIA
            },
            [eG.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.VP11Nj)],
                parent: eG.s6.CHAT_INLINE_MEDIA
            },
            [eG.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t['5S2AKy'])],
                parent: eG.s6.CHAT_INLINE_MEDIA
            },
            [eG.s6.CHAT_EMBEDS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.PWZOn5)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.xX0ZTE)],
                parent: eG.s6.CHAT_EMBEDS
            },
            [eG.s6.CHAT_EMOJI]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.sMOuub)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_EMOJI_REACTIONS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.Iv24sr)],
                parent: eG.s6.CHAT_EMOJI
            },
            [eG.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t['79qal5'])],
                parent: eG.s6.CHAT_EMOJI
            },
            [eG.s6.CHAT_STICKERS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t['6NtAuL'])],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_STICKERS_SUGGESTIONS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t['479+PT'])],
                parent: eG.s6.CHAT_STICKERS
            },
            [eG.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t['29xPVV'])],
                parent: eG.s6.CHAT_STICKERS
            },
            [eG.s6.CHAT_SOUNDMOJI]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.EHlAMT)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t['CtYr+f'])],
                parent: eG.s6.CHAT_SOUNDMOJI
            },
            [eG.s6.CHAT_TEXT_BOX]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.afR0pK)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.AqGrEB)],
                parent: eG.s6.CHAT_TEXT_BOX
            },
            [eG.s6.CHAT_THREADS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.B2panJ)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.AInv5u)],
                parent: eG.s6.CHAT_THREADS
            },
            [eG.s6.CHAT_SPOILERS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.QgwmV1)],
                parent: eG.s6.CHAT
            },
            [eG.s6.NOTIFICATIONS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.HcoRu7)],
                label: eW.intl.string(eW.t.HcoRu7),
                ariaLabel: eW.intl.string(eW.t.HcoRu7),
                element: eS.Z,
                url: eH.Z5c.SETTINGS('notifications')
            },
            [eG.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t['/0WClp'])],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.VH8AIC)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.xSmFQE)],
                parent: eG.s6.NOTIFICATIONS,
                predicate: () => (0, X.isWindows)()
            },
            [eG.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.z21l8P)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: ['New Notification Settings (Advanced, Staff Only)'],
                parent: eG.s6.NOTIFICATIONS,
                predicate: () => !1
            },
            [eG.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: ['Restore most recent snapshot'],
                parent: eG.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eG.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: ['Launch Migration'],
                parent: eG.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eG.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: ['Toggle new system on/off'],
                parent: eG.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eG.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.TTvjd3)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.VpSKeH)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.D9yVAA)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.u6dc5O)],
                parent: eG.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eG.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.P8MG6u)],
                parent: eG.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eG.s6.NOTIFICATIONS_SOUNDS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.MKWyKS)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_EMAILS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.TPchzM)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t['B75+xc'])],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.sxn7lZ)],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.EkxXhY)],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.jNrkrK)],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.E8g1l5)],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.Ra9Pws)],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_REACTIONS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.Rq0NFh)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.KEYBINDS]: {
                section: eH.oAB.KEYBINDS,
                searchableTitles: [eW.intl.string(eW.t.T9DA2N)],
                label: eW.intl.string(eW.t.T9DA2N),
                element: eC.Z,
                url: eH.Z5c.SETTINGS('keybinds')
            },
            [eG.s6.LANGUAGE]: {
                section: eH.oAB.LOCALE,
                searchableTitles: [eW.intl.string(eW.t.IHMsPj)],
                label: eW.intl.string(eW.t.IHMsPj),
                element: eO.Z,
                url: eH.Z5c.SETTINGS('language')
            },
            [eG.s6.WINDOW_SETTINGS]: {
                section: eH.oAB.WINDOWS,
                searchableTitles: [eW.intl.string(eW.t.ZkDZoq)],
                label: eW.intl.string(eW.t.ZkDZoq),
                element: eD.Z,
                predicate: () => X.isPlatformEmbedded && (0, X.isWindows)()
            },
            [eG.s6.LINUX_SETTINGS]: {
                section: eH.oAB.LINUX,
                searchableTitles: [eW.intl.string(eW.t['7pPjTU'])],
                label: eW.intl.string(eW.t['7pPjTU']),
                element: e0,
                predicate: () => X.isPlatformEmbedded && (0, X.isLinux)()
            },
            [eG.s6.STREAMER_MODE]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eW.intl.string(eW.t.S5GfOT)],
                label: eW.intl.string(eW.t.S5GfOT),
                ariaLabel: eW.intl.string(eW.t.S5GfOT),
                element: ey.Z,
                url: eH.Z5c.SETTINGS('streamer-mode')
            },
            [eG.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eW.intl.string(eW.t.bxGbHB)],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_ENABLE]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eW.intl.string(eW.t.p9ZAJS)],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eW.intl.string(eW.t.UpQziI)],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eW.intl.string(eW.t.q7WNGh)],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eW.intl.string(eW.t['1CWknJ'])],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eW.intl.string(eW.t.qmYiYW)],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eW.intl.string(eW.t['iA81+f'])],
                parent: eG.s6.STREAMER_MODE,
                predicate: () => {
                    var e, t, n;
                    return null != (n = null === p.Z || void 0 === p.Z || null == (t = p.Z.window) || null == (e = t.supportsContentProtection) ? void 0 : e.call(t)) && n;
                }
            },
            [eG.s6.SETTINGS_ADVANCED]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eW.intl.string(eW.t['8/udY2'])],
                label: eW.intl.string(eW.t['8/udY2']),
                ariaLabel: eW.intl.string(eW.t['8/udY2']),
                element: ec.Z
            },
            [eG.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eW.intl.string(eW.t.ObIb1d)],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => K.wS
            },
            [eG.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eW.intl.string(eW.t['eOC/Fx'])],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => X.isPlatformEmbedded
            },
            [eG.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eW.intl.string(eW.t.fi3UQE)],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => tt
            },
            [eG.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eW.intl.string(eW.t.erOqlp)],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => ti
            },
            [eG.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eW.intl.string(eW.t.qDZryM)],
                parent: eG.s6.SETTINGS_ADVANCED
            },
            [eG.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: ['CF WARP', 'CloudFlare WARP'],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => b.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable
            },
            [eG.s6.ACTIVITY_PRIVACY]: {
                section: eH.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.Cq98yM)],
                label: eW.intl.string(eW.t.Cq98yM),
                ariaLabel: eW.intl.string(eW.t.Cq98yM),
                element: eo.Z,
                predicate: () => !e2,
                url: eH.Z5c.SETTINGS('activity-privacy')
            },
            [eG.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: e2 ? eH.oAB.GAMES : eH.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t['8ka8lp'])],
                parent: e2 ? eG.s6.GAMES_ACTIVITY_PRIVACY : eG.s6.ACTIVITY_PRIVACY
            },
            [eG.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: e2 ? eH.oAB.GAMES : eH.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.VOszPD)],
                parent: e2 ? eG.s6.GAMES_ACTIVITY_PRIVACY : eG.s6.ACTIVITY_PRIVACY
            },
            [eG.s6.ACTIVITY_PRIVACY_TOS]: {
                section: e2 ? eH.oAB.GAMES : eH.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eG.CF],
                parent: e2 ? eG.s6.GAMES_ACTIVITY_PRIVACY : eG.s6.ACTIVITY_PRIVACY
            },
            [eG.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eH.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t['4F2KoK'])],
                parent: eG.s6.ACTIVITY_PRIVACY
            },
            [eG.s6.REGISTERED_GAMES]: {
                section: eH.oAB.REGISTERED_GAMES,
                searchableTitles: [eW.intl.string(eW.t.AVDyEh)],
                label: eW.intl.string(eW.t.AVDyEh),
                element: ex.Z,
                predicate: () => !e2 && (0, ek.Jw)()
            },
            [eG.s6.OVERLAY]: {
                section: eH.oAB.OVERLAY,
                searchableTitles: [eW.intl.string(eW.t['9cb1U1']), eW.intl.string(eW.t.HcoRu7)],
                label: eW.intl.string(eW.t['9cb1U1']),
                element: ev.Z,
                predicate: () => !e2 && V
            },
            [eG.s6.CHANGELOG]: {
                section: 'changelog',
                onClick: () => (0, _.Z)(!0),
                searchableTitles: [eW.intl.string(eW.t.LRmNAg)],
                label: eW.intl.string(eW.t.LRmNAg)
            },
            [eG.s6.MERCHANDISE]: {
                section: 'merchandise',
                onClick: () => {
                    let e = 'https://discordmerch.com/Dsktopprm';
                    W.default.track(eH.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, q.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                W.default.track(eH.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, h.Z)(e);
                            }
                        });
                },
                searchableTitles: [eW.intl.string(eW.t.sMEktb)],
                label: eW.intl.string(eW.t.sMEktb),
                ariaLabel: eW.intl.string(eW.t.sMEktb)
            },
            [eG.s6.HYPESQUAD]: {
                section: eH.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eW.intl.string(eW.t['k0R+4e'])],
                label: eW.intl.string(eW.t['k0R+4e']),
                element: eE.Z,
                predicate: () => !tl
            },
            [eG.s6.TOWNHALL]: {
                section: eH.oAB.TOWNHALL,
                searchableTitles: [eW.intl.string(eW.t.dnZNER)],
                label: eW.intl.string(eW.t.dnZNER),
                predicate: () => tl,
                onClick: () => {
                    (0, h.Z)('https://discord.gg/discord-townhall'), (0, d.xf)();
                }
            },
            [eG.s6.EXPERIMENTS]: {
                section: eH.oAB.EXPERIMENTS,
                searchableTitles: ['Experiments'],
                label: 'Experiments',
                element: eZ.Z,
                predicate: () => F.Z.isDeveloper,
                url: eH.Z5c.SETTINGS('experiments')
            },
            [eG.s6.DEVELOPER_OPTIONS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: eb.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_FLAGS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Always deliver ads'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Accessibility Auditing'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => !1
            },
            [eG.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['CSS Debugging'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && F.Z.isDeveloper && H.default.layoutDebuggingEnabled
            },
            [eG.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Disable App Collections Cache'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => f.q && F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Prevent Popouts From Closing Automatically'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.HOTSPOT_OPTIONS]: {
                section: eH.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: ee.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eH.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: v.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.PAYMENT_FLOW_MODALS]: {
                section: eH.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: et.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.REVENUE_STORYBOOK]: {
                section: eH.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Revenue Storybook', 'Payment Components', 'Orb Components', 'Virtual Currency'],
                label: 'Revenue Storybook',
                element: eU.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eH.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ['Virtual Currency', 'Orb', 'Config'],
                label: 'Virtual Currency Config',
                element: eV.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.PAYMENT_COMPONENTS]: {
                section: eH.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Payment Components'],
                label: 'Payment Components',
                element: eU.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.ORB_COMPONENTS]: {
                section: eH.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Orb Components'],
                label: 'Orb Components',
                element: eU.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.TEXT_PLAYGROUND]: {
                section: eH.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: eP.Z,
                predicate: () => (0, es.D)() || F.Z.isDeveloper
            },
            [eG.s6.DESIGN_SYSTEMS]: {
                section: eH.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: ef.Z,
                predicate: () => F.Z.isDeveloper,
                url: eH.Z5c.SETTINGS('design-systems')
            },
            [eG.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eH.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Colors'],
                label: 'Colors',
                element: ef.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.ANIMATION_TESTING]: {
                section: eH.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Animation Testing'],
                label: 'Animation Testing',
                element: ef.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eH.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Components'],
                label: 'Components',
                element: ef.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.TEXT_COMPONENTS]: {
                section: eH.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: er.Z,
                predicate: () => (0, es.D)() || F.Z.isDeveloper
            },
            [eG.s6.INTL_TESTING]: {
                section: eH.oAB.INTL_TESTING,
                searchableTitles: ['Intl Testing', 'i18n'],
                label: 'Intl Testing',
                element: y.Z,
                predicate: () => e6 || F.Z.isDeveloper
            },
            [eG.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
                section: eH.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
                searchableTitles: ['PFX Editor'],
                label: 'PFX Editor',
                element: B.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.NAMEPLATES_PREVIEW_TOOL]: {
                section: eH.oAB.NAMEPLATES_PREVIEW_TOOL,
                searchableTitles: ['Nameplates Preview Tool'],
                label: 'Nameplates Preview Tool',
                element: P.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.QUEST_PREVIEW_TOOL]: {
                section: eH.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: U.Z,
                predicate: () => (0, M.X7)({ location: ez.dr.QUEST_PREVIEW_TOOL })
            },
            [eG.s6.WEB_SETTING_TREE_TOOL]: {
                section: eH.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ['Web Setting Tree Tool'],
                label: 'Web Setting Tree Tool',
                element: ew.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.LOGOUT]: {
                section: 'logout',
                onClick: () => {
                    (0, a.h7j)((e) => {
                        var t, n;
                        return (0, i.jsx)(
                            a.ConfirmModal,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })(
                                {
                                    header: eW.intl.string(eW.t['2jxGen']),
                                    confirmText: eW.intl.string(eW.t['2jxGen']),
                                    cancelText: eW.intl.string(eW.t['ETE/oK']),
                                    onCancel: e.onClose,
                                    onConfirm: () => c.Z.logout('settings')
                                },
                                e
                            )),
                            (n = n =
                                {
                                    children: (0, i.jsx)(a.Text, {
                                        variant: 'text-md/normal',
                                        children: eW.intl.string(eW.t.SUnWBA)
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
                label: eW.intl.string(eW.t['2jxGen']),
                ariaLabel: eW.intl.string(eW.t['2jxGen']),
                icon: (0, i.jsx)(a.PBZ, {
                    size: 'xs',
                    color: 'currentColor'
                })
            },
            [eG.s6.SOCIAL_LINKS]: {
                section: g.ID.CUSTOM,
                element: ei.Z
            },
            [eG.s6.CLIENT_DEBUG_INFO]: {
                section: g.ID.CUSTOM,
                element: $.Z
            }
        });
    };
