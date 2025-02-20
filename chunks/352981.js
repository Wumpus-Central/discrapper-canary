n.d(t, {
    p: () => a,
    y: () => o
});
var r = n(482833),
    i = n(981631);
function o(e, t) {
    let { enabled: n } = r.c.useExperiment({
        guildId: null != e ? e : i.lds,
        location: t
    });
    return n;
}
function a(e, t) {
    let { enabled: n } = r.c.getCurrentConfig({
        guildId: null != e ? e : i.lds,
        location: t
    });
    return n;
}
