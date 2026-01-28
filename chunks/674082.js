i.d(e, {
    Y: () => d,
});
var n = i(311907),
    l = i(419954),
    s = i(994500),
    r = i(975571),
    u = i(780964),
    a = i(961583),
    o = i(276221),
    T = i(652215),
    A = i(985018);
let d = (0, l.zZ)(u.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
    useTitle: () => A.intl.string(A.t.LVwR56),
    useSubtitle: () =>
        A.intl.format(A.t["0aNQo9"], {
            helpArticle: r.A.getArticleURL(T.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
        }),
    buildLayout: () => [a.T, o.H],
    usePredicate: () => {
        let { hasBlockedUsers: t, hasIgnoredUsers: e } = (0, n.cf)([s.A], () => ({
            hasBlockedUsers: s.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: s.A.getIgnoredIDs().length > 0,
        }));
        return e || t;
    },
});
