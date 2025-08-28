n.d(t, { Z: () => s });
var i = n(392711),
    r = n(509613),
    l = n(695346),
    o = n(869235),
    a = n(388032);
let s = (0, r.Em)(o.t.MOBILE_NOTIFICATION_DELAY, {
    useTitle: () => a.intl.string(a.t["8rHeOj"]),
    useSubtitle: () => a.intl.string(a.t["eJE6+P"]),
    useOptions: () =>
        i.range(1, 11).map((e) => ({
            value: 60 * e,
            label: a.intl.formatToPlainString(a.t.iXLF9f, { minutes: e }),
        })),
    useValue: l.CM.useSetting,
    setValue: l.CM.updateSetting,
});
