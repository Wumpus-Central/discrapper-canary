"use strict";
var i = n(626584),
    r = n(279234);
let a = new i.A("libdiscore");
!(async function () {
    try {
        __OVERLAY__ || (await (0, r.P)());
    } catch (e) {
        a.error("Failed to initialize libdiscore", e);
    }
    setTimeout(() => {
        try {
            n(998954);
        } finally {
            n(19575).Ay.indexLoadedAsync();
        }
    }, 0);
})();
