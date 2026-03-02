i.d(e, { f: () => T });
var n = i(574381),
    l = i(311907),
    s = i(827343),
    r = i(480862),
    a = i(729410),
    u = i(419954),
    o = i(430452),
    d = i(780964),
    A = i(985018);
let T = (0, u.zD)(d.X.VOICE_AND_VIDEO_OPENH264, {
    useTitle: () => A.intl.string(A.t.qFphsa),
    useSubtitle: () => A.intl.string(A.t.cQfwyY),
    usePredicate: function () {
        if (!(0, n.j9)()) return !1;
        let t = (0, a.b)({ location: "OpenH264Setting" }),
            e = (0, r.n)({ location: "OpenH264Setting" });
        return t.enabled || e.enabled;
    },
    useValue: function () {
        return (0, l.bG)([o.Ay], () => o.Ay.getOpenH264Enabled());
    },
    setValue: function (t) {
        s.A.setOpenH264Enabled(t);
    },
    useSearchTerms: () => ["H264", "codec"],
});
