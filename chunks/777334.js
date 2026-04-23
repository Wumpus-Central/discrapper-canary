"use strict";
n.d(t, { St: () => o, pj: () => a });
var i = n(38405),
    r = n(41984);
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return {
        ...t,
        tags: {
            source: __OVERLAY__ ? "overlay" : "legacy-overlay",
            overlayMethod: `${null == e ? null : r.Ue[e ?? r.Ue.Disabled]}`,
            ...(t?.tags ?? {}),
        },
    };
}
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    i.A.captureException(e, s(t, n));
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return i.A.captureCrash(e, s(t, n));
}
