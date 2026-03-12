n.d(t, { AC: () => b, NI: () => I, PH: () => N }), n(321073);
var i = n(64700),
    s = n(311907);
n(361739);
var l = n(406360),
    r = n(86379),
    a = n(643015),
    o = n(945276),
    d = n(35587),
    c = n(677402),
    u = n(207560),
    _ = n(818143),
    m = n(639555),
    g = n(617641),
    A = n(961350);
n(540999);
var h = n(189081),
    x = n(994500),
    p = n(628965),
    T = n(253932),
    E = n(368631),
    C = n(682262),
    S = n(987281);
n(531525);
var f = n(654487);
function N() {
    let e = (0, d.IO)().length,
        t = (0, s.bG)([p.A], () => p.A.getSearchParams()),
        n = (0, C.b_)(),
        S = (0, g.Lc)({ location: "settings" }),
        N = (0, m.Rv)({ location: "settings" }),
        b = (0, r.H)(),
        I = (0, c.H)({ location: f.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        v = (0, s.bG)([h.A], () => h.A.hasLibraryApplication()),
        j = (0, s.bG)([A.default], () => A.default.hasTOTPEnabled()),
        O = T.Q_.useSetting(),
        y = (0, a.A)(),
        R = (0, o.A)() ?? !0,
        P = (0, _.G)()?.length > 0,
        { hasBlockedUsers: D, hasIgnoredUsers: L } = (0, s.cf)([x.A], () => ({
            hasBlockedUsers: x.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: x.A.getIgnoredIDs().length > 0,
        })),
        M = (0, u.fk)(),
        G = (0, l.i)("useGenerateUserSettingsSections");
    return i.useMemo(
        () =>
            (0, E.zj)({
                unseenGiftCount: e,
                searchParams: t,
                isOverlaySupported: n,
                isInappropriateConversationWarningEnabled: S,
                isInapproprateConversationsDefaultOn: N,
                paymentsBlocked: b,
                isEligibleForQuests: I,
                isStricterMessageRequestsEnabled: y,
                hasLibraryApplication: v,
                hasTOTPEnabled: j,
                developerMode: O,
                isAdultUser: R,
                hasSecureFramesVerifiedUserIds: P,
                hasIgnoredUsers: L,
                hasBlockedUsers: D,
                hasAgeGatedFeature: M,
                isHDRAccessibilitySettingExperimentEnabled: G,
            }),
        [O, D, L, v, P, j, t, R, I, N, S, n, y, b, e, M, G],
    );
}
function b(e) {
    let t = S.a.useField("searchResults"),
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
        r = new Set(),
        a = (e) => {
            let t = s[e];
            if (null == t) return;
            r.add(e);
            let n = t.parent;
            null != n && a(n);
        },
        o = (e) => {
            for (let t of (r.add(e),
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
        if (!r.has(e)) {
            if (null != s[e].element && null == s[e].parent) {
                r.clear();
                break;
            }
            Object.values(l).includes(e) && o(e), a(e);
        }
    return r;
}
function I(e) {
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
