"use strict";
n.d(t, { St: () => o, pj: () => s });
var r = n(728458),
    i = n(41984);
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return {
        ...t,
        tags: {
            source: __OVERLAY__ ? "overlay" : "legacy-overlay",
            overlayMethod: `${null == e ? null : i.Ue[e ?? i.Ue.Disabled]}`,
            ...(t?.tags ?? {}),
        },
    };
}
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    r.A.captureException(e, a(t, n));
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return r.A.captureCrash(e, a(t, n));
}
