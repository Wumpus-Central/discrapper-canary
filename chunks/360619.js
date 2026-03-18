n.d(t, { AC: () => S, NI: () => C, PH: () => E });
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
    A = n(253932),
    x = n(368631),
    h = n(682262),
    p = n(987281),
    T = n(654487);
function E() {
    let e = (0, o.IO)().length,
        t = (0, h.b_)(),
        n = (0, _.Lc)({ location: "settings" }),
        p = (0, u.Rv)({ location: "settings" }),
        E = (0, l.Hp)(),
        S = (0, d.H)({ location: T.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        C = (0, s.bG)([m.A], () => m.A.hasLibraryApplication()),
        f = A.Q_.useSetting(),
        b = (0, a.A)(),
        N = (0, r.A)() ?? !0,
        I = (0, c.G)()?.length > 0,
        { hasBlockedUsers: v, hasIgnoredUsers: j } = (0, s.cf)([g.A], () => ({
            hasBlockedUsers: g.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: g.A.getIgnoredIDs().length > 0,
        }));
    return i.useMemo(
        () =>
            (0, x.zj)({
                unseenGiftCount: e,
                isOverlaySupported: t,
                isInappropriateConversationWarningEnabled: n,
                isInapproprateConversationsDefaultOn: p,
                paymentsBlocked: E,
                isEligibleForQuests: S,
                isStricterMessageRequestsEnabled: b,
                hasLibraryApplication: C,
                developerMode: f,
                isAdultUser: N,
                hasSecureFramesVerifiedUserIds: I,
                hasIgnoredUsers: j,
                hasBlockedUsers: v,
            }),
        [f, v, j, C, I, N, S, p, n, t, b, E, e],
    );
}
function S(e) {
    let t = p.a.useField("searchResults"),
        n = E(),
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
