n.d(t, { i: () => e0 }), n(653041), n(47120);
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
    b = n(163379),
    N = n(498646),
    x = n(489968),
    _ = n(703288),
    E = n(574755),
    j = n(377171),
    O = n(540059),
    C = n(621628),
    S = n(243778),
    v = n(18438),
    T = n(778825),
    I = n(665166),
    y = n(442933),
    A = n(715495),
    P = n(158947),
    R = n(351780),
    D = n(231765),
    Z = n(813732),
    w = n(398140),
    k = n(564344),
    W = n(538645),
    L = n(977156),
    B = n(652380),
    M = n(373230),
    U = n(87478),
    V = n(145158),
    G = n(906467),
    F = n(857192),
    H = n(131951),
    z = n(25990),
    Y = n(626135),
    K = n(572004),
    q = n(49012),
    X = n(358085),
    J = n(998502),
    Q = n(695346),
    $ = n(604227),
    ee = n(38915),
    et = n(498639),
    en = n(748717),
    er = n(419636),
    ei = n(799071),
    es = n(601433),
    ea = n(154022),
    el = n(393681),
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
    eN = n(54942),
    ex = n(293389),
    e_ = n(88624),
    eE = n(387747),
    ej = n(389650),
    eO = n(649157),
    eC = n(593648),
    eS = n(327885),
    ev = n(595242),
    eT = n(463153),
    eI = n(36192),
    ey = n(889029),
    eA = n(400287),
    eP = n(554042),
    eR = n(936982),
    eD = n(200645),
    eZ = n(287490),
    ew = n(706060),
    ek = n(168308),
    eW = n(277329),
    eL = n(273927),
    eB = n(604224),
    eM = n(43434),
    eU = n(333576),
    eV = n(726985),
    eG = n(981631),
    eF = n(46140),
    eH = n(65154),
    ez = n(388032),
    eY = n(622802),
    eK = n(332495),
    eq = n(539452);
let eX = () => [s.z.CLIENT_THEMES_SETTINGS_BADGE, s.z.DEKSTOP_CUSTOM_APP_ICON_BADGE],
    eJ = () => {
        let e = [];
        return M.cy.getCurrentConfig({ location: 'SettingsRendererConfig' }).enabled && e.push(s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE), y.e.getCurrentConfig({ location: 'SettingsRendererConfig' }).canPurchase && e.push(s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE), e;
    },
    eQ = () => {
        let e = eJ(),
            [t] = (0, S.US)(e);
        return t === s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE ? (0, r.jsx)(P.Z, {}) : t === s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE ? (0, r.jsx)(U.Z, {}) : null;
    },
    e$ = eD.Z,
    e0 = (e) => {
        let { unseenGiftCount: t, showPrepaidPaymentPastDueWarning: S, impressionSource: y, numOfPendingFamilyRequests: P, isOverlaySupported: M, isClipsBetaTagShowing: U = !1, shouldMergeGameSettings: e0, isKeywordFilteringEnabled: e1, isStaff: e2, isInappropriateConversationWarningEnabled: e6, isInapproprateConversationsDefaultOn: e3, paymentsBlocked: e4, isEligibleForQuests: e8, showGiftNitro: e7, isStricterMessageRequestsEnabled: e9, hasLibraryApplication: e5, hasTOTPEnabled: te, developerMode: tt, isAdultUser: tn, hasSecureFramesVerifiedUserIds: tr, hypeSquadRemoved: ti, hasIgnoredUsers: ts, hasBlockedUsers: ta, isAllowGameFriendDMsVisible: tl, useRefreshedVoiceAndVideo: to, isEligibleForSensitiveContentDefaults: tc } = e;
        return Object.freeze({
            [eV.s6.SEARCH_NO_RESULTS]: {
                section: g.ID.CUSTOM,
                element: eT.Z
            },
            [eV.s6.ACCOUNT_SECURITY_TAB]: {
                section: eG.oAB.ACCOUNT,
                searchableTitles: [ez.NW.string(ez.t.Am9YHh)],
                label: ez.NW.string(ez.t.Am9YHh)
            },
            [eV.s6.ACCOUNT]: {
                section: eG.oAB.ACCOUNT,
                searchableTitles: [ez.NW.string(ez.t['JAIM/v'])],
                label: ez.NW.string(ez.t['JAIM/v']),
                ariaLabel: ez.NW.string(ez.t['JAIM/v']),
                element: el.Z,
                url: eG.Z5c.SETTINGS('account')
            },
            [eV.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [ez.NW.string(ez.t.LYju5O)],
                parent: eV.s6.ACCOUNT,
                section: eG.oAB.ACCOUNT
            },
            [eV.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [ez.NW.string(ez.t['9AjdkJ'])],
                section: eG.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PROFILE
            },
            [eV.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [ez.NW.string(ez.t.Ulqq6O)],
                section: eG.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PROFILE
            },
            [eV.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [ez.NW.string(ez.t['2UzQiY']), ez.NW.string(ez.t.dJOmCw), ez.NW.string(ez.t['Y0A/1N']), ez.NW.string(ez.t.wRpUfX), ez.NW.string(ez.t['+2/AhI'])],
                section: eG.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PROFILE,
                predicate: () => tc
            },
            [eV.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [ez.NW.string(ez.t['+JkHPz'])],
                section: eG.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PROFILE
            },
            [eV.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [ez.NW.string(ez.t.oP5zGB)],
                section: eG.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PROFILE
            },
            [eV.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [ez.NW.string(ez.t.pKSjEh)],
                section: eG.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT
            },
            [eV.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [ez.NW.string(ez.t['FRep5+'])],
                section: eG.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eV.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [ez.NW.string(ez.t['7qKDrK'])],
                section: eG.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [ez.NW.string(ez.t.m0FidH)],
                section: eG.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eV.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [ez.NW.string(ez.t.cDgKtb)],
                section: eG.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !te
            },
            [eV.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [ez.NW.string(ez.t['D+aE7u'])],
                section: eG.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => te
            },
            [eV.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [ez.NW.string(ez.t.fZSi1N)],
                section: eG.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eV.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [ez.NW.string(ez.t.uHAJ5u)],
                section: eG.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eV.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [ez.NW.string(ez.t.vrOCCg)],
                section: eG.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eV.s6.ACCOUNT_REMOVAL]: {
                section: eG.oAB.ACCOUNT,
                searchableTitles: [ez.NW.string(ez.t.ZKsIkp)],
                parent: eV.s6.ACCOUNT
            },
            [eV.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eG.oAB.ACCOUNT,
                searchableTitles: [ez.NW.string(ez.t.jf5GGR)],
                parent: eV.s6.ACCOUNT_REMOVAL
            },
            [eV.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eG.oAB.ACCOUNT,
                searchableTitles: [ez.NW.string(ez.t['8lQ2ra'])],
                parent: eV.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [eV.s6.GAMES]: {
                section: eG.oAB.GAMES,
                searchableTitles: [ez.NW.string(ez.t.URyqtL)],
                label: ez.NW.string(ez.t.URyqtL),
                ariaLabel: ez.NW.string(ez.t.URyqtL),
                element: eW.Z,
                predicate: () => e0
            },
            [eV.s6.GAMES_MY_GAMES]: {
                section: eG.oAB.GAMES,
                searchableTitles: [ez.NW.string(ez.t['5DMgp6'])],
                parent: eV.s6.GAMES
            },
            [eV.s6.GAMES_CLIPS]: {
                section: eG.oAB.GAMES,
                searchableTitles: [ez.NW.string(ez.t.z2jK6e)],
                parent: eV.s6.GAMES
            },
            [eV.s6.GAMES_OVERLAY]: {
                section: eG.oAB.GAMES,
                searchableTitles: [ez.NW.string(ez.t['9cb1U1'])],
                parent: eV.s6.GAMES
            },
            [eV.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eG.oAB.GAMES,
                searchableTitles: [ez.NW.string(ez.t.Cq98yM)],
                parent: eV.s6.GAMES
            },
            [eV.s6.PROFILE_CUSTOMIZATION]: {
                section: eG.oAB.PROFILE_CUSTOMIZATION,
                type: g.bT.WIDE,
                searchableTitles: [ez.NW.string(ez.t['vi7f+v'])],
                label: ez.NW.string(ez.t['vi7f+v']),
                ariaLabel: ez.NW.string(ez.t['vi7f+v']),
                element: k.Z,
                newIndicator: (0, r.jsx)(eQ, {}),
                newIndicatorDismissibleContentTypes: [...eJ()],
                notice: {
                    stores: [z.Z, T.Z],
                    element: w.Z
                },
                onSettingsClose: () => {
                    o.Z.wait(() => {
                        (0, v.It)(), (0, u.P6)(), m.Z.clearSubsection(eG.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eG.Z5c.SETTINGS('profile-customization')
            },
            [eV.s6.PROFILE_DISPLAY_NAME]: {
                section: eG.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ez.NW.string(ez.t['9AjdkJ'])],
                parent: eV.s6.PROFILE_CUSTOMIZATION
            },
            [eV.s6.PROFILE_USER_PROFILE]: {
                section: eG.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ez.NW.string(ez.t['OU3/Pj'])],
                parent: eV.s6.PROFILE_CUSTOMIZATION
            },
            [eV.s6.PROFILE_SERVER_PROFILES]: {
                section: eG.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ez.NW.string(ez.t.kPHroa)],
                parent: eV.s6.PROFILE_CUSTOMIZATION
            },
            [eV.s6.CONTENT_SOCIAL]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                label: ez.NW.string(ez.t['+o1pDQ']),
                searchableTitles: [ez.NW.string(ez.t['+o1pDQ'])],
                ariaLabel: ez.NW.string(ez.t['+o1pDQ']),
                element: ep.Z,
                url: eG.Z5c.SETTINGS('content-and-social')
            },
            [eV.s6.DATA_PRIVACY]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                label: ez.NW.string(ez.t.OAuOHB),
                searchableTitles: [ez.NW.string(ez.t.OAuOHB)],
                ariaLabel: ez.NW.string(ez.t.OAuOHB),
                element: eh.Z,
                url: eG.Z5c.SETTINGS('data-and-privacy')
            },
            [eV.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eG.oAB.ACCOUNT,
                searchableTitles: [ez.NW.string(ez.t['Vov/9v'])],
                parent: eV.s6.ACCOUNT
            },
            [eV.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.NW.string(ez.t.WWaFn5)],
                parent: eV.s6.DATA_PRIVACY,
                predicate: () => (0, X.isDesktop)()
            },
            [eV.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.NW.string(ez.t['opi/XF'])],
                parent: eV.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY
            },
            [eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.NW.string(ez.t.xVRG4O)],
                parent: eV.s6.CONTENT_SOCIAL
            },
            [eV.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.NW.string(ez.t.fyA119)],
                parent: eV.s6.CONTENT_SOCIAL
            },
            [eV.s6.PRIVACY_AND_SAFETY_GAME_FRIENDS_CATEGORY]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.NW.string(ez.t.oPyABA)],
                parent: eV.s6.CONTENT_SOCIAL,
                predicate: () => tl
            },
            [eV.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.NW.string(ez.t.fyA119)],
                parent: eV.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY
            },
            [eV.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.NW.string(ez.t['/U8Iwc'])],
                parent: eV.s6.PRIVACY_AND_SAFETY_GAME_FRIENDS_CATEGORY,
                predicate: () => tl
            },
            [eV.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.NW.string(ez.t['y62Z/f'])],
                parent: eV.s6.CONTENT_SOCIAL
            },
            [eV.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.NW.string(ez.t.SRZyHh)],
                parent: eV.s6.DATA_PRIVACY
            },
            [eV.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.NW.string(ez.t.uEz8JC), ez.NW.string(ez.t['N/oRIy']), ez.NW.string(ez.t.QVdYsL), ez.NW.string(ez.t['aWD+tr']), ez.NW.string(ez.t['5mnTa2'])],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eV.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.NW.string(ez.t.JzaP4u), ez.NW.string(ez.t.H9XOl5), ez.NW.string(ez.t.k4W40N)],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eV.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.NW.string(ez.t['L+yTsb'])],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eV.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.NW.string(ez.t.XahVjo)],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eV.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                parent: eV.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY
            },
            [eV.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.NW.string(ez.t.RAQUSE), ez.NW.string(ez.t.wbYDfX)],
                parent: eV.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eV.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.NW.string(ez.t['3o2ojo'])],
                parent: eV.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !e9
            },
            [eV.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.NW.string(ez.t.OLwZDQ)],
                parent: eV.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eV.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.NW.string(ez.t.wBkwu7)],
                parent: eV.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eV.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.NW.string(ez.t.XuADY2)],
                parent: eV.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eV.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.NW.string(ez.t.MNKzys)],
                parent: eV.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eV.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.NW.string(ez.t.VkS7YW)],
                parent: eV.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eV.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eV.CF],
                parent: eV.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eV.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.NW.string(ez.t.dmBSKi)],
                parent: eV.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY
            },
            [eV.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.NW.string(ez.t['1UaUy8']), ez.NW.string(ez.t['xIk/iI'])],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e1
            },
            [eV.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.NW.string(ez.t.qFsx5u)],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e6 && !tn && !e3
            },
            [eV.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.NW.string(ez.t['5b3FND'])],
                parent: eV.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => tr
            },
            [eV.s6.PRIVACY_FAMILY_CENTER]: {
                section: eG.oAB.FAMILY_CENTER,
                searchableTitles: [ez.NW.string(eK.Z.gntCQU)],
                label: ez.NW.string(eK.Z.gntCQU),
                ariaLabel: ez.NW.string(eK.Z.gntCQU),
                element: eN.Z,
                badgeCount: P,
                newIndicator: (0, r.jsx)(l.IGR, {
                    text: ez.NW.string(ez.t.y2b7CA),
                    color: j.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [s.z.FAMILY_CENTER_NEW_BADGE],
                url: eG.Z5c.SETTINGS('family-center')
            },
            [eV.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.NW.string(ez.t.BG7Qsb)],
                parent: eV.s6.DATA_PRIVACY
            },
            [eV.s6.AUTHORIZED_APPS]: {
                section: eG.oAB.AUTHORIZED_APPS,
                searchableTitles: [ez.NW.string(ez.t['f6kk+v'])],
                label: ez.NW.string(ez.t['f6kk+v']),
                element: eu.Z,
                url: eG.Z5c.SETTINGS('authorized-apps')
            },
            [eV.s6.SESSIONS]: {
                section: eG.oAB.SESSIONS,
                searchableTitles: [ez.NW.string(ez.t['+1h0k5'])],
                label: ez.NW.string(ez.t['+1h0k5']),
                ariaLabel: ez.NW.string(ez.t['+1h0k5']),
                element: eI.Z,
                newIndicatorDismissibleContentTypes: [s.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: y }
            },
            [eV.s6.CONNECTIONS]: {
                section: eG.oAB.CONNECTIONS,
                searchableTitles: [ez.NW.string(ez.t['3fe7U1'])],
                label: ez.NW.string(ez.t['3fe7U1']),
                ariaLabel: ez.NW.string(ez.t['3fe7U1']),
                element: eg.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: y },
                newIndicatorDismissibleContentTypes: [s.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eG.Z5c.SETTINGS('connections')
            },
            [eV.s6.THIRD_PARTY_ACCESS]: {
                section: eG.oAB.CONNECTIONS,
                searchableTitles: [ez.NW.string(ez.t['Ig/XFR']), ez.NW.string(ez.t['3fe7U1']), ez.NW.string(ez.t['f6kk+v'])],
                label: ez.NW.string(ez.t['Ig/XFR']),
                parent: eV.s6.CONNECTIONS,
                element: eR.Z
            },
            [eV.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eG.oAB.CONNECTIONS,
                searchableTitles: [ez.NW.string(ez.t['+/hZMz'])],
                parent: eV.s6.CONNECTIONS,
                element: eg.Z
            },
            [eV.s6.CLIPS]: {
                section: eG.oAB.CLIPS,
                searchableTitles: [ez.NW.string(ez.t.z2jK6e)],
                label: ez.NW.string(ez.t.z2jK6e),
                ariaLabel: ez.NW.string(ez.t.z2jK6e),
                icon: U ? (0, r.jsx)(_.Z, {}) : void 0,
                element: E.Z,
                predicate: () => !e0,
                url: eG.Z5c.SETTINGS('clips')
            },
            [eV.s6.RESTRICTED_USERS]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                parent: eV.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: ez.NW.string(ez.t['3wRorq']),
                element: eL.ZP,
                predicate: () => ts || ta
            },
            [eV.s6.BLOCKED_USERS]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                parent: eV.s6.RESTRICTED_USERS,
                label: ez.NW.string(ez.t.PFOUKS),
                searchableTitles: [ez.NW.string(ez.t.PFOUKS)],
                element: eL.GF,
                predicate: () => ta
            },
            [eV.s6.IGNORED_USERS]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                parent: eV.s6.RESTRICTED_USERS,
                searchableTitles: [ez.NW.string(ez.t['93ZDWF'])],
                label: ez.NW.string(ez.t['93ZDWF']),
                element: eL.yo,
                predicate: () => ts
            },
            [eV.s6.PREMIUM]: {
                section: eG.oAB.PREMIUM,
                ariaLabel: ez.NW.string(ez.t.Ipxkoq),
                searchableTitles: [ez.NW.string(ez.t.Ipxkoq)],
                label: ez.NW.string(ez.t.Ipxkoq),
                element: en.Z,
                className: eq.premiumTab
            },
            [eV.s6.GUILD_BOOSTING]: {
                section: eG.oAB.GUILD_BOOSTING,
                searchableTitles: [ez.NW.string(ez.t['+CbP2t'])],
                label: ez.NW.string(ez.t['+CbP2t']),
                element: ev.Z
            },
            [eV.s6.SUBSCRIPTIONS]: {
                section: eG.oAB.SUBSCRIPTIONS,
                ariaLabel: ez.NW.string(ez.t.trSpHR),
                searchableTitles: [ez.NW.string(ez.t.trSpHR)],
                label: ez.NW.string(ez.t.trSpHR),
                element: Z.Z,
                icon: S
                    ? (0, r.jsx)(l.P4T, {
                          size: 'xs',
                          color: a.Z.unsafe_rawColors.YELLOW_300.css
                      })
                    : null
            },
            [eV.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eG.oAB.SUBSCRIPTIONS,
                searchableTitles: [ez.NW.string(ez.t['2GKrvr'])],
                parent: eV.s6.SUBSCRIPTIONS
            },
            [eV.s6.GIFT_INVENTORY]: {
                section: eG.oAB.INVENTORY,
                searchableTitles: [ez.NW.string(ez.t['jcSP+v'])],
                label: ez.NW.string(ez.t['jcSP+v']),
                element: eE.Z,
                ariaLabel: ez.NW.string(ez.t['jcSP+v']),
                badgeCount: t
            },
            [eV.s6.GIFT_NITRO]: {
                section: eG.oAB.INVENTORY,
                searchableTitles: [ez.NW.string(ez.t.Ve9Ge3)],
                parent: eV.s6.GIFT_INVENTORY,
                predicate: () => !e4 && e7
            },
            [eV.s6.GIFT_CODE_REDEMPTION]: {
                section: eG.oAB.INVENTORY,
                searchableTitles: [ez.NW.string(ez.t['il+VCg'])],
                parent: eV.s6.GIFT_INVENTORY,
                predicate: () => !e4
            },
            [eV.s6.GIFT_INVENTORY_QUESTS]: {
                section: eG.oAB.INVENTORY,
                searchableTitles: [ez.NW.string(ez.t.JALI2N)],
                parent: eV.s6.GIFT_INVENTORY,
                predicate: () => e8
            },
            [eV.s6.GIFT_INVENTORY_LIST]: {
                section: eG.oAB.INVENTORY,
                searchableTitles: [ez.NW.string(ez.t['9KeUbW'])],
                parent: eV.s6.GIFT_INVENTORY,
                predicate: () => !e4
            },
            [eV.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eG.oAB.INVENTORY,
                searchableTitles: [ez.NW.string(ez.t.vwMEHR)],
                parent: eV.s6.GIFT_INVENTORY,
                predicate: () => e4
            },
            [eV.s6.BILLING]: {
                section: eG.oAB.BILLING,
                searchableTitles: [ez.NW.string(ez.t.oeUm2t)],
                label: ez.NW.string(ez.t.oeUm2t),
                ariaLabel: ez.NW.string(ez.t.oeUm2t),
                element: em.Z
            },
            [eV.s6.BILLING_PAYMENT_METHODS]: {
                section: eG.oAB.BILLING,
                searchableTitles: [ez.NW.string(ez.t.W26xGR)],
                parent: eV.s6.BILLING
            },
            [eV.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eG.oAB.BILLING,
                searchableTitles: [ez.NW.string(ez.t.obLrcH)],
                parent: eV.s6.BILLING
            },
            [eV.s6.APPEARANCE]: {
                section: eG.oAB.APPEARANCE,
                searchableTitles: [ez.NW.string(ez.t['iHH+k5'])],
                label: ez.NW.string(ez.t['iHH+k5']),
                ariaLabel: ez.NW.string(ez.t['iHH+k5']),
                element: ed.Z,
                newIndicator: (0, r.jsx)(l.lBU, { text: ez.NW.string(ez.t.y2b7CA) }),
                newIndicatorDismissibleContentTypes: eX(),
                url: eG.Z5c.SETTINGS('appearance')
            },
            [eV.s6.APPEARANCE_THEME]: {
                section: eG.oAB.APPEARANCE,
                searchableTitles: [ez.NW.string(ez.t.Ksh3io)],
                parent: eV.s6.APPEARANCE
            },
            [eV.s6.APPEARANCE_COLOR]: {
                section: eG.oAB.APPEARANCE,
                searchableTitles: [ez.NW.string(ez.t.OCOOiI)],
                parent: eV.s6.APPEARANCE_THEME
            },
            [eV.s6.APPEARANCE_ICON]: {
                section: eG.oAB.APPEARANCE,
                searchableTitles: [ez.NW.string(ez.t.RPh2oq)],
                parent: eV.s6.APPEARANCE_THEME
            },
            [eV.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eG.oAB.APPEARANCE,
                searchableTitles: [ez.NW.string(ez.t.ZEoGMT)],
                parent: eV.s6.APPEARANCE
            },
            [eV.s6.APPEARANCE_LIST_SPACING]: {
                section: eG.oAB.APPEARANCE,
                searchableTitles: ['List Spacing'],
                parent: eV.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(l.IGR, {
                    text: ez.NW.string(ez.t.y2b7CA),
                    color: j.Z.BG_BRAND
                }),
                predicate: () => (0, O.i9)('SettingsRendererConfig')
            },
            [eV.s6.APPEARANCE_SCALING_SPACING]: {
                section: eG.oAB.APPEARANCE,
                searchableTitles: [ez.NW.string(ez.t.qPOqoK)],
                parent: eV.s6.APPEARANCE
            },
            [eV.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eG.oAB.APPEARANCE,
                searchableTitles: [ez.NW.string(ez.t.dyamEB), ez.NW.string(ez.t.p8NOws), ez.NW.string(ez.t['+o/sOj'])],
                parent: eV.s6.APPEARANCE,
                predicate: () => V.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable24HourPref
            },
            [eV.s6.ACCESSIBILITY]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.G0neg4)],
                label: ez.NW.string(ez.t.G0neg4),
                ariaLabel: ez.NW.string(ez.t.G0neg4),
                element: ea.Z,
                url: eG.Z5c.SETTINGS('accessibility')
            },
            [eV.s6.ACCESSIBILITY_SATURATION]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t['5PWWCQ'])],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.bQCodH)],
                parent: eV.s6.ACCESSIBILITY_SATURATION
            },
            [eV.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.OLZFBw)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.uSOPWl)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_TAGS]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.UQt6dX)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_TAGS_NAMES]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.UPwh1N)],
                parent: eV.s6.ACCESSIBILITY_TAGS
            },
            [eV.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.BT8Bmp)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t['sSY+mJ'])],
                parent: eV.s6.ACCESSIBILITY_PROFILE_COLORS
            },
            [eV.s6.ACCESSIBILITY_CONTRAST]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.TYyfOz)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.cguieX)],
                parent: eV.s6.ACCESSIBILITY_CONTRAST
            },
            [eV.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.e3TR1d)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.b3XBzs)],
                parent: eV.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eV.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.Iayoh4)],
                parent: eV.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eV.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.iIaOlZ)],
                parent: eV.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eV.s6.ACCESSIBILITY_STICKERS]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t['6NtAuL'])],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_MESSAGES]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.onqU6u)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t['3Fztn5'])],
                parent: eV.s6.ACCESSIBILITY_MESSAGES
            },
            [eV.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.TZ2hZG)],
                parent: eV.s6.ACCESSIBILITY_MESSAGES
            },
            [eV.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.VpSKeH)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.qvTIwc)],
                parent: eV.s6.ACCESSIBILITY_TEXT_TO_SPEECH
            },
            [eV.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ez.NW.string(ez.t.lsW5Eh)],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eV.CF],
                parent: eV.s6.ACCESSIBILITY
            },
            [eV.s6.VOICE_AND_VIDEO]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.B1fFpa)],
                label: ez.NW.string(ez.t.B1fFpa),
                ariaLabel: ez.NW.string(ez.t.B1fFpa),
                element: eB.Z,
                predicate: () => H.Z.isSupported(),
                url: eG.Z5c.SETTINGS('voice')
            },
            [eV.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.K3lovL), ez.NW.string(ez.t.NiTd0d)],
                parent: eV.s6.VOICE_AND_VIDEO,
                predicate: () => to
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.FlNoSU)],
                parent: eV.s6.VOICE_AND_VIDEO,
                predicate: () => to
            },
            [eV.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.ABjMWF)],
                parent: eV.s6.VOICE_AND_VIDEO,
                predicate: () => to
            },
            [eV.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.OFpL3d)],
                parent: eV.s6.VOICE_AND_VIDEO,
                predicate: () => to
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.KDdjoq), ez.NW.string(ez.t.FeUKeH)],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => to
            },
            [eV.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.K3lovL), ez.NW.string(ez.t.NiTd0d)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VOICE_TAB : eV.s6.VOICE_AND_VIDEO
            },
            [eV.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.hHMYbW), ez.NW.string(ez.t.dl18zc), ez.NW.string(ez.t.nuFtHB), ez.NW.string(ez.t['3182VF']), ez.NW.string(ez.t['DGq/PT'])],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE
            },
            [eV.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.OX2Bnp), ez.NW.string(ez.t.eATD2N), ez.NW.string(ez.t.nuFtHB), ez.NW.string(ez.t['3182VF']), ez.NW.string(ez.t['DGq/PT'])],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE
            },
            [eV.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.gyljWF), ez.NW.string(ez.t.nuFtHB)],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE
            },
            [eV.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t['pS+K2N']), ez.NW.string(ez.t.nuFtHB)],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE
            },
            [eV.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t['sqUm+v']), ez.NW.string(ez.t.nuFtHB)],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => H.Z.getMode() === eH.pM.VOICE_ACTIVITY
            },
            [eV.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.e7LIiY)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eV.s6.VOICE_AND_VIDEO
            },
            [eV.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.nzUc3N)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB : eV.s6.VOICE_AND_VIDEO
            },
            [eV.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.ABjMWF)],
                parent: eV.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eV.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.nzUc3N)],
                parent: eV.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.LKzQSE)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VIDEO_TAB : eV.s6.VOICE_AND_VIDEO
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.F122Gx)],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => H.Z.supports(eH.AN.VIDEO)
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t['3Ppr1t'])],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO_CAMERA
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.lZTUPj)],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => H.Z.supports(eH.AN.VIDEO)
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t['8/udY2'])],
                parent: eV.s6.VOICE_AND_VIDEO
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t['8/udY2'])],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => to
            },
            [eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t['8/udY2'])],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE_TAB,
                predicate: () => to
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.DSGme3)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => !to
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.Tceiq6)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED : eV.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t['71Ve19'])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => H.Z.supports(eH.AN.OPEN_H264)
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.Sln58f)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.AxnPm5)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== J.ZP.releaseChannel && H.Z.isExperimentalEncodersSupported()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t['6I6GUl'])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.iWTwu7)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t['/jwMtr'])],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eV.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.OBwCXF)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.t8QhiY), ez.NW.string(ez.t.hmfkCg)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => H.Z.isNoiseSuppressionSupported()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.BbESsr)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => H.Z.isAdvancedVoiceActivitySupported()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.cUMdHx)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => H.Z.isAutomaticGainControlSupported()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.uancuL)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eV.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => H.Z.supports(eH.AN.QOS)
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.oSdBvb)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eV.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => H.Z.supports(eH.AN.ATTENUATION)
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.wVBHr6)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eV.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => H.Z.supports(eH.AN.LEGACY_AUDIO_SUBSYSTEM) || H.Z.supports(eH.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.KDdjoq), ez.NW.string(ez.t.NMCIf3), ez.NW.string(ez.t.FeUKeH)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eV.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => H.Z.supportsVideoHook() || H.Z.supportsExperimentalSoundshare() || (H.Z.supportsSystemScreensharePicker() && (0, X.isMac)())
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.GmWk2N), ez.NW.string(ez.t['Fj/xn5'])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => H.Z.supportsVideoHook()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t['4I0qzc'])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => H.Z.supportsExperimentalSoundshare()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.ie1mgY)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => H.Z.supportsSystemScreensharePicker() && (0, X.isMac)()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t['aP1N/v'])],
                parent: to ? eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eV.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => X.isPlatformEmbedded
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.OFpL3d)],
                parent: to ? eV.s6.VOICE_AND_VIDEO_DEBUG_TAB : eV.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t['0CEP6e'])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => Q.Sb.getSetting()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t['r6K+TE'])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => H.Z.isAecDumpSupported()
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t.U4FgFB)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === J.ZP.releaseChannel || 'development' === J.ZP.releaseChannel) && e2 && H.Z.supports(eH.AN.CONNECTION_REPLAY)
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t['726JHB'])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => X.isPlatformEmbedded && H.Z.supports(eH.AN.DEBUG_LOGGING) && null != p.Z.fileManager.readLogFiles
            },
            [eV.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eG.oAB.VOICE,
                searchableTitles: [ez.NW.string(ez.t['/RXu6+'])],
                parent: to ? eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING : eV.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eV.s6.CLICKER_GAME]: {
                url: eG.Z5c.SETTINGS('clicker-game'),
                section: eG.oAB.CLICKER_GAME,
                searchableTitles: [ez.NW.string(eY.Z['7qZdOz'])],
                label: ez.NW.string(eY.Z['7qZdOz']),
                ariaLabel: ez.NW.string(eY.Z['7qZdOz']),
                element: x.Z,
                predicate: () => N.C.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enableGame,
                icon: (0, r.jsx)('img', {
                    alt: '',
                    src: n(186542),
                    className: eq.clickerGameIcon
                })
            },
            [eV.s6.POGGERMODE]: {
                section: eG.oAB.POGGERMODE,
                searchableTitles: [ez.NW.string(ez.t.AtCukJ)],
                label: ez.NW.string(ez.t.AtCukJ),
                ariaLabel: ez.NW.string(ez.t.AtCukJ),
                element: D.Z,
                predicate: () => R.Z.settingsVisible,
                icon: (0, r.jsx)('img', {
                    alt: '',
                    src: n(348621),
                    className: eq.poggermodeIcon
                })
            },
            [eV.s6.CHAT]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t['/VQax8'])],
                label: ez.NW.string(ez.t['/VQax8']),
                ariaLabel: ez.NW.string(ez.t['/VQax8']),
                element: eA.Z,
                url: eG.Z5c.SETTINGS('chat')
            },
            [eV.s6.CHAT_INLINE_MEDIA]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t.U68Dgo)],
                parent: eV.s6.CHAT
            },
            [eV.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t.U47N1t)],
                parent: eV.s6.CHAT_INLINE_MEDIA
            },
            [eV.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t.VP11Nj)],
                parent: eV.s6.CHAT_INLINE_MEDIA
            },
            [eV.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t['5S2AKy'])],
                parent: eV.s6.CHAT_INLINE_MEDIA
            },
            [eV.s6.CHAT_EMBEDS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t.PWZOn5)],
                parent: eV.s6.CHAT
            },
            [eV.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t.xX0ZTE)],
                parent: eV.s6.CHAT_EMBEDS
            },
            [eV.s6.CHAT_EMOJI]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t.sMOuub)],
                parent: eV.s6.CHAT
            },
            [eV.s6.CHAT_EMOJI_REACTIONS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t.Iv24sr)],
                parent: eV.s6.CHAT_EMOJI
            },
            [eV.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t['79qal5'])],
                parent: eV.s6.CHAT_EMOJI
            },
            [eV.s6.CHAT_STICKERS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t['6NtAuL'])],
                parent: eV.s6.CHAT
            },
            [eV.s6.CHAT_STICKERS_SUGGESTIONS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t['479+PT'])],
                parent: eV.s6.CHAT_STICKERS
            },
            [eV.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t['29xPVV'])],
                parent: eV.s6.CHAT_STICKERS
            },
            [eV.s6.CHAT_SOUNDMOJI]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t.EHlAMT)],
                parent: eV.s6.CHAT
            },
            [eV.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t['CtYr+f'])],
                parent: eV.s6.CHAT_SOUNDMOJI
            },
            [eV.s6.CHAT_TEXT_BOX]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t.afR0pK)],
                parent: eV.s6.CHAT
            },
            [eV.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t.AqGrEB)],
                parent: eV.s6.CHAT_TEXT_BOX
            },
            [eV.s6.CHAT_THREADS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t.B2panJ)],
                parent: eV.s6.CHAT
            },
            [eV.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t.AInv5u)],
                parent: eV.s6.CHAT_THREADS
            },
            [eV.s6.CHAT_SPOILERS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [ez.NW.string(ez.t.QgwmV1)],
                parent: eV.s6.CHAT
            },
            [eV.s6.NOTIFICATIONS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.HcoRu7)],
                label: ez.NW.string(ez.t.HcoRu7),
                ariaLabel: ez.NW.string(ez.t.HcoRu7),
                element: eC.Z,
                url: eG.Z5c.SETTINGS('notifications')
            },
            [eV.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t['/0WClp'])],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.VH8AIC)],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.xSmFQE)],
                parent: eV.s6.NOTIFICATIONS,
                predicate: () => (0, X.isWindows)()
            },
            [eV.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.z21l8P)],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: ['New Notification Settings (Advanced, Staff Only)'],
                parent: eV.s6.NOTIFICATIONS,
                predicate: () => !1
            },
            [eV.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: ['Restore most recent snapshot'],
                parent: eV.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eV.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: ['Launch Migration'],
                parent: eV.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eV.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: ['Toggle new system on/off'],
                parent: eV.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eV.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.TTvjd3)],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.VpSKeH)],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.D9yVAA)],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.u6dc5O)],
                parent: eV.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eV.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.P8MG6u)],
                parent: eV.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eV.s6.NOTIFICATIONS_SOUNDS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.MKWyKS)],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_EMAILS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.TPchzM)],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t['B75+xc'])],
                parent: eV.s6.NOTIFICATIONS_EMAILS
            },
            [eV.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.sxn7lZ)],
                parent: eV.s6.NOTIFICATIONS_EMAILS
            },
            [eV.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.EkxXhY)],
                parent: eV.s6.NOTIFICATIONS_EMAILS
            },
            [eV.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.jNrkrK)],
                parent: eV.s6.NOTIFICATIONS_EMAILS
            },
            [eV.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.E8g1l5)],
                parent: eV.s6.NOTIFICATIONS_EMAILS
            },
            [eV.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.Ra9Pws)],
                parent: eV.s6.NOTIFICATIONS_EMAILS
            },
            [eV.s6.NOTIFICATIONS_REACTIONS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [ez.NW.string(ez.t.Rq0NFh)],
                parent: eV.s6.NOTIFICATIONS
            },
            [eV.s6.KEYBINDS]: {
                section: eG.oAB.KEYBINDS,
                searchableTitles: [ez.NW.string(ez.t.T9DA2N)],
                label: ez.NW.string(ez.t.T9DA2N),
                element: ej.Z,
                url: eG.Z5c.SETTINGS('keybinds')
            },
            [eV.s6.LANGUAGE]: {
                section: eG.oAB.LOCALE,
                searchableTitles: [ez.NW.string(ez.t.IHMsPj)],
                label: ez.NW.string(ez.t.IHMsPj),
                element: eO.Z,
                url: eG.Z5c.SETTINGS('language')
            },
            [eV.s6.WINDOW_SETTINGS]: {
                section: eG.oAB.WINDOWS,
                searchableTitles: [ez.NW.string(ez.t.ZkDZoq)],
                label: ez.NW.string(ez.t.ZkDZoq),
                element: eD.Z,
                predicate: () => X.isPlatformEmbedded && (0, X.isWindows)()
            },
            [eV.s6.LINUX_SETTINGS]: {
                section: eG.oAB.LINUX,
                searchableTitles: [ez.NW.string(ez.t['7pPjTU'])],
                label: ez.NW.string(ez.t['7pPjTU']),
                element: e$,
                predicate: () => X.isPlatformEmbedded && (0, X.isLinux)()
            },
            [eV.s6.STREAMER_MODE]: {
                section: eG.oAB.STREAMER_MODE,
                searchableTitles: [ez.NW.string(ez.t.S5GfOT)],
                label: ez.NW.string(ez.t.S5GfOT),
                ariaLabel: ez.NW.string(ez.t.S5GfOT),
                element: ey.Z,
                url: eG.Z5c.SETTINGS('streamer-mode')
            },
            [eV.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eG.oAB.STREAMER_MODE,
                searchableTitles: [ez.NW.string(ez.t.bxGbHB)],
                parent: eV.s6.STREAMER_MODE
            },
            [eV.s6.STREAMER_MODE_ENABLE]: {
                section: eG.oAB.STREAMER_MODE,
                searchableTitles: [ez.NW.string(ez.t.p9ZAJS)],
                parent: eV.s6.STREAMER_MODE
            },
            [eV.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eG.oAB.STREAMER_MODE,
                searchableTitles: [ez.NW.string(ez.t.UpQziI)],
                parent: eV.s6.STREAMER_MODE
            },
            [eV.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eG.oAB.STREAMER_MODE,
                searchableTitles: [ez.NW.string(ez.t.q7WNGh)],
                parent: eV.s6.STREAMER_MODE
            },
            [eV.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eG.oAB.STREAMER_MODE,
                searchableTitles: [ez.NW.string(ez.t['1CWknJ'])],
                parent: eV.s6.STREAMER_MODE
            },
            [eV.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eG.oAB.STREAMER_MODE,
                searchableTitles: [ez.NW.string(ez.t.qmYiYW)],
                parent: eV.s6.STREAMER_MODE
            },
            [eV.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eG.oAB.STREAMER_MODE,
                searchableTitles: [ez.NW.string(ez.t['iA81+f'])],
                parent: eV.s6.STREAMER_MODE,
                predicate: () => {
                    var e, t, n;
                    return null != (n = null === p.Z || void 0 === p.Z || null == (t = p.Z.window) || null == (e = t.supportsContentProtection) ? void 0 : e.call(t)) && n;
                }
            },
            [eV.s6.SETTINGS_ADVANCED]: {
                section: eG.oAB.ADVANCED,
                searchableTitles: [ez.NW.string(ez.t['8/udY2'])],
                label: ez.NW.string(ez.t['8/udY2']),
                ariaLabel: ez.NW.string(ez.t['8/udY2']),
                element: ec.Z
            },
            [eV.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eG.oAB.ADVANCED,
                searchableTitles: [ez.NW.string(ez.t.ObIb1d)],
                parent: eV.s6.SETTINGS_ADVANCED,
                predicate: () => K.wS
            },
            [eV.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eG.oAB.ADVANCED,
                searchableTitles: [ez.NW.string(ez.t['eOC/Fx'])],
                parent: eV.s6.SETTINGS_ADVANCED,
                predicate: () => X.isPlatformEmbedded
            },
            [eV.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eG.oAB.ADVANCED,
                searchableTitles: [ez.NW.string(ez.t.fi3UQE)],
                parent: eV.s6.SETTINGS_ADVANCED,
                predicate: () => e5
            },
            [eV.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eG.oAB.ADVANCED,
                searchableTitles: [ez.NW.string(ez.t.erOqlp)],
                parent: eV.s6.SETTINGS_ADVANCED,
                predicate: () => tt
            },
            [eV.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eG.oAB.ADVANCED,
                searchableTitles: [ez.NW.string(ez.t.qDZryM)],
                parent: eV.s6.SETTINGS_ADVANCED
            },
            [eV.s6.ACTIVITY_PRIVACY]: {
                section: eG.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ez.NW.string(ez.t.Cq98yM)],
                label: ez.NW.string(ez.t.Cq98yM),
                ariaLabel: ez.NW.string(ez.t.Cq98yM),
                element: eo.Z,
                predicate: () => !e0,
                url: eG.Z5c.SETTINGS('activity-privacy')
            },
            [eV.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: e0 ? eG.oAB.GAMES : eG.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ez.NW.string(ez.t['8ka8lp'])],
                parent: e0 ? eV.s6.GAMES_ACTIVITY_PRIVACY : eV.s6.ACTIVITY_PRIVACY
            },
            [eV.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: e0 ? eG.oAB.GAMES : eG.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ez.NW.string(ez.t.VOszPD)],
                parent: e0 ? eV.s6.GAMES_ACTIVITY_PRIVACY : eV.s6.ACTIVITY_PRIVACY
            },
            [eV.s6.ACTIVITY_PRIVACY_TOS]: {
                section: e0 ? eG.oAB.GAMES : eG.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eV.CF],
                parent: e0 ? eV.s6.GAMES_ACTIVITY_PRIVACY : eV.s6.ACTIVITY_PRIVACY
            },
            [eV.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eG.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ez.NW.string(ez.t['4F2KoK'])],
                parent: eV.s6.ACTIVITY_PRIVACY
            },
            [eV.s6.REGISTERED_GAMES]: {
                section: eG.oAB.REGISTERED_GAMES,
                searchableTitles: [ez.NW.string(ez.t.AVDyEh)],
                label: ez.NW.string(ez.t.AVDyEh),
                element: ex.Z,
                predicate: () => !e0 && (0, ek.Jw)()
            },
            [eV.s6.OVERLAY]: {
                section: eG.oAB.OVERLAY,
                searchableTitles: [ez.NW.string(ez.t['9cb1U1']), ez.NW.string(ez.t.HcoRu7)],
                label: ez.NW.string(ez.t['9cb1U1']),
                element: eS.Z,
                predicate: () => !e0 && M
            },
            [eV.s6.CHANGELOG]: {
                section: 'changelog',
                onClick: () => (0, b.Z)(!0),
                searchableTitles: [ez.NW.string(ez.t.LRmNAg)],
                label: ez.NW.string(ez.t.LRmNAg)
            },
            [eV.s6.MERCHANDISE]: {
                section: 'merchandise',
                onClick: () => {
                    let e = 'https://discordmerch.com/Dsktopprm';
                    Y.default.track(eG.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, q.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                Y.default.track(eG.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, h.Z)(e);
                            }
                        });
                },
                searchableTitles: [ez.NW.string(ez.t.sMEktb)],
                label: ez.NW.string(ez.t.sMEktb),
                ariaLabel: ez.NW.string(ez.t.sMEktb)
            },
            [eV.s6.HYPESQUAD]: {
                section: eG.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [ez.NW.string(ez.t['k0R+4e'])],
                label: ez.NW.string(ez.t['k0R+4e']),
                element: e_.Z,
                predicate: () => !ti
            },
            [eV.s6.TOWNHALL]: {
                section: eG.oAB.TOWNHALL,
                searchableTitles: [ez.NW.string(ez.t.dnZNER)],
                label: ez.NW.string(ez.t.dnZNER),
                predicate: () => ti,
                onClick: () => {
                    (0, h.Z)('https://discord.gg/discord-townhall'), (0, d.xf)();
                }
            },
            [eV.s6.EXPERIMENTS]: {
                section: eG.oAB.EXPERIMENTS,
                searchableTitles: ['Experiments'],
                label: 'Experiments',
                element: eZ.Z,
                predicate: () => G.Z.isDeveloper,
                url: eG.Z5c.SETTINGS('experiments')
            },
            [eV.s6.DEVELOPER_OPTIONS]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: eb.Z,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_FLAGS]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e2 && G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Accessibility Auditing'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => !1
            },
            [eV.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['CSS Debugging'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e2 && G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e2 && G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e2 && G.Z.isDeveloper && F.default.layoutDebuggingEnabled
            },
            [eV.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e2 && G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Disable App Collections Cache'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e2 && G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: eV.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: eV.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => f.q && G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Prevent Popouts From Closing Automatically'],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.HOTSPOT_OPTIONS]: {
                section: eG.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: ee.Z,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eG.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: C.Z,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.PAYMENT_FLOW_MODALS]: {
                section: eG.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: et.Z,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.REVENUE_STORYBOOK]: {
                section: eG.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Revenue Storybook', 'Payment Components', 'Orb Components', 'Virtual Currency'],
                label: 'Revenue Storybook',
                element: eM.Z,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eG.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ['Virtual Currency', 'Orb', 'Config'],
                label: 'Virtual Currency Config',
                element: eU.Z,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.PAYMENT_COMPONENTS]: {
                section: eG.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Payment Components'],
                label: 'Payment Components',
                element: eM.Z,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.ORB_COMPONENTS]: {
                section: eG.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Orb Components'],
                label: 'Orb Components',
                element: eM.Z,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.TEXT_PLAYGROUND]: {
                section: eG.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: eP.Z,
                predicate: () => (0, es.D)() || G.Z.isDeveloper
            },
            [eV.s6.DESIGN_SYSTEMS]: {
                section: eG.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: ef.Z,
                predicate: () => G.Z.isDeveloper,
                url: eG.Z5c.SETTINGS('design-systems')
            },
            [eV.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eG.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Colors'],
                label: 'Colors',
                element: ef.Z,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.ANIMATION_TESTING]: {
                section: eG.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Animation Testing'],
                label: 'Animation Testing',
                element: ef.Z,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eG.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Components'],
                label: 'Components',
                element: ef.Z,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.TEXT_COMPONENTS]: {
                section: eG.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: ei.Z,
                predicate: () => (0, es.D)() || G.Z.isDeveloper
            },
            [eV.s6.INTL_TESTING]: {
                section: eG.oAB.INTL_TESTING,
                searchableTitles: ['Intl Testing', 'i18n'],
                label: 'Intl Testing',
                element: I.Z,
                predicate: () => e2 || G.Z.isDeveloper
            },
            [eV.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
                section: eG.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
                searchableTitles: ['PFX Editor'],
                label: 'PFX Editor',
                element: W.Z,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.NAMEPLATES_PREVIEW_TOOL]: {
                section: eG.oAB.NAMEPLATES_PREVIEW_TOOL,
                searchableTitles: ['Nameplates Preview Tool'],
                label: 'Nameplates Preview Tool',
                element: A.Z,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.QUEST_PREVIEW_TOOL]: {
                section: eG.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: B.Z,
                predicate: () => (0, L.X7)({ location: eF.dr.QUEST_PREVIEW_TOOL })
            },
            [eV.s6.WEB_SETTING_TREE_TOOL]: {
                section: eG.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ['Web Setting Tree Tool'],
                label: 'Web Setting Tree Tool',
                element: ew.Z,
                predicate: () => G.Z.isDeveloper
            },
            [eV.s6.LOGOUT]: {
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
                                    header: ez.NW.string(ez.t['2jxGen']),
                                    confirmText: ez.NW.string(ez.t['2jxGen']),
                                    cancelText: ez.NW.string(ez.t['ETE/oK']),
                                    onCancel: e.onClose,
                                    onConfirm: () => c.Z.logout()
                                },
                                e
                            )),
                            (n = n =
                                {
                                    children: (0, r.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        children: ez.NW.string(ez.t.SUnWBA)
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
                label: ez.NW.string(ez.t['2jxGen']),
                ariaLabel: ez.NW.string(ez.t['2jxGen']),
                icon: (0, r.jsx)(l.PBZ, {
                    size: 'xs',
                    color: 'currentColor'
                })
            },
            [eV.s6.SOCIAL_LINKS]: {
                section: g.ID.CUSTOM,
                element: er.Z
            },
            [eV.s6.CLIENT_DEBUG_INFO]: {
                section: g.ID.CUSTOM,
                element: $.Z
            }
        });
    };
