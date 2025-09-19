n.d(t, {
    $Z: () => e$,
    OF: () => e1,
    W8: () => e2,
    c$: () => e0,
    iE: () => e4,
}),
    n(539854),
    n(388685);
var r = n(951288);
n(647438);
var i = n(990547),
    a = n(704215),
    o = n(692547),
    s = n(481060),
    l = n(570140),
    c = n(893776),
    u = n(809206),
    d = n(230711),
    f = n(493544),
    _ = n(579806),
    p = n(782568),
    h = n(368763),
    m = n(758182),
    g = n(49226),
    E = n(163379),
    b = n(803038),
    y = n(703288),
    O = n(574755),
    v = n(675997),
    I = n(994714),
    T = n(377171),
    S = n(243778),
    A = n(594928),
    C = n(18438),
    N = n(778825),
    R = n(351780),
    P = n(231765),
    w = n(813732),
    D = n(398140),
    x = n(564344),
    L = n(36243),
    j = n(652380),
    M = n(877109),
    k = n(145158),
    U = n(172416),
    G = n(462354),
    B = n(906467),
    Z = n(857192),
    F = n(131951),
    V = n(25990),
    H = n(626135),
    Y = n(572004),
    W = n(49012),
    K = n(358085),
    z = n(998502),
    q = n(695346),
    X = n(604227),
    Q = n(321614),
    J = n(498639),
    $ = n(748717),
    ee = n(419636),
    et = n(799071),
    en = n(154022),
    er = n(393681),
    ei = n(309739),
    ea = n(64914),
    eo = n(501348),
    es = n(795594),
    el = n(443702),
    ec = n(327192),
    eu = n(949493),
    ed = n(675047),
    ef = n(177508),
    e_ = n(956699),
    ep = n(54942),
    eh = n(293389),
    em = n(88624),
    eg = n(387747),
    eE = n(389650),
    eb = n(649157),
    ey = n(593648),
    eO = n(327885),
    ev = n(595242),
    eI = n(463153),
    eT = n(36192),
    eS = n(889029),
    eA = n(400287),
    eC = n(554042),
    eN = n(936982),
    eR = n(200645),
    eP = n(342386),
    ew = n(924983),
    eD = n(287490),
    ex = n(168308),
    eL = n(277329),
    ej = n(273927),
    eM = n(604224),
    ek = n(43434),
    eU = n(333576),
    eG = n(345655),
    eB = n(726985),
    eZ = n(583139),
    eF = n(981631),
    eV = n(46140),
    eH = n(65154),
    eY = n(388032),
    eW = n(693450),
    eK = n(345909),
    ez = n(202323);
function eq(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eX(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                eq(e, t, n[t]);
            });
    }
    return e;
}
function eQ(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eJ(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eQ(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let e$ = () => {
        let e = [a.z.CLIENT_THEMES_SETTINGS_BADGE, a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
        return (
            b.Mc.getCurrentConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            h.n.getConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE),
            e
        );
    },
    e0 = () => {
        let e = e$(),
            [t] = (0, S.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: eY.intl.string(eY.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ||
                t === a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE
              ? (0, r.jsx)(s.IGR, { text: eY.intl.string(eY.t.y2b7CA) })
              : null;
    },
    e1 = () => {
        let e = [];
        return (
            (0, U.h)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            A.J.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    e2 = () => {
        let e = e1(),
            [t] = (0, S.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: eY.intl.string(eY.t.y2b7CA) })
            : null;
    },
    e3 = eR.Z,
    e4 = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: h,
            searchParams: b,
            numOfPendingFamilyRequests: S,
            isOverlaySupported: A,
            isClipsBetaTagShowing: U = !1,
            shouldMergeGameSettings: eq,
            isKeywordFilteringEnabled: eQ,
            isStaff: e4,
            isInappropriateConversationWarningEnabled: e8,
            isInapproprateConversationsDefaultOn: e5,
            paymentsBlocked: e6,
            isEligibleForQuests: e7,
            isStricterMessageRequestsEnabled: e9,
            hasLibraryApplication: te,
            hasTOTPEnabled: tt,
            developerMode: tn,
            isAdultUser: tr,
            hasSecureFramesVerifiedUserIds: ti,
            hypeSquadRemoved: ta,
            hasIgnoredUsers: to,
            hasBlockedUsers: ts,
            isEligibleForSensitiveContentDefaults: tl,
            inputMode: tc,
            activeInputProfile: tu,
            isInputProfileCustom: td,
            isDataUsage3PToggleEnabled: tf,
        } = e;
        return Object.freeze({
            [eB.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: eI.Z,
            },
            [eB.s6.ACCOUNT_SECURITY_TAB]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t.Am9YHh)],
                label: eY.intl.string(eY.t.Am9YHh),
            },
            [eB.s6.ACCOUNT]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t["JAIM/v"])],
                label: eY.intl.string(eY.t["JAIM/v"]),
                ariaLabel: eY.intl.string(eY.t["JAIM/v"]),
                element: er.Z,
                url: eF.Z5c.SETTINGS("account"),
            },
            [eB.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eY.intl.string(eY.t.LYju5O)],
                parent: eB.s6.ACCOUNT,
                section: eF.oAB.ACCOUNT,
            },
            [eB.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eY.intl.string(eY.t["9AjdkJ"])],
                section: eF.oAB.ACCOUNT,
                parent: eB.s6.ACCOUNT_PROFILE,
            },
            [eB.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eY.intl.string(eY.t.Ulqq6O)],
                section: eF.oAB.ACCOUNT,
                parent: eB.s6.ACCOUNT_PROFILE,
            },
            [eB.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    eY.intl.string(eY.t["/52UY2"]),
                    eY.intl.string(eY.t.sK0dmJ),
                    eY.intl.string(eY.t.XxRj7e),
                    eY.intl.string(eY.t.yNGjyM),
                    eY.intl.string(eY.t.KPGVWl),
                ],
                section: eF.oAB.ACCOUNT,
                parent: eB.s6.ACCOUNT_PROFILE,
                predicate: () => tl,
            },
            [eB.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eY.intl.string(eY.t["+JkHPz"])],
                section: eF.oAB.ACCOUNT,
                parent: eB.s6.ACCOUNT_PROFILE,
            },
            [eB.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eY.intl.string(eY.t.oP5zGB)],
                section: eF.oAB.ACCOUNT,
                parent: eB.s6.ACCOUNT_PROFILE,
            },
            [eB.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eY.intl.string(eY.t.pKSjEh)],
                section: eF.oAB.ACCOUNT,
                parent: eB.s6.ACCOUNT,
            },
            [eB.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eY.intl.string(eY.t["FRep5+"])],
                section: eF.oAB.ACCOUNT,
                parent: eB.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eB.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eY.intl.string(eY.t["7qKDrK"])],
                section: eF.oAB.ACCOUNT,
                parent: eB.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eB.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eY.intl.string(eY.t.m0FidH)],
                section: eF.oAB.ACCOUNT,
                parent: eB.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eB.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eY.intl.string(eY.t.cDgKtb)],
                section: eF.oAB.ACCOUNT,
                parent: eB.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !tt,
            },
            [eB.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eY.intl.string(eY.t["D+aE7u"])],
                section: eF.oAB.ACCOUNT,
                parent: eB.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => tt,
            },
            [eB.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eY.intl.string(eY.t.fZSi1N)],
                section: eF.oAB.ACCOUNT,
                parent: eB.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eB.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eY.intl.string(eY.t.uHAJ5u)],
                section: eF.oAB.ACCOUNT,
                parent: eB.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eB.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eY.intl.string(eY.t.vrOCCg)],
                section: eF.oAB.ACCOUNT,
                parent: eB.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eB.s6.ACCOUNT_REMOVAL]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t.ZKsIkp)],
                parent: eB.s6.ACCOUNT,
            },
            [eB.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t.jf5GGR)],
                parent: eB.s6.ACCOUNT_REMOVAL,
            },
            [eB.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t["8lQ2ra"])],
                parent: eB.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eB.s6.GAMES]: {
                section: eF.oAB.GAMES,
                searchableTitles: [eY.intl.string(eY.t.URyqtL)],
                label: eY.intl.string(eY.t.URyqtL),
                ariaLabel: eY.intl.string(eY.t.URyqtL),
                element: eL.Z,
                predicate: () => eq,
            },
            [eB.s6.GAMES_MY_GAMES]: {
                section: eF.oAB.GAMES,
                searchableTitles: [eY.intl.string(eY.t["5DMgp6"])],
                parent: eB.s6.GAMES,
            },
            [eB.s6.GAMES_CLIPS]: {
                section: eF.oAB.GAMES,
                searchableTitles: [eY.intl.string(eY.t.z2jK6e)],
                parent: eB.s6.GAMES,
            },
            [eB.s6.GAMES_OVERLAY]: {
                section: eF.oAB.GAMES,
                searchableTitles: [eY.intl.string(eY.t["9cb1U1"])],
                parent: eB.s6.GAMES,
            },
            [eB.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eF.oAB.GAMES,
                searchableTitles: [eY.intl.string(eY.t.Cq98yM)],
                parent: eB.s6.GAMES,
            },
            [eB.s6.PROFILE_CUSTOMIZATION]: {
                section: eF.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [eY.intl.string(eY.t["vi7f+v"])],
                label: eY.intl.string(eY.t["vi7f+v"]),
                ariaLabel: eY.intl.string(eY.t["vi7f+v"]),
                element: x.Z,
                newIndicator: (0, r.jsx)(e2, {}),
                newIndicatorDismissibleContentTypes: [...e1()],
                notice: {
                    stores: [V.Z, N.Z],
                    element: D.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, C.It)(), (0, u.P6)(), d.Z.clearSubsection(eF.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eF.Z5c.SETTINGS("profile-customization"),
            },
            [eB.s6.PROFILE_DISPLAY_NAME]: {
                section: eF.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eY.intl.string(eY.t["9AjdkJ"])],
                parent: eB.s6.PROFILE_CUSTOMIZATION,
            },
            [eB.s6.PROFILE_USER_PROFILE]: {
                section: eF.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eY.intl.string(eY.t["2p07FR"]), eY.intl.string(eY.t["7vhiqq"])],
                parent: eB.s6.PROFILE_CUSTOMIZATION,
            },
            [eB.s6.PROFILE_SERVER_PROFILES]: {
                section: eF.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eY.intl.string(eY.t.kPHroa)],
                parent: eB.s6.PROFILE_CUSTOMIZATION,
            },
            [eB.s6.CONTENT_SOCIAL]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                label: eY.intl.string(eY.t["+o1pDQ"]),
                searchableTitles: [eY.intl.string(eY.t["+o1pDQ"])],
                ariaLabel: eY.intl.string(eY.t["+o1pDQ"]),
                element: eu.Z,
                url: eF.Z5c.SETTINGS("content-and-social"),
            },
            [eB.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t["+o1pDQ"]), eY.intl.string(eY.t["/7xJCA"])],
                parent: eB.s6.CONTENT_SOCIAL,
            },
            [eB.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t["+o1pDQ"]), eY.intl.string(eY.t["/7xJCA"])],
                parent: eB.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eB.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.YpCiMj)],
                parent: eB.s6.CONTENT_SOCIAL,
            },
            [eB.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                label: eY.intl.string(eY.t.YpCiMj),
                searchableTitles: [eY.intl.string(eY.t.YpCiMj)],
                ariaLabel: eY.intl.string(eY.t.YpCiMj),
                parent: eB.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eF.Z5c.SETTINGS(eF.oAB.CONTENT_AND_SOCIAL, eZ.C),
            },
            [eB.s6.DATA_PRIVACY]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                label: eY.intl.string(eY.t.OAuOHB),
                searchableTitles: [eY.intl.string(eY.t.OAuOHB)],
                ariaLabel: eY.intl.string(eY.t.OAuOHB),
                element: ed.Z,
                url: eF.Z5c.SETTINGS("data-and-privacy"),
            },
            [eB.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eF.oAB.ACCOUNT,
                searchableTitles: [eY.intl.string(eY.t["Vov/9v"])],
                parent: eB.s6.ACCOUNT,
            },
            [eB.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.WWaFn5)],
                parent: eB.s6.DATA_PRIVACY,
                predicate: () => (0, K.isDesktop)(),
            },
            [eB.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t["opi/XF"])],
                parent: eB.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eB.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.xVRG4O)],
                parent: eB.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eB.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.fyA119)],
                parent: eB.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eB.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.fyA119)],
                parent: eB.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eB.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t["/U8Iwc"])],
                parent: eB.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eB.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t["ms+TmZ"])],
                parent: eB.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eB.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t["y62Z/f"])],
                parent: eB.s6.CONTENT_SOCIAL,
            },
            [eB.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.SRZyHh)],
                parent: eB.s6.DATA_PRIVACY,
            },
            [eB.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eY.intl.string(eY.t.uEz8JC),
                    eY.intl.string(eY.t["N/oRIy"]),
                    eY.intl.string(eY.t.QVdYsL),
                    eY.intl.string(eY.t["aWD+tr"]),
                    eY.intl.string(eY.t["5mnTa2"]),
                ],
                parent: eB.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eB.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eY.intl.string(eY.t["Hj/Bur"]),
                    eY.intl.string(eY.t["N/oRIy"]),
                    eY.intl.string(eY.t.QVdYsL),
                    eY.intl.string(eY.t["aWD+tr"]),
                    eY.intl.string(eY.t["5mnTa2"]),
                    eY.intl.string(eY.t.K0OWPz),
                ],
                parent: eB.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eB.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eY.intl.string(eY.t["Hj/Bur"]),
                    eY.intl.string(eY.t["N/oRIy"]),
                    eY.intl.string(eY.t.QVdYsL),
                    eY.intl.string(eY.t["aWD+tr"]),
                    eY.intl.string(eY.t["5mnTa2"]),
                ],
                parent: eB.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eB.s6.GORE_MEDIA_REDACTION]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eY.intl.string(eY.t["Hj/Bur"]),
                    eY.intl.string(eY.t["N/oRIy"]),
                    eY.intl.string(eY.t.QVdYsL),
                    eY.intl.string(eY.t["aWD+tr"]),
                    eY.intl.string(eY.t.K0OWPz),
                ],
                parent: eB.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eB.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eY.intl.string(eY.t.JzaP4u),
                    eY.intl.string(eY.t.H9XOl5),
                    eY.intl.string(eY.t.k4W40N),
                ],
                parent: eB.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eB.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t["L+yTsb"])],
                parent: eB.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eB.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.XahVjo)],
                parent: eB.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eB.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                parent: eB.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eB.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.RAQUSE), eY.intl.string(eY.t.wbYDfX)],
                parent: eB.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eB.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t["3o2ojo"])],
                parent: eB.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !e9,
            },
            [eB.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.OLwZDQ)],
                parent: eB.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eB.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.wBkwu7)],
                parent: eB.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eB.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.XuADY2)],
                parent: eB.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eB.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.MNKzys)],
                parent: eB.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eB.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.VkS7YW), eY.intl.string(eY.t.sJYh5u)],
                parent: eB.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eB.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.CyLYKS)],
                parent: eB.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                predicate: () => tf,
            },
            [eB.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eB.CF],
                parent: eB.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eB.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.dmBSKi)],
                parent: eB.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eB.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t["1UaUy8"]), eY.intl.string(eY.t["xIk/iI"])],
                parent: eB.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eQ,
            },
            [eB.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eY.intl.string(eY.t.qFsx5u)],
                parent: eB.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e8 && !tr && !e5,
            },
            [eB.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t["5b3FND"])],
                parent: eB.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => ti,
            },
            [eB.s6.PRIVACY_FAMILY_CENTER]: {
                section: eF.oAB.FAMILY_CENTER,
                searchableTitles: [eY.intl.string(eK.default.gntCQU)],
                label: eY.intl.string(eK.default.gntCQU),
                ariaLabel: eY.intl.string(eK.default.gntCQU),
                element: ep.Z,
                badgeCount: S,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eY.intl.string(eY.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eF.Z5c.SETTINGS("family-center"),
            },
            [eB.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eF.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.BG7Qsb)],
                parent: eB.s6.DATA_PRIVACY,
            },
            [eB.s6.AUTHORIZED_APPS]: {
                section: eF.oAB.AUTHORIZED_APPS,
                searchableTitles: [eY.intl.string(eY.t["f6kk+v"])],
                label: eY.intl.string(eY.t["f6kk+v"]),
                element: es.Z,
                url: eF.Z5c.SETTINGS("authorized-apps"),
            },
            [eB.s6.SESSIONS]: {
                section: eF.oAB.SESSIONS,
                searchableTitles: [eY.intl.string(eY.t["+1h0k5"])],
                label: eY.intl.string(eY.t["+1h0k5"]),
                ariaLabel: eY.intl.string(eY.t["+1h0k5"]),
                element: eT.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
            },
            [eB.s6.CONNECTIONS]: {
                section: eF.oAB.CONNECTIONS,
                searchableTitles: [eY.intl.string(eY.t["3fe7U1"])],
                label: eY.intl.string(eY.t["3fe7U1"]),
                ariaLabel: eY.intl.string(eY.t["3fe7U1"]),
                element: ec.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eF.Z5c.SETTINGS("connections"),
            },
            [eB.s6.THIRD_PARTY_ACCESS]: {
                section: eF.oAB.CONNECTIONS,
                searchableTitles: [
                    eY.intl.string(eY.t["Ig/XFR"]),
                    eY.intl.string(eY.t["3fe7U1"]),
                    eY.intl.string(eY.t["f6kk+v"]),
                ],
                label: eY.intl.string(eY.t["Ig/XFR"]),
                parent: eB.s6.CONNECTIONS,
                element: eN.Z,
            },
            [eB.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eF.oAB.CONNECTIONS,
                searchableTitles: [eY.intl.string(eY.t["+/hZMz"])],
                parent: eB.s6.CONNECTIONS,
                element: ec.Z,
            },
            [eB.s6.CLIPS]: {
                section: eF.oAB.CLIPS,
                searchableTitles: [eY.intl.string(eY.t.z2jK6e)],
                label: eY.intl.string(eY.t.z2jK6e),
                ariaLabel: eY.intl.string(eY.t.z2jK6e),
                icon: U ? (0, r.jsx)(y.Z, {}) : void 0,
                element: O.Z,
                predicate: () => !eq,
                url: eF.Z5c.SETTINGS("clips"),
            },
            [eB.s6.RESTRICTED_USERS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                parent: eB.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eY.intl.string(eY.t["3wRorq"]),
                element: ej.ZP,
                predicate: () => to || ts,
            },
            [eB.s6.BLOCKED_USERS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                parent: eB.s6.RESTRICTED_USERS,
                label: eY.intl.string(eY.t.PFOUKS),
                searchableTitles: [eY.intl.string(eY.t.PFOUKS)],
                element: ej.GF,
                predicate: () => ts,
            },
            [eB.s6.IGNORED_USERS]: {
                section: eF.oAB.CONTENT_AND_SOCIAL,
                parent: eB.s6.RESTRICTED_USERS,
                searchableTitles: [eY.intl.string(eY.t["93ZDWF"])],
                label: eY.intl.string(eY.t["93ZDWF"]),
                element: ej.yo,
                predicate: () => to,
            },
            [eB.s6.PREMIUM]: {
                section: eF.oAB.PREMIUM,
                ariaLabel: eY.intl.string(eY.t.Ipxkoq),
                searchableTitles: [eY.intl.string(eY.t.Ipxkoq)],
                label: eY.intl.string(eY.t.Ipxkoq),
                element: $.Z,
                className: ez.premiumTab,
            },
            [eB.s6.GUILD_BOOSTING]: {
                section: eF.oAB.GUILD_BOOSTING,
                searchableTitles: [eY.intl.string(eY.t["+CbP2t"])],
                label: eY.intl.string(eY.t["+CbP2t"]),
                element: ev.Z,
            },
            [eB.s6.SUBSCRIPTIONS]: {
                section: eF.oAB.SUBSCRIPTIONS,
                ariaLabel: eY.intl.string(eY.t.trSpHR),
                searchableTitles: [eY.intl.string(eY.t.trSpHR)],
                label: eY.intl.string(eY.t.trSpHR),
                element: w.Z,
                icon: h
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eB.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eF.oAB.SUBSCRIPTIONS,
                searchableTitles: [eY.intl.string(eY.t["2GKrvr"])],
                parent: eB.s6.SUBSCRIPTIONS,
            },
            [eB.s6.GIFT_INVENTORY]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t["jcSP+v"])],
                label: eY.intl.string(eY.t["jcSP+v"]),
                element: eg.Z,
                ariaLabel: eY.intl.string(eY.t["jcSP+v"]),
                badgeCount: t,
            },
            [eB.s6.GIFT_CODE_REDEMPTION]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t["il+VCg"])],
                parent: eB.s6.GIFT_INVENTORY,
                predicate: () => !e6,
            },
            [eB.s6.GIFT_INVENTORY_QUESTS]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t.JALI2N)],
                parent: eB.s6.GIFT_INVENTORY,
                predicate: () => e7,
            },
            [eB.s6.GIFT_INVENTORY_LIST]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t["9KeUbW"])],
                parent: eB.s6.GIFT_INVENTORY,
                predicate: () => !e6,
            },
            [eB.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eF.oAB.INVENTORY,
                searchableTitles: [eY.intl.string(eY.t.vwMEHR)],
                parent: eB.s6.GIFT_INVENTORY,
                predicate: () => e6,
            },
            [eB.s6.BILLING]: {
                section: eF.oAB.BILLING,
                searchableTitles: [eY.intl.string(eY.t.oeUm2t)],
                label: eY.intl.string(eY.t.oeUm2t),
                ariaLabel: eY.intl.string(eY.t.oeUm2t),
                element: el.Z,
            },
            [eB.s6.BILLING_PAYMENT_METHODS]: {
                section: eF.oAB.BILLING,
                searchableTitles: [eY.intl.string(eY.t.W26xGR)],
                parent: eB.s6.BILLING,
            },
            [eB.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eF.oAB.BILLING,
                searchableTitles: [eY.intl.string(eY.t.obLrcH)],
                parent: eB.s6.BILLING,
            },
            [eB.s6.APPEARANCE]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t["iHH+k5"])],
                label: eY.intl.string(eY.t["iHH+k5"]),
                ariaLabel: eY.intl.string(eY.t["iHH+k5"]),
                element: eo.Z,
                newIndicator: (0, r.jsx)(e0, {}),
                newIndicatorDismissibleContentTypes: e$(),
                url: eF.Z5c.SETTINGS("appearance"),
            },
            [eB.s6.APPEARANCE_THEME]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.Ksh3io)],
                parent: eB.s6.APPEARANCE,
            },
            [eB.s6.APPEARANCE_COLOR]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.OCOOiI)],
                parent: eB.s6.APPEARANCE_THEME,
            },
            [eB.s6.APPEARANCE_ICON]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.RPh2oq)],
                parent: eB.s6.APPEARANCE_THEME,
            },
            [eB.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.ZEoGMT)],
                parent: eB.s6.APPEARANCE,
            },
            [eB.s6.APPEARANCE_LIST_SPACING]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eB.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eY.intl.string(eY.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
            },
            [eB.s6.APPEARANCE_SCALING_SPACING]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [eY.intl.string(eY.t.qPOqoK)],
                parent: eB.s6.APPEARANCE,
            },
            [eB.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eF.oAB.APPEARANCE,
                searchableTitles: [
                    eY.intl.string(eY.t.dyamEB),
                    eY.intl.string(eY.t.p8NOws),
                    eY.intl.string(eY.t["+o/sOj"]),
                ],
                parent: eB.s6.APPEARANCE,
                predicate: () =>
                    k.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eB.s6.ACCESSIBILITY]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.G0neg4)],
                label: eY.intl.string(eY.t.G0neg4),
                ariaLabel: eY.intl.string(eY.t.G0neg4),
                element: en.Z,
                url: eF.Z5c.SETTINGS("accessibility"),
            },
            [eB.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.aZlePj)],
                parent: eB.s6.ACCESSIBILITY,
            },
            [eB.s6.ACCESSIBILITY_SATURATION]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t["5PWWCQ"])],
                parent: eB.s6.ACCESSIBILITY,
            },
            [eB.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.bQCodH)],
                parent: eB.s6.ACCESSIBILITY_SATURATION,
            },
            [eB.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.OLZFBw)],
                parent: eB.s6.ACCESSIBILITY,
            },
            [eB.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t["+IsihY"])],
                parent: eB.s6.ACCESSIBILITY,
                predicate: () => (0, v.l)("SettingsRendererConfig"),
            },
            [eB.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.uSOPWl)],
                parent: eB.s6.ACCESSIBILITY,
            },
            [eB.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eW.default["2gFUEx"])],
                parent: eB.s6.ACCESSIBILITY,
            },
            [eB.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.BT8Bmp)],
                parent: eB.s6.ACCESSIBILITY,
            },
            [eB.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t["sSY+mJ"])],
                parent: eB.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eB.s6.ACCESSIBILITY_CONTRAST]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.TYyfOz)],
                parent: eB.s6.ACCESSIBILITY,
            },
            [eB.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.cguieX)],
                parent: eB.s6.ACCESSIBILITY_CONTRAST,
            },
            [eB.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.e3TR1d)],
                parent: eB.s6.ACCESSIBILITY,
            },
            [eB.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.b3XBzs)],
                parent: eB.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eB.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.Iayoh4)],
                parent: eB.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eB.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.iIaOlZ)],
                parent: eB.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eB.s6.ACCESSIBILITY_STICKERS]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t["6NtAuL"])],
                parent: eB.s6.ACCESSIBILITY,
            },
            [eB.s6.ACCESSIBILITY_MESSAGES]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.onqU6u)],
                parent: eB.s6.ACCESSIBILITY,
            },
            [eB.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t["3Fztn5"])],
                parent: eB.s6.ACCESSIBILITY_MESSAGES,
            },
            [eB.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.TZ2hZG)],
                parent: eB.s6.ACCESSIBILITY_MESSAGES,
            },
            [eB.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.VpSKeH)],
                parent: eB.s6.ACCESSIBILITY,
            },
            [eB.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.qvTIwc)],
                parent: eB.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eB.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eY.intl.string(eY.t.lsW5Eh)],
                parent: eB.s6.ACCESSIBILITY,
            },
            [eB.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eF.oAB.ACCESSIBILITY,
                searchableTitles: [eB.CF],
                parent: eB.s6.ACCESSIBILITY,
            },
            [eB.s6.VOICE_AND_VIDEO]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.B1fFpa)],
                label: eY.intl.string(eY.t.B1fFpa),
                ariaLabel: eY.intl.string(eY.t.B1fFpa),
                element: eM.Z,
                predicate: () => F.Z.isSupported(),
                url: eF.Z5c.SETTINGS("voice"),
            },
            [eB.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.K3lovL), eY.intl.string(eY.t.NiTd0d)],
                parent: eB.s6.VOICE_AND_VIDEO,
            },
            [eB.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.FlNoSU)],
                parent: eB.s6.VOICE_AND_VIDEO,
            },
            [eB.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.ABjMWF)],
                parent: eB.s6.VOICE_AND_VIDEO,
            },
            [eB.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.OFpL3d)],
                parent: eB.s6.VOICE_AND_VIDEO,
            },
            [eB.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.KDdjoq), eY.intl.string(eY.t.FeUKeH)],
                parent: eB.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eB.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.K3lovL), eY.intl.string(eY.t.NiTd0d)],
                parent: eB.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eB.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eF.oAB.VOICE,
                searchableTitles: [
                    eY.intl.string(eY.t.hHMYbW),
                    eY.intl.string(eY.t.dl18zc),
                    eY.intl.string(eY.t.nuFtHB),
                    eY.intl.string(eY.t["3182VF"]),
                    eY.intl.string(eY.t["DGq/PT"]),
                ],
                parent: eB.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eB.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [
                    eY.intl.string(eY.t.OX2Bnp),
                    eY.intl.string(eY.t.eATD2N),
                    eY.intl.string(eY.t.nuFtHB),
                    eY.intl.string(eY.t["3182VF"]),
                    eY.intl.string(eY.t["DGq/PT"]),
                ],
                parent: eB.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eB.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.gyljWF), eY.intl.string(eY.t.nuFtHB)],
                parent: eB.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eB.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eF.oAB.VOICE,
                searchableTitles: [
                    eY.intl.string(eY.t.LM3U3t),
                    eY.intl.string(eY.t.nuFtHB),
                    eY.intl.string(eY.t.VZPR0d),
                    eY.intl.string(eY.t.cjPbpa),
                ],
                parent: eB.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, Q.R)({
                        location: "SettingsRendererConfig",
                        autoTrackExposure: !1,
                    });
                    return e.length > 0;
                },
            },
            [eB.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t["pS+K2N"]), eY.intl.string(eY.t.nuFtHB)],
                parent: eB.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tu !== eG._.STUDIO,
            },
            [eB.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t["sqUm+v"]), eY.intl.string(eY.t.nuFtHB)],
                parent: eB.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tc === eH.pM.VOICE_ACTIVITY && td,
            },
            [eB.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.e7LIiY)],
                parent: eB.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eB.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.nzUc3N)],
                parent: eB.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eB.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.ABjMWF)],
                parent: eB.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eB.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.nzUc3N)],
                parent: eB.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eB.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.LKzQSE)],
                parent: eB.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eB.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.F122Gx)],
                parent: eB.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => F.Z.supports(eH.AN.VIDEO),
            },
            [eB.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t["3Ppr1t"])],
                parent: eB.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eB.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.lZTUPj)],
                parent: eB.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => F.Z.supports(eH.AN.VIDEO),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t["8/udY2"])],
                parent: eB.s6.VOICE_AND_VIDEO,
            },
            [eB.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t["8/udY2"])],
                parent: eB.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => !(0, K.isWeb)(),
            },
            [eB.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t["8/udY2"])],
                parent: eB.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.Tceiq6)],
                parent: eB.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED,
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t["71Ve19"])],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => F.Z.supports(eH.AN.OPEN_H264),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.Sln58f)],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.AxnPm5)],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => "stable" !== z.ZP.releaseChannel && F.Z.isExperimentalEncodersSupported(),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t["6I6GUl"])],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => td,
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.iWTwu7)],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t["/jwMtr"])],
                parent: eB.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eB.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.OBwCXF)],
                parent: eB.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.t8QhiY), eY.intl.string(eY.t.hmfkCg)],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => F.Z.isNoiseSuppressionSupported(),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.BbESsr)],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => F.Z.isAdvancedVoiceActivitySupported(),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.cUMdHx)],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => F.Z.isAutomaticGainControlSupported(),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.DFPXIC)],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => F.Z.showBypassSystemInputProcessing(),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.uancuL)],
                parent: eB.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => F.Z.supports(eH.AN.QOS),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.oSdBvb)],
                parent: eB.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => F.Z.supports(eH.AN.ATTENUATION),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.wVBHr6)],
                parent: eB.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => F.Z.shouldOfferManualSubsystemSelection(),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eF.oAB.VOICE,
                searchableTitles: [
                    eY.intl.string(eY.t.KDdjoq),
                    eY.intl.string(eY.t.NMCIf3),
                    eY.intl.string(eY.t.FeUKeH),
                ],
                parent: eB.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    F.Z.supportsVideoHook() ||
                    F.Z.supportsExperimentalSoundshare() ||
                    (F.Z.supportsSystemScreensharePicker() && (0, K.isMac)()),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.GmWk2N), eY.intl.string(eY.t["Fj/xn5"])],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => F.Z.supportsVideoHook(),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t["4I0qzc"])],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => F.Z.supportsExperimentalSoundshare() && F.Z.supportsHookSoundshare(),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.ie1mgY)],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => F.Z.supportsSystemScreensharePicker() && (0, K.isMac)(),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t["aP1N/v"])],
                parent: eB.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => K.isPlatformEmbedded,
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.OFpL3d)],
                parent: eB.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t["0CEP6e"])],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => q.Sb.getSetting(),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t["r6K+TE"])],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => F.Z.isAecDumpSupported(),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t.U4FgFB)],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === z.ZP.releaseChannel || "development" === z.ZP.releaseChannel) &&
                    e4 &&
                    F.Z.supports(eH.AN.CONNECTION_REPLAY),
            },
            [eB.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t["726JHB"])],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    K.isPlatformEmbedded && F.Z.supports(eH.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [eB.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eF.oAB.VOICE,
                searchableTitles: [eY.intl.string(eY.t["/RXu6+"])],
                parent: eB.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eB.s6.POGGERMODE]: {
                section: eF.oAB.POGGERMODE,
                searchableTitles: [eY.intl.string(eY.t.AtCukJ)],
                label: eY.intl.string(eY.t.AtCukJ),
                ariaLabel: eY.intl.string(eY.t.AtCukJ),
                element: P.Z,
                predicate: () => R.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: ez.poggermodeIcon,
                }),
            },
            [eB.s6.CHAT]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t["/VQax8"])],
                label: eY.intl.string(eY.t["/VQax8"]),
                ariaLabel: eY.intl.string(eY.t["/VQax8"]),
                element: eA.Z,
                url: eF.Z5c.SETTINGS("text"),
            },
            [eB.s6.CHAT_INLINE_MEDIA]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.U68Dgo)],
                parent: eB.s6.CHAT,
            },
            [eB.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.U47N1t)],
                parent: eB.s6.CHAT_INLINE_MEDIA,
            },
            [eB.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.VP11Nj)],
                parent: eB.s6.CHAT_INLINE_MEDIA,
            },
            [eB.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t["5S2AKy"])],
                parent: eB.s6.CHAT_INLINE_MEDIA,
            },
            [eB.s6.CHAT_EMBEDS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.PWZOn5)],
                parent: eB.s6.CHAT,
            },
            [eB.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.xX0ZTE)],
                parent: eB.s6.CHAT_EMBEDS,
            },
            [eB.s6.CHAT_EMOJI]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.sMOuub)],
                parent: eB.s6.CHAT,
            },
            [eB.s6.CHAT_EMOJI_REACTIONS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.Iv24sr)],
                parent: eB.s6.CHAT_EMOJI,
            },
            [eB.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t["79qal5"])],
                parent: eB.s6.CHAT_EMOJI,
            },
            [eB.s6.CHAT_STICKERS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t["6NtAuL"])],
                parent: eB.s6.CHAT,
            },
            [eB.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t["29xPVV"])],
                parent: eB.s6.CHAT_STICKERS,
            },
            [eB.s6.CHAT_SOUNDMOJI]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.EHlAMT)],
                parent: eB.s6.CHAT,
            },
            [eB.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t["CtYr+f"])],
                parent: eB.s6.CHAT_SOUNDMOJI,
            },
            [eB.s6.CHAT_TEXT_BOX]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.afR0pK)],
                parent: eB.s6.CHAT,
            },
            [eB.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.AqGrEB)],
                parent: eB.s6.CHAT_TEXT_BOX,
            },
            [eB.s6.CHAT_THREADS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.B2panJ)],
                parent: eB.s6.CHAT,
            },
            [eB.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.AInv5u)],
                parent: eB.s6.CHAT_THREADS,
            },
            [eB.s6.CHAT_SPOILERS]: {
                section: eF.oAB.TEXT,
                searchableTitles: [eY.intl.string(eY.t.QgwmV1)],
                parent: eB.s6.CHAT,
            },
            [eB.s6.NOTIFICATIONS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.HcoRu7)],
                label: eY.intl.string(eY.t.HcoRu7),
                ariaLabel: eY.intl.string(eY.t.HcoRu7),
                element: ey.Z,
                url: eF.Z5c.SETTINGS("notifications"),
            },
            [eB.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t["/0WClp"])],
                parent: eB.s6.NOTIFICATIONS,
            },
            [eB.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eB.s6.NOTIFICATIONS,
            },
            [eB.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.VH8AIC)],
                parent: eB.s6.NOTIFICATIONS,
            },
            [eB.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.xSmFQE)],
                parent: eB.s6.NOTIFICATIONS,
                predicate: () => (0, K.isWindows)(),
            },
            [eB.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.z21l8P)],
                parent: eB.s6.NOTIFICATIONS,
            },
            [eB.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: ["New Notification Settings (Advanced, Staff Only)"],
                parent: eB.s6.NOTIFICATIONS,
                predicate: () => !1,
            },
            [eB.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: ["Restore most recent snapshot"],
                parent: eB.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eB.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: ["Launch Migration"],
                parent: eB.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eB.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: ["Toggle new system on/off"],
                parent: eB.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eB.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.TTvjd3)],
                parent: eB.s6.NOTIFICATIONS,
            },
            [eB.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.VpSKeH)],
                parent: eB.s6.NOTIFICATIONS,
            },
            [eB.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.D9yVAA)],
                parent: eB.s6.NOTIFICATIONS,
            },
            [eB.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.u6dc5O)],
                parent: eB.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eB.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.P8MG6u)],
                parent: eB.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eB.s6.NOTIFICATIONS_SOUNDS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.MKWyKS)],
                parent: eB.s6.NOTIFICATIONS,
            },
            [eB.s6.NOTIFICATIONS_EMAILS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.TPchzM)],
                parent: eB.s6.NOTIFICATIONS,
            },
            [eB.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t["B75+xc"])],
                parent: eB.s6.NOTIFICATIONS_EMAILS,
            },
            [eB.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.sxn7lZ)],
                parent: eB.s6.NOTIFICATIONS_EMAILS,
            },
            [eB.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.EkxXhY)],
                parent: eB.s6.NOTIFICATIONS_EMAILS,
            },
            [eB.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.jNrkrK)],
                parent: eB.s6.NOTIFICATIONS_EMAILS,
            },
            [eB.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.E8g1l5)],
                parent: eB.s6.NOTIFICATIONS_EMAILS,
            },
            [eB.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.Ra9Pws)],
                parent: eB.s6.NOTIFICATIONS_EMAILS,
            },
            [eB.s6.NOTIFICATIONS_REACTIONS]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.Rq0NFh)],
                parent: eB.s6.NOTIFICATIONS,
            },
            [eB.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.wtk08f)],
                parent: eB.s6.NOTIFICATIONS,
                predicate: () => (0, G.JN)("SettingsRendererConfig"),
            },
            [eB.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eF.oAB.NOTIFICATIONS,
                searchableTitles: [eY.intl.string(eY.t.pW4TMj)],
                parent: eB.s6.NOTIFICATIONS,
            },
            [eB.s6.KEYBINDS]: {
                section: eF.oAB.KEYBINDS,
                searchableTitles: [eY.intl.string(eY.t.T9DA2N)],
                label: eY.intl.string(eY.t.T9DA2N),
                element: eE.Z,
                url: eF.Z5c.SETTINGS("keybinds"),
            },
            [eB.s6.LANGUAGE]: {
                section: eF.oAB.LOCALE,
                searchableTitles: [eY.intl.string(eY.t.IHMsPj)],
                label: eY.intl.string(eY.t.IHMsPj),
                element: eb.Z,
                url: eF.Z5c.SETTINGS("language"),
            },
            [eB.s6.WINDOW_SETTINGS]: {
                section: eF.oAB.WINDOWS,
                searchableTitles: [eY.intl.string(eY.t.ZkDZoq)],
                label: eY.intl.string(eY.t.ZkDZoq),
                element: eR.Z,
                predicate: () => K.isPlatformEmbedded && (0, K.isWindows)(),
            },
            [eB.s6.LINUX_SETTINGS]: {
                section: eF.oAB.LINUX,
                searchableTitles: [eY.intl.string(eY.t["7pPjTU"])],
                label: eY.intl.string(eY.t["7pPjTU"]),
                element: e3,
                predicate: () => K.isPlatformEmbedded && (0, K.isLinux)(),
            },
            [eB.s6.STREAMER_MODE]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.S5GfOT)],
                label: eY.intl.string(eY.t.S5GfOT),
                ariaLabel: eY.intl.string(eY.t.S5GfOT),
                element: eS.Z,
                url: eF.Z5c.SETTINGS("streamer-mode"),
            },
            [eB.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.bxGbHB)],
                parent: eB.s6.STREAMER_MODE,
            },
            [eB.s6.STREAMER_MODE_ENABLE]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.p9ZAJS)],
                parent: eB.s6.STREAMER_MODE,
            },
            [eB.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.UpQziI)],
                parent: eB.s6.STREAMER_MODE,
            },
            [eB.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.q7WNGh)],
                parent: eB.s6.STREAMER_MODE,
            },
            [eB.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t["1CWknJ"])],
                parent: eB.s6.STREAMER_MODE,
            },
            [eB.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t.qmYiYW)],
                parent: eB.s6.STREAMER_MODE,
            },
            [eB.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eF.oAB.STREAMER_MODE,
                searchableTitles: [eY.intl.string(eY.t["iA81+f"])],
                parent: eB.s6.STREAMER_MODE,
                predicate: () => {
                    var e, t, n;
                    return (
                        null !=
                            (n =
                                null === _.Z ||
                                void 0 === _.Z ||
                                null == (t = _.Z.window) ||
                                null == (e = t.supportsContentProtection)
                                    ? void 0
                                    : e.call(t)) && n
                    );
                },
            },
            [eB.s6.SETTINGS_ADVANCED]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t["8/udY2"])],
                label: eY.intl.string(eY.t["8/udY2"]),
                ariaLabel: eY.intl.string(eY.t["8/udY2"]),
                element: ea.ZP,
            },
            [eB.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t.ObIb1d)],
                parent: eB.s6.SETTINGS_ADVANCED,
                predicate: () => Y.wS,
            },
            [eB.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t["eOC/Fx"])],
                parent: eB.s6.SETTINGS_ADVANCED,
                predicate: () => K.isPlatformEmbedded,
            },
            [eB.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t.fi3UQE)],
                parent: eB.s6.SETTINGS_ADVANCED,
                predicate: () => te,
            },
            [eB.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t.erOqlp)],
                parent: eB.s6.SETTINGS_ADVANCED,
                predicate: () => tn,
            },
            [eB.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: [eY.intl.string(eY.t.qDZryM)],
                parent: eB.s6.SETTINGS_ADVANCED,
            },
            [eB.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eF.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: eB.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    g.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [eB.s6.ACTIVITY_PRIVACY]: {
                section: eF.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.Cq98yM)],
                label: eY.intl.string(eY.t.Cq98yM),
                ariaLabel: eY.intl.string(eY.t.Cq98yM),
                element: ei.Z,
                predicate: () => !eq,
                url: eF.Z5c.SETTINGS("activity-privacy"),
            },
            [eB.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eq ? eF.oAB.GAMES : eF.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t["8ka8lp"])],
                parent: eq ? eB.s6.GAMES_ACTIVITY_PRIVACY : eB.s6.ACTIVITY_PRIVACY,
            },
            [eB.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eq ? eF.oAB.GAMES : eF.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t.VOszPD)],
                parent: eq ? eB.s6.GAMES_ACTIVITY_PRIVACY : eB.s6.ACTIVITY_PRIVACY,
            },
            [eB.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eq ? eF.oAB.GAMES : eF.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eB.CF],
                parent: eq ? eB.s6.GAMES_ACTIVITY_PRIVACY : eB.s6.ACTIVITY_PRIVACY,
            },
            [eB.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eF.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eY.intl.string(eY.t["4F2KoK"])],
                parent: eB.s6.ACTIVITY_PRIVACY,
            },
            [eB.s6.REGISTERED_GAMES]: {
                section: eF.oAB.REGISTERED_GAMES,
                searchableTitles: [eY.intl.string(eY.t.AVDyEh)],
                label: eY.intl.string(eY.t.AVDyEh),
                element: eh.Z,
                predicate: () => !eq && (0, ex.Jw)(),
            },
            [eB.s6.OVERLAY]: {
                section: eF.oAB.OVERLAY,
                searchableTitles: [eY.intl.string(eY.t["9cb1U1"]), eY.intl.string(eY.t.HcoRu7)],
                label: eY.intl.string(eY.t["9cb1U1"]),
                element: eO.Z,
                predicate: () => !eq && A,
            },
            [eB.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, E.Z)(!0),
                searchableTitles: [eY.intl.string(eY.t.LRmNAg)],
                label: eY.intl.string(eY.t.LRmNAg),
            },
            [eB.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    H.default.track(eF.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, W.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                H.default.track(eF.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, p.Z)(e);
                            },
                        });
                },
                searchableTitles: [eY.intl.string(eY.t.sMEktb)],
                label: eY.intl.string(eY.t.sMEktb),
                ariaLabel: eY.intl.string(eY.t.sMEktb),
            },
            [eB.s6.HYPESQUAD]: {
                section: eF.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eY.intl.string(eY.t["k0R+4e"])],
                label: eY.intl.string(eY.t["k0R+4e"]),
                element: em.Z,
                predicate: () => !ta,
            },
            [eB.s6.TOWNHALL]: {
                section: eF.oAB.TOWNHALL,
                searchableTitles: [eY.intl.string(eY.t.dnZNER)],
                label: eY.intl.string(eY.t.dnZNER),
                predicate: () => ta,
                onClick: () => {
                    (0, p.Z)("https://discord.gg/discord-townhall"), (0, eP.default)();
                },
            },
            [eB.s6.EXPERIMENTS]: {
                section: eF.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: eD.Z,
                predicate: () => B.Z.isDeveloper,
                url: eF.Z5c.SETTINGS("experiments"),
            },
            [eB.s6.DEVELOPER_OPTIONS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: e_.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eB.s6.DEVELOPER_OPTIONS,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eB.s6.DEVELOPER_OPTIONS,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eB.s6.DEVELOPER_OPTIONS,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eB.s6.DEVELOPER_OPTIONS,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eB.s6.DEVELOPER_OPTIONS,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eB.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eB.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eB.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eB.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eB.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eB.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eB.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e4 && B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eB.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eB.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eB.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e4 && B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eB.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eB.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eB.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e4 && B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Toggleable Components"],
                parent: eB.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e4 && B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eB.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e4 && B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eB.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e4 && B.Z.isDeveloper && Z.default.layoutDebuggingEnabled,
            },
            [eB.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eB.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e4 && B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eB.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e4 && B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eB.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eB.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eB.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eB.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eB.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eB.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => m.q && B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eB.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eB.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eB.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eB.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eB.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eF.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eB.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.PAYMENT_FLOW_MODALS]: {
                section: eF.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ["Payment Flow Modals"],
                label: "Payment Flow Modals",
                element: J.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.REVENUE_STORYBOOK]: {
                section: eF.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: [
                    "Revenue Storybook",
                    "Payment Components",
                    "Orb Components",
                    "Virtual Currency",
                    "Nitro Components",
                ],
                label: "Revenue Storybook",
                element: ek.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eF.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ["Virtual Currency", "Orb", "Config"],
                label: "Virtual Currency Config",
                element: eU.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.PAYMENT_COMPONENTS]: {
                section: eF.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Payment Components"],
                label: "Payment Components",
                element: ek.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.ORB_COMPONENTS]: {
                section: eF.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Orb Components"],
                label: "Orb Components",
                element: ek.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.NITRO_COMPONENTS]: {
                section: eF.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Nitro Components"],
                label: "Nitro Components",
                element: ek.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.TEXT_PLAYGROUND]: {
                section: eF.oAB.TEXT_PLAYGROUND,
                searchableTitles: ["Text Playground"],
                label: "Text Playground",
                element: eC.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DESIGN_SYSTEMS]: {
                section: eF.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Design Systems"],
                label: "Design Systems",
                element: ef.Z,
                predicate: () => B.Z.isDeveloper,
                url: eF.Z5c.SETTINGS("design-systems"),
            },
            [eB.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eF.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Colors"],
                label: "Colors",
                element: ef.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.ANIMATION_TESTING]: {
                section: eF.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Animation Testing"],
                label: "Animation Testing",
                element: ef.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eF.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Components"],
                label: "Components",
                element: ef.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.TEXT_COMPONENTS]: {
                section: eF.oAB.TEXT_COMPONENT,
                searchableTitles: ["Text Components"],
                label: "Text Components",
                element: et.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.SHOP_KEEPER]: {
                section: eF.oAB.SHOP_KEEPER,
                searchableTitles: ["Shop Keeper"],
                label: "Shop Keeper",
                element: I.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.QUEST_PREVIEW_TOOL]: {
                section: eF.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ["Quest Preview Tool"],
                label: "Quest Preview Tool",
                element: j.Z,
                predicate: () => (0, L.X)({ location: eV.dr.QUEST_PREVIEW_TOOL }),
            },
            [eB.s6.QUEST_PREVIEW_TOOL_2]: {
                section: eF.oAB.QUEST_PREVIEW_TOOL_2,
                searchableTitles: ["Quest Preview Tool 2"],
                label: "Quest Preview Tool 2",
                element: () => (0, r.jsx)(M.Z, { questId: null == b ? void 0 : b.quest_id }),
                predicate: () => (0, L.T)({ location: eV.dr.QUEST_PREVIEW_TOOL_2 }),
            },
            [eB.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM]: {
                section: f.ID.CUSTOM,
                searchableTitles: ew.Y,
                label: "Developer Education",
                element: ew.$,
                predicate: () => B.Z.isDeveloper,
            },
            [eB.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            eJ(
                                eX(
                                    {
                                        header: eY.intl.string(eY.t["2jxGen"]),
                                        confirmText: eY.intl.string(eY.t["2jxGen"]),
                                        cancelText: eY.intl.string(eY.t["ETE/oK"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: eY.intl.string(eY.t.SUnWBA),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: eY.intl.string(eY.t["2jxGen"]),
                ariaLabel: eY.intl.string(eY.t["2jxGen"]),
                icon: (0, r.jsx)(s.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [eB.s6.SOCIAL_LINKS]: {
                section: f.ID.CUSTOM,
                element: ee.Z,
            },
            [eB.s6.CLIENT_DEBUG_INFO]: {
                section: f.ID.CUSTOM,
                element: X.Z,
            },
        });
    };
