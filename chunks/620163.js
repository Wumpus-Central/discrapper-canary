n.d(t, {
    $Z: () => eZ,
    OF: () => eV,
    W8: () => eH,
    c$: () => eF,
    iE: () => eW,
}),
    n(539854),
    n(388685);
var r = n(54381),
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
    O = n(296812),
    v = n(377171),
    I = n(243778),
    T = n(594928),
    S = n(18438),
    A = n(778825),
    C = n(288047),
    N = n(351780),
    R = n(231765),
    P = n(125900),
    D = n(813732),
    w = n(398140),
    x = n(564344),
    L = n(145158),
    M = n(172416),
    k = n(462354),
    j = n(906467),
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
    eD = n(981631),
    ew = n(65154),
    ex = n(388032),
    eL = n(88406),
    eM = n(597754),
    ek = n(202323);
function ej(e, t, n) {
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
                ej(e, t, n[t]);
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
    eF = () => {
        let e = eZ(),
            [t] = (0, I.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: ex.intl.string(ex.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ||
                t === a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE
              ? (0, r.jsx)(s.IGR, { text: ex.intl.string(ex.t.y2b7CA) })
              : null;
    },
    eV = () => {
        let e = [];
        return (
            (0, M.hL)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            T.JH.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    eH = () => {
        let e = eV(),
            [t] = (0, I.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: ex.intl.string(ex.t.y2b7CA) })
            : null;
    },
    eY = eO.Z,
    eW = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: h,
            searchParams: I,
            numOfPendingFamilyRequests: T,
            isOverlaySupported: M,
            isClipsBetaTagShowing: ej = !1,
            shouldMergeGameSettings: eG,
            isKeywordFilteringEnabled: eW,
            isStaff: eK,
            isInappropriateConversationWarningEnabled: ez,
            isInapproprateConversationsDefaultOn: eq,
            paymentsBlocked: eX,
            isEligibleForQuests: eQ,
            isStricterMessageRequestsEnabled: eJ,
            hasLibraryApplication: e$,
            hasTOTPEnabled: e0,
            developerMode: e1,
            isAdultUser: e3,
            hasSecureFramesVerifiedUserIds: e2,
            hasIgnoredUsers: e4,
            hasBlockedUsers: e5,
            isEligibleForSensitiveContentDefaults: e8,
            inputMode: e6,
            activeInputProfile: e7,
            isInputProfileCustom: e9,
            isDataUsage3PToggleEnabled: te,
            isChatMentionSuggestionsSettingEnabled: tt,
            isCrossDMSearchEnabledSettingVisible: tn,
        } = e;
        return Object.freeze({
            [eR.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: em.Z,
            },
            [eR.s6.ACCOUNT_SECURITY_TAB]: {
                section: eD.oAB.ACCOUNT,
                searchableTitles: [ex.intl.string(ex.t.Am9YHi)],
                label: ex.intl.string(ex.t.Am9YHi),
            },
            [eR.s6.ACCOUNT]: {
                section: eD.oAB.ACCOUNT,
                searchableTitles: [ex.intl.string(ex.t["JAIM/m"])],
                label: ex.intl.string(ex.t["JAIM/m"]),
                ariaLabel: ex.intl.string(ex.t["JAIM/m"]),
                element: J.Z,
                url: eD.Z5c.SETTINGS("account"),
            },
            [eR.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [ex.intl.string(ex.t.LYju5J)],
                parent: eR.s6.ACCOUNT,
                section: eD.oAB.ACCOUNT,
            },
            [eR.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [ex.intl.string(ex.t["9AjdkD"])],
                section: eD.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_PROFILE,
            },
            [eR.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [ex.intl.string(ex.t.Ulqq6K)],
                section: eD.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_PROFILE,
            },
            [eR.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    ex.intl.string(ex.t["/52UYy"]),
                    ex.intl.string(ex.t.sK0dmH),
                    ex.intl.string(ex.t.XxRj7f),
                    ex.intl.string(ex.t.yNGjyK),
                    ex.intl.string(ex.t.KPGVWl),
                ],
                section: eD.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_PROFILE,
                predicate: () => e8,
            },
            [eR.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [ex.intl.string(ex.t["+JkHPw"])],
                section: eD.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_PROFILE,
            },
            [eR.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [ex.intl.string(ex.t.oP5zGA)],
                section: eD.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_PROFILE,
            },
            [eR.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [ex.intl.string(ex.t.pKSjEj)],
                section: eD.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT,
            },
            [eR.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [ex.intl.string(ex.t["FRep5/"])],
                section: eD.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eR.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [ex.intl.string(ex.t["7qKDrE"])],
                section: eD.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [ex.intl.string(ex.t.m0FidJ)],
                section: eD.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eR.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [ex.intl.string(ex.t.cDgKte)],
                section: eD.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e0,
            },
            [eR.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [ex.intl.string(ex.t["D+aE7g"])],
                section: eD.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e0,
            },
            [eR.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [ex.intl.string(ex.t.fZSi1D)],
                section: eD.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eR.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [ex.intl.string(ex.t.uHAJ5v)],
                section: eD.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eR.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [ex.intl.string(ex.t.vrOCCk)],
                section: eD.oAB.ACCOUNT,
                parent: eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eR.s6.ACCOUNT_REMOVAL]: {
                section: eD.oAB.ACCOUNT,
                searchableTitles: [ex.intl.string(ex.t.ZKsIks)],
                parent: eR.s6.ACCOUNT,
            },
            [eR.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eD.oAB.ACCOUNT,
                searchableTitles: [ex.intl.string(ex.t.jf5GGb)],
                parent: eR.s6.ACCOUNT_REMOVAL,
            },
            [eR.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eD.oAB.ACCOUNT,
                searchableTitles: [ex.intl.string(ex.t["8lQ2rR"])],
                parent: eR.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eR.s6.GAMES]: {
                section: eD.oAB.GAMES,
                searchableTitles: [ex.intl.string(ex.t.URyqtP)],
                label: ex.intl.string(ex.t.URyqtP),
                ariaLabel: ex.intl.string(ex.t.URyqtP),
                element: eS.Z,
                predicate: () => eG,
            },
            [eR.s6.GAMES_MY_GAMES]: {
                section: eD.oAB.GAMES,
                searchableTitles: [ex.intl.string(ex.t["5DMgp9"])],
                parent: eR.s6.GAMES,
            },
            [eR.s6.GAMES_CLIPS]: {
                section: eD.oAB.GAMES,
                searchableTitles: [ex.intl.string(ex.t.z2jK6X)],
                parent: eR.s6.GAMES,
            },
            [eR.s6.GAMES_OVERLAY]: {
                section: eD.oAB.GAMES,
                searchableTitles: [ex.intl.string(ex.t["9cb1Uz"])],
                parent: eR.s6.GAMES,
            },
            [eR.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eD.oAB.GAMES,
                searchableTitles: [ex.intl.string(ex.t.Cq98yL)],
                parent: eR.s6.GAMES,
            },
            [eR.s6.PROFILE_CUSTOMIZATION]: {
                section: eD.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [ex.intl.string(ex.t["vi7f+q"])],
                label: ex.intl.string(ex.t["vi7f+q"]),
                ariaLabel: ex.intl.string(ex.t["vi7f+q"]),
                element: x.Z,
                newIndicator: (0, r.jsx)(eH, {}),
                newIndicatorDismissibleContentTypes: [...eV()],
                notice: {
                    stores: [B.Z, A.Z],
                    element: w.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, S.It)(), (0, u.P6)(), d.Z.clearSubsection(eD.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eD.Z5c.SETTINGS("profile-customization"),
            },
            [eR.s6.PROFILE_DISPLAY_NAME]: {
                section: eD.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ex.intl.string(ex.t["9AjdkD"])],
                parent: eR.s6.PROFILE_CUSTOMIZATION,
            },
            [eR.s6.PROFILE_USER_PROFILE]: {
                section: eD.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ex.intl.string(ex.t["2p07FR"]), ex.intl.string(ex.t["7vhiqk"])],
                parent: eR.s6.PROFILE_CUSTOMIZATION,
            },
            [eR.s6.PROFILE_SERVER_PROFILES]: {
                section: eD.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ex.intl.string(ex.t.kPHroX)],
                parent: eR.s6.PROFILE_CUSTOMIZATION,
            },
            [eR.s6.CONTENT_SOCIAL]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                label: ex.intl.string(ex.t["+o1pDZ"]),
                searchableTitles: [ex.intl.string(ex.t["+o1pDZ"])],
                ariaLabel: ex.intl.string(ex.t["+o1pDZ"]),
                element: ea.Z,
                url: eD.Z5c.SETTINGS("content-and-social"),
            },
            [eR.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t["+o1pDZ"]), ex.intl.string(ex.t["/7xJCF"])],
                parent: eR.s6.CONTENT_SOCIAL,
            },
            [eR.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t["+o1pDZ"]), ex.intl.string(ex.t["/7xJCF"])],
                parent: eR.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eR.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t.YpCiMt)],
                parent: eR.s6.CONTENT_SOCIAL,
            },
            [eR.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                label: ex.intl.string(ex.t.YpCiMt),
                searchableTitles: [ex.intl.string(ex.t.YpCiMt)],
                ariaLabel: ex.intl.string(ex.t.YpCiMt),
                parent: eR.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eD.Z5c.SETTINGS(eD.oAB.CONTENT_AND_SOCIAL, eP.C),
            },
            [eR.s6.DATA_PRIVACY]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                label: ex.intl.string(ex.t.OAuOHD),
                searchableTitles: [ex.intl.string(ex.t.OAuOHD)],
                ariaLabel: ex.intl.string(ex.t.OAuOHD),
                element: eo.Z,
                url: eD.Z5c.SETTINGS("data-and-privacy"),
            },
            [eR.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eD.oAB.ACCOUNT,
                searchableTitles: [ex.intl.string(ex.t["Vov/9o"])],
                parent: eR.s6.ACCOUNT,
            },
            [eR.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ex.intl.string(ex.t.WWaFn5)],
                parent: eR.s6.DATA_PRIVACY,
                predicate: () => (0, H.isDesktop)(),
            },
            [eR.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ex.intl.string(ex.t["opi/XK"])],
                parent: eR.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t.xVRG4P)],
                parent: eR.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eR.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t.fyA115)],
                parent: eR.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eR.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t.fyA115)],
                parent: eR.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eR.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t["/U8Iwa"])],
                parent: eR.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eR.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t["ms+Tme"])],
                parent: eR.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eR.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t["y62Z/d"])],
                parent: eR.s6.CONTENT_SOCIAL,
            },
            [eR.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ex.intl.string(ex.t.SRZyHg)],
                parent: eR.s6.DATA_PRIVACY,
            },
            [eR.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ex.intl.string(ex.t.uEz8JF),
                    ex.intl.string(ex.t["N/oRI+"]),
                    ex.intl.string(ex.t.QVdYsK),
                    ex.intl.string(ex.t["aWD+tu"]),
                    ex.intl.string(ex.t["5mnTa7"]),
                ],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eR.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ex.intl.string(ex.t["Hj/But"]),
                    ex.intl.string(ex.t["N/oRI+"]),
                    ex.intl.string(ex.t.QVdYsK),
                    ex.intl.string(ex.t["aWD+tu"]),
                    ex.intl.string(ex.t["5mnTa7"]),
                    ex.intl.string(ex.t["K0OWP+"]),
                ],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eR.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ex.intl.string(ex.t["Hj/But"]),
                    ex.intl.string(ex.t["N/oRI+"]),
                    ex.intl.string(ex.t.QVdYsK),
                    ex.intl.string(ex.t["aWD+tu"]),
                    ex.intl.string(ex.t["5mnTa7"]),
                ],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eR.s6.GORE_MEDIA_REDACTION]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ex.intl.string(ex.t["Hj/But"]),
                    ex.intl.string(ex.t["N/oRI+"]),
                    ex.intl.string(ex.t.QVdYsK),
                    ex.intl.string(ex.t["aWD+tu"]),
                    ex.intl.string(ex.t["K0OWP+"]),
                ],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eR.s6.PARENTAL_CONTROLS_SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eD.oAB.FAMILY_CENTER_PARENTAL_CONTROLS,
                parent: eR.s6.PRIVACY_FAMILY_CENTER,
                predicate: () => !1,
            },
            [eR.s6.PARENTAL_CONTROLS_GORE_MEDIA_REDACTION]: {
                section: eD.oAB.FAMILY_CENTER_PARENTAL_CONTROLS,
                parent: eR.s6.PRIVACY_FAMILY_CENTER,
                predicate: () => !1,
            },
            [eR.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ex.intl.string(ex.t.JzaP4h),
                    ex.intl.string(ex.t.H9XOl3),
                    ex.intl.string(ex.t.k4W40P),
                ],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eR.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t["L+yTsa"])],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eR.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t.XahVjj)],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eR.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                parent: eR.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eR.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t.RAQUSN), ex.intl.string(ex.t.wbYDfT)],
                parent: eR.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eR.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t["3o2ojh"])],
                parent: eR.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !eJ,
            },
            [eR.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t.OLwZDV)],
                parent: eR.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eR.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t.wBkwux)],
                parent: eR.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eR.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ex.intl.string(ex.t.XuADY2)],
                parent: eR.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eR.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ex.intl.string(ex.t.MNKzyg)],
                parent: eR.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eR.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ex.intl.string(ex.t.VkS7Yd), ex.intl.string(ex.t.sJYh5t)],
                parent: eR.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eR.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ex.intl.string(ex.t.CyLYKZ)],
                parent: eR.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                predicate: () => te,
            },
            [eR.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eR.CF],
                parent: eR.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eR.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ex.intl.string(ex.t.dmBSKo)],
                parent: eR.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eR.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t["1UaUy+"]), ex.intl.string(ex.t["xIk/iF"])],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eW,
            },
            [eR.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ex.intl.string(ex.t.qFsx5q)],
                parent: eR.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => ez && !e3 && !eq,
            },
            [eR.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ex.intl.string(ex.t["5b3FNI"])],
                parent: eR.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => e2,
            },
            [eR.s6.PRIVACY_FAMILY_CENTER]: {
                section: eD.oAB.FAMILY_CENTER,
                searchableTitles: [ex.intl.string(eM.default.gntCQT)],
                label: ex.intl.string(eM.default.gntCQT),
                ariaLabel: ex.intl.string(eM.default.gntCQT),
                element: el.Z,
                badgeCount: T,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: ex.intl.string(ex.t.y2b7CA),
                    color: v.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eD.Z5c.SETTINGS("family-center"),
            },
            [eR.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eD.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ex.intl.string(ex.t.BG7QsQ)],
                parent: eR.s6.DATA_PRIVACY,
            },
            [eR.s6.AUTHORIZED_APPS]: {
                section: eD.oAB.AUTHORIZED_APPS,
                searchableTitles: [ex.intl.string(ex.t["f6kk+r"])],
                label: ex.intl.string(ex.t["f6kk+r"]),
                element: en.Z,
                url: eD.Z5c.SETTINGS("authorized-apps"),
            },
            [eR.s6.SESSIONS]: {
                section: eD.oAB.SESSIONS,
                searchableTitles: [ex.intl.string(ex.t["+1h0k/"])],
                label: ex.intl.string(ex.t["+1h0k/"]),
                ariaLabel: ex.intl.string(ex.t["+1h0k/"]),
                element: eg.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == I ? void 0 : I.source },
            },
            [eR.s6.CONNECTIONS]: {
                section: eD.oAB.CONNECTIONS,
                searchableTitles: [ex.intl.string(ex.t["3fe7U5"])],
                label: ex.intl.string(ex.t["3fe7U5"]),
                ariaLabel: ex.intl.string(ex.t["3fe7U5"]),
                element: ei.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == I ? void 0 : I.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eD.Z5c.SETTINGS("connections"),
            },
            [eR.s6.THIRD_PARTY_ACCESS]: {
                section: eD.oAB.CONNECTIONS,
                searchableTitles: [
                    ex.intl.string(ex.t["Ig/XFa"]),
                    ex.intl.string(ex.t["3fe7U5"]),
                    ex.intl.string(ex.t["f6kk+r"]),
                ],
                label: ex.intl.string(ex.t["Ig/XFa"]),
                parent: eR.s6.CONNECTIONS,
                element: ey.Z,
            },
            [eR.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eD.oAB.CONNECTIONS,
                searchableTitles: [ex.intl.string(ex.t["+/hZM/"])],
                parent: eR.s6.CONNECTIONS,
                element: ei.Z,
            },
            [eR.s6.CLIPS]: {
                section: eD.oAB.CLIPS,
                searchableTitles: [ex.intl.string(ex.t.z2jK6X)],
                label: ex.intl.string(ex.t.z2jK6X),
                ariaLabel: ex.intl.string(ex.t.z2jK6X),
                icon: ej ? (0, r.jsx)(b.Z, {}) : void 0,
                element: y.Z,
                predicate: () => !eG,
                url: eD.Z5c.SETTINGS("clips"),
            },
            [eR.s6.CLIPS_RECORDING_TAB]: {
                section: eD.oAB.CLIPS,
                searchableTitles: [ex.intl.string(ex.t.iIwmV5)],
                parent: eR.s6.CLIPS,
            },
            [eR.s6.CLIPS_AUTOMATIC_TAB]: {
                section: eD.oAB.CLIPS,
                searchableTitles: [ex.intl.string(ex.t.sA0WKL)],
                parent: eR.s6.CLIPS,
            },
            [eR.s6.CLIPS_PRIVACY_TAB]: {
                section: eD.oAB.CLIPS,
                searchableTitles: [ex.intl.string(ex.t.GcIeET)],
                parent: eR.s6.CLIPS,
            },
            [eR.s6.RESTRICTED_USERS]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                parent: eR.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: ex.intl.string(ex.t["3wRort"]),
                element: eA.ZP,
                predicate: () => e4 || e5,
            },
            [eR.s6.BLOCKED_USERS]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                parent: eR.s6.RESTRICTED_USERS,
                label: ex.intl.string(ex.t.PFOUKW),
                searchableTitles: [ex.intl.string(ex.t.PFOUKW)],
                element: eA.GF,
                predicate: () => e5,
            },
            [eR.s6.IGNORED_USERS]: {
                section: eD.oAB.CONTENT_AND_SOCIAL,
                parent: eR.s6.RESTRICTED_USERS,
                searchableTitles: [ex.intl.string(ex.t["93ZDWE"])],
                label: ex.intl.string(ex.t["93ZDWE"]),
                element: eA.yo,
                predicate: () => e4,
            },
            [eR.s6.PREMIUM]: {
                section: eD.oAB.PREMIUM,
                ariaLabel: ex.intl.string(ex.t.Ipxkog),
                searchableTitles: [ex.intl.string(ex.t.Ipxkog)],
                label: ex.intl.string(ex.t.Ipxkog),
                element: q.Z,
                className: ek.premiumTab,
            },
            [eR.s6.GUILD_BOOSTING]: {
                section: eD.oAB.GUILD_BOOSTING,
                searchableTitles: [ex.intl.string(ex.t["+CbP2v"])],
                label: ex.intl.string(ex.t["+CbP2v"]),
                element: eh.Z,
            },
            [eR.s6.SUBSCRIPTIONS]: {
                section: eD.oAB.SUBSCRIPTIONS,
                ariaLabel: ex.intl.string(ex.t.trSpHX),
                searchableTitles: [ex.intl.string(ex.t.trSpHX)],
                label: ex.intl.string(ex.t.trSpHX),
                element: D.Z,
                icon: h
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eR.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eD.oAB.SUBSCRIPTIONS,
                searchableTitles: [ex.intl.string(ex.t["2GKrvn"])],
                parent: eR.s6.SUBSCRIPTIONS,
            },
            [eR.s6.GIFT_INVENTORY]: {
                section: eD.oAB.INVENTORY,
                searchableTitles: [ex.intl.string(ex.t["jcSP+g"])],
                label: ex.intl.string(ex.t["jcSP+g"]),
                element: eu.Z,
                ariaLabel: ex.intl.string(ex.t["jcSP+g"]),
                badgeCount: t,
            },
            [eR.s6.GIFT_CODE_REDEMPTION]: {
                section: eD.oAB.INVENTORY,
                searchableTitles: [ex.intl.string(ex.t["il+VCo"])],
                parent: eR.s6.GIFT_INVENTORY,
                predicate: () => !eX,
            },
            [eR.s6.GIFT_INVENTORY_QUESTS]: {
                section: eD.oAB.INVENTORY,
                searchableTitles: [ex.intl.string(ex.t.JALI2K)],
                parent: eR.s6.GIFT_INVENTORY,
                predicate: () => eQ,
            },
            [eR.s6.GIFT_INVENTORY_LIST]: {
                section: eD.oAB.INVENTORY,
                searchableTitles: [ex.intl.string(ex.t["9KeUbY"])],
                parent: eR.s6.GIFT_INVENTORY,
                predicate: () => !eX,
            },
            [eR.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eD.oAB.INVENTORY,
                searchableTitles: [ex.intl.string(ex.t.vwMEHS)],
                parent: eR.s6.GIFT_INVENTORY,
                predicate: () => eX,
            },
            [eR.s6.BILLING]: {
                section: eD.oAB.BILLING,
                searchableTitles: [ex.intl.string(ex.t.oeUm2s)],
                label: ex.intl.string(ex.t.oeUm2s),
                ariaLabel: ex.intl.string(ex.t.oeUm2s),
                element: er.Z,
            },
            [eR.s6.BILLING_PAYMENT_METHODS]: {
                section: eD.oAB.BILLING,
                searchableTitles: [ex.intl.string(ex.t.W26xGQ)],
                parent: eR.s6.BILLING,
            },
            [eR.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eD.oAB.BILLING,
                searchableTitles: [ex.intl.string(ex.t.obLrcK)],
                parent: eR.s6.BILLING,
            },
            [eR.s6.APPEARANCE]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [ex.intl.string(ex.t["iHH+ky"])],
                label: ex.intl.string(ex.t["iHH+ky"]),
                ariaLabel: ex.intl.string(ex.t["iHH+ky"]),
                element: et.Z,
                newIndicator: (0, r.jsx)(eF, {}),
                newIndicatorDismissibleContentTypes: eZ(),
                url: eD.Z5c.SETTINGS("appearance"),
            },
            [eR.s6.APPEARANCE_THEME]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [ex.intl.string(ex.t.Ksh3ik)],
                parent: eR.s6.APPEARANCE,
            },
            [eR.s6.APPEARANCE_COLOR]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [ex.intl.string(ex.t.OCOOiI)],
                parent: eR.s6.APPEARANCE_THEME,
            },
            [eR.s6.APPEARANCE_ICON]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [ex.intl.string(ex.t.RPh2ou)],
                parent: eR.s6.APPEARANCE_THEME,
            },
            [eR.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [ex.intl.string(ex.t.ZEoGMd)],
                parent: eR.s6.APPEARANCE,
            },
            [eR.s6.APPEARANCE_LIST_SPACING]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eR.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: ex.intl.string(ex.t.y2b7CA),
                    color: v.Z.BG_BRAND,
                }),
            },
            [eR.s6.APPEARANCE_SCALING_SPACING]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [ex.intl.string(ex.t.qPOqoK)],
                parent: eR.s6.APPEARANCE,
            },
            [eR.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [
                    ex.intl.string(ex.t.dyamEI),
                    ex.intl.string(ex.t.p8NOwi),
                    ex.intl.string(ex.t["+o/sOo"]),
                ],
                parent: eR.s6.APPEARANCE,
                predicate: () =>
                    L.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eR.s6.ACCESSIBILITY]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t.G0neg7)],
                label: ex.intl.string(ex.t.G0neg7),
                ariaLabel: ex.intl.string(ex.t.G0neg7),
                element: Q.Z,
                url: eD.Z5c.SETTINGS("accessibility"),
            },
            [eR.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t.aZlePv)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_SWITCH_ICON]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t["S3z+pV"])],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_SATURATION]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t["5PWWCY"])],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t.bQCodD)],
                parent: eR.s6.ACCESSIBILITY_SATURATION,
            },
            [eR.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t.OLZFB8)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t["+Isihb"])],
                parent: eR.s6.ACCESSIBILITY,
                predicate: () => (0, O.A)("SettingsRendererConfig"),
            },
            [eR.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t.uSOPWm)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(eL.default["2gFUEw"])],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t.BT8Bmp)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t["sSY+mD"])],
                parent: eR.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eR.s6.ACCESSIBILITY_CONTRAST]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t["TYyfO/"])],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t.cguiec)],
                parent: eR.s6.ACCESSIBILITY_CONTRAST,
            },
            [eR.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t.e3TR1b)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t.b3XBzg)],
                parent: eR.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eR.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t.Iayoh5)],
                parent: eR.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eR.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t.iIaOlc)],
                parent: eR.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eR.s6.ACCESSIBILITY_STICKERS]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t["6NtAuJ"])],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_MESSAGES]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t.onqU6o)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t["3Fztn5"])],
                parent: eR.s6.ACCESSIBILITY_MESSAGES,
            },
            [eR.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t.TZ2hZH)],
                parent: eR.s6.ACCESSIBILITY_MESSAGES,
            },
            [eR.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t.VpSKeO)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t.qvTIwX)],
                parent: eR.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eR.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [ex.intl.string(ex.t.lsW5Ev)],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [eR.CF],
                parent: eR.s6.ACCESSIBILITY,
            },
            [eR.s6.VOICE_AND_VIDEO]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.B1fFpf)],
                label: ex.intl.string(ex.t.B1fFpf),
                ariaLabel: ex.intl.string(ex.t.B1fFpf),
                element: eC.Z,
                predicate: () => G.Z.isSupported(),
                url: eD.Z5c.SETTINGS("voice"),
            },
            [eR.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.K3lovD), ex.intl.string(ex.t.NiTd0e)],
                parent: eR.s6.VOICE_AND_VIDEO,
            },
            [eR.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.FlNoSV)],
                parent: eR.s6.VOICE_AND_VIDEO,
            },
            [eR.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.ABjMWI)],
                parent: eR.s6.VOICE_AND_VIDEO,
            },
            [eR.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.OFpL3c)],
                parent: eR.s6.VOICE_AND_VIDEO,
            },
            [eR.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.KDdjou), ex.intl.string(ex.t.FeUKeA)],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eR.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.K3lovD), ex.intl.string(ex.t.NiTd0e)],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eR.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eD.oAB.VOICE,
                searchableTitles: [
                    ex.intl.string(ex.t.hHMYbb),
                    ex.intl.string(ex.t.dl18zb),
                    ex.intl.string(ex.t.nuFtHH),
                    ex.intl.string(ex.t["3182VD"]),
                    ex.intl.string(ex.t["DGq/PR"]),
                ],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eR.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [
                    ex.intl.string(ex.t.OX2Bnr),
                    ex.intl.string(ex.t.eATD2B),
                    ex.intl.string(ex.t.nuFtHH),
                    ex.intl.string(ex.t["3182VD"]),
                    ex.intl.string(ex.t["DGq/PR"]),
                ],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eR.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.gyljWE), ex.intl.string(ex.t.nuFtHH)],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eR.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eD.oAB.VOICE,
                searchableTitles: [
                    ex.intl.string(ex.t.LM3U3k),
                    ex.intl.string(ex.t.nuFtHH),
                    ex.intl.string(ex.t.VZPR0R),
                    ex.intl.string(ex.t.cjPbpT),
                ],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, z.P)({ location: "SettingsRendererConfig" });
                    return e.length > 0;
                },
            },
            [eR.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t["pS+K2L"]), ex.intl.string(ex.t.nuFtHH)],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => e7 !== eN._.STUDIO,
            },
            [eR.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t["sqUm+k"]), ex.intl.string(ex.t.nuFtHH)],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => e6 === ew.pM.VOICE_ACTIVITY && e9,
            },
            [eR.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.e7LIiY)],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eR.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.nzUc3B)],
                parent: eR.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eR.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.ABjMWI)],
                parent: eR.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eR.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.nzUc3B)],
                parent: eR.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eR.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.LKzQSF)],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eR.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.F122Gz)],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => G.Z.supports(ew.AN.VIDEO),
            },
            [eR.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t["3Ppr1h"])],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eR.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.lZTUPs)],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => G.Z.supports(ew.AN.VIDEO),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t["8/udY0"])],
                parent: eR.s6.VOICE_AND_VIDEO,
            },
            [eR.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t["8/udY0"])],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t["6I6GUv"])],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => e9,
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.iWTwu6)],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t["/jwMtn"])],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eR.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.OBwCXF)],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.t8Qhib), ex.intl.string(ex.t.hmfkCi)],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => G.Z.isNoiseSuppressionSupported(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.BbESsg)],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => G.Z.isAdvancedVoiceActivitySupported(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.cUMdH0)],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => G.Z.isAutomaticGainControlSupported(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.DFPXIG)],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => G.Z.showBypassSystemInputProcessing(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.uancuJ)],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => G.Z.supports(ew.AN.QOS),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.oSdBvW)],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => G.Z.supports(ew.AN.ATTENUATION),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.wVBHr0)],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => G.Z.shouldOfferManualSubsystemSelection(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eD.oAB.VOICE,
                searchableTitles: [
                    ex.intl.string(ex.t.KDdjou),
                    ex.intl.string(ex.t.NMCIf9),
                    ex.intl.string(ex.t.FeUKeA),
                ],
                parent: eR.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    G.Z.supportsVideoHook() ||
                    G.Z.supportsExperimentalSoundshare() ||
                    (G.Z.supportsSystemScreensharePicker() && (0, H.isMac)()),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.GmWk2E), ex.intl.string(ex.t["Fj/xn1"])],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => G.Z.supportsVideoHook(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t["4I0qzZ"])],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => G.Z.supportsExperimentalSoundshare() && G.Z.supportsHookSoundshare(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.ie1mgY)],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => G.Z.supportsSystemScreensharePicker() && (0, H.isMac)(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t["aP1N/m"])],
                parent: eR.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => H.isPlatformEmbedded,
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.OFpL3c)],
                parent: eR.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t["0CEP6e"])],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => W.Sb.getSetting(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t["r6K+TL"])],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => G.Z.isAecDumpSupported(),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t.U4FgFK)],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === Y.ZP.releaseChannel || "development" === Y.ZP.releaseChannel) &&
                    eK &&
                    G.Z.supports(ew.AN.CONNECTION_REPLAY),
            },
            [eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t["726JHL"])],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    H.isPlatformEmbedded && G.Z.supports(ew.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [eR.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [ex.intl.string(ex.t["/RXu67"])],
                parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eR.s6.POGGERMODE]: {
                section: eD.oAB.POGGERMODE,
                searchableTitles: [ex.intl.string(ex.t.AtCukI)],
                label: ex.intl.string(ex.t.AtCukI),
                ariaLabel: ex.intl.string(ex.t.AtCukI),
                element: R.Z,
                predicate: () => N.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: ek.poggermodeIcon,
                }),
            },
            [eR.s6.CHAT]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t["/VQax8"])],
                label: ex.intl.string(ex.t["/VQax8"]),
                ariaLabel: ex.intl.string(ex.t["/VQax8"]),
                element: eb.Z,
                url: eD.Z5c.SETTINGS("text"),
            },
            [eR.s6.MESSAGE_SEARCH]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t.VYODPD)],
                parent: eR.s6.CHAT,
                predicate: () => tn,
            },
            [eR.s6.MESSAGE_SEARCH_ALL_DMS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t["t4+fbe"])],
                parent: eR.s6.MESSAGE_SEARCH,
                predicate: () => tn,
            },
            [eR.s6.CHAT_INLINE_MEDIA]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t.U68Dgp)],
                parent: eR.s6.CHAT,
            },
            [eR.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t.U47N1p)],
                parent: eR.s6.CHAT_INLINE_MEDIA,
            },
            [eR.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t.VP11No)],
                parent: eR.s6.CHAT_INLINE_MEDIA,
            },
            [eR.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t["5S2AK+"])],
                parent: eR.s6.CHAT_INLINE_MEDIA,
            },
            [eR.s6.CHAT_EMBEDS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t.PWZOn4)],
                parent: eR.s6.CHAT,
            },
            [eR.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t.xX0ZTA)],
                parent: eR.s6.CHAT_EMBEDS,
            },
            [eR.s6.CHAT_EMOJI]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t.sMOuuS)],
                parent: eR.s6.CHAT,
            },
            [eR.s6.CHAT_EMOJI_REACTIONS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t.Iv24sm)],
                parent: eR.s6.CHAT_EMOJI,
            },
            [eR.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t["79qal8"])],
                parent: eR.s6.CHAT_EMOJI,
            },
            [eR.s6.CHAT_STICKERS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t["6NtAuJ"])],
                parent: eR.s6.CHAT,
            },
            [eR.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t["29xPVZ"])],
                parent: eR.s6.CHAT_STICKERS,
            },
            [eR.s6.CHAT_SOUNDMOJI]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t.EHlAMc)],
                parent: eR.s6.CHAT,
                predicate: () => (0, P.dX)({ location: "SettingsRendererConfig" }),
            },
            [eR.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t["CtYr+U"])],
                parent: eR.s6.CHAT_SOUNDMOJI,
                predicate: () => (0, P.dX)({ location: "SettingsRendererConfig" }),
            },
            [eR.s6.CHAT_TEXT_BOX]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t.afR0pI)],
                parent: eR.s6.CHAT,
            },
            [eR.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t.AqGrEI)],
                parent: eR.s6.CHAT_TEXT_BOX,
            },
            [eR.s6.CHAT_THREADS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t.B2panI)],
                parent: eR.s6.CHAT,
            },
            [eR.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t.AInv5m)],
                parent: eR.s6.CHAT_THREADS,
            },
            [eR.s6.CHAT_SPOILERS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t.QgwmVz)],
                parent: eR.s6.CHAT,
            },
            [eR.s6.CHAT_MENTION_SUGGESTIONS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [ex.intl.string(ex.t.uXQ2xT)],
                parent: eR.s6.CHAT_TEXT_BOX,
                predicate: () => tt,
            },
            [eR.s6.NOTIFICATIONS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.HcoRu0)],
                label: ex.intl.string(ex.t.HcoRu0),
                ariaLabel: ex.intl.string(ex.t.HcoRu0),
                element: e_.Z,
                url: eD.Z5c.SETTINGS("notifications"),
            },
            [eR.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t["/0WCll"])],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.VH8AIJ)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.xSmFQG)],
                parent: eR.s6.NOTIFICATIONS,
                predicate: () => (0, H.isWindows)(),
            },
            [eR.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: ["New Unreads Setting (Experimental)"],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.TTvjd9)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.VpSKeO)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.D9yVAH)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.u6dc5B)],
                parent: eR.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eR.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.P8MG6q)],
                parent: eR.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eR.s6.NOTIFICATIONS_SOUNDS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.MKWyKc)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_EMAILS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.TPchzM)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t["B75+xe"])],
                parent: eR.s6.NOTIFICATIONS_EMAILS,
            },
            [eR.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.sxn7lR)],
                parent: eR.s6.NOTIFICATIONS_EMAILS,
            },
            [eR.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.EkxXhe)],
                parent: eR.s6.NOTIFICATIONS_EMAILS,
            },
            [eR.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.jNrkrM)],
                parent: eR.s6.NOTIFICATIONS_EMAILS,
            },
            [eR.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.E8g1l8)],
                parent: eR.s6.NOTIFICATIONS_EMAILS,
            },
            [eR.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.Ra9Pwk)],
                parent: eR.s6.NOTIFICATIONS_EMAILS,
            },
            [eR.s6.NOTIFICATIONS_REACTIONS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.Rq0NFs)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.wtk08S)],
                parent: eR.s6.NOTIFICATIONS,
                predicate: () => (0, k.JN)("SettingsRendererConfig"),
            },
            [eR.s6.NOTIFICATIONS_FRIEND_ONLINE]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t["uvIi/4"])],
                parent: eR.s6.NOTIFICATIONS,
                predicate: () => (0, C.bH)("SettingsRendererConfig"),
            },
            [eR.s6.NOTIFICATIONS_USER_RESURRECTION]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.Zyn45S)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [ex.intl.string(ex.t.pW4TMp)],
                parent: eR.s6.NOTIFICATIONS,
            },
            [eR.s6.KEYBINDS]: {
                section: eD.oAB.KEYBINDS,
                searchableTitles: [ex.intl.string(ex.t.T9DA2K)],
                label: ex.intl.string(ex.t.T9DA2K),
                element: ed.Z,
                url: eD.Z5c.SETTINGS("keybinds"),
            },
            [eR.s6.LANGUAGE]: {
                section: eD.oAB.LOCALE,
                searchableTitles: [ex.intl.string(ex.t.IHMsPn)],
                label: ex.intl.string(ex.t.IHMsPn),
                element: ef.Z,
                url: eD.Z5c.SETTINGS("language"),
            },
            [eR.s6.WINDOW_SETTINGS]: {
                section: eD.oAB.WINDOWS,
                searchableTitles: [ex.intl.string(ex.t.ZkDZov)],
                label: ex.intl.string(ex.t.ZkDZov),
                element: eO.Z,
                predicate: () => H.isPlatformEmbedded && (0, H.isWindows)(),
            },
            [eR.s6.LINUX_SETTINGS]: {
                section: eD.oAB.LINUX,
                searchableTitles: [ex.intl.string(ex.t["7pPjTW"])],
                label: ex.intl.string(ex.t["7pPjTW"]),
                element: eY,
                predicate: () => H.isPlatformEmbedded && (0, H.isLinux)(),
            },
            [eR.s6.STREAMER_MODE]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [ex.intl.string(ex.t.S5GfOW)],
                label: ex.intl.string(ex.t.S5GfOW),
                ariaLabel: ex.intl.string(ex.t.S5GfOW),
                element: eE.Z,
                url: eD.Z5c.SETTINGS("streamer-mode"),
            },
            [eR.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [ex.intl.string(ex.t.bxGbHL)],
                parent: eR.s6.STREAMER_MODE,
            },
            [eR.s6.STREAMER_MODE_ENABLE]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [ex.intl.string(ex.t.p9ZAJZ)],
                parent: eR.s6.STREAMER_MODE,
            },
            [eR.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [ex.intl.string(ex.t.UpQziA)],
                parent: eR.s6.STREAMER_MODE,
            },
            [eR.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [ex.intl.string(ex.t.q7WNGv)],
                parent: eR.s6.STREAMER_MODE,
            },
            [eR.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [ex.intl.string(ex.t["1CWknJ"])],
                parent: eR.s6.STREAMER_MODE,
            },
            [eR.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [ex.intl.string(ex.t.qmYiYd)],
                parent: eR.s6.STREAMER_MODE,
            },
            [eR.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [ex.intl.string(ex.t["iA81+a"])],
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
                section: eD.oAB.ADVANCED,
                searchableTitles: [ex.intl.string(ex.t["8/udY0"])],
                label: ex.intl.string(ex.t["8/udY0"]),
                ariaLabel: ex.intl.string(ex.t["8/udY0"]),
                element: ee.ZP,
            },
            [eR.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: [ex.intl.string(ex.t.ObIb1Q)],
                parent: eR.s6.SETTINGS_ADVANCED,
                predicate: () => F.wS,
            },
            [eR.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: [ex.intl.string(ex.t["eOC/F2"])],
                parent: eR.s6.SETTINGS_ADVANCED,
                predicate: () => H.isPlatformEmbedded,
            },
            [eR.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: [ex.intl.string(ex.t.fi3UQN)],
                parent: eR.s6.SETTINGS_ADVANCED,
                predicate: () => e$,
            },
            [eR.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: [ex.intl.string(ex.t.erOqlh)],
                parent: eR.s6.SETTINGS_ADVANCED,
                predicate: () => e1,
            },
            [eR.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: [ex.intl.string(ex.t.qDZryG)],
                parent: eR.s6.SETTINGS_ADVANCED,
            },
            [eR.s6.SETTINGS_ADVANCED_CF_WARP]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: ["CF WARP", "CloudFlare WARP"],
                parent: eR.s6.SETTINGS_ADVANCED,
                predicate: () =>
                    g.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 }).enable,
            },
            [eR.s6.ACTIVITY_PRIVACY]: {
                section: eD.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ex.intl.string(ex.t.Cq98yL)],
                label: ex.intl.string(ex.t.Cq98yL),
                ariaLabel: ex.intl.string(ex.t.Cq98yL),
                element: $.Z,
                predicate: () => !eG,
                url: eD.Z5c.SETTINGS("activity-privacy"),
            },
            [eR.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eG ? eD.oAB.GAMES : eD.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ex.intl.string(ex.t["8ka8li"])],
                parent: eG ? eR.s6.GAMES_ACTIVITY_PRIVACY : eR.s6.ACTIVITY_PRIVACY,
            },
            [eR.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eG ? eD.oAB.GAMES : eD.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ex.intl.string(ex.t.VOszPA)],
                parent: eG ? eR.s6.GAMES_ACTIVITY_PRIVACY : eR.s6.ACTIVITY_PRIVACY,
            },
            [eR.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eG ? eD.oAB.GAMES : eD.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eR.CF],
                parent: eG ? eR.s6.GAMES_ACTIVITY_PRIVACY : eR.s6.ACTIVITY_PRIVACY,
            },
            [eR.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eD.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ex.intl.string(ex.t["4F2KoC"])],
                parent: eR.s6.ACTIVITY_PRIVACY,
            },
            [eR.s6.REGISTERED_GAMES]: {
                section: eD.oAB.REGISTERED_GAMES,
                searchableTitles: [ex.intl.string(ex.t.AVDyEj)],
                label: ex.intl.string(ex.t.AVDyEj),
                element: ec.Z,
                predicate: () => !eG && (0, eT.Jw)(),
            },
            [eR.s6.OVERLAY]: {
                section: eD.oAB.OVERLAY,
                searchableTitles: [ex.intl.string(ex.t["9cb1Uz"]), ex.intl.string(ex.t.HcoRu0)],
                label: ex.intl.string(ex.t["9cb1Uz"]),
                element: ep.Z,
                predicate: () => !eG && M,
            },
            [eR.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, E.Z)(!0),
                searchableTitles: [ex.intl.string(ex.t.LRmNAl)],
                label: ex.intl.string(ex.t.LRmNAl),
            },
            [eR.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    Z.default.track(eD.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, V.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                Z.default.track(eD.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, p.Z)(e);
                            },
                        });
                },
                searchableTitles: [ex.intl.string(ex.t.sMEktT)],
                label: ex.intl.string(ex.t.sMEktT),
                ariaLabel: ex.intl.string(ex.t.sMEktT),
            },
            [eR.s6.EXPERIMENTS]: {
                section: eD.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: eI.Z,
                predicate: () => j.Z.isDeveloper,
                url: eD.Z5c.SETTINGS("experiments"),
            },
            [eR.s6.DEVELOPER_OPTIONS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: es.Z,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eR.s6.DEVELOPER_OPTIONS,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eR.s6.DEVELOPER_OPTIONS,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eR.s6.DEVELOPER_OPTIONS,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eR.s6.DEVELOPER_OPTIONS,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eR.s6.DEVELOPER_OPTIONS,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eR.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eR.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eR.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eK && j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eR.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eK && j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eR.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eR.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eK && j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_HIGHLIGHT_MANA_COMPONENTS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Mana Components"],
                parent: eR.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eK && j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Void Toggleable Components"],
                parent: eR.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eK && j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eR.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eK && j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eR.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eK && j.Z.isDeveloper && U.default.layoutDebuggingEnabled,
            },
            [eR.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eK && j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eK && j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eR.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eR.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eR.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eR.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eR.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => m.q && j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_SHOW_TOTP_SUCCESS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Show TOTP Success"],
                parent: eR.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eR.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eR.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eR.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eR.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eR.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => j.Z.isDeveloper,
            },
            [eR.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM]: {
                section: f.ID.CUSTOM,
                searchableTitles: ev.Y,
                label: "Developer Education",
                element: ev.$,
                predicate: () => j.Z.isDeveloper,
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
                                        header: ex.intl.string(ex.t["2jxGer"]),
                                        confirmText: ex.intl.string(ex.t["2jxGer"]),
                                        cancelText: ex.intl.string(ex.t["ETE/oC"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: ex.intl.string(ex.t.SUnWBB),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: ex.intl.string(ex.t["2jxGer"]),
                ariaLabel: ex.intl.string(ex.t["2jxGer"]),
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
