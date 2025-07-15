n.d(t, { Z: () => d });
var i = n(442837),
    a = n(292556),
    s = n(281215),
    o = n(292959),
    r = n(981631),
    l = n(388032);
let d = (0, s.qs)('DesktopNotifs', {
    useTitle: () => l.intl.string(l.t['/0WClp']),
    useSubtitle: () => l.intl.string(l.t.wF9ih4),
    useValue: () => (0, i.e7)([o.Z], () => o.Z.getDesktopType()) !== r.qrD.NEVER,
    setValue: (e) => a.default.setDesktopType(e ? r.qrD.ALL : r.qrD.NEVER)
});
