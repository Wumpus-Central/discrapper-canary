t.d(n, {
    z: function () {
        return a;
    }
}),
    t(47120);
var l = t(192379),
    i = t(442837),
    r = t(353926);
function a(e) {
    let [n, t] = (0, i.Wu)([r.Z], () => [r.Z.getAllUserExperimentDescriptors(), r.Z.getGuildExperiments()]);
    l.useEffect(() => {
        e.trigger();
    }, [e, n, t]);
}
