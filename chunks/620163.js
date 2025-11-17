n.d(t, {
    $Z: () => eB,
    OF: () => eF,
    W8: () => eV,
    c$: () => eZ,
    iE: () => eY,
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
    P = n(813732),
    D = n(398140),
    w = n(564344),
    x = n(145158),
    L = n(172416),
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
    eD = n(65154),
    ew = n(388032),
    ex = n(88406),
    eL = n(597754),
    eM = n(202323);
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
            ? (0, r.jsx)(s.lBU, { text: ew.intl.string(ew.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ||
                t === a.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE
              ? (0, r.jsx)(s.IGR, { text: ew.intl.string(ew.t.y2b7CA) })
              : null;
    },
    eF = () => {
        let e = [];
        return (
            (0, L.hL)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            T.JH.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    eV = () => {
        let e = eF(),
            [t] = (0, I.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: ew.intl.string(ew.t.y2b7CA) })
            : null;
    },
    eH = ey.Z,
    eY = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: h,
            searchParams: I,
            numOfPendingFamilyRequests: T,
            isOverlaySupported: L,
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
            hasSecureFramesVerifiedUserIds: e3,
            hasIgnoredUsers: e2,
            hasBlockedUsers: e4,
            isEligibleForSensitiveContentDefaults: e5,
            inputMode: e8,
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
                searchableTitles: [ew.intl.string(ew.t.Am9YHi)],
                label: ew.intl.string(ew.t.Am9YHi),
            },
            [eN.s6.ACCOUNT]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [ew.intl.string(ew.t["JAIM/m"])],
                label: ew.intl.string(ew.t["JAIM/m"]),
                ariaLabel: ew.intl.string(ew.t["JAIM/m"]),
                element: Q.Z,
                url: eP.Z5c.SETTINGS("account"),
            },
            [eN.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [ew.intl.string(ew.t.LYju5J)],
                parent: eN.s6.ACCOUNT,
                section: eP.oAB.ACCOUNT,
            },
            [eN.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [ew.intl.string(ew.t["9AjdkD"])],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_PROFILE,
            },
            [eN.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [ew.intl.string(ew.t.Ulqq6K)],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_PROFILE,
            },
            [eN.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    ew.intl.string(ew.t["/52UYy"]),
                    ew.intl.string(ew.t.sK0dmH),
                    ew.intl.string(ew.t.XxRj7f),
                    ew.intl.string(ew.t.yNGjyK),
                    ew.intl.string(ew.t.KPGVWl),
                ],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_PROFILE,
                predicate: () => e5,
            },
            [eN.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [ew.intl.string(ew.t["+JkHPw"])],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_PROFILE,
            },
            [eN.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [ew.intl.string(ew.t.oP5zGA)],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_PROFILE,
            },
            [eN.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [ew.intl.string(ew.t.pKSjEj)],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT,
            },
            [eN.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [ew.intl.string(ew.t["FRep5/"])],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eN.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [ew.intl.string(ew.t["7qKDrE"])],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eN.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [ew.intl.string(ew.t.m0FidJ)],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eN.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [ew.intl.string(ew.t.cDgKte)],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e$,
            },
            [eN.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [ew.intl.string(ew.t["D+aE7g"])],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e$,
            },
            [eN.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [ew.intl.string(ew.t.fZSi1D)],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eN.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [ew.intl.string(ew.t.uHAJ5v)],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eN.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [ew.intl.string(ew.t.vrOCCk)],
                section: eP.oAB.ACCOUNT,
                parent: eN.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eN.s6.ACCOUNT_REMOVAL]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [ew.intl.string(ew.t.ZKsIks)],
                parent: eN.s6.ACCOUNT,
            },
            [eN.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [ew.intl.string(ew.t.jf5GGb)],
                parent: eN.s6.ACCOUNT_REMOVAL,
            },
            [eN.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [ew.intl.string(ew.t["8lQ2rR"])],
                parent: eN.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eN.s6.GAMES]: {
                section: eP.oAB.GAMES,
                searchableTitles: [ew.intl.string(ew.t.URyqtP)],
                label: ew.intl.string(ew.t.URyqtP),
                ariaLabel: ew.intl.string(ew.t.URyqtP),
                element: eT.Z,
                predicate: () => eU,
            },
            [eN.s6.GAMES_MY_GAMES]: {
                section: eP.oAB.GAMES,
                searchableTitles: [ew.intl.string(ew.t["5DMgp9"])],
                parent: eN.s6.GAMES,
            },
            [eN.s6.GAMES_CLIPS]: {
                section: eP.oAB.GAMES,
                searchableTitles: [ew.intl.string(ew.t.z2jK6X)],
                parent: eN.s6.GAMES,
            },
            [eN.s6.GAMES_OVERLAY]: {
                section: eP.oAB.GAMES,
                searchableTitles: [ew.intl.string(ew.t["9cb1Uz"])],
                parent: eN.s6.GAMES,
            },
            [eN.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eP.oAB.GAMES,
                searchableTitles: [ew.intl.string(ew.t.Cq98yL)],
                parent: eN.s6.GAMES,
            },
            [eN.s6.PROFILE_CUSTOMIZATION]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [ew.intl.string(ew.t["vi7f+q"])],
                label: ew.intl.string(ew.t["vi7f+q"]),
                ariaLabel: ew.intl.string(ew.t["vi7f+q"]),
                element: w.Z,
                newIndicator: (0, r.jsx)(eV, {}),
                newIndicatorDismissibleContentTypes: [...eF()],
                notice: {
                    stores: [G.Z, A.Z],
                    element: D.Z,
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
                searchableTitles: [ew.intl.string(ew.t["9AjdkD"])],
                parent: eN.s6.PROFILE_CUSTOMIZATION,
            },
            [eN.s6.PROFILE_USER_PROFILE]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ew.intl.string(ew.t["2p07FR"]), ew.intl.string(ew.t["7vhiqk"])],
                parent: eN.s6.PROFILE_CUSTOMIZATION,
            },
            [eN.s6.PROFILE_SERVER_PROFILES]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ew.intl.string(ew.t.kPHroX)],
                parent: eN.s6.PROFILE_CUSTOMIZATION,
            },
            [eN.s6.CONTENT_SOCIAL]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                label: ew.intl.string(ew.t["+o1pDZ"]),
                searchableTitles: [ew.intl.string(ew.t["+o1pDZ"])],
                ariaLabel: ew.intl.string(ew.t["+o1pDZ"]),
                element: ei.Z,
                url: eP.Z5c.SETTINGS("content-and-social"),
            },
            [eN.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t["+o1pDZ"]), ew.intl.string(ew.t["/7xJCF"])],
                parent: eN.s6.CONTENT_SOCIAL,
            },
            [eN.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t["+o1pDZ"]), ew.intl.string(ew.t["/7xJCF"])],
                parent: eN.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eN.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t.YpCiMt)],
                parent: eN.s6.CONTENT_SOCIAL,
            },
            [eN.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                label: ew.intl.string(ew.t.YpCiMt),
                searchableTitles: [ew.intl.string(ew.t.YpCiMt)],
                ariaLabel: ew.intl.string(ew.t.YpCiMt),
                parent: eN.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eP.Z5c.SETTINGS(eP.oAB.CONTENT_AND_SOCIAL, eR.C),
            },
            [eN.s6.DATA_PRIVACY]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                label: ew.intl.string(ew.t.OAuOHD),
                searchableTitles: [ew.intl.string(ew.t.OAuOHD)],
                ariaLabel: ew.intl.string(ew.t.OAuOHD),
                element: ea.Z,
                url: eP.Z5c.SETTINGS("data-and-privacy"),
            },
            [eN.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [ew.intl.string(ew.t["Vov/9o"])],
                parent: eN.s6.ACCOUNT,
            },
            [eN.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ew.intl.string(ew.t.WWaFn5)],
                parent: eN.s6.DATA_PRIVACY,
                predicate: () => (0, V.isDesktop)(),
            },
            [eN.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ew.intl.string(ew.t["opi/XK"])],
                parent: eN.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t.xVRG4P)],
                parent: eN.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eN.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t.fyA115)],
                parent: eN.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eN.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t.fyA115)],
                parent: eN.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eN.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t["/U8Iwa"])],
                parent: eN.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eN.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t["ms+Tme"])],
                parent: eN.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eN.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t["y62Z/d"])],
                parent: eN.s6.CONTENT_SOCIAL,
            },
            [eN.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ew.intl.string(ew.t.SRZyHg)],
                parent: eN.s6.DATA_PRIVACY,
            },
            [eN.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ew.intl.string(ew.t.uEz8JF),
                    ew.intl.string(ew.t["N/oRI+"]),
                    ew.intl.string(ew.t.QVdYsK),
                    ew.intl.string(ew.t["aWD+tu"]),
                    ew.intl.string(ew.t["5mnTa7"]),
                ],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eN.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ew.intl.string(ew.t["Hj/But"]),
                    ew.intl.string(ew.t["N/oRI+"]),
                    ew.intl.string(ew.t.QVdYsK),
                    ew.intl.string(ew.t["aWD+tu"]),
                    ew.intl.string(ew.t["5mnTa7"]),
                    ew.intl.string(ew.t["K0OWP+"]),
                ],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eN.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ew.intl.string(ew.t["Hj/But"]),
                    ew.intl.string(ew.t["N/oRI+"]),
                    ew.intl.string(ew.t.QVdYsK),
                    ew.intl.string(ew.t["aWD+tu"]),
                    ew.intl.string(ew.t["5mnTa7"]),
                ],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eN.s6.GORE_MEDIA_REDACTION]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    ew.intl.string(ew.t["Hj/But"]),
                    ew.intl.string(ew.t["N/oRI+"]),
                    ew.intl.string(ew.t.QVdYsK),
                    ew.intl.string(ew.t["aWD+tu"]),
                    ew.intl.string(ew.t["K0OWP+"]),
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
                    ew.intl.string(ew.t.JzaP4h),
                    ew.intl.string(ew.t.H9XOl3),
                    ew.intl.string(ew.t.k4W40P),
                ],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eN.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t["L+yTsa"])],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eN.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t.XahVjj)],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eN.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                parent: eN.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eN.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t.RAQUSN), ew.intl.string(ew.t.wbYDfT)],
                parent: eN.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eN.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t["3o2ojh"])],
                parent: eN.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !eQ,
            },
            [eN.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t.OLwZDV)],
                parent: eN.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eN.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t.wBkwux)],
                parent: eN.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eN.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ew.intl.string(ew.t.XuADY2)],
                parent: eN.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eN.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ew.intl.string(ew.t.MNKzyg)],
                parent: eN.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eN.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ew.intl.string(ew.t.VkS7Yd), ew.intl.string(ew.t.sJYh5t)],
                parent: eN.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eN.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ew.intl.string(ew.t.CyLYKZ)],
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
                searchableTitles: [ew.intl.string(ew.t.dmBSKo)],
                parent: eN.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eN.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t["1UaUy+"]), ew.intl.string(ew.t["xIk/iF"])],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eY,
            },
            [eN.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ew.intl.string(ew.t.qFsx5q)],
                parent: eN.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eK && !e1 && !ez,
            },
            [eN.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ew.intl.string(ew.t["5b3FNI"])],
                parent: eN.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => e3,
            },
            [eN.s6.PRIVACY_FAMILY_CENTER]: {
                section: eP.oAB.FAMILY_CENTER,
                searchableTitles: [ew.intl.string(eL.default.gntCQT)],
                label: ew.intl.string(eL.default.gntCQT),
                ariaLabel: ew.intl.string(eL.default.gntCQT),
                element: es.Z,
                badgeCount: T,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: ew.intl.string(ew.t.y2b7CA),
                    color: v.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eP.Z5c.SETTINGS("family-center"),
            },
            [eN.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ew.intl.string(ew.t.BG7QsQ)],
                parent: eN.s6.DATA_PRIVACY,
            },
            [eN.s6.AUTHORIZED_APPS]: {
                section: eP.oAB.AUTHORIZED_APPS,
                searchableTitles: [ew.intl.string(ew.t["f6kk+r"])],
                label: ew.intl.string(ew.t["f6kk+r"]),
                element: et.Z,
                url: eP.Z5c.SETTINGS("authorized-apps"),
            },
            [eN.s6.SESSIONS]: {
                section: eP.oAB.SESSIONS,
                searchableTitles: [ew.intl.string(ew.t["+1h0k/"])],
                label: ew.intl.string(ew.t["+1h0k/"]),
                ariaLabel: ew.intl.string(ew.t["+1h0k/"]),
                element: em.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == I ? void 0 : I.source },
            },
            [eN.s6.CONNECTIONS]: {
                section: eP.oAB.CONNECTIONS,
                searchableTitles: [ew.intl.string(ew.t["3fe7U5"])],
                label: ew.intl.string(ew.t["3fe7U5"]),
                ariaLabel: ew.intl.string(ew.t["3fe7U5"]),
                element: er.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == I ? void 0 : I.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eP.Z5c.SETTINGS("connections"),
            },
            [eN.s6.THIRD_PARTY_ACCESS]: {
                section: eP.oAB.CONNECTIONS,
                searchableTitles: [
                    ew.intl.string(ew.t["Ig/XFa"]),
                    ew.intl.string(ew.t["3fe7U5"]),
                    ew.intl.string(ew.t["f6kk+r"]),
                ],
                label: ew.intl.string(ew.t["Ig/XFa"]),
                parent: eN.s6.CONNECTIONS,
                element: eb.Z,
            },
            [eN.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eP.oAB.CONNECTIONS,
                searchableTitles: [ew.intl.string(ew.t["+/hZM/"])],
                parent: eN.s6.CONNECTIONS,
                element: er.Z,
            },
            [eN.s6.CLIPS]: {
                section: eP.oAB.CLIPS,
                searchableTitles: [ew.intl.string(ew.t.z2jK6X)],
                label: ew.intl.string(ew.t.z2jK6X),
                ariaLabel: ew.intl.string(ew.t.z2jK6X),
                icon: ek ? (0, r.jsx)(b.Z, {}) : void 0,
                element: y.Z,
                predicate: () => !eU,
                url: eP.Z5c.SETTINGS("clips"),
            },
            [eN.s6.CLIPS_RECORDING_TAB]: {
                section: eP.oAB.CLIPS,
                searchableTitles: [ew.intl.string(ew.t.iIwmV5)],
                parent: eN.s6.CLIPS,
            },
            [eN.s6.CLIPS_AUTOMATIC_TAB]: {
                section: eP.oAB.CLIPS,
                searchableTitles: [ew.intl.string(ew.t.sA0WKL)],
                parent: eN.s6.CLIPS,
            },
            [eN.s6.CLIPS_PRIVACY_TAB]: {
                section: eP.oAB.CLIPS,
                searchableTitles: [ew.intl.string(ew.t.GcIeET)],
                parent: eN.s6.CLIPS,
            },
            [eN.s6.RESTRICTED_USERS]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                parent: eN.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: ew.intl.string(ew.t["3wRort"]),
                element: eS.ZP,
                predicate: () => e2 || e4,
            },
            [eN.s6.BLOCKED_USERS]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                parent: eN.s6.RESTRICTED_USERS,
                label: ew.intl.string(ew.t.PFOUKW),
                searchableTitles: [ew.intl.string(ew.t.PFOUKW)],
                element: eS.GF,
                predicate: () => e4,
            },
            [eN.s6.IGNORED_USERS]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                parent: eN.s6.RESTRICTED_USERS,
                searchableTitles: [ew.intl.string(ew.t["93ZDWE"])],
                label: ew.intl.string(ew.t["93ZDWE"]),
                element: eS.yo,
                predicate: () => e2,
            },
            [eN.s6.PREMIUM]: {
                section: eP.oAB.PREMIUM,
                ariaLabel: ew.intl.string(ew.t.Ipxkog),
                searchableTitles: [ew.intl.string(ew.t.Ipxkog)],
                label: ew.intl.string(ew.t.Ipxkog),
                element: z.Z,
                className: eM.premiumTab,
            },
            [eN.s6.GUILD_BOOSTING]: {
                section: eP.oAB.GUILD_BOOSTING,
                searchableTitles: [ew.intl.string(ew.t["+CbP2v"])],
                label: ew.intl.string(ew.t["+CbP2v"]),
                element: ep.Z,
            },
            [eN.s6.SUBSCRIPTIONS]: {
                section: eP.oAB.SUBSCRIPTIONS,
                ariaLabel: ew.intl.string(ew.t.trSpHX),
                searchableTitles: [ew.intl.string(ew.t.trSpHX)],
                label: ew.intl.string(ew.t.trSpHX),
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
                searchableTitles: [ew.intl.string(ew.t["2GKrvn"])],
                parent: eN.s6.SUBSCRIPTIONS,
            },
            [eN.s6.GIFT_INVENTORY]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [ew.intl.string(ew.t["jcSP+g"])],
                label: ew.intl.string(ew.t["jcSP+g"]),
                element: ec.Z,
                ariaLabel: ew.intl.string(ew.t["jcSP+g"]),
                badgeCount: t,
            },
            [eN.s6.GIFT_CODE_REDEMPTION]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [ew.intl.string(ew.t["il+VCo"])],
                parent: eN.s6.GIFT_INVENTORY,
                predicate: () => !eq,
            },
            [eN.s6.GIFT_INVENTORY_QUESTS]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [ew.intl.string(ew.t.JALI2K)],
                parent: eN.s6.GIFT_INVENTORY,
                predicate: () => eX,
            },
            [eN.s6.GIFT_INVENTORY_LIST]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [ew.intl.string(ew.t["9KeUbY"])],
                parent: eN.s6.GIFT_INVENTORY,
                predicate: () => !eq,
            },
            [eN.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [ew.intl.string(ew.t.vwMEHS)],
                parent: eN.s6.GIFT_INVENTORY,
                predicate: () => eq,
            },
            [eN.s6.BILLING]: {
                section: eP.oAB.BILLING,
                searchableTitles: [ew.intl.string(ew.t.oeUm2s)],
                label: ew.intl.string(ew.t.oeUm2s),
                ariaLabel: ew.intl.string(ew.t.oeUm2s),
                element: en.Z,
            },
            [eN.s6.BILLING_PAYMENT_METHODS]: {
                section: eP.oAB.BILLING,
                searchableTitles: [ew.intl.string(ew.t.W26xGQ)],
                parent: eN.s6.BILLING,
            },
            [eN.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eP.oAB.BILLING,
                searchableTitles: [ew.intl.string(ew.t.obLrcK)],
                parent: eN.s6.BILLING,
            },
            [eN.s6.APPEARANCE]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [ew.intl.string(ew.t["iHH+ky"])],
                label: ew.intl.string(ew.t["iHH+ky"]),
                ariaLabel: ew.intl.string(ew.t["iHH+ky"]),
                element: ee.Z,
                newIndicator: (0, r.jsx)(eZ, {}),
                newIndicatorDismissibleContentTypes: eB(),
                url: eP.Z5c.SETTINGS("appearance"),
            },
            [eN.s6.APPEARANCE_THEME]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [ew.intl.string(ew.t.Ksh3ik)],
                parent: eN.s6.APPEARANCE,
            },
            [eN.s6.APPEARANCE_COLOR]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [ew.intl.string(ew.t.OCOOiI)],
                parent: eN.s6.APPEARANCE_THEME,
            },
            [eN.s6.APPEARANCE_ICON]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [ew.intl.string(ew.t.RPh2ou)],
                parent: eN.s6.APPEARANCE_THEME,
            },
            [eN.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [ew.intl.string(ew.t.ZEoGMd)],
                parent: eN.s6.APPEARANCE,
            },
            [eN.s6.APPEARANCE_LIST_SPACING]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eN.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: ew.intl.string(ew.t.y2b7CA),
                    color: v.Z.BG_BRAND,
                }),
            },
            [eN.s6.APPEARANCE_SCALING_SPACING]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [ew.intl.string(ew.t.qPOqoK)],
                parent: eN.s6.APPEARANCE,
            },
            [eN.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [
                    ew.intl.string(ew.t.dyamEI),
                    ew.intl.string(ew.t.p8NOwi),
                    ew.intl.string(ew.t["+o/sOo"]),
                ],
                parent: eN.s6.APPEARANCE,
                predicate: () =>
                    x.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eN.s6.ACCESSIBILITY]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t.G0neg7)],
                label: ew.intl.string(ew.t.G0neg7),
                ariaLabel: ew.intl.string(ew.t.G0neg7),
                element: X.Z,
                url: eP.Z5c.SETTINGS("accessibility"),
            },
            [eN.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t.aZlePv)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_SWITCH_ICON]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t["S3z+pV"])],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_SATURATION]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t["5PWWCY"])],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t.bQCodD)],
                parent: eN.s6.ACCESSIBILITY_SATURATION,
            },
            [eN.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t.OLZFB8)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t["+Isihb"])],
                parent: eN.s6.ACCESSIBILITY,
                predicate: () => (0, O.A)("SettingsRendererConfig"),
            },
            [eN.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t.uSOPWm)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ex.default["2gFUEw"])],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t.BT8Bmp)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t["sSY+mD"])],
                parent: eN.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eN.s6.ACCESSIBILITY_CONTRAST]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t["TYyfO/"])],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t.cguiec)],
                parent: eN.s6.ACCESSIBILITY_CONTRAST,
            },
            [eN.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t.e3TR1b)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t.b3XBzg)],
                parent: eN.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eN.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t.Iayoh5)],
                parent: eN.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eN.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t.iIaOlc)],
                parent: eN.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eN.s6.ACCESSIBILITY_STICKERS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t["6NtAuJ"])],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_MESSAGES]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t.onqU6o)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t["3Fztn5"])],
                parent: eN.s6.ACCESSIBILITY_MESSAGES,
            },
            [eN.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t.TZ2hZH)],
                parent: eN.s6.ACCESSIBILITY_MESSAGES,
            },
            [eN.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t.VpSKeO)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t.qvTIwX)],
                parent: eN.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eN.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ew.intl.string(ew.t.lsW5Ev)],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eN.CF],
                parent: eN.s6.ACCESSIBILITY,
            },
            [eN.s6.VOICE_AND_VIDEO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.B1fFpf)],
                label: ew.intl.string(ew.t.B1fFpf),
                ariaLabel: ew.intl.string(ew.t.B1fFpf),
                element: eA.Z,
                predicate: () => U.Z.isSupported(),
                url: eP.Z5c.SETTINGS("voice"),
            },
            [eN.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.K3lovD), ew.intl.string(ew.t.NiTd0e)],
                parent: eN.s6.VOICE_AND_VIDEO,
            },
            [eN.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.FlNoSV)],
                parent: eN.s6.VOICE_AND_VIDEO,
            },
            [eN.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.ABjMWI)],
                parent: eN.s6.VOICE_AND_VIDEO,
            },
            [eN.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.OFpL3c)],
                parent: eN.s6.VOICE_AND_VIDEO,
            },
            [eN.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.KDdjou), ew.intl.string(ew.t.FeUKeA)],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eN.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.K3lovD), ew.intl.string(ew.t.NiTd0e)],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eN.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eP.oAB.VOICE,
                searchableTitles: [
                    ew.intl.string(ew.t.hHMYbb),
                    ew.intl.string(ew.t.dl18zb),
                    ew.intl.string(ew.t.nuFtHH),
                    ew.intl.string(ew.t["3182VD"]),
                    ew.intl.string(ew.t["DGq/PR"]),
                ],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eN.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [
                    ew.intl.string(ew.t.OX2Bnr),
                    ew.intl.string(ew.t.eATD2B),
                    ew.intl.string(ew.t.nuFtHH),
                    ew.intl.string(ew.t["3182VD"]),
                    ew.intl.string(ew.t["DGq/PR"]),
                ],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eN.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.gyljWE), ew.intl.string(ew.t.nuFtHH)],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eN.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eP.oAB.VOICE,
                searchableTitles: [
                    ew.intl.string(ew.t.LM3U3k),
                    ew.intl.string(ew.t.nuFtHH),
                    ew.intl.string(ew.t.VZPR0R),
                    ew.intl.string(ew.t.cjPbpT),
                ],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, K.P)({ location: "SettingsRendererConfig" });
                    return e.length > 0;
                },
            },
            [eN.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t["pS+K2L"]), ew.intl.string(ew.t.nuFtHH)],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => e6 !== eC._.STUDIO,
            },
            [eN.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t["sqUm+k"]), ew.intl.string(ew.t.nuFtHH)],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => e8 === eD.pM.VOICE_ACTIVITY && e7,
            },
            [eN.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.e7LIiY)],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eN.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.nzUc3B)],
                parent: eN.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eN.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.ABjMWI)],
                parent: eN.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eN.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.nzUc3B)],
                parent: eN.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eN.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.LKzQSF)],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eN.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.F122Gz)],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => U.Z.supports(eD.AN.VIDEO),
            },
            [eN.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t["3Ppr1h"])],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eN.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.lZTUPs)],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => U.Z.supports(eD.AN.VIDEO),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t["8/udY0"])],
                parent: eN.s6.VOICE_AND_VIDEO,
            },
            [eN.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t["8/udY0"])],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t["6I6GUv"])],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => e7,
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.iWTwu6)],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t["/jwMtn"])],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eN.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.OBwCXF)],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.t8Qhib), ew.intl.string(ew.t.hmfkCi)],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => U.Z.isNoiseSuppressionSupported(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.BbESsg)],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => U.Z.isAdvancedVoiceActivitySupported(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.cUMdH0)],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => U.Z.isAutomaticGainControlSupported(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.DFPXIG)],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => U.Z.showBypassSystemInputProcessing(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.uancuJ)],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => U.Z.supports(eD.AN.QOS),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.oSdBvW)],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => U.Z.supports(eD.AN.ATTENUATION),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.wVBHr0)],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => U.Z.shouldOfferManualSubsystemSelection(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eP.oAB.VOICE,
                searchableTitles: [
                    ew.intl.string(ew.t.KDdjou),
                    ew.intl.string(ew.t.NMCIf9),
                    ew.intl.string(ew.t.FeUKeA),
                ],
                parent: eN.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    U.Z.supportsVideoHook() ||
                    U.Z.supportsExperimentalSoundshare() ||
                    (U.Z.supportsSystemScreensharePicker() && (0, V.isMac)()),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.GmWk2E), ew.intl.string(ew.t["Fj/xn1"])],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => U.Z.supportsVideoHook(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t["4I0qzZ"])],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => U.Z.supportsExperimentalSoundshare() && U.Z.supportsHookSoundshare(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.ie1mgY)],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => U.Z.supportsSystemScreensharePicker() && (0, V.isMac)(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t["aP1N/m"])],
                parent: eN.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => V.isPlatformEmbedded,
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.OFpL3c)],
                parent: eN.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t["0CEP6e"])],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => Y.Sb.getSetting(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t["r6K+TL"])],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => U.Z.isAecDumpSupported(),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t.U4FgFK)],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === H.ZP.releaseChannel || "development" === H.ZP.releaseChannel) &&
                    eW &&
                    U.Z.supports(eD.AN.CONNECTION_REPLAY),
            },
            [eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t["726JHL"])],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    V.isPlatformEmbedded && U.Z.supports(eD.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [eN.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ew.intl.string(ew.t["/RXu67"])],
                parent: eN.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eN.s6.POGGERMODE]: {
                section: eP.oAB.POGGERMODE,
                searchableTitles: [ew.intl.string(ew.t.AtCukI)],
                label: ew.intl.string(ew.t.AtCukI),
                ariaLabel: ew.intl.string(ew.t.AtCukI),
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
                searchableTitles: [ew.intl.string(ew.t["/VQax8"])],
                label: ew.intl.string(ew.t["/VQax8"]),
                ariaLabel: ew.intl.string(ew.t["/VQax8"]),
                element: eE.Z,
                url: eP.Z5c.SETTINGS("text"),
            },
            [eN.s6.MESSAGE_SEARCH]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t.VYODPD)],
                parent: eN.s6.CHAT,
                predicate: () => tt,
            },
            [eN.s6.MESSAGE_SEARCH_ALL_DMS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t["t4+fbe"])],
                parent: eN.s6.MESSAGE_SEARCH,
                predicate: () => tt,
            },
            [eN.s6.CHAT_INLINE_MEDIA]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t.U68Dgp)],
                parent: eN.s6.CHAT,
            },
            [eN.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t.U47N1p)],
                parent: eN.s6.CHAT_INLINE_MEDIA,
            },
            [eN.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t.VP11No)],
                parent: eN.s6.CHAT_INLINE_MEDIA,
            },
            [eN.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t["5S2AK+"])],
                parent: eN.s6.CHAT_INLINE_MEDIA,
            },
            [eN.s6.CHAT_EMBEDS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t.PWZOn4)],
                parent: eN.s6.CHAT,
            },
            [eN.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t.xX0ZTA)],
                parent: eN.s6.CHAT_EMBEDS,
            },
            [eN.s6.CHAT_EMOJI]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t.sMOuuS)],
                parent: eN.s6.CHAT,
            },
            [eN.s6.CHAT_EMOJI_REACTIONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t.Iv24sm)],
                parent: eN.s6.CHAT_EMOJI,
            },
            [eN.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t["79qal8"])],
                parent: eN.s6.CHAT_EMOJI,
            },
            [eN.s6.CHAT_STICKERS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t["6NtAuJ"])],
                parent: eN.s6.CHAT,
            },
            [eN.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t["29xPVZ"])],
                parent: eN.s6.CHAT_STICKERS,
            },
            [eN.s6.CHAT_SOUNDMOJI]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t.EHlAMc)],
                parent: eN.s6.CHAT,
            },
            [eN.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t["CtYr+U"])],
                parent: eN.s6.CHAT_SOUNDMOJI,
            },
            [eN.s6.CHAT_TEXT_BOX]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t.afR0pI)],
                parent: eN.s6.CHAT,
            },
            [eN.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t.AqGrEI)],
                parent: eN.s6.CHAT_TEXT_BOX,
            },
            [eN.s6.CHAT_THREADS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t.B2panI)],
                parent: eN.s6.CHAT,
            },
            [eN.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t.AInv5m)],
                parent: eN.s6.CHAT_THREADS,
            },
            [eN.s6.CHAT_SPOILERS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t.QgwmVz)],
                parent: eN.s6.CHAT,
            },
            [eN.s6.CHAT_MENTION_SUGGESTIONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ew.intl.string(ew.t.uXQ2xT)],
                parent: eN.s6.CHAT_TEXT_BOX,
                predicate: () => te,
            },
            [eN.s6.NOTIFICATIONS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.HcoRu0)],
                label: ew.intl.string(ew.t.HcoRu0),
                ariaLabel: ew.intl.string(ew.t.HcoRu0),
                element: ef.Z,
                url: eP.Z5c.SETTINGS("notifications"),
            },
            [eN.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t["/0WCll"])],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.VH8AIJ)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.xSmFQG)],
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
                searchableTitles: [ew.intl.string(ew.t.TTvjd9)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.VpSKeO)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.D9yVAH)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.u6dc5B)],
                parent: eN.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eN.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.P8MG6q)],
                parent: eN.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eN.s6.NOTIFICATIONS_SOUNDS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.MKWyKc)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_EMAILS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.TPchzM)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t["B75+xe"])],
                parent: eN.s6.NOTIFICATIONS_EMAILS,
            },
            [eN.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.sxn7lR)],
                parent: eN.s6.NOTIFICATIONS_EMAILS,
            },
            [eN.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.EkxXhe)],
                parent: eN.s6.NOTIFICATIONS_EMAILS,
            },
            [eN.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.jNrkrM)],
                parent: eN.s6.NOTIFICATIONS_EMAILS,
            },
            [eN.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.E8g1l8)],
                parent: eN.s6.NOTIFICATIONS_EMAILS,
            },
            [eN.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.Ra9Pwk)],
                parent: eN.s6.NOTIFICATIONS_EMAILS,
            },
            [eN.s6.NOTIFICATIONS_REACTIONS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.Rq0NFs)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.wtk08S)],
                parent: eN.s6.NOTIFICATIONS,
                predicate: () => (0, M.JN)("SettingsRendererConfig"),
            },
            [eN.s6.NOTIFICATIONS_FRIEND_ONLINE]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t["uvIi/4"])],
                parent: eN.s6.NOTIFICATIONS,
                predicate: () => (0, C.bH)("SettingsRendererConfig"),
            },
            [eN.s6.NOTIFICATIONS_USER_RESURRECTION]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.Zyn45S)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ew.intl.string(ew.t.pW4TMp)],
                parent: eN.s6.NOTIFICATIONS,
            },
            [eN.s6.KEYBINDS]: {
                section: eP.oAB.KEYBINDS,
                searchableTitles: [ew.intl.string(ew.t.T9DA2K)],
                label: ew.intl.string(ew.t.T9DA2K),
                element: eu.Z,
                url: eP.Z5c.SETTINGS("keybinds"),
            },
            [eN.s6.LANGUAGE]: {
                section: eP.oAB.LOCALE,
                searchableTitles: [ew.intl.string(ew.t.IHMsPn)],
                label: ew.intl.string(ew.t.IHMsPn),
                element: ed.Z,
                url: eP.Z5c.SETTINGS("language"),
            },
            [eN.s6.WINDOW_SETTINGS]: {
                section: eP.oAB.WINDOWS,
                searchableTitles: [ew.intl.string(ew.t.ZkDZov)],
                label: ew.intl.string(ew.t.ZkDZov),
                element: ey.Z,
                predicate: () => V.isPlatformEmbedded && (0, V.isWindows)(),
            },
            [eN.s6.LINUX_SETTINGS]: {
                section: eP.oAB.LINUX,
                searchableTitles: [ew.intl.string(ew.t["7pPjTW"])],
                label: ew.intl.string(ew.t["7pPjTW"]),
                element: eH,
                predicate: () => V.isPlatformEmbedded && (0, V.isLinux)(),
            },
            [eN.s6.STREAMER_MODE]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [ew.intl.string(ew.t.S5GfOW)],
                label: ew.intl.string(ew.t.S5GfOW),
                ariaLabel: ew.intl.string(ew.t.S5GfOW),
                element: eg.Z,
                url: eP.Z5c.SETTINGS("streamer-mode"),
            },
            [eN.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [ew.intl.string(ew.t.bxGbHL)],
                parent: eN.s6.STREAMER_MODE,
            },
            [eN.s6.STREAMER_MODE_ENABLE]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [ew.intl.string(ew.t.p9ZAJZ)],
                parent: eN.s6.STREAMER_MODE,
            },
            [eN.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [ew.intl.string(ew.t.UpQziA)],
                parent: eN.s6.STREAMER_MODE,
            },
            [eN.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [ew.intl.string(ew.t.q7WNGv)],
                parent: eN.s6.STREAMER_MODE,
            },
            [eN.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [ew.intl.string(ew.t["1CWknJ"])],
                parent: eN.s6.STREAMER_MODE,
            },
            [eN.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [ew.intl.string(ew.t.qmYiYd)],
                parent: eN.s6.STREAMER_MODE,
            },
            [eN.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [ew.intl.string(ew.t["iA81+a"])],
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
                searchableTitles: [ew.intl.string(ew.t["8/udY0"])],
                label: ew.intl.string(ew.t["8/udY0"]),
                ariaLabel: ew.intl.string(ew.t["8/udY0"]),
                element: $.ZP,
            },
            [eN.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [ew.intl.string(ew.t.ObIb1Q)],
                parent: eN.s6.SETTINGS_ADVANCED,
                predicate: () => Z.wS,
            },
            [eN.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [ew.intl.string(ew.t["eOC/F2"])],
                parent: eN.s6.SETTINGS_ADVANCED,
                predicate: () => V.isPlatformEmbedded,
            },
            [eN.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [ew.intl.string(ew.t.fi3UQN)],
                parent: eN.s6.SETTINGS_ADVANCED,
                predicate: () => eJ,
            },
            [eN.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [ew.intl.string(ew.t.erOqlh)],
                parent: eN.s6.SETTINGS_ADVANCED,
                predicate: () => e0,
            },
            [eN.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [ew.intl.string(ew.t.qDZryG)],
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
                searchableTitles: [ew.intl.string(ew.t.Cq98yL)],
                label: ew.intl.string(ew.t.Cq98yL),
                ariaLabel: ew.intl.string(ew.t.Cq98yL),
                element: J.Z,
                predicate: () => !eU,
                url: eP.Z5c.SETTINGS("activity-privacy"),
            },
            [eN.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eU ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ew.intl.string(ew.t["8ka8li"])],
                parent: eU ? eN.s6.GAMES_ACTIVITY_PRIVACY : eN.s6.ACTIVITY_PRIVACY,
            },
            [eN.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eU ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ew.intl.string(ew.t.VOszPA)],
                parent: eU ? eN.s6.GAMES_ACTIVITY_PRIVACY : eN.s6.ACTIVITY_PRIVACY,
            },
            [eN.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eU ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eN.CF],
                parent: eU ? eN.s6.GAMES_ACTIVITY_PRIVACY : eN.s6.ACTIVITY_PRIVACY,
            },
            [eN.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ew.intl.string(ew.t["4F2KoC"])],
                parent: eN.s6.ACTIVITY_PRIVACY,
            },
            [eN.s6.REGISTERED_GAMES]: {
                section: eP.oAB.REGISTERED_GAMES,
                searchableTitles: [ew.intl.string(ew.t.AVDyEj)],
                label: ew.intl.string(ew.t.AVDyEj),
                element: el.Z,
                predicate: () => !eU && (0, eI.Jw)(),
            },
            [eN.s6.OVERLAY]: {
                section: eP.oAB.OVERLAY,
                searchableTitles: [ew.intl.string(ew.t["9cb1Uz"]), ew.intl.string(ew.t.HcoRu0)],
                label: ew.intl.string(ew.t["9cb1Uz"]),
                element: e_.Z,
                predicate: () => !eU && L,
            },
            [eN.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, E.Z)(!0),
                searchableTitles: [ew.intl.string(ew.t.LRmNAl)],
                label: ew.intl.string(ew.t.LRmNAl),
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
                searchableTitles: [ew.intl.string(ew.t.sMEktT)],
                label: ew.intl.string(ew.t.sMEktT),
                ariaLabel: ew.intl.string(ew.t.sMEktT),
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
                                        header: ew.intl.string(ew.t["2jxGer"]),
                                        confirmText: ew.intl.string(ew.t["2jxGer"]),
                                        cancelText: ew.intl.string(ew.t["ETE/oC"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: ew.intl.string(ew.t.SUnWBB),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: ew.intl.string(ew.t["2jxGer"]),
                ariaLabel: ew.intl.string(ew.t["2jxGer"]),
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
