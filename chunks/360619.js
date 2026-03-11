n.d(t, { AC: () => v, NI: () => O, PH: () => b }), n(321073);
var i = n(64700),
    s = n(311907);
n(361739);
var l = n(406360),
    a = n(86379),
    r = n(643015),
    o = n(945276),
    d = n(834981),
    c = n(35587),
    u = n(677402),
    _ = n(207560),
    g = n(818143),
    A = n(639555),
    m = n(617641),
    h = n(961350);
n(540999);
var p = n(189081),
    x = n(994500),
    E = n(628965),
    T = n(287809),
    S = n(253932),
    C = n(368631),
    I = n(682262),
    f = n(987281);
n(531525);
var N = n(654487);
function b() {
    let e = (0, c.IO)().length,
        t = (0, s.bG)([E.A], () => E.A.getSearchParams()),
        n = (0, d.VT)(),
        f = (0, I.b_)(),
        b = T.default.getCurrentUser()?.isStaff() ?? !1,
        v = (0, m.Lc)({ location: "settings" }),
        O = (0, A.Rv)({ location: "settings" }),
        j = (0, a.H)(),
        R = (0, u.H)({ location: N.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        y = (0, s.bG)([p.A], () => p.A.hasLibraryApplication()),
        P = (0, s.bG)([h.default], () => h.default.hasTOTPEnabled()),
        D = S.Q_.useSetting(),
        L = (0, r.A)(),
        G = (0, o.A)() ?? !0,
        M = (0, g.G)()?.length > 0,
        { hasBlockedUsers: U, hasIgnoredUsers: k } = (0, s.cf)([x.A], () => ({
            hasBlockedUsers: x.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: x.A.getIgnoredIDs().length > 0,
        })),
        V = (0, _.fk)(),
        w = (0, l.i)("useGenerateUserSettingsSections");
    return i.useMemo(
        () =>
            (0, C.zj)({
                unseenGiftCount: e,
                searchParams: t,
                numOfPendingFamilyRequests: n,
                isOverlaySupported: f,
                isStaff: b,
                isInappropriateConversationWarningEnabled: v,
                isInapproprateConversationsDefaultOn: O,
                paymentsBlocked: j,
                isEligibleForQuests: R,
                isStricterMessageRequestsEnabled: L,
                hasLibraryApplication: y,
                hasTOTPEnabled: P,
                developerMode: D,
                isAdultUser: G,
                hasSecureFramesVerifiedUserIds: M,
                hasIgnoredUsers: k,
                hasBlockedUsers: U,
                hasAgeGatedFeature: V,
                isHDRAccessibilitySettingExperimentEnabled: w,
            }),
        [D, U, k, y, M, P, t, G, R, O, v, f, b, L, n, j, e, V, w],
    );
}
function v(e) {
    let t = f.a.useField("searchResults"),
        n = b(),
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
