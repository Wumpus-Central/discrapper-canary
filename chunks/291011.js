n.d(e, { Z: () => a });
var i = n(392711),
    l = n(509613),
    u = n(695346),
    r = n(313789),
    s = n(388032);
let a = (0, l.Em)(r.n.MOBILE_NOTIFICATION_DELAY, {
    useTitle: () => s.intl.string(s.t["8rHeOr"]),
    useSubtitle: () => s.intl.string(s.t["eJE6+J"]),
    useOptions: () =>
        i.range(1, 11).map((t) => ({
            value: 60 * t,
            label: s.intl.formatToPlainString(s.t.iXLF9W, { minutes: t }),
        })),
    useValue: u.CM.useSetting,
    setValue: u.CM.updateSetting,
});
