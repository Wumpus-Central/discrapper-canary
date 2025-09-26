n.d(t, {
    $Z: () => eV,
    OF: () => eY,
    W8: () => eW,
    c$: () => eH,
    iE: () => ez,
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
    q = n(846071),
    X = n(748717),
    Q = n(419636),
    J = n(154022),
    $ = n(736752),
    ee = n(309739),
    et = n(64914),
    en = n(501348),
    er = n(795594),
    ei = n(443702),
    ea = n(327192),
    eo = n(949493),
    es = n(675047),
    el = n(956699),
    ec = n(54942),
    eu = n(293389),
    ed = n(387747),
    ef = n(389650),
    e_ = n(649157),
    ep = n(593648),
    eh = n(327885),
    em = n(595242),
    eg = n(463153),
    eE = n(36192),
    eb = n(889029),
    ey = n(400287),
    eO = n(936982),
    ev = n(200645),
    eI = n(924983),
    eT = n(287490),
    eS = n(168308),
    eA = n(277329),
    eC = n(273927),
    eN = n(604224),
    eR = n(345655),
    eP = n(726985),
    ew = n(583139),
    eD = n(981631),
    ex = n(46140),
    eL = n(65154),
    ej = n(388032),
    eM = n(693450),
    ek = n(345909),
    eU = n(202323);
function eG(e, t, n) {
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
function eB(e) {
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
                eG(e, t, n[t]);
            });
    }
    return e;
}
function eZ(e, t) {
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
function eF(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eZ(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eV = () => {
        let e = [a.z.CLIENT_THEMES_SETTINGS_BADGE, a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
        return (
            b.Mc.getCurrentConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            h.n.getConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE),
            e
        );
    },
    eH = () => {
        let e = eV(),
            [t] = (0, T.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: ej.intl.string(ej.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ||
                t === a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE
              ? (0, r.jsx)(s.IGR, { text: ej.intl.string(ej.t.y2b7CA) })
              : null;
    },
    eY = () => {
        let e = [];
        return (
            (0, M.h)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            S.JH.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    eW = () => {
        let e = eY(),
            [t] = (0, T.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: ej.intl.string(ej.t.y2b7CA) })
            : null;
    },
    eK = ev.Z,
    ez = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: h,
            searchParams: b,
            numOfPendingFamilyRequests: T,
            isOverlaySupported: S,
            isClipsBetaTagShowing: M = !1,
            shouldMergeGameSettings: eG,
            isKeywordFilteringEnabled: eZ,
            isStaff: ez,
            isInappropriateConversationWarningEnabled: eq,
            isInapproprateConversationsDefaultOn: eX,
            paymentsBlocked: eQ,
            isEligibleForQuests: eJ,
            isStricterMessageRequestsEnabled: e$,
            hasLibraryApplication: e0,
            hasTOTPEnabled: e1,
            developerMode: e2,
            isAdultUser: e3,
            hasSecureFramesVerifiedUserIds: e4,
            hasIgnoredUsers: e8,
            hasBlockedUsers: e5,
            isEligibleForSensitiveContentDefaults: e6,
            inputMode: e7,
            activeInputProfile: e9,
            isInputProfileCustom: te,
            isDataUsage3PToggleEnabled: tt,
        } = e;
        return Object.freeze({
            [eP.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: eg.Z,
            },
            [eP.s6.ACCOUNT_SECURITY_TAB]: {
                section: eD.oAB.ACCOUNT,
                searchableTitles: [ej.intl.string(ej.t.Am9YHh)],
                label: ej.intl.string(ej.t.Am9YHh),
            },
            [eP.s6.ACCOUNT]: {
                section: eD.oAB.ACCOUNT,
                searchableTitles: [ej.intl.string(ej.t["JAIM/v"])],
                label: ej.intl.string(ej.t["JAIM/v"]),
                ariaLabel: ej.intl.string(ej.t["JAIM/v"]),
                element: $.Z,
                url: eD.Z5c.SETTINGS("account"),
            },
            [eP.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [ej.intl.string(ej.t.LYju5O)],
                parent: eP.s6.ACCOUNT,
                section: eD.oAB.ACCOUNT,
            },
            [eP.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [ej.intl.string(ej.t["9AjdkJ"])],
                section: eD.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_PROFILE,
            },
            [eP.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [ej.intl.string(ej.t.Ulqq6O)],
                section: eD.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_PROFILE,
            },
            [eP.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    ej.intl.string(ej.t["/52UY2"]),
                    ej.intl.string(ej.t.sK0dmJ),
                    ej.intl.string(ej.t.XxRj7e),
                    ej.intl.string(ej.t.yNGjyM),
                    ej.intl.string(ej.t.KPGVWl),
                ],
                section: eD.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_PROFILE,
                predicate: () => e6,
            },
            [eP.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [ej.intl.string(ej.t["+JkHPz"])],
                section: eD.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_PROFILE,
            },
            [eP.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [ej.intl.string(ej.t.oP5zGB)],
                section: eD.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_PROFILE,
            },
            [eP.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [ej.intl.string(ej.t.pKSjEh)],
                section: eD.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT,
            },
            [eP.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [ej.intl.string(ej.t["FRep5+"])],
                section: eD.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eP.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [ej.intl.string(ej.t["7qKDrK"])],
                section: eD.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [ej.intl.string(ej.t.m0FidH)],
                section: eD.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eP.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [ej.intl.string(ej.t.cDgKtb)],
                section: eD.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e1,
            },
            [eP.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [ej.intl.string(ej.t["D+aE7u"])],
                section: eD.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e1,
            },
            [eP.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [ej.intl.string(ej.t.fZSi1N)],
                section: eD.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eP.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [ej.intl.string(ej.t.uHAJ5u)],
                section: eD.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eP.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [ej.intl.string(ej.t.vrOCCg)],
                section: eD.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eP.s6.ACCOUNT_REMOVAL]: {
                section: eD.oAB.ACCOUNT,
                searchableTitles: [ej.intl.string(ej.t.ZKsIkp)],
                parent: eP.s6.ACCOUNT,
            },
            [eP.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eD.oAB.ACCOUNT,
                searchableTitles: [ej.intl.string(ej.t.jf5GGR)],
                parent: eP.s6.ACCOUNT_REMOVAL,
            },
            [eP.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eD.oAB.ACCOUNT,
                searchableTitles: [ej.intl.string(ej.t["8lQ2ra"])],
                parent: eP.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eP.s6.GAMES]: {
                section: eD.oAB.GAMES,
                searchableTitles: [ej.intl.string(ej.t.URyqtL)],
                label: ej.intl.string(ej.t.URyqtL),
                ariaLabel: ej.intl.string(ej.t.URyqtL),
                element: eA.Z,
                predicate: () => eG,
            },
            [eP.s6.GAMES_MY_GAMES]: {
                section: eD.oAB.GAMES,
                searchableTitles: [ej.intl.string(ej.t["5DMgp6"])],
                parent: eP.s6.GAMES,
            },
            [eP.s6.GAMES_CLIPS]: {
                section: eD.oAB.GAMES,
                searchableTitles: [ej.intl.string(ej.t.z2jK6e)],
                parent: eP.s6.GAMES,
            },
            [eP.s6.GAMES_OVERLAY]: {
                section: eD.oAB.GAMES,
                searchableTitles: [ej.intl.string(ej.t["9cb1U1"])],
                parent: eP.s6.GAMES,
            },
            [eP.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eD.oAB.GAMES,
                searchableTitles: [ej.intl.string(ej.t.Cq98yM)],
                parent: eP.s6.GAMES,
            },
            [eP.s6.PROFILE_CUSTOMIZATION]: {
                section: eD.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [ej.intl.string(ej.t["vi7f+v"])],
                label: ej.intl.string(ej.t["vi7f+v"]),
                ariaLabel: ej.intl.string(ej.t["vi7f+v"]),
                element: D.Z,
                newIndicator: (0, r.jsx)(eW, {}),
                newIndicatorDismissibleContentTypes: [...eY()],
                notice: {
                    stores: [Z.Z, C.Z],
                    element: w.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, A.It)(), (0, u.P6)(), d.Z.clearSubsection(eD.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eD.Z5c.SETTINGS("profile-customization"),
            },
            [eP.s6.PROFILE_DISPLAY_NAME]: {
                section: eD.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ej.intl.string(ej.t["9AjdkJ"])],
                parent: eP.s6.PROFILE_CUSTOMIZATION,
            },
            [eP.s6.PROFILE_USER_PROFILE]: {
                section: eD.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ej.intl.string(ej.t["2p07FR"]), ej.intl.string(ej.t["7vhiqq"])],
                parent: eP.s6.PROFILE_CUSTOMIZATION,
            },
            [eP.s6.PROFILE_SERVER_PROFILES]: {
                section: eD.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ej.intl.string(ej.t.kPHroa)],
                parent: eP.s6.PROFILE_CUSTOMIZATION,
            },
            [eP.s6.CONTENT_SOCIAL]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                label: ej.intl.string(ej.t["+o1pDQ"]),
                searchableTitles: [ej.intl.string(ej.t["+o1pDQ"])],
                ariaLabel: ej.intl.string(ej.t["+o1pDQ"]),
                element: eo.Z,
                url: eD.Z5c.SETTINGS("content-and-social"),
            },
            [eP.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t["+o1pDQ"]), ej.intl.string(ej.t["/7xJCA"])],
                parent: eP.s6.CONTENT_SOCIAL,
            },
            [eP.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t["+o1pDQ"]), ej.intl.string(ej.t["/7xJCA"])],
                parent: eP.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eP.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t.YpCiMj)],
                parent: eP.s6.CONTENT_SOCIAL,
            },
            [eP.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                label: ej.intl.string(ej.t.YpCiMj),
                searchableTitles: [ej.intl.string(ej.t.YpCiMj)],
                ariaLabel: ej.intl.string(ej.t.YpCiMj),
                parent: eP.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eD.Z5c.SETTINGS(eD.oAB.CONTENT_AND_SOCIAL, ew.C),
            },
            [eP.s6.DATA_PRIVACY]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                label: ej.intl.string(ej.t.OAuOHB),
                searchableTitles: [ej.intl.string(ej.t.OAuOHB)],
                ariaLabel: ej.intl.string(ej.t.OAuOHB),
                element: es.Z,
                url: eD.Z5c.SETTINGS("data-and-privacy"),
            },
            [eP.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eD.oAB.ACCOUNT,
                searchableTitles: [ej.intl.string(ej.t["Vov/9v"])],
                parent: eP.s6.ACCOUNT,
            },
            [eP.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.intl.string(ej.t.WWaFn5)],
                parent: eP.s6.DATA_PRIVACY,
                predicate: () => (0, Y.isDesktop)(),
            },
            [eP.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.intl.string(ej.t["opi/XF"])],
                parent: eP.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t.xVRG4O)],
                parent: eP.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eP.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t.fyA119)],
                parent: eP.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eP.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t.fyA119)],
                parent: eP.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eP.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t["/U8Iwc"])],
                parent: eP.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eP.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t["ms+TmZ"])],
                parent: eP.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eP.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t["y62Z/f"])],
                parent: eP.s6.CONTENT_SOCIAL,
            },
            [eP.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.intl.string(ej.t.SRZyHh)],
                parent: eP.s6.DATA_PRIVACY,
            },
            [eP.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ej.intl.string(ej.t.uEz8JC),
                    ej.intl.string(ej.t["N/oRIy"]),
                    ej.intl.string(ej.t.QVdYsL),
                    ej.intl.string(ej.t["aWD+tr"]),
                    ej.intl.string(ej.t["5mnTa2"]),
                ],
                parent: eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eP.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ej.intl.string(ej.t["Hj/Bur"]),
                    ej.intl.string(ej.t["N/oRIy"]),
                    ej.intl.string(ej.t.QVdYsL),
                    ej.intl.string(ej.t["aWD+tr"]),
                    ej.intl.string(ej.t["5mnTa2"]),
                    ej.intl.string(ej.t.K0OWPz),
                ],
                parent: eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eP.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ej.intl.string(ej.t["Hj/Bur"]),
                    ej.intl.string(ej.t["N/oRIy"]),
                    ej.intl.string(ej.t.QVdYsL),
                    ej.intl.string(ej.t["aWD+tr"]),
                    ej.intl.string(ej.t["5mnTa2"]),
                ],
                parent: eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eP.s6.GORE_MEDIA_REDACTION]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ej.intl.string(ej.t["Hj/Bur"]),
                    ej.intl.string(ej.t["N/oRIy"]),
                    ej.intl.string(ej.t.QVdYsL),
                    ej.intl.string(ej.t["aWD+tr"]),
                    ej.intl.string(ej.t.K0OWPz),
                ],
                parent: eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eP.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ej.intl.string(ej.t.JzaP4u),
                    ej.intl.string(ej.t.H9XOl5),
                    ej.intl.string(ej.t.k4W40N),
                ],
                parent: eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t["L+yTsb"])],
                parent: eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t.XahVjo)],
                parent: eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eP.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                parent: eP.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t.RAQUSE), ej.intl.string(ej.t.wbYDfX)],
                parent: eP.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t["3o2ojo"])],
                parent: eP.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !e$,
            },
            [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t.OLwZDQ)],
                parent: eP.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t.wBkwu7)],
                parent: eP.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eP.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.intl.string(ej.t.XuADY2)],
                parent: eP.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eP.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.intl.string(ej.t.MNKzys)],
                parent: eP.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eP.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.intl.string(ej.t.VkS7YW), ej.intl.string(ej.t.sJYh5u)],
                parent: eP.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eP.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.intl.string(ej.t.CyLYKS)],
                parent: eP.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                predicate: () => tt,
            },
            [eP.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.CF],
                parent: eP.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eP.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.intl.string(ej.t.dmBSKi)],
                parent: eP.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eP.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t["1UaUy8"]), ej.intl.string(ej.t["xIk/iI"])],
                parent: eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eZ,
            },
            [eP.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.intl.string(ej.t.qFsx5u)],
                parent: eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eq && !e3 && !eX,
            },
            [eP.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.intl.string(ej.t["5b3FND"])],
                parent: eP.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => e4,
            },
            [eP.s6.PRIVACY_FAMILY_CENTER]: {
                section: eD.oAB.FAMILY_CENTER,
                searchableTitles: [ej.intl.string(ek.default.gntCQU)],
                label: ej.intl.string(ek.default.gntCQU),
                ariaLabel: ej.intl.string(ek.default.gntCQU),
                element: ec.Z,
                badgeCount: T,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: ej.intl.string(ej.t.y2b7CA),
                    color: I.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eD.Z5c.SETTINGS("family-center"),
            },
            [eP.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.intl.string(ej.t.BG7Qsb)],
                parent: eP.s6.DATA_PRIVACY,
            },
            [eP.s6.AUTHORIZED_APPS]: {
                section: eD.oAB.AUTHORIZED_APPS,
                searchableTitles: [ej.intl.string(ej.t["f6kk+v"])],
                label: ej.intl.string(ej.t["f6kk+v"]),
                element: er.Z,
                url: eD.Z5c.SETTINGS("authorized-apps"),
            },
            [eP.s6.SESSIONS]: {
                section: eD.oAB.SESSIONS,
                searchableTitles: [ej.intl.string(ej.t["+1h0k5"])],
                label: ej.intl.string(ej.t["+1h0k5"]),
                ariaLabel: ej.intl.string(ej.t["+1h0k5"]),
                element: eE.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
            },
            [eP.s6.CONNECTIONS]: {
                section: eD.oAB.CONNECTIONS,
                searchableTitles: [ej.intl.string(ej.t["3fe7U1"])],
                label: ej.intl.string(ej.t["3fe7U1"]),
                ariaLabel: ej.intl.string(ej.t["3fe7U1"]),
                element: ea.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eD.Z5c.SETTINGS("connections"),
            },
            [eP.s6.THIRD_PARTY_ACCESS]: {
                section: eD.oAB.CONNECTIONS,
                searchableTitles: [
                    ej.intl.string(ej.t["Ig/XFR"]),
                    ej.intl.string(ej.t["3fe7U1"]),
                    ej.intl.string(ej.t["f6kk+v"]),
                ],
                label: ej.intl.string(ej.t["Ig/XFR"]),
                parent: eP.s6.CONNECTIONS,
                element: eO.Z,
            },
            [eP.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eD.oAB.CONNECTIONS,
                searchableTitles: [ej.intl.string(ej.t["+/hZMz"])],
                parent: eP.s6.CONNECTIONS,
                element: ea.Z,
            },
            [eP.s6.CLIPS]: {
                section: eD.oAB.CLIPS,
                searchableTitles: [ej.intl.string(ej.t.z2jK6e)],
                label: ej.intl.string(ej.t.z2jK6e),
                ariaLabel: ej.intl.string(ej.t.z2jK6e),
                icon: M ? (0, r.jsx)(y.Z, {}) : void 0,
                element: O.Z,
                predicate: () => !eG,
                url: eD.Z5c.SETTINGS("clips"),
            },
            [eP.s6.RESTRICTED_USERS]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                parent: eP.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: ej.intl.string(ej.t["3wRorq"]),
                element: eC.ZP,
                predicate: () => e8 || e5,
            },
            [eP.s6.BLOCKED_USERS]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                parent: eP.s6.RESTRICTED_USERS,
                label: ej.intl.string(ej.t.PFOUKS),
                searchableTitles: [ej.intl.string(ej.t.PFOUKS)],
                element: eC.GF,
                predicate: () => e5,
            },
            [eP.s6.IGNORED_USERS]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                parent: eP.s6.RESTRICTED_USERS,
                searchableTitles: [ej.intl.string(ej.t["93ZDWF"])],
                label: ej.intl.string(ej.t["93ZDWF"]),
                element: eC.yo,
                predicate: () => e8,
            },
            [eP.s6.PREMIUM]: {
                section: eD.oAB.PREMIUM,
                ariaLabel: ej.intl.string(ej.t.Ipxkoq),
                searchableTitles: [ej.intl.string(ej.t.Ipxkoq)],
                label: ej.intl.string(ej.t.Ipxkoq),
                element: X.Z,
                className: eU.premiumTab,
            },
            [eP.s6.GUILD_BOOSTING]: {
                section: eD.oAB.GUILD_BOOSTING,
                searchableTitles: [ej.intl.string(ej.t["+CbP2t"])],
                label: ej.intl.string(ej.t["+CbP2t"]),
                element: em.Z,
            },
            [eP.s6.SUBSCRIPTIONS]: {
                section: eD.oAB.SUBSCRIPTIONS,
                ariaLabel: ej.intl.string(ej.t.trSpHR),
                searchableTitles: [ej.intl.string(ej.t.trSpHR)],
                label: ej.intl.string(ej.t.trSpHR),
                element: P.Z,
                icon: h
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eP.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eD.oAB.SUBSCRIPTIONS,
                searchableTitles: [ej.intl.string(ej.t["2GKrvr"])],
                parent: eP.s6.SUBSCRIPTIONS,
            },
            [eP.s6.GIFT_INVENTORY]: {
                section: eD.oAB.INVENTORY,
                searchableTitles: [ej.intl.string(ej.t["jcSP+v"])],
                label: ej.intl.string(ej.t["jcSP+v"]),
                element: ed.Z,
                ariaLabel: ej.intl.string(ej.t["jcSP+v"]),
                badgeCount: t,
            },
            [eP.s6.GIFT_CODE_REDEMPTION]: {
                section: eD.oAB.INVENTORY,
                searchableTitles: [ej.intl.string(ej.t["il+VCg"])],
                parent: eP.s6.GIFT_INVENTORY,
                predicate: () => !eQ,
            },
            [eP.s6.GIFT_INVENTORY_QUESTS]: {
                section: eD.oAB.INVENTORY,
                searchableTitles: [ej.intl.string(ej.t.JALI2N)],
                parent: eP.s6.GIFT_INVENTORY,
                predicate: () => eJ,
            },
            [eP.s6.GIFT_INVENTORY_LIST]: {
                section: eD.oAB.INVENTORY,
                searchableTitles: [ej.intl.string(ej.t["9KeUbW"])],
                parent: eP.s6.GIFT_INVENTORY,
                predicate: () => !eQ,
            },
            [eP.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eD.oAB.INVENTORY,
                searchableTitles: [ej.intl.string(ej.t.vwMEHR)],
                parent: eP.s6.GIFT_INVENTORY,
                predicate: () => eQ,
            },
            [eP.s6.BILLING]: {
                section: eD.oAB.BILLING,
                searchableTitles: [ej.intl.string(ej.t.oeUm2t)],
                label: ej.intl.string(ej.t.oeUm2t),
                ariaLabel: ej.intl.string(ej.t.oeUm2t),
                element: ei.Z,
            },
            [eP.s6.BILLING_PAYMENT_METHODS]: {
                section: eD.oAB.BILLING,
                searchableTitles: [ej.intl.string(ej.t.W26xGR)],
                parent: eP.s6.BILLING,
            },
            [eP.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eD.oAB.BILLING,
                searchableTitles: [ej.intl.string(ej.t.obLrcH)],
                parent: eP.s6.BILLING,
            },
            [eP.s6.APPEARANCE]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [ej.intl.string(ej.t["iHH+k5"])],
                label: ej.intl.string(ej.t["iHH+k5"]),
                ariaLabel: ej.intl.string(ej.t["iHH+k5"]),
                element: en.Z,
                newIndicator: (0, r.jsx)(eH, {}),
                newIndicatorDismissibleContentTypes: eV(),
                url: eD.Z5c.SETTINGS("appearance"),
            },
            [eP.s6.APPEARANCE_THEME]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [ej.intl.string(ej.t.Ksh3io)],
                parent: eP.s6.APPEARANCE,
            },
            [eP.s6.APPEARANCE_COLOR]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [ej.intl.string(ej.t.OCOOiI)],
                parent: eP.s6.APPEARANCE_THEME,
            },
            [eP.s6.APPEARANCE_ICON]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [ej.intl.string(ej.t.RPh2oq)],
                parent: eP.s6.APPEARANCE_THEME,
            },
            [eP.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [ej.intl.string(ej.t.ZEoGMT)],
                parent: eP.s6.APPEARANCE,
            },
            [eP.s6.APPEARANCE_LIST_SPACING]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eP.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: ej.intl.string(ej.t.y2b7CA),
                    color: I.Z.BG_BRAND,
                }),
            },
            [eP.s6.APPEARANCE_SCALING_SPACING]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [ej.intl.string(ej.t.qPOqoK)],
                parent: eP.s6.APPEARANCE,
            },
            [eP.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [
                    ej.intl.string(ej.t.dyamEB),
                    ej.intl.string(ej.t.p8NOws),
                    ej.intl.string(ej.t["+o/sOj"]),
                ],
                parent: eP.s6.APPEARANCE,
                predicate: () =>
                    j.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eP.s6.ACCESSIBILITY]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.G0neg4)],
                label: ej.intl.string(ej.t.G0neg4),
                ariaLabel: ej.intl.string(ej.t.G0neg4),
                element: J.Z,
                url: eD.Z5c.SETTINGS("accessibility"),
            },
            [eP.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.aZlePj)],
                parent: eP.s6.ACCESSIBILITY,
            },
            [eP.s6.ACCESSIBILITY_SATURATION]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t["5PWWCQ"])],
                parent: eP.s6.ACCESSIBILITY,
            },
            [eP.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.bQCodH)],
                parent: eP.s6.ACCESSIBILITY_SATURATION,
            },
            [eP.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.OLZFBw)],
                parent: eP.s6.ACCESSIBILITY,
            },
            [eP.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t["+IsihY"])],
                parent: eP.s6.ACCESSIBILITY,
                predicate: () => (0, v.l)("SettingsRendererConfig"),
            },
            [eP.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.uSOPWl)],
                parent: eP.s6.ACCESSIBILITY,
            },
            [eP.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(eM.default["2gFUEx"])],
                parent: eP.s6.ACCESSIBILITY,
            },
            [eP.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.BT8Bmp)],
                parent: eP.s6.ACCESSIBILITY,
            },
            [eP.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t["sSY+mJ"])],
                parent: eP.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eP.s6.ACCESSIBILITY_CONTRAST]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.TYyfOz)],
                parent: eP.s6.ACCESSIBILITY,
            },
            [eP.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.cguieX)],
                parent: eP.s6.ACCESSIBILITY_CONTRAST,
            },
            [eP.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.e3TR1d)],
                parent: eP.s6.ACCESSIBILITY,
            },
            [eP.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.b3XBzs)],
                parent: eP.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eP.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.Iayoh4)],
                parent: eP.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eP.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.iIaOlZ)],
                parent: eP.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eP.s6.ACCESSIBILITY_STICKERS]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t["6NtAuL"])],
                parent: eP.s6.ACCESSIBILITY,
            },
            [eP.s6.ACCESSIBILITY_MESSAGES]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.onqU6u)],
                parent: eP.s6.ACCESSIBILITY,
            },
            [eP.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t["3Fztn5"])],
                parent: eP.s6.ACCESSIBILITY_MESSAGES,
            },
            [eP.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.TZ2hZG)],
                parent: eP.s6.ACCESSIBILITY_MESSAGES,
            },
            [eP.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.VpSKeH)],
                parent: eP.s6.ACCESSIBILITY,
            },
            [eP.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.qvTIwc)],
                parent: eP.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eP.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ej.intl.string(ej.t.lsW5Eh)],
                parent: eP.s6.ACCESSIBILITY,
            },
            [eP.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [eP.CF],
                parent: eP.s6.ACCESSIBILITY,
            },
            [eP.s6.VOICE_AND_VIDEO]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.B1fFpa)],
                label: ej.intl.string(ej.t.B1fFpa),
                ariaLabel: ej.intl.string(ej.t.B1fFpa),
                element: eN.Z,
                predicate: () => B.Z.isSupported(),
                url: eD.Z5c.SETTINGS("voice"),
            },
            [eP.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.K3lovL), ej.intl.string(ej.t.NiTd0d)],
                parent: eP.s6.VOICE_AND_VIDEO,
            },
            [eP.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.FlNoSU)],
                parent: eP.s6.VOICE_AND_VIDEO,
            },
            [eP.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.ABjMWF)],
                parent: eP.s6.VOICE_AND_VIDEO,
            },
            [eP.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.OFpL3d)],
                parent: eP.s6.VOICE_AND_VIDEO,
            },
            [eP.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.KDdjoq), ej.intl.string(ej.t.FeUKeH)],
                parent: eP.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eP.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.K3lovL), ej.intl.string(ej.t.NiTd0d)],
                parent: eP.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eP.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eD.oAB.VOICE,
                searchableTitles: [
                    ej.intl.string(ej.t.hHMYbW),
                    ej.intl.string(ej.t.dl18zc),
                    ej.intl.string(ej.t.nuFtHB),
                    ej.intl.string(ej.t["3182VF"]),
                    ej.intl.string(ej.t["DGq/PT"]),
                ],
                parent: eP.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eP.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [
                    ej.intl.string(ej.t.OX2Bnp),
                    ej.intl.string(ej.t.eATD2N),
                    ej.intl.string(ej.t.nuFtHB),
                    ej.intl.string(ej.t["3182VF"]),
                    ej.intl.string(ej.t["DGq/PT"]),
                ],
                parent: eP.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eP.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.gyljWF), ej.intl.string(ej.t.nuFtHB)],
                parent: eP.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eP.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eD.oAB.VOICE,
                searchableTitles: [
                    ej.intl.string(ej.t.LM3U3t),
                    ej.intl.string(ej.t.nuFtHB),
                    ej.intl.string(ej.t.VZPR0d),
                    ej.intl.string(ej.t.cjPbpa),
                ],
                parent: eP.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, q.P)({ location: "SettingsRendererConfig" });
                    return e.length > 0;
                },
            },
            [eP.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t["pS+K2N"]), ej.intl.string(ej.t.nuFtHB)],
                parent: eP.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => e9 !== eR._.STUDIO,
            },
            [eP.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t["sqUm+v"]), ej.intl.string(ej.t.nuFtHB)],
                parent: eP.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => e7 === eL.pM.VOICE_ACTIVITY && te,
            },
            [eP.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.e7LIiY)],
                parent: eP.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eP.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.nzUc3N)],
                parent: eP.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eP.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.ABjMWF)],
                parent: eP.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eP.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.nzUc3N)],
                parent: eP.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eP.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.LKzQSE)],
                parent: eP.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eP.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.F122Gx)],
                parent: eP.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => B.Z.supports(eL.AN.VIDEO),
            },
            [eP.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t["3Ppr1t"])],
                parent: eP.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eP.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.lZTUPj)],
                parent: eP.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => B.Z.supports(eL.AN.VIDEO),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t["8/udY2"])],
                parent: eP.s6.VOICE_AND_VIDEO,
            },
            [eP.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t["8/udY2"])],
                parent: eP.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => !(0, Y.isWeb)(),
            },
            [eP.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t["8/udY2"])],
                parent: eP.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.Tceiq6)],
                parent: eP.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED,
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t["71Ve19"])],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => B.Z.supports(eL.AN.OPEN_H264),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.Sln58f)],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.AxnPm5)],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => "stable" !== W.ZP.releaseChannel && B.Z.isExperimentalEncodersSupported(),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t["6I6GUl"])],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => te,
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.iWTwu7)],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t["/jwMtr"])],
                parent: eP.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eP.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.OBwCXF)],
                parent: eP.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.t8QhiY), ej.intl.string(ej.t.hmfkCg)],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => B.Z.isNoiseSuppressionSupported(),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.BbESsr)],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => B.Z.isAdvancedVoiceActivitySupported(),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.cUMdHx)],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => B.Z.isAutomaticGainControlSupported(),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.DFPXIC)],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => B.Z.showBypassSystemInputProcessing(),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.uancuL)],
                parent: eP.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => B.Z.supports(eL.AN.QOS),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.oSdBvb)],
                parent: eP.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => B.Z.supports(eL.AN.ATTENUATION),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.wVBHr6)],
                parent: eP.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => B.Z.shouldOfferManualSubsystemSelection(),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eD.oAB.VOICE,
                searchableTitles: [
                    ej.intl.string(ej.t.KDdjoq),
                    ej.intl.string(ej.t.NMCIf3),
                    ej.intl.string(ej.t.FeUKeH),
                ],
                parent: eP.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    B.Z.supportsVideoHook() ||
                    B.Z.supportsExperimentalSoundshare() ||
                    (B.Z.supportsSystemScreensharePicker() && (0, Y.isMac)()),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.GmWk2N), ej.intl.string(ej.t["Fj/xn5"])],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => B.Z.supportsVideoHook(),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t["4I0qzc"])],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => B.Z.supportsExperimentalSoundshare() && B.Z.supportsHookSoundshare(),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.ie1mgY)],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => B.Z.supportsSystemScreensharePicker() && (0, Y.isMac)(),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t["aP1N/v"])],
                parent: eP.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => Y.isPlatformEmbedded,
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.OFpL3d)],
                parent: eP.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t["0CEP6e"])],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => K.Sb.getSetting(),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t["r6K+TE"])],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => B.Z.isAecDumpSupported(),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t.U4FgFB)],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === W.ZP.releaseChannel || "development" === W.ZP.releaseChannel) &&
                    ez &&
                    B.Z.supports(eL.AN.CONNECTION_REPLAY),
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t["726JHB"])],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    Y.isPlatformEmbedded && B.Z.supports(eL.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [eP.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ej.intl.string(ej.t["/RXu6+"])],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eP.s6.POGGERMODE]: {
                section: eD.oAB.POGGERMODE,
                searchableTitles: [ej.intl.string(ej.t.AtCukJ)],
                label: ej.intl.string(ej.t.AtCukJ),
                ariaLabel: ej.intl.string(ej.t.AtCukJ),
                element: R.Z,
                predicate: () => N.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: eU.poggermodeIcon,
                }),
            },
            [eP.s6.CHAT]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t["/VQax8"])],
                label: ej.intl.string(ej.t["/VQax8"]),
                ariaLabel: ej.intl.string(ej.t["/VQax8"]),
                element: ey.Z,
                url: eD.Z5c.SETTINGS("text"),
            },
            [eP.s6.CHAT_INLINE_MEDIA]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t.U68Dgo)],
                parent: eP.s6.CHAT,
            },
            [eP.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t.U47N1t)],
                parent: eP.s6.CHAT_INLINE_MEDIA,
            },
            [eP.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t.VP11Nj)],
                parent: eP.s6.CHAT_INLINE_MEDIA,
            },
            [eP.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t["5S2AKy"])],
                parent: eP.s6.CHAT_INLINE_MEDIA,
            },
            [eP.s6.CHAT_EMBEDS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t.PWZOn5)],
                parent: eP.s6.CHAT,
            },
            [eP.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t.xX0ZTE)],
                parent: eP.s6.CHAT_EMBEDS,
            },
            [eP.s6.CHAT_EMOJI]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t.sMOuub)],
                parent: eP.s6.CHAT,
            },
            [eP.s6.CHAT_EMOJI_REACTIONS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t.Iv24sr)],
                parent: eP.s6.CHAT_EMOJI,
            },
            [eP.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t["79qal5"])],
                parent: eP.s6.CHAT_EMOJI,
            },
            [eP.s6.CHAT_STICKERS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t["6NtAuL"])],
                parent: eP.s6.CHAT,
            },
            [eP.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t["29xPVV"])],
                parent: eP.s6.CHAT_STICKERS,
            },
            [eP.s6.CHAT_SOUNDMOJI]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t.EHlAMT)],
                parent: eP.s6.CHAT,
            },
            [eP.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t["CtYr+f"])],
                parent: eP.s6.CHAT_SOUNDMOJI,
            },
            [eP.s6.CHAT_TEXT_BOX]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t.afR0pK)],
                parent: eP.s6.CHAT,
            },
            [eP.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t.AqGrEB)],
                parent: eP.s6.CHAT_TEXT_BOX,
            },
            [eP.s6.CHAT_THREADS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t.B2panJ)],
                parent: eP.s6.CHAT,
            },
            [eP.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t.AInv5u)],
                parent: eP.s6.CHAT_THREADS,
            },
            [eP.s6.CHAT_SPOILERS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ej.intl.string(ej.t.QgwmV1)],
                parent: eP.s6.CHAT,
            },
            [eP.s6.NOTIFICATIONS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.HcoRu7)],
                label: ej.intl.string(ej.t.HcoRu7),
                ariaLabel: ej.intl.string(ej.t.HcoRu7),
                element: ep.Z,
                url: eD.Z5c.SETTINGS("notifications"),
            },
            [eP.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t["/0WClp"])],
                parent: eP.s6.NOTIFICATIONS,
            },
            [eP.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eP.s6.NOTIFICATIONS,
            },
            [eP.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.VH8AIC)],
                parent: eP.s6.NOTIFICATIONS,
            },
            [eP.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.xSmFQE)],
                parent: eP.s6.NOTIFICATIONS,
                predicate: () => (0, Y.isWindows)(),
            },
            [eP.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.z21l8P)],
                parent: eP.s6.NOTIFICATIONS,
            },
            [eP.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: ["New Notification Settings (Advanced, Staff Only)"],
                parent: eP.s6.NOTIFICATIONS,
                predicate: () => !1,
            },
            [eP.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: ["Restore most recent snapshot"],
                parent: eP.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eP.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: ["Launch Migration"],
                parent: eP.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eP.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: ["Toggle new system on/off"],
                parent: eP.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eP.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.TTvjd3)],
                parent: eP.s6.NOTIFICATIONS,
            },
            [eP.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.VpSKeH)],
                parent: eP.s6.NOTIFICATIONS,
            },
            [eP.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.D9yVAA)],
                parent: eP.s6.NOTIFICATIONS,
            },
            [eP.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.u6dc5O)],
                parent: eP.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eP.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.P8MG6u)],
                parent: eP.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eP.s6.NOTIFICATIONS_SOUNDS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.MKWyKS)],
                parent: eP.s6.NOTIFICATIONS,
            },
            [eP.s6.NOTIFICATIONS_EMAILS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.TPchzM)],
                parent: eP.s6.NOTIFICATIONS,
            },
            [eP.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t["B75+xc"])],
                parent: eP.s6.NOTIFICATIONS_EMAILS,
            },
            [eP.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.sxn7lZ)],
                parent: eP.s6.NOTIFICATIONS_EMAILS,
            },
            [eP.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.EkxXhY)],
                parent: eP.s6.NOTIFICATIONS_EMAILS,
            },
            [eP.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.jNrkrK)],
                parent: eP.s6.NOTIFICATIONS_EMAILS,
            },
            [eP.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.E8g1l5)],
                parent: eP.s6.NOTIFICATIONS_EMAILS,
            },
            [eP.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.Ra9Pws)],
                parent: eP.s6.NOTIFICATIONS_EMAILS,
            },
            [eP.s6.NOTIFICATIONS_REACTIONS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.Rq0NFh)],
                parent: eP.s6.NOTIFICATIONS,
            },
            [eP.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.wtk08f)],
                parent: eP.s6.NOTIFICATIONS,
                predicate: () => (0, k.JN)("SettingsRendererConfig"),
            },
            [eP.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ej.intl.string(ej.t.pW4TMj)],
                parent: eP.s6.NOTIFICATIONS,
            },
            [eP.s6.KEYBINDS]: {
                section: eD.oAB.KEYBINDS,
                searchableTitles: [ej.intl.string(ej.t.T9DA2N)],
                label: ej.intl.string(ej.t.T9DA2N),
                element: ef.Z,
                url: eD.Z5c.SETTINGS("keybinds"),
            },
            [eP.s6.LANGUAGE]: {
                section: eD.oAB.LOCALE,
                searchableTitles: [ej.intl.string(ej.t.IHMsPj)],
                label: ej.intl.string(ej.t.IHMsPj),
                element: e_.Z,
                url: eD.Z5c.SETTINGS("language"),
            },
            [eP.s6.WINDOW_SETTINGS]: {
                section: eD.oAB.WINDOWS,
                searchableTitles: [ej.intl.string(ej.t.ZkDZoq)],
                label: ej.intl.string(ej.t.ZkDZoq),
                element: ev.Z,
                predicate: () => Y.isPlatformEmbedded && (0, Y.isWindows)(),
            },
            [eP.s6.LINUX_SETTINGS]: {
                section: eD.oAB.LINUX,
                searchableTitles: [ej.intl.string(ej.t["7pPjTU"])],
                label: ej.intl.string(ej.t["7pPjTU"]),
                element: eK,
                predicate: () => Y.isPlatformEmbedded && (0, Y.isLinux)(),
            },
            [eP.s6.STREAMER_MODE]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [ej.intl.string(ej.t.S5GfOT)],
                label: ej.intl.string(ej.t.S5GfOT),
                ariaLabel: ej.intl.string(ej.t.S5GfOT),
                element: eb.Z,
                url: eD.Z5c.SETTINGS("streamer-mode"),
            },
            [eP.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [ej.intl.string(ej.t.bxGbHB)],
                parent: eP.s6.STREAMER_MODE,
            },
            [eP.s6.STREAMER_MODE_ENABLE]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [ej.intl.string(ej.t.p9ZAJS)],
                parent: eP.s6.STREAMER_MODE,
            },
            [eP.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [ej.intl.string(ej.t.UpQziI)],
                parent: eP.s6.STREAMER_MODE,
            },
            [eP.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [ej.intl.string(ej.t.q7WNGh)],
                parent: eP.s6.STREAMER_MODE,
            },
            [eP.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [ej.intl.string(ej.t["1CWknJ"])],
                parent: eP.s6.STREAMER_MODE,
            },
            [eP.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [ej.intl.string(ej.t.qmYiYW)],
                parent: eP.s6.STREAMER_MODE,
            },
            [eP.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [ej.intl.string(ej.t["iA81+f"])],
                parent: eP.s6.STREAMER_MODE,
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
            [eP.s6.SETTINGS_ADVANCED]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: [ej.intl.string(ej.t["8/udY2"])],
                label: ej.intl.string(ej.t["8/udY2"]),
                ariaLabel: ej.intl.string(ej.t["8/udY2"]),
                element: et.ZP,
            },
            [eP.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: [ej.intl.string(ej.t.ObIb1d)],
                parent: eP.s6.SETTINGS_ADVANCED,
                predicate: () => V.wS,
            },
            [eP.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: [ej.intl.string(ej.t["eOC/Fx"])],
                parent: eP.s6.SETTINGS_ADVANCED,
                predicate: () => Y.isPlatformEmbedded,
            },
            [eP.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: [ej.intl.string(ej.t.fi3UQE)],
                parent: eP.s6.SETTINGS_ADVANCED,
                predicate: () => e0,
            },
            [eP.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: [ej.intl.string(ej.t.erOqlp)],
                parent: eP.s6.SETTINGS_ADVANCED,
                predicate: () => e2,
            },
            [eP.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: [ej.intl.string(ej.t.qDZryM)],
                parent: eP.s6.SETTINGS_ADVANCED,
            },
            [eP.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: eP.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    g.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [eP.s6.ACTIVITY_PRIVACY]: {
                section: eD.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ej.intl.string(ej.t.Cq98yM)],
                label: ej.intl.string(ej.t.Cq98yM),
                ariaLabel: ej.intl.string(ej.t.Cq98yM),
                element: ee.Z,
                predicate: () => !eG,
                url: eD.Z5c.SETTINGS("activity-privacy"),
            },
            [eP.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eG ? eD.oAB.GAMES : eD.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ej.intl.string(ej.t["8ka8lp"])],
                parent: eG ? eP.s6.GAMES_ACTIVITY_PRIVACY : eP.s6.ACTIVITY_PRIVACY,
            },
            [eP.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eG ? eD.oAB.GAMES : eD.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ej.intl.string(ej.t.VOszPD)],
                parent: eG ? eP.s6.GAMES_ACTIVITY_PRIVACY : eP.s6.ACTIVITY_PRIVACY,
            },
            [eP.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eG ? eD.oAB.GAMES : eD.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eP.CF],
                parent: eG ? eP.s6.GAMES_ACTIVITY_PRIVACY : eP.s6.ACTIVITY_PRIVACY,
            },
            [eP.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eD.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ej.intl.string(ej.t["4F2KoK"])],
                parent: eP.s6.ACTIVITY_PRIVACY,
            },
            [eP.s6.REGISTERED_GAMES]: {
                section: eD.oAB.REGISTERED_GAMES,
                searchableTitles: [ej.intl.string(ej.t.AVDyEh)],
                label: ej.intl.string(ej.t.AVDyEh),
                element: eu.Z,
                predicate: () => !eG && (0, eS.Jw)(),
            },
            [eP.s6.OVERLAY]: {
                section: eD.oAB.OVERLAY,
                searchableTitles: [ej.intl.string(ej.t["9cb1U1"]), ej.intl.string(ej.t.HcoRu7)],
                label: ej.intl.string(ej.t["9cb1U1"]),
                element: eh.Z,
                predicate: () => !eG && S,
            },
            [eP.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, E.Z)(!0),
                searchableTitles: [ej.intl.string(ej.t.LRmNAg)],
                label: ej.intl.string(ej.t.LRmNAg),
            },
            [eP.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    F.default.track(eD.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, H.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                F.default.track(eD.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, p.Z)(e);
                            },
                        });
                },
                searchableTitles: [ej.intl.string(ej.t.sMEktb)],
                label: ej.intl.string(ej.t.sMEktb),
                ariaLabel: ej.intl.string(ej.t.sMEktb),
            },
            [eP.s6.EXPERIMENTS]: {
                section: eD.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: eT.Z,
                predicate: () => U.Z.isDeveloper,
                url: eD.Z5c.SETTINGS("experiments"),
            },
            [eP.s6.DEVELOPER_OPTIONS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: el.Z,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eP.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eP.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eP.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eP.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eP.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eP.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eP.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eP.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => ez && U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eP.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => ez && U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eP.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eP.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => ez && U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Toggleable Components"],
                parent: eP.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => ez && U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eP.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => ez && U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eP.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => ez && U.Z.isDeveloper && G.default.layoutDebuggingEnabled,
            },
            [eP.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => ez && U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => ez && U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eP.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eP.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eP.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => m.q && U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eP.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eP.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eP.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eP.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.QUEST_PREVIEW_TOOL_2]: {
                section: eD.oAB.QUEST_PREVIEW_TOOL_2,
                searchableTitles: ["Quest Preview Tool 2"],
                label: "Quest Preview Tool 2",
                element: () => (0, r.jsx)(L.Z, { questId: null == b ? void 0 : b.quest_id }),
                predicate: () => (0, x.T)({ location: ex.dr.QUEST_PREVIEW_TOOL_2 }),
            },
            [eP.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM]: {
                section: f.ID.CUSTOM,
                searchableTitles: eI.Y,
                label: "Developer Education",
                element: eI.$,
                predicate: () => U.Z.isDeveloper,
            },
            [eP.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            eF(
                                eB(
                                    {
                                        header: ej.intl.string(ej.t["2jxGen"]),
                                        confirmText: ej.intl.string(ej.t["2jxGen"]),
                                        cancelText: ej.intl.string(ej.t["ETE/oK"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: ej.intl.string(ej.t.SUnWBA),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: ej.intl.string(ej.t["2jxGen"]),
                ariaLabel: ej.intl.string(ej.t["2jxGen"]),
                icon: (0, r.jsx)(s.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [eP.s6.SOCIAL_LINKS]: {
                section: f.ID.CUSTOM,
                element: Q.Z,
            },
            [eP.s6.CLIENT_DEBUG_INFO]: {
                section: f.ID.CUSTOM,
                element: z.Z,
            },
        });
    };
