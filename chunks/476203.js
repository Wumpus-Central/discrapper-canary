n.d(e, { Z: () => o });
var i = n(442837),
    r = n(846027),
    l = n(509613),
    s = n(131951),
    u = n(313789),
    a = n(388032);
let o = (0, l.qs)(u.n.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
    useTitle: () => a.intl.string(a.t["4I0qzZ"]),
    usePredicate: function () {
        return (0, i.e7)([s.Z], () => {
            let t = s.Z.supportsExperimentalSoundshare(),
                e = s.Z.supportsHookSoundshare();
            return t && e;
        });
    },
    useValue: function () {
        return (0, i.e7)([s.Z], () => s.Z.getExperimentalSoundshare());
    },
    setValue: r.Z.setExperimentalSoundshare,
});
