n.d(t, { Z: () => s });
var i = n(442837),
    o = n(292556),
    l = n(509613),
    r = n(292959),
    a = n(388032);
let s = (0, l.qs)("EnableUnreadMessageBadge", {
    useTitle: () => a.intl.string(a.t.VH8AIC),
    useSubtitle: () => a.intl.string(a.t["9K4qwc"]),
    useValue: () => (0, i.e7)([r.Z], () => !r.Z.getDisableUnreadBadge()),
    setValue: (e) => o.default.setDisableUnreadBadge(!e),
});
