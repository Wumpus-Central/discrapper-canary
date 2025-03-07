n.d(t, { i: () => eH }), n(653041);
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
    p = n(493544),
    g = n(579806),
    h = n(782568),
    f = n(758182),
    x = n(163379),
    b = n(703288),
    N = n(574755),
    _ = n(377171),
    E = n(540059),
    C = n(621628),
    j = n(18438),
    O = n(778825),
    v = n(665166),
    S = n(715495),
    T = n(351780),
    I = n(231765),
    y = n(813732),
    A = n(398140),
    P = n(564344),
    R = n(746263),
    D = n(977156),
    Z = n(652380),
    w = n(373230),
    k = n(145158),
    W = n(906467),
    L = n(857192),
    B = n(131951),
    M = n(25990),
    U = n(626135),
    V = n(572004),
    G = n(49012),
    F = n(358085),
    H = n(998502),
    z = n(695346),
    Y = n(604227),
    K = n(38915),
    q = n(498639),
    X = n(748717),
    J = n(419636),
    Q = n(799071),
    $ = n(601433),
    ee = n(154022),
    et = n(393681),
    en = n(309739),
    er = n(64914),
    ei = n(501348),
    es = n(795594),
    ea = n(443702),
    el = n(327192),
    eo = n(949493),
    ec = n(675047),
    ed = n(177508),
    eu = n(956699),
    em = n(54942),
    ep = n(293389),
    eg = n(88624),
    eh = n(387747),
    ef = n(389650),
    ex = n(649157),
    eb = n(593648),
    eN = n(327885),
    e_ = n(595242),
    eE = n(463153),
    eC = n(36192),
    ej = n(889029),
    eO = n(400287),
    ev = n(554042),
    eS = n(936982),
    eT = n(200645),
    eI = n(287490),
    ey = n(706060),
    eA = n(168308),
    eP = n(277329),
    eR = n(273927),
    eD = n(604224),
    eZ = n(43434),
    ew = n(333576),
    ek = n(726985),
    eW = n(981631),
    eL = n(46140),
    eB = n(65154),
    eM = n(388032),
    eU = n(156564);
let eV = () => [s.z.CLIENT_THEMES_SETTINGS_BADGE, s.z.DEKSTOP_CUSTOM_APP_ICON_BADGE],
    eG = () => {
        let e = [];
        return w.cy.getCurrentConfig({ location: 'SettingsRendererConfig' }).enabled && e.push(s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE), e;
    },
    eF = eT.Z,
    eH = (e) => {
        let { unseenGiftCount: t, showPrepaidPaymentPastDueWarning: w, impressionSource: eH, numOfPendingFamilyRequests: ez, isOverlaySupported: eY, isClipsBetaTagShowing: eK = !1, shouldMergeGameSettings: eq, isKeywordFilteringEnabled: eX, isStaff: eJ, isInappropriateConversationWarningEnabled: eQ, isInapproprateConversationsDefaultOn: e$, paymentsBlocked: e0, isEligibleForQuests: e1, showGiftNitro: e2, isStricterMessageRequestsEnabled: e6, hasLibraryApplication: e3, hasTOTPEnabled: e8, developerMode: e4, isAdultUser: e7, hasSecureFramesVerifiedUserIds: e9, hypeSquadRemoved: e5, stealthRemediationEnabled: te, hasIgnoredUsers: tt, hasBlockedUsers: tn, isAllowGameFriendDMsVisible: tr, useRefreshedVoiceAndVideo: ti } = e;
        return Object.freeze({
            [ek.s6.SEARCH_NO_RESULTS]: {
                section: p.ID.CUSTOM,
                element: eE.Z
            },
            [ek.s6.ACCOUNT_SECURITY_TAB]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eM.NW.string(eM.t.Am9YHh)],
                label: eM.NW.string(eM.t.Am9YHh)
            },
            [ek.s6.ACCOUNT]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eM.NW.string(eM.t['JAIM/v'])],
                label: eM.NW.string(eM.t['JAIM/v']),
                ariaLabel: eM.NW.string(eM.t['JAIM/v']),
                element: et.Z,
                url: eW.Z5c.SETTINGS('account')
            },
            [ek.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eM.NW.string(eM.t.LYju5O)],
                parent: ek.s6.ACCOUNT,
                section: eW.oAB.ACCOUNT
            },
            [ek.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eM.NW.string(eM.t['9AjdkJ'])],
                section: eW.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_PROFILE
            },
            [ek.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eM.NW.string(eM.t.Ulqq6O)],
                section: eW.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_PROFILE
            },
            [ek.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eM.NW.string(eM.t['+JkHPz'])],
                section: eW.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_PROFILE
            },
            [ek.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eM.NW.string(eM.t.oP5zGB)],
                section: eW.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_PROFILE
            },
            [ek.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eM.NW.string(eM.t.pKSjEh)],
                section: eW.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT
            },
            [ek.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eM.NW.string(eM.t['FRep5+'])],
                section: eW.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [ek.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eM.NW.string(eM.t['7qKDrK'])],
                section: eW.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [ek.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eM.NW.string(eM.t.m0FidH)],
                section: eW.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [ek.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eM.NW.string(eM.t.cDgKtb)],
                section: eW.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e8
            },
            [ek.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eM.NW.string(eM.t['D+aE7u'])],
                section: eW.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e8
            },
            [ek.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eM.NW.string(eM.t.fZSi1N)],
                section: eW.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [ek.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eM.NW.string(eM.t.uHAJ5u)],
                section: eW.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [ek.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eM.NW.string(eM.t.vrOCCg)],
                section: eW.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [ek.s6.ACCOUNT_REMOVAL]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eM.NW.string(eM.t.ZKsIkp)],
                parent: ek.s6.ACCOUNT
            },
            [ek.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eM.NW.string(eM.t.jf5GGR)],
                parent: ek.s6.ACCOUNT_REMOVAL
            },
            [ek.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eM.NW.string(eM.t['8lQ2ra'])],
                parent: ek.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [ek.s6.GAMES]: {
                section: eW.oAB.GAMES,
                searchableTitles: [eM.NW.string(eM.t.URyqtL)],
                label: eM.NW.string(eM.t.URyqtL),
                ariaLabel: eM.NW.string(eM.t.URyqtL),
                element: eP.Z,
                predicate: () => eq
            },
            [ek.s6.GAMES_MY_GAMES]: {
                section: eW.oAB.GAMES,
                searchableTitles: [eM.NW.string(eM.t['5DMgp6'])],
                parent: ek.s6.GAMES
            },
            [ek.s6.GAMES_CLIPS]: {
                section: eW.oAB.GAMES,
                searchableTitles: [eM.NW.string(eM.t.z2jK6e)],
                parent: ek.s6.GAMES
            },
            [ek.s6.GAMES_OVERLAY]: {
                section: eW.oAB.GAMES,
                searchableTitles: [eM.NW.string(eM.t['9cb1U1'])],
                parent: ek.s6.GAMES
            },
            [ek.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eW.oAB.GAMES,
                searchableTitles: [eM.NW.string(eM.t.Cq98yM)],
                parent: ek.s6.GAMES
            },
            [ek.s6.PROFILE_CUSTOMIZATION]: {
                section: eW.oAB.PROFILE_CUSTOMIZATION,
                type: p.bT.WIDE,
                searchableTitles: [eM.NW.string(eM.t['vi7f+v'])],
                label: eM.NW.string(eM.t['vi7f+v']),
                ariaLabel: eM.NW.string(eM.t['vi7f+v']),
                element: P.Z,
                newIndicator: (0, r.jsx)(l.IGR, { text: eM.NW.string(eM.t.y2b7CA) }),
                newIndicatorDismissibleContentTypes: eG(),
                notice: {
                    stores: [M.Z, O.Z],
                    element: A.Z
                },
                onSettingsClose: () => {
                    o.Z.wait(() => {
                        (0, j.It)(), (0, u.P6)(), m.Z.clearSubsection(eW.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eW.Z5c.SETTINGS('profile-customization')
            },
            [ek.s6.PROFILE_DISPLAY_NAME]: {
                section: eW.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eM.NW.string(eM.t['9AjdkJ'])],
                parent: ek.s6.PROFILE_CUSTOMIZATION
            },
            [ek.s6.PROFILE_USER_PROFILE]: {
                section: eW.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eM.NW.string(eM.t['OU3/Pj'])],
                parent: ek.s6.PROFILE_CUSTOMIZATION
            },
            [ek.s6.PROFILE_SERVER_PROFILES]: {
                section: eW.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eM.NW.string(eM.t.kPHroa)],
                parent: ek.s6.PROFILE_CUSTOMIZATION
            },
            [ek.s6.CONTENT_SOCIAL]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                label: eM.NW.string(eM.t['+o1pDQ']),
                searchableTitles: [eM.NW.string(eM.t['+o1pDQ'])],
                ariaLabel: eM.NW.string(eM.t['+o1pDQ']),
                element: eo.Z,
                url: eW.Z5c.SETTINGS('content-and-social')
            },
            [ek.s6.DATA_PRIVACY]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                label: eM.NW.string(eM.t.OAuOHB),
                searchableTitles: [eM.NW.string(eM.t.OAuOHB)],
                ariaLabel: eM.NW.string(eM.t.OAuOHB),
                element: ec.Z,
                url: eW.Z5c.SETTINGS('data-and-privacy')
            },
            [ek.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eM.NW.string(eM.t['Vov/9v'])],
                parent: ek.s6.ACCOUNT
            },
            [ek.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eM.NW.string(eM.t.WWaFn5)],
                parent: ek.s6.DATA_PRIVACY,
                predicate: () => (0, F.isDesktop)()
            },
            [ek.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eM.NW.string(eM.t['opi/XF'])],
                parent: ek.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY
            },
            [ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eM.NW.string(eM.t.xVRG4O)],
                parent: ek.s6.CONTENT_SOCIAL
            },
            [ek.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eM.NW.string(eM.t.fyA119)],
                parent: ek.s6.CONTENT_SOCIAL
            },
            [ek.s6.PRIVACY_AND_SAFETY_GAME_FRIENDS_CATEGORY]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eM.NW.string(eM.t.oPyABA)],
                parent: ek.s6.CONTENT_SOCIAL,
                predicate: () => tr
            },
            [ek.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eM.NW.string(eM.t.fyA119)],
                parent: ek.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY
            },
            [ek.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eM.NW.string(eM.t['/U8Iwc'])],
                parent: ek.s6.PRIVACY_AND_SAFETY_GAME_FRIENDS_CATEGORY,
                predicate: () => tr
            },
            [ek.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eM.NW.string(eM.t['y62Z/f'])],
                parent: ek.s6.CONTENT_SOCIAL
            },
            [ek.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eM.NW.string(eM.t.SRZyHh)],
                parent: ek.s6.DATA_PRIVACY
            },
            [ek.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eM.NW.string(eM.t.uEz8JC), eM.NW.string(eM.t['N/oRIy']), eM.NW.string(eM.t.QVdYsL), eM.NW.string(eM.t['aWD+tr']), eM.NW.string(eM.t['5mnTa2'])],
                parent: ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ek.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eM.NW.string(eM.t.JzaP4u), eM.NW.string(eM.t.H9XOl5), eM.NW.string(eM.t.k4W40N)],
                parent: ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ek.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eM.NW.string(eM.t['L+yTsb'])],
                parent: ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ek.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eM.NW.string(eM.t.XahVjo)],
                parent: ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ek.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                parent: ek.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY
            },
            [ek.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eM.NW.string(eM.t.RAQUSE), eM.NW.string(eM.t.wbYDfX)],
                parent: ek.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [ek.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eM.NW.string(eM.t['3o2ojo'])],
                parent: ek.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !e6
            },
            [ek.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eM.NW.string(eM.t.OLwZDQ)],
                parent: ek.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [ek.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eM.NW.string(eM.t.wBkwu7)],
                parent: ek.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [ek.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eM.NW.string(eM.t.XuADY2)],
                parent: ek.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ek.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eM.NW.string(eM.t.MNKzys)],
                parent: ek.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ek.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eM.NW.string(eM.t.VkS7YW)],
                parent: ek.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ek.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ek.CF],
                parent: ek.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ek.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eM.NW.string(eM.t.dmBSKi)],
                parent: ek.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY
            },
            [ek.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eM.NW.string(eM.t['1UaUy8']), eM.NW.string(eM.t['xIk/iI'])],
                parent: ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eX
            },
            [ek.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eM.NW.string(eM.t.qFsx5u)],
                parent: ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eQ && !e7 && !e$
            },
            [ek.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eM.NW.string(eM.t['5b3FND'])],
                parent: ek.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => e9
            },
            [ek.s6.PRIVACY_FAMILY_CENTER]: {
                section: eW.oAB.FAMILY_CENTER,
                searchableTitles: [eM.NW.string(eM.t.gntCQU)],
                label: eM.NW.string(eM.t.gntCQU),
                ariaLabel: eM.NW.string(eM.t.gntCQU),
                element: em.Z,
                badgeCount: ez,
                newIndicator: (0, r.jsx)(l.IGR, {
                    text: eM.NW.string(eM.t.y2b7CA),
                    color: _.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [s.z.FAMILY_CENTER_NEW_BADGE],
                url: eW.Z5c.SETTINGS('family-center')
            },
            [ek.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eM.NW.string(eM.t.BG7Qsb)],
                parent: ek.s6.DATA_PRIVACY
            },
            [ek.s6.AUTHORIZED_APPS]: {
                section: eW.oAB.AUTHORIZED_APPS,
                searchableTitles: [eM.NW.string(eM.t['f6kk+v'])],
                label: eM.NW.string(eM.t['f6kk+v']),
                element: es.Z,
                url: eW.Z5c.SETTINGS('authorized-apps')
            },
            [ek.s6.SESSIONS]: {
                section: eW.oAB.SESSIONS,
                searchableTitles: [eM.NW.string(eM.t['+1h0k5'])],
                label: eM.NW.string(eM.t['+1h0k5']),
                ariaLabel: eM.NW.string(eM.t['+1h0k5']),
                element: eC.Z,
                newIndicatorDismissibleContentTypes: [s.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: eH }
            },
            [ek.s6.CONNECTIONS]: {
                section: eW.oAB.CONNECTIONS,
                searchableTitles: [eM.NW.string(eM.t['3fe7U1'])],
                label: eM.NW.string(eM.t['3fe7U1']),
                ariaLabel: eM.NW.string(eM.t['3fe7U1']),
                element: el.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: eH },
                newIndicatorDismissibleContentTypes: [s.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eW.Z5c.SETTINGS('connections')
            },
            [ek.s6.THIRD_PARTY_ACCESS]: {
                section: eW.oAB.CONNECTIONS,
                searchableTitles: [eM.NW.string(eM.t['Ig/XFR']), eM.NW.string(eM.t['3fe7U1']), eM.NW.string(eM.t['f6kk+v'])],
                label: eM.NW.string(eM.t['Ig/XFR']),
                parent: ek.s6.CONNECTIONS,
                element: eS.Z
            },
            [ek.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eW.oAB.CONNECTIONS,
                searchableTitles: [eM.NW.string(eM.t['+/hZMz'])],
                parent: ek.s6.CONNECTIONS,
                element: el.Z
            },
            [ek.s6.CLIPS]: {
                section: eW.oAB.CLIPS,
                searchableTitles: [eM.NW.string(eM.t.z2jK6e)],
                label: eM.NW.string(eM.t.z2jK6e),
                ariaLabel: eM.NW.string(eM.t.z2jK6e),
                icon: eK ? (0, r.jsx)(b.Z, {}) : void 0,
                element: N.Z,
                predicate: () => !eq,
                url: eW.Z5c.SETTINGS('clips')
            },
            [ek.s6.RESTRICTED_USERS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                parent: ek.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eM.NW.string(eM.t['3wRorq']),
                element: eR.ZP,
                predicate: () => te && (tt || tn)
            },
            [ek.s6.BLOCKED_USERS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                parent: ek.s6.RESTRICTED_USERS,
                label: eM.NW.string(eM.t.PFOUKS),
                searchableTitles: [eM.NW.string(eM.t.PFOUKS)],
                element: eR.GF,
                predicate: () => te && tn
            },
            [ek.s6.IGNORED_USERS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                parent: ek.s6.RESTRICTED_USERS,
                searchableTitles: [eM.NW.string(eM.t['93ZDWF'])],
                label: eM.NW.string(eM.t['93ZDWF']),
                element: eR.yo,
                predicate: () => te && tt
            },
            [ek.s6.PREMIUM]: {
                section: eW.oAB.PREMIUM,
                ariaLabel: eM.NW.string(eM.t.Ipxkoq),
                searchableTitles: [eM.NW.string(eM.t.Ipxkoq)],
                label: eM.NW.string(eM.t.Ipxkoq),
                element: X.Z,
                className: eU.premiumTab
            },
            [ek.s6.GUILD_BOOSTING]: {
                section: eW.oAB.GUILD_BOOSTING,
                searchableTitles: [eM.NW.string(eM.t['+CbP2t'])],
                label: eM.NW.string(eM.t['+CbP2t']),
                element: e_.Z
            },
            [ek.s6.SUBSCRIPTIONS]: {
                section: eW.oAB.SUBSCRIPTIONS,
                ariaLabel: eM.NW.string(eM.t.trSpHR),
                searchableTitles: [eM.NW.string(eM.t.trSpHR)],
                label: eM.NW.string(eM.t.trSpHR),
                element: y.Z,
                icon: w
                    ? (0, r.jsx)(l.P4T, {
                          size: 'xs',
                          color: a.Z.unsafe_rawColors.YELLOW_300.css
                      })
                    : null
            },
            [ek.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eW.oAB.SUBSCRIPTIONS,
                searchableTitles: [eM.NW.string(eM.t['2GKrvr'])],
                parent: ek.s6.SUBSCRIPTIONS
            },
            [ek.s6.GIFT_INVENTORY]: {
                section: eW.oAB.INVENTORY,
                searchableTitles: [eM.NW.string(eM.t['jcSP+v'])],
                label: eM.NW.string(eM.t['jcSP+v']),
                element: eh.Z,
                ariaLabel: eM.NW.string(eM.t['jcSP+v']),
                badgeCount: t
            },
            [ek.s6.GIFT_NITRO]: {
                section: eW.oAB.INVENTORY,
                searchableTitles: [eM.NW.string(eM.t.Ve9Ge3)],
                parent: ek.s6.GIFT_INVENTORY,
                predicate: () => !e0 && e2
            },
            [ek.s6.GIFT_CODE_REDEMPTION]: {
                section: eW.oAB.INVENTORY,
                searchableTitles: [eM.NW.string(eM.t['il+VCg'])],
                parent: ek.s6.GIFT_INVENTORY,
                predicate: () => !e0
            },
            [ek.s6.GIFT_INVENTORY_QUESTS]: {
                section: eW.oAB.INVENTORY,
                searchableTitles: [eM.NW.string(eM.t.JALI2N)],
                parent: ek.s6.GIFT_INVENTORY,
                predicate: () => e1
            },
            [ek.s6.GIFT_INVENTORY_LIST]: {
                section: eW.oAB.INVENTORY,
                searchableTitles: [eM.NW.string(eM.t['9KeUbW'])],
                parent: ek.s6.GIFT_INVENTORY,
                predicate: () => !e0
            },
            [ek.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eW.oAB.INVENTORY,
                searchableTitles: [eM.NW.string(eM.t.vwMEHR)],
                parent: ek.s6.GIFT_INVENTORY,
                predicate: () => e0
            },
            [ek.s6.BILLING]: {
                section: eW.oAB.BILLING,
                searchableTitles: [eM.NW.string(eM.t.oeUm2t)],
                label: eM.NW.string(eM.t.oeUm2t),
                ariaLabel: eM.NW.string(eM.t.oeUm2t),
                element: ea.Z
            },
            [ek.s6.BILLING_PAYMENT_METHODS]: {
                section: eW.oAB.BILLING,
                searchableTitles: [eM.NW.string(eM.t.W26xGR)],
                parent: ek.s6.BILLING
            },
            [ek.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eW.oAB.BILLING,
                searchableTitles: [eM.NW.string(eM.t.obLrcH)],
                parent: ek.s6.BILLING
            },
            [ek.s6.APPEARANCE]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eM.NW.string(eM.t['iHH+k5'])],
                label: eM.NW.string(eM.t['iHH+k5']),
                ariaLabel: eM.NW.string(eM.t['iHH+k5']),
                element: ei.Z,
                newIndicator: (0, r.jsx)(l.lBU, { text: eM.NW.string(eM.t.y2b7CA) }),
                newIndicatorDismissibleContentTypes: eV(),
                url: eW.Z5c.SETTINGS('appearance')
            },
            [ek.s6.APPEARANCE_THEME]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eM.NW.string(eM.t.Ksh3io)],
                parent: ek.s6.APPEARANCE
            },
            [ek.s6.APPEARANCE_COLOR]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eM.NW.string(eM.t.OCOOiI)],
                parent: ek.s6.APPEARANCE_THEME
            },
            [ek.s6.APPEARANCE_ICON]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eM.NW.string(eM.t.RPh2oq)],
                parent: ek.s6.APPEARANCE_THEME
            },
            [ek.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eM.NW.string(eM.t.ZEoGMT)],
                parent: ek.s6.APPEARANCE
            },
            [ek.s6.APPEARANCE_LIST_SPACING]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: ['List Spacing'],
                parent: ek.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(l.IGR, {
                    text: eM.NW.string(eM.t.y2b7CA),
                    color: _.Z.BG_BRAND
                }),
                predicate: () => (0, E.i9)('SettingsRendererConfig')
            },
            [ek.s6.APPEARANCE_SCALING_SPACING]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eM.NW.string(eM.t.qPOqoK)],
                parent: ek.s6.APPEARANCE
            },
            [ek.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eM.NW.string(eM.t.dyamEB), eM.NW.string(eM.t.p8NOws), eM.NW.string(eM.t['+o/sOj'])],
                parent: ek.s6.APPEARANCE,
                predicate: () => k.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable24HourPref
            },
            [ek.s6.ACCESSIBILITY]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.G0neg4)],
                label: eM.NW.string(eM.t.G0neg4),
                ariaLabel: eM.NW.string(eM.t.G0neg4),
                element: ee.Z,
                url: eW.Z5c.SETTINGS('accessibility')
            },
            [ek.s6.ACCESSIBILITY_SATURATION]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t['5PWWCQ'])],
                parent: ek.s6.ACCESSIBILITY
            },
            [ek.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.bQCodH)],
                parent: ek.s6.ACCESSIBILITY_SATURATION
            },
            [ek.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.OLZFBw)],
                parent: ek.s6.ACCESSIBILITY
            },
            [ek.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.uSOPWl)],
                parent: ek.s6.ACCESSIBILITY
            },
            [ek.s6.ACCESSIBILITY_TAGS]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.UQt6dX)],
                parent: ek.s6.ACCESSIBILITY
            },
            [ek.s6.ACCESSIBILITY_TAGS_NAMES]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.UPwh1N)],
                parent: ek.s6.ACCESSIBILITY_TAGS
            },
            [ek.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.BT8Bmp)],
                parent: ek.s6.ACCESSIBILITY
            },
            [ek.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t['sSY+mJ'])],
                parent: ek.s6.ACCESSIBILITY_PROFILE_COLORS
            },
            [ek.s6.ACCESSIBILITY_CONTRAST]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.TYyfOz)],
                parent: ek.s6.ACCESSIBILITY
            },
            [ek.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.cguieX)],
                parent: ek.s6.ACCESSIBILITY_CONTRAST
            },
            [ek.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.e3TR1d)],
                parent: ek.s6.ACCESSIBILITY
            },
            [ek.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.b3XBzs)],
                parent: ek.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [ek.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.Iayoh4)],
                parent: ek.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [ek.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.iIaOlZ)],
                parent: ek.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [ek.s6.ACCESSIBILITY_STICKERS]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t['6NtAuL'])],
                parent: ek.s6.ACCESSIBILITY
            },
            [ek.s6.ACCESSIBILITY_MESSAGES]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.onqU6u)],
                parent: ek.s6.ACCESSIBILITY
            },
            [ek.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t['3Fztn5'])],
                parent: ek.s6.ACCESSIBILITY_MESSAGES
            },
            [ek.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.TZ2hZG)],
                parent: ek.s6.ACCESSIBILITY_MESSAGES
            },
            [ek.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.VpSKeH)],
                parent: ek.s6.ACCESSIBILITY
            },
            [ek.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.qvTIwc)],
                parent: ek.s6.ACCESSIBILITY_TEXT_TO_SPEECH
            },
            [ek.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eM.NW.string(eM.t.lsW5Eh)],
                parent: ek.s6.ACCESSIBILITY
            },
            [ek.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [ek.CF],
                parent: ek.s6.ACCESSIBILITY
            },
            [ek.s6.VOICE_AND_VIDEO]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.B1fFpa)],
                label: eM.NW.string(eM.t.B1fFpa),
                ariaLabel: eM.NW.string(eM.t.B1fFpa),
                element: eD.Z,
                predicate: () => B.Z.isSupported(),
                url: eW.Z5c.SETTINGS('voice')
            },
            [ek.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.K3lovL), eM.NW.string(eM.t.NiTd0d)],
                parent: ek.s6.VOICE_AND_VIDEO,
                predicate: () => ti
            },
            [ek.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.FlNoSU)],
                parent: ek.s6.VOICE_AND_VIDEO,
                predicate: () => ti
            },
            [ek.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.ABjMWF)],
                parent: ek.s6.VOICE_AND_VIDEO,
                predicate: () => ti
            },
            [ek.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.OFpL3d)],
                parent: ek.s6.VOICE_AND_VIDEO,
                predicate: () => ti
            },
            [ek.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.KDdjoq), eM.NW.string(eM.t.FeUKeH)],
                parent: ek.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => ti
            },
            [ek.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.K3lovL), eM.NW.string(eM.t.NiTd0d)],
                parent: ti ? ek.s6.VOICE_AND_VIDEO_VOICE_TAB : ek.s6.VOICE_AND_VIDEO
            },
            [ek.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.hHMYbW), eM.NW.string(eM.t.dl18zc), eM.NW.string(eM.t.nuFtHB), eM.NW.string(eM.t['3182VF']), eM.NW.string(eM.t['DGq/PT'])],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE
            },
            [ek.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.OX2Bnp), eM.NW.string(eM.t.eATD2N), eM.NW.string(eM.t.nuFtHB), eM.NW.string(eM.t['3182VF']), eM.NW.string(eM.t['DGq/PT'])],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE
            },
            [ek.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.gyljWF), eM.NW.string(eM.t.nuFtHB)],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE
            },
            [ek.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t['pS+K2N']), eM.NW.string(eM.t.nuFtHB)],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE
            },
            [ek.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t['sqUm+v']), eM.NW.string(eM.t.nuFtHB)],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => B.Z.getMode() === eB.pM.VOICE_ACTIVITY
            },
            [ek.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.e7LIiY)],
                parent: ti ? ek.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : ek.s6.VOICE_AND_VIDEO
            },
            [ek.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.nzUc3N)],
                parent: ti ? ek.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB : ek.s6.VOICE_AND_VIDEO
            },
            [ek.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.ABjMWF)],
                parent: ek.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [ek.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.nzUc3N)],
                parent: ek.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [ek.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.LKzQSE)],
                parent: ti ? ek.s6.VOICE_AND_VIDEO_VIDEO_TAB : ek.s6.VOICE_AND_VIDEO
            },
            [ek.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.F122Gx)],
                parent: ek.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => B.Z.supports(eB.AN.VIDEO)
            },
            [ek.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t['3Ppr1t'])],
                parent: ek.s6.VOICE_AND_VIDEO_VIDEO_CAMERA
            },
            [ek.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.lZTUPj)],
                parent: ek.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => B.Z.supports(eB.AN.VIDEO)
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t['8/udY2'])],
                parent: ek.s6.VOICE_AND_VIDEO
            },
            [ek.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t['8/udY2'])],
                parent: ek.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => ti
            },
            [ek.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t['8/udY2'])],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE_TAB,
                predicate: () => ti
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.DSGme3)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => !ti
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.Tceiq6)],
                parent: ti ? ek.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED : ek.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t['71Ve19'])],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => B.Z.supports(eB.AN.OPEN_H264)
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.Sln58f)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.AxnPm5)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== H.ZP.releaseChannel && B.Z.isExperimentalEncodersSupported()
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t['6I6GUl'])],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.iWTwu7)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t['/jwMtr'])],
                parent: ti ? ek.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [ek.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.OBwCXF)],
                parent: ti ? ek.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.t8QhiY), eM.NW.string(eM.t.hmfkCg)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => B.Z.isNoiseSuppressionSupported()
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.BbESsr)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => B.Z.isAdvancedVoiceActivitySupported()
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.cUMdHx)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => B.Z.isAutomaticGainControlSupported()
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.uancuL)],
                parent: ti ? ek.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : ek.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => B.Z.supports(eB.AN.QOS)
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.oSdBvb)],
                parent: ti ? ek.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : ek.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => B.Z.supports(eB.AN.ATTENUATION)
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.wVBHr6)],
                parent: ti ? ek.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : ek.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => B.Z.supports(eB.AN.LEGACY_AUDIO_SUBSYSTEM) || B.Z.supports(eB.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.KDdjoq), eM.NW.string(eM.t.NMCIf3), eM.NW.string(eM.t.FeUKeH)],
                parent: ti ? ek.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : ek.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => B.Z.supportsVideoHook() || B.Z.supportsExperimentalSoundshare() || (B.Z.supportsSystemScreensharePicker() && (0, F.isMac)())
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.GmWk2N), eM.NW.string(eM.t['Fj/xn5'])],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => B.Z.supportsVideoHook()
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t['4I0qzc'])],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => B.Z.supportsExperimentalSoundshare()
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.ie1mgY)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => B.Z.supportsSystemScreensharePicker() && (0, F.isMac)()
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t['aP1N/v'])],
                parent: ti ? ek.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : ek.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => F.isPlatformEmbedded
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.OFpL3d)],
                parent: ti ? ek.s6.VOICE_AND_VIDEO_DEBUG_TAB : ek.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t['0CEP6e'])],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => z.Sb.getSetting()
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t['r6K+TE'])],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => B.Z.isAecDumpSupported()
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t.U4FgFB)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === H.ZP.releaseChannel || 'development' === H.ZP.releaseChannel) && eJ && B.Z.supports(eB.AN.CONNECTION_REPLAY)
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t['726JHB'])],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => F.isPlatformEmbedded && B.Z.supports(eB.AN.DEBUG_LOGGING) && null != g.Z.fileManager.readLogFiles
            },
            [ek.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eM.NW.string(eM.t['/RXu6+'])],
                parent: ti ? ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING : ek.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [ek.s6.POGGERMODE]: {
                section: eW.oAB.POGGERMODE,
                searchableTitles: [eM.NW.string(eM.t.AtCukJ)],
                label: eM.NW.string(eM.t.AtCukJ),
                ariaLabel: eM.NW.string(eM.t.AtCukJ),
                element: I.Z,
                predicate: () => T.Z.settingsVisible,
                icon: (0, r.jsx)('img', {
                    alt: '',
                    src: n(348621),
                    className: eU.poggermodeIcon
                })
            },
            [ek.s6.CHAT]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t['/VQax8'])],
                label: eM.NW.string(eM.t['/VQax8']),
                ariaLabel: eM.NW.string(eM.t['/VQax8']),
                element: eO.Z,
                url: eW.Z5c.SETTINGS('chat')
            },
            [ek.s6.CHAT_INLINE_MEDIA]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t.U68Dgo)],
                parent: ek.s6.CHAT
            },
            [ek.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t.U47N1t)],
                parent: ek.s6.CHAT_INLINE_MEDIA
            },
            [ek.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t.VP11Nj)],
                parent: ek.s6.CHAT_INLINE_MEDIA
            },
            [ek.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t['5S2AKy'])],
                parent: ek.s6.CHAT_INLINE_MEDIA
            },
            [ek.s6.CHAT_EMBEDS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t.PWZOn5)],
                parent: ek.s6.CHAT
            },
            [ek.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t.xX0ZTE)],
                parent: ek.s6.CHAT_EMBEDS
            },
            [ek.s6.CHAT_EMOJI]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t.sMOuub)],
                parent: ek.s6.CHAT
            },
            [ek.s6.CHAT_EMOJI_REACTIONS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t.Iv24sr)],
                parent: ek.s6.CHAT_EMOJI
            },
            [ek.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t['79qal5'])],
                parent: ek.s6.CHAT_EMOJI
            },
            [ek.s6.CHAT_STICKERS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t['6NtAuL'])],
                parent: ek.s6.CHAT
            },
            [ek.s6.CHAT_STICKERS_SUGGESTIONS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t['479+PT'])],
                parent: ek.s6.CHAT_STICKERS
            },
            [ek.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t['29xPVV'])],
                parent: ek.s6.CHAT_STICKERS
            },
            [ek.s6.CHAT_SOUNDMOJI]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t.EHlAMT)],
                parent: ek.s6.CHAT
            },
            [ek.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t['CtYr+f'])],
                parent: ek.s6.CHAT_SOUNDMOJI
            },
            [ek.s6.CHAT_TEXT_BOX]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t.afR0pK)],
                parent: ek.s6.CHAT
            },
            [ek.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t.AqGrEB)],
                parent: ek.s6.CHAT_TEXT_BOX
            },
            [ek.s6.CHAT_THREADS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t.B2panJ)],
                parent: ek.s6.CHAT
            },
            [ek.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t.AInv5u)],
                parent: ek.s6.CHAT_THREADS
            },
            [ek.s6.CHAT_SPOILERS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eM.NW.string(eM.t.QgwmV1)],
                parent: ek.s6.CHAT
            },
            [ek.s6.NOTIFICATIONS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.HcoRu7)],
                label: eM.NW.string(eM.t.HcoRu7),
                ariaLabel: eM.NW.string(eM.t.HcoRu7),
                element: eb.Z,
                url: eW.Z5c.SETTINGS('notifications')
            },
            [ek.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t['/0WClp'])],
                parent: ek.s6.NOTIFICATIONS
            },
            [ek.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: ek.s6.NOTIFICATIONS
            },
            [ek.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.VH8AIC)],
                parent: ek.s6.NOTIFICATIONS
            },
            [ek.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.xSmFQE)],
                parent: ek.s6.NOTIFICATIONS,
                predicate: () => (0, F.isWindows)()
            },
            [ek.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.z21l8P)],
                parent: ek.s6.NOTIFICATIONS
            },
            [ek.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: ['New Notification Settings (Advanced, Staff Only)'],
                parent: ek.s6.NOTIFICATIONS,
                predicate: () => !1
            },
            [ek.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: ['Restore most recent snapshot'],
                parent: ek.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [ek.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: ['Launch Migration'],
                parent: ek.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [ek.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: ['Toggle new system on/off'],
                parent: ek.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [ek.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.TTvjd3)],
                parent: ek.s6.NOTIFICATIONS
            },
            [ek.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.VpSKeH)],
                parent: ek.s6.NOTIFICATIONS
            },
            [ek.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.D9yVAA)],
                parent: ek.s6.NOTIFICATIONS
            },
            [ek.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.u6dc5O)],
                parent: ek.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [ek.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.P8MG6u)],
                parent: ek.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [ek.s6.NOTIFICATIONS_SOUNDS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.MKWyKS)],
                parent: ek.s6.NOTIFICATIONS
            },
            [ek.s6.NOTIFICATIONS_EMAILS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.TPchzM)],
                parent: ek.s6.NOTIFICATIONS
            },
            [ek.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t['B75+xc'])],
                parent: ek.s6.NOTIFICATIONS_EMAILS
            },
            [ek.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.sxn7lZ)],
                parent: ek.s6.NOTIFICATIONS_EMAILS
            },
            [ek.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.EkxXhY)],
                parent: ek.s6.NOTIFICATIONS_EMAILS
            },
            [ek.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.jNrkrK)],
                parent: ek.s6.NOTIFICATIONS_EMAILS
            },
            [ek.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.E8g1l5)],
                parent: ek.s6.NOTIFICATIONS_EMAILS
            },
            [ek.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.Ra9Pws)],
                parent: ek.s6.NOTIFICATIONS_EMAILS
            },
            [ek.s6.NOTIFICATIONS_REACTIONS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eM.NW.string(eM.t.Rq0NFh)],
                parent: ek.s6.NOTIFICATIONS
            },
            [ek.s6.KEYBINDS]: {
                section: eW.oAB.KEYBINDS,
                searchableTitles: [eM.NW.string(eM.t.T9DA2N)],
                label: eM.NW.string(eM.t.T9DA2N),
                element: ef.Z,
                url: eW.Z5c.SETTINGS('keybinds')
            },
            [ek.s6.LANGUAGE]: {
                section: eW.oAB.LOCALE,
                searchableTitles: [eM.NW.string(eM.t.IHMsPj)],
                label: eM.NW.string(eM.t.IHMsPj),
                element: ex.Z,
                url: eW.Z5c.SETTINGS('language')
            },
            [ek.s6.WINDOW_SETTINGS]: {
                section: eW.oAB.WINDOWS,
                searchableTitles: [eM.NW.string(eM.t.ZkDZoq)],
                label: eM.NW.string(eM.t.ZkDZoq),
                element: eT.Z,
                predicate: () => F.isPlatformEmbedded && (0, F.isWindows)()
            },
            [ek.s6.LINUX_SETTINGS]: {
                section: eW.oAB.LINUX,
                searchableTitles: [eM.NW.string(eM.t['7pPjTU'])],
                label: eM.NW.string(eM.t['7pPjTU']),
                element: eF,
                predicate: () => F.isPlatformEmbedded && (0, F.isLinux)()
            },
            [ek.s6.STREAMER_MODE]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eM.NW.string(eM.t.S5GfOT)],
                label: eM.NW.string(eM.t.S5GfOT),
                ariaLabel: eM.NW.string(eM.t.S5GfOT),
                element: ej.Z,
                url: eW.Z5c.SETTINGS('streamer-mode')
            },
            [ek.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eM.NW.string(eM.t.bxGbHB)],
                parent: ek.s6.STREAMER_MODE
            },
            [ek.s6.STREAMER_MODE_ENABLE]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eM.NW.string(eM.t.p9ZAJS)],
                parent: ek.s6.STREAMER_MODE
            },
            [ek.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eM.NW.string(eM.t.UpQziI)],
                parent: ek.s6.STREAMER_MODE
            },
            [ek.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eM.NW.string(eM.t.q7WNGh)],
                parent: ek.s6.STREAMER_MODE
            },
            [ek.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eM.NW.string(eM.t['1CWknJ'])],
                parent: ek.s6.STREAMER_MODE
            },
            [ek.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eM.NW.string(eM.t.qmYiYW)],
                parent: ek.s6.STREAMER_MODE
            },
            [ek.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eM.NW.string(eM.t['iA81+f'])],
                parent: ek.s6.STREAMER_MODE,
                predicate: () => {
                    var e, t, n;
                    return null !== (n = null === g.Z || void 0 === g.Z ? void 0 : null === (t = g.Z.window) || void 0 === t ? void 0 : null === (e = t.supportsContentProtection) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n && n;
                }
            },
            [ek.s6.SETTINGS_ADVANCED]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eM.NW.string(eM.t['8/udY2'])],
                label: eM.NW.string(eM.t['8/udY2']),
                ariaLabel: eM.NW.string(eM.t['8/udY2']),
                element: er.Z
            },
            [ek.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eM.NW.string(eM.t.ObIb1d)],
                parent: ek.s6.SETTINGS_ADVANCED,
                predicate: () => V.wS
            },
            [ek.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eM.NW.string(eM.t['eOC/Fx'])],
                parent: ek.s6.SETTINGS_ADVANCED,
                predicate: () => F.isPlatformEmbedded
            },
            [ek.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eM.NW.string(eM.t.fi3UQE)],
                parent: ek.s6.SETTINGS_ADVANCED,
                predicate: () => e3
            },
            [ek.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eM.NW.string(eM.t.erOqlp)],
                parent: ek.s6.SETTINGS_ADVANCED,
                predicate: () => e4
            },
            [ek.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eM.NW.string(eM.t.qDZryM)],
                parent: ek.s6.SETTINGS_ADVANCED
            },
            [ek.s6.ACTIVITY_PRIVACY]: {
                section: eW.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eM.NW.string(eM.t.Cq98yM)],
                label: eM.NW.string(eM.t.Cq98yM),
                ariaLabel: eM.NW.string(eM.t.Cq98yM),
                element: en.Z,
                predicate: () => !eq,
                url: eW.Z5c.SETTINGS('activity-privacy')
            },
            [ek.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eq ? eW.oAB.GAMES : eW.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eM.NW.string(eM.t['8ka8lp'])],
                parent: eq ? ek.s6.GAMES_ACTIVITY_PRIVACY : ek.s6.ACTIVITY_PRIVACY
            },
            [ek.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eq ? eW.oAB.GAMES : eW.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eM.NW.string(eM.t.VOszPD)],
                parent: eq ? ek.s6.GAMES_ACTIVITY_PRIVACY : ek.s6.ACTIVITY_PRIVACY
            },
            [ek.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eq ? eW.oAB.GAMES : eW.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ek.CF],
                parent: eq ? ek.s6.GAMES_ACTIVITY_PRIVACY : ek.s6.ACTIVITY_PRIVACY
            },
            [ek.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eW.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eM.NW.string(eM.t['4F2KoK'])],
                parent: ek.s6.ACTIVITY_PRIVACY
            },
            [ek.s6.REGISTERED_GAMES]: {
                section: eW.oAB.REGISTERED_GAMES,
                searchableTitles: [eM.NW.string(eM.t.AVDyEh)],
                label: eM.NW.string(eM.t.AVDyEh),
                element: ep.Z,
                predicate: () => !eq && (0, eA.Jw)()
            },
            [ek.s6.OVERLAY]: {
                section: eW.oAB.OVERLAY,
                searchableTitles: [eM.NW.string(eM.t['9cb1U1'])],
                label: eM.NW.string(eM.t['9cb1U1']),
                element: eN.Z,
                predicate: () => !eq && eY
            },
            [ek.s6.CHANGELOG]: {
                section: 'changelog',
                onClick: () => (0, x.Z)(!0),
                searchableTitles: [eM.NW.string(eM.t.LRmNAg)],
                label: eM.NW.string(eM.t.LRmNAg)
            },
            [ek.s6.MERCHANDISE]: {
                section: 'merchandise',
                onClick: () => {
                    let e = 'https://discordmerch.com/Dsktopprm';
                    U.default.track(eW.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, G.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                U.default.track(eW.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, h.Z)(e);
                            }
                        });
                },
                searchableTitles: [eM.NW.string(eM.t.sMEktb)],
                label: eM.NW.string(eM.t.sMEktb),
                ariaLabel: eM.NW.string(eM.t.sMEktb)
            },
            [ek.s6.HYPESQUAD]: {
                section: eW.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eM.NW.string(eM.t['k0R+4e'])],
                label: eM.NW.string(eM.t['k0R+4e']),
                element: eg.Z,
                predicate: () => !e5
            },
            [ek.s6.TOWNHALL]: {
                section: eW.oAB.TOWNHALL,
                searchableTitles: [eM.NW.string(eM.t.dnZNER)],
                label: eM.NW.string(eM.t.dnZNER),
                predicate: () => e5,
                onClick: () => {
                    (0, h.Z)('https://discord.gg/discord-townhall'), (0, d.xf)();
                }
            },
            [ek.s6.EXPERIMENTS]: {
                section: eW.oAB.EXPERIMENTS,
                searchableTitles: ['Experiments'],
                label: 'Experiments',
                element: eI.Z,
                predicate: () => W.Z.isDeveloper,
                url: eW.Z5c.SETTINGS('experiments')
            },
            [ek.s6.DEVELOPER_OPTIONS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: eu.Z,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_FLAGS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: ek.s6.DEVELOPER_OPTIONS,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eJ && W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Accessibility Auditing'],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => !1
            },
            [ek.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['CSS Debugging'],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eJ && W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eJ && W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eJ && W.Z.isDeveloper && L.default.layoutDebuggingEnabled
            },
            [ek.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eJ && W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Disable App Collections Cache'],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eJ && W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: ek.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: ek.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: ek.s6.DEVELOPER_OPTIONS,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: ek.s6.DEVELOPER_OPTIONS,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: ek.s6.DEVELOPER_OPTIONS,
                predicate: () => f.q && W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: ek.s6.DEVELOPER_OPTIONS,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: ek.s6.DEVELOPER_OPTIONS,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: ek.s6.DEVELOPER_OPTIONS,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: ek.s6.DEVELOPER_OPTIONS,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Prevent Popouts From Closing Automatically'],
                parent: ek.s6.DEVELOPER_OPTIONS,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.HOTSPOT_OPTIONS]: {
                section: eW.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: K.Z,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eW.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: C.Z,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.PAYMENT_FLOW_MODALS]: {
                section: eW.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: q.Z,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.REVENUE_STORYBOOK]: {
                section: eW.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Revenue Storybook', 'Payment Components', 'Orb Components', 'Virtual Currency'],
                label: 'Revenue Storybook',
                element: eZ.Z,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eW.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ['Virtual Currency', 'Orb', 'Config'],
                label: 'Virtual Currency Config',
                element: ew.Z,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.PAYMENT_COMPONENTS]: {
                section: eW.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Payment Components'],
                label: 'Payment Components',
                element: eZ.Z,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.ORB_COMPONENTS]: {
                section: eW.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Orb Components'],
                label: 'Orb Components',
                element: eZ.Z,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.TEXT_PLAYGROUND]: {
                section: eW.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: ev.Z,
                predicate: () => (0, $.D)() || W.Z.isDeveloper
            },
            [ek.s6.DESIGN_SYSTEMS]: {
                section: eW.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: ed.Z,
                predicate: () => W.Z.isDeveloper,
                url: eW.Z5c.SETTINGS('design-systems')
            },
            [ek.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eW.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Colors'],
                label: 'Colors',
                element: ed.Z,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eW.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Components'],
                label: 'Components',
                element: ed.Z,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.TEXT_COMPONENTS]: {
                section: eW.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: Q.Z,
                predicate: () => (0, $.D)() || W.Z.isDeveloper
            },
            [ek.s6.INTL_TESTING]: {
                section: eW.oAB.INTL_TESTING,
                searchableTitles: ['Intl Testing', 'i18n'],
                label: 'Intl Testing',
                element: v.Z,
                predicate: () => eJ || W.Z.isDeveloper
            },
            [ek.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
                section: eW.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
                searchableTitles: ['Profile Effects Preview Tool'],
                label: 'Profile Effects Preview Tool',
                element: R.Z,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.NAMEPLATES_PREVIEW_TOOL]: {
                section: eW.oAB.NAMEPLATES_PREVIEW_TOOL,
                searchableTitles: ['Nameplates Preview Tool'],
                label: 'Nameplates Preview Tool',
                element: S.Z,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.QUEST_PREVIEW_TOOL]: {
                section: eW.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: Z.Z,
                predicate: () => (0, D.X7)({ location: eL.dr.QUEST_PREVIEW_TOOL })
            },
            [ek.s6.WEB_SETTING_TREE_TOOL]: {
                section: eW.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ['Web Setting Tree Tool'],
                label: 'Web Setting Tree Tool',
                element: ey.Z,
                predicate: () => W.Z.isDeveloper
            },
            [ek.s6.LOGOUT]: {
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
                                    header: eM.NW.string(eM.t['2jxGen']),
                                    confirmText: eM.NW.string(eM.t['2jxGen']),
                                    cancelText: eM.NW.string(eM.t['ETE/oK']),
                                    onCancel: e.onClose,
                                    onConfirm: () => c.Z.logout()
                                },
                                e
                            )),
                            (n = n =
                                {
                                    children: (0, r.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        children: eM.NW.string(eM.t.SUnWBA)
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
                label: eM.NW.string(eM.t['2jxGen']),
                ariaLabel: eM.NW.string(eM.t['2jxGen']),
                icon: (0, r.jsx)(l.PBZ, {
                    size: 'xs',
                    color: 'currentColor'
                })
            },
            [ek.s6.SOCIAL_LINKS]: {
                section: p.ID.CUSTOM,
                element: J.Z
            },
            [ek.s6.CLIENT_DEBUG_INFO]: {
                section: p.ID.CUSTOM,
                element: Y.Z
            }
        });
    };
