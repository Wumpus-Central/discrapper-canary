n.d(t, { i: () => e2 }), n(539854), n(388685);
var i = n(255367);
n(73800);
var r = n(990547),
    s = n(704215),
    l = n(692547),
    a = n(481060),
    o = n(570140),
    c = n(893776),
    d = n(37234),
    u = n(809206),
    g = n(230711),
    m = n(493544),
    p = n(579806),
    h = n(782568),
    f = n(758182),
    b = n(49226),
    _ = n(163379),
    x = n(498646),
    E = n(489968),
    C = n(703288),
    j = n(574755),
    O = n(377171),
    S = n(540059),
    v = n(621628),
    T = n(243778),
    I = n(890022),
    N = n(18438),
    y = n(778825),
    A = n(665166),
    P = n(442933),
    R = n(715495),
    D = n(158947),
    Z = n(351780),
    w = n(231765),
    k = n(813732),
    L = n(398140),
    B = n(564344),
    M = n(538645),
    U = n(977156),
    V = n(14676),
    G = n(652380),
    F = n(373230),
    H = n(145158),
    z = n(906467),
    W = n(857192),
    Y = n(131951),
    K = n(25990),
    q = n(626135),
    X = n(572004),
    Q = n(49012),
    J = n(358085),
    $ = n(998502),
    ee = n(695346),
    et = n(604227),
    en = n(38915),
    ei = n(321614),
    er = n(498639),
    es = n(748717),
    el = n(419636),
    ea = n(799071),
    eo = n(154022),
    ec = n(393681),
    ed = n(309739),
    eu = n(64914),
    eg = n(501348),
    em = n(795594),
    ep = n(443702),
    eh = n(327192),
    ef = n(949493),
    eb = n(675047),
    e_ = n(177508),
    ex = n(956699),
    eE = n(54942),
    eC = n(293389),
    ej = n(88624),
    eO = n(387747),
    eS = n(389650),
    ev = n(649157),
    eT = n(593648),
    eI = n(327885),
    eN = n(595242),
    ey = n(463153),
    eA = n(36192),
    eP = n(889029),
    eR = n(400287),
    eD = n(554042),
    eZ = n(936982),
    ew = n(200645),
    ek = n(287490),
    eL = n(706060),
    eB = n(168308),
    eM = n(277329),
    eU = n(273927),
    eV = n(604224),
    eG = n(43434),
    eF = n(333576),
    eH = n(345655),
    ez = n(726985),
    eW = n(583139),
    eY = n(981631),
    eK = n(46140),
    eq = n(65154),
    eX = n(388032),
    eQ = n(622802),
    eJ = n(332495),
    e$ = n(539452);
let e0 = () => [s.z.CLIENT_THEMES_SETTINGS_BADGE, s.z.DEKSTOP_CUSTOM_APP_ICON_BADGE],
    e1 = () => {
        let e = [];
        return F.c.getCurrentConfig({ location: 'SettingsRendererConfig' }).enabled && e.push(s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE), P.e.getCurrentConfig({ location: 'SettingsRendererConfig' }).canPurchase && e.push(s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE), e;
    },
    e3 = () => {
        let e = e1(),
            [t] = (0, T.US)(e);
        return t === s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE ? (0, i.jsx)(D.Z, {}) : t === s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE ? (0, i.jsx)(a.IGR, { text: eX.intl.string(eX.t.y2b7CA) }) : null;
    },
    e8 = ew.Z,
    e2 = (e) => {
        let { unseenGiftCount: t, showPrepaidPaymentPastDueWarning: T, impressionSource: P, numOfPendingFamilyRequests: D, isOverlaySupported: F, isClipsBetaTagShowing: e2 = !1, shouldMergeGameSettings: e6, isKeywordFilteringEnabled: e5, isStaff: e4, isInappropriateConversationWarningEnabled: e7, isInapproprateConversationsDefaultOn: e9, paymentsBlocked: te, isEligibleForQuests: tt, showGiftNitro: tn, isStricterMessageRequestsEnabled: ti, hasLibraryApplication: tr, hasTOTPEnabled: ts, developerMode: tl, isAdultUser: ta, hasSecureFramesVerifiedUserIds: to, hypeSquadRemoved: tc, hasIgnoredUsers: td, hasBlockedUsers: tu, useRefreshedVoiceAndVideo: tg, isEligibleForSensitiveContentDefaults: tm, inputMode: tp, activeInputProfile: th, isInputProfileCustom: tf } = e;
        return Object.freeze({
            [ez.s6.SEARCH_NO_RESULTS]: {
                section: m.ID.CUSTOM,
                element: ey.Z
            },
            [ez.s6.ACCOUNT_SECURITY_TAB]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [eX.intl.string(eX.t.Am9YHh)],
                label: eX.intl.string(eX.t.Am9YHh)
            },
            [ez.s6.ACCOUNT]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [eX.intl.string(eX.t['JAIM/v'])],
                label: eX.intl.string(eX.t['JAIM/v']),
                ariaLabel: eX.intl.string(eX.t['JAIM/v']),
                element: ec.Z,
                url: eY.Z5c.SETTINGS('account')
            },
            [ez.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eX.intl.string(eX.t.LYju5O)],
                parent: ez.s6.ACCOUNT,
                section: eY.oAB.ACCOUNT
            },
            [ez.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eX.intl.string(eX.t['9AjdkJ'])],
                section: eY.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_PROFILE
            },
            [ez.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eX.intl.string(eX.t.Ulqq6O)],
                section: eY.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_PROFILE
            },
            [ez.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [eX.intl.string(eX.t['2UzQiY']), eX.intl.string(eX.t.dJOmCw), eX.intl.string(eX.t['Y0A/1N']), eX.intl.string(eX.t.wRpUfX), eX.intl.string(eX.t['+2/AhI'])],
                section: eY.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_PROFILE,
                predicate: () => tm
            },
            [ez.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eX.intl.string(eX.t['+JkHPz'])],
                section: eY.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_PROFILE
            },
            [ez.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eX.intl.string(eX.t.oP5zGB)],
                section: eY.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_PROFILE
            },
            [ez.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eX.intl.string(eX.t.pKSjEh)],
                section: eY.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT
            },
            [ez.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eX.intl.string(eX.t['FRep5+'])],
                section: eY.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [ez.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eX.intl.string(eX.t['7qKDrK'])],
                section: eY.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [ez.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eX.intl.string(eX.t.m0FidH)],
                section: eY.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [ez.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eX.intl.string(eX.t.cDgKtb)],
                section: eY.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !ts
            },
            [ez.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eX.intl.string(eX.t['D+aE7u'])],
                section: eY.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => ts
            },
            [ez.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eX.intl.string(eX.t.fZSi1N)],
                section: eY.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [ez.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eX.intl.string(eX.t.uHAJ5u)],
                section: eY.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [ez.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eX.intl.string(eX.t.vrOCCg)],
                section: eY.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [ez.s6.ACCOUNT_REMOVAL]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [eX.intl.string(eX.t.ZKsIkp)],
                parent: ez.s6.ACCOUNT
            },
            [ez.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [eX.intl.string(eX.t.jf5GGR)],
                parent: ez.s6.ACCOUNT_REMOVAL
            },
            [ez.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [eX.intl.string(eX.t['8lQ2ra'])],
                parent: ez.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [ez.s6.GAMES]: {
                section: eY.oAB.GAMES,
                searchableTitles: [eX.intl.string(eX.t.URyqtL)],
                label: eX.intl.string(eX.t.URyqtL),
                ariaLabel: eX.intl.string(eX.t.URyqtL),
                element: eM.Z,
                predicate: () => e6
            },
            [ez.s6.GAMES_MY_GAMES]: {
                section: eY.oAB.GAMES,
                searchableTitles: [eX.intl.string(eX.t['5DMgp6'])],
                parent: ez.s6.GAMES
            },
            [ez.s6.GAMES_CLIPS]: {
                section: eY.oAB.GAMES,
                searchableTitles: [eX.intl.string(eX.t.z2jK6e)],
                parent: ez.s6.GAMES
            },
            [ez.s6.GAMES_OVERLAY]: {
                section: eY.oAB.GAMES,
                searchableTitles: [eX.intl.string(eX.t['9cb1U1'])],
                parent: ez.s6.GAMES
            },
            [ez.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eY.oAB.GAMES,
                searchableTitles: [eX.intl.string(eX.t.Cq98yM)],
                parent: ez.s6.GAMES
            },
            [ez.s6.PROFILE_CUSTOMIZATION]: {
                section: eY.oAB.PROFILE_CUSTOMIZATION,
                type: m.bT.WIDE,
                searchableTitles: [eX.intl.string(eX.t['vi7f+v'])],
                label: eX.intl.string(eX.t['vi7f+v']),
                ariaLabel: eX.intl.string(eX.t['vi7f+v']),
                element: B.Z,
                newIndicator: (0, i.jsx)(e3, {}),
                newIndicatorDismissibleContentTypes: [...e1()],
                notice: {
                    stores: [K.Z, y.Z],
                    element: L.Z
                },
                onSettingsClose: () => {
                    o.Z.wait(() => {
                        (0, N.It)(), (0, u.P6)(), g.Z.clearSubsection(eY.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eY.Z5c.SETTINGS('profile-customization')
            },
            [ez.s6.PROFILE_DISPLAY_NAME]: {
                section: eY.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eX.intl.string(eX.t['9AjdkJ'])],
                parent: ez.s6.PROFILE_CUSTOMIZATION
            },
            [ez.s6.PROFILE_USER_PROFILE]: {
                section: eY.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eX.intl.string(eX.t['2p07FR']), eX.intl.string(eX.t['7vhiqq'])],
                parent: ez.s6.PROFILE_CUSTOMIZATION
            },
            [ez.s6.PROFILE_SERVER_PROFILES]: {
                section: eY.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eX.intl.string(eX.t.kPHroa)],
                parent: ez.s6.PROFILE_CUSTOMIZATION
            },
            [ez.s6.CONTENT_SOCIAL]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                label: eX.intl.string(eX.t['+o1pDQ']),
                searchableTitles: [eX.intl.string(eX.t['+o1pDQ'])],
                ariaLabel: eX.intl.string(eX.t['+o1pDQ']),
                element: ef.Z,
                url: eY.Z5c.SETTINGS('content-and-social')
            },
            [ez.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['+o1pDQ']), eX.intl.string(eX.t['/7xJCA'])],
                parent: ez.s6.CONTENT_SOCIAL
            },
            [ez.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['+o1pDQ']), eX.intl.string(eX.t['/7xJCA'])],
                parent: ez.s6.CONTENT_SOCIAL_DISCORD_TAB
            },
            [ez.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.h1hqj4)],
                parent: ez.s6.CONTENT_SOCIAL
            },
            [ez.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                label: eX.intl.string(eX.t.h1hqj4),
                searchableTitles: [eX.intl.string(eX.t.h1hqj4)],
                ariaLabel: eX.intl.string(eX.t.h1hqj4),
                parent: ez.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eY.Z5c.SETTINGS(eY.oAB.CONTENT_AND_SOCIAL, eW.C)
            },
            [ez.s6.DATA_PRIVACY]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                label: eX.intl.string(eX.t.OAuOHB),
                searchableTitles: [eX.intl.string(eX.t.OAuOHB)],
                ariaLabel: eX.intl.string(eX.t.OAuOHB),
                element: eb.Z,
                url: eY.Z5c.SETTINGS('data-and-privacy')
            },
            [ez.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [eX.intl.string(eX.t['Vov/9v'])],
                parent: ez.s6.ACCOUNT
            },
            [ez.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.WWaFn5)],
                parent: ez.s6.DATA_PRIVACY,
                predicate: () => (0, J.isDesktop)()
            },
            [ez.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t['opi/XF'])],
                parent: ez.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY
            },
            [ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.xVRG4O)],
                parent: ez.s6.CONTENT_SOCIAL_DISCORD
            },
            [ez.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.fyA119)],
                parent: ez.s6.CONTENT_SOCIAL_DISCORD
            },
            [ez.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.fyA119)],
                parent: ez.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY
            },
            [ez.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['/U8Iwc'])],
                parent: ez.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            },
            [ez.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['ms+TmZ'])],
                parent: ez.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            },
            [ez.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['y62Z/f'])],
                parent: ez.s6.CONTENT_SOCIAL
            },
            [ez.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.SRZyHh)],
                parent: ez.s6.DATA_PRIVACY
            },
            [ez.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.uEz8JC), eX.intl.string(eX.t['N/oRIy']), eX.intl.string(eX.t.QVdYsL), eX.intl.string(eX.t['aWD+tr']), eX.intl.string(eX.t['5mnTa2'])],
                parent: ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ez.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.JzaP4u), eX.intl.string(eX.t.H9XOl5), eX.intl.string(eX.t.k4W40N)],
                parent: ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ez.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['L+yTsb'])],
                parent: ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ez.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.XahVjo)],
                parent: ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ez.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                parent: ez.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY
            },
            [ez.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.RAQUSE), eX.intl.string(eX.t.wbYDfX)],
                parent: ez.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [ez.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['3o2ojo'])],
                parent: ez.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !ti
            },
            [ez.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.OLwZDQ)],
                parent: ez.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [ez.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.wBkwu7)],
                parent: ez.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [ez.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.XuADY2)],
                parent: ez.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ez.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.MNKzys)],
                parent: ez.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ez.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.VkS7YW)],
                parent: ez.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ez.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.CF],
                parent: ez.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ez.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.dmBSKi)],
                parent: ez.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY
            },
            [ez.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['1UaUy8']), eX.intl.string(eX.t['xIk/iI'])],
                parent: ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e5
            },
            [ez.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.qFsx5u)],
                parent: ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e7 && !ta && !e9
            },
            [ez.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t['5b3FND'])],
                parent: ez.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => to
            },
            [ez.s6.PRIVACY_FAMILY_CENTER]: {
                section: eY.oAB.FAMILY_CENTER,
                searchableTitles: [eX.intl.string(eJ.default.gntCQU)],
                label: eX.intl.string(eJ.default.gntCQU),
                ariaLabel: eX.intl.string(eJ.default.gntCQU),
                element: eE.Z,
                badgeCount: D,
                newIndicator: (0, i.jsx)(a.IGR, {
                    text: eX.intl.string(eX.t.y2b7CA),
                    color: O.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [s.z.FAMILY_CENTER_NEW_BADGE],
                url: eY.Z5c.SETTINGS('family-center')
            },
            [ez.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.BG7Qsb)],
                parent: ez.s6.DATA_PRIVACY
            },
            [ez.s6.AUTHORIZED_APPS]: {
                section: eY.oAB.AUTHORIZED_APPS,
                searchableTitles: [eX.intl.string(eX.t['f6kk+v'])],
                label: eX.intl.string(eX.t['f6kk+v']),
                element: em.Z,
                url: eY.Z5c.SETTINGS('authorized-apps')
            },
            [ez.s6.SESSIONS]: {
                section: eY.oAB.SESSIONS,
                searchableTitles: [eX.intl.string(eX.t['+1h0k5'])],
                label: eX.intl.string(eX.t['+1h0k5']),
                ariaLabel: eX.intl.string(eX.t['+1h0k5']),
                element: eA.Z,
                newIndicatorDismissibleContentTypes: [s.z.AUTH_SESSIONS_NEW],
                impressionName: r.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: P }
            },
            [ez.s6.CONNECTIONS]: {
                section: eY.oAB.CONNECTIONS,
                searchableTitles: [eX.intl.string(eX.t['3fe7U1'])],
                label: eX.intl.string(eX.t['3fe7U1']),
                ariaLabel: eX.intl.string(eX.t['3fe7U1']),
                element: eh.Z,
                impressionName: r.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: P },
                newIndicatorDismissibleContentTypes: [s.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eY.Z5c.SETTINGS('connections')
            },
            [ez.s6.THIRD_PARTY_ACCESS]: {
                section: eY.oAB.CONNECTIONS,
                searchableTitles: [eX.intl.string(eX.t['Ig/XFR']), eX.intl.string(eX.t['3fe7U1']), eX.intl.string(eX.t['f6kk+v'])],
                label: eX.intl.string(eX.t['Ig/XFR']),
                parent: ez.s6.CONNECTIONS,
                element: eZ.Z
            },
            [ez.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eY.oAB.CONNECTIONS,
                searchableTitles: [eX.intl.string(eX.t['+/hZMz'])],
                parent: ez.s6.CONNECTIONS,
                element: eh.Z
            },
            [ez.s6.CLIPS]: {
                section: eY.oAB.CLIPS,
                searchableTitles: [eX.intl.string(eX.t.z2jK6e)],
                label: eX.intl.string(eX.t.z2jK6e),
                ariaLabel: eX.intl.string(eX.t.z2jK6e),
                icon: e2 ? (0, i.jsx)(C.Z, {}) : void 0,
                element: j.Z,
                predicate: () => !e6,
                url: eY.Z5c.SETTINGS('clips')
            },
            [ez.s6.RESTRICTED_USERS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                parent: ez.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eX.intl.string(eX.t['3wRorq']),
                element: eU.ZP,
                predicate: () => td || tu
            },
            [ez.s6.BLOCKED_USERS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                parent: ez.s6.RESTRICTED_USERS,
                label: eX.intl.string(eX.t.PFOUKS),
                searchableTitles: [eX.intl.string(eX.t.PFOUKS)],
                element: eU.GF,
                predicate: () => tu
            },
            [ez.s6.IGNORED_USERS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                parent: ez.s6.RESTRICTED_USERS,
                searchableTitles: [eX.intl.string(eX.t['93ZDWF'])],
                label: eX.intl.string(eX.t['93ZDWF']),
                element: eU.yo,
                predicate: () => td
            },
            [ez.s6.PREMIUM]: {
                section: eY.oAB.PREMIUM,
                ariaLabel: eX.intl.string(eX.t.Ipxkoq),
                searchableTitles: [eX.intl.string(eX.t.Ipxkoq)],
                label: eX.intl.string(eX.t.Ipxkoq),
                element: es.Z,
                className: e$.premiumTab
            },
            [ez.s6.GUILD_BOOSTING]: {
                section: eY.oAB.GUILD_BOOSTING,
                searchableTitles: [eX.intl.string(eX.t['+CbP2t'])],
                label: eX.intl.string(eX.t['+CbP2t']),
                element: eN.Z
            },
            [ez.s6.SUBSCRIPTIONS]: {
                section: eY.oAB.SUBSCRIPTIONS,
                ariaLabel: eX.intl.string(eX.t.trSpHR),
                searchableTitles: [eX.intl.string(eX.t.trSpHR)],
                label: eX.intl.string(eX.t.trSpHR),
                element: k.Z,
                icon: T
                    ? (0, i.jsx)(a.P4T, {
                          size: 'xs',
                          color: l.Z.unsafe_rawColors.YELLOW_300.css
                      })
                    : null
            },
            [ez.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eY.oAB.SUBSCRIPTIONS,
                searchableTitles: [eX.intl.string(eX.t['2GKrvr'])],
                parent: ez.s6.SUBSCRIPTIONS
            },
            [ez.s6.GIFT_INVENTORY]: {
                section: eY.oAB.INVENTORY,
                searchableTitles: [eX.intl.string(eX.t['jcSP+v'])],
                label: eX.intl.string(eX.t['jcSP+v']),
                element: eO.Z,
                ariaLabel: eX.intl.string(eX.t['jcSP+v']),
                badgeCount: t
            },
            [ez.s6.GIFT_NITRO]: {
                section: eY.oAB.INVENTORY,
                searchableTitles: [eX.intl.string(eX.t.Ve9Ge3)],
                parent: ez.s6.GIFT_INVENTORY,
                predicate: () => !te && tn
            },
            [ez.s6.GIFT_CODE_REDEMPTION]: {
                section: eY.oAB.INVENTORY,
                searchableTitles: [eX.intl.string(eX.t['il+VCg'])],
                parent: ez.s6.GIFT_INVENTORY,
                predicate: () => !te
            },
            [ez.s6.GIFT_INVENTORY_QUESTS]: {
                section: eY.oAB.INVENTORY,
                searchableTitles: [eX.intl.string(eX.t.JALI2N)],
                parent: ez.s6.GIFT_INVENTORY,
                predicate: () => tt
            },
            [ez.s6.GIFT_INVENTORY_LIST]: {
                section: eY.oAB.INVENTORY,
                searchableTitles: [eX.intl.string(eX.t['9KeUbW'])],
                parent: ez.s6.GIFT_INVENTORY,
                predicate: () => !te
            },
            [ez.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eY.oAB.INVENTORY,
                searchableTitles: [eX.intl.string(eX.t.vwMEHR)],
                parent: ez.s6.GIFT_INVENTORY,
                predicate: () => te
            },
            [ez.s6.BILLING]: {
                section: eY.oAB.BILLING,
                searchableTitles: [eX.intl.string(eX.t.oeUm2t)],
                label: eX.intl.string(eX.t.oeUm2t),
                ariaLabel: eX.intl.string(eX.t.oeUm2t),
                element: ep.Z
            },
            [ez.s6.BILLING_PAYMENT_METHODS]: {
                section: eY.oAB.BILLING,
                searchableTitles: [eX.intl.string(eX.t.W26xGR)],
                parent: ez.s6.BILLING
            },
            [ez.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eY.oAB.BILLING,
                searchableTitles: [eX.intl.string(eX.t.obLrcH)],
                parent: ez.s6.BILLING
            },
            [ez.s6.APPEARANCE]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [eX.intl.string(eX.t['iHH+k5'])],
                label: eX.intl.string(eX.t['iHH+k5']),
                ariaLabel: eX.intl.string(eX.t['iHH+k5']),
                element: eg.Z,
                newIndicator: (0, i.jsx)(a.lBU, { text: eX.intl.string(eX.t.y2b7CA) }),
                newIndicatorDismissibleContentTypes: e0(),
                url: eY.Z5c.SETTINGS('appearance')
            },
            [ez.s6.APPEARANCE_THEME]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [eX.intl.string(eX.t.Ksh3io)],
                parent: ez.s6.APPEARANCE
            },
            [ez.s6.APPEARANCE_COLOR]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [eX.intl.string(eX.t.OCOOiI)],
                parent: ez.s6.APPEARANCE_THEME
            },
            [ez.s6.APPEARANCE_ICON]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [eX.intl.string(eX.t.RPh2oq)],
                parent: ez.s6.APPEARANCE_THEME
            },
            [ez.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [eX.intl.string(eX.t.ZEoGMT)],
                parent: ez.s6.APPEARANCE
            },
            [ez.s6.APPEARANCE_LIST_SPACING]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: ['List Spacing'],
                parent: ez.s6.APPEARANCE,
                newIndicator: (0, i.jsx)(a.IGR, {
                    text: eX.intl.string(eX.t.y2b7CA),
                    color: O.Z.BG_BRAND
                }),
                predicate: () => (0, S.i9)('SettingsRendererConfig')
            },
            [ez.s6.APPEARANCE_SCALING_SPACING]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [eX.intl.string(eX.t.qPOqoK)],
                parent: ez.s6.APPEARANCE
            },
            [ez.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [eX.intl.string(eX.t.dyamEB), eX.intl.string(eX.t.p8NOws), eX.intl.string(eX.t['+o/sOj'])],
                parent: ez.s6.APPEARANCE,
                predicate: () => H.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable24HourPref
            },
            [ez.s6.ACCESSIBILITY]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.G0neg4)],
                label: eX.intl.string(eX.t.G0neg4),
                ariaLabel: eX.intl.string(eX.t.G0neg4),
                element: eo.Z,
                url: eY.Z5c.SETTINGS('accessibility')
            },
            [ez.s6.ACCESSIBILITY_SATURATION]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t['5PWWCQ'])],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.bQCodH)],
                parent: ez.s6.ACCESSIBILITY_SATURATION
            },
            [ez.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.OLZFBw)],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.uSOPWl)],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.BT8Bmp)],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t['sSY+mJ'])],
                parent: ez.s6.ACCESSIBILITY_PROFILE_COLORS
            },
            [ez.s6.ACCESSIBILITY_CONTRAST]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.TYyfOz)],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.cguieX)],
                parent: ez.s6.ACCESSIBILITY_CONTRAST
            },
            [ez.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.e3TR1d)],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.b3XBzs)],
                parent: ez.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [ez.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.Iayoh4)],
                parent: ez.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [ez.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.iIaOlZ)],
                parent: ez.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [ez.s6.ACCESSIBILITY_STICKERS]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t['6NtAuL'])],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_MESSAGES]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.onqU6u)],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t['3Fztn5'])],
                parent: ez.s6.ACCESSIBILITY_MESSAGES
            },
            [ez.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.TZ2hZG)],
                parent: ez.s6.ACCESSIBILITY_MESSAGES
            },
            [ez.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.VpSKeH)],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.qvTIwc)],
                parent: ez.s6.ACCESSIBILITY_TEXT_TO_SPEECH
            },
            [ez.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.lsW5Eh)],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.CF],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.VOICE_AND_VIDEO]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.B1fFpa)],
                label: eX.intl.string(eX.t.B1fFpa),
                ariaLabel: eX.intl.string(eX.t.B1fFpa),
                element: eV.Z,
                predicate: () => Y.Z.isSupported(),
                url: eY.Z5c.SETTINGS('voice')
            },
            [ez.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.K3lovL), eX.intl.string(eX.t.NiTd0d)],
                parent: ez.s6.VOICE_AND_VIDEO,
                predicate: () => tg
            },
            [ez.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.FlNoSU)],
                parent: ez.s6.VOICE_AND_VIDEO,
                predicate: () => tg
            },
            [ez.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.ABjMWF)],
                parent: ez.s6.VOICE_AND_VIDEO,
                predicate: () => tg
            },
            [ez.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.OFpL3d)],
                parent: ez.s6.VOICE_AND_VIDEO,
                predicate: () => tg
            },
            [ez.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.KDdjoq), eX.intl.string(eX.t.FeUKeH)],
                parent: ez.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tg
            },
            [ez.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.K3lovL), eX.intl.string(eX.t.NiTd0d)],
                parent: tg ? ez.s6.VOICE_AND_VIDEO_VOICE_TAB : ez.s6.VOICE_AND_VIDEO
            },
            [ez.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.hHMYbW), eX.intl.string(eX.t.dl18zc), eX.intl.string(eX.t.nuFtHB), eX.intl.string(eX.t['3182VF']), eX.intl.string(eX.t['DGq/PT'])],
                parent: ez.s6.VOICE_AND_VIDEO_VOICE
            },
            [ez.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.OX2Bnp), eX.intl.string(eX.t.eATD2N), eX.intl.string(eX.t.nuFtHB), eX.intl.string(eX.t['3182VF']), eX.intl.string(eX.t['DGq/PT'])],
                parent: ez.s6.VOICE_AND_VIDEO_VOICE
            },
            [ez.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.gyljWF), eX.intl.string(eX.t.nuFtHB)],
                parent: ez.s6.VOICE_AND_VIDEO_VOICE
            },
            [ez.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.LM3U3t), eX.intl.string(eX.t.nuFtHB), eX.intl.string(eX.t.VZPR0d), eX.intl.string(eX.t.cjPbpa)],
                parent: ez.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, ei.R)({
                        location: 'SettingsRendererConfig',
                        autoTrackExposure: !1
                    });
                    return e.length > 0;
                }
            },
            [ez.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['pS+K2N']), eX.intl.string(eX.t.nuFtHB)],
                parent: ez.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => th !== eH._.STUDIO
            },
            [ez.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['sqUm+v']), eX.intl.string(eX.t.nuFtHB)],
                parent: ez.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tp === eq.pM.VOICE_ACTIVITY && tf
            },
            [ez.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.e7LIiY)],
                parent: tg ? ez.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : ez.s6.VOICE_AND_VIDEO
            },
            [ez.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.nzUc3N)],
                parent: tg ? ez.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB : ez.s6.VOICE_AND_VIDEO
            },
            [ez.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.ABjMWF)],
                parent: ez.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [ez.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.nzUc3N)],
                parent: ez.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [ez.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.LKzQSE)],
                parent: tg ? ez.s6.VOICE_AND_VIDEO_VIDEO_TAB : ez.s6.VOICE_AND_VIDEO
            },
            [ez.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.F122Gx)],
                parent: ez.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => Y.Z.supports(eq.AN.VIDEO)
            },
            [ez.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['3Ppr1t'])],
                parent: ez.s6.VOICE_AND_VIDEO_VIDEO_CAMERA
            },
            [ez.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.lZTUPj)],
                parent: ez.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => Y.Z.supports(eq.AN.VIDEO)
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['8/udY2'])],
                parent: ez.s6.VOICE_AND_VIDEO
            },
            [ez.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['8/udY2'])],
                parent: ez.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tg
            },
            [ez.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['8/udY2'])],
                parent: ez.s6.VOICE_AND_VIDEO_VOICE_TAB,
                predicate: () => tg
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.DSGme3)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => !tg
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.Tceiq6)],
                parent: tg ? ez.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED : ez.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['71Ve19'])],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => Y.Z.supports(eq.AN.OPEN_H264)
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.Sln58f)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.AxnPm5)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== $.ZP.releaseChannel && Y.Z.isExperimentalEncodersSupported()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['6I6GUl'])],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => tf
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.iWTwu7)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['/jwMtr'])],
                parent: tg ? ez.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [ez.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.OBwCXF)],
                parent: tg ? ez.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.t8QhiY), eX.intl.string(eX.t.hmfkCg)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Y.Z.isNoiseSuppressionSupported()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.BbESsr)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Y.Z.isAdvancedVoiceActivitySupported()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.cUMdHx)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Y.Z.isAutomaticGainControlSupported()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.DFPXIC)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Y.Z.showBypassSystemInputProcessing()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.uancuL)],
                parent: tg ? ez.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : ez.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => Y.Z.supports(eq.AN.QOS)
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.oSdBvb)],
                parent: tg ? ez.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : ez.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => Y.Z.supports(eq.AN.ATTENUATION)
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.wVBHr6)],
                parent: tg ? ez.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : ez.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => Y.Z.shouldOfferManualSubsystemSelection()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.KDdjoq), eX.intl.string(eX.t.NMCIf3), eX.intl.string(eX.t.FeUKeH)],
                parent: tg ? ez.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : ez.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => Y.Z.supportsVideoHook() || Y.Z.supportsExperimentalSoundshare() || (Y.Z.supportsSystemScreensharePicker() && (0, J.isMac)())
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.GmWk2N), eX.intl.string(eX.t['Fj/xn5'])],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => Y.Z.supportsVideoHook()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['4I0qzc'])],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => Y.Z.supportsExperimentalSoundshare()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.ie1mgY)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => Y.Z.supportsSystemScreensharePicker() && (0, J.isMac)()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['aP1N/v'])],
                parent: tg ? ez.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : ez.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => J.isPlatformEmbedded
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.OFpL3d)],
                parent: tg ? ez.s6.VOICE_AND_VIDEO_DEBUG_TAB : ez.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['0CEP6e'])],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ee.Sb.getSetting()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['r6K+TE'])],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => Y.Z.isAecDumpSupported()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.U4FgFB)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === $.ZP.releaseChannel || 'development' === $.ZP.releaseChannel) && e4 && Y.Z.supports(eq.AN.CONNECTION_REPLAY)
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['726JHB'])],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => J.isPlatformEmbedded && Y.Z.supports(eq.AN.DEBUG_LOGGING) && null != p.Z.fileManager.readLogFiles
            },
            [ez.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['/RXu6+'])],
                parent: tg ? ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING : ez.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [ez.s6.CLICKER_GAME]: {
                url: eY.Z5c.SETTINGS('clicker-game'),
                section: eY.oAB.CLICKER_GAME,
                searchableTitles: [eX.intl.string(eQ.default['7qZdOz'])],
                label: eX.intl.string(eQ.default['7qZdOz']),
                ariaLabel: eX.intl.string(eQ.default['7qZdOz']),
                element: E.Z,
                predicate: () => x.C.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enableGame,
                icon: (0, i.jsx)('img', {
                    alt: '',
                    src: n(186542),
                    className: e$.clickerGameIcon
                })
            },
            [ez.s6.POGGERMODE]: {
                section: eY.oAB.POGGERMODE,
                searchableTitles: [eX.intl.string(eX.t.AtCukJ)],
                label: eX.intl.string(eX.t.AtCukJ),
                ariaLabel: eX.intl.string(eX.t.AtCukJ),
                element: w.Z,
                predicate: () => Z.Z.settingsVisible,
                icon: (0, i.jsx)('img', {
                    alt: '',
                    src: n(348621),
                    className: e$.poggermodeIcon
                })
            },
            [ez.s6.CHAT]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t['/VQax8'])],
                label: eX.intl.string(eX.t['/VQax8']),
                ariaLabel: eX.intl.string(eX.t['/VQax8']),
                element: eR.Z,
                url: eY.Z5c.SETTINGS('chat')
            },
            [ez.s6.CHAT_INLINE_MEDIA]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.U68Dgo)],
                parent: ez.s6.CHAT
            },
            [ez.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.U47N1t)],
                parent: ez.s6.CHAT_INLINE_MEDIA
            },
            [ez.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.VP11Nj)],
                parent: ez.s6.CHAT_INLINE_MEDIA
            },
            [ez.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t['5S2AKy'])],
                parent: ez.s6.CHAT_INLINE_MEDIA
            },
            [ez.s6.CHAT_EMBEDS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.PWZOn5)],
                parent: ez.s6.CHAT
            },
            [ez.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.xX0ZTE)],
                parent: ez.s6.CHAT_EMBEDS
            },
            [ez.s6.CHAT_EMOJI]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.sMOuub)],
                parent: ez.s6.CHAT
            },
            [ez.s6.CHAT_EMOJI_REACTIONS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.Iv24sr)],
                parent: ez.s6.CHAT_EMOJI
            },
            [ez.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t['79qal5'])],
                parent: ez.s6.CHAT_EMOJI
            },
            [ez.s6.CHAT_STICKERS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t['6NtAuL'])],
                parent: ez.s6.CHAT
            },
            [ez.s6.CHAT_STICKERS_SUGGESTIONS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t['479+PT'])],
                parent: ez.s6.CHAT_STICKERS
            },
            [ez.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t['29xPVV'])],
                parent: ez.s6.CHAT_STICKERS
            },
            [ez.s6.CHAT_SOUNDMOJI]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.EHlAMT)],
                parent: ez.s6.CHAT
            },
            [ez.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t['CtYr+f'])],
                parent: ez.s6.CHAT_SOUNDMOJI
            },
            [ez.s6.CHAT_TEXT_BOX]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.afR0pK)],
                parent: ez.s6.CHAT
            },
            [ez.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.AqGrEB)],
                parent: ez.s6.CHAT_TEXT_BOX
            },
            [ez.s6.CHAT_THREADS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.B2panJ)],
                parent: ez.s6.CHAT
            },
            [ez.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.AInv5u)],
                parent: ez.s6.CHAT_THREADS
            },
            [ez.s6.CHAT_SPOILERS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.QgwmV1)],
                parent: ez.s6.CHAT
            },
            [ez.s6.NOTIFICATIONS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.HcoRu7)],
                label: eX.intl.string(eX.t.HcoRu7),
                ariaLabel: eX.intl.string(eX.t.HcoRu7),
                element: eT.Z,
                url: eY.Z5c.SETTINGS('notifications')
            },
            [ez.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t['/0WClp'])],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.VH8AIC)],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.xSmFQE)],
                parent: ez.s6.NOTIFICATIONS,
                predicate: () => (0, J.isWindows)()
            },
            [ez.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.z21l8P)],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: ['New Notification Settings (Advanced, Staff Only)'],
                parent: ez.s6.NOTIFICATIONS,
                predicate: () => !1
            },
            [ez.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: ['Restore most recent snapshot'],
                parent: ez.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [ez.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: ['Launch Migration'],
                parent: ez.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [ez.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: ['Toggle new system on/off'],
                parent: ez.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [ez.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.TTvjd3)],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.VpSKeH)],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.D9yVAA)],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.u6dc5O)],
                parent: ez.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [ez.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.P8MG6u)],
                parent: ez.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [ez.s6.NOTIFICATIONS_SOUNDS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.MKWyKS)],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_EMAILS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.TPchzM)],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t['B75+xc'])],
                parent: ez.s6.NOTIFICATIONS_EMAILS
            },
            [ez.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.sxn7lZ)],
                parent: ez.s6.NOTIFICATIONS_EMAILS
            },
            [ez.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.EkxXhY)],
                parent: ez.s6.NOTIFICATIONS_EMAILS
            },
            [ez.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.jNrkrK)],
                parent: ez.s6.NOTIFICATIONS_EMAILS
            },
            [ez.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.E8g1l5)],
                parent: ez.s6.NOTIFICATIONS_EMAILS
            },
            [ez.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.Ra9Pws)],
                parent: ez.s6.NOTIFICATIONS_EMAILS
            },
            [ez.s6.NOTIFICATIONS_REACTIONS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.Rq0NFh)],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_GAME_ACTIVITY]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.omtoJy)],
                parent: ez.s6.NOTIFICATIONS,
                predicate: () => (0, I.uw)('SettingsRendererConfig')
            },
            [ez.s6.KEYBINDS]: {
                section: eY.oAB.KEYBINDS,
                searchableTitles: [eX.intl.string(eX.t.T9DA2N)],
                label: eX.intl.string(eX.t.T9DA2N),
                element: eS.Z,
                url: eY.Z5c.SETTINGS('keybinds')
            },
            [ez.s6.LANGUAGE]: {
                section: eY.oAB.LOCALE,
                searchableTitles: [eX.intl.string(eX.t.IHMsPj)],
                label: eX.intl.string(eX.t.IHMsPj),
                element: ev.Z,
                url: eY.Z5c.SETTINGS('language')
            },
            [ez.s6.WINDOW_SETTINGS]: {
                section: eY.oAB.WINDOWS,
                searchableTitles: [eX.intl.string(eX.t.ZkDZoq)],
                label: eX.intl.string(eX.t.ZkDZoq),
                element: ew.Z,
                predicate: () => J.isPlatformEmbedded && (0, J.isWindows)()
            },
            [ez.s6.LINUX_SETTINGS]: {
                section: eY.oAB.LINUX,
                searchableTitles: [eX.intl.string(eX.t['7pPjTU'])],
                label: eX.intl.string(eX.t['7pPjTU']),
                element: e8,
                predicate: () => J.isPlatformEmbedded && (0, J.isLinux)()
            },
            [ez.s6.STREAMER_MODE]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [eX.intl.string(eX.t.S5GfOT)],
                label: eX.intl.string(eX.t.S5GfOT),
                ariaLabel: eX.intl.string(eX.t.S5GfOT),
                element: eP.Z,
                url: eY.Z5c.SETTINGS('streamer-mode')
            },
            [ez.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [eX.intl.string(eX.t.bxGbHB)],
                parent: ez.s6.STREAMER_MODE
            },
            [ez.s6.STREAMER_MODE_ENABLE]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [eX.intl.string(eX.t.p9ZAJS)],
                parent: ez.s6.STREAMER_MODE
            },
            [ez.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [eX.intl.string(eX.t.UpQziI)],
                parent: ez.s6.STREAMER_MODE
            },
            [ez.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [eX.intl.string(eX.t.q7WNGh)],
                parent: ez.s6.STREAMER_MODE
            },
            [ez.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [eX.intl.string(eX.t['1CWknJ'])],
                parent: ez.s6.STREAMER_MODE
            },
            [ez.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [eX.intl.string(eX.t.qmYiYW)],
                parent: ez.s6.STREAMER_MODE
            },
            [ez.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [eX.intl.string(eX.t['iA81+f'])],
                parent: ez.s6.STREAMER_MODE,
                predicate: () => {
                    var e, t, n;
                    return null != (n = null === p.Z || void 0 === p.Z || null == (t = p.Z.window) || null == (e = t.supportsContentProtection) ? void 0 : e.call(t)) && n;
                }
            },
            [ez.s6.SETTINGS_ADVANCED]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [eX.intl.string(eX.t['8/udY2'])],
                label: eX.intl.string(eX.t['8/udY2']),
                ariaLabel: eX.intl.string(eX.t['8/udY2']),
                element: eu.Z
            },
            [ez.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [eX.intl.string(eX.t.ObIb1d)],
                parent: ez.s6.SETTINGS_ADVANCED,
                predicate: () => X.wS
            },
            [ez.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [eX.intl.string(eX.t['eOC/Fx'])],
                parent: ez.s6.SETTINGS_ADVANCED,
                predicate: () => J.isPlatformEmbedded
            },
            [ez.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [eX.intl.string(eX.t.fi3UQE)],
                parent: ez.s6.SETTINGS_ADVANCED,
                predicate: () => tr
            },
            [ez.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [eX.intl.string(eX.t.erOqlp)],
                parent: ez.s6.SETTINGS_ADVANCED,
                predicate: () => tl
            },
            [ez.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [eX.intl.string(eX.t.qDZryM)],
                parent: ez.s6.SETTINGS_ADVANCED
            },
            [ez.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: ['CF WARP', 'CloudFlare WARP'],
                parent: ez.s6.SETTINGS_ADVANCED,
                predicate: () => b.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable
            },
            [ez.s6.ACTIVITY_PRIVACY]: {
                section: eY.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.Cq98yM)],
                label: eX.intl.string(eX.t.Cq98yM),
                ariaLabel: eX.intl.string(eX.t.Cq98yM),
                element: ed.Z,
                predicate: () => !e6,
                url: eY.Z5c.SETTINGS('activity-privacy')
            },
            [ez.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: e6 ? eY.oAB.GAMES : eY.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t['8ka8lp'])],
                parent: e6 ? ez.s6.GAMES_ACTIVITY_PRIVACY : ez.s6.ACTIVITY_PRIVACY
            },
            [ez.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: e6 ? eY.oAB.GAMES : eY.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.VOszPD)],
                parent: e6 ? ez.s6.GAMES_ACTIVITY_PRIVACY : ez.s6.ACTIVITY_PRIVACY
            },
            [ez.s6.ACTIVITY_PRIVACY_TOS]: {
                section: e6 ? eY.oAB.GAMES : eY.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ez.CF],
                parent: e6 ? ez.s6.GAMES_ACTIVITY_PRIVACY : ez.s6.ACTIVITY_PRIVACY
            },
            [ez.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eY.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t['4F2KoK'])],
                parent: ez.s6.ACTIVITY_PRIVACY
            },
            [ez.s6.REGISTERED_GAMES]: {
                section: eY.oAB.REGISTERED_GAMES,
                searchableTitles: [eX.intl.string(eX.t.AVDyEh)],
                label: eX.intl.string(eX.t.AVDyEh),
                element: eC.Z,
                predicate: () => !e6 && (0, eB.Jw)()
            },
            [ez.s6.OVERLAY]: {
                section: eY.oAB.OVERLAY,
                searchableTitles: [eX.intl.string(eX.t['9cb1U1']), eX.intl.string(eX.t.HcoRu7)],
                label: eX.intl.string(eX.t['9cb1U1']),
                element: eI.Z,
                predicate: () => !e6 && F
            },
            [ez.s6.CHANGELOG]: {
                section: 'changelog',
                onClick: () => (0, _.Z)(!0),
                searchableTitles: [eX.intl.string(eX.t.LRmNAg)],
                label: eX.intl.string(eX.t.LRmNAg)
            },
            [ez.s6.MERCHANDISE]: {
                section: 'merchandise',
                onClick: () => {
                    let e = 'https://discordmerch.com/Dsktopprm';
                    q.default.track(eY.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, Q.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                q.default.track(eY.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, h.Z)(e);
                            }
                        });
                },
                searchableTitles: [eX.intl.string(eX.t.sMEktb)],
                label: eX.intl.string(eX.t.sMEktb),
                ariaLabel: eX.intl.string(eX.t.sMEktb)
            },
            [ez.s6.HYPESQUAD]: {
                section: eY.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eX.intl.string(eX.t['k0R+4e'])],
                label: eX.intl.string(eX.t['k0R+4e']),
                element: ej.Z,
                predicate: () => !tc
            },
            [ez.s6.TOWNHALL]: {
                section: eY.oAB.TOWNHALL,
                searchableTitles: [eX.intl.string(eX.t.dnZNER)],
                label: eX.intl.string(eX.t.dnZNER),
                predicate: () => tc,
                onClick: () => {
                    (0, h.Z)('https://discord.gg/discord-townhall'), (0, d.xf)();
                }
            },
            [ez.s6.EXPERIMENTS]: {
                section: eY.oAB.EXPERIMENTS,
                searchableTitles: ['Experiments'],
                label: 'Experiments',
                element: ek.Z,
                predicate: () => z.Z.isDeveloper,
                url: eY.Z5c.SETTINGS('experiments')
            },
            [ez.s6.DEVELOPER_OPTIONS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: ex.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_FLAGS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: ez.s6.DEVELOPER_OPTIONS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Always deliver ads'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e4 && z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e4 && z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Accessibility Auditing'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => !1
            },
            [ez.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['CSS Debugging'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e4 && z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e4 && z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e4 && z.Z.isDeveloper && W.default.layoutDebuggingEnabled
            },
            [ez.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e4 && z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Disable App Collections Cache'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e4 && z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: ez.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: ez.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: ez.s6.DEVELOPER_OPTIONS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: ez.s6.DEVELOPER_OPTIONS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: ez.s6.DEVELOPER_OPTIONS,
                predicate: () => f.q && z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: ez.s6.DEVELOPER_OPTIONS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: ez.s6.DEVELOPER_OPTIONS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: ez.s6.DEVELOPER_OPTIONS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: ez.s6.DEVELOPER_OPTIONS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Prevent Popouts From Closing Automatically'],
                parent: ez.s6.DEVELOPER_OPTIONS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.HOTSPOT_OPTIONS]: {
                section: eY.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: en.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eY.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: v.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.PAYMENT_FLOW_MODALS]: {
                section: eY.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: er.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.REVENUE_STORYBOOK]: {
                section: eY.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Revenue Storybook', 'Payment Components', 'Orb Components', 'Virtual Currency'],
                label: 'Revenue Storybook',
                element: eG.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eY.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ['Virtual Currency', 'Orb', 'Config'],
                label: 'Virtual Currency Config',
                element: eF.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.PAYMENT_COMPONENTS]: {
                section: eY.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Payment Components'],
                label: 'Payment Components',
                element: eG.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.ORB_COMPONENTS]: {
                section: eY.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Orb Components'],
                label: 'Orb Components',
                element: eG.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.TEXT_PLAYGROUND]: {
                section: eY.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: eD.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DESIGN_SYSTEMS]: {
                section: eY.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: e_.Z,
                predicate: () => z.Z.isDeveloper,
                url: eY.Z5c.SETTINGS('design-systems')
            },
            [ez.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eY.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Colors'],
                label: 'Colors',
                element: e_.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.ANIMATION_TESTING]: {
                section: eY.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Animation Testing'],
                label: 'Animation Testing',
                element: e_.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eY.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Components'],
                label: 'Components',
                element: e_.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.TEXT_COMPONENTS]: {
                section: eY.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: ea.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.INTL_TESTING]: {
                section: eY.oAB.INTL_TESTING,
                searchableTitles: ['Intl Testing', 'i18n'],
                label: 'Intl Testing',
                element: A.Z,
                predicate: () => e4 || z.Z.isDeveloper
            },
            [ez.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
                section: eY.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
                searchableTitles: ['PFX Editor'],
                label: 'PFX Editor',
                element: M.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.NAMEPLATES_PREVIEW_TOOL]: {
                section: eY.oAB.NAMEPLATES_PREVIEW_TOOL,
                searchableTitles: ['Nameplates Preview Tool'],
                label: 'Nameplates Preview Tool',
                element: R.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.QUEST_PREVIEW_TOOL]: {
                section: eY.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: G.Z,
                predicate: () => (0, U.X7)({ location: eK.dr.QUEST_PREVIEW_TOOL })
            },
            [ez.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG]: {
                section: eY.oAB.QUEST_MINOR_REWARD_CAPPING_CONFIG,
                searchableTitles: ['Minor Reward Capping Config'],
                label: 'Minor Reward Capping Config',
                element: V.Z,
                predicate: () => e4
            },
            [ez.s6.WEB_SETTING_TREE_TOOL]: {
                section: eY.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ['Web Setting Tree Tool'],
                label: 'Web Setting Tree Tool',
                element: eL.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.LOGOUT]: {
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
                                    header: eX.intl.string(eX.t['2jxGen']),
                                    confirmText: eX.intl.string(eX.t['2jxGen']),
                                    cancelText: eX.intl.string(eX.t['ETE/oK']),
                                    onCancel: e.onClose,
                                    onConfirm: () => c.Z.logout('settings')
                                },
                                e
                            )),
                            (n = n =
                                {
                                    children: (0, i.jsx)(a.Text, {
                                        variant: 'text-md/normal',
                                        children: eX.intl.string(eX.t.SUnWBA)
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
                label: eX.intl.string(eX.t['2jxGen']),
                ariaLabel: eX.intl.string(eX.t['2jxGen']),
                icon: (0, i.jsx)(a.PBZ, {
                    size: 'xs',
                    color: 'currentColor'
                })
            },
            [ez.s6.SOCIAL_LINKS]: {
                section: m.ID.CUSTOM,
                element: el.Z
            },
            [ez.s6.CLIENT_DEBUG_INFO]: {
                section: m.ID.CUSTOM,
                element: et.Z
            }
        });
    };
