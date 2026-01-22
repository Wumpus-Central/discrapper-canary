i.d(e, { H: () => _ }), i(896048);
var n = i(419954),
    l = i(954571),
    s = i(115063),
    r = i(253932),
    u = i(780964),
    a = i(612025),
    o = i(112469),
    T = i(542457),
    A = i(355097),
    S = i(652215),
    E = i(985018),
    d = i(536482);
let _ = (0, n.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: () => E.intl.string(d.default.WhdCGP),
    useSubtitle: () => E.intl.string(d.default.UQ9RHJ),
    useValue: () => {
        let t = (0, o.Tx)();
        return !r.JG.useSetting().includes(t);
    },
    setValue: (t) => {
        let e = a.xk.getState().selectedGuildId,
            i = (0, s.Kk)();
        t ? i.delete(e) : i.add(e),
            r.JG.updateSetting([...i]),
            l.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: T.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: A.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: e,
            });
    },
    usePredicate: () => (0, o.Tx)() !== a.YG,
});
