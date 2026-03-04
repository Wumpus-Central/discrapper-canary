n.d(t, { AC: () => O, NI: () => R, PH: () => v }), n(560197), n(321073);
var i = n(64700),
    s = n(311907);
n(361739);
var a = n(406360),
    l = n(86379),
    r = n(643015),
    o = n(945276),
    c = n(834981),
    d = n(155984),
    u = n(35587),
    _ = n(677402),
    m = n(207560),
    A = n(818143),
    g = n(639555),
    h = n(617641),
    x = n(961350);
n(540999);
var p = n(189081),
    E = n(994500),
    C = n(628965),
    T = n(287809),
    S = n(80422),
    I = n(253932),
    f = n(368631),
    N = n(682262),
    b = n(987281);
n(531525);
var j = n(654487);
function v() {
    let e = (0, u.IO)().length,
        t = (0, d.l)(),
        n = (0, s.bG)([C.A], () => C.A.getSearchParams()),
        b = (0, c.VT)(),
        v = (0, N.b_)(),
        { shouldMergeGameSettings: O } = S.X.useExperiment({ location: "settings" }),
        R = T.default.getCurrentUser()?.isStaff() ?? !1,
        y = (0, h.Lc)({ location: "settings" }),
        P = (0, g.Rv)({ location: "settings" }),
        L = (0, l.H)(),
        D = (0, _.H)({ location: j.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        M = (0, s.bG)([p.A], () => p.A.hasLibraryApplication()),
        G = (0, s.bG)([x.default], () => x.default.hasTOTPEnabled()),
        U = I.Q_.useSetting(),
        k = (0, r.A)(),
        V = (0, o.A)() ?? !0,
        w = (0, A.G)()?.length > 0,
        { hasBlockedUsers: H, hasIgnoredUsers: B } = (0, s.cf)([E.A], () => ({
            hasBlockedUsers: E.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: E.A.getIgnoredIDs().length > 0,
        })),
        Y = (0, m.fk)(),
        F = (0, a.i)("useGenerateUserSettingsSections");
    return i.useMemo(
        () =>
            (0, f.zj)({
                unseenGiftCount: e,
                showPrepaidPaymentPastDueWarning: t,
                searchParams: n,
                numOfPendingFamilyRequests: b,
                isOverlaySupported: v,
                shouldMergeGameSettings: O,
                isStaff: R,
                isInappropriateConversationWarningEnabled: y,
                isInapproprateConversationsDefaultOn: P,
                paymentsBlocked: L,
                isEligibleForQuests: D,
                isStricterMessageRequestsEnabled: k,
                hasLibraryApplication: M,
                hasTOTPEnabled: G,
                developerMode: U,
                isAdultUser: V,
                hasSecureFramesVerifiedUserIds: w,
                hasIgnoredUsers: B,
                hasBlockedUsers: H,
                hasAgeGatedFeature: Y,
                isHDRAccessibilitySettingExperimentEnabled: F,
            }),
        [U, H, B, M, w, G, n, V, D, P, y, v, R, k, b, L, O, t, e, Y, F],
    );
}
function O(e) {
    let t = b.a.useField("searchResults"),
        n = v(),
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
function R(e) {
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
