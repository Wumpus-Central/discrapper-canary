n.d(t, { e: () => l });
var r = n(192379),
    i = n(63063),
    o = n(81866),
    a = n(981631),
    s = n(388032);
function l(e) {
    let { userId: t, renderApplicationName: n } = e,
        l = (0, o.Z)(t);
    return r.useMemo(
        () =>
            null != l
                ? s.NW.format(s.t.rSUACQ, {
                      helpdeskArticle: i.Z.getArticleURL(a.BhN.SLAYER_PROVISIONAL_ACCOUNTS),
                      applicationName: () => n(l)
                  })
                : s.NW.format(s.t['q+N8Ly'], { helpdeskArticle: i.Z.getArticleURL(a.BhN.SLAYER_PROVISIONAL_ACCOUNTS) }),
        [l, n]
    );
}
