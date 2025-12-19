n.d(e, { S: () => _ }), n(388685);
var i = n(509613),
    l = n(626135),
    s = n(88658),
    u = n(695346),
    r = n(313789),
    a = n(997950),
    o = n(639814),
    T = n(703115),
    S = n(526761),
    c = n(981631),
    E = n(388032),
    d = n(418924);
let _ = (0, i.qs)(r.n.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: () => E.intl.string(d.default.WhdCGP),
    useSubtitle: () => E.intl.string(d.default.UQ9RHJ),
    useValue: () => {
        let t = (0, o.is)();
        return !u.SE.useSetting().includes(t);
    },
    setValue: (t) => {
        let e = a.xu.getState().selectedGuildId,
            n = (0, s._o)();
        t ? n.delete(e) : n.add(e),
            u.SE.updateSetting([...n]),
            l.default.track(c.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: T.Y.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: S.f4.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: e,
            });
    },
    usePredicate: () => (0, o.is)() !== a.Th,
});
