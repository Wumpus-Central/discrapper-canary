n.d(t, {
    $Z: () => eB,
    OF: () => eF,
    W8: () => eV,
    _x: () => eH,
    c$: () => eZ,
    ec: () => eW,
    iE: () => eK,
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
    _ = n(579806),
    p = n(782568),
    h = n(758182),
    m = n(163379),
    g = n(703288),
    E = n(574755),
    b = n(296812),
    y = n(377171),
    O = n(243778),
    v = n(594928),
    I = n(18438),
    T = n(778825),
    S = n(288047),
    A = n(351780),
    C = n(231765),
    N = n(522558),
    R = n(125900),
    P = n(813732),
    D = n(299886),
    w = n(398140),
    L = n(564344),
    x = n(145158),
    M = n(172416),
    k = n(906467),
    j = n(857192),
    U = n(131951),
    G = n(25990),
    B = n(626135),
    Z = n(572004),
    F = n(49012),
    V = n(358085),
    H = n(998502),
    W = n(695346),
    Y = n(604227),
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
    eO = n(287490),
    ev = n(168308),
    eI = n(277329),
    eT = n(273927),
    eS = n(604224),
    eA = n(345655),
    eC = n(726985),
    eN = n(583139),
    eR = n(981631),
    eP = n(65154),
    eD = n(388032),
    ew = n(677065),
    eL = n(744038),
    ex = n(163646),
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
let eB = () => [
        a.z.CLIENT_THEMES_SETTINGS_BADGE,
        a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE,
        a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE,
    ],
    eZ = () => {
        let e = eB(),
            [t] = (0, O.US)(e);
        return t === a.z.CLIENT_THEMES_SETTINGS_BADGE || t === a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ? (0, r.jsx)(s.lBU, { text: eD.intl.string(eD.t.y2b7CA) })
            : t === a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE
              ? (0, r.jsx)(s.IGR, { text: eD.intl.string(eD.t.y2b7CA) })
              : null;
    },
    eF = () => {
        let e = [];
        return (
            (0, M.hL)("SettingsRendererConfig") && e.push(a.z.WIDGETS_USER_SETTINGS_NEW_BADGE),
            v.JH.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    eV = () => {
        let e = eF(),
            [t] = (0, O.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: eD.intl.string(eD.t.y2b7CA) })
            : null;
    },
    eH = () => {
        let e = [];
        return (
            D.H.getConfig({ location: "SettingsRendererConfig" }).enabled && e.push(a.z.NITRO_PRIVACY_PERK_NEW_BADGE), e
        );
    },
    eW = () => {
        let e = eH(),
            [t] = (0, O.US)(e);
        return a.z.NITRO_PRIVACY_PERK_NEW_BADGE === t ? (0, r.jsx)(s.IGR, { text: eD.intl.string(eD.t.y2b7CA) }) : null;
    },
    eY = ey.Z,
    eK = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: O,
            searchParams: v,
            numOfPendingFamilyRequests: M,
            isOverlaySupported: ek,
            isClipsBetaTagShowing: eU = !1,
            shouldMergeGameSettings: eH,
            isKeywordFilteringEnabled: eK,
            isStaff: ez,
            isInappropriateConversationWarningEnabled: eq,
            isInapproprateConversationsDefaultOn: eX,
            paymentsBlocked: eQ,
            isEligibleForQuests: eJ,
            isStricterMessageRequestsEnabled: e$,
            hasLibraryApplication: e0,
            hasTOTPEnabled: e1,
            developerMode: e3,
            isAdultUser: e2,
            hasSecureFramesVerifiedUserIds: e4,
            hasIgnoredUsers: e5,
            hasBlockedUsers: e8,
            isEligibleForSensitiveContentDefaults: e6,
            inputMode: e7,
            activeInputProfile: e9,
            isInputProfileCustom: te,
            isChatMentionSuggestionsSettingEnabled: tt,
            isCrossDMSearchEnabledSettingVisible: tn,
            isRedesignedNotificationsEnabled: tr,
        } = e;
        return Object.freeze({
            [eC.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: eh.Z,
            },
            [eC.s6.ACCOUNT_SECURITY_TAB]: {
                section: eR.oAB.ACCOUNT,
                searchableTitles: [eD.intl.string(eD.t.Am9YHi)],
                label: eD.intl.string(eD.t.Am9YHi),
            },
            [eC.s6.ACCOUNT]: {
                section: eR.oAB.ACCOUNT,
                searchableTitles: [eD.intl.string(eD.t["JAIM/m"])],
                label: eD.intl.string(eD.t["JAIM/m"]),
                ariaLabel: eD.intl.string(eD.t["JAIM/m"]),
                element: Q.Z,
                url: eR.Z5c.SETTINGS("account"),
            },
            [eC.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eD.intl.string(eD.t.LYju5J)],
                parent: eC.s6.ACCOUNT,
                section: eR.oAB.ACCOUNT,
            },
            [eC.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eD.intl.string(eD.t["9AjdkD"])],
                section: eR.oAB.ACCOUNT,
                parent: eC.s6.ACCOUNT_PROFILE,
            },
            [eC.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eD.intl.string(eD.t.Ulqq6K)],
                section: eR.oAB.ACCOUNT,
                parent: eC.s6.ACCOUNT_PROFILE,
            },
            [eC.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    eD.intl.string(eD.t["/52UYy"]),
                    eD.intl.string(eD.t.sK0dmH),
                    eD.intl.string(eD.t.XxRj7f),
                    eD.intl.string(eD.t.yNGjyK),
                    eD.intl.string(eD.t.KPGVWl),
                ],
                section: eR.oAB.ACCOUNT,
                parent: eC.s6.ACCOUNT_PROFILE,
                predicate: () => e6,
            },
            [eC.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eD.intl.string(eD.t["+JkHPw"])],
                section: eR.oAB.ACCOUNT,
                parent: eC.s6.ACCOUNT_PROFILE,
            },
            [eC.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eD.intl.string(eD.t.oP5zGA)],
                section: eR.oAB.ACCOUNT,
                parent: eC.s6.ACCOUNT_PROFILE,
            },
            [eC.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eD.intl.string(eD.t.pKSjEj)],
                section: eR.oAB.ACCOUNT,
                parent: eC.s6.ACCOUNT,
            },
            [eC.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eD.intl.string(eD.t["FRep5/"])],
                section: eR.oAB.ACCOUNT,
                parent: eC.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eC.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eD.intl.string(eD.t["7qKDrE"])],
                section: eR.oAB.ACCOUNT,
                parent: eC.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eC.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eD.intl.string(eD.t.m0FidJ)],
                section: eR.oAB.ACCOUNT,
                parent: eC.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eC.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eD.intl.string(eD.t.cDgKte)],
                section: eR.oAB.ACCOUNT,
                parent: eC.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e1,
            },
            [eC.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eD.intl.string(eD.t["D+aE7g"])],
                section: eR.oAB.ACCOUNT,
                parent: eC.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e1,
            },
            [eC.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eD.intl.string(eD.t.fZSi1D)],
                section: eR.oAB.ACCOUNT,
                parent: eC.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eC.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eD.intl.string(eD.t.uHAJ5v)],
                section: eR.oAB.ACCOUNT,
                parent: eC.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eC.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eD.intl.string(eD.t.vrOCCk)],
                section: eR.oAB.ACCOUNT,
                parent: eC.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eC.s6.ACCOUNT_REMOVAL]: {
                section: eR.oAB.ACCOUNT,
                searchableTitles: [eD.intl.string(eD.t.ZKsIks)],
                parent: eC.s6.ACCOUNT,
            },
            [eC.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eR.oAB.ACCOUNT,
                searchableTitles: [eD.intl.string(eD.t.jf5GGb)],
                parent: eC.s6.ACCOUNT_REMOVAL,
            },
            [eC.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eR.oAB.ACCOUNT,
                searchableTitles: [eD.intl.string(eD.t["8lQ2rR"])],
                parent: eC.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eC.s6.GAMES]: {
                section: eR.oAB.GAMES,
                searchableTitles: [eD.intl.string(eD.t.URyqtP)],
                label: eD.intl.string(eD.t.URyqtP),
                ariaLabel: eD.intl.string(eD.t.URyqtP),
                element: eI.Z,
                predicate: () => eH,
            },
            [eC.s6.GAMES_MY_GAMES]: {
                section: eR.oAB.GAMES,
                searchableTitles: [eD.intl.string(eD.t["5DMgp9"])],
                parent: eC.s6.GAMES,
            },
            [eC.s6.GAMES_CLIPS]: {
                section: eR.oAB.GAMES,
                searchableTitles: [eD.intl.string(eD.t.z2jK6X)],
                parent: eC.s6.GAMES,
            },
            [eC.s6.GAMES_OVERLAY]: {
                section: eR.oAB.GAMES,
                searchableTitles: [eD.intl.string(eD.t["9cb1Uz"])],
                parent: eC.s6.GAMES,
            },
            [eC.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eR.oAB.GAMES,
                searchableTitles: [eD.intl.string(eD.t.Cq98yL)],
                parent: eC.s6.GAMES,
            },
            [eC.s6.PROFILE_CUSTOMIZATION]: {
                section: eR.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [eD.intl.string(eD.t["vi7f+q"])],
                label: eD.intl.string(eD.t["vi7f+q"]),
                ariaLabel: eD.intl.string(eD.t["vi7f+q"]),
                element: L.Z,
                newIndicator: (0, r.jsx)(eV, {}),
                newIndicatorDismissibleContentTypes: [...eF()],
                notice: {
                    stores: [G.Z, T.Z],
                    element: w.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, I.It)(), (0, u.P6)(), d.Z.clearSubsection(eR.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eR.Z5c.SETTINGS("profile-customization"),
            },
            [eC.s6.PROFILE_DISPLAY_NAME]: {
                section: eR.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eD.intl.string(eD.t["9AjdkD"])],
                parent: eC.s6.PROFILE_CUSTOMIZATION,
            },
            [eC.s6.PROFILE_USER_PROFILE]: {
                section: eR.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eD.intl.string(eD.t["2p07FR"]), eD.intl.string(eD.t["7vhiqk"])],
                parent: eC.s6.PROFILE_CUSTOMIZATION,
            },
            [eC.s6.PROFILE_SERVER_PROFILES]: {
                section: eR.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eD.intl.string(eD.t.kPHroX)],
                parent: eC.s6.PROFILE_CUSTOMIZATION,
            },
            [eC.s6.CONTENT_SOCIAL]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                label: eD.intl.string(eD.t["+o1pDZ"]),
                searchableTitles: [eD.intl.string(eD.t["+o1pDZ"])],
                ariaLabel: eD.intl.string(eD.t["+o1pDZ"]),
                element: ei.Z,
                url: eR.Z5c.SETTINGS("content-and-social"),
            },
            [eC.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t["+o1pDZ"]), eD.intl.string(eD.t["/7xJCF"])],
                parent: eC.s6.CONTENT_SOCIAL,
            },
            [eC.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t["+o1pDZ"]), eD.intl.string(eD.t["/7xJCF"])],
                parent: eC.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eC.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.YpCiMt)],
                parent: eC.s6.CONTENT_SOCIAL,
            },
            [eC.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                label: eD.intl.string(eD.t.YpCiMt),
                searchableTitles: [eD.intl.string(eD.t.YpCiMt)],
                ariaLabel: eD.intl.string(eD.t.YpCiMt),
                parent: eC.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eR.Z5c.SETTINGS(eR.oAB.CONTENT_AND_SOCIAL, eN.C),
            },
            [eC.s6.DATA_PRIVACY]: {
                section: eR.oAB.DATA_AND_PRIVACY,
                label: eD.intl.string(eD.t.OAuOHD),
                searchableTitles: [eD.intl.string(eD.t.OAuOHD)],
                ariaLabel: eD.intl.string(eD.t.OAuOHD),
                element: ea.Z,
                url: eR.Z5c.SETTINGS("data-and-privacy"),
            },
            [eC.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eR.oAB.ACCOUNT,
                searchableTitles: [eD.intl.string(eD.t["Vov/9o"])],
                parent: eC.s6.ACCOUNT,
            },
            [eC.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eR.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.WWaFn5)],
                parent: eC.s6.DATA_PRIVACY,
                predicate: () => (0, V.isDesktop)(),
            },
            [eC.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eR.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t["opi/XK"])],
                parent: eC.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eC.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.xVRG4P)],
                parent: eC.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eC.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.fyA115)],
                parent: eC.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eC.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.fyA115)],
                parent: eC.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eC.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t["/U8Iwa"])],
                parent: eC.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eC.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t["ms+Tme"])],
                parent: eC.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eC.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t["y62Z/d"])],
                parent: eC.s6.CONTENT_SOCIAL,
            },
            [eC.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eR.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.SRZyHg)],
                parent: eC.s6.DATA_PRIVACY,
            },
            [eC.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eD.intl.string(eD.t.uEz8JF),
                    eD.intl.string(eD.t["N/oRI+"]),
                    eD.intl.string(eD.t.QVdYsK),
                    eD.intl.string(eD.t["aWD+tu"]),
                    eD.intl.string(eD.t["5mnTa7"]),
                ],
                parent: eC.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eC.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eD.intl.string(eD.t["Hj/But"]),
                    eD.intl.string(eD.t["N/oRI+"]),
                    eD.intl.string(eD.t.QVdYsK),
                    eD.intl.string(eD.t["aWD+tu"]),
                    eD.intl.string(eD.t["5mnTa7"]),
                    eD.intl.string(eD.t["K0OWP+"]),
                ],
                parent: eC.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eC.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eD.intl.string(eD.t["Hj/But"]),
                    eD.intl.string(eD.t["N/oRI+"]),
                    eD.intl.string(eD.t.QVdYsK),
                    eD.intl.string(eD.t["aWD+tu"]),
                    eD.intl.string(eD.t["5mnTa7"]),
                ],
                parent: eC.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eC.s6.GORE_MEDIA_REDACTION]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eD.intl.string(eD.t["Hj/But"]),
                    eD.intl.string(eD.t["N/oRI+"]),
                    eD.intl.string(eD.t.QVdYsK),
                    eD.intl.string(eD.t["aWD+tu"]),
                    eD.intl.string(eD.t["K0OWP+"]),
                ],
                parent: eC.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eC.s6.PARENTAL_CONTROLS_SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eR.oAB.FAMILY_CENTER_PARENTAL_CONTROLS,
                parent: eC.s6.PRIVACY_FAMILY_CENTER,
                predicate: () => !1,
            },
            [eC.s6.PARENTAL_CONTROLS_GORE_MEDIA_REDACTION]: {
                section: eR.oAB.FAMILY_CENTER_PARENTAL_CONTROLS,
                parent: eC.s6.PRIVACY_FAMILY_CENTER,
                predicate: () => !1,
            },
            [eC.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eD.intl.string(eD.t.JzaP4h),
                    eD.intl.string(eD.t.H9XOl3),
                    eD.intl.string(eD.t.k4W40P),
                ],
                parent: eC.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eC.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t["L+yTsa"])],
                parent: eC.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eC.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.XahVjj)],
                parent: eC.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eC.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                parent: eC.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eC.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.RAQUSN), eD.intl.string(eD.t.wbYDfT)],
                parent: eC.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eC.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t["3o2ojh"])],
                parent: eC.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !e$,
            },
            [eC.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.OLwZDV)],
                parent: eC.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eC.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.wBkwux)],
                parent: eC.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eC.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eR.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.XuADY2)],
                parent: eC.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eC.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eR.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.MNKzyg)],
                parent: eC.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eC.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eR.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.VkS7Yd), eD.intl.string(eD.t.sJYh5t)],
                parent: eC.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eC.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eR.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.CyLYKZ)],
                parent: eC.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eC.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eR.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eC.CF],
                parent: eC.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eC.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eR.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.dmBSKo)],
                parent: eC.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eC.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t["1UaUy+"]), eD.intl.string(eD.t["xIk/iF"])],
                parent: eC.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eK,
            },
            [eC.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eD.intl.string(eD.t.qFsx5q)],
                parent: eC.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eq && !e2 && !eX,
            },
            [eC.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eR.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t["5b3FNI"])],
                parent: eC.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => e4,
            },
            [eC.s6.PRIVACY_FAMILY_CENTER]: {
                section: eR.oAB.FAMILY_CENTER,
                searchableTitles: [eD.intl.string(eL.default.gntCQT)],
                label: eD.intl.string(eL.default.gntCQT),
                ariaLabel: eD.intl.string(eL.default.gntCQT),
                element: es.Z,
                badgeCount: M,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eD.intl.string(eD.t.y2b7CA),
                    color: y.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eR.Z5c.SETTINGS("family-center"),
            },
            [eC.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eR.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.BG7QsQ)],
                parent: eC.s6.DATA_PRIVACY,
            },
            [eC.s6.AUTHORIZED_APPS]: {
                section: eR.oAB.AUTHORIZED_APPS,
                searchableTitles: [eD.intl.string(eD.t["f6kk+r"])],
                label: eD.intl.string(eD.t["f6kk+r"]),
                element: et.Z,
                url: eR.Z5c.SETTINGS("authorized-apps"),
            },
            [eC.s6.SESSIONS]: {
                section: eR.oAB.SESSIONS,
                searchableTitles: [eD.intl.string(eD.t["+1h0k/"])],
                label: eD.intl.string(eD.t["+1h0k/"]),
                ariaLabel: eD.intl.string(eD.t["+1h0k/"]),
                element: em.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == v ? void 0 : v.source },
            },
            [eC.s6.CONNECTIONS]: {
                section: eR.oAB.CONNECTIONS,
                searchableTitles: [eD.intl.string(eD.t["3fe7U5"])],
                label: eD.intl.string(eD.t["3fe7U5"]),
                ariaLabel: eD.intl.string(eD.t["3fe7U5"]),
                element: er.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == v ? void 0 : v.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eR.Z5c.SETTINGS("connections"),
            },
            [eC.s6.THIRD_PARTY_ACCESS]: {
                section: eR.oAB.CONNECTIONS,
                searchableTitles: [
                    eD.intl.string(eD.t["Ig/XFa"]),
                    eD.intl.string(eD.t["3fe7U5"]),
                    eD.intl.string(eD.t["f6kk+r"]),
                ],
                label: eD.intl.string(eD.t["Ig/XFa"]),
                parent: eC.s6.CONNECTIONS,
                element: eb.Z,
            },
            [eC.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eR.oAB.CONNECTIONS,
                searchableTitles: [eD.intl.string(eD.t["+/hZM/"])],
                parent: eC.s6.CONNECTIONS,
                element: er.Z,
            },
            [eC.s6.CLIPS]: {
                section: eR.oAB.CLIPS,
                searchableTitles: [eD.intl.string(eD.t.z2jK6X)],
                label: eD.intl.string(eD.t.z2jK6X),
                ariaLabel: eD.intl.string(eD.t.z2jK6X),
                icon: eU ? (0, r.jsx)(g.Z, {}) : void 0,
                element: E.Z,
                predicate: () => !eH,
                url: eR.Z5c.SETTINGS("clips"),
            },
            [eC.s6.CLIPS_RECORDING_TAB]: {
                section: eR.oAB.CLIPS,
                searchableTitles: [eD.intl.string(eD.t.iIwmV5)],
                parent: eC.s6.CLIPS,
            },
            [eC.s6.CLIPS_AUTOMATIC_TAB]: {
                section: eR.oAB.CLIPS,
                searchableTitles: [eD.intl.string(eD.t.sA0WKL)],
                parent: eC.s6.CLIPS,
            },
            [eC.s6.CLIPS_PRIVACY_TAB]: {
                section: eR.oAB.CLIPS,
                searchableTitles: [eD.intl.string(eD.t.GcIeET)],
                parent: eC.s6.CLIPS,
            },
            [eC.s6.RESTRICTED_USERS]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                parent: eC.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eD.intl.string(eD.t["3wRort"]),
                element: eT.ZP,
                predicate: () => e5 || e8,
            },
            [eC.s6.BLOCKED_USERS]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                parent: eC.s6.RESTRICTED_USERS,
                label: eD.intl.string(eD.t.PFOUKW),
                searchableTitles: [eD.intl.string(eD.t.PFOUKW)],
                element: eT.GF,
                predicate: () => e8,
            },
            [eC.s6.IGNORED_USERS]: {
                section: eR.oAB.CONTENT_AND_SOCIAL,
                parent: eC.s6.RESTRICTED_USERS,
                searchableTitles: [eD.intl.string(eD.t["93ZDWE"])],
                label: eD.intl.string(eD.t["93ZDWE"]),
                element: eT.yo,
                predicate: () => e5,
            },
            [eC.s6.PREMIUM]: {
                section: eR.oAB.PREMIUM,
                ariaLabel: eD.intl.string(eD.t.Ipxkog),
                searchableTitles: [eD.intl.string(eD.t.Ipxkog)],
                label: eD.intl.string(eD.t.Ipxkog),
                element: z.Z,
                className: eM.premiumTab,
            },
            [eC.s6.GUILD_BOOSTING]: {
                section: eR.oAB.GUILD_BOOSTING,
                searchableTitles: [eD.intl.string(eD.t["+CbP2v"])],
                label: eD.intl.string(eD.t["+CbP2v"]),
                element: ep.Z,
            },
            [eC.s6.SUBSCRIPTIONS]: {
                section: eR.oAB.SUBSCRIPTIONS,
                ariaLabel: eD.intl.string(eD.t.trSpHX),
                searchableTitles: [eD.intl.string(eD.t.trSpHX)],
                label: eD.intl.string(eD.t.trSpHX),
                element: P.Z,
                icon: O
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eC.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eR.oAB.SUBSCRIPTIONS,
                searchableTitles: [eD.intl.string(eD.t["2GKrvn"])],
                parent: eC.s6.SUBSCRIPTIONS,
            },
            [eC.s6.GIFT_INVENTORY]: {
                section: eR.oAB.INVENTORY,
                searchableTitles: [eD.intl.string(eD.t["jcSP+g"])],
                label: eD.intl.string(eD.t["jcSP+g"]),
                element: ec.Z,
                ariaLabel: eD.intl.string(eD.t["jcSP+g"]),
                badgeCount: t,
            },
            [eC.s6.GIFT_CODE_REDEMPTION]: {
                section: eR.oAB.INVENTORY,
                searchableTitles: [eD.intl.string(eD.t["il+VCo"])],
                parent: eC.s6.GIFT_INVENTORY,
                predicate: () => !eQ,
            },
            [eC.s6.GIFT_INVENTORY_QUESTS]: {
                section: eR.oAB.INVENTORY,
                searchableTitles: [eD.intl.string(eD.t.JALI2K)],
                parent: eC.s6.GIFT_INVENTORY,
                predicate: () => eJ,
            },
            [eC.s6.GIFT_INVENTORY_LIST]: {
                section: eR.oAB.INVENTORY,
                searchableTitles: [eD.intl.string(eD.t["9KeUbY"])],
                parent: eC.s6.GIFT_INVENTORY,
                predicate: () => !eQ,
            },
            [eC.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eR.oAB.INVENTORY,
                searchableTitles: [eD.intl.string(eD.t.vwMEHS)],
                parent: eC.s6.GIFT_INVENTORY,
                predicate: () => eQ,
            },
            [eC.s6.BILLING]: {
                section: eR.oAB.BILLING,
                searchableTitles: [eD.intl.string(eD.t.oeUm2s)],
                label: eD.intl.string(eD.t.oeUm2s),
                ariaLabel: eD.intl.string(eD.t.oeUm2s),
                element: en.Z,
            },
            [eC.s6.BILLING_PAYMENT_METHODS]: {
                section: eR.oAB.BILLING,
                searchableTitles: [eD.intl.string(eD.t.W26xGQ)],
                parent: eC.s6.BILLING,
            },
            [eC.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eR.oAB.BILLING,
                searchableTitles: [eD.intl.string(eD.t.obLrcK)],
                parent: eC.s6.BILLING,
            },
            [eC.s6.APPEARANCE]: {
                section: eR.oAB.APPEARANCE,
                searchableTitles: [eD.intl.string(eD.t["iHH+ky"])],
                label: eD.intl.string(eD.t["iHH+ky"]),
                ariaLabel: eD.intl.string(eD.t["iHH+ky"]),
                element: ee.Z,
                newIndicator: (0, r.jsx)(eZ, {}),
                newIndicatorDismissibleContentTypes: eB(),
                url: eR.Z5c.SETTINGS("appearance"),
            },
            [eC.s6.APPEARANCE_THEME]: {
                section: eR.oAB.APPEARANCE,
                searchableTitles: [eD.intl.string(eD.t.Ksh3ik)],
                parent: eC.s6.APPEARANCE,
            },
            [eC.s6.APPEARANCE_COLOR]: {
                section: eR.oAB.APPEARANCE,
                searchableTitles: [eD.intl.string(eD.t.OCOOiI)],
                parent: eC.s6.APPEARANCE_THEME,
            },
            [eC.s6.APPEARANCE_ICON]: {
                section: eR.oAB.APPEARANCE,
                searchableTitles: [eD.intl.string(eD.t.RPh2ou)],
                parent: eC.s6.APPEARANCE_THEME,
            },
            [eC.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eR.oAB.APPEARANCE,
                searchableTitles: [eD.intl.string(eD.t.ZEoGMd)],
                parent: eC.s6.APPEARANCE,
            },
            [eC.s6.APPEARANCE_LIST_SPACING]: {
                section: eR.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eC.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eD.intl.string(eD.t.y2b7CA),
                    color: y.Z.BG_BRAND,
                }),
            },
            [eC.s6.APPEARANCE_SCALING_SPACING]: {
                section: eR.oAB.APPEARANCE,
                searchableTitles: [eD.intl.string(eD.t.qPOqoK)],
                parent: eC.s6.APPEARANCE,
            },
            [eC.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eR.oAB.APPEARANCE,
                searchableTitles: [
                    eD.intl.string(eD.t.dyamEI),
                    eD.intl.string(eD.t.p8NOwi),
                    eD.intl.string(eD.t["+o/sOo"]),
                ],
                parent: eC.s6.APPEARANCE,
                predicate: () =>
                    x.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eC.s6.ACCESSIBILITY]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.G0neg7)],
                label: eD.intl.string(eD.t.G0neg7),
                ariaLabel: eD.intl.string(eD.t.G0neg7),
                element: X.Z,
                url: eR.Z5c.SETTINGS("accessibility"),
            },
            [eC.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.aZlePv)],
                parent: eC.s6.ACCESSIBILITY,
            },
            [eC.s6.ACCESSIBILITY_SWITCH_ICON]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t["S3z+pV"])],
                parent: eC.s6.ACCESSIBILITY,
            },
            [eC.s6.ACCESSIBILITY_SATURATION]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t["5PWWCY"])],
                parent: eC.s6.ACCESSIBILITY,
            },
            [eC.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.bQCodD)],
                parent: eC.s6.ACCESSIBILITY_SATURATION,
            },
            [eC.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.OLZFB8)],
                parent: eC.s6.ACCESSIBILITY,
            },
            [eC.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t["+Isihb"])],
                parent: eC.s6.ACCESSIBILITY,
                predicate: () => (0, b.A)("SettingsRendererConfig"),
            },
            [eC.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.uSOPWm)],
                parent: eC.s6.ACCESSIBILITY,
            },
            [eC.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(ew.default["2gFUEw"])],
                parent: eC.s6.ACCESSIBILITY,
            },
            [eC.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.BT8Bmp)],
                parent: eC.s6.ACCESSIBILITY,
            },
            [eC.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t["sSY+mD"])],
                parent: eC.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eC.s6.ACCESSIBILITY_CONTRAST]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t["TYyfO/"])],
                parent: eC.s6.ACCESSIBILITY,
            },
            [eC.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.cguiec)],
                parent: eC.s6.ACCESSIBILITY_CONTRAST,
            },
            [eC.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.e3TR1b)],
                parent: eC.s6.ACCESSIBILITY,
            },
            [eC.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.b3XBzg)],
                parent: eC.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eC.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.Iayoh5)],
                parent: eC.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eC.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.iIaOlc)],
                parent: eC.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eC.s6.ACCESSIBILITY_STICKERS]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t["6NtAuJ"])],
                parent: eC.s6.ACCESSIBILITY,
            },
            [eC.s6.ACCESSIBILITY_MESSAGES]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.onqU6o)],
                parent: eC.s6.ACCESSIBILITY,
            },
            [eC.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t["3Fztn5"])],
                parent: eC.s6.ACCESSIBILITY_MESSAGES,
            },
            [eC.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.TZ2hZH)],
                parent: eC.s6.ACCESSIBILITY_MESSAGES,
            },
            [eC.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.VpSKeO)],
                parent: eC.s6.ACCESSIBILITY,
            },
            [eC.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.qvTIwX)],
                parent: eC.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                predicate: () => !tr,
            },
            [eC.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eD.intl.string(eD.t.lsW5Ev)],
                parent: eC.s6.ACCESSIBILITY,
            },
            [eC.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eR.oAB.ACCESSIBILITY,
                searchableTitles: [eC.CF],
                parent: eC.s6.ACCESSIBILITY,
            },
            [eC.s6.VOICE_AND_VIDEO]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.B1fFpf)],
                label: eD.intl.string(eD.t.B1fFpf),
                ariaLabel: eD.intl.string(eD.t.B1fFpf),
                element: eS.Z,
                predicate: () => U.Z.isSupported(),
                url: eR.Z5c.SETTINGS("voice"),
            },
            [eC.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.K3lovD), eD.intl.string(eD.t.NiTd0e)],
                parent: eC.s6.VOICE_AND_VIDEO,
            },
            [eC.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.FlNoSV)],
                parent: eC.s6.VOICE_AND_VIDEO,
            },
            [eC.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.ABjMWI)],
                parent: eC.s6.VOICE_AND_VIDEO,
            },
            [eC.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.OFpL3c)],
                parent: eC.s6.VOICE_AND_VIDEO,
            },
            [eC.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.KDdjou), eD.intl.string(eD.t.FeUKeA)],
                parent: eC.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eC.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.K3lovD), eD.intl.string(eD.t.NiTd0e)],
                parent: eC.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eC.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eR.oAB.VOICE,
                searchableTitles: [
                    eD.intl.string(eD.t.hHMYbb),
                    eD.intl.string(eD.t.dl18zb),
                    eD.intl.string(eD.t.nuFtHH),
                    eD.intl.string(eD.t["3182VD"]),
                    eD.intl.string(eD.t["DGq/PR"]),
                ],
                parent: eC.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eC.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eR.oAB.VOICE,
                searchableTitles: [
                    eD.intl.string(eD.t.OX2Bnr),
                    eD.intl.string(eD.t.eATD2B),
                    eD.intl.string(eD.t.nuFtHH),
                    eD.intl.string(eD.t["3182VD"]),
                    eD.intl.string(eD.t["DGq/PR"]),
                ],
                parent: eC.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eC.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.gyljWE), eD.intl.string(eD.t.nuFtHH)],
                parent: eC.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eC.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eR.oAB.VOICE,
                searchableTitles: [
                    eD.intl.string(eD.t.LM3U3k),
                    eD.intl.string(eD.t.nuFtHH),
                    eD.intl.string(eD.t.VZPR0R),
                    eD.intl.string(eD.t.cjPbpT),
                ],
                parent: eC.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, K.P)({ location: "SettingsRendererConfig" });
                    return e.length > 0;
                },
            },
            [eC.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["pS+K2L"]), eD.intl.string(eD.t.nuFtHH)],
                parent: eC.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => e9 !== eA._.STUDIO,
            },
            [eC.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["sqUm+k"]), eD.intl.string(eD.t.nuFtHH)],
                parent: eC.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => e7 === eP.pM.VOICE_ACTIVITY && te,
            },
            [eC.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.e7LIiY)],
                parent: eC.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eC.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.nzUc3B)],
                parent: eC.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eC.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.ABjMWI)],
                parent: eC.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eC.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.nzUc3B)],
                parent: eC.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eC.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.LKzQSF)],
                parent: eC.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eC.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.F122Gz)],
                parent: eC.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => U.Z.supports(eP.AN.VIDEO),
            },
            [eC.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["3Ppr1h"])],
                parent: eC.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eC.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.lZTUPs)],
                parent: eC.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => U.Z.supports(eP.AN.VIDEO),
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["8/udY0"])],
                parent: eC.s6.VOICE_AND_VIDEO,
            },
            [eC.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["8/udY0"])],
                parent: eC.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["6I6GUv"])],
                parent: eC.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => te,
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.iWTwu6)],
                parent: eC.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["/jwMtn"])],
                parent: eC.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eC.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.OBwCXF)],
                parent: eC.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.t8Qhib), eD.intl.string(eD.t.hmfkCi)],
                parent: eC.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => U.Z.isNoiseSuppressionSupported(),
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.BbESsg)],
                parent: eC.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => U.Z.isAdvancedVoiceActivitySupported(),
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.cUMdH0)],
                parent: eC.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => U.Z.isAutomaticGainControlSupported(),
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.DFPXIG)],
                parent: eC.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => U.Z.showBypassSystemInputProcessing(),
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.uancuJ)],
                parent: eC.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => U.Z.supports(eP.AN.QOS),
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.oSdBvW)],
                parent: eC.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => U.Z.supports(eP.AN.ATTENUATION),
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.wVBHr0)],
                parent: eC.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => U.Z.shouldOfferManualSubsystemSelection(),
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eR.oAB.VOICE,
                searchableTitles: [
                    eD.intl.string(eD.t.KDdjou),
                    eD.intl.string(eD.t.NMCIf9),
                    eD.intl.string(eD.t.FeUKeA),
                ],
                parent: eC.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    U.Z.supportsVideoHook() ||
                    U.Z.supportsExperimentalSoundshare() ||
                    (U.Z.supportsSystemScreensharePicker() && (0, V.isMac)()),
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.GmWk2E), eD.intl.string(eD.t["Fj/xn1"])],
                parent: eC.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => U.Z.supportsVideoHook(),
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["4I0qzZ"])],
                parent: eC.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => U.Z.supportsExperimentalSoundshare() && U.Z.supportsHookSoundshare(),
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.ie1mgY)],
                parent: eC.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => U.Z.supportsSystemScreensharePicker() && (0, V.isMac)(),
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["aP1N/m"])],
                parent: eC.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => V.isPlatformEmbedded,
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.OFpL3c)],
                parent: eC.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["0CEP6e"])],
                parent: eC.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => W.Sb.getSetting(),
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["r6K+TL"])],
                parent: eC.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => U.Z.isAecDumpSupported(),
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t.U4FgFK)],
                parent: eC.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === H.ZP.releaseChannel || "development" === H.ZP.releaseChannel) &&
                    ez &&
                    U.Z.supports(eP.AN.CONNECTION_REPLAY),
            },
            [eC.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["726JHL"])],
                parent: eC.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    V.isPlatformEmbedded && U.Z.supports(eP.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [eC.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eR.oAB.VOICE,
                searchableTitles: [eD.intl.string(eD.t["/RXu67"])],
                parent: eC.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eC.s6.POGGERMODE]: {
                section: eR.oAB.POGGERMODE,
                searchableTitles: [eD.intl.string(eD.t.AtCukI)],
                label: eD.intl.string(eD.t.AtCukI),
                ariaLabel: eD.intl.string(eD.t.AtCukI),
                element: C.Z,
                predicate: () => A.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: eM.poggermodeIcon,
                }),
            },
            [eC.s6.CHAT]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t["/VQax8"])],
                label: eD.intl.string(eD.t["/VQax8"]),
                ariaLabel: eD.intl.string(eD.t["/VQax8"]),
                element: eE.Z,
                url: eR.Z5c.SETTINGS("text"),
            },
            [eC.s6.MESSAGE_SEARCH]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.VYODPD)],
                parent: eC.s6.CHAT,
                predicate: () => tn,
            },
            [eC.s6.MESSAGE_SEARCH_ALL_DMS]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t["t4+fbe"])],
                parent: eC.s6.MESSAGE_SEARCH,
                predicate: () => tn,
            },
            [eC.s6.CHAT_INLINE_MEDIA]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.U68Dgp)],
                parent: eC.s6.CHAT,
            },
            [eC.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.U47N1p)],
                parent: eC.s6.CHAT_INLINE_MEDIA,
            },
            [eC.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.VP11No)],
                parent: eC.s6.CHAT_INLINE_MEDIA,
            },
            [eC.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t["5S2AK+"])],
                parent: eC.s6.CHAT_INLINE_MEDIA,
            },
            [eC.s6.CHAT_EMBEDS]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.PWZOn4)],
                parent: eC.s6.CHAT,
            },
            [eC.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.xX0ZTA)],
                parent: eC.s6.CHAT_EMBEDS,
            },
            [eC.s6.CHAT_EMOJI]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.sMOuuS)],
                parent: eC.s6.CHAT,
            },
            [eC.s6.CHAT_EMOJI_REACTIONS]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.Iv24sm)],
                parent: eC.s6.CHAT_EMOJI,
            },
            [eC.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t["79qal8"])],
                parent: eC.s6.CHAT_EMOJI,
            },
            [eC.s6.CHAT_STICKERS]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t["6NtAuJ"])],
                parent: eC.s6.CHAT,
            },
            [eC.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t["29xPVZ"])],
                parent: eC.s6.CHAT_STICKERS,
            },
            [eC.s6.CHAT_SOUNDMOJI]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.EHlAMc)],
                parent: eC.s6.CHAT,
                predicate: () => (0, R.dX)({ location: "SettingsRendererConfig" }),
            },
            [eC.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t["CtYr+U"])],
                parent: eC.s6.CHAT_SOUNDMOJI,
                predicate: () => (0, R.dX)({ location: "SettingsRendererConfig" }),
            },
            [eC.s6.CHAT_TEXT_BOX]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.afR0pI)],
                parent: eC.s6.CHAT,
            },
            [eC.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.AqGrEI)],
                parent: eC.s6.CHAT_TEXT_BOX,
            },
            [eC.s6.CHAT_THREADS]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.B2panI)],
                parent: eC.s6.CHAT,
            },
            [eC.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.AInv5m)],
                parent: eC.s6.CHAT_THREADS,
            },
            [eC.s6.CHAT_SPOILERS]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.QgwmVz)],
                parent: eC.s6.CHAT,
            },
            [eC.s6.CHAT_MENTION_SUGGESTIONS]: {
                section: eR.oAB.TEXT,
                searchableTitles: [eD.intl.string(eD.t.uXQ2xT)],
                parent: eC.s6.CHAT_TEXT_BOX,
                predicate: () => tt,
            },
            [eC.s6.NOTIFICATIONS]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.HcoRu0)],
                label: eD.intl.string(eD.t.HcoRu0),
                ariaLabel: eD.intl.string(eD.t.HcoRu0),
                element: ef.Z,
                url: eR.Z5c.SETTINGS("notifications"),
            },
            [eC.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t["/0WCll"])],
                parent: eC.s6.NOTIFICATIONS,
            },
            [eC.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eC.s6.NOTIFICATIONS,
            },
            [eC.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.VH8AIJ)],
                parent: eC.s6.NOTIFICATIONS,
            },
            [eC.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.xSmFQG)],
                parent: eC.s6.NOTIFICATIONS,
                predicate: () => (0, V.isWindows)(),
            },
            [eC.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: ["New Unreads Setting (Experimental)"],
                parent: eC.s6.NOTIFICATIONS,
            },
            [eC.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.TTvjd9)],
                parent: eC.s6.NOTIFICATIONS,
            },
            [eC.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.VpSKeO)],
                parent: eC.s6.NOTIFICATIONS,
            },
            [eC.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.D9yVAH)],
                parent: eC.s6.NOTIFICATIONS,
            },
            [eC.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.u6dc5B)],
                parent: eC.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eC.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.P8MG6q)],
                parent: eC.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eC.s6.NOTIFICATIONS_SOUNDS]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.MKWyKc)],
                parent: eC.s6.NOTIFICATIONS,
            },
            [eC.s6.NOTIFICATIONS_EMAILS]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.TPchzM)],
                parent: eC.s6.NOTIFICATIONS,
            },
            [eC.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t["B75+xe"])],
                parent: eC.s6.NOTIFICATIONS_EMAILS,
            },
            [eC.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.sxn7lR)],
                parent: eC.s6.NOTIFICATIONS_EMAILS,
            },
            [eC.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.EkxXhe)],
                parent: eC.s6.NOTIFICATIONS_EMAILS,
            },
            [eC.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.jNrkrM)],
                parent: eC.s6.NOTIFICATIONS_EMAILS,
            },
            [eC.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.E8g1l8)],
                parent: eC.s6.NOTIFICATIONS_EMAILS,
            },
            [eC.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.Ra9Pwk)],
                parent: eC.s6.NOTIFICATIONS_EMAILS,
            },
            [eC.s6.NOTIFICATIONS_REACTIONS]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.Rq0NFs)],
                parent: eC.s6.NOTIFICATIONS,
            },
            [eC.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.wtk08S)],
                parent: eC.s6.NOTIFICATIONS,
            },
            [eC.s6.NOTIFICATIONS_FRIEND_ANNIVERSARY]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.hi4dSk)],
                parent: eC.s6.NOTIFICATIONS,
                predicate: () => (0, N.i)("SettingsRendererConfig"),
            },
            [eC.s6.NOTIFICATIONS_FRIEND_ONLINE]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t["uvIi/4"])],
                parent: eC.s6.NOTIFICATIONS,
                predicate: () => (0, S.bH)("SettingsRendererConfig"),
            },
            [eC.s6.NOTIFICATIONS_USER_RESURRECTION]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.Zyn45S)],
                parent: eC.s6.NOTIFICATIONS,
            },
            [eC.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eR.oAB.NOTIFICATIONS,
                searchableTitles: [eD.intl.string(eD.t.pW4TMp)],
                parent: eC.s6.NOTIFICATIONS,
            },
            [eC.s6.KEYBINDS]: {
                section: eR.oAB.KEYBINDS,
                searchableTitles: [eD.intl.string(eD.t.T9DA2K)],
                label: eD.intl.string(eD.t.T9DA2K),
                element: eu.Z,
                url: eR.Z5c.SETTINGS("keybinds"),
            },
            [eC.s6.LANGUAGE]: {
                section: eR.oAB.LOCALE,
                searchableTitles: [eD.intl.string(eD.t.IHMsPn)],
                label: eD.intl.string(eD.t.IHMsPn),
                element: ed.Z,
                url: eR.Z5c.SETTINGS("language"),
            },
            [eC.s6.WINDOW_SETTINGS]: {
                section: eR.oAB.WINDOWS,
                searchableTitles: [eD.intl.string(eD.t.ZkDZov)],
                label: eD.intl.string(eD.t.ZkDZov),
                element: ey.Z,
                predicate: () => V.isPlatformEmbedded && (0, V.isWindows)(),
            },
            [eC.s6.LINUX_SETTINGS]: {
                section: eR.oAB.LINUX,
                searchableTitles: [eD.intl.string(eD.t["7pPjTW"])],
                label: eD.intl.string(eD.t["7pPjTW"]),
                element: eY,
                predicate: () => V.isPlatformEmbedded && (0, V.isLinux)(),
            },
            [eC.s6.STREAMER_MODE]: {
                section: eR.oAB.STREAMER_MODE,
                searchableTitles: [eD.intl.string(eD.t.S5GfOW)],
                label: eD.intl.string(eD.t.S5GfOW),
                ariaLabel: eD.intl.string(eD.t.S5GfOW),
                element: eg.Z,
                url: eR.Z5c.SETTINGS("streamer-mode"),
            },
            [eC.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eR.oAB.STREAMER_MODE,
                searchableTitles: [eD.intl.string(eD.t.bxGbHL)],
                parent: eC.s6.STREAMER_MODE,
            },
            [eC.s6.STREAMER_MODE_ENABLE]: {
                section: eR.oAB.STREAMER_MODE,
                searchableTitles: [eD.intl.string(eD.t.p9ZAJZ)],
                parent: eC.s6.STREAMER_MODE,
            },
            [eC.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eR.oAB.STREAMER_MODE,
                searchableTitles: [eD.intl.string(eD.t.UpQziA)],
                parent: eC.s6.STREAMER_MODE,
            },
            [eC.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eR.oAB.STREAMER_MODE,
                searchableTitles: [eD.intl.string(eD.t.q7WNGv)],
                parent: eC.s6.STREAMER_MODE,
            },
            [eC.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eR.oAB.STREAMER_MODE,
                searchableTitles: [eD.intl.string(eD.t["1CWknJ"])],
                parent: eC.s6.STREAMER_MODE,
            },
            [eC.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eR.oAB.STREAMER_MODE,
                searchableTitles: [eD.intl.string(eD.t.qmYiYd)],
                parent: eC.s6.STREAMER_MODE,
            },
            [eC.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eR.oAB.STREAMER_MODE,
                searchableTitles: [eD.intl.string(eD.t["iA81+a"])],
                parent: eC.s6.STREAMER_MODE,
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
            [eC.s6.SETTINGS_ADVANCED]: {
                section: eR.oAB.ADVANCED,
                searchableTitles: [eD.intl.string(eD.t["8/udY0"])],
                label: eD.intl.string(eD.t["8/udY0"]),
                ariaLabel: eD.intl.string(eD.t["8/udY0"]),
                element: $.ZP,
            },
            [eC.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eR.oAB.ADVANCED,
                searchableTitles: [eD.intl.string(eD.t.ObIb1Q)],
                parent: eC.s6.SETTINGS_ADVANCED,
                predicate: () => Z.wS,
            },
            [eC.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eR.oAB.ADVANCED,
                searchableTitles: [eD.intl.string(eD.t["eOC/F2"])],
                parent: eC.s6.SETTINGS_ADVANCED,
                predicate: () => V.isPlatformEmbedded,
            },
            [eC.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eR.oAB.ADVANCED,
                searchableTitles: [eD.intl.string(eD.t.fi3UQN)],
                parent: eC.s6.SETTINGS_ADVANCED,
                predicate: () => e0,
            },
            [eC.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eR.oAB.ADVANCED,
                searchableTitles: [eD.intl.string(eD.t.erOqlh)],
                parent: eC.s6.SETTINGS_ADVANCED,
                predicate: () => e3,
            },
            [eC.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eR.oAB.ADVANCED,
                searchableTitles: [eD.intl.string(eD.t.qDZryG)],
                parent: eC.s6.SETTINGS_ADVANCED,
            },
            [eC.s6.PRIVATE_BROWSING_PERK]: {
                section: eR.oAB.CF_WARP,
                searchableTitles: [eD.intl.string(ex.default.SsTtq3)],
                predicate: () => D.H.getConfig({ location: "SettingsRendererConfig" }).enabled,
                newIndicator: (0, r.jsx)(eW, {}),
                newIndicatorDismissibleContentTypes: [a.z.NITRO_PRIVACY_PERK_NEW_BADGE],
                url: eR.Z5c.SETTINGS("private-browsing"),
            },
            [eC.s6.ACTIVITY_PRIVACY]: {
                section: eR.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.Cq98yL)],
                label: eD.intl.string(eD.t.Cq98yL),
                ariaLabel: eD.intl.string(eD.t.Cq98yL),
                element: J.Z,
                predicate: () => !eH,
                url: eR.Z5c.SETTINGS("activity-privacy"),
            },
            [eC.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eH ? eR.oAB.GAMES : eR.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t["8ka8li"])],
                parent: eH ? eC.s6.GAMES_ACTIVITY_PRIVACY : eC.s6.ACTIVITY_PRIVACY,
            },
            [eC.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eH ? eR.oAB.GAMES : eR.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t.VOszPA)],
                parent: eH ? eC.s6.GAMES_ACTIVITY_PRIVACY : eC.s6.ACTIVITY_PRIVACY,
            },
            [eC.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eH ? eR.oAB.GAMES : eR.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eC.CF],
                parent: eH ? eC.s6.GAMES_ACTIVITY_PRIVACY : eC.s6.ACTIVITY_PRIVACY,
            },
            [eC.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eR.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eD.intl.string(eD.t["4F2KoC"])],
                parent: eC.s6.ACTIVITY_PRIVACY,
            },
            [eC.s6.REGISTERED_GAMES]: {
                section: eR.oAB.REGISTERED_GAMES,
                searchableTitles: [eD.intl.string(eD.t.AVDyEj)],
                label: eD.intl.string(eD.t.AVDyEj),
                element: el.Z,
                predicate: () => !eH && (0, ev.Jw)(),
            },
            [eC.s6.OVERLAY]: {
                section: eR.oAB.OVERLAY,
                searchableTitles: [eD.intl.string(eD.t["9cb1Uz"]), eD.intl.string(eD.t.HcoRu0)],
                label: eD.intl.string(eD.t["9cb1Uz"]),
                element: e_.Z,
                predicate: () => !eH && ek,
            },
            [eC.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, m.Z)(!0),
                searchableTitles: [eD.intl.string(eD.t.LRmNAl)],
                label: eD.intl.string(eD.t.LRmNAl),
            },
            [eC.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    B.default.track(eR.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, F.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                B.default.track(eR.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, p.Z)(e);
                            },
                        });
                },
                searchableTitles: [eD.intl.string(eD.t.sMEktT)],
                label: eD.intl.string(eD.t.sMEktT),
                ariaLabel: eD.intl.string(eD.t.sMEktT),
            },
            [eC.s6.EXPERIMENTS]: {
                section: eR.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: eO.Z,
                predicate: () => k.Z.isDeveloper,
                url: eR.Z5c.SETTINGS("experiments"),
            },
            [eC.s6.DEVELOPER_OPTIONS]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: eo.Z,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eC.s6.DEVELOPER_OPTIONS,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eC.s6.DEVELOPER_OPTIONS,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eC.s6.DEVELOPER_OPTIONS,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eC.s6.DEVELOPER_OPTIONS,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eC.s6.DEVELOPER_OPTIONS,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eC.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eC.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eC.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eC.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eC.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eC.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eC.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => ez && k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eC.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eC.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eC.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => ez && k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eC.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eC.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eC.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => ez && k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_HIGHLIGHT_MANA_COMPONENTS]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Mana Components"],
                parent: eC.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => ez && k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Void Toggleable Components"],
                parent: eC.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => ez && k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eC.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => ez && k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eC.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => ez && k.Z.isDeveloper && j.default.layoutDebuggingEnabled,
            },
            [eC.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eC.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => ez && k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eC.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => ez && k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eC.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eC.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eC.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eC.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eC.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eC.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => h.q && k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_SHOW_TOTP_SUCCESS]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Show TOTP Success"],
                parent: eC.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eC.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eC.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eC.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eC.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eC.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eR.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eC.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => k.Z.isDeveloper,
            },
            [eC.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            eG(
                                ej(
                                    {
                                        header: eD.intl.string(eD.t["2jxGer"]),
                                        confirmText: eD.intl.string(eD.t["2jxGer"]),
                                        cancelText: eD.intl.string(eD.t["ETE/oC"]),
                                        onCancel: e.onClose,
                                        onConfirm: () => c.Z.logout("settings"),
                                    },
                                    e,
                                ),
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: eD.intl.string(eD.t.SUnWBB),
                                    }),
                                },
                            ),
                        ),
                    );
                },
                label: eD.intl.string(eD.t["2jxGer"]),
                ariaLabel: eD.intl.string(eD.t["2jxGer"]),
                icon: (0, r.jsx)(s.PBZ, {
                    size: "xs",
                    color: "currentColor",
                }),
                variant: "destructive",
            },
            [eC.s6.SOCIAL_LINKS]: {
                section: f.ID.CUSTOM,
                element: q.Z,
            },
            [eC.s6.CLIENT_DEBUG_INFO]: {
                section: f.ID.CUSTOM,
                element: Y.Z,
            },
        });
    };
