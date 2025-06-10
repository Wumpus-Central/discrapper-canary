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
    m = n(230711),
    g = n(493544),
    p = n(579806),
    h = n(782568),
    f = n(758182),
    b = n(49226),
    _ = n(163379),
    x = n(498646),
    E = n(489968),
    C = n(803038),
    j = n(703288),
    O = n(574755),
    S = n(994714),
    v = n(377171),
    T = n(540059),
    I = n(621628),
    N = n(243778),
    y = n(890022),
    A = n(18438),
    P = n(778825),
    R = n(665166),
    D = n(442933),
    Z = n(158947),
    w = n(351780),
    k = n(231765),
    L = n(813732),
    B = n(398140),
    M = n(564344),
    U = n(977156),
    V = n(14676),
    G = n(652380),
    F = n(373230),
    H = n(145158),
    z = n(906467),
    Y = n(857192),
    W = n(131951),
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
    em = n(501348),
    eg = n(795594),
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
    eY = n(583139),
    eW = n(981631),
    eK = n(46140),
    eq = n(65154),
    eX = n(388032),
    eQ = n(603571),
    eJ = n(916723),
    e$ = n(539452);
let e0 = () => {
        let e = [s.z.CLIENT_THEMES_SETTINGS_BADGE, s.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
        return C.M.getCurrentConfig({ location: 'getAppearanceDCs' }).enabled && e.push(s.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE), e;
    },
    e1 = () => {
        let e = e0(),
            [t] = (0, N.US)(e);
        return t === s.z.CLIENT_THEMES_SETTINGS_BADGE || t === s.z.DEKSTOP_CUSTOM_APP_ICON_BADGE ? (0, i.jsx)(a.lBU, { text: eX.intl.string(eX.t.y2b7CA) }) : t === s.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ? (0, i.jsx)(a.IGR, { text: eX.intl.string(eX.t.y2b7CA) }) : null;
    },
    e3 = () => {
        let e = [];
        return F.c.getCurrentConfig({ location: 'SettingsRendererConfig' }).enabled && e.push(s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE), D.e.getCurrentConfig({ location: 'SettingsRendererConfig' }).canPurchase && e.push(s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE), e;
    },
    e8 = () => {
        let e = e3(),
            [t] = (0, N.US)(e);
        return t === s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE ? (0, i.jsx)(Z.Z, {}) : t === s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE ? (0, i.jsx)(a.IGR, { text: eX.intl.string(eX.t.y2b7CA) }) : null;
    },
    e6 = ew.Z,
    e2 = (e) => {
        let { unseenGiftCount: t, showPrepaidPaymentPastDueWarning: C, impressionSource: N, numOfPendingFamilyRequests: D, isOverlaySupported: Z, isClipsBetaTagShowing: F = !1, shouldMergeGameSettings: e2, isKeywordFilteringEnabled: e5, isStaff: e4, isInappropriateConversationWarningEnabled: e7, isInapproprateConversationsDefaultOn: e9, paymentsBlocked: te, isEligibleForQuests: tt, isStricterMessageRequestsEnabled: tn, hasLibraryApplication: ti, hasTOTPEnabled: tr, developerMode: ts, isAdultUser: tl, hasSecureFramesVerifiedUserIds: ta, hypeSquadRemoved: to, hasIgnoredUsers: tc, hasBlockedUsers: td, useRefreshedVoiceAndVideo: tu, isEligibleForSensitiveContentDefaults: tm, inputMode: tg, activeInputProfile: tp, isInputProfileCustom: th, isActivitySharingExperimentEnabled: tf, isGoreContentFilteringEnabled: tb } = e;
        return Object.freeze({
            [ez.s6.SEARCH_NO_RESULTS]: {
                section: g.ID.CUSTOM,
                element: ey.Z
            },
            [ez.s6.ACCOUNT_SECURITY_TAB]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eX.intl.string(eX.t.Am9YHh)],
                label: eX.intl.string(eX.t.Am9YHh)
            },
            [ez.s6.ACCOUNT]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eX.intl.string(eX.t['JAIM/v'])],
                label: eX.intl.string(eX.t['JAIM/v']),
                ariaLabel: eX.intl.string(eX.t['JAIM/v']),
                element: ec.Z,
                url: eW.Z5c.SETTINGS('account')
            },
            [ez.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eX.intl.string(eX.t.LYju5O)],
                parent: ez.s6.ACCOUNT,
                section: eW.oAB.ACCOUNT
            },
            [ez.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eX.intl.string(eX.t['9AjdkJ'])],
                section: eW.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_PROFILE
            },
            [ez.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eX.intl.string(eX.t.Ulqq6O)],
                section: eW.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_PROFILE
            },
            [ez.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [eX.intl.string(eX.t['/52UY2']), eX.intl.string(eX.t.sK0dmJ), eX.intl.string(eX.t.XxRj7e), eX.intl.string(eX.t.yNGjyM), eX.intl.string(eX.t.KPGVWl)],
                section: eW.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_PROFILE,
                predicate: () => tm
            },
            [ez.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eX.intl.string(eX.t['+JkHPz'])],
                section: eW.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_PROFILE
            },
            [ez.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eX.intl.string(eX.t.oP5zGB)],
                section: eW.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_PROFILE
            },
            [ez.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eX.intl.string(eX.t.pKSjEh)],
                section: eW.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT
            },
            [ez.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eX.intl.string(eX.t['FRep5+'])],
                section: eW.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [ez.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eX.intl.string(eX.t['7qKDrK'])],
                section: eW.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [ez.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eX.intl.string(eX.t.m0FidH)],
                section: eW.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [ez.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eX.intl.string(eX.t.cDgKtb)],
                section: eW.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !tr
            },
            [ez.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eX.intl.string(eX.t['D+aE7u'])],
                section: eW.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => tr
            },
            [ez.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eX.intl.string(eX.t.fZSi1N)],
                section: eW.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [ez.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eX.intl.string(eX.t.uHAJ5u)],
                section: eW.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [ez.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eX.intl.string(eX.t.vrOCCg)],
                section: eW.oAB.ACCOUNT,
                parent: ez.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [ez.s6.ACCOUNT_REMOVAL]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eX.intl.string(eX.t.ZKsIkp)],
                parent: ez.s6.ACCOUNT
            },
            [ez.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eX.intl.string(eX.t.jf5GGR)],
                parent: ez.s6.ACCOUNT_REMOVAL
            },
            [ez.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eX.intl.string(eX.t['8lQ2ra'])],
                parent: ez.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [ez.s6.GAMES]: {
                section: eW.oAB.GAMES,
                searchableTitles: [eX.intl.string(eX.t.URyqtL)],
                label: eX.intl.string(eX.t.URyqtL),
                ariaLabel: eX.intl.string(eX.t.URyqtL),
                element: eM.Z,
                predicate: () => e2
            },
            [ez.s6.GAMES_MY_GAMES]: {
                section: eW.oAB.GAMES,
                searchableTitles: [eX.intl.string(eX.t['5DMgp6'])],
                parent: ez.s6.GAMES
            },
            [ez.s6.GAMES_CLIPS]: {
                section: eW.oAB.GAMES,
                searchableTitles: [eX.intl.string(eX.t.z2jK6e)],
                parent: ez.s6.GAMES
            },
            [ez.s6.GAMES_OVERLAY]: {
                section: eW.oAB.GAMES,
                searchableTitles: [eX.intl.string(eX.t['9cb1U1'])],
                parent: ez.s6.GAMES
            },
            [ez.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eW.oAB.GAMES,
                searchableTitles: [eX.intl.string(eX.t.Cq98yM)],
                parent: ez.s6.GAMES
            },
            [ez.s6.PROFILE_CUSTOMIZATION]: {
                section: eW.oAB.PROFILE_CUSTOMIZATION,
                type: g.bT.WIDE,
                searchableTitles: [eX.intl.string(eX.t['vi7f+v'])],
                label: eX.intl.string(eX.t['vi7f+v']),
                ariaLabel: eX.intl.string(eX.t['vi7f+v']),
                element: M.Z,
                newIndicator: (0, i.jsx)(e8, {}),
                newIndicatorDismissibleContentTypes: [...e3()],
                notice: {
                    stores: [K.Z, P.Z],
                    element: B.Z
                },
                onSettingsClose: () => {
                    o.Z.wait(() => {
                        (0, A.It)(), (0, u.P6)(), m.Z.clearSubsection(eW.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eW.Z5c.SETTINGS('profile-customization')
            },
            [ez.s6.PROFILE_DISPLAY_NAME]: {
                section: eW.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eX.intl.string(eX.t['9AjdkJ'])],
                parent: ez.s6.PROFILE_CUSTOMIZATION
            },
            [ez.s6.PROFILE_USER_PROFILE]: {
                section: eW.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eX.intl.string(eX.t['2p07FR']), eX.intl.string(eX.t['7vhiqq'])],
                parent: ez.s6.PROFILE_CUSTOMIZATION
            },
            [ez.s6.PROFILE_SERVER_PROFILES]: {
                section: eW.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eX.intl.string(eX.t.kPHroa)],
                parent: ez.s6.PROFILE_CUSTOMIZATION
            },
            [ez.s6.CONTENT_SOCIAL]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                label: eX.intl.string(eX.t['+o1pDQ']),
                searchableTitles: [eX.intl.string(eX.t['+o1pDQ'])],
                ariaLabel: eX.intl.string(eX.t['+o1pDQ']),
                element: ef.Z,
                url: eW.Z5c.SETTINGS('content-and-social')
            },
            [ez.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['+o1pDQ']), eX.intl.string(eX.t['/7xJCA'])],
                parent: ez.s6.CONTENT_SOCIAL
            },
            [ez.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['+o1pDQ']), eX.intl.string(eX.t['/7xJCA'])],
                parent: ez.s6.CONTENT_SOCIAL_DISCORD_TAB
            },
            [ez.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.h1hqj4)],
                parent: ez.s6.CONTENT_SOCIAL
            },
            [ez.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                label: eX.intl.string(eX.t.h1hqj4),
                searchableTitles: [eX.intl.string(eX.t.h1hqj4)],
                ariaLabel: eX.intl.string(eX.t.h1hqj4),
                parent: ez.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eW.Z5c.SETTINGS(eW.oAB.CONTENT_AND_SOCIAL, eY.C)
            },
            [ez.s6.DATA_PRIVACY]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                label: eX.intl.string(eX.t.OAuOHB),
                searchableTitles: [eX.intl.string(eX.t.OAuOHB)],
                ariaLabel: eX.intl.string(eX.t.OAuOHB),
                element: eb.Z,
                url: eW.Z5c.SETTINGS('data-and-privacy')
            },
            [ez.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eX.intl.string(eX.t['Vov/9v'])],
                parent: ez.s6.ACCOUNT
            },
            [ez.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.WWaFn5)],
                parent: ez.s6.DATA_PRIVACY,
                predicate: () => (0, J.isDesktop)()
            },
            [ez.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t['opi/XF'])],
                parent: ez.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY
            },
            [ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.xVRG4O)],
                parent: ez.s6.CONTENT_SOCIAL_DISCORD
            },
            [ez.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.fyA119)],
                parent: ez.s6.CONTENT_SOCIAL_DISCORD
            },
            [ez.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.fyA119)],
                parent: ez.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY
            },
            [ez.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['/U8Iwc'])],
                parent: ez.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            },
            [ez.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['ms+TmZ'])],
                parent: ez.s6.CONTENT_SOCIAL_CONNECTED_GAMES
            },
            [ez.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['y62Z/f'])],
                parent: ez.s6.CONTENT_SOCIAL
            },
            [ez.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.SRZyHh)],
                parent: ez.s6.DATA_PRIVACY
            },
            [ez.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.uEz8JC), eX.intl.string(eX.t['N/oRIy']), eX.intl.string(eX.t.QVdYsL), eX.intl.string(eX.t['aWD+tr']), eX.intl.string(eX.t['5mnTa2'])],
                parent: ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ez.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['Hj/Bur']), eX.intl.string(eX.t['N/oRIy']), eX.intl.string(eX.t.QVdYsL), eX.intl.string(eX.t['aWD+tr']), eX.intl.string(eX.t['5mnTa2']), eX.intl.string(eX.t.K0OWPz)],
                parent: ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => tb
            },
            [ez.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['Hj/Bur']), eX.intl.string(eX.t['N/oRIy']), eX.intl.string(eX.t.QVdYsL), eX.intl.string(eX.t['aWD+tr']), eX.intl.string(eX.t['5mnTa2'])],
                parent: ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => tb
            },
            [ez.s6.GORE_MEDIA_REDACTION]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['Hj/Bur']), eX.intl.string(eX.t['N/oRIy']), eX.intl.string(eX.t.QVdYsL), eX.intl.string(eX.t['aWD+tr']), eX.intl.string(eX.t.K0OWPz)],
                parent: ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => tb
            },
            [ez.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.JzaP4u), eX.intl.string(eX.t.H9XOl5), eX.intl.string(eX.t.k4W40N)],
                parent: ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ez.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['L+yTsb'])],
                parent: ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ez.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.XahVjo)],
                parent: ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ez.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                parent: ez.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY
            },
            [ez.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.RAQUSE), eX.intl.string(eX.t.wbYDfX)],
                parent: ez.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [ez.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['3o2ojo'])],
                parent: ez.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !tn
            },
            [ez.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.OLwZDQ)],
                parent: ez.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [ez.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.wBkwu7)],
                parent: ez.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [ez.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.XuADY2)],
                parent: ez.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ez.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.MNKzys)],
                parent: ez.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ez.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.VkS7YW)],
                parent: ez.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ez.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.CF],
                parent: ez.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ez.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.dmBSKi)],
                parent: ez.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY
            },
            [ez.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t['1UaUy8']), eX.intl.string(eX.t['xIk/iI'])],
                parent: ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e5
            },
            [ez.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eX.intl.string(eX.t.qFsx5u)],
                parent: ez.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e7 && !tl && !e9
            },
            [ez.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t['5b3FND'])],
                parent: ez.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => ta
            },
            [ez.s6.PRIVACY_FAMILY_CENTER]: {
                section: eW.oAB.FAMILY_CENTER,
                searchableTitles: [eX.intl.string(eJ.default.gntCQU)],
                label: eX.intl.string(eJ.default.gntCQU),
                ariaLabel: eX.intl.string(eJ.default.gntCQU),
                element: eE.Z,
                badgeCount: D,
                newIndicator: (0, i.jsx)(a.IGR, {
                    text: eX.intl.string(eX.t.y2b7CA),
                    color: v.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [s.z.FAMILY_CENTER_NEW_BADGE],
                url: eW.Z5c.SETTINGS('family-center')
            },
            [ez.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.BG7Qsb)],
                parent: ez.s6.DATA_PRIVACY
            },
            [ez.s6.AUTHORIZED_APPS]: {
                section: eW.oAB.AUTHORIZED_APPS,
                searchableTitles: [eX.intl.string(eX.t['f6kk+v'])],
                label: eX.intl.string(eX.t['f6kk+v']),
                element: eg.Z,
                url: eW.Z5c.SETTINGS('authorized-apps')
            },
            [ez.s6.SESSIONS]: {
                section: eW.oAB.SESSIONS,
                searchableTitles: [eX.intl.string(eX.t['+1h0k5'])],
                label: eX.intl.string(eX.t['+1h0k5']),
                ariaLabel: eX.intl.string(eX.t['+1h0k5']),
                element: eA.Z,
                newIndicatorDismissibleContentTypes: [s.z.AUTH_SESSIONS_NEW],
                impressionName: r.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: N }
            },
            [ez.s6.CONNECTIONS]: {
                section: eW.oAB.CONNECTIONS,
                searchableTitles: [eX.intl.string(eX.t['3fe7U1'])],
                label: eX.intl.string(eX.t['3fe7U1']),
                ariaLabel: eX.intl.string(eX.t['3fe7U1']),
                element: eh.Z,
                impressionName: r.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: N },
                newIndicatorDismissibleContentTypes: [s.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eW.Z5c.SETTINGS('connections')
            },
            [ez.s6.THIRD_PARTY_ACCESS]: {
                section: eW.oAB.CONNECTIONS,
                searchableTitles: [eX.intl.string(eX.t['Ig/XFR']), eX.intl.string(eX.t['3fe7U1']), eX.intl.string(eX.t['f6kk+v'])],
                label: eX.intl.string(eX.t['Ig/XFR']),
                parent: ez.s6.CONNECTIONS,
                element: eZ.Z
            },
            [ez.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eW.oAB.CONNECTIONS,
                searchableTitles: [eX.intl.string(eX.t['+/hZMz'])],
                parent: ez.s6.CONNECTIONS,
                element: eh.Z
            },
            [ez.s6.CLIPS]: {
                section: eW.oAB.CLIPS,
                searchableTitles: [eX.intl.string(eX.t.z2jK6e)],
                label: eX.intl.string(eX.t.z2jK6e),
                ariaLabel: eX.intl.string(eX.t.z2jK6e),
                icon: F ? (0, i.jsx)(j.Z, {}) : void 0,
                element: O.Z,
                predicate: () => !e2,
                url: eW.Z5c.SETTINGS('clips')
            },
            [ez.s6.RESTRICTED_USERS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                parent: ez.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eX.intl.string(eX.t['3wRorq']),
                element: eU.ZP,
                predicate: () => tc || td
            },
            [ez.s6.BLOCKED_USERS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                parent: ez.s6.RESTRICTED_USERS,
                label: eX.intl.string(eX.t.PFOUKS),
                searchableTitles: [eX.intl.string(eX.t.PFOUKS)],
                element: eU.GF,
                predicate: () => td
            },
            [ez.s6.IGNORED_USERS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                parent: ez.s6.RESTRICTED_USERS,
                searchableTitles: [eX.intl.string(eX.t['93ZDWF'])],
                label: eX.intl.string(eX.t['93ZDWF']),
                element: eU.yo,
                predicate: () => tc
            },
            [ez.s6.PREMIUM]: {
                section: eW.oAB.PREMIUM,
                ariaLabel: eX.intl.string(eX.t.Ipxkoq),
                searchableTitles: [eX.intl.string(eX.t.Ipxkoq)],
                label: eX.intl.string(eX.t.Ipxkoq),
                element: es.Z,
                className: e$.premiumTab
            },
            [ez.s6.GUILD_BOOSTING]: {
                section: eW.oAB.GUILD_BOOSTING,
                searchableTitles: [eX.intl.string(eX.t['+CbP2t'])],
                label: eX.intl.string(eX.t['+CbP2t']),
                element: eN.Z
            },
            [ez.s6.SUBSCRIPTIONS]: {
                section: eW.oAB.SUBSCRIPTIONS,
                ariaLabel: eX.intl.string(eX.t.trSpHR),
                searchableTitles: [eX.intl.string(eX.t.trSpHR)],
                label: eX.intl.string(eX.t.trSpHR),
                element: L.Z,
                icon: C
                    ? (0, i.jsx)(a.P4T, {
                          size: 'xs',
                          color: l.Z.unsafe_rawColors.YELLOW_300.css
                      })
                    : null
            },
            [ez.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eW.oAB.SUBSCRIPTIONS,
                searchableTitles: [eX.intl.string(eX.t['2GKrvr'])],
                parent: ez.s6.SUBSCRIPTIONS
            },
            [ez.s6.GIFT_INVENTORY]: {
                section: eW.oAB.INVENTORY,
                searchableTitles: [eX.intl.string(eX.t['jcSP+v'])],
                label: eX.intl.string(eX.t['jcSP+v']),
                element: eO.Z,
                ariaLabel: eX.intl.string(eX.t['jcSP+v']),
                badgeCount: t
            },
            [ez.s6.GIFT_CODE_REDEMPTION]: {
                section: eW.oAB.INVENTORY,
                searchableTitles: [eX.intl.string(eX.t['il+VCg'])],
                parent: ez.s6.GIFT_INVENTORY,
                predicate: () => !te
            },
            [ez.s6.GIFT_INVENTORY_QUESTS]: {
                section: eW.oAB.INVENTORY,
                searchableTitles: [eX.intl.string(eX.t.JALI2N)],
                parent: ez.s6.GIFT_INVENTORY,
                predicate: () => tt
            },
            [ez.s6.GIFT_INVENTORY_LIST]: {
                section: eW.oAB.INVENTORY,
                searchableTitles: [eX.intl.string(eX.t['9KeUbW'])],
                parent: ez.s6.GIFT_INVENTORY,
                predicate: () => !te
            },
            [ez.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eW.oAB.INVENTORY,
                searchableTitles: [eX.intl.string(eX.t.vwMEHR)],
                parent: ez.s6.GIFT_INVENTORY,
                predicate: () => te
            },
            [ez.s6.BILLING]: {
                section: eW.oAB.BILLING,
                searchableTitles: [eX.intl.string(eX.t.oeUm2t)],
                label: eX.intl.string(eX.t.oeUm2t),
                ariaLabel: eX.intl.string(eX.t.oeUm2t),
                element: ep.Z
            },
            [ez.s6.BILLING_PAYMENT_METHODS]: {
                section: eW.oAB.BILLING,
                searchableTitles: [eX.intl.string(eX.t.W26xGR)],
                parent: ez.s6.BILLING
            },
            [ez.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eW.oAB.BILLING,
                searchableTitles: [eX.intl.string(eX.t.obLrcH)],
                parent: ez.s6.BILLING
            },
            [ez.s6.APPEARANCE]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eX.intl.string(eX.t['iHH+k5'])],
                label: eX.intl.string(eX.t['iHH+k5']),
                ariaLabel: eX.intl.string(eX.t['iHH+k5']),
                element: em.Z,
                newIndicator: (0, i.jsx)(e1, {}),
                newIndicatorDismissibleContentTypes: e0(),
                url: eW.Z5c.SETTINGS('appearance')
            },
            [ez.s6.APPEARANCE_THEME]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eX.intl.string(eX.t.Ksh3io)],
                parent: ez.s6.APPEARANCE
            },
            [ez.s6.APPEARANCE_COLOR]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eX.intl.string(eX.t.OCOOiI)],
                parent: ez.s6.APPEARANCE_THEME
            },
            [ez.s6.APPEARANCE_ICON]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eX.intl.string(eX.t.RPh2oq)],
                parent: ez.s6.APPEARANCE_THEME
            },
            [ez.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eX.intl.string(eX.t.ZEoGMT)],
                parent: ez.s6.APPEARANCE
            },
            [ez.s6.APPEARANCE_LIST_SPACING]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: ['List Spacing'],
                parent: ez.s6.APPEARANCE,
                newIndicator: (0, i.jsx)(a.IGR, {
                    text: eX.intl.string(eX.t.y2b7CA),
                    color: v.Z.BG_BRAND
                }),
                predicate: () => (0, T.i9)('SettingsRendererConfig')
            },
            [ez.s6.APPEARANCE_SCALING_SPACING]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eX.intl.string(eX.t.qPOqoK)],
                parent: ez.s6.APPEARANCE
            },
            [ez.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eX.intl.string(eX.t.dyamEB), eX.intl.string(eX.t.p8NOws), eX.intl.string(eX.t['+o/sOj'])],
                parent: ez.s6.APPEARANCE,
                predicate: () => H.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable24HourPref
            },
            [ez.s6.ACCESSIBILITY]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.G0neg4)],
                label: eX.intl.string(eX.t.G0neg4),
                ariaLabel: eX.intl.string(eX.t.G0neg4),
                element: eo.Z,
                url: eW.Z5c.SETTINGS('accessibility')
            },
            [ez.s6.ACCESSIBILITY_SATURATION]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t['5PWWCQ'])],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.bQCodH)],
                parent: ez.s6.ACCESSIBILITY_SATURATION
            },
            [ez.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.OLZFBw)],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.uSOPWl)],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.BT8Bmp)],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t['sSY+mJ'])],
                parent: ez.s6.ACCESSIBILITY_PROFILE_COLORS
            },
            [ez.s6.ACCESSIBILITY_CONTRAST]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.TYyfOz)],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.cguieX)],
                parent: ez.s6.ACCESSIBILITY_CONTRAST
            },
            [ez.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.e3TR1d)],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.b3XBzs)],
                parent: ez.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [ez.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.Iayoh4)],
                parent: ez.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [ez.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.iIaOlZ)],
                parent: ez.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [ez.s6.ACCESSIBILITY_STICKERS]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t['6NtAuL'])],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_MESSAGES]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.onqU6u)],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t['3Fztn5'])],
                parent: ez.s6.ACCESSIBILITY_MESSAGES
            },
            [ez.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.TZ2hZG)],
                parent: ez.s6.ACCESSIBILITY_MESSAGES
            },
            [ez.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.VpSKeH)],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.qvTIwc)],
                parent: ez.s6.ACCESSIBILITY_TEXT_TO_SPEECH
            },
            [ez.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eX.intl.string(eX.t.lsW5Eh)],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [ez.CF],
                parent: ez.s6.ACCESSIBILITY
            },
            [ez.s6.VOICE_AND_VIDEO]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.B1fFpa)],
                label: eX.intl.string(eX.t.B1fFpa),
                ariaLabel: eX.intl.string(eX.t.B1fFpa),
                element: eV.Z,
                predicate: () => W.Z.isSupported(),
                url: eW.Z5c.SETTINGS('voice')
            },
            [ez.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.K3lovL), eX.intl.string(eX.t.NiTd0d)],
                parent: ez.s6.VOICE_AND_VIDEO,
                predicate: () => tu
            },
            [ez.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.FlNoSU)],
                parent: ez.s6.VOICE_AND_VIDEO,
                predicate: () => tu
            },
            [ez.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.ABjMWF)],
                parent: ez.s6.VOICE_AND_VIDEO,
                predicate: () => tu
            },
            [ez.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.OFpL3d)],
                parent: ez.s6.VOICE_AND_VIDEO,
                predicate: () => tu
            },
            [ez.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.KDdjoq), eX.intl.string(eX.t.FeUKeH)],
                parent: ez.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tu
            },
            [ez.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.K3lovL), eX.intl.string(eX.t.NiTd0d)],
                parent: tu ? ez.s6.VOICE_AND_VIDEO_VOICE_TAB : ez.s6.VOICE_AND_VIDEO
            },
            [ez.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.hHMYbW), eX.intl.string(eX.t.dl18zc), eX.intl.string(eX.t.nuFtHB), eX.intl.string(eX.t['3182VF']), eX.intl.string(eX.t['DGq/PT'])],
                parent: ez.s6.VOICE_AND_VIDEO_VOICE
            },
            [ez.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.OX2Bnp), eX.intl.string(eX.t.eATD2N), eX.intl.string(eX.t.nuFtHB), eX.intl.string(eX.t['3182VF']), eX.intl.string(eX.t['DGq/PT'])],
                parent: ez.s6.VOICE_AND_VIDEO_VOICE
            },
            [ez.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.gyljWF), eX.intl.string(eX.t.nuFtHB)],
                parent: ez.s6.VOICE_AND_VIDEO_VOICE
            },
            [ez.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eW.oAB.VOICE,
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
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['pS+K2N']), eX.intl.string(eX.t.nuFtHB)],
                parent: ez.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tp !== eH._.STUDIO
            },
            [ez.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['sqUm+v']), eX.intl.string(eX.t.nuFtHB)],
                parent: ez.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tg === eq.pM.VOICE_ACTIVITY && th
            },
            [ez.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.e7LIiY)],
                parent: tu ? ez.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : ez.s6.VOICE_AND_VIDEO
            },
            [ez.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.nzUc3N)],
                parent: tu ? ez.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB : ez.s6.VOICE_AND_VIDEO
            },
            [ez.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.ABjMWF)],
                parent: ez.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [ez.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.nzUc3N)],
                parent: ez.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [ez.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.LKzQSE)],
                parent: tu ? ez.s6.VOICE_AND_VIDEO_VIDEO_TAB : ez.s6.VOICE_AND_VIDEO
            },
            [ez.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.F122Gx)],
                parent: ez.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => W.Z.supports(eq.AN.VIDEO)
            },
            [ez.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['3Ppr1t'])],
                parent: ez.s6.VOICE_AND_VIDEO_VIDEO_CAMERA
            },
            [ez.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.lZTUPj)],
                parent: ez.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => W.Z.supports(eq.AN.VIDEO)
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['8/udY2'])],
                parent: ez.s6.VOICE_AND_VIDEO
            },
            [ez.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['8/udY2'])],
                parent: ez.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tu
            },
            [ez.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['8/udY2'])],
                parent: ez.s6.VOICE_AND_VIDEO_VOICE_TAB,
                predicate: () => tu
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.DSGme3)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => !tu
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.Tceiq6)],
                parent: tu ? ez.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED : ez.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['71Ve19'])],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => W.Z.supports(eq.AN.OPEN_H264)
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.Sln58f)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.AxnPm5)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== $.ZP.releaseChannel && W.Z.isExperimentalEncodersSupported()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['6I6GUl'])],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => th
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.iWTwu7)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['/jwMtr'])],
                parent: tu ? ez.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [ez.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.OBwCXF)],
                parent: tu ? ez.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.t8QhiY), eX.intl.string(eX.t.hmfkCg)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => W.Z.isNoiseSuppressionSupported()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.BbESsr)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => W.Z.isAdvancedVoiceActivitySupported()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.cUMdHx)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => W.Z.isAutomaticGainControlSupported()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.DFPXIC)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => W.Z.showBypassSystemInputProcessing()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.uancuL)],
                parent: tu ? ez.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : ez.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => W.Z.supports(eq.AN.QOS)
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.oSdBvb)],
                parent: tu ? ez.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : ez.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => W.Z.supports(eq.AN.ATTENUATION)
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.wVBHr6)],
                parent: tu ? ez.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : ez.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => W.Z.shouldOfferManualSubsystemSelection()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.KDdjoq), eX.intl.string(eX.t.NMCIf3), eX.intl.string(eX.t.FeUKeH)],
                parent: tu ? ez.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : ez.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => W.Z.supportsVideoHook() || W.Z.supportsExperimentalSoundshare() || (W.Z.supportsSystemScreensharePicker() && (0, J.isMac)())
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.GmWk2N), eX.intl.string(eX.t['Fj/xn5'])],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => W.Z.supportsVideoHook()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['4I0qzc'])],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => W.Z.supportsExperimentalSoundshare()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.ie1mgY)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => W.Z.supportsSystemScreensharePicker() && (0, J.isMac)()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['aP1N/v'])],
                parent: tu ? ez.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : ez.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => J.isPlatformEmbedded
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.OFpL3d)],
                parent: tu ? ez.s6.VOICE_AND_VIDEO_DEBUG_TAB : ez.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['0CEP6e'])],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ee.Sb.getSetting()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['r6K+TE'])],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => W.Z.isAecDumpSupported()
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t.U4FgFB)],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === $.ZP.releaseChannel || 'development' === $.ZP.releaseChannel) && e4 && W.Z.supports(eq.AN.CONNECTION_REPLAY)
            },
            [ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['726JHB'])],
                parent: ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => J.isPlatformEmbedded && W.Z.supports(eq.AN.DEBUG_LOGGING) && null != p.Z.fileManager.readLogFiles
            },
            [ez.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eX.intl.string(eX.t['/RXu6+'])],
                parent: tu ? ez.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING : ez.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [ez.s6.CLICKER_GAME]: {
                url: eW.Z5c.SETTINGS('clicker-game'),
                section: eW.oAB.CLICKER_GAME,
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
                section: eW.oAB.POGGERMODE,
                searchableTitles: [eX.intl.string(eX.t.AtCukJ)],
                label: eX.intl.string(eX.t.AtCukJ),
                ariaLabel: eX.intl.string(eX.t.AtCukJ),
                element: k.Z,
                predicate: () => w.Z.settingsVisible,
                icon: (0, i.jsx)('img', {
                    alt: '',
                    src: n(348621),
                    className: e$.poggermodeIcon
                })
            },
            [ez.s6.CHAT]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t['/VQax8'])],
                label: eX.intl.string(eX.t['/VQax8']),
                ariaLabel: eX.intl.string(eX.t['/VQax8']),
                element: eR.Z,
                url: eW.Z5c.SETTINGS('chat')
            },
            [ez.s6.CHAT_INLINE_MEDIA]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.U68Dgo)],
                parent: ez.s6.CHAT
            },
            [ez.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.U47N1t)],
                parent: ez.s6.CHAT_INLINE_MEDIA
            },
            [ez.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.VP11Nj)],
                parent: ez.s6.CHAT_INLINE_MEDIA
            },
            [ez.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t['5S2AKy'])],
                parent: ez.s6.CHAT_INLINE_MEDIA
            },
            [ez.s6.CHAT_EMBEDS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.PWZOn5)],
                parent: ez.s6.CHAT
            },
            [ez.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.xX0ZTE)],
                parent: ez.s6.CHAT_EMBEDS
            },
            [ez.s6.CHAT_EMOJI]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.sMOuub)],
                parent: ez.s6.CHAT
            },
            [ez.s6.CHAT_EMOJI_REACTIONS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.Iv24sr)],
                parent: ez.s6.CHAT_EMOJI
            },
            [ez.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t['79qal5'])],
                parent: ez.s6.CHAT_EMOJI
            },
            [ez.s6.CHAT_STICKERS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t['6NtAuL'])],
                parent: ez.s6.CHAT
            },
            [ez.s6.CHAT_STICKERS_SUGGESTIONS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t['479+PT'])],
                parent: ez.s6.CHAT_STICKERS
            },
            [ez.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t['29xPVV'])],
                parent: ez.s6.CHAT_STICKERS
            },
            [ez.s6.CHAT_SOUNDMOJI]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.EHlAMT)],
                parent: ez.s6.CHAT
            },
            [ez.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t['CtYr+f'])],
                parent: ez.s6.CHAT_SOUNDMOJI
            },
            [ez.s6.CHAT_TEXT_BOX]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.afR0pK)],
                parent: ez.s6.CHAT
            },
            [ez.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.AqGrEB)],
                parent: ez.s6.CHAT_TEXT_BOX
            },
            [ez.s6.CHAT_THREADS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.B2panJ)],
                parent: ez.s6.CHAT
            },
            [ez.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.AInv5u)],
                parent: ez.s6.CHAT_THREADS
            },
            [ez.s6.CHAT_SPOILERS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eX.intl.string(eX.t.QgwmV1)],
                parent: ez.s6.CHAT
            },
            [ez.s6.NOTIFICATIONS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.HcoRu7)],
                label: eX.intl.string(eX.t.HcoRu7),
                ariaLabel: eX.intl.string(eX.t.HcoRu7),
                element: eT.Z,
                url: eW.Z5c.SETTINGS('notifications')
            },
            [ez.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t['/0WClp'])],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.VH8AIC)],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.xSmFQE)],
                parent: ez.s6.NOTIFICATIONS,
                predicate: () => (0, J.isWindows)()
            },
            [ez.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.z21l8P)],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: ['New Notification Settings (Advanced, Staff Only)'],
                parent: ez.s6.NOTIFICATIONS,
                predicate: () => !1
            },
            [ez.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: ['Restore most recent snapshot'],
                parent: ez.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [ez.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: ['Launch Migration'],
                parent: ez.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [ez.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: ['Toggle new system on/off'],
                parent: ez.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [ez.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.TTvjd3)],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.VpSKeH)],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.D9yVAA)],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.u6dc5O)],
                parent: ez.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [ez.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.P8MG6u)],
                parent: ez.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [ez.s6.NOTIFICATIONS_SOUNDS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.MKWyKS)],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_EMAILS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.TPchzM)],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t['B75+xc'])],
                parent: ez.s6.NOTIFICATIONS_EMAILS
            },
            [ez.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.sxn7lZ)],
                parent: ez.s6.NOTIFICATIONS_EMAILS
            },
            [ez.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.EkxXhY)],
                parent: ez.s6.NOTIFICATIONS_EMAILS
            },
            [ez.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.jNrkrK)],
                parent: ez.s6.NOTIFICATIONS_EMAILS
            },
            [ez.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.E8g1l5)],
                parent: ez.s6.NOTIFICATIONS_EMAILS
            },
            [ez.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.Ra9Pws)],
                parent: ez.s6.NOTIFICATIONS_EMAILS
            },
            [ez.s6.NOTIFICATIONS_REACTIONS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.Rq0NFh)],
                parent: ez.s6.NOTIFICATIONS
            },
            [ez.s6.NOTIFICATIONS_GAME_ACTIVITY]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eX.intl.string(eX.t.omtoJy)],
                parent: ez.s6.NOTIFICATIONS,
                predicate: () => (0, y.uw)('SettingsRendererConfig')
            },
            [ez.s6.KEYBINDS]: {
                section: eW.oAB.KEYBINDS,
                searchableTitles: [eX.intl.string(eX.t.T9DA2N)],
                label: eX.intl.string(eX.t.T9DA2N),
                element: eS.Z,
                url: eW.Z5c.SETTINGS('keybinds')
            },
            [ez.s6.LANGUAGE]: {
                section: eW.oAB.LOCALE,
                searchableTitles: [eX.intl.string(eX.t.IHMsPj)],
                label: eX.intl.string(eX.t.IHMsPj),
                element: ev.Z,
                url: eW.Z5c.SETTINGS('language')
            },
            [ez.s6.WINDOW_SETTINGS]: {
                section: eW.oAB.WINDOWS,
                searchableTitles: [eX.intl.string(eX.t.ZkDZoq)],
                label: eX.intl.string(eX.t.ZkDZoq),
                element: ew.Z,
                predicate: () => J.isPlatformEmbedded && (0, J.isWindows)()
            },
            [ez.s6.LINUX_SETTINGS]: {
                section: eW.oAB.LINUX,
                searchableTitles: [eX.intl.string(eX.t['7pPjTU'])],
                label: eX.intl.string(eX.t['7pPjTU']),
                element: e6,
                predicate: () => J.isPlatformEmbedded && (0, J.isLinux)()
            },
            [ez.s6.STREAMER_MODE]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eX.intl.string(eX.t.S5GfOT)],
                label: eX.intl.string(eX.t.S5GfOT),
                ariaLabel: eX.intl.string(eX.t.S5GfOT),
                element: eP.Z,
                url: eW.Z5c.SETTINGS('streamer-mode')
            },
            [ez.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eX.intl.string(eX.t.bxGbHB)],
                parent: ez.s6.STREAMER_MODE
            },
            [ez.s6.STREAMER_MODE_ENABLE]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eX.intl.string(eX.t.p9ZAJS)],
                parent: ez.s6.STREAMER_MODE
            },
            [ez.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eX.intl.string(eX.t.UpQziI)],
                parent: ez.s6.STREAMER_MODE
            },
            [ez.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eX.intl.string(eX.t.q7WNGh)],
                parent: ez.s6.STREAMER_MODE
            },
            [ez.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eX.intl.string(eX.t['1CWknJ'])],
                parent: ez.s6.STREAMER_MODE
            },
            [ez.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eX.intl.string(eX.t.qmYiYW)],
                parent: ez.s6.STREAMER_MODE
            },
            [ez.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eX.intl.string(eX.t['iA81+f'])],
                parent: ez.s6.STREAMER_MODE,
                predicate: () => {
                    var e, t, n;
                    return null != (n = null === p.Z || void 0 === p.Z || null == (t = p.Z.window) || null == (e = t.supportsContentProtection) ? void 0 : e.call(t)) && n;
                }
            },
            [ez.s6.SETTINGS_ADVANCED]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eX.intl.string(eX.t['8/udY2'])],
                label: eX.intl.string(eX.t['8/udY2']),
                ariaLabel: eX.intl.string(eX.t['8/udY2']),
                element: eu.Z
            },
            [ez.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eX.intl.string(eX.t.ObIb1d)],
                parent: ez.s6.SETTINGS_ADVANCED,
                predicate: () => X.wS
            },
            [ez.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eX.intl.string(eX.t['eOC/Fx'])],
                parent: ez.s6.SETTINGS_ADVANCED,
                predicate: () => J.isPlatformEmbedded
            },
            [ez.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eX.intl.string(eX.t.fi3UQE)],
                parent: ez.s6.SETTINGS_ADVANCED,
                predicate: () => ti
            },
            [ez.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eX.intl.string(eX.t.erOqlp)],
                parent: ez.s6.SETTINGS_ADVANCED,
                predicate: () => ts
            },
            [ez.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eX.intl.string(eX.t.qDZryM)],
                parent: ez.s6.SETTINGS_ADVANCED
            },
            [ez.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: ['CF WARP', 'CloudFlare WARP'],
                parent: ez.s6.SETTINGS_ADVANCED,
                predicate: () => b.Z.getCurrentConfig({ location: 'SettingsRendererConfig' }, { autoTrackExposure: !1 }).enable
            },
            [ez.s6.ACTIVITY_PRIVACY]: {
                section: eW.oAB.ACTIVITY_PRIVACY,
                searchableTitles: tf ? [eX.intl.string(eX.t.Cq98yM), eX.intl.string(eX.t['6x5uWV'])] : [eX.intl.string(eX.t.Cq98yM)],
                label: eX.intl.string(tf ? eX.t['6x5uWV'] : eX.t.Cq98yM),
                ariaLabel: eX.intl.string(tf ? eX.t['6x5uWV'] : eX.t.Cq98yM),
                element: ed.Z,
                predicate: () => !e2,
                url: eW.Z5c.SETTINGS('activity-privacy')
            },
            [ez.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: e2 ? eW.oAB.GAMES : eW.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t['8ka8lp'])],
                parent: e2 ? ez.s6.GAMES_ACTIVITY_PRIVACY : ez.s6.ACTIVITY_PRIVACY
            },
            [ez.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: e2 ? eW.oAB.GAMES : eW.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t.VOszPD)],
                parent: e2 ? ez.s6.GAMES_ACTIVITY_PRIVACY : ez.s6.ACTIVITY_PRIVACY
            },
            [ez.s6.ACTIVITY_PRIVACY_TOS]: {
                section: e2 ? eW.oAB.GAMES : eW.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ez.CF],
                parent: e2 ? ez.s6.GAMES_ACTIVITY_PRIVACY : ez.s6.ACTIVITY_PRIVACY
            },
            [ez.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eW.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eX.intl.string(eX.t['4F2KoK'])],
                parent: ez.s6.ACTIVITY_PRIVACY
            },
            [ez.s6.REGISTERED_GAMES]: {
                section: eW.oAB.REGISTERED_GAMES,
                searchableTitles: [eX.intl.string(eX.t.AVDyEh)],
                label: eX.intl.string(eX.t.AVDyEh),
                element: eC.Z,
                predicate: () => !e2 && (0, eB.Jw)()
            },
            [ez.s6.OVERLAY]: {
                section: eW.oAB.OVERLAY,
                searchableTitles: [eX.intl.string(eX.t['9cb1U1']), eX.intl.string(eX.t.HcoRu7)],
                label: eX.intl.string(eX.t['9cb1U1']),
                element: eI.Z,
                predicate: () => !e2 && Z
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
                    q.default.track(eW.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, Q.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                q.default.track(eW.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, h.Z)(e);
                            }
                        });
                },
                searchableTitles: [eX.intl.string(eX.t.sMEktb)],
                label: eX.intl.string(eX.t.sMEktb),
                ariaLabel: eX.intl.string(eX.t.sMEktb)
            },
            [ez.s6.HYPESQUAD]: {
                section: eW.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eX.intl.string(eX.t['k0R+4e'])],
                label: eX.intl.string(eX.t['k0R+4e']),
                element: ej.Z,
                predicate: () => !to
            },
            [ez.s6.TOWNHALL]: {
                section: eW.oAB.TOWNHALL,
                searchableTitles: [eX.intl.string(eX.t.dnZNER)],
                label: eX.intl.string(eX.t.dnZNER),
                predicate: () => to,
                onClick: () => {
                    (0, h.Z)('https://discord.gg/discord-townhall'), (0, d.xf)();
                }
            },
            [ez.s6.EXPERIMENTS]: {
                section: eW.oAB.EXPERIMENTS,
                searchableTitles: ['Experiments'],
                label: 'Experiments',
                element: ek.Z,
                predicate: () => z.Z.isDeveloper,
                url: eW.Z5c.SETTINGS('experiments')
            },
            [ez.s6.DEVELOPER_OPTIONS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: ex.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Overrides'],
                parent: ez.s6.DEVELOPER_OPTIONS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: ez.s6.DEVELOPER_OPTIONS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Logging'],
                parent: ez.s6.DEVELOPER_OPTIONS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Manual Triggers'],
                parent: ez.s6.DEVELOPER_OPTIONS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Design Tools'],
                parent: ez.s6.DEVELOPER_OPTIONS,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: ez.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: ez.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: ez.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Always deliver ads'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e4 && z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: ez.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e4 && z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Accessibility Auditing'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1
            },
            [ez.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['CSS Debugging'],
                parent: ez.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e4 && z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: ez.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e4 && z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: ez.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e4 && z.Z.isDeveloper && Y.default.layoutDebuggingEnabled
            },
            [ez.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e4 && z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Disable App Collections Cache'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e4 && z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: ez.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: ez.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: ez.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: ez.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: ez.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => f.q && z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: ez.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: ez.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: ez.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: ez.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Prevent Popouts From Closing Automatically'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Disable Align Chat Input'],
                parent: ez.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.HOTSPOT_OPTIONS]: {
                section: eW.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: en.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eW.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: I.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.PAYMENT_FLOW_MODALS]: {
                section: eW.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: er.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.REVENUE_STORYBOOK]: {
                section: eW.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Revenue Storybook', 'Payment Components', 'Orb Components', 'Virtual Currency'],
                label: 'Revenue Storybook',
                element: eG.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eW.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ['Virtual Currency', 'Orb', 'Config'],
                label: 'Virtual Currency Config',
                element: eF.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.PAYMENT_COMPONENTS]: {
                section: eW.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Payment Components'],
                label: 'Payment Components',
                element: eG.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.ORB_COMPONENTS]: {
                section: eW.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ['Orb Components'],
                label: 'Orb Components',
                element: eG.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.TEXT_PLAYGROUND]: {
                section: eW.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: eD.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DESIGN_SYSTEMS]: {
                section: eW.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: e_.Z,
                predicate: () => z.Z.isDeveloper,
                url: eW.Z5c.SETTINGS('design-systems')
            },
            [ez.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eW.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Colors'],
                label: 'Colors',
                element: e_.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.ANIMATION_TESTING]: {
                section: eW.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Animation Testing'],
                label: 'Animation Testing',
                element: e_.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eW.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Components'],
                label: 'Components',
                element: e_.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.TEXT_COMPONENTS]: {
                section: eW.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: ea.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.INTL_TESTING]: {
                section: eW.oAB.INTL_TESTING,
                searchableTitles: ['Intl Testing', 'i18n'],
                label: 'Intl Testing',
                element: R.Z,
                predicate: () => e4 || z.Z.isDeveloper
            },
            [ez.s6.SHOP_KEEPER]: {
                section: eW.oAB.SHOP_KEEPER,
                searchableTitles: ['Shop Keeper'],
                label: 'Shop Keeper',
                element: S.Z,
                predicate: () => z.Z.isDeveloper
            },
            [ez.s6.QUEST_PREVIEW_TOOL]: {
                section: eW.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: G.Z,
                predicate: () => (0, U.X7)({ location: eK.dr.QUEST_PREVIEW_TOOL })
            },
            [ez.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG]: {
                section: eW.oAB.QUEST_MINOR_REWARD_CAPPING_CONFIG,
                searchableTitles: ['Minor Reward Capping Config'],
                label: 'Minor Reward Capping Config',
                element: V.Z,
                predicate: () => e4
            },
            [ez.s6.WEB_SETTING_TREE_TOOL]: {
                section: eW.oAB.WEB_SETTING_TREE_TOOL,
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
                }),
                variant: 'destructive'
            },
            [ez.s6.SOCIAL_LINKS]: {
                section: g.ID.CUSTOM,
                element: el.Z
            },
            [ez.s6.CLIENT_DEBUG_INFO]: {
                section: g.ID.CUSTOM,
                element: et.Z
            }
        });
    };
