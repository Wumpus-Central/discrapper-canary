n.d(t, { Z: () => d });
var a = n(442837),
    i = n(292556),
    o = n(281215),
    r = n(292959),
    s = n(981631),
    l = n(388032);
let d = (0, o.qs)('DesktopNotifs', {
    useTitle: () => l.intl.string(l.t['/0WClp']),
    useSubtitle: () => l.intl.string(l.t.wF9ih4),
    useValue: () => (0, a.e7)([r.Z], () => r.Z.getDesktopType()) !== s.qrD.NEVER,
    setValue: (e) => i.default.setDesktopType(e ? s.qrD.ALL : s.qrD.NEVER)
});
