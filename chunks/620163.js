n.d(t, { i: () => e1 }), n(653041), n(47120);
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
    b = n(49226),
    N = n(163379),
    x = n(498646),
    _ = n(489968),
    E = n(703288),
    j = n(574755),
    O = n(377171),
    C = n(540059),
    S = n(621628),
    v = n(243778),
    T = n(18438),
    I = n(778825),
    y = n(665166),
    A = n(442933),
    P = n(715495),
    R = n(158947),
    D = n(351780),
    Z = n(231765),
    w = n(813732),
    k = n(398140),
    W = n(564344),
    L = n(538645),
    B = n(977156),
    M = n(652380),
    U = n(373230),
    V = n(87478),
    G = n(145158),
    F = n(906467),
    H = n(857192),
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
    en = n(498639),
    er = n(748717),
    ei = n(419636),
    es = n(799071),
    ea = n(601433),
    el = n(154022),
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
    eN = n(956699),
    ex = n(54942),
    e_ = n(293389),
    eE = n(88624),
    ej = n(387747),
    eO = n(389650),
    eC = n(649157),
    eS = n(593648),
    ev = n(327885),
    eT = n(595242),
    eI = n(463153),
    ey = n(36192),
    eA = n(889029),
    eP = n(400287),
    eR = n(554042),
    eD = n(936982),
    eZ = n(200645),
    ew = n(287490),
    ek = n(706060),
    eW = n(168308),
    eL = n(277329),
    eB = n(273927),
    eM = n(604224),
    eU = n(43434),
    eV = n(333576),
    eG = n(726985),
    eF = n(981631),
    eH = n(46140),
    ez = n(65154),
    eY = n(388032),
    eK = n(622802),
    eq = n(332495),
    eX = n(539452);
let eJ = () => [s.z.CLIENT_THEMES_SETTINGS_BADGE, s.z.DEKSTOP_CUSTOM_APP_ICON_BADGE],
    eQ = () => {
        let e = [];
        return U.c.getCurrentConfig({ location: 'SettingsRendererConfig' }).enabled && e.push(s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE), A.e.getCurrentConfig({ location: 'SettingsRendererConfig' }).canPurchase && e.push(s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE), e;
    },
    e$ = () => {
        let e = eQ(),
            [t] = (0, v.US)(e);
        return t === s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE ? (0, r.jsx)(R.Z, {}) : t === s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE ? (0, r.jsx)(V.Z, {}) : null;
    },
    e0 = eZ.Z,
    e1 = (e) => {
        let { unseenGiftCount: t, showPrepaidPaymentPastDueWarning: v, impressionSource: A, numOfPendingFamilyRequests: R, isOverlaySupported: U, isClipsBetaTagShowing: V = !1, shouldMergeGameSettings: e1, isKeywordFilteringEnabled: e2, isStaff: e6, isInappropriateConversationWarningEnabled: e3, isInapproprateConversationsDefaultOn: e4, paymentsBlocked: e8, isEligibleForQuests: e7, showGiftNitro: e9, isStricterMessageRequestsEnabled: e5, hasLibraryApplication: te, hasTOTPEnabled: tt, developerMode: tn, isAdultUser: tr, hasSecureFramesVerifiedUserIds: ti, hypeSquadRemoved: ts, hasIgnoredUsers: ta, hasBlockedUsers: tl, isAllowGameFriendDMsVisible: to, useRefreshedVoiceAndVideo: tc, isEligibleForSensitiveContentDefaults: td } = e;
        return Object.freeze({
            [eG.s6.SEARCH_NO_RESULTS]: {
                section: g.ID.CUSTOM,
                element: eI.Z
            },
            [eG.s6.ACCOUNT_SECURITY_TAB]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.NW.string(eY.t.Am9YHh)],
                label: eY.NW.string(eY.t.Am9YHh)
            },
            [eG.s6.ACCOUNT]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.NW.string(eY.t['JAIM/v'])],
                label: eY.NW.string(eY.t['JAIM/v']),
                ariaLabel: eY.NW.string(eY.t['JAIM/v']),
                element: eo.Z,
                url: eF.Z5c.SETTINGS('account')
            },
            [eG.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eY.NW.string(eY.t.LYju5O)],
                parent: eG.s6.ACCOUNT,
                section: eF.oAB.ACCOUNT
            },
            [eG.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eY.NW.string(eY.t['9AjdkJ'])],
                section: eF.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE
            },
            [eG.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eY.NW.string(eY.t.Ulqq6O)],
                section: eF.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE
            },
            [eG.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [eY.NW.string(eY.t['2UzQiY']), eY.NW.string(eY.t.dJOmCw), eY.NW.string(eY.t['Y0A/1N']), eY.NW.string(eY.t.wRpUfX), eY.NW.string(eY.t['+2/AhI'])],
                section: eF.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE,
                predicate: () => td
            },
            [eG.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eY.NW.string(eY.t['+JkHPz'])],
                section: eF.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE
            },
            [eG.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eY.NW.string(eY.t.oP5zGB)],
                section: eF.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE
            },
            [eG.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eY.NW.string(eY.t.pKSjEh)],
                section: eF.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT
            },
            [eG.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eY.NW.string(eY.t['FRep5+'])],
                section: eF.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eY.NW.string(eY.t['7qKDrK'])],
                section: eF.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eY.NW.string(eY.t.m0FidH)],
                section: eF.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eY.NW.string(eY.t.cDgKtb)],
                section: eF.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !tt
            },
            [eG.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eY.NW.string(eY.t['D+aE7u'])],
                section: eF.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => tt
            },
            [eG.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eY.NW.string(eY.t.fZSi1N)],
                section: eF.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eY.NW.string(eY.t.uHAJ5u)],
                section: eF.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eY.NW.string(eY.t.vrOCCg)],
                section: eF.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eG.s6.ACCOUNT_REMOVAL]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.NW.string(eY.t.ZKsIkp)],
                parent: eG.s6.ACCOUNT
            },
            [eG.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.NW.string(eY.t.jf5GGR)],
                parent: eG.s6.ACCOUNT_REMOVAL
            },
            [eG.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.NW.string(eY.t['8lQ2ra'])],
                parent: eG.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [eG.s6.GAMES]: {
                section: eF.oAB.GAMES,
                searchableTitles: [eY.NW.string(eY.t.URyqtL)],
                label: eY.NW.string(eY.t.URyqtL),
                ariaLabel: eY.NW.string(eY.t.URyqtL),
                element: eL.Z,
                predicate: () => e1
            },
            [eG.s6.GAMES_MY_GAMES]: {
                section: eF.oAB.GAMES,
                searchableTitles: [eY.NW.string(eY.t['5DMgp6'])],
                parent: eG.s6.GAMES
            },
            [eG.s6.GAMES_CLIPS]: {
                section: eF.oAB.GAMES,
                searchableTitles: [eY.NW.string(eY.t.z2jK6e)],
                parent: eG.s6.GAMES
            },
            [eG.s6.GAMES_OVERLAY]: {
                section: eF.oAB.GAMES,
                searchableTitles: [eY.NW.string(eY.t['9cb1U1'])],
                parent: eG.s6.GAMES
            },
            [eG.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eF.oAB.GAMES,
                searchableTitles: [eY.NW.string(eY.t.Cq98yM)],
                parent: eG.s6.GAMES
            },
            [eG.s6.PROFILE_CUSTOMIZATION]: {
                section: eF.oAB.PROFILE_CUSTOMIZATION,
                type: g.bT.WIDE,
                searchableTitles: [eY.NW.string(eY.t['vi7f+v'])],
                label: eY.NW.string(eY.t['vi7f+v']),
                ariaLabel: eY.NW.string(eY.t['vi7f+v']),
                element: W.Z,
                newIndicator: (0, r.jsx)(e$, {}),
                newIndicatorDismissibleContentTypes: [...eQ()],
                notice: {
                    stores: [Y.Z, I.Z],
                    element: k.Z
                },
                onSettingsClose: () => {
                    o.Z.wait(() => {
                        (0, T.It)(), (0, u.P6)(), m.Z.clearSubsection(eF.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eF.Z5c.SETTINGS('profile-customization')
            },
            [eG.s6.PROFILE_DISPLAY_NAME]: {
                section: eF.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eY.NW.string(eY.t['9AjdkJ'])],
                parent: eG.s6.PROFILE_CUSTOMIZATION
            },
            [eG.s6.PROFILE_USER_PROFILE]: {
                section: eF.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eY.NW.string(eY.t['OU3/Pj'])],
                parent: eG.s6.PROFILE_CUSTOMIZATION
            },
            [eG.s6.PROFILE_SERVER_PROFILES]: {
                section: eF.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eY.NW.string(eY.t.kPHroa)],
                parent: eG.s6.PROFILE_CUSTOMIZATION
            },
            [eG.s6.CONTENT_SOCIAL]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                label: eY.NW.string(eY.t['+o1pDQ']),
                searchableTitles: [eY.NW.string(eY.t['+o1pDQ'])],
                ariaLabel: eY.NW.string(eY.t['+o1pDQ']),
                element: eh.Z,
                url: eF.Z5c.SETTINGS('content-and-social')
            },
            [eG.s6.DATA_PRIVACY]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                label: eY.NW.string(eY.t.OAuOHB),
                searchableTitles: [eY.NW.string(eY.t.OAuOHB)],
                ariaLabel: eY.NW.string(eY.t.OAuOHB),
                element: ef.Z,
                url: eF.Z5c.SETTINGS('data-and-privacy')
            },
            [eG.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.NW.string(eY.t['Vov/9v'])],
                parent: eG.s6.ACCOUNT
            },
            [eG.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.NW.string(eY.t.WWaFn5)],
                parent: eG.s6.DATA_PRIVACY,
                predicate: () => (0, J.isDesktop)()
            },
            [eG.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.NW.string(eY.t['opi/XF'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY
            },
            [eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.NW.string(eY.t.xVRG4O)],
                parent: eG.s6.CONTENT_SOCIAL
            },
            [eG.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.NW.string(eY.t.fyA119)],
                parent: eG.s6.CONTENT_SOCIAL
            },
            [eG.s6.PRIVACY_AND_SAFETY_GAME_FRIENDS_CATEGORY]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.NW.string(eY.t.oPyABA)],
                parent: eG.s6.CONTENT_SOCIAL,
                predicate: () => to
            },
            [eG.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.NW.string(eY.t.fyA119)],
                parent: eG.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY
            },
            [eG.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.NW.string(eY.t['/U8Iwc'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_GAME_FRIENDS_CATEGORY,
                predicate: () => to
            },
            [eG.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.NW.string(eY.t['y62Z/f'])],
                parent: eG.s6.CONTENT_SOCIAL
            },
            [eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.NW.string(eY.t.SRZyHh)],
                parent: eG.s6.DATA_PRIVACY
            },
            [eG.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.NW.string(eY.t.uEz8JC), eY.NW.string(eY.t['N/oRIy']), eY.NW.string(eY.t.QVdYsL), eY.NW.string(eY.t['aWD+tr']), eY.NW.string(eY.t['5mnTa2'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eG.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.NW.string(eY.t.JzaP4u), eY.NW.string(eY.t.H9XOl5), eY.NW.string(eY.t.k4W40N)],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eG.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.NW.string(eY.t['L+yTsb'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eG.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.NW.string(eY.t.XahVjo)],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                parent: eG.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY
            },
            [eG.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.NW.string(eY.t.RAQUSE), eY.NW.string(eY.t.wbYDfX)],
                parent: eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eG.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.NW.string(eY.t['3o2ojo'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !e5
            },
            [eG.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.NW.string(eY.t.OLwZDQ)],
                parent: eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eG.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.NW.string(eY.t.wBkwu7)],
                parent: eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eG.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.NW.string(eY.t.XuADY2)],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eG.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.NW.string(eY.t.MNKzys)],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eG.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.NW.string(eY.t.VkS7YW)],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eG.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eG.CF],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eG.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.NW.string(eY.t.dmBSKi)],
                parent: eG.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY
            },
            [eG.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.NW.string(eY.t['1UaUy8']), eY.NW.string(eY.t['xIk/iI'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e2
            },
            [eG.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.NW.string(eY.t.qFsx5u)],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e3 && !tr && !e4
            },
            [eG.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.NW.string(eY.t['5b3FND'])],
                parent: eG.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => ti
            },
            [eG.s6.PRIVACY_FAMILY_CENTER]: {
                section: eF.oAB.FAMILY_CENTER,
                searchableTitles: [eY.NW.string(eq.Z.gntCQU)],
                label: eY.NW.string(eq.Z.gntCQU),
                ariaLabel: eY.NW.string(eq.Z.gntCQU),
                element: ex.Z,
                badgeCount: R,
                newIndicator: (0, r.jsx)(l.IGR, {
                    text: eY.NW.string(eY.t.y2b7CA),
                    color: O.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [s.z.FAMILY_CENTER_NEW_BADGE],
                url: eF.Z5c.SETTINGS('family-center')
            },
            [eG.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.NW.string(eY.t.BG7Qsb)],
                parent: eG.s6.DATA_PRIVACY
            },
            [eG.s6.AUTHORIZED_APPS]: {
                section: eF.oAB.AUTHORIZED_APPS,
                searchableTitles: [eY.NW.string(eY.t['f6kk+v'])],
                label: eY.NW.string(eY.t['f6kk+v']),
                element: em.Z,
                url: eF.Z5c.SETTINGS('authorized-apps')
            },
            [eG.s6.SESSIONS]: {
                section: eF.oAB.SESSIONS,
                searchableTitles: [eY.NW.string(eY.t['+1h0k5'])],
                label: eY.NW.string(eY.t['+1h0k5']),
                ariaLabel: eY.NW.string(eY.t['+1h0k5']),
                element: ey.Z,
                newIndicatorDismissibleContentTypes: [s.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: A }
            },
            [eG.s6.CONNECTIONS]: {
                section: eF.oAB.CONNECTIONS,
                searchableTitles: [eY.NW.string(eY.t['3fe7U1'])],
                label: eY.NW.string(eY.t['3fe7U1']),
                ariaLabel: eY.NW.string(eY.t['3fe7U1']),
                element: ep.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: A },
                newIndicatorDismissibleContentTypes: [s.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eF.Z5c.SETTINGS('connections')
            },
            [eG.s6.THIRD_PARTY_ACCESS]: {
                section: eF.oAB.CONNECTIONS,
                searchableTitles: [eY.NW.string(eY.t['Ig/XFR']), eY.NW.string(eY.t['3fe7U1']), eY.NW.string(eY.t['f6kk+v'])],
                label: eY.NW.string(eY.t['Ig/XFR']),
                parent: eG.s6.CONNECTIONS,
                element: eD.Z
            },
            [eG.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eF.oAB.CONNECTIONS,
                searchableTitles: [eY.NW.string(eY.t['+/hZMz'])],
                parent: eG.s6.CONNECTIONS,
                element: ep.Z
            },
            [eG.s6.CLIPS]: {
                section: eF.oAB.CLIPS,
                searchableTitles: [eY.NW.string(eY.t.z2jK6e)],
                label: eY.NW.string(eY.t.z2jK6e),
                ariaLabel: eY.NW.string(eY.t.z2jK6e),
                icon: V ? (0, r.jsx)(E.Z, {}) : void 0,
                element: j.Z,
                predicate: () => !e1,
                url: eF.Z5c.SETTINGS('clips')
            },
            [eG.s6.RESTRICTED_USERS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                parent: eG.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eY.NW.string(eY.t['3wRorq']),
                element: eB.ZP,
                predicate: () => ta || tl
            },
            [eG.s6.BLOCKED_USERS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                parent: eG.s6.RESTRICTED_USERS,
                label: eY.NW.string(eY.t.PFOUKS),
                searchableTitles: [eY.NW.string(eY.t.PFOUKS)],
                element: eB.GF,
                predicate: () => tl
            },
            [eG.s6.IGNORED_USERS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                parent: eG.s6.RESTRICTED_USERS,
                searchableTitles: [eY.NW.string(eY.t['93ZDWF'])],
                label: eY.NW.string(eY.t['93ZDWF']),
                element: eB.yo,
                predicate: () => ta
            },
            [eG.s6.PREMIUM]: {
                section: eF.oAB.PREMIUM,
                ariaLabel: eY.NW.string(eY.t.Ipxkoq),
                searchableTitles: [eY.NW.string(eY.t.Ipxkoq)],
                label: eY.NW.string(eY.t.Ipxkoq),
                element: er.Z,
                className: eX.premiumTab
            },
            [eG.s6.GUILD_BOOSTING]: {
                section: eF.oAB.GUILD_BOOSTING,
                searchableTitles: [eY.NW.string(eY.t['+CbP2t'])],
                label: eY.NW.string(eY.t['+CbP2t']),
                element: eT.Z
            },
            [eG.s6.SUBSCRIPTIONS]: {
                section: eF.oAB.SUBSCRIPTIONS,
                ariaLabel: eY.NW.string(eY.t.trSpHR),
                searchableTitles: [eY.NW.string(eY.t.trSpHR)],
                label: eY.NW.string(eY.t.trSpHR),
                element: w.Z,
                icon: v
                    ? (0, r.jsx)(l.P4T, {
                          size: 'xs',
                          color: a.Z.unsafe_rawColors.YELLOW_300.css
                      })
                    : null
            },
            [eG.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eF.oAB.SUBSCRIPTIONS,
                searchableTitles: [eY.NW.string(eY.t['2GKrvr'])],
                parent: eG.s6.SUBSCRIPTIONS
            },
            [eG.s6.GIFT_INVENTORY]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.NW.string(eY.t['jcSP+v'])],
                label: eY.NW.string(eY.t['jcSP+v']),
                element: ej.Z,
                ariaLabel: eY.NW.string(eY.t['jcSP+v']),
                badgeCount: t
            },
            [eG.s6.GIFT_NITRO]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.NW.string(eY.t.Ve9Ge3)],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => !e8 && e9
            },
            [eG.s6.GIFT_CODE_REDEMPTION]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.NW.string(eY.t['il+VCg'])],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => !e8
            },
            [eG.s6.GIFT_INVENTORY_QUESTS]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.NW.string(eY.t.JALI2N)],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => e7
            },
            [eG.s6.GIFT_INVENTORY_LIST]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.NW.string(eY.t['9KeUbW'])],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => !e8
            },
            [eG.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.NW.string(eY.t.vwMEHR)],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => e8
            },
            [eG.s6.BILLING]: {
                section: eF.oAB.BILLING,
                searchableTitles: [eY.NW.string(eY.t.oeUm2t)],
                label: eY.NW.string(eY.t.oeUm2t),
                ariaLabel: eY.NW.string(eY.t.oeUm2t),
                element: eg.Z
            },
            [eG.s6.BILLING_PAYMENT_METHODS]: {
                section: eF.oAB.BILLING,
                searchableTitles: [eY.NW.string(eY.t.W26xGR)],
                parent: eG.s6.BILLING
            },
            [eG.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eF.oAB.BILLING,
                searchableTitles: [eY.NW.string(eY.t.obLrcH)],
                parent: eG.s6.BILLING
            },
            [eG.s6.APPEARANCE]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.NW.string(eY.t['iHH+k5'])],
                label: eY.NW.string(eY.t['iHH+k5']),
                ariaLabel: eY.NW.string(eY.t['iHH+k5']),
                element: eu.Z,
                newIndicator: (0, r.jsx)(l.lBU, { text: eY.NW.string(eY.t.y2b7CA) }),
                newIndicatorDismissibleContentTypes: eJ(),
                url: eF.Z5c.SETTINGS('appearance')
            },
            [eG.s6.APPEARANCE_THEME]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.NW.string(eY.t.Ksh3io)],
                parent: eG.s6.APPEARANCE
            },
            [eG.s6.APPEARANCE_COLOR]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.NW.string(eY.t.OCOOiI)],
                parent: eG.s6.APPEARANCE_THEME
            },
            [eG.s6.APPEARANCE_ICON]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.NW.string(eY.t.RPh2oq)],
                parent: eG.s6.APPEARANCE_THEME
            },
            [eG.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.NW.string(eY.t.ZEoGMT)],
                parent: eG.s6.APPEARANCE
            },
            [eG.s6.APPEARANCE_LIST_SPACING]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: ['List Spacing'],
                parent: eG.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(l.IGR, {
                    text: eY.NW.string(eY.t.y2b7CA),
                    color: O.Z.BG_BRAND
                }),
                predicate: () => (0, C.i9)('SettingsRendererConfig')
            },
            [eG.s6.APPEARANCE_SCALING_SPACING]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.NW.string(eY.t.qPOqoK)],
                parent: eG.s6.APPEARANCE
            },
            [eG.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.NW.string(eY.t.dyamEB), eY.NW.string(eY.t.p8NOws), eY.NW.string(eY.t['+o/sOj'])],
                parent: eG.s6.APPEARANCE,
                predicate: () => G.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable24HourPref
            },
            [eG.s6.ACCESSIBILITY]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.G0neg4)],
                label: eY.NW.string(eY.t.G0neg4),
                ariaLabel: eY.NW.string(eY.t.G0neg4),
                element: el.Z,
                url: eF.Z5c.SETTINGS('accessibility')
            },
            [eG.s6.ACCESSIBILITY_SATURATION]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t['5PWWCQ'])],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.bQCodH)],
                parent: eG.s6.ACCESSIBILITY_SATURATION
            },
            [eG.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.OLZFBw)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.uSOPWl)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_TAGS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.UQt6dX)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_TAGS_NAMES]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.UPwh1N)],
                parent: eG.s6.ACCESSIBILITY_TAGS
            },
            [eG.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.BT8Bmp)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t['sSY+mJ'])],
                parent: eG.s6.ACCESSIBILITY_PROFILE_COLORS
            },
            [eG.s6.ACCESSIBILITY_CONTRAST]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.TYyfOz)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.cguieX)],
                parent: eG.s6.ACCESSIBILITY_CONTRAST
            },
            [eG.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.e3TR1d)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.b3XBzs)],
                parent: eG.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eG.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.Iayoh4)],
                parent: eG.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eG.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.iIaOlZ)],
                parent: eG.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eG.s6.ACCESSIBILITY_STICKERS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t['6NtAuL'])],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_MESSAGES]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.onqU6u)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t['3Fztn5'])],
                parent: eG.s6.ACCESSIBILITY_MESSAGES
            },
            [eG.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.TZ2hZG)],
                parent: eG.s6.ACCESSIBILITY_MESSAGES
            },
            [eG.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.VpSKeH)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.qvTIwc)],
                parent: eG.s6.ACCESSIBILITY_TEXT_TO_SPEECH
            },
            [eG.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.NW.string(eY.t.lsW5Eh)],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eG.CF],
                parent: eG.s6.ACCESSIBILITY
            },
            [eG.s6.VOICE_AND_VIDEO]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.B1fFpa)],
                label: eY.NW.string(eY.t.B1fFpa),
                ariaLabel: eY.NW.string(eY.t.B1fFpa),
                element: eM.Z,
                predicate: () => z.Z.isSupported(),
                url: eF.Z5c.SETTINGS('voice')
            },
            [eG.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.K3lovL), eY.NW.string(eY.t.NiTd0d)],
                parent: eG.s6.VOICE_AND_VIDEO,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.FlNoSU)],
                parent: eG.s6.VOICE_AND_VIDEO,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.ABjMWF)],
                parent: eG.s6.VOICE_AND_VIDEO,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.OFpL3d)],
                parent: eG.s6.VOICE_AND_VIDEO,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.KDdjoq), eY.NW.string(eY.t.FeUKeH)],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.K3lovL), eY.NW.string(eY.t.NiTd0d)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_TAB : eG.s6.VOICE_AND_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.hHMYbW), eY.NW.string(eY.t.dl18zc), eY.NW.string(eY.t.nuFtHB), eY.NW.string(eY.t['3182VF']), eY.NW.string(eY.t['DGq/PT'])],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE
            },
            [eG.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.OX2Bnp), eY.NW.string(eY.t.eATD2N), eY.NW.string(eY.t.nuFtHB), eY.NW.string(eY.t['3182VF']), eY.NW.string(eY.t['DGq/PT'])],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE
            },
            [eG.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.gyljWF), eY.NW.string(eY.t.nuFtHB)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE
            },
            [eG.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t['pS+K2N']), eY.NW.string(eY.t.nuFtHB)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE
            },
            [eG.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t['sqUm+v']), eY.NW.string(eY.t.nuFtHB)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => z.Z.getMode() === ez.pM.VOICE_ACTIVITY
            },
            [eG.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.e7LIiY)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eG.s6.VOICE_AND_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.nzUc3N)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB : eG.s6.VOICE_AND_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.ABjMWF)],
                parent: eG.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eG.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.nzUc3N)],
                parent: eG.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.LKzQSE)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VIDEO_TAB : eG.s6.VOICE_AND_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.F122Gx)],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => z.Z.supports(ez.AN.VIDEO)
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t['3Ppr1t'])],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_CAMERA
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.lZTUPj)],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => z.Z.supports(ez.AN.VIDEO)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t['8/udY2'])],
                parent: eG.s6.VOICE_AND_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t['8/udY2'])],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t['8/udY2'])],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE_TAB,
                predicate: () => tc
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.DSGme3)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => !tc
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.Tceiq6)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED : eG.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t['71Ve19'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => z.Z.supports(ez.AN.OPEN_H264)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.Sln58f)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.AxnPm5)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== Q.ZP.releaseChannel && z.Z.isExperimentalEncodersSupported()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t['6I6GUl'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.iWTwu7)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t['/jwMtr'])],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eG.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.OBwCXF)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.t8QhiY), eY.NW.string(eY.t.hmfkCg)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => z.Z.isNoiseSuppressionSupported()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.BbESsr)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => z.Z.isAdvancedVoiceActivitySupported()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.cUMdHx)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => z.Z.isAutomaticGainControlSupported()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.uancuL)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => z.Z.supports(ez.AN.QOS)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.oSdBvb)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => z.Z.supports(ez.AN.ATTENUATION)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.wVBHr6)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => z.Z.supports(ez.AN.LEGACY_AUDIO_SUBSYSTEM) || z.Z.supports(ez.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.KDdjoq), eY.NW.string(eY.t.NMCIf3), eY.NW.string(eY.t.FeUKeH)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => z.Z.supportsVideoHook() || z.Z.supportsExperimentalSoundshare() || (z.Z.supportsSystemScreensharePicker() && (0, J.isMac)())
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.GmWk2N), eY.NW.string(eY.t['Fj/xn5'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => z.Z.supportsVideoHook()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t['4I0qzc'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => z.Z.supportsExperimentalSoundshare()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.ie1mgY)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => z.Z.supportsSystemScreensharePicker() && (0, J.isMac)()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t['aP1N/v'])],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => J.isPlatformEmbedded
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.OFpL3d)],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_DEBUG_TAB : eG.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t['0CEP6e'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => $.Sb.getSetting()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t['r6K+TE'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => z.Z.isAecDumpSupported()
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t.U4FgFB)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === Q.ZP.releaseChannel || 'development' === Q.ZP.releaseChannel) && e6 && z.Z.supports(ez.AN.CONNECTION_REPLAY)
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t['726JHB'])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => J.isPlatformEmbedded && z.Z.supports(ez.AN.DEBUG_LOGGING) && null != p.Z.fileManager.readLogFiles
            },
            [eG.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.NW.string(eY.t['/RXu6+'])],
                parent: tc ? eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING : eG.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eG.s6.CLICKER_GAME]: {
                url: eF.Z5c.SETTINGS('clicker-game'),
                section: eF.oAB.CLICKER_GAME,
                searchableTitles: [eY.NW.string(eK.Z['7qZdOz'])],
                label: eY.NW.string(eK.Z['7qZdOz']),
                ariaLabel: eY.NW.string(eK.Z['7qZdOz']),
                element: _.Z,
                predicate: () => x.C.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enableGame,
                icon: (0, r.jsx)('img', {
                    alt: '',
                    src: n(186542),
                    className: eX.clickerGameIcon
                })
            },
            [eG.s6.POGGERMODE]: {
                section: eF.oAB.POGGERMODE,
                searchableTitles: [eY.NW.string(eY.t.AtCukJ)],
                label: eY.NW.string(eY.t.AtCukJ),
                ariaLabel: eY.NW.string(eY.t.AtCukJ),
                element: Z.Z,
                predicate: () => D.Z.settingsVisible,
                icon: (0, r.jsx)('img', {
                    alt: '',
                    src: n(348621),
                    className: eX.poggermodeIcon
                })
            },
            [eG.s6.CHAT]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t['/VQax8'])],
                label: eY.NW.string(eY.t['/VQax8']),
                ariaLabel: eY.NW.string(eY.t['/VQax8']),
                element: eP.Z,
                url: eF.Z5c.SETTINGS('chat')
            },
            [eG.s6.CHAT_INLINE_MEDIA]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t.U68Dgo)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t.U47N1t)],
                parent: eG.s6.CHAT_INLINE_MEDIA
            },
            [eG.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t.VP11Nj)],
                parent: eG.s6.CHAT_INLINE_MEDIA
            },
            [eG.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t['5S2AKy'])],
                parent: eG.s6.CHAT_INLINE_MEDIA
            },
            [eG.s6.CHAT_EMBEDS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t.PWZOn5)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t.xX0ZTE)],
                parent: eG.s6.CHAT_EMBEDS
            },
            [eG.s6.CHAT_EMOJI]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t.sMOuub)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_EMOJI_REACTIONS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t.Iv24sr)],
                parent: eG.s6.CHAT_EMOJI
            },
            [eG.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t['79qal5'])],
                parent: eG.s6.CHAT_EMOJI
            },
            [eG.s6.CHAT_STICKERS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t['6NtAuL'])],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_STICKERS_SUGGESTIONS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t['479+PT'])],
                parent: eG.s6.CHAT_STICKERS
            },
            [eG.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t['29xPVV'])],
                parent: eG.s6.CHAT_STICKERS
            },
            [eG.s6.CHAT_SOUNDMOJI]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t.EHlAMT)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t['CtYr+f'])],
                parent: eG.s6.CHAT_SOUNDMOJI
            },
            [eG.s6.CHAT_TEXT_BOX]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t.afR0pK)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t.AqGrEB)],
                parent: eG.s6.CHAT_TEXT_BOX
            },
            [eG.s6.CHAT_THREADS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t.B2panJ)],
                parent: eG.s6.CHAT
            },
            [eG.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t.AInv5u)],
                parent: eG.s6.CHAT_THREADS
            },
            [eG.s6.CHAT_SPOILERS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.NW.string(eY.t.QgwmV1)],
                parent: eG.s6.CHAT
            },
            [eG.s6.NOTIFICATIONS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.HcoRu7)],
                label: eY.NW.string(eY.t.HcoRu7),
                ariaLabel: eY.NW.string(eY.t.HcoRu7),
                element: eS.Z,
                url: eF.Z5c.SETTINGS('notifications')
            },
            [eG.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t['/0WClp'])],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.VH8AIC)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.xSmFQE)],
                parent: eG.s6.NOTIFICATIONS,
                predicate: () => (0, J.isWindows)()
            },
            [eG.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.z21l8P)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: ['New Notification Settings (Advanced, Staff Only)'],
                parent: eG.s6.NOTIFICATIONS,
                predicate: () => !1
            },
            [eG.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: ['Restore most recent snapshot'],
                parent: eG.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eG.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: ['Launch Migration'],
                parent: eG.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eG.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: ['Toggle new system on/off'],
                parent: eG.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eG.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.TTvjd3)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.VpSKeH)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.D9yVAA)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.u6dc5O)],
                parent: eG.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eG.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.P8MG6u)],
                parent: eG.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eG.s6.NOTIFICATIONS_SOUNDS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.MKWyKS)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_EMAILS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.TPchzM)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t['B75+xc'])],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.sxn7lZ)],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.EkxXhY)],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.jNrkrK)],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.E8g1l5)],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.Ra9Pws)],
                parent: eG.s6.NOTIFICATIONS_EMAILS
            },
            [eG.s6.NOTIFICATIONS_REACTIONS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.NW.string(eY.t.Rq0NFh)],
                parent: eG.s6.NOTIFICATIONS
            },
            [eG.s6.KEYBINDS]: {
                section: eF.oAB.KEYBINDS,
                searchableTitles: [eY.NW.string(eY.t.T9DA2N)],
                label: eY.NW.string(eY.t.T9DA2N),
                element: eO.Z,
                url: eF.Z5c.SETTINGS('keybinds')
            },
            [eG.s6.LANGUAGE]: {
                section: eF.oAB.LOCALE,
                searchableTitles: [eY.NW.string(eY.t.IHMsPj)],
                label: eY.NW.string(eY.t.IHMsPj),
                element: eC.Z,
                url: eF.Z5c.SETTINGS('language')
            },
            [eG.s6.WINDOW_SETTINGS]: {
                section: eF.oAB.WINDOWS,
                searchableTitles: [eY.NW.string(eY.t.ZkDZoq)],
                label: eY.NW.string(eY.t.ZkDZoq),
                element: eZ.Z,
                predicate: () => J.isPlatformEmbedded && (0, J.isWindows)()
            },
            [eG.s6.LINUX_SETTINGS]: {
                section: eF.oAB.LINUX,
                searchableTitles: [eY.NW.string(eY.t['7pPjTU'])],
                label: eY.NW.string(eY.t['7pPjTU']),
                element: e0,
                predicate: () => J.isPlatformEmbedded && (0, J.isLinux)()
            },
            [eG.s6.STREAMER_MODE]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.NW.string(eY.t.S5GfOT)],
                label: eY.NW.string(eY.t.S5GfOT),
                ariaLabel: eY.NW.string(eY.t.S5GfOT),
                element: eA.Z,
                url: eF.Z5c.SETTINGS('streamer-mode')
            },
            [eG.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.NW.string(eY.t.bxGbHB)],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_ENABLE]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.NW.string(eY.t.p9ZAJS)],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.NW.string(eY.t.UpQziI)],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.NW.string(eY.t.q7WNGh)],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.NW.string(eY.t['1CWknJ'])],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.NW.string(eY.t.qmYiYW)],
                parent: eG.s6.STREAMER_MODE
            },
            [eG.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.NW.string(eY.t['iA81+f'])],
                parent: eG.s6.STREAMER_MODE,
                predicate: () => {
                    var e, t, n;
                    return null != (n = null === p.Z || void 0 === p.Z || null == (t = p.Z.window) || null == (e = t.supportsContentProtection) ? void 0 : e.call(t)) && n;
                }
            },
            [eG.s6.SETTINGS_ADVANCED]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.NW.string(eY.t['8/udY2'])],
                label: eY.NW.string(eY.t['8/udY2']),
                ariaLabel: eY.NW.string(eY.t['8/udY2']),
                element: ed.Z
            },
            [eG.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.NW.string(eY.t.ObIb1d)],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => q.wS
            },
            [eG.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.NW.string(eY.t['eOC/Fx'])],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => J.isPlatformEmbedded
            },
            [eG.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.NW.string(eY.t.fi3UQE)],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => te
            },
            [eG.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.NW.string(eY.t.erOqlp)],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => tn
            },
            [eG.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.NW.string(eY.t.qDZryM)],
                parent: eG.s6.SETTINGS_ADVANCED
            },
            [eG.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: ['CF WARP', 'CloudFlare WARP'],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => b.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable
            },
            [eG.s6.ACTIVITY_PRIVACY]: {
                section: eF.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eY.NW.string(eY.t.Cq98yM)],
                label: eY.NW.string(eY.t.Cq98yM),
                ariaLabel: eY.NW.string(eY.t.Cq98yM),
                element: ec.Z,
                predicate: () => !e1,
                url: eF.Z5c.SETTINGS('activity-privacy')
            },
            [eG.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: e1 ? eF.oAB.GAMES : eF.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eY.NW.string(eY.t['8ka8lp'])],
                parent: e1 ? eG.s6.GAMES_ACTIVITY_PRIVACY : eG.s6.ACTIVITY_PRIVACY
            },
            [eG.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: e1 ? eF.oAB.GAMES : eF.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eY.NW.string(eY.t.VOszPD)],
                parent: e1 ? eG.s6.GAMES_ACTIVITY_PRIVACY : eG.s6.ACTIVITY_PRIVACY
            },
            [eG.s6.ACTIVITY_PRIVACY_TOS]: {
                section: e1 ? eF.oAB.GAMES : eF.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eG.CF],
                parent: e1 ? eG.s6.GAMES_ACTIVITY_PRIVACY : eG.s6.ACTIVITY_PRIVACY
            },
            [eG.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eF.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eY.NW.string(eY.t['4F2KoK'])],
                parent: eG.s6.ACTIVITY_PRIVACY
            },
            [eG.s6.REGISTERED_GAMES]: {
                section: eF.oAB.REGISTERED_GAMES,
                searchableTitles: [eY.NW.string(eY.t.AVDyEh)],
                label: eY.NW.string(eY.t.AVDyEh),
                element: e_.Z,
                predicate: () => !e1 && (0, eW.Jw)()
            },
            [eG.s6.OVERLAY]: {
                section: eF.oAB.OVERLAY,
                searchableTitles: [eY.NW.string(eY.t['9cb1U1']), eY.NW.string(eY.t.HcoRu7)],
                label: eY.NW.string(eY.t['9cb1U1']),
                element: ev.Z,
                predicate: () => !e1 && U
            },
            [eG.s6.CHANGELOG]: {
                section: 'changelog',
                onClick: () => (0, N.Z)(!0),
                searchableTitles: [eY.NW.string(eY.t.LRmNAg)],
                label: eY.NW.string(eY.t.LRmNAg)
            },
            [eG.s6.MERCHANDISE]: {
                section: 'merchandise',
                onClick: () => {
                    let e = 'https://discordmerch.com/Dsktopprm';
                    K.default.track(eF.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, X.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                K.default.track(eF.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, h.Z)(e);
                            }
                        });
                },
                searchableTitles: [eY.NW.string(eY.t.sMEktb)],
                label: eY.NW.string(eY.t.sMEktb),
                ariaLabel: eY.NW.string(eY.t.sMEktb)
            },
            [eG.s6.HYPESQUAD]: {
                section: eF.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eY.NW.string(eY.t['k0R+4e'])],
                label: eY.NW.string(eY.t['k0R+4e']),
                element: eE.Z,
                predicate: () => !ts
            },
            [eG.s6.TOWNHALL]: {
                section: eF.oAB.TOWNHALL,
                searchableTitles: [eY.NW.string(eY.t.dnZNER)],
                label: eY.NW.string(eY.t.dnZNER),
                predicate: () => ts,
                onClick: () => {
                    (0, h.Z)('https://discord.gg/discord-townhall'), (0, d.xf)();
                }
            },
            [eG.s6.EXPERIMENTS]: {
                section: eF.oAB.EXPERIMENTS,
                searchableTitles: ['Experiments'],
                label: 'Experiments',
                element: ew.Z,
                predicate: () => F.Z.isDeveloper,
                url: eF.Z5c.SETTINGS('experiments')
            },
            [eG.s6.DEVELOPER_OPTIONS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: eN.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_FLAGS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Accessibility Auditing'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => !1
            },
            [eG.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['CSS Debugging'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && F.Z.isDeveloper && H.default.layoutDebuggingEnabled
            },
            [eG.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Disable App Collections Cache'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => e6 && F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => f.q && F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Prevent Popouts From Closing Automatically'],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.HOTSPOT_OPTIONS]: {
                section: eF.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: et.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eF.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: S.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.PAYMENT_FLOW_MODALS]: {
                section: eF.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: en.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.REVENUE_STORYBOOK]: {
                section: eF.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Revenue Storybook', 'Payment Components', 'Orb Components', 'Virtual Currency'],
                label: 'Revenue Storybook',
                element: eU.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eF.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ['Virtual Currency', 'Orb', 'Config'],
                label: 'Virtual Currency Config',
                element: eV.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.PAYMENT_COMPONENTS]: {
                section: eF.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Payment Components'],
                label: 'Payment Components',
                element: eU.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.ORB_COMPONENTS]: {
                section: eF.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Orb Components'],
                label: 'Orb Components',
                element: eU.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.TEXT_PLAYGROUND]: {
                section: eF.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: eR.Z,
                predicate: () => (0, ea.D)() || F.Z.isDeveloper
            },
            [eG.s6.DESIGN_SYSTEMS]: {
                section: eF.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: eb.Z,
                predicate: () => F.Z.isDeveloper,
                url: eF.Z5c.SETTINGS('design-systems')
            },
            [eG.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eF.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Colors'],
                label: 'Colors',
                element: eb.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.ANIMATION_TESTING]: {
                section: eF.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Animation Testing'],
                label: 'Animation Testing',
                element: eb.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eF.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Components'],
                label: 'Components',
                element: eb.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.TEXT_COMPONENTS]: {
                section: eF.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: es.Z,
                predicate: () => (0, ea.D)() || F.Z.isDeveloper
            },
            [eG.s6.INTL_TESTING]: {
                section: eF.oAB.INTL_TESTING,
                searchableTitles: ['Intl Testing', 'i18n'],
                label: 'Intl Testing',
                element: y.Z,
                predicate: () => e6 || F.Z.isDeveloper
            },
            [eG.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
                section: eF.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
                searchableTitles: ['PFX Editor'],
                label: 'PFX Editor',
                element: L.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.NAMEPLATES_PREVIEW_TOOL]: {
                section: eF.oAB.NAMEPLATES_PREVIEW_TOOL,
                searchableTitles: ['Nameplates Preview Tool'],
                label: 'Nameplates Preview Tool',
                element: P.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.QUEST_PREVIEW_TOOL]: {
                section: eF.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: M.Z,
                predicate: () => (0, B.X7)({ location: eH.dr.QUEST_PREVIEW_TOOL })
            },
            [eG.s6.WEB_SETTING_TREE_TOOL]: {
                section: eF.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ['Web Setting Tree Tool'],
                label: 'Web Setting Tree Tool',
                element: ek.Z,
                predicate: () => F.Z.isDeveloper
            },
            [eG.s6.LOGOUT]: {
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
                                    header: eY.NW.string(eY.t['2jxGen']),
                                    confirmText: eY.NW.string(eY.t['2jxGen']),
                                    cancelText: eY.NW.string(eY.t['ETE/oK']),
                                    onCancel: e.onClose,
                                    onConfirm: () => c.Z.logout()
                                },
                                e
                            )),
                            (n = n =
                                {
                                    children: (0, r.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        children: eY.NW.string(eY.t.SUnWBA)
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
                label: eY.NW.string(eY.t['2jxGen']),
                ariaLabel: eY.NW.string(eY.t['2jxGen']),
                icon: (0, r.jsx)(l.PBZ, {
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
                element: ee.Z
            }
        });
    };
