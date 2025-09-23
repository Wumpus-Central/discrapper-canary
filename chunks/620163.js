n.d(t, {
    $Z: () => eq,
    OF: () => eQ,
    W8: () => eJ,
    c$: () => eX,
    iE: () => e0,
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
    j = n(877109),
    M = n(145158),
    k = n(172416),
    U = n(462354),
    G = n(906467),
    B = n(857192),
    Z = n(131951),
    F = n(25990),
    V = n(626135),
    H = n(572004),
    Y = n(49012),
    W = n(358085),
    K = n(998502),
    z = n(695346),
    q = n(604227),
    X = n(321614),
    Q = n(748717),
    J = n(419636),
    $ = n(799071),
    ee = n(154022),
    et = n(736752),
    en = n(309739),
    er = n(64914),
    ei = n(501348),
    ea = n(795594),
    eo = n(443702),
    es = n(327192),
    el = n(949493),
    ec = n(675047),
    eu = n(177508),
    ed = n(956699),
    ef = n(54942),
    e_ = n(293389),
    ep = n(88624),
    eh = n(387747),
    em = n(389650),
    eg = n(649157),
    eE = n(593648),
    eb = n(327885),
    ey = n(595242),
    eO = n(463153),
    ev = n(36192),
    eI = n(889029),
    eT = n(400287),
    eS = n(554042),
    eA = n(936982),
    eC = n(200645),
    eN = n(342386),
    eR = n(924983),
    eP = n(287490),
    ew = n(168308),
    eD = n(277329),
    ex = n(273927),
    eL = n(604224),
    ej = n(345655),
    eM = n(726985),
    ek = n(583139),
    eU = n(981631),
    eG = n(46140),
    eB = n(65154),
    eZ = n(388032),
    eF = n(693450),
    eV = n(345909),
    eH = n(202323);
function eY(e, t, n) {
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
function eW(e) {
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
                eY(e, t, n[t]);
            });
    }
    return e;
}
function eK(e, t) {
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
function ez(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eK(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eq = () => {
        let e = [a.z.CLIENT_THEMES_SETTINGS_BADGE, a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
        return (
            b.Mc.getCurrentConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            h.n.getConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE),
            e
        );
    },
    eX = () => {
        let e = eq(),
            [t] = (0, S.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: eZ.intl.string(eZ.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ||
                t === a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE
              ? (0, r.jsx)(s.IGR, { text: eZ.intl.string(eZ.t.y2b7CA) })
              : null;
    },
    eQ = () => {
        let e = [];
        return (
            (0, k.h)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            A.JH.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    eJ = () => {
        let e = eQ(),
            [t] = (0, S.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: eZ.intl.string(eZ.t.y2b7CA) })
            : null;
    },
    e$ = eC.Z,
    e0 = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: h,
            searchParams: b,
            numOfPendingFamilyRequests: S,
            isOverlaySupported: A,
            isClipsBetaTagShowing: k = !1,
            shouldMergeGameSettings: eY,
            isKeywordFilteringEnabled: eK,
            isStaff: e0,
            isInappropriateConversationWarningEnabled: e1,
            isInapproprateConversationsDefaultOn: e2,
            paymentsBlocked: e3,
            isEligibleForQuests: e4,
            isStricterMessageRequestsEnabled: e8,
            hasLibraryApplication: e5,
            hasTOTPEnabled: e6,
            developerMode: e7,
            isAdultUser: e9,
            hasSecureFramesVerifiedUserIds: te,
            hypeSquadRemoved: tt,
            hasIgnoredUsers: tn,
            hasBlockedUsers: tr,
            isEligibleForSensitiveContentDefaults: ti,
            inputMode: ta,
            activeInputProfile: to,
            isInputProfileCustom: ts,
            isDataUsage3PToggleEnabled: tl,
        } = e;
        return Object.freeze({
            [eM.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: eO.Z,
            },
            [eM.s6.ACCOUNT_SECURITY_TAB]: {
                section: eU.oAB.ACCOUNT,
                searchableTitles: [eZ.intl.string(eZ.t.Am9YHh)],
                label: eZ.intl.string(eZ.t.Am9YHh),
            },
            [eM.s6.ACCOUNT]: {
                section: eU.oAB.ACCOUNT,
                searchableTitles: [eZ.intl.string(eZ.t["JAIM/v"])],
                label: eZ.intl.string(eZ.t["JAIM/v"]),
                ariaLabel: eZ.intl.string(eZ.t["JAIM/v"]),
                element: et.Z,
                url: eU.Z5c.SETTINGS("account"),
            },
            [eM.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eZ.intl.string(eZ.t.LYju5O)],
                parent: eM.s6.ACCOUNT,
                section: eU.oAB.ACCOUNT,
            },
            [eM.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eZ.intl.string(eZ.t["9AjdkJ"])],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE,
            },
            [eM.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eZ.intl.string(eZ.t.Ulqq6O)],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE,
            },
            [eM.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    eZ.intl.string(eZ.t["/52UY2"]),
                    eZ.intl.string(eZ.t.sK0dmJ),
                    eZ.intl.string(eZ.t.XxRj7e),
                    eZ.intl.string(eZ.t.yNGjyM),
                    eZ.intl.string(eZ.t.KPGVWl),
                ],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE,
                predicate: () => ti,
            },
            [eM.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eZ.intl.string(eZ.t["+JkHPz"])],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE,
            },
            [eM.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eZ.intl.string(eZ.t.oP5zGB)],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE,
            },
            [eM.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eZ.intl.string(eZ.t.pKSjEh)],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT,
            },
            [eM.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eZ.intl.string(eZ.t["FRep5+"])],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eM.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eZ.intl.string(eZ.t["7qKDrK"])],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eZ.intl.string(eZ.t.m0FidH)],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eM.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eZ.intl.string(eZ.t.cDgKtb)],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e6,
            },
            [eM.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eZ.intl.string(eZ.t["D+aE7u"])],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e6,
            },
            [eM.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eZ.intl.string(eZ.t.fZSi1N)],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eM.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eZ.intl.string(eZ.t.uHAJ5u)],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eM.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eZ.intl.string(eZ.t.vrOCCg)],
                section: eU.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eM.s6.ACCOUNT_REMOVAL]: {
                section: eU.oAB.ACCOUNT,
                searchableTitles: [eZ.intl.string(eZ.t.ZKsIkp)],
                parent: eM.s6.ACCOUNT,
            },
            [eM.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eU.oAB.ACCOUNT,
                searchableTitles: [eZ.intl.string(eZ.t.jf5GGR)],
                parent: eM.s6.ACCOUNT_REMOVAL,
            },
            [eM.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eU.oAB.ACCOUNT,
                searchableTitles: [eZ.intl.string(eZ.t["8lQ2ra"])],
                parent: eM.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eM.s6.GAMES]: {
                section: eU.oAB.GAMES,
                searchableTitles: [eZ.intl.string(eZ.t.URyqtL)],
                label: eZ.intl.string(eZ.t.URyqtL),
                ariaLabel: eZ.intl.string(eZ.t.URyqtL),
                element: eD.Z,
                predicate: () => eY,
            },
            [eM.s6.GAMES_MY_GAMES]: {
                section: eU.oAB.GAMES,
                searchableTitles: [eZ.intl.string(eZ.t["5DMgp6"])],
                parent: eM.s6.GAMES,
            },
            [eM.s6.GAMES_CLIPS]: {
                section: eU.oAB.GAMES,
                searchableTitles: [eZ.intl.string(eZ.t.z2jK6e)],
                parent: eM.s6.GAMES,
            },
            [eM.s6.GAMES_OVERLAY]: {
                section: eU.oAB.GAMES,
                searchableTitles: [eZ.intl.string(eZ.t["9cb1U1"])],
                parent: eM.s6.GAMES,
            },
            [eM.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eU.oAB.GAMES,
                searchableTitles: [eZ.intl.string(eZ.t.Cq98yM)],
                parent: eM.s6.GAMES,
            },
            [eM.s6.PROFILE_CUSTOMIZATION]: {
                section: eU.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [eZ.intl.string(eZ.t["vi7f+v"])],
                label: eZ.intl.string(eZ.t["vi7f+v"]),
                ariaLabel: eZ.intl.string(eZ.t["vi7f+v"]),
                element: x.Z,
                newIndicator: (0, r.jsx)(eJ, {}),
                newIndicatorDismissibleContentTypes: [...eQ()],
                notice: {
                    stores: [F.Z, N.Z],
                    element: D.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, C.It)(), (0, u.P6)(), d.Z.clearSubsection(eU.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eU.Z5c.SETTINGS("profile-customization"),
            },
            [eM.s6.PROFILE_DISPLAY_NAME]: {
                section: eU.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eZ.intl.string(eZ.t["9AjdkJ"])],
                parent: eM.s6.PROFILE_CUSTOMIZATION,
            },
            [eM.s6.PROFILE_USER_PROFILE]: {
                section: eU.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eZ.intl.string(eZ.t["2p07FR"]), eZ.intl.string(eZ.t["7vhiqq"])],
                parent: eM.s6.PROFILE_CUSTOMIZATION,
            },
            [eM.s6.PROFILE_SERVER_PROFILES]: {
                section: eU.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eZ.intl.string(eZ.t.kPHroa)],
                parent: eM.s6.PROFILE_CUSTOMIZATION,
            },
            [eM.s6.CONTENT_SOCIAL]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                label: eZ.intl.string(eZ.t["+o1pDQ"]),
                searchableTitles: [eZ.intl.string(eZ.t["+o1pDQ"])],
                ariaLabel: eZ.intl.string(eZ.t["+o1pDQ"]),
                element: el.Z,
                url: eU.Z5c.SETTINGS("content-and-social"),
            },
            [eM.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t["+o1pDQ"]), eZ.intl.string(eZ.t["/7xJCA"])],
                parent: eM.s6.CONTENT_SOCIAL,
            },
            [eM.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t["+o1pDQ"]), eZ.intl.string(eZ.t["/7xJCA"])],
                parent: eM.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eM.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t.YpCiMj)],
                parent: eM.s6.CONTENT_SOCIAL,
            },
            [eM.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                label: eZ.intl.string(eZ.t.YpCiMj),
                searchableTitles: [eZ.intl.string(eZ.t.YpCiMj)],
                ariaLabel: eZ.intl.string(eZ.t.YpCiMj),
                parent: eM.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eU.Z5c.SETTINGS(eU.oAB.CONTENT_AND_SOCIAL, ek.C),
            },
            [eM.s6.DATA_PRIVACY]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                label: eZ.intl.string(eZ.t.OAuOHB),
                searchableTitles: [eZ.intl.string(eZ.t.OAuOHB)],
                ariaLabel: eZ.intl.string(eZ.t.OAuOHB),
                element: ec.Z,
                url: eU.Z5c.SETTINGS("data-and-privacy"),
            },
            [eM.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eU.oAB.ACCOUNT,
                searchableTitles: [eZ.intl.string(eZ.t["Vov/9v"])],
                parent: eM.s6.ACCOUNT,
            },
            [eM.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eZ.intl.string(eZ.t.WWaFn5)],
                parent: eM.s6.DATA_PRIVACY,
                predicate: () => (0, W.isDesktop)(),
            },
            [eM.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eZ.intl.string(eZ.t["opi/XF"])],
                parent: eM.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t.xVRG4O)],
                parent: eM.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eM.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t.fyA119)],
                parent: eM.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eM.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t.fyA119)],
                parent: eM.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eM.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t["/U8Iwc"])],
                parent: eM.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eM.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t["ms+TmZ"])],
                parent: eM.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eM.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t["y62Z/f"])],
                parent: eM.s6.CONTENT_SOCIAL,
            },
            [eM.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eZ.intl.string(eZ.t.SRZyHh)],
                parent: eM.s6.DATA_PRIVACY,
            },
            [eM.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eZ.intl.string(eZ.t.uEz8JC),
                    eZ.intl.string(eZ.t["N/oRIy"]),
                    eZ.intl.string(eZ.t.QVdYsL),
                    eZ.intl.string(eZ.t["aWD+tr"]),
                    eZ.intl.string(eZ.t["5mnTa2"]),
                ],
                parent: eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eM.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eZ.intl.string(eZ.t["Hj/Bur"]),
                    eZ.intl.string(eZ.t["N/oRIy"]),
                    eZ.intl.string(eZ.t.QVdYsL),
                    eZ.intl.string(eZ.t["aWD+tr"]),
                    eZ.intl.string(eZ.t["5mnTa2"]),
                    eZ.intl.string(eZ.t.K0OWPz),
                ],
                parent: eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eM.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eZ.intl.string(eZ.t["Hj/Bur"]),
                    eZ.intl.string(eZ.t["N/oRIy"]),
                    eZ.intl.string(eZ.t.QVdYsL),
                    eZ.intl.string(eZ.t["aWD+tr"]),
                    eZ.intl.string(eZ.t["5mnTa2"]),
                ],
                parent: eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eM.s6.GORE_MEDIA_REDACTION]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eZ.intl.string(eZ.t["Hj/Bur"]),
                    eZ.intl.string(eZ.t["N/oRIy"]),
                    eZ.intl.string(eZ.t.QVdYsL),
                    eZ.intl.string(eZ.t["aWD+tr"]),
                    eZ.intl.string(eZ.t.K0OWPz),
                ],
                parent: eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eM.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eZ.intl.string(eZ.t.JzaP4u),
                    eZ.intl.string(eZ.t.H9XOl5),
                    eZ.intl.string(eZ.t.k4W40N),
                ],
                parent: eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t["L+yTsb"])],
                parent: eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t.XahVjo)],
                parent: eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eM.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                parent: eM.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t.RAQUSE), eZ.intl.string(eZ.t.wbYDfX)],
                parent: eM.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t["3o2ojo"])],
                parent: eM.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !e8,
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t.OLwZDQ)],
                parent: eM.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t.wBkwu7)],
                parent: eM.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eM.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eZ.intl.string(eZ.t.XuADY2)],
                parent: eM.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eM.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eZ.intl.string(eZ.t.MNKzys)],
                parent: eM.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eM.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eZ.intl.string(eZ.t.VkS7YW), eZ.intl.string(eZ.t.sJYh5u)],
                parent: eM.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eM.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eZ.intl.string(eZ.t.CyLYKS)],
                parent: eM.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                predicate: () => tl,
            },
            [eM.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eM.CF],
                parent: eM.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eM.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eZ.intl.string(eZ.t.dmBSKi)],
                parent: eM.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eM.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t["1UaUy8"]), eZ.intl.string(eZ.t["xIk/iI"])],
                parent: eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eK,
            },
            [eM.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eZ.intl.string(eZ.t.qFsx5u)],
                parent: eM.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e1 && !e9 && !e2,
            },
            [eM.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eZ.intl.string(eZ.t["5b3FND"])],
                parent: eM.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => te,
            },
            [eM.s6.PRIVACY_FAMILY_CENTER]: {
                section: eU.oAB.FAMILY_CENTER,
                searchableTitles: [eZ.intl.string(eV.default.gntCQU)],
                label: eZ.intl.string(eV.default.gntCQU),
                ariaLabel: eZ.intl.string(eV.default.gntCQU),
                element: ef.Z,
                badgeCount: S,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eZ.intl.string(eZ.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eU.Z5c.SETTINGS("family-center"),
            },
            [eM.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eU.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eZ.intl.string(eZ.t.BG7Qsb)],
                parent: eM.s6.DATA_PRIVACY,
            },
            [eM.s6.AUTHORIZED_APPS]: {
                section: eU.oAB.AUTHORIZED_APPS,
                searchableTitles: [eZ.intl.string(eZ.t["f6kk+v"])],
                label: eZ.intl.string(eZ.t["f6kk+v"]),
                element: ea.Z,
                url: eU.Z5c.SETTINGS("authorized-apps"),
            },
            [eM.s6.SESSIONS]: {
                section: eU.oAB.SESSIONS,
                searchableTitles: [eZ.intl.string(eZ.t["+1h0k5"])],
                label: eZ.intl.string(eZ.t["+1h0k5"]),
                ariaLabel: eZ.intl.string(eZ.t["+1h0k5"]),
                element: ev.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
            },
            [eM.s6.CONNECTIONS]: {
                section: eU.oAB.CONNECTIONS,
                searchableTitles: [eZ.intl.string(eZ.t["3fe7U1"])],
                label: eZ.intl.string(eZ.t["3fe7U1"]),
                ariaLabel: eZ.intl.string(eZ.t["3fe7U1"]),
                element: es.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eU.Z5c.SETTINGS("connections"),
            },
            [eM.s6.THIRD_PARTY_ACCESS]: {
                section: eU.oAB.CONNECTIONS,
                searchableTitles: [
                    eZ.intl.string(eZ.t["Ig/XFR"]),
                    eZ.intl.string(eZ.t["3fe7U1"]),
                    eZ.intl.string(eZ.t["f6kk+v"]),
                ],
                label: eZ.intl.string(eZ.t["Ig/XFR"]),
                parent: eM.s6.CONNECTIONS,
                element: eA.Z,
            },
            [eM.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eU.oAB.CONNECTIONS,
                searchableTitles: [eZ.intl.string(eZ.t["+/hZMz"])],
                parent: eM.s6.CONNECTIONS,
                element: es.Z,
            },
            [eM.s6.CLIPS]: {
                section: eU.oAB.CLIPS,
                searchableTitles: [eZ.intl.string(eZ.t.z2jK6e)],
                label: eZ.intl.string(eZ.t.z2jK6e),
                ariaLabel: eZ.intl.string(eZ.t.z2jK6e),
                icon: k ? (0, r.jsx)(y.Z, {}) : void 0,
                element: O.Z,
                predicate: () => !eY,
                url: eU.Z5c.SETTINGS("clips"),
            },
            [eM.s6.RESTRICTED_USERS]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                parent: eM.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eZ.intl.string(eZ.t["3wRorq"]),
                element: ex.ZP,
                predicate: () => tn || tr,
            },
            [eM.s6.BLOCKED_USERS]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                parent: eM.s6.RESTRICTED_USERS,
                label: eZ.intl.string(eZ.t.PFOUKS),
                searchableTitles: [eZ.intl.string(eZ.t.PFOUKS)],
                element: ex.GF,
                predicate: () => tr,
            },
            [eM.s6.IGNORED_USERS]: {
                section: eU.oAB.CONTENT_AND_SOCIAL,
                parent: eM.s6.RESTRICTED_USERS,
                searchableTitles: [eZ.intl.string(eZ.t["93ZDWF"])],
                label: eZ.intl.string(eZ.t["93ZDWF"]),
                element: ex.yo,
                predicate: () => tn,
            },
            [eM.s6.PREMIUM]: {
                section: eU.oAB.PREMIUM,
                ariaLabel: eZ.intl.string(eZ.t.Ipxkoq),
                searchableTitles: [eZ.intl.string(eZ.t.Ipxkoq)],
                label: eZ.intl.string(eZ.t.Ipxkoq),
                element: Q.Z,
                className: eH.premiumTab,
            },
            [eM.s6.GUILD_BOOSTING]: {
                section: eU.oAB.GUILD_BOOSTING,
                searchableTitles: [eZ.intl.string(eZ.t["+CbP2t"])],
                label: eZ.intl.string(eZ.t["+CbP2t"]),
                element: ey.Z,
            },
            [eM.s6.SUBSCRIPTIONS]: {
                section: eU.oAB.SUBSCRIPTIONS,
                ariaLabel: eZ.intl.string(eZ.t.trSpHR),
                searchableTitles: [eZ.intl.string(eZ.t.trSpHR)],
                label: eZ.intl.string(eZ.t.trSpHR),
                element: w.Z,
                icon: h
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eM.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eU.oAB.SUBSCRIPTIONS,
                searchableTitles: [eZ.intl.string(eZ.t["2GKrvr"])],
                parent: eM.s6.SUBSCRIPTIONS,
            },
            [eM.s6.GIFT_INVENTORY]: {
                section: eU.oAB.INVENTORY,
                searchableTitles: [eZ.intl.string(eZ.t["jcSP+v"])],
                label: eZ.intl.string(eZ.t["jcSP+v"]),
                element: eh.Z,
                ariaLabel: eZ.intl.string(eZ.t["jcSP+v"]),
                badgeCount: t,
            },
            [eM.s6.GIFT_CODE_REDEMPTION]: {
                section: eU.oAB.INVENTORY,
                searchableTitles: [eZ.intl.string(eZ.t["il+VCg"])],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => !e3,
            },
            [eM.s6.GIFT_INVENTORY_QUESTS]: {
                section: eU.oAB.INVENTORY,
                searchableTitles: [eZ.intl.string(eZ.t.JALI2N)],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => e4,
            },
            [eM.s6.GIFT_INVENTORY_LIST]: {
                section: eU.oAB.INVENTORY,
                searchableTitles: [eZ.intl.string(eZ.t["9KeUbW"])],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => !e3,
            },
            [eM.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eU.oAB.INVENTORY,
                searchableTitles: [eZ.intl.string(eZ.t.vwMEHR)],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => e3,
            },
            [eM.s6.BILLING]: {
                section: eU.oAB.BILLING,
                searchableTitles: [eZ.intl.string(eZ.t.oeUm2t)],
                label: eZ.intl.string(eZ.t.oeUm2t),
                ariaLabel: eZ.intl.string(eZ.t.oeUm2t),
                element: eo.Z,
            },
            [eM.s6.BILLING_PAYMENT_METHODS]: {
                section: eU.oAB.BILLING,
                searchableTitles: [eZ.intl.string(eZ.t.W26xGR)],
                parent: eM.s6.BILLING,
            },
            [eM.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eU.oAB.BILLING,
                searchableTitles: [eZ.intl.string(eZ.t.obLrcH)],
                parent: eM.s6.BILLING,
            },
            [eM.s6.APPEARANCE]: {
                section: eU.oAB.APPEARANCE,
                searchableTitles: [eZ.intl.string(eZ.t["iHH+k5"])],
                label: eZ.intl.string(eZ.t["iHH+k5"]),
                ariaLabel: eZ.intl.string(eZ.t["iHH+k5"]),
                element: ei.Z,
                newIndicator: (0, r.jsx)(eX, {}),
                newIndicatorDismissibleContentTypes: eq(),
                url: eU.Z5c.SETTINGS("appearance"),
            },
            [eM.s6.APPEARANCE_THEME]: {
                section: eU.oAB.APPEARANCE,
                searchableTitles: [eZ.intl.string(eZ.t.Ksh3io)],
                parent: eM.s6.APPEARANCE,
            },
            [eM.s6.APPEARANCE_COLOR]: {
                section: eU.oAB.APPEARANCE,
                searchableTitles: [eZ.intl.string(eZ.t.OCOOiI)],
                parent: eM.s6.APPEARANCE_THEME,
            },
            [eM.s6.APPEARANCE_ICON]: {
                section: eU.oAB.APPEARANCE,
                searchableTitles: [eZ.intl.string(eZ.t.RPh2oq)],
                parent: eM.s6.APPEARANCE_THEME,
            },
            [eM.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eU.oAB.APPEARANCE,
                searchableTitles: [eZ.intl.string(eZ.t.ZEoGMT)],
                parent: eM.s6.APPEARANCE,
            },
            [eM.s6.APPEARANCE_LIST_SPACING]: {
                section: eU.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eM.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eZ.intl.string(eZ.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
            },
            [eM.s6.APPEARANCE_SCALING_SPACING]: {
                section: eU.oAB.APPEARANCE,
                searchableTitles: [eZ.intl.string(eZ.t.qPOqoK)],
                parent: eM.s6.APPEARANCE,
            },
            [eM.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eU.oAB.APPEARANCE,
                searchableTitles: [
                    eZ.intl.string(eZ.t.dyamEB),
                    eZ.intl.string(eZ.t.p8NOws),
                    eZ.intl.string(eZ.t["+o/sOj"]),
                ],
                parent: eM.s6.APPEARANCE,
                predicate: () =>
                    M.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eM.s6.ACCESSIBILITY]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.G0neg4)],
                label: eZ.intl.string(eZ.t.G0neg4),
                ariaLabel: eZ.intl.string(eZ.t.G0neg4),
                element: ee.Z,
                url: eU.Z5c.SETTINGS("accessibility"),
            },
            [eM.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.aZlePj)],
                parent: eM.s6.ACCESSIBILITY,
            },
            [eM.s6.ACCESSIBILITY_SATURATION]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t["5PWWCQ"])],
                parent: eM.s6.ACCESSIBILITY,
            },
            [eM.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.bQCodH)],
                parent: eM.s6.ACCESSIBILITY_SATURATION,
            },
            [eM.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.OLZFBw)],
                parent: eM.s6.ACCESSIBILITY,
            },
            [eM.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t["+IsihY"])],
                parent: eM.s6.ACCESSIBILITY,
                predicate: () => (0, v.l)("SettingsRendererConfig"),
            },
            [eM.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.uSOPWl)],
                parent: eM.s6.ACCESSIBILITY,
            },
            [eM.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eF.default["2gFUEx"])],
                parent: eM.s6.ACCESSIBILITY,
            },
            [eM.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.BT8Bmp)],
                parent: eM.s6.ACCESSIBILITY,
            },
            [eM.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t["sSY+mJ"])],
                parent: eM.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eM.s6.ACCESSIBILITY_CONTRAST]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.TYyfOz)],
                parent: eM.s6.ACCESSIBILITY,
            },
            [eM.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.cguieX)],
                parent: eM.s6.ACCESSIBILITY_CONTRAST,
            },
            [eM.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.e3TR1d)],
                parent: eM.s6.ACCESSIBILITY,
            },
            [eM.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.b3XBzs)],
                parent: eM.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eM.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.Iayoh4)],
                parent: eM.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eM.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.iIaOlZ)],
                parent: eM.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eM.s6.ACCESSIBILITY_STICKERS]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t["6NtAuL"])],
                parent: eM.s6.ACCESSIBILITY,
            },
            [eM.s6.ACCESSIBILITY_MESSAGES]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.onqU6u)],
                parent: eM.s6.ACCESSIBILITY,
            },
            [eM.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t["3Fztn5"])],
                parent: eM.s6.ACCESSIBILITY_MESSAGES,
            },
            [eM.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.TZ2hZG)],
                parent: eM.s6.ACCESSIBILITY_MESSAGES,
            },
            [eM.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.VpSKeH)],
                parent: eM.s6.ACCESSIBILITY,
            },
            [eM.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.qvTIwc)],
                parent: eM.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eM.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.intl.string(eZ.t.lsW5Eh)],
                parent: eM.s6.ACCESSIBILITY,
            },
            [eM.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eU.oAB.ACCESSIBILITY,
                searchableTitles: [eM.CF],
                parent: eM.s6.ACCESSIBILITY,
            },
            [eM.s6.VOICE_AND_VIDEO]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.B1fFpa)],
                label: eZ.intl.string(eZ.t.B1fFpa),
                ariaLabel: eZ.intl.string(eZ.t.B1fFpa),
                element: eL.Z,
                predicate: () => Z.Z.isSupported(),
                url: eU.Z5c.SETTINGS("voice"),
            },
            [eM.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.K3lovL), eZ.intl.string(eZ.t.NiTd0d)],
                parent: eM.s6.VOICE_AND_VIDEO,
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.FlNoSU)],
                parent: eM.s6.VOICE_AND_VIDEO,
            },
            [eM.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.ABjMWF)],
                parent: eM.s6.VOICE_AND_VIDEO,
            },
            [eM.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.OFpL3d)],
                parent: eM.s6.VOICE_AND_VIDEO,
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.KDdjoq), eZ.intl.string(eZ.t.FeUKeH)],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eM.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.K3lovL), eZ.intl.string(eZ.t.NiTd0d)],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eM.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eU.oAB.VOICE,
                searchableTitles: [
                    eZ.intl.string(eZ.t.hHMYbW),
                    eZ.intl.string(eZ.t.dl18zc),
                    eZ.intl.string(eZ.t.nuFtHB),
                    eZ.intl.string(eZ.t["3182VF"]),
                    eZ.intl.string(eZ.t["DGq/PT"]),
                ],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eM.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eU.oAB.VOICE,
                searchableTitles: [
                    eZ.intl.string(eZ.t.OX2Bnp),
                    eZ.intl.string(eZ.t.eATD2N),
                    eZ.intl.string(eZ.t.nuFtHB),
                    eZ.intl.string(eZ.t["3182VF"]),
                    eZ.intl.string(eZ.t["DGq/PT"]),
                ],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eM.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.gyljWF), eZ.intl.string(eZ.t.nuFtHB)],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eM.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eU.oAB.VOICE,
                searchableTitles: [
                    eZ.intl.string(eZ.t.LM3U3t),
                    eZ.intl.string(eZ.t.nuFtHB),
                    eZ.intl.string(eZ.t.VZPR0d),
                    eZ.intl.string(eZ.t.cjPbpa),
                ],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, X.R)({
                        location: "SettingsRendererConfig",
                        autoTrackExposure: !1,
                    });
                    return e.length > 0;
                },
            },
            [eM.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t["pS+K2N"]), eZ.intl.string(eZ.t.nuFtHB)],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => to !== ej._.STUDIO,
            },
            [eM.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t["sqUm+v"]), eZ.intl.string(eZ.t.nuFtHB)],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => ta === eB.pM.VOICE_ACTIVITY && ts,
            },
            [eM.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.e7LIiY)],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eM.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.nzUc3N)],
                parent: eM.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eM.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.ABjMWF)],
                parent: eM.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eM.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.nzUc3N)],
                parent: eM.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.LKzQSE)],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.F122Gx)],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => Z.Z.supports(eB.AN.VIDEO),
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t["3Ppr1t"])],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.lZTUPj)],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => Z.Z.supports(eB.AN.VIDEO),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t["8/udY2"])],
                parent: eM.s6.VOICE_AND_VIDEO,
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t["8/udY2"])],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => !(0, W.isWeb)(),
            },
            [eM.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t["8/udY2"])],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.Tceiq6)],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED,
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t["71Ve19"])],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => Z.Z.supports(eB.AN.OPEN_H264),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.Sln58f)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.AxnPm5)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => "stable" !== K.ZP.releaseChannel && Z.Z.isExperimentalEncodersSupported(),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t["6I6GUl"])],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => ts,
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.iWTwu7)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t["/jwMtr"])],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eM.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.OBwCXF)],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.t8QhiY), eZ.intl.string(eZ.t.hmfkCg)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Z.Z.isNoiseSuppressionSupported(),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.BbESsr)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Z.Z.isAdvancedVoiceActivitySupported(),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.cUMdHx)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Z.Z.isAutomaticGainControlSupported(),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.DFPXIC)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Z.Z.showBypassSystemInputProcessing(),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.uancuL)],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => Z.Z.supports(eB.AN.QOS),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.oSdBvb)],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => Z.Z.supports(eB.AN.ATTENUATION),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.wVBHr6)],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => Z.Z.shouldOfferManualSubsystemSelection(),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eU.oAB.VOICE,
                searchableTitles: [
                    eZ.intl.string(eZ.t.KDdjoq),
                    eZ.intl.string(eZ.t.NMCIf3),
                    eZ.intl.string(eZ.t.FeUKeH),
                ],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    Z.Z.supportsVideoHook() ||
                    Z.Z.supportsExperimentalSoundshare() ||
                    (Z.Z.supportsSystemScreensharePicker() && (0, W.isMac)()),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.GmWk2N), eZ.intl.string(eZ.t["Fj/xn5"])],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => Z.Z.supportsVideoHook(),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t["4I0qzc"])],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => Z.Z.supportsExperimentalSoundshare() && Z.Z.supportsHookSoundshare(),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.ie1mgY)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => Z.Z.supportsSystemScreensharePicker() && (0, W.isMac)(),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t["aP1N/v"])],
                parent: eM.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => W.isPlatformEmbedded,
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.OFpL3d)],
                parent: eM.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t["0CEP6e"])],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => z.Sb.getSetting(),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t["r6K+TE"])],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => Z.Z.isAecDumpSupported(),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t.U4FgFB)],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === K.ZP.releaseChannel || "development" === K.ZP.releaseChannel) &&
                    e0 &&
                    Z.Z.supports(eB.AN.CONNECTION_REPLAY),
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t["726JHB"])],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    W.isPlatformEmbedded && Z.Z.supports(eB.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [eM.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eU.oAB.VOICE,
                searchableTitles: [eZ.intl.string(eZ.t["/RXu6+"])],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eM.s6.POGGERMODE]: {
                section: eU.oAB.POGGERMODE,
                searchableTitles: [eZ.intl.string(eZ.t.AtCukJ)],
                label: eZ.intl.string(eZ.t.AtCukJ),
                ariaLabel: eZ.intl.string(eZ.t.AtCukJ),
                element: P.Z,
                predicate: () => R.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: eH.poggermodeIcon,
                }),
            },
            [eM.s6.CHAT]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t["/VQax8"])],
                label: eZ.intl.string(eZ.t["/VQax8"]),
                ariaLabel: eZ.intl.string(eZ.t["/VQax8"]),
                element: eT.Z,
                url: eU.Z5c.SETTINGS("text"),
            },
            [eM.s6.CHAT_INLINE_MEDIA]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t.U68Dgo)],
                parent: eM.s6.CHAT,
            },
            [eM.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t.U47N1t)],
                parent: eM.s6.CHAT_INLINE_MEDIA,
            },
            [eM.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t.VP11Nj)],
                parent: eM.s6.CHAT_INLINE_MEDIA,
            },
            [eM.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t["5S2AKy"])],
                parent: eM.s6.CHAT_INLINE_MEDIA,
            },
            [eM.s6.CHAT_EMBEDS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t.PWZOn5)],
                parent: eM.s6.CHAT,
            },
            [eM.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t.xX0ZTE)],
                parent: eM.s6.CHAT_EMBEDS,
            },
            [eM.s6.CHAT_EMOJI]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t.sMOuub)],
                parent: eM.s6.CHAT,
            },
            [eM.s6.CHAT_EMOJI_REACTIONS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t.Iv24sr)],
                parent: eM.s6.CHAT_EMOJI,
            },
            [eM.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t["79qal5"])],
                parent: eM.s6.CHAT_EMOJI,
            },
            [eM.s6.CHAT_STICKERS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t["6NtAuL"])],
                parent: eM.s6.CHAT,
            },
            [eM.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t["29xPVV"])],
                parent: eM.s6.CHAT_STICKERS,
            },
            [eM.s6.CHAT_SOUNDMOJI]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t.EHlAMT)],
                parent: eM.s6.CHAT,
            },
            [eM.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t["CtYr+f"])],
                parent: eM.s6.CHAT_SOUNDMOJI,
            },
            [eM.s6.CHAT_TEXT_BOX]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t.afR0pK)],
                parent: eM.s6.CHAT,
            },
            [eM.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t.AqGrEB)],
                parent: eM.s6.CHAT_TEXT_BOX,
            },
            [eM.s6.CHAT_THREADS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t.B2panJ)],
                parent: eM.s6.CHAT,
            },
            [eM.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t.AInv5u)],
                parent: eM.s6.CHAT_THREADS,
            },
            [eM.s6.CHAT_SPOILERS]: {
                section: eU.oAB.TEXT,
                searchableTitles: [eZ.intl.string(eZ.t.QgwmV1)],
                parent: eM.s6.CHAT,
            },
            [eM.s6.NOTIFICATIONS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.HcoRu7)],
                label: eZ.intl.string(eZ.t.HcoRu7),
                ariaLabel: eZ.intl.string(eZ.t.HcoRu7),
                element: eE.Z,
                url: eU.Z5c.SETTINGS("notifications"),
            },
            [eM.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t["/0WClp"])],
                parent: eM.s6.NOTIFICATIONS,
            },
            [eM.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eM.s6.NOTIFICATIONS,
            },
            [eM.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.VH8AIC)],
                parent: eM.s6.NOTIFICATIONS,
            },
            [eM.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.xSmFQE)],
                parent: eM.s6.NOTIFICATIONS,
                predicate: () => (0, W.isWindows)(),
            },
            [eM.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.z21l8P)],
                parent: eM.s6.NOTIFICATIONS,
            },
            [eM.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: ["New Notification Settings (Advanced, Staff Only)"],
                parent: eM.s6.NOTIFICATIONS,
                predicate: () => !1,
            },
            [eM.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: ["Restore most recent snapshot"],
                parent: eM.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eM.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: ["Launch Migration"],
                parent: eM.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eM.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: ["Toggle new system on/off"],
                parent: eM.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eM.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.TTvjd3)],
                parent: eM.s6.NOTIFICATIONS,
            },
            [eM.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.VpSKeH)],
                parent: eM.s6.NOTIFICATIONS,
            },
            [eM.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.D9yVAA)],
                parent: eM.s6.NOTIFICATIONS,
            },
            [eM.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.u6dc5O)],
                parent: eM.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eM.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.P8MG6u)],
                parent: eM.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eM.s6.NOTIFICATIONS_SOUNDS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.MKWyKS)],
                parent: eM.s6.NOTIFICATIONS,
            },
            [eM.s6.NOTIFICATIONS_EMAILS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.TPchzM)],
                parent: eM.s6.NOTIFICATIONS,
            },
            [eM.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t["B75+xc"])],
                parent: eM.s6.NOTIFICATIONS_EMAILS,
            },
            [eM.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.sxn7lZ)],
                parent: eM.s6.NOTIFICATIONS_EMAILS,
            },
            [eM.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.EkxXhY)],
                parent: eM.s6.NOTIFICATIONS_EMAILS,
            },
            [eM.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.jNrkrK)],
                parent: eM.s6.NOTIFICATIONS_EMAILS,
            },
            [eM.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.E8g1l5)],
                parent: eM.s6.NOTIFICATIONS_EMAILS,
            },
            [eM.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.Ra9Pws)],
                parent: eM.s6.NOTIFICATIONS_EMAILS,
            },
            [eM.s6.NOTIFICATIONS_REACTIONS]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.Rq0NFh)],
                parent: eM.s6.NOTIFICATIONS,
            },
            [eM.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.wtk08f)],
                parent: eM.s6.NOTIFICATIONS,
                predicate: () => (0, U.JN)("SettingsRendererConfig"),
            },
            [eM.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eU.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.intl.string(eZ.t.pW4TMj)],
                parent: eM.s6.NOTIFICATIONS,
            },
            [eM.s6.KEYBINDS]: {
                section: eU.oAB.KEYBINDS,
                searchableTitles: [eZ.intl.string(eZ.t.T9DA2N)],
                label: eZ.intl.string(eZ.t.T9DA2N),
                element: em.Z,
                url: eU.Z5c.SETTINGS("keybinds"),
            },
            [eM.s6.LANGUAGE]: {
                section: eU.oAB.LOCALE,
                searchableTitles: [eZ.intl.string(eZ.t.IHMsPj)],
                label: eZ.intl.string(eZ.t.IHMsPj),
                element: eg.Z,
                url: eU.Z5c.SETTINGS("language"),
            },
            [eM.s6.WINDOW_SETTINGS]: {
                section: eU.oAB.WINDOWS,
                searchableTitles: [eZ.intl.string(eZ.t.ZkDZoq)],
                label: eZ.intl.string(eZ.t.ZkDZoq),
                element: eC.Z,
                predicate: () => W.isPlatformEmbedded && (0, W.isWindows)(),
            },
            [eM.s6.LINUX_SETTINGS]: {
                section: eU.oAB.LINUX,
                searchableTitles: [eZ.intl.string(eZ.t["7pPjTU"])],
                label: eZ.intl.string(eZ.t["7pPjTU"]),
                element: e$,
                predicate: () => W.isPlatformEmbedded && (0, W.isLinux)(),
            },
            [eM.s6.STREAMER_MODE]: {
                section: eU.oAB.STREAMER_MODE,
                searchableTitles: [eZ.intl.string(eZ.t.S5GfOT)],
                label: eZ.intl.string(eZ.t.S5GfOT),
                ariaLabel: eZ.intl.string(eZ.t.S5GfOT),
                element: eI.Z,
                url: eU.Z5c.SETTINGS("streamer-mode"),
            },
            [eM.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eU.oAB.STREAMER_MODE,
                searchableTitles: [eZ.intl.string(eZ.t.bxGbHB)],
                parent: eM.s6.STREAMER_MODE,
            },
            [eM.s6.STREAMER_MODE_ENABLE]: {
                section: eU.oAB.STREAMER_MODE,
                searchableTitles: [eZ.intl.string(eZ.t.p9ZAJS)],
                parent: eM.s6.STREAMER_MODE,
            },
            [eM.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eU.oAB.STREAMER_MODE,
                searchableTitles: [eZ.intl.string(eZ.t.UpQziI)],
                parent: eM.s6.STREAMER_MODE,
            },
            [eM.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eU.oAB.STREAMER_MODE,
                searchableTitles: [eZ.intl.string(eZ.t.q7WNGh)],
                parent: eM.s6.STREAMER_MODE,
            },
            [eM.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eU.oAB.STREAMER_MODE,
                searchableTitles: [eZ.intl.string(eZ.t["1CWknJ"])],
                parent: eM.s6.STREAMER_MODE,
            },
            [eM.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eU.oAB.STREAMER_MODE,
                searchableTitles: [eZ.intl.string(eZ.t.qmYiYW)],
                parent: eM.s6.STREAMER_MODE,
            },
            [eM.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eU.oAB.STREAMER_MODE,
                searchableTitles: [eZ.intl.string(eZ.t["iA81+f"])],
                parent: eM.s6.STREAMER_MODE,
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
            [eM.s6.SETTINGS_ADVANCED]: {
                section: eU.oAB.ADVANCED,
                searchableTitles: [eZ.intl.string(eZ.t["8/udY2"])],
                label: eZ.intl.string(eZ.t["8/udY2"]),
                ariaLabel: eZ.intl.string(eZ.t["8/udY2"]),
                element: er.ZP,
            },
            [eM.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eU.oAB.ADVANCED,
                searchableTitles: [eZ.intl.string(eZ.t.ObIb1d)],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () => H.wS,
            },
            [eM.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eU.oAB.ADVANCED,
                searchableTitles: [eZ.intl.string(eZ.t["eOC/Fx"])],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () => W.isPlatformEmbedded,
            },
            [eM.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eU.oAB.ADVANCED,
                searchableTitles: [eZ.intl.string(eZ.t.fi3UQE)],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () => e5,
            },
            [eM.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eU.oAB.ADVANCED,
                searchableTitles: [eZ.intl.string(eZ.t.erOqlp)],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () => e7,
            },
            [eM.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eU.oAB.ADVANCED,
                searchableTitles: [eZ.intl.string(eZ.t.qDZryM)],
                parent: eM.s6.SETTINGS_ADVANCED,
            },
            [eM.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eU.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    g.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [eM.s6.ACTIVITY_PRIVACY]: {
                section: eU.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eZ.intl.string(eZ.t.Cq98yM)],
                label: eZ.intl.string(eZ.t.Cq98yM),
                ariaLabel: eZ.intl.string(eZ.t.Cq98yM),
                element: en.Z,
                predicate: () => !eY,
                url: eU.Z5c.SETTINGS("activity-privacy"),
            },
            [eM.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eY ? eU.oAB.GAMES : eU.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eZ.intl.string(eZ.t["8ka8lp"])],
                parent: eY ? eM.s6.GAMES_ACTIVITY_PRIVACY : eM.s6.ACTIVITY_PRIVACY,
            },
            [eM.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eY ? eU.oAB.GAMES : eU.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eZ.intl.string(eZ.t.VOszPD)],
                parent: eY ? eM.s6.GAMES_ACTIVITY_PRIVACY : eM.s6.ACTIVITY_PRIVACY,
            },
            [eM.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eY ? eU.oAB.GAMES : eU.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eM.CF],
                parent: eY ? eM.s6.GAMES_ACTIVITY_PRIVACY : eM.s6.ACTIVITY_PRIVACY,
            },
            [eM.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eU.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eZ.intl.string(eZ.t["4F2KoK"])],
                parent: eM.s6.ACTIVITY_PRIVACY,
            },
            [eM.s6.REGISTERED_GAMES]: {
                section: eU.oAB.REGISTERED_GAMES,
                searchableTitles: [eZ.intl.string(eZ.t.AVDyEh)],
                label: eZ.intl.string(eZ.t.AVDyEh),
                element: e_.Z,
                predicate: () => !eY && (0, ew.Jw)(),
            },
            [eM.s6.OVERLAY]: {
                section: eU.oAB.OVERLAY,
                searchableTitles: [eZ.intl.string(eZ.t["9cb1U1"]), eZ.intl.string(eZ.t.HcoRu7)],
                label: eZ.intl.string(eZ.t["9cb1U1"]),
                element: eb.Z,
                predicate: () => !eY && A,
            },
            [eM.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, E.Z)(!0),
                searchableTitles: [eZ.intl.string(eZ.t.LRmNAg)],
                label: eZ.intl.string(eZ.t.LRmNAg),
            },
            [eM.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    V.default.track(eU.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, Y.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                V.default.track(eU.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, p.Z)(e);
                            },
                        });
                },
                searchableTitles: [eZ.intl.string(eZ.t.sMEktb)],
                label: eZ.intl.string(eZ.t.sMEktb),
                ariaLabel: eZ.intl.string(eZ.t.sMEktb),
            },
            [eM.s6.HYPESQUAD]: {
                section: eU.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eZ.intl.string(eZ.t["k0R+4e"])],
                label: eZ.intl.string(eZ.t["k0R+4e"]),
                element: ep.Z,
                predicate: () => !tt,
            },
            [eM.s6.TOWNHALL]: {
                section: eU.oAB.TOWNHALL,
                searchableTitles: [eZ.intl.string(eZ.t.dnZNER)],
                label: eZ.intl.string(eZ.t.dnZNER),
                predicate: () => tt,
                onClick: () => {
                    (0, p.Z)("https://discord.gg/discord-townhall"), (0, eN.default)();
                },
            },
            [eM.s6.EXPERIMENTS]: {
                section: eU.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: eP.Z,
                predicate: () => G.Z.isDeveloper,
                url: eU.Z5c.SETTINGS("experiments"),
            },
            [eM.s6.DEVELOPER_OPTIONS]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: ed.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eM.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eM.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eM.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e0 && G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eM.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e0 && G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eM.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eM.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e0 && G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Toggleable Components"],
                parent: eM.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e0 && G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eM.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e0 && G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eM.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e0 && G.Z.isDeveloper && B.default.layoutDebuggingEnabled,
            },
            [eM.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e0 && G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e0 && G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eM.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eM.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eM.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => m.q && G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eM.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eM.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eM.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eM.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eU.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.TEXT_PLAYGROUND]: {
                section: eU.oAB.TEXT_PLAYGROUND,
                searchableTitles: ["Text Playground"],
                label: "Text Playground",
                element: eS.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DESIGN_SYSTEMS]: {
                section: eU.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Design Systems"],
                label: "Design Systems",
                element: eu.Z,
                predicate: () => G.Z.isDeveloper,
                url: eU.Z5c.SETTINGS("design-systems"),
            },
            [eM.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eU.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Colors"],
                label: "Colors",
                element: eu.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.ANIMATION_TESTING]: {
                section: eU.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Animation Testing"],
                label: "Animation Testing",
                element: eu.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eU.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Components"],
                label: "Components",
                element: eu.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.TEXT_COMPONENTS]: {
                section: eU.oAB.TEXT_COMPONENT,
                searchableTitles: ["Text Components"],
                label: "Text Components",
                element: $.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.SHOP_KEEPER]: {
                section: eU.oAB.SHOP_KEEPER,
                searchableTitles: ["Shop Keeper"],
                label: "Shop Keeper",
                element: I.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.QUEST_PREVIEW_TOOL_2]: {
                section: eU.oAB.QUEST_PREVIEW_TOOL_2,
                searchableTitles: ["Quest Preview Tool 2"],
                label: "Quest Preview Tool 2",
                element: () => (0, r.jsx)(j.Z, { questId: null == b ? void 0 : b.quest_id }),
                predicate: () => (0, L.T)({ location: eG.dr.QUEST_PREVIEW_TOOL_2 }),
            },
            [eM.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM]: {
                section: f.ID.CUSTOM,
                searchableTitles: eR.Y,
                label: "Developer Education",
                element: eR.$,
                predicate: () => G.Z.isDeveloper,
            },
            [eM.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            ez(
                                eW(
                                    {
                                        header: eZ.intl.string(eZ.t["2jxGen"]),
                                        confirmText: eZ.intl.string(eZ.t["2jxGen"]),
                                        cancelText: eZ.intl.string(eZ.t["ETE/oK"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: eZ.intl.string(eZ.t.SUnWBA),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: eZ.intl.string(eZ.t["2jxGen"]),
                ariaLabel: eZ.intl.string(eZ.t["2jxGen"]),
                icon: (0, r.jsx)(s.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [eM.s6.SOCIAL_LINKS]: {
                section: f.ID.CUSTOM,
                element: J.Z,
            },
            [eM.s6.CLIENT_DEBUG_INFO]: {
                section: f.ID.CUSTOM,
                element: q.Z,
            },
        });
    };
