n.d(t, { Z: () => c });
var a = n(442837),
    i = n(292556),
    o = n(281215),
    s = n(292959),
    r = n(981631),
    l = n(388032);
let c = (0, o.qs)('DesktopNotifs', {
    useTitle: () => l.intl.string(l.t['/0WClp']),
    useSubtitle: () => l.intl.string(l.t.wF9ih4),
    useValue: () => (0, a.e7)([s.Z], () => s.Z.getDesktopType()) !== r.qrD.NEVER,
    setValue: (e) => i.default.setDesktopType(e ? r.qrD.ALL : r.qrD.NEVER)
});
