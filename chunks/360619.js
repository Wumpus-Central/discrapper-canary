n.d(t, {
    AC: () => G,
    Lu: () => k,
    NI: () => V,
    PH: () => M,
    g2: () => B,
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
    C = n(994500),
    x = n(628965),
    S = n(287809),
    T = n(80422),
    I = n(64313),
    y = n(897358),
    N = n(253932),
    j = n(368631),
    v = n(682262),
    P = n(987281),
    R = n(531525),
    D = n(654487),
    L = n(985018);

function w(e) {
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
                settings: [R.H.PREMIUM, R.H.GUILD_BOOSTING, R.H.SUBSCRIPTIONS, R.H.GIFT_INVENTORY, R.H.BILLING],
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
}

function M() {
    var e, t, n, l;
    let E = (0, p.IO)().length,
        y = (0, _.l)(),
        P = (0, i.bG)([x.A], () => x.A.getSearchParams()),
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
        F = N.Q_.useSetting(),
        Y = (0, c.A)(),
        W = null == (t = (0, d.A)()) || t,
        K = (null == (l = (0, A.G)()) ? void 0 : l.length) > 0,
        { hasBlockedUsers: z, hasIgnoredUsers: Z } = (0, i.cf)([C.A], () => ({
            hasBlockedUsers: C.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: C.A.getIgnoredIDs().length > 0,
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
                showPrepaidPaymentPastDueWarning: y,
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
        [F, z, Z, H, K, V, P, W, B, U, G, L, M, Y, R, k, w, y, E, J, Q, $],
    );
}

function G(e) {
    let t = P.a.useField("searchResults"),
        n = M(),
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

function U(e, t, n) {
    var r, i;
    let s,
        a = [],
        o = H(t),
        c =
            ((r = t),
            (i = new Set(Array.from(null != n ? n : []).filter((e) => o.has(e)))),
            (s = new Map()),
            null != i &&
                i.forEach((e) => {
                    let t = r[e].parent;
                    for (; null != t && null != r[t].parent; ) t = r[t].parent;
                    if (null != t) {
                        var n;
                        let e = null != (n = s.get(t)) ? n : 0;
                        s.set(t, e + 1);
                    }
                }),
            s);
    return (
        e.forEach((e) => {
            0 !== e.settings.length &&
                (!0 === e.divider &&
                    a.push({
                        section: l.Fq.DIVIDER,
                    }),
                null != e.header &&
                    a.push({
                        section: l.Fq.HEADER,
                        label: e.header,
                    }),
                e.settings.forEach((e) => {
                    var r, i;
                    a.push(
                        ((r = (function (e) {
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
                        })({}, t[e])),
                        (i = i =
                            {
                                tabPredicate: () =>
                                    null == n || (e === R.H.SEARCH_NO_RESULTS && 0 === n.size) || c.has(e) || n.has(e),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        r),
                    );
                }));
        }),
        a
    );
}

function k() {
    let e = M(),
        { shouldMergeGameSettings: t } = T.X.useExperiment({
            location: "settings",
        }),
        { showRedesign: n } = y.X.useExperiment({
            location: "settings",
        }),
        i = r.useMemo(
            () =>
                w({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n,
                }),
            [t, n],
        );
    return r.useMemo(() => U(i, e), [i, e]);
}

function B(e) {
    let t = M(),
        n = (function () {
            let { shouldMergeGameSettings: e } = T.X.useExperiment({
                    location: "settings",
                }),
                { showRedesign: t } = y.X.useExperiment({
                    location: "settings",
                }),
                n = w({
                    shouldMergeGameSettings: e,
                    showRedesignedThirdPartyAccessSettings: t,
                });
            return r.useMemo(
                () => [
                    {
                        header: L.intl.string(L.t["zkoeq/"]),
                        settings: [
                            ...n
                                .map((e) => {
                                    let { settings: t } = e;
                                    return t;
                                })
                                .flat(1),
                            R.H.SEARCH_NO_RESULTS,
                        ],
                    },
                ],
                [n],
            );
        })();
    return r.useMemo(() => U(n, t, new Set(e)), [n, t, e]);
}

function H(e) {
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

function V(e) {
    return Array.from(H(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
