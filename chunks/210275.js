n.d(t, { Z: () => c });
var i = n(442837),
    o = n(292556),
    l = n(509613),
    a = n(292959),
    r = n(981631),
    s = n(388032);
let c = (0, l.qs)("DesktopNotifications", {
    useTitle: () => s.intl.string(s.t["/0WClp"]),
    useSubtitle: () => s.intl.string(s.t.wF9ih4),
    useValue: () => (0, i.e7)([a.Z], () => a.Z.getDesktopType()) !== r.qrD.NEVER,
    setValue: (e) => o.default.setDesktopType(e ? r.qrD.ALL : r.qrD.NEVER),
});
