n.d(e, { f: () => c });
var i = n(442837),
    l = n(509613),
    s = n(699516),
    u = n(63063),
    r = n(313789),
    a = n(564428),
    o = n(738070),
    T = n(981631),
    S = n(388032);
let c = (0, l.k4)(r.n.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
    useTitle: () => S.intl.string(S.t["3wRort"]),
    useSubtitle: () =>
        S.intl.format(S.t["0aNQo9"], { helpArticle: u.Z.getArticleURL(T.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
    buildLayout: () => [a.a, o.s],
    usePredicate: () => {
        let { hasBlockedUsers: t, hasIgnoredUsers: e } = (0, i.cj)([s.Z], () => ({
            hasBlockedUsers: s.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: s.Z.getIgnoredIDs().length > 0,
        }));
        return e || t;
    },
});
