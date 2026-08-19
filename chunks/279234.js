"use strict";
n.d(t, { P: () => _, x: () => E });
var i = n(941426),
    r = n(31436);
let a = null,
    s = new i.Vy("libdiscore");
function l(e) {
    s.error(e);
}
function o(e) {
    s.warn(e);
}
function d(e) {
    s.info(e);
}
function c(e) {
    s.verbose(e);
}
function u(e) {
    s.trace(e);
}
function _() {
    return (
        null == a &&
            (a = (async () => {
                await r.Bf();
                let e = r.vZ();
                e.installLogCallback(l, o, d, c, u), await e.initLibdiscore(), (window._libdiscoreInitialized = !0);
            })()),
        a
    );
}
function E() {
    return !0 === window._libdiscoreInitialized;
}
