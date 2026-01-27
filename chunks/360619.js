n.d(t, {
    AC: () => k,
    Lu: () => H,
    NI: () => Y,
    PH: () => G,
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
    h = n(617641),
    b = n(961350),
    E = n(540999),
    x = n(189081),
    O = n(430452),
    C = n(994500),
    I = n(628965),
    T = n(287809),
    S = n(80422),
    j = n(64313),
    v = n(897358),
    N = n(253932),
    y = n(358776),
    P = n(368631),
    R = n(682262),
    D = n(987281),
    w = n(531525),
    L = n(654487),
    M = n(985018);

function U(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        r = E.A.isDeveloper,
        i = [
            {
                header: M.intl.string(M.t.cduTBL),
                settings: n
                    ? [
                          w.H.ACCOUNT,
                          w.H.GAMES,
                          w.H.PROFILE_CUSTOMIZATION,
                          w.H.CONTENT_SOCIAL,
                          w.H.DATA_PRIVACY,
                          w.H.PRIVACY_FAMILY_CENTER,
                          w.H.THIRD_PARTY_ACCESS,
                          w.H.SESSIONS,
                      ]
                    : [
                          w.H.ACCOUNT,
                          w.H.GAMES,
                          w.H.PROFILE_CUSTOMIZATION,
                          w.H.CONTENT_SOCIAL,
                          w.H.DATA_PRIVACY,
                          w.H.PRIVACY_FAMILY_CENTER,
                          w.H.AUTHORIZED_APPS,
                          w.H.SESSIONS,
                          w.H.CONNECTIONS,
                          w.H.PRIVATE_BROWSING_PERK,
                      ],
            },
            {
                header: M.intl.string(M.t["4uOdGr"]),
                divider: !0,
                settings: [w.H.PREMIUM, w.H.GUILD_BOOSTING, w.H.SUBSCRIPTIONS, w.H.GIFT_INVENTORY, w.H.BILLING],
            },
            {
                header: M.intl.string(M.t.f2n1TP),
                divider: !0,
                settings: [
                    w.H.APPEARANCE,
                    w.H.ACCESSIBILITY,
                    w.H.VOICE_AND_VIDEO,
                    w.H.POGGERMODE,
                    w.H.CHAT,
                    w.H.NOTIFICATIONS,
                    w.H.KEYBINDS,
                    w.H.LANGUAGE,
                    w.H.WINDOW_SETTINGS,
                    w.H.LINUX_SETTINGS,
                    w.H.SETTINGS_ADVANCED,
                ],
            },
            {
                divider: !0,
                settings: [w.H.CHANGELOG, w.H.MERCHANDISE],
            },
            {
                header: "Developer Only",
                divider: !0,
                settings: r ? [w.H.EXPERIMENTS, w.H.DEVELOPER_OPTIONS] : [],
            },
            {
                divider: !0,
                settings: [w.H.LOGOUT],
            },
            {
                divider: !0,
                settings: [w.H.SOCIAL_LINKS, w.H.CLIENT_DEBUG_INFO],
            },
        ],
        l = {
            header: M.intl.string(M.t.SmHCFf),
            divider: !0,
            settings: [w.H.ACTIVITY_PRIVACY, w.H.REGISTERED_GAMES, w.H.OVERLAY],
        };
    return t ? i : i.toSpliced(3, 0, l);
}

function G() {
    var e, t, n, l;
    let E = (0, p.IO)().length,
        v = (0, _.l)(),
        D = (0, i.bG)([I.A], () => I.A.getSearchParams()),
        w = (0, u.VT)(),
        M = (0, R.b_)(),
        { shouldMergeGameSettings: U } = S.X.useExperiment({
            location: "settings",
        }),
        G = null != (e = null == (n = T.default.getCurrentUser()) ? void 0 : n.isStaff()) && e,
        k = (0, h.Lc)({
            location: "settings",
        }),
        V = (0, f.Rv)({
            location: "settings",
        }),
        H = (0, a.H)(),
        B = (0, m.H)({
            location: L.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY,
        }),
        F = (0, i.bG)([x.A], () => x.A.hasLibraryApplication()),
        Y = (0, i.bG)([b.default], () => b.default.hasTOTPEnabled()),
        W = N.Q_.useSetting(),
        z = (0, c.A)(),
        K = null == (t = (0, d.A)()) || t,
        Z = (null == (l = (0, A.G)()) ? void 0 : l.length) > 0,
        { hasBlockedUsers: X, hasIgnoredUsers: q } = (0, i.cf)([C.A], () => ({
            hasBlockedUsers: C.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: C.A.getIgnoredIDs().length > 0,
        })),
        J = (0, g.fk)(),
        Q = (0, j.j)("SettingRendererUtils"),
        $ = J || Q,
        {
            inputMode: ee,
            activeInputProfile: et,
            isInputProfileCustom: en,
        } = (0, i.cf)([O.A], () => ({
            activeInputProfile: O.A.getActiveInputProfile(),
            inputMode: O.A.getMode(),
            isInputProfileCustom: O.A.isInputProfileCustom(),
        })),
        { enabled: er } = (0, o.us)("useGenerateUserSettingsSections", {
            autoTrackExposure: !1,
        }),
        ei = (0, y.t0)("useGenerateUserSettingsSections"),
        el = (0, s.i)("useGenerateUserSettingsSections");
    return r.useMemo(
        () =>
            (0, P.zj)({
                unseenGiftCount: E,
                showPrepaidPaymentPastDueWarning: v,
                searchParams: D,
                numOfPendingFamilyRequests: w,
                isOverlaySupported: M,
                shouldMergeGameSettings: U,
                isStaff: G,
                isInappropriateConversationWarningEnabled: k,
                isInapproprateConversationsDefaultOn: V,
                paymentsBlocked: H,
                isEligibleForQuests: B,
                isStricterMessageRequestsEnabled: z,
                hasLibraryApplication: F,
                hasTOTPEnabled: Y,
                developerMode: W,
                isAdultUser: K,
                hasSecureFramesVerifiedUserIds: Z,
                hasIgnoredUsers: q,
                hasBlockedUsers: X,
                hasAgeGatedFeature: $,
                inputMode: ee,
                activeInputProfile: et,
                isInputProfileCustom: en,
                isChatMentionSuggestionsSettingEnabled: er,
                isRedesignedNotificationsEnabled: ei,
                isHDRAccessibilitySettingExperimentEnabled: el,
            }),
        [W, X, q, F, Z, Y, D, K, B, V, k, M, G, z, w, H, U, v, E, $, ee, et, en, er, ei, el],
    );
}

function k(e) {
    let t = D.a.useField("searchResults"),
        n = G(),
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

function V(e, t, n) {
    var r, i;
    let s,
        a = [],
        o = F(t),
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
                                    null == n || (e === w.H.SEARCH_NO_RESULTS && 0 === n.size) || c.has(e) || n.has(e),
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

function H() {
    let e = G(),
        { shouldMergeGameSettings: t } = S.X.useExperiment({
            location: "settings",
        }),
        { showRedesign: n } = v.X.useExperiment({
            location: "settings",
        }),
        i = r.useMemo(
            () =>
                U({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n,
                }),
            [t, n],
        );
    return r.useMemo(() => V(i, e), [i, e]);
}

function B(e) {
    let t = G(),
        n = (function () {
            let { shouldMergeGameSettings: e } = S.X.useExperiment({
                    location: "settings",
                }),
                { showRedesign: t } = v.X.useExperiment({
                    location: "settings",
                }),
                n = U({
                    shouldMergeGameSettings: e,
                    showRedesignedThirdPartyAccessSettings: t,
                });
            return r.useMemo(
                () => [
                    {
                        header: M.intl.string(M.t["zkoeq/"]),
                        settings: [
                            ...n
                                .map((e) => {
                                    let { settings: t } = e;
                                    return t;
                                })
                                .flat(1),
                            w.H.SEARCH_NO_RESULTS,
                        ],
                    },
                ],
                [n],
            );
        })();
    return r.useMemo(() => V(n, t, new Set(e)), [n, t, e]);
}

function F(e) {
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

function Y(e) {
    return Array.from(F(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
