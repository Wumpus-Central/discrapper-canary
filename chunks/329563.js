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
            n(934735);
        } finally {
            n(253400).Ay.indexLoadedAsync();
        }
    }, 0);
})();
