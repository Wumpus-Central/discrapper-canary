n.d(e, { n: () => g }), n(388685);
var i = n(509613),
    l = n(626135),
    s = n(63063),
    u = n(88658),
    r = n(695346),
    a = n(313789),
    o = n(997950),
    T = n(639814),
    S = n(703115),
    c = n(526761),
    E = n(981631),
    d = n(388032);
let g = (0, i.qs)(a.n.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: () => d.intl.string(d.t["T+nevN"]),
    useSubtitle: () =>
        d.intl.format(d.t.jXKQCu, { helpdeskArticle: s.Z.getArticleURL(E.BhN.ACTIVITY_STATUS_SETTINGS) }),
    useValue: () => {
        let t = (0, T.is)();
        return !r.iH.useSetting().includes(t);
    },
    setValue: (t) => {
        let e = o.xu.getState().selectedGuildId,
            n = (0, u.rr)();
        t ? n.delete(e) : n.add(e),
            r.iH.updateSetting([...n]),
            l.default.track(E.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: S.Y.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                ingress: c.f4.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: e,
            });
    },
    usePredicate: () => (0, T.is)() !== o.Th,
});
