i.d(e, { Y: () => A });
var n = i(311907),
    l = i(419954),
    s = i(994500),
    r = i(975571),
    a = i(780964),
    u = i(961583),
    o = i(276221),
    d = i(652215),
    T = i(985018);
let A = (0, l.zZ)(a.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
    useTitle: () => T.intl.string(T.t.LVwR56),
    useSubtitle: () =>
        T.intl.format(T.t["0aNQo9"], { helpArticle: r.A.getArticleURL(d.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
    buildLayout: () => [u.T, o.H],
    usePredicate: () => {
        let { hasBlockedUsers: t, hasIgnoredUsers: e } = (0, n.cf)([s.A], () => ({
            hasBlockedUsers: s.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: s.A.getIgnoredIDs().length > 0,
        }));
        return e || t;
    },
});
