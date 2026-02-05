"use strict";
n.d(t, { W: () => c, d: () => u });
var r = n(311907),
    i = n(250105),
    a = n(217222),
    s = n(128319);
let o = { defaultWatchMultipleStreams: !1 },
    l = (0, i.Ay)({
        name: "2025-08-go-live-default-multiwatch",
        kind: "user",
        defaultConfig: o,
        variations: { 1: { ...o, defaultWatchMultipleStreams: !0 } },
    });
function u(e) {
    let { location: t } = e,
        { isInHoldout: n } = s.p.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n ? l.definition.defaultConfig : l.getConfig({ location: t });
}
function c(e) {
    let { location: t } = e;
    return (0, r.bG)([a.A], () => u({ location: t }));
}
