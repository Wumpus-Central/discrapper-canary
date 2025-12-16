n.d(e, { Z: () => c });
var i = n(473749),
    l = n(95015),
    s = n(915009),
    u = n(509613),
    r = n(88658),
    a = n(695346),
    o = n(313789),
    T = n(981631),
    S = n(388032);
let c = (0, u.qs)(o.n.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
    useTitle: () => S.intl.string(S.t.qsMfsH),
    useValue: () => {
        let t = a.xq.useSetting(),
            e = i.useMemo(() => (0, r.bL)(t), [t]);
        return e.all || e.mutualGuilds;
    },
    setValue: (t) => {
        let e = a.xq.getSetting();
        a.xq.updateSetting(t ? l.pj(e, T.SOq.MUTUAL_GUILDS) : l.M1(e, T.SOq.MUTUAL_GUILDS, T.SOq.NO_RELATION));
    },
    useDisabled: () => (0, s.LN)(),
});
