i.d(e, { I: () => d });
var n = i(419954),
    l = i(975571),
    s = i(253932),
    r = i(780964),
    a = i(542877),
    u = i(652215),
    o = i(985018);
let d = (0, n.zD)(r.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
    useTitle: () => o.intl.string(o.t.XpBObB),
    useSubtitle: () => o.intl.format(o.t.oZsHTD, { helpdeskArticle: l.A.getArticleURL(u.MVz.SLAYER_GAME_FRIENDS) }),
    useSearchTerms: () => [o.intl.string(o.t["Uv/eTx"])],
    useValue: () => s.Zk.useSetting(),
    setValue: (t) => s.Zk.updateSetting(t),
    usePredicate: a.K,
});
