i.d(e, { x: () => A });
var n = i(64700),
    l = i(419954),
    s = i(975571),
    r = i(809505),
    a = i(253932),
    u = i(780964),
    o = i(84373),
    d = i(652215),
    T = i(985018);
let A = (0, l.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
    useTitle: () => T.intl.string(T.t.tiCXaH),
    useSubtitle: () => T.intl.format(T.t.RvjRRI, { appealLink: s.A.getArticleURL(d.MVz.SAFE_DIRECT_MESSAGING) }),
    useValue: o.o,
    setValue: (t) => a.he.updateSetting(t),
    useOptions: function () {
        return n.useMemo(() => (0, r.YS)(), []);
    },
    useSearchTerms: () => [T.intl.string(T.t.JzaP4h), T.intl.string(T.t.H9XOl3), T.intl.string(T.t.k4W40P)],
});
