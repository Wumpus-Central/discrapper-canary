n.d(t, {
    $Z: () => eQ,
    OF: () => e$,
    W8: () => e0,
    c$: () => eJ,
    iE: () => e2,
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
    J = n(748717),
    $ = n(419636),
    ee = n(799071),
    et = n(154022),
    en = n(736752),
    er = n(309739),
    ei = n(64914),
    ea = n(501348),
    eo = n(795594),
    es = n(443702),
    el = n(327192),
    ec = n(949493),
    eu = n(675047),
    ed = n(177508),
    ef = n(956699),
    e_ = n(54942),
    ep = n(293389),
    eh = n(88624),
    em = n(387747),
    eg = n(389650),
    eE = n(649157),
    eb = n(593648),
    ey = n(327885),
    eO = n(595242),
    ev = n(463153),
    eI = n(36192),
    eT = n(889029),
    eS = n(400287),
    eA = n(554042),
    eC = n(936982),
    eN = n(200645),
    eR = n(342386),
    eP = n(924983),
    ew = n(287490),
    eD = n(168308),
    ex = n(277329),
    eL = n(273927),
    ej = n(604224),
    eM = n(43434),
    ek = n(345655),
    eU = n(726985),
    eG = n(583139),
    eB = n(981631),
    eZ = n(46140),
    eF = n(65154),
    eV = n(388032),
    eH = n(693450),
    eY = n(345909),
    eW = n(202323);
function eK(e, t, n) {
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
function ez(e) {
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
                eK(e, t, n[t]);
            });
    }
    return e;
}
function eq(e, t) {
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
function eX(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eq(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eQ = () => {
        let e = [a.z.CLIENT_THEMES_SETTINGS_BADGE, a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
        return (
            b.Mc.getCurrentConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            h.n.getConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE),
            e
        );
    },
    eJ = () => {
        let e = eQ(),
            [t] = (0, S.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: eV.intl.string(eV.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ||
                t === a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE
              ? (0, r.jsx)(s.IGR, { text: eV.intl.string(eV.t.y2b7CA) })
              : null;
    },
    e$ = () => {
        let e = [];
        return (
            (0, U.h)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            A.JH.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    e0 = () => {
        let e = e$(),
            [t] = (0, S.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: eV.intl.string(eV.t.y2b7CA) })
            : null;
    },
    e1 = eN.Z,
    e2 = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: h,
            searchParams: b,
            numOfPendingFamilyRequests: S,
            isOverlaySupported: A,
            isClipsBetaTagShowing: U = !1,
            shouldMergeGameSettings: eK,
            isKeywordFilteringEnabled: eq,
            isStaff: e2,
            isInappropriateConversationWarningEnabled: e3,
            isInapproprateConversationsDefaultOn: e4,
            paymentsBlocked: e8,
            isEligibleForQuests: e5,
            isStricterMessageRequestsEnabled: e6,
            hasLibraryApplication: e7,
            hasTOTPEnabled: e9,
            developerMode: te,
            isAdultUser: tt,
            hasSecureFramesVerifiedUserIds: tn,
            hypeSquadRemoved: tr,
            hasIgnoredUsers: ti,
            hasBlockedUsers: ta,
            isEligibleForSensitiveContentDefaults: to,
            inputMode: ts,
            activeInputProfile: tl,
            isInputProfileCustom: tc,
            isDataUsage3PToggleEnabled: tu,
        } = e;
        return Object.freeze({
            [eU.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: ev.Z,
            },
            [eU.s6.ACCOUNT_SECURITY_TAB]: {
                section: eB.oAB.ACCOUNT,
                searchableTitles: [eV.intl.string(eV.t.Am9YHh)],
                label: eV.intl.string(eV.t.Am9YHh),
            },
            [eU.s6.ACCOUNT]: {
                section: eB.oAB.ACCOUNT,
                searchableTitles: [eV.intl.string(eV.t["JAIM/v"])],
                label: eV.intl.string(eV.t["JAIM/v"]),
                ariaLabel: eV.intl.string(eV.t["JAIM/v"]),
                element: en.Z,
                url: eB.Z5c.SETTINGS("account"),
            },
            [eU.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eV.intl.string(eV.t.LYju5O)],
                parent: eU.s6.ACCOUNT,
                section: eB.oAB.ACCOUNT,
            },
            [eU.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eV.intl.string(eV.t["9AjdkJ"])],
                section: eB.oAB.ACCOUNT,
                parent: eU.s6.ACCOUNT_PROFILE,
            },
            [eU.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eV.intl.string(eV.t.Ulqq6O)],
                section: eB.oAB.ACCOUNT,
                parent: eU.s6.ACCOUNT_PROFILE,
            },
            [eU.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    eV.intl.string(eV.t["/52UY2"]),
                    eV.intl.string(eV.t.sK0dmJ),
                    eV.intl.string(eV.t.XxRj7e),
                    eV.intl.string(eV.t.yNGjyM),
                    eV.intl.string(eV.t.KPGVWl),
                ],
                section: eB.oAB.ACCOUNT,
                parent: eU.s6.ACCOUNT_PROFILE,
                predicate: () => to,
            },
            [eU.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eV.intl.string(eV.t["+JkHPz"])],
                section: eB.oAB.ACCOUNT,
                parent: eU.s6.ACCOUNT_PROFILE,
            },
            [eU.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eV.intl.string(eV.t.oP5zGB)],
                section: eB.oAB.ACCOUNT,
                parent: eU.s6.ACCOUNT_PROFILE,
            },
            [eU.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eV.intl.string(eV.t.pKSjEh)],
                section: eB.oAB.ACCOUNT,
                parent: eU.s6.ACCOUNT,
            },
            [eU.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eV.intl.string(eV.t["FRep5+"])],
                section: eB.oAB.ACCOUNT,
                parent: eU.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eU.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eV.intl.string(eV.t["7qKDrK"])],
                section: eB.oAB.ACCOUNT,
                parent: eU.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eU.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eV.intl.string(eV.t.m0FidH)],
                section: eB.oAB.ACCOUNT,
                parent: eU.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eU.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eV.intl.string(eV.t.cDgKtb)],
                section: eB.oAB.ACCOUNT,
                parent: eU.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e9,
            },
            [eU.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eV.intl.string(eV.t["D+aE7u"])],
                section: eB.oAB.ACCOUNT,
                parent: eU.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e9,
            },
            [eU.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eV.intl.string(eV.t.fZSi1N)],
                section: eB.oAB.ACCOUNT,
                parent: eU.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eU.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eV.intl.string(eV.t.uHAJ5u)],
                section: eB.oAB.ACCOUNT,
                parent: eU.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eU.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eV.intl.string(eV.t.vrOCCg)],
                section: eB.oAB.ACCOUNT,
                parent: eU.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eU.s6.ACCOUNT_REMOVAL]: {
                section: eB.oAB.ACCOUNT,
                searchableTitles: [eV.intl.string(eV.t.ZKsIkp)],
                parent: eU.s6.ACCOUNT,
            },
            [eU.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eB.oAB.ACCOUNT,
                searchableTitles: [eV.intl.string(eV.t.jf5GGR)],
                parent: eU.s6.ACCOUNT_REMOVAL,
            },
            [eU.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eB.oAB.ACCOUNT,
                searchableTitles: [eV.intl.string(eV.t["8lQ2ra"])],
                parent: eU.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eU.s6.GAMES]: {
                section: eB.oAB.GAMES,
                searchableTitles: [eV.intl.string(eV.t.URyqtL)],
                label: eV.intl.string(eV.t.URyqtL),
                ariaLabel: eV.intl.string(eV.t.URyqtL),
                element: ex.Z,
                predicate: () => eK,
            },
            [eU.s6.GAMES_MY_GAMES]: {
                section: eB.oAB.GAMES,
                searchableTitles: [eV.intl.string(eV.t["5DMgp6"])],
                parent: eU.s6.GAMES,
            },
            [eU.s6.GAMES_CLIPS]: {
                section: eB.oAB.GAMES,
                searchableTitles: [eV.intl.string(eV.t.z2jK6e)],
                parent: eU.s6.GAMES,
            },
            [eU.s6.GAMES_OVERLAY]: {
                section: eB.oAB.GAMES,
                searchableTitles: [eV.intl.string(eV.t["9cb1U1"])],
                parent: eU.s6.GAMES,
            },
            [eU.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eB.oAB.GAMES,
                searchableTitles: [eV.intl.string(eV.t.Cq98yM)],
                parent: eU.s6.GAMES,
            },
            [eU.s6.PROFILE_CUSTOMIZATION]: {
                section: eB.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [eV.intl.string(eV.t["vi7f+v"])],
                label: eV.intl.string(eV.t["vi7f+v"]),
                ariaLabel: eV.intl.string(eV.t["vi7f+v"]),
                element: x.Z,
                newIndicator: (0, r.jsx)(e0, {}),
                newIndicatorDismissibleContentTypes: [...e$()],
                notice: {
                    stores: [V.Z, N.Z],
                    element: D.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, C.It)(), (0, u.P6)(), d.Z.clearSubsection(eB.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eB.Z5c.SETTINGS("profile-customization"),
            },
            [eU.s6.PROFILE_DISPLAY_NAME]: {
                section: eB.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eV.intl.string(eV.t["9AjdkJ"])],
                parent: eU.s6.PROFILE_CUSTOMIZATION,
            },
            [eU.s6.PROFILE_USER_PROFILE]: {
                section: eB.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eV.intl.string(eV.t["2p07FR"]), eV.intl.string(eV.t["7vhiqq"])],
                parent: eU.s6.PROFILE_CUSTOMIZATION,
            },
            [eU.s6.PROFILE_SERVER_PROFILES]: {
                section: eB.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eV.intl.string(eV.t.kPHroa)],
                parent: eU.s6.PROFILE_CUSTOMIZATION,
            },
            [eU.s6.CONTENT_SOCIAL]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                label: eV.intl.string(eV.t["+o1pDQ"]),
                searchableTitles: [eV.intl.string(eV.t["+o1pDQ"])],
                ariaLabel: eV.intl.string(eV.t["+o1pDQ"]),
                element: ec.Z,
                url: eB.Z5c.SETTINGS("content-and-social"),
            },
            [eU.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t["+o1pDQ"]), eV.intl.string(eV.t["/7xJCA"])],
                parent: eU.s6.CONTENT_SOCIAL,
            },
            [eU.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t["+o1pDQ"]), eV.intl.string(eV.t["/7xJCA"])],
                parent: eU.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eU.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t.YpCiMj)],
                parent: eU.s6.CONTENT_SOCIAL,
            },
            [eU.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                label: eV.intl.string(eV.t.YpCiMj),
                searchableTitles: [eV.intl.string(eV.t.YpCiMj)],
                ariaLabel: eV.intl.string(eV.t.YpCiMj),
                parent: eU.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eB.Z5c.SETTINGS(eB.oAB.CONTENT_AND_SOCIAL, eG.C),
            },
            [eU.s6.DATA_PRIVACY]: {
                section: eB.oAB.DATA_AND_PRIVACY,
                label: eV.intl.string(eV.t.OAuOHB),
                searchableTitles: [eV.intl.string(eV.t.OAuOHB)],
                ariaLabel: eV.intl.string(eV.t.OAuOHB),
                element: eu.Z,
                url: eB.Z5c.SETTINGS("data-and-privacy"),
            },
            [eU.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eB.oAB.ACCOUNT,
                searchableTitles: [eV.intl.string(eV.t["Vov/9v"])],
                parent: eU.s6.ACCOUNT,
            },
            [eU.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eB.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eV.intl.string(eV.t.WWaFn5)],
                parent: eU.s6.DATA_PRIVACY,
                predicate: () => (0, K.isDesktop)(),
            },
            [eU.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eB.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eV.intl.string(eV.t["opi/XF"])],
                parent: eU.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eU.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t.xVRG4O)],
                parent: eU.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eU.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t.fyA119)],
                parent: eU.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eU.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t.fyA119)],
                parent: eU.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eU.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t["/U8Iwc"])],
                parent: eU.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eU.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t["ms+TmZ"])],
                parent: eU.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eU.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t["y62Z/f"])],
                parent: eU.s6.CONTENT_SOCIAL,
            },
            [eU.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eB.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eV.intl.string(eV.t.SRZyHh)],
                parent: eU.s6.DATA_PRIVACY,
            },
            [eU.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eV.intl.string(eV.t.uEz8JC),
                    eV.intl.string(eV.t["N/oRIy"]),
                    eV.intl.string(eV.t.QVdYsL),
                    eV.intl.string(eV.t["aWD+tr"]),
                    eV.intl.string(eV.t["5mnTa2"]),
                ],
                parent: eU.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eU.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eV.intl.string(eV.t["Hj/Bur"]),
                    eV.intl.string(eV.t["N/oRIy"]),
                    eV.intl.string(eV.t.QVdYsL),
                    eV.intl.string(eV.t["aWD+tr"]),
                    eV.intl.string(eV.t["5mnTa2"]),
                    eV.intl.string(eV.t.K0OWPz),
                ],
                parent: eU.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eU.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eV.intl.string(eV.t["Hj/Bur"]),
                    eV.intl.string(eV.t["N/oRIy"]),
                    eV.intl.string(eV.t.QVdYsL),
                    eV.intl.string(eV.t["aWD+tr"]),
                    eV.intl.string(eV.t["5mnTa2"]),
                ],
                parent: eU.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eU.s6.GORE_MEDIA_REDACTION]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eV.intl.string(eV.t["Hj/Bur"]),
                    eV.intl.string(eV.t["N/oRIy"]),
                    eV.intl.string(eV.t.QVdYsL),
                    eV.intl.string(eV.t["aWD+tr"]),
                    eV.intl.string(eV.t.K0OWPz),
                ],
                parent: eU.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eU.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eV.intl.string(eV.t.JzaP4u),
                    eV.intl.string(eV.t.H9XOl5),
                    eV.intl.string(eV.t.k4W40N),
                ],
                parent: eU.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eU.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t["L+yTsb"])],
                parent: eU.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eU.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t.XahVjo)],
                parent: eU.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eU.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                parent: eU.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eU.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t.RAQUSE), eV.intl.string(eV.t.wbYDfX)],
                parent: eU.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eU.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t["3o2ojo"])],
                parent: eU.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !e6,
            },
            [eU.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t.OLwZDQ)],
                parent: eU.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eU.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t.wBkwu7)],
                parent: eU.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eU.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eB.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eV.intl.string(eV.t.XuADY2)],
                parent: eU.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eU.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eB.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eV.intl.string(eV.t.MNKzys)],
                parent: eU.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eU.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eB.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eV.intl.string(eV.t.VkS7YW), eV.intl.string(eV.t.sJYh5u)],
                parent: eU.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eU.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eB.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eV.intl.string(eV.t.CyLYKS)],
                parent: eU.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                predicate: () => tu,
            },
            [eU.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eB.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eU.CF],
                parent: eU.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eU.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eB.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eV.intl.string(eV.t.dmBSKi)],
                parent: eU.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eU.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t["1UaUy8"]), eV.intl.string(eV.t["xIk/iI"])],
                parent: eU.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eq,
            },
            [eU.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eV.intl.string(eV.t.qFsx5u)],
                parent: eU.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e3 && !tt && !e4,
            },
            [eU.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eB.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eV.intl.string(eV.t["5b3FND"])],
                parent: eU.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => tn,
            },
            [eU.s6.PRIVACY_FAMILY_CENTER]: {
                section: eB.oAB.FAMILY_CENTER,
                searchableTitles: [eV.intl.string(eY.default.gntCQU)],
                label: eV.intl.string(eY.default.gntCQU),
                ariaLabel: eV.intl.string(eY.default.gntCQU),
                element: e_.Z,
                badgeCount: S,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eV.intl.string(eV.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eB.Z5c.SETTINGS("family-center"),
            },
            [eU.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eB.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eV.intl.string(eV.t.BG7Qsb)],
                parent: eU.s6.DATA_PRIVACY,
            },
            [eU.s6.AUTHORIZED_APPS]: {
                section: eB.oAB.AUTHORIZED_APPS,
                searchableTitles: [eV.intl.string(eV.t["f6kk+v"])],
                label: eV.intl.string(eV.t["f6kk+v"]),
                element: eo.Z,
                url: eB.Z5c.SETTINGS("authorized-apps"),
            },
            [eU.s6.SESSIONS]: {
                section: eB.oAB.SESSIONS,
                searchableTitles: [eV.intl.string(eV.t["+1h0k5"])],
                label: eV.intl.string(eV.t["+1h0k5"]),
                ariaLabel: eV.intl.string(eV.t["+1h0k5"]),
                element: eI.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
            },
            [eU.s6.CONNECTIONS]: {
                section: eB.oAB.CONNECTIONS,
                searchableTitles: [eV.intl.string(eV.t["3fe7U1"])],
                label: eV.intl.string(eV.t["3fe7U1"]),
                ariaLabel: eV.intl.string(eV.t["3fe7U1"]),
                element: el.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eB.Z5c.SETTINGS("connections"),
            },
            [eU.s6.THIRD_PARTY_ACCESS]: {
                section: eB.oAB.CONNECTIONS,
                searchableTitles: [
                    eV.intl.string(eV.t["Ig/XFR"]),
                    eV.intl.string(eV.t["3fe7U1"]),
                    eV.intl.string(eV.t["f6kk+v"]),
                ],
                label: eV.intl.string(eV.t["Ig/XFR"]),
                parent: eU.s6.CONNECTIONS,
                element: eC.Z,
            },
            [eU.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eB.oAB.CONNECTIONS,
                searchableTitles: [eV.intl.string(eV.t["+/hZMz"])],
                parent: eU.s6.CONNECTIONS,
                element: el.Z,
            },
            [eU.s6.CLIPS]: {
                section: eB.oAB.CLIPS,
                searchableTitles: [eV.intl.string(eV.t.z2jK6e)],
                label: eV.intl.string(eV.t.z2jK6e),
                ariaLabel: eV.intl.string(eV.t.z2jK6e),
                icon: U ? (0, r.jsx)(y.Z, {}) : void 0,
                element: O.Z,
                predicate: () => !eK,
                url: eB.Z5c.SETTINGS("clips"),
            },
            [eU.s6.RESTRICTED_USERS]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                parent: eU.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eV.intl.string(eV.t["3wRorq"]),
                element: eL.ZP,
                predicate: () => ti || ta,
            },
            [eU.s6.BLOCKED_USERS]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                parent: eU.s6.RESTRICTED_USERS,
                label: eV.intl.string(eV.t.PFOUKS),
                searchableTitles: [eV.intl.string(eV.t.PFOUKS)],
                element: eL.GF,
                predicate: () => ta,
            },
            [eU.s6.IGNORED_USERS]: {
                section: eB.oAB.CONTENT_AND_SOCIAL,
                parent: eU.s6.RESTRICTED_USERS,
                searchableTitles: [eV.intl.string(eV.t["93ZDWF"])],
                label: eV.intl.string(eV.t["93ZDWF"]),
                element: eL.yo,
                predicate: () => ti,
            },
            [eU.s6.PREMIUM]: {
                section: eB.oAB.PREMIUM,
                ariaLabel: eV.intl.string(eV.t.Ipxkoq),
                searchableTitles: [eV.intl.string(eV.t.Ipxkoq)],
                label: eV.intl.string(eV.t.Ipxkoq),
                element: J.Z,
                className: eW.premiumTab,
            },
            [eU.s6.GUILD_BOOSTING]: {
                section: eB.oAB.GUILD_BOOSTING,
                searchableTitles: [eV.intl.string(eV.t["+CbP2t"])],
                label: eV.intl.string(eV.t["+CbP2t"]),
                element: eO.Z,
            },
            [eU.s6.SUBSCRIPTIONS]: {
                section: eB.oAB.SUBSCRIPTIONS,
                ariaLabel: eV.intl.string(eV.t.trSpHR),
                searchableTitles: [eV.intl.string(eV.t.trSpHR)],
                label: eV.intl.string(eV.t.trSpHR),
                element: w.Z,
                icon: h
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eU.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eB.oAB.SUBSCRIPTIONS,
                searchableTitles: [eV.intl.string(eV.t["2GKrvr"])],
                parent: eU.s6.SUBSCRIPTIONS,
            },
            [eU.s6.GIFT_INVENTORY]: {
                section: eB.oAB.INVENTORY,
                searchableTitles: [eV.intl.string(eV.t["jcSP+v"])],
                label: eV.intl.string(eV.t["jcSP+v"]),
                element: em.Z,
                ariaLabel: eV.intl.string(eV.t["jcSP+v"]),
                badgeCount: t,
            },
            [eU.s6.GIFT_CODE_REDEMPTION]: {
                section: eB.oAB.INVENTORY,
                searchableTitles: [eV.intl.string(eV.t["il+VCg"])],
                parent: eU.s6.GIFT_INVENTORY,
                predicate: () => !e8,
            },
            [eU.s6.GIFT_INVENTORY_QUESTS]: {
                section: eB.oAB.INVENTORY,
                searchableTitles: [eV.intl.string(eV.t.JALI2N)],
                parent: eU.s6.GIFT_INVENTORY,
                predicate: () => e5,
            },
            [eU.s6.GIFT_INVENTORY_LIST]: {
                section: eB.oAB.INVENTORY,
                searchableTitles: [eV.intl.string(eV.t["9KeUbW"])],
                parent: eU.s6.GIFT_INVENTORY,
                predicate: () => !e8,
            },
            [eU.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eB.oAB.INVENTORY,
                searchableTitles: [eV.intl.string(eV.t.vwMEHR)],
                parent: eU.s6.GIFT_INVENTORY,
                predicate: () => e8,
            },
            [eU.s6.BILLING]: {
                section: eB.oAB.BILLING,
                searchableTitles: [eV.intl.string(eV.t.oeUm2t)],
                label: eV.intl.string(eV.t.oeUm2t),
                ariaLabel: eV.intl.string(eV.t.oeUm2t),
                element: es.Z,
            },
            [eU.s6.BILLING_PAYMENT_METHODS]: {
                section: eB.oAB.BILLING,
                searchableTitles: [eV.intl.string(eV.t.W26xGR)],
                parent: eU.s6.BILLING,
            },
            [eU.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eB.oAB.BILLING,
                searchableTitles: [eV.intl.string(eV.t.obLrcH)],
                parent: eU.s6.BILLING,
            },
            [eU.s6.APPEARANCE]: {
                section: eB.oAB.APPEARANCE,
                searchableTitles: [eV.intl.string(eV.t["iHH+k5"])],
                label: eV.intl.string(eV.t["iHH+k5"]),
                ariaLabel: eV.intl.string(eV.t["iHH+k5"]),
                element: ea.Z,
                newIndicator: (0, r.jsx)(eJ, {}),
                newIndicatorDismissibleContentTypes: eQ(),
                url: eB.Z5c.SETTINGS("appearance"),
            },
            [eU.s6.APPEARANCE_THEME]: {
                section: eB.oAB.APPEARANCE,
                searchableTitles: [eV.intl.string(eV.t.Ksh3io)],
                parent: eU.s6.APPEARANCE,
            },
            [eU.s6.APPEARANCE_COLOR]: {
                section: eB.oAB.APPEARANCE,
                searchableTitles: [eV.intl.string(eV.t.OCOOiI)],
                parent: eU.s6.APPEARANCE_THEME,
            },
            [eU.s6.APPEARANCE_ICON]: {
                section: eB.oAB.APPEARANCE,
                searchableTitles: [eV.intl.string(eV.t.RPh2oq)],
                parent: eU.s6.APPEARANCE_THEME,
            },
            [eU.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eB.oAB.APPEARANCE,
                searchableTitles: [eV.intl.string(eV.t.ZEoGMT)],
                parent: eU.s6.APPEARANCE,
            },
            [eU.s6.APPEARANCE_LIST_SPACING]: {
                section: eB.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eU.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eV.intl.string(eV.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
            },
            [eU.s6.APPEARANCE_SCALING_SPACING]: {
                section: eB.oAB.APPEARANCE,
                searchableTitles: [eV.intl.string(eV.t.qPOqoK)],
                parent: eU.s6.APPEARANCE,
            },
            [eU.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eB.oAB.APPEARANCE,
                searchableTitles: [
                    eV.intl.string(eV.t.dyamEB),
                    eV.intl.string(eV.t.p8NOws),
                    eV.intl.string(eV.t["+o/sOj"]),
                ],
                parent: eU.s6.APPEARANCE,
                predicate: () =>
                    k.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eU.s6.ACCESSIBILITY]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.G0neg4)],
                label: eV.intl.string(eV.t.G0neg4),
                ariaLabel: eV.intl.string(eV.t.G0neg4),
                element: et.Z,
                url: eB.Z5c.SETTINGS("accessibility"),
            },
            [eU.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.aZlePj)],
                parent: eU.s6.ACCESSIBILITY,
            },
            [eU.s6.ACCESSIBILITY_SATURATION]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t["5PWWCQ"])],
                parent: eU.s6.ACCESSIBILITY,
            },
            [eU.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.bQCodH)],
                parent: eU.s6.ACCESSIBILITY_SATURATION,
            },
            [eU.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.OLZFBw)],
                parent: eU.s6.ACCESSIBILITY,
            },
            [eU.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t["+IsihY"])],
                parent: eU.s6.ACCESSIBILITY,
                predicate: () => (0, v.l)("SettingsRendererConfig"),
            },
            [eU.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.uSOPWl)],
                parent: eU.s6.ACCESSIBILITY,
            },
            [eU.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eH.default["2gFUEx"])],
                parent: eU.s6.ACCESSIBILITY,
            },
            [eU.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.BT8Bmp)],
                parent: eU.s6.ACCESSIBILITY,
            },
            [eU.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t["sSY+mJ"])],
                parent: eU.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eU.s6.ACCESSIBILITY_CONTRAST]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.TYyfOz)],
                parent: eU.s6.ACCESSIBILITY,
            },
            [eU.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.cguieX)],
                parent: eU.s6.ACCESSIBILITY_CONTRAST,
            },
            [eU.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.e3TR1d)],
                parent: eU.s6.ACCESSIBILITY,
            },
            [eU.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.b3XBzs)],
                parent: eU.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eU.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.Iayoh4)],
                parent: eU.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eU.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.iIaOlZ)],
                parent: eU.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eU.s6.ACCESSIBILITY_STICKERS]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t["6NtAuL"])],
                parent: eU.s6.ACCESSIBILITY,
            },
            [eU.s6.ACCESSIBILITY_MESSAGES]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.onqU6u)],
                parent: eU.s6.ACCESSIBILITY,
            },
            [eU.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t["3Fztn5"])],
                parent: eU.s6.ACCESSIBILITY_MESSAGES,
            },
            [eU.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.TZ2hZG)],
                parent: eU.s6.ACCESSIBILITY_MESSAGES,
            },
            [eU.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.VpSKeH)],
                parent: eU.s6.ACCESSIBILITY,
            },
            [eU.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.qvTIwc)],
                parent: eU.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eU.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eV.intl.string(eV.t.lsW5Eh)],
                parent: eU.s6.ACCESSIBILITY,
            },
            [eU.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eB.oAB.ACCESSIBILITY,
                searchableTitles: [eU.CF],
                parent: eU.s6.ACCESSIBILITY,
            },
            [eU.s6.VOICE_AND_VIDEO]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.B1fFpa)],
                label: eV.intl.string(eV.t.B1fFpa),
                ariaLabel: eV.intl.string(eV.t.B1fFpa),
                element: ej.Z,
                predicate: () => F.Z.isSupported(),
                url: eB.Z5c.SETTINGS("voice"),
            },
            [eU.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.K3lovL), eV.intl.string(eV.t.NiTd0d)],
                parent: eU.s6.VOICE_AND_VIDEO,
            },
            [eU.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.FlNoSU)],
                parent: eU.s6.VOICE_AND_VIDEO,
            },
            [eU.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.ABjMWF)],
                parent: eU.s6.VOICE_AND_VIDEO,
            },
            [eU.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.OFpL3d)],
                parent: eU.s6.VOICE_AND_VIDEO,
            },
            [eU.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.KDdjoq), eV.intl.string(eV.t.FeUKeH)],
                parent: eU.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eU.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.K3lovL), eV.intl.string(eV.t.NiTd0d)],
                parent: eU.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eU.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eB.oAB.VOICE,
                searchableTitles: [
                    eV.intl.string(eV.t.hHMYbW),
                    eV.intl.string(eV.t.dl18zc),
                    eV.intl.string(eV.t.nuFtHB),
                    eV.intl.string(eV.t["3182VF"]),
                    eV.intl.string(eV.t["DGq/PT"]),
                ],
                parent: eU.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eU.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eB.oAB.VOICE,
                searchableTitles: [
                    eV.intl.string(eV.t.OX2Bnp),
                    eV.intl.string(eV.t.eATD2N),
                    eV.intl.string(eV.t.nuFtHB),
                    eV.intl.string(eV.t["3182VF"]),
                    eV.intl.string(eV.t["DGq/PT"]),
                ],
                parent: eU.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eU.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.gyljWF), eV.intl.string(eV.t.nuFtHB)],
                parent: eU.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eU.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eB.oAB.VOICE,
                searchableTitles: [
                    eV.intl.string(eV.t.LM3U3t),
                    eV.intl.string(eV.t.nuFtHB),
                    eV.intl.string(eV.t.VZPR0d),
                    eV.intl.string(eV.t.cjPbpa),
                ],
                parent: eU.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, Q.R)({
                        location: "SettingsRendererConfig",
                        autoTrackExposure: !1,
                    });
                    return e.length > 0;
                },
            },
            [eU.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t["pS+K2N"]), eV.intl.string(eV.t.nuFtHB)],
                parent: eU.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tl !== ek._.STUDIO,
            },
            [eU.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t["sqUm+v"]), eV.intl.string(eV.t.nuFtHB)],
                parent: eU.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => ts === eF.pM.VOICE_ACTIVITY && tc,
            },
            [eU.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.e7LIiY)],
                parent: eU.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eU.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.nzUc3N)],
                parent: eU.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eU.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.ABjMWF)],
                parent: eU.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eU.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.nzUc3N)],
                parent: eU.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eU.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.LKzQSE)],
                parent: eU.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eU.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.F122Gx)],
                parent: eU.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => F.Z.supports(eF.AN.VIDEO),
            },
            [eU.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t["3Ppr1t"])],
                parent: eU.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eU.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.lZTUPj)],
                parent: eU.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => F.Z.supports(eF.AN.VIDEO),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t["8/udY2"])],
                parent: eU.s6.VOICE_AND_VIDEO,
            },
            [eU.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t["8/udY2"])],
                parent: eU.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => !(0, K.isWeb)(),
            },
            [eU.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t["8/udY2"])],
                parent: eU.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.Tceiq6)],
                parent: eU.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED,
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t["71Ve19"])],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => F.Z.supports(eF.AN.OPEN_H264),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.Sln58f)],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.AxnPm5)],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => "stable" !== z.ZP.releaseChannel && F.Z.isExperimentalEncodersSupported(),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t["6I6GUl"])],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => tc,
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.iWTwu7)],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t["/jwMtr"])],
                parent: eU.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eU.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.OBwCXF)],
                parent: eU.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.t8QhiY), eV.intl.string(eV.t.hmfkCg)],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => F.Z.isNoiseSuppressionSupported(),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.BbESsr)],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => F.Z.isAdvancedVoiceActivitySupported(),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.cUMdHx)],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => F.Z.isAutomaticGainControlSupported(),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.DFPXIC)],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => F.Z.showBypassSystemInputProcessing(),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.uancuL)],
                parent: eU.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => F.Z.supports(eF.AN.QOS),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.oSdBvb)],
                parent: eU.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => F.Z.supports(eF.AN.ATTENUATION),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.wVBHr6)],
                parent: eU.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => F.Z.shouldOfferManualSubsystemSelection(),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eB.oAB.VOICE,
                searchableTitles: [
                    eV.intl.string(eV.t.KDdjoq),
                    eV.intl.string(eV.t.NMCIf3),
                    eV.intl.string(eV.t.FeUKeH),
                ],
                parent: eU.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    F.Z.supportsVideoHook() ||
                    F.Z.supportsExperimentalSoundshare() ||
                    (F.Z.supportsSystemScreensharePicker() && (0, K.isMac)()),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.GmWk2N), eV.intl.string(eV.t["Fj/xn5"])],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => F.Z.supportsVideoHook(),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t["4I0qzc"])],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => F.Z.supportsExperimentalSoundshare() && F.Z.supportsHookSoundshare(),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.ie1mgY)],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => F.Z.supportsSystemScreensharePicker() && (0, K.isMac)(),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t["aP1N/v"])],
                parent: eU.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => K.isPlatformEmbedded,
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.OFpL3d)],
                parent: eU.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t["0CEP6e"])],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => q.Sb.getSetting(),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t["r6K+TE"])],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => F.Z.isAecDumpSupported(),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t.U4FgFB)],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === z.ZP.releaseChannel || "development" === z.ZP.releaseChannel) &&
                    e2 &&
                    F.Z.supports(eF.AN.CONNECTION_REPLAY),
            },
            [eU.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t["726JHB"])],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    K.isPlatformEmbedded && F.Z.supports(eF.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [eU.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eB.oAB.VOICE,
                searchableTitles: [eV.intl.string(eV.t["/RXu6+"])],
                parent: eU.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eU.s6.POGGERMODE]: {
                section: eB.oAB.POGGERMODE,
                searchableTitles: [eV.intl.string(eV.t.AtCukJ)],
                label: eV.intl.string(eV.t.AtCukJ),
                ariaLabel: eV.intl.string(eV.t.AtCukJ),
                element: P.Z,
                predicate: () => R.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: eW.poggermodeIcon,
                }),
            },
            [eU.s6.CHAT]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t["/VQax8"])],
                label: eV.intl.string(eV.t["/VQax8"]),
                ariaLabel: eV.intl.string(eV.t["/VQax8"]),
                element: eS.Z,
                url: eB.Z5c.SETTINGS("text"),
            },
            [eU.s6.CHAT_INLINE_MEDIA]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t.U68Dgo)],
                parent: eU.s6.CHAT,
            },
            [eU.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t.U47N1t)],
                parent: eU.s6.CHAT_INLINE_MEDIA,
            },
            [eU.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t.VP11Nj)],
                parent: eU.s6.CHAT_INLINE_MEDIA,
            },
            [eU.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t["5S2AKy"])],
                parent: eU.s6.CHAT_INLINE_MEDIA,
            },
            [eU.s6.CHAT_EMBEDS]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t.PWZOn5)],
                parent: eU.s6.CHAT,
            },
            [eU.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t.xX0ZTE)],
                parent: eU.s6.CHAT_EMBEDS,
            },
            [eU.s6.CHAT_EMOJI]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t.sMOuub)],
                parent: eU.s6.CHAT,
            },
            [eU.s6.CHAT_EMOJI_REACTIONS]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t.Iv24sr)],
                parent: eU.s6.CHAT_EMOJI,
            },
            [eU.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t["79qal5"])],
                parent: eU.s6.CHAT_EMOJI,
            },
            [eU.s6.CHAT_STICKERS]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t["6NtAuL"])],
                parent: eU.s6.CHAT,
            },
            [eU.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t["29xPVV"])],
                parent: eU.s6.CHAT_STICKERS,
            },
            [eU.s6.CHAT_SOUNDMOJI]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t.EHlAMT)],
                parent: eU.s6.CHAT,
            },
            [eU.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t["CtYr+f"])],
                parent: eU.s6.CHAT_SOUNDMOJI,
            },
            [eU.s6.CHAT_TEXT_BOX]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t.afR0pK)],
                parent: eU.s6.CHAT,
            },
            [eU.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t.AqGrEB)],
                parent: eU.s6.CHAT_TEXT_BOX,
            },
            [eU.s6.CHAT_THREADS]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t.B2panJ)],
                parent: eU.s6.CHAT,
            },
            [eU.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t.AInv5u)],
                parent: eU.s6.CHAT_THREADS,
            },
            [eU.s6.CHAT_SPOILERS]: {
                section: eB.oAB.TEXT,
                searchableTitles: [eV.intl.string(eV.t.QgwmV1)],
                parent: eU.s6.CHAT,
            },
            [eU.s6.NOTIFICATIONS]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.HcoRu7)],
                label: eV.intl.string(eV.t.HcoRu7),
                ariaLabel: eV.intl.string(eV.t.HcoRu7),
                element: eb.Z,
                url: eB.Z5c.SETTINGS("notifications"),
            },
            [eU.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t["/0WClp"])],
                parent: eU.s6.NOTIFICATIONS,
            },
            [eU.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eU.s6.NOTIFICATIONS,
            },
            [eU.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.VH8AIC)],
                parent: eU.s6.NOTIFICATIONS,
            },
            [eU.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.xSmFQE)],
                parent: eU.s6.NOTIFICATIONS,
                predicate: () => (0, K.isWindows)(),
            },
            [eU.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.z21l8P)],
                parent: eU.s6.NOTIFICATIONS,
            },
            [eU.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: ["New Notification Settings (Advanced, Staff Only)"],
                parent: eU.s6.NOTIFICATIONS,
                predicate: () => !1,
            },
            [eU.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: ["Restore most recent snapshot"],
                parent: eU.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eU.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: ["Launch Migration"],
                parent: eU.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eU.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: ["Toggle new system on/off"],
                parent: eU.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eU.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.TTvjd3)],
                parent: eU.s6.NOTIFICATIONS,
            },
            [eU.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.VpSKeH)],
                parent: eU.s6.NOTIFICATIONS,
            },
            [eU.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.D9yVAA)],
                parent: eU.s6.NOTIFICATIONS,
            },
            [eU.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.u6dc5O)],
                parent: eU.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eU.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.P8MG6u)],
                parent: eU.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eU.s6.NOTIFICATIONS_SOUNDS]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.MKWyKS)],
                parent: eU.s6.NOTIFICATIONS,
            },
            [eU.s6.NOTIFICATIONS_EMAILS]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.TPchzM)],
                parent: eU.s6.NOTIFICATIONS,
            },
            [eU.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t["B75+xc"])],
                parent: eU.s6.NOTIFICATIONS_EMAILS,
            },
            [eU.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.sxn7lZ)],
                parent: eU.s6.NOTIFICATIONS_EMAILS,
            },
            [eU.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.EkxXhY)],
                parent: eU.s6.NOTIFICATIONS_EMAILS,
            },
            [eU.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.jNrkrK)],
                parent: eU.s6.NOTIFICATIONS_EMAILS,
            },
            [eU.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.E8g1l5)],
                parent: eU.s6.NOTIFICATIONS_EMAILS,
            },
            [eU.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.Ra9Pws)],
                parent: eU.s6.NOTIFICATIONS_EMAILS,
            },
            [eU.s6.NOTIFICATIONS_REACTIONS]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.Rq0NFh)],
                parent: eU.s6.NOTIFICATIONS,
            },
            [eU.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.wtk08f)],
                parent: eU.s6.NOTIFICATIONS,
                predicate: () => (0, G.JN)("SettingsRendererConfig"),
            },
            [eU.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eB.oAB.NOTIFICATIONS,
                searchableTitles: [eV.intl.string(eV.t.pW4TMj)],
                parent: eU.s6.NOTIFICATIONS,
            },
            [eU.s6.KEYBINDS]: {
                section: eB.oAB.KEYBINDS,
                searchableTitles: [eV.intl.string(eV.t.T9DA2N)],
                label: eV.intl.string(eV.t.T9DA2N),
                element: eg.Z,
                url: eB.Z5c.SETTINGS("keybinds"),
            },
            [eU.s6.LANGUAGE]: {
                section: eB.oAB.LOCALE,
                searchableTitles: [eV.intl.string(eV.t.IHMsPj)],
                label: eV.intl.string(eV.t.IHMsPj),
                element: eE.Z,
                url: eB.Z5c.SETTINGS("language"),
            },
            [eU.s6.WINDOW_SETTINGS]: {
                section: eB.oAB.WINDOWS,
                searchableTitles: [eV.intl.string(eV.t.ZkDZoq)],
                label: eV.intl.string(eV.t.ZkDZoq),
                element: eN.Z,
                predicate: () => K.isPlatformEmbedded && (0, K.isWindows)(),
            },
            [eU.s6.LINUX_SETTINGS]: {
                section: eB.oAB.LINUX,
                searchableTitles: [eV.intl.string(eV.t["7pPjTU"])],
                label: eV.intl.string(eV.t["7pPjTU"]),
                element: e1,
                predicate: () => K.isPlatformEmbedded && (0, K.isLinux)(),
            },
            [eU.s6.STREAMER_MODE]: {
                section: eB.oAB.STREAMER_MODE,
                searchableTitles: [eV.intl.string(eV.t.S5GfOT)],
                label: eV.intl.string(eV.t.S5GfOT),
                ariaLabel: eV.intl.string(eV.t.S5GfOT),
                element: eT.Z,
                url: eB.Z5c.SETTINGS("streamer-mode"),
            },
            [eU.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eB.oAB.STREAMER_MODE,
                searchableTitles: [eV.intl.string(eV.t.bxGbHB)],
                parent: eU.s6.STREAMER_MODE,
            },
            [eU.s6.STREAMER_MODE_ENABLE]: {
                section: eB.oAB.STREAMER_MODE,
                searchableTitles: [eV.intl.string(eV.t.p9ZAJS)],
                parent: eU.s6.STREAMER_MODE,
            },
            [eU.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eB.oAB.STREAMER_MODE,
                searchableTitles: [eV.intl.string(eV.t.UpQziI)],
                parent: eU.s6.STREAMER_MODE,
            },
            [eU.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eB.oAB.STREAMER_MODE,
                searchableTitles: [eV.intl.string(eV.t.q7WNGh)],
                parent: eU.s6.STREAMER_MODE,
            },
            [eU.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eB.oAB.STREAMER_MODE,
                searchableTitles: [eV.intl.string(eV.t["1CWknJ"])],
                parent: eU.s6.STREAMER_MODE,
            },
            [eU.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eB.oAB.STREAMER_MODE,
                searchableTitles: [eV.intl.string(eV.t.qmYiYW)],
                parent: eU.s6.STREAMER_MODE,
            },
            [eU.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eB.oAB.STREAMER_MODE,
                searchableTitles: [eV.intl.string(eV.t["iA81+f"])],
                parent: eU.s6.STREAMER_MODE,
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
            [eU.s6.SETTINGS_ADVANCED]: {
                section: eB.oAB.ADVANCED,
                searchableTitles: [eV.intl.string(eV.t["8/udY2"])],
                label: eV.intl.string(eV.t["8/udY2"]),
                ariaLabel: eV.intl.string(eV.t["8/udY2"]),
                element: ei.ZP,
            },
            [eU.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eB.oAB.ADVANCED,
                searchableTitles: [eV.intl.string(eV.t.ObIb1d)],
                parent: eU.s6.SETTINGS_ADVANCED,
                predicate: () => Y.wS,
            },
            [eU.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eB.oAB.ADVANCED,
                searchableTitles: [eV.intl.string(eV.t["eOC/Fx"])],
                parent: eU.s6.SETTINGS_ADVANCED,
                predicate: () => K.isPlatformEmbedded,
            },
            [eU.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eB.oAB.ADVANCED,
                searchableTitles: [eV.intl.string(eV.t.fi3UQE)],
                parent: eU.s6.SETTINGS_ADVANCED,
                predicate: () => e7,
            },
            [eU.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eB.oAB.ADVANCED,
                searchableTitles: [eV.intl.string(eV.t.erOqlp)],
                parent: eU.s6.SETTINGS_ADVANCED,
                predicate: () => te,
            },
            [eU.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eB.oAB.ADVANCED,
                searchableTitles: [eV.intl.string(eV.t.qDZryM)],
                parent: eU.s6.SETTINGS_ADVANCED,
            },
            [eU.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eB.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: eU.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    g.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [eU.s6.ACTIVITY_PRIVACY]: {
                section: eB.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eV.intl.string(eV.t.Cq98yM)],
                label: eV.intl.string(eV.t.Cq98yM),
                ariaLabel: eV.intl.string(eV.t.Cq98yM),
                element: er.Z,
                predicate: () => !eK,
                url: eB.Z5c.SETTINGS("activity-privacy"),
            },
            [eU.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eK ? eB.oAB.GAMES : eB.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eV.intl.string(eV.t["8ka8lp"])],
                parent: eK ? eU.s6.GAMES_ACTIVITY_PRIVACY : eU.s6.ACTIVITY_PRIVACY,
            },
            [eU.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eK ? eB.oAB.GAMES : eB.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eV.intl.string(eV.t.VOszPD)],
                parent: eK ? eU.s6.GAMES_ACTIVITY_PRIVACY : eU.s6.ACTIVITY_PRIVACY,
            },
            [eU.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eK ? eB.oAB.GAMES : eB.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eU.CF],
                parent: eK ? eU.s6.GAMES_ACTIVITY_PRIVACY : eU.s6.ACTIVITY_PRIVACY,
            },
            [eU.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eB.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eV.intl.string(eV.t["4F2KoK"])],
                parent: eU.s6.ACTIVITY_PRIVACY,
            },
            [eU.s6.REGISTERED_GAMES]: {
                section: eB.oAB.REGISTERED_GAMES,
                searchableTitles: [eV.intl.string(eV.t.AVDyEh)],
                label: eV.intl.string(eV.t.AVDyEh),
                element: ep.Z,
                predicate: () => !eK && (0, eD.Jw)(),
            },
            [eU.s6.OVERLAY]: {
                section: eB.oAB.OVERLAY,
                searchableTitles: [eV.intl.string(eV.t["9cb1U1"]), eV.intl.string(eV.t.HcoRu7)],
                label: eV.intl.string(eV.t["9cb1U1"]),
                element: ey.Z,
                predicate: () => !eK && A,
            },
            [eU.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, E.Z)(!0),
                searchableTitles: [eV.intl.string(eV.t.LRmNAg)],
                label: eV.intl.string(eV.t.LRmNAg),
            },
            [eU.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    H.default.track(eB.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, W.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                H.default.track(eB.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, p.Z)(e);
                            },
                        });
                },
                searchableTitles: [eV.intl.string(eV.t.sMEktb)],
                label: eV.intl.string(eV.t.sMEktb),
                ariaLabel: eV.intl.string(eV.t.sMEktb),
            },
            [eU.s6.HYPESQUAD]: {
                section: eB.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eV.intl.string(eV.t["k0R+4e"])],
                label: eV.intl.string(eV.t["k0R+4e"]),
                element: eh.Z,
                predicate: () => !tr,
            },
            [eU.s6.TOWNHALL]: {
                section: eB.oAB.TOWNHALL,
                searchableTitles: [eV.intl.string(eV.t.dnZNER)],
                label: eV.intl.string(eV.t.dnZNER),
                predicate: () => tr,
                onClick: () => {
                    (0, p.Z)("https://discord.gg/discord-townhall"), (0, eR.default)();
                },
            },
            [eU.s6.EXPERIMENTS]: {
                section: eB.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: ew.Z,
                predicate: () => B.Z.isDeveloper,
                url: eB.Z5c.SETTINGS("experiments"),
            },
            [eU.s6.DEVELOPER_OPTIONS]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: ef.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eU.s6.DEVELOPER_OPTIONS,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eU.s6.DEVELOPER_OPTIONS,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eU.s6.DEVELOPER_OPTIONS,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eU.s6.DEVELOPER_OPTIONS,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eU.s6.DEVELOPER_OPTIONS,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eU.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eU.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eU.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eU.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eU.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eU.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eU.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e2 && B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eU.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eU.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eU.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e2 && B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eU.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eU.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eU.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e2 && B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Toggleable Components"],
                parent: eU.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e2 && B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eU.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e2 && B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eU.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e2 && B.Z.isDeveloper && Z.default.layoutDebuggingEnabled,
            },
            [eU.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eU.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e2 && B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eU.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e2 && B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eU.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eU.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eU.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eU.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eU.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eU.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => m.q && B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eU.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eU.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eU.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eU.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eU.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eB.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eU.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.REVENUE_STORYBOOK]: {
                section: eB.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: [
                    "Revenue Storybook",
                    "Payment Components",
                    "Orb Components",
                    "Virtual Currency",
                    "Nitro Components",
                ],
                label: "Revenue Storybook",
                element: eM.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.PAYMENT_COMPONENTS]: {
                section: eB.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Payment Components"],
                label: "Payment Components",
                element: eM.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.ORB_COMPONENTS]: {
                section: eB.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Orb Components"],
                label: "Orb Components",
                element: eM.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.NITRO_COMPONENTS]: {
                section: eB.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Nitro Components"],
                label: "Nitro Components",
                element: eM.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.TEXT_PLAYGROUND]: {
                section: eB.oAB.TEXT_PLAYGROUND,
                searchableTitles: ["Text Playground"],
                label: "Text Playground",
                element: eA.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DESIGN_SYSTEMS]: {
                section: eB.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Design Systems"],
                label: "Design Systems",
                element: ed.Z,
                predicate: () => B.Z.isDeveloper,
                url: eB.Z5c.SETTINGS("design-systems"),
            },
            [eU.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eB.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Colors"],
                label: "Colors",
                element: ed.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.ANIMATION_TESTING]: {
                section: eB.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Animation Testing"],
                label: "Animation Testing",
                element: ed.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eB.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Components"],
                label: "Components",
                element: ed.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.TEXT_COMPONENTS]: {
                section: eB.oAB.TEXT_COMPONENT,
                searchableTitles: ["Text Components"],
                label: "Text Components",
                element: ee.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.SHOP_KEEPER]: {
                section: eB.oAB.SHOP_KEEPER,
                searchableTitles: ["Shop Keeper"],
                label: "Shop Keeper",
                element: I.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.QUEST_PREVIEW_TOOL]: {
                section: eB.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ["Quest Preview Tool"],
                label: "Quest Preview Tool",
                element: j.Z,
                predicate: () => (0, L.X)({ location: eZ.dr.QUEST_PREVIEW_TOOL }),
            },
            [eU.s6.QUEST_PREVIEW_TOOL_2]: {
                section: eB.oAB.QUEST_PREVIEW_TOOL_2,
                searchableTitles: ["Quest Preview Tool 2"],
                label: "Quest Preview Tool 2",
                element: () => (0, r.jsx)(M.Z, { questId: null == b ? void 0 : b.quest_id }),
                predicate: () => (0, L.T)({ location: eZ.dr.QUEST_PREVIEW_TOOL_2 }),
            },
            [eU.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM]: {
                section: f.ID.CUSTOM,
                searchableTitles: eP.Y,
                label: "Developer Education",
                element: eP.$,
                predicate: () => B.Z.isDeveloper,
            },
            [eU.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            eX(
                                ez(
                                    {
                                        header: eV.intl.string(eV.t["2jxGen"]),
                                        confirmText: eV.intl.string(eV.t["2jxGen"]),
                                        cancelText: eV.intl.string(eV.t["ETE/oK"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: eV.intl.string(eV.t.SUnWBA),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: eV.intl.string(eV.t["2jxGen"]),
                ariaLabel: eV.intl.string(eV.t["2jxGen"]),
                icon: (0, r.jsx)(s.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [eU.s6.SOCIAL_LINKS]: {
                section: f.ID.CUSTOM,
                element: $.Z,
            },
            [eU.s6.CLIENT_DEBUG_INFO]: {
                section: f.ID.CUSTOM,
                element: X.Z,
            },
        });
    };
