n.d(t, { Z: () => r });
var i = n(442837),
    l = n(292556),
    s = n(509613),
    o = n(292959),
    a = n(388032);
let r = (0, s.qs)("EnableUnreadMessageBadge", {
    useTitle: () => a.intl.string(a.t.VH8AIC),
    useSubtitle: () => a.intl.string(a.t["9K4qwc"]),
    useValue: () => (0, i.e7)([o.Z], () => !o.Z.getDisableUnreadBadge()),
    setValue: (e) => l.default.setDisableUnreadBadge(!e),
});
