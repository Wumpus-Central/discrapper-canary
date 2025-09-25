n.d(t, {
    $Z: () => eY,
    OF: () => eK,
    W8: () => ez,
    c$: () => eW,
    iE: () => eX,
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
    ed = n(88624),
    ef = n(387747),
    e_ = n(389650),
    ep = n(649157),
    eh = n(593648),
    em = n(327885),
    eg = n(595242),
    eE = n(463153),
    eb = n(36192),
    ey = n(889029),
    eO = n(400287),
    ev = n(936982),
    eI = n(200645),
    eT = n(342386),
    eS = n(924983),
    eA = n(287490),
    eC = n(168308),
    eN = n(277329),
    eR = n(273927),
    eP = n(604224),
    ew = n(345655),
    eD = n(726985),
    ex = n(583139),
    eL = n(981631),
    ej = n(46140),
    eM = n(65154),
    ek = n(388032),
    eU = n(62222),
    eG = n(412297),
    eB = n(756464);
function eZ(e, t, n) {
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
function eF(e) {
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
                eZ(e, t, n[t]);
            });
    }
    return e;
}
function eV(e, t) {
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
function eH(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eV(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eY = () => {
        let e = [a.z.CLIENT_THEMES_SETTINGS_BADGE, a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
        return (
            b.Mc.getCurrentConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            h.n.getConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE),
            e
        );
    },
    eW = () => {
        let e = eY(),
            [t] = (0, T.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: ek.intl.string(ek.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ||
                t === a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE
              ? (0, r.jsx)(s.IGR, { text: ek.intl.string(ek.t.y2b7CA) })
              : null;
    },
    eK = () => {
        let e = [];
        return (
            (0, M.h)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            S.JH.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    ez = () => {
        let e = eK(),
            [t] = (0, T.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: ek.intl.string(ek.t.y2b7CA) })
            : null;
    },
    eq = eI.Z,
    eX = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: h,
            searchParams: b,
            numOfPendingFamilyRequests: T,
            isOverlaySupported: S,
            isClipsBetaTagShowing: M = !1,
            shouldMergeGameSettings: eZ,
            isKeywordFilteringEnabled: eV,
            isStaff: eX,
            isInappropriateConversationWarningEnabled: eQ,
            isInapproprateConversationsDefaultOn: eJ,
            paymentsBlocked: e$,
            isEligibleForQuests: e0,
            isStricterMessageRequestsEnabled: e1,
            hasLibraryApplication: e2,
            hasTOTPEnabled: e3,
            developerMode: e4,
            isAdultUser: e8,
            hasSecureFramesVerifiedUserIds: e6,
            hypeSquadRemoved: e5,
            hasIgnoredUsers: e7,
            hasBlockedUsers: e9,
            isEligibleForSensitiveContentDefaults: te,
            inputMode: tt,
            activeInputProfile: tn,
            isInputProfileCustom: tr,
            isDataUsage3PToggleEnabled: ti,
        } = e;
        return Object.freeze({
            [eD.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: eE.Z,
            },
            [eD.s6.ACCOUNT_SECURITY_TAB]: {
                section: eL.oAB.ACCOUNT,
                searchableTitles: [ek.intl.string(ek.t.Am9YHh)],
                label: ek.intl.string(ek.t.Am9YHh),
            },
            [eD.s6.ACCOUNT]: {
                section: eL.oAB.ACCOUNT,
                searchableTitles: [ek.intl.string(ek.t["JAIM/v"])],
                label: ek.intl.string(ek.t["JAIM/v"]),
                ariaLabel: ek.intl.string(ek.t["JAIM/v"]),
                element: $.Z,
                url: eL.Z5c.SETTINGS("account"),
            },
            [eD.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [ek.intl.string(ek.t.LYju5O)],
                parent: eD.s6.ACCOUNT,
                section: eL.oAB.ACCOUNT,
            },
            [eD.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [ek.intl.string(ek.t["9AjdkJ"])],
                section: eL.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_PROFILE,
            },
            [eD.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [ek.intl.string(ek.t.Ulqq6O)],
                section: eL.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_PROFILE,
            },
            [eD.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    ek.intl.string(ek.t["/52UY2"]),
                    ek.intl.string(ek.t.sK0dmJ),
                    ek.intl.string(ek.t.XxRj7e),
                    ek.intl.string(ek.t.yNGjyM),
                    ek.intl.string(ek.t.KPGVWl),
                ],
                section: eL.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_PROFILE,
                predicate: () => te,
            },
            [eD.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [ek.intl.string(ek.t["+JkHPz"])],
                section: eL.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_PROFILE,
            },
            [eD.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [ek.intl.string(ek.t.oP5zGB)],
                section: eL.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_PROFILE,
            },
            [eD.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [ek.intl.string(ek.t.pKSjEh)],
                section: eL.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT,
            },
            [eD.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [ek.intl.string(ek.t["FRep5+"])],
                section: eL.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eD.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [ek.intl.string(ek.t["7qKDrK"])],
                section: eL.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eD.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [ek.intl.string(ek.t.m0FidH)],
                section: eL.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eD.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [ek.intl.string(ek.t.cDgKtb)],
                section: eL.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e3,
            },
            [eD.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [ek.intl.string(ek.t["D+aE7u"])],
                section: eL.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e3,
            },
            [eD.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [ek.intl.string(ek.t.fZSi1N)],
                section: eL.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eD.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [ek.intl.string(ek.t.uHAJ5u)],
                section: eL.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eD.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [ek.intl.string(ek.t.vrOCCg)],
                section: eL.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eD.s6.ACCOUNT_REMOVAL]: {
                section: eL.oAB.ACCOUNT,
                searchableTitles: [ek.intl.string(ek.t.ZKsIkp)],
                parent: eD.s6.ACCOUNT,
            },
            [eD.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eL.oAB.ACCOUNT,
                searchableTitles: [ek.intl.string(ek.t.jf5GGR)],
                parent: eD.s6.ACCOUNT_REMOVAL,
            },
            [eD.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eL.oAB.ACCOUNT,
                searchableTitles: [ek.intl.string(ek.t["8lQ2ra"])],
                parent: eD.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eD.s6.GAMES]: {
                section: eL.oAB.GAMES,
                searchableTitles: [ek.intl.string(ek.t.URyqtL)],
                label: ek.intl.string(ek.t.URyqtL),
                ariaLabel: ek.intl.string(ek.t.URyqtL),
                element: eN.Z,
                predicate: () => eZ,
            },
            [eD.s6.GAMES_MY_GAMES]: {
                section: eL.oAB.GAMES,
                searchableTitles: [ek.intl.string(ek.t["5DMgp6"])],
                parent: eD.s6.GAMES,
            },
            [eD.s6.GAMES_CLIPS]: {
                section: eL.oAB.GAMES,
                searchableTitles: [ek.intl.string(ek.t.z2jK6e)],
                parent: eD.s6.GAMES,
            },
            [eD.s6.GAMES_OVERLAY]: {
                section: eL.oAB.GAMES,
                searchableTitles: [ek.intl.string(ek.t["9cb1U1"])],
                parent: eD.s6.GAMES,
            },
            [eD.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eL.oAB.GAMES,
                searchableTitles: [ek.intl.string(ek.t.Cq98yM)],
                parent: eD.s6.GAMES,
            },
            [eD.s6.PROFILE_CUSTOMIZATION]: {
                section: eL.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [ek.intl.string(ek.t["vi7f+v"])],
                label: ek.intl.string(ek.t["vi7f+v"]),
                ariaLabel: ek.intl.string(ek.t["vi7f+v"]),
                element: D.Z,
                newIndicator: (0, r.jsx)(ez, {}),
                newIndicatorDismissibleContentTypes: [...eK()],
                notice: {
                    stores: [Z.Z, C.Z],
                    element: w.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, A.It)(), (0, u.P6)(), d.Z.clearSubsection(eL.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eL.Z5c.SETTINGS("profile-customization"),
            },
            [eD.s6.PROFILE_DISPLAY_NAME]: {
                section: eL.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ek.intl.string(ek.t["9AjdkJ"])],
                parent: eD.s6.PROFILE_CUSTOMIZATION,
            },
            [eD.s6.PROFILE_USER_PROFILE]: {
                section: eL.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ek.intl.string(ek.t["2p07FR"]), ek.intl.string(ek.t["7vhiqq"])],
                parent: eD.s6.PROFILE_CUSTOMIZATION,
            },
            [eD.s6.PROFILE_SERVER_PROFILES]: {
                section: eL.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ek.intl.string(ek.t.kPHroa)],
                parent: eD.s6.PROFILE_CUSTOMIZATION,
            },
            [eD.s6.CONTENT_SOCIAL]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                label: ek.intl.string(ek.t["+o1pDQ"]),
                searchableTitles: [ek.intl.string(ek.t["+o1pDQ"])],
                ariaLabel: ek.intl.string(ek.t["+o1pDQ"]),
                element: eo.Z,
                url: eL.Z5c.SETTINGS("content-and-social"),
            },
            [eD.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t["+o1pDQ"]), ek.intl.string(ek.t["/7xJCA"])],
                parent: eD.s6.CONTENT_SOCIAL,
            },
            [eD.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t["+o1pDQ"]), ek.intl.string(ek.t["/7xJCA"])],
                parent: eD.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eD.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t.YpCiMj)],
                parent: eD.s6.CONTENT_SOCIAL,
            },
            [eD.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                label: ek.intl.string(ek.t.YpCiMj),
                searchableTitles: [ek.intl.string(ek.t.YpCiMj)],
                ariaLabel: ek.intl.string(ek.t.YpCiMj),
                parent: eD.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eL.Z5c.SETTINGS(eL.oAB.CONTENT_AND_SOCIAL, ex.C),
            },
            [eD.s6.DATA_PRIVACY]: {
                section: eL.oAB.DATA_AND_PRIVACY,
                label: ek.intl.string(ek.t.OAuOHB),
                searchableTitles: [ek.intl.string(ek.t.OAuOHB)],
                ariaLabel: ek.intl.string(ek.t.OAuOHB),
                element: es.Z,
                url: eL.Z5c.SETTINGS("data-and-privacy"),
            },
            [eD.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eL.oAB.ACCOUNT,
                searchableTitles: [ek.intl.string(ek.t["Vov/9v"])],
                parent: eD.s6.ACCOUNT,
            },
            [eD.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eL.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ek.intl.string(ek.t.WWaFn5)],
                parent: eD.s6.DATA_PRIVACY,
                predicate: () => (0, Y.isDesktop)(),
            },
            [eD.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eL.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ek.intl.string(ek.t["opi/XF"])],
                parent: eD.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eD.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t.xVRG4O)],
                parent: eD.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eD.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t.fyA119)],
                parent: eD.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eD.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t.fyA119)],
                parent: eD.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eD.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t["/U8Iwc"])],
                parent: eD.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eD.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t["ms+TmZ"])],
                parent: eD.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eD.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t["y62Z/f"])],
                parent: eD.s6.CONTENT_SOCIAL,
            },
            [eD.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eL.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ek.intl.string(ek.t.SRZyHh)],
                parent: eD.s6.DATA_PRIVACY,
            },
            [eD.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ek.intl.string(ek.t.uEz8JC),
                    ek.intl.string(ek.t["N/oRIy"]),
                    ek.intl.string(ek.t.QVdYsL),
                    ek.intl.string(ek.t["aWD+tr"]),
                    ek.intl.string(ek.t["5mnTa2"]),
                ],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eD.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ek.intl.string(ek.t["Hj/Bur"]),
                    ek.intl.string(ek.t["N/oRIy"]),
                    ek.intl.string(ek.t.QVdYsL),
                    ek.intl.string(ek.t["aWD+tr"]),
                    ek.intl.string(ek.t["5mnTa2"]),
                    ek.intl.string(ek.t.K0OWPz),
                ],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eD.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ek.intl.string(ek.t["Hj/Bur"]),
                    ek.intl.string(ek.t["N/oRIy"]),
                    ek.intl.string(ek.t.QVdYsL),
                    ek.intl.string(ek.t["aWD+tr"]),
                    ek.intl.string(ek.t["5mnTa2"]),
                ],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eD.s6.GORE_MEDIA_REDACTION]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ek.intl.string(ek.t["Hj/Bur"]),
                    ek.intl.string(ek.t["N/oRIy"]),
                    ek.intl.string(ek.t.QVdYsL),
                    ek.intl.string(ek.t["aWD+tr"]),
                    ek.intl.string(ek.t.K0OWPz),
                ],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eD.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ek.intl.string(ek.t.JzaP4u),
                    ek.intl.string(ek.t.H9XOl5),
                    ek.intl.string(ek.t.k4W40N),
                ],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eD.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t["L+yTsb"])],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eD.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t.XahVjo)],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eD.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                parent: eD.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eD.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t.RAQUSE), ek.intl.string(ek.t.wbYDfX)],
                parent: eD.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eD.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t["3o2ojo"])],
                parent: eD.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !e1,
            },
            [eD.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t.OLwZDQ)],
                parent: eD.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eD.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t.wBkwu7)],
                parent: eD.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eD.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eL.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ek.intl.string(ek.t.XuADY2)],
                parent: eD.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eD.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eL.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ek.intl.string(ek.t.MNKzys)],
                parent: eD.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eD.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eL.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ek.intl.string(ek.t.VkS7YW), ek.intl.string(ek.t.sJYh5u)],
                parent: eD.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eD.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eL.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ek.intl.string(ek.t.CyLYKS)],
                parent: eD.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                predicate: () => ti,
            },
            [eD.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eL.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.CF],
                parent: eD.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eD.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eL.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ek.intl.string(ek.t.dmBSKi)],
                parent: eD.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eD.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t["1UaUy8"]), ek.intl.string(ek.t["xIk/iI"])],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eV,
            },
            [eD.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ek.intl.string(ek.t.qFsx5u)],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eQ && !e8 && !eJ,
            },
            [eD.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eL.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ek.intl.string(ek.t["5b3FND"])],
                parent: eD.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => e6,
            },
            [eD.s6.PRIVACY_FAMILY_CENTER]: {
                section: eL.oAB.FAMILY_CENTER,
                searchableTitles: [ek.intl.string(eG.default.gntCQU)],
                label: ek.intl.string(eG.default.gntCQU),
                ariaLabel: ek.intl.string(eG.default.gntCQU),
                element: ec.Z,
                badgeCount: T,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: ek.intl.string(ek.t.y2b7CA),
                    color: I.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eL.Z5c.SETTINGS("family-center"),
            },
            [eD.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eL.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ek.intl.string(ek.t.BG7Qsb)],
                parent: eD.s6.DATA_PRIVACY,
            },
            [eD.s6.AUTHORIZED_APPS]: {
                section: eL.oAB.AUTHORIZED_APPS,
                searchableTitles: [ek.intl.string(ek.t["f6kk+v"])],
                label: ek.intl.string(ek.t["f6kk+v"]),
                element: er.Z,
                url: eL.Z5c.SETTINGS("authorized-apps"),
            },
            [eD.s6.SESSIONS]: {
                section: eL.oAB.SESSIONS,
                searchableTitles: [ek.intl.string(ek.t["+1h0k5"])],
                label: ek.intl.string(ek.t["+1h0k5"]),
                ariaLabel: ek.intl.string(ek.t["+1h0k5"]),
                element: eb.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
            },
            [eD.s6.CONNECTIONS]: {
                section: eL.oAB.CONNECTIONS,
                searchableTitles: [ek.intl.string(ek.t["3fe7U1"])],
                label: ek.intl.string(ek.t["3fe7U1"]),
                ariaLabel: ek.intl.string(ek.t["3fe7U1"]),
                element: ea.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eL.Z5c.SETTINGS("connections"),
            },
            [eD.s6.THIRD_PARTY_ACCESS]: {
                section: eL.oAB.CONNECTIONS,
                searchableTitles: [
                    ek.intl.string(ek.t["Ig/XFR"]),
                    ek.intl.string(ek.t["3fe7U1"]),
                    ek.intl.string(ek.t["f6kk+v"]),
                ],
                label: ek.intl.string(ek.t["Ig/XFR"]),
                parent: eD.s6.CONNECTIONS,
                element: ev.Z,
            },
            [eD.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eL.oAB.CONNECTIONS,
                searchableTitles: [ek.intl.string(ek.t["+/hZMz"])],
                parent: eD.s6.CONNECTIONS,
                element: ea.Z,
            },
            [eD.s6.CLIPS]: {
                section: eL.oAB.CLIPS,
                searchableTitles: [ek.intl.string(ek.t.z2jK6e)],
                label: ek.intl.string(ek.t.z2jK6e),
                ariaLabel: ek.intl.string(ek.t.z2jK6e),
                icon: M ? (0, r.jsx)(y.Z, {}) : void 0,
                element: O.Z,
                predicate: () => !eZ,
                url: eL.Z5c.SETTINGS("clips"),
            },
            [eD.s6.RESTRICTED_USERS]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                parent: eD.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: ek.intl.string(ek.t["3wRorq"]),
                element: eR.ZP,
                predicate: () => e7 || e9,
            },
            [eD.s6.BLOCKED_USERS]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                parent: eD.s6.RESTRICTED_USERS,
                label: ek.intl.string(ek.t.PFOUKS),
                searchableTitles: [ek.intl.string(ek.t.PFOUKS)],
                element: eR.GF,
                predicate: () => e9,
            },
            [eD.s6.IGNORED_USERS]: {
                section: eL.oAB.CONTENT_AND_SOCIAL,
                parent: eD.s6.RESTRICTED_USERS,
                searchableTitles: [ek.intl.string(ek.t["93ZDWF"])],
                label: ek.intl.string(ek.t["93ZDWF"]),
                element: eR.yo,
                predicate: () => e7,
            },
            [eD.s6.PREMIUM]: {
                section: eL.oAB.PREMIUM,
                ariaLabel: ek.intl.string(ek.t.Ipxkoq),
                searchableTitles: [ek.intl.string(ek.t.Ipxkoq)],
                label: ek.intl.string(ek.t.Ipxkoq),
                element: X.Z,
                className: eB.premiumTab,
            },
            [eD.s6.GUILD_BOOSTING]: {
                section: eL.oAB.GUILD_BOOSTING,
                searchableTitles: [ek.intl.string(ek.t["+CbP2t"])],
                label: ek.intl.string(ek.t["+CbP2t"]),
                element: eg.Z,
            },
            [eD.s6.SUBSCRIPTIONS]: {
                section: eL.oAB.SUBSCRIPTIONS,
                ariaLabel: ek.intl.string(ek.t.trSpHR),
                searchableTitles: [ek.intl.string(ek.t.trSpHR)],
                label: ek.intl.string(ek.t.trSpHR),
                element: P.Z,
                icon: h
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eD.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eL.oAB.SUBSCRIPTIONS,
                searchableTitles: [ek.intl.string(ek.t["2GKrvr"])],
                parent: eD.s6.SUBSCRIPTIONS,
            },
            [eD.s6.GIFT_INVENTORY]: {
                section: eL.oAB.INVENTORY,
                searchableTitles: [ek.intl.string(ek.t["jcSP+v"])],
                label: ek.intl.string(ek.t["jcSP+v"]),
                element: ef.Z,
                ariaLabel: ek.intl.string(ek.t["jcSP+v"]),
                badgeCount: t,
            },
            [eD.s6.GIFT_CODE_REDEMPTION]: {
                section: eL.oAB.INVENTORY,
                searchableTitles: [ek.intl.string(ek.t["il+VCg"])],
                parent: eD.s6.GIFT_INVENTORY,
                predicate: () => !e$,
            },
            [eD.s6.GIFT_INVENTORY_QUESTS]: {
                section: eL.oAB.INVENTORY,
                searchableTitles: [ek.intl.string(ek.t.JALI2N)],
                parent: eD.s6.GIFT_INVENTORY,
                predicate: () => e0,
            },
            [eD.s6.GIFT_INVENTORY_LIST]: {
                section: eL.oAB.INVENTORY,
                searchableTitles: [ek.intl.string(ek.t["9KeUbW"])],
                parent: eD.s6.GIFT_INVENTORY,
                predicate: () => !e$,
            },
            [eD.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eL.oAB.INVENTORY,
                searchableTitles: [ek.intl.string(ek.t.vwMEHR)],
                parent: eD.s6.GIFT_INVENTORY,
                predicate: () => e$,
            },
            [eD.s6.BILLING]: {
                section: eL.oAB.BILLING,
                searchableTitles: [ek.intl.string(ek.t.oeUm2t)],
                label: ek.intl.string(ek.t.oeUm2t),
                ariaLabel: ek.intl.string(ek.t.oeUm2t),
                element: ei.Z,
            },
            [eD.s6.BILLING_PAYMENT_METHODS]: {
                section: eL.oAB.BILLING,
                searchableTitles: [ek.intl.string(ek.t.W26xGR)],
                parent: eD.s6.BILLING,
            },
            [eD.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eL.oAB.BILLING,
                searchableTitles: [ek.intl.string(ek.t.obLrcH)],
                parent: eD.s6.BILLING,
            },
            [eD.s6.APPEARANCE]: {
                section: eL.oAB.APPEARANCE,
                searchableTitles: [ek.intl.string(ek.t["iHH+k5"])],
                label: ek.intl.string(ek.t["iHH+k5"]),
                ariaLabel: ek.intl.string(ek.t["iHH+k5"]),
                element: en.Z,
                newIndicator: (0, r.jsx)(eW, {}),
                newIndicatorDismissibleContentTypes: eY(),
                url: eL.Z5c.SETTINGS("appearance"),
            },
            [eD.s6.APPEARANCE_THEME]: {
                section: eL.oAB.APPEARANCE,
                searchableTitles: [ek.intl.string(ek.t.Ksh3io)],
                parent: eD.s6.APPEARANCE,
            },
            [eD.s6.APPEARANCE_COLOR]: {
                section: eL.oAB.APPEARANCE,
                searchableTitles: [ek.intl.string(ek.t.OCOOiI)],
                parent: eD.s6.APPEARANCE_THEME,
            },
            [eD.s6.APPEARANCE_ICON]: {
                section: eL.oAB.APPEARANCE,
                searchableTitles: [ek.intl.string(ek.t.RPh2oq)],
                parent: eD.s6.APPEARANCE_THEME,
            },
            [eD.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eL.oAB.APPEARANCE,
                searchableTitles: [ek.intl.string(ek.t.ZEoGMT)],
                parent: eD.s6.APPEARANCE,
            },
            [eD.s6.APPEARANCE_LIST_SPACING]: {
                section: eL.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eD.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: ek.intl.string(ek.t.y2b7CA),
                    color: I.Z.BG_BRAND,
                }),
            },
            [eD.s6.APPEARANCE_SCALING_SPACING]: {
                section: eL.oAB.APPEARANCE,
                searchableTitles: [ek.intl.string(ek.t.qPOqoK)],
                parent: eD.s6.APPEARANCE,
            },
            [eD.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eL.oAB.APPEARANCE,
                searchableTitles: [
                    ek.intl.string(ek.t.dyamEB),
                    ek.intl.string(ek.t.p8NOws),
                    ek.intl.string(ek.t["+o/sOj"]),
                ],
                parent: eD.s6.APPEARANCE,
                predicate: () =>
                    j.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eD.s6.ACCESSIBILITY]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.G0neg4)],
                label: ek.intl.string(ek.t.G0neg4),
                ariaLabel: ek.intl.string(ek.t.G0neg4),
                element: J.Z,
                url: eL.Z5c.SETTINGS("accessibility"),
            },
            [eD.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.aZlePj)],
                parent: eD.s6.ACCESSIBILITY,
            },
            [eD.s6.ACCESSIBILITY_SATURATION]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t["5PWWCQ"])],
                parent: eD.s6.ACCESSIBILITY,
            },
            [eD.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.bQCodH)],
                parent: eD.s6.ACCESSIBILITY_SATURATION,
            },
            [eD.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.OLZFBw)],
                parent: eD.s6.ACCESSIBILITY,
            },
            [eD.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t["+IsihY"])],
                parent: eD.s6.ACCESSIBILITY,
                predicate: () => (0, v.l)("SettingsRendererConfig"),
            },
            [eD.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.uSOPWl)],
                parent: eD.s6.ACCESSIBILITY,
            },
            [eD.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(eU.default["2gFUEx"])],
                parent: eD.s6.ACCESSIBILITY,
            },
            [eD.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.BT8Bmp)],
                parent: eD.s6.ACCESSIBILITY,
            },
            [eD.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t["sSY+mJ"])],
                parent: eD.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eD.s6.ACCESSIBILITY_CONTRAST]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.TYyfOz)],
                parent: eD.s6.ACCESSIBILITY,
            },
            [eD.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.cguieX)],
                parent: eD.s6.ACCESSIBILITY_CONTRAST,
            },
            [eD.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.e3TR1d)],
                parent: eD.s6.ACCESSIBILITY,
            },
            [eD.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.b3XBzs)],
                parent: eD.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eD.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.Iayoh4)],
                parent: eD.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eD.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.iIaOlZ)],
                parent: eD.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eD.s6.ACCESSIBILITY_STICKERS]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t["6NtAuL"])],
                parent: eD.s6.ACCESSIBILITY,
            },
            [eD.s6.ACCESSIBILITY_MESSAGES]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.onqU6u)],
                parent: eD.s6.ACCESSIBILITY,
            },
            [eD.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t["3Fztn5"])],
                parent: eD.s6.ACCESSIBILITY_MESSAGES,
            },
            [eD.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.TZ2hZG)],
                parent: eD.s6.ACCESSIBILITY_MESSAGES,
            },
            [eD.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.VpSKeH)],
                parent: eD.s6.ACCESSIBILITY,
            },
            [eD.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.qvTIwc)],
                parent: eD.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eD.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [ek.intl.string(ek.t.lsW5Eh)],
                parent: eD.s6.ACCESSIBILITY,
            },
            [eD.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eL.oAB.ACCESSIBILITY,
                searchableTitles: [eD.CF],
                parent: eD.s6.ACCESSIBILITY,
            },
            [eD.s6.VOICE_AND_VIDEO]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.B1fFpa)],
                label: ek.intl.string(ek.t.B1fFpa),
                ariaLabel: ek.intl.string(ek.t.B1fFpa),
                element: eP.Z,
                predicate: () => B.Z.isSupported(),
                url: eL.Z5c.SETTINGS("voice"),
            },
            [eD.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.K3lovL), ek.intl.string(ek.t.NiTd0d)],
                parent: eD.s6.VOICE_AND_VIDEO,
            },
            [eD.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.FlNoSU)],
                parent: eD.s6.VOICE_AND_VIDEO,
            },
            [eD.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.ABjMWF)],
                parent: eD.s6.VOICE_AND_VIDEO,
            },
            [eD.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.OFpL3d)],
                parent: eD.s6.VOICE_AND_VIDEO,
            },
            [eD.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.KDdjoq), ek.intl.string(ek.t.FeUKeH)],
                parent: eD.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eD.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.K3lovL), ek.intl.string(ek.t.NiTd0d)],
                parent: eD.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eD.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eL.oAB.VOICE,
                searchableTitles: [
                    ek.intl.string(ek.t.hHMYbW),
                    ek.intl.string(ek.t.dl18zc),
                    ek.intl.string(ek.t.nuFtHB),
                    ek.intl.string(ek.t["3182VF"]),
                    ek.intl.string(ek.t["DGq/PT"]),
                ],
                parent: eD.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eD.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eL.oAB.VOICE,
                searchableTitles: [
                    ek.intl.string(ek.t.OX2Bnp),
                    ek.intl.string(ek.t.eATD2N),
                    ek.intl.string(ek.t.nuFtHB),
                    ek.intl.string(ek.t["3182VF"]),
                    ek.intl.string(ek.t["DGq/PT"]),
                ],
                parent: eD.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eD.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.gyljWF), ek.intl.string(ek.t.nuFtHB)],
                parent: eD.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eD.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eL.oAB.VOICE,
                searchableTitles: [
                    ek.intl.string(ek.t.LM3U3t),
                    ek.intl.string(ek.t.nuFtHB),
                    ek.intl.string(ek.t.VZPR0d),
                    ek.intl.string(ek.t.cjPbpa),
                ],
                parent: eD.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, q.P)({ location: "SettingsRendererConfig" });
                    return e.length > 0;
                },
            },
            [eD.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t["pS+K2N"]), ek.intl.string(ek.t.nuFtHB)],
                parent: eD.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tn !== ew._.STUDIO,
            },
            [eD.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t["sqUm+v"]), ek.intl.string(ek.t.nuFtHB)],
                parent: eD.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tt === eM.pM.VOICE_ACTIVITY && tr,
            },
            [eD.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.e7LIiY)],
                parent: eD.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eD.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.nzUc3N)],
                parent: eD.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eD.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.ABjMWF)],
                parent: eD.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eD.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.nzUc3N)],
                parent: eD.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eD.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.LKzQSE)],
                parent: eD.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eD.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.F122Gx)],
                parent: eD.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => B.Z.supports(eM.AN.VIDEO),
            },
            [eD.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t["3Ppr1t"])],
                parent: eD.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eD.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.lZTUPj)],
                parent: eD.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => B.Z.supports(eM.AN.VIDEO),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t["8/udY2"])],
                parent: eD.s6.VOICE_AND_VIDEO,
            },
            [eD.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t["8/udY2"])],
                parent: eD.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => !(0, Y.isWeb)(),
            },
            [eD.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t["8/udY2"])],
                parent: eD.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.Tceiq6)],
                parent: eD.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED,
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t["71Ve19"])],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => B.Z.supports(eM.AN.OPEN_H264),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.Sln58f)],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.AxnPm5)],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => "stable" !== W.ZP.releaseChannel && B.Z.isExperimentalEncodersSupported(),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t["6I6GUl"])],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => tr,
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.iWTwu7)],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t["/jwMtr"])],
                parent: eD.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eD.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.OBwCXF)],
                parent: eD.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.t8QhiY), ek.intl.string(ek.t.hmfkCg)],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => B.Z.isNoiseSuppressionSupported(),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.BbESsr)],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => B.Z.isAdvancedVoiceActivitySupported(),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.cUMdHx)],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => B.Z.isAutomaticGainControlSupported(),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.DFPXIC)],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => B.Z.showBypassSystemInputProcessing(),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.uancuL)],
                parent: eD.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => B.Z.supports(eM.AN.QOS),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.oSdBvb)],
                parent: eD.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => B.Z.supports(eM.AN.ATTENUATION),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.wVBHr6)],
                parent: eD.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => B.Z.shouldOfferManualSubsystemSelection(),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eL.oAB.VOICE,
                searchableTitles: [
                    ek.intl.string(ek.t.KDdjoq),
                    ek.intl.string(ek.t.NMCIf3),
                    ek.intl.string(ek.t.FeUKeH),
                ],
                parent: eD.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    B.Z.supportsVideoHook() ||
                    B.Z.supportsExperimentalSoundshare() ||
                    (B.Z.supportsSystemScreensharePicker() && (0, Y.isMac)()),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.GmWk2N), ek.intl.string(ek.t["Fj/xn5"])],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => B.Z.supportsVideoHook(),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t["4I0qzc"])],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => B.Z.supportsExperimentalSoundshare() && B.Z.supportsHookSoundshare(),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.ie1mgY)],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => B.Z.supportsSystemScreensharePicker() && (0, Y.isMac)(),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t["aP1N/v"])],
                parent: eD.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => Y.isPlatformEmbedded,
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.OFpL3d)],
                parent: eD.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t["0CEP6e"])],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => K.Sb.getSetting(),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t["r6K+TE"])],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => B.Z.isAecDumpSupported(),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t.U4FgFB)],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === W.ZP.releaseChannel || "development" === W.ZP.releaseChannel) &&
                    eX &&
                    B.Z.supports(eM.AN.CONNECTION_REPLAY),
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t["726JHB"])],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    Y.isPlatformEmbedded && B.Z.supports(eM.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [eD.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eL.oAB.VOICE,
                searchableTitles: [ek.intl.string(ek.t["/RXu6+"])],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eD.s6.POGGERMODE]: {
                section: eL.oAB.POGGERMODE,
                searchableTitles: [ek.intl.string(ek.t.AtCukJ)],
                label: ek.intl.string(ek.t.AtCukJ),
                ariaLabel: ek.intl.string(ek.t.AtCukJ),
                element: R.Z,
                predicate: () => N.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: eB.poggermodeIcon,
                }),
            },
            [eD.s6.CHAT]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t["/VQax8"])],
                label: ek.intl.string(ek.t["/VQax8"]),
                ariaLabel: ek.intl.string(ek.t["/VQax8"]),
                element: eO.Z,
                url: eL.Z5c.SETTINGS("text"),
            },
            [eD.s6.CHAT_INLINE_MEDIA]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t.U68Dgo)],
                parent: eD.s6.CHAT,
            },
            [eD.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t.U47N1t)],
                parent: eD.s6.CHAT_INLINE_MEDIA,
            },
            [eD.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t.VP11Nj)],
                parent: eD.s6.CHAT_INLINE_MEDIA,
            },
            [eD.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t["5S2AKy"])],
                parent: eD.s6.CHAT_INLINE_MEDIA,
            },
            [eD.s6.CHAT_EMBEDS]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t.PWZOn5)],
                parent: eD.s6.CHAT,
            },
            [eD.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t.xX0ZTE)],
                parent: eD.s6.CHAT_EMBEDS,
            },
            [eD.s6.CHAT_EMOJI]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t.sMOuub)],
                parent: eD.s6.CHAT,
            },
            [eD.s6.CHAT_EMOJI_REACTIONS]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t.Iv24sr)],
                parent: eD.s6.CHAT_EMOJI,
            },
            [eD.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t["79qal5"])],
                parent: eD.s6.CHAT_EMOJI,
            },
            [eD.s6.CHAT_STICKERS]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t["6NtAuL"])],
                parent: eD.s6.CHAT,
            },
            [eD.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t["29xPVV"])],
                parent: eD.s6.CHAT_STICKERS,
            },
            [eD.s6.CHAT_SOUNDMOJI]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t.EHlAMT)],
                parent: eD.s6.CHAT,
            },
            [eD.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t["CtYr+f"])],
                parent: eD.s6.CHAT_SOUNDMOJI,
            },
            [eD.s6.CHAT_TEXT_BOX]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t.afR0pK)],
                parent: eD.s6.CHAT,
            },
            [eD.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t.AqGrEB)],
                parent: eD.s6.CHAT_TEXT_BOX,
            },
            [eD.s6.CHAT_THREADS]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t.B2panJ)],
                parent: eD.s6.CHAT,
            },
            [eD.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t.AInv5u)],
                parent: eD.s6.CHAT_THREADS,
            },
            [eD.s6.CHAT_SPOILERS]: {
                section: eL.oAB.TEXT,
                searchableTitles: [ek.intl.string(ek.t.QgwmV1)],
                parent: eD.s6.CHAT,
            },
            [eD.s6.NOTIFICATIONS]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.HcoRu7)],
                label: ek.intl.string(ek.t.HcoRu7),
                ariaLabel: ek.intl.string(ek.t.HcoRu7),
                element: eh.Z,
                url: eL.Z5c.SETTINGS("notifications"),
            },
            [eD.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t["/0WClp"])],
                parent: eD.s6.NOTIFICATIONS,
            },
            [eD.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eD.s6.NOTIFICATIONS,
            },
            [eD.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.VH8AIC)],
                parent: eD.s6.NOTIFICATIONS,
            },
            [eD.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.xSmFQE)],
                parent: eD.s6.NOTIFICATIONS,
                predicate: () => (0, Y.isWindows)(),
            },
            [eD.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.z21l8P)],
                parent: eD.s6.NOTIFICATIONS,
            },
            [eD.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: ["New Notification Settings (Advanced, Staff Only)"],
                parent: eD.s6.NOTIFICATIONS,
                predicate: () => !1,
            },
            [eD.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: ["Restore most recent snapshot"],
                parent: eD.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eD.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: ["Launch Migration"],
                parent: eD.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eD.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: ["Toggle new system on/off"],
                parent: eD.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eD.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.TTvjd3)],
                parent: eD.s6.NOTIFICATIONS,
            },
            [eD.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.VpSKeH)],
                parent: eD.s6.NOTIFICATIONS,
            },
            [eD.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.D9yVAA)],
                parent: eD.s6.NOTIFICATIONS,
            },
            [eD.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.u6dc5O)],
                parent: eD.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eD.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.P8MG6u)],
                parent: eD.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eD.s6.NOTIFICATIONS_SOUNDS]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.MKWyKS)],
                parent: eD.s6.NOTIFICATIONS,
            },
            [eD.s6.NOTIFICATIONS_EMAILS]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.TPchzM)],
                parent: eD.s6.NOTIFICATIONS,
            },
            [eD.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t["B75+xc"])],
                parent: eD.s6.NOTIFICATIONS_EMAILS,
            },
            [eD.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.sxn7lZ)],
                parent: eD.s6.NOTIFICATIONS_EMAILS,
            },
            [eD.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.EkxXhY)],
                parent: eD.s6.NOTIFICATIONS_EMAILS,
            },
            [eD.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.jNrkrK)],
                parent: eD.s6.NOTIFICATIONS_EMAILS,
            },
            [eD.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.E8g1l5)],
                parent: eD.s6.NOTIFICATIONS_EMAILS,
            },
            [eD.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.Ra9Pws)],
                parent: eD.s6.NOTIFICATIONS_EMAILS,
            },
            [eD.s6.NOTIFICATIONS_REACTIONS]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.Rq0NFh)],
                parent: eD.s6.NOTIFICATIONS,
            },
            [eD.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.wtk08f)],
                parent: eD.s6.NOTIFICATIONS,
                predicate: () => (0, k.JN)("SettingsRendererConfig"),
            },
            [eD.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eL.oAB.NOTIFICATIONS,
                searchableTitles: [ek.intl.string(ek.t.pW4TMj)],
                parent: eD.s6.NOTIFICATIONS,
            },
            [eD.s6.KEYBINDS]: {
                section: eL.oAB.KEYBINDS,
                searchableTitles: [ek.intl.string(ek.t.T9DA2N)],
                label: ek.intl.string(ek.t.T9DA2N),
                element: e_.Z,
                url: eL.Z5c.SETTINGS("keybinds"),
            },
            [eD.s6.LANGUAGE]: {
                section: eL.oAB.LOCALE,
                searchableTitles: [ek.intl.string(ek.t.IHMsPj)],
                label: ek.intl.string(ek.t.IHMsPj),
                element: ep.Z,
                url: eL.Z5c.SETTINGS("language"),
            },
            [eD.s6.WINDOW_SETTINGS]: {
                section: eL.oAB.WINDOWS,
                searchableTitles: [ek.intl.string(ek.t.ZkDZoq)],
                label: ek.intl.string(ek.t.ZkDZoq),
                element: eI.Z,
                predicate: () => Y.isPlatformEmbedded && (0, Y.isWindows)(),
            },
            [eD.s6.LINUX_SETTINGS]: {
                section: eL.oAB.LINUX,
                searchableTitles: [ek.intl.string(ek.t["7pPjTU"])],
                label: ek.intl.string(ek.t["7pPjTU"]),
                element: eq,
                predicate: () => Y.isPlatformEmbedded && (0, Y.isLinux)(),
            },
            [eD.s6.STREAMER_MODE]: {
                section: eL.oAB.STREAMER_MODE,
                searchableTitles: [ek.intl.string(ek.t.S5GfOT)],
                label: ek.intl.string(ek.t.S5GfOT),
                ariaLabel: ek.intl.string(ek.t.S5GfOT),
                element: ey.Z,
                url: eL.Z5c.SETTINGS("streamer-mode"),
            },
            [eD.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eL.oAB.STREAMER_MODE,
                searchableTitles: [ek.intl.string(ek.t.bxGbHB)],
                parent: eD.s6.STREAMER_MODE,
            },
            [eD.s6.STREAMER_MODE_ENABLE]: {
                section: eL.oAB.STREAMER_MODE,
                searchableTitles: [ek.intl.string(ek.t.p9ZAJS)],
                parent: eD.s6.STREAMER_MODE,
            },
            [eD.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eL.oAB.STREAMER_MODE,
                searchableTitles: [ek.intl.string(ek.t.UpQziI)],
                parent: eD.s6.STREAMER_MODE,
            },
            [eD.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eL.oAB.STREAMER_MODE,
                searchableTitles: [ek.intl.string(ek.t.q7WNGh)],
                parent: eD.s6.STREAMER_MODE,
            },
            [eD.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eL.oAB.STREAMER_MODE,
                searchableTitles: [ek.intl.string(ek.t["1CWknJ"])],
                parent: eD.s6.STREAMER_MODE,
            },
            [eD.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eL.oAB.STREAMER_MODE,
                searchableTitles: [ek.intl.string(ek.t.qmYiYW)],
                parent: eD.s6.STREAMER_MODE,
            },
            [eD.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eL.oAB.STREAMER_MODE,
                searchableTitles: [ek.intl.string(ek.t["iA81+f"])],
                parent: eD.s6.STREAMER_MODE,
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
            [eD.s6.SETTINGS_ADVANCED]: {
                section: eL.oAB.ADVANCED,
                searchableTitles: [ek.intl.string(ek.t["8/udY2"])],
                label: ek.intl.string(ek.t["8/udY2"]),
                ariaLabel: ek.intl.string(ek.t["8/udY2"]),
                element: et.ZP,
            },
            [eD.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eL.oAB.ADVANCED,
                searchableTitles: [ek.intl.string(ek.t.ObIb1d)],
                parent: eD.s6.SETTINGS_ADVANCED,
                predicate: () => V.wS,
            },
            [eD.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eL.oAB.ADVANCED,
                searchableTitles: [ek.intl.string(ek.t["eOC/Fx"])],
                parent: eD.s6.SETTINGS_ADVANCED,
                predicate: () => Y.isPlatformEmbedded,
            },
            [eD.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eL.oAB.ADVANCED,
                searchableTitles: [ek.intl.string(ek.t.fi3UQE)],
                parent: eD.s6.SETTINGS_ADVANCED,
                predicate: () => e2,
            },
            [eD.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eL.oAB.ADVANCED,
                searchableTitles: [ek.intl.string(ek.t.erOqlp)],
                parent: eD.s6.SETTINGS_ADVANCED,
                predicate: () => e4,
            },
            [eD.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eL.oAB.ADVANCED,
                searchableTitles: [ek.intl.string(ek.t.qDZryM)],
                parent: eD.s6.SETTINGS_ADVANCED,
            },
            [eD.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eL.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: eD.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    g.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [eD.s6.ACTIVITY_PRIVACY]: {
                section: eL.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ek.intl.string(ek.t.Cq98yM)],
                label: ek.intl.string(ek.t.Cq98yM),
                ariaLabel: ek.intl.string(ek.t.Cq98yM),
                element: ee.Z,
                predicate: () => !eZ,
                url: eL.Z5c.SETTINGS("activity-privacy"),
            },
            [eD.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eZ ? eL.oAB.GAMES : eL.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ek.intl.string(ek.t["8ka8lp"])],
                parent: eZ ? eD.s6.GAMES_ACTIVITY_PRIVACY : eD.s6.ACTIVITY_PRIVACY,
            },
            [eD.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eZ ? eL.oAB.GAMES : eL.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ek.intl.string(ek.t.VOszPD)],
                parent: eZ ? eD.s6.GAMES_ACTIVITY_PRIVACY : eD.s6.ACTIVITY_PRIVACY,
            },
            [eD.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eZ ? eL.oAB.GAMES : eL.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eD.CF],
                parent: eZ ? eD.s6.GAMES_ACTIVITY_PRIVACY : eD.s6.ACTIVITY_PRIVACY,
            },
            [eD.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eL.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ek.intl.string(ek.t["4F2KoK"])],
                parent: eD.s6.ACTIVITY_PRIVACY,
            },
            [eD.s6.REGISTERED_GAMES]: {
                section: eL.oAB.REGISTERED_GAMES,
                searchableTitles: [ek.intl.string(ek.t.AVDyEh)],
                label: ek.intl.string(ek.t.AVDyEh),
                element: eu.Z,
                predicate: () => !eZ && (0, eC.Jw)(),
            },
            [eD.s6.OVERLAY]: {
                section: eL.oAB.OVERLAY,
                searchableTitles: [ek.intl.string(ek.t["9cb1U1"]), ek.intl.string(ek.t.HcoRu7)],
                label: ek.intl.string(ek.t["9cb1U1"]),
                element: em.Z,
                predicate: () => !eZ && S,
            },
            [eD.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, E.Z)(!0),
                searchableTitles: [ek.intl.string(ek.t.LRmNAg)],
                label: ek.intl.string(ek.t.LRmNAg),
            },
            [eD.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    F.default.track(eL.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, H.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                F.default.track(eL.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, p.Z)(e);
                            },
                        });
                },
                searchableTitles: [ek.intl.string(ek.t.sMEktb)],
                label: ek.intl.string(ek.t.sMEktb),
                ariaLabel: ek.intl.string(ek.t.sMEktb),
            },
            [eD.s6.HYPESQUAD]: {
                section: eL.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [ek.intl.string(ek.t["k0R+4e"])],
                label: ek.intl.string(ek.t["k0R+4e"]),
                element: ed.Z,
                predicate: () => !e5,
            },
            [eD.s6.TOWNHALL]: {
                section: eL.oAB.TOWNHALL,
                searchableTitles: [ek.intl.string(ek.t.dnZNER)],
                label: ek.intl.string(ek.t.dnZNER),
                predicate: () => e5,
                onClick: () => {
                    (0, p.Z)("https://discord.gg/discord-townhall"), (0, eT.default)();
                },
            },
            [eD.s6.EXPERIMENTS]: {
                section: eL.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: eA.Z,
                predicate: () => U.Z.isDeveloper,
                url: eL.Z5c.SETTINGS("experiments"),
            },
            [eD.s6.DEVELOPER_OPTIONS]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: el.Z,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eD.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eD.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eD.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eD.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eD.s6.DEVELOPER_OPTIONS,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eD.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eD.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eD.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eX && U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eD.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eX && U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eD.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eD.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eX && U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Toggleable Components"],
                parent: eD.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eX && U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eD.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eX && U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eD.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eX && U.Z.isDeveloper && G.default.layoutDebuggingEnabled,
            },
            [eD.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eX && U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eX && U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eD.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eD.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eD.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eD.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eD.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => m.q && U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eD.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eD.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eD.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eD.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eL.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.QUEST_PREVIEW_TOOL_2]: {
                section: eL.oAB.QUEST_PREVIEW_TOOL_2,
                searchableTitles: ["Quest Preview Tool 2"],
                label: "Quest Preview Tool 2",
                element: () => (0, r.jsx)(L.Z, { questId: null == b ? void 0 : b.quest_id }),
                predicate: () => (0, x.T)({ location: ej.dr.QUEST_PREVIEW_TOOL_2 }),
            },
            [eD.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM]: {
                section: f.ID.CUSTOM,
                searchableTitles: eS.Y,
                label: "Developer Education",
                element: eS.$,
                predicate: () => U.Z.isDeveloper,
            },
            [eD.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            eH(
                                eF(
                                    {
                                        header: ek.intl.string(ek.t["2jxGen"]),
                                        confirmText: ek.intl.string(ek.t["2jxGen"]),
                                        cancelText: ek.intl.string(ek.t["ETE/oK"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: ek.intl.string(ek.t.SUnWBA),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: ek.intl.string(ek.t["2jxGen"]),
                ariaLabel: ek.intl.string(ek.t["2jxGen"]),
                icon: (0, r.jsx)(s.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [eD.s6.SOCIAL_LINKS]: {
                section: f.ID.CUSTOM,
                element: Q.Z,
            },
            [eD.s6.CLIENT_DEBUG_INFO]: {
                section: f.ID.CUSTOM,
                element: z.Z,
            },
        });
    };
