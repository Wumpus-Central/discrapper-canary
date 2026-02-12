i.d(e, { I: () => u });
var n = i(873298),
    l = i(419954),
    s = i(253932),
    r = i(780964),
    a = i(985018);
let u = (0, l.Qx)(r.X.PROFILE_PRIVACY_SETTING, {
    useTitle: () => a.intl.string(a.t.Qnf32C),
    useOptions: () => [
        { name: a.intl.string(a.t.Boxc8R), desc: a.intl.string(a.t["nLj+nc"]), value: n.KP.FRIENDS_AND_ALL_GUILDS },
        { name: a.intl.string(a.t.YOIKBt), desc: a.intl.string(a.t.y0JZ4s), value: n.KP.FRIENDS_AND_SMALL_GUILDS },
        { name: a.intl.string(a.t.u0nlJv), desc: a.intl.string(a.t["4jnKHu"]), value: n.KP.FRIENDS_ONLY },
    ],
    useValue: s.KP.useSetting,
    setValue: s.KP.updateSetting,
    useSearchTerms: () => [a.intl.string(a.t.Qnf32C)],
});
