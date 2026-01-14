n.d(e, { b: () => T });
var i = n(473749),
    l = n(524437),
    s = n(509613),
    u = n(695346),
    r = n(313789),
    a = n(388032),
    o = n(418924);
let T = (0, s.J9)(r.n.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => a.intl.string(o.default["/LHVbt"]),
    useOptions: function () {
        return i.useMemo(
            () => [
                {
                    value: l.GI.ACTIVITY_STATUS_ON,
                    name: a.intl.string(a.t.UzGMH9),
                },
                {
                    value: l.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                    name: a.intl.string(o.default["/sAeRY"]),
                },
                {
                    value: l.GI.ACTIVITY_STATUS_OFF,
                    name: a.intl.string(o.default.m3oL7Q),
                },
            ],
            [],
        );
    },
    useValue: u.no.useSetting,
    setValue: u.no.updateSetting,
});
