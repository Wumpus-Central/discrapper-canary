n.d(t, { e: () => l });
var r = n(192379),
    i = n(63063),
    a = n(81866),
    o = n(981631),
    s = n(388032);
function l(e) {
    let { userId: t, renderApplicationName: n } = e,
        l = (0, a.Z)(t);
    return r.useMemo(
        () =>
            null != l
                ? s.intl.format(s.t.rSUACQ, {
                      helpdeskArticle: i.Z.getArticleURL(o.BhN.SLAYER_PROVISIONAL_ACCOUNTS),
                      applicationName: () => n(l)
                  })
                : s.intl.format(s.t['q+N8Ly'], { helpdeskArticle: i.Z.getArticleURL(o.BhN.SLAYER_PROVISIONAL_ACCOUNTS) }),
        [l, n]
    );
}
