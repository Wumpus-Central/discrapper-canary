n.d(t, { Z: () => u });
var i = n(442837),
    l = n(292556),
    s = n(509613),
    o = n(292959),
    a = n(981631),
    r = n(388032);
let u = (0, s.qs)("DesktopNotifications", {
    useTitle: () => r.intl.string(r.t["/0WClp"]),
    useSubtitle: () => r.intl.string(r.t.wF9ih4),
    useValue: () => (0, i.e7)([o.Z], () => o.Z.getDesktopType()) !== a.qrD.NEVER,
    setValue: (e) => l.default.setDesktopType(e ? a.qrD.ALL : a.qrD.NEVER),
});
