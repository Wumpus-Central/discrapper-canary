n.d(t, { Y: () => m });
var i = n(311907),
    s = n(419954),
    l = n(994500),
    a = n(975571),
    r = n(780964),
    o = n(512975),
    d = n(921053),
    c = n(652215),
    u = n(985018);
let m = (0, s.zZ)(r.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
    useTitle: () => u.intl.string(u.t.LVwR56),
    useSubtitle: () =>
        u.intl.format(u.t["0aNQo9"], { helpArticle: a.A.getArticleURL(c.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
    buildLayout: () => [o.T, d.H],
    usePredicate: () => {
        let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, i.cf)([l.A], () => ({
            hasBlockedUsers: l.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: l.A.getIgnoredIDs().length > 0,
        }));
        return t || e;
    },
});
