n.d(t, { t: () => i });
var r = n(751823);
function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { isInHoldout: n } = r.L.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return { enabled: !n };
}
