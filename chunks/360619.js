n.d(t, { AC: () => G, Lu: () => U, NI: () => B, PH: () => M }), n(560197), n(321073);
var i = n(64700),
    s = n(311907),
    r = n(361739),
    a = n(406360),
    l = n(86379),
    o = n(968011),
    c = n(643015),
    d = n(945276),
    u = n(834981),
    _ = n(155984),
    m = n(35587),
    A = n(677402),
    g = n(207560),
    E = n(818143),
    h = n(639555),
    p = n(617641),
    C = n(961350),
    x = n(540999),
    T = n(189081),
    I = n(994500),
    S = n(628965),
    f = n(287809),
    N = n(80422),
    b = n(64313),
    R = n(897358),
    v = n(253932),
    O = n(368631),
    j = n(682262),
    P = n(987281),
    y = n(531525),
    L = n(654487),
    D = n(985018);
function M() {
    let e = (0, m.IO)().length,
        t = (0, _.l)(),
        n = (0, s.bG)([S.A], () => S.A.getSearchParams()),
        r = (0, u.VT)(),
        x = (0, j.b_)(),
        { shouldMergeGameSettings: R } = N.X.useExperiment({ location: "settings" }),
        P = f.default.getCurrentUser()?.isStaff() ?? !1,
        y = (0, p.Lc)({ location: "settings" }),
        D = (0, h.Rv)({ location: "settings" }),
        M = (0, l.H)(),
        G = (0, A.H)({ location: L.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        U = (0, s.bG)([T.A], () => T.A.hasLibraryApplication()),
        k = (0, s.bG)([C.default], () => C.default.hasTOTPEnabled()),
        B = v.Q_.useSetting(),
        w = (0, c.A)(),
        H = (0, d.A)() ?? !0,
        V = (0, E.G)()?.length > 0,
        { hasBlockedUsers: F, hasIgnoredUsers: Y } = (0, s.cf)([I.A], () => ({
            hasBlockedUsers: I.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: I.A.getIgnoredIDs().length > 0,
        })),
        W = (0, g.fk)(),
        z = (0, b.j)("SettingRendererUtils"),
        K = W || z,
        { enabled: Z } = (0, o.us)("useGenerateUserSettingsSections", { autoTrackExposure: !1 }),
        X = (0, a.i)("useGenerateUserSettingsSections");
    return i.useMemo(
        () =>
            (0, O.zj)({
                unseenGiftCount: e,
                showPrepaidPaymentPastDueWarning: t,
                searchParams: n,
                numOfPendingFamilyRequests: r,
                isOverlaySupported: x,
                shouldMergeGameSettings: R,
                isStaff: P,
                isInappropriateConversationWarningEnabled: y,
                isInapproprateConversationsDefaultOn: D,
                paymentsBlocked: M,
                isEligibleForQuests: G,
                isStricterMessageRequestsEnabled: w,
                hasLibraryApplication: U,
                hasTOTPEnabled: k,
                developerMode: B,
                isAdultUser: H,
                hasSecureFramesVerifiedUserIds: V,
                hasIgnoredUsers: Y,
                hasBlockedUsers: F,
                hasAgeGatedFeature: K,
                isChatMentionSuggestionsSettingEnabled: Z,
                isHDRAccessibilitySettingExperimentEnabled: X,
            }),
        [B, F, Y, U, V, k, n, H, G, D, y, x, P, w, r, M, R, t, e, K, Z, X],
    );
}
function G(e) {
    let t = P.a.useField("searchResults"),
        n = M(),
        i = n[e],
        s = Object.fromEntries(
            Object.entries(n).filter((e) => {
                let [t, n] = e;
                return n.section === i.section;
            }),
        ),
        r = Object.fromEntries(
            Object.entries(s)
                .filter((e) => {
                    let [t, { parent: n, section: s }] = e;
                    return null != n && s === i.section;
                })
                .map((e) => {
                    let [t, { parent: n }] = e;
                    return [t, n];
                }),
        ),
        a = new Set(),
        l = (e) => {
            let t = s[e];
            if (null == t) return;
            a.add(e);
            let n = t.parent;
            null != n && l(n);
        },
        o = (e) => {
            for (let t of (a.add(e),
            Object.entries(r)
                .filter((t) => {
                    let [n, i] = t;
                    return i === e;
                })
                .map((e) => {
                    let [t] = e;
                    return t;
                })))
                o(t);
        };
    for (let e of t.filter((e) => e in s))
        if (!a.has(e)) {
            if (null != s[e].element && null == s[e].parent) {
                a.clear();
                break;
            }
            Object.values(r).includes(e) && o(e), l(e);
        }
    return a;
}
function U() {
    let e = M(),
        { shouldMergeGameSettings: t } = N.X.useExperiment({ location: "settings" }),
        { showRedesign: n } = R.X.useExperiment({ location: "settings" }),
        s = i.useMemo(
            () =>
                (function (e) {
                    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
                        i = x.A.isDeveloper,
                        s = [
                            {
                                header: D.intl.string(D.t.cduTBL),
                                settings: n
                                    ? [
                                          y.H.ACCOUNT,
                                          y.H.GAMES,
                                          y.H.PROFILE_CUSTOMIZATION,
                                          y.H.CONTENT_SOCIAL,
                                          y.H.DATA_PRIVACY,
                                          y.H.PRIVACY_FAMILY_CENTER,
                                          y.H.THIRD_PARTY_ACCESS,
                                          y.H.SESSIONS,
                                      ]
                                    : [
                                          y.H.ACCOUNT,
                                          y.H.GAMES,
                                          y.H.PROFILE_CUSTOMIZATION,
                                          y.H.CONTENT_SOCIAL,
                                          y.H.DATA_PRIVACY,
                                          y.H.PRIVACY_FAMILY_CENTER,
                                          y.H.AUTHORIZED_APPS,
                                          y.H.SESSIONS,
                                          y.H.CONNECTIONS,
                                          y.H.PRIVATE_BROWSING_PERK,
                                      ],
                            },
                            {
                                header: D.intl.string(D.t["4uOdGr"]),
                                divider: !0,
                                settings: [
                                    y.H.PREMIUM,
                                    y.H.GUILD_BOOSTING,
                                    y.H.SUBSCRIPTIONS,
                                    y.H.GIFT_INVENTORY,
                                    y.H.BILLING,
                                ],
                            },
                            {
                                header: D.intl.string(D.t.f2n1TP),
                                divider: !0,
                                settings: [
                                    y.H.APPEARANCE,
                                    y.H.ACCESSIBILITY,
                                    y.H.POGGERMODE,
                                    y.H.CHAT,
                                    y.H.KEYBINDS,
                                    y.H.LANGUAGE,
                                    y.H.WINDOW_SETTINGS,
                                    y.H.LINUX_SETTINGS,
                                    y.H.SETTINGS_ADVANCED,
                                ],
                            },
                            { divider: !0, settings: [y.H.CHANGELOG, y.H.MERCHANDISE] },
                            {
                                header: "Developer Only",
                                divider: !0,
                                settings: i ? [y.H.EXPERIMENTS, y.H.DEVELOPER_OPTIONS] : [],
                            },
                            { divider: !0, settings: [y.H.LOGOUT] },
                            { divider: !0, settings: [y.H.SOCIAL_LINKS, y.H.CLIENT_DEBUG_INFO] },
                        ],
                        r = {
                            header: D.intl.string(D.t.SmHCFf),
                            divider: !0,
                            settings: [y.H.ACTIVITY_PRIVACY, y.H.REGISTERED_GAMES, y.H.OVERLAY],
                        };
                    return t ? s : s.toSpliced(3, 0, r);
                })({ shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n }),
            [t, n],
        );
    return i.useMemo(() => {
        var t, n;
        let i, a, l;
        return (
            (i = []),
            (a = k(e)),
            (t = e),
            (n = new Set(Array.from(void 0 ?? []).filter((e) => a.has(e)))),
            (l = new Map()),
            null != n &&
                n.forEach((e) => {
                    let n = t[e].parent;
                    for (; null != n && null != t[n].parent; ) n = t[n].parent;
                    if (null != n) {
                        let e = l.get(n) ?? 0;
                        l.set(n, e + 1);
                    }
                }),
            s.forEach((t) => {
                0 !== t.settings.length &&
                    (!0 === t.divider && i.push({ section: r.Fq.DIVIDER }),
                    null != t.header && i.push({ section: r.Fq.HEADER, label: t.header }),
                    t.settings.forEach((t) => {
                        i.push({ ...e[t], tabPredicate: () => !0 });
                    }));
            }),
            i
        );
    }, [s, e]);
}
function k(e) {
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
function B(e) {
    return Array.from(k(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
