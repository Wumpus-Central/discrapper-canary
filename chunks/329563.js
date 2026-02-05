"use strict";
var r = n(626584),
    i = n(279234);
let a = new r.A("libdiscore");
!(async function () {
    try {
        __OVERLAY__ || (await (0, i.P)());
    } catch (e) {
        a.error("Failed to initialize libdiscore", e);
    }
    try {
        n(186433);
    } finally {
        n(837921).Ay.indexLoadedAsync();
    }
})();
