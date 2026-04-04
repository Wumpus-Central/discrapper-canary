n.d(t, { a: () => m });
var i = n(64700),
    s = n(665260),
    l = n(171316),
    a = n(419954),
    r = n(115063),
    o = n(253932),
    d = n(780964),
    c = n(652215),
    u = n(985018);
let m = (0, a.zD)(d.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
    useTitle: () => u.intl.string(u.t.NfeuZ3),
    useValue: () => {
        let e = o.FA.useSetting(),
            t = i.useMemo(() => (0, r.Lx)(e), [e]);
        return t.all || t.mutualFriends;
    },
    setValue: (e) => {
        let t = o.FA.getSetting();
        o.FA.updateSetting(e ? s.UI(t, c.dzt.MUTUAL_FRIENDS) : s.iE(t, c.dzt.MUTUAL_FRIENDS, c.dzt.NO_RELATION));
    },
    useDisabled: () => (0, l.uM)(),
});
