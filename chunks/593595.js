n.d(t, { i: () => i });
var r = n(128319);
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: i } = r.p.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return { enabled: !i };
}
