r.d(n, {
    k: function () {
        return s;
    }
});
var i = r(442837),
    a = r(114064),
    o = r(485731);
function s(e) {
    let { available: n, activated: r } = (0, i.cj)([a.Z], () => ({
            available: a.Z.isAvailable(e),
            activated: a.Z.hasActiveDemo(e)
        })),
        s = (0, i.cj)([o.Z], () => o.Z.getState());
    return {
        available: n,
        activated: r,
        hqStreamingState: s,
        shouldShowOptInPopout: (0, i.e7)([o.Z], () => o.Z.shouldShowOptInPopout())
    };
}
