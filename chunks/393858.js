n.d(t, { f: () => _ });
var i = n(574381),
    s = n(311907),
    l = n(314116),
    a = n(827343),
    r = n(77729),
    o = n(419954),
    d = n(430452),
    c = n(780964),
    u = n(985018);
let _ = (0, o.zD)(c.X.VOICE_AND_VIDEO_OPENH264, {
    useTitle: () => u.intl.string(u.t.qFphsa),
    useSubtitle: () => u.intl.string(u.t.cQfwyY),
    usePredicate: function () {
        return (0, i.j9)();
    },
    useValue: function () {
        return (0, s.bG)([d.Ay], () => d.Ay.getOpenH264Enabled());
    },
    setValue: function (e) {
        a.A.setOpenH264Enabled(e),
            (0, l.A)({
                title: u.intl.string(u.t["9jf31O"]),
                subtitle: u.intl.string(u.t["J2wg+X"]),
                confirmText: u.intl.string(u.t.BddRzS),
                onConfirm: () => r.A.app.relaunch(),
            });
    },
    useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
});
