n.d(e, { B: () => o });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    u = n(131951),
    r = n(313789),
    a = n(388032);
let o = (0, s.qs)(r.n.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
    useTitle: () => a.intl.string(a.t["4I0qzZ"]),
    useValue: function () {
        return (0, i.e7)([u.Z], () => u.Z.getExperimentalSoundshare());
    },
    setValue: l.Z.setExperimentalSoundshare,
    usePredicate: function () {
        return (0, i.e7)([u.Z], () => {
            let t = u.Z.supportsExperimentalSoundshare(),
                e = u.Z.supportsHookSoundshare();
            return t && e;
        });
    },
});
