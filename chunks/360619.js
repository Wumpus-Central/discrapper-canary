n.d(t, { AC: () => p, NI: () => T, PH: () => h });
var i = n(64700),
    s = n(311907),
    l = n(86379),
    a = n(643015),
    r = n(945276),
    o = n(35587),
    d = n(677402),
    c = n(639555),
    u = n(617641),
    _ = n(994500),
    m = n(368631),
    g = n(682262),
    A = n(987281),
    x = n(654487);
function h() {
    let e = (0, o.IO)().length,
        t = (0, g.b_)(),
        n = (0, u.Lc)({ location: "settings" }),
        A = (0, c.Rv)({ location: "settings" }),
        h = (0, l.Hp)(),
        p = (0, d.H)({ location: x.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        T = (0, a.A)(),
        E = (0, r.A)() ?? !0,
        { hasBlockedUsers: S, hasIgnoredUsers: C } = (0, s.cf)([_.A], () => ({
            hasBlockedUsers: _.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: _.A.getIgnoredIDs().length > 0,
        }));
    return i.useMemo(
        () =>
            (0, m.zj)({
                unseenGiftCount: e,
                isOverlaySupported: t,
                isInappropriateConversationWarningEnabled: n,
                isInapproprateConversationsDefaultOn: A,
                paymentsBlocked: h,
                isEligibleForQuests: p,
                isStricterMessageRequestsEnabled: T,
                isAdultUser: E,
                hasIgnoredUsers: C,
                hasBlockedUsers: S,
            }),
        [S, C, E, p, A, n, t, T, h, e],
    );
}
function p(e) {
    let t = A.a.useField("searchResults"),
        n = h(),
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
function T(e) {
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
