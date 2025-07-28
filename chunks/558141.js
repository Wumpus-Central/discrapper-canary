n.d(t, { Z: () => r });
var i = n(442837),
    a = n(292556),
    o = n(281215),
    s = n(292959),
    l = n(388032);
let r = (0, o.qs)('EnableUnreadMessageBadge', {
    useTitle: () => l.intl.string(l.t.VH8AIC),
    useSubtitle: () => l.intl.string(l.t['9K4qwc']),
    useValue: () => (0, i.e7)([s.Z], () => !s.Z.getDisableUnreadBadge()),
    setValue: (e) => a.default.setDisableUnreadBadge(!e)
});
