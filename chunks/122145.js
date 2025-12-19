n.d(e, { Y: () => S });
var i = n(473749),
    l = n(915009),
    s = n(509613),
    u = n(88658),
    r = n(695346),
    a = n(313789),
    o = n(981631),
    T = n(388032);
let S = (0, s.qs)(a.n.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => T.intl.string(T.t["7x9dyE"]),
    useValue: () => {
        let t = r.xq.useSetting();
        return i.useMemo(() => (0, u.bL)(t), [t]).all;
    },
    setValue: (t) => {
        r.xq.updateSetting(t ? o.HGf : o.HGf & ~o.SOq.NO_RELATION);
    },
    useDisabled: () => (0, l.LN)(),
});
