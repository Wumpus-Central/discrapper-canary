n.d(t, { Z: () => s });
var i = n(392711),
    l = n(509613),
    o = n(695346),
    r = n(388032);
let s = (0, l.Em)("MobileNotificationDelay", {
    useTitle: () => r.intl.string(r.t["8rHeOj"]),
    useSubtitle: () => r.intl.string(r.t["eJE6+P"]),
    useOptions: () =>
        i.range(1, 11).map((e) => ({
            value: 60 * e,
            label: r.intl.formatToPlainString(r.t.iXLF9f, { minutes: e }),
        })),
    useValue: o.CM.useSetting,
    setValue: o.CM.updateSetting,
});
