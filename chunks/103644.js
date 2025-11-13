n.d(e, { X: () => c });
var i = n(951288),
    l = n(793030),
    u = n(197344),
    r = n(509613),
    s = n(313789),
    a = n(518596),
    o = n(388032);
let c = (0, r.ON)(s.n.SOUNDS_HOLIDAY_NOTICE, {
    usePredicate: () => null != u.Z.useHolidaySoundpack(),
    useSearchTerms: () => [o.intl.string(o.t.fgSHf8)],
    render: () =>
        (0, i.jsx)(l.xvT, {
            variant: "text-md/normal",
            color: "text-secondary",
            children: o.intl.format(o.t.Eup6Wv, {
                onClick: () => (0, a.openUserSettings)(s.n.NOTIFICATIONS_SOUNDS_CATEGORY),
            }),
        }),
});
