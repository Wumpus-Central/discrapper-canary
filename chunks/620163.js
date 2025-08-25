n.d(t, { i: () => e5 }), n(539854), n(388685);
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
    T = n(377171),
    S = n(621628),
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
    k = n(564344),
    M = n(36243),
    U = n(14676),
    G = n(652380),
    B = n(145158),
    Z = n(447448),
    V = n(462354),
    F = n(906467),
    H = n(857192),
    Y = n(131951),
    W = n(25990),
    K = n(626135),
    z = n(572004),
    q = n(49012),
    X = n(358085),
    Q = n(998502),
    J = n(695346),
    $ = n(604227),
    ee = n(38915),
    et = n(321614),
    en = n(498639),
    er = n(748717),
    ei = n(419636),
    ea = n(799071),
    eo = n(154022),
    es = n(393681),
    el = n(309739),
    ec = n(64914),
    eu = n(501348),
    ed = n(795594),
    ef = n(443702),
    e_ = n(327192),
    ep = n(949493),
    eh = n(675047),
    em = n(177508),
    eg = n(956699),
    eE = n(54942),
    eb = n(293389),
    ey = n(88624),
    eO = n(387747),
    ev = n(389650),
    eI = n(649157),
    eT = n(593648),
    eS = n(327885),
    eA = n(595242),
    eC = n(463153),
    eN = n(36192),
    eR = n(889029),
    eP = n(400287),
    ew = n(554042),
    eD = n(936982),
    ex = n(200645),
    eL = n(287490),
    ej = n(706060),
    ek = n(168308),
    eM = n(277329),
    eU = n(273927),
    eG = n(604224),
    eB = n(43434),
    eZ = n(333576),
    eV = n(345655),
    eF = n(726985),
    eH = n(583139),
    eY = n(981631),
    eW = n(46140),
    eK = n(65154),
    ez = n(388032),
    eq = n(693450),
    eX = n(345909),
    eQ = n(202323);
function eJ(e, t, n) {
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
function e$(e) {
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
                eJ(e, t, n[t]);
            });
    }
    return e;
}
function e0(e, t) {
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
function e1(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : e0(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let e2 = () => {
        let e = [a.z.CLIENT_THEMES_SETTINGS_BADGE, a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
        return (
            b.Mc.getCurrentConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            e
        );
    },
    e3 = () => {
        let e = e2(),
            [t] = (0, A.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: ez.intl.string(ez.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE
              ? (0, r.jsx)(s.IGR, { text: ez.intl.string(ez.t.y2b7CA) })
              : null;
    },
    e4 = () => {
        let e = [];
        return (
            (0, Z.h)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            C.J.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    e8 = () => {
        let e = e4(),
            [t] = (0, A.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: ez.intl.string(ez.t.y2b7CA) })
            : null;
    },
    e6 = ex.Z,
    e5 = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: b,
            impressionSource: A,
            numOfPendingFamilyRequests: C,
            isOverlaySupported: Z,
            isClipsBetaTagShowing: eJ = !1,
            shouldMergeGameSettings: e0,
            isKeywordFilteringEnabled: e5,
            isStaff: e7,
            isInappropriateConversationWarningEnabled: e9,
            isInapproprateConversationsDefaultOn: te,
            paymentsBlocked: tt,
            isEligibleForQuests: tn,
            isStricterMessageRequestsEnabled: tr,
            hasLibraryApplication: ti,
            hasTOTPEnabled: ta,
            developerMode: to,
            isAdultUser: ts,
            hasSecureFramesVerifiedUserIds: tl,
            hypeSquadRemoved: tc,
            hasIgnoredUsers: tu,
            hasBlockedUsers: td,
            useRefreshedVoiceAndVideo: tf,
            isEligibleForSensitiveContentDefaults: t_,
            inputMode: tp,
            activeInputProfile: th,
            isInputProfileCustom: tm,
        } = e;
        return Object.freeze({
            [eF.s6.SEARCH_NO_RESULTS]: {
                section: _.ID.CUSTOM,
                element: eC.Z,
            },
            [eF.s6.ACCOUNT_SECURITY_TAB]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [ez.intl.string(ez.t.Am9YHh)],
                label: ez.intl.string(ez.t.Am9YHh),
            },
            [eF.s6.ACCOUNT]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [ez.intl.string(ez.t["JAIM/v"])],
                label: ez.intl.string(ez.t["JAIM/v"]),
                ariaLabel: ez.intl.string(ez.t["JAIM/v"]),
                element: es.Z,
                url: eY.Z5c.SETTINGS("account"),
            },
            [eF.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [ez.intl.string(ez.t.LYju5O)],
                parent: eF.s6.ACCOUNT,
                section: eY.oAB.ACCOUNT,
            },
            [eF.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [ez.intl.string(ez.t["9AjdkJ"])],
                section: eY.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PROFILE,
            },
            [eF.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [ez.intl.string(ez.t.Ulqq6O)],
                section: eY.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PROFILE,
            },
            [eF.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    ez.intl.string(ez.t["/52UY2"]),
                    ez.intl.string(ez.t.sK0dmJ),
                    ez.intl.string(ez.t.XxRj7e),
                    ez.intl.string(ez.t.yNGjyM),
                    ez.intl.string(ez.t.KPGVWl),
                ],
                section: eY.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PROFILE,
                predicate: () => t_,
            },
            [eF.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [ez.intl.string(ez.t["+JkHPz"])],
                section: eY.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PROFILE,
            },
            [eF.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [ez.intl.string(ez.t.oP5zGB)],
                section: eY.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PROFILE,
            },
            [eF.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [ez.intl.string(ez.t.pKSjEh)],
                section: eY.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT,
            },
            [eF.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [ez.intl.string(ez.t["FRep5+"])],
                section: eY.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eF.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [ez.intl.string(ez.t["7qKDrK"])],
                section: eY.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [ez.intl.string(ez.t.m0FidH)],
                section: eY.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eF.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [ez.intl.string(ez.t.cDgKtb)],
                section: eY.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !ta,
            },
            [eF.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [ez.intl.string(ez.t["D+aE7u"])],
                section: eY.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => ta,
            },
            [eF.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [ez.intl.string(ez.t.fZSi1N)],
                section: eY.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eF.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [ez.intl.string(ez.t.uHAJ5u)],
                section: eY.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eF.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [ez.intl.string(ez.t.vrOCCg)],
                section: eY.oAB.ACCOUNT,
                parent: eF.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eF.s6.ACCOUNT_REMOVAL]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [ez.intl.string(ez.t.ZKsIkp)],
                parent: eF.s6.ACCOUNT,
            },
            [eF.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [ez.intl.string(ez.t.jf5GGR)],
                parent: eF.s6.ACCOUNT_REMOVAL,
            },
            [eF.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [ez.intl.string(ez.t["8lQ2ra"])],
                parent: eF.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eF.s6.GAMES]: {
                section: eY.oAB.GAMES,
                searchableTitles: [ez.intl.string(ez.t.URyqtL)],
                label: ez.intl.string(ez.t.URyqtL),
                ariaLabel: ez.intl.string(ez.t.URyqtL),
                element: eM.Z,
                predicate: () => e0,
            },
            [eF.s6.GAMES_MY_GAMES]: {
                section: eY.oAB.GAMES,
                searchableTitles: [ez.intl.string(ez.t["5DMgp6"])],
                parent: eF.s6.GAMES,
            },
            [eF.s6.GAMES_CLIPS]: {
                section: eY.oAB.GAMES,
                searchableTitles: [ez.intl.string(ez.t.z2jK6e)],
                parent: eF.s6.GAMES,
            },
            [eF.s6.GAMES_OVERLAY]: {
                section: eY.oAB.GAMES,
                searchableTitles: [ez.intl.string(ez.t["9cb1U1"])],
                parent: eF.s6.GAMES,
            },
            [eF.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eY.oAB.GAMES,
                searchableTitles: [ez.intl.string(ez.t.Cq98yM)],
                parent: eF.s6.GAMES,
            },
            [eF.s6.PROFILE_CUSTOMIZATION]: {
                section: eY.oAB.PROFILE_CUSTOMIZATION,
                type: _.bT.WIDE,
                searchableTitles: [ez.intl.string(ez.t["vi7f+v"])],
                label: ez.intl.string(ez.t["vi7f+v"]),
                ariaLabel: ez.intl.string(ez.t["vi7f+v"]),
                element: k.Z,
                newIndicator: (0, r.jsx)(e8, {}),
                newIndicatorDismissibleContentTypes: [...e4()],
                notice: {
                    stores: [W.Z, P.Z],
                    element: j.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, R.It)(), (0, d.P6)(), f.Z.clearSubsection(eY.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eY.Z5c.SETTINGS("profile-customization"),
            },
            [eF.s6.PROFILE_DISPLAY_NAME]: {
                section: eY.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ez.intl.string(ez.t["9AjdkJ"])],
                parent: eF.s6.PROFILE_CUSTOMIZATION,
            },
            [eF.s6.PROFILE_USER_PROFILE]: {
                section: eY.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ez.intl.string(ez.t["2p07FR"]), ez.intl.string(ez.t["7vhiqq"])],
                parent: eF.s6.PROFILE_CUSTOMIZATION,
            },
            [eF.s6.PROFILE_SERVER_PROFILES]: {
                section: eY.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ez.intl.string(ez.t.kPHroa)],
                parent: eF.s6.PROFILE_CUSTOMIZATION,
            },
            [eF.s6.CONTENT_SOCIAL]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                label: ez.intl.string(ez.t["+o1pDQ"]),
                searchableTitles: [ez.intl.string(ez.t["+o1pDQ"])],
                ariaLabel: ez.intl.string(ez.t["+o1pDQ"]),
                element: ep.Z,
                url: eY.Z5c.SETTINGS("content-and-social"),
            },
            [eF.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t["+o1pDQ"]), ez.intl.string(ez.t["/7xJCA"])],
                parent: eF.s6.CONTENT_SOCIAL,
            },
            [eF.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t["+o1pDQ"]), ez.intl.string(ez.t["/7xJCA"])],
                parent: eF.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eF.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.YpCiMj)],
                parent: eF.s6.CONTENT_SOCIAL,
            },
            [eF.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                label: ez.intl.string(ez.t.YpCiMj),
                searchableTitles: [ez.intl.string(ez.t.YpCiMj)],
                ariaLabel: ez.intl.string(ez.t.YpCiMj),
                parent: eF.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eY.Z5c.SETTINGS(eY.oAB.CONTENT_AND_SOCIAL, eH.C),
            },
            [eF.s6.DATA_PRIVACY]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                label: ez.intl.string(ez.t.OAuOHB),
                searchableTitles: [ez.intl.string(ez.t.OAuOHB)],
                ariaLabel: ez.intl.string(ez.t.OAuOHB),
                element: eh.Z,
                url: eY.Z5c.SETTINGS("data-and-privacy"),
            },
            [eF.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [ez.intl.string(ez.t["Vov/9v"])],
                parent: eF.s6.ACCOUNT,
            },
            [eF.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.WWaFn5)],
                parent: eF.s6.DATA_PRIVACY,
                predicate: () => (0, X.isDesktop)(),
            },
            [eF.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t["opi/XF"])],
                parent: eF.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.xVRG4O)],
                parent: eF.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eF.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.fyA119)],
                parent: eF.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eF.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.fyA119)],
                parent: eF.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eF.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t["/U8Iwc"])],
                parent: eF.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eF.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t["ms+TmZ"])],
                parent: eF.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eF.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t["y62Z/f"])],
                parent: eF.s6.CONTENT_SOCIAL,
            },
            [eF.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.SRZyHh)],
                parent: eF.s6.DATA_PRIVACY,
            },
            [eF.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ez.intl.string(ez.t.uEz8JC),
                    ez.intl.string(ez.t["N/oRIy"]),
                    ez.intl.string(ez.t.QVdYsL),
                    ez.intl.string(ez.t["aWD+tr"]),
                    ez.intl.string(ez.t["5mnTa2"]),
                ],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eF.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ez.intl.string(ez.t["Hj/Bur"]),
                    ez.intl.string(ez.t["N/oRIy"]),
                    ez.intl.string(ez.t.QVdYsL),
                    ez.intl.string(ez.t["aWD+tr"]),
                    ez.intl.string(ez.t["5mnTa2"]),
                    ez.intl.string(ez.t.K0OWPz),
                ],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eF.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ez.intl.string(ez.t["Hj/Bur"]),
                    ez.intl.string(ez.t["N/oRIy"]),
                    ez.intl.string(ez.t.QVdYsL),
                    ez.intl.string(ez.t["aWD+tr"]),
                    ez.intl.string(ez.t["5mnTa2"]),
                ],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eF.s6.GORE_MEDIA_REDACTION]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ez.intl.string(ez.t["Hj/Bur"]),
                    ez.intl.string(ez.t["N/oRIy"]),
                    ez.intl.string(ez.t.QVdYsL),
                    ez.intl.string(ez.t["aWD+tr"]),
                    ez.intl.string(ez.t.K0OWPz),
                ],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eF.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ez.intl.string(ez.t.JzaP4u),
                    ez.intl.string(ez.t.H9XOl5),
                    ez.intl.string(ez.t.k4W40N),
                ],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eF.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t["L+yTsb"])],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eF.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.XahVjo)],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eF.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                parent: eF.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eF.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.RAQUSE), ez.intl.string(ez.t.wbYDfX)],
                parent: eF.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eF.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t["3o2ojo"])],
                parent: eF.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !tr,
            },
            [eF.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.OLwZDQ)],
                parent: eF.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eF.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.wBkwu7)],
                parent: eF.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eF.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.XuADY2)],
                parent: eF.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eF.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.MNKzys)],
                parent: eF.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eF.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.VkS7YW)],
                parent: eF.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eF.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eF.CF],
                parent: eF.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eF.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.dmBSKi)],
                parent: eF.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eF.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t["1UaUy8"]), ez.intl.string(ez.t["xIk/iI"])],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e5,
            },
            [eF.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.qFsx5u)],
                parent: eF.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e9 && !ts && !te,
            },
            [eF.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t["5b3FND"])],
                parent: eF.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => tl,
            },
            [eF.s6.PRIVACY_FAMILY_CENTER]: {
                section: eY.oAB.FAMILY_CENTER,
                searchableTitles: [ez.intl.string(eX.default.gntCQU)],
                label: ez.intl.string(eX.default.gntCQU),
                ariaLabel: ez.intl.string(eX.default.gntCQU),
                element: eE.Z,
                badgeCount: C,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: ez.intl.string(ez.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eY.Z5c.SETTINGS("family-center"),
            },
            [eF.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.BG7Qsb)],
                parent: eF.s6.DATA_PRIVACY,
            },
            [eF.s6.AUTHORIZED_APPS]: {
                section: eY.oAB.AUTHORIZED_APPS,
                searchableTitles: [ez.intl.string(ez.t["f6kk+v"])],
                label: ez.intl.string(ez.t["f6kk+v"]),
                element: ed.Z,
                url: eY.Z5c.SETTINGS("authorized-apps"),
            },
            [eF.s6.SESSIONS]: {
                section: eY.oAB.SESSIONS,
                searchableTitles: [ez.intl.string(ez.t["+1h0k5"])],
                label: ez.intl.string(ez.t["+1h0k5"]),
                ariaLabel: ez.intl.string(ez.t["+1h0k5"]),
                element: eN.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: A },
            },
            [eF.s6.CONNECTIONS]: {
                section: eY.oAB.CONNECTIONS,
                searchableTitles: [ez.intl.string(ez.t["3fe7U1"])],
                label: ez.intl.string(ez.t["3fe7U1"]),
                ariaLabel: ez.intl.string(ez.t["3fe7U1"]),
                element: e_.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: A },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eY.Z5c.SETTINGS("connections"),
            },
            [eF.s6.THIRD_PARTY_ACCESS]: {
                section: eY.oAB.CONNECTIONS,
                searchableTitles: [
                    ez.intl.string(ez.t["Ig/XFR"]),
                    ez.intl.string(ez.t["3fe7U1"]),
                    ez.intl.string(ez.t["f6kk+v"]),
                ],
                label: ez.intl.string(ez.t["Ig/XFR"]),
                parent: eF.s6.CONNECTIONS,
                element: eD.Z,
            },
            [eF.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eY.oAB.CONNECTIONS,
                searchableTitles: [ez.intl.string(ez.t["+/hZMz"])],
                parent: eF.s6.CONNECTIONS,
                element: e_.Z,
            },
            [eF.s6.CLIPS]: {
                section: eY.oAB.CLIPS,
                searchableTitles: [ez.intl.string(ez.t.z2jK6e)],
                label: ez.intl.string(ez.t.z2jK6e),
                ariaLabel: ez.intl.string(ez.t.z2jK6e),
                icon: eJ ? (0, r.jsx)(y.Z, {}) : void 0,
                element: O.Z,
                predicate: () => !e0,
                url: eY.Z5c.SETTINGS("clips"),
            },
            [eF.s6.RESTRICTED_USERS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                parent: eF.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: ez.intl.string(ez.t["3wRorq"]),
                element: eU.ZP,
                predicate: () => tu || td,
            },
            [eF.s6.BLOCKED_USERS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                parent: eF.s6.RESTRICTED_USERS,
                label: ez.intl.string(ez.t.PFOUKS),
                searchableTitles: [ez.intl.string(ez.t.PFOUKS)],
                element: eU.GF,
                predicate: () => td,
            },
            [eF.s6.IGNORED_USERS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                parent: eF.s6.RESTRICTED_USERS,
                searchableTitles: [ez.intl.string(ez.t["93ZDWF"])],
                label: ez.intl.string(ez.t["93ZDWF"]),
                element: eU.yo,
                predicate: () => tu,
            },
            [eF.s6.PREMIUM]: {
                section: eY.oAB.PREMIUM,
                ariaLabel: ez.intl.string(ez.t.Ipxkoq),
                searchableTitles: [ez.intl.string(ez.t.Ipxkoq)],
                label: ez.intl.string(ez.t.Ipxkoq),
                element: er.Z,
                className: eQ.premiumTab,
            },
            [eF.s6.GUILD_BOOSTING]: {
                section: eY.oAB.GUILD_BOOSTING,
                searchableTitles: [ez.intl.string(ez.t["+CbP2t"])],
                label: ez.intl.string(ez.t["+CbP2t"]),
                element: eA.Z,
            },
            [eF.s6.SUBSCRIPTIONS]: {
                section: eY.oAB.SUBSCRIPTIONS,
                ariaLabel: ez.intl.string(ez.t.trSpHR),
                searchableTitles: [ez.intl.string(ez.t.trSpHR)],
                label: ez.intl.string(ez.t.trSpHR),
                element: L.Z,
                icon: b
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eF.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eY.oAB.SUBSCRIPTIONS,
                searchableTitles: [ez.intl.string(ez.t["2GKrvr"])],
                parent: eF.s6.SUBSCRIPTIONS,
            },
            [eF.s6.GIFT_INVENTORY]: {
                section: eY.oAB.INVENTORY,
                searchableTitles: [ez.intl.string(ez.t["jcSP+v"])],
                label: ez.intl.string(ez.t["jcSP+v"]),
                element: eO.Z,
                ariaLabel: ez.intl.string(ez.t["jcSP+v"]),
                badgeCount: t,
            },
            [eF.s6.GIFT_CODE_REDEMPTION]: {
                section: eY.oAB.INVENTORY,
                searchableTitles: [ez.intl.string(ez.t["il+VCg"])],
                parent: eF.s6.GIFT_INVENTORY,
                predicate: () => !tt,
            },
            [eF.s6.GIFT_INVENTORY_QUESTS]: {
                section: eY.oAB.INVENTORY,
                searchableTitles: [ez.intl.string(ez.t.JALI2N)],
                parent: eF.s6.GIFT_INVENTORY,
                predicate: () => tn,
            },
            [eF.s6.GIFT_INVENTORY_LIST]: {
                section: eY.oAB.INVENTORY,
                searchableTitles: [ez.intl.string(ez.t["9KeUbW"])],
                parent: eF.s6.GIFT_INVENTORY,
                predicate: () => !tt,
            },
            [eF.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eY.oAB.INVENTORY,
                searchableTitles: [ez.intl.string(ez.t.vwMEHR)],
                parent: eF.s6.GIFT_INVENTORY,
                predicate: () => tt,
            },
            [eF.s6.BILLING]: {
                section: eY.oAB.BILLING,
                searchableTitles: [ez.intl.string(ez.t.oeUm2t)],
                label: ez.intl.string(ez.t.oeUm2t),
                ariaLabel: ez.intl.string(ez.t.oeUm2t),
                element: ef.Z,
            },
            [eF.s6.BILLING_PAYMENT_METHODS]: {
                section: eY.oAB.BILLING,
                searchableTitles: [ez.intl.string(ez.t.W26xGR)],
                parent: eF.s6.BILLING,
            },
            [eF.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eY.oAB.BILLING,
                searchableTitles: [ez.intl.string(ez.t.obLrcH)],
                parent: eF.s6.BILLING,
            },
            [eF.s6.APPEARANCE]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [ez.intl.string(ez.t["iHH+k5"])],
                label: ez.intl.string(ez.t["iHH+k5"]),
                ariaLabel: ez.intl.string(ez.t["iHH+k5"]),
                element: eu.Z,
                newIndicator: (0, r.jsx)(e3, {}),
                newIndicatorDismissibleContentTypes: e2(),
                url: eY.Z5c.SETTINGS("appearance"),
            },
            [eF.s6.APPEARANCE_THEME]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [ez.intl.string(ez.t.Ksh3io)],
                parent: eF.s6.APPEARANCE,
            },
            [eF.s6.APPEARANCE_COLOR]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [ez.intl.string(ez.t.OCOOiI)],
                parent: eF.s6.APPEARANCE_THEME,
            },
            [eF.s6.APPEARANCE_ICON]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [ez.intl.string(ez.t.RPh2oq)],
                parent: eF.s6.APPEARANCE_THEME,
            },
            [eF.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [ez.intl.string(ez.t.ZEoGMT)],
                parent: eF.s6.APPEARANCE,
            },
            [eF.s6.APPEARANCE_LIST_SPACING]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eF.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: ez.intl.string(ez.t.y2b7CA),
                    color: T.Z.BG_BRAND,
                }),
            },
            [eF.s6.APPEARANCE_SCALING_SPACING]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [ez.intl.string(ez.t.qPOqoK)],
                parent: eF.s6.APPEARANCE,
            },
            [eF.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [
                    ez.intl.string(ez.t.dyamEB),
                    ez.intl.string(ez.t.p8NOws),
                    ez.intl.string(ez.t["+o/sOj"]),
                ],
                parent: eF.s6.APPEARANCE,
                predicate: () =>
                    B.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eF.s6.ACCESSIBILITY]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.G0neg4)],
                label: ez.intl.string(ez.t.G0neg4),
                ariaLabel: ez.intl.string(ez.t.G0neg4),
                element: eo.Z,
                url: eY.Z5c.SETTINGS("accessibility"),
            },
            [eF.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.aZlePj)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_SATURATION]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t["5PWWCQ"])],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.bQCodH)],
                parent: eF.s6.ACCESSIBILITY_SATURATION,
            },
            [eF.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.OLZFBw)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t["+IsihY"])],
                parent: eF.s6.ACCESSIBILITY,
                predicate: () => (0, v.l)("SettingsRendererConfig"),
            },
            [eF.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.uSOPWl)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(eq.default["2gFUEx"])],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.BT8Bmp)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t["sSY+mJ"])],
                parent: eF.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eF.s6.ACCESSIBILITY_CONTRAST]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.TYyfOz)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.cguieX)],
                parent: eF.s6.ACCESSIBILITY_CONTRAST,
            },
            [eF.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.e3TR1d)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.b3XBzs)],
                parent: eF.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eF.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.Iayoh4)],
                parent: eF.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eF.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.iIaOlZ)],
                parent: eF.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eF.s6.ACCESSIBILITY_STICKERS]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t["6NtAuL"])],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_MESSAGES]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.onqU6u)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t["3Fztn5"])],
                parent: eF.s6.ACCESSIBILITY_MESSAGES,
            },
            [eF.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.TZ2hZG)],
                parent: eF.s6.ACCESSIBILITY_MESSAGES,
            },
            [eF.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.VpSKeH)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.qvTIwc)],
                parent: eF.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eF.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.lsW5Eh)],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eF.CF],
                parent: eF.s6.ACCESSIBILITY,
            },
            [eF.s6.VOICE_AND_VIDEO]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.B1fFpa)],
                label: ez.intl.string(ez.t.B1fFpa),
                ariaLabel: ez.intl.string(ez.t.B1fFpa),
                element: eG.Z,
                predicate: () => Y.Z.isSupported(),
                url: eY.Z5c.SETTINGS("voice"),
            },
            [eF.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.K3lovL), ez.intl.string(ez.t.NiTd0d)],
                parent: eF.s6.VOICE_AND_VIDEO,
                predicate: () => tf,
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.FlNoSU)],
                parent: eF.s6.VOICE_AND_VIDEO,
                predicate: () => tf,
            },
            [eF.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.ABjMWF)],
                parent: eF.s6.VOICE_AND_VIDEO,
                predicate: () => tf,
            },
            [eF.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.OFpL3d)],
                parent: eF.s6.VOICE_AND_VIDEO,
                predicate: () => tf,
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.KDdjoq), ez.intl.string(ez.t.FeUKeH)],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tf,
            },
            [eF.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.K3lovL), ez.intl.string(ez.t.NiTd0d)],
                parent: tf ? eF.s6.VOICE_AND_VIDEO_VOICE_TAB : eF.s6.VOICE_AND_VIDEO,
            },
            [eF.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eY.oAB.VOICE,
                searchableTitles: [
                    ez.intl.string(ez.t.hHMYbW),
                    ez.intl.string(ez.t.dl18zc),
                    ez.intl.string(ez.t.nuFtHB),
                    ez.intl.string(ez.t["3182VF"]),
                    ez.intl.string(ez.t["DGq/PT"]),
                ],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eF.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [
                    ez.intl.string(ez.t.OX2Bnp),
                    ez.intl.string(ez.t.eATD2N),
                    ez.intl.string(ez.t.nuFtHB),
                    ez.intl.string(ez.t["3182VF"]),
                    ez.intl.string(ez.t["DGq/PT"]),
                ],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eF.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.gyljWF), ez.intl.string(ez.t.nuFtHB)],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eF.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eY.oAB.VOICE,
                searchableTitles: [
                    ez.intl.string(ez.t.LM3U3t),
                    ez.intl.string(ez.t.nuFtHB),
                    ez.intl.string(ez.t.VZPR0d),
                    ez.intl.string(ez.t.cjPbpa),
                ],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, et.R)({
                        location: "SettingsRendererConfig",
                        autoTrackExposure: !1,
                    });
                    return e.length > 0;
                },
            },
            [eF.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["pS+K2N"]), ez.intl.string(ez.t.nuFtHB)],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => th !== eV._.STUDIO,
            },
            [eF.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["sqUm+v"]), ez.intl.string(ez.t.nuFtHB)],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tp === eK.pM.VOICE_ACTIVITY && tm,
            },
            [eF.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.e7LIiY)],
                parent: tf ? eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eF.s6.VOICE_AND_VIDEO,
            },
            [eF.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.nzUc3N)],
                parent: tf ? eF.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB : eF.s6.VOICE_AND_VIDEO,
            },
            [eF.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.ABjMWF)],
                parent: eF.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eF.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.nzUc3N)],
                parent: eF.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.LKzQSE)],
                parent: tf ? eF.s6.VOICE_AND_VIDEO_VIDEO_TAB : eF.s6.VOICE_AND_VIDEO,
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.F122Gx)],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => Y.Z.supports(eK.AN.VIDEO),
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["3Ppr1t"])],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.lZTUPj)],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => Y.Z.supports(eK.AN.VIDEO),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["8/udY2"])],
                parent: eF.s6.VOICE_AND_VIDEO,
            },
            [eF.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["8/udY2"])],
                parent: eF.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => tf && !(0, X.isWeb)(),
            },
            [eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["8/udY2"])],
                parent: eF.s6.VOICE_AND_VIDEO_VOICE_TAB,
                predicate: () => tf,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.DSGme3)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => !tf,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.Tceiq6)],
                parent: tf ? eF.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED : eF.s6.VOICE_AND_VIDEO_ADVANCED,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["71Ve19"])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => Y.Z.supports(eK.AN.OPEN_H264),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.Sln58f)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.AxnPm5)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => "stable" !== Q.ZP.releaseChannel && Y.Z.isExperimentalEncodersSupported(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["6I6GUl"])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => tm,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.iWTwu7)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["/jwMtr"])],
                parent: tf ? eF.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eF.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.OBwCXF)],
                parent: tf ? eF.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.t8QhiY), ez.intl.string(ez.t.hmfkCg)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Y.Z.isNoiseSuppressionSupported(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.BbESsr)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Y.Z.isAdvancedVoiceActivitySupported(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.cUMdHx)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Y.Z.isAutomaticGainControlSupported(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.DFPXIC)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => Y.Z.showBypassSystemInputProcessing(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.uancuL)],
                parent: tf ? eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eF.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => Y.Z.supports(eK.AN.QOS),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.oSdBvb)],
                parent: tf ? eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eF.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => Y.Z.supports(eK.AN.ATTENUATION),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.wVBHr6)],
                parent: tf ? eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eF.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => Y.Z.shouldOfferManualSubsystemSelection(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eY.oAB.VOICE,
                searchableTitles: [
                    ez.intl.string(ez.t.KDdjoq),
                    ez.intl.string(ez.t.NMCIf3),
                    ez.intl.string(ez.t.FeUKeH),
                ],
                parent: tf ? eF.s6.VOICE_AND_VIDEO_VIDEO_STREAMING : eF.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () =>
                    Y.Z.supportsVideoHook() ||
                    Y.Z.supportsExperimentalSoundshare() ||
                    (Y.Z.supportsSystemScreensharePicker() && (0, X.isMac)()),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.GmWk2N), ez.intl.string(ez.t["Fj/xn5"])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => Y.Z.supportsVideoHook(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["4I0qzc"])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => Y.Z.supportsExperimentalSoundshare() && Y.Z.supportsHookSoundshare(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.ie1mgY)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => Y.Z.supportsSystemScreensharePicker() && (0, X.isMac)(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["aP1N/v"])],
                parent: tf ? eF.s6.VOICE_AND_VIDEO_VOICE_ADVANCED : eF.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => X.isPlatformEmbedded,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.OFpL3d)],
                parent: tf ? eF.s6.VOICE_AND_VIDEO_DEBUG_TAB : eF.s6.VOICE_AND_VIDEO_ADVANCED,
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["0CEP6e"])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => J.Sb.getSetting(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["r6K+TE"])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => Y.Z.isAecDumpSupported(),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.U4FgFB)],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === Q.ZP.releaseChannel || "development" === Q.ZP.releaseChannel) &&
                    e7 &&
                    Y.Z.supports(eK.AN.CONNECTION_REPLAY),
            },
            [eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["726JHB"])],
                parent: eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    X.isPlatformEmbedded && Y.Z.supports(eK.AN.DEBUG_LOGGING) && null != p.Z.fileManager.readLogFiles,
            },
            [eF.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["/RXu6+"])],
                parent: tf ? eF.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING : eF.s6.VOICE_AND_VIDEO_ADVANCED,
            },
            [eF.s6.POGGERMODE]: {
                section: eY.oAB.POGGERMODE,
                searchableTitles: [ez.intl.string(ez.t.AtCukJ)],
                label: ez.intl.string(ez.t.AtCukJ),
                ariaLabel: ez.intl.string(ez.t.AtCukJ),
                element: x.Z,
                predicate: () => D.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: eQ.poggermodeIcon,
                }),
            },
            [eF.s6.CHAT]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t["/VQax8"])],
                label: ez.intl.string(ez.t["/VQax8"]),
                ariaLabel: ez.intl.string(ez.t["/VQax8"]),
                element: eP.Z,
                url: eY.Z5c.SETTINGS("chat"),
            },
            [eF.s6.CHAT_INLINE_MEDIA]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.U68Dgo)],
                parent: eF.s6.CHAT,
            },
            [eF.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.U47N1t)],
                parent: eF.s6.CHAT_INLINE_MEDIA,
            },
            [eF.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.VP11Nj)],
                parent: eF.s6.CHAT_INLINE_MEDIA,
            },
            [eF.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t["5S2AKy"])],
                parent: eF.s6.CHAT_INLINE_MEDIA,
            },
            [eF.s6.CHAT_EMBEDS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.PWZOn5)],
                parent: eF.s6.CHAT,
            },
            [eF.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.xX0ZTE)],
                parent: eF.s6.CHAT_EMBEDS,
            },
            [eF.s6.CHAT_EMOJI]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.sMOuub)],
                parent: eF.s6.CHAT,
            },
            [eF.s6.CHAT_EMOJI_REACTIONS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.Iv24sr)],
                parent: eF.s6.CHAT_EMOJI,
            },
            [eF.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t["79qal5"])],
                parent: eF.s6.CHAT_EMOJI,
            },
            [eF.s6.CHAT_STICKERS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t["6NtAuL"])],
                parent: eF.s6.CHAT,
            },
            [eF.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t["29xPVV"])],
                parent: eF.s6.CHAT_STICKERS,
            },
            [eF.s6.CHAT_SOUNDMOJI]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.EHlAMT)],
                parent: eF.s6.CHAT,
            },
            [eF.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t["CtYr+f"])],
                parent: eF.s6.CHAT_SOUNDMOJI,
            },
            [eF.s6.CHAT_TEXT_BOX]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.afR0pK)],
                parent: eF.s6.CHAT,
            },
            [eF.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.AqGrEB)],
                parent: eF.s6.CHAT_TEXT_BOX,
            },
            [eF.s6.CHAT_THREADS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.B2panJ)],
                parent: eF.s6.CHAT,
            },
            [eF.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.AInv5u)],
                parent: eF.s6.CHAT_THREADS,
            },
            [eF.s6.CHAT_SPOILERS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.QgwmV1)],
                parent: eF.s6.CHAT,
            },
            [eF.s6.NOTIFICATIONS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.HcoRu7)],
                label: ez.intl.string(ez.t.HcoRu7),
                ariaLabel: ez.intl.string(ez.t.HcoRu7),
                element: eT.Z,
                url: eY.Z5c.SETTINGS("notifications"),
            },
            [eF.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t["/0WClp"])],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.VH8AIC)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.xSmFQE)],
                parent: eF.s6.NOTIFICATIONS,
                predicate: () => (0, X.isWindows)(),
            },
            [eF.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.z21l8P)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: ["New Notification Settings (Advanced, Staff Only)"],
                parent: eF.s6.NOTIFICATIONS,
                predicate: () => !1,
            },
            [eF.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: ["Restore most recent snapshot"],
                parent: eF.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eF.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: ["Launch Migration"],
                parent: eF.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eF.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: ["Toggle new system on/off"],
                parent: eF.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eF.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.TTvjd3)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.VpSKeH)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.D9yVAA)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.u6dc5O)],
                parent: eF.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eF.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.P8MG6u)],
                parent: eF.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eF.s6.NOTIFICATIONS_SOUNDS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.MKWyKS)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_EMAILS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.TPchzM)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t["B75+xc"])],
                parent: eF.s6.NOTIFICATIONS_EMAILS,
            },
            [eF.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.sxn7lZ)],
                parent: eF.s6.NOTIFICATIONS_EMAILS,
            },
            [eF.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.EkxXhY)],
                parent: eF.s6.NOTIFICATIONS_EMAILS,
            },
            [eF.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.jNrkrK)],
                parent: eF.s6.NOTIFICATIONS_EMAILS,
            },
            [eF.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.E8g1l5)],
                parent: eF.s6.NOTIFICATIONS_EMAILS,
            },
            [eF.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.Ra9Pws)],
                parent: eF.s6.NOTIFICATIONS_EMAILS,
            },
            [eF.s6.NOTIFICATIONS_REACTIONS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.Rq0NFh)],
                parent: eF.s6.NOTIFICATIONS,
            },
            [eF.s6.NOTIFICATIONS_GAME_ACTIVITY]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.omtoJy), ez.intl.string(ez.t.SZue3N)],
                parent: eF.s6.NOTIFICATIONS,
                predicate: () => (0, N.uw)("SettingsRendererConfig"),
            },
            [eF.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.wtk08f)],
                parent: eF.s6.NOTIFICATIONS,
                predicate: () => (0, V.JN)("SettingsRendererConfig"),
            },
            [eF.s6.KEYBINDS]: {
                section: eY.oAB.KEYBINDS,
                searchableTitles: [ez.intl.string(ez.t.T9DA2N)],
                label: ez.intl.string(ez.t.T9DA2N),
                element: ev.Z,
                url: eY.Z5c.SETTINGS("keybinds"),
            },
            [eF.s6.LANGUAGE]: {
                section: eY.oAB.LOCALE,
                searchableTitles: [ez.intl.string(ez.t.IHMsPj)],
                label: ez.intl.string(ez.t.IHMsPj),
                element: eI.Z,
                url: eY.Z5c.SETTINGS("language"),
            },
            [eF.s6.WINDOW_SETTINGS]: {
                section: eY.oAB.WINDOWS,
                searchableTitles: [ez.intl.string(ez.t.ZkDZoq)],
                label: ez.intl.string(ez.t.ZkDZoq),
                element: ex.Z,
                predicate: () => X.isPlatformEmbedded && (0, X.isWindows)(),
            },
            [eF.s6.LINUX_SETTINGS]: {
                section: eY.oAB.LINUX,
                searchableTitles: [ez.intl.string(ez.t["7pPjTU"])],
                label: ez.intl.string(ez.t["7pPjTU"]),
                element: e6,
                predicate: () => X.isPlatformEmbedded && (0, X.isLinux)(),
            },
            [eF.s6.STREAMER_MODE]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [ez.intl.string(ez.t.S5GfOT)],
                label: ez.intl.string(ez.t.S5GfOT),
                ariaLabel: ez.intl.string(ez.t.S5GfOT),
                element: eR.Z,
                url: eY.Z5c.SETTINGS("streamer-mode"),
            },
            [eF.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [ez.intl.string(ez.t.bxGbHB)],
                parent: eF.s6.STREAMER_MODE,
            },
            [eF.s6.STREAMER_MODE_ENABLE]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [ez.intl.string(ez.t.p9ZAJS)],
                parent: eF.s6.STREAMER_MODE,
            },
            [eF.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [ez.intl.string(ez.t.UpQziI)],
                parent: eF.s6.STREAMER_MODE,
            },
            [eF.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [ez.intl.string(ez.t.q7WNGh)],
                parent: eF.s6.STREAMER_MODE,
            },
            [eF.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [ez.intl.string(ez.t["1CWknJ"])],
                parent: eF.s6.STREAMER_MODE,
            },
            [eF.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [ez.intl.string(ez.t.qmYiYW)],
                parent: eF.s6.STREAMER_MODE,
            },
            [eF.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [ez.intl.string(ez.t["iA81+f"])],
                parent: eF.s6.STREAMER_MODE,
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
            [eF.s6.SETTINGS_ADVANCED]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [ez.intl.string(ez.t["8/udY2"])],
                label: ez.intl.string(ez.t["8/udY2"]),
                ariaLabel: ez.intl.string(ez.t["8/udY2"]),
                element: ec.ZP,
            },
            [eF.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [ez.intl.string(ez.t.ObIb1d)],
                parent: eF.s6.SETTINGS_ADVANCED,
                predicate: () => z.wS,
            },
            [eF.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [ez.intl.string(ez.t["eOC/Fx"])],
                parent: eF.s6.SETTINGS_ADVANCED,
                predicate: () => X.isPlatformEmbedded,
            },
            [eF.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [ez.intl.string(ez.t.fi3UQE)],
                parent: eF.s6.SETTINGS_ADVANCED,
                predicate: () => ti,
            },
            [eF.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [ez.intl.string(ez.t.erOqlp)],
                parent: eF.s6.SETTINGS_ADVANCED,
                predicate: () => to,
            },
            [eF.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [ez.intl.string(ez.t.qDZryM)],
                parent: eF.s6.SETTINGS_ADVANCED,
            },
            [eF.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: eF.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    g.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [eF.s6.ACTIVITY_PRIVACY]: {
                section: eY.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.Cq98yM)],
                label: ez.intl.string(ez.t.Cq98yM),
                ariaLabel: ez.intl.string(ez.t.Cq98yM),
                element: el.Z,
                predicate: () => !e0,
                url: eY.Z5c.SETTINGS("activity-privacy"),
            },
            [eF.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: e0 ? eY.oAB.GAMES : eY.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t["8ka8lp"])],
                parent: e0 ? eF.s6.GAMES_ACTIVITY_PRIVACY : eF.s6.ACTIVITY_PRIVACY,
            },
            [eF.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: e0 ? eY.oAB.GAMES : eY.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.VOszPD)],
                parent: e0 ? eF.s6.GAMES_ACTIVITY_PRIVACY : eF.s6.ACTIVITY_PRIVACY,
            },
            [eF.s6.ACTIVITY_PRIVACY_TOS]: {
                section: e0 ? eY.oAB.GAMES : eY.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eF.CF],
                parent: e0 ? eF.s6.GAMES_ACTIVITY_PRIVACY : eF.s6.ACTIVITY_PRIVACY,
            },
            [eF.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eY.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t["4F2KoK"])],
                parent: eF.s6.ACTIVITY_PRIVACY,
            },
            [eF.s6.REGISTERED_GAMES]: {
                section: eY.oAB.REGISTERED_GAMES,
                searchableTitles: [ez.intl.string(ez.t.AVDyEh)],
                label: ez.intl.string(ez.t.AVDyEh),
                element: eb.Z,
                predicate: () => !e0 && (0, ek.Jw)(),
            },
            [eF.s6.OVERLAY]: {
                section: eY.oAB.OVERLAY,
                searchableTitles: [ez.intl.string(ez.t["9cb1U1"]), ez.intl.string(ez.t.HcoRu7)],
                label: ez.intl.string(ez.t["9cb1U1"]),
                element: eS.Z,
                predicate: () => !e0 && Z,
            },
            [eF.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, E.Z)(!0),
                searchableTitles: [ez.intl.string(ez.t.LRmNAg)],
                label: ez.intl.string(ez.t.LRmNAg),
            },
            [eF.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    K.default.track(eY.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, q.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                K.default.track(eY.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, h.Z)(e);
                            },
                        });
                },
                searchableTitles: [ez.intl.string(ez.t.sMEktb)],
                label: ez.intl.string(ez.t.sMEktb),
                ariaLabel: ez.intl.string(ez.t.sMEktb),
            },
            [eF.s6.HYPESQUAD]: {
                section: eY.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [ez.intl.string(ez.t["k0R+4e"])],
                label: ez.intl.string(ez.t["k0R+4e"]),
                element: ey.Z,
                predicate: () => !tc,
            },
            [eF.s6.TOWNHALL]: {
                section: eY.oAB.TOWNHALL,
                searchableTitles: [ez.intl.string(ez.t.dnZNER)],
                label: ez.intl.string(ez.t.dnZNER),
                predicate: () => tc,
                onClick: () => {
                    (0, h.Z)("https://discord.gg/discord-townhall"), (0, u.xf)();
                },
            },
            [eF.s6.EXPERIMENTS]: {
                section: eY.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: eL.Z,
                predicate: () => F.Z.isDeveloper,
                url: eY.Z5c.SETTINGS("experiments"),
            },
            [eF.s6.DEVELOPER_OPTIONS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: eg.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eF.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eF.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eF.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eF.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e7 && F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eF.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e7 && F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eF.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eF.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e7 && F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Toggleable Components"],
                parent: eF.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e7 && F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eF.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e7 && F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eF.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e7 && F.Z.isDeveloper && H.default.layoutDebuggingEnabled,
            },
            [eF.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e7 && F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e7 && F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eF.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eF.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eF.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eF.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eF.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => m.q && F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eF.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eF.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eF.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eF.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eF.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.HOTSPOT_OPTIONS]: {
                section: eY.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ["Hotspot Options"],
                label: "Hotspot Options",
                element: ee.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eY.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ["Dismissible Contents"],
                label: "Dismissible Contents",
                element: S.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.PAYMENT_FLOW_MODALS]: {
                section: eY.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ["Payment Flow Modals"],
                label: "Payment Flow Modals",
                element: en.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.REVENUE_STORYBOOK]: {
                section: eY.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: [
                    "Revenue Storybook",
                    "Payment Components",
                    "Orb Components",
                    "Virtual Currency",
                    "Nitro Components",
                ],
                label: "Revenue Storybook",
                element: eB.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eY.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ["Virtual Currency", "Orb", "Config"],
                label: "Virtual Currency Config",
                element: eZ.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.PAYMENT_COMPONENTS]: {
                section: eY.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Payment Components"],
                label: "Payment Components",
                element: eB.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.ORB_COMPONENTS]: {
                section: eY.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Orb Components"],
                label: "Orb Components",
                element: eB.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.NITRO_COMPONENTS]: {
                section: eY.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Nitro Components"],
                label: "Nitro Components",
                element: eB.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.TEXT_PLAYGROUND]: {
                section: eY.oAB.TEXT_PLAYGROUND,
                searchableTitles: ["Text Playground"],
                label: "Text Playground",
                element: ew.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DESIGN_SYSTEMS]: {
                section: eY.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Design Systems"],
                label: "Design Systems",
                element: em.Z,
                predicate: () => F.Z.isDeveloper,
                url: eY.Z5c.SETTINGS("design-systems"),
            },
            [eF.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eY.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Colors"],
                label: "Colors",
                element: em.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.ANIMATION_TESTING]: {
                section: eY.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Animation Testing"],
                label: "Animation Testing",
                element: em.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eY.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Components"],
                label: "Components",
                element: em.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.TEXT_COMPONENTS]: {
                section: eY.oAB.TEXT_COMPONENT,
                searchableTitles: ["Text Components"],
                label: "Text Components",
                element: ea.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.INTL_TESTING]: {
                section: eY.oAB.INTL_TESTING,
                searchableTitles: ["Intl Testing", "i18n"],
                label: "Intl Testing",
                element: w.Z,
                predicate: () => e7 || F.Z.isDeveloper,
            },
            [eF.s6.SHOP_KEEPER]: {
                section: eY.oAB.SHOP_KEEPER,
                searchableTitles: ["Shop Keeper"],
                label: "Shop Keeper",
                element: I.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.QUEST_PREVIEW_TOOL]: {
                section: eY.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ["Quest Preview Tool"],
                label: "Quest Preview Tool",
                element: G.Z,
                predicate: () => (0, M.X)({ location: eW.dr.QUEST_PREVIEW_TOOL }),
            },
            [eF.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG]: {
                section: eY.oAB.QUEST_MINOR_REWARD_CAPPING_CONFIG,
                searchableTitles: ["Minor Reward Capping Config"],
                label: "Minor Reward Capping Config",
                element: U.Z,
                predicate: () => e7,
            },
            [eF.s6.WEB_SETTING_TREE_TOOL]: {
                section: eY.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ["Web Setting Tree Tool"],
                label: "Web Setting Tree Tool",
                element: ej.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eF.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            e1(
                                e$(
                                    {
                                        header: ez.intl.string(ez.t["2jxGen"]),
                                        confirmText: ez.intl.string(ez.t["2jxGen"]),
                                        cancelText: ez.intl.string(ez.t["ETE/oK"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: ez.intl.string(ez.t.SUnWBA),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: ez.intl.string(ez.t["2jxGen"]),
                ariaLabel: ez.intl.string(ez.t["2jxGen"]),
                icon: (0, r.jsx)(s.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [eF.s6.SOCIAL_LINKS]: {
                section: _.ID.CUSTOM,
                element: ei.Z,
            },
            [eF.s6.CLIENT_DEBUG_INFO]: {
                section: _.ID.CUSTOM,
                element: $.Z,
            },
        });
    };
