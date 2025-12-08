n.d(e, { i: () => a });
var i = n(392711),
    l = n(509613),
    s = n(695346),
    r = n(313789),
    u = n(388032);
let a = (0, l.Em)(r.n.MOBILE_NOTIFICATION_DELAY, {
    useTitle: () => u.intl.string(u.t["8rHeOr"]),
    useSubtitle: () => u.intl.string(u.t["eJE6+J"]),
    fieldLayout: "horizontal-responsive",
    useValue: s.CM.useSetting,
    setValue: s.CM.updateSetting,
    useOptions: () =>
        i.range(1, 11).map((t) => ({
            id: "".concat(t),
            value: 60 * t,
            label: u.intl.formatToPlainString(u.t.iXLF9W, { minutes: t }),
        })),
});
