n.d(t, {
    AC: () => M,
    Lu: () => G,
    NI: () => k,
    PH: () => w,
}),
    n(560197),
    n(864466),
    n(443073),
    n(896048),
    n(446912),
    n(321073);
var r = n(64700),
    i = n(311907),
    l = n(361739),
    s = n(406360),
    a = n(86379),
    o = n(968011),
    c = n(643015),
    d = n(945276),
    u = n(834981),
    _ = n(155984),
    p = n(35587),
    m = n(677402),
    g = n(207560),
    A = n(818143),
    f = n(639555),
    b = n(617641),
    h = n(961350),
    E = n(540999),
    O = n(189081),
    x = n(994500),
    C = n(628965),
    S = n(287809),
    T = n(80422),
    I = n(64313),
    N = n(897358),
    y = n(253932),
    j = n(368631),
    v = n(682262),
    P = n(987281),
    R = n(531525),
    D = n(654487),
    L = n(985018);

function w() {
    var e, t, n, l;
    let E = (0, p.IO)().length,
        N = (0, _.l)(),
        P = (0, i.bG)([C.A], () => C.A.getSearchParams()),
        R = (0, u.VT)(),
        L = (0, v.b_)(),
        { shouldMergeGameSettings: w } = T.X.useExperiment({
            location: "settings",
        }),
        M = null != (e = null == (n = S.default.getCurrentUser()) ? void 0 : n.isStaff()) && e,
        G = (0, b.Lc)({
            location: "settings",
        }),
        U = (0, f.Rv)({
            location: "settings",
        }),
        k = (0, a.H)(),
        B = (0, m.H)({
            location: D.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY,
        }),
        H = (0, i.bG)([O.A], () => O.A.hasLibraryApplication()),
        V = (0, i.bG)([h.default], () => h.default.hasTOTPEnabled()),
        F = y.Q_.useSetting(),
        Y = (0, c.A)(),
        W = null == (t = (0, d.A)()) || t,
        K = (null == (l = (0, A.G)()) ? void 0 : l.length) > 0,
        { hasBlockedUsers: z, hasIgnoredUsers: Z } = (0, i.cf)([x.A], () => ({
            hasBlockedUsers: x.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: x.A.getIgnoredIDs().length > 0,
        })),
        X = (0, g.fk)(),
        q = (0, I.j)("SettingRendererUtils"),
        J = X || q,
        { enabled: Q } = (0, o.us)("useGenerateUserSettingsSections", {
            autoTrackExposure: !1,
        }),
        $ = (0, s.i)("useGenerateUserSettingsSections");
    return r.useMemo(
        () =>
            (0, j.zj)({
                unseenGiftCount: E,
                showPrepaidPaymentPastDueWarning: N,
                searchParams: P,
                numOfPendingFamilyRequests: R,
                isOverlaySupported: L,
                shouldMergeGameSettings: w,
                isStaff: M,
                isInappropriateConversationWarningEnabled: G,
                isInapproprateConversationsDefaultOn: U,
                paymentsBlocked: k,
                isEligibleForQuests: B,
                isStricterMessageRequestsEnabled: Y,
                hasLibraryApplication: H,
                hasTOTPEnabled: V,
                developerMode: F,
                isAdultUser: W,
                hasSecureFramesVerifiedUserIds: K,
                hasIgnoredUsers: Z,
                hasBlockedUsers: z,
                hasAgeGatedFeature: J,
                isChatMentionSuggestionsSettingEnabled: Q,
                isHDRAccessibilitySettingExperimentEnabled: $,
            }),
        [F, z, Z, H, K, V, P, W, B, U, G, L, M, Y, R, k, w, N, E, J, Q, $],
    );
}

function M(e) {
    let t = P.a.useField("searchResults"),
        n = w(),
        r = n[e],
        i = Object.fromEntries(
            Object.entries(n).filter((e) => {
                let [t, n] = e;
                return n.section === r.section;
            }),
        ),
        l = Object.fromEntries(
            Object.entries(i)
                .filter((e) => {
                    let [t, { parent: n, section: i }] = e;
                    return null != n && i === r.section;
                })
                .map((e) => {
                    let [t, { parent: n }] = e;
                    return [t, n];
                }),
        ),
        s = new Set(),
        a = (e) => {
            let t = i[e];
            if (null == t) return;
            s.add(e);
            let n = t.parent;
            null != n && a(n);
        },
        o = (e) => {
            for (let t of (s.add(e),
            Object.entries(l)
                .filter((t) => {
                    let [n, r] = t;
                    return r === e;
                })
                .map((e) => {
                    let [t] = e;
                    return t;
                })))
                o(t);
        };
    for (let e of t.filter((e) => e in i))
        if (!s.has(e)) {
            if (null != i[e].element && null == i[e].parent) {
                s.clear();
                break;
            }
            Object.values(l).includes(e) && o(e), a(e);
        }
    return s;
}

function G() {
    let e = w(),
        { shouldMergeGameSettings: t } = T.X.useExperiment({
            location: "settings",
        }),
        { showRedesign: n } = N.X.useExperiment({
            location: "settings",
        }),
        i = r.useMemo(
            () =>
                (function (e) {
                    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
                        r = E.A.isDeveloper,
                        i = [
                            {
                                header: L.intl.string(L.t.cduTBL),
                                settings: n
                                    ? [
                                          R.H.ACCOUNT,
                                          R.H.GAMES,
                                          R.H.PROFILE_CUSTOMIZATION,
                                          R.H.CONTENT_SOCIAL,
                                          R.H.DATA_PRIVACY,
                                          R.H.PRIVACY_FAMILY_CENTER,
                                          R.H.THIRD_PARTY_ACCESS,
                                          R.H.SESSIONS,
                                      ]
                                    : [
                                          R.H.ACCOUNT,
                                          R.H.GAMES,
                                          R.H.PROFILE_CUSTOMIZATION,
                                          R.H.CONTENT_SOCIAL,
                                          R.H.DATA_PRIVACY,
                                          R.H.PRIVACY_FAMILY_CENTER,
                                          R.H.AUTHORIZED_APPS,
                                          R.H.SESSIONS,
                                          R.H.CONNECTIONS,
                                          R.H.PRIVATE_BROWSING_PERK,
                                      ],
                            },
                            {
                                header: L.intl.string(L.t["4uOdGr"]),
                                divider: !0,
                                settings: [
                                    R.H.PREMIUM,
                                    R.H.GUILD_BOOSTING,
                                    R.H.SUBSCRIPTIONS,
                                    R.H.GIFT_INVENTORY,
                                    R.H.BILLING,
                                ],
                            },
                            {
                                header: L.intl.string(L.t.f2n1TP),
                                divider: !0,
                                settings: [
                                    R.H.APPEARANCE,
                                    R.H.ACCESSIBILITY,
                                    R.H.POGGERMODE,
                                    R.H.CHAT,
                                    R.H.KEYBINDS,
                                    R.H.LANGUAGE,
                                    R.H.WINDOW_SETTINGS,
                                    R.H.LINUX_SETTINGS,
                                    R.H.SETTINGS_ADVANCED,
                                ],
                            },
                            {
                                divider: !0,
                                settings: [R.H.CHANGELOG, R.H.MERCHANDISE],
                            },
                            {
                                header: "Developer Only",
                                divider: !0,
                                settings: r ? [R.H.EXPERIMENTS, R.H.DEVELOPER_OPTIONS] : [],
                            },
                            {
                                divider: !0,
                                settings: [R.H.LOGOUT],
                            },
                            {
                                divider: !0,
                                settings: [R.H.SOCIAL_LINKS, R.H.CLIENT_DEBUG_INFO],
                            },
                        ],
                        l = {
                            header: L.intl.string(L.t.SmHCFf),
                            divider: !0,
                            settings: [R.H.ACTIVITY_PRIVACY, R.H.REGISTERED_GAMES, R.H.OVERLAY],
                        };
                    return t ? i : i.toSpliced(3, 0, l);
                })({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n,
                }),
            [t, n],
        );
    return r.useMemo(() => {
        var t, n;
        let r, s, a;
        return (
            (r = []),
            (s = U(e)),
            (t = e),
            (n = new Set(Array.from([]).filter((e) => s.has(e)))),
            (a = new Map()),
            null != n &&
                n.forEach((e) => {
                    let n = t[e].parent;
                    for (; null != n && null != t[n].parent; ) n = t[n].parent;
                    if (null != n) {
                        var r;
                        let e = null != (r = a.get(n)) ? r : 0;
                        a.set(n, e + 1);
                    }
                }),
            i.forEach((t) => {
                0 !== t.settings.length &&
                    (!0 === t.divider &&
                        r.push({
                            section: l.Fq.DIVIDER,
                        }),
                    null != t.header &&
                        r.push({
                            section: l.Fq.HEADER,
                            label: t.header,
                        }),
                    t.settings.forEach((t) => {
                        var n, i;
                        r.push(
                            ((n = (function (e) {
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
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, e[t])),
                            (i = i =
                                {
                                    tabPredicate: () => !0,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            n),
                        );
                    }));
            }),
            r
        );
    }, [i, e]);
}

function U(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return (
                null != n.searchableTitles &&
                (null == n.predicate || n.predicate()) &&
                (null == n.unsearchable || !1 === n.unsearchable)
            );
        }),
    );
}

function k(e) {
    return Array.from(U(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
