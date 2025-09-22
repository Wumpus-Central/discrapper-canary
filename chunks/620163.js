n.d(t, {
    $Z: () => eJ,
    OF: () => e0,
    W8: () => e1,
    c$: () => e$,
    iE: () => e3,
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
    ek = n(333576),
    eU = n(345655),
    eG = n(726985),
    eB = n(583139),
    eZ = n(981631),
    eF = n(46140),
    eV = n(65154),
    eH = n(388032),
    eY = n(693450),
    eW = n(345909),
    eK = n(202323);
function ez(e, t, n) {
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
function eq(e) {
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
                ez(e, t, n[t]);
            });
    }
    return e;
}
function eX(e, t) {
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
function eQ(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eX(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eJ = () => {
        let e = [a.z.CLIENT_THEMES_SETTINGS_BADGE, a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
        return (
            b.Mc.getCurrentConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            h.n.getConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE),
            e
        );
    },
    e$ = () => {
        let e = eJ(),
            [t] = (0, S.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: eH.intl.string(eH.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ||
                t === a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE
              ? (0, r.jsx)(s.IGR, { text: eH.intl.string(eH.t.y2b7CA) })
              : null;
    },
    e0 = () => {
        let e = [];
        return (
            (0, U.h)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            A.J.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    e1 = () => {
        let e = e0(),
            [t] = (0, S.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: eH.intl.string(eH.t.y2b7CA) })
            : null;
    },
    e2 = eN.Z,
    e3 = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: h,
            searchParams: b,
            numOfPendingFamilyRequests: S,
            isOverlaySupported: A,
            isClipsBetaTagShowing: U = !1,
            shouldMergeGameSettings: ez,
            isKeywordFilteringEnabled: eX,
            isStaff: e3,
            isInappropriateConversationWarningEnabled: e4,
            isInapproprateConversationsDefaultOn: e8,
            paymentsBlocked: e5,
            isEligibleForQuests: e6,
            isStricterMessageRequestsEnabled: e7,
            hasLibraryApplication: e9,
            hasTOTPEnabled: te,
            developerMode: tt,
            isAdultUser: tn,
            hasSecureFramesVerifiedUserIds: tr,
            hypeSquadRemoved: ti,
            hasIgnoredUsers: ta,
            hasBlockedUsers: to,
            isEligibleForSensitiveContentDefaults: ts,
            inputMode: tl,
            activeInputProfile: tc,
            isInputProfileCustom: tu,
            isDataUsage3PToggleEnabled: td,
        } = e;
        return Object.freeze({
            [eG.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: ev.Z,
            },
            [eG.s6.ACCOUNT_SECURITY_TAB]: {
                section: eZ.oAB.ACCOUNT,
                searchableTitles: [eH.intl.string(eH.t.Am9YHh)],
                label: eH.intl.string(eH.t.Am9YHh),
            },
            [eG.s6.ACCOUNT]: {
                section: eZ.oAB.ACCOUNT,
                searchableTitles: [eH.intl.string(eH.t["JAIM/v"])],
                label: eH.intl.string(eH.t["JAIM/v"]),
                ariaLabel: eH.intl.string(eH.t["JAIM/v"]),
                element: en.Z,
                url: eZ.Z5c.SETTINGS("account"),
            },
            [eG.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eH.intl.string(eH.t.LYju5O)],
                parent: eG.s6.ACCOUNT,
                section: eZ.oAB.ACCOUNT,
            },
            [eG.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eH.intl.string(eH.t["9AjdkJ"])],
                section: eZ.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE,
            },
            [eG.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eH.intl.string(eH.t.Ulqq6O)],
                section: eZ.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE,
            },
            [eG.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    eH.intl.string(eH.t["/52UY2"]),
                    eH.intl.string(eH.t.sK0dmJ),
                    eH.intl.string(eH.t.XxRj7e),
                    eH.intl.string(eH.t.yNGjyM),
                    eH.intl.string(eH.t.KPGVWl),
                ],
                section: eZ.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE,
                predicate: () => ts,
            },
            [eG.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eH.intl.string(eH.t["+JkHPz"])],
                section: eZ.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE,
            },
            [eG.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eH.intl.string(eH.t.oP5zGB)],
                section: eZ.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PROFILE,
            },
            [eG.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eH.intl.string(eH.t.pKSjEh)],
                section: eZ.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT,
            },
            [eG.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eH.intl.string(eH.t["FRep5+"])],
                section: eZ.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eG.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eH.intl.string(eH.t["7qKDrK"])],
                section: eZ.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eH.intl.string(eH.t.m0FidH)],
                section: eZ.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eG.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eH.intl.string(eH.t.cDgKtb)],
                section: eZ.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !te,
            },
            [eG.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eH.intl.string(eH.t["D+aE7u"])],
                section: eZ.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => te,
            },
            [eG.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eH.intl.string(eH.t.fZSi1N)],
                section: eZ.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eG.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eH.intl.string(eH.t.uHAJ5u)],
                section: eZ.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eG.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eH.intl.string(eH.t.vrOCCg)],
                section: eZ.oAB.ACCOUNT,
                parent: eG.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eG.s6.ACCOUNT_REMOVAL]: {
                section: eZ.oAB.ACCOUNT,
                searchableTitles: [eH.intl.string(eH.t.ZKsIkp)],
                parent: eG.s6.ACCOUNT,
            },
            [eG.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eZ.oAB.ACCOUNT,
                searchableTitles: [eH.intl.string(eH.t.jf5GGR)],
                parent: eG.s6.ACCOUNT_REMOVAL,
            },
            [eG.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eZ.oAB.ACCOUNT,
                searchableTitles: [eH.intl.string(eH.t["8lQ2ra"])],
                parent: eG.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eG.s6.GAMES]: {
                section: eZ.oAB.GAMES,
                searchableTitles: [eH.intl.string(eH.t.URyqtL)],
                label: eH.intl.string(eH.t.URyqtL),
                ariaLabel: eH.intl.string(eH.t.URyqtL),
                element: ex.Z,
                predicate: () => ez,
            },
            [eG.s6.GAMES_MY_GAMES]: {
                section: eZ.oAB.GAMES,
                searchableTitles: [eH.intl.string(eH.t["5DMgp6"])],
                parent: eG.s6.GAMES,
            },
            [eG.s6.GAMES_CLIPS]: {
                section: eZ.oAB.GAMES,
                searchableTitles: [eH.intl.string(eH.t.z2jK6e)],
                parent: eG.s6.GAMES,
            },
            [eG.s6.GAMES_OVERLAY]: {
                section: eZ.oAB.GAMES,
                searchableTitles: [eH.intl.string(eH.t["9cb1U1"])],
                parent: eG.s6.GAMES,
            },
            [eG.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eZ.oAB.GAMES,
                searchableTitles: [eH.intl.string(eH.t.Cq98yM)],
                parent: eG.s6.GAMES,
            },
            [eG.s6.PROFILE_CUSTOMIZATION]: {
                section: eZ.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [eH.intl.string(eH.t["vi7f+v"])],
                label: eH.intl.string(eH.t["vi7f+v"]),
                ariaLabel: eH.intl.string(eH.t["vi7f+v"]),
                element: x.Z,
                newIndicator: (0, r.jsx)(e1, {}),
                newIndicatorDismissibleContentTypes: [...e0()],
                notice: {
                    stores: [V.Z, N.Z],
                    element: D.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, C.It)(), (0, u.P6)(), d.Z.clearSubsection(eZ.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eZ.Z5c.SETTINGS("profile-customization"),
            },
            [eG.s6.PROFILE_DISPLAY_NAME]: {
                section: eZ.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eH.intl.string(eH.t["9AjdkJ"])],
                parent: eG.s6.PROFILE_CUSTOMIZATION,
            },
            [eG.s6.PROFILE_USER_PROFILE]: {
                section: eZ.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eH.intl.string(eH.t["2p07FR"]), eH.intl.string(eH.t["7vhiqq"])],
                parent: eG.s6.PROFILE_CUSTOMIZATION,
            },
            [eG.s6.PROFILE_SERVER_PROFILES]: {
                section: eZ.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eH.intl.string(eH.t.kPHroa)],
                parent: eG.s6.PROFILE_CUSTOMIZATION,
            },
            [eG.s6.CONTENT_SOCIAL]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                label: eH.intl.string(eH.t["+o1pDQ"]),
                searchableTitles: [eH.intl.string(eH.t["+o1pDQ"])],
                ariaLabel: eH.intl.string(eH.t["+o1pDQ"]),
                element: ec.Z,
                url: eZ.Z5c.SETTINGS("content-and-social"),
            },
            [eG.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t["+o1pDQ"]), eH.intl.string(eH.t["/7xJCA"])],
                parent: eG.s6.CONTENT_SOCIAL,
            },
            [eG.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t["+o1pDQ"]), eH.intl.string(eH.t["/7xJCA"])],
                parent: eG.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eG.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t.YpCiMj)],
                parent: eG.s6.CONTENT_SOCIAL,
            },
            [eG.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                label: eH.intl.string(eH.t.YpCiMj),
                searchableTitles: [eH.intl.string(eH.t.YpCiMj)],
                ariaLabel: eH.intl.string(eH.t.YpCiMj),
                parent: eG.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eZ.Z5c.SETTINGS(eZ.oAB.CONTENT_AND_SOCIAL, eB.C),
            },
            [eG.s6.DATA_PRIVACY]: {
                section: eZ.oAB.DATA_AND_PRIVACY,
                label: eH.intl.string(eH.t.OAuOHB),
                searchableTitles: [eH.intl.string(eH.t.OAuOHB)],
                ariaLabel: eH.intl.string(eH.t.OAuOHB),
                element: eu.Z,
                url: eZ.Z5c.SETTINGS("data-and-privacy"),
            },
            [eG.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eZ.oAB.ACCOUNT,
                searchableTitles: [eH.intl.string(eH.t["Vov/9v"])],
                parent: eG.s6.ACCOUNT,
            },
            [eG.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eZ.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eH.intl.string(eH.t.WWaFn5)],
                parent: eG.s6.DATA_PRIVACY,
                predicate: () => (0, K.isDesktop)(),
            },
            [eG.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eZ.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eH.intl.string(eH.t["opi/XF"])],
                parent: eG.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t.xVRG4O)],
                parent: eG.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eG.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t.fyA119)],
                parent: eG.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eG.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t.fyA119)],
                parent: eG.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eG.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t["/U8Iwc"])],
                parent: eG.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eG.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t["ms+TmZ"])],
                parent: eG.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eG.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t["y62Z/f"])],
                parent: eG.s6.CONTENT_SOCIAL,
            },
            [eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eZ.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eH.intl.string(eH.t.SRZyHh)],
                parent: eG.s6.DATA_PRIVACY,
            },
            [eG.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eH.intl.string(eH.t.uEz8JC),
                    eH.intl.string(eH.t["N/oRIy"]),
                    eH.intl.string(eH.t.QVdYsL),
                    eH.intl.string(eH.t["aWD+tr"]),
                    eH.intl.string(eH.t["5mnTa2"]),
                ],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eG.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eH.intl.string(eH.t["Hj/Bur"]),
                    eH.intl.string(eH.t["N/oRIy"]),
                    eH.intl.string(eH.t.QVdYsL),
                    eH.intl.string(eH.t["aWD+tr"]),
                    eH.intl.string(eH.t["5mnTa2"]),
                    eH.intl.string(eH.t.K0OWPz),
                ],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eG.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eH.intl.string(eH.t["Hj/Bur"]),
                    eH.intl.string(eH.t["N/oRIy"]),
                    eH.intl.string(eH.t.QVdYsL),
                    eH.intl.string(eH.t["aWD+tr"]),
                    eH.intl.string(eH.t["5mnTa2"]),
                ],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eG.s6.GORE_MEDIA_REDACTION]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eH.intl.string(eH.t["Hj/Bur"]),
                    eH.intl.string(eH.t["N/oRIy"]),
                    eH.intl.string(eH.t.QVdYsL),
                    eH.intl.string(eH.t["aWD+tr"]),
                    eH.intl.string(eH.t.K0OWPz),
                ],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eG.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eH.intl.string(eH.t.JzaP4u),
                    eH.intl.string(eH.t.H9XOl5),
                    eH.intl.string(eH.t.k4W40N),
                ],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eG.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t["L+yTsb"])],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eG.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t.XahVjo)],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                parent: eG.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eG.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t.RAQUSE), eH.intl.string(eH.t.wbYDfX)],
                parent: eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eG.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t["3o2ojo"])],
                parent: eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !e7,
            },
            [eG.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t.OLwZDQ)],
                parent: eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eG.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t.wBkwu7)],
                parent: eG.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eG.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eZ.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eH.intl.string(eH.t.XuADY2)],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eG.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eZ.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eH.intl.string(eH.t.MNKzys)],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eG.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eZ.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eH.intl.string(eH.t.VkS7YW), eH.intl.string(eH.t.sJYh5u)],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eG.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eZ.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eH.intl.string(eH.t.CyLYKS)],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                predicate: () => td,
            },
            [eG.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eZ.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eG.CF],
                parent: eG.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eG.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eZ.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eH.intl.string(eH.t.dmBSKi)],
                parent: eG.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eG.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t["1UaUy8"]), eH.intl.string(eH.t["xIk/iI"])],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eX,
            },
            [eG.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eH.intl.string(eH.t.qFsx5u)],
                parent: eG.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e4 && !tn && !e8,
            },
            [eG.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eZ.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eH.intl.string(eH.t["5b3FND"])],
                parent: eG.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => tr,
            },
            [eG.s6.PRIVACY_FAMILY_CENTER]: {
                section: eZ.oAB.FAMILY_CENTER,
                searchableTitles: [eH.intl.string(eW.default.gntCQU)],
                label: eH.intl.string(eW.default.gntCQU),
                ariaLabel: eH.intl.string(eW.default.gntCQU),
                element: e_.Z,
                badgeCount: S,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eH.intl.string(eH.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eZ.Z5c.SETTINGS("family-center"),
            },
            [eG.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eZ.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eH.intl.string(eH.t.BG7Qsb)],
                parent: eG.s6.DATA_PRIVACY,
            },
            [eG.s6.AUTHORIZED_APPS]: {
                section: eZ.oAB.AUTHORIZED_APPS,
                searchableTitles: [eH.intl.string(eH.t["f6kk+v"])],
                label: eH.intl.string(eH.t["f6kk+v"]),
                element: eo.Z,
                url: eZ.Z5c.SETTINGS("authorized-apps"),
            },
            [eG.s6.SESSIONS]: {
                section: eZ.oAB.SESSIONS,
                searchableTitles: [eH.intl.string(eH.t["+1h0k5"])],
                label: eH.intl.string(eH.t["+1h0k5"]),
                ariaLabel: eH.intl.string(eH.t["+1h0k5"]),
                element: eI.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
            },
            [eG.s6.CONNECTIONS]: {
                section: eZ.oAB.CONNECTIONS,
                searchableTitles: [eH.intl.string(eH.t["3fe7U1"])],
                label: eH.intl.string(eH.t["3fe7U1"]),
                ariaLabel: eH.intl.string(eH.t["3fe7U1"]),
                element: el.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eZ.Z5c.SETTINGS("connections"),
            },
            [eG.s6.THIRD_PARTY_ACCESS]: {
                section: eZ.oAB.CONNECTIONS,
                searchableTitles: [
                    eH.intl.string(eH.t["Ig/XFR"]),
                    eH.intl.string(eH.t["3fe7U1"]),
                    eH.intl.string(eH.t["f6kk+v"]),
                ],
                label: eH.intl.string(eH.t["Ig/XFR"]),
                parent: eG.s6.CONNECTIONS,
                element: eC.Z,
            },
            [eG.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eZ.oAB.CONNECTIONS,
                searchableTitles: [eH.intl.string(eH.t["+/hZMz"])],
                parent: eG.s6.CONNECTIONS,
                element: el.Z,
            },
            [eG.s6.CLIPS]: {
                section: eZ.oAB.CLIPS,
                searchableTitles: [eH.intl.string(eH.t.z2jK6e)],
                label: eH.intl.string(eH.t.z2jK6e),
                ariaLabel: eH.intl.string(eH.t.z2jK6e),
                icon: U ? (0, r.jsx)(y.Z, {}) : void 0,
                element: O.Z,
                predicate: () => !ez,
                url: eZ.Z5c.SETTINGS("clips"),
            },
            [eG.s6.RESTRICTED_USERS]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                parent: eG.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eH.intl.string(eH.t["3wRorq"]),
                element: eL.ZP,
                predicate: () => ta || to,
            },
            [eG.s6.BLOCKED_USERS]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                parent: eG.s6.RESTRICTED_USERS,
                label: eH.intl.string(eH.t.PFOUKS),
                searchableTitles: [eH.intl.string(eH.t.PFOUKS)],
                element: eL.GF,
                predicate: () => to,
            },
            [eG.s6.IGNORED_USERS]: {
                section: eZ.oAB.CONTENT_AND_SOCIAL,
                parent: eG.s6.RESTRICTED_USERS,
                searchableTitles: [eH.intl.string(eH.t["93ZDWF"])],
                label: eH.intl.string(eH.t["93ZDWF"]),
                element: eL.yo,
                predicate: () => ta,
            },
            [eG.s6.PREMIUM]: {
                section: eZ.oAB.PREMIUM,
                ariaLabel: eH.intl.string(eH.t.Ipxkoq),
                searchableTitles: [eH.intl.string(eH.t.Ipxkoq)],
                label: eH.intl.string(eH.t.Ipxkoq),
                element: J.Z,
                className: eK.premiumTab,
            },
            [eG.s6.GUILD_BOOSTING]: {
                section: eZ.oAB.GUILD_BOOSTING,
                searchableTitles: [eH.intl.string(eH.t["+CbP2t"])],
                label: eH.intl.string(eH.t["+CbP2t"]),
                element: eO.Z,
            },
            [eG.s6.SUBSCRIPTIONS]: {
                section: eZ.oAB.SUBSCRIPTIONS,
                ariaLabel: eH.intl.string(eH.t.trSpHR),
                searchableTitles: [eH.intl.string(eH.t.trSpHR)],
                label: eH.intl.string(eH.t.trSpHR),
                element: w.Z,
                icon: h
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eG.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eZ.oAB.SUBSCRIPTIONS,
                searchableTitles: [eH.intl.string(eH.t["2GKrvr"])],
                parent: eG.s6.SUBSCRIPTIONS,
            },
            [eG.s6.GIFT_INVENTORY]: {
                section: eZ.oAB.INVENTORY,
                searchableTitles: [eH.intl.string(eH.t["jcSP+v"])],
                label: eH.intl.string(eH.t["jcSP+v"]),
                element: em.Z,
                ariaLabel: eH.intl.string(eH.t["jcSP+v"]),
                badgeCount: t,
            },
            [eG.s6.GIFT_CODE_REDEMPTION]: {
                section: eZ.oAB.INVENTORY,
                searchableTitles: [eH.intl.string(eH.t["il+VCg"])],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => !e5,
            },
            [eG.s6.GIFT_INVENTORY_QUESTS]: {
                section: eZ.oAB.INVENTORY,
                searchableTitles: [eH.intl.string(eH.t.JALI2N)],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => e6,
            },
            [eG.s6.GIFT_INVENTORY_LIST]: {
                section: eZ.oAB.INVENTORY,
                searchableTitles: [eH.intl.string(eH.t["9KeUbW"])],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => !e5,
            },
            [eG.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eZ.oAB.INVENTORY,
                searchableTitles: [eH.intl.string(eH.t.vwMEHR)],
                parent: eG.s6.GIFT_INVENTORY,
                predicate: () => e5,
            },
            [eG.s6.BILLING]: {
                section: eZ.oAB.BILLING,
                searchableTitles: [eH.intl.string(eH.t.oeUm2t)],
                label: eH.intl.string(eH.t.oeUm2t),
                ariaLabel: eH.intl.string(eH.t.oeUm2t),
                element: es.Z,
            },
            [eG.s6.BILLING_PAYMENT_METHODS]: {
                section: eZ.oAB.BILLING,
                searchableTitles: [eH.intl.string(eH.t.W26xGR)],
                parent: eG.s6.BILLING,
            },
            [eG.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eZ.oAB.BILLING,
                searchableTitles: [eH.intl.string(eH.t.obLrcH)],
                parent: eG.s6.BILLING,
            },
            [eG.s6.APPEARANCE]: {
                section: eZ.oAB.APPEARANCE,
                searchableTitles: [eH.intl.string(eH.t["iHH+k5"])],
                label: eH.intl.string(eH.t["iHH+k5"]),
                ariaLabel: eH.intl.string(eH.t["iHH+k5"]),
                element: ea.Z,
                newIndicator: (0, r.jsx)(e$, {}),
                newIndicatorDismissibleContentTypes: eJ(),
                url: eZ.Z5c.SETTINGS("appearance"),
            },
            [eG.s6.APPEARANCE_THEME]: {
                section: eZ.oAB.APPEARANCE,
                searchableTitles: [eH.intl.string(eH.t.Ksh3io)],
                parent: eG.s6.APPEARANCE,
            },
            [eG.s6.APPEARANCE_COLOR]: {
                section: eZ.oAB.APPEARANCE,
                searchableTitles: [eH.intl.string(eH.t.OCOOiI)],
                parent: eG.s6.APPEARANCE_THEME,
            },
            [eG.s6.APPEARANCE_ICON]: {
                section: eZ.oAB.APPEARANCE,
                searchableTitles: [eH.intl.string(eH.t.RPh2oq)],
                parent: eG.s6.APPEARANCE_THEME,
            },
            [eG.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eZ.oAB.APPEARANCE,
                searchableTitles: [eH.intl.string(eH.t.ZEoGMT)],
                parent: eG.s6.APPEARANCE,
            },
            [eG.s6.APPEARANCE_LIST_SPACING]: {
                section: eZ.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eG.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eH.intl.string(eH.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
            },
            [eG.s6.APPEARANCE_SCALING_SPACING]: {
                section: eZ.oAB.APPEARANCE,
                searchableTitles: [eH.intl.string(eH.t.qPOqoK)],
                parent: eG.s6.APPEARANCE,
            },
            [eG.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eZ.oAB.APPEARANCE,
                searchableTitles: [
                    eH.intl.string(eH.t.dyamEB),
                    eH.intl.string(eH.t.p8NOws),
                    eH.intl.string(eH.t["+o/sOj"]),
                ],
                parent: eG.s6.APPEARANCE,
                predicate: () =>
                    k.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eG.s6.ACCESSIBILITY]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.G0neg4)],
                label: eH.intl.string(eH.t.G0neg4),
                ariaLabel: eH.intl.string(eH.t.G0neg4),
                element: et.Z,
                url: eZ.Z5c.SETTINGS("accessibility"),
            },
            [eG.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.aZlePj)],
                parent: eG.s6.ACCESSIBILITY,
            },
            [eG.s6.ACCESSIBILITY_SATURATION]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t["5PWWCQ"])],
                parent: eG.s6.ACCESSIBILITY,
            },
            [eG.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.bQCodH)],
                parent: eG.s6.ACCESSIBILITY_SATURATION,
            },
            [eG.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.OLZFBw)],
                parent: eG.s6.ACCESSIBILITY,
            },
            [eG.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t["+IsihY"])],
                parent: eG.s6.ACCESSIBILITY,
                predicate: () => (0, v.l)("SettingsRendererConfig"),
            },
            [eG.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.uSOPWl)],
                parent: eG.s6.ACCESSIBILITY,
            },
            [eG.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eY.default["2gFUEx"])],
                parent: eG.s6.ACCESSIBILITY,
            },
            [eG.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.BT8Bmp)],
                parent: eG.s6.ACCESSIBILITY,
            },
            [eG.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t["sSY+mJ"])],
                parent: eG.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eG.s6.ACCESSIBILITY_CONTRAST]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.TYyfOz)],
                parent: eG.s6.ACCESSIBILITY,
            },
            [eG.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.cguieX)],
                parent: eG.s6.ACCESSIBILITY_CONTRAST,
            },
            [eG.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.e3TR1d)],
                parent: eG.s6.ACCESSIBILITY,
            },
            [eG.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.b3XBzs)],
                parent: eG.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eG.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.Iayoh4)],
                parent: eG.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eG.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.iIaOlZ)],
                parent: eG.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eG.s6.ACCESSIBILITY_STICKERS]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t["6NtAuL"])],
                parent: eG.s6.ACCESSIBILITY,
            },
            [eG.s6.ACCESSIBILITY_MESSAGES]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.onqU6u)],
                parent: eG.s6.ACCESSIBILITY,
            },
            [eG.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t["3Fztn5"])],
                parent: eG.s6.ACCESSIBILITY_MESSAGES,
            },
            [eG.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.TZ2hZG)],
                parent: eG.s6.ACCESSIBILITY_MESSAGES,
            },
            [eG.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.VpSKeH)],
                parent: eG.s6.ACCESSIBILITY,
            },
            [eG.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.qvTIwc)],
                parent: eG.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eG.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eH.intl.string(eH.t.lsW5Eh)],
                parent: eG.s6.ACCESSIBILITY,
            },
            [eG.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eZ.oAB.ACCESSIBILITY,
                searchableTitles: [eG.CF],
                parent: eG.s6.ACCESSIBILITY,
            },
            [eG.s6.VOICE_AND_VIDEO]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.B1fFpa)],
                label: eH.intl.string(eH.t.B1fFpa),
                ariaLabel: eH.intl.string(eH.t.B1fFpa),
                element: ej.Z,
                predicate: () => F.Z.isSupported(),
                url: eZ.Z5c.SETTINGS("voice"),
            },
            [eG.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.K3lovL), eH.intl.string(eH.t.NiTd0d)],
                parent: eG.s6.VOICE_AND_VIDEO,
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.FlNoSU)],
                parent: eG.s6.VOICE_AND_VIDEO,
            },
            [eG.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.ABjMWF)],
                parent: eG.s6.VOICE_AND_VIDEO,
            },
            [eG.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.OFpL3d)],
                parent: eG.s6.VOICE_AND_VIDEO,
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.KDdjoq), eH.intl.string(eH.t.FeUKeH)],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eG.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.K3lovL), eH.intl.string(eH.t.NiTd0d)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eG.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [
                    eH.intl.string(eH.t.hHMYbW),
                    eH.intl.string(eH.t.dl18zc),
                    eH.intl.string(eH.t.nuFtHB),
                    eH.intl.string(eH.t["3182VF"]),
                    eH.intl.string(eH.t["DGq/PT"]),
                ],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eG.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [
                    eH.intl.string(eH.t.OX2Bnp),
                    eH.intl.string(eH.t.eATD2N),
                    eH.intl.string(eH.t.nuFtHB),
                    eH.intl.string(eH.t["3182VF"]),
                    eH.intl.string(eH.t["DGq/PT"]),
                ],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eG.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.gyljWF), eH.intl.string(eH.t.nuFtHB)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eG.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [
                    eH.intl.string(eH.t.LM3U3t),
                    eH.intl.string(eH.t.nuFtHB),
                    eH.intl.string(eH.t.VZPR0d),
                    eH.intl.string(eH.t.cjPbpa),
                ],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, Q.R)({
                        location: "SettingsRendererConfig",
                        autoTrackExposure: !1,
                    });
                    return e.length > 0;
                },
            },
            [eG.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t["pS+K2N"]), eH.intl.string(eH.t.nuFtHB)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tc !== eU._.STUDIO,
            },
            [eG.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t["sqUm+v"]), eH.intl.string(eH.t.nuFtHB)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tl === eV.pM.VOICE_ACTIVITY && tu,
            },
            [eG.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.e7LIiY)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eG.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.nzUc3N)],
                parent: eG.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eG.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.ABjMWF)],
                parent: eG.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eG.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.nzUc3N)],
                parent: eG.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.LKzQSE)],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.F122Gx)],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => F.Z.supports(eV.AN.VIDEO),
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t["3Ppr1t"])],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.lZTUPj)],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => F.Z.supports(eV.AN.VIDEO),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t["8/udY2"])],
                parent: eG.s6.VOICE_AND_VIDEO,
            },
            [eG.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t["8/udY2"])],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => !(0, K.isWeb)(),
            },
            [eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t["8/udY2"])],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.Tceiq6)],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED,
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t["71Ve19"])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => F.Z.supports(eV.AN.OPEN_H264),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.Sln58f)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.AxnPm5)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => "stable" !== z.ZP.releaseChannel && F.Z.isExperimentalEncodersSupported(),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t["6I6GUl"])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => tu,
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.iWTwu7)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t["/jwMtr"])],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eG.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.OBwCXF)],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.t8QhiY), eH.intl.string(eH.t.hmfkCg)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => F.Z.isNoiseSuppressionSupported(),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.BbESsr)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => F.Z.isAdvancedVoiceActivitySupported(),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.cUMdHx)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => F.Z.isAutomaticGainControlSupported(),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.DFPXIC)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => F.Z.showBypassSystemInputProcessing(),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.uancuL)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => F.Z.supports(eV.AN.QOS),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.oSdBvb)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => F.Z.supports(eV.AN.ATTENUATION),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.wVBHr6)],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => F.Z.shouldOfferManualSubsystemSelection(),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [
                    eH.intl.string(eH.t.KDdjoq),
                    eH.intl.string(eH.t.NMCIf3),
                    eH.intl.string(eH.t.FeUKeH),
                ],
                parent: eG.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    F.Z.supportsVideoHook() ||
                    F.Z.supportsExperimentalSoundshare() ||
                    (F.Z.supportsSystemScreensharePicker() && (0, K.isMac)()),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.GmWk2N), eH.intl.string(eH.t["Fj/xn5"])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => F.Z.supportsVideoHook(),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t["4I0qzc"])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => F.Z.supportsExperimentalSoundshare() && F.Z.supportsHookSoundshare(),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.ie1mgY)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => F.Z.supportsSystemScreensharePicker() && (0, K.isMac)(),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t["aP1N/v"])],
                parent: eG.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => K.isPlatformEmbedded,
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.OFpL3d)],
                parent: eG.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t["0CEP6e"])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => q.Sb.getSetting(),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t["r6K+TE"])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => F.Z.isAecDumpSupported(),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t.U4FgFB)],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === z.ZP.releaseChannel || "development" === z.ZP.releaseChannel) &&
                    e3 &&
                    F.Z.supports(eV.AN.CONNECTION_REPLAY),
            },
            [eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t["726JHB"])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    K.isPlatformEmbedded && F.Z.supports(eV.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [eG.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eZ.oAB.VOICE,
                searchableTitles: [eH.intl.string(eH.t["/RXu6+"])],
                parent: eG.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eG.s6.POGGERMODE]: {
                section: eZ.oAB.POGGERMODE,
                searchableTitles: [eH.intl.string(eH.t.AtCukJ)],
                label: eH.intl.string(eH.t.AtCukJ),
                ariaLabel: eH.intl.string(eH.t.AtCukJ),
                element: P.Z,
                predicate: () => R.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: eK.poggermodeIcon,
                }),
            },
            [eG.s6.CHAT]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t["/VQax8"])],
                label: eH.intl.string(eH.t["/VQax8"]),
                ariaLabel: eH.intl.string(eH.t["/VQax8"]),
                element: eS.Z,
                url: eZ.Z5c.SETTINGS("text"),
            },
            [eG.s6.CHAT_INLINE_MEDIA]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t.U68Dgo)],
                parent: eG.s6.CHAT,
            },
            [eG.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t.U47N1t)],
                parent: eG.s6.CHAT_INLINE_MEDIA,
            },
            [eG.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t.VP11Nj)],
                parent: eG.s6.CHAT_INLINE_MEDIA,
            },
            [eG.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t["5S2AKy"])],
                parent: eG.s6.CHAT_INLINE_MEDIA,
            },
            [eG.s6.CHAT_EMBEDS]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t.PWZOn5)],
                parent: eG.s6.CHAT,
            },
            [eG.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t.xX0ZTE)],
                parent: eG.s6.CHAT_EMBEDS,
            },
            [eG.s6.CHAT_EMOJI]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t.sMOuub)],
                parent: eG.s6.CHAT,
            },
            [eG.s6.CHAT_EMOJI_REACTIONS]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t.Iv24sr)],
                parent: eG.s6.CHAT_EMOJI,
            },
            [eG.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t["79qal5"])],
                parent: eG.s6.CHAT_EMOJI,
            },
            [eG.s6.CHAT_STICKERS]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t["6NtAuL"])],
                parent: eG.s6.CHAT,
            },
            [eG.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t["29xPVV"])],
                parent: eG.s6.CHAT_STICKERS,
            },
            [eG.s6.CHAT_SOUNDMOJI]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t.EHlAMT)],
                parent: eG.s6.CHAT,
            },
            [eG.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t["CtYr+f"])],
                parent: eG.s6.CHAT_SOUNDMOJI,
            },
            [eG.s6.CHAT_TEXT_BOX]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t.afR0pK)],
                parent: eG.s6.CHAT,
            },
            [eG.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t.AqGrEB)],
                parent: eG.s6.CHAT_TEXT_BOX,
            },
            [eG.s6.CHAT_THREADS]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t.B2panJ)],
                parent: eG.s6.CHAT,
            },
            [eG.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t.AInv5u)],
                parent: eG.s6.CHAT_THREADS,
            },
            [eG.s6.CHAT_SPOILERS]: {
                section: eZ.oAB.TEXT,
                searchableTitles: [eH.intl.string(eH.t.QgwmV1)],
                parent: eG.s6.CHAT,
            },
            [eG.s6.NOTIFICATIONS]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.HcoRu7)],
                label: eH.intl.string(eH.t.HcoRu7),
                ariaLabel: eH.intl.string(eH.t.HcoRu7),
                element: eb.Z,
                url: eZ.Z5c.SETTINGS("notifications"),
            },
            [eG.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t["/0WClp"])],
                parent: eG.s6.NOTIFICATIONS,
            },
            [eG.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eG.s6.NOTIFICATIONS,
            },
            [eG.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.VH8AIC)],
                parent: eG.s6.NOTIFICATIONS,
            },
            [eG.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.xSmFQE)],
                parent: eG.s6.NOTIFICATIONS,
                predicate: () => (0, K.isWindows)(),
            },
            [eG.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.z21l8P)],
                parent: eG.s6.NOTIFICATIONS,
            },
            [eG.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: ["New Notification Settings (Advanced, Staff Only)"],
                parent: eG.s6.NOTIFICATIONS,
                predicate: () => !1,
            },
            [eG.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: ["Restore most recent snapshot"],
                parent: eG.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eG.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: ["Launch Migration"],
                parent: eG.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eG.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: ["Toggle new system on/off"],
                parent: eG.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eG.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.TTvjd3)],
                parent: eG.s6.NOTIFICATIONS,
            },
            [eG.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.VpSKeH)],
                parent: eG.s6.NOTIFICATIONS,
            },
            [eG.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.D9yVAA)],
                parent: eG.s6.NOTIFICATIONS,
            },
            [eG.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.u6dc5O)],
                parent: eG.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eG.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.P8MG6u)],
                parent: eG.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eG.s6.NOTIFICATIONS_SOUNDS]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.MKWyKS)],
                parent: eG.s6.NOTIFICATIONS,
            },
            [eG.s6.NOTIFICATIONS_EMAILS]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.TPchzM)],
                parent: eG.s6.NOTIFICATIONS,
            },
            [eG.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t["B75+xc"])],
                parent: eG.s6.NOTIFICATIONS_EMAILS,
            },
            [eG.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.sxn7lZ)],
                parent: eG.s6.NOTIFICATIONS_EMAILS,
            },
            [eG.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.EkxXhY)],
                parent: eG.s6.NOTIFICATIONS_EMAILS,
            },
            [eG.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.jNrkrK)],
                parent: eG.s6.NOTIFICATIONS_EMAILS,
            },
            [eG.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.E8g1l5)],
                parent: eG.s6.NOTIFICATIONS_EMAILS,
            },
            [eG.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.Ra9Pws)],
                parent: eG.s6.NOTIFICATIONS_EMAILS,
            },
            [eG.s6.NOTIFICATIONS_REACTIONS]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.Rq0NFh)],
                parent: eG.s6.NOTIFICATIONS,
            },
            [eG.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.wtk08f)],
                parent: eG.s6.NOTIFICATIONS,
                predicate: () => (0, G.JN)("SettingsRendererConfig"),
            },
            [eG.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eZ.oAB.NOTIFICATIONS,
                searchableTitles: [eH.intl.string(eH.t.pW4TMj)],
                parent: eG.s6.NOTIFICATIONS,
            },
            [eG.s6.KEYBINDS]: {
                section: eZ.oAB.KEYBINDS,
                searchableTitles: [eH.intl.string(eH.t.T9DA2N)],
                label: eH.intl.string(eH.t.T9DA2N),
                element: eg.Z,
                url: eZ.Z5c.SETTINGS("keybinds"),
            },
            [eG.s6.LANGUAGE]: {
                section: eZ.oAB.LOCALE,
                searchableTitles: [eH.intl.string(eH.t.IHMsPj)],
                label: eH.intl.string(eH.t.IHMsPj),
                element: eE.Z,
                url: eZ.Z5c.SETTINGS("language"),
            },
            [eG.s6.WINDOW_SETTINGS]: {
                section: eZ.oAB.WINDOWS,
                searchableTitles: [eH.intl.string(eH.t.ZkDZoq)],
                label: eH.intl.string(eH.t.ZkDZoq),
                element: eN.Z,
                predicate: () => K.isPlatformEmbedded && (0, K.isWindows)(),
            },
            [eG.s6.LINUX_SETTINGS]: {
                section: eZ.oAB.LINUX,
                searchableTitles: [eH.intl.string(eH.t["7pPjTU"])],
                label: eH.intl.string(eH.t["7pPjTU"]),
                element: e2,
                predicate: () => K.isPlatformEmbedded && (0, K.isLinux)(),
            },
            [eG.s6.STREAMER_MODE]: {
                section: eZ.oAB.STREAMER_MODE,
                searchableTitles: [eH.intl.string(eH.t.S5GfOT)],
                label: eH.intl.string(eH.t.S5GfOT),
                ariaLabel: eH.intl.string(eH.t.S5GfOT),
                element: eT.Z,
                url: eZ.Z5c.SETTINGS("streamer-mode"),
            },
            [eG.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eZ.oAB.STREAMER_MODE,
                searchableTitles: [eH.intl.string(eH.t.bxGbHB)],
                parent: eG.s6.STREAMER_MODE,
            },
            [eG.s6.STREAMER_MODE_ENABLE]: {
                section: eZ.oAB.STREAMER_MODE,
                searchableTitles: [eH.intl.string(eH.t.p9ZAJS)],
                parent: eG.s6.STREAMER_MODE,
            },
            [eG.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eZ.oAB.STREAMER_MODE,
                searchableTitles: [eH.intl.string(eH.t.UpQziI)],
                parent: eG.s6.STREAMER_MODE,
            },
            [eG.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eZ.oAB.STREAMER_MODE,
                searchableTitles: [eH.intl.string(eH.t.q7WNGh)],
                parent: eG.s6.STREAMER_MODE,
            },
            [eG.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eZ.oAB.STREAMER_MODE,
                searchableTitles: [eH.intl.string(eH.t["1CWknJ"])],
                parent: eG.s6.STREAMER_MODE,
            },
            [eG.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eZ.oAB.STREAMER_MODE,
                searchableTitles: [eH.intl.string(eH.t.qmYiYW)],
                parent: eG.s6.STREAMER_MODE,
            },
            [eG.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eZ.oAB.STREAMER_MODE,
                searchableTitles: [eH.intl.string(eH.t["iA81+f"])],
                parent: eG.s6.STREAMER_MODE,
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
            [eG.s6.SETTINGS_ADVANCED]: {
                section: eZ.oAB.ADVANCED,
                searchableTitles: [eH.intl.string(eH.t["8/udY2"])],
                label: eH.intl.string(eH.t["8/udY2"]),
                ariaLabel: eH.intl.string(eH.t["8/udY2"]),
                element: ei.ZP,
            },
            [eG.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eZ.oAB.ADVANCED,
                searchableTitles: [eH.intl.string(eH.t.ObIb1d)],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => Y.wS,
            },
            [eG.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eZ.oAB.ADVANCED,
                searchableTitles: [eH.intl.string(eH.t["eOC/Fx"])],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => K.isPlatformEmbedded,
            },
            [eG.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eZ.oAB.ADVANCED,
                searchableTitles: [eH.intl.string(eH.t.fi3UQE)],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => e9,
            },
            [eG.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eZ.oAB.ADVANCED,
                searchableTitles: [eH.intl.string(eH.t.erOqlp)],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () => tt,
            },
            [eG.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eZ.oAB.ADVANCED,
                searchableTitles: [eH.intl.string(eH.t.qDZryM)],
                parent: eG.s6.SETTINGS_ADVANCED,
            },
            [eG.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eZ.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: eG.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    g.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [eG.s6.ACTIVITY_PRIVACY]: {
                section: eZ.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eH.intl.string(eH.t.Cq98yM)],
                label: eH.intl.string(eH.t.Cq98yM),
                ariaLabel: eH.intl.string(eH.t.Cq98yM),
                element: er.Z,
                predicate: () => !ez,
                url: eZ.Z5c.SETTINGS("activity-privacy"),
            },
            [eG.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: ez ? eZ.oAB.GAMES : eZ.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eH.intl.string(eH.t["8ka8lp"])],
                parent: ez ? eG.s6.GAMES_ACTIVITY_PRIVACY : eG.s6.ACTIVITY_PRIVACY,
            },
            [eG.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: ez ? eZ.oAB.GAMES : eZ.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eH.intl.string(eH.t.VOszPD)],
                parent: ez ? eG.s6.GAMES_ACTIVITY_PRIVACY : eG.s6.ACTIVITY_PRIVACY,
            },
            [eG.s6.ACTIVITY_PRIVACY_TOS]: {
                section: ez ? eZ.oAB.GAMES : eZ.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eG.CF],
                parent: ez ? eG.s6.GAMES_ACTIVITY_PRIVACY : eG.s6.ACTIVITY_PRIVACY,
            },
            [eG.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eZ.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eH.intl.string(eH.t["4F2KoK"])],
                parent: eG.s6.ACTIVITY_PRIVACY,
            },
            [eG.s6.REGISTERED_GAMES]: {
                section: eZ.oAB.REGISTERED_GAMES,
                searchableTitles: [eH.intl.string(eH.t.AVDyEh)],
                label: eH.intl.string(eH.t.AVDyEh),
                element: ep.Z,
                predicate: () => !ez && (0, eD.Jw)(),
            },
            [eG.s6.OVERLAY]: {
                section: eZ.oAB.OVERLAY,
                searchableTitles: [eH.intl.string(eH.t["9cb1U1"]), eH.intl.string(eH.t.HcoRu7)],
                label: eH.intl.string(eH.t["9cb1U1"]),
                element: ey.Z,
                predicate: () => !ez && A,
            },
            [eG.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, E.Z)(!0),
                searchableTitles: [eH.intl.string(eH.t.LRmNAg)],
                label: eH.intl.string(eH.t.LRmNAg),
            },
            [eG.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    H.default.track(eZ.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, W.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                H.default.track(eZ.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, p.Z)(e);
                            },
                        });
                },
                searchableTitles: [eH.intl.string(eH.t.sMEktb)],
                label: eH.intl.string(eH.t.sMEktb),
                ariaLabel: eH.intl.string(eH.t.sMEktb),
            },
            [eG.s6.HYPESQUAD]: {
                section: eZ.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eH.intl.string(eH.t["k0R+4e"])],
                label: eH.intl.string(eH.t["k0R+4e"]),
                element: eh.Z,
                predicate: () => !ti,
            },
            [eG.s6.TOWNHALL]: {
                section: eZ.oAB.TOWNHALL,
                searchableTitles: [eH.intl.string(eH.t.dnZNER)],
                label: eH.intl.string(eH.t.dnZNER),
                predicate: () => ti,
                onClick: () => {
                    (0, p.Z)("https://discord.gg/discord-townhall"), (0, eR.default)();
                },
            },
            [eG.s6.EXPERIMENTS]: {
                section: eZ.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: ew.Z,
                predicate: () => B.Z.isDeveloper,
                url: eZ.Z5c.SETTINGS("experiments"),
            },
            [eG.s6.DEVELOPER_OPTIONS]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: ef.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eG.s6.DEVELOPER_OPTIONS,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eG.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eG.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eG.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e3 && B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eG.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e3 && B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eG.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eG.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e3 && B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Toggleable Components"],
                parent: eG.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e3 && B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eG.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e3 && B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eG.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e3 && B.Z.isDeveloper && Z.default.layoutDebuggingEnabled,
            },
            [eG.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e3 && B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e3 && B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eG.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eG.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eG.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eG.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => m.q && B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eG.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eG.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eG.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eG.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eZ.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eG.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.REVENUE_STORYBOOK]: {
                section: eZ.oAB.REVENUE_STORYBOOK_PAGE,
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
            [eG.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eZ.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ["Virtual Currency", "Orb", "Config"],
                label: "Virtual Currency Config",
                element: ek.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.PAYMENT_COMPONENTS]: {
                section: eZ.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Payment Components"],
                label: "Payment Components",
                element: eM.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.ORB_COMPONENTS]: {
                section: eZ.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Orb Components"],
                label: "Orb Components",
                element: eM.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.NITRO_COMPONENTS]: {
                section: eZ.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Nitro Components"],
                label: "Nitro Components",
                element: eM.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.TEXT_PLAYGROUND]: {
                section: eZ.oAB.TEXT_PLAYGROUND,
                searchableTitles: ["Text Playground"],
                label: "Text Playground",
                element: eA.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DESIGN_SYSTEMS]: {
                section: eZ.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Design Systems"],
                label: "Design Systems",
                element: ed.Z,
                predicate: () => B.Z.isDeveloper,
                url: eZ.Z5c.SETTINGS("design-systems"),
            },
            [eG.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eZ.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Colors"],
                label: "Colors",
                element: ed.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.ANIMATION_TESTING]: {
                section: eZ.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Animation Testing"],
                label: "Animation Testing",
                element: ed.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eZ.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Components"],
                label: "Components",
                element: ed.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.TEXT_COMPONENTS]: {
                section: eZ.oAB.TEXT_COMPONENT,
                searchableTitles: ["Text Components"],
                label: "Text Components",
                element: ee.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.SHOP_KEEPER]: {
                section: eZ.oAB.SHOP_KEEPER,
                searchableTitles: ["Shop Keeper"],
                label: "Shop Keeper",
                element: I.Z,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.QUEST_PREVIEW_TOOL]: {
                section: eZ.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ["Quest Preview Tool"],
                label: "Quest Preview Tool",
                element: j.Z,
                predicate: () => (0, L.X)({ location: eF.dr.QUEST_PREVIEW_TOOL }),
            },
            [eG.s6.QUEST_PREVIEW_TOOL_2]: {
                section: eZ.oAB.QUEST_PREVIEW_TOOL_2,
                searchableTitles: ["Quest Preview Tool 2"],
                label: "Quest Preview Tool 2",
                element: () => (0, r.jsx)(M.Z, { questId: null == b ? void 0 : b.quest_id }),
                predicate: () => (0, L.T)({ location: eF.dr.QUEST_PREVIEW_TOOL_2 }),
            },
            [eG.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM]: {
                section: f.ID.CUSTOM,
                searchableTitles: eP.Y,
                label: "Developer Education",
                element: eP.$,
                predicate: () => B.Z.isDeveloper,
            },
            [eG.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            eQ(
                                eq(
                                    {
                                        header: eH.intl.string(eH.t["2jxGen"]),
                                        confirmText: eH.intl.string(eH.t["2jxGen"]),
                                        cancelText: eH.intl.string(eH.t["ETE/oK"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: eH.intl.string(eH.t.SUnWBA),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: eH.intl.string(eH.t["2jxGen"]),
                ariaLabel: eH.intl.string(eH.t["2jxGen"]),
                icon: (0, r.jsx)(s.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [eG.s6.SOCIAL_LINKS]: {
                section: f.ID.CUSTOM,
                element: $.Z,
            },
            [eG.s6.CLIENT_DEBUG_INFO]: {
                section: f.ID.CUSTOM,
                element: X.Z,
            },
        });
    };
