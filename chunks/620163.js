n.d(t, {
    $Z: () => eG,
    OF: () => eZ,
    W8: () => eF,
    _x: () => eV,
    c$: () => eB,
    ec: () => eH,
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
    N = n(125900),
    R = n(813732),
    P = n(299886),
    D = n(398140),
    w = n(564344),
    L = n(145158),
    x = n(172416),
    M = n(906467),
    k = n(857192),
    j = n(131951),
    U = n(25990),
    G = n(626135),
    B = n(572004),
    Z = n(49012),
    F = n(358085),
    V = n(998502),
    H = n(695346),
    W = n(604227),
    Y = n(846071),
    K = n(748717),
    z = n(419636),
    q = n(154022),
    X = n(736752),
    Q = n(309739),
    J = n(64914),
    $ = n(501348),
    ee = n(795594),
    et = n(443702),
    en = n(327192),
    er = n(949493),
    ei = n(675047),
    ea = n(956699),
    eo = n(54942),
    es = n(293389),
    el = n(387747),
    ec = n(389650),
    eu = n(649157),
    ed = n(593648),
    ef = n(327885),
    e_ = n(595242),
    ep = n(463153),
    eh = n(36192),
    em = n(889029),
    eg = n(400287),
    eE = n(936982),
    eb = n(200645),
    ey = n(287490),
    eO = n(168308),
    ev = n(277329),
    eI = n(273927),
    eT = n(604224),
    eS = n(345655),
    eA = n(726985),
    eC = n(583139),
    eN = n(981631),
    eR = n(65154),
    eP = n(388032),
    eD = n(677065),
    ew = n(744038),
    eL = n(163646),
    ex = n(202323);
function eM(e, t, n) {
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
function ek(e) {
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
                eM(e, t, n[t]);
            });
    }
    return e;
}
function ej(e, t) {
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
function eU(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ej(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eG = () => [
        a.z.CLIENT_THEMES_SETTINGS_BADGE,
        a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE,
        a.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE,
    ],
    eB = () => {
        let e = eG(),
            [t] = (0, O.US)(e);
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
            v.JH.getCurrentConfig({ location: "SettingsRendererConfig" }).enabled &&
                e.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE),
            e
        );
    },
    eF = () => {
        let e = eZ(),
            [t] = (0, O.US)(e);
        return t === a.z.DISPLAY_NAME_STYLES_NEW_BADGE || t === a.z.WIDGETS_USER_SETTINGS_NEW_BADGE
            ? (0, r.jsx)(s.IGR, { text: eP.intl.string(eP.t.y2b7CA) })
            : null;
    },
    eV = () => {
        let e = [];
        return (
            P.H.getConfig({ location: "SettingsRendererConfig" }).enabled && e.push(a.z.NITRO_PRIVACY_PERK_NEW_BADGE), e
        );
    },
    eH = () => {
        let e = eV(),
            [t] = (0, O.US)(e);
        return a.z.NITRO_PRIVACY_PERK_NEW_BADGE === t ? (0, r.jsx)(s.IGR, { text: eP.intl.string(eP.t.y2b7CA) }) : null;
    },
    eW = eb.Z,
    eY = (e) => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: O,
            searchParams: v,
            numOfPendingFamilyRequests: x,
            isOverlaySupported: eM,
            isClipsBetaTagShowing: ej = !1,
            shouldMergeGameSettings: eV,
            isKeywordFilteringEnabled: eY,
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
            [eA.s6.SEARCH_NO_RESULTS]: {
                section: f.ID.CUSTOM,
                element: ep.Z,
            },
            [eA.s6.ACCOUNT_SECURITY_TAB]: {
                section: eN.oAB.ACCOUNT,
                searchableTitles: [eP.intl.string(eP.t.Am9YHi)],
                label: eP.intl.string(eP.t.Am9YHi),
            },
            [eA.s6.ACCOUNT]: {
                section: eN.oAB.ACCOUNT,
                searchableTitles: [eP.intl.string(eP.t["JAIM/m"])],
                label: eP.intl.string(eP.t["JAIM/m"]),
                ariaLabel: eP.intl.string(eP.t["JAIM/m"]),
                element: X.Z,
                url: eN.Z5c.SETTINGS("account"),
            },
            [eA.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eP.intl.string(eP.t.LYju5J)],
                parent: eA.s6.ACCOUNT,
                section: eN.oAB.ACCOUNT,
            },
            [eA.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eP.intl.string(eP.t["9AjdkD"])],
                section: eN.oAB.ACCOUNT,
                parent: eA.s6.ACCOUNT_PROFILE,
            },
            [eA.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eP.intl.string(eP.t.Ulqq6K)],
                section: eN.oAB.ACCOUNT,
                parent: eA.s6.ACCOUNT_PROFILE,
            },
            [eA.s6.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [
                    eP.intl.string(eP.t["/52UYy"]),
                    eP.intl.string(eP.t.sK0dmH),
                    eP.intl.string(eP.t.XxRj7f),
                    eP.intl.string(eP.t.yNGjyK),
                    eP.intl.string(eP.t.KPGVWl),
                ],
                section: eN.oAB.ACCOUNT,
                parent: eA.s6.ACCOUNT_PROFILE,
                predicate: () => e8,
            },
            [eA.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eP.intl.string(eP.t["+JkHPw"])],
                section: eN.oAB.ACCOUNT,
                parent: eA.s6.ACCOUNT_PROFILE,
            },
            [eA.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eP.intl.string(eP.t.oP5zGA)],
                section: eN.oAB.ACCOUNT,
                parent: eA.s6.ACCOUNT_PROFILE,
            },
            [eA.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eP.intl.string(eP.t.pKSjEj)],
                section: eN.oAB.ACCOUNT,
                parent: eA.s6.ACCOUNT,
            },
            [eA.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eP.intl.string(eP.t["FRep5/"])],
                section: eN.oAB.ACCOUNT,
                parent: eA.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eA.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eP.intl.string(eP.t["7qKDrE"])],
                section: eN.oAB.ACCOUNT,
                parent: eA.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eA.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eP.intl.string(eP.t.m0FidJ)],
                section: eN.oAB.ACCOUNT,
                parent: eA.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            },
            [eA.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eP.intl.string(eP.t.cDgKte)],
                section: eN.oAB.ACCOUNT,
                parent: eA.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e0,
            },
            [eA.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eP.intl.string(eP.t["D+aE7g"])],
                section: eN.oAB.ACCOUNT,
                parent: eA.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e0,
            },
            [eA.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eP.intl.string(eP.t.fZSi1D)],
                section: eN.oAB.ACCOUNT,
                parent: eA.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eA.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eP.intl.string(eP.t.uHAJ5v)],
                section: eN.oAB.ACCOUNT,
                parent: eA.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eA.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eP.intl.string(eP.t.vrOCCk)],
                section: eN.oAB.ACCOUNT,
                parent: eA.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
            },
            [eA.s6.ACCOUNT_REMOVAL]: {
                section: eN.oAB.ACCOUNT,
                searchableTitles: [eP.intl.string(eP.t.ZKsIks)],
                parent: eA.s6.ACCOUNT,
            },
            [eA.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eN.oAB.ACCOUNT,
                searchableTitles: [eP.intl.string(eP.t.jf5GGb)],
                parent: eA.s6.ACCOUNT_REMOVAL,
            },
            [eA.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eN.oAB.ACCOUNT,
                searchableTitles: [eP.intl.string(eP.t["8lQ2rR"])],
                parent: eA.s6.ACCOUNT_DISABLE_ACCOUNT,
            },
            [eA.s6.GAMES]: {
                section: eN.oAB.GAMES,
                searchableTitles: [eP.intl.string(eP.t.URyqtP)],
                label: eP.intl.string(eP.t.URyqtP),
                ariaLabel: eP.intl.string(eP.t.URyqtP),
                element: ev.Z,
                predicate: () => eV,
            },
            [eA.s6.GAMES_MY_GAMES]: {
                section: eN.oAB.GAMES,
                searchableTitles: [eP.intl.string(eP.t["5DMgp9"])],
                parent: eA.s6.GAMES,
            },
            [eA.s6.GAMES_CLIPS]: {
                section: eN.oAB.GAMES,
                searchableTitles: [eP.intl.string(eP.t.z2jK6X)],
                parent: eA.s6.GAMES,
            },
            [eA.s6.GAMES_OVERLAY]: {
                section: eN.oAB.GAMES,
                searchableTitles: [eP.intl.string(eP.t["9cb1Uz"])],
                parent: eA.s6.GAMES,
            },
            [eA.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eN.oAB.GAMES,
                searchableTitles: [eP.intl.string(eP.t.Cq98yL)],
                parent: eA.s6.GAMES,
            },
            [eA.s6.PROFILE_CUSTOMIZATION]: {
                section: eN.oAB.PROFILE_CUSTOMIZATION,
                type: f.bT.WIDE,
                searchableTitles: [eP.intl.string(eP.t["vi7f+q"])],
                label: eP.intl.string(eP.t["vi7f+q"]),
                ariaLabel: eP.intl.string(eP.t["vi7f+q"]),
                element: w.Z,
                newIndicator: (0, r.jsx)(eF, {}),
                newIndicatorDismissibleContentTypes: [...eZ()],
                notice: {
                    stores: [U.Z, T.Z],
                    element: D.Z,
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, I.It)(), (0, u.P6)(), d.Z.clearSubsection(eN.oAB.PROFILE_CUSTOMIZATION);
                    });
                },
                url: eN.Z5c.SETTINGS("profile-customization"),
            },
            [eA.s6.PROFILE_DISPLAY_NAME]: {
                section: eN.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eP.intl.string(eP.t["9AjdkD"])],
                parent: eA.s6.PROFILE_CUSTOMIZATION,
            },
            [eA.s6.PROFILE_USER_PROFILE]: {
                section: eN.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eP.intl.string(eP.t["2p07FR"]), eP.intl.string(eP.t["7vhiqk"])],
                parent: eA.s6.PROFILE_CUSTOMIZATION,
            },
            [eA.s6.PROFILE_SERVER_PROFILES]: {
                section: eN.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eP.intl.string(eP.t.kPHroX)],
                parent: eA.s6.PROFILE_CUSTOMIZATION,
            },
            [eA.s6.CONTENT_SOCIAL]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                label: eP.intl.string(eP.t["+o1pDZ"]),
                searchableTitles: [eP.intl.string(eP.t["+o1pDZ"])],
                ariaLabel: eP.intl.string(eP.t["+o1pDZ"]),
                element: er.Z,
                url: eN.Z5c.SETTINGS("content-and-social"),
            },
            [eA.s6.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t["+o1pDZ"]), eP.intl.string(eP.t["/7xJCF"])],
                parent: eA.s6.CONTENT_SOCIAL,
            },
            [eA.s6.CONTENT_SOCIAL_DISCORD]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t["+o1pDZ"]), eP.intl.string(eP.t["/7xJCF"])],
                parent: eA.s6.CONTENT_SOCIAL_DISCORD_TAB,
            },
            [eA.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.YpCiMt)],
                parent: eA.s6.CONTENT_SOCIAL,
            },
            [eA.s6.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                label: eP.intl.string(eP.t.YpCiMt),
                searchableTitles: [eP.intl.string(eP.t.YpCiMt)],
                ariaLabel: eP.intl.string(eP.t.YpCiMt),
                parent: eA.s6.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
                url: eN.Z5c.SETTINGS(eN.oAB.CONTENT_AND_SOCIAL, eC.C),
            },
            [eA.s6.DATA_PRIVACY]: {
                section: eN.oAB.DATA_AND_PRIVACY,
                label: eP.intl.string(eP.t.OAuOHD),
                searchableTitles: [eP.intl.string(eP.t.OAuOHD)],
                ariaLabel: eP.intl.string(eP.t.OAuOHD),
                element: ei.Z,
                url: eN.Z5c.SETTINGS("data-and-privacy"),
            },
            [eA.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eN.oAB.ACCOUNT,
                searchableTitles: [eP.intl.string(eP.t["Vov/9o"])],
                parent: eA.s6.ACCOUNT,
            },
            [eA.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eN.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.WWaFn5)],
                parent: eA.s6.DATA_PRIVACY,
                predicate: () => (0, F.isDesktop)(),
            },
            [eA.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eN.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t["opi/XK"])],
                parent: eA.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            },
            [eA.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.xVRG4P)],
                parent: eA.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eA.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.fyA115)],
                parent: eA.s6.CONTENT_SOCIAL_DISCORD,
            },
            [eA.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.fyA115)],
                parent: eA.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            },
            [eA.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t["/U8Iwa"])],
                parent: eA.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eA.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t["ms+Tme"])],
                parent: eA.s6.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
            [eA.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t["y62Z/d"])],
                parent: eA.s6.CONTENT_SOCIAL,
            },
            [eA.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eN.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.SRZyHg)],
                parent: eA.s6.DATA_PRIVACY,
            },
            [eA.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eP.intl.string(eP.t.uEz8JF),
                    eP.intl.string(eP.t["N/oRI+"]),
                    eP.intl.string(eP.t.QVdYsK),
                    eP.intl.string(eP.t["aWD+tu"]),
                    eP.intl.string(eP.t["5mnTa7"]),
                ],
                parent: eA.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eA.s6.SENSITIVE_CONTENT_FILTERS]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eP.intl.string(eP.t["Hj/But"]),
                    eP.intl.string(eP.t["N/oRI+"]),
                    eP.intl.string(eP.t.QVdYsK),
                    eP.intl.string(eP.t["aWD+tu"]),
                    eP.intl.string(eP.t["5mnTa7"]),
                    eP.intl.string(eP.t["K0OWP+"]),
                ],
                parent: eA.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eA.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eP.intl.string(eP.t["Hj/But"]),
                    eP.intl.string(eP.t["N/oRI+"]),
                    eP.intl.string(eP.t.QVdYsK),
                    eP.intl.string(eP.t["aWD+tu"]),
                    eP.intl.string(eP.t["5mnTa7"]),
                ],
                parent: eA.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eA.s6.GORE_MEDIA_REDACTION]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eP.intl.string(eP.t["Hj/But"]),
                    eP.intl.string(eP.t["N/oRI+"]),
                    eP.intl.string(eP.t.QVdYsK),
                    eP.intl.string(eP.t["aWD+tu"]),
                    eP.intl.string(eP.t["K0OWP+"]),
                ],
                parent: eA.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eA.s6.PARENTAL_CONTROLS_SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: eN.oAB.FAMILY_CENTER_PARENTAL_CONTROLS,
                parent: eA.s6.PRIVACY_FAMILY_CENTER,
                predicate: () => !1,
            },
            [eA.s6.PARENTAL_CONTROLS_GORE_MEDIA_REDACTION]: {
                section: eN.oAB.FAMILY_CENTER_PARENTAL_CONTROLS,
                parent: eA.s6.PRIVACY_FAMILY_CENTER,
                predicate: () => !1,
            },
            [eA.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [
                    eP.intl.string(eP.t.JzaP4h),
                    eP.intl.string(eP.t.H9XOl3),
                    eP.intl.string(eP.t.k4W40P),
                ],
                parent: eA.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eA.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t["L+yTsa"])],
                parent: eA.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eA.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.XahVjj)],
                parent: eA.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            },
            [eA.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                parent: eA.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            },
            [eA.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.RAQUSN), eP.intl.string(eP.t.wbYDfT)],
                parent: eA.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eA.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t["3o2ojh"])],
                parent: eA.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !eJ,
            },
            [eA.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.OLwZDV)],
                parent: eA.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eA.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.wBkwux)],
                parent: eA.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            },
            [eA.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eN.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.XuADY2)],
                parent: eA.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eA.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eN.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.MNKzyg)],
                parent: eA.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eA.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eN.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.VkS7Yd), eP.intl.string(eP.t.sJYh5t)],
                parent: eA.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eA.s6.PRIVACY_DATA_QUESTS_3P]: {
                section: eN.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.CyLYKZ)],
                parent: eA.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                predicate: () => te,
            },
            [eA.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eN.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eA.CF],
                parent: eA.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
            },
            [eA.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eN.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.dmBSKo)],
                parent: eA.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
            },
            [eA.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t["1UaUy+"]), eP.intl.string(eP.t["xIk/iF"])],
                parent: eA.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eY,
            },
            [eA.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [eP.intl.string(eP.t.qFsx5q)],
                parent: eA.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => ez && !e3 && !eq,
            },
            [eA.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eN.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t["5b3FNI"])],
                parent: eA.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => e2,
            },
            [eA.s6.PRIVACY_FAMILY_CENTER]: {
                section: eN.oAB.FAMILY_CENTER,
                searchableTitles: [eP.intl.string(ew.default.gntCQT)],
                label: eP.intl.string(ew.default.gntCQT),
                ariaLabel: eP.intl.string(ew.default.gntCQT),
                element: eo.Z,
                badgeCount: x,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eP.intl.string(eP.t.y2b7CA),
                    color: y.Z.BG_BRAND,
                }),
                newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE],
                url: eN.Z5c.SETTINGS("family-center"),
            },
            [eA.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eN.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.BG7QsQ)],
                parent: eA.s6.DATA_PRIVACY,
            },
            [eA.s6.AUTHORIZED_APPS]: {
                section: eN.oAB.AUTHORIZED_APPS,
                searchableTitles: [eP.intl.string(eP.t["f6kk+r"])],
                label: eP.intl.string(eP.t["f6kk+r"]),
                element: ee.Z,
                url: eN.Z5c.SETTINGS("authorized-apps"),
            },
            [eA.s6.SESSIONS]: {
                section: eN.oAB.SESSIONS,
                searchableTitles: [eP.intl.string(eP.t["+1h0k/"])],
                label: eP.intl.string(eP.t["+1h0k/"]),
                ariaLabel: eP.intl.string(eP.t["+1h0k/"]),
                element: eh.Z,
                newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
                impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: { source: null == v ? void 0 : v.source },
            },
            [eA.s6.CONNECTIONS]: {
                section: eN.oAB.CONNECTIONS,
                searchableTitles: [eP.intl.string(eP.t["3fe7U5"])],
                label: eP.intl.string(eP.t["3fe7U5"]),
                ariaLabel: eP.intl.string(eP.t["3fe7U5"]),
                element: en.Z,
                impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: null == v ? void 0 : v.source },
                newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION],
                url: eN.Z5c.SETTINGS("connections"),
            },
            [eA.s6.THIRD_PARTY_ACCESS]: {
                section: eN.oAB.CONNECTIONS,
                searchableTitles: [
                    eP.intl.string(eP.t["Ig/XFa"]),
                    eP.intl.string(eP.t["3fe7U5"]),
                    eP.intl.string(eP.t["f6kk+r"]),
                ],
                label: eP.intl.string(eP.t["Ig/XFa"]),
                parent: eA.s6.CONNECTIONS,
                element: eE.Z,
            },
            [eA.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eN.oAB.CONNECTIONS,
                searchableTitles: [eP.intl.string(eP.t["+/hZM/"])],
                parent: eA.s6.CONNECTIONS,
                element: en.Z,
            },
            [eA.s6.CLIPS]: {
                section: eN.oAB.CLIPS,
                searchableTitles: [eP.intl.string(eP.t.z2jK6X)],
                label: eP.intl.string(eP.t.z2jK6X),
                ariaLabel: eP.intl.string(eP.t.z2jK6X),
                icon: ej ? (0, r.jsx)(g.Z, {}) : void 0,
                element: E.Z,
                predicate: () => !eV,
                url: eN.Z5c.SETTINGS("clips"),
            },
            [eA.s6.CLIPS_RECORDING_TAB]: {
                section: eN.oAB.CLIPS,
                searchableTitles: [eP.intl.string(eP.t.iIwmV5)],
                parent: eA.s6.CLIPS,
            },
            [eA.s6.CLIPS_AUTOMATIC_TAB]: {
                section: eN.oAB.CLIPS,
                searchableTitles: [eP.intl.string(eP.t.sA0WKL)],
                parent: eA.s6.CLIPS,
            },
            [eA.s6.CLIPS_PRIVACY_TAB]: {
                section: eN.oAB.CLIPS,
                searchableTitles: [eP.intl.string(eP.t.GcIeET)],
                parent: eA.s6.CLIPS,
            },
            [eA.s6.RESTRICTED_USERS]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                parent: eA.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eP.intl.string(eP.t["3wRort"]),
                element: eI.ZP,
                predicate: () => e4 || e5,
            },
            [eA.s6.BLOCKED_USERS]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                parent: eA.s6.RESTRICTED_USERS,
                label: eP.intl.string(eP.t.PFOUKW),
                searchableTitles: [eP.intl.string(eP.t.PFOUKW)],
                element: eI.GF,
                predicate: () => e5,
            },
            [eA.s6.IGNORED_USERS]: {
                section: eN.oAB.CONTENT_AND_SOCIAL,
                parent: eA.s6.RESTRICTED_USERS,
                searchableTitles: [eP.intl.string(eP.t["93ZDWE"])],
                label: eP.intl.string(eP.t["93ZDWE"]),
                element: eI.yo,
                predicate: () => e4,
            },
            [eA.s6.PREMIUM]: {
                section: eN.oAB.PREMIUM,
                ariaLabel: eP.intl.string(eP.t.Ipxkog),
                searchableTitles: [eP.intl.string(eP.t.Ipxkog)],
                label: eP.intl.string(eP.t.Ipxkog),
                element: K.Z,
                className: ex.premiumTab,
            },
            [eA.s6.GUILD_BOOSTING]: {
                section: eN.oAB.GUILD_BOOSTING,
                searchableTitles: [eP.intl.string(eP.t["+CbP2v"])],
                label: eP.intl.string(eP.t["+CbP2v"]),
                element: e_.Z,
            },
            [eA.s6.SUBSCRIPTIONS]: {
                section: eN.oAB.SUBSCRIPTIONS,
                ariaLabel: eP.intl.string(eP.t.trSpHX),
                searchableTitles: [eP.intl.string(eP.t.trSpHX)],
                label: eP.intl.string(eP.t.trSpHX),
                element: R.Z,
                icon: O
                    ? (0, r.jsx)(s.Mgn, {
                          size: "xs",
                          color: o.Z.unsafe_rawColors.YELLOW_300.css,
                      })
                    : null,
            },
            [eA.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eN.oAB.SUBSCRIPTIONS,
                searchableTitles: [eP.intl.string(eP.t["2GKrvn"])],
                parent: eA.s6.SUBSCRIPTIONS,
            },
            [eA.s6.GIFT_INVENTORY]: {
                section: eN.oAB.INVENTORY,
                searchableTitles: [eP.intl.string(eP.t["jcSP+g"])],
                label: eP.intl.string(eP.t["jcSP+g"]),
                element: el.Z,
                ariaLabel: eP.intl.string(eP.t["jcSP+g"]),
                badgeCount: t,
            },
            [eA.s6.GIFT_CODE_REDEMPTION]: {
                section: eN.oAB.INVENTORY,
                searchableTitles: [eP.intl.string(eP.t["il+VCo"])],
                parent: eA.s6.GIFT_INVENTORY,
                predicate: () => !eX,
            },
            [eA.s6.GIFT_INVENTORY_QUESTS]: {
                section: eN.oAB.INVENTORY,
                searchableTitles: [eP.intl.string(eP.t.JALI2K)],
                parent: eA.s6.GIFT_INVENTORY,
                predicate: () => eQ,
            },
            [eA.s6.GIFT_INVENTORY_LIST]: {
                section: eN.oAB.INVENTORY,
                searchableTitles: [eP.intl.string(eP.t["9KeUbY"])],
                parent: eA.s6.GIFT_INVENTORY,
                predicate: () => !eX,
            },
            [eA.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eN.oAB.INVENTORY,
                searchableTitles: [eP.intl.string(eP.t.vwMEHS)],
                parent: eA.s6.GIFT_INVENTORY,
                predicate: () => eX,
            },
            [eA.s6.BILLING]: {
                section: eN.oAB.BILLING,
                searchableTitles: [eP.intl.string(eP.t.oeUm2s)],
                label: eP.intl.string(eP.t.oeUm2s),
                ariaLabel: eP.intl.string(eP.t.oeUm2s),
                element: et.Z,
            },
            [eA.s6.BILLING_PAYMENT_METHODS]: {
                section: eN.oAB.BILLING,
                searchableTitles: [eP.intl.string(eP.t.W26xGQ)],
                parent: eA.s6.BILLING,
            },
            [eA.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eN.oAB.BILLING,
                searchableTitles: [eP.intl.string(eP.t.obLrcK)],
                parent: eA.s6.BILLING,
            },
            [eA.s6.APPEARANCE]: {
                section: eN.oAB.APPEARANCE,
                searchableTitles: [eP.intl.string(eP.t["iHH+ky"])],
                label: eP.intl.string(eP.t["iHH+ky"]),
                ariaLabel: eP.intl.string(eP.t["iHH+ky"]),
                element: $.Z,
                newIndicator: (0, r.jsx)(eB, {}),
                newIndicatorDismissibleContentTypes: eG(),
                url: eN.Z5c.SETTINGS("appearance"),
            },
            [eA.s6.APPEARANCE_THEME]: {
                section: eN.oAB.APPEARANCE,
                searchableTitles: [eP.intl.string(eP.t.Ksh3ik)],
                parent: eA.s6.APPEARANCE,
            },
            [eA.s6.APPEARANCE_COLOR]: {
                section: eN.oAB.APPEARANCE,
                searchableTitles: [eP.intl.string(eP.t.OCOOiI)],
                parent: eA.s6.APPEARANCE_THEME,
            },
            [eA.s6.APPEARANCE_ICON]: {
                section: eN.oAB.APPEARANCE,
                searchableTitles: [eP.intl.string(eP.t.RPh2ou)],
                parent: eA.s6.APPEARANCE_THEME,
            },
            [eA.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eN.oAB.APPEARANCE,
                searchableTitles: [eP.intl.string(eP.t.ZEoGMd)],
                parent: eA.s6.APPEARANCE,
            },
            [eA.s6.APPEARANCE_LIST_SPACING]: {
                section: eN.oAB.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: eA.s6.APPEARANCE,
                newIndicator: (0, r.jsx)(s.IGR, {
                    text: eP.intl.string(eP.t.y2b7CA),
                    color: y.Z.BG_BRAND,
                }),
            },
            [eA.s6.APPEARANCE_SCALING_SPACING]: {
                section: eN.oAB.APPEARANCE,
                searchableTitles: [eP.intl.string(eP.t.qPOqoK)],
                parent: eA.s6.APPEARANCE,
            },
            [eA.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE]: {
                section: eN.oAB.APPEARANCE,
                searchableTitles: [
                    eP.intl.string(eP.t.dyamEI),
                    eP.intl.string(eP.t.p8NOwi),
                    eP.intl.string(eP.t["+o/sOo"]),
                ],
                parent: eA.s6.APPEARANCE,
                predicate: () =>
                    L.Z.getCurrentConfig({ location: "SettingsRendererConfig" }, { autoTrackExposure: !1 })
                        .enable24HourPref,
            },
            [eA.s6.ACCESSIBILITY]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.G0neg7)],
                label: eP.intl.string(eP.t.G0neg7),
                ariaLabel: eP.intl.string(eP.t.G0neg7),
                element: q.Z,
                url: eN.Z5c.SETTINGS("accessibility"),
            },
            [eA.s6.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.aZlePv)],
                parent: eA.s6.ACCESSIBILITY,
            },
            [eA.s6.ACCESSIBILITY_SWITCH_ICON]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t["S3z+pV"])],
                parent: eA.s6.ACCESSIBILITY,
            },
            [eA.s6.ACCESSIBILITY_SATURATION]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t["5PWWCY"])],
                parent: eA.s6.ACCESSIBILITY,
            },
            [eA.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.bQCodD)],
                parent: eA.s6.ACCESSIBILITY_SATURATION,
            },
            [eA.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.OLZFB8)],
                parent: eA.s6.ACCESSIBILITY,
            },
            [eA.s6.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t["+Isihb"])],
                parent: eA.s6.ACCESSIBILITY,
                predicate: () => (0, b.A)("SettingsRendererConfig"),
            },
            [eA.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.uSOPWm)],
                parent: eA.s6.ACCESSIBILITY,
            },
            [eA.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eD.default["2gFUEw"])],
                parent: eA.s6.ACCESSIBILITY,
            },
            [eA.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.BT8Bmp)],
                parent: eA.s6.ACCESSIBILITY,
            },
            [eA.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t["sSY+mD"])],
                parent: eA.s6.ACCESSIBILITY_PROFILE_COLORS,
            },
            [eA.s6.ACCESSIBILITY_CONTRAST]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t["TYyfO/"])],
                parent: eA.s6.ACCESSIBILITY,
            },
            [eA.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.cguiec)],
                parent: eA.s6.ACCESSIBILITY_CONTRAST,
            },
            [eA.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.e3TR1b)],
                parent: eA.s6.ACCESSIBILITY,
            },
            [eA.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.b3XBzg)],
                parent: eA.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eA.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.Iayoh5)],
                parent: eA.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eA.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.iIaOlc)],
                parent: eA.s6.ACCESSIBILITY_REDUCED_MOTION,
            },
            [eA.s6.ACCESSIBILITY_STICKERS]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t["6NtAuJ"])],
                parent: eA.s6.ACCESSIBILITY,
            },
            [eA.s6.ACCESSIBILITY_MESSAGES]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.onqU6o)],
                parent: eA.s6.ACCESSIBILITY,
            },
            [eA.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t["3Fztn5"])],
                parent: eA.s6.ACCESSIBILITY_MESSAGES,
            },
            [eA.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.TZ2hZH)],
                parent: eA.s6.ACCESSIBILITY_MESSAGES,
            },
            [eA.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.VpSKeO)],
                parent: eA.s6.ACCESSIBILITY,
            },
            [eA.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.qvTIwX)],
                parent: eA.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
            },
            [eA.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eP.intl.string(eP.t.lsW5Ev)],
                parent: eA.s6.ACCESSIBILITY,
            },
            [eA.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eN.oAB.ACCESSIBILITY,
                searchableTitles: [eA.CF],
                parent: eA.s6.ACCESSIBILITY,
            },
            [eA.s6.VOICE_AND_VIDEO]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.B1fFpf)],
                label: eP.intl.string(eP.t.B1fFpf),
                ariaLabel: eP.intl.string(eP.t.B1fFpf),
                element: eT.Z,
                predicate: () => j.Z.isSupported(),
                url: eN.Z5c.SETTINGS("voice"),
            },
            [eA.s6.VOICE_AND_VIDEO_VOICE_TAB]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.K3lovD), eP.intl.string(eP.t.NiTd0e)],
                parent: eA.s6.VOICE_AND_VIDEO,
            },
            [eA.s6.VOICE_AND_VIDEO_VIDEO_TAB]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.FlNoSV)],
                parent: eA.s6.VOICE_AND_VIDEO,
            },
            [eA.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.ABjMWI)],
                parent: eA.s6.VOICE_AND_VIDEO,
            },
            [eA.s6.VOICE_AND_VIDEO_DEBUG_TAB]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.OFpL3c)],
                parent: eA.s6.VOICE_AND_VIDEO,
            },
            [eA.s6.VOICE_AND_VIDEO_VIDEO_STREAMING]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.KDdjou), eP.intl.string(eP.t.FeUKeA)],
                parent: eA.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eA.s6.VOICE_AND_VIDEO_VOICE]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.K3lovD), eP.intl.string(eP.t.NiTd0e)],
                parent: eA.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eA.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eN.oAB.VOICE,
                searchableTitles: [
                    eP.intl.string(eP.t.hHMYbb),
                    eP.intl.string(eP.t.dl18zb),
                    eP.intl.string(eP.t.nuFtHH),
                    eP.intl.string(eP.t["3182VD"]),
                    eP.intl.string(eP.t["DGq/PR"]),
                ],
                parent: eA.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eA.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eN.oAB.VOICE,
                searchableTitles: [
                    eP.intl.string(eP.t.OX2Bnr),
                    eP.intl.string(eP.t.eATD2B),
                    eP.intl.string(eP.t.nuFtHH),
                    eP.intl.string(eP.t["3182VD"]),
                    eP.intl.string(eP.t["DGq/PR"]),
                ],
                parent: eA.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eA.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.gyljWE), eP.intl.string(eP.t.nuFtHH)],
                parent: eA.s6.VOICE_AND_VIDEO_VOICE,
            },
            [eA.s6.VOICE_AND_VIDEO_INPUT_PROFILE]: {
                section: eN.oAB.VOICE,
                searchableTitles: [
                    eP.intl.string(eP.t.LM3U3k),
                    eP.intl.string(eP.t.nuFtHH),
                    eP.intl.string(eP.t.VZPR0R),
                    eP.intl.string(eP.t.cjPbpT),
                ],
                parent: eA.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => {
                    let { enabledInputProfiles: e } = (0, Y.P)({ location: "SettingsRendererConfig" });
                    return e.length > 0;
                },
            },
            [eA.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["pS+K2L"]), eP.intl.string(eP.t.nuFtHH)],
                parent: eA.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => e7 !== eS._.STUDIO,
            },
            [eA.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["sqUm+k"]), eP.intl.string(eP.t.nuFtHH)],
                parent: eA.s6.VOICE_AND_VIDEO_VOICE,
                predicate: () => e6 === eR.pM.VOICE_ACTIVITY && e9,
            },
            [eA.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.e7LIiY)],
                parent: eA.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
            },
            [eA.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.nzUc3B)],
                parent: eA.s6.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
            },
            [eA.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.ABjMWI)],
                parent: eA.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eA.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.nzUc3B)],
                parent: eA.s6.VOICE_AND_VIDEO_SOUNDS,
            },
            [eA.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.LKzQSF)],
                parent: eA.s6.VOICE_AND_VIDEO_VIDEO_TAB,
            },
            [eA.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.F122Gz)],
                parent: eA.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => j.Z.supports(eR.AN.VIDEO),
            },
            [eA.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["3Ppr1h"])],
                parent: eA.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
            },
            [eA.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.lZTUPs)],
                parent: eA.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => j.Z.supports(eR.AN.VIDEO),
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["8/udY0"])],
                parent: eA.s6.VOICE_AND_VIDEO,
            },
            [eA.s6.VOICE_AND_VIDEO_VOICE_ADVANCED]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["8/udY0"])],
                parent: eA.s6.VOICE_AND_VIDEO_VOICE_TAB,
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["6I6GUv"])],
                parent: eA.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => e9,
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.iWTwu6)],
                parent: eA.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["/jwMtn"])],
                parent: eA.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eA.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.OBwCXF)],
                parent: eA.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.t8Qhib), eP.intl.string(eP.t.hmfkCi)],
                parent: eA.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => j.Z.isNoiseSuppressionSupported(),
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.BbESsg)],
                parent: eA.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => j.Z.isAdvancedVoiceActivitySupported(),
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.cUMdH0)],
                parent: eA.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => j.Z.isAutomaticGainControlSupported(),
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.DFPXIG)],
                parent: eA.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => j.Z.showBypassSystemInputProcessing(),
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.uancuJ)],
                parent: eA.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => j.Z.supports(eR.AN.QOS),
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.oSdBvW)],
                parent: eA.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => j.Z.supports(eR.AN.ATTENUATION),
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.wVBHr0)],
                parent: eA.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => j.Z.shouldOfferManualSubsystemSelection(),
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE]: {
                section: eN.oAB.VOICE,
                searchableTitles: [
                    eP.intl.string(eP.t.KDdjou),
                    eP.intl.string(eP.t.NMCIf9),
                    eP.intl.string(eP.t.FeUKeA),
                ],
                parent: eA.s6.VOICE_AND_VIDEO_VIDEO_STREAMING,
                predicate: () =>
                    j.Z.supportsVideoHook() ||
                    j.Z.supportsExperimentalSoundshare() ||
                    (j.Z.supportsSystemScreensharePicker() && (0, F.isMac)()),
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.GmWk2E), eP.intl.string(eP.t["Fj/xn1"])],
                parent: eA.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => j.Z.supportsVideoHook(),
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["4I0qzZ"])],
                parent: eA.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => j.Z.supportsExperimentalSoundshare() && j.Z.supportsHookSoundshare(),
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.ie1mgY)],
                parent: eA.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
                predicate: () => j.Z.supportsSystemScreensharePicker() && (0, F.isMac)(),
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["aP1N/m"])],
                parent: eA.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                predicate: () => F.isPlatformEmbedded,
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.OFpL3c)],
                parent: eA.s6.VOICE_AND_VIDEO_DEBUG_TAB,
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["0CEP6e"])],
                parent: eA.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => H.Sb.getSetting(),
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["r6K+TL"])],
                parent: eA.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => j.Z.isAecDumpSupported(),
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t.U4FgFK)],
                parent: eA.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    ("canary" === V.ZP.releaseChannel || "development" === V.ZP.releaseChannel) &&
                    eK &&
                    j.Z.supports(eR.AN.CONNECTION_REPLAY),
            },
            [eA.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["726JHL"])],
                parent: eA.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () =>
                    F.isPlatformEmbedded && j.Z.supports(eR.AN.DEBUG_LOGGING) && null != _.Z.fileManager.readLogFiles,
            },
            [eA.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eN.oAB.VOICE,
                searchableTitles: [eP.intl.string(eP.t["/RXu67"])],
                parent: eA.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
            },
            [eA.s6.POGGERMODE]: {
                section: eN.oAB.POGGERMODE,
                searchableTitles: [eP.intl.string(eP.t.AtCukI)],
                label: eP.intl.string(eP.t.AtCukI),
                ariaLabel: eP.intl.string(eP.t.AtCukI),
                element: C.Z,
                predicate: () => A.Z.settingsVisible,
                icon: (0, r.jsx)("img", {
                    alt: "",
                    src: n(348621),
                    className: ex.poggermodeIcon,
                }),
            },
            [eA.s6.CHAT]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t["/VQax8"])],
                label: eP.intl.string(eP.t["/VQax8"]),
                ariaLabel: eP.intl.string(eP.t["/VQax8"]),
                element: eg.Z,
                url: eN.Z5c.SETTINGS("text"),
            },
            [eA.s6.MESSAGE_SEARCH]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.VYODPD)],
                parent: eA.s6.CHAT,
                predicate: () => tn,
            },
            [eA.s6.MESSAGE_SEARCH_ALL_DMS]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t["t4+fbe"])],
                parent: eA.s6.MESSAGE_SEARCH,
                predicate: () => tn,
            },
            [eA.s6.CHAT_INLINE_MEDIA]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.U68Dgp)],
                parent: eA.s6.CHAT,
            },
            [eA.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.U47N1p)],
                parent: eA.s6.CHAT_INLINE_MEDIA,
            },
            [eA.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.VP11No)],
                parent: eA.s6.CHAT_INLINE_MEDIA,
            },
            [eA.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t["5S2AK+"])],
                parent: eA.s6.CHAT_INLINE_MEDIA,
            },
            [eA.s6.CHAT_EMBEDS]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.PWZOn4)],
                parent: eA.s6.CHAT,
            },
            [eA.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.xX0ZTA)],
                parent: eA.s6.CHAT_EMBEDS,
            },
            [eA.s6.CHAT_EMOJI]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.sMOuuS)],
                parent: eA.s6.CHAT,
            },
            [eA.s6.CHAT_EMOJI_REACTIONS]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.Iv24sm)],
                parent: eA.s6.CHAT_EMOJI,
            },
            [eA.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t["79qal8"])],
                parent: eA.s6.CHAT_EMOJI,
            },
            [eA.s6.CHAT_STICKERS]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t["6NtAuJ"])],
                parent: eA.s6.CHAT,
            },
            [eA.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t["29xPVZ"])],
                parent: eA.s6.CHAT_STICKERS,
            },
            [eA.s6.CHAT_SOUNDMOJI]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.EHlAMc)],
                parent: eA.s6.CHAT,
                predicate: () => (0, N.dX)({ location: "SettingsRendererConfig" }),
            },
            [eA.s6.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t["CtYr+U"])],
                parent: eA.s6.CHAT_SOUNDMOJI,
                predicate: () => (0, N.dX)({ location: "SettingsRendererConfig" }),
            },
            [eA.s6.CHAT_TEXT_BOX]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.afR0pI)],
                parent: eA.s6.CHAT,
            },
            [eA.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.AqGrEI)],
                parent: eA.s6.CHAT_TEXT_BOX,
            },
            [eA.s6.CHAT_THREADS]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.B2panI)],
                parent: eA.s6.CHAT,
            },
            [eA.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.AInv5m)],
                parent: eA.s6.CHAT_THREADS,
            },
            [eA.s6.CHAT_SPOILERS]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.QgwmVz)],
                parent: eA.s6.CHAT,
            },
            [eA.s6.CHAT_MENTION_SUGGESTIONS]: {
                section: eN.oAB.TEXT,
                searchableTitles: [eP.intl.string(eP.t.uXQ2xT)],
                parent: eA.s6.CHAT_TEXT_BOX,
                predicate: () => tt,
            },
            [eA.s6.NOTIFICATIONS]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.HcoRu0)],
                label: eP.intl.string(eP.t.HcoRu0),
                ariaLabel: eP.intl.string(eP.t.HcoRu0),
                element: ed.Z,
                url: eN.Z5c.SETTINGS("notifications"),
            },
            [eA.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t["/0WCll"])],
                parent: eA.s6.NOTIFICATIONS,
            },
            [eA.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: ["Mention on all messages"],
                parent: eA.s6.NOTIFICATIONS,
            },
            [eA.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.VH8AIJ)],
                parent: eA.s6.NOTIFICATIONS,
            },
            [eA.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.xSmFQG)],
                parent: eA.s6.NOTIFICATIONS,
                predicate: () => (0, F.isWindows)(),
            },
            [eA.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: ["New Unreads Setting (Experimental)"],
                parent: eA.s6.NOTIFICATIONS,
            },
            [eA.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.TTvjd9)],
                parent: eA.s6.NOTIFICATIONS,
            },
            [eA.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.VpSKeO)],
                parent: eA.s6.NOTIFICATIONS,
            },
            [eA.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.D9yVAH)],
                parent: eA.s6.NOTIFICATIONS,
            },
            [eA.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.u6dc5B)],
                parent: eA.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eA.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.P8MG6q)],
                parent: eA.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
            },
            [eA.s6.NOTIFICATIONS_SOUNDS]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.MKWyKc)],
                parent: eA.s6.NOTIFICATIONS,
            },
            [eA.s6.NOTIFICATIONS_EMAILS]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.TPchzM)],
                parent: eA.s6.NOTIFICATIONS,
            },
            [eA.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t["B75+xe"])],
                parent: eA.s6.NOTIFICATIONS_EMAILS,
            },
            [eA.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.sxn7lR)],
                parent: eA.s6.NOTIFICATIONS_EMAILS,
            },
            [eA.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.EkxXhe)],
                parent: eA.s6.NOTIFICATIONS_EMAILS,
            },
            [eA.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.jNrkrM)],
                parent: eA.s6.NOTIFICATIONS_EMAILS,
            },
            [eA.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.E8g1l8)],
                parent: eA.s6.NOTIFICATIONS_EMAILS,
            },
            [eA.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.Ra9Pwk)],
                parent: eA.s6.NOTIFICATIONS_EMAILS,
            },
            [eA.s6.NOTIFICATIONS_REACTIONS]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.Rq0NFs)],
                parent: eA.s6.NOTIFICATIONS,
            },
            [eA.s6.NOTIFICATIONS_VOICE_ACTIVITY]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.wtk08S)],
                parent: eA.s6.NOTIFICATIONS,
            },
            [eA.s6.NOTIFICATIONS_FRIEND_ONLINE]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t["uvIi/4"])],
                parent: eA.s6.NOTIFICATIONS,
                predicate: () => (0, S.bH)("SettingsRendererConfig"),
            },
            [eA.s6.NOTIFICATIONS_USER_RESURRECTION]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.Zyn45S)],
                parent: eA.s6.NOTIFICATIONS,
            },
            [eA.s6.NOTIFICATIONS_GO_LIVE]: {
                section: eN.oAB.NOTIFICATIONS,
                searchableTitles: [eP.intl.string(eP.t.pW4TMp)],
                parent: eA.s6.NOTIFICATIONS,
            },
            [eA.s6.KEYBINDS]: {
                section: eN.oAB.KEYBINDS,
                searchableTitles: [eP.intl.string(eP.t.T9DA2K)],
                label: eP.intl.string(eP.t.T9DA2K),
                element: ec.Z,
                url: eN.Z5c.SETTINGS("keybinds"),
            },
            [eA.s6.LANGUAGE]: {
                section: eN.oAB.LOCALE,
                searchableTitles: [eP.intl.string(eP.t.IHMsPn)],
                label: eP.intl.string(eP.t.IHMsPn),
                element: eu.Z,
                url: eN.Z5c.SETTINGS("language"),
            },
            [eA.s6.WINDOW_SETTINGS]: {
                section: eN.oAB.WINDOWS,
                searchableTitles: [eP.intl.string(eP.t.ZkDZov)],
                label: eP.intl.string(eP.t.ZkDZov),
                element: eb.Z,
                predicate: () => F.isPlatformEmbedded && (0, F.isWindows)(),
            },
            [eA.s6.LINUX_SETTINGS]: {
                section: eN.oAB.LINUX,
                searchableTitles: [eP.intl.string(eP.t["7pPjTW"])],
                label: eP.intl.string(eP.t["7pPjTW"]),
                element: eW,
                predicate: () => F.isPlatformEmbedded && (0, F.isLinux)(),
            },
            [eA.s6.STREAMER_MODE]: {
                section: eN.oAB.STREAMER_MODE,
                searchableTitles: [eP.intl.string(eP.t.S5GfOW)],
                label: eP.intl.string(eP.t.S5GfOW),
                ariaLabel: eP.intl.string(eP.t.S5GfOW),
                element: em.Z,
                url: eN.Z5c.SETTINGS("streamer-mode"),
            },
            [eA.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eN.oAB.STREAMER_MODE,
                searchableTitles: [eP.intl.string(eP.t.bxGbHL)],
                parent: eA.s6.STREAMER_MODE,
            },
            [eA.s6.STREAMER_MODE_ENABLE]: {
                section: eN.oAB.STREAMER_MODE,
                searchableTitles: [eP.intl.string(eP.t.p9ZAJZ)],
                parent: eA.s6.STREAMER_MODE,
            },
            [eA.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eN.oAB.STREAMER_MODE,
                searchableTitles: [eP.intl.string(eP.t.UpQziA)],
                parent: eA.s6.STREAMER_MODE,
            },
            [eA.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eN.oAB.STREAMER_MODE,
                searchableTitles: [eP.intl.string(eP.t.q7WNGv)],
                parent: eA.s6.STREAMER_MODE,
            },
            [eA.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eN.oAB.STREAMER_MODE,
                searchableTitles: [eP.intl.string(eP.t["1CWknJ"])],
                parent: eA.s6.STREAMER_MODE,
            },
            [eA.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eN.oAB.STREAMER_MODE,
                searchableTitles: [eP.intl.string(eP.t.qmYiYd)],
                parent: eA.s6.STREAMER_MODE,
            },
            [eA.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eN.oAB.STREAMER_MODE,
                searchableTitles: [eP.intl.string(eP.t["iA81+a"])],
                parent: eA.s6.STREAMER_MODE,
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
            [eA.s6.SETTINGS_ADVANCED]: {
                section: eN.oAB.ADVANCED,
                searchableTitles: [eP.intl.string(eP.t["8/udY0"])],
                label: eP.intl.string(eP.t["8/udY0"]),
                ariaLabel: eP.intl.string(eP.t["8/udY0"]),
                element: J.ZP,
            },
            [eA.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eN.oAB.ADVANCED,
                searchableTitles: [eP.intl.string(eP.t.ObIb1Q)],
                parent: eA.s6.SETTINGS_ADVANCED,
                predicate: () => B.wS,
            },
            [eA.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eN.oAB.ADVANCED,
                searchableTitles: [eP.intl.string(eP.t["eOC/F2"])],
                parent: eA.s6.SETTINGS_ADVANCED,
                predicate: () => F.isPlatformEmbedded,
            },
            [eA.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eN.oAB.ADVANCED,
                searchableTitles: [eP.intl.string(eP.t.fi3UQN)],
                parent: eA.s6.SETTINGS_ADVANCED,
                predicate: () => e$,
            },
            [eA.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eN.oAB.ADVANCED,
                searchableTitles: [eP.intl.string(eP.t.erOqlh)],
                parent: eA.s6.SETTINGS_ADVANCED,
                predicate: () => e1,
            },
            [eA.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN]: {
                section: eN.oAB.ADVANCED,
                searchableTitles: [eP.intl.string(eP.t.qDZryG)],
                parent: eA.s6.SETTINGS_ADVANCED,
            },
            [eA.s6.PRIVATE_BROWSING_PERK]: {
                section: eN.oAB.CF_WARP,
                searchableTitles: [eP.intl.string(eL.default.SsTtq3)],
                predicate: () => P.H.getConfig({ location: "SettingsRendererConfig" }).enabled,
                newIndicator: (0, r.jsx)(eH, {}),
                newIndicatorDismissibleContentTypes: [a.z.NITRO_PRIVACY_PERK_NEW_BADGE],
                url: eN.Z5c.SETTINGS("private-browsing"),
            },
            [eA.s6.ACTIVITY_PRIVACY]: {
                section: eN.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.Cq98yL)],
                label: eP.intl.string(eP.t.Cq98yL),
                ariaLabel: eP.intl.string(eP.t.Cq98yL),
                element: Q.Z,
                predicate: () => !eV,
                url: eN.Z5c.SETTINGS("activity-privacy"),
            },
            [eA.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eV ? eN.oAB.GAMES : eN.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t["8ka8li"])],
                parent: eV ? eA.s6.GAMES_ACTIVITY_PRIVACY : eA.s6.ACTIVITY_PRIVACY,
            },
            [eA.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eV ? eN.oAB.GAMES : eN.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t.VOszPA)],
                parent: eV ? eA.s6.GAMES_ACTIVITY_PRIVACY : eA.s6.ACTIVITY_PRIVACY,
            },
            [eA.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eV ? eN.oAB.GAMES : eN.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eA.CF],
                parent: eV ? eA.s6.GAMES_ACTIVITY_PRIVACY : eA.s6.ACTIVITY_PRIVACY,
            },
            [eA.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
                section: eN.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eP.intl.string(eP.t["4F2KoC"])],
                parent: eA.s6.ACTIVITY_PRIVACY,
            },
            [eA.s6.REGISTERED_GAMES]: {
                section: eN.oAB.REGISTERED_GAMES,
                searchableTitles: [eP.intl.string(eP.t.AVDyEj)],
                label: eP.intl.string(eP.t.AVDyEj),
                element: es.Z,
                predicate: () => !eV && (0, eO.Jw)(),
            },
            [eA.s6.OVERLAY]: {
                section: eN.oAB.OVERLAY,
                searchableTitles: [eP.intl.string(eP.t["9cb1Uz"]), eP.intl.string(eP.t.HcoRu0)],
                label: eP.intl.string(eP.t["9cb1Uz"]),
                element: ef.Z,
                predicate: () => !eV && eM,
            },
            [eA.s6.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, m.Z)(!0),
                searchableTitles: [eP.intl.string(eP.t.LRmNAl)],
                label: eP.intl.string(eP.t.LRmNAl),
            },
            [eA.s6.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    G.default.track(eN.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, Z.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                G.default.track(eN.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, p.Z)(e);
                            },
                        });
                },
                searchableTitles: [eP.intl.string(eP.t.sMEktT)],
                label: eP.intl.string(eP.t.sMEktT),
                ariaLabel: eP.intl.string(eP.t.sMEktT),
            },
            [eA.s6.EXPERIMENTS]: {
                section: eN.oAB.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: ey.Z,
                predicate: () => M.Z.isDeveloper,
                url: eN.Z5c.SETTINGS("experiments"),
            },
            [eA.s6.DEVELOPER_OPTIONS]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: ea.Z,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: eA.s6.DEVELOPER_OPTIONS,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: eA.s6.DEVELOPER_OPTIONS,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: eA.s6.DEVELOPER_OPTIONS,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: eA.s6.DEVELOPER_OPTIONS,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: eA.s6.DEVELOPER_OPTIONS,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: eA.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: eA.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: eA.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: eA.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: eA.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: eA.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: eA.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eK && M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: eA.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: eA.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: eA.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eK && M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: eA.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1,
            },
            [eA.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: eA.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eK && M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_HIGHLIGHT_MANA_COMPONENTS]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Mana Components"],
                parent: eA.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eK && M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Void Toggleable Components"],
                parent: eA.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eK && M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eA.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eK && M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: eA.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eK && M.Z.isDeveloper && k.default.layoutDebuggingEnabled,
            },
            [eA.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: eA.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eK && M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: eA.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eK && M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: eA.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: eA.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: eA.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: eA.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: eA.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: eA.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => h.q && M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_SHOW_TOTP_SUCCESS]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Show TOTP Success"],
                parent: eA.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: eA.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: eA.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: eA.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: eA.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: eA.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: eN.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: eA.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => M.Z.isDeveloper,
            },
            [eA.s6.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            s.ConfirmModal,
                            eU(
                                ek(
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
            [eA.s6.SOCIAL_LINKS]: {
                section: f.ID.CUSTOM,
                element: z.Z,
            },
            [eA.s6.CLIENT_DEBUG_INFO]: {
                section: f.ID.CUSTOM,
                element: W.Z,
            },
        });
    };
