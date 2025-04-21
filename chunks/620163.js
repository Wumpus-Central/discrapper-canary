n.d(t, { i: () => e2 }), n(539854), n(388685);
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
    G = n(87478),
    F = n(145158),
    H = n(906467),
    z = n(857192),
    Y = n(131951),
    W = n(25990),
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
    el = n(601433),
    ea = n(154022),
    eo = n(393681),
    ec = n(309739),
    ed = n(64914),
    eu = n(501348),
    em = n(795594),
    eg = n(443702),
    ep = n(327192),
    eh = n(949493),
    ef = n(675047),
    eb = n(177508),
    e_ = n(956699),
    ex = n(54942),
    eE = n(293389),
    ej = n(88624),
    eC = n(387747),
    eO = n(389650),
    eS = n(649157),
    ev = n(593648),
    eT = n(327885),
    eI = n(595242),
    eN = n(463153),
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
    eF = n(726985),
    eH = n(583139),
    ez = n(981631),
    eY = n(46140),
    eW = n(65154),
    eK = n(388032),
    eq = n(622802),
    eX = n(332495),
    eQ = n(539452);
let eJ = () => [s.z.CLIENT_THEMES_SETTINGS_BADGE, s.z.DEKSTOP_CUSTOM_APP_ICON_BADGE],
    e$ = () => {
        let e = [];
        return V.c.getCurrentConfig({ location: 'SettingsRendererConfig' }).enabled && e.push(s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE), A.e.getCurrentConfig({ location: 'SettingsRendererConfig' }).canPurchase && e.push(s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE), e;
    },
    e0 = () => {
        let e = e$(),
            [t] = (0, T.US)(e);
        return t === s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE ? (0, i.jsx)(R.Z, {}) : t === s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE ? (0, i.jsx)(G.Z, {}) : null;
    },
    e1 = eZ.Z,
    e2 = (e) => {
        let { unseenGiftCount: t, showPrepaidPaymentPastDueWarning: T, impressionSource: A, numOfPendingFamilyRequests: R, isOverlaySupported: V, isClipsBetaTagShowing: G = !1, shouldMergeGameSettings: e2, isKeywordFilteringEnabled: e3, isStaff: e6, isInappropriateConversationWarningEnabled: e8, isInapproprateConversationsDefaultOn: e9, paymentsBlocked: e4, isEligibleForQuests: e5, showGiftNitro: e7, isStricterMessageRequestsEnabled: te, hasLibraryApplication: tt, hasTOTPEnabled: tn, developerMode: ti, isAdultUser: tr, hasSecureFramesVerifiedUserIds: ts, hypeSquadRemoved: tl, hasIgnoredUsers: ta, hasBlockedUsers: to, useRefreshedVoiceAndVideo: tc, isEligibleForSensitiveContentDefaults: td } = e;
        return Object.freeze({
            [eF.s6.SEARCH_NO_RESULTS]: {
                section: g.ID.CUSTOM,
                element: eN.Z
            },
            [eF.s6.ACCOUNT_SECURITY_TAB]: {
                section: ez.oAB.ACCOUNT,
                searchableTitles: [eK.intl.string(eK.t.Am9YHh)],
                label: eK.intl.string(eK.t.Am9YHh)
            },
            [eF.s6.ACCOUNT]: {
                section: ez.oAB.ACCOUNT,
                searchableTitles: [eK.intl.string(eK.t['JAIM/v'])],
                label: eK.intl.string(eK.t['JAIM/v']),
                ariaLabel: eK.intl.string(eK.t['JAIM/v']),
                element: eo.Z,
                url: ez.Z5c.SETTINGS('account')
            },
            [eF.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eK.intl.string(eK.t.LYju5O)],
                parent: eF.s6.ACCOUNT,
                section: ez.oAB.ACCOUNT
            },
            [eF.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eK.intl.string(eK.t['9AjdkJ'])],
                section: ez.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PROFILE
            },
            [eF.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eK.intl.string(eK.t.Ulqq6O)],
                section: ez.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PROFILE
            },
            [eF.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [eK.intl.string(eK.t['2UzQiY']), eK.intl.string(eK.t.dJOmCw), eK.intl.string(eK.t['Y0A/1N']), eK.intl.string(eK.t.wRpUfX), eK.intl.string(eK.t['+2/AhI'])],
                section: ez.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PROFILE,
                predicate: () => td
            },
            [eF.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eK.intl.string(eK.t['+JkHPz'])],
                section: ez.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PROFILE
            },
            [eF.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eK.intl.string(eK.t.oP5zGB)],
                section: ez.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PROFILE
            },
            [eF.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eK.intl.string(eK.t.pKSjEh)],
                section: ez.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT
            },
            [eF.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eK.intl.string(eK.t['FRep5+'])],
                section: ez.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eF.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eK.intl.string(eK.t['7qKDrK'])],
                section: ez.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eK.intl.string(eK.t.m0FidH)],
                section: ez.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eF.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eK.intl.string(eK.t.cDgKtb)],
                section: ez.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !tn
            },
            [eF.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eK.intl.string(eK.t['D+aE7u'])],
                section: ez.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => tn
            },
            [eF.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eK.intl.string(eK.t.fZSi1N)],
                section: ez.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eF.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eK.intl.string(eK.t.uHAJ5u)],
                section: ez.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eF.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eK.intl.string(eK.t.vrOCCg)],
                section: ez.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eF.s6.ACCOUNT_REMOVAL]: {
                section: ez.oAB.ACCOUNT,
                searchableTitles: [eK.intl.string(eK.t.ZKsIkp)],
                parent: eF.s6.ACCOUNT
            },
            [eF.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: ez.oAB.ACCOUNT,
                searchableTitles: [eK.intl.string(eK.t.jf5GGR)],
                parent: eF.s6.ACCOUNT_REMOVAL
            },
            [eF.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: ez.oAB.ACCOUNT,
                searchableTitles: [eK.intl.string(eK.t['8lQ2ra'])],
                parent: eF.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [eF.s6.GAMES]: {
                section: ez.oAB.GAMES,
                searchableTitles: [eK.intl.string(eK.t.URyqtL)],
                label: eK.intl.string(eK.t.URyqtL),
                ariaLabel: eK.intl.string(eK.t.URyqtL),
                element: eB.Z,
                predicate: () => e2
            },
            [eF.s6.GAMES_MY_GAMES]: {
                section: ez.oAB.GAMES,
                searchableTitles: [eK.intl.string(eK.t['5DMgp6'])],
                parent: eF.s6.GAMES
            },
            [eF.s6.GAMES_CLIPS]: {
                section: ez.oAB.GAMES,
                searchableTitles: [eK.intl.string(eK.t.z2jK6e)],
                parent: eF.s6.GAMES
            },
            [eF.s6.GAMES_OVERLAY]: {
                section: ez.oAB.GAMES,
                searchableTitles: [eK.intl.string(eK.t['9cb1U1'])],
                parent: eF.s6.GAMES
            },
            [eF.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: ez.oAB.GAMES,
                searchableTitles: [eK.intl.string(eK.t.Cq98yM)],
                parent: eF.s6.GAMES
            },
            [eF.s6.PROFILE_CUSTOMIZATION]: {
                section: ez.oAB.PROFILE_CUSTOMIZATION,
                type: g.bT.WIDE,
                searchableTitles: [eK.intl.string(eK.t['vi7f+v'])],
                label: eK.intl.string(eK.t['vi7f+v']),
                ariaLabel: eK.intl.string(eK.t['vi7f+v']),
                element: L.Z,
                newIndicator: (0, i.jsx)(e0, {}),
                newIndicatorDismissibleContentTypes: [...e$()],
                notice: {
                    stores: [W.Z, N.Z],
                    element: k.Z
                },
                onSettingsClose: () => {
                    o.Z.wait(() => {
                        (0, I.It)(), (0, u.P6)(), m.Z.clearSubsection(ez.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: ez.Z5c.SETTINGS('profile-customization')
            },
            [eF.s6.PROFILE_DISPLAY_NAME]: {
                section: ez.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eK.intl.string(eK.t['9AjdkJ'])],
                parent: eF.s6.PROFILE_CUSTOMIZATION
            },
            [eF.s6.PROFILE_USER_PROFILE]: {
                section: ez.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eK.intl.string(eK.t['2p07FR']), eK.intl.string(eK.t['7vhiqq'])],
                parent: eF.s6.PROFILE_CUSTOMIZATION
            },
            [eF.s6.PROFILE_SERVER_PROFILES]: {
                section: ez.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eK.intl.string(eK.t.kPHroa)],
                parent: eF.s6.PROFILE_CUSTOMIZATION
            },
            [eF.s6.CONTENT_SOCIAL]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                label: eK.intl.string(eK.t['+o1pDQ']),
                searchableTitles: [eK.intl.string(eK.t['+o1pDQ'])],
                ariaLabel: eK.intl.string(eK.t['+o1pDQ']),
                element: eh.Z,
                url: ez.Z5c.SETTINGS('content-and-social')
            },
            [eF.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t['+o1pDQ']), eK.intl.string(eK.t['/7xJCA'])],
                parent: eF.s6.CONTENT_SOCIAL
            },
            [eF.s6.CONTENT_SOCIAL_DISCORD]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t['+o1pDQ']), eK.intl.string(eK.t['/7xJCA'])],
                parent: eF.s6.CONTENT_SOCIAL_DISCORD_TAB
            },
            [eF.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.h1hqj4)],
                parent: eF.s6.CONTENT_SOCIAL
            },
            [eF.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                label: eK.intl.string(eK.t.h1hqj4),
                searchableTitles: [eK.intl.string(eK.t.h1hqj4)],
                ariaLabel: eK.intl.string(eK.t.h1hqj4),
                parent: eF.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: ez.Z5c.SETTINGS(ez.oAB.CONTENT_AND_SOCIAL, eH.C)
            },
            [eF.s6.DATA_PRIVACY]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                label: eK.intl.string(eK.t.OAuOHB),
                searchableTitles: [eK.intl.string(eK.t.OAuOHB)],
                ariaLabel: eK.intl.string(eK.t.OAuOHB),
                element: ef.Z,
                url: ez.Z5c.SETTINGS('data-and-privacy')
            },
            [eF.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: ez.oAB.ACCOUNT,
                searchableTitles: [eK.intl.string(eK.t['Vov/9v'])],
                parent: eF.s6.ACCOUNT
            },
            [eF.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.WWaFn5)],
                parent: eF.s6.DATA_PRIVACY,
                predicate: () => (0, Q.isDesktop)()
            },
            [eF.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t['opi/XF'])],
                parent: eF.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY
            },
            [eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.xVRG4O)],
                parent: eF.s6.CONTENT_SOCIAL_DISCORD
            },
            [eF.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.fyA119)],
                parent: eF.s6.CONTENT_SOCIAL_DISCORD
            },
            [eF.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.fyA119)],
                parent: eF.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY
            },
            [eF.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t['/U8Iwc'])],
                parent: eF.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            },
            [eF.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t['ms+TmZ'])],
                parent: eF.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            },
            [eF.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t['y62Z/f'])],
                parent: eF.s6.CONTENT_SOCIAL
            },
            [eF.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.SRZyHh)],
                parent: eF.s6.DATA_PRIVACY
            },
            [eF.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.uEz8JC), eK.intl.string(eK.t['N/oRIy']), eK.intl.string(eK.t.QVdYsL), eK.intl.string(eK.t['aWD+tr']), eK.intl.string(eK.t['5mnTa2'])],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eF.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.JzaP4u), eK.intl.string(eK.t.H9XOl5), eK.intl.string(eK.t.k4W40N)],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eF.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t['L+yTsb'])],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eF.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.XahVjo)],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eF.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                parent: eF.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY
            },
            [eF.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.RAQUSE), eK.intl.string(eK.t.wbYDfX)],
                parent: eF.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eF.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t['3o2ojo'])],
                parent: eF.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !te
            },
            [eF.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.OLwZDQ)],
                parent: eF.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eF.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.wBkwu7)],
                parent: eF.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eF.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.XuADY2)],
                parent: eF.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eF.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.MNKzys)],
                parent: eF.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eF.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.VkS7YW)],
                parent: eF.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eF.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.CF],
                parent: eF.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eF.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.dmBSKi)],
                parent: eF.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY
            },
            [eF.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t['1UaUy8']), eK.intl.string(eK.t['xIk/iI'])],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e3
            },
            [eF.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.qFsx5u)],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e8 && !tr && !e9
            },
            [eF.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t['5b3FND'])],
                parent: eF.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => ts
            },
            [eF.s6.PRIVACY_FAMILY_CENTER]: {
                section: ez.oAB.FAMILY_CENTER,
                searchableTitles: [eK.intl.string(eX.default.gntCQU)],
                label: eK.intl.string(eX.default.gntCQU),
                ariaLabel: eK.intl.string(eX.default.gntCQU),
                element: ex.Z,
                badgeCount: R,
                newIndicator: (0, i.jsx)(a.IGR, {
                    text: eK.intl.string(eK.t.y2b7CA),
                    color: O.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [s.z.FAMILY_CENTER_NEW_BADGE],
                url: ez.Z5c.SETTINGS('family-center')
            },
            [eF.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: ez.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.BG7Qsb)],
                parent: eF.s6.DATA_PRIVACY
            },
            [eF.s6.AUTHORIZED_APPS]: {
                section: ez.oAB.AUTHORIZED_APPS,
                searchableTitles: [eK.intl.string(eK.t['f6kk+v'])],
                label: eK.intl.string(eK.t['f6kk+v']),
                element: em.Z,
                url: ez.Z5c.SETTINGS('authorized-apps')
            },
            [eF.s6.SESSIONS]: {
                section: ez.oAB.SESSIONS,
                searchableTitles: [eK.intl.string(eK.t['+1h0k5'])],
                label: eK.intl.string(eK.t['+1h0k5']),
                ariaLabel: eK.intl.string(eK.t['+1h0k5']),
                element: ey.Z,
                newIndicatorDismissibleContentTypes: [s.z.AUTH_SESSIONS_NEW],
                impressionName: r.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: A }
            },
            [eF.s6.CONNECTIONS]: {
                section: ez.oAB.CONNECTIONS,
                searchableTitles: [eK.intl.string(eK.t['3fe7U1'])],
                label: eK.intl.string(eK.t['3fe7U1']),
                ariaLabel: eK.intl.string(eK.t['3fe7U1']),
                element: ep.Z,
                impressionName: r.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: A },
                newIndicatorDismissibleContentTypes: [s.z.NEW_CRUNCHYROLL_CONNECTION],
                url: ez.Z5c.SETTINGS('connections')
            },
            [eF.s6.THIRD_PARTY_ACCESS]: {
                section: ez.oAB.CONNECTIONS,
                searchableTitles: [eK.intl.string(eK.t['Ig/XFR']), eK.intl.string(eK.t['3fe7U1']), eK.intl.string(eK.t['f6kk+v'])],
                label: eK.intl.string(eK.t['Ig/XFR']),
                parent: eF.s6.CONNECTIONS,
                element: eD.Z
            },
            [eF.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: ez.oAB.CONNECTIONS,
                searchableTitles: [eK.intl.string(eK.t['+/hZMz'])],
                parent: eF.s6.CONNECTIONS,
                element: ep.Z
            },
            [eF.s6.CLIPS]: {
                section: ez.oAB.CLIPS,
                searchableTitles: [eK.intl.string(eK.t.z2jK6e)],
                label: eK.intl.string(eK.t.z2jK6e),
                ariaLabel: eK.intl.string(eK.t.z2jK6e),
                icon: G ? (0, i.jsx)(j.Z, {}) : void 0,
                element: C.Z,
                predicate: () => !e2,
                url: ez.Z5c.SETTINGS('clips')
            },
            [eF.s6.RESTRICTED_USERS]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                parent: eF.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eK.intl.string(eK.t['3wRorq']),
                element: eM.ZP,
                predicate: () => ta || to
            },
            [eF.s6.BLOCKED_USERS]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                parent: eF.s6.RESTRICTED_USERS,
                label: eK.intl.string(eK.t.PFOUKS),
                searchableTitles: [eK.intl.string(eK.t.PFOUKS)],
                element: eM.GF,
                predicate: () => to
            },
            [eF.s6.IGNORED_USERS]: {
                section: ez.oAB.CONTENT_AND_SOCIAL,
                parent: eF.s6.RESTRICTED_USERS,
                searchableTitles: [eK.intl.string(eK.t['93ZDWF'])],
                label: eK.intl.string(eK.t['93ZDWF']),
                element: eM.yo,
                predicate: () => ta
            },
            [eF.s6.PREMIUM]: {
                section: ez.oAB.PREMIUM,
                ariaLabel: eK.intl.string(eK.t.Ipxkoq),
                searchableTitles: [eK.intl.string(eK.t.Ipxkoq)],
                label: eK.intl.string(eK.t.Ipxkoq),
                element: ei.Z,
                className: eQ.premiumTab
            },
            [eF.s6.GUILD_BOOSTING]: {
                section: ez.oAB.GUILD_BOOSTING,
                searchableTitles: [eK.intl.string(eK.t['+CbP2t'])],
                label: eK.intl.string(eK.t['+CbP2t']),
                element: eI.Z
            },
            [eF.s6.SUBSCRIPTIONS]: {
                section: ez.oAB.SUBSCRIPTIONS,
                ariaLabel: eK.intl.string(eK.t.trSpHR),
                searchableTitles: [eK.intl.string(eK.t.trSpHR)],
                label: eK.intl.string(eK.t.trSpHR),
                element: w.Z,
                icon: T
                    ? (0, i.jsx)(a.P4T, {
                          size: 'xs',
                          color: l.Z.unsafe_rawColors.YELLOW_300.css
                      })
                    : null
            },
            [eF.s6.SUBSCRIPTIONS_CREDITS]: {
                section: ez.oAB.SUBSCRIPTIONS,
                searchableTitles: [eK.intl.string(eK.t['2GKrvr'])],
                parent: eF.s6.SUBSCRIPTIONS
            },
            [eF.s6.GIFT_INVENTORY]: {
                section: ez.oAB.INVENTORY,
                searchableTitles: [eK.intl.string(eK.t['jcSP+v'])],
                label: eK.intl.string(eK.t['jcSP+v']),
                element: eC.Z,
                ariaLabel: eK.intl.string(eK.t['jcSP+v']),
                badgeCount: t
            },
            [eF.s6.GIFT_NITRO]: {
                section: ez.oAB.INVENTORY,
                searchableTitles: [eK.intl.string(eK.t.Ve9Ge3)],
                parent: eF.s6.GIFT_INVENTORY,
                predicate: () => !e4 && e7
            },
            [eF.s6.GIFT_CODE_REDEMPTION]: {
                section: ez.oAB.INVENTORY,
                searchableTitles: [eK.intl.string(eK.t['il+VCg'])],
                parent: eF.s6.GIFT_INVENTORY,
                predicate: () => !e4
            },
            [eF.s6.GIFT_INVENTORY_QUESTS]: {
                section: ez.oAB.INVENTORY,
                searchableTitles: [eK.intl.string(eK.t.JALI2N)],
                parent: eF.s6.GIFT_INVENTORY,
                predicate: () => e5
            },
            [eF.s6.GIFT_INVENTORY_LIST]: {
                section: ez.oAB.INVENTORY,
                searchableTitles: [eK.intl.string(eK.t['9KeUbW'])],
                parent: eF.s6.GIFT_INVENTORY,
                predicate: () => !e4
            },
            [eF.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: ez.oAB.INVENTORY,
                searchableTitles: [eK.intl.string(eK.t.vwMEHR)],
                parent: eF.s6.GIFT_INVENTORY,
                predicate: () => e4
            },
            [eF.s6.BILLING]: {
                section: ez.oAB.BILLING,
                searchableTitles: [eK.intl.string(eK.t.oeUm2t)],
                label: eK.intl.string(eK.t.oeUm2t),
                ariaLabel: eK.intl.string(eK.t.oeUm2t),
                element: eg.Z
            },
            [eF.s6.BILLING_PAYMENT_METHODS]: {
                section: ez.oAB.BILLING,
                searchableTitles: [eK.intl.string(eK.t.W26xGR)],
                parent: eF.s6.BILLING
            },
            [eF.s6.BILLING_TRANSACTION_HISTORY]: {
                section: ez.oAB.BILLING,
                searchableTitles: [eK.intl.string(eK.t.obLrcH)],
                parent: eF.s6.BILLING
            },
            [eF.s6.APPEARANCE]: {
                section: ez.oAB.APPEARANCE,
                searchableTitles: [eK.intl.string(eK.t['iHH+k5'])],
                label: eK.intl.string(eK.t['iHH+k5']),
                ariaLabel: eK.intl.string(eK.t['iHH+k5']),
                element: eu.Z,
                newIndicator: (0, i.jsx)(a.lBU, { text: eK.intl.string(eK.t.y2b7CA) }),
                newIndicatorDismissibleContentTypes: eJ(),
                url: ez.Z5c.SETTINGS('appearance')
            },
            [eF.s6.APPEARANCE_THEME]: {
                section: ez.oAB.APPEARANCE,
                searchableTitles: [eK.intl.string(eK.t.Ksh3io)],
                parent: eF.s6.APPEARANCE
            },
            [eF.s6.APPEARANCE_COLOR]: {
                section: ez.oAB.APPEARANCE,
                searchableTitles: [eK.intl.string(eK.t.OCOOiI)],
                parent: eF.s6.APPEARANCE_THEME
            },
            [eF.s6.APPEARANCE_ICON]: {
                section: ez.oAB.APPEARANCE,
                searchableTitles: [eK.intl.string(eK.t.RPh2oq)],
                parent: eF.s6.APPEARANCE_THEME
            },
            [eF.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: ez.oAB.APPEARANCE,
                searchableTitles: [eK.intl.string(eK.t.ZEoGMT)],
                parent: eF.s6.APPEARANCE
            },
            [eF.s6.APPEARANCE_LIST_SPACING]: {
                section: ez.oAB.APPEARANCE,
                searchableTitles: ['List Spacing'],
                parent: eF.s6.APPEARANCE,
                newIndicator: (0, i.jsx)(a.IGR, {
                    text: eK.intl.string(eK.t.y2b7CA),
                    color: O.Z.BG_BRAND
                }),
                predicate: () => (0, S.i9)('SettingsRendererConfig')
            },
            [eF.s6.APPEARANCE_SCALING_SPACING]: {
                section: ez.oAB.APPEARANCE,
                searchableTitles: [eK.intl.string(eK.t.qPOqoK)],
                parent: eF.s6.APPEARANCE
            },
            [eF.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: ez.oAB.APPEARANCE,
                searchableTitles: [eK.intl.string(eK.t.dyamEB), eK.intl.string(eK.t.p8NOws), eK.intl.string(eK.t['+o/sOj'])],
                parent: eF.s6.APPEARANCE,
                predicate: () => F.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable24HourPref
            },
            [eF.s6.ACCESSIBILITY]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.G0neg4)],
                label: eK.intl.string(eK.t.G0neg4),
                ariaLabel: eK.intl.string(eK.t.G0neg4),
                element: ea.Z,
                url: ez.Z5c.SETTINGS('accessibility')
            },
            [eF.s6.ACCESSIBILITY_SATURATION]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t['5PWWCQ'])],
                parent: eF.s6.ACCESSIBILITY
            },
            [eF.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.bQCodH)],
                parent: eF.s6.ACCESSIBILITY_SATURATION
            },
            [eF.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.OLZFBw)],
                parent: eF.s6.ACCESSIBILITY
            },
            [eF.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.uSOPWl)],
                parent: eF.s6.ACCESSIBILITY
            },
            [eF.s6.ACCESSIBILITY_TAGS]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.UQt6dX)],
                parent: eF.s6.ACCESSIBILITY
            },
            [eF.s6.ACCESSIBILITY_TAGS_NAMES]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.UPwh1N)],
                parent: eF.s6.ACCESSIBILITY_TAGS
            },
            [eF.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.BT8Bmp)],
                parent: eF.s6.ACCESSIBILITY
            },
            [eF.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t['sSY+mJ'])],
                parent: eF.s6.ACCESSIBILITY_PROFILE_COLORS
            },
            [eF.s6.ACCESSIBILITY_CONTRAST]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.TYyfOz)],
                parent: eF.s6.ACCESSIBILITY
            },
            [eF.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.cguieX)],
                parent: eF.s6.ACCESSIBILITY_CONTRAST
            },
            [eF.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.e3TR1d)],
                parent: eF.s6.ACCESSIBILITY
            },
            [eF.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.b3XBzs)],
                parent: eF.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eF.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.Iayoh4)],
                parent: eF.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eF.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.iIaOlZ)],
                parent: eF.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eF.s6.ACCESSIBILITY_STICKERS]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t['6NtAuL'])],
                parent: eF.s6.ACCESSIBILITY
            },
            [eF.s6.ACCESSIBILITY_MESSAGES]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.onqU6u)],
                parent: eF.s6.ACCESSIBILITY
            },
            [eF.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t['3Fztn5'])],
                parent: eF.s6.ACCESSIBILITY_MESSAGES
            },
            [eF.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.TZ2hZG)],
                parent: eF.s6.ACCESSIBILITY_MESSAGES
            },
            [eF.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.VpSKeH)],
                parent: eF.s6.ACCESSIBILITY
            },
            [eF.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.qvTIwc)],
                parent: eF.s6.ACCESSIBILITY_TEXT_TO_SPEECH
            },
            [eF.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.lsW5Eh)],
                parent: eF.s6.ACCESSIBILITY
            },
            [eF.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: ez.oAB.ACCESSIBILITY,
                searchableTitles: [eF.CF],
                parent: eF.s6.ACCESSIBILITY
            },
            [eF.s6.VOICE_AND_VIDEO]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.B1fFpa)],
                label: eK.intl.string(eK.t.B1fFpa),
                ariaLabel: eK.intl.string(eK.t.B1fFpa),
                element: eU.Z,
                predicate: () => Y.Z.isSupported(),
                url: ez.Z5c.SETTINGS('voice')
            },
            [eF.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.K3lovL), eK.intl.string(eK.t.NiTd0d)],
                parent: eF.s6.VOICE_AND_VIDEO,
                predicate: () => tc
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.FlNoSU)],
                parent: eF.s6.VOICE_AND_VIDEO,
                predicate: () => tc
            },
            [eF.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.ABjMWF)],
                parent: eF.s6.VOICE_AND_VIDEO,
                predicate: () => tc
            },
            [eF.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.OFpL3d)],
                parent: eF.s6.VOICE_AND_VIDEO,
                predicate: () => tc
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.KDdjoq), eK.intl.string(eK.t.FeUKeH)],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tc
            },
            [eF.s6.VOICE_AND_VIDEO_VOICE]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.K3lovL), eK.intl.string(eK.t.NiTd0d)],
                parent: tc ? eF.s6.VOICE_AND_VIDEO_VOICE_TAB : eF.s6.VOICE_AND_VIDEO
            },
            [eF.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.hHMYbW), eK.intl.string(eK.t.dl18zc), eK.intl.string(eK.t.nuFtHB), eK.intl.string(eK.t['3182VF']), eK.intl.string(eK.t['DGq/PT'])],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE
            },
            [eF.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.OX2Bnp), eK.intl.string(eK.t.eATD2N), eK.intl.string(eK.t.nuFtHB), eK.intl.string(eK.t['3182VF']), eK.intl.string(eK.t['DGq/PT'])],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE
            },
            [eF.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.gyljWF), eK.intl.string(eK.t.nuFtHB)],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE
            },
            [eF.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t['pS+K2N']), eK.intl.string(eK.t.nuFtHB)],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE
            },
            [eF.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t['sqUm+v']), eK.intl.string(eK.t.nuFtHB)],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => Y.Z.getMode() === eW.pM.VOICE_ACTIVITY
            },
            [eF.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.e7LIiY)],
                parent: tc ? eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eF.s6.VOICE_AND_VIDEO
            },
            [eF.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.nzUc3N)],
                parent: tc ? eF.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB : eF.s6.VOICE_AND_VIDEO
            },
            [eF.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.ABjMWF)],
                parent: eF.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eF.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.nzUc3N)],
                parent: eF.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.LKzQSE)],
                parent: tc ? eF.s6.VOICE_AND_VIDEO_VIDEO_TAB : eF.s6.VOICE_AND_VIDEO
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.F122Gx)],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => Y.Z.supports(eW.AN.VIDEO)
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t['3Ppr1t'])],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO_CAMERA
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.lZTUPj)],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => Y.Z.supports(eW.AN.VIDEO)
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t['8/udY2'])],
                parent: eF.s6.VOICE_AND_VIDEO
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t['8/udY2'])],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tc
            },
            [eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t['8/udY2'])],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE_TAB,
                predicate: () => tc
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.DSGme3)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => !tc
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.Tceiq6)],
                parent: tc ? eF.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED : eF.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t['71Ve19'])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => Y.Z.supports(eW.AN.OPEN_H264)
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.Sln58f)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.AxnPm5)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== J.ZP.releaseChannel && Y.Z.isExperimentalEncodersSupported()
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t['6I6GUl'])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.iWTwu7)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t['/jwMtr'])],
                parent: tc ? eF.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eF.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.OBwCXF)],
                parent: tc ? eF.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.t8QhiY), eK.intl.string(eK.t.hmfkCg)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Y.Z.isNoiseSuppressionSupported()
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.BbESsr)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Y.Z.isAdvancedVoiceActivitySupported()
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.cUMdHx)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Y.Z.isAutomaticGainControlSupported()
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.uancuL)],
                parent: tc ? eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eF.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => Y.Z.supports(eW.AN.QOS)
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.oSdBvb)],
                parent: tc ? eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eF.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => Y.Z.supports(eW.AN.ATTENUATION)
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.wVBHr6)],
                parent: tc ? eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eF.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => Y.Z.supports(eW.AN.LEGACY_AUDIO_SUBSYSTEM) || Y.Z.supports(eW.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.KDdjoq), eK.intl.string(eK.t.NMCIf3), eK.intl.string(eK.t.FeUKeH)],
                parent: tc ? eF.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eF.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => Y.Z.supportsVideoHook() || Y.Z.supportsExperimentalSoundshare() || (Y.Z.supportsSystemScreensharePicker() && (0, Q.isMac)())
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.GmWk2N), eK.intl.string(eK.t['Fj/xn5'])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => Y.Z.supportsVideoHook()
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t['4I0qzc'])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => Y.Z.supportsExperimentalSoundshare()
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.ie1mgY)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => Y.Z.supportsSystemScreensharePicker() && (0, Q.isMac)()
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t['aP1N/v'])],
                parent: tc ? eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eF.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => Q.isPlatformEmbedded
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.OFpL3d)],
                parent: tc ? eF.s6.VOICE_AND_VIDEO_DEBUG_TAB : eF.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t['0CEP6e'])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => $.Sb.getSetting()
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t['r6K+TE'])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => Y.Z.isAecDumpSupported()
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.U4FgFB)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === J.ZP.releaseChannel || 'development' === J.ZP.releaseChannel) && e6 && Y.Z.supports(eW.AN.CONNECTION_REPLAY)
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t['726JHB'])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => Q.isPlatformEmbedded && Y.Z.supports(eW.AN.DEBUG_LOGGING) && null != p.Z.fileManager.readLogFiles
            },
            [eF.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: ez.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t['/RXu6+'])],
                parent: tc ? eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING : eF.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eF.s6.CLICKER_GAME]: {
                url: ez.Z5c.SETTINGS('clicker-game'),
                section: ez.oAB.CLICKER_GAME,
                searchableTitles: [eK.intl.string(eq.default['7qZdOz'])],
                label: eK.intl.string(eq.default['7qZdOz']),
                ariaLabel: eK.intl.string(eq.default['7qZdOz']),
                element: E.Z,
                predicate: () => x.C.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enableGame,
                icon: (0, i.jsx)('img', {
                    alt: '',
                    src: n(186542),
                    className: eQ.clickerGameIcon
                })
            },
            [eF.s6.POGGERMODE]: {
                section: ez.oAB.POGGERMODE,
                searchableTitles: [eK.intl.string(eK.t.AtCukJ)],
                label: eK.intl.string(eK.t.AtCukJ),
                ariaLabel: eK.intl.string(eK.t.AtCukJ),
                element: Z.Z,
                predicate: () => D.Z.settingsVisible,
                icon: (0, i.jsx)('img', {
                    alt: '',
                    src: n(348621),
                    className: eQ.poggermodeIcon
                })
            },
            [eF.s6.CHAT]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t['/VQax8'])],
                label: eK.intl.string(eK.t['/VQax8']),
                ariaLabel: eK.intl.string(eK.t['/VQax8']),
                element: eP.Z,
                url: ez.Z5c.SETTINGS('chat')
            },
            [eF.s6.CHAT_INLINE_MEDIA]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.U68Dgo)],
                parent: eF.s6.CHAT
            },
            [eF.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.U47N1t)],
                parent: eF.s6.CHAT_INLINE_MEDIA
            },
            [eF.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.VP11Nj)],
                parent: eF.s6.CHAT_INLINE_MEDIA
            },
            [eF.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t['5S2AKy'])],
                parent: eF.s6.CHAT_INLINE_MEDIA
            },
            [eF.s6.CHAT_EMBEDS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.PWZOn5)],
                parent: eF.s6.CHAT
            },
            [eF.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.xX0ZTE)],
                parent: eF.s6.CHAT_EMBEDS
            },
            [eF.s6.CHAT_EMOJI]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.sMOuub)],
                parent: eF.s6.CHAT
            },
            [eF.s6.CHAT_EMOJI_REACTIONS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.Iv24sr)],
                parent: eF.s6.CHAT_EMOJI
            },
            [eF.s6.CHAT_EMOJI_EMOTICONS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t['79qal5'])],
                parent: eF.s6.CHAT_EMOJI
            },
            [eF.s6.CHAT_STICKERS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t['6NtAuL'])],
                parent: eF.s6.CHAT
            },
            [eF.s6.CHAT_STICKERS_SUGGESTIONS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t['479+PT'])],
                parent: eF.s6.CHAT_STICKERS
            },
            [eF.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t['29xPVV'])],
                parent: eF.s6.CHAT_STICKERS
            },
            [eF.s6.CHAT_SOUNDMOJI]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.EHlAMT)],
                parent: eF.s6.CHAT
            },
            [eF.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t['CtYr+f'])],
                parent: eF.s6.CHAT_SOUNDMOJI
            },
            [eF.s6.CHAT_TEXT_BOX]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.afR0pK)],
                parent: eF.s6.CHAT
            },
            [eF.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.AqGrEB)],
                parent: eF.s6.CHAT_TEXT_BOX
            },
            [eF.s6.CHAT_THREADS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.B2panJ)],
                parent: eF.s6.CHAT
            },
            [eF.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.AInv5u)],
                parent: eF.s6.CHAT_THREADS
            },
            [eF.s6.CHAT_SPOILERS]: {
                section: ez.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.QgwmV1)],
                parent: eF.s6.CHAT
            },
            [eF.s6.NOTIFICATIONS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.HcoRu7)],
                label: eK.intl.string(eK.t.HcoRu7),
                ariaLabel: eK.intl.string(eK.t.HcoRu7),
                element: ev.Z,
                url: ez.Z5c.SETTINGS('notifications')
            },
            [eF.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t['/0WClp'])],
                parent: eF.s6.NOTIFICATIONS
            },
            [eF.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: eF.s6.NOTIFICATIONS
            },
            [eF.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.VH8AIC)],
                parent: eF.s6.NOTIFICATIONS
            },
            [eF.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.xSmFQE)],
                parent: eF.s6.NOTIFICATIONS,
                predicate: () => (0, Q.isWindows)()
            },
            [eF.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.z21l8P)],
                parent: eF.s6.NOTIFICATIONS
            },
            [eF.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: ['New Notification Settings (Advanced, Staff Only)'],
                parent: eF.s6.NOTIFICATIONS,
                predicate: () => !1
            },
            [eF.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: ['Restore most recent snapshot'],
                parent: eF.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eF.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: ['Launch Migration'],
                parent: eF.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eF.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: ['Toggle new system on/off'],
                parent: eF.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eF.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.TTvjd3)],
                parent: eF.s6.NOTIFICATIONS
            },
            [eF.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.VpSKeH)],
                parent: eF.s6.NOTIFICATIONS
            },
            [eF.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.D9yVAA)],
                parent: eF.s6.NOTIFICATIONS
            },
            [eF.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.u6dc5O)],
                parent: eF.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eF.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.P8MG6u)],
                parent: eF.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eF.s6.NOTIFICATIONS_SOUNDS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.MKWyKS)],
                parent: eF.s6.NOTIFICATIONS
            },
            [eF.s6.NOTIFICATIONS_EMAILS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.TPchzM)],
                parent: eF.s6.NOTIFICATIONS
            },
            [eF.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t['B75+xc'])],
                parent: eF.s6.NOTIFICATIONS_EMAILS
            },
            [eF.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.sxn7lZ)],
                parent: eF.s6.NOTIFICATIONS_EMAILS
            },
            [eF.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.EkxXhY)],
                parent: eF.s6.NOTIFICATIONS_EMAILS
            },
            [eF.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.jNrkrK)],
                parent: eF.s6.NOTIFICATIONS_EMAILS
            },
            [eF.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.E8g1l5)],
                parent: eF.s6.NOTIFICATIONS_EMAILS
            },
            [eF.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.Ra9Pws)],
                parent: eF.s6.NOTIFICATIONS_EMAILS
            },
            [eF.s6.NOTIFICATIONS_REACTIONS]: {
                section: ez.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.Rq0NFh)],
                parent: eF.s6.NOTIFICATIONS
            },
            [eF.s6.KEYBINDS]: {
                section: ez.oAB.KEYBINDS,
                searchableTitles: [eK.intl.string(eK.t.T9DA2N)],
                label: eK.intl.string(eK.t.T9DA2N),
                element: eO.Z,
                url: ez.Z5c.SETTINGS('keybinds')
            },
            [eF.s6.LANGUAGE]: {
                section: ez.oAB.LOCALE,
                searchableTitles: [eK.intl.string(eK.t.IHMsPj)],
                label: eK.intl.string(eK.t.IHMsPj),
                element: eS.Z,
                url: ez.Z5c.SETTINGS('language')
            },
            [eF.s6.WINDOW_SETTINGS]: {
                section: ez.oAB.WINDOWS,
                searchableTitles: [eK.intl.string(eK.t.ZkDZoq)],
                label: eK.intl.string(eK.t.ZkDZoq),
                element: eZ.Z,
                predicate: () => Q.isPlatformEmbedded && (0, Q.isWindows)()
            },
            [eF.s6.LINUX_SETTINGS]: {
                section: ez.oAB.LINUX,
                searchableTitles: [eK.intl.string(eK.t['7pPjTU'])],
                label: eK.intl.string(eK.t['7pPjTU']),
                element: e1,
                predicate: () => Q.isPlatformEmbedded && (0, Q.isLinux)()
            },
            [eF.s6.STREAMER_MODE]: {
                section: ez.oAB.STREAMER_MODE,
                searchableTitles: [eK.intl.string(eK.t.S5GfOT)],
                label: eK.intl.string(eK.t.S5GfOT),
                ariaLabel: eK.intl.string(eK.t.S5GfOT),
                element: eA.Z,
                url: ez.Z5c.SETTINGS('streamer-mode')
            },
            [eF.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: ez.oAB.STREAMER_MODE,
                searchableTitles: [eK.intl.string(eK.t.bxGbHB)],
                parent: eF.s6.STREAMER_MODE
            },
            [eF.s6.STREAMER_MODE_ENABLE]: {
                section: ez.oAB.STREAMER_MODE,
                searchableTitles: [eK.intl.string(eK.t.p9ZAJS)],
                parent: eF.s6.STREAMER_MODE
            },
            [eF.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: ez.oAB.STREAMER_MODE,
                searchableTitles: [eK.intl.string(eK.t.UpQziI)],
                parent: eF.s6.STREAMER_MODE
            },
            [eF.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: ez.oAB.STREAMER_MODE,
                searchableTitles: [eK.intl.string(eK.t.q7WNGh)],
                parent: eF.s6.STREAMER_MODE
            },
            [eF.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: ez.oAB.STREAMER_MODE,
                searchableTitles: [eK.intl.string(eK.t['1CWknJ'])],
                parent: eF.s6.STREAMER_MODE
            },
            [eF.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: ez.oAB.STREAMER_MODE,
                searchableTitles: [eK.intl.string(eK.t.qmYiYW)],
                parent: eF.s6.STREAMER_MODE
            },
            [eF.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: ez.oAB.STREAMER_MODE,
                searchableTitles: [eK.intl.string(eK.t['iA81+f'])],
                parent: eF.s6.STREAMER_MODE,
                predicate: () => {
                    var e, t, n;
                    return null != (n = null === p.Z || void 0 === p.Z || null == (t = p.Z.window) || null == (e = t.supportsContentProtection) ? void 0 : e.call(t)) && n;
                }
            },
            [eF.s6.SETTINGS_ADVANCED]: {
                section: ez.oAB.ADVANCED,
                searchableTitles: [eK.intl.string(eK.t['8/udY2'])],
                label: eK.intl.string(eK.t['8/udY2']),
                ariaLabel: eK.intl.string(eK.t['8/udY2']),
                element: ed.Z
            },
            [eF.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: ez.oAB.ADVANCED,
                searchableTitles: [eK.intl.string(eK.t.ObIb1d)],
                parent: eF.s6.SETTINGS_ADVANCED,
                predicate: () => q.wS
            },
            [eF.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: ez.oAB.ADVANCED,
                searchableTitles: [eK.intl.string(eK.t['eOC/Fx'])],
                parent: eF.s6.SETTINGS_ADVANCED,
                predicate: () => Q.isPlatformEmbedded
            },
            [eF.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: ez.oAB.ADVANCED,
                searchableTitles: [eK.intl.string(eK.t.fi3UQE)],
                parent: eF.s6.SETTINGS_ADVANCED,
                predicate: () => tt
            },
            [eF.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: ez.oAB.ADVANCED,
                searchableTitles: [eK.intl.string(eK.t.erOqlp)],
                parent: eF.s6.SETTINGS_ADVANCED,
                predicate: () => ti
            },
            [eF.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: ez.oAB.ADVANCED,
                searchableTitles: [eK.intl.string(eK.t.qDZryM)],
                parent: eF.s6.SETTINGS_ADVANCED
            },
            [eF.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: ez.oAB.ADVANCED,
                searchableTitles: ['CF WARP', 'CloudFlare WARP'],
                parent: eF.s6.SETTINGS_ADVANCED,
                predicate: () => b.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable
            },
            [eF.s6.ACTIVITY_PRIVACY]: {
                section: ez.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.Cq98yM)],
                label: eK.intl.string(eK.t.Cq98yM),
                ariaLabel: eK.intl.string(eK.t.Cq98yM),
                element: ec.Z,
                predicate: () => !e2,
                url: ez.Z5c.SETTINGS('activity-privacy')
            },
            [eF.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: e2 ? ez.oAB.GAMES : ez.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t['8ka8lp'])],
                parent: e2 ? eF.s6.GAMES_ACTIVITY_PRIVACY : eF.s6.ACTIVITY_PRIVACY
            },
            [eF.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: e2 ? ez.oAB.GAMES : ez.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.VOszPD)],
                parent: e2 ? eF.s6.GAMES_ACTIVITY_PRIVACY : eF.s6.ACTIVITY_PRIVACY
            },
            [eF.s6.ACTIVITY_PRIVACY_TOS]: {
                section: e2 ? ez.oAB.GAMES : ez.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eF.CF],
                parent: e2 ? eF.s6.GAMES_ACTIVITY_PRIVACY : eF.s6.ACTIVITY_PRIVACY
            },
            [eF.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: ez.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t['4F2KoK'])],
                parent: eF.s6.ACTIVITY_PRIVACY
            },
            [eF.s6.REGISTERED_GAMES]: {
                section: ez.oAB.REGISTERED_GAMES,
                searchableTitles: [eK.intl.string(eK.t.AVDyEh)],
                label: eK.intl.string(eK.t.AVDyEh),
                element: eE.Z,
                predicate: () => !e2 && (0, eL.Jw)()
            },
            [eF.s6.OVERLAY]: {
                section: ez.oAB.OVERLAY,
                searchableTitles: [eK.intl.string(eK.t['9cb1U1']), eK.intl.string(eK.t.HcoRu7)],
                label: eK.intl.string(eK.t['9cb1U1']),
                element: eT.Z,
                predicate: () => !e2 && V
            },
            [eF.s6.CHANGELOG]: {
                section: 'changelog',
                onClick: () => (0, _.Z)(!0),
                searchableTitles: [eK.intl.string(eK.t.LRmNAg)],
                label: eK.intl.string(eK.t.LRmNAg)
            },
            [eF.s6.MERCHANDISE]: {
                section: 'merchandise',
                onClick: () => {
                    let e = 'https://discordmerch.com/Dsktopprm';
                    K.default.track(ez.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, X.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                K.default.track(ez.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, h.Z)(e);
                            }
                        });
                },
                searchableTitles: [eK.intl.string(eK.t.sMEktb)],
                label: eK.intl.string(eK.t.sMEktb),
                ariaLabel: eK.intl.string(eK.t.sMEktb)
            },
            [eF.s6.HYPESQUAD]: {
                section: ez.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eK.intl.string(eK.t['k0R+4e'])],
                label: eK.intl.string(eK.t['k0R+4e']),
                element: ej.Z,
                predicate: () => !tl
            },
            [eF.s6.TOWNHALL]: {
                section: ez.oAB.TOWNHALL,
                searchableTitles: [eK.intl.string(eK.t.dnZNER)],
                label: eK.intl.string(eK.t.dnZNER),
                predicate: () => tl,
                onClick: () => {
                    (0, h.Z)('https://discord.gg/discord-townhall'), (0, d.xf)();
                }
            },
            [eF.s6.EXPERIMENTS]: {
                section: ez.oAB.EXPERIMENTS,
                searchableTitles: ['Experiments'],
                label: 'Experiments',
                element: ew.Z,
                predicate: () => H.Z.isDeveloper,
                url: ez.Z5c.SETTINGS('experiments')
            },
            [eF.s6.DEVELOPER_OPTIONS]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: e_.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_FLAGS]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Always deliver ads'],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Accessibility Auditing'],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => !1
            },
            [eF.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['CSS Debugging'],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && H.Z.isDeveloper && z.default.layoutDebuggingEnabled
            },
            [eF.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Disable App Collections Cache'],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: eF.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: eF.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => f.q && H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: ez.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Prevent Popouts From Closing Automatically'],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.HOTSPOT_OPTIONS]: {
                section: ez.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: et.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: ez.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: v.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.PAYMENT_FLOW_MODALS]: {
                section: ez.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: en.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.REVENUE_STORYBOOK]: {
                section: ez.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Revenue Storybook', 'Payment Components', 'Orb Components', 'Virtual Currency'],
                label: 'Revenue Storybook',
                element: eV.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: ez.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ['Virtual Currency', 'Orb', 'Config'],
                label: 'Virtual Currency Config',
                element: eG.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.PAYMENT_COMPONENTS]: {
                section: ez.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Payment Components'],
                label: 'Payment Components',
                element: eV.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.ORB_COMPONENTS]: {
                section: ez.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Orb Components'],
                label: 'Orb Components',
                element: eV.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.TEXT_PLAYGROUND]: {
                section: ez.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: eR.Z,
                predicate: () => (0, el.D)() || H.Z.isDeveloper
            },
            [eF.s6.DESIGN_SYSTEMS]: {
                section: ez.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: eb.Z,
                predicate: () => H.Z.isDeveloper,
                url: ez.Z5c.SETTINGS('design-systems')
            },
            [eF.s6.DESIGN_SYSTEMS_COLORS]: {
                section: ez.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Colors'],
                label: 'Colors',
                element: eb.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.ANIMATION_TESTING]: {
                section: ez.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Animation Testing'],
                label: 'Animation Testing',
                element: eb.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: ez.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Components'],
                label: 'Components',
                element: eb.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.TEXT_COMPONENTS]: {
                section: ez.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: es.Z,
                predicate: () => (0, el.D)() || H.Z.isDeveloper
            },
            [eF.s6.INTL_TESTING]: {
                section: ez.oAB.INTL_TESTING,
                searchableTitles: ['Intl Testing', 'i18n'],
                label: 'Intl Testing',
                element: y.Z,
                predicate: () => e6 || H.Z.isDeveloper
            },
            [eF.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
                section: ez.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
                searchableTitles: ['PFX Editor'],
                label: 'PFX Editor',
                element: B.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.NAMEPLATES_PREVIEW_TOOL]: {
                section: ez.oAB.NAMEPLATES_PREVIEW_TOOL,
                searchableTitles: ['Nameplates Preview Tool'],
                label: 'Nameplates Preview Tool',
                element: P.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.QUEST_PREVIEW_TOOL]: {
                section: ez.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: U.Z,
                predicate: () => (0, M.X7)({ location: eY.dr.QUEST_PREVIEW_TOOL })
            },
            [eF.s6.WEB_SETTING_TREE_TOOL]: {
                section: ez.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ['Web Setting Tree Tool'],
                label: 'Web Setting Tree Tool',
                element: ek.Z,
                predicate: () => H.Z.isDeveloper
            },
            [eF.s6.LOGOUT]: {
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
                                    header: eK.intl.string(eK.t['2jxGen']),
                                    confirmText: eK.intl.string(eK.t['2jxGen']),
                                    cancelText: eK.intl.string(eK.t['ETE/oK']),
                                    onCancel: e.onClose,
                                    onConfirm: () => c.Z.logout('settings')
                                },
                                e
                            )),
                            (n = n =
                                {
                                    children: (0, i.jsx)(a.Text, {
                                        variant: 'text-md/normal',
                                        children: eK.intl.string(eK.t.SUnWBA)
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
                label: eK.intl.string(eK.t['2jxGen']),
                ariaLabel: eK.intl.string(eK.t['2jxGen']),
                icon: (0, i.jsx)(a.PBZ, {
                    size: 'xs',
                    color: 'currentColor'
                })
            },
            [eF.s6.SOCIAL_LINKS]: {
                section: g.ID.CUSTOM,
                element: er.Z
            },
            [eF.s6.CLIENT_DEBUG_INFO]: {
                section: g.ID.CUSTOM,
                element: ee.Z
            }
        });
    };
