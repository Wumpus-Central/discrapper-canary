n.d(t, { k: () => s });
var i = n(442837),
    r = n(114064),
    a = n(485731);
function s(e) {
    let { available: t, activated: n } = (0, i.cj)([r.Z], () => ({
        available: r.Z.isAvailable(e),
        activated: r.Z.hasActiveDemo(e)
    }));
    return {
        available: t,
        activated: n,
        hqStreamingState: (0, i.cj)([a.Z], () => a.Z.getState()),
        shouldShowOptInPopout: (0, i.e7)([a.Z], () => a.Z.shouldShowOptInPopout())
    };
}
