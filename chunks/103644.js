n.d(e, { X: () => T });
var i = n(54381),
    l = n(793030),
    s = n(197344),
    u = n(509613),
    r = n(313789),
    a = n(518596),
    o = n(388032);
let T = (0, u.ON)(r.n.SOUNDS_HOLIDAY_NOTICE, {
    useSearchTerms: () => [o.intl.string(o.t.fgSHf8)],
    usePredicate: () => null != s.Z.useHolidaySoundpack(),
    Component: () =>
        (0, i.jsx)(l.xvT, {
            variant: "text-md/normal",
            color: "text-subtle",
            children: o.intl.format(o.t.Eup6Wv, {
                onClick: () => (0, a.openUserSettings)(r.n.NOTIFICATIONS_SOUNDS_CATEGORY),
            }),
        }),
});
