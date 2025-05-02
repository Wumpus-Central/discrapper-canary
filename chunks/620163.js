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
    p = n(493544),
    g = n(579806),
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
    U = n(14676),
    V = n(652380),
    G = n(373230),
    F = n(145158),
    H = n(906467),
    z = n(857192),
    W = n(131951),
    Y = n(25990),
    K = n(626135),
    q = n(572004),
    X = n(49012),
    Q = n(358085),
    J = n(998502),
    $ = n(695346),
    ee = n(604227),
    et = n(38915),
    en = n(498639),
    ei = n(748717),
    er = n(419636),
    es = n(799071),
    el = n(154022),
    ea = n(393681),
    eo = n(309739),
    ec = n(64914),
    ed = n(501348),
    eu = n(795594),
    em = n(443702),
    ep = n(327192),
    eg = n(949493),
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
    eW = n(65154),
    eY = n(388032),
    eK = n(622802),
    eq = n(332495),
    eX = n(539452);
let eQ = () => [s.z.CLIENT_THEMES_SETTINGS_BADGE, s.z.DEKSTOP_CUSTOM_APP_ICON_BADGE],
    eJ = () => {
        let e = [];
        return G.c.getCurrentConfig({ location: 'SettingsRendererConfig' }).enabled && e.push(s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE), A.e.getCurrentConfig({ location: 'SettingsRendererConfig' }).canPurchase && e.push(s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE), e;
    },
    e$ = () => {
        let e = eJ(),
            [t] = (0, T.US)(e);
        return t === s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE ? (0, i.jsx)(R.Z, {}) : t === s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE ? (0, i.jsx)(a.IGR, { text: eY.intl.string(eY.t.y2b7CA) }) : null;
    },
    e0 = eD.Z,
    e1 = (e) => {
        let { unseenGiftCount: t, showPrepaidPaymentPastDueWarning: T, impressionSource: A, numOfPendingFamilyRequests: R, isOverlaySupported: G, isClipsBetaTagShowing: e1 = !1, shouldMergeGameSettings: e2, isKeywordFilteringEnabled: e3, isStaff: e6, isInappropriateConversationWarningEnabled: e8, isInapproprateConversationsDefaultOn: e4, paymentsBlocked: e9, isEligibleForQuests: e5, showGiftNitro: e7, isStricterMessageRequestsEnabled: te, hasLibraryApplication: tt, hasTOTPEnabled: tn, developerMode: ti, isAdultUser: tr, hasSecureFramesVerifiedUserIds: ts, hypeSquadRemoved: tl, hasIgnoredUsers: ta, hasBlockedUsers: to, useRefreshedVoiceAndVideo: tc, isEligibleForSensitiveContentDefaults: td } = e;
        return Object.freeze({
            [eG.s6.SEARCH_NO_RESULTS]: {
                section: p.ID.CUSTOM,
                element: eI.Z
            },
            [eG.s6.ACCOUNT_SECURITY_TAB]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t.Am9YHh)],
                label: eY.intl.string(eY.t.Am9YHh)
            },
            [eG.s6.ACCOUNT]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t['JAIM/v'])],
                label: eY.intl.string(eY.t['JAIM/v']),
                ariaLabel: eY.intl.string(eY.t['JAIM/v']),
                element: ea.Z,
                url: eH.Z5c.SETTINGS('account')
            },
            [eG.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eY.intl.string(eY.t.LYju5O)],
                parent: eG.s6.ACCOUNT,
                section: eH.oAB.ACCOUNT
            },
            [eG.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eY.intl.string(eY.t['9AjdkJ'])],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE
            },
            [eG.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eY.intl.string(eY.t.Ulqq6O)],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE
            },
            [eG.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [eY.intl.string(eY.t['2UzQiY']), eY.intl.string(eY.t.dJOmCw), eY.intl.string(eY.t['Y0A/1N']), eY.intl.string(eY.t.wRpUfX), eY.intl.string(eY.t['+2/AhI'])],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE,
                predicate: () => td
            },
            [eG.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eY.intl.string(eY.t['+JkHPz'])],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE
            },
            [eG.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eY.intl.string(eY.t.oP5zGB)],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE
            },
            [eG.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eY.intl.string(eY.t.pKSjEh)],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT
            },
            [eG.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eY.intl.string(eY.t['FRep5+'])],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eY.intl.string(eY.t['7qKDrK'])],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eY.intl.string(eY.t.m0FidH)],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eY.intl.string(eY.t.cDgKtb)],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !tn
            },
            [eG.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eY.intl.string(eY.t['D+aE7u'])],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => tn
            },
            [eG.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eY.intl.string(eY.t.fZSi1N)],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eY.intl.string(eY.t.uHAJ5u)],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eY.intl.string(eY.t.vrOCCg)],
                section: eH.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_REMOVAL]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t.ZKsIkp)],
                parent: eG.s6.ACCOUNT
            },
            [eG.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t.jf5GGR)],
                parent: eG.s6.ACCOUNT_REMOVAL
            },
            [eG.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t['8lQ2ra'])],
                parent: eG.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [eG.s6.GAMES]: {
                section: eH.oAB.GAMES,
                searchableTitles: [eY.intl.string(eY.t.URyqtL)],
                label: eY.intl.string(eY.t.URyqtL),
                ariaLabel: eY.intl.string(eY.t.URyqtL),
                element: eL.Z,
                predicate: () => e2
            },
            [eG.s6.GAMES_MY_GAMES]: {
                section: eH.oAB.GAMES,
                searchableTitles: [eY.intl.string(eY.t['5DMgp6'])],
                parent: eG.s6.GAMES
            },
            [eG.s6.GAMES_CLIPS]: {
                section: eH.oAB.GAMES,
                searchableTitles: [eY.intl.string(eY.t.z2jK6e)],
                parent: eG.s6.GAMES
            },
            [eG.s6.GAMES_OVERLAY]: {
                section: eH.oAB.GAMES,
                searchableTitles: [eY.intl.string(eY.t['9cb1U1'])],
                parent: eG.s6.GAMES
            },
            [eG.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eH.oAB.GAMES,
                searchableTitles: [eY.intl.string(eY.t.Cq98yM)],
                parent: eG.s6.GAMES
            },
            [eG.s6.PROFILE_CUSTOMIZATION]: {
                section: eH.oAB.PROFILE_CUSTOMIZATION,
                type: p.bT.WIDE,
                searchableTitles: [eY.intl.string(eY.t['vi7f+v'])],
                label: eY.intl.string(eY.t['vi7f+v']),
                ariaLabel: eY.intl.string(eY.t['vi7f+v']),
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
                searchableTitles: [eY.intl.string(eY.t['9AjdkJ'])],
                parent: eG.s6.PROFILE_CUSTOMIZATION
            },
            [eG.s6.PROFILE_USER_PROFILE]: {
                section: eH.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eY.intl.string(eY.t['2p07FR']), eY.intl.string(eY.t['7vhiqq'])],
                parent: eG.s6.PROFILE_CUSTOMIZATION
            },
            [eG.s6.PROFILE_SERVER_PROFILES]: {
                section: eH.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eY.intl.string(eY.t.kPHroa)],
                parent: eG.s6.PROFILE_CUSTOMIZATION
            },
            [eG.s6.CONTENT_SOCIAL]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                label: eY.intl.string(eY.t['+o1pDQ']),
                searchableTitles: [eY.intl.string(eY.t['+o1pDQ'])],
                ariaLabel: eY.intl.string(eY.t['+o1pDQ']),
                element: eg.Z,
                url: eH.Z5c.SETTINGS('content-and-social')
            },
            [eG.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t['+o1pDQ']), eY.intl.string(eY.t['/7xJCA'])],
                parent: eG.s6.CONTENT_SOCIAL
            },
            [eG.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t['+o1pDQ']), eY.intl.string(eY.t['/7xJCA'])],
                parent: eG.s6.CONTENT_SOCIAL_DISCORD_TAB
            },
            [eG.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.h1hqj4)],
                parent: eG.s6.CONTENT_SOCIAL
            },
            [eG.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                label: eY.intl.string(eY.t.h1hqj4),
                searchableTitles: [eY.intl.string(eY.t.h1hqj4)],
                ariaLabel: eY.intl.string(eY.t.h1hqj4),
                parent: eG.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eH.Z5c.SETTINGS(eH.oAB.CONTENT_AND_SOCIAL, eF.C)
            },
            [eG.s6.DATA_PRIVACY]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                label: eY.intl.string(eY.t.OAuOHB),
                searchableTitles: [eY.intl.string(eY.t.OAuOHB)],
                ariaLabel: eY.intl.string(eY.t.OAuOHB),
                element: eh.Z,
                url: eH.Z5c.SETTINGS('data-and-privacy')
            },
            [eG.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t['Vov/9v'])],
                parent: eG.s6.ACCOUNT
            },
            [eG.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.WWaFn5)],
                parent: eG.s6.DATA_PRIVACY,
                predicate: () => (0, Q.isDesktop)()
            },
            [eG.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t['opi/XF'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY
            },
            [eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.xVRG4O)],
                parent: eG.s6.CONTENT_SOCIAL_DISCORD
            },
            [eG.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.fyA119)],
                parent: eG.s6.CONTENT_SOCIAL_DISCORD
            },
            [eG.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.fyA119)],
                parent: eG.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY
            },
            [eG.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t['/U8Iwc'])],
                parent: eG.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            },
            [eG.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t['ms+TmZ'])],
                parent: eG.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            },
            [eG.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t['y62Z/f'])],
                parent: eG.s6.CONTENT_SOCIAL
            },
            [eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.SRZyHh)],
                parent: eG.s6.DATA_PRIVACY
            },
            [eG.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.uEz8JC), eY.intl.string(eY.t['N/oRIy']), eY.intl.string(eY.t.QVdYsL), eY.intl.string(eY.t['aWD+tr']), eY.intl.string(eY.t['5mnTa2'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eG.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.JzaP4u), eY.intl.string(eY.t.H9XOl5), eY.intl.string(eY.t.k4W40N)],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eG.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t['L+yTsb'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eG.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.XahVjo)],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                parent: eG.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY
            },
            [eG.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.RAQUSE), eY.intl.string(eY.t.wbYDfX)],
                parent: eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eG.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t['3o2ojo'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !te
            },
            [eG.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.OLwZDQ)],
                parent: eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eG.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.wBkwu7)],
                parent: eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eG.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.XuADY2)],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eG.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.MNKzys)],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eG.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.VkS7YW)],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eG.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eG.CF],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eG.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.dmBSKi)],
                parent: eG.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY
            },
            [eG.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t['1UaUy8']), eY.intl.string(eY.t['xIk/iI'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e3
            },
            [eG.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.qFsx5u)],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e8 && !tr && !e4
            },
            [eG.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t['5b3FND'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => ts
            },
            [eG.s6.PRIVACY_FAMILY_CENTER]: {
                section: eH.oAB.FAMILY_CENTER,
                searchableTitles: [eY.intl.string(eq.default.gntCQU)],
                label: eY.intl.string(eq.default.gntCQU),
                ariaLabel: eY.intl.string(eq.default.gntCQU),
                element: e_.Z,
                badgeCount: R,
                newIndicator: (0, i.jsx)(a.IGR, {
                    text: eY.intl.string(eY.t.y2b7CA),
                    color: O.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [s.z.FAMILY_CENTER_NEW_BADGE],
                url: eH.Z5c.SETTINGS('family-center')
            },
            [eG.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.BG7Qsb)],
                parent: eG.s6.DATA_PRIVACY
            },
            [eG.s6.AUTHORIZED_APPS]: {
                section: eH.oAB.AUTHORIZED_APPS,
                searchableTitles: [eY.intl.string(eY.t['f6kk+v'])],
                label: eY.intl.string(eY.t['f6kk+v']),
                element: eu.Z,
                url: eH.Z5c.SETTINGS('authorized-apps')
            },
            [eG.s6.SESSIONS]: {
                section: eH.oAB.SESSIONS,
                searchableTitles: [eY.intl.string(eY.t['+1h0k5'])],
                label: eY.intl.string(eY.t['+1h0k5']),
                ariaLabel: eY.intl.string(eY.t['+1h0k5']),
                element: eN.Z,
                newIndicatorDismissibleContentTypes: [s.z.AUTH_SESSIONS_NEW],
                impressionName: r.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: A }
            },
            [eG.s6.CONNECTIONS]: {
                section: eH.oAB.CONNECTIONS,
                searchableTitles: [eY.intl.string(eY.t['3fe7U1'])],
                label: eY.intl.string(eY.t['3fe7U1']),
                ariaLabel: eY.intl.string(eY.t['3fe7U1']),
                element: ep.Z,
                impressionName: r.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: A },
                newIndicatorDismissibleContentTypes: [s.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eH.Z5c.SETTINGS('connections')
            },
            [eG.s6.THIRD_PARTY_ACCESS]: {
                section: eH.oAB.CONNECTIONS,
                searchableTitles: [eY.intl.string(eY.t['Ig/XFR']), eY.intl.string(eY.t['3fe7U1']), eY.intl.string(eY.t['f6kk+v'])],
                label: eY.intl.string(eY.t['Ig/XFR']),
                parent: eG.s6.CONNECTIONS,
                element: eR.Z
            },
            [eG.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eH.oAB.CONNECTIONS,
                searchableTitles: [eY.intl.string(eY.t['+/hZMz'])],
                parent: eG.s6.CONNECTIONS,
                element: ep.Z
            },
            [eG.s6.CLIPS]: {
                section: eH.oAB.CLIPS,
                searchableTitles: [eY.intl.string(eY.t.z2jK6e)],
                label: eY.intl.string(eY.t.z2jK6e),
                ariaLabel: eY.intl.string(eY.t.z2jK6e),
                icon: e1 ? (0, i.jsx)(j.Z, {}) : void 0,
                element: C.Z,
                predicate: () => !e2,
                url: eH.Z5c.SETTINGS('clips')
            },
            [eG.s6.RESTRICTED_USERS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                parent: eG.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eY.intl.string(eY.t['3wRorq']),
                element: eB.ZP,
                predicate: () => ta || to
            },
            [eG.s6.BLOCKED_USERS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                parent: eG.s6.RESTRICTED_USERS,
                label: eY.intl.string(eY.t.PFOUKS),
                searchableTitles: [eY.intl.string(eY.t.PFOUKS)],
                element: eB.GF,
                predicate: () => to
            },
            [eG.s6.IGNORED_USERS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                parent: eG.s6.RESTRICTED_USERS,
                searchableTitles: [eY.intl.string(eY.t['93ZDWF'])],
                label: eY.intl.string(eY.t['93ZDWF']),
                element: eB.yo,
                predicate: () => ta
            },
            [eG.s6.PREMIUM]: {
                section: eH.oAB.PREMIUM,
                ariaLabel: eY.intl.string(eY.t.Ipxkoq),
                searchableTitles: [eY.intl.string(eY.t.Ipxkoq)],
                label: eY.intl.string(eY.t.Ipxkoq),
                element: ei.Z,
                className: eX.premiumTab
            },
            [eG.s6.GUILD_BOOSTING]: {
                section: eH.oAB.GUILD_BOOSTING,
                searchableTitles: [eY.intl.string(eY.t['+CbP2t'])],
                label: eY.intl.string(eY.t['+CbP2t']),
                element: eT.Z
            },
            [eG.s6.SUBSCRIPTIONS]: {
                section: eH.oAB.SUBSCRIPTIONS,
                ariaLabel: eY.intl.string(eY.t.trSpHR),
                searchableTitles: [eY.intl.string(eY.t.trSpHR)],
                label: eY.intl.string(eY.t.trSpHR),
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
                searchableTitles: [eY.intl.string(eY.t['2GKrvr'])],
                parent: eG.s6.SUBSCRIPTIONS
            },
            [eG.s6.GIFT_INVENTORY]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t['jcSP+v'])],
                label: eY.intl.string(eY.t['jcSP+v']),
                element: ej.Z,
                ariaLabel: eY.intl.string(eY.t['jcSP+v']),
                badgeCount: t
            },
            [eG.s6.GIFT_NITRO]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t.Ve9Ge3)],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => !e9 && e7
            },
            [eG.s6.GIFT_CODE_REDEMPTION]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t['il+VCg'])],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => !e9
            },
            [eG.s6.GIFT_INVENTORY_QUESTS]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t.JALI2N)],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => e5
            },
            [eG.s6.GIFT_INVENTORY_LIST]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t['9KeUbW'])],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => !e9
            },
            [eG.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t.vwMEHR)],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => e9
            },
            [eG.s6.BILLING]: {
                section: eH.oAB.BILLING,
                searchableTitles: [eY.intl.string(eY.t.oeUm2t)],
                label: eY.intl.string(eY.t.oeUm2t),
                ariaLabel: eY.intl.string(eY.t.oeUm2t),
                element: em.Z
            },
            [eG.s6.BILLING_PAYMENT_METHODS]: {
                section: eH.oAB.BILLING,
                searchableTitles: [eY.intl.string(eY.t.W26xGR)],
                parent: eG.s6.BILLING
            },
            [eG.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eH.oAB.BILLING,
                searchableTitles: [eY.intl.string(eY.t.obLrcH)],
                parent: eG.s6.BILLING
            },
            [eG.s6.APPEARANCE]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t['iHH+k5'])],
                label: eY.intl.string(eY.t['iHH+k5']),
                ariaLabel: eY.intl.string(eY.t['iHH+k5']),
                element: ed.Z,
                newIndicator: (0, i.jsx)(a.lBU, { text: eY.intl.string(eY.t.y2b7CA) }),
                newIndicatorDismissibleContentTypes: eQ(),
                url: eH.Z5c.SETTINGS('appearance')
            },
            [eG.s6.APPEARANCE_THEME]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.Ksh3io)],
                parent: eG.s6.APPEARANCE
            },
            [eG.s6.APPEARANCE_COLOR]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.OCOOiI)],
                parent: eG.s6.APPEARANCE_THEME
            },
            [eG.s6.APPEARANCE_ICON]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.RPh2oq)],
                parent: eG.s6.APPEARANCE_THEME
            },
            [eG.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.ZEoGMT)],
                parent: eG.s6.APPEARANCE
            },
            [eG.s6.APPEARANCE_LIST_SPACING]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: ['List Spacing'],
                parent: eG.s6.APPEARANCE,
                newIndicator: (0, i.jsx)(a.IGR, {
                    text: eY.intl.string(eY.t.y2b7CA),
                    color: O.Z.BG_BRAND
                }),
                predicate: () => (0, S.i9)('SettingsRendererConfig')
            },
            [eG.s6.APPEARANCE_SCALING_SPACING]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.qPOqoK)],
                parent: eG.s6.APPEARANCE
            },
            [eG.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.dyamEB), eY.intl.string(eY.t.p8NOws), eY.intl.string(eY.t['+o/sOj'])],
                parent: eG.s6.APPEARANCE,
                predicate: () => F.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable24HourPref
            },
            [eG.s6.ACCESSIBILITY]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.G0neg4)],
                label: eY.intl.string(eY.t.G0neg4),
                ariaLabel: eY.intl.string(eY.t.G0neg4),
                element: el.Z,
                url: eH.Z5c.SETTINGS('accessibility')
            },
            [eG.s6.ACCESSIBILITY_SATURATION]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t['5PWWCQ'])],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.bQCodH)],
                parent: eG.s6.ACCESSIBILITY_SATURATION
            },
            [eG.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.OLZFBw)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.uSOPWl)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.BT8Bmp)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t['sSY+mJ'])],
                parent: eG.s6.ACCESSIBILITY_PROFILE_COLORS
            },
            [eG.s6.ACCESSIBILITY_CONTRAST]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.TYyfOz)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.cguieX)],
                parent: eG.s6.ACCESSIBILITY_CONTRAST
            },
            [eG.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.e3TR1d)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.b3XBzs)],
                parent: eG.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eG.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.Iayoh4)],
                parent: eG.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eG.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.iIaOlZ)],
                parent: eG.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eG.s6.ACCESSIBILITY_STICKERS]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t['6NtAuL'])],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_MESSAGES]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.onqU6u)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t['3Fztn5'])],
                parent: eG.s6.ACCESSIBILITY_MESSAGES
            },
            [eG.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.TZ2hZG)],
                parent: eG.s6.ACCESSIBILITY_MESSAGES
            },
            [eG.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.VpSKeH)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.qvTIwc)],
                parent: eG.s6.ACCESSIBILITY_TEXT_TO_SPEECH
            },
            [eG.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.lsW5Eh)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eG.CF],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.VOICE_AND_VIDEO]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.B1fFpa)],
                label: eY.intl.string(eY.t.B1fFpa),
                ariaLabel: eY.intl.string(eY.t.B1fFpa),
                element: eM.Z,
                predicate: () => W.Z.isSupported(),
                url: eH.Z5c.SETTINGS('voice')
            },
            [eG.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.K3lovL), eY.intl.string(eY.t.NiTd0d)],
                parent: eG.s6.VOICE_AND_VIDEO,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.FlNoSU)],
                parent: eG.s6.VOICE_AND_VIDEO,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.ABjMWF)],
                parent: eG.s6.VOICE_AND_VIDEO,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.OFpL3d)],
                parent: eG.s6.VOICE_AND_VIDEO,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.KDdjoq), eY.intl.string(eY.t.FeUKeH)],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.K3lovL), eY.intl.string(eY.t.NiTd0d)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_TAB : eG.s6.VOICE_AND_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.hHMYbW), eY.intl.string(eY.t.dl18zc), eY.intl.string(eY.t.nuFtHB), eY.intl.string(eY.t['3182VF']), eY.intl.string(eY.t['DGq/PT'])],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE
            },
            [eG.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.OX2Bnp), eY.intl.string(eY.t.eATD2N), eY.intl.string(eY.t.nuFtHB), eY.intl.string(eY.t['3182VF']), eY.intl.string(eY.t['DGq/PT'])],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE
            },
            [eG.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.gyljWF), eY.intl.string(eY.t.nuFtHB)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE
            },
            [eG.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['pS+K2N']), eY.intl.string(eY.t.nuFtHB)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE
            },
            [eG.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['sqUm+v']), eY.intl.string(eY.t.nuFtHB)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => W.Z.getMode() === eW.pM.VOICE_ACTIVITY
            },
            [eG.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.e7LIiY)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eG.s6.VOICE_AND_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.nzUc3N)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB : eG.s6.VOICE_AND_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.ABjMWF)],
                parent: eG.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eG.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.nzUc3N)],
                parent: eG.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.LKzQSE)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VIDEO_TAB : eG.s6.VOICE_AND_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.F122Gx)],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => W.Z.supports(eW.AN.VIDEO)
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['3Ppr1t'])],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_CAMERA
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.lZTUPj)],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => W.Z.supports(eW.AN.VIDEO)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['8/udY2'])],
                parent: eG.s6.VOICE_AND_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['8/udY2'])],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['8/udY2'])],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE_TAB,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.DSGme3)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => !tc
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.Tceiq6)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED : eG.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['71Ve19'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => W.Z.supports(eW.AN.OPEN_H264)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.Sln58f)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.AxnPm5)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== J.ZP.releaseChannel && W.Z.isExperimentalEncodersSupported()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['6I6GUl'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.iWTwu7)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['/jwMtr'])],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eG.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.OBwCXF)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.t8QhiY), eY.intl.string(eY.t.hmfkCg)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => W.Z.isNoiseSuppressionSupported()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.BbESsr)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => W.Z.isAdvancedVoiceActivitySupported()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.cUMdHx)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => W.Z.isAutomaticGainControlSupported()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.uancuL)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => W.Z.supports(eW.AN.QOS)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.oSdBvb)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => W.Z.supports(eW.AN.ATTENUATION)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.wVBHr6)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => W.Z.supports(eW.AN.LEGACY_AUDIO_SUBSYSTEM) || W.Z.supports(eW.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.KDdjoq), eY.intl.string(eY.t.NMCIf3), eY.intl.string(eY.t.FeUKeH)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => W.Z.supportsVideoHook() || W.Z.supportsExperimentalSoundshare() || (W.Z.supportsSystemScreensharePicker() && (0, Q.isMac)())
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.GmWk2N), eY.intl.string(eY.t['Fj/xn5'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => W.Z.supportsVideoHook()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['4I0qzc'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => W.Z.supportsExperimentalSoundshare()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.ie1mgY)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => W.Z.supportsSystemScreensharePicker() && (0, Q.isMac)()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['aP1N/v'])],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => Q.isPlatformEmbedded
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.OFpL3d)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_DEBUG_TAB : eG.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['0CEP6e'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => $.Sb.getSetting()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['r6K+TE'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => W.Z.isAecDumpSupported()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.U4FgFB)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === J.ZP.releaseChannel || 'development' === J.ZP.releaseChannel) && e6 && W.Z.supports(eW.AN.CONNECTION_REPLAY)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['726JHB'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => Q.isPlatformEmbedded && W.Z.supports(eW.AN.DEBUG_LOGGING) && null != g.Z.fileManager.readLogFiles
            },
            [eG.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['/RXu6+'])],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING : eG.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eG.s6.CLICKER_GAME]: {
                url: eH.Z5c.SETTINGS('clicker-game'),
                section: eH.oAB.CLICKER_GAME,
                searchableTitles: [eY.intl.string(eK.default['7qZdOz'])],
                label: eY.intl.string(eK.default['7qZdOz']),
                ariaLabel: eY.intl.string(eK.default['7qZdOz']),
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
                searchableTitles: [eY.intl.string(eY.t.AtCukJ)],
                label: eY.intl.string(eY.t.AtCukJ),
                ariaLabel: eY.intl.string(eY.t.AtCukJ),
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
                searchableTitles: [eY.intl.string(eY.t['/VQax8'])],
                label: eY.intl.string(eY.t['/VQax8']),
                ariaLabel: eY.intl.string(eY.t['/VQax8']),
                element: eA.Z,
                url: eH.Z5c.SETTINGS('chat')
            },
            [eG.s6.CHAT_INLINE_MEDIA]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.U68Dgo)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.U47N1t)],
                parent: eG.s6.CHAT_INLINE_MEDIA
            },
            [eG.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.VP11Nj)],
                parent: eG.s6.CHAT_INLINE_MEDIA
            },
            [eG.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t['5S2AKy'])],
                parent: eG.s6.CHAT_INLINE_MEDIA
            },
            [eG.s6.CHAT_EMBEDS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.PWZOn5)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.xX0ZTE)],
                parent: eG.s6.CHAT_EMBEDS
            },
            [eG.s6.CHAT_EMOJI]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.sMOuub)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_EMOJI_REACTIONS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.Iv24sr)],
                parent: eG.s6.CHAT_EMOJI
            },
            [eG.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t['79qal5'])],
                parent: eG.s6.CHAT_EMOJI
            },
            [eG.s6.CHAT_STICKERS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t['6NtAuL'])],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_STICKERS_SUGGESTIONS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t['479+PT'])],
                parent: eG.s6.CHAT_STICKERS
            },
            [eG.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t['29xPVV'])],
                parent: eG.s6.CHAT_STICKERS
            },
            [eG.s6.CHAT_SOUNDMOJI]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.EHlAMT)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t['CtYr+f'])],
                parent: eG.s6.CHAT_SOUNDMOJI
            },
            [eG.s6.CHAT_TEXT_BOX]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.afR0pK)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.AqGrEB)],
                parent: eG.s6.CHAT_TEXT_BOX
            },
            [eG.s6.CHAT_THREADS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.B2panJ)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.AInv5u)],
                parent: eG.s6.CHAT_THREADS
            },
            [eG.s6.CHAT_SPOILERS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.QgwmV1)],
                parent: eG.s6.CHAT
            },
            [eG.s6.NOTIFICATIONS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.HcoRu7)],
                label: eY.intl.string(eY.t.HcoRu7),
                ariaLabel: eY.intl.string(eY.t.HcoRu7),
                element: eS.Z,
                url: eH.Z5c.SETTINGS('notifications')
            },
            [eG.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t['/0WClp'])],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.VH8AIC)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.xSmFQE)],
                parent: eG.s6.NOTIFICATIONS,
                predicate: () => (0, Q.isWindows)()
            },
            [eG.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.z21l8P)],
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
                searchableTitles: [eY.intl.string(eY.t.TTvjd3)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.VpSKeH)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.D9yVAA)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.u6dc5O)],
                parent: eG.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eG.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.P8MG6u)],
                parent: eG.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eG.s6.NOTIFICATIONS_SOUNDS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.MKWyKS)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_EMAILS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.TPchzM)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t['B75+xc'])],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.sxn7lZ)],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.EkxXhY)],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.jNrkrK)],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.E8g1l5)],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.Ra9Pws)],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_REACTIONS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.Rq0NFh)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.KEYBINDS]: {
                section: eH.oAB.KEYBINDS,
                searchableTitles: [eY.intl.string(eY.t.T9DA2N)],
                label: eY.intl.string(eY.t.T9DA2N),
                element: eC.Z,
                url: eH.Z5c.SETTINGS('keybinds')
            },
            [eG.s6.LANGUAGE]: {
                section: eH.oAB.LOCALE,
                searchableTitles: [eY.intl.string(eY.t.IHMsPj)],
                label: eY.intl.string(eY.t.IHMsPj),
                element: eO.Z,
                url: eH.Z5c.SETTINGS('language')
            },
            [eG.s6.WINDOW_SETTINGS]: {
                section: eH.oAB.WINDOWS,
                searchableTitles: [eY.intl.string(eY.t.ZkDZoq)],
                label: eY.intl.string(eY.t.ZkDZoq),
                element: eD.Z,
                predicate: () => Q.isPlatformEmbedded && (0, Q.isWindows)()
            },
            [eG.s6.LINUX_SETTINGS]: {
                section: eH.oAB.LINUX,
                searchableTitles: [eY.intl.string(eY.t['7pPjTU'])],
                label: eY.intl.string(eY.t['7pPjTU']),
                element: e0,
                predicate: () => Q.isPlatformEmbedded && (0, Q.isLinux)()
            },
            [eG.s6.STREAMER_MODE]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.S5GfOT)],
                label: eY.intl.string(eY.t.S5GfOT),
                ariaLabel: eY.intl.string(eY.t.S5GfOT),
                element: ey.Z,
                url: eH.Z5c.SETTINGS('streamer-mode')
            },
            [eG.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.bxGbHB)],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_ENABLE]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.p9ZAJS)],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.UpQziI)],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.q7WNGh)],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t['1CWknJ'])],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.qmYiYW)],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t['iA81+f'])],
                parent: eG.s6.STREAMER_MODE,
                predicate: () => {
                    var e, t, n;
                    return null != (n = null === g.Z || void 0 === g.Z || null == (t = g.Z.window) || null == (e = t.supportsContentProtection) ? void 0 : e.call(t)) && n;
                }
            },
            [eG.s6.SETTINGS_ADVANCED]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t['8/udY2'])],
                label: eY.intl.string(eY.t['8/udY2']),
                ariaLabel: eY.intl.string(eY.t['8/udY2']),
                element: ec.Z
            },
            [eG.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t.ObIb1d)],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => q.wS
            },
            [eG.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t['eOC/Fx'])],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => Q.isPlatformEmbedded
            },
            [eG.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t.fi3UQE)],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => tt
            },
            [eG.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t.erOqlp)],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => ti
            },
            [eG.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t.qDZryM)],
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
                searchableTitles: [eY.intl.string(eY.t.Cq98yM)],
                label: eY.intl.string(eY.t.Cq98yM),
                ariaLabel: eY.intl.string(eY.t.Cq98yM),
                element: eo.Z,
                predicate: () => !e2,
                url: eH.Z5c.SETTINGS('activity-privacy')
            },
            [eG.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: e2 ? eH.oAB.GAMES : eH.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t['8ka8lp'])],
                parent: e2 ? eG.s6.GAMES_ACTIVITY_PRIVACY : eG.s6.ACTIVITY_PRIVACY
            },
            [eG.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: e2 ? eH.oAB.GAMES : eH.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.VOszPD)],
                parent: e2 ? eG.s6.GAMES_ACTIVITY_PRIVACY : eG.s6.ACTIVITY_PRIVACY
            },
            [eG.s6.ACTIVITY_PRIVACY_TOS]: {
                section: e2 ? eH.oAB.GAMES : eH.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eG.CF],
                parent: e2 ? eG.s6.GAMES_ACTIVITY_PRIVACY : eG.s6.ACTIVITY_PRIVACY
            },
            [eG.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eH.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t['4F2KoK'])],
                parent: eG.s6.ACTIVITY_PRIVACY
            },
            [eG.s6.REGISTERED_GAMES]: {
                section: eH.oAB.REGISTERED_GAMES,
                searchableTitles: [eY.intl.string(eY.t.AVDyEh)],
                label: eY.intl.string(eY.t.AVDyEh),
                element: ex.Z,
                predicate: () => !e2 && (0, ek.Jw)()
            },
            [eG.s6.OVERLAY]: {
                section: eH.oAB.OVERLAY,
                searchableTitles: [eY.intl.string(eY.t['9cb1U1']), eY.intl.string(eY.t.HcoRu7)],
                label: eY.intl.string(eY.t['9cb1U1']),
                element: ev.Z,
                predicate: () => !e2 && G
            },
            [eG.s6.CHANGELOG]: {
                section: 'changelog',
                onClick: () => (0, _.Z)(!0),
                searchableTitles: [eY.intl.string(eY.t.LRmNAg)],
                label: eY.intl.string(eY.t.LRmNAg)
            },
            [eG.s6.MERCHANDISE]: {
                section: 'merchandise',
                onClick: () => {
                    let e = 'https://discordmerch.com/Dsktopprm';
                    K.default.track(eH.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, X.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                K.default.track(eH.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, h.Z)(e);
                            }
                        });
                },
                searchableTitles: [eY.intl.string(eY.t.sMEktb)],
                label: eY.intl.string(eY.t.sMEktb),
                ariaLabel: eY.intl.string(eY.t.sMEktb)
            },
            [eG.s6.HYPESQUAD]: {
                section: eH.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eY.intl.string(eY.t['k0R+4e'])],
                label: eY.intl.string(eY.t['k0R+4e']),
                element: eE.Z,
                predicate: () => !tl
            },
            [eG.s6.TOWNHALL]: {
                section: eH.oAB.TOWNHALL,
                searchableTitles: [eY.intl.string(eY.t.dnZNER)],
                label: eY.intl.string(eY.t.dnZNER),
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
                predicate: () => H.Z.isDeveloper,
                url: eH.Z5c.SETTINGS('experiments')
            },
            [eG.s6.DEVELOPER_OPTIONS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: eb.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_FLAGS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Always deliver ads'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && H.Z.isDeveloper
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
                predicate: () => e6 && H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && H.Z.isDeveloper && z.default.layoutDebuggingEnabled
            },
            [eG.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Disable App Collections Cache'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => f.q && H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Prevent Popouts From Closing Automatically'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.HOTSPOT_OPTIONS]: {
                section: eH.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: et.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eH.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: v.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.PAYMENT_FLOW_MODALS]: {
                section: eH.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: en.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.REVENUE_STORYBOOK]: {
                section: eH.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Revenue Storybook', 'Payment Components', 'Orb Components', 'Virtual Currency'],
                label: 'Revenue Storybook',
                element: eU.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eH.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ['Virtual Currency', 'Orb', 'Config'],
                label: 'Virtual Currency Config',
                element: eV.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.PAYMENT_COMPONENTS]: {
                section: eH.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Payment Components'],
                label: 'Payment Components',
                element: eU.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.ORB_COMPONENTS]: {
                section: eH.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Orb Components'],
                label: 'Orb Components',
                element: eU.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.TEXT_PLAYGROUND]: {
                section: eH.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: eP.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DESIGN_SYSTEMS]: {
                section: eH.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: ef.Z,
                predicate: () => H.Z.isDeveloper,
                url: eH.Z5c.SETTINGS('design-systems')
            },
            [eG.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eH.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Colors'],
                label: 'Colors',
                element: ef.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.ANIMATION_TESTING]: {
                section: eH.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Animation Testing'],
                label: 'Animation Testing',
                element: ef.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eH.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Components'],
                label: 'Components',
                element: ef.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.TEXT_COMPONENTS]: {
                section: eH.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: es.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.INTL_TESTING]: {
                section: eH.oAB.INTL_TESTING,
                searchableTitles: ['Intl Testing', 'i18n'],
                label: 'Intl Testing',
                element: y.Z,
                predicate: () => e6 || H.Z.isDeveloper
            },
            [eG.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
                section: eH.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
                searchableTitles: ['PFX Editor'],
                label: 'PFX Editor',
                element: B.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.NAMEPLATES_PREVIEW_TOOL]: {
                section: eH.oAB.NAMEPLATES_PREVIEW_TOOL,
                searchableTitles: ['Nameplates Preview Tool'],
                label: 'Nameplates Preview Tool',
                element: P.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eG.s6.QUEST_PREVIEW_TOOL]: {
                section: eH.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: V.Z,
                predicate: () => (0, M.X7)({ location: ez.dr.QUEST_PREVIEW_TOOL })
            },
            [eG.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG]: {
                section: eH.oAB.QUEST_MINOR_REWARD_CAPPING_CONFIG,
                searchableTitles: ['Minor Reward Capping Config'],
                label: 'Minor Reward Capping Config',
                element: U.Z,
                predicate: () => e6
            },
            [eG.s6.WEB_SETTING_TREE_TOOL]: {
                section: eH.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ['Web Setting Tree Tool'],
                label: 'Web Setting Tree Tool',
                element: ew.Z,
                predicate: () => H.Z.isDeveloper
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
                                    header: eY.intl.string(eY.t['2jxGen']),
                                    confirmText: eY.intl.string(eY.t['2jxGen']),
                                    cancelText: eY.intl.string(eY.t['ETE/oK']),
                                    onCancel: e.onClose,
                                    onConfirm: () => c.Z.logout('settings')
                                },
                                e
                            )),
                            (n = n =
                                {
                                    children: (0, i.jsx)(a.Text, {
                                        variant: 'text-md/normal',
                                        children: eY.intl.string(eY.t.SUnWBA)
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
                label: eY.intl.string(eY.t['2jxGen']),
                ariaLabel: eY.intl.string(eY.t['2jxGen']),
                icon: (0, i.jsx)(a.PBZ, {
                    size: 'xs',
                    color: 'currentColor'
                })
            },
            [eG.s6.SOCIAL_LINKS]: {
                section: p.ID.CUSTOM,
                element: er.Z
            },
            [eG.s6.CLIENT_DEBUG_INFO]: {
                section: p.ID.CUSTOM,
                element: ee.Z
            }
        });
    };
