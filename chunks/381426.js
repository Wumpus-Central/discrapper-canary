n.d(t, { Z: () => s });
var i = n(392711),
    l = n(509613),
    r = n(695346),
    o = n(388032);
let s = (0, l.Em)("MobileNotificationDelay", {
    useTitle: () => o.intl.string(o.t["8rHeOj"]),
    useSubtitle: () => o.intl.string(o.t["eJE6+P"]),
    useOptions: () =>
        i.range(1, 11).map((e) => ({
            value: 60 * e,
            label: o.intl.formatToPlainString(o.t.iXLF9f, { minutes: e }),
        })),
    useValue: r.CM.useSetting,
    setValue: r.CM.updateSetting,
});
