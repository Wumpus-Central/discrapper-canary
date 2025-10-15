n.d(t, {
    $Z: () => eZ,
    OF: () => eV,
    W8: () => eH,
    c$: () => eF,
    iE: () => eW,
}),
    n(539854),
    n(388685);
var r = n(951288),
    i = n(990547),
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
    N = n(288047),
    R = n(351780),
    P = n(231765),
    w = n(813732),
    D = n(398140),
    L = n(564344),
    x = n(145158),
    M = n(172416),
    j = n(462354),
    k = n(906467),
    U = n(857192),
    G = n(131951),
    B = n(25990),
    Z = n(626135),
    F = n(572004),
    V = n(49012),
    H = n(358085),
    Y = n(998502),
    W = n(695346),
    K = n(604227),
    z = n(846071),
    q = n(748717),
    X = n(419636),
    Q = n(154022),
    J = n(736752),
    $ = n(309739),
    ee = n(64914),
    et = n(501348),
    en = n(795594),
    er = n(443702),
    ei = n(327192),
    ea = n(949493),
    eo = n(675047),
    es = n(956699),
    el = n(54942),
    ec = n(293389),
    eu = n(387747),
    ed = n(389650),
    ef = n(649157),
    e_ = n(593648),
    ep = n(327885),
    eh = n(595242),
    em = n(463153),
    eg = n(36192),
    eE = n(889029),
    eb = n(400287),
    ey = n(936982),
    eO = n(200645),
    ev = n(924983),
    eI = n(287490),
    eT = n(168308),
    eS = n(277329),
    eA = n(273927),
    eC = n(604224),
    eN = n(345655),
    eR = n(726985),
    eP = n(583139),
    ew = n(981631),
    eD = n(65154),
    eL = n(388032),
    ex = n(693450),
    eM = n(345909),
    ej = n(202323);
function ek(e, t, n) {
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
function eU(e) {
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
                ek(e, t, n[t]);
            });
    }
    return e;
}
function eG(e, t) {
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
function eB(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eG(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eZ = () => {
        let e = [a.z.CLIENT_THEMES_SETTINGS_BADGE, a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
        return (
            b.Mc.getCurrentConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            h.n.getConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE),
            e
        );
    },
    eF = () => {
        let e = eZ(),
            [t] = (0, T.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: eL.intl.string(eL.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ||
                t === a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE
              ? (0, r.jsx)(s.IGR, { text: eL.intl.string(eL.t.y2b7CA) })
              : null;
    },
    eV = () => {
        let e = [];
        return (
            (0, M.hL)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            S.JH.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    eH = () => {
        let e = eV(),
            [t] = (0, T.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: eL.intl.string(eL.t.y2b7CA) })
            : null;
    },
    eY = eO.Z,
    eW = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: h,
            searchParams: b,
            numOfPendingFamilyRequests: T,
            isOverlaySupported: S,
            isClipsBetaTagShowing: M = !1,
            shouldMergeGameSettings: ek,
            isKeywordFilteringEnabled: eG,
            isStaff: eW,
            isInappropriateConversationWarningEnabled: eK,
            isInapproprateConversationsDefaultOn: ez,
            paymentsBlocked: eq,
            isEligibleForQuests: eX,
            isStricterMessageRequestsEnabled: eQ,
            hasLibraryApplication: eJ,
            hasTOTPEnabled: e$,
            developerMode: e0,
            isAdultUser: e1,
            hasSecureFramesVerifiedUserIds: e2,
            hasIgnoredUsers: e3,
            hasBlockedUsers: e4,
            isEligibleForSensitiveContentDefaults: e8,
            inputMode: e5,
            activeInputProfile: e6,
            isInputProfileCustom: e7,
            isDataUsage3PToggleEnabled: e9,
            isChatMentionSuggestionsSettingEnabled: te,
            isCrossDMSearchEnabledSettingVisible: tt,
        } = e;
        return Object.freeze({
            [eR.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: em.Z,
            },
            [eR.s6.ACCOUNT_SECURITY_TAB]: {
                section: ew.oAB.ACCOUNT,
                searchableTitles: [eL.intl.string(eL.t.Am9YHh)],
                label: eL.intl.string(eL.t.Am9YHh),
            },
            [eR.s6.ACCOUNT]: {
                section: ew.oAB.ACCOUNT,
                searchableTitles: [eL.intl.string(eL.t["JAIM/v"])],
                label: eL.intl.string(eL.t["JAIM/v"]),
                ariaLabel: eL.intl.string(eL.t["JAIM/v"]),
                element: J.Z,
                url: ew.Z5c.SETTINGS("account"),
            },
            [eR.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eL.intl.string(eL.t.LYju5O)],
                parent: eR.s6.ACCOUNT,
                section: ew.oAB.ACCOUNT,
            },
            [eR.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eL.intl.string(eL.t["9AjdkJ"])],
                section: ew.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_PROFILE,
            },
            [eR.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eL.intl.string(eL.t.Ulqq6O)],
                section: ew.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_PROFILE,
            },
            [eR.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    eL.intl.string(eL.t["/52UY2"]),
                    eL.intl.string(eL.t.sK0dmJ),
                    eL.intl.string(eL.t.XxRj7e),
                    eL.intl.string(eL.t.yNGjyM),
                    eL.intl.string(eL.t.KPGVWl),
                ],
                section: ew.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_PROFILE,
                predicate: () => e8,
            },
            [eR.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eL.intl.string(eL.t["+JkHPz"])],
                section: ew.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_PROFILE,
            },
            [eR.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eL.intl.string(eL.t.oP5zGB)],
                section: ew.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_PROFILE,
            },
            [eR.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eL.intl.string(eL.t.pKSjEh)],
                section: ew.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT,
            },
            [eR.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eL.intl.string(eL.t["FRep5+"])],
                section: ew.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eR.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eL.intl.string(eL.t["7qKDrK"])],
                section: ew.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eL.intl.string(eL.t.m0FidH)],
                section: ew.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eR.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eL.intl.string(eL.t.cDgKtb)],
                section: ew.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e$,
            },
            [eR.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eL.intl.string(eL.t["D+aE7u"])],
                section: ew.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e$,
            },
            [eR.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eL.intl.string(eL.t.fZSi1N)],
                section: ew.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eR.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eL.intl.string(eL.t.uHAJ5u)],
                section: ew.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eR.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eL.intl.string(eL.t.vrOCCg)],
                section: ew.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eR.s6.ACCOUNT_REMOVAL]: {
                section: ew.oAB.ACCOUNT,
                searchableTitles: [eL.intl.string(eL.t.ZKsIkp)],
                parent: eR.s6.ACCOUNT,
            },
            [eR.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: ew.oAB.ACCOUNT,
                searchableTitles: [eL.intl.string(eL.t.jf5GGR)],
                parent: eR.s6.ACCOUNT_REMOVAL,
            },
            [eR.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: ew.oAB.ACCOUNT,
                searchableTitles: [eL.intl.string(eL.t["8lQ2ra"])],
                parent: eR.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eR.s6.GAMES]: {
                section: ew.oAB.GAMES,
                searchableTitles: [eL.intl.string(eL.t.URyqtL)],
                label: eL.intl.string(eL.t.URyqtL),
                ariaLabel: eL.intl.string(eL.t.URyqtL),
                element: eS.Z,
                predicate: () => ek,
            },
            [eR.s6.GAMES_MY_GAMES]: {
                section: ew.oAB.GAMES,
                searchableTitles: [eL.intl.string(eL.t["5DMgp6"])],
                parent: eR.s6.GAMES,
            },
            [eR.s6.GAMES_CLIPS]: {
                section: ew.oAB.GAMES,
                searchableTitles: [eL.intl.string(eL.t.z2jK6e)],
                parent: eR.s6.GAMES,
            },
            [eR.s6.GAMES_OVERLAY]: {
                section: ew.oAB.GAMES,
                searchableTitles: [eL.intl.string(eL.t["9cb1U1"])],
                parent: eR.s6.GAMES,
            },
            [eR.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: ew.oAB.GAMES,
                searchableTitles: [eL.intl.string(eL.t.Cq98yM)],
                parent: eR.s6.GAMES,
            },
            [eR.s6.PROFILE_CUSTOMIZATION]: {
                section: ew.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [eL.intl.string(eL.t["vi7f+v"])],
                label: eL.intl.string(eL.t["vi7f+v"]),
                ariaLabel: eL.intl.string(eL.t["vi7f+v"]),
                element: L.Z,
                newIndicator: (0, r.jsx)(eH, {}),
                newIndicatorDismissibleContentTypes: [...eV()],
                notice: {
                    stores: [B.Z, C.Z],
                    element: D.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, A.It)(), (0, u.P6)(), d.Z.clearSubsection(ew.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: ew.Z5c.SETTINGS("profile-customization"),
            },
            [eR.s6.PROFILE_DISPLAY_NAME]: {
                section: ew.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eL.intl.string(eL.t["9AjdkJ"])],
                parent: eR.s6.PROFILE_CUSTOMIZATION,
            },
            [eR.s6.PROFILE_USER_PROFILE]: {
                section: ew.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eL.intl.string(eL.t["2p07FR"]), eL.intl.string(eL.t["7vhiqq"])],
                parent: eR.s6.PROFILE_CUSTOMIZATION,
            },
            [eR.s6.PROFILE_SERVER_PROFILES]: {
                section: ew.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eL.intl.string(eL.t.kPHroa)],
                parent: eR.s6.PROFILE_CUSTOMIZATION,
            },
            [eR.s6.CONTENT_SOCIAL]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                label: eL.intl.string(eL.t["+o1pDQ"]),
                searchableTitles: [eL.intl.string(eL.t["+o1pDQ"])],
                ariaLabel: eL.intl.string(eL.t["+o1pDQ"]),
                element: ea.Z,
                url: ew.Z5c.SETTINGS("content-and-social"),
            },
            [eR.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t["+o1pDQ"]), eL.intl.string(eL.t["/7xJCA"])],
                parent: eR.s6.CONTENT_SOCIAL,
            },
            [eR.s6.CONTENT_SOCIAL_DISCORD]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t["+o1pDQ"]), eL.intl.string(eL.t["/7xJCA"])],
                parent: eR.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eR.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t.YpCiMj)],
                parent: eR.s6.CONTENT_SOCIAL,
            },
            [eR.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                label: eL.intl.string(eL.t.YpCiMj),
                searchableTitles: [eL.intl.string(eL.t.YpCiMj)],
                ariaLabel: eL.intl.string(eL.t.YpCiMj),
                parent: eR.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: ew.Z5c.SETTINGS(ew.oAB.CONTENT_AND_SOCIAL, eP.C),
            },
            [eR.s6.DATA_PRIVACY]: {
                section: ew.oAB.DATA_AND_PRIVACY,
                label: eL.intl.string(eL.t.OAuOHB),
                searchableTitles: [eL.intl.string(eL.t.OAuOHB)],
                ariaLabel: eL.intl.string(eL.t.OAuOHB),
                element: eo.Z,
                url: ew.Z5c.SETTINGS("data-and-privacy"),
            },
            [eR.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: ew.oAB.ACCOUNT,
                searchableTitles: [eL.intl.string(eL.t["Vov/9v"])],
                parent: eR.s6.ACCOUNT,
            },
            [eR.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: ew.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eL.intl.string(eL.t.WWaFn5)],
                parent: eR.s6.DATA_PRIVACY,
                predicate: () => (0, H.isDesktop)(),
            },
            [eR.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: ew.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eL.intl.string(eL.t["opi/XF"])],
                parent: eR.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t.xVRG4O)],
                parent: eR.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eR.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t.fyA119)],
                parent: eR.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eR.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t.fyA119)],
                parent: eR.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eR.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t["/U8Iwc"])],
                parent: eR.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eR.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t["ms+TmZ"])],
                parent: eR.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eR.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t["y62Z/f"])],
                parent: eR.s6.CONTENT_SOCIAL,
            },
            [eR.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: ew.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eL.intl.string(eL.t.SRZyHh)],
                parent: eR.s6.DATA_PRIVACY,
            },
            [eR.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eL.intl.string(eL.t.uEz8JC),
                    eL.intl.string(eL.t["N/oRIy"]),
                    eL.intl.string(eL.t.QVdYsL),
                    eL.intl.string(eL.t["aWD+tr"]),
                    eL.intl.string(eL.t["5mnTa2"]),
                ],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eR.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eL.intl.string(eL.t["Hj/Bur"]),
                    eL.intl.string(eL.t["N/oRIy"]),
                    eL.intl.string(eL.t.QVdYsL),
                    eL.intl.string(eL.t["aWD+tr"]),
                    eL.intl.string(eL.t["5mnTa2"]),
                    eL.intl.string(eL.t.K0OWPz),
                ],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eR.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eL.intl.string(eL.t["Hj/Bur"]),
                    eL.intl.string(eL.t["N/oRIy"]),
                    eL.intl.string(eL.t.QVdYsL),
                    eL.intl.string(eL.t["aWD+tr"]),
                    eL.intl.string(eL.t["5mnTa2"]),
                ],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eR.s6.GORE_MEDIA_REDACTION]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eL.intl.string(eL.t["Hj/Bur"]),
                    eL.intl.string(eL.t["N/oRIy"]),
                    eL.intl.string(eL.t.QVdYsL),
                    eL.intl.string(eL.t["aWD+tr"]),
                    eL.intl.string(eL.t.K0OWPz),
                ],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eR.s6.PARENTAL_CONTROLS_SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: ew.oAB.FAMILY_CENTER_PARENTAL_CONTROLS,
                parent: eR.s6.PRIVACY_FAMILY_CENTER,
                predicate: () => !1,
            },
            [eR.s6.PARENTAL_CONTROLS_GORE_MEDIA_REDACTION]: {
                section: ew.oAB.FAMILY_CENTER_PARENTAL_CONTROLS,
                parent: eR.s6.PRIVACY_FAMILY_CENTER,
                predicate: () => !1,
            },
            [eR.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eL.intl.string(eL.t.JzaP4u),
                    eL.intl.string(eL.t.H9XOl5),
                    eL.intl.string(eL.t.k4W40N),
                ],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eR.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t["L+yTsb"])],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eR.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t.XahVjo)],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eR.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                parent: eR.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eR.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t.RAQUSE), eL.intl.string(eL.t.wbYDfX)],
                parent: eR.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eR.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t["3o2ojo"])],
                parent: eR.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !eQ,
            },
            [eR.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t.OLwZDQ)],
                parent: eR.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eR.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t.wBkwu7)],
                parent: eR.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eR.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: ew.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eL.intl.string(eL.t.XuADY2)],
                parent: eR.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eR.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: ew.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eL.intl.string(eL.t.MNKzys)],
                parent: eR.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eR.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: ew.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eL.intl.string(eL.t.VkS7YW), eL.intl.string(eL.t.sJYh5u)],
                parent: eR.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eR.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: ew.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eL.intl.string(eL.t.CyLYKS)],
                parent: eR.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                predicate: () => e9,
            },
            [eR.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: ew.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eR.CF],
                parent: eR.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eR.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: ew.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eL.intl.string(eL.t.dmBSKi)],
                parent: eR.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eR.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t["1UaUy8"]), eL.intl.string(eL.t["xIk/iI"])],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eG,
            },
            [eR.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eL.intl.string(eL.t.qFsx5u)],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eK && !e1 && !ez,
            },
            [eR.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: ew.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eL.intl.string(eL.t["5b3FND"])],
                parent: eR.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => e2,
            },
            [eR.s6.PRIVACY_FAMILY_CENTER]: {
                section: ew.oAB.FAMILY_CENTER,
                searchableTitles: [eL.intl.string(eM.default.gntCQU)],
                label: eL.intl.string(eM.default.gntCQU),
                ariaLabel: eL.intl.string(eM.default.gntCQU),
                element: el.Z,
                badgeCount: T,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eL.intl.string(eL.t.y2b7CA),
                    color: I.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: ew.Z5c.SETTINGS("family-center"),
            },
            [eR.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: ew.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eL.intl.string(eL.t.BG7Qsb)],
                parent: eR.s6.DATA_PRIVACY,
            },
            [eR.s6.AUTHORIZED_APPS]: {
                section: ew.oAB.AUTHORIZED_APPS,
                searchableTitles: [eL.intl.string(eL.t["f6kk+v"])],
                label: eL.intl.string(eL.t["f6kk+v"]),
                element: en.Z,
                url: ew.Z5c.SETTINGS("authorized-apps"),
            },
            [eR.s6.SESSIONS]: {
                section: ew.oAB.SESSIONS,
                searchableTitles: [eL.intl.string(eL.t["+1h0k5"])],
                label: eL.intl.string(eL.t["+1h0k5"]),
                ariaLabel: eL.intl.string(eL.t["+1h0k5"]),
                element: eg.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
            },
            [eR.s6.CONNECTIONS]: {
                section: ew.oAB.CONNECTIONS,
                searchableTitles: [eL.intl.string(eL.t["3fe7U1"])],
                label: eL.intl.string(eL.t["3fe7U1"]),
                ariaLabel: eL.intl.string(eL.t["3fe7U1"]),
                element: ei.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == b ? void 0 : b.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: ew.Z5c.SETTINGS("connections"),
            },
            [eR.s6.THIRD_PARTY_ACCESS]: {
                section: ew.oAB.CONNECTIONS,
                searchableTitles: [
                    eL.intl.string(eL.t["Ig/XFR"]),
                    eL.intl.string(eL.t["3fe7U1"]),
                    eL.intl.string(eL.t["f6kk+v"]),
                ],
                label: eL.intl.string(eL.t["Ig/XFR"]),
                parent: eR.s6.CONNECTIONS,
                element: ey.Z,
            },
            [eR.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: ew.oAB.CONNECTIONS,
                searchableTitles: [eL.intl.string(eL.t["+/hZMz"])],
                parent: eR.s6.CONNECTIONS,
                element: ei.Z,
            },
            [eR.s6.CLIPS]: {
                section: ew.oAB.CLIPS,
                searchableTitles: [eL.intl.string(eL.t.z2jK6e)],
                label: eL.intl.string(eL.t.z2jK6e),
                ariaLabel: eL.intl.string(eL.t.z2jK6e),
                icon: M ? (0, r.jsx)(y.Z, {}) : void 0,
                element: O.Z,
                predicate: () => !ek,
                url: ew.Z5c.SETTINGS("clips"),
            },
            [eR.s6.RESTRICTED_USERS]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                parent: eR.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eL.intl.string(eL.t["3wRorq"]),
                element: eA.ZP,
                predicate: () => e3 || e4,
            },
            [eR.s6.BLOCKED_USERS]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                parent: eR.s6.RESTRICTED_USERS,
                label: eL.intl.string(eL.t.PFOUKS),
                searchableTitles: [eL.intl.string(eL.t.PFOUKS)],
                element: eA.GF,
                predicate: () => e4,
            },
            [eR.s6.IGNORED_USERS]: {
                section: ew.oAB.CONTENT_AND_SOCIAL,
                parent: eR.s6.RESTRICTED_USERS,
                searchableTitles: [eL.intl.string(eL.t["93ZDWF"])],
                label: eL.intl.string(eL.t["93ZDWF"]),
                element: eA.yo,
                predicate: () => e3,
            },
            [eR.s6.PREMIUM]: {
                section: ew.oAB.PREMIUM,
                ariaLabel: eL.intl.string(eL.t.Ipxkoq),
                searchableTitles: [eL.intl.string(eL.t.Ipxkoq)],
                label: eL.intl.string(eL.t.Ipxkoq),
                element: q.Z,
                className: ej.premiumTab,
            },
            [eR.s6.GUILD_BOOSTING]: {
                section: ew.oAB.GUILD_BOOSTING,
                searchableTitles: [eL.intl.string(eL.t["+CbP2t"])],
                label: eL.intl.string(eL.t["+CbP2t"]),
                element: eh.Z,
            },
            [eR.s6.SUBSCRIPTIONS]: {
                section: ew.oAB.SUBSCRIPTIONS,
                ariaLabel: eL.intl.string(eL.t.trSpHR),
                searchableTitles: [eL.intl.string(eL.t.trSpHR)],
                label: eL.intl.string(eL.t.trSpHR),
                element: w.Z,
                icon: h
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eR.s6.SUBSCRIPTIONS_CREDITS]: {
                section: ew.oAB.SUBSCRIPTIONS,
                searchableTitles: [eL.intl.string(eL.t["2GKrvr"])],
                parent: eR.s6.SUBSCRIPTIONS,
            },
            [eR.s6.GIFT_INVENTORY]: {
                section: ew.oAB.INVENTORY,
                searchableTitles: [eL.intl.string(eL.t["jcSP+v"])],
                label: eL.intl.string(eL.t["jcSP+v"]),
                element: eu.Z,
                ariaLabel: eL.intl.string(eL.t["jcSP+v"]),
                badgeCount: t,
            },
            [eR.s6.GIFT_CODE_REDEMPTION]: {
                section: ew.oAB.INVENTORY,
                searchableTitles: [eL.intl.string(eL.t["il+VCg"])],
                parent: eR.s6.GIFT_INVENTORY,
                predicate: () => !eq,
            },
            [eR.s6.GIFT_INVENTORY_QUESTS]: {
                section: ew.oAB.INVENTORY,
                searchableTitles: [eL.intl.string(eL.t.JALI2N)],
                parent: eR.s6.GIFT_INVENTORY,
                predicate: () => eX,
            },
            [eR.s6.GIFT_INVENTORY_LIST]: {
                section: ew.oAB.INVENTORY,
                searchableTitles: [eL.intl.string(eL.t["9KeUbW"])],
                parent: eR.s6.GIFT_INVENTORY,
                predicate: () => !eq,
            },
            [eR.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: ew.oAB.INVENTORY,
                searchableTitles: [eL.intl.string(eL.t.vwMEHR)],
                parent: eR.s6.GIFT_INVENTORY,
                predicate: () => eq,
            },
            [eR.s6.BILLING]: {
                section: ew.oAB.BILLING,
                searchableTitles: [eL.intl.string(eL.t.oeUm2t)],
                label: eL.intl.string(eL.t.oeUm2t),
                ariaLabel: eL.intl.string(eL.t.oeUm2t),
                element: er.Z,
            },
            [eR.s6.BILLING_PAYMENT_METHODS]: {
                section: ew.oAB.BILLING,
                searchableTitles: [eL.intl.string(eL.t.W26xGR)],
                parent: eR.s6.BILLING,
            },
            [eR.s6.BILLING_TRANSACTION_HISTORY]: {
                section: ew.oAB.BILLING,
                searchableTitles: [eL.intl.string(eL.t.obLrcH)],
                parent: eR.s6.BILLING,
            },
            [eR.s6.APPEARANCE]: {
                section: ew.oAB.APPEARANCE,
                searchableTitles: [eL.intl.string(eL.t["iHH+k5"])],
                label: eL.intl.string(eL.t["iHH+k5"]),
                ariaLabel: eL.intl.string(eL.t["iHH+k5"]),
                element: et.Z,
                newIndicator: (0, r.jsx)(eF, {}),
                newIndicatorDismissibleContentTypes: eZ(),
                url: ew.Z5c.SETTINGS("appearance"),
            },
            [eR.s6.APPEARANCE_THEME]: {
                section: ew.oAB.APPEARANCE,
                searchableTitles: [eL.intl.string(eL.t.Ksh3io)],
                parent: eR.s6.APPEARANCE,
            },
            [eR.s6.APPEARANCE_COLOR]: {
                section: ew.oAB.APPEARANCE,
                searchableTitles: [eL.intl.string(eL.t.OCOOiI)],
                parent: eR.s6.APPEARANCE_THEME,
            },
            [eR.s6.APPEARANCE_ICON]: {
                section: ew.oAB.APPEARANCE,
                searchableTitles: [eL.intl.string(eL.t.RPh2oq)],
                parent: eR.s6.APPEARANCE_THEME,
            },
            [eR.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: ew.oAB.APPEARANCE,
                searchableTitles: [eL.intl.string(eL.t.ZEoGMT)],
                parent: eR.s6.APPEARANCE,
            },
            [eR.s6.APPEARANCE_LIST_SPACING]: {
                section: ew.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eR.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eL.intl.string(eL.t.y2b7CA),
                    color: I.Z.BG_BRAND,
                }),
            },
            [eR.s6.APPEARANCE_SCALING_SPACING]: {
                section: ew.oAB.APPEARANCE,
                searchableTitles: [eL.intl.string(eL.t.qPOqoK)],
                parent: eR.s6.APPEARANCE,
            },
            [eR.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: ew.oAB.APPEARANCE,
                searchableTitles: [
                    eL.intl.string(eL.t.dyamEB),
                    eL.intl.string(eL.t.p8NOws),
                    eL.intl.string(eL.t["+o/sOj"]),
                ],
                parent: eR.s6.APPEARANCE,
                predicate: () =>
                    x.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eR.s6.ACCESSIBILITY]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.G0neg4)],
                label: eL.intl.string(eL.t.G0neg4),
                ariaLabel: eL.intl.string(eL.t.G0neg4),
                element: Q.Z,
                url: ew.Z5c.SETTINGS("accessibility"),
            },
            [eR.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.aZlePj)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_SWITCH_ICON]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t["S3z+pa"])],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_SATURATION]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t["5PWWCQ"])],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.bQCodH)],
                parent: eR.s6.ACCESSIBILITY_SATURATION,
            },
            [eR.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.OLZFBw)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t["+IsihY"])],
                parent: eR.s6.ACCESSIBILITY,
                predicate: () => (0, v.l)("SettingsRendererConfig"),
            },
            [eR.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.uSOPWl)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(ex.default["2gFUEx"])],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.BT8Bmp)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t["sSY+mJ"])],
                parent: eR.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eR.s6.ACCESSIBILITY_CONTRAST]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.TYyfOz)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.cguieX)],
                parent: eR.s6.ACCESSIBILITY_CONTRAST,
            },
            [eR.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.e3TR1d)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.b3XBzs)],
                parent: eR.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eR.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.Iayoh4)],
                parent: eR.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eR.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.iIaOlZ)],
                parent: eR.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eR.s6.ACCESSIBILITY_STICKERS]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t["6NtAuL"])],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_MESSAGES]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.onqU6u)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t["3Fztn5"])],
                parent: eR.s6.ACCESSIBILITY_MESSAGES,
            },
            [eR.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.TZ2hZG)],
                parent: eR.s6.ACCESSIBILITY_MESSAGES,
            },
            [eR.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.VpSKeH)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.qvTIwc)],
                parent: eR.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eR.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eL.intl.string(eL.t.lsW5Eh)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: ew.oAB.ACCESSIBILITY,
                searchableTitles: [eR.CF],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.VOICE_AND_VIDEO]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.B1fFpa)],
                label: eL.intl.string(eL.t.B1fFpa),
                ariaLabel: eL.intl.string(eL.t.B1fFpa),
                element: eC.Z,
                predicate: () => G.Z.isSupported(),
                url: ew.Z5c.SETTINGS("voice"),
            },
            [eR.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.K3lovL), eL.intl.string(eL.t.NiTd0d)],
                parent: eR.s6.VOICE_AND_VIDEO,
            },
            [eR.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.FlNoSU)],
                parent: eR.s6.VOICE_AND_VIDEO,
            },
            [eR.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.ABjMWF)],
                parent: eR.s6.VOICE_AND_VIDEO,
            },
            [eR.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.OFpL3d)],
                parent: eR.s6.VOICE_AND_VIDEO,
            },
            [eR.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.KDdjoq), eL.intl.string(eL.t.FeUKeH)],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eR.s6.VOICE_AND_VIDEO_VOICE]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.K3lovL), eL.intl.string(eL.t.NiTd0d)],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eR.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: ew.oAB.VOICE,
                searchableTitles: [
                    eL.intl.string(eL.t.hHMYbW),
                    eL.intl.string(eL.t.dl18zc),
                    eL.intl.string(eL.t.nuFtHB),
                    eL.intl.string(eL.t["3182VF"]),
                    eL.intl.string(eL.t["DGq/PT"]),
                ],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eR.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: ew.oAB.VOICE,
                searchableTitles: [
                    eL.intl.string(eL.t.OX2Bnp),
                    eL.intl.string(eL.t.eATD2N),
                    eL.intl.string(eL.t.nuFtHB),
                    eL.intl.string(eL.t["3182VF"]),
                    eL.intl.string(eL.t["DGq/PT"]),
                ],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eR.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.gyljWF), eL.intl.string(eL.t.nuFtHB)],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eR.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: ew.oAB.VOICE,
                searchableTitles: [
                    eL.intl.string(eL.t.LM3U3t),
                    eL.intl.string(eL.t.nuFtHB),
                    eL.intl.string(eL.t.VZPR0d),
                    eL.intl.string(eL.t.cjPbpa),
                ],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, z.P)({ location: "SettingsRendererConfig" });
                    return e.length > 0;
                },
            },
            [eR.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t["pS+K2N"]), eL.intl.string(eL.t.nuFtHB)],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => e6 !== eN._.STUDIO,
            },
            [eR.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t["sqUm+v"]), eL.intl.string(eL.t.nuFtHB)],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => e5 === eD.pM.VOICE_ACTIVITY && e7,
            },
            [eR.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.e7LIiY)],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eR.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.nzUc3N)],
                parent: eR.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eR.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.ABjMWF)],
                parent: eR.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eR.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.nzUc3N)],
                parent: eR.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eR.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.LKzQSE)],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eR.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.F122Gx)],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => G.Z.supports(eD.AN.VIDEO),
            },
            [eR.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t["3Ppr1t"])],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eR.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.lZTUPj)],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => G.Z.supports(eD.AN.VIDEO),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t["8/udY2"])],
                parent: eR.s6.VOICE_AND_VIDEO,
            },
            [eR.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t["8/udY2"])],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => !(0, H.isWeb)(),
            },
            [eR.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t["8/udY2"])],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.Tceiq6)],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED,
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t["71Ve19"])],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => G.Z.supports(eD.AN.OPEN_H264),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.Sln58f)],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.AxnPm5)],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => "stable" !== Y.ZP.releaseChannel && G.Z.isExperimentalEncodersSupported(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t["6I6GUl"])],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => e7,
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.iWTwu7)],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t["/jwMtr"])],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eR.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.OBwCXF)],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.t8QhiY), eL.intl.string(eL.t.hmfkCg)],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => G.Z.isNoiseSuppressionSupported(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.BbESsr)],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => G.Z.isAdvancedVoiceActivitySupported(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.cUMdHx)],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => G.Z.isAutomaticGainControlSupported(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.DFPXIC)],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => G.Z.showBypassSystemInputProcessing(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.uancuL)],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => G.Z.supports(eD.AN.QOS),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.oSdBvb)],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => G.Z.supports(eD.AN.ATTENUATION),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.wVBHr6)],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => G.Z.shouldOfferManualSubsystemSelection(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: ew.oAB.VOICE,
                searchableTitles: [
                    eL.intl.string(eL.t.KDdjoq),
                    eL.intl.string(eL.t.NMCIf3),
                    eL.intl.string(eL.t.FeUKeH),
                ],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    G.Z.supportsVideoHook() ||
                    G.Z.supportsExperimentalSoundshare() ||
                    (G.Z.supportsSystemScreensharePicker() && (0, H.isMac)()),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.GmWk2N), eL.intl.string(eL.t["Fj/xn5"])],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => G.Z.supportsVideoHook(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t["4I0qzc"])],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => G.Z.supportsExperimentalSoundshare() && G.Z.supportsHookSoundshare(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.ie1mgY)],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => G.Z.supportsSystemScreensharePicker() && (0, H.isMac)(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t["aP1N/v"])],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => H.isPlatformEmbedded,
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.OFpL3d)],
                parent: eR.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t["0CEP6e"])],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => W.Sb.getSetting(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t["r6K+TE"])],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => G.Z.isAecDumpSupported(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t.U4FgFB)],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === Y.ZP.releaseChannel || "development" === Y.ZP.releaseChannel) &&
                    eW &&
                    G.Z.supports(eD.AN.CONNECTION_REPLAY),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t["726JHB"])],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    H.isPlatformEmbedded && G.Z.supports(eD.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [eR.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: ew.oAB.VOICE,
                searchableTitles: [eL.intl.string(eL.t["/RXu6+"])],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eR.s6.POGGERMODE]: {
                section: ew.oAB.POGGERMODE,
                searchableTitles: [eL.intl.string(eL.t.AtCukJ)],
                label: eL.intl.string(eL.t.AtCukJ),
                ariaLabel: eL.intl.string(eL.t.AtCukJ),
                element: P.Z,
                predicate: () => R.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: ej.poggermodeIcon,
                }),
            },
            [eR.s6.CHAT]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t["/VQax8"])],
                label: eL.intl.string(eL.t["/VQax8"]),
                ariaLabel: eL.intl.string(eL.t["/VQax8"]),
                element: eb.Z,
                url: ew.Z5c.SETTINGS("text"),
            },
            [eR.s6.MESSAGE_SEARCH]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t.VYODPD)],
                parent: eR.s6.CHAT,
                predicate: () => tt,
            },
            [eR.s6.MESSAGE_SEARCH_ALL_DMS]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t["t4+fbW"])],
                parent: eR.s6.MESSAGE_SEARCH,
                predicate: () => tt,
            },
            [eR.s6.CHAT_INLINE_MEDIA]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t.U68Dgo)],
                parent: eR.s6.CHAT,
            },
            [eR.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t.U47N1t)],
                parent: eR.s6.CHAT_INLINE_MEDIA,
            },
            [eR.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t.VP11Nj)],
                parent: eR.s6.CHAT_INLINE_MEDIA,
            },
            [eR.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t["5S2AKy"])],
                parent: eR.s6.CHAT_INLINE_MEDIA,
            },
            [eR.s6.CHAT_EMBEDS]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t.PWZOn5)],
                parent: eR.s6.CHAT,
            },
            [eR.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t.xX0ZTE)],
                parent: eR.s6.CHAT_EMBEDS,
            },
            [eR.s6.CHAT_EMOJI]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t.sMOuub)],
                parent: eR.s6.CHAT,
            },
            [eR.s6.CHAT_EMOJI_REACTIONS]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t.Iv24sr)],
                parent: eR.s6.CHAT_EMOJI,
            },
            [eR.s6.CHAT_EMOJI_EMOTICONS]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t["79qal5"])],
                parent: eR.s6.CHAT_EMOJI,
            },
            [eR.s6.CHAT_STICKERS]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t["6NtAuL"])],
                parent: eR.s6.CHAT,
            },
            [eR.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t["29xPVV"])],
                parent: eR.s6.CHAT_STICKERS,
            },
            [eR.s6.CHAT_SOUNDMOJI]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t.EHlAMT)],
                parent: eR.s6.CHAT,
            },
            [eR.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t["CtYr+f"])],
                parent: eR.s6.CHAT_SOUNDMOJI,
            },
            [eR.s6.CHAT_TEXT_BOX]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t.afR0pK)],
                parent: eR.s6.CHAT,
            },
            [eR.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t.AqGrEB)],
                parent: eR.s6.CHAT_TEXT_BOX,
            },
            [eR.s6.CHAT_THREADS]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t.B2panJ)],
                parent: eR.s6.CHAT,
            },
            [eR.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t.AInv5u)],
                parent: eR.s6.CHAT_THREADS,
            },
            [eR.s6.CHAT_SPOILERS]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t.QgwmV1)],
                parent: eR.s6.CHAT,
            },
            [eR.s6.CHAT_MENTION_SUGGESTIONS]: {
                section: ew.oAB.TEXT,
                searchableTitles: [eL.intl.string(eL.t.uXQ2xc)],
                parent: eR.s6.CHAT_TEXT_BOX,
                predicate: () => te,
            },
            [eR.s6.NOTIFICATIONS]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.HcoRu7)],
                label: eL.intl.string(eL.t.HcoRu7),
                ariaLabel: eL.intl.string(eL.t.HcoRu7),
                element: e_.Z,
                url: ew.Z5c.SETTINGS("notifications"),
            },
            [eR.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t["/0WClp"])],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.VH8AIC)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.xSmFQE)],
                parent: eR.s6.NOTIFICATIONS,
                predicate: () => (0, H.isWindows)(),
            },
            [eR.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.z21l8P)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: ["New Notification Settings (Advanced, Staff Only)"],
                parent: eR.s6.NOTIFICATIONS,
                predicate: () => !1,
            },
            [eR.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: ["Restore most recent snapshot"],
                parent: eR.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eR.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: ["Launch Migration"],
                parent: eR.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eR.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: ["Toggle new system on/off"],
                parent: eR.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1,
            },
            [eR.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.TTvjd3)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.VpSKeH)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.D9yVAA)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.u6dc5O)],
                parent: eR.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eR.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.P8MG6u)],
                parent: eR.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eR.s6.NOTIFICATIONS_SOUNDS]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.MKWyKS)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_EMAILS]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.TPchzM)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t["B75+xc"])],
                parent: eR.s6.NOTIFICATIONS_EMAILS,
            },
            [eR.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.sxn7lZ)],
                parent: eR.s6.NOTIFICATIONS_EMAILS,
            },
            [eR.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.EkxXhY)],
                parent: eR.s6.NOTIFICATIONS_EMAILS,
            },
            [eR.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.jNrkrK)],
                parent: eR.s6.NOTIFICATIONS_EMAILS,
            },
            [eR.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.E8g1l5)],
                parent: eR.s6.NOTIFICATIONS_EMAILS,
            },
            [eR.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.Ra9Pws)],
                parent: eR.s6.NOTIFICATIONS_EMAILS,
            },
            [eR.s6.NOTIFICATIONS_REACTIONS]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.Rq0NFh)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.wtk08f)],
                parent: eR.s6.NOTIFICATIONS,
                predicate: () => (0, j.JN)("SettingsRendererConfig"),
            },
            [eR.s6.NOTIFICATIONS_FRIEND_ONLINE]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t["uvIi//"])],
                parent: eR.s6.NOTIFICATIONS,
                predicate: () => (0, N.bH)("SettingsRendererConfig"),
            },
            [eR.s6.NOTIFICATIONS_GO_LIVE]: {
                section: ew.oAB.NOTIFICATIONS,
                searchableTitles: [eL.intl.string(eL.t.pW4TMj)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.KEYBINDS]: {
                section: ew.oAB.KEYBINDS,
                searchableTitles: [eL.intl.string(eL.t.T9DA2N)],
                label: eL.intl.string(eL.t.T9DA2N),
                element: ed.Z,
                url: ew.Z5c.SETTINGS("keybinds"),
            },
            [eR.s6.LANGUAGE]: {
                section: ew.oAB.LOCALE,
                searchableTitles: [eL.intl.string(eL.t.IHMsPj)],
                label: eL.intl.string(eL.t.IHMsPj),
                element: ef.Z,
                url: ew.Z5c.SETTINGS("language"),
            },
            [eR.s6.WINDOW_SETTINGS]: {
                section: ew.oAB.WINDOWS,
                searchableTitles: [eL.intl.string(eL.t.ZkDZoq)],
                label: eL.intl.string(eL.t.ZkDZoq),
                element: eO.Z,
                predicate: () => H.isPlatformEmbedded && (0, H.isWindows)(),
            },
            [eR.s6.LINUX_SETTINGS]: {
                section: ew.oAB.LINUX,
                searchableTitles: [eL.intl.string(eL.t["7pPjTU"])],
                label: eL.intl.string(eL.t["7pPjTU"]),
                element: eY,
                predicate: () => H.isPlatformEmbedded && (0, H.isLinux)(),
            },
            [eR.s6.STREAMER_MODE]: {
                section: ew.oAB.STREAMER_MODE,
                searchableTitles: [eL.intl.string(eL.t.S5GfOT)],
                label: eL.intl.string(eL.t.S5GfOT),
                ariaLabel: eL.intl.string(eL.t.S5GfOT),
                element: eE.Z,
                url: ew.Z5c.SETTINGS("streamer-mode"),
            },
            [eR.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: ew.oAB.STREAMER_MODE,
                searchableTitles: [eL.intl.string(eL.t.bxGbHB)],
                parent: eR.s6.STREAMER_MODE,
            },
            [eR.s6.STREAMER_MODE_ENABLE]: {
                section: ew.oAB.STREAMER_MODE,
                searchableTitles: [eL.intl.string(eL.t.p9ZAJS)],
                parent: eR.s6.STREAMER_MODE,
            },
            [eR.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: ew.oAB.STREAMER_MODE,
                searchableTitles: [eL.intl.string(eL.t.UpQziI)],
                parent: eR.s6.STREAMER_MODE,
            },
            [eR.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: ew.oAB.STREAMER_MODE,
                searchableTitles: [eL.intl.string(eL.t.q7WNGh)],
                parent: eR.s6.STREAMER_MODE,
            },
            [eR.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: ew.oAB.STREAMER_MODE,
                searchableTitles: [eL.intl.string(eL.t["1CWknJ"])],
                parent: eR.s6.STREAMER_MODE,
            },
            [eR.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: ew.oAB.STREAMER_MODE,
                searchableTitles: [eL.intl.string(eL.t.qmYiYW)],
                parent: eR.s6.STREAMER_MODE,
            },
            [eR.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: ew.oAB.STREAMER_MODE,
                searchableTitles: [eL.intl.string(eL.t["iA81+f"])],
                parent: eR.s6.STREAMER_MODE,
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
            [eR.s6.SETTINGS_ADVANCED]: {
                section: ew.oAB.ADVANCED,
                searchableTitles: [eL.intl.string(eL.t["8/udY2"])],
                label: eL.intl.string(eL.t["8/udY2"]),
                ariaLabel: eL.intl.string(eL.t["8/udY2"]),
                element: ee.ZP,
            },
            [eR.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: ew.oAB.ADVANCED,
                searchableTitles: [eL.intl.string(eL.t.ObIb1d)],
                parent: eR.s6.SETTINGS_ADVANCED,
                predicate: () => F.wS,
            },
            [eR.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: ew.oAB.ADVANCED,
                searchableTitles: [eL.intl.string(eL.t["eOC/Fx"])],
                parent: eR.s6.SETTINGS_ADVANCED,
                predicate: () => H.isPlatformEmbedded,
            },
            [eR.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: ew.oAB.ADVANCED,
                searchableTitles: [eL.intl.string(eL.t.fi3UQE)],
                parent: eR.s6.SETTINGS_ADVANCED,
                predicate: () => eJ,
            },
            [eR.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: ew.oAB.ADVANCED,
                searchableTitles: [eL.intl.string(eL.t.erOqlp)],
                parent: eR.s6.SETTINGS_ADVANCED,
                predicate: () => e0,
            },
            [eR.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: ew.oAB.ADVANCED,
                searchableTitles: [eL.intl.string(eL.t.qDZryM)],
                parent: eR.s6.SETTINGS_ADVANCED,
            },
            [eR.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: ew.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: eR.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    g.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [eR.s6.ACTIVITY_PRIVACY]: {
                section: ew.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eL.intl.string(eL.t.Cq98yM)],
                label: eL.intl.string(eL.t.Cq98yM),
                ariaLabel: eL.intl.string(eL.t.Cq98yM),
                element: $.Z,
                predicate: () => !ek,
                url: ew.Z5c.SETTINGS("activity-privacy"),
            },
            [eR.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: ek ? ew.oAB.GAMES : ew.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eL.intl.string(eL.t["8ka8lp"])],
                parent: ek ? eR.s6.GAMES_ACTIVITY_PRIVACY : eR.s6.ACTIVITY_PRIVACY,
            },
            [eR.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: ek ? ew.oAB.GAMES : ew.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eL.intl.string(eL.t.VOszPD)],
                parent: ek ? eR.s6.GAMES_ACTIVITY_PRIVACY : eR.s6.ACTIVITY_PRIVACY,
            },
            [eR.s6.ACTIVITY_PRIVACY_TOS]: {
                section: ek ? ew.oAB.GAMES : ew.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eR.CF],
                parent: ek ? eR.s6.GAMES_ACTIVITY_PRIVACY : eR.s6.ACTIVITY_PRIVACY,
            },
            [eR.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: ew.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eL.intl.string(eL.t["4F2KoK"])],
                parent: eR.s6.ACTIVITY_PRIVACY,
            },
            [eR.s6.REGISTERED_GAMES]: {
                section: ew.oAB.REGISTERED_GAMES,
                searchableTitles: [eL.intl.string(eL.t.AVDyEh)],
                label: eL.intl.string(eL.t.AVDyEh),
                element: ec.Z,
                predicate: () => !ek && (0, eT.Jw)(),
            },
            [eR.s6.OVERLAY]: {
                section: ew.oAB.OVERLAY,
                searchableTitles: [eL.intl.string(eL.t["9cb1U1"]), eL.intl.string(eL.t.HcoRu7)],
                label: eL.intl.string(eL.t["9cb1U1"]),
                element: ep.Z,
                predicate: () => !ek && S,
            },
            [eR.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, E.Z)(!0),
                searchableTitles: [eL.intl.string(eL.t.LRmNAg)],
                label: eL.intl.string(eL.t.LRmNAg),
            },
            [eR.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    Z.default.track(ew.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, V.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                Z.default.track(ew.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, p.Z)(e);
                            },
                        });
                },
                searchableTitles: [eL.intl.string(eL.t.sMEktb)],
                label: eL.intl.string(eL.t.sMEktb),
                ariaLabel: eL.intl.string(eL.t.sMEktb),
            },
            [eR.s6.EXPERIMENTS]: {
                section: ew.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: eI.Z,
                predicate: () => k.Z.isDeveloper,
                url: ew.Z5c.SETTINGS("experiments"),
            },
            [eR.s6.DEVELOPER_OPTIONS]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: es.Z,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eR.s6.DEVELOPER_OPTIONS,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eR.s6.DEVELOPER_OPTIONS,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eR.s6.DEVELOPER_OPTIONS,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eR.s6.DEVELOPER_OPTIONS,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eR.s6.DEVELOPER_OPTIONS,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eR.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eR.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eR.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eW && k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eR.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eW && k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eR.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eR.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eW && k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_HIGHLIGHT_MANA_COMPONENTS]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Mana Components"],
                parent: eR.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eW && k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Void Toggleable Components"],
                parent: eR.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eW && k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eR.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eW && k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eR.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eW && k.Z.isDeveloper && U.default.layoutDebuggingEnabled,
            },
            [eR.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eW && k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eW && k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eR.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eR.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eR.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eR.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eR.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => m.q && k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_SHOW_TOTP_SUCCESS]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Show TOTP Success"],
                parent: eR.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eR.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eR.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eR.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eR.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: ew.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM]: {
                section: f.ID.CUSTOM,
                searchableTitles: ev.Y,
                label: "Developer Education",
                element: ev.$,
                predicate: () => k.Z.isDeveloper,
            },
            [eR.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            eB(
                                eU(
                                    {
                                        header: eL.intl.string(eL.t["2jxGen"]),
                                        confirmText: eL.intl.string(eL.t["2jxGen"]),
                                        cancelText: eL.intl.string(eL.t["ETE/oK"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: eL.intl.string(eL.t.SUnWBA),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: eL.intl.string(eL.t["2jxGen"]),
                ariaLabel: eL.intl.string(eL.t["2jxGen"]),
                icon: (0, r.jsx)(s.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [eR.s6.SOCIAL_LINKS]: {
                section: f.ID.CUSTOM,
                element: X.Z,
            },
            [eR.s6.CLIENT_DEBUG_INFO]: {
                section: f.ID.CUSTOM,
                element: K.Z,
            },
        });
    };
