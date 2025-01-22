r.d(n, {
    p: function () {
        return s;
    },
    y: function () {
        return o;
    }
});
var i = r(482833),
    a = r(981631);
function o(e, n) {
    let { enabled: r } = i.c.useExperiment({
        guildId: null != e ? e : a.lds,
        location: n
    });
    return r;
}
function s(e, n) {
    let { enabled: r } = i.c.getCurrentConfig({
        guildId: null != e ? e : a.lds,
        location: n
    });
    return r;
}
