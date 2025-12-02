n.d(t, {
    $Z: () => eU,
    OF: () => eZ,
    W8: () => eB,
    _x: () => eF,
    c$: () => eG,
    ec: () => eV,
    iE: () => eY,
}),
    n(388685),
    n(539854);
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
    p = n(579806),
    _ = n(782568),
    m = n(758182),
    h = n(163379),
    g = n(703288),
    E = n(574755),
    b = n(296812),
    y = n(243778),
    O = n(594928),
    v = n(18438),
    S = n(778825),
    I = n(288047),
    T = n(351780),
    A = n(231765),
    C = n(522558),
    N = n(125900),
    P = n(813732),
    R = n(299886),
    w = n(398140),
    D = n(564344),
    x = n(172416),
    L = n(906467),
    j = n(857192),
    M = n(131951),
    k = n(25990),
    U = n(626135),
    G = n(572004),
    Z = n(49012),
    B = n(358085),
    F = n(998502),
    V = n(695346),
    H = n(604227),
    Y = n(846071),
    W = n(748717),
    K = n(419636),
    z = n(154022),
    q = n(736752),
    X = n(309739),
    Q = n(64914),
    J = n(501348),
    $ = n(795594),
    ee = n(443702),
    et = n(327192),
    en = n(949493),
    er = n(675047),
    ei = n(956699),
    ea = n(54942),
    eo = n(293389),
    es = n(387747),
    el = n(389650),
    ec = n(649157),
    eu = n(593648),
    ed = n(327885),
    ef = n(595242),
    ep = n(463153),
    e_ = n(36192),
    em = n(889029),
    eh = n(400287),
    eg = n(936982),
    eE = n(200645),
    eb = n(287490),
    ey = n(168308),
    eO = n(277329),
    ev = n(273927),
    eS = n(604224),
    eI = n(345655),
    eT = n(726985),
    eA = n(583139),
    eC = n(981631),
    eN = n(65154),
    eP = n(388032),
    eR = n(677065),
    ew = n(744038),
    eD = n(163646),
    ex = n(202323);
function eL(e, t, n) {
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
                eL(e, t, n[t]);
            });
    }
    return e;
}
function eM(e, t) {
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
function ek(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eM(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eU = () => [
        a.z.CLIENT_THEMES_SETTINGS_BADGE,
        a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE,
        a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE,
    ],
    eG = () => {
        let e = eU(),
            [t] = (0, y.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: eP.intl.string(eP.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE
              ? (0, r.jsx)(s.IGR, { text: eP.intl.string(eP.t.y2b7CA) })
              : null;
    },
    eZ = () => {
        let e = [];
        return (
            (0, x.hL)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            O.JH.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    eB = () => {
        let e = eZ(),
            [t] = (0, y.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: eP.intl.string(eP.t.y2b7CA) })
            : null;
    },
    eF = () => {
        let e = [];
        return (
            R.H.getConfig({ location: "SettingsRendererConfig" }).enabled && e.push(a.z.NITRO_PRIVACY_PERK_NEW_BADGE), e
        );
    },
    eV = () => {
        let e = eF(),
            [t] = (0, y.US)(e);
        return a.z.NITRO_PRIVACY_PERK_NEW_BADGE === t ? (0, r.jsx)(s.IGR, { text: eP.intl.string(eP.t.y2b7CA) }) : null;
    },
    eH = eE.Z,
    eY = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: y,
            searchParams: O,
            numOfPendingFamilyRequests: x,
            isOverlaySupported: eL,
            isClipsBetaTagShowing: eM = !1,
            shouldMergeGameSettings: eF,
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
            isChatMentionSuggestionsSettingEnabled: e9,
            isCrossDMSearchEnabledSettingVisible: te,
            isRedesignedNotificationsEnabled: tt,
        } = e;
        return Object.freeze({
            [eT.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: ep.Z,
            },
            [eT.s6.ACCOUNT_SECURITY_TAB]: {
                section: eC.oAB.ACCOUNT,
                searchableTitles: [eP.intl.string(eP.t.Am9YHi)],
                label: eP.intl.string(eP.t.Am9YHi),
            },
            [eT.s6.ACCOUNT]: {
                section: eC.oAB.ACCOUNT,
                searchableTitles: [eP.intl.string(eP.t["JAIM/m"])],
                label: eP.intl.string(eP.t["JAIM/m"]),
                ariaLabel: eP.intl.string(eP.t["JAIM/m"]),
                element: q.Z,
                url: eC.Z5c.SETTINGS("account"),
            },
            [eT.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eP.intl.string(eP.t.LYju5J)],
                parent: eT.s6.ACCOUNT,
                section: eC.oAB.ACCOUNT,
            },
            [eT.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eP.intl.string(eP.t["9AjdkD"])],
                section: eC.oAB.ACCOUNT,
                parent: eT.s6.ACCOUNT_PROFILE,
            },
            [eT.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eP.intl.string(eP.t.Ulqq6K)],
                section: eC.oAB.ACCOUNT,
                parent: eT.s6.ACCOUNT_PROFILE,
            },
            [eT.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    eP.intl.string(eP.t["/52UYy"]),
                    eP.intl.string(eP.t.sK0dmH),
                    eP.intl.string(eP.t.XxRj7f),
                    eP.intl.string(eP.t.yNGjyK),
                    eP.intl.string(eP.t.KPGVWl),
                ],
                section: eC.oAB.ACCOUNT,
                parent: eT.s6.ACCOUNT_PROFILE,
                predicate: () => e5,
            },
            [eT.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eP.intl.string(eP.t["+JkHPw"])],
                section: eC.oAB.ACCOUNT,
                parent: eT.s6.ACCOUNT_PROFILE,
            },
            [eT.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eP.intl.string(eP.t.oP5zGA)],
                section: eC.oAB.ACCOUNT,
                parent: eT.s6.ACCOUNT_PROFILE,
            },
            [eT.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eP.intl.string(eP.t.pKSjEj)],
                section: eC.oAB.ACCOUNT,
                parent: eT.s6.ACCOUNT,
            },
            [eT.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eP.intl.string(eP.t["FRep5/"])],
                section: eC.oAB.ACCOUNT,
                parent: eT.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eT.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eP.intl.string(eP.t["7qKDrE"])],
                section: eC.oAB.ACCOUNT,
                parent: eT.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eT.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eP.intl.string(eP.t.m0FidJ)],
                section: eC.oAB.ACCOUNT,
                parent: eT.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eT.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eP.intl.string(eP.t.cDgKte)],
                section: eC.oAB.ACCOUNT,
                parent: eT.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e$,
            },
            [eT.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eP.intl.string(eP.t["D+aE7g"])],
                section: eC.oAB.ACCOUNT,
                parent: eT.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e$,
            },
            [eT.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eP.intl.string(eP.t.fZSi1D)],
                section: eC.oAB.ACCOUNT,
                parent: eT.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eT.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eP.intl.string(eP.t.uHAJ5v)],
                section: eC.oAB.ACCOUNT,
                parent: eT.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eT.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eP.intl.string(eP.t.vrOCCk)],
                section: eC.oAB.ACCOUNT,
                parent: eT.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eT.s6.ACCOUNT_REMOVAL]: {
                section: eC.oAB.ACCOUNT,
                searchableTitles: [eP.intl.string(eP.t.ZKsIks)],
                parent: eT.s6.ACCOUNT,
            },
            [eT.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eC.oAB.ACCOUNT,
                searchableTitles: [eP.intl.string(eP.t.jf5GGb)],
                parent: eT.s6.ACCOUNT_REMOVAL,
            },
            [eT.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eC.oAB.ACCOUNT,
                searchableTitles: [eP.intl.string(eP.t["8lQ2rR"])],
                parent: eT.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eT.s6.GAMES]: {
                section: eC.oAB.GAMES,
                searchableTitles: [eP.intl.string(eP.t.URyqtP)],
                label: eP.intl.string(eP.t.URyqtP),
                ariaLabel: eP.intl.string(eP.t.URyqtP),
                element: eO.Z,
                predicate: () => eF,
            },
            [eT.s6.GAMES_MY_GAMES]: {
                section: eC.oAB.GAMES,
                searchableTitles: [eP.intl.string(eP.t["5DMgp9"])],
                parent: eT.s6.GAMES,
            },
            [eT.s6.GAMES_CLIPS]: {
                section: eC.oAB.GAMES,
                searchableTitles: [eP.intl.string(eP.t.z2jK6X)],
                parent: eT.s6.GAMES,
            },
            [eT.s6.GAMES_OVERLAY]: {
                section: eC.oAB.GAMES,
                searchableTitles: [eP.intl.string(eP.t["9cb1Uz"])],
                parent: eT.s6.GAMES,
            },
            [eT.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eC.oAB.GAMES,
                searchableTitles: [eP.intl.string(eP.t.Cq98yL)],
                parent: eT.s6.GAMES,
            },
            [eT.s6.PROFILE_CUSTOMIZATION]: {
                section: eC.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [eP.intl.string(eP.t["vi7f+q"])],
                label: eP.intl.string(eP.t["vi7f+q"]),
                ariaLabel: eP.intl.string(eP.t["vi7f+q"]),
                element: D.Z,
                newIndicator: (0, r.jsx)(eB, {}),
                newIndicatorDismissibleContentTypes: [...eZ()],
                notice: {
                    stores: [k.Z, S.Z],
                    element: w.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, v.It)(), (0, u.P6)(), d.Z.clearSubsection(eC.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eC.Z5c.SETTINGS("profile-customization"),
            },
            [eT.s6.PROFILE_DISPLAY_NAME]: {
                section: eC.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eP.intl.string(eP.t["9AjdkD"])],
                parent: eT.s6.PROFILE_CUSTOMIZATION,
            },
            [eT.s6.PROFILE_USER_PROFILE]: {
                section: eC.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eP.intl.string(eP.t["2p07FR"]), eP.intl.string(eP.t["7vhiqk"])],
                parent: eT.s6.PROFILE_CUSTOMIZATION,
            },
            [eT.s6.PROFILE_SERVER_PROFILES]: {
                section: eC.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eP.intl.string(eP.t.kPHroX)],
                parent: eT.s6.PROFILE_CUSTOMIZATION,
            },
            [eT.s6.CONTENT_SOCIAL]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                label: eP.intl.string(eP.t["+o1pDZ"]),
                searchableTitles: [eP.intl.string(eP.t["+o1pDZ"])],
                ariaLabel: eP.intl.string(eP.t["+o1pDZ"]),
                element: en.Z,
                url: eC.Z5c.SETTINGS("content-and-social"),
            },
            [eT.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t["+o1pDZ"]), eP.intl.string(eP.t["/7xJCF"])],
                parent: eT.s6.CONTENT_SOCIAL,
            },
            [eT.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t["+o1pDZ"]), eP.intl.string(eP.t["/7xJCF"])],
                parent: eT.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eT.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.YpCiMt)],
                parent: eT.s6.CONTENT_SOCIAL,
            },
            [eT.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                label: eP.intl.string(eP.t.YpCiMt),
                searchableTitles: [eP.intl.string(eP.t.YpCiMt)],
                ariaLabel: eP.intl.string(eP.t.YpCiMt),
                parent: eT.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eC.Z5c.SETTINGS(eC.oAB.CONTENT_AND_SOCIAL, eA.C),
            },
            [eT.s6.DATA_PRIVACY]: {
                section: eC.oAB.DATA_AND_PRIVACY,
                label: eP.intl.string(eP.t.OAuOHD),
                searchableTitles: [eP.intl.string(eP.t.OAuOHD)],
                ariaLabel: eP.intl.string(eP.t.OAuOHD),
                element: er.Z,
                url: eC.Z5c.SETTINGS("data-and-privacy"),
            },
            [eT.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eC.oAB.ACCOUNT,
                searchableTitles: [eP.intl.string(eP.t["Vov/9o"])],
                parent: eT.s6.ACCOUNT,
            },
            [eT.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eC.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.WWaFn5)],
                parent: eT.s6.DATA_PRIVACY,
                predicate: () => (0, B.isDesktop)(),
            },
            [eT.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eC.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t["opi/XK"])],
                parent: eT.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eT.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.xVRG4P)],
                parent: eT.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eT.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.fyA115)],
                parent: eT.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eT.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.fyA115)],
                parent: eT.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eT.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t["/U8Iwa"])],
                parent: eT.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eT.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t["ms+Tme"])],
                parent: eT.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eT.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t["y62Z/d"])],
                parent: eT.s6.CONTENT_SOCIAL,
            },
            [eT.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eC.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.SRZyHg)],
                parent: eT.s6.DATA_PRIVACY,
            },
            [eT.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eP.intl.string(eP.t.uEz8JF),
                    eP.intl.string(eP.t["N/oRI+"]),
                    eP.intl.string(eP.t.QVdYsK),
                    eP.intl.string(eP.t["aWD+tu"]),
                    eP.intl.string(eP.t["5mnTa7"]),
                ],
                parent: eT.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eT.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eP.intl.string(eP.t["Hj/But"]),
                    eP.intl.string(eP.t["N/oRI+"]),
                    eP.intl.string(eP.t.QVdYsK),
                    eP.intl.string(eP.t["aWD+tu"]),
                    eP.intl.string(eP.t["5mnTa7"]),
                    eP.intl.string(eP.t["K0OWP+"]),
                ],
                parent: eT.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eT.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eP.intl.string(eP.t["Hj/But"]),
                    eP.intl.string(eP.t["N/oRI+"]),
                    eP.intl.string(eP.t.QVdYsK),
                    eP.intl.string(eP.t["aWD+tu"]),
                    eP.intl.string(eP.t["5mnTa7"]),
                ],
                parent: eT.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eT.s6.GORE_MEDIA_REDACTION]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eP.intl.string(eP.t["Hj/But"]),
                    eP.intl.string(eP.t["N/oRI+"]),
                    eP.intl.string(eP.t.QVdYsK),
                    eP.intl.string(eP.t["aWD+tu"]),
                    eP.intl.string(eP.t["K0OWP+"]),
                ],
                parent: eT.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eT.s6.PARENTAL_CONTROLS_SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eC.oAB.FAMILY_CENTER_PARENTAL_CONTROLS,
                parent: eT.s6.PRIVACY_FAMILY_CENTER,
                predicate: () => !1,
            },
            [eT.s6.PARENTAL_CONTROLS_GORE_MEDIA_REDACTION]: {
                section: eC.oAB.FAMILY_CENTER_PARENTAL_CONTROLS,
                parent: eT.s6.PRIVACY_FAMILY_CENTER,
                predicate: () => !1,
            },
            [eT.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eP.intl.string(eP.t.JzaP4h),
                    eP.intl.string(eP.t.H9XOl3),
                    eP.intl.string(eP.t.k4W40P),
                ],
                parent: eT.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eT.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t["L+yTsa"])],
                parent: eT.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eT.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.XahVjj)],
                parent: eT.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eT.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                parent: eT.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eT.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.RAQUSN), eP.intl.string(eP.t.wbYDfT)],
                parent: eT.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eT.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t["3o2ojh"])],
                parent: eT.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !eQ,
            },
            [eT.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.OLwZDV)],
                parent: eT.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eT.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.wBkwux)],
                parent: eT.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eT.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eC.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.XuADY2)],
                parent: eT.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eT.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eC.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.MNKzyg)],
                parent: eT.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eT.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eC.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.VkS7Yd), eP.intl.string(eP.t.sJYh5t)],
                parent: eT.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eT.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eC.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.CyLYKZ)],
                parent: eT.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eT.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eC.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eT.CF],
                parent: eT.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eT.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eC.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.dmBSKo)],
                parent: eT.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eT.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t["1UaUy+"]), eP.intl.string(eP.t["xIk/iF"])],
                parent: eT.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eY,
            },
            [eT.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.qFsx5q)],
                parent: eT.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eK && !e1 && !ez,
            },
            [eT.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eC.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t["5b3FNI"])],
                parent: eT.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => e3,
            },
            [eT.s6.PRIVACY_FAMILY_CENTER]: {
                section: eC.oAB.FAMILY_CENTER,
                searchableTitles: [eP.intl.string(ew.default.gntCQT)],
                label: eP.intl.string(ew.default.gntCQT),
                ariaLabel: eP.intl.string(ew.default.gntCQT),
                element: ea.Z,
                badgeCount: x,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eP.intl.string(eP.t.y2b7CA),
                    color: o.Z.colors.BG_BRAND.css,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eC.Z5c.SETTINGS("family-center"),
            },
            [eT.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eC.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.BG7QsQ)],
                parent: eT.s6.DATA_PRIVACY,
            },
            [eT.s6.AUTHORIZED_APPS]: {
                section: eC.oAB.AUTHORIZED_APPS,
                searchableTitles: [eP.intl.string(eP.t["f6kk+r"])],
                label: eP.intl.string(eP.t["f6kk+r"]),
                element: $.Z,
                url: eC.Z5c.SETTINGS("authorized-apps"),
            },
            [eT.s6.SESSIONS]: {
                section: eC.oAB.SESSIONS,
                searchableTitles: [eP.intl.string(eP.t["+1h0k/"])],
                label: eP.intl.string(eP.t["+1h0k/"]),
                ariaLabel: eP.intl.string(eP.t["+1h0k/"]),
                element: e_.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == O ? void 0 : O.source },
            },
            [eT.s6.CONNECTIONS]: {
                section: eC.oAB.CONNECTIONS,
                searchableTitles: [eP.intl.string(eP.t["3fe7U5"])],
                label: eP.intl.string(eP.t["3fe7U5"]),
                ariaLabel: eP.intl.string(eP.t["3fe7U5"]),
                element: et.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == O ? void 0 : O.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eC.Z5c.SETTINGS("connections"),
            },
            [eT.s6.THIRD_PARTY_ACCESS]: {
                section: eC.oAB.CONNECTIONS,
                searchableTitles: [
                    eP.intl.string(eP.t["Ig/XFa"]),
                    eP.intl.string(eP.t["3fe7U5"]),
                    eP.intl.string(eP.t["f6kk+r"]),
                ],
                label: eP.intl.string(eP.t["Ig/XFa"]),
                parent: eT.s6.CONNECTIONS,
                element: eg.Z,
            },
            [eT.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eC.oAB.CONNECTIONS,
                searchableTitles: [eP.intl.string(eP.t["+/hZM/"])],
                parent: eT.s6.CONNECTIONS,
                element: et.Z,
            },
            [eT.s6.CLIPS]: {
                section: eC.oAB.CLIPS,
                searchableTitles: [eP.intl.string(eP.t.z2jK6X)],
                label: eP.intl.string(eP.t.z2jK6X),
                ariaLabel: eP.intl.string(eP.t.z2jK6X),
                icon: eM ? (0, r.jsx)(g.Z, {}) : void 0,
                element: E.Z,
                predicate: () => !eF,
                url: eC.Z5c.SETTINGS("clips"),
            },
            [eT.s6.CLIPS_RECORDING_TAB]: {
                section: eC.oAB.CLIPS,
                searchableTitles: [eP.intl.string(eP.t.iIwmV5)],
                parent: eT.s6.CLIPS,
            },
            [eT.s6.CLIPS_AUTOMATIC_TAB]: {
                section: eC.oAB.CLIPS,
                searchableTitles: [eP.intl.string(eP.t.sA0WKL)],
                parent: eT.s6.CLIPS,
            },
            [eT.s6.CLIPS_PRIVACY_TAB]: {
                section: eC.oAB.CLIPS,
                searchableTitles: [eP.intl.string(eP.t.GcIeET)],
                parent: eT.s6.CLIPS,
            },
            [eT.s6.RESTRICTED_USERS]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                parent: eT.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eP.intl.string(eP.t["3wRort"]),
                element: ev.ZP,
                predicate: () => e2 || e4,
            },
            [eT.s6.BLOCKED_USERS]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                parent: eT.s6.RESTRICTED_USERS,
                label: eP.intl.string(eP.t.PFOUKW),
                searchableTitles: [eP.intl.string(eP.t.PFOUKW)],
                element: ev.GF,
                predicate: () => e4,
            },
            [eT.s6.IGNORED_USERS]: {
                section: eC.oAB.CONTENT_AND_SOCIAL,
                parent: eT.s6.RESTRICTED_USERS,
                searchableTitles: [eP.intl.string(eP.t["93ZDWE"])],
                label: eP.intl.string(eP.t["93ZDWE"]),
                element: ev.yo,
                predicate: () => e2,
            },
            [eT.s6.PREMIUM]: {
                section: eC.oAB.PREMIUM,
                ariaLabel: eP.intl.string(eP.t.Ipxkog),
                searchableTitles: [eP.intl.string(eP.t.Ipxkog)],
                label: eP.intl.string(eP.t.Ipxkog),
                element: W.Z,
                className: ex.premiumTab,
            },
            [eT.s6.GUILD_BOOSTING]: {
                section: eC.oAB.GUILD_BOOSTING,
                searchableTitles: [eP.intl.string(eP.t["+CbP2v"])],
                label: eP.intl.string(eP.t["+CbP2v"]),
                element: ef.Z,
            },
            [eT.s6.SUBSCRIPTIONS]: {
                section: eC.oAB.SUBSCRIPTIONS,
                ariaLabel: eP.intl.string(eP.t.trSpHX),
                searchableTitles: [eP.intl.string(eP.t.trSpHX)],
                label: eP.intl.string(eP.t.trSpHX),
                element: P.Z,
                icon: y
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eT.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eC.oAB.SUBSCRIPTIONS,
                searchableTitles: [eP.intl.string(eP.t["2GKrvn"])],
                parent: eT.s6.SUBSCRIPTIONS,
            },
            [eT.s6.GIFT_INVENTORY]: {
                section: eC.oAB.INVENTORY,
                searchableTitles: [eP.intl.string(eP.t["jcSP+g"])],
                label: eP.intl.string(eP.t["jcSP+g"]),
                element: es.Z,
                ariaLabel: eP.intl.string(eP.t["jcSP+g"]),
                badgeCount: t,
            },
            [eT.s6.GIFT_CODE_REDEMPTION]: {
                section: eC.oAB.INVENTORY,
                searchableTitles: [eP.intl.string(eP.t["il+VCo"])],
                parent: eT.s6.GIFT_INVENTORY,
                predicate: () => !eq,
            },
            [eT.s6.GIFT_INVENTORY_QUESTS]: {
                section: eC.oAB.INVENTORY,
                searchableTitles: [eP.intl.string(eP.t.JALI2K)],
                parent: eT.s6.GIFT_INVENTORY,
                predicate: () => eX,
            },
            [eT.s6.GIFT_INVENTORY_LIST]: {
                section: eC.oAB.INVENTORY,
                searchableTitles: [eP.intl.string(eP.t["9KeUbY"])],
                parent: eT.s6.GIFT_INVENTORY,
                predicate: () => !eq,
            },
            [eT.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eC.oAB.INVENTORY,
                searchableTitles: [eP.intl.string(eP.t.vwMEHS)],
                parent: eT.s6.GIFT_INVENTORY,
                predicate: () => eq,
            },
            [eT.s6.BILLING]: {
                section: eC.oAB.BILLING,
                searchableTitles: [eP.intl.string(eP.t.oeUm2s)],
                label: eP.intl.string(eP.t.oeUm2s),
                ariaLabel: eP.intl.string(eP.t.oeUm2s),
                element: ee.Z,
            },
            [eT.s6.BILLING_PAYMENT_METHODS]: {
                section: eC.oAB.BILLING,
                searchableTitles: [eP.intl.string(eP.t.W26xGQ)],
                parent: eT.s6.BILLING,
            },
            [eT.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eC.oAB.BILLING,
                searchableTitles: [eP.intl.string(eP.t.obLrcK)],
                parent: eT.s6.BILLING,
            },
            [eT.s6.APPEARANCE]: {
                section: eC.oAB.APPEARANCE,
                searchableTitles: [eP.intl.string(eP.t["iHH+ky"])],
                label: eP.intl.string(eP.t["iHH+ky"]),
                ariaLabel: eP.intl.string(eP.t["iHH+ky"]),
                element: J.Z,
                newIndicator: (0, r.jsx)(eG, {}),
                newIndicatorDismissibleContentTypes: eU(),
                url: eC.Z5c.SETTINGS("appearance"),
            },
            [eT.s6.APPEARANCE_THEME]: {
                section: eC.oAB.APPEARANCE,
                searchableTitles: [eP.intl.string(eP.t.Ksh3ik)],
                parent: eT.s6.APPEARANCE,
            },
            [eT.s6.APPEARANCE_COLOR]: {
                section: eC.oAB.APPEARANCE,
                searchableTitles: [eP.intl.string(eP.t.OCOOiI)],
                parent: eT.s6.APPEARANCE_THEME,
            },
            [eT.s6.APPEARANCE_ICON]: {
                section: eC.oAB.APPEARANCE,
                searchableTitles: [eP.intl.string(eP.t.RPh2ou)],
                parent: eT.s6.APPEARANCE_THEME,
            },
            [eT.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eC.oAB.APPEARANCE,
                searchableTitles: [eP.intl.string(eP.t.ZEoGMd)],
                parent: eT.s6.APPEARANCE,
            },
            [eT.s6.APPEARANCE_LIST_SPACING]: {
                section: eC.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eT.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eP.intl.string(eP.t.y2b7CA),
                    color: o.Z.colors.BG_BRAND.css,
                }),
            },
            [eT.s6.APPEARANCE_SCALING_SPACING]: {
                section: eC.oAB.APPEARANCE,
                searchableTitles: [eP.intl.string(eP.t.qPOqoK)],
                parent: eT.s6.APPEARANCE,
            },
            [eT.s6.ACCESSIBILITY]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.G0neg7)],
                label: eP.intl.string(eP.t.G0neg7),
                ariaLabel: eP.intl.string(eP.t.G0neg7),
                element: z.Z,
                url: eC.Z5c.SETTINGS("accessibility"),
            },
            [eT.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.aZlePv)],
                parent: eT.s6.ACCESSIBILITY,
            },
            [eT.s6.ACCESSIBILITY_SWITCH_ICON]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t["S3z+pV"])],
                parent: eT.s6.ACCESSIBILITY,
            },
            [eT.s6.ACCESSIBILITY_SATURATION]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t["5PWWCY"])],
                parent: eT.s6.ACCESSIBILITY,
            },
            [eT.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.bQCodD)],
                parent: eT.s6.ACCESSIBILITY_SATURATION,
            },
            [eT.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.OLZFB8)],
                parent: eT.s6.ACCESSIBILITY,
            },
            [eT.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t["+Isihb"])],
                parent: eT.s6.ACCESSIBILITY,
                predicate: () => (0, b.A)("SettingsRendererConfig"),
            },
            [eT.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.uSOPWm)],
                parent: eT.s6.ACCESSIBILITY,
            },
            [eT.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eR.default["2gFUEw"])],
                parent: eT.s6.ACCESSIBILITY,
            },
            [eT.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.BT8Bmp)],
                parent: eT.s6.ACCESSIBILITY,
            },
            [eT.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t["sSY+mD"])],
                parent: eT.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eT.s6.ACCESSIBILITY_CONTRAST]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t["TYyfO/"])],
                parent: eT.s6.ACCESSIBILITY,
            },
            [eT.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.cguiec)],
                parent: eT.s6.ACCESSIBILITY_CONTRAST,
            },
            [eT.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.e3TR1b)],
                parent: eT.s6.ACCESSIBILITY,
            },
            [eT.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.b3XBzg)],
                parent: eT.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eT.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.Iayoh5)],
                parent: eT.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eT.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.iIaOlc)],
                parent: eT.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eT.s6.ACCESSIBILITY_STICKERS]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t["6NtAuJ"])],
                parent: eT.s6.ACCESSIBILITY,
            },
            [eT.s6.ACCESSIBILITY_MESSAGES]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.onqU6o)],
                parent: eT.s6.ACCESSIBILITY,
            },
            [eT.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t["3Fztn5"])],
                parent: eT.s6.ACCESSIBILITY_MESSAGES,
            },
            [eT.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.TZ2hZH)],
                parent: eT.s6.ACCESSIBILITY_MESSAGES,
            },
            [eT.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.VpSKeO)],
                parent: eT.s6.ACCESSIBILITY,
            },
            [eT.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.qvTIwX)],
                parent: eT.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                predicate: () => !tt,
            },
            [eT.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.lsW5Ev)],
                parent: eT.s6.ACCESSIBILITY,
            },
            [eT.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eC.oAB.ACCESSIBILITY,
                searchableTitles: [eT.CF],
                parent: eT.s6.ACCESSIBILITY,
            },
            [eT.s6.VOICE_AND_VIDEO]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.B1fFpf)],
                label: eP.intl.string(eP.t.B1fFpf),
                ariaLabel: eP.intl.string(eP.t.B1fFpf),
                element: eS.Z,
                predicate: () => M.Z.isSupported(),
                url: eC.Z5c.SETTINGS("voice"),
            },
            [eT.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.K3lovD), eP.intl.string(eP.t.NiTd0e)],
                parent: eT.s6.VOICE_AND_VIDEO,
            },
            [eT.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.FlNoSV)],
                parent: eT.s6.VOICE_AND_VIDEO,
            },
            [eT.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.ABjMWI)],
                parent: eT.s6.VOICE_AND_VIDEO,
            },
            [eT.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.OFpL3c)],
                parent: eT.s6.VOICE_AND_VIDEO,
            },
            [eT.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.KDdjou), eP.intl.string(eP.t.FeUKeA)],
                parent: eT.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eT.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.K3lovD), eP.intl.string(eP.t.NiTd0e)],
                parent: eT.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eT.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eC.oAB.VOICE,
                searchableTitles: [
                    eP.intl.string(eP.t.hHMYbb),
                    eP.intl.string(eP.t.dl18zb),
                    eP.intl.string(eP.t.nuFtHH),
                    eP.intl.string(eP.t["3182VD"]),
                    eP.intl.string(eP.t["DGq/PR"]),
                ],
                parent: eT.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eT.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eC.oAB.VOICE,
                searchableTitles: [
                    eP.intl.string(eP.t.OX2Bnr),
                    eP.intl.string(eP.t.eATD2B),
                    eP.intl.string(eP.t.nuFtHH),
                    eP.intl.string(eP.t["3182VD"]),
                    eP.intl.string(eP.t["DGq/PR"]),
                ],
                parent: eT.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eT.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.gyljWE), eP.intl.string(eP.t.nuFtHH)],
                parent: eT.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eT.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eC.oAB.VOICE,
                searchableTitles: [
                    eP.intl.string(eP.t.LM3U3k),
                    eP.intl.string(eP.t.nuFtHH),
                    eP.intl.string(eP.t.VZPR0R),
                    eP.intl.string(eP.t.cjPbpT),
                ],
                parent: eT.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, Y.P)({ location: "SettingsRendererConfig" });
                    return e.length > 0;
                },
            },
            [eT.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["pS+K2L"]), eP.intl.string(eP.t.nuFtHH)],
                parent: eT.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => e6 !== eI._.STUDIO,
            },
            [eT.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["sqUm+k"]), eP.intl.string(eP.t.nuFtHH)],
                parent: eT.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => e8 === eN.pM.VOICE_ACTIVITY && e7,
            },
            [eT.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.e7LIiY)],
                parent: eT.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eT.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.nzUc3B)],
                parent: eT.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eT.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.ABjMWI)],
                parent: eT.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eT.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.nzUc3B)],
                parent: eT.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eT.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.LKzQSF)],
                parent: eT.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eT.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.F122Gz)],
                parent: eT.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => M.Z.supports(eN.AN.VIDEO),
            },
            [eT.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["3Ppr1h"])],
                parent: eT.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eT.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.lZTUPs)],
                parent: eT.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => M.Z.supports(eN.AN.VIDEO),
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["8/udY0"])],
                parent: eT.s6.VOICE_AND_VIDEO,
            },
            [eT.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["8/udY0"])],
                parent: eT.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["6I6GUv"])],
                parent: eT.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => e7,
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.iWTwu6)],
                parent: eT.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["/jwMtn"])],
                parent: eT.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eT.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.OBwCXF)],
                parent: eT.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.t8Qhib), eP.intl.string(eP.t.hmfkCi)],
                parent: eT.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => M.Z.isNoiseSuppressionSupported(),
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.BbESsg)],
                parent: eT.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => M.Z.isAdvancedVoiceActivitySupported(),
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.cUMdH0)],
                parent: eT.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => M.Z.isAutomaticGainControlSupported(),
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.DFPXIG)],
                parent: eT.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => M.Z.showBypassSystemInputProcessing(),
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.uancuJ)],
                parent: eT.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => M.Z.supports(eN.AN.QOS),
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.oSdBvW)],
                parent: eT.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => M.Z.supports(eN.AN.ATTENUATION),
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.wVBHr0)],
                parent: eT.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => M.Z.shouldOfferManualSubsystemSelection(),
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eC.oAB.VOICE,
                searchableTitles: [
                    eP.intl.string(eP.t.KDdjou),
                    eP.intl.string(eP.t.NMCIf9),
                    eP.intl.string(eP.t.FeUKeA),
                ],
                parent: eT.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    M.Z.supportsVideoHook() ||
                    M.Z.supportsExperimentalSoundshare() ||
                    (M.Z.supportsSystemScreensharePicker() && (0, B.isMac)()),
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.GmWk2E), eP.intl.string(eP.t["Fj/xn1"])],
                parent: eT.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => M.Z.supportsVideoHook(),
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["4I0qzZ"])],
                parent: eT.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => M.Z.supportsExperimentalSoundshare() && M.Z.supportsHookSoundshare(),
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.ie1mgY)],
                parent: eT.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => M.Z.supportsSystemScreensharePicker() && (0, B.isMac)(),
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["aP1N/m"])],
                parent: eT.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => B.isPlatformEmbedded,
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.OFpL3c)],
                parent: eT.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["0CEP6e"])],
                parent: eT.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => V.Sb.getSetting(),
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["r6K+TL"])],
                parent: eT.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => M.Z.isAecDumpSupported(),
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.U4FgFK)],
                parent: eT.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === F.ZP.releaseChannel || "development" === F.ZP.releaseChannel) &&
                    eW &&
                    M.Z.supports(eN.AN.CONNECTION_REPLAY),
            },
            [eT.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["726JHL"])],
                parent: eT.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    B.isPlatformEmbedded && M.Z.supports(eN.AN.DEBUG_LOGGING) && null != p.Z.fileManager.readLogFiles,
            },
            [eT.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eC.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["/RXu67"])],
                parent: eT.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eT.s6.POGGERMODE]: {
                section: eC.oAB.POGGERMODE,
                searchableTitles: [eP.intl.string(eP.t.AtCukI)],
                label: eP.intl.string(eP.t.AtCukI),
                ariaLabel: eP.intl.string(eP.t.AtCukI),
                element: A.Z,
                predicate: () => T.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: ex.poggermodeIcon,
                }),
            },
            [eT.s6.CHAT]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t["/VQax8"])],
                label: eP.intl.string(eP.t["/VQax8"]),
                ariaLabel: eP.intl.string(eP.t["/VQax8"]),
                element: eh.Z,
                url: eC.Z5c.SETTINGS("text"),
            },
            [eT.s6.MESSAGE_SEARCH]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.VYODPD)],
                parent: eT.s6.CHAT,
                predicate: () => te,
            },
            [eT.s6.MESSAGE_SEARCH_ALL_DMS]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t["t4+fbe"])],
                parent: eT.s6.MESSAGE_SEARCH,
                predicate: () => te,
            },
            [eT.s6.CHAT_INLINE_MEDIA]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.U68Dgp)],
                parent: eT.s6.CHAT,
            },
            [eT.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.U47N1p)],
                parent: eT.s6.CHAT_INLINE_MEDIA,
            },
            [eT.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.VP11No)],
                parent: eT.s6.CHAT_INLINE_MEDIA,
            },
            [eT.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t["5S2AK+"])],
                parent: eT.s6.CHAT_INLINE_MEDIA,
            },
            [eT.s6.CHAT_EMBEDS]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.PWZOn4)],
                parent: eT.s6.CHAT,
            },
            [eT.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.xX0ZTA)],
                parent: eT.s6.CHAT_EMBEDS,
            },
            [eT.s6.CHAT_EMOJI]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.sMOuuS)],
                parent: eT.s6.CHAT,
            },
            [eT.s6.CHAT_EMOJI_REACTIONS]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.Iv24sm)],
                parent: eT.s6.CHAT_EMOJI,
            },
            [eT.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t["79qal8"])],
                parent: eT.s6.CHAT_EMOJI,
            },
            [eT.s6.CHAT_STICKERS]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t["6NtAuJ"])],
                parent: eT.s6.CHAT,
            },
            [eT.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t["29xPVZ"])],
                parent: eT.s6.CHAT_STICKERS,
            },
            [eT.s6.CHAT_SOUNDMOJI]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.EHlAMc)],
                parent: eT.s6.CHAT,
                predicate: () => (0, N.dX)({ location: "SettingsRendererConfig" }),
            },
            [eT.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t["CtYr+U"])],
                parent: eT.s6.CHAT_SOUNDMOJI,
                predicate: () => (0, N.dX)({ location: "SettingsRendererConfig" }),
            },
            [eT.s6.CHAT_TEXT_BOX]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.afR0pI)],
                parent: eT.s6.CHAT,
            },
            [eT.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.AqGrEI)],
                parent: eT.s6.CHAT_TEXT_BOX,
            },
            [eT.s6.CHAT_THREADS]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.B2panI)],
                parent: eT.s6.CHAT,
            },
            [eT.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.AInv5m)],
                parent: eT.s6.CHAT_THREADS,
            },
            [eT.s6.CHAT_SPOILERS]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.QgwmVz)],
                parent: eT.s6.CHAT,
            },
            [eT.s6.CHAT_MENTION_SUGGESTIONS]: {
                section: eC.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.uXQ2xT)],
                parent: eT.s6.CHAT_TEXT_BOX,
                predicate: () => e9,
            },
            [eT.s6.NOTIFICATIONS]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.HcoRu0)],
                label: eP.intl.string(eP.t.HcoRu0),
                ariaLabel: eP.intl.string(eP.t.HcoRu0),
                element: eu.Z,
                url: eC.Z5c.SETTINGS("notifications"),
            },
            [eT.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t["/0WCll"])],
                parent: eT.s6.NOTIFICATIONS,
            },
            [eT.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eT.s6.NOTIFICATIONS,
            },
            [eT.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.VH8AIJ)],
                parent: eT.s6.NOTIFICATIONS,
            },
            [eT.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.xSmFQG)],
                parent: eT.s6.NOTIFICATIONS,
                predicate: () => (0, B.isWindows)(),
            },
            [eT.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: ["New Unreads Setting (Experimental)"],
                parent: eT.s6.NOTIFICATIONS,
            },
            [eT.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.TTvjd9)],
                parent: eT.s6.NOTIFICATIONS,
            },
            [eT.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.VpSKeO)],
                parent: eT.s6.NOTIFICATIONS,
            },
            [eT.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.D9yVAH)],
                parent: eT.s6.NOTIFICATIONS,
            },
            [eT.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.u6dc5B)],
                parent: eT.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eT.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.P8MG6q)],
                parent: eT.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eT.s6.NOTIFICATIONS_SOUNDS]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.MKWyKc)],
                parent: eT.s6.NOTIFICATIONS,
            },
            [eT.s6.NOTIFICATIONS_EMAILS]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.TPchzM)],
                parent: eT.s6.NOTIFICATIONS,
            },
            [eT.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t["B75+xe"])],
                parent: eT.s6.NOTIFICATIONS_EMAILS,
            },
            [eT.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.sxn7lR)],
                parent: eT.s6.NOTIFICATIONS_EMAILS,
            },
            [eT.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.EkxXhe)],
                parent: eT.s6.NOTIFICATIONS_EMAILS,
            },
            [eT.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.jNrkrM)],
                parent: eT.s6.NOTIFICATIONS_EMAILS,
            },
            [eT.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.E8g1l8)],
                parent: eT.s6.NOTIFICATIONS_EMAILS,
            },
            [eT.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.Ra9Pwk)],
                parent: eT.s6.NOTIFICATIONS_EMAILS,
            },
            [eT.s6.NOTIFICATIONS_REACTIONS]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.Rq0NFs)],
                parent: eT.s6.NOTIFICATIONS,
            },
            [eT.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.wtk08S)],
                parent: eT.s6.NOTIFICATIONS,
            },
            [eT.s6.NOTIFICATIONS_FRIEND_ANNIVERSARY]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.hi4dSk)],
                parent: eT.s6.NOTIFICATIONS,
                predicate: () => (0, C.i)("SettingsRendererConfig"),
            },
            [eT.s6.NOTIFICATIONS_FRIEND_ONLINE]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t["uvIi/4"])],
                parent: eT.s6.NOTIFICATIONS,
                predicate: () => (0, I.bH)("SettingsRendererConfig"),
            },
            [eT.s6.NOTIFICATIONS_USER_RESURRECTION]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.Zyn45S)],
                parent: eT.s6.NOTIFICATIONS,
            },
            [eT.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eC.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.pW4TMp)],
                parent: eT.s6.NOTIFICATIONS,
            },
            [eT.s6.KEYBINDS]: {
                section: eC.oAB.KEYBINDS,
                searchableTitles: [eP.intl.string(eP.t.T9DA2K)],
                label: eP.intl.string(eP.t.T9DA2K),
                element: el.Z,
                url: eC.Z5c.SETTINGS("keybinds"),
            },
            [eT.s6.LANGUAGE]: {
                section: eC.oAB.LOCALE,
                searchableTitles: [
                    eP.intl.string(eP.t.IHMsPn),
                    eP.intl.string(eP.t.dyamEI),
                    eP.intl.string(eP.t.p8NOwi),
                    eP.intl.string(eP.t["+o/sOo"]),
                ],
                label: eP.intl.string(eP.t.KyFVyi),
                element: ec.Z,
                url: eC.Z5c.SETTINGS("language"),
            },
            [eT.s6.WINDOW_SETTINGS]: {
                section: eC.oAB.WINDOWS,
                searchableTitles: [eP.intl.string(eP.t.ZkDZov)],
                label: eP.intl.string(eP.t.ZkDZov),
                element: eE.Z,
                predicate: () => B.isPlatformEmbedded && (0, B.isWindows)(),
            },
            [eT.s6.LINUX_SETTINGS]: {
                section: eC.oAB.LINUX,
                searchableTitles: [eP.intl.string(eP.t["7pPjTW"])],
                label: eP.intl.string(eP.t["7pPjTW"]),
                element: eH,
                predicate: () => B.isPlatformEmbedded && (0, B.isLinux)(),
            },
            [eT.s6.STREAMER_MODE]: {
                section: eC.oAB.STREAMER_MODE,
                searchableTitles: [eP.intl.string(eP.t.S5GfOW)],
                label: eP.intl.string(eP.t.S5GfOW),
                ariaLabel: eP.intl.string(eP.t.S5GfOW),
                element: em.Z,
                url: eC.Z5c.SETTINGS("streamer-mode"),
            },
            [eT.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eC.oAB.STREAMER_MODE,
                searchableTitles: [eP.intl.string(eP.t.bxGbHL)],
                parent: eT.s6.STREAMER_MODE,
            },
            [eT.s6.STREAMER_MODE_ENABLE]: {
                section: eC.oAB.STREAMER_MODE,
                searchableTitles: [eP.intl.string(eP.t.p9ZAJZ)],
                parent: eT.s6.STREAMER_MODE,
            },
            [eT.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eC.oAB.STREAMER_MODE,
                searchableTitles: [eP.intl.string(eP.t.UpQziA)],
                parent: eT.s6.STREAMER_MODE,
            },
            [eT.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eC.oAB.STREAMER_MODE,
                searchableTitles: [eP.intl.string(eP.t.q7WNGv)],
                parent: eT.s6.STREAMER_MODE,
            },
            [eT.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eC.oAB.STREAMER_MODE,
                searchableTitles: [eP.intl.string(eP.t["1CWknJ"])],
                parent: eT.s6.STREAMER_MODE,
            },
            [eT.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eC.oAB.STREAMER_MODE,
                searchableTitles: [eP.intl.string(eP.t.qmYiYd)],
                parent: eT.s6.STREAMER_MODE,
            },
            [eT.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eC.oAB.STREAMER_MODE,
                searchableTitles: [eP.intl.string(eP.t["iA81+a"])],
                parent: eT.s6.STREAMER_MODE,
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
            [eT.s6.SETTINGS_ADVANCED]: {
                section: eC.oAB.ADVANCED,
                searchableTitles: [eP.intl.string(eP.t["8/udY0"])],
                label: eP.intl.string(eP.t["8/udY0"]),
                ariaLabel: eP.intl.string(eP.t["8/udY0"]),
                element: Q.ZP,
            },
            [eT.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eC.oAB.ADVANCED,
                searchableTitles: [eP.intl.string(eP.t.ObIb1Q)],
                parent: eT.s6.SETTINGS_ADVANCED,
                predicate: () => G.wS,
            },
            [eT.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eC.oAB.ADVANCED,
                searchableTitles: [eP.intl.string(eP.t["eOC/F2"])],
                parent: eT.s6.SETTINGS_ADVANCED,
                predicate: () => B.isPlatformEmbedded,
            },
            [eT.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eC.oAB.ADVANCED,
                searchableTitles: [eP.intl.string(eP.t.fi3UQN)],
                parent: eT.s6.SETTINGS_ADVANCED,
                predicate: () => eJ,
            },
            [eT.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eC.oAB.ADVANCED,
                searchableTitles: [eP.intl.string(eP.t.erOqlh)],
                parent: eT.s6.SETTINGS_ADVANCED,
                predicate: () => e0,
            },
            [eT.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eC.oAB.ADVANCED,
                searchableTitles: [eP.intl.string(eP.t.qDZryG)],
                parent: eT.s6.SETTINGS_ADVANCED,
            },
            [eT.s6.PRIVATE_BROWSING_PERK]: {
                section: eC.oAB.CF_WARP,
                searchableTitles: [eP.intl.string(eD.default.SsTtq3)],
                predicate: () => R.H.getConfig({ location: "SettingsRendererConfig" }).enabled,
                newIndicator: (0, r.jsx)(eV, {}),
                newIndicatorDismissibleContentTypes: [a.z.NITRO_PRIVACY_PERK_NEW_BADGE],
                url: eC.Z5c.SETTINGS("private-browsing"),
            },
            [eT.s6.ACTIVITY_PRIVACY]: {
                section: eC.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.Cq98yL)],
                label: eP.intl.string(eP.t.Cq98yL),
                ariaLabel: eP.intl.string(eP.t.Cq98yL),
                element: X.Z,
                predicate: () => !eF,
                url: eC.Z5c.SETTINGS("activity-privacy"),
            },
            [eT.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eF ? eC.oAB.GAMES : eC.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t["8ka8li"])],
                parent: eF ? eT.s6.GAMES_ACTIVITY_PRIVACY : eT.s6.ACTIVITY_PRIVACY,
            },
            [eT.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eF ? eC.oAB.GAMES : eC.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.VOszPA)],
                parent: eF ? eT.s6.GAMES_ACTIVITY_PRIVACY : eT.s6.ACTIVITY_PRIVACY,
            },
            [eT.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eF ? eC.oAB.GAMES : eC.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eT.CF],
                parent: eF ? eT.s6.GAMES_ACTIVITY_PRIVACY : eT.s6.ACTIVITY_PRIVACY,
            },
            [eT.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eC.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t["4F2KoC"])],
                parent: eT.s6.ACTIVITY_PRIVACY,
            },
            [eT.s6.REGISTERED_GAMES]: {
                section: eC.oAB.REGISTERED_GAMES,
                searchableTitles: [eP.intl.string(eP.t.AVDyEj)],
                label: eP.intl.string(eP.t.AVDyEj),
                element: eo.Z,
                predicate: () => !eF && (0, ey.Jw)(),
            },
            [eT.s6.OVERLAY]: {
                section: eC.oAB.OVERLAY,
                searchableTitles: [eP.intl.string(eP.t["9cb1Uz"]), eP.intl.string(eP.t.HcoRu0)],
                label: eP.intl.string(eP.t["9cb1Uz"]),
                element: ed.Z,
                predicate: () => !eF && eL,
            },
            [eT.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, h.Z)(!0),
                searchableTitles: [eP.intl.string(eP.t.LRmNAl)],
                label: eP.intl.string(eP.t.LRmNAl),
            },
            [eT.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    U.default.track(eC.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, Z.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                U.default.track(eC.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, _.Z)(e);
                            },
                        });
                },
                searchableTitles: [eP.intl.string(eP.t.sMEktT)],
                label: eP.intl.string(eP.t.sMEktT),
                ariaLabel: eP.intl.string(eP.t.sMEktT),
            },
            [eT.s6.EXPERIMENTS]: {
                section: eC.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: eb.Z,
                predicate: () => L.Z.isDeveloper,
                url: eC.Z5c.SETTINGS("experiments"),
            },
            [eT.s6.DEVELOPER_OPTIONS]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: ei.Z,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eT.s6.DEVELOPER_OPTIONS,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eT.s6.DEVELOPER_OPTIONS,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eT.s6.DEVELOPER_OPTIONS,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eT.s6.DEVELOPER_OPTIONS,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eT.s6.DEVELOPER_OPTIONS,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eT.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eT.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eT.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eT.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eT.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eT.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eT.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eW && L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eT.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eT.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eT.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eW && L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eT.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eT.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eT.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eW && L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_HIGHLIGHT_MANA_COMPONENTS]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Mana Components"],
                parent: eT.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eW && L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Void Toggleable Components"],
                parent: eT.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eW && L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eT.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eW && L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eT.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eW && L.Z.isDeveloper && j.default.layoutDebuggingEnabled,
            },
            [eT.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eT.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eW && L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eT.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eW && L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eT.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eT.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eT.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eT.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eT.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eT.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => m.q && L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_SHOW_TOTP_SUCCESS]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Show TOTP Success"],
                parent: eT.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eT.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eT.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eT.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eT.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eT.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eC.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eT.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => L.Z.isDeveloper,
            },
            [eT.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            ek(
                                ej(
                                    {
                                        header: eP.intl.string(eP.t["2jxGer"]),
                                        confirmText: eP.intl.string(eP.t["2jxGer"]),
                                        cancelText: eP.intl.string(eP.t["ETE/oC"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: eP.intl.string(eP.t.SUnWBB),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: eP.intl.string(eP.t["2jxGer"]),
                ariaLabel: eP.intl.string(eP.t["2jxGer"]),
                icon: (0, r.jsx)(s.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [eT.s6.SOCIAL_LINKS]: {
                section: f.ID.CUSTOM,
                element: K.Z,
            },
            [eT.s6.CLIENT_DEBUG_INFO]: {
                section: f.ID.CUSTOM,
                element: H.Z,
            },
        });
    };
