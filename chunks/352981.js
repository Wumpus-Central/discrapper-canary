n.d(t, {
    p: () => s,
    y: () => a
});
var i = n(482833),
    r = n(981631);
function a(e, t) {
    let { enabled: n } = i.c.useExperiment({
        guildId: null != e ? e : r.lds,
        location: t
    });
    return n;
}
function s(e, t) {
    let { enabled: n } = i.c.getCurrentConfig({
        guildId: null != e ? e : r.lds,
        location: t
    });
    return n;
}
