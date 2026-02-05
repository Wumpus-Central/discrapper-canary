"use strict";
n.d(t, { b: () => i });
var r = n(128319);
function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { isInHoldout: n } = r.p.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return { enabled: !n };
}
