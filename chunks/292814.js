n.d(t, { e: () => l });
var i = n(192379),
    r = n(63063),
    a = n(81866),
    s = n(981631),
    o = n(388032);
function l(e) {
    let { userId: t, renderApplicationName: n } = e,
        l = (0, a.Z)(t);
    return i.useMemo(
        () =>
            null != l
                ? o.intl.format(o.t.rSUACQ, {
                      helpdeskArticle: r.Z.getArticleURL(s.BhN.SLAYER_PROVISIONAL_ACCOUNTS),
                      applicationName: () => n(l)
                  })
                : o.intl.format(o.t['q+N8Ly'], { helpdeskArticle: r.Z.getArticleURL(s.BhN.SLAYER_PROVISIONAL_ACCOUNTS) }),
        [l, n]
    );
}
