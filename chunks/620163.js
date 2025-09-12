n.d(t, {
    $Z: () => e2,
    OF: () => e4,
    W8: () => e8,
    c$: () => e3,
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
    h = n(758182),
    m = n(49226),
    g = n(163379),
    E = n(803038),
    b = n(703288),
    y = n(574755),
    O = n(675997),
    v = n(994714),
    I = n(377171),
    T = n(621628),
    S = n(243778),
    A = n(594928),
    C = n(18438),
    N = n(778825),
    R = n(665166),
    P = n(351780),
    w = n(231765),
    D = n(813732),
    x = n(398140),
    L = n(564344),
    j = n(36243),
    M = n(14676),
    k = n(652380),
    U = n(877109),
    G = n(145158),
    B = n(447448),
    Z = n(462354),
    F = n(906467),
    V = n(857192),
    H = n(131951),
    Y = n(25990),
    W = n(626135),
    K = n(572004),
    z = n(49012),
    q = n(358085),
    X = n(998502),
    Q = n(695346),
    J = n(604227),
    $ = n(38915),
    ee = n(321614),
    et = n(498639),
    en = n(748717),
    er = n(419636),
    ei = n(799071),
    ea = n(154022),
    eo = n(393681),
    es = n(309739),
    el = n(64914),
    ec = n(501348),
    eu = n(795594),
    ed = n(443702),
    ef = n(327192),
    e_ = n(949493),
    ep = n(675047),
    eh = n(177508),
    em = n(956699),
    eg = n(54942),
    eE = n(293389),
    eb = n(88624),
    ey = n(387747),
    eO = n(389650),
    ev = n(649157),
    eI = n(593648),
    eT = n(327885),
    eS = n(595242),
    eA = n(463153),
    eC = n(36192),
    eN = n(889029),
    eR = n(400287),
    eP = n(554042),
    ew = n(936982),
    eD = n(200645),
    ex = n(342386),
    eL = n(287490),
    ej = n(706060),
    eM = n(168308),
    ek = n(277329),
    eU = n(273927),
    eG = n(604224),
    eB = n(43434),
    eZ = n(333576),
    eF = n(345655),
    eV = n(726985),
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
            E.Mc.getCurrentConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            e
        );
    },
    e3 = () => {
        let e = e2(),
            [t] = (0, S.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: ez.intl.string(ez.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE
              ? (0, r.jsx)(s.IGR, { text: ez.intl.string(ez.t.y2b7CA) })
              : null;
    },
    e4 = () => {
        let e = [];
        return (
            (0, B.h)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            A.J.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    e8 = () => {
        let e = e4(),
            [t] = (0, S.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: ez.intl.string(ez.t.y2b7CA) })
            : null;
    },
    e6 = eD.Z,
    e5 = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: E,
            searchParams: S,
            numOfPendingFamilyRequests: A,
            isOverlaySupported: B,
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
            isEligibleForSensitiveContentDefaults: tf,
            inputMode: t_,
            activeInputProfile: tp,
            isInputProfileCustom: th,
            isDataUsage3PToggleEnabled: tm,
        } = e;
        return Object.freeze({
            [eV.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: eA.Z,
            },
            [eV.s6.ACCOUNT_SECURITY_TAB]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [ez.intl.string(ez.t.Am9YHh)],
                label: ez.intl.string(ez.t.Am9YHh),
            },
            [eV.s6.ACCOUNT]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [ez.intl.string(ez.t["JAIM/v"])],
                label: ez.intl.string(ez.t["JAIM/v"]),
                ariaLabel: ez.intl.string(ez.t["JAIM/v"]),
                element: eo.Z,
                url: eY.Z5c.SETTINGS("account"),
            },
            [eV.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [ez.intl.string(ez.t.LYju5O)],
                parent: eV.s6.ACCOUNT,
                section: eY.oAB.ACCOUNT,
            },
            [eV.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [ez.intl.string(ez.t["9AjdkJ"])],
                section: eY.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PROFILE,
            },
            [eV.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [ez.intl.string(ez.t.Ulqq6O)],
                section: eY.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PROFILE,
            },
            [eV.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    ez.intl.string(ez.t["/52UY2"]),
                    ez.intl.string(ez.t.sK0dmJ),
                    ez.intl.string(ez.t.XxRj7e),
                    ez.intl.string(ez.t.yNGjyM),
                    ez.intl.string(ez.t.KPGVWl),
                ],
                section: eY.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PROFILE,
                predicate: () => tf,
            },
            [eV.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [ez.intl.string(ez.t["+JkHPz"])],
                section: eY.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PROFILE,
            },
            [eV.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [ez.intl.string(ez.t.oP5zGB)],
                section: eY.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PROFILE,
            },
            [eV.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [ez.intl.string(ez.t.pKSjEh)],
                section: eY.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT,
            },
            [eV.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [ez.intl.string(ez.t["FRep5+"])],
                section: eY.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eV.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [ez.intl.string(ez.t["7qKDrK"])],
                section: eY.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [ez.intl.string(ez.t.m0FidH)],
                section: eY.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eV.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [ez.intl.string(ez.t.cDgKtb)],
                section: eY.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !ta,
            },
            [eV.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [ez.intl.string(ez.t["D+aE7u"])],
                section: eY.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => ta,
            },
            [eV.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [ez.intl.string(ez.t.fZSi1N)],
                section: eY.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eV.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [ez.intl.string(ez.t.uHAJ5u)],
                section: eY.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eV.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [ez.intl.string(ez.t.vrOCCg)],
                section: eY.oAB.ACCOUNT,
                parent: eV.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eV.s6.ACCOUNT_REMOVAL]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [ez.intl.string(ez.t.ZKsIkp)],
                parent: eV.s6.ACCOUNT,
            },
            [eV.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [ez.intl.string(ez.t.jf5GGR)],
                parent: eV.s6.ACCOUNT_REMOVAL,
            },
            [eV.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [ez.intl.string(ez.t["8lQ2ra"])],
                parent: eV.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eV.s6.GAMES]: {
                section: eY.oAB.GAMES,
                searchableTitles: [ez.intl.string(ez.t.URyqtL)],
                label: ez.intl.string(ez.t.URyqtL),
                ariaLabel: ez.intl.string(ez.t.URyqtL),
                element: ek.Z,
                predicate: () => e0,
            },
            [eV.s6.GAMES_MY_GAMES]: {
                section: eY.oAB.GAMES,
                searchableTitles: [ez.intl.string(ez.t["5DMgp6"])],
                parent: eV.s6.GAMES,
            },
            [eV.s6.GAMES_CLIPS]: {
                section: eY.oAB.GAMES,
                searchableTitles: [ez.intl.string(ez.t.z2jK6e)],
                parent: eV.s6.GAMES,
            },
            [eV.s6.GAMES_OVERLAY]: {
                section: eY.oAB.GAMES,
                searchableTitles: [ez.intl.string(ez.t["9cb1U1"])],
                parent: eV.s6.GAMES,
            },
            [eV.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eY.oAB.GAMES,
                searchableTitles: [ez.intl.string(ez.t.Cq98yM)],
                parent: eV.s6.GAMES,
            },
            [eV.s6.PROFILE_CUSTOMIZATION]: {
                section: eY.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [ez.intl.string(ez.t["vi7f+v"])],
                label: ez.intl.string(ez.t["vi7f+v"]),
                ariaLabel: ez.intl.string(ez.t["vi7f+v"]),
                element: L.Z,
                newIndicator: (0, r.jsx)(e8, {}),
                newIndicatorDismissibleContentTypes: [...e4()],
                notice: {
                    stores: [Y.Z, N.Z],
                    element: x.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, C.It)(), (0, u.P6)(), d.Z.clearSubsection(eY.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eY.Z5c.SETTINGS("profile-customization"),
            },
            [eV.s6.PROFILE_DISPLAY_NAME]: {
                section: eY.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ez.intl.string(ez.t["9AjdkJ"])],
                parent: eV.s6.PROFILE_CUSTOMIZATION,
            },
            [eV.s6.PROFILE_USER_PROFILE]: {
                section: eY.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ez.intl.string(ez.t["2p07FR"]), ez.intl.string(ez.t["7vhiqq"])],
                parent: eV.s6.PROFILE_CUSTOMIZATION,
            },
            [eV.s6.PROFILE_SERVER_PROFILES]: {
                section: eY.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ez.intl.string(ez.t.kPHroa)],
                parent: eV.s6.PROFILE_CUSTOMIZATION,
            },
            [eV.s6.CONTENT_SOCIAL]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                label: ez.intl.string(ez.t["+o1pDQ"]),
                searchableTitles: [ez.intl.string(ez.t["+o1pDQ"])],
                ariaLabel: ez.intl.string(ez.t["+o1pDQ"]),
                element: e_.Z,
                url: eY.Z5c.SETTINGS("content-and-social"),
            },
            [eV.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t["+o1pDQ"]), ez.intl.string(ez.t["/7xJCA"])],
                parent: eV.s6.CONTENT_SOCIAL,
            },
            [eV.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t["+o1pDQ"]), ez.intl.string(ez.t["/7xJCA"])],
                parent: eV.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eV.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.YpCiMj)],
                parent: eV.s6.CONTENT_SOCIAL,
            },
            [eV.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                label: ez.intl.string(ez.t.YpCiMj),
                searchableTitles: [ez.intl.string(ez.t.YpCiMj)],
                ariaLabel: ez.intl.string(ez.t.YpCiMj),
                parent: eV.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eY.Z5c.SETTINGS(eY.oAB.CONTENT_AND_SOCIAL, eH.C),
            },
            [eV.s6.DATA_PRIVACY]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                label: ez.intl.string(ez.t.OAuOHB),
                searchableTitles: [ez.intl.string(ez.t.OAuOHB)],
                ariaLabel: ez.intl.string(ez.t.OAuOHB),
                element: ep.Z,
                url: eY.Z5c.SETTINGS("data-and-privacy"),
            },
            [eV.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eY.oAB.ACCOUNT,
                searchableTitles: [ez.intl.string(ez.t["Vov/9v"])],
                parent: eV.s6.ACCOUNT,
            },
            [eV.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.WWaFn5)],
                parent: eV.s6.DATA_PRIVACY,
                predicate: () => (0, q.isDesktop)(),
            },
            [eV.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t["opi/XF"])],
                parent: eV.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.xVRG4O)],
                parent: eV.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eV.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.fyA119)],
                parent: eV.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eV.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.fyA119)],
                parent: eV.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eV.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t["/U8Iwc"])],
                parent: eV.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eV.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t["ms+TmZ"])],
                parent: eV.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eV.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t["y62Z/f"])],
                parent: eV.s6.CONTENT_SOCIAL,
            },
            [eV.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.SRZyHh)],
                parent: eV.s6.DATA_PRIVACY,
            },
            [eV.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ez.intl.string(ez.t.uEz8JC),
                    ez.intl.string(ez.t["N/oRIy"]),
                    ez.intl.string(ez.t.QVdYsL),
                    ez.intl.string(ez.t["aWD+tr"]),
                    ez.intl.string(ez.t["5mnTa2"]),
                ],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eV.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ez.intl.string(ez.t["Hj/Bur"]),
                    ez.intl.string(ez.t["N/oRIy"]),
                    ez.intl.string(ez.t.QVdYsL),
                    ez.intl.string(ez.t["aWD+tr"]),
                    ez.intl.string(ez.t["5mnTa2"]),
                    ez.intl.string(ez.t.K0OWPz),
                ],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eV.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ez.intl.string(ez.t["Hj/Bur"]),
                    ez.intl.string(ez.t["N/oRIy"]),
                    ez.intl.string(ez.t.QVdYsL),
                    ez.intl.string(ez.t["aWD+tr"]),
                    ez.intl.string(ez.t["5mnTa2"]),
                ],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eV.s6.GORE_MEDIA_REDACTION]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ez.intl.string(ez.t["Hj/Bur"]),
                    ez.intl.string(ez.t["N/oRIy"]),
                    ez.intl.string(ez.t.QVdYsL),
                    ez.intl.string(ez.t["aWD+tr"]),
                    ez.intl.string(ez.t.K0OWPz),
                ],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eV.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ez.intl.string(ez.t.JzaP4u),
                    ez.intl.string(ez.t.H9XOl5),
                    ez.intl.string(ez.t.k4W40N),
                ],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eV.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t["L+yTsb"])],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eV.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.XahVjo)],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eV.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                parent: eV.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eV.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.RAQUSE), ez.intl.string(ez.t.wbYDfX)],
                parent: eV.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eV.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t["3o2ojo"])],
                parent: eV.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !tr,
            },
            [eV.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.OLwZDQ)],
                parent: eV.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eV.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.wBkwu7)],
                parent: eV.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eV.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.XuADY2)],
                parent: eV.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eV.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.MNKzys)],
                parent: eV.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eV.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.VkS7YW), ez.intl.string(ez.t.sJYh5u)],
                parent: eV.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eV.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.CyLYKS)],
                parent: eV.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                predicate: () => tm,
            },
            [eV.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eV.CF],
                parent: eV.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eV.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.dmBSKi)],
                parent: eV.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eV.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t["1UaUy8"]), ez.intl.string(ez.t["xIk/iI"])],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e5,
            },
            [eV.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ez.intl.string(ez.t.qFsx5u)],
                parent: eV.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => e9 && !ts && !te,
            },
            [eV.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t["5b3FND"])],
                parent: eV.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => tl,
            },
            [eV.s6.PRIVACY_FAMILY_CENTER]: {
                section: eY.oAB.FAMILY_CENTER,
                searchableTitles: [ez.intl.string(eX.default.gntCQU)],
                label: ez.intl.string(eX.default.gntCQU),
                ariaLabel: ez.intl.string(eX.default.gntCQU),
                element: eg.Z,
                badgeCount: A,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: ez.intl.string(ez.t.y2b7CA),
                    color: I.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eY.Z5c.SETTINGS("family-center"),
            },
            [eV.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eY.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.BG7Qsb)],
                parent: eV.s6.DATA_PRIVACY,
            },
            [eV.s6.AUTHORIZED_APPS]: {
                section: eY.oAB.AUTHORIZED_APPS,
                searchableTitles: [ez.intl.string(ez.t["f6kk+v"])],
                label: ez.intl.string(ez.t["f6kk+v"]),
                element: eu.Z,
                url: eY.Z5c.SETTINGS("authorized-apps"),
            },
            [eV.s6.SESSIONS]: {
                section: eY.oAB.SESSIONS,
                searchableTitles: [ez.intl.string(ez.t["+1h0k5"])],
                label: ez.intl.string(ez.t["+1h0k5"]),
                ariaLabel: ez.intl.string(ez.t["+1h0k5"]),
                element: eC.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == S ? void 0 : S.source },
            },
            [eV.s6.CONNECTIONS]: {
                section: eY.oAB.CONNECTIONS,
                searchableTitles: [ez.intl.string(ez.t["3fe7U1"])],
                label: ez.intl.string(ez.t["3fe7U1"]),
                ariaLabel: ez.intl.string(ez.t["3fe7U1"]),
                element: ef.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == S ? void 0 : S.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eY.Z5c.SETTINGS("connections"),
            },
            [eV.s6.THIRD_PARTY_ACCESS]: {
                section: eY.oAB.CONNECTIONS,
                searchableTitles: [
                    ez.intl.string(ez.t["Ig/XFR"]),
                    ez.intl.string(ez.t["3fe7U1"]),
                    ez.intl.string(ez.t["f6kk+v"]),
                ],
                label: ez.intl.string(ez.t["Ig/XFR"]),
                parent: eV.s6.CONNECTIONS,
                element: ew.Z,
            },
            [eV.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eY.oAB.CONNECTIONS,
                searchableTitles: [ez.intl.string(ez.t["+/hZMz"])],
                parent: eV.s6.CONNECTIONS,
                element: ef.Z,
            },
            [eV.s6.CLIPS]: {
                section: eY.oAB.CLIPS,
                searchableTitles: [ez.intl.string(ez.t.z2jK6e)],
                label: ez.intl.string(ez.t.z2jK6e),
                ariaLabel: ez.intl.string(ez.t.z2jK6e),
                icon: eJ ? (0, r.jsx)(b.Z, {}) : void 0,
                element: y.Z,
                predicate: () => !e0,
                url: eY.Z5c.SETTINGS("clips"),
            },
            [eV.s6.RESTRICTED_USERS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                parent: eV.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: ez.intl.string(ez.t["3wRorq"]),
                element: eU.ZP,
                predicate: () => tu || td,
            },
            [eV.s6.BLOCKED_USERS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                parent: eV.s6.RESTRICTED_USERS,
                label: ez.intl.string(ez.t.PFOUKS),
                searchableTitles: [ez.intl.string(ez.t.PFOUKS)],
                element: eU.GF,
                predicate: () => td,
            },
            [eV.s6.IGNORED_USERS]: {
                section: eY.oAB.CONTENT_AND_SOCIAL,
                parent: eV.s6.RESTRICTED_USERS,
                searchableTitles: [ez.intl.string(ez.t["93ZDWF"])],
                label: ez.intl.string(ez.t["93ZDWF"]),
                element: eU.yo,
                predicate: () => tu,
            },
            [eV.s6.PREMIUM]: {
                section: eY.oAB.PREMIUM,
                ariaLabel: ez.intl.string(ez.t.Ipxkoq),
                searchableTitles: [ez.intl.string(ez.t.Ipxkoq)],
                label: ez.intl.string(ez.t.Ipxkoq),
                element: en.Z,
                className: eQ.premiumTab,
            },
            [eV.s6.GUILD_BOOSTING]: {
                section: eY.oAB.GUILD_BOOSTING,
                searchableTitles: [ez.intl.string(ez.t["+CbP2t"])],
                label: ez.intl.string(ez.t["+CbP2t"]),
                element: eS.Z,
            },
            [eV.s6.SUBSCRIPTIONS]: {
                section: eY.oAB.SUBSCRIPTIONS,
                ariaLabel: ez.intl.string(ez.t.trSpHR),
                searchableTitles: [ez.intl.string(ez.t.trSpHR)],
                label: ez.intl.string(ez.t.trSpHR),
                element: D.Z,
                icon: E
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eV.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eY.oAB.SUBSCRIPTIONS,
                searchableTitles: [ez.intl.string(ez.t["2GKrvr"])],
                parent: eV.s6.SUBSCRIPTIONS,
            },
            [eV.s6.GIFT_INVENTORY]: {
                section: eY.oAB.INVENTORY,
                searchableTitles: [ez.intl.string(ez.t["jcSP+v"])],
                label: ez.intl.string(ez.t["jcSP+v"]),
                element: ey.Z,
                ariaLabel: ez.intl.string(ez.t["jcSP+v"]),
                badgeCount: t,
            },
            [eV.s6.GIFT_CODE_REDEMPTION]: {
                section: eY.oAB.INVENTORY,
                searchableTitles: [ez.intl.string(ez.t["il+VCg"])],
                parent: eV.s6.GIFT_INVENTORY,
                predicate: () => !tt,
            },
            [eV.s6.GIFT_INVENTORY_QUESTS]: {
                section: eY.oAB.INVENTORY,
                searchableTitles: [ez.intl.string(ez.t.JALI2N)],
                parent: eV.s6.GIFT_INVENTORY,
                predicate: () => tn,
            },
            [eV.s6.GIFT_INVENTORY_LIST]: {
                section: eY.oAB.INVENTORY,
                searchableTitles: [ez.intl.string(ez.t["9KeUbW"])],
                parent: eV.s6.GIFT_INVENTORY,
                predicate: () => !tt,
            },
            [eV.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eY.oAB.INVENTORY,
                searchableTitles: [ez.intl.string(ez.t.vwMEHR)],
                parent: eV.s6.GIFT_INVENTORY,
                predicate: () => tt,
            },
            [eV.s6.BILLING]: {
                section: eY.oAB.BILLING,
                searchableTitles: [ez.intl.string(ez.t.oeUm2t)],
                label: ez.intl.string(ez.t.oeUm2t),
                ariaLabel: ez.intl.string(ez.t.oeUm2t),
                element: ed.Z,
            },
            [eV.s6.BILLING_PAYMENT_METHODS]: {
                section: eY.oAB.BILLING,
                searchableTitles: [ez.intl.string(ez.t.W26xGR)],
                parent: eV.s6.BILLING,
            },
            [eV.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eY.oAB.BILLING,
                searchableTitles: [ez.intl.string(ez.t.obLrcH)],
                parent: eV.s6.BILLING,
            },
            [eV.s6.APPEARANCE]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [ez.intl.string(ez.t["iHH+k5"])],
                label: ez.intl.string(ez.t["iHH+k5"]),
                ariaLabel: ez.intl.string(ez.t["iHH+k5"]),
                element: ec.Z,
                newIndicator: (0, r.jsx)(e3, {}),
                newIndicatorDismissibleContentTypes: e2(),
                url: eY.Z5c.SETTINGS("appearance"),
            },
            [eV.s6.APPEARANCE_THEME]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [ez.intl.string(ez.t.Ksh3io)],
                parent: eV.s6.APPEARANCE,
            },
            [eV.s6.APPEARANCE_COLOR]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [ez.intl.string(ez.t.OCOOiI)],
                parent: eV.s6.APPEARANCE_THEME,
            },
            [eV.s6.APPEARANCE_ICON]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [ez.intl.string(ez.t.RPh2oq)],
                parent: eV.s6.APPEARANCE_THEME,
            },
            [eV.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [ez.intl.string(ez.t.ZEoGMT)],
                parent: eV.s6.APPEARANCE,
            },
            [eV.s6.APPEARANCE_LIST_SPACING]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eV.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: ez.intl.string(ez.t.y2b7CA),
                    color: I.Z.BG_BRAND,
                }),
            },
            [eV.s6.APPEARANCE_SCALING_SPACING]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [ez.intl.string(ez.t.qPOqoK)],
                parent: eV.s6.APPEARANCE,
            },
            [eV.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eY.oAB.APPEARANCE,
                searchableTitles: [
                    ez.intl.string(ez.t.dyamEB),
                    ez.intl.string(ez.t.p8NOws),
                    ez.intl.string(ez.t["+o/sOj"]),
                ],
                parent: eV.s6.APPEARANCE,
                predicate: () =>
                    G.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eV.s6.ACCESSIBILITY]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.G0neg4)],
                label: ez.intl.string(ez.t.G0neg4),
                ariaLabel: ez.intl.string(ez.t.G0neg4),
                element: ea.Z,
                url: eY.Z5c.SETTINGS("accessibility"),
            },
            [eV.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.aZlePj)],
                parent: eV.s6.ACCESSIBILITY,
            },
            [eV.s6.ACCESSIBILITY_SATURATION]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t["5PWWCQ"])],
                parent: eV.s6.ACCESSIBILITY,
            },
            [eV.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.bQCodH)],
                parent: eV.s6.ACCESSIBILITY_SATURATION,
            },
            [eV.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.OLZFBw)],
                parent: eV.s6.ACCESSIBILITY,
            },
            [eV.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t["+IsihY"])],
                parent: eV.s6.ACCESSIBILITY,
                predicate: () => (0, O.l)("SettingsRendererConfig"),
            },
            [eV.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.uSOPWl)],
                parent: eV.s6.ACCESSIBILITY,
            },
            [eV.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(eq.default["2gFUEx"])],
                parent: eV.s6.ACCESSIBILITY,
            },
            [eV.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.BT8Bmp)],
                parent: eV.s6.ACCESSIBILITY,
            },
            [eV.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t["sSY+mJ"])],
                parent: eV.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eV.s6.ACCESSIBILITY_CONTRAST]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.TYyfOz)],
                parent: eV.s6.ACCESSIBILITY,
            },
            [eV.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.cguieX)],
                parent: eV.s6.ACCESSIBILITY_CONTRAST,
            },
            [eV.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.e3TR1d)],
                parent: eV.s6.ACCESSIBILITY,
            },
            [eV.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.b3XBzs)],
                parent: eV.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eV.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.Iayoh4)],
                parent: eV.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eV.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.iIaOlZ)],
                parent: eV.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eV.s6.ACCESSIBILITY_STICKERS]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t["6NtAuL"])],
                parent: eV.s6.ACCESSIBILITY,
            },
            [eV.s6.ACCESSIBILITY_MESSAGES]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.onqU6u)],
                parent: eV.s6.ACCESSIBILITY,
            },
            [eV.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t["3Fztn5"])],
                parent: eV.s6.ACCESSIBILITY_MESSAGES,
            },
            [eV.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.TZ2hZG)],
                parent: eV.s6.ACCESSIBILITY_MESSAGES,
            },
            [eV.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.VpSKeH)],
                parent: eV.s6.ACCESSIBILITY,
            },
            [eV.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.qvTIwc)],
                parent: eV.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eV.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [ez.intl.string(ez.t.lsW5Eh)],
                parent: eV.s6.ACCESSIBILITY,
            },
            [eV.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eY.oAB.ACCESSIBILITY,
                searchableTitles: [eV.CF],
                parent: eV.s6.ACCESSIBILITY,
            },
            [eV.s6.VOICE_AND_VIDEO]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.B1fFpa)],
                label: ez.intl.string(ez.t.B1fFpa),
                ariaLabel: ez.intl.string(ez.t.B1fFpa),
                element: eG.Z,
                predicate: () => H.Z.isSupported(),
                url: eY.Z5c.SETTINGS("voice"),
            },
            [eV.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.K3lovL), ez.intl.string(ez.t.NiTd0d)],
                parent: eV.s6.VOICE_AND_VIDEO,
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.FlNoSU)],
                parent: eV.s6.VOICE_AND_VIDEO,
            },
            [eV.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.ABjMWF)],
                parent: eV.s6.VOICE_AND_VIDEO,
            },
            [eV.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.OFpL3d)],
                parent: eV.s6.VOICE_AND_VIDEO,
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.KDdjoq), ez.intl.string(ez.t.FeUKeH)],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eV.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.K3lovL), ez.intl.string(ez.t.NiTd0d)],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eV.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eY.oAB.VOICE,
                searchableTitles: [
                    ez.intl.string(ez.t.hHMYbW),
                    ez.intl.string(ez.t.dl18zc),
                    ez.intl.string(ez.t.nuFtHB),
                    ez.intl.string(ez.t["3182VF"]),
                    ez.intl.string(ez.t["DGq/PT"]),
                ],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eV.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [
                    ez.intl.string(ez.t.OX2Bnp),
                    ez.intl.string(ez.t.eATD2N),
                    ez.intl.string(ez.t.nuFtHB),
                    ez.intl.string(ez.t["3182VF"]),
                    ez.intl.string(ez.t["DGq/PT"]),
                ],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eV.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.gyljWF), ez.intl.string(ez.t.nuFtHB)],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eV.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eY.oAB.VOICE,
                searchableTitles: [
                    ez.intl.string(ez.t.LM3U3t),
                    ez.intl.string(ez.t.nuFtHB),
                    ez.intl.string(ez.t.VZPR0d),
                    ez.intl.string(ez.t.cjPbpa),
                ],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, ee.R)({
                        location: "SettingsRendererConfig",
                        autoTrackExposure: !1,
                    });
                    return e.length > 0;
                },
            },
            [eV.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["pS+K2N"]), ez.intl.string(ez.t.nuFtHB)],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => tp !== eF._.STUDIO,
            },
            [eV.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["sqUm+v"]), ez.intl.string(ez.t.nuFtHB)],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => t_ === eK.pM.VOICE_ACTIVITY && th,
            },
            [eV.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.e7LIiY)],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eV.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.nzUc3N)],
                parent: eV.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eV.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.ABjMWF)],
                parent: eV.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eV.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.nzUc3N)],
                parent: eV.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.LKzQSE)],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.F122Gx)],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => H.Z.supports(eK.AN.VIDEO),
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["3Ppr1t"])],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.lZTUPj)],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => H.Z.supports(eK.AN.VIDEO),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["8/udY2"])],
                parent: eV.s6.VOICE_AND_VIDEO,
            },
            [eV.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["8/udY2"])],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => !(0, q.isWeb)(),
            },
            [eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["8/udY2"])],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.Tceiq6)],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED,
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["71Ve19"])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => H.Z.supports(eK.AN.OPEN_H264),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.Sln58f)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.AxnPm5)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => "stable" !== X.ZP.releaseChannel && H.Z.isExperimentalEncodersSupported(),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["6I6GUl"])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => th,
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.iWTwu7)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["/jwMtr"])],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eV.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.OBwCXF)],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.t8QhiY), ez.intl.string(ez.t.hmfkCg)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => H.Z.isNoiseSuppressionSupported(),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.BbESsr)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => H.Z.isAdvancedVoiceActivitySupported(),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.cUMdHx)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => H.Z.isAutomaticGainControlSupported(),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.DFPXIC)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => H.Z.showBypassSystemInputProcessing(),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.uancuL)],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => H.Z.supports(eK.AN.QOS),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.oSdBvb)],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => H.Z.supports(eK.AN.ATTENUATION),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.wVBHr6)],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => H.Z.shouldOfferManualSubsystemSelection(),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eY.oAB.VOICE,
                searchableTitles: [
                    ez.intl.string(ez.t.KDdjoq),
                    ez.intl.string(ez.t.NMCIf3),
                    ez.intl.string(ez.t.FeUKeH),
                ],
                parent: eV.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    H.Z.supportsVideoHook() ||
                    H.Z.supportsExperimentalSoundshare() ||
                    (H.Z.supportsSystemScreensharePicker() && (0, q.isMac)()),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.GmWk2N), ez.intl.string(ez.t["Fj/xn5"])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => H.Z.supportsVideoHook(),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["4I0qzc"])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => H.Z.supportsExperimentalSoundshare() && H.Z.supportsHookSoundshare(),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.ie1mgY)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => H.Z.supportsSystemScreensharePicker() && (0, q.isMac)(),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["aP1N/v"])],
                parent: eV.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => q.isPlatformEmbedded,
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.OFpL3d)],
                parent: eV.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["0CEP6e"])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => Q.Sb.getSetting(),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["r6K+TE"])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => H.Z.isAecDumpSupported(),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t.U4FgFB)],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === X.ZP.releaseChannel || "development" === X.ZP.releaseChannel) &&
                    e7 &&
                    H.Z.supports(eK.AN.CONNECTION_REPLAY),
            },
            [eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["726JHB"])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    q.isPlatformEmbedded && H.Z.supports(eK.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [eV.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eY.oAB.VOICE,
                searchableTitles: [ez.intl.string(ez.t["/RXu6+"])],
                parent: eV.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eV.s6.POGGERMODE]: {
                section: eY.oAB.POGGERMODE,
                searchableTitles: [ez.intl.string(ez.t.AtCukJ)],
                label: ez.intl.string(ez.t.AtCukJ),
                ariaLabel: ez.intl.string(ez.t.AtCukJ),
                element: w.Z,
                predicate: () => P.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: eQ.poggermodeIcon,
                }),
            },
            [eV.s6.CHAT]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t["/VQax8"])],
                label: ez.intl.string(ez.t["/VQax8"]),
                ariaLabel: ez.intl.string(ez.t["/VQax8"]),
                element: eR.Z,
                url: eY.Z5c.SETTINGS("chat"),
            },
            [eV.s6.CHAT_INLINE_MEDIA]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.U68Dgo)],
                parent: eV.s6.CHAT,
            },
            [eV.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.U47N1t)],
                parent: eV.s6.CHAT_INLINE_MEDIA,
            },
            [eV.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.VP11Nj)],
                parent: eV.s6.CHAT_INLINE_MEDIA,
            },
            [eV.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t["5S2AKy"])],
                parent: eV.s6.CHAT_INLINE_MEDIA,
            },
            [eV.s6.CHAT_EMBEDS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.PWZOn5)],
                parent: eV.s6.CHAT,
            },
            [eV.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.xX0ZTE)],
                parent: eV.s6.CHAT_EMBEDS,
            },
            [eV.s6.CHAT_EMOJI]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.sMOuub)],
                parent: eV.s6.CHAT,
            },
            [eV.s6.CHAT_EMOJI_REACTIONS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.Iv24sr)],
                parent: eV.s6.CHAT_EMOJI,
            },
            [eV.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t["79qal5"])],
                parent: eV.s6.CHAT_EMOJI,
            },
            [eV.s6.CHAT_STICKERS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t["6NtAuL"])],
                parent: eV.s6.CHAT,
            },
            [eV.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t["29xPVV"])],
                parent: eV.s6.CHAT_STICKERS,
            },
            [eV.s6.CHAT_SOUNDMOJI]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.EHlAMT)],
                parent: eV.s6.CHAT,
            },
            [eV.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t["CtYr+f"])],
                parent: eV.s6.CHAT_SOUNDMOJI,
            },
            [eV.s6.CHAT_TEXT_BOX]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.afR0pK)],
                parent: eV.s6.CHAT,
            },
            [eV.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.AqGrEB)],
                parent: eV.s6.CHAT_TEXT_BOX,
            },
            [eV.s6.CHAT_THREADS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.B2panJ)],
                parent: eV.s6.CHAT,
            },
            [eV.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.AInv5u)],
                parent: eV.s6.CHAT_THREADS,
            },
            [eV.s6.CHAT_SPOILERS]: {
                section: eY.oAB.TEXT,
                searchableTitles: [ez.intl.string(ez.t.QgwmV1)],
                parent: eV.s6.CHAT,
            },
            [eV.s6.NOTIFICATIONS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.HcoRu7)],
                label: ez.intl.string(ez.t.HcoRu7),
                ariaLabel: ez.intl.string(ez.t.HcoRu7),
                element: eI.Z,
                url: eY.Z5c.SETTINGS("notifications"),
            },
            [eV.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t["/0WClp"])],
                parent: eV.s6.NOTIFICATIONS,
            },
            [eV.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eV.s6.NOTIFICATIONS,
            },
            [eV.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.VH8AIC)],
                parent: eV.s6.NOTIFICATIONS,
            },
            [eV.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.xSmFQE)],
                parent: eV.s6.NOTIFICATIONS,
                predicate: () => (0, q.isWindows)(),
            },
            [eV.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.z21l8P)],
                parent: eV.s6.NOTIFICATIONS,
            },
            [eV.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: ["New Notification Settings (Advanced, Staff Only)"],
                parent: eV.s6.NOTIFICATIONS,
                predicate: () => !1,
            },
            [eV.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: ["Restore most recent snapshot"],
                parent: eV.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eV.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: ["Launch Migration"],
                parent: eV.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eV.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: ["Toggle new system on/off"],
                parent: eV.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eV.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.TTvjd3)],
                parent: eV.s6.NOTIFICATIONS,
            },
            [eV.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.VpSKeH)],
                parent: eV.s6.NOTIFICATIONS,
            },
            [eV.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.D9yVAA)],
                parent: eV.s6.NOTIFICATIONS,
            },
            [eV.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.u6dc5O)],
                parent: eV.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eV.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.P8MG6u)],
                parent: eV.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eV.s6.NOTIFICATIONS_SOUNDS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.MKWyKS)],
                parent: eV.s6.NOTIFICATIONS,
            },
            [eV.s6.NOTIFICATIONS_EMAILS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.TPchzM)],
                parent: eV.s6.NOTIFICATIONS,
            },
            [eV.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t["B75+xc"])],
                parent: eV.s6.NOTIFICATIONS_EMAILS,
            },
            [eV.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.sxn7lZ)],
                parent: eV.s6.NOTIFICATIONS_EMAILS,
            },
            [eV.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.EkxXhY)],
                parent: eV.s6.NOTIFICATIONS_EMAILS,
            },
            [eV.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.jNrkrK)],
                parent: eV.s6.NOTIFICATIONS_EMAILS,
            },
            [eV.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.E8g1l5)],
                parent: eV.s6.NOTIFICATIONS_EMAILS,
            },
            [eV.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.Ra9Pws)],
                parent: eV.s6.NOTIFICATIONS_EMAILS,
            },
            [eV.s6.NOTIFICATIONS_REACTIONS]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.Rq0NFh)],
                parent: eV.s6.NOTIFICATIONS,
            },
            [eV.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.wtk08f)],
                parent: eV.s6.NOTIFICATIONS,
                predicate: () => (0, Z.JN)("SettingsRendererConfig"),
            },
            [eV.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eY.oAB.NOTIFICATIONS,
                searchableTitles: [ez.intl.string(ez.t.pW4TMj)],
                parent: eV.s6.NOTIFICATIONS,
            },
            [eV.s6.KEYBINDS]: {
                section: eY.oAB.KEYBINDS,
                searchableTitles: [ez.intl.string(ez.t.T9DA2N)],
                label: ez.intl.string(ez.t.T9DA2N),
                element: eO.Z,
                url: eY.Z5c.SETTINGS("keybinds"),
            },
            [eV.s6.LANGUAGE]: {
                section: eY.oAB.LOCALE,
                searchableTitles: [ez.intl.string(ez.t.IHMsPj)],
                label: ez.intl.string(ez.t.IHMsPj),
                element: ev.Z,
                url: eY.Z5c.SETTINGS("language"),
            },
            [eV.s6.WINDOW_SETTINGS]: {
                section: eY.oAB.WINDOWS,
                searchableTitles: [ez.intl.string(ez.t.ZkDZoq)],
                label: ez.intl.string(ez.t.ZkDZoq),
                element: eD.Z,
                predicate: () => q.isPlatformEmbedded && (0, q.isWindows)(),
            },
            [eV.s6.LINUX_SETTINGS]: {
                section: eY.oAB.LINUX,
                searchableTitles: [ez.intl.string(ez.t["7pPjTU"])],
                label: ez.intl.string(ez.t["7pPjTU"]),
                element: e6,
                predicate: () => q.isPlatformEmbedded && (0, q.isLinux)(),
            },
            [eV.s6.STREAMER_MODE]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [ez.intl.string(ez.t.S5GfOT)],
                label: ez.intl.string(ez.t.S5GfOT),
                ariaLabel: ez.intl.string(ez.t.S5GfOT),
                element: eN.Z,
                url: eY.Z5c.SETTINGS("streamer-mode"),
            },
            [eV.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [ez.intl.string(ez.t.bxGbHB)],
                parent: eV.s6.STREAMER_MODE,
            },
            [eV.s6.STREAMER_MODE_ENABLE]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [ez.intl.string(ez.t.p9ZAJS)],
                parent: eV.s6.STREAMER_MODE,
            },
            [eV.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [ez.intl.string(ez.t.UpQziI)],
                parent: eV.s6.STREAMER_MODE,
            },
            [eV.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [ez.intl.string(ez.t.q7WNGh)],
                parent: eV.s6.STREAMER_MODE,
            },
            [eV.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [ez.intl.string(ez.t["1CWknJ"])],
                parent: eV.s6.STREAMER_MODE,
            },
            [eV.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [ez.intl.string(ez.t.qmYiYW)],
                parent: eV.s6.STREAMER_MODE,
            },
            [eV.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eY.oAB.STREAMER_MODE,
                searchableTitles: [ez.intl.string(ez.t["iA81+f"])],
                parent: eV.s6.STREAMER_MODE,
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
            [eV.s6.SETTINGS_ADVANCED]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [ez.intl.string(ez.t["8/udY2"])],
                label: ez.intl.string(ez.t["8/udY2"]),
                ariaLabel: ez.intl.string(ez.t["8/udY2"]),
                element: el.ZP,
            },
            [eV.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [ez.intl.string(ez.t.ObIb1d)],
                parent: eV.s6.SETTINGS_ADVANCED,
                predicate: () => K.wS,
            },
            [eV.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [ez.intl.string(ez.t["eOC/Fx"])],
                parent: eV.s6.SETTINGS_ADVANCED,
                predicate: () => q.isPlatformEmbedded,
            },
            [eV.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [ez.intl.string(ez.t.fi3UQE)],
                parent: eV.s6.SETTINGS_ADVANCED,
                predicate: () => ti,
            },
            [eV.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [ez.intl.string(ez.t.erOqlp)],
                parent: eV.s6.SETTINGS_ADVANCED,
                predicate: () => to,
            },
            [eV.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: [ez.intl.string(ez.t.qDZryM)],
                parent: eV.s6.SETTINGS_ADVANCED,
            },
            [eV.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eY.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: eV.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    m.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [eV.s6.ACTIVITY_PRIVACY]: {
                section: eY.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.Cq98yM)],
                label: ez.intl.string(ez.t.Cq98yM),
                ariaLabel: ez.intl.string(ez.t.Cq98yM),
                element: es.Z,
                predicate: () => !e0,
                url: eY.Z5c.SETTINGS("activity-privacy"),
            },
            [eV.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: e0 ? eY.oAB.GAMES : eY.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t["8ka8lp"])],
                parent: e0 ? eV.s6.GAMES_ACTIVITY_PRIVACY : eV.s6.ACTIVITY_PRIVACY,
            },
            [eV.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: e0 ? eY.oAB.GAMES : eY.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t.VOszPD)],
                parent: e0 ? eV.s6.GAMES_ACTIVITY_PRIVACY : eV.s6.ACTIVITY_PRIVACY,
            },
            [eV.s6.ACTIVITY_PRIVACY_TOS]: {
                section: e0 ? eY.oAB.GAMES : eY.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eV.CF],
                parent: e0 ? eV.s6.GAMES_ACTIVITY_PRIVACY : eV.s6.ACTIVITY_PRIVACY,
            },
            [eV.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eY.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ez.intl.string(ez.t["4F2KoK"])],
                parent: eV.s6.ACTIVITY_PRIVACY,
            },
            [eV.s6.REGISTERED_GAMES]: {
                section: eY.oAB.REGISTERED_GAMES,
                searchableTitles: [ez.intl.string(ez.t.AVDyEh)],
                label: ez.intl.string(ez.t.AVDyEh),
                element: eE.Z,
                predicate: () => !e0 && (0, eM.Jw)(),
            },
            [eV.s6.OVERLAY]: {
                section: eY.oAB.OVERLAY,
                searchableTitles: [ez.intl.string(ez.t["9cb1U1"]), ez.intl.string(ez.t.HcoRu7)],
                label: ez.intl.string(ez.t["9cb1U1"]),
                element: eT.Z,
                predicate: () => !e0 && B,
            },
            [eV.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, g.Z)(!0),
                searchableTitles: [ez.intl.string(ez.t.LRmNAg)],
                label: ez.intl.string(ez.t.LRmNAg),
            },
            [eV.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    W.default.track(eY.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, z.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                W.default.track(eY.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, p.Z)(e);
                            },
                        });
                },
                searchableTitles: [ez.intl.string(ez.t.sMEktb)],
                label: ez.intl.string(ez.t.sMEktb),
                ariaLabel: ez.intl.string(ez.t.sMEktb),
            },
            [eV.s6.HYPESQUAD]: {
                section: eY.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [ez.intl.string(ez.t["k0R+4e"])],
                label: ez.intl.string(ez.t["k0R+4e"]),
                element: eb.Z,
                predicate: () => !tc,
            },
            [eV.s6.TOWNHALL]: {
                section: eY.oAB.TOWNHALL,
                searchableTitles: [ez.intl.string(ez.t.dnZNER)],
                label: ez.intl.string(ez.t.dnZNER),
                predicate: () => tc,
                onClick: () => {
                    (0, p.Z)("https://discord.gg/discord-townhall"), (0, ex.Z)();
                },
            },
            [eV.s6.EXPERIMENTS]: {
                section: eY.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: eL.Z,
                predicate: () => F.Z.isDeveloper,
                url: eY.Z5c.SETTINGS("experiments"),
            },
            [eV.s6.DEVELOPER_OPTIONS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: em.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eV.s6.DEVELOPER_OPTIONS,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eV.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eV.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eV.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e7 && F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eV.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e7 && F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eV.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eV.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e7 && F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Toggleable Components"],
                parent: eV.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e7 && F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eV.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e7 && F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eV.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => e7 && F.Z.isDeveloper && V.default.layoutDebuggingEnabled,
            },
            [eV.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e7 && F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => e7 && F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eV.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eV.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eV.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eV.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eV.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => h.q && F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eV.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eV.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eV.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eV.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eY.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eV.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.HOTSPOT_OPTIONS]: {
                section: eY.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ["Hotspot Options"],
                label: "Hotspot Options",
                element: $.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eY.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ["Dismissible Contents"],
                label: "Dismissible Contents",
                element: T.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.PAYMENT_FLOW_MODALS]: {
                section: eY.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ["Payment Flow Modals"],
                label: "Payment Flow Modals",
                element: et.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.REVENUE_STORYBOOK]: {
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
            [eV.s6.VIRTUAL_CURRENCY_CONFIGURATION]: {
                section: eY.oAB.VIRTUAL_CURRENCY_CONFIGURATION_PAGE,
                searchableTitles: ["Virtual Currency", "Orb", "Config"],
                label: "Virtual Currency Config",
                element: eZ.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.PAYMENT_COMPONENTS]: {
                section: eY.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Payment Components"],
                label: "Payment Components",
                element: eB.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.ORB_COMPONENTS]: {
                section: eY.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Orb Components"],
                label: "Orb Components",
                element: eB.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.NITRO_COMPONENTS]: {
                section: eY.oAB.REVENUE_STORYBOOK_PAGE,
                searchableTitles: ["Nitro Components"],
                label: "Nitro Components",
                element: eB.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.TEXT_PLAYGROUND]: {
                section: eY.oAB.TEXT_PLAYGROUND,
                searchableTitles: ["Text Playground"],
                label: "Text Playground",
                element: eP.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DESIGN_SYSTEMS]: {
                section: eY.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Design Systems"],
                label: "Design Systems",
                element: eh.Z,
                predicate: () => F.Z.isDeveloper,
                url: eY.Z5c.SETTINGS("design-systems"),
            },
            [eV.s6.DESIGN_SYSTEMS_COLORS]: {
                section: eY.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Colors"],
                label: "Colors",
                element: eh.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.ANIMATION_TESTING]: {
                section: eY.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Animation Testing"],
                label: "Animation Testing",
                element: eh.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.DESIGN_SYSTEMS_COMPONENTS]: {
                section: eY.oAB.DESIGN_SYSTEMS,
                searchableTitles: ["Components"],
                label: "Components",
                element: eh.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.TEXT_COMPONENTS]: {
                section: eY.oAB.TEXT_COMPONENT,
                searchableTitles: ["Text Components"],
                label: "Text Components",
                element: ei.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.INTL_TESTING]: {
                section: eY.oAB.INTL_TESTING,
                searchableTitles: ["Intl Testing", "i18n"],
                label: "Intl Testing",
                element: R.Z,
                predicate: () => e7 || F.Z.isDeveloper,
            },
            [eV.s6.SHOP_KEEPER]: {
                section: eY.oAB.SHOP_KEEPER,
                searchableTitles: ["Shop Keeper"],
                label: "Shop Keeper",
                element: v.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.QUEST_PREVIEW_TOOL]: {
                section: eY.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ["Quest Preview Tool"],
                label: "Quest Preview Tool",
                element: k.Z,
                predicate: () => (0, j.X)({ location: eW.dr.QUEST_PREVIEW_TOOL }),
            },
            [eV.s6.QUEST_PREVIEW_TOOL_2]: {
                section: eY.oAB.QUEST_PREVIEW_TOOL_2,
                searchableTitles: ["Quest Preview Tool 2"],
                label: "Quest Preview Tool 2",
                element: () => (0, r.jsx)(U.Z, { questId: null == S ? void 0 : S.quest_id }),
                predicate: () => (0, j.T)({ location: eW.dr.QUEST_PREVIEW_TOOL_2 }),
            },
            [eV.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG]: {
                section: eY.oAB.QUEST_MINOR_REWARD_CAPPING_CONFIG,
                searchableTitles: ["Minor Reward Capping Config"],
                label: "Minor Reward Capping Config",
                element: M.Z,
                predicate: () => e7,
            },
            [eV.s6.WEB_SETTING_TREE_TOOL]: {
                section: eY.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ["Web Setting Tree Tool"],
                label: "Web Setting Tree Tool",
                element: ej.Z,
                predicate: () => F.Z.isDeveloper,
            },
            [eV.s6.LOGOUT]: {
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
            [eV.s6.SOCIAL_LINKS]: {
                section: f.ID.CUSTOM,
                element: er.Z,
            },
            [eV.s6.CLIENT_DEBUG_INFO]: {
                section: f.ID.CUSTOM,
                element: J.Z,
            },
        });
    };
