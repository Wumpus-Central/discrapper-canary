"use strict";
var i = n(626584),
    r = n(279234);
try {
    performance.setResourceTimingBufferSize(500);
} catch {}
let a = new i.A("libdiscore");
!(async function () {
    try {
        __OVERLAY__ || (await (0, r.P)());
    } catch (e) {
        a.error("Failed to initialize libdiscore", e);
    }
    setTimeout(() => {
        try {
            n(424045);
        } finally {
            n(19575).Ay.indexLoadedAsync();
        }
    }, 0);
})();
