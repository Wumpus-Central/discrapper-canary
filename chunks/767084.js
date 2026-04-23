n.d(t, { z: () => o });
var i = n(735438),
    s = n(419954),
    l = n(253932),
    a = n(780964),
    r = n(985018);
let o = (0, s.Hn)(a.X.MOBILE_NOTIFICATION_DELAY, {
    useTitle: () => r.intl.string(r.t["8rHeOr"]),
    useSubtitle: () => r.intl.string(r.t["eJE6+J"]),
    useValue: l.cU.useSetting,
    setValue: l.cU.updateSetting,
    useOptions: () =>
        i
            .range(1, 11)
            .map((e) => ({
                id: e.toString(),
                value: 60 * e,
                label: r.intl.formatToPlainString(r.t.iXLF9W, { minutes: e }),
            })),
});
