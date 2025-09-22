n.d(t, {
    $Z: () => eX,
    OF: () => eJ,
    W8: () => e$,
    c$: () => eQ,
    iE: () => e1,
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
    ej = n(43434),
    eM = n(345655),
    ek = n(726985),
    eU = n(583139),
    eG = n(981631),
    eB = n(46140),
    eZ = n(65154),
    eF = n(388032),
    eV = n(693450),
    eH = n(345909),
    eY = n(202323);
function eW(e, t, n) {
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
function eK(e) {
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
                eW(e, t, n[t]);
            });
    }
    return e;
}
function ez(e, t) {
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
function eq(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ez(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eX = () => {
        let e = [a.z.CLIENT_THEMES_SETTINGS_BADGE, a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
        return (
            b.Mc.getCurrentConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            h.n.getConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE),
            e
        );
    },
    eQ = () => {
        let e = eX(),
            [t] = (0, S.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: eF.intl.string(eF.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ||
                t === a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE
              ? (0, r.jsx)(s.IGR, { text: eF.intl.string(eF.t.y2b7CA) })
              : null;
    },
    eJ = () => {
        let e = [];
        return (
            (0, k.h)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            A.JH.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    e$ = () => {
        let e = eJ(),
            [t] = (0, S.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: eF.intl.string(eF.t.y2b7CA) })
            : null;
    },
    e0 = eC.Z,
    e1 = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: h,
            searchParams: b,
            numOfPendingFamilyRequests: S,
            isOverlaySupported: A,
            isClipsBetaTagShowing: k = !1,
            shouldMergeGameSettings: eW,
            isKeywordFilteringEnabled: ez,
            isStaff: e1,
            isInappropriateConversationWarningEnabled: e2,
            isInapproprateConversationsDefaultOn: e3,
            paymentsBlocked: e4,
            isEligibleForQuests: e8,
            isStricterMessageRequestsEnabled: e5,
            hasLibraryApplication: e6,
            hasTOTPEnabled: e7,
            developerMode: e9,
            isAdultUser: te,
            hasSecureFramesVerifiedUserIds: tt,
            hypeSquadRemoved: tn,
            hasIgnoredUsers: tr,
            hasBlockedUsers: ti,
            isEligibleForSensitiveContentDefaults: ta,
            inputMode: to,
            activeInputProfile: ts,
            isInputProfileCustom: tl,
            isDataUsage3PToggleEnabled: tc,
        } = e;
        return Object.freeze({
            [ek.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: eO.Z,
            },
            [ek.s6.ACCOUNT_SECURITY_TAB]: {
                section: eG.oAB.ACCOUNT,
                searchableTitles: [eF.intl.string(eF.t.Am9YHh)],
                label: eF.intl.string(eF.t.Am9YHh),
            },
            [ek.s6.ACCOUNT]: {
                section: eG.oAB.ACCOUNT,
                searchableTitles: [eF.intl.string(eF.t["JAIM/v"])],
                label: eF.intl.string(eF.t["JAIM/v"]),
                ariaLabel: eF.intl.string(eF.t["JAIM/v"]),
                element: et.Z,
                url: eG.Z5c.SETTINGS("account"),
            },
            [ek.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eF.intl.string(eF.t.LYju5O)],
                parent: ek.s6.ACCOUNT,
                section: eG.oAB.ACCOUNT,
            },
            [ek.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eF.intl.string(eF.t["9AjdkJ"])],
                section: eG.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_PROFILE,
            },
            [ek.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eF.intl.string(eF.t.Ulqq6O)],
                section: eG.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_PROFILE,
            },
            [ek.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    eF.intl.string(eF.t["/52UY2"]),
                    eF.intl.string(eF.t.sK0dmJ),
                    eF.intl.string(eF.t.XxRj7e),
                    eF.intl.string(eF.t.yNGjyM),
                    eF.intl.string(eF.t.KPGVWl),
                ],
                section: eG.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_PROFILE,
                predicate: () => ta,
            },
            [ek.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eF.intl.string(eF.t["+JkHPz"])],
                section: eG.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_PROFILE,
            },
            [ek.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eF.intl.string(eF.t.oP5zGB)],
                section: eG.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_PROFILE,
            },
            [ek.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eF.intl.string(eF.t.pKSjEh)],
                section: eG.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT,
            },
            [ek.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eF.intl.string(eF.t["FRep5+"])],
                section: eG.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [ek.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eF.intl.string(eF.t["7qKDrK"])],
                section: eG.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [ek.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eF.intl.string(eF.t.m0FidH)],
                section: eG.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [ek.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eF.intl.string(eF.t.cDgKtb)],
                section: eG.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e7,
            },
            [ek.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eF.intl.string(eF.t["D+aE7u"])],
                section: eG.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e7,
            },
            [ek.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eF.intl.string(eF.t.fZSi1N)],
                section: eG.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [ek.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eF.intl.string(eF.t.uHAJ5u)],
                section: eG.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [ek.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eF.intl.string(eF.t.vrOCCg)],
                section: eG.oAB.ACCOUNT,
                parent: ek.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [ek.s6.ACCOUNT_REMOVAL]: {
                section: eG.oAB.ACCOUNT,
                searchableTitles: [eF.intl.string(eF.t.ZKsIkp)],
                parent: ek.s6.ACCOUNT,
            },
            [ek.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eG.oAB.ACCOUNT,
                searchableTitles: [eF.intl.string(eF.t.jf5GGR)],
                parent: ek.s6.ACCOUNT_REMOVAL,
            },
            [ek.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eG.oAB.ACCOUNT,
                searchableTitles: [eF.intl.string(eF.t["8lQ2ra"])],
                parent: ek.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [ek.s6.GAMES]: {
                section: eG.oAB.GAMES,
                searchableTitles: [eF.intl.string(eF.t.URyqtL)],
                label: eF.intl.string(eF.t.URyqtL),
                ariaLabel: eF.intl.string(eF.t.URyqtL),
                element: eD.Z,
                predicate: () => eW,
            },
            [ek.s6.GAMES_MY_GAMES]: {
                section: eG.oAB.GAMES,
                searchableTitles: [eF.intl.string(eF.t["5DMgp6"])],
                parent: ek.s6.GAMES,
            },
            [ek.s6.GAMES_CLIPS]: {
                section: eG.oAB.GAMES,
                searchableTitles: [eF.intl.string(eF.t.z2jK6e)],
                parent: ek.s6.GAMES,
            },
            [ek.s6.GAMES_OVERLAY]: {
                section: eG.oAB.GAMES,
                searchableTitles: [eF.intl.string(eF.t["9cb1U1"])],
                parent: ek.s6.GAMES,
            },
            [ek.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eG.oAB.GAMES,
                searchableTitles: [eF.intl.string(eF.t.Cq98yM)],
                parent: ek.s6.GAMES,
            },
            [ek.s6.PROFILE_CUSTOMIZATION]: {
                section: eG.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [eF.intl.string(eF.t["vi7f+v"])],
                label: eF.intl.string(eF.t["vi7f+v"]),
                ariaLabel: eF.intl.string(eF.t["vi7f+v"]),
                element: x.Z,
                newIndicator: (0, r.jsx)(e$, {}),
                newIndicatorDismissibleContentTypes: [...eJ()],
                notice: {
                    stores: [F.Z, N.Z],
                    element: D.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, C.It)(), (0, u.P6)(), d.Z.clearSubsection(eG.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eG.Z5c.SETTINGS("profile-customization"),
            },
            [ek.s6.PROFILE_DISPLAY_NAME]: {
                section: eG.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eF.intl.string(eF.t["9AjdkJ"])],
                parent: ek.s6.PROFILE_CUSTOMIZATION,
            },
            [ek.s6.PROFILE_USER_PROFILE]: {
                section: eG.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eF.intl.string(eF.t["2p07FR"]), eF.intl.string(eF.t["7vhiqq"])],
                parent: ek.s6.PROFILE_CUSTOMIZATION,
            },
            [ek.s6.PROFILE_SERVER_PROFILES]: {
                section: eG.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eF.intl.string(eF.t.kPHroa)],
                parent: ek.s6.PROFILE_CUSTOMIZATION,
            },
            [ek.s6.CONTENT_SOCIAL]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                label: eF.intl.string(eF.t["+o1pDQ"]),
                searchableTitles: [eF.intl.string(eF.t["+o1pDQ"])],
                ariaLabel: eF.intl.string(eF.t["+o1pDQ"]),
                element: el.Z,
                url: eG.Z5c.SETTINGS("content-and-social"),
            },
            [ek.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t["+o1pDQ"]), eF.intl.string(eF.t["/7xJCA"])],
                parent: ek.s6.CONTENT_SOCIAL,
            },
            [ek.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t["+o1pDQ"]), eF.intl.string(eF.t["/7xJCA"])],
                parent: ek.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [ek.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t.YpCiMj)],
                parent: ek.s6.CONTENT_SOCIAL,
            },
            [ek.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                label: eF.intl.string(eF.t.YpCiMj),
                searchableTitles: [eF.intl.string(eF.t.YpCiMj)],
                ariaLabel: eF.intl.string(eF.t.YpCiMj),
                parent: ek.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eG.Z5c.SETTINGS(eG.oAB.CONTENT_AND_SOCIAL, eU.C),
            },
            [ek.s6.DATA_PRIVACY]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                label: eF.intl.string(eF.t.OAuOHB),
                searchableTitles: [eF.intl.string(eF.t.OAuOHB)],
                ariaLabel: eF.intl.string(eF.t.OAuOHB),
                element: ec.Z,
                url: eG.Z5c.SETTINGS("data-and-privacy"),
            },
            [ek.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eG.oAB.ACCOUNT,
                searchableTitles: [eF.intl.string(eF.t["Vov/9v"])],
                parent: ek.s6.ACCOUNT,
            },
            [ek.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.intl.string(eF.t.WWaFn5)],
                parent: ek.s6.DATA_PRIVACY,
                predicate: () => (0, W.isDesktop)(),
            },
            [ek.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.intl.string(eF.t["opi/XF"])],
                parent: ek.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t.xVRG4O)],
                parent: ek.s6.CONTENT_SOCIAL_DISCORD,
            },
            [ek.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t.fyA119)],
                parent: ek.s6.CONTENT_SOCIAL_DISCORD,
            },
            [ek.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t.fyA119)],
                parent: ek.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [ek.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t["/U8Iwc"])],
                parent: ek.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [ek.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t["ms+TmZ"])],
                parent: ek.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [ek.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t["y62Z/f"])],
                parent: ek.s6.CONTENT_SOCIAL,
            },
            [ek.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.intl.string(eF.t.SRZyHh)],
                parent: ek.s6.DATA_PRIVACY,
            },
            [ek.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eF.intl.string(eF.t.uEz8JC),
                    eF.intl.string(eF.t["N/oRIy"]),
                    eF.intl.string(eF.t.QVdYsL),
                    eF.intl.string(eF.t["aWD+tr"]),
                    eF.intl.string(eF.t["5mnTa2"]),
                ],
                parent: ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [ek.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eF.intl.string(eF.t["Hj/Bur"]),
                    eF.intl.string(eF.t["N/oRIy"]),
                    eF.intl.string(eF.t.QVdYsL),
                    eF.intl.string(eF.t["aWD+tr"]),
                    eF.intl.string(eF.t["5mnTa2"]),
                    eF.intl.string(eF.t.K0OWPz),
                ],
                parent: ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [ek.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eF.intl.string(eF.t["Hj/Bur"]),
                    eF.intl.string(eF.t["N/oRIy"]),
                    eF.intl.string(eF.t.QVdYsL),
                    eF.intl.string(eF.t["aWD+tr"]),
                    eF.intl.string(eF.t["5mnTa2"]),
                ],
                parent: ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [ek.s6.GORE_MEDIA_REDACTION]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eF.intl.string(eF.t["Hj/Bur"]),
                    eF.intl.string(eF.t["N/oRIy"]),
                    eF.intl.string(eF.t.QVdYsL),
                    eF.intl.string(eF.t["aWD+tr"]),
                    eF.intl.string(eF.t.K0OWPz),
                ],
                parent: ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [ek.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eF.intl.string(eF.t.JzaP4u),
                    eF.intl.string(eF.t.H9XOl5),
                    eF.intl.string(eF.t.k4W40N),
                ],
                parent: ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [ek.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t["L+yTsb"])],
                parent: ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [ek.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t.XahVjo)],
                parent: ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [ek.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                parent: ek.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [ek.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t.RAQUSE), eF.intl.string(eF.t.wbYDfX)],
                parent: ek.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [ek.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t["3o2ojo"])],
                parent: ek.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !e5,
            },
            [ek.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t.OLwZDQ)],
                parent: ek.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [ek.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t.wBkwu7)],
                parent: ek.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [ek.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.intl.string(eF.t.XuADY2)],
                parent: ek.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [ek.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.intl.string(eF.t.MNKzys)],
                parent: ek.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [ek.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.intl.string(eF.t.VkS7YW), eF.intl.string(eF.t.sJYh5u)],
                parent: ek.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [ek.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.intl.string(eF.t.CyLYKS)],
                parent: ek.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                predicate: () => tc,
            },
            [ek.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ek.CF],
                parent: ek.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [ek.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.intl.string(eF.t.dmBSKi)],
                parent: ek.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [ek.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t["1UaUy8"]), eF.intl.string(eF.t["xIk/iI"])],
                parent: ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => ez,
            },
            [ek.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eF.intl.string(eF.t.qFsx5u)],
                parent: ek.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e2 && !te && !e3,
            },
            [ek.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.intl.string(eF.t["5b3FND"])],
                parent: ek.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => tt,
            },
            [ek.s6.PRIVACY_FAMILY_CENTER]: {
                section: eG.oAB.FAMILY_CENTER,
                searchableTitles: [eF.intl.string(eH.default.gntCQU)],
                label: eF.intl.string(eH.default.gntCQU),
                ariaLabel: eF.intl.string(eH.default.gntCQU),
                element: ef.Z,
                badgeCount: S,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eF.intl.string(eF.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eG.Z5c.SETTINGS("family-center"),
            },
            [ek.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eG.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.intl.string(eF.t.BG7Qsb)],
                parent: ek.s6.DATA_PRIVACY,
            },
            [ek.s6.AUTHORIZED_APPS]: {
                section: eG.oAB.AUTHORIZED_APPS,
                searchableTitles: [eF.intl.string(eF.t["f6kk+v"])],
                label: eF.intl.string(eF.t["f6kk+v"]),
                element: ea.Z,
                url: eG.Z5c.SETTINGS("authorized-apps"),
            },
            [ek.s6.SESSIONS]: {
                section: eG.oAB.SESSIONS,
                searchableTitles: [eF.intl.string(eF.t["+1h0k5"])],
                label: eF.intl.string(eF.t["+1h0k5"]),
                ariaLabel: eF.intl.string(eF.t["+1h0k5"]),
                element: ev.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
            },
            [ek.s6.CONNECTIONS]: {
                section: eG.oAB.CONNECTIONS,
                searchableTitles: [eF.intl.string(eF.t["3fe7U1"])],
                label: eF.intl.string(eF.t["3fe7U1"]),
                ariaLabel: eF.intl.string(eF.t["3fe7U1"]),
                element: es.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eG.Z5c.SETTINGS("connections"),
            },
            [ek.s6.THIRD_PARTY_ACCESS]: {
                section: eG.oAB.CONNECTIONS,
                searchableTitles: [
                    eF.intl.string(eF.t["Ig/XFR"]),
                    eF.intl.string(eF.t["3fe7U1"]),
                    eF.intl.string(eF.t["f6kk+v"]),
                ],
                label: eF.intl.string(eF.t["Ig/XFR"]),
                parent: ek.s6.CONNECTIONS,
                element: eA.Z,
            },
            [ek.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eG.oAB.CONNECTIONS,
                searchableTitles: [eF.intl.string(eF.t["+/hZMz"])],
                parent: ek.s6.CONNECTIONS,
                element: es.Z,
            },
            [ek.s6.CLIPS]: {
                section: eG.oAB.CLIPS,
                searchableTitles: [eF.intl.string(eF.t.z2jK6e)],
                label: eF.intl.string(eF.t.z2jK6e),
                ariaLabel: eF.intl.string(eF.t.z2jK6e),
                icon: k ? (0, r.jsx)(y.Z, {}) : void 0,
                element: O.Z,
                predicate: () => !eW,
                url: eG.Z5c.SETTINGS("clips"),
            },
            [ek.s6.RESTRICTED_USERS]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                parent: ek.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eF.intl.string(eF.t["3wRorq"]),
                element: ex.ZP,
                predicate: () => tr || ti,
            },
            [ek.s6.BLOCKED_USERS]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                parent: ek.s6.RESTRICTED_USERS,
                label: eF.intl.string(eF.t.PFOUKS),
                searchableTitles: [eF.intl.string(eF.t.PFOUKS)],
                element: ex.GF,
                predicate: () => ti,
            },
            [ek.s6.IGNORED_USERS]: {
                section: eG.oAB.CONTENT_AND_SOCIAL,
                parent: ek.s6.RESTRICTED_USERS,
                searchableTitles: [eF.intl.string(eF.t["93ZDWF"])],
                label: eF.intl.string(eF.t["93ZDWF"]),
                element: ex.yo,
                predicate: () => tr,
            },
            [ek.s6.PREMIUM]: {
                section: eG.oAB.PREMIUM,
                ariaLabel: eF.intl.string(eF.t.Ipxkoq),
                searchableTitles: [eF.intl.string(eF.t.Ipxkoq)],
                label: eF.intl.string(eF.t.Ipxkoq),
                element: Q.Z,
                className: eY.premiumTab,
            },
            [ek.s6.GUILD_BOOSTING]: {
                section: eG.oAB.GUILD_BOOSTING,
                searchableTitles: [eF.intl.string(eF.t["+CbP2t"])],
                label: eF.intl.string(eF.t["+CbP2t"]),
                element: ey.Z,
            },
            [ek.s6.SUBSCRIPTIONS]: {
                section: eG.oAB.SUBSCRIPTIONS,
                ariaLabel: eF.intl.string(eF.t.trSpHR),
                searchableTitles: [eF.intl.string(eF.t.trSpHR)],
                label: eF.intl.string(eF.t.trSpHR),
                element: w.Z,
                icon: h
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [ek.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eG.oAB.SUBSCRIPTIONS,
                searchableTitles: [eF.intl.string(eF.t["2GKrvr"])],
                parent: ek.s6.SUBSCRIPTIONS,
            },
            [ek.s6.GIFT_INVENTORY]: {
                section: eG.oAB.INVENTORY,
                searchableTitles: [eF.intl.string(eF.t["jcSP+v"])],
                label: eF.intl.string(eF.t["jcSP+v"]),
                element: eh.Z,
                ariaLabel: eF.intl.string(eF.t["jcSP+v"]),
                badgeCount: t,
            },
            [ek.s6.GIFT_CODE_REDEMPTION]: {
                section: eG.oAB.INVENTORY,
                searchableTitles: [eF.intl.string(eF.t["il+VCg"])],
                parent: ek.s6.GIFT_INVENTORY,
                predicate: () => !e4,
            },
            [ek.s6.GIFT_INVENTORY_QUESTS]: {
                section: eG.oAB.INVENTORY,
                searchableTitles: [eF.intl.string(eF.t.JALI2N)],
                parent: ek.s6.GIFT_INVENTORY,
                predicate: () => e8,
            },
            [ek.s6.GIFT_INVENTORY_LIST]: {
                section: eG.oAB.INVENTORY,
                searchableTitles: [eF.intl.string(eF.t["9KeUbW"])],
                parent: ek.s6.GIFT_INVENTORY,
                predicate: () => !e4,
            },
            [ek.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eG.oAB.INVENTORY,
                searchableTitles: [eF.intl.string(eF.t.vwMEHR)],
                parent: ek.s6.GIFT_INVENTORY,
                predicate: () => e4,
            },
            [ek.s6.BILLING]: {
                section: eG.oAB.BILLING,
                searchableTitles: [eF.intl.string(eF.t.oeUm2t)],
                label: eF.intl.string(eF.t.oeUm2t),
                ariaLabel: eF.intl.string(eF.t.oeUm2t),
                element: eo.Z,
            },
            [ek.s6.BILLING_PAYMENT_METHODS]: {
                section: eG.oAB.BILLING,
                searchableTitles: [eF.intl.string(eF.t.W26xGR)],
                parent: ek.s6.BILLING,
            },
            [ek.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eG.oAB.BILLING,
                searchableTitles: [eF.intl.string(eF.t.obLrcH)],
                parent: ek.s6.BILLING,
            },
            [ek.s6.APPEARANCE]: {
                section: eG.oAB.APPEARANCE,
                searchableTitles: [eF.intl.string(eF.t["iHH+k5"])],
                label: eF.intl.string(eF.t["iHH+k5"]),
                ariaLabel: eF.intl.string(eF.t["iHH+k5"]),
                element: ei.Z,
                newIndicator: (0, r.jsx)(eQ, {}),
                newIndicatorDismissibleContentTypes: eX(),
                url: eG.Z5c.SETTINGS("appearance"),
            },
            [ek.s6.APPEARANCE_THEME]: {
                section: eG.oAB.APPEARANCE,
                searchableTitles: [eF.intl.string(eF.t.Ksh3io)],
                parent: ek.s6.APPEARANCE,
            },
            [ek.s6.APPEARANCE_COLOR]: {
                section: eG.oAB.APPEARANCE,
                searchableTitles: [eF.intl.string(eF.t.OCOOiI)],
                parent: ek.s6.APPEARANCE_THEME,
            },
            [ek.s6.APPEARANCE_ICON]: {
                section: eG.oAB.APPEARANCE,
                searchableTitles: [eF.intl.string(eF.t.RPh2oq)],
                parent: ek.s6.APPEARANCE_THEME,
            },
            [ek.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eG.oAB.APPEARANCE,
                searchableTitles: [eF.intl.string(eF.t.ZEoGMT)],
                parent: ek.s6.APPEARANCE,
            },
            [ek.s6.APPEARANCE_LIST_SPACING]: {
                section: eG.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: ek.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eF.intl.string(eF.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
            },
            [ek.s6.APPEARANCE_SCALING_SPACING]: {
                section: eG.oAB.APPEARANCE,
                searchableTitles: [eF.intl.string(eF.t.qPOqoK)],
                parent: ek.s6.APPEARANCE,
            },
            [ek.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eG.oAB.APPEARANCE,
                searchableTitles: [
                    eF.intl.string(eF.t.dyamEB),
                    eF.intl.string(eF.t.p8NOws),
                    eF.intl.string(eF.t["+o/sOj"]),
                ],
                parent: ek.s6.APPEARANCE,
                predicate: () =>
                    M.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [ek.s6.ACCESSIBILITY]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.G0neg4)],
                label: eF.intl.string(eF.t.G0neg4),
                ariaLabel: eF.intl.string(eF.t.G0neg4),
                element: ee.Z,
                url: eG.Z5c.SETTINGS("accessibility"),
            },
            [ek.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.aZlePj)],
                parent: ek.s6.ACCESSIBILITY,
            },
            [ek.s6.ACCESSIBILITY_SATURATION]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t["5PWWCQ"])],
                parent: ek.s6.ACCESSIBILITY,
            },
            [ek.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.bQCodH)],
                parent: ek.s6.ACCESSIBILITY_SATURATION,
            },
            [ek.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.OLZFBw)],
                parent: ek.s6.ACCESSIBILITY,
            },
            [ek.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t["+IsihY"])],
                parent: ek.s6.ACCESSIBILITY,
                predicate: () => (0, v.l)("SettingsRendererConfig"),
            },
            [ek.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.uSOPWl)],
                parent: ek.s6.ACCESSIBILITY,
            },
            [ek.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eV.default["2gFUEx"])],
                parent: ek.s6.ACCESSIBILITY,
            },
            [ek.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.BT8Bmp)],
                parent: ek.s6.ACCESSIBILITY,
            },
            [ek.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t["sSY+mJ"])],
                parent: ek.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [ek.s6.ACCESSIBILITY_CONTRAST]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.TYyfOz)],
                parent: ek.s6.ACCESSIBILITY,
            },
            [ek.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.cguieX)],
                parent: ek.s6.ACCESSIBILITY_CONTRAST,
            },
            [ek.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.e3TR1d)],
                parent: ek.s6.ACCESSIBILITY,
            },
            [ek.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.b3XBzs)],
                parent: ek.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [ek.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.Iayoh4)],
                parent: ek.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [ek.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.iIaOlZ)],
                parent: ek.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [ek.s6.ACCESSIBILITY_STICKERS]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t["6NtAuL"])],
                parent: ek.s6.ACCESSIBILITY,
            },
            [ek.s6.ACCESSIBILITY_MESSAGES]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.onqU6u)],
                parent: ek.s6.ACCESSIBILITY,
            },
            [ek.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t["3Fztn5"])],
                parent: ek.s6.ACCESSIBILITY_MESSAGES,
            },
            [ek.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.TZ2hZG)],
                parent: ek.s6.ACCESSIBILITY_MESSAGES,
            },
            [ek.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.VpSKeH)],
                parent: ek.s6.ACCESSIBILITY,
            },
            [ek.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.qvTIwc)],
                parent: ek.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [ek.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [eF.intl.string(eF.t.lsW5Eh)],
                parent: ek.s6.ACCESSIBILITY,
            },
            [ek.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eG.oAB.ACCESSIBILITY,
                searchableTitles: [ek.CF],
                parent: ek.s6.ACCESSIBILITY,
            },
            [ek.s6.VOICE_AND_VIDEO]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.B1fFpa)],
                label: eF.intl.string(eF.t.B1fFpa),
                ariaLabel: eF.intl.string(eF.t.B1fFpa),
                element: eL.Z,
                predicate: () => Z.Z.isSupported(),
                url: eG.Z5c.SETTINGS("voice"),
            },
            [ek.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.K3lovL), eF.intl.string(eF.t.NiTd0d)],
                parent: ek.s6.VOICE_AND_VIDEO,
            },
            [ek.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.FlNoSU)],
                parent: ek.s6.VOICE_AND_VIDEO,
            },
            [ek.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.ABjMWF)],
                parent: ek.s6.VOICE_AND_VIDEO,
            },
            [ek.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.OFpL3d)],
                parent: ek.s6.VOICE_AND_VIDEO,
            },
            [ek.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.KDdjoq), eF.intl.string(eF.t.FeUKeH)],
                parent: ek.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [ek.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.K3lovL), eF.intl.string(eF.t.NiTd0d)],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [ek.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eG.oAB.VOICE,
                searchableTitles: [
                    eF.intl.string(eF.t.hHMYbW),
                    eF.intl.string(eF.t.dl18zc),
                    eF.intl.string(eF.t.nuFtHB),
                    eF.intl.string(eF.t["3182VF"]),
                    eF.intl.string(eF.t["DGq/PT"]),
                ],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE,
            },
            [ek.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eG.oAB.VOICE,
                searchableTitles: [
                    eF.intl.string(eF.t.OX2Bnp),
                    eF.intl.string(eF.t.eATD2N),
                    eF.intl.string(eF.t.nuFtHB),
                    eF.intl.string(eF.t["3182VF"]),
                    eF.intl.string(eF.t["DGq/PT"]),
                ],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE,
            },
            [ek.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.gyljWF), eF.intl.string(eF.t.nuFtHB)],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE,
            },
            [ek.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eG.oAB.VOICE,
                searchableTitles: [
                    eF.intl.string(eF.t.LM3U3t),
                    eF.intl.string(eF.t.nuFtHB),
                    eF.intl.string(eF.t.VZPR0d),
                    eF.intl.string(eF.t.cjPbpa),
                ],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, X.R)({
                        location: "SettingsRendererConfig",
                        autoTrackExposure: !1,
                    });
                    return e.length > 0;
                },
            },
            [ek.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t["pS+K2N"]), eF.intl.string(eF.t.nuFtHB)],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => ts !== eM._.STUDIO,
            },
            [ek.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t["sqUm+v"]), eF.intl.string(eF.t.nuFtHB)],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => to === eZ.pM.VOICE_ACTIVITY && tl,
            },
            [ek.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.e7LIiY)],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [ek.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.nzUc3N)],
                parent: ek.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [ek.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.ABjMWF)],
                parent: ek.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [ek.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.nzUc3N)],
                parent: ek.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [ek.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.LKzQSE)],
                parent: ek.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [ek.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.F122Gx)],
                parent: ek.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => Z.Z.supports(eZ.AN.VIDEO),
            },
            [ek.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t["3Ppr1t"])],
                parent: ek.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [ek.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.lZTUPj)],
                parent: ek.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => Z.Z.supports(eZ.AN.VIDEO),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t["8/udY2"])],
                parent: ek.s6.VOICE_AND_VIDEO,
            },
            [ek.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t["8/udY2"])],
                parent: ek.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => !(0, W.isWeb)(),
            },
            [ek.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t["8/udY2"])],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.Tceiq6)],
                parent: ek.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED,
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t["71Ve19"])],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => Z.Z.supports(eZ.AN.OPEN_H264),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.Sln58f)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.AxnPm5)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => "stable" !== K.ZP.releaseChannel && Z.Z.isExperimentalEncodersSupported(),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t["6I6GUl"])],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => tl,
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.iWTwu7)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t["/jwMtr"])],
                parent: ek.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [ek.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.OBwCXF)],
                parent: ek.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.t8QhiY), eF.intl.string(eF.t.hmfkCg)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Z.Z.isNoiseSuppressionSupported(),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.BbESsr)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Z.Z.isAdvancedVoiceActivitySupported(),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.cUMdHx)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Z.Z.isAutomaticGainControlSupported(),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.DFPXIC)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Z.Z.showBypassSystemInputProcessing(),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.uancuL)],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => Z.Z.supports(eZ.AN.QOS),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.oSdBvb)],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => Z.Z.supports(eZ.AN.ATTENUATION),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.wVBHr6)],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => Z.Z.shouldOfferManualSubsystemSelection(),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eG.oAB.VOICE,
                searchableTitles: [
                    eF.intl.string(eF.t.KDdjoq),
                    eF.intl.string(eF.t.NMCIf3),
                    eF.intl.string(eF.t.FeUKeH),
                ],
                parent: ek.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    Z.Z.supportsVideoHook() ||
                    Z.Z.supportsExperimentalSoundshare() ||
                    (Z.Z.supportsSystemScreensharePicker() && (0, W.isMac)()),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.GmWk2N), eF.intl.string(eF.t["Fj/xn5"])],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => Z.Z.supportsVideoHook(),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t["4I0qzc"])],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => Z.Z.supportsExperimentalSoundshare() && Z.Z.supportsHookSoundshare(),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.ie1mgY)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => Z.Z.supportsSystemScreensharePicker() && (0, W.isMac)(),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t["aP1N/v"])],
                parent: ek.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => W.isPlatformEmbedded,
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.OFpL3d)],
                parent: ek.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t["0CEP6e"])],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => z.Sb.getSetting(),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t["r6K+TE"])],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => Z.Z.isAecDumpSupported(),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t.U4FgFB)],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === K.ZP.releaseChannel || "development" === K.ZP.releaseChannel) &&
                    e1 &&
                    Z.Z.supports(eZ.AN.CONNECTION_REPLAY),
            },
            [ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t["726JHB"])],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    W.isPlatformEmbedded && Z.Z.supports(eZ.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [ek.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eG.oAB.VOICE,
                searchableTitles: [eF.intl.string(eF.t["/RXu6+"])],
                parent: ek.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [ek.s6.POGGERMODE]: {
                section: eG.oAB.POGGERMODE,
                searchableTitles: [eF.intl.string(eF.t.AtCukJ)],
                label: eF.intl.string(eF.t.AtCukJ),
                ariaLabel: eF.intl.string(eF.t.AtCukJ),
                element: P.Z,
                predicate: () => R.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: eY.poggermodeIcon,
                }),
            },
            [ek.s6.CHAT]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t["/VQax8"])],
                label: eF.intl.string(eF.t["/VQax8"]),
                ariaLabel: eF.intl.string(eF.t["/VQax8"]),
                element: eT.Z,
                url: eG.Z5c.SETTINGS("text"),
            },
            [ek.s6.CHAT_INLINE_MEDIA]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t.U68Dgo)],
                parent: ek.s6.CHAT,
            },
            [ek.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t.U47N1t)],
                parent: ek.s6.CHAT_INLINE_MEDIA,
            },
            [ek.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t.VP11Nj)],
                parent: ek.s6.CHAT_INLINE_MEDIA,
            },
            [ek.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t["5S2AKy"])],
                parent: ek.s6.CHAT_INLINE_MEDIA,
            },
            [ek.s6.CHAT_EMBEDS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t.PWZOn5)],
                parent: ek.s6.CHAT,
            },
            [ek.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t.xX0ZTE)],
                parent: ek.s6.CHAT_EMBEDS,
            },
            [ek.s6.CHAT_EMOJI]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t.sMOuub)],
                parent: ek.s6.CHAT,
            },
            [ek.s6.CHAT_EMOJI_REACTIONS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t.Iv24sr)],
                parent: ek.s6.CHAT_EMOJI,
            },
            [ek.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t["79qal5"])],
                parent: ek.s6.CHAT_EMOJI,
            },
            [ek.s6.CHAT_STICKERS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t["6NtAuL"])],
                parent: ek.s6.CHAT,
            },
            [ek.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t["29xPVV"])],
                parent: ek.s6.CHAT_STICKERS,
            },
            [ek.s6.CHAT_SOUNDMOJI]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t.EHlAMT)],
                parent: ek.s6.CHAT,
            },
            [ek.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t["CtYr+f"])],
                parent: ek.s6.CHAT_SOUNDMOJI,
            },
            [ek.s6.CHAT_TEXT_BOX]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t.afR0pK)],
                parent: ek.s6.CHAT,
            },
            [ek.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t.AqGrEB)],
                parent: ek.s6.CHAT_TEXT_BOX,
            },
            [ek.s6.CHAT_THREADS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t.B2panJ)],
                parent: ek.s6.CHAT,
            },
            [ek.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t.AInv5u)],
                parent: ek.s6.CHAT_THREADS,
            },
            [ek.s6.CHAT_SPOILERS]: {
                section: eG.oAB.TEXT,
                searchableTitles: [eF.intl.string(eF.t.QgwmV1)],
                parent: ek.s6.CHAT,
            },
            [ek.s6.NOTIFICATIONS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.HcoRu7)],
                label: eF.intl.string(eF.t.HcoRu7),
                ariaLabel: eF.intl.string(eF.t.HcoRu7),
                element: eE.Z,
                url: eG.Z5c.SETTINGS("notifications"),
            },
            [ek.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t["/0WClp"])],
                parent: ek.s6.NOTIFICATIONS,
            },
            [ek.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: ek.s6.NOTIFICATIONS,
            },
            [ek.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.VH8AIC)],
                parent: ek.s6.NOTIFICATIONS,
            },
            [ek.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.xSmFQE)],
                parent: ek.s6.NOTIFICATIONS,
                predicate: () => (0, W.isWindows)(),
            },
            [ek.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.z21l8P)],
                parent: ek.s6.NOTIFICATIONS,
            },
            [ek.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: ["New Notification Settings (Advanced, Staff Only)"],
                parent: ek.s6.NOTIFICATIONS,
                predicate: () => !1,
            },
            [ek.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: ["Restore most recent snapshot"],
                parent: ek.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [ek.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: ["Launch Migration"],
                parent: ek.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [ek.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: ["Toggle new system on/off"],
                parent: ek.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [ek.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.TTvjd3)],
                parent: ek.s6.NOTIFICATIONS,
            },
            [ek.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.VpSKeH)],
                parent: ek.s6.NOTIFICATIONS,
            },
            [ek.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.D9yVAA)],
                parent: ek.s6.NOTIFICATIONS,
            },
            [ek.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.u6dc5O)],
                parent: ek.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [ek.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.P8MG6u)],
                parent: ek.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [ek.s6.NOTIFICATIONS_SOUNDS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.MKWyKS)],
                parent: ek.s6.NOTIFICATIONS,
            },
            [ek.s6.NOTIFICATIONS_EMAILS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.TPchzM)],
                parent: ek.s6.NOTIFICATIONS,
            },
            [ek.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t["B75+xc"])],
                parent: ek.s6.NOTIFICATIONS_EMAILS,
            },
            [ek.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.sxn7lZ)],
                parent: ek.s6.NOTIFICATIONS_EMAILS,
            },
            [ek.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.EkxXhY)],
                parent: ek.s6.NOTIFICATIONS_EMAILS,
            },
            [ek.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.jNrkrK)],
                parent: ek.s6.NOTIFICATIONS_EMAILS,
            },
            [ek.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.E8g1l5)],
                parent: ek.s6.NOTIFICATIONS_EMAILS,
            },
            [ek.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.Ra9Pws)],
                parent: ek.s6.NOTIFICATIONS_EMAILS,
            },
            [ek.s6.NOTIFICATIONS_REACTIONS]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.Rq0NFh)],
                parent: ek.s6.NOTIFICATIONS,
            },
            [ek.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.wtk08f)],
                parent: ek.s6.NOTIFICATIONS,
                predicate: () => (0, U.JN)("SettingsRendererConfig"),
            },
            [ek.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eG.oAB.NOTIFICATIONS,
                searchableTitles: [eF.intl.string(eF.t.pW4TMj)],
                parent: ek.s6.NOTIFICATIONS,
            },
            [ek.s6.KEYBINDS]: {
                section: eG.oAB.KEYBINDS,
                searchableTitles: [eF.intl.string(eF.t.T9DA2N)],
                label: eF.intl.string(eF.t.T9DA2N),
                element: em.Z,
                url: eG.Z5c.SETTINGS("keybinds"),
            },
            [ek.s6.LANGUAGE]: {
                section: eG.oAB.LOCALE,
                searchableTitles: [eF.intl.string(eF.t.IHMsPj)],
                label: eF.intl.string(eF.t.IHMsPj),
                element: eg.Z,
                url: eG.Z5c.SETTINGS("language"),
            },
            [ek.s6.WINDOW_SETTINGS]: {
                section: eG.oAB.WINDOWS,
                searchableTitles: [eF.intl.string(eF.t.ZkDZoq)],
                label: eF.intl.string(eF.t.ZkDZoq),
                element: eC.Z,
                predicate: () => W.isPlatformEmbedded && (0, W.isWindows)(),
            },
            [ek.s6.LINUX_SETTINGS]: {
                section: eG.oAB.LINUX,
                searchableTitles: [eF.intl.string(eF.t["7pPjTU"])],
                label: eF.intl.string(eF.t["7pPjTU"]),
                element: e0,
                predicate: () => W.isPlatformEmbedded && (0, W.isLinux)(),
            },
            [ek.s6.STREAMER_MODE]: {
                section: eG.oAB.STREAMER_MODE,
                searchableTitles: [eF.intl.string(eF.t.S5GfOT)],
                label: eF.intl.string(eF.t.S5GfOT),
                ariaLabel: eF.intl.string(eF.t.S5GfOT),
                element: eI.Z,
                url: eG.Z5c.SETTINGS("streamer-mode"),
            },
            [ek.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eG.oAB.STREAMER_MODE,
                searchableTitles: [eF.intl.string(eF.t.bxGbHB)],
                parent: ek.s6.STREAMER_MODE,
            },
            [ek.s6.STREAMER_MODE_ENABLE]: {
                section: eG.oAB.STREAMER_MODE,
                searchableTitles: [eF.intl.string(eF.t.p9ZAJS)],
                parent: ek.s6.STREAMER_MODE,
            },
            [ek.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eG.oAB.STREAMER_MODE,
                searchableTitles: [eF.intl.string(eF.t.UpQziI)],
                parent: ek.s6.STREAMER_MODE,
            },
            [ek.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eG.oAB.STREAMER_MODE,
                searchableTitles: [eF.intl.string(eF.t.q7WNGh)],
                parent: ek.s6.STREAMER_MODE,
            },
            [ek.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eG.oAB.STREAMER_MODE,
                searchableTitles: [eF.intl.string(eF.t["1CWknJ"])],
                parent: ek.s6.STREAMER_MODE,
            },
            [ek.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eG.oAB.STREAMER_MODE,
                searchableTitles: [eF.intl.string(eF.t.qmYiYW)],
                parent: ek.s6.STREAMER_MODE,
            },
            [ek.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eG.oAB.STREAMER_MODE,
                searchableTitles: [eF.intl.string(eF.t["iA81+f"])],
                parent: ek.s6.STREAMER_MODE,
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
            [ek.s6.SETTINGS_ADVANCED]: {
                section: eG.oAB.ADVANCED,
                searchableTitles: [eF.intl.string(eF.t["8/udY2"])],
                label: eF.intl.string(eF.t["8/udY2"]),
                ariaLabel: eF.intl.string(eF.t["8/udY2"]),
                element: er.ZP,
            },
            [ek.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eG.oAB.ADVANCED,
                searchableTitles: [eF.intl.string(eF.t.ObIb1d)],
                parent: ek.s6.SETTINGS_ADVANCED,
                predicate: () => H.wS,
            },
            [ek.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eG.oAB.ADVANCED,
                searchableTitles: [eF.intl.string(eF.t["eOC/Fx"])],
                parent: ek.s6.SETTINGS_ADVANCED,
                predicate: () => W.isPlatformEmbedded,
            },
            [ek.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eG.oAB.ADVANCED,
                searchableTitles: [eF.intl.string(eF.t.fi3UQE)],
                parent: ek.s6.SETTINGS_ADVANCED,
                predicate: () => e6,
            },
            [ek.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eG.oAB.ADVANCED,
                searchableTitles: [eF.intl.string(eF.t.erOqlp)],
                parent: ek.s6.SETTINGS_ADVANCED,
                predicate: () => e9,
            },
            [ek.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eG.oAB.ADVANCED,
                searchableTitles: [eF.intl.string(eF.t.qDZryM)],
                parent: ek.s6.SETTINGS_ADVANCED,
            },
            [ek.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eG.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: ek.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    g.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [ek.s6.ACTIVITY_PRIVACY]: {
                section: eG.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eF.intl.string(eF.t.Cq98yM)],
                label: eF.intl.string(eF.t.Cq98yM),
                ariaLabel: eF.intl.string(eF.t.Cq98yM),
                element: en.Z,
                predicate: () => !eW,
                url: eG.Z5c.SETTINGS("activity-privacy"),
            },
            [ek.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eW ? eG.oAB.GAMES : eG.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eF.intl.string(eF.t["8ka8lp"])],
                parent: eW ? ek.s6.GAMES_ACTIVITY_PRIVACY : ek.s6.ACTIVITY_PRIVACY,
            },
            [ek.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eW ? eG.oAB.GAMES : eG.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eF.intl.string(eF.t.VOszPD)],
                parent: eW ? ek.s6.GAMES_ACTIVITY_PRIVACY : ek.s6.ACTIVITY_PRIVACY,
            },
            [ek.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eW ? eG.oAB.GAMES : eG.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ek.CF],
                parent: eW ? ek.s6.GAMES_ACTIVITY_PRIVACY : ek.s6.ACTIVITY_PRIVACY,
            },
            [ek.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eG.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eF.intl.string(eF.t["4F2KoK"])],
                parent: ek.s6.ACTIVITY_PRIVACY,
            },
            [ek.s6.REGISTERED_GAMES]: {
                section: eG.oAB.REGISTERED_GAMES,
                searchableTitles: [eF.intl.string(eF.t.AVDyEh)],
                label: eF.intl.string(eF.t.AVDyEh),
                element: e_.Z,
                predicate: () => !eW && (0, ew.Jw)(),
            },
            [ek.s6.OVERLAY]: {
                section: eG.oAB.OVERLAY,
                searchableTitles: [eF.intl.string(eF.t["9cb1U1"]), eF.intl.string(eF.t.HcoRu7)],
                label: eF.intl.string(eF.t["9cb1U1"]),
                element: eb.Z,
                predicate: () => !eW && A,
            },
            [ek.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, E.Z)(!0),
                searchableTitles: [eF.intl.string(eF.t.LRmNAg)],
                label: eF.intl.string(eF.t.LRmNAg),
            },
            [ek.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    V.default.track(eG.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, Y.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                V.default.track(eG.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, p.Z)(e);
                            },
                        });
                },
                searchableTitles: [eF.intl.string(eF.t.sMEktb)],
                label: eF.intl.string(eF.t.sMEktb),
                ariaLabel: eF.intl.string(eF.t.sMEktb),
            },
            [ek.s6.HYPESQUAD]: {
                section: eG.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eF.intl.string(eF.t["k0R+4e"])],
                label: eF.intl.string(eF.t["k0R+4e"]),
                element: ep.Z,
                predicate: () => !tn,
            },
            [ek.s6.TOWNHALL]: {
                section: eG.oAB.TOWNHALL,
                searchableTitles: [eF.intl.string(eF.t.dnZNER)],
                label: eF.intl.string(eF.t.dnZNER),
                predicate: () => tn,
                onClick: () => {
                    (0, p.Z)("https://discord.gg/discord-townhall"), (0, eN.default)();
                },
            },
            [ek.s6.EXPERIMENTS]: {
                section: eG.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: eP.Z,
                predicate: () => G.Z.isDeveloper,
                url: eG.Z5c.SETTINGS("experiments"),
            },
            [ek.s6.DEVELOPER_OPTIONS]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: ed.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: ek.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: ek.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: ek.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: ek.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: ek.s6.DEVELOPER_OPTIONS,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: ek.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: ek.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: ek.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e1 && G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: ek.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e1 && G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [ek.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: ek.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e1 && G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Toggleable Components"],
                parent: ek.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e1 && G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: ek.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e1 && G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: ek.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e1 && G.Z.isDeveloper && B.default.layoutDebuggingEnabled,
            },
            [ek.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e1 && G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e1 && G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: ek.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: ek.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: ek.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: ek.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: ek.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => m.q && G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: ek.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: ek.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: ek.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: ek.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eG.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: ek.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.REVENUE_STORYBOOK]: {
                section: eG.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: [
                    "Revenue Storybook",
                    "Payment Components",
                    "Orb Components",
                    "Virtual Currency",
                    "Nitro Components",
                ],
                label: "Revenue Storybook",
                element: ej.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.PAYMENT_COMPONENTS]: {
                section: eG.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Payment Components"],
                label: "Payment Components",
                element: ej.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.ORB_COMPONENTS]: {
                section: eG.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Orb Components"],
                label: "Orb Components",
                element: ej.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.NITRO_COMPONENTS]: {
                section: eG.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Nitro Components"],
                label: "Nitro Components",
                element: ej.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.TEXT_PLAYGROUND]: {
                section: eG.oAB.TEXT_PLAYGROUND,
                searchableTitles: ["Text Playground"],
                label: "Text Playground",
                element: eS.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DESIGN_SYSTEMS]: {
                section: eG.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Design Systems"],
                label: "Design Systems",
                element: eu.Z,
                predicate: () => G.Z.isDeveloper,
                url: eG.Z5c.SETTINGS("design-systems"),
            },
            [ek.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eG.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Colors"],
                label: "Colors",
                element: eu.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.ANIMATION_TESTING]: {
                section: eG.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Animation Testing"],
                label: "Animation Testing",
                element: eu.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eG.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Components"],
                label: "Components",
                element: eu.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.TEXT_COMPONENTS]: {
                section: eG.oAB.TEXT_COMPONENT,
                searchableTitles: ["Text Components"],
                label: "Text Components",
                element: $.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.SHOP_KEEPER]: {
                section: eG.oAB.SHOP_KEEPER,
                searchableTitles: ["Shop Keeper"],
                label: "Shop Keeper",
                element: I.Z,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.QUEST_PREVIEW_TOOL_2]: {
                section: eG.oAB.QUEST_PREVIEW_TOOL_2,
                searchableTitles: ["Quest Preview Tool 2"],
                label: "Quest Preview Tool 2",
                element: () => (0, r.jsx)(j.Z, { questId: null == b ? void 0 : b.quest_id }),
                predicate: () => (0, L.T)({ location: eB.dr.QUEST_PREVIEW_TOOL_2 }),
            },
            [ek.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM]: {
                section: f.ID.CUSTOM,
                searchableTitles: eR.Y,
                label: "Developer Education",
                element: eR.$,
                predicate: () => G.Z.isDeveloper,
            },
            [ek.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            eq(
                                eK(
                                    {
                                        header: eF.intl.string(eF.t["2jxGen"]),
                                        confirmText: eF.intl.string(eF.t["2jxGen"]),
                                        cancelText: eF.intl.string(eF.t["ETE/oK"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: eF.intl.string(eF.t.SUnWBA),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: eF.intl.string(eF.t["2jxGen"]),
                ariaLabel: eF.intl.string(eF.t["2jxGen"]),
                icon: (0, r.jsx)(s.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [ek.s6.SOCIAL_LINKS]: {
                section: f.ID.CUSTOM,
                element: J.Z,
            },
            [ek.s6.CLIENT_DEBUG_INFO]: {
                section: f.ID.CUSTOM,
                element: q.Z,
            },
        });
    };
