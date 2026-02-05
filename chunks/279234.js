"use strict";
n.d(t, { P: () => _, x: () => f });
var r = n(118356),
    i = n(31436);
let a = null,
    s = new r.Vy("libdiscore");
function o(e) {
    s.error(e);
}
function l(e) {
    s.warn(e);
}
function u(e) {
    s.info(e);
}
function c(e) {
    s.verbose(e);
}
function d(e) {
    s.trace(e);
}
function _() {
    return (
        null == a &&
            (a = (async () => {
                await i.Bf();
                let e = i.vZ();
                e.installLogCallback(o, l, u, c, d), await e.initLibdiscore(), (window._libdiscoreInitialized = !0);
            })()),
        a
    );
}
function f() {
    return !0 === window._libdiscoreInitialized;
}
