n.d(t, { Z: () => s });
var i = n(392711),
    o = n(509613),
    l = n(695346),
    r = n(388032);
let a = i.range(1, 11).map((e) => ({
        value: 60 * e,
        label: () => r.intl.formatToPlainString(r.t.iXLF9f, { minutes: e }),
    })),
    s = (0, o.Em)("MobileNotificationDelay", {
        useTitle: () => r.intl.string(r.t["8rHeOj"]),
        useSubtitle: () => r.intl.string(r.t["eJE6+P"]),
        options: a,
        useValue: l.CM.useSetting,
        setValue: l.CM.updateSetting,
    });
