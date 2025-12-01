n.d(e, { Z: () => o });
var i = n(442837),
    r = n(846027),
    l = n(509613),
    u = n(131951),
    s = n(313789),
    a = n(388032);
let o = (0, l.qs)(s.n.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
    useTitle: () => a.intl.string(a.t["4I0qzZ"]),
    usePredicate: function () {
        return (0, i.e7)([u.Z], () => {
            let t = u.Z.supportsExperimentalSoundshare(),
                e = u.Z.supportsHookSoundshare();
            return t && e;
        });
    },
    useValue: function () {
        return (0, i.e7)([u.Z], () => u.Z.getExperimentalSoundshare());
    },
    setValue: r.Z.setExperimentalSoundshare,
});
