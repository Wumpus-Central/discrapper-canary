n.d(t, { i: () => e0 }), n(539854), n(388685);
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
    es = n(154022),
    el = n(393681),
    ea = n(309739),
    eo = n(64914),
    ec = n(501348),
    ed = n(795594),
    eu = n(443702),
    em = n(327192),
    eg = n(949493),
    ep = n(675047),
    eh = n(177508),
    ef = n(956699),
    eb = n(54942),
    e_ = n(293389),
    ex = n(88624),
    eE = n(387747),
    ej = n(389650),
    eC = n(649157),
    eO = n(593648),
    eS = n(327885),
    ev = n(595242),
    eT = n(463153),
    eI = n(36192),
    eN = n(889029),
    ey = n(400287),
    eA = n(554042),
    eP = n(936982),
    eR = n(200645),
    eD = n(287490),
    eZ = n(706060),
    ew = n(168308),
    ek = n(277329),
    eL = n(273927),
    eB = n(604224),
    eM = n(43434),
    eU = n(333576),
    eV = n(726985),
    eG = n(583139),
    eF = n(981631),
    eH = n(46140),
    ez = n(65154),
    eY = n(388032),
    eW = n(622802),
    eK = n(332495),
    eq = n(539452);
let eX = () => [s.z.CLIENT_THEMES_SETTINGS_BADGE, s.z.DEKSTOP_CUSTOM_APP_ICON_BADGE],
    eQ = () => {
        let e = [];
        return V.c.getCurrentConfig({ location: 'SettingsRendererConfig' }).enabled && e.push(s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE), A.e.getCurrentConfig({ location: 'SettingsRendererConfig' }).canPurchase && e.push(s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE), e;
    },
    eJ = () => {
        let e = eQ(),
            [t] = (0, T.US)(e);
        return t === s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE ? (0, i.jsx)(R.Z, {}) : t === s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE ? (0, i.jsx)(a.IGR, { text: eY.intl.string(eY.t.y2b7CA) }) : null;
    },
    e$ = eR.Z,
    e0 = (e) => {
        let { unseenGiftCount: t, showPrepaidPaymentPastDueWarning: T, impressionSource: A, numOfPendingFamilyRequests: R, isOverlaySupported: V, isClipsBetaTagShowing: e0 = !1, shouldMergeGameSettings: e1, isKeywordFilteringEnabled: e2, isStaff: e3, isInappropriateConversationWarningEnabled: e6, isInapproprateConversationsDefaultOn: e8, paymentsBlocked: e9, isEligibleForQuests: e4, showGiftNitro: e5, isStricterMessageRequestsEnabled: e7, hasLibraryApplication: te, hasTOTPEnabled: tt, developerMode: tn, isAdultUser: ti, hasSecureFramesVerifiedUserIds: tr, hypeSquadRemoved: ts, hasIgnoredUsers: tl, hasBlockedUsers: ta, useRefreshedVoiceAndVideo: to, isEligibleForSensitiveContentDefaults: tc } = e;
        return Object.freeze({
            [eV.s6.SEARCH_NO_RESULTS]: {
                section: g.ID.CUSTOM,
                element: eT.Z
            },
            [eV.s6.ACCOUNT_SECURITY_TAB]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t.Am9YHh)],
                label: eY.intl.string(eY.t.Am9YHh)
            },
            [eV.s6.ACCOUNT]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t['JAIM/v'])],
                label: eY.intl.string(eY.t['JAIM/v']),
                ariaLabel: eY.intl.string(eY.t['JAIM/v']),
                element: el.Z,
                url: eF.Z5c.SETTINGS('account')
            },
            [eV.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eY.intl.string(eY.t.LYju5O)],
                parent: eV.s6.ACCOUNT,
                section: eF.oAB.ACCOUNT
            },
            [eV.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eY.intl.string(eY.t['9AjdkJ'])],
                section: eF.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PROFILE
            },
            [eV.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eY.intl.string(eY.t.Ulqq6O)],
                section: eF.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PROFILE
            },
            [eV.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [eY.intl.string(eY.t['2UzQiY']), eY.intl.string(eY.t.dJOmCw), eY.intl.string(eY.t['Y0A/1N']), eY.intl.string(eY.t.wRpUfX), eY.intl.string(eY.t['+2/AhI'])],
                section: eF.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PROFILE,
                predicate: () => tc
            },
            [eV.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eY.intl.string(eY.t['+JkHPz'])],
                section: eF.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PROFILE
            },
            [eV.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eY.intl.string(eY.t.oP5zGB)],
                section: eF.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PROFILE
            },
            [eV.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eY.intl.string(eY.t.pKSjEh)],
                section: eF.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT
            },
            [eV.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eY.intl.string(eY.t['FRep5+'])],
                section: eF.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eV.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eY.intl.string(eY.t['7qKDrK'])],
                section: eF.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eY.intl.string(eY.t.m0FidH)],
                section: eF.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eV.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eY.intl.string(eY.t.cDgKtb)],
                section: eF.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !tt
            },
            [eV.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eY.intl.string(eY.t['D+aE7u'])],
                section: eF.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => tt
            },
            [eV.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eY.intl.string(eY.t.fZSi1N)],
                section: eF.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eV.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eY.intl.string(eY.t.uHAJ5u)],
                section: eF.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eV.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eY.intl.string(eY.t.vrOCCg)],
                section: eF.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eV.s6.ACCOUNT_REMOVAL]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t.ZKsIkp)],
                parent: eV.s6.ACCOUNT
            },
            [eV.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t.jf5GGR)],
                parent: eV.s6.ACCOUNT_REMOVAL
            },
            [eV.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t['8lQ2ra'])],
                parent: eV.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [eV.s6.GAMES]: {
                section: eF.oAB.GAMES,
                searchableTitles: [eY.intl.string(eY.t.URyqtL)],
                label: eY.intl.string(eY.t.URyqtL),
                ariaLabel: eY.intl.string(eY.t.URyqtL),
                element: ek.Z,
                predicate: () => e1
            },
            [eV.s6.GAMES_MY_GAMES]: {
                section: eF.oAB.GAMES,
                searchableTitles: [eY.intl.string(eY.t['5DMgp6'])],
                parent: eV.s6.GAMES
            },
            [eV.s6.GAMES_CLIPS]: {
                section: eF.oAB.GAMES,
                searchableTitles: [eY.intl.string(eY.t.z2jK6e)],
                parent: eV.s6.GAMES
            },
            [eV.s6.GAMES_OVERLAY]: {
                section: eF.oAB.GAMES,
                searchableTitles: [eY.intl.string(eY.t['9cb1U1'])],
                parent: eV.s6.GAMES
            },
            [eV.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eF.oAB.GAMES,
                searchableTitles: [eY.intl.string(eY.t.Cq98yM)],
                parent: eV.s6.GAMES
            },
            [eV.s6.PROFILE_CUSTOMIZATION]: {
                section: eF.oAB.PROFILE_CUSTOMIZATION,
                type: g.bT.WIDE,
                searchableTitles: [eY.intl.string(eY.t['vi7f+v'])],
                label: eY.intl.string(eY.t['vi7f+v']),
                ariaLabel: eY.intl.string(eY.t['vi7f+v']),
                element: L.Z,
                newIndicator: (0, i.jsx)(eJ, {}),
                newIndicatorDismissibleContentTypes: [...eQ()],
                notice: {
                    stores: [Y.Z, N.Z],
                    element: k.Z
                },
                onSettingsClose: () => {
                    o.Z.wait(() => {
                        (0, I.It)(), (0, u.P6)(), m.Z.clearSubsection(eF.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eF.Z5c.SETTINGS('profile-customization')
            },
            [eV.s6.PROFILE_DISPLAY_NAME]: {
                section: eF.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eY.intl.string(eY.t['9AjdkJ'])],
                parent: eV.s6.PROFILE_CUSTOMIZATION
            },
            [eV.s6.PROFILE_USER_PROFILE]: {
                section: eF.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eY.intl.string(eY.t['2p07FR']), eY.intl.string(eY.t['7vhiqq'])],
                parent: eV.s6.PROFILE_CUSTOMIZATION
            },
            [eV.s6.PROFILE_SERVER_PROFILES]: {
                section: eF.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eY.intl.string(eY.t.kPHroa)],
                parent: eV.s6.PROFILE_CUSTOMIZATION
            },
            [eV.s6.CONTENT_SOCIAL]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                label: eY.intl.string(eY.t['+o1pDQ']),
                searchableTitles: [eY.intl.string(eY.t['+o1pDQ'])],
                ariaLabel: eY.intl.string(eY.t['+o1pDQ']),
                element: eg.Z,
                url: eF.Z5c.SETTINGS('content-and-social')
            },
            [eV.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t['+o1pDQ']), eY.intl.string(eY.t['/7xJCA'])],
                parent: eV.s6.CONTENT_SOCIAL
            },
            [eV.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t['+o1pDQ']), eY.intl.string(eY.t['/7xJCA'])],
                parent: eV.s6.CONTENT_SOCIAL_DISCORD_TAB
            },
            [eV.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.h1hqj4)],
                parent: eV.s6.CONTENT_SOCIAL
            },
            [eV.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                label: eY.intl.string(eY.t.h1hqj4),
                searchableTitles: [eY.intl.string(eY.t.h1hqj4)],
                ariaLabel: eY.intl.string(eY.t.h1hqj4),
                parent: eV.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eF.Z5c.SETTINGS(eF.oAB.CONTENT_AND_SOCIAL, eG.C)
            },
            [eV.s6.DATA_PRIVACY]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                label: eY.intl.string(eY.t.OAuOHB),
                searchableTitles: [eY.intl.string(eY.t.OAuOHB)],
                ariaLabel: eY.intl.string(eY.t.OAuOHB),
                element: ep.Z,
                url: eF.Z5c.SETTINGS('data-and-privacy')
            },
            [eV.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t['Vov/9v'])],
                parent: eV.s6.ACCOUNT
            },
            [eV.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.WWaFn5)],
                parent: eV.s6.DATA_PRIVACY,
                predicate: () => (0, X.isDesktop)()
            },
            [eV.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t['opi/XF'])],
                parent: eV.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY
            },
            [eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.xVRG4O)],
                parent: eV.s6.CONTENT_SOCIAL_DISCORD
            },
            [eV.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.fyA119)],
                parent: eV.s6.CONTENT_SOCIAL_DISCORD
            },
            [eV.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.fyA119)],
                parent: eV.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY
            },
            [eV.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t['/U8Iwc'])],
                parent: eV.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            },
            [eV.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t['ms+TmZ'])],
                parent: eV.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            },
            [eV.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t['y62Z/f'])],
                parent: eV.s6.CONTENT_SOCIAL
            },
            [eV.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.SRZyHh)],
                parent: eV.s6.DATA_PRIVACY
            },
            [eV.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.uEz8JC), eY.intl.string(eY.t['N/oRIy']), eY.intl.string(eY.t.QVdYsL), eY.intl.string(eY.t['aWD+tr']), eY.intl.string(eY.t['5mnTa2'])],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eV.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.JzaP4u), eY.intl.string(eY.t.H9XOl5), eY.intl.string(eY.t.k4W40N)],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eV.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t['L+yTsb'])],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eV.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.XahVjo)],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eV.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                parent: eV.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY
            },
            [eV.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.RAQUSE), eY.intl.string(eY.t.wbYDfX)],
                parent: eV.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eV.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t['3o2ojo'])],
                parent: eV.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !e7
            },
            [eV.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.OLwZDQ)],
                parent: eV.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eV.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.wBkwu7)],
                parent: eV.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eV.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.XuADY2)],
                parent: eV.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eV.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.MNKzys)],
                parent: eV.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eV.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.VkS7YW)],
                parent: eV.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eV.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eV.CF],
                parent: eV.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eV.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.dmBSKi)],
                parent: eV.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY
            },
            [eV.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t['1UaUy8']), eY.intl.string(eY.t['xIk/iI'])],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e2
            },
            [eV.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.qFsx5u)],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e6 && !ti && !e8
            },
            [eV.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t['5b3FND'])],
                parent: eV.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => tr
            },
            [eV.s6.PRIVACY_FAMILY_CENTER]: {
                section: eF.oAB.FAMILY_CENTER,
                searchableTitles: [eY.intl.string(eK.default.gntCQU)],
                label: eY.intl.string(eK.default.gntCQU),
                ariaLabel: eY.intl.string(eK.default.gntCQU),
                element: eb.Z,
                badgeCount: R,
                newIndicator: (0, i.jsx)(a.IGR, {
                    text: eY.intl.string(eY.t.y2b7CA),
                    color: O.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [s.z.FAMILY_CENTER_NEW_BADGE],
                url: eF.Z5c.SETTINGS('family-center')
            },
            [eV.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.BG7Qsb)],
                parent: eV.s6.DATA_PRIVACY
            },
            [eV.s6.AUTHORIZED_APPS]: {
                section: eF.oAB.AUTHORIZED_APPS,
                searchableTitles: [eY.intl.string(eY.t['f6kk+v'])],
                label: eY.intl.string(eY.t['f6kk+v']),
                element: ed.Z,
                url: eF.Z5c.SETTINGS('authorized-apps')
            },
            [eV.s6.SESSIONS]: {
                section: eF.oAB.SESSIONS,
                searchableTitles: [eY.intl.string(eY.t['+1h0k5'])],
                label: eY.intl.string(eY.t['+1h0k5']),
                ariaLabel: eY.intl.string(eY.t['+1h0k5']),
                element: eI.Z,
                newIndicatorDismissibleContentTypes: [s.z.AUTH_SESSIONS_NEW],
                impressionName: r.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: A }
            },
            [eV.s6.CONNECTIONS]: {
                section: eF.oAB.CONNECTIONS,
                searchableTitles: [eY.intl.string(eY.t['3fe7U1'])],
                label: eY.intl.string(eY.t['3fe7U1']),
                ariaLabel: eY.intl.string(eY.t['3fe7U1']),
                element: em.Z,
                impressionName: r.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: A },
                newIndicatorDismissibleContentTypes: [s.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eF.Z5c.SETTINGS('connections')
            },
            [eV.s6.THIRD_PARTY_ACCESS]: {
                section: eF.oAB.CONNECTIONS,
                searchableTitles: [eY.intl.string(eY.t['Ig/XFR']), eY.intl.string(eY.t['3fe7U1']), eY.intl.string(eY.t['f6kk+v'])],
                label: eY.intl.string(eY.t['Ig/XFR']),
                parent: eV.s6.CONNECTIONS,
                element: eP.Z
            },
            [eV.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eF.oAB.CONNECTIONS,
                searchableTitles: [eY.intl.string(eY.t['+/hZMz'])],
                parent: eV.s6.CONNECTIONS,
                element: em.Z
            },
            [eV.s6.CLIPS]: {
                section: eF.oAB.CLIPS,
                searchableTitles: [eY.intl.string(eY.t.z2jK6e)],
                label: eY.intl.string(eY.t.z2jK6e),
                ariaLabel: eY.intl.string(eY.t.z2jK6e),
                icon: e0 ? (0, i.jsx)(j.Z, {}) : void 0,
                element: C.Z,
                predicate: () => !e1,
                url: eF.Z5c.SETTINGS('clips')
            },
            [eV.s6.RESTRICTED_USERS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                parent: eV.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eY.intl.string(eY.t['3wRorq']),
                element: eL.ZP,
                predicate: () => tl || ta
            },
            [eV.s6.BLOCKED_USERS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                parent: eV.s6.RESTRICTED_USERS,
                label: eY.intl.string(eY.t.PFOUKS),
                searchableTitles: [eY.intl.string(eY.t.PFOUKS)],
                element: eL.GF,
                predicate: () => ta
            },
            [eV.s6.IGNORED_USERS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                parent: eV.s6.RESTRICTED_USERS,
                searchableTitles: [eY.intl.string(eY.t['93ZDWF'])],
                label: eY.intl.string(eY.t['93ZDWF']),
                element: eL.yo,
                predicate: () => tl
            },
            [eV.s6.PREMIUM]: {
                section: eF.oAB.PREMIUM,
                ariaLabel: eY.intl.string(eY.t.Ipxkoq),
                searchableTitles: [eY.intl.string(eY.t.Ipxkoq)],
                label: eY.intl.string(eY.t.Ipxkoq),
                element: en.Z,
                className: eq.premiumTab
            },
            [eV.s6.GUILD_BOOSTING]: {
                section: eF.oAB.GUILD_BOOSTING,
                searchableTitles: [eY.intl.string(eY.t['+CbP2t'])],
                label: eY.intl.string(eY.t['+CbP2t']),
                element: ev.Z
            },
            [eV.s6.SUBSCRIPTIONS]: {
                section: eF.oAB.SUBSCRIPTIONS,
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
            [eV.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eF.oAB.SUBSCRIPTIONS,
                searchableTitles: [eY.intl.string(eY.t['2GKrvr'])],
                parent: eV.s6.SUBSCRIPTIONS
            },
            [eV.s6.GIFT_INVENTORY]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t['jcSP+v'])],
                label: eY.intl.string(eY.t['jcSP+v']),
                element: eE.Z,
                ariaLabel: eY.intl.string(eY.t['jcSP+v']),
                badgeCount: t
            },
            [eV.s6.GIFT_NITRO]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t.Ve9Ge3)],
                parent: eV.s6.GIFT_INVENTORY,
                predicate: () => !e9 && e5
            },
            [eV.s6.GIFT_CODE_REDEMPTION]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t['il+VCg'])],
                parent: eV.s6.GIFT_INVENTORY,
                predicate: () => !e9
            },
            [eV.s6.GIFT_INVENTORY_QUESTS]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t.JALI2N)],
                parent: eV.s6.GIFT_INVENTORY,
                predicate: () => e4
            },
            [eV.s6.GIFT_INVENTORY_LIST]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t['9KeUbW'])],
                parent: eV.s6.GIFT_INVENTORY,
                predicate: () => !e9
            },
            [eV.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t.vwMEHR)],
                parent: eV.s6.GIFT_INVENTORY,
                predicate: () => e9
            },
            [eV.s6.BILLING]: {
                section: eF.oAB.BILLING,
                searchableTitles: [eY.intl.string(eY.t.oeUm2t)],
                label: eY.intl.string(eY.t.oeUm2t),
                ariaLabel: eY.intl.string(eY.t.oeUm2t),
                element: eu.Z
            },
            [eV.s6.BILLING_PAYMENT_METHODS]: {
                section: eF.oAB.BILLING,
                searchableTitles: [eY.intl.string(eY.t.W26xGR)],
                parent: eV.s6.BILLING
            },
            [eV.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eF.oAB.BILLING,
                searchableTitles: [eY.intl.string(eY.t.obLrcH)],
                parent: eV.s6.BILLING
            },
            [eV.s6.APPEARANCE]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t['iHH+k5'])],
                label: eY.intl.string(eY.t['iHH+k5']),
                ariaLabel: eY.intl.string(eY.t['iHH+k5']),
                element: ec.Z,
                newIndicator: (0, i.jsx)(a.lBU, { text: eY.intl.string(eY.t.y2b7CA) }),
                newIndicatorDismissibleContentTypes: eX(),
                url: eF.Z5c.SETTINGS('appearance')
            },
            [eV.s6.APPEARANCE_THEME]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.Ksh3io)],
                parent: eV.s6.APPEARANCE
            },
            [eV.s6.APPEARANCE_COLOR]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.OCOOiI)],
                parent: eV.s6.APPEARANCE_THEME
            },
            [eV.s6.APPEARANCE_ICON]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.RPh2oq)],
                parent: eV.s6.APPEARANCE_THEME
            },
            [eV.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.ZEoGMT)],
                parent: eV.s6.APPEARANCE
            },
            [eV.s6.APPEARANCE_LIST_SPACING]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: ['List Spacing'],
                parent: eV.s6.APPEARANCE,
                newIndicator: (0, i.jsx)(a.IGR, {
                    text: eY.intl.string(eY.t.y2b7CA),
                    color: O.Z.BG_BRAND
                }),
                predicate: () => (0, S.i9)('SettingsRendererConfig')
            },
            [eV.s6.APPEARANCE_SCALING_SPACING]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.qPOqoK)],
                parent: eV.s6.APPEARANCE
            },
            [eV.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.dyamEB), eY.intl.string(eY.t.p8NOws), eY.intl.string(eY.t['+o/sOj'])],
                parent: eV.s6.APPEARANCE,
                predicate: () => G.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable24HourPref
            },
            [eV.s6.ACCESSIBILITY]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.G0neg4)],
                label: eY.intl.string(eY.t.G0neg4),
                ariaLabel: eY.intl.string(eY.t.G0neg4),
                element: es.Z,
                url: eF.Z5c.SETTINGS('accessibility')
            },
            [eV.s6.ACCESSIBILITY_SATURATION]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t['5PWWCQ'])],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.bQCodH)],
                parent: eV.s6.ACCESSIBILITY_SATURATION
            },
            [eV.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.OLZFBw)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.uSOPWl)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_TAGS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.UQt6dX)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_TAGS_NAMES]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.UPwh1N)],
                parent: eV.s6.ACCESSIBILITY_TAGS
            },
            [eV.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.BT8Bmp)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t['sSY+mJ'])],
                parent: eV.s6.ACCESSIBILITY_PROFILE_COLORS
            },
            [eV.s6.ACCESSIBILITY_CONTRAST]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.TYyfOz)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.cguieX)],
                parent: eV.s6.ACCESSIBILITY_CONTRAST
            },
            [eV.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.e3TR1d)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.b3XBzs)],
                parent: eV.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eV.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.Iayoh4)],
                parent: eV.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eV.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.iIaOlZ)],
                parent: eV.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eV.s6.ACCESSIBILITY_STICKERS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t['6NtAuL'])],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_MESSAGES]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.onqU6u)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t['3Fztn5'])],
                parent: eV.s6.ACCESSIBILITY_MESSAGES
            },
            [eV.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.TZ2hZG)],
                parent: eV.s6.ACCESSIBILITY_MESSAGES
            },
            [eV.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.VpSKeH)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.qvTIwc)],
                parent: eV.s6.ACCESSIBILITY_TEXT_TO_SPEECH
            },
            [eV.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.lsW5Eh)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eV.CF],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.VOICE_AND_VIDEO]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.B1fFpa)],
                label: eY.intl.string(eY.t.B1fFpa),
                ariaLabel: eY.intl.string(eY.t.B1fFpa),
                element: eB.Z,
                predicate: () => z.Z.isSupported(),
                url: eF.Z5c.SETTINGS('voice')
            },
            [eV.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.K3lovL), eY.intl.string(eY.t.NiTd0d)],
                parent: eV.s6.VOICE_AND_VIDEO,
                predicate: () => to
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.FlNoSU)],
                parent: eV.s6.VOICE_AND_VIDEO,
                predicate: () => to
            },
            [eV.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.ABjMWF)],
                parent: eV.s6.VOICE_AND_VIDEO,
                predicate: () => to
            },
            [eV.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.OFpL3d)],
                parent: eV.s6.VOICE_AND_VIDEO,
                predicate: () => to
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.KDdjoq), eY.intl.string(eY.t.FeUKeH)],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => to
            },
            [eV.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.K3lovL), eY.intl.string(eY.t.NiTd0d)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VOICE_TAB : eV.s6.VOICE_AND_VIDEO
            },
            [eV.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.hHMYbW), eY.intl.string(eY.t.dl18zc), eY.intl.string(eY.t.nuFtHB), eY.intl.string(eY.t['3182VF']), eY.intl.string(eY.t['DGq/PT'])],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE
            },
            [eV.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.OX2Bnp), eY.intl.string(eY.t.eATD2N), eY.intl.string(eY.t.nuFtHB), eY.intl.string(eY.t['3182VF']), eY.intl.string(eY.t['DGq/PT'])],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE
            },
            [eV.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.gyljWF), eY.intl.string(eY.t.nuFtHB)],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE
            },
            [eV.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['pS+K2N']), eY.intl.string(eY.t.nuFtHB)],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE
            },
            [eV.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['sqUm+v']), eY.intl.string(eY.t.nuFtHB)],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => z.Z.getMode() === ez.pM.VOICE_ACTIVITY
            },
            [eV.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.e7LIiY)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eV.s6.VOICE_AND_VIDEO
            },
            [eV.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.nzUc3N)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB : eV.s6.VOICE_AND_VIDEO
            },
            [eV.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.ABjMWF)],
                parent: eV.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eV.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.nzUc3N)],
                parent: eV.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.LKzQSE)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VIDEO_TAB : eV.s6.VOICE_AND_VIDEO
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.F122Gx)],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => z.Z.supports(ez.AN.VIDEO)
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['3Ppr1t'])],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO_CAMERA
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.lZTUPj)],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => z.Z.supports(ez.AN.VIDEO)
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['8/udY2'])],
                parent: eV.s6.VOICE_AND_VIDEO
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['8/udY2'])],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => to
            },
            [eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['8/udY2'])],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE_TAB,
                predicate: () => to
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.DSGme3)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => !to
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.Tceiq6)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED : eV.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['71Ve19'])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => z.Z.supports(ez.AN.OPEN_H264)
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.Sln58f)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.AxnPm5)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== Q.ZP.releaseChannel && z.Z.isExperimentalEncodersSupported()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['6I6GUl'])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.iWTwu7)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['/jwMtr'])],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eV.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.OBwCXF)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.t8QhiY), eY.intl.string(eY.t.hmfkCg)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => z.Z.isNoiseSuppressionSupported()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.BbESsr)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => z.Z.isAdvancedVoiceActivitySupported()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.cUMdHx)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => z.Z.isAutomaticGainControlSupported()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.uancuL)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eV.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => z.Z.supports(ez.AN.QOS)
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.oSdBvb)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eV.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => z.Z.supports(ez.AN.ATTENUATION)
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.wVBHr6)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eV.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => z.Z.supports(ez.AN.LEGACY_AUDIO_SUBSYSTEM) || z.Z.supports(ez.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.KDdjoq), eY.intl.string(eY.t.NMCIf3), eY.intl.string(eY.t.FeUKeH)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eV.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => z.Z.supportsVideoHook() || z.Z.supportsExperimentalSoundshare() || (z.Z.supportsSystemScreensharePicker() && (0, X.isMac)())
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.GmWk2N), eY.intl.string(eY.t['Fj/xn5'])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => z.Z.supportsVideoHook()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['4I0qzc'])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => z.Z.supportsExperimentalSoundshare()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.ie1mgY)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => z.Z.supportsSystemScreensharePicker() && (0, X.isMac)()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['aP1N/v'])],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eV.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => X.isPlatformEmbedded
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.OFpL3d)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_DEBUG_TAB : eV.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['0CEP6e'])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => J.Sb.getSetting()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['r6K+TE'])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => z.Z.isAecDumpSupported()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.U4FgFB)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === Q.ZP.releaseChannel || 'development' === Q.ZP.releaseChannel) && e3 && z.Z.supports(ez.AN.CONNECTION_REPLAY)
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['726JHB'])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => X.isPlatformEmbedded && z.Z.supports(ez.AN.DEBUG_LOGGING) && null != p.Z.fileManager.readLogFiles
            },
            [eV.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t['/RXu6+'])],
                parent: to ? eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING : eV.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eV.s6.CLICKER_GAME]: {
                url: eF.Z5c.SETTINGS('clicker-game'),
                section: eF.oAB.CLICKER_GAME,
                searchableTitles: [eY.intl.string(eW.default['7qZdOz'])],
                label: eY.intl.string(eW.default['7qZdOz']),
                ariaLabel: eY.intl.string(eW.default['7qZdOz']),
                element: E.Z,
                predicate: () => x.C.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enableGame,
                icon: (0, i.jsx)('img', {
                    alt: '',
                    src: n(186542),
                    className: eq.clickerGameIcon
                })
            },
            [eV.s6.POGGERMODE]: {
                section: eF.oAB.POGGERMODE,
                searchableTitles: [eY.intl.string(eY.t.AtCukJ)],
                label: eY.intl.string(eY.t.AtCukJ),
                ariaLabel: eY.intl.string(eY.t.AtCukJ),
                element: Z.Z,
                predicate: () => D.Z.settingsVisible,
                icon: (0, i.jsx)('img', {
                    alt: '',
                    src: n(348621),
                    className: eq.poggermodeIcon
                })
            },
            [eV.s6.CHAT]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t['/VQax8'])],
                label: eY.intl.string(eY.t['/VQax8']),
                ariaLabel: eY.intl.string(eY.t['/VQax8']),
                element: ey.Z,
                url: eF.Z5c.SETTINGS('chat')
            },
            [eV.s6.CHAT_INLINE_MEDIA]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.U68Dgo)],
                parent: eV.s6.CHAT
            },
            [eV.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.U47N1t)],
                parent: eV.s6.CHAT_INLINE_MEDIA
            },
            [eV.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.VP11Nj)],
                parent: eV.s6.CHAT_INLINE_MEDIA
            },
            [eV.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t['5S2AKy'])],
                parent: eV.s6.CHAT_INLINE_MEDIA
            },
            [eV.s6.CHAT_EMBEDS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.PWZOn5)],
                parent: eV.s6.CHAT
            },
            [eV.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.xX0ZTE)],
                parent: eV.s6.CHAT_EMBEDS
            },
            [eV.s6.CHAT_EMOJI]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.sMOuub)],
                parent: eV.s6.CHAT
            },
            [eV.s6.CHAT_EMOJI_REACTIONS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.Iv24sr)],
                parent: eV.s6.CHAT_EMOJI
            },
            [eV.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t['79qal5'])],
                parent: eV.s6.CHAT_EMOJI
            },
            [eV.s6.CHAT_STICKERS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t['6NtAuL'])],
                parent: eV.s6.CHAT
            },
            [eV.s6.CHAT_STICKERS_SUGGESTIONS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t['479+PT'])],
                parent: eV.s6.CHAT_STICKERS
            },
            [eV.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t['29xPVV'])],
                parent: eV.s6.CHAT_STICKERS
            },
            [eV.s6.CHAT_SOUNDMOJI]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.EHlAMT)],
                parent: eV.s6.CHAT
            },
            [eV.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t['CtYr+f'])],
                parent: eV.s6.CHAT_SOUNDMOJI
            },
            [eV.s6.CHAT_TEXT_BOX]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.afR0pK)],
                parent: eV.s6.CHAT
            },
            [eV.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.AqGrEB)],
                parent: eV.s6.CHAT_TEXT_BOX
            },
            [eV.s6.CHAT_THREADS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.B2panJ)],
                parent: eV.s6.CHAT
            },
            [eV.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.AInv5u)],
                parent: eV.s6.CHAT_THREADS
            },
            [eV.s6.CHAT_SPOILERS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.QgwmV1)],
                parent: eV.s6.CHAT
            },
            [eV.s6.NOTIFICATIONS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.HcoRu7)],
                label: eY.intl.string(eY.t.HcoRu7),
                ariaLabel: eY.intl.string(eY.t.HcoRu7),
                element: eO.Z,
                url: eF.Z5c.SETTINGS('notifications')
            },
            [eV.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t['/0WClp'])],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.VH8AIC)],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.xSmFQE)],
                parent: eV.s6.NOTIFICATIONS,
                predicate: () => (0, X.isWindows)()
            },
            [eV.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.z21l8P)],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: ['New Notification Settings (Advanced, Staff Only)'],
                parent: eV.s6.NOTIFICATIONS,
                predicate: () => !1
            },
            [eV.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: ['Restore most recent snapshot'],
                parent: eV.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eV.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: ['Launch Migration'],
                parent: eV.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eV.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: ['Toggle new system on/off'],
                parent: eV.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eV.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.TTvjd3)],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.VpSKeH)],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.D9yVAA)],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.u6dc5O)],
                parent: eV.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eV.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.P8MG6u)],
                parent: eV.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eV.s6.NOTIFICATIONS_SOUNDS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.MKWyKS)],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_EMAILS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.TPchzM)],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t['B75+xc'])],
                parent: eV.s6.NOTIFICATIONS_EMAILS
            },
            [eV.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.sxn7lZ)],
                parent: eV.s6.NOTIFICATIONS_EMAILS
            },
            [eV.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.EkxXhY)],
                parent: eV.s6.NOTIFICATIONS_EMAILS
            },
            [eV.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.jNrkrK)],
                parent: eV.s6.NOTIFICATIONS_EMAILS
            },
            [eV.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.E8g1l5)],
                parent: eV.s6.NOTIFICATIONS_EMAILS
            },
            [eV.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.Ra9Pws)],
                parent: eV.s6.NOTIFICATIONS_EMAILS
            },
            [eV.s6.NOTIFICATIONS_REACTIONS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.Rq0NFh)],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.KEYBINDS]: {
                section: eF.oAB.KEYBINDS,
                searchableTitles: [eY.intl.string(eY.t.T9DA2N)],
                label: eY.intl.string(eY.t.T9DA2N),
                element: ej.Z,
                url: eF.Z5c.SETTINGS('keybinds')
            },
            [eV.s6.LANGUAGE]: {
                section: eF.oAB.LOCALE,
                searchableTitles: [eY.intl.string(eY.t.IHMsPj)],
                label: eY.intl.string(eY.t.IHMsPj),
                element: eC.Z,
                url: eF.Z5c.SETTINGS('language')
            },
            [eV.s6.WINDOW_SETTINGS]: {
                section: eF.oAB.WINDOWS,
                searchableTitles: [eY.intl.string(eY.t.ZkDZoq)],
                label: eY.intl.string(eY.t.ZkDZoq),
                element: eR.Z,
                predicate: () => X.isPlatformEmbedded && (0, X.isWindows)()
            },
            [eV.s6.LINUX_SETTINGS]: {
                section: eF.oAB.LINUX,
                searchableTitles: [eY.intl.string(eY.t['7pPjTU'])],
                label: eY.intl.string(eY.t['7pPjTU']),
                element: e$,
                predicate: () => X.isPlatformEmbedded && (0, X.isLinux)()
            },
            [eV.s6.STREAMER_MODE]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.S5GfOT)],
                label: eY.intl.string(eY.t.S5GfOT),
                ariaLabel: eY.intl.string(eY.t.S5GfOT),
                element: eN.Z,
                url: eF.Z5c.SETTINGS('streamer-mode')
            },
            [eV.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.bxGbHB)],
                parent: eV.s6.STREAMER_MODE
            },
            [eV.s6.STREAMER_MODE_ENABLE]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.p9ZAJS)],
                parent: eV.s6.STREAMER_MODE
            },
            [eV.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.UpQziI)],
                parent: eV.s6.STREAMER_MODE
            },
            [eV.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.q7WNGh)],
                parent: eV.s6.STREAMER_MODE
            },
            [eV.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t['1CWknJ'])],
                parent: eV.s6.STREAMER_MODE
            },
            [eV.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.qmYiYW)],
                parent: eV.s6.STREAMER_MODE
            },
            [eV.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t['iA81+f'])],
                parent: eV.s6.STREAMER_MODE,
                predicate: () => {
                    var e, t, n;
                    return null != (n = null === p.Z || void 0 === p.Z || null == (t = p.Z.window) || null == (e = t.supportsContentProtection) ? void 0 : e.call(t)) && n;
                }
            },
            [eV.s6.SETTINGS_ADVANCED]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t['8/udY2'])],
                label: eY.intl.string(eY.t['8/udY2']),
                ariaLabel: eY.intl.string(eY.t['8/udY2']),
                element: eo.Z
            },
            [eV.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t.ObIb1d)],
                parent: eV.s6.SETTINGS_ADVANCED,
                predicate: () => K.wS
            },
            [eV.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t['eOC/Fx'])],
                parent: eV.s6.SETTINGS_ADVANCED,
                predicate: () => X.isPlatformEmbedded
            },
            [eV.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t.fi3UQE)],
                parent: eV.s6.SETTINGS_ADVANCED,
                predicate: () => te
            },
            [eV.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t.erOqlp)],
                parent: eV.s6.SETTINGS_ADVANCED,
                predicate: () => tn
            },
            [eV.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t.qDZryM)],
                parent: eV.s6.SETTINGS_ADVANCED
            },
            [eV.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: ['CF WARP', 'CloudFlare WARP'],
                parent: eV.s6.SETTINGS_ADVANCED,
                predicate: () => b.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable
            },
            [eV.s6.ACTIVITY_PRIVACY]: {
                section: eF.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.Cq98yM)],
                label: eY.intl.string(eY.t.Cq98yM),
                ariaLabel: eY.intl.string(eY.t.Cq98yM),
                element: ea.Z,
                predicate: () => !e1,
                url: eF.Z5c.SETTINGS('activity-privacy')
            },
            [eV.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: e1 ? eF.oAB.GAMES : eF.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t['8ka8lp'])],
                parent: e1 ? eV.s6.GAMES_ACTIVITY_PRIVACY : eV.s6.ACTIVITY_PRIVACY
            },
            [eV.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: e1 ? eF.oAB.GAMES : eF.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.VOszPD)],
                parent: e1 ? eV.s6.GAMES_ACTIVITY_PRIVACY : eV.s6.ACTIVITY_PRIVACY
            },
            [eV.s6.ACTIVITY_PRIVACY_TOS]: {
                section: e1 ? eF.oAB.GAMES : eF.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eV.CF],
                parent: e1 ? eV.s6.GAMES_ACTIVITY_PRIVACY : eV.s6.ACTIVITY_PRIVACY
            },
            [eV.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eF.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t['4F2KoK'])],
                parent: eV.s6.ACTIVITY_PRIVACY
            },
            [eV.s6.REGISTERED_GAMES]: {
                section: eF.oAB.REGISTERED_GAMES,
                searchableTitles: [eY.intl.string(eY.t.AVDyEh)],
                label: eY.intl.string(eY.t.AVDyEh),
                element: e_.Z,
                predicate: () => !e1 && (0, ew.Jw)()
            },
            [eV.s6.OVERLAY]: {
                section: eF.oAB.OVERLAY,
                searchableTitles: [eY.intl.string(eY.t['9cb1U1']), eY.intl.string(eY.t.HcoRu7)],
                label: eY.intl.string(eY.t['9cb1U1']),
                element: eS.Z,
                predicate: () => !e1 && V
            },
            [eV.s6.CHANGELOG]: {
                section: 'changelog',
                onClick: () => (0, _.Z)(!0),
                searchableTitles: [eY.intl.string(eY.t.LRmNAg)],
                label: eY.intl.string(eY.t.LRmNAg)
            },
            [eV.s6.MERCHANDISE]: {
                section: 'merchandise',
                onClick: () => {
                    let e = 'https://discordmerch.com/Dsktopprm';
                    W.default.track(eF.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, q.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                W.default.track(eF.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, h.Z)(e);
                            }
                        });
                },
                searchableTitles: [eY.intl.string(eY.t.sMEktb)],
                label: eY.intl.string(eY.t.sMEktb),
                ariaLabel: eY.intl.string(eY.t.sMEktb)
            },
            [eV.s6.HYPESQUAD]: {
                section: eF.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eY.intl.string(eY.t['k0R+4e'])],
                label: eY.intl.string(eY.t['k0R+4e']),
                element: ex.Z,
                predicate: () => !ts
            },
            [eV.s6.TOWNHALL]: {
                section: eF.oAB.TOWNHALL,
                searchableTitles: [eY.intl.string(eY.t.dnZNER)],
                label: eY.intl.string(eY.t.dnZNER),
                predicate: () => ts,
                onClick: () => {
                    (0, h.Z)('https://discord.gg/discord-townhall'), (0, d.xf)();
                }
            },
            [eV.s6.EXPERIMENTS]: {
                section: eF.oAB.EXPERIMENTS,
                searchableTitles: ['Experiments'],
                label: 'Experiments',
                element: eD.Z,
                predicate: () => F.Z.isDeveloper,
                url: eF.Z5c.SETTINGS('experiments')
            },
            [eV.s6.DEVELOPER_OPTIONS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: ef.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_FLAGS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Always deliver ads'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e3 && F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e3 && F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Accessibility Auditing'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => !1
            },
            [eV.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['CSS Debugging'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e3 && F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e3 && F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e3 && F.Z.isDeveloper && H.default.layoutDebuggingEnabled
            },
            [eV.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e3 && F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Disable App Collections Cache'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e3 && F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: eV.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: eV.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => f.q && F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Prevent Popouts From Closing Automatically'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.HOTSPOT_OPTIONS]: {
                section: eF.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: ee.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eF.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: v.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.PAYMENT_FLOW_MODALS]: {
                section: eF.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: et.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.REVENUE_STORYBOOK]: {
                section: eF.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Revenue Storybook', 'Payment Components', 'Orb Components', 'Virtual Currency'],
                label: 'Revenue Storybook',
                element: eM.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eF.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ['Virtual Currency', 'Orb', 'Config'],
                label: 'Virtual Currency Config',
                element: eU.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.PAYMENT_COMPONENTS]: {
                section: eF.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Payment Components'],
                label: 'Payment Components',
                element: eM.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.ORB_COMPONENTS]: {
                section: eF.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Orb Components'],
                label: 'Orb Components',
                element: eM.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.TEXT_PLAYGROUND]: {
                section: eF.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: eA.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DESIGN_SYSTEMS]: {
                section: eF.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: eh.Z,
                predicate: () => F.Z.isDeveloper,
                url: eF.Z5c.SETTINGS('design-systems')
            },
            [eV.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eF.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Colors'],
                label: 'Colors',
                element: eh.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.ANIMATION_TESTING]: {
                section: eF.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Animation Testing'],
                label: 'Animation Testing',
                element: eh.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eF.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Components'],
                label: 'Components',
                element: eh.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.TEXT_COMPONENTS]: {
                section: eF.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: er.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.INTL_TESTING]: {
                section: eF.oAB.INTL_TESTING,
                searchableTitles: ['Intl Testing', 'i18n'],
                label: 'Intl Testing',
                element: y.Z,
                predicate: () => e3 || F.Z.isDeveloper
            },
            [eV.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
                section: eF.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
                searchableTitles: ['PFX Editor'],
                label: 'PFX Editor',
                element: B.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.NAMEPLATES_PREVIEW_TOOL]: {
                section: eF.oAB.NAMEPLATES_PREVIEW_TOOL,
                searchableTitles: ['Nameplates Preview Tool'],
                label: 'Nameplates Preview Tool',
                element: P.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.QUEST_PREVIEW_TOOL]: {
                section: eF.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: U.Z,
                predicate: () => (0, M.X7)({ location: eH.dr.QUEST_PREVIEW_TOOL })
            },
            [eV.s6.WEB_SETTING_TREE_TOOL]: {
                section: eF.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ['Web Setting Tree Tool'],
                label: 'Web Setting Tree Tool',
                element: eZ.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eV.s6.LOGOUT]: {
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
            [eV.s6.SOCIAL_LINKS]: {
                section: g.ID.CUSTOM,
                element: ei.Z
            },
            [eV.s6.CLIENT_DEBUG_INFO]: {
                section: g.ID.CUSTOM,
                element: $.Z
            }
        });
    };
