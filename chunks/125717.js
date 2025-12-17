n.d(e, { J: () => c });
var i = n(473749),
    l = n(509613),
    s = n(63063),
    u = n(78451),
    r = n(695346),
    a = n(313789),
    o = n(580183),
    S = n(981631),
    T = n(388032);
let c = (0, l.J9)(a.n.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
    useTitle: () => T.intl.string(T.t.tiCXaH),
    useSubtitle: () => T.intl.format(T.t.RvjRRI, { appealLink: s.Z.getArticleURL(S.BhN.SAFE_DIRECT_MESSAGING) }),
    useValue: o.m,
    setValue: (t) => r.Xr.updateSetting(t),
    useOptions: function () {
        return i.useMemo(() => (0, u.c7)(), []);
    },
});
