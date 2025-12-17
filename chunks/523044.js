n.d(e, { y: () => c });
var i = n(473749),
    l = n(95015),
    s = n(915009),
    u = n(509613),
    r = n(88658),
    a = n(695346),
    o = n(313789),
    S = n(981631),
    T = n(388032);
let c = (0, u.qs)(o.n.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
    useTitle: () => T.intl.string(T.t.NfeuZ3),
    useValue: () => {
        let t = a.xq.useSetting(),
            e = i.useMemo(() => (0, r.bL)(t), [t]);
        return e.all || e.mutualFriends;
    },
    setValue: (t) => {
        let e = a.xq.getSetting();
        a.xq.updateSetting(t ? l.pj(e, S.SOq.MUTUAL_FRIENDS) : l.M1(e, S.SOq.MUTUAL_FRIENDS, S.SOq.NO_RELATION));
    },
    useDisabled: () => (0, s.LN)(),
});
