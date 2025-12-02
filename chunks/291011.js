n.d(e, { Z: () => a });
var i = n(392711),
    r = n(509613),
    l = n(695346),
    s = n(313789),
    u = n(388032);
let a = (0, r.Em)(s.n.MOBILE_NOTIFICATION_DELAY, {
    useTitle: () => u.intl.string(u.t["8rHeOr"]),
    useSubtitle: () => u.intl.string(u.t["eJE6+J"]),
    useOptions: () =>
        i.range(1, 11).map((t) => ({
            value: 60 * t,
            label: u.intl.formatToPlainString(u.t.iXLF9W, { minutes: t }),
        })),
    useValue: l.CM.useSetting,
    setValue: l.CM.updateSetting,
});
