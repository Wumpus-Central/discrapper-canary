i.d(e, { d: () => d });
var n = i(311907),
    l = i(264686),
    s = i(419954),
    r = i(803224),
    a = i(780964),
    u = i(652215),
    o = i(985018);
let d = (0, s.zD)(a.X.DESKTOP_NOTIFICATIONS, {
    useTitle: () => o.intl.string(o.t["/0WCll"]),
    useSubtitle: () => o.intl.string(o.t.wF9ih3),
    useValue: () => (0, n.bG)([r.A], () => r.A.getDesktopType()) !== u.nRU.NEVER,
    setValue: (t) => l.default.setDesktopType(t ? u.nRU.ALL : u.nRU.NEVER),
});
