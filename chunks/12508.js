i.d(e, { n: () => A });
var n = i(64700),
    l = i(665260),
    s = i(171316),
    r = i(419954),
    a = i(115063),
    u = i(253932),
    o = i(780964),
    d = i(652215),
    T = i(985018);
let A = (0, r.zD)(o.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
    useTitle: () => T.intl.string(T.t.qsMfsH),
    useValue: () => {
        let t = u.FA.useSetting(),
            e = n.useMemo(() => (0, a.Lx)(t), [t]);
        return e.all || e.mutualGuilds;
    },
    setValue: (t) => {
        let e = u.FA.getSetting();
        u.FA.updateSetting(t ? l.UI(e, d.dzt.MUTUAL_GUILDS) : l.iE(e, d.dzt.MUTUAL_GUILDS, d.dzt.NO_RELATION));
    },
    useDisabled: () => (0, s.uM)(),
});
