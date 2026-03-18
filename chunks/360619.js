n.d(t, { AC: () => f, NI: () => C, PH: () => S });
var i = n(64700),
    s = n(311907),
    l = n(86379),
    a = n(643015),
    r = n(945276),
    o = n(35587),
    d = n(677402),
    c = n(818143),
    u = n(639555),
    _ = n(617641),
    m = n(189081),
    g = n(994500),
    A = n(628965),
    x = n(253932),
    h = n(368631),
    p = n(682262),
    T = n(987281),
    E = n(654487);
function S() {
    let e = (0, o.IO)().length,
        t = (0, s.bG)([A.A], () => A.A.getSearchParams()),
        n = (0, p.b_)(),
        T = (0, _.Lc)({ location: "settings" }),
        S = (0, u.Rv)({ location: "settings" }),
        f = (0, l.H)(),
        C = (0, d.H)({ location: E.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        b = (0, s.bG)([m.A], () => m.A.hasLibraryApplication()),
        N = x.Q_.useSetting(),
        I = (0, a.A)(),
        v = (0, r.A)() ?? !0,
        j = (0, c.G)()?.length > 0,
        { hasBlockedUsers: y, hasIgnoredUsers: R } = (0, s.cf)([g.A], () => ({
            hasBlockedUsers: g.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: g.A.getIgnoredIDs().length > 0,
        }));
    return i.useMemo(
        () =>
            (0, h.zj)({
                unseenGiftCount: e,
                searchParams: t,
                isOverlaySupported: n,
                isInappropriateConversationWarningEnabled: T,
                isInapproprateConversationsDefaultOn: S,
                paymentsBlocked: f,
                isEligibleForQuests: C,
                isStricterMessageRequestsEnabled: I,
                hasLibraryApplication: b,
                developerMode: N,
                isAdultUser: v,
                hasSecureFramesVerifiedUserIds: j,
                hasIgnoredUsers: R,
                hasBlockedUsers: y,
            }),
        [N, y, R, b, j, t, v, C, S, T, n, I, f, e],
    );
}
function f(e) {
    let t = T.a.useField("searchResults"),
        n = S(),
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
function C(e) {
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
