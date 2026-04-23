n.d(t, { L: () => d });
var i = n(311907),
    s = n(827343),
    l = n(419954),
    a = n(430452),
    r = n(780964),
    o = n(985018);
let d = (0, l.zD)(r.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
    useTitle: () => o.intl.string(o.t["4I0qzZ"]),
    useValue: function () {
        return (0, i.bG)([a.Ay], () => a.Ay.getExperimentalSoundshare());
    },
    setValue: s.A.setExperimentalSoundshare,
    usePredicate: function () {
        return (0, i.bG)([a.Ay], () => {
            let e = a.Ay.supportsExperimentalSoundshare(),
                t = a.Ay.supportsHookSoundshare();
            return e && t;
        });
    },
});
