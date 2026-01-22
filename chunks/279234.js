n.d(t, {
    P: () => f,
    x: () => p,
});
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
function c(e) {
    s.info(e);
}
function u(e) {
    s.verbose(e);
}
function d(e) {
    s.trace(e);
}
function f() {
    return (
        null == a &&
            (a = (async () => {
                await i.Bf();
                let e = i.vZ();
                e.installLogCallback(o, l, c, u, d), await e.initLibdiscore(), (window._libdiscoreInitialized = !0);
            })()),
        a
    );
}
function p() {
    return !0 === window._libdiscoreInitialized;
}
