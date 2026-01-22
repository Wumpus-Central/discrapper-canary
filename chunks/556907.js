i.d(e, { a: () => S });
var n = i(64700),
    l = i(665260),
    s = i(171316),
    r = i(419954),
    u = i(115063),
    a = i(253932),
    o = i(780964),
    T = i(652215),
    A = i(985018);
let S = (0, r.zD)(o.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
    useTitle: () => A.intl.string(A.t.NfeuZ3),
    useValue: () => {
        let t = a.FA.useSetting(),
            e = n.useMemo(() => (0, u.Lx)(t), [t]);
        return e.all || e.mutualFriends;
    },
    setValue: (t) => {
        let e = a.FA.getSetting();
        a.FA.updateSetting(t ? l.UI(e, T.dzt.MUTUAL_FRIENDS) : l.iE(e, T.dzt.MUTUAL_FRIENDS, T.dzt.NO_RELATION));
    },
    useDisabled: () => (0, s.uM)(),
});
