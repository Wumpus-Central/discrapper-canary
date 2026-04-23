n.d(t, { f: () => g });
var i = n(574381),
    s = n(311907),
    l = n(314116),
    a = n(827343),
    r = n(77729),
    o = n(419954),
    d = n(430452),
    u = n(780964),
    c = n(985018);
let g = (0, o.zD)(u.X.VOICE_AND_VIDEO_OPENH264, {
    useTitle: () => c.intl.string(c.t.qFphsa),
    useSubtitle: () => c.intl.string(c.t.cQfwyY),
    usePredicate: function () {
        return (0, i.j9)();
    },
    useValue: function () {
        return (0, s.bG)([d.Ay], () => d.Ay.getOpenH264Enabled());
    },
    setValue: function (e) {
        a.A.setOpenH264Enabled(e),
            (0, l.A)({
                title: c.intl.string(c.t["9jf31O"]),
                subtitle: c.intl.string(c.t["J2wg+X"]),
                confirmText: c.intl.string(c.t.BddRzS),
                onConfirm: () => r.A.app.relaunch(),
            });
    },
    useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
});
