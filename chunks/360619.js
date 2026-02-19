n.d(t, { AC: () => G, Lu: () => M, NI: () => k, PH: () => D }), n(560197), n(321073);
var i = n(64700),
    s = n(311907),
    a = n(361739),
    r = n(406360),
    l = n(86379),
    o = n(968011),
    c = n(643015),
    d = n(945276),
    u = n(834981),
    _ = n(155984),
    m = n(35587),
    A = n(677402),
    g = n(207560),
    h = n(818143),
    x = n(639555),
    p = n(617641),
    E = n(961350),
    C = n(540999),
    T = n(189081),
    S = n(994500),
    I = n(628965),
    f = n(287809),
    N = n(80422),
    b = n(64313),
    j = n(253932),
    v = n(368631),
    O = n(682262),
    R = n(987281),
    y = n(531525),
    P = n(654487),
    L = n(985018);
function D() {
    let e = (0, m.IO)().length,
        t = (0, _.l)(),
        n = (0, s.bG)([I.A], () => I.A.getSearchParams()),
        a = (0, u.VT)(),
        C = (0, O.b_)(),
        { shouldMergeGameSettings: R } = N.X.useExperiment({ location: "settings" }),
        y = f.default.getCurrentUser()?.isStaff() ?? !1,
        L = (0, p.Lc)({ location: "settings" }),
        D = (0, x.Rv)({ location: "settings" }),
        G = (0, l.H)(),
        M = (0, A.H)({ location: P.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        U = (0, s.bG)([T.A], () => T.A.hasLibraryApplication()),
        k = (0, s.bG)([E.default], () => E.default.hasTOTPEnabled()),
        V = j.Q_.useSetting(),
        w = (0, c.A)(),
        H = (0, d.A)() ?? !0,
        B = (0, h.G)()?.length > 0,
        { hasBlockedUsers: Y, hasIgnoredUsers: F } = (0, s.cf)([S.A], () => ({
            hasBlockedUsers: S.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: S.A.getIgnoredIDs().length > 0,
        })),
        z = (0, g.fk)(),
        W = (0, b.j)("SettingRendererUtils"),
        K = z || W,
        { enabled: Z } = (0, o.us)("useGenerateUserSettingsSections", { autoTrackExposure: !1 }),
        q = (0, r.i)("useGenerateUserSettingsSections");
    return i.useMemo(
        () =>
            (0, v.zj)({
                unseenGiftCount: e,
                showPrepaidPaymentPastDueWarning: t,
                searchParams: n,
                numOfPendingFamilyRequests: a,
                isOverlaySupported: C,
                shouldMergeGameSettings: R,
                isStaff: y,
                isInappropriateConversationWarningEnabled: L,
                isInapproprateConversationsDefaultOn: D,
                paymentsBlocked: G,
                isEligibleForQuests: M,
                isStricterMessageRequestsEnabled: w,
                hasLibraryApplication: U,
                hasTOTPEnabled: k,
                developerMode: V,
                isAdultUser: H,
                hasSecureFramesVerifiedUserIds: B,
                hasIgnoredUsers: F,
                hasBlockedUsers: Y,
                hasAgeGatedFeature: K,
                isChatMentionSuggestionsSettingEnabled: Z,
                isHDRAccessibilitySettingExperimentEnabled: q,
            }),
        [V, Y, F, U, B, k, n, H, M, D, L, C, y, w, a, G, R, t, e, K, Z, q],
    );
}
function G(e) {
    let t = R.a.useField("searchResults"),
        n = D(),
        i = n[e],
        s = Object.fromEntries(
            Object.entries(n).filter((e) => {
                let [t, n] = e;
                return n.section === i.section;
            }),
        ),
        a = Object.fromEntries(
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
        r = new Set(),
        l = (e) => {
            let t = s[e];
            if (null == t) return;
            r.add(e);
            let n = t.parent;
            null != n && l(n);
        },
        o = (e) => {
            for (let t of (r.add(e),
            Object.entries(a)
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
        if (!r.has(e)) {
            if (null != s[e].element && null == s[e].parent) {
                r.clear();
                break;
            }
            Object.values(a).includes(e) && o(e), l(e);
        }
    return r;
}
function M() {
    let e = D(),
        { shouldMergeGameSettings: t } = N.X.useExperiment({ location: "settings" }),
        n = i.useMemo(
            () =>
                (function (e) {
                    let { shouldMergeGameSettings: t } = e,
                        n = C.A.isDeveloper,
                        i = [
                            {
                                header: L.intl.string(L.t.cduTBL),
                                settings: [
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
                                header: L.intl.string(L.t["4uOdGr"]),
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
                                header: L.intl.string(L.t.f2n1TP),
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
                                settings: n ? [y.H.EXPERIMENTS, y.H.DEVELOPER_OPTIONS] : [],
                            },
                            { divider: !0, settings: [y.H.LOGOUT] },
                            { divider: !0, settings: [y.H.SOCIAL_LINKS, y.H.CLIENT_DEBUG_INFO] },
                        ],
                        s = {
                            header: L.intl.string(L.t.SmHCFf),
                            divider: !0,
                            settings: [y.H.ACTIVITY_PRIVACY, y.H.REGISTERED_GAMES, y.H.OVERLAY],
                        };
                    return t ? i : i.toSpliced(3, 0, s);
                })({ shouldMergeGameSettings: t }),
            [t],
        );
    return i.useMemo(() => {
        var t, i;
        let s, r, l;
        return (
            (s = []),
            (r = U(e)),
            (t = e),
            (i = new Set(Array.from(void 0 ?? []).filter((e) => r.has(e)))),
            (l = new Map()),
            null != i &&
                i.forEach((e) => {
                    let n = t[e].parent;
                    for (; null != n && null != t[n].parent; ) n = t[n].parent;
                    if (null != n) {
                        let e = l.get(n) ?? 0;
                        l.set(n, e + 1);
                    }
                }),
            n.forEach((t) => {
                0 !== t.settings.length &&
                    (!0 === t.divider && s.push({ section: a.Fq.DIVIDER }),
                    null != t.header && s.push({ section: a.Fq.HEADER, label: t.header }),
                    t.settings.forEach((t) => {
                        s.push({ ...e[t], tabPredicate: () => !0 });
                    }));
            }),
            s
        );
    }, [n, e]);
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
