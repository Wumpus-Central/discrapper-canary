n.d(t, { Z: () => c });
var i = n(442837),
    o = n(292556),
    l = n(509613),
    r = n(292959),
    a = n(981631),
    s = n(388032);
let c = (0, l.qs)("DesktopNotifications", {
    useTitle: () => s.intl.string(s.t["/0WClp"]),
    useSubtitle: () => s.intl.string(s.t.wF9ih4),
    useValue: () => (0, i.e7)([r.Z], () => r.Z.getDesktopType()) !== a.qrD.NEVER,
    setValue: (e) => o.default.setDesktopType(e ? a.qrD.ALL : a.qrD.NEVER),
});
