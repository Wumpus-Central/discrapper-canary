n.d(t, { Z: () => r });
var i = n(392711),
    a = n(281215),
    o = n(695346),
    s = n(388032);
let l = i.range(1, 11).map((e) => ({
        value: 60 * e,
        label: () => s.intl.formatToPlainString(s.t.iXLF9f, { minutes: e })
    })),
    r = (0, a.Em)('MobileNotificationDelay', {
        useTitle: () => s.intl.string(s.t['8rHeOj']),
        useSubtitle: () => s.intl.string(s.t['eJE6+P']),
        options: l,
        useValue: o.CM.useSetting,
        setValue: o.CM.updateSetting
    });
