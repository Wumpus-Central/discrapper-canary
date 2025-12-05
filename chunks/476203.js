n.d(e, { B: () => o });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    r = n(131951),
    u = n(313789),
    a = n(388032);
let o = (0, s.qs)(u.n.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
    useTitle: () => a.intl.string(a.t["4I0qzZ"]),
    useValue: function () {
        return (0, i.e7)([r.Z], () => r.Z.getExperimentalSoundshare());
    },
    setValue: l.Z.setExperimentalSoundshare,
    usePredicate: function () {
        return (0, i.e7)([r.Z], () => {
            let t = r.Z.supportsExperimentalSoundshare(),
                e = r.Z.supportsHookSoundshare();
            return t && e;
        });
    },
});
