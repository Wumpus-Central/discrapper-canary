n.d(t, { AC: () => E, NI: () => S, PH: () => T });
var i = n(64700),
    s = n(311907),
    l = n(86379),
    a = n(643015),
    r = n(945276),
    o = n(35587),
    d = n(677402),
    c = n(639555),
    u = n(617641),
    _ = n(189081),
    m = n(994500),
    g = n(253932),
    A = n(368631),
    x = n(682262),
    h = n(987281),
    p = n(654487);
function T() {
    let e = (0, o.IO)().length,
        t = (0, x.b_)(),
        n = (0, u.Lc)({ location: "settings" }),
        h = (0, c.Rv)({ location: "settings" }),
        T = (0, l.Hp)(),
        E = (0, d.H)({ location: p.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        S = (0, s.bG)([_.A], () => _.A.hasLibraryApplication()),
        C = g.Q_.useSetting(),
        f = (0, a.A)(),
        N = (0, r.A)() ?? !0,
        { hasBlockedUsers: I, hasIgnoredUsers: b } = (0, s.cf)([m.A], () => ({
            hasBlockedUsers: m.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: m.A.getIgnoredIDs().length > 0,
        }));
    return i.useMemo(
        () =>
            (0, A.zj)({
                unseenGiftCount: e,
                isOverlaySupported: t,
                isInappropriateConversationWarningEnabled: n,
                isInapproprateConversationsDefaultOn: h,
                paymentsBlocked: T,
                isEligibleForQuests: E,
                isStricterMessageRequestsEnabled: f,
                hasLibraryApplication: S,
                developerMode: C,
                isAdultUser: N,
                hasIgnoredUsers: b,
                hasBlockedUsers: I,
            }),
        [C, I, b, S, N, E, h, n, t, f, T, e],
    );
}
function E(e) {
    let t = h.a.useField("searchResults"),
        n = T(),
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
function S(e) {
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
