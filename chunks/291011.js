n.d(t, { Z: () => o });
var l = n(392711),
    i = n(509613),
    r = n(695346),
    s = n(869235),
    a = n(388032);
let o = (0, i.Em)(s.t.MOBILE_NOTIFICATION_DELAY, {
    useTitle: () => a.intl.string(a.t["8rHeOj"]),
    useSubtitle: () => a.intl.string(a.t["eJE6+P"]),
    useOptions: () =>
        l.range(1, 11).map((e) => ({
            value: 60 * e,
            label: a.intl.formatToPlainString(a.t.iXLF9f, { minutes: e }),
        })),
    useValue: r.CM.useSetting,
    setValue: r.CM.updateSetting,
});
