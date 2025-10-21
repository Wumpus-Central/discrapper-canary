n.d(t, {
    $Z: () => eB,
    OF: () => eF,
    W8: () => eV,
    c$: () => eZ,
    iE: () => eY,
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
    b = n(703288),
    y = n(574755),
    O = n(675997),
    v = n(377171),
    I = n(243778),
    T = n(594928),
    S = n(18438),
    A = n(778825),
    C = n(288047),
    N = n(351780),
    R = n(231765),
    P = n(813732),
    w = n(398140),
    D = n(564344),
    L = n(145158),
    x = n(172416),
    M = n(462354),
    k = n(906467),
    j = n(857192),
    U = n(131951),
    G = n(25990),
    B = n(626135),
    Z = n(572004),
    F = n(49012),
    V = n(358085),
    H = n(998502),
    Y = n(695346),
    W = n(604227),
    K = n(846071),
    z = n(748717),
    q = n(419636),
    X = n(154022),
    Q = n(736752),
    J = n(309739),
    $ = n(64914),
    ee = n(501348),
    et = n(795594),
    en = n(443702),
    er = n(327192),
    ei = n(949493),
    ea = n(675047),
    eo = n(956699),
    es = n(54942),
    el = n(293389),
    ec = n(387747),
    eu = n(389650),
    ed = n(649157),
    ef = n(593648),
    e_ = n(327885),
    ep = n(595242),
    eh = n(463153),
    em = n(36192),
    eg = n(889029),
    eE = n(400287),
    eb = n(936982),
    ey = n(200645),
    eO = n(924983),
    ev = n(287490),
    eI = n(168308),
    eT = n(277329),
    eS = n(273927),
    eA = n(604224),
    eC = n(345655),
    eN = n(726985),
    eR = n(583139),
    eP = n(981631),
    ew = n(65154),
    eD = n(388032),
    eL = n(62222),
    ex = n(412297),
    eM = n(756464);
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
function ej(e) {
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
function eU(e, t) {
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
function eG(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eU(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eB = () => {
        let e = [
            a.z.CLIENT_THEMES_SETTINGS_BADGE,
            a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE,
            a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE,
        ];
        return (
            h.n.getConfig({ location: "getAppearanceDCs" }).enabled &&
                e.push(a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE),
            e
        );
    },
    eZ = () => {
        let e = eB(),
            [t] = (0, I.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: eD.intl.string(eD.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ||
                t === a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE
              ? (0, r.jsx)(s.IGR, { text: eD.intl.string(eD.t.y2b7CA) })
              : null;
    },
    eF = () => {
        let e = [];
        return (
            (0, x.hL)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            T.JH.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    eV = () => {
        let e = eF(),
            [t] = (0, I.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: eD.intl.string(eD.t.y2b7CA) })
            : null;
    },
    eH = ey.Z,
    eY = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: h,
            searchParams: I,
            numOfPendingFamilyRequests: T,
            isOverlaySupported: x,
            isClipsBetaTagShowing: ek = !1,
            shouldMergeGameSettings: eU,
            isKeywordFilteringEnabled: eY,
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
            [eN.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: eh.Z,
            },
            [eN.s6.ACCOUNT_SECURITY_TAB]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [eD.intl.string(eD.t.Am9YHh)],
                label: eD.intl.string(eD.t.Am9YHh),
            },
            [eN.s6.ACCOUNT]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [eD.intl.string(eD.t["JAIM/v"])],
                label: eD.intl.string(eD.t["JAIM/v"]),
                ariaLabel: eD.intl.string(eD.t["JAIM/v"]),
                element: Q.Z,
                url: eP.Z5c.SETTINGS("account"),
            },
            [eN.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eD.intl.string(eD.t.LYju5O)],
                parent: eN.s6.ACCOUNT,
                section: eP.oAB.ACCOUNT,
            },
            [eN.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eD.intl.string(eD.t["9AjdkJ"])],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_PROFILE,
            },
            [eN.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eD.intl.string(eD.t.Ulqq6O)],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_PROFILE,
            },
            [eN.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    eD.intl.string(eD.t["/52UY2"]),
                    eD.intl.string(eD.t.sK0dmJ),
                    eD.intl.string(eD.t.XxRj7e),
                    eD.intl.string(eD.t.yNGjyM),
                    eD.intl.string(eD.t.KPGVWl),
                ],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_PROFILE,
                predicate: () => e8,
            },
            [eN.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eD.intl.string(eD.t["+JkHPz"])],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_PROFILE,
            },
            [eN.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eD.intl.string(eD.t.oP5zGB)],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_PROFILE,
            },
            [eN.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eD.intl.string(eD.t.pKSjEh)],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT,
            },
            [eN.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eD.intl.string(eD.t["FRep5+"])],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eN.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eD.intl.string(eD.t["7qKDrK"])],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eN.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eD.intl.string(eD.t.m0FidH)],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eN.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eD.intl.string(eD.t.cDgKtb)],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e$,
            },
            [eN.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eD.intl.string(eD.t["D+aE7u"])],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e$,
            },
            [eN.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eD.intl.string(eD.t.fZSi1N)],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eN.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eD.intl.string(eD.t.uHAJ5u)],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eN.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eD.intl.string(eD.t.vrOCCg)],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eN.s6.ACCOUNT_REMOVAL]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [eD.intl.string(eD.t.ZKsIkp)],
                parent: eN.s6.ACCOUNT,
            },
            [eN.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [eD.intl.string(eD.t.jf5GGR)],
                parent: eN.s6.ACCOUNT_REMOVAL,
            },
            [eN.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [eD.intl.string(eD.t["8lQ2ra"])],
                parent: eN.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eN.s6.GAMES]: {
                section: eP.oAB.GAMES,
                searchableTitles: [eD.intl.string(eD.t.URyqtL)],
                label: eD.intl.string(eD.t.URyqtL),
                ariaLabel: eD.intl.string(eD.t.URyqtL),
                element: eT.Z,
                predicate: () => eU,
            },
            [eN.s6.GAMES_MY_GAMES]: {
                section: eP.oAB.GAMES,
                searchableTitles: [eD.intl.string(eD.t["5DMgp6"])],
                parent: eN.s6.GAMES,
            },
            [eN.s6.GAMES_CLIPS]: {
                section: eP.oAB.GAMES,
                searchableTitles: [eD.intl.string(eD.t.z2jK6e)],
                parent: eN.s6.GAMES,
            },
            [eN.s6.GAMES_OVERLAY]: {
                section: eP.oAB.GAMES,
                searchableTitles: [eD.intl.string(eD.t["9cb1U1"])],
                parent: eN.s6.GAMES,
            },
            [eN.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eP.oAB.GAMES,
                searchableTitles: [eD.intl.string(eD.t.Cq98yM)],
                parent: eN.s6.GAMES,
            },
            [eN.s6.PROFILE_CUSTOMIZATION]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [eD.intl.string(eD.t["vi7f+v"])],
                label: eD.intl.string(eD.t["vi7f+v"]),
                ariaLabel: eD.intl.string(eD.t["vi7f+v"]),
                element: D.Z,
                newIndicator: (0, r.jsx)(eV, {}),
                newIndicatorDismissibleContentTypes: [...eF()],
                notice: {
                    stores: [G.Z, A.Z],
                    element: w.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, S.It)(), (0, u.P6)(), d.Z.clearSubsection(eP.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eP.Z5c.SETTINGS("profile-customization"),
            },
            [eN.s6.PROFILE_DISPLAY_NAME]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eD.intl.string(eD.t["9AjdkJ"])],
                parent: eN.s6.PROFILE_CUSTOMIZATION,
            },
            [eN.s6.PROFILE_USER_PROFILE]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eD.intl.string(eD.t["2p07FR"]), eD.intl.string(eD.t["7vhiqq"])],
                parent: eN.s6.PROFILE_CUSTOMIZATION,
            },
            [eN.s6.PROFILE_SERVER_PROFILES]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eD.intl.string(eD.t.kPHroa)],
                parent: eN.s6.PROFILE_CUSTOMIZATION,
            },
            [eN.s6.CONTENT_SOCIAL]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                label: eD.intl.string(eD.t["+o1pDQ"]),
                searchableTitles: [eD.intl.string(eD.t["+o1pDQ"])],
                ariaLabel: eD.intl.string(eD.t["+o1pDQ"]),
                element: ei.Z,
                url: eP.Z5c.SETTINGS("content-and-social"),
            },
            [eN.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t["+o1pDQ"]), eD.intl.string(eD.t["/7xJCA"])],
                parent: eN.s6.CONTENT_SOCIAL,
            },
            [eN.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t["+o1pDQ"]), eD.intl.string(eD.t["/7xJCA"])],
                parent: eN.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eN.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.YpCiMj)],
                parent: eN.s6.CONTENT_SOCIAL,
            },
            [eN.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                label: eD.intl.string(eD.t.YpCiMj),
                searchableTitles: [eD.intl.string(eD.t.YpCiMj)],
                ariaLabel: eD.intl.string(eD.t.YpCiMj),
                parent: eN.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eP.Z5c.SETTINGS(eP.oAB.CONTENT_AND_SOCIAL, eR.C),
            },
            [eN.s6.DATA_PRIVACY]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                label: eD.intl.string(eD.t.OAuOHB),
                searchableTitles: [eD.intl.string(eD.t.OAuOHB)],
                ariaLabel: eD.intl.string(eD.t.OAuOHB),
                element: ea.Z,
                url: eP.Z5c.SETTINGS("data-and-privacy"),
            },
            [eN.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [eD.intl.string(eD.t["Vov/9v"])],
                parent: eN.s6.ACCOUNT,
            },
            [eN.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.WWaFn5)],
                parent: eN.s6.DATA_PRIVACY,
                predicate: () => (0, V.isDesktop)(),
            },
            [eN.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t["opi/XF"])],
                parent: eN.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.xVRG4O)],
                parent: eN.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eN.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.fyA119)],
                parent: eN.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eN.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.fyA119)],
                parent: eN.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eN.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t["/U8Iwc"])],
                parent: eN.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eN.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t["ms+TmZ"])],
                parent: eN.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eN.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t["y62Z/f"])],
                parent: eN.s6.CONTENT_SOCIAL,
            },
            [eN.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.SRZyHh)],
                parent: eN.s6.DATA_PRIVACY,
            },
            [eN.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eD.intl.string(eD.t.uEz8JC),
                    eD.intl.string(eD.t["N/oRIy"]),
                    eD.intl.string(eD.t.QVdYsL),
                    eD.intl.string(eD.t["aWD+tr"]),
                    eD.intl.string(eD.t["5mnTa2"]),
                ],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eN.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eD.intl.string(eD.t["Hj/Bur"]),
                    eD.intl.string(eD.t["N/oRIy"]),
                    eD.intl.string(eD.t.QVdYsL),
                    eD.intl.string(eD.t["aWD+tr"]),
                    eD.intl.string(eD.t["5mnTa2"]),
                    eD.intl.string(eD.t.K0OWPz),
                ],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eN.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eD.intl.string(eD.t["Hj/Bur"]),
                    eD.intl.string(eD.t["N/oRIy"]),
                    eD.intl.string(eD.t.QVdYsL),
                    eD.intl.string(eD.t["aWD+tr"]),
                    eD.intl.string(eD.t["5mnTa2"]),
                ],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eN.s6.GORE_MEDIA_REDACTION]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eD.intl.string(eD.t["Hj/Bur"]),
                    eD.intl.string(eD.t["N/oRIy"]),
                    eD.intl.string(eD.t.QVdYsL),
                    eD.intl.string(eD.t["aWD+tr"]),
                    eD.intl.string(eD.t.K0OWPz),
                ],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eN.s6.PARENTAL_CONTROLS_SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eP.oAB.FAMILY_CENTER_PARENTAL_CONTROLS,
                parent: eN.s6.PRIVACY_FAMILY_CENTER,
                predicate: () => !1,
            },
            [eN.s6.PARENTAL_CONTROLS_GORE_MEDIA_REDACTION]: {
                section: eP.oAB.FAMILY_CENTER_PARENTAL_CONTROLS,
                parent: eN.s6.PRIVACY_FAMILY_CENTER,
                predicate: () => !1,
            },
            [eN.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eD.intl.string(eD.t.JzaP4u),
                    eD.intl.string(eD.t.H9XOl5),
                    eD.intl.string(eD.t.k4W40N),
                ],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eN.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t["L+yTsb"])],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eN.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.XahVjo)],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eN.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                parent: eN.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eN.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.RAQUSE), eD.intl.string(eD.t.wbYDfX)],
                parent: eN.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eN.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t["3o2ojo"])],
                parent: eN.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !eQ,
            },
            [eN.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.OLwZDQ)],
                parent: eN.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eN.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.wBkwu7)],
                parent: eN.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eN.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.XuADY2)],
                parent: eN.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eN.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.MNKzys)],
                parent: eN.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eN.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.VkS7YW), eD.intl.string(eD.t.sJYh5u)],
                parent: eN.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eN.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.CyLYKS)],
                parent: eN.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                predicate: () => e9,
            },
            [eN.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eN.CF],
                parent: eN.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eN.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.dmBSKi)],
                parent: eN.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eN.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t["1UaUy8"]), eD.intl.string(eD.t["xIk/iI"])],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eY,
            },
            [eN.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.qFsx5u)],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eK && !e1 && !ez,
            },
            [eN.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t["5b3FND"])],
                parent: eN.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => e2,
            },
            [eN.s6.PRIVACY_FAMILY_CENTER]: {
                section: eP.oAB.FAMILY_CENTER,
                searchableTitles: [eD.intl.string(ex.default.gntCQU)],
                label: eD.intl.string(ex.default.gntCQU),
                ariaLabel: eD.intl.string(ex.default.gntCQU),
                element: es.Z,
                badgeCount: T,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eD.intl.string(eD.t.y2b7CA),
                    color: v.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eP.Z5c.SETTINGS("family-center"),
            },
            [eN.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.BG7Qsb)],
                parent: eN.s6.DATA_PRIVACY,
            },
            [eN.s6.AUTHORIZED_APPS]: {
                section: eP.oAB.AUTHORIZED_APPS,
                searchableTitles: [eD.intl.string(eD.t["f6kk+v"])],
                label: eD.intl.string(eD.t["f6kk+v"]),
                element: et.Z,
                url: eP.Z5c.SETTINGS("authorized-apps"),
            },
            [eN.s6.SESSIONS]: {
                section: eP.oAB.SESSIONS,
                searchableTitles: [eD.intl.string(eD.t["+1h0k5"])],
                label: eD.intl.string(eD.t["+1h0k5"]),
                ariaLabel: eD.intl.string(eD.t["+1h0k5"]),
                element: em.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == I ? void 0 : I.source },
            },
            [eN.s6.CONNECTIONS]: {
                section: eP.oAB.CONNECTIONS,
                searchableTitles: [eD.intl.string(eD.t["3fe7U1"])],
                label: eD.intl.string(eD.t["3fe7U1"]),
                ariaLabel: eD.intl.string(eD.t["3fe7U1"]),
                element: er.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == I ? void 0 : I.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eP.Z5c.SETTINGS("connections"),
            },
            [eN.s6.THIRD_PARTY_ACCESS]: {
                section: eP.oAB.CONNECTIONS,
                searchableTitles: [
                    eD.intl.string(eD.t["Ig/XFR"]),
                    eD.intl.string(eD.t["3fe7U1"]),
                    eD.intl.string(eD.t["f6kk+v"]),
                ],
                label: eD.intl.string(eD.t["Ig/XFR"]),
                parent: eN.s6.CONNECTIONS,
                element: eb.Z,
            },
            [eN.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eP.oAB.CONNECTIONS,
                searchableTitles: [eD.intl.string(eD.t["+/hZMz"])],
                parent: eN.s6.CONNECTIONS,
                element: er.Z,
            },
            [eN.s6.CLIPS]: {
                section: eP.oAB.CLIPS,
                searchableTitles: [eD.intl.string(eD.t.z2jK6e)],
                label: eD.intl.string(eD.t.z2jK6e),
                ariaLabel: eD.intl.string(eD.t.z2jK6e),
                icon: ek ? (0, r.jsx)(b.Z, {}) : void 0,
                element: y.Z,
                predicate: () => !eU,
                url: eP.Z5c.SETTINGS("clips"),
            },
            [eN.s6.RESTRICTED_USERS]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                parent: eN.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eD.intl.string(eD.t["3wRorq"]),
                element: eS.ZP,
                predicate: () => e3 || e4,
            },
            [eN.s6.BLOCKED_USERS]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                parent: eN.s6.RESTRICTED_USERS,
                label: eD.intl.string(eD.t.PFOUKS),
                searchableTitles: [eD.intl.string(eD.t.PFOUKS)],
                element: eS.GF,
                predicate: () => e4,
            },
            [eN.s6.IGNORED_USERS]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                parent: eN.s6.RESTRICTED_USERS,
                searchableTitles: [eD.intl.string(eD.t["93ZDWF"])],
                label: eD.intl.string(eD.t["93ZDWF"]),
                element: eS.yo,
                predicate: () => e3,
            },
            [eN.s6.PREMIUM]: {
                section: eP.oAB.PREMIUM,
                ariaLabel: eD.intl.string(eD.t.Ipxkoq),
                searchableTitles: [eD.intl.string(eD.t.Ipxkoq)],
                label: eD.intl.string(eD.t.Ipxkoq),
                element: z.Z,
                className: eM.premiumTab,
            },
            [eN.s6.GUILD_BOOSTING]: {
                section: eP.oAB.GUILD_BOOSTING,
                searchableTitles: [eD.intl.string(eD.t["+CbP2t"])],
                label: eD.intl.string(eD.t["+CbP2t"]),
                element: ep.Z,
            },
            [eN.s6.SUBSCRIPTIONS]: {
                section: eP.oAB.SUBSCRIPTIONS,
                ariaLabel: eD.intl.string(eD.t.trSpHR),
                searchableTitles: [eD.intl.string(eD.t.trSpHR)],
                label: eD.intl.string(eD.t.trSpHR),
                element: P.Z,
                icon: h
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eN.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eP.oAB.SUBSCRIPTIONS,
                searchableTitles: [eD.intl.string(eD.t["2GKrvr"])],
                parent: eN.s6.SUBSCRIPTIONS,
            },
            [eN.s6.GIFT_INVENTORY]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eD.intl.string(eD.t["jcSP+v"])],
                label: eD.intl.string(eD.t["jcSP+v"]),
                element: ec.Z,
                ariaLabel: eD.intl.string(eD.t["jcSP+v"]),
                badgeCount: t,
            },
            [eN.s6.GIFT_CODE_REDEMPTION]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eD.intl.string(eD.t["il+VCg"])],
                parent: eN.s6.GIFT_INVENTORY,
                predicate: () => !eq,
            },
            [eN.s6.GIFT_INVENTORY_QUESTS]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eD.intl.string(eD.t.JALI2N)],
                parent: eN.s6.GIFT_INVENTORY,
                predicate: () => eX,
            },
            [eN.s6.GIFT_INVENTORY_LIST]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eD.intl.string(eD.t["9KeUbW"])],
                parent: eN.s6.GIFT_INVENTORY,
                predicate: () => !eq,
            },
            [eN.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eD.intl.string(eD.t.vwMEHR)],
                parent: eN.s6.GIFT_INVENTORY,
                predicate: () => eq,
            },
            [eN.s6.BILLING]: {
                section: eP.oAB.BILLING,
                searchableTitles: [eD.intl.string(eD.t.oeUm2t)],
                label: eD.intl.string(eD.t.oeUm2t),
                ariaLabel: eD.intl.string(eD.t.oeUm2t),
                element: en.Z,
            },
            [eN.s6.BILLING_PAYMENT_METHODS]: {
                section: eP.oAB.BILLING,
                searchableTitles: [eD.intl.string(eD.t.W26xGR)],
                parent: eN.s6.BILLING,
            },
            [eN.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eP.oAB.BILLING,
                searchableTitles: [eD.intl.string(eD.t.obLrcH)],
                parent: eN.s6.BILLING,
            },
            [eN.s6.APPEARANCE]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eD.intl.string(eD.t["iHH+k5"])],
                label: eD.intl.string(eD.t["iHH+k5"]),
                ariaLabel: eD.intl.string(eD.t["iHH+k5"]),
                element: ee.Z,
                newIndicator: (0, r.jsx)(eZ, {}),
                newIndicatorDismissibleContentTypes: eB(),
                url: eP.Z5c.SETTINGS("appearance"),
            },
            [eN.s6.APPEARANCE_THEME]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eD.intl.string(eD.t.Ksh3io)],
                parent: eN.s6.APPEARANCE,
            },
            [eN.s6.APPEARANCE_COLOR]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eD.intl.string(eD.t.OCOOiI)],
                parent: eN.s6.APPEARANCE_THEME,
            },
            [eN.s6.APPEARANCE_ICON]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eD.intl.string(eD.t.RPh2oq)],
                parent: eN.s6.APPEARANCE_THEME,
            },
            [eN.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eD.intl.string(eD.t.ZEoGMT)],
                parent: eN.s6.APPEARANCE,
            },
            [eN.s6.APPEARANCE_LIST_SPACING]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eN.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eD.intl.string(eD.t.y2b7CA),
                    color: v.Z.BG_BRAND,
                }),
            },
            [eN.s6.APPEARANCE_SCALING_SPACING]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eD.intl.string(eD.t.qPOqoK)],
                parent: eN.s6.APPEARANCE,
            },
            [eN.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [
                    eD.intl.string(eD.t.dyamEB),
                    eD.intl.string(eD.t.p8NOws),
                    eD.intl.string(eD.t["+o/sOj"]),
                ],
                parent: eN.s6.APPEARANCE,
                predicate: () =>
                    L.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eN.s6.ACCESSIBILITY]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.G0neg4)],
                label: eD.intl.string(eD.t.G0neg4),
                ariaLabel: eD.intl.string(eD.t.G0neg4),
                element: X.Z,
                url: eP.Z5c.SETTINGS("accessibility"),
            },
            [eN.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.aZlePj)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_SWITCH_ICON]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t["S3z+pa"])],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_SATURATION]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t["5PWWCQ"])],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.bQCodH)],
                parent: eN.s6.ACCESSIBILITY_SATURATION,
            },
            [eN.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.OLZFBw)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t["+IsihY"])],
                parent: eN.s6.ACCESSIBILITY,
                predicate: () => (0, O.l)("SettingsRendererConfig"),
            },
            [eN.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.uSOPWl)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eL.default["2gFUEx"])],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.BT8Bmp)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t["sSY+mJ"])],
                parent: eN.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eN.s6.ACCESSIBILITY_CONTRAST]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.TYyfOz)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.cguieX)],
                parent: eN.s6.ACCESSIBILITY_CONTRAST,
            },
            [eN.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.e3TR1d)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.b3XBzs)],
                parent: eN.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eN.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.Iayoh4)],
                parent: eN.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eN.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.iIaOlZ)],
                parent: eN.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eN.s6.ACCESSIBILITY_STICKERS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t["6NtAuL"])],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_MESSAGES]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.onqU6u)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t["3Fztn5"])],
                parent: eN.s6.ACCESSIBILITY_MESSAGES,
            },
            [eN.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.TZ2hZG)],
                parent: eN.s6.ACCESSIBILITY_MESSAGES,
            },
            [eN.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.VpSKeH)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.qvTIwc)],
                parent: eN.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eN.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.lsW5Eh)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eN.CF],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.VOICE_AND_VIDEO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.B1fFpa)],
                label: eD.intl.string(eD.t.B1fFpa),
                ariaLabel: eD.intl.string(eD.t.B1fFpa),
                element: eA.Z,
                predicate: () => U.Z.isSupported(),
                url: eP.Z5c.SETTINGS("voice"),
            },
            [eN.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.K3lovL), eD.intl.string(eD.t.NiTd0d)],
                parent: eN.s6.VOICE_AND_VIDEO,
            },
            [eN.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.FlNoSU)],
                parent: eN.s6.VOICE_AND_VIDEO,
            },
            [eN.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.ABjMWF)],
                parent: eN.s6.VOICE_AND_VIDEO,
            },
            [eN.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.OFpL3d)],
                parent: eN.s6.VOICE_AND_VIDEO,
            },
            [eN.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.KDdjoq), eD.intl.string(eD.t.FeUKeH)],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eN.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.K3lovL), eD.intl.string(eD.t.NiTd0d)],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eN.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eP.oAB.VOICE,
                searchableTitles: [
                    eD.intl.string(eD.t.hHMYbW),
                    eD.intl.string(eD.t.dl18zc),
                    eD.intl.string(eD.t.nuFtHB),
                    eD.intl.string(eD.t["3182VF"]),
                    eD.intl.string(eD.t["DGq/PT"]),
                ],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eN.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [
                    eD.intl.string(eD.t.OX2Bnp),
                    eD.intl.string(eD.t.eATD2N),
                    eD.intl.string(eD.t.nuFtHB),
                    eD.intl.string(eD.t["3182VF"]),
                    eD.intl.string(eD.t["DGq/PT"]),
                ],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eN.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.gyljWF), eD.intl.string(eD.t.nuFtHB)],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eN.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eP.oAB.VOICE,
                searchableTitles: [
                    eD.intl.string(eD.t.LM3U3t),
                    eD.intl.string(eD.t.nuFtHB),
                    eD.intl.string(eD.t.VZPR0d),
                    eD.intl.string(eD.t.cjPbpa),
                ],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, K.P)({ location: "SettingsRendererConfig" });
                    return e.length > 0;
                },
            },
            [eN.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["pS+K2N"]), eD.intl.string(eD.t.nuFtHB)],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => e6 !== eC._.STUDIO,
            },
            [eN.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["sqUm+v"]), eD.intl.string(eD.t.nuFtHB)],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => e5 === ew.pM.VOICE_ACTIVITY && e7,
            },
            [eN.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.e7LIiY)],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eN.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.nzUc3N)],
                parent: eN.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eN.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.ABjMWF)],
                parent: eN.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eN.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.nzUc3N)],
                parent: eN.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eN.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.LKzQSE)],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eN.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.F122Gx)],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => U.Z.supports(ew.AN.VIDEO),
            },
            [eN.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["3Ppr1t"])],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eN.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.lZTUPj)],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => U.Z.supports(ew.AN.VIDEO),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["8/udY2"])],
                parent: eN.s6.VOICE_AND_VIDEO,
            },
            [eN.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["8/udY2"])],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO_TAB,
                predicate: () => !(0, V.isWeb)(),
            },
            [eN.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["8/udY2"])],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.Tceiq6)],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO_ADVANCED,
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["71Ve19"])],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => U.Z.supports(ew.AN.OPEN_H264),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.Sln58f)],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.AxnPm5)],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => "stable" !== H.ZP.releaseChannel && U.Z.isExperimentalEncodersSupported(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["6I6GUl"])],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => e7,
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.iWTwu7)],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["/jwMtr"])],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eN.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.OBwCXF)],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.t8QhiY), eD.intl.string(eD.t.hmfkCg)],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => U.Z.isNoiseSuppressionSupported(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.BbESsr)],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => U.Z.isAdvancedVoiceActivitySupported(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.cUMdHx)],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => U.Z.isAutomaticGainControlSupported(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.DFPXIC)],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => U.Z.showBypassSystemInputProcessing(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.uancuL)],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => U.Z.supports(ew.AN.QOS),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.oSdBvb)],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => U.Z.supports(ew.AN.ATTENUATION),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.wVBHr6)],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => U.Z.shouldOfferManualSubsystemSelection(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eP.oAB.VOICE,
                searchableTitles: [
                    eD.intl.string(eD.t.KDdjoq),
                    eD.intl.string(eD.t.NMCIf3),
                    eD.intl.string(eD.t.FeUKeH),
                ],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    U.Z.supportsVideoHook() ||
                    U.Z.supportsExperimentalSoundshare() ||
                    (U.Z.supportsSystemScreensharePicker() && (0, V.isMac)()),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.GmWk2N), eD.intl.string(eD.t["Fj/xn5"])],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => U.Z.supportsVideoHook(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["4I0qzc"])],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => U.Z.supportsExperimentalSoundshare() && U.Z.supportsHookSoundshare(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.ie1mgY)],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => U.Z.supportsSystemScreensharePicker() && (0, V.isMac)(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["aP1N/v"])],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => V.isPlatformEmbedded,
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.OFpL3d)],
                parent: eN.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["0CEP6e"])],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => Y.Sb.getSetting(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["r6K+TE"])],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => U.Z.isAecDumpSupported(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.U4FgFB)],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === H.ZP.releaseChannel || "development" === H.ZP.releaseChannel) &&
                    eW &&
                    U.Z.supports(ew.AN.CONNECTION_REPLAY),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["726JHB"])],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    V.isPlatformEmbedded && U.Z.supports(ew.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [eN.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["/RXu6+"])],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eN.s6.POGGERMODE]: {
                section: eP.oAB.POGGERMODE,
                searchableTitles: [eD.intl.string(eD.t.AtCukJ)],
                label: eD.intl.string(eD.t.AtCukJ),
                ariaLabel: eD.intl.string(eD.t.AtCukJ),
                element: R.Z,
                predicate: () => N.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: eM.poggermodeIcon,
                }),
            },
            [eN.s6.CHAT]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t["/VQax8"])],
                label: eD.intl.string(eD.t["/VQax8"]),
                ariaLabel: eD.intl.string(eD.t["/VQax8"]),
                element: eE.Z,
                url: eP.Z5c.SETTINGS("text"),
            },
            [eN.s6.MESSAGE_SEARCH]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.VYODPD)],
                parent: eN.s6.CHAT,
                predicate: () => tt,
            },
            [eN.s6.MESSAGE_SEARCH_ALL_DMS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t["t4+fbW"])],
                parent: eN.s6.MESSAGE_SEARCH,
                predicate: () => tt,
            },
            [eN.s6.CHAT_INLINE_MEDIA]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.U68Dgo)],
                parent: eN.s6.CHAT,
            },
            [eN.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.U47N1t)],
                parent: eN.s6.CHAT_INLINE_MEDIA,
            },
            [eN.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.VP11Nj)],
                parent: eN.s6.CHAT_INLINE_MEDIA,
            },
            [eN.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t["5S2AKy"])],
                parent: eN.s6.CHAT_INLINE_MEDIA,
            },
            [eN.s6.CHAT_EMBEDS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.PWZOn5)],
                parent: eN.s6.CHAT,
            },
            [eN.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.xX0ZTE)],
                parent: eN.s6.CHAT_EMBEDS,
            },
            [eN.s6.CHAT_EMOJI]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.sMOuub)],
                parent: eN.s6.CHAT,
            },
            [eN.s6.CHAT_EMOJI_REACTIONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.Iv24sr)],
                parent: eN.s6.CHAT_EMOJI,
            },
            [eN.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t["79qal5"])],
                parent: eN.s6.CHAT_EMOJI,
            },
            [eN.s6.CHAT_STICKERS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t["6NtAuL"])],
                parent: eN.s6.CHAT,
            },
            [eN.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t["29xPVV"])],
                parent: eN.s6.CHAT_STICKERS,
            },
            [eN.s6.CHAT_SOUNDMOJI]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.EHlAMT)],
                parent: eN.s6.CHAT,
            },
            [eN.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t["CtYr+f"])],
                parent: eN.s6.CHAT_SOUNDMOJI,
            },
            [eN.s6.CHAT_TEXT_BOX]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.afR0pK)],
                parent: eN.s6.CHAT,
            },
            [eN.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.AqGrEB)],
                parent: eN.s6.CHAT_TEXT_BOX,
            },
            [eN.s6.CHAT_THREADS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.B2panJ)],
                parent: eN.s6.CHAT,
            },
            [eN.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.AInv5u)],
                parent: eN.s6.CHAT_THREADS,
            },
            [eN.s6.CHAT_SPOILERS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.QgwmV1)],
                parent: eN.s6.CHAT,
            },
            [eN.s6.CHAT_MENTION_SUGGESTIONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.uXQ2xc)],
                parent: eN.s6.CHAT_TEXT_BOX,
                predicate: () => te,
            },
            [eN.s6.NOTIFICATIONS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.HcoRu7)],
                label: eD.intl.string(eD.t.HcoRu7),
                ariaLabel: eD.intl.string(eD.t.HcoRu7),
                element: ef.Z,
                url: eP.Z5c.SETTINGS("notifications"),
            },
            [eN.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t["/0WClp"])],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.VH8AIC)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.xSmFQE)],
                parent: eN.s6.NOTIFICATIONS,
                predicate: () => (0, V.isWindows)(),
            },
            [eN.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ["New Unreads Setting (Experimental)"],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.TTvjd3)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.VpSKeH)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.D9yVAA)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.u6dc5O)],
                parent: eN.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eN.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.P8MG6u)],
                parent: eN.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eN.s6.NOTIFICATIONS_SOUNDS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.MKWyKS)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_EMAILS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.TPchzM)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t["B75+xc"])],
                parent: eN.s6.NOTIFICATIONS_EMAILS,
            },
            [eN.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.sxn7lZ)],
                parent: eN.s6.NOTIFICATIONS_EMAILS,
            },
            [eN.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.EkxXhY)],
                parent: eN.s6.NOTIFICATIONS_EMAILS,
            },
            [eN.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.jNrkrK)],
                parent: eN.s6.NOTIFICATIONS_EMAILS,
            },
            [eN.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.E8g1l5)],
                parent: eN.s6.NOTIFICATIONS_EMAILS,
            },
            [eN.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.Ra9Pws)],
                parent: eN.s6.NOTIFICATIONS_EMAILS,
            },
            [eN.s6.NOTIFICATIONS_REACTIONS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.Rq0NFh)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.wtk08f)],
                parent: eN.s6.NOTIFICATIONS,
                predicate: () => (0, M.JN)("SettingsRendererConfig"),
            },
            [eN.s6.NOTIFICATIONS_FRIEND_ONLINE]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t["uvIi//"])],
                parent: eN.s6.NOTIFICATIONS,
                predicate: () => (0, C.bH)("SettingsRendererConfig"),
            },
            [eN.s6.NOTIFICATIONS_USER_RESURRECTION]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.Zyn45e)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.pW4TMj)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.KEYBINDS]: {
                section: eP.oAB.KEYBINDS,
                searchableTitles: [eD.intl.string(eD.t.T9DA2N)],
                label: eD.intl.string(eD.t.T9DA2N),
                element: eu.Z,
                url: eP.Z5c.SETTINGS("keybinds"),
            },
            [eN.s6.LANGUAGE]: {
                section: eP.oAB.LOCALE,
                searchableTitles: [eD.intl.string(eD.t.IHMsPj)],
                label: eD.intl.string(eD.t.IHMsPj),
                element: ed.Z,
                url: eP.Z5c.SETTINGS("language"),
            },
            [eN.s6.WINDOW_SETTINGS]: {
                section: eP.oAB.WINDOWS,
                searchableTitles: [eD.intl.string(eD.t.ZkDZoq)],
                label: eD.intl.string(eD.t.ZkDZoq),
                element: ey.Z,
                predicate: () => V.isPlatformEmbedded && (0, V.isWindows)(),
            },
            [eN.s6.LINUX_SETTINGS]: {
                section: eP.oAB.LINUX,
                searchableTitles: [eD.intl.string(eD.t["7pPjTU"])],
                label: eD.intl.string(eD.t["7pPjTU"]),
                element: eH,
                predicate: () => V.isPlatformEmbedded && (0, V.isLinux)(),
            },
            [eN.s6.STREAMER_MODE]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eD.intl.string(eD.t.S5GfOT)],
                label: eD.intl.string(eD.t.S5GfOT),
                ariaLabel: eD.intl.string(eD.t.S5GfOT),
                element: eg.Z,
                url: eP.Z5c.SETTINGS("streamer-mode"),
            },
            [eN.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eD.intl.string(eD.t.bxGbHB)],
                parent: eN.s6.STREAMER_MODE,
            },
            [eN.s6.STREAMER_MODE_ENABLE]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eD.intl.string(eD.t.p9ZAJS)],
                parent: eN.s6.STREAMER_MODE,
            },
            [eN.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eD.intl.string(eD.t.UpQziI)],
                parent: eN.s6.STREAMER_MODE,
            },
            [eN.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eD.intl.string(eD.t.q7WNGh)],
                parent: eN.s6.STREAMER_MODE,
            },
            [eN.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eD.intl.string(eD.t["1CWknJ"])],
                parent: eN.s6.STREAMER_MODE,
            },
            [eN.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eD.intl.string(eD.t.qmYiYW)],
                parent: eN.s6.STREAMER_MODE,
            },
            [eN.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eD.intl.string(eD.t["iA81+f"])],
                parent: eN.s6.STREAMER_MODE,
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
            [eN.s6.SETTINGS_ADVANCED]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eD.intl.string(eD.t["8/udY2"])],
                label: eD.intl.string(eD.t["8/udY2"]),
                ariaLabel: eD.intl.string(eD.t["8/udY2"]),
                element: $.ZP,
            },
            [eN.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eD.intl.string(eD.t.ObIb1d)],
                parent: eN.s6.SETTINGS_ADVANCED,
                predicate: () => Z.wS,
            },
            [eN.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eD.intl.string(eD.t["eOC/Fx"])],
                parent: eN.s6.SETTINGS_ADVANCED,
                predicate: () => V.isPlatformEmbedded,
            },
            [eN.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eD.intl.string(eD.t.fi3UQE)],
                parent: eN.s6.SETTINGS_ADVANCED,
                predicate: () => eJ,
            },
            [eN.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eD.intl.string(eD.t.erOqlp)],
                parent: eN.s6.SETTINGS_ADVANCED,
                predicate: () => e0,
            },
            [eN.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eD.intl.string(eD.t.qDZryM)],
                parent: eN.s6.SETTINGS_ADVANCED,
            },
            [eN.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: eN.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    g.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [eN.s6.ACTIVITY_PRIVACY]: {
                section: eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.Cq98yM)],
                label: eD.intl.string(eD.t.Cq98yM),
                ariaLabel: eD.intl.string(eD.t.Cq98yM),
                element: J.Z,
                predicate: () => !eU,
                url: eP.Z5c.SETTINGS("activity-privacy"),
            },
            [eN.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eU ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t["8ka8lp"])],
                parent: eU ? eN.s6.GAMES_ACTIVITY_PRIVACY : eN.s6.ACTIVITY_PRIVACY,
            },
            [eN.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eU ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.VOszPD)],
                parent: eU ? eN.s6.GAMES_ACTIVITY_PRIVACY : eN.s6.ACTIVITY_PRIVACY,
            },
            [eN.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eU ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eN.CF],
                parent: eU ? eN.s6.GAMES_ACTIVITY_PRIVACY : eN.s6.ACTIVITY_PRIVACY,
            },
            [eN.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t["4F2KoK"])],
                parent: eN.s6.ACTIVITY_PRIVACY,
            },
            [eN.s6.REGISTERED_GAMES]: {
                section: eP.oAB.REGISTERED_GAMES,
                searchableTitles: [eD.intl.string(eD.t.AVDyEh)],
                label: eD.intl.string(eD.t.AVDyEh),
                element: el.Z,
                predicate: () => !eU && (0, eI.Jw)(),
            },
            [eN.s6.OVERLAY]: {
                section: eP.oAB.OVERLAY,
                searchableTitles: [eD.intl.string(eD.t["9cb1U1"]), eD.intl.string(eD.t.HcoRu7)],
                label: eD.intl.string(eD.t["9cb1U1"]),
                element: e_.Z,
                predicate: () => !eU && x,
            },
            [eN.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, E.Z)(!0),
                searchableTitles: [eD.intl.string(eD.t.LRmNAg)],
                label: eD.intl.string(eD.t.LRmNAg),
            },
            [eN.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    B.default.track(eP.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, F.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                B.default.track(eP.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, p.Z)(e);
                            },
                        });
                },
                searchableTitles: [eD.intl.string(eD.t.sMEktb)],
                label: eD.intl.string(eD.t.sMEktb),
                ariaLabel: eD.intl.string(eD.t.sMEktb),
            },
            [eN.s6.EXPERIMENTS]: {
                section: eP.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: ev.Z,
                predicate: () => k.Z.isDeveloper,
                url: eP.Z5c.SETTINGS("experiments"),
            },
            [eN.s6.DEVELOPER_OPTIONS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: eo.Z,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eN.s6.DEVELOPER_OPTIONS,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eN.s6.DEVELOPER_OPTIONS,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eN.s6.DEVELOPER_OPTIONS,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eN.s6.DEVELOPER_OPTIONS,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eN.s6.DEVELOPER_OPTIONS,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eN.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eN.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eN.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eN.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eN.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eN.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eN.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eW && k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eN.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eN.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eN.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eW && k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eN.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eN.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eN.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eW && k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_HIGHLIGHT_MANA_COMPONENTS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Mana Components"],
                parent: eN.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eW && k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Void Toggleable Components"],
                parent: eN.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eW && k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eN.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eW && k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eN.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eW && k.Z.isDeveloper && j.default.layoutDebuggingEnabled,
            },
            [eN.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eN.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eW && k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eN.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eW && k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eN.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eN.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eN.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eN.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eN.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eN.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => m.q && k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_SHOW_TOTP_SUCCESS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Show TOTP Success"],
                parent: eN.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eN.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eN.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eN.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eN.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eN.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eN.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM]: {
                section: f.ID.CUSTOM,
                searchableTitles: eO.Y,
                label: "Developer Education",
                element: eO.$,
                predicate: () => k.Z.isDeveloper,
            },
            [eN.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            eG(
                                ej(
                                    {
                                        header: eD.intl.string(eD.t["2jxGen"]),
                                        confirmText: eD.intl.string(eD.t["2jxGen"]),
                                        cancelText: eD.intl.string(eD.t["ETE/oK"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: eD.intl.string(eD.t.SUnWBA),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: eD.intl.string(eD.t["2jxGen"]),
                ariaLabel: eD.intl.string(eD.t["2jxGen"]),
                icon: (0, r.jsx)(s.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [eN.s6.SOCIAL_LINKS]: {
                section: f.ID.CUSTOM,
                element: q.Z,
            },
            [eN.s6.CLIENT_DEBUG_INFO]: {
                section: f.ID.CUSTOM,
                element: W.Z,
            },
        });
    };
