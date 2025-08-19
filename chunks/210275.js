n.d(t, { Z: () => u });
var i = n(442837),
    l = n(292556),
    o = n(509613),
    r = n(292959),
    s = n(981631),
    a = n(388032);
let u = (0, o.qs)("DesktopNotifications", {
    useTitle: () => a.intl.string(a.t["/0WClp"]),
    useSubtitle: () => a.intl.string(a.t.wF9ih4),
    useValue: () => (0, i.e7)([r.Z], () => r.Z.getDesktopType()) !== s.qrD.NEVER,
    setValue: (e) => l.default.setDesktopType(e ? s.qrD.ALL : s.qrD.NEVER),
});
