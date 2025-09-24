n.d(t, {
    $Z: () => ez,
    OF: () => eX,
    W8: () => eQ,
    c$: () => eq,
    iE: () => e$,
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
    I = n(377171),
    T = n(243778),
    S = n(594928),
    A = n(18438),
    C = n(778825),
    N = n(351780),
    R = n(231765),
    P = n(813732),
    w = n(398140),
    D = n(564344),
    x = n(36243),
    L = n(877109),
    j = n(145158),
    M = n(172416),
    k = n(462354),
    U = n(906467),
    G = n(857192),
    B = n(131951),
    Z = n(25990),
    F = n(626135),
    V = n(572004),
    H = n(49012),
    Y = n(358085),
    W = n(998502),
    K = n(695346),
    z = n(604227),
    q = n(321614),
    X = n(748717),
    Q = n(419636),
    J = n(799071),
    $ = n(154022),
    ee = n(736752),
    et = n(309739),
    en = n(64914),
    er = n(501348),
    ei = n(795594),
    ea = n(443702),
    eo = n(327192),
    es = n(949493),
    el = n(675047),
    ec = n(177508),
    eu = n(956699),
    ed = n(54942),
    ef = n(293389),
    e_ = n(88624),
    ep = n(387747),
    eh = n(389650),
    em = n(649157),
    eg = n(593648),
    eE = n(327885),
    eb = n(595242),
    ey = n(463153),
    eO = n(36192),
    ev = n(889029),
    eI = n(400287),
    eT = n(554042),
    eS = n(936982),
    eA = n(200645),
    eC = n(342386),
    eN = n(924983),
    eR = n(287490),
    eP = n(168308),
    ew = n(277329),
    eD = n(273927),
    ex = n(604224),
    eL = n(345655),
    ej = n(726985),
    eM = n(583139),
    ek = n(981631),
    eU = n(46140),
    eG = n(65154),
    eB = n(388032),
    eZ = n(693450),
    eF = n(345909),
    eV = n(202323);
function eH(e, t, n) {
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
function eY(e) {
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
                eH(e, t, n[t]);
            });
    }
    return e;
}
function eW(e, t) {
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
function eK(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eW(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ez = () => {
        let e = [a.z.CLIENT_THEMES_SETTINGS_BADGE, a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
        return (
            b.Mc.getCurrentConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            h.n.getConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE),
            e
        );
    },
    eq = () => {
        let e = ez(),
            [t] = (0, T.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: eB.intl.string(eB.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ||
                t === a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE
              ? (0, r.jsx)(s.IGR, { text: eB.intl.string(eB.t.y2b7CA) })
              : null;
    },
    eX = () => {
        let e = [];
        return (
            (0, M.h)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            S.JH.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    eQ = () => {
        let e = eX(),
            [t] = (0, T.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: eB.intl.string(eB.t.y2b7CA) })
            : null;
    },
    eJ = eA.Z,
    e$ = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: h,
            searchParams: b,
            numOfPendingFamilyRequests: T,
            isOverlaySupported: S,
            isClipsBetaTagShowing: M = !1,
            shouldMergeGameSettings: eH,
            isKeywordFilteringEnabled: eW,
            isStaff: e$,
            isInappropriateConversationWarningEnabled: e0,
            isInapproprateConversationsDefaultOn: e1,
            paymentsBlocked: e2,
            isEligibleForQuests: e3,
            isStricterMessageRequestsEnabled: e4,
            hasLibraryApplication: e8,
            hasTOTPEnabled: e5,
            developerMode: e6,
            isAdultUser: e7,
            hasSecureFramesVerifiedUserIds: e9,
            hypeSquadRemoved: te,
            hasIgnoredUsers: tt,
            hasBlockedUsers: tn,
            isEligibleForSensitiveContentDefaults: tr,
            inputMode: ti,
            activeInputProfile: ta,
            isInputProfileCustom: to,
            isDataUsage3PToggleEnabled: ts,
        } = e;
        return Object.freeze({
            [ej.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: ey.Z,
            },
            [ej.s6.ACCOUNT_SECURITY_TAB]: {
                section: ek.oAB.ACCOUNT,
                searchableTitles: [eB.intl.string(eB.t.Am9YHh)],
                label: eB.intl.string(eB.t.Am9YHh),
            },
            [ej.s6.ACCOUNT]: {
                section: ek.oAB.ACCOUNT,
                searchableTitles: [eB.intl.string(eB.t["JAIM/v"])],
                label: eB.intl.string(eB.t["JAIM/v"]),
                ariaLabel: eB.intl.string(eB.t["JAIM/v"]),
                element: ee.Z,
                url: ek.Z5c.SETTINGS("account"),
            },
            [ej.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eB.intl.string(eB.t.LYju5O)],
                parent: ej.s6.ACCOUNT,
                section: ek.oAB.ACCOUNT,
            },
            [ej.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eB.intl.string(eB.t["9AjdkJ"])],
                section: ek.oAB.ACCOUNT,
                parent: ej.s6.ACCOUNT_PROFILE,
            },
            [ej.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eB.intl.string(eB.t.Ulqq6O)],
                section: ek.oAB.ACCOUNT,
                parent: ej.s6.ACCOUNT_PROFILE,
            },
            [ej.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    eB.intl.string(eB.t["/52UY2"]),
                    eB.intl.string(eB.t.sK0dmJ),
                    eB.intl.string(eB.t.XxRj7e),
                    eB.intl.string(eB.t.yNGjyM),
                    eB.intl.string(eB.t.KPGVWl),
                ],
                section: ek.oAB.ACCOUNT,
                parent: ej.s6.ACCOUNT_PROFILE,
                predicate: () => tr,
            },
            [ej.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eB.intl.string(eB.t["+JkHPz"])],
                section: ek.oAB.ACCOUNT,
                parent: ej.s6.ACCOUNT_PROFILE,
            },
            [ej.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eB.intl.string(eB.t.oP5zGB)],
                section: ek.oAB.ACCOUNT,
                parent: ej.s6.ACCOUNT_PROFILE,
            },
            [ej.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eB.intl.string(eB.t.pKSjEh)],
                section: ek.oAB.ACCOUNT,
                parent: ej.s6.ACCOUNT,
            },
            [ej.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eB.intl.string(eB.t["FRep5+"])],
                section: ek.oAB.ACCOUNT,
                parent: ej.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [ej.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eB.intl.string(eB.t["7qKDrK"])],
                section: ek.oAB.ACCOUNT,
                parent: ej.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [ej.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eB.intl.string(eB.t.m0FidH)],
                section: ek.oAB.ACCOUNT,
                parent: ej.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [ej.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eB.intl.string(eB.t.cDgKtb)],
                section: ek.oAB.ACCOUNT,
                parent: ej.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e5,
            },
            [ej.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eB.intl.string(eB.t["D+aE7u"])],
                section: ek.oAB.ACCOUNT,
                parent: ej.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e5,
            },
            [ej.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eB.intl.string(eB.t.fZSi1N)],
                section: ek.oAB.ACCOUNT,
                parent: ej.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [ej.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eB.intl.string(eB.t.uHAJ5u)],
                section: ek.oAB.ACCOUNT,
                parent: ej.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [ej.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eB.intl.string(eB.t.vrOCCg)],
                section: ek.oAB.ACCOUNT,
                parent: ej.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [ej.s6.ACCOUNT_REMOVAL]: {
                section: ek.oAB.ACCOUNT,
                searchableTitles: [eB.intl.string(eB.t.ZKsIkp)],
                parent: ej.s6.ACCOUNT,
            },
            [ej.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: ek.oAB.ACCOUNT,
                searchableTitles: [eB.intl.string(eB.t.jf5GGR)],
                parent: ej.s6.ACCOUNT_REMOVAL,
            },
            [ej.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: ek.oAB.ACCOUNT,
                searchableTitles: [eB.intl.string(eB.t["8lQ2ra"])],
                parent: ej.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [ej.s6.GAMES]: {
                section: ek.oAB.GAMES,
                searchableTitles: [eB.intl.string(eB.t.URyqtL)],
                label: eB.intl.string(eB.t.URyqtL),
                ariaLabel: eB.intl.string(eB.t.URyqtL),
                element: ew.Z,
                predicate: () => eH,
            },
            [ej.s6.GAMES_MY_GAMES]: {
                section: ek.oAB.GAMES,
                searchableTitles: [eB.intl.string(eB.t["5DMgp6"])],
                parent: ej.s6.GAMES,
            },
            [ej.s6.GAMES_CLIPS]: {
                section: ek.oAB.GAMES,
                searchableTitles: [eB.intl.string(eB.t.z2jK6e)],
                parent: ej.s6.GAMES,
            },
            [ej.s6.GAMES_OVERLAY]: {
                section: ek.oAB.GAMES,
                searchableTitles: [eB.intl.string(eB.t["9cb1U1"])],
                parent: ej.s6.GAMES,
            },
            [ej.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: ek.oAB.GAMES,
                searchableTitles: [eB.intl.string(eB.t.Cq98yM)],
                parent: ej.s6.GAMES,
            },
            [ej.s6.PROFILE_CUSTOMIZATION]: {
                section: ek.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [eB.intl.string(eB.t["vi7f+v"])],
                label: eB.intl.string(eB.t["vi7f+v"]),
                ariaLabel: eB.intl.string(eB.t["vi7f+v"]),
                element: D.Z,
                newIndicator: (0, r.jsx)(eQ, {}),
                newIndicatorDismissibleContentTypes: [...eX()],
                notice: {
                    stores: [Z.Z, C.Z],
                    element: w.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, A.It)(), (0, u.P6)(), d.Z.clearSubsection(ek.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: ek.Z5c.SETTINGS("profile-customization"),
            },
            [ej.s6.PROFILE_DISPLAY_NAME]: {
                section: ek.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eB.intl.string(eB.t["9AjdkJ"])],
                parent: ej.s6.PROFILE_CUSTOMIZATION,
            },
            [ej.s6.PROFILE_USER_PROFILE]: {
                section: ek.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eB.intl.string(eB.t["2p07FR"]), eB.intl.string(eB.t["7vhiqq"])],
                parent: ej.s6.PROFILE_CUSTOMIZATION,
            },
            [ej.s6.PROFILE_SERVER_PROFILES]: {
                section: ek.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eB.intl.string(eB.t.kPHroa)],
                parent: ej.s6.PROFILE_CUSTOMIZATION,
            },
            [ej.s6.CONTENT_SOCIAL]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                label: eB.intl.string(eB.t["+o1pDQ"]),
                searchableTitles: [eB.intl.string(eB.t["+o1pDQ"])],
                ariaLabel: eB.intl.string(eB.t["+o1pDQ"]),
                element: es.Z,
                url: ek.Z5c.SETTINGS("content-and-social"),
            },
            [ej.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t["+o1pDQ"]), eB.intl.string(eB.t["/7xJCA"])],
                parent: ej.s6.CONTENT_SOCIAL,
            },
            [ej.s6.CONTENT_SOCIAL_DISCORD]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t["+o1pDQ"]), eB.intl.string(eB.t["/7xJCA"])],
                parent: ej.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [ej.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t.YpCiMj)],
                parent: ej.s6.CONTENT_SOCIAL,
            },
            [ej.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                label: eB.intl.string(eB.t.YpCiMj),
                searchableTitles: [eB.intl.string(eB.t.YpCiMj)],
                ariaLabel: eB.intl.string(eB.t.YpCiMj),
                parent: ej.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: ek.Z5c.SETTINGS(ek.oAB.CONTENT_AND_SOCIAL, eM.C),
            },
            [ej.s6.DATA_PRIVACY]: {
                section: ek.oAB.DATA_AND_PRIVACY,
                label: eB.intl.string(eB.t.OAuOHB),
                searchableTitles: [eB.intl.string(eB.t.OAuOHB)],
                ariaLabel: eB.intl.string(eB.t.OAuOHB),
                element: el.Z,
                url: ek.Z5c.SETTINGS("data-and-privacy"),
            },
            [ej.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: ek.oAB.ACCOUNT,
                searchableTitles: [eB.intl.string(eB.t["Vov/9v"])],
                parent: ej.s6.ACCOUNT,
            },
            [ej.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: ek.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eB.intl.string(eB.t.WWaFn5)],
                parent: ej.s6.DATA_PRIVACY,
                predicate: () => (0, Y.isDesktop)(),
            },
            [ej.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: ek.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eB.intl.string(eB.t["opi/XF"])],
                parent: ej.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [ej.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t.xVRG4O)],
                parent: ej.s6.CONTENT_SOCIAL_DISCORD,
            },
            [ej.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t.fyA119)],
                parent: ej.s6.CONTENT_SOCIAL_DISCORD,
            },
            [ej.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t.fyA119)],
                parent: ej.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [ej.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t["/U8Iwc"])],
                parent: ej.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [ej.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t["ms+TmZ"])],
                parent: ej.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [ej.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t["y62Z/f"])],
                parent: ej.s6.CONTENT_SOCIAL,
            },
            [ej.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: ek.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eB.intl.string(eB.t.SRZyHh)],
                parent: ej.s6.DATA_PRIVACY,
            },
            [ej.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eB.intl.string(eB.t.uEz8JC),
                    eB.intl.string(eB.t["N/oRIy"]),
                    eB.intl.string(eB.t.QVdYsL),
                    eB.intl.string(eB.t["aWD+tr"]),
                    eB.intl.string(eB.t["5mnTa2"]),
                ],
                parent: ej.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [ej.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eB.intl.string(eB.t["Hj/Bur"]),
                    eB.intl.string(eB.t["N/oRIy"]),
                    eB.intl.string(eB.t.QVdYsL),
                    eB.intl.string(eB.t["aWD+tr"]),
                    eB.intl.string(eB.t["5mnTa2"]),
                    eB.intl.string(eB.t.K0OWPz),
                ],
                parent: ej.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [ej.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eB.intl.string(eB.t["Hj/Bur"]),
                    eB.intl.string(eB.t["N/oRIy"]),
                    eB.intl.string(eB.t.QVdYsL),
                    eB.intl.string(eB.t["aWD+tr"]),
                    eB.intl.string(eB.t["5mnTa2"]),
                ],
                parent: ej.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [ej.s6.GORE_MEDIA_REDACTION]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eB.intl.string(eB.t["Hj/Bur"]),
                    eB.intl.string(eB.t["N/oRIy"]),
                    eB.intl.string(eB.t.QVdYsL),
                    eB.intl.string(eB.t["aWD+tr"]),
                    eB.intl.string(eB.t.K0OWPz),
                ],
                parent: ej.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [ej.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eB.intl.string(eB.t.JzaP4u),
                    eB.intl.string(eB.t.H9XOl5),
                    eB.intl.string(eB.t.k4W40N),
                ],
                parent: ej.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [ej.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t["L+yTsb"])],
                parent: ej.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [ej.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t.XahVjo)],
                parent: ej.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [ej.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                parent: ej.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [ej.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t.RAQUSE), eB.intl.string(eB.t.wbYDfX)],
                parent: ej.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [ej.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t["3o2ojo"])],
                parent: ej.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !e4,
            },
            [ej.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t.OLwZDQ)],
                parent: ej.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [ej.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t.wBkwu7)],
                parent: ej.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [ej.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: ek.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eB.intl.string(eB.t.XuADY2)],
                parent: ej.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [ej.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: ek.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eB.intl.string(eB.t.MNKzys)],
                parent: ej.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [ej.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: ek.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eB.intl.string(eB.t.VkS7YW), eB.intl.string(eB.t.sJYh5u)],
                parent: ej.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [ej.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: ek.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eB.intl.string(eB.t.CyLYKS)],
                parent: ej.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                predicate: () => ts,
            },
            [ej.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: ek.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.CF],
                parent: ej.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [ej.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: ek.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eB.intl.string(eB.t.dmBSKi)],
                parent: ej.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [ej.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t["1UaUy8"]), eB.intl.string(eB.t["xIk/iI"])],
                parent: ej.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eW,
            },
            [ej.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eB.intl.string(eB.t.qFsx5u)],
                parent: ej.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e0 && !e7 && !e1,
            },
            [ej.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: ek.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eB.intl.string(eB.t["5b3FND"])],
                parent: ej.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => e9,
            },
            [ej.s6.PRIVACY_FAMILY_CENTER]: {
                section: ek.oAB.FAMILY_CENTER,
                searchableTitles: [eB.intl.string(eF.default.gntCQU)],
                label: eB.intl.string(eF.default.gntCQU),
                ariaLabel: eB.intl.string(eF.default.gntCQU),
                element: ed.Z,
                badgeCount: T,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eB.intl.string(eB.t.y2b7CA),
                    color: I.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: ek.Z5c.SETTINGS("family-center"),
            },
            [ej.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: ek.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eB.intl.string(eB.t.BG7Qsb)],
                parent: ej.s6.DATA_PRIVACY,
            },
            [ej.s6.AUTHORIZED_APPS]: {
                section: ek.oAB.AUTHORIZED_APPS,
                searchableTitles: [eB.intl.string(eB.t["f6kk+v"])],
                label: eB.intl.string(eB.t["f6kk+v"]),
                element: ei.Z,
                url: ek.Z5c.SETTINGS("authorized-apps"),
            },
            [ej.s6.SESSIONS]: {
                section: ek.oAB.SESSIONS,
                searchableTitles: [eB.intl.string(eB.t["+1h0k5"])],
                label: eB.intl.string(eB.t["+1h0k5"]),
                ariaLabel: eB.intl.string(eB.t["+1h0k5"]),
                element: eO.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
            },
            [ej.s6.CONNECTIONS]: {
                section: ek.oAB.CONNECTIONS,
                searchableTitles: [eB.intl.string(eB.t["3fe7U1"])],
                label: eB.intl.string(eB.t["3fe7U1"]),
                ariaLabel: eB.intl.string(eB.t["3fe7U1"]),
                element: eo.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: ek.Z5c.SETTINGS("connections"),
            },
            [ej.s6.THIRD_PARTY_ACCESS]: {
                section: ek.oAB.CONNECTIONS,
                searchableTitles: [
                    eB.intl.string(eB.t["Ig/XFR"]),
                    eB.intl.string(eB.t["3fe7U1"]),
                    eB.intl.string(eB.t["f6kk+v"]),
                ],
                label: eB.intl.string(eB.t["Ig/XFR"]),
                parent: ej.s6.CONNECTIONS,
                element: eS.Z,
            },
            [ej.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: ek.oAB.CONNECTIONS,
                searchableTitles: [eB.intl.string(eB.t["+/hZMz"])],
                parent: ej.s6.CONNECTIONS,
                element: eo.Z,
            },
            [ej.s6.CLIPS]: {
                section: ek.oAB.CLIPS,
                searchableTitles: [eB.intl.string(eB.t.z2jK6e)],
                label: eB.intl.string(eB.t.z2jK6e),
                ariaLabel: eB.intl.string(eB.t.z2jK6e),
                icon: M ? (0, r.jsx)(y.Z, {}) : void 0,
                element: O.Z,
                predicate: () => !eH,
                url: ek.Z5c.SETTINGS("clips"),
            },
            [ej.s6.RESTRICTED_USERS]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                parent: ej.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eB.intl.string(eB.t["3wRorq"]),
                element: eD.ZP,
                predicate: () => tt || tn,
            },
            [ej.s6.BLOCKED_USERS]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                parent: ej.s6.RESTRICTED_USERS,
                label: eB.intl.string(eB.t.PFOUKS),
                searchableTitles: [eB.intl.string(eB.t.PFOUKS)],
                element: eD.GF,
                predicate: () => tn,
            },
            [ej.s6.IGNORED_USERS]: {
                section: ek.oAB.CONTENT_AND_SOCIAL,
                parent: ej.s6.RESTRICTED_USERS,
                searchableTitles: [eB.intl.string(eB.t["93ZDWF"])],
                label: eB.intl.string(eB.t["93ZDWF"]),
                element: eD.yo,
                predicate: () => tt,
            },
            [ej.s6.PREMIUM]: {
                section: ek.oAB.PREMIUM,
                ariaLabel: eB.intl.string(eB.t.Ipxkoq),
                searchableTitles: [eB.intl.string(eB.t.Ipxkoq)],
                label: eB.intl.string(eB.t.Ipxkoq),
                element: X.Z,
                className: eV.premiumTab,
            },
            [ej.s6.GUILD_BOOSTING]: {
                section: ek.oAB.GUILD_BOOSTING,
                searchableTitles: [eB.intl.string(eB.t["+CbP2t"])],
                label: eB.intl.string(eB.t["+CbP2t"]),
                element: eb.Z,
            },
            [ej.s6.SUBSCRIPTIONS]: {
                section: ek.oAB.SUBSCRIPTIONS,
                ariaLabel: eB.intl.string(eB.t.trSpHR),
                searchableTitles: [eB.intl.string(eB.t.trSpHR)],
                label: eB.intl.string(eB.t.trSpHR),
                element: P.Z,
                icon: h
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [ej.s6.SUBSCRIPTIONS_CREDITS]: {
                section: ek.oAB.SUBSCRIPTIONS,
                searchableTitles: [eB.intl.string(eB.t["2GKrvr"])],
                parent: ej.s6.SUBSCRIPTIONS,
            },
            [ej.s6.GIFT_INVENTORY]: {
                section: ek.oAB.INVENTORY,
                searchableTitles: [eB.intl.string(eB.t["jcSP+v"])],
                label: eB.intl.string(eB.t["jcSP+v"]),
                element: ep.Z,
                ariaLabel: eB.intl.string(eB.t["jcSP+v"]),
                badgeCount: t,
            },
            [ej.s6.GIFT_CODE_REDEMPTION]: {
                section: ek.oAB.INVENTORY,
                searchableTitles: [eB.intl.string(eB.t["il+VCg"])],
                parent: ej.s6.GIFT_INVENTORY,
                predicate: () => !e2,
            },
            [ej.s6.GIFT_INVENTORY_QUESTS]: {
                section: ek.oAB.INVENTORY,
                searchableTitles: [eB.intl.string(eB.t.JALI2N)],
                parent: ej.s6.GIFT_INVENTORY,
                predicate: () => e3,
            },
            [ej.s6.GIFT_INVENTORY_LIST]: {
                section: ek.oAB.INVENTORY,
                searchableTitles: [eB.intl.string(eB.t["9KeUbW"])],
                parent: ej.s6.GIFT_INVENTORY,
                predicate: () => !e2,
            },
            [ej.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: ek.oAB.INVENTORY,
                searchableTitles: [eB.intl.string(eB.t.vwMEHR)],
                parent: ej.s6.GIFT_INVENTORY,
                predicate: () => e2,
            },
            [ej.s6.BILLING]: {
                section: ek.oAB.BILLING,
                searchableTitles: [eB.intl.string(eB.t.oeUm2t)],
                label: eB.intl.string(eB.t.oeUm2t),
                ariaLabel: eB.intl.string(eB.t.oeUm2t),
                element: ea.Z,
            },
            [ej.s6.BILLING_PAYMENT_METHODS]: {
                section: ek.oAB.BILLING,
                searchableTitles: [eB.intl.string(eB.t.W26xGR)],
                parent: ej.s6.BILLING,
            },
            [ej.s6.BILLING_TRANSACTION_HISTORY]: {
                section: ek.oAB.BILLING,
                searchableTitles: [eB.intl.string(eB.t.obLrcH)],
                parent: ej.s6.BILLING,
            },
            [ej.s6.APPEARANCE]: {
                section: ek.oAB.APPEARANCE,
                searchableTitles: [eB.intl.string(eB.t["iHH+k5"])],
                label: eB.intl.string(eB.t["iHH+k5"]),
                ariaLabel: eB.intl.string(eB.t["iHH+k5"]),
                element: er.Z,
                newIndicator: (0, r.jsx)(eq, {}),
                newIndicatorDismissibleContentTypes: ez(),
                url: ek.Z5c.SETTINGS("appearance"),
            },
            [ej.s6.APPEARANCE_THEME]: {
                section: ek.oAB.APPEARANCE,
                searchableTitles: [eB.intl.string(eB.t.Ksh3io)],
                parent: ej.s6.APPEARANCE,
            },
            [ej.s6.APPEARANCE_COLOR]: {
                section: ek.oAB.APPEARANCE,
                searchableTitles: [eB.intl.string(eB.t.OCOOiI)],
                parent: ej.s6.APPEARANCE_THEME,
            },
            [ej.s6.APPEARANCE_ICON]: {
                section: ek.oAB.APPEARANCE,
                searchableTitles: [eB.intl.string(eB.t.RPh2oq)],
                parent: ej.s6.APPEARANCE_THEME,
            },
            [ej.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: ek.oAB.APPEARANCE,
                searchableTitles: [eB.intl.string(eB.t.ZEoGMT)],
                parent: ej.s6.APPEARANCE,
            },
            [ej.s6.APPEARANCE_LIST_SPACING]: {
                section: ek.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: ej.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eB.intl.string(eB.t.y2b7CA),
                    color: I.Z.BG_BRAND,
                }),
            },
            [ej.s6.APPEARANCE_SCALING_SPACING]: {
                section: ek.oAB.APPEARANCE,
                searchableTitles: [eB.intl.string(eB.t.qPOqoK)],
                parent: ej.s6.APPEARANCE,
            },
            [ej.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: ek.oAB.APPEARANCE,
                searchableTitles: [
                    eB.intl.string(eB.t.dyamEB),
                    eB.intl.string(eB.t.p8NOws),
                    eB.intl.string(eB.t["+o/sOj"]),
                ],
                parent: ej.s6.APPEARANCE,
                predicate: () =>
                    j.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [ej.s6.ACCESSIBILITY]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.G0neg4)],
                label: eB.intl.string(eB.t.G0neg4),
                ariaLabel: eB.intl.string(eB.t.G0neg4),
                element: $.Z,
                url: ek.Z5c.SETTINGS("accessibility"),
            },
            [ej.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.aZlePj)],
                parent: ej.s6.ACCESSIBILITY,
            },
            [ej.s6.ACCESSIBILITY_SATURATION]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t["5PWWCQ"])],
                parent: ej.s6.ACCESSIBILITY,
            },
            [ej.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.bQCodH)],
                parent: ej.s6.ACCESSIBILITY_SATURATION,
            },
            [ej.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.OLZFBw)],
                parent: ej.s6.ACCESSIBILITY,
            },
            [ej.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t["+IsihY"])],
                parent: ej.s6.ACCESSIBILITY,
                predicate: () => (0, v.l)("SettingsRendererConfig"),
            },
            [ej.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.uSOPWl)],
                parent: ej.s6.ACCESSIBILITY,
            },
            [ej.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eZ.default["2gFUEx"])],
                parent: ej.s6.ACCESSIBILITY,
            },
            [ej.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.BT8Bmp)],
                parent: ej.s6.ACCESSIBILITY,
            },
            [ej.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t["sSY+mJ"])],
                parent: ej.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [ej.s6.ACCESSIBILITY_CONTRAST]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.TYyfOz)],
                parent: ej.s6.ACCESSIBILITY,
            },
            [ej.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.cguieX)],
                parent: ej.s6.ACCESSIBILITY_CONTRAST,
            },
            [ej.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.e3TR1d)],
                parent: ej.s6.ACCESSIBILITY,
            },
            [ej.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.b3XBzs)],
                parent: ej.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [ej.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.Iayoh4)],
                parent: ej.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [ej.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.iIaOlZ)],
                parent: ej.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [ej.s6.ACCESSIBILITY_STICKERS]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t["6NtAuL"])],
                parent: ej.s6.ACCESSIBILITY,
            },
            [ej.s6.ACCESSIBILITY_MESSAGES]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.onqU6u)],
                parent: ej.s6.ACCESSIBILITY,
            },
            [ej.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t["3Fztn5"])],
                parent: ej.s6.ACCESSIBILITY_MESSAGES,
            },
            [ej.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.TZ2hZG)],
                parent: ej.s6.ACCESSIBILITY_MESSAGES,
            },
            [ej.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.VpSKeH)],
                parent: ej.s6.ACCESSIBILITY,
            },
            [ej.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.qvTIwc)],
                parent: ej.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [ej.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [eB.intl.string(eB.t.lsW5Eh)],
                parent: ej.s6.ACCESSIBILITY,
            },
            [ej.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: ek.oAB.ACCESSIBILITY,
                searchableTitles: [ej.CF],
                parent: ej.s6.ACCESSIBILITY,
            },
            [ej.s6.VOICE_AND_VIDEO]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.B1fFpa)],
                label: eB.intl.string(eB.t.B1fFpa),
                ariaLabel: eB.intl.string(eB.t.B1fFpa),
                element: ex.Z,
                predicate: () => B.Z.isSupported(),
                url: ek.Z5c.SETTINGS("voice"),
            },
            [ej.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.K3lovL), eB.intl.string(eB.t.NiTd0d)],
                parent: ej.s6.VOICE_AND_VIDEO,
            },
            [ej.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.FlNoSU)],
                parent: ej.s6.VOICE_AND_VIDEO,
            },
            [ej.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.ABjMWF)],
                parent: ej.s6.VOICE_AND_VIDEO,
            },
            [ej.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.OFpL3d)],
                parent: ej.s6.VOICE_AND_VIDEO,
            },
            [ej.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.KDdjoq), eB.intl.string(eB.t.FeUKeH)],
                parent: ej.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [ej.s6.VOICE_AND_VIDEO_VOICE]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.K3lovL), eB.intl.string(eB.t.NiTd0d)],
                parent: ej.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [ej.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: ek.oAB.VOICE,
                searchableTitles: [
                    eB.intl.string(eB.t.hHMYbW),
                    eB.intl.string(eB.t.dl18zc),
                    eB.intl.string(eB.t.nuFtHB),
                    eB.intl.string(eB.t["3182VF"]),
                    eB.intl.string(eB.t["DGq/PT"]),
                ],
                parent: ej.s6.VOICE_AND_VIDEO_VOICE,
            },
            [ej.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: ek.oAB.VOICE,
                searchableTitles: [
                    eB.intl.string(eB.t.OX2Bnp),
                    eB.intl.string(eB.t.eATD2N),
                    eB.intl.string(eB.t.nuFtHB),
                    eB.intl.string(eB.t["3182VF"]),
                    eB.intl.string(eB.t["DGq/PT"]),
                ],
                parent: ej.s6.VOICE_AND_VIDEO_VOICE,
            },
            [ej.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.gyljWF), eB.intl.string(eB.t.nuFtHB)],
                parent: ej.s6.VOICE_AND_VIDEO_VOICE,
            },
            [ej.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: ek.oAB.VOICE,
                searchableTitles: [
                    eB.intl.string(eB.t.LM3U3t),
                    eB.intl.string(eB.t.nuFtHB),
                    eB.intl.string(eB.t.VZPR0d),
                    eB.intl.string(eB.t.cjPbpa),
                ],
                parent: ej.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, q.R)({
                        location: "SettingsRendererConfig",
                        autoTrackExposure: !1,
                    });
                    return e.length > 0;
                },
            },
            [ej.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t["pS+K2N"]), eB.intl.string(eB.t.nuFtHB)],
                parent: ej.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => ta !== eL._.STUDIO,
            },
            [ej.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t["sqUm+v"]), eB.intl.string(eB.t.nuFtHB)],
                parent: ej.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => ti === eG.pM.VOICE_ACTIVITY && to,
            },
            [ej.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.e7LIiY)],
                parent: ej.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [ej.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.nzUc3N)],
                parent: ej.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [ej.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.ABjMWF)],
                parent: ej.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [ej.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.nzUc3N)],
                parent: ej.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [ej.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.LKzQSE)],
                parent: ej.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [ej.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.F122Gx)],
                parent: ej.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => B.Z.supports(eG.AN.VIDEO),
            },
            [ej.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t["3Ppr1t"])],
                parent: ej.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [ej.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.lZTUPj)],
                parent: ej.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => B.Z.supports(eG.AN.VIDEO),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t["8/udY2"])],
                parent: ej.s6.VOICE_AND_VIDEO,
            },
            [ej.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t["8/udY2"])],
                parent: ej.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => !(0, Y.isWeb)(),
            },
            [ej.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t["8/udY2"])],
                parent: ej.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.Tceiq6)],
                parent: ej.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED,
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t["71Ve19"])],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => B.Z.supports(eG.AN.OPEN_H264),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.Sln58f)],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.AxnPm5)],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => "stable" !== W.ZP.releaseChannel && B.Z.isExperimentalEncodersSupported(),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t["6I6GUl"])],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => to,
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.iWTwu7)],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t["/jwMtr"])],
                parent: ej.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [ej.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.OBwCXF)],
                parent: ej.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.t8QhiY), eB.intl.string(eB.t.hmfkCg)],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => B.Z.isNoiseSuppressionSupported(),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.BbESsr)],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => B.Z.isAdvancedVoiceActivitySupported(),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.cUMdHx)],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => B.Z.isAutomaticGainControlSupported(),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.DFPXIC)],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => B.Z.showBypassSystemInputProcessing(),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.uancuL)],
                parent: ej.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => B.Z.supports(eG.AN.QOS),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.oSdBvb)],
                parent: ej.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => B.Z.supports(eG.AN.ATTENUATION),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.wVBHr6)],
                parent: ej.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => B.Z.shouldOfferManualSubsystemSelection(),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: ek.oAB.VOICE,
                searchableTitles: [
                    eB.intl.string(eB.t.KDdjoq),
                    eB.intl.string(eB.t.NMCIf3),
                    eB.intl.string(eB.t.FeUKeH),
                ],
                parent: ej.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    B.Z.supportsVideoHook() ||
                    B.Z.supportsExperimentalSoundshare() ||
                    (B.Z.supportsSystemScreensharePicker() && (0, Y.isMac)()),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.GmWk2N), eB.intl.string(eB.t["Fj/xn5"])],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => B.Z.supportsVideoHook(),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t["4I0qzc"])],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => B.Z.supportsExperimentalSoundshare() && B.Z.supportsHookSoundshare(),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.ie1mgY)],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => B.Z.supportsSystemScreensharePicker() && (0, Y.isMac)(),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t["aP1N/v"])],
                parent: ej.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => Y.isPlatformEmbedded,
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.OFpL3d)],
                parent: ej.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t["0CEP6e"])],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => K.Sb.getSetting(),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t["r6K+TE"])],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => B.Z.isAecDumpSupported(),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t.U4FgFB)],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === W.ZP.releaseChannel || "development" === W.ZP.releaseChannel) &&
                    e$ &&
                    B.Z.supports(eG.AN.CONNECTION_REPLAY),
            },
            [ej.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t["726JHB"])],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    Y.isPlatformEmbedded && B.Z.supports(eG.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [ej.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: ek.oAB.VOICE,
                searchableTitles: [eB.intl.string(eB.t["/RXu6+"])],
                parent: ej.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [ej.s6.POGGERMODE]: {
                section: ek.oAB.POGGERMODE,
                searchableTitles: [eB.intl.string(eB.t.AtCukJ)],
                label: eB.intl.string(eB.t.AtCukJ),
                ariaLabel: eB.intl.string(eB.t.AtCukJ),
                element: R.Z,
                predicate: () => N.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: eV.poggermodeIcon,
                }),
            },
            [ej.s6.CHAT]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t["/VQax8"])],
                label: eB.intl.string(eB.t["/VQax8"]),
                ariaLabel: eB.intl.string(eB.t["/VQax8"]),
                element: eI.Z,
                url: ek.Z5c.SETTINGS("text"),
            },
            [ej.s6.CHAT_INLINE_MEDIA]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t.U68Dgo)],
                parent: ej.s6.CHAT,
            },
            [ej.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t.U47N1t)],
                parent: ej.s6.CHAT_INLINE_MEDIA,
            },
            [ej.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t.VP11Nj)],
                parent: ej.s6.CHAT_INLINE_MEDIA,
            },
            [ej.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t["5S2AKy"])],
                parent: ej.s6.CHAT_INLINE_MEDIA,
            },
            [ej.s6.CHAT_EMBEDS]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t.PWZOn5)],
                parent: ej.s6.CHAT,
            },
            [ej.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t.xX0ZTE)],
                parent: ej.s6.CHAT_EMBEDS,
            },
            [ej.s6.CHAT_EMOJI]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t.sMOuub)],
                parent: ej.s6.CHAT,
            },
            [ej.s6.CHAT_EMOJI_REACTIONS]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t.Iv24sr)],
                parent: ej.s6.CHAT_EMOJI,
            },
            [ej.s6.CHAT_EMOJI_EMOTICONS]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t["79qal5"])],
                parent: ej.s6.CHAT_EMOJI,
            },
            [ej.s6.CHAT_STICKERS]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t["6NtAuL"])],
                parent: ej.s6.CHAT,
            },
            [ej.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t["29xPVV"])],
                parent: ej.s6.CHAT_STICKERS,
            },
            [ej.s6.CHAT_SOUNDMOJI]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t.EHlAMT)],
                parent: ej.s6.CHAT,
            },
            [ej.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t["CtYr+f"])],
                parent: ej.s6.CHAT_SOUNDMOJI,
            },
            [ej.s6.CHAT_TEXT_BOX]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t.afR0pK)],
                parent: ej.s6.CHAT,
            },
            [ej.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t.AqGrEB)],
                parent: ej.s6.CHAT_TEXT_BOX,
            },
            [ej.s6.CHAT_THREADS]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t.B2panJ)],
                parent: ej.s6.CHAT,
            },
            [ej.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t.AInv5u)],
                parent: ej.s6.CHAT_THREADS,
            },
            [ej.s6.CHAT_SPOILERS]: {
                section: ek.oAB.TEXT,
                searchableTitles: [eB.intl.string(eB.t.QgwmV1)],
                parent: ej.s6.CHAT,
            },
            [ej.s6.NOTIFICATIONS]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.HcoRu7)],
                label: eB.intl.string(eB.t.HcoRu7),
                ariaLabel: eB.intl.string(eB.t.HcoRu7),
                element: eg.Z,
                url: ek.Z5c.SETTINGS("notifications"),
            },
            [ej.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t["/0WClp"])],
                parent: ej.s6.NOTIFICATIONS,
            },
            [ej.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: ej.s6.NOTIFICATIONS,
            },
            [ej.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.VH8AIC)],
                parent: ej.s6.NOTIFICATIONS,
            },
            [ej.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.xSmFQE)],
                parent: ej.s6.NOTIFICATIONS,
                predicate: () => (0, Y.isWindows)(),
            },
            [ej.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.z21l8P)],
                parent: ej.s6.NOTIFICATIONS,
            },
            [ej.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: ["New Notification Settings (Advanced, Staff Only)"],
                parent: ej.s6.NOTIFICATIONS,
                predicate: () => !1,
            },
            [ej.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: ["Restore most recent snapshot"],
                parent: ej.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [ej.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: ["Launch Migration"],
                parent: ej.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [ej.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: ["Toggle new system on/off"],
                parent: ej.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [ej.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.TTvjd3)],
                parent: ej.s6.NOTIFICATIONS,
            },
            [ej.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.VpSKeH)],
                parent: ej.s6.NOTIFICATIONS,
            },
            [ej.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.D9yVAA)],
                parent: ej.s6.NOTIFICATIONS,
            },
            [ej.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.u6dc5O)],
                parent: ej.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [ej.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.P8MG6u)],
                parent: ej.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [ej.s6.NOTIFICATIONS_SOUNDS]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.MKWyKS)],
                parent: ej.s6.NOTIFICATIONS,
            },
            [ej.s6.NOTIFICATIONS_EMAILS]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.TPchzM)],
                parent: ej.s6.NOTIFICATIONS,
            },
            [ej.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t["B75+xc"])],
                parent: ej.s6.NOTIFICATIONS_EMAILS,
            },
            [ej.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.sxn7lZ)],
                parent: ej.s6.NOTIFICATIONS_EMAILS,
            },
            [ej.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.EkxXhY)],
                parent: ej.s6.NOTIFICATIONS_EMAILS,
            },
            [ej.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.jNrkrK)],
                parent: ej.s6.NOTIFICATIONS_EMAILS,
            },
            [ej.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.E8g1l5)],
                parent: ej.s6.NOTIFICATIONS_EMAILS,
            },
            [ej.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.Ra9Pws)],
                parent: ej.s6.NOTIFICATIONS_EMAILS,
            },
            [ej.s6.NOTIFICATIONS_REACTIONS]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.Rq0NFh)],
                parent: ej.s6.NOTIFICATIONS,
            },
            [ej.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.wtk08f)],
                parent: ej.s6.NOTIFICATIONS,
                predicate: () => (0, k.JN)("SettingsRendererConfig"),
            },
            [ej.s6.NOTIFICATIONS_GO_LIVE]: {
                section: ek.oAB.NOTIFICATIONS,
                searchableTitles: [eB.intl.string(eB.t.pW4TMj)],
                parent: ej.s6.NOTIFICATIONS,
            },
            [ej.s6.KEYBINDS]: {
                section: ek.oAB.KEYBINDS,
                searchableTitles: [eB.intl.string(eB.t.T9DA2N)],
                label: eB.intl.string(eB.t.T9DA2N),
                element: eh.Z,
                url: ek.Z5c.SETTINGS("keybinds"),
            },
            [ej.s6.LANGUAGE]: {
                section: ek.oAB.LOCALE,
                searchableTitles: [eB.intl.string(eB.t.IHMsPj)],
                label: eB.intl.string(eB.t.IHMsPj),
                element: em.Z,
                url: ek.Z5c.SETTINGS("language"),
            },
            [ej.s6.WINDOW_SETTINGS]: {
                section: ek.oAB.WINDOWS,
                searchableTitles: [eB.intl.string(eB.t.ZkDZoq)],
                label: eB.intl.string(eB.t.ZkDZoq),
                element: eA.Z,
                predicate: () => Y.isPlatformEmbedded && (0, Y.isWindows)(),
            },
            [ej.s6.LINUX_SETTINGS]: {
                section: ek.oAB.LINUX,
                searchableTitles: [eB.intl.string(eB.t["7pPjTU"])],
                label: eB.intl.string(eB.t["7pPjTU"]),
                element: eJ,
                predicate: () => Y.isPlatformEmbedded && (0, Y.isLinux)(),
            },
            [ej.s6.STREAMER_MODE]: {
                section: ek.oAB.STREAMER_MODE,
                searchableTitles: [eB.intl.string(eB.t.S5GfOT)],
                label: eB.intl.string(eB.t.S5GfOT),
                ariaLabel: eB.intl.string(eB.t.S5GfOT),
                element: ev.Z,
                url: ek.Z5c.SETTINGS("streamer-mode"),
            },
            [ej.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: ek.oAB.STREAMER_MODE,
                searchableTitles: [eB.intl.string(eB.t.bxGbHB)],
                parent: ej.s6.STREAMER_MODE,
            },
            [ej.s6.STREAMER_MODE_ENABLE]: {
                section: ek.oAB.STREAMER_MODE,
                searchableTitles: [eB.intl.string(eB.t.p9ZAJS)],
                parent: ej.s6.STREAMER_MODE,
            },
            [ej.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: ek.oAB.STREAMER_MODE,
                searchableTitles: [eB.intl.string(eB.t.UpQziI)],
                parent: ej.s6.STREAMER_MODE,
            },
            [ej.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: ek.oAB.STREAMER_MODE,
                searchableTitles: [eB.intl.string(eB.t.q7WNGh)],
                parent: ej.s6.STREAMER_MODE,
            },
            [ej.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: ek.oAB.STREAMER_MODE,
                searchableTitles: [eB.intl.string(eB.t["1CWknJ"])],
                parent: ej.s6.STREAMER_MODE,
            },
            [ej.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: ek.oAB.STREAMER_MODE,
                searchableTitles: [eB.intl.string(eB.t.qmYiYW)],
                parent: ej.s6.STREAMER_MODE,
            },
            [ej.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: ek.oAB.STREAMER_MODE,
                searchableTitles: [eB.intl.string(eB.t["iA81+f"])],
                parent: ej.s6.STREAMER_MODE,
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
            [ej.s6.SETTINGS_ADVANCED]: {
                section: ek.oAB.ADVANCED,
                searchableTitles: [eB.intl.string(eB.t["8/udY2"])],
                label: eB.intl.string(eB.t["8/udY2"]),
                ariaLabel: eB.intl.string(eB.t["8/udY2"]),
                element: en.ZP,
            },
            [ej.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: ek.oAB.ADVANCED,
                searchableTitles: [eB.intl.string(eB.t.ObIb1d)],
                parent: ej.s6.SETTINGS_ADVANCED,
                predicate: () => V.wS,
            },
            [ej.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: ek.oAB.ADVANCED,
                searchableTitles: [eB.intl.string(eB.t["eOC/Fx"])],
                parent: ej.s6.SETTINGS_ADVANCED,
                predicate: () => Y.isPlatformEmbedded,
            },
            [ej.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: ek.oAB.ADVANCED,
                searchableTitles: [eB.intl.string(eB.t.fi3UQE)],
                parent: ej.s6.SETTINGS_ADVANCED,
                predicate: () => e8,
            },
            [ej.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: ek.oAB.ADVANCED,
                searchableTitles: [eB.intl.string(eB.t.erOqlp)],
                parent: ej.s6.SETTINGS_ADVANCED,
                predicate: () => e6,
            },
            [ej.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: ek.oAB.ADVANCED,
                searchableTitles: [eB.intl.string(eB.t.qDZryM)],
                parent: ej.s6.SETTINGS_ADVANCED,
            },
            [ej.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: ek.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: ej.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    g.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [ej.s6.ACTIVITY_PRIVACY]: {
                section: ek.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eB.intl.string(eB.t.Cq98yM)],
                label: eB.intl.string(eB.t.Cq98yM),
                ariaLabel: eB.intl.string(eB.t.Cq98yM),
                element: et.Z,
                predicate: () => !eH,
                url: ek.Z5c.SETTINGS("activity-privacy"),
            },
            [ej.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eH ? ek.oAB.GAMES : ek.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eB.intl.string(eB.t["8ka8lp"])],
                parent: eH ? ej.s6.GAMES_ACTIVITY_PRIVACY : ej.s6.ACTIVITY_PRIVACY,
            },
            [ej.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eH ? ek.oAB.GAMES : ek.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eB.intl.string(eB.t.VOszPD)],
                parent: eH ? ej.s6.GAMES_ACTIVITY_PRIVACY : ej.s6.ACTIVITY_PRIVACY,
            },
            [ej.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eH ? ek.oAB.GAMES : ek.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ej.CF],
                parent: eH ? ej.s6.GAMES_ACTIVITY_PRIVACY : ej.s6.ACTIVITY_PRIVACY,
            },
            [ej.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: ek.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eB.intl.string(eB.t["4F2KoK"])],
                parent: ej.s6.ACTIVITY_PRIVACY,
            },
            [ej.s6.REGISTERED_GAMES]: {
                section: ek.oAB.REGISTERED_GAMES,
                searchableTitles: [eB.intl.string(eB.t.AVDyEh)],
                label: eB.intl.string(eB.t.AVDyEh),
                element: ef.Z,
                predicate: () => !eH && (0, eP.Jw)(),
            },
            [ej.s6.OVERLAY]: {
                section: ek.oAB.OVERLAY,
                searchableTitles: [eB.intl.string(eB.t["9cb1U1"]), eB.intl.string(eB.t.HcoRu7)],
                label: eB.intl.string(eB.t["9cb1U1"]),
                element: eE.Z,
                predicate: () => !eH && S,
            },
            [ej.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, E.Z)(!0),
                searchableTitles: [eB.intl.string(eB.t.LRmNAg)],
                label: eB.intl.string(eB.t.LRmNAg),
            },
            [ej.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    F.default.track(ek.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, H.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                F.default.track(ek.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, p.Z)(e);
                            },
                        });
                },
                searchableTitles: [eB.intl.string(eB.t.sMEktb)],
                label: eB.intl.string(eB.t.sMEktb),
                ariaLabel: eB.intl.string(eB.t.sMEktb),
            },
            [ej.s6.HYPESQUAD]: {
                section: ek.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eB.intl.string(eB.t["k0R+4e"])],
                label: eB.intl.string(eB.t["k0R+4e"]),
                element: e_.Z,
                predicate: () => !te,
            },
            [ej.s6.TOWNHALL]: {
                section: ek.oAB.TOWNHALL,
                searchableTitles: [eB.intl.string(eB.t.dnZNER)],
                label: eB.intl.string(eB.t.dnZNER),
                predicate: () => te,
                onClick: () => {
                    (0, p.Z)("https://discord.gg/discord-townhall"), (0, eC.default)();
                },
            },
            [ej.s6.EXPERIMENTS]: {
                section: ek.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: eR.Z,
                predicate: () => U.Z.isDeveloper,
                url: ek.Z5c.SETTINGS("experiments"),
            },
            [ej.s6.DEVELOPER_OPTIONS]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: eu.Z,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: ej.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: ej.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: ej.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: ej.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: ej.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: ej.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: ej.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: ej.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: ej.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: ej.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: ej.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: ej.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e$ && U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: ej.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: ej.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: ej.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e$ && U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: ej.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [ej.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: ej.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e$ && U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Toggleable Components"],
                parent: ej.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e$ && U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: ej.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e$ && U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: ej.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e$ && U.Z.isDeveloper && G.default.layoutDebuggingEnabled,
            },
            [ej.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: ej.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e$ && U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: ej.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e$ && U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: ej.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: ej.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: ej.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: ej.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: ej.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: ej.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => m.q && U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: ej.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: ej.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: ej.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: ej.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: ej.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: ek.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: ej.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.TEXT_PLAYGROUND]: {
                section: ek.oAB.TEXT_PLAYGROUND,
                searchableTitles: ["Text Playground"],
                label: "Text Playground",
                element: eT.Z,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DESIGN_SYSTEMS]: {
                section: ek.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Design Systems"],
                label: "Design Systems",
                element: ec.Z,
                predicate: () => U.Z.isDeveloper,
                url: ek.Z5c.SETTINGS("design-systems"),
            },
            [ej.s6.DESIGN_SYSTEMS_COLORS]: {
                section: ek.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Colors"],
                label: "Colors",
                element: ec.Z,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.ANIMATION_TESTING]: {
                section: ek.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Animation Testing"],
                label: "Animation Testing",
                element: ec.Z,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: ek.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Components"],
                label: "Components",
                element: ec.Z,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.TEXT_COMPONENTS]: {
                section: ek.oAB.TEXT_COMPONENT,
                searchableTitles: ["Text Components"],
                label: "Text Components",
                element: J.Z,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.QUEST_PREVIEW_TOOL_2]: {
                section: ek.oAB.QUEST_PREVIEW_TOOL_2,
                searchableTitles: ["Quest Preview Tool 2"],
                label: "Quest Preview Tool 2",
                element: () => (0, r.jsx)(L.Z, { questId: null == b ? void 0 : b.quest_id }),
                predicate: () => (0, x.T)({ location: eU.dr.QUEST_PREVIEW_TOOL_2 }),
            },
            [ej.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM]: {
                section: f.ID.CUSTOM,
                searchableTitles: eN.Y,
                label: "Developer Education",
                element: eN.$,
                predicate: () => U.Z.isDeveloper,
            },
            [ej.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            eK(
                                eY(
                                    {
                                        header: eB.intl.string(eB.t["2jxGen"]),
                                        confirmText: eB.intl.string(eB.t["2jxGen"]),
                                        cancelText: eB.intl.string(eB.t["ETE/oK"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: eB.intl.string(eB.t.SUnWBA),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: eB.intl.string(eB.t["2jxGen"]),
                ariaLabel: eB.intl.string(eB.t["2jxGen"]),
                icon: (0, r.jsx)(s.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [ej.s6.SOCIAL_LINKS]: {
                section: f.ID.CUSTOM,
                element: Q.Z,
            },
            [ej.s6.CLIENT_DEBUG_INFO]: {
                section: f.ID.CUSTOM,
                element: z.Z,
            },
        });
    };
