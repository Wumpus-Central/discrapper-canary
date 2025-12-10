n.d(e, { i: () => a });
var i = n(392711),
    l = n(509613),
    s = n(695346),
    u = n(313789),
    r = n(388032);
let a = (0, l.Em)(u.n.MOBILE_NOTIFICATION_DELAY, {
    useTitle: () => r.intl.string(r.t["8rHeOr"]),
    useSubtitle: () => r.intl.string(r.t["eJE6+J"]),
    fieldLayout: "horizontal-responsive",
    useValue: s.CM.useSetting,
    setValue: s.CM.updateSetting,
    useOptions: () =>
        i.range(1, 11).map((t) => ({
            id: "".concat(t),
            value: 60 * t,
            label: r.intl.formatToPlainString(r.t.iXLF9W, { minutes: t }),
        })),
});
