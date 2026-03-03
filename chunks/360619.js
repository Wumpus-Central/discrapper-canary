n.d(t, { AC: () => D, Lu: () => M, NI: () => U, PH: () => L }), n(560197), n(321073);
var i = n(64700),
    s = n(311907),
    a = n(361739),
    l = n(406360),
    r = n(86379),
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
    b = n(253932),
    j = n(368631),
    v = n(682262),
    O = n(987281),
    R = n(531525),
    y = n(654487),
    P = n(985018);
function L() {
    let e = (0, m.IO)().length,
        t = (0, _.l)(),
        n = (0, s.bG)([I.A], () => I.A.getSearchParams()),
        a = (0, u.VT)(),
        C = (0, v.b_)(),
        { shouldMergeGameSettings: O } = N.X.useExperiment({ location: "settings" }),
        R = f.default.getCurrentUser()?.isStaff() ?? !1,
        P = (0, p.Lc)({ location: "settings" }),
        L = (0, x.Rv)({ location: "settings" }),
        D = (0, r.H)(),
        M = (0, A.H)({ location: y.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        G = (0, s.bG)([T.A], () => T.A.hasLibraryApplication()),
        U = (0, s.bG)([E.default], () => E.default.hasTOTPEnabled()),
        k = b.Q_.useSetting(),
        V = (0, c.A)(),
        H = (0, d.A)() ?? !0,
        w = (0, h.G)()?.length > 0,
        { hasBlockedUsers: B, hasIgnoredUsers: Y } = (0, s.cf)([S.A], () => ({
            hasBlockedUsers: S.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: S.A.getIgnoredIDs().length > 0,
        })),
        F = (0, g.fk)(),
        { enabled: z } = (0, o.us)("useGenerateUserSettingsSections", { autoTrackExposure: !1 }),
        W = (0, l.i)("useGenerateUserSettingsSections");
    return i.useMemo(
        () =>
            (0, j.zj)({
                unseenGiftCount: e,
                showPrepaidPaymentPastDueWarning: t,
                searchParams: n,
                numOfPendingFamilyRequests: a,
                isOverlaySupported: C,
                shouldMergeGameSettings: O,
                isStaff: R,
                isInappropriateConversationWarningEnabled: P,
                isInapproprateConversationsDefaultOn: L,
                paymentsBlocked: D,
                isEligibleForQuests: M,
                isStricterMessageRequestsEnabled: V,
                hasLibraryApplication: G,
                hasTOTPEnabled: U,
                developerMode: k,
                isAdultUser: H,
                hasSecureFramesVerifiedUserIds: w,
                hasIgnoredUsers: Y,
                hasBlockedUsers: B,
                hasAgeGatedFeature: F,
                isChatMentionSuggestionsSettingEnabled: z,
                isHDRAccessibilitySettingExperimentEnabled: W,
            }),
        [k, B, Y, G, w, U, n, H, M, L, P, C, R, V, a, D, O, t, e, F, z, W],
    );
}
function D(e) {
    let t = O.a.useField("searchResults"),
        n = L(),
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
        l = new Set(),
        r = (e) => {
            let t = s[e];
            if (null == t) return;
            l.add(e);
            let n = t.parent;
            null != n && r(n);
        },
        o = (e) => {
            for (let t of (l.add(e),
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
        if (!l.has(e)) {
            if (null != s[e].element && null == s[e].parent) {
                l.clear();
                break;
            }
            Object.values(a).includes(e) && o(e), r(e);
        }
    return l;
}
function M() {
    let e = L(),
        { shouldMergeGameSettings: t } = N.X.useExperiment({ location: "settings" }),
        n = i.useMemo(
            () =>
                (function (e) {
                    let { shouldMergeGameSettings: t } = e,
                        n = C.A.isDeveloper,
                        i = [
                            {
                                header: P.intl.string(P.t.cduTBL),
                                settings: [
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
                                header: P.intl.string(P.t["4uOdGr"]),
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
                                header: P.intl.string(P.t.f2n1TP),
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
                            { divider: !0, settings: [R.H.CHANGELOG, R.H.MERCHANDISE] },
                            {
                                header: "Developer Only",
                                divider: !0,
                                settings: n ? [R.H.EXPERIMENTS, R.H.DEVELOPER_OPTIONS] : [],
                            },
                            { divider: !0, settings: [R.H.LOGOUT] },
                            { divider: !0, settings: [R.H.SOCIAL_LINKS, R.H.CLIENT_DEBUG_INFO] },
                        ],
                        s = {
                            header: P.intl.string(P.t.SmHCFf),
                            divider: !0,
                            settings: [R.H.ACTIVITY_PRIVACY, R.H.REGISTERED_GAMES, R.H.OVERLAY],
                        };
                    return t ? i : i.toSpliced(3, 0, s);
                })({ shouldMergeGameSettings: t }),
            [t],
        );
    return i.useMemo(() => {
        var t, i;
        let s, l, r;
        return (
            (s = []),
            (l = G(e)),
            (t = e),
            (i = new Set(Array.from(void 0 ?? []).filter((e) => l.has(e)))),
            (r = new Map()),
            null != i &&
                i.forEach((e) => {
                    let n = t[e].parent;
                    for (; null != n && null != t[n].parent; ) n = t[n].parent;
                    if (null != n) {
                        let e = r.get(n) ?? 0;
                        r.set(n, e + 1);
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
function G(e) {
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
function U(e) {
    return Array.from(G(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
