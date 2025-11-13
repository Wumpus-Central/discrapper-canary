n.d(e, { Z: () => o });
var i = n(442837),
    l = n(846027),
    u = n(509613),
    r = n(131951),
    s = n(313789),
    a = n(388032);
let o = (0, u.qs)(s.n.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
    useTitle: () => a.intl.string(a.t["4I0qzZ"]),
    usePredicate: function () {
        return (0, i.e7)([r.Z], () => {
            let t = r.Z.supportsExperimentalSoundshare(),
                e = r.Z.supportsHookSoundshare();
            return t && e;
        });
    },
    useValue: function () {
        return (0, i.e7)([r.Z], () => r.Z.getExperimentalSoundshare());
    },
    setValue: l.Z.setExperimentalSoundshare,
});
