"use strict";
n.d(t, { P: () => _, x: () => f });
var r = n(118356),
    i = n(31436);
let s = null,
    a = new r.Vy("libdiscore");
function o(e) {
    a.error(e);
}
function l(e) {
    a.warn(e);
}
function u(e) {
    a.info(e);
}
function c(e) {
    a.verbose(e);
}
function d(e) {
    a.trace(e);
}
function _() {
    return (
        null == s &&
            (s = (async () => {
                await i.Bf();
                let e = i.vZ();
                e.installLogCallback(o, l, u, c, d), await e.initLibdiscore(), (window._libdiscoreInitialized = !0);
            })()),
        s
    );
}
function f() {
    return !0 === window._libdiscoreInitialized;
}
