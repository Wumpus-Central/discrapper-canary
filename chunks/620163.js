n.d(t, {
    $Z: () => e3,
    OF: () => e8,
    W8: () => e6,
    c$: () => e4,
    iE: () => e7,
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
    u = n(37234),
    d = n(809206),
    f = n(230711),
    _ = n(493544),
    p = n(579806),
    h = n(782568),
    m = n(758182),
    g = n(49226),
    E = n(163379),
    b = n(803038),
    y = n(703288),
    O = n(574755),
    v = n(675997),
    I = n(994714),
    S = n(377171),
    T = n(621628),
    A = n(243778),
    C = n(594928),
    N = n(890022),
    R = n(18438),
    P = n(778825),
    w = n(665166),
    D = n(351780),
    x = n(231765),
    L = n(813732),
    j = n(398140),
    M = n(564344),
    k = n(36243),
    U = n(14676),
    G = n(652380),
    B = n(877109),
    Z = n(145158),
    F = n(447448),
    V = n(462354),
    H = n(906467),
    Y = n(857192),
    W = n(131951),
    K = n(25990),
    z = n(626135),
    q = n(572004),
    X = n(49012),
    Q = n(358085),
    J = n(998502),
    $ = n(695346),
    ee = n(604227),
    et = n(38915),
    en = n(321614),
    er = n(498639),
    ei = n(748717),
    ea = n(419636),
    eo = n(799071),
    es = n(154022),
    el = n(393681),
    ec = n(309739),
    eu = n(64914),
    ed = n(501348),
    ef = n(795594),
    e_ = n(443702),
    ep = n(327192),
    eh = n(949493),
    em = n(675047),
    eg = n(177508),
    eE = n(956699),
    eb = n(54942),
    ey = n(293389),
    eO = n(88624),
    ev = n(387747),
    eI = n(389650),
    eS = n(649157),
    eT = n(593648),
    eA = n(327885),
    eC = n(595242),
    eN = n(463153),
    eR = n(36192),
    eP = n(889029),
    ew = n(400287),
    eD = n(554042),
    ex = n(936982),
    eL = n(200645),
    ej = n(287490),
    eM = n(706060),
    ek = n(168308),
    eU = n(277329),
    eG = n(273927),
    eB = n(604224),
    eZ = n(43434),
    eF = n(333576),
    eV = n(345655),
    eH = n(726985),
    eY = n(583139),
    eW = n(981631),
    eK = n(46140),
    ez = n(65154),
    eq = n(388032),
    eX = n(693450),
    eQ = n(345909),
    eJ = n(202323);
function e$(e, t, n) {
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
function e0(e) {
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
                e$(e, t, n[t]);
            });
    }
    return e;
}
function e1(e, t) {
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
function e2(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : e1(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let e3 = () => {
        let e = [a.z.CLIENT_THEMES_SETTINGS_BADGE, a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
        return (
            b.Mc.getCurrentConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            e
        );
    },
    e4 = () => {
        let e = e3(),
            [t] = (0, A.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: eq.intl.string(eq.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE
              ? (0, r.jsx)(s.IGR, { text: eq.intl.string(eq.t.y2b7CA) })
              : null;
    },
    e8 = () => {
        let e = [];
        return (
            (0, F.h)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            C.J.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    e6 = () => {
        let e = e8(),
            [t] = (0, A.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: eq.intl.string(eq.t.y2b7CA) })
            : null;
    },
    e5 = eL.Z,
    e7 = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: b,
            impressionSource: A,
            numOfPendingFamilyRequests: C,
            isOverlaySupported: F,
            isClipsBetaTagShowing: e$ = !1,
            shouldMergeGameSettings: e1,
            isKeywordFilteringEnabled: e7,
            isStaff: e9,
            isInappropriateConversationWarningEnabled: te,
            isInapproprateConversationsDefaultOn: tt,
            paymentsBlocked: tn,
            isEligibleForQuests: tr,
            isStricterMessageRequestsEnabled: ti,
            hasLibraryApplication: ta,
            hasTOTPEnabled: to,
            developerMode: ts,
            isAdultUser: tl,
            hasSecureFramesVerifiedUserIds: tc,
            hypeSquadRemoved: tu,
            hasIgnoredUsers: td,
            hasBlockedUsers: tf,
            isEligibleForSensitiveContentDefaults: t_,
            inputMode: tp,
            activeInputProfile: th,
            isInputProfileCustom: tm,
            isDataUsage3PToggleEnabled: tg,
        } = e;
        return Object.freeze({
            [eH.s6.SEARCH_NO_RESULTS]: {
                section: _.ID.CUSTOM,
                element: eN.Z,
            },
            [eH.s6.ACCOUNT_SECURITY_TAB]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eq.intl.string(eq.t.Am9YHh)],
                label: eq.intl.string(eq.t.Am9YHh),
            },
            [eH.s6.ACCOUNT]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eq.intl.string(eq.t["JAIM/v"])],
                label: eq.intl.string(eq.t["JAIM/v"]),
                ariaLabel: eq.intl.string(eq.t["JAIM/v"]),
                element: el.Z,
                url: eW.Z5c.SETTINGS("account"),
            },
            [eH.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eq.intl.string(eq.t.LYju5O)],
                parent: eH.s6.ACCOUNT,
                section: eW.oAB.ACCOUNT,
            },
            [eH.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eq.intl.string(eq.t["9AjdkJ"])],
                section: eW.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_PROFILE,
            },
            [eH.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eq.intl.string(eq.t.Ulqq6O)],
                section: eW.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_PROFILE,
            },
            [eH.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    eq.intl.string(eq.t["/52UY2"]),
                    eq.intl.string(eq.t.sK0dmJ),
                    eq.intl.string(eq.t.XxRj7e),
                    eq.intl.string(eq.t.yNGjyM),
                    eq.intl.string(eq.t.KPGVWl),
                ],
                section: eW.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_PROFILE,
                predicate: () => t_,
            },
            [eH.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eq.intl.string(eq.t["+JkHPz"])],
                section: eW.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_PROFILE,
            },
            [eH.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eq.intl.string(eq.t.oP5zGB)],
                section: eW.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_PROFILE,
            },
            [eH.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eq.intl.string(eq.t.pKSjEh)],
                section: eW.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT,
            },
            [eH.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eq.intl.string(eq.t["FRep5+"])],
                section: eW.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eH.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eq.intl.string(eq.t["7qKDrK"])],
                section: eW.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eH.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eq.intl.string(eq.t.m0FidH)],
                section: eW.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eH.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eq.intl.string(eq.t.cDgKtb)],
                section: eW.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !to,
            },
            [eH.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eq.intl.string(eq.t["D+aE7u"])],
                section: eW.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => to,
            },
            [eH.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eq.intl.string(eq.t.fZSi1N)],
                section: eW.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eH.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eq.intl.string(eq.t.uHAJ5u)],
                section: eW.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eH.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eq.intl.string(eq.t.vrOCCg)],
                section: eW.oAB.ACCOUNT,
                parent: eH.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eH.s6.ACCOUNT_REMOVAL]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eq.intl.string(eq.t.ZKsIkp)],
                parent: eH.s6.ACCOUNT,
            },
            [eH.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eq.intl.string(eq.t.jf5GGR)],
                parent: eH.s6.ACCOUNT_REMOVAL,
            },
            [eH.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eq.intl.string(eq.t["8lQ2ra"])],
                parent: eH.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eH.s6.GAMES]: {
                section: eW.oAB.GAMES,
                searchableTitles: [eq.intl.string(eq.t.URyqtL)],
                label: eq.intl.string(eq.t.URyqtL),
                ariaLabel: eq.intl.string(eq.t.URyqtL),
                element: eU.Z,
                predicate: () => e1,
            },
            [eH.s6.GAMES_MY_GAMES]: {
                section: eW.oAB.GAMES,
                searchableTitles: [eq.intl.string(eq.t["5DMgp6"])],
                parent: eH.s6.GAMES,
            },
            [eH.s6.GAMES_CLIPS]: {
                section: eW.oAB.GAMES,
                searchableTitles: [eq.intl.string(eq.t.z2jK6e)],
                parent: eH.s6.GAMES,
            },
            [eH.s6.GAMES_OVERLAY]: {
                section: eW.oAB.GAMES,
                searchableTitles: [eq.intl.string(eq.t["9cb1U1"])],
                parent: eH.s6.GAMES,
            },
            [eH.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eW.oAB.GAMES,
                searchableTitles: [eq.intl.string(eq.t.Cq98yM)],
                parent: eH.s6.GAMES,
            },
            [eH.s6.PROFILE_CUSTOMIZATION]: {
                section: eW.oAB.PROFILE_CUSTOMIZATION,
                type: _.bT.WIDE,
                searchableTitles: [eq.intl.string(eq.t["vi7f+v"])],
                label: eq.intl.string(eq.t["vi7f+v"]),
                ariaLabel: eq.intl.string(eq.t["vi7f+v"]),
                element: M.Z,
                newIndicator: (0, r.jsx)(e6, {}),
                newIndicatorDismissibleContentTypes: [...e8()],
                notice: {
                    stores: [K.Z, P.Z],
                    element: j.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, R.It)(), (0, d.P6)(), f.Z.clearSubsection(eW.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eW.Z5c.SETTINGS("profile-customization"),
            },
            [eH.s6.PROFILE_DISPLAY_NAME]: {
                section: eW.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eq.intl.string(eq.t["9AjdkJ"])],
                parent: eH.s6.PROFILE_CUSTOMIZATION,
            },
            [eH.s6.PROFILE_USER_PROFILE]: {
                section: eW.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eq.intl.string(eq.t["2p07FR"]), eq.intl.string(eq.t["7vhiqq"])],
                parent: eH.s6.PROFILE_CUSTOMIZATION,
            },
            [eH.s6.PROFILE_SERVER_PROFILES]: {
                section: eW.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eq.intl.string(eq.t.kPHroa)],
                parent: eH.s6.PROFILE_CUSTOMIZATION,
            },
            [eH.s6.CONTENT_SOCIAL]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                label: eq.intl.string(eq.t["+o1pDQ"]),
                searchableTitles: [eq.intl.string(eq.t["+o1pDQ"])],
                ariaLabel: eq.intl.string(eq.t["+o1pDQ"]),
                element: eh.Z,
                url: eW.Z5c.SETTINGS("content-and-social"),
            },
            [eH.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t["+o1pDQ"]), eq.intl.string(eq.t["/7xJCA"])],
                parent: eH.s6.CONTENT_SOCIAL,
            },
            [eH.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t["+o1pDQ"]), eq.intl.string(eq.t["/7xJCA"])],
                parent: eH.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eH.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.YpCiMj)],
                parent: eH.s6.CONTENT_SOCIAL,
            },
            [eH.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                label: eq.intl.string(eq.t.YpCiMj),
                searchableTitles: [eq.intl.string(eq.t.YpCiMj)],
                ariaLabel: eq.intl.string(eq.t.YpCiMj),
                parent: eH.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eW.Z5c.SETTINGS(eW.oAB.CONTENT_AND_SOCIAL, eY.C),
            },
            [eH.s6.DATA_PRIVACY]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                label: eq.intl.string(eq.t.OAuOHB),
                searchableTitles: [eq.intl.string(eq.t.OAuOHB)],
                ariaLabel: eq.intl.string(eq.t.OAuOHB),
                element: em.Z,
                url: eW.Z5c.SETTINGS("data-and-privacy"),
            },
            [eH.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eW.oAB.ACCOUNT,
                searchableTitles: [eq.intl.string(eq.t["Vov/9v"])],
                parent: eH.s6.ACCOUNT,
            },
            [eH.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.WWaFn5)],
                parent: eH.s6.DATA_PRIVACY,
                predicate: () => (0, Q.isDesktop)(),
            },
            [eH.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t["opi/XF"])],
                parent: eH.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.xVRG4O)],
                parent: eH.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eH.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.fyA119)],
                parent: eH.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eH.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.fyA119)],
                parent: eH.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eH.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t["/U8Iwc"])],
                parent: eH.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eH.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t["ms+TmZ"])],
                parent: eH.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eH.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t["y62Z/f"])],
                parent: eH.s6.CONTENT_SOCIAL,
            },
            [eH.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.SRZyHh)],
                parent: eH.s6.DATA_PRIVACY,
            },
            [eH.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eq.intl.string(eq.t.uEz8JC),
                    eq.intl.string(eq.t["N/oRIy"]),
                    eq.intl.string(eq.t.QVdYsL),
                    eq.intl.string(eq.t["aWD+tr"]),
                    eq.intl.string(eq.t["5mnTa2"]),
                ],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eH.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eq.intl.string(eq.t["Hj/Bur"]),
                    eq.intl.string(eq.t["N/oRIy"]),
                    eq.intl.string(eq.t.QVdYsL),
                    eq.intl.string(eq.t["aWD+tr"]),
                    eq.intl.string(eq.t["5mnTa2"]),
                    eq.intl.string(eq.t.K0OWPz),
                ],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eH.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eq.intl.string(eq.t["Hj/Bur"]),
                    eq.intl.string(eq.t["N/oRIy"]),
                    eq.intl.string(eq.t.QVdYsL),
                    eq.intl.string(eq.t["aWD+tr"]),
                    eq.intl.string(eq.t["5mnTa2"]),
                ],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eH.s6.GORE_MEDIA_REDACTION]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eq.intl.string(eq.t["Hj/Bur"]),
                    eq.intl.string(eq.t["N/oRIy"]),
                    eq.intl.string(eq.t.QVdYsL),
                    eq.intl.string(eq.t["aWD+tr"]),
                    eq.intl.string(eq.t.K0OWPz),
                ],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eH.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eq.intl.string(eq.t.JzaP4u),
                    eq.intl.string(eq.t.H9XOl5),
                    eq.intl.string(eq.t.k4W40N),
                ],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eH.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t["L+yTsb"])],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eH.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.XahVjo)],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eH.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                parent: eH.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eH.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.RAQUSE), eq.intl.string(eq.t.wbYDfX)],
                parent: eH.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eH.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t["3o2ojo"])],
                parent: eH.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !ti,
            },
            [eH.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.OLwZDQ)],
                parent: eH.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eH.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.wBkwu7)],
                parent: eH.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eH.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.XuADY2)],
                parent: eH.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eH.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.MNKzys)],
                parent: eH.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eH.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.VkS7YW), eq.intl.string(eq.t.sJYh5u)],
                parent: eH.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eH.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.CyLYKS)],
                parent: eH.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                predicate: () => tg,
            },
            [eH.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eH.CF],
                parent: eH.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eH.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.dmBSKi)],
                parent: eH.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eH.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t["1UaUy8"]), eq.intl.string(eq.t["xIk/iI"])],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e7,
            },
            [eH.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eq.intl.string(eq.t.qFsx5u)],
                parent: eH.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => te && !tl && !tt,
            },
            [eH.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t["5b3FND"])],
                parent: eH.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => tc,
            },
            [eH.s6.PRIVACY_FAMILY_CENTER]: {
                section: eW.oAB.FAMILY_CENTER,
                searchableTitles: [eq.intl.string(eQ.default.gntCQU)],
                label: eq.intl.string(eQ.default.gntCQU),
                ariaLabel: eq.intl.string(eQ.default.gntCQU),
                element: eb.Z,
                badgeCount: C,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eq.intl.string(eq.t.y2b7CA),
                    color: S.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eW.Z5c.SETTINGS("family-center"),
            },
            [eH.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eW.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.BG7Qsb)],
                parent: eH.s6.DATA_PRIVACY,
            },
            [eH.s6.AUTHORIZED_APPS]: {
                section: eW.oAB.AUTHORIZED_APPS,
                searchableTitles: [eq.intl.string(eq.t["f6kk+v"])],
                label: eq.intl.string(eq.t["f6kk+v"]),
                element: ef.Z,
                url: eW.Z5c.SETTINGS("authorized-apps"),
            },
            [eH.s6.SESSIONS]: {
                section: eW.oAB.SESSIONS,
                searchableTitles: [eq.intl.string(eq.t["+1h0k5"])],
                label: eq.intl.string(eq.t["+1h0k5"]),
                ariaLabel: eq.intl.string(eq.t["+1h0k5"]),
                element: eR.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: A },
            },
            [eH.s6.CONNECTIONS]: {
                section: eW.oAB.CONNECTIONS,
                searchableTitles: [eq.intl.string(eq.t["3fe7U1"])],
                label: eq.intl.string(eq.t["3fe7U1"]),
                ariaLabel: eq.intl.string(eq.t["3fe7U1"]),
                element: ep.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: A },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eW.Z5c.SETTINGS("connections"),
            },
            [eH.s6.THIRD_PARTY_ACCESS]: {
                section: eW.oAB.CONNECTIONS,
                searchableTitles: [
                    eq.intl.string(eq.t["Ig/XFR"]),
                    eq.intl.string(eq.t["3fe7U1"]),
                    eq.intl.string(eq.t["f6kk+v"]),
                ],
                label: eq.intl.string(eq.t["Ig/XFR"]),
                parent: eH.s6.CONNECTIONS,
                element: ex.Z,
            },
            [eH.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eW.oAB.CONNECTIONS,
                searchableTitles: [eq.intl.string(eq.t["+/hZMz"])],
                parent: eH.s6.CONNECTIONS,
                element: ep.Z,
            },
            [eH.s6.CLIPS]: {
                section: eW.oAB.CLIPS,
                searchableTitles: [eq.intl.string(eq.t.z2jK6e)],
                label: eq.intl.string(eq.t.z2jK6e),
                ariaLabel: eq.intl.string(eq.t.z2jK6e),
                icon: e$ ? (0, r.jsx)(y.Z, {}) : void 0,
                element: O.Z,
                predicate: () => !e1,
                url: eW.Z5c.SETTINGS("clips"),
            },
            [eH.s6.RESTRICTED_USERS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                parent: eH.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eq.intl.string(eq.t["3wRorq"]),
                element: eG.ZP,
                predicate: () => td || tf,
            },
            [eH.s6.BLOCKED_USERS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                parent: eH.s6.RESTRICTED_USERS,
                label: eq.intl.string(eq.t.PFOUKS),
                searchableTitles: [eq.intl.string(eq.t.PFOUKS)],
                element: eG.GF,
                predicate: () => tf,
            },
            [eH.s6.IGNORED_USERS]: {
                section: eW.oAB.CONTENT_AND_SOCIAL,
                parent: eH.s6.RESTRICTED_USERS,
                searchableTitles: [eq.intl.string(eq.t["93ZDWF"])],
                label: eq.intl.string(eq.t["93ZDWF"]),
                element: eG.yo,
                predicate: () => td,
            },
            [eH.s6.PREMIUM]: {
                section: eW.oAB.PREMIUM,
                ariaLabel: eq.intl.string(eq.t.Ipxkoq),
                searchableTitles: [eq.intl.string(eq.t.Ipxkoq)],
                label: eq.intl.string(eq.t.Ipxkoq),
                element: ei.Z,
                className: eJ.premiumTab,
            },
            [eH.s6.GUILD_BOOSTING]: {
                section: eW.oAB.GUILD_BOOSTING,
                searchableTitles: [eq.intl.string(eq.t["+CbP2t"])],
                label: eq.intl.string(eq.t["+CbP2t"]),
                element: eC.Z,
            },
            [eH.s6.SUBSCRIPTIONS]: {
                section: eW.oAB.SUBSCRIPTIONS,
                ariaLabel: eq.intl.string(eq.t.trSpHR),
                searchableTitles: [eq.intl.string(eq.t.trSpHR)],
                label: eq.intl.string(eq.t.trSpHR),
                element: L.Z,
                icon: b
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eH.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eW.oAB.SUBSCRIPTIONS,
                searchableTitles: [eq.intl.string(eq.t["2GKrvr"])],
                parent: eH.s6.SUBSCRIPTIONS,
            },
            [eH.s6.GIFT_INVENTORY]: {
                section: eW.oAB.INVENTORY,
                searchableTitles: [eq.intl.string(eq.t["jcSP+v"])],
                label: eq.intl.string(eq.t["jcSP+v"]),
                element: ev.Z,
                ariaLabel: eq.intl.string(eq.t["jcSP+v"]),
                badgeCount: t,
            },
            [eH.s6.GIFT_CODE_REDEMPTION]: {
                section: eW.oAB.INVENTORY,
                searchableTitles: [eq.intl.string(eq.t["il+VCg"])],
                parent: eH.s6.GIFT_INVENTORY,
                predicate: () => !tn,
            },
            [eH.s6.GIFT_INVENTORY_QUESTS]: {
                section: eW.oAB.INVENTORY,
                searchableTitles: [eq.intl.string(eq.t.JALI2N)],
                parent: eH.s6.GIFT_INVENTORY,
                predicate: () => tr,
            },
            [eH.s6.GIFT_INVENTORY_LIST]: {
                section: eW.oAB.INVENTORY,
                searchableTitles: [eq.intl.string(eq.t["9KeUbW"])],
                parent: eH.s6.GIFT_INVENTORY,
                predicate: () => !tn,
            },
            [eH.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eW.oAB.INVENTORY,
                searchableTitles: [eq.intl.string(eq.t.vwMEHR)],
                parent: eH.s6.GIFT_INVENTORY,
                predicate: () => tn,
            },
            [eH.s6.BILLING]: {
                section: eW.oAB.BILLING,
                searchableTitles: [eq.intl.string(eq.t.oeUm2t)],
                label: eq.intl.string(eq.t.oeUm2t),
                ariaLabel: eq.intl.string(eq.t.oeUm2t),
                element: e_.Z,
            },
            [eH.s6.BILLING_PAYMENT_METHODS]: {
                section: eW.oAB.BILLING,
                searchableTitles: [eq.intl.string(eq.t.W26xGR)],
                parent: eH.s6.BILLING,
            },
            [eH.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eW.oAB.BILLING,
                searchableTitles: [eq.intl.string(eq.t.obLrcH)],
                parent: eH.s6.BILLING,
            },
            [eH.s6.APPEARANCE]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eq.intl.string(eq.t["iHH+k5"])],
                label: eq.intl.string(eq.t["iHH+k5"]),
                ariaLabel: eq.intl.string(eq.t["iHH+k5"]),
                element: ed.Z,
                newIndicator: (0, r.jsx)(e4, {}),
                newIndicatorDismissibleContentTypes: e3(),
                url: eW.Z5c.SETTINGS("appearance"),
            },
            [eH.s6.APPEARANCE_THEME]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eq.intl.string(eq.t.Ksh3io)],
                parent: eH.s6.APPEARANCE,
            },
            [eH.s6.APPEARANCE_COLOR]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eq.intl.string(eq.t.OCOOiI)],
                parent: eH.s6.APPEARANCE_THEME,
            },
            [eH.s6.APPEARANCE_ICON]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eq.intl.string(eq.t.RPh2oq)],
                parent: eH.s6.APPEARANCE_THEME,
            },
            [eH.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eq.intl.string(eq.t.ZEoGMT)],
                parent: eH.s6.APPEARANCE,
            },
            [eH.s6.APPEARANCE_LIST_SPACING]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eH.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eq.intl.string(eq.t.y2b7CA),
                    color: S.Z.BG_BRAND,
                }),
            },
            [eH.s6.APPEARANCE_SCALING_SPACING]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [eq.intl.string(eq.t.qPOqoK)],
                parent: eH.s6.APPEARANCE,
            },
            [eH.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eW.oAB.APPEARANCE,
                searchableTitles: [
                    eq.intl.string(eq.t.dyamEB),
                    eq.intl.string(eq.t.p8NOws),
                    eq.intl.string(eq.t["+o/sOj"]),
                ],
                parent: eH.s6.APPEARANCE,
                predicate: () =>
                    Z.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eH.s6.ACCESSIBILITY]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.G0neg4)],
                label: eq.intl.string(eq.t.G0neg4),
                ariaLabel: eq.intl.string(eq.t.G0neg4),
                element: es.Z,
                url: eW.Z5c.SETTINGS("accessibility"),
            },
            [eH.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.aZlePj)],
                parent: eH.s6.ACCESSIBILITY,
            },
            [eH.s6.ACCESSIBILITY_SATURATION]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t["5PWWCQ"])],
                parent: eH.s6.ACCESSIBILITY,
            },
            [eH.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.bQCodH)],
                parent: eH.s6.ACCESSIBILITY_SATURATION,
            },
            [eH.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.OLZFBw)],
                parent: eH.s6.ACCESSIBILITY,
            },
            [eH.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t["+IsihY"])],
                parent: eH.s6.ACCESSIBILITY,
                predicate: () => (0, v.l)("SettingsRendererConfig"),
            },
            [eH.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.uSOPWl)],
                parent: eH.s6.ACCESSIBILITY,
            },
            [eH.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eX.default["2gFUEx"])],
                parent: eH.s6.ACCESSIBILITY,
            },
            [eH.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.BT8Bmp)],
                parent: eH.s6.ACCESSIBILITY,
            },
            [eH.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t["sSY+mJ"])],
                parent: eH.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eH.s6.ACCESSIBILITY_CONTRAST]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.TYyfOz)],
                parent: eH.s6.ACCESSIBILITY,
            },
            [eH.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.cguieX)],
                parent: eH.s6.ACCESSIBILITY_CONTRAST,
            },
            [eH.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.e3TR1d)],
                parent: eH.s6.ACCESSIBILITY,
            },
            [eH.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.b3XBzs)],
                parent: eH.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eH.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.Iayoh4)],
                parent: eH.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eH.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.iIaOlZ)],
                parent: eH.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eH.s6.ACCESSIBILITY_STICKERS]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t["6NtAuL"])],
                parent: eH.s6.ACCESSIBILITY,
            },
            [eH.s6.ACCESSIBILITY_MESSAGES]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.onqU6u)],
                parent: eH.s6.ACCESSIBILITY,
            },
            [eH.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t["3Fztn5"])],
                parent: eH.s6.ACCESSIBILITY_MESSAGES,
            },
            [eH.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.TZ2hZG)],
                parent: eH.s6.ACCESSIBILITY_MESSAGES,
            },
            [eH.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.VpSKeH)],
                parent: eH.s6.ACCESSIBILITY,
            },
            [eH.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.qvTIwc)],
                parent: eH.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eH.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eq.intl.string(eq.t.lsW5Eh)],
                parent: eH.s6.ACCESSIBILITY,
            },
            [eH.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eW.oAB.ACCESSIBILITY,
                searchableTitles: [eH.CF],
                parent: eH.s6.ACCESSIBILITY,
            },
            [eH.s6.VOICE_AND_VIDEO]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.B1fFpa)],
                label: eq.intl.string(eq.t.B1fFpa),
                ariaLabel: eq.intl.string(eq.t.B1fFpa),
                element: eB.Z,
                predicate: () => W.Z.isSupported(),
                url: eW.Z5c.SETTINGS("voice"),
            },
            [eH.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.K3lovL), eq.intl.string(eq.t.NiTd0d)],
                parent: eH.s6.VOICE_AND_VIDEO,
            },
            [eH.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.FlNoSU)],
                parent: eH.s6.VOICE_AND_VIDEO,
            },
            [eH.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.ABjMWF)],
                parent: eH.s6.VOICE_AND_VIDEO,
            },
            [eH.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.OFpL3d)],
                parent: eH.s6.VOICE_AND_VIDEO,
            },
            [eH.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.KDdjoq), eq.intl.string(eq.t.FeUKeH)],
                parent: eH.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eH.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.K3lovL), eq.intl.string(eq.t.NiTd0d)],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eH.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eW.oAB.VOICE,
                searchableTitles: [
                    eq.intl.string(eq.t.hHMYbW),
                    eq.intl.string(eq.t.dl18zc),
                    eq.intl.string(eq.t.nuFtHB),
                    eq.intl.string(eq.t["3182VF"]),
                    eq.intl.string(eq.t["DGq/PT"]),
                ],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eH.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [
                    eq.intl.string(eq.t.OX2Bnp),
                    eq.intl.string(eq.t.eATD2N),
                    eq.intl.string(eq.t.nuFtHB),
                    eq.intl.string(eq.t["3182VF"]),
                    eq.intl.string(eq.t["DGq/PT"]),
                ],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eH.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.gyljWF), eq.intl.string(eq.t.nuFtHB)],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eH.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eW.oAB.VOICE,
                searchableTitles: [
                    eq.intl.string(eq.t.LM3U3t),
                    eq.intl.string(eq.t.nuFtHB),
                    eq.intl.string(eq.t.VZPR0d),
                    eq.intl.string(eq.t.cjPbpa),
                ],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, en.R)({
                        location: "SettingsRendererConfig",
                        autoTrackExposure: !1,
                    });
                    return e.length > 0;
                },
            },
            [eH.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t["pS+K2N"]), eq.intl.string(eq.t.nuFtHB)],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => th !== eV._.STUDIO,
            },
            [eH.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t["sqUm+v"]), eq.intl.string(eq.t.nuFtHB)],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tp === ez.pM.VOICE_ACTIVITY && tm,
            },
            [eH.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.e7LIiY)],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eH.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.nzUc3N)],
                parent: eH.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eH.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.ABjMWF)],
                parent: eH.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eH.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.nzUc3N)],
                parent: eH.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eH.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.LKzQSE)],
                parent: eH.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eH.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.F122Gx)],
                parent: eH.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => W.Z.supports(ez.AN.VIDEO),
            },
            [eH.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t["3Ppr1t"])],
                parent: eH.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eH.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.lZTUPj)],
                parent: eH.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => W.Z.supports(ez.AN.VIDEO),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t["8/udY2"])],
                parent: eH.s6.VOICE_AND_VIDEO,
            },
            [eH.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t["8/udY2"])],
                parent: eH.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => !(0, Q.isWeb)(),
            },
            [eH.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t["8/udY2"])],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.Tceiq6)],
                parent: eH.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED,
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t["71Ve19"])],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => W.Z.supports(ez.AN.OPEN_H264),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.Sln58f)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.AxnPm5)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => "stable" !== J.ZP.releaseChannel && W.Z.isExperimentalEncodersSupported(),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t["6I6GUl"])],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => tm,
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.iWTwu7)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t["/jwMtr"])],
                parent: eH.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eH.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.OBwCXF)],
                parent: eH.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.t8QhiY), eq.intl.string(eq.t.hmfkCg)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => W.Z.isNoiseSuppressionSupported(),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.BbESsr)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => W.Z.isAdvancedVoiceActivitySupported(),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.cUMdHx)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => W.Z.isAutomaticGainControlSupported(),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.DFPXIC)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => W.Z.showBypassSystemInputProcessing(),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.uancuL)],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => W.Z.supports(ez.AN.QOS),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.oSdBvb)],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => W.Z.supports(ez.AN.ATTENUATION),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.wVBHr6)],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => W.Z.shouldOfferManualSubsystemSelection(),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eW.oAB.VOICE,
                searchableTitles: [
                    eq.intl.string(eq.t.KDdjoq),
                    eq.intl.string(eq.t.NMCIf3),
                    eq.intl.string(eq.t.FeUKeH),
                ],
                parent: eH.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    W.Z.supportsVideoHook() ||
                    W.Z.supportsExperimentalSoundshare() ||
                    (W.Z.supportsSystemScreensharePicker() && (0, Q.isMac)()),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.GmWk2N), eq.intl.string(eq.t["Fj/xn5"])],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => W.Z.supportsVideoHook(),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t["4I0qzc"])],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => W.Z.supportsExperimentalSoundshare() && W.Z.supportsHookSoundshare(),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.ie1mgY)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => W.Z.supportsSystemScreensharePicker() && (0, Q.isMac)(),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t["aP1N/v"])],
                parent: eH.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => Q.isPlatformEmbedded,
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.OFpL3d)],
                parent: eH.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t["0CEP6e"])],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => $.Sb.getSetting(),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t["r6K+TE"])],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => W.Z.isAecDumpSupported(),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t.U4FgFB)],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === J.ZP.releaseChannel || "development" === J.ZP.releaseChannel) &&
                    e9 &&
                    W.Z.supports(ez.AN.CONNECTION_REPLAY),
            },
            [eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t["726JHB"])],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    Q.isPlatformEmbedded && W.Z.supports(ez.AN.DEBUG_LOGGING) && null != p.Z.fileManager.readLogFiles,
            },
            [eH.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eW.oAB.VOICE,
                searchableTitles: [eq.intl.string(eq.t["/RXu6+"])],
                parent: eH.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eH.s6.POGGERMODE]: {
                section: eW.oAB.POGGERMODE,
                searchableTitles: [eq.intl.string(eq.t.AtCukJ)],
                label: eq.intl.string(eq.t.AtCukJ),
                ariaLabel: eq.intl.string(eq.t.AtCukJ),
                element: x.Z,
                predicate: () => D.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: eJ.poggermodeIcon,
                }),
            },
            [eH.s6.CHAT]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t["/VQax8"])],
                label: eq.intl.string(eq.t["/VQax8"]),
                ariaLabel: eq.intl.string(eq.t["/VQax8"]),
                element: ew.Z,
                url: eW.Z5c.SETTINGS("chat"),
            },
            [eH.s6.CHAT_INLINE_MEDIA]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.U68Dgo)],
                parent: eH.s6.CHAT,
            },
            [eH.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.U47N1t)],
                parent: eH.s6.CHAT_INLINE_MEDIA,
            },
            [eH.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.VP11Nj)],
                parent: eH.s6.CHAT_INLINE_MEDIA,
            },
            [eH.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t["5S2AKy"])],
                parent: eH.s6.CHAT_INLINE_MEDIA,
            },
            [eH.s6.CHAT_EMBEDS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.PWZOn5)],
                parent: eH.s6.CHAT,
            },
            [eH.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.xX0ZTE)],
                parent: eH.s6.CHAT_EMBEDS,
            },
            [eH.s6.CHAT_EMOJI]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.sMOuub)],
                parent: eH.s6.CHAT,
            },
            [eH.s6.CHAT_EMOJI_REACTIONS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.Iv24sr)],
                parent: eH.s6.CHAT_EMOJI,
            },
            [eH.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t["79qal5"])],
                parent: eH.s6.CHAT_EMOJI,
            },
            [eH.s6.CHAT_STICKERS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t["6NtAuL"])],
                parent: eH.s6.CHAT,
            },
            [eH.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t["29xPVV"])],
                parent: eH.s6.CHAT_STICKERS,
            },
            [eH.s6.CHAT_SOUNDMOJI]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.EHlAMT)],
                parent: eH.s6.CHAT,
            },
            [eH.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t["CtYr+f"])],
                parent: eH.s6.CHAT_SOUNDMOJI,
            },
            [eH.s6.CHAT_TEXT_BOX]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.afR0pK)],
                parent: eH.s6.CHAT,
            },
            [eH.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.AqGrEB)],
                parent: eH.s6.CHAT_TEXT_BOX,
            },
            [eH.s6.CHAT_THREADS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.B2panJ)],
                parent: eH.s6.CHAT,
            },
            [eH.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.AInv5u)],
                parent: eH.s6.CHAT_THREADS,
            },
            [eH.s6.CHAT_SPOILERS]: {
                section: eW.oAB.TEXT,
                searchableTitles: [eq.intl.string(eq.t.QgwmV1)],
                parent: eH.s6.CHAT,
            },
            [eH.s6.NOTIFICATIONS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.HcoRu7)],
                label: eq.intl.string(eq.t.HcoRu7),
                ariaLabel: eq.intl.string(eq.t.HcoRu7),
                element: eT.Z,
                url: eW.Z5c.SETTINGS("notifications"),
            },
            [eH.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t["/0WClp"])],
                parent: eH.s6.NOTIFICATIONS,
            },
            [eH.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eH.s6.NOTIFICATIONS,
            },
            [eH.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.VH8AIC)],
                parent: eH.s6.NOTIFICATIONS,
            },
            [eH.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.xSmFQE)],
                parent: eH.s6.NOTIFICATIONS,
                predicate: () => (0, Q.isWindows)(),
            },
            [eH.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.z21l8P)],
                parent: eH.s6.NOTIFICATIONS,
            },
            [eH.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: ["New Notification Settings (Advanced, Staff Only)"],
                parent: eH.s6.NOTIFICATIONS,
                predicate: () => !1,
            },
            [eH.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: ["Restore most recent snapshot"],
                parent: eH.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eH.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: ["Launch Migration"],
                parent: eH.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eH.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: ["Toggle new system on/off"],
                parent: eH.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eH.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.TTvjd3)],
                parent: eH.s6.NOTIFICATIONS,
            },
            [eH.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.VpSKeH)],
                parent: eH.s6.NOTIFICATIONS,
            },
            [eH.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.D9yVAA)],
                parent: eH.s6.NOTIFICATIONS,
            },
            [eH.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.u6dc5O)],
                parent: eH.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eH.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.P8MG6u)],
                parent: eH.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eH.s6.NOTIFICATIONS_SOUNDS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.MKWyKS)],
                parent: eH.s6.NOTIFICATIONS,
            },
            [eH.s6.NOTIFICATIONS_EMAILS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.TPchzM)],
                parent: eH.s6.NOTIFICATIONS,
            },
            [eH.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t["B75+xc"])],
                parent: eH.s6.NOTIFICATIONS_EMAILS,
            },
            [eH.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.sxn7lZ)],
                parent: eH.s6.NOTIFICATIONS_EMAILS,
            },
            [eH.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.EkxXhY)],
                parent: eH.s6.NOTIFICATIONS_EMAILS,
            },
            [eH.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.jNrkrK)],
                parent: eH.s6.NOTIFICATIONS_EMAILS,
            },
            [eH.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.E8g1l5)],
                parent: eH.s6.NOTIFICATIONS_EMAILS,
            },
            [eH.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.Ra9Pws)],
                parent: eH.s6.NOTIFICATIONS_EMAILS,
            },
            [eH.s6.NOTIFICATIONS_REACTIONS]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.Rq0NFh)],
                parent: eH.s6.NOTIFICATIONS,
            },
            [eH.s6.NOTIFICATIONS_GAME_ACTIVITY]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.omtoJy), eq.intl.string(eq.t.SZue3N)],
                parent: eH.s6.NOTIFICATIONS,
                predicate: () => (0, N.uw)("SettingsRendererConfig"),
            },
            [eH.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.wtk08f)],
                parent: eH.s6.NOTIFICATIONS,
                predicate: () => (0, V.JN)("SettingsRendererConfig"),
            },
            [eH.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eW.oAB.NOTIFICATIONS,
                searchableTitles: [eq.intl.string(eq.t.pW4TMj)],
                parent: eH.s6.NOTIFICATIONS,
            },
            [eH.s6.KEYBINDS]: {
                section: eW.oAB.KEYBINDS,
                searchableTitles: [eq.intl.string(eq.t.T9DA2N)],
                label: eq.intl.string(eq.t.T9DA2N),
                element: eI.Z,
                url: eW.Z5c.SETTINGS("keybinds"),
            },
            [eH.s6.LANGUAGE]: {
                section: eW.oAB.LOCALE,
                searchableTitles: [eq.intl.string(eq.t.IHMsPj)],
                label: eq.intl.string(eq.t.IHMsPj),
                element: eS.Z,
                url: eW.Z5c.SETTINGS("language"),
            },
            [eH.s6.WINDOW_SETTINGS]: {
                section: eW.oAB.WINDOWS,
                searchableTitles: [eq.intl.string(eq.t.ZkDZoq)],
                label: eq.intl.string(eq.t.ZkDZoq),
                element: eL.Z,
                predicate: () => Q.isPlatformEmbedded && (0, Q.isWindows)(),
            },
            [eH.s6.LINUX_SETTINGS]: {
                section: eW.oAB.LINUX,
                searchableTitles: [eq.intl.string(eq.t["7pPjTU"])],
                label: eq.intl.string(eq.t["7pPjTU"]),
                element: e5,
                predicate: () => Q.isPlatformEmbedded && (0, Q.isLinux)(),
            },
            [eH.s6.STREAMER_MODE]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eq.intl.string(eq.t.S5GfOT)],
                label: eq.intl.string(eq.t.S5GfOT),
                ariaLabel: eq.intl.string(eq.t.S5GfOT),
                element: eP.Z,
                url: eW.Z5c.SETTINGS("streamer-mode"),
            },
            [eH.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eq.intl.string(eq.t.bxGbHB)],
                parent: eH.s6.STREAMER_MODE,
            },
            [eH.s6.STREAMER_MODE_ENABLE]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eq.intl.string(eq.t.p9ZAJS)],
                parent: eH.s6.STREAMER_MODE,
            },
            [eH.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eq.intl.string(eq.t.UpQziI)],
                parent: eH.s6.STREAMER_MODE,
            },
            [eH.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eq.intl.string(eq.t.q7WNGh)],
                parent: eH.s6.STREAMER_MODE,
            },
            [eH.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eq.intl.string(eq.t["1CWknJ"])],
                parent: eH.s6.STREAMER_MODE,
            },
            [eH.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eq.intl.string(eq.t.qmYiYW)],
                parent: eH.s6.STREAMER_MODE,
            },
            [eH.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eW.oAB.STREAMER_MODE,
                searchableTitles: [eq.intl.string(eq.t["iA81+f"])],
                parent: eH.s6.STREAMER_MODE,
                predicate: () => {
                    var e, t, n;
                    return (
                        null !=
                            (n =
                                null === p.Z ||
                                void 0 === p.Z ||
                                null == (t = p.Z.window) ||
                                null == (e = t.supportsContentProtection)
                                    ? void 0
                                    : e.call(t)) && n
                    );
                },
            },
            [eH.s6.SETTINGS_ADVANCED]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eq.intl.string(eq.t["8/udY2"])],
                label: eq.intl.string(eq.t["8/udY2"]),
                ariaLabel: eq.intl.string(eq.t["8/udY2"]),
                element: eu.ZP,
            },
            [eH.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eq.intl.string(eq.t.ObIb1d)],
                parent: eH.s6.SETTINGS_ADVANCED,
                predicate: () => q.wS,
            },
            [eH.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eq.intl.string(eq.t["eOC/Fx"])],
                parent: eH.s6.SETTINGS_ADVANCED,
                predicate: () => Q.isPlatformEmbedded,
            },
            [eH.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eq.intl.string(eq.t.fi3UQE)],
                parent: eH.s6.SETTINGS_ADVANCED,
                predicate: () => ta,
            },
            [eH.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eq.intl.string(eq.t.erOqlp)],
                parent: eH.s6.SETTINGS_ADVANCED,
                predicate: () => ts,
            },
            [eH.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: [eq.intl.string(eq.t.qDZryM)],
                parent: eH.s6.SETTINGS_ADVANCED,
            },
            [eH.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eW.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: eH.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    g.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [eH.s6.ACTIVITY_PRIVACY]: {
                section: eW.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.Cq98yM)],
                label: eq.intl.string(eq.t.Cq98yM),
                ariaLabel: eq.intl.string(eq.t.Cq98yM),
                element: ec.Z,
                predicate: () => !e1,
                url: eW.Z5c.SETTINGS("activity-privacy"),
            },
            [eH.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: e1 ? eW.oAB.GAMES : eW.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t["8ka8lp"])],
                parent: e1 ? eH.s6.GAMES_ACTIVITY_PRIVACY : eH.s6.ACTIVITY_PRIVACY,
            },
            [eH.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: e1 ? eW.oAB.GAMES : eW.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t.VOszPD)],
                parent: e1 ? eH.s6.GAMES_ACTIVITY_PRIVACY : eH.s6.ACTIVITY_PRIVACY,
            },
            [eH.s6.ACTIVITY_PRIVACY_TOS]: {
                section: e1 ? eW.oAB.GAMES : eW.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eH.CF],
                parent: e1 ? eH.s6.GAMES_ACTIVITY_PRIVACY : eH.s6.ACTIVITY_PRIVACY,
            },
            [eH.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eW.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eq.intl.string(eq.t["4F2KoK"])],
                parent: eH.s6.ACTIVITY_PRIVACY,
            },
            [eH.s6.REGISTERED_GAMES]: {
                section: eW.oAB.REGISTERED_GAMES,
                searchableTitles: [eq.intl.string(eq.t.AVDyEh)],
                label: eq.intl.string(eq.t.AVDyEh),
                element: ey.Z,
                predicate: () => !e1 && (0, ek.Jw)(),
            },
            [eH.s6.OVERLAY]: {
                section: eW.oAB.OVERLAY,
                searchableTitles: [eq.intl.string(eq.t["9cb1U1"]), eq.intl.string(eq.t.HcoRu7)],
                label: eq.intl.string(eq.t["9cb1U1"]),
                element: eA.Z,
                predicate: () => !e1 && F,
            },
            [eH.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, E.Z)(!0),
                searchableTitles: [eq.intl.string(eq.t.LRmNAg)],
                label: eq.intl.string(eq.t.LRmNAg),
            },
            [eH.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    z.default.track(eW.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, X.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                z.default.track(eW.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, h.Z)(e);
                            },
                        });
                },
                searchableTitles: [eq.intl.string(eq.t.sMEktb)],
                label: eq.intl.string(eq.t.sMEktb),
                ariaLabel: eq.intl.string(eq.t.sMEktb),
            },
            [eH.s6.HYPESQUAD]: {
                section: eW.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eq.intl.string(eq.t["k0R+4e"])],
                label: eq.intl.string(eq.t["k0R+4e"]),
                element: eO.Z,
                predicate: () => !tu,
            },
            [eH.s6.TOWNHALL]: {
                section: eW.oAB.TOWNHALL,
                searchableTitles: [eq.intl.string(eq.t.dnZNER)],
                label: eq.intl.string(eq.t.dnZNER),
                predicate: () => tu,
                onClick: () => {
                    (0, h.Z)("https://discord.gg/discord-townhall"), (0, u.xf)();
                },
            },
            [eH.s6.EXPERIMENTS]: {
                section: eW.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: ej.Z,
                predicate: () => H.Z.isDeveloper,
                url: eW.Z5c.SETTINGS("experiments"),
            },
            [eH.s6.DEVELOPER_OPTIONS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: eE.Z,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eH.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eH.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eH.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eH.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eH.s6.DEVELOPER_OPTIONS,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eH.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eH.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eH.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e9 && H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eH.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e9 && H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eH.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eH.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e9 && H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Toggleable Components"],
                parent: eH.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e9 && H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eH.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e9 && H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eH.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e9 && H.Z.isDeveloper && Y.default.layoutDebuggingEnabled,
            },
            [eH.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e9 && H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e9 && H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eH.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eH.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eH.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eH.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eH.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => m.q && H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eH.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eH.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eH.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eH.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eW.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eH.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.HOTSPOT_OPTIONS]: {
                section: eW.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ["Hotspot Options"],
                label: "Hotspot Options",
                element: et.Z,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eW.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ["Dismissible Contents"],
                label: "Dismissible Contents",
                element: T.Z,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.PAYMENT_FLOW_MODALS]: {
                section: eW.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ["Payment Flow Modals"],
                label: "Payment Flow Modals",
                element: er.Z,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.REVENUE_STORYBOOK]: {
                section: eW.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: [
                    "Revenue Storybook",
                    "Payment Components",
                    "Orb Components",
                    "Virtual Currency",
                    "Nitro Components",
                ],
                label: "Revenue Storybook",
                element: eZ.Z,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eW.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ["Virtual Currency", "Orb", "Config"],
                label: "Virtual Currency Config",
                element: eF.Z,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.PAYMENT_COMPONENTS]: {
                section: eW.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Payment Components"],
                label: "Payment Components",
                element: eZ.Z,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.ORB_COMPONENTS]: {
                section: eW.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Orb Components"],
                label: "Orb Components",
                element: eZ.Z,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.NITRO_COMPONENTS]: {
                section: eW.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Nitro Components"],
                label: "Nitro Components",
                element: eZ.Z,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.TEXT_PLAYGROUND]: {
                section: eW.oAB.TEXT_PLAYGROUND,
                searchableTitles: ["Text Playground"],
                label: "Text Playground",
                element: eD.Z,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DESIGN_SYSTEMS]: {
                section: eW.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Design Systems"],
                label: "Design Systems",
                element: eg.Z,
                predicate: () => H.Z.isDeveloper,
                url: eW.Z5c.SETTINGS("design-systems"),
            },
            [eH.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eW.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Colors"],
                label: "Colors",
                element: eg.Z,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.ANIMATION_TESTING]: {
                section: eW.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Animation Testing"],
                label: "Animation Testing",
                element: eg.Z,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eW.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Components"],
                label: "Components",
                element: eg.Z,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.TEXT_COMPONENTS]: {
                section: eW.oAB.TEXT_COMPONENT,
                searchableTitles: ["Text Components"],
                label: "Text Components",
                element: eo.Z,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.INTL_TESTING]: {
                section: eW.oAB.INTL_TESTING,
                searchableTitles: ["Intl Testing", "i18n"],
                label: "Intl Testing",
                element: w.Z,
                predicate: () => e9 || H.Z.isDeveloper,
            },
            [eH.s6.SHOP_KEEPER]: {
                section: eW.oAB.SHOP_KEEPER,
                searchableTitles: ["Shop Keeper"],
                label: "Shop Keeper",
                element: I.Z,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.QUEST_PREVIEW_TOOL]: {
                section: eW.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ["Quest Preview Tool"],
                label: "Quest Preview Tool",
                element: G.Z,
                predicate: () => (0, k.X)({ location: eK.dr.QUEST_PREVIEW_TOOL }),
            },
            [eH.s6.QUEST_PREVIEW_TOOL_2]: {
                section: eW.oAB.QUEST_PREVIEW_TOOL_2,
                searchableTitles: ["Quest Preview Tool 2"],
                label: "Quest Preview Tool 2",
                element: B.Z,
                predicate: () => (0, k.T)({ location: eK.dr.QUEST_PREVIEW_TOOL_2 }),
            },
            [eH.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG]: {
                section: eW.oAB.QUEST_MINOR_REWARD_CAPPING_CONFIG,
                searchableTitles: ["Minor Reward Capping Config"],
                label: "Minor Reward Capping Config",
                element: U.Z,
                predicate: () => e9,
            },
            [eH.s6.WEB_SETTING_TREE_TOOL]: {
                section: eW.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ["Web Setting Tree Tool"],
                label: "Web Setting Tree Tool",
                element: eM.Z,
                predicate: () => H.Z.isDeveloper,
            },
            [eH.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            e2(
                                e0(
                                    {
                                        header: eq.intl.string(eq.t["2jxGen"]),
                                        confirmText: eq.intl.string(eq.t["2jxGen"]),
                                        cancelText: eq.intl.string(eq.t["ETE/oK"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: eq.intl.string(eq.t.SUnWBA),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: eq.intl.string(eq.t["2jxGen"]),
                ariaLabel: eq.intl.string(eq.t["2jxGen"]),
                icon: (0, r.jsx)(s.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [eH.s6.SOCIAL_LINKS]: {
                section: _.ID.CUSTOM,
                element: ea.Z,
            },
            [eH.s6.CLIENT_DEBUG_INFO]: {
                section: _.ID.CUSTOM,
                element: ee.Z,
            },
        });
    };
