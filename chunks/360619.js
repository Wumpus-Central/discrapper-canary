n.d(t, { AC: () => R, NI: () => y, PH: () => O }), n(560197), n(321073);
var i = n(64700),
    s = n(311907);
n(361739);
var a = n(406360),
    l = n(86379),
    r = n(968011),
    o = n(643015),
    c = n(945276),
    d = n(834981),
    u = n(155984),
    _ = n(35587),
    m = n(677402),
    A = n(207560),
    g = n(818143),
    h = n(639555),
    x = n(617641),
    p = n(961350);
n(540999);
var E = n(189081),
    C = n(994500),
    T = n(628965),
    S = n(287809),
    I = n(80422),
    f = n(253932),
    N = n(368631),
    b = n(682262),
    j = n(987281);
n(531525);
var v = n(654487);
function O() {
    let e = (0, _.IO)().length,
        t = (0, u.l)(),
        n = (0, s.bG)([T.A], () => T.A.getSearchParams()),
        j = (0, d.VT)(),
        O = (0, b.b_)(),
        { shouldMergeGameSettings: R } = I.X.useExperiment({ location: "settings" }),
        y = S.default.getCurrentUser()?.isStaff() ?? !1,
        P = (0, x.Lc)({ location: "settings" }),
        L = (0, h.Rv)({ location: "settings" }),
        D = (0, l.H)(),
        M = (0, m.H)({ location: v.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        G = (0, s.bG)([E.A], () => E.A.hasLibraryApplication()),
        U = (0, s.bG)([p.default], () => p.default.hasTOTPEnabled()),
        k = f.Q_.useSetting(),
        V = (0, o.A)(),
        w = (0, c.A)() ?? !0,
        H = (0, g.G)()?.length > 0,
        { hasBlockedUsers: B, hasIgnoredUsers: Y } = (0, s.cf)([C.A], () => ({
            hasBlockedUsers: C.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: C.A.getIgnoredIDs().length > 0,
        })),
        F = (0, A.fk)(),
        { enabled: z } = (0, r.us)("useGenerateUserSettingsSections", { autoTrackExposure: !1 }),
        W = (0, a.i)("useGenerateUserSettingsSections");
    return i.useMemo(
        () =>
            (0, N.zj)({
                unseenGiftCount: e,
                showPrepaidPaymentPastDueWarning: t,
                searchParams: n,
                numOfPendingFamilyRequests: j,
                isOverlaySupported: O,
                shouldMergeGameSettings: R,
                isStaff: y,
                isInappropriateConversationWarningEnabled: P,
                isInapproprateConversationsDefaultOn: L,
                paymentsBlocked: D,
                isEligibleForQuests: M,
                isStricterMessageRequestsEnabled: V,
                hasLibraryApplication: G,
                hasTOTPEnabled: U,
                developerMode: k,
                isAdultUser: w,
                hasSecureFramesVerifiedUserIds: H,
                hasIgnoredUsers: Y,
                hasBlockedUsers: B,
                hasAgeGatedFeature: F,
                isChatMentionSuggestionsSettingEnabled: z,
                isHDRAccessibilitySettingExperimentEnabled: W,
            }),
        [k, B, Y, G, H, U, n, w, M, L, P, O, y, V, j, D, R, t, e, F, z, W],
    );
}
function R(e) {
    let t = j.a.useField("searchResults"),
        n = O(),
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
function y(e) {
    return Array.from(
        new Map(
            Object.entries(e).filter((e) => {
                let [t, n] = e;
                return (
                    null != n.searchableTitles &&
                    (null == n.predicate || n.predicate()) &&
                    (null == n.unsearchable || !1 === n.unsearchable)
                );
            }),
        ).entries(),
    ).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
n(985018);
