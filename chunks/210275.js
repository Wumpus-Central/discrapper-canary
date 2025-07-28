n.d(t, { Z: () => c });
var i = n(442837),
    a = n(292556),
    o = n(281215),
    s = n(292959),
    l = n(981631),
    r = n(388032);
let c = (0, o.qs)('DesktopNotifications', {
    useTitle: () => r.intl.string(r.t['/0WClp']),
    useSubtitle: () => r.intl.string(r.t.wF9ih4),
    useValue: () => (0, i.e7)([s.Z], () => s.Z.getDesktopType()) !== l.qrD.NEVER,
    setValue: (e) => a.default.setDesktopType(e ? l.qrD.ALL : l.qrD.NEVER)
});
