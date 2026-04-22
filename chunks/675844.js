n.d(t, { I: () => g });
var i = n(627968),
    s = n(873298),
    l = n(192308),
    a = n(365258),
    r = n(419954),
    o = n(890164),
    d = n(253932),
    u = n(780964),
    c = n(985018);
let g = (0, r.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
    useTitle: () => c.intl.string(c.t.Qnf32C),
    useOptions: () => [
        { name: c.intl.string(c.t.Boxc8R), desc: c.intl.string(c.t["nLj+nc"]), value: s.KP.FRIENDS_AND_ALL_GUILDS },
        { name: c.intl.string(c.t.YOIKBt), desc: c.intl.string(c.t.y0JZ4s), value: s.KP.FRIENDS_AND_SMALL_GUILDS },
        { name: c.intl.string(c.t.u0nlJv), desc: c.intl.string(c.t["4jnKHu"]), value: s.KP.FRIENDS_ONLY },
    ],
    useValue: d.KP.useSetting,
    setValue: function (e) {
        let t = d.KP.getSetting();
        if ((d.KP.updateSetting(e), !(0, o.W1)("ProfilePrivacySetting"))) return;
        let s = (0, a.gS)(t, e);
        null != s &&
            (0, l.openModalLazy)(async () => {
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
    useSearchTerms: () => [c.intl.string(c.t.Qnf32C)],
});
