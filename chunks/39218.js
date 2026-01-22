i.d(e, {
    x: () => S,
});
var n = i(64700),
    l = i(419954),
    s = i(975571),
    r = i(809505),
    u = i(253932),
    a = i(780964),
    o = i(84373),
    T = i(652215),
    A = i(985018);
let S = (0, l.Qx)(a.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
    useTitle: () => A.intl.string(A.t.tiCXaH),
    useSubtitle: () =>
        A.intl.format(A.t.RvjRRI, {
            appealLink: s.A.getArticleURL(T.MVz.SAFE_DIRECT_MESSAGING),
        }),
    useValue: o.o,
    setValue: (t) => u.he.updateSetting(t),
    useOptions: function () {
        return n.useMemo(() => (0, r.YS)(), []);
    },
    useSearchTerms: () => [A.intl.string(A.t.JzaP4h), A.intl.string(A.t.H9XOl3), A.intl.string(A.t.k4W40P)],
});
