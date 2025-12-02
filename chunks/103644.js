n.d(e, { X: () => c });
var i = n(54381),
    r = n(793030),
    l = n(197344),
    s = n(509613),
    u = n(313789),
    a = n(518596),
    o = n(388032);
let c = (0, s.ON)(u.n.SOUNDS_HOLIDAY_NOTICE, {
    usePredicate: () => null != l.Z.useHolidaySoundpack(),
    useSearchTerms: () => [o.intl.string(o.t.fgSHf8)],
    render: () =>
        (0, i.jsx)(r.xvT, {
            variant: "text-md/normal",
            color: "text-secondary",
            children: o.intl.format(o.t.Eup6Wv, {
                onClick: () => (0, a.openUserSettings)(u.n.NOTIFICATIONS_SOUNDS_CATEGORY),
            }),
        }),
});
