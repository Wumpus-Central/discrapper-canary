n.d(t, { i: () => eJ }), n(653041), n(47120);
var r = n(200651);
n(192379);
var i = n(990547),
    s = n(704215),
    a = n(692547),
    l = n(481060),
    o = n(570140),
    c = n(893776),
    d = n(37234),
    u = n(809206),
    m = n(230711),
    g = n(493544),
    p = n(579806),
    h = n(782568),
    f = n(758182),
    x = n(163379),
    N = n(703288),
    b = n(574755),
    _ = n(377171),
    E = n(540059),
    j = n(621628),
    C = n(243778),
    O = n(18438),
    v = n(778825),
    S = n(665166),
    T = n(309351),
    I = n(715495),
    y = n(158947),
    A = n(351780),
    P = n(231765),
    R = n(813732),
    D = n(398140),
    Z = n(564344),
    w = n(746263),
    k = n(977156),
    W = n(652380),
    L = n(373230),
    B = n(87478),
    M = n(145158),
    U = n(906467),
    V = n(857192),
    G = n(131951),
    F = n(25990),
    H = n(626135),
    z = n(572004),
    Y = n(49012),
    K = n(358085),
    q = n(998502),
    X = n(695346),
    J = n(604227),
    Q = n(38915),
    $ = n(498639),
    ee = n(748717),
    et = n(419636),
    en = n(799071),
    er = n(601433),
    ei = n(154022),
    es = n(393681),
    ea = n(309739),
    el = n(64914),
    eo = n(501348),
    ec = n(795594),
    ed = n(443702),
    eu = n(327192),
    em = n(949493),
    eg = n(675047),
    ep = n(177508),
    eh = n(956699),
    ef = n(54942),
    ex = n(293389),
    eN = n(88624),
    eb = n(387747),
    e_ = n(389650),
    eE = n(649157),
    ej = n(593648),
    eC = n(327885),
    eO = n(595242),
    ev = n(463153),
    eS = n(36192),
    eT = n(889029),
    eI = n(400287),
    ey = n(554042),
    eA = n(936982),
    eP = n(200645),
    eR = n(287490),
    eD = n(706060),
    eZ = n(168308),
    ew = n(277329),
    ek = n(273927),
    eW = n(604224),
    eL = n(43434),
    eB = n(333576),
    eM = n(726985),
    eU = n(981631),
    eV = n(46140),
    eG = n(65154),
    eF = n(388032),
    eH = n(917566),
    ez = n(156564);
let eY = () => [s.z.CLIENT_THEMES_SETTINGS_BADGE, s.z.DEKSTOP_CUSTOM_APP_ICON_BADGE],
    eK = () => {
        let e = [];
        return L.cy.getCurrentConfig({ location: 'SettingsRendererConfig' }).enabled && e.push(s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE), T.w.getCurrentConfig({ location: 'SettingsRendererConfig' }).canPurchase && e.push(s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE), e;
    },
    eq = () => {
        let e = eK(),
            [t] = (0, C.US)(e);
        return t === s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE ? (0, r.jsx)(y.Z, {}) : t === s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE ? (0, r.jsx)(B.Z, {}) : null;
    },
    eX = eP.Z,
    eJ = (e) => {
        let { unseenGiftCount: t, showPrepaidPaymentPastDueWarning: C, impressionSource: T, numOfPendingFamilyRequests: y, isOverlaySupported: L, isClipsBetaTagShowing: B = !1, shouldMergeGameSettings: eJ, isKeywordFilteringEnabled: eQ, isStaff: e$, isInappropriateConversationWarningEnabled: e0, isInapproprateConversationsDefaultOn: e1, paymentsBlocked: e2, isEligibleForQuests: e6, showGiftNitro: e3, isStricterMessageRequestsEnabled: e8, hasLibraryApplication: e4, hasTOTPEnabled: e7, developerMode: e9, isAdultUser: e5, hasSecureFramesVerifiedUserIds: te, hypeSquadRemoved: tt, stealthRemediationEnabled: tn, hasIgnoredUsers: tr, hasBlockedUsers: ti, isAllowGameFriendDMsVisible: ts, useRefreshedVoiceAndVideo: ta } = e;
        return Object.freeze({
            [eM.s6.SEARCH_NO_RESULTS]: {
                section: g.ID.CUSTOM,
                element: ev.Z
            },
            [eM.s6.ACCOUNT_SECURITY_TAB]: {
                section: eU.oAB.ACCOUNT,
                searchableTitles: [eF.NW.string(eF.t.Am9YHh)],
                label: eF.NW.string(eF.t.Am9YHh)
            },
            [eM.s6.ACCOUNT]: {
                section: eU.oAB.ACCOUNT,
                searchableTitles: [eF.NW.string(eF.t['JAIM/v'])],
                label: eF.NW.string(eF.t['JAIM/v']),
                ariaLabel: eF.NW.string(eF.t['JAIM/v']),
                element: es.Z,
                url: eU.Z5c.SETTINGS('account')
            },
            [eM.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eF.NW.string(eF.t.LYju5O)],
                parent: eM.s6.ACCOUNT,
                section: eU.oAB.ACCOUNT
            },
            [eM.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eF.NW.string(eF.t['9AjdkJ'])],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE
            },
            [eM.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eF.NW.string(eF.t.Ulqq6O)],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE
            },
            [eM.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eF.NW.string(eF.t['+JkHPz'])],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE
            },
            [eM.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eF.NW.string(eF.t.oP5zGB)],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE
            },
            [eM.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eF.NW.string(eF.t.pKSjEh)],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT
            },
            [eM.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eF.NW.string(eF.t['FRep5+'])],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eF.NW.string(eF.t['7qKDrK'])],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eF.NW.string(eF.t.m0FidH)],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eF.NW.string(eF.t.cDgKtb)],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e7
            },
            [eM.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eF.NW.string(eF.t['D+aE7u'])],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e7
            },
            [eM.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eF.NW.string(eF.t.fZSi1N)],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eF.NW.string(eF.t.uHAJ5u)],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eF.NW.string(eF.t.vrOCCg)],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_REMOVAL]: {
                section: eU.oAB.ACCOUNT,
                searchableTitles: [eF.NW.string(eF.t.ZKsIkp)],
                parent: eM.s6.ACCOUNT
            },
            [eM.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eU.oAB.ACCOUNT,
                searchableTitles: [eF.NW.string(eF.t.jf5GGR)],
                parent: eM.s6.ACCOUNT_REMOVAL
            },
            [eM.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eU.oAB.ACCOUNT,
                searchableTitles: [eF.NW.string(eF.t['8lQ2ra'])],
                parent: eM.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [eM.s6.GAMES]: {
                section: eU.oAB.GAMES,
                searchableTitles: [eF.NW.string(eF.t.URyqtL)],
                label: eF.NW.string(eF.t.URyqtL),
                ariaLabel: eF.NW.string(eF.t.URyqtL),
                element: ew.Z,
                predicate: () => eJ
            },
            [eM.s6.GAMES_MY_GAMES]: {
                section: eU.oAB.GAMES,
                searchableTitles: [eF.NW.string(eF.t['5DMgp6'])],
                parent: eM.s6.GAMES
            },
            [eM.s6.GAMES_CLIPS]: {
                section: eU.oAB.GAMES,
                searchableTitles: [eF.NW.string(eF.t.z2jK6e)],
                parent: eM.s6.GAMES
            },
            [eM.s6.GAMES_OVERLAY]: {
                section: eU.oAB.GAMES,
                searchableTitles: [eF.NW.string(eF.t['9cb1U1'])],
                parent: eM.s6.GAMES
            },
            [eM.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eU.oAB.GAMES,
                searchableTitles: [eF.NW.string(eF.t.Cq98yM)],
                parent: eM.s6.GAMES
            },
            [eM.s6.PROFILE_CUSTOMIZATION]: {
                section: eU.oAB.PROFILE_CUSTOMIZATION,
                type: g.bT.WIDE,
                searchableTitles: [eF.NW.string(eF.t['vi7f+v'])],
                label: eF.NW.string(eF.t['vi7f+v']),
                ariaLabel: eF.NW.string(eF.t['vi7f+v']),
                element: Z.Z,
                newIndicator: (0, r.jsx)(eq, {}),
                newIndicatorDismissibleContentTypes: [...eK()],
                notice: {
                    stores: [F.Z, v.Z],
                    element: D.Z
                },
                onSettingsClose: () => {
                    o.Z.wait(() => {
                        (0, O.It)(), (0, u.P6)(), m.Z.clearSubsection(eU.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eU.Z5c.SETTINGS('profile-customization')
            },
            [eM.s6.PROFILE_DISPLAY_NAME]: {
                section: eU.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eF.NW.string(eF.t['9AjdkJ'])],
                parent: eM.s6.PROFILE_CUSTOMIZATION
            },
            [eM.s6.PROFILE_USER_PROFILE]: {
                section: eU.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eF.NW.string(eF.t['OU3/Pj'])],
                parent: eM.s6.PROFILE_CUSTOMIZATION
            },
            [eM.s6.PROFILE_SERVER_PROFILES]: {
                section: eU.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eF.NW.string(eF.t.kPHroa)],
                parent: eM.s6.PROFILE_CUSTOMIZATION
            },
            [eM.s6.CONTENT_SOCIAL]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                label: eF.NW.string(eF.t['+o1pDQ']),
                searchableTitles: [eF.NW.string(eF.t['+o1pDQ'])],
                ariaLabel: eF.NW.string(eF.t['+o1pDQ']),
                element: em.Z,
                url: eU.Z5c.SETTINGS('content-and-social')
            },
            [eM.s6.DATA_PRIVACY]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                label: eF.NW.string(eF.t.OAuOHB),
                searchableTitles: [eF.NW.string(eF.t.OAuOHB)],
                ariaLabel: eF.NW.string(eF.t.OAuOHB),
                element: eg.Z,
                url: eU.Z5c.SETTINGS('data-and-privacy')
            },
            [eM.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eU.oAB.ACCOUNT,
                searchableTitles: [eF.NW.string(eF.t['Vov/9v'])],
                parent: eM.s6.ACCOUNT
            },
            [eM.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.NW.string(eF.t.WWaFn5)],
                parent: eM.s6.DATA_PRIVACY,
                predicate: () => (0, K.isDesktop)()
            },
            [eM.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.NW.string(eF.t['opi/XF'])],
                parent: eM.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY
            },
            [eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.NW.string(eF.t.xVRG4O)],
                parent: eM.s6.CONTENT_SOCIAL
            },
            [eM.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.NW.string(eF.t.fyA119)],
                parent: eM.s6.CONTENT_SOCIAL
            },
            [eM.s6.PRIVACY_AND_SAFETY_GAME_FRIENDS_CATEGORY]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.NW.string(eF.t.oPyABA)],
                parent: eM.s6.CONTENT_SOCIAL,
                predicate: () => ts
            },
            [eM.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.NW.string(eF.t.fyA119)],
                parent: eM.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY
            },
            [eM.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.NW.string(eF.t['/U8Iwc'])],
                parent: eM.s6.PRIVACY_AND_SAFETY_GAME_FRIENDS_CATEGORY,
                predicate: () => ts
            },
            [eM.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.NW.string(eF.t['y62Z/f'])],
                parent: eM.s6.CONTENT_SOCIAL
            },
            [eM.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.NW.string(eF.t.SRZyHh)],
                parent: eM.s6.DATA_PRIVACY
            },
            [eM.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.NW.string(eF.t.uEz8JC), eF.NW.string(eF.t['N/oRIy']), eF.NW.string(eF.t.QVdYsL), eF.NW.string(eF.t['aWD+tr']), eF.NW.string(eF.t['5mnTa2'])],
                parent: eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eM.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.NW.string(eF.t.JzaP4u), eF.NW.string(eF.t.H9XOl5), eF.NW.string(eF.t.k4W40N)],
                parent: eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.NW.string(eF.t['L+yTsb'])],
                parent: eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.NW.string(eF.t.XahVjo)],
                parent: eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eM.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                parent: eM.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.NW.string(eF.t.RAQUSE), eF.NW.string(eF.t.wbYDfX)],
                parent: eM.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.NW.string(eF.t['3o2ojo'])],
                parent: eM.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !e8
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.NW.string(eF.t.OLwZDQ)],
                parent: eM.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.NW.string(eF.t.wBkwu7)],
                parent: eM.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eM.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.NW.string(eF.t.XuADY2)],
                parent: eM.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eM.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.NW.string(eF.t.MNKzys)],
                parent: eM.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eM.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.NW.string(eF.t.VkS7YW)],
                parent: eM.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eM.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eM.CF],
                parent: eM.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eM.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.NW.string(eF.t.dmBSKi)],
                parent: eM.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY
            },
            [eM.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.NW.string(eF.t['1UaUy8']), eF.NW.string(eF.t['xIk/iI'])],
                parent: eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eQ
            },
            [eM.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.NW.string(eF.t.qFsx5u)],
                parent: eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e0 && !e5 && !e1
            },
            [eM.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.NW.string(eF.t['5b3FND'])],
                parent: eM.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => te
            },
            [eM.s6.PRIVACY_FAMILY_CENTER]: {
                section: eU.oAB.FAMILY_CENTER,
                searchableTitles: [eF.NW.string(eH.Z.gntCQU)],
                label: eF.NW.string(eH.Z.gntCQU),
                ariaLabel: eF.NW.string(eH.Z.gntCQU),
                element: ef.Z,
                badgeCount: y,
                newIndicator: (0, r.jsx)(l.IGR, {
                    text: eF.NW.string(eF.t.y2b7CA),
                    color: _.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [s.z.FAMILY_CENTER_NEW_BADGE],
                url: eU.Z5c.SETTINGS('family-center')
            },
            [eM.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.NW.string(eF.t.BG7Qsb)],
                parent: eM.s6.DATA_PRIVACY
            },
            [eM.s6.AUTHORIZED_APPS]: {
                section: eU.oAB.AUTHORIZED_APPS,
                searchableTitles: [eF.NW.string(eF.t['f6kk+v'])],
                label: eF.NW.string(eF.t['f6kk+v']),
                element: ec.Z,
                url: eU.Z5c.SETTINGS('authorized-apps')
            },
            [eM.s6.SESSIONS]: {
                section: eU.oAB.SESSIONS,
                searchableTitles: [eF.NW.string(eF.t['+1h0k5'])],
                label: eF.NW.string(eF.t['+1h0k5']),
                ariaLabel: eF.NW.string(eF.t['+1h0k5']),
                element: eS.Z,
                newIndicatorDismissibleContentTypes: [s.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: T }
            },
            [eM.s6.CONNECTIONS]: {
                section: eU.oAB.CONNECTIONS,
                searchableTitles: [eF.NW.string(eF.t['3fe7U1'])],
                label: eF.NW.string(eF.t['3fe7U1']),
                ariaLabel: eF.NW.string(eF.t['3fe7U1']),
                element: eu.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: T },
                newIndicatorDismissibleContentTypes: [s.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eU.Z5c.SETTINGS('connections')
            },
            [eM.s6.THIRD_PARTY_ACCESS]: {
                section: eU.oAB.CONNECTIONS,
                searchableTitles: [eF.NW.string(eF.t['Ig/XFR']), eF.NW.string(eF.t['3fe7U1']), eF.NW.string(eF.t['f6kk+v'])],
                label: eF.NW.string(eF.t['Ig/XFR']),
                parent: eM.s6.CONNECTIONS,
                element: eA.Z
            },
            [eM.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eU.oAB.CONNECTIONS,
                searchableTitles: [eF.NW.string(eF.t['+/hZMz'])],
                parent: eM.s6.CONNECTIONS,
                element: eu.Z
            },
            [eM.s6.CLIPS]: {
                section: eU.oAB.CLIPS,
                searchableTitles: [eF.NW.string(eF.t.z2jK6e)],
                label: eF.NW.string(eF.t.z2jK6e),
                ariaLabel: eF.NW.string(eF.t.z2jK6e),
                icon: B ? (0, r.jsx)(N.Z, {}) : void 0,
                element: b.Z,
                predicate: () => !eJ,
                url: eU.Z5c.SETTINGS('clips')
            },
            [eM.s6.RESTRICTED_USERS]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                parent: eM.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eF.NW.string(eF.t['3wRorq']),
                element: ek.ZP,
                predicate: () => tn && (tr || ti)
            },
            [eM.s6.BLOCKED_USERS]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                parent: eM.s6.RESTRICTED_USERS,
                label: eF.NW.string(eF.t.PFOUKS),
                searchableTitles: [eF.NW.string(eF.t.PFOUKS)],
                element: ek.GF,
                predicate: () => tn && ti
            },
            [eM.s6.IGNORED_USERS]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                parent: eM.s6.RESTRICTED_USERS,
                searchableTitles: [eF.NW.string(eF.t['93ZDWF'])],
                label: eF.NW.string(eF.t['93ZDWF']),
                element: ek.yo,
                predicate: () => tn && tr
            },
            [eM.s6.PREMIUM]: {
                section: eU.oAB.PREMIUM,
                ariaLabel: eF.NW.string(eF.t.Ipxkoq),
                searchableTitles: [eF.NW.string(eF.t.Ipxkoq)],
                label: eF.NW.string(eF.t.Ipxkoq),
                element: ee.Z,
                className: ez.premiumTab
            },
            [eM.s6.GUILD_BOOSTING]: {
                section: eU.oAB.GUILD_BOOSTING,
                searchableTitles: [eF.NW.string(eF.t['+CbP2t'])],
                label: eF.NW.string(eF.t['+CbP2t']),
                element: eO.Z
            },
            [eM.s6.SUBSCRIPTIONS]: {
                section: eU.oAB.SUBSCRIPTIONS,
                ariaLabel: eF.NW.string(eF.t.trSpHR),
                searchableTitles: [eF.NW.string(eF.t.trSpHR)],
                label: eF.NW.string(eF.t.trSpHR),
                element: R.Z,
                icon: C
                    ? (0, r.jsx)(l.P4T, {
                          size: 'xs',
                          color: a.Z.unsafe_rawColors.YELLOW_300.css
                      })
                    : null
            },
            [eM.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eU.oAB.SUBSCRIPTIONS,
                searchableTitles: [eF.NW.string(eF.t['2GKrvr'])],
                parent: eM.s6.SUBSCRIPTIONS
            },
            [eM.s6.GIFT_INVENTORY]: {
                section: eU.oAB.INVENTORY,
                searchableTitles: [eF.NW.string(eF.t['jcSP+v'])],
                label: eF.NW.string(eF.t['jcSP+v']),
                element: eb.Z,
                ariaLabel: eF.NW.string(eF.t['jcSP+v']),
                badgeCount: t
            },
            [eM.s6.GIFT_NITRO]: {
                section: eU.oAB.INVENTORY,
                searchableTitles: [eF.NW.string(eF.t.Ve9Ge3)],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => !e2 && e3
            },
            [eM.s6.GIFT_CODE_REDEMPTION]: {
                section: eU.oAB.INVENTORY,
                searchableTitles: [eF.NW.string(eF.t['il+VCg'])],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => !e2
            },
            [eM.s6.GIFT_INVENTORY_QUESTS]: {
                section: eU.oAB.INVENTORY,
                searchableTitles: [eF.NW.string(eF.t.JALI2N)],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => e6
            },
            [eM.s6.GIFT_INVENTORY_LIST]: {
                section: eU.oAB.INVENTORY,
                searchableTitles: [eF.NW.string(eF.t['9KeUbW'])],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => !e2
            },
            [eM.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eU.oAB.INVENTORY,
                searchableTitles: [eF.NW.string(eF.t.vwMEHR)],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => e2
            },
            [eM.s6.BILLING]: {
                section: eU.oAB.BILLING,
                searchableTitles: [eF.NW.string(eF.t.oeUm2t)],
                label: eF.NW.string(eF.t.oeUm2t),
                ariaLabel: eF.NW.string(eF.t.oeUm2t),
                element: ed.Z
            },
            [eM.s6.BILLING_PAYMENT_METHODS]: {
                section: eU.oAB.BILLING,
                searchableTitles: [eF.NW.string(eF.t.W26xGR)],
                parent: eM.s6.BILLING
            },
            [eM.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eU.oAB.BILLING,
                searchableTitles: [eF.NW.string(eF.t.obLrcH)],
                parent: eM.s6.BILLING
            },
            [eM.s6.APPEARANCE]: {
                section: eU.oAB.APPEARANCE,
                searchableTitles: [eF.NW.string(eF.t['iHH+k5'])],
                label: eF.NW.string(eF.t['iHH+k5']),
                ariaLabel: eF.NW.string(eF.t['iHH+k5']),
                element: eo.Z,
                newIndicator: (0, r.jsx)(l.lBU, { text: eF.NW.string(eF.t.y2b7CA) }),
                newIndicatorDismissibleContentTypes: eY(),
                url: eU.Z5c.SETTINGS('appearance')
            },
            [eM.s6.APPEARANCE_THEME]: {
                section: eU.oAB.APPEARANCE,
                searchableTitles: [eF.NW.string(eF.t.Ksh3io)],
                parent: eM.s6.APPEARANCE
            },
            [eM.s6.APPEARANCE_COLOR]: {
                section: eU.oAB.APPEARANCE,
                searchableTitles: [eF.NW.string(eF.t.OCOOiI)],
                parent: eM.s6.APPEARANCE_THEME
            },
            [eM.s6.APPEARANCE_ICON]: {
                section: eU.oAB.APPEARANCE,
                searchableTitles: [eF.NW.string(eF.t.RPh2oq)],
                parent: eM.s6.APPEARANCE_THEME
            },
            [eM.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eU.oAB.APPEARANCE,
                searchableTitles: [eF.NW.string(eF.t.ZEoGMT)],
                parent: eM.s6.APPEARANCE
            },
            [eM.s6.APPEARANCE_LIST_SPACING]: {
                section: eU.oAB.APPEARANCE,
                searchableTitles: ['List Spacing'],
                parent: eM.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(l.IGR, {
                    text: eF.NW.string(eF.t.y2b7CA),
                    color: _.Z.BG_BRAND
                }),
                predicate: () => (0, E.i9)('SettingsRendererConfig')
            },
            [eM.s6.APPEARANCE_SCALING_SPACING]: {
                section: eU.oAB.APPEARANCE,
                searchableTitles: [eF.NW.string(eF.t.qPOqoK)],
                parent: eM.s6.APPEARANCE
            },
            [eM.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eU.oAB.APPEARANCE,
                searchableTitles: [eF.NW.string(eF.t.dyamEB), eF.NW.string(eF.t.p8NOws), eF.NW.string(eF.t['+o/sOj'])],
                parent: eM.s6.APPEARANCE,
                predicate: () => M.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable24HourPref
            },
            [eM.s6.ACCESSIBILITY]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.G0neg4)],
                label: eF.NW.string(eF.t.G0neg4),
                ariaLabel: eF.NW.string(eF.t.G0neg4),
                element: ei.Z,
                url: eU.Z5c.SETTINGS('accessibility')
            },
            [eM.s6.ACCESSIBILITY_SATURATION]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t['5PWWCQ'])],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.bQCodH)],
                parent: eM.s6.ACCESSIBILITY_SATURATION
            },
            [eM.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.OLZFBw)],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.uSOPWl)],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_TAGS]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.UQt6dX)],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_TAGS_NAMES]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.UPwh1N)],
                parent: eM.s6.ACCESSIBILITY_TAGS
            },
            [eM.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.BT8Bmp)],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t['sSY+mJ'])],
                parent: eM.s6.ACCESSIBILITY_PROFILE_COLORS
            },
            [eM.s6.ACCESSIBILITY_CONTRAST]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.TYyfOz)],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.cguieX)],
                parent: eM.s6.ACCESSIBILITY_CONTRAST
            },
            [eM.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.e3TR1d)],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.b3XBzs)],
                parent: eM.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eM.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.Iayoh4)],
                parent: eM.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eM.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.iIaOlZ)],
                parent: eM.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eM.s6.ACCESSIBILITY_STICKERS]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t['6NtAuL'])],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_MESSAGES]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.onqU6u)],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t['3Fztn5'])],
                parent: eM.s6.ACCESSIBILITY_MESSAGES
            },
            [eM.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.TZ2hZG)],
                parent: eM.s6.ACCESSIBILITY_MESSAGES
            },
            [eM.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.VpSKeH)],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.qvTIwc)],
                parent: eM.s6.ACCESSIBILITY_TEXT_TO_SPEECH
            },
            [eM.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eF.NW.string(eF.t.lsW5Eh)],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eM.CF],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.VOICE_AND_VIDEO]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.B1fFpa)],
                label: eF.NW.string(eF.t.B1fFpa),
                ariaLabel: eF.NW.string(eF.t.B1fFpa),
                element: eW.Z,
                predicate: () => G.Z.isSupported(),
                url: eU.Z5c.SETTINGS('voice')
            },
            [eM.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.K3lovL), eF.NW.string(eF.t.NiTd0d)],
                parent: eM.s6.VOICE_AND_VIDEO,
                predicate: () => ta
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.FlNoSU)],
                parent: eM.s6.VOICE_AND_VIDEO,
                predicate: () => ta
            },
            [eM.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.ABjMWF)],
                parent: eM.s6.VOICE_AND_VIDEO,
                predicate: () => ta
            },
            [eM.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.OFpL3d)],
                parent: eM.s6.VOICE_AND_VIDEO,
                predicate: () => ta
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.KDdjoq), eF.NW.string(eF.t.FeUKeH)],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => ta
            },
            [eM.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.K3lovL), eF.NW.string(eF.t.NiTd0d)],
                parent: ta ? eM.s6.VOICE_AND_VIDEO_VOICE_TAB : eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.hHMYbW), eF.NW.string(eF.t.dl18zc), eF.NW.string(eF.t.nuFtHB), eF.NW.string(eF.t['3182VF']), eF.NW.string(eF.t['DGq/PT'])],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE
            },
            [eM.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.OX2Bnp), eF.NW.string(eF.t.eATD2N), eF.NW.string(eF.t.nuFtHB), eF.NW.string(eF.t['3182VF']), eF.NW.string(eF.t['DGq/PT'])],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE
            },
            [eM.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.gyljWF), eF.NW.string(eF.t.nuFtHB)],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE
            },
            [eM.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t['pS+K2N']), eF.NW.string(eF.t.nuFtHB)],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE
            },
            [eM.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t['sqUm+v']), eF.NW.string(eF.t.nuFtHB)],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => G.Z.getMode() === eG.pM.VOICE_ACTIVITY
            },
            [eM.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.e7LIiY)],
                parent: ta ? eM.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.nzUc3N)],
                parent: ta ? eM.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB : eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.ABjMWF)],
                parent: eM.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eM.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.nzUc3N)],
                parent: eM.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.LKzQSE)],
                parent: ta ? eM.s6.VOICE_AND_VIDEO_VIDEO_TAB : eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.F122Gx)],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => G.Z.supports(eG.AN.VIDEO)
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t['3Ppr1t'])],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO_CAMERA
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.lZTUPj)],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => G.Z.supports(eG.AN.VIDEO)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t['8/udY2'])],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t['8/udY2'])],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => ta
            },
            [eM.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t['8/udY2'])],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE_TAB,
                predicate: () => ta
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.DSGme3)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => !ta
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.Tceiq6)],
                parent: ta ? eM.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED : eM.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t['71Ve19'])],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => G.Z.supports(eG.AN.OPEN_H264)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.Sln58f)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.AxnPm5)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== q.ZP.releaseChannel && G.Z.isExperimentalEncodersSupported()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t['6I6GUl'])],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.iWTwu7)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t['/jwMtr'])],
                parent: ta ? eM.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eM.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.OBwCXF)],
                parent: ta ? eM.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.t8QhiY), eF.NW.string(eF.t.hmfkCg)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => G.Z.isNoiseSuppressionSupported()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.BbESsr)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => G.Z.isAdvancedVoiceActivitySupported()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.cUMdHx)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => G.Z.isAutomaticGainControlSupported()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.uancuL)],
                parent: ta ? eM.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eM.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => G.Z.supports(eG.AN.QOS)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.oSdBvb)],
                parent: ta ? eM.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eM.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => G.Z.supports(eG.AN.ATTENUATION)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.wVBHr6)],
                parent: ta ? eM.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eM.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => G.Z.supports(eG.AN.LEGACY_AUDIO_SUBSYSTEM) || G.Z.supports(eG.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.KDdjoq), eF.NW.string(eF.t.NMCIf3), eF.NW.string(eF.t.FeUKeH)],
                parent: ta ? eM.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eM.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => G.Z.supportsVideoHook() || G.Z.supportsExperimentalSoundshare() || (G.Z.supportsSystemScreensharePicker() && (0, K.isMac)())
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.GmWk2N), eF.NW.string(eF.t['Fj/xn5'])],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => G.Z.supportsVideoHook()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t['4I0qzc'])],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => G.Z.supportsExperimentalSoundshare()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.ie1mgY)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => G.Z.supportsSystemScreensharePicker() && (0, K.isMac)()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t['aP1N/v'])],
                parent: ta ? eM.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eM.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => K.isPlatformEmbedded
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.OFpL3d)],
                parent: ta ? eM.s6.VOICE_AND_VIDEO_DEBUG_TAB : eM.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t['0CEP6e'])],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => X.Sb.getSetting()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t['r6K+TE'])],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => G.Z.isAecDumpSupported()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t.U4FgFB)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === q.ZP.releaseChannel || 'development' === q.ZP.releaseChannel) && e$ && G.Z.supports(eG.AN.CONNECTION_REPLAY)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t['726JHB'])],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => K.isPlatformEmbedded && G.Z.supports(eG.AN.DEBUG_LOGGING) && null != p.Z.fileManager.readLogFiles
            },
            [eM.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eF.NW.string(eF.t['/RXu6+'])],
                parent: ta ? eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING : eM.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eM.s6.POGGERMODE]: {
                section: eU.oAB.POGGERMODE,
                searchableTitles: [eF.NW.string(eF.t.AtCukJ)],
                label: eF.NW.string(eF.t.AtCukJ),
                ariaLabel: eF.NW.string(eF.t.AtCukJ),
                element: P.Z,
                predicate: () => A.Z.settingsVisible,
                icon: (0, r.jsx)('img', {
                    alt: '',
                    src: n(348621),
                    className: ez.poggermodeIcon
                })
            },
            [eM.s6.CHAT]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t['/VQax8'])],
                label: eF.NW.string(eF.t['/VQax8']),
                ariaLabel: eF.NW.string(eF.t['/VQax8']),
                element: eI.Z,
                url: eU.Z5c.SETTINGS('chat')
            },
            [eM.s6.CHAT_INLINE_MEDIA]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t.U68Dgo)],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t.U47N1t)],
                parent: eM.s6.CHAT_INLINE_MEDIA
            },
            [eM.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t.VP11Nj)],
                parent: eM.s6.CHAT_INLINE_MEDIA
            },
            [eM.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t['5S2AKy'])],
                parent: eM.s6.CHAT_INLINE_MEDIA
            },
            [eM.s6.CHAT_EMBEDS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t.PWZOn5)],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t.xX0ZTE)],
                parent: eM.s6.CHAT_EMBEDS
            },
            [eM.s6.CHAT_EMOJI]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t.sMOuub)],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_EMOJI_REACTIONS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t.Iv24sr)],
                parent: eM.s6.CHAT_EMOJI
            },
            [eM.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t['79qal5'])],
                parent: eM.s6.CHAT_EMOJI
            },
            [eM.s6.CHAT_STICKERS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t['6NtAuL'])],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_STICKERS_SUGGESTIONS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t['479+PT'])],
                parent: eM.s6.CHAT_STICKERS
            },
            [eM.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t['29xPVV'])],
                parent: eM.s6.CHAT_STICKERS
            },
            [eM.s6.CHAT_SOUNDMOJI]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t.EHlAMT)],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t['CtYr+f'])],
                parent: eM.s6.CHAT_SOUNDMOJI
            },
            [eM.s6.CHAT_TEXT_BOX]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t.afR0pK)],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t.AqGrEB)],
                parent: eM.s6.CHAT_TEXT_BOX
            },
            [eM.s6.CHAT_THREADS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t.B2panJ)],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t.AInv5u)],
                parent: eM.s6.CHAT_THREADS
            },
            [eM.s6.CHAT_SPOILERS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eF.NW.string(eF.t.QgwmV1)],
                parent: eM.s6.CHAT
            },
            [eM.s6.NOTIFICATIONS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.HcoRu7)],
                label: eF.NW.string(eF.t.HcoRu7),
                ariaLabel: eF.NW.string(eF.t.HcoRu7),
                element: ej.Z,
                url: eU.Z5c.SETTINGS('notifications')
            },
            [eM.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t['/0WClp'])],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.VH8AIC)],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.xSmFQE)],
                parent: eM.s6.NOTIFICATIONS,
                predicate: () => (0, K.isWindows)()
            },
            [eM.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.z21l8P)],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: ['New Notification Settings (Advanced, Staff Only)'],
                parent: eM.s6.NOTIFICATIONS,
                predicate: () => !1
            },
            [eM.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: ['Restore most recent snapshot'],
                parent: eM.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eM.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: ['Launch Migration'],
                parent: eM.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eM.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: ['Toggle new system on/off'],
                parent: eM.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eM.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.TTvjd3)],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.VpSKeH)],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.D9yVAA)],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.u6dc5O)],
                parent: eM.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eM.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.P8MG6u)],
                parent: eM.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eM.s6.NOTIFICATIONS_SOUNDS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.MKWyKS)],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_EMAILS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.TPchzM)],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t['B75+xc'])],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.sxn7lZ)],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.EkxXhY)],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.jNrkrK)],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.E8g1l5)],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.Ra9Pws)],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.NOTIFICATIONS_REACTIONS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eF.NW.string(eF.t.Rq0NFh)],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.KEYBINDS]: {
                section: eU.oAB.KEYBINDS,
                searchableTitles: [eF.NW.string(eF.t.T9DA2N)],
                label: eF.NW.string(eF.t.T9DA2N),
                element: e_.Z,
                url: eU.Z5c.SETTINGS('keybinds')
            },
            [eM.s6.LANGUAGE]: {
                section: eU.oAB.LOCALE,
                searchableTitles: [eF.NW.string(eF.t.IHMsPj)],
                label: eF.NW.string(eF.t.IHMsPj),
                element: eE.Z,
                url: eU.Z5c.SETTINGS('language')
            },
            [eM.s6.WINDOW_SETTINGS]: {
                section: eU.oAB.WINDOWS,
                searchableTitles: [eF.NW.string(eF.t.ZkDZoq)],
                label: eF.NW.string(eF.t.ZkDZoq),
                element: eP.Z,
                predicate: () => K.isPlatformEmbedded && (0, K.isWindows)()
            },
            [eM.s6.LINUX_SETTINGS]: {
                section: eU.oAB.LINUX,
                searchableTitles: [eF.NW.string(eF.t['7pPjTU'])],
                label: eF.NW.string(eF.t['7pPjTU']),
                element: eX,
                predicate: () => K.isPlatformEmbedded && (0, K.isLinux)()
            },
            [eM.s6.STREAMER_MODE]: {
                section: eU.oAB.STREAMER_MODE,
                searchableTitles: [eF.NW.string(eF.t.S5GfOT)],
                label: eF.NW.string(eF.t.S5GfOT),
                ariaLabel: eF.NW.string(eF.t.S5GfOT),
                element: eT.Z,
                url: eU.Z5c.SETTINGS('streamer-mode')
            },
            [eM.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eU.oAB.STREAMER_MODE,
                searchableTitles: [eF.NW.string(eF.t.bxGbHB)],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_ENABLE]: {
                section: eU.oAB.STREAMER_MODE,
                searchableTitles: [eF.NW.string(eF.t.p9ZAJS)],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eU.oAB.STREAMER_MODE,
                searchableTitles: [eF.NW.string(eF.t.UpQziI)],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eU.oAB.STREAMER_MODE,
                searchableTitles: [eF.NW.string(eF.t.q7WNGh)],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eU.oAB.STREAMER_MODE,
                searchableTitles: [eF.NW.string(eF.t['1CWknJ'])],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eU.oAB.STREAMER_MODE,
                searchableTitles: [eF.NW.string(eF.t.qmYiYW)],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eU.oAB.STREAMER_MODE,
                searchableTitles: [eF.NW.string(eF.t['iA81+f'])],
                parent: eM.s6.STREAMER_MODE,
                predicate: () => {
                    var e, t, n;
                    return null !== (n = null === p.Z || void 0 === p.Z ? void 0 : null === (t = p.Z.window) || void 0 === t ? void 0 : null === (e = t.supportsContentProtection) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n && n;
                }
            },
            [eM.s6.SETTINGS_ADVANCED]: {
                section: eU.oAB.ADVANCED,
                searchableTitles: [eF.NW.string(eF.t['8/udY2'])],
                label: eF.NW.string(eF.t['8/udY2']),
                ariaLabel: eF.NW.string(eF.t['8/udY2']),
                element: el.Z
            },
            [eM.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eU.oAB.ADVANCED,
                searchableTitles: [eF.NW.string(eF.t.ObIb1d)],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () => z.wS
            },
            [eM.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eU.oAB.ADVANCED,
                searchableTitles: [eF.NW.string(eF.t['eOC/Fx'])],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () => K.isPlatformEmbedded
            },
            [eM.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eU.oAB.ADVANCED,
                searchableTitles: [eF.NW.string(eF.t.fi3UQE)],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () => e4
            },
            [eM.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eU.oAB.ADVANCED,
                searchableTitles: [eF.NW.string(eF.t.erOqlp)],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () => e9
            },
            [eM.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eU.oAB.ADVANCED,
                searchableTitles: [eF.NW.string(eF.t.qDZryM)],
                parent: eM.s6.SETTINGS_ADVANCED
            },
            [eM.s6.ACTIVITY_PRIVACY]: {
                section: eU.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eF.NW.string(eF.t.Cq98yM)],
                label: eF.NW.string(eF.t.Cq98yM),
                ariaLabel: eF.NW.string(eF.t.Cq98yM),
                element: ea.Z,
                predicate: () => !eJ,
                url: eU.Z5c.SETTINGS('activity-privacy')
            },
            [eM.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eJ ? eU.oAB.GAMES : eU.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eF.NW.string(eF.t['8ka8lp'])],
                parent: eJ ? eM.s6.GAMES_ACTIVITY_PRIVACY : eM.s6.ACTIVITY_PRIVACY
            },
            [eM.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eJ ? eU.oAB.GAMES : eU.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eF.NW.string(eF.t.VOszPD)],
                parent: eJ ? eM.s6.GAMES_ACTIVITY_PRIVACY : eM.s6.ACTIVITY_PRIVACY
            },
            [eM.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eJ ? eU.oAB.GAMES : eU.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eM.CF],
                parent: eJ ? eM.s6.GAMES_ACTIVITY_PRIVACY : eM.s6.ACTIVITY_PRIVACY
            },
            [eM.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eU.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eF.NW.string(eF.t['4F2KoK'])],
                parent: eM.s6.ACTIVITY_PRIVACY
            },
            [eM.s6.REGISTERED_GAMES]: {
                section: eU.oAB.REGISTERED_GAMES,
                searchableTitles: [eF.NW.string(eF.t.AVDyEh)],
                label: eF.NW.string(eF.t.AVDyEh),
                element: ex.Z,
                predicate: () => !eJ && (0, eZ.Jw)()
            },
            [eM.s6.OVERLAY]: {
                section: eU.oAB.OVERLAY,
                searchableTitles: [eF.NW.string(eF.t['9cb1U1'])],
                label: eF.NW.string(eF.t['9cb1U1']),
                element: eC.Z,
                predicate: () => !eJ && L
            },
            [eM.s6.CHANGELOG]: {
                section: 'changelog',
                onClick: () => (0, x.Z)(!0),
                searchableTitles: [eF.NW.string(eF.t.LRmNAg)],
                label: eF.NW.string(eF.t.LRmNAg)
            },
            [eM.s6.MERCHANDISE]: {
                section: 'merchandise',
                onClick: () => {
                    let e = 'https://discordmerch.com/Dsktopprm';
                    H.default.track(eU.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, Y.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                H.default.track(eU.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, h.Z)(e);
                            }
                        });
                },
                searchableTitles: [eF.NW.string(eF.t.sMEktb)],
                label: eF.NW.string(eF.t.sMEktb),
                ariaLabel: eF.NW.string(eF.t.sMEktb)
            },
            [eM.s6.HYPESQUAD]: {
                section: eU.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eF.NW.string(eF.t['k0R+4e'])],
                label: eF.NW.string(eF.t['k0R+4e']),
                element: eN.Z,
                predicate: () => !tt
            },
            [eM.s6.TOWNHALL]: {
                section: eU.oAB.TOWNHALL,
                searchableTitles: [eF.NW.string(eF.t.dnZNER)],
                label: eF.NW.string(eF.t.dnZNER),
                predicate: () => tt,
                onClick: () => {
                    (0, h.Z)('https://discord.gg/discord-townhall'), (0, d.xf)();
                }
            },
            [eM.s6.EXPERIMENTS]: {
                section: eU.oAB.EXPERIMENTS,
                searchableTitles: ['Experiments'],
                label: 'Experiments',
                element: eR.Z,
                predicate: () => U.Z.isDeveloper,
                url: eU.Z5c.SETTINGS('experiments')
            },
            [eM.s6.DEVELOPER_OPTIONS]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: eh.Z,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_FLAGS]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e$ && U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Accessibility Auditing'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => !1
            },
            [eM.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['CSS Debugging'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e$ && U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e$ && U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e$ && U.Z.isDeveloper && V.default.layoutDebuggingEnabled
            },
            [eM.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e$ && U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Disable App Collections Cache'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e$ && U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => f.q && U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Prevent Popouts From Closing Automatically'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.HOTSPOT_OPTIONS]: {
                section: eU.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: Q.Z,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eU.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: j.Z,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.PAYMENT_FLOW_MODALS]: {
                section: eU.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: $.Z,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.REVENUE_STORYBOOK]: {
                section: eU.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Revenue Storybook', 'Payment Components', 'Orb Components', 'Virtual Currency'],
                label: 'Revenue Storybook',
                element: eL.Z,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eU.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ['Virtual Currency', 'Orb', 'Config'],
                label: 'Virtual Currency Config',
                element: eB.Z,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.PAYMENT_COMPONENTS]: {
                section: eU.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Payment Components'],
                label: 'Payment Components',
                element: eL.Z,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.ORB_COMPONENTS]: {
                section: eU.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Orb Components'],
                label: 'Orb Components',
                element: eL.Z,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.TEXT_PLAYGROUND]: {
                section: eU.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: ey.Z,
                predicate: () => (0, er.D)() || U.Z.isDeveloper
            },
            [eM.s6.DESIGN_SYSTEMS]: {
                section: eU.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: ep.Z,
                predicate: () => U.Z.isDeveloper,
                url: eU.Z5c.SETTINGS('design-systems')
            },
            [eM.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eU.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Colors'],
                label: 'Colors',
                element: ep.Z,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.ANIMATION_TESTING]: {
                section: eU.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Animation Testing'],
                label: 'Animation Testing',
                element: ep.Z,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eU.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Components'],
                label: 'Components',
                element: ep.Z,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.TEXT_COMPONENTS]: {
                section: eU.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: en.Z,
                predicate: () => (0, er.D)() || U.Z.isDeveloper
            },
            [eM.s6.INTL_TESTING]: {
                section: eU.oAB.INTL_TESTING,
                searchableTitles: ['Intl Testing', 'i18n'],
                label: 'Intl Testing',
                element: S.Z,
                predicate: () => e$ || U.Z.isDeveloper
            },
            [eM.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
                section: eU.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
                searchableTitles: ['Profile Effects Preview Tool'],
                label: 'Profile Effects Preview Tool',
                element: w.Z,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.NAMEPLATES_PREVIEW_TOOL]: {
                section: eU.oAB.NAMEPLATES_PREVIEW_TOOL,
                searchableTitles: ['Nameplates Preview Tool'],
                label: 'Nameplates Preview Tool',
                element: I.Z,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.QUEST_PREVIEW_TOOL]: {
                section: eU.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: W.Z,
                predicate: () => (0, k.X7)({ location: eV.dr.QUEST_PREVIEW_TOOL })
            },
            [eM.s6.WEB_SETTING_TREE_TOOL]: {
                section: eU.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ['Web Setting Tree Tool'],
                label: 'Web Setting Tree Tool',
                element: eD.Z,
                predicate: () => U.Z.isDeveloper
            },
            [eM.s6.LOGOUT]: {
                section: 'logout',
                onClick: () => {
                    (0, l.h7j)((e) => {
                        var t, n;
                        return (0, r.jsx)(
                            l.ConfirmModal,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })(
                                {
                                    header: eF.NW.string(eF.t['2jxGen']),
                                    confirmText: eF.NW.string(eF.t['2jxGen']),
                                    cancelText: eF.NW.string(eF.t['ETE/oK']),
                                    onCancel: e.onClose,
                                    onConfirm: () => c.Z.logout()
                                },
                                e
                            )),
                            (n = n =
                                {
                                    children: (0, r.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        children: eF.NW.string(eF.t.SUnWBA)
                                    })
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t)
                        );
                    });
                },
                label: eF.NW.string(eF.t['2jxGen']),
                ariaLabel: eF.NW.string(eF.t['2jxGen']),
                icon: (0, r.jsx)(l.PBZ, {
                    size: 'xs',
                    color: 'currentColor'
                })
            },
            [eM.s6.SOCIAL_LINKS]: {
                section: g.ID.CUSTOM,
                element: et.Z
            },
            [eM.s6.CLIENT_DEBUG_INFO]: {
                section: g.ID.CUSTOM,
                element: J.Z
            }
        });
    };
