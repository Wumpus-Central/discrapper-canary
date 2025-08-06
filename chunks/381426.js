n.d(t, { Z: () => s });
var i = n(392711),
    o = n(509613),
    l = n(695346),
    a = n(388032);
let r = i.range(1, 11).map((e) => ({
        value: 60 * e,
        label: () => a.intl.formatToPlainString(a.t.iXLF9f, { minutes: e }),
    })),
    s = (0, o.Em)("MobileNotificationDelay", {
        useTitle: () => a.intl.string(a.t["8rHeOj"]),
        useSubtitle: () => a.intl.string(a.t["eJE6+P"]),
        options: r,
        useValue: l.CM.useSetting,
        setValue: l.CM.updateSetting,
    });
