n.d(t, { Z: () => u });
var i = n(442837),
    l = n(292556),
    s = n(509613),
    o = n(292959),
    r = n(981631),
    a = n(388032);
let u = (0, s.qs)("DesktopNotifications", {
    useTitle: () => a.intl.string(a.t["/0WClp"]),
    useSubtitle: () => a.intl.string(a.t.wF9ih4),
    useValue: () => (0, i.e7)([o.Z], () => o.Z.getDesktopType()) !== r.qrD.NEVER,
    setValue: (e) => l.default.setDesktopType(e ? r.qrD.ALL : r.qrD.NEVER),
});
