i.d(e, { I: () => T });
var n = i(627968),
    l = i(873298),
    s = i(397927),
    r = i(365258),
    a = i(419954),
    u = i(890164),
    o = i(253932),
    d = i(780964),
    A = i(985018);
let T = (0, a.Qx)(d.X.PROFILE_PRIVACY_SETTING, {
    useTitle: () => A.intl.string(A.t.Qnf32C),
    useOptions: () => [
        { name: A.intl.string(A.t.Boxc8R), desc: A.intl.string(A.t["nLj+nc"]), value: l.KP.FRIENDS_AND_ALL_GUILDS },
        { name: A.intl.string(A.t.YOIKBt), desc: A.intl.string(A.t.y0JZ4s), value: l.KP.FRIENDS_AND_SMALL_GUILDS },
        { name: A.intl.string(A.t.u0nlJv), desc: A.intl.string(A.t["4jnKHu"]), value: l.KP.FRIENDS_ONLY },
    ],
    useValue: o.KP.useSetting,
    setValue: function (t) {
        let e = o.KP.getSetting();
        if ((o.KP.updateSetting(t), !(0, u.W1)("ProfilePrivacySetting"))) return;
        let l = (0, r.gS)(e, t);
        null != l &&
            (0, s.mMO)(async () => {
                let { default: t } = await i.e("63786").then(i.bind(i, 413201));
                return (e) =>
                    (0, n.jsx)(t, {
                        ...e,
                        direction: l.direction,
                        affectedGuildIds: l.affectedGuildIds,
                        settingName: l.settingName,
                        mappedActivityValue: l.mappedActivityValue,
                    });
            });
    },
    useSearchTerms: () => [A.intl.string(A.t.Qnf32C)],
});
