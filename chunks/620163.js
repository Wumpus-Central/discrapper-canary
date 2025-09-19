n.d(t, {
    $Z: () => e0,
    OF: () => e2,
    W8: () => e3,
    c$: () => e1,
    iE: () => e8,
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
    eL = n(168308),
    ej = n(277329),
    eM = n(273927),
    ek = n(604224),
    eU = n(43434),
    eG = n(333576),
    eB = n(345655),
    eZ = n(726985),
    eF = n(583139),
    eV = n(981631),
    eH = n(46140),
    eY = n(65154),
    eW = n(388032),
    eK = n(693450),
    ez = n(345909),
    eq = n(202323);
function eX(e, t, n) {
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
function eQ(e) {
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
                eX(e, t, n[t]);
            });
    }
    return e;
}
function eJ(e, t) {
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
function e$(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eJ(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let e0 = () => {
        let e = [a.z.CLIENT_THEMES_SETTINGS_BADGE, a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
        return (
            b.Mc.getCurrentConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            h.n.getConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE),
            e
        );
    },
    e1 = () => {
        let e = e0(),
            [t] = (0, S.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: eW.intl.string(eW.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ||
                t === a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE
              ? (0, r.jsx)(s.IGR, { text: eW.intl.string(eW.t.y2b7CA) })
              : null;
    },
    e2 = () => {
        let e = [];
        return (
            (0, G.h)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            A.J.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    e3 = () => {
        let e = e2(),
            [t] = (0, S.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: eW.intl.string(eW.t.y2b7CA) })
            : null;
    },
    e4 = eP.Z,
    e8 = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: h,
            searchParams: b,
            numOfPendingFamilyRequests: S,
            isOverlaySupported: A,
            isClipsBetaTagShowing: G = !1,
            shouldMergeGameSettings: eX,
            isKeywordFilteringEnabled: eJ,
            isStaff: e8,
            isInappropriateConversationWarningEnabled: e5,
            isInapproprateConversationsDefaultOn: e6,
            paymentsBlocked: e7,
            isEligibleForQuests: e9,
            isStricterMessageRequestsEnabled: te,
            hasLibraryApplication: tt,
            hasTOTPEnabled: tn,
            developerMode: tr,
            isAdultUser: ti,
            hasSecureFramesVerifiedUserIds: ta,
            hypeSquadRemoved: to,
            hasIgnoredUsers: ts,
            hasBlockedUsers: tl,
            isEligibleForSensitiveContentDefaults: tc,
            inputMode: tu,
            activeInputProfile: td,
            isInputProfileCustom: tf,
            isDataUsage3PToggleEnabled: t_,
        } = e;
        return Object.freeze({
            [eZ.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: eT.Z,
            },
            [eZ.s6.ACCOUNT_SECURITY_TAB]: {
                section: eV.oAB.ACCOUNT,
                searchableTitles: [eW.intl.string(eW.t.Am9YHh)],
                label: eW.intl.string(eW.t.Am9YHh),
            },
            [eZ.s6.ACCOUNT]: {
                section: eV.oAB.ACCOUNT,
                searchableTitles: [eW.intl.string(eW.t["JAIM/v"])],
                label: eW.intl.string(eW.t["JAIM/v"]),
                ariaLabel: eW.intl.string(eW.t["JAIM/v"]),
                element: ei.Z,
                url: eV.Z5c.SETTINGS("account"),
            },
            [eZ.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eW.intl.string(eW.t.LYju5O)],
                parent: eZ.s6.ACCOUNT,
                section: eV.oAB.ACCOUNT,
            },
            [eZ.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eW.intl.string(eW.t["9AjdkJ"])],
                section: eV.oAB.ACCOUNT,
                parent: eZ.s6.ACCOUNT_PROFILE,
            },
            [eZ.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eW.intl.string(eW.t.Ulqq6O)],
                section: eV.oAB.ACCOUNT,
                parent: eZ.s6.ACCOUNT_PROFILE,
            },
            [eZ.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    eW.intl.string(eW.t["/52UY2"]),
                    eW.intl.string(eW.t.sK0dmJ),
                    eW.intl.string(eW.t.XxRj7e),
                    eW.intl.string(eW.t.yNGjyM),
                    eW.intl.string(eW.t.KPGVWl),
                ],
                section: eV.oAB.ACCOUNT,
                parent: eZ.s6.ACCOUNT_PROFILE,
                predicate: () => tc,
            },
            [eZ.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eW.intl.string(eW.t["+JkHPz"])],
                section: eV.oAB.ACCOUNT,
                parent: eZ.s6.ACCOUNT_PROFILE,
            },
            [eZ.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eW.intl.string(eW.t.oP5zGB)],
                section: eV.oAB.ACCOUNT,
                parent: eZ.s6.ACCOUNT_PROFILE,
            },
            [eZ.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eW.intl.string(eW.t.pKSjEh)],
                section: eV.oAB.ACCOUNT,
                parent: eZ.s6.ACCOUNT,
            },
            [eZ.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eW.intl.string(eW.t["FRep5+"])],
                section: eV.oAB.ACCOUNT,
                parent: eZ.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eZ.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eW.intl.string(eW.t["7qKDrK"])],
                section: eV.oAB.ACCOUNT,
                parent: eZ.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eZ.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eW.intl.string(eW.t.m0FidH)],
                section: eV.oAB.ACCOUNT,
                parent: eZ.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eZ.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eW.intl.string(eW.t.cDgKtb)],
                section: eV.oAB.ACCOUNT,
                parent: eZ.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !tn,
            },
            [eZ.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eW.intl.string(eW.t["D+aE7u"])],
                section: eV.oAB.ACCOUNT,
                parent: eZ.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => tn,
            },
            [eZ.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eW.intl.string(eW.t.fZSi1N)],
                section: eV.oAB.ACCOUNT,
                parent: eZ.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eZ.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eW.intl.string(eW.t.uHAJ5u)],
                section: eV.oAB.ACCOUNT,
                parent: eZ.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eZ.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eW.intl.string(eW.t.vrOCCg)],
                section: eV.oAB.ACCOUNT,
                parent: eZ.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eZ.s6.ACCOUNT_REMOVAL]: {
                section: eV.oAB.ACCOUNT,
                searchableTitles: [eW.intl.string(eW.t.ZKsIkp)],
                parent: eZ.s6.ACCOUNT,
            },
            [eZ.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eV.oAB.ACCOUNT,
                searchableTitles: [eW.intl.string(eW.t.jf5GGR)],
                parent: eZ.s6.ACCOUNT_REMOVAL,
            },
            [eZ.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eV.oAB.ACCOUNT,
                searchableTitles: [eW.intl.string(eW.t["8lQ2ra"])],
                parent: eZ.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eZ.s6.GAMES]: {
                section: eV.oAB.GAMES,
                searchableTitles: [eW.intl.string(eW.t.URyqtL)],
                label: eW.intl.string(eW.t.URyqtL),
                ariaLabel: eW.intl.string(eW.t.URyqtL),
                element: ej.Z,
                predicate: () => eX,
            },
            [eZ.s6.GAMES_MY_GAMES]: {
                section: eV.oAB.GAMES,
                searchableTitles: [eW.intl.string(eW.t["5DMgp6"])],
                parent: eZ.s6.GAMES,
            },
            [eZ.s6.GAMES_CLIPS]: {
                section: eV.oAB.GAMES,
                searchableTitles: [eW.intl.string(eW.t.z2jK6e)],
                parent: eZ.s6.GAMES,
            },
            [eZ.s6.GAMES_OVERLAY]: {
                section: eV.oAB.GAMES,
                searchableTitles: [eW.intl.string(eW.t["9cb1U1"])],
                parent: eZ.s6.GAMES,
            },
            [eZ.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eV.oAB.GAMES,
                searchableTitles: [eW.intl.string(eW.t.Cq98yM)],
                parent: eZ.s6.GAMES,
            },
            [eZ.s6.PROFILE_CUSTOMIZATION]: {
                section: eV.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [eW.intl.string(eW.t["vi7f+v"])],
                label: eW.intl.string(eW.t["vi7f+v"]),
                ariaLabel: eW.intl.string(eW.t["vi7f+v"]),
                element: x.Z,
                newIndicator: (0, r.jsx)(e3, {}),
                newIndicatorDismissibleContentTypes: [...e2()],
                notice: {
                    stores: [H.Z, N.Z],
                    element: D.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, C.It)(), (0, u.P6)(), d.Z.clearSubsection(eV.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eV.Z5c.SETTINGS("profile-customization"),
            },
            [eZ.s6.PROFILE_DISPLAY_NAME]: {
                section: eV.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eW.intl.string(eW.t["9AjdkJ"])],
                parent: eZ.s6.PROFILE_CUSTOMIZATION,
            },
            [eZ.s6.PROFILE_USER_PROFILE]: {
                section: eV.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eW.intl.string(eW.t["2p07FR"]), eW.intl.string(eW.t["7vhiqq"])],
                parent: eZ.s6.PROFILE_CUSTOMIZATION,
            },
            [eZ.s6.PROFILE_SERVER_PROFILES]: {
                section: eV.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eW.intl.string(eW.t.kPHroa)],
                parent: eZ.s6.PROFILE_CUSTOMIZATION,
            },
            [eZ.s6.CONTENT_SOCIAL]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                label: eW.intl.string(eW.t["+o1pDQ"]),
                searchableTitles: [eW.intl.string(eW.t["+o1pDQ"])],
                ariaLabel: eW.intl.string(eW.t["+o1pDQ"]),
                element: ed.Z,
                url: eV.Z5c.SETTINGS("content-and-social"),
            },
            [eZ.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t["+o1pDQ"]), eW.intl.string(eW.t["/7xJCA"])],
                parent: eZ.s6.CONTENT_SOCIAL,
            },
            [eZ.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t["+o1pDQ"]), eW.intl.string(eW.t["/7xJCA"])],
                parent: eZ.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eZ.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.YpCiMj)],
                parent: eZ.s6.CONTENT_SOCIAL,
            },
            [eZ.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                label: eW.intl.string(eW.t.YpCiMj),
                searchableTitles: [eW.intl.string(eW.t.YpCiMj)],
                ariaLabel: eW.intl.string(eW.t.YpCiMj),
                parent: eZ.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eV.Z5c.SETTINGS(eV.oAB.CONTENT_AND_SOCIAL, eF.C),
            },
            [eZ.s6.DATA_PRIVACY]: {
                section: eV.oAB.DATA_AND_PRIVACY,
                label: eW.intl.string(eW.t.OAuOHB),
                searchableTitles: [eW.intl.string(eW.t.OAuOHB)],
                ariaLabel: eW.intl.string(eW.t.OAuOHB),
                element: ef.Z,
                url: eV.Z5c.SETTINGS("data-and-privacy"),
            },
            [eZ.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eV.oAB.ACCOUNT,
                searchableTitles: [eW.intl.string(eW.t["Vov/9v"])],
                parent: eZ.s6.ACCOUNT,
            },
            [eZ.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eV.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.WWaFn5)],
                parent: eZ.s6.DATA_PRIVACY,
                predicate: () => (0, z.isDesktop)(),
            },
            [eZ.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eV.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t["opi/XF"])],
                parent: eZ.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eZ.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.xVRG4O)],
                parent: eZ.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eZ.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.fyA119)],
                parent: eZ.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eZ.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.fyA119)],
                parent: eZ.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eZ.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t["/U8Iwc"])],
                parent: eZ.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eZ.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t["ms+TmZ"])],
                parent: eZ.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eZ.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t["y62Z/f"])],
                parent: eZ.s6.CONTENT_SOCIAL,
            },
            [eZ.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eV.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.SRZyHh)],
                parent: eZ.s6.DATA_PRIVACY,
            },
            [eZ.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eW.intl.string(eW.t.uEz8JC),
                    eW.intl.string(eW.t["N/oRIy"]),
                    eW.intl.string(eW.t.QVdYsL),
                    eW.intl.string(eW.t["aWD+tr"]),
                    eW.intl.string(eW.t["5mnTa2"]),
                ],
                parent: eZ.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eZ.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eW.intl.string(eW.t["Hj/Bur"]),
                    eW.intl.string(eW.t["N/oRIy"]),
                    eW.intl.string(eW.t.QVdYsL),
                    eW.intl.string(eW.t["aWD+tr"]),
                    eW.intl.string(eW.t["5mnTa2"]),
                    eW.intl.string(eW.t.K0OWPz),
                ],
                parent: eZ.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eZ.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eW.intl.string(eW.t["Hj/Bur"]),
                    eW.intl.string(eW.t["N/oRIy"]),
                    eW.intl.string(eW.t.QVdYsL),
                    eW.intl.string(eW.t["aWD+tr"]),
                    eW.intl.string(eW.t["5mnTa2"]),
                ],
                parent: eZ.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eZ.s6.GORE_MEDIA_REDACTION]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eW.intl.string(eW.t["Hj/Bur"]),
                    eW.intl.string(eW.t["N/oRIy"]),
                    eW.intl.string(eW.t.QVdYsL),
                    eW.intl.string(eW.t["aWD+tr"]),
                    eW.intl.string(eW.t.K0OWPz),
                ],
                parent: eZ.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eZ.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eW.intl.string(eW.t.JzaP4u),
                    eW.intl.string(eW.t.H9XOl5),
                    eW.intl.string(eW.t.k4W40N),
                ],
                parent: eZ.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eZ.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t["L+yTsb"])],
                parent: eZ.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eZ.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.XahVjo)],
                parent: eZ.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eZ.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                parent: eZ.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eZ.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.RAQUSE), eW.intl.string(eW.t.wbYDfX)],
                parent: eZ.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eZ.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t["3o2ojo"])],
                parent: eZ.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !te,
            },
            [eZ.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.OLwZDQ)],
                parent: eZ.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eZ.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.wBkwu7)],
                parent: eZ.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eZ.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eV.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.XuADY2)],
                parent: eZ.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eZ.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eV.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.MNKzys)],
                parent: eZ.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eZ.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eV.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.VkS7YW), eW.intl.string(eW.t.sJYh5u)],
                parent: eZ.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eZ.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eV.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.CyLYKS)],
                parent: eZ.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                predicate: () => t_,
            },
            [eZ.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eV.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eZ.CF],
                parent: eZ.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eZ.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eV.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.dmBSKi)],
                parent: eZ.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eZ.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t["1UaUy8"]), eW.intl.string(eW.t["xIk/iI"])],
                parent: eZ.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eJ,
            },
            [eZ.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eW.intl.string(eW.t.qFsx5u)],
                parent: eZ.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e5 && !ti && !e6,
            },
            [eZ.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eV.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t["5b3FND"])],
                parent: eZ.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => ta,
            },
            [eZ.s6.PRIVACY_FAMILY_CENTER]: {
                section: eV.oAB.FAMILY_CENTER,
                searchableTitles: [eW.intl.string(ez.default.gntCQU)],
                label: eW.intl.string(ez.default.gntCQU),
                ariaLabel: eW.intl.string(ez.default.gntCQU),
                element: eh.Z,
                badgeCount: S,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eW.intl.string(eW.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eV.Z5c.SETTINGS("family-center"),
            },
            [eZ.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eV.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.BG7Qsb)],
                parent: eZ.s6.DATA_PRIVACY,
            },
            [eZ.s6.AUTHORIZED_APPS]: {
                section: eV.oAB.AUTHORIZED_APPS,
                searchableTitles: [eW.intl.string(eW.t["f6kk+v"])],
                label: eW.intl.string(eW.t["f6kk+v"]),
                element: el.Z,
                url: eV.Z5c.SETTINGS("authorized-apps"),
            },
            [eZ.s6.SESSIONS]: {
                section: eV.oAB.SESSIONS,
                searchableTitles: [eW.intl.string(eW.t["+1h0k5"])],
                label: eW.intl.string(eW.t["+1h0k5"]),
                ariaLabel: eW.intl.string(eW.t["+1h0k5"]),
                element: eS.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
            },
            [eZ.s6.CONNECTIONS]: {
                section: eV.oAB.CONNECTIONS,
                searchableTitles: [eW.intl.string(eW.t["3fe7U1"])],
                label: eW.intl.string(eW.t["3fe7U1"]),
                ariaLabel: eW.intl.string(eW.t["3fe7U1"]),
                element: eu.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eV.Z5c.SETTINGS("connections"),
            },
            [eZ.s6.THIRD_PARTY_ACCESS]: {
                section: eV.oAB.CONNECTIONS,
                searchableTitles: [
                    eW.intl.string(eW.t["Ig/XFR"]),
                    eW.intl.string(eW.t["3fe7U1"]),
                    eW.intl.string(eW.t["f6kk+v"]),
                ],
                label: eW.intl.string(eW.t["Ig/XFR"]),
                parent: eZ.s6.CONNECTIONS,
                element: eR.Z,
            },
            [eZ.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eV.oAB.CONNECTIONS,
                searchableTitles: [eW.intl.string(eW.t["+/hZMz"])],
                parent: eZ.s6.CONNECTIONS,
                element: eu.Z,
            },
            [eZ.s6.CLIPS]: {
                section: eV.oAB.CLIPS,
                searchableTitles: [eW.intl.string(eW.t.z2jK6e)],
                label: eW.intl.string(eW.t.z2jK6e),
                ariaLabel: eW.intl.string(eW.t.z2jK6e),
                icon: G ? (0, r.jsx)(y.Z, {}) : void 0,
                element: O.Z,
                predicate: () => !eX,
                url: eV.Z5c.SETTINGS("clips"),
            },
            [eZ.s6.RESTRICTED_USERS]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                parent: eZ.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eW.intl.string(eW.t["3wRorq"]),
                element: eM.ZP,
                predicate: () => ts || tl,
            },
            [eZ.s6.BLOCKED_USERS]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                parent: eZ.s6.RESTRICTED_USERS,
                label: eW.intl.string(eW.t.PFOUKS),
                searchableTitles: [eW.intl.string(eW.t.PFOUKS)],
                element: eM.GF,
                predicate: () => tl,
            },
            [eZ.s6.IGNORED_USERS]: {
                section: eV.oAB.CONTENT_AND_SOCIAL,
                parent: eZ.s6.RESTRICTED_USERS,
                searchableTitles: [eW.intl.string(eW.t["93ZDWF"])],
                label: eW.intl.string(eW.t["93ZDWF"]),
                element: eM.yo,
                predicate: () => ts,
            },
            [eZ.s6.PREMIUM]: {
                section: eV.oAB.PREMIUM,
                ariaLabel: eW.intl.string(eW.t.Ipxkoq),
                searchableTitles: [eW.intl.string(eW.t.Ipxkoq)],
                label: eW.intl.string(eW.t.Ipxkoq),
                element: ee.Z,
                className: eq.premiumTab,
            },
            [eZ.s6.GUILD_BOOSTING]: {
                section: eV.oAB.GUILD_BOOSTING,
                searchableTitles: [eW.intl.string(eW.t["+CbP2t"])],
                label: eW.intl.string(eW.t["+CbP2t"]),
                element: eI.Z,
            },
            [eZ.s6.SUBSCRIPTIONS]: {
                section: eV.oAB.SUBSCRIPTIONS,
                ariaLabel: eW.intl.string(eW.t.trSpHR),
                searchableTitles: [eW.intl.string(eW.t.trSpHR)],
                label: eW.intl.string(eW.t.trSpHR),
                element: w.Z,
                icon: h
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eZ.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eV.oAB.SUBSCRIPTIONS,
                searchableTitles: [eW.intl.string(eW.t["2GKrvr"])],
                parent: eZ.s6.SUBSCRIPTIONS,
            },
            [eZ.s6.GIFT_INVENTORY]: {
                section: eV.oAB.INVENTORY,
                searchableTitles: [eW.intl.string(eW.t["jcSP+v"])],
                label: eW.intl.string(eW.t["jcSP+v"]),
                element: eE.Z,
                ariaLabel: eW.intl.string(eW.t["jcSP+v"]),
                badgeCount: t,
            },
            [eZ.s6.GIFT_CODE_REDEMPTION]: {
                section: eV.oAB.INVENTORY,
                searchableTitles: [eW.intl.string(eW.t["il+VCg"])],
                parent: eZ.s6.GIFT_INVENTORY,
                predicate: () => !e7,
            },
            [eZ.s6.GIFT_INVENTORY_QUESTS]: {
                section: eV.oAB.INVENTORY,
                searchableTitles: [eW.intl.string(eW.t.JALI2N)],
                parent: eZ.s6.GIFT_INVENTORY,
                predicate: () => e9,
            },
            [eZ.s6.GIFT_INVENTORY_LIST]: {
                section: eV.oAB.INVENTORY,
                searchableTitles: [eW.intl.string(eW.t["9KeUbW"])],
                parent: eZ.s6.GIFT_INVENTORY,
                predicate: () => !e7,
            },
            [eZ.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eV.oAB.INVENTORY,
                searchableTitles: [eW.intl.string(eW.t.vwMEHR)],
                parent: eZ.s6.GIFT_INVENTORY,
                predicate: () => e7,
            },
            [eZ.s6.BILLING]: {
                section: eV.oAB.BILLING,
                searchableTitles: [eW.intl.string(eW.t.oeUm2t)],
                label: eW.intl.string(eW.t.oeUm2t),
                ariaLabel: eW.intl.string(eW.t.oeUm2t),
                element: ec.Z,
            },
            [eZ.s6.BILLING_PAYMENT_METHODS]: {
                section: eV.oAB.BILLING,
                searchableTitles: [eW.intl.string(eW.t.W26xGR)],
                parent: eZ.s6.BILLING,
            },
            [eZ.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eV.oAB.BILLING,
                searchableTitles: [eW.intl.string(eW.t.obLrcH)],
                parent: eZ.s6.BILLING,
            },
            [eZ.s6.APPEARANCE]: {
                section: eV.oAB.APPEARANCE,
                searchableTitles: [eW.intl.string(eW.t["iHH+k5"])],
                label: eW.intl.string(eW.t["iHH+k5"]),
                ariaLabel: eW.intl.string(eW.t["iHH+k5"]),
                element: es.Z,
                newIndicator: (0, r.jsx)(e1, {}),
                newIndicatorDismissibleContentTypes: e0(),
                url: eV.Z5c.SETTINGS("appearance"),
            },
            [eZ.s6.APPEARANCE_THEME]: {
                section: eV.oAB.APPEARANCE,
                searchableTitles: [eW.intl.string(eW.t.Ksh3io)],
                parent: eZ.s6.APPEARANCE,
            },
            [eZ.s6.APPEARANCE_COLOR]: {
                section: eV.oAB.APPEARANCE,
                searchableTitles: [eW.intl.string(eW.t.OCOOiI)],
                parent: eZ.s6.APPEARANCE_THEME,
            },
            [eZ.s6.APPEARANCE_ICON]: {
                section: eV.oAB.APPEARANCE,
                searchableTitles: [eW.intl.string(eW.t.RPh2oq)],
                parent: eZ.s6.APPEARANCE_THEME,
            },
            [eZ.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eV.oAB.APPEARANCE,
                searchableTitles: [eW.intl.string(eW.t.ZEoGMT)],
                parent: eZ.s6.APPEARANCE,
            },
            [eZ.s6.APPEARANCE_LIST_SPACING]: {
                section: eV.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eZ.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eW.intl.string(eW.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
            },
            [eZ.s6.APPEARANCE_SCALING_SPACING]: {
                section: eV.oAB.APPEARANCE,
                searchableTitles: [eW.intl.string(eW.t.qPOqoK)],
                parent: eZ.s6.APPEARANCE,
            },
            [eZ.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eV.oAB.APPEARANCE,
                searchableTitles: [
                    eW.intl.string(eW.t.dyamEB),
                    eW.intl.string(eW.t.p8NOws),
                    eW.intl.string(eW.t["+o/sOj"]),
                ],
                parent: eZ.s6.APPEARANCE,
                predicate: () =>
                    U.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eZ.s6.ACCESSIBILITY]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.G0neg4)],
                label: eW.intl.string(eW.t.G0neg4),
                ariaLabel: eW.intl.string(eW.t.G0neg4),
                element: er.Z,
                url: eV.Z5c.SETTINGS("accessibility"),
            },
            [eZ.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.aZlePj)],
                parent: eZ.s6.ACCESSIBILITY,
            },
            [eZ.s6.ACCESSIBILITY_SATURATION]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t["5PWWCQ"])],
                parent: eZ.s6.ACCESSIBILITY,
            },
            [eZ.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.bQCodH)],
                parent: eZ.s6.ACCESSIBILITY_SATURATION,
            },
            [eZ.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.OLZFBw)],
                parent: eZ.s6.ACCESSIBILITY,
            },
            [eZ.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t["+IsihY"])],
                parent: eZ.s6.ACCESSIBILITY,
                predicate: () => (0, v.l)("SettingsRendererConfig"),
            },
            [eZ.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.uSOPWl)],
                parent: eZ.s6.ACCESSIBILITY,
            },
            [eZ.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eK.default["2gFUEx"])],
                parent: eZ.s6.ACCESSIBILITY,
            },
            [eZ.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.BT8Bmp)],
                parent: eZ.s6.ACCESSIBILITY,
            },
            [eZ.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t["sSY+mJ"])],
                parent: eZ.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eZ.s6.ACCESSIBILITY_CONTRAST]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.TYyfOz)],
                parent: eZ.s6.ACCESSIBILITY,
            },
            [eZ.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.cguieX)],
                parent: eZ.s6.ACCESSIBILITY_CONTRAST,
            },
            [eZ.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.e3TR1d)],
                parent: eZ.s6.ACCESSIBILITY,
            },
            [eZ.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.b3XBzs)],
                parent: eZ.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eZ.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.Iayoh4)],
                parent: eZ.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eZ.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.iIaOlZ)],
                parent: eZ.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eZ.s6.ACCESSIBILITY_STICKERS]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t["6NtAuL"])],
                parent: eZ.s6.ACCESSIBILITY,
            },
            [eZ.s6.ACCESSIBILITY_MESSAGES]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.onqU6u)],
                parent: eZ.s6.ACCESSIBILITY,
            },
            [eZ.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t["3Fztn5"])],
                parent: eZ.s6.ACCESSIBILITY_MESSAGES,
            },
            [eZ.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.TZ2hZG)],
                parent: eZ.s6.ACCESSIBILITY_MESSAGES,
            },
            [eZ.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.VpSKeH)],
                parent: eZ.s6.ACCESSIBILITY,
            },
            [eZ.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.qvTIwc)],
                parent: eZ.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eZ.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eW.intl.string(eW.t.lsW5Eh)],
                parent: eZ.s6.ACCESSIBILITY,
            },
            [eZ.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eV.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.CF],
                parent: eZ.s6.ACCESSIBILITY,
            },
            [eZ.s6.VOICE_AND_VIDEO]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.B1fFpa)],
                label: eW.intl.string(eW.t.B1fFpa),
                ariaLabel: eW.intl.string(eW.t.B1fFpa),
                element: ek.Z,
                predicate: () => V.Z.isSupported(),
                url: eV.Z5c.SETTINGS("voice"),
            },
            [eZ.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.K3lovL), eW.intl.string(eW.t.NiTd0d)],
                parent: eZ.s6.VOICE_AND_VIDEO,
            },
            [eZ.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.FlNoSU)],
                parent: eZ.s6.VOICE_AND_VIDEO,
            },
            [eZ.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.ABjMWF)],
                parent: eZ.s6.VOICE_AND_VIDEO,
            },
            [eZ.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.OFpL3d)],
                parent: eZ.s6.VOICE_AND_VIDEO,
            },
            [eZ.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.KDdjoq), eW.intl.string(eW.t.FeUKeH)],
                parent: eZ.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eZ.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.K3lovL), eW.intl.string(eW.t.NiTd0d)],
                parent: eZ.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eZ.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eV.oAB.VOICE,
                searchableTitles: [
                    eW.intl.string(eW.t.hHMYbW),
                    eW.intl.string(eW.t.dl18zc),
                    eW.intl.string(eW.t.nuFtHB),
                    eW.intl.string(eW.t["3182VF"]),
                    eW.intl.string(eW.t["DGq/PT"]),
                ],
                parent: eZ.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eZ.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eV.oAB.VOICE,
                searchableTitles: [
                    eW.intl.string(eW.t.OX2Bnp),
                    eW.intl.string(eW.t.eATD2N),
                    eW.intl.string(eW.t.nuFtHB),
                    eW.intl.string(eW.t["3182VF"]),
                    eW.intl.string(eW.t["DGq/PT"]),
                ],
                parent: eZ.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eZ.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.gyljWF), eW.intl.string(eW.t.nuFtHB)],
                parent: eZ.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eZ.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eV.oAB.VOICE,
                searchableTitles: [
                    eW.intl.string(eW.t.LM3U3t),
                    eW.intl.string(eW.t.nuFtHB),
                    eW.intl.string(eW.t.VZPR0d),
                    eW.intl.string(eW.t.cjPbpa),
                ],
                parent: eZ.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, J.R)({
                        location: "SettingsRendererConfig",
                        autoTrackExposure: !1,
                    });
                    return e.length > 0;
                },
            },
            [eZ.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t["pS+K2N"]), eW.intl.string(eW.t.nuFtHB)],
                parent: eZ.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => td !== eB._.STUDIO,
            },
            [eZ.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t["sqUm+v"]), eW.intl.string(eW.t.nuFtHB)],
                parent: eZ.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tu === eY.pM.VOICE_ACTIVITY && tf,
            },
            [eZ.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.e7LIiY)],
                parent: eZ.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eZ.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.nzUc3N)],
                parent: eZ.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eZ.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.ABjMWF)],
                parent: eZ.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eZ.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.nzUc3N)],
                parent: eZ.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eZ.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.LKzQSE)],
                parent: eZ.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eZ.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.F122Gx)],
                parent: eZ.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => V.Z.supports(eY.AN.VIDEO),
            },
            [eZ.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t["3Ppr1t"])],
                parent: eZ.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eZ.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.lZTUPj)],
                parent: eZ.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => V.Z.supports(eY.AN.VIDEO),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t["8/udY2"])],
                parent: eZ.s6.VOICE_AND_VIDEO,
            },
            [eZ.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t["8/udY2"])],
                parent: eZ.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => !(0, z.isWeb)(),
            },
            [eZ.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t["8/udY2"])],
                parent: eZ.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.Tceiq6)],
                parent: eZ.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED,
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t["71Ve19"])],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => V.Z.supports(eY.AN.OPEN_H264),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.Sln58f)],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.AxnPm5)],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => "stable" !== q.ZP.releaseChannel && V.Z.isExperimentalEncodersSupported(),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t["6I6GUl"])],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => tf,
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.iWTwu7)],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t["/jwMtr"])],
                parent: eZ.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eZ.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.OBwCXF)],
                parent: eZ.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.t8QhiY), eW.intl.string(eW.t.hmfkCg)],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => V.Z.isNoiseSuppressionSupported(),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.BbESsr)],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => V.Z.isAdvancedVoiceActivitySupported(),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.cUMdHx)],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => V.Z.isAutomaticGainControlSupported(),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.DFPXIC)],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => V.Z.showBypassSystemInputProcessing(),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.uancuL)],
                parent: eZ.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => V.Z.supports(eY.AN.QOS),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.oSdBvb)],
                parent: eZ.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => V.Z.supports(eY.AN.ATTENUATION),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.wVBHr6)],
                parent: eZ.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => V.Z.shouldOfferManualSubsystemSelection(),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eV.oAB.VOICE,
                searchableTitles: [
                    eW.intl.string(eW.t.KDdjoq),
                    eW.intl.string(eW.t.NMCIf3),
                    eW.intl.string(eW.t.FeUKeH),
                ],
                parent: eZ.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    V.Z.supportsVideoHook() ||
                    V.Z.supportsExperimentalSoundshare() ||
                    (V.Z.supportsSystemScreensharePicker() && (0, z.isMac)()),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.GmWk2N), eW.intl.string(eW.t["Fj/xn5"])],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => V.Z.supportsVideoHook(),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t["4I0qzc"])],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => V.Z.supportsExperimentalSoundshare() && V.Z.supportsHookSoundshare(),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.ie1mgY)],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => V.Z.supportsSystemScreensharePicker() && (0, z.isMac)(),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t["aP1N/v"])],
                parent: eZ.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => z.isPlatformEmbedded,
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.OFpL3d)],
                parent: eZ.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t["0CEP6e"])],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => X.Sb.getSetting(),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t["r6K+TE"])],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => V.Z.isAecDumpSupported(),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t.U4FgFB)],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === q.ZP.releaseChannel || "development" === q.ZP.releaseChannel) &&
                    e8 &&
                    V.Z.supports(eY.AN.CONNECTION_REPLAY),
            },
            [eZ.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t["726JHB"])],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    z.isPlatformEmbedded && V.Z.supports(eY.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [eZ.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eV.oAB.VOICE,
                searchableTitles: [eW.intl.string(eW.t["/RXu6+"])],
                parent: eZ.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eZ.s6.POGGERMODE]: {
                section: eV.oAB.POGGERMODE,
                searchableTitles: [eW.intl.string(eW.t.AtCukJ)],
                label: eW.intl.string(eW.t.AtCukJ),
                ariaLabel: eW.intl.string(eW.t.AtCukJ),
                element: P.Z,
                predicate: () => R.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: eq.poggermodeIcon,
                }),
            },
            [eZ.s6.CHAT]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t["/VQax8"])],
                label: eW.intl.string(eW.t["/VQax8"]),
                ariaLabel: eW.intl.string(eW.t["/VQax8"]),
                element: eC.Z,
                url: eV.Z5c.SETTINGS("text"),
            },
            [eZ.s6.CHAT_INLINE_MEDIA]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.U68Dgo)],
                parent: eZ.s6.CHAT,
            },
            [eZ.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.U47N1t)],
                parent: eZ.s6.CHAT_INLINE_MEDIA,
            },
            [eZ.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.VP11Nj)],
                parent: eZ.s6.CHAT_INLINE_MEDIA,
            },
            [eZ.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t["5S2AKy"])],
                parent: eZ.s6.CHAT_INLINE_MEDIA,
            },
            [eZ.s6.CHAT_EMBEDS]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.PWZOn5)],
                parent: eZ.s6.CHAT,
            },
            [eZ.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.xX0ZTE)],
                parent: eZ.s6.CHAT_EMBEDS,
            },
            [eZ.s6.CHAT_EMOJI]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.sMOuub)],
                parent: eZ.s6.CHAT,
            },
            [eZ.s6.CHAT_EMOJI_REACTIONS]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.Iv24sr)],
                parent: eZ.s6.CHAT_EMOJI,
            },
            [eZ.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t["79qal5"])],
                parent: eZ.s6.CHAT_EMOJI,
            },
            [eZ.s6.CHAT_STICKERS]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t["6NtAuL"])],
                parent: eZ.s6.CHAT,
            },
            [eZ.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t["29xPVV"])],
                parent: eZ.s6.CHAT_STICKERS,
            },
            [eZ.s6.CHAT_SOUNDMOJI]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.EHlAMT)],
                parent: eZ.s6.CHAT,
            },
            [eZ.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t["CtYr+f"])],
                parent: eZ.s6.CHAT_SOUNDMOJI,
            },
            [eZ.s6.CHAT_TEXT_BOX]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.afR0pK)],
                parent: eZ.s6.CHAT,
            },
            [eZ.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.AqGrEB)],
                parent: eZ.s6.CHAT_TEXT_BOX,
            },
            [eZ.s6.CHAT_THREADS]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.B2panJ)],
                parent: eZ.s6.CHAT,
            },
            [eZ.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.AInv5u)],
                parent: eZ.s6.CHAT_THREADS,
            },
            [eZ.s6.CHAT_SPOILERS]: {
                section: eV.oAB.TEXT,
                searchableTitles: [eW.intl.string(eW.t.QgwmV1)],
                parent: eZ.s6.CHAT,
            },
            [eZ.s6.NOTIFICATIONS]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.HcoRu7)],
                label: eW.intl.string(eW.t.HcoRu7),
                ariaLabel: eW.intl.string(eW.t.HcoRu7),
                element: eO.Z,
                url: eV.Z5c.SETTINGS("notifications"),
            },
            [eZ.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t["/0WClp"])],
                parent: eZ.s6.NOTIFICATIONS,
            },
            [eZ.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eZ.s6.NOTIFICATIONS,
            },
            [eZ.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.VH8AIC)],
                parent: eZ.s6.NOTIFICATIONS,
            },
            [eZ.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.xSmFQE)],
                parent: eZ.s6.NOTIFICATIONS,
                predicate: () => (0, z.isWindows)(),
            },
            [eZ.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.z21l8P)],
                parent: eZ.s6.NOTIFICATIONS,
            },
            [eZ.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: ["New Notification Settings (Advanced, Staff Only)"],
                parent: eZ.s6.NOTIFICATIONS,
                predicate: () => !1,
            },
            [eZ.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: ["Restore most recent snapshot"],
                parent: eZ.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eZ.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: ["Launch Migration"],
                parent: eZ.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eZ.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: ["Toggle new system on/off"],
                parent: eZ.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eZ.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.TTvjd3)],
                parent: eZ.s6.NOTIFICATIONS,
            },
            [eZ.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.VpSKeH)],
                parent: eZ.s6.NOTIFICATIONS,
            },
            [eZ.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.D9yVAA)],
                parent: eZ.s6.NOTIFICATIONS,
            },
            [eZ.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.u6dc5O)],
                parent: eZ.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eZ.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.P8MG6u)],
                parent: eZ.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eZ.s6.NOTIFICATIONS_SOUNDS]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.MKWyKS)],
                parent: eZ.s6.NOTIFICATIONS,
            },
            [eZ.s6.NOTIFICATIONS_EMAILS]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.TPchzM)],
                parent: eZ.s6.NOTIFICATIONS,
            },
            [eZ.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t["B75+xc"])],
                parent: eZ.s6.NOTIFICATIONS_EMAILS,
            },
            [eZ.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.sxn7lZ)],
                parent: eZ.s6.NOTIFICATIONS_EMAILS,
            },
            [eZ.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.EkxXhY)],
                parent: eZ.s6.NOTIFICATIONS_EMAILS,
            },
            [eZ.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.jNrkrK)],
                parent: eZ.s6.NOTIFICATIONS_EMAILS,
            },
            [eZ.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.E8g1l5)],
                parent: eZ.s6.NOTIFICATIONS_EMAILS,
            },
            [eZ.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.Ra9Pws)],
                parent: eZ.s6.NOTIFICATIONS_EMAILS,
            },
            [eZ.s6.NOTIFICATIONS_REACTIONS]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.Rq0NFh)],
                parent: eZ.s6.NOTIFICATIONS,
            },
            [eZ.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.wtk08f)],
                parent: eZ.s6.NOTIFICATIONS,
                predicate: () => (0, B.JN)("SettingsRendererConfig"),
            },
            [eZ.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eV.oAB.NOTIFICATIONS,
                searchableTitles: [eW.intl.string(eW.t.pW4TMj)],
                parent: eZ.s6.NOTIFICATIONS,
            },
            [eZ.s6.KEYBINDS]: {
                section: eV.oAB.KEYBINDS,
                searchableTitles: [eW.intl.string(eW.t.T9DA2N)],
                label: eW.intl.string(eW.t.T9DA2N),
                element: eb.Z,
                url: eV.Z5c.SETTINGS("keybinds"),
            },
            [eZ.s6.LANGUAGE]: {
                section: eV.oAB.LOCALE,
                searchableTitles: [eW.intl.string(eW.t.IHMsPj)],
                label: eW.intl.string(eW.t.IHMsPj),
                element: ey.Z,
                url: eV.Z5c.SETTINGS("language"),
            },
            [eZ.s6.WINDOW_SETTINGS]: {
                section: eV.oAB.WINDOWS,
                searchableTitles: [eW.intl.string(eW.t.ZkDZoq)],
                label: eW.intl.string(eW.t.ZkDZoq),
                element: eP.Z,
                predicate: () => z.isPlatformEmbedded && (0, z.isWindows)(),
            },
            [eZ.s6.LINUX_SETTINGS]: {
                section: eV.oAB.LINUX,
                searchableTitles: [eW.intl.string(eW.t["7pPjTU"])],
                label: eW.intl.string(eW.t["7pPjTU"]),
                element: e4,
                predicate: () => z.isPlatformEmbedded && (0, z.isLinux)(),
            },
            [eZ.s6.STREAMER_MODE]: {
                section: eV.oAB.STREAMER_MODE,
                searchableTitles: [eW.intl.string(eW.t.S5GfOT)],
                label: eW.intl.string(eW.t.S5GfOT),
                ariaLabel: eW.intl.string(eW.t.S5GfOT),
                element: eA.Z,
                url: eV.Z5c.SETTINGS("streamer-mode"),
            },
            [eZ.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eV.oAB.STREAMER_MODE,
                searchableTitles: [eW.intl.string(eW.t.bxGbHB)],
                parent: eZ.s6.STREAMER_MODE,
            },
            [eZ.s6.STREAMER_MODE_ENABLE]: {
                section: eV.oAB.STREAMER_MODE,
                searchableTitles: [eW.intl.string(eW.t.p9ZAJS)],
                parent: eZ.s6.STREAMER_MODE,
            },
            [eZ.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eV.oAB.STREAMER_MODE,
                searchableTitles: [eW.intl.string(eW.t.UpQziI)],
                parent: eZ.s6.STREAMER_MODE,
            },
            [eZ.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eV.oAB.STREAMER_MODE,
                searchableTitles: [eW.intl.string(eW.t.q7WNGh)],
                parent: eZ.s6.STREAMER_MODE,
            },
            [eZ.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eV.oAB.STREAMER_MODE,
                searchableTitles: [eW.intl.string(eW.t["1CWknJ"])],
                parent: eZ.s6.STREAMER_MODE,
            },
            [eZ.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eV.oAB.STREAMER_MODE,
                searchableTitles: [eW.intl.string(eW.t.qmYiYW)],
                parent: eZ.s6.STREAMER_MODE,
            },
            [eZ.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eV.oAB.STREAMER_MODE,
                searchableTitles: [eW.intl.string(eW.t["iA81+f"])],
                parent: eZ.s6.STREAMER_MODE,
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
            [eZ.s6.SETTINGS_ADVANCED]: {
                section: eV.oAB.ADVANCED,
                searchableTitles: [eW.intl.string(eW.t["8/udY2"])],
                label: eW.intl.string(eW.t["8/udY2"]),
                ariaLabel: eW.intl.string(eW.t["8/udY2"]),
                element: eo.ZP,
            },
            [eZ.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eV.oAB.ADVANCED,
                searchableTitles: [eW.intl.string(eW.t.ObIb1d)],
                parent: eZ.s6.SETTINGS_ADVANCED,
                predicate: () => W.wS,
            },
            [eZ.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eV.oAB.ADVANCED,
                searchableTitles: [eW.intl.string(eW.t["eOC/Fx"])],
                parent: eZ.s6.SETTINGS_ADVANCED,
                predicate: () => z.isPlatformEmbedded,
            },
            [eZ.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eV.oAB.ADVANCED,
                searchableTitles: [eW.intl.string(eW.t.fi3UQE)],
                parent: eZ.s6.SETTINGS_ADVANCED,
                predicate: () => tt,
            },
            [eZ.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eV.oAB.ADVANCED,
                searchableTitles: [eW.intl.string(eW.t.erOqlp)],
                parent: eZ.s6.SETTINGS_ADVANCED,
                predicate: () => tr,
            },
            [eZ.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eV.oAB.ADVANCED,
                searchableTitles: [eW.intl.string(eW.t.qDZryM)],
                parent: eZ.s6.SETTINGS_ADVANCED,
            },
            [eZ.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eV.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: eZ.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    g.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [eZ.s6.ACTIVITY_PRIVACY]: {
                section: eV.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.Cq98yM)],
                label: eW.intl.string(eW.t.Cq98yM),
                ariaLabel: eW.intl.string(eW.t.Cq98yM),
                element: ea.Z,
                predicate: () => !eX,
                url: eV.Z5c.SETTINGS("activity-privacy"),
            },
            [eZ.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eX ? eV.oAB.GAMES : eV.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t["8ka8lp"])],
                parent: eX ? eZ.s6.GAMES_ACTIVITY_PRIVACY : eZ.s6.ACTIVITY_PRIVACY,
            },
            [eZ.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eX ? eV.oAB.GAMES : eV.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t.VOszPD)],
                parent: eX ? eZ.s6.GAMES_ACTIVITY_PRIVACY : eZ.s6.ACTIVITY_PRIVACY,
            },
            [eZ.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eX ? eV.oAB.GAMES : eV.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eZ.CF],
                parent: eX ? eZ.s6.GAMES_ACTIVITY_PRIVACY : eZ.s6.ACTIVITY_PRIVACY,
            },
            [eZ.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eV.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eW.intl.string(eW.t["4F2KoK"])],
                parent: eZ.s6.ACTIVITY_PRIVACY,
            },
            [eZ.s6.REGISTERED_GAMES]: {
                section: eV.oAB.REGISTERED_GAMES,
                searchableTitles: [eW.intl.string(eW.t.AVDyEh)],
                label: eW.intl.string(eW.t.AVDyEh),
                element: em.Z,
                predicate: () => !eX && (0, eL.Jw)(),
            },
            [eZ.s6.OVERLAY]: {
                section: eV.oAB.OVERLAY,
                searchableTitles: [eW.intl.string(eW.t["9cb1U1"]), eW.intl.string(eW.t.HcoRu7)],
                label: eW.intl.string(eW.t["9cb1U1"]),
                element: ev.Z,
                predicate: () => !eX && A,
            },
            [eZ.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, E.Z)(!0),
                searchableTitles: [eW.intl.string(eW.t.LRmNAg)],
                label: eW.intl.string(eW.t.LRmNAg),
            },
            [eZ.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    Y.default.track(eV.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, K.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                Y.default.track(eV.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, p.Z)(e);
                            },
                        });
                },
                searchableTitles: [eW.intl.string(eW.t.sMEktb)],
                label: eW.intl.string(eW.t.sMEktb),
                ariaLabel: eW.intl.string(eW.t.sMEktb),
            },
            [eZ.s6.HYPESQUAD]: {
                section: eV.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eW.intl.string(eW.t["k0R+4e"])],
                label: eW.intl.string(eW.t["k0R+4e"]),
                element: eg.Z,
                predicate: () => !to,
            },
            [eZ.s6.TOWNHALL]: {
                section: eV.oAB.TOWNHALL,
                searchableTitles: [eW.intl.string(eW.t.dnZNER)],
                label: eW.intl.string(eW.t.dnZNER),
                predicate: () => to,
                onClick: () => {
                    (0, p.Z)("https://discord.gg/discord-townhall"), (0, ew.default)();
                },
            },
            [eZ.s6.EXPERIMENTS]: {
                section: eV.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: ex.Z,
                predicate: () => Z.Z.isDeveloper,
                url: eV.Z5c.SETTINGS("experiments"),
            },
            [eZ.s6.DEVELOPER_OPTIONS]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: ep.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eZ.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eZ.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eZ.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eZ.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eZ.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eZ.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eZ.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eZ.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eZ.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eZ.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eZ.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eZ.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e8 && Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eZ.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eZ.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eZ.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e8 && Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eZ.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eZ.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eZ.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e8 && Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Toggleable Components"],
                parent: eZ.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e8 && Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eZ.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e8 && Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eZ.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e8 && Z.Z.isDeveloper && F.default.layoutDebuggingEnabled,
            },
            [eZ.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eZ.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e8 && Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eZ.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e8 && Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eZ.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eZ.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eZ.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eZ.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eZ.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eZ.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => m.q && Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eZ.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eZ.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eZ.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eZ.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eZ.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eV.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eZ.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.PAYMENT_FLOW_MODALS]: {
                section: eV.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ["Payment Flow Modals"],
                label: "Payment Flow Modals",
                element: $.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.REVENUE_STORYBOOK]: {
                section: eV.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: [
                    "Revenue Storybook",
                    "Payment Components",
                    "Orb Components",
                    "Virtual Currency",
                    "Nitro Components",
                ],
                label: "Revenue Storybook",
                element: eU.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eV.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ["Virtual Currency", "Orb", "Config"],
                label: "Virtual Currency Config",
                element: eG.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.PAYMENT_COMPONENTS]: {
                section: eV.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Payment Components"],
                label: "Payment Components",
                element: eU.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.ORB_COMPONENTS]: {
                section: eV.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Orb Components"],
                label: "Orb Components",
                element: eU.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.NITRO_COMPONENTS]: {
                section: eV.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Nitro Components"],
                label: "Nitro Components",
                element: eU.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.TEXT_PLAYGROUND]: {
                section: eV.oAB.TEXT_PLAYGROUND,
                searchableTitles: ["Text Playground"],
                label: "Text Playground",
                element: eN.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DESIGN_SYSTEMS]: {
                section: eV.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Design Systems"],
                label: "Design Systems",
                element: e_.Z,
                predicate: () => Z.Z.isDeveloper,
                url: eV.Z5c.SETTINGS("design-systems"),
            },
            [eZ.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eV.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Colors"],
                label: "Colors",
                element: e_.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.ANIMATION_TESTING]: {
                section: eV.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Animation Testing"],
                label: "Animation Testing",
                element: e_.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eV.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Components"],
                label: "Components",
                element: e_.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.TEXT_COMPONENTS]: {
                section: eV.oAB.TEXT_COMPONENT,
                searchableTitles: ["Text Components"],
                label: "Text Components",
                element: en.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.SHOP_KEEPER]: {
                section: eV.oAB.SHOP_KEEPER,
                searchableTitles: ["Shop Keeper"],
                label: "Shop Keeper",
                element: I.Z,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.QUEST_PREVIEW_TOOL]: {
                section: eV.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ["Quest Preview Tool"],
                label: "Quest Preview Tool",
                element: M.Z,
                predicate: () => (0, L.X)({ location: eH.dr.QUEST_PREVIEW_TOOL }),
            },
            [eZ.s6.QUEST_PREVIEW_TOOL_2]: {
                section: eV.oAB.QUEST_PREVIEW_TOOL_2,
                searchableTitles: ["Quest Preview Tool 2"],
                label: "Quest Preview Tool 2",
                element: () => (0, r.jsx)(k.Z, { questId: null == b ? void 0 : b.quest_id }),
                predicate: () => (0, L.T)({ location: eH.dr.QUEST_PREVIEW_TOOL_2 }),
            },
            [eZ.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG]: {
                section: eV.oAB.QUEST_MINOR_REWARD_CAPPING_CONFIG,
                searchableTitles: ["Minor Reward Capping Config"],
                label: "Minor Reward Capping Config",
                element: j.Z,
                predicate: () => e8,
            },
            [eZ.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM]: {
                section: f.ID.CUSTOM,
                searchableTitles: eD.Y,
                label: "Developer Education",
                element: eD.$,
                predicate: () => Z.Z.isDeveloper,
            },
            [eZ.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            e$(
                                eQ(
                                    {
                                        header: eW.intl.string(eW.t["2jxGen"]),
                                        confirmText: eW.intl.string(eW.t["2jxGen"]),
                                        cancelText: eW.intl.string(eW.t["ETE/oK"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: eW.intl.string(eW.t.SUnWBA),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: eW.intl.string(eW.t["2jxGen"]),
                ariaLabel: eW.intl.string(eW.t["2jxGen"]),
                icon: (0, r.jsx)(s.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [eZ.s6.SOCIAL_LINKS]: {
                section: f.ID.CUSTOM,
                element: et.Z,
            },
            [eZ.s6.CLIENT_DEBUG_INFO]: {
                section: f.ID.CUSTOM,
                element: Q.Z,
            },
        });
    };
