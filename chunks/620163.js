n.d(t, {
    $Z: () => e1,
    OF: () => e3,
    W8: () => e4,
    c$: () => e2,
    iE: () => e5,
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
    j = n(14676),
    M = n(652380),
    k = n(877109),
    U = n(145158),
    G = n(172416),
    B = n(462354),
    Z = n(906467),
    F = n(857192),
    V = n(131951),
    H = n(25990),
    Y = n(626135),
    W = n(572004),
    K = n(49012),
    z = n(358085),
    q = n(998502),
    X = n(695346),
    Q = n(604227),
    J = n(321614),
    $ = n(498639),
    ee = n(748717),
    et = n(419636),
    en = n(799071),
    er = n(154022),
    ei = n(393681),
    ea = n(309739),
    eo = n(64914),
    es = n(501348),
    el = n(795594),
    ec = n(443702),
    eu = n(327192),
    ed = n(949493),
    ef = n(675047),
    e_ = n(177508),
    ep = n(956699),
    eh = n(54942),
    em = n(293389),
    eg = n(88624),
    eE = n(387747),
    eb = n(389650),
    ey = n(649157),
    eO = n(593648),
    ev = n(327885),
    eI = n(595242),
    eT = n(463153),
    eS = n(36192),
    eA = n(889029),
    eC = n(400287),
    eN = n(554042),
    eR = n(936982),
    eP = n(200645),
    ew = n(342386),
    eD = n(924983),
    ex = n(287490),
    eL = n(706060),
    ej = n(168308),
    eM = n(277329),
    ek = n(273927),
    eU = n(604224),
    eG = n(43434),
    eB = n(333576),
    eZ = n(345655),
    eF = n(726985),
    eV = n(583139),
    eH = n(981631),
    eY = n(46140),
    eW = n(65154),
    eK = n(388032),
    ez = n(693450),
    eq = n(345909),
    eX = n(202323);
function eQ(e, t, n) {
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
function eJ(e) {
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
                eQ(e, t, n[t]);
            });
    }
    return e;
}
function e$(e, t) {
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
function e0(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : e$(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let e1 = () => {
        let e = [a.z.CLIENT_THEMES_SETTINGS_BADGE, a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
        return (
            b.Mc.getCurrentConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            h.n.getConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE),
            e
        );
    },
    e2 = () => {
        let e = e1(),
            [t] = (0, S.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: eK.intl.string(eK.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ||
                t === a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE
              ? (0, r.jsx)(s.IGR, { text: eK.intl.string(eK.t.y2b7CA) })
              : null;
    },
    e3 = () => {
        let e = [];
        return (
            (0, G.h)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            A.J.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    e4 = () => {
        let e = e3(),
            [t] = (0, S.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: eK.intl.string(eK.t.y2b7CA) })
            : null;
    },
    e8 = eP.Z,
    e5 = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: h,
            searchParams: b,
            numOfPendingFamilyRequests: S,
            isOverlaySupported: A,
            isClipsBetaTagShowing: G = !1,
            shouldMergeGameSettings: eQ,
            isKeywordFilteringEnabled: e$,
            isStaff: e5,
            isInappropriateConversationWarningEnabled: e6,
            isInapproprateConversationsDefaultOn: e7,
            paymentsBlocked: e9,
            isEligibleForQuests: te,
            isStricterMessageRequestsEnabled: tt,
            hasLibraryApplication: tn,
            hasTOTPEnabled: tr,
            developerMode: ti,
            isAdultUser: ta,
            hasSecureFramesVerifiedUserIds: to,
            hypeSquadRemoved: ts,
            hasIgnoredUsers: tl,
            hasBlockedUsers: tc,
            isEligibleForSensitiveContentDefaults: tu,
            inputMode: td,
            activeInputProfile: tf,
            isInputProfileCustom: t_,
            isDataUsage3PToggleEnabled: tp,
        } = e;
        return Object.freeze({
            [eF.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: eT.Z,
            },
            [eF.s6.ACCOUNT_SECURITY_TAB]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eK.intl.string(eK.t.Am9YHh)],
                label: eK.intl.string(eK.t.Am9YHh),
            },
            [eF.s6.ACCOUNT]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eK.intl.string(eK.t["JAIM/v"])],
                label: eK.intl.string(eK.t["JAIM/v"]),
                ariaLabel: eK.intl.string(eK.t["JAIM/v"]),
                element: ei.Z,
                url: eH.Z5c.SETTINGS("account"),
            },
            [eF.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eK.intl.string(eK.t.LYju5O)],
                parent: eF.s6.ACCOUNT,
                section: eH.oAB.ACCOUNT,
            },
            [eF.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eK.intl.string(eK.t["9AjdkJ"])],
                section: eH.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PROFILE,
            },
            [eF.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eK.intl.string(eK.t.Ulqq6O)],
                section: eH.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PROFILE,
            },
            [eF.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    eK.intl.string(eK.t["/52UY2"]),
                    eK.intl.string(eK.t.sK0dmJ),
                    eK.intl.string(eK.t.XxRj7e),
                    eK.intl.string(eK.t.yNGjyM),
                    eK.intl.string(eK.t.KPGVWl),
                ],
                section: eH.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PROFILE,
                predicate: () => tu,
            },
            [eF.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eK.intl.string(eK.t["+JkHPz"])],
                section: eH.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PROFILE,
            },
            [eF.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eK.intl.string(eK.t.oP5zGB)],
                section: eH.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PROFILE,
            },
            [eF.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eK.intl.string(eK.t.pKSjEh)],
                section: eH.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT,
            },
            [eF.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eK.intl.string(eK.t["FRep5+"])],
                section: eH.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eF.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eK.intl.string(eK.t["7qKDrK"])],
                section: eH.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eK.intl.string(eK.t.m0FidH)],
                section: eH.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eF.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eK.intl.string(eK.t.cDgKtb)],
                section: eH.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !tr,
            },
            [eF.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eK.intl.string(eK.t["D+aE7u"])],
                section: eH.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => tr,
            },
            [eF.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eK.intl.string(eK.t.fZSi1N)],
                section: eH.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eF.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eK.intl.string(eK.t.uHAJ5u)],
                section: eH.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eF.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eK.intl.string(eK.t.vrOCCg)],
                section: eH.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eF.s6.ACCOUNT_REMOVAL]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eK.intl.string(eK.t.ZKsIkp)],
                parent: eF.s6.ACCOUNT,
            },
            [eF.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eK.intl.string(eK.t.jf5GGR)],
                parent: eF.s6.ACCOUNT_REMOVAL,
            },
            [eF.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eK.intl.string(eK.t["8lQ2ra"])],
                parent: eF.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eF.s6.GAMES]: {
                section: eH.oAB.GAMES,
                searchableTitles: [eK.intl.string(eK.t.URyqtL)],
                label: eK.intl.string(eK.t.URyqtL),
                ariaLabel: eK.intl.string(eK.t.URyqtL),
                element: eM.Z,
                predicate: () => eQ,
            },
            [eF.s6.GAMES_MY_GAMES]: {
                section: eH.oAB.GAMES,
                searchableTitles: [eK.intl.string(eK.t["5DMgp6"])],
                parent: eF.s6.GAMES,
            },
            [eF.s6.GAMES_CLIPS]: {
                section: eH.oAB.GAMES,
                searchableTitles: [eK.intl.string(eK.t.z2jK6e)],
                parent: eF.s6.GAMES,
            },
            [eF.s6.GAMES_OVERLAY]: {
                section: eH.oAB.GAMES,
                searchableTitles: [eK.intl.string(eK.t["9cb1U1"])],
                parent: eF.s6.GAMES,
            },
            [eF.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eH.oAB.GAMES,
                searchableTitles: [eK.intl.string(eK.t.Cq98yM)],
                parent: eF.s6.GAMES,
            },
            [eF.s6.PROFILE_CUSTOMIZATION]: {
                section: eH.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [eK.intl.string(eK.t["vi7f+v"])],
                label: eK.intl.string(eK.t["vi7f+v"]),
                ariaLabel: eK.intl.string(eK.t["vi7f+v"]),
                element: x.Z,
                newIndicator: (0, r.jsx)(e4, {}),
                newIndicatorDismissibleContentTypes: [...e3()],
                notice: {
                    stores: [H.Z, N.Z],
                    element: D.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, C.It)(), (0, u.P6)(), d.Z.clearSubsection(eH.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eH.Z5c.SETTINGS("profile-customization"),
            },
            [eF.s6.PROFILE_DISPLAY_NAME]: {
                section: eH.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eK.intl.string(eK.t["9AjdkJ"])],
                parent: eF.s6.PROFILE_CUSTOMIZATION,
            },
            [eF.s6.PROFILE_USER_PROFILE]: {
                section: eH.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eK.intl.string(eK.t["2p07FR"]), eK.intl.string(eK.t["7vhiqq"])],
                parent: eF.s6.PROFILE_CUSTOMIZATION,
            },
            [eF.s6.PROFILE_SERVER_PROFILES]: {
                section: eH.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eK.intl.string(eK.t.kPHroa)],
                parent: eF.s6.PROFILE_CUSTOMIZATION,
            },
            [eF.s6.CONTENT_SOCIAL]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                label: eK.intl.string(eK.t["+o1pDQ"]),
                searchableTitles: [eK.intl.string(eK.t["+o1pDQ"])],
                ariaLabel: eK.intl.string(eK.t["+o1pDQ"]),
                element: ed.Z,
                url: eH.Z5c.SETTINGS("content-and-social"),
            },
            [eF.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t["+o1pDQ"]), eK.intl.string(eK.t["/7xJCA"])],
                parent: eF.s6.CONTENT_SOCIAL,
            },
            [eF.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t["+o1pDQ"]), eK.intl.string(eK.t["/7xJCA"])],
                parent: eF.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eF.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.YpCiMj)],
                parent: eF.s6.CONTENT_SOCIAL,
            },
            [eF.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                label: eK.intl.string(eK.t.YpCiMj),
                searchableTitles: [eK.intl.string(eK.t.YpCiMj)],
                ariaLabel: eK.intl.string(eK.t.YpCiMj),
                parent: eF.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eH.Z5c.SETTINGS(eH.oAB.CONTENT_AND_SOCIAL, eV.C),
            },
            [eF.s6.DATA_PRIVACY]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                label: eK.intl.string(eK.t.OAuOHB),
                searchableTitles: [eK.intl.string(eK.t.OAuOHB)],
                ariaLabel: eK.intl.string(eK.t.OAuOHB),
                element: ef.Z,
                url: eH.Z5c.SETTINGS("data-and-privacy"),
            },
            [eF.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eH.oAB.ACCOUNT,
                searchableTitles: [eK.intl.string(eK.t["Vov/9v"])],
                parent: eF.s6.ACCOUNT,
            },
            [eF.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.WWaFn5)],
                parent: eF.s6.DATA_PRIVACY,
                predicate: () => (0, z.isDesktop)(),
            },
            [eF.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t["opi/XF"])],
                parent: eF.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.xVRG4O)],
                parent: eF.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eF.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.fyA119)],
                parent: eF.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eF.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.fyA119)],
                parent: eF.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eF.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t["/U8Iwc"])],
                parent: eF.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eF.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t["ms+TmZ"])],
                parent: eF.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eF.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t["y62Z/f"])],
                parent: eF.s6.CONTENT_SOCIAL,
            },
            [eF.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.SRZyHh)],
                parent: eF.s6.DATA_PRIVACY,
            },
            [eF.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eK.intl.string(eK.t.uEz8JC),
                    eK.intl.string(eK.t["N/oRIy"]),
                    eK.intl.string(eK.t.QVdYsL),
                    eK.intl.string(eK.t["aWD+tr"]),
                    eK.intl.string(eK.t["5mnTa2"]),
                ],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eF.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eK.intl.string(eK.t["Hj/Bur"]),
                    eK.intl.string(eK.t["N/oRIy"]),
                    eK.intl.string(eK.t.QVdYsL),
                    eK.intl.string(eK.t["aWD+tr"]),
                    eK.intl.string(eK.t["5mnTa2"]),
                    eK.intl.string(eK.t.K0OWPz),
                ],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eF.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eK.intl.string(eK.t["Hj/Bur"]),
                    eK.intl.string(eK.t["N/oRIy"]),
                    eK.intl.string(eK.t.QVdYsL),
                    eK.intl.string(eK.t["aWD+tr"]),
                    eK.intl.string(eK.t["5mnTa2"]),
                ],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eF.s6.GORE_MEDIA_REDACTION]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eK.intl.string(eK.t["Hj/Bur"]),
                    eK.intl.string(eK.t["N/oRIy"]),
                    eK.intl.string(eK.t.QVdYsL),
                    eK.intl.string(eK.t["aWD+tr"]),
                    eK.intl.string(eK.t.K0OWPz),
                ],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eF.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eK.intl.string(eK.t.JzaP4u),
                    eK.intl.string(eK.t.H9XOl5),
                    eK.intl.string(eK.t.k4W40N),
                ],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eF.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t["L+yTsb"])],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eF.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.XahVjo)],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eF.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                parent: eF.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eF.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.RAQUSE), eK.intl.string(eK.t.wbYDfX)],
                parent: eF.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eF.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t["3o2ojo"])],
                parent: eF.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !tt,
            },
            [eF.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.OLwZDQ)],
                parent: eF.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eF.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.wBkwu7)],
                parent: eF.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eF.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.XuADY2)],
                parent: eF.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eF.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.MNKzys)],
                parent: eF.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eF.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.VkS7YW), eK.intl.string(eK.t.sJYh5u)],
                parent: eF.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eF.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.CyLYKS)],
                parent: eF.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                predicate: () => tp,
            },
            [eF.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.CF],
                parent: eF.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eF.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.dmBSKi)],
                parent: eF.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eF.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t["1UaUy8"]), eK.intl.string(eK.t["xIk/iI"])],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e$,
            },
            [eF.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eK.intl.string(eK.t.qFsx5u)],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e6 && !ta && !e7,
            },
            [eF.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t["5b3FND"])],
                parent: eF.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => to,
            },
            [eF.s6.PRIVACY_FAMILY_CENTER]: {
                section: eH.oAB.FAMILY_CENTER,
                searchableTitles: [eK.intl.string(eq.default.gntCQU)],
                label: eK.intl.string(eq.default.gntCQU),
                ariaLabel: eK.intl.string(eq.default.gntCQU),
                element: eh.Z,
                badgeCount: S,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eK.intl.string(eK.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eH.Z5c.SETTINGS("family-center"),
            },
            [eF.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eH.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.BG7Qsb)],
                parent: eF.s6.DATA_PRIVACY,
            },
            [eF.s6.AUTHORIZED_APPS]: {
                section: eH.oAB.AUTHORIZED_APPS,
                searchableTitles: [eK.intl.string(eK.t["f6kk+v"])],
                label: eK.intl.string(eK.t["f6kk+v"]),
                element: el.Z,
                url: eH.Z5c.SETTINGS("authorized-apps"),
            },
            [eF.s6.SESSIONS]: {
                section: eH.oAB.SESSIONS,
                searchableTitles: [eK.intl.string(eK.t["+1h0k5"])],
                label: eK.intl.string(eK.t["+1h0k5"]),
                ariaLabel: eK.intl.string(eK.t["+1h0k5"]),
                element: eS.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
            },
            [eF.s6.CONNECTIONS]: {
                section: eH.oAB.CONNECTIONS,
                searchableTitles: [eK.intl.string(eK.t["3fe7U1"])],
                label: eK.intl.string(eK.t["3fe7U1"]),
                ariaLabel: eK.intl.string(eK.t["3fe7U1"]),
                element: eu.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eH.Z5c.SETTINGS("connections"),
            },
            [eF.s6.THIRD_PARTY_ACCESS]: {
                section: eH.oAB.CONNECTIONS,
                searchableTitles: [
                    eK.intl.string(eK.t["Ig/XFR"]),
                    eK.intl.string(eK.t["3fe7U1"]),
                    eK.intl.string(eK.t["f6kk+v"]),
                ],
                label: eK.intl.string(eK.t["Ig/XFR"]),
                parent: eF.s6.CONNECTIONS,
                element: eR.Z,
            },
            [eF.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eH.oAB.CONNECTIONS,
                searchableTitles: [eK.intl.string(eK.t["+/hZMz"])],
                parent: eF.s6.CONNECTIONS,
                element: eu.Z,
            },
            [eF.s6.CLIPS]: {
                section: eH.oAB.CLIPS,
                searchableTitles: [eK.intl.string(eK.t.z2jK6e)],
                label: eK.intl.string(eK.t.z2jK6e),
                ariaLabel: eK.intl.string(eK.t.z2jK6e),
                icon: G ? (0, r.jsx)(y.Z, {}) : void 0,
                element: O.Z,
                predicate: () => !eQ,
                url: eH.Z5c.SETTINGS("clips"),
            },
            [eF.s6.RESTRICTED_USERS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                parent: eF.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eK.intl.string(eK.t["3wRorq"]),
                element: ek.ZP,
                predicate: () => tl || tc,
            },
            [eF.s6.BLOCKED_USERS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                parent: eF.s6.RESTRICTED_USERS,
                label: eK.intl.string(eK.t.PFOUKS),
                searchableTitles: [eK.intl.string(eK.t.PFOUKS)],
                element: ek.GF,
                predicate: () => tc,
            },
            [eF.s6.IGNORED_USERS]: {
                section: eH.oAB.CONTENT_AND_SOCIAL,
                parent: eF.s6.RESTRICTED_USERS,
                searchableTitles: [eK.intl.string(eK.t["93ZDWF"])],
                label: eK.intl.string(eK.t["93ZDWF"]),
                element: ek.yo,
                predicate: () => tl,
            },
            [eF.s6.PREMIUM]: {
                section: eH.oAB.PREMIUM,
                ariaLabel: eK.intl.string(eK.t.Ipxkoq),
                searchableTitles: [eK.intl.string(eK.t.Ipxkoq)],
                label: eK.intl.string(eK.t.Ipxkoq),
                element: ee.Z,
                className: eX.premiumTab,
            },
            [eF.s6.GUILD_BOOSTING]: {
                section: eH.oAB.GUILD_BOOSTING,
                searchableTitles: [eK.intl.string(eK.t["+CbP2t"])],
                label: eK.intl.string(eK.t["+CbP2t"]),
                element: eI.Z,
            },
            [eF.s6.SUBSCRIPTIONS]: {
                section: eH.oAB.SUBSCRIPTIONS,
                ariaLabel: eK.intl.string(eK.t.trSpHR),
                searchableTitles: [eK.intl.string(eK.t.trSpHR)],
                label: eK.intl.string(eK.t.trSpHR),
                element: w.Z,
                icon: h
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eF.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eH.oAB.SUBSCRIPTIONS,
                searchableTitles: [eK.intl.string(eK.t["2GKrvr"])],
                parent: eF.s6.SUBSCRIPTIONS,
            },
            [eF.s6.GIFT_INVENTORY]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eK.intl.string(eK.t["jcSP+v"])],
                label: eK.intl.string(eK.t["jcSP+v"]),
                element: eE.Z,
                ariaLabel: eK.intl.string(eK.t["jcSP+v"]),
                badgeCount: t,
            },
            [eF.s6.GIFT_CODE_REDEMPTION]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eK.intl.string(eK.t["il+VCg"])],
                parent: eF.s6.GIFT_INVENTORY,
                predicate: () => !e9,
            },
            [eF.s6.GIFT_INVENTORY_QUESTS]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eK.intl.string(eK.t.JALI2N)],
                parent: eF.s6.GIFT_INVENTORY,
                predicate: () => te,
            },
            [eF.s6.GIFT_INVENTORY_LIST]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eK.intl.string(eK.t["9KeUbW"])],
                parent: eF.s6.GIFT_INVENTORY,
                predicate: () => !e9,
            },
            [eF.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eH.oAB.INVENTORY,
                searchableTitles: [eK.intl.string(eK.t.vwMEHR)],
                parent: eF.s6.GIFT_INVENTORY,
                predicate: () => e9,
            },
            [eF.s6.BILLING]: {
                section: eH.oAB.BILLING,
                searchableTitles: [eK.intl.string(eK.t.oeUm2t)],
                label: eK.intl.string(eK.t.oeUm2t),
                ariaLabel: eK.intl.string(eK.t.oeUm2t),
                element: ec.Z,
            },
            [eF.s6.BILLING_PAYMENT_METHODS]: {
                section: eH.oAB.BILLING,
                searchableTitles: [eK.intl.string(eK.t.W26xGR)],
                parent: eF.s6.BILLING,
            },
            [eF.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eH.oAB.BILLING,
                searchableTitles: [eK.intl.string(eK.t.obLrcH)],
                parent: eF.s6.BILLING,
            },
            [eF.s6.APPEARANCE]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eK.intl.string(eK.t["iHH+k5"])],
                label: eK.intl.string(eK.t["iHH+k5"]),
                ariaLabel: eK.intl.string(eK.t["iHH+k5"]),
                element: es.Z,
                newIndicator: (0, r.jsx)(e2, {}),
                newIndicatorDismissibleContentTypes: e1(),
                url: eH.Z5c.SETTINGS("appearance"),
            },
            [eF.s6.APPEARANCE_THEME]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eK.intl.string(eK.t.Ksh3io)],
                parent: eF.s6.APPEARANCE,
            },
            [eF.s6.APPEARANCE_COLOR]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eK.intl.string(eK.t.OCOOiI)],
                parent: eF.s6.APPEARANCE_THEME,
            },
            [eF.s6.APPEARANCE_ICON]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eK.intl.string(eK.t.RPh2oq)],
                parent: eF.s6.APPEARANCE_THEME,
            },
            [eF.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eK.intl.string(eK.t.ZEoGMT)],
                parent: eF.s6.APPEARANCE,
            },
            [eF.s6.APPEARANCE_LIST_SPACING]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eF.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eK.intl.string(eK.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
            },
            [eF.s6.APPEARANCE_SCALING_SPACING]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [eK.intl.string(eK.t.qPOqoK)],
                parent: eF.s6.APPEARANCE,
            },
            [eF.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eH.oAB.APPEARANCE,
                searchableTitles: [
                    eK.intl.string(eK.t.dyamEB),
                    eK.intl.string(eK.t.p8NOws),
                    eK.intl.string(eK.t["+o/sOj"]),
                ],
                parent: eF.s6.APPEARANCE,
                predicate: () =>
                    U.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eF.s6.ACCESSIBILITY]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.G0neg4)],
                label: eK.intl.string(eK.t.G0neg4),
                ariaLabel: eK.intl.string(eK.t.G0neg4),
                element: er.Z,
                url: eH.Z5c.SETTINGS("accessibility"),
            },
            [eF.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.aZlePj)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_SATURATION]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t["5PWWCQ"])],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.bQCodH)],
                parent: eF.s6.ACCESSIBILITY_SATURATION,
            },
            [eF.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.OLZFBw)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t["+IsihY"])],
                parent: eF.s6.ACCESSIBILITY,
                predicate: () => (0, v.l)("SettingsRendererConfig"),
            },
            [eF.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.uSOPWl)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(ez.default["2gFUEx"])],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.BT8Bmp)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t["sSY+mJ"])],
                parent: eF.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eF.s6.ACCESSIBILITY_CONTRAST]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.TYyfOz)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.cguieX)],
                parent: eF.s6.ACCESSIBILITY_CONTRAST,
            },
            [eF.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.e3TR1d)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.b3XBzs)],
                parent: eF.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eF.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.Iayoh4)],
                parent: eF.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eF.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.iIaOlZ)],
                parent: eF.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eF.s6.ACCESSIBILITY_STICKERS]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t["6NtAuL"])],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_MESSAGES]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.onqU6u)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t["3Fztn5"])],
                parent: eF.s6.ACCESSIBILITY_MESSAGES,
            },
            [eF.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.TZ2hZG)],
                parent: eF.s6.ACCESSIBILITY_MESSAGES,
            },
            [eF.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.VpSKeH)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.qvTIwc)],
                parent: eF.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eF.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eK.intl.string(eK.t.lsW5Eh)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eH.oAB.ACCESSIBILITY,
                searchableTitles: [eF.CF],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.VOICE_AND_VIDEO]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.B1fFpa)],
                label: eK.intl.string(eK.t.B1fFpa),
                ariaLabel: eK.intl.string(eK.t.B1fFpa),
                element: eU.Z,
                predicate: () => V.Z.isSupported(),
                url: eH.Z5c.SETTINGS("voice"),
            },
            [eF.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.K3lovL), eK.intl.string(eK.t.NiTd0d)],
                parent: eF.s6.VOICE_AND_VIDEO,
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.FlNoSU)],
                parent: eF.s6.VOICE_AND_VIDEO,
            },
            [eF.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.ABjMWF)],
                parent: eF.s6.VOICE_AND_VIDEO,
            },
            [eF.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.OFpL3d)],
                parent: eF.s6.VOICE_AND_VIDEO,
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.KDdjoq), eK.intl.string(eK.t.FeUKeH)],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eF.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.K3lovL), eK.intl.string(eK.t.NiTd0d)],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eF.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eH.oAB.VOICE,
                searchableTitles: [
                    eK.intl.string(eK.t.hHMYbW),
                    eK.intl.string(eK.t.dl18zc),
                    eK.intl.string(eK.t.nuFtHB),
                    eK.intl.string(eK.t["3182VF"]),
                    eK.intl.string(eK.t["DGq/PT"]),
                ],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eF.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [
                    eK.intl.string(eK.t.OX2Bnp),
                    eK.intl.string(eK.t.eATD2N),
                    eK.intl.string(eK.t.nuFtHB),
                    eK.intl.string(eK.t["3182VF"]),
                    eK.intl.string(eK.t["DGq/PT"]),
                ],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eF.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.gyljWF), eK.intl.string(eK.t.nuFtHB)],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eF.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eH.oAB.VOICE,
                searchableTitles: [
                    eK.intl.string(eK.t.LM3U3t),
                    eK.intl.string(eK.t.nuFtHB),
                    eK.intl.string(eK.t.VZPR0d),
                    eK.intl.string(eK.t.cjPbpa),
                ],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, J.R)({
                        location: "SettingsRendererConfig",
                        autoTrackExposure: !1,
                    });
                    return e.length > 0;
                },
            },
            [eF.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t["pS+K2N"]), eK.intl.string(eK.t.nuFtHB)],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tf !== eZ._.STUDIO,
            },
            [eF.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t["sqUm+v"]), eK.intl.string(eK.t.nuFtHB)],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => td === eW.pM.VOICE_ACTIVITY && t_,
            },
            [eF.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.e7LIiY)],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eF.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.nzUc3N)],
                parent: eF.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eF.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.ABjMWF)],
                parent: eF.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eF.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.nzUc3N)],
                parent: eF.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.LKzQSE)],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.F122Gx)],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => V.Z.supports(eW.AN.VIDEO),
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t["3Ppr1t"])],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.lZTUPj)],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => V.Z.supports(eW.AN.VIDEO),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t["8/udY2"])],
                parent: eF.s6.VOICE_AND_VIDEO,
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t["8/udY2"])],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => !(0, z.isWeb)(),
            },
            [eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t["8/udY2"])],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.Tceiq6)],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t["71Ve19"])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => V.Z.supports(eW.AN.OPEN_H264),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.Sln58f)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.AxnPm5)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => "stable" !== q.ZP.releaseChannel && V.Z.isExperimentalEncodersSupported(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t["6I6GUl"])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => t_,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.iWTwu7)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t["/jwMtr"])],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eF.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.OBwCXF)],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.t8QhiY), eK.intl.string(eK.t.hmfkCg)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => V.Z.isNoiseSuppressionSupported(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.BbESsr)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => V.Z.isAdvancedVoiceActivitySupported(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.cUMdHx)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => V.Z.isAutomaticGainControlSupported(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.DFPXIC)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => V.Z.showBypassSystemInputProcessing(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.uancuL)],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => V.Z.supports(eW.AN.QOS),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.oSdBvb)],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => V.Z.supports(eW.AN.ATTENUATION),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.wVBHr6)],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => V.Z.shouldOfferManualSubsystemSelection(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eH.oAB.VOICE,
                searchableTitles: [
                    eK.intl.string(eK.t.KDdjoq),
                    eK.intl.string(eK.t.NMCIf3),
                    eK.intl.string(eK.t.FeUKeH),
                ],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    V.Z.supportsVideoHook() ||
                    V.Z.supportsExperimentalSoundshare() ||
                    (V.Z.supportsSystemScreensharePicker() && (0, z.isMac)()),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.GmWk2N), eK.intl.string(eK.t["Fj/xn5"])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => V.Z.supportsVideoHook(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t["4I0qzc"])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => V.Z.supportsExperimentalSoundshare() && V.Z.supportsHookSoundshare(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.ie1mgY)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => V.Z.supportsSystemScreensharePicker() && (0, z.isMac)(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t["aP1N/v"])],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => z.isPlatformEmbedded,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.OFpL3d)],
                parent: eF.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t["0CEP6e"])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => X.Sb.getSetting(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t["r6K+TE"])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => V.Z.isAecDumpSupported(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t.U4FgFB)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === q.ZP.releaseChannel || "development" === q.ZP.releaseChannel) &&
                    e5 &&
                    V.Z.supports(eW.AN.CONNECTION_REPLAY),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t["726JHB"])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    z.isPlatformEmbedded && V.Z.supports(eW.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [eF.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eH.oAB.VOICE,
                searchableTitles: [eK.intl.string(eK.t["/RXu6+"])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eF.s6.POGGERMODE]: {
                section: eH.oAB.POGGERMODE,
                searchableTitles: [eK.intl.string(eK.t.AtCukJ)],
                label: eK.intl.string(eK.t.AtCukJ),
                ariaLabel: eK.intl.string(eK.t.AtCukJ),
                element: P.Z,
                predicate: () => R.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: eX.poggermodeIcon,
                }),
            },
            [eF.s6.CHAT]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t["/VQax8"])],
                label: eK.intl.string(eK.t["/VQax8"]),
                ariaLabel: eK.intl.string(eK.t["/VQax8"]),
                element: eC.Z,
                url: eH.Z5c.SETTINGS("text"),
            },
            [eF.s6.CHAT_INLINE_MEDIA]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.U68Dgo)],
                parent: eF.s6.CHAT,
            },
            [eF.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.U47N1t)],
                parent: eF.s6.CHAT_INLINE_MEDIA,
            },
            [eF.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.VP11Nj)],
                parent: eF.s6.CHAT_INLINE_MEDIA,
            },
            [eF.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t["5S2AKy"])],
                parent: eF.s6.CHAT_INLINE_MEDIA,
            },
            [eF.s6.CHAT_EMBEDS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.PWZOn5)],
                parent: eF.s6.CHAT,
            },
            [eF.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.xX0ZTE)],
                parent: eF.s6.CHAT_EMBEDS,
            },
            [eF.s6.CHAT_EMOJI]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.sMOuub)],
                parent: eF.s6.CHAT,
            },
            [eF.s6.CHAT_EMOJI_REACTIONS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.Iv24sr)],
                parent: eF.s6.CHAT_EMOJI,
            },
            [eF.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t["79qal5"])],
                parent: eF.s6.CHAT_EMOJI,
            },
            [eF.s6.CHAT_STICKERS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t["6NtAuL"])],
                parent: eF.s6.CHAT,
            },
            [eF.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t["29xPVV"])],
                parent: eF.s6.CHAT_STICKERS,
            },
            [eF.s6.CHAT_SOUNDMOJI]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.EHlAMT)],
                parent: eF.s6.CHAT,
            },
            [eF.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t["CtYr+f"])],
                parent: eF.s6.CHAT_SOUNDMOJI,
            },
            [eF.s6.CHAT_TEXT_BOX]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.afR0pK)],
                parent: eF.s6.CHAT,
            },
            [eF.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.AqGrEB)],
                parent: eF.s6.CHAT_TEXT_BOX,
            },
            [eF.s6.CHAT_THREADS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.B2panJ)],
                parent: eF.s6.CHAT,
            },
            [eF.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.AInv5u)],
                parent: eF.s6.CHAT_THREADS,
            },
            [eF.s6.CHAT_SPOILERS]: {
                section: eH.oAB.TEXT,
                searchableTitles: [eK.intl.string(eK.t.QgwmV1)],
                parent: eF.s6.CHAT,
            },
            [eF.s6.NOTIFICATIONS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.HcoRu7)],
                label: eK.intl.string(eK.t.HcoRu7),
                ariaLabel: eK.intl.string(eK.t.HcoRu7),
                element: eO.Z,
                url: eH.Z5c.SETTINGS("notifications"),
            },
            [eF.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t["/0WClp"])],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.VH8AIC)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.xSmFQE)],
                parent: eF.s6.NOTIFICATIONS,
                predicate: () => (0, z.isWindows)(),
            },
            [eF.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.z21l8P)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: ["New Notification Settings (Advanced, Staff Only)"],
                parent: eF.s6.NOTIFICATIONS,
                predicate: () => !1,
            },
            [eF.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: ["Restore most recent snapshot"],
                parent: eF.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eF.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: ["Launch Migration"],
                parent: eF.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eF.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: ["Toggle new system on/off"],
                parent: eF.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eF.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.TTvjd3)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.VpSKeH)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.D9yVAA)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.u6dc5O)],
                parent: eF.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eF.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.P8MG6u)],
                parent: eF.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eF.s6.NOTIFICATIONS_SOUNDS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.MKWyKS)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_EMAILS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.TPchzM)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t["B75+xc"])],
                parent: eF.s6.NOTIFICATIONS_EMAILS,
            },
            [eF.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.sxn7lZ)],
                parent: eF.s6.NOTIFICATIONS_EMAILS,
            },
            [eF.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.EkxXhY)],
                parent: eF.s6.NOTIFICATIONS_EMAILS,
            },
            [eF.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.jNrkrK)],
                parent: eF.s6.NOTIFICATIONS_EMAILS,
            },
            [eF.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.E8g1l5)],
                parent: eF.s6.NOTIFICATIONS_EMAILS,
            },
            [eF.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.Ra9Pws)],
                parent: eF.s6.NOTIFICATIONS_EMAILS,
            },
            [eF.s6.NOTIFICATIONS_REACTIONS]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.Rq0NFh)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.wtk08f)],
                parent: eF.s6.NOTIFICATIONS,
                predicate: () => (0, B.JN)("SettingsRendererConfig"),
            },
            [eF.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eH.oAB.NOTIFICATIONS,
                searchableTitles: [eK.intl.string(eK.t.pW4TMj)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.KEYBINDS]: {
                section: eH.oAB.KEYBINDS,
                searchableTitles: [eK.intl.string(eK.t.T9DA2N)],
                label: eK.intl.string(eK.t.T9DA2N),
                element: eb.Z,
                url: eH.Z5c.SETTINGS("keybinds"),
            },
            [eF.s6.LANGUAGE]: {
                section: eH.oAB.LOCALE,
                searchableTitles: [eK.intl.string(eK.t.IHMsPj)],
                label: eK.intl.string(eK.t.IHMsPj),
                element: ey.Z,
                url: eH.Z5c.SETTINGS("language"),
            },
            [eF.s6.WINDOW_SETTINGS]: {
                section: eH.oAB.WINDOWS,
                searchableTitles: [eK.intl.string(eK.t.ZkDZoq)],
                label: eK.intl.string(eK.t.ZkDZoq),
                element: eP.Z,
                predicate: () => z.isPlatformEmbedded && (0, z.isWindows)(),
            },
            [eF.s6.LINUX_SETTINGS]: {
                section: eH.oAB.LINUX,
                searchableTitles: [eK.intl.string(eK.t["7pPjTU"])],
                label: eK.intl.string(eK.t["7pPjTU"]),
                element: e8,
                predicate: () => z.isPlatformEmbedded && (0, z.isLinux)(),
            },
            [eF.s6.STREAMER_MODE]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eK.intl.string(eK.t.S5GfOT)],
                label: eK.intl.string(eK.t.S5GfOT),
                ariaLabel: eK.intl.string(eK.t.S5GfOT),
                element: eA.Z,
                url: eH.Z5c.SETTINGS("streamer-mode"),
            },
            [eF.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eK.intl.string(eK.t.bxGbHB)],
                parent: eF.s6.STREAMER_MODE,
            },
            [eF.s6.STREAMER_MODE_ENABLE]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eK.intl.string(eK.t.p9ZAJS)],
                parent: eF.s6.STREAMER_MODE,
            },
            [eF.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eK.intl.string(eK.t.UpQziI)],
                parent: eF.s6.STREAMER_MODE,
            },
            [eF.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eK.intl.string(eK.t.q7WNGh)],
                parent: eF.s6.STREAMER_MODE,
            },
            [eF.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eK.intl.string(eK.t["1CWknJ"])],
                parent: eF.s6.STREAMER_MODE,
            },
            [eF.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eK.intl.string(eK.t.qmYiYW)],
                parent: eF.s6.STREAMER_MODE,
            },
            [eF.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eH.oAB.STREAMER_MODE,
                searchableTitles: [eK.intl.string(eK.t["iA81+f"])],
                parent: eF.s6.STREAMER_MODE,
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
            [eF.s6.SETTINGS_ADVANCED]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eK.intl.string(eK.t["8/udY2"])],
                label: eK.intl.string(eK.t["8/udY2"]),
                ariaLabel: eK.intl.string(eK.t["8/udY2"]),
                element: eo.ZP,
            },
            [eF.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eK.intl.string(eK.t.ObIb1d)],
                parent: eF.s6.SETTINGS_ADVANCED,
                predicate: () => W.wS,
            },
            [eF.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eK.intl.string(eK.t["eOC/Fx"])],
                parent: eF.s6.SETTINGS_ADVANCED,
                predicate: () => z.isPlatformEmbedded,
            },
            [eF.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eK.intl.string(eK.t.fi3UQE)],
                parent: eF.s6.SETTINGS_ADVANCED,
                predicate: () => tn,
            },
            [eF.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eK.intl.string(eK.t.erOqlp)],
                parent: eF.s6.SETTINGS_ADVANCED,
                predicate: () => ti,
            },
            [eF.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: [eK.intl.string(eK.t.qDZryM)],
                parent: eF.s6.SETTINGS_ADVANCED,
            },
            [eF.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eH.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: eF.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    g.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [eF.s6.ACTIVITY_PRIVACY]: {
                section: eH.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.Cq98yM)],
                label: eK.intl.string(eK.t.Cq98yM),
                ariaLabel: eK.intl.string(eK.t.Cq98yM),
                element: ea.Z,
                predicate: () => !eQ,
                url: eH.Z5c.SETTINGS("activity-privacy"),
            },
            [eF.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eQ ? eH.oAB.GAMES : eH.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t["8ka8lp"])],
                parent: eQ ? eF.s6.GAMES_ACTIVITY_PRIVACY : eF.s6.ACTIVITY_PRIVACY,
            },
            [eF.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eQ ? eH.oAB.GAMES : eH.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t.VOszPD)],
                parent: eQ ? eF.s6.GAMES_ACTIVITY_PRIVACY : eF.s6.ACTIVITY_PRIVACY,
            },
            [eF.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eQ ? eH.oAB.GAMES : eH.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eF.CF],
                parent: eQ ? eF.s6.GAMES_ACTIVITY_PRIVACY : eF.s6.ACTIVITY_PRIVACY,
            },
            [eF.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eH.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eK.intl.string(eK.t["4F2KoK"])],
                parent: eF.s6.ACTIVITY_PRIVACY,
            },
            [eF.s6.REGISTERED_GAMES]: {
                section: eH.oAB.REGISTERED_GAMES,
                searchableTitles: [eK.intl.string(eK.t.AVDyEh)],
                label: eK.intl.string(eK.t.AVDyEh),
                element: em.Z,
                predicate: () => !eQ && (0, ej.Jw)(),
            },
            [eF.s6.OVERLAY]: {
                section: eH.oAB.OVERLAY,
                searchableTitles: [eK.intl.string(eK.t["9cb1U1"]), eK.intl.string(eK.t.HcoRu7)],
                label: eK.intl.string(eK.t["9cb1U1"]),
                element: ev.Z,
                predicate: () => !eQ && A,
            },
            [eF.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, E.Z)(!0),
                searchableTitles: [eK.intl.string(eK.t.LRmNAg)],
                label: eK.intl.string(eK.t.LRmNAg),
            },
            [eF.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    Y.default.track(eH.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, K.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                Y.default.track(eH.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, p.Z)(e);
                            },
                        });
                },
                searchableTitles: [eK.intl.string(eK.t.sMEktb)],
                label: eK.intl.string(eK.t.sMEktb),
                ariaLabel: eK.intl.string(eK.t.sMEktb),
            },
            [eF.s6.HYPESQUAD]: {
                section: eH.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eK.intl.string(eK.t["k0R+4e"])],
                label: eK.intl.string(eK.t["k0R+4e"]),
                element: eg.Z,
                predicate: () => !ts,
            },
            [eF.s6.TOWNHALL]: {
                section: eH.oAB.TOWNHALL,
                searchableTitles: [eK.intl.string(eK.t.dnZNER)],
                label: eK.intl.string(eK.t.dnZNER),
                predicate: () => ts,
                onClick: () => {
                    (0, p.Z)("https://discord.gg/discord-townhall"), (0, ew.default)();
                },
            },
            [eF.s6.EXPERIMENTS]: {
                section: eH.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: ex.Z,
                predicate: () => Z.Z.isDeveloper,
                url: eH.Z5c.SETTINGS("experiments"),
            },
            [eF.s6.DEVELOPER_OPTIONS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: ep.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eF.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eF.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eF.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e5 && Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eF.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e5 && Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eF.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eF.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e5 && Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Toggleable Components"],
                parent: eF.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e5 && Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eF.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e5 && Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eF.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e5 && Z.Z.isDeveloper && F.default.layoutDebuggingEnabled,
            },
            [eF.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e5 && Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e5 && Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eF.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eF.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eF.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eF.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eF.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => m.q && Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eF.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eF.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eF.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eF.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eH.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.PAYMENT_FLOW_MODALS]: {
                section: eH.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ["Payment Flow Modals"],
                label: "Payment Flow Modals",
                element: $.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.REVENUE_STORYBOOK]: {
                section: eH.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: [
                    "Revenue Storybook",
                    "Payment Components",
                    "Orb Components",
                    "Virtual Currency",
                    "Nitro Components",
                ],
                label: "Revenue Storybook",
                element: eG.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eH.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ["Virtual Currency", "Orb", "Config"],
                label: "Virtual Currency Config",
                element: eB.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.PAYMENT_COMPONENTS]: {
                section: eH.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Payment Components"],
                label: "Payment Components",
                element: eG.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.ORB_COMPONENTS]: {
                section: eH.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Orb Components"],
                label: "Orb Components",
                element: eG.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.NITRO_COMPONENTS]: {
                section: eH.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Nitro Components"],
                label: "Nitro Components",
                element: eG.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.TEXT_PLAYGROUND]: {
                section: eH.oAB.TEXT_PLAYGROUND,
                searchableTitles: ["Text Playground"],
                label: "Text Playground",
                element: eN.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DESIGN_SYSTEMS]: {
                section: eH.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Design Systems"],
                label: "Design Systems",
                element: e_.Z,
                predicate: () => Z.Z.isDeveloper,
                url: eH.Z5c.SETTINGS("design-systems"),
            },
            [eF.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eH.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Colors"],
                label: "Colors",
                element: e_.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.ANIMATION_TESTING]: {
                section: eH.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Animation Testing"],
                label: "Animation Testing",
                element: e_.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eH.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Components"],
                label: "Components",
                element: e_.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.TEXT_COMPONENTS]: {
                section: eH.oAB.TEXT_COMPONENT,
                searchableTitles: ["Text Components"],
                label: "Text Components",
                element: en.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.SHOP_KEEPER]: {
                section: eH.oAB.SHOP_KEEPER,
                searchableTitles: ["Shop Keeper"],
                label: "Shop Keeper",
                element: I.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.QUEST_PREVIEW_TOOL]: {
                section: eH.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ["Quest Preview Tool"],
                label: "Quest Preview Tool",
                element: M.Z,
                predicate: () => (0, L.X)({ location: eY.dr.QUEST_PREVIEW_TOOL }),
            },
            [eF.s6.QUEST_PREVIEW_TOOL_2]: {
                section: eH.oAB.QUEST_PREVIEW_TOOL_2,
                searchableTitles: ["Quest Preview Tool 2"],
                label: "Quest Preview Tool 2",
                element: () => (0, r.jsx)(k.Z, { questId: null == b ? void 0 : b.quest_id }),
                predicate: () => (0, L.T)({ location: eY.dr.QUEST_PREVIEW_TOOL_2 }),
            },
            [eF.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG]: {
                section: eH.oAB.QUEST_MINOR_REWARD_CAPPING_CONFIG,
                searchableTitles: ["Minor Reward Capping Config"],
                label: "Minor Reward Capping Config",
                element: j.Z,
                predicate: () => e5,
            },
            [eF.s6.WEB_SETTING_TREE_TOOL]: {
                section: eH.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ["Web Setting Tree Tool"],
                label: "Web Setting Tree Tool",
                element: eL.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM]: {
                section: f.ID.CUSTOM,
                searchableTitles: eD.Y,
                label: "Developer Education",
                element: eD.$,
                predicate: () => Z.Z.isDeveloper,
            },
            [eF.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            e0(
                                eJ(
                                    {
                                        header: eK.intl.string(eK.t["2jxGen"]),
                                        confirmText: eK.intl.string(eK.t["2jxGen"]),
                                        cancelText: eK.intl.string(eK.t["ETE/oK"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: eK.intl.string(eK.t.SUnWBA),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: eK.intl.string(eK.t["2jxGen"]),
                ariaLabel: eK.intl.string(eK.t["2jxGen"]),
                icon: (0, r.jsx)(s.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [eF.s6.SOCIAL_LINKS]: {
                section: f.ID.CUSTOM,
                element: et.Z,
            },
            [eF.s6.CLIENT_DEBUG_INFO]: {
                section: f.ID.CUSTOM,
                element: Q.Z,
            },
        });
    };
