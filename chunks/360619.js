n.d(t, { AC: () => b, NI: () => v, PH: () => N }), n(321073);
var i = n(64700),
    s = n(311907);
n(361739);
var l = n(406360),
    a = n(86379),
    r = n(643015),
    o = n(945276),
    d = n(35587),
    c = n(677402),
    u = n(207560),
    _ = n(818143),
    g = n(639555),
    A = n(617641),
    m = n(961350);
n(540999);
var h = n(189081),
    p = n(994500),
    x = n(628965),
    E = n(287809),
    T = n(253932),
    S = n(368631),
    C = n(682262),
    I = n(987281);
n(531525);
var f = n(654487);
function N() {
    let e = (0, d.IO)().length,
        t = (0, s.bG)([x.A], () => x.A.getSearchParams()),
        n = (0, C.b_)(),
        I = E.default.getCurrentUser()?.isStaff() ?? !1,
        N = (0, A.Lc)({ location: "settings" }),
        b = (0, g.Rv)({ location: "settings" }),
        v = (0, a.H)(),
        O = (0, c.H)({ location: f.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        j = (0, s.bG)([h.A], () => h.A.hasLibraryApplication()),
        R = (0, s.bG)([m.default], () => m.default.hasTOTPEnabled()),
        y = T.Q_.useSetting(),
        P = (0, r.A)(),
        D = (0, o.A)() ?? !0,
        L = (0, _.G)()?.length > 0,
        { hasBlockedUsers: G, hasIgnoredUsers: M } = (0, s.cf)([p.A], () => ({
            hasBlockedUsers: p.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: p.A.getIgnoredIDs().length > 0,
        })),
        U = (0, u.fk)(),
        k = (0, l.i)("useGenerateUserSettingsSections");
    return i.useMemo(
        () =>
            (0, S.zj)({
                unseenGiftCount: e,
                searchParams: t,
                isOverlaySupported: n,
                isStaff: I,
                isInappropriateConversationWarningEnabled: N,
                isInapproprateConversationsDefaultOn: b,
                paymentsBlocked: v,
                isEligibleForQuests: O,
                isStricterMessageRequestsEnabled: P,
                hasLibraryApplication: j,
                hasTOTPEnabled: R,
                developerMode: y,
                isAdultUser: D,
                hasSecureFramesVerifiedUserIds: L,
                hasIgnoredUsers: M,
                hasBlockedUsers: G,
                hasAgeGatedFeature: U,
                isHDRAccessibilitySettingExperimentEnabled: k,
            }),
        [y, G, M, j, L, R, t, D, O, b, N, n, I, P, v, e, U, k],
    );
}
function b(e) {
    let t = I.a.useField("searchResults"),
        n = N(),
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
function v(e) {
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
