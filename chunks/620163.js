n.d(t, { i: () => e7 }), n(539854), n(388685);
var i = n(255367);
n(73800);
var r = n(990547),
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
    b = n(49226),
    x = n(163379),
    _ = n(498646),
    j = n(489968),
    E = n(803038),
    C = n(703288),
    O = n(574755),
    v = n(675997),
    S = n(994714),
    T = n(377171),
    I = n(621628),
    N = n(243778),
    y = n(594928),
    A = n(890022),
    P = n(18438),
    R = n(778825),
    D = n(665166),
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
    z = n(462354),
    W = n(906467),
    Y = n(857192),
    K = n(131951),
    q = n(25990),
    X = n(626135),
    J = n(572004),
    Q = n(49012),
    $ = n(358085),
    ee = n(998502),
    et = n(695346),
    en = n(604227),
    ei = n(38915),
    er = n(321614),
    es = n(498639),
    ea = n(748717),
    el = n(419636),
    eo = n(799071),
    ec = n(154022),
    ed = n(393681),
    eu = n(309739),
    em = n(64914),
    ep = n(501348),
    eg = n(795594),
    eh = n(443702),
    ef = n(327192),
    eb = n(949493),
    ex = n(675047),
    e_ = n(177508),
    ej = n(956699),
    eE = n(54942),
    eC = n(293389),
    eO = n(88624),
    ev = n(387747),
    eS = n(389650),
    eT = n(649157),
    eI = n(593648),
    eN = n(327885),
    ey = n(595242),
    eA = n(463153),
    eP = n(36192),
    eR = n(889029),
    eD = n(400287),
    eZ = n(554042),
    ew = n(936982),
    ek = n(200645),
    eL = n(287490),
    eB = n(706060),
    eM = n(168308),
    eU = n(277329),
    eV = n(273927),
    eG = n(604224),
    eF = n(43434),
    eH = n(333576),
    ez = n(345655),
    eW = n(726985),
    eY = n(583139),
    eK = n(981631),
    eq = n(46140),
    eX = n(65154),
    eJ = n(388032),
    eQ = n(511479),
    e$ = n(693450),
    e0 = n(345909),
    e1 = n(202323);
let e3 = () => {
        let e = [s.z.CLIENT_THEMES_SETTINGS_BADGE, s.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
        return (
            E.Mc.getCurrentConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(s.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            e
        );
    },
    e6 = () => {
        let e = e3(),
            [t] = (0, N.US)(e);
        return t === s.z.CLIENT_THEMES_SETTINGS_BADGE || t === s.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, i.jsx)(l.lBU, { text: eJ.intl.string(eJ.t.y2b7CA) })
            : t === s.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE
              ? (0, i.jsx)(l.IGR, { text: eJ.intl.string(eJ.t.y2b7CA) })
              : null;
    },
    e8 = () => {
        let e = [];
        return (
            F.c.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE),
            y.J.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(s.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e.push(s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE),
            e
        );
    },
    e2 = () => {
        let e = e8(),
            [t] = (0, N.US)(e);
        return t === s.z.NAMEPLATE_USER_SETTINGS_MENU_NEW_BADGE
            ? (0, i.jsx)(Z.Z, {})
            : t === s.z.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE || t === s.z.DISPLAY_NAME_STYLES_NEW_BADGE
              ? (0, i.jsx)(l.IGR, { text: eJ.intl.string(eJ.t.y2b7CA) })
              : null;
    },
    e5 = ek.Z,
    e7 = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: E,
            impressionSource: N,
            numOfPendingFamilyRequests: y,
            isOverlaySupported: Z,
            isClipsBetaTagShowing: F = !1,
            shouldMergeGameSettings: e7,
            isKeywordFilteringEnabled: e4,
            isStaff: e9,
            isInappropriateConversationWarningEnabled: te,
            isInapproprateConversationsDefaultOn: tt,
            paymentsBlocked: tn,
            isEligibleForQuests: ti,
            isStricterMessageRequestsEnabled: tr,
            hasLibraryApplication: ts,
            hasTOTPEnabled: ta,
            developerMode: tl,
            isAdultUser: to,
            hasSecureFramesVerifiedUserIds: tc,
            hypeSquadRemoved: td,
            hasIgnoredUsers: tu,
            hasBlockedUsers: tm,
            useRefreshedVoiceAndVideo: tp,
            isEligibleForSensitiveContentDefaults: tg,
            inputMode: th,
            activeInputProfile: tf,
            isInputProfileCustom: tb,
        } = e;
        return Object.freeze({
            [eW.s6.SEARCH_NO_RESULTS]: {
                section: p.ID.CUSTOM,
                element: eA.Z,
            },
            [eW.s6.ACCOUNT_SECURITY_TAB]: {
                section: eK.oAB.ACCOUNT,
                searchableTitles: [eJ.intl.string(eJ.t.Am9YHh)],
                label: eJ.intl.string(eJ.t.Am9YHh),
            },
            [eW.s6.ACCOUNT]: {
                section: eK.oAB.ACCOUNT,
                searchableTitles: [eJ.intl.string(eJ.t["JAIM/v"])],
                label: eJ.intl.string(eJ.t["JAIM/v"]),
                ariaLabel: eJ.intl.string(eJ.t["JAIM/v"]),
                element: ed.Z,
                url: eK.Z5c.SETTINGS("account"),
            },
            [eW.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eJ.intl.string(eJ.t.LYju5O)],
                parent: eW.s6.ACCOUNT,
                section: eK.oAB.ACCOUNT,
            },
            [eW.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eJ.intl.string(eJ.t["9AjdkJ"])],
                section: eK.oAB.ACCOUNT,
                parent: eW.s6.ACCOUNT_PROFILE,
            },
            [eW.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eJ.intl.string(eJ.t.Ulqq6O)],
                section: eK.oAB.ACCOUNT,
                parent: eW.s6.ACCOUNT_PROFILE,
            },
            [eW.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    eJ.intl.string(eJ.t["/52UY2"]),
                    eJ.intl.string(eJ.t.sK0dmJ),
                    eJ.intl.string(eJ.t.XxRj7e),
                    eJ.intl.string(eJ.t.yNGjyM),
                    eJ.intl.string(eJ.t.KPGVWl),
                ],
                section: eK.oAB.ACCOUNT,
                parent: eW.s6.ACCOUNT_PROFILE,
                predicate: () => tg,
            },
            [eW.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eJ.intl.string(eJ.t["+JkHPz"])],
                section: eK.oAB.ACCOUNT,
                parent: eW.s6.ACCOUNT_PROFILE,
            },
            [eW.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eJ.intl.string(eJ.t.oP5zGB)],
                section: eK.oAB.ACCOUNT,
                parent: eW.s6.ACCOUNT_PROFILE,
            },
            [eW.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eJ.intl.string(eJ.t.pKSjEh)],
                section: eK.oAB.ACCOUNT,
                parent: eW.s6.ACCOUNT,
            },
            [eW.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eJ.intl.string(eJ.t["FRep5+"])],
                section: eK.oAB.ACCOUNT,
                parent: eW.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eW.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eJ.intl.string(eJ.t["7qKDrK"])],
                section: eK.oAB.ACCOUNT,
                parent: eW.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eW.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eJ.intl.string(eJ.t.m0FidH)],
                section: eK.oAB.ACCOUNT,
                parent: eW.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eW.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eJ.intl.string(eJ.t.cDgKtb)],
                section: eK.oAB.ACCOUNT,
                parent: eW.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !ta,
            },
            [eW.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eJ.intl.string(eJ.t["D+aE7u"])],
                section: eK.oAB.ACCOUNT,
                parent: eW.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => ta,
            },
            [eW.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eJ.intl.string(eJ.t.fZSi1N)],
                section: eK.oAB.ACCOUNT,
                parent: eW.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eW.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eJ.intl.string(eJ.t.uHAJ5u)],
                section: eK.oAB.ACCOUNT,
                parent: eW.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eW.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eJ.intl.string(eJ.t.vrOCCg)],
                section: eK.oAB.ACCOUNT,
                parent: eW.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eW.s6.ACCOUNT_REMOVAL]: {
                section: eK.oAB.ACCOUNT,
                searchableTitles: [eJ.intl.string(eJ.t.ZKsIkp)],
                parent: eW.s6.ACCOUNT,
            },
            [eW.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eK.oAB.ACCOUNT,
                searchableTitles: [eJ.intl.string(eJ.t.jf5GGR)],
                parent: eW.s6.ACCOUNT_REMOVAL,
            },
            [eW.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eK.oAB.ACCOUNT,
                searchableTitles: [eJ.intl.string(eJ.t["8lQ2ra"])],
                parent: eW.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eW.s6.GAMES]: {
                section: eK.oAB.GAMES,
                searchableTitles: [eJ.intl.string(eJ.t.URyqtL)],
                label: eJ.intl.string(eJ.t.URyqtL),
                ariaLabel: eJ.intl.string(eJ.t.URyqtL),
                element: eU.Z,
                predicate: () => e7,
            },
            [eW.s6.GAMES_MY_GAMES]: {
                section: eK.oAB.GAMES,
                searchableTitles: [eJ.intl.string(eJ.t["5DMgp6"])],
                parent: eW.s6.GAMES,
            },
            [eW.s6.GAMES_CLIPS]: {
                section: eK.oAB.GAMES,
                searchableTitles: [eJ.intl.string(eJ.t.z2jK6e)],
                parent: eW.s6.GAMES,
            },
            [eW.s6.GAMES_OVERLAY]: {
                section: eK.oAB.GAMES,
                searchableTitles: [eJ.intl.string(eJ.t["9cb1U1"])],
                parent: eW.s6.GAMES,
            },
            [eW.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eK.oAB.GAMES,
                searchableTitles: [eJ.intl.string(eJ.t.Cq98yM)],
                parent: eW.s6.GAMES,
            },
            [eW.s6.PROFILE_CUSTOMIZATION]: {
                section: eK.oAB.PROFILE_CUSTOMIZATION,
                type: p.bT.WIDE,
                searchableTitles: [eJ.intl.string(eJ.t["vi7f+v"])],
                label: eJ.intl.string(eJ.t["vi7f+v"]),
                ariaLabel: eJ.intl.string(eJ.t["vi7f+v"]),
                element: M.Z,
                newIndicator: (0, i.jsx)(e2, {}),
                newIndicatorDismissibleContentTypes: [...e8()],
                notice: {
                    stores: [q.Z, R.Z],
                    element: B.Z,
                },
                onSettingsClose: () => {
                    o.Z.wait(() => {
                        (0, P.It)(), (0, u.P6)(), m.Z.clearSubsection(eK.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eK.Z5c.SETTINGS("profile-customization"),
            },
            [eW.s6.PROFILE_DISPLAY_NAME]: {
                section: eK.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eJ.intl.string(eJ.t["9AjdkJ"])],
                parent: eW.s6.PROFILE_CUSTOMIZATION,
            },
            [eW.s6.PROFILE_USER_PROFILE]: {
                section: eK.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eJ.intl.string(eJ.t["2p07FR"]), eJ.intl.string(eJ.t["7vhiqq"])],
                parent: eW.s6.PROFILE_CUSTOMIZATION,
            },
            [eW.s6.PROFILE_SERVER_PROFILES]: {
                section: eK.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eJ.intl.string(eJ.t.kPHroa)],
                parent: eW.s6.PROFILE_CUSTOMIZATION,
            },
            [eW.s6.CONTENT_SOCIAL]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                label: eJ.intl.string(eJ.t["+o1pDQ"]),
                searchableTitles: [eJ.intl.string(eJ.t["+o1pDQ"])],
                ariaLabel: eJ.intl.string(eJ.t["+o1pDQ"]),
                element: eb.Z,
                url: eK.Z5c.SETTINGS("content-and-social"),
            },
            [eW.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t["+o1pDQ"]), eJ.intl.string(eJ.t["/7xJCA"])],
                parent: eW.s6.CONTENT_SOCIAL,
            },
            [eW.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t["+o1pDQ"]), eJ.intl.string(eJ.t["/7xJCA"])],
                parent: eW.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eW.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t.YpCiMj)],
                parent: eW.s6.CONTENT_SOCIAL,
            },
            [eW.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                label: eJ.intl.string(eJ.t.YpCiMj),
                searchableTitles: [eJ.intl.string(eJ.t.YpCiMj)],
                ariaLabel: eJ.intl.string(eJ.t.YpCiMj),
                parent: eW.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eK.Z5c.SETTINGS(eK.oAB.CONTENT_AND_SOCIAL, eY.C),
            },
            [eW.s6.DATA_PRIVACY]: {
                section: eK.oAB.DATA_AND_PRIVACY,
                label: eJ.intl.string(eJ.t.OAuOHB),
                searchableTitles: [eJ.intl.string(eJ.t.OAuOHB)],
                ariaLabel: eJ.intl.string(eJ.t.OAuOHB),
                element: ex.Z,
                url: eK.Z5c.SETTINGS("data-and-privacy"),
            },
            [eW.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eK.oAB.ACCOUNT,
                searchableTitles: [eJ.intl.string(eJ.t["Vov/9v"])],
                parent: eW.s6.ACCOUNT,
            },
            [eW.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eK.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eJ.intl.string(eJ.t.WWaFn5)],
                parent: eW.s6.DATA_PRIVACY,
                predicate: () => (0, $.isDesktop)(),
            },
            [eW.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eK.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eJ.intl.string(eJ.t["opi/XF"])],
                parent: eW.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eW.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t.xVRG4O)],
                parent: eW.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eW.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t.fyA119)],
                parent: eW.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eW.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t.fyA119)],
                parent: eW.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eW.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t["/U8Iwc"])],
                parent: eW.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eW.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t["ms+TmZ"])],
                parent: eW.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eW.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t["y62Z/f"])],
                parent: eW.s6.CONTENT_SOCIAL,
            },
            [eW.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eK.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eJ.intl.string(eJ.t.SRZyHh)],
                parent: eW.s6.DATA_PRIVACY,
            },
            [eW.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eJ.intl.string(eJ.t.uEz8JC),
                    eJ.intl.string(eJ.t["N/oRIy"]),
                    eJ.intl.string(eJ.t.QVdYsL),
                    eJ.intl.string(eJ.t["aWD+tr"]),
                    eJ.intl.string(eJ.t["5mnTa2"]),
                ],
                parent: eW.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eW.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eJ.intl.string(eJ.t["Hj/Bur"]),
                    eJ.intl.string(eJ.t["N/oRIy"]),
                    eJ.intl.string(eJ.t.QVdYsL),
                    eJ.intl.string(eJ.t["aWD+tr"]),
                    eJ.intl.string(eJ.t["5mnTa2"]),
                    eJ.intl.string(eJ.t.K0OWPz),
                ],
                parent: eW.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eW.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eJ.intl.string(eJ.t["Hj/Bur"]),
                    eJ.intl.string(eJ.t["N/oRIy"]),
                    eJ.intl.string(eJ.t.QVdYsL),
                    eJ.intl.string(eJ.t["aWD+tr"]),
                    eJ.intl.string(eJ.t["5mnTa2"]),
                ],
                parent: eW.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eW.s6.GORE_MEDIA_REDACTION]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eJ.intl.string(eJ.t["Hj/Bur"]),
                    eJ.intl.string(eJ.t["N/oRIy"]),
                    eJ.intl.string(eJ.t.QVdYsL),
                    eJ.intl.string(eJ.t["aWD+tr"]),
                    eJ.intl.string(eJ.t.K0OWPz),
                ],
                parent: eW.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eW.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eJ.intl.string(eJ.t.JzaP4u),
                    eJ.intl.string(eJ.t.H9XOl5),
                    eJ.intl.string(eJ.t.k4W40N),
                ],
                parent: eW.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eW.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t["L+yTsb"])],
                parent: eW.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eW.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t.XahVjo)],
                parent: eW.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eW.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                parent: eW.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eW.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t.RAQUSE), eJ.intl.string(eJ.t.wbYDfX)],
                parent: eW.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eW.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t["3o2ojo"])],
                parent: eW.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !tr,
            },
            [eW.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t.OLwZDQ)],
                parent: eW.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eW.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t.wBkwu7)],
                parent: eW.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eW.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eK.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eJ.intl.string(eJ.t.XuADY2)],
                parent: eW.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eW.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eK.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eJ.intl.string(eJ.t.MNKzys)],
                parent: eW.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eW.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eK.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eJ.intl.string(eJ.t.VkS7YW)],
                parent: eW.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eW.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eK.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.CF],
                parent: eW.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eW.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eK.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eJ.intl.string(eJ.t.dmBSKi)],
                parent: eW.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eW.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t["1UaUy8"]), eJ.intl.string(eJ.t["xIk/iI"])],
                parent: eW.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e4,
            },
            [eW.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eJ.intl.string(eJ.t.qFsx5u)],
                parent: eW.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => te && !to && !tt,
            },
            [eW.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eK.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eJ.intl.string(eJ.t["5b3FND"])],
                parent: eW.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => tc,
            },
            [eW.s6.PRIVACY_FAMILY_CENTER]: {
                section: eK.oAB.FAMILY_CENTER,
                searchableTitles: [eJ.intl.string(e0.default.gntCQU)],
                label: eJ.intl.string(e0.default.gntCQU),
                ariaLabel: eJ.intl.string(e0.default.gntCQU),
                element: eE.Z,
                badgeCount: y,
                newIndicator: (0, i.jsx)(l.IGR, {
                    text: eJ.intl.string(eJ.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [s.z.FAMILY_CENTER_NEW_BADGE],
                url: eK.Z5c.SETTINGS("family-center"),
            },
            [eW.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eK.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eJ.intl.string(eJ.t.BG7Qsb)],
                parent: eW.s6.DATA_PRIVACY,
            },
            [eW.s6.AUTHORIZED_APPS]: {
                section: eK.oAB.AUTHORIZED_APPS,
                searchableTitles: [eJ.intl.string(eJ.t["f6kk+v"])],
                label: eJ.intl.string(eJ.t["f6kk+v"]),
                element: eg.Z,
                url: eK.Z5c.SETTINGS("authorized-apps"),
            },
            [eW.s6.SESSIONS]: {
                section: eK.oAB.SESSIONS,
                searchableTitles: [eJ.intl.string(eJ.t["+1h0k5"])],
                label: eJ.intl.string(eJ.t["+1h0k5"]),
                ariaLabel: eJ.intl.string(eJ.t["+1h0k5"]),
                element: eP.Z,
                newIndicatorDismissibleContentTypes: [s.z.AUTH_SESSIONS_NEW],
                impressionName: r.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: N },
            },
            [eW.s6.CONNECTIONS]: {
                section: eK.oAB.CONNECTIONS,
                searchableTitles: [eJ.intl.string(eJ.t["3fe7U1"])],
                label: eJ.intl.string(eJ.t["3fe7U1"]),
                ariaLabel: eJ.intl.string(eJ.t["3fe7U1"]),
                element: ef.Z,
                impressionName: r.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: N },
                newIndicatorDismissibleContentTypes: [s.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eK.Z5c.SETTINGS("connections"),
            },
            [eW.s6.THIRD_PARTY_ACCESS]: {
                section: eK.oAB.CONNECTIONS,
                searchableTitles: [
                    eJ.intl.string(eJ.t["Ig/XFR"]),
                    eJ.intl.string(eJ.t["3fe7U1"]),
                    eJ.intl.string(eJ.t["f6kk+v"]),
                ],
                label: eJ.intl.string(eJ.t["Ig/XFR"]),
                parent: eW.s6.CONNECTIONS,
                element: ew.Z,
            },
            [eW.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eK.oAB.CONNECTIONS,
                searchableTitles: [eJ.intl.string(eJ.t["+/hZMz"])],
                parent: eW.s6.CONNECTIONS,
                element: ef.Z,
            },
            [eW.s6.CLIPS]: {
                section: eK.oAB.CLIPS,
                searchableTitles: [eJ.intl.string(eJ.t.z2jK6e)],
                label: eJ.intl.string(eJ.t.z2jK6e),
                ariaLabel: eJ.intl.string(eJ.t.z2jK6e),
                icon: F ? (0, i.jsx)(C.Z, {}) : void 0,
                element: O.Z,
                predicate: () => !e7,
                url: eK.Z5c.SETTINGS("clips"),
            },
            [eW.s6.RESTRICTED_USERS]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                parent: eW.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eJ.intl.string(eJ.t["3wRorq"]),
                element: eV.ZP,
                predicate: () => tu || tm,
            },
            [eW.s6.BLOCKED_USERS]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                parent: eW.s6.RESTRICTED_USERS,
                label: eJ.intl.string(eJ.t.PFOUKS),
                searchableTitles: [eJ.intl.string(eJ.t.PFOUKS)],
                element: eV.GF,
                predicate: () => tm,
            },
            [eW.s6.IGNORED_USERS]: {
                section: eK.oAB.CONTENT_AND_SOCIAL,
                parent: eW.s6.RESTRICTED_USERS,
                searchableTitles: [eJ.intl.string(eJ.t["93ZDWF"])],
                label: eJ.intl.string(eJ.t["93ZDWF"]),
                element: eV.yo,
                predicate: () => tu,
            },
            [eW.s6.PREMIUM]: {
                section: eK.oAB.PREMIUM,
                ariaLabel: eJ.intl.string(eJ.t.Ipxkoq),
                searchableTitles: [eJ.intl.string(eJ.t.Ipxkoq)],
                label: eJ.intl.string(eJ.t.Ipxkoq),
                element: ea.Z,
                className: e1.premiumTab,
            },
            [eW.s6.GUILD_BOOSTING]: {
                section: eK.oAB.GUILD_BOOSTING,
                searchableTitles: [eJ.intl.string(eJ.t["+CbP2t"])],
                label: eJ.intl.string(eJ.t["+CbP2t"]),
                element: ey.Z,
            },
            [eW.s6.SUBSCRIPTIONS]: {
                section: eK.oAB.SUBSCRIPTIONS,
                ariaLabel: eJ.intl.string(eJ.t.trSpHR),
                searchableTitles: [eJ.intl.string(eJ.t.trSpHR)],
                label: eJ.intl.string(eJ.t.trSpHR),
                element: L.Z,
                icon: E
                    ? (0, i.jsx)(l.Mgn, {
                          size: "xs",
                          color: a.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eW.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eK.oAB.SUBSCRIPTIONS,
                searchableTitles: [eJ.intl.string(eJ.t["2GKrvr"])],
                parent: eW.s6.SUBSCRIPTIONS,
            },
            [eW.s6.GIFT_INVENTORY]: {
                section: eK.oAB.INVENTORY,
                searchableTitles: [eJ.intl.string(eJ.t["jcSP+v"])],
                label: eJ.intl.string(eJ.t["jcSP+v"]),
                element: ev.Z,
                ariaLabel: eJ.intl.string(eJ.t["jcSP+v"]),
                badgeCount: t,
            },
            [eW.s6.GIFT_CODE_REDEMPTION]: {
                section: eK.oAB.INVENTORY,
                searchableTitles: [eJ.intl.string(eJ.t["il+VCg"])],
                parent: eW.s6.GIFT_INVENTORY,
                predicate: () => !tn,
            },
            [eW.s6.GIFT_INVENTORY_QUESTS]: {
                section: eK.oAB.INVENTORY,
                searchableTitles: [eJ.intl.string(eJ.t.JALI2N)],
                parent: eW.s6.GIFT_INVENTORY,
                predicate: () => ti,
            },
            [eW.s6.GIFT_INVENTORY_LIST]: {
                section: eK.oAB.INVENTORY,
                searchableTitles: [eJ.intl.string(eJ.t["9KeUbW"])],
                parent: eW.s6.GIFT_INVENTORY,
                predicate: () => !tn,
            },
            [eW.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eK.oAB.INVENTORY,
                searchableTitles: [eJ.intl.string(eJ.t.vwMEHR)],
                parent: eW.s6.GIFT_INVENTORY,
                predicate: () => tn,
            },
            [eW.s6.BILLING]: {
                section: eK.oAB.BILLING,
                searchableTitles: [eJ.intl.string(eJ.t.oeUm2t)],
                label: eJ.intl.string(eJ.t.oeUm2t),
                ariaLabel: eJ.intl.string(eJ.t.oeUm2t),
                element: eh.Z,
            },
            [eW.s6.BILLING_PAYMENT_METHODS]: {
                section: eK.oAB.BILLING,
                searchableTitles: [eJ.intl.string(eJ.t.W26xGR)],
                parent: eW.s6.BILLING,
            },
            [eW.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eK.oAB.BILLING,
                searchableTitles: [eJ.intl.string(eJ.t.obLrcH)],
                parent: eW.s6.BILLING,
            },
            [eW.s6.APPEARANCE]: {
                section: eK.oAB.APPEARANCE,
                searchableTitles: [eJ.intl.string(eJ.t["iHH+k5"])],
                label: eJ.intl.string(eJ.t["iHH+k5"]),
                ariaLabel: eJ.intl.string(eJ.t["iHH+k5"]),
                element: ep.Z,
                newIndicator: (0, i.jsx)(e6, {}),
                newIndicatorDismissibleContentTypes: e3(),
                url: eK.Z5c.SETTINGS("appearance"),
            },
            [eW.s6.APPEARANCE_THEME]: {
                section: eK.oAB.APPEARANCE,
                searchableTitles: [eJ.intl.string(eJ.t.Ksh3io)],
                parent: eW.s6.APPEARANCE,
            },
            [eW.s6.APPEARANCE_COLOR]: {
                section: eK.oAB.APPEARANCE,
                searchableTitles: [eJ.intl.string(eJ.t.OCOOiI)],
                parent: eW.s6.APPEARANCE_THEME,
            },
            [eW.s6.APPEARANCE_ICON]: {
                section: eK.oAB.APPEARANCE,
                searchableTitles: [eJ.intl.string(eJ.t.RPh2oq)],
                parent: eW.s6.APPEARANCE_THEME,
            },
            [eW.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eK.oAB.APPEARANCE,
                searchableTitles: [eJ.intl.string(eJ.t.ZEoGMT)],
                parent: eW.s6.APPEARANCE,
            },
            [eW.s6.APPEARANCE_LIST_SPACING]: {
                section: eK.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eW.s6.APPEARANCE,
                newIndicator: (0, i.jsx)(l.IGR, {
                    text: eJ.intl.string(eJ.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
            },
            [eW.s6.APPEARANCE_SCALING_SPACING]: {
                section: eK.oAB.APPEARANCE,
                searchableTitles: [eJ.intl.string(eJ.t.qPOqoK)],
                parent: eW.s6.APPEARANCE,
            },
            [eW.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eK.oAB.APPEARANCE,
                searchableTitles: [
                    eJ.intl.string(eJ.t.dyamEB),
                    eJ.intl.string(eJ.t.p8NOws),
                    eJ.intl.string(eJ.t["+o/sOj"]),
                ],
                parent: eW.s6.APPEARANCE,
                predicate: () =>
                    H.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eW.s6.ACCESSIBILITY]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t.G0neg4)],
                label: eJ.intl.string(eJ.t.G0neg4),
                ariaLabel: eJ.intl.string(eJ.t.G0neg4),
                element: ec.Z,
                url: eK.Z5c.SETTINGS("accessibility"),
            },
            [eW.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: ["High Contrast Mode"],
                parent: eW.s6.ACCESSIBILITY,
            },
            [eW.s6.ACCESSIBILITY_SATURATION]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t["5PWWCQ"])],
                parent: eW.s6.ACCESSIBILITY,
            },
            [eW.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t.bQCodH)],
                parent: eW.s6.ACCESSIBILITY_SATURATION,
            },
            [eW.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t.OLZFBw)],
                parent: eW.s6.ACCESSIBILITY,
            },
            [eW.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t["+IsihY"])],
                parent: eW.s6.ACCESSIBILITY,
                predicate: () => (0, v.l)("SettingsRendererConfig"),
            },
            [eW.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t.uSOPWl)],
                parent: eW.s6.ACCESSIBILITY,
            },
            [eW.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(e$.default["2gFUEx"])],
                parent: eW.s6.ACCESSIBILITY,
            },
            [eW.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t.BT8Bmp)],
                parent: eW.s6.ACCESSIBILITY,
            },
            [eW.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t["sSY+mJ"])],
                parent: eW.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eW.s6.ACCESSIBILITY_CONTRAST]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t.TYyfOz)],
                parent: eW.s6.ACCESSIBILITY,
            },
            [eW.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t.cguieX)],
                parent: eW.s6.ACCESSIBILITY_CONTRAST,
            },
            [eW.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t.e3TR1d)],
                parent: eW.s6.ACCESSIBILITY,
            },
            [eW.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t.b3XBzs)],
                parent: eW.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eW.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t.Iayoh4)],
                parent: eW.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eW.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t.iIaOlZ)],
                parent: eW.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eW.s6.ACCESSIBILITY_STICKERS]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t["6NtAuL"])],
                parent: eW.s6.ACCESSIBILITY,
            },
            [eW.s6.ACCESSIBILITY_MESSAGES]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t.onqU6u)],
                parent: eW.s6.ACCESSIBILITY,
            },
            [eW.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t["3Fztn5"])],
                parent: eW.s6.ACCESSIBILITY_MESSAGES,
            },
            [eW.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t.TZ2hZG)],
                parent: eW.s6.ACCESSIBILITY_MESSAGES,
            },
            [eW.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t.VpSKeH)],
                parent: eW.s6.ACCESSIBILITY,
            },
            [eW.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t.qvTIwc)],
                parent: eW.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eW.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eJ.intl.string(eJ.t.lsW5Eh)],
                parent: eW.s6.ACCESSIBILITY,
            },
            [eW.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eK.oAB.ACCESSIBILITY,
                searchableTitles: [eW.CF],
                parent: eW.s6.ACCESSIBILITY,
            },
            [eW.s6.VOICE_AND_VIDEO]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.B1fFpa)],
                label: eJ.intl.string(eJ.t.B1fFpa),
                ariaLabel: eJ.intl.string(eJ.t.B1fFpa),
                element: eG.Z,
                predicate: () => K.Z.isSupported(),
                url: eK.Z5c.SETTINGS("voice"),
            },
            [eW.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.K3lovL), eJ.intl.string(eJ.t.NiTd0d)],
                parent: eW.s6.VOICE_AND_VIDEO,
                predicate: () => tp,
            },
            [eW.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.FlNoSU)],
                parent: eW.s6.VOICE_AND_VIDEO,
                predicate: () => tp,
            },
            [eW.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.ABjMWF)],
                parent: eW.s6.VOICE_AND_VIDEO,
                predicate: () => tp,
            },
            [eW.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.OFpL3d)],
                parent: eW.s6.VOICE_AND_VIDEO,
                predicate: () => tp,
            },
            [eW.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.KDdjoq), eJ.intl.string(eJ.t.FeUKeH)],
                parent: eW.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tp,
            },
            [eW.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.K3lovL), eJ.intl.string(eJ.t.NiTd0d)],
                parent: tp ? eW.s6.VOICE_AND_VIDEO_VOICE_TAB : eW.s6.VOICE_AND_VIDEO,
            },
            [eW.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eK.oAB.VOICE,
                searchableTitles: [
                    eJ.intl.string(eJ.t.hHMYbW),
                    eJ.intl.string(eJ.t.dl18zc),
                    eJ.intl.string(eJ.t.nuFtHB),
                    eJ.intl.string(eJ.t["3182VF"]),
                    eJ.intl.string(eJ.t["DGq/PT"]),
                ],
                parent: eW.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eW.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eK.oAB.VOICE,
                searchableTitles: [
                    eJ.intl.string(eJ.t.OX2Bnp),
                    eJ.intl.string(eJ.t.eATD2N),
                    eJ.intl.string(eJ.t.nuFtHB),
                    eJ.intl.string(eJ.t["3182VF"]),
                    eJ.intl.string(eJ.t["DGq/PT"]),
                ],
                parent: eW.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eW.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.gyljWF), eJ.intl.string(eJ.t.nuFtHB)],
                parent: eW.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eW.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eK.oAB.VOICE,
                searchableTitles: [
                    eJ.intl.string(eJ.t.LM3U3t),
                    eJ.intl.string(eJ.t.nuFtHB),
                    eJ.intl.string(eJ.t.VZPR0d),
                    eJ.intl.string(eJ.t.cjPbpa),
                ],
                parent: eW.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, er.R)({
                        location: "SettingsRendererConfig",
                        autoTrackExposure: !1,
                    });
                    return e.length > 0;
                },
            },
            [eW.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t["pS+K2N"]), eJ.intl.string(eJ.t.nuFtHB)],
                parent: eW.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tf !== ez._.STUDIO,
            },
            [eW.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t["sqUm+v"]), eJ.intl.string(eJ.t.nuFtHB)],
                parent: eW.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => th === eX.pM.VOICE_ACTIVITY && tb,
            },
            [eW.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.e7LIiY)],
                parent: tp ? eW.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eW.s6.VOICE_AND_VIDEO,
            },
            [eW.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.nzUc3N)],
                parent: tp ? eW.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB : eW.s6.VOICE_AND_VIDEO,
            },
            [eW.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.ABjMWF)],
                parent: eW.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eW.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.nzUc3N)],
                parent: eW.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eW.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.LKzQSE)],
                parent: tp ? eW.s6.VOICE_AND_VIDEO_VIDEO_TAB : eW.s6.VOICE_AND_VIDEO,
            },
            [eW.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.F122Gx)],
                parent: eW.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => K.Z.supports(eX.AN.VIDEO),
            },
            [eW.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t["3Ppr1t"])],
                parent: eW.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eW.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.lZTUPj)],
                parent: eW.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => K.Z.supports(eX.AN.VIDEO),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t["8/udY2"])],
                parent: eW.s6.VOICE_AND_VIDEO,
            },
            [eW.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t["8/udY2"])],
                parent: eW.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tp,
            },
            [eW.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t["8/udY2"])],
                parent: eW.s6.VOICE_AND_VIDEO_VOICE_TAB,
                predicate: () => tp,
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.DSGme3)],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => !tp,
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.Tceiq6)],
                parent: tp ? eW.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED : eW.s6.VOICE_AND_VIDEO_ADVANCED,
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t["71Ve19"])],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => K.Z.supports(eX.AN.OPEN_H264),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.Sln58f)],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.AxnPm5)],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => "stable" !== ee.ZP.releaseChannel && K.Z.isExperimentalEncodersSupported(),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t["6I6GUl"])],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => tb,
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.iWTwu7)],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t["/jwMtr"])],
                parent: tp ? eW.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eW.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eW.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.OBwCXF)],
                parent: tp ? eW.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eW.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.t8QhiY), eJ.intl.string(eJ.t.hmfkCg)],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => K.Z.isNoiseSuppressionSupported(),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.BbESsr)],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => K.Z.isAdvancedVoiceActivitySupported(),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.cUMdHx)],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => K.Z.isAutomaticGainControlSupported(),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.DFPXIC)],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => K.Z.showBypassSystemInputProcessing(),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.uancuL)],
                parent: tp ? eW.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eW.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => K.Z.supports(eX.AN.QOS),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.oSdBvb)],
                parent: tp ? eW.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eW.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => K.Z.supports(eX.AN.ATTENUATION),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.wVBHr6)],
                parent: tp ? eW.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eW.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => K.Z.shouldOfferManualSubsystemSelection(),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eK.oAB.VOICE,
                searchableTitles: [
                    eJ.intl.string(eJ.t.KDdjoq),
                    eJ.intl.string(eJ.t.NMCIf3),
                    eJ.intl.string(eJ.t.FeUKeH),
                ],
                parent: tp ? eW.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eW.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () =>
                    K.Z.supportsVideoHook() ||
                    K.Z.supportsExperimentalSoundshare() ||
                    (K.Z.supportsSystemScreensharePicker() && (0, $.isMac)()),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.GmWk2N), eJ.intl.string(eJ.t["Fj/xn5"])],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => K.Z.supportsVideoHook(),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t["4I0qzc"])],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => K.Z.supportsExperimentalSoundshare() && K.Z.supportsHookSoundshare(),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.ie1mgY)],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => K.Z.supportsSystemScreensharePicker() && (0, $.isMac)(),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t["aP1N/v"])],
                parent: tp ? eW.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eW.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => $.isPlatformEmbedded,
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.OFpL3d)],
                parent: tp ? eW.s6.VOICE_AND_VIDEO_DEBUG_TAB : eW.s6.VOICE_AND_VIDEO_ADVANCED,
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t["0CEP6e"])],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => et.Sb.getSetting(),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t["r6K+TE"])],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => K.Z.isAecDumpSupported(),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t.U4FgFB)],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === ee.ZP.releaseChannel || "development" === ee.ZP.releaseChannel) &&
                    e9 &&
                    K.Z.supports(eX.AN.CONNECTION_REPLAY),
            },
            [eW.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t["726JHB"])],
                parent: eW.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    $.isPlatformEmbedded && K.Z.supports(eX.AN.DEBUG_LOGGING) && null != g.Z.fileManager.readLogFiles,
            },
            [eW.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eK.oAB.VOICE,
                searchableTitles: [eJ.intl.string(eJ.t["/RXu6+"])],
                parent: tp ? eW.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING : eW.s6.VOICE_AND_VIDEO_ADVANCED,
            },
            [eW.s6.CLICKER_GAME]: {
                url: eK.Z5c.SETTINGS("clicker-game"),
                section: eK.oAB.CLICKER_GAME,
                searchableTitles: [eJ.intl.string(eQ.default["7qZdOz"])],
                label: eJ.intl.string(eQ.default["7qZdOz"]),
                ariaLabel: eJ.intl.string(eQ.default["7qZdOz"]),
                element: j.Z,
                predicate: () =>
                    _.C.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enableGame,
                icon: (0, i.jsx)("img", {
                    alt: "",
                    src: n(186542),
                    className: e1.clickerGameIcon,
                }),
            },
            [eW.s6.POGGERMODE]: {
                section: eK.oAB.POGGERMODE,
                searchableTitles: [eJ.intl.string(eJ.t.AtCukJ)],
                label: eJ.intl.string(eJ.t.AtCukJ),
                ariaLabel: eJ.intl.string(eJ.t.AtCukJ),
                element: k.Z,
                predicate: () => w.Z.settingsVisible,
                icon: (0, i.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: e1.poggermodeIcon,
                }),
            },
            [eW.s6.CHAT]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t["/VQax8"])],
                label: eJ.intl.string(eJ.t["/VQax8"]),
                ariaLabel: eJ.intl.string(eJ.t["/VQax8"]),
                element: eD.Z,
                url: eK.Z5c.SETTINGS("chat"),
            },
            [eW.s6.CHAT_INLINE_MEDIA]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t.U68Dgo)],
                parent: eW.s6.CHAT,
            },
            [eW.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t.U47N1t)],
                parent: eW.s6.CHAT_INLINE_MEDIA,
            },
            [eW.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t.VP11Nj)],
                parent: eW.s6.CHAT_INLINE_MEDIA,
            },
            [eW.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t["5S2AKy"])],
                parent: eW.s6.CHAT_INLINE_MEDIA,
            },
            [eW.s6.CHAT_EMBEDS]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t.PWZOn5)],
                parent: eW.s6.CHAT,
            },
            [eW.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t.xX0ZTE)],
                parent: eW.s6.CHAT_EMBEDS,
            },
            [eW.s6.CHAT_EMOJI]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t.sMOuub)],
                parent: eW.s6.CHAT,
            },
            [eW.s6.CHAT_EMOJI_REACTIONS]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t.Iv24sr)],
                parent: eW.s6.CHAT_EMOJI,
            },
            [eW.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t["79qal5"])],
                parent: eW.s6.CHAT_EMOJI,
            },
            [eW.s6.CHAT_STICKERS]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t["6NtAuL"])],
                parent: eW.s6.CHAT,
            },
            [eW.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t["29xPVV"])],
                parent: eW.s6.CHAT_STICKERS,
            },
            [eW.s6.CHAT_SOUNDMOJI]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t.EHlAMT)],
                parent: eW.s6.CHAT,
            },
            [eW.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t["CtYr+f"])],
                parent: eW.s6.CHAT_SOUNDMOJI,
            },
            [eW.s6.CHAT_TEXT_BOX]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t.afR0pK)],
                parent: eW.s6.CHAT,
            },
            [eW.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t.AqGrEB)],
                parent: eW.s6.CHAT_TEXT_BOX,
            },
            [eW.s6.CHAT_THREADS]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t.B2panJ)],
                parent: eW.s6.CHAT,
            },
            [eW.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t.AInv5u)],
                parent: eW.s6.CHAT_THREADS,
            },
            [eW.s6.CHAT_SPOILERS]: {
                section: eK.oAB.TEXT,
                searchableTitles: [eJ.intl.string(eJ.t.QgwmV1)],
                parent: eW.s6.CHAT,
            },
            [eW.s6.NOTIFICATIONS]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.HcoRu7)],
                label: eJ.intl.string(eJ.t.HcoRu7),
                ariaLabel: eJ.intl.string(eJ.t.HcoRu7),
                element: eI.Z,
                url: eK.Z5c.SETTINGS("notifications"),
            },
            [eW.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t["/0WClp"])],
                parent: eW.s6.NOTIFICATIONS,
            },
            [eW.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eW.s6.NOTIFICATIONS,
            },
            [eW.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.VH8AIC)],
                parent: eW.s6.NOTIFICATIONS,
            },
            [eW.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.xSmFQE)],
                parent: eW.s6.NOTIFICATIONS,
                predicate: () => (0, $.isWindows)(),
            },
            [eW.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.z21l8P)],
                parent: eW.s6.NOTIFICATIONS,
            },
            [eW.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: ["New Notification Settings (Advanced, Staff Only)"],
                parent: eW.s6.NOTIFICATIONS,
                predicate: () => !1,
            },
            [eW.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: ["Restore most recent snapshot"],
                parent: eW.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eW.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: ["Launch Migration"],
                parent: eW.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eW.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: ["Toggle new system on/off"],
                parent: eW.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eW.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.TTvjd3)],
                parent: eW.s6.NOTIFICATIONS,
            },
            [eW.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.VpSKeH)],
                parent: eW.s6.NOTIFICATIONS,
            },
            [eW.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.D9yVAA)],
                parent: eW.s6.NOTIFICATIONS,
            },
            [eW.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.u6dc5O)],
                parent: eW.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eW.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.P8MG6u)],
                parent: eW.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eW.s6.NOTIFICATIONS_SOUNDS]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.MKWyKS)],
                parent: eW.s6.NOTIFICATIONS,
            },
            [eW.s6.NOTIFICATIONS_EMAILS]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.TPchzM)],
                parent: eW.s6.NOTIFICATIONS,
            },
            [eW.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t["B75+xc"])],
                parent: eW.s6.NOTIFICATIONS_EMAILS,
            },
            [eW.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.sxn7lZ)],
                parent: eW.s6.NOTIFICATIONS_EMAILS,
            },
            [eW.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.EkxXhY)],
                parent: eW.s6.NOTIFICATIONS_EMAILS,
            },
            [eW.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.jNrkrK)],
                parent: eW.s6.NOTIFICATIONS_EMAILS,
            },
            [eW.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.E8g1l5)],
                parent: eW.s6.NOTIFICATIONS_EMAILS,
            },
            [eW.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.Ra9Pws)],
                parent: eW.s6.NOTIFICATIONS_EMAILS,
            },
            [eW.s6.NOTIFICATIONS_REACTIONS]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.Rq0NFh)],
                parent: eW.s6.NOTIFICATIONS,
            },
            [eW.s6.NOTIFICATIONS_GAME_ACTIVITY]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.omtoJy), eJ.intl.string(eJ.t.SZue3N)],
                parent: eW.s6.NOTIFICATIONS,
                predicate: () => (0, A.uw)("SettingsRendererConfig"),
            },
            [eW.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eK.oAB.NOTIFICATIONS,
                searchableTitles: [eJ.intl.string(eJ.t.wtk08f)],
                parent: eW.s6.NOTIFICATIONS,
                predicate: () => (0, z.JN)("SettingsRendererConfig"),
            },
            [eW.s6.KEYBINDS]: {
                section: eK.oAB.KEYBINDS,
                searchableTitles: [eJ.intl.string(eJ.t.T9DA2N)],
                label: eJ.intl.string(eJ.t.T9DA2N),
                element: eS.Z,
                url: eK.Z5c.SETTINGS("keybinds"),
            },
            [eW.s6.LANGUAGE]: {
                section: eK.oAB.LOCALE,
                searchableTitles: [eJ.intl.string(eJ.t.IHMsPj)],
                label: eJ.intl.string(eJ.t.IHMsPj),
                element: eT.Z,
                url: eK.Z5c.SETTINGS("language"),
            },
            [eW.s6.WINDOW_SETTINGS]: {
                section: eK.oAB.WINDOWS,
                searchableTitles: [eJ.intl.string(eJ.t.ZkDZoq)],
                label: eJ.intl.string(eJ.t.ZkDZoq),
                element: ek.Z,
                predicate: () => $.isPlatformEmbedded && (0, $.isWindows)(),
            },
            [eW.s6.LINUX_SETTINGS]: {
                section: eK.oAB.LINUX,
                searchableTitles: [eJ.intl.string(eJ.t["7pPjTU"])],
                label: eJ.intl.string(eJ.t["7pPjTU"]),
                element: e5,
                predicate: () => $.isPlatformEmbedded && (0, $.isLinux)(),
            },
            [eW.s6.STREAMER_MODE]: {
                section: eK.oAB.STREAMER_MODE,
                searchableTitles: [eJ.intl.string(eJ.t.S5GfOT)],
                label: eJ.intl.string(eJ.t.S5GfOT),
                ariaLabel: eJ.intl.string(eJ.t.S5GfOT),
                element: eR.Z,
                url: eK.Z5c.SETTINGS("streamer-mode"),
            },
            [eW.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eK.oAB.STREAMER_MODE,
                searchableTitles: [eJ.intl.string(eJ.t.bxGbHB)],
                parent: eW.s6.STREAMER_MODE,
            },
            [eW.s6.STREAMER_MODE_ENABLE]: {
                section: eK.oAB.STREAMER_MODE,
                searchableTitles: [eJ.intl.string(eJ.t.p9ZAJS)],
                parent: eW.s6.STREAMER_MODE,
            },
            [eW.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eK.oAB.STREAMER_MODE,
                searchableTitles: [eJ.intl.string(eJ.t.UpQziI)],
                parent: eW.s6.STREAMER_MODE,
            },
            [eW.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eK.oAB.STREAMER_MODE,
                searchableTitles: [eJ.intl.string(eJ.t.q7WNGh)],
                parent: eW.s6.STREAMER_MODE,
            },
            [eW.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eK.oAB.STREAMER_MODE,
                searchableTitles: [eJ.intl.string(eJ.t["1CWknJ"])],
                parent: eW.s6.STREAMER_MODE,
            },
            [eW.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eK.oAB.STREAMER_MODE,
                searchableTitles: [eJ.intl.string(eJ.t.qmYiYW)],
                parent: eW.s6.STREAMER_MODE,
            },
            [eW.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eK.oAB.STREAMER_MODE,
                searchableTitles: [eJ.intl.string(eJ.t["iA81+f"])],
                parent: eW.s6.STREAMER_MODE,
                predicate: () => {
                    var e, t, n;
                    return (
                        null !=
                            (n =
                                null === g.Z ||
                                void 0 === g.Z ||
                                null == (t = g.Z.window) ||
                                null == (e = t.supportsContentProtection)
                                    ? void 0
                                    : e.call(t)) && n
                    );
                },
            },
            [eW.s6.SETTINGS_ADVANCED]: {
                section: eK.oAB.ADVANCED,
                searchableTitles: [eJ.intl.string(eJ.t["8/udY2"])],
                label: eJ.intl.string(eJ.t["8/udY2"]),
                ariaLabel: eJ.intl.string(eJ.t["8/udY2"]),
                element: em.Z,
            },
            [eW.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eK.oAB.ADVANCED,
                searchableTitles: [eJ.intl.string(eJ.t.ObIb1d)],
                parent: eW.s6.SETTINGS_ADVANCED,
                predicate: () => J.wS,
            },
            [eW.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eK.oAB.ADVANCED,
                searchableTitles: [eJ.intl.string(eJ.t["eOC/Fx"])],
                parent: eW.s6.SETTINGS_ADVANCED,
                predicate: () => $.isPlatformEmbedded,
            },
            [eW.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eK.oAB.ADVANCED,
                searchableTitles: [eJ.intl.string(eJ.t.fi3UQE)],
                parent: eW.s6.SETTINGS_ADVANCED,
                predicate: () => ts,
            },
            [eW.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eK.oAB.ADVANCED,
                searchableTitles: [eJ.intl.string(eJ.t.erOqlp)],
                parent: eW.s6.SETTINGS_ADVANCED,
                predicate: () => tl,
            },
            [eW.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eK.oAB.ADVANCED,
                searchableTitles: [eJ.intl.string(eJ.t.qDZryM)],
                parent: eW.s6.SETTINGS_ADVANCED,
            },
            [eW.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eK.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: eW.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    b.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [eW.s6.ACTIVITY_PRIVACY]: {
                section: eK.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eJ.intl.string(eJ.t.Cq98yM)],
                label: eJ.intl.string(eJ.t.Cq98yM),
                ariaLabel: eJ.intl.string(eJ.t.Cq98yM),
                element: eu.Z,
                predicate: () => !e7,
                url: eK.Z5c.SETTINGS("activity-privacy"),
            },
            [eW.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: e7 ? eK.oAB.GAMES : eK.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eJ.intl.string(eJ.t["8ka8lp"])],
                parent: e7 ? eW.s6.GAMES_ACTIVITY_PRIVACY : eW.s6.ACTIVITY_PRIVACY,
            },
            [eW.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: e7 ? eK.oAB.GAMES : eK.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eJ.intl.string(eJ.t.VOszPD)],
                parent: e7 ? eW.s6.GAMES_ACTIVITY_PRIVACY : eW.s6.ACTIVITY_PRIVACY,
            },
            [eW.s6.ACTIVITY_PRIVACY_TOS]: {
                section: e7 ? eK.oAB.GAMES : eK.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eW.CF],
                parent: e7 ? eW.s6.GAMES_ACTIVITY_PRIVACY : eW.s6.ACTIVITY_PRIVACY,
            },
            [eW.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eK.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eJ.intl.string(eJ.t["4F2KoK"])],
                parent: eW.s6.ACTIVITY_PRIVACY,
            },
            [eW.s6.REGISTERED_GAMES]: {
                section: eK.oAB.REGISTERED_GAMES,
                searchableTitles: [eJ.intl.string(eJ.t.AVDyEh)],
                label: eJ.intl.string(eJ.t.AVDyEh),
                element: eC.Z,
                predicate: () => !e7 && (0, eM.Jw)(),
            },
            [eW.s6.OVERLAY]: {
                section: eK.oAB.OVERLAY,
                searchableTitles: [eJ.intl.string(eJ.t["9cb1U1"]), eJ.intl.string(eJ.t.HcoRu7)],
                label: eJ.intl.string(eJ.t["9cb1U1"]),
                element: eN.Z,
                predicate: () => !e7 && Z,
            },
            [eW.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, x.Z)(!0),
                searchableTitles: [eJ.intl.string(eJ.t.LRmNAg)],
                label: eJ.intl.string(eJ.t.LRmNAg),
            },
            [eW.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    X.default.track(eK.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, Q.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                X.default.track(eK.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, h.Z)(e);
                            },
                        });
                },
                searchableTitles: [eJ.intl.string(eJ.t.sMEktb)],
                label: eJ.intl.string(eJ.t.sMEktb),
                ariaLabel: eJ.intl.string(eJ.t.sMEktb),
            },
            [eW.s6.HYPESQUAD]: {
                section: eK.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eJ.intl.string(eJ.t["k0R+4e"])],
                label: eJ.intl.string(eJ.t["k0R+4e"]),
                element: eO.Z,
                predicate: () => !td,
            },
            [eW.s6.TOWNHALL]: {
                section: eK.oAB.TOWNHALL,
                searchableTitles: [eJ.intl.string(eJ.t.dnZNER)],
                label: eJ.intl.string(eJ.t.dnZNER),
                predicate: () => td,
                onClick: () => {
                    (0, h.Z)("https://discord.gg/discord-townhall"), (0, d.xf)();
                },
            },
            [eW.s6.EXPERIMENTS]: {
                section: eK.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: eL.Z,
                predicate: () => W.Z.isDeveloper,
                url: eK.Z5c.SETTINGS("experiments"),
            },
            [eW.s6.DEVELOPER_OPTIONS]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: ej.Z,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eW.s6.DEVELOPER_OPTIONS,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eW.s6.DEVELOPER_OPTIONS,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eW.s6.DEVELOPER_OPTIONS,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eW.s6.DEVELOPER_OPTIONS,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eW.s6.DEVELOPER_OPTIONS,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eW.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eW.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eW.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eW.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eW.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eW.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eW.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e9 && W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eW.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eW.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eW.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e9 && W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eW.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eW.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eW.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e9 && W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Toggleable Components"],
                parent: eW.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e9 && W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eW.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e9 && W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eW.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e9 && W.Z.isDeveloper && Y.default.layoutDebuggingEnabled,
            },
            [eW.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eW.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e9 && W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eW.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e9 && W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eW.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eW.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eW.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eW.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eW.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eW.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => f.q && W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eW.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eW.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eW.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eW.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eW.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eK.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eW.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.HOTSPOT_OPTIONS]: {
                section: eK.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ["Hotspot Options"],
                label: "Hotspot Options",
                element: ei.Z,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eK.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ["Dismissible Contents"],
                label: "Dismissible Contents",
                element: I.Z,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.PAYMENT_FLOW_MODALS]: {
                section: eK.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ["Payment Flow Modals"],
                label: "Payment Flow Modals",
                element: es.Z,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.REVENUE_STORYBOOK]: {
                section: eK.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: [
                    "Revenue Storybook",
                    "Payment Components",
                    "Orb Components",
                    "Virtual Currency",
                    "Nitro Components",
                ],
                label: "Revenue Storybook",
                element: eF.Z,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eK.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ["Virtual Currency", "Orb", "Config"],
                label: "Virtual Currency Config",
                element: eH.Z,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.PAYMENT_COMPONENTS]: {
                section: eK.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Payment Components"],
                label: "Payment Components",
                element: eF.Z,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.ORB_COMPONENTS]: {
                section: eK.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Orb Components"],
                label: "Orb Components",
                element: eF.Z,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.NITRO_COMPONENTS]: {
                section: eK.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Nitro Components"],
                label: "Nitro Components",
                element: eF.Z,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.TEXT_PLAYGROUND]: {
                section: eK.oAB.TEXT_PLAYGROUND,
                searchableTitles: ["Text Playground"],
                label: "Text Playground",
                element: eZ.Z,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DESIGN_SYSTEMS]: {
                section: eK.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Design Systems"],
                label: "Design Systems",
                element: e_.Z,
                predicate: () => W.Z.isDeveloper,
                url: eK.Z5c.SETTINGS("design-systems"),
            },
            [eW.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eK.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Colors"],
                label: "Colors",
                element: e_.Z,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.ANIMATION_TESTING]: {
                section: eK.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Animation Testing"],
                label: "Animation Testing",
                element: e_.Z,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eK.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Components"],
                label: "Components",
                element: e_.Z,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.TEXT_COMPONENTS]: {
                section: eK.oAB.TEXT_COMPONENT,
                searchableTitles: ["Text Components"],
                label: "Text Components",
                element: eo.Z,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.INTL_TESTING]: {
                section: eK.oAB.INTL_TESTING,
                searchableTitles: ["Intl Testing", "i18n"],
                label: "Intl Testing",
                element: D.Z,
                predicate: () => e9 || W.Z.isDeveloper,
            },
            [eW.s6.SHOP_KEEPER]: {
                section: eK.oAB.SHOP_KEEPER,
                searchableTitles: ["Shop Keeper"],
                label: "Shop Keeper",
                element: S.Z,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.QUEST_PREVIEW_TOOL]: {
                section: eK.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ["Quest Preview Tool"],
                label: "Quest Preview Tool",
                element: G.Z,
                predicate: () => (0, U.X7)({ location: eq.dr.QUEST_PREVIEW_TOOL }),
            },
            [eW.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG]: {
                section: eK.oAB.QUEST_MINOR_REWARD_CAPPING_CONFIG,
                searchableTitles: ["Minor Reward Capping Config"],
                label: "Minor Reward Capping Config",
                element: V.Z,
                predicate: () => e9,
            },
            [eW.s6.WEB_SETTING_TREE_TOOL]: {
                section: eK.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ["Web Setting Tree Tool"],
                label: "Web Setting Tree Tool",
                element: eB.Z,
                predicate: () => W.Z.isDeveloper,
            },
            [eW.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, l.h7j)((e) => {
                        var t, n;
                        return (0, i.jsx)(
                            l.ConfirmModal,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })(
                                {
                                    header: eJ.intl.string(eJ.t["2jxGen"]),
                                    confirmText: eJ.intl.string(eJ.t["2jxGen"]),
                                    cancelText: eJ.intl.string(eJ.t["ETE/oK"]),
                                    onCancel: e.onClose,
                                    onConfirm: () => c.Z.logout("settings"),
                                },
                                e,
                            )),
                            (n = n =
                                {
                                    children: (0, i.jsx)(l.Text, {
                                        variant: "text-md/normal",
                                        children: eJ.intl.string(eJ.t.SUnWBA),
                                    }),
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
                            t),
                        );
                    });
                },
                label: eJ.intl.string(eJ.t["2jxGen"]),
                ariaLabel: eJ.intl.string(eJ.t["2jxGen"]),
                icon: (0, i.jsx)(l.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [eW.s6.SOCIAL_LINKS]: {
                section: p.ID.CUSTOM,
                element: el.Z,
            },
            [eW.s6.CLIENT_DEBUG_INFO]: {
                section: p.ID.CUSTOM,
                element: en.Z,
            },
        });
    };
