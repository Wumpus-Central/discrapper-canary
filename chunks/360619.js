n.d(t, { AC: () => j, NI: () => O, PH: () => v }), n(321073);
var i = n(64700),
    s = n(311907);
n(361739);
var l = n(406360),
    a = n(86379),
    r = n(643015),
    o = n(945276),
    d = n(834981),
    c = n(155984),
    u = n(35587),
    _ = n(677402),
    g = n(207560),
    m = n(818143),
    A = n(639555),
    h = n(617641),
    p = n(961350);
n(540999);
var x = n(189081),
    E = n(994500),
    T = n(628965),
    S = n(287809),
    C = n(253932),
    f = n(368631),
    I = n(682262),
    b = n(987281);
n(531525);
var N = n(654487);
function v() {
    let e = (0, u.IO)().length,
        t = (0, c.l)(),
        n = (0, s.bG)([T.A], () => T.A.getSearchParams()),
        b = (0, d.VT)(),
        v = (0, I.b_)(),
        j = S.default.getCurrentUser()?.isStaff() ?? !1,
        O = (0, h.Lc)({ location: "settings" }),
        R = (0, A.Rv)({ location: "settings" }),
        y = (0, a.H)(),
        P = (0, _.H)({ location: N.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        D = (0, s.bG)([x.A], () => x.A.hasLibraryApplication()),
        L = (0, s.bG)([p.default], () => p.default.hasTOTPEnabled()),
        G = C.Q_.useSetting(),
        M = (0, r.A)(),
        U = (0, o.A)() ?? !0,
        k = (0, m.G)()?.length > 0,
        { hasBlockedUsers: V, hasIgnoredUsers: w } = (0, s.cf)([E.A], () => ({
            hasBlockedUsers: E.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: E.A.getIgnoredIDs().length > 0,
        })),
        H = (0, g.fk)(),
        B = (0, l.i)("useGenerateUserSettingsSections");
    return i.useMemo(
        () =>
            (0, f.zj)({
                unseenGiftCount: e,
                showPrepaidPaymentPastDueWarning: t,
                searchParams: n,
                numOfPendingFamilyRequests: b,
                isOverlaySupported: v,
                isStaff: j,
                isInappropriateConversationWarningEnabled: O,
                isInapproprateConversationsDefaultOn: R,
                paymentsBlocked: y,
                isEligibleForQuests: P,
                isStricterMessageRequestsEnabled: M,
                hasLibraryApplication: D,
                hasTOTPEnabled: L,
                developerMode: G,
                isAdultUser: U,
                hasSecureFramesVerifiedUserIds: k,
                hasIgnoredUsers: w,
                hasBlockedUsers: V,
                hasAgeGatedFeature: H,
                isHDRAccessibilitySettingExperimentEnabled: B,
            }),
        [G, V, w, D, k, L, n, U, P, R, O, v, j, M, b, y, t, e, H, B],
    );
}
function j(e) {
    let t = b.a.useField("searchResults"),
        n = v(),
        i = n[e],
        s = Object.fromEntries(
            Object.entries(n).filter((e) => {
                let [t, n] = e;
                return n.section === i.section;
            }),
        ),
        l = Object.fromEntries(
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
        r = (e) => {
            let t = s[e];
            if (null == t) return;
            a.add(e);
            let n = t.parent;
            null != n && r(n);
        },
        o = (e) => {
            for (let t of (a.add(e),
            Object.entries(l)
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
            Object.values(l).includes(e) && o(e), r(e);
        }
    return a;
}
function O(e) {
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
