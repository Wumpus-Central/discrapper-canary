i.d(e, { f: () => E });
var n = i(574381),
    l = i(311907),
    s = i(314116),
    a = i(827343),
    r = i(77729),
    u = i(480862),
    o = i(729410),
    d = i(419954),
    A = i(430452),
    T = i(780964),
    S = i(985018);
let E = (0, d.zD)(T.X.VOICE_AND_VIDEO_OPENH264, {
    useTitle: () => S.intl.string(S.t.qFphsa),
    useSubtitle: () => S.intl.string(S.t.cQfwyY),
    usePredicate: function () {
        if (!(0, n.j9)()) return !1;
        let t = (0, o.b)({ location: "OpenH264Setting" }),
            e = (0, u.n)({ location: "OpenH264Setting" });
        return t.enabled || e.enabled;
    },
    useValue: function () {
        return (0, l.bG)([A.Ay], () => A.Ay.getOpenH264Enabled());
    },
    setValue: function (t) {
        a.A.setOpenH264Enabled(t),
            (0, s.A)({
                title: S.intl.string(S.t["9jf31O"]),
                subtitle: S.intl.string(S.t["J2wg+X"]),
                confirmText: S.intl.string(S.t.BddRzS),
                onConfirm: () => r.A.app.relaunch(),
            });
    },
    useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
});
