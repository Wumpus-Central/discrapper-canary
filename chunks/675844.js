n.d(t, { I: () => m });
var i = n(627968),
    s = n(873298),
    l = n(397927),
    a = n(365258),
    r = n(419954),
    o = n(890164),
    d = n(253932),
    c = n(780964),
    u = n(985018);
let m = (0, r.Qx)(c.X.PROFILE_PRIVACY_SETTING, {
    useTitle: () => u.intl.string(u.t.Qnf32C),
    useOptions: () => [
        { name: u.intl.string(u.t.Boxc8R), desc: u.intl.string(u.t["nLj+nc"]), value: s.KP.FRIENDS_AND_ALL_GUILDS },
        { name: u.intl.string(u.t.YOIKBt), desc: u.intl.string(u.t.y0JZ4s), value: s.KP.FRIENDS_AND_SMALL_GUILDS },
        { name: u.intl.string(u.t.u0nlJv), desc: u.intl.string(u.t["4jnKHu"]), value: s.KP.FRIENDS_ONLY },
    ],
    useValue: d.KP.useSetting,
    setValue: function (e) {
        let t = d.KP.getSetting();
        if ((d.KP.updateSetting(e), !(0, o.W1)("ProfilePrivacySetting"))) return;
        let s = (0, a.gS)(t, e);
        null != s &&
            (0, l.mMO)(async () => {
                let { default: e } = await n.e("63786").then(n.bind(n, 413201));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        direction: s.direction,
                        affectedGuildIds: s.affectedGuildIds,
                        settingName: s.settingName,
                        mappedActivityValue: s.mappedActivityValue,
                    });
            });
    },
    useSearchTerms: () => [u.intl.string(u.t.Qnf32C)],
});
